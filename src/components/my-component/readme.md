# my-component



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [main-window](../main-window)

### Graph
```mermaid
graph TD;
  my-component --> main-window
  main-window --> main-window-layout
  main-window --> gists-list
  main-window --> back-to-gists-list
  main-window --> metadata-header
  main-window --> gist-viewer
  main-window-layout --> close-window
  gists-list --> gist-list-item
  gists-list --> list-paginator
  gist-list-item --> metadata-header
  gist-list-item --> gist-description
  gist-list-item --> code-preview
  metadata-header --> relative-time
  gist-viewer --> gist-description
  gist-viewer --> single-file-view
  single-file-view --> code-preview
  style my-component fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
