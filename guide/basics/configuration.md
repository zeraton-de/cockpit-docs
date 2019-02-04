---
sidebarDepth: 2
---

# Configuration

## Introduction

Cockpit accepts multiple types of configuration:

- `config/config.yaml` as the primary configuration file which also can be edited from the web interface via `Settings > Settings`
- `config/config.php` - a PHP file returning an array of configuration values (same options as in the yaml file)
- `.env` is used to override several deep-down constants used by Cockpit in multiple places (priority) ([more infos](/documentation/constants.md))
- `defines.php` does also override several deep-down constants after `.env`

The following describes common configuration variables and their default values which can be used in `config/config.(yaml|php)`. Less common variables are described [here](/documentation/configuration.md).

## Common Variables

### debug (`bool`)

More log output is generated and saved when this option is set to `true`. On environments meant for development (e.g. `localhost`) it is automatically set to `true`.

**Default** *(in production)*: `false`

### app.name (`string`)

Defines the default name of the application shown in page title and the default page navbar.

**Default:** `'Cockpit'`

### base_url (`string`)

Defines the URL the application loads assets like js/css from.

**Default:** *The URL used to access the application in present moment*

### sec_key (`string`)

A key for encrypting `storage/api.keys.php` where api tokens are stored. The file is encrypted using RC4 and converted to base64 before.

**Default:** `'xxxxx-SiteSecKeyPleaseChangeMe-xxxxx'`

### i18n (`string`)

The base locale for all content and the application laguage.

**Default:** `'en-US'`

### allowed_uploads (`string`)

A comma-seperated list of file types/extensions users will be allowed
to upload.

**Default:** `'*'`

### database (`object/array`)

 Database connection to a MongoDB server or SQLite directory.

#### database.server (`string`)

The connection string used to connect to the database.

**Default:** `'mongolite://storage/data'`

#### databse.options (`array`)

**Default:** `['db' => 'cockpitdb']`

#### databse.driverOptions (`array`)

**Default:** `[]`

### groups (`object/array`)

Defines additional groups and privileges of users within these groups.
Read more on permissions [here](/guide/basics/acl.md).

**Example:**

```yaml
groups:
  author:
    $admin: false
    $vars:
      finder.path: /storage/upload
      media.path : /storage/media
      finder.allowed_uploads: png, jpg, jpeg
      assets.allowed_uploads: png, jpg, jpeg
    cockpit:
      backend: true
      finder: true
```

### mailer (`array`)

