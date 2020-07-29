(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),a=(n(0),n(155));const i={id:"overview",title:"Overview",sidebar_label:"Overview"},o={id:"version-6.x/overview",isDocsHomePage:!0,title:"Overview",description:"RNSInfo is an open-source library developed by many contributors since 2016. \u2764\ufe0f",source:"@site/versioned_docs/version-6.x/overview.md",permalink:"/react-native-sensitive-info/docs/",editUrl:"https://github.com/mCodex/react-native-sensitive-info/tree/master/website/versioned_docs/version-6.x/overview.md",version:"6.x",lastUpdatedBy:"Mateus Andrade",lastUpdatedAt:1596030525,sidebar_label:"Overview",sidebar:"version-6.x/someSidebar",next:{title:"How it works",permalink:"/react-native-sensitive-info/docs/how_it_works"}},c=[{value:"v6.x",id:"v6x",children:[{value:"BREAKING CHANGES:",id:"breaking-changes",children:[]},{value:"More changes",id:"more-changes",children:[]}]},{value:"Demo",id:"demo",children:[]}],s={rightToc:c};function l({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"RNSInfo is an open-source library developed by many contributors since 2016. \u2764\ufe0f"),Object(a.b)("p",null,"Securing sensitive data is very important in production-ready applications. So, this is why RNSInfo was created for, to help you focus in what matters most, your application. \ud83d\ude09"),Object(a.b)("p",null,"Handling sensitive data couldn't be easier in React-Native apps. "),Object(a.b)("h2",{id:"v6x"},"v6.x"),Object(a.b)("p",null,"Below you can find the new incoming features from v6.x"),Object(a.b)("h3",{id:"breaking-changes"},"BREAKING CHANGES:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"This version uses by default ",Object(a.b)("strong",{parentName:"p"},"keystore to encrypt/decrypt data")," on Android. So, if you use the ",Object(a.b)("strong",{parentName:"p"},"master branch")," or ",Object(a.b)("strong",{parentName:"p"},"v5.x")," in your project you may not be able to retrieve previous saved data. We still need more work to handle this. The discussion can be found ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mCodex/react-native-sensitive-info/issues/196"}),"here"),". On the other hand, if you already use keystore branch you can give it a try.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"The method ",Object(a.b)("inlineCode",{parentName:"p"},"isHardwareDetected")," was removed due to ",Object(a.b)("inlineCode",{parentName:"p"},"isSensorAvailable")))),Object(a.b)("h3",{id:"more-changes"},"More changes"),Object(a.b)("ul",{className:"contains-task-list"},Object(a.b)("li",Object(r.a)({parentName:"ul"},{className:"task-list-item"}),Object(a.b)("input",Object(r.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Finally added keystore to encrypt/decrypt data before saving/retrieving in sharedPreferences \ud83c\udf89"),Object(a.b)("li",Object(r.a)({parentName:"ul"},{className:"task-list-item"}),Object(a.b)("input",Object(r.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Migrating JS code to TS"),Object(a.b)("li",Object(r.a)({parentName:"ul"},{className:"task-list-item"}),Object(a.b)("input",Object(r.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Added Android's  Biometric Prompt for supported devices"),Object(a.b)("li",Object(r.a)({parentName:"ul"},{className:"task-list-item"}),Object(a.b)("input",Object(r.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ",Object(a.b)("strong",{parentName:"li"},"If you were using keystore's branch:")," Added many bug fixes and improvements which were available only in master's branch")),Object(a.b)("h2",{id:"demo"},"Demo"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import SInfo from 'react-native-sensitive-info';\n\nconst savingFirstData = await SInfo.setItem('key1', 'value1', {\n    sharedPreferencesName: 'mySharedPrefs',\n    keychainService: 'myKeychain'\n});\n\nconsole.log(savingFirstData) //value1\n\n// Need to retrieve later?\n\nconst gettingFirstData = await SInfo.getItem('key1', {\n    sharedPreferencesName: 'mySharedPrefs',\n    keychainService: 'myKeychain'\n});\n\nconsole.log(gettingFirstData) //value1\n\n//Need to get all values stored?\n\nconst gettingAllKeys = await SInfo.getAllItems({\n    sharedPreferencesName: 'mySharedPrefs',\n    keychainService: 'myKeychain'}\n);\n\nconsole.log(gettingAllKeys) //value1\n\n")))}l.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=b(n),u=r,m=d["".concat(o,".").concat(u)]||d[u]||p[u]||i;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);