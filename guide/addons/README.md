# Introduction

There are multiple ways to obtain addons for Cockpit. Currently there is no general Add-On-Store where they can be downloaded so we have to rely on GitHub-repos where most addons are developed.

Due to not having a centralized addon directory, addons also won't updated themselves when there is a new version released by the maintainer.

Here we are providing some documentation on to-date *mostly* undocumented addons by the [Cockpit Community](https://discourse.getcockpit.com).

## Installation

Add-Ons are installed into Cockpit by putting the addons source into a directory named after the addons title in the `addons/` folder within your Cockpit installation.

```
.
├── addons
│   ├── LayoutComponents
│   └── CloudStorage
├── assets
| ...
├── install
| ...
├── lib
| ...
├── modules
│   ├── Cockpit
│   ├── Collections
│   ├── Forms
│   └── Singletons
└── storage
```

Generally speaking, all addons could also be added to the `modules/` folder. But we don't recommend to do this because `modules/` are like 'internal addons'. Refer to the [developers documentation](/documentation/modules.md) to learn more.