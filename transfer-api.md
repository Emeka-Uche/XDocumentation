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

##
