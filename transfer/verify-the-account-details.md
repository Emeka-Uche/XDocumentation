# Verify the account details

For this, you will need to collect the destination `bank_name`, `country_code`, `account_number` to confirm the validity. Ideally, you should have a form on your site or app where you can collect and resolve the account number.

{% hint style="info" %}
For `bank_name` You can get a list of Nigerian banks and their codes [**here**](https://raw.githubusercontent.com/tomiiide/nigerian-banks/master/banks.json)**.**
{% endhint %}

`Country_code` refers to the representation of currencies, both numerically and alphabetically, using either three digits or three letters. For example, `NGN` for Nigerian Naira, `USD` for United States Dollars, and `CAD` for Canadian Dollars. 

{% hint style="info" %}
[**Here**](https://datahub.io/core/currency-codes/r/0.html) is a list of internationally recognized codes for representing currencies that will enable clarity and help you reduce errors.
{% endhint %}

You can use our **Lookup API** endpoint to ensure the account number is the right one. This step is important to avoid sending money to a wrong or invalid account.

Send a GET request to the Lookup API endpoint with the `account number` and the `bank_name`.

{% api-method method="get" host="https://api.cakes.com" path="/lookup" %}
{% api-method-summary %}
Lookup
{% endapi-method-summary %}

{% api-method-description %}
This endpoint allows you to search for a bank account.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="" type="integer" required=true %}

{% endapi-method-parameter %}

{% api-method-parameter name="bank" type="integer" required=true %}
ID of the account to get.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Cake successfully retrieved.
{% endapi-method-response-example-description %}

```
{    "name": "Cake's name",    "recipe": "Cake's recipe name",    "cake": "Binary cake"}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}
Could not find a cake matching this query.
{% endapi-method-response-example-description %}

```
{    "message": "Ain't no cake like that."}

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}



