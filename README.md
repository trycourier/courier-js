[![Courier: Your Complete Communication Stack](https://www.courier.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Fz7iqk1q8njt4%2F1PZo9WNTdmoDoYH3yulXa0%2Fb10830f7bfb09af5e644a39ac3d20c41%2FCourierJS_header_alt2.png&w=1920&q=75)](https://courier.com)

# Overview
SDK used by client applications to interface with the Courier API.
&emsp;
<table>
    <thead>
        <tr>
            <th width="880px" align="left">Requirements</th>
            <th width="120px" align="center"></th>
        </tr>
    </thead>
    <tbody>
        <tr width="600px">
            <td align="left">Courier Account</td>
            <td align="center">
                <a href="https://app.courier.com/signup">
                    <code>Sign Up</code>
                </a>
            </td>
        </tr>
        <tr width="600px">
            <td align="left">Client API Key</td>
            <td align="center">
                <a href="https://app.courier.com/settings/api-keys">
                    <code>Get key</code>
                </a>
            </td>
        </tr>
    </tbody>
</table>
&emsp;

# Supported Interfaces
<table>
    <thead>
        <tr>
            <th width="250px" align="left">Feature</th>
            <th width="725px" align="left">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr width="600px">
            <td align="left">
              <code>Identify</code>
            </td>
            <td align="left">
                Event that triggers a user <a href="https://www.courier.com/docs/reference/profiles/create/"><code>Create</code></a> or <a href="https://www.courier.com/docs/reference/profiles/patch/"><code>Update</code></a> within Courier Profiles.
            </td>
        </tr>
        <tr width="600px">
            <td align="left">
              <code>Track</code>
            </td>
            <td align="left">
                Event ingested by Courier can be used to<a href="https://www.courier.com/docs/automations/designer/"> trigger an automation</a> or supply inline payloads within an <a href="https://app.courier.com/automations">existing</a> automation workflow.
            </td>
        </tr>
        <tr width="600px">
            <td align="left">
                <code>GeneratePreferencesUrl</code>
            </td>
            <td align="left">
                Generates URL that can be used to link users to <a href="https://www.courier.com/docs/courier-preferences/preference-center/introduction/">Preferences Center</a> to manage their notification preferences.
            </td>
        </tr>
    </tbody>
</table>

# Installation

```sh
# npm
npm install @trycourier/courier-js
# yarn
yarn add @trycourier/courier-js
# pnpm
pnpm add @trycourier/courier-js
```
&emsp;
# Usage

## Initializing Client
```ts
import courier from "@trycourier/courier-js";

courier.init({
  clientKey: "<REPLACE_WITH_YOUR_CLIENT_KEY>",
  debug: true, // debug enables client side logs for error catching
});
```
## Identify
```ts
await courierSDK.identify("purbleUserId", {
      email: "customer@purbleplace.com",
      favoriteColor: "purple",
});
```
## Track
### Basic
```ts
await courierSDK.track("user-signup");
```
### With data payload
```ts
await courierSDK.track("bake-cake", { 
    cakeFlavor: "carrot", 
    frosting: "cream cheese"
});
```
## GeneratePreferencesUrl
```ts
const prefCenterLink = courier.generatePreferencesUrl("<user-id>", {
  // optional
  brandId: "<brand-id>",
});
```
# What's inside?

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