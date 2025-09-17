---
description: These Suit of APIs allow you vend electricity tokens
---

# Electricity Subscription

{% hint style="danger" %}
**This documentation site has been deprecated as of September 8, 2025, and will no longer receive updates. Please refer to the new documentation site at** [**https://docs.squadco.com**](https://docs.squadco.com)**.**
{% endhint %}

## Electricity Providers Nationwide

<table><thead><tr><th width="258">Provider</th><th>Full Name</th><th>Region</th></tr></thead><tbody><tr><td>IE</td><td>Ikeja Electricity</td><td>Abule Egba, Akowonjo, Ikeja, Ikorodu, Oshodi and Shomolu in Lagos</td></tr><tr><td>EKEDC</td><td>Eko Electricity Distribution Company</td><td>Lekki, Ibeju, Islands, Ajah, Ajele, Orile, Ijora, Apapa, Mushin, Festac, Ojo, and Agbara in Lagos</td></tr><tr><td>AEDC </td><td>Abuja Electricity Distribution Company</td><td>FCT Abuja, Kogi, Niger, and Nasarawa States</td></tr><tr><td>YEDC</td><td>Yola Electricity Distribution Company</td><td>Adamawa, Taraba, Borno, and Yobe states</td></tr><tr><td>BEDC</td><td>Benin Electricity Distribution Company</td><td>Delta, Edo, Ekiti, and Ondo States</td></tr><tr><td>IBEDC</td><td>Ibadan Electricity Distribution Company</td><td>Oyo, Ibadan, Osun, Ogun &#x26; Kwara States</td></tr><tr><td>KEDCO</td><td>Kano Electricity Distribution Company</td><td>Kano, Katsina, and Jigawa States</td></tr><tr><td>KAEDC</td><td>Kaduna Electricity Distribution Company</td><td>Kaduna, Kebbi, Sokoto and Zamfara States</td></tr><tr><td>PHED</td><td>Port Harcourt Electricity Distribution Company</td><td>Rivers, Bayelsa, Cross River and Akwa-Ibom States</td></tr><tr><td>EEDC</td><td>Enugu Electricity Distribution Company</td><td>Abia, Anambra, Ebonyi, Enugu and Imo States</td></tr></tbody></table>

## GET A LIST OF PROVIDERS

This API allows you to retrieve the customer’s electricity details.

<mark style="color:green;">`GET`</mark> [<mark style="color:green;">https://sandbox-api-d.squadco.com/vending/utilities/electricity/service-providers</mark>](https://sandbox-api-d.squadco.com/vending/utilities/electricity/service-providers)

### Sample Response

```
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": [
        {
            "code": "EKEDC",
            "name": "Eko Electricity",
            "logo_url": "https://media.premiumtimesng.com/wp-content/files/2022/05/ekedcp_logo.jpg"
        },
        {
            "code": "IE",
            "name": "Ikeja Electricity",
            "logo_url": "https://www.insideojodu.com/wp-content/uploads/2022/11/Ikeja-Electric-Vacancy.png"
        },
        {
            "code": "PHED",
            "name": "Port Harcourt Electricity",
            "logo_url": null
        },
        {
            "code": "AEDC",
            "name": "Abuja Electricity",
            "logo_url": null
        },
        {
            "code": "JED",
            "name": "Jos Electricity",
            "logo_url": null
        }
      
    ]
}
```

###

### LOOKUP METER

This Endpoint allows you to look up and retrieve the details of a meter

<mark style="color:green;">`POST`</mark> [<mark style="color:green;">https://sandbox-api-d.squadco.com/vending/utilities/electricity/lookup</mark>](https://sandbox-api-d.squadco.com/vending/utilities/electricity/lookup)

### Request Body

| Name                                          | Type    | Description                                |
| --------------------------------------------- | ------- | ------------------------------------------ |
| meter\_type<mark style="color:red;">\*</mark> | String  | either prepaid or postpaid                 |
| meter\_no<mark style="color:red;">\*</mark>   | Integer | Customer's meter number                    |
| provider<mark style="color:red;">\*</mark>    | String  | Meter Electricity provider (e.g  IE, EEDC) |

#### Sample Request

```
{
    "meter_type": "prepaid", 
    "meter_no": "45067198783",
    "provider":"IE"
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
        "reference": "IE-2505305db8e15f0ab62bb6",
        "customer_name": "GALADIMA SHEHU MALAMI",
        "minimum_vend": 12920.32,
        "account_type": "NMD",
        "outstanding_debt": "361257.12",
        "address": "9 ADEYEMO STREET MAFOLUKU",
        "meter_type": "prepaid",
        "provider": "IE"
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

This endpoint generates and vends electricity tokens for the customer.

<mark style="color:green;">`POST`</mark> [https://sandbox-api-d.squadco.com/vending/utilities/electricity](https://sandbox-api-d.squadco.com/vending/utilities/electricity)

{% hint style="info" %}
Before vending, you must first call the LOOKUP METER endpoint, and pass the same reference provided in the response as the reference in this endpoint to vend
{% endhint %}

<table><thead><tr><th width="191.4000244140625">Name</th><th width="185.7999267578125">Type</th><th>Description</th></tr></thead><tbody><tr><td>reference<mark style="color:red;">*</mark></td><td>String</td><td>Reference provided by Provider in meter LOOKUP endpoint</td></tr><tr><td>amount<mark style="color:red;">*</mark></td><td>String</td><td>Amount of electricity to be purchased</td></tr><tr><td>phone_number<mark style="color:red;">*</mark></td><td>String</td><td>Phone number of the customer (will receive token via sms)</td></tr><tr><td>email<mark style="color:red;">*</mark></td><td>String</td><td>Email address of the customer (will receive token via email)</td></tr></tbody></table>

### Sample Request

```
{
    "phone_number": "+2347062918558",
    "amount": 13000.00,
    "email": "victor@gmail.com",
    "reference": "IE-250521ee7b7922e19965e7"
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
        "reference": "IE-2505305db8e15f0ab62bb6",
        "amount": "13000.00",
        "merchant_amount": "12883.00",
        "phone_number": "07062918558",
        "email": "victor@gmail.com",
        "merchant_id": "SBS5B8VU36",
        "wallet_batch_id": "EUMXBV9AURZKE3LDGJRRQBNGJSAP3ZU",
        "value_reference": "26832663990919393911",
        "network": null,
        "transaction_id": null,
        "type": "electricity",
        "action": "debit",
        "status": "success",
        "meta": "{\"reference\":\"IE-2505305db8e15f0ab62bb6\",\"token\":\"26832663990919393911\",\"total_units\":\"332.35\",\"account_name\":\"GALADIMA SHEHU MALAMI\",\"account_no\":\"0102016364\",\"outstanding_debt\":\"361257.12\",\"kct\":\"\",\"meter_number\":\"45067198783\",\"receipt_number\":\"250530971742\",\"address\":\"9 ADEYEMO STREET MAFOLUKU\",\"tariff_class\":\"C-Non MD\",\"tariff_rate\":\"45.8\",\"amount_paid\":13000,\"meter_type\":\"prepaid\",\"transaction_date\":\"20250530152931\",\"vat_rate\":\"0.075\",\"balance\":\"0.00\",\"fixed_charge\":\"0\",\"reconnection_fee\":\"00\",\"loss_of_revenue\":\"0\",\"vat\":\"-2221.83\",\"cost_of_unit\":\"15221.83\",\"administrative_charge\":\"0.00\",\"installation_fee\":\"0\",\"penalty\":\"0\",\"meter_cost\":\"0.00\",\"current_charge\":\"0.00\",\"meter_service_charge\":\"0.00\",\"hp_wallet_batch_id\":\"EUMXBV9AURZKE3LDGJRR1T112YJMVXG\",\"hp_profit\":39,\"provider\":\"IE\",\"provider_meta\":{\"code\":\"IE\",\"name\":\"Ikeja Electricity\",\"total_rate_percent\":1.2,\"total_rate_cap\":1500,\"third_party_rate_percent\":0.9,\"third_party_rate_cap\":1000,\"hb_income_percent\":0.3,\"logo_url\":\"https://www.insideojodu.com/wp-content/uploads/2022/11/Ikeja-Electric-Vacancy.png\",\"type\":\"electricity\"}}",
        "meta_json": {
            "kct": "",
            "vat": "-2221.83",
            "token": "26832663990919393911",
            "address": "9 ADEYEMO STREET MAFOLUKU",
            "balance": "0.00",
            "penalty": "0",
            "provider": "IE",
            "vat_rate": "0.075",
            "hp_profit": 39,
            "reference": "IE-2505305db8e15f0ab62bb6",
            "account_no": "0102016364",
            "meter_cost": "0.00",
            "meter_type": "prepaid",
            "amount_paid": 13000,
            "tariff_rate": "45.8",
            "total_units": "332.35",
            "account_name": "GALADIMA SHEHU MALAMI",
            "cost_of_unit": "15221.83",
            "fixed_charge": "0",
            "meter_number": "45067198783",
            "tariff_class": "C-Non MD",
            "provider_meta": {
                "code": "IE",
                "name": "Ikeja Electricity",
                "type": "electricity",
                "logo_url": "https://www.insideojodu.com/wp-content/uploads/2022/11/Ikeja-Electric-Vacancy.png",
                "total_rate_cap": 1500,
                "hb_income_percent": 0.3,
                "total_rate_percent": 1.2,
                "third_party_rate_cap": 1000,
                "third_party_rate_percent": 0.9
            },
            "current_charge": "0.00",
            "receipt_number": "250530971742",
            "loss_of_revenue": "0",
            "installation_fee": "0",
            "outstanding_debt": "361257.12",
            "reconnection_fee": "00",
            "transaction_date": "20250530152931",
            "hp_wallet_batch_id": "EUMXBV9AURZKE3LDGJRR1T112YJMVXG",
            "meter_service_charge": "0.00",
            "administrative_charge": "0.00"
        },
        "createdAt": "2025-05-30T15:29:28.557Z",
        "updatedAt": "2025-05-30T15:29:32.154Z"
    }
}
```


{% endtab %}

{% tab title="ReferenceError" %}
```
{
    "status": 400,
    "success": false,
    "message": "Invalid vending reference",
    "data": {}
}
```


{% endtab %}
{% endtabs %}
