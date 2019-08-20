import LineByLineReader from "n-readlines";
import path from "path";
import {
  rootCertificate as expectedCertificate,
  rootCertificatesList as expectedCertificatesList,
} from "./data/parsePemFile";
import { checkFileExistence, findAndReadCertificate, parsePemFile } from "../../src/parsePemFile";

const pathToSamplePem = path.resolve(__dirname, "./data/multipleCaCerts.pem");

describe("'checkFileExistence' must work correctly", () => {
  test("should not throw an error if file exists", () => {
    expect(() => checkFileExistence(pathToSamplePem)).not.toThrow();
  });

  test.each([path.resolve(__dirname, "./data/__file_that_does_not_exist__.jpg"), "./emptyPath", ""])(
    "should throw an error if file doesn't exist",
    pathname => {
      expect(() => checkFileExistence(pathname)).toThrowError(/does not exist/);
    },
  );
});

describe("'findAndReadCertificate' must work correctly", () => {
  let lineReader: LineByLineReader;

  beforeAll(() => {
    lineReader = new LineByLineReader(path.resolve(__dirname, "./data/singleCaCert.pem"));
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
    expect(parsePemFile(pathToSamplePem)).toEqual(expectedCertificatesList);
  });

  test("should throw an error if no certificates found", () => {
    const pathToEmptyFile = path.resolve(__dirname, "./data/empty.pem");
    expect(() => parsePemFile(pathToEmptyFile)).toThrowError(/does not contain any certificates/);
  });
});
