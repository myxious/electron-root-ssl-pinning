import Certificate from "pkijs/build/Certificate";
import { advanceTo, clear } from "jest-date-mock";
import { createCAStore } from "../../src/index";
import {
  createCertificatesChainFromRequest,
  validateHostname,
  verifyChain,
  isAllowedDomain,
} from "../../src/createChainVerifier";
import { createPKICertificate, isRootCertificate, findDistinguishedName, removePemArmoring } from "../../src/utils";
import {
  globalSignRootCA,
  globalSignRootCAR2,
  geoTrustGlobalCA,
  goDaddyClass2CA,
  digiCertGlobalRootCA,
  digiCertHighAssuranceEVRootCA,
  dsTRootCAX3,
  comodoEccCertificationAuthority,
  globalSignRootCAR3,
  dTrustRootClass3CA22009,
  digiCertGlobalRootG2,
  digiCertGlobalRootG3,
  globalSignEccRootCAR4,
  amazonRootCA1,
  googleComLeaf,
  googleComIntermediate,
  exampleOrgLeaf,
  exampleOrgIntermediate,
  ecc256Leaf,
  ecc256Intermediate,
  expiredLeaf,
  expiredIntermediate,
  comodoRSACertificationAuthority,
  untrustedLeaf,
  untrustedIntermediate,
} from "./testSamples/pem";
import {
  globalSignRootCA as unarmoredGlobalSignRootCA,
  globalSignRootCAR2 as unarmoredGlobalSignRootCAR2,
  geoTrustGlobalCA as unarmoredGeoTrustGlobalCA,
  goDaddyClass2CA as unarmoredGoDaddyClass2CA,
} from "./testSamples/unarmoredPem";
import { VerificationResult } from "../../src/types";
import {
  googleComRequest,
  exampleOrgRequest,
  selfSignedRequest,
  wrongHostRequest,
  youtubeComRequest,
} from "./testSamples/requests";
import { disableConsole, enableConsole, predefinedDate } from "../utils";

const pemCAList = [
  globalSignRootCA,
  globalSignRootCAR2,
  geoTrustGlobalCA,
  goDaddyClass2CA,
  digiCertGlobalRootCA,
  digiCertHighAssuranceEVRootCA,
  dsTRootCAX3,
  comodoEccCertificationAuthority,
  globalSignRootCAR3,
  dTrustRootClass3CA22009,
  digiCertGlobalRootG2,
  digiCertGlobalRootG3,
  globalSignEccRootCAR4,
  amazonRootCA1,
];

describe("'createCAStore' must work correctly", () => {
  test("should not throw an error", () => {
    expect(() => createCAStore(pemCAList)).not.toThrow();
  });

  test("should throw an error if any certificate is not a root CA", () => {
    disableConsole("error");
    expect(() => createCAStore([globalSignRootCA, googleComLeaf])).toThrowError(/is not a root CA/);
    enableConsole("error");
  });

  test("should throw an error if any certificate in the list is invalid", () => {
    disableConsole("error");
    expect(() => createCAStore(["💩"])).toThrow();
    enableConsole("error");
  });

  test("should create a correct dictionary", () => {
    const caDictionary = createCAStore(pemCAList);
    expect(Object.keys(caDictionary)).toEqual([
      "* GlobalSign Root CA * GlobalSign nv-sa * Root CA *",
      "* GlobalSign * GlobalSign * GlobalSign Root CA - R2 *",
      "* GeoTrust Global CA * GeoTrust Inc. *",
      "* The Go Daddy Group, Inc. * Go Daddy Class 2 Certification Authority *",
      "* DigiCert Global Root CA * DigiCert Inc * www.digicert.com *",
      "* DigiCert High Assurance EV Root CA * DigiCert Inc * www.digicert.com *",
      "* DST Root CA X3 * Digital Signature Trust Co. *",
      "* COMODO ECC Certification Authority * COMODO CA Limited *",
      "* GlobalSign * GlobalSign * GlobalSign Root CA - R3 *",
      "* D-TRUST Root Class 3 CA 2 2009 * D-Trust GmbH *",
      "* DigiCert Global Root G2 * DigiCert Inc * www.digicert.com *",
      "* DigiCert Global Root G3 * DigiCert Inc * www.digicert.com *",
      "* GlobalSign * GlobalSign * GlobalSign ECC Root CA - R4 *",
      "* Amazon Root CA 1 * Amazon *",
    ]);
    Object.values(caDictionary).forEach(value => {
      expect(value).toBeInstanceOf(Certificate);
    });
  });
});

