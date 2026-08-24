/* THE BEACON - what visitors clicked, and nothing else about them.
 *
 * Rafael, 25 Aug: "who just downloaded or used the app". Everything after the
 * signup is already visible in the operator console; this is the only part of
 * the journey that happens before a shop exists, and GitHub Pages keeps no
 * logs at all, so without this the funnel simply starts blind.
 *
 * WHAT IT SENDS: a kind from a fixed list, and at most a short word of detail.
 * WHAT IT DOES NOT SEND: no IP, no user agent, no referrer, no id, no cookie -
 * nothing that could join two visits together. It cannot, in fact: the
 * whitelist in site_event() (migration 0120) drops anything that is not one of
 * ten known kinds, and the table has no column to put a person in.
 *
 * Play Store installs are NOT this. Google counts those and only the Play
 * Console can show them; this counts the tap on the button that leads there.
 *
 * It must never break the page: every path is wrapped, and a failed beacon is
 * a beacon that never happened.
 */
(function () {
  var URLB = 'https://qqmkgafyfxrcnwdkkyxc.supabase.co';
  var ANON = 'sb_publishable_-cAsxVwroAl8NPHIQnrKMw_PsBEYAYX';

  function send(kind, detail) {
    try {
      fetch(URLB + '/rest/v1/rpc/site_event', {
        method: 'POST',
        keepalive: true, // the click is usually a navigation; keepalive is what lets it finish
        headers: {
          'Content-Type': 'application/json',
          apikey: ANON,
          Authorization: 'Bearer ' + ANON
        },
        body: JSON.stringify({ p_kind: kind, p_detail: detail || null })
      })['catch'](function () { /* offline, blocked, whatever - it is a counter */ });
    } catch (e) { /* older browser: no count, no harm */ }
  }

  // One visit per tab, not per page view: a person reading three sections is
  // one visitor, and counting them three times would flatter the number.
  try {
    var page = /help/.test(location.pathname) ? 'visit.help' : 'visit.home';
    if (!sessionStorage.getItem('ember.beacon.' + page)) {
      sessionStorage.setItem('ember.beacon.' + page, '1');
      send(page, null);
    }
  } catch (e) { /* private mode: skip the visit, still count clicks */ }

  document.addEventListener('click', function (ev) {
    try {
      var el = ev.target;
      var a = el && el.closest ? el.closest('a') : null;
      if (!a) return;
      var href = a.getAttribute('href') || '';
      if (href.indexOf('play.google.com') >= 0) send('download.play', 'android');
      else if (href.indexOf('.apk') >= 0) send('download.apk', null);
      else if (href.indexOf('.exe') >= 0 || href.indexOf('windows') >= 0) send('download.windows', null);
      else if (href === 'app/' || href === '/app/' || href.indexOf('emberpos.net/app') >= 0) send('cta.webapp', null);
      else if (href.indexOf('order.html') >= 0) send('cta.demo', null);
      else if (href.indexOf('#pricing') >= 0) send('cta.pricing', null);
    } catch (e) { /* never let a counter swallow a click */ }
  }, true);
})();
