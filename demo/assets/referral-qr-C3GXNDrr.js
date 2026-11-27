import{n as e}from"./qr-DrJOVbCR.js";import{a as t,n,o as r}from"./output-4cBkjrMm.js";import{at as i}from"./csv-import-n-k-8EmA.js";function a(e,t){return`${e}${e.includes(`?`)?`&`:`?`}ref=${encodeURIComponent(String(t).trim().toLowerCase())}`}function o(e){let t=String(e==null?``:e).trim();if(!/^\d{1,3}$/.test(t))return`Type a whole number from 1 to 30 for the percent.`;let n=Number(t);return n<1||n>30?`The percent must be from 1 to 30.`:``}function s(e){let t=String(e==null?``:e).trim();return t?t.length>40?`Keep the name to 40 letters.`:``:`Give the partner a name, like the salon next door.`}var c=`Ember does not keep payouts. Pay your partners outside Ember; this shows what is owed.`,l=n;function u(n,r,i){t(`<!doctype html><html><head><meta charset="utf-8"><title>Order QR, ${l(r)}</title><style>
      @page { margin: 12mm; }
      body { font-family: system-ui, sans-serif; margin: 0; color: #111; }
      .card { width: 90mm; box-sizing: border-box; border: 1.5pt dashed #bbb; border-radius: 6mm; padding: 8mm 6mm;
              text-align: center; page-break-inside: avoid; }
      .shop { font-size: 15pt; font-weight: 800; margin-bottom: 3mm; }
      .qr svg { width: 55mm; height: 55mm; }
      .tbl { font-size: 18pt; font-weight: 800; margin-top: 4mm; }
      .how { font-size: 9.5pt; color: #555; margin-top: 3mm; line-height: 1.5; }
    </style></head><body><div class="card">
      <div class="shop">${l(n||`Order here`)}</div>
      <div class="qr">${e(i,6)}</div>
      <div class="tbl">${l(r)}</div>
      <div class="how">Scan to order while you wait.<br>Give your name and number.</div>
    </div></body></html>`,{title:`Order QR, ${r}`})}function d(e,t,n,a){let o=e.reduce((e,t)=>e+Number(t.fee_cents||0),0),s=`<h1>Referral fees</h1><div class="meta">${l(n)} &middot; ${l(t)}</div>
    <table><thead><tr><th>Partner</th><th class="r">Percent</th><th class="r">Orders</th><th class="r">Sales</th><th class="r">Fee owed</th></tr></thead><tbody>${e.map(e=>`<tr><td>${l(e.name)}</td><td class="r">${e.percent}%</td><td class="r">${e.orders}</td><td class="r">${l(i(e.sales_cents,a))}</td><td class="r">${l(i(e.fee_cents,a))}</td></tr>`).join(``)}</tbody><tfoot><tr><td colspan="4">Total owed</td><td class="r">${l(i(o,a))}</td></tr></tfoot></table>
    <p class="sub">${l(c)}</p>`;return r(`Referral fees`,s)}function f(e,t,n){return[`Referral fees, `+t,...e.map(e=>`${e.name} (${e.percent}%): ${e.orders} orders, sales ${i(e.sales_cents,n)}, owed ${i(e.fee_cents,n)}`)].join(`
`)}function p(e,n,r,i){t(d(e,n,r,i),{title:`Referral fees`,shareText:f(e,n,i)})}export{a,s as i,u as n,o,c as r,p as t};