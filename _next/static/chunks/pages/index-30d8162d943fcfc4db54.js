_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(o.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,o=e.hasQuery;return n||r&&(void 0!==o&&o)}},"5PhN":function(e,t,n){"use strict";var a=n("h4VS"),r=n("q1tI"),o=n.n(r),i=n("qBB9"),u=n.n(i),c=n("oiwt"),l=n.n(c),s=n("5D9J"),f=n("YFqc"),d=n.n(f),p=n("L0oS"),h=o.a.createElement;function m(){var e=Object(a.a)(["\n     border-bottom: 1px solid #eee;\n     &:last-child{\n         border-bottom: none;\n    }\n        a{\n            display: block;\n            padding: 25px 30px;\n            background: #fff;\n            &:hover {\n                .title{\n                        color: #2DB2A4;\n                }\n                img{\n                    transform: scale(1.1);\n                }\n            }\n        }\n\n     .flex{\n         display: flex;\n         .img{\n             width: 300px;\n             height: 200px;\n             border-radius: 5px;\n             overflow: hidden;\n            img{\n                width: 100%;\n                height: 100%;\n                object-fit: cover;\n                transition: ease-in-out .3s;\n            }\n         }\n         .text{\n             flex: 1;\n             padding-left: 20px;\n             .info{\n                 display: flex;\n                 justify-content: space-between;\n                 align-items: center;\n                 width: 100%;\n                 margin-bottom: 15px;\n                 color: #999;\n                 font-size: 15px;\n                 /* font-family: 'Noto Sans JP'; */\n             }\n             .time{\n                display: flex;\n                align-items: center;\n             }\n             .category{\n                display: flex;\n                align-items: center;\n            }\n             .title{\n                margin-bottom: 20px;\n                font-size: 28px;\n                font-weight: 700;\n                transition: ease-in-out .3s;\n             }\n             .body-text{\n                 color: #999;\n                 line-height: 1.6;\n             }\n             svg{\n                font-size: 1rem;\n                margin-right: 2px;\n             }\n         }\n     }\n"]);return m=function(){return e},e}var v=s.a.li(m());t.a=function(e){var t=e.post,n=Object(r.useState)(t.body),a=n[0],o=n[1],i=Object(p.a)(t),c=Object(r.useCallback)((function(){if(a){var e=a.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,"");if(e.length>100){var t=e.substr(0,100)+"...";o(t)}else o(e)}}),[]);return Object(r.useEffect)((function(){c()}),[]),h(v,null,h(d.a,{href:"/blog/[id]",as:"/blog/".concat(t.id)},h("a",null,h("div",{className:"flex"},h("div",{className:"img"},t.thumbnail?h("img",{src:t.thumbnail.url,alt:t.title}):h("img",{src:"/img/common/not-found.png",alt:t.title})),h("div",{className:"text"},h("div",{className:"info"},h("div",{className:"category"},h(u.a,null),h("p",null,t.category[0].category)),h("div",{className:"time"},h(l.a,null),h("time",null,i))),h("h2",{className:"title"},t.title),h("p",{className:"body-text"},a))))))}},"7W2i":function(e,t,n){var a=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(a=n("Xuae"))&&a.__esModule?a:{default:a},i=n("lwAK"),u=n("FYa8"),c=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var o=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var i=r.key.slice(r.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(r.type){case"title":case"base":t.has(r.type)?o=!1:t.add(r.type);break;case"meta":for(var u=0,c=d.length;u<c;u++){var l=d[u];if(r.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var s=r.props[l],f=a[l]||new Set;f.has(s)?o=!1:(f.add(s),a[l]=f)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,r.useContext)(i.AmpStateContext),a=(0,r.useContext)(u.HeadManagerContext);return r.default.createElement(o.default,{reduceComponentsToState:p,headManager:a,inAmpMode:(0,c.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var a;t.__esModule=!0,t.HeadManagerContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.HeadManagerContext=r},H0SL:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("cMU6")}])},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},L0oS:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("q1tI"),r=function(e){var t=Object(a.useState)(""),n=t[0],r=t[1],o=Object(a.useState)(""),i=o[0],u=o[1],c=Object(a.useState)(""),l=c[0],s=c[1];return Object(a.useEffect)((function(){var t=new Date(e.publishedAt);r(t.getFullYear()),u(t.getMonth()+1),s(t.getDate())}),[]),"".concat(n,"/").concat(i,"/").concat(l)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var a=n("Ijbi"),r=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return a(e)||r(e)||o(e)||i()}},Xuae:function(e,t,n){"use strict";var a=n("RIqP"),r=n("lwsE"),o=n("W8MJ"),i=n("PJYZ"),u=n("7W2i"),c=n("a1gu"),l=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=l(e);if(t){var r=l(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),d=!1,p=function(e){u(n,e);var t=s(n);function n(e){var o;return r(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(a(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,d&&o._hasHeadManager&&(o.props.headManager.mountedInstances.add(i(o)),o.emitChange()),o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=p},a1gu:function(e,t,n){var a=n("cDf5"),r=n("PJYZ");e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?r(e):t}},cMU6:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return h}));var a=n("q1tI"),r=n.n(a),o=(n("8Kt/"),n("5PhN")),i=n("h7RS"),u=n("h4VS"),c=n("5D9J"),l=(n("YFqc"),r.a.createElement);function s(){var e=Object(u.a)(["\nmargin: 50px auto;\nfont-size: 20px;\nul{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    li{\n        a{\n            display: block;\n            width: 40px;\n            line-height: 40px;\n            border: 1px solid #052936;\n            margin: 0 10px;\n            border-radius: 5px;\n            color: #052936;\n            box-shadow: 1px 1px 3px rgba(0,0,0,0.5);\n            &.is-active{\n                background: #052936;\n                color: #fff;\n                box-shadow: none;\n            }\n        }\n    }\n}\n"]);return s=function(){return e},e}var f=function(e){e.page;return l(d,null,l("ul",null,l("li",null,l("a",{className:"is-active"},"1")),l("li",null,l("a",null,"2")),l("li",null,l("a",null,"3")),l("li",null,l("a",null,"4")),l("li",null,l("a",null,"5")),l("li",null,l("a",null,"25"))))},d=c.a.div(s()),p=r.a.createElement,h=!0;t.default=function(e){var t=e.posts,n=e.categories,u=Object(a.useState)(1),c=u[0],l=u[1];return Object(a.useEffect)((function(){!function(){var e=Math.ceil(t.totalCount/10);l(e)}()}),[]),p(r.a.Fragment,null,p(i.a,{categories:n},p("ul",null,t.contents.map((function(e){return p(o.a,{post:e,className:"",key:e.id})}))),p(f,{page:c})))}},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r},oiwt:function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("q1tI")),o=(0,a(n("8/g6")).default)(r.default.createElement("path",{d:"M16.24 7.76C15.07 6.59 13.54 6 12 6v6l-4.24 4.24c2.34 2.34 6.14 2.34 8.49 0 2.34-2.34 2.34-6.14-.01-8.48zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"Timelapse");t.default=o},qBB9:function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("q1tI")),o=(0,a(n("8/g6")).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M12 2l-5.5 9h11z"}),r.default.createElement("circle",{cx:"17.5",cy:"17.5",r:"4.5"}),r.default.createElement("path",{d:"M3 13.5h8v8H3z"})),"Category");t.default=o}},[["H0SL",0,2,1,3]]]);