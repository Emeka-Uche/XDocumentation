---
coverY: 180.61349693251532
---

# Squad Payment Modal

## Payment Modal&#x20;

Squad Payment Modal provides an easy and convenient payment flow. It is the simplest way to securely collect payments from your customers without them leaving your website. The customer will be shown all the payment methods you have selected.

It can be integrated with simple steps, by copying the code in the embedded section and pasting it on your page; making it the easiest way to accept payments. It works across devices and can help increase your conversion.

### Parameters

To initialize a transaction, you need to pass details such as email, first name, last name, amount, transaction reference, etc. Email, amount, and currency are **required**. You can also pass any other additional information in the `metadata` object field. The following is a complete list of parameters that you can pass:

| **PARAMETERS**    | **REQUIRED?**                         | **DESCRIPTION**                                                                                                                                                                                                                                             |
| ----------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| key               | <mark style="color:green;">Yes</mark> | Your **Squad** public key. Use the test key found in your [Sandbox account](https://sandbox.squadco.com/) in test mode, and use the live key found in your [Squad dashboard](http://dashboard.squadco.com/) in live mode.                                   |
| email             | <mark style="color:green;">Yes</mark> | Customer's email address.                                                                                                                                                                                                                                   |
| amount            | <mark style="color:green;">Yes</mark> | The amount you are debiting customer (expressed in the lowest currency value - **`kobo`**& **`cent`**).                                                                                                                                                     |
| transaction\_ref  | No                                    | Unique case-sensitive transaction reference. Only ``` `**`-`**_,_**`.`**_,_**`=`** and alphanumeric characters are allowed. If you do not pass this parameter, Squad will generate a unique reference for you.                                              |
| currency\_code    | <mark style="color:green;">Yes</mark> | The currency you want the amount to be charged in. Allowed value is **`NGN or USD`**.                                                                                                                                                                       |
| payment\_channels | No                                    | An array of payment channels to control what channels you want to make available for the user to make a payment with. Available channels include; \[**`'card'`**, **`'bank'`** , ``` `**`'ussd'`**,**`'bank_transfer'`**]                                   |
| Customer\_name    | No                                    | Name of Customer                                                                                                                                                                                                                                            |
| callback\_url     | No                                    | Sample: https://squadco.com                                                                                                                                                                                                                                 |
| meta              | No                                    | <p>Object that contains any additional information that you want to record with the transaction. The fields of the <code>custom_field</code>object will be displayed on the merchant receipt and </p><p>transaction information on the Squad dashboard.</p> |

{% hint style="info" %}
The customer information can either be retrieved from a form, or from your database if you already have it stored. (Example below)
{% endhint %}

## Code Glossary

{% tabs %}
{% tab title="HTML" %}
```typescript
<!DOCTYPE html>
<html lang="en">
<HEAD>
<TITLE>SQUAD</TITLE>
<!-- bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

</HEAD>
<BODY>
  <form style="padding-left: 30px;" class="text-center">
      <div class="text-left" style="color:red; font-family: Verdana; font-size: 30px;">SAMPLE CHECKOUT</div>
      <h6>Note: Amount should be between $1 to $10,000 (USD), NGN100 to NGN5,000,000 and KSH100 to KSH5,000,000</h6>
      <div class="row text-center">
        <div class="col-lg-4">
            <label for="email">Email Address</label>
            <input type="email" id="email-address" class="form-control" required /><br>
        </div>
        <div class="col-lg-4">
            <label for="amount">Amount</label>
            <input type="tel" id="amount" class="form-control" required /><br>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4">
            <label for="first-name">First Name</label>
            <input type="text" id="first-name" class="form-control" /><br>
        </div>
        <div class="col-lg-4">
            <label for="last-name">Last Name</label>
            <input type="text" id="last-name" class="form-control" /><br>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="form-submit">
          <button type="button" onclick="SquadPay()" class="btn btn-danger">Check Out</button><br><br>
        </div>
      </div>
    </div>
  </form>
</BODY>
</HTML>
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
<script src="https://checkout.squadco.com/widget/squad.min.js"></script> 

function SquadPay() {
 
  const squadInstance = new squad({
    onClose: () => console.log("Widget closed"),
    onLoad: () => console.log("Widget loaded successfully"),
    onSuccess: () => console.log(`Linked successfully`),
    key: "test_pk_sample-public-key-1",
    //Change key (test_pk_sample-public-key-1) to the key on your Squad Dashboard
    email: document.getElementById("email-address").value,
    amount: document.getElementById("amount").value * 100,
    //Enter amount in Naira or Dollar (Base value Kobo/cent already multiplied by 100)
    currency_code: "NGN"
  });
  squadInstance.setup();
  squadInstance.open();

}
```
{% endtab %}
{% endtabs %}

### Initiate transaction

When the customer clicks on the **`submit`** button, initiate a transaction by passing the necessary details (email, amount, and any other parameters) to Squad through to a JavaScript function.&#x20;

```javascript
function SquadPay() {
 
  const squadInstance = new squad({
    onClose: () => console.log("Widget closed"),
    onLoad: () => console.log("Widget loaded successfully"),
    onSuccess: () => console.log(`Linked successfully`),
    key: "test_pk_sample-public-key-1",
    //Change key (test_pk_sample-public-key-1) to the key on your Squad Dashboard
    email: document.getElementById("email-address").value,
    amount: document.getElementById("amount").value * 100,
    //Enter amount in Naira or Dollar (Base value Kobo/cent already multiplied by 100)
    currency_code: "NGN"
  });
  squadInstance.setup();
  squadInstance.open();

}
```

A checkout modal will pop-up with different payment options for the customer to choose and input their payment information to complete the transaction.&#x20;

## Verify Transaction

This is an endpoint that allows you to query the status of a particular transaction using the unique transaction reference attached to the transaction.

**RESPONSE**\
****The API responses returns a status code and a data object

**Response Status Code**

The response when this endpoint is queried returns a status code of either 200 0r 400.\
\
**Status Code 200**\
A status code of 200 is returned for a valid transaction ref.\
\
**Status Code 400**\
A status code of 400 is returned for an invalid transaction ref\
\
**Response Data Object**\
****The data object returned in the response is null when the status code is 400 and populated when the status code is 200.\
\
The data object contains a parameter known as the transaction\_status which differentiates the transaction type.

Transaction status can either be Success, Failed, Abandoned or Pending

{% hint style="warning" %}
**Authorization** Any request made without the authorization key (secret key) will fail with a **`401`**` ``(Unauthorized)` response code.
{% endhint %}

{% hint style="info" %}
**The authorization key is sent via the request header as Bearer Token Authorization**
{% endhint %}

**Example:**\
****Authorization**:** Bearer **** sandbox\_sk\_94f2b798466408ef4d19e848ee1a4d1a3e93f104046f

{% swagger method="get" path="verify/{{transaction_ref}}" baseUrl="https://sandbox-api-d.squadco.com/transaction/" summary="This verifies a transaction" %}
{% swagger-description %}
To verify the validity of a transaction, kindly query the endpoint above by replacing {{transaction_ref}} with the unique transaction_ref of the transaction you want to 

_verify_
{% endswagger-description %}

{% swagger-parameter in="query" name="transaction_ref" type="String" required="true" %}
Unique transaction reference that identifies each transaction
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="Valid Transaction Reference" %}
Sample Response for Successful Transaction

