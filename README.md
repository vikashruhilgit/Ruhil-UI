# \<ruhil-ui>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

working [DEMO](https://ui-lib-abd9d.firebaseapp.com/)

## Installation

```bash
yarn i ruhil-ui
```

## Usage

```html
<script type="module">
  import 'ruhil-ui/ruhil-ui.js';
</script>

<ruhil-ui></ruhil-ui>
```

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
yarn run lint
```

To automatically fix linting and formatting errors, run

```bash
yarn run format
```

## Testing with Web Test Runner

To execute a single test run:

```bash
yarn run test
```

To run the tests in interactive watch mode run:

```bash
yarn run test:watch
```

## Demoing with Storybook

To run a local instance of Storybook for your component, run

```bash
yarn run sb
```

To build a production version of Storybook, run

```bash
yarn run sb:build
```

## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
yarn start
```

To run a local development server that serves the basic demo located in `demo/index.html`
