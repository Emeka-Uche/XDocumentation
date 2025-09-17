---
description: >-
  This set of endpoints allows you send messages, campaigns, statistics and
  status.
---

# MESSAGES

{% hint style="danger" %}
**This documentation site has been deprecated as of September 8, 2025, and will no longer receive updates. Please refer to the new documentation site at** [**https://docs.squadco.com**](https://docs.squadco.com)**.**
{% endhint %}

**SEND MESSAGES**

This endpoint allows you to curate and send messages.

<mark style="color:green;">`POST`</mark> https://squadbygtco.com:8080/service/message

#### Request Body

| Name                                            | Type    | Description                                                            |
| ----------------------------------------------- | ------- | ---------------------------------------------------------------------- |
| is\_campaign<mark style="color:red;">\*</mark>  | Boolean | Set True if message is a campaign                                      |
| reference                                       | String  | Optional reference but necessary to group campaigns                    |
| use\_bucket<mark style="color:red;">\*</mark>   | Boolean | Set True if making use of a Bucket                                     |
| recipients<mark style="color:red;">\*</mark>    | Integer | if use\_bucket is true, use bucketID, else use recipient phone number  |
| use\_template<mark style="color:red;">\*</mark> | Boolean | Set True if Template is to be used                                     |
| body<mark style="color:red;">\*</mark>          | String  | if use\_template is true, use templateID, else use message in text box |
| sender<mark style="color:red;">\*</mark>        | String  | is optional. You can get from route sender/:client\_ID                 |

#### Sample Request

```
{
    "is_campaign": true, 
    "reference": "abc_123",
    "use_bucket": true,
    "recipients": "1", 
    "use_template": true,
    "body": "1", 
    "sender": "GTBank"
}

```

{% tabs %}
{% tab title="Success Response" %}
```
{
    "status": "SUCCESS",
    "message": "messages sent successfully",
    "data": {
        "sent": 1,
        "batch_id": "40FACAF358EA"
    }
}
```
{% endtab %}

{% tab title="Error Response" %}

{% endtab %}
{% endtabs %}

```
```

#### GET ALL CAMPAIGNS

This endpoint allows you to retrieve all campaigns

<mark style="color:green;">`GET`</mark> https://squadbygtco.com:8080/service/template/by-client/2?page=1\&count=10



{% tabs %}
{% tab title="Success Response" %}
```
{
    "status": "SUCCESS",
    "message": "campaigns retrieved successfully",
    "data": {
        "items": [
            {
                "id": 1,
                "name": "abc_123",
                "client_id": 1,
                "template_id": 1,
                "bucket_id": 1,
                "total": 2,
                "created_at": "2024-02-29T11:27:13.000Z",
                "created_by": null
            }
        ],
        "total": 1
    }
}
```
{% endtab %}

{% tab title="Error Response" %}

{% endtab %}
{% endtabs %}

#### GET CAMPAIGN MESSAGES

This endpoint allows you retrieve the campaign messages themselves.

<mark style="color:green;">`GET`</mark> https://squadbygtco.com:8080/service/message/campaign/messages/by-campaign/1?page=1\&count=10



{% tabs %}
{% tab title=" Sample Responses" %}
```
{
    "status": "SUCCESS",
    "message": "campaign messages retrieved successfully",
    "data": {
        "items": [],
        "total": [
            {
                "total": "0"
            }
        ]
    }
}
```
{% endtab %}

{% tab title="" %}

{% endtab %}
{% endtabs %}

#### GET ALL CAMPAIGN STATISTICS

This endpoint allows you to retrieve statistics for all sent campaigns

<mark style="color:green;">`GET`</mark> https://squadbygtco.com:8080/service/message/statistics/by-client/1?page=1\&count=10

{% tabs %}
{% tab title="Sample Response" %}
```
{
    "status": "SUCCESS",
    "message": "statistics retrieved successfully",
    "data": {
        "submitted": 0,
        "invalid": 0,
        "sent": 1,
        "absent": 0,
        "failed": 0,
        "delivered": 19,
        "deliveryFailed": 2
    }
}
```
{% endtab %}

{% tab title="Error Response" %}

{% endtab %}
{% endtabs %}

#### GET CAMPAIGN STATISTICS

This endpoint allows you to retrieve statistics for a single campaign

<mark style="color:green;">`GET`</mark> https://squadbygtco.com:8080/service/message/statistics/by-campaign/2?page=1\&count=10



**Sample Response**

```
{
    "status": "SUCCESS",
    "message": "campaign statistics retrieved successfully",
    "data": {
        "submitted": 0,
        "invalid": 0,
        "sent": 1,
        "absent": 0,
        "failed": 0,
        "delivered": 19,
        "deliveryFailed": 2
    }
}
```

####

#### GET MESSAGES BY PHONE NUMBER

This endpoint allows you to retrieve messages using a phone number

<mark style="color:green;">`GET`</mark> https://squadbygtco.com:8080/service/message/by-phone/0701234?page=1\&count=20



{% tabs %}
{% tab title="Sample Response" %}
```
{
    "status": "SUCCESS",
    "message": "phone messages retrieved successfully",
    "data": {
        "items": [],
        "total": [
            {
                "total": "0"
            }
        ]
    }
}
```
{% endtab %}

{% tab title="" %}

{% endtab %}
{% endtabs %}

#### GET MESSAGE STATUS BY BATCH\_ID

This endpoint allows you to retrieve the status of a single message using the batch\_id

<mark style="color:green;">`GET`</mark> [https://squadbygtco.com:8080/service/message/by-params?batch\_id=61AF806F8AE8](https://squadbygtco.com:8080/service/message/by-params?batch_id=61AF806F8AE8)

{% tabs %}
{% tab title="Response" %}
```
{
    "status": "SUCCESS",
    "message": "messages retrieved successfully",
    "data": {
        "items": [
            {
                "status": "submitted",
                "id": 7900221,
                "transaction_id": "8_9405c9d2-2411-42af-8ec7-88ffbc70ea61_0",
                "phonenumber": "08132448598",
                "message": "Testing for retrieveal for Elizabeth and Anthony",
                "sender_id": "HabariPay",
                "network": null,
                "charge": "4",
                "created_at": "2025-05-08T10:25:57.000Z",
                "sent_timestamp": null,
                "dlr_timestamp": null,
                "pages": 1,
                "message_type": "direct"
            }
        ],
        "pageInfo": {
            "hasNextPage": false,
            "nextCursor": null,
            "prevCursor": null
        }
    }
}
```
{% endtab %}

{% tab title="Error Response" %}

{% endtab %}
{% endtabs %}

{% hint style="info" %}
The Status response can be any of the following:\
Submitted: Request Received\
Pending: Request submitted to Telco

Delivered: Customer has received sms

Delivery Failed: Telco attempted to send sms but failed
{% endhint %}

**GET HOURLY STATISTICS**

This endpoint allows you to get statistics by the hour of sent campaigns

<mark style="color:green;">`GET`</mark> [https://squadbygtco.com:8080/service/message.summary/hourly-statistics/by-client/2?date=2024-03-12](https://squadbygtco.com:8080/service/message/by-params?batch_id=61AF806F8AE8)

{% tabs %}
{% tab title="Sample Response" %}
```
{
    "status": "SUCCESS",
    "message": "hourly statistics retrieved successfully",
    "data": {
        "submitted_count": 0,
        "sent_count": 0,
        "invalid_count": 0,
        "successful_count": 0,
        "failed_count": 0,
        "absent_count": 0,
        "avg_queue_time": 0,
        "avg_delivery_time": 0,
        "oldest_on_queue": null,
        "queue_count": null,
        "detail": [
            {
                "hour": "00:00",
                "submitted_count": 0,
                "sent_count": 0,
                "invalid_count": 0,
                "successful_count": 0,
                "failed_count": 0,
                "absent_count": 0
            },
            {
                "hour": "01:00",
                "submitted_count": 0,
                "sent_count": 0,
                "invalid_count": 0,
                "successful_count": 0,
                "failed_count": 0,
                "absent_count": 0
            },
            {
                "hour": "02:00",
                "submitted_count": 0,
                "sent_count": 0,
                "invalid_count": 0,
                "successful_count": 0,
                "failed_count": 0,
                "absent_count": 0
            },
            {
                "hour": "03:00",
                "submitted_count": 0,
                "sent_count": 0,
                "invalid_count": 0,
                "successful_count": 0,
                "failed_count": 0,
                "absent_count": 0
            },
            {
                "hour": "04:00",
                "submitted_count": 0,
                "sent_count": 0,
                "invalid_count": 0,
                "successful_count": 0,
                "failed_count": 0,
                "absent_count": 0
            },
            {
                "hour": "05:00",
                "submitted_count": 0,
                "sent_count": 0,
                "invalid_count": 0,
                "successful_count": 0,
                "failed_count": 0,
                "absent_count": 0
            },
            {
                "hour": "06:00",
                "submitted_count": 0,
                "sent_count": 0,
                "invalid_count": 0,
                "successful_count": 0,
                "failed_count": 0,
                "absent_count": 0
            },
            {
                "hour": "07:00",
                "submitted_count": 0,
                "sent_count": 0,
                "invalid_count": 0,
                "successful_count": 0,
                "failed_count": 0,
                "absent_count": 0
            },
            {
                "hour": "08:00",
                "submitted_count": 0,
                "sent_count": 0,
                "invalid_count": 0,
                "successful_count": 0,
                "failed_count": 0,
                "absent_count": 0
            },
            {
                "hour": "09:00",
                "submitted_count": 0,
                "sent_count": 0,
                "invalid_count": 0,
                "successful_count": 0,
                "failed_count": 0,
                "absent_count": 0
            },
            {
                "hour": "10:00",
                "submitted_count": 0,
                "sent_count": 0,
                "invalid_count": 0,
                "successful_count": 0,
                "failed_count": 0,
                "absent_count": 0
            },
            {
                "hour": "11:00",
                "submitted_count": 0,
                "sent_count": 0,
                "invalid_count": 0,
                "successful_count": 0,
                "failed_count": 0,
                "absent_count": 0
            },
            {
                "hour": "12:00",
                "submitted_count": 0,
                "sent_count": 0,
                "invalid_count": 0,
                "successful_count": 0,
                "failed_count": 0,
                "absent_count": 0
            },
            {
                "hour": "13:00",
                "submitted_count": 0,
                "sent_count": 0,
                "invalid_count": 0,
                "successful_count": 0,
                "failed_count": 0,
                "absent_count": 0
            },
            {
                "hour": "14:00",
                "submitted_count": 0,
                "sent_count": 0,
                "invalid_count": 0,
                "successful_count": 0,
                "failed_count": 0,
                "absent_count": 0
            },
            {
                "hour": "15:00",
                "submitted_count": 0,
                "sent_count": 0,
                "invalid_count": 0,
                "successful_count": 0,
                "failed_count": 0,
                "absent_count": 0
            },
            {
                "hour": "16:00",
                "submitted_count": 0,
                "sent_count": 0,
                "invalid_count": 0,
                "successful_count": 0,
                "failed_count": 0,
                "absent_count": 0
            },
            {
                "hour": "17:00",
                "submitted_count": 0,
                "sent_count": 0,
                "invalid_count": 0,
                "successful_count": 0,
                "failed_count": 0,
                "absent_count": 0
            },
            {
                "hour": "18:00",
                "submitted_count": 0,
                "sent_count": 0,
                "invalid_count": 0,
                "successful_count": 0,
                "failed_count": 0,
                "absent_count": 0
            },
            {
                "hour": "19:00",
                "submitted_count": 0,
                "sent_count": 0,
                "invalid_count": 0,
                "successful_count": 0,
                "failed_count": 0,
                "absent_count": 0
            },
            {
                "hour": "20:00",
                "submitted_count": 0,
                "sent_count": 0,
                "invalid_count": 0,
                "successful_count": 0,
                "failed_count": 0,
                "absent_count": 0
            },
            {
                "hour": "21:00",
                "submitted_count": 0,
                "sent_count": 0,
                "invalid_count": 0,
                "successful_count": 0,
                "failed_count": 0,
                "absent_count": 0
            },
            {
                "hour": "22:00",
                "submitted_count": 0,
                "sent_count": 0,
                "invalid_count": 0,
                "successful_count": 0,
                "failed_count": 0,
                "absent_count": 0
            },
            {
                "hour": "23:00",
                "submitted_count": 0,
                "sent_count": 0,
                "invalid_count": 0,
                "successful_count": 0,
                "failed_count": 0,
                "absent_count": 0
            }
        ]
    }
}
```
{% endtab %}

{% tab title="" %}

{% endtab %}
{% endtabs %}
