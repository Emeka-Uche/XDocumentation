# API Documentation

{% hint style="danger" %}
**Authorization** Any request made without the authorization key (secret key) will fail with a **`401`**` ``(Unauthorized)` response code.
{% endhint %}

{% hint style="info" %}
**The authorization key is sent via the request header as Bearer Token Authorization**
{% endhint %}

**Example:**\
Authorization**:** Bearer sandbox\_sk\_94f2b798466408ef4d19e848ee1a4d1a3e93f104046f

### Get all Transactions

This API allows you get all your SquadPOS transactions

{% swagger method="get" path="/softpos/transactions?perPage&page" baseUrl="https://sandbox-api-d.squadco.com" summary="Allows you get all your Squad POS transactions" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="perPage" type="Integer" required="true" %}
Number of transactions per page
{% endswagger-parameter %}

{% swagger-parameter in="query" name="page" type="Integer" required="true" %}
page number
{% endswagger-parameter %}

{% swagger-parameter in="query" name="date_from" type="date" %}
Format : YYYY-MM-DD \
Start Date
{% endswagger-parameter %}

{% swagger-parameter in="query" name="date_to" type="date" %}
Format : YYYY-MM-DD \
End Date
{% endswagger-parameter %}

{% swagger-parameter in="query" name="sort_by" type="String" %}
Sorting Parameter. This can have a value of "createdAt"
{% endswagger-parameter %}

{% swagger-parameter in="query" name="sort_by_dir" type="String" %}
This arranges the transactions in ascending or descending order.\
possible values are "ASC" - ascending order\
"DESC" - descending order
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="Success" %}
```javascript
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": {
        "count": 8,
        "rows": [
            {
                "id": "1",
                "amount": "10000",
                "status": 0,
                "card": "5074 *** *** 2234",
                "createdAt": "2021-12-08T15:05:10.316Z",
                "updatedAt": "2021-12-08T15:05:10.316Z",
                "deletedAt": null,
                "merchant_id": "1",
                "terminal_id": "1",
                "location_id": "1"
            },
            {
                "id": "2",
                "amount": "50000",
                "status": 0,
                "card": "5074 *** *** 2234",
                "createdAt": "2021-12-08T15:05:10.316Z",
                "updatedAt": "2021-12-08T15:05:10.316Z",
                "deletedAt": null,
                "merchant_id": "1",
                "terminal_id": "1",
                "location_id": "1"
            },
            {
                "id": "3",
                "amount": "100000",
                "status": 0,
                "card": "5074 *** *** 2234",
                "createdAt": "2021-12-08T15:05:10.316Z",
                "updatedAt": "2021-12-08T15:05:10.316Z",
                "deletedAt": null,
                "merchant_id": "1",
                "terminal_id": "2",
                "location_id": "2"
            },
            {
                "id": "4",
                "amount": "7000",
                "status": 0,
                "card": "5074 *** *** 2234",
                "createdAt": "2021-12-08T15:05:10.316Z",
                "updatedAt": "2021-12-08T15:05:10.316Z",
                "deletedAt": null,
                "merchant_id": "1",
                "terminal_id": "2",
                "location_id": "2"
            },
            {
                "id": "5",
                "amount": "10000",
                "status": 0,
                "card": "5074 *** *** 2234",
                "createdAt": "2021-12-08T15:05:10.316Z",
                "updatedAt": "2021-12-08T15:05:10.316Z",
                "deletedAt": null,
                "merchant_id": "1",
                "terminal_id": "3",
                "location_id": "2"
            },
            {
                "id": "6",
                "amount": "35000",
                "status": 0,
                "card": "5074 *** *** 2234",
                "createdAt": "2021-12-08T15:05:10.316Z",
                "updatedAt": "2021-12-08T15:05:10.316Z",
                "deletedAt": null,
                "merchant_id": "1",
                "terminal_id": "3",
                "location_id": "2"
            },
            {
                "id": "7",
                "amount": "10000",
                "status": 0,
                "card": "5074 *** *** 2234",
                "createdAt": "2021-12-08T15:05:10.316Z",
                "updatedAt": "2021-12-08T15:05:10.316Z",
                "deletedAt": null,
                "merchant_id": "1",
                "terminal_id": "4",
                "location_id": "3"
            },
            {
                "id": "8",
                "amount": "22000",
                "status": 0,
                "card": "5074 *** *** 2234",
                "createdAt": "2021-12-08T15:05:10.316Z",
                "updatedAt": "2021-12-08T15:05:10.316Z",
                "deletedAt": null,
                "merchant_id": "1",
                "terminal_id": "4",
                "location_id": "3"
            }
        ]
    }
}
```
{% endswagger-response %}

