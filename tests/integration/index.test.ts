import { advanceTo, clear } from "jest-date-mock";
import { pki } from "node-forge";
import path from "path";
import { createChainVerifier } from "../../src/createChainVerifier";
import { createRootCaVerifier } from "../../src/index";
import { rootCertificatesList } from "./data/sampleRootCertificatesList";
import { redditCom, firebaseCom, pgGateway, domainWithExpiredCert } from "./data/requests";
import { VerificationResult } from "../../src/types";
import { disableConsoleError, enableConsoleError, predefinedDate } from "../utils";

describe("'createChainVerifier' must work correctly", () => {
  let caStore: pki.CAStore;

  beforeAll(() => {
    caStore = pki.createCaStore(rootCertificatesList);
    advanceTo(predefinedDate);
  });

  afterAll(() => {
    clear();
  });

  test.each([redditCom, firebaseCom, pgGateway])("should validate request and return status VALID", request => {
    const verifier = createChainVerifier(caStore);
    expect(verifier(request)).toBe(VerificationResult.VALID);
  });

  test("should validate request and return status INVALID", () => {
    const verifier = createChainVerifier(caStore);
    disableConsoleError();
    expect(verifier(domainWithExpiredCert)).toBe(VerificationResult.INVALID);
    enableConsoleError();
  });

  test("should return status INTERNAL_ERROR", () => {
    const verifier = createChainVerifier(caStore);
    disableConsoleError();
    // @ts-ignore
    expect(verifier({})).toBe(VerificationResult.INTERNAL_ERROR);
    enableConsoleError();
  });
});

describe("'createRootCaVerifier' must work correctly", () => {
  test("must work with given certificates array", () => {
    const verifier = createRootCaVerifier(rootCertificatesList);
    expect(verifier(redditCom)).toBe(VerificationResult.VALID);
    disableConsoleError();
    expect(verifier(domainWithExpiredCert)).toBe(VerificationResult.INVALID);
    enableConsoleError();
  });

  test("must work with given path to '*.pem' file", () => {
    const pathname = path.resolve(__dirname, "./data/cacert.pem");
    const verifier = createRootCaVerifier(pathname);
    expect(verifier(redditCom)).toBe(VerificationResult.VALID);
    disableConsoleError();
    expect(verifier(domainWithExpiredCert)).toBe(VerificationResult.INVALID);
    enableConsoleError();
  });
});
