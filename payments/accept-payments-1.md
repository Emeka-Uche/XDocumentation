# Verify Transaction

This is an endpoint that allows you to query the status of a particular transaction using the unique transaction reference attached to the transaction.

**RESPONSE**\
The API responses returns a status code and a data object

**Response Status Code**

The response when this endpoint is queried returns a status code of 200 0r 400.\
\
**Status Code 200**\
A status code of 200 is returned for a valid transaction ref.\
\
**Status Code 400**\
A status code of 400 is returned for an invalid transaction ref\
\
**Response Data Object**\
The data object returned in the response is null when the status code is 400 and populated when the status code is 200.\
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
Authorization**:** Bearer sandbox\_sk\_94f2b798466408ef4d19e848ee1a4d1a3e93f104046f

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

## Go Live

If you are using the verify transaction endpoint, kindly change the base URL to https://api-d.squadco.com
