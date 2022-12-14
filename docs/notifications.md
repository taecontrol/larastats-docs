---
id: notifications
slug: /notifications
sidebar_position: 5
---

# Notifications

Larastats ships with some notifications for different use cases and scenarios, we've added the following notifications:

- New Exception Log Group.
- Request Took Longer Than Maximum Duration.
- SSL Certificate Check Failed.
- SSL Certificate Expires Soon.
- Uptime Check Failed.
- Uptime Check Recovered.

:::tip Take care
All the notifications are using the `Illuminate\Contracts\Queue\ShouldQueue` interface and `Illuminate\Bus\Queueable` trait, you must setup a queue driver to send notifications (we recommend redis).
:::

## Notifications via mail

Notifications via mail are active by default, you can find this in the `larastats.php` config file:

```php title="./config/larastats.php"
[
  //...
  'notifications' => [
      'channels' => ['mail'],
      //...
  ],
]
```

You can remove this channel just by removing the `'mail'` string from the array.

## Notifications via Slack

In order to send notifications via Slack, you must install the Slack notification channel via Composer:

```bash
composer require laravel/slack-notification-channel
```

Then we add `slack` on channels in `larastats.php` configuration file:

```php  title="./config/larastats.php"
[
  //...
  'notifications' => [
      'channels' => ['mail', 'slack'],
      'slack' => [
          'webhook_url' => env('SLACK_WEBHOOK_URL'),
      ],
  ],
]
```

There is a `SLACK_WEBHOOK_URL` that you must add in your `.env` file. You can obtain this webhook after creating a [Slack App](https://api.slack.com/apps?new_app=1) and configure an "Incoming Webhook", finally Slack will provide you with a Webhook URL:

```bash
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/TTW2G=asdW3/B042W9dsd9L/D1D329QLMNsdi12
```

Finally, if you're using a custom user model, you must implement the `routeNotificationForSlack():string`.