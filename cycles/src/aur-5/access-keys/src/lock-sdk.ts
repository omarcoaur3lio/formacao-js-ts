// Simula o SDK do fabricante das fechaduras.
// Regra da S4: você PODE tipar este arquivo, mas NÃO pode mudar o comportamento
// (callback no connect, Promise com string JSON no sendCommand, erro como objeto).

const devices: any = {
  'LCK-001': { serial: 'LCK-001', model: 'Z-200', battery: 82, online: true, lastSeen: '2026-09-30T10:00:00Z' },
  'LCK-002': { serial: 'LCK-002', model: 'Z-200', battery: 9, online: true, lastSeen: '2026-09-30T09:12:00Z' },
  'LCK-003': { serial: 'LCK-003', model: 'Z-100', battery: 54, online: false },
};

export function connect(serial, callback) {
  setTimeout(() => {
    const device = devices[serial];
    if (!device) {
      callback(new Error('Device not found: ' + serial), null);
      return;
    }
    callback(null, device);
  }, 50);
}

export function sendCommand(serial, command, payload?) {
  return new Promise((resolve, reject) => {
    const device = devices[serial];
    if (!device || !device.online) {
      reject({ code: 'OFFLINE', message: 'Device offline: ' + serial });
      return;
    }
    resolve(JSON.stringify({ ok: true, command, payload, at: new Date().toISOString() }));
  });
}
