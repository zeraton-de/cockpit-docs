---
{
    "resources": {
        "users": "users",
        "assets-images": "assets/images",
        "collections": "collections",
        "singletons": "singletons",
        "forms": "forms"
    }
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