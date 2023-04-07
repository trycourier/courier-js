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
