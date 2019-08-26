import fs from "fs";
import LineByLineReader, { ILineReader } from "n-readlines";
import { RootCertificatesList, IReadCertResult } from "./types";

export function parsePemFile(pathname: string): RootCertificatesList {
  checkFileExistence(pathname);

  const rootCertificatesList: string[] = [];
  const lineReader = new LineByLineReader(pathname);
  let iteration: IReadCertResult;

  do {
    iteration = findAndReadCertificate(lineReader);
    if (typeof iteration.result === "string") {
      rootCertificatesList.push(iteration.result);
    }
  } while (iteration.isEnd === false);

  if (rootCertificatesList.length === 0) {
    throw new Error(`File ${pathname} does not contain any certificates`);
  }

  return rootCertificatesList;
}

export function checkFileExistence(pathname: string) {
  const error = new Error(
    `File '${pathname}' does not exist. Please check correct pathname to your root CA '*.pem' file.`,
  );
  if (!pathname) {
    throw error;
  }

  const result = fs.existsSync(pathname);
  if (result === false) {
    throw error;
  }
}

export function findAndReadCertificate(lineReader: ILineReader): IReadCertResult {
  let currentLine: false | Buffer;
  let currentString: string;
  let certificate = "";

  do {
    currentLine = lineReader.next();
    if (currentLine === false) {
      return { result: undefined, isEnd: true };
    }
    currentString = currentLine.toString("ascii");
  } while (!currentString.startsWith("-----BEGIN CERTIFICATE-----"));

  updateCertificateString();

  do {
    currentLine = lineReader.next();
    if (currentLine === false) {
      return { result: undefined, isEnd: true };
    }
    currentString = currentLine.toString("ascii");
    updateCertificateString();
  } while (!currentString.startsWith("-----END CERTIFICATE-----"));

  return {
    result: certificate.trim(),
    isEnd: false,
  };

  function updateCertificateString() {
    certificate += currentString.trim() + "\n";
  }
}
