

(function () {
  var URLB = 'https://qqmkgafyfxrcnwdkkyxc.supabase.co';
  var ANON = 'sb_publishable_-cAsxVwroAl8NPHIQnrKMw_PsBEYAYX';

  function send(kind, detail) {
    try {
      fetch(URLB + '/rest/v1/rpc/site_event', {
        method: 'POST',
        keepalive: true,
        headers: {
          'Content-Type': 'application/json',
          apikey: ANON,
          Authorization: 'Bearer ' + ANON
        },
        body: JSON.stringify({ p_kind: kind, p_detail: detail || null })
      })['catch'](function () {  });
    } catch (e) {  }
  }

  function param(name) {
    var m = new RegExp('[?&]' + name + '=([^&#]*)').exec(location.search);
    return m ? m[1] : '';
  }

  function source() {
    try {
      var u = param('utm_source').toLowerCase().replace(/[^a-z0-9-]/g, '').slice(0, 20);
      if (u) return 'utm-' + u;
      if (param('gclid') || param('gad_source')) return 'google-ad';
      if (param('fbclid')) return 'facebook';
      if (param('ttclid')) return 'tiktok';
      var from = document.referrer || '';
      var host = (/^https?:[/][/]([^/?#]+)/.exec(from) || [])[1] || '';
      host = host.toLowerCase();
      if (!host) return 'direct';
      if (host === location.hostname) return 'ember';
      if (/^mail[.]|[.]mail[.]|outlook|webmail/.test(host)) return 'email';
      if (/play[.]google/.test(host)) return 'play-store';
      if (/facebook|fb[.]|messenger/.test(host)) return 'facebook';
      if (/instagram/.test(host)) return 'instagram';
      if (/tiktok/.test(host)) return 'tiktok';
      if (/youtube|youtu[.]be/.test(host)) return 'youtube';
      if (/google[.]/.test(host)) return 'google-search';
      if (/bing[.]|duckduckgo|yahoo[.]|ecosia|brave[.]/.test(host)) return 'other-search';
      if (/chatgpt|openai|perplexity|gemini|copilot/.test(host)) return 'ai-answer';
      return 'other-site';
    } catch (e) { return 'unknown'; }
  }

  function landed() {
    try {
      var name = location.pathname.split('/').pop().replace(/[.]html$/, '').replace(/[^a-z0-9-]/gi, '');
      return (name && name !== 'index' ? name : 'home').slice(0, 36);
    } catch (e) { return 'home'; }
  }

  try {
    var page = /help/.test(location.pathname) ? 'visit.help' : 'visit.home';
    if (!sessionStorage.getItem('ember.beacon.' + page)) {
      sessionStorage.setItem('ember.beacon.' + page, '1');
      send(page, source() + ' ' + landed());
    }
  } catch (e) {  }

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

      else if (href.indexOf('demo/') === 0 || href.indexOf('/demo/') >= 0 || href.indexOf('emberpos.net/demo') >= 0) {
        var m = /[?&]lesson=([a-z]+)/.exec(href);
        send('cta.demo', m ? m[1] : 'browser');
      }
      else if (href.indexOf('order.html') >= 0) send('cta.demo', 'qr');
      else if (href.indexOf('#pricing') >= 0) send('cta.pricing', null);
    } catch (e) {  }
  }, true);
})();
