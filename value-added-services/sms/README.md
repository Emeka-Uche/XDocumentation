---
description: >-
  These are suites of API that allows you vend SMS. Please note you are expected
  to fund your specified GTBank account from which you will be debited and your
  VAS dashboard credited.
---

# SMS

### API KEYS

1. You will be profiled and login details sent
2. Log into your account and
3. Retrieve keys for calling endpoints\


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
{% endtabs %}
