---
id: installation
slug: /installation
sidebar_position: 1
---

# Installation

## Installation via Composer

In order to install Larastats you must have Composer in your system.

In your application you need to add our repository in your `composer.json` file:

```json
"repositories": [
  {
    "type": "composer",
    "url": "https://satis.taecontrol.com"
  }
],
```

Next, you must add `taecontrol/larastats` package to the list of required packages:

```json
"require": {
    "php": "^8.0",
    "laravel/framework": "^9.0",
    "taecontrol/larastats": "*"
},
```

Your `composer.json` is ready to install Larastats, run `composer update` command in your console terminal:

```bash
composer update
```

It will prompt to provide your login credentials to Larastats site. We need this to authenticate your Composer session and permissions to download Larastats package source code. You can also create a Composer auth.json file (this will prevent you to type your credentials manually):

```json
{
    "http-basic": {
        "satis.taecontrol.com": {
            "username": "johndoe@example.com",
            "password": "your-api-token"
        }
    }
}
```

:::tip Composer tip
You can create your `auth.json` file with composer:

```bash
composer config http-basic.satis.taecontrol.com johndoe@example.com your-api-token
```
:::

:::danger Take care
We don't advise to add this file to your project version control system.
:::
