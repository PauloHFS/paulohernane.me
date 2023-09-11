"use strict";(self.webpackChunkpaulohernane_me=self.webpackChunkpaulohernane_me||[]).push([[6809],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=s(t),g=o,f=u["".concat(l,".").concat(g)]||u[g]||p[g]||a;return t?n.createElement(f,i(i({ref:r},m),{},{components:t})):n.createElement(f,i({ref:r},m))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6353:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=t(7462),o=(t(7294),t(3905));const a={},i="Mutual Exclusion Algorithms",c={unversionedId:"concurrent-programming/some-algorithms",id:"concurrent-programming/some-algorithms",title:"Mutual Exclusion Algorithms",description:"This Algorithms has the objective to solve the problem of the critical region, where only one process can be at a time to prevent race condition, deadlocks and data inconsistences. This is called Mutual Exclusion.",source:"@site/my-brain/concurrent-programming/some-algorithms.md",sourceDirName:"concurrent-programming",slug:"/concurrent-programming/some-algorithms",permalink:"/my-brain/concurrent-programming/some-algorithms",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"myBrainSidebar",previous:{title:"Semaphore",permalink:"/my-brain/concurrent-programming/semaphore"},next:{title:"Data Science",permalink:"/my-brain/data-science/"}},l={},s=[],m={toc:s},u="wrapper";function p(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mutual-exclusion-algorithms"},"Mutual Exclusion Algorithms"),(0,o.kt)("p",null,"This Algorithms has the objective to solve the problem of the critical region, where only one process can be at a time to prevent race condition, deadlocks and data inconsistences. This is called ",(0,o.kt)("strong",{parentName:"p"},"Mutual Exclusion"),"."),(0,o.kt)("p",null,"Some algorithms are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Lock One"),(0,o.kt)("li",{parentName:"ul"},"Lock Two"),(0,o.kt)("li",{parentName:"ul"},"Peterson's Algorithm"),(0,o.kt)("li",{parentName:"ul"},"Bakery Algorithm"),(0,o.kt)("li",{parentName:"ul"},"TAS Lock")),(0,o.kt)("h1",{id:"bakery-algorithm"},"Bakery Algorithm"))}p.isMDXComponent=!0}}]);