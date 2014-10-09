# implements

`implements` is a utility module for checking an `Object` meets a given interface.

[![Build Status](https://travis-ci.org/tur-nr/node-implements.svg?branch=master)](https://travis-ci.org/tur-nr/node-implements)

### Example

```js
var impl = require('implements');
var instance = [];

impl(instance, ['some', 'every']); // true
```

## Installation

### Node

To install `implements` in a Node application use npm.

```
$ npm install implements
```

### Browser

No tests available for the browser but you may try using it via [webpack](https://github.com/webpack/webpack).

```
$ webpack index.js implements.js
```

## Test

To run tests use npm.

```
$ npm install
$ npm test
```

## Documentation

### Basic Usage

Interfaces are just a list of method names that `implements` will check for. Pass an `Object` and interface to `implements` like so.

```js
var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
var interf = ['on', 'off', 'emit'];

impl(emitter, interf); // true
```

If no interface is supplied then `implements` will supply return `true`.

```js
impl(emitter); // true
impl(emitter, null); // true
```

### Prototypes

Interfaces can also be a constructor `Function`, `implements` will use the function's Prototype as the interface.

```js
impl(emitter, EventEmitter); // true
```

## API

#### implements(*&lt;instance&gt;*, *[interface_]*)

## License

[MIT](LICENSE)

Copyright (c) 2014 [Christopher Turner](https://github.com/tur-nr)
