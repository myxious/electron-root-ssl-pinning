# electron-root-ssl-pinning

Allows you to pin your own list of root CAs into your Electron application.
If all you need is just to pin a leaf or an intermediate certificate, please use [this awesome library](https://github.com/dialogs/electron-ssl-pinning).

### Installation

```bash
yarn add electron-root-ssl-pinnning
```

### Usage

##### Create verifier by passing a pathname to '\*.pem' file

```js
import path from "path";

const pathToCerts = path.resolve(__dirname, "./cacert.pem");
const verifier = createRootCaVerifier(pathToCerts);
```

##### Or create verifier by passing an array of root certificates

```js
const verifier = createRootCaVerifier([
  `-----BEGIN CERTIFICATE-----
  MIICPzCCAcWgAwIBAgIQBVVWvPJepDU1w6QP1atFcjAKBggqhkjOPQQDAzBhMQswCQYDVQQGEwJV
  UzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMRkwFwYDVQQLExB3d3cuZGlnaWNlcnQuY29tMSAwHgYD
  VQQDExdEaWdpQ2VydCBHbG9iYWwgUm9vdCBHMzAeFw0xMzA4MDExMjAwMDBaFw0zODAxMTUxMjAw
  MDBaMGExCzAJBgNVBAYTAlVTMRUwEwYDVQQKEwxEaWdpQ2VydCBJbmMxGTAXBgNVBAsTEHd3dy5k
  aWdpY2VydC5jb20xIDAeBgNVBAMTF0RpZ2lDZXJ0IEdsb2JhbCBSb290IEczMHYwEAYHKoZIzj0C
  AQYFK4EEACIDYgAE3afZu4q4C/sLfyHS8L6+c/MzXRq8NOrexpu80JX28MzQC7phW1FGfp4tn+6O
  YwwX7Adw9c+ELkCDnOg/QW07rdOkFFk2eJ0DQ+4QE2xy3q6Ip6FrtUPOZ9wj/wMco+I+o0IwQDAP
  BgNVHRMBAf8EBTADAQH/MA4GA1UdDwEB/wQEAwIBhjAdBgNVHQ4EFgQUs9tIpPmhxdiuNkHMEWNp
  Yim8S8YwCgYIKoZIzj0EAwMDaAAwZQIxAK288mw/EkrRLTnDCgmXc/SINoyIJ7vmiI1Qhadj+Z4y
  3maTD/HMsQmP3Wyr+mt/oAIwOWZbwmSNuJ5Q3KjVSaLtx9zRSX8XAbjIho9OjIgrqJqpisXRAL34
  VOKa5Vt8sycX
  -----END CERTIFICATE-----`
  // so on
]);
```

##### Usage of verifier

```javascript
// your main.js file
import { BrowserWindow, session } from "electron";
// [...]
const window = new BrowserWindow({
  title: "Root CAs pinning test",
  width: 1300,
  height: 800,
  webPreferences: {
    nodeIntegration: true
  }
});
// [...]
session.defaultSession.setCertificateVerifyProc(async (request, callback) => {
  /* The verifier returns a verification status code
   * `0` - VALID
   * `-2` - INVALID
   * `-3` - INTERNAL_ERROR
   */
  const result = await verifier(request);
  if (result === 0) {
    /* https://electronjs.org/docs/api/session#sessetcertificateverifyprocproc
     * `0` - Indicates success and disables Certificate Transparency verification.
     * `-2` - Indicates failure.
     * `-3` - Uses the verification result from chromium.
     */
    callback(0);
  } else {
    // recommend to call `-2` always when the verifier result is not `0`
    callback(-2);
  }
});
// [...]
```

#### If you want to _add_ a new root CA instead of replacing the entire default Chromium CA store

```js
session.defaultSession.setCertificateVerifyProc(async (request, callback) => {
  if (request.errorCode !== 0) {
    const result = await verifier(request);
    if (result === 0) {
      callback(0);
      return;
    }
  }

  callback(-3);
});
```

### Licence

[MIT](LICENSE)
