# Webhook

Webhooks are used so that anytime an event occurs on your account, your application can be notified with instant, real-time notifications by Squad.

Squad webhooks are HTTP calls that are triggered by specific events. It is necessary only for behind-the-scenes transactions.&#x20;

This can be set up on your Squad Dashboard by specifying a URL we would send POST requests to whenever an event occurs. Each webhook notification contains an eventType that specifies which type of event triggered the webhook notification.&#x20;

To process notifications, you need to:

Paste your **`Callback/Webhook URL`** in the space provided on your dashboard.

* Login to your Squad dashboard.&#x20;
* Go to Profile > API & Webhook.
* In the Webhook URL field, enter your Notification URL.
* Enter a redirect URL for your customers to be redirected after they complete payment. \
  Note: The Redirect URL is optional.\


To configure webhook notifications: [<mark style="color:blue;">`dashboard > profile > api-webhooks.`</mark>](https://dashboard.squadinc.co/profile/api-webhooks)<mark style="color:blue;">``</mark>
