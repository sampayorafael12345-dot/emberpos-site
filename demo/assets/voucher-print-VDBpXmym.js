import{En as e,Ot as t,_ as n,d as r,f as i,jt as a}from"./custom-roles-8-hFnR-U.js";var o=e=>String(e==null?``:e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`),s=`______________________`;function c(n,r,i,o){let s=new t(r),c=n.kind===`out`;return s.align(`center`).bold(!0).size(2).line(c?`PAY OUT`:`PAY IN`).size(1),s.line(n.shopName||``).bold(!1),s.line(c?`Cash leaving the drawer`:`Cash added to the drawer`),s.align(`left`).rule(),s.pair(`Date`,n.at.toLocaleString()),n.shiftId!=null&&s.pair(`Shift`,`#${n.shiftId}`),s.rule(),s.bold(!0).pair(`AMOUNT`,e(n.amountCents,i)).bold(!1),s.line(``),s.line(`For:`),s.line(n.reason||`no reason given`),n.category&&s.pair(`Category`,n.category),s.rule(),s.line(``),s.line(n.paidBy?`Paid by: ${n.paidBy}`:a(`Paid by`,s.cols)),s.line(``),s.line(a(`Signature`,s.cols)),s.line(``),s.line(a(`Paid to`,s.cols)),s.line(``),s.line(a(`Signature`,s.cols)),s.line(``),s.align(`center`).line(`Keep this with the shift report.`),s.finish(o),s.base64()}function l(t,n){let r=t.kind===`out`;return`<!doctype html><html><head><meta charset="utf-8">
    <title>${r?`Pay out`:`Pay in`}</title>
    <style>
      body{font-family:ui-monospace,'Segoe UI',Roboto,sans-serif;padding:16px;max-width:340px;font-size:12px;color:#000}
      h1{text-align:center;font-size:16px;margin:0}
      .sub{text-align:center;font-size:11px;color:#555;margin-bottom:6px}
      hr{border:0;border-top:1px dashed #888;margin:9px 0}
      .row{display:flex;justify-content:space-between;gap:10px;margin:2px 0}
      .amt{text-align:center;font-size:22px;font-weight:800;margin:8px 0}
      .for{margin:4px 0 0}
      .sign{margin-top:20px;font-size:11px}
    </style></head><body>
    <h1>${r?`PAY OUT`:`PAY IN`}</h1>
    <div class="sub">${o(t.shopName)} · ${r?`cash leaving the drawer`:`cash added to the drawer`}</div>
    <hr/>
    <div class="row"><span>Date</span><span>${o(t.at.toLocaleString())}</span></div>
    ${t.shiftId==null?``:`<div class="row"><span>Shift</span><span>#${o(t.shiftId)}</span></div>`}
    <div class="amt">${o(e(t.amountCents,n))}</div>
    <div class="for">For: ${o(t.reason||`no reason given`)}</div>
    ${t.category?`<div class="row"><span>Category</span><span>${o(t.category)}</span></div>`:``}
    <hr/>
    <div class="sign">Paid by: ${o(t.paidBy||s)}</div>
    <div class="sign">Signature: ${s}</div>
    <div class="sign">Paid to: ${s}</div>
    <div class="sign">Signature: ${s}</div>
    <hr/>
    <div class="sub">Keep this with the shift report.</div>
  </body></html>`}async function u(e,t,a={}){var o;let s=t.currency_symbol||`P`,u=i(t,`receipt`);if(u)return await r(u.address,c(e,u.widthMm,s,n(u))),!0;if(a.auto)return!1;let d=await window.ember.printing.printHtml(l(e,s),`receipt`);if(d&&d.ok===!1)throw Error((o=d.error)==null?`check the printer in Settings`:o);return!0}function d(e,t){var n;let r=((n=t==null?void 0:t.pack_label)==null?``:n).trim(),i=t==null?void 0:t.pack_qty;if(!r||i==null||!(Number(i)>0)||e==null||e===``)return null;let a=Number(e);return isFinite(a)&&Math.abs(a-Number(i))<1e-9?r:null}function f(e,t=`GCash`){return e.paid_at?{text:e.paid_via===`bank`?`Paid · bank/${t}`:`Paid · drawer`,paid:!0}:e.payment_terms===`paid`?{text:`Paid upfront`,paid:!0}:e.payment_terms===`terms`?{text:`On terms, pay later`,paid:!1}:e.payment_terms===`cod`?{text:`COD, pay on delivery`,paid:!1}:{text:e.status===`received`?`Unpaid`:``,paid:!1}}function p(e,t=`GCash`){return e!=null&&e.paid_at?e.paid_via===`bank`?`Paid - bank / ${t}, not from the drawer`:`Paid - from the cash drawer`:(e==null?void 0:e.payment_terms)===`paid`?`Paid upfront - nothing due on delivery`:(e==null?void 0:e.payment_terms)===`terms`?`On terms - to be paid later (see Suppliers you owe)`:(e==null?void 0:e.payment_terms)===`cod`?`COD - due on delivery`:(e==null?void 0:e.status)===`received`?`Unpaid`:null}function m(n,r,i,o){let s=new t(r);s.align(`center`).bold(!0).size(2).line(`RECEIVING`).size(1),s.line(n.shopName||``).bold(!1),s.line(`Purchase order #${n.poId}`),s.align(`left`).rule(),n.supplier&&s.pair(`Supplier`,n.supplier),s.pair(`Received`,n.receivedAt.toLocaleString()),n.payment&&(s.line(`Payment:`),s.bold(!0).line(n.payment).bold(!1)),s.rule();for(let t of n.lines){let n=t.packLabel?`${t.packs} ${t.packLabel}`:`${t.packs}x`;s.pair(`${n} ${t.name}`,e(Math.round(t.costPerPackCents*t.packs),i)),t.unitsPerPack&&s.line(`   ${t.unitsPerPack} ${t.unit} per ${t.packLabel||`pack`} @ ${e(t.costPerPackCents,i)}`),Number(t.discountCents)>0&&s.line(`   less ${e(Number(t.discountCents),i)} discount`),t.cold&&s.line(`   KEEP COLD`),t.orderedPacks!=null&&Number(t.orderedPacks)!==Number(t.packs)&&s.bold(!0).line(`   ** received ${t.packs} of ${t.orderedPacks} ordered`).bold(!1)}return Number(n.discountCents)>0&&s.pair(`Supplier discount`,`-`+e(Number(n.discountCents),i)),s.rule(`=`),s.bold(!0).pair(`TOTAL`,e(n.totalCents,i)).bold(!1),n.notes&&(s.rule(),s.line(`Notes:`),s.line(n.notes)),s.rule(),s.line(``),s.line(n.receivedBy?`Received by: ${n.receivedBy}`:a(`Received by`,s.cols)),s.line(``),s.line(a(`Signature`,s.cols)),s.line(``),s.line(a(`Delivered by`,s.cols)),s.line(``),s.line(a(`Checked by`,s.cols)),s.line(``),s.align(`center`).line(`Staple the supplier's receipt to this.`),s.finish(o),s.base64()}function h(t,n){let r=t=>o(e(t,n));return`<!doctype html><html><head><meta charset="utf-8">
    <title>Receiving Report · PO #${o(t.poId)}</title>
    <style>
      body{font-family:ui-monospace,'Segoe UI',Roboto,sans-serif;padding:20px;max-width:420px;font-size:12px;color:#000}
      h1{text-align:center;font-size:16px;margin:0}
      .sub{text-align:center;font-size:11px;color:#555;margin-bottom:8px}
      hr{border:0;border-top:1px dashed #888;margin:10px 0}
      table{width:100%;border-collapse:collapse;font-size:12px}
      th{text-align:left;border-bottom:1px solid #000;padding:2px 4px}
      td{padding:2px 4px;vertical-align:top}
      .r{text-align:right}
      .tot{font-weight:bold;border-top:1px solid #000}
      .sign{margin-top:22px;font-size:11px}
    </style></head><body>
    <h1>RECEIVING REPORT</h1>
    <div class="sub">${o(t.shopName)} · Purchase order #${o(t.poId)}${t.supplier?` · `+o(t.supplier):``}</div>
    <hr/>
    <div>Received: ${o(t.receivedAt.toLocaleString())}</div>
    ${t.payment?`<div>Payment: <b>${o(t.payment)}</b></div>`:``}
    ${t.notes?`<div>Notes: ${o(t.notes)}</div>`:``}
    <hr/>
    <table>
      <thead><tr><th>Item</th><th class="r">Packs</th><th class="r">Units</th><th class="r">Cost/pack</th><th class="r">Total</th></tr></thead>
      <tbody>
        ${t.lines.map(e=>{var t;return`<tr><td>${o(e.name)}${e.cold?` <b>(KEEP COLD)</b>`:``}${e.lot||e.expiry?`<br/><small>${[e.lot?`Lot `+o(e.lot):``,e.expiry?`Exp `+o(String(e.expiry).slice(0,10)):``].filter(Boolean).join(` · `)}</small>`:``}${Number(e.discountCents)>0?`<br/><small>less ${r(Number(e.discountCents))} discount</small>`:``}${e.orderedPacks!=null&&Number(e.orderedPacks)!==Number(e.packs)?`<br/><b>** received ${o(e.packs)} of ${o(e.orderedPacks)} ordered</b>`:``}</td><td class="r">${o(e.packs)}${e.packLabel?` `+o(e.packLabel):``}</td><td class="r">${o((t=e.unitsPerPack)==null?``:t)} ${o(e.unit)}</td><td class="r">${r(e.costPerPackCents)}</td><td class="r">${r(Math.round(e.costPerPackCents*e.packs))}</td></tr>`}).join(``)}
        ${Number(t.discountCents)>0?`<tr><td colspan="4">Supplier discount</td><td class="r">-${r(Number(t.discountCents))}</td></tr>`:``}
        <tr class="tot"><td colspan="4">TOTAL</td><td class="r">${r(t.totalCents)}</td></tr>
      </tbody>
    </table>
    <div class="sign">Received by: ${o(t.receivedBy||s)}</div>
    <div class="sign">Signature: ${s}</div>
    <div class="sign">Delivered by: ${s}</div>
    <div class="sign">Checked by: ${s}</div>
    <hr/>
    <div class="sub">Attach the supplier's receipt to this report. Printed ${o(new Date().toLocaleString())}</div>
  </body></html>`}async function g(e,t,a={}){var o;let s=t.currency_symbol||`P`,c=i(t,`receipt`);if(c)return await r(c.address,m(e,c.widthMm,s,n(c))),!0;if(a.auto)return!1;let l=await window.ember.printing.printHtml(h(e,s),`receipt`);if(l&&l.ok===!1)throw Error((o=l.error)==null?`check the printer in Settings`:o);return!0}function _(e,t){var n,r,i,a,o,s,c,l,u;let f=((n=e==null?void 0:e.items)==null?[]:n).map(e=>{var n,r,i,a,o,s,c,l,u,f,p;let m=e.received_packs==null?null:Number(e.received_packs),h=Number((n=e.packs)==null?0:n);return{name:(r=(i=e.ingredient_name)==null?e.name:i)==null?`#${e.ingredient_id}`:r,packs:m==null?h:m,orderedPacks:m!=null&&m!==h?h:null,unitsPerPack:e.units_per_pack==null?null:Number(e.units_per_pack),unit:(a=(o=e.unit)==null?(s=t.unitOf)==null?void 0:s.call(t,Number(e.ingredient_id)):o)==null?``:a,packLabel:d(e.units_per_pack==null?null:Number(e.units_per_pack),(c=t.packOf)==null?void 0:c.call(t,Number(e.ingredient_id))),costPerPackCents:Number((l=e.cost_per_pack_cents)==null?0:l),lot:(u=e.lot_code)==null?null:u,cold:!!((f=t.coldOf)!=null&&f.call(t,Number(e.ingredient_id))),expiry:(p=e.expiry)==null?null:p,discountCents:Math.max(0,Math.round(Number(e.discount_cents)||0))}}),m=(r=(i=e==null?void 0:e.received_at)==null?e==null?void 0:e.created_at:i)==null?null:r;return{shopName:t.shopName,poId:(a=e==null?void 0:e.id)==null?`?`:a,supplier:(o=e==null?void 0:e.supplier_name)==null?null:o,receivedAt:m?new Date(String(m)+(String(m).includes(`Z`)||String(m).includes(`+`)?``:`Z`)):new Date,receivedBy:t.receivedBy,notes:(s=e==null?void 0:e.notes)==null?null:s,payment:t.payVia===`drawer`?`Paid - from the cash drawer`:t.payVia===`bank`?`Paid - bank / ${(c=t.bankWord)==null?`GCash`:c}, not from the drawer`:p(e,(l=t.bankWord)==null?`GCash`:l),lines:f,discountCents:Math.max(0,Math.round(Number(e==null?void 0:e.discount_cents)||0)),totalCents:Number((u=e==null?void 0:e.total_cost_cents)==null?f.reduce((e,t)=>e+Math.round(t.costPerPackCents*t.packs),0):u)}}export{h as a,g as i,f as n,_ as o,u as r,d as t};