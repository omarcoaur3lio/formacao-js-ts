// Demo: executa os fluxos principais do módulo.
// Rode com: npm run demo
import * as service from './key-service';
import * as repo from './key-repository';

async function main() {
  console.log('getKey KEY-002 →', service.getKey('KEY-002'));
  console.log('label KEY-003 →', service.getStatusLabel(repo.findById('KEY-003')));
  console.log('USR-2 gerencia KEY-002? →', service.canManageKey('USR-2', repo.findById('KEY-002')));

  const created = service.createKey({ lockSerial: 'LCK-002', ownerId: 'USR-3', validUntil: '2027-01-31T23:59:59Z' });
  console.log('createKey →', created);

  console.log('updateKey →', service.updateKey(created.id, { validUntil: '2027-02-28T23:59:59Z' }));
  console.log('revokeKey →', service.revokeKey(created.id, '  Saiu do condomínio  '));

  console.log('sortKeys(createdAt) →', service.sortKeys(repo.findAll(), 'createdAt').map((k) => k.id));
  console.log('countByStatus →', service.countByStatus(repo.findAll()));
  console.log('listKeys(1, 2) →', service.listKeys(1, 2));

  console.log('openLock KEY-001 →', await service.openLock('KEY-001'));
  console.log('openLock KEY-003 →', await service.openLock('KEY-003'));

  service.getLockStatus('LCK-001', (res) => console.log('getLockStatus LCK-001 →', res));
  service.getLockStatus('LCK-999', (res) => console.log('getLockStatus LCK-999 →', res));
}

main();