{% swagger-response status="401: Unauthorized" description="No API key" %}
```javascript
{
    "success": false,
    "message": "",
    "data": {}
}
```
{% endswagger-response %}

{% swagger-response status="404: Not Found" description="Not Profiled for SquadPOS" %}
```javascript
{
    "status": 404,
    "success": false,
    "message": "Merchant does not exist",
    "data": {}
}
```
{% endswagger-response %}
{% endswagger %}

### Create Terminal

This API allows yopu create multiple SquadPOS terminals which are associated to your squad account

{% swagger method="post" path="/softpos/terminal" baseUrl="https://sandbox-api-d.squadco.com" summary="" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="header" name="content-type" type="String" required="true" %}
application/json
{% endswagger-parameter %}

{% swagger-parameter in="body" name="email" type="String" required="true" %}
unique email to be associated to the terminal being created
{% endswagger-parameter %}

{% swagger-parameter in="body" name="name" type="String" required="true" %}
Name to be associated to the terminal
{% endswagger-parameter %}

{% swagger-parameter in="body" name="phone" type="String" required="true" %}
11 digit phone number to be associated to the terminal
{% endswagger-parameter %}

{% swagger-parameter in="body" name="location_id" type="Integer" required="true" %}
unique ID that identifies a particular location
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="Success" %}
```javascript
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": {
        "enabled": false,
        "id": "8",
        "name": "Sample name",
        "phone": "090123456789",
        "email": "Sample@email.com",
        "location_id": "1",
        "updatedAt": "2021-11-12T10:02:09.413Z",
        "createdAt": "2021-11-12T10:02:09.413Z",
        "deletedAt": null,
        "merchant_id": null
    }
}
```
{% endswagger-response %}

{% swagger-response status="401: Unauthorized" description="No API key" %}
```javascript
{
    "success": false,
    "message": "",
    "data": {}
}
```
{% endswagger-response %}

{% swagger-response status="404: Not Found" description="Not Profiled for Squad POS" %}
```javascript
{
    "status": 404,
    "success": false,
    "message": "Merchant does not exist",
    "data": {}
}
```
{% endswagger-response %}
{% endswagger %}

### Sample Request

```json
{
    "name": "Sample name",
    "email": "Sample@email.com",
    "phone": "090123456789",
    "location_id": 1
}
```

### Get all Terminals

This API allows you see all  SquadPOS terminals created and associated to your account.

{% swagger method="get" path="/softpos/terminals" baseUrl="https://sandbox-api-d.squadco.com" summary="" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="perPage" type="Integer" required="true" %}
Number of results per page
{% endswagger-parameter %}

{% swagger-parameter in="query" name="page" type="Integer" required="true" %}
Page Number
{% endswagger-parameter %}

{% swagger-parameter in="query" name="location_id" type="Integer" %}
an ID that identifies a location
{% endswagger-parameter %}

{% swagger-parameter in="query" name="sort_by" type="String" %}
Sorting Parameter. This can have a value of "createdAt"
{% endswagger-parameter %}

{% swagger-parameter in="query" name="sort_by_dir" type="String" %}
This arranges the transactions in ascending or descending order.\
possible values are "ASC" - ascending order\
"DESC" - descending order
{% endswagger-parameter %}

