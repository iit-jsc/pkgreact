"use strict";(self.webpackChunk_minimal_kit_cra_ts=self.webpackChunk_minimal_kit_cra_ts||[]).push([[166],{54406:function(n,e,t){t.d(e,{Z:function(){return m}});var i=t(1413),r=t(45987),a=t(64554),s=t(50533),l=t(53767),c=t(4567),o=t(93517),h=t(30439),d=t(89302),u=t(73953),x=t(80184);function v(n){var e=n.link,t=n.activeLast,r=n.disabled,c=e.name,o=e.href,v=e.icon,p=(0,x.jsx)(u.Z,{src:"/assets/icons/navbar/".concat(v,".svg"),sx:{width:14,height:14,mr:1}}),m=(0,i.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},r&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),g=(0,x.jsxs)(l.Z,{direction:"row",alignItems:"center",children:[v&&p,c]});return o?(0,x.jsx)(s.Z,{component:d.r,href:o,sx:m,children:(0,x.jsx)(h.Z,{color:"primary",sx:{textTransform:"unset"},variant:"contained",children:g})}):(0,x.jsxs)(a.Z,{sx:m,children:[" ",g," "]})}var p=["links","action","heading","moreLink","activeLast","sx"];function m(n){var e=n.links,t=n.action,h=n.heading,d=n.moreLink,u=n.activeLast,m=n.sx,b=(0,r.Z)(n,p),j=e[e.length-1].name;return(0,x.jsxs)(a.Z,{sx:(0,i.Z)({mb:1},m),children:[(0,x.jsxs)(l.Z,{direction:"row",alignItems:"center",sx:{px:3},children:[(0,x.jsxs)(l.Z,{direction:{xs:"column",md:"row"},justifyContent:"space-between",alignItems:"center",sx:{width:"100%"},children:[h&&(0,x.jsx)(c.Z,{variant:"h4",gutterBottom:!0,children:h}),!!e.length&&(0,x.jsx)(o.Z,(0,i.Z)((0,i.Z)({separator:(0,x.jsx)(g,{}),sx:{paddingX:2,paddingY:.1,borderRadius:1,width:"max-content",borderWidth:"1px",borderStyle:"solid",borderColor:"primary.main"}},b),{},{children:e.map((function(n){return(0,x.jsx)(v,{link:n,activeLast:u,disabled:n.name===j},n.name||"")}))}))]}),t&&(0,x.jsxs)(a.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!d&&(0,x.jsx)(a.Z,{sx:{mt:2},children:d.map((function(n){return(0,x.jsx)(s.Z,{noWrap:!0,href:n,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:n},n)}))})]})}function g(){return(0,x.jsx)(a.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},48497:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var i=t(74165),r=t(15861),a=t(29439),s=t(6907),l=t(72791),c=t(46002),o=t(57621),h=t(61889),d=t(82626),u=t(27938),x=t(53767),v=t(44695),p=t(61134),m=t(8007),g=t(54406),b=t(72369),j=t(11857),f=t(7055),Z=t(31243),y=t(80184),w=[{value:.7,label:"T\u1ed1c \u0111\u1ed9 ch\u1eadm h\u01a1n 0.7 l\u1ea7n"},{value:.8,label:"T\u1ed1c \u0111\u1ed9 ch\u1eadm h\u01a1n 0.8 l\u1ea7n"},{value:.9,label:"T\u1ed1c \u0111\u1ed9 ch\u1eadm h\u01a1n 0.9 l\u1ea7n"},{value:1,label:"T\u1ed1c \u0111\u1ed9 \u0111\u1ecdc b\xecnh th\u01b0\u1eddng"},{value:1.1,label:"T\u1ed1c \u0111\u1ed9 nhanh h\u01a1n 1.1 l\u1ea7n"},{value:1.2,label:"T\u1ed1c \u0111\u1ed9 nhanh h\u01a1n 1.2 l\u1ea7n"},{value:1.3,label:"T\u1ed1c \u0111\u1ed9 nhanh h\u01a1n 1.3 l\u1ea7n"}],k=[{value:2,label:"\u0110\u1ecbnh d\u1ea1ng file .wav"},{value:3,label:"\u0110\u1ecbnh d\u1ea1ng file .mp3"}];function _(){var n=(0,j.Ds)().enqueueSnackbar,e=(0,l.useState)(""),t=(0,a.Z)(e,2),_=t[0],C=t[1],T=(0,l.useState)([]),q=(0,a.Z)(T,2),L=q[0],S=q[1];(0,l.useEffect)((function(){var n=function(){var n=(0,r.Z)((0,i.Z)().mark((function n(){var e,t;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Z.Z.get("https://viettelgroup.ai/voice/api/tts/v1/rest/voices");case 2:e=n.sent,(t=e.data)&&S(t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]);var B=m.Ry().shape({text:m.Z_().required("B\u1ea1n ch\u01b0a nh\u1eadp v\u0103n b\u1ea3n chuy\u1ec3n \u0111\u1ed5i !"),voice:m.Z_().required("B\u1ea1n ch\u01b0a ch\u1ecdn gi\u1ecdng \u0111\u1ecdc !"),without_filter:m.O7().required("B\u1ea1n ch\u01b0a ch\u1ecdn ch\u1ea5t l\u01b0\u1ee3ng gi\u1ecdng !"),speed:m.Rx().required("B\u1ea1n ch\u01b0a ch\u1ecdn t\u1ed1c \u0111\u1ed9 !"),tts_return_option:m.Rx().required("B\u1ea1n ch\u01b0a ch\u1ecdn \u0111\u1ecbnh d\u1ea1ng t\u1ea3i xu\u1ed1ng !")}),N=(0,l.useMemo)((function(){return{text:"Xin ch\xe0o b\u1ea1n",voice:"hn-quynhanh",without_filter:!1,speed:1,tts_return_option:3}}),[]),Y=(0,p.cI)({resolver:(0,v.X)(B),defaultValues:N}),I=Y.handleSubmit,R=Y.formState.isSubmitting,V=I(function(){var e=(0,r.Z)((0,i.Z)().mark((function e(t){var r,a,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(""),e.prev=1,e.next=4,Z.Z.post("https://viettelgroup.ai/voice/api/tts/v1/rest/syn",t,{headers:{"Content-Type":"application/json",token:"anonymous"},responseType:"blob"});case 4:r=e.sent,a=new Blob([r.data],{type:"audio/wav"}),s=URL.createObjectURL(a),C(s),n("Chuy\u1ec3n \u0111\u1ed5i th\xe0nh c\xf4ng th\xe0nh gi\u1ecdng n\xf3i !"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),n("\u0110\xe3 c\xf3 l\u1ed7i x\u1ea3y ra ! Vui l\xf2ng th\u1eed l\u1ea1i !",{variant:"error"});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(n){return e.apply(this,arguments)}}());return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(s.ql,{children:(0,y.jsx)("title",{children:" Chuy\u1ec3n \u0111\u1ed5i v\u0103n b\u1ea3n th\xe0nh gi\u1ecdng n\xf3i "})}),(0,y.jsx)(g.Z,{heading:"V\u0103n b\u1ea3n th\xe0nh gi\u1ecdng n\xf3i",links:[{name:"Ti\u1ec7n \xedch"},{name:"Chuy\u1ec3n \u0111\u1ed5i",href:f.H.home.convert.root},{name:"V\u0103n b\u1ea3n th\xe0nh gi\u1ecdng n\xf3i"}],sx:{mb:{xs:3,md:5}}}),(0,y.jsx)(o.Z,{sx:{padding:3},children:(0,y.jsx)(b.ZP,{methods:Y,onSubmit:V,children:(0,y.jsxs)(h.ZP,{container:!0,spacing:3,children:[(0,y.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,y.jsxs)(x.Z,{spacing:2,children:[(0,y.jsx)(b.jY,{label:"V\u0103n b\u1ea3n chuy\u1ec3n \u0111\u1ed5i :",required:!0,children:(0,y.jsx)(b.au,{name:"text",placeholder:"Nh\u1eadp v\xe0o v\u0103n b\u1ea3n mu\u1ed1n chuy\u1ec3n \u0111\u1ed5i th\xe0nh gi\u1ecdng n\xf3i...",multiline:!0,rows:10,sx:{width:"100%"}})}),_&&(0,y.jsx)(u.Z,{elevation:3,sx:{padding:1,display:"flex",justifyContent:"center",alignContent:"center"},children:(0,y.jsxs)("audio",{controls:!0,autoPlay:!0,style:{width:"100%"},children:[(0,y.jsx)("track",{kind:"captions"}),(0,y.jsx)("source",{src:_,type:"audio/mpeg"}),"Tr\xecnh duy\u1ec7t c\u1ee7a b\u1ea1n kh\xf4ng h\u1ed7 tr\u1ee3"]})})]})}),(0,y.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,y.jsxs)(x.Z,{spacing:2,height:"100%",justifyContent:"space-between",children:[(0,y.jsx)(b.jY,{label:"L\u1ef1a ch\u1ecdn ng\xf4n ng\u1eef n\xf3i :",required:!0,children:(0,y.jsx)(b.Cc,{name:"voice",sx:{width:"100%"},children:null===L||void 0===L?void 0:L.map((function(n){return(0,y.jsx)(d.Z,{value:null===n||void 0===n?void 0:n.code,children:"".concat(n.name," (").concat(n.description,")")},null===n||void 0===n?void 0:n.code)}))})}),(0,y.jsxs)(x.Z,{direction:"row",justifyContent:"space-between",spacing:2,children:[(0,y.jsx)(b.jY,{label:"Ch\u1ea5t l\u01b0\u1ee3ng \xe2m thanh :",sx:{width:"100%"},required:!0,children:(0,y.jsx)(b._e,{name:"without_filter",label:"Ch\u1ea5t l\u01b0\u1ee3ng cao c\u1ea5p"})}),(0,y.jsx)(b.jY,{label:"T\u1ed1c \u0111\u1ed9 \u0111\u1ecdc :",sx:{width:"100%"},required:!0,children:(0,y.jsx)(b.Cc,{name:"speed",sx:{width:"100%"},children:null===w||void 0===w?void 0:w.map((function(n){return(0,y.jsx)(d.Z,{value:null===n||void 0===n?void 0:n.value,children:n.label},null===n||void 0===n?void 0:n.value)}))})}),(0,y.jsx)(b.jY,{label:"\u0110\u1ecbnh d\u1ea1ng file :",sx:{width:"100%"},children:(0,y.jsx)(b.Cc,{name:"tts_return_option",sx:{width:"100%"},children:null===k||void 0===k?void 0:k.map((function(n){return(0,y.jsx)(d.Z,{value:null===n||void 0===n?void 0:n.value,children:n.label},null===n||void 0===n?void 0:n.value)}))})})]}),(0,y.jsx)(c.Z,{type:"submit",size:"large",color:"primary",variant:"contained",loading:R,children:"CHUY\u1ec2N V\u0102N B\u1ea2N N\xc0Y TH\xc0NH GI\u1eccNG N\xd3I"})]})})]})})})]})}}}]);
//# sourceMappingURL=166.dac30100.chunk.js.map