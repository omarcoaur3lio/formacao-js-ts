import * as repo from "./key-repository";
import * as sdk from "./lock-sdk";
import { NotFoundError, getErrorMessage } from "./errors";
import { User, VirtualKey, Paginated, Lock, ActionResult } from "./types";

const users: User[] = [
  { id: "USR-1", name: "Ana", email: "ana@condo.com", role: "admin" },
  { id: "USR-2", name: "Bruno", email: "bruno@condo.com", role: "resident" },
  { id: "USR-3", name: "Carla", email: "carla@condo.com", role: "guest" },
];

let sequence = 100;

export type CreateKeyInput = {
  lockSerial: string;
  ownerId: string;
  validUntil?: string;
  metadata?: { [key: string]: unknown };
};

export type UpdateKeyInput = {
  validUntil?: string;
  metadata?: { [key: string]: unknown };
};

export type KeyWithExpiration = VirtualKey & { isExpired: boolean };

export type SortableKeyField =
  "id" | "lockSerial" | "ownerId" | "status" | "createdAt";

export type StatusCount = { [status: string]: number };

export type LockStatus = Lock & { batteryLabel: string };

export function createKey(body: CreateKeyInput): VirtualKey {
  const key: VirtualKey = {
    id: "KEY-" + sequence++,
    lockSerial: body.lockSerial,
    ownerId: body.ownerId,
    status: "active",
    validUntil: body.validUntil,
    createdAt: new Date().toISOString(),
    metadata: body.metadata,
  };
  return repo.save(key);
}

export function getKey(id: string): KeyWithExpiration {
  const key = repo.findById(id);
  if (!key) {
    throw new NotFoundError("Key", id);
  }
  return { ...key, isExpired: isExpired(key) };
}

function isExpired(key: VirtualKey): boolean {
  if (key.validUntil === undefined) return false;
  return new Date(key.validUntil).getTime() < Date.now();
}

export function updateKey(id: string, changes: UpdateKeyInput): VirtualKey {
  const key = repo.findById(id);
  if (!key) {
    throw new NotFoundError("Key", id);
  }
  const updated = { ...key, ...changes };
  return repo.save(updated);
}

export function revokeKey(id: string, reason?: string): VirtualKey {
  const key = repo.findById(id);
  if (!key) {
    throw new NotFoundError("Key", id);
  }

  const trimmedReason = reason?.trim();
  const revokedKey: VirtualKey = {
    ...key,
    status: "revoked",
    ...(trimmedReason
      ? { metadata: { ...key.metadata, revokedReason: trimmedReason } }
      : {}),
  };

  return repo.save(revokedKey);
}

export function getStatusLabel(key: VirtualKey) {
  switch (key.status) {
    case "active":
      return "Ativa";
    case "revoked":
      return "Revogada";
    case "expired":
      return "Expirada";
  }
}

export function canManageKey(userId: string, key: VirtualKey): boolean {
  const user = users.find((u) => u.id === userId);
  if (!user) return false;
  return user.role === "admin" || key.ownerId === user.id;
}

export function sortKeys(
  keys: VirtualKey[],
  field: SortableKeyField,
): VirtualKey[] {
  return [...keys].sort((a, b) => a[field].localeCompare(b[field]));
}

export function countByStatus(keys: VirtualKey[]): StatusCount {
  return keys.reduce<StatusCount>((acc, key) => {
    acc[key.status] = (acc[key.status] ?? 0) + 1;
    return acc;
  }, {});
}

export function listKeys(
  page: number,
  pageSize: number,
): Paginated<VirtualKey> {
  const all = repo.findAll();
  const start = (page - 1) * pageSize;
  return {
    items: all.slice(start, start + pageSize),
    total: all.length,
    page,
  };
}

export async function openLock(keyId: string): Promise<ActionResult<unknown>> {
  const key = repo.findById(keyId);
  if (!key) {
    return { success: false, error: "Key not found" };
  }
  if (key.status !== "active") {
    return { success: false, error: "Key not active" };
  }
  try {
    const raw = await sdk.sendCommand(key.lockSerial, "OPEN");
    const result: unknown = JSON.parse(raw);
    return { success: true, data: result };
  } catch (e) {
    return { success: false, error: getErrorMessage(e) };
  }
}

export function getLockStatus(
  serial: string,
  cb: (result: ActionResult<LockStatus>) => void,
): void {
  sdk.connect(serial, (err, device) => {
    if (err || !device) {
      cb({ success: false, error: err?.message ?? "Device not found" });
      return;
    }
    cb({
      success: true,
      data: { ...device, batteryLabel: device.battery + "%" },
    });
  });
}
