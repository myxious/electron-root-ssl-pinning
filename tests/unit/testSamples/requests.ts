import { ICertificateVerifyProcRequest } from "../../../src/types";

/* tslint:disable */
export const googleComRequest: ICertificateVerifyProcRequest = {
  hostname: "www.google.com",
  certificate: {
    data:
      "-----BEGIN CERTIFICATE-----\nMIIDzzCCAregAwIBAgIQTAKF/mTTiunPDZ51KWg/EzANBgkqhkiG9w0BAQsFADBU\nMQswCQYDVQQGEwJVUzEeMBwGA1UEChMVR29vZ2xlIFRydXN0IFNlcnZpY2VzMSUw\nIwYDVQQDExxHb29nbGUgSW50ZXJuZXQgQXV0aG9yaXR5IEczMB4XDTE5MDcyOTE4\nNDMyMloXDTE5MTAyMTE4MjMwMFowaDELMAkGA1UEBhMCVVMxEzARBgNVBAgMCkNh\nbGlmb3JuaWExFjAUBgNVBAcMDU1vdW50YWluIFZpZXcxEzARBgNVBAoMCkdvb2ds\nZSBMTEMxFzAVBgNVBAMMDnd3dy5nb29nbGUuY29tMFkwEwYHKoZIzj0CAQYIKoZI\nzj0DAQcDQgAELPYz+3+RbnpY3vzgq9yIVbLMDs0a4dZvPff4Q2qWkjqjscxL9bqx\nIfmqvVAeyZdFKKN4u5Dlq/7mWLQfvEtcU6OCAVIwggFOMBMGA1UdJQQMMAoGCCsG\nAQUFBwMBMA4GA1UdDwEB/wQEAwIHgDAZBgNVHREEEjAQgg53d3cuZ29vZ2xlLmNv\nbTBoBggrBgEFBQcBAQRcMFowLQYIKwYBBQUHMAKGIWh0dHA6Ly9wa2kuZ29vZy9n\nc3IyL0dUU0dJQUczLmNydDApBggrBgEFBQcwAYYdaHR0cDovL29jc3AucGtpLmdv\nb2cvR1RTR0lBRzMwHQYDVR0OBBYEFFJ56Q1CziCuxAyVY90CV7BMrgFDMAwGA1Ud\nEwEB/wQCMAAwHwYDVR0jBBgwFoAUd8K4UJpndnaxLcKG0IOgfqZ+ukswIQYDVR0g\nBBowGDAMBgorBgEEAdZ5AgUDMAgGBmeBDAECAjAxBgNVHR8EKjAoMCagJKAihiBo\ndHRwOi8vY3JsLnBraS5nb29nL0dUU0dJQUczLmNybDANBgkqhkiG9w0BAQsFAAOC\nAQEAqwctkMxmgivcpNL0VTvFi8aIdSF6M9TBqW1es7EbmzhoS/N8YCZwgX55naUd\nriVE/SvM1S2UCw1ErF35Bp2qfIN7/e14oepcfAwQc9ryZFJGwNr6k4tTgKrJT12t\nT8QFvy1MmX0993DZP550t7qu0xtaymrQn8356paUmkblhJLanHS4AY84cMI/WWfT\nvv5J3Os/m3uwZGrcro3HiUIBDZNrPRm9gYtx4WhmJ4FfPtkWGtjvaJPWyKmLZZA5\nOZfTbgOfuSfijWgbsOdu/A9cz2VufJGyqS2zPTtA0nLeBz8358sdkpAP7TC2VIP9\nAWBQx3SbgohiAde4zLqtz/NJfQ==\n-----END CERTIFICATE-----\n",
    issuer: {
      commonName: "Google Internet Authority G3",
      organizations: ["Google Trust Services"],
      organizationUnits: [],
      locality: "",
      state: "",
      country: "US"
    },
    issuerName: "Google Internet Authority G3",
    subject: {
      commonName: "www.google.com",
      organizations: ["Google LLC"],
      organizationUnits: [],
      locality: "Mountain View",
      state: "California",
      country: "US"
    },
    subjectName: "www.google.com",
    serialNumber: "4C0285FE64D38AE9CF0D9E7529683F13",
    validStart: 1564425802,
    validExpiry: 1571682180,
    fingerprint: "sha256/7eN7eGinc3BpdbZckdcZUqBYxGOmqbSnGnw3/tAKT7k=",
    issuerCert: {
      data:
        "-----BEGIN CERTIFICATE-----\nMIIEXDCCA0SgAwIBAgINAeOpMBz8cgY4P5pTHTANBgkqhkiG9w0BAQsFADBMMSAw\nHgYDVQQLExdHbG9iYWxTaWduIFJvb3QgQ0EgLSBSMjETMBEGA1UEChMKR2xvYmFs\nU2lnbjETMBEGA1UEAxMKR2xvYmFsU2lnbjAeFw0xNzA2MTUwMDAwNDJaFw0yMTEy\nMTUwMDAwNDJaMFQxCzAJBgNVBAYTAlVTMR4wHAYDVQQKExVHb29nbGUgVHJ1c3Qg\nU2VydmljZXMxJTAjBgNVBAMTHEdvb2dsZSBJbnRlcm5ldCBBdXRob3JpdHkgRzMw\nggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDKUkvqHv/OJGuo2nIYaNVW\nXQ5IWi01CXZaz6TIHLGp/lOJ+600/4hbn7vn6AAB3DVzdQOts7G5pH0rJnnOFUAK\n71G4nzKMfHCGUksW/mona+Y2emJQ2N+aicwJKetPKRSIgAuPOB6Aahh8Hb2XO3h9\nRUk2T0HNouB2VzxoMXlkyW7XUR5mw6JkLHnA52XDVoRTWkNty5oCINLvGmnRsJ1z\nouAqYGVQMc/7sy+/EYhALrVJEA8KbtyX+r8snwU5C1hUrwaW6MWOARa8qBpNQcWT\nkaIeoYvy/sGIJEmjR0vFEwHdp1cSaWIr6/4g72n7OqXwfinu7ZYW97EfoOSQJeAz\nAgMBAAGjggEzMIIBLzAOBgNVHQ8BAf8EBAMCAYYwHQYDVR0lBBYwFAYIKwYBBQUH\nAwEGCCsGAQUFBwMCMBIGA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFHfCuFCa\nZ3Z2sS3ChtCDoH6mfrpLMB8GA1UdIwQYMBaAFJviB1dnHB7AagbeWbSaLd/cGYYu\nMDUGCCsGAQUFBwEBBCkwJzAlBggrBgEFBQcwAYYZaHR0cDovL29jc3AucGtpLmdv\nb2cvZ3NyMjAyBgNVHR8EKzApMCegJaAjhiFodHRwOi8vY3JsLnBraS5nb29nL2dz\ncjIvZ3NyMi5jcmwwPwYDVR0gBDgwNjA0BgZngQwBAgIwKjAoBggrBgEFBQcCARYc\naHR0cHM6Ly9wa2kuZ29vZy9yZXBvc2l0b3J5LzANBgkqhkiG9w0BAQsFAAOCAQEA\nHLeJluRT7bvs26gyAZ8so81trUISd7O45skDUmAge1cnxhG1P2cNmSxbWsoiCt2e\nux9LSD+PAj2LIYRFHW31/6xoic1k4tbWXkDCjir37xTTNqRAMPUyFRWSdvt+nlPq\nwnb8Oa2I/maSJukcxDjNSfpDh/Bd1lZNgdd/8cLdsE3+wypufJ9uXO1iQpnh9zbu\nFIwsIONGl1p3A8CgxkqI/UAih3JaGOqcpcdaCIzkBaR9uYQ1X4k2Vg5APRLouzVy\n7a8IVk6wuy6pm+T7HT4LY8ibS5FEZlfAFLSW8NwsVz9SBK2Vqn1N0PIMn5xA6NZV\nc7o835DLAFshEWfC7TIe3g==\n-----END CERTIFICATE-----\n",
      issuer: {
        commonName: "GlobalSign",
        organizations: ["GlobalSign"],
        organizationUnits: ["GlobalSign Root CA - R2"],
        locality: "",
        state: "",
        country: ""
      },
      issuerName: "GlobalSign",
      subject: {
        commonName: "Google Internet Authority G3",
        organizations: ["Google Trust Services"],
        organizationUnits: [],
        locality: "",
        state: "",
        country: "US"
      },
      subjectName: "Google Internet Authority G3",
      serialNumber: "01E3A9301CFC7206383F9A531D",
      validStart: 1497484842,
      validExpiry: 1639526442,
      fingerprint: "sha256/vgzNVNTOzaG9Xl2ezIWgTCwfk6UiDXf96I/prQgfZBs="
    }
  },
  verificationResult: "net::OK",
  errorCode: 0
};

