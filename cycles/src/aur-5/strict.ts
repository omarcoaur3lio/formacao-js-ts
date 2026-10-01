export function testStrict() {
  type Lock = { serial: string; battery: number };

  const locks: Lock[] = [
    { serial: "ABC-123", battery: 80 },
    { serial: "XYZ-789", battery: 0 },
  ];

  function getBatteryLabel(serial: string): string {
    const lock = locks.find((l) => l.serial === serial);
    if (lock === undefined) return "Nenhuma fechadura com o serial informado";
    return lock.battery + "%";
  }

  function needsBatteryChange(lock: Lock | undefined): boolean {
    if (lock && lock.battery !== undefined) {
      return lock.battery < 10;
    }
    return false;
  }

  const needed = needsBatteryChange({ serial: "XYZ-789", battery: 0 }); // retorna false
  //console.log(needed);

  function getErrorMessage(e: unknown): string {
    if (e instanceof Error) return e.message;
    if (typeof e === "string") return e;
    if (
      typeof e === "object" &&
      e !== null &&
      "message" in e &&
      typeof e.message === "string"
    )
      return e.message;
    return "Erro desconhecido";
  }

  getErrorMessage(new Error("falhou")); // 'falhou'
  getErrorMessage("timeout"); // 'timeout'
  getErrorMessage({ code: "OFFLINE", message: "sem rede" }); // 'sem rede'
  getErrorMessage(42); // 'Erro desconhecido'

  function getBatteryA(serial: string): number {
    const lock = locks.find((l) => l.serial === serial);
    return lock!.battery;
  }

  // Versão B: guard clause
  function getBatteryB(serial: string): number {
    const lock = locks.find((l) => l.serial === serial);
    if (lock === undefined) {
      throw new Error(`Lock not found: ${serial}`);
    }
    return lock.battery;
  }

  console.log(getBatteryA("NAO-EXISTE"));
}
