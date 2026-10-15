/* EMBER CUSTOMER ACCOUNTS - the shared half (15 Oct 2026, migration 0515).
 *
 * One Ember account works at every Ember shop. The customer signs in with a
 * 6-digit code mailed to them (no password). This file is used by the shop's
 * online ordering page (order.html) and by the account page (account.html):
 *   - the session (one random token, kept on this phone only),
 *   - the server calls (all of them check the session on the server),
 *   - the sign-in steps: email -> code -> (first time) name, number, terms.
 *
 * Nothing here runs unless the page asks: a shop that has not switched
 * accounts on never shows a Sign in button (cust_status answers false).
 * Every string from the server is escaped before it touches the page.
 */
(function () {
  var URLB = 'https://qqmkgafyfxrcnwdkkyxc.supabase.co';
  var ANON = 'sb_publishable_-cAsxVwroAl8NPHIQnrKMw_PsBEYAYX';
  var KEY = 'ember.account.session';
  var TERMS_VERSION = '2026-10-15';

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function getSession() { try { return localStorage.getItem(KEY) || ''; } catch (e) { return ''; } }
  function setSession(s) { try { if (s) localStorage.setItem(KEY, s); else localStorage.removeItem(KEY); } catch (e) { /* private mode */ } }

  async function rpc(fn, args) {
    var r = await fetch(URLB + '/rest/v1/rpc/' + fn, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', apikey: ANON, Authorization: 'Bearer ' + ANON },
      body: JSON.stringify(args || {}),
    });
    if (!r.ok) throw new Error('network');
    var j = await r.json();
    // A session the server no longer knows (signed out elsewhere, expired,
    // account deleted) is forgotten here too, so the page falls back to signed out.
    if (j && j.signed_out) setSession('');
    return j;
  }

  async function sendCode(email, purpose, token) {
    var r = await fetch(URLB + '/functions/v1/cust-auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', apikey: ANON, Authorization: 'Bearer ' + ANON },
      body: JSON.stringify({ email: email, purpose: purpose || 'signin', session: getSession() || null, token: token || null }),
    });
    var j = null;
    try { j = await r.json(); } catch (e) { /* not JSON */ }
    return j || { ok: false, error: 'Could not send a code right now. Please try again.' };
  }

  function deviceLabel() {
    var ua = navigator.userAgent || '';
    var os = /iPhone|iPad/.test(ua) ? 'iPhone' : /Android/.test(ua) ? 'Android phone' : /Mac/.test(ua) ? 'Mac'
      : /Windows/.test(ua) ? 'Windows computer' : 'Browser';
    var br = /Edg\//.test(ua) ? 'Edge' : /Chrome\//.test(ua) ? 'Chrome' : /Safari\//.test(ua) ? 'Safari' : /Firefox\//.test(ua) ? 'Firefox' : '';
    return br ? os + ' · ' + br : os;
  }

  /* The email last used on this phone, so signing in again is one tap. */
  function lastEmail() { try { return localStorage.getItem('ember.account.email') || ''; } catch (e) { return ''; } }

  function validEmail(s) { return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(s || '').trim()); }

  /* THE SIGN-IN STEPS, drawn into `box` (any element). opts:
   *   token     the shop's link (only to name the shop in the email)
   *   shopName  shown in the wording ("your account at ...")
   *   onDone(result)  called once signed in and the profile is complete
   *   onCancel()      the Close / Not now button
   *   toast(msg)      the page's own toast
   * The page's own classes are used (primary, ghost, note-in, label, lede). */
  function signIn(box, opts) {
    opts = opts || {};
    var toast = opts.toast || function (m) { alert(m); };
    var state = { email: lastEmail(), resendAt: 0, timer: null };

    function stopTimer() { if (state.timer) { clearInterval(state.timer); state.timer = null; } }
    /* Each step eases in as it replaces the last (the page's CSS holds the
       motion, inside its reduced-motion rule); a wrong code gives the box a
       small shake so the eye goes back to it. */
    function stepIn() { box.classList.remove('ea-in'); void box.offsetWidth; box.classList.add('ea-in'); }
    function shake(el) { if (!el) return; el.classList.remove('ea-shake'); void el.offsetWidth; el.classList.add('ea-shake'); }

    function emailStep() {
      stopTimer();
      box.innerHTML =
        '<h2>Sign in or create an account</h2>' +
        '<p class="lede">One Ember account works at every shop that uses Ember. Your details, addresses, orders and stamps stay saved.</p>' +
        '<div class="label">Email</div>' +
        '<input class="note-in" id="ea-email" type="email" inputmode="email" autocomplete="email" maxlength="254" placeholder="you@gmail.com" value="' + esc(state.email) + '">' +
        '<p class="lede" style="font-size:13px;margin-top:8px">We will email you a 6-digit code. No password to remember.</p>' +
        '<div style="display:flex;gap:10px;margin-top:14px">' +
          '<button class="ghost" id="ea-cancel" style="flex:1">Not now</button>' +
          '<button class="primary" id="ea-send" style="flex:1">Send code</button></div>';
      stepIn();
      var inp = box.querySelector('#ea-email');
      setTimeout(function () { try { inp.focus(); } catch (e) { /* ignore */ } }, 60);
      box.querySelector('#ea-cancel').onclick = function () { stopTimer(); if (opts.onCancel) opts.onCancel(); };
      var go = async function () {
        // The button is the busy flag: Enter pressed twice sends one code.
        var b = box.querySelector('#ea-send');
        if (!b || b.disabled) return;
        var em = (inp.value || '').trim().toLowerCase();
        if (!validEmail(em)) { toast('Type your email address, like name@gmail.com.'); shake(inp); return; }
        b.disabled = true; b.textContent = 'Sending…';
        var r;
        try { r = await sendCode(em, 'signin', opts.token); } catch (e) { r = { ok: false, error: 'No connection. Try again in a moment.' }; }
        if (!r.ok) { toast(r.error || 'Could not send a code.'); b.disabled = false; b.textContent = 'Send code'; return; }
        state.email = em; state.resendAt = Date.now() + 45000;
        try { localStorage.setItem('ember.account.email', em); } catch (e) { /* private mode */ }
        codeStep();
      };
      box.querySelector('#ea-send').onclick = go;
      inp.onkeydown = function (e) { if (e.key === 'Enter') go(); };
    }

    function codeStep() {
      box.innerHTML =
        '<h2>Check your email</h2>' +
        '<p class="lede">We sent a 6-digit code to <b>' + esc(state.email) + '</b>. It works for 10 minutes. Check Spam or Promotions if you cannot see it.</p>' +
        '<input class="note-in" id="ea-code" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" placeholder="6-digit code" ' +
          'style="font-size:24px;letter-spacing:8px;text-align:center">' +
        '<div style="display:flex;gap:10px;margin-top:14px">' +
          '<button class="ghost" id="ea-back" style="flex:1">Change email</button>' +
          '<button class="primary" id="ea-verify" style="flex:1">Sign in</button></div>' +
        '<div style="text-align:center;margin-top:12px"><button class="ghost" id="ea-resend" style="font-size:14px">Send a new code</button></div>';
      stepIn();
      var inp = box.querySelector('#ea-code');
      setTimeout(function () { try { inp.focus(); } catch (e) { /* ignore */ } }, 60);
      var resend = box.querySelector('#ea-resend');
      var paint = function () {
        var s = Math.ceil((state.resendAt - Date.now()) / 1000);
        resend.disabled = s > 0;
        resend.textContent = s > 0 ? 'Send a new code in ' + s + 's' : 'Send a new code';
      };
      stopTimer(); paint(); state.timer = setInterval(paint, 1000);
      box.querySelector('#ea-back').onclick = emailStep;
      resend.onclick = async function () {
        resend.disabled = true;
        var r;
        try { r = await sendCode(state.email, 'signin', opts.token); } catch (e) { r = { ok: false, error: 'No connection.' }; }
        if (!r.ok) { toast(r.error || 'Could not send a code.'); paint(); return; }
        state.resendAt = Date.now() + 45000; paint(); toast('A new code is on its way.');
      };
      var go = async function () {
        // The button is the busy flag: the sixth digit and Enter together check once.
        var b = box.querySelector('#ea-verify');
        if (!b || b.disabled) return;
        var code = (inp.value || '').replace(/\D/g, '');
        if (code.length !== 6) { toast('Type the 6 numbers from the email.'); shake(inp); return; }
        b.disabled = true; b.textContent = 'Checking…';
        var r;
        try { r = await rpc('cust_code_verify', { p_email: state.email, p_code: code, p_device: deviceLabel() }); }
        catch (e) { r = { ok: false, error: 'No connection. Try again in a moment.' }; }
        if (!r || !r.ok) { toast((r && r.error) || 'That code is not right.'); b.disabled = false; b.textContent = 'Sign in'; shake(inp); inp.select(); return; }
        stopTimer();
        setSession(r.session);
        if (r.needs_profile) profileStep(r.is_new); else if (opts.onDone) opts.onDone({ isNew: false });
      };
      box.querySelector('#ea-verify').onclick = go;
      inp.oninput = function () { if ((inp.value || '').replace(/\D/g, '').length === 6) go(); };
      inp.onkeydown = function (e) { if (e.key === 'Enter') go(); };
    }

    async function profileStep(isNew) {
      var me = null;
      try { me = await rpc('cust_me', { p_session: getSession() }); } catch (e) { /* fill in blanks */ }
      var p = (me && me.ok && me.profile) || {};
      var needTerms = !p.terms_at;
      box.innerHTML =
        '<h2>' + (isNew ? 'Welcome to Ember' : 'A few details') + '</h2>' +
        '<p class="lede">Shops use these for your orders. You can change them any time.</p>' +
        '<div class="label">Your name</div>' +
        // Neutral unless the page knows the shop is Philippine (opts).
        '<input class="note-in" id="ea-name" type="text" autocomplete="name" maxlength="60" placeholder="' + esc(opts.namePlaceholder || 'Your name') + '" value="' + esc(p.name || '') + '">' +
        '<div class="label">Mobile number</div>' +
        '<input class="note-in" id="ea-phone" type="tel" inputmode="tel" autocomplete="tel" maxlength="20" placeholder="' + esc(opts.phonePlaceholder || 'Mobile number') + '" value="' + esc(p.phone || '') + '">' +
        '<div class="label">Birthday (optional, for birthday treats)</div>' +
        '<input class="note-in" id="ea-bday" type="date" autocomplete="bday" value="' + esc(p.birthday || '') + '">' +
        (opts.shopName
          ? '<label class="ea-tick"><input type="checkbox" id="ea-shopmsg"> <span>Yes, ' + esc(opts.shopName) + ' may send me offers and news</span></label>'
          : '') +
        '<label class="ea-tick"><input type="checkbox" id="ea-news"' + (p.ember_news ? ' checked' : '') + '> <span>Yes, Ember may email me about new shops and features</span></label>' +
        (needTerms
          ? '<label class="ea-tick"><input type="checkbox" id="ea-terms"> <span>I agree to the <a href="https://emberpos.net/customer-terms.html" target="_blank" rel="noopener">Terms</a> and ' +
            '<a href="https://emberpos.net/customer-terms.html#customers" target="_blank" rel="noopener">Privacy Policy</a></span></label>'
          : '') +
        '<div style="display:flex;gap:10px;margin-top:14px">' +
          '<button class="primary" id="ea-save" style="flex:1">Save and continue</button></div>';
      stepIn();
      box.querySelector('#ea-save').onclick = async function () {
        var name = (box.querySelector('#ea-name').value || '').trim();
        var phone = (box.querySelector('#ea-phone').value || '').trim();
        if (!name) { toast('Please give your name.'); return; }
        if (phone.replace(/\D/g, '').length < 7) { toast('Please give a mobile number shops can reach you on.'); return; }
        var t = box.querySelector('#ea-terms');
        if (t && !t.checked) { toast('Please tick the box to agree to the Terms and Privacy Policy.'); return; }
        var b = this; b.disabled = true; b.textContent = 'Saving…';
        var r;
        try {
          r = await rpc('cust_profile_save', {
            p_session: getSession(), p_name: name, p_phone: phone,
            p_birthday: box.querySelector('#ea-bday').value || null,
            p_ember_news: box.querySelector('#ea-news').checked,
            p_terms_version: t ? TERMS_VERSION : null,
          });
        } catch (e) { r = { ok: false, error: 'No connection. Try again in a moment.' }; }
        if (!r || !r.ok) { toast((r && r.error) || 'Could not save.'); b.disabled = false; b.textContent = 'Save and continue'; return; }
        var sm = box.querySelector('#ea-shopmsg');
        if (opts.onDone) opts.onDone({ isNew: !!isNew, shopMessages: sm ? sm.checked : null });
      };
    }

    // A signed-in customer with details still missing goes straight to them.
    if (opts.startAt === 'profile' && getSession()) profileStep(false); else emailStep();
    return { stop: stopTimer };
  }

  /* ONE WORD FOR AN ORDER'S STATE, the same on the order page's account sheet
     and on the account page - they used to disagree about the same order. */
  function statusWord(o) {
    o = o || {};
    if (o.status === 'cancelled') return 'Cancelled';
    if (o.status === 'collected') return 'Collected';
    if (o.status === 'ready') return 'Ready';
    if (o.status === 'paid' || o.paid === true) return 'Paid';
    if (o.status === 'sent') return 'Being made';
    return 'Received';
  }

  /* The till scans this (lib/loyalty-card.ts). */
  function cardQrSvg(code) {
    try {
      if (typeof qrcode !== 'function' || !code) return '';
      var q = qrcode(0, 'M');
      q.addData('EMBER-CARD:' + code);
      q.make();
      return q.createSvgTag({ cellSize: 6, margin: 0, scalable: true });
    } catch (e) { return ''; }
  }

  window.EmberAccount = {
    esc: esc, rpc: rpc, sendCode: sendCode, getSession: getSession, setSession: setSession,
    signIn: signIn, cardQrSvg: cardQrSvg, deviceLabel: deviceLabel, validEmail: validEmail, statusWord: statusWord,
    TERMS_VERSION: TERMS_VERSION,
    signOut: async function (all) {
      var s = getSession();
      setSession('');
      if (s) { try { await rpc('cust_sign_out', { p_session: s, p_all: !!all }); } catch (e) { /* signed out here anyway */ } }
    },
  };
})();
