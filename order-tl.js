/*
 * TAGALOG ON THE ORDER PAGE (15 Oct 2026).
 *
 * A button on the storefront of a Philippine shop switches the page's own words
 * to Tagalog, and back. Remembered on this phone (ember.lang).
 *
 * ONLY THE PAGE'S WORDS ARE TRANSLATED, NEVER THE SHOP'S. A phrase is changed
 * only when the WHOLE text of an element matches one of the page's own phrases
 * below, so a dish called "Spanish Latte", a category, the shop's name, a price
 * or an address can never be touched. Anything not listed simply stays English,
 * which is how Filipinos read a menu anyway.
 *
 * It works on whatever the page draws: a watcher translates each new piece of
 * text as it appears (sheets, toasts, the order tracker), and keeps the English
 * beside it so switching back is exact.
 */
(function () {
  'use strict';
  var KEY = 'ember.lang';
  var TL = {
    // the menu
    'Search the menu': 'Hanapin sa menu',
    'Menu sections': 'Mga bahagi ng menu',
    'View basket': 'Tingnan ang basket',
    'Sold out': 'Ubos na',
    'Nothing matches': 'Walang tugma',
    'Try a different word, or browse the categories above.': 'Subukan ang ibang salita, o tingnan ang mga kategorya sa itaas.',
    'Not serving right now': 'Walang serving ngayon',
    'Your favourites': 'Mga paborito mo',
    'Rate your visit': 'I-rate ang pagbisita mo',
    'My stamps': 'Mga stamp ko',
    'Shop info': 'Tungkol sa shop',
    'Pickup': 'Pickup',
    'Delivery': 'Delivery',
    'Order ahead': 'Umorder nang maaga',
    'Closed right now': 'Sarado ngayon',
    'Call the shop': 'Tawagan ang shop',
    'Open in Maps': 'Buksan sa Maps',
    'The shop has not added its details yet.': 'Wala pang detalye ang shop.',
    'Filter': 'I-filter',
    'Food filters': 'Filter sa pagkain',
    'Show only': 'Ipakita lang ang',
    'Leave out anything with': 'Huwag isama ang may',
    'Clear filters': 'Alisin ang filter',
    'Show the menu': 'Ipakita ang menu',
    'Nothing fits those filters': 'Walang tugma sa filter',
    'Vegetarian': 'Vegetarian', 'Vegan': 'Vegan', 'Halal': 'Halal',
    'No pork': 'Walang baboy', 'Gluten free': 'Walang gluten', 'Spicy': 'Maanghang',
    'Dishes the shop has not listed allergens for still show. If an allergy is serious, ask the shop.':
      'Lumalabas pa rin ang mga pagkaing walang nakalistang allergen. Kung seryoso ang allergy, magtanong sa shop.',
    // an item
    'Size': 'Laki',
    'How many?': 'Ilan?',
    'Note for the kitchen': 'Bilin sa kusina',
    'Anything to tell the kitchen?': 'May bilin ka ba sa kusina?',
    'Allergies, no onions, extra napkins': 'Allergy, walang sibuyas, dagdag na tissue',
    'Make it a meal?': 'Gawing meal?',
    'Make it a meal': 'Gawing meal',
    'No thanks': 'Hindi na, salamat',
    'Add it': 'Idagdag',
    'You might also like': 'Baka magustuhan mo rin',
    'One less': 'Bawasan ng isa',
    'One more': 'Dagdagan ng isa',
    // the basket
    'Your order': 'Ang order mo',
    'Add more': 'Magdagdag pa',
    'Subtotal': 'Subtotal',
    'Delivery fee': 'Bayad sa delivery',
    'Tax': 'Tax',
    'Total': 'Kabuuan',
    'Total before offers': 'Kabuuan bago ang alok',
    'The shop’s offer is taken off when you place the order.': 'Ibabawas ang alok ng shop pag-order mo.',
    'How do you want it?': 'Paano mo gustong kunin?',
    'When do you want it?': 'Kailan mo kukunin?',
    'As soon as possible': 'Ngayon na',
    'At a time': 'Pumili ng oras',
    'Pickup time': 'Oras ng pickup',
    'Pickup day': 'Araw ng pickup',
    'Today': 'Ngayon',
    'Tomorrow': 'Bukas',
    'The shop is closed right now. You can order for a later day.': 'Sarado ang shop ngayon. Puwede kang umorder para sa ibang araw.',
    'Please choose a day for your order.': 'Pakipili ang araw ng order mo.',
    'Your mobile number': 'Mobile number mo',
    'Mobile number': 'Mobile number',
    'Your location': 'Lokasyon mo',
    'Use my location': 'Gamitin ang lokasyon ko',
    'Update my location': 'I-update ang lokasyon ko',
    'Finding you…': 'Hinahanap ka…',
    'The delivery fee is worked out from how far you are.': 'Ang bayad sa delivery ay depende sa layo mo.',
    'Delivery area': 'Lugar ng delivery',
    'Choose your area': 'Piliin ang lugar mo',
    'Delivery address': 'Delivery address',
    'Saved addresses': 'Mga naka-save na address',
    'A new address': 'Bagong address',
    'Save this address to my account': 'I-save ang address na ito sa account ko',
    'Your name': 'Pangalan mo',
    'Who is this order for?': 'Para kanino ang order?',
    'So the staff can call you': 'Para matawag ka ng staff',
    'Coupon code': 'Coupon code',
    'Coupon code (optional)': 'Coupon code (kung meron)',
    'From your voucher or flyer': 'Mula sa voucher o flyer mo',
    'Add a tip?': 'Magbigay ng tip?',
    'Tip': 'Tip',
    'No tip': 'Walang tip',
    'Other': 'Iba',
    'Tip amount': 'Halaga ng tip',
    'Payment': 'Bayad',
    'Pay now': 'Magbayad ngayon',
    'Pay now (GCash/Maya)': 'Magbayad ngayon (GCash/Maya)',
    'Pay when you pick it up': 'Magbayad pagkuha',
    'Cash on delivery': 'Cash on delivery',
    'Pays online (GCash / Maya / bank app), the shop sees it instantly.': 'Online na bayad (GCash / Maya / bank app), makikita agad ng shop.',
    'Place pickup order': 'I-order (pickup)',
    'Place delivery order': 'I-order (delivery)',
    'Place order & pay': 'I-order at bayaran',
    'Send to the cashier for payment': 'Ipadala sa cashier para magbayad',
    'Sending…': 'Ipinapadala…',
    'Your order goes to the counter first. Pay there, then it is made.': 'Sa counter muna pupunta ang order mo. Magbayad doon, saka gagawin.',
    'Dine in or take out?': 'Dine in o take out?',
    'Dine in': 'Dine in',
    'Take out': 'Take out',
    'Save your details for next time': 'I-save ang detalye mo para sa susunod',
    // paying
    'Scan to pay': 'I-scan para magbayad',
    'Getting your payment code…': 'Kinukuha ang payment code mo…',
    'Waiting for the payment…': 'Hinihintay ang bayad…',
    'Waiting for your payment': 'Hinihintay ang bayad mo',
    'This screen confirms by itself the moment the money lands.': 'Kusang magko-confirm ang screen na ito pagpasok ng bayad.',
    'Not now': 'Mamaya na',
    'Paid!': 'Bayad na!',
    'Already paid!': 'Bayad na!',
    'Paid, the shop sees it instantly!': 'Bayad na, makikita agad ng shop!',
    'Please pay at the counter': 'Magbayad po sa counter',
    'The shop starts this order once it is paid, tap Pay now below.': 'Sisimulan ng shop ang order kapag bayad na, pindutin ang Magbayad ngayon sa ibaba.',
    // your orders
    'Your orders': 'Mga order mo',
    'What you ordered': 'Mga inorder mo',
    'Order more': 'Umorder pa',
    'Order again': 'Umorder ulit',
    'Show this number at the counter:': 'Ipakita ang number na ito sa counter:',
    'Show this number:': 'Ipakita ang number na ito:',
    'Watch for this number': 'Abangan ang number na ito',
    'Keep this page open': 'Huwag isara ang page na ito',
    'Received': 'Natanggap',
    'Being made': 'Ginagawa',
    'Ready': 'Ready na',
    'Collected': 'Nakuha na',
    'Staff are confirming it': 'Kinukumpirma ng staff',
    'The shop is confirming it': 'Kinukumpirma ng shop',
    'Being prepared': 'Ginagawa na',
    'Ready, please collect': 'Ready na, pakikuha',
    'Ready, come get it!': 'Ready na, kunin mo na!',
    'Collected, enjoy!': 'Nakuha na, enjoy!',
    'Picked up, enjoy!': 'Nakuha na, enjoy!',
    'Packed, waiting for the rider': 'Naka-pack na, hinihintay ang rider',
    'On the way to you!': 'Papunta na sa iyo!',
    'On the way, enjoy!': 'Papunta na, enjoy!',
    'Cancelled, ask a staff member': 'Na-cancel, magtanong sa staff',
    'Cancelled, please contact the shop': 'Na-cancel, kontakin ang shop',
    'I’m here': 'Nandito na ako',
    // the rider on the way (0519)
    'Your rider': 'Ang rider mo',
    'Your rider is getting ready.': 'Naghahanda na ang rider mo.',
    'On the way. The rider’s location shows here once it comes in.': 'Papunta na. Lalabas dito ang lokasyon ng rider pagdating nito.',
    'Delivered, enjoy!': 'Na-deliver na, enjoy!',
    ': your phone rings and vibrates here when your order is ready. The screen is kept awake for you while you wait.':
      ': tutunog at magva-vibrate ang phone mo dito pag ready na ang order. Hindi mamamatay ang screen habang naghihintay ka.',
    'The shop knows you are here.': 'Alam na ng shop na nandito ka.',
    'Cancel this order': 'Kanselahin ang order',
    'Your order is cancelled.': 'Na-cancel na ang order mo.',
    'Cancel this order? The shop has not started on it yet.': 'Kanselahin ang order? Hindi pa ito sinisimulan ng shop.',
    // messages
    'Order sent to the shop!': 'Naipadala na ang order sa shop!',
    'Order sent to the cashier!': 'Naipadala na ang order sa cashier!',
    'Please give your name.': 'Pakilagay ang pangalan mo.',
    'Please give a mobile number the shop can reach you on.': 'Pakilagay ang mobile number na matatawagan ng shop.',
    'Please give the delivery address.': 'Pakilagay ang delivery address.',
    'Please choose your delivery area.': 'Pakipili ang lugar ng delivery mo.',
    'Dine in or take out? Tap one, then send your order.': 'Dine in o take out? Pumili ng isa, saka ipadala ang order.',
    'Your last order is in the basket. Change anything before you send.': 'Nasa basket na ang huling order mo. Baguhin muna kung may papalitan bago ipadala.',
    'No connection': 'Walang connection',
    'Check your signal and try again.': 'I-check ang signal mo at subukan ulit.',
    'No connection. Try again.': 'Walang connection. Subukan ulit.',
    'No connection. Try again in a moment.': 'Walang connection. Subukan ulit maya-maya.',
    'No connection. Try again in a moment, your order was NOT sent twice.': 'Walang connection. Subukan ulit maya-maya, HINDI nadoble ang order mo.',
    'Your order is in, but the tip could not be added. You can tip at the counter.': 'Pasok na ang order mo, pero hindi naidagdag ang tip. Puwede kang mag-tip sa counter.',
    // rating
    'How was it?': 'Kumusta?',
    'Overall': 'Sa kabuuan',
    'The service': 'Ang serbisyo',
    'Thank you!': 'Salamat!',
    'Thank you for telling us.': 'Salamat sa pagsabi sa amin.',
    'Thank you! Would you tell others too?': 'Salamat! Ikukuwento mo rin ba sa iba?',
    'Leave us a Google review': 'Mag-iwan ng Google review',
    'Sorry about that. What went wrong?': 'Pasensya na. Ano ang nangyari?',
    'Send to the owner': 'Ipadala sa may-ari',
    'Only the owner reads this': 'May-ari lang ang makakabasa nito',
    // buttons everywhere
    'Close': 'Isara', 'Done': 'Tapos na', 'Back': 'Bumalik', 'Remove': 'Alisin', 'Skip': 'Laktawan',
    'Send': 'Ipadala', 'Try again': 'Subukan ulit', 'Cancel': 'Kanselahin', 'Check': 'I-check',
  };
  // Phrases with a number or a price inside.
  var RX = [
    [/^(\d+) items?$/, '$1 item'],
    [/^(.+) each$/, '$1 bawat isa'],
    [/^Add (\S+[0-9].*)$/, 'Idagdag $1'],
    [/^Pay now, (.+)$/, 'Magbayad ngayon, $1'],
    [/^Place order & pay (.+)$/, 'I-order at bayaran $1'],
    [/^Your orders \((\d+)\)$/, 'Mga order mo ($1)'],
    [/^Order again: (.+)$/, 'Umorder ulit: $1'],
    [/^Open (.+) to (.+)$/, 'Bukas $1 hanggang $2'],
    [/^Delivery orders start at (.+)$/, 'Ang delivery ay mula $1'],
    [/^Delivery orders start at$/, 'Ang delivery ay mula'],
    [/^\. Add (.+) more, or choose pickup\.$/, '. Magdagdag ng $1 pa, o piliin ang pickup.'],
    [/^About (.+) km away\. Delivery fee (.+)\.$/, 'Mga $1 km ang layo. Bayad sa delivery $2.'],
    [/^(.+) is closed right now$/, 'Sarado ngayon ang $1'],
    [/^Filter \((\d+)\)$/, 'I-filter ($1)'],
    [/^Show (\d+) items?$/, 'Ipakita ang $1 item'],
    [/^(\d+ )?(.+) added$/, '$1$2, naidagdag'],
    [/^Collect at (.+)$/, 'Kunin sa $1'],
    [/^(.+) is bringing your order$/, 'Dinadala ni $1 ang order mo'],
    [/^Delivered at (.+), enjoy!$/, 'Na-deliver na ($1), enjoy!'],
    [/^On the way · about (.+) km from you · updated (.+)$/, 'Papunta na · mga $1 km mula sa iyo · $2'],
    [/^On the way · updated (.+)$/, 'Papunta na · $1'],
    [/^On the way · last seen (.+)$/, 'Papunta na · huling nakita $1'],
    [/^Booked for (.+), the shop starts it nearer the time$/, 'Naka-book para sa $1, sisimulan ito ng shop malapit sa oras'],
    [/^(.*)· pay at pickup$/, '$1· magbayad pagkuha'],
    [/^(.*)· pay at the counter$/, '$1· magbayad sa counter'],
    [/^(.*)· cash on delivery$/, '$1· cash on delivery'],
    [/^(.*)· paid online$/, '$1· bayad na online'],
    [/^(.*)· paid$/, '$1· bayad na'],
    [/^(.*)· waiting for payment$/, '$1· hinihintay ang bayad'],
  ];

  function tr(s) {
    var t = String(s == null ? '' : s).trim();
    if (!t || t.length > 200) return null;
    var hit = Object.prototype.hasOwnProperty.call(TL, t) ? TL[t] : null;
    if (hit == null) {
      for (var i = 0; i < RX.length; i++) if (RX[i][0].test(t)) { hit = t.replace(RX[i][0], RX[i][1]); break; }
    }
    if (hit == null || hit === t) return null;
    return String(s).replace(t, hit);
  }

  /* The remembered choice is only a wish until the page says this shop gets
     Tagalog (allow): before that - an error screen, a shop abroad - the page
     stays English, so a choice made at one shop never translates another's. */
  var saved = false;
  try { saved = localStorage.getItem(KEY) === 'tl'; } catch (e) { /* private window */ }
  var on = false;
  var SKIP = { SCRIPT: 1, STYLE: 1, TEXTAREA: 1, NOSCRIPT: 1, SVG: 1 };
  var ATTRS = ['placeholder', 'aria-label', 'title'];

  function skipNode(n) {
    for (var p = n.parentNode; p && p.nodeType === 1; p = p.parentNode) {
      if (SKIP[p.nodeName.toUpperCase()] || (p.hasAttribute && p.hasAttribute('data-notl'))) return true;
    }
    return false;
  }
  function doText(n) {
    if (n.__tl !== undefined && n.data === n.__tl) return;     // our own change
    n.__en = n.data; n.__tl = undefined;
    if (!on || skipNode(n)) return;
    var v = tr(n.data);
    if (v != null) { n.__tl = v; n.data = v; }
  }
  function doAttrs(e) {
    if (e.hasAttribute('data-notl')) return;
    for (var i = 0; i < ATTRS.length; i++) {
      var a = ATTRS[i];
      if (!e.hasAttribute(a)) continue;
      var cur = e.getAttribute(a), k = '__tl_' + a;
      if (e[k] !== undefined && cur === e[k]) continue;
      e['__en_' + a] = cur; e[k] = undefined;
      if (!on) continue;
      var v = tr(cur);
      if (v != null) { e[k] = v; e.setAttribute(a, v); }
    }
  }
  function walk(root) {
    if (!root) return;
    if (root.nodeType === 3) { doText(root); return; }
    if (root.nodeType !== 1 || SKIP[root.nodeName.toUpperCase()]) return;
    doAttrs(root);
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null);
    var n;
    while ((n = w.nextNode())) { if (n.nodeType === 3) doText(n); else doAttrs(n); }
  }
  function restore(root) {
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null);
    var n;
    while ((n = w.nextNode())) {
      if (n.nodeType === 3) { if (n.__tl !== undefined && n.data === n.__tl) n.data = n.__en; n.__tl = undefined; }
      else ATTRS.forEach(function (a) {
        if (n['__tl_' + a] !== undefined && n.getAttribute(a) === n['__tl_' + a]) n.setAttribute(a, n['__en_' + a]);
        n['__tl_' + a] = undefined;
      });
    }
  }

  var mo = new MutationObserver(function (list) {
    for (var i = 0; i < list.length; i++) {
      var m = list[i];
      if (m.type === 'characterData') doText(m.target);
      else if (m.type === 'attributes') { if (m.target.nodeType === 1) doAttrs(m.target); }
      else for (var j = 0; j < m.addedNodes.length; j++) walk(m.addedNodes[j]);
    }
  });
  function start() {
    walk(document.body);
    mo.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS });
  }
  if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);

  // Questions the page asks with the browser's own box.
  var ask = window.confirm;
  window.confirm = function (msg) { return ask.call(window, on ? (tr(msg) || msg) : msg); };

  var allowedHere = false;
  window.EmberLang = {
    // The page says whether this shop gets the option at all (a Philippine
    // storefront). Elsewhere a remembered "Tagalog" is ignored, not erased.
    allow: function (ok) {
      allowedHere = !!ok;
      if (allowedHere && saved && !on) { on = true; document.documentElement.lang = 'tl'; walk(document.body); }
      else if (!allowedHere && on) { on = false; document.documentElement.lang = 'en'; restore(document.body); }
    },
    allowed: function () { return allowedHere; },
    isTagalog: function () { return on; },
    set: function (tl) {
      on = !!tl; saved = on;
      try { localStorage.setItem(KEY, on ? 'tl' : 'en'); } catch (e) { /* private window */ }
      document.documentElement.lang = on ? 'tl' : 'en';
      if (on) walk(document.body); else restore(document.body);
    },
    t: function (s) { return on ? (tr(s) || s) : s; },
  };
})();
