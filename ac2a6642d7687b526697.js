(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([["74749"],{35647:function(e,n,t){"use strict";t.r(n),t.d(n,{IdIcon:function(){return o}});var l=t("37983");t("884691");var i=t("669491"),u=t("75196");let o=e=>{let{width:n=24,height:t=24,color:o=i.default.colors.INTERACTIVE_NORMAL,colorClass:a="",...c}=e;return(0,l.jsxs)("svg",{...(0,u.default)(c),xmlns:"http://www.w3.org/2000/svg",width:n,height:t,fill:"none",viewBox:"0 0 24 24",children:[(0,l.jsx)("path",{fill:"string"==typeof o?o:o.css,d:"M15.3 14.48c-.46.45-1.08.67-1.86.67h-1.39V9.2h1.39c.78 0 1.4.22 1.86.67.46.45.68 1.22.68 2.31 0 1.1-.22 1.86-.68 2.31Z",className:a}),(0,l.jsx)("path",{fill:"string"==typeof o?o:o.css,fillRule:"evenodd",d:"M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.04V7.34H6V17Zm4-9.66V17h3.44c1.46 0 2.6-.42 3.38-1.25.8-.83 1.2-2.02 1.2-3.58s-.4-2.75-1.2-3.58c-.79-.83-1.92-1.25-3.38-1.25H10Z",clipRule:"evenodd",className:a})]})}},454e3:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}});var l=t("37983");t("884691");var i=t("77078"),u=t("272030"),o=t("861370"),a=t("818059"),c=t("782340");function s(e){let{channel:n,channelId:t,originalLink:s,messageId:r,onSelect:d}=e,f=(0,a.default)(n,s,r),C=(0,o.default)({id:t,label:c.default.Messages.COPY_ID_CHANNEL});return(0,l.jsxs)(i.Menu,{navId:"channel-mention-context",onClose:u.closeContextMenu,onSelect:d,"aria-label":c.default.Messages.CHANNEL_MENTION_ACTIONS_MENU_LABEL,children:[(0,l.jsx)(i.MenuGroup,{children:f},"channel-mention-actions"),(0,l.jsx)(i.MenuGroup,{children:C},"developer-actions")]})}},458574:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var l=t("37983");t("884691");var i=t("281071"),u=t("65597"),o=t("77078"),a=t("867965"),c=t("42203"),s=t("404008"),r=t("49111"),d=t("782340");function f(e,n,t){let f=(0,u.default)([c.default],()=>c.default.getChannel(e.parent_id));return(0,l.jsx)(o.MenuItem,{id:"channel-copy-link",label:d.default.Messages.COPY_LINK,action:()=>{e.isForumPost()&&(0,a.trackForumPostLinkCopied)({postId:e.id,location:{section:r.AnalyticsSections.CONTEXT_MENU}}),(0,i.copy)((0,s.getChannelLinkToCopy)(e,f,n,t))}})}},818059:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var l=t("37983");t("884691");var i=t("281071"),u=t("77078"),o=t("458574"),a=t("782340");function c(e,n,t){return null!=e?(0,o.default)(e,t,n):(0,l.jsx)(u.MenuItem,{id:"channel-copy-link",label:a.default.Messages.COPY_LINK,action:()=>{(0,i.copy)(null!=n?n:"")}})}},861370:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var l=t("37983");t("884691");var i=t("77078"),u=t("845579"),o=t("662255"),a=t("306160");function c(e){let{id:n,label:t,onSuccess:c,shiftId:s,showIconFirst:r}=e,d=u.DeveloperMode.useSetting();if(__OVERLAY__||!d||!a.SUPPORTS_COPY)return null;let f="devmode-copy-id-".concat(n);return(0,l.jsx)(i.MenuItem,{id:f,label:t,action:function(e){let t=null!=s&&e.shiftKey?s:n;(0,a.copy)(t),null==c||c()},icon:o.default,showIconFirst:r},f)}},662255:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a}});var l=t("37983");t("884691");var i=t("469563"),u=t("35647"),o=t("75196"),a=(0,i.replaceIcon)(function(e){let{width:n=24,height:t=24,color:i="currentColor",foreground:u,...a}=e;return(0,l.jsx)("svg",{...(0,o.default)(a),width:n,height:t,viewBox:"0 0 24 24",children:(0,l.jsx)("path",{className:u,fill:i,fillRule:"evenodd",clipRule:"evenodd",d:"M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"})})},u.IdIcon,void 0,{size:24})}}]);
//# sourceMappingURL=ac2a6642d7687b526697.js.map