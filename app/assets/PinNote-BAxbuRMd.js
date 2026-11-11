import{t as e}from"./jsx-runtime-C3cWAN_r.js";import{a as t}from"./format-CQodIVoS.js";import{$l as n,Ad as r,Dd as i,Or as a,Tr as o,Yl as s,au as c,bd as l,eu as u,jd as d,kr as f,na as p,nd as m,wr as h}from"./index.web-PYxaYZEa.js";var g=e=>String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`);function _(e,n,a,s){let c=new i(n);c.align(`center`).bold(!0).size(2).line(`DELIVERY`).size(1),c.line(e.shopName||``).bold(!1),e.shopPhone&&c.line(e.shopPhone),c.align(`left`).rule(),c.pair(`Order`,e.pickupLabel&&e.pickupLabel!==e.orderNumber?`${e.pickupLabel} (${e.orderNumber})`:e.orderNumber),c.pair(`Date`,e.at.toLocaleString()),e.deliverAt&&c.pair(`Deliver at`,e.deliverAt),e.riderName&&c.pair(`Rider`,e.riderName),c.rule(),c.bold(!0).line(`DELIVER TO`).bold(!1),e.customerName&&c.line(e.customerName),e.customerPhone&&c.line(e.customerPhone);for(let t of String(e.address??``).split(/\n+/))t.trim()&&c.line(t.trim());if(e.pinMoved)for(let e of d(o,c.cols))c.line(e);e.notes&&(c.line(``),c.line(`Note: `+e.notes)),c.rule();for(let t of e.items){c.line(`${t.quantity}x ${t.name}${t.variant?`, `+t.variant:``}`);for(let e of t.extras??[])for(let t of d(e,Math.max(8,c.cols-2)))c.line(`  `+t)}if(c.rule(),e.collect){c.bold(!0).size(2).line(`COLLECT`).line(t(e.collectCents,a)).size(1).bold(!1);for(let t of d(v(e,a),c.cols))c.line(t)}else c.bold(!0).size(2).line(`PAID`).size(1).bold(!1),c.line(`Paid already, collect NOTHING`);return c.line(``),c.line(r(`Received by`,c.cols)),c.finish(s),c.base64()}function v(e,n){return e.collectCents<e.totalCents?`Part paid, order total ${t(e.totalCents,n)}`:`Cash on delivery`}function y(e,n){let r=(e,t)=>`<div class="row"><span>${g(e)}</span><span>${g(t)}</span></div>`;return`<!doctype html><html><head><meta charset="utf-8">
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
    ${e.pinMoved?`<div style="margin-top:6px;font-weight:bold">${g(o)}</div>`:``}
    ${e.notes?`<div style="margin-top:6px">Note: ${g(e.notes)}</div>`:``}
    <hr/>
    ${e.items.map(e=>`<div>${g(e.quantity)}× ${g(e.name)}${e.variant?`, `+g(e.variant):``}</div>`+(e.extras??[]).map(e=>`<div style="padding-left:14px;font-size:11px">${g(e)}</div>`).join(``)).join(``)}
    <hr/>
    ${e.collect?`<div class="big">COLLECT ${g(t(e.collectCents,n))}</div><div class="sub">${g(v(e,n))}</div>`:`<div class="big">PAID</div><div class="sub">Paid already, collect nothing</div>`}
    <div class="sign">Received by: ______________________</div>
  </body></html>`}function b(e){let t=h(e);return{orderNumber:e.order_number,pickupLabel:e.pickup_label??null,at:e.created_at?new Date(e.created_at):new Date,customerName:e.customer_note||e.customer_name||null,customerPhone:e.customer_phone||e.customer_contact_phone||null,address:e.delivery_address??null,items:(e.items??[]).filter(e=>!p(e)).map(e=>{let t={quantity:e.quantity,name:e.name_snapshot,variant:e.variant_label??null},n=[e.meal_choices?.length?`> `+l(e.meal_choices):``,e.modifier_ids?.length?`+ `+s(e.modifier_ids):``,e.notes?`Note: `+String(e.notes):``].filter(e=>e&&e!==`+ `&&e!==`> `);return n.length&&(t.extras=n),t}),totalCents:(e.total_cents??0)+Math.max(0,e.tip_cents??0),collectCents:t,collect:t>0,riderName:e.rider_name??null,notes:e.notes??null,pinMoved:a(e.delivery_address,e.delivery_pin_moved),deliverAt:m(e)?.label??null}}async function x(e){let t=await window.ember.settings.getAll(),r={...e,shopName:t.restaurant_name??``,shopPhone:t.shop_phone??null},i=t.currency_symbol||`P`,a=u(t,`receipt`);if(a){await n(a.address,_(r,a.widthMm,i,c(a)));return}let o=await window.ember.printing.printHtml(y(r,i),`receipt`);if(o&&o.ok===!1)throw Error(o.error??`check the printer in Settings`)}var S=e();function C({address:e,shopLat:t,shopLng:n,moved:r=!1,className:i=``}){let a=f(e,t,n,r);return a?a.warn?(0,S.jsx)(`span`,{className:`block text-xs text-amber-300 font-semibold ${i}`,children:a.text}):(0,S.jsx)(`span`,{className:`block text-xs text-white/50 ${i}`,children:a.text}):null}export{x as n,b as r,C as t};