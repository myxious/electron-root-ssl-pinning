import { advanceTo, clear } from "jest-date-mock";
import { pki } from "node-forge";
import { isRootIssuer, getCertificatesChain, verifyChain } from "../../src/createChainVerifier";
import { ICertificateVerifyProcRequest, ICertificate, VerificationResult } from "../../src/types";
import {
  googleComRequest,
  googleComExpectedChain,
  exampleOrgRequest,
  exampleOrgExpectedChain,
  rootCertificate,
  intermediateCertificate,
} from "./data/other";
import { googleCom, docsGoogleCom, letsEncrypt, exampleOrg, invalid } from "./data/chains";
import { rootCertificatesList } from "./data/parsePemFile";
import { disableConsoleError, enableConsoleError, predefinedDate } from "../utils";

describe("'isRootIssuer' must work correctly", () => {
  test.each([[intermediateCertificate, false], [rootCertificate, true]] as Array<[ICertificate, boolean]>)(
    "should determine if given certificate is root or not",
    (certificate, expectedResult) => {
      expect(isRootIssuer(certificate)).toBe(expectedResult);
    },
  );
});

describe("'getCertificatesChain' must work correctly", () => {
  // prettier-ignore
  test.each([
    [googleComRequest, googleComExpectedChain],
    [exampleOrgRequest, exampleOrgExpectedChain],
  ] as Array<[ICertificateVerifyProcRequest, string[]]>)(
    "should return chain of certificates excluding root one",
    (request, expectedChain) => {
    expect(getCertificatesChain(request)).toEqual(expectedChain);
  });
});

describe("'verifyChain' must work correctly", () => {
  let rootCAStore: pki.CAStore;

  beforeAll(() => {
    advanceTo(predefinedDate);
    rootCAStore = pki.createCaStore(rootCertificatesList);
  });

  afterAll(() => {
    clear();
  });

  test.each([{ chain: googleCom }, { chain: exampleOrg }, { chain: docsGoogleCom }, { chain: letsEncrypt }])(
    "should return VALID",
    ({ chain }) => {
      expect(verifyChain(chain, rootCAStore)).toBe(VerificationResult.VALID);
    },
  );

  test("should return INVALID", () => {
    disableConsoleError();
    expect(verifyChain(invalid, rootCAStore)).toBe(VerificationResult.INVALID);
    enableConsoleError();
  });

  test("should return INTERNAL_ERROR", () => {
    disableConsoleError();
    expect(verifyChain(["", ""], rootCAStore)).toBe(VerificationResult.INTERNAL_ERROR);
    enableConsoleError();
  });
});
