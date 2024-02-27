# Webhook & Redirect URL

Webhooks are used so that anytime an event occurs on your account, your application can be notified with instant, real-time notifications by Squad.

Squad webhooks are HTTP calls that are triggered by specific events. It is necessary only for behind-the-scenes transactions.&#x20;

This can be set up on your Squad Dashboard by specifying a URL we would send POST requests to whenever a successful transaction occurs.&#x20;

To process notifications, you need to:

Paste your redirect and**`Callback/Webhook URL`** in the space provided on your dashboard by following the steps below:

* Login to your Squad dashboard.&#x20;
* Go to Profile > API & Webhook.
* In the Webhook URL field, enter your Notification URL.
* In the redirect URL field, enter your redirect URL- and on completion of payment, the customer will be redirected to the URL with the transaction reference passed as a query param.
* Enter a redirect URL for your customers to be redirected after they complete payment. \
  Note: The Redirect URL is optional.

{% hint style="warning" %}
_**KINDLY ENSURE YOU HAVE A TRANSACTION REFERENCE CHECKER WHEN IMPLEMENTING WEBHOOKS TO AVOID GIVING DOUBLE VALUE ON TRANSACTIONS.**_
{% endhint %}

{% hint style="info" %}
Sending IP: 18.133.63.109
{% endhint %}

## Webhook Validation

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



## Sample Webhook for Card Transactions

```
{
  "Event": "charge_successful",
  "TransactionRef": "4678388588A0",
  "Body": {
    "amount": 83000,
    "transaction_ref": "4678388588A0",
    "gateway_ref": "4678388588A0_1_1",
    "transaction_status": "success",
    "email": "henimastic@gmail.com",
    "merchant_id": "SBN1EBZEQ8",
    "currency": "NGN",
    "transaction_type": "Card",
    "merchant_amount": 82170,
    "created_at": "2022-09-06T15:28:02.477",
    "customer_mobile": null,
    "meta": {},
    "payment_information": {
      "payment_type": "card",
      "pan": "408408******4081",
      "recurring_id": null,
      "card_type": "visa",
      "token_id": "tJlYMKcwPd"
    }
  }
}
```

## Sample Webhook for Bank Transfer Option

```

{
  "Event": "charge_successful",
  "TransactionRef": "SQGRAN7557984665043",
  "Body": {
    "amount": 10000,
    "transaction_ref": "SQGRAN7557984665043",
    "gateway_ref": "SQGRAN7557984665043_2_1",
    "transaction_status": "Success",
    "email": "urannas@gmail.com",
    "merchant_id": "HD3DDPKW",
    "currency": "NGN",
    "transaction_type": "Bank",
    "merchant_amount": 9900,
    "created_at": "2023-01-23T10:01:52.284",
    "meta": {},
    "is_recurring": false
  }
}
```

## SAMPLE WEBHOOK FOR USSD PAYMENT OPTION

```
{
  "Event": "charge_successful",
  "TransactionRef": "SQCHIZ6035872641857",
  "Body": {
    "amount": 20000,
    "transaction_ref": "SQCHIZ6035872641857",
    "gateway_ref": "SQCHIZ6035872641857_3_1",
    "transaction_status": "Success",
    "email": "maaa@h.com",
    "currency": "NGN",
    "transaction_type": "Ussd",
    "merchant_amount": 19800,
    "created_at": "2023-01-25T13:41:16.223",
    "customer_mobile": "0803***7205",
    "meta": {
      "plan": "premium"
    },
    "is_recurring": false
  }
}
```



### Sample Webhook for Merchant USSD (USSD CODE ON THE DASHBOARD)

```
{
  "Event": "charge_successful",
  "TransactionRef": "SQCHIZ410708",
  "Body": {
    "amount": 10000,
    "transaction_ref": "SQCHIZ410708",
    "gateway_ref": "f7c810f4-b53e-4970-a3f6",
    "transaction_status": "Success",
    "email": "0803***0000",
    "merchant_id": "********",
    "currency": "NGN",
    "transaction_type": "MerchantUssd",
    "merchant_amount": 10000,
    "created_at": "2022-11-30T16:21:52.8850061+00:00",
    "customer_mobile": "0803***0000",
    "meta": {},
    "payment_information": {
      "payment_type": "merchantussd",
      "customer_ref": "123456"
    },
    "is_recurring": false
  }
}
```

**Please Note that the encrypted body (x-squad-encrypted-body) is usually sent via the header**
