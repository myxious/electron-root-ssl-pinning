import Certificate from "pkijs/build/Certificate";
import CertificateChainValidationEngine from "pkijs/build/CertificateChainValidationEngine";
import { createPKICertificate, findDistinguishedName, isRootCertificate } from "./utils";
import {
  ICaStore,
  CertificateVerifier,
  VerificationResult,
  ICertificateVerifyProcRequest,
  IRequestCertificate,
} from "./types";
import { commonNameOid, subjectAlternativeNameOid } from "./utils";

export function createChainVerifier(caStore: ICaStore): CertificateVerifier {
  return async (request: ICertificateVerifyProcRequest): Promise<VerificationResult> => {
    try {
      const chain = createCertificatesChainFromRequest(request);
      const isHostnameAllowed = validateHostname(request.hostname, chain[0]);

      if (!isHostnameAllowed) {
        return VerificationResult.INVALID;
      }

      const result = await verifyChain(chain, caStore);

      return result;
    } catch (err) {
      console.error(err);
      return VerificationResult.INTERNAL_ERROR;
    }
  };
}

export function createCertificatesChainFromRequest(request: ICertificateVerifyProcRequest): Certificate[] {
  const chain: Certificate[] = [];

  function getCert(requestCert: IRequestCertificate) {
    const cert = createPKICertificate(requestCert.data);
    if (!isRootCertificate(cert)) {
      chain.push(cert);

      if (requestCert.issuerCert) {
        getCert(requestCert.issuerCert);
      }
    }
  }

  getCert(request.certificate);

  return chain;
}

export async function verifyChain(chain: Certificate[], caStore: ICaStore): Promise<VerificationResult> {
  const lastIntermediateCert = chain[chain.length - 1];
  if (lastIntermediateCert) {
    const rootCaKey = findDistinguishedName(chain[chain.length - 1], "issuer");

    if (caStore[rootCaKey] !== undefined) {
      const validator = new CertificateChainValidationEngine({
        certs: [...chain, caStore[rootCaKey]],
        trustedCerts: [caStore[rootCaKey]],
      });

      const { result } = await validator.verify();

      if (result) {
        return VerificationResult.VALID;
      }
    }
  }

  return VerificationResult.INVALID;
}

export function validateHostname(hostname: string, leafCert?: Certificate) {
  if (leafCert) {
    const foundSubjectAlternativeNames =
      leafCert.extensions && leafCert.extensions.find(({ extnID }) => extnID === subjectAlternativeNameOid);
    const foundSubjectCommonName = leafCert.subject.typesAndValues.find(({ type }) => String(type) === commonNameOid);

    if (foundSubjectAlternativeNames) {
      return foundSubjectAlternativeNames.parsedValue.altNames.some((allowedName: { type: number; value: string }) =>
        isAllowedDomain(hostname, allowedName.value),
      );
    }

    if (foundSubjectCommonName) {
      return isAllowedDomain(hostname, foundSubjectCommonName.value.valueBlock.value);
    }
  }

  return false;
}

export function isAllowedDomain(hostname: string, allowedName: string) {
  const hostNameDomains: string[] = hostname.split(".").reverse();
  const allowedDomains: string[] = allowedName.split(".").reverse();
  const isTooFarSubdomain = hostNameDomains.length > allowedDomains.length;

  if (isTooFarSubdomain) {
    return false;
  }

  return allowedDomains.every((domain, index) => {
    const correspondingHostNameDomain = hostNameDomains[index] || "";
    return domain.toLowerCase() === correspondingHostNameDomain.toLowerCase() || domain === "*";
  });
}
