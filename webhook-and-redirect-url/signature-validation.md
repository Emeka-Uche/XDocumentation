---
description: >-
  The webhook notification sent carry the x-squad-encrypted-body in the header.
  The hash value (x-squad-encrypted-body) is an HMAC SHA512 signature of the
  event payload signed using your secret key.
---

# Signature validation

{% hint style="danger" %}
**This documentation site has been deprecated as of September 8, 2025, and will no longer receive updates. Please refer to the new documentation site at** [**https://docs.squadco.com**](https://docs.squadco.com)**.**
{% endhint %}

**Sample Function (C#)**

```
using System;
using System.Text;
using System.Security.Cryptography;
using Newtonsoft.Json;
					
public class Program
{
	public static void Main()
	{
				var chargeResponse = new VirtualAccount_VM()
				{
					  transaction_reference = "REFE52ARZHTS/1668421222619_1",
					  virtual_account_number = "2129125316",
					  principal_amount = "222.00",
					  settled_amount = "221.78",
					  fee_charged = "0.22",
					  transaction_date = "2022-11-14T10:20:22.619Z",
					  customer_identifier = "SBN1EBZEQ8",
					  transaction_indicator = "C",
					  remarks =  "Transfer FROM sandbox sandbox | [SBN1EBZEQ8] TO sandbox sandbox",
					  currency = "NGN",
					  channel =  "virtual-account",
					  meta =  new MetaBody_VM()
					  {
						freeze_transaction_ref =  null,
						reason_for_frozen_transaction =  null
					  },
					  encrypted_body = "ViASuHLhO+SP3KtmcdAOis+3Obg54d5SgCFPFMcguYfkkYs/i44jeT5Dbx52TcOvHRp9HlnCoFwbATkEihzv2C8UyPoC38sRb90S5Z9Fq7vRwjDQz/hYi/nKbWA0btPr3A+UXhX1Nu5ek+TL0ENUC8W1ZX/FrowX3HQaYiwe3tU/Kfr2XvAGwT7IAx5CQBhpzL34faHP4jbwSVmSgVYmW5rd2ClWQ7WWJjDMakrqYJva8qd0vhkqSpyz2KywOV9t9zSHRx3VpbvlDsBdkNGr+4Axh/7Gspu3xo9mMOIdv73OzjN4VA/qQP+fQMCjU1pbS8oh81HjwkHjzC5SBhzR8IU8bsmvFUyzJMfDoJuUB+fs09SLW7pdfODwK5vB8LtdKPnAuTPlv5dHVAPeMG/ubtl/HOqCZs4axjuO557srw0GpKk86bwaVKt4IQ17nY/QCJFC273HWU1CawP7d3nQasRZf/TU7ra+fOjQBHQ7Gtz2Pnfp3gLljBKenMT4Cabks1X2/6ZQpd/yGFkloYdS7ZW3kEvrorjcyma4WNDmJfhcdR9XGsom6Y/M/n/gMMa0z2KPbHDRoEBeRYbQHcnu5LnGWzBA4Y4RMSTDesD876PDB1bOnMzNPrWYam6ZVRHz"
				};
				
				String SerializedPayload = JsonConvert.SerializeObject(chargeResponse);
				Console.WriteLine(SerializedPayload);
                string result = "";
                var secretKeyBytes = Encoding.UTF8.GetBytes("sandbox_sk_9ac9418e847972dd45f5fe845b5716ef305589808eda");
                var inputBytes = Encoding.UTF8.GetBytes(SerializedPayload);
                var hmac = new HMACSHA512(secretKeyBytes);
                byte[] hashValue = hmac.ComputeHash(inputBytes);
                result = BitConverter.ToString(hashValue).Replace("-", string.Empty);
				Console.WriteLine(result);
		
				Console.WriteLine(result.ToLower() == "18b9eb6ca68f92ca9f058da7bce6545efb12660cf75f960e552cf6098bb5ee8e71f20331dcfe0dfaea07439cc6629f901850291a39f374a1bd076c4eff1026c8");
	}
}
public class VirtualAccount_VM
{
  public string transaction_reference { get; set; }
  public string virtual_account_number { get; set; }
  public string principal_amount { get; set; }
  public string settled_amount { get; set; }
  public string fee_charged { get; set; }
  public string transaction_date { get; set; }
  public string customer_identifier { get; set; }
  public string transaction_indicator { get; set; }
  public string remarks { get; set; }
  public string currency { get; set; }
  public string channel { get; set; }
  public MetaBody_VM meta { get; set; }
  public string encrypted_body { get; set; }
}
public class MetaBody_VM
    {
        public string freeze_transaction_ref { get; set; }
        public string reason_for_frozen_transaction { get; set; }
    }
```

**Sample Function (node)**

```
const crypto = require('crypto');
const secret = "Your Squad Secret Key";
// Using Express
app.post("/MY-WEBHOOK-URL", function(req, res) {
    //validate event
    const hash = crypto.createHmac('sha512', secret).update(JSON.stringify(body)).digest('hex').toUpperCase();
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
if($_SERVER['x-squad-encrypted-body'] !== strtoupper(hash_hmac('sha512', $input, SQUAD_SECRET_KEY)))
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
    while (result.length() < 128)  result = "0"+ result;
    if(result.toUpperCase().equals(x-squad-encrypted-body)) {
      // you can trust that this is from squad
    }else{
      // this isn't from Squad, ignore it
    }  
  }
}
```
