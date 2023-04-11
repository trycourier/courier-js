import { useEffect, useState } from "react";
import courierSDK from "@trycourier/courier-js";
import Link from "next/link";

courierSDK.init({
  clientKey: "<REPLACE_ME_WITH_REAL_KEY>",
  debug: true,
});

export default function Example() {
  const [prefLink] = useState<string>(
    courierSDK.generatePreferencesUrl("suhas_demo")
  );

  async function handleEvent(
    event: "identity" | "subscribe" | "unsubscribe" | "track"
  ) {
    // demonstration purposes only
    switch (event) {
      case "identity":
        console.log("identifying");
        await courierSDK.identify("suhas_demo", {
          email: "suhas+from+client@courier.com",
        });
        console.log("identified");
        break;
      case "subscribe":
        console.log("subscribing");
        await courierSDK.subscribe("suhas_demo", "my-awesome-list");
        console.log("subscribed");
        break;
      case "unsubscribe":
        console.log("unsubscribing");
        await courierSDK.unsubscribe("suhas_demo", "my-awesome-list");
        console.log("unsubscribed");
        break;
    }
  }
  return (
    <div>
      <h1>Courier-js</h1>
      <h2>
        <Link href={prefLink}>Manage your preferences</Link>
      </h2>
      <button onClick={() => handleEvent("identity")}>Identify</button>
      <button onClick={() => handleEvent("subscribe")}>Subscribe</button>
      <button onClick={() => handleEvent("unsubscribe")}>Unsubscribe</button>
    </div>
  );
}
