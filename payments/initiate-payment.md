---
description: >-
  This API allows you to initiate transaction by making calls from your server
  which returns a URL that when visited will call up our payment modal.
---

# Initiate Payment



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
Authorization**:** Bearer sandbox\_sk\_94f2b798466408ef4d19e848ee1a4d1a3e93f104046f



<mark style="color:green;">`POST`</mark> `https://sandbox-api-d.squadco.com/transaction/initiate`

This endpoint returns a checkout URL that when visited calls up the modal with the various payment channel.

#### Headers

| Name                                            | Type   | Description                                                                                  |
| ----------------------------------------------- | ------ | -------------------------------------------------------------------------------------------- |
| Authorization<mark style="color:red;">\*</mark> | String | API keys (Secret Key) that authorizes your transactions and gotten from your squad dashboard |

#### Request Body

| Name                                             | Type    | Description                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| email<mark style="color:red;">\*</mark>          | String  | Customer's email address.                                                                                                                                                                                                                                                                                                   |
| amount<mark style="color:red;">\*</mark>         | Integer | The amount you are debiting customer (expressed in the lowest currency value - **`kobo`**& **`cent`**).  10000 = 100NGN for Naira Transactions                                                                                                                                                                              |
| currency<mark style="color:red;">\*</mark>       | String  | <p><br>The currency you want the amount to be charged in. Allowed value is either <strong><code>NGN or USD</code></strong>.</p>                                                                                                                                                                                             |
| customer\_name                                   | String  | Name of Customer carrying out the transaction                                                                                                                                                                                                                                                                               |
| initiate\_type<mark style="color:red;">\*</mark> | String  | This states the method by which the transaction is initiated. At the moment, this can only take the value "inline".                                                                                                                                                                                                         |
| transaction\_ref                                 | String  | An alphanumeric string that uniquely identifies a transaction                                                                                                                                                                                                                                                               |
| callback\_url                                    | String  | Sample: http://squadco.com                                                                                                                                                                                                                                                                                                  |
| payment\_channels                                | Array   | An array of payment channels to control what channels you want to make available for the user to make a payment with. Available channels include; \[**`'card'`**, **`'bank'`** , **`'ussd'`**,**`'transfer'`**]                                                                                                             |
| metadata                                         | Object  | Object that contains any additional information that you want to record with the transaction. The `custom fields in the object` will be returned via webhook and the payment verification endpoint.                                                                                                                         |
| pass\_charge                                     | Boolean | <p>It takes two possible values: True or False.<br>It is set to False by default. When set to True, the charges on the transaction is computed and passed on to the customer(payer).<br>But when set to False, the charge is passed to the merchant and will be deducted from the amount to be settled to the merchant.</p> |
| sub\_merchant\_id                                | String  | <p>This is the ID of a merchant that was created by an aggregator which allows the aggregator initiate a transaction on behalf of the submerchant.<br>This parameter is an optional field that is passed only by a registered aggregator.<br></p>                                                                           |

{% tabs %}
{% tab title="200: OK Successful" %}
```javascript
{
    "status": 200,
    "message": "success",
    "data": {
        "auth_url": null,
        "access_token": null,
        "merchant_info": {
            "merchant_response": null,
            "merchant_name": null,
            "merchant_logo": null,
            "merchant_id": "SBN1EBZEQ8"
        },
        "currency": "NGN",
        "recurring": {
            "frequency": null,
            "duration": null,
            "type": 0,
            "plan_code": null,
            "customer_name": null
        },
        "is_recurring": false,
        "plan_code": null,
        "callback_url": "http://squadco.com",
        "transaction_ref": "4678388588350909090AH",
        "transaction_memo": null,
        "transaction_amount": 43000,
        "authorized_channels": [
            "card",
            "ussd",
            "bank"
        ],
        "checkout_url": "https://sandbox-pay.squadco.com/4678388588350909090AH"
    }
}
```
{% endtab %}

{% tab title="401: Unauthorized Invalid/No Authorization Key" %}
```javascript
{
    "status": 401,
    "message": "Initiate transaction Unauthorized",
    "data": null
}
```
{% endtab %}

{% tab title="400: Bad Request Bad Request" %}
```javascript
{
    "type": "https://tools.ietf.org/html/rfc7231#section-6.5.1",
    "title": "One or more validation errors occurred.",
    "status": 400,
    "traceId": "|8aec540f-493270cdd9661378.",
    "errors": {
        "email": [
            "The email field is required."
        ]
    }
}
```
{% endtab %}
{% endtabs %}

## Sample Request

```
{
    "amount":43000,
    "email":"henimastic@gmail.com",
    "currency":"NGN",
    "initiate_type": "inline",
    "transaction_ref":"4678388588350909090AH",
    "callback_url":"http://squadco.com"
}
```

## Recurring Payment (Charge Authorization on Card)

This allows you charge a card without collecting the card information each time

{% hint style="warning" %}
**Authorization** Any request made without the authorization key (secret key) will fail with a **`401`**` ``(Unauthorized)` response code.
{% endhint %}

{% hint style="info" %}
**The authorization key is sent via the request header as Bearer Token Authorization**
{% endhint %}

{% hint style="info" %}
For recurring Payments test on Sandbox, ensure to use the test card: 5200000000000007
{% endhint %}

