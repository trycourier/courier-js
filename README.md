[![Courier: Your Complete Communication Stack](https://www.courier.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Fz7iqk1q8njt4%2F1PZo9WNTdmoDoYH3yulXa0%2Fb10830f7bfb09af5e644a39ac3d20c41%2FCourierJS_header_alt2.png&w=1920&q=75)](https://courier.com)

## Requirements

Sign up to [Courier](https://app.courier.com/signup) if you do not have an account with us and get your clientKey from [here](https://app.courier.com/settings/api-keys)

## Installation

```sh
# npm
npm install @trycourier/courier-js
# yarn
yarn add @trycourier/courier-js
# pnpm
pnpm add @trycourier/courier-js
```

## Usage

```ts
import courier from "@trycourier/courier-js";

courier.init({
  clientKey: "<REPLACE_WITH_YOUR_CLIENT_KEY>",
  debug: true,
});

/*
Upon initialization, you can use the SDK. All the methods are async and return a Promise `user | identify` means that you are identifying a user with a unique id in Courier and optionally passing in some user attributes like email, phone, etc. so that you can reach out to your users on right channels of their choice.
*/
courier.identify("<your_user_id>", {
  email: "suhas+from+ui@courier.com",
});
```

## Send User to Preference Center

This method generates a URL that you can use to send your users to the Courier Preference Center to let them manage their notification preferences. You can use this URL in your application to send your users to the Preference Center.

```ts
const prefCenterLink = courier.generatePreferencesUrl("<your_user_id>", {
  // optional
  brandId: "<your_brand_id>",
});
```


## What's inside?

This repository contains client-sdk for Courier API. This SDK allows you to integrate Courier API into your web applications.

### Apps and Packages

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

### npm

If you want to publish package to the public npm registry and make them publicly available, this is already setup.

To publish packages to a private npm organization scope, **remove** the following from each of the `package.json`'s

```diff
- "publishConfig": {
-  "access": "public"
- },
```

### GitHub Package Registry

See [Working with the npm registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#publishing-a-package-using-publishconfig-in-the-packagejson-file)
