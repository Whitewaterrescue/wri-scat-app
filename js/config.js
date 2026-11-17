/* WRI SCAT (offline) — settings shared by the page and the service worker. */
var CONFIG = {
  // The SCAT API = WRI SCAT Shoreline Apps Script (Whitewaterrescue/wri-scat-shoreline gas/ScatApi.gs):
  // lists, OUR segments, STR tables; scat_submit / scat_photo / scat_packet / scat_thumb, writing the
  // SCAT_Shoreline AGOL layers (Recon-style: incident Gateway PIN, idempotent, photos = attachments). A phone can override it for testing with
  //   localStorage.setItem('wri_scat_dev_api', '<other /exec URL>')   (remove the key to go back).
  SCAT_API: (function () {
    try { return (typeof localStorage !== 'undefined' && localStorage.getItem('wri_scat_dev_api')) || ''; } catch (e) { return ''; }
  })() || 'https://script.google.com/macros/s/AKfycbz2Ai8O1SJqMxC38itPAd2gGOgM8eW-pZcpTzBEKct8xXJFRQVPQHPOGqMzSqrfwtVt/exec',
  // Open incidents come from the Recon Apps Script's config call (read-only, same list every WRI field app
  // uses) until the SCAT API serves them through WRIServiceLib.
  API_URL: 'https://script.google.com/macros/s/AKfycbzJ9Jniz2PZ99rShnFHT_mtsug92C7W4RiOwh7hTDc2SUIBnrsSxuzcie1Y1yfRcne1/exec',
  MAX_PHOTOS: 10,          // per record (phone storage)
  PHOTO_EDGE: 1600,        // px, longest edge after downscale
  PHOTO_QUALITY: 0.8,      // JPEG
  // satellite tiles for the online map (public, no key)
  TILE_URL: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
};
self.CONFIG = CONFIG;
