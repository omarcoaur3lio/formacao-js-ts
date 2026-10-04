// Tipos de domínio do módulo access-keys.
// ⚠️ Código legado: escrito sem strict mode. Você vai migrá-lo na S4.

export interface VirtualKey {
  id: string;
  lockSerial: string;
  ownerId: string;
  status: string; // valores usados no sistema: 'active' | 'revoked' | 'expired'
  validUntil?: string; // ISO 8601. Ausente = chave sem expiração
  createdAt: string;
  metadata?: any;
}

export interface Lock {
  serial: string;
  model: string;
  battery: number;
  online: boolean;
  lastSeen?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: string; // valores usados no sistema: 'admin' | 'resident' | 'guest'
}
