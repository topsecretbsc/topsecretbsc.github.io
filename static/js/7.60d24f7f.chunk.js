(this["webpackJsonptopsecret-frontend"]=this["webpackJsonptopsecret-frontend"]||[]).push([[7],{829:function(e,t,n){"use strict";var r=n(1),a=n(234),c=/%(.*?)%/,i=function(e,t,n){var r=e.find((function(e){return e.data.stringId===t}));if(r){var a=r.data.text;return a.includes("%")?function(e,t){var n=c.exec(e)[0],r=t.split(" ")[0];return e.replace(n,r)}(a,n):a}return n};t.a=function(){var e=Object(r.useContext)(a.a).translations;return function(t,n){return"error"===e[0]?n:e.length>0?i(e,t,n):n}}},830:function(e,t,n){"use strict";var r=n(1),a=n(238);t.a=function(){return Object(r.useContext)(a.a)}},831:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i}));var r=n(13),a=n.n(r),c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18,n=new a.a(e).dividedBy(new a.a(10).pow(t));return n.toNumber()},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18;return e.dividedBy(new a.a(10).pow(t)).toFixed()}},832:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return l}));var r=n(6),a=n.n(r),c=n(17),i=n(96),o=n.n(i),u=n(65),s=function(e,t){return new(new o.a(e).eth.Contract)(u,t)},f=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.methods.allowance(r,n.options.address).call();case 3:return c=e.sent,e.abrupt("return",c);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return","0");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,r){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r){var c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=s(t,n),e.prev=1,e.next=4,c.methods.balanceOf(r).call();case 4:return i=e.sent,e.abrupt("return",i);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return","0");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n,r){return e.apply(this,arguments)}}()},833:function(e,t,n){"use strict";var r=n(2),a=n(0),c=(n(1),n(139)),i=n(94);t.a=function(e){var t=Object(i.m)(),n=t.connect,o=t.reset,u=Object(c.useWalletModal)(n,o).onPresentConnectModal;return Object(a.jsx)(c.Button,Object(r.a)(Object(r.a)({onClick:u},e),{},{children:"Unlock Wallet"}))}},834:function(e,t,n){"use strict";n.d(t,"a",(function(){return x})),n.d(t,"b",(function(){return v})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return w}));var r=n(6),a=n.n(r),c=n(17),i=n(18),o=n(1),u=n(94),s=n(61),f=n(183),l=n(832),p=n(233),b=n(13),d=n.n(b),j=n(141),m=n(140),O=n(830),x=function(e,t){var n=Object(o.useState)(!1),r=Object(i.a)(n,2),a=r[0],c=r[1],s=Object(u.m)().account,f=Object(O.a)();return Object(o.useEffect)((function(){a||Object(l.a)(e,t,s).then((function(e){if(s){var t=new d.a(e);c(t&&t.isGreaterThan(0))}}))}),[s,t,e,f,a]),a},v=function(e,t){var n=Object(s.b)(),r=Object(u.m)().account,i=Object(m.d)();return{onApprove:Object(o.useCallback)(Object(c.a)(a.a.mark((function c(){var o;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(p.a)(e,i,r,t);case 3:return o=a.sent,t||n(Object(j.b)(r)),a.abrupt("return",o);case 8:return a.prev=8,a.t0=a.catch(0),console.error(a.t0),a.abrupt("return",!1);case 12:case"end":return a.stop()}}),c,null,[[0,8]])}))),[r,n,e,i,t])}},h=function(e,t){var n=Object(u.m)().account;return{onApprove:Object(o.useCallback)(Object(c.a)(a.a.mark((function r(){return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(p.a)(e,t,n);case 3:return r.abrupt("return",r.sent);case 6:return r.prev=6,r.t0=r.catch(0),console.error(r.t0),r.abrupt("return",!1);case 10:case"end":return r.stop()}}),r,null,[[0,6]])}))),[n,e,t])}},w=function(e,t){var n=Object(s.b)(),r=Object(u.m)().account,i=Object(m.e)(t);return{onApprove:Object(o.useCallback)(Object(c.a)(a.a.mark((function c(){var o;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(p.a)(e,i,r);case 3:return o=a.sent,n(Object(f.c)(t,r)),a.abrupt("return",o);case 8:return a.prev=8,a.t0=a.catch(0),a.abrupt("return",!1);case 11:case"end":return a.stop()}}),c,null,[[0,8]])}))),[r,n,e,i,t])}}},835:function(e,t,n){"use strict";n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return x}));var r=n(6),a=n.n(r),c=n(17),i=n(18),o=n(1),u=n(13),s=n.n(u),f=n(94),l=n(241),p=n(147),b=n(832),d=n(30),j=n(126),m=n(830),O=function(e,t){var n=Object(o.useState)(new s.a(0)),r=Object(i.a)(n,2),u=r[0],l=r[1],p=Object(f.m)().ethereum,d=Object(m.a)();return Object(o.useEffect)((function(){t&&p&&function(){var n=Object(c.a)(a.a.mark((function n(){var r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(b.c)(p,e,t);case 2:r=n.sent,l(new s.a(r));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()}),[t,p,e,d]),u},x=function(){var e=Object(j.a)().slowRefresh,t=Object(o.useState)(),n=Object(i.a)(t,2),r=n[0],u=n[1];return Object(o.useEffect)((function(){function e(){return(e=Object(c.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(p.a)(l,Object(d.f)()),e.next=3,t.methods.totalSupply().call();case 3:n=e.sent,u(new s.a(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),r};t.a=function(e){var t=Object(o.useState)(new s.a(0)),n=Object(i.a)(t,2),r=n[0],u=n[1],l=Object(f.m)(),p=l.account,d=l.ethereum,j=Object(m.a)();return Object(o.useEffect)((function(){p&&d&&function(){var t=Object(c.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(b.c)(d,e,p);case 2:n=t.sent,u(new s.a(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[p,d,e,j]),r}},837:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var r=n(18),a=n(1),c=n(94),i=n(140),o=n(126),u=n(830),s=function(){var e=Object(a.useState)(void 0),t=Object(r.a)(e,2),n=t[0],o=t[1],s=Object(c.m)().account,f=Object(u.a)(),l=Object(i.b)();return Object(a.useEffect)((function(){s&&l.methods.getUserLastResult(s).call().then(o)}),[s,l,f]),n};t.a=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],u=t[1],s=Object(c.m)().account,f=Object(o.a)().fastRefresh,l=Object(i.d)();return Object(a.useEffect)((function(){s&&!n&&l.methods.isMember().call({from:s}).then(u)}),[s,n,l,f]),[n]}},838:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return j})),n.d(t,"c",(function(){return m}));var r=n(43),a=n(6),c=n.n(a),i=n(17),o=n(1),u=n(94),s=n(61),f=n(183),l=n(233),p=n(140),b=n(141),d=function(e){var t=Object(s.b)(),n=Object(u.m)().account,r=Object(p.d)();return{onReward:Object(o.useCallback)(Object(i.a)(c.a.mark((function a(){var i;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(l.d)(r,e,n);case 2:return i=a.sent,t(Object(b.b)(n)),a.abrupt("return",i);case 5:case"end":return a.stop()}}),a)}))),[n,t,e,r])}},j=function(e){var t=Object(u.m)().account,n=Object(p.d)();return{onReward:Object(o.useCallback)(Object(i.a)(c.a.mark((function a(){var i;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return i=e.reduce((function(e,a){return[].concat(Object(r.a)(e),[Object(l.d)(n,a,t)])}),[]),a.abrupt("return",Promise.all(i));case 2:case"end":return a.stop()}}),a)}))),[t,e,n])}},m=function(e){var t=Object(s.b)(),n=Object(u.m)().account,r=Object(p.e)(e);return{onReward:Object(o.useCallback)(Object(i.a)(c.a.mark((function a(){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(l.k)(r,n);case 2:t(Object(f.e)(e,n)),t(Object(f.d)(e,n));case 4:case"end":return a.stop()}}),a)}))),[n,t,r,e])}}},845:function(e,t,n){"use strict";var r=n(18),a=n(1),c=n(140),i=n(126);t.a=function(){var e=Object(a.useState)(0),t=Object(r.a)(e,2),n=t[0],o=t[1],u=Object(i.a)().fastRefresh,s=Object(c.d)();return Object(a.useEffect)((function(){n||s.methods.memberLength().call().then(o)}),[n,s,u]),n}},846:function(e,t,n){"use strict";function r(e){return e&&"object"===typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(75)),c=n(1),i=r(c),o=r(n(847)),u=r(n(848));function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?j(e):t}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],r=!0,a=!1,c=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){a=!0,c=u}finally{try{r||null==o.return||o.return()}finally{if(a)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var x=function(e,t){var n=t.decimal,r=t.decimals,a=t.duration,c=t.easingFn,i=t.end,o=t.formattingFn,s=t.prefix,f=t.separator,l=t.start,p=t.suffix,b=t.useEasing;return new u(e,l,i,r,a,{decimal:n,easingFn:c,formattingFn:o,separator:f,prefix:s,suffix:p,useEasing:b,useGrouping:!!f})},v=function(e){function t(){var e,n;s(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return l(j(n=m(this,(e=b(t)).call.apply(e,[this].concat(a)))),"createInstance",(function(){return"function"===typeof n.props.children&&o(n.containerRef.current&&(n.containerRef.current instanceof HTMLElement||n.containerRef.current instanceof SVGTextElement||n.containerRef.current instanceof SVGTSpanElement),'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.'),x(n.containerRef.current,n.props)})),l(j(n),"pauseResume",(function(){var e=j(n),t=e.reset,r=e.restart,a=e.update,c=n.props.onPauseResume;n.instance.pauseResume(),c({reset:t,start:r,update:a})})),l(j(n),"reset",(function(){var e=j(n),t=e.pauseResume,r=e.restart,a=e.update,c=n.props.onReset;n.instance.reset(),c({pauseResume:t,start:r,update:a})})),l(j(n),"restart",(function(){n.reset(),n.start()})),l(j(n),"start",(function(){var e=j(n),t=e.pauseResume,r=e.reset,a=e.restart,c=e.update,i=n.props,o=i.delay,u=i.onEnd,s=i.onStart,f=function(){return n.instance.start((function(){return u({pauseResume:t,reset:r,start:a,update:c})}))};o>0?n.timeoutId=setTimeout(f,1e3*o):f(),s({pauseResume:t,reset:r,update:c})})),l(j(n),"update",(function(e){var t=j(n),r=t.pauseResume,a=t.reset,c=t.restart,i=n.props.onUpdate;n.instance.update(e),i({pauseResume:r,reset:a,start:c})})),l(j(n),"containerRef",i.createRef()),n}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){var e=this.props,t=e.children,n=e.delay;this.instance=this.createInstance(),"function"===typeof t&&0!==n||this.start()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props,n=t.end,r=t.start,a=t.suffix,c=t.prefix,i=t.redraw,o=t.duration,u=t.separator,s=t.decimals,f=t.decimal;return o!==e.duration||n!==e.end||r!==e.start||a!==e.suffix||c!==e.prefix||u!==e.separator||s!==e.decimals||f!==e.decimal||i}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.end,r=t.start,a=t.suffix,c=t.prefix,i=t.duration,o=t.separator,u=t.decimals,s=t.decimal,f=t.preserveValue;i===e.duration&&r===e.start&&a===e.suffix&&c===e.prefix&&o===e.separator&&u===e.decimals&&s===e.decimal||(this.instance.reset(),this.instance=this.createInstance(),this.start()),n!==e.end&&(f||this.instance.reset(),this.instance.update(n))}},{key:"componentWillUnmount",value:function(){this.timeoutId&&clearTimeout(this.timeoutId),this.instance.reset()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,r=e.style,a=this.containerRef,c=this.pauseResume,o=this.reset,u=this.restart,s=this.update;return"function"===typeof t?t({countUpRef:a,pauseResume:c,reset:o,start:u,update:s}):i.createElement("span",{className:n,ref:a,style:r})}}])&&f(n.prototype,r),a&&f(n,a),t}(c.Component);l(v,"propTypes",{decimal:a.string,decimals:a.number,delay:a.number,easingFn:a.func,end:a.number.isRequired,formattingFn:a.func,onEnd:a.func,onStart:a.func,prefix:a.string,redraw:a.bool,separator:a.string,start:a.number,startOnMount:a.bool,suffix:a.string,style:a.object,useEasing:a.bool,preserveValue:a.bool}),l(v,"defaultProps",{decimal:".",decimals:0,delay:null,duration:null,easingFn:null,formattingFn:null,onEnd:function(){},onPauseResume:function(){},onReset:function(){},onStart:function(){},onUpdate:function(){},prefix:"",redraw:!1,separator:"",start:0,startOnMount:!0,suffix:"",style:void 0,useEasing:!0,preserveValue:!1});var h={innerHTML:null};t.default=v,t.useCountUp=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},v.defaultProps,{},e),n=t.start,r=t.formattingFn,a=O(c.useState("function"===typeof r?r(n):n),2),i=a[0],o=a[1],u=c.useRef(null),s=function(){var e=u.current;if(null!==e)return e;var n=function(){var e=x(h,t),n=e.options.formattingFn;return e.options.formattingFn=function(){var e=n.apply(void 0,arguments);o(e)},e}();return u.current=n,n},f=function(){var e=t.onReset;s().reset(),e({pauseResume:d,start:b,update:j})},b=function e(){var n=t.onStart,r=t.onEnd;s().reset(),s().start((function(){r({pauseResume:d,reset:f,start:e,update:j})})),n({pauseResume:d,reset:f,update:j})},d=function(){var e=t.onPauseResume;s().pauseResume(),e({reset:f,start:b,update:j})},j=function(e){var n=t.onUpdate;s().update(e),n({pauseResume:d,reset:f,start:b})};return c.useEffect((function(){var e=t.delay,n=t.onStart,r=t.onEnd;if(t.startOnMount)var a=setTimeout((function(){n({pauseResume:d,reset:f,update:j}),s().start((function(){clearTimeout(a),r({pauseResume:d,reset:f,start:b,update:j})}))}),1e3*e);return f}),[]),{countUp:i,start:b,pauseResume:d,reset:f,update:j}}},847:function(e,t,n){"use strict";var r=function(){};e.exports=r},848:function(e,t,n){var r,a;void 0===(a="function"===typeof(r=function(e,t,n){return function(e,t,n,r,a,c){function i(e){var t,n,r,a,c,i,o=e<0;if(e=Math.abs(e).toFixed(s.decimals),n=(t=(e+="").split("."))[0],r=t.length>1?s.options.decimal+t[1]:"",s.options.useGrouping){for(a="",c=0,i=n.length;c<i;++c)0!==c&&c%3===0&&(a=s.options.separator+a),a=n[i-c-1]+a;n=a}return s.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(e){return s.options.numerals[+e]})),r=r.replace(/[0-9]/g,(function(e){return s.options.numerals[+e]}))),(o?"-":"")+s.options.prefix+n+r+s.options.suffix}function o(e,t,n,r){return n*(1-Math.pow(2,-10*e/r))*1024/1023+t}function u(e){return"number"==typeof e&&!isNaN(e)}var s=this;if(s.version=function(){return"1.9.3"},s.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:o,formattingFn:i,prefix:"",suffix:"",numerals:[]},c&&"object"==typeof c)for(var f in s.options)c.hasOwnProperty(f)&&null!==c[f]&&(s.options[f]=c[f]);""===s.options.separator?s.options.useGrouping=!1:s.options.separator=""+s.options.separator;for(var l=0,p=["webkit","moz","ms","o"],b=0;b<p.length&&!window.requestAnimationFrame;++b)window.requestAnimationFrame=window[p[b]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[p[b]+"CancelAnimationFrame"]||window[p[b]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),r=Math.max(0,16-(n-l)),a=window.setTimeout((function(){e(n+r)}),r);return l=n+r,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)}),s.initialize=function(){return!!s.initialized||(s.error="",s.d="string"==typeof e?document.getElementById(e):e,s.d?(s.startVal=Number(t),s.endVal=Number(n),u(s.startVal)&&u(s.endVal)?(s.decimals=Math.max(0,r||0),s.dec=Math.pow(10,s.decimals),s.duration=1e3*Number(a)||2e3,s.countDown=s.startVal>s.endVal,s.frameVal=s.startVal,s.initialized=!0,!0):(s.error="[CountUp] startVal ("+t+") or endVal ("+n+") is not a number",!1)):(s.error="[CountUp] target is null or undefined",!1))},s.printValue=function(e){var t=s.options.formattingFn(e);"INPUT"===s.d.tagName?this.d.value=t:"text"===s.d.tagName||"tspan"===s.d.tagName?this.d.textContent=t:this.d.innerHTML=t},s.count=function(e){s.startTime||(s.startTime=e),s.timestamp=e;var t=e-s.startTime;s.remaining=s.duration-t,s.options.useEasing?s.countDown?s.frameVal=s.startVal-s.options.easingFn(t,0,s.startVal-s.endVal,s.duration):s.frameVal=s.options.easingFn(t,s.startVal,s.endVal-s.startVal,s.duration):s.countDown?s.frameVal=s.startVal-(s.startVal-s.endVal)*(t/s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(t/s.duration),s.countDown?s.frameVal=s.frameVal<s.endVal?s.endVal:s.frameVal:s.frameVal=s.frameVal>s.endVal?s.endVal:s.frameVal,s.frameVal=Math.round(s.frameVal*s.dec)/s.dec,s.printValue(s.frameVal),t<s.duration?s.rAF=requestAnimationFrame(s.count):s.callback&&s.callback()},s.start=function(e){s.initialize()&&(s.callback=e,s.rAF=requestAnimationFrame(s.count))},s.pauseResume=function(){s.paused?(s.paused=!1,delete s.startTime,s.duration=s.remaining,s.startVal=s.frameVal,requestAnimationFrame(s.count)):(s.paused=!0,cancelAnimationFrame(s.rAF))},s.reset=function(){s.paused=!1,delete s.startTime,s.initialized=!1,s.initialize()&&(cancelAnimationFrame(s.rAF),s.printValue(s.startVal))},s.update=function(e){if(s.initialize()){if(!u(e=Number(e)))return void(s.error="[CountUp] update() - new endVal is not a number: "+e);s.error="",e!==s.frameVal&&(cancelAnimationFrame(s.rAF),s.paused=!1,delete s.startTime,s.startVal=s.frameVal,s.endVal=e,s.countDown=s.startVal>s.endVal,s.rAF=requestAnimationFrame(s.count))}},s.initialize()&&s.printValue(s.startVal)}})?r.call(t,n,t,e):r)||(e.exports=a)},849:function(e,t,n){"use strict";var r=n(0),a=n(6),c=n.n(a),i=n(17),o=n(18),u=n(9),s=n(1),f=n(94),l=n(88),p=n(65),b=n(139),d=n(8),j=n(833),m=n(126),O=n(30),x=n(37),v=n(834),h=n(13),w=n.n(h),g=n(24),y=n(140),k=n(233);function S(){var e=Object(u.a)(["\n  margin-top: 24px;\n"]);return S=function(){return e},e}function V(){var e=Object(u.a)(["\n  min-height: 376px;\n"]);return V=function(){return e},e}var R=Object(d.e)(b.Card)(V()),T=d.e.div(S()),C=["bribeFee","joinFee","joinGift"],F=new w.a(10).pow(18),A=function(e){var t=e.allowanceC,n=e.isJoin,a=Object(f.m)().account,u=Object(s.useState)(!1),l=Object(o.a)(u,2),p=l[0],d=l[1],j=a&&t&&t.isGreaterThan(0),m=Object(v.b)(Object(y.a)(g.a[n?"C100":"busd"][56])).onApprove,O=Object(y.d)(),x=n?"Join":"Bribe",h=Object(s.useCallback)(Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.next=4,m();case 4:d(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[m]),w=Object(s.useCallback)(Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,d(!0),!n){e.next=7;break}return e.next=5,Object(k.f)(O,a);case 5:e.next=9;break;case 7:return e.next=9,Object(k.b)(O,a);case 9:d(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])}))),[O,a,n]);return Object(r.jsx)(T,{children:j?Object(r.jsx)(b.Button,{fullWidth:!0,disabled:p,onClick:w,children:x}):Object(r.jsx)(b.Button,{fullWidth:!0,disabled:p,onClick:h,children:"Approve Contract for ".concat(x)})})};t.a=function(){var e=Object(f.m)().account,t=function(){var e=Object(O.b)(),t=Object(f.m)().account,n=Object(s.useState)(null),r=Object(o.a)(n,2),a=r[0],u=r[1],b=Object(s.useState)(null),d=Object(o.a)(b,2),j=d[0],v=d[1],h=Object(s.useState)(null),y=Object(o.a)(h,2),k=y[0],S=y[1],V=Object(s.useState)(null),R=Object(o.a)(V,2),T=R[0],A=R[1],z=Object(s.useState)(null),E=Object(o.a)(z,2),P=E[0],N=E[1],U=Object(m.a)().fastRefresh;return Object(s.useEffect)((function(){!function(){var n=Object(i.a)(c.a.mark((function n(){var r,a,i,s,f,b,d,j,m,O,h;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=C.map((function(t){return{address:e,name:t,params:[]}})),n.next=3,Object(x.a)(l,r);case 3:if(a=n.sent,i=Object(o.a)(a,3),s=i[0],f=i[1],b=i[2],u(new w.a(s).div(F)),v(new w.a(f).div(F)),S(new w.a(b).div(F)),t){n.next=13;break}return n.abrupt("return");case 13:return d=[{address:g.a.C100[56],name:"allowance",params:[t,e]},{address:g.a.busd[56],name:"allowance",params:[t,e]}],n.next=16,Object(x.a)(p,d);case 16:j=n.sent,m=Object(o.a)(j,2),O=m[0],h=m[1],A(new w.a(O)),N(new w.a(h));case 22:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()}),[U,t,e]),[a,j,k,T,P]}(),n=Object(o.a)(t,5),a=n[0],u=n[1],d=n[2],v=n[3],h=n[4];return Object(r.jsx)(R,{children:Object(r.jsxs)(b.CardBody,{children:[Object(r.jsx)(b.Heading,{size:"lg",mb:"24px",children:"Join Top Secret Finance"}),Object(r.jsx)(b.Heading,{size:"md",mb:"16px",color:"secondary",children:u&&d?"Exchange ".concat(u.toNumber()," C101 Information Token for access and get ").concat(d.toNumber()," A009 Access Level Tokens."):"Exchange some C101 Information Token for access and get some A009 Access Level Tokens."}),Object(r.jsx)(b.Heading,{size:"md",mb:"16px",color:"secondary",children:a?"You can also bribe with ".concat(a.toNumber()," BUSD to access."):"You can also bribe with some BUSD to access."}),Object(r.jsx)(b.Heading,{size:"md",mb:"16px",color:"secondary",children:"MasterSpy tip: You can ask another Agent to invite join for free."}),e?Object(r.jsxs)(r.Fragment,{children:[u&&Object(r.jsx)(A,{allowanceC:v,isJoin:!0}),a&&Object(r.jsx)(A,{allowanceC:h,isJoin:!1})]}):Object(r.jsx)(T,{children:Object(r.jsx)(j.a,{fullWidth:!0})})]})})}},946:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ie}));var r=n(0),a=n(18),c=n(9),i=n(1),o=n(8),u=n(139),s=n(94),f=n(837),l=n(235),p=n(6),b=n.n(p),d=n(17),j=n(838),m=n(2),O=n(13),x=n.n(O),v=n(37),h=n(30),w=n(88),g=n(245),y=n(126),k=function(){var e=Object(i.useState)([]),t=Object(a.a)(e,2),n=t[0],r=t[1],c=Object(s.m)().account,o=Object(y.a)().fastRefresh;return Object(i.useEffect)((function(){c&&function(){var e=Object(d.a)(b.a.mark((function e(){var t,n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g.a.filter((function(e){return!e.ignore})).map((function(e){return{address:Object(h.b)(),name:"pendingReward",params:[e.pid,c]}})),e.next=3,Object(v.a)(w,t);case 3:n=e.sent,a=g.a.map((function(e,t){return Object(m.a)(Object(m.a)({},e),{},{balance:new x.a(n[t])})})),r(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[c,o]),n},S=n(833),V=n(829),R=function(){var e=Object(i.useState)([]),t=Object(a.a)(e,2),n=t[0],r=t[1],c=Object(s.m)().account,o=Object(y.a)().fastRefresh;return Object(i.useEffect)((function(){c&&function(){var e=Object(d.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g.a.filter((function(e){return!e.ignore})).map((function(e){return{address:Object(h.b)(),name:"pendingReward",params:[e.pid,c]}})),e.next=3,Object(v.a)(w,t);case 3:n=e.sent,r(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[c,o]),n},T=function(e){var t=e.aPrice,n=Object(V.a)(),a=Object(s.m)().account,c=R().reduce((function(e,t){return e+new x.a(t).div(new x.a(10).pow(18)).toNumber()}),0),i=c.toFixed(4),o=t.multipliedBy(c).toFixed(2);return a?Object(r.jsxs)(u.Text,{fontSize:"24px",style:{lineHeight:"60px"},children:[" "," ".concat(i," ( ").concat(o," $ )")," "]}):Object(r.jsx)(u.Text,{color:"textDisabled",style:{lineHeight:"60px"},children:n(298,"Locked")})},C=n(835),F=n(831),A=function(e){var t=e.aPrice,n=Object(V.a)(),a=Object(C.a)(Object(h.f)());if(!Object(s.m)().account)return Object(r.jsx)(u.Text,{color:"textDisabled",style:{lineHeight:"36px"},children:n(298,"Locked")});var c=Object(F.a)(a,18).toFixed(4),i=t.multipliedBy(Object(F.a)(a,18)).toFixed(2);return Object(r.jsxs)(u.Text,{fontSize:"24px",style:{lineHeight:"60px"},children:[" "," ".concat(c," ( ").concat(i," $ )")," "]})},z=n(145);function E(){var e=Object(c.a)(["\n  margin-top: 24px;\n"]);return E=function(){return e},e}function P(){var e=Object(c.a)(["\n  color: ",";\n  font-size: 14px;\n"]);return P=function(){return e},e}function N(){var e=Object(c.a)(["\n  margin-bottom: 16px;\n"]);return N=function(){return e},e}function U(){var e=Object(c.a)(["\n  min-height: 376px;\n"]);return U=function(){return e},e}var B=Object(o.e)(u.Card)(U()),M=o.e.div(N()),H=o.e.div(P(),(function(e){return e.theme.colors.textSubtle})),D=o.e.div(E()),L=function(){var e=Object(i.useState)(!1),t=Object(a.a)(e,2),n=t[0],c=t[1],o=Object(s.m)().account,f=k(),l=Object(z.g)(),p=f.filter((function(e){return e.balance.toNumber()>0})),m=Object(j.a)(p.map((function(e){return e.pid}))).onReward,O=Object(i.useCallback)(Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,m();case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.error(e.t0);case 9:return e.prev=9,c(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[1,6,9,12]])}))),[m]);return Object(r.jsx)(B,{children:Object(r.jsxs)(u.CardBody,{children:[Object(r.jsx)(u.Heading,{size:"lg",mb:"24px",children:"Your stats Agent"}),Object(r.jsxs)(M,{children:[Object(r.jsx)(T,{aPrice:l}),Object(r.jsx)(H,{children:"A009 to Harvest"})]}),Object(r.jsxs)(M,{children:[Object(r.jsx)(A,{aPrice:l}),Object(r.jsx)(H,{children:"A009 in Wallet"})]}),Object(r.jsx)(D,{children:o?Object(r.jsx)(u.Button,{id:"harvest-all",disabled:p.length<=0||n,onClick:O,fullWidth:!0,children:n?"Collecting...":"Harvest all (".concat(p.length,")")}):Object(r.jsx)(S.a,{fullWidth:!0})})]})})},I=n(839),q=n(845),G=n(846),_=function(e){var t=e.value,n=e.decimals,a=e.fontSize,c=void 0===a?"40px":a,o=e.prefix,s=Object(G.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==n?n:t<0?4:t>1e5?0:3}),f=s.countUp,l=s.update,p=Object(i.useRef)(l);return Object(i.useEffect)((function(){p.current(t)}),[t,p]),Object(r.jsxs)(u.Text,{color:"textSubtle",bold:!0,fontSize:c,children:[o,f]})},W=function(e){var t=e.value,n=e.fontSize,a=void 0===n?"40px":n;return Object(r.jsx)(u.Text,{color:"textSubtle",bold:!0,fontSize:a,children:t})};function J(){var e=Object(c.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]);return J=function(){return e},e}function $(){var e=Object(c.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]);return $=function(){return e},e}var Y=Object(o.e)(u.Card)($()),Q=o.e.div(J()),X=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0x000000000000000000000000000000000000dead";return"https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=".concat(e,"&address=").concat(t,"&tag=latest&apikey=VSHI3UDSF7XUCTQ5ZKY6SBQ985HACXNJUN")},K=new I.a(10).pow(18),Z=function(e){var t=Object(i.useState)(new I.a(0)),n=Object(a.a)(t,2),r=n[0],c=n[1];return Object(i.useEffect)((function(){function t(){return(t=Object(d.a)(b.a.mark((function t(){var n,r,a,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=X(e),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:a=t.sent,i=a.result,c(new I.a(i).div(K));case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),r},ee=function(){var e=Object(z.l)(),t=Object(q.a)(),n=Object(C.c)(),a=Z(Object(h.f)()),c=Z(Object(h.a)()),i=Z(Object(h.h)()),o=Object(z.d)(),s=Object(z.g)(),f=Object(z.k)(),l=Object(z.j)(),p=n?n.minus(a):new I.a(0),b=Object(F.a)(p),d=s.times(p),j=0;return o&&o[0]&&o[0].tokenPerBLock&&(j=new I.a(o[0].tokenPerBLock).div(K).toNumber()),Object(r.jsx)(Y,{children:Object(r.jsxs)(u.CardBody,{children:[Object(r.jsx)(u.Heading,{size:"lg",mb:"24px",children:"Top Secret Operation (TVL)"}),e&&Object(r.jsx)(_,{value:e.toNumber(),prefix:"$",decimals:2}),Object(r.jsxs)(Q,{children:[Object(r.jsx)(u.Text,{fontSize:"14px",children:"Total A009 Leaked"}),b&&Object(r.jsx)(_,{fontSize:"14px",value:b,decimals:2})]}),Object(r.jsxs)(Q,{children:[Object(r.jsx)(u.Text,{fontSize:"14px",children:"Total C100 Burned"}),Object(r.jsx)(_,{fontSize:"14px",value:c.toNumber()})]}),Object(r.jsxs)(Q,{children:[Object(r.jsx)(u.Text,{fontSize:"14px",children:"Total A009 Burned"}),Object(r.jsx)(_,{fontSize:"14px",value:a.toNumber()})]}),Object(r.jsxs)(Q,{children:[Object(r.jsx)(u.Text,{fontSize:"14px",children:"Total A010 Burned"}),Object(r.jsx)(_,{fontSize:"14px",value:i.toNumber()})]}),Object(r.jsxs)(Q,{children:[Object(r.jsx)(u.Text,{fontSize:"14px",children:"C100 Price "}),Object(r.jsx)(_,{fontSize:"14px",value:l.toNumber(),prefix:"$",decimals:3})]}),Object(r.jsxs)(Q,{children:[Object(r.jsx)(u.Text,{fontSize:"14px",children:"A009 Price "}),Object(r.jsx)(_,{fontSize:"14px",value:s.toNumber(),prefix:"$",decimals:3})]}),Object(r.jsxs)(Q,{children:[Object(r.jsx)(u.Text,{fontSize:"14px",children:"A010 Price "}),Object(r.jsx)(_,{fontSize:"14px",value:f.toNumber(),prefix:"$",decimals:3})]}),Object(r.jsxs)(Q,{children:[Object(r.jsx)(u.Text,{fontSize:"14px",children:"Market Cap"}),Object(r.jsx)(_,{fontSize:"14px",value:Object(F.a)(d),decimals:0,prefix:"$"})]}),Object(r.jsxs)(Q,{children:[Object(r.jsx)(u.Text,{fontSize:"14px",children:"New A009/block"}),Object(r.jsx)(W,{fontSize:"14px",value:j.toString()})]}),Object(r.jsxs)(Q,{children:[Object(r.jsx)(u.Text,{fontSize:"14px",children:"Global Agents"}),Object(r.jsx)(W,{fontSize:"14px",value:t.toString()})]}),Object(r.jsx)(Q,{children:Object(r.jsx)(u.Text,{bold:!0,children:Object(r.jsx)("a",{href:"https://dollar.supra.finance",children:"Next mission, here"})})})]})})},te=n(849);function ne(){var e=Object(c.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 48px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"]);return ne=function(){return e},e}function re(){var e=Object(c.a)(["\n  align-items: center;\n  background-image: url('/images/logo.png');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 116px;\n  text-align: center;\n  min-height: 200px;\n"]);return re=function(){return e},e}var ae=o.e.div(re()),ce=Object(o.e)(u.BaseLayout)(ne(),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),ie=function(){var e=Object(f.a)(),t=Object(a.a)(e,1)[0],n=Object(s.m)().account;return Object(r.jsxs)(l.a,{children:[Object(r.jsx)(ae,{}),Object(r.jsx)("div",{children:Object(r.jsxs)(ce,{children:[n&&t?Object(r.jsx)(L,{}):Object(r.jsx)(te.a,{}),Object(r.jsx)(ee,{})]})})]})}}}]);
//# sourceMappingURL=7.60d24f7f.chunk.js.map