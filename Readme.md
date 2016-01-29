
# apply-styles

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Apply a style object to a DOM node, optionally diffing against a previous set of styles.

## Installation

    $ npm install @f/apply-styles

## Usage

```js
var applyStyles = require('@f/apply-styles')

function setAttribute (node, name, value, prevValue) {
  if (name === 'style') {
    applyStyles(node, value, prevValue)
  }

  // ...set other kinds of attributes...
}
```

## API

### applyStyles(node, styles, prevStyles)

- `node` - The DOM node to apply the styles to
- `styles` - The styles you want to set
- `prevStyles` - Optional, a previous style object to diff against (i.e. remove props that are not set in the current `style`)

**Returns:** *void*

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/apply-styles.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/apply-styles
[git-image]: https://img.shields.io/github/tag/micro-js/apply-styles.svg
[git-url]: https://github.com/micro-js/apply-styles
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/apply-styles.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/apply-styles
