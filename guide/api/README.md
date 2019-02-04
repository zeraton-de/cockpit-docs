---
{
    "resources": {
        "users": "Users",
        "assets-images": "Assets/Images",
        "collections": "Collections",
        "singletons": "Singletons",
        "forms": "Forms"
    },
    "sidebarDepth": 0
}
---
# Introduction

Cockpit serves a JSON based API on `/api`.
[CORS](/guide/basics/configuration.md#cors-object-array) is enabled by default, so every
application can access it by default.

The following resources can be modified using the API:
<ul>
    <template v-for="(name, hash) in $page.frontmatter.resources">
        <li>
            <router-link :to="'/guide/api/resources.html#' + hash" :key="hash">{{name}}</router-link>
        </li>
    </template>
</ul>

## Recommendations

We do recommend always set the `Content-Type: application/json` header when
POSTing data to this API.

## Client Libraries

As of now, there is only one client library we are aware of. If yo u're in the
process of developing one, feel free to submit a Pull Request into this
documentation repo on GitHub.

| Name                                                         | Language / Framework   |
|--------------------------------------------------------------|------------------------|
| [ginetta/cockpit-sdk](https://github.com/ginetta/cockpit-sdk)| JavaScript / Node.js   |