[![Courier: Your Complete Communication Stack](https://www.courier.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Fz7iqk1q8njt4%2F1PZo9WNTdmoDoYH3yulXa0%2Fb10830f7bfb09af5e644a39ac3d20c41%2FCourierJS_header_alt2.png&w=1920&q=75)](https://courier.com)

# Overview
SDK used by client applications to interface with the Courier API. This is the repo where we host both the SDK and dependencies needed for the developer environment to contribute to it.

# What does Courier-JS support?
## See docs <a href="https://github.com/trycourier/courier-js/blob/main/README.md">here</a>.

&emsp;
# Want to run this locally?

This repository contains client-sdk for Courier API. This SDK allows you to integrate Courier API into your web applications.

## Overview

### Repo Packages

- `examples/standalone-playground`: A placeholder web application powered by [Next.js](https://nextjs.org/) that uses the `@trycourier/courier-js` package for demonstration purposes
- `@trycourier/courier-js`: core client SDK for Courier API
- `@trycourier/tsconfig`: shared `tsconfig.json`s used throughout the repository
- `eslint-config-courier`: ESLint preset

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Getting Started

```sh
git clone https://github.com/trycourier/courier-js.git
pnpm install
```

### Useful commands

- `yarn build` - Build all packages and the docs site
- `yarn dev` - Develop all packages and the docs site
- `yarn lint` - Lint all packages
- `yarn changeset` - Generate a changeset
- `yarn clean` - Clean up all `node_modules` and `dist` folders (runs each package's clean script)

## Versioning and Publishing packages

Package publishing has been configured using [Changesets](https://github.com/changesets/changesets). Please review their [documentation](https://github.com/changesets/changesets#documentation) to familiarize yourself with the workflow.

This example comes with automated npm releases setup in a [GitHub Action](https://github.com/changesets/action). To get this working, you will need to create an `NPM_TOKEN` and `GITHUB_TOKEN` in your repository settings. You should also install the [Changesets bot](https://github.com/apps/changeset-bot) on your GitHub repository as well.

For more information about this automation, refer to the official [changesets documentation](https://github.com/changesets/changesets/blob/main/docs/automating-changesets.md)

### Publish

If you want to publish package to the public npm registry and make them publicly available, this is already setup.

To publish packages to a private npm organization scope, **remove** the following from each of the `package.json`'s

```diff
- "publishConfig": {
-  "access": "public"
- },
```

### GitHub Package Registry

See [Working with the npm registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#publishing-a-package-using-publishconfig-in-the-packagejson-file)

# **Share feedback with Courier**

We are building the best SDKs for handling notifications! Have an idea or feedback about our SDKs? Here are some links to contact us:

- [Courier Feedback](https://feedback.courier.com/)
- [Courier JS Issues](https://github.com/trycourier/courier-js/issues)