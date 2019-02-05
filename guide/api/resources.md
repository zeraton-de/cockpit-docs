---
sidebarDepth: 2
---
# Resources

## Users

### Authenticate Specific User

|                |                         |
| -------------- | ----------------------- |
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
| -------------- | ----------------------- |
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

|                |                          |
| -------------- | ------------------------ |
| URL            | `/api/cockpit/listUsers` |
| Method         | `POST`                   |
| Authentication | needed                   |

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

### List Of Assets

Retrieve a list of available assets and assets folders if there are any.

|                |                       |
| -------------- | --------------------- |
| URL            | `/api/cockpit/assets` |
| Method         | `POST`                |
| Authentication | needed                |

**Options:**
| Option   | Default | Value / Further Docs                                   |
| -------- | ------- | ------------------------------------------------------ |
| `filter` | `null`  | see [here](/guide/api/options.md#filter-object-array)  |
| `limit`  | `null`  | `int`                                                  |
| `sort`   | `null`  | see [here](/guide/api/options.md#sort-object-array)    |
| `skip`   | `null`  | `int`                                                  |
| `folder` | `''`    | `string`                                               |

**Request Body:**

```json
{
  "filter": {
    ""
  },
  "limit": 10,
  "sort": {
    ...
  },
  "skip": 10,
  "folder": "/posts/"
}
```

**Response Body:**

```json
{
  "assets": [
    {
      "path": "\/2019\/01\/08\/5c3467d3c81b9Einkaufswagen.png",
      "title": "Einkaufswagen.png",
      "mime": "image\/png",
      "description": "",
      "tags": [],
      "size": 105401,
      "image": true,
      "video": false,
      "audio": false,
      "archive": false,
      "document": false,
      "code": false,
      "created": 1546938323,
      "modified": 1546938323,
      "_by": "5b393ae1ee466doc348387475",
      "width": 182,
      "height": 214,
      "colors": [
        "#918c85",
        "#312f2a",
        "#dad9dd",
        "#713b22",
        "#8a582d"
      ],
      "folder": "",
      "_id": "5c3467d365636460d6000149"
    },
    {
      "path": "\/2018\/12\/20\/5c1b6a94e0ef1solarwinds-arm-risk-assessment-dashboard.png",
      "title": "solarwinds-arm-risk-assessment-dashboard.png",
      "mime": "image\/png",
      "description": "",
      "tags": [],
      "size": 39686,
      "image": true,
      "video": false,
      "audio": false,
      "archive": false,
      "document": false,
      "code": false,
      "created": 1545300628,
      "modified": 1545300628,
      "_by": "5b393acb7ef18doc341309268",
      "width": 1024,
      "height": 640,
      "colors": [
        "#dfdfdf",
        "#33181b",
        "#8ea428",
        "#5495b1",
        "#9c9899"
      ],
      "folder": "",
      "_id": "5c1b6a9565636446b50000e9"
    },
  ],
  "total": 2,
  // optional
  "folders": [],
}
```

### Get Thumbnail

|                |                      |
| -------------- | -------------------- |
| URL            | `/api/cockpit/image` |
| Method         | `POST`               |
| Authentication | needed               |

**Options:**
| Option | Default       | Value / Further Docs                               | Required |
| ------ | ------------- | -------------------------------------------------- | :------: |
| `src`  | `false`       | path to image or image `_id`                       |    *     |
| `m`    | `'thumbnail'` | `string`       (`crop` / `thumbnail`)              |          |
| `fp`   | `''`          | see [here](/guide/api/options.md#fp-string)        |          |
| `f`    | `[]`          | see [here](/guide/api/options.md#f-object-array)   |          |
| `w`    | `null`        | image width (`int`)                                |    *     |
| `h`    | `null`        | image height (`int`)                               |    *     |
| `q`    | `100`         | picture quality `int`                              |          |
| `r`    | `false`       | recreate thumbnail even if cached already (`bool`) |          |
| `b64`  | `false`       | output image as base64 (`bool`)                    |          |
| `o`    | `false`       | output image (`bool`)                              |          |

::: tip
All [filters](/guide/api/options.md#f-object-array) usable in `f` can also be
added by adding them to the global options instead of the `f`-key.

**Example:**

```json
{
  "src": "5c3467d365636460d6000149",
  "w": 200,
  "h": 300,
  "blur": "selective"
}
```

:::

::: warning
`b64` takes precedence over `o`
:::

#### Examples

Request Body:

```json
{
  "src": "",
  "w": 200,
  "h": 300,
  "f": [
    "blur"
  ],
  "q": 87
}
```

Response Body:

```text
/storage/thumbs/474b2b464082fab553d19513cab38c5a_200x300_100_1546945336_thumbnail_adb115059e28d960fa8badfac5516667.png
```

---

Request Body:

```json
{
  "src": "",
  "w": 200,
  "h": 300,
  "f": [
    "blur"
  ],
  "q": 87,
  "b64": true
}
```

Response Body:

```text
data: image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAEsCAYAAACG+vy+AAAgAElEQVR42jy8SY8kWZal971ZBh1tcHP38IiojMqpsrKqWegm0STIJbckwH/Q/GsNcMMdwWWvCLJBgF3VXeyqzJoyMzIywt3NbdJBVETezIU4a6Ebg5rCIPruu/ec71wT//Z/+bc1+8DxeOR4PPL8+MhwPhPngRxO7FawXff0rYNaOB1HSlVo2/OjP/kLbl+95erqjvXuBh8TIczM88A0PJP8RJgGHh4e+PWv/4HHp0eGy5F3X92xagyNFmQ/EX0g5UzKhX61oXGG1lquVjuSTxxOR94/fOA5RL7+8S/45ud/zn/xL/81WhtSjIzDmW//8W85fPyB8+M9dTjy5vYN1jhyzHz/w3vmeaYi+Prnv8Ss97SrDav1lld3r8hl+bufn+45PN8zjSeiHyjxwvHpgdPzE+PouXv7Dbevv+Ltuz/Gtit8nJnChdN0pAiDcx279TX99S3WtoDkux/e8+1336GN5mc//Rk//slPMFojAAFQKyUFYrhwOT1xODzy/PSJb3/zd3y6f89wPhPmSJwDFJBItps1bb9CKkXMGSUN1zd33L1+x9c/+RkvpwPPhye+/+E7vvv9twznE9PlwhwDSIGxlvV6y5u3X7LfXbFZ7xhHD0rRNB0316+QUpDrTMojp/MLq2bLqt9xdf2K7eYapTQVyXAeqFR88Dy/PLK/vqFfren7Fabp6FdrGteghOAP3/6Wf/r7X/Grv/lr/t2/+98ZD0+UNNN1hmmIaFFprOYnP
```

## Collections

## Singletons

## Forms
