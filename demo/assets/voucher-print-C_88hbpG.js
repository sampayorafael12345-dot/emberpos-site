import{Kr as e,Ur as t,on as n,pn as r,sn as i}from"./till-lines-C7WM9cMi.js";import{at as a}from"./csv-import-n-k-8EmA.js";import{a as o,i as s,s as c}from"./vault-part-Bme8Fr_z.js";var l=e=>a(Math.round(Number(e)||0),``),u=e=>String(e==null?``:e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`),d=`______________________`;function f(n,r,i,o){let s=new t(r),c=n.kind===`out`;return s.align(`center`).bold(!0).size(2).line(c?`PAY OUT`:`PAY IN`).size(1),s.line(n.shopName||``).bold(!1),s.line(c?`Cash leaving the drawer`:`Cash added to the drawer`),s.align(`left`).rule(),s.pair(`Date`,n.at.toLocaleString()),n.shiftId!=null&&s.pair(`Shift`,`#${n.shiftId}`),s.rule(),s.bold(!0).pair(`AMOUNT`,a(n.amountCents,i)).bold(!1),s.line(``),s.line(`For:`),s.line(n.reason||`no reason given`),n.category&&s.pair(`Category`,n.category),s.rule(),s.line(``),s.line(n.paidBy?`Paid by: ${n.paidBy}`:e(`Paid by`,s.cols)),s.line(``),s.line(e(`Signature`,s.cols)),s.line(``),s.line(e(`Paid to`,s.cols)),s.line(``),s.line(e(`Signature`,s.cols)),s.line(``),s.align(`center`).line(`Keep this with the shift report.`),s.finish(o),s.base64()}function p(e,t){let n=e.kind===`out`;return`<!doctype html><html><head><meta charset="utf-8">
    <title>${n?`Pay out`:`Pay in`}</title>
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
    <h1>${n?`PAY OUT`:`PAY IN`}</h1>
    <div class="sub">${u(e.shopName)} · ${n?`cash leaving the drawer`:`cash added to the drawer`}</div>
    <hr/>
    <div class="row"><span>Date</span><span>${u(e.at.toLocaleString())}</span></div>
    ${e.shiftId==null?``:`<div class="row"><span>Shift</span><span>#${u(e.shiftId)}</span></div>`}
    <div class="amt">${u(a(e.amountCents,t))}</div>
    <div class="for">For: ${u(e.reason||`no reason given`)}</div>
    ${e.category?`<div class="row"><span>Category</span><span>${u(e.category)}</span></div>`:``}
    <hr/>
    <div class="sign">Paid by: ${u(e.paidBy||d)}</div>
    <div class="sign">Signature: ${d}</div>
    <div class="sign">Paid to: ${d}</div>
    <div class="sign">Signature: ${d}</div>
    <hr/>
    <div class="sub">Keep this with the shift report.</div>
  </body></html>`}async function m(e,t,a={}){var o;let s=t.currency_symbol||`P`,c=i(t,`receipt`);if(c)return await n(c.address,f(e,c.widthMm,s,r(c))),!0;if(a.auto)return!1;let l=await window.ember.printing.printHtml(p(e,s),`receipt`);if(l&&l.ok===!1)throw Error((o=l.error)==null?`check the printer in Settings`:o);return!0}function h(e,t){var n;let r=((n=t==null?void 0:t.pack_label)==null?``:n).trim(),i=t==null?void 0:t.pack_qty;if(!r||i==null||!(Number(i)>0)||e==null||e===``)return null;let a=Number(e);return isFinite(a)&&Math.abs(a-Number(i))<1e-9?r:null}function g(e,t=`GCash`){return e.paid_at?{text:e.paid_via===`bank`?`Paid · bank/${t}`:e.paid_via===`vault`?s(e,l,t):`Paid · drawer`,paid:!0}:e.payment_terms===`paid`?{text:`Paid upfront`,paid:!0}:e.payment_terms===`terms`?{text:`On terms, pay later`,paid:!1}:e.payment_terms===`cod`?{text:`COD, pay on delivery`,paid:!1}:{text:e.status===`received`?`Unpaid`:``,paid:!1}}function _(e,t=`GCash`){return e!=null&&e.paid_at?e.paid_via===`bank`?`Paid - bank / ${t}, not from the drawer`:e.paid_via===`vault`?o(e,l,t):`Paid - from the cash drawer`:(e==null?void 0:e.payment_terms)===`paid`?`Paid upfront - nothing due on delivery`:(e==null?void 0:e.payment_terms)===`terms`?`On terms - to be paid later (see Suppliers you owe)`:(e==null?void 0:e.payment_terms)===`cod`?`COD - due on delivery`:(e==null?void 0:e.status)===`received`?`Unpaid`:null}function v(n,r,i,o){let s=new t(r);s.align(`center`).bold(!0).size(2).line(`RECEIVING`).size(1),s.line(n.shopName||``).bold(!1),s.line(`Purchase order #${n.poId}`),s.align(`left`).rule(),n.supplier&&s.pair(`Supplier`,n.supplier),s.pair(`Received`,n.receivedAt.toLocaleString()),n.payment&&(s.line(`Payment:`),s.bold(!0).line(n.payment).bold(!1)),s.rule();for(let e of n.lines){let t=e.packLabel?`${e.packs} ${e.packLabel}`:`${e.packs}x`;s.pair(`${t} ${e.name}`,a(Math.round(e.costPerPackCents*e.packs),i)),e.unitsPerPack&&s.line(`   ${e.unitsPerPack} ${e.unit} per ${e.packLabel||`pack`} @ ${a(e.costPerPackCents,i)}`),Number(e.discountCents)>0&&s.line(`   less ${a(Number(e.discountCents),i)} discount`),e.cold&&s.line(`   KEEP COLD`),e.orderedPacks!=null&&Number(e.orderedPacks)!==Number(e.packs)&&s.bold(!0).line(`   ** received ${e.packs} of ${e.orderedPacks} ordered`).bold(!1)}return Number(n.discountCents)>0&&s.pair(`Supplier discount`,`-`+a(Number(n.discountCents),i)),s.rule(`=`),s.bold(!0).pair(`TOTAL`,a(n.totalCents,i)).bold(!1),n.notes&&(s.rule(),s.line(`Notes:`),s.line(n.notes)),s.rule(),s.line(``),s.line(n.receivedBy?`Received by: ${n.receivedBy}`:e(`Received by`,s.cols)),s.line(``),s.line(e(`Signature`,s.cols)),s.line(``),s.line(e(`Delivered by`,s.cols)),s.line(``),s.line(e(`Checked by`,s.cols)),s.line(``),s.align(`center`).line(`Staple the supplier's receipt to this.`),s.finish(o),s.base64()}function y(e,t){let n=e=>u(a(e,t));return`<!doctype html><html><head><meta charset="utf-8">
    <title>Receiving Report · PO #${u(e.poId)}</title>
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
    <div class="sub">${u(e.shopName)} · Purchase order #${u(e.poId)}${e.supplier?` · `+u(e.supplier):``}</div>
    <hr/>
    <div>Received: ${u(e.receivedAt.toLocaleString())}</div>
    ${e.payment?`<div>Payment: <b>${u(e.payment)}</b></div>`:``}
    ${e.notes?`<div>Notes: ${u(e.notes)}</div>`:``}
    <hr/>
    <table>
      <thead><tr><th>Item</th><th class="r">Packs</th><th class="r">Units</th><th class="r">Cost/pack</th><th class="r">Total</th></tr></thead>
      <tbody>
        ${e.lines.map(e=>{var t;return`<tr><td>${u(e.name)}${e.cold?` <b>(KEEP COLD)</b>`:``}${e.lot||e.expiry?`<br/><small>${[e.lot?`Lot `+u(e.lot):``,e.expiry?`Exp `+u(String(e.expiry).slice(0,10)):``].filter(Boolean).join(` · `)}</small>`:``}${Number(e.discountCents)>0?`<br/><small>less ${n(Number(e.discountCents))} discount</small>`:``}${e.orderedPacks!=null&&Number(e.orderedPacks)!==Number(e.packs)?`<br/><b>** received ${u(e.packs)} of ${u(e.orderedPacks)} ordered</b>`:``}</td><td class="r">${u(e.packs)}${e.packLabel?` `+u(e.packLabel):``}</td><td class="r">${u((t=e.unitsPerPack)==null?``:t)} ${u(e.unit)}</td><td class="r">${n(e.costPerPackCents)}</td><td class="r">${n(Math.round(e.costPerPackCents*e.packs))}</td></tr>`}).join(``)}
        ${Number(e.discountCents)>0?`<tr><td colspan="4">Supplier discount</td><td class="r">-${n(Number(e.discountCents))}</td></tr>`:``}
        <tr class="tot"><td colspan="4">TOTAL</td><td class="r">${n(e.totalCents)}</td></tr>
      </tbody>
    </table>
    <div class="sign">Received by: ${u(e.receivedBy||d)}</div>
    <div class="sign">Signature: ${d}</div>
    <div class="sign">Delivered by: ${d}</div>
    <div class="sign">Checked by: ${d}</div>
    <hr/>
    <div class="sub">Attach the supplier's receipt to this report. Printed ${u(new Date().toLocaleString())}</div>
  </body></html>`}async function b(e,t,a={}){var o;let s=t.currency_symbol||`P`,c=i(t,`receipt`);if(c)return await n(c.address,v(e,c.widthMm,s,r(c))),!0;if(a.auto)return!1;let l=await window.ember.printing.printHtml(y(e,s),`receipt`);if(l&&l.ok===!1)throw Error((o=l.error)==null?`check the printer in Settings`:o);return!0}function x(e,t){var n,r,i,a,s,u,d,f,p,m;let g=((n=e==null?void 0:e.items)==null?[]:n).map(e=>{var n,r,i,a,o,s,c,l,u,d,f;let p=e.received_packs==null?null:Number(e.received_packs),m=Number((n=e.packs)==null?0:n);return{name:(r=(i=e.ingredient_name)==null?e.name:i)==null?`#${e.ingredient_id}`:r,packs:p==null?m:p,orderedPacks:p!=null&&p!==m?m:null,unitsPerPack:e.units_per_pack==null?null:Number(e.units_per_pack),unit:(a=(o=e.unit)==null?(s=t.unitOf)==null?void 0:s.call(t,Number(e.ingredient_id)):o)==null?``:a,packLabel:h(e.units_per_pack==null?null:Number(e.units_per_pack),(c=t.packOf)==null?void 0:c.call(t,Number(e.ingredient_id))),costPerPackCents:Number((l=e.cost_per_pack_cents)==null?0:l),lot:(u=e.lot_code)==null?null:u,cold:!!((d=t.coldOf)!=null&&d.call(t,Number(e.ingredient_id))),expiry:(f=e.expiry)==null?null:f,discountCents:Math.max(0,Math.round(Number(e.discount_cents)||0))}}),v=(r=(i=e==null?void 0:e.received_at)==null?e==null?void 0:e.created_at:i)==null?null:r;return{shopName:t.shopName,poId:(a=e==null?void 0:e.id)==null?`?`:a,supplier:(s=e==null?void 0:e.supplier_name)==null?null:s,receivedAt:v?new Date(String(v)+(String(v).includes(`Z`)||String(v).includes(`+`)?``:`Z`)):new Date,receivedBy:t.receivedBy,notes:(u=e==null?void 0:e.notes)==null?null:u,payment:t.payVia===`drawer`?`Paid - from the cash drawer`:t.payVia===`bank`?`Paid - bank / ${(d=t.bankWord)==null?`GCash`:d}, not from the drawer`:t.payVia===`vault`?o(c(e==null?{}:e),l,(f=t.bankWord)==null?`GCash`:f):_(e,(p=t.bankWord)==null?`GCash`:p),lines:g,discountCents:Math.max(0,Math.round(Number(e==null?void 0:e.discount_cents)||0)),totalCents:Number((m=e==null?void 0:e.total_cost_cents)==null?g.reduce((e,t)=>e+Math.round(t.costPerPackCents*t.packs),0):m)}}export{y as a,b as i,g as n,x as o,m as r,h as t};