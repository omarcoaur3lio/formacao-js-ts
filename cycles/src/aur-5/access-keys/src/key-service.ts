// Regras de negócio das chaves virtuais.
import * as repo from './key-repository';
import * as sdk from './lock-sdk';
import { User, VirtualKey } from './types';

const users: User[] = [
  { id: 'USR-1', name: 'Ana', email: 'ana@condo.com', role: 'admin' },
  { id: 'USR-2', name: 'Bruno', email: 'bruno@condo.com', role: 'resident' },
  { id: 'USR-3', name: 'Carla', email: 'carla@condo.com', role: 'guest' },
];

let sequence = 100;

// body chega direto do req.body da rota POST /keys
export function createKey(body: any) {
  const key: VirtualKey = {
    id: 'KEY-' + sequence++,
    lockSerial: body.lockSerial,
    ownerId: body.ownerId,
    status: 'active',
    validUntil: body.validUntil,
    createdAt: new Date().toISOString(),
    metadata: body.metadata,
  };
  return repo.save(key);
}

export function getKey(id: string) {
  const key = repo.findById(id);
  return { ...key, isExpired: isExpired(key) };
}

function isExpired(key) {
  if (!key.validUntil) return false;
  return new Date(key.validUntil).getTime() < Date.now();
}

// changes chega do req.body da rota PATCH /keys/:id
export function updateKey(id: string, changes: any) {
  const key = repo.findById(id);
  const updated = { ...key, ...changes };
  return repo.save(updated);
}

export function revokeKey(id: string, reason?: string) {
  const key = repo.findById(id);
  key.status = 'revoked';
  key.metadata = { ...key.metadata, revokedReason: reason.trim() };
  return repo.save(key);
}

export function getStatusLabel(key: VirtualKey) {
  switch (key.status) {
    case 'active':
      return 'Ativa';
    case 'revoked':
      return 'Revogada';
    case 'expired':
      return 'Expirada';
  }
}

export function canManageKey(userId: string, key: VirtualKey) {
  const user = users.find((u) => u.id === userId);
  return user.role === 'admin' || key.ownerId === user.id;
}

// field chega da query string: GET /keys?sortBy=createdAt
export function sortKeys(keys: VirtualKey[], field) {
  return [...keys].sort((a, b) => (a[field] > b[field] ? 1 : -1));
}

export function countByStatus(keys: VirtualKey[]) {
  return keys.reduce((acc, key) => {
    acc[key.status] = (acc[key.status] || 0) + 1;
    return acc;
  }, {});
}

export function listKeys(page, pageSize) {
  const all = repo.findAll();
  const start = (page - 1) * pageSize;
  return {
    items: all.slice(start, start + pageSize),
    total: all.length,
    page,
  };
}

export async function openLock(keyId: string) {
  const key = repo.findById(keyId);
  if (key.status !== 'active') {
    return { success: false, error: 'Key not active' };
  }
  try {
    const raw: any = await sdk.sendCommand(key.lockSerial, 'OPEN');
    const result = JSON.parse(raw);
    return { success: true, data: result };
  } catch (e) {
    return { success: false, error: e.message };
  }
}

export function getLockStatus(serial: string, cb) {
  sdk.connect(serial, (err, device) => {
    if (err) {
      cb({ success: false, error: err.message });
      return;
    }
    cb({ success: true, data: { ...device, batteryLabel: device.battery + '%' } });
  });
}
