---
description: >-
  This endpoint allows you get your Squad Wallet Balance. Please be informed
  that the wallet balance is in KOBO. (Please note that you can't get wallet
  balance for Dollar transactions)
---

# Wallet Balance

{% hint style="warning" %}
**Authorization** Any request made without the authorization key will fail with a **`401`**` ``(Service Not Authorized)` response code.
{% endhint %}

{% hint style="info" %}
**Authorization** would be done via Headers using Keys gotten from your dashboard.&#x20;
{% endhint %}

**Example:**\
Authorization**:** Bearer sandbox\_sk\_94f2b798466408ef4d19e848ee1a4d1a3e93f104046f

{% swagger method="get" path="/merchant/balance" baseUrl="https://sandbox-api-d.squadco.com" summary="This endpoint allows you get your Squad Wallet Balance. Amount is in KOBO." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="currency_id" type="String" required="true" %}
It only takes the value "NGN".\
(Please note that you can't get wallet balance for Dollar transactions)\

{% endswagger-parameter %}

{% swagger-response status="200: OK" description="Successful" %}
```
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": {
        "balance": "2367013",
        "currency_id": "NGN",
        "merchant_id": "SBN1EBZEQ8"
    }
}
```
{% endswagger-response %}

{% swagger-response status="401: Unauthorized" description="No Authoirzation" %}
```
{
    "success": false,
    "message": "",
    "data": {}
}
```
{% endswagger-response %}

{% swagger-response status="403: Forbidden" description="Wrong/Invalid API Key" %}
```

{
    "success": false,
    "message": "Merchant authentication failed",
    "data": {}
}
```
{% endswagger-response %}
{% endswagger %}

