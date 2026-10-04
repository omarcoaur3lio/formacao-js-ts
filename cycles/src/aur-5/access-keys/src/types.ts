export interface VirtualKey {
  id: string;
  lockSerial: string;
  ownerId: string;
  status: string;
  validUntil?: string;
  createdAt: string;
  metadata?: { [key: string]: unknown };
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
  role: string;
}

export type Paginated<T> = {
  items: T[];
  total: number;
  page: number;
};

export type ActionResult<T> = {
  success: boolean;
  data?: T;
  error?: string;
};
