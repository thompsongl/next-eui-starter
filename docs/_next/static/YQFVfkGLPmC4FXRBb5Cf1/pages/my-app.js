(window.webpackJsonp=window.webpackJsonp||[]).push([[370],{"+iuc":function(t,e,n){n("wgeU"),n("FlQf"),n("bBy9"),n("B9jh"),n("dL40"),n("xvv9"),n("V+O7"),t.exports=n("WEpk").Set},"/0+H":function(t,e,n){"use strict";var r=n("hfKm"),u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};r(e,"__esModule",{value:!0});var a=u(n("q1tI")),i=n("lwAK");function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,u=void 0!==r&&r,a=t.hasQuery;return n||u&&(void 0!==a&&a)}e.isInAmpMode=o,e.useAmp=function(){return o(a.default.useContext(i.AmpStateContext))}},"0tVQ":function(t,e,n){n("FlQf"),n("VJsP"),t.exports=n("WEpk").Array.from},"2PDY":function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"8Kt/":function(t,e,n){"use strict";var r=n("ttDY"),u=n("hfKm"),a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};u(e,"__esModule",{value:!0});var i=a(n("q1tI")),o=a(n("Xuae")),l=n("lwAK"),c=n("FYa8"),f=n("/0+H");function s(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[i.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),e}function d(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===i.default.Fragment?t.concat(i.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=s;var p=["name","httpEquiv","charSet","itemProp"];function v(t,e){return t.reduce((function(t,e){var n=i.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(d,[]).reverse().concat(s(e.inAmpMode)).filter(function(){var t=new r,e=new r,n=new r,u={};return function(a){var i=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var o=a.key.slice(a.key.indexOf("$")+1);t.has(o)?i=!1:t.add(o)}switch(a.type){case"title":case"base":e.has(a.type)?i=!1:e.add(a.type);break;case"meta":for(var l=0,c=p.length;l<c;l++){var f=p[l];if(a.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?i=!1:n.add(f);else{var s=a.props[f],d=u[f]||new r;d.has(s)?i=!1:(d.add(s),u[f]=d)}}}return i}}()).reverse().map((function(t,e){var n=t.key||e;return i.default.cloneElement(t,{key:n})}))}var h=o.default();function m(t){var e=t.children;return i.default.createElement(l.AmpStateContext.Consumer,null,(function(t){return i.default.createElement(c.HeadManagerContext.Consumer,null,(function(n){return i.default.createElement(h,{reduceComponentsToState:v,handleStateChange:n,inAmpMode:f.isInAmpMode(t)},e)}))}))}m.rewind=h.rewind,e.default=m},B9jh:function(t,e,n){"use strict";var r=n("Wu5q"),u=n("n3ko");t.exports=n("raTm")("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return r.def(u(this,"Set"),t=0===t?0:t,t)}},r)},FYa8:function(t,e,n){"use strict";var r=n("hfKm"),u=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};r(e,"__esModule",{value:!0});var a=u(n("q1tI"));e.HeadManagerContext=a.createContext(null)},IP1Z:function(t,e,n){"use strict";var r=n("2faE"),u=n("rr1i");t.exports=function(t,e,n){e in t?r.f(t,e,u(0,n)):t[e]=n}},PQJW:function(t,e,n){var r=n("d04V"),u=n("yLu3");t.exports=function(t){if(u(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return r(t)}},QRzk:function(t,e,n){"use strict";n.r(e);var r=n("8Kt/"),u=n.n(r),a=n("q1tI"),i=n.n(a),o=n("bT+T"),l=n("BWMX"),c=n("pbrG"),f=n("R9SF"),s=n("JumW"),d=n("+dxP"),p=n("1GHy"),v=n("CCUd"),h=n("3vKy"),m=i.a.createElement;e.default=function(){return m(o.a,{restrictWidth:!0},m(u.a,null,m("title",null,"My App - Next.js EUI Starter")),m(l.a,null,m(c.a,null,m(f.a,null,m(s.a,{size:"l"},m("h1",null,"My App's index page")))),m(d.a,null,m(p.a,null,m(v.a,null,m(s.a,null,m("h2",null,"Content title")))),m(h.a,null,"This is just an index page. Nothing special."))))}},TbGu:function(t,e,n){var r=n("fGSI"),u=n("PQJW"),a=n("2PDY");t.exports=function(t){return r(t)||u(t)||a()}},"V+O7":function(t,e,n){n("aPfg")("Set")},VJsP:function(t,e,n){"use strict";var r=n("2GTP"),u=n("Y7ZC"),a=n("JB68"),i=n("sNwI"),o=n("NwJ3"),l=n("tEej"),c=n("IP1Z"),f=n("fNZA");u(u.S+u.F*!n("TuGD")((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,u,s,d=a(t),p="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,m=void 0!==h,y=0,w=f(d);if(m&&(h=r(h,v>2?arguments[2]:void 0,2)),void 0==w||p==Array&&o(w))for(n=new p(e=l(d.length));e>y;y++)c(n,y,m?h(d[y],y):d[y]);else for(s=w.call(d),n=new p;!(u=s.next()).done;y++)c(n,y,m?i(s,h,[u.value,y],!0):u.value);return n.length=y,n}})},Xuae:function(t,e,n){"use strict";var r=n("/HRN"),u=n("ZDA2"),a=n("/+P4"),i=n("K47E"),o=n("WaGi"),l=n("N9n2"),c=n("TbGu"),f=n("ttDY");n("hfKm")(e,"__esModule",{value:!0});var s=n("q1tI"),d=!1;e.default=function(){var t,e=new f;function n(n){t=n.props.reduceComponentsToState(c(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return function(c){function f(t){var o;return r(this,f),o=u(this,a(f).call(this,t)),d&&(e.add(i(o)),n(i(o))),o}return l(f,c),o(f,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),o(f,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),f}(s.Component)}},d04V:function(t,e,n){t.exports=n("0tVQ")},dL40:function(t,e,n){var r=n("Y7ZC");r(r.P+r.R,"Set",{toJSON:n("8iia")("Set")})},fGSI:function(t,e,n){var r=n("p0XB");t.exports=function(t){if(r(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},keiL:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my-app",function(){return n("QRzk")}])},lwAK:function(t,e,n){"use strict";var r=n("hfKm"),u=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};r(e,"__esModule",{value:!0});var a=u(n("q1tI"));e.AmpStateContext=a.createContext({})},ttDY:function(t,e,n){t.exports=n("+iuc")},xvv9:function(t,e,n){n("cHUd")("Set")}},[["keiL",0,2,1,3,4]]]);