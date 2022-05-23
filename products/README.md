---
coverY: 243.43558282208588
---

# Products

With the Products API you can create and manage products and inventories on your integration

{% swagger method="get" path="/product" baseUrl="https://sandbox-api-d.squadco.com" summary="Get Products" %}
{% swagger-description %}
Get product details
{% endswagger-description %}

{% swagger-parameter in="header" name="content-type" type="JSON" %}

{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": {
        "count": 4,
        "rows": [
            {
                "slug": "qwert",
                "name": "qwert",
                "description": "qwertyuiop",
                "in_stock": null,
                "createdAt": "2021-09-13T10:00:30.450Z",
                "updatedAt": "2021-09-13T10:00:30.450Z",
                "amounts": [
                    {
                        "amount": 30000,
                        "currency_id": "NGN"
                    },
                    {
                        "amount": 40000,
                        "currency_id": "USD"
                    }
                ],
                "category": {
                    "slug": "clothing",
                    "name": "Clothing",
                    "merchant_id": null,
                    "createdAt": "2021-09-13T07:42:37.114Z",
                    "updatedAt": "2021-09-13T07:42:37.114Z"
                },
                "images": [
                    {
                        "ext": "jpg",
                        "file_name": "finger.jpg",
                        "url": "https://dev-gateway-payment-link-service.s3.eu-west-2.amazonaws.com/AABBCCDDEEFFGGHHJJKK/product/qwert/1631527231099-864561.jpg",
                        "verified_at": "2021-09-13T10:00:36.950Z"
                    }
                ]
            },
            {
                "slug": "macbook_pro",
                "name": "MacBook Pro",
                "description": "Dopest MacBook Pro your money can't buy",
                "in_stock": null,
                "createdAt": "2021-09-13T07:42:37.174Z",
                "updatedAt": "2021-09-13T07:42:37.174Z",
                "amounts": [
                    {
                        "amount": 5000,
                        "currency_id": "NGN"
                    },
                    {
                        "amount": 500,
                        "currency_id": "USD"
                    }
                ],
                "category": {
                    "slug": "electronics",
                    "name": "Electronics",
                    "merchant_id": null,
                    "createdAt": "2021-09-13T07:42:37.114Z",
                    "updatedAt": "2021-09-13T07:42:37.114Z"
                },
                "images": [
                    {
                        "ext": "png",
                        "file_name": "sample-file.png",
                        "url": "https://picsum.photos/600",
                        "verified_at": "2021-09-13T07:42:36.976Z"
                    },
                    {
                        "ext": "png",
                        "file_name": "sample-file.png",
                        "url": "https://picsum.photos/400/600",
                        "verified_at": "2021-09-13T07:42:36.976Z"
                    },
                    {
                        "ext": "png",
                        "file_name": "sample-file.png",
                        "url": "https://picsum.photos/700/400",
                        "verified_at": "2021-09-13T07:42:36.976Z"
                    }
                ]
            },
            {
                "slug": "hoop_earrings",
                "name": "Hoop Earrings",
                "description": "Earrings for slay queens",
                "in_stock": null,
                "createdAt": "2021-09-13T07:42:37.174Z",
                "updatedAt": "2021-09-13T07:42:37.174Z",
                "amounts": [
                    {
                        "amount": 5000,
                        "currency_id": "NGN"
                    },
                    {
                        "amount": 500,
                        "currency_id": "USD"
                    }
                ],
                "category": {
                    "slug": "bags_and_accessories",
                    "name": "Bags and Accessories",
                    "merchant_id": null,
                    "createdAt": "2021-09-13T07:42:37.114Z",
                    "updatedAt": "2021-09-13T07:42:37.114Z"
                },
                "images": [
                    {
                        "ext": "png",
                        "file_name": "sample-file.png",
                        "url": "https://picsum.photos/600",
                        "verified_at": "2021-09-13T07:42:36.976Z"
                    },
                    {
                        "ext": "png",
                        "file_name": "sample-file.png",
                        "url": "https://picsum.photos/400/600",
                        "verified_at": "2021-09-13T07:42:36.976Z"
                    },
                    {
                        "ext": "png",
                        "file_name": "sample-file.png",
                        "url": "https://picsum.photos/700/400",
                        "verified_at": "2021-09-13T07:42:36.976Z"
                    }
                ]
            },
            {
                "slug": "basketball",
                "name": "Basketball",
                "description": "Basic gear for the future big boy",
                "in_stock": null,
                "createdAt": "2021-09-13T07:42:37.174Z",
                "updatedAt": "2021-09-13T07:42:37.174Z",
                "amounts": [
                    {
                        "amount": 5000,
                        "currency_id": "NGN"
                    },
                    {
                        "amount": 500,
                        "currency_id": "USD"
                    }
                ],
                "category": {
                    "slug": "sports",
                    "name": "Sports",
                    "merchant_id": null,
                    "createdAt": "2021-09-13T07:42:37.114Z",
                    "updatedAt": "2021-09-13T07:42:37.114Z"
                },
                "images": [
                    {
                        "ext": "png",
                        "file_name": "sample-file.png",
                        "url": "https://picsum.photos/600",
                        "verified_at": "2021-09-13T07:42:36.976Z"
                    },
                    {
                        "ext": "png",
                        "file_name": "sample-file.png",
                        "url": "https://picsum.photos/400/600",
                        "verified_at": "2021-09-13T07:42:36.976Z"
                    },
                    {
                        "ext": "png",
                        "file_name": "sample-file.png",
                        "url": "https://picsum.photos/700/400",
                        "verified_at": "2021-09-13T07:42:36.976Z"
                    }
                ]
            }
        ],
        "query": {
            "total": 4
        }
    }
}
```
{% endswagger-response %}

{% swagger-response status="403: Forbidden" description="" %}
```javascript
{
    "success": false,
    "message": "API key is invalid. Key must start with live_sk_ or test_sk_",
    "data": {}
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger method="post" path="/products" baseUrl="https://test-api.squadinc.co/products" summary="Add Product" %}
{% swagger-description %}
Add products details
{% endswagger-description %}

{% swagger-parameter in="body" name="name" type="string" required="true" %}
Name of product
{% endswagger-parameter %}

{% swagger-parameter in="body" name="description" type="string" required="true" %}
Product description
{% endswagger-parameter %}

{% swagger-parameter in="body" name="category_slug" required="true" type="string" %}
Product category or tag
{% endswagger-parameter %}

{% swagger-parameter in="body" name="amount" type="integer" required="true" %}
Price of product
{% endswagger-parameter %}

{% swagger-parameter in="body" name="currency_id" type="string" required="true" %}
Currency for the price. NGN, USD, or GHS
{% endswagger-parameter %}
{% endswagger %}
