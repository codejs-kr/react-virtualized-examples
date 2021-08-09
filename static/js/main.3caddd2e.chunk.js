(this["webpackJsonpreact-virtualized-samples"]=this["webpackJsonpreact-virtualized-samples"]||[]).push([[0],{103:function(e,t,n){},116:function(e,t,n){},117:function(e,t,n){},127:function(e,t,n){},128:function(e,t,n){"use strict";n.r(t);var c=n(36),r=n.n(c),i=n(43),a=n(18),s=n(146),o=n(143),l=n(140),j=n(141),b=n(151),u=(n(103),n(4)),d=function(){return Object(u.jsxs)(b.a,{className:"navigation",columns:2,spacingX:"5px",spacingY:"20px",children:[Object(u.jsx)(i.b,{to:"/text-list-virtualized",activeClassName:"selected",children:"\ud14d\uc2a4\ud2b8 \ubaa9\ub85d (with virtualized)"}),Object(u.jsx)(i.b,{to:"/text-list",activeClassName:"selected",children:"\ud14d\uc2a4\ud2b8 \ubaa9\ub85d (normal)"}),Object(u.jsx)(i.b,{to:"/image-list-virtualized",activeClassName:"selected",children:"\uc774\ubbf8\uc9c0 \ubaa9\ub85d (with virtualized)"}),Object(u.jsx)(i.b,{to:"/image-list",activeClassName:"selected",children:"\uc774\ubbf8\uc9c0 \ubaa9\ub85d (normal)"})]})},h=n(26),x=n.n(h),O=n(17),m=n(38),f=n(7),g=n(0),p=function(e){var t=e.bottom,n=void 0===t?800:t,c=document.documentElement,r=c.scrollHeight,i=c.clientHeight;return r-n<=window.scrollY+i},v=n(144),w="https://jsonplaceholder.typicode.com",C=function(){return fetch("".concat(w,"/comments"),{method:"GET"}).then((function(e){return e.json()}))},k=function(){return fetch("".concat(w,"/photos"),{method:"GET"}).then((function(e){return e.json()}))},z=n(148),S=n(142),E=n(147),y=n(145),A=function(e){var t=e.count,n=void 0===t?5:t,c=e.height,r=void 0===c?150:c;return Object(u.jsx)(E.a,{children:Array.from({length:n}).map((function(e,t){return Object(u.jsx)(y.a,{height:r},t)}))})},L=(n(116),function(e){var t=e.index,n=e.email,c=e.name,r=e.body;return Object(u.jsxs)("div",{className:"text-list-item",children:[Object(u.jsxs)("p",{children:["index: ",t]}),Object(u.jsxs)("p",{children:["email: ",n]}),Object(u.jsxs)("p",{children:["name: ",c]}),Object(u.jsxs)("p",{children:["body: ",Array.from({length:2}).map((function(){return r}))]})]})}),H=n(139),F=n(152),N=function(){return Object(u.jsx)(H.a,{textAlign:"center",margin:6,children:Object(u.jsx)(F.a,{speed:"0.65s",emptyColor:"gray.200",color:"blue.500",size:"lg"})})},B=function(){var e=Object(g.useState)([]),t=Object(f.a)(e,2),n=t[0],c=t[1],r=Object(g.useState)(!1),i=Object(f.a)(r,2),a=i[0],s=i[1],o=Object(g.useCallback)(Object(m.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,C();case 3:t=e.sent,c([].concat(Object(O.a)(n),Object(O.a)(t))),s(!1);case 6:case"end":return e.stop()}}),e)}))),[n,c]),b=Object(g.useCallback)((function(){if(a)return!1;p({bottom:600})&&o()}),[a,o]);return Object(g.useEffect)((function(){o()}),[]),Object(g.useEffect)((function(){var e=Object(v.a)(b,100);return window.addEventListener("scroll",e,{passive:!0}),function(){return window.removeEventListener("scroll",e)}}),[b]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(l.a,{padding:0,marginBottom:5,textAlign:"center",children:[Object(u.jsx)(j.a,{size:"md",mb:5,textAlign:"center",children:"react-virtualized (X)"}),Object(u.jsx)(z.a,{mb:5,colorScheme:"blue",onClick:o,children:"\ubaa9\ub85d \ucd94\uac00\ud558\uae30"}),Object(u.jsxs)(S.a,{fontSize:"20px",color:"tomato",children:["\ud604\uc7ac\ubaa9\ub85d: ",n.length," \uac1c"]})]}),Object(u.jsx)("section",{children:n.length?Object(u.jsxs)(u.Fragment,{children:[n.map((function(e,t){var n=e.name,c=e.email,r=e.body;return Object(u.jsx)(g.Fragment,{children:Object(u.jsx)(L,{index:t,email:c,name:n,body:r})},t)})),a&&Object(u.jsx)(N,{})]}):Object(u.jsx)(A,{count:5})})]})},R=(n(117),function(e){var t=e.index,n=e.imageUrl,c=e.title,r=e.onLoad;return Object(u.jsxs)("div",{className:"image-list-item",children:[Object(u.jsx)("section",{className:"thumb-wrap",children:Object(u.jsx)("img",{src:n,alt:"",onLoad:function(){return null===r||void 0===r?void 0:r()}})}),Object(u.jsxs)("section",{children:[Object(u.jsxs)("p",{children:["index: ",t]}),Object(u.jsx)("p",{children:Array.from({length:10}).map((function(){return c}))})]})]})}),T=[],I=function(){var e=Object(g.useState)([]),t=Object(f.a)(e,2),n=t[0],c=t[1],r=Object(g.useCallback)(Object(m.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:t=e.sent,T=t,i();case 5:case"end":return e.stop()}}),e)}))),[]),i=Object(g.useCallback)((function(){if(T.length){var e=T.splice(0,500);c([].concat(Object(O.a)(n),Object(O.a)(e)))}}),[n]),a=Object(g.useCallback)((function(){p({bottom:600})&&i()}),[i]);return Object(g.useEffect)((function(){r()}),[r]),Object(g.useEffect)((function(){var e=Object(v.a)(a,100);return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[a]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(l.a,{padding:0,marginBottom:5,textAlign:"center",children:[Object(u.jsx)(j.a,{size:"md",mb:5,textAlign:"center",children:"react-virtualized (X)"}),Object(u.jsx)(z.a,{mb:5,colorScheme:"blue",onClick:i,children:"\ubaa9\ub85d \ucd94\uac00\ud558\uae30"}),Object(u.jsxs)(S.a,{fontSize:"20px",color:"tomato",children:["\ud604\uc7ac\ubaa9\ub85d: ",n.length," \uac1c"]})]}),Object(u.jsx)("section",{children:n.length?Object(u.jsx)(u.Fragment,{children:n.map((function(e,t){var n=e.title,c=e.url;return Object(u.jsx)(R,{index:t,imageUrl:c,title:n},t)}))}):Object(u.jsx)(A,{count:5})})]})},U=n(27),X=n(149),G=new U.c({fixedWidth:!0}),J=function(){var e=Object(g.useState)([]),t=Object(f.a)(e,2),n=t[0],c=t[1],r=Object(g.useState)(!1),i=Object(f.a)(r,2),a=i[0],s=i[1],o=Object(g.useRef)(null),b=function(e){var t=e.index,c=e.key,r=e.parent,i=e.style,a=n[t],s=a.email,o=a.name,l=a.body;return Object(u.jsx)(U.b,{cache:G,parent:r,columnIndex:0,rowIndex:t,children:Object(u.jsx)("div",{style:i,children:Object(u.jsx)(L,{index:t,email:s,name:o,body:l})},t)},c)},d=Object(g.useCallback)(Object(m.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,C();case 3:t=e.sent,c([].concat(Object(O.a)(n),Object(O.a)(t))),s(!1);case 6:case"end":return e.stop()}}),e)}))),[n,c]),h=Object(g.useCallback)((function(){if(a)return!1;p({bottom:600})&&d()}),[a,d]);return Object(g.useEffect)((function(){d()}),[]),Object(g.useEffect)((function(){var e=Object(v.a)(h,100);return window.addEventListener("scroll",e,{passive:!0}),function(){return window.removeEventListener("scroll",e)}}),[h]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(l.a,{padding:0,marginBottom:5,textAlign:"center",children:[Object(u.jsxs)(j.a,{size:"md",mb:5,textAlign:"center",children:["react-virtualized (",Object(u.jsx)(X.a,{color:"green.500"}),")"]}),Object(u.jsx)(z.a,{mb:5,colorScheme:"blue",onClick:d,children:"\ubaa9\ub85d \ucd94\uac00\ud558\uae30"}),Object(u.jsxs)(S.a,{fontSize:"20px",color:"tomato",children:["\ud604\uc7ac\ubaa9\ub85d: ",n.length," \uac1c"]})]}),Object(u.jsx)("section",{children:n.length?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(U.e,{children:function(e){var t=e.height,c=e.scrollTop,r=e.isScrolling,i=e.onChildScroll;return Object(u.jsx)(U.a,{disableHeight:!0,children:function(e){var a=e.width;return Object(u.jsx)(U.d,{ref:o,autoHeight:!0,height:t,width:a,isScrolling:r,overscanRowCount:5,onScroll:i,scrollTop:c,rowCount:n.length,rowHeight:G.rowHeight,rowRenderer:b,deferredMeasurementCache:G})}})}}),a&&Object(u.jsx)(N,{})]}):Object(u.jsx)(A,{count:5})})]})},M=new U.c({fixedWidth:!0}),W=[],Y=function(){var e=Object(g.useState)([]),t=Object(f.a)(e,2),n=t[0],c=t[1],r=Object(g.useRef)(null),i=function(e){var t=e.index,c=e.key,r=e.parent,i=e.style,a=n[t],s=a.title,o=a.url;return Object(u.jsx)(U.b,{cache:M,parent:r,columnIndex:0,rowIndex:t,children:function(e){var n=e.measure;return Object(u.jsx)("div",{style:i,children:Object(u.jsx)(R,{index:t,title:s,imageUrl:o,onLoad:n})},t)}},c)},a=Object(g.useCallback)(Object(m.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:t=e.sent,W=t,s();case 5:case"end":return e.stop()}}),e)}))),[]),s=Object(g.useCallback)((function(){if(W.length){var e=W.splice(0,500);c([].concat(Object(O.a)(n),Object(O.a)(e)))}}),[n]),o=Object(g.useCallback)((function(){p({bottom:600})&&s()}),[s]);return Object(g.useEffect)((function(){a()}),[a]),Object(g.useEffect)((function(){var e=Object(v.a)(o,100);return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[o]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(l.a,{padding:0,marginBottom:5,textAlign:"center",children:[Object(u.jsxs)(j.a,{size:"md",mb:5,textAlign:"center",children:["react-virtualized (",Object(u.jsx)(X.a,{color:"green.500"}),")"]}),Object(u.jsx)(z.a,{mb:5,colorScheme:"blue",onClick:s,children:"\ubaa9\ub85d \ucd94\uac00\ud558\uae30"}),Object(u.jsxs)(S.a,{fontSize:"20px",color:"tomato",children:["\ud604\uc7ac\ubaa9\ub85d: ",n.length," \uac1c"]})]}),Object(u.jsx)("section",{children:n.length?Object(u.jsx)(U.e,{children:function(e){var t=e.height,c=e.scrollTop,a=e.isScrolling,s=e.onChildScroll;return Object(u.jsx)(U.a,{disableHeight:!0,children:function(e){var o=e.width;return Object(u.jsx)(U.d,{ref:r,autoHeight:!0,height:t,width:o,overscanRowCount:5,isScrolling:a,onScroll:s,scrollTop:c,rowCount:n.length,rowHeight:M.rowHeight,rowRenderer:i,deferredMeasurementCache:M})}})}}):Object(u.jsx)(A,{count:5})})]})},q=function(){return Object(u.jsx)(s.a,{children:Object(u.jsx)(o.a,{children:Object(u.jsx)(l.a,{width:"700px",padding:"20px 15px",children:Object(u.jsxs)(i.a,{children:[Object(u.jsxs)(l.a,{padding:"0 0 20px 0",marginBottom:5,borderBottom:"solid 1px #bbb",children:[Object(u.jsx)(j.a,{mb:5,textAlign:"center",children:"React virtualized examples"}),Object(u.jsx)(d,{})]}),Object(u.jsxs)(a.d,{children:[Object(u.jsx)(a.b,{exact:!0,path:"/",component:B}),Object(u.jsx)(a.b,{path:"/text-list",component:B}),Object(u.jsx)(a.b,{path:"/image-list",component:I}),Object(u.jsx)(a.b,{path:"/text-list-virtualized",component:J}),Object(u.jsx)(a.b,{path:"/image-list-virtualized",component:Y}),Object(u.jsx)(a.a,{to:"/"})]})]})})})})};n(127);r.a.render(Object(u.jsx)(q,{}),document.getElementById("root"))}},[[128,1,2]]]);
//# sourceMappingURL=main.3caddd2e.chunk.js.map