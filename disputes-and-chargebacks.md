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

{% swagger method="get" path="/dispute" baseUrl="https://sandbox-api-d.squadco.com" summary="All you need to do is  make a get request with your private/secret key" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-response status="200: OK" description="Success" %}
```javascript
{
    // Response
}
```
{% endswagger-response %}

{% swagger-response status="401: Unauthorized" description="No API key" %}
```javascript
{
    // Response
}
```
{% endswagger-response %}
{% endswagger %}

## Get Upload URL

This API is used to get a unique URL to upload an evidence(file) which is a proof or reason to reject a dispute. This is only necessary when we want to reject a dispute.

{% swagger method="get" path="/dispute/upload-url/:ticket_id/:file_name" baseUrl="https://sandbox-api-d.squadco.com" summary="All you need to do is  make a get request with your private/secret key" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="ticket_id" type="String" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="path" name="file_name" type="String" required="true" %}

{% endswagger-parameter %}
{% endswagger %}

## Resolve Disputes

This API is used to resolve a dispute by either accepting or rejecting it.\


{% swagger method="get" path="/dispute/:ticked_id/resolve" baseUrl="https://sandbox-api-d.squadco.com" summary="This API is used to resolve a dispute by either accepting or rejecting it. " %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="action" type="String" required="true" %}
This is the action you want to be taken on the raised dispute. The value of this action can be either "rejected" or "accepted"
{% endswagger-parameter %}

{% swagger-parameter in="path" name="ticket_id" type="String" required="true" %}
A unique ID that identifies the dispute you want to reject or accept
{% endswagger-parameter %}

{% swagger-parameter in="body" name="file_name" type="String" %}
The name of the file uploaded 
{% endswagger-parameter %}
{% endswagger %}

### GO LIVE - Production

To Use this API on production:

1. &#x20;Kindly change the base URL of the endpoint from sandbox-api-d.squadco.com to api-d.squadco.com
2. Get production keys from your production environment on dashboard.squadco.com and replace as authorization keys.
