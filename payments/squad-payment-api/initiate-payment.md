# Initiate Payment

Initiate a payment with this API

{% swagger baseUrl="https://sandbox-api-d.squadco.com/payment/initiate" path="" method="post" summary="Initiate" %}
{% swagger-description %}
Endpoint to initiate payment
{% endswagger-description %}

{% swagger-parameter in="header" name="key" type="string" %}
authorization
{% endswagger-parameter %}

{% swagger-parameter in="body" name="amount" type="number" required="true" %}
amount should be in 

`NGN`

 or 

`USD`
{% endswagger-parameter %}

{% swagger-parameter in="body" name="email" type="string" required="true" %}
email address of the customer
{% endswagger-parameter %}

{% swagger-parameter in="body" name="currency" type="string" required="true" %}
the transaction currency (

`NGN`

 or 

`USD`

)
{% endswagger-parameter %}

{% swagger-parameter in="body" name="metadata" type="string" %}
other necessary information
{% endswagger-parameter %}

{% swagger-response status="200" description="Successful" %}
```typescript
{
    "status": 200,
    "message": "success",
    "data": {
        "auth_url": "https://Api.HabariPay.com/7FD5839E1A3EB9FF1503F7A1FB39B97E",
        "access_token": "7FD5839E1A3EB9FF1503F7A1FB39B97E",
        "merchant_info": {
            "merchant_response": null,
            "merchant_name": "Demo Habari Shop",
            "merchant_logo": "https://picsum.photos/400",
            "merchant_id": "AABBCCDDEEFFGGHHJJKK"
        },
        "currency": "NGN",
        "recurring": null,
        "is_recurring": false,
        "plan_code": null,
        "callback_url": null,
        "transaction_ref": "zolaoextpnkhjwvuinzs550686251",
        "transaction_memo": null
    }
}
```
{% endswagger-response %}

{% swagger-response status="400" description="Invalid parameter" %}
```javascript
{
    "status": 400,
    "message": "The amount is Invalid",
    "data": null
}
```
{% endswagger-response %}

{% swagger-response status="401" description="Unauthorized transaction" %}
```javascript
{
    "status": 401,
    "message": "Initiate transaction Unathorized",
    "data": nul}
```
{% endswagger-response %}
{% endswagger %}
