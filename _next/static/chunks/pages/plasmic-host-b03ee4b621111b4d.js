(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[258],{488:function(){if("undefined"!==typeof window){if(window.parent!==window)try{window.__REACT_DEVTOOLS_GLOBAL_HOOK__=window.parent.__REACT_DEVTOOLS_GLOBAL_HOOK__}catch(t){}if(!window.__REACT_DEVTOOLS_GLOBAL_HOOK__){var e=new Map;window.__REACT_DEVTOOLS_GLOBAL_HOOK__={supportsFiber:!0,renderers:e,inject:function(t){e.set(e.size+1,t)},onCommitFiberRoot:function(){},onCommitFiberUnmount:function(){}}}window.__REACT_DEVTOOLS_GLOBAL_HOOK__.__PlasmicPreambleVersion||(window.__REACT_DEVTOOLS_GLOBAL_HOOK__.__PlasmicPreambleVersion="1")}},5365:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plasmic-host",function(){return n(7392)}])},7392:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return A}});var r=n(5893),o=n(7294),i=n.t(o,2),a=n(4298),l=(n(488),n(3935)),u=n.t(l,2);function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=globalThis;s.__PlasmicFetcherRegistry=[];var _=globalThis;null==_.__PlasmicComponentRegistry&&(_.__PlasmicComponentRegistry=[]);var p,f,d=globalThis;function m(e,t){return h(e,t)}null==d.__PlasmicContextRegistry&&(d.__PlasmicContextRegistry=[]);var h=function(e,t){return e?t:Array.isArray(t)?t.map((function(t){return m(e,t)})):t&&(0,o.isValidElement)(t)&&"string"!==typeof t?(0,o.cloneElement)(t):t},w=globalThis,E=null!=(p=null==w||null==(f=w.__Sub)?void 0:f.setRepeatedElementFn)?p:function(e){h=e};var b=globalThis;null==b.__PlasmicHostVersion&&(b.__PlasmicHostVersion="2");var v=[],O=new function(e){var t=this;this.value=e,this.set=function(e){t.value=e,v.forEach((function(e){return e()}))},this.get=function(){return t.value}}(null);function g(){return function(e,t){if(void 0===t&&(t=""),null===e||void 0===e)throw t=(function(e){return"string"===typeof e}(t)?t:t())||"",new Error("Value must not be undefined or null"+(t?"- "+t:""));return e}(new URL("https://fakeurl/"+location.hash.replace(/#/,"?")).searchParams.get("origin"),"Missing information from Plasmic window.")}var y=0;var R=(0,o.createContext)(!1);function C(){var e,t,n=!!window.parent,r=!(null==(e=location.hash)||!e.match(/\bcanvas=true\b/)),i=!(null==(t=location.hash)||!t.match(/\blive=true\b/))||!n,a=n&&!document.querySelector("#plasmic-studio-tag")&&!r&&!i,u=function(){var e=(0,o.useState)(0)[1];return(0,o.useCallback)((function(){e((function(e){return e+1}))}),[])}();if((0,o.useLayoutEffect)((function(){return v.push(u),function(){var e=v.indexOf(u);e>=0&&v.splice(e,1)}}),[u]),(0,o.useEffect)((function(){a&&n&&window.parent!==window&&function(){var e=document.createElement("script"),t=g();e.src=t+"/static/js/studio.js",document.body.appendChild(e)}()}),[a,n]),(0,o.useEffect)((function(){if(!a&&!document.querySelector("#getlibs")&&i){var e=document.createElement("script");e.id="getlibs",e.src=g()+"/static/js/getlibs.js",e.async=!1,e.onload=function(){null==window.__GetlibsReadyResolver||window.__GetlibsReadyResolver()},document.head.append(e)}}),[a]),!n)return null;if(r||i){var c=document.querySelector("#plasmic-app.__wab_user-body");return c||((c=document.createElement("div")).id="plasmic-app",c.classList.add("__wab_user-body"),document.body.appendChild(c)),(0,l.createPortal)((0,o.createElement)(T,{key:""+y},(0,o.createElement)(R.Provider,{value:r},O.get())),c,"plasmic-app")}return a&&window.parent===window?(0,o.createElement)("p",null,"Your app is ready to host Plasmic Studio! ",(0,o.createElement)("br",null)," ",(0,o.createElement)("br",null),"On the ",(0,o.createElement)("a",{href:"https://studio.plasmic.app/"},"Dashboard"),", click on the"," ",(0,o.createElement)("i",null,"Config")," button, and set"," ",(0,o.createElement)("code",null,location.origin+location.pathname)," as the host URL.",(0,o.createElement)("br",null),(0,o.createElement)("br",null),"You can find more information about app-hosting"," ",(0,o.createElement)("a",{href:"https://www.plasmic.app/learn/app-hosting/"},"here"),"."):null}var L=function(e){var t=e.enableWebpackHmr,n=(0,o.useState)(null),r=n[0],i=n[1];return(0,o.useEffect)((function(){i((0,o.createElement)(C,null))}),[]),(0,o.createElement)(o.Fragment,null,!t&&(0,o.createElement)(S,null),r)};null==b.__Sub&&(console.log("Plasmic: Setting up app host dependencies"),b.__Sub={React:i,ReactDOM:u,setPlasmicRootNode:function(e){y++,O.set(e)},registerRenderErrorListener:function(e){return P.push(e),function(){var t=P.indexOf(e);t>=0&&P.splice(t,1)}},repeatedElement:m,setRepeatedElementFn:E,PlasmicCanvasContext:R});var P=[];var T=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).state={},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,c(t,n),r.getDerivedStateFromError=function(e){return{error:e}};var i=r.prototype;return i.componentDidCatch=function(e){P.forEach((function(t){return t(e)}))},i.render=function(){return this.state.error?(0,o.createElement)("div",null,"Error: ",""+this.state.error.message):this.props.children},r}(o.Component);function S(){return null}function A(){return(0,r.jsxs)("div",{children:[(0,r.jsx)(a.default,{src:"https://static1.plasmic.app/preamble.js",strategy:"beforeInteractive"}),(0,r.jsx)(L,{})]})}},4298:function(e,t,n){e.exports=n(699)}},function(e){e.O(0,[774,888,179],(function(){return t=5365,e(e.s=t);var t}));var t=e.O();_N_E=t}]);