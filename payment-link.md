# Payment Link

This API is used to create a simple payment link. All calls to this end point is to be made using your secret key gotten from your dashboard

{% swagger method="get" path="/paymentLink/otp" baseUrl="https://sandbox-api-d.squadco.com" summary="This API creates a Simple Payment Link" %}
{% swagger-description %}
The payment link is a concatenation of the base url 

[https://sandbox-pay.squadco.com/](https://sandbox-pay.squadco.com/kmtyevdkcd591)

 and the hash selected when creating the payment link

\




\


That is if the hash is 

_mypaymentlink_

 then the payment link will be https://sandbox-pay.squadco.com/

_mypaymentlink_
{% endswagger-description %}

{% swagger-parameter in="body" name="name" type="String" required="true" %}
Title/Name of the Payment Link
{% endswagger-parameter %}

{% swagger-parameter in="body" name="hash" required="true" type="String" %}
Unique string that identifies each payment Link
{% endswagger-parameter %}

{% swagger-parameter in="body" name="link_status" type="Integer" required="true" %}
Value can be 0 or 1. 

\


0 - Active, 1 - Inactive
{% endswagger-parameter %}

{% swagger-parameter in="body" name="expire_by" type="String" required="true" %}
sample: 2021-04-26T11:22:08.587Z
{% endswagger-parameter %}

{% swagger-parameter in="body" name="amount" type="Integer" required="true" %}
Amount must be in the lowest currency. (kobo for Naira transactions and cent for Dollar transaction)
{% endswagger-parameter %}

{% swagger-parameter in="body" name="currency_id" required="true" type="String" %}
USD or NGN (USD - US Dollars & NGN - NIgerian Naira)
{% endswagger-parameter %}

{% swagger-parameter in="body" name="description" required="true" type="String" %}
This describes what the payment link does
{% endswagger-parameter %}

{% swagger-parameter in="body" name="redirect_link" type="String" %}
URL to be redirected to after payment
{% endswagger-parameter %}

{% swagger-parameter in="body" name="return_msg" type="String" %}
Message to be displayed to the customer after payment via the link
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="Successful" %}
```javascript
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": {
        "name": "Demo Otp Link",
        "link_type": "otp",
        "hash": "kmtyevdkcd591",
        "description": "My description",
        "currencies": null,
        "redirect_link": "https://fjfhgfd.com",
        "return_msg": "Successful",
        "support_email": null,
        "support_phone": null,
        "terms_condition": null,
        "return_policy": null,
        "pickup_location": null,
        "expire_by": "2021-04-26T11:22:08.587Z",
        "merchant_id": "SBN1EBZEQ8",
        "link_status": 0,
        "extra": null,
        "createdAt": "2022-08-08T09:24:41.269Z",
        "updatedAt": "2022-08-08T09:24:41.269Z",
        "archivedAt": null,
        "image_id": null,
        "image": null,
        "amounts": [
            {
                "amount": 4000,
                "currency_id": "NGN"
            }
        ]
    }
}
```
{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="Bad Request" %}
```javascript
{
    "status": 400,
    "success": false,
    "message": "Custom link already taken",
    "data": {}
}
```
{% endswagger-response %}

{% swagger-response status="401: Unauthorized" description="No Authorization Key" %}
```javascript
{
    "success": false,
    "message": "",
    "data": {}
}
```
{% endswagger-response %}
{% endswagger %}

### GO LIVE - Production

To create payment link on production:

1. &#x20;kindly change the base URL of the endpoint from sandbox-api-d.squadco.com to api-d-squadco.com
2. get production keys from your production environment on dashboard.squadco.com
3. On production, the base URL for concatenation of the payment link needs to be changed from sandbox-pay.checkout.squadco.com/hash to pay.checkout.squadco.co/hash