{% swagger-parameter in="query" name="date_from" type="date" %}
Format : YYYY-MM-DD \
Start Date
{% endswagger-parameter %}

{% swagger-parameter in="query" name="date_to" type="date" %}
Format : YYYY-MM-DD \
End Date
{% endswagger-parameter %}

{% swagger-parameter in="query" name="active" type="Boolean" %}
It takes a value of "True" or "False"
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="Success" %}
```javascript
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": {
        "count": 4,
        "rows": [
            {
                "id": "2",
                "merchant_id": "1",
                "name": "Terminal 2",
                "email": "merchant1.terminal2@example.com",
                "phone": "090123456789",
                "registered": false,
                "enabled": false,
                "active": false,
                "createdAt": "2021-11-20T16:11:21.570Z",
                "updatedAt": "2021-11-20T16:11:21.570Z",
                "deletedAt": null,
                "location_id": "2",
                "location": {
                    "id": "2",
                    "name": "Abuja",
                    "createdAt": "2021-11-20T16:11:21.410Z",
                    "updatedAt": "2021-11-20T16:11:21.410Z",
                    "deletedAt": null
                }
            },
            {
                "id": "3",
                "merchant_id": "1",
                "name": "Terminal 3",
                "email": "merchant1.terminal3@example.com",
                "phone": "090123456789",
                "registered": false,
                "enabled": false,
                "active": false,
                "createdAt": "2021-11-20T16:11:21.570Z",
                "updatedAt": "2021-11-20T16:11:21.570Z",
                "deletedAt": null,
                "location_id": "2",
                "location": {
                    "id": "2",
                    "name": "Abuja",
                    "createdAt": "2021-11-20T16:11:21.410Z",
                    "updatedAt": "2021-11-20T16:11:21.410Z",
                    "deletedAt": null
                }
            },
            {
                "id": "4",
                "merchant_id": "1",
                "name": "Terminal 4",
                "email": "merchant1.terminal4@example.com",
                "phone": "090123456789",
                "registered": false,
                "enabled": false,
                "active": false,
                "createdAt": "2021-11-20T16:11:21.570Z",
                "updatedAt": "2021-11-20T16:11:21.570Z",
                "deletedAt": null,
                "location_id": "3",
                "location": {
                    "id": "3",
                    "name": "Enugu",
                    "createdAt": "2021-11-20T16:11:21.410Z",
                    "updatedAt": "2021-11-20T16:11:21.410Z",
                    "deletedAt": null
                }
            },
            {
                "id": "1",
                "merchant_id": "1",
                "name": "Terminal 1",
                "email": "merchant1.terminal1@example.com",
                "phone": "090123456789",
                "registered": false,
                "enabled": false,
                "active": true,
                "createdAt": "2021-11-20T16:11:21.570Z",
                "updatedAt": "2021-11-20T16:24:29.624Z",
                "deletedAt": null,
                "location_id": "1",
                "location": {
                    "id": "1",
                    "name": "Lagos",
                    "createdAt": "2021-11-20T16:11:21.410Z",
                    "updatedAt": "2021-11-20T16:11:21.410Z",
                    "deletedAt": null
                }
            }
        ]
    }
}
```
{% endswagger-response %}

{% swagger-response status="401: Unauthorized" description="No API key" %}
```javascript
{
    "success": false,
    "message": "",
    "data": {}
}
```
{% endswagger-response %}

{% swagger-response status="404: Not Found" description="Not Profiled" %}
```javascript
{
    "status": 404,
    "success": false,
    "message": "Merchant does not exist",
    "data": {}
}
```
{% endswagger-response %}
{% endswagger %}

### GO LIVE - Production

To Use this API on production:

1. &#x20;Kindly change the base URL of the endpoint from sandbox-api-d.squadco.com to api-d.squadco.com
2. Get production keys from your production environment on dashboard.squadco.com and replace as authorization keys.
