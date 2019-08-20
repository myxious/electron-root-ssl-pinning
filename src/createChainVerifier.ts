import { pki } from "node-forge";
import {
  CertificateVerifier,
  VerificationResult,
  ICertificateVerifyProcRequest,
  ICertificate,
  CertificatesChain,
} from "./types";

export function createChainVerifier(caStore: pki.CAStore): CertificateVerifier {
  return (request: ICertificateVerifyProcRequest): VerificationResult => {
    try {
      const chain = getCertificatesChain(request);
      const result = verifyChain(chain, caStore);

      return result;
    } catch (err) {
      console.error(err);
      return VerificationResult.INTERNAL_ERROR;
    }
  };
}

export function getCertificatesChain(request: ICertificateVerifyProcRequest): CertificatesChain {
  const chain: CertificatesChain = [];

  function getCert(certificate: ICertificate) {
    if (!isRootIssuer(certificate)) {
      chain.push(certificate.data);

      if (certificate.issuerCert) {
        getCert(certificate.issuerCert);
      }
    }
  }

  getCert(request.certificate);

  return chain;
}

export function isRootIssuer(certificate: ICertificate) {
  return certificate.issuer.commonName === certificate.subject.commonName;
}

export function verifyChain(chain: CertificatesChain, caStore: pki.CAStore): VerificationResult {
  let certificatesChain: pki.Certificate[];

  try {
    certificatesChain = chain.map(cert => pki.certificateFromPem(cert));
  } catch (err) {
    console.error(err);
    return VerificationResult.INTERNAL_ERROR;
  }

  try {
    pki.verifyCertificateChain(caStore, certificatesChain);
    return VerificationResult.VALID;
  } catch (err) {
    console.error(err);
    return VerificationResult.INVALID;
  }
}
