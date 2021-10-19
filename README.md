# Linaria Webpack Bug

For some reason, constants used in Linaria `style` tags that are imported from
another module, fail to resolve when using the webpack loader with a
`finishWithoutResolve` error.

We have a component library, and want to be able to describe some common
constants to use in our Linaria styles, such as media breakpoint sizes. This has
been working well up to this point when using the Linaria CLI to extract styles.
We want to move our component library to be Webpack bundled for code splitting
and so it is sharable across apps, however we are hitting this import issue when
using the Linaria Webpack Loader.

To reproduce, clone this repo and install node modules:

```bash
git clone git@github.com:kinetifex/linaria-webpack-bug.git
npm ci
```

## Works with CLI

If using the Linaria CLI to extract styles, this works fine.

```bash
npm run cli
```

The styles will be extracted to a `dist` directory.

## Breaks with Webpack

This same source breaks with the Linaria Webpack loader.

```bash
npm run webpack
```

The files should be output to a `bundle` directory, however Webpack fails with
the following error:

```
Can't resolve './breakpoints' in '/path/to/linaria-webpack-bug/src'
```

If you were to modify the `index.js` to not import from a common file, and
instead declare the const here, it runs fine. _See deviceTablet comment_.
