# Refund API

This API is used to initiate refund process on a successful transaction.\


{% hint style="danger" %}
**Authorization** Any request made without the authorization key (secret key) will fail with a **`401`**` ``(Unauthorized)` response code.
{% endhint %}

{% hint style="info" %}
**The authorization key is sent via the request header as Bearer Token Authorization**
{% endhint %}

**Example:**\
Authorizatio&#x6E;**:** Bearer sandbox\_sk\_94f2b798466408ef4d19e848ee1a4d1a3e93f104046f

## This endpoint refunds an already completed transactions

<mark style="color:green;">`POST`</mark> `https://sandbox-api-d.squadco.com/transaction/refund`

#### Request Body

| Name                                                        | Type   | Description                                                                                                                           |
| ----------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| gateway\_transaction\_ref<mark style="color:red;">\*</mark> | String | Unique reference that uniquely identifies the medium of payment and can be obtained from  the webhook notification sent to you.       |
| transaction\_ref<mark style="color:red;">\*</mark>          | String | <p>unique reference that identifies a transaction.<br> Can be obtained from the dashboard or the webhook notification sent to you</p> |
| refund\_type<mark style="color:red;">\*</mark>              | String | The value of this parameter is either "Full" or "Partial"                                                                             |
| reason\_for\_refund<mark style="color:red;">\*</mark>       | String | Reason for initiating the refund                                                                                                      |
| refund\_amount                                              | String | <p>Refund amount is in kobo or cent.<br>This is only required for "Partial" refunds</p>                                               |

{% tabs %}
{% tab title="200: OK Successful" %}


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
{% endtab %}

{% tab title="401: Unauthorized No API Key" %}
```javascript
{
    "success": false,
    "message": "",
    "data": {}
}
```
{% endtab %}
{% endtabs %}

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
