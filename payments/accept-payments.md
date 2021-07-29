# Accept Payments

## Payment Modal 🔌 

Squad Payment Modal provides an easy and convenient payment flow. It is the simplest way to securely collect payments from your customers without them leaving your website. The paying customer will be shown all the payment methods you have selected.

It can be integrated with simple steps, making it the easiest way to accept payments. It works across devices and can help increase your conversion.

## Collect customer details

To initialize a transaction, you need to pass details such as email, first name, last name, amount, transaction reference, etc. Email and amount are **required**. You can also pass any other additional information in the `metadata` object field. The following is a complete list of parameters that you can pass:

| PARAMETERS | REQUIRED? | DESCRIPTION |
| :--- | :--- | :--- |
| key | Yes | Your **Squad** public key. Use the test key in test mode, and use the live key in live mode |
| email | Yes | Customer's email address |
| amount | Yes | The amount you are debiting customer \(expressed in the lowest currency value - `kobo`& `cent`\). |
| trans\_ref | No | Unique case-sensitive transaction reference. Only `-,., =`and alphanumeric characters are allowed. If you do not pass this parameter, Squad will generate a unique reference for you. |
| currency | No | Currency charge should be performed in. Allowed values are `NGN`, `USD`. It defaults to your integration currency. |
| channels | No | An array of payment channels to control what channels you want to make available to the user to make a payment with. Available channels include; \[`'card', 'ussd', 'qr', 'bank_transfer'`\] |
| meta | No | Object that contains any additional information that you want to record with the transaction. The fields of the `custom_field`object will be displayed on the merchant receipt and transaction information on the Squad dashboard. |
| onSuccess | No | JavaScript function that runs when payment is successful. Ideally, this should be a script that uses the verify endpoint on the Squad API to check the status of the transaction. |
| onClose | No | Javascript function that is called if the customer closes the payment window instead of making a payment. |
| onPending | No | Javascript function that is called if the customer clicks on `Close Checkout` before we receive their bank transfer. \(This only applies to `Pay-with-Transfer` transactions\) |

{% hint style="info" %}
The customer information can either be retrieved from a form, or from your database if you already have it stored.
{% endhint %}

{% tabs %}
{% tab title="HTML" %}
```typescript
 <form id="paymentForm">
  <div class="form-group">
    <label for="email">Email Address</label>
    <input type="email" id="email-address" required />
  </div>
  <div class="form-group">
    <label for="amount">Amount</label>
    <input type="tel" id="amount" required />
  </div>
  <div class="form-group">
    <label for="first-name">First Name</label>
    <input type="text" id="first-name" />
  </div>
  <div class="form-group">
    <label for="last-name">Last Name</label>
    <input type="text" id="last-name" />
  </div>
  <div class="form-submit">
    <button type="submit" onclick="SquadPay()"> Pay </button>
  </div>
</form>
<script src="https://js.squad.co/v1/inline.js"></script> 
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
const squadInstance = new squad({
  onClose: () => console.log('Widget closed'),
  onLoad: () => console.log('Widget loaded successfully'),
  onSuccess: () => console.log(`Linked successfully`),
  key: 'test_pk_sample-public-key-1',
  email: document.getElementById("email-address").value,
 ...params,
});
squadInstance.setup();
squadInstance.open();
```
{% endtab %}
{% endtabs %}

### Initialize transaction

Once you have all the necessary details to initiate the transaction, the next step is to link them to a JavaScript function, which passes them to Squad and displays the checkout pop-up.

```javascript
const squadInstance = new squad({
  onClose: () => console.log('Widget closed'),
  onLoad: () => console.log('Widget loaded successfully'),
  onSuccess: () => console.log(`Linked successfully`),
  key: 'test_pk_sample-public-key-1',
  ...params,
});
squadInstance.setup();
squadInstance.open();
```

### 

### Payment API

The PaymentAPI endpoint allows you to pass the details of any payment channel and transaction details \(email, amount, etc.\) directly to Squad. We provide multiple payment channels, which you can use depending on your use case.

The  PaymentAPI exposes the main components that support our payment process. Developers can use these components to develop solutions that meet specific customer needs. For example:

* Providing services to non-smartphone users. Some of your users may be using phones that do not have Internet access. With the PaymentAPI, you can initiate a payment request from your server and send a payment completion reminder to these users via their phone numbers.
* Utilizing mobile operating system APIs for a better user experience. The mobile operating system provides a rich set of APIs that developers can use. For example, there is an API to autocomplete the OTP on the form. Developers can combine the PaymentAPI with the Mobile OS API to provide a richer experience for their users.

{% hint style="warning" %}
#### ❗️PCI-DSS Compliance required!

Note that you can only use this integration option if you have the required PCI-DSS compliance certificate.
{% endhint %}

| API response | Description |
| :--- | :--- |
| pending |  |
| timeout | Failed transaction. You may start a new charge after showing the message to the user |
| success | Transaction is successful. Give the value after checking that everything is in place |
| birthday |  |
| send\_otp |  |
| failed |  |

### Verify Payment

{% page-ref page="verify-payments.md" %}







