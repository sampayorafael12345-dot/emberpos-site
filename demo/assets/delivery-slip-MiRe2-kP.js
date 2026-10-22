import{Et as e,S as t,Sr as n,_ as r,_t as i,dt as a,f as o,g as s,mt as c,pt as l}from"./csv-import-DCX7jKd8.js";var u=e=>Math.max(0,Math.round(Number(e)||0)),d=e=>String(e??``).trim().toLowerCase()===`cash`;function f(e){if(!e)return 0;let t=u(e.total_cents);if(Array.isArray(e.payments)&&e.payments.length)return Math.min(t,e.payments.filter(e=>d(e?.method)).reduce((e,t)=>e+u(t?.amount_cents),0));let n=String(e.payment_method??``).split(`+`).map(e=>e.trim().toLowerCase()).filter(Boolean);return n.includes(`cash`)?n.every(e=>e===`cash`)||e.cash_tendered_cents==null?t:Math.min(t,Math.max(0,u(e.cash_tendered_cents)-u(e.change_cents))):0}function p(e){if(!e||e.status===`voided`)return 0;let t=u(e.total_cents),n=u(e.tip_cents),r=u(e.prepaid_cents);if(e.status===`paid`||e.paid_at){let t=f(e);return t<=0?0:t+(r>0?0:n)}return Math.max(0,t+n-r-u(e.deposit_cents))}var m=e=>String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`);function h(e,t,r,i){let o=new a(t);o.align(`center`).bold(!0).size(2).line(`DELIVERY`).size(1),o.line(e.shopName||``).bold(!1),e.shopPhone&&o.line(e.shopPhone),o.align(`left`).rule(),o.pair(`Order`,e.pickupLabel&&e.pickupLabel!==e.orderNumber?`${e.pickupLabel} (${e.orderNumber})`:e.orderNumber),o.pair(`Date`,e.at.toLocaleString()),e.riderName&&o.pair(`Rider`,e.riderName),o.rule(),o.bold(!0).line(`DELIVER TO`).bold(!1),e.customerName&&o.line(e.customerName),e.customerPhone&&o.line(e.customerPhone);for(let t of String(e.address??``).split(/\n+/))t.trim()&&o.line(t.trim());e.notes&&(o.line(``),o.line(`Note: `+e.notes)),o.rule();for(let t of e.items){o.line(`${t.quantity}x ${t.name}${t.variant?`, `+t.variant:``}`);for(let e of t.extras??[])for(let t of c(e,Math.max(8,o.cols-2)))o.line(`  `+t)}if(o.rule(),e.collect){o.bold(!0).size(2).line(`COLLECT`).line(n(e.collectCents,r)).size(1).bold(!1);for(let t of c(g(e,r),o.cols))o.line(t)}else o.bold(!0).size(2).line(`PAID`).size(1).bold(!1),o.line(`Paid already, collect NOTHING`);return o.line(``),o.line(l(`Received by`,o.cols)),o.finish(i),o.base64()}function g(e,t){return e.collectCents<e.totalCents?`Part paid, order total ${n(e.totalCents,t)}`:`Cash on delivery`}function _(e,t){let r=(e,t)=>`<div class="row"><span>${m(e)}</span><span>${m(t)}</span></div>`;return`<!doctype html><html><head><meta charset="utf-8">
    <title>Delivery ${m(e.orderNumber)}</title>
    <style>
      body{font-family:ui-monospace,'Segoe UI',Roboto,sans-serif;padding:16px;max-width:340px;font-size:12px}
      h1{text-align:center;font-size:16px;margin:0}
      .sub{text-align:center;font-size:11px;color:#555;margin-bottom:6px}
      hr{border:0;border-top:1px dashed #888;margin:9px 0}
      .row{display:flex;justify-content:space-between;margin:2px 0;gap:10px}
      .big{font-weight:bold;font-size:17px;text-align:center;margin:6px 0}
      .addr{font-size:13px;line-height:1.45}
      .sign{margin-top:16px;font-size:11px}
    </style></head><body>
    <h1>DELIVERY</h1>
    <div class="sub">${m(e.shopName)}${e.shopPhone?` - `+m(e.shopPhone):``}</div>
    <hr/>
    ${r(`Order`,e.pickupLabel&&e.pickupLabel!==e.orderNumber?`${e.pickupLabel} (${e.orderNumber})`:e.orderNumber)}
    ${r(`Date`,e.at.toLocaleString())}
    ${e.riderName?r(`Rider`,e.riderName):``}
    <hr/>
    <div><b>DELIVER TO</b></div>
    <div class="addr">${e.customerName?m(e.customerName)+`<br/>`:``}${e.customerPhone?m(e.customerPhone)+`<br/>`:``}${m(e.address??``).replace(/\n/g,`<br/>`)}</div>
    ${e.notes?`<div style="margin-top:6px">Note: ${m(e.notes)}</div>`:``}
    <hr/>
    ${e.items.map(e=>`<div>${m(e.quantity)}× ${m(e.name)}${e.variant?`, `+m(e.variant):``}</div>`+(e.extras??[]).map(e=>`<div style="padding-left:14px;font-size:11px">${m(e)}</div>`).join(``)).join(``)}
    <hr/>
    ${e.collect?`<div class="big">COLLECT ${m(n(e.collectCents,t))}</div><div class="sub">${m(g(e,t))}</div>`:`<div class="big">PAID</div><div class="sub">Paid already, collect nothing</div>`}
    <div class="sign">Received by: ______________________</div>
  </body></html>`}function v(t){let n=p(t);return{orderNumber:t.order_number,pickupLabel:t.pickup_label??null,at:t.created_at?new Date(t.created_at):new Date,customerName:t.customer_note||t.customer_name||null,customerPhone:t.customer_phone||t.customer_contact_phone||null,address:t.delivery_address??null,items:(t.items??[]).filter(t=>!e(t)).map(e=>{let t={quantity:e.quantity,name:e.name_snapshot,variant:e.variant_label??null},n=[e.meal_choices?.length?`> `+i(e.meal_choices):``,e.modifier_ids?.length?`+ `+o(e.modifier_ids):``,e.notes?`Note: `+String(e.notes):``].filter(e=>e&&e!==`+ `&&e!==`> `);return n.length&&(t.extras=n),t}),totalCents:(t.total_cents??0)+Math.max(0,t.tip_cents??0),collectCents:n,collect:n>0,riderName:t.rider_name??null,notes:t.notes??null}}async function y(e){let n=await window.ember.settings.getAll(),i={...e,shopName:n.restaurant_name??``,shopPhone:n.shop_phone??null},a=n.currency_symbol||`P`,o=r(n,`receipt`);if(o){await s(o.address,h(i,o.widthMm,a,t(o)));return}let c=await window.ember.printing.printHtml(_(i,a),`receipt`);if(c&&c.ok===!1)throw Error(c.error??`check the printer in Settings`)}export{v as n,y as t};