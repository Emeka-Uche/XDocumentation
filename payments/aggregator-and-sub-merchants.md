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

{% swagger method="post" path="/merchant/create-sub-users" baseUrl="https://sandbox-api-d.squadco.com" summary="Create Sub-merchants (Aggregator)" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="display_name" type="String" required="true" %}
Name of sub-merchant
{% endswagger-parameter %}

{% swagger-parameter in="body" name="account_name" type="String" required="true" %}
Sub-merchant's settlement bank account name
{% endswagger-parameter %}

{% swagger-parameter in="body" name="account_number" type="String" required="true" %}
Sub-merchant's settlement account number
{% endswagger-parameter %}

{% swagger-parameter in="body" name="bank_code" type="String" required="true" %}
Sub-merchant's settlement bank code. e.g 058
{% endswagger-parameter %}

{% swagger-parameter in="body" name="bank" type="String" required="true" %}
Name of sub-merchant's settlement bank e.g GTBank
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="Success" %}
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
{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="Error in request payload" %}
```json
{
    "status": 400,
    "success": false,
    "message": "\"account_number\" is required",
    "data": {}
}
```
{% endswagger-response %}

{% swagger-response status="401: Unauthorized" description="No Authorization" %}
```json
{
    "success": false,
    "message": "",
    "data": {}
}
```
{% endswagger-response %}

{% swagger-response status="403: Forbidden" description="Wrong/Invalid API Keys" %}
```json
{
    "success": false,
    "message": "Merchant authentication failed",
    "data": {}
}
```
{% endswagger-response %}
{% endswagger %}

##
