---
description: >-
  This suite of APIs allows you to directly initiate CARD, BANK and USSD
  transactions without using the Squad Modal.
---

# Direct API Integration

{% hint style="danger" %}
**This documentation site has been deprecated as of September 8, 2025, and will no longer receive updates. Please refer to the new documentation site at** [**https://docs.squadco.com**](https://docs.squadco.com)**.**
{% endhint %}

{% hint style="warning" %}
**Authorization** Any request made without the authorization key (secret key) will fail with a **`401`**` ``(Unauthorized)` response code.
{% endhint %}

{% hint style="danger" %}
If using other services such as dynamic virtual accounts, do not use the same transaction reference
{% endhint %}

{% hint style="info" %}
**The authorization key is sent via the request header as Bearer Token Authorization**
{% endhint %}

**Example:**\
Authorizatio&#x6E;**:** Bearer sandbox\_sk\_94f2b798466408ef4d19e848ee1a4d1a3e93f104046f



## DIRECT CARD&#x20;

This suite of API's allows merchants to directly collect customer card details and charge the cards following the expected steps. Only PCI-DSS-certified and profiled merchants will be able to make use of the service

{% hint style="info" %}
Due to the nature of payment systems around cards, several possible scenarios may play out, which are broadly classified as:

1. Payments requiring only PIN for completion
2. Payments requiring only OTP for completion
3. Payments requiring a combination of both PIN and OTP for completion&#x20;
4. Payments requiring a challenge (3DS) for completion&#x20;
{% endhint %}

> The Expected next step to take will be based on the **transaction\_status** in the response body after the Step 1 (Charge Card)

{% hint style="info" %}
```
Test Cards for Different Scenarios

4242424242424242 >> Direct OTP validation (Use Amount < ₦7,500)

5200000000001096 >> 3DS authentication

5555555555554444 >> PIN + OTP (Two-step validation: PIN verification → OTP validation)
```
{% endhint %}

### Step #1: Charge Card&#x20;

This endpoint allows you to pass collected card details and other required fields

<mark style="color:green;">`POST`</mark> https://sandbox-api-squadco.com/transaction/initiate/process-payment

#### Request Body

| Name                                              | Type    | Description                                                                                                               |
| ------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------- |
| transaction\_reference                            | String  | An alphanumeric string that uniquely identifies a transaction (where none is presented, the system generates one for you) |
| amount<mark style="color:red;">\*</mark>          | Integer | The amount in kobo you are debiting customer (expressed in the lowest currency value - **`kobo`**).  10000 = 100NGN       |
| currency                                          | String  | <p><br>The currency you want the amount to be charged in. Allowed value is <strong><code>NGN</code></strong></p>          |
| pass\_charge                                      | Boolean | Allows charges to be passed to customer when set as True, else merchant bears charges                                     |
| webhook\_url                                      | String  | Specifies where successfull notification is sent on payment completion (superseded by webhook\_url set on dashboard)      |
| card<mark style="color:red;">\*</mark>            | Object  | Collects card details comprising of card number, cvv, expiry\_month & expiry\_year                                        |
| payment\_method<mark style="color:red;">\*</mark> | String  | Either "card" or "ussd"                                                                                                   |
| customer<mark style="color:red;">\*</mark>        | Object  | Collects name and email of customer making payment, email receives receipt of successfull payment                         |
| redirect\_url                                     | String  | Specifies site to be redirected to after successfull payment                                                              |

## Sample Request

```
{
    // "transaction_reference": "hell333o123",
    "amount": 1000000,
    "pass_charge": true,
    "currency": "NGN",
    "webhook_url": "https://webhook.site/50733ce1-f957-4900-9f4a-3eddf0a1f270",
    "card": {
        "number": "5555555555554444",
        "cvv": "121",
        "expiry_month": "12",
        "expiry_year": "50"
    },
    "payment_method": "card",
    "customer": {
        "name": "Tams Bills",
        "email": "50733ce1-f957-4900-9f4a-3eddf0a1f270@emailhook.site"
    },
    "redirect_url": "https://www.squadco.com/"
}
```

### Sample Response

{% tabs %}
{% tab title="200: ValidatePin" %}
```javascript
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": {
        "amount": 1001000,
        "transaction_ref": "SQDEMO6388697447108000002",
        "currency": "NGN",
        "transaction_type": "Card",
        "gateway_ref": "SQDEMO6388697447108000002_1_1_1",
        "merchant_amount": 1000000,
        "message": "Charge Attempted",
        "transaction_status": "ValidatePin"
    }
}
```
{% endtab %}

{% tab title="200: ValidateOTP" %}
```
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": {
        "amount": 50000,
        "transaction_ref": "SUPR123",
        "currency": "NGN",
        "transaction_type": "Card",
        "gateway_ref": "SUPR123_1_18_1",
        "merchant_amount": 49500,
        "transaction_status": "ValidateOTP"
    }
}
```
{% endtab %}

{% tab title="200: 3DS" %}
```
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": {
        "amount": 1010000,
        "transaction_ref": "test1001",
        "currency": "NGN",
        "transaction_type": "Card",
        "gateway_ref": "test1001_1_5_4",
        "merchant_amount": 1000000,
        "message": "COMPLETED",
        "auth_url": "https://sandbox-pay.squadco.com/3ds/U0JTNUI4VlUzNl82Mzg4NzA0NDQyNDM4MTQzMTc=",
        "transaction_status": "ThreeDSecure"
    }
}
```
{% endtab %}
{% endtabs %}



### Step #2: Authorize Payment&#x20;

This endpoint allows you to authorize a payment based on the transaction\_status from the charge card process

<mark style="color:green;">`POST`</mark> https://sandbox-api-squadco.com/transaction/payment/authorize

{% hint style="info" %}
For ValidatePin, use PIN: 1234\
For ValidateOTP, use OTP: 123456
{% endhint %}

## Sample Request for ValidatePin

```
{
    "transaction_reference": "SQDEMO6388591221547800002",
    "authorization": {
        "pin": "1234"
    }
}
```

## Sample Request for ValidateOTP

```
{
    "transaction_reference": "SQDEMO6388591221547800002",
    "authorization": {
        "otp": "123456"
    }
}
```

### Response

{% tabs %}
{% tab title="200: ValidatePin+OTP" %}
```javascript
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": {
        "amount": 1001000,
        "transaction_ref": "SQDEMO6388697447108000002",
        "currency": "NGN",
        "transaction_type": "Card",
        "gateway_ref": "SQDEMO6388697447108000002_1_1_1",
        "merchant_amount": 1000000,
        "message": "Validate pin attempted",
        "transaction_status": "ValidateOTP"
    }
}
```
{% endtab %}

{% tab title="200: ValidateOTP" %}
```
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": {
        "amount": 1001000,
        "transaction_ref": "SQDEMO6388697447108000002",
        "transaction_type": "Card",
        "gateway_ref": "SQDEMO6388697447108000002_1_1_1",
        "merchant_amount": 1000000,
        "message": "Validate OTP Successful.",
        "transaction_status": "Success"
    }
}
```
{% endtab %}
{% endtabs %}

### 3DS (ThreeDSecure)

Where transaction\_status is ThreeDSecure, the challenge is to be completed by following the URL specified in the auth\_url field. When executed, a challenge page is initiate,d and once the challenge is completed, a payment successful page is displayed and then redirected to redirect\_url provided.

{% tabs %}
{% tab title="Challange Page" %}
<figure><img src="../.gitbook/assets/3DS PAGE 1.png" alt="" width="245"><figcaption></figcaption></figure>
{% endtab %}

{% tab title="Successfull Payment" %}
<figure><img src="../.gitbook/assets/3DS PAGE 2.png" alt="" width="309"><figcaption></figcaption></figure>
{% endtab %}
{% endtabs %}







## DIRECT GTBANK ACCOUNT DEBIT

<mark style="color:green;">`POST`</mark> [https://sandbox-api-squadco.com/transaction/initiate/process-payment](https://sandbox-api-squadco.com/transaction/initiate/process-payment)

This endpoint allows you to initiate the direct debit of a GTBank account by passing the account number. After initiating the request using this endpoint, you are then to call the validate endpoint to complete the transaction.

#### Headers

| Name                                            | Type   | Description                                                                                  |
| ----------------------------------------------- | ------ | -------------------------------------------------------------------------------------------- |
| Authorization<mark style="color:red;">\*</mark> | String | API keys (Secret Key) that authorizes your transactions and gotten from your squad dashboard |

#### Request Body

| Name                                                   | Type    | Description                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| email<mark style="color:red;">\*</mark>                | String  | Customer's email address.                                                                                                                                                                                                                                                                                                   |
| amount<mark style="color:red;">\*</mark>               | Integer | The amount in kobo you are debiting customer (expressed in the lowest currency value - **`kobo`**).  10000 = 100NGN                                                                                                                                                                                                         |
| currency                                               | String  | <p><br>The currency you want the amount to be charged in. Allowed value is <strong><code>NGN</code></strong></p>                                                                                                                                                                                                            |
| name                                                   | String  | Name of Customer carrying out the transaction                                                                                                                                                                                                                                                                               |
| bank\_code<mark style="color:red;">\*</mark>           | String  | Unique NIP code that identifies a bank.                                                                                                                                                                                                                                                                                     |
| payment\_method<mark style="color:red;">\*</mark>      | String  |  method of payment (should use BANK)                                                                                                                                                                                                                                                                                        |
| transaction\_ref                                       | String  | An alphanumeric string that uniquely identifies a transaction (where none is presented, the sytem generates one for you)                                                                                                                                                                                                    |
| webhook\_url                                           | String  | Allows you define where webhook notification is sent (where none is presented, the default webhook for merchant is notified)                                                                                                                                                                                                |
| account\_or\_phoneno<mark style="color:red;">\*</mark> | String  | The GTBank account number to be debitted                                                                                                                                                                                                                                                                                    |
| pass\_charge                                           | Boolean | <p>It takes two possible values: True or False.<br>It is set to False by default. When set to True, the charges on the transaction is computed and passed on to the customer(payer).<br>But when set to False, the charge is passed to the merchant and will be deducted from the amount to be settled to the merchant.</p> |

## Sample Request

```
{
  "transaction_reference": "test001",
  "amount": 51800,
  "pass_charge": false,
  "currency": "NGN",
  "webhook_url": "www.sampleurl.com",
  "bank": {
    "bank_code": "058",
    "account_or_phoneno": "08146663666"
  },
  "payment_method": "bank",
  "customer": {
     "name": "William Udousoro",
   "email": "squadtest@gmail.com"
  }
}
```

{% tabs %}
{% tab title="200: OK Successful" %}
```javascript
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": {
        "amount": 51800,
        "transaction_ref": "SQDEMO6386363720055500003",
        "transaction_type": "Bank",
        "gateway_ref": "SQDEMO6386363720055500003_2_2_1",
        "merchant_amount": 46178.4,
        "message": "Please enter the 6-digit code from your GTBank token / e-Token or dial *737*7# with your registered GTBank phone number.",
        "auth_model": "ValidateTOKEN"
    }
}
```
{% endtab %}

{% tab title="401: Unauthorized Invalid/No Authorization Key" %}
```javascript
{
    "success": false,
    "message": "",
    "data": {}
}
```
{% endtab %}

{% tab title="400: Bad Request Bad Request" %}
```javascript
{
    "status": 400,
    "success": false,
    "message": "\"account_or_phoneno\" is required",
    "data": {}
}
```
{% endtab %}
{% endtabs %}



## Validate Payment for Direct Bank API Payment

<mark style="color:green;">`POST`</mark> [https://sandbox-api-squadco.com/transaction/validate-payment](https://sandbox-api-squadco.com/transaction/validate-payment)

Once a payment is initiated using the Direct Bank API, the transaction must be authenticated. This is done using this endpoint to receive details from the user.



{% hint style="info" %}
For the _auth\_model_: The value could be either **ValidateTOKEN** or **ValidateOTP**.

If **ValidateTOKEN** is received, the payee is expected to input OTP from \*737\*7#, hardware token or e-token to complete the transaction.



If **ValidateOTP** is returned, then an OTP will be sent to the phone number linked to the customer account number which the payee inputs to complete the transaction.
{% endhint %}

| Name                                                     | Type   | Description                                                               |
| -------------------------------------------------------- | ------ | ------------------------------------------------------------------------- |
| transaction\_reference<mark style="color:red;">\*</mark> | String | Transaction Refrence from the initiated payment                           |
| otp\_token<mark style="color:red;">\*</mark>             | String | Unique OTP or Token sent to customer, required for transaction completion |
| authorization                                            | Object | Contains otp\_token                                                       |

## Sample Request

```
{
  "transaction_reference": "SQDEMO6386363261862600002",
  "authorization": {
    "otp_token": "123456"
  }
}
```

## Sample Response

{% tabs %}
{% tab title="ValidateTOKEN" %}
```
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": {
        "amount": 56800,
        "transaction_ref": "SQDEMO6386313153377900002",
        "transaction_type": "Bank",
        "gateway_ref": "SQDEMO6386313153377900002_2_2_1",
        "merchant_amount": 51118.4,
        "auth_model": "ValidateTOKEN",
        "message": "Charge attempted"
    }
}
```




{% endtab %}

{% tab title="ValidateOTP" %}
```
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": {
        "amount": 56800,
        "transaction_ref": "SQDEMO6386313153377900002",
        "transaction_type": "Bank",
        "gateway_ref": "SQDEMO6386313153377900002_2_2_1",
        "merchant_amount": 51118.4,
        "auth_model": "ValidateOTP",
        "message": "Charge attempted"
    }
}
```


{% endtab %}
{% endtabs %}



## DIRECT USSD Transactions

These suites of APIs allow you to make use of the USSD endpoints to directly access USSD codes.

## Bank USSD List

<mark style="color:green;">`GET`</mark>  [https://sandbox-api-d.squadco.com/transaction/ussd/banklist](https://sandbox-api-d.squadco.com/transaction/ussd/banklist)

This API allows you to retrieve the list of all USSD-supported banks along with their bank codes

#### Response

```json
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": [
        {
            "label": "Access (Diamond)",
            "bank_code": "063"
        },
        {
            "label": "Access",
            "bank_code": "044"
        },
        {
            "label": "Fidelity Bank",
            "bank_code": "070"
        },
        {
            "label": "First Bank",
            "bank_code": "011"
        },
        {
            "label": "Globus Bank",
            "bank_code": "00103"
        },
        {
            "label": "Guaranty Trust Bank",
            "bank_code": "058"
        },
       
        
    ]
}
```

#### USSD-SUPPORTED BANKS AND BANK CODES

| BANK                    | BANK CODE |
| ----------------------- | --------- |
| Access (Diamond)        | 063       |
| Access                  | 044       |
| Ecobank                 | 050       |
| FCMB                    | 214       |
| Fidelity Bank           | 070       |
| First Bank              | 011       |
| Guaranty Trust Bank     | 058       |
| Heritage Bank           | 030       |
| Keystone Bank           | 082       |
| Rubies (Highstreet) MFB | 125       |
| Stanbic Bank            | 221       |
| Sterling Bank           | 232       |
| UBA                     | 033       |
| Union Bank              | 032       |
| Unity Bank              | 215       |
| VFD Bank                | 566       |
| Wema Bank               | 035       |
| Zenith Bank             | 057       |
| Globus bank             | 00103     |
| Premium Trust Bank      | 105       |
| LOTUS bank              | 303       |
| Optimum Trust Bank      | 107       |
| Kuda MFB                | 50211     |

The bank code provided is what should be populated in the bank\_code parameter.

### USSD INITIATE

<mark style="color:green;">`POST`</mark> [ https://sandbox-api-squadco.com/transaction/initiate/process-payment](https://sandbox-api-squadco.com/transaction/initiate/process-payment)

This API allows you to directly process USSD transactions directly with the same parameter details as direct bank payments.

### Sample Request

```
{
  "transaction_reference": "testussd",
  "amount": 56800,
  "pass_charge": false,
  "currency": "NGN",
  "webhook_url": "www.sampleurl.com",
  "ussd": {
    "bank_code": "058"
  },
  "payment_method": "ussd",
  "customer": {
    "name": "Test User",
    "email": "TestUser@gmail.com"
  }
}
```

## Sample Response

{% tabs %}
{% tab title="200 OK" %}
```
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": {
        "amount": 56800,
        "transaction_ref": "SQDEMO6386363261862600002",
        "transaction_type": "Ussd",
        "gateway_ref": "SQDEMO6386363261862600002_3_3_1",
        "merchant_amount": 51118.4,
        "message": "USSD Payment Reference Generated",
        "auth_model": "USSDCodeGenerated",
        "ussd_details": {
            "ussd_reference": "*737*000*1914",
            "expiresAt": "2024-10-04T11:01:59.8888866"
        }
    }
}
```


{% endtab %}
{% endtabs %}



### QUERY USSD Transaction

<mark style="color:green;">`GET`</mark> [https://sandbox-api-d.squadco.com/transaction/verify/ussd/](https://sandbox-api-d.squadco.com/transaction/verify/ussd/weu2)\{{transaction\_ref\}}

This endpoint allows you requery a USSD transaction for testing purposes in the sandbox environment

### Sampe response

```json
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": {
        "amount": 10000,
        "transaction_ref": "test001",
        "currency": "NGN",
        "transaction_type": "Ussd",
        "gateway_ref": "test001",
        "message": "success",
        "transaction_status": "Success"
    }
}
```

## Go Live

To go live, simply:&#x20;

\
1\. Change the base URL of your endpoints from sandbox-api-d.squadco.com to \
api-d.squadco.com

2\. [Sign up on our Live Environment](http://dashboard.squadco.com)

3\. Complete your KYC

4\. Use the secret key provided on the dashboard to replace the test keys gotten from the sandbox environment to authenticate your live transactions.
