import { Lock } from "./types";

const devices: { [serial: string]: Lock | undefined } = {
  "LCK-001": {
    serial: "LCK-001",
    model: "Z-200",
    battery: 82,
    online: true,
    lastSeen: "2026-09-30T10:00:00Z",
  },
  "LCK-002": {
    serial: "LCK-002",
    model: "Z-200",
    battery: 9,
    online: true,
    lastSeen: "2026-09-30T09:12:00Z",
  },
  "LCK-003": { serial: "LCK-003", model: "Z-100", battery: 54, online: false },
};

export function connect(
  serial: string,
  callback: (err: Error | null, device: Lock | null) => void,
): void {
  setTimeout(() => {
    const device = devices[serial];
    if (!device) {
      callback(new Error("Device not found: " + serial), null);
      return;
    }
    callback(null, device);
  }, 50);
}

export function sendCommand(
  serial: string,
  command: string,
  payload?: unknown,
): Promise<string> {
  return new Promise((resolve, reject) => {
    const device = devices[serial];
    if (!device || !device.online) {
      reject({ code: "OFFLINE", message: "Device offline: " + serial });
      return;
    }
    resolve(
      JSON.stringify({
        ok: true,
        command,
        payload,
        at: new Date().toISOString(),
      }),
    );
  });
}
