(this["webpackJsonpredux-cart"]=this["webpackJsonpredux-cart"]||[]).push([[0],[,,,,function(t,e,c){t.exports={item:"CartItem_item__1zMOi",details:"CartItem_details__2_Z3n",quantity:"CartItem_quantity__DfEXm",price:"CartItem_price__2Nl0j",itemprice:"CartItem_itemprice__j9ZSt",actions:"CartItem_actions__UwVPJ"}},,function(t,e,c){t.exports={card_title:"ProductItem_card_title__Oqort",item:"ProductItem_item__WYS0J",price:"ProductItem_price__1GiPR",actions:"ProductItem_actions__14Yr-"}},,,function(t,e,c){t.exports={notification:"Notification_notification__3D5S5",error:"Notification_error__2ILHS",success:"Notification_success__3Ww1I"}},,,function(t,e,c){t.exports={button:"CartButton_button__3nU_b",badge:"CartButton_badge__3njqM"}},function(t,e,c){t.exports={title:"Products_title__2MT0X",products:"Products_products__1PCvW"}},,function(t,e,c){t.exports={card:"Card_card__1m44e"}},function(t,e,c){t.exports={cart:"Cart_cart__3GqLz"}},function(t,e,c){t.exports={header:"MainHeader_header__k5Wsz"}},,,,,,,,,,,function(t,e,c){},,,function(t,e,c){"use strict";c.r(e);var r=c(8),n=c.n(r),i=c(2),a=c(5),s=Object(a.b)({name:"ui",initialState:{cartIsVisible:!1,notification:null},reducers:{toggle:function(t){t.cartIsVisible=!t.cartIsVisible},showNotification:function(t,e){t.notification={status:e.payload.status,title:e.payload.title,message:e.payload.message}}}}),o=s.actions,u=s,d=Object(a.b)({name:"cart",initialState:{items:[],totalQty:0,changed:!1},reducers:{replaceCart:function(t,e){t.totalQty=e.payload.totalQty,t.items=e.payload.items},addItemToCart:function(t,e){var c=e.payload,r=t.items.find((function(t){return t.id===c.id}));t.totalQty++,t.changed=!0,r?(r.qty++,r.totalPrice=r.totalPrice+c.price):t.items.push({id:c.id,price:c.price,qty:1,totalPrice:c.price,name:c.title})},removeItemFromCart:function(t,e){var c=e.payload,r=t.items.find((function(t){return t.id===c}));t.totalQty--,t.changed=!0,1===r.qty?t.items=t.items.filter((function(t){return t.id!==c})):(r.qty--,r.totalPrice=r.totalPrice-r.price)}}}),l=d.actions,j=d,b=Object(a.a)({reducer:{ui:u.reducer,cart:j.reducer}}),f=(c(28),c(1)),p=c(15),h=c.n(p),m=c(0),x=function(t){return Object(m.jsx)("section",{className:"".concat(h.a.card," ").concat(t.className?t.className:""),children:t.children})},O=c(16),_=c.n(O),y=c(4),v=c.n(y),g=function(t){var e=t.item,c=e.title,r=e.qty,n=e.total,a=e.price,s=e.id,o=Object(i.b)();return Object(m.jsxs)("li",{className:v.a.item,children:[Object(m.jsxs)("header",{children:[Object(m.jsx)("h3",{children:c}),Object(m.jsxs)("div",{className:v.a.price,children:["$",n.toFixed(2)," ",Object(m.jsxs)("span",{className:v.a.itemprice,children:["($",a.toFixed(2),"/item)"]})]})]}),Object(m.jsxs)("div",{className:v.a.details,children:[Object(m.jsxs)("div",{className:v.a.quantity,children:["x ",Object(m.jsx)("span",{children:r})]}),Object(m.jsxs)("div",{className:v.a.actions,children:[Object(m.jsx)("button",{onClick:function(){o(l.removeItemFromCart(s))},children:"-"}),Object(m.jsx)("button",{onClick:function(){o(l.addItemToCart({id:s,title:c,price:a}))},children:"+"})]})]})]})},C=function(t){var e=Object(i.c)((function(t){return t.cart.items}));return console.log(e),Object(m.jsxs)(x,{className:_.a.cart,children:[Object(m.jsx)("h2",{children:"Your Shopping Cart"}),Object(m.jsx)("ul",{children:e.map((function(t){return Object(m.jsx)(g,{item:{id:t.id,title:t.name,qty:t.qty,total:t.totalPrice,price:t.price}},t.id)}))})]})},N=c(12),w=c.n(N),k=function(t){var e=Object(i.b)(),c=Object(i.c)((function(t){return t.cart.totalQty}));return Object(m.jsxs)("button",{className:w.a.button,onClick:function(){e(o.toggle())},children:[Object(m.jsx)("span",{children:"My Cart"}),Object(m.jsx)("span",{className:w.a.badge,children:c})]})},I=c(17),P=c.n(I),S=function(t){return Object(m.jsxs)("header",{className:P.a.header,children:[Object(m.jsx)("h1",{children:"ReduxCart"}),Object(m.jsx)("nav",{children:Object(m.jsx)("ul",{children:Object(m.jsx)("li",{children:Object(m.jsx)(k,{})})})})]})},q=function(t){return Object(m.jsxs)(f.Fragment,{children:[Object(m.jsx)(S,{}),Object(m.jsx)("main",{children:t.children})]})},T=c(6),E=c.n(T),F=function(t){var e=t.title,c=t.price,r=t.description,n=t.id,a=Object(i.b)();return Object(m.jsx)("li",{className:E.a.item,children:Object(m.jsxs)(x,{children:[Object(m.jsxs)("header",{children:[Object(m.jsx)("h3",{className:E.a.card_title,children:e}),Object(m.jsxs)("div",{className:E.a.price,children:["$",c.toFixed(2)]})]}),Object(m.jsx)("p",{children:r}),Object(m.jsx)("div",{className:E.a.actions,children:Object(m.jsx)("button",{onClick:function(){a(l.addItemToCart({id:n,title:e,price:c}))},children:"Add to Cart"})})]})})},Q=c(13),J=c.n(Q),M=[{id:1,price:25,title:"The Staub Cookbook",description:"Crafted in France, Staub cast-iron cookware is prized by top chefs and home cooks around the world"},{id:2,price:18,title:"Joy of Cooking",description:"The most beloved recipes from past editions and includes quick, healthy recipes for the way we cook today"}],V=function(t){return Object(m.jsxs)("section",{className:J.a.products,children:[Object(m.jsx)("h3",{className:J.a.title,children:"Choose your next favorite cookbook"}),Object(m.jsx)("ul",{children:M.map((function(t){return Object(m.jsx)(F,{id:t.id,title:t.title,price:t.price,description:t.description},t.id)}))})]})},z=c(9),W=c.n(z),B=function(t){var e="";"error"===t.status&&(e=W.a.error),"success"===t.status&&(e=W.a.success);var c="".concat(W.a.notification," ").concat(e);return Object(m.jsxs)("section",{className:c,children:[Object(m.jsx)("h2",{children:t.title}),Object(m.jsx)("p",{children:t.message})]})},U=c(3),Y=c.n(U),$=c(7),D=!0;var G=function(){var t=Object(i.b)(),e=Object(i.c)((function(t){return t.ui.cartIsVisible})),c=Object(i.c)((function(t){return t.ui.notification})),r=Object(i.c)((function(t){return t.cart}));return Object(f.useEffect)((function(){t(function(){var t=Object($.a)(Y.a.mark((function t(e){var c,r;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=function(){var t=Object($.a)(Y.a.mark((function t(){var e,c;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://books-6064e-default-rtdb.firebaseio.com/cart.json");case 2:if((e=t.sent).ok){t.next=5;break}throw new Error("Could not get cart data!");case 5:return t.next=7,e.json();case 7:return c=t.sent,t.abrupt("return",c);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),t.prev=1,t.next=4,c();case 4:r=t.sent,e(l.replaceCart({items:r.items||[],totalQty:r.totalQty})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(o.showNotification({status:"error",title:"Error!",message:"Something went wrong... Try later"}));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}())}),[t]),Object(f.useEffect)((function(){D?D=!1:r.changed&&t(function(t){return function(){var e=Object($.a)(Y.a.mark((function e(c){var r;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(o.showNotification({status:"pending",title:"Sending...",message:"Sending cart data!"})),r=function(){var e=Object($.a)(Y.a.mark((function e(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://books-6064e-default-rtdb.firebaseio.com/cart.json",{method:"PUT",body:JSON.stringify(t)});case 2:if(e.sent.ok){e.next=5;break}throw new Error("Sending cart data failed!");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.prev=2,e.next=5,r();case 5:c(o.showNotification({status:"success",title:"Success!",message:"Cart data successfully updated!"})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),c(o.showNotification({status:"error",title:"Error!",message:"Something went wrong... Try later"}));case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}()}(r))}),[r,t]),Object(m.jsx)(f.Fragment,{children:Object(m.jsxs)(q,{children:[e&&Object(m.jsx)(C,{}),c&&Object(m.jsx)(B,{status:c.status,title:c.title,message:c.message}),Object(m.jsx)(V,{})]})})};n.a.render(Object(m.jsx)(i.a,{store:b,children:Object(m.jsx)(G,{})}),document.getElementById("root"))}],[[31,1,2]]]);
//# sourceMappingURL=main.416a6a09.chunk.js.map