export const exampleOrgRequest: ICertificateVerifyProcRequest = {
  hostname: "www.example.org",
  certificate: {
    data:
      "-----BEGIN CERTIFICATE-----\nMIIHQDCCBiigAwIBAgIQD9B43Ujxor1NDyupa2A4/jANBgkqhkiG9w0BAQsFADBN\nMQswCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMScwJQYDVQQDEx5E\naWdpQ2VydCBTSEEyIFNlY3VyZSBTZXJ2ZXIgQ0EwHhcNMTgxMTI4MDAwMDAwWhcN\nMjAxMjAyMTIwMDAwWjCBpTELMAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3Ju\naWExFDASBgNVBAcTC0xvcyBBbmdlbGVzMTwwOgYDVQQKEzNJbnRlcm5ldCBDb3Jw\nb3JhdGlvbiBmb3IgQXNzaWduZWQgTmFtZXMgYW5kIE51bWJlcnMxEzARBgNVBAsT\nClRlY2hub2xvZ3kxGDAWBgNVBAMTD3d3dy5leGFtcGxlLm9yZzCCASIwDQYJKoZI\nhvcNAQEBBQADggEPADCCAQoCggEBANDwEnSgliByCGUZElpdStA6jGaPoCkrp9vV\nrAzPpXGSFUIVsAeSdjF11yeOTVBqddF7U14nqu3rpGA68o5FGGtFM1yFEaogEv5g\nrJ1MRY/d0w4+dw8JwoVlNMci+3QTuUKf9yH28JxEdG3J37Mfj2C3cREGkGNBnY80\neyRJRqzy8I0LSPTTkhr3okXuzOXXg38ugr1x3SgZWDNuEaE6oGpyYJIBWZ9jF3pJ\nQnucP9vTBejMh374qvyd0QVQq3WxHrogy4nUbWw3gihMxT98wRD1oKVma1NTydvt\nhcNtBfhkp8kO64/hxLHrLWgOFT/l4tz8IWQt7mkrBHjbd2XLVPkCAwEAAaOCA8Ew\nggO9MB8GA1UdIwQYMBaAFA+AYRyCMWHVLyjnjUY4tCzhxtniMB0GA1UdDgQWBBRm\nmGIC4AmRp9njNvt2xrC/oW2nvjCBgQYDVR0RBHoweIIPd3d3LmV4YW1wbGUub3Jn\nggtleGFtcGxlLmNvbYILZXhhbXBsZS5lZHWCC2V4YW1wbGUubmV0ggtleGFtcGxl\nLm9yZ4IPd3d3LmV4YW1wbGUuY29tgg93d3cuZXhhbXBsZS5lZHWCD3d3dy5leGFt\ncGxlLm5ldDAOBgNVHQ8BAf8EBAMCBaAwHQYDVR0lBBYwFAYIKwYBBQUHAwEGCCsG\nAQUFBwMCMGsGA1UdHwRkMGIwL6AtoCuGKWh0dHA6Ly9jcmwzLmRpZ2ljZXJ0LmNv\nbS9zc2NhLXNoYTItZzYuY3JsMC+gLaArhilodHRwOi8vY3JsNC5kaWdpY2VydC5j\nb20vc3NjYS1zaGEyLWc2LmNybDBMBgNVHSAERTBDMDcGCWCGSAGG/WwBATAqMCgG\nCCsGAQUFBwIBFhxodHRwczovL3d3dy5kaWdpY2VydC5jb20vQ1BTMAgGBmeBDAEC\nAjB8BggrBgEFBQcBAQRwMG4wJAYIKwYBBQUHMAGGGGh0dHA6Ly9vY3NwLmRpZ2lj\nZXJ0LmNvbTBGBggrBgEFBQcwAoY6aHR0cDovL2NhY2VydHMuZGlnaWNlcnQuY29t\nL0RpZ2lDZXJ0U0hBMlNlY3VyZVNlcnZlckNBLmNydDAMBgNVHRMBAf8EAjAAMIIB\nfwYKKwYBBAHWeQIEAgSCAW8EggFrAWkAdwCkuQmQtBhYFIe7E6LMZ3AKPDWYBPkb\n37jjd80OyA3cEAAAAWdcMZVGAAAEAwBIMEYCIQCEZIG3IR36Gkj1dq5L6EaGVycX\nsHvpO7dKV0JsooTEbAIhALuTtf4wxGTkFkx8blhTV+7sf6pFT78ORo7+cP39jkJC\nAHYAh3W/51l8+IxDmV+9827/Vo1HVjb/SrVgwbTq/16ggw8AAAFnXDGWFQAABAMA\nRzBFAiBvqnfSHKeUwGMtLrOG3UGLQIoaL3+uZsGTX3MfSJNQEQIhANL5nUiGBR6g\nl0QlCzzqzvorGXyB/yd7nttYttzo8EpOAHYAb1N2rDHwMRnYmQCkURX/dxUcEdkC\nwQApBo2yCJo32RMAAAFnXDGWnAAABAMARzBFAiEA5Hn7Q4SOyqHkT+kDsHq7ku7z\nRDuM7P4UDX2ft2Mpny0CIE13WtxJAUr0aASFYZ/XjSAMMfrB0/RxClvWVss9LHKM\nMA0GCSqGSIb3DQEBCwUAA4IBAQBzcIXvQEGnakPVeJx7VUjmvGuZhrr7DQOLeP4R\n8CmgDM1pFAvGBHiyzvCH1QGdxFl6cf7wbp7BoLCRLR/qPVXFMwUMzcE1GLBqaGZM\nv1Yh2lvZSLmMNSGRXdx113pGLCInpm/TOhfrvr0TxRImc8BdozWJavsn1N2qdHQu\nN+UBO6bQMLCD0KHEdSGFsuX6ZwAworxTg02/1qiDu7zW7RyzHvFYA4IAjpzvkPIa\nX6KjBtpdvp/aXabmL95YgBjT8WJ7pqOfrqhpcmOBZa6Cg6O1l4qbIFH/Gj9hQB5I\n0Gs4+eH6F9h3SojmPTYkT+8KuZ9w84Mn+M8qBXUQoYoKgIjN\n-----END CERTIFICATE-----\n",
    issuer: {
      commonName: "DigiCert SHA2 Secure Server CA",
      organizations: ["DigiCert Inc"],
      organizationUnits: [],
      locality: "",
      state: "",
      country: "US"
    },
    issuerName: "DigiCert SHA2 Secure Server CA",
    subject: {
      commonName: "www.example.org",
      organizations: ["Internet Corporation for Assigned Names and Numbers"],
      organizationUnits: ["Technology"],
      locality: "Los Angeles",
      state: "California",
      country: "US"
    },
    subjectName: "www.example.org",
    serialNumber: "0FD078DD48F1A2BD4D0F2BA96B6038FE",
    validStart: 1543363200,
    validExpiry: 1606910400,
    fingerprint: "sha256/klBxHFTeVG9DcODD06PsRbyWCSolpKcaGvo5avcEfrg=",
    issuerCert: {
      data:
        "-----BEGIN CERTIFICATE-----\nMIIElDCCA3ygAwIBAgIQAf2j627KdciIQ4tyS8+8kTANBgkqhkiG9w0BAQsFADBh\nMQswCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMRkwFwYDVQQLExB3\nd3cuZGlnaWNlcnQuY29tMSAwHgYDVQQDExdEaWdpQ2VydCBHbG9iYWwgUm9vdCBD\nQTAeFw0xMzAzMDgxMjAwMDBaFw0yMzAzMDgxMjAwMDBaME0xCzAJBgNVBAYTAlVT\nMRUwEwYDVQQKEwxEaWdpQ2VydCBJbmMxJzAlBgNVBAMTHkRpZ2lDZXJ0IFNIQTIg\nU2VjdXJlIFNlcnZlciBDQTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEB\nANyuWJBNwcQwFZA1W248ghX1LFy949v/cUP6ZCWA1O4Yok3wZtAKc24RmDYXZK83\nnf36QYSvx6+M/hpzTc8zl5CilodTgyu5pnVILR1WN3vaMTIa16yrBvSqXUu3R0bd\nKpPDkC55gIDvEwRqFDu1m5K+wgdlTvza/P96rtxcflUxDOg5B6TXvi/TC2rSsd9f\n/ld0Uzs1gN2ujkSYs58O09rg1/RrKatEp0tYhG2SS4HD2nOLEpdIkARFdRrdNzGX\nkujNVA075ME/OV4uuPNcfhCOhkEAjUVmR7ChZc6gqikJTvOX6+guqw9ypzAO+sf0\n/RR3w6RbKFfCs/mC/bdFWJsCAwEAAaOCAVowggFWMBIGA1UdEwEB/wQIMAYBAf8C\nAQAwDgYDVR0PAQH/BAQDAgGGMDQGCCsGAQUFBwEBBCgwJjAkBggrBgEFBQcwAYYY\naHR0cDovL29jc3AuZGlnaWNlcnQuY29tMHsGA1UdHwR0MHIwN6A1oDOGMWh0dHA6\nLy9jcmwzLmRpZ2ljZXJ0LmNvbS9EaWdpQ2VydEdsb2JhbFJvb3RDQS5jcmwwN6A1\noDOGMWh0dHA6Ly9jcmw0LmRpZ2ljZXJ0LmNvbS9EaWdpQ2VydEdsb2JhbFJvb3RD\nQS5jcmwwPQYDVR0gBDYwNDAyBgRVHSAAMCowKAYIKwYBBQUHAgEWHGh0dHBzOi8v\nd3d3LmRpZ2ljZXJ0LmNvbS9DUFMwHQYDVR0OBBYEFA+AYRyCMWHVLyjnjUY4tCzh\nxtniMB8GA1UdIwQYMBaAFAPeUDVW0Uy7ZvCj4hsbw5eyPdFVMA0GCSqGSIb3DQEB\nCwUAA4IBAQAjPt9L0jFCpbZ+QlwaRMxp0Wi0XUvgBCFsS+JtzLHgl4+mUwnNqipl\n5TlPHoOlblyYoiQm5vuh7ZPHLgLGTUq/sELfeNqzqPlt/yGFUzZgTHbO7Djc1lGA\n8MXW5dRNJ2Srm8c+cftIl7gzbckTB+6WohsYFfZcTEDts8Ls/3HB40f/1LkAtDdC\n2iDJ6m6K7hQGrn2iWZiIqBtvLfTyyRRfJs8sjX7tN8Cp1Tm5gr8ZDOo0rwAhaPit\nc+LJMto4JQtV05od8GiG7S5BNO98pVAdvzr508EIDObtHopYJeS4d60tbvVS3bR0\nj6tJLp07kzQoH3jOlOrHvdPJbRzeXDLz\n-----END CERTIFICATE-----\n",
      issuer: {
        commonName: "DigiCert Global Root CA",
        organizations: ["DigiCert Inc"],
        organizationUnits: ["www.digicert.com"],
        locality: "",
        state: "",
        country: "US"
      },
      issuerName: "DigiCert Global Root CA",
      subject: {
        commonName: "DigiCert SHA2 Secure Server CA",
        organizations: ["DigiCert Inc"],
        organizationUnits: [],
        locality: "",
        state: "",
        country: "US"
      },
      subjectName: "DigiCert SHA2 Secure Server CA",
      serialNumber: "01FDA3EB6ECA75C888438B724BCFBC91",
      validStart: 1362744000,
      validExpiry: 1678276800,
      fingerprint: "sha256/FUxDPEkZKcXvaG6DjjI2ZKAOag2CLMyVj7TasD5JoI8=",
      issuerCert: {
        data:
          "-----BEGIN CERTIFICATE-----\nMIIDrzCCApegAwIBAgIQCDvgVpBCRrGhdWrJWZHHSjANBgkqhkiG9w0BAQUFADBh\nMQswCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMRkwFwYDVQQLExB3\nd3cuZGlnaWNlcnQuY29tMSAwHgYDVQQDExdEaWdpQ2VydCBHbG9iYWwgUm9vdCBD\nQTAeFw0wNjExMTAwMDAwMDBaFw0zMTExMTAwMDAwMDBaMGExCzAJBgNVBAYTAlVT\nMRUwEwYDVQQKEwxEaWdpQ2VydCBJbmMxGTAXBgNVBAsTEHd3dy5kaWdpY2VydC5j\nb20xIDAeBgNVBAMTF0RpZ2lDZXJ0IEdsb2JhbCBSb290IENBMIIBIjANBgkqhkiG\n9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4jvhEXLeqKTTo1eqUKKPC3eQyaKl7hLOllsB\nCSDMAZOnTjC3U/dDxGkAV53ijSLdhwZAAIEJzs4bg7/fzTtxRuLWZscFs3YnFo97\nnh6Vfe63SKMI2tavegw5BmV/Sl0fvBf4q77uKNd0f3p4mVmFaG5cIzJLv07A6Fpt\n43C/dxC//AH2hdmoRBBYMql1GNXRor5H4idq9Joz+EkIYIvUX7Q6hL+hqkpMfT7P\nT19sdl6gSzeRntwi5m3OFBqOasv+zbMUZBfHWymeMr/y7vrTC0LUq7dBMtoM1O/4\ngdW7jVg/tRvoSSiicNoxBN33shbyTApOB6jtSj1etX+jkMOvJwIDAQABo2MwYTAO\nBgNVHQ8BAf8EBAMCAYYwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUA95QNVbR\nTLtm8KPiGxvDl7I90VUwHwYDVR0jBBgwFoAUA95QNVbRTLtm8KPiGxvDl7I90VUw\nDQYJKoZIhvcNAQEFBQADggEBAMucN6pIExIK+t1EnE9SsPTfrgT1eXkIoyQY/Esr\nhMAtudXH/vTBH1jLuG2cenTnmCmrEbXjcKChzUyImZOMkXDiqw8cvpOp/2PV5Adg\n06O/nVsJ8dWO41P0jmP6P6fbtGbfYmbW0W5BjfIttep3Sp+dWOIrWcBAI+0tKIJF\nPnlUkiaY4IBIqDfv8NZ5YBberOgOzW6sRBc4L0na4UU+Krk2U886UAb3LujEV0ls\nYSEY1QSteDwsOoBrp+uvFRTp2InBuThs4pFsiv9kuXclVzDAGySj4dzp30d8tbQk\nCAUw7C29C79Fv1C5qfPrmAESrciIxpg0X40KPMbp1ZWVbd4=\n-----END CERTIFICATE-----\n",
        issuer: {
          commonName: "DigiCert Global Root CA",
          organizations: ["DigiCert Inc"],
          organizationUnits: ["www.digicert.com"],
          locality: "",
          state: "",
          country: "US"
        },
        issuerName: "DigiCert Global Root CA",
        subject: {
          commonName: "DigiCert Global Root CA",
          organizations: ["DigiCert Inc"],
          organizationUnits: ["www.digicert.com"],
          locality: "",
          state: "",
          country: "US"
        },
        subjectName: "DigiCert Global Root CA",
        serialNumber: "083BE056904246B1A1756AC95991C74A",
        validStart: 1163116800,
        validExpiry: 1952035200,
        fingerprint: "sha256/Q0ig6URMeMsmXgWNXolEtNhPlmK9Jtslf4k0pEPHAWE="
      }
    }
  },
  verificationResult: "net::OK",
  errorCode: 0
};

