"use strict";(self.webpackChunklarastats_docs=self.webpackChunklarastats_docs||[]).push([[40],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),u=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||a;return r?o.createElement(f,s(s({ref:t},c),{},{components:r})):o.createElement(f,s({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var u=2;u<a;u++)s[u]=r[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2785:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=r(7462),n=(r(7294),r(3905));const a={id:"user-model",slug:"/user-model",sidebar_position:1},s="User model",l={unversionedId:"users/user-model",id:"users/user-model",title:"User model",description:"Larastats ships with a **standard-basic** user model, It's not mandatory to use our model, it's most likely that you use the user model of your project.",source:"@site/docs/users/user-model.md",sourceDirName:"users",slug:"/user-model",permalink:"/larastats-docs/user-model",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"user-model",slug:"/user-model",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Users",permalink:"/larastats-docs/category/users"}},i={},u=[{value:"Custom User Model",id:"custom-user-model",level:2}],c={toc:u};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"user-model"},"User model"),(0,n.kt)("p",null,"Larastats ships with a ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("strong",{parentName:"em"},"standard-basic"))," user model, It's not mandatory to use our model, it's most likely that you use the user model of your project."),(0,n.kt)("h2",{id:"custom-user-model"},"Custom User Model"),(0,n.kt)("p",null,"The following steps must be completed to use a custom User model:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Your ",(0,n.kt)("strong",{parentName:"li"},"User")," class must extends from ",(0,n.kt)("inlineCode",{parentName:"li"},"Illuminate\\Database\\Eloquent\\Model")," and implements the ",(0,n.kt)("inlineCode",{parentName:"li"},"Taecontrol\\Larastats\\Contracts\\LarastatsUser")," interface."),(0,n.kt)("li",{parentName:"ol"},"Your ",(0,n.kt)("strong",{parentName:"li"},"User")," class must declare ",(0,n.kt)("inlineCode",{parentName:"li"},"use Notifiable"),"."),(0,n.kt)("li",{parentName:"ol"},"Implement all the properties and methods required, you can guide yourself with the original ",(0,n.kt)("inlineCode",{parentName:"li"},"User.php")," model from Larastats."),(0,n.kt)("li",{parentName:"ol"},"Replace the new User model class in the configuration file.")))}m.isMDXComponent=!0}}]);