var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function u(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function c(t,e,n,r){return t[1]&&r?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](r(e))):n.ctx}function i(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function f(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function p(){return h(" ")}function m(){return h("")}function g(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t){return""===t?void 0:+t}function R(t,e){e=""+e,t.data!==e&&(t.data=e)}function y(t,e){(null!=e||t.value)&&(t.value=e)}function b(t,e,n){t.classList[n?"add":"remove"](e)}let P;function w(t){P=t}function x(t){(function(){if(!P)throw new Error("Function called outside component initialization");return P})().$$.on_mount.push(t)}const N=[],_=[],A=[],k=[],C=Promise.resolve();let T=!1;function j(t){A.push(t)}let O=!1;const L=new Set;function E(){if(!O){O=!0;do{for(let t=0;t<N.length;t+=1){const e=N[t];w(e),z(e.$$)}for(N.length=0;_.length;)_.pop()();for(let t=0;t<A.length;t+=1){const e=A[t];L.has(e)||(L.add(e),e())}A.length=0}while(N.length);for(;k.length;)k.pop()();T=!1,O=!1,L.clear()}}function z(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}const q=new Set;let S;function I(){S={r:0,c:[],p:S}}function U(){S.r||r(S.c),S=S.p}function W(t,e){t&&t.i&&(q.delete(t),t.i(e))}function B(t,e,n,r){if(t&&t.o){if(q.has(t))return;q.add(t),S.c.push(()=>{q.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function Q(t){t&&t.c()}function D(t,n,u){const{fragment:a,on_mount:c,on_destroy:i,after_update:s}=t.$$;a&&a.m(n,u),j(()=>{const n=c.map(e).filter(o);i?i.push(...n):r(n),t.$$.on_mount=[]}),s.forEach(j)}function F(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function M(t,e){-1===t.$$.dirty[0]&&(N.push(t),T||(T=!0,C.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function G(e,o,u,a,c,i,s=[-1]){const f=P;w(e);const d=o.props||{},h=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:s};let p=!1;if(h.ctx=u?u(e,d,(t,n,...r)=>{const o=r.length?r[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=o)&&(h.bound[t]&&h.bound[t](o),p&&M(e,t)),n}):[],h.update(),p=!0,r(h.before_update),h.fragment=!!a&&a(h.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);h.fragment&&h.fragment.l(t),t.forEach(l)}else h.fragment&&h.fragment.c();o.intro&&W(e.$$.fragment),D(e,o.target,o.anchor),E()}w(f)}class K{$destroy(){F(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const V=[];function H(t,e){return{subscribe:J(t,e).subscribe}}function J(e,n=t){let r;const o=[];function a(t){if(u(e,t)&&(e=t,r)){const t=!V.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),V.push(n,e)}if(t){for(let t=0;t<V.length;t+=2)V[t][0](V[t+1]);V.length=0}}}return{set:a,update:function(t){a(t(e))},subscribe:function(u,c=t){const i=[u,c];return o.push(i),1===o.length&&(r=n(a)||t),u(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}function X(t){return t&&t.default||t}const Y=(0,X(Object.freeze({__proto__:null,derived:function(e,n,u){const c=!Array.isArray(e),i=c?[e]:e,s=n.length<2;return H(u,e=>{let u=!1;const l=[];let f=0,d=t;const h=()=>{if(f)return;d();const r=n(c?l[0]:l,e);s?e(r):d=o(r)?r:t},p=i.map((t,e)=>a(t,t=>{l[e]=t,f&=~(1<<e),u&&h()},()=>{f|=1<<e}));return u=!0,h(),function(){r(p),d()}})},readable:H,writable:J,get:function(t){let e;return a(t,t=>e=t)(),e}})).writable)({});var Z={activeRoute:{subscribe:Y.subscribe,set:function(t){Y.set(t)},remove:function(){Y.set({})}}},tt=Z.activeRoute;var et={UrlParser:(t,e="")=>{const n=new URL(t);function r(){return u(e).reduce((t,e,n)=>(":"===e[0]&&t.push({value:e.slice(1),index:n}),t),[])}function o(){return u(n.pathname)}function u(t){return"/"===t||0===t.trim().length?[t]:("/"===t.slice(-1)&&(t=t.slice(0,-1)),"/"===t[0]&&(t=t.slice(1)),t.split("/"))}return Object.freeze({host:n.host,hostname:n.hostname,namedParams:function(){const t=o();return r().reduce((e,n)=>(e[n.value]=t[n.index],e),{})}(),namedParamsKeys:r().reduce((t,e)=>(t.push(e.value),t),[]),namedParamsValues:function(){const t=o();return r().reduce((e,n)=>(e.push(t[n.index]),e),[])}(),pathNames:o(),port:n.port,pathname:n.pathname,protocol:n.protocol,search:n.search,queryParams:function(){const t={};return n.searchParams.forEach((e,n)=>{t[n]=e}),t}(),queryParamsKeys:function(){const t=[];return n.searchParams.forEach((e,n)=>{t.push(n)}),t}(),queryParamsValues:function(){const t=[];return n.searchParams.forEach(e=>{t.push(e)}),t}()})}};function nt(t,e){return(e=ut(e)).includes(":")?e.includes(t):e.startsWith(t)}function rt(t,e,n){let r=!1;if(n)return{exists:e.lang&&e.lang[n]&&e.lang[n].includes(t),language:n};if(r=nt(t,e.name),!r&&e.lang&&"object"==typeof e.lang)for(const[o,u]of Object.entries(e.lang))nt(t,u)&&(r=!0,n=o);return{exists:r,language:n}}function ot(t){return"/"===t||0===t.trim().length?[t]:(t=ut(t,"both")).split("/")}function ut(t,e="lead"){return t.trim().length<1?"":("trail"!==e&&"both"!==e||"/"===t.slice(-1)&&(t=t.slice(0,-1)),"lead"!==e&&"both"!==e||"/"===t[0]&&(t=t.slice(1)),t)}function at(t,e=null){return e&&t.lang&&t.lang[e]?t.lang[e]:t.name}var ct={anyEmptyNestedRoutes:function t(e){let n=!1;return 0===Object.keys(e).length||(e.childRoute&&0===Object.keys(e.childRoute).length?n=!0:e.childRoute&&(n=t(e.childRoute)),n)},compareRoutes:nt,findLocalisedRoute:rt,getNamedParams:function(t=""){return 0===t.trim().length?[]:ot(t).reduce((t,e)=>(":"===e[0]&&t.push(e.slice(1)),t),[])},getPathNames:ot,nameToPath:function(t=""){let e;return"/"===t||0===t.trim().length?t:(e=(t=ut(t,"lead")).split(":")[0],e=ut(e,"trail"),e.toLowerCase())},pathWithQueryParams:function(t){let e=[];if(t.queryParams)for(let[n,r]of Object.entries(t.queryParams))e.push(`${n}=${r}`);return e.length>0?`${t.path}?${e.join("&")}`:t.path},pathWithoutQueryParams:function(t){return t.path.split("?")[0]},removeExtraPaths:function(t,e){const n=e.split("/");return n.length>1&&n.forEach((function(e,n){e.length>0&&n>0&&t.shift()})),t},removeSlash:ut,routeNameLocalised:at,updateRoutePath:function(t,e,n,r,o=!1){if("/"===t||0===t.trim().length)return{result:t,language:null};let u=t,a=n.name,c=r;if(o&&(c=""),a=ut(a),u=ut(u),n.childRoute)return{result:t,language:c};{let t=rt(u,n,c);t.exists&&o&&(u=at(n,r));let i=a.split(":")[0];return i=ut(i,"trail"),i=i.split("/"),i.shift(),i.forEach(()=>{const a=e[0];if(t=rt(`${u}/${a}`,n,c),!a||!t.exists)return{result:u,language:t.language};u=o?at(n,r):`${u}/${a}`,e.shift()}),{result:u,language:t.language}}}};const{UrlParser:it}=et,{pathWithQueryParams:st,removeSlash:lt}=ct;var ft={RouterCurrent:function(t){const e=t||!1;let n="";return Object.freeze({active:function(){return n},isActive:function(t,e=!1){"/"!==t[0]&&(t="/"+t);let r=it("http://fake.com"+t).pathname,o=it("http://fake.com"+n).pathname;return r=lt(r,"trail"),o=lt(o,"trail"),e?o.includes(r):o===r},setActive:function(t){n=t.path,function(t){if("undefined"!=typeof window){const r=st(t);window.history.pushState({page:r},"",r),e&&(n=r,"undefined"!=typeof ga&&(ga("set","page",n),ga("send","pageview")))}var n}(t)}})}};var dt={RouterGuard:function(t){const e=t;return Object.freeze({valid:function(){return e&&e.guard&&"function"==typeof e.guard},redirect:function(){return!e.guard()},redirectPath:function(){let t="/";return e.redirect&&e.redirect.length>0&&(t=e.redirect),t}})}};const{RouterGuard:ht}=dt;var pt={RouterRedirect:function(t,e){const n=ht(t.onlyIf);return Object.freeze({path:function(){let r=e;return t.redirectTo&&t.redirectTo.length>0&&(r=t.redirectTo),n.valid()&&n.redirect()&&(r=n.redirectPath()),r}})}};const{UrlParser:mt}=et;var gt={RouterRoute:function({routeInfo:t,path:e,routeNamedParams:n,urlParser:r,namedPath:o,language:u}){function a(){const t=mt("https://fake.com"+r.pathname,o).namedParams;return{...n,...t}}return Object.freeze({get:function(){return{name:e,component:t.component,layout:t.layout,queryParams:r.queryParams,namedParams:a(),path:e,language:u}},namedParams:a})}};const{updateRoutePath:$t,getNamedParams:vt,nameToPath:Rt,removeExtraPaths:yt,routeNameLocalised:bt}=ct;var Pt={RouterPath:function({basePath:t,basePathName:e,pathNames:n,convert:r,currentLanguage:o}){let u,a,c=o;function i(){return bt(a,c)}function s(){return Rt(i())}function l(){return Rt(u.result)}return Object.freeze({basePathSameAsLocalised:function(){return l()===s()},updatedPath:function(t){return a=t,u=$t(e,n,a,c,r),c=r?o:u.language,u},basePathNameWithoutNamedParams:l,localisedPathName:i,localisedRouteWithoutNamedParams:s,namedPath:function(){const e=i();return t?`${t}/${e}`:e},pathNames:n,routeLanguage:function(){return c},routePath:function(){let e=`${t}/${l()}`;"//"===e&&(e="/"),c&&(n=yt(n,s()));const r=vt(i());return r&&r.length>0&&r.forEach((function(){n.length>0&&(e+="/"+n.shift())})),e}})}};const{UrlParser:wt}=et,{RouterRedirect:xt}=pt,{RouterRoute:Nt}=gt,{RouterPath:_t}=Pt,{anyEmptyNestedRoutes:At,pathWithoutQueryParams:kt}=ct;var Ct={RouterFinder:function({routes:t,currentUrl:e,routerOptions:n,convert:r}){const o=n.defaultLanguage,u=wt(e);let a="",c={};return Object.freeze({findActiveRoute:function(){let e=function t(e,n,r,i,s){let l={},f=r.shift().toLowerCase();const d=_t({basePath:n,basePathName:f,pathNames:r,convert:s,currentLanguage:i});e.forEach((function(e){if(d.updatedPath(e),d.basePathSameAsLocalised()){let n=d.routePath();if(a=xt(e,a).path(),l.name!==n&&(l=function({route:t,routePath:e,routeLanguage:n,urlParser:r,namedPath:u}){const a=Nt({routeInfo:t,urlParser:r,path:e,routeNamedParams:c,namedPath:u,language:n||o});return c=a.namedParams(),a.get()}({route:e,routePath:n,routeLanguage:d.routeLanguage(),urlParser:u,namedPath:d.namedPath()})),e.nestedRoutes&&e.nestedRoutes.length>0&&d.pathNames.length>0)l.childRoute=t(e.nestedRoutes,n,d.pathNames,d.routeLanguage(),s),l.path=l.childRoute.path,l.language=l.childRoute.language;else if(function(t,e){return t.nestedRoutes&&t.nestedRoutes.length>0&&0===e.length}(e,d.pathNames)){const r=t(e.nestedRoutes,n,["index"],d.routeLanguage(),s);r&&Object.keys(r).length>0&&(l.childRoute=r,l.language=l.childRoute.language)}}})),a&&(l.redirectTo=a);return l}(t,"",u.pathNames,n.lang,r);return e&&Object.keys(e).length&&!At(e)?e.path=kt(e):"undefined"!=typeof window&&(e=function(e){const n=t.find(t=>"404"==t.name),r=e||o||"";return n?{...n,language:r,path:"404"}:{name:"404",component:"",path:"404",redirectTo:"/404.html"}}(n.lang)),e}})}};const{activeRoute:Tt}=Z,{RouterCurrent:jt}=ft,{RouterFinder:Ot}=Ct,{removeSlash:Lt}=ct;let Et,zt=[],qt={};function St(t,e,n={}){function r(){let n=!1;return qt.langConvertTo&&(qt.lang=qt.langConvertTo,n=!0),Ot({routes:t,currentUrl:e,routerOptions:qt,convert:n}).findActiveRoute()}return qt={...n},void 0!==e&&""!==e||(e=document.location.href),Et=jt(qt.gaPageviews),e=Lt(e,"trail"),zt=t,Object.freeze({setActiveRoute:function(){const t=r();return t.redirectTo?(e=t.redirectTo,"undefined"!=typeof window&&("/404.html"===e?Et.setActive({path:"/404.html"}):It(e)),e):(Et.setActive(t),Tt.set(t),t);var e},findActiveRoute:r})}function It(t,e=null){return t=Lt(t,"lead"),e&&(qt.langConvertTo=e),St(zt,"http://fake.com/"+t,qt).setActiveRoute()}"undefined"!=typeof window&&(window.addEventListener("click",t=>{t.target.pathname&&t.target.hostname===window.location.hostname&&"a"===t.target.localName&&(t.preventDefault(),It(t.target.pathname+t.target.search))}),window.onpopstate=function(t){It(window.location.pathname+window.location.search)});var Ut={SpaRouter:St,localisedRoute:function(t,e){return t=Lt(t,"lead"),qt.langConvertTo=e,St(zt,"http://fake.com/"+t,qt).findActiveRoute()},navigateTo:It,routeIsActive:function(t,e=!1){return Et.isActive(t,e)}},Wt=Ut.SpaRouter,Bt=Ut.localisedRoute,Qt=Ut.navigateTo,Dt=Ut.routeIsActive;function Ft(t){let e;const n=new Ht({props:{currentRoute:t[0].childRoute,params:t[1]}});return{c(){Q(n.$$.fragment)},m(t,r){D(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.currentRoute=t[0].childRoute),2&e&&(r.params=t[1]),n.$set(r)},i(t){e||(W(n.$$.fragment,t),e=!0)},o(t){B(n.$$.fragment,t),e=!1},d(t){F(n,t)}}}function Mt(t){let e,n;var r=t[0].component;function o(t){return{props:{currentRoute:{...t[0],component:""},params:t[1]}}}if(r)var u=new r(o(t));return{c(){u&&Q(u.$$.fragment),e=m()},m(t,r){u&&D(u,t,r),s(t,e,r),n=!0},p(t,n){const a={};if(1&n&&(a.currentRoute={...t[0],component:""}),2&n&&(a.params=t[1]),r!==(r=t[0].component)){if(u){I();const t=u;B(t.$$.fragment,1,0,()=>{F(t,1)}),U()}r?(Q((u=new r(o(t))).$$.fragment),W(u.$$.fragment,1),D(u,e.parentNode,e)):u=null}else r&&u.$set(a)},i(t){n||(u&&W(u.$$.fragment,t),n=!0)},o(t){u&&B(u.$$.fragment,t),n=!1},d(t){t&&l(e),u&&F(u,t)}}}function Gt(t){let e,n;var r=t[0].layout;function o(t){return{props:{currentRoute:{...t[0],layout:""},params:t[1]}}}if(r)var u=new r(o(t));return{c(){u&&Q(u.$$.fragment),e=m()},m(t,r){u&&D(u,t,r),s(t,e,r),n=!0},p(t,n){const a={};if(1&n&&(a.currentRoute={...t[0],layout:""}),2&n&&(a.params=t[1]),r!==(r=t[0].layout)){if(u){I();const t=u;B(t.$$.fragment,1,0,()=>{F(t,1)}),U()}r?(Q((u=new r(o(t))).$$.fragment),W(u.$$.fragment,1),D(u,e.parentNode,e)):u=null}else r&&u.$set(a)},i(t){n||(u&&W(u.$$.fragment,t),n=!0)},o(t){u&&B(u.$$.fragment,t),n=!1},d(t){t&&l(e),u&&F(u,t)}}}function Kt(t){let e,n,r,o;const u=[Gt,Mt,Ft],a=[];function c(t,e){return t[0].layout?0:t[0].component?1:t[0].childRoute?2:-1}return~(e=c(t))&&(n=a[e]=u[e](t)),{c(){n&&n.c(),r=m()},m(t,n){~e&&a[e].m(t,n),s(t,r,n),o=!0},p(t,[o]){let i=e;e=c(t),e===i?~e&&a[e].p(t,o):(n&&(I(),B(a[i],1,1,()=>{a[i]=null}),U()),~e?(n=a[e],n||(n=a[e]=u[e](t),n.c()),W(n,1),n.m(r.parentNode,r)):n=null)},i(t){o||(W(n),o=!0)},o(t){B(n),o=!1},d(t){~e&&a[e].d(t),t&&l(r)}}}function Vt(t,e,n){let{currentRoute:r={}}=e,{params:o={}}=e;return t.$set=t=>{"currentRoute"in t&&n(0,r=t.currentRoute),"params"in t&&n(1,o=t.params)},[r,o]}class Ht extends K{constructor(t){super(),G(this,t,Vt,Kt,u,{currentRoute:0,params:1})}}var Jt=Object.freeze({__proto__:null,default:Ht});function Xt(t){let e;const n=new Ht({props:{currentRoute:t[0]}});return{c(){Q(n.$$.fragment)},m(t,r){D(n,t,r),e=!0},p(t,[e]){const r={};1&e&&(r.currentRoute=t[0]),n.$set(r)},i(t){e||(W(n.$$.fragment,t),e=!0)},o(t){B(n.$$.fragment,t),e=!1},d(t){F(n,t)}}}function Yt(t,e,n){let r;!function(t,e,n){t.$$.on_destroy.push(a(e,n))}(t,tt,t=>n(0,r=t));let{routes:o=[]}=e,{options:u={}}=e;return x((function(){Wt(o,document.location.href,u).setActiveRoute()})),t.$set=t=>{"routes"in t&&n(1,o=t.routes),"options"in t&&n(2,u=t.options)},[r,o,u]}var Zt=Object.freeze({__proto__:null,default:class extends K{constructor(t){super(),G(this,t,Yt,Xt,u,{routes:1,options:2})}}});function te(t){let e,n,r;const o=t[6].default,u=function(t,e,n,r){if(t){const o=c(t,e,n,r);return t[0](o)}}(o,t,t[5],null);return{c(){e=d("a"),u&&u.c(),$(e,"href",t[0]),$(e,"title",t[1]),$(e,"class",t[2]),b(e,"active",Dt(t[0]))},m(o,a,c){s(o,e,a),u&&u.m(e,null),n=!0,c&&r(),r=g(e,"click",t[3])},p(t,[r]){u&&u.p&&32&r&&u.p(c(o,t,t[5],null),function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(o,t[5],r,null)),(!n||1&r)&&$(e,"href",t[0]),(!n||2&r)&&$(e,"title",t[1]),(!n||4&r)&&$(e,"class",t[2]),5&r&&b(e,"active",Dt(t[0]))},i(t){n||(W(u,t),n=!0)},o(t){B(u,t),n=!1},d(t){t&&l(e),u&&u.d(t),r()}}}function ee(t,e,n){let{to:r="/"}=e,{title:o=""}=e,{styles:u=""}=e,{lang:a=null}=e;x((function(){if(a){const t=Bt(r,a);t&&n(0,r=t.path)}}));let{$$slots:c={},$$scope:i}=e;return t.$set=t=>{"to"in t&&n(0,r=t.to),"title"in t&&n(1,o=t.title),"styles"in t&&n(2,u=t.styles),"lang"in t&&n(4,a=t.lang),"$$scope"in t&&n(5,i=t.$$scope)},[r,o,u,function(t){t.preventDefault(),t.stopPropagation(),Qt(r)},a,i,c]}var ne=Object.freeze({__proto__:null,default:class extends K{constructor(t){super(),G(this,t,ee,te,u,{to:0,title:1,styles:2,lang:4})}}}),re=X(Jt),oe=X(Zt),ue=X(ne);const{SpaRouter:ae,navigateTo:ce,localisedRoute:ie,routeIsActive:se}=Ut;var le={SpaRouter:ae,localisedRoute:ie,navigateTo:ce,routeIsActive:se,Route:re,Router:oe,Navigate:ue},fe=le.Route,de=le.Router;function he(t){let e,n,r,o,u,a;const c=new fe({props:{currentRoute:t[0]}});return{c(){e=d("h3"),e.textContent="Demo",n=p(),r=d("ul"),r.innerHTML='<li><a href="/book">bookstore</a></li>',o=p(),u=d("section"),Q(c.$$.fragment),$(u,"class","section")},m(t,i){s(t,e,i),s(t,n,i),s(t,r,i),s(t,o,i),s(t,u,i),D(c,u,null),a=!0},p(t,[e]){const n={};1&e&&(n.currentRoute=t[0]),c.$set(n)},i(t){a||(W(c.$$.fragment,t),a=!0)},o(t){B(c.$$.fragment,t),a=!1},d(t){t&&l(e),t&&l(n),t&&l(r),t&&l(o),t&&l(u),F(c)}}}function pe(t,e,n){let{currentRoute:r}=e;return t.$set=t=>{"currentRoute"in t&&n(0,r=t.currentRoute)},[r]}function me(e){let n,r,o,u,a,c,f,m,v,y,b,P,w;return{c(){n=d("div"),r=d("h1"),o=h(e[0]),u=p(),a=d("h2"),c=h("$"),f=h(e[1]),m=p(),v=d("p"),y=h(e[2]),b=p(),P=d("button"),P.textContent="添加到购物车",$(r,"class","svelte-evkwpy"),$(a,"class","svelte-evkwpy"),$(P,"class","svelte-evkwpy"),$(n,"class","card svelte-evkwpy")},m(t,l,d){s(t,n,l),i(n,r),i(r,o),i(n,u),i(n,a),i(a,c),i(a,f),i(n,m),i(n,v),i(v,y),i(n,b),i(n,P),d&&w(),w=g(P,"click",e[4])},p(t,[e]){1&e&&R(o,t[0]),2&e&&R(f,t[1]),4&e&&R(y,t[2])},i:t,o:t,d(t){t&&l(n),w()}}}function ge(t,e,n){let{title:r}=e,{price:o}=e,{description:u}=e,{handleAddToCart:a}=e;return t.$set=t=>{"title"in t&&n(0,r=t.title),"price"in t&&n(1,o=t.price),"description"in t&&n(2,u=t.description),"handleAddToCart"in t&&n(3,a=t.handleAddToCart)},[r,o,u,a,()=>a(r)]}class $e extends K{constructor(t){super(),G(this,t,ge,me,u,{title:0,price:1,description:2,handleAddToCart:3})}}function ve(t,e,n){const r=t.slice();return r[4]=e[n].title,r[5]=e[n].price,r[6]=e[n].description,r}function Re(t,e,n){const r=t.slice();return r[4]=e[n].title,r[5]=e[n].price,r}function ye(t){let e,n=t[1],r=[];for(let e=0;e<n.length;e+=1)r[e]=Pe(Re(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=m()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);s(t,e,n)},p(t,o){if(2&o){let u;for(n=t[1],u=0;u<n.length;u+=1){const a=Re(t,n,u);r[u]?r[u].p(a,o):(r[u]=Pe(a),r[u].c(),r[u].m(e.parentNode,e))}for(;u<r.length;u+=1)r[u].d(1);r.length=n.length}},d(t){f(r,t),t&&l(e)}}}function be(e){let n;return{c(){n=d("p"),n.textContent="购物车空的哦~"},m(t,e){s(t,n,e)},p:t,d(t){t&&l(n)}}}function Pe(t){let e,n,r,o,u,a=t[4]+"",c=t[5]+"";return{c(){e=d("div"),n=h("名称: "),r=h(a),o=h(", 价钱: "),u=h(c)},m(t,a){s(t,e,a),i(e,n),i(e,r),i(e,o),i(e,u)},p(t,e){2&e&&a!==(a=t[4]+"")&&R(r,a),2&e&&c!==(c=t[5]+"")&&R(u,c)},d(t){t&&l(e)}}}function we(t){let e;const n=new $e({props:{title:t[4],price:t[5],description:t[6],handleAddToCart:t[8]}});return{c(){Q(n.$$.fragment)},m(t,r){D(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.title=t[4]),1&e&&(r.price=t[5]),1&e&&(r.description=t[6]),n.$set(r)},i(t){e||(W(n.$$.fragment,t),e=!0)},o(t){B(n.$$.fragment,t),e=!1},d(t){F(n,t)}}}function xe(t){let e,n,o,u,a,c,m,b,P,w,x,N,_,A,k,C,T,j,O,L,E,z,q,S,Q,D,F,M,G,K,V,H,J,X,Y,Z,tt,et;function nt(t,e){return 0===t[1].length?be:ye}let rt=nt(t),ot=rt(t),ut=t[0],at=[];for(let e=0;e<ut.length;e+=1)at[e]=we(ve(t,ut,e));const ct=t=>B(at[t],1,1,()=>{at[t]=null});return{c(){e=d("div"),n=d("h1"),n.textContent="Bookstore",o=p(),u=d("section"),a=d("h2"),a.textContent="添加一本新书",c=p(),m=d("label"),m.textContent="标题:",b=p(),P=d("input"),w=p(),x=d("label"),x.textContent="价格:",N=p(),_=d("input"),A=p(),k=d("label"),k.textContent="图书描述:",C=p(),T=d("textarea"),j=p(),O=d("div"),L=d("button"),L.textContent="add book",E=p(),z=d("section"),q=d("h2"),q.textContent="购物车",S=p(),Q=d("div"),D=h("书本总数："),F=h(t[2]),M=p(),G=d("div"),K=h("订单金额："),V=h(t[3]),H=p(),ot.c(),J=p(),X=d("section"),Y=d("h2"),Y.textContent="书单",Z=p();for(let t=0;t<at.length;t+=1)at[t].c();$(n,"class","svelte-1tq8hz8"),$(m,"for","title"),$(P,"type","text"),$(P,"id","title"),$(P,"placeholder","请输入书名~"),$(x,"for","price"),$(_,"type","number"),$(_,"id","price"),$(k,"for","description"),$(T,"rows","3"),$(T,"id","description"),$(T,"placeholder","请输入图书描述~~"),$(u,"class","svelte-1tq8hz8"),$(z,"class","svelte-1tq8hz8"),$(X,"class","card-wrap svelte-1tq8hz8"),$(e,"class","bookstore svelte-1tq8hz8")},m(l,f,d){s(l,e,f),i(e,n),i(e,o),i(e,u),i(u,a),i(u,c),i(u,m),i(u,b),i(u,P),y(P,t[4]),i(u,w),i(u,x),i(u,N),i(u,_),y(_,t[5]),i(u,A),i(u,k),i(u,C),i(u,T),y(T,t[6]),i(u,j),i(u,O),i(O,L),i(e,E),i(e,z),i(z,q),i(z,S),i(z,Q),i(Q,D),i(Q,F),i(z,M),i(z,G),i(G,K),i(G,V),i(z,H),ot.m(z,null),i(e,J),i(e,X),i(X,Y),i(X,Z);for(let t=0;t<at.length;t+=1)at[t].m(X,null);tt=!0,d&&r(et),et=[g(P,"input",t[10]),g(_,"input",t[11]),g(T,"input",t[12]),g(L,"click",t[7])]},p(t,[e]){if(16&e&&P.value!==t[4]&&y(P,t[4]),32&e&&v(_.value)!==t[5]&&y(_,t[5]),64&e&&y(T,t[6]),(!tt||4&e)&&R(F,t[2]),(!tt||8&e)&&R(V,t[3]),rt===(rt=nt(t))&&ot?ot.p(t,e):(ot.d(1),ot=rt(t),ot&&(ot.c(),ot.m(z,null))),257&e){let n;for(ut=t[0],n=0;n<ut.length;n+=1){const r=ve(t,ut,n);at[n]?(at[n].p(r,e),W(at[n],1)):(at[n]=we(r),at[n].c(),W(at[n],1),at[n].m(X,null))}for(I(),n=ut.length;n<at.length;n+=1)ct(n);U()}},i(t){if(!tt){for(let t=0;t<ut.length;t+=1)W(at[t]);tt=!0}},o(t){at=at.filter(Boolean);for(let t=0;t<at.length;t+=1)B(at[t]);tt=!1},d(t){t&&l(e),ot.d(),f(at,t),r(et)}}}function Ne(t,e,n){let r="",o=10,u="",a=[],c=[];let i,s,l="";return t.$$.update=()=>{2&t.$$.dirty&&n(2,i=c.length),2&t.$$.dirty&&n(3,s=c.reduce((t,e)=>t+e.price,0))},[a,c,i,s,r,o,u,function(){0!=r.length&&(n(0,a=a.concat({title:r,price:o,description:u})),n(4,r=""),n(5,o=10),n(6,u=""))},function(t){let e=a.find(e=>e.title==t);t!==l&&(n(1,c=c.concat(e)),l=t)},l,function(){r=this.value,n(4,r)},function(){o=v(this.value),n(5,o)},function(){u=this.value,n(6,u)}]}const _e=[{name:"/",component:class extends K{constructor(t){super(),G(this,t,pe,he,u,{currentRoute:0})}}},{name:"book",component:class extends K{constructor(t){super(),G(this,t,Ne,xe,u,{})}},layout:""}];function Ae(e){let n;const r=new de({props:{routes:_e}});return{c(){Q(r.$$.fragment)},m(t,e){D(r,t,e),n=!0},p:t,i(t){n||(W(r.$$.fragment,t),n=!0)},o(t){B(r.$$.fragment,t),n=!1},d(t){F(r,t)}}}return new class extends K{constructor(t){super(),G(this,t,null,Ae,u,{})}}({target:document.getElementById("App"),props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
