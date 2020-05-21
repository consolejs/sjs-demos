var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function u(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function c(t,e,n,r){return t[1]&&r?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](r(e))):n.ctx}function s(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function f(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function h(){return p(" ")}function m(){return p("")}function g(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t){return""===t?void 0:+t}function R(t,e){e=""+e,t.data!==e&&(t.data=e)}function y(t,e){(null!=e||t.value)&&(t.value=e)}function b(t,e,n){t.classList[n?"add":"remove"](e)}let P;function x(t){P=t}function w(t){(function(){if(!P)throw new Error("Function called outside component initialization");return P})().$$.on_mount.push(t)}const _=[],N=[],j=[],A=[],C=Promise.resolve();let k=!1;function T(t){j.push(t)}let O=!1;const L=new Set;function E(){if(!O){O=!0;do{for(let t=0;t<_.length;t+=1){const e=_[t];x(e),z(e.$$)}for(_.length=0;N.length;)N.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];L.has(e)||(L.add(e),e())}j.length=0}while(_.length);for(;A.length;)A.pop()();k=!1,O=!1,L.clear()}}function z(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const S=new Set;let q;function I(){q={r:0,c:[],p:q}}function U(){q.r||r(q.c),q=q.p}function W(t,e){t&&t.i&&(S.delete(t),t.i(e))}function B(t,e,n,r){if(t&&t.o){if(S.has(t))return;S.add(t),q.c.push(()=>{S.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function M(t){t&&t.c()}function Q(t,n,u){const{fragment:a,on_mount:c,on_destroy:s,after_update:i}=t.$$;a&&a.m(n,u),T(()=>{const n=c.map(e).filter(o);s?s.push(...n):r(n),t.$$.on_mount=[]}),i.forEach(T)}function D(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function F(t,e){-1===t.$$.dirty[0]&&(_.push(t),k||(k=!0,C.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function H(e,o,u,a,c,s,i=[-1]){const f=P;x(e);const d=o.props||{},p=e.$$={fragment:null,ctx:null,props:s,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:i};let h=!1;if(p.ctx=u?u(e,d,(t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=o)&&(p.bound[t]&&p.bound[t](o),h&&F(e,t)),n}):[],p.update(),h=!0,r(p.before_update),p.fragment=!!a&&a(p.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);p.fragment&&p.fragment.l(t),t.forEach(l)}else p.fragment&&p.fragment.c();o.intro&&W(e.$$.fragment),Q(e,o.target,o.anchor),E()}x(f)}class G{$destroy(){D(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const K=[];function V(t,e){return{subscribe:J(t,e).subscribe}}function J(e,n=t){let r;const o=[];function a(t){if(u(e,t)&&(e=t,r)){const t=!K.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),K.push(n,e)}if(t){for(let t=0;t<K.length;t+=2)K[t][0](K[t+1]);K.length=0}}}return{set:a,update:function(t){a(t(e))},subscribe:function(u,c=t){const s=[u,c];return o.push(s),1===o.length&&(r=n(a)||t),u(e),()=>{const t=o.indexOf(s);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}function X(t){return t&&t.default||t}const Y=(0,X(Object.freeze({__proto__:null,derived:function(e,n,u){const c=!Array.isArray(e),s=c?[e]:e,i=n.length<2;return V(u,e=>{let u=!1;const l=[];let f=0,d=t;const p=()=>{if(f)return;d();const r=n(c?l[0]:l,e);i?e(r):d=o(r)?r:t},h=s.map((t,e)=>a(t,t=>{l[e]=t,f&=~(1<<e),u&&p()},()=>{f|=1<<e}));return u=!0,p(),function(){r(h),d()}})},readable:V,writable:J,get:function(t){let e;return a(t,t=>e=t)(),e}})).writable)({});var Z={activeRoute:{subscribe:Y.subscribe,set:function(t){Y.set(t)},remove:function(){Y.set({})}}},tt=Z.activeRoute;var et={UrlParser:(t,e="")=>{const n=new URL(t);function r(){return u(e).reduce((t,e,n)=>(":"===e[0]&&t.push({value:e.slice(1),index:n}),t),[])}function o(){return u(n.pathname)}function u(t){return"/"===t||0===t.trim().length?[t]:("/"===t.slice(-1)&&(t=t.slice(0,-1)),"/"===t[0]&&(t=t.slice(1)),t.split("/"))}return Object.freeze({host:n.host,hostname:n.hostname,namedParams:function(){const t=o();return r().reduce((e,n)=>(e[n.value]=t[n.index],e),{})}(),namedParamsKeys:r().reduce((t,e)=>(t.push(e.value),t),[]),namedParamsValues:function(){const t=o();return r().reduce((e,n)=>(e.push(t[n.index]),e),[])}(),pathNames:o(),port:n.port,pathname:n.pathname,protocol:n.protocol,search:n.search,queryParams:function(){const t={};return n.searchParams.forEach((e,n)=>{t[n]=e}),t}(),queryParamsKeys:function(){const t=[];return n.searchParams.forEach((e,n)=>{t.push(n)}),t}(),queryParamsValues:function(){const t=[];return n.searchParams.forEach(e=>{t.push(e)}),t}()})}};function nt(t,e){return(e=ut(e)).includes(":")?e.includes(t):e.startsWith(t)}function rt(t,e,n){let r=!1;if(n)return{exists:e.lang&&e.lang[n]&&e.lang[n].includes(t),language:n};if(r=nt(t,e.name),!r&&e.lang&&"object"==typeof e.lang)for(const[o,u]of Object.entries(e.lang))nt(t,u)&&(r=!0,n=o);return{exists:r,language:n}}function ot(t){return"/"===t||0===t.trim().length?[t]:(t=ut(t,"both")).split("/")}function ut(t,e="lead"){return t.trim().length<1?"":("trail"!==e&&"both"!==e||"/"===t.slice(-1)&&(t=t.slice(0,-1)),"lead"!==e&&"both"!==e||"/"===t[0]&&(t=t.slice(1)),t)}function at(t,e=null){return e&&t.lang&&t.lang[e]?t.lang[e]:t.name}var ct={anyEmptyNestedRoutes:function t(e){let n=!1;return 0===Object.keys(e).length||(e.childRoute&&0===Object.keys(e.childRoute).length?n=!0:e.childRoute&&(n=t(e.childRoute)),n)},compareRoutes:nt,findLocalisedRoute:rt,getNamedParams:function(t=""){return 0===t.trim().length?[]:ot(t).reduce((t,e)=>(":"===e[0]&&t.push(e.slice(1)),t),[])},getPathNames:ot,nameToPath:function(t=""){let e;return"/"===t||0===t.trim().length?t:(e=(t=ut(t,"lead")).split(":")[0],e=ut(e,"trail"),e.toLowerCase())},pathWithQueryParams:function(t){let e=[];if(t.queryParams)for(let[n,r]of Object.entries(t.queryParams))e.push(`${n}=${r}`);return e.length>0?`${t.path}?${e.join("&")}`:t.path},pathWithoutQueryParams:function(t){return t.path.split("?")[0]},removeExtraPaths:function(t,e){const n=e.split("/");return n.length>1&&n.forEach((function(e,n){e.length>0&&n>0&&t.shift()})),t},removeSlash:ut,routeNameLocalised:at,updateRoutePath:function(t,e,n,r,o=!1){if("/"===t||0===t.trim().length)return{result:t,language:null};let u=t,a=n.name,c=r;if(o&&(c=""),a=ut(a),u=ut(u),n.childRoute)return{result:t,language:c};{let t=rt(u,n,c);t.exists&&o&&(u=at(n,r));let s=a.split(":")[0];return s=ut(s,"trail"),s=s.split("/"),s.shift(),s.forEach(()=>{const a=e[0];if(t=rt(`${u}/${a}`,n,c),!a||!t.exists)return{result:u,language:t.language};u=o?at(n,r):`${u}/${a}`,e.shift()}),{result:u,language:t.language}}}};const{UrlParser:st}=et,{pathWithQueryParams:it,removeSlash:lt}=ct;var ft={RouterCurrent:function(t){const e=t||!1;let n="";return Object.freeze({active:function(){return n},isActive:function(t,e=!1){"/"!==t[0]&&(t="/"+t);let r=st("http://fake.com"+t).pathname,o=st("http://fake.com"+n).pathname;return r=lt(r,"trail"),o=lt(o,"trail"),e?o.includes(r):o===r},setActive:function(t){n=t.path,function(t){if("undefined"!=typeof window){const r=it(t);window.history.pushState({page:r},"",r),e&&(n=r,"undefined"!=typeof ga&&(ga("set","page",n),ga("send","pageview")))}var n}(t)}})}};var dt={RouterGuard:function(t){const e=t;return Object.freeze({valid:function(){return e&&e.guard&&"function"==typeof e.guard},redirect:function(){return!e.guard()},redirectPath:function(){let t="/";return e.redirect&&e.redirect.length>0&&(t=e.redirect),t}})}};const{RouterGuard:pt}=dt;var ht={RouterRedirect:function(t,e){const n=pt(t.onlyIf);return Object.freeze({path:function(){let r=e;return t.redirectTo&&t.redirectTo.length>0&&(r=t.redirectTo),n.valid()&&n.redirect()&&(r=n.redirectPath()),r}})}};const{UrlParser:mt}=et;var gt={RouterRoute:function({routeInfo:t,path:e,routeNamedParams:n,urlParser:r,namedPath:o,language:u}){function a(){const t=mt("https://fake.com"+r.pathname,o).namedParams;return{...n,...t}}return Object.freeze({get:function(){return{name:e,component:t.component,layout:t.layout,queryParams:r.queryParams,namedParams:a(),path:e,language:u}},namedParams:a})}};const{updateRoutePath:$t,getNamedParams:vt,nameToPath:Rt,removeExtraPaths:yt,routeNameLocalised:bt}=ct;var Pt={RouterPath:function({basePath:t,basePathName:e,pathNames:n,convert:r,currentLanguage:o}){let u,a,c=o;function s(){return bt(a,c)}function i(){return Rt(s())}function l(){return Rt(u.result)}return Object.freeze({basePathSameAsLocalised:function(){return l()===i()},updatedPath:function(t){return a=t,u=$t(e,n,a,c,r),c=r?o:u.language,u},basePathNameWithoutNamedParams:l,localisedPathName:s,localisedRouteWithoutNamedParams:i,namedPath:function(){const e=s();return t?`${t}/${e}`:e},pathNames:n,routeLanguage:function(){return c},routePath:function(){let e=`${t}/${l()}`;"//"===e&&(e="/"),c&&(n=yt(n,i()));const r=vt(s());return r&&r.length>0&&r.forEach((function(){n.length>0&&(e+="/"+n.shift())})),e}})}};const{UrlParser:xt}=et,{RouterRedirect:wt}=ht,{RouterRoute:_t}=gt,{RouterPath:Nt}=Pt,{anyEmptyNestedRoutes:jt,pathWithoutQueryParams:At}=ct;var Ct={RouterFinder:function({routes:t,currentUrl:e,routerOptions:n,convert:r}){const o=n.defaultLanguage,u=xt(e);let a="",c={};return Object.freeze({findActiveRoute:function(){let e=function t(e,n,r,s,i){let l={},f=r.shift().toLowerCase();const d=Nt({basePath:n,basePathName:f,pathNames:r,convert:i,currentLanguage:s});e.forEach((function(e){if(d.updatedPath(e),d.basePathSameAsLocalised()){let n=d.routePath();if(a=wt(e,a).path(),l.name!==n&&(l=function({route:t,routePath:e,routeLanguage:n,urlParser:r,namedPath:u}){const a=_t({routeInfo:t,urlParser:r,path:e,routeNamedParams:c,namedPath:u,language:n||o});return c=a.namedParams(),a.get()}({route:e,routePath:n,routeLanguage:d.routeLanguage(),urlParser:u,namedPath:d.namedPath()})),e.nestedRoutes&&e.nestedRoutes.length>0&&d.pathNames.length>0)l.childRoute=t(e.nestedRoutes,n,d.pathNames,d.routeLanguage(),i),l.path=l.childRoute.path,l.language=l.childRoute.language;else if(function(t,e){return t.nestedRoutes&&t.nestedRoutes.length>0&&0===e.length}(e,d.pathNames)){const r=t(e.nestedRoutes,n,["index"],d.routeLanguage(),i);r&&Object.keys(r).length>0&&(l.childRoute=r,l.language=l.childRoute.language)}}})),a&&(l.redirectTo=a);return l}(t,"",u.pathNames,n.lang,r);return e&&Object.keys(e).length&&!jt(e)?e.path=At(e):"undefined"!=typeof window&&(e=function(e){const n=t.find(t=>"404"==t.name),r=e||o||"";return n?{...n,language:r,path:"404"}:{name:"404",component:"",path:"404",redirectTo:"/404.html"}}(n.lang)),e}})}};const{activeRoute:kt}=Z,{RouterCurrent:Tt}=ft,{RouterFinder:Ot}=Ct,{removeSlash:Lt}=ct;let Et,zt=[],St={};function qt(t,e,n={}){function r(){let n=!1;return St.langConvertTo&&(St.lang=St.langConvertTo,n=!0),Ot({routes:t,currentUrl:e,routerOptions:St,convert:n}).findActiveRoute()}return St={...n},void 0!==e&&""!==e||(e=document.location.href),Et=Tt(St.gaPageviews),e=Lt(e,"trail"),zt=t,Object.freeze({setActiveRoute:function(){const t=r();return t.redirectTo?(e=t.redirectTo,"undefined"!=typeof window&&("/404.html"===e?Et.setActive({path:"/404.html"}):It(e)),e):(Et.setActive(t),kt.set(t),t);var e},findActiveRoute:r})}function It(t,e=null){return t=Lt(t,"lead"),e&&(St.langConvertTo=e),qt(zt,"http://fake.com/"+t,St).setActiveRoute()}"undefined"!=typeof window&&(window.addEventListener("click",t=>{t.target.pathname&&t.target.hostname===window.location.hostname&&"a"===t.target.localName&&(t.preventDefault(),It(t.target.pathname+t.target.search))}),window.onpopstate=function(t){It(window.location.pathname+window.location.search)});var Ut={SpaRouter:qt,localisedRoute:function(t,e){return t=Lt(t,"lead"),St.langConvertTo=e,qt(zt,"http://fake.com/"+t,St).findActiveRoute()},navigateTo:It,routeIsActive:function(t,e=!1){return Et.isActive(t,e)}},Wt=Ut.SpaRouter,Bt=Ut.localisedRoute,Mt=Ut.navigateTo,Qt=Ut.routeIsActive;function Dt(t){let e;const n=new Vt({props:{currentRoute:t[0].childRoute,params:t[1]}});return{c(){M(n.$$.fragment)},m(t,r){Q(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.currentRoute=t[0].childRoute),2&e&&(r.params=t[1]),n.$set(r)},i(t){e||(W(n.$$.fragment,t),e=!0)},o(t){B(n.$$.fragment,t),e=!1},d(t){D(n,t)}}}function Ft(t){let e,n;var r=t[0].component;function o(t){return{props:{currentRoute:{...t[0],component:""},params:t[1]}}}if(r)var u=new r(o(t));return{c(){u&&M(u.$$.fragment),e=m()},m(t,r){u&&Q(u,t,r),i(t,e,r),n=!0},p(t,n){const a={};if(1&n&&(a.currentRoute={...t[0],component:""}),2&n&&(a.params=t[1]),r!==(r=t[0].component)){if(u){I();const t=u;B(t.$$.fragment,1,0,()=>{D(t,1)}),U()}r?(M((u=new r(o(t))).$$.fragment),W(u.$$.fragment,1),Q(u,e.parentNode,e)):u=null}else r&&u.$set(a)},i(t){n||(u&&W(u.$$.fragment,t),n=!0)},o(t){u&&B(u.$$.fragment,t),n=!1},d(t){t&&l(e),u&&D(u,t)}}}function Ht(t){let e,n;var r=t[0].layout;function o(t){return{props:{currentRoute:{...t[0],layout:""},params:t[1]}}}if(r)var u=new r(o(t));return{c(){u&&M(u.$$.fragment),e=m()},m(t,r){u&&Q(u,t,r),i(t,e,r),n=!0},p(t,n){const a={};if(1&n&&(a.currentRoute={...t[0],layout:""}),2&n&&(a.params=t[1]),r!==(r=t[0].layout)){if(u){I();const t=u;B(t.$$.fragment,1,0,()=>{D(t,1)}),U()}r?(M((u=new r(o(t))).$$.fragment),W(u.$$.fragment,1),Q(u,e.parentNode,e)):u=null}else r&&u.$set(a)},i(t){n||(u&&W(u.$$.fragment,t),n=!0)},o(t){u&&B(u.$$.fragment,t),n=!1},d(t){t&&l(e),u&&D(u,t)}}}function Gt(t){let e,n,r,o;const u=[Ht,Ft,Dt],a=[];function c(t,e){return t[0].layout?0:t[0].component?1:t[0].childRoute?2:-1}return~(e=c(t))&&(n=a[e]=u[e](t)),{c(){n&&n.c(),r=m()},m(t,n){~e&&a[e].m(t,n),i(t,r,n),o=!0},p(t,[o]){let s=e;e=c(t),e===s?~e&&a[e].p(t,o):(n&&(I(),B(a[s],1,1,()=>{a[s]=null}),U()),~e?(n=a[e],n||(n=a[e]=u[e](t),n.c()),W(n,1),n.m(r.parentNode,r)):n=null)},i(t){o||(W(n),o=!0)},o(t){B(n),o=!1},d(t){~e&&a[e].d(t),t&&l(r)}}}function Kt(t,e,n){let{currentRoute:r={}}=e,{params:o={}}=e;return t.$set=t=>{"currentRoute"in t&&n(0,r=t.currentRoute),"params"in t&&n(1,o=t.params)},[r,o]}class Vt extends G{constructor(t){super(),H(this,t,Kt,Gt,u,{currentRoute:0,params:1})}}var Jt=Object.freeze({__proto__:null,default:Vt});function Xt(t){let e;const n=new Vt({props:{currentRoute:t[0]}});return{c(){M(n.$$.fragment)},m(t,r){Q(n,t,r),e=!0},p(t,[e]){const r={};1&e&&(r.currentRoute=t[0]),n.$set(r)},i(t){e||(W(n.$$.fragment,t),e=!0)},o(t){B(n.$$.fragment,t),e=!1},d(t){D(n,t)}}}function Yt(t,e,n){let r;!function(t,e,n){t.$$.on_destroy.push(a(e,n))}(t,tt,t=>n(0,r=t));let{routes:o=[]}=e,{options:u={}}=e;return w((function(){Wt(o,document.location.href,u).setActiveRoute()})),t.$set=t=>{"routes"in t&&n(1,o=t.routes),"options"in t&&n(2,u=t.options)},[r,o,u]}var Zt=Object.freeze({__proto__:null,default:class extends G{constructor(t){super(),H(this,t,Yt,Xt,u,{routes:1,options:2})}}});function te(t){let e,n,r;const o=t[6].default,u=function(t,e,n,r){if(t){const o=c(t,e,n,r);return t[0](o)}}(o,t,t[5],null);return{c(){e=d("a"),u&&u.c(),$(e,"href",t[0]),$(e,"title",t[1]),$(e,"class",t[2]),b(e,"active",Qt(t[0]))},m(o,a,c){i(o,e,a),u&&u.m(e,null),n=!0,c&&r(),r=g(e,"click",t[3])},p(t,[r]){u&&u.p&&32&r&&u.p(c(o,t,t[5],null),function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(o,t[5],r,null)),(!n||1&r)&&$(e,"href",t[0]),(!n||2&r)&&$(e,"title",t[1]),(!n||4&r)&&$(e,"class",t[2]),5&r&&b(e,"active",Qt(t[0]))},i(t){n||(W(u,t),n=!0)},o(t){B(u,t),n=!1},d(t){t&&l(e),u&&u.d(t),r()}}}function ee(t,e,n){let{to:r="/"}=e,{title:o=""}=e,{styles:u=""}=e,{lang:a=null}=e;w((function(){if(a){const t=Bt(r,a);t&&n(0,r=t.path)}}));let{$$slots:c={},$$scope:s}=e;return t.$set=t=>{"to"in t&&n(0,r=t.to),"title"in t&&n(1,o=t.title),"styles"in t&&n(2,u=t.styles),"lang"in t&&n(4,a=t.lang),"$$scope"in t&&n(5,s=t.$$scope)},[r,o,u,function(t){t.preventDefault(),t.stopPropagation(),Mt(r)},a,s,c]}var ne=Object.freeze({__proto__:null,default:class extends G{constructor(t){super(),H(this,t,ee,te,u,{to:0,title:1,styles:2,lang:4})}}}),re=X(Jt),oe=X(Zt),ue=X(ne);const{SpaRouter:ae,navigateTo:ce,localisedRoute:se,routeIsActive:ie}=Ut;var le={SpaRouter:ae,localisedRoute:se,navigateTo:ce,routeIsActive:ie,Route:re,Router:oe,Navigate:ue},fe=le.Route,de=le.Router;function pe(t){let e,n,r,o,u,a;const c=new fe({props:{currentRoute:t[0]}});return{c(){e=d("h3"),e.textContent="Demo",n=h(),r=d("ul"),r.innerHTML='<li><a href="/sjs-demos/book" class="svelte-gr4m6d">bookstore</a></li> \n  <li><a href="/sjs-demos/ex_a" class="svelte-gr4m6d">example A</a></li>',o=h(),u=d("section"),M(c.$$.fragment),$(r,"class","list svelte-gr4m6d"),$(u,"class","section")},m(t,s){i(t,e,s),i(t,n,s),i(t,r,s),i(t,o,s),i(t,u,s),Q(c,u,null),a=!0},p(t,[e]){const n={};1&e&&(n.currentRoute=t[0]),c.$set(n)},i(t){a||(W(c.$$.fragment,t),a=!0)},o(t){B(c.$$.fragment,t),a=!1},d(t){t&&l(e),t&&l(n),t&&l(r),t&&l(o),t&&l(u),D(c)}}}function he(t,e,n){let{currentRoute:r}=e;return t.$set=t=>{"currentRoute"in t&&n(0,r=t.currentRoute)},[r]}function me(e){let n;return{c(){n=d("div"),n.textContent="哦，我是404 ~~~"},m(t,e){i(t,n,e)},p:t,i:t,o:t,d(t){t&&l(n)}}}function ge(e){let n;return{c(){n=d("div"),n.innerHTML='<a href="/sjs-demos/" class="svelte-12gdfuw">Home</a>',$(n,"class","home svelte-12gdfuw")},m(t,e){i(t,n,e)},p:t,i:t,o:t,d(t){t&&l(n)}}}class $e extends G{constructor(t){super(),H(this,t,null,ge,u,{})}}function ve(e){let n,r,o,u,a,c,f,m,v,y,b,P,x;return{c(){n=d("div"),r=d("h1"),o=p(e[0]),u=h(),a=d("h2"),c=p("$"),f=p(e[1]),m=h(),v=d("p"),y=p(e[2]),b=h(),P=d("button"),P.textContent="添加到购物车",$(r,"class","svelte-evkwpy"),$(a,"class","svelte-evkwpy"),$(P,"class","svelte-evkwpy"),$(n,"class","card svelte-evkwpy")},m(t,l,d){i(t,n,l),s(n,r),s(r,o),s(n,u),s(n,a),s(a,c),s(a,f),s(n,m),s(n,v),s(v,y),s(n,b),s(n,P),d&&x(),x=g(P,"click",e[4])},p(t,[e]){1&e&&R(o,t[0]),2&e&&R(f,t[1]),4&e&&R(y,t[2])},i:t,o:t,d(t){t&&l(n),x()}}}function Re(t,e,n){let{title:r}=e,{price:o}=e,{description:u}=e,{handleAddToCart:a}=e;return t.$set=t=>{"title"in t&&n(0,r=t.title),"price"in t&&n(1,o=t.price),"description"in t&&n(2,u=t.description),"handleAddToCart"in t&&n(3,a=t.handleAddToCart)},[r,o,u,a,()=>a(r)]}class ye extends G{constructor(t){super(),H(this,t,Re,ve,u,{title:0,price:1,description:2,handleAddToCart:3})}}function be(t,e,n){const r=t.slice();return r[4]=e[n].title,r[5]=e[n].price,r[6]=e[n].description,r}function Pe(t,e,n){const r=t.slice();return r[4]=e[n].title,r[5]=e[n].price,r}function xe(t){let e,n=t[1],r=[];for(let e=0;e<n.length;e+=1)r[e]=_e(Pe(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=m()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);i(t,e,n)},p(t,o){if(2&o){let u;for(n=t[1],u=0;u<n.length;u+=1){const a=Pe(t,n,u);r[u]?r[u].p(a,o):(r[u]=_e(a),r[u].c(),r[u].m(e.parentNode,e))}for(;u<r.length;u+=1)r[u].d(1);r.length=n.length}},d(t){f(r,t),t&&l(e)}}}function we(e){let n;return{c(){n=d("p"),n.textContent="购物车空的哦~"},m(t,e){i(t,n,e)},p:t,d(t){t&&l(n)}}}function _e(t){let e,n,r,o,u,a=t[4]+"",c=t[5]+"";return{c(){e=d("div"),n=p("名称: "),r=p(a),o=p(", 价钱: "),u=p(c)},m(t,a){i(t,e,a),s(e,n),s(e,r),s(e,o),s(e,u)},p(t,e){2&e&&a!==(a=t[4]+"")&&R(r,a),2&e&&c!==(c=t[5]+"")&&R(u,c)},d(t){t&&l(e)}}}function Ne(t){let e;const n=new ye({props:{title:t[4],price:t[5],description:t[6],handleAddToCart:t[8]}});return{c(){M(n.$$.fragment)},m(t,r){Q(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.title=t[4]),1&e&&(r.price=t[5]),1&e&&(r.description=t[6]),n.$set(r)},i(t){e||(W(n.$$.fragment,t),e=!0)},o(t){B(n.$$.fragment,t),e=!1},d(t){D(n,t)}}}function je(t){let e,n,o,u,a,c,m,b,P,x,w,_,N,j,A,C,k,T,O,L,E,z,S,q,F,H,G,K,V,J,X,Y,Z,tt,et,nt,rt,ot,ut;const at=new $e({});function ct(t,e){return 0===t[1].length?we:xe}let st=ct(t),it=st(t),lt=t[0],ft=[];for(let e=0;e<lt.length;e+=1)ft[e]=Ne(be(t,lt,e));const dt=t=>B(ft[t],1,1,()=>{ft[t]=null});return{c(){M(at.$$.fragment),e=h(),n=d("div"),o=d("h1"),o.textContent="Bookstore",u=h(),a=d("section"),c=d("h2"),c.textContent="添加一本新书",m=h(),b=d("label"),b.textContent="标题:",P=h(),x=d("input"),w=h(),_=d("label"),_.textContent="价格:",N=h(),j=d("input"),A=h(),C=d("label"),C.textContent="图书描述:",k=h(),T=d("textarea"),O=h(),L=d("div"),E=d("button"),E.textContent="add book",z=h(),S=d("section"),q=d("h2"),q.textContent="购物车",F=h(),H=d("div"),G=p("书本总数："),K=p(t[2]),V=h(),J=d("div"),X=p("订单金额："),Y=p(t[3]),Z=h(),it.c(),tt=h(),et=d("section"),nt=d("h2"),nt.textContent="书单",rt=h();for(let t=0;t<ft.length;t+=1)ft[t].c();$(o,"class","svelte-4zouea"),$(b,"for","title"),$(x,"type","text"),$(x,"id","title"),$(x,"placeholder","请输入书名~"),$(_,"for","price"),$(j,"type","number"),$(j,"id","price"),$(C,"for","description"),$(T,"rows","3"),$(T,"id","description"),$(T,"placeholder","请输入图书描述~~"),$(a,"class","svelte-4zouea"),$(S,"class","svelte-4zouea"),$(et,"class","card-wrap svelte-4zouea"),$(n,"class","bookstore svelte-4zouea")},m(l,f,d){Q(at,l,f),i(l,e,f),i(l,n,f),s(n,o),s(n,u),s(n,a),s(a,c),s(a,m),s(a,b),s(a,P),s(a,x),y(x,t[4]),s(a,w),s(a,_),s(a,N),s(a,j),y(j,t[5]),s(a,A),s(a,C),s(a,k),s(a,T),y(T,t[6]),s(a,O),s(a,L),s(L,E),s(n,z),s(n,S),s(S,q),s(S,F),s(S,H),s(H,G),s(H,K),s(S,V),s(S,J),s(J,X),s(J,Y),s(S,Z),it.m(S,null),s(n,tt),s(n,et),s(et,nt),s(et,rt);for(let t=0;t<ft.length;t+=1)ft[t].m(et,null);ot=!0,d&&r(ut),ut=[g(x,"input",t[10]),g(j,"input",t[11]),g(T,"input",t[12]),g(E,"click",t[7])]},p(t,[e]){if(16&e&&x.value!==t[4]&&y(x,t[4]),32&e&&v(j.value)!==t[5]&&y(j,t[5]),64&e&&y(T,t[6]),(!ot||4&e)&&R(K,t[2]),(!ot||8&e)&&R(Y,t[3]),st===(st=ct(t))&&it?it.p(t,e):(it.d(1),it=st(t),it&&(it.c(),it.m(S,null))),257&e){let n;for(lt=t[0],n=0;n<lt.length;n+=1){const r=be(t,lt,n);ft[n]?(ft[n].p(r,e),W(ft[n],1)):(ft[n]=Ne(r),ft[n].c(),W(ft[n],1),ft[n].m(et,null))}for(I(),n=lt.length;n<ft.length;n+=1)dt(n);U()}},i(t){if(!ot){W(at.$$.fragment,t);for(let t=0;t<lt.length;t+=1)W(ft[t]);ot=!0}},o(t){B(at.$$.fragment,t),ft=ft.filter(Boolean);for(let t=0;t<ft.length;t+=1)B(ft[t]);ot=!1},d(t){D(at,t),t&&l(e),t&&l(n),it.d(),f(ft,t),r(ut)}}}function Ae(t,e,n){let r="",o=10,u="",a=[],c=[];let s,i,l="";return t.$$.update=()=>{2&t.$$.dirty&&n(2,s=c.length),2&t.$$.dirty&&n(3,i=c.reduce((t,e)=>t+e.price,0))},[a,c,s,i,r,o,u,function(){0!=r.length&&(n(0,a=a.concat({title:r,price:o,description:u})),n(4,r=""),n(5,o=10),n(6,u=""))},function(t){let e=a.find(e=>e.title==t);t!==l&&(n(1,c=c.concat(e)),l=t)},l,function(){r=this.value,n(4,r)},function(){o=v(this.value),n(5,o)},function(){u=this.value,n(6,u)}]}function Ce(e){let n;return{c(){n=d("div"),n.textContent="另一个组件~"},m(t,e){i(t,n,e)},p:t,i:t,o:t,d(t){t&&l(n)}}}class ke extends G{constructor(t){super(),H(this,t,null,Ce,u,{})}}function Te(e){let n,r,o,u;const a=new ke({});return{c(){n=d("div"),n.textContent="我的第一个组件~",r=h(),o=d("div"),M(a.$$.fragment),$(n,"class","svelte-1748vbf"),$(o,"class","svelte-1748vbf")},m(t,e){i(t,n,e),i(t,r,e),i(t,o,e),Q(a,o,null),u=!0},p:t,i(t){u||(W(a.$$.fragment,t),u=!0)},o(t){B(a.$$.fragment,t),u=!1},d(t){t&&l(n),t&&l(r),t&&l(o),D(a)}}}class Oe extends G{constructor(t){super(),H(this,t,null,Te,u,{})}}function Le(e){let n,r,o;const u=new $e({}),a=new Oe({});return{c(){M(u.$$.fragment),n=h(),r=d("div"),M(a.$$.fragment),$(r,"class","ex-a")},m(t,e){Q(u,t,e),i(t,n,e),i(t,r,e),Q(a,r,null),o=!0},p:t,i(t){o||(W(u.$$.fragment,t),W(a.$$.fragment,t),o=!0)},o(t){B(u.$$.fragment,t),B(a.$$.fragment,t),o=!1},d(t){D(u,t),t&&l(n),t&&l(r),D(a)}}}const Ee=window.location.host.indexOf("consolejs")>-1?"/sjs-demos/":"";console.log(1111,Ee);const ze=[{name:"/sjs-demos/",component:class extends G{constructor(t){super(),H(this,t,he,pe,u,{currentRoute:0})}}},{name:"404",path:"404",component:class extends G{constructor(t){super(),H(this,t,null,me,u,{})}}},{name:"/sjs-demos/book",component:class extends G{constructor(t){super(),H(this,t,Ae,je,u,{})}},layout:""},{name:"/sjs-demos/ex_a",component:class extends G{constructor(t){super(),H(this,t,null,Le,u,{})}},layout:""}];function Se(e){let n;const r=new de({props:{routes:ze}});return{c(){M(r.$$.fragment)},m(t,e){Q(r,t,e),n=!0},p:t,i(t){n||(W(r.$$.fragment,t),n=!0)},o(t){B(r.$$.fragment,t),n=!1},d(t){D(r,t)}}}return new class extends G{constructor(t){super(),H(this,t,null,Se,u,{})}}({target:document.getElementById("App"),props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
