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
# **Share feedback with Courier**

We are building the best SDKs for handling notifications! Have an idea or feedback about our SDKs? Here are some links to contact us:

- [Courier Feedback](https://feedback.courier.com/)
- [Courier JS Issues](https://github.com/trycourier/courier-js/issues)