describe("'createPKICertificate' must work correctly", () => {
  test.each(pemCAList)("should create an instance of Certificate", pem => {
    expect(() => createPKICertificate(pem)).not.toThrow();
    expect(createPKICertificate(pem)).toBeInstanceOf(Certificate);
  });
});

describe("'isRootCertificate' must work correctly", () => {
  test.each`
    pem                                | expected
    ${googleComLeaf}                   | ${false}
    ${googleComIntermediate}           | ${false}
    ${globalSignRootCA}                | ${true}
    ${globalSignRootCAR2}              | ${true}
    ${geoTrustGlobalCA}                | ${true}
    ${goDaddyClass2CA}                 | ${true}
    ${digiCertGlobalRootCA}            | ${true}
    ${digiCertHighAssuranceEVRootCA}   | ${true}
    ${dsTRootCAX3}                     | ${true}
    ${comodoEccCertificationAuthority} | ${true}
    ${globalSignRootCAR3}              | ${true}
    ${dTrustRootClass3CA22009}         | ${true}
    ${digiCertGlobalRootG2}            | ${true}
    ${digiCertGlobalRootG3}            | ${true}
    ${globalSignEccRootCAR4}           | ${true}
    ${amazonRootCA1}                   | ${true}
  `("should return $expected", ({ pem, expected }) => {
    expect(isRootCertificate(createPKICertificate(pem))).toBe(expected);
  });
});

describe("'findDistinguishedName' must work correctly", () => {
  test.each`
    pem                                | expectedDN
    ${globalSignRootCA}                | ${"* GlobalSign Root CA * GlobalSign nv-sa * Root CA *"}
    ${globalSignRootCAR2}              | ${"* GlobalSign * GlobalSign * GlobalSign Root CA - R2 *"}
    ${goDaddyClass2CA}                 | ${"* The Go Daddy Group, Inc. * Go Daddy Class 2 Certification Authority *"}
    ${geoTrustGlobalCA}                | ${"* GeoTrust Global CA * GeoTrust Inc. *"}
    ${digiCertGlobalRootCA}            | ${"* DigiCert Global Root CA * DigiCert Inc * www.digicert.com *"}
    ${digiCertHighAssuranceEVRootCA}   | ${"* DigiCert High Assurance EV Root CA * DigiCert Inc * www.digicert.com *"}
    ${dsTRootCAX3}                     | ${"* DST Root CA X3 * Digital Signature Trust Co. *"}
    ${comodoEccCertificationAuthority} | ${"* COMODO ECC Certification Authority * COMODO CA Limited *"}
    ${globalSignRootCAR3}              | ${"* GlobalSign * GlobalSign * GlobalSign Root CA - R3 *"}
    ${dTrustRootClass3CA22009}         | ${"* D-TRUST Root Class 3 CA 2 2009 * D-Trust GmbH *"}
    ${digiCertGlobalRootG2}            | ${"* DigiCert Global Root G2 * DigiCert Inc * www.digicert.com *"}
    ${digiCertGlobalRootG3}            | ${"* DigiCert Global Root G3 * DigiCert Inc * www.digicert.com *"}
    ${globalSignEccRootCAR4}           | ${"* GlobalSign * GlobalSign * GlobalSign ECC Root CA - R4 *"}
    ${amazonRootCA1}                   | ${"* Amazon Root CA 1 * Amazon *"}
  `("should return $expectedDN", ({ pem, expectedDN }) => {
    // TODO: add tests with issuer
    const cert = createPKICertificate(pem);
    expect(findDistinguishedName(cert, "subject")).toBe(expectedDN);
  });
});

