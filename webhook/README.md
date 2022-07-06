# Webhook

Webhooks are used so that anytime an event occurs on your account, your application can be notified with instant, real-time notifications by Squad.

Squad webhooks are HTTP calls that are triggered by specific events. It is necessary only for behind-the-scenes transactions.&#x20;

This can be set up on your Squad Dashboard by specifying a URL we would send POST requests to whenever a successful transaction occurs.&#x20;

To process notifications, you need to:

Paste your **`Callback/Webhook URL`** in the space provided on your dashboard by following the steps below:

* Login to your Squad dashboard.&#x20;
* Go to Profile > API & Webhook.
* In the Webhook URL field, enter your Notification URL.
* Enter a redirect URL for your customers to be redirected after they complete payment. \
  Note: The Redirect URL is optional.\


To configure webhook notifications: go to <mark style="color:blue;">**dashboard > profile > Api & Webhooks.**</mark>

{% swagger method="post" path="" baseUrl="" summary="The Webhook is a post request that is triggered whenever a transaction is successful" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="header" name="x-squad-encrypted-body" type="Hash" required="true" %}
This is the encrypted payload which serves as a test of truth for all transactions. This should be compared against the body sent via the webhook by encrypting the body of data and comparing the value with this value
{% endswagger-parameter %}

{% swagger-parameter in="header" name="Content-type" type="JSON" required="true" %}
application/json
{% endswagger-parameter %}
{% endswagger %}

Sample POST request to be sent via webhook upon successful transaction

```
{
  "Event": "charge_successful",
  "TransactionRef": "SQDEMOEJ37A2",
  "Body": {
    "amount": 779400,
    "transaction_ref": "SQDEMOEJ37A2",
    "transaction_status": "Success",
    "email": "murrayataga@gmail.com",
    "merchant_id": "AABBCCDDEEFFGGHHJJKK",
    "currency": "NGN",
    "transaction_type": "Card",
    "merchant_amount": 765047,
    "created_at": "2022-07-06T13:44:36.848",
    "customer_mobile": null,
    "meta": {}
  }
}
```

**Please Note that the encrypted body (x-squad-encrypted-body) is usually sent via the header**
