(this["webpackJsonpex5-signets"]=this["webpackJsonpex5-signets"]||[]).push([[0],{165:function(e,t,n){},166:function(e,t,n){},167:function(e,t,n){},183:function(e,t,n){},184:function(e,t,n){},187:function(e,t,n){},294:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),s=n.n(c),i=(n(165),n(36)),o=n(25),l=n(17),u=(n(166),n(167),n(351)),d=n(331),j=n(9),b=n(137),p=(n(296),n(108),{apiKey:"AIzaSyBozBJDhErsze0IJgygOky2hplt-rhhlB8",authDomain:"panier-achat-fsj.firebaseapp.com",databaseURL:"https://panier-achat-fsj-default-rtdb.firebaseio.com",projectId:"panier-achat-fsj",storageBucket:"panier-achat-fsj.appspot.com",messagingSenderId:"827452650180",appId:"1:827452650180:web:7c8928380ddc7d8a844f91",measurementId:"G-7SJNXY6SXX"}),f="utilisateurs-ex5",h="dossiers";j.a.apps.length||j.a.initializeApp(p);var O=j.a.auth(),m=new b.a.AuthUI(O),x=j.a.firestore();n(176);function g(e){O.onAuthStateChanged((function(t){var n,a,r;e(t),t&&(n=t.uid,a=t.displayName,r=t.email,x.collection(f).doc(n).set({nom:a,courriel:r,datecompte:j.a.firestore.FieldValue.serverTimestamp()},{merge:!0}))}))}var v=n(7);function N(e){var t=e.utilisateur;return Object(v.jsxs)("header",{className:"Entete",children:[Object(v.jsxs)("div",{className:"logo",children:["Signets",Object(v.jsx)(d.a,{variant:"outlined",size:"small",className:"btn-deconnexion",onClick:function(){O.signOut()},children:"D\xe9connexion"})]}),Object(v.jsxs)("div",{className:"utilisateur",children:[t.displayName," ",Object(v.jsx)(u.a,{className:"avatar",alt:t.displayName,src:t.photoURL})]})]})}var y=n(27),C=n.n(y),k=n(48),D=(n(183),n(184),n(335)),S=n(148),A=n(347),w=n(140),I=n.n(w),B=n(141),F=n.n(B),E=n.p+"static/media/couverture.2dc9ece9.webp";function R(e){var t=e.id,n=e.nom,r=e.couleur,c=e.datemodif,s=e.couverture,i=e.gererSupprimer,o=Object(a.useState)(null),u=Object(l.a)(o,2),d=u[0],j=u[1];function b(){j(null)}return Object(v.jsxs)("article",{className:"Dossier",style:{backgroundColor:r},children:[Object(v.jsxs)("div",{className:"couverture",children:[Object(v.jsx)(D.a,{className:"deplacer","aria-label":"d\xe9placer",disableRipple:!0,children:Object(v.jsx)(I.a,{})}),Object(v.jsx)("img",{src:s||E,alt:n})]}),Object(v.jsxs)("div",{className:"info",children:[Object(v.jsx)("h2",{children:n}),Object(v.jsxs)("p",{children:["Modifi\xe9 : ",V(c)]})]}),Object(v.jsx)(D.a,{id:t,className:"modifier","aria-label":"modifier",size:"small","aria-haspopup":"true","aria-controls":"maj-dossier",onClick:function(e){j(e.currentTarget)},children:Object(v.jsx)(F.a,{})}),Object(v.jsxs)(S.a,{id:"maj-dossier",anchorEl:d,keepMounted:!0,open:Boolean(d),onClose:b,children:[Object(v.jsx)(A.a,{onClick:b,children:"Modifier"}),Object(v.jsx)(A.a,{onClick:function(){i(t),b()},children:"Supprimer"})]})]})}function V(e){var t=e?new Date(1e3*e.seconds):new Date;return"".concat(t.getDate()," ").concat(["janvier","f\xe9vrier","mars","avril","mai","juin","juillet","ao\xfbt","septembre","octobre","novembre","d\xe9cembre"][t.getMonth()]," ").concat(t.getFullYear())}function z(){return(z=Object(k.a)(C.a.mark((function e(t,n){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.datemodif=j.a.firestore.FieldValue.serverTimestamp(),e.next=3,x.collection(f).doc(t).collection(h).add(n);case 3:return a=e.sent,e.abrupt("return",a.get());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return(P=Object(k.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.next=3,x.collection(f).doc(t).collection(h).orderBy("datemodif","desc").get();case 3:return e.sent.forEach((function(e){n.push(Object(i.a)({id:e.id},e.data()))})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(e,t){return M.apply(this,arguments)}function M(){return(M=Object(k.a)(C.a.mark((function e(t,n){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.collection(f).doc(t).collection(h).doc(n).delete();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T=n(337),W=n(348),G=n(338),L=n(345),U=Object(T.a)((function(e){return{button:{display:"block",marginTop:e.spacing(2)},formControl:{margin:e.spacing(1),minWidth:120}}}));function X(e){var t=e.utilisateur,n=e.etatDossiers,c=Object(l.a)(n,2),s=c[0],u=c[1],j=U(),b=r.a.useState(""),p=Object(l.a)(b,2),f=p[0],h=p[1],O=r.a.useState(!1),m=Object(l.a)(O,2),x=m[0],g=m[1],N=function(){g(!0)};function y(e){return D.apply(this,arguments)}function D(){return(D=Object(k.a)(C.a.mark((function e(n){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:J(t.uid,n).then((function(){var e=Object(o.a)(s).filter((function(e){return e.id!==n}));u(e)})).catch((function(e){return console.log("\xc9chec de la suppression - Firestore a r\xe9pondu :",e.message)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){(function(e){return P.apply(this,arguments)})(t.uid).then((function(e){return u(e)}))}),[]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{children:[Object(v.jsx)(d.a,{className:j.button,onClick:N,children:"Tri des dossiers"}),Object(v.jsxs)(G.a,{className:j.formControl,children:[Object(v.jsx)(W.a,{id:"demo-controlled-open-select-label"}),Object(v.jsxs)(L.a,{labelId:"demo-controlled-open-select-label",id:"demo-controlled-open-select",open:x,onClose:function(){g(!1)},onOpen:N,value:f,defaultValue:10,onChange:function(e){h(e.target.value)},children:[Object(v.jsx)(A.a,{value:10,children:"Date de modificaton descendante"}),Object(v.jsx)(A.a,{value:20,children:"Nom de dossier ascendant"}),Object(v.jsx)(A.a,{value:30,children:"Nom de dossier descendant"})]})]})]}),Object(v.jsx)("ul",{className:"ListeDossiers",children:s.length>0?s.map((function(e){return Object(v.jsx)("li",{children:Object(v.jsx)(R,Object(i.a)(Object(i.a)({},e),{},{gererSupprimer:y}))},e.id)})):Object(v.jsxs)("li",{className:"msgAucunDossier",children:["Votre liste de dossiers est vide",Object(v.jsx)("p",{children:";-("})]})})]})}var _=n(343),Y=n(146),q=n.n(Y);n(187);function K(){return Object(a.useEffect)((function(){return e="#firebaseui-widget",void m.start(e,{signInOptions:[j.a.auth.GoogleAuthProvider.PROVIDER_ID,j.a.auth.FacebookAuthProvider.PROVIDER_ID,j.a.auth.GithubAuthProvider.PROVIDER_ID],signInFlow:"popup"});var e}),[]),Object(v.jsxs)("div",{className:"Accueil",children:[Object(v.jsxs)("h3",{className:"logo",children:["Signets ",Object(v.jsx)("span",{children:"beta"})]}),Object(v.jsxs)("h2",{className:"amorce",children:["Organisez vos signets Web, ",Object(v.jsx)("br",{}),"Simple comme bonjour !"]}),Object(v.jsx)("h4",{className:"connexion-etiquette",children:"Connexion \xe0 Signets"}),Object(v.jsx)("div",{id:"firebaseui-widget"})]})}var H=n(350),Q=n(346),Z=n(342),$=n(341),ee=n(349),te=n(147);function ne(e){var t=e.ouvert,n=e.setOuvert,r=e.gererAjout,c=Object(a.useState)(""),s=Object(l.a)(c,2),i=s[0],o=s[1],u=Object(a.useState)(""),j=Object(l.a)(u,2),b=j[0],p=j[1],f=Object(a.useState)("#537169"),h=Object(l.a)(f,2),O=h[0],m=h[1];function x(){o(""),p(""),m("#537169")}return Object(v.jsx)("div",{className:"AjouterDossier",children:Object(v.jsxs)(Q.a,{open:t,onClose:function(){return n(!1)},"aria-labelledby":"form-dialog-title",children:[Object(v.jsx)(ee.a,{id:"form-dialog-title",children:"Ajouter un dossier"}),Object(v.jsxs)($.a,{children:[Object(v.jsx)(H.a,{autoFocus:!0,margin:"dense",id:"nomDossier",label:"Nom du dossier",type:"text",fullWidth:!0,onChange:function(e){return o(e.target.value)},defaultValue:i}),Object(v.jsx)(H.a,{margin:"normal",id:"urlImage",label:"Adresse de l'image de couverture",type:"text",fullWidth:!0,onChange:function(e){return p(e.target.value)},defaultValue:b}),Object(v.jsx)(te.a,{width:"100%",triangle:"hide",colors:["#537169","#55BBB2","#F6D2A3","#F3D379","#FB7778","#5990B8"],onChangeComplete:function(e,t){return m(e.hex)},color:O})]}),Object(v.jsxs)(Z.a,{children:[Object(v.jsx)(d.a,{style:{backgroundColor:"#900",color:"#fff",margin:"15px 0"},onClick:function(){n(!1),x()},variant:"contained",children:"Annuler"}),Object(v.jsx)(d.a,{style:{backgroundColor:"#090",color:"#fff",margin:"15px"},className:"btnAjouter",onClick:function(){""!==i&&r(i,b,O),x()},variant:"contained",children:"Ajouter"})]})]})})}function ae(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),s=Object(l.a)(c,2),u=s[0],d=s[1],j=Object(a.useState)(!1),b=Object(l.a)(j,2),p=b[0],f=b[1];return Object(a.useEffect)((function(){return g(r)}),[]),Object(v.jsx)("div",{className:"Appli",children:n?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(N,{utilisateur:n}),Object(v.jsxs)("section",{className:"contenu-principal",children:[Object(v.jsx)(X,{utilisateur:n,etatDossiers:c}),Object(v.jsx)(ne,{ouvert:p,setOuvert:f,gererAjout:function(e,t,a){var r={nom:e,couverture:t,couleur:a,signets:[]};(function(e,t){return z.apply(this,arguments)})(n.uid,r).then((function(e){return d([].concat(Object(o.a)(u),[Object(i.a)(Object(i.a)({},e.data()),{},{id:e.id})]))})),f(!1)}}),Object(v.jsx)(_.a,{onClick:function(){return f(!0)},className:"ajoutRessource",color:"primary","aria-label":"Ajouter dossier",children:Object(v.jsx)(q.a,{})})]})]}):Object(v.jsx)(K,{})})}s.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(ae,{})}),document.getElementById("racine"))}},[[294,1,2]]]);