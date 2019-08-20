import flow from "lodash.flow";
import { pki } from "node-forge";
import { CreateRootCAVerifier, RootCertificatesList, CertificateVerifier, RootCertificates } from "./types";
import { parsePemFile } from "./parsePemFile";
import { createChainVerifier } from "./createChainVerifier";

export const createRootCaVerifier: CreateRootCAVerifier = rootCertificates =>
  flow(
    determineTypeOfGivenArgument,
    createCAStore,
    createChainVerifier,
  )(rootCertificates) as CertificateVerifier;

/**
 * Determine if 'rootCertificates' is either a pathname to '*.pem' file or an array of certificates
 */
function determineTypeOfGivenArgument(rootCertificates: RootCertificates): RootCertificatesList {
  if (typeof rootCertificates === "string") {
    return parsePemFile(rootCertificates);
  } else if (Array.isArray(rootCertificates)) {
    return rootCertificates;
  }

  throw new Error("You have to provide a path to '*.pem' file or an array of root CA");
}

/**
 * Create PKI root certificates store
 */
function createCAStore(rootCertificatesList: RootCertificatesList) {
  try {
    return pki.createCaStore(rootCertificatesList);
  } catch (err) {
    console.error("An error occurred during creation of CA store. Please check correctness of your root certificates.");
    throw err;
  }
}
