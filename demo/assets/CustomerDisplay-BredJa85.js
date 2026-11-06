const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/supabase-BjClejqL.js","assets/main-BxG9vLwV.js","assets/defineProperty-CUH-9I6X.js","assets/index.demo-D3qgJfjx.js","assets/custom-roles-8-hFnR-U.js","assets/delivery-platforms-DXPhPJ1y.js","assets/platform-BNyXKd9U.js","assets/money-back-EQckVd33.js","assets/dist-CZKPU1cE.js","assets/definitions--d8bC4tg.js","assets/jsx-runtime-D-fAwrhU.js","assets/device-tier-C_TXQrC_.js","assets/Modal-CI7fAvMm.js","assets/Skeleton-CbvlJzBu.js","assets/Skeleton-DOKGOoZw.css","assets/chime-B5mpaoff.js","assets/cds-home-D1XgDwm7.js","assets/country-switch-BfawRsWb.js","assets/cds-lan-DacUph5l.js","assets/cds-bluetooth-hHm83scR.js","assets/main-CYH1sr95.css","assets/cds-boot-8CTbVqSQ.js"])))=>i.map(i=>d[i]);
import{a as e}from"./defineProperty-CUH-9I6X.js";import{t}from"./index.demo-D3qgJfjx.js";import{En as n,vt as r}from"./custom-roles-8-hFnR-U.js";import{n as i,t as a}from"./jsx-runtime-D-fAwrhU.js";import{a as o,d as s,f as c,h as l,i as u,n as d,o as f,r as p,s as m,t as ee,u as h}from"./cds-home-D1XgDwm7.js";import{At as g,H as _,Lt as v,Xr as y,i as b,r as x}from"./main-BxG9vLwV.js";import{n as S}from"./qr-zvQX9iJo.js";import{l as C,r as w}from"./wait-quote-DyqQ2U3_.js";var T=e(i(),1);function E(e){return e===`down`?`Reconnecting, please check the total with the cashier`:null}function te(e){return!e.hasMedia||e.moment!==`cart`||e.itemCount>0?!1:e.now-D(e)>=e.delayMs}function D(e){return Math.max(Math.min(e.quietSince,e.now),e.paidHoldUntil)}function O(){try{if(typeof performance<`u`&&typeof performance.now==`function`)return performance.now()}catch(e){}return Date.now()}function k(e){return Math.min(3e5,15e3*2**Math.max(0,Math.min(10,e)))}var A=`ember.cds.idle.onglass`,j=`ember.cds.idle.poison`,ne=864e5;function M(e,t,n){let r={};for(let[t,i]of Object.entries(e||{}))i&&typeof i.strikes==`number`&&(i.until&&i.until<=n||(r[t]=i));if(t){var i,a;let e=((i=(a=r[t])==null?void 0:a.strikes)==null?0:i)+1;r[t]={strikes:e,until:e>=2?n+ne:0}}return r}function N(e,t){let n={};for(let[r,i]of Object.entries(e||{}))i&&i.until>t&&(n[r]=i.until);return n}function P(){try{let e=JSON.parse(localStorage.getItem(`ember.cds.idle.poison`)||`{}`);return e&&typeof e==`object`&&!Array.isArray(e)?e:{}}catch(e){return{}}}function F(e){try{localStorage.setItem(j,JSON.stringify(e))}catch(e){}}function I(e){try{e?localStorage.setItem(A,e):localStorage.removeItem(A)}catch(e){}}function re(e){let t=P();t[e]&&!t[e].until&&(delete t[e],F(t))}var L=!1;function R(e=Date.now()){if(!L){L=!0;let t=null;try{t=localStorage.getItem(A)}catch(e){}I(null),F(M(P(),t,e))}return N(P(),e)}function ie(e){let t=P(),n=new Set(e),r=!1;for(let e of Object.keys(t))n.has(e)||(delete t[e],r=!0);r&&F(t)}function ae(e,t,n){return e!==`left`&&e!==`right`||!(t>0)||!(n>0)?null:{dir:t>=n?`row`:`column`,adsFirst:e===`left`}}var z={delay_s:20,image_s:8,fit:`cover`,split:`off`},B=(e,t,n)=>Math.min(n,Math.max(t,e)),V=`ember.cds.idle.delay`,oe=`ember.cds.idle.image`,se=`ember.cds.idle.fit`,H=`ember.cds.split`;function ce(){let e=(e,t,n,r)=>{try{let i=localStorage.getItem(e);if(i==null||i===``)return t;let a=Number(i);return Number.isFinite(a)?B(Math.round(a),n,r):t}catch(e){return t}},t=z.fit;try{localStorage.getItem(se)===`contain`&&(t=`contain`)}catch(e){}let n=z.split;try{let e=localStorage.getItem(H);(e===`left`||e===`right`)&&(n=e)}catch(e){}return{delay_s:e(V,z.delay_s,5,120),image_s:e(oe,z.image_s,2,60),fit:t,split:n}}function le(e){try{e.delay_s!=null&&localStorage.setItem(V,String(B(Math.round(e.delay_s),5,120))),e.image_s!=null&&localStorage.setItem(oe,String(B(Math.round(e.image_s),2,60))),e.fit!=null&&localStorage.setItem(se,e.fit),e.split!=null&&localStorage.setItem(H,e.split===`left`||e.split===`right`?e.split:`off`)}catch(e){}}function ue(e){return e.slice().sort((e,t)=>{var n,r;return((n=e.pos)==null?e.addedAt:n)-((r=t.pos)==null?t.addedAt:r)||e.addedAt-t.addedAt||e.id.localeCompare(t.id)})}function de(e,t,n){let r=e.indexOf(t),i=r+n;if(r<0||i<0||i>=e.length)return e.slice();let a=e.slice();return[a[r],a[i]]=[a[i],a[r]],a}function fe(e,t){let n=Number(e==null?void 0:e.seconds);return Math.min(60,Math.max(2,Math.round(Number.isFinite(n)&&n>0?n:t)))*1e3}function U(e,t=``){let n=(e||``).toLowerCase();if(n.startsWith(`image/`))return`image`;if(n.startsWith(`video/`))return`video`;let r=(t.toLowerCase().match(/\.([a-z0-9]+)$/)||[,``])[1];return/^(jpe?g|png|gif|webp|avif|bmp|heic|heif)$/.test(r)?`image`:/^(mp4|m4v|webm|mov|mkv|ogv|3gp)$/.test(r)?`video`:`unplayable`}var pe=12e4;function me(e,t,n){return e.filter(e=>{var r;return U(e.type,e.name)!==`unplayable`&&!(((r=t[e.id])==null?0:r)>n)})}function he(e,t,n,r){let i=e.length,a=r==null?-1:e.findIndex(e=>e.id===r);for(let r=1;r<=i;r++){var o;let s=e[(a+r+i)%i];if(U(s.type,s.name)!==`unplayable`&&!(((o=t[s.id])==null?0:o)>n))return s}return null}function ge(e,t){let n=null;for(let r of Object.values(e))r>t&&(n==null||r<n)&&(n=r);return n}var _e=104857600,ve=`ember-cds-idle`,ye=1,W=`meta`,G=`blob`,be=class extends Error{};function K(){return new Promise((e,t)=>{let n;try{if(typeof indexedDB>`u`||!indexedDB){t(new be(`this device has no local storage for files`));return}n=indexedDB.open(ve,ye)}catch(e){t(new be((e==null?void 0:e.message)||`local file storage is blocked`));return}n.onupgradeneeded=()=>{let e=n.result;e.objectStoreNames.contains(W)||e.createObjectStore(W,{keyPath:`id`}),e.objectStoreNames.contains(G)||e.createObjectStore(G)},n.onsuccess=()=>e(n.result),n.onerror=()=>{var e;return t(new be(((e=n.error)==null?void 0:e.message)||`local file storage would not open`))},n.onblocked=()=>t(new be(`another window has this screen open`))})}function q(e,t){return new Promise((n,r)=>{e.oncomplete=()=>n(t()),e.onabort=()=>r(e.error||Error(`the write was rolled back`)),e.onerror=()=>r(e.error||Error(`the write failed`))})}async function xe(){let e=await K();try{let t=e.transaction(W,`readonly`),n=t.objectStore(W).getAll();return ue(await q(t,()=>n.result||[]))}finally{e.close()}}async function Se(e){let t=await K();try{let n=t.transaction(W,`readwrite`),r=n.objectStore(W),i=r.getAll();i.onsuccess=()=>{var t;let n=i.result||[],a=new Map(((t=e.order)==null?[]:t).map((e,t)=>[e,t]));for(let t of n){let n=!1;if(a.has(t.id)&&(t.pos=a.get(t.id),n=!0),e.seconds&&e.seconds.id===t.id){let r=Number(e.seconds.seconds);t.seconds=Number.isFinite(r)&&r>0?r:null,n=!0}n&&r.put(t)}},await q(n,()=>null)}finally{t.close()}}async function Ce(e){let t=await K();try{let n=t.transaction(G,`readonly`),r=n.objectStore(G).get(e);return await q(n,()=>{var e;return(e=r.result)==null?null:e})}finally{t.close()}}function we(e,t){let n=0;for(let e of t)n=(n<<5)-n+e.charCodeAt(0)|0;return e.toString(36)+`-`+(n>>>0).toString(36)}var Te=1920,Ee=`too large for this tablet, export it at 1080p`;function De(e,t,n=Te){if(!(e>0&&t>0))return null;let r=Math.max(e,t);if(r<=n)return null;let i=n/r;return{w:Math.max(1,Math.round(e*i)),h:Math.max(1,Math.round(t*i))}}function Oe(e,t){return e>0&&t>0?Math.max(e,t)>1920||Math.min(e,t)>1080:!1}async function ke(e){if(/gif$/i.test(e.type)||/\.gif$/i.test(e.name)||typeof createImageBitmap!=`function`||typeof document>`u`)return e;let t=null;try{t=await createImageBitmap(e);let n=De(t.width,t.height);if(!n)return e;let r=document.createElement(`canvas`);r.width=n.w,r.height=n.h;let i=r.getContext(`2d`);if(!i)return e;let a=/png$/i.test(e.type);i.drawImage(t,0,0,n.w,n.h);let o=await new Promise(e=>{try{r.toBlob(t=>e(t),a?`image/png`:`image/jpeg`,.85)}catch(t){e(null)}});return r.width=0,r.height=0,o&&o.size>0?o:e}catch(t){return e}finally{try{t==null||t.close()}catch(e){}}}function Ae(e,t=8e3){var n;return typeof document>`u`||typeof((n=URL)==null?void 0:n.createObjectURL)!=`function`?Promise.resolve(null):new Promise(n=>{let r=``,i=null,a=null,o=e=>{if(a&&clearTimeout(a),a=null,i){i.onloadedmetadata=null,i.onerror=null;try{i.removeAttribute(`src`),i.load()}catch(e){}}if(i=null,r){try{URL.revokeObjectURL(r)}catch(e){}r=``}n(e)};try{r=URL.createObjectURL(e),i=document.createElement(`video`),i.preload=`metadata`,i.muted=!0,i.onloadedmetadata=()=>o(i?{w:i.videoWidth,h:i.videoHeight}:null),i.onerror=()=>o(null),a=setTimeout(()=>o(null),t),i.src=r}catch(e){o(null)}})}async function je(e){let t=Array.from(e),n=[],r=[],i=[];for(let e of t){let t=U(e.type,e.name);if(t===`unplayable`){r.push({name:e.name,why:`a screen can only show a picture or a video`});continue}let n=t===`image`?await ke(e):e;if(t===`video`){let t=await Ae(e);if(t&&Oe(t.w,t.h)){r.push({name:e.name,why:Ee});continue}}if(n.size>104857600){r.push({name:e.name,why:`too big, ${Math.round(e.size/1024/1024)}MB, and the limit is ${_e/1024/1024}MB`});continue}if(e.size===0){r.push({name:e.name,why:`the file is empty`});continue}let a=Date.now(),o={id:we(a+i.length,e.name+`:`+e.size),name:e.name||`Untitled`,type:n!==e&&n.type||e.type||(t===`video`?`video/mp4`:`image/jpeg`),size:n.size,addedAt:a+i.length};i.push({item:o,blob:n})}if(i.length){let e=await K();try{for(let{item:t,blob:a}of i)try{let r=e.transaction([W,G],`readwrite`);r.objectStore(W).put(t),r.objectStore(G).put(a,t.id),await q(r,()=>null),n.push(t)}catch(e){let n=/quota/i.test((e==null?void 0:e.name)+(e==null?void 0:e.message))?`this device has run out of room, remove something first`:(e==null?void 0:e.message)||`the device would not keep it`;r.push({name:t.name,why:n})}}finally{e.close()}}return{added:n,refused:r}}async function Me(e){let t=await K();try{let n=t.transaction([W,G],`readwrite`);n.objectStore(W).delete(e),n.objectStore(G).delete(e),await q(n,()=>null)}finally{t.close()}}async function Ne(){let e=await K();try{let t=e.transaction([W,G],`readwrite`);t.objectStore(W).clear(),t.objectStore(G).clear(),await q(t,()=>null)}finally{e.close()}}function J(e){return e<1048576?Math.max(1,Math.round(e/1024))+`KB`:(e/1024/1024).toFixed(+(e<10485760))+`MB`}function Pe(e,t,n,r){return n>0||!e||typeof t!=`string`||!t||t===e.src?!1:r-e.at>=0&&r-e.at<6e4}function Fe(e,t,n){return typeof e==`string`&&e&&t>0?{src:e,at:n}:null}var Y;function X(){if(Y!==void 0)return Y;Y=null;try{var e;let n=window.Capacitor;if(typeof(n==null?void 0:n.isNativePlatform)==`function`&&n.isNativePlatform()&&(n==null||(e=n.getPlatform)==null?void 0:e.call(n))===`android`){var t;n.registerPlugin?Y=n.registerPlugin(`CdsMedia`):(t=n.Plugins)!=null&&t.CdsMedia&&(Y=n.Plugins.CdsMedia)}}catch(e){Y=null}return Y}function Ie(){return!!X()}var Le=e=>{var t;return{items:((t=e.items)==null?[]:t).map(e=>({...e,size:Number(e.size)||0,addedAt:Number(e.addedAt)||0})),used:Number(e.used)||0,free:Number.isFinite(Number(e.free))?Number(e.free):null}};async function Re(){let e=await xe(),t=null;try{var n,r;let e=await((n=navigator.storage)==null||(r=n.estimate)==null?void 0:r.call(n));e&&e.quota!=null&&e.usage!=null&&(t=Math.max(0,e.quota-e.usage))}catch(e){}return{items:e,used:e.reduce((e,t)=>e+t.size,0),free:t}}async function ze(){let e=X();return e?Le(await e.list()):Re()}async function Be(e){let t=X();if(t){var n,r;let e=await t.pick();return{library:Le(e),added:(n=e.added)==null?[]:n,refused:(r=e.refused)==null?[]:r,canceled:!!e.canceled}}if(!e||!e.length)return{library:await Re(),added:[],refused:[],canceled:!0};let i=await je(e);return{library:await Re(),added:i.added,refused:i.refused}}async function Ve(e){let t=X();return t?Le(await t.remove({id:e})):(await Me(e),Re())}async function He(e){let t=X();return t?Le(await t.order({ids:e})):(await Se({order:e}),Re())}async function Ue(e,t){let n=X();return n?Le(await n.seconds({id:e,seconds:t&&t>0?Math.round(t):0})):(await Se({seconds:{id:e,seconds:t}}),Re())}async function We(e){if(X()&&e.file)return{url:`${window.location.origin}/_cds_media_/${encodeURIComponent(e.file)}`,release:()=>{}};let t=await Ce(e.id);if(!t)return null;let n=URL.createObjectURL(t);return{url:n,release:()=>URL.revokeObjectURL(n)}}async function Ge(){let e=X();if(!e)return 0;let t=[];try{t=ue(await xe())}catch(e){return 0}if(!t.length)return 0;let n=0,r=!0;for(let[i,a]of t.entries())try{let t=await Ce(a.id);if(!t||U(a.type,a.name)===`unplayable`){await Me(a.id);continue}let{id:r,file:o}=await e.importStart({name:a.name,type:a.type}),s=524288;for(let n=0;n<t.size;n+=s){let r=new Uint8Array(await t.slice(n,n+s).arrayBuffer()),i=``;for(let e=0;e<r.length;e+=32768)i+=String.fromCharCode(...r.subarray(e,e+32768));await e.importChunk({file:o,data:btoa(i)})}await e.importEnd({id:r,file:o,name:a.name,type:a.type,addedAt:a.addedAt||Date.now()+i}),await Me(a.id),n++}catch(e){r=!1}if(r)try{await Ne()}catch(e){}return n}var Z=a(),Ke=null,qe={},Je=new Set;function Ye(e,t,n=``){var r;let i=`${e}:${(r=t==null?void 0:t.id)==null?``:r}`;if(!Je.has(i)){Je.add(i);try{var a,o,s,c;(a=(o=window).__emberReport)==null||a.call(o,`[cds] ad failed stage=${e} type=${(s=t==null?void 0:t.type)==null?``:s} size=${(c=t==null?void 0:t.size)==null?``:c}${n?` `+n:``}`)}catch(e){}}}var Xe=12e4;function Ze(){let e=Date.now(),t=O(),n={};for(let[r,i]of Object.entries(R(e)))n[r]=t+(i-e);return n}function Qe({fit:e,imageMs:t,onEmpty:n,generation:r}){var i,a,o;let[s,c]=(0,T.useState)(null),[l,u]=(0,T.useState)(null),d=(0,T.useRef)(Ke).current,[f,p]=(0,T.useState)(()=>{let e=O(),t={};for(let[n,r]of Object.entries({...qe,...Ze()}))r>e&&(t[n]=r);return qe=t,t}),[m,ee]=(0,T.useState)(()=>O()),h=(0,T.useRef)([]),g=(0,T.useRef)({});h.current=s==null?[]:s,g.current=f;let[_,v]=(0,T.useState)(null),[y,b]=(0,T.useState)(0),x=(0,T.useRef)(null),S=(0,T.useRef)(null),C=(0,T.useCallback)(e=>{let t=S.current;if(t&&t!==e)try{t.pause(),t.removeAttribute(`src`),t.load()}catch(e){}S.current=e},[]),w=(0,T.useMemo)(()=>me(s==null?[]:s,f,m),[s,f,m]),E=(i=w.find(e=>e.id===l))==null?he(s==null?[]:s,f,m,l==null?d:l):i,te=(0,T.useRef)(null);te.current=(a=E==null?void 0:E.id)==null?null:a;let D=!!_&&w.length===1&&w[0].id===_.id,[A,j]=(0,T.useState)(0),ne=(0,T.useRef)(0);(0,T.useEffect)(()=>{let e=!0,t=null;return ze().then(t=>{e&&(ne.current=0,c(t.items),ie(t.items.map(e=>e.id)))}).catch(n=>{var r;e&&(Ye(`list`,void 0,String((r=n==null?void 0:n.message)==null?n:r)),t=setTimeout(()=>j(e=>e+1),k(ne.current)),ne.current+=1)}),()=>{e=!1,t&&clearTimeout(t)}},[r,A]);let M=()=>{var e,t;return u((e=(t=he(h.current,g.current,O(),te.current))==null?void 0:t.id)==null?null:e)},N=()=>{x.current=null,M()},P=e=>{var t,n;let r=O(),i={...g.current,[e]:r+pe};g.current=i,qe=i,x.current===e&&(x.current=null),I(null),p(i),ee(r),u((t=(n=he(h.current,i,r,e))==null?void 0:n.id)==null?null:t)};(0,T.useEffect)(()=>{let e=ge(f,m);if(e==null)return;let t=setTimeout(()=>ee(O()),Math.max(250,e-O()));return()=>clearTimeout(t)},[f,m]),(0,T.useEffect)(()=>{if(!E||(_==null?void 0:_.id)===E.id)return;let e=!0,t=E;return We(t).then(n=>{e?n?(I(t.id),u(t.id),v({id:t.id,kind:U(t.type,t.name)===`video`?`video`:`image`,url:n.url,release:n.release})):(Ye(`open-null`,t),P(t.id)):n==null||n.release()}).catch(n=>{if(e){var r;Ye(`open`,t,String((r=n==null?void 0:n.message)==null?n:r)),P(t.id)}}),()=>{e=!1}},[E==null?void 0:E.id]),(0,T.useEffect)(()=>{let e=_==null?void 0:_.release;return()=>{e==null||e()}},[_==null?void 0:_.url]);let F=(0,T.useRef)(null);(0,T.useEffect)(()=>{if(!_)return;Ke=_.id;let e=F.current;F.current=_.id,e&&e!==_.id&&re(e)},[_==null?void 0:_.id]),(0,T.useEffect)(()=>{let e=()=>I(null);return window.addEventListener(`pagehide`,e),()=>{window.removeEventListener(`pagehide`,e),e()}},[]);let L=(0,T.useRef)(null);L.current=(o=_==null?void 0:_.id)==null?null:o,(0,T.useEffect)(()=>{let e=()=>{document.visibilityState===`visible`?L.current&&I(L.current):I(null)};return document.addEventListener(`visibilitychange`,e),()=>document.removeEventListener(`visibilitychange`,e)},[]),(0,T.useEffect)(()=>{let e=_==null?void 0:_.id;if(!e)return;let t=setTimeout(()=>re(e),Xe);return()=>clearTimeout(t)},[_==null?void 0:_.id]),(0,T.useEffect)(()=>{s!==null&&!E&&_&&(I(null),v(null))},[s,E,_]),(0,T.useEffect)(()=>{if(!_||_.kind!==`image`||D||w.length===0)return;let e=h.current.find(e=>e.id===_.id),n=setTimeout(M,Math.max(2e3,fe(e,t/1e3)));return()=>clearTimeout(n)},[_==null?void 0:_.id,_==null?void 0:_.url,t,D,w.length,s]),(0,T.useEffect)(()=>{if(!_||_.kind!==`video`)return;let e=_.id,t=-1,n=O(),r=!1,i=0,a=0,o=setInterval(()=>{let o=S.current;if(!o)return;if(o.ended){if(!i){i=O();return}if(O()-i<5e3)return;if(i=0,D){try{o.currentTime=0,o.play().catch(()=>{})}catch(e){}return}N();return}if(i=0,o.currentTime!==t){t=o.currentTime,n=O(),r=!1,++a>=20&&x.current===e&&(x.current=null);return}if(O()-n<7500)return;if(!r){r=!0,o.play().catch(()=>{});return}if(O()-n<15e3)return;let s=h.current.find(t=>t.id===e),c=`t=${o.currentTime} rs=${o.readyState} ns=${o.networkState}`;Ye(x.current===e?`stall-rest`:`stall-reload`,s,c),x.current===e?P(e):(x.current=e,b(e=>e+1))},3e3);return()=>clearInterval(o)},[_==null?void 0:_.id,_==null?void 0:_.url,y,D]);let R=s!==null&&!s.some(e=>U(e.type,e.name)!==`unplayable`);if((0,T.useEffect)(()=>{R&&(n==null||n())},[R]),s===null||R||!E||!_)return null;let ae=()=>{var e,t;let n=_.kind===`video`?(e=S.current)==null?void 0:e.error:null;Ye(_.kind===`video`?`onerror`:`img-onerror`,h.current.find(e=>e.id===_.id),n?`code=${n.code} msg=${(t=n.message)==null?``:t}`:``),P(_.id)};return(0,Z.jsx)(`div`,{className:`cds-idle-media`,"aria-hidden":`true`,children:_.kind===`video`?(0,Z.jsx)(`video`,{ref:C,src:_.url,autoPlay:!0,muted:!0,playsInline:!0,loop:D,onEnded:D?void 0:N,onError:ae,style:{objectFit:e}},`${_.id}:${y}`):(0,Z.jsx)(`img`,{src:_.url,alt:``,onError:ae,style:{objectFit:e}},_.id)})}function $e({light:e,onChanged:t,onActivity:n,onPlayNow:r}){var i;let[a,o]=(0,T.useState)(null),[s,c]=(0,T.useState)(ce),[l,u]=(0,T.useState)(!1),[d,f]=(0,T.useState)(null),[p,m]=(0,T.useState)(null),[ee,h]=(0,T.useState)({}),[_]=(0,T.useState)(()=>R()),v=(0,T.useRef)(null),y=Ie(),b=e?`rgba(23,19,16,0.62)`:`rgba(255,255,255,0.62)`,x=e?`rgba(23,19,16,0.16)`:`rgba(255,255,255,0.16)`,S=e?`rgba(23,19,16,0.04)`:`rgba(255,255,255,0.05)`,C=(i=a==null?void 0:a.items)==null?null:i,w=e=>{o(e),t()},E=()=>ze().then(o).catch(e=>{o({items:[],used:0,free:null}),f((e==null?void 0:e.message)||`this device will not keep files`)});(0,T.useEffect)(()=>{E()},[]),(0,T.useEffect)(()=>{if(!l)return;let e=setInterval(n,1e4);return()=>clearInterval(e)},[l]),(0,T.useEffect)(()=>{if(!p)return;let e=setTimeout(()=>m(null),4e3);return()=>clearTimeout(e)},[p]);async function te(e){n(),u(!0),f(null);try{let t=await Be(e);t.refused.length&&f(t.refused.map(e=>`${e.name}, ${e.why}`).join(`  ·  `)),w(t.library)}catch(e){f((e==null?void 0:e.message)||`this device will not keep files`),ze().then(w).catch(()=>{})}finally{u(!1),n(),v.current&&(v.current.value=``)}}async function D(e,t){n(),u(!0),f(null);try{w(await e())}catch(e){f((e==null?void 0:e.message)||t)}finally{u(!1)}}let O=(e,t)=>{if(!C)return;let n=de(C.map(e=>e.id),e,t);o(e=>e&&{...e,items:n.map(t=>e.items.find(e=>e.id===t)).filter(Boolean)}),D(()=>He(n),`the new order was not saved`)},k=e=>{p===e?(m(null),D(()=>Ve(e),`it would not come off`)):(m(e),n())};function A(e){n();let r={...s,...e};c(r),le(e),t()}let j=(C==null?[]:C).some(e=>U(e.type,e.name)===`image`),ne=[3,5,8,10,15,20,30,45,60].filter(e=>e>=2&&e<=60);return(0,Z.jsxs)(`div`,{className:`cds-idle-setup`,children:[(0,Z.jsx)(`div`,{className:`cds-idle-top`,children:(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`div`,{className:`cds-idle-h`,children:`Customer screen settings`}),(0,Z.jsxs)(`p`,{className:`cds-idle-note`,style:{color:b},children:[`Your ads play full screen whenever nobody is ordering, and step aside the moment something is rung up. `,(0,Z.jsxs)(`b`,{children:[`They are kept on this `,y?`tablet`:`device`,` only`]}),`, nothing is uploaded, so another counter needs its own.`]})]})}),!y&&(0,Z.jsx)(`input`,{ref:v,type:`file`,multiple:!0,accept:`image/*,video/*`,className:`cds-idle-file`,onChange:e=>void te(e.target.files)}),(0,Z.jsxs)(`div`,{className:`cds-idle-section`,style:{background:S,borderColor:x},children:[(0,Z.jsxs)(`div`,{className:`cds-idle-sechead`,children:[(0,Z.jsx)(`span`,{className:`cds-idle-sub`,children:`Your ads`}),(0,Z.jsxs)(`span`,{className:`cds-idle-actions`,children:[(0,Z.jsx)(`button`,{type:`button`,className:`cds-exit-btn`,disabled:l,onClick:()=>{var e;n(),y?te():(e=v.current)==null||e.click()},children:l?`Working…`:`Add pictures or videos`}),r&&(0,Z.jsx)(`button`,{type:`button`,className:`cds-exit-btn cds-exit-go`,disabled:l||!(C!=null&&C.length),onClick:r,children:`Play my ads now`})]})]}),d&&(0,Z.jsx)(`p`,{className:`cds-idle-trouble`,style:{color:e?`#a3300b`:`#ffb08a`},children:d}),C===null?null:C.length===0?(0,Z.jsx)(`p`,{className:`cds-idle-note cds-idle-empty`,style:{color:b},children:`No ads yet - the screen shows the usual welcome page. Pick as many pictures and videos as you like; they play one after another and start again from the first.`}):(0,Z.jsx)(`ol`,{className:`cds-idle-list`,children:C.map((t,n)=>{let r=U(t.type,t.name)===`video`;return(0,Z.jsxs)(`li`,{style:{borderColor:x},children:[(0,Z.jsx)(`span`,{className:`cds-idle-pos`,style:{color:b},children:n+1}),(0,Z.jsx)(nt,{item:t,video:r,line:x,onPlayable:e=>h(n=>n[t.id]===!e?n:{...n,[t.id]:!e})}),(0,Z.jsxs)(`span`,{className:`cds-idle-what`,children:[(0,Z.jsx)(`span`,{className:`cds-idle-name`,children:t.name}),_[t.id]?(0,Z.jsxs)(`span`,{className:`cds-idle-meta cds-idle-bad`,style:{color:e?`#a3300b`:`#ffb08a`},children:[`This tablet could not play this · `,J(t.size)]}):ee[t.id]?(0,Z.jsxs)(`span`,{className:`cds-idle-meta cds-idle-bad`,style:{color:e?`#a3300b`:`#ffb08a`},children:[`Won't play here · `,J(t.size)]}):(0,Z.jsxs)(`span`,{className:`cds-idle-meta`,style:{color:b},children:[r?`Video`:`Picture`,` · `,J(t.size)]})]}),r?(0,Z.jsx)(`span`,{className:`cds-idle-secs cds-idle-secs-note`,style:{color:b},children:`Plays to the end`}):(0,Z.jsxs)(g,{className:`cds-idle-secs`,"aria-label":`How long ${t.name} stays on screen`,value:t.seconds?String(t.seconds):``,disabled:l,onChange:e=>{let n=Number(e.target.value)||null;D(()=>Ue(t.id,n),`that was not saved`)},style:{borderColor:x},children:[(0,Z.jsxs)(`option`,{value:``,children:[`Usual (`,s.image_s,`s)`]}),ne.map(e=>(0,Z.jsxs)(`option`,{value:String(e),children:[e,` seconds`]},e))]}),(0,Z.jsxs)(`span`,{className:`cds-idle-move`,children:[(0,Z.jsx)(`button`,{type:`button`,disabled:l||n===0,onClick:()=>O(t.id,-1),"aria-label":`Play ${t.name} earlier`,style:{borderColor:x},children:`▲`}),(0,Z.jsx)(`button`,{type:`button`,disabled:l||n===C.length-1,onClick:()=>O(t.id,1),"aria-label":`Play ${t.name} later`,style:{borderColor:x},children:`▼`})]}),(0,Z.jsx)(`button`,{type:`button`,className:`cds-idle-x`+(p===t.id?` is-armed`:``),disabled:l,onClick:()=>k(t.id),"aria-label":`Take ${t.name} off this screen`,children:p===t.id?`Tap again`:`Remove`})]},t.id)})}),C&&C.some(e=>ee[e.id])&&(0,Z.jsx)(`p`,{className:`cds-idle-trouble`,style:{color:e?`#a3300b`:`#ffb08a`},children:`A video marked above will not play on this tablet, so the screen skips it. It is usually how the phone recorded it (HEVC, 4K or HDR). Save it again as an MP4 at 1080p or smaller - in CapCut, Export at 1080p; on an iPhone, set Settings › Camera › Formats to Most Compatible before recording - then remove this one and add the new copy.`}),C&&C.some(e=>_[e.id])&&(0,Z.jsx)(`p`,{className:`cds-idle-trouble`,style:{color:e?`#a3300b`:`#ffb08a`},children:`The screen closed while a file marked above was showing, so it is set aside for a day. It is usually too big for this tablet: a picture over 4000 pixels wide, or a 4K video. Save a smaller copy (a picture under 2000 pixels, a video as an MP4 at 1080p), then remove this one and add the new copy.`}),a&&(0,Z.jsxs)(`p`,{className:`cds-idle-note cds-idle-store`,style:{color:b},children:[C!=null&&C.length?`${C.length} ${C.length===1?`ad`:`ads`}, ${J(a.used)} on this ${y?`tablet`:`device`}`:`Nothing stored yet`,a.free==null?``:` · ${J(a.free)} free`,y?` · kept in the app’s own storage, so they stay through restarts and updates. Only uninstalling the app, or clearing its storage in Android settings, removes them.`:` · kept by this browser on this device. Clearing the browser’s data removes them.`]})]}),(0,Z.jsxs)(`div`,{className:`cds-idle-section`,style:{background:S,borderColor:x},children:[(0,Z.jsx)(`div`,{className:`cds-idle-sub`,children:`How they play`}),(0,Z.jsxs)(`div`,{className:`cds-idle-rows`,children:[(0,Z.jsxs)(`div`,{className:`cds-idle-row`,children:[(0,Z.jsx)(`span`,{children:`Screen layout`}),(0,Z.jsx)(`span`,{className:`cds-idle-seg`,children:[[`off`,`Full screen`],[`left`,`Ads on the left`],[`right`,`Ads on the right`]].map(([e,t])=>(0,Z.jsx)(`button`,{type:`button`,className:`cds-idle-segbtn`+(s.split===e?` is-on`:``),style:{borderColor:x},onClick:()=>A({split:e}),children:t},e))})]}),(0,Z.jsxs)(`label`,{className:`cds-idle-row`,children:[(0,Z.jsx)(`span`,{children:`Start after a sale, once the screen has been quiet for`}),(0,Z.jsxs)(`span`,{className:`cds-idle-num`,children:[(0,Z.jsx)(`input`,{type:`number`,inputMode:`numeric`,min:5,max:120,value:s.delay_s,onChange:e=>A({delay_s:Number(e.target.value)||5}),style:{borderColor:x,color:`inherit`}}),(0,Z.jsx)(`span`,{style:{color:b},children:`seconds`})]})]}),j&&(0,Z.jsxs)(`label`,{className:`cds-idle-row`,children:[(0,Z.jsx)(`span`,{children:`Usual time for each picture`}),(0,Z.jsxs)(`span`,{className:`cds-idle-num`,children:[(0,Z.jsx)(`input`,{type:`number`,inputMode:`numeric`,min:2,max:60,value:s.image_s,onChange:e=>A({image_s:Number(e.target.value)||2}),style:{borderColor:x,color:`inherit`}}),(0,Z.jsx)(`span`,{style:{color:b},children:`seconds`})]})]}),(0,Z.jsxs)(`div`,{className:`cds-idle-row`,children:[(0,Z.jsx)(`span`,{children:`Fit to the screen`}),(0,Z.jsx)(`span`,{className:`cds-idle-seg`,children:[[`cover`,`Fill, crop the edges`],[`contain`,`Show all of it`]].map(([e,t])=>(0,Z.jsx)(`button`,{type:`button`,className:`cds-idle-segbtn`+(s.fit===e?` is-on`:``),style:{borderColor:x},onClick:()=>A({fit:e}),children:t},e))})]})]}),(0,Z.jsx)(`p`,{className:`cds-idle-note`,style:{color:b,marginBottom:0},children:`Videos play without sound, a screen nobody touches cannot be given permission to make a noise. Keep this tablet plugged in: at a normal shop it is on about ten hours a day.`})]})]})}var et=Promise.resolve();function tt(e){et=et.then(()=>new Promise(t=>{let n=!1,r=setTimeout(()=>i(),2e4),i=()=>{n||(n=!0,clearTimeout(r),t())};try{e(i)}catch(e){i()}}))}function nt({item:e,video:t,line:n,onPlayable:r}){let[i,a]=(0,T.useState)(null),o=(0,T.useRef)(null);return(0,T.useEffect)(()=>{let n=null,i=!0,s=null,c=null;return We(e).then(e=>{e&&(i?(n=e.release,tt(t?t=>{if(c=t,!i){t();return}s=document.createElement(`video`),s.muted=!0,s.playsInline=!0,s.preload=`metadata`;let n=!1,a=e=>{!n&&i&&(n=!0,r==null||r(e))},l=setTimeout(()=>{a(!1),u()},15e3),u=()=>{clearTimeout(l);try{s==null||s.removeAttribute(`src`),s==null||s.load()}catch(e){}s=null,t()};s.onloadeddata=()=>{if(s&&!s.videoWidth)a(!1),u();else try{s.currentTime=Math.min(3,(s.duration||2)/4)}catch(e){a(!0),u()}},s.onseeked=()=>{let e=o.current;if(a(!!(s&&s.videoWidth)),e&&s&&s.videoWidth){e.width=176,e.height=Math.round(176*s.videoHeight/s.videoWidth)||110;try{var t;(t=e.getContext(`2d`))==null||t.drawImage(s,0,0,e.width,e.height)}catch(e){}}u()},s.onerror=()=>{a(!1),u()},s.src=e.url}:t=>{if(c=t,!i){t();return}let r=()=>{i&&a(e.url),t()},s=window.createImageBitmap;typeof s!=`function`||typeof fetch!=`function`?r():fetch(e.url).then(e=>e.blob()).then(e=>s(e,{resizeWidth:176,resizeQuality:`low`})).then(e=>{let r=o.current;if(i&&r&&e.width){r.width=176,r.height=Math.round(176*e.height/e.width)||110;try{var a;(a=r.getContext(`2d`))==null||a.drawImage(e,0,0,r.width,r.height)}catch(e){}}try{e.close()}catch(e){}n==null||n(),n=null,t()}).catch(r)})):e.release())}).catch(()=>{}),()=>{if(i=!1,s)try{s.removeAttribute(`src`),s.load()}catch(e){}c==null||c(),n==null||n()}},[e.id,e.file]),(0,Z.jsxs)(`span`,{className:`cds-idle-thumb`,style:{borderColor:n},children:[i?(0,Z.jsx)(`img`,{src:i,alt:``}):(0,Z.jsx)(`canvas`,{ref:o}),t&&(0,Z.jsx)(`span`,{className:`cds-idle-badge`,"aria-label":`Video`,children:(0,Z.jsx)(`svg`,{width:`10`,height:`10`,viewBox:`0 0 10 10`,fill:`currentColor`,"aria-hidden":`true`,children:(0,Z.jsx)(`path`,{d:`M2 1l7 4-7 4z`})})})]})}var rt=`
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
`,it=[{score:1,glyph:`:-(`,label:`Bad`},{score:2,glyph:`:-/`,label:`Not great`},{score:3,glyph:`:-|`,label:`OK`},{score:4,glyph:`:-)`,label:`Good`},{score:5,glyph:`:-D`,label:`Great`}],at=8e3,ot=25e3,st=14e3;function ct(e,t){var n,r;return e&&((n=(r=e.items)==null?void 0:r.length)==null?0:n)===0?e:{...e==null?t:e,mode:`cart`,items:[],subtotal_cents:0,discount_cents:0,total_cents:0,service_charge_cents:void 0,service_charge_label:void 0,tax_cents:void 0,tax_label:void 0,customer_name:null,stamps:void 0,stamps_required:void 0,ready_in_min:void 0,qr_image:void 0,qr_method:void 0,qr_amount_cents:void 0,paid_total_cents:void 0,change_cents:void 0}}function Q(){var e,t,n,r,i,a;v(!0,`cds`);let[w,E]=(0,T.useState)(null),[O,A]=(0,T.useState)(``),[j,ne]=(0,T.useState)(`live`),M=(0,T.useRef)(null),N=(0,T.useRef)(0),P=(0,T.useRef)(null),F=(0,T.useRef)(null),I=(0,T.useRef)(null),re=(0,T.useRef)(null),L=(0,T.useRef)(null);(0,T.useEffect)(()=>{var e,t;let n=()=>{P.current&&(clearTimeout(P.current),P.current=null)},r=window.ember.display.onData(e=>{var t;let r=e;r!=null&&r.config&&(re.current=r.config);let i=(t=r==null?void 0:r.mode)==null?`cart`:t;if(i===`cart`){var a,o,s,c;let e=(a=(o=r.items)==null?void 0:o.length)==null?0:a;if(Pe(L.current,r.src,e,Date.now())||(L.current=Fe(r.src,e,Date.now()),M.current=r,Date.now()<N.current&&((s=(c=r.items)==null?void 0:c.length)==null?0:s)===0))return;n(),N.current=0,E(r)}else if(i===`endqr`){if(L.current=null,!M.current){E(e=>(e==null?void 0:e.mode)===`qr`?null:e);return}n(),N.current=0,E(M.current)}else n(),i===`paid`&&(L.current=null,F.current=r,N.current=Date.now()+at,P.current=setTimeout(()=>{P.current=null,N.current=0,E(ct(M.current,r))},at)),E(r)});window.ember.settings.publicInfo().then(e=>A(e.restaurant_name)).catch(()=>{});let i=(e=window.ember.display)==null||(t=e.onLink)==null?void 0:t.call(e,e=>ne(e));return()=>{r(),n();try{i==null||i()}catch(e){}}},[]);let R=C((e=w==null?void 0:w.config)==null?re.current:e),ie=(t=w==null?void 0:w.items)==null?[]:t,z=(0,T.useRef)(x()).current,[B,V]=(0,T.useState)(!1),[oe,se]=(0,T.useState)(!1),H=typeof window<`u`?(n=window.ember)==null?void 0:n.auth:null,le=z&&typeof(H==null?void 0:H.verifyCapability)==`function`&&typeof(H==null?void 0:H.loginUsers)==`function`,[ue,de]=(0,T.useState)(!1),[fe,U]=(0,T.useState)([]),[pe,me]=(0,T.useState)(``),[he,ge]=(0,T.useState)(``),[_e,ve]=(0,T.useState)(``),[ye,W]=(0,T.useState)(!1);(0,T.useEffect)(()=>{B||(de(!1),ge(``),ve(``),W(!1))},[B]),(0,T.useEffect)(()=>{if(!B||!le||ue)return;let e=!0;return Promise.resolve(H.loginUsers()).then(t=>{if(!e)return;let n=e=>e===`owner`?0:e===`manager`?1:2,r=[...t==null?[]:t].filter(e=>e&&e.username).sort((e,t)=>n(String(e.role))-n(String(t.role)));r.length===0?de(!0):(U(r),me(r[0].username))}).catch(()=>{e&&ve(`Could not check who may open this. Try again in a moment.`)}),()=>{e=!1}},[B,le,ue]);async function G(){if(pe&&he&&!ye){W(!0),ve(``);try{await H.verifyCapability(pe,he,`settings.write`)?(de(!0),ge(``)):(ve(`That is not right, or that person cannot change settings.`),ge(``))}catch(e){ve(`Too many tries. Wait a minute, then try again.`),ge(``)}finally{W(!1)}}}(0,T.useEffect)(()=>{if(!B)return;let e=()=>V(!1),t=t=>{(t.key===`Escape`||t.key===`Esc`)&&e()};return document.addEventListener(`backbutton`,e),document.addEventListener(`keydown`,t),()=>{document.removeEventListener(`backbutton`,e),document.removeEventListener(`keydown`,t)}},[B]);let[be,K]=(0,T.useState)(0),[q,xe]=(0,T.useState)(ce),[Se,Ce]=(0,T.useState)(!1),[we,Te]=(0,T.useState)(!1),[Ee,De]=(0,T.useState)(0),Oe=(0,T.useRef)(0);(0,T.useEffect)(()=>{let e=!0,t=null;return xe(ce()),ze().then(t=>{e&&(Oe.current=0,Ce(t.items.length>0))}).catch(()=>{e&&(t=setTimeout(()=>De(e=>e+1),k(Oe.current)),Oe.current+=1)}),()=>{e=!1,t&&clearTimeout(t)}},[Ee]),(0,T.useEffect)(()=>{let e=()=>{document.visibilityState===`visible`?(z&&f(!0),De(e=>e+1)):z&&f(!1)},t=()=>{z&&f(!1)};return document.addEventListener(`visibilitychange`,e),window.addEventListener(`pagehide`,t),()=>{document.removeEventListener(`visibilitychange`,e),window.removeEventListener(`pagehide`,t)}},[z]),(0,T.useEffect)(()=>{if(!z)return;let e=null,t=()=>{e||(m(),e=setInterval(()=>m(),ee))},n=()=>{e&&(clearInterval(e),e=null),m(!0)},r=()=>{document.visibilityState===`visible`?t():n()};return document.visibilityState!==`hidden`&&t(),document.addEventListener(`visibilitychange`,r),window.addEventListener(`pagehide`,n),()=>{document.removeEventListener(`visibilitychange`,r),window.removeEventListener(`pagehide`,n),n()}},[z]),(0,T.useEffect)(()=>{let e=!0;return Ge().then(t=>{e&&t>0&&De(e=>e+1)}).catch(()=>{}),()=>{e=!1}},[]);let[ke,Ae]=(0,T.useState)(()=>Date.now()),je=(0,T.useRef)(!0),[Me,Ne]=(0,T.useState)(z),J=(0,T.useRef)(null);(0,T.useEffect)(()=>{if(!z)return;let e=setTimeout(()=>Ne(!1),12e3);return()=>clearTimeout(e)},[z]);let[Y,X]=(0,T.useState)(null),[Ie,Le]=(0,T.useState)([]),[Re,Be]=(0,T.useState)(!1),[Ve,He]=(0,T.useState)(!1),[Ue,We]=(0,T.useState)(!1),[Ke,qe]=(0,T.useState)(!1),Je=(0,T.useRef)(null);if(Je.current===null)try{Je.current=localStorage.getItem(`ember.cds.idle.onglass`)||``}catch(e){Je.current=``}(0,T.useEffect)(()=>{(z||d())&&c({paired:!z,send:ut,adNote:()=>dt(Je.current||``)}).then(()=>Le(s()))},[z]),(0,T.useEffect)(()=>{if(!z)return;let e=!0;return o().then(t=>{if(!e)return;X(t);let n=!1;try{n=localStorage.getItem(lt)===`1`}catch(e){}let r=t.available&&!t.isDefault&&!t.canRecoverRenderer;We(r),(t.available&&!t.isDefault&&!n||r)&&He(!0)}),()=>{e=!1}},[z]),(0,T.useEffect)(()=>{if(!Ve)return;if(Ue){let e=setTimeout(()=>He(!1),6e5);return()=>clearTimeout(e)}let e=setTimeout(()=>He(!1),6e4);return()=>clearTimeout(e)},[Ve,Ue]);async function Ye(){qe(!1),(await u()).opened?Be(!0):qe(!0);let e=await o();X(e),We(e.available&&!e.isDefault&&!e.canRecoverRenderer),h()}let Xe=e=>{try{localStorage.setItem(lt,`1`)}catch(e){}He(!1),e&&Ye()};(0,T.useEffect)(()=>{if(!z||!B)return;let e=()=>{o().then(e=>{X(e),h()}),Le(s())};e();let t=()=>{document.visibilityState===`visible`&&e()};return document.addEventListener(`visibilitychange`,t),()=>document.removeEventListener(`visibilitychange`,t)},[z,B]);let[Ze,et]=(0,T.useState)(!1);(0,T.useEffect)(()=>{if(!Ze)return;let e=setTimeout(()=>et(!1),6e3);return()=>clearTimeout(e)},[Ze]),(0,T.useEffect)(()=>{if(!B)return;let e=setTimeout(()=>V(!1),12e4);return()=>clearTimeout(e)},[B,be]);let tt=()=>{B||J.current||(J.current=setTimeout(()=>V(!0),3e3))},nt=()=>{J.current&&clearTimeout(J.current),J.current=null};async function it(){Ze?(se(!0),f(!1),m(!0),await p(),await b(),window.location.reload()):et(!0)}(0,T.useEffect)(()=>{let e=I.current;e&&(e.scrollTop=e.scrollHeight)},[ie.length]);let Q=R.theme===`light`,[mt,ht]=(0,T.useState)(()=>({w:window.innerWidth,h:window.innerHeight}));(0,T.useEffect)(()=>{let e=()=>ht({w:window.innerWidth,h:window.innerHeight});return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let gt=ae(q.split,mt.w,mt.h),_t=(r=w==null?void 0:w.mode)==null?`cart`:r,vt=(i=w==null||(a=w.items)==null?void 0:a.length)==null?0:i,$=_t!==`cart`||vt>0;(0,T.useEffect)(()=>{_(`an order on the customer screen`,$)},[$]),(0,T.useEffect)(()=>{$!==je.current&&(je.current=$,$?Te(!1):Ae(Date.now()))},[$]),(0,T.useEffect)(()=>{let e=null,t=()=>{let n=Date.now();if(ke>n){Ae(n);return}let r=te({hasMedia:Se,moment:_t,itemCount:vt,quietSince:ke,paidHoldUntil:N.current,delayMs:q.delay_s*1e3,now:n});if(Te(r),r||!Se||$)return;let i=D({quietSince:ke,paidHoldUntil:N.current,now:n});e=setTimeout(t,Math.max(250,i+q.delay_s*1e3-n))};return t(),()=>{e&&clearTimeout(e)}},[Se,_t,vt,ke,q.delay_s,$]);let[yt,bt]=(0,T.useState)(!1),[xt,St]=(0,T.useState)(0);(0,T.useEffect)(()=>{var e;((e=w==null?void 0:w.mode)==null?`cart`:e)===`cart`&&(bt(!1),St(0))},[w==null?void 0:w.mode]);let Ct=e=>{if(bt(!0),St(e),P.current&&F.current){clearTimeout(P.current);let t=F.current,n=e>=4&&R.review_url?ot:st;N.current=Date.now()+n,P.current=setTimeout(()=>{P.current=null,N.current=0,E(ct(M.current,t))},n)}try{var t,n,r,i,a;let s=(t=window.ember)==null?void 0:t.display;if((s==null||(n=s.csatRoute)==null?void 0:n.call(s))===`till`){var o;(o=s.sendCsat)==null||o.call(s,e);return}(r=window.ember)==null||(r=r.csat)==null||(i=r.leave)==null||(i=i.call(r,{score:e,source:`screen`,order_id:null}))==null||(a=i.catch)==null||a.call(i,()=>{})}catch(e){}},wt=(()=>{try{var e,t;return((e=window.ember)==null||(e=e.display)==null||(t=e.csatRoute)==null?void 0:t.call(e))!==`none`}catch(e){return!0}})();return(0,Z.jsxs)(`div`,{className:`cds-page`,onPointerDown:tt,onPointerUp:nt,onPointerCancel:nt,onPointerLeave:nt,children:[(()=>{let e=(0,Z.jsx)(pt,{d:w,cfg:gt&&!Se?{...R,promo:``,join_url:``}:R,fallbackName:O,listRef:I,link:j,onCsat:wt?Ct:void 0,csatDone:yt,csatScore:xt});if(!gt)return e;let t=(0,Z.jsx)(`div`,{className:`cds-split-ads${Q?` is-light`:``}`,children:Se&&!B?(0,Z.jsx)(Qe,{fit:q.fit,imageMs:q.image_s*1e3,generation:Ee,onEmpty:()=>Ce(!1)}):(0,Z.jsxs)(`div`,{className:`cds-split-sign`,style:{"--sv":`${(Math.min(mt.w,mt.h)/100).toFixed(2)}px`},children:[(0,Z.jsx)(y,{size:Math.round(Math.max(48,Math.min(160,Math.min(mt.w,mt.h)*.16)))}),R.show_name&&(w!=null&&w.restaurant||O)?(0,Z.jsx)(`div`,{className:`cds-split-name`,children:(w==null?void 0:w.restaurant)||O}):null,R.promo?(0,Z.jsx)(`div`,{className:`cds-split-promo`,children:R.promo}):null,R.join_url?(0,Z.jsxs)(`div`,{className:`cds-split-join`,children:[(0,Z.jsx)(`div`,{className:`cds-qr`,dangerouslySetInnerHTML:{__html:S(R.join_url,4)}}),(0,Z.jsxs)(`span`,{children:[`Scan for your `,(0,Z.jsx)(`b`,{children:`loyalty card`})]})]}):null]})});return(0,Z.jsxs)(`div`,{className:`cds-split cds-split-${gt.dir}`,children:[gt.adsFirst?t:null,(0,Z.jsx)(`div`,{className:`cds-split-order`,children:e}),gt.adsFirst?null:t]})})(),we&&!B&&!gt&&(0,Z.jsx)(Qe,{fit:q.fit,imageMs:q.image_s*1e3,generation:Ee,onEmpty:()=>{Te(!1),Ce(!1)}}),Ve&&!B&&(0,Z.jsxs)(`div`,{className:Ue?`cds-home-offer cds-home-must`:`cds-home-offer`,style:{background:Q?`#ffffff`:`#17191b`,color:Q?`#171310`:`#ffffff`},onPointerDown:e=>e.stopPropagation(),children:[(0,Z.jsx)(`div`,{className:`cds-exit-title`,children:Ue?`Set Ember as the home app`:`Open Ember by itself?`}),(0,Z.jsx)(`p`,{className:`cds-exit-note`,style:{color:Q?`rgba(23,19,16,0.62)`:`rgba(255,255,255,0.62)`},children:Ue?`This tablet’s Android cannot bring the customer screen back by itself. Make Ember its home app, or the screen stays closed after Android closes it.`:(0,Z.jsxs)(Z.Fragment,{children:[`Make Ember this tablet`,`’`,`s home app and the customer screen opens again by itself after a restart, an update or Android closing it.`]})}),(0,Z.jsxs)(`div`,{className:`cds-exit-actions`,children:[(0,Z.jsx)(`button`,{type:`button`,className:`cds-exit-btn`,onClick:()=>Xe(!1),children:`Not now`}),(0,Z.jsx)(`button`,{type:`button`,className:`cds-exit-btn cds-exit-go`,onClick:()=>Xe(!0),children:`Open Ember by itself`})]})]}),B&&le&&!ue&&(0,Z.jsx)(`div`,{className:`cds-exit-veil`,"data-back-closes":``,style:{background:Q?`rgba(250,247,242,0.98)`:`rgba(10,11,12,0.98)`,zIndex:20},onPointerDown:e=>{e.stopPropagation(),K(e=>e+1)},children:(0,Z.jsxs)(`form`,{className:`cds-exit-box`,style:{color:Q?`#171310`:`#ffffff`},onSubmit:e=>{e.preventDefault(),G()},children:[(0,Z.jsx)(`div`,{className:`cds-exit-title`,children:`Staff only`}),(0,Z.jsx)(`p`,{className:`cds-exit-note`,style:{color:Q?`rgba(23,19,16,0.62)`:`rgba(255,255,255,0.62)`},children:`Ask the owner or a manager to type their password to open the screen settings.`}),fe.length>0&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(g,{value:pe,onChange:e=>me(e.target.value),"aria-label":`Who is opening this`,style:{font:`inherit`,fontSize:`1rem`,padding:`0.6rem`,borderRadius:`0.5rem`,width:`100%`,marginBottom:`0.6rem`},children:fe.map(e=>(0,Z.jsx)(`option`,{value:e.username,children:e.full_name||e.username},e.username))}),(0,Z.jsx)(`input`,{type:`password`,value:he,onChange:e=>ge(e.target.value),autoFocus:!0,"aria-label":`Password`,autoComplete:`off`,style:{font:`inherit`,fontSize:`1rem`,padding:`0.6rem`,borderRadius:`0.5rem`,width:`100%`,marginBottom:`0.6rem`}})]}),_e&&(0,Z.jsx)(`p`,{className:`cds-exit-note`,role:`alert`,children:_e}),(0,Z.jsxs)(`div`,{className:`cds-exit-actions`,children:[(0,Z.jsx)(`button`,{type:`button`,onClick:()=>V(!1),className:`cds-exit-btn`,children:`Cancel`}),fe.length>0&&(0,Z.jsx)(`button`,{type:`submit`,disabled:ye||!he,className:`cds-exit-btn cds-exit-go`,children:`Open`})]})]})}),B&&(!le||ue)&&(0,Z.jsx)(`div`,{className:`cds-exit-veil`,"data-back-closes":``,style:{background:Q?`rgba(250,247,242,0.98)`:`rgba(10,11,12,0.98)`,zIndex:20},onPointerDown:e=>e.stopPropagation(),children:(0,Z.jsxs)(`div`,{className:`cds-exit-box cds-exit-scroll cds-exit-wide`,style:{color:Q?`#171310`:`#ffffff`},children:[(0,Z.jsx)($e,{light:Q,onChanged:()=>De(e=>e+1),onActivity:()=>K(e=>e+1),onPlayNow:()=>{V(!1),Ae(Date.now()-q.delay_s*1e3-1e3)}}),z&&(Y==null?void 0:Y.available)&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(`div`,{className:`cds-exit-title`,children:`If the tablet closes the screen`}),(0,Z.jsx)(`p`,{className:`cds-exit-note`,style:{color:Q?`rgba(23,19,16,0.62)`:`rgba(255,255,255,0.62)`},children:Y.isDefault?`Ember is this tablet’s home app, so the screen opens again by itself after a restart, an update or Android closing it.`:Ke?`Open Settings › Apps › Default apps › Home app and pick Ember POS.`:Re?`Choose Ember POS as the home app on the page that opened, then come back here.`:Y.canRecoverRenderer===!1?`This tablet’s Android cannot bring the screen back by itself. Make Ember its home app, or the screen stays closed after Android closes it.`:`Make Ember this tablet’s home app and the screen opens again by itself after a restart, an update or Android closing it.`}),!Y.isDefault&&(0,Z.jsx)(`div`,{className:`cds-exit-actions`,children:(0,Z.jsx)(`button`,{type:`button`,className:Y.canRecoverRenderer===!1?`cds-exit-btn cds-exit-go`:`cds-exit-btn`,onClick:()=>void Ye(),children:`Open Ember by itself`})})]}),z&&Ie.length>1&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(`div`,{className:`cds-exit-title`,children:`Recent starts`}),(0,Z.jsx)(`div`,{className:`cds-exit-note`,style:{color:Q?`rgba(23,19,16,0.62)`:`rgba(255,255,255,0.62)`},children:Ie.slice(0,5).map(e=>(0,Z.jsxs)(`div`,{children:[new Date(e.at).toLocaleString([],{month:`short`,day:`numeric`,hour:`numeric`,minute:`2-digit`}),` - `,l(e.why)]},e.at))})]}),z&&(0,Z.jsx)(`div`,{className:`cds-exit-title`,children:`This tablet is the customer screen`}),z&&(0,Z.jsx)(`p`,{className:`cds-exit-note`,style:{color:Q?`rgba(23,19,16,0.62)`:`rgba(255,255,255,0.62)`},children:`Turn it off to use this tablet normally again. The POS keeps working either way.`}),(0,Z.jsxs)(`div`,{className:`cds-exit-actions`,children:[(0,Z.jsx)(`button`,{type:`button`,onClick:()=>V(!1),disabled:oe,className:`cds-exit-btn`,children:`Done`}),z&&(0,Z.jsx)(`button`,{type:`button`,onClick:()=>void it(),disabled:oe,className:`cds-exit-btn cds-exit-go`,children:oe?`Turning off…`:Ze?`Tap again to turn off`:`Turn it off`})]})]})}),(0,Z.jsx)(`style`,{children:ft+rt})]})}var lt=`ember.cds.homeOffered`;async function ut(e,n){try{let[{supabase:o},{cdsRole:s,tagPlatform:c}]=await Promise.all([t(()=>import(`./supabase-BjClejqL.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])),t(()=>import(`./cds-boot-8CTbVqSQ.js`),__vite__mapDeps([21,16,18,19,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,20]))]),l=window.Capacitor,u=typeof(l==null?void 0:l.getPlatform)==`function`?String(l.getPlatform()):`web`,d=``;try{var r,i,a;d=String((r=await((i=window.ember)==null||(a=i.getVersion)==null?void 0:a.call(i)))==null?``:r)}catch(e){}let{error:f}=await o.rpc(`log_client_error`,{p_message:e,p_stack:n==null?null:n,p_platform:c(u,s()),p_app_version:d,p_url:typeof location<`u`?location.href:null});return!f}catch(e){return!1}}async function dt(e){if(!e)return``;try{let t=(await ze()).items.find(t=>t.id===e);return t?`ad=${e} ${Math.max(1,Math.round((Number(t.size)||0)/1024/1024))}MB ${t.type||``}`.trim():`ad=${e}`}catch(t){return`ad=${e}`}}var ft=`
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
`;function pt({d:e,cfg:t,fallbackName:r,listRef:i,link:a=`live`,onCsat:o,csatDone:s=!1,csatScore:c=0}){var l,u,d,f,p,m,ee,h,g,_,v,b,x,C,te;let D=(l=e==null?void 0:e.currency)==null?`₱`:l,O=(u=e==null?void 0:e.mode)==null?`cart`:u,k=(d=e==null?void 0:e.items)==null?[]:d,A=(e==null?void 0:e.restaurant)||r||``,j=t.theme===`light`,ne=j?{"--cds-bg":`#faf7f2`,"--cds-panel":`#ffffff`,"--cds-line":`rgba(28,22,16,0.12)`,"--cds-lift":`0 1px 2px rgba(28,22,16,0.06), 0 8px 24px rgba(28,22,16,0.08)`,"--cds-brand":`#a33900`,"--cds-new":`rgba(28,22,16,0.05)`,"--cds-ink":`#171310`,"--cds-ink-2":`rgba(23,19,16,0.74)`,"--cds-ink-3":`rgba(23,19,16,0.60)`,"--cds-accent":`#a33900`,"--cds-good":`#0b6538`,"--cds-glow":`rgba(255,92,0,0.10)`,"--cds-flame":`#c2410c`,"--cds-good-bg":`rgba(11,101,56,0.12)`}:{"--cds-bg":`#0e0f10`,"--cds-panel":`#17191b`,"--cds-line":`rgba(255,255,255,0.08)`,"--cds-lift":`0 1px 0 rgba(255,255,255,0.04) inset, 0 12px 32px rgba(0,0,0,0.35)`,"--cds-brand":`#ffb59a`,"--cds-new":`rgba(255,255,255,0.05)`,"--cds-ink":`#ffffff`,"--cds-ink-2":`rgba(255,255,255,0.62)`,"--cds-ink-3":`rgba(255,255,255,0.38)`,"--cds-accent":`#ffb59a`,"--cds-good":`#6ee7b7`,"--cds-glow":`rgba(255,92,0,0.16)`,"--cds-flame":`#ff6a1a`,"--cds-good-bg":`rgba(110,231,183,0.14)`},M={ember:[`#ff6a1a`,`#ffb59a`,`rgba(255,92,0,0.16)`,`#c2410c`,`#a33900`,`rgba(255,92,0,0.10)`],green:[`#34d399`,`#a7f3d0`,`rgba(52,211,153,0.16)`,`#047857`,`#065f46`,`rgba(4,120,87,0.10)`],blue:[`#60a5fa`,`#bfdbfe`,`rgba(96,165,250,0.16)`,`#1d4ed8`,`#1e40af`,`rgba(29,78,216,0.10)`],violet:[`#a78bfa`,`#ddd6fe`,`rgba(167,139,250,0.16)`,`#6d28d9`,`#5b21b6`,`rgba(109,40,217,0.10)`],rose:[`#fb7185`,`#fecdd3`,`rgba(251,113,133,0.16)`,`#be123c`,`#9f1239`,`rgba(190,18,60,0.10)`],gold:[`#fbbf24`,`#fde68a`,`rgba(251,191,36,0.16)`,`#a16207`,`#854d0e`,`rgba(161,98,7,0.10)`]},N=(f=M[(p=t.accent)==null?`ember`:p])==null?M.ember:f,P=(m=t.style)==null?`classic`:m,F={"--cds-flame":j?N[3]:N[0],"--cds-accent":j?N[4]:N[1],"--cds-glow":j?N[5]:N[2],"--cds-on-flame":j?`#ffffff`:`#121415`,"--cds-paper-flame":N[3],"--cds-paper-accent":N[4],"--cds-paper":`#fffdf7`,"--cds-paper-ink":`#1d1a16`},I=(0,T.useRef)(null),[re,L]=(0,T.useState)(0),[R,ie]=(0,T.useState)(!1);(0,T.useEffect)(()=>{let e=I.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect();t.width&&t.height&&(L(Math.min(t.width,t.height)/100),ie(t.width/t.height<.75))};if(t(),typeof ResizeObserver>`u`)return window.addEventListener(`resize`,t),()=>window.removeEventListener(`resize`,t);let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[]);let ae=t.text_scale===`large`?1.2:1,z=(e,t,n)=>`${Math.max(e*16*ae,Math.min(t*re*ae,n*16*ae)).toFixed(2)}px`;return(0,Z.jsxs)(`div`,{ref:I,className:`cds-root cds-style-${P}${R?` cds-portrait`:``}`,style:{...ne,...F,"--cds-u":`${re||1}px`,background:`var(--cds-bg)`,color:`var(--cds-ink)`},children:[(0,Z.jsx)(`style`,{children:mt}),(0,Z.jsxs)(`header`,{className:`cds-head`,children:[(0,Z.jsxs)(`div`,{className:`cds-brand`,children:[(0,Z.jsx)(y,{size:Math.round(parseFloat(z(1.9,5.75,4)))}),(0,Z.jsxs)(`div`,{className:`cds-brand-txt`,children:[t.show_name&&A?(0,Z.jsx)(`div`,{className:`cds-name`,style:{fontSize:z(1.1,3.4,2.4)},children:A}):null,(0,Z.jsx)(`div`,{className:`cds-powered`,style:{fontSize:z(.5,1.2,.85)},children:`Powered by Ember POS`})]})]}),O===`qr`||O===`paid`||!k.length?(0,Z.jsx)(`div`,{className:`cds-state`,style:{fontSize:z(.6,1.5,1)},children:O===`qr`?`Scan to pay`:O===`paid`?`Thank you`:`Welcome`},O+`i`):null]}),O===`qr`?(0,Z.jsxs)(`main`,{className:`cds-main cds-center`,children:[(0,Z.jsxs)(`div`,{className:`cds-qr-lead`,style:{fontSize:z(.95,2.6,1.9)},children:[`Pay `,(0,Z.jsx)(`b`,{children:(ee=e==null?void 0:e.qr_method)==null?``:ee}),`, scan with your phone`]}),(e==null?void 0:e.qr_image)&&(0,Z.jsx)(`span`,{className:`cds-qr-ring`,children:(0,Z.jsx)(`img`,{src:e.qr_image,alt:`Payment QR`,className:`cds-qr`})}),(0,Z.jsx)(`div`,{className:`cds-qr-amt`,style:{fontSize:z(2,7,5)},children:n((h=e==null?void 0:e.qr_amount_cents)==null?0:h,D)}),(0,Z.jsx)(`div`,{className:`cds-hint`,style:{fontSize:z(.75,1.9,1.3)},children:`Show the confirmation screen to the cashier.`})]}):O===`paid`?(0,Z.jsxs)(`main`,{className:`cds-main cds-center cds-paid`,children:[(0,Z.jsxs)(`span`,{className:`cds-tickwrap`,style:{width:z(3,8.5,6.2),height:z(3,8.5,6.2)},"aria-hidden":!0,children:[(0,Z.jsx)(`span`,{className:`cds-ripple`}),Array.from({length:10},(e,t)=>(0,Z.jsx)(`span`,{className:`cds-spark`,style:{"--a":`${t*36+8}deg`,"--cds-spark":t%2?`var(--cds-flame)`:`#feb700`}},t)),(0,Z.jsxs)(`svg`,{className:`cds-tick`,viewBox:`0 0 64 64`,children:[(0,Z.jsx)(`circle`,{cx:`32`,cy:`32`,r:`30`}),(0,Z.jsx)(`path`,{d:`M19 33 l9 9 l17 -19`})]})]}),(0,Z.jsx)(`div`,{className:`cds-thanks`,style:{fontSize:z(1.6,4.6,3.3)},children:t.thanks}),(0,Z.jsxs)(`div`,{className:`cds-receipt`,children:[(0,Z.jsxs)(`div`,{className:`cds-paid-row`,children:[(0,Z.jsx)(`span`,{className:`cds-paid-lbl`,style:{fontSize:z(.75,1.9,1.35)},children:`Paid`}),(0,Z.jsx)(`span`,{className:`cds-paid-val`,style:{fontSize:z(1.3,3.6,2.6)},children:n((g=e==null?void 0:e.paid_total_cents)==null?0:g,D)})]}),t.show_change&&((_=e==null?void 0:e.change_cents)==null?0:_)>0&&(0,Z.jsxs)(`div`,{className:`cds-paid-row cds-change`,children:[(0,Z.jsx)(`span`,{className:`cds-paid-lbl`,style:{fontSize:z(.75,1.9,1.35)},children:`Change`}),(0,Z.jsx)(`span`,{className:`cds-paid-val`,style:{fontSize:z(1.3,3.6,2.6)},children:(0,Z.jsx)(`span`,{className:`cds-change-pill`,children:n(e.change_cents,D)})})]})]}),((v=e==null?void 0:e.ready_in_min)==null?0:v)>0&&(0,Z.jsxs)(`div`,{className:`cds-ready`,style:{fontSize:z(.85,2.2,1.6)},children:[`Ready by `,(0,Z.jsx)(`b`,{children:w(e.ready_in_min)})]}),t.ask_csat&&o&&(0,Z.jsx)(`div`,{className:`cds-csat`,children:s?(0,Z.jsx)(`div`,{className:`cds-csat-thanks`,style:{fontSize:z(.85,2.2,1.5)},children:c>=4&&t.review_url?(0,Z.jsxs)(`div`,{className:`cds-review`,children:[(0,Z.jsx)(`div`,{children:`Thank you! Would you tell others too?`}),(0,Z.jsx)(`div`,{className:`cds-qr cds-review-qr`,dangerouslySetInnerHTML:{__html:S(t.review_url,4)}}),(0,Z.jsx)(`div`,{className:`cds-review-how`,children:`Scan to leave us a Google review`})]}):c>0&&c<=2?`Sorry about that. Please tell the cashier, we want to put it right.`:`Thank you for telling us.`}):(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(`div`,{className:`cds-csat-q`,style:{fontSize:z(.8,2,1.4)},children:`How was it?`}),(0,Z.jsx)(`div`,{className:`cds-csat-row`,children:it.map(e=>(0,Z.jsx)(`button`,{type:`button`,className:`cds-csat-btn`,style:{fontSize:z(1.1,3,2.2)},"aria-label":e.label,onClick:()=>o==null?void 0:o(e.score),children:e.glyph},e.score))})]})}),(0,Z.jsx)(`div`,{className:`cds-hint`,style:{fontSize:z(.85,2.2,1.5)},children:`Please come again`})]}):!e||k.length===0?(0,Z.jsxs)(`main`,{className:`cds-main cds-center`,children:[(0,Z.jsx)(y,{size:Math.max(36,Math.min(180,13*re*ae)),className:`cds-mark`}),(0,Z.jsx)(`div`,{className:`cds-welcome`,style:{fontSize:z(1.5,5,3.4)},children:t.welcome}),t.promo&&(0,Z.jsx)(`div`,{className:`cds-promo`,style:{fontSize:z(.85,2.3,1.6)},children:t.promo}),t.join_url&&(0,Z.jsxs)(`div`,{className:`cds-join`,children:[(0,Z.jsx)(`div`,{className:`cds-qr cds-join-qr`,dangerouslySetInnerHTML:{__html:S(t.join_url,4)}}),(0,Z.jsxs)(`div`,{className:`cds-join-text`,style:{fontSize:z(.7,1.7,1.2)},children:[`Scan for your `,(0,Z.jsx)(`b`,{children:`loyalty card`})]})]})]}):(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(`main`,{className:`cds-main cds-list`,ref:i,children:[(0,Z.jsx)(`div`,{className:`cds-state cds-order-title`,style:{fontSize:z(.6,1.5,1)},children:`Your order`}),t.show_items?(0,Z.jsx)(`div`,{className:`cds-lines`,children:k.map((e,t)=>(0,Z.jsxs)(`div`,{className:`cds-line`,style:{fontSize:z(.95,2.7,2)},children:[(0,Z.jsxs)(`span`,{className:`cds-line-l`,children:[(0,Z.jsx)(`span`,{className:`cds-qty${e.quantity>9?` cds-qty-2`:``}`,children:e.quantity},e.quantity),(0,Z.jsxs)(`span`,{className:`cds-item`,children:[e.name,e.variant_label?(0,Z.jsxs)(`span`,{className:`cds-variant`,children:[` · `,e.variant_label]}):``,e.addon_label?(0,Z.jsxs)(`span`,{className:`cds-mod cds-mod-add`,style:{fontSize:z(.82,2.2,1.6)},children:[`+ `,e.addon_label]}):null,e.notes?(0,Z.jsx)(`span`,{className:`cds-mod cds-mod-note`,style:{fontSize:z(.82,2.2,1.6)},children:e.notes}):null]})]}),(0,Z.jsx)(`span`,{className:`cds-line-r`,children:n(e.price_cents*e.quantity,D)})]},t))}):(0,Z.jsxs)(`div`,{className:`cds-center cds-nolines`,style:{fontSize:z(1.1,3.2,2.2)},children:[k.reduce((e,t)=>e+t.quantity,0),` item`,k.reduce((e,t)=>e+t.quantity,0)===1?``:`s`]})]}),(0,Z.jsxs)(`footer`,{className:`cds-foot`,children:[t.show_subtotal&&(0,Z.jsxs)(`div`,{className:`cds-sub`,style:{fontSize:z(.75,1.9,1.3)},children:[(0,Z.jsx)(`span`,{children:`Subtotal`}),(0,Z.jsx)(`span`,{children:n(e.subtotal_cents,D)})]}),t.show_discount&&e.discount_cents>0&&(0,Z.jsxs)(`div`,{className:`cds-sub cds-disc`,style:{fontSize:z(.75,1.9,1.3)},children:[(0,Z.jsx)(`span`,{children:`Discount`}),(0,Z.jsxs)(`span`,{children:[`−`,n(e.discount_cents,D)]})]}),((b=e.service_charge_cents)==null?0:b)>0&&(0,Z.jsxs)(`div`,{className:`cds-sub`,style:{fontSize:z(.75,1.9,1.3)},children:[(0,Z.jsx)(`span`,{children:e.service_charge_label||`Service charge`}),(0,Z.jsx)(`span`,{children:n(e.service_charge_cents,D)})]}),((x=e.tax_cents)==null?0:x)>0&&(0,Z.jsxs)(`div`,{className:`cds-sub`,style:{fontSize:z(.75,1.9,1.3)},children:[(0,Z.jsx)(`span`,{children:e.tax_label||`Tax`}),(0,Z.jsx)(`span`,{children:n(e.tax_cents,D)})]}),(0,Z.jsxs)(`div`,{className:`cds-total${a===`live`?``:` cds-total-unsure`}`,children:[(0,Z.jsxs)(`span`,{className:`cds-total-lbl`,style:{fontSize:z(.95,2.6,1.8)},children:[`Total`,(0,Z.jsx)(`span`,{className:`cds-count`,children:(()=>{let e=k.reduce((e,t)=>e+t.quantity,0);return`${e} item${e===1?``:`s`}`})()})]}),(0,Z.jsx)(`span`,{className:`cds-total-val`,style:{fontSize:z(2.2,8,5.6)},children:n(e.total_cents,D)},e.total_cents)]}),((C=e.stamps_required)==null?0:C)>0&&e.stamps!=null&&(0,Z.jsxs)(`div`,{className:`cds-stamps`,style:{fontSize:z(.7,1.8,1.2)},children:[(0,Z.jsx)(`span`,{className:`cds-stamp-dots`,"aria-hidden":!0,children:Array.from({length:Math.min(12,e.stamps_required)},(t,n)=>{var r;return(0,Z.jsx)(`span`,{className:n<((r=e.stamps)==null?0:r)?`cds-dot cds-dot-on`:`cds-dot`},n)})}),(0,Z.jsx)(`span`,{children:((te=e.stamps)==null?0:te)>=e.stamps_required?`A free one is ready for you`:`${e.stamps} of ${e.stamps_required} stamps`})]}),E(a)&&(0,Z.jsx)(`div`,{className:`cds-link-note`,style:{fontSize:z(.6,1.5,1.05)},children:E(a)})]})]})]})}var mt=`
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
`;function ht({config:e,moment:t=`cart`}){let n=t===`idle`?{items:[],subtotal_cents:0,discount_cents:0,total_cents:0,currency:`₱`,restaurant:``}:t===`paid`?{mode:`paid`,items:[],subtotal_cents:0,discount_cents:0,total_cents:0,currency:`₱`,restaurant:``,paid_total_cents:3e4,change_cents:5e3}:{items:r()===`pharmacy`?[{name:`Biogesic 500 mg Tablet`,quantity:2,price_cents:9e3,variant_label:`Banig of 10`},{name:`Vitamin C 500 mg`,quantity:1,price_cents:7e3,variant_label:null}]:[{name:`Cafe Latte`,quantity:2,price_cents:9e3,variant_label:`Large`},{name:`Banana Bread`,quantity:1,price_cents:7e3,variant_label:null}],subtotal_cents:25e3,discount_cents:2500,total_cents:22500,currency:`₱`,restaurant:``};return(0,Z.jsx)(pt,{d:n,cfg:e,fallbackName:`Your Shop`})}export{ht as CustomerScreenPreview,Q as default};