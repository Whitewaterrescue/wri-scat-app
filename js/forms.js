/* WRI SCAT (offline) — where each kind of saved record uploads to.
 * Loaded by the page and the service worker (the outbox looks kinds up here).
 * The endpoint takes {action, payload:{pin, device, id, incident_id, ...fields}}, checks the incident Gateway PIN (SCAT API, like Recon) and
 * is idempotent by `id`. photo_action: one request per photo after the record (idempotent by id + idx).
 * pin_scope: this kind uses its own PIN (kv pins_scoped.scat), asked for in the app; it holds the incident
 * Gateway PIN, which the WRI SCAT API checks per incident (Caleb 2026-11-17).
 */
self.FORM_KINDS = {
  'scat': { label: 'SCAT', action: 'scat_submit', photo_action: 'scat_photo', pin_scope: 'scat', url: function () { return CONFIG.SCAT_API; } }
};
