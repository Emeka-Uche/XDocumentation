---
description: >-
  A bucket is a collection of phone numbers that can be uploaded, organized into
  an excel format
---

# BUCKET

#### CREATE BUCKET

This endpoint allows you to create a bucket which contains all the phone numbers to be reached via sms.

<mark style="color:green;">`POST`</mark> https://sandbox-api-d.squadco.com/sms/bucket

#### Request Body

| Name                                          | Type   | Description                                 |
| --------------------------------------------- | ------ | ------------------------------------------- |
| name<mark style="color:red;">\*</mark>        | String | Name of the bucket                          |
| description<mark style="color:red;">\*</mark> | String | Description of bucket                       |
| file\_name<mark style="color:red;">\*</mark>  | String | name of file (should have a .csv extension) |

> Once a request is successfully sent a file path (signed\_url) is provided in the response message, you are to follow the link on a browser and upload a csv file containing the list of phone numbers

#### Sample Request

```
{
  "name": "file1234",
  "description": "baa baa black sheep",
  "file_name": "teest.csv"
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
        "uuid": "ec571a9a-0c78-4d98-9956-1e5ede72d344",
        "status": "pending",
        "name": "file1234",
        "description": "baa baa black sheep",
        "merchant_id": "AABBCCDDEEFFGGHHJJKK",
        "updatedAt": "2025-05-22T09:34:58.800Z",
        "createdAt": "2025-05-22T09:34:58.800Z",
        "size": null,
        "file_url": null,
        "estimated_cost": null,
        "headers": null,
        "meta": null,
        "signed_url": "https://s3.eu-west-2.amazonaws.com/squadinc.co-gateway-mobile-app-service-dev/bulk_sms/AABBCCDDEEFFGGHHJJKK/campaign/ec571a9a-0c78-4d98-9956-1e5ede72d344/teest.csv/1747906498860-523754.csv?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYPHEQVFJHOQDZNU6%2F20250522%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T093458Z&X-Amz-Expires=300&X-Amz-Signature=1f1f0017519941522352b1e8496d41b7641d7a8dd800cc3948afaf8850f86e79&X-Amz-SignedHeaders=host%3Bx-amz-acl&x-amz-acl=public-read"
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

<mark style="color:green;">`GET`</mark> https://sandbox-api-d.squadco.com/sms/bucket



{% tabs %}
{% tab title="Success Response" %}
```
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": {
        "count": 2,
        "rows": [
            {
                "uuid": "ec571a9a-0c78-4d98-9956-1e5ede72d344",
                "merchant_id": "AABBCCDDEEFFGGHHJJKK",
                "name": "file1234",
                "description": "baa baa black sheep",
                "size": null,
                "file_url": null,
                "estimated_cost": null,
                "headers": null,
                "status": "pending",
                "meta": null,
                "createdAt": "2025-05-22T09:34:58.800Z",
                "updatedAt": "2025-05-22T09:34:58.800Z"
            },
            {
                "uuid": "0f704e13-7b52-4ceb-a3ee-a1a253d14d97",
                "merchant_id": "AABBCCDDEEFFGGHHJJKK",
                "name": "file123",
                "description": "baa baa black sheep",
                "size": null,
                "file_url": null,
                "estimated_cost": null,
                "headers": null,
                "status": "pending",
                "meta": null,
                "createdAt": "2025-05-21T16:03:17.357Z",
                "updatedAt": "2025-05-21T16:03:17.357Z"
            }
        ]
    }
}

```
{% endtab %}

{% tab title="Error Response" %}

{% endtab %}
{% endtabs %}

#### DELETE CREATED BUCKETS

This endpoint allows you to delete a bucket

<mark style="color:green;">`DELETE`</mark> https://sandbox-api-d.squadco.com//sms/bucket/\{{:id\}}

{% hint style="info" %}
id is a String
{% endhint %}

**Sample Response**

```
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": {
        "uuid": "907f7702-6bd3-4667-b8ad-3b041cb3e217",
        "merchant_id": "development_sk_sample-secret-key-1",
        "name": "file123",
        "description": "baa baa black sheep",
        "size": null,
        "file_url": null,
        "estimated_cost": null,
        "headers": null,
        "status": "pending",
        "meta": null,
        "createdAt": "2025-05-22T09:04:46.576Z",
        "updatedAt": "2025-05-22T09:04:46.576Z"
    }
}

```
