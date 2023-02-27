import { Courier, CourierOptions } from "./helpers/client";
import { getJSONPatchPayload } from "./helpers/get-json-patch-payload";

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
    await this.instance.post(`identify/${userId}`, payload);
  },
  // apply common decorator to check if __instance is initialized
  async subscribe(userId: string, listId: string) {
    if (!userId || !listId) {
      throw new Error("userId is required");
    }
    await this.instance.put(`lists/${listId}/subscribe/${userId}`);
  },
  async unsubscribe(userId: string, listId: string) {
    if (!userId || !listId) {
      throw new Error("userId is required");
    }
    this.instance.delete(`lists/${listId}/unsubscribe/${userId}`);
  },
};

export default client;
