import { VirtualKey } from "./types";

const keys: VirtualKey[] = [
  {
    id: "KEY-001",
    lockSerial: "LCK-001",
    ownerId: "USR-1",
    status: "active",
    createdAt: "2026-09-01T12:00:00Z",
  },
  {
    id: "KEY-002",
    lockSerial: "LCK-002",
    ownerId: "USR-2",
    status: "active",
    validUntil: "2026-12-31T23:59:59Z",
    createdAt: "2026-09-02T12:00:00Z",
  },
  {
    id: "KEY-003",
    lockSerial: "LCK-003",
    ownerId: "USR-2",
    status: "revoked",
    createdAt: "2026-08-15T12:00:00Z",
    metadata: { revokedReason: "Mudança" },
  },
  {
    id: "KEY-004",
    lockSerial: "LCK-001",
    ownerId: "USR-3",
    status: "expired",
    validUntil: "2026-09-10T00:00:00Z",
    createdAt: "2026-09-05T12:00:00Z",
  },
];

export function findById(id: string): VirtualKey | undefined {
  return keys.find((k) => k.id === id);
}

export function findByOwner(ownerId: string): VirtualKey[] {
  return keys.filter((k) => k.ownerId === ownerId);
}

export function findAll(): VirtualKey[] {
  return keys;
}

export function save(key: VirtualKey): VirtualKey {
  const index = keys.findIndex((k) => k.id === key.id);
  if (index >= 0) {
    keys[index] = key;
  } else {
    keys.push(key);
  }
  return key;
}
