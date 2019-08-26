import { advanceTo, clear } from "jest-date-mock";
import path from "path";
import { rootCaList } from "./testSamples/rootCaList";
import { CertificateVerifier, VerificationResult } from "../../src/types";
import { predefinedDate } from "../utils";
import { createRootCaVerifier } from "../../src";
import {
  redditCom,
  firebaseCom,
  exampleOrg,
  pgGateway,
  domainWithExpiredCert,
  untrustedRoot,
  selfSigned,
  wrongHostRequest,
  youtubeComRequest,
} from "./testSamples/requests";

describe("'createRootCaVerifier' must work correctly", () => {
  beforeAll(() => {
    advanceTo(predefinedDate);
  });

  afterAll(() => {
    clear();
  });

  let verifierBasedOnFile: CertificateVerifier;
  let verifierBasedOnArray: CertificateVerifier;

  test("should create verifier with given path to '*.pem' file without an error", () => {
    const pathname = path.resolve(__dirname, "./testSamples/cacert.pem");
    expect(() => {
      verifierBasedOnFile = createRootCaVerifier(pathname);
    }).not.toThrow();
  });

  test("should create verifier with given array of pem without an error", () => {
    expect(() => {
      verifierBasedOnArray = createRootCaVerifier(rootCaList);
    }).not.toThrow();
  });

  // TODO: add more samples
  test.each`
    request                  | expectedResult
    ${redditCom}             | ${VerificationResult.VALID}
    ${firebaseCom}           | ${VerificationResult.VALID}
    ${exampleOrg}            | ${VerificationResult.VALID}
    ${pgGateway}             | ${VerificationResult.VALID}
    ${domainWithExpiredCert} | ${VerificationResult.INVALID}
    ${untrustedRoot}         | ${VerificationResult.INVALID}
    ${selfSigned}            | ${VerificationResult.INVALID}
    ${wrongHostRequest}      | ${VerificationResult.INVALID}
    ${youtubeComRequest}     | ${VerificationResult.VALID}
  `("verifier should return $expectedResult ($request.hostname)", async ({ request, expectedResult }) => {
    expect(await verifierBasedOnFile(request)).toEqual(expectedResult);
    expect(await verifierBasedOnArray(request)).toEqual(expectedResult);
  });
});
