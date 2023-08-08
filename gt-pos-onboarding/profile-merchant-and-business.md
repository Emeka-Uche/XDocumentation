---
description: >-
  These test APIs allow you to profile GTBank POS merchants on Squad, and map
  their terminals to the merchant business.
---

# 📟 Squad GT-POS Merchant Onboarding

## ONBOARD MERCHANT

This API allows you to onboard a merchant using the terminal ID and business details.

{% swagger method="post" path="acquirer/v1/pos-terminal" baseUrl="https://test-api.squadinc.co/" summary="This API Onboards POS Merchants on Squad" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="business_name" type="String" required="true" %}
Name of Merchant Business
{% endswagger-parameter %}

{% swagger-parameter in="body" name="phone_number" type="Integer" required="true" %}
11 digit phone number.

\


Format:  "08123456789"
{% endswagger-parameter %}

{% swagger-parameter in="body" name="first_name" type="String" required="true" %}
First Name of Merchant
{% endswagger-parameter %}

{% swagger-parameter in="body" name="last_name" type="String" required="true" %}
Last Name of Merchant
{% endswagger-parameter %}

{% swagger-parameter in="body" name="ptsp" type="String" required="true" %}
Name of the PTSP
{% endswagger-parameter %}

{% swagger-parameter in="body" name="bvn" type="Integer" required="true" %}
BVN Number of Merchant  (11-Digits)
{% endswagger-parameter %}

{% swagger-parameter in="body" name="email" type="String" required="true" %}
Merchant's Email
{% endswagger-parameter %}

{% swagger-parameter in="body" name="account_number" type="Integer" required="true" %}
Merchant Bank Account Number to be used for settlement (10-Digits)
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="Success" %}
```postman_json
{
    "business_name": "EZADE Nigeria Limited",
    "phone_number": "08123456789",
    "first_name":"Ade",
    "last_name":"Eze",
    "ptsp": "Global Accelerex",
    "bvn": "12345678901",
    "email":"test@mail.com",
    "account_number": "1234567890"
}
```
{% endswagger-response %}
{% endswagger %}



## ADD BUSINESS

This API allows you to add a business to an already created Squad merchant, using the Squad Merchant ID. _(This can be gotten on the top left of the merchant squad dashboard)_

{% swagger method="post" path="acquirer/v1/{merchant_id}" baseUrl="https://test-api.squadinc.co/" summary="This API Adds Business To Merchant" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="business_name" type="String" required="true" %}
Name of New Business to be added
{% endswagger-parameter %}

{% swagger-parameter in="body" name="terminal_id" type="String" required="true" %}
Terminal ID of new POS
{% endswagger-parameter %}

{% swagger-parameter in="body" name="phone_number" type="String" required="true" %}
11 digit phone number.

\


Format: "08123456789"
{% endswagger-parameter %}

{% swagger-parameter in="body" name="email" type="String" required="true" %}
email of the new business to be added.
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="Success" %}
```
{
    "business_name": "EZADE Nigeria Limited",
    "terminal_id": "POS1234",
    "phone_number": "08123456789",
    "email": "test@mail.com"
}
```
{% endswagger-response %}
{% endswagger %}

