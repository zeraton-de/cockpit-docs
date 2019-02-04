---
sidebarDepth: 2
---
# Resources

## Users

### Authenticate Specific User

|                |                         |
|----------------|-------------------------|
| URL            | `/api/cockpit/authUser` |
| Method         | `POST`                  |
| Authentication | needed                  |

**Request Body:**

```json
{
  "user": "jankal",
  "password": "dfjhiuh832bjk"
}
```

**Response Body:**

```json
{
  "user": "jankal",
  "email": "alex@zeraton.de",
  "group": "admin",
  "name": "Alexander Jank",
  "active": true,
  "i18n": "en",
  "_created": 1530457915,
  "_modified": 1530463164,
  "_id": "5b38gsab3a482doc2038634383",
  "api_key": "account-yugj49exuccuek0lrnw3k1hi5hp5ug"
}
```

### Update/Create Specific User

Use this endpoint to either create a new user or update information of an
existing user. When only a single value of a users information is changed, only
this value needs to be submitted.

::: danger
For updating a users information, remember to always pass `user._id`!
:::

|                |                         |
|----------------|-------------------------|
| URL            | `/api/cockpit/saveUser` |
| Method         | `POST`                  |
| Authentication | needed                  |

**Request Body:**

```json
{
  "user": {
    "_id": "5b38gsab3a482doc2038634383",
    "email": "info@zeraton.de"
  }
}
```

**Response Body:**

```json
{
  "_id": "5b38gsab3a482doc2038634383",
  "email": "info@zeraton.de",
  "_modified": 1549283087
}
```

### List All Existing Users

|                |                         |
|----------------|-------------------------|
| URL            | `/api/cockpit/listUsers` |
| Method         | `POST`                  |
| Authentication | needed                  |

**Request Body:** *Empty*

**Response Body:**

```json
[
  {
    "user": "chris",
    "email": "chris@zeraton.de",
    "active": true,
    "group": "admin",
    "i18n": "en",
    "name": "Christoph Gampe",
    "_modified": 1530477177,
    "_created": 1530477177,
    "_id": "re3xk30umlc36vjb1qnnmeeuq2"
  },
  {
    "user": "jankal",
    "name": "Alexander Jank",
    "email": "info@zeraton.de",
    "active": true,
    "group": "admin",
    "i18n": "en",
    "_created": 1530457915,
    "_modified": 1549283087,
    "_id": "5b38gsab3a482doc2038634383"
  },
  {
    "user": "laura@zeraton.de",
    "email": "laura@zeraton.de",
    "active": true,
    "group": "admin",
    "i18n": "en",
    "name": "Laura",
    "_modified": 1539082023,
    "_created": 1538384610,
    "_id": "snot3hds8n8cgv2ichv0bnr1hv"
  },
  {
    "user": "test",
    "email": "test@zeraton.de",
    "active": false,
    "group": "test",
    "i18n": "en",
    "name": "test",
    "_modified": 1530462763,
    "_created": 1530459262,
    "_id": "ynrcl9nbvf0m536i6ca15kooid"
  }
]
```

## Assets/Images

## Collections

## Singletons

## Forms