export const selfSignedRequest = {
  hostname: "self-signed.badssl.com",
  certificate: {
    data:
      "-----BEGIN CERTIFICATE-----\nMIIDeTCCAmGgAwIBAgIJAK32hhGBHramMA0GCSqGSIb3DQEBCwUAMGIxCzAJBgNV\nBAYTAlVTMRMwEQYDVQQIDApDYWxpZm9ybmlhMRYwFAYDVQQHDA1TYW4gRnJhbmNp\nc2NvMQ8wDQYDVQQKDAZCYWRTU0wxFTATBgNVBAMMDCouYmFkc3NsLmNvbTAeFw0x\nOTA2MTIxNTMxNTlaFw0yMTA2MTExNTMxNTlaMGIxCzAJBgNVBAYTAlVTMRMwEQYD\nVQQIDApDYWxpZm9ybmlhMRYwFAYDVQQHDA1TYW4gRnJhbmNpc2NvMQ8wDQYDVQQK\nDAZCYWRTU0wxFTATBgNVBAMMDCouYmFkc3NsLmNvbTCCASIwDQYJKoZIhvcNAQEB\nBQADggEPADCCAQoCggEBAMIE7PiM7gTCs9hQ1XBYzJMY61yoaEmwIrX5lZ6xKyx2\nPmzAS2BMTOqytMAPgLaw+XLJhgL5XEFdEyt/ccRLvOmULlA3pmccYYz2QULFRtMW\nhyefdOsKnRFSJiFzbIRMeVXk0WvoBj1IFVKtsyjbqv9u/2CVSndrOfEk0TG23U3A\nxPxTuW1CrbV8/q71FdIzSOciccfCFHpsKOo3St/qbLVytH5aohbcabFXRNsKEqve\nww9HdFxBIuGa+RuT5q0iBikusbpJHAwnnqP7i/dAcgCskgjZjFeEU4EFy+b+a1SY\nQCeFxxC7c3DvaRhBB0VVfPlkPz0sw6l865MaTIbRyoUCAwEAAaMyMDAwCQYDVR0T\nBAIwADAjBgNVHREEHDAaggwqLmJhZHNzbC5jb22CCmJhZHNzbC5jb20wDQYJKoZI\nhvcNAQELBQADggEBAIi5u9w8mgT6ppCc7xsG+A9fI3W4z+qSKaphr5ls70GBKbiY\nYLJUYZhPfWph1qtkkU0LHFPm83Va52eIHrjXT0Ve4KtO1n0IAfItFaW62CJghGYn\njzw0ryzgC4PyFpNMnNtBroPu/bPgWiMgLONpEZhigx4Q8wf1Y/U9s+zCCxoJlaKR\nMXbuQ87X7m/9VRnxxo6Nz5Zf7OTHTpNOI6Vja0BxbmIAU6yriw9UrgibXfOj3j6n\nMTLBugUVIB0bBaasJsAMK+w4LANvapeZ0DOSnOR4KK24J0OyoF5fHmp59eM17IoF\nQqBhzpmQUgunecEW8BTqrNpG79R1u+V+4wwckPc=\n-----END CERTIFICATE-----\n",
    issuer: {
      commonName: "*.badssl.com",
      organizations: ["BadSSL"],
      organizationUnits: [],
      locality: "San Francisco",
      state: "California",
      country: "US"
    },
    issuerName: "*.badssl.com",
    subject: {
      commonName: "*.badssl.com",
      organizations: ["BadSSL"],
      organizationUnits: [],
      locality: "San Francisco",
      state: "California",
      country: "US"
    },
    subjectName: "*.badssl.com",
    serialNumber: "00ADF68611811EB6A6",
    validStart: 1560353519,
    validExpiry: 1623425519,
    fingerprint: "sha256/tsq5LrcwgePe1vtqzOeqYxsNxSTIs2YedwyA1Jxi7Ls="
  },
  verificationResult: "net::ERR_CERT_AUTHORITY_INVALID",
  errorCode: -202
};

