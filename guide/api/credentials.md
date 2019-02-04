# Credentials

Before accessing your data you need to create an API token. There are three types of API tokens availible within the Cockpit CMS:

- Global full-access API-key
- Custom API-keys
- Per user API-keys

## Obtaining a Global API Key

Please go to `Settings > API Access` to generate a unique gloabl API token. You can re-generate the token anytime you want.

![Global API Key](@assets/webtoken.png)

## Configure Custom API keys

Please go to `Settings > API Access` to generate and configure custom (restricted) API tokens. You can re-generate the tokens anytime you want.

You can configure the permissions for this token by allowing certain URLs to be accessed with it. To find out more about API-URLs, see [here](#urls).

**Examples:**

1. Grant all permissions:

    ```text
    *
    ```

2. Only allow access to **READ** singleton data:

    ```text
    /api/singletons/get/*
    ```

3. Only allow access to **READ** a defined list of cellections (here: pages & services):

    ```text
    /api/collections/get/(pages|services)
    ```

4. Grant access to **SUBMIT** all forms:

    ```text
    /api/forms/submit/*
    ```

5. Allow access to **WRITE** to all collections:

    ```text
    /api/collections/save/*
    ```

6. Allow access to **READ** and **WRITE** a defined list of cellections (here: pages & services):

    ```text
    /api/collections/get/(pages|services)
    /api/collections/save/(pages|services)
    ```

![Custom Gloabl Tokens](@assets/customtokens.png)

## Obtaining a User-Token

Please go to your user-account (either via the navbar for the current user or by going to `Settings > Accounts` and choosing the respective user) to obtain a user based API token. This token is restricted to the operations the obtaining user can perform. You can also re-generate these tokens anytime you want.

![User Tokens](@assets/usertoken.png)
