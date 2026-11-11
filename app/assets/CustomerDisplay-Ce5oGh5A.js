const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.web-PYxaYZEa.js","assets/rolldown-runtime-XKyaHtl9.js","assets/jsx-runtime-C3cWAN_r.js","assets/react-dom-BwXff0Px.js","assets/Modal-DQqvcyR7.js","assets/ConfirmDialog-Dzxfj1nd.js","assets/preload-helper-BSZHtiEo.js","assets/Icons-CxRfYD77.js","assets/shop-kind-CzVvPlNs.js","assets/region-DlIv0zBP.js","assets/format-CQodIVoS.js","assets/features-B4l3c553.js","assets/starter-packs-BmqtuJvx.js","assets/csv-import-VY1svY5f.js","assets/units-Dv3TT-9_.js","assets/dist-B7JOwOT4.js","assets/cds-home-Oyo9nQYL.js","assets/keyboard-room-UvKB8w_C.js","assets/cds-lan-WbykIDpv.js","assets/cds-bluetooth-C1Hq_WtK.js","assets/index-CoBC6lpz.css"])))=>i.map(i=>d[i]);
import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{u as t}from"./shop-kind-CzVvPlNs.js";import{n,t as r}from"./jsx-runtime-C3cWAN_r.js";import{Ao as i,Ga as a,Jl as o,Ni as s,Pi as c,Sr as l,es as u}from"./index.web-PYxaYZEa.js";import{a as d}from"./format-CQodIVoS.js";import{n as f}from"./qr-qDfkLIMc.js";import{l as p,r as m}from"./wait-quote-D88Xj62H.js";import{a as h,d as g,f as ee,h as _,i as v,n as y,o as b,r as x,s as S,t as C,u as w}from"./cds-home-Oyo9nQYL.js";import{t as T}from"./preload-helper-BSZHtiEo.js";var E=e(n(),1);function te(e){return!e.hasMedia||e.moment!==`cart`||e.itemCount>0?!1:e.now-D(e)>=e.delayMs}function D(e){return Math.max(Math.min(e.quietSince,e.now),e.paidHoldUntil)}function O(){try{if(typeof performance<`u`&&typeof performance.now==`function`)return performance.now()}catch{}return Date.now()}function k(e){return Math.min(3e5,15e3*2**Math.max(0,Math.min(10,e)))}var A=`ember.cds.idle.onglass`,ne=`ember.cds.idle.poison`,re=864e5;function ie(e,t,n){let r={};for(let[t,i]of Object.entries(e||{}))i&&typeof i.strikes==`number`&&(i.until&&i.until<=n||(r[t]=i));if(t){let e=(r[t]?.strikes??0)+1;r[t]={strikes:e,until:e>=2?n+re:0}}return r}function j(e,t){let n={};for(let[r,i]of Object.entries(e||{}))i&&i.until>t&&(n[r]=i.until);return n}function M(){try{let e=JSON.parse(localStorage.getItem(`ember.cds.idle.poison`)||`{}`);return e&&typeof e==`object`&&!Array.isArray(e)?e:{}}catch{return{}}}function ae(e){try{localStorage.setItem(ne,JSON.stringify(e))}catch{}}function N(e){try{e?localStorage.setItem(A,e):localStorage.removeItem(A)}catch{}}function P(e){let t=M();t[e]&&!t[e].until&&(delete t[e],ae(t))}var F=!1;function oe(e=Date.now()){if(!F){F=!0;let t=null;try{t=localStorage.getItem(A)}catch{}N(null),ae(ie(M(),t,e))}return j(M(),e)}function se(e){let t=M(),n=new Set(e),r=!1;for(let e of Object.keys(t))n.has(e)||(delete t[e],r=!0);r&&ae(t)}function ce(e,t,n){return e!==`left`&&e!==`right`||!(t>0)||!(n>0)?null:{dir:t>=n?`row`:`column`,adsFirst:e===`left`}}var I={delay_s:20,image_s:8,fit:`cover`,split:`off`},le=(e,t,n)=>Math.min(n,Math.max(t,e)),ue=`ember.cds.idle.delay`,de=`ember.cds.idle.image`,fe=`ember.cds.idle.fit`,pe=`ember.cds.split`;function me(){let e=(e,t,n,r)=>{try{let i=localStorage.getItem(e);if(i==null||i===``)return t;let a=Number(i);return Number.isFinite(a)?le(Math.round(a),n,r):t}catch{return t}},t=I.fit;try{localStorage.getItem(fe)===`contain`&&(t=`contain`)}catch{}let n=I.split;try{let e=localStorage.getItem(pe);(e===`left`||e===`right`)&&(n=e)}catch{}return{delay_s:e(ue,I.delay_s,5,120),image_s:e(de,I.image_s,2,60),fit:t,split:n}}function he(e){try{e.delay_s!=null&&localStorage.setItem(ue,String(le(Math.round(e.delay_s),5,120))),e.image_s!=null&&localStorage.setItem(de,String(le(Math.round(e.image_s),2,60))),e.fit!=null&&localStorage.setItem(fe,e.fit),e.split!=null&&localStorage.setItem(pe,e.split===`left`||e.split===`right`?e.split:`off`)}catch{}}function ge(e){return e.slice().sort((e,t)=>(e.pos??e.addedAt)-(t.pos??t.addedAt)||e.addedAt-t.addedAt||e.id.localeCompare(t.id))}function _e(e,t,n){let r=e.indexOf(t),i=r+n;if(r<0||i<0||i>=e.length)return e.slice();let a=e.slice();return[a[r],a[i]]=[a[i],a[r]],a}function ve(e,t){let n=Number(e?.seconds);return Math.min(60,Math.max(2,Math.round(Number.isFinite(n)&&n>0?n:t)))*1e3}function L(e,t=``){let n=(e||``).toLowerCase();if(n.startsWith(`image/`))return`image`;if(n.startsWith(`video/`))return`video`;let r=(t.toLowerCase().match(/\.([a-z0-9]+)$/)||[,``])[1];return/^(jpe?g|png|gif|webp|avif|bmp|heic|heif)$/.test(r)?`image`:/^(mp4|m4v|webm|mov|mkv|ogv|3gp)$/.test(r)?`video`:`unplayable`}var ye=12e4;function be(e,t,n){return e.filter(e=>L(e.type,e.name)!==`unplayable`&&!((t[e.id]??0)>n))}function xe(e,t,n,r){let i=e.length,a=r==null?-1:e.findIndex(e=>e.id===r);for(let r=1;r<=i;r++){let o=e[(a+r+i)%i];if(L(o.type,o.name)!==`unplayable`&&!((t[o.id]??0)>n))return o}return null}function Se(e,t){let n=null;for(let r of Object.values(e))r>t&&(n==null||r<n)&&(n=r);return n}var Ce=104857600,we=`ember-cds-idle`,R=1,z=`meta`,B=`blob`,V=class extends Error{};function H(){return new Promise((e,t)=>{let n;try{if(typeof indexedDB>`u`||!indexedDB){t(new V(`this device has no local storage for files`));return}n=indexedDB.open(we,R)}catch(e){t(new V(e?.message||`local file storage is blocked`));return}n.onupgradeneeded=()=>{let e=n.result;e.objectStoreNames.contains(z)||e.createObjectStore(z,{keyPath:`id`}),e.objectStoreNames.contains(B)||e.createObjectStore(B)},n.onsuccess=()=>e(n.result),n.onerror=()=>t(new V(n.error?.message||`local file storage would not open`)),n.onblocked=()=>t(new V(`another window has this screen open`))})}function U(e,t){return new Promise((n,r)=>{e.oncomplete=()=>n(t()),e.onabort=()=>r(e.error||Error(`the write was rolled back`)),e.onerror=()=>r(e.error||Error(`the write failed`))})}async function Te(){let e=await H();try{let t=e.transaction(z,`readonly`),n=t.objectStore(z).getAll();return ge(await U(t,()=>n.result||[]))}finally{e.close()}}async function Ee(e){let t=await H();try{let n=t.transaction(z,`readwrite`),r=n.objectStore(z),i=r.getAll();i.onsuccess=()=>{let t=i.result||[],n=new Map((e.order??[]).map((e,t)=>[e,t]));for(let i of t){let t=!1;if(n.has(i.id)&&(i.pos=n.get(i.id),t=!0),e.seconds&&e.seconds.id===i.id){let n=Number(e.seconds.seconds);i.seconds=Number.isFinite(n)&&n>0?n:null,t=!0}t&&r.put(i)}},await U(n,()=>null)}finally{t.close()}}async function De(e){let t=await H();try{let n=t.transaction(B,`readonly`),r=n.objectStore(B).get(e);return await U(n,()=>r.result??null)}finally{t.close()}}function Oe(e,t){let n=0;for(let e of t)n=(n<<5)-n+e.charCodeAt(0)|0;return e.toString(36)+`-`+(n>>>0).toString(36)}var ke=1920,Ae=`too large for this tablet, export it at 1080p`;function je(e,t,n=ke){if(!(e>0&&t>0))return null;let r=Math.max(e,t);if(r<=n)return null;let i=n/r;return{w:Math.max(1,Math.round(e*i)),h:Math.max(1,Math.round(t*i))}}function Me(e,t){return e>0&&t>0?Math.max(e,t)>1920||Math.min(e,t)>1080:!1}async function Ne(e){if(/gif$/i.test(e.type)||/\.gif$/i.test(e.name)||typeof createImageBitmap!=`function`||typeof document>`u`)return e;let t=null;try{t=await createImageBitmap(e);let n=je(t.width,t.height);if(!n)return e;let r=document.createElement(`canvas`);r.width=n.w,r.height=n.h;let i=r.getContext(`2d`);if(!i)return e;let a=/png$/i.test(e.type);i.drawImage(t,0,0,n.w,n.h);let o=await new Promise(e=>{try{r.toBlob(t=>e(t),a?`image/png`:`image/jpeg`,.85)}catch{e(null)}});return r.width=0,r.height=0,o&&o.size>0?o:e}catch{return e}finally{try{t?.close()}catch{}}}function Pe(e,t=8e3){return typeof document>`u`||typeof URL?.createObjectURL!=`function`?Promise.resolve(null):new Promise(n=>{let r=``,i=null,a=null,o=e=>{if(a&&clearTimeout(a),a=null,i){i.onloadedmetadata=null,i.onerror=null;try{i.removeAttribute(`src`),i.load()}catch{}}if(i=null,r){try{URL.revokeObjectURL(r)}catch{}r=``}n(e)};try{r=URL.createObjectURL(e),i=document.createElement(`video`),i.preload=`metadata`,i.muted=!0,i.onloadedmetadata=()=>o(i?{w:i.videoWidth,h:i.videoHeight}:null),i.onerror=()=>o(null),a=setTimeout(()=>o(null),t),i.src=r}catch{o(null)}})}async function Fe(e){let t=Array.from(e),n=[],r=[],i=[];for(let e of t){let t=L(e.type,e.name);if(t===`unplayable`){r.push({name:e.name,why:`a screen can only show a picture or a video`});continue}let n=t===`image`?await Ne(e):e;if(t===`video`){let t=await Pe(e);if(t&&Me(t.w,t.h)){r.push({name:e.name,why:Ae});continue}}if(n.size>104857600){r.push({name:e.name,why:`too big, ${Math.round(e.size/1024/1024)}MB, and the limit is ${Ce/1024/1024}MB`});continue}if(e.size===0){r.push({name:e.name,why:`the file is empty`});continue}let a=Date.now(),o={id:Oe(a+i.length,e.name+`:`+e.size),name:e.name||`Untitled`,type:n!==e&&n.type||e.type||(t===`video`?`video/mp4`:`image/jpeg`),size:n.size,addedAt:a+i.length};i.push({item:o,blob:n})}if(i.length){let e=await H();try{for(let{item:t,blob:a}of i)try{let r=e.transaction([z,B],`readwrite`);r.objectStore(z).put(t),r.objectStore(B).put(a,t.id),await U(r,()=>null),n.push(t)}catch(e){let n=/quota/i.test(e?.name+e?.message)?`this device has run out of room, remove something first`:e?.message||`the device would not keep it`;r.push({name:t.name,why:n})}}finally{e.close()}}return{added:n,refused:r}}async function Ie(e){let t=await H();try{let n=t.transaction([z,B],`readwrite`);n.objectStore(z).delete(e),n.objectStore(B).delete(e),await U(n,()=>null)}finally{t.close()}}async function Le(){let e=await H();try{let t=e.transaction([z,B],`readwrite`);t.objectStore(z).clear(),t.objectStore(B).clear(),await U(t,()=>null)}finally{e.close()}}function Re(e){return e<1048576?Math.max(1,Math.round(e/1024))+`KB`:(e/1024/1024).toFixed(+(e<10485760))+`MB`}function ze(e,t,n,r){return n>0||!e||typeof t!=`string`||!t||t===e.src?!1:r-e.at>=0&&r-e.at<6e4}function Be(e,t,n){return typeof e==`string`&&e&&t>0?{src:e,at:n}:null}var W;function G(){if(W!==void 0)return W;W=null;try{let e=window.Capacitor;typeof e?.isNativePlatform==`function`&&e.isNativePlatform()&&e?.getPlatform?.()===`android`&&(e.registerPlugin?W=e.registerPlugin(`CdsMedia`):e.Plugins?.CdsMedia&&(W=e.Plugins.CdsMedia))}catch{W=null}return W}function Ve(){return!!G()}var K=e=>({items:(e.items??[]).map(e=>({...e,size:Number(e.size)||0,addedAt:Number(e.addedAt)||0})),used:Number(e.used)||0,free:Number.isFinite(Number(e.free))?Number(e.free):null});async function q(){let e=await Te(),t=null;try{let e=await navigator.storage?.estimate?.();e&&e.quota!=null&&e.usage!=null&&(t=Math.max(0,e.quota-e.usage))}catch{}return{items:e,used:e.reduce((e,t)=>e+t.size,0),free:t}}async function He(){let e=G();return e?K(await e.list()):q()}async function Ue(e){let t=G();if(t){let e=await t.pick();return{library:K(e),added:e.added??[],refused:e.refused??[],canceled:!!e.canceled}}if(!e||!e.length)return{library:await q(),added:[],refused:[],canceled:!0};let n=await Fe(e);return{library:await q(),added:n.added,refused:n.refused}}async function We(e){let t=G();return t?K(await t.remove({id:e})):(await Ie(e),q())}async function Ge(e){let t=G();return t?K(await t.order({ids:e})):(await Ee({order:e}),q())}async function Ke(e,t){let n=G();return n?K(await n.seconds({id:e,seconds:t&&t>0?Math.round(t):0})):(await Ee({seconds:{id:e,seconds:t}}),q())}async function qe(e){if(G()&&e.file)return{url:`${window.location.origin}/_cds_media_/${encodeURIComponent(e.file)}`,release:()=>{}};let t=await De(e.id);if(!t)return null;let n=URL.createObjectURL(t);return{url:n,release:()=>URL.revokeObjectURL(n)}}async function Je(){let e=G();if(!e)return 0;let t=[];try{t=ge(await Te())}catch{return 0}if(!t.length)return 0;let n=0,r=!0;for(let[i,a]of t.entries())try{let t=await De(a.id);if(!t||L(a.type,a.name)===`unplayable`){await Ie(a.id);continue}let{id:r,file:o}=await e.importStart({name:a.name,type:a.type}),s=524288;for(let n=0;n<t.size;n+=s){let r=new Uint8Array(await t.slice(n,n+s).arrayBuffer()),i=``;for(let e=0;e<r.length;e+=32768)i+=String.fromCharCode(...r.subarray(e,e+32768));await e.importChunk({file:o,data:btoa(i)})}await e.importEnd({id:r,file:o,name:a.name,type:a.type,addedAt:a.addedAt||Date.now()+i}),await Ie(a.id),n++}catch{r=!1}if(r)try{await Le()}catch{}return n}var J=r(),Ye=null,Xe={},Ze=new Set;function Y(e,t,n=``){let r=`${e}:${t?.id??``}`;if(!Ze.has(r)){Ze.add(r);try{window.__emberReport?.(`[cds] ad failed stage=${e} type=${t?.type??``} size=${t?.size??``}${n?` `+n:``}`)}catch{}}}var Qe=12e4;function X(){let e=Date.now(),t=O(),n={};for(let[r,i]of Object.entries(oe(e)))n[r]=t+(i-e);return n}function $e({fit:e,imageMs:t,onEmpty:n,generation:r}){let[i,a]=(0,E.useState)(null),[o,s]=(0,E.useState)(null),c=(0,E.useRef)(Ye).current,[l,u]=(0,E.useState)(()=>{let e=O(),t={};for(let[n,r]of Object.entries({...Xe,...X()}))r>e&&(t[n]=r);return Xe=t,t}),[d,f]=(0,E.useState)(()=>O()),p=(0,E.useRef)([]),m=(0,E.useRef)({});p.current=i??[],m.current=l;let[h,g]=(0,E.useState)(null),[ee,_]=(0,E.useState)(0),v=(0,E.useRef)(null),y=(0,E.useRef)(null),b=(0,E.useCallback)(e=>{let t=y.current;if(t&&t!==e)try{t.pause(),t.removeAttribute(`src`),t.load()}catch{}y.current=e},[]),x=(0,E.useMemo)(()=>be(i??[],l,d),[i,l,d]),S=x.find(e=>e.id===o)??xe(i??[],l,d,o??c),C=(0,E.useRef)(null);C.current=S?.id??null;let w=!!h&&x.length===1&&x[0].id===h.id,[T,te]=(0,E.useState)(0),D=(0,E.useRef)(0);(0,E.useEffect)(()=>{let e=!0,t=null;return He().then(t=>{e&&(D.current=0,a(t.items),se(t.items.map(e=>e.id)))}).catch(n=>{e&&(Y(`list`,void 0,String(n?.message??n)),t=setTimeout(()=>te(e=>e+1),k(D.current)),D.current+=1)}),()=>{e=!1,t&&clearTimeout(t)}},[r,T]);let A=()=>s(xe(p.current,m.current,O(),C.current)?.id??null),ne=()=>{v.current=null,A()},re=e=>{let t=O(),n={...m.current,[e]:t+ye};m.current=n,Xe=n,v.current===e&&(v.current=null),N(null),u(n),f(t),s(xe(p.current,n,t,e)?.id??null)};(0,E.useEffect)(()=>{let e=Se(l,d);if(e==null)return;let t=setTimeout(()=>f(O()),Math.max(250,e-O()));return()=>clearTimeout(t)},[l,d]),(0,E.useEffect)(()=>{if(!S||h?.id===S.id)return;let e=!0,t=S;return qe(t).then(n=>{e?n?(N(t.id),s(t.id),g({id:t.id,kind:L(t.type,t.name)===`video`?`video`:`image`,url:n.url,release:n.release})):(Y(`open-null`,t),re(t.id)):n?.release()}).catch(n=>{e&&(Y(`open`,t,String(n?.message??n)),re(t.id))}),()=>{e=!1}},[S?.id]),(0,E.useEffect)(()=>{let e=h?.release;return()=>{e?.()}},[h?.url]);let ie=(0,E.useRef)(null);(0,E.useEffect)(()=>{if(!h)return;Ye=h.id;let e=ie.current;ie.current=h.id,e&&e!==h.id&&P(e)},[h?.id]),(0,E.useEffect)(()=>{let e=()=>N(null);return window.addEventListener(`pagehide`,e),()=>{window.removeEventListener(`pagehide`,e),e()}},[]);let j=(0,E.useRef)(null);j.current=h?.id??null,(0,E.useEffect)(()=>{let e=()=>{document.visibilityState===`visible`?j.current&&N(j.current):N(null)};return document.addEventListener(`visibilitychange`,e),()=>document.removeEventListener(`visibilitychange`,e)},[]),(0,E.useEffect)(()=>{let e=h?.id;if(!e)return;let t=setTimeout(()=>P(e),Qe);return()=>clearTimeout(t)},[h?.id]),(0,E.useEffect)(()=>{i!==null&&!S&&h&&(N(null),g(null))},[i,S,h]),(0,E.useEffect)(()=>{if(!h||h.kind!==`image`||w||x.length===0)return;let e=p.current.find(e=>e.id===h.id),n=setTimeout(A,Math.max(2e3,ve(e,t/1e3)));return()=>clearTimeout(n)},[h?.id,h?.url,t,w,x.length,i]),(0,E.useEffect)(()=>{if(!h||h.kind!==`video`)return;let e=h.id,t=-1,n=O(),r=!1,i=0,a=0,o=setInterval(()=>{let o=y.current;if(!o)return;if(o.ended){if(!i){i=O();return}if(O()-i<5e3)return;if(i=0,w){try{o.currentTime=0,o.play().catch(()=>{})}catch{}return}ne();return}if(i=0,o.currentTime!==t){t=o.currentTime,n=O(),r=!1,++a>=20&&v.current===e&&(v.current=null);return}if(O()-n<7500)return;if(!r){r=!0,o.play().catch(()=>{});return}if(O()-n<15e3)return;let s=p.current.find(t=>t.id===e),c=`t=${o.currentTime} rs=${o.readyState} ns=${o.networkState}`;Y(v.current===e?`stall-rest`:`stall-reload`,s,c),v.current===e?re(e):(v.current=e,_(e=>e+1))},3e3);return()=>clearInterval(o)},[h?.id,h?.url,ee,w]);let M=i!==null&&!i.some(e=>L(e.type,e.name)!==`unplayable`);if((0,E.useEffect)(()=>{M&&n?.()},[M]),i===null||M||!S||!h)return null;let ae=()=>{let e=h.kind===`video`?y.current?.error:null;Y(h.kind===`video`?`onerror`:`img-onerror`,p.current.find(e=>e.id===h.id),e?`code=${e.code} msg=${e.message??``}`:``),re(h.id)};return(0,J.jsx)(`div`,{className:`cds-idle-media`,"aria-hidden":`true`,children:h.kind===`video`?(0,J.jsx)(`video`,{ref:b,src:h.url,autoPlay:!0,muted:!0,playsInline:!0,loop:w,onEnded:w?void 0:ne,onError:ae,style:{objectFit:e}},`${h.id}:${ee}`):(0,J.jsx)(`img`,{src:h.url,alt:``,onError:ae,style:{objectFit:e}},h.id)})}function et({light:e,onChanged:t,onActivity:n,onPlayNow:r}){let[a,o]=(0,E.useState)(null),[s,c]=(0,E.useState)(me),[l,u]=(0,E.useState)(!1),[d,f]=(0,E.useState)(null),[p,m]=(0,E.useState)(null),[h,g]=(0,E.useState)({}),[ee]=(0,E.useState)(()=>oe()),_=(0,E.useRef)(null),v=Ve(),y=e?`rgba(23,19,16,0.62)`:`rgba(255,255,255,0.62)`,b=e?`rgba(23,19,16,0.16)`:`rgba(255,255,255,0.16)`,x=e?`rgba(23,19,16,0.04)`:`rgba(255,255,255,0.05)`,S=a?.items??null,C=e=>{o(e),t()},w=()=>He().then(o).catch(e=>{o({items:[],used:0,free:null}),f(e?.message||`this device will not keep files`)});(0,E.useEffect)(()=>{w()},[]),(0,E.useEffect)(()=>{if(!l)return;let e=setInterval(n,1e4);return()=>clearInterval(e)},[l]),(0,E.useEffect)(()=>{if(!p)return;let e=setTimeout(()=>m(null),4e3);return()=>clearTimeout(e)},[p]);async function T(e){n(),u(!0),f(null);try{let t=await Ue(e);t.refused.length&&f(t.refused.map(e=>`${e.name}, ${e.why}`).join(`  ·  `)),C(t.library)}catch(e){f(e?.message||`this device will not keep files`),He().then(C).catch(()=>{})}finally{u(!1),n(),_.current&&(_.current.value=``)}}async function te(e,t){n(),u(!0),f(null);try{C(await e())}catch(e){f(e?.message||t)}finally{u(!1)}}let D=(e,t)=>{if(!S)return;let n=_e(S.map(e=>e.id),e,t);o(e=>e&&{...e,items:n.map(t=>e.items.find(e=>e.id===t)).filter(Boolean)}),te(()=>Ge(n),`the new order was not saved`)},O=e=>{p===e?(m(null),te(()=>We(e),`it would not come off`)):(m(e),n())};function k(e){n();let r={...s,...e};c(r),he(e),t()}let A=(S??[]).some(e=>L(e.type,e.name)===`image`),ne=[3,5,8,10,15,20,30,45,60].filter(e=>e>=2&&e<=60);return(0,J.jsxs)(`div`,{className:`cds-idle-setup`,children:[(0,J.jsx)(`div`,{className:`cds-idle-top`,children:(0,J.jsxs)(`div`,{children:[(0,J.jsx)(`div`,{className:`cds-idle-h`,children:`Customer screen settings`}),(0,J.jsxs)(`p`,{className:`cds-idle-note`,style:{color:y},children:[`Your ads play full screen whenever nobody is ordering, and step aside the moment something is rung up. `,(0,J.jsxs)(`b`,{children:[`They are kept on this `,v?`tablet`:`device`,` only`]}),`, nothing is uploaded, so another counter needs its own.`]})]})}),!v&&(0,J.jsx)(`input`,{ref:_,type:`file`,multiple:!0,accept:`image/*,video/*`,className:`cds-idle-file`,onChange:e=>void T(e.target.files)}),(0,J.jsxs)(`div`,{className:`cds-idle-section`,style:{background:x,borderColor:b},children:[(0,J.jsxs)(`div`,{className:`cds-idle-sechead`,children:[(0,J.jsx)(`span`,{className:`cds-idle-sub`,children:`Your ads`}),(0,J.jsxs)(`span`,{className:`cds-idle-actions`,children:[(0,J.jsx)(`button`,{type:`button`,className:`cds-exit-btn`,disabled:l,onClick:()=>{n(),v?T():_.current?.click()},children:l?`Working…`:`Add pictures or videos`}),r&&(0,J.jsx)(`button`,{type:`button`,className:`cds-exit-btn cds-exit-go`,disabled:l||!S?.length,onClick:r,children:`Play my ads now`})]})]}),d&&(0,J.jsx)(`p`,{className:`cds-idle-trouble`,style:{color:e?`#a3300b`:`#ffb08a`},children:d}),S===null?null:S.length===0?(0,J.jsx)(`p`,{className:`cds-idle-note cds-idle-empty`,style:{color:y},children:`No ads yet - the screen shows the usual welcome page. Pick as many pictures and videos as you like; they play one after another and start again from the first.`}):(0,J.jsx)(`ol`,{className:`cds-idle-list`,children:S.map((t,n)=>{let r=L(t.type,t.name)===`video`;return(0,J.jsxs)(`li`,{style:{borderColor:b},children:[(0,J.jsx)(`span`,{className:`cds-idle-pos`,style:{color:y},children:n+1}),(0,J.jsx)(Q,{item:t,video:r,line:b,onPlayable:e=>g(n=>n[t.id]===!e?n:{...n,[t.id]:!e})}),(0,J.jsxs)(`span`,{className:`cds-idle-what`,children:[(0,J.jsx)(`span`,{className:`cds-idle-name`,children:t.name}),ee[t.id]?(0,J.jsxs)(`span`,{className:`cds-idle-meta cds-idle-bad`,style:{color:e?`#a3300b`:`#ffb08a`},children:[`This tablet could not play this · `,Re(t.size)]}):h[t.id]?(0,J.jsxs)(`span`,{className:`cds-idle-meta cds-idle-bad`,style:{color:e?`#a3300b`:`#ffb08a`},children:[`Won't play here · `,Re(t.size)]}):(0,J.jsxs)(`span`,{className:`cds-idle-meta`,style:{color:y},children:[r?`Video`:`Picture`,` · `,Re(t.size)]})]}),r?(0,J.jsx)(`span`,{className:`cds-idle-secs cds-idle-secs-note`,style:{color:y},children:`Plays to the end`}):(0,J.jsxs)(i,{className:`cds-idle-secs`,"aria-label":`How long ${t.name} stays on screen`,value:t.seconds?String(t.seconds):``,disabled:l,onChange:e=>{let n=Number(e.target.value)||null;te(()=>Ke(t.id,n),`that was not saved`)},style:{borderColor:b},children:[(0,J.jsxs)(`option`,{value:``,children:[`Usual (`,s.image_s,`s)`]}),ne.map(e=>(0,J.jsxs)(`option`,{value:String(e),children:[e,` seconds`]},e))]}),(0,J.jsxs)(`span`,{className:`cds-idle-move`,children:[(0,J.jsx)(`button`,{type:`button`,disabled:l||n===0,onClick:()=>D(t.id,-1),"aria-label":`Play ${t.name} earlier`,style:{borderColor:b},children:`▲`}),(0,J.jsx)(`button`,{type:`button`,disabled:l||n===S.length-1,onClick:()=>D(t.id,1),"aria-label":`Play ${t.name} later`,style:{borderColor:b},children:`▼`})]}),(0,J.jsx)(`button`,{type:`button`,className:`cds-idle-x`+(p===t.id?` is-armed`:``),disabled:l,onClick:()=>O(t.id),"aria-label":`Take ${t.name} off this screen`,children:p===t.id?`Tap again`:`Remove`})]},t.id)})}),S&&S.some(e=>h[e.id])&&(0,J.jsx)(`p`,{className:`cds-idle-trouble`,style:{color:e?`#a3300b`:`#ffb08a`},children:`A video marked above will not play on this tablet, so the screen skips it. It is usually how the phone recorded it (HEVC, 4K or HDR). Save it again as an MP4 at 1080p or smaller - in CapCut, Export at 1080p; on an iPhone, set Settings › Camera › Formats to Most Compatible before recording - then remove this one and add the new copy.`}),S&&S.some(e=>ee[e.id])&&(0,J.jsx)(`p`,{className:`cds-idle-trouble`,style:{color:e?`#a3300b`:`#ffb08a`},children:`The screen closed while a file marked above was showing, so it is set aside for a day. It is usually too big for this tablet: a picture over 4000 pixels wide, or a 4K video. Save a smaller copy (a picture under 2000 pixels, a video as an MP4 at 1080p), then remove this one and add the new copy.`}),a&&(0,J.jsxs)(`p`,{className:`cds-idle-note cds-idle-store`,style:{color:y},children:[S?.length?`${S.length} ${S.length===1?`ad`:`ads`}, ${Re(a.used)} on this ${v?`tablet`:`device`}`:`Nothing stored yet`,a.free==null?``:` · ${Re(a.free)} free`,v?` · kept in the app’s own storage, so they stay through restarts and updates. Only uninstalling the app, or clearing its storage in Android settings, removes them.`:` · kept by this browser on this device. Clearing the browser’s data removes them.`]})]}),(0,J.jsxs)(`div`,{className:`cds-idle-section`,style:{background:x,borderColor:b},children:[(0,J.jsx)(`div`,{className:`cds-idle-sub`,children:`How they play`}),(0,J.jsxs)(`div`,{className:`cds-idle-rows`,children:[(0,J.jsxs)(`div`,{className:`cds-idle-row`,children:[(0,J.jsx)(`span`,{children:`Screen layout`}),(0,J.jsx)(`span`,{className:`cds-idle-seg`,children:[[`off`,`Full screen`],[`left`,`Ads on the left`],[`right`,`Ads on the right`]].map(([e,t])=>(0,J.jsx)(`button`,{type:`button`,className:`cds-idle-segbtn`+(s.split===e?` is-on`:``),style:{borderColor:b},onClick:()=>k({split:e}),children:t},e))})]}),(0,J.jsxs)(`label`,{className:`cds-idle-row`,children:[(0,J.jsx)(`span`,{children:`Start after a sale, once the screen has been quiet for`}),(0,J.jsxs)(`span`,{className:`cds-idle-num`,children:[(0,J.jsx)(`input`,{type:`number`,inputMode:`numeric`,min:5,max:120,value:s.delay_s,onChange:e=>k({delay_s:Number(e.target.value)||5}),style:{borderColor:b,color:`inherit`}}),(0,J.jsx)(`span`,{style:{color:y},children:`seconds`})]})]}),A&&(0,J.jsxs)(`label`,{className:`cds-idle-row`,children:[(0,J.jsx)(`span`,{children:`Usual time for each picture`}),(0,J.jsxs)(`span`,{className:`cds-idle-num`,children:[(0,J.jsx)(`input`,{type:`number`,inputMode:`numeric`,min:2,max:60,value:s.image_s,onChange:e=>k({image_s:Number(e.target.value)||2}),style:{borderColor:b,color:`inherit`}}),(0,J.jsx)(`span`,{style:{color:y},children:`seconds`})]})]}),(0,J.jsxs)(`div`,{className:`cds-idle-row`,children:[(0,J.jsx)(`span`,{children:`Fit to the screen`}),(0,J.jsx)(`span`,{className:`cds-idle-seg`,children:[[`cover`,`Fill, crop the edges`],[`contain`,`Show all of it`]].map(([e,t])=>(0,J.jsx)(`button`,{type:`button`,className:`cds-idle-segbtn`+(s.fit===e?` is-on`:``),style:{borderColor:b},onClick:()=>k({fit:e}),children:t},e))})]})]}),(0,J.jsx)(`p`,{className:`cds-idle-note`,style:{color:y,marginBottom:0},children:`Videos play without sound, a screen nobody touches cannot be given permission to make a noise. Keep this tablet plugged in: at a normal shop it is on about ten hours a day.`})]})]})}var Z=Promise.resolve();function tt(e){Z=Z.then(()=>new Promise(t=>{let n=!1,r=setTimeout(()=>i(),2e4),i=()=>{n||(n=!0,clearTimeout(r),t())};try{e(i)}catch{i()}}))}function Q({item:e,video:t,line:n,onPlayable:r}){let[i,a]=(0,E.useState)(null),o=(0,E.useRef)(null);return(0,E.useEffect)(()=>{let n=null,i=!0,s=null,c=null;return qe(e).then(e=>{e&&(i?(n=e.release,tt(t?t=>{if(c=t,!i){t();return}s=document.createElement(`video`),s.muted=!0,s.playsInline=!0,s.preload=`metadata`;let n=!1,a=e=>{!n&&i&&(n=!0,r?.(e))},l=setTimeout(()=>{a(!1),u()},15e3),u=()=>{clearTimeout(l);try{s?.removeAttribute(`src`),s?.load()}catch{}s=null,t()};s.onloadeddata=()=>{if(s&&!s.videoWidth)a(!1),u();else try{s.currentTime=Math.min(3,(s.duration||2)/4)}catch{a(!0),u()}},s.onseeked=()=>{let e=o.current;if(a(!!(s&&s.videoWidth)),e&&s&&s.videoWidth){e.width=176,e.height=Math.round(176*s.videoHeight/s.videoWidth)||110;try{e.getContext(`2d`)?.drawImage(s,0,0,e.width,e.height)}catch{}}u()},s.onerror=()=>{a(!1),u()},s.src=e.url}:t=>{if(c=t,!i){t();return}let r=()=>{i&&a(e.url),t()},s=window.createImageBitmap;typeof s!=`function`||typeof fetch!=`function`?r():fetch(e.url).then(e=>e.blob()).then(e=>s(e,{resizeWidth:176,resizeQuality:`low`})).then(e=>{let r=o.current;if(i&&r&&e.width){r.width=176,r.height=Math.round(176*e.height/e.width)||110;try{r.getContext(`2d`)?.drawImage(e,0,0,r.width,r.height)}catch{}}try{e.close()}catch{}n?.(),n=null,t()}).catch(r)})):e.release())}).catch(()=>{}),()=>{if(i=!1,s)try{s.removeAttribute(`src`),s.load()}catch{}c?.(),n?.()}},[e.id,e.file]),(0,J.jsxs)(`span`,{className:`cds-idle-thumb`,style:{borderColor:n},children:[i?(0,J.jsx)(`img`,{src:i,alt:``}):(0,J.jsx)(`canvas`,{ref:o}),t&&(0,J.jsx)(`span`,{className:`cds-idle-badge`,"aria-label":`Video`,children:(0,J.jsx)(`svg`,{width:`10`,height:`10`,viewBox:`0 0 10 10`,fill:`currentColor`,"aria-hidden":`true`,children:(0,J.jsx)(`path`,{d:`M2 1l7 4-7 4z`})})})]})}var nt=`
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
`,rt=[{score:1,glyph:`:-(`,label:`Bad`},{score:2,glyph:`:-/`,label:`Not great`},{score:3,glyph:`:-|`,label:`OK`},{score:4,glyph:`:-)`,label:`Good`},{score:5,glyph:`:-D`,label:`Great`}],it=8e3,at=25e3,ot=14e3;function st({logo:e,size:t,className:n=``}){return e?(0,J.jsx)(`img`,{src:e,alt:``,"aria-hidden":!0,draggable:!1,style:{height:t,width:`auto`,maxWidth:`70%`,objectFit:`contain`,borderRadius:Math.round(t*.12)},className:`select-none shrink-0 ${n}`}):(0,J.jsx)(o,{size:t,className:n})}function ct(e,t){return e&&(e.items?.length??0)===0?e:{...e??t,mode:`cart`,items:[],subtotal_cents:0,discount_cents:0,total_cents:0,service_charge_cents:void 0,service_charge_label:void 0,tax_cents:void 0,tax_label:void 0,customer_name:null,stamps:void 0,stamps_required:void 0,ready_in_min:void 0,qr_image:void 0,qr_method:void 0,qr_amount_cents:void 0,paid_total_cents:void 0,change_cents:void 0}}function lt(){u(!0,`cds`);let[e,t]=(0,E.useState)(null),[n,r]=(0,E.useState)(``),[o,l]=(0,E.useState)(`live`),d=(0,E.useRef)(null),m=(0,E.useRef)(0),T=(0,E.useRef)(null),O=(0,E.useRef)(null),A=(0,E.useRef)(null),ne=(0,E.useRef)(null),[re,ie]=(0,E.useState)(``),j=(0,E.useRef)(null);(0,E.useEffect)(()=>{let e=()=>{T.current&&(clearTimeout(T.current),T.current=null)},n=window.ember.display.onData(n=>{let r=n;r?.config&&(ne.current=r.config),typeof r?.config?.shop_logo==`string`&&ie(r.config.shop_logo);let i=r?.mode??`cart`;if(i===`cart`){let n=r.items?.length??0;if(ze(j.current,r.src,n,Date.now())||(j.current=Be(r.src,n,Date.now()),d.current=r,Date.now()<m.current&&(r.items?.length??0)===0))return;e(),m.current=0,t(r)}else if(i===`endqr`){if(j.current=null,!d.current){t(e=>e?.mode===`qr`?null:e);return}e(),m.current=0,t(d.current)}else e(),i===`paid`&&(j.current=null,O.current=r,m.current=Date.now()+it,T.current=setTimeout(()=>{T.current=null,m.current=0,t(ct(d.current,r))},it)),t(r)});window.ember.settings.publicInfo().then(e=>r(e.restaurant_name)).catch(()=>{});let i=window.ember.display?.onLink?.(e=>l(e));return()=>{n(),e();try{i?.()}catch{}}},[]);let M={...p(e?.config??ne.current),shop_logo:re},ae=e?.items??[],N=(0,E.useRef)(s()).current,[P,F]=(0,E.useState)(!1),[oe,se]=(0,E.useState)(!1),I=typeof window<`u`?window.ember?.auth:null,le=N&&typeof I?.verifyCapability==`function`&&typeof I?.loginUsers==`function`,[ue,de]=(0,E.useState)(!1),[fe,pe]=(0,E.useState)([]),[he,ge]=(0,E.useState)(``),[_e,ve]=(0,E.useState)(``),[L,ye]=(0,E.useState)(``),[be,xe]=(0,E.useState)(!1);(0,E.useEffect)(()=>{P||(de(!1),ve(``),ye(``),xe(!1))},[P]),(0,E.useEffect)(()=>{if(!P||!le||ue)return;let e=!0;return Promise.resolve(I.loginUsers()).then(t=>{if(!e)return;let n=e=>e===`owner`?0:e===`manager`?1:2,r=[...t??[]].filter(e=>e&&e.username).sort((e,t)=>n(String(e.role))-n(String(t.role)));r.length===0?de(!0):(pe(r),ge(r[0].username))}).catch(()=>{e&&ye(`Could not check who may open this. Try again in a moment.`)}),()=>{e=!1}},[P,le,ue]);async function Se(){if(he&&_e&&!be){xe(!0),ye(``);try{await I.verifyCapability(he,_e,`settings.write`)?(de(!0),ve(``)):(ye(`That is not right, or that person cannot change settings.`),ve(``))}catch{ye(`Too many tries. Wait a minute, then try again.`),ve(``)}finally{xe(!1)}}}(0,E.useEffect)(()=>{if(!P)return;let e=()=>F(!1),t=t=>{(t.key===`Escape`||t.key===`Esc`)&&e()};return document.addEventListener(`backbutton`,e),document.addEventListener(`keydown`,t),()=>{document.removeEventListener(`backbutton`,e),document.removeEventListener(`keydown`,t)}},[P]);let[Ce,we]=(0,E.useState)(0),[R,z]=(0,E.useState)(me),[B,V]=(0,E.useState)(!1),[H,U]=(0,E.useState)(!1),[Te,Ee]=(0,E.useState)(0),De=(0,E.useRef)(0);(0,E.useEffect)(()=>{let e=!0,t=null;return z(me()),He().then(t=>{e&&(De.current=0,V(t.items.length>0))}).catch(()=>{e&&(t=setTimeout(()=>Ee(e=>e+1),k(De.current)),De.current+=1)}),()=>{e=!1,t&&clearTimeout(t)}},[Te]),(0,E.useEffect)(()=>{let e=()=>{document.visibilityState===`visible`?(N&&b(!0),Ee(e=>e+1)):N&&b(!1)},t=()=>{N&&b(!1)};return document.addEventListener(`visibilitychange`,e),window.addEventListener(`pagehide`,t),()=>{document.removeEventListener(`visibilitychange`,e),window.removeEventListener(`pagehide`,t)}},[N]),(0,E.useEffect)(()=>{if(!N)return;let e=null,t=()=>{e||(S(),e=setInterval(()=>S(),C))},n=()=>{e&&(clearInterval(e),e=null),S(!0)},r=()=>{document.visibilityState===`visible`?t():n()};return document.visibilityState!==`hidden`&&t(),document.addEventListener(`visibilitychange`,r),window.addEventListener(`pagehide`,n),()=>{document.removeEventListener(`visibilitychange`,r),window.removeEventListener(`pagehide`,n),n()}},[N]),(0,E.useEffect)(()=>{let e=!0;return Je().then(t=>{e&&t>0&&Ee(e=>e+1)}).catch(()=>{}),()=>{e=!1}},[]);let[Oe,ke]=(0,E.useState)(()=>Date.now()),Ae=(0,E.useRef)(!0),[je,Me]=(0,E.useState)(N),Ne=(0,E.useRef)(null);(0,E.useEffect)(()=>{if(!N)return;let e=setTimeout(()=>Me(!1),12e3);return()=>clearTimeout(e)},[N]);let[Pe,Fe]=(0,E.useState)(null),[Ie,Le]=(0,E.useState)([]),[Re,W]=(0,E.useState)(!1),[G,Ve]=(0,E.useState)(!1),[K,q]=(0,E.useState)(!1),[Ue,We]=(0,E.useState)(!1),Ge=(0,E.useRef)(null);if(Ge.current===null)try{Ge.current=localStorage.getItem(`ember.cds.idle.onglass`)||``}catch{Ge.current=``}(0,E.useEffect)(()=>{(N||y())&&ee({paired:!N,send:dt,adNote:()=>ft(Ge.current||``)}).then(()=>Le(g()))},[N]),(0,E.useEffect)(()=>{if(!N)return;let e=!0;return h().then(t=>{if(!e)return;Fe(t);let n=!1;try{n=localStorage.getItem(ut)===`1`}catch{}let r=t.available&&!t.isDefault&&!t.canRecoverRenderer;q(r),(t.available&&!t.isDefault&&!n||r)&&Ve(!0)}),()=>{e=!1}},[N]),(0,E.useEffect)(()=>{if(!G)return;if(K){let e=setTimeout(()=>Ve(!1),6e5);return()=>clearTimeout(e)}let e=setTimeout(()=>Ve(!1),6e4);return()=>clearTimeout(e)},[G,K]);async function Ke(){We(!1),(await v()).opened?W(!0):We(!0);let e=await h();Fe(e),q(e.available&&!e.isDefault&&!e.canRecoverRenderer),w()}let qe=e=>{try{localStorage.setItem(ut,`1`)}catch{}Ve(!1),e&&Ke()};(0,E.useEffect)(()=>{if(!N||!P)return;let e=()=>{h().then(e=>{Fe(e),w()}),Le(g())};e();let t=()=>{document.visibilityState===`visible`&&e()};return document.addEventListener(`visibilitychange`,t),()=>document.removeEventListener(`visibilitychange`,t)},[N,P]);let[Ye,Xe]=(0,E.useState)(!1);(0,E.useEffect)(()=>{if(!Ye)return;let e=setTimeout(()=>Xe(!1),6e3);return()=>clearTimeout(e)},[Ye]),(0,E.useEffect)(()=>{if(!P)return;let e=setTimeout(()=>F(!1),12e4);return()=>clearTimeout(e)},[P,Ce]);let Ze=()=>{P||Ne.current||(Ne.current=setTimeout(()=>F(!0),3e3))},Y=()=>{Ne.current&&clearTimeout(Ne.current),Ne.current=null};async function Qe(){Ye?(se(!0),b(!1),S(!0),await x(),await c(),window.location.reload()):Xe(!0)}(0,E.useEffect)(()=>{let e=A.current;e&&(e.scrollTop=e.scrollHeight)},[ae.length]);let X=M.theme===`light`,[Z,tt]=(0,E.useState)(()=>({w:window.innerWidth,h:window.innerHeight}));(0,E.useEffect)(()=>{let e=()=>tt({w:window.innerWidth,h:window.innerHeight});return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let Q=ce(R.split,Z.w,Z.h),rt=e?.mode??`cart`,lt=e?.items?.length??0,$=rt!==`cart`||lt>0;(0,E.useEffect)(()=>{a(`an order on the customer screen`,$)},[$]),(0,E.useEffect)(()=>{$!==Ae.current&&(Ae.current=$,$?U(!1):ke(Date.now()))},[$]),(0,E.useEffect)(()=>{let e=null,t=()=>{let n=Date.now();if(Oe>n){ke(n);return}let r=te({hasMedia:B,moment:rt,itemCount:lt,quietSince:Oe,paidHoldUntil:m.current,delayMs:R.delay_s*1e3,now:n});if(U(r),r||!B||$)return;let i=D({quietSince:Oe,paidHoldUntil:m.current,now:n});e=setTimeout(t,Math.max(250,i+R.delay_s*1e3-n))};return t(),()=>{e&&clearTimeout(e)}},[B,rt,lt,Oe,R.delay_s,$]);let[ht,gt]=(0,E.useState)(!1),[_t,vt]=(0,E.useState)(0);(0,E.useEffect)(()=>{(e?.mode??`cart`)===`cart`&&(gt(!1),vt(0))},[e?.mode]);let yt=e=>{if(gt(!0),vt(e),T.current&&O.current){clearTimeout(T.current);let n=O.current,r=e>=4&&M.review_url?at:ot;m.current=Date.now()+r,T.current=setTimeout(()=>{T.current=null,m.current=0,t(ct(d.current,n))},r)}try{let t=window.ember?.display;if(t?.csatRoute?.()===`till`){t.sendCsat?.(e);return}window.ember?.csat?.leave?.({score:e,source:`screen`,order_id:null})?.catch?.(()=>{})}catch{}},bt=(()=>{try{return window.ember?.display?.csatRoute?.()!==`none`}catch{return!0}})();return(0,J.jsxs)(`div`,{className:`cds-page`,onPointerDown:Ze,onPointerUp:Y,onPointerCancel:Y,onPointerLeave:Y,children:[(()=>{let t=(0,J.jsx)(mt,{d:e,cfg:Q&&!B?{...M,promo:``,join_url:``}:M,fallbackName:n,listRef:A,link:o,onCsat:bt?yt:void 0,csatDone:ht,csatScore:_t,besideSign:!!Q&&!B});if(!Q)return t;let r=(0,J.jsx)(`div`,{className:`cds-split-ads${X?` is-light`:``}`,children:B&&!P?(0,J.jsx)($e,{fit:R.fit,imageMs:R.image_s*1e3,generation:Te,onEmpty:()=>V(!1)}):(0,J.jsxs)(`div`,{className:`cds-split-sign`,style:{"--sv":`${(Math.min(Z.w,Z.h)/100).toFixed(2)}px`},children:[(0,J.jsx)(st,{logo:re,size:Math.round(Math.max(48,Math.min(160,Math.min(Z.w,Z.h)*.16)))}),M.show_name&&(e?.restaurant||n)?(0,J.jsx)(`div`,{className:`cds-split-name`,children:e?.restaurant||n}):null,M.promo?(0,J.jsx)(`div`,{className:`cds-split-promo`,children:M.promo}):null,M.join_url?(0,J.jsxs)(`div`,{className:`cds-split-join`,children:[(0,J.jsx)(`div`,{className:`cds-qr`,dangerouslySetInnerHTML:{__html:f(M.join_url,4)}}),(0,J.jsxs)(`span`,{children:[`Scan for your `,(0,J.jsx)(`b`,{children:`loyalty card`})]})]}):null]})});return(0,J.jsxs)(`div`,{className:`cds-split cds-split-${Q.dir}`,children:[Q.adsFirst?r:null,(0,J.jsx)(`div`,{className:`cds-split-order`,children:t}),Q.adsFirst?null:r]})})(),H&&!P&&!Q&&(0,J.jsx)($e,{fit:R.fit,imageMs:R.image_s*1e3,generation:Te,onEmpty:()=>{U(!1),V(!1)}}),G&&!P&&(0,J.jsxs)(`div`,{className:K?`cds-home-offer cds-home-must`:`cds-home-offer`,style:{background:X?`#ffffff`:`#17191b`,color:X?`#171310`:`#ffffff`},onPointerDown:e=>e.stopPropagation(),children:[(0,J.jsx)(`div`,{className:`cds-exit-title`,children:K?`Set Ember as the home app`:`Open Ember by itself?`}),(0,J.jsx)(`p`,{className:`cds-exit-note`,style:{color:X?`rgba(23,19,16,0.62)`:`rgba(255,255,255,0.62)`},children:K?`This tablet’s Android cannot bring the customer screen back by itself. Make Ember its home app, or the screen stays closed after Android closes it.`:(0,J.jsxs)(J.Fragment,{children:[`Make Ember this tablet`,`’`,`s home app and the customer screen opens again by itself after a restart, an update or Android closing it.`]})}),(0,J.jsxs)(`div`,{className:`cds-exit-actions`,children:[(0,J.jsx)(`button`,{type:`button`,className:`cds-exit-btn`,onClick:()=>qe(!1),children:`Not now`}),(0,J.jsx)(`button`,{type:`button`,className:`cds-exit-btn cds-exit-go`,onClick:()=>qe(!0),children:`Open Ember by itself`})]})]}),P&&le&&!ue&&(0,J.jsx)(`div`,{className:`cds-exit-veil`,"data-back-closes":``,style:{background:X?`rgba(250,247,242,0.98)`:`rgba(10,11,12,0.98)`,zIndex:20},onPointerDown:e=>{e.stopPropagation(),we(e=>e+1)},children:(0,J.jsxs)(`form`,{className:`cds-exit-box`,style:{color:X?`#171310`:`#ffffff`},onSubmit:e=>{e.preventDefault(),Se()},children:[(0,J.jsx)(`div`,{className:`cds-exit-title`,children:`Staff only`}),(0,J.jsx)(`p`,{className:`cds-exit-note`,style:{color:X?`rgba(23,19,16,0.62)`:`rgba(255,255,255,0.62)`},children:`Ask the owner or a manager to type their password to open the screen settings.`}),fe.length>0&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(i,{value:he,onChange:e=>ge(e.target.value),"aria-label":`Who is opening this`,style:{font:`inherit`,fontSize:`1rem`,padding:`0.6rem`,borderRadius:`0.5rem`,width:`100%`,marginBottom:`0.6rem`},children:fe.map(e=>(0,J.jsx)(`option`,{value:e.username,children:e.full_name||e.username},e.username))}),(0,J.jsx)(`input`,{type:`password`,value:_e,onChange:e=>ve(e.target.value),autoFocus:!0,"aria-label":`Password`,autoComplete:`off`,style:{font:`inherit`,fontSize:`1rem`,padding:`0.6rem`,borderRadius:`0.5rem`,width:`100%`,marginBottom:`0.6rem`}})]}),L&&(0,J.jsx)(`p`,{className:`cds-exit-note`,role:`alert`,children:L}),(0,J.jsxs)(`div`,{className:`cds-exit-actions`,children:[(0,J.jsx)(`button`,{type:`button`,onClick:()=>F(!1),className:`cds-exit-btn`,children:`Cancel`}),fe.length>0&&(0,J.jsx)(`button`,{type:`submit`,disabled:be||!_e,className:`cds-exit-btn cds-exit-go`,children:`Open`})]})]})}),P&&(!le||ue)&&(0,J.jsx)(`div`,{className:`cds-exit-veil`,"data-back-closes":``,style:{background:X?`rgba(250,247,242,0.98)`:`rgba(10,11,12,0.98)`,zIndex:20},onPointerDown:e=>e.stopPropagation(),children:(0,J.jsxs)(`div`,{className:`cds-exit-box cds-exit-scroll cds-exit-wide`,style:{color:X?`#171310`:`#ffffff`},children:[(0,J.jsx)(et,{light:X,onChanged:()=>Ee(e=>e+1),onActivity:()=>we(e=>e+1),onPlayNow:()=>{F(!1),ke(Date.now()-R.delay_s*1e3-1e3)}}),N&&Pe?.available&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(`div`,{className:`cds-exit-title`,children:`If the tablet closes the screen`}),(0,J.jsx)(`p`,{className:`cds-exit-note`,style:{color:X?`rgba(23,19,16,0.62)`:`rgba(255,255,255,0.62)`},children:Pe.isDefault?`Ember is this tablet’s home app, so the screen opens again by itself after a restart, an update or Android closing it.`:Ue?`Open Settings › Apps › Default apps › Home app and pick Ember POS.`:Re?`Choose Ember POS as the home app on the page that opened, then come back here.`:Pe.canRecoverRenderer===!1?`This tablet’s Android cannot bring the screen back by itself. Make Ember its home app, or the screen stays closed after Android closes it.`:`Make Ember this tablet’s home app and the screen opens again by itself after a restart, an update or Android closing it.`}),!Pe.isDefault&&(0,J.jsx)(`div`,{className:`cds-exit-actions`,children:(0,J.jsx)(`button`,{type:`button`,className:Pe.canRecoverRenderer===!1?`cds-exit-btn cds-exit-go`:`cds-exit-btn`,onClick:()=>void Ke(),children:`Open Ember by itself`})})]}),N&&Ie.length>1&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(`div`,{className:`cds-exit-title`,children:`Recent starts`}),(0,J.jsx)(`div`,{className:`cds-exit-note`,style:{color:X?`rgba(23,19,16,0.62)`:`rgba(255,255,255,0.62)`},children:Ie.slice(0,5).map(e=>(0,J.jsxs)(`div`,{children:[new Date(e.at).toLocaleString([],{month:`short`,day:`numeric`,hour:`numeric`,minute:`2-digit`}),` - `,_(e.why)]},e.at))})]}),N&&(0,J.jsx)(`div`,{className:`cds-exit-title`,children:`This tablet is the customer screen`}),N&&(0,J.jsx)(`p`,{className:`cds-exit-note`,style:{color:X?`rgba(23,19,16,0.62)`:`rgba(255,255,255,0.62)`},children:`Turn it off to use this tablet normally again. The POS keeps working either way.`}),(0,J.jsxs)(`div`,{className:`cds-exit-actions`,children:[(0,J.jsx)(`button`,{type:`button`,onClick:()=>F(!1),disabled:oe,className:`cds-exit-btn`,children:`Done`}),N&&(0,J.jsx)(`button`,{type:`button`,onClick:()=>void Qe(),disabled:oe,className:`cds-exit-btn cds-exit-go`,children:oe?`Turning off…`:Ye?`Tap again to turn off`:`Turn it off`})]})]})}),(0,J.jsx)(`style`,{children:pt+nt})]})}var ut=`ember.cds.homeOffered`;async function dt(e,t){try{let[{supabase:n},{cdsRole:r,tagPlatform:i}]=await Promise.all([T(()=>import(`./index.web-PYxaYZEa.js`).then(e=>e.ji),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])),T(()=>import(`./index.web-PYxaYZEa.js`).then(e=>e.Mi),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]))]),a=window.Capacitor,o=typeof a?.getPlatform==`function`?String(a.getPlatform()):`web`,s=``;try{s=String(await window.ember?.getVersion?.()??``)}catch{}let{error:c}=await n.rpc(`log_client_error`,{p_message:e,p_stack:t??null,p_platform:i(o,r()),p_app_version:s,p_url:typeof location<`u`?location.href:null});return!c}catch{return!1}}async function ft(e){if(!e)return``;try{let t=(await He()).items.find(t=>t.id===e);return t?`ad=${e} ${Math.max(1,Math.round((Number(t.size)||0)/1024/1024))}MB ${t.type||``}`.trim():`ad=${e}`}catch{return`ad=${e}`}}var pt=`
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
`;function mt({d:e,cfg:t,fallbackName:n,listRef:r,link:i=`live`,onCsat:a,csatDone:s=!1,csatScore:c=0,besideSign:u=!1}){let p=e?.currency??`₱`,h=e?.mode??`cart`,g=e?.items??[],ee=e?.restaurant||n||``,_=t.theme===`light`,v=_?{"--cds-bg":`#faf7f2`,"--cds-panel":`#ffffff`,"--cds-line":`rgba(28,22,16,0.12)`,"--cds-lift":`0 1px 2px rgba(28,22,16,0.06), 0 8px 24px rgba(28,22,16,0.08)`,"--cds-brand":`#a33900`,"--cds-new":`rgba(28,22,16,0.05)`,"--cds-ink":`#171310`,"--cds-ink-2":`rgba(23,19,16,0.74)`,"--cds-ink-3":`rgba(23,19,16,0.60)`,"--cds-accent":`#a33900`,"--cds-good":`#0b6538`,"--cds-glow":`rgba(255,92,0,0.10)`,"--cds-flame":`#c2410c`,"--cds-good-bg":`rgba(11,101,56,0.12)`}:{"--cds-bg":`#0e0f10`,"--cds-panel":`#17191b`,"--cds-line":`rgba(255,255,255,0.08)`,"--cds-lift":`0 1px 0 rgba(255,255,255,0.04) inset, 0 12px 32px rgba(0,0,0,0.35)`,"--cds-brand":`#ffb59a`,"--cds-new":`rgba(255,255,255,0.05)`,"--cds-ink":`#ffffff`,"--cds-ink-2":`rgba(255,255,255,0.62)`,"--cds-ink-3":`rgba(255,255,255,0.38)`,"--cds-accent":`#ffb59a`,"--cds-good":`#6ee7b7`,"--cds-glow":`rgba(255,92,0,0.16)`,"--cds-flame":`#ff6a1a`,"--cds-good-bg":`rgba(110,231,183,0.14)`},y={ember:[`#ff6a1a`,`#ffb59a`,`rgba(255,92,0,0.16)`,`#c2410c`,`#a33900`,`rgba(255,92,0,0.10)`],green:[`#34d399`,`#a7f3d0`,`rgba(52,211,153,0.16)`,`#047857`,`#065f46`,`rgba(4,120,87,0.10)`],blue:[`#60a5fa`,`#bfdbfe`,`rgba(96,165,250,0.16)`,`#1d4ed8`,`#1e40af`,`rgba(29,78,216,0.10)`],violet:[`#a78bfa`,`#ddd6fe`,`rgba(167,139,250,0.16)`,`#6d28d9`,`#5b21b6`,`rgba(109,40,217,0.10)`],rose:[`#fb7185`,`#fecdd3`,`rgba(251,113,133,0.16)`,`#be123c`,`#9f1239`,`rgba(190,18,60,0.10)`],gold:[`#fbbf24`,`#fde68a`,`rgba(251,191,36,0.16)`,`#a16207`,`#854d0e`,`rgba(161,98,7,0.10)`]},b=y[t.accent??`ember`]??y.ember,x=t.style??`classic`,S={"--cds-flame":_?b[3]:b[0],"--cds-accent":_?b[4]:b[1],"--cds-glow":_?b[5]:b[2],"--cds-on-flame":_?`#ffffff`:`#121415`,"--cds-paper-flame":b[3],"--cds-paper-accent":b[4],"--cds-paper":`#fffdf7`,"--cds-paper-ink":`#1d1a16`},C=(0,E.useRef)(null),[w,T]=(0,E.useState)(0),[te,D]=(0,E.useState)(!1);(0,E.useEffect)(()=>{let e=C.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect();t.width&&t.height&&(T(Math.min(t.width,t.height)/100),D(t.width/t.height<.75))};if(t(),typeof ResizeObserver>`u`)return window.addEventListener(`resize`,t),()=>window.removeEventListener(`resize`,t);let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[]);let O=t.text_scale===`large`?1.2:1,k=(e,t,n)=>`${Math.max(e*16*O,Math.min(t*w*O,n*16*O)).toFixed(2)}px`;return(0,J.jsxs)(`div`,{ref:C,className:`cds-root cds-style-${x}${te?` cds-portrait`:``}`,style:{...v,...S,"--cds-u":`${w||1}px`,background:`var(--cds-bg)`,color:`var(--cds-ink)`},children:[(0,J.jsx)(`style`,{children:$}),(0,J.jsxs)(`header`,{className:`cds-head`,children:[(0,J.jsxs)(`div`,{className:`cds-brand`,children:[(0,J.jsx)(o,{size:Math.round(parseFloat(k(1.9,5.75,4)))}),(0,J.jsxs)(`div`,{className:`cds-brand-txt`,children:[t.show_name&&ee?(0,J.jsx)(`div`,{className:`cds-name`,style:{fontSize:k(1.1,3.4,2.4)},children:ee}):null,(0,J.jsx)(`div`,{className:`cds-powered`,style:{fontSize:k(.5,1.2,.85)},children:`Powered by Ember POS`})]})]}),h===`qr`||h===`paid`||!g.length?(0,J.jsx)(`div`,{className:`cds-state`,style:{fontSize:k(.6,1.5,1)},children:h===`qr`?`Scan to pay`:h===`paid`?`Thank you`:`Welcome`},h+`i`):null]}),h===`qr`?(0,J.jsxs)(`main`,{className:`cds-main cds-center`,children:[(0,J.jsxs)(`div`,{className:`cds-qr-lead`,style:{fontSize:k(.95,2.6,1.9)},children:[`Pay `,(0,J.jsx)(`b`,{children:e?.qr_method??``}),`, scan with your phone`]}),e?.qr_image&&(0,J.jsx)(`span`,{className:`cds-qr-ring`,children:(0,J.jsx)(`img`,{src:e.qr_image,alt:`Payment QR`,className:`cds-qr`})}),(0,J.jsx)(`div`,{className:`cds-qr-amt`,style:{fontSize:k(2,7,5)},children:d(e?.qr_amount_cents??0,p)}),(0,J.jsx)(`div`,{className:`cds-hint`,style:{fontSize:k(.75,1.9,1.3)},children:`Show the confirmation screen to the cashier.`})]}):h===`paid`?(0,J.jsxs)(`main`,{className:`cds-main cds-center cds-paid`,children:[(0,J.jsxs)(`span`,{className:`cds-tickwrap`,style:{width:k(3,8.5,6.2),height:k(3,8.5,6.2)},"aria-hidden":!0,children:[(0,J.jsx)(`span`,{className:`cds-ripple`}),Array.from({length:10},(e,t)=>(0,J.jsx)(`span`,{className:`cds-spark`,style:{"--a":`${t*36+8}deg`,"--cds-spark":t%2?`var(--cds-flame)`:`#feb700`}},t)),(0,J.jsxs)(`svg`,{className:`cds-tick`,viewBox:`0 0 64 64`,children:[(0,J.jsx)(`circle`,{cx:`32`,cy:`32`,r:`30`}),(0,J.jsx)(`path`,{d:`M19 33 l9 9 l17 -19`})]})]}),(0,J.jsx)(`div`,{className:`cds-thanks`,style:{fontSize:k(1.6,4.6,3.3)},children:t.thanks}),(0,J.jsxs)(`div`,{className:`cds-receipt`,children:[(0,J.jsxs)(`div`,{className:`cds-paid-row`,children:[(0,J.jsx)(`span`,{className:`cds-paid-lbl`,style:{fontSize:k(.75,1.9,1.35)},children:`Paid`}),(0,J.jsx)(`span`,{className:`cds-paid-val`,style:{fontSize:k(1.3,3.6,2.6)},children:d(e?.paid_total_cents??0,p)})]}),t.show_change&&(e?.change_cents??0)>0&&(0,J.jsxs)(`div`,{className:`cds-paid-row cds-change`,children:[(0,J.jsx)(`span`,{className:`cds-paid-lbl`,style:{fontSize:k(.75,1.9,1.35)},children:`Change`}),(0,J.jsx)(`span`,{className:`cds-paid-val`,style:{fontSize:k(1.3,3.6,2.6)},children:(0,J.jsx)(`span`,{className:`cds-change-pill`,children:d(e.change_cents,p)})})]})]}),(e?.ready_in_min??0)>0&&(0,J.jsxs)(`div`,{className:`cds-ready`,style:{fontSize:k(.85,2.2,1.6)},children:[`Ready by `,(0,J.jsx)(`b`,{children:m(e.ready_in_min)})]}),t.ask_csat&&a&&(0,J.jsx)(`div`,{className:`cds-csat`,children:s?(0,J.jsx)(`div`,{className:`cds-csat-thanks`,style:{fontSize:k(.85,2.2,1.5)},children:c>=4&&t.review_url?(0,J.jsxs)(`div`,{className:`cds-review`,children:[(0,J.jsx)(`div`,{children:`Thank you! Would you tell others too?`}),(0,J.jsx)(`div`,{className:`cds-qr cds-review-qr`,dangerouslySetInnerHTML:{__html:f(t.review_url,4)}}),(0,J.jsx)(`div`,{className:`cds-review-how`,children:`Scan to leave us a Google review`})]}):c>0&&c<=2?`Sorry about that. Please tell the cashier, we want to put it right.`:`Thank you for telling us.`}):(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(`div`,{className:`cds-csat-q`,style:{fontSize:k(.8,2,1.4)},children:`How was it?`}),(0,J.jsx)(`div`,{className:`cds-csat-row`,children:rt.map(e=>(0,J.jsx)(`button`,{type:`button`,className:`cds-csat-btn`,style:{fontSize:k(1.1,3,2.2)},"aria-label":e.label,onClick:()=>a?.(e.score),children:e.glyph},e.score))})]})}),(0,J.jsx)(`div`,{className:`cds-hint`,style:{fontSize:k(.85,2.2,1.5)},children:`Please come again`})]}):!e||g.length===0?(0,J.jsxs)(`main`,{className:`cds-main cds-center`,children:[!u&&(0,J.jsx)(st,{logo:t.shop_logo??``,size:Math.max(36,Math.min(180,13*w*O)),className:`cds-mark`}),(0,J.jsx)(`div`,{className:`cds-welcome`,style:{fontSize:k(1.5,5,3.4)},children:t.welcome}),t.promo&&(0,J.jsx)(`div`,{className:`cds-promo`,style:{fontSize:k(.85,2.3,1.6)},children:t.promo}),t.join_url&&(0,J.jsxs)(`div`,{className:`cds-join`,children:[(0,J.jsx)(`div`,{className:`cds-qr cds-join-qr`,dangerouslySetInnerHTML:{__html:f(t.join_url,4)}}),(0,J.jsxs)(`div`,{className:`cds-join-text`,style:{fontSize:k(.7,1.7,1.2)},children:[`Scan for your `,(0,J.jsx)(`b`,{children:`loyalty card`})]})]})]}):(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(`main`,{className:`cds-main cds-list`,ref:r,children:[(0,J.jsx)(`div`,{className:`cds-state cds-order-title`,style:{fontSize:k(.6,1.5,1)},children:`Your order`}),t.show_items?(0,J.jsx)(`div`,{className:`cds-lines`,children:g.map((e,t)=>(0,J.jsxs)(`div`,{className:`cds-line`,style:{fontSize:k(.95,2.7,2)},children:[(0,J.jsxs)(`span`,{className:`cds-line-l`,children:[(0,J.jsx)(`span`,{className:`cds-qty${e.quantity>9?` cds-qty-2`:``}`,children:e.quantity},e.quantity),(0,J.jsxs)(`span`,{className:`cds-item`,children:[e.name,e.variant_label?(0,J.jsxs)(`span`,{className:`cds-variant`,children:[` · `,e.variant_label]}):``,e.addon_label?(0,J.jsxs)(`span`,{className:`cds-mod cds-mod-add`,style:{fontSize:k(.82,2.2,1.6)},children:[`+ `,e.addon_label]}):null,e.notes?(0,J.jsx)(`span`,{className:`cds-mod cds-mod-note`,style:{fontSize:k(.82,2.2,1.6)},children:e.notes}):null]})]}),(0,J.jsx)(`span`,{className:`cds-line-r`,children:d(e.price_cents*e.quantity,p)})]},t))}):(0,J.jsxs)(`div`,{className:`cds-center cds-nolines`,style:{fontSize:k(1.1,3.2,2.2)},children:[g.reduce((e,t)=>e+t.quantity,0),` item`,g.reduce((e,t)=>e+t.quantity,0)===1?``:`s`]})]}),(0,J.jsxs)(`footer`,{className:`cds-foot`,children:[t.show_subtotal&&(0,J.jsxs)(`div`,{className:`cds-sub`,style:{fontSize:k(.75,1.9,1.3)},children:[(0,J.jsx)(`span`,{children:`Subtotal`}),(0,J.jsx)(`span`,{children:d(e.subtotal_cents,p)})]}),t.show_discount&&e.discount_cents>0&&(0,J.jsxs)(`div`,{className:`cds-sub cds-disc`,style:{fontSize:k(.75,1.9,1.3)},children:[(0,J.jsx)(`span`,{children:`Discount`}),(0,J.jsxs)(`span`,{children:[`−`,d(e.discount_cents,p)]})]}),(e.service_charge_cents??0)>0&&(0,J.jsxs)(`div`,{className:`cds-sub`,style:{fontSize:k(.75,1.9,1.3)},children:[(0,J.jsx)(`span`,{children:e.service_charge_label||`Service charge`}),(0,J.jsx)(`span`,{children:d(e.service_charge_cents,p)})]}),(e.tax_cents??0)>0&&(0,J.jsxs)(`div`,{className:`cds-sub`,style:{fontSize:k(.75,1.9,1.3)},children:[(0,J.jsx)(`span`,{children:e.tax_label||`Tax`}),(0,J.jsx)(`span`,{children:d(e.tax_cents,p)})]}),(0,J.jsxs)(`div`,{className:`cds-total${i===`live`?``:` cds-total-unsure`}`,children:[(0,J.jsxs)(`span`,{className:`cds-total-lbl`,style:{fontSize:k(.95,2.6,1.8)},children:[`Total`,(0,J.jsx)(`span`,{className:`cds-count`,children:(()=>{let e=g.reduce((e,t)=>e+t.quantity,0);return`${e} item${e===1?``:`s`}`})()})]}),(0,J.jsx)(`span`,{className:`cds-total-val`,style:{fontSize:k(2.2,8,5.6)},children:d(e.total_cents,p)},e.total_cents)]}),(e.stamps_required??0)>0&&e.stamps!=null&&(0,J.jsxs)(`div`,{className:`cds-stamps`,style:{fontSize:k(.7,1.8,1.2)},children:[(0,J.jsx)(`span`,{className:`cds-stamp-dots`,"aria-hidden":!0,children:Array.from({length:Math.min(12,e.stamps_required)},(t,n)=>(0,J.jsx)(`span`,{className:n<(e.stamps??0)?`cds-dot cds-dot-on`:`cds-dot`},n))}),(0,J.jsx)(`span`,{children:(e.stamps??0)>=e.stamps_required?`A free one is ready for you`:`${e.stamps} of ${e.stamps_required} stamps`})]}),l(i)&&(0,J.jsx)(`div`,{className:`cds-link-note`,style:{fontSize:k(.6,1.5,1.05)},children:l(i)})]})]})]})}var $=`
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
`;function ht({config:e,moment:n=`cart`}){let r=n===`idle`?{items:[],subtotal_cents:0,discount_cents:0,total_cents:0,currency:`₱`,restaurant:``}:n===`paid`?{mode:`paid`,items:[],subtotal_cents:0,discount_cents:0,total_cents:0,currency:`₱`,restaurant:``,paid_total_cents:3e4,change_cents:5e3}:{items:t()===`pharmacy`?[{name:`Biogesic 500 mg Tablet`,quantity:2,price_cents:9e3,variant_label:`Banig of 10`},{name:`Vitamin C 500 mg`,quantity:1,price_cents:7e3,variant_label:null}]:t()===`retail`?[{name:`Notebook, 80 leaves`,quantity:2,price_cents:9e3,variant_label:`Pack of 3`},{name:`Ballpen, black`,quantity:1,price_cents:7e3,variant_label:null}]:[{name:`Cafe Latte`,quantity:2,price_cents:9e3,variant_label:`Large`},{name:`Banana Bread`,quantity:1,price_cents:7e3,variant_label:null}],subtotal_cents:25e3,discount_cents:2500,total_cents:22500,currency:`₱`,restaurant:``};return(0,J.jsx)(mt,{d:r,cfg:e,fallbackName:`Your Shop`})}export{ht as CustomerScreenPreview,lt as default};