(this.webpackJsonpcaroselus=this.webpackJsonpcaroselus||[]).push([[0],{24:function(e,n,t){},25:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c,r,i,a,s=t(1),l=t.n(s),o=t(15),u=t.n(o),d=(t(24),t(2)),j=t(3),b=(t(25),t(4)),x=t.n(b),f=t(9),h=t(6),O=t(0),p=function(e){var n=e.children;return Object(O.jsx)("span",{className:"visually-hidden",children:n})},m=j.a.ul(c||(c=Object(d.a)(["\n    display: flex;\n    flex-direction: row;\n    list-style-type: none;\n    padding: 0;\n    margin: 0;\n    justify-content: center;\n    align-items: center\n"]))),v=j.a.button(r||(r=Object(d.a)(["\n    color: ","\n\n    ","\n"])),(function(e){return e.active?"red":"black"}),(function(e){return e.active&&"\n        border: 1px solid #999999;\n        background-color: #cccccc;\n    "})),g=function(e){var n=e.currentIndex,t=e.range,c=e.onClick;return Object(O.jsx)(m,{"aria-label":"Pagina\xe7\xe3o do carrossel",children:new Array(t).fill(0).map((function(e,t){var r=t===n;return Object(O.jsx)("li",{children:Object(O.jsxs)(v,{active:r,"aria-disabled":r,className:r?"caroselus-active-dot current":"caroselus-inactive-dot",onClick:function(){return c(t)},"data-slide":t,children:[Object(O.jsx)(p,{children:"P\xe1gina "}),t+1,Object(O.jsx)(p,{children:r?" selecionada.":" aperte para selecionar"})]},t)})}))})},k=function(e){var n=e.items,t=e.currentBlock;return Object(O.jsx)(m,{children:n.map((function(e,n){return Object(O.jsx)("li",{id:"caroselus-item".concat(n,"-block").concat(t),style:{flex:1},children:e},n)}))})},A=function(e){var n=e.id,t=e.text,c=e.hidden;return Object(O.jsx)("div",{id:n,"aria-live":"polite","aria-atomic":"true",className:c?"visually-hidden":"",children:t})},y=j.a.div(i||(i=Object(d.a)(["\n    display: flex;\n    flex-direction: column;\n    &:focus {\n        outline: none;\n    }\n\n    & div {\n        flex: 1;\n        border: 1px solid #ccc;\n    }\n"]))),C=function(e){var n=e.items,t=e.perPage,c=e.infinite,r=Object(s.useState)(0),i=Object(h.a)(r,2),a=i[0],l=i[1],o=Object(s.useState)(0),u=Object(h.a)(o,2),d=u[0],j=u[1],b=Object(s.useState)(!0),m=Object(h.a)(b,2),v=m[0],C=m[1],I=Math.ceil(n.length/t),N=n.reduce((function(e,c,r){return r%t===0&&e.push(n.slice(r,r+t)),e}),[]),P=!c&&a===I-1,S=!c&&0===a,w=function(e){e.preventDefault(),e.stopPropagation()},E=function(e){w(e),a<N.length-1?M(a+1):M(0)},B=function(e){w(e),M(a>0?a-1:N.length-1)},R=function(){var e=Object(f.a)(x.a.mark((function e(n,t){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(t);case 2:return c=document.getElementById("caroselus-item".concat(n,"-block").concat(t)),e.next=5,c.firstElementChild.focus();case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),M=function(){var e=Object(f.a)(x.a.mark((function e(n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a!==n){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,R(0,n);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),D=function(){return alert("help modal")};return Object(O.jsxs)(y,{tabIndex:-1,onKeyDown:function(e){return 37===e.keyCode?B(e):39===e.keyCode?E(e):38===e.keyCode?function(e){w(e),d===N[a].length-1?c?(R(0,a===I-1?0:a+1),j(0)):j(N[a].length-1):(j(d+1),R(d+1,a))}(e):40===e.keyCode?function(e){w(e),0===d?c?(0===a?R(N[I-1].length-1,I-1):R(N[a].length-1,a-1),j(N[a].length-1)):j(0):(j(d-1),R(d-1,a))}(e):191===e.keyCode?D():null},id:"caroselus","aria-labelledby":"#caroselus-label",children:[Object(O.jsxs)(p,{children:[Object(O.jsx)("span",{id:"caroselus-label",children:"Carrossel vitrine de promo\xe7\xf5es"}),Object(O.jsx)(A,{text:" P\xe1gina ".concat(a+1," de ").concat(N.length)})]}),Object(O.jsx)("div",{id:"caroselus-animation-bar",children:Object(O.jsx)("button",{onClick:function(){return C(!v)},children:"".concat(v?"Desabilitar":"Habilitar"," anima\xe7\xf5es")})}),Object(O.jsx)("div",{id:"caroselus-content",children:Object(O.jsx)(k,{items:N[a],currentBlock:a})}),Object(O.jsxs)("div",{id:"caroselus-controls",children:[Object(O.jsx)("button",{onClick:B,disabled:S,children:"Anterior"}),Object(O.jsx)("button",{onClick:E,disabled:P,children:"Pr\xf3ximo"})]}),Object(O.jsx)("div",{id:"caroselus-bar",children:Object(O.jsx)(g,{range:I,onClick:M,currentIndex:a})}),Object(O.jsx)("div",{id:"caroselus-help",children:Object(O.jsx)("button",{onClick:D,children:"Ajuda"})})]})},I=new(t(19).LoremIpsum)({sentencesPerParagraph:{max:6,min:4}}),N=j.a.button(a||(a=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n"]))),P=function(e){var n=e.title,t=e.action,c=e.idx;return Object(O.jsxs)(N,{onClick:t,children:[Object(O.jsx)("h3",{children:n}),Object(O.jsx)("p",{children:w[c]}),Object(O.jsx)("span",{children:"Confira!"})]})},S=["IBIZA","SAO PAULO","RIO DE JANEIRO","MACEIO","ALAGOAS","BAHIA","MINAS GERAIS","NOVA YORK","MANAUS","ACRE","WASHINGTON","NEBRASKA"],w=S.map((function(e){return I.generateParagraphs(1)})),E=S.map((function(e,n){return Object(O.jsx)(P,{title:e,idx:n})}));var B=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(C,{items:E,perPage:3,infinite:!0})})};u.a.render(Object(O.jsx)(l.a.StrictMode,{children:Object(O.jsx)(B,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.15896302.chunk.js.map