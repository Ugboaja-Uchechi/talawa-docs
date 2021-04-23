(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{162:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),o=(a(0),a(175)),i={id:"data-management-storage",title:"Data Storage"},c={unversionedId:"features/data-management/data-management-storage",id:"features/data-management/data-management-storage",isDocsHomePage:!1,title:"Data Storage",description:"This section is a work in progress.",source:"@site/docs/features/data-management/data-storage.md",slug:"/features/data-management/data-management-storage",permalink:"/talawa-docs/docs/features/data-management/data-management-storage",editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/master/website/docs/features/data-management/data-storage.md",version:"current",sidebar:"someSidebar",previous:{title:"Data Retention",permalink:"/talawa-docs/docs/features/data-management/data-management-retention"},next:{title:"Database Distribution",permalink:"/talawa-docs/docs/features/data-management/data-management-distribution"}},s=[{value:"Code: DAT-003",id:"code-dat-003",children:[]},{value:"Overview",id:"overview",children:[]}],m={toc:s};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This section is a work in progress."))),Object(o.b)("h2",{id:"code-dat-003"},"Code: DAT-003"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Authored by",Object(o.b)("strong",{parentName:"em"}," ",Object(o.b)("strong",{parentName:"strong"},"Shannika Jackson")," "),". Last updated on")," ",Object(o.b)("em",{parentName:"p"}," ",Object(o.b)("strong",{parentName:"em"},"March 31,2021")," ")),Object(o.b)("p",null,"This feature aims to ",Object(o.b)("em",{parentName:"p"}," ",Object(o.b)("strong",{parentName:"em"},"enforce data storage strategy")," ")," by ",Object(o.b)("em",{parentName:"p"}," ",Object(o.b)("strong",{parentName:"em"}," detailing the requirements for the storage of data in  the database ")," "),"."),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"A separate database is to be created for each organisation that is created."))}d.isMDXComponent=!0},175:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return l}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=r.a.createContext({}),d=function(e){var t=r.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=d(a),b=n,l=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return a?r.a.createElement(l,c(c({ref:t},m),{},{components:a})):r.a.createElement(l,c({ref:t},m))}));function l(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var m=2;m<o;m++)i[m]=a[m];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);