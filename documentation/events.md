# Events

## `cockpit.filestorage.init`

Triggered before an instace of `lib/FileStorage.php` is created and bound into
the container.

**Parameters:**

- `&$storages` containing the current `filestorage` configuration (either
  default or modified trough [configuration](/guide/basics/configuration.md#filestorage-object-array)).

## `cockpit.bootstrap`

Triggered, when `cockpit()` in `bootstrap.php` finished creating the first
instance of `LimeExtra\App`, applying configuration to it and loading all modules.