# electron-root-ssl-pinning

Allows you to pin your own list of root CAs into your Electron application.
If all you need is just to pin a leaf or an intermediate certificate, please use [this awesome library](https://github.com/dialogs/electron-ssl-pinning).

### Installation

```bash
yarn add electron-root-ssl-pinnning
```

### Usage

```javascript
import { createRootCaVerifier } from "electron-root-ssl-pinning";
import { session } from "electron";
import path from "path";

const pathToCerts = path.resolve(__dirname, "./cacert.pem");
const sslVerifier = createRootCaVerifier(pathToCerts);

// TODO: UPDATE DESCRIPTION
export function certificatePinning() {
  session.defaultSession.setCertificateVerifyProc(async (request, callback) => {
    const result = await sslVerifier(request);
    if (result === 0) {
      callback(0);
    } else {
      callback(-2);
    }
  });
}
```

### Licence

[MIT](LICENSE)
