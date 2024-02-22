# Refund API

This API is used to initiate refund process on a successful transaction.\


{% hint style="danger" %}
**Authorization** Any request made without the authorization key (secret key) will fail with a **`401`**` ``(Unauthorized)` response code.
{% endhint %}

{% hint style="info" %}
**The authorization key is sent via the request header as Bearer Token Authorization**
{% endhint %}

**Example:**\
Authorization**:** Bearer sandbox\_sk\_94f2b798466408ef4d19e848ee1a4d1a3e93f104046f

{% swagger method="post" path="/transaction/refund" baseUrl="https://sandbox-api-d.squadco.com" summary="This endpoint refunds an already completed transactions" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="gateway_transaction_ref" required="true" type="String" %}
Unique reference that uniquely identifies the medium of payment and can be obtained from  the webhook notification sent to you.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="transaction_ref" type="String" required="true" %}
unique reference that identifies a transaction.\
&#x20;Can be obtained from the dashboard or the webhook notification sent to you
{% endswagger-parameter %}

{% swagger-parameter in="body" name="refund_type" type="String" required="true" %}
The value of this parameter is either "Full" or "Partial"
{% endswagger-parameter %}

{% swagger-parameter in="body" name="reason_for_refund" type="String" required="true" %}
Reason for initiating the refund
{% endswagger-parameter %}

{% swagger-parameter in="body" name="refund_amount" type="String" %}
Refund amount is in kobo or cent.\
This is only required for "Partial" refunds
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="Successful" %}


```
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": {
        "gateway_refund_status": "pending",
        "refund_status": 2,
        "refund_reference": "REFUND-SQOKOY1708696818297_1_1"
    }
}
```
{% endswagger-response %}

{% swagger-response status="401: Unauthorized" description="No API Key" %}
```javascript
{
    "success": false,
    "message": "",
    "data": {}
}
```
{% endswagger-response %}
{% endswagger %}

### Sample Request

### Full Refund

```
{
    "gateway_transaction_ref": "wvszqsdrujscpuaofnea529117332_1_1",
    "refund_type": "Full",
    "reason_for_refund": "Any reason",
    "transaction_ref": "vszqsdrujscpua"
}
```

### Partial Refund

```
{
    "gateway_transaction_ref": "SQOKOY3167299494777_1_1",
    "refund_type": "Partial",
    "reason_for_refund": "Testing Testing",
    "transaction_ref": "SQOKOY3167299494777",
    "refund_amount":"20000"
}
```

### GO LIVE - Production

To Use this API on production:

1. &#x20;Kindly change the base URL of the endpoint from sandbox-api-d.squadco.com to api-d.squadco.com
2. Get production keys from your production environment on dashboard.squadco.com and replace as authorization keys.
