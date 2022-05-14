---
coverY: 0
---

# Verify Transactions

Using the Squad Verify API, transactions can be verified after payment has been made.

### Verification Process&#x20;

{% swagger method="get" path="transaction/verify/WOO4673T1634909217" baseUrl="https://sandbox-api-d.squadco.com/" summary="" %}
{% swagger-description %}

{% endswagger-description %}
{% endswagger %}

{% tabs %}
{% tab title="Success: 200" %}
```
{
    "success": true,
    "message": "Success",
    "data": {
        "transaction_amount": 15910,
        "transaction_ref": "WOO4673T1634909217",
        "email": "nelsonnum@gmail.com",
        "transaction_status": "Success",
        "transaction_currency_id": "NGN",
        "created_at": "0001-01-01T00:00:00",
        "transaction_type": "Card",
        "merchant_name": "Demo Habari Shop",
        "merchant_business_name": "Ogbologba and Sons Limited",
        "gateway_transaction_ref": "WOO4673T1634909217_1_1",
        "recurring": "null",
        "merchant_email": "demo@merchant.com",
        "plan_code": null
    }
}
```
{% endtab %}

{% tab title="Second Tab" %}

{% endtab %}
{% endtabs %}
