import{C as Te,S as w,i as x,s as $,D as j,k as T,a as M,l as C,m as I,c as N,h as g,n as c,b as O,E as D,g as v,v as J,d as H,f as Q,F as U,G as z,H as q,I as ke,J as X,K as Y,L as He,M as Ce,q as K,r as W,y as Le,z as Pe,A as De,B as Fe,N as Ie,O as G}from"../chunks/index.58e20e8d.js";import{i as te}from"../chunks/IntersectionStore.c545c419.js";import{w as Ae}from"../chunks/index.32a8c1e1.js";const Z={};function se(a){return a==="local"?localStorage:sessionStorage}function ee(a,e,l){const o=(l==null?void 0:l.serializer)??JSON,r=(l==null?void 0:l.storage)??"local";function s(t,i){se(r).setItem(t,o.stringify(i))}if(!Z[a]){const t=Ae(e,F=>{const S=se(r).getItem(a);S&&F(o.parse(S));{const E=V=>{V.key===a&&F(V.newValue?o.parse(V.newValue):null)};return window.addEventListener("storage",E),()=>window.removeEventListener("storage",E)}}),{subscribe:i,set:_}=t;Z[a]={set(F){s(a,F),_(F)},update(F){const S=F(Te(t));s(a,S),_(S)},subscribe:i}}return Z[a]}ee("modeOsPrefers",!1);ee("modeUserPrefers",void 0);ee("modeCurrent",!1);const Ve=a=>({}),ae=a=>({}),Be=a=>({}),oe=a=>({}),Oe=a=>({}),ie=a=>({});function re(a){let e,l,o;const r=a[22].lead,s=j(r,a,a[21],ie);return{c(){e=T("div"),s&&s.c(),this.h()},l(t){e=C(t,"DIV",{class:!0});var i=I(e);s&&s.l(i),i.forEach(g),this.h()},h(){c(e,"class",l="app-bar-slot-lead "+a[4])},m(t,i){O(t,e,i),s&&s.m(e,null),o=!0},p(t,i){s&&s.p&&(!o||i&2097152)&&U(s,r,t,t[21],o?q(r,t[21],i,Oe):z(t[21]),ie),(!o||i&16&&l!==(l="app-bar-slot-lead "+t[4]))&&c(e,"class",l)},i(t){o||(v(s,t),o=!0)},o(t){H(s,t),o=!1},d(t){t&&g(e),s&&s.d(t)}}}function ne(a){let e,l,o;const r=a[22].trail,s=j(r,a,a[21],oe);return{c(){e=T("div"),s&&s.c(),this.h()},l(t){e=C(t,"DIV",{class:!0});var i=I(e);s&&s.l(i),i.forEach(g),this.h()},h(){c(e,"class",l="app-bar-slot-trail "+a[2])},m(t,i){O(t,e,i),s&&s.m(e,null),o=!0},p(t,i){s&&s.p&&(!o||i&2097152)&&U(s,r,t,t[21],o?q(r,t[21],i,Be):z(t[21]),oe),(!o||i&4&&l!==(l="app-bar-slot-trail "+t[2]))&&c(e,"class",l)},i(t){o||(v(s,t),o=!0)},o(t){H(s,t),o=!1},d(t){t&&g(e),s&&s.d(t)}}}function fe(a){let e,l,o;const r=a[22].headline,s=j(r,a,a[21],ae);return{c(){e=T("div"),s&&s.c(),this.h()},l(t){e=C(t,"DIV",{class:!0});var i=I(e);s&&s.l(i),i.forEach(g),this.h()},h(){c(e,"class",l="app-bar-row-headline "+a[5])},m(t,i){O(t,e,i),s&&s.m(e,null),o=!0},p(t,i){s&&s.p&&(!o||i&2097152)&&U(s,r,t,t[21],o?q(r,t[21],i,Ve):z(t[21]),ae),(!o||i&32&&l!==(l="app-bar-row-headline "+t[5]))&&c(e,"class",l)},i(t){o||(v(s,t),o=!0)},o(t){H(s,t),o=!1},d(t){t&&g(e),s&&s.d(t)}}}function Me(a){let e,l,o,r,s,t,i,_,F,S,E=a[8].lead&&re(a);const V=a[22].default,R=j(V,a,a[21],null);let b=a[8].trail&&ne(a),p=a[8].headline&&fe(a);return{c(){e=T("div"),l=T("div"),E&&E.c(),o=M(),r=T("div"),R&&R.c(),t=M(),b&&b.c(),_=M(),p&&p.c(),this.h()},l(n){e=C(n,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-label":!0,"aria-labelledby":!0});var f=I(e);l=C(f,"DIV",{class:!0});var u=I(l);E&&E.l(u),o=N(u),r=C(u,"DIV",{class:!0});var B=I(r);R&&R.l(B),B.forEach(g),t=N(u),b&&b.l(u),u.forEach(g),_=N(f),p&&p.l(f),f.forEach(g),this.h()},h(){c(r,"class",s="app-bar-slot-default "+a[3]),c(l,"class",i="app-bar-row-main "+a[6]),c(e,"class",F="app-bar "+a[7]),c(e,"data-testid","app-bar"),c(e,"role","toolbar"),c(e,"aria-label",a[0]),c(e,"aria-labelledby",a[1])},m(n,f){O(n,e,f),D(e,l),E&&E.m(l,null),D(l,o),D(l,r),R&&R.m(r,null),D(l,t),b&&b.m(l,null),D(e,_),p&&p.m(e,null),S=!0},p(n,[f]){n[8].lead?E?(E.p(n,f),f&256&&v(E,1)):(E=re(n),E.c(),v(E,1),E.m(l,o)):E&&(J(),H(E,1,1,()=>{E=null}),Q()),R&&R.p&&(!S||f&2097152)&&U(R,V,n,n[21],S?q(V,n[21],f,null):z(n[21]),null),(!S||f&8&&s!==(s="app-bar-slot-default "+n[3]))&&c(r,"class",s),n[8].trail?b?(b.p(n,f),f&256&&v(b,1)):(b=ne(n),b.c(),v(b,1),b.m(l,null)):b&&(J(),H(b,1,1,()=>{b=null}),Q()),(!S||f&64&&i!==(i="app-bar-row-main "+n[6]))&&c(l,"class",i),n[8].headline?p?(p.p(n,f),f&256&&v(p,1)):(p=fe(n),p.c(),v(p,1),p.m(e,null)):p&&(J(),H(p,1,1,()=>{p=null}),Q()),(!S||f&128&&F!==(F="app-bar "+n[7]))&&c(e,"class",F),(!S||f&1)&&c(e,"aria-label",n[0]),(!S||f&2)&&c(e,"aria-labelledby",n[1])},i(n){S||(v(E),v(R,n),v(b),v(p),S=!0)},o(n){H(E),H(R,n),H(b),H(p),S=!1},d(n){n&&g(e),E&&E.d(),R&&R.d(n),b&&b.d(),p&&p.d()}}}const Ne="flex flex-col",je="grid items-center",Ue="",ze="flex-none flex justify-between items-center",qe="flex-auto",Je="flex-none flex items-center space-x-4";function Qe(a,e,l){let o,r,s,t,i,_,{$$slots:F={},$$scope:S}=e;const E=ke(F);let{background:V="bg-surface-100-800-token"}=e,{border:R=""}=e,{padding:b="p-4"}=e,{shadow:p=""}=e,{spacing:n="space-y-4"}=e,{gridColumns:f="grid-cols-[auto_1fr_auto]"}=e,{gap:u="gap-4"}=e,{regionRowMain:B=""}=e,{regionRowHeadline:A=""}=e,{slotLead:L=""}=e,{slotDefault:P=""}=e,{slotTrail:d=""}=e,{label:h=""}=e,{labelledby:k=""}=e;return a.$$set=m=>{l(23,e=X(X({},e),Y(m))),"background"in m&&l(9,V=m.background),"border"in m&&l(10,R=m.border),"padding"in m&&l(11,b=m.padding),"shadow"in m&&l(12,p=m.shadow),"spacing"in m&&l(13,n=m.spacing),"gridColumns"in m&&l(14,f=m.gridColumns),"gap"in m&&l(15,u=m.gap),"regionRowMain"in m&&l(16,B=m.regionRowMain),"regionRowHeadline"in m&&l(17,A=m.regionRowHeadline),"slotLead"in m&&l(18,L=m.slotLead),"slotDefault"in m&&l(19,P=m.slotDefault),"slotTrail"in m&&l(20,d=m.slotTrail),"label"in m&&l(0,h=m.label),"labelledby"in m&&l(1,k=m.labelledby),"$$scope"in m&&l(21,S=m.$$scope)},a.$$.update=()=>{l(7,o=`${Ne} ${V} ${R} ${n} ${b} ${p} ${e.class??""}`),a.$$.dirty&114688&&l(6,r=`${je} ${f} ${u} ${B}`),a.$$.dirty&131072&&l(5,s=`${Ue} ${A}`),a.$$.dirty&262144&&l(4,t=`${ze} ${L}`),a.$$.dirty&524288&&l(3,i=`${qe} ${P}`),a.$$.dirty&1048576&&l(2,_=`${Je} ${d}`)},e=Y(e),[h,k,_,i,t,s,r,o,E,V,R,b,p,n,f,u,B,A,L,P,d,S,F]}class Ge extends w{constructor(e){super(),x(this,e,Qe,Me,$,{background:9,border:10,padding:11,shadow:12,spacing:13,gridColumns:14,gap:15,regionRowMain:16,regionRowHeadline:17,slotLead:18,slotDefault:19,slotTrail:20,label:0,labelledby:1})}}const Ke=a=>({}),ce=a=>({}),We=a=>({}),ue=a=>({}),ye=a=>({}),de=a=>({}),Xe=a=>({}),_e=a=>({}),Ye=a=>({}),he=a=>({}),Ze=a=>({}),ge=a=>({});function be(a){let e,l,o;const r=a[18].header,s=j(r,a,a[17],ge);return{c(){e=T("header"),s&&s.c(),this.h()},l(t){e=C(t,"HEADER",{id:!0,class:!0});var i=I(e);s&&s.l(i),i.forEach(g),this.h()},h(){c(e,"id","shell-header"),c(e,"class",l="flex-none "+a[7])},m(t,i){O(t,e,i),s&&s.m(e,null),o=!0},p(t,i){s&&s.p&&(!o||i&131072)&&U(s,r,t,t[17],o?q(r,t[17],i,Ze):z(t[17]),ge),(!o||i&128&&l!==(l="flex-none "+t[7]))&&c(e,"class",l)},i(t){o||(v(s,t),o=!0)},o(t){H(s,t),o=!1},d(t){t&&g(e),s&&s.d(t)}}}function me(a){let e,l;const o=a[18].sidebarLeft,r=j(o,a,a[17],he);return{c(){e=T("aside"),r&&r.c(),this.h()},l(s){e=C(s,"ASIDE",{id:!0,class:!0});var t=I(e);r&&r.l(t),t.forEach(g),this.h()},h(){c(e,"id","sidebar-left"),c(e,"class",a[6])},m(s,t){O(s,e,t),r&&r.m(e,null),l=!0},p(s,t){r&&r.p&&(!l||t&131072)&&U(r,o,s,s[17],l?q(o,s[17],t,Ye):z(s[17]),he),(!l||t&64)&&c(e,"class",s[6])},i(s){l||(v(r,s),l=!0)},o(s){H(r,s),l=!1},d(s){s&&g(e),r&&r.d(s)}}}function ve(a){let e,l,o;const r=a[18].pageHeader,s=j(r,a,a[17],_e),t=s||we();return{c(){e=T("header"),t&&t.c(),this.h()},l(i){e=C(i,"HEADER",{id:!0,class:!0});var _=I(e);t&&t.l(_),_.forEach(g),this.h()},h(){c(e,"id","page-header"),c(e,"class",l="flex-none "+a[4])},m(i,_){O(i,e,_),t&&t.m(e,null),o=!0},p(i,_){s&&s.p&&(!o||_&131072)&&U(s,r,i,i[17],o?q(r,i[17],_,Xe):z(i[17]),_e),(!o||_&16&&l!==(l="flex-none "+i[4]))&&c(e,"class",l)},i(i){o||(v(t,i),o=!0)},o(i){H(t,i),o=!1},d(i){i&&g(e),t&&t.d(i)}}}function we(a){let e;return{c(){e=K("(slot:header)")},l(l){e=W(l,"(slot:header)")},m(l,o){O(l,e,o)},d(l){l&&g(e)}}}function Ee(a){let e,l,o;const r=a[18].pageFooter,s=j(r,a,a[17],de),t=s||xe();return{c(){e=T("footer"),t&&t.c(),this.h()},l(i){e=C(i,"FOOTER",{id:!0,class:!0});var _=I(e);t&&t.l(_),_.forEach(g),this.h()},h(){c(e,"id","page-footer"),c(e,"class",l="flex-none "+a[2])},m(i,_){O(i,e,_),t&&t.m(e,null),o=!0},p(i,_){s&&s.p&&(!o||_&131072)&&U(s,r,i,i[17],o?q(r,i[17],_,ye):z(i[17]),de),(!o||_&4&&l!==(l="flex-none "+i[2]))&&c(e,"class",l)},i(i){o||(v(t,i),o=!0)},o(i){H(t,i),o=!1},d(i){i&&g(e),t&&t.d(i)}}}function xe(a){let e;return{c(){e=K("(slot:footer)")},l(l){e=W(l,"(slot:footer)")},m(l,o){O(l,e,o)},d(l){l&&g(e)}}}function Se(a){let e,l;const o=a[18].sidebarRight,r=j(o,a,a[17],ue);return{c(){e=T("aside"),r&&r.c(),this.h()},l(s){e=C(s,"ASIDE",{id:!0,class:!0});var t=I(e);r&&r.l(t),t.forEach(g),this.h()},h(){c(e,"id","sidebar-right"),c(e,"class",a[5])},m(s,t){O(s,e,t),r&&r.m(e,null),l=!0},p(s,t){r&&r.p&&(!l||t&131072)&&U(r,o,s,s[17],l?q(o,s[17],t,We):z(s[17]),ue),(!l||t&32)&&c(e,"class",s[5])},i(s){l||(v(r,s),l=!0)},o(s){H(r,s),l=!1},d(s){s&&g(e),r&&r.d(s)}}}function pe(a){let e,l,o;const r=a[18].footer,s=j(r,a,a[17],ce);return{c(){e=T("footer"),s&&s.c(),this.h()},l(t){e=C(t,"FOOTER",{id:!0,class:!0});var i=I(e);s&&s.l(i),i.forEach(g),this.h()},h(){c(e,"id","shell-footer"),c(e,"class",l="flex-none "+a[1])},m(t,i){O(t,e,i),s&&s.m(e,null),o=!0},p(t,i){s&&s.p&&(!o||i&131072)&&U(s,r,t,t[17],o?q(r,t[17],i,Ke):z(t[17]),ce),(!o||i&2&&l!==(l="flex-none "+t[1]))&&c(e,"class",l)},i(t){o||(v(s,t),o=!0)},o(t){H(s,t),o=!1},d(t){t&&g(e),s&&s.d(t)}}}function $e(a){let e,l,o,r,s,t,i,_,F,S,E,V,R,b,p,n=a[9].header&&be(a),f=a[9].sidebarLeft&&me(a),u=a[9].pageHeader&&ve(a);const B=a[18].default,A=j(B,a,a[17],null);let L=a[9].pageFooter&&Ee(a),P=a[9].sidebarRight&&Se(a),d=a[9].footer&&pe(a);return{c(){e=T("div"),n&&n.c(),l=M(),o=T("div"),f&&f.c(),r=M(),s=T("div"),u&&u.c(),t=M(),i=T("main"),A&&A.c(),F=M(),L&&L.c(),E=M(),P&&P.c(),V=M(),d&&d.c(),this.h()},l(h){e=C(h,"DIV",{id:!0,class:!0,"data-testid":!0});var k=I(e);n&&n.l(k),l=N(k),o=C(k,"DIV",{class:!0});var m=I(o);f&&f.l(m),r=N(m),s=C(m,"DIV",{id:!0,class:!0});var y=I(s);u&&u.l(y),t=N(y),i=C(y,"MAIN",{id:!0,class:!0});var le=I(i);A&&A.l(le),le.forEach(g),F=N(y),L&&L.l(y),y.forEach(g),E=N(m),P&&P.l(m),m.forEach(g),V=N(k),d&&d.l(k),k.forEach(g),this.h()},h(){c(i,"id","page-content"),c(i,"class",_="flex-auto "+a[3]),c(s,"id","page"),c(s,"class",S=a[0]+" "+Re),c(o,"class","flex-auto "+ll),c(e,"id","appShell"),c(e,"class",a[8]),c(e,"data-testid","app-shell")},m(h,k){O(h,e,k),n&&n.m(e,null),D(e,l),D(e,o),f&&f.m(o,null),D(o,r),D(o,s),u&&u.m(s,null),D(s,t),D(s,i),A&&A.m(i,null),D(s,F),L&&L.m(s,null),D(o,E),P&&P.m(o,null),D(e,V),d&&d.m(e,null),R=!0,b||(p=He(s,"scroll",a[19]),b=!0)},p(h,[k]){h[9].header?n?(n.p(h,k),k&512&&v(n,1)):(n=be(h),n.c(),v(n,1),n.m(e,l)):n&&(J(),H(n,1,1,()=>{n=null}),Q()),h[9].sidebarLeft?f?(f.p(h,k),k&512&&v(f,1)):(f=me(h),f.c(),v(f,1),f.m(o,r)):f&&(J(),H(f,1,1,()=>{f=null}),Q()),h[9].pageHeader?u?(u.p(h,k),k&512&&v(u,1)):(u=ve(h),u.c(),v(u,1),u.m(s,t)):u&&(J(),H(u,1,1,()=>{u=null}),Q()),A&&A.p&&(!R||k&131072)&&U(A,B,h,h[17],R?q(B,h[17],k,null):z(h[17]),null),(!R||k&8&&_!==(_="flex-auto "+h[3]))&&c(i,"class",_),h[9].pageFooter?L?(L.p(h,k),k&512&&v(L,1)):(L=Ee(h),L.c(),v(L,1),L.m(s,null)):L&&(J(),H(L,1,1,()=>{L=null}),Q()),(!R||k&1&&S!==(S=h[0]+" "+Re))&&c(s,"class",S),h[9].sidebarRight?P?(P.p(h,k),k&512&&v(P,1)):(P=Se(h),P.c(),v(P,1),P.m(o,null)):P&&(J(),H(P,1,1,()=>{P=null}),Q()),h[9].footer?d?(d.p(h,k),k&512&&v(d,1)):(d=pe(h),d.c(),v(d,1),d.m(e,null)):d&&(J(),H(d,1,1,()=>{d=null}),Q()),(!R||k&256)&&c(e,"class",h[8])},i(h){R||(v(n),v(f),v(u),v(A,h),v(L),v(P),v(d),R=!0)},o(h){H(n),H(f),H(u),H(A,h),H(L),H(P),H(d),R=!1},d(h){h&&g(e),n&&n.d(),f&&f.d(),u&&u.d(),A&&A.d(h),L&&L.d(),P&&P.d(),d&&d.d(),b=!1,p()}}}const el="w-full h-full flex flex-col overflow-hidden",ll="w-full h-full flex overflow-hidden",Re="flex-1 overflow-x-hidden flex flex-col",tl="flex-none overflow-x-hidden overflow-y-auto",sl="flex-none overflow-x-hidden overflow-y-auto";function al(a,e,l){let o,r,s,t,i,_,F,S,{$$slots:E={},$$scope:V}=e;const R=ke(E);let{regionPage:b=""}=e,{slotHeader:p="z-10"}=e,{slotSidebarLeft:n="w-auto"}=e,{slotSidebarRight:f="w-auto"}=e,{slotPageHeader:u=""}=e,{slotPageContent:B=""}=e,{slotPageFooter:A=""}=e,{slotFooter:L=""}=e;function P(d){Ce.call(this,a,d)}return a.$$set=d=>{l(20,e=X(X({},e),Y(d))),"regionPage"in d&&l(0,b=d.regionPage),"slotHeader"in d&&l(10,p=d.slotHeader),"slotSidebarLeft"in d&&l(11,n=d.slotSidebarLeft),"slotSidebarRight"in d&&l(12,f=d.slotSidebarRight),"slotPageHeader"in d&&l(13,u=d.slotPageHeader),"slotPageContent"in d&&l(14,B=d.slotPageContent),"slotPageFooter"in d&&l(15,A=d.slotPageFooter),"slotFooter"in d&&l(16,L=d.slotFooter),"$$scope"in d&&l(17,V=d.$$scope)},a.$$.update=()=>{l(8,o=`${el} ${e.class??""}`),a.$$.dirty&1024&&l(7,r=`${p}`),a.$$.dirty&2048&&l(6,s=`${tl} ${n}`),a.$$.dirty&4096&&l(5,t=`${sl} ${f}`),a.$$.dirty&8192&&l(4,i=`${u}`),a.$$.dirty&16384&&l(3,_=`${B}`),a.$$.dirty&32768&&l(2,F=`${A}`),a.$$.dirty&65536&&l(1,S=`${L}`)},e=Y(e),[b,S,F,_,i,t,s,r,o,R,p,n,f,u,B,A,L,V,E,P]}class ol extends w{constructor(e){super(),x(this,e,al,$e,$,{regionPage:0,slotHeader:10,slotSidebarLeft:11,slotSidebarRight:12,slotPageHeader:13,slotPageContent:14,slotPageFooter:15,slotFooter:16})}}function il(a){let e;const l=a[1].default,o=j(l,a,a[3],null);return{c(){o&&o.c()},l(r){o&&o.l(r)},m(r,s){o&&o.m(r,s),e=!0},p(r,s){o&&o.p&&(!e||s&8)&&U(o,l,r,r[3],e?q(l,r[3],s,null):z(r[3]),null)},i(r){e||(v(o,r),e=!0)},o(r){H(o,r),e=!1},d(r){o&&o.d(r)}}}function rl(a){let e,l,o,r,s,t,i,_,F,S,E,V,R,b,p,n;return{c(){e=T("div"),l=T("button"),o=T("a"),r=K("Qui suis-je?"),s=M(),t=T("button"),i=T("a"),_=K("Expérience"),F=M(),S=T("button"),E=T("a"),V=K("Éducation"),R=M(),b=T("button"),p=T("a"),n=K("Connaissances"),this.h()},l(f){e=C(f,"DIV",{class:!0});var u=I(e);l=C(u,"BUTTON",{type:!0,class:!0});var B=I(l);o=C(B,"A",{href:!0});var A=I(o);r=W(A,"Qui suis-je?"),A.forEach(g),B.forEach(g),s=N(u),t=C(u,"BUTTON",{type:!0,class:!0});var L=I(t);i=C(L,"A",{href:!0});var P=I(i);_=W(P,"Expérience"),P.forEach(g),L.forEach(g),F=N(u),S=C(u,"BUTTON",{type:!0,class:!0});var d=I(S);E=C(d,"A",{href:!0});var h=I(E);V=W(h,"Éducation"),h.forEach(g),d.forEach(g),R=N(u),b=C(u,"BUTTON",{type:!0,class:!0});var k=I(b);p=C(k,"A",{href:!0});var m=I(p);n=W(m,"Connaissances"),m.forEach(g),k.forEach(g),u.forEach(g),this.h()},h(){c(o,"href","#Whois"),c(l,"type","button"),c(l,"class","btn btn-lg hover:intersecting svelte-1hdx5t1"),G(l,"intersecting",a[0].whois),c(i,"href","#Experience"),c(t,"type","button"),c(t,"class","btn btn-lg bg-initial hover:variant-filled-primary svelte-1hdx5t1"),G(t,"intersecting",a[0].exp),c(E,"href","#Education"),c(S,"type","button"),c(S,"class","btn btn-lg bg-initial hover:variant-filled-primary svelte-1hdx5t1"),G(S,"intersecting",a[0].education),c(p,"href","#Connaissances"),c(b,"type","button"),c(b,"class","btn btn-lg bg-initial hover:variant-filled-primary border-surface-900-50-token svelte-1hdx5t1"),G(b,"intersecting",a[0].connaissances),c(e,"class","w-full flex flex-row justify-center gap-20")},m(f,u){O(f,e,u),D(e,l),D(l,o),D(o,r),D(e,s),D(e,t),D(t,i),D(i,_),D(e,F),D(e,S),D(S,E),D(E,V),D(e,R),D(e,b),D(b,p),D(p,n)},p(f,u){u&1&&G(l,"intersecting",f[0].whois),u&1&&G(t,"intersecting",f[0].exp),u&1&&G(S,"intersecting",f[0].education),u&1&&G(b,"intersecting",f[0].connaissances)},d(f){f&&g(e)}}}function nl(a){let e;return{c(){e=K("(icon)")},l(l){e=W(l,"(icon)")},m(l,o){O(l,e,o)},d(l){l&&g(e)}}}function fl(a){let e;return{c(){e=K("(actions)")},l(l){e=W(l,"(actions)")},m(l,o){O(l,e,o)},d(l){l&&g(e)}}}function cl(a){let e,l;return e=new Ge({props:{gridColumns:"grid-cols-3",slotDefault:"place-self-center",slotTrail:"place-content-end",$$slots:{trail:[fl],lead:[nl],default:[rl]},$$scope:{ctx:a}}}),{c(){Le(e.$$.fragment)},l(o){Pe(e.$$.fragment,o)},m(o,r){De(e,o,r),l=!0},p(o,r){const s={};r&9&&(s.$$scope={dirty:r,ctx:o}),e.$set(s)},i(o){l||(v(e.$$.fragment,o),l=!0)},o(o){H(e.$$.fragment,o),l=!1},d(o){Fe(e,o)}}}function ul(a){let e,l,o,r,s;return l=new ol({props:{$$slots:{header:[cl],default:[il]},$$scope:{ctx:a}}}),{c(){e=M(),Le(l.$$.fragment)},l(t){e=N(t),Pe(l.$$.fragment,t)},m(t,i){O(t,e,i),De(l,t,i),o=!0,r||(s=He(document,"scroll",a[2]),r=!0)},p(t,[i]){const _={};i&9&&(_.$$scope={dirty:i,ctx:t}),l.$set(_)},i(t){o||(v(l.$$.fragment,t),o=!0)},o(t){H(l.$$.fragment,t),o=!1},d(t){t&&g(e),Fe(l,t),r=!1,s()}}}function dl(){console.log("scrolled")}function _l(a,e,l){let o;Ie(a,te,i=>l(0,o=i));let{$$slots:r={},$$scope:s}=e;te.subscribe(i=>{});const t=()=>{dl()};return a.$$set=i=>{"$$scope"in i&&l(3,s=i.$$scope)},[o,r,t,s]}class ml extends w{constructor(e){super(),x(this,e,_l,ul,$,{})}}export{ml as component};
