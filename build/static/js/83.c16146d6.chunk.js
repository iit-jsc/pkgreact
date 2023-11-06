"use strict";(self.webpackChunk_minimal_kit_cra_ts=self.webpackChunk_minimal_kit_cra_ts||[]).push([[83],{26635:function(n,e,t){t.d(e,{$k:function(){return u},ZP:function(){return c},w1:function(){return s}});var r=t(74165),i=t(15861),a=t(29439),o=t(72791),l=t(12803);function c(){var n=(0,o.useState)({status:500}),e=(0,a.Z)(n,2),t=e[0],c=e[1];return(0,o.useEffect)((function(){var n=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.Z.course.offline.year.findMany({});case 2:(e=n.sent)&&c(e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]),t}function s(n){return d.apply(this,arguments)}function d(){return(d=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.Z.course.offline.year.create(e);case 2:return t=n.sent,i=t.data,n.abrupt("return",i);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function u(n,e){return h.apply(this,arguments)}function h(){return(h=(0,i.Z)((0,r.Z)().mark((function n(e,t){var i,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.Z.course.offline.year.update(t,e);case 2:return i=n.sent,a=i.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},90651:function(n,e,t){t.d(e,{O:function(){return s}});var r=t(1413),i=t(53767),a=t(49900),o=t(54852),l=t(63065),c=t(80184);function s(n){var e=n.primary,t=n.secondary,s=n.alt,d=n.src,u=n.sx;return(0,c.jsxs)(i.Z,{direction:"row",spacing:1,alignItems:"center",sx:(0,r.Z)({},u),children:[d&&(0,c.jsx)(o.Z,{alt:s,src:d,variant:"rounded"}),(0,c.jsx)(a.Z,{primary:(0,c.jsx)(l.Z,{variant:"body2",line:1,children:e||"Kh\xf4ng x\xe1c \u0111\u1ecbnh..."}),secondary:(0,c.jsx)(l.Z,{variant:"caption",color:"text.disabled",line:1,children:t||"Kh\xf4ng x\xe1c \u0111\u1ecbnh..."})||"Kh\xf4ng x\xe1c \u0111\u1ecbnh..."})]})}},63065:function(n,e,t){t.d(e,{Z:function(){return p}});var r=t(1413),i=t(45987),a=t(72791),o=t(50533),l=t(4567),c=t(13967),s=t(68051);function d(n){var e,t=(0,c.Z)(),r=(0,s.z)(),i=t.breakpoints.up("xl"===r?"lg":r),a=("h1"===n||"h2"===n||"h3"===n||"h4"===n||"h5"===n||"h6"===n)&&t.typography[n][i]?t.typography[n][i]:t.typography[n],o=(e=a.fontSize,Math.round(16*parseFloat(e))),l=Number(t.typography[n].lineHeight)*o,d=t.typography[n];return{fontSize:o,lineHeight:l,fontWeight:d.fontWeight,letterSpacing:d.letterSpacing}}var u=t(80184),h=["asLink","variant","line","persistent","children","sx"],p=(0,a.forwardRef)((function(n,e){var t=n.asLink,a=n.variant,c=void 0===a?"body1":a,s=n.line,p=void 0===s?2:s,f=n.persistent,v=void 0!==f&&f,x=n.children,y=n.sx,m=(0,i.Z)(n,h),Z=d(c).lineHeight,b=(0,r.Z)((0,r.Z)({overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:p,WebkitBoxOrient:"vertical"},v&&{height:Z*p}),y);return t?(0,u.jsx)(o.Z,(0,r.Z)((0,r.Z)({color:"inherit",ref:e,variant:c,sx:(0,r.Z)({},b)},m),{},{children:x})):(0,u.jsx)(l.Z,(0,r.Z)((0,r.Z)({ref:e,variant:c,sx:(0,r.Z)({},b)},m),{},{children:x}))}))},93069:function(n,e,t){t.r(e),t.d(e,{default:function(){return q}});var r=t(6907),i=t(72791),a=t(54406),o=t(26635),l=t(7055),c=t(34055),s=t(65478),d=t(244),u=t(74165),h=t(1413),p=t(15861),f=t(44695),v=t(61134),x=t(8007),y=t(46002),m=t(30439),Z=t(5574),b=t(97123),g=t(39157),j=t(65661),k=t(61889),w=t(72369),_=t(11857),M=t(80184);function S(n){var e=n.open,t=n.onClose,r=(0,d.S)(),a=r._table_row_selected,l=r.onSetTableRowSelected,s=r.onCreateNewRow,S=r.onUpdateRow,C=!!a,N=(0,_.Ds)().enqueueSnackbar,T=x.Ry().shape({start:x.nK().required("B\u1ea1n ch\u01b0a ch\u1ecdn ng\xe0y b\u1eaft \u0111\u1ea7u !"),end:x.nK().required("B\u1ea1n ch\u01b0a ch\u1ecdn ng\xe0y k\u1ebft th\xfac !"),description:x.nK()}),P=(0,i.useMemo)((function(){return{start:(0,c.Mu)(null===a||void 0===a?void 0:a.start,"yyyy-MM-dd")||new Date,end:(0,c.Mu)(null===a||void 0===a?void 0:a.end,"yyyy-MM-dd")||new Date,description:(null===a||void 0===a?void 0:a.description)||""}}),[a]),D=(0,v.cI)({resolver:(0,f.X)(T),defaultValues:P}),H=D.reset,R=D.handleSubmit,W=D.formState.isSubmitting;(0,i.useEffect)((function(){H(P)}),[H,a,P]);var q=R(function(){var n=(0,p.Z)((0,u.Z)().mark((function n(e){var t,r,i;return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=(0,h.Z)((0,h.Z)({},e),{},{start:new Date(null===e||void 0===e?void 0:e.start),end:new Date(null===e||void 0===e?void 0:e.end)}),n.prev=1,C){n.next=10;break}return n.next=5,(0,o.w1)(t);case 5:r=n.sent,s(r),N("\u0110\xe3 th\xeam d\u1eef li\u1ec7u ni\xean kho\xe1 m\u1edbi !"),n.next=15;break;case 10:return n.next=12,(0,o.$k)(t,a.id);case 12:i=n.sent,S(i),N("\u0110\xe3 c\u1eadp nh\u1eadt ni\xean kho\xe1  !");case 15:H(),K(),n.next=22;break;case 19:n.prev=19,n.t0=n.catch(1),N((null===n.t0||void 0===n.t0?void 0:n.t0.msg)||"\u0110\xe3 c\xf3 l\u1ed7i x\u1ea3y ra ! Vui l\xf2ng th\u1eed l\u1ea1i !",{variant:"error"});case 22:case"end":return n.stop()}}),n,null,[[1,19]])})));return function(e){return n.apply(this,arguments)}}()),K=function(){l(null),t()};return(0,M.jsx)(Z.Z,{fullWidth:!0,maxWidth:!1,open:e,onClose:K,PaperProps:{sx:{maxWidth:720}},children:(0,M.jsxs)(w.ZP,{methods:D,onSubmit:q,children:[(0,M.jsx)(j.Z,{children:C?"C\u1eadp nh\u1eadt d\u1eef li\u1ec7u ni\xean kho\xe1 ":"Th\xeam d\u1eef li\u1ec7u ni\xean kho\xe1 m\u1edbi"}),(0,M.jsx)(g.Z,{children:(0,M.jsxs)(k.ZP,{container:!0,spacing:2,children:[(0,M.jsx)(k.ZP,{item:!0,xs:6,children:(0,M.jsx)(w.jY,{label:"Ng\xe0y b\u1eaft \u0111\u1ea7u :",required:!0,children:(0,M.jsx)(w.au,{type:"date",name:"start",label:"Ch\u1ecdn ng\xe0y..."})})}),(0,M.jsx)(k.ZP,{item:!0,xs:6,children:(0,M.jsx)(w.jY,{label:"Ng\xe0y k\u1ebft th\xfac :",required:!0,children:(0,M.jsx)(w.au,{type:"date",name:"end",label:"Ch\u1ecdn ng\xe0y..."})})}),(0,M.jsx)(k.ZP,{item:!0,xs:12,children:(0,M.jsx)(w.jY,{label:"M\xf4 t\u1ea3 ni\xean kho\xe1 :",children:(0,M.jsx)(w.au,{name:"description",multiline:!0,rows:4,label:"M\xf4 t\u1ea3 ni\xean kho\xe1..."})})})]})}),(0,M.jsxs)(b.Z,{children:[(0,M.jsx)(m.Z,{variant:"outlined",onClick:K,children:"Hu\u1ef7 b\u1ecf"}),(0,M.jsx)(y.Z,{type:"submit",color:"primary",variant:"contained",loading:W,children:C?"C\u1eadp nh\u1eadt d\u1eef li\u1ec7u":"Th\xeam d\u1eef li\u1ec7u m\u1edbi"})]})]})})}var C=t(27938),N=t(53767),T=t(68745),P=t(90651),D=[{id:"name",label:"Ni\xean kho\xe1",flex:1},{id:"createdAt",label:"Ng\xe0y t\u1ea1o",flex:1,align:"center"},{id:"updatedAt",label:"Ng\xe0y c\u1eadp nh\u1eadt",flex:1,align:"center"},{id:"classes",label:"G\u1ed3m c\xe1c l\u1edbp h\u1ecdc",flex:1,align:"center"},{id:"action",label:"H\xe0nh \u0111\u1ed9ng",flex:1,align:"right"}],H=function(n){return(0,M.jsx)(M.Fragment,{children:(0,M.jsx)(T.Z,{children:(0,M.jsx)(P.O,{primary:"".concat((0,c.Mu)(null===n||void 0===n?void 0:n.start,"MM/yyyy")," - ").concat((0,c.Mu)(null===n||void 0===n?void 0:n.end,"MM/yyyy")),secondary:null===n||void 0===n?void 0:n.description})})})},R=function(n){var e;return(0,M.jsx)(N.Z,{component:C.Z,sx:{m:1.5},children:null===n||void 0===n||null===(e=n.classes)||void 0===e?void 0:e.map((function(n){var e,t,r;return(0,M.jsx)(N.Z,{direction:"row",alignItems:"center",sx:{p:1,"&:not(:last-of-type)":{borderBottom:function(n){return"solid 2px ".concat(n.palette.background.neutral)}}},children:(0,M.jsx)(P.O,{primary:"L\u1edbp ".concat(null===n||void 0===n||null===(e=n.grade)||void 0===e?void 0:e.label).concat(null===n||void 0===n?void 0:n.name),secondary:null===n||void 0===n||null===(t=n.grade)||void 0===t||null===(r=t.school)||void 0===r?void 0:r.name})},null===n||void 0===n?void 0:n.id)}))})};function W(){var n=(0,d.S)(),e=n._table_data,t=n._table_open_form,r=n.onSetOpenForm,u=n.onSetTableData,h=n.onSetTableHeader,p=n.onSetTableRows,f=n.onSetTableRowCollapse,v=n.onSetExportTableData,x=n.onSetConfigTable,y=(0,o.ZP)().data;return(0,i.useEffect)((function(){u(y),x({table_name:"year",add_new:!0,filter_by_date:!0,filter_by_type:!1,filter_by_search:!0,import_data:!1,export_data:!0,table_selected:!0,allocation_student:!1,delete_all:!0,collapse_item:!0,edit_row:!0,delete_row:!0}),h(D),p(H),f(R)}),[y]),(0,i.useEffect)((function(){v(null===e||void 0===e?void 0:e.map((function(n){return{"T\xean ni\xean kho\xe1":"".concat((0,c.Mu)(null===n||void 0===n?void 0:n.start,"MM/yyyy")," - ").concat((0,c.Mu)(null===n||void 0===n?void 0:n.end,"MM/yyyy")),"M\xf4 t\u1ea3 ni\xean kho\xe1":null===n||void 0===n?void 0:n.description,"Ng\xe0y t\u1ea1o":(0,c.zM)(null===n||void 0===n?void 0:n.createdAt),"Ng\xe0y c\u1eadp nh\u1eadt":(0,c.zM)(null===n||void 0===n?void 0:n.updatedAt)}})))}),[e]),(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(a.Z,{heading:"Qu\u1ea3n l\xfd ni\xean kho\xe1",links:[{name:"L\u1edbp h\u1ecdc"},{name:"Ni\xean kho\xe1",href:l.H.home.classroom.school_year},{name:"Qu\u1ea3n l\xfd ni\xean kho\xe1"}],sx:{mb:{xs:3,md:5}}}),(0,M.jsx)(s.Z,{}),(0,M.jsx)(S,{open:t,onClose:function(){return r(!1)}})]})}function q(){return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(r.ql,{children:(0,M.jsx)("title",{children:" Qu\u1ea3n l\xfd ni\xean kho\xe1 "})}),(0,M.jsx)(W,{})]})}}}]);
//# sourceMappingURL=83.c16146d6.chunk.js.map