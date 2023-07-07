---
description: >-
  These are suites of API that allows you move funds from your Squad Wallet to a
  bank Account (GTB Account)
---

# Transfer API

**PLEASE NOTE THAT THIS WILL ONLY WORK FOR TRANSFERS TO GTB AT THE MOMENT.**\


{% hint style="warning" %}
**Authorization** Any request made without the authorization key (secret key) will fail with a **`401`**` ``(Unauthorized)` response code.
{% endhint %}

{% hint style="info" %}
**The authorization key is sent via the request header as Bearer Token Authorization**
{% endhint %}

**Example:**\
Authorization**:** Bearer sandbox\_sk\_94f2b798466408ef4d19e848ee1a4d1a3e93f104046f

## Account Lookup

This API allows you lookup/confirm the account name of the recipient you intend to credit. This should be done before initiating the transfer.

{% swagger method="get" path="/payout/account/lookup" baseUrl="https://sandbox-api-d.squadco.com" summary="This API allows you confirm Account Name to be transferred to." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="bank_code" type="String" required="true" %}
Unique NIP code that identifies a bank. Currently you can only pass "000013" which is for GTB
{% endswagger-parameter %}

{% swagger-parameter in="body" name="account_number" type="String" required="true" %}
GTB account number you want to transfer to
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="Success" %}
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

{% swagger-response status="401: Unauthorized" description="No Authorization" %}
```
{
    "success": false,
    "message": "",
    "data": {}
}
```
{% endswagger-response %}

