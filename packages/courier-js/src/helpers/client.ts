import { version } from "../../package.json";
import { encode, decode } from "./decode";

export type CourierOptions = {
  authorization?: string;
  baseUrl?: string;
  clientKey?: string;
  debug?: boolean;
  userId?: string;
  userSignature?: string;
};

export type PreferenceLinkOptions = {
  brandId?: string;
  tenantId?: string;
};

async function tryCatch(
  fn: () => Promise<Response>,
  debug = true
): Promise<void> {
  const response = await fn();
  if (!response.ok && debug) {
    console.error(
      `Error invoking ${response.url}: ${
        response.status ?? 404
      } because ${JSON.stringify((await response.json())?.message)}`
    );
  }
}

export class Courier {
  private authorization?: string;
  private baseUrl: string;
  private clientKey: string;
  private debug?: boolean;
  private userId?: string;
  private userSignature?: string;

  constructor({
    authorization,
    baseUrl,
    clientKey,
    debug = false,
    userId,
    userSignature,
  }: CourierOptions) {
    if (!clientKey) {
      throw new Error("Courier client key is required");
    }
    this.authorization = authorization;
    this.baseUrl = `${baseUrl ?? "https://api.courier.com"}`;
    this.clientKey = clientKey;
    this.debug = debug;
    this.userId = userId;
    this.userSignature = userSignature;
  }

  private getHeaders(): Headers {
    return new Headers({
      "Content-Type": "application/json",
      "x-courier-client-version": `courier-js@${version}`,
      "Access-Control-Allow-Origin": "*",
      // only add headers if they exist
      ...(this.authorization && { Authorization: this.authorization }),
      ...(this.userId && { "x-courier-user-id": this.userId }),
      ...(this.userSignature && {
        "x-courier-user-signature": this.userSignature,
      }),
      ...(this.clientKey && { "x-courier-client-key": this.clientKey }),
    });
  }

  async post<T>(path: string, body: T, useClientPath = true): Promise<void> {
    const postFn = () => {
      return fetch(this.getPathURL(path, useClientPath), {
        body: JSON.stringify(body),
        headers: this.getHeaders(),
        method: "POST",
      });
    };
    await tryCatch(postFn, this.debug);
  }

  async put<T>(path: string, body?: T, useClientPath = true): Promise<void> {
    const putFn = () => {
      return fetch(this.getPathURL(path, useClientPath), {
        ...(body ? { body: JSON.stringify(body) } : {}),
        headers: this.getHeaders(),
        method: "PUT",
      });
    };
    await tryCatch(putFn, this.debug);
  }

  async delete(path: string, useClientPath = true): Promise<void> {
    const deleteFn = () => {
      return fetch(this.getPathURL(path, useClientPath), {
        headers: this.getHeaders(),
        method: "DELETE",
      });
    };
    await tryCatch(deleteFn, this.debug);
  }

  generatePreferencesUrl(
    userId: string,
    options?: PreferenceLinkOptions
  ): string {
    if (!userId) {
      throw new Error("User ID is required to generate preferences URL");
    }
    const id = decode(this.clientKey);

    return `https://view.notificationcenter.app/p/${encode(
      `${id}#${options?.brandId ?? ""}#${userId}${options?.tenantId?`#${options.tenantId}`:""}#${false}`
    )}`;
  }

  private getPathURL(path: string, useClientPath: boolean) {
    let pathUrl = this.baseUrl;
    if(useClientPath) {
      pathUrl = pathUrl.concat("/client");
    }
    return pathUrl.concat(path);
  }
}