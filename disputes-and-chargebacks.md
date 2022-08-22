---
description: >-
  This contains a list of  APIs that allow you get all disputes raised on your
  transaction, reject the claim with an evidence or accept the claim and accept
  a charge back to be performed.
---

# Disputes & Chargebacks

This API is used to initiate refund process on a successful transaction.\


{% hint style="warning" %}
**Authorization** Any request made without the authorization key (private/secret key) will fail with a **`401`**` ``(Unauthorized)` response code.
{% endhint %}

{% hint style="info" %}
**The authorization key is sent via the request header as Bearer Token Authorization**
{% endhint %}

**Example:**\
****Authorization**:** Bearer **** sandbox\_sk\_94f2b798466408ef4d19e848ee1a4d1a3e93f104046f\


## GET ALL DISPUTES

This API is used to get all disputes on your transactions raised by your customers.

{% swagger method="get" path="/dispute" baseUrl="https//sandbox-api-d.squadco.com" summary="All you need to do is  make a get request with your private/secret key" %}
{% swagger-description %}

{% endswagger-description %}
{% endswagger %}

## Resolve Disputes

This API is used to resolve a dispute by either accepting or rejecting it.\


{% swagger method="get" path="/dispute/:ticked_id/resolve" baseUrl="https//sandbox-api-d.squadco.com" summary="This API is used to resolve a dispute by either accepting or rejecting it. " %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="ticket_id" type="String" required="true" %}
A unique ID that identifies the dispute you want to reject or accept
{% endswagger-parameter %}
{% endswagger %}
