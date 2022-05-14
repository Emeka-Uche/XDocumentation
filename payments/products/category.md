---
coverY: 0
---

# Category

Get categories in your integration

{% swagger method="get" path="/category/{{paylink_cat_slug}}" baseUrl="https://sandbox-api-d.squadco.com" summary="Get Category" %}
{% swagger-description %}
Get specific category
{% endswagger-description %}

{% swagger-parameter in="header" name="content-type" type="JSON" required="true" %}

{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": {
        "slug": "clothing",
        "name": "Clothing",
        "merchant_id": null,
        "createdAt": "2021-09-13T07:42:37.114Z",
        "updatedAt": "2021-09-13T07:42:37.114Z"
    }
}
```
{% endswagger-response %}
{% endswagger %}



{% swagger method="get" path="" baseUrl="https://test-api.squadinc.co/category?type=default" summary="Get All Categories" %}
{% swagger-description %}
Get all product categories 
{% endswagger-description %}

{% swagger-parameter in="header" name="content-type" type="JSON" required="true" %}

{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": [
        {
            "slug": "clothing",
            "name": "Clothing",
            "merchant_id": null,
            "createdAt": "2021-09-13T07:42:37.114Z",
            "updatedAt": "2021-09-13T07:42:37.114Z"
        },
        {
            "slug": "security",
            "name": "Security",
            "merchant_id": null,
            "createdAt": "2021-09-13T07:42:37.114Z",
            "updatedAt": "2021-09-13T07:42:37.114Z"
        },
        {
            "slug": "bags_and_accessories",
            "name": "Bags and Accessories",
            "merchant_id": null,
            "createdAt": "2021-09-13T07:42:37.114Z",
            "updatedAt": "2021-09-13T07:42:37.114Z"
        },
        {
            "slug": "health",
            "name": "Health",
            "merchant_id": null,
            "createdAt": "2021-09-13T07:42:37.114Z",
            "updatedAt": "2021-09-13T07:42:37.114Z"
        },
        {
            "slug": "beauty",
            "name": "Beauty",
            "merchant_id": null,
            "createdAt": "2021-09-13T07:42:37.114Z",
            "updatedAt": "2021-09-13T07:42:37.114Z"
        },
        {
            "slug": "food",
            "name": "Food",
            "merchant_id": null,
            "createdAt": "2021-09-13T07:42:37.114Z",
            "updatedAt": "2021-09-13T07:42:37.114Z"
        },
        {
            "slug": "drinks",
            "name": "Drinks",
            "merchant_id": null,
            "createdAt": "2021-09-13T07:42:37.114Z",
            "updatedAt": "2021-09-13T07:42:37.114Z"
        },
        {
            "slug": "electronics",
            "name": "Electronics",
            "merchant_id": null,
            "createdAt": "2021-09-13T07:42:37.114Z",
            "updatedAt": "2021-09-13T07:42:37.114Z"
        },
        {
            "slug": "body_care",
            "name": "Body care",
            "merchant_id": null,
            "createdAt": "2021-09-13T07:42:37.114Z",
            "updatedAt": "2021-09-13T07:42:37.114Z"
        },
        {
            "slug": "books",
            "name": "Books",
            "merchant_id": null,
            "createdAt": "2021-09-13T07:42:37.114Z",
            "updatedAt": "2021-09-13T07:42:37.114Z"
        },
        {
            "slug": "sports",
            "name": "Sports",
            "merchant_id": null,
            "createdAt": "2021-09-13T07:42:37.114Z",
            "updatedAt": "2021-09-13T07:42:37.114Z"
        },
        {
            "slug": "stationary",
            "name": "Stationary",
            "merchant_id": null,
            "createdAt": "2021-09-13T07:42:37.114Z",
            "updatedAt": "2021-09-13T07:42:37.114Z"
        },
        {
            "slug": "baby_products",
            "name": "Baby products",
            "merchant_id": null,
            "createdAt": "2021-09-13T07:42:37.114Z",
            "updatedAt": "2021-09-13T07:42:37.114Z"
        },
        {
            "slug": "furniture_and_household_goods",
            "name": "Furniture and household goods",
            "merchant_id": null,
            "createdAt": "2021-09-13T07:42:37.114Z",
            "updatedAt": "2021-09-13T07:42:37.114Z"
        },
        {
            "slug": "groceries",
            "name": "Groceries",
            "merchant_id": null,
            "createdAt": "2021-09-13T07:42:37.114Z",
            "updatedAt": "2021-09-13T07:42:37.114Z"
        },
        {
            "slug": "technology",
            "name": "Technology",
            "merchant_id": null,
            "createdAt": "2021-09-13T07:42:37.114Z",
            "updatedAt": "2021-09-13T07:42:37.114Z"
        },
        {
            "slug": "flowers_and_gifts",
            "name": "Flowers and Gifts",
            "merchant_id": null,
            "createdAt": "2021-09-13T07:42:37.114Z",
            "updatedAt": "2021-09-13T07:42:37.114Z"
        },
        {
            "slug": "others",
            "name": "Others",
            "merchant_id": null,
            "createdAt": "2021-09-13T07:42:37.114Z",
            "updatedAt": "2021-09-13T07:42:37.114Z"
        }
    ]
}
```
{% endswagger-response %}
{% endswagger %}
