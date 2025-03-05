---
description: >-
  These are suites of API that allows you vend airtime and data. Please note
  that the equivalent value of all data and airtime vended will be charged from
  your SQUAD WALLET.
---

# AIRTIME AND DATA

### API KEYS (Test Environment)

1. Create an account on our sandbox environment: sandbox.squadco.com
2. Retrieve keys from the bottom of the Get Started Page \


{% hint style="warning" %}
**Authorization** Any request made without the authorization key (secret key) will fail with a **`401`**` ``(Unauthorized)` response code.
{% endhint %}

{% hint style="info" %}
**The authorization key is sent via the request header as Bearer Token Authorization**
{% endhint %}

**Example:**\
Authorizatio&#x6E;**:** Bearer sandbox\_sk\_94f2b798466408ef4d19e848ee1a4d1a3e93f104046f

## VEND AIRTIME

This API allows you vend airtime. Minimum amount that can be vended is 50 naira.

## This API vends Airtime

<mark style="color:green;">`POST`</mark> `https://sandbox-api-d.squadco.com/vending/purchase/airtime`

#### Request Body

| Name                                            | Type    | Description                                              |
| ----------------------------------------------- | ------- | -------------------------------------------------------- |
| phone\_number<mark style="color:red;">\*</mark> | String  | <p>11 digit phone number.<br>Format: : "08139011943"</p> |
| amount<mark style="color:red;">\*</mark>        | Integer | Amount is in Naira.                                      |

{% tabs %}
{% tab title="200: OK Success" %}
{&#x20;

&#x20;   "status": 200,&#x20;

&#x20;   "success": true,&#x20;

&#x20;   "message": "Success",&#x20;

&#x20;   "data": {&#x20;

&#x20;       "reference": "app\_08139011943\_5000\_1690387362399",&#x20;

&#x20;       "amount": "5000.00",&#x20;

&#x20;       "merchant\_amount": "4900.00",&#x20;

&#x20;       "phone\_number": "08139011943",&#x20;

&#x20;       "merchant\_id": "T6AGJQEY",&#x20;

&#x20;       "wallet\_batch\_id": "20230726160242715\_490000\_T6AGJQEY\_AIRTIME\_NGN",&#x20;

&#x20;       "transaction\_id": "app\_08139011943\_5000\_1690387362399",&#x20;

&#x20;       "type": "airtime",&#x20;

&#x20;       "action": "debit",&#x20;

&#x20;       "status": "pending",&#x20;

&#x20;       "meta": "{\\"vending\_status\\":\\"pending\\",\\"status\_code\\":\\"301\\",\\"message\\":\\"pending confirmation\\",\\"phonenumber\\":\\"08139011943\\",\\"transaction\_id\\":\\"app\_08139011943\_5000\_1690387362399\\",\\"network\\":\\"MTN\\"}",&#x20;

&#x20;       "createdAt": "2023-07-26T16:02:43.341Z"&#x20;

&#x20;   }&#x20;

}&#x20;
{% endtab %}

{% tab title="401: Unauthorized No authorization" %}
```
{
    "success": false,
    "message": "",
    "data": {}
}
```
{% endtab %}

{% tab title="403: Forbidden Invalid/Wrong API Keys" %}
```
{
    "success": false,
    "message": "Merchant authentication failed",
    "data": {}
}
```
{% endtab %}
{% endtabs %}

### Sample Request

{&#x20;

&#x20;   "phone\_number": "08139011943",&#x20;

&#x20;   "amount": 5000&#x20;

}&#x20;

## VEND DATA BUNDLES

This API allows you vend data bundles.

<mark style="color:green;">`POST`</mark> `https://sandbox-api-d.squadco.com/vending/purchase/data`

This is the data bundle vending endpoint.

#### Request Body

