import { session, BrowserWindow } from "electron";
import { createChainVerifier } from "../../src/createChainVerifier";
import { sampleRootCertDictionary } from "../integration/data/sampleRootCertDictionary";
import { CertificateVerifier, VerificationResult } from "../../src/types";

describe.skip("Validation must work correctly with real domains", () => {
  let sslVerifier: CertificateVerifier;

  beforeAll(() => {
    // TODO: fix
    sslVerifier = createChainVerifier(sampleRootCertDictionary);
  });

  test.each(["https://www.example.org", "https://badssl.com"])("must return VALID status for URL %p", async URL => {
    let result;

    const ses = session.fromPartition(`test_${URL}`);
    ses.setCertificateVerifyProc((request, callback) => {
      result = sslVerifier(request);
      callback(0);
    });

    const window = new BrowserWindow({ webPreferences: { session: ses } });
    await window.loadURL(URL);

    expect(result).toBe(VerificationResult.VALID);
  });

  test.each(["https://expired.badssl.com"])("must return INVALID status for URL %p", async URL => {
    let result;

    const ses = session.fromPartition(`test_${URL}`);
    ses.setCertificateVerifyProc((request, callback) => {
      result = sslVerifier(request);
      callback(0);
    });

    const window = new BrowserWindow({ webPreferences: { session: ses } });
    await window.loadURL(URL);

    expect(result).toBe(VerificationResult.INVALID);
  });
});
