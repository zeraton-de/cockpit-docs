---
sidebarDepth: 2
---
# File/Directory Structure

## `addons`

Contains all [Add-Ons](/guide/addons/) added to the system. Every Add-On lives
inside it's own directory named like the Add-On.

## `assets`

Contains images (e.g. icons), styling and JavaScript files for Cockpit to
function correctly.

## `install`

Contains a installer to set up Cockpit for the first time. The installer checks
compatibility of your hosting environment with the
[requirements](/guide/#requirements) and performs [user
creation](/guide/#installation).

## `lib`

Contains a standard amount of classes and dependecies (PHP) for Cockpit to
function. 

### `lib/Lime`

A basic framework called ["Lime"](/documentation/lime.md) outfitted with:
* YAML parsing based on Spyc (`lib/Spyc.php`)
* Markdown parsing based on Parsedown (`lib/Parsedown.php` &
  `lib/ParsedownExtra.php`) -> `erusev/parsedown`
* Image handling based on `claviska/simpleimage`
* Basic Access-Control functionality
* Basic i18n
* Cookie handling
* Asset handling

Components described above are implemente in so-called [helpers](/documentation/helpers.md).

### `lib/LimeExtra`

An extended version of Lime in which provided helpers are being used. Here
view-rendering is also bound into Lime.

### `lib/MongoHybrid`

A connector to either connect to MongoDB or a SQLite storage file/directory for
data storage.

* `mongodb://` => Usage of `MongoHybrid\Mongo` / `MongoHybrid\MongoLegacy` for
  establishing a connection to a MongoDB server
* `mongolite://` => Usage of `MongoHybrid\MongoLite` -> `MongoLite\Client` to
  use an SQLite backend

### `lib/MongoLite`

A connector to use an SQLite database in the same way as one would use a MongoDB
database.

### `lib/SimpleStorage`

A proxy to call either a Redis server (if configured) or using `\RedisLite` to
fallback to another SQLite store.

### `lib/vendor`

This directory contains composer-based dependencies in their respective
versions. At time of writing, the following dependencies are available:
* `claviska/simpleimage`
* `erusev/parsedown`
* `erusev/parsedown-extra`
* `firebase/php-jwt`
* `ksubileau/color-thief-php`
* `league/flysystem`
* `league/color-extractor`
* `maennchen/zipstream-php`
* `mongodb/mongodb`
* `phpmailer/phpmailer`

## `modules`

Cockpit consist of multiple [Modules](/documentation/modules.md). Each module
lives in it's own directory (same as Add-Ons) and has a `bootstrap.php` which is
called by the `App::loadModules()` method.

## `storage`

Images, their thumbnails, API-keys and SQLite files are stored here.