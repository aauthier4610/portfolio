(function(){var B=document&&document.currentScript&&document.currentScript.src;(window.webpackJsonpruntime=window.webpackJsonpruntime||[]).push([[9],{ln0a:function(D,c,i){"use strict";i.r(c),i.d(c,"countWidgetTypes",function(){return m}),i.d(c,"countButtonTypes",function(){return g}),i.d(c,"countImages",function(){return y}),i.d(c,"collectWidgetCount",function(){return C});var b=i("yXPU"),d=i.n(b);const a="[data-widget-type], [data-element-type]";function m(){const t=document.querySelectorAll(a),e=Array.from(t).reduce(f({generateFeatureKey:n=>`widget-${v(n)}`}),{});return Object.values(e)}function g(){const t=document.querySelectorAll(a),e=Array.from(t).filter(p).reduce(f({generateFeatureKey:n=>`${P(n)}-${v(n)}`}),{});return Object.values(e)}function T(){const t=document.querySelectorAll('[data-element-type="mapextension"][provider="mappy"][data-radius-toggle="true"]');return t.length?[{feature:"maps-mappy-radius",count:t.length}]:[]}function A(){const t=document.querySelectorAll('[data-element-type="html"]'),e=["acuityscheduling","tidycal","Calendly","simplybookme","fareharbor","bookalet","bookeo"];return Array.from(t).find(r=>e.some(u=>r.innerHTML.toLowerCase().includes(u)))?[{feature:"booking-script",count:1}]:[]}function S(){const t=document.querySelectorAll(a),e=["book","appointment","schedule"];return Array.from(t).filter(p).find(r=>e.some(u=>r.innerHTML.toLowerCase().includes(u)))?[{feature:"booking-text",count:1}]:[]}function y(){const t=document.querySelectorAll("img"),e=document.querySelectorAll("img[alt]");return[{feature:"all-image-elements",count:t.length},{feature:"all-image-elements-with-alt",count:e.length}]}function C(t){return s.apply(this,arguments)}function s(){return s=d()(function*(t){var e,n;if(!((e=window.rtCommonProps)!==null&&e!==void 0&&e["scripts.widgetCount.enabled"]))return;const r=t||m().concat(T()).concat(g()).concat(A()).concat(S()).concat(y()),{_currentPage:u,Parameters:o}=window,M={features:r,siteAlias:o==null?void 0:o.SiteAlias,sitePublicationDate:o!=null&&o.PublicationDate?new Date(o==null?void 0:o.PublicationDate).getTime():0,pageType:o==null?void 0:o.pageType,pageUuid:(u==null||(n=u.pageContent)===null||n===void 0?void 0:n.uuid)||(o==null?void 0:o.InitialPageUuid)||`${u==null?void 0:u.pageID}`,path:location.pathname};W(M)}),s.apply(this,arguments)}function W(t){return l.apply(this,arguments)}function l(){return l=d()(function*(t){try{var e;const n=(e=window.rtCommonProps)===null||e===void 0?void 0:e["runtimecollector.url"];if(!n)return;yield fetch(`${n}/feature/metrics`,{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(t)})}catch(n){console.debug("Failed send metrics for feature count",n)}}),l.apply(this,arguments)}function f({generateFeatureKey:t}){return(e,n)=>{const r=t(n);return e[r]||(e[r]={feature:r,count:0}),e[r].count+=1,e}}const p=t=>{const e=t.classList.contains("dmWidget")&&h(t),n=Array.from(t.querySelectorAll(".dmWidget")).some(r=>h(r));return e||n};function h(t){return window.getComputedStyle(t).getPropertyValue("display")!=="none"}function P(t){return t.classList.contains("button_2")||t.querySelector(".button_2")?"button-secondary":"button-primary"}const v=t=>{const e=t.getAttribute("data-widget-type")||t.getAttribute("data-element-type"),n=t.getAttribute("data-widget-id");return n?`${e}-${n}`:e}}}])})();