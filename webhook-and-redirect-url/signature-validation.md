---
description: >-
  The webhook notification sent carry the x-squad-encrypted-body in the header.
  The hash value (x-squad-encrypted-body) is an HMAC SHA512 signature of the
  event payload signed using your secret key.
---

# Signature validation

**Sample Function (C#)**

```
using System;
using System.Security.Cryptography;
using System.Text;
using Newtonsoft.Json.Linq;
namespace HMacExample
{
  class Program {
    static void Main(string[] args) {
      String key = "YOUR_SECRET_KEY"; //replace with your squad secret_key

      //Replace with the body of the notification received
      String webhookPayload = "THE_BODY_OF_THE_WEBHOOK_PAYLOAD YOU RECEIVED";
      String jsonInput = JsonConvert.SerializeObject(webhookPayload);
      String result = "";
      byte[] secretkeyBytes = Encoding.UTF8.GetBytes(key);
      byte[] inputBytes = Encoding.UTF8.GetBytes(jsonInput);
      using (var hmac = new HMACSHA512(secretkeyBytes))
      {
          byte[] hashValue = hmac.ComputeHash(inputBytes);
          result = BitConverter.ToString(hashValue).Replace("-", string.Empty);;
      }
      Console.WriteLine(result);
      String x-squad-encrypted-body = "Request's header value for x-squad-encrypted-body" //replace with the request's header value for x-squad-encrypted-body here
      if(result.Equals(x-squad-encrypted-body)) {
          // you can trust the event came from squad and so you can give value to customer
      } else {
          // this request didn't come from Squad, ignore it
      }
    }
  }
}
```

**Sample Function (node)**

```
const crypto = require('crypto');
const secret = "Your Squad Secret Key";
// Using Express
app.post("/MY-WEBHOOK-URL", function(req, res) {
    //validate event
    const hash = crypto.createHmac('sha512', secret).update(JSON.stringify(req.body)).digest('hex');
    if (hash == req.headers['x-squad-encrypted-body']) {
     // you can trust the event came from squad and so you can give value to customer
     } else {
      // this request didn't come from Squad, ignore it
     }
    res.send(200);
});
```

**Sample Function (PHP)**

```
<?php

if ((strtoupper($_SERVER['REQUEST_METHOD']) != 'POST' ) || !array_key_exists('x-squad-encrypted-body', $_SERVER) ) 
    exit();
// Retrieve the request's body
$input = @file_get_contents("php://input");
define('SQUAD_SECRET_KEY','YOUR_SECRET_KEY'); //ENTER YOUR SECRET KEY HERE
// validate event do all at once to avoid timing attack
if($_SERVER['x-squad-encrypted-body'] !== hash_hmac('sha512', $input, SQUAD_SECRET_KEY))
// The Webhook request is not from SQUAD 
    exit();
http_response_code(200);
// The Webhook request is from SQUAD
$body = json_decode($input);
exit();
?>
```

**Sample Function (JAVA)**

```
package hmacexample;
import java.io.UnsupportedEncodingException;
import java.math.BigInteger;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import org.json.JSONException;
import org.json.JSONObject;
public class HMacExample {
  public static void main(String[] args) throws UnsupportedEncodingException, InvalidKeyException, NoSuchAlgorithmException, JSONException {
    //This verifies that the request is from Squad
      
    String key = "YOUR_SECRET_KEY"; //replace with your squad secret_key
    
    String body = "BODY_OF_THE_WEBHOOK_PAYLOAD"; //Replace with body of the webhook payload
   
    String result = "";
    String HMAC_SHA512 = "HmacSHA512";
    String x-squad-encrypted-body = ""; //put in the request's header value for x-squad-encrypted-body
    
    byte [] byteKey = key.getBytes("UTF-8");
    SecretKeySpec keySpec = new SecretKeySpec(byteKey, HMAC_SHA512);
    Mac sha512_HMAC = Mac.getInstance(HMAC_SHA512);      
    sha512_HMAC.init(keySpec);
    byte [] mac_data = sha512_HMAC.
    doFinal(body.toString().getBytes("UTF-8"));
    result = String.format("%040x", new BigInteger(1, mac_data));
    if(result.toUpperCase().equals(x-squad-encrypted-body)) {
      // you can trust that this is from squad
    }else{
      // this isn't from Squad, ignore it
    }  
  }
}
```
