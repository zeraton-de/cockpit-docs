---
sidebarDepth: 2
---
# Concepts

There are different ways to store structured data within Cockpit.
Internally each of these types are developed as a [module](/documentation/modules.md).

## Collections

Collections store multiple instances of structured data (objects) much like
custom post types in other Content Management Systems like WordPress.<br/>

### Metadata

Collections can be created from the Collection-list and do consist of the
following defined pieces of data:

- Name (`string`, required) - must only contain upper- or lowercase letters<br/>
  Meant as a internal identifier it is used to determine API endpoints and
  reference the collection in [collectionlinks](/guide/basics/field-types.md#collection-link).
- Label (`string`, required) - is show in Cockpit's UI for users to identify the
  collection
- Group (`string`) - Collections can be organized inside groups. Define a group
  name here. There is no need to create the group first.
- Icon - Choose some icon from Cockpit's icon set to visually identify the
  collection faster
- Color - Another means of identification of that collection in the UI
- Description - Write a short description about the data that will be put into
  this collection. It will be displayed in the UI above a list of items inside
  the collection
- Custom sortable entries (`boolean`) - when enabled, items can be sorted within
  Cockpit's UI and a hierarchy can be build (i.e. one item can become the parent of
  another)
- Show in system menu (`boolean`) - when enabled, this colelction will be show
  in the system menu which can be opend by clicking on the
  [`app.name`](/guide/basics/configuration.md#app-name-string) of your Cockpit
  installation which is placed in the upper left corner of the navbar
  
![UI for creation of a new collection](@assets/createcollection.png)

You can interact with collections using the
[API](/guide/api/resources.md#collections).

### Content-Model

Every entry (item) inside a collection has the same properties defined by so
called fields. Each field contains data described by it's
[field-type](/guide/basics/field-types.md). The field-type also provides editing
functionality for the data the field holds.

### Permissions

You can manage permissions to access and modify collection entries by clicking
on the tab called "Permissions" in the top bar. There you can allow access to
the collection from the public and enable or disable specific actions done via
the API.

![manage permissions on a collection](@assets/collectionpermissions.png)

## Regions <Badge text="deprecated" type="warning" vertical="middle"/>

## Singletons <Badge text="> 0.6.0" type="tip" vertical="middle"/>

## Froms