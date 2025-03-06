---
description: These Suit of APIs allow you vend electricity tokens
---

# Electricity Subscription

## Account Lookup

This API allows you to retrieve the customer’s electricity details.

<mark style="color:green;">`POST`</mark> `https:{{base_url}}`/v1/service/electricity/lookup

### Request Body

| Name                                          | Type   | Description                                       |
| --------------------------------------------- | ------ | ------------------------------------------------- |
| meter\_type<mark style="color:red;">\*</mark> | String | Customer's electricity type (prepaid or postpaid) |
| customer\_id                                  | String | Customer's meter number                           |
| provider                                      | String | Meter Electricity provider (e.g  IE, EEDC)        |

### Sample Request

```
{
    "meter_type": "prepaid",
    "customer_id": "45067198783",
    "provider": "IE"
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
        "reference": "IE-25030438f258e38799d424",
        "customer_name": "Adene Jonah",
        "minimum_vend": 500,
        "address": "Mr. John Doe 34 Tokai, Abuja. 7999.",
        "kct": "",
        "meter_number": "45067198783",
        "meter_type": "prepaid"
    }
}
```


{% endtab %}

{% tab title="Unauthorized" %}

{% endtab %}
{% endtabs %}

## Electricity Purchase (Vend)

This API vends and generates an electricity token for the customer.

<mark style="color:green;">`POST`</mark> `https:{{base_url}}`/v1/service/electricity/vend

| Name                                       | Type   | Description                                      |
| ------------------------------------------ | ------ | ------------------------------------------------ |
| provider<mark style="color:red;">\*</mark> | String | Meter Electricity provider (e.g, IE, EEDC)       |
| reference                                  | String | Reference provided by Provider in account lookup |
| amount                                     | String | Amount of electricity to be purchased            |
| phone\_number                              | String | Phone number of the customer                     |
| email                                      | String | Email address of the customer                    |

### Sample Request

```
{
    "provider": "IE",
    "reference": "IE-25030438f258e38799d424",
    "amount": 700,
    "phone_number": "08102345663",
    "email": "tamtest@squadco.com"
}
```

### Sample Response

{% tabs %}
{% tab title="200 Success" %}
```
{
    "status": 200,
    "success": true,
    "message": "Successful",
    "data": {
        "reference": "IE-25030438f258e38799d424",
        "token": "112345678567859765456788",
        "total_units": "333.300",
        "address": "Mr. John Doe 34 Tokai, Abuja. 7999.",
        "kct": "",
        "meter_number": "45067198783",
        "meter_type": "prepaid"
    }
}
```


{% endtab %}

{% tab title="Unauthorized" %}

{% endtab %}
{% endtabs %}
