"use strict";(self.webpackChunklarastats_docs=self.webpackChunklarastats_docs||[]).push([[217],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,y=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(y,i(i({ref:t},c),{},{components:a})):n.createElement(y,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9803:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={id:"installation",slug:"/installation",sidebar_position:2},i="Installation",s={unversionedId:"installation",id:"installation",title:"Installation",description:"Installation via Composer",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/larastats-docs/installation",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"installation",slug:"/installation",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/larastats-docs/"},next:{title:"Configuration",permalink:"/larastats-docs/configuration"}},l={},p=[{value:"Installation via Composer",id:"installation-via-composer",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("h2",{id:"installation-via-composer"},"Installation via Composer"),(0,r.kt)("p",null,"In order to install Larastats you must have Composer in your system."),(0,r.kt)("p",null,"In your application you need to add our repository in your ",(0,r.kt)("inlineCode",{parentName:"p"},"composer.json")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"repositories": [\n  {\n    "type": "composer",\n    "url": "https://satis.taecontrol.com"\n  }\n],\n')),(0,r.kt)("p",null,"Next, you must add ",(0,r.kt)("inlineCode",{parentName:"p"},"taecontrol/larastats")," package to the list of required packages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"require": {\n    "php": "^8.0",\n    "laravel/framework": "^9.0",\n    "taecontrol/larastats": "*"\n},\n')),(0,r.kt)("p",null,"Your ",(0,r.kt)("inlineCode",{parentName:"p"},"composer.json")," is ready to install Larastats, run ",(0,r.kt)("inlineCode",{parentName:"p"},"composer update")," command in your console terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"composer update\n")),(0,r.kt)("p",null,"It will prompt to provide your login credentials to Larastats site. We need this to authenticate your Composer session and permissions to download Larastats package source code. You can also create a Composer auth.json file (this will prevent you to type your credentials manually):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "http-basic": {\n    "satis.taecontrol.com": {\n      "username": "johndoe@example.com",\n      "password": "your-api-token"\n    }\n  }\n}\n')),(0,r.kt)("admonition",{title:"Composer tip",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can create your ",(0,r.kt)("inlineCode",{parentName:"p"},"auth.json")," file with Composer:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"composer config http-basic.satis.taecontrol.com johndoe@example.com your-api-token\n"))),(0,r.kt)("admonition",{title:"Take care",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"We don't advise to add this file to your project version control system.")),(0,r.kt)("br",null),(0,r.kt)("p",null,"At this point you should have two service providers registered in ",(0,r.kt)("inlineCode",{parentName:"p"},"config/app.php"),"  :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"  'providers' => [\n    // ...\n    Taecontrol\\Larastats\\Providers\\LarastatsServiceProvider::class,\n    Taecontrol\\Larastats\\Providers\\LarastatsFilamentServiceProvider::class,\n  ]\n")),(0,r.kt)("admonition",{title:"Composer tip",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you don't intend to use Filament, you should remove ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"LarastatsFilamentServiceProvider::class"))," from your app providers array.")),(0,r.kt)("p",null,"Finally, we're going to publish the migration and configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'php artisan vendor:publish --tag="larastats-migrations"\nphp artisan vendor:publish --tag="larastats-config"\n')),(0,r.kt)("p",null,"You will be able to find a migration file ",(0,r.kt)("inlineCode",{parentName:"p"},"create_larastats_table.php")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"database/migration")," directory and a config file ",(0,r.kt)("inlineCode",{parentName:"p"},"config/larastats.php"),". Run the following command to migrate larastats table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan migrate\n")))}u.isMDXComponent=!0}}]);