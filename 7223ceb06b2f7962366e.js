(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([["1056"],{48174:function(e,t,n){"use strict";function r(e,t){if(e.length!==t.length)return!1;for(let n=0;n<t.length&&n<e.length;n++)if(!Object.is(e[n],t[n]))return!1;return!0}n.r(t),n.d(t,{default:function(){return r}})},775560:function(e,t,n){"use strict";n.r(t),n.d(t,{useForceUpdate:function(){return r.default},useStableMemo:function(){return a.default},useLazyValue:function(){return l.default}});var r=n("14716"),a=n("745510"),l=n("315378")},14716:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}}),n("222007");var r=n("884691");function a(){let[,e]=(0,r.useState)({});return(0,r.useCallback)(()=>e({}),[])}},315378:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n("884691");let a={};function l(e){let t=(0,r.useRef)(a);return t.current===a&&(t.current=e()),t.current}},745510:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n("884691"),a=n("48174");let l=[];function s(e,t){let n=(0,r.useRef)(),s=(0,r.useRef)(l);return s.current===l?(n.current=e(),s.current=t):!(0,a.default)(t,s.current)&&(n.current=e(),s.current=t),n.current}},819074:function(e,t,n){"use strict";e.exports=n.p+"a6ecd83d0dec80c3b73d.svg"},96154:function(e,t,n){"use strict";e.exports=n.p+"c6385e608fcdaec54ef4.svg"},976078:function(e,t,n){"use strict";e.exports=n.p+"b2bc10c8c9d44f0ff644.svg"},742203:function(e,t,n){"use strict";e.exports=n.p+"838d4bac7b80d28fd676.svg"},381e3:function(e,t,n){"use strict";e.exports=n.p+"8cd255a58ce1af51e9ef.svg"},637816:function(e,t,n){"use strict";e.exports=n.p+"a2c736476ce092c94a5b.svg"},637099:function(e,t,n){"use strict";e.exports=n.p+"55067ac9356cb0674ad3.svg"},389902:function(e,t,n){"use strict";e.exports=n.p+"dcb57f386a6bf90a27c9.svg"},321211:function(e,t,n){"use strict";e.exports=n.p+"bb0ba69615cae0dd25b7.svg"},786937:function(e,t,n){"use strict";e.exports=n.p+"ecc4859664616ed5ad9a.svg"},774146:function(e,t,n){"use strict";n.r(t),n.d(t,{openNewUserAgeGateModal:function(){return o},openClaimAccountModal:function(){return u}});var r=n("37983");n("884691");var a=n("551042"),l=n("586391"),s=n("843455");function o(e){(0,a.openModalLazy)(async()=>{let{default:e}=await n.el("377531").then(n.bind(n,"377531"));return t=>(0,r.jsx)(e,{...t})},{modalKey:l.NEW_USER_AGE_GATE_MODAL_KEY,onCloseRequest:s.NOOP,onCloseCallback:e})}function u(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;(0,a.openModalLazy)(async()=>{let{default:t}=await n.el("633156").then(n.bind(n,"633156"));return n=>(0,r.jsx)(t,{claimRequired:e,...n})},{onCloseRequest:e?s.NOOP:null,onCloseCallback:t})}},649486:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}}),n("222007");var r,a,l=n("37983"),s=n("884691"),o=n("414456"),u=n.n(o),i=n("597755"),c=n.n(i),d=n("394846"),f=n("171718"),m=n("446674"),p=n("77078"),g=n("774146"),v=n("161778"),h=n("271938"),x=n("697218"),O=n("476765"),D=n("599110"),L=n("98013"),A=n("49111"),S=n("782340"),N=n("777016");(a=r||(r={}))[a.OSX=0]="OSX",a[a.WINDOWS=1]="WINDOWS",a[a.LINUX=2]="LINUX",a[a.IOS=3]="IOS",a[a.ANDROID=4]="ANDROID";let b=[{getOs:()=>S.default.Messages.PLATFORM_MACOS,icon:N.apple,url:()=>(0,L.makeDesktopDownloadURL)("osx",!1),platformKey:0},{getOs:()=>S.default.Messages.PLATFORM_WINDOWS,icon:N.windows,url:()=>(0,L.makeDesktopDownloadURL)("win",!1),platformKey:1},{getOs:()=>S.default.Messages.PLATFORM_LINUX,icon:N.linux,url:[{url:()=>(0,L.makeDesktopDownloadURL)("linux",!1,"deb"),getText:()=>S.default.Messages.DEB},{url:()=>(0,L.makeDesktopDownloadURL)("linux",!1,"tar.gz"),getText:()=>S.default.Messages.TAR_GZ}],platformKey:2}],R=[{getOs:()=>S.default.Messages.PLATFORM_IOS,icon:N.ios,url:()=>A.DownloadLinks.IOS,platformKey:3},{getOs:()=>S.default.Messages.PLATFORM_ANDROID,icon:N.android,url:()=>A.DownloadLinks.ANDROID,platformKey:4}],M=e=>{let{url:t,text:n,onClick:r}=e;return(0,l.jsx)(p.Anchor,{useDefaultUnderlineStyles:!1,href:t,className:N.downloadButton,onClick:r,children:n})},w=e=>{let t,{platform:n,onClick:r,onMouseEnter:a,isActive:s,claimed:o,theme:i}=e,{getOs:c,icon:d,url:f,platformKey:m}=n,g=c(),v=u(N.icon,d,i);if(Array.isArray(f))t=f.map((e,t)=>{let n=o?e.url():"";return(0,l.jsx)(M,{url:n,onClick:()=>r(g),text:e.getText()},"".concat(n,"-").concat(t))});else{let e=o?f():void 0;t=(0,l.jsx)(M,{url:e,onClick:()=>r(g),text:S.default.Messages.DOWNLOAD})}return(0,l.jsx)("li",{className:u(N.platform,{[N.active]:s}),onMouseEnter:()=>a(m),children:(0,l.jsxs)("div",{className:N.contentWrapper,children:[(0,l.jsxs)("div",{className:N.iconWrap,children:[(0,l.jsx)("div",{className:v}),(0,l.jsx)("div",{className:u(N.active,v)})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(p.Heading,{className:N.platformName,variant:"heading-lg/semibold",children:g}),(0,l.jsx)("div",{className:u(N.downloadButtons,{[N.list]:Array.isArray(t)}),children:t})]})]})})};function I(e){let{source:t,onClose:n,transitionState:r}=e,a=(0,m.useStateFromStores)([x.default],()=>x.default.getCurrentUser()),o=(0,m.useStateFromStores)([v.default],()=>v.default.theme),u=(0,m.useStateFromStores)([h.default],()=>h.default.getFingerprint()),i=null==a||a.isClaimed(),[L,M]=s.useState(function(){var e;switch(null===(e=c.os)||void 0===e?void 0:e.family){case"OS X":return 0;case"Windows":return 1;case"Ubuntu":case"Debian":case"Fedora":case"Red Hat":case"SuSE":case"Linux":return 2;case"iOS":return 3;case"Android":return 4;default:return}}());function I(e){(null!=f.default.getToken()||null!=u)&&D.default.track(A.AnalyticEvents.DOWNLOAD_APP,{platform:e,ptb:!1,released:!0,has_e_mail:i,referring_location:t,qr_code:!1}),!i&&(n(),g.openClaimAccountModal())}function k(e){M(e)}s.useEffect(()=>{D.default.track(A.AnalyticEvents.OPEN_MODAL,{type:"Download App",source:{location:t}})},[t]);let y=(0,O.useUID)();return(0,l.jsx)(p.ModalRoot,{className:N.downloadApps,transitionState:r,"aria-labelledby":y,children:(0,l.jsx)("div",{className:N.inner,children:(0,l.jsxs)(p.HeadingLevel,{component:(0,l.jsx)(p.HiddenVisually,{children:(0,l.jsx)(p.H,{id:y,children:S.default.Messages.DOWNLOAD_APP})}),children:[(0,l.jsx)(p.ModalCloseButton,{onClick:n,className:N.modalCloseButton}),!d.isMobile&&(0,l.jsx)("div",{className:N.platformsWrap,children:(0,l.jsx)(p.HeadingLevel,{component:(0,l.jsx)(p.Heading,{variant:"heading-lg/semibold",className:N.header,children:S.default.Messages.DOWNLOAD_DESKTOP_TITLE}),children:(0,l.jsx)("ul",{className:N.platforms,children:b.map(e=>(0,l.jsx)(w,{theme:o,isActive:L===e.platformKey,platform:e,onClick:I,onMouseEnter:k,claimed:i},e.platformKey))})})}),(0,l.jsx)("div",{className:N.platformsWrap,children:(0,l.jsxs)(p.HeadingLevel,{component:(0,l.jsx)(l.Fragment,{children:!d.isMobile&&(0,l.jsx)(p.Heading,{variant:"heading-lg/semibold",className:N.header,children:S.default.Messages.DOWNLOAD_MOBILE_TITLE})}),children:[(0,l.jsx)("ul",{className:N.platforms,children:R.map(e=>(0,l.jsx)(w,{theme:o,isActive:L===e.platformKey,platform:e,onClick:I,onMouseEnter:k,claimed:i},e.platformKey))}),(0,l.jsx)(p.Text,{className:N.footer,variant:"text-sm/normal",children:S.default.Messages.DOWNLOAD_DESKTOP_FOOTER.format()})]})})]})})})}},476765:function(e,t,n){"use strict";n.r(t),n.d(t,{uid:function(){return s},useUID:function(){return o},UID:function(){return u}});var r=n("995008"),a=n.n(r),l=n("775560");let s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uid_";return a(e)},o=()=>(0,l.useLazyValue)(()=>s()),u=e=>{let{children:t}=e;return t(o())}},98013:function(e,t,n){"use strict";n.r(t),n.d(t,{makeDesktopDownloadURL:function(){return i},getPlatformReadableName:function(){return d},getCurrentPlatformDownloadURL:function(){return f},getMobileDownloadLink:function(){return m}});var r=n("597755"),a=n.n(r),l=n("815157"),s=n("271938"),o=n("49111");let u="linux";function i(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2?arguments[2]:void 0;return"".concat(o.DownloadLinks.DESKTOP).concat(t?"/ptb":"","?platform=").concat(e).concat(null!=n?"&format=".concat(n):"")}function c(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null===(e=a.os)||void 0===e?void 0:e.family;return null==t?"win":-1!==t.indexOf("Ubuntu")||-1!==t.indexOf("Debian")||-1!==t.indexOf("Fedora")||-1!==t.indexOf("Red Hat")||-1!==t.indexOf("SuSE")||-1!==t.indexOf("Linux")?u:-1!==t.indexOf("OS X")?"osx":"win"}function d(e){return({win:"Windows",osx:"Mac",[u]:"Linux"})[c(e)]}function f(){let e=c();return i(e,!1,e===u?"tar.gz":null)}function m(e,t,n){let r=null!=n?n.toString():null;switch(t){case"iOS":return(0,l.default)(null!=r?r:"https://itunes.apple.com/us/app/discord-chat-for-games/id985746746",{utmSource:e,fingerprint:s.default.getFingerprint(),attemptId:(0,l.generateAttemptId)()});case"Android":return(0,l.default)(null!=r?r:"https://play.google.com/store/apps/details",{utmSource:e,id:"com.discord",fingerprint:s.default.getFingerprint(),attemptId:(0,l.generateAttemptId)()});default:return null!=r?r:"https://www.discord.com"}}},815157:function(e,t,n){"use strict";n.r(t),n.d(t,{generateAttemptId:function(){return u},parseDynamicLink:function(){return i},default:function(){return c}}),n("511434"),n("313619"),n("654714"),n("287168"),n("956660"),n("222007");var r=n("383536"),a=n.n(r),l=n("748820"),s=n("530334");let o="https://discordapp.page.link";function u(){return(0,l.v4)()}function i(e){if(!e.startsWith(o))return null;try{var t;let n=new URL(e),r=n.searchParams,a=r.get("link");if(null==a)return null;let l=decodeURIComponent(a),s=new URL(l).searchParams,o={utmSource:null!==(t=r.get("utm_source"))&&void 0!==t?t:void 0};for(let[e,t]of s.entries())o[e]=t;return o}catch{return null}}function c(e,t){let{utmSource:n,androidFallbackLink:r,iosFallbackLink:l,...u}=t,i=new URL(e);for(let e in u){let t=u[e];null!=t&&i.searchParams.set(e,t)}let c=encodeURIComponent(i.toString()),d=encodeURIComponent((0,s.default)()),f=!function(){var e,t;let n=RegExp("(".concat("WebView|(iPhone|iPod|iPad)(?!.*Safari/)",")"),"ig"),r=(null==a?void 0:null===(e=a.ua)||void 0===e?void 0:e.match(n))!=null,l=(null==a?void 0:a.name)==="Safari"&&!r;return(null==a?void 0:null===(t=a.os)||void 0===t?void 0:t.family)!=="iOS"||l}()?0:1,m=null!=r?encodeURIComponent(r):null,p=null!=l?encodeURIComponent(l):null,g="".concat(o,"/?link=").concat(c,"&utm_source=").concat(n,"&apn=").concat("com.discord","&isi=").concat(985746746,"&ibi=").concat("com.hammerandchisel.discord","&sd=").concat(d,"&efr=").concat(f);return null!=m&&(g+="&afl=".concat(m)),null!=p&&(g+="&ifl=".concat(p)),g}},530334:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});let r=()=>"";var a=r=n("466237").default},466237:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n("792788");function a(){return r.default.Messages.DynamicLinks.IOS_APP_PREVIEW_DESCRIPTION}}}]);
//# sourceMappingURL=7223ceb06b2f7962366e.js.map