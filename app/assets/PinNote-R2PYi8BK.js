import{t as e}from"./jsx-runtime-Wy9s6hX0.js";import{a as t}from"./format-CQodIVoS.js";import{$l as n,Dd as r,Ed as i,Xi as a,_d as o,cu as s,dr as c,ed as l,iu as u,or as d,ru as f,sr as p,ur as m,wd as h}from"./index.web-CrJlqFJl.js";var g=e=>String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`);function _(e,n,a,o){let s=new h(n);s.align(`center`).bold(!0).size(2).line(`DELIVERY`).size(1),s.line(e.shopName||``).bold(!1),e.shopPhone&&s.line(e.shopPhone),s.align(`left`).rule(),s.pair(`Order`,e.pickupLabel&&e.pickupLabel!==e.orderNumber?`${e.pickupLabel} (${e.orderNumber})`:e.orderNumber),s.pair(`Date`,e.at.toLocaleString()),e.deliverAt&&s.pair(`Deliver at`,e.deliverAt),e.riderName&&s.pair(`Rider`,e.riderName),s.rule(),s.bold(!0).line(`DELIVER TO`).bold(!1),e.customerName&&s.line(e.customerName),e.customerPhone&&s.line(e.customerPhone);for(let t of String(e.address??``).split(/\n+/))t.trim()&&s.line(t.trim());if(e.pinMoved)for(let e of r(p,s.cols))s.line(e);e.notes&&(s.line(``),s.line(`Note: `+e.notes)),s.rule();for(let t of e.items){s.line(`${t.quantity}x ${t.name}${t.variant?`, `+t.variant:``}`);for(let e of t.extras??[])for(let t of r(e,Math.max(8,s.cols-2)))s.line(`  `+t)}if(s.rule(),e.collect){s.bold(!0).size(2).line(`COLLECT`).line(t(e.collectCents,a)).size(1).bold(!1);for(let t of r(v(e,a),s.cols))s.line(t)}else s.bold(!0).size(2).line(`PAID`).size(1).bold(!1),s.line(`Paid already, collect NOTHING`);return s.line(``),s.line(i(`Received by`,s.cols)),s.finish(o),s.base64()}function v(e,n){return e.collectCents<e.totalCents?`Part paid, order total ${t(e.totalCents,n)}`:`Cash on delivery`}function y(e,n){let r=(e,t)=>`<div class="row"><span>${g(e)}</span><span>${g(t)}</span></div>`;return`<!doctype html><html><head><meta charset="utf-8">
    <title>Delivery ${g(e.orderNumber)}</title>
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
    <div class="sub">${g(e.shopName)}${e.shopPhone?` - `+g(e.shopPhone):``}</div>
    <hr/>
    ${r(`Order`,e.pickupLabel&&e.pickupLabel!==e.orderNumber?`${e.pickupLabel} (${e.orderNumber})`:e.orderNumber)}
    ${r(`Date`,e.at.toLocaleString())}
    ${e.deliverAt?r(`Deliver at`,e.deliverAt):``}
    ${e.riderName?r(`Rider`,e.riderName):``}
    <hr/>
    <div><b>DELIVER TO</b></div>
    <div class="addr">${e.customerName?g(e.customerName)+`<br/>`:``}${e.customerPhone?g(e.customerPhone)+`<br/>`:``}${g(e.address??``).replace(/\n/g,`<br/>`)}</div>
    ${e.pinMoved?`<div style="margin-top:6px;font-weight:bold">${g(p)}</div>`:``}
    ${e.notes?`<div style="margin-top:6px">Note: ${g(e.notes)}</div>`:``}
    <hr/>
    ${e.items.map(e=>`<div>${g(e.quantity)}× ${g(e.name)}${e.variant?`, `+g(e.variant):``}</div>`+(e.extras??[]).map(e=>`<div style="padding-left:14px;font-size:11px">${g(e)}</div>`).join(``)).join(``)}
    <hr/>
    ${e.collect?`<div class="big">COLLECT ${g(t(e.collectCents,n))}</div><div class="sub">${g(v(e,n))}</div>`:`<div class="big">PAID</div><div class="sub">Paid already, collect nothing</div>`}
    <div class="sign">Received by: ______________________</div>
  </body></html>`}function b(e){let t=d(e);return{orderNumber:e.order_number,pickupLabel:e.pickup_label??null,at:e.created_at?new Date(e.created_at):new Date,customerName:e.customer_note||e.customer_name||null,customerPhone:e.customer_phone||e.customer_contact_phone||null,address:e.delivery_address??null,items:(e.items??[]).filter(e=>!a(e)).map(e=>{let t={quantity:e.quantity,name:e.name_snapshot,variant:e.variant_label??null},r=[e.meal_choices?.length?`> `+o(e.meal_choices):``,e.modifier_ids?.length?`+ `+n(e.modifier_ids):``,e.notes?`Note: `+String(e.notes):``].filter(e=>e&&e!==`+ `&&e!==`> `);return r.length&&(t.extras=r),t}),totalCents:(e.total_cents??0)+Math.max(0,e.tip_cents??0),collectCents:t,collect:t>0,riderName:e.rider_name??null,notes:e.notes??null,pinMoved:m(e.delivery_address,e.delivery_pin_moved),deliverAt:l(e)?.label??null}}async function x(e){let t=await window.ember.settings.getAll(),n={...e,shopName:t.restaurant_name??``,shopPhone:t.shop_phone??null},r=t.currency_symbol||`P`,i=u(t,`receipt`);if(i){await f(i.address,_(n,i.widthMm,r,s(i)));return}let a=await window.ember.printing.printHtml(y(n,r),`receipt`);if(a&&a.ok===!1)throw Error(a.error??`check the printer in Settings`)}var S=e();function C({address:e,shopLat:t,shopLng:n,moved:r=!1,className:i=``}){let a=c(e,t,n,r);return a?a.warn?(0,S.jsx)(`span`,{className:`block text-xs text-amber-300 font-semibold ${i}`,children:a.text}):(0,S.jsx)(`span`,{className:`block text-xs text-white/50 ${i}`,children:a.text}):null}export{x as n,b as r,C as t};