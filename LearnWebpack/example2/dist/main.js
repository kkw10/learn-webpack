!function(s){function e(e){for(var t,o,a=e[0],u=e[1],l=e[2],c=0,f=[];c<a.length;c++)o=a[c],Object.prototype.hasOwnProperty.call(j,o)&&j[o]&&f.push(j[o][0]),j[o]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(s[t]=u[t]);for(i&&i(e);f.length;)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var s,e=0;e<r.length;e++){for(var n=r[e],t=!0,a=1;a<n.length;a++){var u=n[a];0!==j[u]&&(t=!1)}t&&(r.splice(e--,1),s=o(o.s=n[0]))}return s}var t={},j={0:0},r=[];function o(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return s[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=s,o.c=t,o.d=function(s,e,n){o.o(s,e)||Object.defineProperty(s,e,{enumerable:!0,get:n})},o.r=function(s){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},o.t=function(s,e){if(1&e&&(s=o(s)),8&e)return s;if(4&e&&"object"==typeof s&&s&&s.__esModule)return s;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:s}),2&e&&"string"!=typeof s)for(var t in s)o.d(n,t,function(e){return s[e]}.bind(null,t));return n},o.n=function(s){var e=s&&s.__esModule?function(){return s.default}:function(){return s};return o.d(e,"a",e),e},o.o=function(s,e){return Object.prototype.hasOwnProperty.call(s,e)},o.p="";var a=window.webpackJsonp=window.webpackJsonp||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var i=u;r.push([129,1]),n()}({129:function(s,e,n){const t=n(0),j=n(131),r=document.querySelectorAll("p");document.addEventListener("DOMContentLoaded",(function(s){r[0].innerText=t().format(),r[1].innerText=j.drop([1,2,3],0)}))},130:function(s,e,n){var t={"./af":2,"./af.js":2,"./ar":3,"./ar-dz":4,"./ar-dz.js":4,"./ar-kw":5,"./ar-kw.js":5,"./ar-ly":6,"./ar-ly.js":6,"./ar-ma":7,"./ar-ma.js":7,"./ar-sa":8,"./ar-sa.js":8,"./ar-tn":9,"./ar-tn.js":9,"./ar.js":3,"./az":10,"./az.js":10,"./be":11,"./be.js":11,"./bg":12,"./bg.js":12,"./bm":13,"./bm.js":13,"./bn":14,"./bn.js":14,"./bo":15,"./bo.js":15,"./br":16,"./br.js":16,"./bs":17,"./bs.js":17,"./ca":18,"./ca.js":18,"./cs":19,"./cs.js":19,"./cv":20,"./cv.js":20,"./cy":21,"./cy.js":21,"./da":22,"./da.js":22,"./de":23,"./de-at":24,"./de-at.js":24,"./de-ch":25,"./de-ch.js":25,"./de.js":23,"./dv":26,"./dv.js":26,"./el":27,"./el.js":27,"./en-SG":28,"./en-SG.js":28,"./en-au":29,"./en-au.js":29,"./en-ca":30,"./en-ca.js":30,"./en-gb":31,"./en-gb.js":31,"./en-ie":32,"./en-ie.js":32,"./en-il":33,"./en-il.js":33,"./en-nz":34,"./en-nz.js":34,"./eo":35,"./eo.js":35,"./es":36,"./es-do":37,"./es-do.js":37,"./es-us":38,"./es-us.js":38,"./es.js":36,"./et":39,"./et.js":39,"./eu":40,"./eu.js":40,"./fa":41,"./fa.js":41,"./fi":42,"./fi.js":42,"./fo":43,"./fo.js":43,"./fr":44,"./fr-ca":45,"./fr-ca.js":45,"./fr-ch":46,"./fr-ch.js":46,"./fr.js":44,"./fy":47,"./fy.js":47,"./ga":48,"./ga.js":48,"./gd":49,"./gd.js":49,"./gl":50,"./gl.js":50,"./gom-latn":51,"./gom-latn.js":51,"./gu":52,"./gu.js":52,"./he":53,"./he.js":53,"./hi":54,"./hi.js":54,"./hr":55,"./hr.js":55,"./hu":56,"./hu.js":56,"./hy-am":57,"./hy-am.js":57,"./id":58,"./id.js":58,"./is":59,"./is.js":59,"./it":60,"./it-ch":61,"./it-ch.js":61,"./it.js":60,"./ja":62,"./ja.js":62,"./jv":63,"./jv.js":63,"./ka":64,"./ka.js":64,"./kk":65,"./kk.js":65,"./km":66,"./km.js":66,"./kn":67,"./kn.js":67,"./ko":68,"./ko.js":68,"./ku":69,"./ku.js":69,"./ky":70,"./ky.js":70,"./lb":71,"./lb.js":71,"./lo":72,"./lo.js":72,"./lt":73,"./lt.js":73,"./lv":74,"./lv.js":74,"./me":75,"./me.js":75,"./mi":76,"./mi.js":76,"./mk":77,"./mk.js":77,"./ml":78,"./ml.js":78,"./mn":79,"./mn.js":79,"./mr":80,"./mr.js":80,"./ms":81,"./ms-my":82,"./ms-my.js":82,"./ms.js":81,"./mt":83,"./mt.js":83,"./my":84,"./my.js":84,"./nb":85,"./nb.js":85,"./ne":86,"./ne.js":86,"./nl":87,"./nl-be":88,"./nl-be.js":88,"./nl.js":87,"./nn":89,"./nn.js":89,"./pa-in":90,"./pa-in.js":90,"./pl":91,"./pl.js":91,"./pt":92,"./pt-br":93,"./pt-br.js":93,"./pt.js":92,"./ro":94,"./ro.js":94,"./ru":95,"./ru.js":95,"./sd":96,"./sd.js":96,"./se":97,"./se.js":97,"./si":98,"./si.js":98,"./sk":99,"./sk.js":99,"./sl":100,"./sl.js":100,"./sq":101,"./sq.js":101,"./sr":102,"./sr-cyrl":103,"./sr-cyrl.js":103,"./sr.js":102,"./ss":104,"./ss.js":104,"./sv":105,"./sv.js":105,"./sw":106,"./sw.js":106,"./ta":107,"./ta.js":107,"./te":108,"./te.js":108,"./tet":109,"./tet.js":109,"./tg":110,"./tg.js":110,"./th":111,"./th.js":111,"./tl-ph":112,"./tl-ph.js":112,"./tlh":113,"./tlh.js":113,"./tr":114,"./tr.js":114,"./tzl":115,"./tzl.js":115,"./tzm":116,"./tzm-latn":117,"./tzm-latn.js":117,"./tzm.js":116,"./ug-cn":118,"./ug-cn.js":118,"./uk":119,"./uk.js":119,"./ur":120,"./ur.js":120,"./uz":121,"./uz-latn":122,"./uz-latn.js":122,"./uz.js":121,"./vi":123,"./vi.js":123,"./x-pseudo":124,"./x-pseudo.js":124,"./yo":125,"./yo.js":125,"./zh-cn":126,"./zh-cn.js":126,"./zh-hk":127,"./zh-hk.js":127,"./zh-tw":128,"./zh-tw.js":128};function j(s){var e=r(s);return n(e)}function r(s){if(!n.o(t,s)){var e=new Error("Cannot find module '"+s+"'");throw e.code="MODULE_NOT_FOUND",e}return t[s]}j.keys=function(){return Object.keys(t)},j.resolve=r,s.exports=j,j.id=130}});