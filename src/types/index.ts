import { CertificatePrincipal } from "electron";
import Certificate from "pkijs/build/Certificate";

export type RootCertificates = string | RootCertificatesList;

export type RootCertificatesList = string[];

export interface ICaStore {
  [key: string]: Certificate | undefined;
}

export type CreateRootCAVerifier = (rootCertificates: RootCertificates) => CertificateVerifier;

export type CertificateVerifier = (request: ICertificateVerifyProcRequest) => Promise<VerificationResult>;

// TODO: result must be { result: bool, code: number, text: string }
export enum VerificationResult {
  VALID = 0,
  INVALID = -2,
  INTERNAL_ERROR = -3,
}

export interface IReadCertResult {
  result: string | undefined;
  isEnd: boolean;
}

export interface IRequestCertificate {
  data: string;
  fingerprint: string;
  issuer: CertificatePrincipal;
  issuerCert?: IRequestCertificate;
  issuerName: string;
  serialNumber: string;
  subject: CertificatePrincipal;
  subjectName: string;
  validExpiry: number;
  validStart: number;
}

export interface ICertificateVerifyProcRequest {
  hostname: string;
  certificate: IRequestCertificate;
  verificationResult: string;
  errorCode: number;
}
