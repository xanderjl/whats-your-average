(function () {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

	var n$2="function"===typeof Symbol&&Symbol.for,p$2=n$2?Symbol.for("react.element"):60103,q$2=n$2?Symbol.for("react.portal"):60106,r$2=n$2?Symbol.for("react.fragment"):60107,t$3=n$2?Symbol.for("react.strict_mode"):60108,u$1=n$2?Symbol.for("react.profiler"):60114,v$2=n$2?Symbol.for("react.provider"):60109,w$1=n$2?Symbol.for("react.context"):60110,x$2=n$2?Symbol.for("react.forward_ref"):60112,y$2=n$2?Symbol.for("react.suspense"):60113,z$2=n$2?Symbol.for("react.memo"):60115,A$2=n$2?Symbol.for("react.lazy"):
	60116,B$1="function"===typeof Symbol&&Symbol.iterator;function C$2(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
	var D$1={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E$2={};function F$2(a,b,c){this.props=a;this.context=b;this.refs=E$2;this.updater=c||D$1;}F$2.prototype.isReactComponent={};F$2.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(C$2(85));this.updater.enqueueSetState(this,a,b,"setState");};F$2.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};
	function G$2(){}G$2.prototype=F$2.prototype;function H$2(a,b,c){this.props=a;this.context=b;this.refs=E$2;this.updater=c||D$1;}var I$2=H$2.prototype=new G$2;I$2.constructor=H$2;objectAssign(I$2,F$2.prototype);I$2.isPureReactComponent=!0;var J$2={current:null},K$2=Object.prototype.hasOwnProperty,L$2={key:!0,ref:!0,__self:!0,__source:!0};
	function M$2(a,b,c){var e,d={},g=null,k=null;if(null!=b)for(e in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),b)K$2.call(b,e)&&!L$2.hasOwnProperty(e)&&(d[e]=b[e]);var f=arguments.length-2;if(1===f)d.children=c;else if(1<f){for(var h=Array(f),m=0;m<f;m++)h[m]=arguments[m+2];d.children=h;}if(a&&a.defaultProps)for(e in f=a.defaultProps,f)void 0===d[e]&&(d[e]=f[e]);return {$$typeof:p$2,type:a,key:g,ref:k,props:d,_owner:J$2.current}}
	function N$2(a,b){return {$$typeof:p$2,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O$2(a){return "object"===typeof a&&null!==a&&a.$$typeof===p$2}function escape(a){var b={"=":"=0",":":"=2"};return "$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var P$2=/\/+/g,Q$2=[];function R$2(a,b,c,e){if(Q$2.length){var d=Q$2.pop();d.result=a;d.keyPrefix=b;d.func=c;d.context=e;d.count=0;return d}return {result:a,keyPrefix:b,func:c,context:e,count:0}}
	function S$2(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>Q$2.length&&Q$2.push(a);}
	function T$2(a,b,c,e){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p$2:case q$2:g=!0;}}if(g)return c(e,a,""===b?"."+U$2(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){d=a[k];var f=b+U$2(d,k);g+=T$2(d,f,c,e);}else if(null===a||"object"!==typeof a?f=null:(f=B$1&&a[B$1]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),k=
	0;!(d=a.next()).done;)d=d.value,f=b+U$2(d,k++),g+=T$2(d,f,c,e);else if("object"===d)throw c=""+a,Error(C$2(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return g}function V$2(a,b,c){return null==a?0:T$2(a,"",b,c)}function U$2(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function W$1(a,b){a.func.call(a.context,b,a.count++);}
	function aa(a,b,c){var e=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?X$2(a,e,c,function(a){return a}):null!=a&&(O$2(a)&&(a=N$2(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(P$2,"$&/")+"/")+c)),e.push(a));}function X$2(a,b,c,e,d){var g="";null!=c&&(g=(""+c).replace(P$2,"$&/")+"/");b=R$2(b,g,e,d);V$2(a,aa,b);S$2(b);}var Y$1={current:null};function Z$2(){var a=Y$1.current;if(null===a)throw Error(C$2(321));return a}
	var ba$1={ReactCurrentDispatcher:Y$1,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:J$2,IsSomeRendererActing:{current:!1},assign:objectAssign};var Children={map:function(a,b,c){if(null==a)return a;var e=[];X$2(a,e,null,b,c);return e},forEach:function(a,b,c){if(null==a)return a;b=R$2(null,null,b,c);V$2(a,W$1,b);S$2(b);},count:function(a){return V$2(a,function(){return null},null)},toArray:function(a){var b=[];X$2(a,b,null,function(a){return a});return b},only:function(a){if(!O$2(a))throw Error(C$2(143));return a}};
	var Component=F$2;var Fragment$1=r$2;var Profiler$1=u$1;var PureComponent=H$2;var StrictMode$1=t$3;var Suspense$1=y$2;var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$1=ba$1;
	var cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(C$2(267,a));var e=objectAssign({},a.props),d=a.key,g=a.ref,k=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,k=J$2.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(h in b)K$2.call(b,h)&&!L$2.hasOwnProperty(h)&&(e[h]=void 0===b[h]&&void 0!==f?f[h]:b[h]);}var h=arguments.length-2;if(1===h)e.children=c;else if(1<h){f=Array(h);for(var m=0;m<h;m++)f[m]=arguments[m+2];e.children=f;}return {$$typeof:p$2,type:a.type,
	key:d,ref:g,props:e,_owner:k}};var createContext$1=function(a,b){void 0===b&&(b=null);a={$$typeof:w$1,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v$2,_context:a};return a.Consumer=a};var createElement=M$2;var createFactory=function(a){var b=M$2.bind(null,a);b.type=a;return b};var createRef=function(){return {current:null}};var forwardRef$1=function(a){return {$$typeof:x$2,render:a}};var isValidElement=O$2;
	var lazy=function(a){return {$$typeof:A$2,_ctor:a,_status:-1,_result:null}};var memo=function(a,b){return {$$typeof:z$2,type:a,compare:void 0===b?null:b}};var useCallback=function(a,b){return Z$2().useCallback(a,b)};var useContext=function(a,b){return Z$2().useContext(a,b)};var useDebugValue=function(){};var useEffect=function(a,b){return Z$2().useEffect(a,b)};var useImperativeHandle=function(a,b,c){return Z$2().useImperativeHandle(a,b,c)};
	var useLayoutEffect=function(a,b){return Z$2().useLayoutEffect(a,b)};var useMemo=function(a,b){return Z$2().useMemo(a,b)};var useReducer=function(a,b,c){return Z$2().useReducer(a,b,c)};var useRef=function(a){return Z$2().useRef(a)};var useState=function(a){return Z$2().useState(a)};var version$2="16.14.0";

	var react_production_min = {
		Children: Children,
		Component: Component,
		Fragment: Fragment$1,
		Profiler: Profiler$1,
		PureComponent: PureComponent,
		StrictMode: StrictMode$1,
		Suspense: Suspense$1,
		__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$1,
		cloneElement: cloneElement,
		createContext: createContext$1,
		createElement: createElement,
		createFactory: createFactory,
		createRef: createRef,
		forwardRef: forwardRef$1,
		isValidElement: isValidElement,
		lazy: lazy,
		memo: memo,
		useCallback: useCallback,
		useContext: useContext,
		useDebugValue: useDebugValue,
		useEffect: useEffect,
		useImperativeHandle: useImperativeHandle,
		useLayoutEffect: useLayoutEffect,
		useMemo: useMemo,
		useReducer: useReducer,
		useRef: useRef,
		useState: useState,
		version: version$2
	};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	var ReactPropTypesSecret_1 = ReactPropTypesSecret;

	var react_development = createCommonjsModule(function (module, exports) {
	});
	react_development.Children;
	react_development.Component;
	react_development.Fragment;
	react_development.Profiler;
	react_development.PureComponent;
	react_development.StrictMode;
	react_development.Suspense;
	react_development.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
	react_development.cloneElement;
	react_development.createContext;
	react_development.createElement;
	react_development.createFactory;
	react_development.createRef;
	react_development.forwardRef;
	react_development.isValidElement;
	react_development.lazy;
	react_development.memo;
	react_development.useCallback;
	react_development.useContext;
	react_development.useDebugValue;
	react_development.useEffect;
	react_development.useImperativeHandle;
	react_development.useLayoutEffect;
	react_development.useMemo;
	react_development.useReducer;
	react_development.useRef;
	react_development.useState;
	react_development.version;

	var react = createCommonjsModule(function (module) {

	{
	  module.exports = react_production_min;
	}
	});
	react.Children;
	react.Component;
	var react_3 = react.Fragment;
	react.Profiler;
	react.PureComponent;
	react.StrictMode;
	react.Suspense;
	react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
	react.cloneElement;
	var react_10 = react.createContext;
	var react_11 = react.createElement;
	react.createFactory;
	react.createRef;
	var react_14 = react.forwardRef;
	react.isValidElement;
	react.lazy;
	react.memo;
	react.useCallback;
	var react_19 = react.useContext;
	react.useDebugValue;
	react.useEffect;
	react.useImperativeHandle;
	react.useLayoutEffect;
	var react_24 = react.useMemo;
	react.useReducer;
	var react_26 = react.useRef;
	react.useState;
	react.version;

	var scheduler_production_min = createCommonjsModule(function (module, exports) {
	var f,g,h,k,l;
	if("undefined"===typeof window||"function"!==typeof MessageChannel){var p=null,q=null,t=function(){if(null!==p)try{var a=exports.unstable_now();p(!0,a);p=null;}catch(b){throw setTimeout(t,0),b;}},u=Date.now();exports.unstable_now=function(){return Date.now()-u};f=function(a){null!==p?setTimeout(f,0,a):(p=a,setTimeout(t,0));};g=function(a,b){q=setTimeout(a,b);};h=function(){clearTimeout(q);};k=function(){return !1};l=exports.unstable_forceFrameRate=function(){};}else {var w=window.performance,x=window.Date,
	y=window.setTimeout,z=window.clearTimeout;if("undefined"!==typeof console){var A=window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");"function"!==typeof A&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");}if("object"===
	typeof w&&"function"===typeof w.now)exports.unstable_now=function(){return w.now()};else {var B=x.now();exports.unstable_now=function(){return x.now()-B};}var C=!1,D=null,E=-1,F=5,G=0;k=function(){return exports.unstable_now()>=G};l=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):F=0<a?Math.floor(1E3/a):5;};var H=new MessageChannel,I=H.port2;H.port1.onmessage=
	function(){if(null!==D){var a=exports.unstable_now();G=a+F;try{D(!0,a)?I.postMessage(null):(C=!1,D=null);}catch(b){throw I.postMessage(null),b;}}else C=!1;};f=function(a){D=a;C||(C=!0,I.postMessage(null));};g=function(a,b){E=y(function(){a(exports.unstable_now());},b);};h=function(){z(E);E=-1;};}function J(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<K(e,b))a[d]=b,a[c]=e,c=d;else break a}}function L(a){a=a[0];return void 0===a?null:a}
	function M(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>K(n,c))void 0!==r&&0>K(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>K(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function K(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var N=[],O=[],P=1,Q=null,R=3,S=!1,T=!1,U=!1;
	function V(a){for(var b=L(O);null!==b;){if(null===b.callback)M(O);else if(b.startTime<=a)M(O),b.sortIndex=b.expirationTime,J(N,b);else break;b=L(O);}}function W(a){U=!1;V(a);if(!T)if(null!==L(N))T=!0,f(X);else {var b=L(O);null!==b&&g(W,b.startTime-a);}}
	function X(a,b){T=!1;U&&(U=!1,h());S=!0;var c=R;try{V(b);for(Q=L(N);null!==Q&&(!(Q.expirationTime>b)||a&&!k());){var d=Q.callback;if(null!==d){Q.callback=null;R=Q.priorityLevel;var e=d(Q.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?Q.callback=e:Q===L(N)&&M(N);V(b);}else M(N);Q=L(N);}if(null!==Q)var m=!0;else {var n=L(O);null!==n&&g(W,n.startTime-b);m=!1;}return m}finally{Q=null,R=c,S=!1;}}
	function Y(a){switch(a){case 1:return -1;case 2:return 250;case 5:return 1073741823;case 4:return 1E4;default:return 5E3}}var Z=l;exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null;};exports.unstable_continueExecution=function(){T||S||(T=!0,f(X));};
	exports.unstable_getCurrentPriorityLevel=function(){return R};exports.unstable_getFirstCallbackNode=function(){return L(N)};exports.unstable_next=function(a){switch(R){case 1:case 2:case 3:var b=3;break;default:b=R;}var c=R;R=b;try{return a()}finally{R=c;}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=Z;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3;}var c=R;R=a;try{return b()}finally{R=c;}};
	exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();if("object"===typeof c&&null!==c){var e=c.delay;e="number"===typeof e&&0<e?d+e:d;c="number"===typeof c.timeout?c.timeout:Y(a);}else c=Y(a),e=d;c=e+c;a={id:P++,callback:b,priorityLevel:a,startTime:e,expirationTime:c,sortIndex:-1};e>d?(a.sortIndex=e,J(O,a),null===L(N)&&a===L(O)&&(U?h():U=!0,g(W,e-d))):(a.sortIndex=c,J(N,a),T||S||(T=!0,f(X)));return a};
	exports.unstable_shouldYield=function(){var a=exports.unstable_now();V(a);var b=L(N);return b!==Q&&null!==Q&&null!==b&&null!==b.callback&&b.startTime<=a&&b.expirationTime<Q.expirationTime||k()};exports.unstable_wrapCallback=function(a){var b=R;return function(){var c=R;R=b;try{return a.apply(this,arguments)}finally{R=c;}}};
	});
	scheduler_production_min.unstable_now;
	scheduler_production_min.unstable_forceFrameRate;
	scheduler_production_min.unstable_IdlePriority;
	scheduler_production_min.unstable_ImmediatePriority;
	scheduler_production_min.unstable_LowPriority;
	scheduler_production_min.unstable_NormalPriority;
	scheduler_production_min.unstable_Profiling;
	scheduler_production_min.unstable_UserBlockingPriority;
	scheduler_production_min.unstable_cancelCallback;
	scheduler_production_min.unstable_continueExecution;
	scheduler_production_min.unstable_getCurrentPriorityLevel;
	scheduler_production_min.unstable_getFirstCallbackNode;
	scheduler_production_min.unstable_next;
	scheduler_production_min.unstable_pauseExecution;
	scheduler_production_min.unstable_requestPaint;
	scheduler_production_min.unstable_runWithPriority;
	scheduler_production_min.unstable_scheduleCallback;
	scheduler_production_min.unstable_shouldYield;
	scheduler_production_min.unstable_wrapCallback;

	var scheduler_development = createCommonjsModule(function (module, exports) {
	});
	scheduler_development.unstable_now;
	scheduler_development.unstable_forceFrameRate;
	scheduler_development.unstable_IdlePriority;
	scheduler_development.unstable_ImmediatePriority;
	scheduler_development.unstable_LowPriority;
	scheduler_development.unstable_NormalPriority;
	scheduler_development.unstable_Profiling;
	scheduler_development.unstable_UserBlockingPriority;
	scheduler_development.unstable_cancelCallback;
	scheduler_development.unstable_continueExecution;
	scheduler_development.unstable_getCurrentPriorityLevel;
	scheduler_development.unstable_getFirstCallbackNode;
	scheduler_development.unstable_next;
	scheduler_development.unstable_pauseExecution;
	scheduler_development.unstable_requestPaint;
	scheduler_development.unstable_runWithPriority;
	scheduler_development.unstable_scheduleCallback;
	scheduler_development.unstable_shouldYield;
	scheduler_development.unstable_wrapCallback;

	var scheduler = createCommonjsModule(function (module) {

	{
	  module.exports = scheduler_production_min;
	}
	});

	function u(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!react)throw Error(u(227));
	function ba(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l);}catch(m){this.onError(m);}}var da=!1,ea=null,fa=!1,ha=null,ia={onError:function(a){da=!0;ea=a;}};function ja(a,b,c,d,e,f,g,h,k){da=!1;ea=null;ba.apply(ia,arguments);}function ka(a,b,c,d,e,f,g,h,k){ja.apply(this,arguments);if(da){if(da){var l=ea;da=!1;ea=null;}else throw Error(u(198));fa||(fa=!0,ha=l);}}var la=null,ma=null,na=null;
	function oa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=na(c);ka(d,b,void 0,a);a.currentTarget=null;}var pa=null,qa={};
	function ra(){if(pa)for(var a in qa){var b=qa[a],c=pa.indexOf(a);if(!(-1<c))throw Error(u(96,a));if(!sa[c]){if(!b.extractEvents)throw Error(u(97,a));sa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;if(ta.hasOwnProperty(h))throw Error(u(99,h));ta[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&ua(k[e],g,h);e=!0;}else f.registrationName?(ua(f.registrationName,g,h),e=!0):e=!1;if(!e)throw Error(u(98,d,a));}}}}
	function ua(a,b,c){if(va[a])throw Error(u(100,a));va[a]=b;wa[a]=b.eventTypes[c].dependencies;}var sa=[],ta={},va={},wa={};function xa(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(!qa.hasOwnProperty(c)||qa[c]!==d){if(qa[c])throw Error(u(102,c));qa[c]=d;b=!0;}}b&&ra();}var ya=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),za=null,Aa=null,Ba=null;
	function Ca(a){if(a=ma(a)){if("function"!==typeof za)throw Error(u(280));var b=a.stateNode;b&&(b=la(b),za(a.stateNode,a.type,b));}}function Da(a){Aa?Ba?Ba.push(a):Ba=[a]:Aa=a;}function Ea(){if(Aa){var a=Aa,b=Ba;Ba=Aa=null;Ca(a);if(b)for(a=0;a<b.length;a++)Ca(b[a]);}}function Fa(a,b){return a(b)}function Ga(a,b,c,d,e){return a(b,c,d,e)}function Ha(){}var Ia=Fa,Ja=!1,Ka=!1;function La(){if(null!==Aa||null!==Ba)Ha(),Ea();}
	function Ma(a,b,c){if(Ka)return a(b,c);Ka=!0;try{return Ia(a,b,c)}finally{Ka=!1,La();}}var Na=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oa=Object.prototype.hasOwnProperty,Pa={},Qa={};
	function Ra(a){if(Oa.call(Qa,a))return !0;if(Oa.call(Pa,a))return !1;if(Na.test(a))return Qa[a]=!0;Pa[a]=!0;return !1}function Sa(a,b,c,d){if(null!==c&&0===c.type)return !1;switch(typeof b){case "function":case "symbol":return !0;case "boolean":if(d)return !1;if(null!==c)return !c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return "data-"!==a&&"aria-"!==a;default:return !1}}
	function Ta(a,b,c,d){if(null===b||"undefined"===typeof b||Sa(a,b,c,d))return !0;if(d)return !1;if(null!==c)switch(c.type){case 3:return !b;case 4:return !1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return !1}function v$1(a,b,c,d,e,f){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;}var C$1={};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){C$1[a]=new v$1(a,0,!1,a,null,!1);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];C$1[b]=new v$1(b,1,!1,a[1],null,!1);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){C$1[a]=new v$1(a,2,!1,a.toLowerCase(),null,!1);});
	["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){C$1[a]=new v$1(a,2,!1,a,null,!1);});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){C$1[a]=new v$1(a,3,!1,a.toLowerCase(),null,!1);});
	["checked","multiple","muted","selected"].forEach(function(a){C$1[a]=new v$1(a,3,!0,a,null,!1);});["capture","download"].forEach(function(a){C$1[a]=new v$1(a,4,!1,a,null,!1);});["cols","rows","size","span"].forEach(function(a){C$1[a]=new v$1(a,6,!1,a,null,!1);});["rowSpan","start"].forEach(function(a){C$1[a]=new v$1(a,5,!1,a.toLowerCase(),null,!1);});var Ua=/[\-:]([a-z])/g;function Va(a){return a[1].toUpperCase()}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(Ua,
	Va);C$1[b]=new v$1(b,1,!1,a,null,!1);});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(Ua,Va);C$1[b]=new v$1(b,1,!1,a,"http://www.w3.org/1999/xlink",!1);});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(Ua,Va);C$1[b]=new v$1(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1);});["tabIndex","crossOrigin"].forEach(function(a){C$1[a]=new v$1(a,1,!1,a.toLowerCase(),null,!1);});
	C$1.xlinkHref=new v$1("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){C$1[a]=new v$1(a,1,!1,a.toLowerCase(),null,!0);});var Wa=react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Wa.hasOwnProperty("ReactCurrentDispatcher")||(Wa.ReactCurrentDispatcher={current:null});Wa.hasOwnProperty("ReactCurrentBatchConfig")||(Wa.ReactCurrentBatchConfig={suspense:null});
	function Xa(a,b,c,d){var e=C$1.hasOwnProperty(b)?C$1[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(Ta(b,c,e,d)&&(c=null),d||null===e?Ra(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))));}
	var Ya=/^(.*)[\\\/]/,E$1="function"===typeof Symbol&&Symbol.for,Za=E$1?Symbol.for("react.element"):60103,$a=E$1?Symbol.for("react.portal"):60106,ab=E$1?Symbol.for("react.fragment"):60107,bb=E$1?Symbol.for("react.strict_mode"):60108,cb=E$1?Symbol.for("react.profiler"):60114,db=E$1?Symbol.for("react.provider"):60109,eb=E$1?Symbol.for("react.context"):60110,fb=E$1?Symbol.for("react.concurrent_mode"):60111,gb=E$1?Symbol.for("react.forward_ref"):60112,hb=E$1?Symbol.for("react.suspense"):60113,ib=E$1?Symbol.for("react.suspense_list"):
	60120,jb=E$1?Symbol.for("react.memo"):60115,kb=E$1?Symbol.for("react.lazy"):60116,lb=E$1?Symbol.for("react.block"):60121,mb="function"===typeof Symbol&&Symbol.iterator;function nb(a){if(null===a||"object"!==typeof a)return null;a=mb&&a[mb]||a["@@iterator"];return "function"===typeof a?a:null}function ob(a){if(-1===a._status){a._status=0;var b=a._ctor;b=b();a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b);},function(b){0===a._status&&(a._status=2,a._result=b);});}}
	function pb(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ab:return "Fragment";case $a:return "Portal";case cb:return "Profiler";case bb:return "StrictMode";case hb:return "Suspense";case ib:return "SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case eb:return "Context.Consumer";case db:return "Context.Provider";case gb:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":
	"ForwardRef");case jb:return pb(a.type);case lb:return pb(a.render);case kb:if(a=1===a._status?a._result:null)return pb(a)}return null}function qb(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=pb(a.type);c=null;d&&(c=pb(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Ya,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f;}b+=c;a=a.return;}while(a);return b}
	function rb(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return ""}}function sb(a){var b=a.type;return (a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
	function tb(a){var b=sb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a);}});Object.defineProperty(a,b,{enumerable:c.enumerable});return {getValue:function(){return d},setValue:function(a){d=""+a;},stopTracking:function(){a._valueTracker=
	null;delete a[b];}}}}function xb(a){a._valueTracker||(a._valueTracker=tb(a));}function yb(a){if(!a)return !1;var b=a._valueTracker;if(!b)return !0;var c=b.getValue();var d="";a&&(d=sb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function zb(a,b){var c=b.checked;return objectAssign({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
	function Ab(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=rb(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value};}function Bb(a,b){b=b.checked;null!=b&&Xa(a,"checked",b,!1);}
	function Cb(a,b){Bb(a,b);var c=rb(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c;}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Db(a,b.type,c):b.hasOwnProperty("defaultValue")&&Db(a,b.type,rb(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked);}
	function Eb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b;}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c);}
	function Db(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c);}function Fb(a){var b="";react.Children.forEach(a,function(a){null!=a&&(b+=a);});return b}function Gb(a,b){a=objectAssign({children:void 0},b);if(b=Fb(b.children))a.children=b;return a}
	function Hb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0);}else {c=""+rb(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e]);}null!==b&&(b.selected=!0);}}
	function Ib(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(u(91));return objectAssign({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function Jb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(u(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(u(93));c=c[0];}b=c;}null==b&&(b="");c=b;}a._wrapperState={initialValue:rb(c)};}
	function Kb(a,b){var c=rb(b.value),d=rb(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d);}function Lb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b);}var Mb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
	function Nb(a){switch(a){case "svg":return "http://www.w3.org/2000/svg";case "math":return "http://www.w3.org/1998/Math/MathML";default:return "http://www.w3.org/1999/xhtml"}}function Ob(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?Nb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
	var Pb,Qb=function(a){return "undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)});}:a}(function(a,b){if(a.namespaceURI!==Mb.svg||"innerHTML"in a)a.innerHTML=b;else {Pb=Pb||document.createElement("div");Pb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=Pb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild);}});
	function Rb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b;}function Sb(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Tb={animationend:Sb("Animation","AnimationEnd"),animationiteration:Sb("Animation","AnimationIteration"),animationstart:Sb("Animation","AnimationStart"),transitionend:Sb("Transition","TransitionEnd")},Ub={},Vb={};
	ya&&(Vb=document.createElement("div").style,"AnimationEvent"in window||(delete Tb.animationend.animation,delete Tb.animationiteration.animation,delete Tb.animationstart.animation),"TransitionEvent"in window||delete Tb.transitionend.transition);function Wb(a){if(Ub[a])return Ub[a];if(!Tb[a])return a;var b=Tb[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Vb)return Ub[a]=b[c];return a}
	var Xb=Wb("animationend"),Yb=Wb("animationiteration"),Zb=Wb("animationstart"),$b=Wb("transitionend"),ac="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bc=new ("function"===typeof WeakMap?WeakMap:Map);function cc(a){var b=bc.get(a);void 0===b&&(b=new Map,bc.set(a,b));return b}
	function dc(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else {a=b;do b=a,0!==(b.effectTag&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function ec(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function fc(a){if(dc(a)!==a)throw Error(u(188));}
	function gc(a){var b=a.alternate;if(!b){b=dc(a);if(null===b)throw Error(u(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return fc(e),a;if(f===d)return fc(e),b;f=f.sibling;}throw Error(u(188));}if(c.return!==d.return)c=e,d=f;else {for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling;}if(!g){for(h=f.child;h;){if(h===
	c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling;}if(!g)throw Error(u(189));}}if(c.alternate!==d)throw Error(u(190));}if(3!==c.tag)throw Error(u(188));return c.stateNode.current===c?a:b}function hc(a){a=gc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else {if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}}return null}
	function ic(a,b){if(null==b)throw Error(u(30));if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}function jc(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a);}var kc=null;
	function lc(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)oa(a,b[d],c[d]);else b&&oa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a);}}function mc(a){null!==a&&(kc=ic(kc,a));a=kc;kc=null;if(a){jc(a,lc);if(kc)throw Error(u(95));if(fa)throw a=ha,fa=!1,ha=null,a;}}
	function nc(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function oc(a){if(!ya)return !1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}var pc=[];function qc(a){a.topLevelType=null;a.nativeEvent=null;a.targetInst=null;a.ancestors.length=0;10>pc.length&&pc.push(a);}
	function rc(a,b,c,d){if(pc.length){var e=pc.pop();e.topLevelType=a;e.eventSystemFlags=d;e.nativeEvent=b;e.targetInst=c;return e}return {topLevelType:a,eventSystemFlags:d,nativeEvent:b,targetInst:c,ancestors:[]}}
	function sc(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d=c;if(3===d.tag)d=d.stateNode.containerInfo;else {for(;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo;}if(!d)break;b=c.tag;5!==b&&6!==b||a.ancestors.push(c);c=tc(d);}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=nc(a.nativeEvent);d=a.topLevelType;var f=a.nativeEvent,g=a.eventSystemFlags;0===c&&(g|=64);for(var h=null,k=0;k<sa.length;k++){var l=sa[k];l&&(l=l.extractEvents(d,b,f,e,g))&&(h=
	ic(h,l));}mc(h);}}function uc(a,b,c){if(!c.has(a)){switch(a){case "scroll":vc(b,"scroll",!0);break;case "focus":case "blur":vc(b,"focus",!0);vc(b,"blur",!0);c.set("blur",null);c.set("focus",null);break;case "cancel":case "close":oc(a)&&vc(b,a,!0);break;case "invalid":case "submit":case "reset":break;default:-1===ac.indexOf(a)&&F$1(a,b);}c.set(a,null);}}
	var wc,xc,yc,zc=!1,Ac=[],Bc=null,Cc=null,Dc=null,Ec=new Map,Fc=new Map,Gc=[],Hc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),Ic="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
	function Jc(a,b){var c=cc(b);Hc.forEach(function(a){uc(a,b,c);});Ic.forEach(function(a){uc(a,b,c);});}function Kc(a,b,c,d,e){return {blockedOn:a,topLevelType:b,eventSystemFlags:c|32,nativeEvent:e,container:d}}
	function Lc(a,b){switch(a){case "focus":case "blur":Bc=null;break;case "dragenter":case "dragleave":Cc=null;break;case "mouseover":case "mouseout":Dc=null;break;case "pointerover":case "pointerout":Ec.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Fc.delete(b.pointerId);}}function Mc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=Kc(b,c,d,e,f),null!==b&&(b=Nc(b),null!==b&&xc(b)),a;a.eventSystemFlags|=d;return a}
	function Oc(a,b,c,d,e){switch(b){case "focus":return Bc=Mc(Bc,a,b,c,d,e),!0;case "dragenter":return Cc=Mc(Cc,a,b,c,d,e),!0;case "mouseover":return Dc=Mc(Dc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Ec.set(f,Mc(Ec.get(f)||null,a,b,c,d,e));return !0;case "gotpointercapture":return f=e.pointerId,Fc.set(f,Mc(Fc.get(f)||null,a,b,c,d,e)),!0}return !1}
	function Pc(a){var b=tc(a.target);if(null!==b){var c=dc(b);if(null!==c)if(b=c.tag,13===b){if(b=ec(c),null!==b){a.blockedOn=b;scheduler.unstable_runWithPriority(a.priority,function(){yc(c);});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null;}function Qc(a){if(null!==a.blockedOn)return !1;var b=Rc(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);if(null!==b){var c=Nc(b);null!==c&&xc(c);a.blockedOn=b;return !1}return !0}
	function Sc(a,b,c){Qc(a)&&c.delete(b);}function Tc(){for(zc=!1;0<Ac.length;){var a=Ac[0];if(null!==a.blockedOn){a=Nc(a.blockedOn);null!==a&&wc(a);break}var b=Rc(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);null!==b?a.blockedOn=b:Ac.shift();}null!==Bc&&Qc(Bc)&&(Bc=null);null!==Cc&&Qc(Cc)&&(Cc=null);null!==Dc&&Qc(Dc)&&(Dc=null);Ec.forEach(Sc);Fc.forEach(Sc);}function Uc(a,b){a.blockedOn===b&&(a.blockedOn=null,zc||(zc=!0,scheduler.unstable_scheduleCallback(scheduler.unstable_NormalPriority,Tc)));}
	function Vc(a){function b(b){return Uc(b,a)}if(0<Ac.length){Uc(Ac[0],a);for(var c=1;c<Ac.length;c++){var d=Ac[c];d.blockedOn===a&&(d.blockedOn=null);}}null!==Bc&&Uc(Bc,a);null!==Cc&&Uc(Cc,a);null!==Dc&&Uc(Dc,a);Ec.forEach(b);Fc.forEach(b);for(c=0;c<Gc.length;c++)d=Gc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Gc.length&&(c=Gc[0],null===c.blockedOn);)Pc(c),null===c.blockedOn&&Gc.shift();}
	var Wc={},Yc=new Map,Zc=new Map,$c=["abort","abort",Xb,"animationEnd",Yb,"animationIteration",Zb,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking",
	"seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",$b,"transitionEnd","waiting","waiting"];function ad(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1],f="on"+(e[0].toUpperCase()+e.slice(1));f={phasedRegistrationNames:{bubbled:f,captured:f+"Capture"},dependencies:[d],eventPriority:b};Zc.set(d,b);Yc.set(d,f);Wc[e]=f;}}
	ad("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);
	ad("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);ad($c,2);for(var bd="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),cd=0;cd<bd.length;cd++)Zc.set(bd[cd],0);
	var dd=scheduler.unstable_UserBlockingPriority,ed=scheduler.unstable_runWithPriority,fd=!0;function F$1(a,b){vc(b,a,!1);}function vc(a,b,c){var d=Zc.get(b);switch(void 0===d?2:d){case 0:d=gd.bind(null,b,1,a);break;case 1:d=hd.bind(null,b,1,a);break;default:d=id.bind(null,b,1,a);}c?a.addEventListener(b,d,!0):a.addEventListener(b,d,!1);}function gd(a,b,c,d){Ja||Ha();var e=id,f=Ja;Ja=!0;try{Ga(e,a,b,c,d);}finally{(Ja=f)||La();}}function hd(a,b,c,d){ed(dd,id.bind(null,a,b,c,d));}
	function id(a,b,c,d){if(fd)if(0<Ac.length&&-1<Hc.indexOf(a))a=Kc(null,a,b,c,d),Ac.push(a);else {var e=Rc(a,b,c,d);if(null===e)Lc(a,d);else if(-1<Hc.indexOf(a))a=Kc(e,a,b,c,d),Ac.push(a);else if(!Oc(e,a,b,c,d)){Lc(a,d);a=rc(a,d,null,b);try{Ma(sc,a);}finally{qc(a);}}}}
	function Rc(a,b,c,d){c=nc(d);c=tc(c);if(null!==c){var e=dc(c);if(null===e)c=null;else {var f=e.tag;if(13===f){c=ec(e);if(null!==c)return c;c=null;}else if(3===f){if(e.stateNode.hydrate)return 3===e.tag?e.stateNode.containerInfo:null;c=null;}else e!==c&&(c=null);}}a=rc(a,d,c,b);try{Ma(sc,a);}finally{qc(a);}return null}
	var jd={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
	floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kd=["Webkit","ms","Moz","O"];Object.keys(jd).forEach(function(a){kd.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);jd[b]=jd[a];});});function ld(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||jd.hasOwnProperty(a)&&jd[a]?(""+b).trim():b+"px"}
	function md(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=ld(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e;}}var nd=objectAssign({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
	function od(a,b){if(b){if(nd[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(u(137,a,""));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(u(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(u(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(u(62,""));}}
	function pd(a,b){if(-1===a.indexOf("-"))return "string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return !1;default:return !0}}var qd=Mb.html;function rd(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=cc(a);b=wa[b];for(var d=0;d<b.length;d++)uc(b[d],a,c);}function sd(){}
	function td(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function ud(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function vd(a,b){var c=ud(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return {node:c,offset:b-a};a=d;}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode;}c=void 0;}c=ud(c);}}
	function wd(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?wd(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}function xd(){for(var a=window,b=td();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href;}catch(d){c=!1;}if(c)a=b.contentWindow;else break;b=td(a.document);}return b}
	function yd(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}var zd="$",Ad="/$",Bd="$?",Cd="$!",Dd=null,Ed=null;function Fd(a,b){switch(a){case "button":case "input":case "select":case "textarea":return !!b.autoFocus}return !1}
	function Gd(a,b){return "textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var Hd="function"===typeof setTimeout?setTimeout:void 0,Id="function"===typeof clearTimeout?clearTimeout:void 0;function Jd(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}
	function Kd(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if(c===zd||c===Cd||c===Bd){if(0===b)return a;b--;}else c===Ad&&b++;}a=a.previousSibling;}return null}var Ld=Math.random().toString(36).slice(2),Md="__reactInternalInstance$"+Ld,Nd="__reactEventHandlers$"+Ld,Od="__reactContainere$"+Ld;
	function tc(a){var b=a[Md];if(b)return b;for(var c=a.parentNode;c;){if(b=c[Od]||c[Md]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Kd(a);null!==a;){if(c=a[Md])return c;a=Kd(a);}return b}a=c;c=a.parentNode;}return null}function Nc(a){a=a[Md]||a[Od];return !a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function Pd(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(u(33));}function Qd(a){return a[Nd]||null}
	function Rd(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}
	function Sd(a,b){var c=a.stateNode;if(!c)return null;var d=la(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1;}if(a)return null;if(c&&"function"!==typeof c)throw Error(u(231,
	b,typeof c));return c}function Td(a,b,c){if(b=Sd(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=ic(c._dispatchListeners,b),c._dispatchInstances=ic(c._dispatchInstances,a);}function Ud(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=Rd(b);for(b=c.length;0<b--;)Td(c[b],"captured",a);for(b=0;b<c.length;b++)Td(c[b],"bubbled",a);}}
	function Vd(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Sd(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=ic(c._dispatchListeners,b),c._dispatchInstances=ic(c._dispatchInstances,a));}function Wd(a){a&&a.dispatchConfig.registrationName&&Vd(a._targetInst,null,a);}function Xd(a){jc(a,Ud);}var Yd=null,Zd=null,$d=null;
	function ae$1(){if($d)return $d;var a,b=Zd,c=b.length,d,e="value"in Yd?Yd.value:Yd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return $d=e.slice(a,1<d?1-d:void 0)}function be(){return !0}function ce$1(){return !1}
	function G$1(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?be:ce$1;this.isPropagationStopped=ce$1;return this}
	objectAssign(G$1.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=be);},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=be);},persist:function(){this.isPersistent=be;},isPersistent:ce$1,destructor:function(){var a=this.constructor.Interface,
	b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=ce$1;this._dispatchInstances=this._dispatchListeners=null;}});G$1.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
	G$1.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;objectAssign(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=objectAssign({},d.Interface,a);c.extend=d.extend;de(c);return c};de(G$1);function ee$1(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}
	function fe$1(a){if(!(a instanceof this))throw Error(u(279));a.destructor();10>this.eventPool.length&&this.eventPool.push(a);}function de(a){a.eventPool=[];a.getPooled=ee$1;a.release=fe$1;}var ge=G$1.extend({data:null}),he=G$1.extend({data:null}),ie$1=[9,13,27,32],je=ya&&"CompositionEvent"in window,ke=null;ya&&"documentMode"in document&&(ke=document.documentMode);
	var le$1=ya&&"TextEvent"in window&&!ke,me=ya&&(!je||ke&&8<ke&&11>=ke),ne$1=String.fromCharCode(32),oe$1={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
	captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},pe=!1;
	function qe(a,b){switch(a){case "keyup":return -1!==ie$1.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return !0;default:return !1}}function re$1(a){a=a.detail;return "object"===typeof a&&"data"in a?a.data:null}var se$1=!1;function te$1(a,b){switch(a){case "compositionend":return re$1(b);case "keypress":if(32!==b.which)return null;pe=!0;return ne$1;case "textInput":return a=b.data,a===ne$1&&pe?null:a;default:return null}}
	function ue$1(a,b){if(se$1)return "compositionend"===a||!je&&qe(a,b)?(a=ae$1(),$d=Zd=Yd=null,se$1=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return me&&"ko"!==b.locale?null:b.data;default:return null}}
	var ve$1={eventTypes:oe$1,extractEvents:function(a,b,c,d){var e;if(je)b:{switch(a){case "compositionstart":var f=oe$1.compositionStart;break b;case "compositionend":f=oe$1.compositionEnd;break b;case "compositionupdate":f=oe$1.compositionUpdate;break b}f=void 0;}else se$1?qe(a,c)&&(f=oe$1.compositionEnd):"keydown"===a&&229===c.keyCode&&(f=oe$1.compositionStart);f?(me&&"ko"!==c.locale&&(se$1||f!==oe$1.compositionStart?f===oe$1.compositionEnd&&se$1&&(e=ae$1()):(Yd=d,Zd="value"in Yd?Yd.value:Yd.textContent,se$1=!0)),f=ge.getPooled(f,
	b,c,d),e?f.data=e:(e=re$1(c),null!==e&&(f.data=e)),Xd(f),e=f):e=null;(a=le$1?te$1(a,c):ue$1(a,c))?(b=he.getPooled(oe$1.beforeInput,b,c,d),b.data=a,Xd(b)):b=null;return null===e?b:null===b?e:[e,b]}},we={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return "input"===b?!!we[a.type]:"textarea"===b?!0:!1}
	var ye={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function ze(a,b,c){a=G$1.getPooled(ye.change,a,b,c);a.type="change";Da(c);Xd(a);return a}var Ae=null,Be=null;function Ce(a){mc(a);}function De(a){var b=Pd(a);if(yb(b))return a}function Ee(a,b){if("change"===a)return b}var Fe=!1;ya&&(Fe=oc("input")&&(!document.documentMode||9<document.documentMode));
	function Ge(){Ae&&(Ae.detachEvent("onpropertychange",He),Be=Ae=null);}function He(a){if("value"===a.propertyName&&De(Be))if(a=ze(Be,a,nc(a)),Ja)mc(a);else {Ja=!0;try{Fa(Ce,a);}finally{Ja=!1,La();}}}function Ie(a,b,c){"focus"===a?(Ge(),Ae=b,Be=c,Ae.attachEvent("onpropertychange",He)):"blur"===a&&Ge();}function Je(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return De(Be)}function Ke(a,b){if("click"===a)return De(b)}function Le(a,b){if("input"===a||"change"===a)return De(b)}
	var Me={eventTypes:ye,_isInputEventSupported:Fe,extractEvents:function(a,b,c,d){var e=b?Pd(b):window,f=e.nodeName&&e.nodeName.toLowerCase();if("select"===f||"input"===f&&"file"===e.type)var g=Ee;else if(xe(e))if(Fe)g=Le;else {g=Je;var h=Ie;}else (f=e.nodeName)&&"input"===f.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(g=Ke);if(g&&(g=g(a,b)))return ze(g,c,d);h&&h(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Db(e,"number",e.value);}},Ne=G$1.extend({view:null,detail:null}),
	Oe={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pe(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Oe[a])?!!b[a]:!1}function Qe(){return Pe}
	var Re=0,Se=0,Te=!1,Ue=!1,Ve=Ne.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Qe,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=Re;Re=a.screenX;return Te?"mousemove"===a.type?a.screenX-b:0:(Te=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
	var b=Se;Se=a.screenY;return Ue?"mousemove"===a.type?a.screenY-b:0:(Ue=!0,0)}}),We=Ve.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Xe={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
	dependencies:["pointerout","pointerover"]}},Ye={eventTypes:Xe,extractEvents:function(a,b,c,d,e){var f="mouseover"===a||"pointerover"===a,g="mouseout"===a||"pointerout"===a;if(f&&0===(e&32)&&(c.relatedTarget||c.fromElement)||!g&&!f)return null;f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window;if(g){if(g=b,b=(b=c.relatedTarget||c.toElement)?tc(b):null,null!==b){var h=dc(b);if(b!==h||5!==b.tag&&6!==b.tag)b=null;}}else g=null;if(g===b)return null;if("mouseout"===a||"mouseover"===
	a){var k=Ve;var l=Xe.mouseLeave;var m=Xe.mouseEnter;var p="mouse";}else if("pointerout"===a||"pointerover"===a)k=We,l=Xe.pointerLeave,m=Xe.pointerEnter,p="pointer";a=null==g?f:Pd(g);f=null==b?f:Pd(b);l=k.getPooled(l,g,c,d);l.type=p+"leave";l.target=a;l.relatedTarget=f;c=k.getPooled(m,b,c,d);c.type=p+"enter";c.target=f;c.relatedTarget=a;d=g;p=b;if(d&&p)a:{k=d;m=p;g=0;for(a=k;a;a=Rd(a))g++;a=0;for(b=m;b;b=Rd(b))a++;for(;0<g-a;)k=Rd(k),g--;for(;0<a-g;)m=Rd(m),a--;for(;g--;){if(k===m||k===m.alternate)break a;
	k=Rd(k);m=Rd(m);}k=null;}else k=null;m=k;for(k=[];d&&d!==m;){g=d.alternate;if(null!==g&&g===m)break;k.push(d);d=Rd(d);}for(d=[];p&&p!==m;){g=p.alternate;if(null!==g&&g===m)break;d.push(p);p=Rd(p);}for(p=0;p<k.length;p++)Vd(k[p],"bubbled",l);for(p=d.length;0<p--;)Vd(d[p],"captured",c);return 0===(e&64)?[l]:[l,c]}};function Ze(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var $e="function"===typeof Object.is?Object.is:Ze,af=Object.prototype.hasOwnProperty;
	function bf(a,b){if($e(a,b))return !0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return !1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return !1;for(d=0;d<c.length;d++)if(!af.call(b,c[d])||!$e(a[c[d]],b[c[d]]))return !1;return !0}
	var cf=ya&&"documentMode"in document&&11>=document.documentMode,df={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},ef=null,ff=null,gf=null,hf=!1;
	function jf(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(hf||null==ef||ef!==td(c))return null;c=ef;"selectionStart"in c&&yd(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return gf&&bf(gf,c)?null:(gf=c,a=G$1.getPooled(df.select,ff,a,b),a.type="select",a.target=ef,Xd(a),a)}
	var kf={eventTypes:df,extractEvents:function(a,b,c,d,e,f){e=f||(d.window===d?d.document:9===d.nodeType?d:d.ownerDocument);if(!(f=!e)){a:{e=cc(e);f=wa.onSelect;for(var g=0;g<f.length;g++)if(!e.has(f[g])){e=!1;break a}e=!0;}f=!e;}if(f)return null;e=b?Pd(b):window;switch(a){case "focus":if(xe(e)||"true"===e.contentEditable)ef=e,ff=b,gf=null;break;case "blur":gf=ff=ef=null;break;case "mousedown":hf=!0;break;case "contextmenu":case "mouseup":case "dragend":return hf=!1,jf(c,d);case "selectionchange":if(cf)break;
	case "keydown":case "keyup":return jf(c,d)}return null}},lf=G$1.extend({animationName:null,elapsedTime:null,pseudoElement:null}),mf=G$1.extend({clipboardData:function(a){return "clipboardData"in a?a.clipboardData:window.clipboardData}}),nf=Ne.extend({relatedTarget:null});function of(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
	var pf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
	116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rf=Ne.extend({key:function(a){if(a.key){var b=pf[a.key]||a.key;if("Unidentified"!==b)return b}return "keypress"===a.type?(a=of(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?qf[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Qe,charCode:function(a){return "keypress"===
	a.type?of(a):0},keyCode:function(a){return "keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return "keypress"===a.type?of(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),sf=Ve.extend({dataTransfer:null}),tf=Ne.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Qe}),uf=G$1.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),vf=Ve.extend({deltaX:function(a){return "deltaX"in a?a.deltaX:"wheelDeltaX"in
	a?-a.wheelDeltaX:0},deltaY:function(a){return "deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),wf={eventTypes:Wc,extractEvents:function(a,b,c,d){var e=Yc.get(a);if(!e)return null;switch(a){case "keypress":if(0===of(c))return null;case "keydown":case "keyup":a=rf;break;case "blur":case "focus":a=nf;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=
	Ve;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=sf;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=tf;break;case Xb:case Yb:case Zb:a=lf;break;case $b:a=uf;break;case "scroll":a=Ne;break;case "wheel":a=vf;break;case "copy":case "cut":case "paste":a=mf;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=
	We;break;default:a=G$1;}b=a.getPooled(e,b,c,d);Xd(b);return b}};if(pa)throw Error(u(101));pa=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));ra();var xf=Nc;la=Qd;ma=xf;na=Pd;xa({SimpleEventPlugin:wf,EnterLeaveEventPlugin:Ye,ChangeEventPlugin:Me,SelectEventPlugin:kf,BeforeInputEventPlugin:ve$1});var yf=[],zf=-1;function H$1(a){0>zf||(a.current=yf[zf],yf[zf]=null,zf--);}
	function I$1(a,b){zf++;yf[zf]=a.current;a.current=b;}var Af={},J$1={current:Af},K$1={current:!1},Bf=Af;function Cf(a,b){var c=a.type.contextTypes;if(!c)return Af;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function L$1(a){a=a.childContextTypes;return null!==a&&void 0!==a}
	function Df(){H$1(K$1);H$1(J$1);}function Ef(a,b,c){if(J$1.current!==Af)throw Error(u(168));I$1(J$1,b);I$1(K$1,c);}function Ff(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(u(108,pb(b)||"Unknown",e));return objectAssign({},c,{},d)}function Gf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Af;Bf=J$1.current;I$1(J$1,a);I$1(K$1,K$1.current);return !0}
	function Hf(a,b,c){var d=a.stateNode;if(!d)throw Error(u(169));c?(a=Ff(a,b,Bf),d.__reactInternalMemoizedMergedChildContext=a,H$1(K$1),H$1(J$1),I$1(J$1,a)):H$1(K$1);I$1(K$1,c);}
	var If=scheduler.unstable_runWithPriority,Jf=scheduler.unstable_scheduleCallback,Kf=scheduler.unstable_cancelCallback,Lf=scheduler.unstable_requestPaint,Mf=scheduler.unstable_now,Nf=scheduler.unstable_getCurrentPriorityLevel,Of=scheduler.unstable_ImmediatePriority,Pf=scheduler.unstable_UserBlockingPriority,Qf=scheduler.unstable_NormalPriority,Rf=scheduler.unstable_LowPriority,Sf=scheduler.unstable_IdlePriority,Tf={},Uf=scheduler.unstable_shouldYield,Vf=void 0!==Lf?Lf:function(){},Wf=null,Xf=null,Yf=!1,Zf=Mf(),$f=1E4>Zf?Mf:function(){return Mf()-Zf};
	function ag(){switch(Nf()){case Of:return 99;case Pf:return 98;case Qf:return 97;case Rf:return 96;case Sf:return 95;default:throw Error(u(332));}}function bg(a){switch(a){case 99:return Of;case 98:return Pf;case 97:return Qf;case 96:return Rf;case 95:return Sf;default:throw Error(u(332));}}function cg(a,b){a=bg(a);return If(a,b)}function dg(a,b,c){a=bg(a);return Jf(a,b,c)}function eg(a){null===Wf?(Wf=[a],Xf=Jf(Of,fg)):Wf.push(a);return Tf}function gg(){if(null!==Xf){var a=Xf;Xf=null;Kf(a);}fg();}
	function fg(){if(!Yf&&null!==Wf){Yf=!0;var a=0;try{var b=Wf;cg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});Wf=null;}catch(c){throw null!==Wf&&(Wf=Wf.slice(a+1)),Jf(Of,gg),c;}finally{Yf=!1;}}}function hg(a,b,c){c/=10;return 1073741821-(((1073741821-a+b/10)/c|0)+1)*c}function ig(a,b){if(a&&a.defaultProps){b=objectAssign({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);}return b}var jg={current:null},kg=null,lg=null,mg=null;function ng(){mg=lg=kg=null;}
	function og(a){var b=jg.current;H$1(jg);a.type._context._currentValue=b;}function pg(a,b){for(;null!==a;){var c=a.alternate;if(a.childExpirationTime<b)a.childExpirationTime=b,null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);else if(null!==c&&c.childExpirationTime<b)c.childExpirationTime=b;else break;a=a.return;}}function qg(a,b){kg=a;mg=lg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(a.expirationTime>=b&&(rg=!0),a.firstContext=null);}
	function sg(a,b){if(mg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)mg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===lg){if(null===kg)throw Error(u(308));lg=b;kg.dependencies={expirationTime:0,firstContext:b,responders:null};}else lg=lg.next=b;}return a._currentValue}var tg=!1;function ug(a){a.updateQueue={baseState:a.memoizedState,baseQueue:null,shared:{pending:null},effects:null};}
	function vg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,baseQueue:a.baseQueue,shared:a.shared,effects:a.effects});}function wg(a,b){a={expirationTime:a,suspenseConfig:b,tag:0,payload:null,callback:null,next:null};return a.next=a}function xg(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b;}}
	function yg(a,b){var c=a.alternate;null!==c&&vg(c,a);a=a.updateQueue;c=a.baseQueue;null===c?(a.baseQueue=b.next=b,b.next=b):(b.next=c.next,c.next=b);}
	function zg(a,b,c,d){var e=a.updateQueue;tg=!1;var f=e.baseQueue,g=e.shared.pending;if(null!==g){if(null!==f){var h=f.next;f.next=g.next;g.next=h;}f=g;e.shared.pending=null;h=a.alternate;null!==h&&(h=h.updateQueue,null!==h&&(h.baseQueue=g));}if(null!==f){h=f.next;var k=e.baseState,l=0,m=null,p=null,x=null;if(null!==h){var z=h;do{g=z.expirationTime;if(g<d){var ca={expirationTime:z.expirationTime,suspenseConfig:z.suspenseConfig,tag:z.tag,payload:z.payload,callback:z.callback,next:null};null===x?(p=x=
	ca,m=k):x=x.next=ca;g>l&&(l=g);}else {null!==x&&(x=x.next={expirationTime:1073741823,suspenseConfig:z.suspenseConfig,tag:z.tag,payload:z.payload,callback:z.callback,next:null});Ag(g,z.suspenseConfig);a:{var D=a,t=z;g=b;ca=c;switch(t.tag){case 1:D=t.payload;if("function"===typeof D){k=D.call(ca,k,g);break a}k=D;break a;case 3:D.effectTag=D.effectTag&-4097|64;case 0:D=t.payload;g="function"===typeof D?D.call(ca,k,g):D;if(null===g||void 0===g)break a;k=objectAssign({},k,g);break a;case 2:tg=!0;}}null!==z.callback&&
	(a.effectTag|=32,g=e.effects,null===g?e.effects=[z]:g.push(z));}z=z.next;if(null===z||z===h)if(g=e.shared.pending,null===g)break;else z=f.next=g.next,g.next=h,e.baseQueue=f=g,e.shared.pending=null;}while(1)}null===x?m=k:x.next=p;e.baseState=m;e.baseQueue=x;Bg(l);a.expirationTime=l;a.memoizedState=k;}}
	function Cg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=e;e=c;if("function"!==typeof d)throw Error(u(191,d));d.call(e);}}}var Dg=Wa.ReactCurrentBatchConfig,Eg=(new react.Component).refs;function Fg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:objectAssign({},b,c);a.memoizedState=c;0===a.expirationTime&&(a.updateQueue.baseState=c);}
	var Jg={isMounted:function(a){return (a=a._reactInternalFiber)?dc(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e=wg(d,e);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);xg(a,e);Ig(a,d);},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e=wg(d,e);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);xg(a,e);Ig(a,d);},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=Gg(),d=Dg.suspense;
	c=Hg(c,a,d);d=wg(c,d);d.tag=2;void 0!==b&&null!==b&&(d.callback=b);xg(a,d);Ig(a,c);}};function Kg(a,b,c,d,e,f,g){a=a.stateNode;return "function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!bf(c,d)||!bf(e,f):!0}
	function Lg(a,b,c){var d=!1,e=Af;var f=b.contextType;"object"===typeof f&&null!==f?f=sg(f):(e=L$1(b)?Bf:J$1.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Cf(a,e):Af);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Jg;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
	function Mg(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Jg.enqueueReplaceState(b,b.state,null);}
	function Ng(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Eg;ug(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=sg(f):(f=L$1(b)?Bf:J$1.current,e.context=Cf(a,f));zg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Fg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
	(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Jg.enqueueReplaceState(e,e.state,null),zg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.effectTag|=4);}var Og=Array.isArray;
	function Pg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(u(309));var d=c.stateNode;}if(!d)throw Error(u(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Eg&&(b=d.refs={});null===a?delete b[e]:b[e]=a;};b._stringRef=e;return b}if("string"!==typeof a)throw Error(u(284));if(!c._owner)throw Error(u(290,a));}return a}
	function Qg(a,b){if("textarea"!==a.type)throw Error(u(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,""));}
	function Rg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8;}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Sg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
	2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Tg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Pg(a,b,c),d.return=a,d;d=Ug(c.type,c.key,c.props,null,a.mode,d);d.ref=Pg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
	c.implementation)return b=Vg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Wg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function p(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Tg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Za:return c=Ug(b.type,b.key,b.props,null,a.mode,c),c.ref=Pg(a,null,b),c.return=a,c;case $a:return b=Vg(b,a.mode,c),b.return=a,b}if(Og(b)||
	nb(b))return b=Wg(b,a.mode,c,null),b.return=a,b;Qg(a,b);}return null}function x(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Za:return c.key===e?c.type===ab?m(a,b,c.props.children,d,e):k(a,b,c,d):null;case $a:return c.key===e?l(a,b,c,d):null}if(Og(c)||nb(c))return null!==e?null:m(a,b,c,d,null);Qg(a,c);}return null}function z(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
	a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Za:return a=a.get(null===d.key?c:d.key)||null,d.type===ab?m(b,a,d.props.children,e,d.key):k(b,a,d,e);case $a:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Og(d)||nb(d))return a=a.get(c)||null,m(b,a,d,e,null);Qg(b,d);}return null}function ca(e,g,h,k){for(var l=null,t=null,m=g,y=g=0,A=null;null!==m&&y<h.length;y++){m.index>y?(A=m,m=null):A=m.sibling;var q=x(e,m,h[y],k);if(null===q){null===m&&(m=A);break}a&&
	m&&null===q.alternate&&b(e,m);g=f(q,g,y);null===t?l=q:t.sibling=q;t=q;m=A;}if(y===h.length)return c(e,m),l;if(null===m){for(;y<h.length;y++)m=p(e,h[y],k),null!==m&&(g=f(m,g,y),null===t?l=m:t.sibling=m,t=m);return l}for(m=d(e,m);y<h.length;y++)A=z(m,e,y,h[y],k),null!==A&&(a&&null!==A.alternate&&m.delete(null===A.key?y:A.key),g=f(A,g,y),null===t?l=A:t.sibling=A,t=A);a&&m.forEach(function(a){return b(e,a)});return l}function D(e,g,h,l){var k=nb(h);if("function"!==typeof k)throw Error(u(150));h=k.call(h);
	if(null==h)throw Error(u(151));for(var m=k=null,t=g,y=g=0,A=null,q=h.next();null!==t&&!q.done;y++,q=h.next()){t.index>y?(A=t,t=null):A=t.sibling;var D=x(e,t,q.value,l);if(null===D){null===t&&(t=A);break}a&&t&&null===D.alternate&&b(e,t);g=f(D,g,y);null===m?k=D:m.sibling=D;m=D;t=A;}if(q.done)return c(e,t),k;if(null===t){for(;!q.done;y++,q=h.next())q=p(e,q.value,l),null!==q&&(g=f(q,g,y),null===m?k=q:m.sibling=q,m=q);return k}for(t=d(e,t);!q.done;y++,q=h.next())q=z(t,e,y,q.value,l),null!==q&&(a&&null!==
	q.alternate&&t.delete(null===q.key?y:q.key),g=f(q,g,y),null===m?k=q:m.sibling=q,m=q);a&&t.forEach(function(a){return b(e,a)});return k}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ab&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Za:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ab){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,
	k.sibling);d=e(k,f.props);d.ref=Pg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling;}f.type===ab?(d=Wg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Ug(f.type,f.key,f.props,null,a.mode,h),h.ref=Pg(a,d,f),h.return=a,a=h);}return g(a);case $a:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else {c(a,d);break}else b(a,d);d=
	d.sibling;}d=Vg(f,a.mode,h);d.return=a;a=d;}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Tg(f,a.mode,h),d.return=a,a=d),g(a);if(Og(f))return ca(a,d,f,h);if(nb(f))return D(a,d,f,h);l&&Qg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:throw a=a.type,Error(u(152,a.displayName||a.name||"Component"));}return c(a,d)}}var Xg=Rg(!0),Yg=Rg(!1),Zg={},$g={current:Zg},ah={current:Zg},bh={current:Zg};
	function ch(a){if(a===Zg)throw Error(u(174));return a}function dh(a,b){I$1(bh,b);I$1(ah,a);I$1($g,Zg);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:Ob(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=Ob(b,a);}H$1($g);I$1($g,b);}function eh(){H$1($g);H$1(ah);H$1(bh);}function fh(a){ch(bh.current);var b=ch($g.current);var c=Ob(b,a.type);b!==c&&(I$1(ah,a),I$1($g,c));}function gh(a){ah.current===a&&(H$1($g),H$1(ah));}var M$1={current:0};
	function hh(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||c.data===Bd||c.data===Cd))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.effectTag&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}return null}function ih(a,b){return {responder:a,props:b}}
	var jh=Wa.ReactCurrentDispatcher,kh=Wa.ReactCurrentBatchConfig,lh=0,N$1=null,O$1=null,P$1=null,mh=!1;function Q$1(){throw Error(u(321));}function nh(a,b){if(null===b)return !1;for(var c=0;c<b.length&&c<a.length;c++)if(!$e(a[c],b[c]))return !1;return !0}
	function oh(a,b,c,d,e,f){lh=f;N$1=b;b.memoizedState=null;b.updateQueue=null;b.expirationTime=0;jh.current=null===a||null===a.memoizedState?ph:qh;a=c(d,e);if(b.expirationTime===lh){f=0;do{b.expirationTime=0;if(!(25>f))throw Error(u(301));f+=1;P$1=O$1=null;b.updateQueue=null;jh.current=rh;a=c(d,e);}while(b.expirationTime===lh)}jh.current=sh;b=null!==O$1&&null!==O$1.next;lh=0;P$1=O$1=N$1=null;mh=!1;if(b)throw Error(u(300));return a}
	function th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===P$1?N$1.memoizedState=P$1=a:P$1=P$1.next=a;return P$1}function uh(){if(null===O$1){var a=N$1.alternate;a=null!==a?a.memoizedState:null;}else a=O$1.next;var b=null===P$1?N$1.memoizedState:P$1.next;if(null!==b)P$1=b,O$1=a;else {if(null===a)throw Error(u(310));O$1=a;a={memoizedState:O$1.memoizedState,baseState:O$1.baseState,baseQueue:O$1.baseQueue,queue:O$1.queue,next:null};null===P$1?N$1.memoizedState=P$1=a:P$1=P$1.next=a;}return P$1}
	function vh(a,b){return "function"===typeof b?b(a):b}
	function wh(a){var b=uh(),c=b.queue;if(null===c)throw Error(u(311));c.lastRenderedReducer=a;var d=O$1,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g;}d.baseQueue=e=f;c.pending=null;}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.expirationTime;if(l<lh){var m={expirationTime:k.expirationTime,suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null};null===h?(g=h=m,f=d):h=h.next=m;l>N$1.expirationTime&&
	(N$1.expirationTime=l,Bg(l));}else null!==h&&(h=h.next={expirationTime:1073741823,suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),Ag(l,k.suspenseConfig),d=k.eagerReducer===a?k.eagerState:a(d,k.action);k=k.next;}while(null!==k&&k!==e);null===h?f=d:h.next=g;$e(d,b.memoizedState)||(rg=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d;}return [b.memoizedState,c.dispatch]}
	function xh(a){var b=uh(),c=b.queue;if(null===c)throw Error(u(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);$e(f,b.memoizedState)||(rg=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f;}return [f,d]}
	function yh(a){var b=th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:vh,lastRenderedState:a};a=a.dispatch=zh.bind(null,N$1,a);return [b.memoizedState,a]}function Ah(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=N$1.updateQueue;null===b?(b={lastEffect:null},N$1.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}
	function Bh(){return uh().memoizedState}function Ch(a,b,c,d){var e=th();N$1.effectTag|=a;e.memoizedState=Ah(1|b,c,void 0,void 0===d?null:d);}function Dh(a,b,c,d){var e=uh();d=void 0===d?null:d;var f=void 0;if(null!==O$1){var g=O$1.memoizedState;f=g.destroy;if(null!==d&&nh(d,g.deps)){Ah(b,c,f,d);return}}N$1.effectTag|=a;e.memoizedState=Ah(1|b,c,f,d);}function Eh(a,b){return Ch(516,4,a,b)}function Fh(a,b){return Dh(516,4,a,b)}function Gh(a,b){return Dh(4,2,a,b)}
	function Hh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null);};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null;}}function Ih(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Dh(4,2,Hh.bind(null,b,a),c)}function Jh(){}function Kh(a,b){th().memoizedState=[a,void 0===b?null:b];return a}function Lh(a,b){var c=uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&nh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
	function Mh(a,b){var c=uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&nh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function Nh(a,b,c){var d=ag();cg(98>d?98:d,function(){a(!0);});cg(97<d?97:d,function(){var d=kh.suspense;kh.suspense=void 0===b?null:b;try{a(!1),c();}finally{kh.suspense=d;}});}
	function zh(a,b,c){var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e={expirationTime:d,suspenseConfig:e,action:c,eagerReducer:null,eagerState:null,next:null};var f=b.pending;null===f?e.next=e:(e.next=f.next,f.next=e);b.pending=e;f=a.alternate;if(a===N$1||null!==f&&f===N$1)mh=!0,e.expirationTime=lh,N$1.expirationTime=lh;else {if(0===a.expirationTime&&(null===f||0===f.expirationTime)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.eagerReducer=f;e.eagerState=h;if($e(h,g))return}catch(k){}finally{}Ig(a,
	d);}}
	var sh={readContext:sg,useCallback:Q$1,useContext:Q$1,useEffect:Q$1,useImperativeHandle:Q$1,useLayoutEffect:Q$1,useMemo:Q$1,useReducer:Q$1,useRef:Q$1,useState:Q$1,useDebugValue:Q$1,useResponder:Q$1,useDeferredValue:Q$1,useTransition:Q$1},ph={readContext:sg,useCallback:Kh,useContext:sg,useEffect:Eh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Ch(4,2,Hh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return Ch(4,2,a,b)},useMemo:function(a,b){var c=th();b=void 0===b?null:b;a=a();c.memoizedState=[a,
	b];return a},useReducer:function(a,b,c){var d=th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=zh.bind(null,N$1,a);return [d.memoizedState,a]},useRef:function(a){var b=th();a={current:a};return b.memoizedState=a},useState:yh,useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=yh(a),d=c[0],e=c[1];Eh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a);}finally{kh.suspense=
	c;}},[a,b]);return d},useTransition:function(a){var b=yh(!1),c=b[0];b=b[1];return [Kh(Nh.bind(null,b,a),[b,a]),c]}},qh={readContext:sg,useCallback:Lh,useContext:sg,useEffect:Fh,useImperativeHandle:Ih,useLayoutEffect:Gh,useMemo:Mh,useReducer:wh,useRef:Bh,useState:function(){return wh(vh)},useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=wh(vh),d=c[0],e=c[1];Fh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a);}finally{kh.suspense=c;}},[a,b]);return d},useTransition:function(a){var b=
	wh(vh),c=b[0];b=b[1];return [Lh(Nh.bind(null,b,a),[b,a]),c]}},rh={readContext:sg,useCallback:Lh,useContext:sg,useEffect:Fh,useImperativeHandle:Ih,useLayoutEffect:Gh,useMemo:Mh,useReducer:xh,useRef:Bh,useState:function(){return xh(vh)},useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=xh(vh),d=c[0],e=c[1];Fh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a);}finally{kh.suspense=c;}},[a,b]);return d},useTransition:function(a){var b=xh(vh),c=b[0];b=b[1];return [Lh(Nh.bind(null,
	b,a),[b,a]),c]}},Oh=null,Ph=null,Qh=!1;function Rh(a,b){var c=Sh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c;}
	function Th(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return !1;default:return !1}}
	function Uh(a){if(Qh){var b=Ph;if(b){var c=b;if(!Th(a,b)){b=Jd(c.nextSibling);if(!b||!Th(a,b)){a.effectTag=a.effectTag&-1025|2;Qh=!1;Oh=a;return}Rh(Oh,c);}Oh=a;Ph=Jd(b.firstChild);}else a.effectTag=a.effectTag&-1025|2,Qh=!1,Oh=a;}}function Vh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;Oh=a;}
	function Wh(a){if(a!==Oh)return !1;if(!Qh)return Vh(a),Qh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!Gd(b,a.memoizedProps))for(b=Ph;b;)Rh(a,b),b=Jd(b.nextSibling);Vh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(u(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if(c===Ad){if(0===b){Ph=Jd(a.nextSibling);break a}b--;}else c!==zd&&c!==Cd&&c!==Bd||b++;}a=a.nextSibling;}Ph=null;}}else Ph=Oh?Jd(a.stateNode.nextSibling):null;return !0}
	function Xh(){Ph=Oh=null;Qh=!1;}var Yh=Wa.ReactCurrentOwner,rg=!1;function R$1(a,b,c,d){b.child=null===a?Yg(b,null,c,d):Xg(b,a.child,c,d);}function Zh(a,b,c,d,e){c=c.render;var f=b.ref;qg(b,e);d=oh(a,b,c,d,f,e);if(null!==a&&!rg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),$h(a,b,e);b.effectTag|=1;R$1(a,b,d,e);return b.child}
	function ai(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!bi(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ci(a,b,g,d,e,f);a=Ug(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:bf,c(e,d)&&a.ref===b.ref))return $h(a,b,f);b.effectTag|=1;a=Sg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
	function ci(a,b,c,d,e,f){return null!==a&&bf(a.memoizedProps,d)&&a.ref===b.ref&&(rg=!1,e<f)?(b.expirationTime=a.expirationTime,$h(a,b,f)):di(a,b,c,d,f)}function ei(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128;}function di(a,b,c,d,e){var f=L$1(c)?Bf:J$1.current;f=Cf(b,f);qg(b,e);c=oh(a,b,c,d,f,e);if(null!==a&&!rg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),$h(a,b,e);b.effectTag|=1;R$1(a,b,c,e);return b.child}
	function fi(a,b,c,d,e){if(L$1(c)){var f=!0;Gf(b);}else f=!1;qg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),Lg(b,c,d),Ng(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=sg(l):(l=L$1(c)?Bf:J$1.current,l=Cf(b,l));var m=c.getDerivedStateFromProps,p="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;p||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
	"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Mg(b,g,d,l);tg=!1;var x=b.memoizedState;g.state=x;zg(b,d,g,e);k=b.memoizedState;h!==d||x!==k||K$1.current||tg?("function"===typeof m&&(Fg(b,c,m,d),k=b.memoizedState),(h=tg||Kg(b,c,h,d,x,k,l))?(p||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
	typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1);}else g=b.stateNode,vg(a,b),h=b.memoizedProps,g.props=b.type===b.elementType?h:ig(b.type,h),k=g.context,l=c.contextType,"object"===typeof l&&null!==l?l=sg(l):(l=L$1(c)?Bf:J$1.current,l=Cf(b,l)),m=c.getDerivedStateFromProps,(p="function"===typeof m||"function"===
	typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Mg(b,g,d,l),tg=!1,k=b.memoizedState,g.state=k,zg(b,d,g,e),x=b.memoizedState,h!==d||k!==x||K$1.current||tg?("function"===typeof m&&(Fg(b,c,m,d),x=b.memoizedState),(m=tg||Kg(b,c,h,d,k,x,l))?(p||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
	x,l),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,l)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=l,d=m):
	("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),d=!1);return gi(a,b,c,d,f,e)}
	function gi(a,b,c,d,e,f){ei(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Hf(b,c,!1),$h(a,b,f);d=b.stateNode;Yh.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=Xg(b,a.child,null,f),b.child=Xg(b,null,h,f)):R$1(a,b,h,f);b.memoizedState=d.state;e&&Hf(b,c,!0);return b.child}function hi(a){var b=a.stateNode;b.pendingContext?Ef(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Ef(a,b.context,!1);dh(a,b.containerInfo);}
	var ii={dehydrated:null,retryTime:0};
	function ji(a,b,c){var d=b.mode,e=b.pendingProps,f=M$1.current,g=!1,h;(h=0!==(b.effectTag&64))||(h=0!==(f&2)&&(null===a||null!==a.memoizedState));h?(g=!0,b.effectTag&=-65):null!==a&&null===a.memoizedState||void 0===e.fallback||!0===e.unstable_avoidThisFallback||(f|=1);I$1(M$1,f&1);if(null===a){void 0!==e.fallback&&Uh(b);if(g){g=e.fallback;e=Wg(null,d,0,null);e.return=b;if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Wg(g,d,c,null);c.return=
	b;e.sibling=c;b.memoizedState=ii;b.child=e;return c}d=e.children;b.memoizedState=null;return b.child=Yg(b,null,d,c)}if(null!==a.memoizedState){a=a.child;d=a.sibling;if(g){e=e.fallback;c=Sg(a,a.pendingProps);c.return=b;if(0===(b.mode&2)&&(g=null!==b.memoizedState?b.child.child:b.child,g!==a.child))for(c.child=g;null!==g;)g.return=c,g=g.sibling;d=Sg(d,e);d.return=b;c.sibling=d;c.childExpirationTime=0;b.memoizedState=ii;b.child=c;return d}c=Xg(b,a.child,e.children,c);b.memoizedState=null;return b.child=
	c}a=a.child;if(g){g=e.fallback;e=Wg(null,d,0,null);e.return=b;e.child=a;null!==a&&(a.return=e);if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Wg(g,d,c,null);c.return=b;e.sibling=c;c.effectTag|=2;e.childExpirationTime=0;b.memoizedState=ii;b.child=e;return c}b.memoizedState=null;return b.child=Xg(b,a,e.children,c)}
	function ki(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);pg(a.return,b);}function li(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailExpiration:0,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailExpiration=0,g.tailMode=e,g.lastEffect=f);}
	function mi(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;R$1(a,b,d.children,c);d=M$1.current;if(0!==(d&2))d=d&1|2,b.effectTag|=64;else {if(null!==a&&0!==(a.effectTag&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&ki(a,c);else if(19===a.tag)ki(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return;}a.sibling.return=a.return;a=a.sibling;}d&=1;}I$1(M$1,d);if(0===(b.mode&2))b.memoizedState=
	null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===hh(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);li(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===hh(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a;}li(b,!0,c,null,f,b.lastEffect);break;case "together":li(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null;}return b.child}
	function $h(a,b,c){null!==a&&(b.dependencies=a.dependencies);var d=b.expirationTime;0!==d&&Bg(d);if(b.childExpirationTime<c)return null;if(null!==a&&b.child!==a.child)throw Error(u(153));if(null!==b.child){a=b.child;c=Sg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Sg(a,a.pendingProps),c.return=b;c.sibling=null;}return b.child}var ni,oi,pi,qi;
	ni=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}};oi=function(){};
	pi=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;ch($g.current);a=null;switch(c){case "input":f=zb(g,f);d=zb(g,d);a=[];break;case "option":f=Gb(g,f);d=Gb(g,d);a=[];break;case "select":f=objectAssign({},f,{value:void 0});d=objectAssign({},d,{value:void 0});a=[];break;case "textarea":f=Ib(g,f);d=Ib(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=sd);}od(c,d);var h,k;c=null;for(h in f)if(!d.hasOwnProperty(h)&&f.hasOwnProperty(h)&&null!=f[h])if("style"===
	h)for(k in g=f[h],g)g.hasOwnProperty(k)&&(c||(c={}),c[k]="");else "dangerouslySetInnerHTML"!==h&&"children"!==h&&"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&"autoFocus"!==h&&(va.hasOwnProperty(h)?a||(a=[]):(a=a||[]).push(h,null));for(h in d){var l=d[h];g=null!=f?f[h]:void 0;if(d.hasOwnProperty(h)&&l!==g&&(null!=l||null!=g))if("style"===h)if(g){for(k in g)!g.hasOwnProperty(k)||l&&l.hasOwnProperty(k)||(c||(c={}),c[k]="");for(k in l)l.hasOwnProperty(k)&&g[k]!==l[k]&&(c||(c={}),
	c[k]=l[k]);}else c||(a||(a=[]),a.push(h,c)),c=l;else "dangerouslySetInnerHTML"===h?(l=l?l.__html:void 0,g=g?g.__html:void 0,null!=l&&g!==l&&(a=a||[]).push(h,l)):"children"===h?g===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(h,""+l):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&(va.hasOwnProperty(h)?(null!=l&&rd(e,h),a||g===l||(a=[])):(a=a||[]).push(h,l));}c&&(a=a||[]).push("style",c);e=a;if(b.updateQueue=e)b.effectTag|=4;}};
	qi=function(a,b,c,d){c!==d&&(b.effectTag|=4);};function ri(a,b){switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null;}}
	function si(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return L$1(b.type)&&Df(),null;case 3:return eh(),H$1(K$1),H$1(J$1),c=b.stateNode,c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),null!==a&&null!==a.child||!Wh(b)||(b.effectTag|=4),oi(b),null;case 5:gh(b);c=ch(bh.current);var e=b.type;if(null!==a&&null!=b.stateNode)pi(a,b,e,d,c),a.ref!==b.ref&&(b.effectTag|=128);else {if(!d){if(null===b.stateNode)throw Error(u(166));
	return null}a=ch($g.current);if(Wh(b)){d=b.stateNode;e=b.type;var f=b.memoizedProps;d[Md]=b;d[Nd]=f;switch(e){case "iframe":case "object":case "embed":F$1("load",d);break;case "video":case "audio":for(a=0;a<ac.length;a++)F$1(ac[a],d);break;case "source":F$1("error",d);break;case "img":case "image":case "link":F$1("error",d);F$1("load",d);break;case "form":F$1("reset",d);F$1("submit",d);break;case "details":F$1("toggle",d);break;case "input":Ab(d,f);F$1("invalid",d);rd(c,"onChange");break;case "select":d._wrapperState=
	{wasMultiple:!!f.multiple};F$1("invalid",d);rd(c,"onChange");break;case "textarea":Jb(d,f),F$1("invalid",d),rd(c,"onChange");}od(e,f);a=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(a=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(a=["children",""+h]):va.hasOwnProperty(g)&&null!=h&&rd(c,g);}switch(e){case "input":xb(d);Eb(d,f,!0);break;case "textarea":xb(d);Lb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&
	(d.onclick=sd);}c=a;b.updateQueue=c;null!==c&&(b.effectTag|=4);}else {g=9===c.nodeType?c:c.ownerDocument;a===qd&&(a=Nb(e));a===qd?"script"===e?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(e,{is:d.is}):(a=g.createElement(e),"select"===e&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,e);a[Md]=b;a[Nd]=d;ni(a,b,!1,!1);b.stateNode=a;g=pd(e,d);switch(e){case "iframe":case "object":case "embed":F$1("load",
	a);h=d;break;case "video":case "audio":for(h=0;h<ac.length;h++)F$1(ac[h],a);h=d;break;case "source":F$1("error",a);h=d;break;case "img":case "image":case "link":F$1("error",a);F$1("load",a);h=d;break;case "form":F$1("reset",a);F$1("submit",a);h=d;break;case "details":F$1("toggle",a);h=d;break;case "input":Ab(a,d);h=zb(a,d);F$1("invalid",a);rd(c,"onChange");break;case "option":h=Gb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};h=objectAssign({},d,{value:void 0});F$1("invalid",a);rd(c,"onChange");break;case "textarea":Jb(a,
	d);h=Ib(a,d);F$1("invalid",a);rd(c,"onChange");break;default:h=d;}od(e,h);var k=h;for(f in k)if(k.hasOwnProperty(f)){var l=k[f];"style"===f?md(a,l):"dangerouslySetInnerHTML"===f?(l=l?l.__html:void 0,null!=l&&Qb(a,l)):"children"===f?"string"===typeof l?("textarea"!==e||""!==l)&&Rb(a,l):"number"===typeof l&&Rb(a,""+l):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(va.hasOwnProperty(f)?null!=l&&rd(c,f):null!=l&&Xa(a,f,l,g));}switch(e){case "input":xb(a);Eb(a,d,!1);
	break;case "textarea":xb(a);Lb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+rb(d.value));break;case "select":a.multiple=!!d.multiple;c=d.value;null!=c?Hb(a,!!d.multiple,c,!1):null!=d.defaultValue&&Hb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof h.onClick&&(a.onclick=sd);}Fd(e,d)&&(b.effectTag|=4);}null!==b.ref&&(b.effectTag|=128);}return null;case 6:if(a&&null!=b.stateNode)qi(a,b,a.memoizedProps,d);else {if("string"!==typeof d&&null===b.stateNode)throw Error(u(166));
	c=ch(bh.current);ch($g.current);Wh(b)?(c=b.stateNode,d=b.memoizedProps,c[Md]=b,c.nodeValue!==d&&(b.effectTag|=4)):(c=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),c[Md]=b,b.stateNode=c);}return null;case 13:H$1(M$1);d=b.memoizedState;if(0!==(b.effectTag&64))return b.expirationTime=c,b;c=null!==d;d=!1;null===a?void 0!==b.memoizedProps.fallback&&Wh(b):(e=a.memoizedState,d=null!==e,c||null===e||(e=a.child.sibling,null!==e&&(f=b.firstEffect,null!==f?(b.firstEffect=e,e.nextEffect=f):(b.firstEffect=b.lastEffect=
	e,e.nextEffect=null),e.effectTag=8)));if(c&&!d&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(M$1.current&1))S$1===ti&&(S$1=ui);else {if(S$1===ti||S$1===ui)S$1=vi;0!==wi&&null!==T$1&&(xi(T$1,U$1),yi(T$1,wi));}if(c||d)b.effectTag|=4;return null;case 4:return eh(),oi(b),null;case 10:return og(b),null;case 17:return L$1(b.type)&&Df(),null;case 19:H$1(M$1);d=b.memoizedState;if(null===d)return null;e=0!==(b.effectTag&64);f=d.rendering;if(null===f)if(e)ri(d,!1);else {if(S$1!==ti||null!==a&&0!==(a.effectTag&
	64))for(f=b.child;null!==f;){a=hh(f);if(null!==a){b.effectTag|=64;ri(d,!1);e=a.updateQueue;null!==e&&(b.updateQueue=e,b.effectTag|=4);null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;for(d=b.child;null!==d;)e=d,f=c,e.effectTag&=2,e.nextEffect=null,e.firstEffect=null,e.lastEffect=null,a=e.alternate,null===a?(e.childExpirationTime=0,e.expirationTime=f,e.child=null,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null):(e.childExpirationTime=a.childExpirationTime,
	e.expirationTime=a.expirationTime,e.child=a.child,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,f=a.dependencies,e.dependencies=null===f?null:{expirationTime:f.expirationTime,firstContext:f.firstContext,responders:f.responders}),d=d.sibling;I$1(M$1,M$1.current&1|2);return b.child}f=f.sibling;}}else {if(!e)if(a=hh(f),null!==a){if(b.effectTag|=64,e=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.effectTag|=4),ri(d,!0),null===d.tail&&"hidden"===d.tailMode&&!f.alternate)return b=
	b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*$f()-d.renderingStartTime>d.tailExpiration&&1<c&&(b.effectTag|=64,e=!0,ri(d,!1),b.expirationTime=b.childExpirationTime=c-1);d.isBackwards?(f.sibling=b.child,b.child=f):(c=d.last,null!==c?c.sibling=f:b.child=f,d.last=f);}return null!==d.tail?(0===d.tailExpiration&&(d.tailExpiration=$f()+500),c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=$f(),c.sibling=null,b=M$1.current,I$1(M$1,e?b&1|2:b&1),c):null}throw Error(u(156,
	b.tag));}function zi(a){switch(a.tag){case 1:L$1(a.type)&&Df();var b=a.effectTag;return b&4096?(a.effectTag=b&-4097|64,a):null;case 3:eh();H$1(K$1);H$1(J$1);b=a.effectTag;if(0!==(b&64))throw Error(u(285));a.effectTag=b&-4097|64;return a;case 5:return gh(a),null;case 13:return H$1(M$1),b=a.effectTag,b&4096?(a.effectTag=b&-4097|64,a):null;case 19:return H$1(M$1),null;case 4:return eh(),null;case 10:return og(a),null;default:return null}}function Ai(a,b){return {value:a,source:b,stack:qb(b)}}
	var Bi="function"===typeof WeakSet?WeakSet:Set;function Ci(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=qb(c));null!==c&&pb(c.type);b=b.value;null!==a&&1===a.tag&&pb(a.type);try{console.error(b);}catch(e){setTimeout(function(){throw e;});}}function Di(a,b){try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount();}catch(c){Ei(a,c);}}function Fi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null);}catch(c){Ei(a,c);}else b.current=null;}
	function Gi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:ig(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b;}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(u(163));}
	function Hi(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.destroy;c.destroy=void 0;void 0!==d&&d();}c=c.next;}while(c!==b)}}function Ii(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d();}c=c.next;}while(c!==b)}}
	function Ji(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:Ii(3,c);return;case 1:a=c.stateNode;if(c.effectTag&4)if(null===b)a.componentDidMount();else {var d=c.elementType===c.type?b.memoizedProps:ig(c.type,b.memoizedProps);a.componentDidUpdate(d,b.memoizedState,a.__reactInternalSnapshotBeforeUpdate);}b=c.updateQueue;null!==b&&Cg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode;}Cg(c,b,a);}return;
	case 5:a=c.stateNode;null===b&&c.effectTag&4&&Fd(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Vc(c))));return;case 19:case 17:case 20:case 21:return}throw Error(u(163));}
	function Ki(a,b,c){"function"===typeof Li&&Li(b);switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var d=a.next;cg(97<c?97:c,function(){var a=d;do{var c=a.destroy;if(void 0!==c){var g=b;try{c();}catch(h){Ei(g,h);}}a=a.next;}while(a!==d)});}break;case 1:Fi(b);c=b.stateNode;"function"===typeof c.componentWillUnmount&&Di(b,c);break;case 5:Fi(b);break;case 4:Mi(a,b,c);}}
	function Ni(a){var b=a.alternate;a.return=null;a.child=null;a.memoizedState=null;a.updateQueue=null;a.dependencies=null;a.alternate=null;a.firstEffect=null;a.lastEffect=null;a.pendingProps=null;a.memoizedProps=null;a.stateNode=null;null!==b&&Ni(b);}function Oi(a){return 5===a.tag||3===a.tag||4===a.tag}
	function Pi(a){a:{for(var b=a.return;null!==b;){if(Oi(b)){var c=b;break a}b=b.return;}throw Error(u(160));}b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(u(161));}c.effectTag&16&&(Rb(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||Oi(c.return)){c=null;break a}c=c.return;}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&2)continue b;
	if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child;}if(!(c.effectTag&2)){c=c.stateNode;break a}}d?Qi(a,c,b):Ri(a,c,b);}
	function Qi(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=sd));else if(4!==d&&(a=a.child,null!==a))for(Qi(a,b,c),a=a.sibling;null!==a;)Qi(a,b,c),a=a.sibling;}
	function Ri(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Ri(a,b,c),a=a.sibling;null!==a;)Ri(a,b,c),a=a.sibling;}
	function Mi(a,b,c){for(var d=b,e=!1,f,g;;){if(!e){e=d.return;a:for(;;){if(null===e)throw Error(u(160));f=e.stateNode;switch(e.tag){case 5:g=!1;break a;case 3:f=f.containerInfo;g=!0;break a;case 4:f=f.containerInfo;g=!0;break a}e=e.return;}e=!0;}if(5===d.tag||6===d.tag){a:for(var h=a,k=d,l=c,m=k;;)if(Ki(h,m,l),null!==m.child&&4!==m.tag)m.child.return=m,m=m.child;else {if(m===k)break a;for(;null===m.sibling;){if(null===m.return||m.return===k)break a;m=m.return;}m.sibling.return=m.return;m=m.sibling;}g?(h=
	f,k=d.stateNode,8===h.nodeType?h.parentNode.removeChild(k):h.removeChild(k)):f.removeChild(d.stateNode);}else if(4===d.tag){if(null!==d.child){f=d.stateNode.containerInfo;g=!0;d.child.return=d;d=d.child;continue}}else if(Ki(a,d,c),null!==d.child){d.child.return=d;d=d.child;continue}if(d===b)break;for(;null===d.sibling;){if(null===d.return||d.return===b)return;d=d.return;4===d.tag&&(e=!1);}d.sibling.return=d.return;d=d.sibling;}}
	function Si(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:Hi(3,b);return;case 1:return;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[Nd]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Bb(c,d);pd(a,e);b=pd(a,d);for(e=0;e<f.length;e+=2){var g=f[e],h=f[e+1];"style"===g?md(c,h):"dangerouslySetInnerHTML"===g?Qb(c,h):"children"===g?Rb(c,h):Xa(c,g,h,b);}switch(a){case "input":Cb(c,d);break;
	case "textarea":Kb(c,d);break;case "select":b=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,a=d.value,null!=a?Hb(c,!!d.multiple,a,!1):b!==!!d.multiple&&(null!=d.defaultValue?Hb(c,!!d.multiple,d.defaultValue,!0):Hb(c,!!d.multiple,d.multiple?[]:"",!1));}}}return;case 6:if(null===b.stateNode)throw Error(u(162));b.stateNode.nodeValue=b.memoizedProps;return;case 3:b=b.stateNode;b.hydrate&&(b.hydrate=!1,Vc(b.containerInfo));return;case 12:return;case 13:c=b;null===b.memoizedState?
	d=!1:(d=!0,c=b.child,Ti=$f());if(null!==c)a:for(a=c;;){if(5===a.tag)f=a.stateNode,d?(f=f.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(f=a.stateNode,e=a.memoizedProps.style,e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null,f.style.display=ld("display",e));else if(6===a.tag)a.stateNode.nodeValue=d?"":a.memoizedProps;else if(13===a.tag&&null!==a.memoizedState&&null===a.memoizedState.dehydrated){f=a.child.sibling;f.return=a;a=
	f;continue}else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===c)break;for(;null===a.sibling;){if(null===a.return||a.return===c)break a;a=a.return;}a.sibling.return=a.return;a=a.sibling;}Ui(b);return;case 19:Ui(b);return;case 17:return}throw Error(u(163));}function Ui(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Bi);b.forEach(function(b){var d=Vi.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d));});}}
	var Wi="function"===typeof WeakMap?WeakMap:Map;function Xi(a,b,c){c=wg(c,null);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Yi||(Yi=!0,Zi=d);Ci(a,b);};return c}
	function $i(a,b,c){c=wg(c,null);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ci(a,b);return d(e)};}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===aj?aj=new Set([this]):aj.add(this),Ci(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""});});return c}
	var bj=Math.ceil,cj=Wa.ReactCurrentDispatcher,dj=Wa.ReactCurrentOwner,V$1=0,ej=8,fj=16,gj=32,ti=0,hj=1,ij=2,ui=3,vi=4,jj=5,W=V$1,T$1=null,X$1=null,U$1=0,S$1=ti,kj=null,lj=1073741823,mj=1073741823,nj=null,wi=0,oj=!1,Ti=0,pj=500,Y=null,Yi=!1,Zi=null,aj=null,qj=!1,rj=null,sj=90,tj=null,uj=0,vj=null,wj=0;function Gg(){return (W&(fj|gj))!==V$1?1073741821-($f()/10|0):0!==wj?wj:wj=1073741821-($f()/10|0)}
	function Hg(a,b,c){b=b.mode;if(0===(b&2))return 1073741823;var d=ag();if(0===(b&4))return 99===d?1073741823:1073741822;if((W&fj)!==V$1)return U$1;if(null!==c)a=hg(a,c.timeoutMs|0||5E3,250);else switch(d){case 99:a=1073741823;break;case 98:a=hg(a,150,100);break;case 97:case 96:a=hg(a,5E3,250);break;case 95:a=2;break;default:throw Error(u(326));}null!==T$1&&a===U$1&&--a;return a}
	function Ig(a,b){if(50<uj)throw uj=0,vj=null,Error(u(185));a=xj(a,b);if(null!==a){var c=ag();1073741823===b?(W&ej)!==V$1&&(W&(fj|gj))===V$1?yj(a):(Z$1(a),W===V$1&&gg()):Z$1(a);(W&4)===V$1||98!==c&&99!==c||(null===tj?tj=new Map([[a,b]]):(c=tj.get(a),(void 0===c||c>b)&&tj.set(a,b)));}}
	function xj(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return;}null!==e&&(T$1===e&&(Bg(b),S$1===vi&&xi(e,U$1)),yi(e,b));return e}
	function zj(a){var b=a.lastExpiredTime;if(0!==b)return b;b=a.firstPendingTime;if(!Aj(a,b))return b;var c=a.lastPingedTime;a=a.nextKnownPendingLevel;a=c>a?c:a;return 2>=a&&b!==a?0:a}
	function Z$1(a){if(0!==a.lastExpiredTime)a.callbackExpirationTime=1073741823,a.callbackPriority=99,a.callbackNode=eg(yj.bind(null,a));else {var b=zj(a),c=a.callbackNode;if(0===b)null!==c&&(a.callbackNode=null,a.callbackExpirationTime=0,a.callbackPriority=90);else {var d=Gg();1073741823===b?d=99:1===b||2===b?d=95:(d=10*(1073741821-b)-10*(1073741821-d),d=0>=d?99:250>=d?98:5250>=d?97:95);if(null!==c){var e=a.callbackPriority;if(a.callbackExpirationTime===b&&e>=d)return;c!==Tf&&Kf(c);}a.callbackExpirationTime=
	b;a.callbackPriority=d;b=1073741823===b?eg(yj.bind(null,a)):dg(d,Bj.bind(null,a),{timeout:10*(1073741821-b)-$f()});a.callbackNode=b;}}}
	function Bj(a,b){wj=0;if(b)return b=Gg(),Cj(a,b),Z$1(a),null;var c=zj(a);if(0!==c){b=a.callbackNode;if((W&(fj|gj))!==V$1)throw Error(u(327));Dj();a===T$1&&c===U$1||Ej(a,c);if(null!==X$1){var d=W;W|=fj;var e=Fj();do try{Gj();break}catch(h){Hj(a,h);}while(1);ng();W=d;cj.current=e;if(S$1===hj)throw b=kj,Ej(a,c),xi(a,c),Z$1(a),b;if(null===X$1)switch(e=a.finishedWork=a.current.alternate,a.finishedExpirationTime=c,d=S$1,T$1=null,d){case ti:case hj:throw Error(u(345));case ij:Cj(a,2<c?2:c);break;case ui:xi(a,c);d=a.lastSuspendedTime;
	c===d&&(a.nextKnownPendingLevel=Ij(e));if(1073741823===lj&&(e=Ti+pj-$f(),10<e)){if(oj){var f=a.lastPingedTime;if(0===f||f>=c){a.lastPingedTime=c;Ej(a,c);break}}f=zj(a);if(0!==f&&f!==c)break;if(0!==d&&d!==c){a.lastPingedTime=d;break}a.timeoutHandle=Hd(Jj.bind(null,a),e);break}Jj(a);break;case vi:xi(a,c);d=a.lastSuspendedTime;c===d&&(a.nextKnownPendingLevel=Ij(e));if(oj&&(e=a.lastPingedTime,0===e||e>=c)){a.lastPingedTime=c;Ej(a,c);break}e=zj(a);if(0!==e&&e!==c)break;if(0!==d&&d!==c){a.lastPingedTime=
	d;break}1073741823!==mj?d=10*(1073741821-mj)-$f():1073741823===lj?d=0:(d=10*(1073741821-lj)-5E3,e=$f(),c=10*(1073741821-c)-e,d=e-d,0>d&&(d=0),d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*bj(d/1960))-d,c<d&&(d=c));if(10<d){a.timeoutHandle=Hd(Jj.bind(null,a),d);break}Jj(a);break;case jj:if(1073741823!==lj&&null!==nj){f=lj;var g=nj;d=g.busyMinDurationMs|0;0>=d?d=0:(e=g.busyDelayMs|0,f=$f()-(10*(1073741821-f)-(g.timeoutMs|0||5E3)),d=f<=e?0:e+d-f);if(10<d){xi(a,c);a.timeoutHandle=
	Hd(Jj.bind(null,a),d);break}}Jj(a);break;default:throw Error(u(329));}Z$1(a);if(a.callbackNode===b)return Bj.bind(null,a)}}return null}
	function yj(a){var b=a.lastExpiredTime;b=0!==b?b:1073741823;if((W&(fj|gj))!==V$1)throw Error(u(327));Dj();a===T$1&&b===U$1||Ej(a,b);if(null!==X$1){var c=W;W|=fj;var d=Fj();do try{Kj();break}catch(e){Hj(a,e);}while(1);ng();W=c;cj.current=d;if(S$1===hj)throw c=kj,Ej(a,b),xi(a,b),Z$1(a),c;if(null!==X$1)throw Error(u(261));a.finishedWork=a.current.alternate;a.finishedExpirationTime=b;T$1=null;Jj(a);Z$1(a);}return null}function Lj(){if(null!==tj){var a=tj;tj=null;a.forEach(function(a,c){Cj(c,a);Z$1(c);});gg();}}
	function Mj(a,b){var c=W;W|=1;try{return a(b)}finally{W=c,W===V$1&&gg();}}function Nj(a,b){var c=W;W&=-2;W|=ej;try{return a(b)}finally{W=c,W===V$1&&gg();}}
	function Ej(a,b){a.finishedWork=null;a.finishedExpirationTime=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Id(c));if(null!==X$1)for(c=X$1.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Df();break;case 3:eh();H$1(K$1);H$1(J$1);break;case 5:gh(d);break;case 4:eh();break;case 13:H$1(M$1);break;case 19:H$1(M$1);break;case 10:og(d);}c=c.return;}T$1=a;X$1=Sg(a.current,null);U$1=b;S$1=ti;kj=null;mj=lj=1073741823;nj=null;wi=0;oj=!1;}
	function Hj(a,b){do{try{ng();jh.current=sh;if(mh)for(var c=N$1.memoizedState;null!==c;){var d=c.queue;null!==d&&(d.pending=null);c=c.next;}lh=0;P$1=O$1=N$1=null;mh=!1;if(null===X$1||null===X$1.return)return S$1=hj,kj=b,X$1=null;a:{var e=a,f=X$1.return,g=X$1,h=b;b=U$1;g.effectTag|=2048;g.firstEffect=g.lastEffect=null;if(null!==h&&"object"===typeof h&&"function"===typeof h.then){var k=h;if(0===(g.mode&2)){var l=g.alternate;l?(g.updateQueue=l.updateQueue,g.memoizedState=l.memoizedState,g.expirationTime=l.expirationTime):(g.updateQueue=
	null,g.memoizedState=null);}var m=0!==(M$1.current&1),p=f;do{var x;if(x=13===p.tag){var z=p.memoizedState;if(null!==z)x=null!==z.dehydrated?!0:!1;else {var ca=p.memoizedProps;x=void 0===ca.fallback?!1:!0!==ca.unstable_avoidThisFallback?!0:m?!1:!0;}}if(x){var D=p.updateQueue;if(null===D){var t=new Set;t.add(k);p.updateQueue=t;}else D.add(k);if(0===(p.mode&2)){p.effectTag|=64;g.effectTag&=-2981;if(1===g.tag)if(null===g.alternate)g.tag=17;else {var y=wg(1073741823,null);y.tag=2;xg(g,y);}g.expirationTime=1073741823;
	break a}h=void 0;g=b;var A=e.pingCache;null===A?(A=e.pingCache=new Wi,h=new Set,A.set(k,h)):(h=A.get(k),void 0===h&&(h=new Set,A.set(k,h)));if(!h.has(g)){h.add(g);var q=Oj.bind(null,e,k,g);k.then(q,q);}p.effectTag|=4096;p.expirationTime=b;break a}p=p.return;}while(null!==p);h=Error((pb(g.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+qb(g));}S$1!==
	jj&&(S$1=ij);h=Ai(h,g);p=f;do{switch(p.tag){case 3:k=h;p.effectTag|=4096;p.expirationTime=b;var B=Xi(p,k,b);yg(p,B);break a;case 1:k=h;var w=p.type,ub=p.stateNode;if(0===(p.effectTag&64)&&("function"===typeof w.getDerivedStateFromError||null!==ub&&"function"===typeof ub.componentDidCatch&&(null===aj||!aj.has(ub)))){p.effectTag|=4096;p.expirationTime=b;var vb=$i(p,k,b);yg(p,vb);break a}}p=p.return;}while(null!==p)}X$1=Pj(X$1);}catch(Xc){b=Xc;continue}break}while(1)}
	function Fj(){var a=cj.current;cj.current=sh;return null===a?sh:a}function Ag(a,b){a<lj&&2<a&&(lj=a);null!==b&&a<mj&&2<a&&(mj=a,nj=b);}function Bg(a){a>wi&&(wi=a);}function Kj(){for(;null!==X$1;)X$1=Qj(X$1);}function Gj(){for(;null!==X$1&&!Uf();)X$1=Qj(X$1);}function Qj(a){var b=Rj(a.alternate,a,U$1);a.memoizedProps=a.pendingProps;null===b&&(b=Pj(a));dj.current=null;return b}
	function Pj(a){X$1=a;do{var b=X$1.alternate;a=X$1.return;if(0===(X$1.effectTag&2048)){b=si(b,X$1,U$1);if(1===U$1||1!==X$1.childExpirationTime){for(var c=0,d=X$1.child;null!==d;){var e=d.expirationTime,f=d.childExpirationTime;e>c&&(c=e);f>c&&(c=f);d=d.sibling;}X$1.childExpirationTime=c;}if(null!==b)return b;null!==a&&0===(a.effectTag&2048)&&(null===a.firstEffect&&(a.firstEffect=X$1.firstEffect),null!==X$1.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=X$1.firstEffect),a.lastEffect=X$1.lastEffect),1<X$1.effectTag&&(null!==
	a.lastEffect?a.lastEffect.nextEffect=X$1:a.firstEffect=X$1,a.lastEffect=X$1));}else {b=zi(X$1);if(null!==b)return b.effectTag&=2047,b;null!==a&&(a.firstEffect=a.lastEffect=null,a.effectTag|=2048);}b=X$1.sibling;if(null!==b)return b;X$1=a;}while(null!==X$1);S$1===ti&&(S$1=jj);return null}function Ij(a){var b=a.expirationTime;a=a.childExpirationTime;return b>a?b:a}function Jj(a){var b=ag();cg(99,Sj.bind(null,a,b));return null}
	function Sj(a,b){do Dj();while(null!==rj);if((W&(fj|gj))!==V$1)throw Error(u(327));var c=a.finishedWork,d=a.finishedExpirationTime;if(null===c)return null;a.finishedWork=null;a.finishedExpirationTime=0;if(c===a.current)throw Error(u(177));a.callbackNode=null;a.callbackExpirationTime=0;a.callbackPriority=90;a.nextKnownPendingLevel=0;var e=Ij(c);a.firstPendingTime=e;d<=a.lastSuspendedTime?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:d<=a.firstSuspendedTime&&(a.firstSuspendedTime=
	d-1);d<=a.lastPingedTime&&(a.lastPingedTime=0);d<=a.lastExpiredTime&&(a.lastExpiredTime=0);a===T$1&&(X$1=T$1=null,U$1=0);1<c.effectTag?null!==c.lastEffect?(c.lastEffect.nextEffect=c,e=c.firstEffect):e=c:e=c.firstEffect;if(null!==e){var f=W;W|=gj;dj.current=null;Dd=fd;var g=xd();if(yd(g)){if("selectionStart"in g)var h={start:g.selectionStart,end:g.selectionEnd};else a:{h=(h=g.ownerDocument)&&h.defaultView||window;var k=h.getSelection&&h.getSelection();if(k&&0!==k.rangeCount){h=k.anchorNode;var l=k.anchorOffset,
	m=k.focusNode;k=k.focusOffset;try{h.nodeType,m.nodeType;}catch(wb){h=null;break a}var p=0,x=-1,z=-1,ca=0,D=0,t=g,y=null;b:for(;;){for(var A;;){t!==h||0!==l&&3!==t.nodeType||(x=p+l);t!==m||0!==k&&3!==t.nodeType||(z=p+k);3===t.nodeType&&(p+=t.nodeValue.length);if(null===(A=t.firstChild))break;y=t;t=A;}for(;;){if(t===g)break b;y===h&&++ca===l&&(x=p);y===m&&++D===k&&(z=p);if(null!==(A=t.nextSibling))break;t=y;y=t.parentNode;}t=A;}h=-1===x||-1===z?null:{start:x,end:z};}else h=null;}h=h||{start:0,end:0};}else h=
	null;Ed={activeElementDetached:null,focusedElem:g,selectionRange:h};fd=!1;Y=e;do try{Tj();}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect;}while(null!==Y);Y=e;do try{for(g=a,h=b;null!==Y;){var q=Y.effectTag;q&16&&Rb(Y.stateNode,"");if(q&128){var B=Y.alternate;if(null!==B){var w=B.ref;null!==w&&("function"===typeof w?w(null):w.current=null);}}switch(q&1038){case 2:Pi(Y);Y.effectTag&=-3;break;case 6:Pi(Y);Y.effectTag&=-3;Si(Y.alternate,Y);break;case 1024:Y.effectTag&=-1025;break;case 1028:Y.effectTag&=
	-1025;Si(Y.alternate,Y);break;case 4:Si(Y.alternate,Y);break;case 8:l=Y,Mi(g,l,h),Ni(l);}Y=Y.nextEffect;}}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect;}while(null!==Y);w=Ed;B=xd();q=w.focusedElem;h=w.selectionRange;if(B!==q&&q&&q.ownerDocument&&wd(q.ownerDocument.documentElement,q)){null!==h&&yd(q)&&(B=h.start,w=h.end,void 0===w&&(w=B),"selectionStart"in q?(q.selectionStart=B,q.selectionEnd=Math.min(w,q.value.length)):(w=(B=q.ownerDocument||document)&&B.defaultView||window,w.getSelection&&
	(w=w.getSelection(),l=q.textContent.length,g=Math.min(h.start,l),h=void 0===h.end?g:Math.min(h.end,l),!w.extend&&g>h&&(l=h,h=g,g=l),l=vd(q,g),m=vd(q,h),l&&m&&(1!==w.rangeCount||w.anchorNode!==l.node||w.anchorOffset!==l.offset||w.focusNode!==m.node||w.focusOffset!==m.offset)&&(B=B.createRange(),B.setStart(l.node,l.offset),w.removeAllRanges(),g>h?(w.addRange(B),w.extend(m.node,m.offset)):(B.setEnd(m.node,m.offset),w.addRange(B))))));B=[];for(w=q;w=w.parentNode;)1===w.nodeType&&B.push({element:w,left:w.scrollLeft,
	top:w.scrollTop});"function"===typeof q.focus&&q.focus();for(q=0;q<B.length;q++)w=B[q],w.element.scrollLeft=w.left,w.element.scrollTop=w.top;}fd=!!Dd;Ed=Dd=null;a.current=c;Y=e;do try{for(q=a;null!==Y;){var ub=Y.effectTag;ub&36&&Ji(q,Y.alternate,Y);if(ub&128){B=void 0;var vb=Y.ref;if(null!==vb){var Xc=Y.stateNode;switch(Y.tag){case 5:B=Xc;break;default:B=Xc;}"function"===typeof vb?vb(B):vb.current=B;}}Y=Y.nextEffect;}}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect;}while(null!==Y);Y=
	null;Vf();W=f;}else a.current=c;if(qj)qj=!1,rj=a,sj=b;else for(Y=e;null!==Y;)b=Y.nextEffect,Y.nextEffect=null,Y=b;b=a.firstPendingTime;0===b&&(aj=null);1073741823===b?a===vj?uj++:(uj=0,vj=a):uj=0;"function"===typeof Uj&&Uj(c.stateNode,d);Z$1(a);if(Yi)throw Yi=!1,a=Zi,Zi=null,a;if((W&ej)!==V$1)return null;gg();return null}function Tj(){for(;null!==Y;){var a=Y.effectTag;0!==(a&256)&&Gi(Y.alternate,Y);0===(a&512)||qj||(qj=!0,dg(97,function(){Dj();return null}));Y=Y.nextEffect;}}
	function Dj(){if(90!==sj){var a=97<sj?97:sj;sj=90;return cg(a,Vj)}}function Vj(){if(null===rj)return !1;var a=rj;rj=null;if((W&(fj|gj))!==V$1)throw Error(u(331));var b=W;W|=gj;for(a=a.current.firstEffect;null!==a;){try{var c=a;if(0!==(c.effectTag&512))switch(c.tag){case 0:case 11:case 15:case 22:Hi(5,c),Ii(5,c);}}catch(d){if(null===a)throw Error(u(330));Ei(a,d);}c=a.nextEffect;a.nextEffect=null;a=c;}W=b;gg();return !0}
	function Wj(a,b,c){b=Ai(c,b);b=Xi(a,b,1073741823);xg(a,b);a=xj(a,1073741823);null!==a&&Z$1(a);}function Ei(a,b){if(3===a.tag)Wj(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){Wj(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===aj||!aj.has(d))){a=Ai(b,a);a=$i(c,a,1073741823);xg(c,a);c=xj(c,1073741823);null!==c&&Z$1(c);break}}c=c.return;}}
	function Oj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);T$1===a&&U$1===c?S$1===vi||S$1===ui&&1073741823===lj&&$f()-Ti<pj?Ej(a,U$1):oj=!0:Aj(a,c)&&(b=a.lastPingedTime,0!==b&&b<c||(a.lastPingedTime=c,Z$1(a)));}function Vi(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=Gg(),b=Hg(b,a,null));a=xj(a,b);null!==a&&Z$1(a);}var Rj;
	Rj=function(a,b,c){var d=b.expirationTime;if(null!==a){var e=b.pendingProps;if(a.memoizedProps!==e||K$1.current)rg=!0;else {if(d<c){rg=!1;switch(b.tag){case 3:hi(b);Xh();break;case 5:fh(b);if(b.mode&4&&1!==c&&e.hidden)return b.expirationTime=b.childExpirationTime=1,null;break;case 1:L$1(b.type)&&Gf(b);break;case 4:dh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;e=b.type._context;I$1(jg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;
	if(0!==d&&d>=c)return ji(a,b,c);I$1(M$1,M$1.current&1);b=$h(a,b,c);return null!==b?b.sibling:null}I$1(M$1,M$1.current&1);break;case 19:d=b.childExpirationTime>=c;if(0!==(a.effectTag&64)){if(d)return mi(a,b,c);b.effectTag|=64;}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null);I$1(M$1,M$1.current);if(!d)return null}return $h(a,b,c)}rg=!1;}}else rg=!1;b.expirationTime=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=Cf(b,J$1.current);qg(b,c);e=oh(null,
	b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(L$1(d)){var f=!0;Gf(b);}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;ug(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Fg(b,d,g,a);e.updater=Jg;b.stateNode=e;e._reactInternalFiber=b;Ng(b,d,a,c);b=gi(null,b,d,!0,f,c);}else b.tag=0,R$1(null,b,e,c),b=b.child;return b;case 16:a:{e=b.elementType;null!==a&&(a.alternate=
	null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;ob(e);if(1!==e._status)throw e._result;e=e._result;b.type=e;f=b.tag=Xj(e);a=ig(e,a);switch(f){case 0:b=di(null,b,e,a,c);break a;case 1:b=fi(null,b,e,a,c);break a;case 11:b=Zh(null,b,e,a,c);break a;case 14:b=ai(null,b,e,ig(e.type,a),d,c);break a}throw Error(u(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),di(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),fi(a,b,d,e,c);
	case 3:hi(b);d=b.updateQueue;if(null===a||null===d)throw Error(u(282));d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;vg(a,b);zg(b,d,null,c);d=b.memoizedState.element;if(d===e)Xh(),b=$h(a,b,c);else {if(e=b.stateNode.hydrate)Ph=Jd(b.stateNode.containerInfo.firstChild),Oh=b,e=Qh=!0;if(e)for(c=Yg(b,null,d,c),b.child=c;c;)c.effectTag=c.effectTag&-3|1024,c=c.sibling;else R$1(a,b,d,c),Xh();b=b.child;}return b;case 5:return fh(b),null===a&&Uh(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:
	null,g=e.children,Gd(d,e)?g=null:null!==f&&Gd(d,f)&&(b.effectTag|=16),ei(a,b),b.mode&4&&1!==c&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):(R$1(a,b,g,c),b=b.child),b;case 6:return null===a&&Uh(b),null;case 13:return ji(a,b,c);case 4:return dh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Xg(b,null,d,c):R$1(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),Zh(a,b,d,e,c);case 7:return R$1(a,b,b.pendingProps,c),b.child;case 8:return R$1(a,
	b,b.pendingProps.children,c),b.child;case 12:return R$1(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I$1(jg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=$e(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!K$1.current){b=$h(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==
	k){g=h.child;for(var l=k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=wg(c,null),l.tag=2,xg(h,l));h.expirationTime<c&&(h.expirationTime=c);l=h.alternate;null!==l&&l.expirationTime<c&&(l.expirationTime=c);pg(h.return,c);k.expirationTime<c&&(k.expirationTime=c);break}l=l.next;}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return;}h=
	g;}R$1(a,b,e.children,c);b=b.child;}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,qg(b,c),e=sg(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,R$1(a,b,d,c),b.child;case 14:return e=b.type,f=ig(e,b.pendingProps),f=ig(e.type,f),ai(a,b,e,f,d,c);case 15:return ci(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,L$1(d)?(a=!0,Gf(b)):a=!1,qg(b,c),Lg(b,d,e),Ng(b,d,e,c),gi(null,
	b,d,!0,a,c);case 19:return mi(a,b,c)}throw Error(u(156,b.tag));};var Uj=null,Li=null;function Yj(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return !1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return !0;try{var c=b.inject(a);Uj=function(a){try{b.onCommitFiberRoot(c,a,void 0,64===(a.current.effectTag&64));}catch(e){}};Li=function(a){try{b.onCommitFiberUnmount(c,a);}catch(e){}};}catch(d){}return !0}
	function Zj(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null;}function Sh(a,b,c,d){return new Zj(a,b,c,d)}
	function bi(a){a=a.prototype;return !(!a||!a.isReactComponent)}function Xj(a){if("function"===typeof a)return bi(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===gb)return 11;if(a===jb)return 14}return 2}
	function Sg(a,b){var c=a.alternate;null===c?(c=Sh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{expirationTime:b.expirationTime,
	firstContext:b.firstContext,responders:b.responders};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
	function Ug(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)bi(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ab:return Wg(c.children,e,f,b);case fb:g=8;e|=7;break;case bb:g=8;e|=1;break;case cb:return a=Sh(12,c,b,e|8),a.elementType=cb,a.type=cb,a.expirationTime=f,a;case hb:return a=Sh(13,c,b,e),a.type=hb,a.elementType=hb,a.expirationTime=f,a;case ib:return a=Sh(19,c,b,e),a.elementType=ib,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case db:g=
	10;break a;case eb:g=9;break a;case gb:g=11;break a;case jb:g=14;break a;case kb:g=16;d=null;break a;case lb:g=22;break a}throw Error(u(130,null==a?a:typeof a,""));}b=Sh(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function Wg(a,b,c,d){a=Sh(7,a,d,b);a.expirationTime=c;return a}function Tg(a,b,c){a=Sh(6,a,null,b);a.expirationTime=c;return a}
	function Vg(a,b,c){b=Sh(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
	function ak(a,b,c){this.tag=b;this.current=null;this.containerInfo=a;this.pingCache=this.pendingChildren=null;this.finishedExpirationTime=0;this.finishedWork=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=90;this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0;}
	function Aj(a,b){var c=a.firstSuspendedTime;a=a.lastSuspendedTime;return 0!==c&&c>=b&&a<=b}function xi(a,b){var c=a.firstSuspendedTime,d=a.lastSuspendedTime;c<b&&(a.firstSuspendedTime=b);if(d>b||0===c)a.lastSuspendedTime=b;b<=a.lastPingedTime&&(a.lastPingedTime=0);b<=a.lastExpiredTime&&(a.lastExpiredTime=0);}
	function yi(a,b){b>a.firstPendingTime&&(a.firstPendingTime=b);var c=a.firstSuspendedTime;0!==c&&(b>=c?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:b>=a.lastSuspendedTime&&(a.lastSuspendedTime=b+1),b>a.nextKnownPendingLevel&&(a.nextKnownPendingLevel=b));}function Cj(a,b){var c=a.lastExpiredTime;if(0===c||c>b)a.lastExpiredTime=b;}
	function bk(a,b,c,d){var e=b.current,f=Gg(),g=Dg.suspense;f=Hg(f,e,g);a:if(c){c=c._reactInternalFiber;b:{if(dc(c)!==c||1!==c.tag)throw Error(u(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(L$1(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return;}while(null!==h);throw Error(u(171));}if(1===c.tag){var k=c.type;if(L$1(k)){c=Ff(c,k,h);break a}}c=h;}else c=Af;null===b.context?b.context=c:b.pendingContext=c;b=wg(f,g);b.payload={element:a};d=void 0===
	d?null:d;null!==d&&(b.callback=d);xg(e,b);Ig(e,f);return f}function ck(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function dk(a,b){a=a.memoizedState;null!==a&&null!==a.dehydrated&&a.retryTime<b&&(a.retryTime=b);}function ek(a,b){dk(a,b);(a=a.alternate)&&dk(a,b);}
	function fk(a,b,c){c=null!=c&&!0===c.hydrate;var d=new ak(a,b,c),e=Sh(3,null,null,2===b?7:1===b?3:0);d.current=e;e.stateNode=d;ug(e);a[Od]=d.current;c&&0!==b&&Jc(a,9===a.nodeType?a:a.ownerDocument);this._internalRoot=d;}fk.prototype.render=function(a){bk(a,this._internalRoot,null,null);};fk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;bk(null,a,null,function(){b[Od]=null;});};
	function gk(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function hk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new fk(a,0,b?{hydrate:!0}:void 0)}
	function ik(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=ck(g);h.call(a);};}bk(b,g,a,e);}else {f=c._reactRootContainer=hk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=ck(g);k.call(a);};}Nj(function(){bk(b,g,a,e);});}return ck(g)}function jk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return {$$typeof:$a,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
	wc=function(a){if(13===a.tag){var b=hg(Gg(),150,100);Ig(a,b);ek(a,b);}};xc=function(a){13===a.tag&&(Ig(a,3),ek(a,3));};yc=function(a){if(13===a.tag){var b=Gg();b=Hg(b,a,null);Ig(a,b);ek(a,b);}};
	za=function(a,b,c){switch(b){case "input":Cb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Qd(d);if(!e)throw Error(u(90));yb(d);Cb(d,e);}}}break;case "textarea":Kb(a,c);break;case "select":b=c.value,null!=b&&Hb(a,!!c.multiple,b,!1);}};Fa=Mj;
	Ga=function(a,b,c,d,e){var f=W;W|=4;try{return cg(98,a.bind(null,b,c,d,e))}finally{W=f,W===V$1&&gg();}};Ha=function(){(W&(1|fj|gj))===V$1&&(Lj(),Dj());};Ia=function(a,b){var c=W;W|=2;try{return a(b)}finally{W=c,W===V$1&&gg();}};function kk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!gk(b))throw Error(u(200));return jk(a,b,null,c)}var lk={Events:[Nc,Pd,Qd,xa,ta,Xd,function(a){jc(a,Wd);},Da,Ea,id,mc,Dj,{current:!1}]};
	(function(a){var b=a.findFiberByHostInstance;return Yj(objectAssign({},a,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wa.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=hc(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:tc,bundleType:0,version:"16.14.0",
	rendererPackageName:"react-dom"});var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lk;var createPortal=kk;var findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;if(void 0===b){if("function"===typeof a.render)throw Error(u(188));throw Error(u(268,Object.keys(a)));}a=hc(b);a=null===a?null:a.stateNode;return a};
	var flushSync=function(a,b){if((W&(fj|gj))!==V$1)throw Error(u(187));var c=W;W|=1;try{return cg(99,a.bind(null,b))}finally{W=c,gg();}};var hydrate=function(a,b,c){if(!gk(b))throw Error(u(200));return ik(null,a,b,!0,c)};var render=function(a,b,c){if(!gk(b))throw Error(u(200));return ik(null,a,b,!1,c)};
	var unmountComponentAtNode=function(a){if(!gk(a))throw Error(u(40));return a._reactRootContainer?(Nj(function(){ik(null,null,a,!1,function(){a._reactRootContainer=null;a[Od]=null;});}),!0):!1};var unstable_batchedUpdates=Mj;var unstable_createPortal=function(a,b){return kk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
	var unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!gk(c))throw Error(u(200));if(null==a||void 0===a._reactInternalFiber)throw Error(u(38));return ik(a,b,c,!1,d)};var version$1="16.14.0";

	var reactDom_production_min = {
		__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
		createPortal: createPortal,
		findDOMNode: findDOMNode,
		flushSync: flushSync,
		hydrate: hydrate,
		render: render,
		unmountComponentAtNode: unmountComponentAtNode,
		unstable_batchedUpdates: unstable_batchedUpdates,
		unstable_createPortal: unstable_createPortal,
		unstable_renderSubtreeIntoContainer: unstable_renderSubtreeIntoContainer,
		version: version$1
	};

	/** @license React v0.19.1
	 * scheduler-tracing.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var b$1=0;var __interactionsRef=null;var __subscriberRef=null;var unstable_clear=function(a){return a()};var unstable_getCurrent=function(){return null};var unstable_getThreadID=function(){return ++b$1};var unstable_subscribe=function(){};var unstable_trace=function(a,d,c){return c()};var unstable_unsubscribe=function(){};var unstable_wrap=function(a){return a};

	var schedulerTracing_production_min = {
		__interactionsRef: __interactionsRef,
		__subscriberRef: __subscriberRef,
		unstable_clear: unstable_clear,
		unstable_getCurrent: unstable_getCurrent,
		unstable_getThreadID: unstable_getThreadID,
		unstable_subscribe: unstable_subscribe,
		unstable_trace: unstable_trace,
		unstable_unsubscribe: unstable_unsubscribe,
		unstable_wrap: unstable_wrap
	};

	var schedulerTracing_development = createCommonjsModule(function (module, exports) {
	});
	schedulerTracing_development.__interactionsRef;
	schedulerTracing_development.__subscriberRef;
	schedulerTracing_development.unstable_clear;
	schedulerTracing_development.unstable_getCurrent;
	schedulerTracing_development.unstable_getThreadID;
	schedulerTracing_development.unstable_subscribe;
	schedulerTracing_development.unstable_trace;
	schedulerTracing_development.unstable_unsubscribe;
	schedulerTracing_development.unstable_wrap;

	createCommonjsModule(function (module) {

	{
	  module.exports = schedulerTracing_production_min;
	}
	});

	var reactDom_development = createCommonjsModule(function (module, exports) {
	});
	reactDom_development.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
	reactDom_development.createPortal;
	reactDom_development.findDOMNode;
	reactDom_development.flushSync;
	reactDom_development.hydrate;
	reactDom_development.render;
	reactDom_development.unmountComponentAtNode;
	reactDom_development.unstable_batchedUpdates;
	reactDom_development.unstable_createPortal;
	reactDom_development.unstable_renderSubtreeIntoContainer;
	reactDom_development.version;

	var reactDom = createCommonjsModule(function (module) {

	function checkDCE() {
	  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	  if (
	    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
	    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
	  ) {
	    return;
	  }
	  try {
	    // Verify that the code above has been dead code eliminated (DCE'd).
	    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
	  } catch (err) {
	    // DevTools shouldn't crash React, no matter what.
	    // We should still report in case we break this code.
	    console.error(err);
	  }
	}

	{
	  // DCE check should happen before ReactDOM bundle executes so that
	  // DevTools can report bad minification during injection.
	  checkDCE();
	  module.exports = reactDom_production_min;
	}
	});
	reactDom.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
	reactDom.createPortal;
	reactDom.findDOMNode;
	reactDom.flushSync;
	reactDom.hydrate;
	var reactDom_6 = reactDom.render;
	reactDom.unmountComponentAtNode;
	reactDom.unstable_batchedUpdates;
	reactDom.unstable_createPortal;
	reactDom.unstable_renderSubtreeIntoContainer;
	reactDom.version;

	/** @license React v16.13.1
	 * react-is.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var b="function"===typeof Symbol&&Symbol.for,c$1=b?Symbol.for("react.element"):60103,d$1=b?Symbol.for("react.portal"):60106,e$1=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g$1=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k$1=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m$1=b?Symbol.for("react.concurrent_mode"):60111,n$1=b?Symbol.for("react.forward_ref"):60112,p$1=b?Symbol.for("react.suspense"):60113,q$1=b?
	Symbol.for("react.suspense_list"):60120,r$1=b?Symbol.for("react.memo"):60115,t$2=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x$1=b?Symbol.for("react.responder"):60118,y$1=b?Symbol.for("react.scope"):60119;
	function z$1(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c$1:switch(a=a.type,a){case l:case m$1:case e$1:case g$1:case f:case p$1:return a;default:switch(a=a&&a.$$typeof,a){case k$1:case n$1:case t$2:case r$1:case h:return a;default:return u}}case d$1:return u}}}function A$1(a){return z$1(a)===m$1}var AsyncMode=l;var ConcurrentMode=m$1;var ContextConsumer=k$1;var ContextProvider=h;var Element$1=c$1;var ForwardRef=n$1;var Fragment=e$1;var Lazy=t$2;var Memo=r$1;var Portal=d$1;
	var Profiler=g$1;var StrictMode=f;var Suspense=p$1;var isAsyncMode=function(a){return A$1(a)||z$1(a)===l};var isConcurrentMode=A$1;var isContextConsumer=function(a){return z$1(a)===k$1};var isContextProvider=function(a){return z$1(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c$1};var isForwardRef=function(a){return z$1(a)===n$1};var isFragment=function(a){return z$1(a)===e$1};var isLazy=function(a){return z$1(a)===t$2};
	var isMemo=function(a){return z$1(a)===r$1};var isPortal=function(a){return z$1(a)===d$1};var isProfiler=function(a){return z$1(a)===g$1};var isStrictMode=function(a){return z$1(a)===f};var isSuspense=function(a){return z$1(a)===p$1};
	var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e$1||a===m$1||a===g$1||a===f||a===p$1||a===q$1||"object"===typeof a&&null!==a&&(a.$$typeof===t$2||a.$$typeof===r$1||a.$$typeof===h||a.$$typeof===k$1||a.$$typeof===n$1||a.$$typeof===w||a.$$typeof===x$1||a.$$typeof===y$1||a.$$typeof===v)};var typeOf=z$1;

	var reactIs_production_min = {
		AsyncMode: AsyncMode,
		ConcurrentMode: ConcurrentMode,
		ContextConsumer: ContextConsumer,
		ContextProvider: ContextProvider,
		Element: Element$1,
		ForwardRef: ForwardRef,
		Fragment: Fragment,
		Lazy: Lazy,
		Memo: Memo,
		Portal: Portal,
		Profiler: Profiler,
		StrictMode: StrictMode,
		Suspense: Suspense,
		isAsyncMode: isAsyncMode,
		isConcurrentMode: isConcurrentMode,
		isContextConsumer: isContextConsumer,
		isContextProvider: isContextProvider,
		isElement: isElement,
		isForwardRef: isForwardRef,
		isFragment: isFragment,
		isLazy: isLazy,
		isMemo: isMemo,
		isPortal: isPortal,
		isProfiler: isProfiler,
		isStrictMode: isStrictMode,
		isSuspense: isSuspense,
		isValidElementType: isValidElementType,
		typeOf: typeOf
	};

	var reactIs_development = createCommonjsModule(function (module, exports) {
	});
	reactIs_development.AsyncMode;
	reactIs_development.ConcurrentMode;
	reactIs_development.ContextConsumer;
	reactIs_development.ContextProvider;
	reactIs_development.Element;
	reactIs_development.ForwardRef;
	reactIs_development.Fragment;
	reactIs_development.Lazy;
	reactIs_development.Memo;
	reactIs_development.Portal;
	reactIs_development.Profiler;
	reactIs_development.StrictMode;
	reactIs_development.Suspense;
	reactIs_development.isAsyncMode;
	reactIs_development.isConcurrentMode;
	reactIs_development.isContextConsumer;
	reactIs_development.isContextProvider;
	reactIs_development.isElement;
	reactIs_development.isForwardRef;
	reactIs_development.isFragment;
	reactIs_development.isLazy;
	reactIs_development.isMemo;
	reactIs_development.isPortal;
	reactIs_development.isProfiler;
	reactIs_development.isStrictMode;
	reactIs_development.isSuspense;
	reactIs_development.isValidElementType;
	reactIs_development.typeOf;

	createCommonjsModule(function (module) {

	{
	  module.exports = reactIs_production_min;
	}
	});

	Function.call.bind(Object.prototype.hasOwnProperty);

	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	var factoryWithThrowingShims = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret_1) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  }  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,

	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };

	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	var propTypes = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	{
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = factoryWithThrowingShims();
	}
	});

	var shallowEqual_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = shallowEqual;
	function shallowEqual(objA, objB) {
	    if (objA === objB) {
	        return true;
	    }

	    var keysA = Object.keys(objA);
	    var keysB = Object.keys(objB);

	    if (keysA.length !== keysB.length) {
	        return false;
	    }

	    // Test for A's keys different from B.
	    var hasOwn = Object.prototype.hasOwnProperty;
	    for (var i = 0; i < keysA.length; i++) {
	        if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	            return false;
	        }
	    }

	    return true;
	}
	});

	unwrapExports(shallowEqual_1);

	var global$1 = (typeof global !== "undefined" ? global :
	            typeof self !== "undefined" ? self :
	            typeof window !== "undefined" ? window : {});

	// shim for using process in browser
	// based off https://github.com/defunctzombie/node-process/blob/master/browser.js

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	var cachedSetTimeout = defaultSetTimout;
	var cachedClearTimeout = defaultClearTimeout;
	if (typeof global$1.setTimeout === 'function') {
	    cachedSetTimeout = setTimeout;
	}
	if (typeof global$1.clearTimeout === 'function') {
	    cachedClearTimeout = clearTimeout;
	}

	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	function nextTick(fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	}
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	var title = 'browser';
	var platform = 'browser';
	var browser = true;
	var env = {};
	var argv = [];
	var version = ''; // empty string to avoid regexp issues
	var versions = {};
	var release = {};
	var config = {};

	function noop() {}

	var on = noop;
	var addListener = noop;
	var once = noop;
	var off = noop;
	var removeListener = noop;
	var removeAllListeners = noop;
	var emit = noop;

	function binding(name) {
	    throw new Error('process.binding is not supported');
	}

	function cwd () { return '/' }
	function chdir (dir) {
	    throw new Error('process.chdir is not supported');
	}function umask() { return 0; }

	// from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
	var performance = global$1.performance || {};
	var performanceNow =
	  performance.now        ||
	  performance.mozNow     ||
	  performance.msNow      ||
	  performance.oNow       ||
	  performance.webkitNow  ||
	  function(){ return (new Date()).getTime() };

	// generate timestamp or delta
	// see http://nodejs.org/api/process.html#process_process_hrtime
	function hrtime(previousTimestamp){
	  var clocktime = performanceNow.call(performance)*1e-3;
	  var seconds = Math.floor(clocktime);
	  var nanoseconds = Math.floor((clocktime%1)*1e9);
	  if (previousTimestamp) {
	    seconds = seconds - previousTimestamp[0];
	    nanoseconds = nanoseconds - previousTimestamp[1];
	    if (nanoseconds<0) {
	      seconds--;
	      nanoseconds += 1e9;
	    }
	  }
	  return [seconds,nanoseconds]
	}

	var startTime = new Date();
	function uptime() {
	  var currentTime = new Date();
	  var dif = currentTime - startTime;
	  return dif / 1000;
	}

	var _process = {
	  nextTick: nextTick,
	  title: title,
	  browser: browser,
	  env: env,
	  argv: argv,
	  version: version,
	  versions: versions,
	  on: on,
	  addListener: addListener,
	  once: once,
	  off: off,
	  removeListener: removeListener,
	  removeAllListeners: removeAllListeners,
	  emit: emit,
	  binding: binding,
	  cwd: cwd,
	  chdir: chdir,
	  umask: umask,
	  hrtime: hrtime,
	  platform: platform,
	  release: release,
	  config: config,
	  uptime: uptime
	};

	var series_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = series;



	var _process2 = _interopRequireDefault(_process);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function series(tasks, cb) {
	    var results = [];
	    var current = 0;
	    var isSync = true;

	    function done(err) {
	        function end() {
	            if (cb) cb(err, results);
	        }
	        if (isSync) _process2.default.nextTick(end);else end();
	    }

	    function each(err, result) {
	        results.push(result);
	        if (++current >= tasks.length || err) done(err);else tasks[current](each);
	    }

	    if (tasks.length > 0) tasks[0](each);else done(null);

	    isSync = false;
	} /**
	   * Run the functions in the tasks array in series, each one running once the previous function has completed.
	   * If any functions in the series pass an error to its callback, no more functions are run,
	   * and callback is immediately called with the value of the error. Otherwise, callback receives an array of results
	   * when tasks have completed.
	   * Taken from https://github.com/feross/run-series
	   *
	   * @params {Array} tasks An array containing functions to run, each function is passed a callback(err, result) which it must call on completion with an error err (which can be null) and an optional result value.
	   * @params {Function} callback(err, results) - An optional callback to run once all the functions have completed. This function gets a results array containing all the result arguments passed to the task callbacks.
	   */
	});

	unwrapExports(series_1);

	var whilst_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = whilst;
	var noop = function noop() {};

	/**
	 * Repeatedly call fn, while test returns true. Calls callback when stopped, or an error occurs.
	 *
	 * @param {Function} test Synchronous truth test to perform before each execution of fn.
	 * @param {Function} fn A function which is called each time test passes. The function is passed a callback(err), which must be called once it has completed with an optional err argument.
	 * @param {Function} callback A callback which is called after the test fails and repeated execution of fn has stopped.
	 */

	function whilst(test, iterator) {
	    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : noop;

	    if (test()) {
	        iterator(function next(err) {
	            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                args[_key - 1] = arguments[_key];
	            }

	            if (err) {
	                callback(err);
	            } else if (test.apply(this, args)) {
	                iterator(next);
	            } else {
	                callback(null);
	            }
	        });
	    } else {
	        callback(null);
	    }
	}
	});

	unwrapExports(whilst_1);

	var throttle_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = throttle;
	/**
	 * Returns a new function that, when invoked, invokes `func` at most once per `wait` milliseconds.
	 * Taken from https://github.com/component/throttle v1.0.0
	 *
	 * @param {Function} func Function to wrap.
	 * @param {Number} wait Number of milliseconds that must elapse between `func` invocations.
	 * @return {Function} A new function that wraps the `func` function passed in.
	 */

	function throttle(func, wait) {
	    var ctx = void 0;
	    var args = void 0;
	    var rtn = void 0;
	    var timeoutID = void 0;
	    var last = 0;

	    function call() {
	        timeoutID = 0;
	        last = +new Date();
	        rtn = func.apply(ctx, args);
	        ctx = null;
	        args = null;
	    }

	    return function throttled() {
	        ctx = this;
	        args = arguments;
	        var delta = new Date() - last;
	        if (!timeoutID) {
	            if (delta >= wait) call();else timeoutID = setTimeout(call, wait - delta);
	        }
	        return rtn;
	    };
	}
	});

	unwrapExports(throttle_1);

	var uniqueId_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = uniqueId;
	var uid = 0;

	function uniqueId() {
	    return uid++;
	}
	});

	unwrapExports(uniqueId_1);

	var innerSize = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.innerHeight = innerHeight;
	exports.innerWidth = innerWidth;
	// Calculate height without padding.
	function innerHeight(el) {
	  var style = window.getComputedStyle(el, null);
	  // Hidden iframe in Firefox returns null, https://github.com/malte-wessel/react-textfit/pull/34
	  if (!style) return el.clientHeight;
	  return el.clientHeight - parseInt(style.getPropertyValue("padding-top"), 10) - parseInt(style.getPropertyValue("padding-bottom"), 10);
	}

	// Calculate width without padding.
	function innerWidth(el) {
	  var style = window.getComputedStyle(el, null);
	  // Hidden iframe in Firefox returns null, https://github.com/malte-wessel/react-textfit/pull/34
	  if (!style) return el.clientWidth;
	  return el.clientWidth - parseInt(style.getPropertyValue("padding-left"), 10) - parseInt(style.getPropertyValue("padding-right"), 10);
	}
	});

	unwrapExports(innerSize);
	innerSize.innerHeight;
	innerSize.innerWidth;

	var Textfit$1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



	var _react2 = _interopRequireDefault(react);



	var _propTypes2 = _interopRequireDefault(propTypes);



	var _shallowEqual2 = _interopRequireDefault(shallowEqual_1);



	var _series2 = _interopRequireDefault(series_1);



	var _whilst2 = _interopRequireDefault(whilst_1);



	var _throttle2 = _interopRequireDefault(throttle_1);



	var _uniqueId2 = _interopRequireDefault(uniqueId_1);



	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function assertElementFitsWidth(el, width) {
	    // -1: temporary bugfix, will be refactored soon
	    return el.scrollWidth - 1 <= width;
	}

	function assertElementFitsHeight(el, height) {
	    // -1: temporary bugfix, will be refactored soon
	    return el.scrollHeight - 1 <= height;
	}

	function noop() {}

	var TextFit = function (_React$Component) {
	    _inherits(TextFit, _React$Component);

	    function TextFit(props) {
	        _classCallCheck(this, TextFit);

	        var _this = _possibleConstructorReturn(this, (TextFit.__proto__ || Object.getPrototypeOf(TextFit)).call(this, props));

	        _this.state = {
	            fontSize: null,
	            ready: false
	        };

	        _this.handleWindowResize = function () {
	            _this.process();
	        };

	        if ('perfectFit' in props) {
	            console.warn('TextFit property perfectFit has been removed.');
	        }

	        _this.handleWindowResize = (0, _throttle2.default)(_this.handleWindowResize, props.throttle);
	        return _this;
	    }

	    _createClass(TextFit, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var autoResize = this.props.autoResize;

	            if (autoResize) {
	                window.addEventListener('resize', this.handleWindowResize);
	            }
	            this.process();
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps) {
	            var ready = this.state.ready;

	            if (!ready) return;
	            if ((0, _shallowEqual2.default)(this.props, prevProps)) return;
	            this.process();
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            var autoResize = this.props.autoResize;

	            if (autoResize) {
	                window.removeEventListener('resize', this.handleWindowResize);
	            }
	            // Setting a new pid will cancel all running processes
	            this.pid = (0, _uniqueId2.default)();
	        }
	    }, {
	        key: 'process',
	        value: function process() {
	            var _this2 = this;

	            var _props = this.props,
	                min = _props.min,
	                max = _props.max,
	                mode = _props.mode,
	                forceSingleModeWidth = _props.forceSingleModeWidth,
	                onReady = _props.onReady;

	            var el = this._parent;
	            var wrapper = this._child;

	            var originalWidth = (0, innerSize.innerWidth)(el);
	            var originalHeight = (0, innerSize.innerHeight)(el);

	            if (originalHeight <= 0 || isNaN(originalHeight)) {
	                console.warn('Can not process element without height. Make sure the element is displayed and has a static height.');
	                return;
	            }

	            if (originalWidth <= 0 || isNaN(originalWidth)) {
	                console.warn('Can not process element without width. Make sure the element is displayed and has a static width.');
	                return;
	            }

	            var pid = (0, _uniqueId2.default)();
	            this.pid = pid;

	            var shouldCancelProcess = function shouldCancelProcess() {
	                return pid !== _this2.pid;
	            };

	            var testPrimary = mode === 'multi' ? function () {
	                return assertElementFitsHeight(wrapper, originalHeight);
	            } : function () {
	                return assertElementFitsWidth(wrapper, originalWidth);
	            };

	            var testSecondary = mode === 'multi' ? function () {
	                return assertElementFitsWidth(wrapper, originalWidth);
	            } : function () {
	                return assertElementFitsHeight(wrapper, originalHeight);
	            };

	            var mid = void 0;
	            var low = min;
	            var high = max;

	            this.setState({ ready: false });

	            (0, _series2.default)([
	            // Step 1:
	            // Binary search to fit the element's height (multi line) / width (single line)
	            function (stepCallback) {
	                return (0, _whilst2.default)(function () {
	                    return low <= high;
	                }, function (whilstCallback) {
	                    if (shouldCancelProcess()) return whilstCallback(true);
	                    mid = parseInt((low + high) / 2, 10);
	                    _this2.setState({ fontSize: mid }, function () {
	                        if (shouldCancelProcess()) return whilstCallback(true);
	                        if (testPrimary()) low = mid + 1;else high = mid - 1;
	                        return whilstCallback();
	                    });
	                }, stepCallback);
	            },
	            // Step 2:
	            // Binary search to fit the element's width (multi line) / height (single line)
	            // If mode is single and forceSingleModeWidth is true, skip this step
	            // in order to not fit the elements height and decrease the width
	            function (stepCallback) {
	                if (mode === 'single' && forceSingleModeWidth) return stepCallback();
	                if (testSecondary()) return stepCallback();
	                low = min;
	                high = mid;
	                return (0, _whilst2.default)(function () {
	                    return low < high;
	                }, function (whilstCallback) {
	                    if (shouldCancelProcess()) return whilstCallback(true);
	                    mid = parseInt((low + high) / 2, 10);
	                    _this2.setState({ fontSize: mid }, function () {
	                        if (pid !== _this2.pid) return whilstCallback(true);
	                        if (testSecondary()) low = mid + 1;else high = mid - 1;
	                        return whilstCallback();
	                    });
	                }, stepCallback);
	            },
	            // Step 3
	            // Limits
	            function (stepCallback) {
	                // We break the previous loop without updating mid for the final time,
	                // so we do it here:
	                mid = Math.min(low, high);

	                // Ensure we hit the user-supplied limits
	                mid = Math.max(mid, min);
	                mid = Math.min(mid, max);

	                // Sanity check:
	                mid = Math.max(mid, 0);

	                if (shouldCancelProcess()) return stepCallback(true);
	                _this2.setState({ fontSize: mid }, stepCallback);
	            }], function (err) {
	                // err will be true, if another process was triggered
	                if (err || shouldCancelProcess()) return;
	                _this2.setState({ ready: true }, function () {
	                    return onReady(mid);
	                });
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            var _props2 = this.props,
	                children = _props2.children,
	                text = _props2.text,
	                style = _props2.style;
	                _props2.min;
	                _props2.max;
	                var mode = _props2.mode;
	                _props2.forceWidth;
	                _props2.forceSingleModeWidth;
	                _props2.throttle;
	                _props2.autoResize;
	                _props2.onReady;
	                var props = _objectWithoutProperties(_props2, ['children', 'text', 'style', 'min', 'max', 'mode', 'forceWidth', 'forceSingleModeWidth', 'throttle', 'autoResize', 'onReady']);

	            var _state = this.state,
	                fontSize = _state.fontSize,
	                ready = _state.ready;

	            var finalStyle = _extends({}, style, {
	                fontSize: fontSize
	            });

	            var wrapperStyle = {
	                display: ready ? 'block' : 'inline-block'
	            };
	            if (mode === 'single') wrapperStyle.whiteSpace = 'nowrap';

	            return _react2.default.createElement(
	                'div',
	                _extends({ ref: function ref(c) {
	                        return _this3._parent = c;
	                    }, style: finalStyle }, props),
	                _react2.default.createElement(
	                    'div',
	                    { ref: function ref(c) {
	                            return _this3._child = c;
	                        }, style: wrapperStyle },
	                    text && typeof children === 'function' ? ready ? children(text) : text : children
	                )
	            );
	        }
	    }]);

	    return TextFit;
	}(_react2.default.Component);

	TextFit.propTypes = {
	    children: _propTypes2.default.node,
	    text: _propTypes2.default.string,
	    min: _propTypes2.default.number,
	    max: _propTypes2.default.number,
	    mode: _propTypes2.default.oneOf(['single', 'multi']),
	    forceSingleModeWidth: _propTypes2.default.bool,
	    throttle: _propTypes2.default.number,
	    onReady: _propTypes2.default.func
	};
	TextFit.defaultProps = {
	    min: 1,
	    max: 100,
	    mode: 'multi',
	    forceSingleModeWidth: true,
	    throttle: 50,
	    autoResize: true,
	    onReady: noop
	};
	exports.default = TextFit;
	});

	unwrapExports(Textfit$1);

	var lib = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Textfit = undefined;



	var _Textfit2 = _interopRequireDefault(Textfit$1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Textfit = _Textfit2.default;
	exports.default = _Textfit2.default;
	});

	var Textfit = unwrapExports(lib);
	lib.Textfit;

	// Number assertions
	function isNumber(value) {
	  return typeof value === "number";
	}

	function isArray(value) {
	  return Array.isArray(value);
	}

	function isFunction(value) {
	  return typeof value === "function";
	} // Generic assertions

	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type === "object" || type === "function") && !isArray(value);
	}

	function isString(value) {
	  return Object.prototype.toString.call(value) === "[object String]";
	}
	function isCssVar(value) {
	  return /^var\(--.+\)$/.test(value);
	} // Empty assertions

	var lodash_mergewith = createCommonjsModule(function (module, exports) {
	/**
	 * Lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800,
	    HOT_SPAN = 16;

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    asyncTag = '[object AsyncFunction]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    nullTag = '[object Null]',
	    objectTag = '[object Object]',
	    proxyTag = '[object Proxy]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    undefinedTag = '[object Undefined]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/** Detect free variable `exports`. */
	var freeExports = exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    // Use `util.types` for Node.js 10+.
	    var types = freeModule && freeModule.require && freeModule.require('util').types;

	    if (types) {
	      return types;
	    }

	    // Legacy `process.binding('util')` for Node.js < 10.
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	/** Used for built-in method references. */
	var arrayProto = Array.prototype,
	    funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    Symbol = root.Symbol,
	    Uint8Array = root.Uint8Array,
	    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
	    getPrototype = overArg(Object.getPrototypeOf, Object),
	    objectCreate = Object.create,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable,
	    splice = arrayProto.splice,
	    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
	    nativeMax = Math.max,
	    nativeNow = Date.now;

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map'),
	    nativeCreate = getNative(Object, 'create');

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate = (function() {
	  function object() {}
	  return function(proto) {
	    if (!isObject(proto)) {
	      return {};
	    }
	    if (objectCreate) {
	      return objectCreate(proto);
	    }
	    object.prototype = proto;
	    var result = new object;
	    object.prototype = undefined;
	    return result;
	  };
	}());

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
	}

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	  this.size = 0;
	}

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * This function is like `assignValue` except that it doesn't assign
	 * `undefined` values.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignMergeValue(object, key, value) {
	  if ((value !== undefined && !eq(object[key], value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}

	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.merge` without support for multiple sources.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMerge(object, source, srcIndex, customizer, stack) {
	  if (object === source) {
	    return;
	  }
	  baseFor(source, function(srcValue, key) {
	    stack || (stack = new Stack);
	    if (isObject(srcValue)) {
	      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
	    }
	    else {
	      var newValue = customizer
	        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
	        : undefined;

	      if (newValue === undefined) {
	        newValue = srcValue;
	      }
	      assignMergeValue(object, key, newValue);
	    }
	  }, keysIn);
	}

	/**
	 * A specialized version of `baseMerge` for arrays and objects which performs
	 * deep merges and tracks traversed objects enabling objects with circular
	 * references to be merged.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {string} key The key of the value to merge.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} mergeFunc The function to merge values.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
	  var objValue = safeGet(object, key),
	      srcValue = safeGet(source, key),
	      stacked = stack.get(srcValue);

	  if (stacked) {
	    assignMergeValue(object, key, stacked);
	    return;
	  }
	  var newValue = customizer
	    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
	    : undefined;

	  var isCommon = newValue === undefined;

	  if (isCommon) {
	    var isArr = isArray(srcValue),
	        isBuff = !isArr && isBuffer(srcValue),
	        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

	    newValue = srcValue;
	    if (isArr || isBuff || isTyped) {
	      if (isArray(objValue)) {
	        newValue = objValue;
	      }
	      else if (isArrayLikeObject(objValue)) {
	        newValue = copyArray(objValue);
	      }
	      else if (isBuff) {
	        isCommon = false;
	        newValue = cloneBuffer(srcValue, true);
	      }
	      else if (isTyped) {
	        isCommon = false;
	        newValue = cloneTypedArray(srcValue, true);
	      }
	      else {
	        newValue = [];
	      }
	    }
	    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	      newValue = objValue;
	      if (isArguments(objValue)) {
	        newValue = toPlainObject(objValue);
	      }
	      else if (!isObject(objValue) || isFunction(objValue)) {
	        newValue = initCloneObject(srcValue);
	      }
	    }
	    else {
	      isCommon = false;
	    }
	  }
	  if (isCommon) {
	    // Recursively merge objects and arrays (susceptible to call stack limits).
	    stack.set(srcValue, newValue);
	    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
	    stack['delete'](srcValue);
	  }
	  assignMergeValue(object, key, newValue);
	}

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  return setToString(overRest(func, start, identity), func + '');
	}

	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !defineProperty ? identity : function(func, string) {
	  return defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var length = buffer.length,
	      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

	  buffer.copy(result);
	  return result;
	}

	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}

	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      baseAssignValue(object, key, newValue);
	    } else {
	      assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype(object))
	    : {};
	}

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  var type = typeof value;
	  length = length == null ? MAX_SAFE_INTEGER : length;

	  return !!length &&
	    (type == 'number' ||
	      (type != 'symbol' && reIsUint.test(value))) &&
	        (value > -1 && value % 1 == 0 && value < length);
	}

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply(func, this, otherArgs);
	  };
	}

	/**
	 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function safeGet(object, key) {
	  if (key === 'constructor' && typeof object[key] === 'function') {
	    return;
	  }

	  if (key == '__proto__') {
	    return;
	  }

	  return object[key];
	}

	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = shortOut(baseSetToString);

	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;

	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);

	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	/**
	 * Converts `value` to a plain object flattening inherited enumerable string
	 * keyed properties of `value` to own properties of the plain object.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Object} Returns the converted plain object.
	 * @example
	 *
	 * function Foo() {
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.assign({ 'a': 1 }, new Foo);
	 * // => { 'a': 1, 'b': 2 }
	 *
	 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	 * // => { 'a': 1, 'b': 2, 'c': 3 }
	 */
	function toPlainObject(value) {
	  return copyObject(value, keysIn(value));
	}

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}

	/**
	 * This method is like `_.merge` except that it accepts `customizer` which
	 * is invoked to produce the merged values of the destination and source
	 * properties. If `customizer` returns `undefined`, merging is handled by the
	 * method instead. The `customizer` is invoked with six arguments:
	 * (objValue, srcValue, key, object, source, stack).
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} sources The source objects.
	 * @param {Function} customizer The function to customize assigned values.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * function customizer(objValue, srcValue) {
	 *   if (_.isArray(objValue)) {
	 *     return objValue.concat(srcValue);
	 *   }
	 * }
	 *
	 * var object = { 'a': [1], 'b': [2] };
	 * var other = { 'a': [3], 'b': [4] };
	 *
	 * _.mergeWith(object, other, customizer);
	 * // => { 'a': [1, 3], 'b': [2, 4] }
	 */
	var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
	  baseMerge(object, source, srcIndex, customizer);
	});

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = mergeWith;
	});

	function omit(object, keys) {
	  var result = {};
	  Object.keys(object).forEach(key => {
	    if (keys.includes(key)) return;
	    result[key] = object[key];
	  });
	  return result;
	}
	/**
	 * Get value from a deeply nested object using a string path.
	 * Memoizes the value.
	 * @param obj - the object
	 * @param path - the string path
	 * @param def  - the fallback value
	 */

	function get(obj, path, fallback, index) {
	  var key = typeof path === "string" ? path.split(".") : [path];

	  for (index = 0; index < key.length; index += 1) {
	    if (!obj) break;
	    obj = obj[key[index]];
	  }

	  return obj === undefined ? fallback : obj;
	}
	var memoize$1 = fn => {
	  var cache = new WeakMap();

	  var memoizedFn = (obj, path, fallback, index) => {
	    if (typeof obj === "undefined") {
	      return fn(obj, path, fallback);
	    }

	    if (!cache.has(obj)) {
	      cache.set(obj, new Map());
	    }

	    var map = cache.get(obj);

	    if (map.has(path)) {
	      return map.get(path);
	    }

	    var value = fn(obj, path, fallback, index);
	    map.set(path, value);
	    return value;
	  };

	  return memoizedFn;
	};
	var memoizedGet = memoize$1(get);

	/**
	 * Returns the items of an object that meet the condition specified in a callback function.
	 *
	 * @param object the object to loop through
	 * @param fn The filter function
	 */
	function objectFilter(object, fn) {
	  var result = {};
	  Object.keys(object).forEach(key => {
	    var value = object[key];
	    var shouldPass = fn(value, key, object);

	    if (shouldPass) {
	      result[key] = value;
	    }
	  });
	  return result;
	}
	var filterUndefined = object => objectFilter(object, val => val !== null && val !== undefined);
	var objectKeys = obj => Object.keys(obj);

	var cx = function cx() {
	  for (var _len = arguments.length, classNames = new Array(_len), _key = 0; _key < _len; _key++) {
	    classNames[_key] = arguments[_key];
	  }

	  return classNames.filter(Boolean).join(" ");
	};

	/* eslint-disable no-nested-ternary */
	function runIfFn(valueOrFn) {
	  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }

	  return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;
	}

	var ColorModeContext = /*#__PURE__*/react_10({});
	/**
	 * React hook that reads from `ColorModeProvider` context
	 * Returns the color mode and function to toggle it
	 */


	var useColorMode = () => {
	  var context = react_19(ColorModeContext);

	  if (context === undefined) {
	    throw new Error("useColorMode must be used within a ColorModeProvider");
	  }

	  return context;
	};

	var analyzeCSSValue = value => {
	  var num = parseFloat(value.toString());
	  var unit = value.toString().replace(String(num), "");
	  return {
	    unitless: !unit,
	    value: num,
	    unit
	  };
	};

	var px = value => {
	  if (value == null) return value;
	  var {
	    unitless
	  } = analyzeCSSValue(value);
	  return unitless || isNumber(value) ? value + "px" : value;
	};
	var tokenToCSSVar = (scale, value) => theme => {
	  var valueStr = String(value);
	  var key = scale ? scale + "." + valueStr : valueStr;
	  return isObject(theme.__cssMap) && key in theme.__cssMap ? theme.__cssMap[key].varRef : value;
	};
	function createTransform(options) {
	  var {
	    scale,
	    transform,
	    compose
	  } = options;

	  var fn = (value, theme) => {
	    var _transform;

	    var _value = tokenToCSSVar(scale, value)(theme);

	    var result = (_transform = transform == null ? void 0 : transform(_value, theme)) != null ? _transform : _value;

	    if (compose) {
	      result = compose(result, theme);
	    }

	    return result;
	  };

	  return fn;
	}

	function toConfig(scale, transform) {
	  return property => {
	    var result = {
	      property,
	      scale
	    };
	    result.transform = createTransform({
	      scale,
	      transform
	    });
	    return result;
	  };
	}

	var getRtl = (_ref) => {
	  var {
	    rtl,
	    ltr
	  } = _ref;
	  return theme => theme.direction === "rtl" ? rtl : ltr;
	};

	function logical(options) {
	  var {
	    property,
	    scale,
	    transform
	  } = options;
	  return {
	    scale,
	    property: getRtl(property),
	    transform: scale ? createTransform({
	      scale,
	      compose: transform
	    }) : transform
	  };
	}

	function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

	function fractionalValue(value) {
	  return !isNumber(value) || value > 1 ? value : value * 100 + "%";
	}

	var t$1 = {
	  borderWidths: toConfig("borderWidths"),
	  borderStyles: toConfig("borderStyles"),
	  colors: toConfig("colors"),
	  borders: toConfig("borders"),
	  radii: toConfig("radii", px),
	  space: toConfig("space", px),
	  spaceT: toConfig("space", px),
	  prop: (property, scale, transform) => _extends$4({
	    property,
	    scale
	  }, scale && {
	    transform: createTransform({
	      scale,
	      transform
	    })
	  }),
	  sizes: toConfig("sizes", px),
	  sizesT: toConfig("sizes", fractionalValue),
	  shadows: toConfig("shadows"),
	  logical
	};

	function _wrapRegExp(re, groups) { _wrapRegExp = function _wrapRegExp(re, groups) { return new BabelRegExp(re, undefined, groups); }; var _RegExp = _wrapNativeSuper(RegExp); var _super = RegExp.prototype; var _groups = new WeakMap(); function BabelRegExp(re, flags, groups) { var _this = _RegExp.call(this, re, flags); _groups.set(_this, groups || _groups.get(re)); return _this; } _inherits(BabelRegExp, _RegExp); BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); if (result) result.groups = buildGroups(result, this); return result; }; BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if (typeof substitution === "string") { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) { return "$" + groups[name]; })); } else if (typeof substitution === "function") { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = []; args.push.apply(args, arguments); if (typeof args[args.length - 1] !== "object") { args.push(buildGroups(args, _this)); } return substitution.apply(this, args); }); } else { return _super[Symbol.replace].call(this, str, substitution); } }; function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { groups[name] = result[g[name]]; return groups; }, Object.create(null)); } return _wrapRegExp.apply(this, arguments); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

	function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

	function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

	function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	var directionMap = {
	  "to-t": "to top",
	  "to-tr": "to top right",
	  "to-r": "to right",
	  "to-br": "to bottom right",
	  "to-b": "to bottom",
	  "to-bl": "to bottom left",
	  "to-l": "to left",
	  "to-tl": "to top left"
	};
	var valueSet = new Set(Object.values(directionMap));
	var globalSet = new Set(["none", "-moz-initial", "inherit", "initial", "revert", "unset"]);

	var trimSpace = str => str.trim();

	function parseGradient(value, theme) {
	  var _regex$exec$groups, _regex$exec;

	  if (value == null || globalSet.has(value)) return value;

	  var regex = /*#__PURE__*/_wrapRegExp(/(^[\x2DA-Za-z]+)\(((.*))\)/g, {
	    type: 1,
	    values: 2
	  });

	  var {
	    type,
	    values
	  } = (_regex$exec$groups = (_regex$exec = regex.exec(value)) == null ? void 0 : _regex$exec.groups) != null ? _regex$exec$groups : {};
	  if (!type || !values) return value;

	  var _type = type.includes("-gradient") ? type : type + "-gradient";

	  var [maybeDirection, ...stops] = values.split(",").map(trimSpace).filter(Boolean);
	  if ((stops == null ? void 0 : stops.length) === 0) return value;
	  var direction = maybeDirection in directionMap ? directionMap[maybeDirection] : maybeDirection;
	  stops.unshift(direction);

	  var _values = stops.map(stop => {
	    // if stop is valid shorthand direction, return it
	    if (valueSet.has(stop)) return stop; // color stop could be `red.200 20%` based on css gradient spec

	    var [_color, _stop] = stop.split(" "); // else, get and transform the color token or css value

	    var key = "colors." + _color;
	    var color = key in theme.__cssMap ? theme.__cssMap[key].varRef : _color;
	    return _stop ? [color, _stop].join(" ") : color;
	  });

	  return _type + "(" + _values.join(", ") + ")";
	}
	var gradientTransform = (value, theme) => parseGradient(value, theme != null ? theme : {});

	function bgClipTransform(value) {
	  return value === "text" ? {
	    color: "transparent",
	    backgroundClip: "text"
	  } : {
	    backgroundClip: value
	  };
	}

	var background = {
	  bg: t$1.colors("background"),
	  bgColor: t$1.colors("backgroundColor"),
	  background: t$1.colors("background"),
	  backgroundColor: t$1.colors("backgroundColor"),
	  backgroundImage: true,
	  backgroundSize: true,
	  backgroundPosition: true,
	  backgroundRepeat: true,
	  backgroundAttachment: true,
	  backgroundBlendMode: true,
	  backgroundClip: {
	    transform: bgClipTransform
	  },
	  bgImage: t$1.prop("backgroundImage"),
	  bgImg: t$1.prop("backgroundImage"),
	  bgBlendMode: t$1.prop("backgroundBlendMode"),
	  bgSize: t$1.prop("backgroundSize"),
	  bgPosition: t$1.prop("backgroundPosition"),
	  bgPos: t$1.prop("backgroundPosition"),
	  bgRepeat: t$1.prop("backgroundRepeat"),
	  bgAttachment: t$1.prop("backgroundAttachment"),
	  bgGradient: {
	    property: "backgroundImage",
	    transform: gradientTransform
	  },
	  bgClip: {
	    transform: bgClipTransform
	  }
	};

	var border = {
	  border: t$1.borders("border"),
	  borderWidth: t$1.borderWidths("borderWidth"),
	  borderStyle: t$1.borderStyles("borderStyle"),
	  borderColor: t$1.colors("borderColor"),
	  borderRadius: t$1.radii("borderRadius"),
	  borderTop: t$1.borders("borderTop"),
	  borderBlockStart: t$1.borders("borderBlockStart"),
	  borderTopLeftRadius: t$1.radii("borderTopLeftRadius"),
	  borderStartStartRadius: t$1.logical({
	    scale: "radii",
	    property: {
	      ltr: "borderTopLeftRadius",
	      rtl: "borderTopRightRadius"
	    }
	  }),
	  borderEndStartRadius: t$1.logical({
	    scale: "radii",
	    property: {
	      ltr: "borderBottomLeftRadius",
	      rtl: "borderBottomRightRadius"
	    }
	  }),
	  borderTopRightRadius: t$1.radii("borderTopRightRadius"),
	  borderStartEndRadius: t$1.logical({
	    scale: "radii",
	    property: {
	      ltr: "borderTopRightRadius",
	      rtl: "borderTopLeftRadius"
	    }
	  }),
	  borderEndEndRadius: t$1.logical({
	    scale: "radii",
	    property: {
	      ltr: "borderBottomRightRadius",
	      rtl: "borderBottomLeftRadius"
	    }
	  }),
	  borderRight: t$1.borders("borderRight"),
	  borderInlineEnd: t$1.borders("borderInlineEnd"),
	  borderBottom: t$1.borders("borderBottom"),
	  borderBlockEnd: t$1.borders("borderBlockEnd"),
	  borderBottomLeftRadius: t$1.radii("borderBottomLeftRadius"),
	  borderBottomRightRadius: t$1.radii("borderBottomRightRadius"),
	  borderLeft: t$1.borders("borderLeft"),
	  borderInlineStart: {
	    property: "borderInlineStart",
	    scale: "borders"
	  },
	  borderInlineStartRadius: t$1.logical({
	    scale: "radii",
	    property: {
	      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
	      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
	    }
	  }),
	  borderInlineEndRadius: t$1.logical({
	    scale: "radii",
	    property: {
	      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
	      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
	    }
	  }),
	  borderX: t$1.borders(["borderLeft", "borderRight"]),
	  borderInline: t$1.borders("borderInline"),
	  borderY: t$1.borders(["borderTop", "borderBottom"]),
	  borderBlock: t$1.borders("borderBlock"),
	  borderTopWidth: t$1.borderWidths("borderTopWidth"),
	  borderBlockStartWidth: t$1.borderWidths("borderBlockStartWidth"),
	  borderTopColor: t$1.colors("borderTopColor"),
	  borderBlockStartColor: t$1.colors("borderBlockStartColor"),
	  borderTopStyle: t$1.borderStyles("borderTopStyle"),
	  borderBlockStartStyle: t$1.borderStyles("borderBlockStartStyle"),
	  borderBottomWidth: t$1.borderWidths("borderBottomWidth"),
	  borderBlockEndWidth: t$1.borderWidths("borderBlockEndWidth"),
	  borderBottomColor: t$1.colors("borderBottomColor"),
	  borderBlockEndColor: t$1.colors("borderBlockEndColor"),
	  borderBottomStyle: t$1.borderStyles("borderBottomStyle"),
	  borderBlockEndStyle: t$1.borderStyles("borderBlockEndStyle"),
	  borderLeftWidth: t$1.borderWidths("borderLeftWidth"),
	  borderInlineStartWidth: t$1.borderWidths("borderInlineStartWidth"),
	  borderLeftColor: t$1.colors("borderLeftColor"),
	  borderInlineStartColor: t$1.colors("borderInlineStartColor"),
	  borderLeftStyle: t$1.borderStyles("borderLeftStyle"),
	  borderInlineStartStyle: t$1.borderStyles("borderInlineStartStyle"),
	  borderRightWidth: t$1.borderWidths("borderRightWidth"),
	  borderInlineEndWidth: t$1.borderWidths("borderInlineEndWidth"),
	  borderRightColor: t$1.colors("borderRightColor"),
	  borderInlineEndColor: t$1.colors("borderInlineEndColor"),
	  borderRightStyle: t$1.borderStyles("borderRightStyle"),
	  borderInlineEndStyle: t$1.borderStyles("borderInlineEndStyle"),
	  borderTopRadius: t$1.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
	  borderBottomRadius: t$1.radii(["borderBottomLeftRadius", "borderBottomRightRadius"]),
	  borderLeftRadius: t$1.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
	  borderRightRadius: t$1.radii(["borderTopRightRadius", "borderBottomRightRadius"])
	};
	Object.assign(border, {
	  rounded: border.borderRadius,
	  roundedTop: border.borderTopRadius,
	  roundedTopLeft: border.borderTopLeftRadius,
	  roundedTopRight: border.borderTopRightRadius,
	  roundedTopStart: border.borderStartStartRadius,
	  roundedTopEnd: border.borderStartEndRadius,
	  roundedBottom: border.borderBottomRadius,
	  roundedBottomLeft: border.borderBottomLeftRadius,
	  roundedBottomRight: border.borderBottomRightRadius,
	  roundedBottomStart: border.borderEndStartRadius,
	  roundedBottomEnd: border.borderEndEndRadius,
	  roundedLeft: border.borderLeftRadius,
	  roundedRight: border.borderRightRadius,
	  roundedStart: border.borderInlineStartRadius,
	  roundedEnd: border.borderInlineEndRadius,
	  borderStart: border.borderInlineStart,
	  borderEnd: border.borderInlineEnd,
	  borderTopStartRadius: border.borderStartStartRadius,
	  borderTopEndRadius: border.borderStartEndRadius,
	  borderBottomStartRadius: border.borderEndStartRadius,
	  borderBottomEndRadius: border.borderEndEndRadius,
	  borderStartRadius: border.borderInlineStartRadius,
	  borderEndRadius: border.borderInlineEndRadius,
	  borderStartWidth: border.borderInlineStartWidth,
	  borderEndWidth: border.borderInlineEndWidth,
	  borderStartColor: border.borderInlineStartColor,
	  borderEndColor: border.borderInlineEndColor,
	  borderStartStyle: border.borderInlineStartStyle,
	  borderEndStyle: border.borderInlineEndStyle
	});
	/**
	 * The prop types for border properties listed above
	 */

	var color = {
	  color: t$1.colors("color"),
	  textColor: t$1.colors("color"),
	  opacity: true,
	  fill: t$1.colors("fill"),
	  stroke: t$1.colors("stroke")
	};

	var reverse = {
	  "row-reverse": {
	    space: "--chakra-space-x-reverse",
	    divide: "--chakra-divide-x-reverse"
	  },
	  "column-reverse": {
	    space: "--chakra-space-y-reverse",
	    divide: "--chakra-divide-y-reverse"
	  }
	};
	var owlSelector = "& > :not(style) ~ :not(style)";
	var flexbox = {
	  alignItems: true,
	  alignContent: true,
	  justifyItems: true,
	  justifyContent: true,
	  flexWrap: true,
	  flexDirection: {
	    transform(value) {
	      var _reverse$value;

	      var {
	        space,
	        divide
	      } = (_reverse$value = reverse[value]) != null ? _reverse$value : {};
	      var result = {
	        flexDirection: value
	      };
	      if (space) result[space] = 1;
	      if (divide) result[divide] = 1;
	      return result;
	    }

	  },
	  spaceX: {
	    static: {
	      [owlSelector]: {
	        marginInlineStart: "calc(var(--chakra-space-x) * calc(1 - var(--chakra-space-x-reverse)))",
	        marginInlineEnd: "calc(var(--chakra-space-x) * var(--chakra-space-x-reverse))"
	      }
	    },
	    transform: createTransform({
	      scale: "space",
	      transform: value => value !== null ? {
	        "--chakra-space-x": value
	      } : null
	    })
	  },
	  spaceY: {
	    static: {
	      [owlSelector]: {
	        marginTop: "calc(var(--chakra-space-y) * calc(1 - var(--chakra-space-y-reverse)))",
	        marginBottom: "calc(var(--chakra-space-y) * var(--chakra-space-y-reverse))"
	      }
	    },
	    transform: createTransform({
	      scale: "space",
	      transform: value => value != null ? {
	        "--chakra-space-y": value
	      } : null
	    })
	  },
	  flex: true,
	  flexFlow: true,
	  flexGrow: true,
	  flexShrink: true,
	  flexBasis: t$1.sizes("flexBasis"),
	  justifySelf: true,
	  alignSelf: true,
	  order: true,
	  placeItems: true,
	  placeContent: true,
	  placeSelf: true,
	  flexDir: t$1.prop("flexDirection")
	};

	var grid = {
	  gridGap: t$1.space("gridGap"),
	  gridColumnGap: t$1.space("gridColumnGap"),
	  gridRowGap: t$1.space("gridRowGap"),
	  gridColumn: true,
	  gridRow: true,
	  gridAutoFlow: true,
	  gridAutoColumns: true,
	  gridColumnStart: true,
	  gridColumnEnd: true,
	  gridRowStart: true,
	  gridRowEnd: true,
	  gridAutoRows: true,
	  gridTemplate: true,
	  gridTemplateColumns: true,
	  gridTemplateRows: true,
	  gridTemplateAreas: true,
	  gridArea: true
	};

	var layout = {
	  width: t$1.sizesT("width"),
	  inlineSize: t$1.sizesT("inlineSize"),
	  height: t$1.sizes("height"),
	  blockSize: t$1.sizes("blockSize"),
	  boxSize: t$1.sizes(["width", "height"]),
	  minWidth: t$1.sizes("minWidth"),
	  minInlineSize: t$1.sizes("minInlineSize"),
	  minHeight: t$1.sizes("minHeight"),
	  minBlockSize: t$1.sizes("minBlockSize"),
	  maxWidth: t$1.sizes("maxWidth"),
	  maxInlineSize: t$1.sizes("maxInlineSize"),
	  maxHeight: t$1.sizes("maxHeight"),
	  maxBlockSize: t$1.sizes("maxBlockSize"),
	  d: t$1.prop("display"),
	  overflow: true,
	  overflowX: true,
	  overflowY: true,
	  display: true,
	  verticalAlign: true,
	  boxSizing: true
	};
	Object.assign(layout, {
	  w: layout.width,
	  h: layout.height,
	  minW: layout.minWidth,
	  maxW: layout.maxWidth,
	  minH: layout.minHeight,
	  maxH: layout.maxHeight
	});
	/**
	 * Types for layout related CSS properties
	 */

	var floatTransform = (value, theme) => {
	  var map = {
	    left: "right",
	    right: "left"
	  };
	  return theme.direction === "rtl" ? map[value] : value;
	};

	var srOnly = {
	  border: "0px",
	  clip: "rect(0, 0, 0, 0)",
	  width: "1px",
	  height: "1px",
	  margin: "-1px",
	  padding: "0px",
	  overflow: "hidden",
	  whiteSpace: "nowrap",
	  position: "absolute"
	};
	var srFocusable = {
	  position: "static",
	  width: "auto",
	  height: "auto",
	  clip: "auto",
	  padding: "0",
	  margin: "0",
	  overflow: "visible",
	  whiteSpace: "normal"
	};

	var getWithPriority = (theme, key, styles) => {
	  var result = {};
	  var obj = memoizedGet(theme, key, {});

	  for (var prop in obj) {
	    var isInStyles = prop in styles && styles[prop] != null;
	    if (!isInStyles) result[prop] = obj[prop];
	  }

	  return result;
	};

	var others = {
	  animation: true,
	  appearance: true,
	  visibility: true,
	  userSelect: true,
	  pointerEvents: true,
	  cursor: true,
	  resize: true,
	  objectFit: true,
	  objectPosition: true,
	  float: {
	    property: "float",
	    transform: floatTransform
	  },
	  willChange: true,
	  filter: true,
	  clipPath: true,
	  srOnly: {
	    transform(value) {
	      if (value === true) return srOnly;
	      if (value === "focusable") return srFocusable;
	      return {};
	    }

	  },
	  layerStyle: {
	    processResult: true,
	    transform: (value, theme, styles) => getWithPriority(theme, "layerStyles." + value, styles)
	  },
	  textStyle: {
	    processResult: true,
	    transform: (value, theme, styles) => getWithPriority(theme, "textStyles." + value, styles)
	  },
	  apply: {
	    processResult: true,
	    transform: (value, theme, styles) => getWithPriority(theme, value, styles)
	  }
	};

	var position = {
	  position: true,
	  pos: t$1.prop("position"),
	  zIndex: t$1.prop("zIndex", "zIndices"),
	  inset: t$1.spaceT(["top", "right", "bottom", "left"]),
	  insetX: t$1.spaceT(["left", "right"]),
	  insetInline: t$1.spaceT("insetInline"),
	  insetY: t$1.spaceT(["top", "bottom"]),
	  insetBlock: t$1.spaceT("insetBlock"),
	  top: t$1.spaceT("top"),
	  insetBlockStart: t$1.spaceT("insetBlockStart"),
	  bottom: t$1.spaceT("bottom"),
	  insetBlockEnd: t$1.spaceT("insetBlockEnd"),
	  left: t$1.spaceT("left"),
	  insetInlineStart: t$1.logical({
	    scale: "space",
	    property: {
	      ltr: "left",
	      rtl: "right"
	    }
	  }),
	  right: t$1.spaceT("right"),
	  insetInlineEnd: t$1.logical({
	    scale: "space",
	    property: {
	      ltr: "right",
	      rtl: "left"
	    }
	  })
	};
	Object.assign(position, {
	  insetStart: position.insetInlineStart,
	  insetEnd: position.insetInlineEnd
	});
	/**
	 * Types for position CSS properties
	 */

	var shadow = {
	  boxShadow: t$1.shadows("boxShadow"),
	  textShadow: t$1.shadows("textShadow")
	};
	Object.assign(shadow, {
	  shadow: shadow.boxShadow
	});
	/**
	 * Types for box and text shadow properties
	 */

	var space = {
	  margin: t$1.spaceT("margin"),
	  marginTop: t$1.spaceT("marginTop"),
	  marginBlockStart: t$1.spaceT("marginBlockStart"),
	  marginRight: t$1.spaceT("marginRight"),
	  marginInlineEnd: t$1.spaceT("marginInlineEnd"),
	  marginBottom: t$1.spaceT("marginBottom"),
	  marginBlockEnd: t$1.spaceT("marginBlockEnd"),
	  marginLeft: t$1.spaceT("marginLeft"),
	  marginInlineStart: t$1.spaceT("marginInlineStart"),
	  marginX: t$1.spaceT(["marginInlineStart", "marginInlineEnd"]),
	  marginInline: t$1.spaceT("marginInline"),
	  marginY: t$1.spaceT(["marginTop", "marginBottom"]),
	  marginBlock: t$1.spaceT("marginBlock"),
	  padding: t$1.space("padding"),
	  paddingTop: t$1.space("paddingTop"),
	  paddingBlockStart: t$1.space("paddingBlockStart"),
	  paddingRight: t$1.space("paddingRight"),
	  paddingBottom: t$1.space("paddingBottom"),
	  paddingBlockEnd: t$1.space("paddingBlockEnd"),
	  paddingLeft: t$1.space("paddingLeft"),
	  paddingInlineStart: t$1.space("paddingInlineStart"),
	  paddingInlineEnd: t$1.space("paddingInlineEnd"),
	  paddingX: t$1.space(["paddingInlineStart", "paddingInlineEnd"]),
	  paddingInline: t$1.space("paddingInline"),
	  paddingY: t$1.space(["paddingTop", "paddingBottom"]),
	  paddingBlock: t$1.space("paddingBlock")
	};
	Object.assign(space, {
	  m: space.margin,
	  mt: space.marginTop,
	  mr: space.marginRight,
	  me: space.marginInlineEnd,
	  marginEnd: space.marginInlineEnd,
	  mb: space.marginBottom,
	  ml: space.marginLeft,
	  ms: space.marginInlineStart,
	  marginStart: space.marginInlineStart,
	  mx: space.marginX,
	  my: space.marginY,
	  p: space.padding,
	  pt: space.paddingTop,
	  py: space.paddingY,
	  px: space.paddingX,
	  pb: space.paddingBottom,
	  pl: space.paddingLeft,
	  ps: space.paddingInlineStart,
	  paddingStart: space.paddingInlineStart,
	  pr: space.paddingRight,
	  pe: space.paddingInlineEnd,
	  paddingEnd: space.paddingInlineEnd
	});
	/**
	 * Types for space related CSS properties
	 */

	var typography = {
	  fontFamily: t$1.prop("fontFamily", "fonts"),
	  fontSize: t$1.prop("fontSize", "fontSizes", px),
	  fontWeight: t$1.prop("fontWeight", "fontWeights"),
	  lineHeight: t$1.prop("lineHeight", "lineHeights"),
	  letterSpacing: t$1.prop("letterSpacing", "letterSpacings"),
	  textAlign: true,
	  fontStyle: true,
	  wordBreak: true,
	  overflowWrap: true,
	  textOverflow: true,
	  textTransform: true,
	  whiteSpace: true,
	  textDecoration: true,
	  textDecor: {
	    property: "textDecoration"
	  },
	  noOfLines: {
	    static: {
	      overflow: "hidden",
	      textOverflow: "ellipsis",
	      display: "-webkit-box",
	      WebkitBoxOrient: "vertical",
	      //@ts-ignore
	      WebkitLineClamp: "var(--chakra-line-clamp)"
	    },
	    property: "--chakra-line-clamp"
	  },
	  isTruncated: {
	    transform(value) {
	      if (value === true) {
	        return {
	          overflow: "hidden",
	          textOverflow: "ellipsis",
	          whiteSpace: "nowrap"
	        };
	      }
	    }

	  }
	};
	/**
	 * Types for typography related CSS properties
	 */

	/**
	 * The parser configuration for common outline properties
	 */

	var outline = {
	  outline: true,
	  outlineOffset: true,
	  outlineColor: t$1.colors("outlineColor"),
	  ringColor: t$1.prop("--chakra-ring-color", "colors"),
	  ringOffsetWidth: t$1.prop("--chakra-ring-offset"),
	  ringOffsetColor: t$1.prop("--chakra-ring-offset-color", "colors"),
	  ringWidth: t$1.prop("--chakra-ring-offset"),
	  ringInset: t$1.prop("--chakra-ring-inset")
	};

	var list = {
	  listStyleType: true,
	  listStylePosition: true,
	  listStylePos: t$1.prop("listStylePosition"),
	  listStyleImage: true,
	  listStyleImg: t$1.prop("listStyleImage")
	};

	var transition = {
	  transition: true,
	  transitionDuration: t$1.prop("transitionDuration", "transition.duration"),
	  transitionProperty: t$1.prop("transitionProperty", "transition.property"),
	  transitionTimingFunction: t$1.prop("transitionTimingFunction", "transition.easing")
	};

	var templates = {
	  auto: "var(--chakra-transform)",
	  "auto-gpu": "var(--chakra-transform-gpu)"
	};

	var degreeTransform = value => {
	  if (isCssVar(value) || value == null) return value;
	  return isNumber(value) ? value + "deg" : value;
	};

	var transform = {
	  transform: {
	    property: "transform",

	    transform(value) {
	      var _templates$value;

	      return (_templates$value = templates[value]) != null ? _templates$value : value;
	    }

	  },
	  transformOrigin: true,
	  translateX: t$1.spaceT("--chakra-translate-x"),
	  translateY: t$1.spaceT("--chakra-translate-y"),
	  rotateX: {
	    property: "--chakra-rotate-x",
	    transform: degreeTransform
	  },
	  rotateY: {
	    property: "--chakra-rotate-y",
	    transform: degreeTransform
	  },
	  skewX: {
	    property: "--chakra-skew-x",
	    transform: degreeTransform
	  },
	  skewY: {
	    property: "--chakra-skew-y",
	    transform: degreeTransform
	  }
	};

	/**
	 * Expands an array or object syntax responsive style.
	 *
	 * @example
	 * expandResponsive({ mx: [1, 2] })
	 * // or
	 * expandResponsive({ mx: { base: 1, sm: 2 } })
	 *
	 * // => { mx: 1, "@media(min-width:<sm>)": { mx: 2 } }
	 */

	var expandResponsive = styles => theme => {
	  /**
	   * Before any style can be processed, the user needs to call `toCSSVar`
	   * which analyzes the theme's breakpoint and appends a `__breakpoints` property
	   * to the theme with more details of the breakpoints.
	   *
	   * To learn more, go here: packages/utils/src/responsive.ts #analyzeBreakpoints
	   */
	  if (!theme.__breakpoints) return styles;
	  var {
	    isResponsive,
	    toArrayValue,
	    media: medias
	  } = theme.__breakpoints;
	  var computedStyles = {};

	  for (var key in styles) {
	    var value = runIfFn(styles[key], theme);
	    if (value == null) continue; // converts the object responsive syntax to array syntax

	    value = isObject(value) && isResponsive(value) ? toArrayValue(value) : value;

	    if (!Array.isArray(value)) {
	      computedStyles[key] = value;
	      continue;
	    }

	    var queries = value.slice(0, medias.length).length;

	    for (var index = 0; index < queries; index += 1) {
	      var media = medias == null ? void 0 : medias[index];

	      if (!media) {
	        computedStyles[key] = value[index];
	        continue;
	      }

	      computedStyles[media] = computedStyles[media] || {};

	      if (value[index] == null) {
	        continue;
	      }

	      computedStyles[media][key] = value[index];
	    }
	  }

	  return computedStyles;
	};

	var group = {
	  hover: selector => selector + ":hover &, " + selector + "[data-hover] &",
	  focus: selector => selector + ":focus &, " + selector + "[data-focus] &",
	  active: selector => selector + ":active &, " + selector + "[data-active] &",
	  disabled: selector => selector + ":disabled &, " + selector + "[data-disabled] &",
	  invalid: selector => selector + ":invalid &, " + selector + "[data-invalid] &",
	  checked: selector => selector + ":checked &, " + selector + "[data-checked] &",
	  indeterminate: selector => selector + ":indeterminate &, " + selector + "[aria-checked=mixed] &, " + selector + "[data-indeterminate] &",
	  readOnly: selector => selector + ":read-only &, " + selector + "[readonly] &, " + selector + "[data-read-only] &",
	  expanded: selector => selector + ":read-only &, " + selector + "[aria-expanded=true] &, " + selector + "[data-expanded] &"
	};

	var toGroup = fn => merge(fn, "[role=group]", "[data-group]", ".group");

	var merge = function merge(fn) {
	  for (var _len = arguments.length, selectors = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    selectors[_key - 1] = arguments[_key];
	  }

	  return selectors.map(fn).join(", ");
	};

	var pseudoSelectors = {
	  /**
	   * Styles for CSS selector `&:hover`
	   */
	  _hover: "&:hover, &[data-hover]",

	  /**
	   * Styles for CSS Selector `&:active`
	   */
	  _active: "&:active, &[data-active]",

	  /**
	   * Styles for CSS selector `&:focus`
	   *
	   */
	  _focus: "&:focus, &[data-focus]",

	  /**
	   * Styles for the highlighted state.
	   */
	  _highlighted: "&[data-highlighted]",

	  /**
	   * Styles to apply when a child of this element has received focus
	   * - CSS Selector `&:focus-within`
	   */
	  _focusWithin: "&:focus-within",
	  _focusVisible: "&:focus-visible",

	  /**
	   * Styles to apply when this element is disabled. The passed styles are applied to these CSS selectors:
	   * - `&[aria-disabled=true]`
	   * - `&:disabled`
	   * - `&[data-disabled]`
	   */
	  _disabled: "&[disabled], &[aria-disabled=true], &[data-disabled]",

	  /**
	   * Styles for CSS Selector `&:readonly`
	   */
	  _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",

	  /**
	   * Styles for CSS selector `&::before`
	   *
	   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
	   * @example
	   * ```jsx
	   * <Box _before={{content:`""` }}/>
	   * ```
	   */
	  _before: "&::before",

	  /**
	   * Styles for CSS selector `&::after`
	   *
	   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
	   * @example
	   * ```jsx
	   * <Box _after={{content:`""` }}/>
	   * ```
	   */
	  _after: "&::after",
	  _empty: "&:empty",

	  /**
	   * Styles to apply when the ARIA attribute `aria-expanded` is `true`
	   * - CSS selector `&[aria-expanded=true]`
	   */
	  _expanded: "&[aria-expanded=true], &[data-expanded]",

	  /**
	   * Styles to apply when the ARIA attribute `aria-checked` is `true`
	   * - CSS selector `&[aria-checked=true]`
	   */
	  _checked: "&[aria-checked=true], &[data-checked]",

	  /**
	   * Styles to apply when the ARIA attribute `aria-grabbed` is `true`
	   * - CSS selector `&[aria-grabbed=true]`
	   */
	  _grabbed: "&[aria-grabbed=true], &[data-grabbed]",

	  /**
	   * Styles for CSS Selector `&[aria-pressed=true]`
	   * Typically used to style the current "pressed" state of toggle buttons
	   */
	  _pressed: "&[aria-pressed=true], &[data-pressed]",

	  /**
	   * Styles to apply when the ARIA attribute `aria-invalid` is `true`
	   * - CSS selector `&[aria-invalid=true]`
	   */
	  _invalid: "&[aria-invalid=true], &[data-invalid]",

	  /**
	   * Styles for the valid state
	   * - CSS selector `&[data-valid], &[data-state=valid]`
	   */
	  _valid: "&[data-valid], &[data-state=valid]",

	  /**
	   * Styles for CSS Selector `&[aria-busy=true]` or `&[data-loading=true]`.
	   * Useful for styling loading states
	   */
	  _loading: "&[data-loading], &[aria-busy=true]",

	  /**
	   * Styles to apply when the ARIA attribute `aria-selected` is `true`
	   *
	   * - CSS selector `&[aria-selected=true]`
	   */
	  _selected: "&[aria-selected=true], &[data-selected]",

	  /**
	   * Styles for CSS Selector `[hidden=true]`
	   */
	  _hidden: "&[hidden], &[data-hidden]",

	  /**
	   * Styles for CSS Selector `&:-webkit-autofill`
	   */
	  _autofill: "&:-webkit-autofill",

	  /**
	   * Styles for CSS Selector `&:nth-child(even)`
	   */
	  _even: "&:nth-of-type(even)",

	  /**
	   * Styles for CSS Selector `&:nth-child(odd)`
	   */
	  _odd: "&:nth-of-type(odd)",

	  /**
	   * Styles for CSS Selector `&:first-of-type`
	   */
	  _first: "&:first-of-type",

	  /**
	   * Styles for CSS Selector `&:last-of-type`
	   */
	  _last: "&:last-of-type",

	  /**
	   * Styles for CSS Selector `&:not(:first-of-type)`
	   */
	  _notFirst: "&:not(:first-of-type)",

	  /**
	   * Styles for CSS Selector `&:not(:last-of-type)`
	   */
	  _notLast: "&:not(:last-of-type)",

	  /**
	   * Styles for CSS Selector `&:visited`
	   */
	  _visited: "&:visited",

	  /**
	   * Used to style the active link in a navigation
	   * Styles for CSS Selector `&[aria-current=page]`
	   */
	  _activeLink: "&[aria-current=page]",

	  /**
	   * Styles to apply when the ARIA attribute `aria-checked` is `mixed`
	   * - CSS selector `&[aria-checked=mixed]`
	   */
	  _indeterminate: "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",

	  /**
	   * Styles to apply when parent is hovered
	   */
	  _groupHover: toGroup(group.hover),

	  /**
	   * Styles to apply when parent is focused
	   */
	  _groupFocus: toGroup(group.focus),

	  /**
	   * Styles to apply when parent is active
	   */
	  _groupActive: toGroup(group.active),

	  /**
	   * Styles to apply when parent is disabled
	   */
	  _groupDisabled: toGroup(group.disabled),

	  /**
	   * Styles to apply when parent is invalid
	   */
	  _groupInvalid: toGroup(group.invalid),

	  /**
	   * Styles to apply when parent is checked
	   */
	  _groupChecked: toGroup(group.checked),

	  /**
	   * Styles for CSS Selector `&::placeholder`.
	   */
	  _placeholder: "&::placeholder",

	  /**
	   * Styles for CSS Selector `&:fullscreen`.
	   */
	  _fullScreen: "&:fullscreen",

	  /**
	   * Styles for CSS Selector `&::selection`
	   */
	  _selection: "&::selection",

	  /**
	   * Styles for CSS Selector `[dir=rtl] &`
	   * It is applied when any parent element has `dir="rtl"`
	   */
	  _rtl: "[dir=rtl] &",

	  /**
	   * Styles for CSS Selector `@media (prefers-color-scheme: dark)`
	   * used when the user has requested the system
	   * use a light or dark color theme.
	   */
	  _mediaDark: "@media (prefers-color-scheme: dark)",

	  /**
	   * Styles for when `.dark` is applied to any parent of
	   * this component or element.
	   */
	  _dark: ".dark &, [data-theme=dark] &"
	};
	var pseudoPropNames = objectKeys(pseudoSelectors);

	function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }
	var systemProps = lodash_mergewith({}, background, border, color, flexbox, layout, outline, grid, others, position, shadow, space, typography, transform, list, transition);
	lodash_mergewith({}, space, layout, flexbox, grid, position);
	var propNames = [...objectKeys(systemProps), ...pseudoPropNames];

	var styleProps = _extends$3({}, systemProps, pseudoSelectors);

	var isStyleProp = prop => prop in styleProps;

	var isCSSVariableTokenValue = (key, value) => key.startsWith("--") && isString(value) && !isCssVar(value);

	var resolveTokenValue = (theme, value) => {
	  var _ref, _getVar2;

	  if (value == null) return value;

	  var getVar = val => {
	    var _theme$__cssMap, _theme$__cssMap$val;

	    return (_theme$__cssMap = theme.__cssMap) == null ? void 0 : (_theme$__cssMap$val = _theme$__cssMap[val]) == null ? void 0 : _theme$__cssMap$val.varRef;
	  };

	  var getValue = val => {
	    var _getVar;

	    return (_getVar = getVar(val)) != null ? _getVar : val;
	  };

	  var valueSplit = value.split(",").map(v => v.trim());
	  var [tokenValue, fallbackValue] = valueSplit;
	  value = (_ref = (_getVar2 = getVar(tokenValue)) != null ? _getVar2 : getValue(fallbackValue)) != null ? _ref : getValue(value);
	  return value;
	};

	function getCss(options) {
	  var {
	    configs = {},
	    pseudos = {},
	    theme
	  } = options;

	  var css = function css(stylesOrFn, nested) {
	    if (nested === void 0) {
	      nested = false;
	    }

	    var _styles = runIfFn(stylesOrFn, theme);

	    var styles = expandResponsive(_styles)(theme);
	    var computedStyles = {};

	    for (var key in styles) {
	      var _config$transform, _config, _config2, _config3, _config4;

	      var valueOrFn = styles[key];
	      /**
	       * allows the user to pass functional values
	       * boxShadow: theme => `0 2px 2px ${theme.colors.red}`
	       */

	      var value = runIfFn(valueOrFn, theme);
	      /**
	       * converts pseudo shorthands to valid selector
	       * "_hover" => "&:hover"
	       */

	      if (key in pseudos) {
	        key = pseudos[key];
	      }
	      /**
	       * allows the user to use theme tokens in css vars
	       * { --banner-height: "sizes.md" } => { --banner-height: "var(--chakra-sizes-md)" }
	       *
	       * You can also provide fallback values
	       * { --banner-height: "sizes.no-exist, 40px" } => { --banner-height: "40px" }
	       */


	      if (isCSSVariableTokenValue(key, value)) {
	        value = resolveTokenValue(theme, value);
	      }

	      var config = configs[key];

	      if (config === true) {
	        config = {
	          property: key
	        };
	      }

	      if (isObject(value)) {
	        var _computedStyles$key;

	        computedStyles[key] = (_computedStyles$key = computedStyles[key]) != null ? _computedStyles$key : {};
	        computedStyles[key] = lodash_mergewith({}, computedStyles[key], css(value, true));
	        continue;
	      }

	      var rawValue = (_config$transform = (_config = config) == null ? void 0 : _config.transform == null ? void 0 : _config.transform(value, theme, _styles)) != null ? _config$transform : value;
	      /**
	       * Used for `layerStyle`, `textStyle` and `apply`. After getting the
	       * styles in the theme, we need to process them since they might
	       * contain theme tokens.
	       *
	       * `processResult` is the config property we pass to `layerStyle`, `textStyle` and `apply`
	       */

	      rawValue = (_config2 = config) != null && _config2.processResult ? css(rawValue, true) : rawValue;
	      /**
	       * allows us define css properties for RTL and LTR.
	       *
	       * const marginStart = {
	       *   property: theme => theme.direction === "rtl" ? "marginRight": "marginLeft",
	       * }
	       */

	      var configProperty = runIfFn((_config3 = config) == null ? void 0 : _config3.property, theme);

	      if (!nested && (_config4 = config) != null && _config4.static) {
	        var staticStyles = runIfFn(config.static, theme);
	        computedStyles = lodash_mergewith({}, computedStyles, staticStyles);
	      }

	      if (configProperty && Array.isArray(configProperty)) {
	        for (var property of configProperty) {
	          computedStyles[property] = rawValue;
	        }

	        continue;
	      }

	      if (configProperty) {
	        if (configProperty === "&" && isObject(rawValue)) {
	          computedStyles = lodash_mergewith({}, computedStyles, rawValue);
	        } else {
	          computedStyles[configProperty] = rawValue;
	        }

	        continue;
	      }

	      if (isObject(rawValue)) {
	        computedStyles = lodash_mergewith({}, computedStyles, rawValue);
	        continue;
	      }

	      computedStyles[key] = rawValue;
	    }

	    return computedStyles;
	  };

	  return css;
	}
	var css = styles => theme => {
	  var cssFn = getCss({
	    theme,
	    pseudos: pseudoSelectors,
	    configs: systemProps
	  });
	  return cssFn(styles);
	};

	/*

	Based off glamor's StyleSheet, thanks Sunil ❤️

	high performance StyleSheet for css-in-js systems

	- uses multiple style tags behind the scenes for millions of rules
	- uses `insertRule` for appending in production for *much* faster performance

	// usage

	import { StyleSheet } from '@emotion/sheet'

	let styleSheet = new StyleSheet({ key: '', container: document.head })

	styleSheet.insert('#box { border: 1px solid red; }')
	- appends a css rule into the stylesheet

	styleSheet.flush()
	- empties the stylesheet of all its contents

	*/
	// $FlowFixMe
	function sheetForTag(tag) {
	  if (tag.sheet) {
	    // $FlowFixMe
	    return tag.sheet;
	  } // this weirdness brought to you by firefox

	  /* istanbul ignore next */


	  for (var i = 0; i < document.styleSheets.length; i++) {
	    if (document.styleSheets[i].ownerNode === tag) {
	      // $FlowFixMe
	      return document.styleSheets[i];
	    }
	  }
	}

	function createStyleElement(options) {
	  var tag = document.createElement('style');
	  tag.setAttribute('data-emotion', options.key);

	  if (options.nonce !== undefined) {
	    tag.setAttribute('nonce', options.nonce);
	  }

	  tag.appendChild(document.createTextNode(''));
	  tag.setAttribute('data-s', '');
	  return tag;
	}

	var StyleSheet = /*#__PURE__*/function () {
	  function StyleSheet(options) {
	    var _this = this;

	    this._insertTag = function (tag) {
	      var before;

	      if (_this.tags.length === 0) {
	        before = _this.prepend ? _this.container.firstChild : _this.before;
	      } else {
	        before = _this.tags[_this.tags.length - 1].nextSibling;
	      }

	      _this.container.insertBefore(tag, before);

	      _this.tags.push(tag);
	    };

	    this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
	    this.tags = [];
	    this.ctr = 0;
	    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

	    this.key = options.key;
	    this.container = options.container;
	    this.prepend = options.prepend;
	    this.before = null;
	  }

	  var _proto = StyleSheet.prototype;

	  _proto.hydrate = function hydrate(nodes) {
	    nodes.forEach(this._insertTag);
	  };

	  _proto.insert = function insert(rule) {
	    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
	    // it's 1 in dev because we insert source maps that map a single rule to a location
	    // and you can only have one source map per style tag
	    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
	      this._insertTag(createStyleElement(this));
	    }

	    var tag = this.tags[this.tags.length - 1];

	    if (this.isSpeedy) {
	      var sheet = sheetForTag(tag);

	      try {
	        // this is the ultrafast version, works across browsers
	        // the big drawback is that the css won't be editable in devtools
	        sheet.insertRule(rule, sheet.cssRules.length);
	      } catch (e) {
	      }
	    } else {
	      tag.appendChild(document.createTextNode(rule));
	    }

	    this.ctr++;
	  };

	  _proto.flush = function flush() {
	    // $FlowFixMe
	    this.tags.forEach(function (tag) {
	      return tag.parentNode.removeChild(tag);
	    });
	    this.tags = [];
	    this.ctr = 0;
	  };

	  return StyleSheet;
	}();

	var e="-ms-";var r="-moz-";var a="-webkit-";var c="comm";var n="rule";var t="decl";var i="@import";var p="@keyframes";var k=Math.abs;var d=String.fromCharCode;function m(e,r){return (((r<<2^z(e,0))<<2^z(e,1))<<2^z(e,2))<<2^z(e,3)}function g(e){return e.trim()}function x(e,r){return (e=r.exec(e))?e[0]:e}function y(e,r,a){return e.replace(r,a)}function j(e,r){return e.indexOf(r)}function z(e,r){return e.charCodeAt(r)|0}function C(e,r,a){return e.slice(r,a)}function A(e){return e.length}function M(e){return e.length}function O(e,r){return r.push(e),e}function S(e,r){return e.map(r).join("")}var q=1;var B=1;var D=0;var E=0;var F=0;var G="";function H(e,r,a,c,n,t,s){return {value:e,root:r,parent:a,type:c,props:n,children:t,line:q,column:B,length:s,return:""}}function I(e,r,a){return H(e,r.root,r.parent,a,r.props,r.children,0)}function J(){return F}function K(){F=E>0?z(G,--E):0;if(B--,F===10)B=1,q--;return F}function L(){F=E<D?z(G,E++):0;if(B++,F===10)B=1,q++;return F}function N(){return z(G,E)}function P(){return E}function Q(e,r){return C(G,e,r)}function R(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function T(e){return q=B=1,D=A(G=e),E=0,[]}function U(e){return G="",e}function V(e){return g(Q(E-1,_(e===91?e+2:e===40?e+1:e)))}function X(e){while(F=N())if(F<33)L();else break;return R(e)>2||R(F)>3?"":" "}function Z(e,r){while(--r&&L())if(F<48||F>102||F>57&&F<65||F>70&&F<97)break;return Q(e,P()+(r<6&&N()==32&&L()==32))}function _(e){while(L())switch(F){case e:return E;case 34:case 39:return _(e===34||e===39?e:F);case 40:if(e===41)_(e);break;case 92:L();break}return E}function ee(e,r){while(L())if(e+F===47+10)break;else if(e+F===42+42&&N()===47)break;return "/*"+Q(r,E-1)+"*"+d(e===47?e:L())}function re(e){while(!R(N()))L();return Q(e,E)}function ae(e){return U(ce("",null,null,null,[""],e=T(e),0,[0],e))}function ce(e,r,a,c,n,t,s,u,i){var f=0;var o=0;var l=s;var v=0;var h=0;var p=0;var b=1;var w=1;var $=1;var k=0;var m="";var g=n;var x=t;var j=c;var z=m;while(w)switch(p=k,k=L()){case 34:case 39:case 91:case 40:z+=V(k);break;case 9:case 10:case 13:case 32:z+=X(p);break;case 92:z+=Z(P()-1,7);continue;case 47:switch(N()){case 42:case 47:O(te(ee(L(),P()),r,a),i);break;default:z+="/";}break;case 123*b:u[f++]=A(z)*$;case 125*b:case 59:case 0:switch(k){case 0:case 125:w=0;case 59+o:if(h>0&&A(z)-l)O(h>32?se(z+";",c,a,l-1):se(y(z," ","")+";",c,a,l-2),i);break;case 59:z+=";";default:O(j=ne(z,r,a,f,o,n,u,m,g=[],x=[],l),t);if(k===123)if(o===0)ce(z,r,j,j,g,t,l,u,x);else switch(v){case 100:case 109:case 115:ce(e,j,j,c&&O(ne(e,j,j,0,0,n,u,m,n,g=[],l),x),n,x,l,u,c?g:x);break;default:ce(z,j,j,j,[""],x,l,u,x);}}f=o=h=0,b=$=1,m=z="",l=s;break;case 58:l=1+A(z),h=p;default:if(b<1)if(k==123)--b;else if(k==125&&b++==0&&K()==125)continue;switch(z+=d(k),k*b){case 38:$=o>0?1:(z+="\f",-1);break;case 44:u[f++]=(A(z)-1)*$,$=1;break;case 64:if(N()===45)z+=V(L());v=N(),o=A(m=z+=re(P())),k++;break;case 45:if(p===45&&A(z)==2)b=0;}}return t}function ne(e,r,a,c,t,s,u,i,f,o,l){var v=t-1;var h=t===0?s:[""];var p=M(h);for(var b=0,w=0,$=0;b<c;++b)for(var d=0,m=C(e,v+1,v=k(w=u[b])),x=e;d<p;++d)if(x=g(w>0?h[d]+" "+m:y(m,/&\f/g,h[d])))f[$++]=x;return H(e,r,a,t===0?n:i,f,o,l)}function te(e,r,a){return H(e,r,a,c,d(J()),C(e,2,-2),0)}function se(e,r,a,c){return H(e,r,a,t,C(e,0,c),C(e,c+1,-1),c)}function ue(c,n){switch(m(c,n)){case 5103:return a+"print-"+c+c;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return a+c+c;case 5349:case 4246:case 4810:case 6968:case 2756:return a+c+r+c+e+c+c;case 6828:case 4268:return a+c+e+c+c;case 6165:return a+c+e+"flex-"+c+c;case 5187:return a+c+y(c,/(\w+).+(:[^]+)/,a+"box-$1$2"+e+"flex-$1$2")+c;case 5443:return a+c+e+"flex-item-"+y(c,/flex-|-self/,"")+c;case 4675:return a+c+e+"flex-line-pack"+y(c,/align-content|flex-|-self/,"")+c;case 5548:return a+c+e+y(c,"shrink","negative")+c;case 5292:return a+c+e+y(c,"basis","preferred-size")+c;case 6060:return a+"box-"+y(c,"-grow","")+a+c+e+y(c,"grow","positive")+c;case 4554:return a+y(c,/([^-])(transform)/g,"$1"+a+"$2")+c;case 6187:return y(y(y(c,/(zoom-|grab)/,a+"$1"),/(image-set)/,a+"$1"),c,"")+c;case 5495:case 3959:return y(c,/(image-set\([^]*)/,a+"$1"+"$`$1");case 4968:return y(y(c,/(.+:)(flex-)?(.*)/,a+"box-pack:$3"+e+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+a+c+c;case 4095:case 3583:case 4068:case 2532:return y(c,/(.+)-inline(.+)/,a+"$1$2")+c;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(A(c)-1-n>6)switch(z(c,n+1)){case 109:if(z(c,n+4)!==45)break;case 102:return y(c,/(.+:)(.+)-([^]+)/,"$1"+a+"$2-$3"+"$1"+r+(z(c,n+3)==108?"$3":"$2-$3"))+c;case 115:return ~j(c,"stretch")?ue(y(c,"stretch","fill-available"),n)+c:c}break;case 4949:if(z(c,n+1)!==115)break;case 6444:switch(z(c,A(c)-3-(~j(c,"!important")&&10))){case 107:return y(c,":",":"+a)+c;case 101:return y(c,/(.+:)([^;!]+)(;|!.+)?/,"$1"+a+(z(c,14)===45?"inline-":"")+"box$3"+"$1"+a+"$2$3"+"$1"+e+"$2box$3")+c}break;case 5936:switch(z(c,n+11)){case 114:return a+c+e+y(c,/[svh]\w+-[tblr]{2}/,"tb")+c;case 108:return a+c+e+y(c,/[svh]\w+-[tblr]{2}/,"tb-rl")+c;case 45:return a+c+e+y(c,/[svh]\w+-[tblr]{2}/,"lr")+c}return a+c+e+c+c}return c}function ie(e,r){var a="";var c=M(e);for(var n=0;n<c;n++)a+=r(e[n],n,e,r)||"";return a}function fe(e,r,a,s){switch(e.type){case i:case t:return e.return=e.return||e.value;case c:return "";case n:e.value=e.props.join(",");}return A(a=ie(e.children,s))?e.return=e.value+"{"+a+"}":""}function oe(e){var r=M(e);return function(a,c,n,t){var s="";for(var u=0;u<r;u++)s+=e[u](a,c,n,t)||"";return s}}function le(e){return function(r){if(!r.root)if(r=r.return)e(r);}}function ve(c,s,u,i){if(!c.return)switch(c.type){case t:c.return=ue(c.value,c.length);break;case p:return ie([I(y(c.value,"@","@"+a),c,"")],i);case n:if(c.length)return S(c.props,(function(n){switch(x(n,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ie([I(y(n,/:(read-\w+)/,":"+r+"$1"),c,"")],i);case"::placeholder":return ie([I(y(n,/:(plac\w+)/,":"+a+"input-$1"),c,""),I(y(n,/:(plac\w+)/,":"+r+"$1"),c,""),I(y(n,/:(plac\w+)/,e+"input-$1"),c,"")],i)}return ""}))}}

	var weakMemoize = function weakMemoize(func) {
	  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
	  var cache = new WeakMap();
	  return function (arg) {
	    if (cache.has(arg)) {
	      // $FlowFixMe
	      return cache.get(arg);
	    }

	    var ret = func(arg);
	    cache.set(arg, ret);
	    return ret;
	  };
	};

	function memoize(fn) {
	  var cache = Object.create(null);
	  return function (arg) {
	    if (cache[arg] === undefined) cache[arg] = fn(arg);
	    return cache[arg];
	  };
	}

	var toRules = function toRules(parsed, points) {
	  // pretend we've started with a comma
	  var index = -1;
	  var character = 44;

	  do {
	    switch (R(character)) {
	      case 0:
	        // &\f
	        if (character === 38 && N() === 12) {
	          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
	          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
	          // and when it should just concatenate the outer and inner selectors
	          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
	          points[index] = 1;
	        }

	        parsed[index] += re(E - 1);
	        break;

	      case 2:
	        parsed[index] += V(character);
	        break;

	      case 4:
	        // comma
	        if (character === 44) {
	          // colon
	          parsed[++index] = N() === 58 ? '&\f' : '';
	          points[index] = parsed[index].length;
	          break;
	        }

	      // fallthrough

	      default:
	        parsed[index] += d(character);
	    }
	  } while (character = L());

	  return parsed;
	};

	var getRules = function getRules(value, points) {
	  return U(toRules(T(value), points));
	}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


	var fixedElements = /* #__PURE__ */new WeakMap();
	var compat = function compat(element) {
	  if (element.type !== 'rule' || !element.parent || // .length indicates if this rule contains pseudo or not
	  !element.length) {
	    return;
	  }

	  var value = element.value,
	      parent = element.parent;
	  var isImplicitRule = element.column === parent.column && element.line === parent.line;

	  while (parent.type !== 'rule') {
	    parent = parent.parent;
	    if (!parent) return;
	  } // short-circuit for the simplest case


	  if (element.props.length === 1 && value.charCodeAt(0) !== 58
	  /* colon */
	  && !fixedElements.get(parent)) {
	    return;
	  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
	  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


	  if (isImplicitRule) {
	    return;
	  }

	  fixedElements.set(element, true);
	  var points = [];
	  var rules = getRules(value, points);
	  var parentRules = parent.props;

	  for (var i = 0, k = 0; i < rules.length; i++) {
	    for (var j = 0; j < parentRules.length; j++, k++) {
	      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
	    }
	  }
	};
	var removeLabel = function removeLabel(element) {
	  if (element.type === 'decl') {
	    var value = element.value;

	    if ( // charcode for l
	    value.charCodeAt(0) === 108 && // charcode for b
	    value.charCodeAt(2) === 98) {
	      // this ignores label
	      element["return"] = '';
	      element.value = '';
	    }
	  }
	};

	var isBrowser$3 = typeof document !== 'undefined';
	var getServerStylisCache = isBrowser$3 ? undefined : weakMemoize(function () {
	  return memoize(function () {
	    var cache = {};
	    return function (name) {
	      return cache[name];
	    };
	  });
	});
	var defaultStylisPlugins = [ve];

	var createCache = function createCache(options) {
	  var key = options.key;

	  if (isBrowser$3 && key === 'css') {
	    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
	    // document.head is a safe place to move them to

	    Array.prototype.forEach.call(ssrStyles, function (node) {
	      document.head.appendChild(node);
	      node.setAttribute('data-s', '');
	    });
	  }

	  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

	  var inserted = {}; // $FlowFixMe

	  var container;
	  var nodesToHydrate = [];

	  if (isBrowser$3) {
	    container = options.container || document.head;
	    Array.prototype.forEach.call(document.querySelectorAll("style[data-emotion]"), function (node) {
	      var attrib = node.getAttribute("data-emotion").split(' ');

	      if (attrib[0] !== key) {
	        return;
	      } // $FlowFixMe


	      for (var i = 1; i < attrib.length; i++) {
	        inserted[attrib[i]] = true;
	      }

	      nodesToHydrate.push(node);
	    });
	  }

	  var _insert;

	  var omnipresentPlugins = [compat, removeLabel];

	  if (isBrowser$3) {
	    var currentSheet;
	    var finalizingPlugins = [fe, le(function (rule) {
	      currentSheet.insert(rule);
	    })];
	    var serializer = oe(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

	    var stylis = function stylis(styles) {
	      return ie(ae(styles), serializer);
	    };

	    _insert = function insert(selector, serialized, sheet, shouldCache) {
	      currentSheet = sheet;

	      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

	      if (shouldCache) {
	        cache.inserted[serialized.name] = true;
	      }
	    };
	  } else {
	    var _finalizingPlugins = [fe];

	    var _serializer = oe(omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins));

	    var _stylis = function _stylis(styles) {
	      return ie(ae(styles), _serializer);
	    }; // $FlowFixMe


	    var serverStylisCache = getServerStylisCache(stylisPlugins)(key);

	    var getRules = function getRules(selector, serialized) {
	      var name = serialized.name;

	      if (serverStylisCache[name] === undefined) {
	        serverStylisCache[name] = _stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
	      }

	      return serverStylisCache[name];
	    };

	    _insert = function _insert(selector, serialized, sheet, shouldCache) {
	      var name = serialized.name;
	      var rules = getRules(selector, serialized);

	      if (cache.compat === undefined) {
	        // in regular mode, we don't set the styles on the inserted cache
	        // since we don't need to and that would be wasting memory
	        // we return them so that they are rendered in a style tag
	        if (shouldCache) {
	          cache.inserted[name] = true;
	        }

	        return rules;
	      } else {
	        // in compat mode, we put the styles on the inserted cache so
	        // that emotion-server can pull out the styles
	        // except when we don't want to cache it which was in Global but now
	        // is nowhere but we don't want to do a major right now
	        // and just in case we're going to leave the case here
	        // it's also not affecting client side bundle size
	        // so it's really not a big deal
	        if (shouldCache) {
	          cache.inserted[name] = rules;
	        } else {
	          return rules;
	        }
	      }
	    };
	  }

	  var cache = {
	    key: key,
	    sheet: new StyleSheet({
	      key: key,
	      container: container,
	      nonce: options.nonce,
	      speedy: options.speedy,
	      prepend: options.prepend
	    }),
	    nonce: options.nonce,
	    inserted: inserted,
	    registered: {},
	    insert: _insert
	  };
	  cache.sheet.hydrate(nodesToHydrate);
	  return cache;
	};

	function _extends$2() {
	  _extends$2 = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends$2.apply(this, arguments);
	}

	var isBrowser$2 = typeof document !== 'undefined';
	function getRegisteredStyles(registered, registeredStyles, classNames) {
	  var rawClassName = '';
	  classNames.split(' ').forEach(function (className) {
	    if (registered[className] !== undefined) {
	      registeredStyles.push(registered[className] + ";");
	    } else {
	      rawClassName += className + " ";
	    }
	  });
	  return rawClassName;
	}
	var insertStyles = function insertStyles(cache, serialized, isStringTag) {
	  var className = cache.key + "-" + serialized.name;

	  if ( // we only need to add the styles to the registered cache if the
	  // class name could be used further down
	  // the tree but if it's a string tag, we know it won't
	  // so we don't have to add it to registered cache.
	  // this improves memory usage since we can avoid storing the whole style string
	  (isStringTag === false || // we need to always store it if we're in compat mode and
	  // in node since emotion-server relies on whether a style is in
	  // the registered cache to know whether a style is global or not
	  // also, note that this check will be dead code eliminated in the browser
	  isBrowser$2 === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
	    cache.registered[className] = serialized.styles;
	  }

	  if (cache.inserted[serialized.name] === undefined) {
	    var stylesForSSR = '';
	    var current = serialized;

	    do {
	      var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

	      if (!isBrowser$2 && maybeStyles !== undefined) {
	        stylesForSSR += maybeStyles;
	      }

	      current = current.next;
	    } while (current !== undefined);

	    if (!isBrowser$2 && stylesForSSR.length !== 0) {
	      return stylesForSSR;
	    }
	  }
	};

	/* eslint-disable */
	// Inspired by https://github.com/garycourt/murmurhash-js
	// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
	function murmur2(str) {
	  // 'm' and 'r' are mixing constants generated offline.
	  // They're not really 'magic', they just happen to work well.
	  // const m = 0x5bd1e995;
	  // const r = 24;
	  // Initialize the hash
	  var h = 0; // Mix 4 bytes at a time into the hash

	  var k,
	      i = 0,
	      len = str.length;

	  for (; len >= 4; ++i, len -= 4) {
	    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
	    k =
	    /* Math.imul(k, m): */
	    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
	    k ^=
	    /* k >>> r: */
	    k >>> 24;
	    h =
	    /* Math.imul(k, m): */
	    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
	    /* Math.imul(h, m): */
	    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
	  } // Handle the last few bytes of the input array


	  switch (len) {
	    case 3:
	      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

	    case 2:
	      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

	    case 1:
	      h ^= str.charCodeAt(i) & 0xff;
	      h =
	      /* Math.imul(h, m): */
	      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
	  } // Do a few final mixes of the hash to ensure the last few
	  // bytes are well-incorporated.


	  h ^= h >>> 13;
	  h =
	  /* Math.imul(h, m): */
	  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
	  return ((h ^ h >>> 15) >>> 0).toString(36);
	}

	var unitlessKeys = {
	  animationIterationCount: 1,
	  borderImageOutset: 1,
	  borderImageSlice: 1,
	  borderImageWidth: 1,
	  boxFlex: 1,
	  boxFlexGroup: 1,
	  boxOrdinalGroup: 1,
	  columnCount: 1,
	  columns: 1,
	  flex: 1,
	  flexGrow: 1,
	  flexPositive: 1,
	  flexShrink: 1,
	  flexNegative: 1,
	  flexOrder: 1,
	  gridRow: 1,
	  gridRowEnd: 1,
	  gridRowSpan: 1,
	  gridRowStart: 1,
	  gridColumn: 1,
	  gridColumnEnd: 1,
	  gridColumnSpan: 1,
	  gridColumnStart: 1,
	  msGridRow: 1,
	  msGridRowSpan: 1,
	  msGridColumn: 1,
	  msGridColumnSpan: 1,
	  fontWeight: 1,
	  lineHeight: 1,
	  opacity: 1,
	  order: 1,
	  orphans: 1,
	  tabSize: 1,
	  widows: 1,
	  zIndex: 1,
	  zoom: 1,
	  WebkitLineClamp: 1,
	  // SVG-related properties
	  fillOpacity: 1,
	  floodOpacity: 1,
	  stopOpacity: 1,
	  strokeDasharray: 1,
	  strokeDashoffset: 1,
	  strokeMiterlimit: 1,
	  strokeOpacity: 1,
	  strokeWidth: 1
	};

	var hyphenateRegex = /[A-Z]|^ms/g;
	var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

	var isCustomProperty = function isCustomProperty(property) {
	  return property.charCodeAt(1) === 45;
	};

	var isProcessableValue = function isProcessableValue(value) {
	  return value != null && typeof value !== 'boolean';
	};

	var processStyleName = /* #__PURE__ */memoize(function (styleName) {
	  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
	});

	var processStyleValue = function processStyleValue(key, value) {
	  switch (key) {
	    case 'animation':
	    case 'animationName':
	      {
	        if (typeof value === 'string') {
	          return value.replace(animationRegex, function (match, p1, p2) {
	            cursor = {
	              name: p1,
	              styles: p2,
	              next: cursor
	            };
	            return p1;
	          });
	        }
	      }
	  }

	  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
	    return value + 'px';
	  }

	  return value;
	};

	function handleInterpolation(mergedProps, registered, interpolation) {
	  if (interpolation == null) {
	    return '';
	  }

	  if (interpolation.__emotion_styles !== undefined) {

	    return interpolation;
	  }

	  switch (typeof interpolation) {
	    case 'boolean':
	      {
	        return '';
	      }

	    case 'object':
	      {
	        if (interpolation.anim === 1) {
	          cursor = {
	            name: interpolation.name,
	            styles: interpolation.styles,
	            next: cursor
	          };
	          return interpolation.name;
	        }

	        if (interpolation.styles !== undefined) {
	          var next = interpolation.next;

	          if (next !== undefined) {
	            // not the most efficient thing ever but this is a pretty rare case
	            // and there will be very few iterations of this generally
	            while (next !== undefined) {
	              cursor = {
	                name: next.name,
	                styles: next.styles,
	                next: cursor
	              };
	              next = next.next;
	            }
	          }

	          var styles = interpolation.styles + ";";

	          return styles;
	        }

	        return createStringFromObject(mergedProps, registered, interpolation);
	      }

	    case 'function':
	      {
	        if (mergedProps !== undefined) {
	          var previousCursor = cursor;
	          var result = interpolation(mergedProps);
	          cursor = previousCursor;
	          return handleInterpolation(mergedProps, registered, result);
	        }

	        break;
	      }
	  } // finalize string values (regular strings and functions interpolated into css calls)


	  if (registered == null) {
	    return interpolation;
	  }

	  var cached = registered[interpolation];
	  return cached !== undefined ? cached : interpolation;
	}

	function createStringFromObject(mergedProps, registered, obj) {
	  var string = '';

	  if (Array.isArray(obj)) {
	    for (var i = 0; i < obj.length; i++) {
	      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
	    }
	  } else {
	    for (var _key in obj) {
	      var value = obj[_key];

	      if (typeof value !== 'object') {
	        if (registered != null && registered[value] !== undefined) {
	          string += _key + "{" + registered[value] + "}";
	        } else if (isProcessableValue(value)) {
	          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
	        }
	      } else {
	        if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {
	          throw new Error('Component selectors can only be used in conjunction with @emotion/babel-plugin.');
	        }

	        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
	          for (var _i = 0; _i < value.length; _i++) {
	            if (isProcessableValue(value[_i])) {
	              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
	            }
	          }
	        } else {
	          var interpolated = handleInterpolation(mergedProps, registered, value);

	          switch (_key) {
	            case 'animation':
	            case 'animationName':
	              {
	                string += processStyleName(_key) + ":" + interpolated + ";";
	                break;
	              }

	            default:
	              {

	                string += _key + "{" + interpolated + "}";
	              }
	          }
	        }
	      }
	    }
	  }

	  return string;
	}

	var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
	// keyframes are stored on the SerializedStyles object as a linked list


	var cursor;
	var serializeStyles = function serializeStyles(args, registered, mergedProps) {
	  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
	    return args[0];
	  }

	  var stringMode = true;
	  var styles = '';
	  cursor = undefined;
	  var strings = args[0];

	  if (strings == null || strings.raw === undefined) {
	    stringMode = false;
	    styles += handleInterpolation(mergedProps, registered, strings);
	  } else {

	    styles += strings[0];
	  } // we start at 1 since we've already handled the first arg


	  for (var i = 1; i < args.length; i++) {
	    styles += handleInterpolation(mergedProps, registered, args[i]);

	    if (stringMode) {

	      styles += strings[i];
	    }
	  }


	  labelPattern.lastIndex = 0;
	  var identifierName = '';
	  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

	  while ((match = labelPattern.exec(styles)) !== null) {
	    identifierName += '-' + // $FlowFixMe we know it's not null
	    match[1];
	  }

	  var name = murmur2(styles) + identifierName;

	  return {
	    name: name,
	    styles: styles,
	    next: cursor
	  };
	};

	var isBrowser$1 = typeof document !== 'undefined';

	var EmotionCacheContext = /* #__PURE__ */react_10( // we're doing this to avoid preconstruct's dead code elimination in this one case
	// because this module is primarily intended for the browser and node
	// but it's also required in react native and similar environments sometimes
	// and we could have a special build just for that
	// but this is much easier and the native packages
	// might use a different theme context in the future anyway
	typeof HTMLElement !== 'undefined' ? /* #__PURE__ */createCache({
	  key: 'css'
	}) : null);
	EmotionCacheContext.Provider;

	var withEmotionCache = function withEmotionCache(func) {
	  // $FlowFixMe
	  return /*#__PURE__*/react_14(function (props, ref) {
	    // the cache will never be null in the browser
	    var cache = react_19(EmotionCacheContext);
	    return func(props, cache, ref);
	  });
	};

	if (!isBrowser$1) {
	  withEmotionCache = function withEmotionCache(func) {
	    return function (props) {
	      var cache = react_19(EmotionCacheContext);

	      if (cache === null) {
	        // yes, we're potentially creating this on every render
	        // it doesn't actually matter though since it's only on the server
	        // so there will only every be a single render
	        // that could change in the future because of suspense and etc. but for now,
	        // this works and i don't want to optimise for a future thing that we aren't sure about
	        cache = createCache({
	          key: 'css'
	        });
	        return /*#__PURE__*/react_11(EmotionCacheContext.Provider, {
	          value: cache
	        }, func(props, cache));
	      } else {
	        return func(props, cache);
	      }
	    };
	  };
	}

	var ThemeContext = /* #__PURE__ */react_10({});

	var _extends_1 = createCommonjsModule(function (module) {
	function _extends() {
	  module.exports = _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	  return _extends.apply(this, arguments);
	}

	module.exports = _extends;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	unwrapExports(_extends_1);

	/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

	var hasElementType = typeof Element !== 'undefined';
	var hasMap = typeof Map === 'function';
	var hasSet = typeof Set === 'function';
	var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

	// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

	function equal(a, b) {
	  // START: fast-deep-equal es6/index.js 3.1.1
	  if (a === b) return true;

	  if (a && b && typeof a == 'object' && typeof b == 'object') {
	    if (a.constructor !== b.constructor) return false;

	    var length, i, keys;
	    if (Array.isArray(a)) {
	      length = a.length;
	      if (length != b.length) return false;
	      for (i = length; i-- !== 0;)
	        if (!equal(a[i], b[i])) return false;
	      return true;
	    }

	    // START: Modifications:
	    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
	    //    to co-exist with es5.
	    // 2. Replace `for of` with es5 compliant iteration using `for`.
	    //    Basically, take:
	    //
	    //    ```js
	    //    for (i of a.entries())
	    //      if (!b.has(i[0])) return false;
	    //    ```
	    //
	    //    ... and convert to:
	    //
	    //    ```js
	    //    it = a.entries();
	    //    while (!(i = it.next()).done)
	    //      if (!b.has(i.value[0])) return false;
	    //    ```
	    //
	    //    **Note**: `i` access switches to `i.value`.
	    var it;
	    if (hasMap && (a instanceof Map) && (b instanceof Map)) {
	      if (a.size !== b.size) return false;
	      it = a.entries();
	      while (!(i = it.next()).done)
	        if (!b.has(i.value[0])) return false;
	      it = a.entries();
	      while (!(i = it.next()).done)
	        if (!equal(i.value[1], b.get(i.value[0]))) return false;
	      return true;
	    }

	    if (hasSet && (a instanceof Set) && (b instanceof Set)) {
	      if (a.size !== b.size) return false;
	      it = a.entries();
	      while (!(i = it.next()).done)
	        if (!b.has(i.value[0])) return false;
	      return true;
	    }
	    // END: Modifications

	    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
	      length = a.length;
	      if (length != b.length) return false;
	      for (i = length; i-- !== 0;)
	        if (a[i] !== b[i]) return false;
	      return true;
	    }

	    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
	    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
	    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

	    keys = Object.keys(a);
	    length = keys.length;
	    if (length !== Object.keys(b).length) return false;

	    for (i = length; i-- !== 0;)
	      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
	    // END: fast-deep-equal

	    // START: react-fast-compare
	    // custom handling for DOM elements
	    if (hasElementType && a instanceof Element) return false;

	    // custom handling for React/Preact
	    for (i = length; i-- !== 0;) {
	      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
	        // React-specific: avoid traversing React elements' _owner
	        // Preact-specific: avoid traversing Preact elements' __v and __o
	        //    __v = $_original / $_vnode
	        //    __o = $_owner
	        // These properties contain circular references and are not needed when
	        // comparing the actual elements (and not their owners)
	        // .$$typeof and ._store on just reasonable markers of elements

	        continue;
	      }

	      // all other properties should be traversed as usual
	      if (!equal(a[keys[i]], b[keys[i]])) return false;
	    }
	    // END: react-fast-compare

	    // START: fast-deep-equal
	    return true;
	  }

	  return a !== a && b !== b;
	}
	// end fast-deep-equal

	var reactFastCompare = function isEqual(a, b) {
	  try {
	    return equal(a, b);
	  } catch (error) {
	    if (((error.message || '').match(/stack|recursion/i))) {
	      // warn on circular references, don't crash
	      // browsers give this different errors name and messages:
	      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
	      // firefox: "InternalError", too much recursion"
	      // edge: "Error", "Out of stack space"
	      console.warn('react-fast-compare cannot handle circular refs');
	      return false;
	    }
	    // some other error. we should definitely know about these
	    throw error;
	  }
	};

	/**
	 * Creates a named context, provider, and hook.
	 *
	 * @param options create context options
	 */
	function createContext(options) {
	  if (options === void 0) {
	    options = {};
	  }

	  var {
	    strict = true,
	    errorMessage = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
	    name
	  } = options;
	  var Context = /*#__PURE__*/react_10(undefined);
	  Context.displayName = name;

	  function useContext() {
	    var context = react_19(Context);

	    if (!context && strict) {
	      throw new Error(errorMessage);
	    }

	    return context;
	  }

	  return [Context.Provider, useContext, Context];
	}

	function useTheme() {
	  var theme = react_19(ThemeContext);

	  if (!theme) {
	    throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`");
	  }

	  return theme;
	}
	createContext({
	  name: "StylesContext",
	  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
	});

	/**
	 * Carefully selected html elements for chakra components.
	 * This is mostly for `chakra.<element>` syntax.
	 */
	var domElements = ["a", "b", "article", "aside", "blockquote", "button", "caption", "cite", "circle", "code", "dd", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "img", "input", "kbd", "label", "li", "main", "mark", "nav", "ol", "p", "path", "pre", "q", "rect", "s", "svg", "section", "select", "strong", "small", "span", "sub", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "tr", "ul"];
	function omitThemingProps(props) {
	  return omit(props, ["styleConfig", "size", "variant", "colorScheme"]);
	}

	function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }
	function useChakra() {
	  var colorModeResult = useColorMode();
	  var theme = useTheme();
	  return _extends$1({}, colorModeResult, {
	    theme
	  });
	}

	var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

	var isPropValid = /* #__PURE__ */memoize(function (prop) {
	  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
	  /* o */
	  && prop.charCodeAt(1) === 110
	  /* n */
	  && prop.charCodeAt(2) < 91;
	}
	/* Z+1 */
	);

	var testOmitPropsOnStringTag = isPropValid;

	var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
	  return key !== 'theme';
	};

	var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
	  return typeof tag === 'string' && // 96 is one less than the char code
	  // for "a" so this is checking that
	  // it's a lowercase character
	  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
	};
	var composeShouldForwardProps = function composeShouldForwardProps(tag, options, isReal) {
	  var shouldForwardProp;

	  if (options) {
	    var optionsShouldForwardProp = options.shouldForwardProp;
	    shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function (propName) {
	      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
	    } : optionsShouldForwardProp;
	  }

	  if (typeof shouldForwardProp !== 'function' && isReal) {
	    shouldForwardProp = tag.__emotion_forwardProp;
	  }

	  return shouldForwardProp;
	};
	var isBrowser = typeof document !== 'undefined';

	var createStyled = function createStyled(tag, options) {

	  var isReal = tag.__emotion_real === tag;
	  var baseTag = isReal && tag.__emotion_base || tag;
	  var identifierName;
	  var targetClassName;

	  if (options !== undefined) {
	    identifierName = options.label;
	    targetClassName = options.target;
	  }

	  var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
	  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
	  var shouldUseAs = !defaultShouldForwardProp('as');
	  return function () {
	    var args = arguments;
	    var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

	    if (identifierName !== undefined) {
	      styles.push("label:" + identifierName + ";");
	    }

	    if (args[0] == null || args[0].raw === undefined) {
	      styles.push.apply(styles, args);
	    } else {

	      styles.push(args[0][0]);
	      var len = args.length;
	      var i = 1;

	      for (; i < len; i++) {

	        styles.push(args[i], args[0][i]);
	      }
	    } // $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class


	    var Styled = withEmotionCache(function (props, cache, ref) {
	      var finalTag = shouldUseAs && props.as || baseTag;
	      var className = '';
	      var classInterpolations = [];
	      var mergedProps = props;

	      if (props.theme == null) {
	        mergedProps = {};

	        for (var key in props) {
	          mergedProps[key] = props[key];
	        }

	        mergedProps.theme = react_19(ThemeContext);
	      }

	      if (typeof props.className === 'string') {
	        className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
	      } else if (props.className != null) {
	        className = props.className + " ";
	      }

	      var serialized = serializeStyles(styles.concat(classInterpolations), cache.registered, mergedProps);
	      var rules = insertStyles(cache, serialized, typeof finalTag === 'string');
	      className += cache.key + "-" + serialized.name;

	      if (targetClassName !== undefined) {
	        className += " " + targetClassName;
	      }

	      var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(finalTag) : defaultShouldForwardProp;
	      var newProps = {};

	      for (var _key in props) {
	        if (shouldUseAs && _key === 'as') continue;

	        if ( // $FlowFixMe
	        finalShouldForwardProp(_key)) {
	          newProps[_key] = props[_key];
	        }
	      }

	      newProps.className = className;
	      newProps.ref = ref;
	      var ele = /*#__PURE__*/react_11(finalTag, newProps);

	      if (!isBrowser && rules !== undefined) {
	        var _ref;

	        var serializedNames = serialized.name;
	        var next = serialized.next;

	        while (next !== undefined) {
	          serializedNames += ' ' + next.name;
	          next = next.next;
	        }

	        return /*#__PURE__*/react_11(react_3, null, /*#__PURE__*/react_11("style", (_ref = {}, _ref["data-emotion"] = cache.key + " " + serializedNames, _ref.dangerouslySetInnerHTML = {
	          __html: rules
	        }, _ref.nonce = cache.sheet.nonce, _ref)), ele);
	      }

	      return ele;
	    });
	    Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
	    Styled.defaultProps = tag.defaultProps;
	    Styled.__emotion_real = Styled;
	    Styled.__emotion_base = baseTag;
	    Styled.__emotion_styles = styles;
	    Styled.__emotion_forwardProp = shouldForwardProp;
	    Object.defineProperty(Styled, 'toString', {
	      value: function value() {
	        if (targetClassName === undefined && "production" !== 'production') {
	          return 'NO_COMPONENT_SELECTOR';
	        } // $FlowFixMe: coerce undefined to string


	        return "." + targetClassName;
	      }
	    });

	    Styled.withComponent = function (nextTag, nextOptions) {
	      return createStyled(nextTag, _extends$2({}, options, nextOptions, {
	        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
	      })).apply(void 0, styles);
	    };

	    return Styled;
	  };
	};

	var tags = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
	'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

	var newStyled = createStyled.bind();
	tags.forEach(function (tagName) {
	  // $FlowFixMe: we can ignore this because its exposed type is defined by the CreateStyled type
	  newStyled[tagName] = newStyled(tagName);
	});

	/**
	 * List of props for emotion to omit from DOM.
	 * It mostly consists of Chakra props
	 */

	var allPropNames = new Set([...propNames, "textStyle", "layerStyle", "apply", "isTruncated", "noOfLines", "focusBorderColor", "errorBorderColor", "as", "__css", "css", "sx"]);
	/**
	 * htmlWidth and htmlHeight is used in the <Image />
	 * component to support the native `width` and `height` attributes
	 *
	 * https://github.com/chakra-ui/chakra-ui/issues/149
	 */

	var validHTMLProps = new Set(["htmlWidth", "htmlHeight", "htmlSize"]);
	var shouldForwardProp = prop => validHTMLProps.has(prop) || !allPropNames.has(prop);

	function _objectWithoutPropertiesLoose$2(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

	/**
	 * Style resolver function that manages how style props are merged
	 * in combination with other possible ways of defining styles.
	 *
	 * For example, take a component defined this way:
	 * ```jsx
	 * <Box fontSize="24px" sx={{ fontSize: "40px" }}></Box>
	 * ```
	 *
	 * We want to manage the priority of the styles properly to prevent unwanted
	 * behaviors. Right now, the `sx` prop has the highest priority so the resolved
	 * fontSize will be `40px`
	 */
	var toCSSObject = (_ref) => {
	  var {
	    baseStyle
	  } = _ref;
	  return props => {
	    var {
	      css: cssProp,
	      __css,
	      sx
	    } = props,
	        rest = _objectWithoutPropertiesLoose$2(props, ["theme", "css", "__css", "sx"]);

	    var styleProps = objectFilter(rest, (_, prop) => isStyleProp(prop));
	    var finalStyles = Object.assign({}, __css, baseStyle, styleProps, sx);
	    var computedCSS = css(finalStyles)(props.theme);
	    return cssProp ? [computedCSS, cssProp] : computedCSS;
	  };
	};
	function styled(component, options) {
	  var _ref2 = options != null ? options : {},
	      {
	    baseStyle
	  } = _ref2,
	      styledOptions = _objectWithoutPropertiesLoose$2(_ref2, ["baseStyle"]);

	  if (!styledOptions.shouldForwardProp) {
	    styledOptions.shouldForwardProp = shouldForwardProp;
	  }

	  var styleObject = toCSSObject({
	    baseStyle
	  });
	  return newStyled(component, styledOptions)(styleObject);
	}
	var chakra = styled;
	domElements.forEach(tag => {
	  chakra[tag] = chakra(tag);
	});

	/**
	 * All credit goes to Chance (Reach UI), Haz (Reakit) and (fluentui)
	 * for creating the base type definitions upon which we improved on
	 */
	function forwardRef(component) {
	  return /*#__PURE__*/react_14(component);
	}

	function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
	function useStyleConfig(themeKey, props, opts) {
	  var _styleConfig$defaultP, _opts2;

	  if (props === void 0) {
	    props = {};
	  }

	  if (opts === void 0) {
	    opts = {};
	  }

	  var {
	    styleConfig: styleConfigProp
	  } = props,
	      rest = _objectWithoutPropertiesLoose$1(props, ["styleConfig"]);

	  var {
	    theme,
	    colorMode
	  } = useChakra();
	  var themeStyleConfig = memoizedGet(theme, "components." + themeKey);
	  var styleConfig = styleConfigProp || themeStyleConfig;
	  var mergedProps = lodash_mergewith({
	    theme,
	    colorMode
	  }, (_styleConfig$defaultP = styleConfig == null ? void 0 : styleConfig.defaultProps) != null ? _styleConfig$defaultP : {}, filterUndefined(omit(rest, ["children"])));
	  /**
	   * Store the computed styles in a `ref` to avoid unneeded re-computation
	   */

	  var stylesRef = react_26({});
	  return react_24(() => {
	    if (styleConfig) {
	      var _styleConfig$baseStyl, _styleConfig$variants, _styleConfig$variants2, _styleConfig$sizes$me, _styleConfig$sizes, _opts;

	      var baseStyles = runIfFn((_styleConfig$baseStyl = styleConfig.baseStyle) != null ? _styleConfig$baseStyl : {}, mergedProps);
	      var variants = runIfFn((_styleConfig$variants = (_styleConfig$variants2 = styleConfig.variants) == null ? void 0 : _styleConfig$variants2[mergedProps.variant]) != null ? _styleConfig$variants : {}, mergedProps);
	      var sizes = runIfFn((_styleConfig$sizes$me = (_styleConfig$sizes = styleConfig.sizes) == null ? void 0 : _styleConfig$sizes[mergedProps.size]) != null ? _styleConfig$sizes$me : {}, mergedProps);
	      var styles = lodash_mergewith({}, baseStyles, sizes, variants);

	      if ((_opts = opts) != null && _opts.isMultiPart && styleConfig.parts) {
	        styleConfig.parts.forEach(part => {
	          var _styles$part;

	          styles[part] = (_styles$part = styles[part]) != null ? _styles$part : {};
	        });
	      }

	      var isStyleEqual = reactFastCompare(stylesRef.current, styles);

	      if (!isStyleEqual) {
	        stylesRef.current = styles;
	      }
	    }

	    return stylesRef.current;
	  }, [styleConfig, mergedProps, (_opts2 = opts) == null ? void 0 : _opts2.isMultiPart]);
	}

	/**
	 * Box is the most abstract component on top of which other chakra
	 * components are built. It renders a `div` element by default.
	 *
	 * @see Docs https://chakra-ui.com/docs/layout/box
	 */
	var Box = chakra("div");

	function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

	function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
	var Heading = /*#__PURE__*/forwardRef((props, ref) => {
	  var styles = useStyleConfig("Heading", props);

	  var _omitThemingProps = omitThemingProps(props),
	      rest = _objectWithoutPropertiesLoose(_omitThemingProps, ["className"]);

	  return /*#__PURE__*/react_11(chakra.h2, _extends({
	    ref: ref,
	    className: cx("chakra-heading", props.className)
	  }, rest, {
	    __css: styles
	  }));
	});

	var fuckitUP = {
	  w: "inherit",
	  color: "white",
	  fontFamily: "sans-serif"
	};

	var App = function App() {
	  return /*#__PURE__*/react.createElement(Box, {
	    width: "100vw",
	    height: "100vh"
	  }, /*#__PURE__*/react.createElement(Heading, fuckitUP, /*#__PURE__*/react.createElement(Textfit, {
	    mode: "single",
	    max: 5000
	  }, "$ ", window.ticker)), /*#__PURE__*/react.createElement(Heading, fuckitUP, /*#__PURE__*/react.createElement(Textfit, {
	    mode: "single",
	    max: 5000
	  }, window.average, " AVG")));
	};

	reactDom_6( /*#__PURE__*/react.createElement(App, null), document.getElementById("because-chris-said-so"));

}());
