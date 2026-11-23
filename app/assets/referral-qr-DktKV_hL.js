import{n as e}from"./qr-DSTrPr75.js";import{a as t,n,o as r}from"./output-zs1-lQju.js";import{a as i}from"./format-RTg2xohE.js";import{ja as a}from"./index.web-DrpXDVf_.js";var o=n;function s(n,r,i){t(`<!doctype html><html><head><meta charset="utf-8"><title>Order QR, ${o(r)}</title><style>
      @page { margin: 12mm; }
      body { font-family: system-ui, sans-serif; margin: 0; color: #111; }
      .card { width: 90mm; box-sizing: border-box; border: 1.5pt dashed #bbb; border-radius: 6mm; padding: 8mm 6mm;
              text-align: center; page-break-inside: avoid; }
      .shop { font-size: 15pt; font-weight: 800; margin-bottom: 3mm; }
      .qr svg { width: 55mm; height: 55mm; }
      .tbl { font-size: 18pt; font-weight: 800; margin-top: 4mm; }
      .how { font-size: 9.5pt; color: #555; margin-top: 3mm; line-height: 1.5; }
    </style></head><body><div class="card">
      <div class="shop">${o(n||`Order here`)}</div>
      <div class="qr">${e(i,6)}</div>
      <div class="tbl">${o(r)}</div>
      <div class="how">Scan to order while you wait.<br>Give your name and number.</div>
    </div></body></html>`,{title:`Order QR, ${r}`})}function c(e,t,n,s){let c=e.reduce((e,t)=>e+Number(t.fee_cents||0),0),l=`<h1>Referral fees</h1><div class="meta">${o(n)} &middot; ${o(t)}</div>
    <table><thead><tr><th>Partner</th><th class="r">Percent</th><th class="r">Orders</th><th class="r">Sales</th><th class="r">Fee owed</th></tr></thead><tbody>${e.map(e=>`<tr><td>${o(e.name)}</td><td class="r">${e.percent}%</td><td class="r">${e.orders}</td><td class="r">${o(i(e.sales_cents,s))}</td><td class="r">${o(i(e.fee_cents,s))}</td></tr>`).join(``)}</tbody><tfoot><tr><td colspan="4">Total owed</td><td class="r">${o(i(c,s))}</td></tr></tfoot></table>
    <p class="sub">${o(a)}</p>`;return r(`Referral fees`,l)}function l(e,t,n){return[`Referral fees, `+t,...e.map(e=>`${e.name} (${e.percent}%): ${e.orders} orders, sales ${i(e.sales_cents,n)}, owed ${i(e.fee_cents,n)}`)].join(`
`)}function u(e,n,r,i){t(c(e,n,r,i),{title:`Referral fees`,shareText:l(e,n,i)})}export{s as n,u as t};