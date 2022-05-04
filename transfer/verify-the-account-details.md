# Verify the account details

For this, you will need to collect the destination `bank_name`, `country_code`, `account_number` to confirm the validity. Ideally, you should have a form on your site or app where you can collect and resolve the account number.

{% hint style="info" %}
For `bank_name` You can get a list of Nigerian banks and their codes [**here**](https://raw.githubusercontent.com/tomiiide/nigerian-banks/master/banks.json)**.**
{% endhint %}

`Country_code` refers to the representation of currencies, both numerically and alphabetically, using either three digits or three letters. For example, `NGN` for Nigerian Naira, `USD` for United States Dollars, and `CAD` for Canadian Dollars.&#x20;

{% hint style="info" %}
[**Here**](https://datahub.io/core/currency-codes/r/0.html) is a list of internationally recognized codes for representing currencies that will enable clarity and help you reduce errors.
{% endhint %}

You can use our **Lookup API** endpoint to ensure the account number is the right one. This step is important to avoid sending money to a wrong or invalid account.

Send a GET request to the Lookup API endpoint with the `account number` and the `bank_name`.

{% swagger baseUrl="https://api.cakes.com" path="/lookup" method="get" summary="Lookup" %}
{% swagger-description %}
This endpoint allows you to search for a bank account.
{% endswagger-description %}

{% swagger-parameter in="path" name="" type="integer" %}

{% endswagger-parameter %}

{% swagger-parameter in="path" name="bank" type="integer" %}
ID of the account to get.
{% endswagger-parameter %}

{% swagger-response status="200" description="Cake successfully retrieved." %}
```
{    "name": "Cake's name",    "recipe": "Cake's recipe name",    "cake": "Binary cake"}
```
{% endswagger-response %}

{% swagger-response status="404" description="Could not find a cake matching this query." %}
```
{    "message": "Ain't no cake like that."}

```
{% endswagger-response %}
{% endswagger %}

