"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[9108],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,v=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(v,i(i({ref:t},c),{},{components:r})):a.createElement(v,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5910:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(3117),n=(r(7294),r(3905));const o={id:"talawa-developer-environment",title:"Developer Environment"},i=void 0,l={unversionedId:"talawa/talawa-developer-environment",id:"talawa/talawa-developer-environment",title:"Developer Environment",description:"We have a test API server for software developers contributing to the talawa projects.",source:"@site/docs/talawa/developer-environment.md",sourceDirName:"talawa",slug:"/talawa/talawa-developer-environment",permalink:"/docs/talawa/talawa-developer-environment",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/master/docs/talawa/developer-environment.md",tags:[],version:"current",frontMatter:{id:"talawa-developer-environment",title:"Developer Environment"},sidebar:"someSidebar",previous:{title:"Overview",permalink:"/docs/talawa/talawa-introduction"},next:{title:"Overview",permalink:"/docs/talawa-api/api-overview"}},p={},s=[],c={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We have a test API server for software developers contributing to the talawa projects."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"This is a good server to use to test your code prior to submitting a pull request"),(0,n.kt)("li",{parentName:"ol"},"The server runs the latest ",(0,n.kt)("inlineCode",{parentName:"li"},"master branch")," version of the ",(0,n.kt)("inlineCode",{parentName:"li"},"talawa-api")," code base",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Use this URL in the Talawa App: ",(0,n.kt)("a",{parentName:"li",href:"https://talawa-graphql-api.herokuapp.com/graphql"},"https://talawa-graphql-api.herokuapp.com/graphql")))),(0,n.kt)("li",{parentName:"ol"},"This is a development environment. The data stored on this server may be modified or deleted without warning.")))}u.isMDXComponent=!0}}]);