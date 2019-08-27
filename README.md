# electron-root-ssl-pinning

Allows you to pin your own list of root CAs into your Electron application.
If all you need is just to pin a leaf or an intermediate certificate, please use [this awesome library](https://github.com/dialogs/electron-ssl-pinning).

### Installation

```bash
yarn add electron-root-ssl-pinnning
```

---

### Usage

##### Create verifier

```js
import path from "path";

const pathToCerts = path.resolve(__dirname, "./cacert.pem");
// pass either path to "*.pem" file with all your root certificates
let verifier = createRootCaVerifier(pathToCerts);
// or an array of pem certificates itself
let verifier = createRootCaVerifier([
  `-----BEGIN CERTIFICATE-----
  MIICPzCCAcWgAwIBAgIQBVVWvPJepDU1w6QP1atFcjAKBggqhkjOPQQDAzBhMQswCQYDVQQGEwJV
  [...]
  3maTD/HMsQmP3Wyr+mt/oAIwOWZbwmSNuJ5Q3KjVSaLtx9zRSX8XAbjIho9OjIgrqJqpisXRAL34
  VOKa5Vt8sycX
  -----END CERTIFICATE-----`,
  `-----BEGIN CERTIFICATE-----
  MIIFkDCCA3igAwIBAgIQBZsbV56OITLiOQe9p3d1XDANBgkqhkiG9w0BAQwFADBiMQswCQYDVQQG
  [...]
  G48BtieVU+i2iW1bvGjUI+iLUaJW+fCmgKDWHrO8Dw9TdSmq6hN35N6MgSGtBxBHEa2HPQfRdbzP
  82Z+
  -----END CERTIFICATE-----`
  // so on
]);
```

##### Use verifier function

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
    // recommend to call `-2` always when verifier result is not `0`
    callback(-2);
  }
});
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

  callback(-2);
});
```

---

### Licence

[mit](LICENSE)
