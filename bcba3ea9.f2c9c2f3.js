(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{136:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return a})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(2),i=(t(0),t(155));const o={id:"protectingWithFingerprint",title:"Fingerprint Protection",sidebar_label:"Fingerprint Protection"},a={id:"version-5.x/protectingWithFingerprint",isDocsHomePage:!1,title:"Fingerprint Protection",description:"You can easily protect stored data and unlocking it using fingerprint on Android, TouchID or FaceID on iOS. Before you proceed is important to check if user's device has any kind of sensors available.",source:"@site/versioned_docs/version-5.x/protectingWithFingerprint.md",permalink:"/react-native-sensitive-info/docs/5.x/protectingWithFingerprint",editUrl:"https://github.com/mCodex/react-native-sensitive-info/tree/master/website/versioned_docs/version-5.x/protectingWithFingerprint.md",version:"5.x",lastUpdatedBy:"Mateus Andrade",lastUpdatedAt:1596029033,sidebar_label:"Fingerprint Protection",sidebar:"version-5.x/someSidebar",previous:{title:"iOS",permalink:"/react-native-sensitive-info/docs/5.x/ios_options"},next:{title:"Community Libraries",permalink:"/react-native-sensitive-info/docs/5.x/community_libraries"},latestVersionMainDocPermalink:"/react-native-sensitive-info/docs"},s=[{value:"Prerequisites",id:"prerequisites",children:[{value:"Android",id:"android",children:[]},{value:"iOS",id:"ios",children:[]}]},{value:"Saving",id:"saving",children:[]},{value:"Getting",id:"getting",children:[]}],c={rightToc:s};function p({components:e,...n}){return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You can easily protect stored data and unlocking it using fingerprint on Android, TouchID or FaceID on iOS. Before you proceed is important to check if user's device has any kind of sensors available."),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("h3",{id:"android"},"Android"),Object(i.b)("p",null,"You need to add these permissions into your Android's manifest file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<uses-permission android:name="android.permission.USE_BIOMETRIC" />\n<uses-permission android:name="android.permission.USE_FINGERPRINT" />\n')),Object(i.b)("h3",{id:"ios"},"iOS"),Object(i.b)("p",null,"You need to add this permission into ",Object(i.b)("inlineCode",{parentName:"p"},"Info.plist"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<key>NSFaceIDUsageDescription</key>\n<string>ADD_WHY_YOU_NEED_FACEID_PERMISSION</string>\n")),Object(i.b)("h2",{id:"saving"},"Saving"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import SInfo from 'react-native-sensitive-info';\n\n// To check if any sensor is available on iOS/Android\nconst hasAnySensors = await SInfo.isSensorAvailable();\n\n// on Android you can check if has any fingersprints enrolled\nconst hasAnyFingerprintsEnrolled = await SInfo.hasEnrolledFingerprints();\n")),Object(i.b)("p",null,"After checking those infos, you need to pass a few options into setItem's method:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import SInfo from 'react-native-sensitive-info';\n\nconst savingFirstData = await SInfo.setItem('key1', 'value1', {\n    sharedPreferencesName: 'mySharedPrefs',\n    keychainService: 'myKeychain',\n    touchId: true, //add this key\n    kSecAccessControl: 'kSecAccessControlBiometryAny' // optional - Add support for FaceID\n});\n")),Object(i.b)("p",null,"Setting ",Object(i.b)("inlineCode",{parentName:"p"},"touchId: true")," will store and protect your data by requiring to unlock using fingerprint or FaceID"),Object(i.b)("h2",{id:"getting"},"Getting"),Object(i.b)("p",null,"To get protected data from user's device you just do:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import SInfo from 'react-native-sensitive-info';\n\nconst protectedData = await SInfo.getItem('key1', {\n    touchID: true,\n    showModal: true, //required (Android) - Will prompt user's fingerprint on Android\n    strings: { // optional (Android) - You can personalize your prompt\n        description: 'Custom Title ',\n        header: 'Custom Description',\n    },\n    kSecUseOperationPrompt: // required (iOS) -  A fallback string for iOS\n        'We need your permission to retrieve encrypted data',\n});\n")))}p.isMDXComponent=!0},155:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return f}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),d=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=d(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=d(t),b=r,f=l["".concat(a,".").concat(b)]||l[b]||u[b]||o;return t?i.a.createElement(f,s(s({ref:n},p),{},{components:t})):i.a.createElement(f,s({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=b;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<o;p++)a[p]=t[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);