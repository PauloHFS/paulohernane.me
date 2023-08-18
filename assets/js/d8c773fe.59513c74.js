"use strict";(self.webpackChunkpaulohernane_me=self.webpackChunkpaulohernane_me||[]).push([[1250],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(o),y=a,f=u["".concat(s,".").concat(y)]||u[y]||d[y]||n;return o?r.createElement(f,i(i({ref:t},c),{},{components:o})):r.createElement(f,i({ref:t},c))}));function f(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<n;p++)i[p]=o[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}y.displayName="MDXCreateElement"},8594:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var r=o(7462),a=(o(7294),o(3905));const n={slug:"day-4-100-days-of-code",title:"Day 4 of 100 Days of Code",authors:"paulohfs",tags:["100DaysOfCode","Typescript","NodeJS","ESLint","Prettier","zod","English"]},i=void 0,l={permalink:"/blog/day-4-100-days-of-code",source:"@site/blog/2023-08-17-day-4-100-days-of-code.md",title:"Day 4 of 100 Days of Code",description:"Today I was very busy with work and college, but I managed to study, so I see this topics today:",date:"2023-08-17T00:00:00.000Z",formattedDate:"August 17, 2023",tags:[{label:"100DaysOfCode",permalink:"/blog/tags/100-days-of-code"},{label:"Typescript",permalink:"/blog/tags/typescript"},{label:"NodeJS",permalink:"/blog/tags/node-js"},{label:"ESLint",permalink:"/blog/tags/es-lint"},{label:"Prettier",permalink:"/blog/tags/prettier"},{label:"zod",permalink:"/blog/tags/zod"},{label:"English",permalink:"/blog/tags/english"}],readingTime:.705,hasTruncateMarker:!1,authors:[{name:"Paulo Hernane Fontes e Silva",title:"Entry-Level Software Engineer",url:"https://github.com/paulohfs",imageURL:"https://github.com/paulohfs.png",key:"paulohfs"}],frontMatter:{slug:"day-4-100-days-of-code",title:"Day 4 of 100 Days of Code",authors:"paulohfs",tags:["100DaysOfCode","Typescript","NodeJS","ESLint","Prettier","zod","English"]},nextItem:{title:"Day 3 of 100 Days of Code",permalink:"/blog/day-3-100-days-of-code"}},s={authorsImageUrls:[void 0]},p=[],c={toc:p},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Today I was very busy with work and college, but I managed to study, so I see this topics today:"),(0,a.kt)("p",null,"I do this in a old work project, I rework the configuration because was old and broken, so I can't share the code, but I will try to do a post about this topics soon."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/community/tutorials/typescript-new-project"},"How to configure Typescript")," with ",(0,a.kt)("a",{parentName:"li",href:"https://blog.logrocket.com/configuring-nodemon-with-typescript/"},"nodemon")," and ts-node to run a NodeJS project on development mode. I hade some problems with the ESM, that make me see more about use ",(0,a.kt)("inlineCode",{parentName:"li"},"nodenext")," in the tscompiler configuration."),(0,a.kt)("li",{parentName:"ul"},"How to configure ESLint and Prettier to work with Typescript."),(0,a.kt)("li",{parentName:"ul"},"How to configure the build in this configuration. aka ",(0,a.kt)("inlineCode",{parentName:"li"},"tsc --build")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"tsc --watch"),"."),(0,a.kt)("li",{parentName:"ul"},"How to use zod to validate data in Typescript. I used this library to ",(0,a.kt)("a",{parentName:"li",href:"https://sergiodxa.com/articles/using-zod-to-safely-read-env-variables"},"parse the .env file")," and validate the environment variables.")))}d.isMDXComponent=!0}}]);