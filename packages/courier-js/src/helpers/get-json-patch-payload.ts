type PatchPayload = {
  op: "add" | "remove" | "replace" | "move" | "copy" | "test";
  path: string;
  value: string | number | boolean | null | undefined;
};

export function getJSONPatchPayload(
  payload: Record<string, any>
): PatchPayload[] {
  if (!payload) return [];

  return Object.keys(payload).reduce<PatchPayload[]>((acc, key) => {
    if (!payload[key]) {
      acc.push({
        op: "remove",
        path: `/${key}`,
        value: payload[key],
      });
    }

    if (payload[key]) {
      acc.push({
        op: "add",
        path: `/${key}`,
        value: payload[key],
      });
    }

    // if the value is an object, recurse
    if (typeof payload[key] === "object") {
      return [...acc, ...getJSONPatchPayload(payload[key])];
    }

    return acc;
  }, []);
}