export const wrongHostRequest = {
  hostname: "wrong.host.badssl.com",
  certificate: {
    data:
      "-----BEGIN CERTIFICATE-----\nMIIHGDCCBgCgAwIBAgIQAfICAx39qY79/w9yvlEGDTANBgkqhkiG9w0BAQsFADBN\nMQswCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMScwJQYDVQQDEx5E\naWdpQ2VydCBTSEEyIFNlY3VyZSBTZXJ2ZXIgQ0EwHhcNMTcwMzE4MDAwMDAwWhcN\nMjAwMzI1MTIwMDAwWjBnMQswCQYDVQQGEwJVUzETMBEGA1UECBMKQ2FsaWZvcm5p\nYTEVMBMGA1UEBxMMV2FsbnV0IENyZWVrMRUwEwYDVQQKEwxMdWNhcyBHYXJyb24x\nFTATBgNVBAMMDCouYmFkc3NsLmNvbTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCC\nAQoCggEBAMIE7PiM7gTCs9hQ1XBYzJMY61yoaEmwIrX5lZ6xKyx2PmzAS2BMTOqy\ntMAPgLaw+XLJhgL5XEFdEyt/ccRLvOmULlA3pmccYYz2QULFRtMWhyefdOsKnRFS\nJiFzbIRMeVXk0WvoBj1IFVKtsyjbqv9u/2CVSndrOfEk0TG23U3AxPxTuW1CrbV8\n/q71FdIzSOciccfCFHpsKOo3St/qbLVytH5aohbcabFXRNsKEqveww9HdFxBIuGa\n+RuT5q0iBikusbpJHAwnnqP7i/dAcgCskgjZjFeEU4EFy+b+a1SYQCeFxxC7c3Dv\naRhBB0VVfPlkPz0sw6l865MaTIbRyoUCAwEAAaOCA9gwggPUMB8GA1UdIwQYMBaA\nFA+AYRyCMWHVLyjnjUY4tCzhxtniMB0GA1UdDgQWBBSd7sF7gQs6R2lxGH0RN5O8\npRs/+zAjBgNVHREEHDAaggwqLmJhZHNzbC5jb22CCmJhZHNzbC5jb20wDgYDVR0P\nAQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjBrBgNVHR8E\nZDBiMC+gLaArhilodHRwOi8vY3JsMy5kaWdpY2VydC5jb20vc3NjYS1zaGEyLWc1\nLmNybDAvoC2gK4YpaHR0cDovL2NybDQuZGlnaWNlcnQuY29tL3NzY2Etc2hhMi1n\nNS5jcmwwTAYDVR0gBEUwQzA3BglghkgBhv1sAQEwKjAoBggrBgEFBQcCARYcaHR0\ncHM6Ly93d3cuZGlnaWNlcnQuY29tL0NQUzAIBgZngQwBAgMwfAYIKwYBBQUHAQEE\ncDBuMCQGCCsGAQUFBzABhhhodHRwOi8vb2NzcC5kaWdpY2VydC5jb20wRgYIKwYB\nBQUHMAKGOmh0dHA6Ly9jYWNlcnRzLmRpZ2ljZXJ0LmNvbS9EaWdpQ2VydFNIQTJT\nZWN1cmVTZXJ2ZXJDQS5jcnQwDAYDVR0TAQH/BAIwADCCAfUGCisGAQQB1nkCBAIE\nggHlBIIB4QHfAHYApLkJkLQYWBSHuxOizGdwCjw1mAT5G9+443fNDsgN3BAAAAFa\n36pBXQAABAMARzBFAiEAzR4KqC0zoD8FzR8Jk0wH3CMLf/j0s/sMFySg5gsIP3oC\nIHaSYDQXuInRJq1WHUHIwcdt7AscZAFWgEaCzh+8+QvCAHYAVhQGmi/XwuzT9eG9\nRLI+x0Z2ubyZEVzA75SYVdaJ0N0AAAFa36pCiAAABAMARzBFAiBPti1ehDk+YdyW\ns4qjScmz9kuzTWor6jQYk8/GZDwRHwIhAPvbr23VquHaId4nvBHit7YGdJXpu7En\nUZRQrU1P0lLVAHUA7ku9t3XOYLrhQmkfq+GeZqMPfl+wctiDAMR7iXqo/csAAAFa\n36pEWQAABAMARjBEAiBUQkeTNpBWju4/OXnxjOOlowEXos1XsItqfLkajzv6cQIg\nQLzLDhSKvxVRNq/4Z1rfbh8iEYM6Hj52NpO9+L0565oAdgC72d+8H4pxtZOUI5eq\nkntHOFeVCqtS6BqQlmQ2jh7RhQAAAVrfqkIWAAAEAwBHMEUCIHhqWRiCNNf8h3i2\nADwso5l22FFp8H6jBBp+6B2PaBSUAiEAmk8vYlhgaLLc0Gkc+MkUIZ9sEoLR+tOF\nBLatSTQk1EowDQYJKoZIhvcNAQELBQADggEBAGl6hl3sDaxY762cJc5fxNG9Kc/Q\nWvf5YzTLNxIuxEfTsj/Zgm+Q2hFl9enYRj4M1Weo/sw/8Jw9DGSuypOiYXCz9Ikx\n0Fc2j/Oq939JU5+ok1AikAeXna4DFTtw8ByIchrU6tbZa/JocSM0WZl7WIrgOtvw\nT+qCyI9JgYCnWRbPRfhZrlKxqQpwoP++aFV0HOBR9nj/Rzisq8ZGn7f6HKVxlqHS\nlBdhbmcHA/nHgbpwU2bmonivndvnpQHI8Fxd4BzbcRYM+ZIkATWA5/aOvH/EEIb6\nkwipaXsqHLfaJq1SY5G097HgWHWCkCUD/pxX6psTTavqftLenSd7piK3+fw=\n-----END CERTIFICATE-----\n",
    issuer: {
      commonName: "DigiCert SHA2 Secure Server CA",
      organizations: ["DigiCert Inc"],
      organizationUnits: [],
      locality: "",
      state: "",
      country: "US"
    },
    issuerName: "DigiCert SHA2 Secure Server CA",
    subject: {
      commonName: "*.badssl.com",
      organizations: ["Lucas Garron"],
      organizationUnits: [],
      locality: "Walnut Creek",
      state: "California",
      country: "US"
    },
    subjectName: "*.badssl.com",
    serialNumber: "01F202031DFDA98EFDFF0F72BE51060D",
    validStart: 1489795200,
    validExpiry: 1585137600,
    fingerprint: "sha256/2QDRg00Heknn1ymo0GXX2sS/ZxOQytHe2IcjA1VOBLI=",
    issuerCert: {
      data:
        "-----BEGIN CERTIFICATE-----\nMIIElDCCA3ygAwIBAgIQAf2j627KdciIQ4tyS8+8kTANBgkqhkiG9w0BAQsFADBh\nMQswCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMRkwFwYDVQQLExB3\nd3cuZGlnaWNlcnQuY29tMSAwHgYDVQQDExdEaWdpQ2VydCBHbG9iYWwgUm9vdCBD\nQTAeFw0xMzAzMDgxMjAwMDBaFw0yMzAzMDgxMjAwMDBaME0xCzAJBgNVBAYTAlVT\nMRUwEwYDVQQKEwxEaWdpQ2VydCBJbmMxJzAlBgNVBAMTHkRpZ2lDZXJ0IFNIQTIg\nU2VjdXJlIFNlcnZlciBDQTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEB\nANyuWJBNwcQwFZA1W248ghX1LFy949v/cUP6ZCWA1O4Yok3wZtAKc24RmDYXZK83\nnf36QYSvx6+M/hpzTc8zl5CilodTgyu5pnVILR1WN3vaMTIa16yrBvSqXUu3R0bd\nKpPDkC55gIDvEwRqFDu1m5K+wgdlTvza/P96rtxcflUxDOg5B6TXvi/TC2rSsd9f\n/ld0Uzs1gN2ujkSYs58O09rg1/RrKatEp0tYhG2SS4HD2nOLEpdIkARFdRrdNzGX\nkujNVA075ME/OV4uuPNcfhCOhkEAjUVmR7ChZc6gqikJTvOX6+guqw9ypzAO+sf0\n/RR3w6RbKFfCs/mC/bdFWJsCAwEAAaOCAVowggFWMBIGA1UdEwEB/wQIMAYBAf8C\nAQAwDgYDVR0PAQH/BAQDAgGGMDQGCCsGAQUFBwEBBCgwJjAkBggrBgEFBQcwAYYY\naHR0cDovL29jc3AuZGlnaWNlcnQuY29tMHsGA1UdHwR0MHIwN6A1oDOGMWh0dHA6\nLy9jcmwzLmRpZ2ljZXJ0LmNvbS9EaWdpQ2VydEdsb2JhbFJvb3RDQS5jcmwwN6A1\noDOGMWh0dHA6Ly9jcmw0LmRpZ2ljZXJ0LmNvbS9EaWdpQ2VydEdsb2JhbFJvb3RD\nQS5jcmwwPQYDVR0gBDYwNDAyBgRVHSAAMCowKAYIKwYBBQUHAgEWHGh0dHBzOi8v\nd3d3LmRpZ2ljZXJ0LmNvbS9DUFMwHQYDVR0OBBYEFA+AYRyCMWHVLyjnjUY4tCzh\nxtniMB8GA1UdIwQYMBaAFAPeUDVW0Uy7ZvCj4hsbw5eyPdFVMA0GCSqGSIb3DQEB\nCwUAA4IBAQAjPt9L0jFCpbZ+QlwaRMxp0Wi0XUvgBCFsS+JtzLHgl4+mUwnNqipl\n5TlPHoOlblyYoiQm5vuh7ZPHLgLGTUq/sELfeNqzqPlt/yGFUzZgTHbO7Djc1lGA\n8MXW5dRNJ2Srm8c+cftIl7gzbckTB+6WohsYFfZcTEDts8Ls/3HB40f/1LkAtDdC\n2iDJ6m6K7hQGrn2iWZiIqBtvLfTyyRRfJs8sjX7tN8Cp1Tm5gr8ZDOo0rwAhaPit\nc+LJMto4JQtV05od8GiG7S5BNO98pVAdvzr508EIDObtHopYJeS4d60tbvVS3bR0\nj6tJLp07kzQoH3jOlOrHvdPJbRzeXDLz\n-----END CERTIFICATE-----\n",
      issuer: {
        commonName: "DigiCert Global Root CA",
        organizations: ["DigiCert Inc"],
        organizationUnits: ["www.digicert.com"],
        locality: "",
        state: "",
        country: "US"
      },
      issuerName: "DigiCert Global Root CA",
      subject: {
        commonName: "DigiCert SHA2 Secure Server CA",
        organizations: ["DigiCert Inc"],
        organizationUnits: [],
        locality: "",
        state: "",
        country: "US"
      },
      subjectName: "DigiCert SHA2 Secure Server CA",
      serialNumber: "01FDA3EB6ECA75C888438B724BCFBC91",
      validStart: 1362744000,
      validExpiry: 1678276800,
      fingerprint: "sha256/FUxDPEkZKcXvaG6DjjI2ZKAOag2CLMyVj7TasD5JoI8="
    }
  },
  verificationResult: "net::ERR_CERT_COMMON_NAME_INVALID",
  errorCode: -200
};

