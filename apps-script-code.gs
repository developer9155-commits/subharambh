// Subharambh 2026 – saves every registration as a new row in this Google Sheet.
const HEADERS = ['Timestamp', 'Program', 'Name', 'Registration Number', 'Mobile', 'Branch', 'Year', 'Status'];

function doPost(e) {
  const p = e.parameter;
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName('Registrations') || ss.insertSheet('Registrations');
  const lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try {
    if (sh.getLastRow() === 0) {
      sh.appendRow(HEADERS);
      sh.setFrozenRows(1);
      sh.getRange('E:E').setNumberFormat('@'); // keep mobile numbers as text
    }
    const reg = String(p['Registration Number'] || '').trim().toLowerCase();
    const rows = sh.getDataRange().getValues().slice(1);
    const duplicate = rows.some(r => String(r[3]).trim().toLowerCase() === reg && r[1] === p['Program']);
    sh.appendRow([
      new Date(), p['Program'], p['Name'], p['Registration Number'],
      p['Mobile'], p['Branch'], p['Year'], duplicate ? 'Duplicate' : 'New'
    ]);
  } finally {
    lock.releaseLock();
  }
  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService.createTextOutput('Subharambh registration endpoint is live.');
}
