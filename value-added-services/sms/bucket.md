---
description: >-
  A bucket is a collection of phone numbers that can be uploaded, organized into
  an excel format
---

# BUCKET

{% hint style="danger" %}
**This documentation site has been deprecated as of September 8, 2025, and will no longer receive updates. Please refer to the new documentation site at** [**https://docs.squadco.com**](https://docs.squadco.com)**.**
{% endhint %}

#### CREATE BUCKET

This endpoint allows you to create a bucket which contains all the phone numbers to be reached via sms.

<mark style="color:green;">`POST`</mark> https://squadbygtco.com:8080/dashboard/bucket

#### Request Body

| Name                                          | Type    | Description                     |
| --------------------------------------------- | ------- | ------------------------------- |
| name<mark style="color:red;">\*</mark>        | String  | Name of the bucket              |
| description<mark style="color:red;">\*</mark> | String  | Description of bucket           |
| Client\_id<mark style="color:red;">\*</mark>  | Integer | Unique Client ID pre-assigned   |
| items<mark style="color:red;">\*</mark>       | Object  | Phone number and detail of each |

#### Sample Request

```
{
  "name": "nov2022",
    "description": "November birthdays",
    "client_id": 1,
    "items": [
        {
            "phone_number": "0701234",
            "param1": "012"
        },
        {
            "phone_number": "0701234",
            "param1": "012"
        }
    ]

}
```

{% tabs %}
{% tab title="Success Response" %}
```
{
    "status": "CREATED",
    "message": "bucket created successfully",
    "data": {
        "id": 2,
        "name": "nov2022",
        "description": "november birthdays",
        "params": [
            "phone_number",
            "param1"
        ],
        "client_id": 1,
        "created_at": "2024-04-08T11:55:08.000Z",
        "created_by": 1,
        "updated_at": null,
        "updated_by": null,
        "bucket_items": 2
    }
}
```
{% endtab %}

{% tab title="Error Response" %}

{% endtab %}
{% endtabs %}

```
```

#### GET ALL CREATED BUCKETS

This endpoint allows you to retrieve created buckets

<mark style="color:green;">`GET`</mark> https://squadbygtco.com:8080/dashboard/bucket/by-client/1?page=1\&count=10



{% tabs %}
{% tab title="Success Response" %}
```
{
    "message": "success",
    "data": {
        "items": [
            {
                "id": 1,
                "name": "nov2022",
                "description": "november birthdays",
                "params": [
                    "phone_number",
                    "param1"
                ],
                "client_id": 1,
                "created_at": "2024-02-29T11:22:51.000Z",
                "created_by": 8,
                "updated_at": null,
                "updated_by": null
            },
            {
                "id": 2,
                "name": "nov2022",
                "description": "november birthdays",
                "params": [
                    "phone_number",
                    "param1"
                ],
                "client_id": 1,
                "created_at": "2024-04-08T11:55:08.000Z",
                "created_by": 1,
                "updated_at": null,
                "updated_by": null
            }
        ],
        "total": 2
    }
}
```
{% endtab %}

{% tab title="Error Response" %}

{% endtab %}
{% endtabs %}

#### UPDATE CREATED BUCKETS

This endpoint allows you to edit details for already created buckets. It allows editing the name of the bucket

<mark style="color:green;">`PATCH`</mark> https://squadbygtco.com:8080/dashboard/bucket/1

#### Sample Request

```
{
  "name":"nov2023_bucket"
}
```

{% tabs %}
{% tab title="Sample Response" %}
```
{
    "message": "success",
    "data": {
        "id": 1,
        "name": "nov2023_bucket",
        "description": "november birthdays",
        "params": [
            "phone_number",
            "param1"
        ],
        "client_id": 1,
        "created_at": "2024-02-29T11:22:51.000Z",
        "created_by": 8,
        "updated_at": "2024-04-08T12:47:21.000Z",
        "updated_by": 1
    }
}
```
{% endtab %}

{% tab title="Error Response" %}

{% endtab %}
{% endtabs %}

#### DELETE CREATED BUCKETS

This endpoint allows you to delete a bucket

<mark style="color:green;">`DELETE`</mark> https://squadbygtco.com:8080/dashboard/bucket/1



**Sample Response**

```
{
    "message": "success"
}
```