| Name                                            | Type   | Description                                                                               |
| ----------------------------------------------- | ------ | ----------------------------------------------------------------------------------------- |
| phone\_number<mark style="color:red;">\*</mark> | String | <p>11 digit phone number.<br>Format: : "08139011943"</p>                                  |
|  plan\_code<mark style="color:red;">\*</mark>   | String | The plan code is gotten from the Get Plan Code endpoint and usually in the format: "1001" |

{% tabs %}
{% tab title="403: Forbidden Invalid / Wrong Keys" %}
```
{
    "success": false,
    "message": "Merchant authentication failed",
    "data": {}
}
```
{% endtab %}

{% tab title="401: Unauthorized No authorization keys" %}
```
{
    "success": false,
    "message": "",
    "data": {}
}
```
{% endtab %}

{% tab title="200: OK Success" %}
```
{ 
    "status": 200, 
    "success": true, 
    "message": "Success", 
    "data": { 
        "reference": "app_7062918558_100_1001_1679914203047", 
        "amount": "100.00", 
        "merchant_amount": "98.00", 
        "phone_number": "+2347062918558", 
        "merchant_id": "AABBCCDDEEFFGGHHJJKK", 
        "wallet_batch_id": "BC8BE65JWG44ZW7AN9KG", 
        "transaction_id": "edf867fa-8ad6-4eac-bd87-6e5f8ec9b945", 
        "type": "data", 
        "action": "debit", 
        "status": "success", 
        "meta": "{\"vending_status\":\"success\",\"status_code\":\"200\",\"message\":\"successfully submitted for processing\",\"phonenumber\":\"07062918558\",\"transaction_id\":\"edf867fa-8ad6-4eac-bd87-6e5f8ec9b945\",\"network\":\"MTN\"}", 
        "createdAt": "2023-03-27T10:50:04.073Z" 
    } 
} 
```
{% endtab %}
{% endtabs %}

### Sample Request

```
{ 
    "phone_number": "07062918558", 
    "amount": 100, 
    "plan_code": "1001" 
} 
```



## GET DATA BUNDLES

This API returns all available data bundle plans for all telcos

## This API returns all available data bundle plans for all telcos

<mark style="color:blue;">`GET`</mark> `https://sandbox-api-d.squadco.com/vending/data-bundles?network=MTN`

#### Query Parameters

| Name                                      | Type   | Description                          |
| ----------------------------------------- | ------ | ------------------------------------ |
| network<mark style="color:red;">\*</mark> | String | Teleco ID: MTN, GLO, AIRTEL, 9MOBILE |

{% tabs %}
{% tab title="200: OK Success" %}
{&#x20;

&#x20;   "status": 200,&#x20;

&#x20;   "success": true,&#x20;

&#x20;   "message": "Success",&#x20;

&#x20;   "data": \[&#x20;

&#x20;       {&#x20;

&#x20;           "plan\_name": "MTN data\_plan",&#x20;

&#x20;           "bundle\_value": "100MB ",&#x20;

&#x20;           "bundle\_validity": " Daily Plan",&#x20;

&#x20;           "bundle\_description": " Daily Plan",&#x20;

&#x20;           "bundle\_price": "100",&#x20;

&#x20;           "plan\_code": "1001",&#x20;

&#x20;           "network": "MTN"&#x20;

&#x20;       },&#x20;

&#x20;       {&#x20;

&#x20;           "plan\_name": "MTN data\_plan",&#x20;

&#x20;           "bundle\_value": "200MB",&#x20;

&#x20;           "bundle\_validity": " 2-day Plan",&#x20;

&#x20;           "bundle\_description": " 2-day Plan",&#x20;

&#x20;           "bundle\_price": "200",&#x20;

&#x20;           "plan\_code": "1002",&#x20;

&#x20;           "network": "MTN"&#x20;

&#x20;       },&#x20;

&#x20;       {&#x20;

&#x20;           "plan\_name": "MTN data\_plan",&#x20;

&#x20;           "bundle\_value": "350MB",&#x20;

&#x20;           "bundle\_validity": " Weekly Plan",&#x20;

&#x20;           "bundle\_description": " Weekly Plan",&#x20;

&#x20;           "bundle\_price": "300",&#x20;

&#x20;           "plan\_code": "1003",&#x20;

&#x20;           "network": "MTN"&#x20;

&#x20;       },&#x20;

&#x20;       {&#x20;

&#x20;           "plan\_name": "MTN data\_plan",&#x20;

&#x20;           "bundle\_value": "750MB",&#x20;

&#x20;           "bundle\_validity": " 2-Week plan",&#x20;

&#x20;           "bundle\_description": " 2-Week plan",&#x20;

&#x20;           "bundle\_price": "500",&#x20;

&#x20;           "plan\_code": "1004",&#x20;

&#x20;           "network": "MTN"&#x20;

&#x20;       },&#x20;

&#x20;               {&#x20;

&#x20;           "plan\_name": "MTN data\_plan",&#x20;

&#x20;           "bundle\_value": "1500GB",&#x20;

&#x20;           "bundle\_validity": "365 days",&#x20;

&#x20;           "bundle\_description": "365 days",&#x20;

&#x20;           "bundle\_price": "450000",&#x20;

&#x20;           "plan\_code": "1111",&#x20;

&#x20;           "network": "MTN"&#x20;

&#x20;       }&#x20;

&#x20;   ]&#x20;

}&#x20;
{% endtab %}

