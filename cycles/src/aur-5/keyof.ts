export function KeyOf(): void {
  type Lock = { serial: string; battery: number; online: boolean };

  const lock: Lock = { serial: "ABC-123", battery: 80, online: true };
  const locks: Lock[] = [
    { serial: "ABC-123", battery: 80, online: true },
    { serial: "XYZ-789", battery: 15, online: false },
  ];

  function pluck<T, K extends keyof T>(list: T[], key: K): T[K][] {
    return list.map((item) => item[key]);
  }

  function updateLock<K extends keyof Lock>(
    lock: Lock,
    key: K,
    value: Lock[K],
  ): Lock {
    return { ...lock, [key]: value };
  }

  //const serials = pluck(locks, "serial"); // deve ter tipo string[]  → ['ABC-123', 'XYZ-789']
  //console.log(`serials: ${serials}`);

  // const updated = updateLock(lock, "battery", 50); // { serial: 'ABC-123', battery: 50, online: true }
  const updated = updateLock(lock, "battery", "x"); // precisa dar erro: 'x' não é number
  console.log(updated);
  // updateLock(lock, 'color', 'red');
}
