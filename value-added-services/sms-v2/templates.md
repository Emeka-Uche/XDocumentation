---
description: >-
  A Template is a pre defined message format which can be called over and over
  again, without requiring to rewrite again.
---

# TEMPLATES

#### CREATE TEMPLATE

This endpoint allows you to create a template&#x20;

<mark style="color:green;">`POST`</mark> https://sandbox-api-d.squadco.com/sms/template

#### Request Body

| Name                                          | Type   | Description               |
| --------------------------------------------- | ------ | ------------------------- |
| name<mark style="color:red;">\*</mark>        | String | Name of the template      |
| description<mark style="color:red;">\*</mark> | String | Description of template   |
| message<mark style="color:red;">\*</mark>     | String | Message format to be sent |

#### Sample Request

```
{
    "name": "First template",
    "description": "Used for new user onboarding",
    "message": "Welcome to our platform!"
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
        "uuid": "5b9840d0-2382-4289-a4da-d7ecf3270d98",
        "merchant_id": "AABBCCDDEEFFGGHHJJKK",
        "name": "First template",
        "description": "Used for new user onboarding",
        "pages": 1,
        "message": "Welcome to our platform!",
        "createdAt": "2025-05-22T10:08:03.733Z",
        "updatedAt": "2025-05-22T10:08:03.733Z"
    }
}
```
{% endtab %}
{% endtabs %}

#### GET TEMPLATES

This endpoint allows you to retrieve created templates

<mark style="color:green;">`GET`</mark> https://sandbox-api-d.squadco.com/sms/template

| Query Params | Type    | Description                          |
| ------------ | ------- | ------------------------------------ |
| perPage      | Integer | number of templates to view per page |
| page         | Integer | number of pages to view              |
| sort\_by     | String  | Sorted by creation date              |
| dir          | String  | DSC/ASC                              |
| date\_from   | date    | beginning date                       |
| date\_to     | date    | ending                               |



{% tabs %}
{% tab title="Success Response" %}
```
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": {
        "count": 1,
        "rows": [
            {
                "uuid": "a3795ac3-8252-4ce0-aa6c-def776570455",
                "merchant_id": "EAZMC2DZ",
                "name": "Test_002",
                "description": "Test template",
                "pages": 1,
                "message": "Hi, Get a life",
                "createdAt": "2025-05-16T14:19:44.380Z",
                "updatedAt": "2025-05-16T14:19:44.380Z"
            }
        ]
    }
}
```
{% endtab %}
{% endtabs %}

#### EDIT CREATED TEMPLATES

This endpoint allows you to edit the body of a template.

<mark style="color:green;">`PATCH`</mark> https://sandbox-api-d.squadco.com/sms/template/:id

{% hint style="info" %}
id is a String
{% endhint %}

#### Sample Request

```
{
  "name": "file123",
  "description": "baa baa black sheep",
  "file_name": "test.csv"
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
        "uuid": "edb720f0-6162-46f2-aafe-c52962bd56f8",
        "merchant_id": "development_sk_sample-secret-key-1",
        "name": "Updated Template",
        "description": "Updated description here",
        "pages": 1,
        "message": "This is an updated message.",
        "createdAt": "2025-05-22T09:11:48.562Z",
        "updatedAt": "2025-05-22T09:13:40.273Z"
    }
}

```
{% endtab %}
{% endtabs %}

#### DELETE CREATED TEMPLATE

This endpoint allows you to delete a template

<mark style="color:green;">`DELETE`</mark> https://sandbox-api-d.squadco.com/sms/template/\{{:id\}}

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
        "uuid": "edb720f0-6162-46f2-aafe-c52962bd56f8",
        "merchant_id": "EAZMC2DZ",
        "name": "Updated Template",
        "description": "Updated description here",
        "pages": 1,
        "message": "This is an updated message.",
        "createdAt": "2025-05-22T09:11:48.562Z",
        "updatedAt": "2025-05-22T09:13:40.273Z"
    }
}

```
