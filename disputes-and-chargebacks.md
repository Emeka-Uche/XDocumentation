---
description: >-
  This contains a list of  APIs that allow you get all disputes raised on your
  transaction, reject the claim with an evidence or accept the claim and accept
  a charge back to be performed.
---

# Disputes & Chargebacks

\
You have the option to either accept or reject a chargeback

### Accepting a chargeback: &#x20;

This means you received the customer’s payment but did not provide the service or product the customer requested for some reasons. When you accept a chargeback, you allow for the funds to be deducted from your payouts and reversed to the customer’s bank account.\


### Rejecting a chargeback:&#x20;

This means you received the customer’s payment and have provided the service or delivered the product to the customer.  To justify your claim you are required to provide an evidence to show that value has been given for payment made by the customer. If the evidence is not sufficient, we will automatically accept the chargeback.

{% hint style="warning" %}
**Authorization** Any request made without the authorization key (private/secret key) will fail with a **`401`**` ``(Unauthorized)` response code.
{% endhint %}

{% hint style="info" %}
**The authorization key is sent via the request header as Bearer Token Authorization**
{% endhint %}

**Example:**\
Authorization**:** Bearer sandbox\_sk\_94f2b798466408ef4d19e848ee1a4d1a3e93f104046f\


## GET ALL DISPUTES

This API is used to get all disputes on your transactions raised by your customers.

## All you need to do is  make a get request with your private/secret key

<mark style="color:blue;">`GET`</mark> `https://sandbox-api-d.squadco.com/dispute`

{% tabs %}
{% tab title="200: OK Success" %}
```javascript
{
    // Response
}
```
{% endtab %}

{% tab title="401: Unauthorized No API key" %}
```javascript
{
    // Response
}
```
{% endtab %}
{% endtabs %}

## Get Upload URL

This API is used to get a unique URL to upload an evidence(file) which is a proof or reason to reject a dispute. This is only necessary when we want to reject a dispute.

## All you need to do is  make a get request with your private/secret key

<mark style="color:blue;">`GET`</mark> `https://sandbox-api-d.squadco.com/dispute/upload-url/:ticket_id/:file_name`

#### Path Parameters

| Name                                         | Type   | Description |
| -------------------------------------------- | ------ | ----------- |
| ticket\_id<mark style="color:red;">\*</mark> | String |             |
| file\_name<mark style="color:red;">\*</mark> | String |             |

## Resolve Disputes

This API is used to resolve a dispute by either accepting or rejecting it.\


## This API is used to resolve a dispute by either accepting or rejecting it.&#x20;

<mark style="color:blue;">`GET`</mark> `https://sandbox-api-d.squadco.com/dispute/:ticked_id/resolve`

#### Path Parameters

| Name                                         | Type   | Description                                                          |
| -------------------------------------------- | ------ | -------------------------------------------------------------------- |
| ticket\_id<mark style="color:red;">\*</mark> | String | A unique ID that identifies the dispute you want to reject or accept |

#### Request Body

| Name                                     | Type   | Description                                                                                                                    |
| ---------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------ |
| file\_name                               | String | The name of the file uploaded                                                                                                  |
| action<mark style="color:red;">\*</mark> | String | This is the action you want to be taken on the raised dispute. The value of this action can be either "rejected" or "accepted" |

### GO LIVE - Production

To Use this API on production:

1. &#x20;Kindly change the base URL of the endpoint from sandbox-api-d.squadco.com to api-d.squadco.com
2. Get production keys from your production environment on dashboard.squadco.com and replace as authorization keys.
