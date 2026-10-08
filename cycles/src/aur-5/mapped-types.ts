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
}
