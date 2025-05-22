---
description: This set of endpoints allows you send messages and campaigns.
---

# CAMPAIGNS

**SEND INSTANT SMS**

This endpoint allows you to curate and send sms instantly.

<mark style="color:green;">`POST`</mark> https://sandbox-api-d.squadco.com/sms/send/instant

#### Request Body

| Name                                         | Type   | Description                                                 |
| -------------------------------------------- | ------ | ----------------------------------------------------------- |
| sender\_id<mark style="color:red;">\*</mark> | String | Unique merchant sender id                                   |
| messages                                     | object | <p>Contains two parameters; <br>phone_number<br>message</p> |

#### Sample Request

```
{
  "sender_id": "S-Alert",
  "messages": [
    {
      "phone_number": "08064834084",
      "message": "Hello there"
    }
  ]
}
```

{% tabs %}
{% tab title="Success Response" %}
```
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": {
        "success": true,
        "message": "submitted successfully",
        "data": {
            "batch_id": "20250522081746187_541_EAZMC2DZ_SQUADSMS_NGN",
            "sent": [
                {
                    "phone_number": "08064834084",
                    "status": "SENT",
                    "cost": 5.41,
                    "transaction_id": "20250522081746187_541_EAZMC2DZ_SQUADSMS_NGN_000"
                }
            ],
            "errors": [],
            "total_cost": 5.41,
            "currency": "NGN"
        }
    }
}

```
{% endtab %}

{% tab title="Error Response" %}

{% endtab %}
{% endtabs %}

#### CREATE CAMPAIGN&#x20;

This endpoint allows you to create campaigns

<mark style="color:green;">`POST`</mark> https://sandbox-api-d.squadco.com/sms/campaign

### Sample Request

```
{
    "name": "Promo Campaign",
    "bucket_id": "3d27d03c-e14d-494f-822e-106946898daf",
    "sender_id": "S-Alert",
    "is_scheduled": true,
    "scheduled_for": "2025-06-01T10:00:00Z",
    "template_id": "cdbbc03e-1e0b-4c20-aacd-04eb11e702c2"
}

```

{% tabs %}
{% tab title="Sample Response" %}
```
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": {
        "uuid": "4c054f71-790f-4cab-9530-2b18ba243c27",
        "name": "Dianne Spencer",
        "cost": "0.00",
        "scheduled_for": "Wed Dec 31 2025 10:05:10 GMT+0100 (West Africa Standard Time)",
        "status": "pending",
        "merchant_id": "EAZMC2DZ",
        "createdAt": "2025-02-18T14:02:27.403Z",
        "updatedAt": "2025-02-18T14:02:27.418Z",
        "bucket_id": "3d27d03c-e14d-494f-822e-106946898daf",
        "sender_id": "S-Alert",
        "template_id": "cdbbc03e-1e0b-4c20-aacd-04eb11e702c2"
    }
}
```
{% endtab %}
{% endtabs %}

#### FIND ALL CAMPAIGNS

This endpoint allows you to retrieve all campaigns

<mark style="color:green;">`GET`</mark> https://sandbox-api-d.squadco.com/sms/campaign

| Query Params | Type    | Description                          |
| ------------ | ------- | ------------------------------------ |
| perPage      | Integer | number of templates to view per page |
| page         | Integer | number of pages to view              |
| sort\_by     | String  | Sorted by creation date              |
| status       | String  | pending, failed or success           |
| name         | String  | name of campaign                     |
| dir          | String  | DSC/ASC                              |
| date\_from   | date    | beginning date                       |
| date\_to     | date    | ending                               |

### Delete Campaigns

<mark style="color:green;">`DELETE`</mark>https://sandbox-api-d.squadco.com/sms/bucket/\{{:id\}}

{% hint style="info" %}
id is a String
{% endhint %}
