(this.webpackJsonpolshop=this.webpackJsonpolshop||[]).push([[9],{287:function(e,a,t){"use strict";t.r(a);var l=t(12),n=t(0),r=t.n(n),c=t(216),u=t(217),m=t(226),i=t(227),E=t(228),o=t(211),s=t(212),d=t(218),v=t(238),f=t(236),h=t(244),b=t(105),j=t(62),O=t(280),g=t(86),p=t(22);var k=function(){var e=Object(n.useContext)(j.a),a=Object(l.a)(e,2),t=a[0],c=a[1],u=Object(n.useState)(""),f=Object(l.a)(u,2),h=f[0],k=f[1];return r.a.createElement(n.Fragment,null,r.a.createElement(m.a,{className:"card-default shadow"},r.a.createElement(i.a,null,r.a.createElement("h3",null,"Checkout")),r.a.createElement(E.a,null,t.map((function(e,a){return r.a.createElement(n.Fragment,{key:a},r.a.createElement(o.a,{inline:!0},r.a.createElement(s.a,{className:"mr-auto"},r.a.createElement(d.a,null,e.title," (\xd7",e.qyt,")")),r.a.createElement(s.a,null,r.a.createElement(d.a,null,Object(g.a)(e.price,"Rp. ")))))})),r.a.createElement("hr",null),r.a.createElement(o.a,{inline:!0},r.a.createElement(s.a,{className:"mr-auto"},r.a.createElement(v.a,{size:"small",variant:"outlined",label:"Voucher (opsional)",value:h,onChange:function(e){return k(e.target.value)}})),r.a.createElement(s.a,null,r.a.createElement(O.a,{variant:"contained",color:"primary",onClick:function(e){e.preventDefault();var a={id_user:1,voucher:h};console.log(a)}},"Cek"))),r.a.createElement("hr",null),r.a.createElement(o.a,{inline:!0},r.a.createElement(s.a,{className:"mr-auto"},r.a.createElement(d.a,null,"Ongkir")),r.a.createElement(s.a,null,r.a.createElement(d.a,null,Object(g.a)(6e3,"Rp. ")))),r.a.createElement("hr",null),r.a.createElement(o.a,{inline:!0},r.a.createElement(s.a,{className:"mr-auto"},r.a.createElement(d.a,null,"Total")),r.a.createElement(s.a,null,r.a.createElement(d.a,null," ",Object(g.a)(106e3,"Rp. ")," "))),r.a.createElement("hr",null),r.a.createElement(o.a,{inline:!0},r.a.createElement(s.a,{className:"mr-auto"},r.a.createElement(b.a,{className:"btn-brown"},"Lanjut")),r.a.createElement(s.a,null,r.a.createElement(p.b,{to:"/cart"},r.a.createElement(b.a,{className:"btn-peach",onClick:function(){c([])}},"Batal")))))))},N=t(284),C=t(255),S=t.n(C);a.default=function(){var e=Object(n.useState)([]),a=Object(l.a)(e,2),t=a[0],b=a[1],j=Object(n.useState)(null),O=Object(l.a)(j,2),g=O[0],p=O[1],C=Object(n.useState)(""),y=Object(l.a)(C,2),W=y[0],z=y[1],w=Object(n.useState)(""),K=Object(l.a)(w,2),I=K[0],P=K[1],_=Object(n.useState)(""),F=Object(l.a)(_,2),J=F[0],R=F[1],T=Object(n.useState)(""),B=Object(l.a)(T,2),L=B[0],q=B[1],x=Object(n.useState)(""),A=Object(l.a)(x,2),D=A[0],V=A[1],G=Object(n.useState)(""),H=Object(l.a)(G,2),M=H[0],Q=H[1];Object(n.useEffect)((function(){S.a.get("http://192.168.1.10:8000/ongkir/kota").then((function(e){b(e.data.data.rajaongkir.results)}))}),[]);var U=function(e){t.filter((function(a){return a.city_name===e.target.value})).map((function(e){return p(e.city_id)})),console.log(g)};return r.a.createElement(n.Fragment,null,r.a.createElement(c.a,null,r.a.createElement(u.a,{md:"8"},r.a.createElement(m.a,{className:"card-default shadow"},r.a.createElement(i.a,null,r.a.createElement("h3",null,"Order")),r.a.createElement(E.a,null,r.a.createElement(o.a,null,r.a.createElement(c.a,null,r.a.createElement(u.a,{md:"6"},r.a.createElement(s.a,null,r.a.createElement(d.a,null,"Nama Penerima"),r.a.createElement(v.a,{size:"small",fullWidth:!0,variant:"outlined",value:W,onChange:function(e){return z(e.target.value)}}))),r.a.createElement(u.a,{md:"6"},r.a.createElement(s.a,null,r.a.createElement(d.a,null,"No Telepon Penerima"),r.a.createElement(v.a,{size:"small",fullWidth:!0,variant:"outlined",value:I,onChange:function(e){return P(e.target.value)}}))),r.a.createElement(u.a,{md:"12"},r.a.createElement(d.a,null,"Kota/Kabupaten"),r.a.createElement(s.a,null,r.a.createElement(N.a,{id:"seacrh-city",options:t.map((function(e){return e.city_name})),renderInput:function(e){return r.a.createElement(v.a,Object.assign({fullWidth:!0,variant:"outlined"},e,{onSelect:U}))}}))),r.a.createElement(u.a,{md:"12"},r.a.createElement(s.a,null,r.a.createElement(d.a,null,"Kurir"),r.a.createElement(f.a,{fullWidth:!0,variant:"outlined",value:J,onChange:function(e){return R(e.target.value)}},r.a.createElement(h.a,{value:""},r.a.createElement("em",null,"None")),r.a.createElement(h.a,{value:"jne"},"JNE"),r.a.createElement(h.a,{value:"tiki"},"TIKI"),r.a.createElement(h.a,{value:"posi"},"POS Indonesia")))),r.a.createElement(u.a,{md:"12"},r.a.createElement(s.a,null,r.a.createElement(d.a,null,"Berat"),r.a.createElement(v.a,{size:"small",fullWidth:!0,variant:"outlined",value:L,onChange:function(e){return q(e.target.value)}}))),r.a.createElement(u.a,{md:"12"},r.a.createElement(s.a,null,r.a.createElement(d.a,null,"Kode Pos"),r.a.createElement(v.a,{size:"small",fullWidth:!0,variant:"outlined",value:D,onChange:function(e){return V(e.target.value)}}))),r.a.createElement(u.a,{md:"12"},r.a.createElement(s.a,null,r.a.createElement(d.a,null,"Alamat Lengkap"),r.a.createElement(v.a,{size:"small",fullWidth:!0,variant:"outlined",multiline:!0,value:M,onChange:function(e){return Q(e.target.value)}})))))))),r.a.createElement(u.a,{md:"4"},r.a.createElement(k,null))))}}}]);
//# sourceMappingURL=9.db1c1ba5.chunk.js.map