export function decode(clientKey: string): string {
  const binaryString = atob(clientKey);
  const bytes = new Uint8Array(binaryString.length);

  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  return String.fromCharCode(...bytes);
}

export function encode(key: string): string {
  const bytes = new Uint8Array(key.length);

  for (let i = 0; i < key.length; i++) {
    bytes[i] = key.charCodeAt(i);
  }

  return btoa(String.fromCharCode(...bytes));
}
