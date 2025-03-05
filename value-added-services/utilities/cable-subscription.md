---
description: These Suit of APIs allow you vend cable subscriptions
---

# Cable Subscription



## BOUQUET LIST

This API allows you to retrieve the bouquet list of a cable provider

<mark style="color:green;">`POST`</mark> `https:{{base_url}}`/v1/service/cable/bouquet-list

### Request Body

| Name                                       | Type   | Description                              |
| ------------------------------------------ | ------ | ---------------------------------------- |
| provider<mark style="color:red;">\*</mark> | String | Name of Cable Provider (e.g, GoTV, DSTV) |

### Sample Request

{&#x20;

&#x20;   "provider": "GOTV"

}&#x20;

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

