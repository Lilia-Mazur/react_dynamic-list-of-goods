(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{11:function(t,n,e){"use strict";e.r(n);var o=e(3),c=e.n(o),r=e(4),i=e(1),u=e.n(i);e(9);function s(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var a=e(0),l=u.a.memo((function(t){var n=t.goods;return Object(a.jsx)("ul",{children:n.map((function(t){return Object(a.jsx)("li",{style:{color:t.color},children:t.name},t.id)}))})})),d=function(){var t=Object(i.useState)([]),n=Object(r.a)(t,2),e=n[0],o=n[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{onClick:function(){s().then((function(t){return o(t)}))},type:"button",children:"All"}),Object(a.jsx)("button",{type:"button",onClick:function(){s().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)})).then((function(t){return o(t)}))},children:"5"}),Object(a.jsx)("button",{type:"button",onClick:function(){s().then((function(t){return t.filter((function(t){return"red"===t.color}))})).then((function(t){return o(t)}))},children:"Red"}),Object(a.jsx)(l,{goods:e})]})};c.a.render(Object(a.jsx)(d,{}),document.getElementById("root"))},9:function(t,n,e){}},[[11,1,2]]]);
//# sourceMappingURL=main.94c48fd8.chunk.js.map