describe("'removePemArmoring' must work correctly", () => {
  test.each`
    pem                   | unarmoredPem
    ${globalSignRootCA}   | ${unarmoredGlobalSignRootCA}
    ${globalSignRootCAR2} | ${unarmoredGlobalSignRootCAR2}
    ${geoTrustGlobalCA}   | ${unarmoredGeoTrustGlobalCA}
    ${goDaddyClass2CA}    | ${unarmoredGoDaddyClass2CA}
  `("should correctly remove pem armor", ({ pem, unarmoredPem }) => {
    expect(removePemArmoring(pem)).toBe(unarmoredPem);
  });
});

describe("'createCertificatesChainFromRequest' must work correctly", () => {
  test.each`
    request              | length
    ${googleComRequest}  | ${2}
    ${exampleOrgRequest} | ${2}
    ${selfSignedRequest} | ${0}
  `("should create a certificate chain with length equal to $length ($request.hostname)", ({ request, length }) => {
    const chain = createCertificatesChainFromRequest(request);
    expect(chain.length).toBe(length);
    chain.forEach(certificate => {
      expect(certificate).toBeInstanceOf(Certificate);
    });
  });
});

describe("'validateHostname' must work correctly", () => {
  test.each`
    request              | expectedResult
    ${googleComRequest}  | ${true}
    ${exampleOrgRequest} | ${true}
    ${selfSignedRequest} | ${true}
    ${wrongHostRequest}  | ${false}
    ${youtubeComRequest} | ${true}
  `("should return $expectedResult ($request.hostname)", ({ request, expectedResult }) => {
    expect(validateHostname(request.hostname, createPKICertificate(request.certificate.data))).toBe(expectedResult);
  });
});

describe("'verifyChain' must work correctly", () => {
  beforeAll(() => {
    advanceTo(predefinedDate);
  });

  afterAll(() => {
    clear();
  });

  test.each`
    leafPem           | intermediatePem           | rootPem                            | expectedResult
    ${googleComLeaf}  | ${googleComIntermediate}  | ${globalSignRootCAR2}              | ${VerificationResult.VALID}
    ${exampleOrgLeaf} | ${exampleOrgIntermediate} | ${digiCertGlobalRootCA}            | ${VerificationResult.VALID}
    ${ecc256Leaf}     | ${ecc256Intermediate}     | ${digiCertGlobalRootCA}            | ${VerificationResult.VALID}
    ${expiredLeaf}    | ${expiredIntermediate}    | ${comodoRSACertificationAuthority} | ${VerificationResult.INVALID}
    ${untrustedLeaf}  | ${untrustedIntermediate}  | ${comodoRSACertificationAuthority} | ${VerificationResult.INVALID}
    ${ecc256Leaf}     | ${untrustedIntermediate}  | ${digiCertGlobalRootCA}            | ${VerificationResult.INVALID}
  `("should return $expectedResult", async ({ leafPem, intermediatePem, rootPem, expectedResult }) => {
    const chain = [createPKICertificate(leafPem), createPKICertificate(intermediatePem)];
    const caStore = createCAStore([rootPem]);
    expect(await verifyChain(chain, caStore)).toEqual(expectedResult);
  });

  test(`should return ${VerificationResult.INVALID} when chain is empty`, async () => {
    const caStore = createCAStore([globalSignRootCAR2]);
    expect(await verifyChain([], caStore)).toEqual(VerificationResult.INVALID);
  });
});

describe("'isAllowedDomain' must work correctly", () => {
  test.each`
    hostname                   | allowedName       | expectedResult
    ${"google.com"}            | ${"*.google.com"} | ${true}
    ${"www.google.com"}        | ${"*.google.com"} | ${true}
    ${"docs.google.com"}       | ${"*.google.com"} | ${true}
    ${"empty.docs.google.com"} | ${"*.google.com"} | ${false}
    ${"example.org"}           | ${"*.google.com"} | ${false}
    ${"example.org"}           | ${""}             | ${false}
  `("should return $expectedResult ($hostname)", ({ hostname, allowedName, expectedResult }) => {
    expect(isAllowedDomain(hostname, allowedName)).toBe(expectedResult);
  });
});
