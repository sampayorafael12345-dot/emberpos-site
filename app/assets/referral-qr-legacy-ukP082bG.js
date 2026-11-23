(function(){function e(e){return i(e)||r(e)||n(e)||t()}function t(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function n(e,t){if(e){if(typeof e==`string`)return a(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function r(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function i(e){if(Array.isArray(e))return a(e)}function a(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}System.register([`./qr-legacy-BsrF1t3l.js`,`./output-legacy-BC09LizP.js`,`./format-legacy-BsMhg1S4.js`,`./index.web-legacy-DZeK1a9n.js`],function(t,n){var r,i,a,o,s,c,l;function u(e,t,n){i(`<!doctype html><html><head><meta charset="utf-8"><title>Order QR, ${l(t)}</title><style>
      @page { margin: 12mm; }
      body { font-family: system-ui, sans-serif; margin: 0; color: #111; }
      .card { width: 90mm; box-sizing: border-box; border: 1.5pt dashed #bbb; border-radius: 6mm; padding: 8mm 6mm;
              text-align: center; page-break-inside: avoid; }
      .shop { font-size: 15pt; font-weight: 800; margin-bottom: 3mm; }
      .qr svg { width: 55mm; height: 55mm; }
      .tbl { font-size: 18pt; font-weight: 800; margin-top: 4mm; }
      .how { font-size: 9.5pt; color: #555; margin-top: 3mm; line-height: 1.5; }
    </style></head><body><div class="card">
      <div class="shop">${l(e||`Order here`)}</div>
      <div class="qr">${r(n,6)}</div>
      <div class="tbl">${l(t)}</div>
      <div class="how">Scan to order while you wait.<br>Give your name and number.</div>
    </div></body></html>`,{title:`Order QR, ${t}`})}function d(e,t,n,r){var i=e.reduce(function(e,t){return e+Number(t.fee_cents||0)},0),a=`<h1>Referral fees</h1><div class="meta">${l(n)} &middot; ${l(t)}</div>
    <table><thead><tr><th>Partner</th><th class="r">Percent</th><th class="r">Orders</th><th class="r">Sales</th><th class="r">Fee owed</th></tr></thead><tbody>${e.map(function(e){return`<tr><td>${l(e.name)}</td><td class="r">${e.percent}%</td><td class="r">${e.orders}</td><td class="r">${l(s(e.sales_cents,r))}</td><td class="r">${l(s(e.fee_cents,r))}</td></tr>`}).join(``)}</tbody><tfoot><tr><td colspan="4">Total owed</td><td class="r">${l(s(i,r))}</td></tr></tfoot></table>
    <p class="sub">${l(c)}</p>`;return o(`Referral fees`,a)}function f(t,n,r){return[`Referral fees, `+n].concat(e(t.map(function(e){return`${e.name} (${e.percent}%): ${e.orders} orders, sales ${s(e.sales_cents,r)}, owed ${s(e.fee_cents,r)}`}))).join(`
`)}function p(e,t,n,r){i(d(e,t,n,r),{title:`Referral fees`,shareText:f(e,t,r)})}return t({n:u,t:p}),{setters:[function(e){r=e.n},function(e){i=e.a,a=e.n,o=e.o},function(e){s=e.a},function(e){c=e.ja}],execute:function(){l=a}}})})();