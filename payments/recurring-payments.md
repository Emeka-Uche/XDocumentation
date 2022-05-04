# Recurring Payments

The [RecurringAPI](https://squadinc.gitbook.io/squad-api/api-endpoints#recurring-payments) endpoint enables developers to embed subscriptions functionality in their applications. Sellers can easily create subscription plans and automatically charge customers on a recurring basis.

{% hint style="info" %}
This is only applicable to Card Payment
{% endhint %}

{% tabs %}
{% tab title="Request" %}
```javascript
{
  "access_token": "string",  // required
  "transaction_ref": "string", // required
  "card": {
    "auth_code": "string"  //required
  }
}
```
{% endtab %}

{% tab title="Success Response" %}
```javascript
{​​​​​​​​
  "status": 200 ,
  "message": "string",
  "data": {​​​​​​​​
    "amount": 0,
    "transaction_ref": "string",
    "transaction_status": "string",
    "email": "string",
    "merchant_id": "string",
    "currency": "string",
    "url": "string",
    "gateway_response": "string",
    "transaction_type": "string",    "token": "string",
    "gateway_ref": "string",    "recurring": {​​​​​​​​
      "token": "string",
      "card_type": "string",
      "amount": "string",
      "transaction_ref": "string",
      "transaction_status": "string",
      "gateway_response": "string",
      "plan_code": "string"
    }​​​​​​​​
  }​​​​​​​​
}
```
{% endtab %}

{% tab title="Failed Response" %}
```javascript
{
    "status": 400,
    "message": "Invalid Access Token or Transaction Reference",
    "data": null
}
```
{% endtab %}
{% endtabs %}

## Cancel Recurring Payment

{% tabs %}
{% tab title="Request" %}
```javascript
{
  "auth_code": [
    "string"
  ]
}

```
{% endtab %}

{% tab title="Success Response" %}
```javascript
{
  "status": 200,
  "message": "Recurring Payment Successfully Cancelled",
  "data": null
}
```
{% endtab %}

{% tab title="Failed Response" %}
```javascript

{
    "status": 400,
    "message": "Recurring Payment was not cancelled",
    "data": null
}

```
{% endtab %}
{% endtabs %}
