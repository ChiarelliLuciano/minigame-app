(this["webpackJsonpminigame-app"]=this["webpackJsonpminigame-app"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),l=n.n(c),u=(n(12),n(4)),i=n(1);var o=function(e){var t=e.value,n=e.onClick,a=t?"squares ".concat(t):"{squares}";return r.a.createElement("button",{className:a,onClick:n},t)},m=function(e){var t=e.squares,n=e.onClick;return r.a.createElement("div",{className:"board"},t.map((function(e,t){return r.a.createElement(o,{key:t,value:e,onClick:function(){return n(t)}})})))},s=function(){var e=Object(a.useState)([Array(9).fill(null)]),t=Object(i.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(0),o=Object(i.a)(l,2),s=o[0],v=o[1],f=Object(a.useState)(!0),b=Object(i.a)(f,2),p=b[0],E=b[1],O=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var a=Object(i.a)(t[n],3),r=a[0],c=a[1],l=a[2];if(e[r]&&e[r]===e[c]&&e[r]===e[l])return e[r]}return null}(n[s]),k=p?"X":"O";return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Mini Juego en React: Ta Te Ti"),r.a.createElement(m,{squares:n[s],onClick:function(e){var t=n.slice(0,s+1),a=t[s],r=Object(u.a)(a);O||r[e]||(r[e]=k,c([].concat(Object(u.a)(t),[r])),v(t.length),E(!p))}}),r.a.createElement("div",{className:"info-wrapper"},r.a.createElement("div",null,r.a.createElement("h3",null,"Historial:"),n.map((function(e,t){var n=t?"Ir al Movimiento #".concat(t):"Ir al Comienzo";return r.a.createElement("li",{key:t},r.a.createElement("button",{onClick:function(){return v(e=t),void E(e%2===0);var e}},n))}))),r.a.createElement("h3",null,O?"GANADOR : "+O:"Turno de: "+k)))};l.a.render(r.a.createElement(s,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.b508f0af.chunk.js.map