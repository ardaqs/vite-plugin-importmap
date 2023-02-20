# @ardaqs/vite-plugin-importmap

A Vite plugin for replacing external importmap file name in index.html when bundling packages.

Replaces:

```html
<script type="importmap" src="/importmap.dev.json"></script>
```

with:

```html
<script type="importmap" src="/importmap.json"></script>
```

## Install

Using npm:

```console
npm install --save-dev @ardaqs/vite-plugin-importmap
# or
yarn add -D @ardaqs/vite-plugin-importmap
```

## Usage

Create a `vite.config.js` configuration file and import the plugin:

```js
import { defineConfig } from 'vite';
import importmap from '@ardaqs/vite-plugin-importmap';

export default defineConfig({
  plugins: [
    importmap()
  ],
  build: {
    rollupOptions: {
      external: [],
    }
  }
});
```

## Meta

[LICENSE (MIT)](/LICENSE)