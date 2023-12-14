# gists-list



<!-- Auto Generated Below -->


## Overview

A component shows list of given gists and paginator

## Properties

| Property      | Attribute      | Description | Type          | Default     |
| ------------- | -------------- | ----------- | ------------- | ----------- |
| `currentPage` | `current-page` |             | `number`      | `undefined` |
| `gistsList`   | --             |             | `IGistItem[]` | `undefined` |
| `lastPage`    | `last-page`    |             | `boolean`     | `undefined` |


## Dependencies

### Used by

 - [main-window](../main-window)

### Depends on

- [gist-list-item](../gist-list-item)
- [list-paginator](../list-paginator)

### Graph
```mermaid
graph TD;
  gists-list --> gist-list-item
  gists-list --> list-paginator
  gist-list-item --> metadata-header
  gist-list-item --> gist-description
  gist-list-item --> code-preview
  main-window --> gists-list
  style gists-list fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
