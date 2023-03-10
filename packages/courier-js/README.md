[![Courier: Your Complete Communication Stack](https://marketing-assets-public.s3.us-west-1.amazonaws.com/github_nodejs.png)](https://courier.com)

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
