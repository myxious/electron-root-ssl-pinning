import flow from "lodash.flow";
import { CreateRootCAVerifier, RootCertificatesList, ICaStore, CertificateVerifier, RootCertificates } from "./types";
import { parsePemFile } from "./parsePemFile";
import { createPKICertificate, isRootCertificate, findDistinguishedName } from "./utils";
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
export function determineTypeOfGivenArgument(rootCertificates: RootCertificates): RootCertificatesList {
  if (typeof rootCertificates === "string") {
    return parsePemFile(rootCertificates);
  } else if (Array.isArray(rootCertificates)) {
    return rootCertificates;
  }

  throw new Error("You have to provide a path to '*.pem' file or an array of root CA");
}

/**
 * Create root CA store dictionary: { ['* commonName * organizationName * organizationalUnitName *']: PKICertificate }
 */
export function createCAStore(rootCertificatesList: RootCertificatesList): ICaStore {
  try {
    return rootCertificatesList.reduce((dictionary: ICaStore, pem) => {
      const pkiCert = createPKICertificate(pem);
      // TODO: add time validation?
      if (!isRootCertificate(pkiCert)) {
        throw new Error(`Certificate '${pem.slice(0, 25)}...' is not a root CA`);
      }

      const dn = findDistinguishedName(pkiCert, "subject");
      dictionary[dn] = pkiCert;

      return dictionary;
    }, {});
  } catch (err) {
    console.error("An error occurred during creation of CA store. Please check correctness of your root certificates.");
    throw err;
  }
}
