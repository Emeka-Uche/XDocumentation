---
description: >-
  These are a suite of APIs that allow you to vend SMS. Please note you are
  expected to fund your specified GTBank virtual account in order to credit your
  account.
---

# SMS V2

#### API KEYS (Test Environment) <a href="#api-keys-test-environment" id="api-keys-test-environment"></a>

1. Create an account on our sandbox environment: sandbox.squadco.com
2. Retrieve keys from the API & Webhook Section inside Merchant Settings
3. Pass the Secret Key gotten as a Bearer Token to authorize requests

{% hint style="info" %}
**Example:&#x20;**&#x20;Bearer sandbox\_sk\_94f2b798466408ef4d19e848ee1a4d1a3e93f104046f
{% endhint %}

{% hint style="info" %}
&#x20;**Secret** s
{% endhint %}

**CODE SNIPPETS FOR ENCRYPTING SECRET**

{% tabs %}
{% tab title="C#" %}
```
using System;
using System.IO;
using System.Security.Cryptography;
using System.Text;

public string Encrypt(string text, string keyString, string ivString)
{

    using (RijndaelManaged myRijndael = new RijndaelManaged())
    {
        byte[] key = Encoding.ASCII.GetBytes(keyString);
        byte[] iv = Encoding.ASCII.GetBytes(ivString);
        byte[] encrypted;
        using (RijndaelManaged rijAlg = new RijndaelManaged())
        {
            ICryptoTransform encryptor = rijAlg.CreateEncryptor(key, iv);
            using (MemoryStream msEncrypt = new MemoryStream())
            {
                using (CryptoStream csEncrypt = new CryptoStream(msEncrypt, encryptor, CryptoStreamMode.Write))
                {
                    using (StreamWriter swEncrypt = new StreamWriter(csEncrypt))
                    {
                        swEncrypt.Write(text);
                    }
                    encrypted = msEncrypt.ToArray();
                }
            }
        }
        string base64String = Convert.ToBase64String(encrypted);
        return base64String;
    }
}

```
{% endtab %}

{% tab title="Node JS" %}
```
const crypto = require("crypto");

const encrypt = (text, keyString, ivString) => {
	const cipher = crypto.createCipheriv("aes256", keyString, ivString);
	let encrypted = cipher.update(text, "utf8", "base64");
	encrypted += cipher.final("base64");
	return encrypted;
};

```
{% endtab %}

{% tab title="PHP" %}
```
function encrypt($text, $keyString, $ivString) {
    $cipher = "aes-256-cbc";
    $encrypted = openssl_encrypt($text, $cipher, $keyString, OPENSSL_RAW_DATA, $ivString);
    return base64_encode($encrypted);
}
```
{% endtab %}
{% endtabs %}
