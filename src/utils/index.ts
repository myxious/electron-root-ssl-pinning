import * as asn1js from "asn1js";
import Certificate from "pkijs/build/Certificate";

export const commonNameOid = "2.5.4.3";
export const subjectAlternativeNameOid = "2.5.29.17";
const organizationNameOid = "2.5.4.10";
const organizationalUnitNameOid = "2.5.4.11";

/**
 * Create PKI.JS Certificate instance by pem string
 */
export function createPKICertificate(pem: string): Certificate {
  const certArrayBuffer = convertPemToArrayBuffer(removePemArmoring(pem));
  const asn1data = asn1js.fromBER(certArrayBuffer);

  return new Certificate({ schema: asn1data.result });
}

/**
 * Find certificate issuer's common name in the pki.js Certificate instance
 */
export function findDistinguishedName(pkiCert: Certificate, who: "subject" | "issuer") {
  const separator = " * ";

  const result = [commonNameOid, organizationNameOid, organizationalUnitNameOid].reduce((distinguishedName, oid) => {
    const foundAttribute = pkiCert[who].typesAndValues.find(({ type }) => String(type) === oid);

    if (foundAttribute !== undefined) {
      return distinguishedName + separator + foundAttribute.value.valueBlock.value;
    } else {
      return distinguishedName;
    }
  }, "");

  return (result + separator).trim();
}

/**
 * Checks if given certificate is root or not
 */
export function isRootCertificate(cert: Certificate) {
  const issuerDN = findDistinguishedName(cert, "issuer");
  const subjectDN = findDistinguishedName(cert, "subject");

  return issuerDN === subjectDN;
}

/**
 * Removes '-----BEGIN CERTIFICATE-----' and '-----END CERTIFICATE-----' of the PEM certificate string
 */
export function removePemArmoring(pemString: string) {
  const result = pemString.replace(
    /((\n|\r)?-----BEGIN CERTIFICATE-----(\n|\r)?|(\n|\r)?-----END CERTIFICATE-----(\n|\r)?)/g,
    "",
  );

  return result.trim();
}

/**
 * Converts PEM certificate string to ArrayBuffer which 'asn1js.fromBER' method accepts
 */
function convertPemToArrayBuffer(pemString: string) {
  const buffer = Buffer.from(pemString, "base64");

  return new Uint8Array(buffer).buffer;
}

/**
 * Checks the validity period of given certificate (either it's not expired or is not yet valid)
 */
export function checkValidityPeriod(cert: Certificate) {
  const currentDate = new Date();

  return currentDate >= cert.notBefore.value && currentDate <= cert.notAfter.value;
}
