const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.web-BriMF8gN.js","assets/jsx-runtime-Wy9s6hX0.js","assets/react-dom-g7hNCJoM.js","assets/preload-helper-yvApXQsr.js","assets/ConfirmDialog-CZitcxYu.js","assets/Icons-DINX8s3_.js","assets/Modal-DzevsArP.js","assets/shop-kind-QHA9WGj5.js","assets/region-DlIv0zBP.js","assets/format-CQodIVoS.js","assets/features-Nnnz-tA1.js","assets/dist-B5OXF2hh.js","assets/cds-home-Oyo9nQYL.js","assets/cds-lan-WbykIDpv.js","assets/cds-bluetooth-C1Hq_WtK.js","assets/index-CNo_BGY0.css"])))=>i.map(i=>d[i]);
import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{t as r}from"./preload-helper-yvApXQsr.js";import{l as i}from"./shop-kind-QHA9WGj5.js";import{a}from"./format-CQodIVoS.js";import{a as o,d as s,f as c,h as l,i as u,n as d,o as f,r as p,s as m,t as h,u as g}from"./cds-home-Oyo9nQYL.js";import{Gi as _,Vo as ee,Wi as v,ds as y,no as b,xr as x,xu as S}from"./index.web-BriMF8gN.js";import{n as C}from"./qr-qDfkLIMc.js";import{l as w,r as T}from"./wait-quote-BYFPjmuw.js";var E=e(t(),1);function te(e){return!e.hasMedia||e.moment!==`cart`||e.itemCount>0?!1:e.now-D(e)>=e.delayMs}function D(e){return Math.max(Math.min(e.quietSince,e.now),e.paidHoldUntil)}function O(){try{if(typeof performance<`u`&&typeof performance.now==`function`)return performance.now()}catch{}return Date.now()}function ne(e){return Math.min(3e5,15e3*2**Math.max(0,Math.min(10,e)))}var k=`ember.cds.idle.onglass`,re=`ember.cds.idle.poison`,A=864e5;function ie(e,t,n){let r={};for(let[t,i]of Object.entries(e||{}))i&&typeof i.strikes==`number`&&(i.until&&i.until<=n||(r[t]=i));if(t){let e=(r[t]?.strikes??0)+1;r[t]={strikes:e,until:e>=2?n+A:0}}return r}function j(e,t){let n={};for(let[r,i]of Object.entries(e||{}))i&&i.until>t&&(n[r]=i.until);return n}function M(){try{let e=JSON.parse(localStorage.getItem(`ember.cds.idle.poison`)||`{}`);return e&&typeof e==`object`&&!Array.isArray(e)?e:{}}catch{return{}}}function ae(e){try{localStorage.setItem(re,JSON.stringify(e))}catch{}}function N(e){try{e?localStorage.setItem(k,e):localStorage.removeItem(k)}catch{}}function P(e){let t=M();t[e]&&!t[e].until&&(delete t[e],ae(t))}var F=!1;function oe(e=Date.now()){if(!F){F=!0;let t=null;try{t=localStorage.getItem(k)}catch{}N(null),ae(ie(M(),t,e))}return j(M(),e)}function se(e){let t=M(),n=new Set(e),r=!1;for(let e of Object.keys(t))n.has(e)||(delete t[e],r=!0);r&&ae(t)}function ce(e,t,n){return e!==`left`&&e!==`right`||!(t>0)||!(n>0)?null:{dir:t>=n?`row`:`column`,adsFirst:e===`left`}}var I={delay_s:20,image_s:8,fit:`cover`,split:`off`},L=(e,t,n)=>Math.min(n,Math.max(t,e)),le=`ember.cds.idle.delay`,ue=`ember.cds.idle.image`,de=`ember.cds.idle.fit`,fe=`ember.cds.split`;function pe(){let e=(e,t,n,r)=>{try{let i=localStorage.getItem(e);if(i==null||i===``)return t;let a=Number(i);return Number.isFinite(a)?L(Math.round(a),n,r):t}catch{return t}},t=I.fit;try{localStorage.getItem(de)===`contain`&&(t=`contain`)}catch{}let n=I.split;try{let e=localStorage.getItem(fe);(e===`left`||e===`right`)&&(n=e)}catch{}return{delay_s:e(le,I.delay_s,5,120),image_s:e(ue,I.image_s,2,60),fit:t,split:n}}function me(e){try{e.delay_s!=null&&localStorage.setItem(le,String(L(Math.round(e.delay_s),5,120))),e.image_s!=null&&localStorage.setItem(ue,String(L(Math.round(e.image_s),2,60))),e.fit!=null&&localStorage.setItem(de,e.fit),e.split!=null&&localStorage.setItem(fe,e.split===`left`||e.split===`right`?e.split:`off`)}catch{}}function he(e){return e.slice().sort((e,t)=>(e.pos??e.addedAt)-(t.pos??t.addedAt)||e.addedAt-t.addedAt||e.id.localeCompare(t.id))}function ge(e,t,n){let r=e.indexOf(t),i=r+n;if(r<0||i<0||i>=e.length)return e.slice();let a=e.slice();return[a[r],a[i]]=[a[i],a[r]],a}function _e(e,t){let n=Number(e?.seconds);return Math.min(60,Math.max(2,Math.round(Number.isFinite(n)&&n>0?n:t)))*1e3}function R(e,t=``){let n=(e||``).toLowerCase();if(n.startsWith(`image/`))return`image`;if(n.startsWith(`video/`))return`video`;let r=(t.toLowerCase().match(/\.([a-z0-9]+)$/)||[,``])[1];return/^(jpe?g|png|gif|webp|avif|bmp|heic|heif)$/.test(r)?`image`:/^(mp4|m4v|webm|mov|mkv|ogv|3gp)$/.test(r)?`video`:`unplayable`}var ve=12e4;function ye(e,t,n){return e.filter(e=>R(e.type,e.name)!==`unplayable`&&!((t[e.id]??0)>n))}function be(e,t,n,r){let i=e.length,a=r==null?-1:e.findIndex(e=>e.id===r);for(let r=1;r<=i;r++){let o=e[(a+r+i)%i];if(R(o.type,o.name)!==`unplayable`&&!((t[o.id]??0)>n))return o}return null}function xe(e,t){let n=null;for(let r of Object.values(e))r>t&&(n==null||r<n)&&(n=r);return n}var Se=104857600,Ce=`ember-cds-idle`,z=1,B=`meta`,V=`blob`,H=class extends Error{};function U(){return new Promise((e,t)=>{let n;try{if(typeof indexedDB>`u`||!indexedDB){t(new H(`this device has no local storage for files`));return}n=indexedDB.open(Ce,z)}catch(e){t(new H(e?.message||`local file storage is blocked`));return}n.onupgradeneeded=()=>{let e=n.result;e.objectStoreNames.contains(B)||e.createObjectStore(B,{keyPath:`id`}),e.objectStoreNames.contains(V)||e.createObjectStore(V)},n.onsuccess=()=>e(n.result),n.onerror=()=>t(new H(n.error?.message||`local file storage would not open`)),n.onblocked=()=>t(new H(`another window has this screen open`))})}function W(e,t){return new Promise((n,r)=>{e.oncomplete=()=>n(t()),e.onabort=()=>r(e.error||Error(`the write was rolled back`)),e.onerror=()=>r(e.error||Error(`the write failed`))})}async function we(){let e=await U();try{let t=e.transaction(B,`readonly`),n=t.objectStore(B).getAll();return he(await W(t,()=>n.result||[]))}finally{e.close()}}async function Te(e){let t=await U();try{let n=t.transaction(B,`readwrite`),r=n.objectStore(B),i=r.getAll();i.onsuccess=()=>{let t=i.result||[],n=new Map((e.order??[]).map((e,t)=>[e,t]));for(let i of t){let t=!1;if(n.has(i.id)&&(i.pos=n.get(i.id),t=!0),e.seconds&&e.seconds.id===i.id){let n=Number(e.seconds.seconds);i.seconds=Number.isFinite(n)&&n>0?n:null,t=!0}t&&r.put(i)}},await W(n,()=>null)}finally{t.close()}}async function Ee(e){let t=await U();try{let n=t.transaction(V,`readonly`),r=n.objectStore(V).get(e);return await W(n,()=>r.result??null)}finally{t.close()}}function De(e,t){let n=0;for(let e of t)n=(n<<5)-n+e.charCodeAt(0)|0;return e.toString(36)+`-`+(n>>>0).toString(36)}var Oe=1920,ke=`too large for this tablet, export it at 1080p`;function Ae(e,t,n=Oe){if(!(e>0&&t>0))return null;let r=Math.max(e,t);if(r<=n)return null;let i=n/r;return{w:Math.max(1,Math.round(e*i)),h:Math.max(1,Math.round(t*i))}}function je(e,t){return e>0&&t>0?Math.max(e,t)>1920||Math.min(e,t)>1080:!1}async function Me(e){if(/gif$/i.test(e.type)||/\.gif$/i.test(e.name)||typeof createImageBitmap!=`function`||typeof document>`u`)return e;let t=null;try{t=await createImageBitmap(e);let n=Ae(t.width,t.height);if(!n)return e;let r=document.createElement(`canvas`);r.width=n.w,r.height=n.h;let i=r.getContext(`2d`);if(!i)return e;let a=/png$/i.test(e.type);i.drawImage(t,0,0,n.w,n.h);let o=await new Promise(e=>{try{r.toBlob(t=>e(t),a?`image/png`:`image/jpeg`,.85)}catch{e(null)}});return r.width=0,r.height=0,o&&o.size>0?o:e}catch{return e}finally{try{t?.close()}catch{}}}function Ne(e,t=8e3){return typeof document>`u`||typeof URL?.createObjectURL!=`function`?Promise.resolve(null):new Promise(n=>{let r=``,i=null,a=null,o=e=>{if(a&&clearTimeout(a),a=null,i){i.onloadedmetadata=null,i.onerror=null;try{i.removeAttribute(`src`),i.load()}catch{}}if(i=null,r){try{URL.revokeObjectURL(r)}catch{}r=``}n(e)};try{r=URL.createObjectURL(e),i=document.createElement(`video`),i.preload=`metadata`,i.muted=!0,i.onloadedmetadata=()=>o(i?{w:i.videoWidth,h:i.videoHeight}:null),i.onerror=()=>o(null),a=setTimeout(()=>o(null),t),i.src=r}catch{o(null)}})}async function Pe(e){let t=Array.from(e),n=[],r=[],i=[];for(let e of t){let t=R(e.type,e.name);if(t===`unplayable`){r.push({name:e.name,why:`a screen can only show a picture or a video`});continue}let n=t===`image`?await Me(e):e;if(t===`video`){let t=await Ne(e);if(t&&je(t.w,t.h)){r.push({name:e.name,why:ke});continue}}if(n.size>104857600){r.push({name:e.name,why:`too big, ${Math.round(e.size/1024/1024)}MB, and the limit is ${Se/1024/1024}MB`});continue}if(e.size===0){r.push({name:e.name,why:`the file is empty`});continue}let a=Date.now(),o={id:De(a+i.length,e.name+`:`+e.size),name:e.name||`Untitled`,type:n!==e&&n.type||e.type||(t===`video`?`video/mp4`:`image/jpeg`),size:n.size,addedAt:a+i.length};i.push({item:o,blob:n})}if(i.length){let e=await U();try{for(let{item:t,blob:a}of i)try{let r=e.transaction([B,V],`readwrite`);r.objectStore(B).put(t),r.objectStore(V).put(a,t.id),await W(r,()=>null),n.push(t)}catch(e){let n=/quota/i.test(e?.name+e?.message)?`this device has run out of room, remove something first`:e?.message||`the device would not keep it`;r.push({name:t.name,why:n})}}finally{e.close()}}return{added:n,refused:r}}async function Fe(e){let t=await U();try{let n=t.transaction([B,V],`readwrite`);n.objectStore(B).delete(e),n.objectStore(V).delete(e),await W(n,()=>null)}finally{t.close()}}async function Ie(){let e=await U();try{let t=e.transaction([B,V],`readwrite`);t.objectStore(B).clear(),t.objectStore(V).clear(),await W(t,()=>null)}finally{e.close()}}function Le(e){return e<1048576?Math.max(1,Math.round(e/1024))+`KB`:(e/1024/1024).toFixed(+(e<10485760))+`MB`}function Re(e,t,n,r){return n>0||!e||typeof t!=`string`||!t||t===e.src?!1:r-e.at>=0&&r-e.at<6e4}function ze(e,t,n){return typeof e==`string`&&e&&t>0?{src:e,at:n}:null}var G;function K(){if(G!==void 0)return G;G=null;try{let e=window.Capacitor;typeof e?.isNativePlatform==`function`&&e.isNativePlatform()&&e?.getPlatform?.()===`android`&&(e.registerPlugin?G=e.registerPlugin(`CdsMedia`):e.Plugins?.CdsMedia&&(G=e.Plugins.CdsMedia))}catch{G=null}return G}function Be(){return!!K()}var q=e=>({items:(e.items??[]).map(e=>({...e,size:Number(e.size)||0,addedAt:Number(e.addedAt)||0})),used:Number(e.used)||0,free:Number.isFinite(Number(e.free))?Number(e.free):null});async function J(){let e=await we(),t=null;try{let e=await navigator.storage?.estimate?.();e&&e.quota!=null&&e.usage!=null&&(t=Math.max(0,e.quota-e.usage))}catch{}return{items:e,used:e.reduce((e,t)=>e+t.size,0),free:t}}async function Ve(){let e=K();return e?q(await e.list()):J()}async function He(e){let t=K();if(t){let e=await t.pick();return{library:q(e),added:e.added??[],refused:e.refused??[],canceled:!!e.canceled}}if(!e||!e.length)return{library:await J(),added:[],refused:[],canceled:!0};let n=await Pe(e);return{library:await J(),added:n.added,refused:n.refused}}async function Ue(e){let t=K();return t?q(await t.remove({id:e})):(await Fe(e),J())}async function We(e){let t=K();return t?q(await t.order({ids:e})):(await Te({order:e}),J())}async function Ge(e,t){let n=K();return n?q(await n.seconds({id:e,seconds:t&&t>0?Math.round(t):0})):(await Te({seconds:{id:e,seconds:t}}),J())}async function Ke(e){if(K()&&e.file)return{url:`${window.location.origin}/_cds_media_/${encodeURIComponent(e.file)}`,release:()=>{}};let t=await Ee(e.id);if(!t)return null;let n=URL.createObjectURL(t);return{url:n,release:()=>URL.revokeObjectURL(n)}}async function qe(){let e=K();if(!e)return 0;let t=[];try{t=he(await we())}catch{return 0}if(!t.length)return 0;let n=0,r=!0;for(let[i,a]of t.entries())try{let t=await Ee(a.id);if(!t||R(a.type,a.name)===`unplayable`){await Fe(a.id);continue}let{id:r,file:o}=await e.importStart({name:a.name,type:a.type}),s=524288;for(let n=0;n<t.size;n+=s){let r=new Uint8Array(await t.slice(n,n+s).arrayBuffer()),i=``;for(let e=0;e<r.length;e+=32768)i+=String.fromCharCode(...r.subarray(e,e+32768));await e.importChunk({file:o,data:btoa(i)})}await e.importEnd({id:r,file:o,name:a.name,type:a.type,addedAt:a.addedAt||Date.now()+i}),await Fe(a.id),n++}catch{r=!1}if(r)try{await Ie()}catch{}return n}var Y=n(),Je=null,Ye={},Xe=new Set;function X(e,t,n=``){let r=`${e}:${t?.id??``}`;if(!Xe.has(r)){Xe.add(r);try{window.__emberReport?.(`[cds] ad failed stage=${e} type=${t?.type??``} size=${t?.size??``}${n?` `+n:``}`)}catch{}}}var Ze=12e4;function Z(){let e=Date.now(),t=O(),n={};for(let[r,i]of Object.entries(oe(e)))n[r]=t+(i-e);return n}function Qe({fit:e,imageMs:t,onEmpty:n,generation:r}){let[i,a]=(0,E.useState)(null),[o,s]=(0,E.useState)(null),c=(0,E.useRef)(Je).current,[l,u]=(0,E.useState)(()=>{let e=O(),t={};for(let[n,r]of Object.entries({...Ye,...Z()}))r>e&&(t[n]=r);return Ye=t,t}),[d,f]=(0,E.useState)(()=>O()),p=(0,E.useRef)([]),m=(0,E.useRef)({});p.current=i??[],m.current=l;let[h,g]=(0,E.useState)(null),[_,ee]=(0,E.useState)(0),v=(0,E.useRef)(null),y=(0,E.useRef)(null),b=(0,E.useCallback)(e=>{let t=y.current;if(t&&t!==e)try{t.pause(),t.removeAttribute(`src`),t.load()}catch{}y.current=e},[]),x=(0,E.useMemo)(()=>ye(i??[],l,d),[i,l,d]),S=x.find(e=>e.id===o)??be(i??[],l,d,o??c),C=(0,E.useRef)(null);C.current=S?.id??null;let w=!!h&&x.length===1&&x[0].id===h.id,[T,te]=(0,E.useState)(0),D=(0,E.useRef)(0);(0,E.useEffect)(()=>{let e=!0,t=null;return Ve().then(t=>{e&&(D.current=0,a(t.items),se(t.items.map(e=>e.id)))}).catch(n=>{e&&(X(`list`,void 0,String(n?.message??n)),t=setTimeout(()=>te(e=>e+1),ne(D.current)),D.current+=1)}),()=>{e=!1,t&&clearTimeout(t)}},[r,T]);let k=()=>s(be(p.current,m.current,O(),C.current)?.id??null),re=()=>{v.current=null,k()},A=e=>{let t=O(),n={...m.current,[e]:t+ve};m.current=n,Ye=n,v.current===e&&(v.current=null),N(null),u(n),f(t),s(be(p.current,n,t,e)?.id??null)};(0,E.useEffect)(()=>{let e=xe(l,d);if(e==null)return;let t=setTimeout(()=>f(O()),Math.max(250,e-O()));return()=>clearTimeout(t)},[l,d]),(0,E.useEffect)(()=>{if(!S||h?.id===S.id)return;let e=!0,t=S;return Ke(t).then(n=>{e?n?(N(t.id),s(t.id),g({id:t.id,kind:R(t.type,t.name)===`video`?`video`:`image`,url:n.url,release:n.release})):(X(`open-null`,t),A(t.id)):n?.release()}).catch(n=>{e&&(X(`open`,t,String(n?.message??n)),A(t.id))}),()=>{e=!1}},[S?.id]),(0,E.useEffect)(()=>{let e=h?.release;return()=>{e?.()}},[h?.url]);let ie=(0,E.useRef)(null);(0,E.useEffect)(()=>{if(!h)return;Je=h.id;let e=ie.current;ie.current=h.id,e&&e!==h.id&&P(e)},[h?.id]),(0,E.useEffect)(()=>{let e=()=>N(null);return window.addEventListener(`pagehide`,e),()=>{window.removeEventListener(`pagehide`,e),e()}},[]);let j=(0,E.useRef)(null);j.current=h?.id??null,(0,E.useEffect)(()=>{let e=()=>{document.visibilityState===`visible`?j.current&&N(j.current):N(null)};return document.addEventListener(`visibilitychange`,e),()=>document.removeEventListener(`visibilitychange`,e)},[]),(0,E.useEffect)(()=>{let e=h?.id;if(!e)return;let t=setTimeout(()=>P(e),Ze);return()=>clearTimeout(t)},[h?.id]),(0,E.useEffect)(()=>{i!==null&&!S&&h&&(N(null),g(null))},[i,S,h]),(0,E.useEffect)(()=>{if(!h||h.kind!==`image`||w||x.length===0)return;let e=p.current.find(e=>e.id===h.id),n=setTimeout(k,Math.max(2e3,_e(e,t/1e3)));return()=>clearTimeout(n)},[h?.id,h?.url,t,w,x.length,i]),(0,E.useEffect)(()=>{if(!h||h.kind!==`video`)return;let e=h.id,t=-1,n=O(),r=!1,i=0,a=0,o=setInterval(()=>{let o=y.current;if(!o)return;if(o.ended){if(!i){i=O();return}if(O()-i<5e3)return;if(i=0,w){try{o.currentTime=0,o.play().catch(()=>{})}catch{}return}re();return}if(i=0,o.currentTime!==t){t=o.currentTime,n=O(),r=!1,++a>=20&&v.current===e&&(v.current=null);return}if(O()-n<7500)return;if(!r){r=!0,o.play().catch(()=>{});return}if(O()-n<15e3)return;let s=p.current.find(t=>t.id===e),c=`t=${o.currentTime} rs=${o.readyState} ns=${o.networkState}`;X(v.current===e?`stall-rest`:`stall-reload`,s,c),v.current===e?A(e):(v.current=e,ee(e=>e+1))},3e3);return()=>clearInterval(o)},[h?.id,h?.url,_,w]);let M=i!==null&&!i.some(e=>R(e.type,e.name)!==`unplayable`);if((0,E.useEffect)(()=>{M&&n?.()},[M]),i===null||M||!S||!h)return null;let ae=()=>{let e=h.kind===`video`?y.current?.error:null;X(h.kind===`video`?`onerror`:`img-onerror`,p.current.find(e=>e.id===h.id),e?`code=${e.code} msg=${e.message??``}`:``),A(h.id)};return(0,Y.jsx)(`div`,{className:`cds-idle-media`,"aria-hidden":`true`,children:h.kind===`video`?(0,Y.jsx)(`video`,{ref:b,src:h.url,autoPlay:!0,muted:!0,playsInline:!0,loop:w,onEnded:w?void 0:re,onError:ae,style:{objectFit:e}},`${h.id}:${_}`):(0,Y.jsx)(`img`,{src:h.url,alt:``,onError:ae,style:{objectFit:e}},h.id)})}function $e({light:e,onChanged:t,onActivity:n,onPlayNow:r}){let[i,a]=(0,E.useState)(null),[o,s]=(0,E.useState)(pe),[c,l]=(0,E.useState)(!1),[u,d]=(0,E.useState)(null),[f,p]=(0,E.useState)(null),[m,h]=(0,E.useState)({}),[g]=(0,E.useState)(()=>oe()),_=(0,E.useRef)(null),v=Be(),y=e?`rgba(23,19,16,0.62)`:`rgba(255,255,255,0.62)`,b=e?`rgba(23,19,16,0.16)`:`rgba(255,255,255,0.16)`,x=e?`rgba(23,19,16,0.04)`:`rgba(255,255,255,0.05)`,S=i?.items??null,C=e=>{a(e),t()},w=()=>Ve().then(a).catch(e=>{a({items:[],used:0,free:null}),d(e?.message||`this device will not keep files`)});(0,E.useEffect)(()=>{w()},[]),(0,E.useEffect)(()=>{if(!c)return;let e=setInterval(n,1e4);return()=>clearInterval(e)},[c]),(0,E.useEffect)(()=>{if(!f)return;let e=setTimeout(()=>p(null),4e3);return()=>clearTimeout(e)},[f]);async function T(e){n(),l(!0),d(null);try{let t=await He(e);t.refused.length&&d(t.refused.map(e=>`${e.name}, ${e.why}`).join(`  ·  `)),C(t.library)}catch(e){d(e?.message||`this device will not keep files`),Ve().then(C).catch(()=>{})}finally{l(!1),n(),_.current&&(_.current.value=``)}}async function te(e,t){n(),l(!0),d(null);try{C(await e())}catch(e){d(e?.message||t)}finally{l(!1)}}let D=(e,t)=>{if(!S)return;let n=ge(S.map(e=>e.id),e,t);a(e=>e&&{...e,items:n.map(t=>e.items.find(e=>e.id===t)).filter(Boolean)}),te(()=>We(n),`the new order was not saved`)},O=e=>{f===e?(p(null),te(()=>Ue(e),`it would not come off`)):(p(e),n())};function ne(e){n();let r={...o,...e};s(r),me(e),t()}let k=(S??[]).some(e=>R(e.type,e.name)===`image`),re=[3,5,8,10,15,20,30,45,60].filter(e=>e>=2&&e<=60);return(0,Y.jsxs)(`div`,{className:`cds-idle-setup`,children:[(0,Y.jsx)(`div`,{className:`cds-idle-top`,children:(0,Y.jsxs)(`div`,{children:[(0,Y.jsx)(`div`,{className:`cds-idle-h`,children:`Customer screen settings`}),(0,Y.jsxs)(`p`,{className:`cds-idle-note`,style:{color:y},children:[`Your ads play full screen whenever nobody is ordering, and step aside the moment something is rung up. `,(0,Y.jsxs)(`b`,{children:[`They are kept on this `,v?`tablet`:`device`,` only`]}),`, nothing is uploaded, so another counter needs its own.`]})]})}),!v&&(0,Y.jsx)(`input`,{ref:_,type:`file`,multiple:!0,accept:`image/*,video/*`,className:`cds-idle-file`,onChange:e=>void T(e.target.files)}),(0,Y.jsxs)(`div`,{className:`cds-idle-section`,style:{background:x,borderColor:b},children:[(0,Y.jsxs)(`div`,{className:`cds-idle-sechead`,children:[(0,Y.jsx)(`span`,{className:`cds-idle-sub`,children:`Your ads`}),(0,Y.jsxs)(`span`,{className:`cds-idle-actions`,children:[(0,Y.jsx)(`button`,{type:`button`,className:`cds-exit-btn`,disabled:c,onClick:()=>{n(),v?T():_.current?.click()},children:c?`Working…`:`Add pictures or videos`}),r&&(0,Y.jsx)(`button`,{type:`button`,className:`cds-exit-btn cds-exit-go`,disabled:c||!S?.length,onClick:r,children:`Play my ads now`})]})]}),u&&(0,Y.jsx)(`p`,{className:`cds-idle-trouble`,style:{color:e?`#a3300b`:`#ffb08a`},children:u}),S===null?null:S.length===0?(0,Y.jsx)(`p`,{className:`cds-idle-note cds-idle-empty`,style:{color:y},children:`No ads yet - the screen shows the usual welcome page. Pick as many pictures and videos as you like; they play one after another and start again from the first.`}):(0,Y.jsx)(`ol`,{className:`cds-idle-list`,children:S.map((t,n)=>{let r=R(t.type,t.name)===`video`;return(0,Y.jsxs)(`li`,{style:{borderColor:b},children:[(0,Y.jsx)(`span`,{className:`cds-idle-pos`,style:{color:y},children:n+1}),(0,Y.jsx)(tt,{item:t,video:r,line:b,onPlayable:e=>h(n=>n[t.id]===!e?n:{...n,[t.id]:!e})}),(0,Y.jsxs)(`span`,{className:`cds-idle-what`,children:[(0,Y.jsx)(`span`,{className:`cds-idle-name`,children:t.name}),g[t.id]?(0,Y.jsxs)(`span`,{className:`cds-idle-meta cds-idle-bad`,style:{color:e?`#a3300b`:`#ffb08a`},children:[`This tablet could not play this · `,Le(t.size)]}):m[t.id]?(0,Y.jsxs)(`span`,{className:`cds-idle-meta cds-idle-bad`,style:{color:e?`#a3300b`:`#ffb08a`},children:[`Won't play here · `,Le(t.size)]}):(0,Y.jsxs)(`span`,{className:`cds-idle-meta`,style:{color:y},children:[r?`Video`:`Picture`,` · `,Le(t.size)]})]}),r?(0,Y.jsx)(`span`,{className:`cds-idle-secs cds-idle-secs-note`,style:{color:y},children:`Plays to the end`}):(0,Y.jsxs)(ee,{className:`cds-idle-secs`,"aria-label":`How long ${t.name} stays on screen`,value:t.seconds?String(t.seconds):``,disabled:c,onChange:e=>{let n=Number(e.target.value)||null;te(()=>Ge(t.id,n),`that was not saved`)},style:{borderColor:b},children:[(0,Y.jsxs)(`option`,{value:``,children:[`Usual (`,o.image_s,`s)`]}),re.map(e=>(0,Y.jsxs)(`option`,{value:String(e),children:[e,` seconds`]},e))]}),(0,Y.jsxs)(`span`,{className:`cds-idle-move`,children:[(0,Y.jsx)(`button`,{type:`button`,disabled:c||n===0,onClick:()=>D(t.id,-1),"aria-label":`Play ${t.name} earlier`,style:{borderColor:b},children:`▲`}),(0,Y.jsx)(`button`,{type:`button`,disabled:c||n===S.length-1,onClick:()=>D(t.id,1),"aria-label":`Play ${t.name} later`,style:{borderColor:b},children:`▼`})]}),(0,Y.jsx)(`button`,{type:`button`,className:`cds-idle-x`+(f===t.id?` is-armed`:``),disabled:c,onClick:()=>O(t.id),"aria-label":`Take ${t.name} off this screen`,children:f===t.id?`Tap again`:`Remove`})]},t.id)})}),S&&S.some(e=>m[e.id])&&(0,Y.jsx)(`p`,{className:`cds-idle-trouble`,style:{color:e?`#a3300b`:`#ffb08a`},children:`A video marked above will not play on this tablet, so the screen skips it. It is usually how the phone recorded it (HEVC, 4K or HDR). Save it again as an MP4 at 1080p or smaller - in CapCut, Export at 1080p; on an iPhone, set Settings › Camera › Formats to Most Compatible before recording - then remove this one and add the new copy.`}),S&&S.some(e=>g[e.id])&&(0,Y.jsx)(`p`,{className:`cds-idle-trouble`,style:{color:e?`#a3300b`:`#ffb08a`},children:`The screen closed while a file marked above was showing, so it is set aside for a day. It is usually too big for this tablet: a picture over 4000 pixels wide, or a 4K video. Save a smaller copy (a picture under 2000 pixels, a video as an MP4 at 1080p), then remove this one and add the new copy.`}),i&&(0,Y.jsxs)(`p`,{className:`cds-idle-note cds-idle-store`,style:{color:y},children:[S?.length?`${S.length} ${S.length===1?`ad`:`ads`}, ${Le(i.used)} on this ${v?`tablet`:`device`}`:`Nothing stored yet`,i.free==null?``:` · ${Le(i.free)} free`,v?` · kept in the app’s own storage, so they stay through restarts and updates. Only uninstalling the app, or clearing its storage in Android settings, removes them.`:` · kept by this browser on this device. Clearing the browser’s data removes them.`]})]}),(0,Y.jsxs)(`div`,{className:`cds-idle-section`,style:{background:x,borderColor:b},children:[(0,Y.jsx)(`div`,{className:`cds-idle-sub`,children:`How they play`}),(0,Y.jsxs)(`div`,{className:`cds-idle-rows`,children:[(0,Y.jsxs)(`div`,{className:`cds-idle-row`,children:[(0,Y.jsx)(`span`,{children:`Screen layout`}),(0,Y.jsx)(`span`,{className:`cds-idle-seg`,children:[[`off`,`Full screen`],[`left`,`Ads on the left`],[`right`,`Ads on the right`]].map(([e,t])=>(0,Y.jsx)(`button`,{type:`button`,className:`cds-idle-segbtn`+(o.split===e?` is-on`:``),style:{borderColor:b},onClick:()=>ne({split:e}),children:t},e))})]}),(0,Y.jsxs)(`label`,{className:`cds-idle-row`,children:[(0,Y.jsx)(`span`,{children:`Start after a sale, once the screen has been quiet for`}),(0,Y.jsxs)(`span`,{className:`cds-idle-num`,children:[(0,Y.jsx)(`input`,{type:`number`,inputMode:`numeric`,min:5,max:120,value:o.delay_s,onChange:e=>ne({delay_s:Number(e.target.value)||5}),style:{borderColor:b,color:`inherit`}}),(0,Y.jsx)(`span`,{style:{color:y},children:`seconds`})]})]}),k&&(0,Y.jsxs)(`label`,{className:`cds-idle-row`,children:[(0,Y.jsx)(`span`,{children:`Usual time for each picture`}),(0,Y.jsxs)(`span`,{className:`cds-idle-num`,children:[(0,Y.jsx)(`input`,{type:`number`,inputMode:`numeric`,min:2,max:60,value:o.image_s,onChange:e=>ne({image_s:Number(e.target.value)||2}),style:{borderColor:b,color:`inherit`}}),(0,Y.jsx)(`span`,{style:{color:y},children:`seconds`})]})]}),(0,Y.jsxs)(`div`,{className:`cds-idle-row`,children:[(0,Y.jsx)(`span`,{children:`Fit to the screen`}),(0,Y.jsx)(`span`,{className:`cds-idle-seg`,children:[[`cover`,`Fill, crop the edges`],[`contain`,`Show all of it`]].map(([e,t])=>(0,Y.jsx)(`button`,{type:`button`,className:`cds-idle-segbtn`+(o.fit===e?` is-on`:``),style:{borderColor:b},onClick:()=>ne({fit:e}),children:t},e))})]})]}),(0,Y.jsx)(`p`,{className:`cds-idle-note`,style:{color:y,marginBottom:0},children:`Videos play without sound, a screen nobody touches cannot be given permission to make a noise. Keep this tablet plugged in: at a normal shop it is on about ten hours a day.`})]})]})}var Q=Promise.resolve();function et(e){Q=Q.then(()=>new Promise(t=>{let n=!1,r=setTimeout(()=>i(),2e4),i=()=>{n||(n=!0,clearTimeout(r),t())};try{e(i)}catch{i()}}))}function tt({item:e,video:t,line:n,onPlayable:r}){let[i,a]=(0,E.useState)(null),o=(0,E.useRef)(null);return(0,E.useEffect)(()=>{let n=null,i=!0,s=null,c=null;return Ke(e).then(e=>{e&&(i?(n=e.release,et(t?t=>{if(c=t,!i){t();return}s=document.createElement(`video`),s.muted=!0,s.playsInline=!0,s.preload=`metadata`;let n=!1,a=e=>{!n&&i&&(n=!0,r?.(e))},l=setTimeout(()=>{a(!1),u()},15e3),u=()=>{clearTimeout(l);try{s?.removeAttribute(`src`),s?.load()}catch{}s=null,t()};s.onloadeddata=()=>{if(s&&!s.videoWidth)a(!1),u();else try{s.currentTime=Math.min(3,(s.duration||2)/4)}catch{a(!0),u()}},s.onseeked=()=>{let e=o.current;if(a(!!(s&&s.videoWidth)),e&&s&&s.videoWidth){e.width=176,e.height=Math.round(176*s.videoHeight/s.videoWidth)||110;try{e.getContext(`2d`)?.drawImage(s,0,0,e.width,e.height)}catch{}}u()},s.onerror=()=>{a(!1),u()},s.src=e.url}:t=>{if(c=t,!i){t();return}let r=()=>{i&&a(e.url),t()},s=window.createImageBitmap;typeof s!=`function`||typeof fetch!=`function`?r():fetch(e.url).then(e=>e.blob()).then(e=>s(e,{resizeWidth:176,resizeQuality:`low`})).then(e=>{let r=o.current;if(i&&r&&e.width){r.width=176,r.height=Math.round(176*e.height/e.width)||110;try{r.getContext(`2d`)?.drawImage(e,0,0,r.width,r.height)}catch{}}try{e.close()}catch{}n?.(),n=null,t()}).catch(r)})):e.release())}).catch(()=>{}),()=>{if(i=!1,s)try{s.removeAttribute(`src`),s.load()}catch{}c?.(),n?.()}},[e.id,e.file]),(0,Y.jsxs)(`span`,{className:`cds-idle-thumb`,style:{borderColor:n},children:[i?(0,Y.jsx)(`img`,{src:i,alt:``}):(0,Y.jsx)(`canvas`,{ref:o}),t&&(0,Y.jsx)(`span`,{className:`cds-idle-badge`,"aria-label":`Video`,children:(0,Y.jsx)(`svg`,{width:`10`,height:`10`,viewBox:`0 0 10 10`,fill:`currentColor`,"aria-hidden":`true`,children:(0,Y.jsx)(`path`,{d:`M2 1l7 4-7 4z`})})})]})}var nt=`
.cds-idle-setup { text-align: left; margin-bottom: 1.25rem; }
.cds-idle-h { font-size: 1.25rem; font-weight: 700; margin-bottom: 0.35rem; }
.cds-idle-note { font-size: 0.82rem; line-height: 1.5; margin: 0 0 0.85rem; }
.cds-idle-trouble { font-size: 0.82rem; line-height: 1.5; margin: 0.6rem 0 0; font-weight: 600; }
.cds-idle-file { position: absolute; width: 1px; height: 1px; opacity: 0; pointer-events: none; }
.cds-idle-section { border: 1px solid; border-radius: 0.8rem; padding: 0.9rem 1rem; margin-top: 0.9rem; }
.cds-idle-sechead { display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; flex-wrap: wrap; }
.cds-idle-sub { font-size: 0.95rem; font-weight: 700; }
.cds-idle-actions { display: inline-flex; gap: 0.5rem; flex-wrap: wrap; }
.cds-idle-empty { margin: 0.85rem 0 0.2rem; }
.cds-idle-store { margin: 0.75rem 0 0; }
.cds-idle-list { list-style: none; margin: 0.8rem 0 0; padding: 0; }
.cds-idle-list li {
  display: flex; align-items: center; gap: 0.65rem; height: 3.6rem;
  border-top: 1px solid; font-size: 0.85rem;
}
.cds-idle-pos { flex: none; width: 1.2rem; text-align: right; font-variant-numeric: tabular-nums; font-size: 0.8rem; }
.cds-idle-thumb {
  flex: none; width: 4.4rem; height: 2.75rem; border-radius: 0.35rem; border: 1px solid;
  overflow: hidden; background: #000000; display: block;
}
.cds-idle-thumb { position: relative; }
.cds-idle-thumb img, .cds-idle-thumb canvas { width: 100%; height: 100%; object-fit: cover; display: block; }
.cds-idle-badge {
  position: absolute; left: 0.25rem; bottom: 0.2rem; font-size: 0.55rem; line-height: 1;
  color: #ffffff; background: rgba(0,0,0,0.6); padding: 0.15rem 0.25rem; border-radius: 0.2rem;
}

.cds-idle-what { flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; gap: 0.1rem; }
.cds-idle-name { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-weight: 600; }
.cds-idle-meta { font-size: 0.74rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.cds-idle-secs {
  flex: none; width: 8.2rem; font: inherit; font-size: 0.8rem; color: inherit;
  padding: 0.45rem 0.4rem; border-radius: 0.45rem; border: 1px solid; background: transparent;
}
.cds-idle-secs option { color: #000000; }
.cds-idle-secs.cds-idle-secs-note { border: 0; font-size: 0.76rem; text-align: center; padding: 0; }
.cds-idle-move { flex: none; display: inline-flex; gap: 0.3rem; }
.cds-idle-move button {
  font: inherit; font-size: 0.8rem; color: inherit; width: 2.4rem; height: 2.4rem;
  border-radius: 0.45rem; border: 1px solid; background: transparent; cursor: pointer;
}
.cds-idle-move button:disabled { opacity: 0.25; cursor: default; }
.cds-idle-x {
  flex: none; width: 5.2rem; font: inherit; font-size: 0.8rem; font-weight: 600; color: inherit;
  background: transparent; border: 0; padding: 0.6rem 0.2rem; cursor: pointer;
  text-decoration: underline; text-underline-offset: 2px; opacity: 0.7; text-align: right;
}
.cds-idle-x.is-armed { color: #ff5c00; opacity: 1; }
.cds-idle-x:disabled { opacity: 0.3; cursor: default; }
.cds-idle-rows { display: flex; flex-direction: column; gap: 0.6rem; margin: 0.75rem 0 0.85rem; }
.cds-idle-row { display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; font-size: 0.85rem; }
.cds-idle-num { display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.8rem; flex: none; }
.cds-idle-num input {
  font: inherit; font-size: 0.9rem; width: 3.8rem; text-align: right;
  padding: 0.45rem 0.45rem; border-radius: 0.45rem; border: 1px solid;
  background: transparent; font-variant-numeric: tabular-nums;
}
.cds-idle-seg { display: inline-flex; gap: 0.35rem; flex: none; }
.cds-idle-segbtn {
  font: inherit; font-size: 0.78rem; font-weight: 600; color: inherit;
  padding: 0.5rem 0.7rem; border-radius: 0.45rem; border: 1px solid;
  background: transparent; cursor: pointer; opacity: 0.6;
}
.cds-idle-segbtn.is-on { opacity: 1; border-color: #ff5c00; color: #ff5c00; }
/* A narrow window (a phone, a browser half the screen wide): each ad takes two
   lines - what it is, then its controls under it - instead of one line with
   the name squeezed to nothing and Remove pushed off the edge. */
@media (max-width: 560px) {
  .cds-idle-list li { flex-wrap: wrap; height: auto; padding: 0.6rem 0; row-gap: 0.5rem; }
  .cds-idle-thumb { width: 3.6rem; }
  .cds-idle-what { flex: 1 1 calc(100% - 7.5rem); }
  .cds-idle-secs { margin-left: 1.85rem; flex: 1 1 0; width: auto; min-width: 0; }
  .cds-idle-secs.cds-idle-secs-note { text-align: left; }
  .cds-idle-x { width: auto; padding-left: 0.6rem; }
  .cds-idle-row { flex-wrap: wrap; }
}
`,rt=[{score:1,glyph:`:-(`,label:`Bad`},{score:2,glyph:`:-/`,label:`Not great`},{score:3,glyph:`:-|`,label:`OK`},{score:4,glyph:`:-)`,label:`Good`},{score:5,glyph:`:-D`,label:`Great`}],it=8e3,at=25e3,ot=14e3;function st({logo:e,size:t,className:n=``}){return e?(0,Y.jsx)(`img`,{src:e,alt:``,"aria-hidden":!0,draggable:!1,style:{height:t,width:`auto`,maxWidth:`70%`,objectFit:`contain`,borderRadius:Math.round(t*.12)},className:`select-none shrink-0 ${n}`}):(0,Y.jsx)(S,{size:t,className:n})}function ct(e,t){return e&&(e.items?.length??0)===0?e:{...e??t,mode:`cart`,items:[],subtotal_cents:0,discount_cents:0,total_cents:0,service_charge_cents:void 0,service_charge_label:void 0,tax_cents:void 0,tax_label:void 0,customer_name:null,stamps:void 0,stamps_required:void 0,ready_in_min:void 0,qr_image:void 0,qr_method:void 0,qr_amount_cents:void 0,paid_total_cents:void 0,change_cents:void 0}}function lt(){y(!0,`cds`);let[e,t]=(0,E.useState)(null),[n,r]=(0,E.useState)(``),[i,a]=(0,E.useState)(`live`),x=(0,E.useRef)(null),S=(0,E.useRef)(0),T=(0,E.useRef)(null),O=(0,E.useRef)(null),k=(0,E.useRef)(null),re=(0,E.useRef)(null),[A,ie]=(0,E.useState)(``),j=(0,E.useRef)(null);(0,E.useEffect)(()=>{let e=()=>{T.current&&(clearTimeout(T.current),T.current=null)},n=window.ember.display.onData(n=>{let r=n;r?.config&&(re.current=r.config),typeof r?.config?.shop_logo==`string`&&ie(r.config.shop_logo);let i=r?.mode??`cart`;if(i===`cart`){let n=r.items?.length??0;if(Re(j.current,r.src,n,Date.now())||(j.current=ze(r.src,n,Date.now()),x.current=r,Date.now()<S.current&&(r.items?.length??0)===0))return;e(),S.current=0,t(r)}else if(i===`endqr`){if(j.current=null,!x.current){t(e=>e?.mode===`qr`?null:e);return}e(),S.current=0,t(x.current)}else e(),i===`paid`&&(j.current=null,O.current=r,S.current=Date.now()+it,T.current=setTimeout(()=>{T.current=null,S.current=0,t(ct(x.current,r))},it)),t(r)});window.ember.settings.publicInfo().then(e=>r(e.restaurant_name)).catch(()=>{});let i=window.ember.display?.onLink?.(e=>a(e));return()=>{n(),e();try{i?.()}catch{}}},[]);let M={...w(e?.config??re.current),shop_logo:A},ae=e?.items??[],N=(0,E.useRef)(v()).current,[P,F]=(0,E.useState)(!1),[oe,se]=(0,E.useState)(!1),I=typeof window<`u`?window.ember?.auth:null,L=N&&typeof I?.verifyCapability==`function`&&typeof I?.loginUsers==`function`,[le,ue]=(0,E.useState)(!1),[de,fe]=(0,E.useState)([]),[me,he]=(0,E.useState)(``),[ge,_e]=(0,E.useState)(``),[R,ve]=(0,E.useState)(``),[ye,be]=(0,E.useState)(!1);(0,E.useEffect)(()=>{P||(ue(!1),_e(``),ve(``),be(!1))},[P]),(0,E.useEffect)(()=>{if(!P||!L||le)return;let e=!0;return Promise.resolve(I.loginUsers()).then(t=>{if(!e)return;let n=e=>e===`owner`?0:e===`manager`?1:2,r=[...t??[]].filter(e=>e&&e.username).sort((e,t)=>n(String(e.role))-n(String(t.role)));r.length===0?ue(!0):(fe(r),he(r[0].username))}).catch(()=>{e&&ve(`Could not check who may open this. Try again in a moment.`)}),()=>{e=!1}},[P,L,le]);async function xe(){if(me&&ge&&!ye){be(!0),ve(``);try{await I.verifyCapability(me,ge,`settings.write`)?(ue(!0),_e(``)):(ve(`That is not right, or that person cannot change settings.`),_e(``))}catch{ve(`Too many tries. Wait a minute, then try again.`),_e(``)}finally{be(!1)}}}(0,E.useEffect)(()=>{if(!P)return;let e=()=>F(!1),t=t=>{(t.key===`Escape`||t.key===`Esc`)&&e()};return document.addEventListener(`backbutton`,e),document.addEventListener(`keydown`,t),()=>{document.removeEventListener(`backbutton`,e),document.removeEventListener(`keydown`,t)}},[P]);let[Se,Ce]=(0,E.useState)(0),[z,B]=(0,E.useState)(pe),[V,H]=(0,E.useState)(!1),[U,W]=(0,E.useState)(!1),[we,Te]=(0,E.useState)(0),Ee=(0,E.useRef)(0);(0,E.useEffect)(()=>{let e=!0,t=null;return B(pe()),Ve().then(t=>{e&&(Ee.current=0,H(t.items.length>0))}).catch(()=>{e&&(t=setTimeout(()=>Te(e=>e+1),ne(Ee.current)),Ee.current+=1)}),()=>{e=!1,t&&clearTimeout(t)}},[we]),(0,E.useEffect)(()=>{let e=()=>{document.visibilityState===`visible`?(N&&f(!0),Te(e=>e+1)):N&&f(!1)},t=()=>{N&&f(!1)};return document.addEventListener(`visibilitychange`,e),window.addEventListener(`pagehide`,t),()=>{document.removeEventListener(`visibilitychange`,e),window.removeEventListener(`pagehide`,t)}},[N]),(0,E.useEffect)(()=>{if(!N)return;let e=null,t=()=>{e||(m(),e=setInterval(()=>m(),h))},n=()=>{e&&(clearInterval(e),e=null),m(!0)},r=()=>{document.visibilityState===`visible`?t():n()};return document.visibilityState!==`hidden`&&t(),document.addEventListener(`visibilitychange`,r),window.addEventListener(`pagehide`,n),()=>{document.removeEventListener(`visibilitychange`,r),window.removeEventListener(`pagehide`,n),n()}},[N]),(0,E.useEffect)(()=>{let e=!0;return qe().then(t=>{e&&t>0&&Te(e=>e+1)}).catch(()=>{}),()=>{e=!1}},[]);let[De,Oe]=(0,E.useState)(()=>Date.now()),ke=(0,E.useRef)(!0),[Ae,je]=(0,E.useState)(N),Me=(0,E.useRef)(null);(0,E.useEffect)(()=>{if(!N)return;let e=setTimeout(()=>je(!1),12e3);return()=>clearTimeout(e)},[N]);let[Ne,Pe]=(0,E.useState)(null),[Fe,Ie]=(0,E.useState)([]),[Le,G]=(0,E.useState)(!1),[K,Be]=(0,E.useState)(!1),[q,J]=(0,E.useState)(!1),[He,Ue]=(0,E.useState)(!1),We=(0,E.useRef)(null);if(We.current===null)try{We.current=localStorage.getItem(`ember.cds.idle.onglass`)||``}catch{We.current=``}(0,E.useEffect)(()=>{(N||d())&&c({paired:!N,send:dt,adNote:()=>ft(We.current||``)}).then(()=>Ie(s()))},[N]),(0,E.useEffect)(()=>{if(!N)return;let e=!0;return o().then(t=>{if(!e)return;Pe(t);let n=!1;try{n=localStorage.getItem(ut)===`1`}catch{}let r=t.available&&!t.isDefault&&!t.canRecoverRenderer;J(r),(t.available&&!t.isDefault&&!n||r)&&Be(!0)}),()=>{e=!1}},[N]),(0,E.useEffect)(()=>{if(!K)return;if(q){let e=setTimeout(()=>Be(!1),6e5);return()=>clearTimeout(e)}let e=setTimeout(()=>Be(!1),6e4);return()=>clearTimeout(e)},[K,q]);async function Ge(){Ue(!1),(await u()).opened?G(!0):Ue(!0);let e=await o();Pe(e),J(e.available&&!e.isDefault&&!e.canRecoverRenderer),g()}let Ke=e=>{try{localStorage.setItem(ut,`1`)}catch{}Be(!1),e&&Ge()};(0,E.useEffect)(()=>{if(!N||!P)return;let e=()=>{o().then(e=>{Pe(e),g()}),Ie(s())};e();let t=()=>{document.visibilityState===`visible`&&e()};return document.addEventListener(`visibilitychange`,t),()=>document.removeEventListener(`visibilitychange`,t)},[N,P]);let[Je,Ye]=(0,E.useState)(!1);(0,E.useEffect)(()=>{if(!Je)return;let e=setTimeout(()=>Ye(!1),6e3);return()=>clearTimeout(e)},[Je]),(0,E.useEffect)(()=>{if(!P)return;let e=setTimeout(()=>F(!1),12e4);return()=>clearTimeout(e)},[P,Se]);let Xe=()=>{P||Me.current||(Me.current=setTimeout(()=>F(!0),3e3))},X=()=>{Me.current&&clearTimeout(Me.current),Me.current=null};async function Ze(){Je?(se(!0),f(!1),m(!0),await p(),await _(),window.location.reload()):Ye(!0)}(0,E.useEffect)(()=>{let e=k.current;e&&(e.scrollTop=e.scrollHeight)},[ae.length]);let Z=M.theme===`light`,[Q,et]=(0,E.useState)(()=>({w:window.innerWidth,h:window.innerHeight}));(0,E.useEffect)(()=>{let e=()=>et({w:window.innerWidth,h:window.innerHeight});return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let tt=ce(z.split,Q.w,Q.h),rt=e?.mode??`cart`,lt=e?.items?.length??0,$=rt!==`cart`||lt>0;(0,E.useEffect)(()=>{b(`an order on the customer screen`,$)},[$]),(0,E.useEffect)(()=>{$!==ke.current&&(ke.current=$,$?W(!1):Oe(Date.now()))},[$]),(0,E.useEffect)(()=>{let e=null,t=()=>{let n=Date.now();if(De>n){Oe(n);return}let r=te({hasMedia:V,moment:rt,itemCount:lt,quietSince:De,paidHoldUntil:S.current,delayMs:z.delay_s*1e3,now:n});if(W(r),r||!V||$)return;let i=D({quietSince:De,paidHoldUntil:S.current,now:n});e=setTimeout(t,Math.max(250,i+z.delay_s*1e3-n))};return t(),()=>{e&&clearTimeout(e)}},[V,rt,lt,De,z.delay_s,$]);let[ht,gt]=(0,E.useState)(!1),[_t,vt]=(0,E.useState)(0);(0,E.useEffect)(()=>{(e?.mode??`cart`)===`cart`&&(gt(!1),vt(0))},[e?.mode]);let yt=e=>{if(gt(!0),vt(e),T.current&&O.current){clearTimeout(T.current);let n=O.current,r=e>=4&&M.review_url?at:ot;S.current=Date.now()+r,T.current=setTimeout(()=>{T.current=null,S.current=0,t(ct(x.current,n))},r)}try{let t=window.ember?.display;if(t?.csatRoute?.()===`till`){t.sendCsat?.(e);return}window.ember?.csat?.leave?.({score:e,source:`screen`,order_id:null})?.catch?.(()=>{})}catch{}},bt=(()=>{try{return window.ember?.display?.csatRoute?.()!==`none`}catch{return!0}})();return(0,Y.jsxs)(`div`,{className:`cds-page`,onPointerDown:Xe,onPointerUp:X,onPointerCancel:X,onPointerLeave:X,children:[(()=>{let t=(0,Y.jsx)(mt,{d:e,cfg:tt&&!V?{...M,promo:``,join_url:``}:M,fallbackName:n,listRef:k,link:i,onCsat:bt?yt:void 0,csatDone:ht,csatScore:_t});if(!tt)return t;let r=(0,Y.jsx)(`div`,{className:`cds-split-ads${Z?` is-light`:``}`,children:V&&!P?(0,Y.jsx)(Qe,{fit:z.fit,imageMs:z.image_s*1e3,generation:we,onEmpty:()=>H(!1)}):(0,Y.jsxs)(`div`,{className:`cds-split-sign`,style:{"--sv":`${(Math.min(Q.w,Q.h)/100).toFixed(2)}px`},children:[(0,Y.jsx)(st,{logo:A,size:Math.round(Math.max(48,Math.min(160,Math.min(Q.w,Q.h)*.16)))}),M.show_name&&(e?.restaurant||n)?(0,Y.jsx)(`div`,{className:`cds-split-name`,children:e?.restaurant||n}):null,M.promo?(0,Y.jsx)(`div`,{className:`cds-split-promo`,children:M.promo}):null,M.join_url?(0,Y.jsxs)(`div`,{className:`cds-split-join`,children:[(0,Y.jsx)(`div`,{className:`cds-qr`,dangerouslySetInnerHTML:{__html:C(M.join_url,4)}}),(0,Y.jsxs)(`span`,{children:[`Scan for your `,(0,Y.jsx)(`b`,{children:`loyalty card`})]})]}):null]})});return(0,Y.jsxs)(`div`,{className:`cds-split cds-split-${tt.dir}`,children:[tt.adsFirst?r:null,(0,Y.jsx)(`div`,{className:`cds-split-order`,children:t}),tt.adsFirst?null:r]})})(),U&&!P&&!tt&&(0,Y.jsx)(Qe,{fit:z.fit,imageMs:z.image_s*1e3,generation:we,onEmpty:()=>{W(!1),H(!1)}}),K&&!P&&(0,Y.jsxs)(`div`,{className:q?`cds-home-offer cds-home-must`:`cds-home-offer`,style:{background:Z?`#ffffff`:`#17191b`,color:Z?`#171310`:`#ffffff`},onPointerDown:e=>e.stopPropagation(),children:[(0,Y.jsx)(`div`,{className:`cds-exit-title`,children:q?`Set Ember as the home app`:`Open Ember by itself?`}),(0,Y.jsx)(`p`,{className:`cds-exit-note`,style:{color:Z?`rgba(23,19,16,0.62)`:`rgba(255,255,255,0.62)`},children:q?`This tablet’s Android cannot bring the customer screen back by itself. Make Ember its home app, or the screen stays closed after Android closes it.`:(0,Y.jsxs)(Y.Fragment,{children:[`Make Ember this tablet`,`’`,`s home app and the customer screen opens again by itself after a restart, an update or Android closing it.`]})}),(0,Y.jsxs)(`div`,{className:`cds-exit-actions`,children:[(0,Y.jsx)(`button`,{type:`button`,className:`cds-exit-btn`,onClick:()=>Ke(!1),children:`Not now`}),(0,Y.jsx)(`button`,{type:`button`,className:`cds-exit-btn cds-exit-go`,onClick:()=>Ke(!0),children:`Open Ember by itself`})]})]}),P&&L&&!le&&(0,Y.jsx)(`div`,{className:`cds-exit-veil`,"data-back-closes":``,style:{background:Z?`rgba(250,247,242,0.98)`:`rgba(10,11,12,0.98)`,zIndex:20},onPointerDown:e=>{e.stopPropagation(),Ce(e=>e+1)},children:(0,Y.jsxs)(`form`,{className:`cds-exit-box`,style:{color:Z?`#171310`:`#ffffff`},onSubmit:e=>{e.preventDefault(),xe()},children:[(0,Y.jsx)(`div`,{className:`cds-exit-title`,children:`Staff only`}),(0,Y.jsx)(`p`,{className:`cds-exit-note`,style:{color:Z?`rgba(23,19,16,0.62)`:`rgba(255,255,255,0.62)`},children:`Ask the owner or a manager to type their password to open the screen settings.`}),de.length>0&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(ee,{value:me,onChange:e=>he(e.target.value),"aria-label":`Who is opening this`,style:{font:`inherit`,fontSize:`1rem`,padding:`0.6rem`,borderRadius:`0.5rem`,width:`100%`,marginBottom:`0.6rem`},children:de.map(e=>(0,Y.jsx)(`option`,{value:e.username,children:e.full_name||e.username},e.username))}),(0,Y.jsx)(`input`,{type:`password`,value:ge,onChange:e=>_e(e.target.value),autoFocus:!0,"aria-label":`Password`,autoComplete:`off`,style:{font:`inherit`,fontSize:`1rem`,padding:`0.6rem`,borderRadius:`0.5rem`,width:`100%`,marginBottom:`0.6rem`}})]}),R&&(0,Y.jsx)(`p`,{className:`cds-exit-note`,role:`alert`,children:R}),(0,Y.jsxs)(`div`,{className:`cds-exit-actions`,children:[(0,Y.jsx)(`button`,{type:`button`,onClick:()=>F(!1),className:`cds-exit-btn`,children:`Cancel`}),de.length>0&&(0,Y.jsx)(`button`,{type:`submit`,disabled:ye||!ge,className:`cds-exit-btn cds-exit-go`,children:`Open`})]})]})}),P&&(!L||le)&&(0,Y.jsx)(`div`,{className:`cds-exit-veil`,"data-back-closes":``,style:{background:Z?`rgba(250,247,242,0.98)`:`rgba(10,11,12,0.98)`,zIndex:20},onPointerDown:e=>e.stopPropagation(),children:(0,Y.jsxs)(`div`,{className:`cds-exit-box cds-exit-scroll cds-exit-wide`,style:{color:Z?`#171310`:`#ffffff`},children:[(0,Y.jsx)($e,{light:Z,onChanged:()=>Te(e=>e+1),onActivity:()=>Ce(e=>e+1),onPlayNow:()=>{F(!1),Oe(Date.now()-z.delay_s*1e3-1e3)}}),N&&Ne?.available&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(`div`,{className:`cds-exit-title`,children:`If the tablet closes the screen`}),(0,Y.jsx)(`p`,{className:`cds-exit-note`,style:{color:Z?`rgba(23,19,16,0.62)`:`rgba(255,255,255,0.62)`},children:Ne.isDefault?`Ember is this tablet’s home app, so the screen opens again by itself after a restart, an update or Android closing it.`:He?`Open Settings › Apps › Default apps › Home app and pick Ember POS.`:Le?`Choose Ember POS as the home app on the page that opened, then come back here.`:Ne.canRecoverRenderer===!1?`This tablet’s Android cannot bring the screen back by itself. Make Ember its home app, or the screen stays closed after Android closes it.`:`Make Ember this tablet’s home app and the screen opens again by itself after a restart, an update or Android closing it.`}),!Ne.isDefault&&(0,Y.jsx)(`div`,{className:`cds-exit-actions`,children:(0,Y.jsx)(`button`,{type:`button`,className:Ne.canRecoverRenderer===!1?`cds-exit-btn cds-exit-go`:`cds-exit-btn`,onClick:()=>void Ge(),children:`Open Ember by itself`})})]}),N&&Fe.length>1&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(`div`,{className:`cds-exit-title`,children:`Recent starts`}),(0,Y.jsx)(`div`,{className:`cds-exit-note`,style:{color:Z?`rgba(23,19,16,0.62)`:`rgba(255,255,255,0.62)`},children:Fe.slice(0,5).map(e=>(0,Y.jsxs)(`div`,{children:[new Date(e.at).toLocaleString([],{month:`short`,day:`numeric`,hour:`numeric`,minute:`2-digit`}),` - `,l(e.why)]},e.at))})]}),N&&(0,Y.jsx)(`div`,{className:`cds-exit-title`,children:`This tablet is the customer screen`}),N&&(0,Y.jsx)(`p`,{className:`cds-exit-note`,style:{color:Z?`rgba(23,19,16,0.62)`:`rgba(255,255,255,0.62)`},children:`Turn it off to use this tablet normally again. The POS keeps working either way.`}),(0,Y.jsxs)(`div`,{className:`cds-exit-actions`,children:[(0,Y.jsx)(`button`,{type:`button`,onClick:()=>F(!1),disabled:oe,className:`cds-exit-btn`,children:`Done`}),N&&(0,Y.jsx)(`button`,{type:`button`,onClick:()=>void Ze(),disabled:oe,className:`cds-exit-btn cds-exit-go`,children:oe?`Turning off…`:Je?`Tap again to turn off`:`Turn it off`})]})]})}),(0,Y.jsx)(`style`,{children:pt+nt})]})}var ut=`ember.cds.homeOffered`;async function dt(e,t){try{let[{supabase:n},{cdsRole:i,tagPlatform:a}]=await Promise.all([r(()=>import(`./index.web-BriMF8gN.js`).then(e=>e.zi),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])),r(()=>import(`./index.web-BriMF8gN.js`).then(e=>e.Ui),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]))]),o=window.Capacitor,s=typeof o?.getPlatform==`function`?String(o.getPlatform()):`web`,c=``;try{c=String(await window.ember?.getVersion?.()??``)}catch{}let{error:l}=await n.rpc(`log_client_error`,{p_message:e,p_stack:t??null,p_platform:a(s,i()),p_app_version:c,p_url:typeof location<`u`?location.href:null});return!l}catch{return!1}}async function ft(e){if(!e)return``;try{let t=(await Ve()).items.find(t=>t.id===e);return t?`ad=${e} ${Math.max(1,Math.round((Number(t.size)||0)/1024/1024))}MB ${t.type||``}`.trim():`ad=${e}`}catch{return`ad=${e}`}}var pt=`
.cds-home-offer {
  position: absolute; left: 1rem; right: 1rem; bottom: 1rem; z-index: 15;
  max-width: 30rem; margin: 0 auto; padding: 1rem 1.25rem 1.25rem; text-align: center;
  border-radius: 0.8rem; border: 1px solid rgba(128,128,128,0.28);
}
.cds-home-offer.cds-home-must { border: 2px solid #f59e0b; }
.cds-exit-hint {
  position: absolute; left: 0; right: 0; bottom: 0.6rem;
  text-align: center; font-size: 0.75rem; letter-spacing: 0.02em;
  pointer-events: none;
}
.cds-exit-veil {
  position: absolute; top: 0; right: 0; bottom: 0; left: 0; inset: 0; display: flex; align-items: center; justify-content: center;
  padding: 1.5rem;
}
.cds-exit-box { max-width: 26rem; text-align: center; }
/* The settings page is a page: a list of ads with pictures beside them needs
   the room. */
.cds-exit-box.cds-exit-wide { max-width: 46rem; }
/* A panel that now holds a list of files has to be able to be taller than the
   glass on a phone propped against a POS. */
.cds-exit-scroll { max-height: 100%; overflow-y: auto; width: 100%; }
/* FULL BLEED, over the header too. */
.cds-idle-media { position: absolute; top: 0; right: 0; bottom: 0; left: 0; inset: 0; background: #000000; z-index: 5; }
.cds-idle-media > img, .cds-idle-media > video { width: 100%; height: 100%; display: block; }
/* SPLIT SCREEN: ads 60, order 40 side by side; ads 40, order 60 stacked, where
   the order needs the height for its lines. One hairline between, no gap. */
.cds-split { position: absolute; top: 0; right: 0; bottom: 0; left: 0; inset: 0; display: flex; }
.cds-split-row { flex-direction: row; }
.cds-split-column { flex-direction: column; }
.cds-split-ads { position: relative; overflow: hidden; background: #000000; min-width: 0; min-height: 0; }
.cds-split-row .cds-split-ads { flex: 3 1 0; }
.cds-split-column .cds-split-ads { flex: 2 1 0; }
.cds-split-order { position: relative; min-width: 0; min-height: 0; display: flex; }
.cds-split-row .cds-split-order { flex: 2 1 0; }
.cds-split-column .cds-split-order { flex: 3 1 0; }
.cds-split-row .cds-split-ads + .cds-split-order { border-left: 1px solid rgba(128,128,128,0.28); }
.cds-split-row .cds-split-order + .cds-split-ads { border-left: 1px solid rgba(128,128,128,0.28); }
.cds-split-column .cds-split-ads + .cds-split-order { border-top: 1px solid rgba(128,128,128,0.28); }
.cds-split-column .cds-split-order + .cds-split-ads { border-top: 1px solid rgba(128,128,128,0.28); }
.cds-split-ads.is-light { background: #f1ece4; }
.cds-split-sign {
  position: absolute; top: 0; right: 0; bottom: 0; left: 0; inset: 0;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: calc(var(--sv) * 2.4); padding: calc(var(--sv) * 6); text-align: center; background: #0c0d0e; color: #ffffff;
}
.cds-split-ads.is-light .cds-split-sign { background: #f1ece4; color: #171310; }
.cds-split-name { font-size: clamp(1.6rem, calc(var(--sv) * 6), 4rem); font-weight: 800; letter-spacing: -0.02em; line-height: 1.05; }
.cds-split-promo { font-size: clamp(1rem, calc(var(--sv) * 3.2), 2rem); opacity: 0.78; max-width: 90%; line-height: 1.3; }
.cds-split-join { display: flex; align-items: center; gap: calc(var(--sv) * 2); font-size: clamp(0.8rem, calc(var(--sv) * 2), 1.2rem); opacity: 0.85; margin-top: calc(var(--sv) * 2); }
.cds-split-join .cds-qr { width: clamp(72px, calc(var(--sv) * 14), 150px); background: #ffffff; padding: 6px; border-radius: 8px; }
.cds-split-join .cds-qr svg { display: block; width: 100%; height: auto; }
.cds-exit-title { font-size: 1.15rem; font-weight: 700; margin-bottom: 0.5rem; }
.cds-exit-note { font-size: 0.9rem; line-height: 1.5; margin-bottom: 1.25rem; }
.cds-exit-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; justify-content: center; }
.cds-exit-btn {
  font: inherit; font-size: 0.95rem; font-weight: 600; color: inherit;
  padding: 0.7rem 1.2rem; border-radius: 0.6rem; cursor: pointer;
  background: transparent; border: 2px solid currentColor; opacity: 0.75;
}
.cds-exit-btn:disabled { opacity: 0.4; cursor: default; }
.cds-exit-go { background: #ff5c00; border-color: #ff5c00; color: #000000; opacity: 1; }
`;function mt({d:e,cfg:t,fallbackName:n,listRef:r,link:i=`live`,onCsat:o,csatDone:s=!1,csatScore:c=0}){let l=e?.currency??`₱`,u=e?.mode??`cart`,d=e?.items??[],f=e?.restaurant||n||``,p=t.theme===`light`,m=p?{"--cds-bg":`#faf7f2`,"--cds-panel":`#ffffff`,"--cds-line":`rgba(28,22,16,0.12)`,"--cds-lift":`0 1px 2px rgba(28,22,16,0.06), 0 8px 24px rgba(28,22,16,0.08)`,"--cds-brand":`#a33900`,"--cds-new":`rgba(28,22,16,0.05)`,"--cds-ink":`#171310`,"--cds-ink-2":`rgba(23,19,16,0.74)`,"--cds-ink-3":`rgba(23,19,16,0.60)`,"--cds-accent":`#a33900`,"--cds-good":`#0b6538`,"--cds-glow":`rgba(255,92,0,0.10)`,"--cds-flame":`#c2410c`,"--cds-good-bg":`rgba(11,101,56,0.12)`}:{"--cds-bg":`#0e0f10`,"--cds-panel":`#17191b`,"--cds-line":`rgba(255,255,255,0.08)`,"--cds-lift":`0 1px 0 rgba(255,255,255,0.04) inset, 0 12px 32px rgba(0,0,0,0.35)`,"--cds-brand":`#ffb59a`,"--cds-new":`rgba(255,255,255,0.05)`,"--cds-ink":`#ffffff`,"--cds-ink-2":`rgba(255,255,255,0.62)`,"--cds-ink-3":`rgba(255,255,255,0.38)`,"--cds-accent":`#ffb59a`,"--cds-good":`#6ee7b7`,"--cds-glow":`rgba(255,92,0,0.16)`,"--cds-flame":`#ff6a1a`,"--cds-good-bg":`rgba(110,231,183,0.14)`},h={ember:[`#ff6a1a`,`#ffb59a`,`rgba(255,92,0,0.16)`,`#c2410c`,`#a33900`,`rgba(255,92,0,0.10)`],green:[`#34d399`,`#a7f3d0`,`rgba(52,211,153,0.16)`,`#047857`,`#065f46`,`rgba(4,120,87,0.10)`],blue:[`#60a5fa`,`#bfdbfe`,`rgba(96,165,250,0.16)`,`#1d4ed8`,`#1e40af`,`rgba(29,78,216,0.10)`],violet:[`#a78bfa`,`#ddd6fe`,`rgba(167,139,250,0.16)`,`#6d28d9`,`#5b21b6`,`rgba(109,40,217,0.10)`],rose:[`#fb7185`,`#fecdd3`,`rgba(251,113,133,0.16)`,`#be123c`,`#9f1239`,`rgba(190,18,60,0.10)`],gold:[`#fbbf24`,`#fde68a`,`rgba(251,191,36,0.16)`,`#a16207`,`#854d0e`,`rgba(161,98,7,0.10)`]},g=h[t.accent??`ember`]??h.ember,_=t.style??`classic`,ee={"--cds-flame":p?g[3]:g[0],"--cds-accent":p?g[4]:g[1],"--cds-glow":p?g[5]:g[2],"--cds-on-flame":p?`#ffffff`:`#121415`,"--cds-paper-flame":g[3],"--cds-paper-accent":g[4],"--cds-paper":`#fffdf7`,"--cds-paper-ink":`#1d1a16`},v=(0,E.useRef)(null),[y,b]=(0,E.useState)(0),[w,te]=(0,E.useState)(!1);(0,E.useEffect)(()=>{let e=v.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect();t.width&&t.height&&(b(Math.min(t.width,t.height)/100),te(t.width/t.height<.75))};if(t(),typeof ResizeObserver>`u`)return window.addEventListener(`resize`,t),()=>window.removeEventListener(`resize`,t);let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[]);let D=t.text_scale===`large`?1.2:1,O=(e,t,n)=>`${Math.max(e*16*D,Math.min(t*y*D,n*16*D)).toFixed(2)}px`;return(0,Y.jsxs)(`div`,{ref:v,className:`cds-root cds-style-${_}${w?` cds-portrait`:``}`,style:{...m,...ee,"--cds-u":`${y||1}px`,background:`var(--cds-bg)`,color:`var(--cds-ink)`},children:[(0,Y.jsx)(`style`,{children:$}),(0,Y.jsxs)(`header`,{className:`cds-head`,children:[(0,Y.jsxs)(`div`,{className:`cds-brand`,children:[(0,Y.jsx)(S,{size:Math.round(parseFloat(O(1.9,5.75,4)))}),(0,Y.jsxs)(`div`,{className:`cds-brand-txt`,children:[t.show_name&&f?(0,Y.jsx)(`div`,{className:`cds-name`,style:{fontSize:O(1.1,3.4,2.4)},children:f}):null,(0,Y.jsx)(`div`,{className:`cds-powered`,style:{fontSize:O(.5,1.2,.85)},children:`Powered by Ember POS`})]})]}),u===`qr`||u===`paid`||!d.length?(0,Y.jsx)(`div`,{className:`cds-state`,style:{fontSize:O(.6,1.5,1)},children:u===`qr`?`Scan to pay`:u===`paid`?`Thank you`:`Welcome`},u+`i`):null]}),u===`qr`?(0,Y.jsxs)(`main`,{className:`cds-main cds-center`,children:[(0,Y.jsxs)(`div`,{className:`cds-qr-lead`,style:{fontSize:O(.95,2.6,1.9)},children:[`Pay `,(0,Y.jsx)(`b`,{children:e?.qr_method??``}),`, scan with your phone`]}),e?.qr_image&&(0,Y.jsx)(`span`,{className:`cds-qr-ring`,children:(0,Y.jsx)(`img`,{src:e.qr_image,alt:`Payment QR`,className:`cds-qr`})}),(0,Y.jsx)(`div`,{className:`cds-qr-amt`,style:{fontSize:O(2,7,5)},children:a(e?.qr_amount_cents??0,l)}),(0,Y.jsx)(`div`,{className:`cds-hint`,style:{fontSize:O(.75,1.9,1.3)},children:`Show the confirmation screen to the cashier.`})]}):u===`paid`?(0,Y.jsxs)(`main`,{className:`cds-main cds-center cds-paid`,children:[(0,Y.jsxs)(`span`,{className:`cds-tickwrap`,style:{width:O(3,8.5,6.2),height:O(3,8.5,6.2)},"aria-hidden":!0,children:[(0,Y.jsx)(`span`,{className:`cds-ripple`}),Array.from({length:10},(e,t)=>(0,Y.jsx)(`span`,{className:`cds-spark`,style:{"--a":`${t*36+8}deg`,"--cds-spark":t%2?`var(--cds-flame)`:`#feb700`}},t)),(0,Y.jsxs)(`svg`,{className:`cds-tick`,viewBox:`0 0 64 64`,children:[(0,Y.jsx)(`circle`,{cx:`32`,cy:`32`,r:`30`}),(0,Y.jsx)(`path`,{d:`M19 33 l9 9 l17 -19`})]})]}),(0,Y.jsx)(`div`,{className:`cds-thanks`,style:{fontSize:O(1.6,4.6,3.3)},children:t.thanks}),(0,Y.jsxs)(`div`,{className:`cds-receipt`,children:[(0,Y.jsxs)(`div`,{className:`cds-paid-row`,children:[(0,Y.jsx)(`span`,{className:`cds-paid-lbl`,style:{fontSize:O(.75,1.9,1.35)},children:`Paid`}),(0,Y.jsx)(`span`,{className:`cds-paid-val`,style:{fontSize:O(1.3,3.6,2.6)},children:a(e?.paid_total_cents??0,l)})]}),t.show_change&&(e?.change_cents??0)>0&&(0,Y.jsxs)(`div`,{className:`cds-paid-row cds-change`,children:[(0,Y.jsx)(`span`,{className:`cds-paid-lbl`,style:{fontSize:O(.75,1.9,1.35)},children:`Change`}),(0,Y.jsx)(`span`,{className:`cds-paid-val`,style:{fontSize:O(1.3,3.6,2.6)},children:(0,Y.jsx)(`span`,{className:`cds-change-pill`,children:a(e.change_cents,l)})})]})]}),(e?.ready_in_min??0)>0&&(0,Y.jsxs)(`div`,{className:`cds-ready`,style:{fontSize:O(.85,2.2,1.6)},children:[`Ready by `,(0,Y.jsx)(`b`,{children:T(e.ready_in_min)})]}),t.ask_csat&&o&&(0,Y.jsx)(`div`,{className:`cds-csat`,children:s?(0,Y.jsx)(`div`,{className:`cds-csat-thanks`,style:{fontSize:O(.85,2.2,1.5)},children:c>=4&&t.review_url?(0,Y.jsxs)(`div`,{className:`cds-review`,children:[(0,Y.jsx)(`div`,{children:`Thank you! Would you tell others too?`}),(0,Y.jsx)(`div`,{className:`cds-qr cds-review-qr`,dangerouslySetInnerHTML:{__html:C(t.review_url,4)}}),(0,Y.jsx)(`div`,{className:`cds-review-how`,children:`Scan to leave us a Google review`})]}):c>0&&c<=2?`Sorry about that. Please tell the cashier, we want to put it right.`:`Thank you for telling us.`}):(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(`div`,{className:`cds-csat-q`,style:{fontSize:O(.8,2,1.4)},children:`How was it?`}),(0,Y.jsx)(`div`,{className:`cds-csat-row`,children:rt.map(e=>(0,Y.jsx)(`button`,{type:`button`,className:`cds-csat-btn`,style:{fontSize:O(1.1,3,2.2)},"aria-label":e.label,onClick:()=>o?.(e.score),children:e.glyph},e.score))})]})}),(0,Y.jsx)(`div`,{className:`cds-hint`,style:{fontSize:O(.85,2.2,1.5)},children:`Please come again`})]}):!e||d.length===0?(0,Y.jsxs)(`main`,{className:`cds-main cds-center`,children:[(0,Y.jsx)(st,{logo:t.shop_logo??``,size:Math.max(36,Math.min(180,13*y*D)),className:`cds-mark`}),(0,Y.jsx)(`div`,{className:`cds-welcome`,style:{fontSize:O(1.5,5,3.4)},children:t.welcome}),t.promo&&(0,Y.jsx)(`div`,{className:`cds-promo`,style:{fontSize:O(.85,2.3,1.6)},children:t.promo}),t.join_url&&(0,Y.jsxs)(`div`,{className:`cds-join`,children:[(0,Y.jsx)(`div`,{className:`cds-qr cds-join-qr`,dangerouslySetInnerHTML:{__html:C(t.join_url,4)}}),(0,Y.jsxs)(`div`,{className:`cds-join-text`,style:{fontSize:O(.7,1.7,1.2)},children:[`Scan for your `,(0,Y.jsx)(`b`,{children:`loyalty card`})]})]})]}):(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(`main`,{className:`cds-main cds-list`,ref:r,children:[(0,Y.jsx)(`div`,{className:`cds-state cds-order-title`,style:{fontSize:O(.6,1.5,1)},children:`Your order`}),t.show_items?(0,Y.jsx)(`div`,{className:`cds-lines`,children:d.map((e,t)=>(0,Y.jsxs)(`div`,{className:`cds-line`,style:{fontSize:O(.95,2.7,2)},children:[(0,Y.jsxs)(`span`,{className:`cds-line-l`,children:[(0,Y.jsx)(`span`,{className:`cds-qty${e.quantity>9?` cds-qty-2`:``}`,children:e.quantity},e.quantity),(0,Y.jsxs)(`span`,{className:`cds-item`,children:[e.name,e.variant_label?(0,Y.jsxs)(`span`,{className:`cds-variant`,children:[` · `,e.variant_label]}):``,e.addon_label?(0,Y.jsxs)(`span`,{className:`cds-mod cds-mod-add`,style:{fontSize:O(.82,2.2,1.6)},children:[`+ `,e.addon_label]}):null,e.notes?(0,Y.jsx)(`span`,{className:`cds-mod cds-mod-note`,style:{fontSize:O(.82,2.2,1.6)},children:e.notes}):null]})]}),(0,Y.jsx)(`span`,{className:`cds-line-r`,children:a(e.price_cents*e.quantity,l)})]},t))}):(0,Y.jsxs)(`div`,{className:`cds-center cds-nolines`,style:{fontSize:O(1.1,3.2,2.2)},children:[d.reduce((e,t)=>e+t.quantity,0),` item`,d.reduce((e,t)=>e+t.quantity,0)===1?``:`s`]})]}),(0,Y.jsxs)(`footer`,{className:`cds-foot`,children:[t.show_subtotal&&(0,Y.jsxs)(`div`,{className:`cds-sub`,style:{fontSize:O(.75,1.9,1.3)},children:[(0,Y.jsx)(`span`,{children:`Subtotal`}),(0,Y.jsx)(`span`,{children:a(e.subtotal_cents,l)})]}),t.show_discount&&e.discount_cents>0&&(0,Y.jsxs)(`div`,{className:`cds-sub cds-disc`,style:{fontSize:O(.75,1.9,1.3)},children:[(0,Y.jsx)(`span`,{children:`Discount`}),(0,Y.jsxs)(`span`,{children:[`−`,a(e.discount_cents,l)]})]}),(e.service_charge_cents??0)>0&&(0,Y.jsxs)(`div`,{className:`cds-sub`,style:{fontSize:O(.75,1.9,1.3)},children:[(0,Y.jsx)(`span`,{children:e.service_charge_label||`Service charge`}),(0,Y.jsx)(`span`,{children:a(e.service_charge_cents,l)})]}),(e.tax_cents??0)>0&&(0,Y.jsxs)(`div`,{className:`cds-sub`,style:{fontSize:O(.75,1.9,1.3)},children:[(0,Y.jsx)(`span`,{children:e.tax_label||`Tax`}),(0,Y.jsx)(`span`,{children:a(e.tax_cents,l)})]}),(0,Y.jsxs)(`div`,{className:`cds-total${i===`live`?``:` cds-total-unsure`}`,children:[(0,Y.jsxs)(`span`,{className:`cds-total-lbl`,style:{fontSize:O(.95,2.6,1.8)},children:[`Total`,(0,Y.jsx)(`span`,{className:`cds-count`,children:(()=>{let e=d.reduce((e,t)=>e+t.quantity,0);return`${e} item${e===1?``:`s`}`})()})]}),(0,Y.jsx)(`span`,{className:`cds-total-val`,style:{fontSize:O(2.2,8,5.6)},children:a(e.total_cents,l)},e.total_cents)]}),(e.stamps_required??0)>0&&e.stamps!=null&&(0,Y.jsxs)(`div`,{className:`cds-stamps`,style:{fontSize:O(.7,1.8,1.2)},children:[(0,Y.jsx)(`span`,{className:`cds-stamp-dots`,"aria-hidden":!0,children:Array.from({length:Math.min(12,e.stamps_required)},(t,n)=>(0,Y.jsx)(`span`,{className:n<(e.stamps??0)?`cds-dot cds-dot-on`:`cds-dot`},n))}),(0,Y.jsx)(`span`,{children:(e.stamps??0)>=e.stamps_required?`A free one is ready for you`:`${e.stamps} of ${e.stamps_required} stamps`})]}),x(i)&&(0,Y.jsx)(`div`,{className:`cds-link-note`,style:{fontSize:O(.6,1.5,1.05)},children:x(i)})]})]})]})}var $=`
/* ---- the 10 Sep 2026 additions -------------------------------------------
   Everything here is sized off --cds-u like the rest of the page, so it works
   on a propped-up phone and on a 40-inch TV without a second stylesheet. */
.cds-mark { display: block; margin: 0 auto calc(var(--cds-u) * 1); opacity: 0.9; }

/* LIFE (1.5.2). The screen answers what the cashier does - a line slides in
   as it is rung up, the count pops, the total pulses - and on the idle screen
   the mark breathes, so a screen that is up all day never looks frozen. All
   of it is off under reduced motion. */
@keyframes cdsIn { from { opacity: 0; transform: translateY(calc(var(--cds-u) * 1.6)); } to { opacity: 1; transform: none; } }
@keyframes cdsPop { 0% { transform: scale(.7); } 60% { transform: scale(1.18); } 100% { transform: scale(1); } }
@keyframes cdsPulse { 0% { transform: scale(1); } 35% { transform: scale(1.06); } 100% { transform: scale(1); } }
@keyframes cdsBreathe { 0%, 100% { transform: scale(1); opacity: .9; } 50% { transform: scale(1.045); opacity: 1; } }
@keyframes cdsRing { 0% { box-shadow: 0 0 0 0 rgba(255,92,0,.45); } 100% { box-shadow: 0 0 0 calc(var(--cds-u) * 3) rgba(255,92,0,0); } }
@keyframes cdsDraw { to { stroke-dashoffset: 0; } }
@keyframes cdsTickIn { 0% { transform: scale(.4); opacity: 0; } 70% { transform: scale(1.08); opacity: 1; } 100% { transform: scale(1); } }
.cds-line { animation: cdsIn .38s cubic-bezier(.2,.8,.2,1) both; }
.cds-qty {
  /* A CIRCLE, ALWAYS (17 Oct 2026). It was a pill sized by its text, so "2x"
     drew an oval; the owner spotted it. Fixed width and height, the number
     alone, and two digits step the type down instead of stretching it. */
  display: inline-flex; align-items: center; justify-content: center;
  width: 1.85em; height: 1.85em; border-radius: 50%; padding: 0;
  font-size: 0.82em; line-height: 1; align-self: flex-start;
  background: var(--cds-glow); font-weight: 800;
  animation: cdsPop .35s cubic-bezier(.2,.9,.3,1.3);
}
.cds-qty-2 { font-size: 0.7em; width: 2.15em; height: 2.15em; }
.cds-total-val { color: var(--cds-flame); display: inline-block; transform-origin: right center; animation: cdsPulse .4s ease-out; }
.cds-state { animation: cdsIn .4s ease-out both; }
.cds-center > .cds-mark { animation: cdsBreathe 4.8s ease-in-out infinite; }
.cds-welcome, .cds-promo, .cds-thanks, .cds-ready, .cds-qr-lead, .cds-qr-amt { animation: cdsIn .5s cubic-bezier(.2,.8,.2,1) both; }
.cds-promo { animation-delay: .12s; }
.cds-ready { animation-delay: .22s; }
.cds-qr-ring { display: inline-block; border-radius: 16px; animation: cdsRing 1.8s ease-out infinite; }
.cds-tickwrap { position: relative; display: block; flex: none; }
.cds-tick { position: relative; display: block; width: 100%; height: 100%; animation: cdsTickIn .45s cubic-bezier(.2,.9,.3,1.3) both; }
@keyframes cdsRipple { 0% { transform: scale(.9); opacity: .55; } 100% { transform: scale(2.1); opacity: 0; } }
@keyframes cdsSpark { 0% { transform: rotate(var(--a)) translateY(0) scale(1); opacity: 0; } 15% { opacity: 1; } 100% { transform: rotate(var(--a)) translateY(-130%) scale(.4); opacity: 0; } }
.cds-ripple { position: absolute; top: 0; right: 0; bottom: 0; left: 0; inset: 0; border-radius: 999px; border: 3px solid var(--cds-good); opacity: 0; animation: cdsRipple .9s .3s ease-out both; }
.cds-spark {
  position: absolute; left: 50%; top: 50%; width: 9%; height: 9%; margin: -4.5% 0 0 -4.5%; border-radius: 999px;
  background: var(--cds-spark); opacity: 0; animation: cdsSpark .75s .32s cubic-bezier(.2,.8,.3,1) both;
}
.cds-receipt { animation: cdsIn .5s .28s cubic-bezier(.2,.8,.2,1) both; }
.cds-paid .cds-thanks { animation-delay: .18s; }
.cds-paid .cds-ready { animation-delay: .4s; }
.cds-paid .cds-csat, .cds-paid .cds-hint { animation: cdsIn .5s .5s cubic-bezier(.2,.8,.2,1) both; }
.cds-tick circle { fill: var(--cds-good); }
.cds-tick path { fill: none; stroke: var(--cds-bg); stroke-width: 6; stroke-linecap: round; stroke-linejoin: round;
  stroke-dasharray: 60; stroke-dashoffset: 60; animation: cdsDraw .5s .2s ease-out forwards; }
@media (prefers-reduced-motion: reduce) {
  .cds-line, .cds-qty, .cds-total-val, .cds-state, .cds-center > .cds-mark, .cds-welcome, .cds-promo, .cds-thanks,
  .cds-ready, .cds-qr-lead, .cds-qr-amt, .cds-qr-ring, .cds-tick, .cds-receipt, .cds-paid .cds-csat, .cds-paid .cds-hint { animation: none !important; }
  .cds-ripple, .cds-spark { display: none; }
  .cds-tick path { animation: none; stroke-dashoffset: 0; }
}
.cds-stamps {
  display: flex; align-items: center; justify-content: center;
  gap: calc(var(--cds-u) * 1.4); color: var(--cds-ink-2);
  margin-top: calc(var(--cds-u) * 1.4);
}
.cds-stamp-dots { display: inline-flex; gap: calc(var(--cds-u) * 0.7); }
.cds-dot {
  width: calc(var(--cds-u) * 1.2); height: calc(var(--cds-u) * 1.2);
  min-width: 6px; min-height: 6px;
  border-radius: 999px; border: 1px solid var(--cds-line); background: transparent;
}
.cds-dot-on { background: var(--cds-accent); border-color: var(--cds-accent); }
.cds-ready { color: var(--cds-ink-2); }
.cds-ready b { color: var(--cds-ink); }
.cds-csat { display: flex; flex-direction: column; align-items: center; gap: calc(var(--cds-u) * 1.2); }
.cds-csat-q { color: var(--cds-ink-3); text-transform: uppercase; letter-spacing: 0.2em; }
.cds-csat-row { display: flex; gap: calc(var(--cds-u) * 1.6); }
.cds-csat-btn {
  font: inherit; line-height: 1; cursor: pointer; color: var(--cds-ink-2);
  background: var(--cds-panel); border: 1px solid var(--cds-line);
  border-radius: 999px;
  /* A finger, on a screen somebody is reaching across a counter to touch. */
  min-width: 3rem; min-height: 3rem;
  padding: calc(var(--cds-u) * 1.2) calc(var(--cds-u) * 1.6);
}
.cds-csat-btn:active { background: var(--cds-glow); color: var(--cds-ink); }
.cds-csat-thanks { color: var(--cds-good); }
/* The review QR (1.5.0): white quiet zone so any phone camera reads it on
   a dark screen; sized to the screen, never bigger than a card. */
.cds-review { display: flex; flex-direction: column; align-items: center; gap: 0.6em; }
/* The review QR sits on the payment QR's own white paper (.cds-qr): one
   white in the sheet, and sized off the box like everything else. */
.cds-review-qr { width: calc(var(--cds-u) * 34); max-width: 260px; }
.cds-join { position: absolute; right: calc(var(--cds-u) * 3); bottom: calc(var(--cds-u) * 3); display: flex; flex-direction: column; align-items: center; gap: calc(var(--cds-u) * 1.2); text-align: center; }
.cds-join-qr { width: calc(var(--cds-u) * 18); max-width: 170px; padding: calc(var(--cds-u) * 1.2); }
.cds-join-qr svg { display: block; width: 100%; height: auto; }
.cds-join-text { color: var(--cds-ink-2); line-height: 1.2; max-width: min(calc(var(--cds-u) * 18), 170px); }
.cds-join-text b { color: var(--cds-ink); }
.cds-review-qr svg { display: block; width: 100%; height: auto; }
.cds-review-how { font-size: 0.7em; opacity: 0.8; }

.cds-root {
  /* Fills whatever it is put in. The full-screen page gives it the window (see
     .cds-page below); the Settings preview gives it a card. */
  height: 100%; width: 100%;
  display: flex; flex-direction: column; overflow: hidden;
  font-feature-settings: 'tnum' 1;
}
/* The standalone customer-screen page, where the box IS the window. dvh, not
   vh: on a phone browser vh includes the address bar that is not there. */
.cds-page { position: fixed; top: 0; right: 0; bottom: 0; left: 0; inset: 0; height: 100vh; height: 100dvh; }
/* Under the app's text-size zoom, 100vh is the zoomed height: the screen ended a band short (1 Nov 2026). */
html.zoomed .cds-page { height: calc(100vh / var(--ui-zoom, 1)); height: calc(100dvh / var(--ui-zoom, 1)); width: calc(100vw / var(--ui-zoom, 1)); }
.cds-head {
  flex: none; display: flex; align-items: baseline; justify-content: space-between;
  gap: 1rem; padding: calc(var(--cds-u) * 2.2) calc(var(--cds-u) * 3.5); border-bottom: 1px solid var(--cds-line);
}
/* THE BRAND LOCKUP. align-items:center measures the name + powered-by pair
   ONLY, so the mark sits level with the pair rather than riding high against a
   single line - the same fix the sidebar needed. */
.cds-brand { display: flex; align-items: center; gap: calc(var(--cds-u) * 1.4); min-width: 0; }
.cds-brand-txt { min-width: 0; }
.cds-name {
  /* The DISPLAY face, the same as the sidebar and the sign-in screen - this is
     the lockup the owner pointed at, and a customer screen showing the shop's name
     in a different typeface from the POS reads as a different product. Bebas
     carries no bold, so weight stays normal and the tracking does the work. */
  font-family: "Bebas Neue", system-ui, sans-serif;
  font-weight: 400; letter-spacing: 0.05em; text-transform: uppercase;
  line-height: 1; color: var(--cds-brand);
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap; min-width: 0;
}
.cds-powered {
  text-transform: uppercase; letter-spacing: 0.26em; color: var(--cds-ink-3);
  margin-top: calc(var(--cds-u) * 0.35); white-space: nowrap;
}
.cds-state {
  flex: none; text-transform: uppercase; letter-spacing: 0.3em; color: var(--cds-ink-3);
}
.cds-order-title { margin-bottom: calc(var(--cds-u) * 1.2); }
.cds-main { flex: 1 1 auto; min-height: 0; padding: calc(var(--cds-u) * 3) calc(var(--cds-u) * 3.5); }
.cds-center {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  text-align: center; gap: calc(var(--cds-u) * 2.5);
}
.cds-list { overflow: hidden; }

.cds-welcome { color: var(--cds-ink-2); font-weight: 600; line-height: 1.15; }
.cds-promo {
  color: var(--cds-ink-3); max-width: 22ch; line-height: 1.5;
  border-top: 1px solid var(--cds-line); padding-top: calc(var(--cds-u) * 2.5);
}

.cds-lines { display: flex; flex-direction: column; }
.cds-line {
  display: flex; align-items: baseline; justify-content: space-between; gap: calc(var(--cds-u) * 2);
  padding: calc(var(--cds-u) * 1.4) 0; border-bottom: 1px solid var(--cds-line);
}
.cds-line:last-child { border-bottom: 0; }
.cds-line-l { display: flex; align-items: flex-start; gap: calc(var(--cds-u) * 1.4); min-width: 0; }
.cds-line-l .cds-item { padding-top: 0.12em; }
.cds-qty { color: var(--cds-flame); flex: none; font-variant-numeric: tabular-nums; }
.cds-item { min-width: 0; overflow-wrap: anywhere; }
.cds-variant { color: var(--cds-accent); }
/* THE LINE'S SMALL PRINT - add-ons, and the cashier's note, under the item.
   Quieter and smaller than the item name so a five-line order still scans as
   five items, but never so faint that somebody checking their order has to
   lean in: catching a wrong add-on before paying is the whole job. */
/* NOT .cds-sub - that name is the FOOT's subtotal row, defined further down
   this same stylesheet, and it quietly won on source order: the add-on line
   came out with the footer's flex layout and the footer's grey. Caught by
   reading the computed colour in a browser, which is the only place a clash
   like that shows up. */
.cds-mod { display: block; margin-top: calc(var(--cds-u) * 0.45); line-height: 1.3; overflow-wrap: anywhere; }
.cds-mod-add { color: var(--cds-accent); }
.cds-mod-note { color: var(--cds-ink-2); }
.cds-line-r { flex: none; font-variant-numeric: tabular-nums; }
.cds-nolines { height: 100%; color: var(--cds-ink-2); font-weight: 600; }

.cds-foot {
  flex: none; padding: calc(var(--cds-u) * 2.4) calc(var(--cds-u) * 3.5) calc(var(--cds-u) * 3); border-top: 1px solid var(--cds-line);
  background: var(--cds-panel);
}
.cds-sub {
  display: flex; justify-content: space-between; color: var(--cds-ink-2);
  font-variant-numeric: tabular-nums; padding-bottom: calc(var(--cds-u) * 0.8);
}
.cds-disc { color: var(--cds-good); }
.cds-total {
  display: flex; align-items: baseline; justify-content: space-between; gap: calc(var(--cds-u) * 2);
  padding-top: calc(var(--cds-u) * 1.2);
}
.cds-total-lbl { text-transform: uppercase; letter-spacing: 0.18em; color: var(--cds-ink-2); display: flex; flex-direction: column; gap: 0.3em; }
.cds-count { font-size: 0.55em; letter-spacing: 0.12em; color: var(--cds-ink-3); font-weight: 600; }

/* ------------------------------------------------------- THE PREMIUM BASE
   (17 Oct 2026, "make the customer screen better and premium"). What the
   best customer screens share: the order and the money each sit in their own
   calm panel, lifted off the ground, with room around them; nothing floods
   the glass with colour; and the line just rung up is lit for a moment so the
   customer's eye goes to it. Every look below builds on this. */
.cds-list {
  margin: calc(var(--cds-u) * 2.2) calc(var(--cds-u) * 3) 0;
  padding: calc(var(--cds-u) * 2.2) calc(var(--cds-u) * 2.8) calc(var(--cds-u) * 1);
  background: var(--cds-panel); border: 1px solid var(--cds-line);
  border-radius: calc(var(--cds-u) * 2.4); box-shadow: var(--cds-lift);
}
.cds-foot {
  margin: calc(var(--cds-u) * 1.6) calc(var(--cds-u) * 3) calc(var(--cds-u) * 3);
  padding: calc(var(--cds-u) * 2.2) calc(var(--cds-u) * 2.8);
  border: 1px solid var(--cds-line); border-top: 1px solid var(--cds-line);
  border-radius: calc(var(--cds-u) * 2.4); box-shadow: var(--cds-lift);
}
.cds-total { align-items: center; }
/* NO EMPTY PANEL. The list is as tall as its items (and scrolls past the
   screen's height); the summary keeps to the bottom. A three-item order used
   to draw a panel the height of the screen with nothing in most of it. */
.cds-main.cds-list { flex: 0 1 auto; }
.cds-foot { margin-top: auto; }
.cds-head { border-bottom: 0; padding-bottom: calc(var(--cds-u) * 0.6); }
@keyframes cdsNew { 0%, 40% { background: var(--cds-new); } 100% { background: transparent; } }
.cds-line { border-radius: calc(var(--cds-u) * 1.2); margin: 0 calc(var(--cds-u) * -1.2); padding-left: calc(var(--cds-u) * 1.2); padding-right: calc(var(--cds-u) * 1.2); }
.cds-line:last-child { animation: cdsIn .38s cubic-bezier(.2,.8,.2,1) both, cdsNew 2.4s ease-out both; }
@media (prefers-reduced-motion: reduce) { .cds-line:last-child { animation: none !important; } }

/* ------------------------------------------------------------ THE LOOKS
   Classic is everything above. Each look below only restyles; the layout,
   the sizes off --cds-u and every rule about what shows stay the same. */

/* BOLD: heavy type, solid number circles, and the summary ringed in the
   shop's colour. NOT a flood of colour across the bottom: the owner, 17 Oct
   2026, "the bottom of the screen which has a solid color looks very off". */
.cds-style-bold .cds-line { font-weight: 700; }
.cds-style-bold .cds-qty { background: var(--cds-flame); color: var(--cds-on-flame); }
.cds-style-bold .cds-foot { box-shadow: inset 0 0 0 2px var(--cds-flame), var(--cds-lift); }
.cds-style-bold .cds-total-lbl { color: var(--cds-ink); font-weight: 800; }
.cds-style-bold .cds-total-val { font-weight: 900; }

/* CLEAN: each line its own card, no rules between, the total in plain ink. */
.cds-style-clean .cds-head { border-bottom: 0; }
.cds-style-clean .cds-lines { gap: calc(var(--cds-u) * 1.2); }
.cds-style-clean .cds-list { background: transparent; border: 0; box-shadow: none; padding-left: 0; padding-right: 0; }
.cds-style-clean .cds-line { margin: 0; box-shadow: var(--cds-lift); }
.cds-style-clean .cds-line, .cds-style-clean .cds-line:last-child {
  border: 1px solid var(--cds-line); border-radius: 14px; background: var(--cds-panel);
  padding: calc(var(--cds-u) * 1.6) calc(var(--cds-u) * 2);
}
.cds-style-clean .cds-qty { background: transparent; box-shadow: inset 0 0 0 2px var(--cds-flame); }
.cds-style-clean .cds-foot { background: var(--cds-panel); }
.cds-style-clean .cds-total { border-top: 1px solid var(--cds-line); padding-top: calc(var(--cds-u) * 1.6); margin-top: calc(var(--cds-u) * 0.6); }
.cds-style-clean .cds-total-val { color: var(--cds-ink); }

/* RECEIPT: the order is a paper slip, whatever the palette around it. */
.cds-style-receipt .cds-list, .cds-style-receipt .cds-foot {
  --cds-ink: #1d1a16; --cds-ink-2: rgba(29,26,22,0.72); --cds-ink-3: rgba(29,26,22,0.58);
  --cds-line: rgba(29,26,22,0.28); --cds-flame: var(--cds-paper-flame); --cds-accent: var(--cds-paper-accent);
  --cds-glow: transparent; --cds-good: #0b6538;
  background: var(--cds-paper); color: var(--cds-paper-ink);
  width: calc(100% - var(--cds-u) * 7); max-width: 720px; margin-left: auto; margin-right: auto;
}
.cds-style-receipt .cds-list { flex: 0 1 auto; margin-top: calc(var(--cds-u) * 2.2); margin-bottom: 0; border: 0; border-radius: 6px 6px 0 0; box-shadow: 0 12px 32px rgba(0,0,0,0.30); }
.cds-style-receipt .cds-foot { border: 0; border-top: 2px dashed var(--cds-line); border-radius: 0 0 6px 6px; margin-top: 0; margin-bottom: calc(var(--cds-u) * 2.5); box-shadow: 0 12px 32px rgba(0,0,0,0.30); }
.cds-style-receipt .cds-list { margin-top: auto; }
.cds-style-receipt .cds-foot { margin-bottom: auto; }
.cds-style-receipt .cds-line { margin: 0; padding-left: 0; padding-right: 0; border-radius: 0; }
.cds-style-receipt .cds-line { border-bottom: 1px dashed var(--cds-line); }
.cds-style-receipt .cds-qty { box-shadow: inset 0 0 0 1.5px var(--cds-ink); color: var(--cds-ink); }
.cds-style-receipt .cds-total-val { color: var(--cds-ink); }
.cds-style-receipt .cds-head { border-bottom: 0; }
.cds-total-val {
  font-weight: 800; line-height: 1; letter-spacing: -0.02em;
  font-variant-numeric: tabular-nums; text-align: right; min-width: 0;
}

/* A TOTAL THIS SCREEN CAN NO LONGER VOUCH FOR.
   Dimming, not hiding: the number is probably still right, and a customer
   staring at a blank where the total was is worse than one reading a figure
   that visibly stops insisting on itself. The transition is slow on purpose -
   a snap to grey looks like a fault, a fade looks like the screen thinking. */
.cds-total-unsure { opacity: 0.45; transition: opacity 600ms ease; }
.cds-link-note {
  margin-top: calc(var(--cds-u) * 0.8);
  text-align: right; color: var(--cds-ink-3); font-style: italic;
}
@media (prefers-reduced-motion: reduce) { .cds-total-unsure { transition: none; } }

.cds-qr-lead { color: var(--cds-ink-2); }
.cds-qr-lead b { color: var(--cds-ink); }
.cds-qr {
  max-height: calc(var(--cds-u) * 52); max-width: calc(var(--cds-u) * 80); object-fit: contain;
  background: #ffffff; border-radius: calc(var(--cds-u) * 2); padding: calc(var(--cds-u) * 2);
}
/* THE PAYMENT QR IS ALWAYS A SCANNABLE SIZE (17 Oct 2026): it drew at the
   picture's own size, so a small upload showed as a dot. Now it fills a set
   share of the screen and stays sharp when it is blown up. */
img.cds-qr { width: calc(var(--cds-u) * 46); min-width: 140px; height: auto; image-rendering: pixelated; }
/* On a narrow screen the head stacks, and a small chip under the logo read as
   part of it (the owner: "more close to the logo"). The page says the same
   thing in large type, so the chip goes. */
.cds-portrait .cds-head .cds-state { display: none; }
.cds-qr-amt { font-weight: 800; color: var(--cds-accent); font-variant-numeric: tabular-nums; line-height: 1; }
.cds-hint { color: var(--cds-ink-3); }

.cds-thanks { font-weight: 800; color: var(--cds-ink); line-height: 1.05; letter-spacing: -0.01em; }
/* The receipt card the amounts sit on. */
.cds-receipt {
  width: 100%; max-width: calc(var(--cds-u) * 62); display: flex; flex-direction: column; gap: calc(var(--cds-u) * 1.4);
  padding: calc(var(--cds-u) * 2.2) calc(var(--cds-u) * 3); border-radius: calc(var(--cds-u) * 2.2);
  background: var(--cds-panel); border: 1px solid var(--cds-line);
}
.cds-receipt .cds-paid-row { max-width: none; grid-template-columns: auto 1fr; }
.cds-receipt .cds-paid-row .cds-paid-lbl { text-align: left; }
.cds-receipt .cds-paid-row .cds-paid-val { text-align: right; }
.cds-receipt .cds-change { border-top: 1px dashed var(--cds-line); padding-top: calc(var(--cds-u) * 1.4); }
.cds-change-pill { display: inline-block; padding: .08em .45em; border-radius: 999px; background: var(--cds-good-bg); }
/* A GRID, not a flex row: "Paid" and "Change" are different lengths, so on a
   flex row the two amounts started at different x and the eye had to hunt for
   the second one. Shared columns put the figures under each other. */
.cds-paid-row {
  display: grid; grid-template-columns: 1fr 1fr; align-items: baseline;
  gap: calc(var(--cds-u) * 3); width: 100%; max-width: calc(var(--cds-u) * 78);
}
.cds-paid-row .cds-paid-lbl { text-align: right; }
.cds-paid-row .cds-paid-val { text-align: left; }
.cds-paid-lbl { color: var(--cds-ink-2); }
.cds-paid-val { font-weight: 800; font-variant-numeric: tabular-nums; line-height: 1; }
.cds-change .cds-paid-val { color: var(--cds-good); }

/* A propped-up phone is TALL and NARROW: the header's name and state chip stop
   fitting on one line long before the ticket does. Stack them instead of
   ellipsing the shop's name down to nothing. */
.cds-portrait .cds-head { flex-direction: column; align-items: flex-start; gap: calc(var(--cds-u) * 0.6); }
.cds-portrait .cds-promo { max-width: 90%; }
`;function ht({config:e,moment:t=`cart`}){let n=t===`idle`?{items:[],subtotal_cents:0,discount_cents:0,total_cents:0,currency:`₱`,restaurant:``}:t===`paid`?{mode:`paid`,items:[],subtotal_cents:0,discount_cents:0,total_cents:0,currency:`₱`,restaurant:``,paid_total_cents:3e4,change_cents:5e3}:{items:i()===`pharmacy`?[{name:`Biogesic 500 mg Tablet`,quantity:2,price_cents:9e3,variant_label:`Banig of 10`},{name:`Vitamin C 500 mg`,quantity:1,price_cents:7e3,variant_label:null}]:[{name:`Cafe Latte`,quantity:2,price_cents:9e3,variant_label:`Large`},{name:`Banana Bread`,quantity:1,price_cents:7e3,variant_label:null}],subtotal_cents:25e3,discount_cents:2500,total_cents:22500,currency:`₱`,restaurant:``};return(0,Y.jsx)(mt,{d:n,cfg:e,fallbackName:`Your Shop`})}export{ht as CustomerScreenPreview,lt as default};