**Example:**\
Authorization**:** Bearer sandbox\_sk\_94f2b798466408ef4d19e848ee1a4d1a3e93f104046f



## Card Tokenization

To tokenize a card, just add a flag to the initiate payload when calling the initiate endpoint and the card will automatically be tokenized. The unique token code will automatically be added to the webhook notification that will be received after payment.\


```
"is_recurring":true
```

## Sample Request for Card Tokenization

```
{
    "amount":43000,
    "email":"henimastic@gmail.com",
    "currency":"NGN",
    "initiate_type": "inline",
    "transaction_ref":"bchs4678388588350909090AH",
    "callback_url":"http://squadco.com",
    "is_recurring":true
}
```

## Charge Card

This allows you to charge a card using the token generated during the initial transaction which was sent via webhook

<mark style="color:green;">`POST`</mark> `https://sandbox-api-d.squadco.com/transaction/charge_card`

#### Request Body

| Name                                        | Type    | Description                                                                                                                     |
| ------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| amount<mark style="color:red;">\*</mark>    | Integer | Amount to charge from card in the lowest currency value. kobo for NGN transactions or cent for USD transactions                 |
| token\_id<mark style="color:red;">\*</mark> | String  | A unique tokenization code for each card transaction and it is returned via the webhook for first charge on the card.           |
| transaction\_ref                            | String  | Unique case-sensitive transaction reference. If you do not pass this parameter, Squad will generate a unique reference for you. |

{% tabs %}
{% tab title="200: OK Success" %}
```javascript
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": {
        "transaction_amount": 0,
        "transaction_ref": null,
        "email": null,
        "transaction_status": null,
        "transaction_currency_id": null,
        "created_at": "0001-01-01T00:00:00",
        "transaction_type": null,
        "merchant_name": null,
        "merchant_business_name": null,
        "gateway_transaction_ref": null,
        "recurring": null,
        "merchant_email": null,
        "plan_code": null
    }
}
```
{% endtab %}

{% tab title="400: Bad Request Bad Request" %}
```javascript
{
    "status": 400,
    "success": false,
    "message": "amount cannot be < 0",
    "data": {}
}
```
{% endtab %}
{% endtabs %}

### Sample Request

<pre><code><strong>{
</strong>    "amount":10000,
    "token_id":"tJlYMKcwPd",
}
</code></pre>

## Query All Transactions

This endpoint allows you to query all transactions and filter using multiple parameters like transaction ref, start and end dates, amount, etc

N.B: The date parameters are compulsory and should be a maximum of one month gap

<mark style="color:blue;">`GET`</mark> `https://sandbox-api-d.squadco.com/transaction`

#### Query Parameters

| Name                                          | Type    | Description                                      |
| --------------------------------------------- | ------- | ------------------------------------------------ |
| currency                                      | string  | transacting currency                             |
| amount                                        | integer | transaction amount                               |
| perPage                                       | integer | number of transactions to be displayed in a page |
| page                                          | integer | shows which page you are on                      |
| end\_date<mark style="color:red;">\*</mark>   | date    | end date of transactions                         |
| start\_date<mark style="color:red;">\*</mark> | date    | start date of transaction                        |
| reference                                     | string  | transaction ref of a transaction                 |

{% tabs %}
{% tab title="200: OK Success" %}
````javascript
"status": 200,
    "success": true,
    "message": "Success",
    "data": [
        {
            "id": 589,
            "transaction_amount": 500000,
            "transaction_ref": "SQDEMO6384411820295800001",
            "email": "demo@merchant.com",
            "merchant_id": "AABBCCDDEEFFGGHHJJKK",
            "merchant_amount": 495000,
            "merchant_name": "Demo Habari Shop",
            "merchant_business_name": "Ogbologba and Sons Limited",
            "merchant_email": "demo@merchant.com",
            "customer_email": "demo@merchant.com",
            "customer_name": "Test QA",
            "meta_data": "{\"ip_address\":\"154.113.177.121\",\"Customer_name\":\"Test QA\",\"user_agent\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36\",\"referring_site\":\"https://pay.squadinc.co/\",\"payment_link_id\":\"GH9Y19\",\"payment_link_type\":\"otp\",\"source\":\"Desktop\",\"device_id\":null,\"order_id\":null,\"auth_code\":null,\"fingerprintData\":null,\"callback_url\":null,\"initiate_type\":null,\"browser_screen_height\":695,\"browser_screen_width\":1536,\"referrer_url\":\"https://pay.squadinc.co/\",\"extra\":\"{}\"}",
            "meta": {
                "ip_address": [],
                "Customer_name": [],
                "user_agent": [],
                "referring_site": [],
                "payment_link_id": [],
                "payment_link_type": [],
                "source": [],
                "device_id": [],
                "order_id": [],
                "auth_code": [],
                "fingerprintData": [],
                "callback_url": [],
                "initiate_type": [],
                "browser_screen_height": [],
                "browser_screen_width": [],
                "referrer_url": [],
                "extra": []
            },
            "transaction_status": "success",
            "transaction_charges": 0,
            "transaction_currency_id": "NGN",
            "transaction_gateway_id": "",
            "transaction_type": "Card",
            "flat_charge": 0,
            "is_suspicious": false,
            "is_refund": false,
            "created_at": "2024-02-21T13:16:43.012+00:00"
        }
```
````
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