```
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": {
        "transaction_amount": 5000,
        "transaction_ref": "SQCHIZ3634573076082",
        "email": "ayo@gmail.com",
        "transaction_status": "Success",
        "transaction_currency_id": "NGN",
        "created_at": "0001-01-01T00:00:00",
        "transaction_type": "VirtualAccount",
        "merchant_name": "CHIZOBA ANTHONY",
        "merchant_business_name": null,
        "gateway_transaction_ref": "SQCHIZ3634573076082",
        "recurring": null,
        "merchant_email": "okoyeanthonychizoba@gmail.com",
        "plan_code": null
    }
}


```

Sample Response for Failed Transaction

```
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": {
        "transaction_amount": 10000,
        "transaction_ref": "SQOKOY6108912254622",
        "email": "chizoba.okoye@habaripay.com",
        "transaction_status": "failed",
        "transaction_currency_id": "NGN",
        "created_at": "2022-07-12T13:46:26.866",
        "transaction_type": "card",
        "merchant_name": "Okoye Anthony",
        "merchant_business_name": "Okoye Anthony",
        "gateway_transaction_ref": "SQOKOY6108912254622_1_3",
        "recurring": "null",
        "merchant_email": "tony@gmail.com",
        "plan_code": null
    }
}
```
{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="Invalid Transaction Reference" %}
```javascript
{
    "status": 400,
    "success": false,
    "message": "Invalid transaction reference",
    "data": {}
}
```
{% endswagger-response %}

