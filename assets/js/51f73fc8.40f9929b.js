"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[1125],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2038:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(3117),n=(r(7294),r(3905));const o={id:"tagging-support",title:"Hashtag Support"},i=void 0,l={unversionedId:"features/news feed/tagging-support",id:"features/news feed/tagging-support",title:"Hashtag Support",description:"This section is a work in progress.",source:"@site/docs/features/news feed/tagging.md",sourceDirName:"features/news feed",slug:"/features/news feed/tagging-support",permalink:"/talawa-docs/docs/features/news feed/tagging-support",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/master/docs/features/news feed/tagging.md",tags:[],version:"current",frontMatter:{id:"tagging-support",title:"Hashtag Support"},sidebar:"someSidebar",previous:{title:"Overview",permalink:"/talawa-docs/docs/features/news feed/news-feed-overview"},next:{title:"Pinned Posts",permalink:"/talawa-docs/docs/features/news feed/pinned-posts"}},s={},p=[{value:"Code: TAG",id:"code-tag",level:2},{value:"Overview",id:"overview",level:2},{value:"Problem",id:"problem",level:3},{value:"Goals",id:"goals",level:3},{value:"Out of Scope",id:"out-of-scope",level:3},{value:"People and Roles",id:"people-and-roles",level:3},{value:"Context",id:"context",level:2},{value:"Use Cases",id:"use-cases",level:3},{value:"Proposal/Solution",id:"proposalsolution",level:2},{value:"User Experience",id:"user-experience",level:3},{value:"Important Details To Capture",id:"important-details-to-capture",level:3},{value:"Future Work",id:"future-work",level:3},{value:"Tasks and Timeline",id:"tasks-and-timeline",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This section is a work in progress.")),(0,n.kt)("h2",{id:"code-tag"},"Code: TAG"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Authored by")," ",(0,n.kt)("em",{parentName:"p"}," ",(0,n.kt)("strong",{parentName:"em"},"Xavier Bryson")," ")," ",(0,n.kt)("em",{parentName:"p"},". Last updated on")," ",(0,n.kt)("em",{parentName:"p"}," ",(0,n.kt)("strong",{parentName:"em"},"14/03/21")," ")),(0,n.kt)("p",null,"This feature aims to ",(0,n.kt)("em",{parentName:"p"}," ",(0,n.kt)("strong",{parentName:"em"},"enable hashtag support")," ")," with ",(0,n.kt)("em",{parentName:"p"}," ",(0,n.kt)("strong",{parentName:"em"},"the")," ")," ",(0,n.kt)("strong",{parentName:"p"},"addition of hashtags to user posts"),"."),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("h3",{id:"problem"},"Problem"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Users of the application need a way to track/group posts :"),"\nSimilarly, users need a way of linking posts of a similar topic/grouping.")),(0,n.kt)("h3",{id:"goals"},"Goals"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Allow for the addition of tags to posts")," :\nAs popularized by social media, tagging of posts provides a familiar medium for tracking content.")),(0,n.kt)("h3",{id:"out-of-scope"},"Out of Scope"),(0,n.kt)("p",null,"N/A"),(0,n.kt)("h3",{id:"people-and-roles"},"People and Roles"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Xavier Bryson (Feature Lead)"),": clarify functionality and assumptions.")),(0,n.kt)("h2",{id:"context"},"Context"),(0,n.kt)("h3",{id:"use-cases"},"Use Cases"),(0,n.kt)("p",null,"N/A"),(0,n.kt)("h2",{id:"proposalsolution"},"Proposal/Solution"),(0,n.kt)("p",null,"N/A"),(0,n.kt)("h3",{id:"user-experience"},"User Experience"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Upon creation of a post, a user will have the option of specifying one or more hashtags.")),(0,n.kt)("h3",{id:"important-details-to-capture"},"Important Details To Capture"),(0,n.kt)("p",null,"N/A"),(0,n.kt)("h3",{id:"future-work"},"Future Work"),(0,n.kt)("p",null,"N/A"),(0,n.kt)("h2",{id:"tasks-and-timeline"},"Tasks and Timeline"),(0,n.kt)("p",null,"N/A"))}d.isMDXComponent=!0}}]);