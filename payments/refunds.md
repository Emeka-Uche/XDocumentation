# Refunds

You can use the [RefundAPI ](https://emekahuche.gitbook.io/squad-api/api-endpoints#refunds)endpoint to reimburse customers. To initiate, you need a payment ID and the refund amount. Regardless of the payment method, you can use the [RefundAPI](https://emekahuche.gitbook.io/squad-api/api-endpoints#refunds) endpoint to refund the payment.

The following conditions apply to refunds:

1. You cannot refund **more** than what was originally collected.
2. The refund amount must be available in the Square account. Refunds are in a state of **PENDING** until the funds can be secured. If funds cannot be secured, the refund is not completed and the buyer does not receive a credit. The refund has a status of **FAILED**.
3. You can only refund payments with the status **COMPLETED**

****

{% tabs %}
{% tab title="Request" %}
```javascript
{
  "transaction_Ref": "string",
  "refund_type": "string",
  "reason_for_refund": "string",
  "refund_amount": 0
}

```
{% endtab %}

{% tab title="Response" %}
```javascript
{
  "status": 200,
  "message": "string",
  "data": {
    "gateway_refund_status": "string",
    "refund_status": 0,
    "refund_reference": "string",
    "refund_id": "string",
    "ussd_Ref": "string"
  }
}
```
{% endtab %}
{% endtabs %}

* `transaction_Ref` identifies the payment being refunded.
* `refund_amount` specifies the `amount` to charge.&#x20;
* `reason_for_refund` additional comment.
