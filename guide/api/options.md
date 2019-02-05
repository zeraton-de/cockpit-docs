---
sidebarDepth: 2
---
# Common Options

## filter (`object/array`)

To be added...

## sort (`object/array`)

Determines in which order items will be fetched from the data-source.
The `sort` option is a `object` where each key (property name) should be the
name of the field which shall be used for ordering. The corresponding value
can be either `-1` (meaning DESC) or `1` (meaning ASC).

**Example:**

```json
{
  "sort": {
    "name": -1
  }
}
```

## Image Manipulation

### fp (`string`)

Defines an anchor which shall be the middle of the newly cropped or stretched
image. It can either be in the format of `x y` and define an exact point or one
of the following common anchors can be used:

- `center`
- `top`
- `bottom`
- `left`
- `right`
- `top left`
- `top right`
- `bottom left`
- `bottom right`

**Default:** `center`

**Examples:**

```json
{
  "fp": "45 100"
}
```

```json
{
  "fp": "bottom right"
}
```

### f (`object/array`)

Defines a set of filters which should be applied to the image. The key defines
the name of a filter and the corresponding value can be used to pass an option.

When this is passed as a non-associative array, the filters will be applied without options.

| Filter Name | Option                                                                                              |
| ----------- | --------------------------------------------------------------------------------------------------- |
| blur        | Algorithm (`gaussian` or `selective`) Default: `gaussian`                                           |
| brighten    | Percentage (`int`)                                                                                  |
| colorize    | Array (`red`, `green`, `blue`, `alpha`) / (HEX value / CSS color name (with alpha like `white|.5`)) |
| contrast    | Percentage (`int`)                                                                                  |
| darken      | Percentage (`int`)                                                                                  |
| desaturate  | Percentage (`int`)                                                                                  |
| edge detect | `<none>`                                                                                            |
| emboss      | `<none>`                                                                                            |
| flip        | Direction (`y`, `x`, `both`)                                                                        |
| invert      | `<none>`                                                                                            |
| opacity     | Opacity-Level (0-1)                                                                                 |
| pixelate    | Size of blocks; Default: `10`                                                                       |
| sepia       | `<none>`                                                                                            |
| sharpen     | `<none>`                                                                                            |
| sketch      | `<none>`                                                                                            |

**Examples:**

```json
{
  "f": {
    "emboss": "",
    "colorize": "blue|.5",
    "darken": 10
  }
}
```

```json
{
  "f": [
    "emboss"
  ]
}
```