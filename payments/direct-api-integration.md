---
description: >-
  This suite of APIs allows you to directly initiate BANK and USSD transactions
  without using the Squad Modal.
---

# Direct API Integration

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

###

## DIRECT GTBANK ACCOUNT DEBIT

<mark style="color:green;">`POST`</mark> [https://sandbox-api-squadco.com/transaction/initiate/process-payment](https://sandbox-api-squadco.com/transaction/initiate/process-payment)

This endpoint allows you to initiate the direct debit of a GTBank account by passing the account number. After initiating the request using this endpoint you are then to call the validate endpoint to complete the transaction.

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

<mark style="color:green;">`POST`</mark> [ https://sandbox-api-squadco.com/transaction/initiate/process-payment](https://sandbox-api-squadco.com/transaction/initiate/process-payment)

This API allows you to directly process USSD transactions, with the same param details as direct bank payment.

#### USSD SUPPORTED BANKS AND BANK CODES

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





## Go Live

To go live, simply:&#x20;

\
1\. Change the base URL of your endpoints from sandbox-api-d.squadco.com to \
api-d.squadco.com

2\. [Sign up on our Live Environment](http://dashboard.squadco.com)

3\. Complete your KYC

4\. Use the secret key provided on the dashboard to replace the test keys gotten from the sandbox environment to authenticate your live transactions.
