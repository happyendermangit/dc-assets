(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([["66473"],{648529:function(e,t,n){"use strict";e.exports=n.p+"575be5cb28925216b2fb.svg"},522874:function(e,t,n){"use strict";n.r(t),n.d(t,{shouldShowFraudMenuVariant:function(){return r}});var a=n("862205");let l=(0,a.createExperiment)({kind:"user",id:"2023-08_iar_fraud_impersonation",label:"In App Reports Fruad & Impersonation",defaultConfig:{showFraudMenuVariant:!1},treatments:[{id:1,label:"Enabled",config:{showFraudMenuVariant:!0}}]});function r(){let{showFraudMenuVariant:e}=l.getCurrentConfig({location:"159afe_2"},{autoTrackExposure:!0});return e}},821003:function(e,t,n){"use strict";n.r(t),n.d(t,{REMEDIATION_ELEMENT_TYPES:function(){return a}});let a=["block_users","leave_guild","delete_message"]},143618:function(e,t,n){"use strict";var a,l,r,s;n.r(t),n.d(t,{ReportNames:function(){return a},UnauthenticatedReportNames:function(){return l}}),(r=a||(a={})).GUILD="guild",r.GUILD_DISCOVERY="guild_discovery",r.GUILD_DIRECTORY_ENTRY="guild_directory_entry",r.MESSAGE="message",r.STAGE_CHANNEL="stage_channel",r.GUILD_SCHEDULED_EVENT="guild_scheduled_event",r.FIRST_DM="first_dm",r.USER="user",(s=l||(l={})).MESSAGE="message_urf",s.USER="user_urf"},377114:function(e,t,n){"use strict";let a;n.r(t),n.d(t,{showReportModalForDiscoverableGuild:function(){return m},showReportModalForGuildDirectoryEntry:function(){return f},showReportModalForMessage:function(){return _},showReportModalForStageChannel:function(){return E},showReportModalForGuildScheduledEvent:function(){return h},showReportModalForFirstDM:function(){return v},submitHamReportForFirstDM:function(){return x},showReportModalForUser:function(){return R},showUnauthenticatedReportModalForUser:function(){return g},showUnauthenticatedReportModalForMessage:function(){return N}});var l=n("716241"),r=n("834052"),s=n("719926"),i=n("766274"),d=n("522874"),u=n("143618"),o=n("965153"),c=n("49111");function m(e,t){p(u.ReportNames.GUILD_DISCOVERY,{guild_id:e.id}),a({name:u.ReportNames.GUILD_DISCOVERY,record:e},{},t)}function f(e,t){p(u.ReportNames.GUILD_DIRECTORY_ENTRY,{channel_id:e.channelId,guild_id:e.guildId}),a({name:u.ReportNames.GUILD_DIRECTORY_ENTRY,record:e},{},t)}function _(e,t){p(u.ReportNames.MESSAGE,{message_id:e.id,channel_id:e.channel_id});let n=(0,d.shouldShowFraudMenuVariant)();a({name:u.ReportNames.MESSAGE,record:e},{variant:n?"4":void 0},t)}function E(e,t){let n=r.default.getStageInstanceByChannel(e.id);null!=n&&(p(u.ReportNames.STAGE_CHANNEL,{stage_instance_id:n.id,channel_id:n.channel_id,guild_id:n.guild_id}),a({name:u.ReportNames.STAGE_CHANNEL,record:n},{},t))}function h(e,t){var n;p(u.ReportNames.GUILD_SCHEDULED_EVENT,{guild_scheduled_event_id:e.id,guild_id:e.guild_id,channel_id:null!==(n=e.channel_id)&&void 0!==n?n:void 0}),a({name:u.ReportNames.GUILD_SCHEDULED_EVENT,record:e},{},t)}function v(e,t){p(u.ReportNames.FIRST_DM,{message_id:e.id,channel_id:e.channel_id}),a({name:u.ReportNames.FIRST_DM,record:e},{},t,void 0,!1)}async function x(e,t){try{await (0,o.submitHeadlessReport)({name:u.ReportNames.FIRST_DM,record:e},{variant:"_first_dm_ham_v1"}),null==t||t()}catch{}}function R(e,t,n){p(u.ReportNames.USER,{reported_user_id:e.id}),a({name:u.ReportNames.USER,record:e,contextualGuildId:t},{},n,void 0,!1)}function g(e,t){let n=new i.default({});p(u.UnauthenticatedReportNames.USER,{reported_user_id:n.id}),a({name:u.UnauthenticatedReportNames.USER,record:n},{},t,void 0,!1,!1,e)}function N(e,t){let n=new s.default({});p(u.UnauthenticatedReportNames.MESSAGE,{message_id:void 0,channel_id:void 0}),a({name:u.UnauthenticatedReportNames.MESSAGE,record:n},{},t,void 0,!1,!1,e)}function p(e,t){l.default.trackWithMetadata(c.AnalyticEvents.IAR_MODAL_OPEN,{report_type:e,...t})}a=n("878102").default},965153:function(e,t,n){"use strict";n.r(t),n.d(t,{getReportMenu:function(){return d},getUnauthenticatedReportMenu:function(){return u},submitHeadlessReport:function(){return o},submitReport:function(){return c},submitUnauthenticatedReport:function(){return m},sendUnauthenticatedReportPincode:function(){return f},verifyUnauthenticatedReport:function(){return _},submitReportSecondLook:function(){return E},trackCloseReportModalAnalytics:function(){return R},showInAppReportsFeedbackModal:function(){return g},areRequiredElementsUnfilled:function(){return N}}),n("70102"),n("808653");var a=n("872717"),l=n("913144"),r=n("716241"),s=n("143618"),i=n("49111");async function d(e,t){var n;let l=v(e),r=await a.default.get({url:i.Endpoints.GET_REPORT_MENU(l),query:(null==t?void 0:t.variant)!=null?{variant:t.variant}:void 0}),s=null!==(n=r.body)&&void 0!==n?n:JSON.parse(r.text);return s}async function u(e,t){var n;let l=h(e),r=await a.default.get({url:i.Endpoints.GET_UNAUTHENTICATED_REPORT_MENU(l),query:(null==t?void 0:t.variant)!=null?{variant:t.variant}:void 0}),s=null!==(n=r.body)&&void 0!==n?n:JSON.parse(r.text);return s}async function o(e,t){let n=v(e),l=await d(e,t);await a.default.post({url:i.Endpoints.SUBMIT_REPORT_MENU(n),body:x(l,e,[{nodeRef:l.root_node_id,destination:["",l.success_node_id]}])})}function c(e,t,n){return a.default.post({url:i.Endpoints.SUBMIT_REPORT_MENU(v(t)),body:x(e,t,n)})}function m(e,t,n,l){let r=h(t);return a.default.post({url:i.Endpoints.SUBMIT_UNAUTHENTICATED_REPORT_MENU(r),body:x(e,t,n,l)})}function f(e,t){return a.default.post({url:i.Endpoints.SEND_UNAUTHENTICATED_REPORT_PINCODE(e),body:{name:e,email:t}})}async function _(e,t,n){let l=await a.default.post({url:i.Endpoints.VERIFY_UNAUTHENTICATED_REPORT(e),body:{name:e,email:t,code:n}});return l.body}async function E(e){let t=await a.default.post({url:i.Endpoints.SUBMIT_REPORT_SECOND_LOOK,body:{token:e}});return t.body}function h(e){let t=e.name;if(!Object.values(s.UnauthenticatedReportNames).includes(t))throw Error("Invalid report type ".concat(e.name));return t}function v(e){let t=e.name;if(!Object.values(s.ReportNames).includes(t))throw Error("Invalid report type ".concat(e.name));return t}let x=(e,t,n,a)=>{let{version:l,variant:r,language:i}=e,d={channel_id:void 0,message_id:void 0,stage_instance_id:void 0,guild_id:void 0,guild_scheduled_event_id:void 0,user_id:void 0,email_token:void 0},u={version:l,variant:r,language:null!=i?i:"en",breadcrumbs:n.map(e=>e.nodeRef),elements:n.reduce((e,t)=>{let{multiSelect:n,textInput:a}=t;return{...e,...null!=n&&{[n.name]:Object.keys(n.state)},...a}},{})};if(t.name===s.ReportNames.MESSAGE||t.name===s.ReportNames.FIRST_DM){let{channel_id:e,id:n}=t.record;return{...u,...d,name:t.name,channel_id:e,message_id:n}}if(t.name===s.ReportNames.GUILD||t.name===s.ReportNames.GUILD_DISCOVERY){let{id:e}=t.record;return{...u,...d,name:t.name,guild_id:e}}if(t.name===s.ReportNames.GUILD_DIRECTORY_ENTRY){let{guildId:e,channelId:n}=t.record;return{...u,...d,name:t.name,channel_id:n,guild_id:e}}else if(t.name===s.ReportNames.STAGE_CHANNEL){let{id:e,guild_id:n,channel_id:a}=t.record;return{...u,...d,name:t.name,channel_id:a,guild_id:n,stage_instance_id:e}}else if(t.name===s.ReportNames.GUILD_SCHEDULED_EVENT){let{id:e,guild_id:n}=t.record;return{...u,...d,name:t.name,guild_id:n,guild_scheduled_event_id:e}}else if(t.name===s.ReportNames.USER)return{...u,...d,name:t.name,user_id:t.record.id,guild_id:t.contextualGuildId};else if(t.name===s.UnauthenticatedReportNames.USER)return{...u,...d,name:t.name,user_id:t.record.id,guild_id:t.contextualGuildId,email_token:a};else if(t.name===s.UnauthenticatedReportNames.MESSAGE)return{...u,...d,name:t.name,message_id:t.record.id,email_token:a};return null};function R(e,t,n){r.default.trackWithMetadata(i.AnalyticEvents.IAR_MODAL_CLOSE,{report_type:e.name,report_id:n,navigation_history:t,message_id:e.name===s.ReportNames.MESSAGE||e.name===s.ReportNames.FIRST_DM?e.record.id:void 0,stage_instance_id:e.name===s.ReportNames.STAGE_CHANNEL?e.record.id:void 0,guild_scheduled_event_id:e.name===s.ReportNames.GUILD_SCHEDULED_EVENT?e.record.id:void 0,guild_id:e.name===s.ReportNames.GUILD||e.name===s.ReportNames.GUILD_DISCOVERY?e.record.id:e.name===s.ReportNames.GUILD_DIRECTORY_ENTRY?e.record.guildId:e.name===s.ReportNames.GUILD_SCHEDULED_EVENT?e.record.guild_id:void 0,channel_id:e.name===s.ReportNames.GUILD_SCHEDULED_EVENT?e.record.channel_id:e.name===s.ReportNames.GUILD_DIRECTORY_ENTRY?e.record.channelId:void 0})}function g(e,t){l.default.dispatch({type:"IN_APP_REPORTS_SHOW_FEEDBACK",reportId:t,reportType:e.name})}function N(e,t,n,a,l){return e.some(e=>!0===e.should_submit_data&&((null==a?void 0:a[e.name])==null||(null==a?void 0:a[e.name])===""))||t.some(e=>!0===e.should_submit_data&&((null==a?void 0:a[e.name])==null||(null==a?void 0:a[e.name])===""))||(null==n?void 0:n.should_submit_data)===!0&&(null==l||0===Object.keys(l).length)}},399515:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}}),n("222007"),n("424973");var a=n("37983"),l=n("884691"),r=n("77078"),s=n("716241"),i=n("476765"),d=n("143618"),u=n("965153"),o=n("463138"),c=n("49111"),m=n("555394"),f=e=>{let{reportType:t,menu:n,modalProps:f,onSubmit:_,onNavigate:E,emailToken:h,isAuthenticated:v=!0}=e,x=(0,i.useUID)(),{nodes:R,root_node_id:g,success_node_id:N,fail_node_id:p}=n,[T,S]=l.useState(g),[I,M]=l.useState(void 0),[j,C]=l.useState(void 0),[b,y]=l.useState([]),[L,D]=l.useState(void 0),A=e=>{var n;let{destination:a}=e,[,l]=a,r=R[l];if(r.elements.some(e=>"skip"===e.type)&&(null===(n=r.button)||void 0===n?void 0:n.type)==="next")return A({...e,destination:["",r.button.target]});if(y([...b,e]),null!=r.key&&(null==E||E(r.key)),M(void 0),C(void 0),t.name===d.ReportNames.MESSAGE||t.name===d.ReportNames.FIRST_DM){let e=t.record.id;s.default.trackWithMetadata(c.AnalyticEvents.IAR_NAVIGATE,{message_id:e,content_type:t.name,report_sub_type:r.report_type,current_node:R[T].id,next_node:r.id})}S(l)},O=async e=>{var a;let l=v?await (0,u.submitReport)(n,t,[...b,e]):await (0,u.submitUnauthenticatedReport)(n,t,[...b,e],h),r=null==l?void 0:null===(a=l.body)||void 0===a?void 0:a.report_id;null!=r&&D(r),null==_||_(r)},U=()=>{var e,n;if(b.length<1)return;let a=[...b],l=a.pop(),r=null!==(n=null==l?void 0:l.nodeRef)&&void 0!==n?n:g;if(t.name===d.ReportNames.MESSAGE||t.name===d.ReportNames.FIRST_DM){let e=t.record.id;s.default.trackWithMetadata(c.AnalyticEvents.IAR_NAVIGATE,{message_id:e,content_type:t.name,report_sub_type:R[r].report_type,current_node:R[T].id,next_node:R[r].id})}M(null==l?void 0:null===(e=l.multiSelect)||void 0===e?void 0:e.state),C(null==l?void 0:l.textInput),S(r),y(a),null==E||E("..")},k=[],B=[];for(let e in R){var G,P;let t=R[e];if(t.id!==N&&t.id!==p&&t.id!==g){if(t.key.endsWith("_SUBMIT")){B.push(t);continue}if(k.push(t),(null===(G=t.button)||void 0===G?void 0:G.type)==="next"){let e=null===(P=t.button)||void 0===P?void 0:P.target,n=k.indexOf(R[e]);-1!==n&&(k.splice(n,1),k.push(R[e]))}}}let w=[R[g],...k,...B,R[N],R[p]];return(0,a.jsx)(r.ModalRoot,{transitionState:f.transitionState,"aria-labelledby":x,children:(0,a.jsx)(r.Slides,{width:440,activeSlide:T,centered:!1,children:w.map(e=>(0,a.jsx)(r.Slide,{id:e.id,children:(0,a.jsx)("div",{className:m.slideContainer,children:(0,a.jsx)(o.default,{node:e,reportType:t,history:b,onModalClose:f.onClose,onSelectChild:A,onNavigateBack:U,multiSelect:I,textInput:j,successNodeId:N,failNodeId:p,onSubmit:O,reportId:L})})},e.id))})})}},64573:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var a=n("37983"),l=n("884691"),r=n("77078"),s=n("145131"),i=n("782340"),d=n("93604"),u=e=>{let t,{button:n,submitting:u,disableNext:o,onClick:c,canNavigateBack:m,onBackClicked:f}=e,_=l.useRef(null),E=null!=n&&"cancel"!==n.type,h=m&&(null==n?void 0:n.type)!=="done",v=E||h;if(l.useEffect(()=>{if((null==n?void 0:n.type)==="submit"||(null==n?void 0:n.type)==="done"){var e;null===(e=_.current)||void 0===e||e.focus()}},[null==n?void 0:n.type]),!v)return null;let x=i.default.Messages.DONE;return(null==n?void 0:n.type)==="submit"?(x=i.default.Messages.MOBILE_REPORTS_SUBMIT_REPORT,t=r.Button.Colors.RED):(null==n?void 0:n.type)==="next"?x=i.default.Messages.NEXT:(null==n?void 0:n.type)==="cancel"&&(x=i.default.Messages.CANCEL,t=r.Button.Colors.TRANSPARENT),(0,a.jsxs)(r.ModalFooter,{direction:s.default.Direction.HORIZONTAL,children:[h&&(0,a.jsx)(r.Button,{onClick:f,color:r.Button.Colors.TRANSPARENT,disabled:u,children:i.default.Messages.BACK}),E&&(0,a.jsx)(r.Button,{onClick:()=>{null!=n&&c(n)},color:t,className:d.actionButton,disabled:u||o,buttonRef:_,children:x})]})}},463138:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}}),n("222007"),n("506083");var a=n("37983"),l=n("884691"),r=n("77078"),s=n("145131"),i=n("965153"),d=n("64573"),u=n("191732"),o=n("284787"),c=n("859043"),m=n("540227"),f=n("755575"),_=n("552190"),E=n("798016"),h=n("918418"),v=n("947319"),x=n("420938"),R=n("111181"),g=n("677734"),N=n("538418"),p=n("584866"),T=n("41877"),S=n("71514"),I=n("265104"),M=n("345516"),j=n("244599"),C=n("291028"),b=n("821003"),y=n("782340"),L=n("875460");function D(e,t){let{elements:n}=e;return n.find(e=>{let{type:n}=e;return n===t})}function A(e,t){let{elements:n}=e;return n.filter(e=>{let{type:n}=e;return n===t})}var O=e=>{let{node:t,reportType:n,history:O,onSelectChild:U,onModalClose:k,multiSelect:B,reportId:G,textInput:P}=e,w=D(t,"checkbox"),F=D(t,"text_line_resource"),H=A(t,"external_link"),V=A(t,"free_text"),z=A(t,"dropdown"),[Y,W]=l.useState(!1),[K,q]=l.useState(!1),[Z,X]=l.useState(()=>({})),[J,Q]=l.useState(()=>({})),[$,ee]=l.useState((0,i.areRequiredElementsUnfilled)(V,z,w,P,B)),et=(e,t)=>{let n={...J};n[e]=t,Q(n),ee((0,i.areRequiredElementsUnfilled)(V,z,w,n,Z))},en=l.useMemo(()=>e=>{U({nodeRef:t.id,destination:e,textInput:null!=V||null!=z?J:void 0,multiSelect:null!=w?{name:w.name,state:Z}:void 0})},[t,U,w,Z,J,V,z]);l.useEffect(()=>{null!=B&&X(B),null!=P&&Q(P)},[B,P]);let ea=()=>e.onSubmit({nodeRef:t.id,destination:["",e.successNodeId]}).then(()=>{q(!1),en(["",e.successNodeId])}).catch(()=>{q(!0)}).finally(()=>{W(!1)});return(0,a.jsxs)("div",{className:L.container,children:[(0,a.jsxs)(r.ModalHeader,{separator:!1,direction:s.default.Direction.VERTICAL,className:L.header,children:[(0,a.jsx)(M.default,{element:D(t,"success")}),(0,a.jsx)(g.default,{node:t}),(0,a.jsx)(N.default,{node:t})]}),(0,a.jsxs)(r.ModalContent,{className:L.body,children:[null!=F?(0,a.jsx)(j.default,{element:F}):null,null!=D(t,"breadcrumbs")&&(0,a.jsx)(o.default,{history:O}),null!=D(t,"message_preview")&&("message"===n.name||"first_dm"===n.name)&&(0,a.jsx)(T.default,{message:n.record}),null!=D(t,"user_preview")&&"user"===n.name?(0,a.jsx)(C.default,{user:n.record}):null,function(e){let{elements:t}=e;return t.some(e=>{let{type:t}=e;return b.REMEDIATION_ELEMENT_TYPES.includes(t)})}(t)&&(0,a.jsx)(r.Heading,{className:L.remediationElementsHeader,variant:"heading-sm/semibold",children:y.default.Messages.MOBILE_REPORTS_BLOCK_ELEMENT_HEADER}),null!=D(t,"block_users")&&("message"===n.name||"first_dm"===n.name||"user"===n.name)&&(0,a.jsx)(u.default,{userId:"user"===n.name?n.record.id:n.record.author.id,reportId:G,reportName:n.name}),null!=D(t,"delete_message")&&"message"===n.name&&(0,a.jsx)(m.default,{message:n.record,reportId:G}),null!=D(t,"leave_guild")&&"guild"===n.name&&(0,a.jsx)(p.default,{guildId:n.record.id,reportId:G}),null!=D(t,"channel_preview")&&"stage_channel"===n.name&&(0,a.jsx)(I.default,{stageInstance:n.record}),null!=D(t,"guild_scheduled_event_preview")&&"guild_scheduled_event"===n.name&&(0,a.jsx)(R.default,{event:n.record}),null!=D(t,"guild_directory_entry_preview")&&"guild_directory_entry"===n.name&&(0,a.jsx)(v.default,{entry:n.record}),null!=D(t,"guild_discovery_preview")&&"guild_discovery"===n.name&&(0,a.jsx)(x.default,{entry:n.record}),null!=w&&(0,a.jsx)(S.default,{element:w,onChange:(e,t)=>{let n={...Z};e in Z?delete n[e]:n[e]=t,X(n),ee((0,i.areRequiredElementsUnfilled)(V,z,w,J,n))},state:Z}),("user_urf"===n.name||"message_urf"===n.name)&&null!=z&&z.length>0&&(0,a.jsx)(f.default,{elements:z,onChange:et,state:J}),("user_urf"===n.name||"message_urf"===n.name)&&null!=V&&V.length>0&&(0,a.jsx)(h.default,{elements:V,onChange:et,state:J}),(0,a.jsx)(c.default,{node:t,onSelectChild:en}),null!=H&&H.length>0?(0,a.jsx)(E.default,{elements:H}):null,(0,a.jsx)(_.default,{hasError:K,onClose:()=>{q(!1)}})]}),(0,a.jsx)(d.default,{button:t.button,submitting:Y,disableNext:$,onClick:e=>{switch(e.type){case"done":case"cancel":k();break;case"next":en(["",e.target]);break;case"submit":W(!0),ea()}},onBackClicked:e.onNavigateBack,canNavigateBack:O.length>0}),(0,a.jsx)(r.ModalCloseButton,{className:L.closeButton,onClick:k})]})}},191732:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}}),n("222007");var a=n("37983"),l=n("884691"),r=n("446674"),s=n("77078"),i=n("736964"),d=n("716241"),u=n("27618"),o=n("697218"),c=n("143618"),m=n("49111"),f=n("782340"),_=n("553898"),E=e=>{let{userId:t,reportId:n,reportName:E}=e,[h,v]=l.useState(!1),x=(0,r.useStateFromStores)([o.default],()=>o.default.getUser(t),[t]),R=(0,r.useStateFromStores)([u.default],()=>u.default.getRelationshipType(t),[t])===m.RelationshipTypes.BLOCKED;l.useEffect(()=>{v(R)},[R]);let g=l.useCallback(()=>{v(!0),d.default.trackWithMetadata(m.AnalyticEvents.IAR_BLOCK_USER_BUTTON_CLICKED,{other_user_id:t,report_id:n}),i.default.addRelationship({userId:t,context:{location:"ReportMenuBlockUser-iOS"},type:m.RelationshipTypes.BLOCKED})},[t,n]);return null==x?null:(0,a.jsxs)("div",{className:_.container,children:[(0,a.jsx)(s.Text,{className:_.description,variant:"text-sm/normal",children:E===c.ReportNames.USER?f.default.Messages.REPORTS_BLOCK_USER_ELEMENT_DESCRIPTION:f.default.Messages.MOBILE_REPORTS_BLOCK_ELEMENT_DESCRIPTION}),(0,a.jsxs)("div",{className:_.userContainer,children:[(0,a.jsxs)("div",{className:_.userInfo,children:[(0,a.jsx)(s.Avatar,{size:s.AvatarSizes.SIZE_32,src:x.getAvatarURL(void 0,32),className:_.avatar,"aria-label":x.username}),(0,a.jsx)(s.Text,{className:_.userName,variant:"text-sm/semibold",children:x.username}),!x.isPomelo()&&(0,a.jsxs)(s.Text,{variant:"text-sm/normal",children:["#",x.discriminator]})]}),(0,a.jsx)(s.Button,{onClick:()=>g(),disabled:h,size:s.Button.Sizes.SMALL,color:s.Button.Colors.RED,children:h?f.default.Messages.BLOCKED:f.default.Messages.BLOCK})]})]})}},284787:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}}),n("222007");var a=n("37983");n("884691");var l=n("917351"),r=n("77078"),s=n("782340"),i=n("106291"),d=e=>{let t=(0,l.flatMap)(e.history,e=>{var t;let{destination:[n],multiSelect:a,textInput:l}=e,r=[null,null],s=Object.values(null!==(t=null==a?void 0:a.state)&&void 0!==t?t:{});s.length>0&&(r[0]=s.join(", "));let i=Object.entries(null!=l?l:{});return i.length>0&&(r[0]=i.map(e=>{let[t,n]=e;return"".concat(t,"=").concat(n)}).join(", ")),""!==n&&(r[1]=n),r}).filter(e=>null!=e);return 0===t.length?null:(0,a.jsxs)("div",{className:i.container,children:[(0,a.jsx)(r.Heading,{className:i.breadcrumbsHeader,color:"header-secondary",variant:"heading-sm/semibold",children:s.default.Messages.MOBILE_REPORTS_BREADCRUMBS_TITLE}),t.map((e,t)=>(0,a.jsxs)("div",{className:i.breadcrumbContainer,children:[(0,a.jsx)("div",{className:i.breadcrumbDot}),(0,a.jsx)(r.Text,{variant:"text-md/normal",className:i.breadcrumbText,children:e})]},"".concat(e,"+").concat(t)))]})}},859043:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}}),n("222007");var a=n("37983");n("884691");var l=n("77078"),r=n("461380"),s=n("30679");let i=e=>{let{child:t,onClick:n}=e,[i]=t;return(0,a.jsxs)(l.Clickable,{className:s.childButton,onClick:()=>n(t),children:[(0,a.jsx)(l.Text,{className:s.childText,variant:"text-md/semibold",children:i}),(0,a.jsx)(r.default,{className:s.childIcon,direction:r.default.Directions.RIGHT})]})};var d=e=>{let{node:{children:t},onSelectChild:n}=e;if(null==t||0===t.length)return null;let l=t.map(e=>{let[t,l]=e;return(0,a.jsx)(i,{child:e,onClick:n},"".concat(t,"+").concat(l))});return(0,a.jsx)("div",{className:s.childrenContainer,children:l})}},540227:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}}),n("222007");var a=n("37983"),l=n("884691"),r=n("77078"),s=n("819689"),i=n("716241"),d=n("42203"),u=n("957255"),o=n("49111"),c=n("782340"),m=n("846937"),f=e=>{let{message:t,reportId:n}=e,[f,_]=l.useState(!1),E=l.useCallback(()=>{_(!0),i.default.trackWithMetadata(o.AnalyticEvents.IAR_DELETE_MESSAGE_BUTTON_CLICKED,{report_id:n}),s.default.deleteMessage(t.getChannelId(),t.id)},[t,n]),h=l.useMemo(()=>{let e=d.default.getChannel(t.getChannelId());return null!=e&&e.type!==o.ChannelTypes.DM&&e.type!==o.ChannelTypes.GROUP_DM&&u.default.canWithPartialContext(o.Permissions.MANAGE_MESSAGES,{channelId:e.id})},[t]);return null!=t&&h?(0,a.jsx)("div",{className:m.container,children:(0,a.jsxs)("div",{className:m.messageContainer,children:[(0,a.jsx)("div",{className:m.description,children:(0,a.jsx)(r.Text,{variant:"text-sm/normal",children:c.default.Messages.MOBILE_REPORTS_DELETE_MESSAGE_ELEMENT_DESCRIPTION})}),(0,a.jsx)(r.Button,{onClick:()=>E(),disabled:f,size:r.Button.Sizes.SMALL,color:r.Button.Colors.RED,children:f?c.default.Messages.DELETED:c.default.Messages.DELETE})]})}):null}},755575:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}}),n("222007");var a=n("37983"),l=n("884691"),r=n("77078"),s=n("580906"),i=n("926622");let d=e=>{let{element:t,onChange:n,initialOption:d}=e,[u,o]=l.useState("");l.useEffect(()=>{o(null!=d?d:"")},[d]);let c=t.name,{title:m,options:f}=t.data,_=l.useCallback(e=>{null!=e&&(o(e),n(e))},[n]);return(0,a.jsxs)("div",{className:i.marginBottom8,children:[null!=m&&(0,a.jsx)("div",{className:i.marginBottom8,children:(0,a.jsxs)(r.Text,{variant:"text-sm/bold",children:[m,t.should_submit_data&&(0,a.jsx)("span",{className:s.required,children:"*"})]})}),(0,a.jsx)(r.SingleSelect,{value:u,onChange:_,options:f})]},c)};var u=e=>{let{elements:t,onChange:n,state:l}=e,r=t.map(e=>{var t;let r=e.name;return(0,a.jsx)(d,{element:e,initialOption:null!==(t=null==l?void 0:l[r])&&void 0!==t?t:void 0,onChange:e=>n(r,e)},r)});return(0,a.jsx)("div",{children:r})}},552190:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var a=n("37983");n("884691");var l=n("77078"),r=n("423487"),s=n("782340"),i=n("169075"),d=e=>{let{hasError:t,onClose:n}=e;return t?(0,a.jsxs)("div",{className:i.errorContainer,children:[(0,a.jsx)(r.default,{width:20,height:20,className:i.errorIcon}),(0,a.jsx)(l.Text,{className:i.errorText,variant:"text-sm/normal",children:s.default.Messages.MOBILE_REPORTS_SUBMIT_FAILED}),(0,a.jsx)(l.Clickable,{onClick:()=>{n()},"aria-label":s.default.Messages.DISMISS,className:i.closeIcon})]}):null}},798016:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var a=n("37983");n("884691");var l=n("77078"),r=n("545158"),s=n("758710"),i=n("782340"),d=n("272980");let u=e=>{let{data:{url:t,link_text:n,link_description:i,is_localized:u}}=e;return u?(0,a.jsxs)(l.Clickable,{role:"link",className:d.linkButton,onClick:()=>{(0,r.default)(t)},children:[(0,a.jsxs)("div",{className:d.linkTextContainer,children:[(0,a.jsx)(l.Text,{className:d.linkText,variant:"text-md/semibold",children:n}),null!=i&&""!==i&&(0,a.jsx)(l.Text,{variant:"text-md/normal",color:"text-muted",children:i})]}),(0,a.jsx)(s.default,{className:d.linkIcon})]}):null};function o(e){let{elements:t}=e;if(null==t||0===t.length||null==t.find(e=>{let{data:t}=e;return t.is_localized}))return null;let n=t.map((e,t)=>{let{data:n}=e;return(0,a.jsx)(u,{data:n},"external-link+".concat(t))}),r=t.some(e=>{let{data:t}=e;return t.is_header_hidden});return(0,a.jsxs)("div",{className:d.linksContainer,children:[!r&&(0,a.jsx)(l.Heading,{variant:"heading-sm/semibold",color:"header-secondary",className:d.header,children:i.default.Messages.LEARN_MORE}),n]})}},918418:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}}),n("222007");var a=n("37983"),l=n("884691"),r=n("77078"),s=n("782340"),i=n("45853"),d=n("926622");let u=e=>{let{data:{title:t,subtitle:n,placeholder:u,rows:o,character_limit:c,pattern:m},onChange:f,initialText:_,isRequired:E}=e,[h,v]=l.useState(""),[x,R]=l.useState("");l.useEffect(()=>{v(null!=_?_:"")},[_]);let g=l.useCallback(e=>{let t=null!=m?new RegExp(m):null;null!=t&&null==t.exec(e)?(R(s.default.Messages.IN_APP_REPORTING_FREE_TEXT_INPUT_ERROR),v(""),f("")):null!=e&&(R(""),v(e),f(e))},[f,m]);return(0,a.jsxs)("div",{className:d.marginBottom8,children:[null!=t&&(0,a.jsx)("div",{className:d.marginBottom8,children:(0,a.jsxs)(r.Text,{variant:"text-sm/bold",children:[t,E&&(0,a.jsx)("span",{className:i.required,children:"*"})]})}),(0,a.jsx)(r.TextArea,{maxLength:c,onChange:g,value:h,error:x,rows:o,placeholder:u,autoFocus:!0}),null!=n&&(0,a.jsx)("div",{children:(0,a.jsx)(r.Text,{variant:"text-sm/normal",children:n})})]})};var o=e=>{let{elements:t,onChange:n,state:l}=e,r=t.map(e=>{var t;let r=e.name;return(0,a.jsx)(u,{data:e.data,onChange:e=>n(r,e),initialText:null!==(t=null==l?void 0:l[r])&&void 0!==t?t:void 0,isRequired:e.should_submit_data},r)});return(0,a.jsx)("div",{children:r})}},947319:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var a=n("37983");n("884691");var l=n("77078"),r=n("42203"),s=n("305961"),i=n("476263"),d=n("782340"),u=n("468807"),o=e=>{let{entry:t}=e,n=r.default.getChannel(t.channelId);if(null==n)return null;let o=s.default.getGuild(n.guild_id);return null==o?null:(0,a.jsxs)("div",{className:u.container,children:[(0,a.jsx)(l.Heading,{className:u.header,variant:"heading-sm/semibold",children:d.default.Messages.REPORT_MODAL_SERVER_PREVIEW_HEADER}),(0,a.jsxs)("div",{className:u.guildContainer,children:[(0,a.jsxs)("div",{className:u.hubInfo,children:[(0,a.jsx)(i.default,{guild:o,size:i.default.Sizes.MINI,className:u.hubIcon}),(0,a.jsx)(l.Text,{color:"header-secondary",variant:"text-sm/normal",children:o.name})]}),(0,a.jsx)(l.Text,{variant:"text-md/semibold",color:"header-primary",children:t.name})]})]})}},420938:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var a=n("37983");n("884691");var l=n("77078"),r=n("587974"),s=n("315102"),i=n("782340"),d=n("187886"),u=e=>{var t;let{entry:n}=e,{id:u,icon:o,name:c}=n,m=null!==(t=s.default.getGuildIconURL({id:u,icon:o,size:32}))&&void 0!==t?t:void 0;return(0,a.jsxs)("div",{className:d.container,children:[(0,a.jsx)(l.Heading,{className:d.header,variant:"heading-sm/semibold",children:i.default.Messages.REPORT_MODAL_SERVER_PREVIEW_HEADER}),(0,a.jsx)("div",{className:d.guildContainer,children:(0,a.jsxs)("div",{className:d.guildInfo,children:[(0,a.jsx)(r.default,{mask:r.default.Masks.SQUIRCLE,width:32,height:32,className:d.guildIconMask,children:(0,a.jsx)("img",{src:m,alt:"",className:d.guildIcon})}),(0,a.jsx)(l.Text,{color:"header-secondary",variant:"text-sm/normal",children:c})]})})]})}},111181:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var a=n("37983");n("884691");var l=n("446674"),r=n("77078"),s=n("305961"),i=n("476263"),d=n("782340"),u=n("206930"),o=e=>{let{event:t}=e,n=(0,l.useStateFromStores)([s.default],()=>s.default.getGuild(t.guild_id));return null==n?null:(0,a.jsxs)("div",{className:u.container,children:[(0,a.jsx)(r.Heading,{className:u.header,variant:"heading-sm/semibold",children:d.default.Messages.MOBILE_REPORTS_EVENT_PREVIEW_TITLE}),(0,a.jsxs)("div",{className:u.guildContainer,children:[(0,a.jsxs)("div",{className:u.guildInfo,children:[(0,a.jsx)(i.default,{guild:n,size:i.default.Sizes.MINI,className:u.guildIcon}),(0,a.jsx)(r.Text,{color:"header-secondary",variant:"text-sm/normal",children:n.name})]}),(0,a.jsx)(r.Text,{variant:"text-md/semibold",color:"header-primary",children:t.name})]})]})}},677734:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var a=n("37983"),l=n("884691"),r=n("77078"),s=n("367376"),i=n("442791"),d=n("782340"),u=n("698821"),o=e=>{let{node:{header:t,subheader:n,button:o}}=e,c=(null==o?void 0:o.type)==="submit",m=l.useRef(s.default.reactParserFor({...s.default.defaultRules,link:i.LinkMarkupRule}));return(0,a.jsxs)("div",{className:u.headerContainer,children:[null!=t&&""!==t?(0,a.jsx)(r.Heading,{variant:"heading-xl/semibold",color:"header-primary",children:t}):null,null!=n&&""!==t?(0,a.jsx)(r.Text,{variant:"text-md/normal",color:"header-secondary",children:m.current(n)}):null,c&&(0,a.jsx)(r.Text,{variant:"text-sm/normal",children:d.default.Messages.MOBILE_REPORTS_SUBMIT_INFO_TEXT.format()})]})}},538418:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var a=n("37983"),l=n("884691"),r=n("367376"),s=n("555158"),i=n("442791"),d=n("81143"),u=e=>{let{node:{info:t}}=e,n=l.useRef(r.default.reactParserFor({...r.default.defaultRules,link:i.LinkMarkupRule}));return null==t?null:(0,a.jsx)(s.default,{className:d.infoBox,messageType:s.HelpMessageTypes.INFO,children:n.current(t)})}},584866:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}}),n("222007");var a=n("37983"),l=n("884691"),r=n("77078"),s=n("716241"),i=n("592407"),d=n("305961"),u=n("476263"),o=n("49111"),c=n("782340"),m=n("987013"),f=e=>{let{guildId:t,reportId:n}=e,[f,_]=l.useState(!1),E=d.default.getGuild(t),h=null!=E;l.useEffect(()=>{_(!h)},[h]);let v=l.useCallback(()=>{_(!0),s.default.trackWithMetadata(o.AnalyticEvents.IAR_LEAVE_GUILD_BUTTON_CLICKED,{guild_id:t,report_id:n}),i.default.leaveGuild(t)},[t,n]);if(null==E)return null;let x=()=>{(0,r.openModal)(e=>(0,a.jsx)(r.ConfirmModal,{header:c.default.Messages.LEAVE_SERVER_TITLE.format({name:E.name}),confirmText:c.default.Messages.LEAVE_SERVER,cancelText:c.default.Messages.CANCEL,onConfirm:v,...e,children:(0,a.jsx)(r.Text,{variant:"text-md/normal",children:c.default.Messages.LEAVE_SERVER_BODY.format({name:E.name})})}))};return(0,a.jsxs)("div",{className:m.container,children:[(0,a.jsx)(r.Text,{className:m.description,variant:"text-sm/normal",children:c.default.Messages.MOBILE_REPORTS_LEAVE_ELEMENT_DESCRIPTION}),(0,a.jsxs)("div",{className:m.guildContainer,children:[(0,a.jsxs)("div",{className:m.guildInfo,children:[(0,a.jsx)(u.default,{guild:E,showBadge:!1,animate:!1,size:u.default.Sizes.SMALL,"aria-label":E.name,className:m.icon,active:!0}),(0,a.jsx)(r.Text,{className:m.guildName,variant:"text-sm/semibold",children:E.name})]}),(0,a.jsx)(r.Button,{onClick:()=>x(),disabled:f,size:r.Button.Sizes.SMALL,color:r.Button.Colors.RED,children:f?c.default.Messages.MOBILE_REPORTS_LEFT_SERVER:c.default.Messages.LEAVE_SERVER})]})]})}},442791:function(e,t,n){"use strict";n.r(t),n.d(t,{LinkMarkupRule:function(){return i}});var a=n("37983");n("884691");var l=n("132710"),r=n.n(l),s=n("77078");let i={...r.defaultRules.link,react:function(e,t,n){return(0,a.jsx)(s.Anchor,{href:e.target,target:"_blank",children:t(e.content,n)})}}},41877:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var a=n("37983");n("884691");var l=n("446674"),r=n("77078"),s=n("574073"),i=n("39331"),d=n("42203"),u=n("780571"),o=n("497880"),c=n("93332"),m=n("93427"),f=n("719347"),_=n("782340"),E=n("929710"),h=e=>{let{message:t}=e,n=(0,s.default)(t),h=(0,l.useStateFromStores)([d.default],()=>d.default.getChannel(t.channel_id)),{content:v}=(0,i.default)(t,{hideSimpleEmbedContent:!1});return null==h?null:(0,a.jsxs)("div",{className:E.container,children:[(0,a.jsx)(r.Heading,{className:E.header,variant:"heading-sm/semibold",children:_.default.Messages.MOBILE_REPORTS_MESSAGE_PREVIEW_TITLE}),(0,a.jsx)(r.Scroller,{className:E.messagePreviewContainer,children:(0,a.jsx)(u.default,{childrenMessageContent:(()=>{let e=null==v||""===v||Array.isArray(v)&&0===v.length;if(e){let{icon:e}=(0,m.renderSingleLineMessage)(t,v,!1,"",{iconClass:E.attachmentIcon,iconSize:f.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE});return e}return(0,a.jsx)(o.default,{message:t,content:v})})(),childrenHeader:(0,a.jsx)(c.default,{message:t,channel:h,author:n,guildId:h.guild_id}),disableInteraction:!0})})]})}},71514:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}}),n("222007");var a=n("37983");n("884691");var l=n("77078"),r=n("34128");let s=e=>{let{onChange:t,label:n,subtitle:s,selected:i}=e;return(0,a.jsx)("div",{className:r.checkboxRow,children:(0,a.jsxs)(l.Checkbox,{type:l.Checkbox.Types.INVERTED,onChange:()=>t(),value:i,children:[(0,a.jsx)(l.Text,{color:"interactive-active",variant:"text-md/semibold",children:n}),(0,a.jsx)(l.Text,{color:"interactive-active",variant:"text-sm/normal",children:s})]})})};var i=e=>{let{element:t,state:n,onChange:l}=e;if((null==t?void 0:t.type)!=="checkbox")return null;let{data:r}=t;return(0,a.jsx)("div",{children:r.map((e,t)=>{let[r,i,d]=e;return(0,a.jsx)(s,{onChange:()=>l(r,i),selected:r in n,label:i,subtitle:d},"".concat(t,"+button"))})})}},265104:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var a=n("37983");n("884691");var l=n("77078"),r=n("305961"),s=n("476263"),i=n("782340"),d=n("177899"),u=e=>{let{stageInstance:t}=e,n=r.default.getGuild(t.guild_id);return null==n?null:(0,a.jsxs)("div",{className:d.container,children:[(0,a.jsx)(l.Heading,{className:d.header,variant:"heading-sm/semibold",children:i.default.Messages.MOBILE_REPORTS_STAGE_CHANNEL_PREVIEW_TITLE}),(0,a.jsxs)("div",{className:d.guildContainer,children:[(0,a.jsxs)("div",{className:d.guildInfo,children:[(0,a.jsx)(s.default,{guild:n,size:s.default.Sizes.MINI,className:d.guildIcon}),(0,a.jsx)(l.Text,{color:"header-secondary",variant:"text-sm/normal",children:n.name})]}),(0,a.jsx)(l.Text,{variant:"text-md/semibold",color:"header-primary",children:t.topic})]})]})}},345516:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var a=n("37983");n("884691");var l=n("222108");let r=n("648529");var s=e=>{let{element:t}=e;return(null==t?void 0:t.type)!=="success"?null:(0,a.jsx)("img",{alt:"",src:r,className:l.successImg})}},244599:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}}),n("222007");var a=n("37983"),l=n("884691"),r=n("414456"),s=n.n(r),i=n("77078"),d=n("367376"),u=n("306160"),o=n("782340"),c=n("285997");function m(e){let{element:{data:{title:t,body:n,sms:r,is_localized:m}}}=e,[f,_]=l.useState(!1),E=l.useRef(d.default.reactParserFor(d.default.defaultRules));return m?(0,a.jsxs)("div",{className:c.container,children:[(0,a.jsx)(i.Heading,{variant:"heading-sm/semibold",color:"header-secondary",className:c.header,children:t}),(0,a.jsx)(i.Text,{variant:"text-sm/normal",className:c.bodyText,children:E.current(n)}),(0,a.jsx)("div",{className:c.smsInfoContainer,children:(0,a.jsxs)("div",{className:s(c.smsNumberContainer,{[c.copied]:f}),children:[(0,a.jsx)(i.Text,{variant:"text-md/normal",selectable:!0,className:c.smsNumberText,children:r}),(0,a.jsx)(i.Button,{size:i.Button.Sizes.SMALL,className:c.trailingButton,onClick:()=>{(0,u.copy)(r)&&_(!0)},color:i.Button.Colors.PRIMARY,children:f?o.default.Messages.COPIED:o.default.Messages.COPY})]})})]}):null}},291028:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var a=n("37983");n("884691");var l=n("77078"),r=n("308289"),s=n("782340"),i=n("657463"),d=e=>{let{user:t}=e;return(0,a.jsxs)("div",{className:i.container,children:[(0,a.jsx)(l.Heading,{className:i.header,variant:"heading-sm/semibold",children:s.default.Messages.REPORTS_USER_PREVIEW_TITLE}),(0,a.jsx)("div",{className:i.userContainer,children:(0,a.jsxs)("div",{className:i.userInfo,children:[(0,a.jsx)(r.default,{className:i.userIcon,user:t,size:l.AvatarSizes.SIZE_40}),(0,a.jsxs)("div",{children:[null!=t.globalName&&(0,a.jsx)(l.Text,{variant:"text-md/semibold",color:"header-primary",children:t.globalName}),(0,a.jsx)(l.Text,{color:"header-secondary",variant:"text-sm/normal",children:t.username})]})]})})]})}},878102:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}}),n("424973");var a=n("37983");n("884691");var l=n("77078"),r=n("965153"),s=n("399515");async function i(e,t,n,i){let d=!(arguments.length>4)||void 0===arguments[4]||arguments[4],u=!(arguments.length>5)||void 0===arguments[5]||arguments[5],o=arguments.length>6?arguments[6]:void 0,c=(0,l.getInteractingModalContext)();try{let m,f=u?await (0,r.getReportMenu)(e,t):await (0,r.getUnauthenticatedReportMenu)(e,t),_=[];let E=e=>{_.push(e)},h=e=>{m=e,null==n||n()};(0,l.openModal)(t=>(0,a.jsx)(s.default,{menu:f,reportType:e,modalProps:t,onNavigate:E,onSubmit:h,isAuthenticated:u,emailToken:o}),{onCloseCallback:()=>{(0,r.trackCloseReportModalAnalytics)(e,_,m),null==i||i(),d&&(0,r.showInAppReportsFeedbackModal)(e,null!=m?m:null)}},c)}catch{}}}}]);
//# sourceMappingURL=25b01771fdb72758a986.js.map