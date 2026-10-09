export function MappedTypes() {
  type Lock = { serial: string; battery: number; online: boolean };

  type MyPartial<T> = { [K in keyof T]?: T[K] };

  const draft: MyPartial<Lock> = { battery: 50 }; // deve compilar
  const empty: MyPartial<Lock> = {}; // deve compilar
  const wrong: MyPartial<Lock> = { battery: "50" }; // deve dar erro

  type MyReadonly<T> = { readonly [K in keyof T]: T[K] };

  const frozen: MyReadonly<Lock> = {
    serial: "ABC-123",
    battery: 80,
    online: true,
  };
  console.log(frozen.battery); // ler pode
  frozen.battery = 10; // deve dar erro

  type LockForm = { serial: string; battery: number; online: boolean };

  type FormErrors<T> = { [K in keyof T]?: string };

  const errors: FormErrors<LockForm> = {
    serial: "Serial obrigatório",
    battery: "Bateria deve estar entre 0 e 100",
  }; // deve compilar (online sem erro)

  const bad: FormErrors<LockForm> = { battery: 42 }; // deve dar erro: a mensagem é string
  const typo: FormErrors<LockForm> = { batery: "x" }; // deve dar erro: campo não existe

  type MyRecord<K extends string | number | symbol, V> = { [P in K]: V };
  type Level = "low" | "medium" | "high";

  const thresholds: MyRecord<Level, number> = { low: 10, medium: 40, high: 80 }; // Ok
  const partial: MyRecord<Level, number> = { low: 10 }; // falha, faltam chaves
  const anyKey: MyRecord<string, number> = { foo: 1, bar: 2 }; // ok

  type MyPick<T, K extends keyof T> = { [P in K]: T[P] };

  type User = { id: string; name: string; email: string; role: string };

  const publicUser: MyPick<User, "id" | "name"> = { id: "USR-1", name: "Ana" }; // ok
  const leak: MyPick<User, "id" | "name"> = {
    id: "USR-1",
    name: "Ana",
    email: "a@b.com",
  }; // falha, email não faz parte
  type Bad = MyPick<User, "password">; // falha, password não existe em User

  interface VirtualKey {
    id: string;
    status: string;
    validUntil?: string;
    revokedAt?: string;
    revokedReason?: string;
  }

  const k1: VirtualKey = { id: "KEY-1", status: "revoked" }; // compila revogada, mas QUANDO? Falta revokedAt
  const k2: VirtualKey = { id: "KEY-2", status: "expired" }; // compila expirada, mas expirou em que data? Falta validUntil
  const k3: VirtualKey = {
    id: "KEY-3",
    status: "active",
    revokedAt: "2026-10-01",
  }; // compila ativa com data de revogação?

  type AccessKey =
    | { status: "active"; id: string; validUntil?: string }
    | {
        status: "revoked";
        id: string;
        revokedAt: string;
        revokedReason?: string;
      }
    | { status: "expired"; id: string; validUntil: string };

  const a1: AccessKey = { id: "KEY-1", status: "active" }; // Ok
  const a2: AccessKey = {
    id: "KEY-2",
    status: "active",
    validUntil: "2026-12-31",
  }; // Ok
  const r1: AccessKey = {
    id: "KEY-3",
    status: "revoked",
    revokedAt: "2026-10-01",
  }; // Ok
  const r2: AccessKey = {
    id: "KEY-4",
    status: "revoked",
    revokedAt: "2026-10-01",
    revokedReason: "Mudança",
  }; // Ok
  const e1: AccessKey = {
    id: "KEY-5",
    status: "expired",
    validUntil: "2026-09-10",
  }; // Ok

  const bad1: AccessKey = { id: "KEY-6", status: "revoked" }; // falta revokedAt
  const bad2: AccessKey = { id: "KEY-7", status: "expired" }; // falta validUntil
  const bad3: AccessKey = {
    id: "KEY-8",
    status: "active",
    revokedAt: "2026-10-01",
  }; // ativa não tem revokedAt

  function assertNever(value: never): never {
    throw new Error(`Caso não tratado: ${JSON.stringify(value)}`);
  }

  function describeKey(key: AccessKey): string {
    switch (key.status) {
      case "active":
        return key.validUntil ? `Ativa até ${key.validUntil}` : "Ativa";
      case "revoked":
        return key.revokedReason
          ? `Revogada em ${key.revokedAt} (${key.revokedReason})`
          : `Revogada em ${key.revokedAt}`;
      case "expired":
        return `Expirou em ${key.validUntil}`;
      default:
        return assertNever(key);
    }
  }
}
