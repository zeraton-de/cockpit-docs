# Authentification

Every API-call made to the `/api/*` endpoint needs to carry a `token` to authenticate the call. The token can be passed to the Cockpit API in three ways:

1. In a query parameter.
2. As a `Cockpit-Token` header.
3. As a `Bearer` token in the `Authorization` header.

## Examples

### Query Parameter

```js
fetch('/api/collections/get/posts?token=xxtokenxx').then(res =>
    res.json()
).then(res =>
    console.log(res)
);
```

### `Cockpit-Token` header

```js
fetch('/api/collections/get/posts', {
    headers: { 'Cockpit-Token': 'xxtokenxx' }
}).then(res =>
    res.json()
).then(res =>
    console.log(res)
);
```

### `Bearer` token in the `Authorization` header

```js
fetch('/api/collections/get/posts', {
    headers: { 'Authorization': 'Bearer xxtokenxx' }
}).then(res =>
    res.json()
).then(res =>
    console.log(res)
);
```