export const youtubeComRequest = {
  hostname: "youtube.com",
  certificate: {
    data:
      "-----BEGIN CERTIFICATE-----\nMIIIIDCCBwigAwIBAgIQdFFdOvtZKGMnFerJav62lzANBgkqhkiG9w0BAQsFADBU\nMQswCQYDVQQGEwJVUzEeMBwGA1UEChMVR29vZ2xlIFRydXN0IFNlcnZpY2VzMSUw\nIwYDVQQDExxHb29nbGUgSW50ZXJuZXQgQXV0aG9yaXR5IEczMB4XDTE5MDcyOTE4\nNDQyN1oXDTE5MTAyMTE4MjMwMFowZjELMAkGA1UEBhMCVVMxEzARBgNVBAgMCkNh\nbGlmb3JuaWExFjAUBgNVBAcMDU1vdW50YWluIFZpZXcxEzARBgNVBAoMCkdvb2ds\nZSBMTEMxFTATBgNVBAMMDCouZ29vZ2xlLmNvbTBZMBMGByqGSM49AgEGCCqGSM49\nAwEHA0IABOOufVj7d5UF/N49KyXmA0Z0rlQPEicHK5CbO122uECXYbWwepNlWlqM\n7V1GF0vRutC8YyAlxrCsUmOTrpem7NWjggWlMIIFoTATBgNVHSUEDDAKBggrBgEF\nBQcDATAOBgNVHQ8BAf8EBAMCB4AwggRqBgNVHREEggRhMIIEXYIMKi5nb29nbGUu\nY29tgg0qLmFuZHJvaWQuY29tghYqLmFwcGVuZ2luZS5nb29nbGUuY29tghIqLmNs\nb3VkLmdvb2dsZS5jb22CGCouY3Jvd2Rzb3VyY2UuZ29vZ2xlLmNvbYIGKi5nLmNv\ngg4qLmdjcC5ndnQyLmNvbYIRKi5nY3BjZG4uZ3Z0MS5jb22CCiouZ2dwaHQuY26C\nFiouZ29vZ2xlLWFuYWx5dGljcy5jb22CCyouZ29vZ2xlLmNhggsqLmdvb2dsZS5j\nbIIOKi5nb29nbGUuY28uaW6CDiouZ29vZ2xlLmNvLmpwgg4qLmdvb2dsZS5jby51\na4IPKi5nb29nbGUuY29tLmFygg8qLmdvb2dsZS5jb20uYXWCDyouZ29vZ2xlLmNv\nbS5icoIPKi5nb29nbGUuY29tLmNvgg8qLmdvb2dsZS5jb20ubXiCDyouZ29vZ2xl\nLmNvbS50coIPKi5nb29nbGUuY29tLnZuggsqLmdvb2dsZS5kZYILKi5nb29nbGUu\nZXOCCyouZ29vZ2xlLmZyggsqLmdvb2dsZS5odYILKi5nb29nbGUuaXSCCyouZ29v\nZ2xlLm5sggsqLmdvb2dsZS5wbIILKi5nb29nbGUucHSCEiouZ29vZ2xlYWRhcGlz\nLmNvbYIPKi5nb29nbGVhcGlzLmNughEqLmdvb2dsZWNuYXBwcy5jboIUKi5nb29n\nbGVjb21tZXJjZS5jb22CESouZ29vZ2xldmlkZW8uY29tggwqLmdzdGF0aWMuY26C\nDSouZ3N0YXRpYy5jb22CEiouZ3N0YXRpY2NuYXBwcy5jboIKKi5ndnQxLmNvbYIK\nKi5ndnQyLmNvbYIUKi5tZXRyaWMuZ3N0YXRpYy5jb22CDCoudXJjaGluLmNvbYIQ\nKi51cmwuZ29vZ2xlLmNvbYIWKi55b3V0dWJlLW5vY29va2llLmNvbYINKi55b3V0\ndWJlLmNvbYIWKi55b3V0dWJlZWR1Y2F0aW9uLmNvbYIRKi55b3V0dWJla2lkcy5j\nb22CByoueXQuYmWCCyoueXRpbWcuY29tghphbmRyb2lkLmNsaWVudHMuZ29vZ2xl\nLmNvbYILYW5kcm9pZC5jb22CG2RldmVsb3Blci5hbmRyb2lkLmdvb2dsZS5jboIc\nZGV2ZWxvcGVycy5hbmRyb2lkLmdvb2dsZS5jboIEZy5jb4IIZ2dwaHQuY26CBmdv\nby5nbIIUZ29vZ2xlLWFuYWx5dGljcy5jb22CCmdvb2dsZS5jb22CD2dvb2dsZWNu\nYXBwcy5jboISZ29vZ2xlY29tbWVyY2UuY29tghhzb3VyY2UuYW5kcm9pZC5nb29n\nbGUuY26CCnVyY2hpbi5jb22CCnd3dy5nb28uZ2yCCHlvdXR1LmJlggt5b3V0dWJl\nLmNvbYIUeW91dHViZWVkdWNhdGlvbi5jb22CD3lvdXR1YmVraWRzLmNvbYIFeXQu\nYmUwaAYIKwYBBQUHAQEEXDBaMC0GCCsGAQUFBzAChiFodHRwOi8vcGtpLmdvb2cv\nZ3NyMi9HVFNHSUFHMy5jcnQwKQYIKwYBBQUHMAGGHWh0dHA6Ly9vY3NwLnBraS5n\nb29nL0dUU0dJQUczMB0GA1UdDgQWBBRPZJy/ftYprTgIqQTFvmZIl+XaGTAMBgNV\nHRMBAf8EAjAAMB8GA1UdIwQYMBaAFHfCuFCaZ3Z2sS3ChtCDoH6mfrpLMCEGA1Ud\nIAQaMBgwDAYKKwYBBAHWeQIFAzAIBgZngQwBAgIwMQYDVR0fBCowKDAmoCSgIoYg\naHR0cDovL2NybC5wa2kuZ29vZy9HVFNHSUFHMy5jcmwwDQYJKoZIhvcNAQELBQAD\nggEBADc7+G7Np83iC8KU6GYSKizr/2VbPPpBjR5EzXIdUpUgxWFQ7Faxd1LVhm22\nQVlmMKjjYe7JUxnaIa5Zay6pBlMr5Fq+HbSTuA63GOt4IW1CvB1zAOaJWfxGXaNX\n1Xg/740qWEDoe95h9Xm/fIcFLD86FCUITAenFKBOKdaKoBMGoDBOq7jUdn492oGB\nYi+QtXfNjvcZm0yABGTjQOtH8JzyWKx1NvNLw5gSXYH5Vmj/QzRBEED3+pIJh6vg\nKIGEhG+hCg4tx4k0nnwoHGnL4a2mcemlRIWRCcjbb/BoF+05EvQvB6PcurckBaPN\n8r7wWCxefYViIMnHiMmzPdwZYIA=\n-----END CERTIFICATE-----\n",
    issuer: {
      commonName: "Google Internet Authority G3",
      organizations: ["Google Trust Services"],
      organizationUnits: [],
      locality: "",
      state: "",
      country: "US"
    },
    issuerName: "Google Internet Authority G3",
    subject: {
      commonName: "*.google.com",
      organizations: ["Google LLC"],
      organizationUnits: [],
      locality: "Mountain View",
      state: "California",
      country: "US"
    },
    subjectName: "*.google.com",
    serialNumber: "74515D3AFB5928632715EAC96AFEB697",
    validStart: 1564425867,
    validExpiry: 1571682180,
    fingerprint: "sha256/k3rrQ1jAnzHNMCUXQZ2d8Y+k41i9X/cMK/LhjaSW9j4=",
    issuerCert: {
      data:
        "-----BEGIN CERTIFICATE-----\nMIIEXDCCA0SgAwIBAgINAeOpMBz8cgY4P5pTHTANBgkqhkiG9w0BAQsFADBMMSAw\nHgYDVQQLExdHbG9iYWxTaWduIFJvb3QgQ0EgLSBSMjETMBEGA1UEChMKR2xvYmFs\nU2lnbjETMBEGA1UEAxMKR2xvYmFsU2lnbjAeFw0xNzA2MTUwMDAwNDJaFw0yMTEy\nMTUwMDAwNDJaMFQxCzAJBgNVBAYTAlVTMR4wHAYDVQQKExVHb29nbGUgVHJ1c3Qg\nU2VydmljZXMxJTAjBgNVBAMTHEdvb2dsZSBJbnRlcm5ldCBBdXRob3JpdHkgRzMw\nggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDKUkvqHv/OJGuo2nIYaNVW\nXQ5IWi01CXZaz6TIHLGp/lOJ+600/4hbn7vn6AAB3DVzdQOts7G5pH0rJnnOFUAK\n71G4nzKMfHCGUksW/mona+Y2emJQ2N+aicwJKetPKRSIgAuPOB6Aahh8Hb2XO3h9\nRUk2T0HNouB2VzxoMXlkyW7XUR5mw6JkLHnA52XDVoRTWkNty5oCINLvGmnRsJ1z\nouAqYGVQMc/7sy+/EYhALrVJEA8KbtyX+r8snwU5C1hUrwaW6MWOARa8qBpNQcWT\nkaIeoYvy/sGIJEmjR0vFEwHdp1cSaWIr6/4g72n7OqXwfinu7ZYW97EfoOSQJeAz\nAgMBAAGjggEzMIIBLzAOBgNVHQ8BAf8EBAMCAYYwHQYDVR0lBBYwFAYIKwYBBQUH\nAwEGCCsGAQUFBwMCMBIGA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFHfCuFCa\nZ3Z2sS3ChtCDoH6mfrpLMB8GA1UdIwQYMBaAFJviB1dnHB7AagbeWbSaLd/cGYYu\nMDUGCCsGAQUFBwEBBCkwJzAlBggrBgEFBQcwAYYZaHR0cDovL29jc3AucGtpLmdv\nb2cvZ3NyMjAyBgNVHR8EKzApMCegJaAjhiFodHRwOi8vY3JsLnBraS5nb29nL2dz\ncjIvZ3NyMi5jcmwwPwYDVR0gBDgwNjA0BgZngQwBAgIwKjAoBggrBgEFBQcCARYc\naHR0cHM6Ly9wa2kuZ29vZy9yZXBvc2l0b3J5LzANBgkqhkiG9w0BAQsFAAOCAQEA\nHLeJluRT7bvs26gyAZ8so81trUISd7O45skDUmAge1cnxhG1P2cNmSxbWsoiCt2e\nux9LSD+PAj2LIYRFHW31/6xoic1k4tbWXkDCjir37xTTNqRAMPUyFRWSdvt+nlPq\nwnb8Oa2I/maSJukcxDjNSfpDh/Bd1lZNgdd/8cLdsE3+wypufJ9uXO1iQpnh9zbu\nFIwsIONGl1p3A8CgxkqI/UAih3JaGOqcpcdaCIzkBaR9uYQ1X4k2Vg5APRLouzVy\n7a8IVk6wuy6pm+T7HT4LY8ibS5FEZlfAFLSW8NwsVz9SBK2Vqn1N0PIMn5xA6NZV\nc7o835DLAFshEWfC7TIe3g==\n-----END CERTIFICATE-----\n",
      issuer: {
        commonName: "GlobalSign",
        organizations: ["GlobalSign"],
        organizationUnits: ["GlobalSign Root CA - R2"],
        locality: "",
        state: "",
        country: ""
      },
      issuerName: "GlobalSign",
      subject: {
        commonName: "Google Internet Authority G3",
        organizations: ["Google Trust Services"],
        organizationUnits: [],
        locality: "",
        state: "",
        country: "US"
      },
      subjectName: "Google Internet Authority G3",
      serialNumber: "01E3A9301CFC7206383F9A531D",
      validStart: 1497484842,
      validExpiry: 1639526442,
      fingerprint: "sha256/vgzNVNTOzaG9Xl2ezIWgTCwfk6UiDXf96I/prQgfZBs="
    }
  },
  verificationResult: "net::OK",
  errorCode: 0
};
