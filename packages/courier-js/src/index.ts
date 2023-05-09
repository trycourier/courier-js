import {
  Courier,
  CourierOptions,
  PreferenceLinkOptions,
} from "./helpers/client";

const client = {
  __instance: null as Courier | null,
  init(options: CourierOptions) {
    this.__instance = new Courier(options);
  },
  get instance() {
    if (!this.__instance) {
      throw new Error("Courier instance not initialized");
    }
    return this.__instance;
  },
  async identify(userId: string, payload: Record<string, unknown>) {
    if (!userId) {
      throw new Error("userId is required");
    }
    await this.instance.post(`/identify/${userId}`, {
      profile: {
        ...payload,
      },
    });
  },
  // apply common decorator to check if __instance is initialized
  async subscribe(userId: string, listId: string) {
    if (!userId || !listId) {
      throw new Error("userId is required");
    }
    await this.instance.put(`/lists/${listId}/subscribe/${userId}`);
  },

  async track(event: string, properties?: Record<string, unknown>) {
    if(!event) {
      throw new Error("event is required")
    }
    let indempotentKey = self.crypto.randomUUID();
    await this.instance.post(`/inbound/courier`, {
      messageId: indempotentKey,
      type:"track",
      event: event, 
      properties: {...properties}
    }, false);
  },
  async unsubscribe(userId: string, listId: string) {
    if (!userId || !listId) {
      throw new Error("userId is required");
    }
    this.instance.delete(`/lists/${listId}/unsubscribe/${userId}`);
  },

  generatePreferencesUrl(
    userId: string,
    options?: PreferenceLinkOptions
  ): string {
    return this.instance.generatePreferencesUrl(userId, options);
  },
};

export default client;
