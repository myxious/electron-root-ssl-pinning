import { session, BrowserWindow } from "electron";
import { createRootCaVerifier } from "../../src";
import { rootCaList } from "../integration/testSamples/rootCaList";
import { CertificateVerifier, VerificationResult } from "../../src/types";

describe("Validation must work correctly with real domains", () => {
  let sslVerifier: CertificateVerifier;

  beforeAll(() => {
    sslVerifier = createRootCaVerifier(rootCaList);
    jest.setTimeout(15000);
  });

  test.each([
    "https://www.google.com",
    "https://www.reddit.com",
    "https://youtube.com",
    "https://www.example.org",
    "https://badssl.com",
  ])("must return VALID status for URL %p", async URL => {
    let result;

    const ses = session.fromPartition(`test_${URL}`);
    ses.setCertificateVerifyProc(async (request, callback) => {
      result = await sslVerifier(request);
      callback(0);
    });

    const window = new BrowserWindow({ webPreferences: { session: ses } });
    await window.loadURL(URL);

    expect(result).toBe(VerificationResult.VALID);
  });

  test.each([
    "https://expired.badssl.com",
    "https://wrong.host.badssl.com",
    "https://self-signed.badssl.com",
    "https://untrusted-root.badssl.com",
  ])("must return INVALID status for URL %p", async URL => {
    let result;

    const ses = session.fromPartition(`test_${URL}`);
    ses.setCertificateVerifyProc(async (request, callback) => {
      result = await sslVerifier(request);
      callback(0);
    });

    const window = new BrowserWindow({ webPreferences: { session: ses } });
    await window.loadURL(URL);

    expect(result).toBe(VerificationResult.INVALID);
  });
});
