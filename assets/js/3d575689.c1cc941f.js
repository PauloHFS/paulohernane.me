"use strict";(self.webpackChunkpaulohernane_me=self.webpackChunkpaulohernane_me||[]).push([[1382],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>g});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),p=a,g=m["".concat(s,".").concat(p)]||m[p]||f[p]||o;return r?t.createElement(g,i(i({ref:n},u),{},{components:r})):t.createElement(g,i({ref:n},u))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6629:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=r(7462),a=(r(7294),r(3905));const o={id:"classical-synchronization-problems",title:"Classical Synchronization Problems",tags:["Concurrent Programming","Synchronization Patterns"]},i="Classical Synchronization Problems",l={unversionedId:"concurrent-programming/classical-synchronization-problems",id:"concurrent-programming/classical-synchronization-problems",title:"Classical Synchronization Problems",description:"Producer-Consumer Problem",source:"@site/my-brain/concurrent-programming/classical-synchronization-problems.md",sourceDirName:"concurrent-programming",slug:"/concurrent-programming/classical-synchronization-problems",permalink:"/my-brain/concurrent-programming/classical-synchronization-problems",draft:!1,tags:[{label:"Concurrent Programming",permalink:"/my-brain/tags/concurrent-programming"},{label:"Synchronization Patterns",permalink:"/my-brain/tags/synchronization-patterns"}],version:"current",frontMatter:{id:"classical-synchronization-problems",title:"Classical Synchronization Problems",tags:["Concurrent Programming","Synchronization Patterns"]},sidebar:"myBrainSidebar",previous:{title:"Basic Synchronization Patterns",permalink:"/my-brain/concurrent-programming/basic-synchronization-patterns"},next:{title:"Concurrency vs Parallelism",permalink:"/my-brain/concurrent-programming/concurrency-vs-parallelism"}},s={},c=[{value:"Producer-Consumer Problem",id:"producer-consumer-problem",level:2},{value:"Solving using Semaphores",id:"solving-using-semaphores",level:3},{value:"Solving using Conditional Variable",id:"solving-using-conditional-variable",level:2}],u={toc:c},m="wrapper";function f(e){let{components:n,...r}=e;return(0,a.kt)(m,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"classical-synchronization-problems"},"Classical Synchronization Problems"),(0,a.kt)("h2",{id:"producer-consumer-problem"},"Producer-Consumer Problem"),(0,a.kt)("h3",{id:"solving-using-semaphores"},"Solving using Semaphores"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"# main\nMAX_SIZE = 2 # buffer size\n\nclass Buffer:\n    def __init__(self, size):\n        self.buffer = [None for _ in range(size)]\n        self.size = size\n        self.fill = 0\n        self.use = 0\n        self.mutex = Semaphore(1)\n        # TEST if using 1 or 2 semaphores is better\n\n    def put(v):\n        self.mutex.wait()\n        self.buffer[self.fill] = v\n        self.fill = (self.fill + 1) % self.size\n        self.mutex.signal()\n\n    def get():\n        self.mutex.wait()\n        v = self.buffer[self.use]\n        self.use = (self.use + 1) % self.size\n        self.mutex.signal()\n        return v\n\nbuffer = Buffer(MAX_SIZE)\nproducerDone = Semaphore(0)\nconsumerDone = Semaphore(MAX_SIZE)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"# Thread A\n\ndef producer():\n    for i in range(0, 100):\n        consumerDone.wait()\n        buffer.put(i)\n        producerDone.signal()\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"# Thread B\n\ndef consumer():\n    for i in range(0, 100):\n        producerDone.wait()\n        v = buffer.get()\n        print(v)\n")),(0,a.kt)("h2",{id:"solving-using-conditional-variable"},"Solving using Conditional Variable"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"// main\n\nint *buffer;\nmutex_t buffer_mutex;\ncond_t fill;\ncond_t empty\n\nsem_init(&buffer_mutex, 1);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"// Producer\n\nfor (int i; i < 100; i++) {\n    mutex_lock(&buffer_mutex) \n    while (buffer_is_full(&buffer) {\n        cond_wait(&empty, &buffer_mutex) \n    }\n    put(&buffer, i) \n    cond_signal(&fill)  \n    mutex_unlock(&buffer_mutex) \n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"// Consumer\n\nfor (int i; i < 100; i++) {\n    mutex_lock(&buffer_mutex) \n    while (buffer_is_empty(&buffer) {\n        cond_wait(&fill, &buffer_mutex) \n    }\n    take(&buffer)\n    cond_signal(&empty)\n    mutex_unlock(&buffer_mutex)\n}\n")))}f.isMDXComponent=!0}}]);