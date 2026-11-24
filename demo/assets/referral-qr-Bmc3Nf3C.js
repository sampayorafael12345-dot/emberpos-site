import{at as e}from"./csv-import-BfU1ZxUJ.js";import{a as t,n,o as r}from"./output-DWOcb5ka.js";import{n as i}from"./qr-DrJOVbCR.js";var a=`reports_day_starts_at`,o=`ember.reportDayStart`;function s(e){let t=String(e==null?``:e).trim();if(!/^\d{1,2}$/.test(t))return 0;let n=Number(t);return n>=1&&n<=12?n:0}function c(){try{return s(localStorage.getItem(o))}catch(e){return 0}}function l(e){try{localStorage.setItem(o,String(s(String(e))))}catch(e){}}function u(e){return e?e===12?`12 noon`:`${e} am`:`Midnight`}function d(e,t){return`${e}${e.includes(`?`)?`&`:`?`}ref=${encodeURIComponent(String(t).trim().toLowerCase())}`}function f(e){let t=String(e==null?``:e).trim();if(!/^\d{1,3}$/.test(t))return`Type a whole number from 1 to 30 for the percent.`;let n=Number(t);return n<1||n>30?`The percent must be from 1 to 30.`:``}function p(e){let t=String(e==null?``:e).trim();return t?t.length>40?`Keep the name to 40 letters.`:``:`Give the partner a name, like the salon next door.`}var m=`Ember does not keep payouts. Pay your partners outside Ember; this shows what is owed.`,h=n;function g(e,n,r){t(`<!doctype html><html><head><meta charset="utf-8"><title>Order QR, ${h(n)}</title><style>
      @page { margin: 12mm; }
      body { font-family: system-ui, sans-serif; margin: 0; color: #111; }
      .card { width: 90mm; box-sizing: border-box; border: 1.5pt dashed #bbb; border-radius: 6mm; padding: 8mm 6mm;
              text-align: center; page-break-inside: avoid; }
      .shop { font-size: 15pt; font-weight: 800; margin-bottom: 3mm; }
      .qr svg { width: 55mm; height: 55mm; }
      .tbl { font-size: 18pt; font-weight: 800; margin-top: 4mm; }
      .how { font-size: 9.5pt; color: #555; margin-top: 3mm; line-height: 1.5; }
    </style></head><body><div class="card">
      <div class="shop">${h(e||`Order here`)}</div>
      <div class="qr">${i(r,6)}</div>
      <div class="tbl">${h(n)}</div>
      <div class="how">Scan to order while you wait.<br>Give your name and number.</div>
    </div></body></html>`,{title:`Order QR, ${n}`})}function _(t,n,i,a){let o=t.reduce((e,t)=>e+Number(t.fee_cents||0),0),s=`<h1>Referral fees</h1><div class="meta">${h(i)} &middot; ${h(n)}</div>
    <table><thead><tr><th>Partner</th><th class="r">Percent</th><th class="r">Orders</th><th class="r">Sales</th><th class="r">Fee owed</th></tr></thead><tbody>${t.map(t=>`<tr><td>${h(t.name)}</td><td class="r">${t.percent}%</td><td class="r">${t.orders}</td><td class="r">${h(e(t.sales_cents,a))}</td><td class="r">${h(e(t.fee_cents,a))}</td></tr>`).join(``)}</tbody><tfoot><tr><td colspan="4">Total owed</td><td class="r">${h(e(o,a))}</td></tr></tfoot></table>
    <p class="sub">${h(m)}</p>`;return r(`Referral fees`,s)}function v(t,n,r){return[`Referral fees, `+n,...t.map(t=>`${t.name} (${t.percent}%): ${t.orders} orders, sales ${e(t.sales_cents,r)}, owed ${e(t.fee_cents,r)}`)].join(`
`)}function y(e,n,r,i){t(_(e,n,r,i),{title:`Referral fees`,shareText:v(e,n,i)})}export{d as a,s as c,l as d,p as i,u as l,g as n,f as o,m as r,a as s,y as t,c as u};