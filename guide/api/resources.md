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

## Assets/Images

## Collections

## Singletons

## Forms
