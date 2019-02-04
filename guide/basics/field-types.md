# Field-Types

In Cockpit you can build custom content models defined by a collection of
different field types. Most field types can have different options which
influence their behaviour. Options are stored as a JSON-object.

## Access-List

Provides chooser for available Access groups

## Account-Link

Link one or more user accounts

**Options:**

```json
{
    "multiple": false,
    "limit": null,
}
```

## Asset

An asset field can reference an asset (e.g. file or pdf) you've uploaded in Cockpits Asset-Manager.

## Boolean

A boolean field for true and false values.

**Options:**

```json
{
    "label": false,
    "default": false,
    "cls": "" // custom class
}
```

## Code

Provides a code editor field.

**Options:**

```json
{
    "syntax": "text",
    "height": "auto"
}
```

## Collection-Link

Link other collection items.

**Options:**

```json
{
    "link": "collectionname",
    "display": "fieldname",
    "multiple": false,
    "limit": false
}
```

## Color

Provides a color chooser field (based on Spectrum.js).

**Options:**

```json
{
    "spectrum": {/* spectrum settings */}
}
```

## Colortag

Provides chooser for predefined colors

**Options:**

```json
{
    "size": "inherit",
    "colors": [/* list of hex color codes */]
}
```

## Date

Provides a date chooser field (based on Spectrum.js).

**Options:**

```json
{
    "weekstart": 0,
    "format": "YYYY-MM-DD",
    "cls": "",
    "placeholder": ""
}
```

## File

Provides a file chooser field (using Cockpits built-in finder module).

**Options:**

```json
{
    "cls": "",
    "placeholder": "No file selected..."
}
```

## Gallery

Manage images and additional meta information for each image.

**Options:**

```json
{
    "meta": {
        "title": {
            "type": "text",
            "label": "Title"
        }
    }
}
```

## HTML

HTML editor field with preview.

**Options:**

```json
{
    "iframe"         : false,
    "mode"           : "split",
    "markdown"       : false,
    "enablescripts"  : false,
    "height"         : 500,
    "maxsplitsize"   : 1000,
    "codemirror"     : { /* codemirror settings */ },
    "toolbar"        : [ "bold", "italic", "strike", "link", "image", "blockquote", "listUl", "listOl" ],
    "lblPreview"     : "Preview",
    "lblCodeview"    : "HTML",
    "lblMarkedview"  : "Markdown"
}
```

## Image

Choose an image and manage additional meta information.

**Options:**

```json
{
    "meta": {
        "title": {
            "type": "text",
            "label": "Title"
        }
    }
}
```

## Layout

Layout editor

**Options:**

```json
{
    "components": {
        /* Custom components */
    }
}
```

## Layout-Grid

Layout editior with preselected grid component

## Location

Location chooser to get lat,lng values.

**Options:**

```json
{
    "zoomlevel": 13
}
```

## Markdown

Markdown editor field with preview.

**Options:**

```json
{
    "height": 500
}
```

## Multipleselect

Select multiple values from a pre-defined list of options.

**Options:**

```json
{
    "options": "Option 1, Option 2, Option 3"
}
```

## Object

JSON object editor.

**Options:**

```json
{
    "height": "300px",
    "cls": ""
}
```

## Password

Password field.

**Options:**

```json
{
    "cls": ""
}
```

## Rating

Rating field.

**Options:**

```json
{
    "mininmum": 0,
    "maximum": 5,
    "precision": 0
}
```

## Repeater

Manage multiple values of fields.

**Options:**

```json
{
    "field": {"type": "text", "label": "Name"},
    "display": null, // display value on re-order
    "limit": null
}
```

or add field chooser

```json
{
    "fields": [
        {"type": "text", "label": "Name"},
        {"type": "html", "label": "Html Code"}
    ]
}
```

## Select

Provides a selectbox.

**Options:**

```json
{
    "cls": "",
    "options": "Option 1, Option 2, Option 3",
    "default": "Option 2"
}
```

## Set

Provides a field group.

**Options:**

```json
{
    "fields": [
        {"name":"name", "type": "text"},
        {"name":"about", "type": "html"}
    ]
}
```

## Tags

Manage a list of tags.

**Options:**

```json
{
    "autocomplete": [],
    "placeholder": "Add Tag..."
}
```

## Text

Simple text input.

**Options:**

```json
{
  "cls": "",
  "maxlength": null,
  "minlength": null,
  "step": null,
  "placeholder": null,
  "pattern": null,
  "size": null,
  "slug": true
}
```

## Textarea

Simple textarea field.

**Options:**

```json
{
  "cls": "",
  "allowtabs": true,
  "maxlength": null,
  "minlength": null,
  "placeholder": null,
  "cols": null,
  "rows": null
}
```

## Time

Time picker field.

**Options:**

```json
{
  "cls": ""
}
```

## WYSIWYG

A WYSIWYG editor field.

**Options:**

```json
{
  "cls": "",
  "rows": null,
  "editor": { /* tinyMCE settings */ }
}
```