{% swagger-response status="401: Unauthorized" description="Unauthorized Request" %}
```javascript
//sending a request without an authorization key
{
    "success": false,
    "message": "",
    "data": {}
}
```
{% endswagger-response %}

{% swagger-response status="403: Forbidden" description="Invalid API Key" %}
```javascript
//sending a request with an Invalid key
{
    "success": false,
    "message": "API key is invalid. Key must start with sandbox_sk_",
    "data": {}
}
```
{% endswagger-response %}
{% endswagger %}



## Checkout Demo

{% embed url="https://codepen.io/habaripay/pen/xxpvoxX" %}

## Key Information

1. The `key` field takes your Squad key.
2. By default, the `amount` field is already set in the lowest currency unit (kobo, cent). That is, to pay **NGN100**, you have to enter **10000** in the amount field.\
   To convert `amount` to the base currency (Naira, Dollar), multiply the amount parameter by `100` in your code, <mark style="background-color:blue;">amount: document.getElementById("amount").value \* 100</mark>, This will allow you enter the amount in Naira or Dollar as the case may be.

## Payment Channels

After initialization, there are a couple of payment channels available to the customer to complete the transaction.

### USSD

The USSD channel allows your Nigerian customers to pay you by dialing the USSD code on their mobile devices. Nigerian banks provide USSD services for customers to use for transactions, and we have integrated with some of these banks to allow your customers to complete payments.&#x20;

![](../.gitbook/assets/image.png)

After dialing the USSD code displayed, the system will prompt the user to input the USSD PIN to authenticate the transaction and then confirm it. All that is needed to initiate USSD payment is the customer's email and the amount to be charged. When the user makes a payment, the response will be sent to your webhook.&#x20;

{% hint style="info" %}
Therefore, to make it work as expected, webhooks must be configured on your [**Squad dashboard**](http://dashboard.squadco.com/)**.**
{% endhint %}

#### Banks Supported

Here is a list of all the Banks USSD `shortcodes` we currently support:

| Bank                            | USSD Shortcode |
| ------------------------------- | -------------- |
| Access (Diamond) Bank           | 426            |
| Access Bank                     | 901            |
| EcoBank                         | 326            |
| First City Monument Bank (FCMB) | 329            |
| Fidelity Bank                   | 770            |
| First Bank                      | 894            |
| Guaranty Trust                  | 737            |
| Heritage Bank                   | 745            |
| Keystone Bank                   | 7111           |
| Rubies (Highstreet) MFB         | 779            |
| Stanbic IBTC Bank               | 909            |
| Sterling Bank                   | 822            |
| United Bank for Africa (UBA)    | 919            |
| Union Bank                      | 826            |
| Unity Bank                      | 7799           |
| VFD Bank                        | 5037           |
| Wema Bank                       | 945            |
| Zenith Bank                     | 966            |

### Bank Transfer

Squad provides a payment method that makes it possible for customers to pay you through a direct bank account transfer. The customer provides their name, phone number, and email address. Then a preset account number is displayed along with the preregistered bank name.&#x20;

![](<../.gitbook/assets/image (1).png>)

### Card

With Squad, customers can pay with Card provided their card details are correct and updated.  The customer provides their card number, card expiry date, and CVV.

## How To Test

1. Create a free Squad [sandbox account](https://sandbox.squadco.com/) and get your test keys from the dashboard.
2. Copy the code sample from the [Code Glossary](accept-payments.md#undefined) of this documentation unto a text editor of your choice.
3. Save the document as _ `.html` file. For example_ _**index.html**_&#x20;
4. With an internet-enabled device, view the `.html` file (_**index.html**_) using any web server of your choice either local (WAMP, XAMPP, etc) or online.

## Go Live

To go live on the payment modal, all you need to do is:

1. Change the test key _**** to_ the live key found in your [Squad dashboard](http://dashboard.squadco.com/).
2. ensure script link is pointing  to `https://checkout.squadco.com/widget/squad.min.js`
3. Paste your `Callback/Webhook URL` in the space provided on your dashboard. `dashboard > profile > api-webhooks.`
4. If you are using the verify transaction endpoint, kindly change the base URL to api-d.squadco.com
