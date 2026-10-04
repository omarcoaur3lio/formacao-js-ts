import * as service from "./key-service";
import * as repo from "./key-repository";
import { NotFoundError } from "./errors";

async function main() {
  console.log("getKey KEY-002 →", service.getKey("KEY-002"));
  console.log(
    "label KEY-003 →",
    service.getStatusLabel(service.getKey("KEY-003")),
  );
  console.log(
    "USR-2 gerencia KEY-002? →",
    service.canManageKey("USR-2", service.getKey("KEY-002")),
  );

  const created = service.createKey({
    lockSerial: "LCK-002",
    ownerId: "USR-3",
    validUntil: "2027-01-31T23:59:59Z",
  });
  console.log("createKey →", created);

  console.log(
    "updateKey →",
    service.updateKey(created.id, { validUntil: "2027-02-28T23:59:59Z" }),
  );
  console.log(
    "revokeKey →",
    service.revokeKey(created.id, "  Saiu do condomínio  "),
  );

  console.log(
    "sortKeys(createdAt) →",
    service.sortKeys(repo.findAll(), "createdAt").map((k) => k.id),
  );
  console.log("countByStatus →", service.countByStatus(repo.findAll()));
  console.log("listKeys(1, 2) →", service.listKeys(1, 2));

  console.log("openLock KEY-001 →", await service.openLock("KEY-001"));
  console.log("openLock KEY-003 →", await service.openLock("KEY-003"));

  service.getLockStatus("LCK-001", (res) =>
    console.log("getLockStatus LCK-001 →", res),
  );
  service.getLockStatus("LCK-999", (res) =>
    console.log("getLockStatus LCK-999 →", res),
  );

  console.log("\n--- Casos de erro ---");

  const totalBefore = repo.findAll().length;
  try {
    service.updateKey("KEY-999", { validUntil: "2027-01-01" });
    console.log("#1 não lançou erro");
  } catch (e) {
    if (e instanceof NotFoundError) {
      console.log("#1 ", e.message);
    } else {
      throw e;
    }
  }
  const totalAfter = repo.findAll().length;
  console.log(
    "   total de chaves antes:",
    totalBefore,
    "| depois:",
    totalAfter,
  );

  // Bug #2: revokeKey com chave inexistente
  try {
    service.revokeKey("KEY-999");
    console.log("#2 não lançou erro");
  } catch (e) {
    if (e instanceof NotFoundError) {
      console.log("#2 ", e.message);
    } else {
      throw e;
    }
  }

  // Bug #3: revokeKey sem motivo
  const revoked = service.revokeKey("KEY-002");
  console.log("#3 status:", revoked.status, "| metadata:", revoked.metadata);

  // Bug #4: canManageKey com usuário inexistente
  console.log(
    "#4 USR-999 pode gerenciar KEY-001?",
    service.canManageKey("USR-999", service.getKey("KEY-001")),
  );

  // Bug #5: openLock com chave inexistente
  console.log("#5 ✅ openLock KEY-999 →", await service.openLock("KEY-999"));
}

main();
