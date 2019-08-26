import LineByLineReader from "n-readlines";
import path from "path";
import {
  rootCertificate as expectedCertificate,
  rootCertificatesList as expectedCertificatesList,
} from "./testSamples/parsePemFile";
import { checkFileExistence, findAndReadCertificate, parsePemFile } from "../../src/parsePemFile";

const multipleCerts = path.resolve(__dirname, "./testSamples/multipleCaCerts.pem");
const singleCert = path.resolve(__dirname, "./testSamples/singleCaCert.pem");
const emptyCert = path.resolve(__dirname, "./testSamples/empty.pem");
const nonExistingCert = path.resolve(__dirname, "./testSamples/__file_that_does_not_exist__.jpg");

describe("'checkFileExistence' must work correctly", () => {
  test("should not throw an error if file exists", () => {
    expect(() => checkFileExistence(multipleCerts)).not.toThrow();
  });

  test.each([nonExistingCert, "./emptyPath", ""])("should throw an error if file doesn't exist", pathname => {
    expect(() => checkFileExistence(pathname)).toThrowError(/does not exist/);
  });
});

describe("'findAndReadCertificate' must work correctly", () => {
  let lineReader: LineByLineReader;

  beforeAll(() => {
    lineReader = new LineByLineReader(singleCert);
  });

  test("should return a certificate and should not set the end file flag", () => {
    const result = findAndReadCertificate(lineReader);
    expect(result).toEqual({
      result: expectedCertificate,
      isEnd: false,
    });
  });

  test("should not return a certificate and should set the end file flag", () => {
    const result = findAndReadCertificate(lineReader);
    expect(result).toEqual({
      result: undefined,
      isEnd: true,
    });
  });
});

describe("'parsePemFile' must work correctly", () => {
  test("should collect all certificates", () => {
    expect(parsePemFile(multipleCerts)).toEqual(expectedCertificatesList);
  });

  test("should throw an error if no certificates found", () => {
    expect(() => parsePemFile(emptyCert)).toThrowError(/does not contain any certificates/);
  });
});
