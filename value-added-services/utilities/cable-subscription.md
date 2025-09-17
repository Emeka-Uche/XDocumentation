---
description: These Suit of APIs allow you vend cable subscriptions
---

# Cable Subscription

{% hint style="danger" %}
**This documentation site has been deprecated as of September 8, 2025, and will no longer receive updates. Please refer to the new documentation site at** [**https://docs.squadco.com**](https://docs.squadco.com)**.**
{% endhint %}

## BOUQUET LIST

This API allows you to retrieve the bouquet list of a cable provider

<mark style="color:green;">`POST`</mark> `https:{{base_url}}`/v1/service/cable/bouquet-list

### Request Body

| Name                                       | Type   | Description                              |
| ------------------------------------------ | ------ | ---------------------------------------- |
| provider<mark style="color:red;">\*</mark> | String | Name of Cable Provider (e.g, GoTV, DSTV) |

### Sample Request

```
{ 
    "provider": "GOTV"
} 
```

### Sample Response

{% tabs %}
{% tab title="200 Success" %}
```
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": {
        "bouquets": [
            {
                "name": "Smallie",
                "platform": "GOTV",
                "code": "GOLITE",
                "kobo_amount": 157500,
                "currency": "NGN",
                "provider": "GOTV"
            },
            {
                "name": "Jinja Bouquet",
                "platform": "GOTV",
                "code": "GOtvNJ1",
                "kobo_amount": 330000,
                "currency": "NGN",
                "provider": "GOTV"
            }
        ]
    }
}

```


{% endtab %}

{% tab title="Unauthorized" %}

{% endtab %}
{% endtabs %}

## ACCOUNT LOOKUP

This API allows you to look up the smartcard number of a provider before vending.

<mark style="color:green;">`POST`</mark> `https:{{base_url}}`/v1/service/cable/lookup

### REQUEST BODY

| Name                                                | Type   | Description                              |
| --------------------------------------------------- | ------ | ---------------------------------------- |
| provider<mark style="color:red;">\*</mark>          | String | Name of Cable Provider (e.g, GoTV, DSTV) |
| smartcard\_number<mark style="color:red;">\*</mark> | String | The smartcard number of the decoder      |

### Sample Request

```
{
    "provider": "GOTV",
    "smartcard_number": "4135391280"
}

```

### Sample Response

{% tabs %}
{% tab title="200 Success" %}
```
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": {
        "reference": "MLTCHC-250228dd3bccb250f3ed1b",
        "customer_name": "ONYENULOYA"
    }
}
```


{% endtab %}

{% tab title="Unauthorized" %}
```
```


{% endtab %}
{% endtabs %}

## CABLE SUBSCRIPTION (VEND)

This API allows you to subscribe to a bouquet.

<mark style="color:green;">`POST`</mark> `https:{{base_url}}`/v1/service/cable/vend

{% hint style="info" %}
Before vending, you must have first called the Account lookup endpoint, and pass the reference generated as your reference in order to vend
{% endhint %}

### Request Body

| Name                                            | Type   | Description                              |
| ----------------------------------------------- | ------ | ---------------------------------------- |
| provider<mark style="color:red;">\*</mark>      | String | Name of Cable Provider (e.g, GoTV, DSTV) |
| reference<mark style="color:red;">\*</mark>     | String | Reference retrived from account lookup   |
| boquet\_code<mark style="color:red;">\*</mark>  | String | Provider's boquet package                |
| phone\_number<mark style="color:red;">\*</mark> | String | Phone number of the user                 |
| email<mark style="color:red;">\*</mark>         | String | Email address of the user                |

### Sample Request

```
{
    "provider": "GOTV",
    "reference": "MLTCHC-250228dd3bccb250f3ed1b",
    "bouquet_code": "GOTVMAX",
    "phone_number": "08061234567",
    "email": "cable@squadco.com"
}
```

### Sample Response

{% tabs %}
{% tab title="200 Success" %}
```
{
    "status": 200,
    "success": true,
    "message": "Transaction in process, client will be notified",
    "data": {
        "reference": "MLTCHC-250228dd3bccb250f3ed1b",
        "bouquet": {
            "platform": "GOTV",
            "name": "Max Bouquet",
            "code": "GOTVMAX",
            "kobo_amount": 720000,
            "currency": "NGN",
            "provider": "GOTV"
        }
    }
}

```


{% endtab %}

{% tab title="Error Response" %}
```
{
    "status": 404,
    "success": false,
    "message": "No transaction found with specified parameters",
    "data": {}
}
```


{% endtab %}

{% tab title="Unauthorized" %}
````
{
    "status": 401,
    "success": false,
    "message": "Authorization failed",
    "data": {}
}
```
````


{% endtab %}
{% endtabs %}
