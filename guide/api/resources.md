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

**Request Body (Example):**
```json
{
  "user": {
    "_id": "5b38gsab3a482doc2038634383",
    "email": "info@zeraton.de"
  }
}
```

**Response Body (Example):**
```json
{
  "_id": "5b38gsab3a482doc2038634383",
  "email": "info@zeraton.de",
  "_modified": 1549283087
}
```

## Assets/Images

## Collections

## Singletons

## Forms
