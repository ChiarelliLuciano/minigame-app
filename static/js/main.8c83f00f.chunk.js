(this["webpackJsonpminigame-app"]=this["webpackJsonpminigame-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),c=n.n(l),i=(n(13),n(4)),o=n(1);var u=function(e){var t=e.value,n=e.onClick,a=t?"squares ".concat(t):"{squares}";return r.a.createElement("button",{className:a,onClick:n},t)},A=function(e){var t=e.squares,n=e.onClick;return r.a.createElement("div",{className:"board"},t.map((function(e,t){return r.a.createElement(u,{key:t,value:e,onClick:function(){return n(t)}})})))},m=n(7),s=n.n(m),E=function(){var e=Object(a.useState)([Array(9).fill(null)]),t=Object(o.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(0),u=Object(o.a)(c,2),m=u[0],E=u[1],f=Object(a.useState)(!0),v=Object(o.a)(f,2),O=v[0],b=v[1],p=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var a=Object(o.a)(t[n],3),r=a[0],l=a[1],c=a[2];if(e[r]&&e[r]===e[l]&&e[r]===e[c])return e[r]}return null}(n[m]),d=O?"X":"O";return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Mini Juego en React: Ta Te Ti"),r.a.createElement(A,{squares:n[m],onClick:function(e){var t=n.slice(0,m+1),a=t[m],r=Object(i.a)(a);p||r[e]||(r[e]=d,l([].concat(Object(i.a)(t),[r])),E(t.length),b(!O))}}),r.a.createElement("div",{className:"info-wrapper"},r.a.createElement("div",null,r.a.createElement("h3",null,"Historial:"),n.map((function(e,t){var n=t?"Ir al Movimiento #".concat(t):"Ir al Comienzo";return r.a.createElement("li",{key:t},r.a.createElement("button",{onClick:function(){return E(e=t),void b(e%2===0);var e}},n))}))),r.a.createElement("h3",null,p?"GANADOR : "+p:"Turno de: "+d)),r.a.createElement("div",null,r.a.createElement("img",{style:{marginLeft:"125px"},src:s.a,alt:"QR"}),r.a.createElement("h3",{style:{marginLeft:"110px"}},"Abre este juego en tu tel\xe9fono!")))};c.a.render(r.a.createElement(E,null),document.getElementById("root"))},7:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQgAAAEIAQMAAACZOPi8AAAABlBMVEX///8AAABVwtN+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA10lEQVRoge2VQQ7EIAwD/f9PZ9WNA6FVL7vHiZFSGuZkESONRqPRH4rUtdP1idZBElW/zatE6xOJ7B5rcWBitYdIn3yH8ERxh21cwvna1ksmM4jm3HFvnmIQdkg1VNLdLxaRXin9iv3HJcqsxibMJGxUzxedlqGIdVqH9RRBCUUB6yblwhJpWhh34N4mCkXsXNkbcQlfodyFDZOoRAelXaBEeSSfOGB6JrMI11hx+3AMRnii4m2ioIQ9248QnDhM6p7RCNfyTRkvWKJmqI6ODOYRo9Fo9IM+U/g+T0mX5CMAAAAASUVORK5CYII="},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.8c83f00f.chunk.js.map