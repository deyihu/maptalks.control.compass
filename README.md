# maptalks.control.compass

A maptalks Compass Control.

## Examples

### [DEMO](https://cxiaof.github.io/maptalks.control.compass/demo/index.html)

## Install

-   Install with npm: `npm install maptalks.control.compass`.
-   Download from [dist directory](https://github.com/cXiaof/maptalks.control.compass/tree/master/dist).
-   Use unpkg CDN: `https://unpkg.com/maptalks.control.compass/dist/maptalks.control.compass.min.js`

## Usage

As a plugin, `maptalks.control.compass` must be loaded after `maptalks.js` in browsers. You can also use `'import { CompassControl } from "maptalks.control.compass"` when developing with webpack.

```html
<script type="text/javascript" src="https://unpkg.com/maptalks/dist/maptalks.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/maptalks.control.compass/dist/maptalks.geo2img.min.js"></script>
<script>
    // new Control: CompassControl
    const control = new CompassControl({
        position: 'top-right'
    })
    // add Control
    map.addControl(control)
</script>
```

## API Reference

```javascript
```

-   options
    -   position **String** like other maptalksControl.

## Contributing

We welcome any kind of contributions including issue reportings, pull requests, documentation corrections, feature requests and any other helps.

## Develop

The only source file is `index.js`.

It is written in ES6, transpiled by [babel](https://babeljs.io/) and tested with [mocha](https://mochajs.org) and [expect.js](https://github.com/Automattic/expect.js).

### Scripts

-   Install dependencies

```shell
$ npm install
```

-   Watch source changes and generate runnable bundle repeatedly

```shell
$ gulp watch
```

-   Tests

```shell
$ npm test
```

-   Watch source changes and run tests repeatedly

```shell
$ gulp tdd
```

-   Package and generate minified bundles to dist directory

```shell
$ gulp minify
```

-   Lint

```shell
$ npm run lint
```

## More Things

-   [maptalks.autoadsorb](https://github.com/cXiaof/maptalks.autoadsorb/issues)
-   [maptalks.multisuite](https://github.com/cXiaof/maptalks.multisuite/issues)
-   [maptalks.geosplit](https://github.com/cXiaof/maptalks.geosplit/issues)
-   [maptalks.polygonbool](https://github.com/cXiaof/maptalks.polygonbool/issues)
-   [maptalks.geo2img](https://github.com/cXiaof/maptalks.geo2img/issues)
