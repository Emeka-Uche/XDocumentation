---
coverY: 282.69938650306744
---

# Squad Payment API

## Payment API

The PaymentAPI endpoint allows you to pass the details of any payment channel and transaction details (email, amount, etc.) directly to Squad. We provide multiple payment channels, which you can use depending on your use case.

### Use Cases

The  PaymentAPI exposes the main components that support our payment process. Developers can use these components to develop solutions that meet specific customer needs. For example:

* Providing services to non-smartphone users. Some of your users may be using phones that do not have Internet access. With the PaymentAPI, you can initiate a payment request from your server and send a payment completion reminder to these users via their phone numbers.
* Utilizing mobile operating system APIs for a better user experience. The mobile operating system provides a rich set of APIs that developers can use. For example, there is an API to autocomplete the OTP on the form. Developers can combine the PaymentAPI with the Mobile OS API to provide a richer experience for their users.

{% hint style="warning" %}
#### ❗️PCI-DSS Compliance required!

Note that you can only use this integration option if you have the required PCI-DSS compliance certificate.
{% endhint %}

### Handling Payment API Response

You will need to show the user a form to collect the requested input and send it to the relevant endpoint, as shown in the following table. For steps that require users to complete operations on their devices, we recommend showing a button for users to confirm payment after the user performs the operation so that you can listen to events through webhooks.&#x20;
