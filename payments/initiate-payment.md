---
description: >-
  This API allows you to initiate transaction by making calls from your server
  which returns a URL that when visited will call up our payment modal.
---

# Initiate Payment



{% swagger method="post" path="/payment/Initiate" baseUrl="https//sandbox-api.squadco.com" summary="" %}
{% swagger-description %}
This endpoint returns a checkout URL that when visited calls up the modal with the various payment channel.
{% endswagger-description %}

{% swagger-parameter in="body" name="email" type="String" required="true" %}
Customer's email address.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="amount" type="Integer" required="true" %}
The amount you are debiting customer (expressed in the lowest currency value - 

**`kobo`**

& 

**`cent`**

).  10000 = 100NGN for Naira Transactions
{% endswagger-parameter %}

{% swagger-parameter in="body" name="initiate_type" type="String" required="true" %}
This states the method by which the transaction is initiated. At the moment, this can only take the value "inline".
{% endswagger-parameter %}

{% swagger-parameter in="body" name="currency" type="String" required="true" %}


\


The currency you want the amount to be charged in. Allowed value is either 

**`NGN or USD`**

.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="transaction_ref" type="String" %}
An alphanumeric string that uniquely identifies a transaction
{% endswagger-parameter %}

{% swagger-parameter in="body" name="Customer_name" type="String" required="false" %}
Name of Customer carrying out the transaction
{% endswagger-parameter %}

{% swagger-parameter in="body" name="callback_url" type="String" %}
Sample: http://squadco.com
{% endswagger-parameter %}

{% swagger-parameter in="header" name="Authorization" type="String" required="true" %}
API keys (Public Key) that authorizes your transactions and gotten from your squad dashboard
{% endswagger-parameter %}

{% swagger-parameter in="body" name="payment_channels" type="Array" %}
An array of payment channels to control what channels you want to make available for the user to make a payment with. Available channels include; [

**`'card'`**

, 

**`'bank'`**

 , 

``

` `

**`'ussd'`**

,

**`'bank_transfer'`**

]
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="Successful" %}
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
{% endswagger-response %}

{% swagger-response status="401: Unauthorized" description="Invalid/No Authorization Key" %}
```javascript
{
    "status": 401,
    "message": "Initiate transaction Unauthorized",
    "data": null
}
```
{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="Bad Request" %}
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
{% endswagger-response %}
{% endswagger %}

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

&#x20;