{% tab title="401: Unauthorized No Authorization" %}
```
{
    "success": false,
    "message": "",
    "data": {}
}
```
{% endtab %}

{% tab title="403: Forbidden Invalid / Wrong Key" %}
```
{
    "success": false,
    "message": "Merchant authentication failed",
    "data": {}
}
```
{% endtab %}
{% endtabs %}

## GET ALL TRANSACTIONS

This API returns all transactions done by a merchant.



## This API returns all transactions done by a merchant.

<mark style="color:blue;">`GET`</mark> `https://api-d.squadco.com/vending/transactions?page=1&perPage=4&action=debit`

#### Query Parameters

| Name    | Type    | Description                                      |
| ------- | ------- | ------------------------------------------------ |
| page    | integer | The page of the transaction you want to view     |
| perPage | Integer | Number of transaction you want to view per page  |
| action  | string  | The type of transaction you want to see: "debit" |

{% tabs %}
{% tab title="200: OK " %}
{&#x20;

&#x20;   "status": 200,&#x20;

&#x20;   "success": true,&#x20;

&#x20;   "message": "Success",&#x20;

&#x20;   "data": {&#x20;

&#x20;       "count": 5,&#x20;

&#x20;       "rows": \[&#x20;

&#x20;           {&#x20;

&#x20;               "reference": "app\_08139011943\_5000\_1690387362399",&#x20;

&#x20;               "amount": "5000.00",&#x20;

&#x20;               "merchant\_amount": "4900.00",&#x20;

&#x20;               "phone\_number": "08139011943",&#x20;

&#x20;               "merchant\_id": "T6AGJQEY",&#x20;

&#x20;               "wallet\_batch\_id": "20230726160242715\_490000\_T6AGJQEY\_AIRTIME\_NGN",&#x20;

&#x20;               "transaction\_id": "app\_08139011943\_5000\_1690387362399",&#x20;

&#x20;               "type": "airtime",&#x20;

&#x20;               "action": "debit",&#x20;

&#x20;               "status": "pending",&#x20;

&#x20;               "meta": "{\\"vending\_status\\":\\"pending\\",\\"status\_code\\":\\"301\\",\\"message\\":\\"pending confirmation\\",\\"phonenumber\\":\\"08139011943\\",\\"transaction\_id\\":\\"app\_08139011943\_5000\_1690387362399\\",\\"network\\":\\"MTN\\"}",&#x20;

&#x20;               "createdAt": "2023-07-26T16:02:43.341Z"&#x20;

&#x20;           },&#x20;

&#x20;           {&#x20;

&#x20;               "reference": "app\_08132448598\_500\_1001\_1690387247434",&#x20;

&#x20;               "amount": "500.00",&#x20;

&#x20;               "merchant\_amount": "490.00",&#x20;

&#x20;               "phone\_number": "08132448598",&#x20;

&#x20;               "merchant\_id": "T6AGJQEY",&#x20;

&#x20;               "wallet\_batch\_id": "20230726160047736\_49000\_T6AGJQEY\_DATA\_\_NGN",&#x20;

&#x20;               "transaction\_id": null,&#x20;

&#x20;               "type": "data",&#x20;

&#x20;               "action": "debit",&#x20;

&#x20;               "status": "failed",&#x20;

&#x20;               "meta": null,&#x20;

&#x20;               "createdAt": "2023-07-26T16:00:48.212Z"&#x20;

&#x20;           },&#x20;

&#x20;           {&#x20;

&#x20;               "reference": "app\_08139011943\_5000\_1001\_1690387152681",&#x20;

&#x20;               "amount": "5000.00",&#x20;

&#x20;               "merchant\_amount": "4900.00",&#x20;

&#x20;               "phone\_number": "08139011943",&#x20;

&#x20;               "merchant\_id": "T6AGJQEY",&#x20;

&#x20;               "wallet\_batch\_id": "20230726155914250\_490000\_T6AGJQEY\_DATA\_\_NGN",&#x20;

&#x20;               "transaction\_id": null,&#x20;

&#x20;               "type": "data",&#x20;

&#x20;               "action": "debit",&#x20;

&#x20;               "status": "failed",&#x20;

&#x20;               "meta": null,&#x20;

&#x20;               "createdAt": "2023-07-26T15:59:15.602Z"&#x20;

&#x20;           },&#x20;

&#x20;           {&#x20;

&#x20;               "reference": "app\_08139011943\_5000\_1690363943917",&#x20;

&#x20;               "amount": "5000.00",&#x20;

&#x20;               "merchant\_amount": "4900.00",&#x20;

&#x20;               "phone\_number": "08139011943",&#x20;

&#x20;               "merchant\_id": "T6AGJQEY",&#x20;

&#x20;               "wallet\_batch\_id": "20230726093224159\_490000\_T6AGJQEY\_AIRTIME\_NGN",&#x20;

&#x20;               "transaction\_id": "app\_08139011943\_5000\_1690363943917",&#x20;

&#x20;               "type": "airtime",&#x20;

&#x20;               "action": "debit",&#x20;

&#x20;               "status": "pending",&#x20;

&#x20;               "meta": "{\\"vending\_status\\":\\"pending\\",\\"status\_code\\":\\"301\\",\\"message\\":\\"pending confirmation\\",\\"phonenumber\\":\\"08139011943\\",\\"transaction\_id\\":\\"app\_08139011943\_5000\_1690363943917\\",\\"network\\":\\"MTN\\"}",&#x20;

&#x20;               "createdAt": "2023-07-26T09:32:24.638Z"&#x20;

&#x20;           }&#x20;

&#x20;       ]&#x20;

&#x20;   }&#x20;

}&#x20;
{% endtab %}

{% tab title="401: Unauthorized " %}
```
{
    "success": false,
    "message": "",
    "data": {}
}
```
{% endtab %}

{% tab title="403: Forbidden " %}
```
{
    "success": false,
    "message": "Merchant authentication failed",
    "data": {}
}
```
{% endtab %}
{% endtabs %}

## GO LIVE

To go live, simply: \
\
1\. Change the base URL for your endpoints from sandbox-api-d.squadco.com to \
api-d.squadco.com

2\. [Sign up on our Live Environment](http://dashboard.squadco.com)

3\. Complete your KYC

4\. Use the secret keys provided on the dashboard to authenticate your live transactions
