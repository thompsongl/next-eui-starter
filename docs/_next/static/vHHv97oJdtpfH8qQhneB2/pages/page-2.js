(window.webpackJsonp=window.webpackJsonp||[]).push([[386],{"+xhR":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("gRv6"),i=n("bT+T"),u=n("BWMX"),s=n("pbrG"),l=n("R9SF"),c=n("JumW"),p=n("+dxP"),f=n("1GHy"),h=n("CCUd"),v=n("3vKy"),d=n("a5Ba"),m=o.a.createElement;t.default=function(){return m(i.a,{restrictWidth:!0},m(u.a,null,m(s.a,null,m(l.a,null,m(c.a,{size:"l"},m("h1",null,"Second Page title"))),m(l.a,null,"Page abilities")),m(p.a,null,m(f.a,null,m(h.a,null,m(c.a,null,m("h2",null,"Content title"))),m(h.a,null,"Content abilities")),m(v.a,null,m(a.b,{href:"/"},m("a",null,"Go to Home")),m(d.a,null),m(a.b,{href:"/my-app/[slug]",as:"/my-app/stack-monitoring"},m("a",null,"Go to Stack Monitoring"))))))}},"/ZoP":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/page-2",function(){return n("+xhR")}])},"/h46":function(e,t,n){n("cHUd")("Map")},"4mXO":function(e,t,n){e.exports=n("7TPF")},"7TPF":function(e,t,n){n("AUvm"),e.exports=n("WEpk").Object.getOwnPropertySymbols},LX0d:function(e,t,n){e.exports=n("UDep")},UDep:function(e,t,n){n("wgeU"),n("FlQf"),n("bBy9"),n("g33z"),n("XLbu"),n("/h46"),n("dVTT"),e.exports=n("WEpk").Map},XLbu:function(e,t,n){var r=n("Y7ZC");r(r.P+r.R,"Map",{toJSON:n("8iia")("Map")})},YFqc:function(e,t,n){e.exports=n("cTJO")},a5Ba:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n("q1tI"),o=n.n(r),a=n("17x9"),i=n.n(a),u=n("TSYQ"),s=n.n(u);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p={xs:"euiSpacer--xs",s:"euiSpacer--s",m:"euiSpacer--m",l:"euiSpacer--l",xl:"euiSpacer--xl",xxl:"euiSpacer--xxl"},f=(Object.keys(p),function(e){var t=e.className,n=e.size,r=void 0===n?"l":n,a=c(e,["className","size"]),i=s()("euiSpacer",p[r],t);return o.a.createElement("div",l({className:i},a))});f.propTypes={className:i.a.string,"aria-label":i.a.string,"data-test-subj":i.a.string,size:i.a.oneOf(["xs","s","m","l","xl","xxl"])},f.__docgenInfo={description:"",methods:[],displayName:"EuiSpacer",props:{size:{defaultValue:{value:"'l'",computed:!1},type:{name:"enum",value:[{value:'"xs"',computed:!1},{value:'"s"',computed:!1},{value:'"m"',computed:!1},{value:'"l"',computed:!1},{value:'"xl"',computed:!1},{value:'"xxl"',computed:!1}]},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""},"aria-label":{type:{name:"string"},required:!1,description:""},"data-test-subj":{type:{name:"string"},required:!1,description:""}}}},cTJO:function(e,t,n){"use strict";var r=n("/HRN"),o=n("WaGi"),a=n("ZDA2"),i=n("/+P4"),u=n("N9n2"),s=n("5Uuq"),l=n("KI45");t.__esModule=!0,t.default=void 0;var c,p=l(n("LX0d")),f=n("QmWs"),h=s(n("q1tI")),v=l(n("nOHt")),d=n("g/15");function m(e){return e&&"object"===typeof e?(0,d.formatWithValidation)(e):e}var y=new p.default,g=window.IntersectionObserver,b={};function x(){return c||(g?c=new g((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(c.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var O=function(e){function t(e){var n;return r(this,t),(n=a(this,i(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(o,a){if(r&&o===t&&a===n)return r;var i=e(o,a);return t=o,n=a,r=i,i}}((function(e,t){return{href:m(e),as:t?m(t):t}})),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,o=t.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=n.formatUrls(n.props.href,n.props.as),i=a.href,u=a.as;if(function(e){var t=(0,f.parse)(e,!1,!0),n=(0,f.parse)((0,d.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var s=window.location.pathname;i=(0,f.resolve)(s,i),u=u?(0,f.resolve)(s,u):i,e.preventDefault();var l=n.props.scroll;null==l&&(l=u.indexOf("#")<0),v.default[n.props.replace?"replace":"push"](i,u,{shallow:n.props.shallow}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==e.prefetch,n}return u(t,e),o(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getHref",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href;return(0,f.resolve)(e,t)}},{key:"handleRef",value:function(e){var t=this,n=b[this.getHref()];this.p&&g&&e&&e.tagName&&(this.cleanUpListeners(),n||(this.cleanUpListeners=function(e,t){var n=x();return n?(n.observe(e),y.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(){if(this.p){var e=this.getHref();v.default.prefetch(e),b[e]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=h.default.createElement("a",null,t));var a=h.Children.only(t),i={ref:function(t){e.handleRef(t),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(t):"object"===typeof a.ref&&(a.ref.current=t))},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch()},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||r),h.default.cloneElement(a,i)}}]),t}(h.Component);t.default=O},dVTT:function(e,t,n){n("aPfg")("Map")},g33z:function(e,t,n){"use strict";var r=n("Wu5q"),o=n("n3ko");e.exports=n("raTm")("Map",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(e){var t=r.getEntry(o(this,"Map"),e);return t&&t.v},set:function(e,t){return r.def(o(this,"Map"),0===e?0:e,t)}},r,!0)},gRv6:function(e,t,n){"use strict";var r=n("kOwS"),o=n("4mXO"),a=n.n(o),i=n("pLtp"),u=n.n(i);function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=u()(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(a.a){var i=a()(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=n("q1tI"),c=n.n(l),p=n("YFqc"),f=n.n(p);n.d(t,"a",(function(){return d}));var h=c.a.createElement,v="/next-eui-starter";function d(e){return e.startsWith("/")?v+e:v+"/"+e}t.b=function(e){var t=e.href,n=e.as,o=s(e,["href","as"]),a=null!=n?n:t,i="object"===typeof a?a.pathname:a;return h(f.a,Object(r.a)({href:t,as:d(i)},o))}},kOwS:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("UXZV"),o=n.n(r);function a(){return(a=o.a||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}}},[["/ZoP",0,2,1,376,377]]]);