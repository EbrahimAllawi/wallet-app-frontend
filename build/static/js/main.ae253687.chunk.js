(this["webpackJsonpwallet-app-frontend"]=this["webpackJsonpwallet-app-frontend"]||[]).push([[0],{119:function(e,t,n){},132:function(e,t,n){},138:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(0),r=n(22),o=n.n(r),i=(n(117),n(118),n(23)),s=(n(119),n(17)),l=n.n(s),u=n(27),d=n(33),p=n(34),j=n(80),f=n(78),b=(n(93),n(70)),g=n.n(b),h=n(149),m=n(51),O=n(146),y=function(){function e(){Object(d.a)(this,e)}return Object(p.a)(e,[{key:"showFeedback",value:function(){if("error"===e.setting.typeMessage){console.log("message");var t=h.b.error(e.setting.message);return setTimeout(t,5e3),""}if("success"===e.setting.typeMessage){var n=h.b.success(e.setting.message);return setTimeout(n,5e3),""}}}],[{key:"setSetting",set:function(t){e.setting=t}}]),e}();y.setting=void 0;var v=function(){function e(){Object(d.a)(this,e)}return Object(p.a)(e,[{key:"showFeedback",value:function(){e.notification(Object.assign(e.setting))}}],[{key:"setSetting",set:function(t){e.setting=t}}]),e}();v.typeNotifiction=void 0,v.option=void 0,v.setting=void 0,v.notification=function(e){var t="open".concat(Date.now());m.a;O.a.open(Object.assign(e))};var x,k,w=function(){function e(){Object(d.a)(this,e),e.instans+=1,console.log(e.instans)}return Object(p.a)(e,[{key:"feedBackMe",value:function(){e.feedback.showFeedback()}}],[{key:"instanc",value:function(t){return null==e._instanc&&(e._instanc=new e),e.feedback=t,e._instanc}}]),e}();function N(e,t){var n={body:t};if("Notification"in window)if("granted"===Notification.permission)new Notification(e,n);else"denied"!==Notification.permission&&Notification.requestPermission().then((function(t){if("granted"===t)new Notification(e,n)}));else alert("This browser does not support desktop notification")}w.feedback=void 0,w._instanc=void 0,w.setting=void 0,w.instans=0,function(e){function t(e){var t=g.a.get(e);return void 0===t?null:t}e.setSessionCookieToken=function(e){var t=new Date;t.setMinutes(t.getMinutes()+1440),document.cookie="token=".concat(e.token,"; expires=").concat(t.toUTCString(),"; path=/; Secure; 127.0.0.1")},e.getCookie=t;var n=function(){function e(){Object(d.a)(this,e)}return Object(p.a)(e,[{key:"deleteCookie",value:function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:e.t0=e.sent,document.cookie=e.t0+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.location.href="/";case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}();e.LogOut=n,e.redirectToMain=function(){null===t("token")&&(console.log("app"),document.location.href="/")},e.redirectToApp=function(){null!==t("token")&&(document.location.href="/wallet-app")}}(x||(x={})),function(e){var t=function(){function e(){Object(d.a)(this,e)}return Object(p.a)(e,[{key:"getStatusIntrernet",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://ipv4.icanhazip.com");case 3:return t=e.sent,e.abrupt("return",t.status>=200&&t.status<300);case 7:return e.prev=7,e.t0=e.catch(0),n=w.instanc(new y),y.setSetting={typeMessage:"error",message:"check from Internet"},n.feedBackMe(),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()}]),e}();e.Internet=t}(k||(k={}));var C=n(141),S=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(e,a){var c;return Object(d.a)(this,n),(c=t.call(this)).username=void 0,c.password=void 0,c.username=e,c.password=a,c}return Object(p.a)(n,[{key:"rigister",value:function(){var e=Object(u.a)(l.a.mark((function e(t,n){var a,c,r,o,i,s,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(),e.next=3,this.getStatusIntrernet();case 3:if(a=e.sent,console.log(a),a){e.next=8;break}return n(),e.abrupt("return","");case 8:if(c=this.username.current.value,r=this.password.current.value,console.log(c,r),e.prev=11,""!==c){e.next=20;break}return o=w.instanc(new y),y.setSetting={typeMessage:"error",message:"user name is empty"},o.feedBackMe(),n(),e.abrupt("return","");case 20:if(""!==r){e.next=26;break}return o=w.instanc(new y),y.setSetting={typeMessage:"error",message:"password name is empty"},o.feedBackMe(),n(),e.abrupt("return","");case 26:return(i=new Headers).append("Content-Type","application/json"),s=JSON.stringify({username:c,password:r}),u={method:"POST",headers:i,body:s},e.next=32,fetch(String("https://wallet-app1-js.herokuapp.com/rigister"),u).then((function(e){return e.json()})).then((function(e){if("error"===e.status){var t=w.instanc(new y);return y.setSetting={typeMessage:"error",message:e.error},t.feedBackMe(),n(),""}console.log(e),x.setSessionCookieToken(e),n(),N("Rigister",e.notification),document.location.href="/wallet-app"})).catch((function(e){console.log(e.name);var t=w.instanc(new y);return y.setSetting={typeMessage:"error",message:e.name},t.feedBackMe(),n(),""}));case 32:e.next=41;break;case 34:return e.prev=34,e.t0=e.catch(11),o=w.instanc(new y),y.setSetting={typeMessage:"error",message:e.t0.name},o.feedBackMe(),n(),e.abrupt("return","");case 41:case"end":return e.stop()}}),e,this,[[11,34]])})));return function(t,n){return e.apply(this,arguments)}}()}]),n}(k.Internet),E=x.redirectToApp;var I=function(){var e=Object(c.useState)("none"),t=Object(i.a)(e,2),n=t[0],r=t[1];function o(){r("block")}function s(){r("none")}Object(c.useEffect)((function(){E()}));var l=Object(c.useRef)(null),u=Object(c.useRef)(null),d=new S(l,u);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"operation",children:"Rigister"}),Object(a.jsxs)("div",{className:"rigisterLogin",children:[Object(a.jsxs)("div",{id:"username",className:"inputs username",children:[Object(a.jsx)("div",{children:"User Name"}),Object(a.jsx)("input",{ref:l,placeholder:"write full name",className:"input",type:"text"})]}),Object(a.jsxs)("div",{className:"inputs password",children:[Object(a.jsx)("div",{children:"Password"}),Object(a.jsx)("input",{ref:u,id:"password",className:"input",type:"password"})]}),Object(a.jsx)(C.a,{style:{display:n}}),Object(a.jsx)(m.a,{type:"primary",onClick:function(){d.rigister(o,s)},children:"rigister"})]})]})};n(129).config();var P=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(e,a){var c;return Object(d.a)(this,n),(c=t.call(this)).username=void 0,c.password=void 0,c.username=e,c.password=a,c}return Object(p.a)(n,[{key:"login",value:function(){var e=Object(u.a)(l.a.mark((function e(t,n){var a,c,r,o,i,s,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(),e.next=3,this.getStatusIntrernet();case 3:if(a=e.sent,console.log(a),a){e.next=8;break}return n(),e.abrupt("return","");case 8:if(c=this.username.current.value,r=this.password.current.value,e.prev=10,""!==c){e.next=17;break}return o=w.instanc(new y),y.setSetting={typeMessage:"error",message:"user name is empty"},o.feedBackMe(),n(),e.abrupt("return","");case 17:if(""!==r){e.next=23;break}return o=w.instanc(new y),y.setSetting={typeMessage:"error",message:"password name is empty"},o.feedBackMe(),n(),e.abrupt("return","");case 23:return console.log(c,r),(i=new Headers).append("Content-Type","application/json"),s=JSON.stringify({username:c,password:r}),u={method:"POST",headers:i,body:s},e.next=30,fetch(String("https://wallet-app1-js.herokuapp.com/login"),u).then((function(e){return e.json()})).then((function(e){if("error"===e.status){if("Operation `users.findOne()` buffering timed out after 10000ms"===e.error){var t=w.instanc(new y);return y.setSetting={typeMessage:"error",message:"The process took more time than it should"},t.feedBackMe(),""}t=w.instanc(new y);return y.setSetting={typeMessage:"error",message:e.error},t.feedBackMe(),console.log(e.error),""}console.log(e),N("Login",e.notification),x.setSessionCookieToken(e),document.location.href="/wallet-app"})).catch((function(e){return console.log("error",e)}));case 30:n(),e.next=35;break;case 33:e.prev=33,e.t0=e.catch(10);case 35:case"end":return e.stop()}}),e,this,[[10,33]])})));return function(t,n){return e.apply(this,arguments)}}()}]),n}(k.Internet),_=x.redirectToApp;var T=function(){var e=Object(c.useState)("none"),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(c.useRef)(null),s=Object(c.useRef)(null),l=new P(o,s);function u(){r("block")}function d(){r("none")}return Object(c.useEffect)((function(){_()})),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"operation",children:"Login"}),Object(a.jsxs)("div",{className:"rigisterLogin",children:[Object(a.jsxs)("div",{className:"inputs username",children:[Object(a.jsx)("div",{children:"User Name"}),Object(a.jsx)("input",{ref:o,id:"username",placeholder:"write full name",className:"input",type:"text"})]}),Object(a.jsxs)("div",{className:"inputs password",children:[Object(a.jsx)("div",{children:"Password"}),Object(a.jsx)("input",{ref:s,id:"password",className:"input",type:"password"})]}),Object(a.jsx)(C.a,{style:{display:n}}),Object(a.jsx)(m.a,{type:"primary",onClick:function(){l.login(u,d)},children:"Login"})]})]})},M=n(143),B=(n(132),n(45)),R=n(25),D="pays",F="delete pay",L="edit_Pay",A="add pay";var V="catch",W="delete catch",J="edit catch",U="add catch";var H=x.redirectToMain;function Y(){return(Y=Object(u.a)(l.a.mark((function e(t){var n,a,c,r,o,i,s,u,d;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=k.Internet,e.next=3,(new n).getStatusIntrernet();case 3:if(a=e.sent,console.log(a),a){e.next=8;break}return t(!1),e.abrupt("return","");case 8:return c=new x.LogOut,r="",e.prev=10,(o=new Headers).append("Content-Type","application/json"),i=g.a.get("token"),s=JSON.stringify({token:i}),u={method:"POST",headers:o,body:s},e.next=18,fetch(String("".concat("https://wallet-app1-js.herokuapp.com/infoUser")),u).then((function(e){return e.json()})).then((function(e){if(console.log("start"),"jwt expired"===e.status){var n=w.instanc(new y);return y.setSetting={typeMessage:"error",message:e.message},n.feedBackMe(),c.deleteCookie("token"),H(),""}console.log(e.dataUserToSent),t(!1),r=e.dataUserToSent})).catch((function(e){return console.log("error",e),e(e.name)}));case 18:e.next=27;break;case 20:return e.prev=20,e.t0=e.catch(10),console.log(e.t0.message),d=w.instanc(new y),y.setSetting={typeMessage:"error",message:e.t0.message},d.feedBackMe(),e.abrupt("return","");case 27:return e.abrupt("return",r);case 28:case"end":return e.stop()}}),e,null,[[10,20]])})))).apply(this,arguments)}var q=Object(R.b)((function(e){return{oper:e}}),(function(e){return{loadPays:function(t){return e({type:D,Pays:t})},loadCatch:function(t){return e({type:V,Catch:t})}}}))((function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),r=n[0],o=n[1],s=Object(c.useState)(!0),l=Object(i.a)(s,2),u=l[0],d=l[1],p=Object(c.useState)(0),j=Object(i.a)(p,2),f=j[0],b=j[1],g=Object(c.useState)(0),h=Object(i.a)(g,2),m=h[0],O=h[1];return Object(c.useEffect)((function(){document.title="Wallet-App",H(),console.log("first")}),[]),Object(c.useEffect)((function(){(function(e){return Y.apply(this,arguments)})(d).then((function(e){o(e)}))}),[]),Object(c.useEffect)((function(){if(null!=r.pays||void 0!=r.pays){console.log("af"),e.loadPays(r.pays);var t;if(t=Object.values(r.pays).reduce((function(e,t){return e+t.value}),0),b(t),console.log(t),null!=r.catch||void 0!=r.catch){e.loadCatch(r.catch);var n;n=Object.values(r.catch).reduce((function(e,t){return e+t.value}),0),O(n),console.log(n)}}}),[r]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{style:{textAlign:"center"},children:r.username}),Object(a.jsxs)(M.a,{className:"ee",type:"inner",title:"Pays",loading:u,children:[Object(a.jsxs)("div",{children:["you pays ",f," S.P"]}),Object(a.jsx)(B.b,{to:"/pay",children:"add pay"})]}),Object(a.jsx)("br",{}),Object(a.jsxs)(M.a,{type:"inner",title:"Catches",loading:u,children:[Object(a.jsxs)("div",{children:["you catch ",m," S.P"]}),Object(a.jsx)(B.b,{to:"/catch",children:"add catch"})]}),Object(a.jsx)("br",{}),Object(a.jsxs)(M.a,{type:"inner",title:"Total",loading:u,children:["you have ",m-f," S.P in your account"]})]})})),z=x.redirectToApp;var G=function(){return Object(c.useEffect)((function(){z(),localStorage.clear()})),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"main",children:"Yo need to rigister or login to use app"})})},$=n(43),K=(n(98),n(39)),Q=n.n(K),X=n(144),Z=n(147),ee=n(142),te=n(145),ne=n(150),ae=x.getCookie;function ce(e,t){return re.apply(this,arguments)}function re(){return(re=Object(u.a)(l.a.mark((function e(t,n){var a,c,r,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new Headers).append("Content-Type","application/json"),c=JSON.stringify({token:n.token,value:n.value,date:n.date,details:n.details,category:n.category,_id:n._id}),r={method:"POST",headers:a,body:c},e.next=6,fetch(t,r).then((function(e){return e.json()})).then((function(e){var t=w.instanc(new y);"done"===e.status?(console.log(e),o=e.lastOperation,y.setSetting={typeMessage:"success",message:e.message},t.feedBackMe()):(y.setSetting={typeMessage:"error",message:e.error},t.feedBackMe())})).catch((function(e){return console.log("error",e)}));case 6:return e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var oe=function(){function e(){Object(d.a)(this,e)}return Object(p.a)(e,[{key:"addOperation",value:function(e,t){console.log("add pay");var n={token:ae("token"),value:e._Value.value,date:e._Date.value,details:e._Details.value,category:e.category};ce(String("https://wallet-app1-js.herokuapp.com/addPay"),n).then((function(e){console.log(t),t.addPay(t.payR,e),console.log(e)})),console.log(n)}},{key:"editOperation",value:function(e,t){console.log("edit pay");var n={token:ae("token"),value:e._Value,date:e._Date,details:e._Details,category:e.category,_id:e._id};ce(String("https://wallet-app1-js.herokuapp.com/editPay"),n).then((function(e){console.log(e),t.editePay(t.payR,e)})),console.log(n)}},{key:"deleteOperation",value:function(e,t){console.log("delete pay");var n={token:ae("token"),_id:e};ce(String("https://wallet-app1-js.herokuapp.com/deletePay"),n).then((function(n){t.deleteOperation(t.payR,e),console.log(t)}))}}]),e}(),ie=function(){function e(){Object(d.a)(this,e)}return Object(p.a)(e,[{key:"addOperation",value:function(e,t){console.log("add catch");var n={token:ae("token"),value:e._Value.value,date:e._Date.value,details:e._Details.value,category:e.category};ce(String("https://wallet-app1-js.herokuapp.com/addCatch"),n).then((function(e){console.log(t),t.addCatch(t.catchR,e),console.log(e)})),console.log(n)}},{key:"editOperation",value:function(e,t){console.log("edit catch");var n={token:ae("token"),value:e._Value,date:e._Date,details:e._Details,category:e.category,_id:e._id};ce(String("https://wallet-app1-js.herokuapp.com/editCatch"),n).then((function(e){console.log(e),t.editeCatch(t.catchR,e)})),console.log(n)}},{key:"deleteOperation",value:function(e,t){console.log("delete catch");var n={token:ae("token"),_id:e};ce(String("https://wallet-app1-js.herokuapp.com/deleteCatch"),n).then((function(n){t.deleteOperation(t.payR,e),t.deleteOperation(t.catchR,e),console.log(t)}))}}]),e}(),se=function(){function e(t){Object(d.a)(this,e),this.operation=void 0,this.operation=t}return Object(p.a)(e,[{key:"_addOperation",value:function(e,t){this.operation.addOperation(e,t)}},{key:"_editOperation",value:function(e,t){this.operation.editOperation(e,t)}},{key:"_deleteOperation",value:function(e,t){this.operation.deleteOperation(e,t)}}]),e}();var le=Object(R.b)((function(e){return e}),(function(e){return{addPay:function(t,n){return e(function(e,t){return{type:A,Pays:e,newPay:t}}(t,n))},addCatch:function(t,n){return e({type:U,Catches:t,newCath:n})}}}))((function(e){var t,n,r,o=e.typeOperation,s=Object(c.useState)("choose"),d=Object(i.a)(s,2),p=d[0],j=d[1],f=Object(c.useState)(),b=Object(i.a)(f,2),g=b[0],h=b[1];Object(c.useEffect)((function(){"save pay"===e.typeOperation&&h(new se(new oe)),"save catch"===e.typeOperation&&h(new se(new ie))}),[]),Object(c.useEffect)((function(){t=document.getElementById("date-operation"),r=document.getElementById("value"),n=document.getElementById("details-operation")}));var O=Object(a.jsxs)(X.a,{className:"menu-category",children:[Object(a.jsxs)(X.a.Item,{onClick:function(){return j("foood")},children:[Object(a.jsx)("span",{style:{backgroundColor:"rgb(244, 67, 54)"},className:"icon-food icon-category"}),Object(a.jsx)("div",{className:"name-category"})," foood"]}),Object(a.jsxs)(X.a.Item,{onClick:function(){return j("shopping")},children:[Object(a.jsx)("span",{style:{backgroundColor:"rgb(79, 195, 247)"},className:"icon-shopping-bag icon-category"}),Object(a.jsx)("div",{className:"name-category"})," shopping"]}),Object(a.jsxs)(X.a.Item,{onClick:function(){return j("housing")},children:[Object(a.jsx)("span",{style:{backgroundColor:"rgb(255, 167, 38)"},className:"icon-warehouse icon-category"}),Object(a.jsx)("div",{className:"name-category"})," housing"]}),Object(a.jsxs)(X.a.Item,{onClick:function(){return j("Transportation")},children:[Object(a.jsx)("span",{style:{backgroundColor:"rgb(120, 144, 156)"},className:"icon-bus icon-category"}),Object(a.jsx)("div",{className:"name-category"})," Transportation"]}),Object(a.jsxs)(X.a.Item,{onClick:function(){return j("entertentment")},children:[Object(a.jsx)("span",{style:{backgroundColor:"rgb(100, 221, 23)"},className:"icon-child icon-category"}),Object(a.jsx)("div",{className:"name-category"})," entertentment"]}),Object(a.jsxs)(X.a.Item,{onClick:function(){return j("technologia")},children:[Object(a.jsx)("span",{style:{backgroundColor:"rgb(83, 109, 254)"},className:"icon-laptop icon-category"}),Object(a.jsx)("div",{className:"name-category"})," technologia"]}),Object(a.jsxs)(X.a.Item,{onClick:function(){return j("financial expenses")},children:[Object(a.jsx)("span",{style:{backgroundColor:"rgb(0, 191, 165)"},className:"icon-money icon-category"}),Object(a.jsx)("div",{className:"name-category"})," financial expenses"]}),Object(a.jsxs)(X.a.Item,{onClick:function(){return j("Investments")},children:[Object(a.jsx)("span",{style:{backgroundColor:"rgb(255, 64, 129)"},className:"icon-money-1 icon-category"}),Object(a.jsx)("div",{className:"name-category"})," Investments"]}),Object(a.jsxs)(X.a.Item,{onClick:function(){return j("else")},children:[Object(a.jsx)("span",{style:{backgroundColor:"rgb(158, 158, 158)"},className:"icon-align-justify icon-category"}),Object(a.jsx)("div",{className:"name-category"})," else"]})]});return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(Z.a,{defaultValue:5,id:"value",className:"input-value-operation",min:5}),Object(a.jsx)(ee.a,{id:"date-operation",inputReadOnly:!0,clearIcon:!0,defaultValue:Q()(),format:"Y/M/D"}),Object(a.jsx)(te.a,{id:"details-operation",placeholder:"type any description"}),Object(a.jsx)(ne.a,{overlay:O,children:Object(a.jsx)(m.a,{children:p})}),Object(a.jsx)(m.a,{type:"primary",onClick:Object(u.a)(l.a.mark((function a(){var c;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c=k.Internet,a.next=3,(new c).getStatusIntrernet();case 3:if(a.sent){a.next=6;break}return a.abrupt("return","");case 6:g._addOperation({_Value:r,_Date:t,_Details:n,category:p},e);case 7:case"end":return a.stop()}}),a)}))),children:o})]})})),ue="oneOperation",de="_idOperation",pe="EditeOperation",je="showEditeOperation",fe="typeOfOperation";function be(e){return{type:je,isShow:e}}function ge(e){return{type:fe,_typeOperation:e}}var he=Object(R.b)((function(e){return e}),(function(e){return{loadOneOperation:function(t){return e({type:ue,OneOperation:t})},getIdOperation:function(t){return e(function(e){return{type:de,idOperation:e}}(t))},setEdit:function(t){return e({type:pe,valueEdite:t})},setShowEditeOperation:function(t){return e(be(t))},typeOperation:function(t){return e(ge(t))}}}))((function(e){var t=e.id,n=e.value,r=e.date,o=e.details,s=e.category,d=Object(c.useState)(),p=Object(i.a)(d,2),j=p[0],f=p[1];return Object(c.useEffect)((function(){"pay"===e.typeOperationR&&f(new se(new oe)),"catch"===e.typeOperationR&&f(new se(new ie))}),[]),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"my-operation",children:[Object(a.jsx)("div",{onClick:Object(u.a)(l.a.mark((function n(){var a;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=k.Internet,n.next=3,(new a).getStatusIntrernet();case 3:if(n.sent){n.next=6;break}return n.abrupt("return","");case 6:j._deleteOperation(t,e);case 7:case"end":return n.stop()}}),n)}))),className:"icon-trash-empty edit-delete delete"}),Object(a.jsxs)("div",{id:t,className:"values",onClick:function(){return function(e,t){var n,a,c,r,o,i,s,l;null===(n=document.getElementById("modal-operation"))||void 0===n||n.style.setProperty("display","grid"),null===(a=document.getElementById("modal-body"))||void 0===a||a.style.setProperty("grid-template-columns","2fr"),null===(c=document.getElementById("modal-body"))||void 0===c||c.style.setProperty("grid-template-rows","1fr"),null===(r=document.getElementById("myOperation"))||void 0===r||r.style.setProperty("grid-template-columns","1fr 1fr"),t({value:null===(o=document.getElementById("value-".concat(e)))||void 0===o?void 0:o.innerText,date:null===(i=document.getElementById("date-".concat(e)))||void 0===i?void 0:i.innerText,details:null===(s=document.getElementById("details-".concat(e)))||void 0===s?void 0:s.innerText,category:null===(l=document.getElementById("category-".concat(e)))||void 0===l?void 0:l.innerText,typeOperation:"pay"})}(t,e.loadOneOperation)},children:[Object(a.jsxs)("div",{id:"value-".concat(t),className:"value",children:[n," S.P"]}),Object(a.jsx)("div",{id:"date-".concat(t),className:"date",children:r}),Object(a.jsx)("div",{id:"details-".concat(t),className:"details",children:o}),Object(a.jsx)("div",{id:"category-".concat(t),className:"category",children:s})]}),Object(a.jsx)("div",{className:"icon-pen edit-delete edite",onClick:function(){!function(e,t,n){var a;null===(a=document.getElementById("modalEdit"))||void 0===a||a.style.setProperty("display","grid"),console.log(t),n({value:t.value,date:t.date,details:t.details,category:t.category,id:e})}(t,{value:n,date:r,details:o,category:s},e.setEdit),e.setShowEditeOperation(!0)}})]})})}));var me=x.redirectToMain;var Oe=Object(R.b)((function(e){return e}),(function(e){return{deletePay:function(t,n){return e(function(e,t){return console.log(e),{type:F,Pays:e,_id:t}}(t,n))},typeOperation:function(t){return e(ge(t))}}}))((function(e){e.typeOperation("pay"),Object(c.useEffect)((function(){me(),document.title="Pay"}));var t=e.payR.map((function(t){var n=new Date(t.date).toLocaleDateString(),r="".concat(n);return Object(a.jsx)(a.Fragment,{children:Object(c.createElement)(he,Object($.a)(Object($.a)({},e),{},{key:t._id,id:t._id,value:t.value,date:r,details:t.details,category:t.category,deleteOperation:function(t,n,a){return e.deletePay(t,n)}}))})}));return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"operation",children:[Object(a.jsx)("div",{id:"add-pay",style:{height:"0px"},className:"add-operation",children:Object(a.jsx)(le,Object($.a)(Object($.a)({},e),{},{typeOperation:"save pay"}),"addOperation")}),Object(a.jsxs)("div",{className:"btn-add-operation",onClick:function(){return function(){var e=document.getElementById("add-pay");null===e||void 0===e||e.style.setProperty("animation","open-operation 1s linear forwards"),console.log("pay show")}()},children:[Object(a.jsx)("span",{onClick:function(e){return function(e){e.stopPropagation();var t=document.getElementById("add-pay");null===t||void 0===t||t.style.setProperty("animation","close-operation 1s linear forwards")}(e)},id:"hide-add-operation",className:"icon-minus"}),Object(a.jsx)("div",{children:"Add Pay"})]}),Object(a.jsx)("div",{className:"my-operations",children:t})]})})}));var ye=x.redirectToMain;var ve=Object(R.b)((function(e){return e}),(function(e){return{deleteCatch:function(t,n){return e(function(e,t){return console.log(e),{type:W,Catches:e,_id:t}}(t,n))},typeOperation:function(t){return e(ge(t))}}}))((function(e){e.typeOperation("catch"),Object(c.useEffect)((function(){ye(),document.title="Catch"}));var t=e.catchR.map((function(t){var n=new Date(t.date).toLocaleDateString(),r="".concat(n);return Object(a.jsx)(a.Fragment,{children:Object(c.createElement)(he,Object($.a)(Object($.a)({},e),{},{key:t._id,id:t._id,value:t.value,date:r,details:t.details,category:t.category,deleteOperation:function(t,n){return e.deleteCatch(t,n)}}))})}));return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"operation",children:[Object(a.jsx)("div",{id:"add-catch",style:{height:"0px"},className:"add-operation",children:Object(a.jsx)(le,Object($.a)(Object($.a)({},e),{},{typeOperation:"save catch"}),"addOperation")}),Object(a.jsxs)("div",{className:"btn-add-operation",onClick:function(){return function(){var e=document.getElementById("add-catch");null===e||void 0===e||e.style.setProperty("animation","open-operation 1s linear forwards"),console.log("pay show")}()},children:[Object(a.jsx)("span",{onClick:function(e){return function(e){e.stopPropagation();var t=document.getElementById("add-catch");null===t||void 0===t||t.style.setProperty("animation","close-operation 1s linear forwards")}(e)},id:"hide-add-operation",className:"icon-minus"}),Object(a.jsx)("div",{children:"Add Catch"})]}),Object(a.jsx)("div",{className:"my-operations",children:t})]})})})),xe=n(148);function ke(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(xe.a,{status:"404",title:"404",subTitle:"Sorry, the page you visited does not exist.",extra:Object(a.jsx)(m.a,{onClick:function(){document.location.href="/"},type:"primary",children:"Back Home"})})})}var we=Object(R.b)((function(e){return e}),(function(e){return{setShowEditeOperation:function(t){return e(be(t))},editePay:function(t,n){return e(function(e,t){return{type:L,Pays:e,PayEdited:t}}(t,n))},editeCatch:function(t,n){return e(function(e,t){return{type:J,Catches:e,CatchEdited:t}}(t,n))}}}))((function(e){var t,n,r,o=Object(c.useState)(),s=Object(i.a)(o,2),d=s[0],p=s[1],j=Object(c.useState)(e.EditR.category),f=Object(i.a)(j,2),b=f[0],g=f[1];Object(c.useEffect)((function(){"pay"===e.typeOperationR&&p(new se(new oe)),"catch"===e.typeOperationR&&p(new se(new ie)),e.EditR.id}),[e.EditR]),Object(c.useEffect)((function(){t=document.getElementById("value-edite"),n=document.getElementById("date-operation-edite"),r=document.getElementById("details-operation-edite")}));var h=Object(a.jsxs)(X.a,{className:"menu-category",children:[Object(a.jsxs)(X.a.Item,{onClick:function(){return g("foood")},children:[Object(a.jsx)("span",{style:{backgroundColor:"rgb(244, 67, 54)"},className:"icon-food icon-category"}),Object(a.jsx)("div",{className:"name-category"})," foood"]}),Object(a.jsxs)(X.a.Item,{onClick:function(){return g("shopping")},children:[Object(a.jsx)("span",{style:{backgroundColor:"rgb(79, 195, 247)"},className:"icon-shopping-bag icon-category"}),Object(a.jsx)("div",{className:"name-category"})," shopping"]}),Object(a.jsxs)(X.a.Item,{onClick:function(){return g("housing")},children:[Object(a.jsx)("span",{style:{backgroundColor:"rgb(255, 167, 38)"},className:"icon-warehouse icon-category"}),Object(a.jsx)("div",{className:"name-category"})," housing"]}),Object(a.jsxs)(X.a.Item,{onClick:function(){return g("Transportation")},children:[Object(a.jsx)("span",{style:{backgroundColor:"rgb(120, 144, 156)"},className:"icon-bus icon-category"}),Object(a.jsx)("div",{className:"name-category"})," Transportation"]}),Object(a.jsxs)(X.a.Item,{onClick:function(){return g("entertentment")},children:[Object(a.jsx)("span",{style:{backgroundColor:"rgb(100, 221, 23)"},className:"icon-child icon-category"}),Object(a.jsx)("div",{className:"name-category"})," entertentment"]}),Object(a.jsxs)(X.a.Item,{onClick:function(){return g("technologia")},children:[Object(a.jsx)("span",{style:{backgroundColor:"rgb(83, 109, 254)"},className:"icon-laptop icon-category"}),Object(a.jsx)("div",{className:"name-category"})," technologia"]}),Object(a.jsxs)(X.a.Item,{onClick:function(){return g("financial expenses")},children:[Object(a.jsx)("span",{style:{backgroundColor:"rgb(0, 191, 165)"},className:"icon-money icon-category"}),Object(a.jsx)("div",{className:"name-category"})," financial expenses"]}),Object(a.jsxs)(X.a.Item,{onClick:function(){return g("Investments")},children:[Object(a.jsx)("span",{style:{backgroundColor:"rgb(255, 64, 129)"},className:"icon-money-1 icon-category"}),Object(a.jsx)("div",{className:"name-category"})," Investments"]}),Object(a.jsxs)(X.a.Item,{onClick:function(){return g("else")},children:[Object(a.jsx)("span",{style:{backgroundColor:"rgb(158, 158, 158)"},className:"icon-align-justify icon-category"}),Object(a.jsx)("div",{className:"name-category"})," else"]})]});return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{id:"modalEdit",className:"modal-operation modal-edite",children:[Object(a.jsxs)("div",{className:"modal-edit-head ",children:[Object(a.jsx)("div",{children:"edit"}),Object(a.jsx)("div",{onClick:function(){return e.setShowEditeOperation(!1)},className:"icon-cancel"})]}),Object(a.jsxs)("div",{className:"modal-edit-body",children:[Object(a.jsx)(Z.a,{className:"inputs-operation input-value-operation",id:"value-edite",defaultValue:Number(e.EditR.value),min:5}),Object(a.jsx)(ee.a,{className:"inputs-operation",id:"date-operation-edite",defaultValue:Q()(e.EditR.date,"DD/MM/YY"),clearIcon:!0}),Object(a.jsx)(te.a,{className:"inputs-operation",id:"details-operation-edite",defaultValue:e.EditR.details,placeholder:"type any description"}),Object(a.jsx)(ne.a,{className:"inputs-operation",overlay:h,children:Object(a.jsx)(m.a,{children:b})}),Object(a.jsx)(m.a,{onClick:Object(u.a)(l.a.mark((function a(){var c;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c=k.Internet,a.next=3,(new c).getStatusIntrernet();case 3:if(a.sent){a.next=6;break}return a.abrupt("return","");case 6:d._editOperation({_Value:t.value,_Date:n.value,_Details:r.value,category:b,_id:e.EditR.id},e);case 7:case"end":return a.stop()}}),a)}))),className:"inputs-operation",type:"primary",children:"edit"})]})]})})}));var Ne=Object(R.b)((function(e){return e}))((function(e){return Object(c.useEffect)((function(){var e;null===(e=document.getElementById("modalEdit"))||void 0===e||e.style.setProperty("display","grid")}),[e.isShowEditR]),Object(a.jsx)(a.Fragment,{children:e.isShowEditR?Object(a.jsx)(we,{}):null})})),Ce=n(21);var Se=Object(R.b)((function(e){return e}))((function(e){var t=e.oneOp,n=t.value,c=t.date,r=t.details,o=t.category,i=t.typeOperation;return console.log(e),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{id:"modal-operation",className:"modal-operation-show modal-operation",children:Object(a.jsxs)("div",{className:"modal-box",children:[Object(a.jsxs)("div",{className:"modal-head",children:[Object(a.jsx)("span",{className:"",children:i}),Object(a.jsx)("span",{onClick:function(){return function(e){var t;null===(t=document.getElementById(e))||void 0===t||t.style.setProperty("display","none")}("modal-operation")},className:"close icon-cancel"})]}),Object(a.jsx)("div",{id:"modal-body",className:"modal-body",children:Object(a.jsxs)("div",{id:"myOperation",className:"my-operation",children:[Object(a.jsxs)("div",{className:"keys",children:[Object(a.jsx)("div",{className:"value",children:"value"}),Object(a.jsx)("div",{className:"date",children:"date"}),Object(a.jsx)("div",{className:"details",children:"details"}),Object(a.jsx)("div",{className:"category",children:"category"})]}),Object(a.jsxs)("div",{className:"values",children:[Object(a.jsx)("div",{className:"value",children:n}),Object(a.jsx)("div",{className:"date",children:c}),Object(a.jsx)("div",{className:"details",children:r}),Object(a.jsx)("div",{className:"category",children:o})]})]})})]})})})}));var Ee=function(e){var t=Object(c.useState)(!0),n=Object(i.a)(t,2),r=n[0],o=n[1],s=new x.LogOut,l=x.getCookie("token");return Object(c.useEffect)((function(){null!==x.getCookie("token")&&o(!1)})),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(Se,{}),Object(a.jsx)(Ne,{}),Object(a.jsx)(B.a,{children:Object(a.jsxs)("div",{className:"container app",children:[Object(a.jsxs)("nav",{className:"my-nav",children:[Object(a.jsx)("div",{className:"bar",children:Object(a.jsx)(B.b,{to:null==l?"/":"wallet-app",children:"WalletApp"})}),Object(a.jsxs)("div",{children:[r?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(m.a,{type:"primary",className:"rigister-login",children:Object(a.jsx)(B.b,{to:"/rigister",children:"Rigister"})}),Object(a.jsx)(m.a,{type:"primary",className:"rigister-login",children:Object(a.jsx)(B.b,{to:"/login",children:"Login"})})]}):null,Object(a.jsx)(m.a,{onClick:function(){return s.deleteCookie("token")},type:"primary",className:"login rigister-login",children:"logout"})]})]}),Object(a.jsxs)(Ce.c,{children:[Object(a.jsx)(Ce.a,{exact:!0,path:"/",component:function(){return Object(a.jsx)(G,{})}}),Object(a.jsx)(Ce.a,{exact:!0,path:"/rigister",component:function(){return Object(a.jsx)(I,{})}}),Object(a.jsx)(Ce.a,{exact:!0,path:"/wallet-app",component:function(){return Object(a.jsx)(q,{})}}),Object(a.jsx)(Ce.a,{exact:!0,path:"/pay",component:function(){return Object(a.jsx)(Oe,{})}}),Object(a.jsx)(Ce.a,{exact:!0,path:"/Login",component:function(){return Object(a.jsx)(T,{})}}),Object(a.jsx)(Ce.a,{exact:!0,path:"/catch",component:function(){return Object(a.jsx)(ve,{})}}),Object(a.jsx)(Ce.a,{path:"*",exact:!0,component:function(){return Object(a.jsx)(ke,{})}})]})]})})]})},Ie=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Pe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var _e=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,151)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};var Te=n(53),Me=n(108);var Be=Object(Te.combineReducers)({payR:function(e,t){switch(t.type){case D:return e=t.Pays;case F:return(n=t.Pays.findIndex((function(e){return e._id===t._id})))>-1?(console.log(n),t.Pays.splice(n,1),e):e;case A:return console.log(t.newPay),t.Pays.push(t.newPay),e;case L:var n=t.Pays.findIndex((function(e){return e._id==t.PayEdited._id}));return t.Pays[n]=t.PayEdited,console.log(t.PayEdited),e;default:return void 0===e?"":e}},catchR:function(e,t){switch(t.type){case V:return e=t.Catch;case W:return(n=t.Catches.findIndex((function(e){return e._id===t._id})))>-1?(console.log(n),t.Catches.splice(n,1),e):e;case U:return console.log(t.newCath),t.Catches.push(t.newCath),e;case J:var n=t.Catches.findIndex((function(e){return e._id==t.CatchEdited._id}));return t.Catches[n]=t.CatchEdited,console.log(t.CatchEdited),e;default:return void 0===e?"":e}},oneOp:function(e,t){switch(t.type){case ue:return e=t.OneOperation;default:return void 0===e?"":e}},idOperationR:function(e,t){switch(t.type){case de:return e=t.idOperation;default:return void 0===e?"":e}},EditR:function(e,t){switch(t.type){case pe:return e=t.valueEdite;default:return void 0===e?"":e}},isShowEditR:function(e,t){switch(t.type){case je:return e=t.isShow;default:return void 0!==e&&e}},typeOperationR:function(e,t){switch(t.type){case fe:return e=t._typeOperation;default:return void 0===e?"no type":e}}}),Re=Object(Te.createStore)(Be,function(){var e=localStorage.getItem("state");return null!==e?JSON.parse(e):{operations:"empty"}}(),Object(Me.composeWithDevTools)(Object(Te.applyMiddleware)()));Re.subscribe((function(){var e;e=Re.getState(),localStorage.setItem("state",JSON.stringify(e))}));var De=Re;o.a.render(Object(a.jsx)(R.a,{store:De,children:Object(a.jsx)(Ee,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Ie?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Pe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Pe(t,e)}))}}(),_e()},93:function(e,t,n){},98:function(e,t,n){}},[[138,1,2]]]);
//# sourceMappingURL=main.ae253687.chunk.js.map