

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

  try {
    var page = /help/.test(location.pathname) ? 'visit.help' : 'visit.home';
    if (!sessionStorage.getItem('ember.beacon.' + page)) {
      sessionStorage.setItem('ember.beacon.' + page, '1');
      send(page, null);
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
