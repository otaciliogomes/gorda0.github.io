(this.webpackJsonpcaroselus=this.webpackJsonpcaroselus||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c,r,i,a,s,o=n(1),l=n.n(o),u=n(26),j=n.n(u),d=(n(35),n(6)),b=n(3),x=n(4),O=(n(36),n(5)),f=n.n(O),h=n(7),p=x.a.span(c||(c=Object(b.a)(["\n    clip: rect(0 0 0 0);\n    clip-path: inset(50%);\n    height: 1px;\n    overflow: hidden;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n"]))),v=x.a.ul(r||(r=Object(b.a)(["\n    display: flex;\n    flex-direction: row;\n    list-style-type: none;\n    padding: 0;\n    margin: 0;\n    justify-content: center;\n    align-items: stretch\n"]))),m=n(0),g=x.a.button(i||(i=Object(b.a)(["\n    color: ","\n\n    ","\n"])),(function(e){return e.active?"red":"black"}),(function(e){return e.active&&"\n        border: 1px solid #999999;\n        background-color: #cccccc;\n    "})),A=function(e){var t=e.currentIndex,n=e.range,c=e.onClick;return Object(m.jsx)(v,{"aria-label":"Pagina\xe7\xe3o do carrossel",children:new Array(n).fill(0).map((function(e,n){var r=n===t;return Object(m.jsx)("li",{children:Object(m.jsxs)(g,{active:r,"aria-disabled":r,className:r?"caroselus-active-dot current":"caroselus-inactive-dot",onClick:function(){return c(n)},"data-slide":n,children:[Object(m.jsx)(p,{children:"P\xe1gina "}),n+1,Object(m.jsx)(p,{children:r?" selecionada.":" aperte para selecionar"})]},n)},n)}))})},k=function(e){var t=e.items,n=e.currentBlock;return Object(m.jsx)(v,{children:t.map((function(e,t){return Object(m.jsx)("li",{id:"caroselus-item".concat(t,"-block").concat(n),style:{flex:1},children:e},t)}))})},I=function(e){var t=e.id,n=e.text,c=e.assertive;return Object(m.jsx)("div",{id:t,"aria-live":c?"assertive":"polite","aria-atomic":"true",children:n})},y=function(){var e=Object(h.a)(f.a.mark((function e(t,n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.preventDefault();case 2:return e.next=4,t.stopPropagation();case 4:return e.abrupt("return",n());case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),C=x.a.div(a||(a=Object(b.a)(["\n    display: flex;\n    flex-direction: column;\n    &:focus {\n        outline: none;\n    }\n\n    & div {\n        border: 1px solid #ccc;\n    }\n\n    & .inverser {\n        display: flex;\n        flex-direction: row-reverse;\n    }\n"]))),w=function(e){var t=e.items,n=e.perPage,c=e.infinite,r=Object(o.useState)(0),i=Object(d.a)(r,2),a=i[0],s=i[1],l=Object(o.useState)(null),u=Object(d.a)(l,2),j=u[0],b=u[1],x=Object(o.useState)(!0),O=Object(d.a)(x,2),v=O[0],g=O[1],w=Object(o.useState)(c||!1),P=Object(d.a)(w,2),S=P[0],N=P[1],B=function(e,t){return e.reduce((function(n,c,r){return r%t===0&&n.push(e.slice(r,r+t)),n}),[])}(t,n),E=B.length,R=!S&&a===E-1,D=!S&&0===a,M=function(){var e=Object(h.a)(f.a.mark((function e(t,n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(n);case 2:return e.next=4,document.getElementById("caroselus-item".concat(t,"-block").concat(n)).firstElementChild.focus();case 4:return e.next=6,b(t);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),G=function(){var e=Object(h.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,M(0,t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(){return a<E-1?G(a+1):S?G(0):null},J=function(){return a>0?G(a-1):S?G(E-1):null},K=function(){return g(!v)},L=function(){return N(!S)},U=function(){return alert("help modal")},W={37:J,38:function(){var e=j+1,t=a+1;if(null==j)b(0);else if(j===B[a].length-1){if(a===E-1){if(!S)return;M(0,0)}else M(0,t);b(0)}else b(e),M(e,a)},39:H,40:function(){if(null==j)b(0);else if(0===j){if(0===a){if(!S)return;M(B[E-1].length-1,E-1)}else M(B[a].length-1,a-1);b(B[a].length-1)}else b(j-1),M(j-1,a)},65:K,73:L,191:U};return Object(m.jsxs)(C,{tabIndex:0,onKeyDown:function(e){return e.keyCode in W?y(e,W[e.keyCode]):null},id:"caroselus","aria-labelledby":"caroselus-label",children:[Object(m.jsxs)(p,{children:[Object(m.jsx)("span",{id:"caroselus-label",children:"Carrossel vitrine de promo\xe7\xf5es"}),Object(m.jsx)(I,{text:"P\xe1gina ".concat(a+1," de ").concat(E)}),Object(m.jsx)(I,{text:"Item ".concat(j+1," de ").concat(B[a].length)}),Object(m.jsx)(I,{assertive:!0,text:"Apresenta\xe7\xe3o infinita ".concat(S?"ativada":"desativada")}),Object(m.jsx)(I,{assertive:!0,text:"Anima\xe7\xf5es ".concat(v?"ativada":"desativada")})]}),Object(m.jsx)("div",{id:"caroselus-presentation-bar",className:"inverser",children:Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{onClick:L,children:"".concat(S?"Desabilitar":"Habilitar"," apresenta\xe7\xe3o infinita")}),Object(m.jsx)("button",{onClick:K,children:"".concat(v?"Desabilitar":"Habilitar"," anima\xe7\xf5es")})]})}),Object(m.jsx)("div",{id:"caroselus-content",children:Object(m.jsx)(k,{items:B[a],currentBlock:a})}),Object(m.jsxs)("div",{id:"caroselus-controls",children:[Object(m.jsx)("button",{onClick:J,disabled:D,children:"Anterior"}),Object(m.jsx)("button",{onClick:H,disabled:R,children:"Pr\xf3ximo"})]}),Object(m.jsx)("div",{id:"caroselus-bar",children:Object(m.jsx)(A,{range:E,onClick:G,currentIndex:a})}),Object(m.jsx)("div",{id:"caroselus-help",className:"inverser",children:Object(m.jsx)("button",{onClick:U,children:"Ajuda"})})]})},P=n(30),S=n(51),N=function(e){return"https://picsum.photos/v2/list?page=".concat((t=e,Math.floor(Math.random()*t*10)+1),"&limit=").concat(e);var t},B=new P.LoremIpsum({sentencesPerParagraph:{max:4,min:4}}),E=x.a.button(s||(s=Object(b.a)(["\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%\n"]))),R=function(e){var t,n=e.title,c=e.action,r=e.idx,i=e.imgId;return Object(m.jsxs)(E,{onClick:c,children:[Object(m.jsx)("img",{src:(t=i,"https://picsum.photos/id/".concat(t,"/120/120")),alt:""}),Object(m.jsx)("strong",{children:n}),Object(m.jsx)("p",{children:M[r]}),Object(m.jsx)("span",{children:"Confira!"})]})},D=["IBIZA","SAO PAULO","RIO DE JANEIRO","MACEIO","ALAGOAS","BAHIA","MINAS GERAIS","NOVA YORK","MANAUS","ACRE","WASHINGTON","NEBRASKA","PRAIA GRANDE"],M=D.map((function(e){return B.generateWords(10)})),G=function(e){return D.map((function(t,n){return Object(m.jsx)(R,{title:t,idx:n,imgId:e.length&&e[n].id})}))};var H=function(){var e=Object(o.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1];return Object(o.useEffect)((function(){S.get(N(D.length)).then((function(e){c(e.data)}))}),[]),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"POC Carrossel"}),Object(m.jsx)("button",{children:"Bot\xe3o teste 01"}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{children:"Bot\xe3o teste 02"}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:B.generateParagraphs(1)})," ",Object(m.jsx)("br",{}),Object(m.jsx)(w,{items:G(n),perPage:4,infinite:!0,images:n}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:B.generateParagraphs(1)})," ",Object(m.jsx)("br",{}),Object(m.jsx)("button",{children:"Bot\xe3o teste 03"}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{children:"Bot\xe3o teste 04"}),Object(m.jsx)("br",{})]})};j.a.render(Object(m.jsx)(l.a.StrictMode,{children:Object(m.jsx)(H,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.3b41c0da.chunk.js.map