{% swagger-response status="403: Forbidden" description="Invalid/Wrong API Keys" %}
```
{
    "success": false,
    "message": "Merchant authentication failed",
    "data": {}
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
**Transaction Reference:**\
Transaction Reference used to initiate a transfer must be unique per transfer. Kindly ensure that you append your merchant ID to the transaction Reference you are creating. This is compulsory as it will throw an error if you don't append it.\
\
**For instance:**\
\
If my Squad Merchant ID is SBABCKDY and i want to create a transaction ref for my transfer, then I will have something like:\
\
"transaction\_reference":"SBABCKDY\_12345".\
\
**PLEASE NOTE THAT THE TRANSFER API WILL ONLY WORK FOR TRANSFERS TO GTB AT THE MOMENT, WE WILL NOTIFY AND UPDATE THE DOCUMENATION ONCE WE OPEN ACCESS TO ALL BANKS.**

### Error Codes:

These are the various error codes that you might get on the transfer API and the one you should re-query

200 -- Success: \
400 --- Bad request \
422 --- Unprocessed\
424 --- Timeout/failed --- Should re-query\
404 --- Not found\
412 ---- reversed

{% swagger method="post" path="/payout/transfer" baseUrl="https://sandbox-api-d.squadco.com" summary="" %}
{% swagger-description %}
This is for movement of funds from Squad Wallet to any bank account (GTB at the moment)
{% endswagger-description %}

{% swagger-parameter in="body" name="transaction_reference" type="String" required="true" %}
Unique Transaction Reference used to initiate a transfer. 

\


Please ensure that you append your merchant ID to the transaction Reference you are creating. This is compulsory as it will throw an error if you don't append it.

\



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

{% swagger-response status="401: Unauthorized" description="No Authorization" %}
```
{
    "success": false,
    "message": "",
    "data": {}
}
```
{% endswagger-response %}

{% swagger-response status="403: Forbidden" description="Invalid/Wrong API Keys" %}
```
{
    "success": false,
    "message": "Merchant authentication failed",
    "data": {}
}
```
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

## Re-query Transfer

This API allows you re-query the status of a transfer made to know if it was successful, failed, reversed or pending.\
\


{% swagger method="post" path="/payout/requery" baseUrl="https://sandbox-api-d.squadco.com" summary="This API allows you re-query the status of a transfer" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="transaction_reference" type="String" required="true" %}
Unique Transaction Reference used to initiate a transfer. 

\


Please ensure that you append your merchant ID to the transaction Reference you are creating. This is compulsory as it will throw an error if you don't append it.

\


If my S 
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="Success" %}

{% endswagger-response %}

{% swagger-response status="401: Unauthorized" description="No Authorization" %}
```
{
    "success": false,
    "message": "",
    "data": {}
}
```
{% endswagger-response %}

{% swagger-response status="403: Forbidden" description="Wrong/Invalid API Keys" %}
```
{
    "success": false,
    "message": "Merchant authentication failed",
    "data": {}
}
```
{% endswagger-response %}
{% endswagger %}

### Sample Request

```postman_json
{
    "transaction_reference": "47484093994949"
}
```

## Get All Transfers

This API Allows you retrieve the details of all transfers you have done from your Squad Wallet using this transfer solution.

{% swagger method="get" path="/payout/list" baseUrl="https://sandbox-api-d.squadco.com" summary="This API gets the details of all transfers you have done from your Squad Wallet " %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-response status="200: OK" description="Success" %}
```
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": [
        {
            "account_number_credited": "0254896325",
            "amount_debited": "2000",
            "total_amount_debited": "3000",
            "success": true,
            "recipient": "Dummy Dummy",
            "bank_code": "058",
            "transaction_reference": "4d665e98-802d-4cd7-b76c-c77eaba9e394",
            "transaction_status": "success",
            "switch_transaction": null
        },
        {
            "account_number_credited": "0254896325",
            "amount_debited": "2000",
            "total_amount_debited": "2500",
            "success": true,
            "recipient": "Dummy Dummy",
            "bank_code": "058",
            "transaction_reference": "bbf6ba99-07ae-463d-a8e5-8b11bd5702fa",
            "transaction_status": "success",
            "switch_transaction": null
        },
        {
            "account_number_credited": "0254896325",
            "amount_debited": "4000",
            "total_amount_debited": "4500",
            "success": true,
            "recipient": "Dummy Dummy",
            "bank_code": "058",
            "transaction_reference": "e344ed1d-dd1a-4e46-b964-66587a4ad4d4",
            "transaction_status": "success",
            "switch_transaction": null
        },
        {
            "account_number_credited": "0254896325",
            "amount_debited": "300000",
            "total_amount_debited": "300000",
            "success": false,
            "recipient": "Tee Fifi",
            "bank_code": "058",
            "transaction_reference": "03/13/2023_C15DBPRZ_Q2P8VPL9",
            "transaction_status": "pending",
            "switch_transaction": null
        },
        {
            "account_number_credited": "0254896325",
            "amount_debited": "300000",
            "total_amount_debited": "300000",
            "success": false,
            "recipient": "Tee Fifi",
            "bank_code": "058",
            "transaction_reference": "optional-sample-unique-id",
            "transaction_status": "pending",
            "switch_transaction": null
        },
        {
            "account_number_credited": "0254896325",
            "amount_debited": "300000",
            "total_amount_debited": "300000",
            "success": true,
            "recipient": "Hay Stack",
            "bank_code": "058",
            "transaction_reference": "e1f14484-b7dc-4528-8d79-d95fa66e8c69",
            "transaction_status": "success",
            "switch_transaction": null
        },
        {
            "account_number_credited": "0254896325",
            "amount_debited": "300000",
            "total_amount_debited": "300000",
            "success": true,
            "recipient": "Jenny Squad",
            "bank_code": "058",
            "transaction_reference": "43eb10c0-57d9-42eb-b8a7-4db299c65ced",
            "transaction_status": "success",
            "switch_transaction": null
        }
    ]
}
```
{% endswagger-response %}

{% swagger-response status="401: Unauthorized" description="No Authorization" %}
```
{
    "success": false,
    "message": "",
    "data": {}
}
```
{% endswagger-response %}

{% swagger-response status="403: Forbidden" description="Wrong/Invalid API Keys" %}
```
{
    "success": false,
    "message": "Merchant authentication failed",
    "data": {}
}
```
{% endswagger-response %}
{% endswagger %}

### Sample Response: 200-ok

```json
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": [
        {
            "account_number_credited": "0254896325",
            "amount_debited": "2000",
            "total_amount_debited": "3000",
            "success": true,
            "recipient": "Dummy Dummy",
            "bank_code": "058",
            "transaction_reference": "4d665e98-802d-4cd7-b76c-c77eaba9e394",
            "transaction_status": "success",
            "switch_transaction": null
        },
        {
            "account_number_credited": "0254896325",
            "amount_debited": "2000",
            "total_amount_debited": "2500",
            "success": true,
            "recipient": "Dummy Dummy",
            "bank_code": "058",
            "transaction_reference": "bbf6ba99-07ae-463d-a8e5-8b11bd5702fa",
            "transaction_status": "success",
            "switch_transaction": null
        },
        {
            "account_number_credited": "0254896325",
            "amount_debited": "4000",
            "total_amount_debited": "4500",
            "success": true,
            "recipient": "Dummy Dummy",
            "bank_code": "058",
            "transaction_reference": "e344ed1d-dd1a-4e46-b964-66587a4ad4d4",
            "transaction_status": "success",
            "switch_transaction": null
        },
        {
            "account_number_credited": "0254896325",
            "amount_debited": "300000",
            "total_amount_debited": "300000",
            "success": false,
            "recipient": "Tee Fifi",
            "bank_code": "058",
            "transaction_reference": "03/13/2023_C15DBPRZ_Q2P8VPL9",
            "transaction_status": "pending",
            "switch_transaction": null
        },
        {
            "account_number_credited": "0254896325",
            "amount_debited": "300000",
            "total_amount_debited": "300000",
            "success": false,
            "recipient": "Tee Fifi",
            "bank_code": "058",
            "transaction_reference": "optional-sample-unique-id",
            "transaction_status": "pending",
            "switch_transaction": null
        },
        {
            "account_number_credited": "0254896325",
            "amount_debited": "300000",
            "total_amount_debited": "300000",
            "success": true,
            "recipient": "Hay Stack",
            "bank_code": "058",
            "transaction_reference": "e1f14484-b7dc-4528-8d79-d95fa66e8c69",
            "transaction_status": "success",
            "switch_transaction": null
        },
        {
            "account_number_credited": "0254896325",
            "amount_debited": "300000",
            "total_amount_debited": "300000",
            "success": true,
            "recipient": "Jenny Squad",
            "bank_code": "058",
            "transaction_reference": "43eb10c0-57d9-42eb-b8a7-4db299c65ced",
            "transaction_status": "success",
            "switch_transaction": null
        }
    ]
}
```