Cockpit uses `PHPMailer` as a utility for sending email. Therefor, options can be found at [PHPMailer Documentation](http://phpmailer.github.io/PHPMailer/).

Example:

```yaml
mailer:
    from      : contactform@example.com
    from_name : MyApp
    transport : smtp
    host      : smtphost.provider.com
    user      : fancy-username
    password  : SuperSavePassword
    port      : 587
    auth      : true
    encryption: starttls
```

#### mailer.from (`string`)

The email address, Cockpit shall send mail from.

**Default:** `''`

#### mailer.from_name (`string`)

The name of the sending party (usually descriptive to identify the system in incoming mails).

**Default:** `''`

#### mailer.reply_to (`string`)

Defines an address, the recipient of mails shall reply to.

**Default:** `''`

#### mailer.transport (`string`)

**Default:** `'smtp'` *Unsure wether there actually is an alternative...*

#### mailer.host (`string`)

The host to connect to when sending mail. (MTA)

**Default:** `''`

#### mailer.user (`string`)

The username to identify with when sending mail trough `mailer.host`.

**Default:** `''`

#### mailer.password (`string`)

A password corresponding to `mailer.user` to send mail with `mailer.host`.

**Default:** `''`

#### mailer.port (`string`)

The port to connect to at `mailer.host`.

**Default:**: `''` *(is later set by PHPMailer when left out)*

#### mailer.auth (`bool`)

Defines whether to use SMTP authentication (with credentials from `mailer.user` and `mailer.password`) or not.

**Default:** `true`

#### mailer.encryption (`string`)

What kind of encryption to use on the SMTP connection.

Options:

- `''`
- `'ssl'`
- `'tls'`

**Default:** `''`

#### mailer.smtp (`array`)

Options array passed to `stream_context_create` when connecting via SMTP.

**Default:** `[]`

#### mailer.bcc (`array`)

A list of addresses, mails shall be sent to without the receiving partys notice (blind carbon copy).

**Default:** `''`

#### mailer.cc (`array`)

A list of addresses, mails shall be sent to in addition to the receiving party (carbon copy).

**Default:** `''`

#### mailer.attachments (`array`)

Attachments added to each mail sent by Cockpit.
This can either be:

- A list of file paths to attach to the mails
- A map (`[name => value]`) where `name` is the name the attachment shows up as and `value` being raw data

**Default:** `[]`

### cors (`object/array`)

::: tip
You can completely disable CORS when you don't access the API from within a
browser or your Cockpit installation is located on the same domain as sites
loading content from it's API.
:::

**Set the following to disable CORS:**

```yaml
cors:
    allowedHeaders: ''
    allowedMethods: ''
    allowedOrigins: 'null'
    maxAge: '1000'
    allowCredentials: 'false'
    exposedHeaders: 'false'
```

Settings for sending the right headers concerning CORS
(Cross-Origin-Resource-Sharing). CORS is an important browser security feature -
it regulates which sites and scripts from these (origins) can make requests to
different URLs than where they were originally received from.

#### cors.allowedHeaders (`string`)

**Default:** `'X-Requested-With, Content-Type, Origin, Cache-Control, Pragma,
Authorization, Accept, Accept-Encoding, Cockpit-Token'`

#### cors.allowedMethods (`string`)

**Default:** `'PUT, POST, GET, OPTIONS, DELETE'`

#### cors.allowedOrigins (`string`)

**Default:** `'*'`

#### cors.maxAge (`string/integer`)

**Default:** `1000`

#### cors.allowCredentials (`string`)

**Options:**

- `true`
- `false`

**Default:** `'true'`

#### cors.exposedHeaders (`string`)

**Options:**

- `true`
- `false`

**Default:** `'true'`

## Uncommon Variables

### base_route (`string`)

Defines the URL, JavaScript based API requests will be sent to (for example when loading items in a collection).

**Default:** *The URL used to access the application in present moment stripped from any directory/file portion*

### docs_root (`string`)

This is the base path where Cockpits PHP source code (files) is located.

**Default:** *Either the directory of `bootstrap.php` or the `DOCUMENT_ROOT`*

### session.name (`string`)

A custom name for the PHP session used to store authentification and user data for the current session.

**Default:** `md5(__DIR__)`

::: warning
Changing this will lead to locking out all currently logged in users which can potentially result in data loss.
:::

### session.init (`bool`)

Wether the PHP session has been started already (useful when adding things to the session before Cockpit takes over).

**Default:** `false`

### memory (`object/array`)

Information for connection to a short-term storage device / service.

#### memory.server (`string`)

Connection string to either Redis or another SQLite file for cached storage.

**Default:** `'redislite://storage/data/cockpit.memory.sqlite'`

#### memory.options (`array`)

**Default:** `[]`

### paths (`object/array`)

**Defaults:**

```php
[
    '#root'     => COCKPIT_DIR,
    '#storage'  => COCKPIT_STORAGE_FOLDER,
    '#pstorage' => COCKPIT_PUBLIC_STORAGE_FOLDER,
    '#data'     => COCKPIT_STORAGE_FOLDER.'/data',
    '#cache'    => COCKPIT_STORAGE_FOLDER.'/cache',
    '#tmp'      => COCKPIT_STORAGE_FOLDER.'/tmp',
    '#thumbs'   => COCKPIT_PUBLIC_STORAGE_FOLDER.'/thumbs',
    '#uploads'  => COCKPIT_PUBLIC_STORAGE_FOLDER.'/uploads',
    '#modules'  => COCKPIT_DIR.'/modules',
    '#addons'   => COCKPIT_DIR.'/addons',
    '#config'   => COCKPIT_CONFIG_DIR,
    'assets'    => COCKPIT_DIR.'/assets',
    'site'      => COCKPIT_SITE_DIR
]
```

*(Note: any constants used here can be overwritten using `.env` or `defines.php` - most of them are automatically set in bootstrapping process)*

### filestorage (`object/array`)

Defines the ways used by Cockpit to access specific data.
Each location is described in the following way:

- `adapter`
- `args`
- `mount`
- `url`

The following adapters are available:

- `League\Flysystem\Adapter\Local`
- `League\Flysystem\Adapter\FTP`
- `League\Flysystem\Adapter\FTPD`
- `League\Flysystem\Adapter\SynologyFTP`

**Defaults:**

```php
'root' => [
    'adapter' => 'League\Flysystem\Adapter\Local',
    'args' => [$app->path('#root:')],
    'mount' => true,
    'url' => $app->pathToUrl('#root:', true)
],

'site' => [
    'adapter' => 'League\Flysystem\Adapter\Local',
    'args' => [$app->path('site:')],
    'mount' => true,
    'url' => $app->pathToUrl('site:', true)
],

'tmp' => [
    'adapter' => 'League\Flysystem\Adapter\Local',
    'args' => [$app->path('#tmp:')],
    'mount' => true,
    'url' => $app->pathToUrl('#tmp:', true)
],

'thumbs' => [
    'adapter' => 'League\Flysystem\Adapter\Local',
    'args' => [$app->path('#thumbs:')],
    'mount' => true,
    'url' => $app->pathToUrl('#thumbs:', true)
],

'uploads' => [
    'adapter' => 'League\Flysystem\Adapter\Local',
    'args' => [$app->path('#uploads:')],
    'mount' => true,
    'url' => $app->pathToUrl('#uploads:', true)
],

'assets' => [
    'adapter' => 'League\Flysystem\Adapter\Local',
    'args' => [$app->path('#uploads:')],
    'mount' => true,
    'url' => $app->pathToUrl('#uploads:', true)
]
```

### modules.disabled (`array`)

A list of modules / plugins disabled.

**Default:** `[]`

::: tip
Users of older Cockpit versions which were upgraded can either remove `modules/Regions` or disable it here when wanting to get rid of the deprectaed [Region type](/guide/basics/concepts.md#regions).
:::