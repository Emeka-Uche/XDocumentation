---
description: >-
  These are suites of API that allows you move funds from your Squad Wallet to a
  bank Account (GTB Account)
---

# Transfer API

**PLEASE NOTE THAT THIS WILL ONLY WORK FOR TRANSFERS TO GTB AT THE MOMENT.**\


## Account Lookup

This API allows you lookup/ confirm account name of a customer who you want to make transfer to so you can make a transfer.

{% swagger method="get" path="/payout/account/lookup" baseUrl="https://sandbox-api-d.squadco.com" summary="This API allows you confirm Account Name to be transferred to." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="nip_code" type="String" required="true" %}
Unique NIP code that identifies a bank. Currently you can only pass "000013" which is for GTB
{% endswagger-parameter %}

{% swagger-parameter in="body" name="account_number" type="String" required="true" %}
GTB account number you want to transfer to
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": {
        "account_name": "JENNY SQUAD",
        "account_number": "0123456789"
    }
}
```
{% endswagger-response %}
{% endswagger %}

### Sample Request

```
{
    "bank_code":"000013",
    "account_number":"0123456789"
}
```

### Sample Response

```
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": {
        "account_name": "JENNY SQUAD",
        "account_number": "0123456789"
    }
}
```

## Fund Transfer

This API allows you to transfer funds from your Squad Wallet to the account you have looked up.\
Please be informed that we will not be held liable for mistake in transferring to a wrong account or an account that wasn't looked up.\
\
**PLEASE NOTE THAT THIS WILL ONLY WORK FOR TRANSFERS TO GTB AT THE MOMENT.**

{% swagger method="post" path="/payout/transfer" baseUrl="https://sandbox-api-d.squadco.com" summary="" %}
{% swagger-description %}
This is for movement of funds from Squad Wallet to any bank account (GTB at the moment)
{% endswagger-description %}

{% swagger-parameter in="body" name="transaction_reference" type="String" required="true" %}
Unique Code that identifiers a transfer
{% endswagger-parameter %}

{% swagger-parameter in="body" name="amount" type="String" required="true" %}
Amount to be transferred. Value is in Kobo.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="bank_code" type="String" required="true" %}
Unique NIP Code that identifies a bank. (Currently takes only "000013" for GTB accounts)
{% endswagger-parameter %}

{% swagger-parameter in="body" name="account_number" type="String" required="true" %}
10-digit NUBAN account number to be transferred to. Must be an account that has been looked up and vetted to be transferred to.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="account_name" type="String" required="true" %}
The account name tied to the account number you are transferring to which you have looked up using our look up API.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="currency_id" type="String" required="true" %}
Takes only the value "NGN"
{% endswagger-parameter %}

{% swagger-parameter in="body" name="remark" type="String" required="true" %}
A unique remark that will be sent with the transfer.
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="Success" %}

{% endswagger-response %}
{% endswagger %}

### Sample Request

```postman_json
{
    "remark": "for test transfer to my customer",
    "bank_code":"000013",
    "currency_id": "NGN",
    "amount": "100",
    "account_number":"0123456789",
    "transaction_reference": "hfhfhhfhhf",
    "account_name":"IGWEH IFEANYI"
}
```
