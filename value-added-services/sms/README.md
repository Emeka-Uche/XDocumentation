---
description: >-
  These are a suite of APIs that allow you to vend SMS. Please note you are
  expected to fund your specified GTBank virtual account from which your VAS
  dashboard is credited.
---

# SMS

### API KEYS AND AUTHORIZATION

1. Once profiled, log in details will be sent to you
2. [Log into your account ](https://vas.squadco.com/)
3. Once logged in, you can retrieve keys and other credentials for calling API endpoints

{% hint style="info" %}
The API endpoints are authorized using the **key** and **secret**, they should be passed as headers in the request.&#x20;
{% endhint %}

**Generating a Secret:** This is done by using crypto to sign the strings `${client_id} ${user_id} ${current date in YYYY-MM-DD}.`e.g for client 41, user 9 and date September 11, 2023, you should encrypt 41 9 2023-09-11. Use the **key** and **IV**  gotten from your dashboard to do this.

{% hint style="info" %}
&#x20;**Secret** should be generated each day or on each request for security purposes
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
<?php
 
function encrypt($text, $keyString, $ivString) {
    $cipher = "aes-256-cbc";
    $encrypted = openssl_encrypt($text, $cipher, $keyString, OPENSSL_RAW_DATA, $ivString);
    return base64_encode($encrypted);
}
 
function generateSecret($clientId, $userId, $currentDate, $key, $iv) {
    $stringToSign = "$clientId $userId $currentDate";
    return encrypt($stringToSign, $key, $iv);
}
 
$clientId = //input your client_id;
$userId = //input your user_id;
$currentDate = date("Y-m-d");
 
$key = //"Input your key";
$iv = //"Input your IV";
 
$secret = generateSecret($clientId, $userId, $currentDate, $key, $iv);
 
echo "Generated Secret: " . $secret;
 
?>
```
{% endtab %}
{% endtabs %}
