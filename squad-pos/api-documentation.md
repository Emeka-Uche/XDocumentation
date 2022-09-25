# API Documentation

{% hint style="danger" %}
**Authorization** Any request made without the authorization key (secret key) will fail with a **`401`**` ``(Unauthorized)` response code.
{% endhint %}

{% hint style="info" %}
**The authorization key is sent via the request header as Bearer Token Authorization**
{% endhint %}

**Example:**\
****Authorization**:** Bearer **** sandbox\_sk\_94f2b798466408ef4d19e848ee1a4d1a3e93f104046f

### Get all Transactions

This API allows you get all your SquadPOS transactions

{% swagger method="get" path="/softpos/transactions?perPage&page&date_from&date_to&sort_by_dir&sort_by" baseUrl="https://sandbox-api-d.squadco.com" summary="Allows you get all your Squad POS transactions" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="perPage" type="Integer" %}
Number of transactions per page
{% endswagger-parameter %}

{% swagger-parameter in="query" name="page" type="Integer" %}
page number
{% endswagger-parameter %}

{% swagger-parameter in="query" name="date_from" type="date" %}
Format : YYYY-MM-DD 

\


Start Date
{% endswagger-parameter %}

{% swagger-parameter in="query" name="date_to" type="date" %}
Format : YYYY-MM-DD 

\


End Date
{% endswagger-parameter %}

{% swagger-parameter in="query" name="sort_by_dir" type="String" %}
Filter Parameter
{% endswagger-parameter %}

{% swagger-parameter in="query" name="sort_by" type="String" %}
Filter Parameter which can be any field/parameter in the transaction details
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    // Response
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
    // Response
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

{% swagger-response status="200: OK" description="Success" %}
```javascript
{
    // Response
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
