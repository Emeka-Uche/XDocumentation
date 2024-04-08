---
description: >-
  A Template is a pre defined message format which can be called over and again,
  without requiring to rewrite again.
---

# TEMPLATES

#### CREATE TEMPLATE

This endpoint allows you to create a template&#x20;

<mark style="color:green;">`POST`</mark> https://squadbygtco.com:8080/dashboard/template

#### Request Body

| Name                                          | Type    | Description                                   |
| --------------------------------------------- | ------- | --------------------------------------------- |
| name<mark style="color:red;">\*</mark>        | String  | Name of the template                          |
| body<mark style="color:red;">\*</mark>        | String  | Actualt template form to be used continiously |
| Client\_id<mark style="color:red;">\*</mark>  | Integer | Unique Client ID pre-assigned                 |
| description<mark style="color:red;">\*</mark> | String  | Description of template                       |

#### Sample Request

```
{
    "name": "CHDP_C",
    "body": "Txn: Credit\nAc:#$TXN_ACC$#\nAmt:#$AMOUNT$#\nDes:Cash Dep/_BRC_/#$OFS_ACC$#/#$TRANSACTION_ID$#\nDate:#$TXN_DATE$#\nBal#$CCY$##$AVAIL_BAL$#\n#$sms_advert#",
    "client_id": 2,
    "description":"CASH DEPOSIT CREDITING"
}
```

{% tabs %}
{% tab title="Success Response" %}
```
{
    "status": "CREATED",
    "message": "template created successfully",
    "data": {
        "id": 5,
        "name": "CHDP_C",
        "description": "CASH DEPOSIT CREDITING",
        "client_id": 2,
        "created_at": "2024-04-08T13:02:44.000Z",
        "created_by": 1,
        "updated_at": null,
        "updated_by": null
    }
}
```
{% endtab %}

{% tab title="Error Response" %}

{% endtab %}
{% endtabs %}

```
```

#### GET ALL CREATED TEMPLATES

This endpoint allows you to retrieve all created templates

<mark style="color:green;">`GET`</mark> https://squadbygtco.com:8080/dashboard/template/by-client/2?page=1\&count=10



{% tabs %}
{% tab title="Success Response" %}
```
{
    "status": "SUCCESS",
    "message": "templates retrieved successfully",
    "data": {
        "items": [
            {
                "id": 2,
                "name": "FTRQ_D",
                "body": "Txn: Debit\nAc:#$TXN_ACC$#\nAmt:#$AMOUNT$#\nDes:AAC/Debit/Funds Transfer/#$TRANSACTION_ID$#\nDate:#$TXN_DATE$#\nBal:#$AVAIL_BAL$#\n#$sms_advert$#",
                "description": "FUNDS TRANSFER DEBIT",
                "client_id": 2,
                "params": [
                    "phone_number",
                    "TXN_ACC",
                    "AMOUNT",
                    "TRANSACTION_ID",
                    "TXN_DATE",
                    "AVAIL_BAL",
                    "sms_advert"
                ],
                "created_at": "2024-03-20T20:28:53.000Z",
                "created_by": 10,
                "updated_at": "2024-03-26T06:48:22.000Z",
                "updated_by": 10
            },
            {
                "id": 3,
                "name": "FTRQ_C",
                "body": "Credit\nAc:#$OFS_ACC$#\nAmt:#$CCY$##$AMOUNT$#\nDes:AAC/Credit/Funds Transfer/#$TRANSACTION_ID$#\nDate:#$TXN_DATE$#\nBal:#$CCY$##$AVAIL_BAL$#\n#$sms_advert$#",
                "description": "FUNDS TRANSFER CREDIT",
                "client_id": 2,
                "params": [
                    "phone_number",
                    "OFS_ACC",
                    "CCY",
                    "AMOUNT",
                    "TRANSACTION_ID",
                    "TXN_DATE",
                    "CCY",
                    "AVAIL_BAL",
                    "sms_advert"
                ],
                "created_at": "2024-03-20T20:31:37.000Z",
                "created_by": 10,
                "updated_at": "2024-03-26T06:53:23.000Z",
                "updated_by": 10
            },
            {
                "id": 4,
                "name": "CHDP_C",
                "body": "Txn: Credit\nAc:#$TXN_ACC$#\nAmt:#$AMOUNT$#\nDes:Cash Dep/_BRC_/#$OFS_ACC$#/#$TRANSACTION_ID$#\nDate:#$TXN_DATE$#\nBal#$CCY$##$AVAIL_BAL$#\n#$sms_advert$#",
                "description": "CASH DEPOSIT CREDIT",
                "client_id": 2,
                "params": [
                    "phone_number",
                    "TXN_ACC",
                    "AMOUNT",
                    "OFS_ACC",
                    "TRANSACTION_ID",
                    "TXN_DATE",
                    "CCY",
                    "AVAIL_BAL",
                    "sms_advert"
                ],
                "created_at": "2024-03-20T20:39:02.000Z",
                "created_by": 10,
                "updated_at": "2024-03-26T06:53:09.000Z",
                "updated_by": 10
            },
            {
                "id": 5,
                "name": "CHDP_C",
                "body": "Txn: Credit\nAc:#$TXN_ACC$#\nAmt:#$AMOUNT$#\nDes:Cash Dep/_BRC_/#$OFS_ACC$#/#$TRANSACTION_ID$#\nDate:#$TXN_DATE$#\nBal#$CCY$##$AVAIL_BAL$#\n#$sms_advert#",
                "description": "CASH DEPOSIT CREDITING",
                "client_id": 2,
                "params": [
                    "phone_number",
                    "TXN_ACC",
                    "AMOUNT",
                    "OFS_ACC",
                    "TRANSACTION_ID",
                    "TXN_DATE",
                    "CCY",
                    "AVAIL_BAL"
                ],
                "created_at": "2024-04-08T13:02:44.000Z",
                "created_by": 1,
                "updated_at": null,
                "updated_by": null
            }
        ],
        "total": 4
    }
}
```
{% endtab %}

{% tab title="Error Response" %}

{% endtab %}
{% endtabs %}

#### UPDATE CREATED TEMPLATES

This endpoint allows you to edit the body of a template.

<mark style="color:green;">`PATCH`</mark> https://squadbygtco.com:8080/dashboard/template/3

#### Sample Request

```
{
    "body": "Credit\nAc:#$OFS_ACC$#\nAmt:#$CCY$##$AMOUNT$#\nDes:AAC/Credit/Funds Transfer/#$TRANSACTION_ID$#\nDate:#$TXN_DATE$#\nBal:#$CCY$##$AVAIL_BAL$#\n#$sms_advert$#"
}
```

{% tabs %}
{% tab title="Sample Response" %}
```
{
    "status": "SUCCESS",
    "message": "template updated successfully",
    "data": {
        "id": 3,
        "name": "FTRQ_C",
        "description": "FUNDS TRANSFER CREDIT",
        "client_id": 2,
        "created_at": "2024-03-20T20:31:37.000Z",
        "created_by": 10,
        "updated_at": "2024-04-08T13:08:32.000Z",
        "updated_by": 1
    }
}
```
{% endtab %}

{% tab title="Error Response" %}

{% endtab %}
{% endtabs %}

#### DELETE CREATED TEMPLATE

This endpoint allows you to delete a template

<mark style="color:green;">`DELETE`</mark> https://squadbygtco.com:8080/dashboard/bucket/1



**Sample Response**

```
{
    "message": "success"
}
```
