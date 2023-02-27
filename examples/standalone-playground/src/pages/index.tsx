import { useEffect } from "react";
import courierSDK from "@trycourier/courier-js";

export default function Example() {
  useEffect(() => {
    courierSDK.init({
      clientKey: "<REPLACE_WITH_YOUR_CLIENT_KEY>",
      debug: true,
    });
  }, []);

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
      <button onClick={() => handleEvent("identity")}>Identify</button>
      <button onClick={() => handleEvent("subscribe")}>Subscribe</button>
      <button onClick={() => handleEvent("unsubscribe")}>Unsubscribe</button>
    </div>
  );
}
