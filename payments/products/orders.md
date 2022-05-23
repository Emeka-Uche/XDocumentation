---
coverY: 229.6932515337423
---

# Orders

Get Orders on your integration

{% swagger method="post" path="orders" baseUrl="https://sandbox-api-d.squadco.com/" summary="Create Order" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="header" type="JSON" name="Content-Type" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="customer_name" type="string" required="true" %}
Customer name
{% endswagger-parameter %}

{% swagger-parameter in="body" name="business_name" type="string" required="true" %}
Name of business
{% endswagger-parameter %}

{% swagger-parameter in="body" name="customer_phone" type="integer" required="true" %}
Customer phone number
{% endswagger-parameter %}

{% swagger-parameter in="body" name="customer_email" required="true" type="string" %}
Customer email address
{% endswagger-parameter %}

{% swagger-parameter in="body" name="customer_address" type="string" required="true" %}
Customer address
{% endswagger-parameter %}

{% swagger-parameter in="body" name="currency_id" type="string" required="true" %}
Currency for the price. NGN, USD, or GHS
{% endswagger-parameter %}

{% swagger-parameter in="body" name="notes" type="string" %}
Personal notes
{% endswagger-parameter %}

{% swagger-parameter in="body" name="hash" type="string" %}
Hash number
{% endswagger-parameter %}

{% swagger-parameter in="body" name="pickup_location" type="string" %}
Customer pickup location
{% endswagger-parameter %}

{% swagger-parameter in="body" name="location" type="string" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="products" type="list" required="true" %}
List of products 
{% endswagger-parameter %}

{% swagger-parameter in="body" name="slug" type="string" %}
Product slug and tags
{% endswagger-parameter %}

{% swagger-parameter in="body" name="qty" type="integer" %}
Quantity of products
{% endswagger-parameter %}

{% swagger-response status="403: Forbidden" description="" %}
```javascript
{
    "success": false,
    "message": " "'test_sk_sample-secret-key-1' not a valid key=value pair (missing equal-sign) in Authorization header: 'Bearer test_sk_sample-secret-key-1'."",
    "data": {}
}
```
{% endswagger-response %}
{% endswagger %}
