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

## This endpoint allows you get your Squad Wallet Balance. Amount is in KOBO.

<mark style="color:blue;">`GET`</mark> `https://sandbox-api-d.squadco.com/merchant/balance`

#### Query Parameters

| Name                                           | Type   | Description                                                                                                          |
| ---------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------- |
| currency\_id<mark style="color:red;">\*</mark> | String | <p>It only takes the value "NGN".<br>(Please note that you can't get wallet balance for Dollar transactions)<br></p> |

{% tabs %}
{% tab title="200: OK Successful" %}
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
{% endtab %}

{% tab title="401: Unauthorized No Authoirzation" %}
```
{
    "success": false,
    "message": "",
    "data": {}
}
```
{% endtab %}

{% tab title="403: Forbidden Wrong/Invalid API Key" %}
```

{
    "success": false,
    "message": "Merchant authentication failed",
    "data": {}
}
```
{% endtab %}
{% endtabs %}

