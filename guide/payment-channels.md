# Payment Channels

## USSD

The USSD channel allows your Nigerian customers to pay you by dialing the USSD code on their mobile devices. Nigerian banks provide USSD services for customers to use for transactions, and we have integrated with some of these banks to allow your customers to complete payments. 

After dialing the USSD code, the system will prompt the user to input the USSD PIN to authenticate the transaction and then confirm it. All that is needed to initiate USSD payment is the customer's email and the amount to be charged. When the user makes a payment, the response will be sent to your webhook. 

Therefore, to make it work as expected, webhooks must be configured on your Squad dashboard.

### Creating a USSD Charge

Here is a list of all the Banks USSD `shortcodes` we currently support:

| Bank | USSD Shortcode |
| :--- | :--- |
| Access \(Diamond\) Bank | 426 |
| Access Bank | 901 |
| EcoBank | 326 |
| First City Monument Bank \(FCMB\) | 329 |
| Fidelity Bank | 770 |
| First Bank | 894 |
| Guaranty Trust | 737 |
| Heritage Bank | 745 |
| Keystone Bank | 7111 |
| Rubies \(Highstreet\) MFB | 779 |
| Stanbic IBTC Bank | 909 |
| Sterling Bank | 822 |
| United Bank for Africa \(UBA\) | 919 |
| Union Bank | 826 |
| Unity Bank | 7799 |
| VFD Bank | 5037 |
| Wema Bank | 945 |
| Zenith Bank | 966 |

Send the customer's email address and amount to our [PaymentAPI](https://emekahuche.gitbook.io/squad/payments/accept-payments#payment-api) endpoint. Specify the Bank USSD type you are charging as well.

{% tabs %}
{% tab title="JSON" %}
```markup
{
        "bank_ussd_type": "737",
        "amount": "1500",
        "currency": "NGN",
        "email": "test@squad.com",
        "phone_number": "054709929220",
        "fullname": "Anakin Skywalker"

}
```
{% endtab %}
{% endtabs %}

When you call the charge endpoint you would receive the JSON response below with a note field that contains the USSD code for your customer to dial to complete their payment. Then we call your webhook once the transaction has been completed with a successful response.

{% tabs %}
{% tab title="JSON" %}
```markup
{
  "status": success,
  "message": "Charge initiated",
  "data": {
    "reference": "yjr1r8rwhedara4",
    "payment_type": "USSD",
    "ussd_code": "*737*33*4*18791#"
    "display_text": "Please dial `ussd_code` on your mobile phone to complete the transaction"
  }
}
```
{% endtab %}
{% endtabs %}

## Bank Transfer

Squad provides a payment method that makes it possible for customers to pay you through a direct bank account transfer. The customer provides their name, phone number and email address number. Then a preset account number is displayed along with the bank name. 







