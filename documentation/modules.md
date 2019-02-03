# Modules

Basically, modules are used as means of code-splitting for implementation of
multiple content types mentioned [here](/guide/basics/concepts.md). The basic
Cockpit admin UI is served by the `Cockpit` module.

Every module **must** have a `bootstrap.php` file in it's root. This file is
loaded by the [app-container](/documentation/lime.md) when Cockpit does it's
initial [bootstrapping](/documentation/bootstrapping.md).