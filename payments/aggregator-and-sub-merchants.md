---
description: >-
  This API allows you to be profiled as an aggregator and also create
  sub-merchants dynamically under your account.
---

# Aggregator and Sub-merchants

With this, you are able to initiate transactions from a central point for all businesses or sub merchants under you using the same API keys.\


{% hint style="warning" %}
**Authorization** Any request made without the authorization key (secret key) will fail with a **`401`**` ``(Unauthorized)` response code.
{% endhint %}

{% hint style="info" %}
**The authorization key is sent via the request header as Bearer Token Authorization**
{% endhint %}

**Example:**\
Authorization**:** Bearer sandbox\_sk\_94f2b798466408ef4d19e848ee1a4d1a3e93f104046f

## Create Sub-merchants.

This API is used to create a sub-merchant, the sub-merchant will have its own ID and will automatically have its own view on the dashboard.

## Create Sub-merchants (Aggregator)

<mark style="color:green;">`POST`</mark> `https://sandbox-api-d.squadco.com/merchant/create-sub-users`

#### Request Body

| Name                                              | Type   | Description                                       |
| ------------------------------------------------- | ------ | ------------------------------------------------- |
| display\_name<mark style="color:red;">\*</mark>   | String | Name of sub-merchant                              |
| account\_name<mark style="color:red;">\*</mark>   | String | Sub-merchant's settlement bank account name       |
| bank\_code<mark style="color:red;">\*</mark>      | String | Sub-merchant's settlement bank code. e.g 058      |
| account\_number<mark style="color:red;">\*</mark> | String | Sub-merchant's settlement account number          |
| bank<mark style="color:red;">\*</mark>            | String | Name of sub-merchant's settlement bank e.g GTBank |

{% tabs %}
{% tab title="200: OK Success" %}
```json
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": {
        "account_id": "AGGERYG8WF34"
    }
}
```
{% endtab %}

{% tab title="400: Bad Request Error in request payload" %}
```json
{
    "status": 400,
    "success": false,
    "message": "\"account_number\" is required",
    "data": {}
}
```
{% endtab %}

{% tab title="401: Unauthorized No Authorization" %}
```json
{
    "success": false,
    "message": "",
    "data": {}
}
```
{% endtab %}

{% tab title="403: Forbidden Wrong/Invalid API Keys" %}
```json
{
    "success": false,
    "message": "Merchant authentication failed",
    "data": {}
}
```
{% endtab %}
{% endtabs %}

##
