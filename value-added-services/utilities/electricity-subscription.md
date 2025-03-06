---
description: These Suit of APIs allow you vend electricity tokens
---

# Electricity Subscription

## Electricity Providers Nationwide

<table><thead><tr><th width="258">Provider</th><th>Full Name</th><th>Region</th></tr></thead><tbody><tr><td>IE</td><td>Ikeja Electricity</td><td>Abule Egba, Akowonjo, Ikeja, Ikorodu, Oshodi and Shomolu in Lagos</td></tr><tr><td>EKEDC</td><td>Eko Electricity Distribution Company</td><td>Lekki, Ibeju, Islands, Ajah, Ajele, Orile, Ijora, Apapa, Mushin, Festac, Ojo, and Agbara in Lagos</td></tr><tr><td>AEDC </td><td>Abuja Electricity Distribution Company</td><td>FCT Abuja, Kogi, Niger, and Nasarawa States</td></tr><tr><td>YEDC</td><td>Yola Electricity Distribution Company</td><td>Adamawa, Taraba, Borno, and Yobe states</td></tr><tr><td>BEDC</td><td>Benin Electricity Distribution Company</td><td>Delta, Edo, Ekiti, and Ondo States</td></tr><tr><td>IBEDC</td><td>Ibadan Electricity Distribution Company</td><td>Oyo, Ibadan, Osun, Ogun &#x26; Kwara States</td></tr><tr><td>KEDCO</td><td>Kano Electricity Distribution Company</td><td>Kano, Katsina, and Jigawa States</td></tr><tr><td>KAEDC</td><td>Kaduna Electricity Distribution Company</td><td>Kaduna, Kebbi, Sokoto and Zamfara States</td></tr><tr><td>PHED</td><td>Port Harcourt Electricity Distribution Company</td><td>Rivers, Bayelsa, Cross River and Akwa-Ibom States</td></tr><tr><td>EEDC</td><td>Enugu Electricity Distribution Company</td><td>Abia, Anambra, Ebonyi, Enugu and Imo States</td></tr></tbody></table>

## Account Lookup

This API allows you to retrieve the customer’s electricity details.

<mark style="color:green;">`POST`</mark> `https:{{base_url}}`/v1/service/electricity/lookup

### Request Body

| Name                                           | Type   | Description                                       |
| ---------------------------------------------- | ------ | ------------------------------------------------- |
| meter\_type<mark style="color:red;">\*</mark>  | String | Customer's electricity type (prepaid or postpaid) |
| customer\_id<mark style="color:red;">\*</mark> | String | Customer's meter number                           |
| provider<mark style="color:red;">\*</mark>     | String | Meter Electricity provider (e.g  IE, EEDC)        |

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
```
{
    "status": 401,
    "success": false,
    "message": "Authorization failed",
    "data": {}
}
```


{% endtab %}
{% endtabs %}

## Electricity Purchase (Vend)

This API vends and generates an electricity token for the customer.

<mark style="color:green;">`POST`</mark> `https:{{base_url}}`/v1/service/electricity/vend

{% hint style="info" %}
Before vending, you must have first called the Account lookup endpoint, and pass the reference generated as your reference in order to vend
{% endhint %}

| Name                                            | Type   | Description                                      |
| ----------------------------------------------- | ------ | ------------------------------------------------ |
| provider<mark style="color:red;">\*</mark>      | String | Meter Electricity provider (e.g, IE, EEDC)       |
| reference<mark style="color:red;">\*</mark>     | String | Reference provided by Provider in account lookup |
| amount<mark style="color:red;">\*</mark>        | String | Amount of electricity to be purchased            |
| phone\_number<mark style="color:red;">\*</mark> | String | Phone number of the customer                     |
| email<mark style="color:red;">\*</mark>         | String | Email address of the customer                    |

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

{% tab title="ReferenceError" %}
```
{
    "status": 404,
    "success": false,
    "message": "No transaction found with specified reference",
    "data": {}
}
```


{% endtab %}
{% endtabs %}
