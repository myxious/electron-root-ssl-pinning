import { CertificatePrincipal } from "electron";

export type RootCertificates = string | RootCertificatesList;

export type RootCertificatesList = string[];

export type CreateRootCAVerifier = (rootCertificates: RootCertificates) => CertificateVerifier;

export type CertificateVerifier = (request: ICertificateVerifyProcRequest) => VerificationResult;

export enum VerificationResult {
  VALID = 0,
  INVALID = -2,
  INTERNAL_ERROR = -3,
}

export type CertificatesChain = string[];

export interface IReadCertResult {
  result: string | undefined;
  isEnd: boolean;
}

export interface ICertificate {
  data: string;
  fingerprint: string;
  issuer: CertificatePrincipal;
  issuerCert?: ICertificate;
  issuerName: string;
  serialNumber: string;
  subject: CertificatePrincipal;
  subjectName: string;
  validExpiry: number;
  validStart: number;
}

export interface ICertificateVerifyProcRequest {
  hostname: string;
  certificate: ICertificate;
  verificationResult: string;
  errorCode: number;
}
