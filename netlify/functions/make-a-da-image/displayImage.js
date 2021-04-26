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
	    } // Detect buggy property enumeration order in older V8 versions.
	    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


	    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

	    test1[5] = 'de';

	    if (Object.getOwnPropertyNames(test1)[0] === '5') {
	      return false;
	    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


	    var test2 = {};

	    for (var i = 0; i < 10; i++) {
	      test2['_' + String.fromCharCode(i)] = i;
	    }

	    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
	      return test2[n];
	    });

	    if (order2.join('') !== '0123456789') {
	      return false;
	    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


	    var test3 = {};
	    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
	      test3[letter] = letter;
	    });

	    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
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

	var react_production_min = createCommonjsModule(function (module, exports) {

	var n = 60103,
	    p = 60106;

	exports.Fragment = 60107;
	exports.StrictMode = 60108;
	exports.Profiler = 60114;
	var q = 60109,
	    r = 60110,
	    t = 60112;
	exports.Suspense = 60113;
	var u = 60115,
	    v = 60116;

	if ("function" === typeof Symbol && Symbol.for) {
	  var w = Symbol.for;
	  n = w("react.element");
	  p = w("react.portal");
	  exports.Fragment = w("react.fragment");
	  exports.StrictMode = w("react.strict_mode");
	  exports.Profiler = w("react.profiler");
	  q = w("react.provider");
	  r = w("react.context");
	  t = w("react.forward_ref");
	  exports.Suspense = w("react.suspense");
	  u = w("react.memo");
	  v = w("react.lazy");
	}

	var x = "function" === typeof Symbol && Symbol.iterator;

	function y(a) {
	  if (null === a || "object" !== typeof a) return null;
	  a = x && a[x] || a["@@iterator"];
	  return "function" === typeof a ? a : null;
	}

	function z(a) {
	  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);

	  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}

	var A = {
	  isMounted: function () {
	    return !1;
	  },
	  enqueueForceUpdate: function () {},
	  enqueueReplaceState: function () {},
	  enqueueSetState: function () {}
	},
	    B = {};

	function C(a, b, c) {
	  this.props = a;
	  this.context = b;
	  this.refs = B;
	  this.updater = c || A;
	}

	C.prototype.isReactComponent = {};

	C.prototype.setState = function (a, b) {
	  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error(z(85));
	  this.updater.enqueueSetState(this, a, b, "setState");
	};

	C.prototype.forceUpdate = function (a) {
	  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
	};

	function D() {}

	D.prototype = C.prototype;

	function E(a, b, c) {
	  this.props = a;
	  this.context = b;
	  this.refs = B;
	  this.updater = c || A;
	}

	var F = E.prototype = new D();
	F.constructor = E;
	objectAssign(F, C.prototype);
	F.isPureReactComponent = !0;
	var G = {
	  current: null
	},
	    H = Object.prototype.hasOwnProperty,
	    I = {
	  key: !0,
	  ref: !0,
	  __self: !0,
	  __source: !0
	};

	function J(a, b, c) {
	  var e,
	      d = {},
	      k = null,
	      h = null;
	  if (null != b) for (e in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) H.call(b, e) && !I.hasOwnProperty(e) && (d[e] = b[e]);
	  var g = arguments.length - 2;
	  if (1 === g) d.children = c;else if (1 < g) {
	    for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];

	    d.children = f;
	  }
	  if (a && a.defaultProps) for (e in g = a.defaultProps, g) void 0 === d[e] && (d[e] = g[e]);
	  return {
	    $$typeof: n,
	    type: a,
	    key: k,
	    ref: h,
	    props: d,
	    _owner: G.current
	  };
	}

	function K(a, b) {
	  return {
	    $$typeof: n,
	    type: a.type,
	    key: b,
	    ref: a.ref,
	    props: a.props,
	    _owner: a._owner
	  };
	}

	function L(a) {
	  return "object" === typeof a && null !== a && a.$$typeof === n;
	}

	function escape(a) {
	  var b = {
	    "=": "=0",
	    ":": "=2"
	  };
	  return "$" + a.replace(/[=:]/g, function (a) {
	    return b[a];
	  });
	}

	var M = /\/+/g;

	function N(a, b) {
	  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
	}

	function O(a, b, c, e, d) {
	  var k = typeof a;
	  if ("undefined" === k || "boolean" === k) a = null;
	  var h = !1;
	  if (null === a) h = !0;else switch (k) {
	    case "string":
	    case "number":
	      h = !0;
	      break;

	    case "object":
	      switch (a.$$typeof) {
	        case n:
	        case p:
	          h = !0;
	      }

	  }
	  if (h) return h = a, d = d(h), a = "" === e ? "." + N(h, 0) : e, Array.isArray(d) ? (c = "", null != a && (c = a.replace(M, "$&/") + "/"), O(d, b, c, "", function (a) {
	    return a;
	  })) : null != d && (L(d) && (d = K(d, c + (!d.key || h && h.key === d.key ? "" : ("" + d.key).replace(M, "$&/") + "/") + a)), b.push(d)), 1;
	  h = 0;
	  e = "" === e ? "." : e + ":";
	  if (Array.isArray(a)) for (var g = 0; g < a.length; g++) {
	    k = a[g];
	    var f = e + N(k, g);
	    h += O(k, b, c, f, d);
	  } else if (f = y(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) k = k.value, f = e + N(k, g++), h += O(k, b, c, f, d);else if ("object" === k) throw b = "" + a, Error(z(31, "[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
	  return h;
	}

	function P(a, b, c) {
	  if (null == a) return a;
	  var e = [],
	      d = 0;
	  O(a, e, "", "", function (a) {
	    return b.call(c, a, d++);
	  });
	  return e;
	}

	function Q(a) {
	  if (-1 === a._status) {
	    var b = a._result;
	    b = b();
	    a._status = 0;
	    a._result = b;
	    b.then(function (b) {
	      0 === a._status && (b = b.default, a._status = 1, a._result = b);
	    }, function (b) {
	      0 === a._status && (a._status = 2, a._result = b);
	    });
	  }

	  if (1 === a._status) return a._result;
	  throw a._result;
	}

	var R = {
	  current: null
	};

	function S() {
	  var a = R.current;
	  if (null === a) throw Error(z(321));
	  return a;
	}

	var T = {
	  ReactCurrentDispatcher: R,
	  ReactCurrentBatchConfig: {
	    transition: 0
	  },
	  ReactCurrentOwner: G,
	  IsSomeRendererActing: {
	    current: !1
	  },
	  assign: objectAssign
	};
	exports.Children = {
	  map: P,
	  forEach: function (a, b, c) {
	    P(a, function () {
	      b.apply(this, arguments);
	    }, c);
	  },
	  count: function (a) {
	    var b = 0;
	    P(a, function () {
	      b++;
	    });
	    return b;
	  },
	  toArray: function (a) {
	    return P(a, function (a) {
	      return a;
	    }) || [];
	  },
	  only: function (a) {
	    if (!L(a)) throw Error(z(143));
	    return a;
	  }
	};
	exports.Component = C;
	exports.PureComponent = E;
	exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T;

	exports.cloneElement = function (a, b, c) {
	  if (null === a || void 0 === a) throw Error(z(267, a));
	  var e = objectAssign({}, a.props),
	      d = a.key,
	      k = a.ref,
	      h = a._owner;

	  if (null != b) {
	    void 0 !== b.ref && (k = b.ref, h = G.current);
	    void 0 !== b.key && (d = "" + b.key);
	    if (a.type && a.type.defaultProps) var g = a.type.defaultProps;

	    for (f in b) H.call(b, f) && !I.hasOwnProperty(f) && (e[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
	  }

	  var f = arguments.length - 2;
	  if (1 === f) e.children = c;else if (1 < f) {
	    g = Array(f);

	    for (var m = 0; m < f; m++) g[m] = arguments[m + 2];

	    e.children = g;
	  }
	  return {
	    $$typeof: n,
	    type: a.type,
	    key: d,
	    ref: k,
	    props: e,
	    _owner: h
	  };
	};

	exports.createContext = function (a, b) {
	  void 0 === b && (b = null);
	  a = {
	    $$typeof: r,
	    _calculateChangedBits: b,
	    _currentValue: a,
	    _currentValue2: a,
	    _threadCount: 0,
	    Provider: null,
	    Consumer: null
	  };
	  a.Provider = {
	    $$typeof: q,
	    _context: a
	  };
	  return a.Consumer = a;
	};

	exports.createElement = J;

	exports.createFactory = function (a) {
	  var b = J.bind(null, a);
	  b.type = a;
	  return b;
	};

	exports.createRef = function () {
	  return {
	    current: null
	  };
	};

	exports.forwardRef = function (a) {
	  return {
	    $$typeof: t,
	    render: a
	  };
	};

	exports.isValidElement = L;

	exports.lazy = function (a) {
	  return {
	    $$typeof: v,
	    _payload: {
	      _status: -1,
	      _result: a
	    },
	    _init: Q
	  };
	};

	exports.memo = function (a, b) {
	  return {
	    $$typeof: u,
	    type: a,
	    compare: void 0 === b ? null : b
	  };
	};

	exports.useCallback = function (a, b) {
	  return S().useCallback(a, b);
	};

	exports.useContext = function (a, b) {
	  return S().useContext(a, b);
	};

	exports.useDebugValue = function () {};

	exports.useEffect = function (a, b) {
	  return S().useEffect(a, b);
	};

	exports.useImperativeHandle = function (a, b, c) {
	  return S().useImperativeHandle(a, b, c);
	};

	exports.useLayoutEffect = function (a, b) {
	  return S().useLayoutEffect(a, b);
	};

	exports.useMemo = function (a, b) {
	  return S().useMemo(a, b);
	};

	exports.useReducer = function (a, b, c) {
	  return S().useReducer(a, b, c);
	};

	exports.useRef = function (a) {
	  return S().useRef(a);
	};

	exports.useState = function (a) {
	  return S().useState(a);
	};

	exports.version = "17.0.2";
	});
	react_production_min.Fragment;
	react_production_min.StrictMode;
	react_production_min.Profiler;
	react_production_min.Suspense;
	react_production_min.Children;
	react_production_min.Component;
	react_production_min.PureComponent;
	react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
	react_production_min.cloneElement;
	react_production_min.createContext;
	react_production_min.createElement;
	react_production_min.createFactory;
	react_production_min.createRef;
	react_production_min.forwardRef;
	react_production_min.isValidElement;
	react_production_min.lazy;
	react_production_min.memo;
	react_production_min.useCallback;
	react_production_min.useContext;
	react_production_min.useDebugValue;
	react_production_min.useEffect;
	react_production_min.useImperativeHandle;
	react_production_min.useLayoutEffect;
	react_production_min.useMemo;
	react_production_min.useReducer;
	react_production_min.useRef;
	react_production_min.useState;
	react_production_min.version;

	var react_development = createCommonjsModule(function (module, exports) {
	});
	react_development.Fragment;
	react_development.StrictMode;
	react_development.Profiler;
	react_development.Suspense;
	react_development.Children;
	react_development.Component;
	react_development.PureComponent;
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
	var react_1 = react.Fragment;
	react.StrictMode;
	react.Profiler;
	react.Suspense;
	react.Children;
	react.Component;
	react.PureComponent;
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
	var react_23 = react.useLayoutEffect;
	var react_24 = react.useMemo;
	react.useReducer;
	var react_26 = react.useRef;
	react.useState;
	react.version;

	var scheduler_production_min = createCommonjsModule(function (module, exports) {

	var f, g, h, k;

	if ("object" === typeof performance && "function" === typeof performance.now) {
	  var l = performance;

	  exports.unstable_now = function () {
	    return l.now();
	  };
	} else {
	  var p = Date,
	      q = p.now();

	  exports.unstable_now = function () {
	    return p.now() - q;
	  };
	}

	if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
	  var t = null,
	      u = null,
	      w = function () {
	    if (null !== t) try {
	      var a = exports.unstable_now();
	      t(!0, a);
	      t = null;
	    } catch (b) {
	      throw setTimeout(w, 0), b;
	    }
	  };

	  f = function (a) {
	    null !== t ? setTimeout(f, 0, a) : (t = a, setTimeout(w, 0));
	  };

	  g = function (a, b) {
	    u = setTimeout(a, b);
	  };

	  h = function () {
	    clearTimeout(u);
	  };

	  exports.unstable_shouldYield = function () {
	    return !1;
	  };

	  k = exports.unstable_forceFrameRate = function () {};
	} else {
	  var x = window.setTimeout,
	      y = window.clearTimeout;

	  if ("undefined" !== typeof console) {
	    var z = window.cancelAnimationFrame;
	    "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
	    "function" !== typeof z && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
	  }

	  var A = !1,
	      B = null,
	      C = -1,
	      D = 5,
	      E = 0;

	  exports.unstable_shouldYield = function () {
	    return exports.unstable_now() >= E;
	  };

	  k = function () {};

	  exports.unstable_forceFrameRate = function (a) {
	    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < a ? Math.floor(1E3 / a) : 5;
	  };

	  var F = new MessageChannel(),
	      G = F.port2;

	  F.port1.onmessage = function () {
	    if (null !== B) {
	      var a = exports.unstable_now();
	      E = a + D;

	      try {
	        B(!0, a) ? G.postMessage(null) : (A = !1, B = null);
	      } catch (b) {
	        throw G.postMessage(null), b;
	      }
	    } else A = !1;
	  };

	  f = function (a) {
	    B = a;
	    A || (A = !0, G.postMessage(null));
	  };

	  g = function (a, b) {
	    C = x(function () {
	      a(exports.unstable_now());
	    }, b);
	  };

	  h = function () {
	    y(C);
	    C = -1;
	  };
	}

	function H(a, b) {
	  var c = a.length;
	  a.push(b);

	  a: for (;;) {
	    var d = c - 1 >>> 1,
	        e = a[d];
	    if (void 0 !== e && 0 < I(e, b)) a[d] = b, a[c] = e, c = d;else break a;
	  }
	}

	function J(a) {
	  a = a[0];
	  return void 0 === a ? null : a;
	}

	function K(a) {
	  var b = a[0];

	  if (void 0 !== b) {
	    var c = a.pop();

	    if (c !== b) {
	      a[0] = c;

	      a: for (var d = 0, e = a.length; d < e;) {
	        var m = 2 * (d + 1) - 1,
	            n = a[m],
	            v = m + 1,
	            r = a[v];
	        if (void 0 !== n && 0 > I(n, c)) void 0 !== r && 0 > I(r, n) ? (a[d] = r, a[v] = c, d = v) : (a[d] = n, a[m] = c, d = m);else if (void 0 !== r && 0 > I(r, c)) a[d] = r, a[v] = c, d = v;else break a;
	      }
	    }

	    return b;
	  }

	  return null;
	}

	function I(a, b) {
	  var c = a.sortIndex - b.sortIndex;
	  return 0 !== c ? c : a.id - b.id;
	}

	var L = [],
	    M = [],
	    N = 1,
	    O = null,
	    P = 3,
	    Q = !1,
	    R = !1,
	    S = !1;

	function T(a) {
	  for (var b = J(M); null !== b;) {
	    if (null === b.callback) K(M);else if (b.startTime <= a) K(M), b.sortIndex = b.expirationTime, H(L, b);else break;
	    b = J(M);
	  }
	}

	function U(a) {
	  S = !1;
	  T(a);
	  if (!R) if (null !== J(L)) R = !0, f(V);else {
	    var b = J(M);
	    null !== b && g(U, b.startTime - a);
	  }
	}

	function V(a, b) {
	  R = !1;
	  S && (S = !1, h());
	  Q = !0;
	  var c = P;

	  try {
	    T(b);

	    for (O = J(L); null !== O && (!(O.expirationTime > b) || a && !exports.unstable_shouldYield());) {
	      var d = O.callback;

	      if ("function" === typeof d) {
	        O.callback = null;
	        P = O.priorityLevel;
	        var e = d(O.expirationTime <= b);
	        b = exports.unstable_now();
	        "function" === typeof e ? O.callback = e : O === J(L) && K(L);
	        T(b);
	      } else K(L);

	      O = J(L);
	    }

	    if (null !== O) var m = !0;else {
	      var n = J(M);
	      null !== n && g(U, n.startTime - b);
	      m = !1;
	    }
	    return m;
	  } finally {
	    O = null, P = c, Q = !1;
	  }
	}

	var W = k;
	exports.unstable_IdlePriority = 5;
	exports.unstable_ImmediatePriority = 1;
	exports.unstable_LowPriority = 4;
	exports.unstable_NormalPriority = 3;
	exports.unstable_Profiling = null;
	exports.unstable_UserBlockingPriority = 2;

	exports.unstable_cancelCallback = function (a) {
	  a.callback = null;
	};

	exports.unstable_continueExecution = function () {
	  R || Q || (R = !0, f(V));
	};

	exports.unstable_getCurrentPriorityLevel = function () {
	  return P;
	};

	exports.unstable_getFirstCallbackNode = function () {
	  return J(L);
	};

	exports.unstable_next = function (a) {
	  switch (P) {
	    case 1:
	    case 2:
	    case 3:
	      var b = 3;
	      break;

	    default:
	      b = P;
	  }

	  var c = P;
	  P = b;

	  try {
	    return a();
	  } finally {
	    P = c;
	  }
	};

	exports.unstable_pauseExecution = function () {};

	exports.unstable_requestPaint = W;

	exports.unstable_runWithPriority = function (a, b) {
	  switch (a) {
	    case 1:
	    case 2:
	    case 3:
	    case 4:
	    case 5:
	      break;

	    default:
	      a = 3;
	  }

	  var c = P;
	  P = a;

	  try {
	    return b();
	  } finally {
	    P = c;
	  }
	};

	exports.unstable_scheduleCallback = function (a, b, c) {
	  var d = exports.unstable_now();
	  "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;

	  switch (a) {
	    case 1:
	      var e = -1;
	      break;

	    case 2:
	      e = 250;
	      break;

	    case 5:
	      e = 1073741823;
	      break;

	    case 4:
	      e = 1E4;
	      break;

	    default:
	      e = 5E3;
	  }

	  e = c + e;
	  a = {
	    id: N++,
	    callback: b,
	    priorityLevel: a,
	    startTime: c,
	    expirationTime: e,
	    sortIndex: -1
	  };
	  c > d ? (a.sortIndex = c, H(M, a), null === J(L) && a === J(M) && (S ? h() : S = !0, g(U, c - d))) : (a.sortIndex = e, H(L, a), R || Q || (R = !0, f(V)));
	  return a;
	};

	exports.unstable_wrapCallback = function (a) {
	  var b = P;
	  return function () {
	    var c = P;
	    P = b;

	    try {
	      return a.apply(this, arguments);
	    } finally {
	      P = c;
	    }
	  };
	};
	});
	scheduler_production_min.unstable_now;
	scheduler_production_min.unstable_shouldYield;
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
	scheduler_production_min.unstable_wrapCallback;

	var scheduler_development = createCommonjsModule(function (module, exports) {
	});
	scheduler_development.unstable_now;
	scheduler_development.unstable_shouldYield;
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
	scheduler_development.unstable_wrapCallback;

	var scheduler = createCommonjsModule(function (module) {

	{
	  module.exports = scheduler_production_min;
	}
	});

	function y$2(a) {
	  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);

	  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}

	if (!react) throw Error(y$2(227));
	var ba = new Set(),
	    ca = {};

	function da(a, b) {
	  ea(a, b);
	  ea(a + "Capture", b);
	}

	function ea(a, b) {
	  ca[a] = b;

	  for (a = 0; a < b.length; a++) ba.add(b[a]);
	}

	var fa = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
	    ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	    ia = Object.prototype.hasOwnProperty,
	    ja = {},
	    ka = {};

	function la(a) {
	  if (ia.call(ka, a)) return !0;
	  if (ia.call(ja, a)) return !1;
	  if (ha.test(a)) return ka[a] = !0;
	  ja[a] = !0;
	  return !1;
	}

	function ma(a, b, c, d) {
	  if (null !== c && 0 === c.type) return !1;

	  switch (typeof b) {
	    case "function":
	    case "symbol":
	      return !0;

	    case "boolean":
	      if (d) return !1;
	      if (null !== c) return !c.acceptsBooleans;
	      a = a.toLowerCase().slice(0, 5);
	      return "data-" !== a && "aria-" !== a;

	    default:
	      return !1;
	  }
	}

	function na(a, b, c, d) {
	  if (null === b || "undefined" === typeof b || ma(a, b, c, d)) return !0;
	  if (d) return !1;
	  if (null !== c) switch (c.type) {
	    case 3:
	      return !b;

	    case 4:
	      return !1 === b;

	    case 5:
	      return isNaN(b);

	    case 6:
	      return isNaN(b) || 1 > b;
	  }
	  return !1;
	}

	function B$1(a, b, c, d, e, f, g) {
	  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
	  this.attributeName = d;
	  this.attributeNamespace = e;
	  this.mustUseProperty = c;
	  this.propertyName = a;
	  this.type = b;
	  this.sanitizeURL = f;
	  this.removeEmptyString = g;
	}

	var D$1 = {};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (a) {
	  D$1[a] = new B$1(a, 0, !1, a, null, !1, !1);
	});
	[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (a) {
	  var b = a[0];
	  D$1[b] = new B$1(b, 1, !1, a[1], null, !1, !1);
	});
	["contentEditable", "draggable", "spellCheck", "value"].forEach(function (a) {
	  D$1[a] = new B$1(a, 2, !1, a.toLowerCase(), null, !1, !1);
	});
	["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (a) {
	  D$1[a] = new B$1(a, 2, !1, a, null, !1, !1);
	});
	"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (a) {
	  D$1[a] = new B$1(a, 3, !1, a.toLowerCase(), null, !1, !1);
	});
	["checked", "multiple", "muted", "selected"].forEach(function (a) {
	  D$1[a] = new B$1(a, 3, !0, a, null, !1, !1);
	});
	["capture", "download"].forEach(function (a) {
	  D$1[a] = new B$1(a, 4, !1, a, null, !1, !1);
	});
	["cols", "rows", "size", "span"].forEach(function (a) {
	  D$1[a] = new B$1(a, 6, !1, a, null, !1, !1);
	});
	["rowSpan", "start"].forEach(function (a) {
	  D$1[a] = new B$1(a, 5, !1, a.toLowerCase(), null, !1, !1);
	});
	var oa = /[\-:]([a-z])/g;

	function pa(a) {
	  return a[1].toUpperCase();
	}

	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (a) {
	  var b = a.replace(oa, pa);
	  D$1[b] = new B$1(b, 1, !1, a, null, !1, !1);
	});
	"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (a) {
	  var b = a.replace(oa, pa);
	  D$1[b] = new B$1(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
	});
	["xml:base", "xml:lang", "xml:space"].forEach(function (a) {
	  var b = a.replace(oa, pa);
	  D$1[b] = new B$1(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
	});
	["tabIndex", "crossOrigin"].forEach(function (a) {
	  D$1[a] = new B$1(a, 1, !1, a.toLowerCase(), null, !1, !1);
	});
	D$1.xlinkHref = new B$1("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
	["src", "href", "action", "formAction"].forEach(function (a) {
	  D$1[a] = new B$1(a, 1, !1, a.toLowerCase(), null, !0, !0);
	});

	function qa(a, b, c, d) {
	  var e = D$1.hasOwnProperty(b) ? D$1[b] : null;
	  var f = null !== e ? 0 === e.type : d ? !1 : !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1] ? !1 : !0;
	  f || (na(b, c, e, d) && (c = null), d || null === e ? la(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c))));
	}

	var ra = react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	    sa = 60103,
	    ta = 60106,
	    ua = 60107,
	    wa = 60108,
	    xa = 60114,
	    ya = 60109,
	    za = 60110,
	    Aa = 60112,
	    Ba = 60113,
	    Ca = 60120,
	    Da = 60115,
	    Ea = 60116,
	    Fa = 60121,
	    Ga = 60128,
	    Ha = 60129,
	    Ia = 60130,
	    Ja = 60131;

	if ("function" === typeof Symbol && Symbol.for) {
	  var E$1 = Symbol.for;
	  sa = E$1("react.element");
	  ta = E$1("react.portal");
	  ua = E$1("react.fragment");
	  wa = E$1("react.strict_mode");
	  xa = E$1("react.profiler");
	  ya = E$1("react.provider");
	  za = E$1("react.context");
	  Aa = E$1("react.forward_ref");
	  Ba = E$1("react.suspense");
	  Ca = E$1("react.suspense_list");
	  Da = E$1("react.memo");
	  Ea = E$1("react.lazy");
	  Fa = E$1("react.block");
	  E$1("react.scope");
	  Ga = E$1("react.opaque.id");
	  Ha = E$1("react.debug_trace_mode");
	  Ia = E$1("react.offscreen");
	  Ja = E$1("react.legacy_hidden");
	}

	var Ka = "function" === typeof Symbol && Symbol.iterator;

	function La(a) {
	  if (null === a || "object" !== typeof a) return null;
	  a = Ka && a[Ka] || a["@@iterator"];
	  return "function" === typeof a ? a : null;
	}

	var Ma;

	function Na(a) {
	  if (void 0 === Ma) try {
	    throw Error();
	  } catch (c) {
	    var b = c.stack.trim().match(/\n( *(at )?)/);
	    Ma = b && b[1] || "";
	  }
	  return "\n" + Ma + a;
	}

	var Oa = !1;

	function Pa(a, b) {
	  if (!a || Oa) return "";
	  Oa = !0;
	  var c = Error.prepareStackTrace;
	  Error.prepareStackTrace = void 0;

	  try {
	    if (b) {
	      if (b = function () {
	        throw Error();
	      }, Object.defineProperty(b.prototype, "props", {
	        set: function () {
	          throw Error();
	        }
	      }), "object" === typeof Reflect && Reflect.construct) {
	        try {
	          Reflect.construct(b, []);
	        } catch (k) {
	          var d = k;
	        }

	        Reflect.construct(a, [], b);
	      } else {
	        try {
	          b.call();
	        } catch (k) {
	          d = k;
	        }

	        a.call(b.prototype);
	      }
	    } else {
	      try {
	        throw Error();
	      } catch (k) {
	        d = k;
	      }

	      a();
	    }
	  } catch (k) {
	    if (k && d && "string" === typeof k.stack) {
	      for (var e = k.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h];) h--;

	      for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
	        if (1 !== g || 1 !== h) {
	          do if (g--, h--, 0 > h || e[g] !== f[h]) return "\n" + e[g].replace(" at new ", " at "); while (1 <= g && 0 <= h);
	        }

	        break;
	      }
	    }
	  } finally {
	    Oa = !1, Error.prepareStackTrace = c;
	  }

	  return (a = a ? a.displayName || a.name : "") ? Na(a) : "";
	}

	function Qa(a) {
	  switch (a.tag) {
	    case 5:
	      return Na(a.type);

	    case 16:
	      return Na("Lazy");

	    case 13:
	      return Na("Suspense");

	    case 19:
	      return Na("SuspenseList");

	    case 0:
	    case 2:
	    case 15:
	      return a = Pa(a.type, !1), a;

	    case 11:
	      return a = Pa(a.type.render, !1), a;

	    case 22:
	      return a = Pa(a.type._render, !1), a;

	    case 1:
	      return a = Pa(a.type, !0), a;

	    default:
	      return "";
	  }
	}

	function Ra(a) {
	  if (null == a) return null;
	  if ("function" === typeof a) return a.displayName || a.name || null;
	  if ("string" === typeof a) return a;

	  switch (a) {
	    case ua:
	      return "Fragment";

	    case ta:
	      return "Portal";

	    case xa:
	      return "Profiler";

	    case wa:
	      return "StrictMode";

	    case Ba:
	      return "Suspense";

	    case Ca:
	      return "SuspenseList";
	  }

	  if ("object" === typeof a) switch (a.$$typeof) {
	    case za:
	      return (a.displayName || "Context") + ".Consumer";

	    case ya:
	      return (a._context.displayName || "Context") + ".Provider";

	    case Aa:
	      var b = a.render;
	      b = b.displayName || b.name || "";
	      return a.displayName || ("" !== b ? "ForwardRef(" + b + ")" : "ForwardRef");

	    case Da:
	      return Ra(a.type);

	    case Fa:
	      return Ra(a._render);

	    case Ea:
	      b = a._payload;
	      a = a._init;

	      try {
	        return Ra(a(b));
	      } catch (c) {}

	  }
	  return null;
	}

	function Sa(a) {
	  switch (typeof a) {
	    case "boolean":
	    case "number":
	    case "object":
	    case "string":
	    case "undefined":
	      return a;

	    default:
	      return "";
	  }
	}

	function Ta(a) {
	  var b = a.type;
	  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
	}

	function Ua(a) {
	  var b = Ta(a) ? "checked" : "value",
	      c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b),
	      d = "" + a[b];

	  if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
	    var e = c.get,
	        f = c.set;
	    Object.defineProperty(a, b, {
	      configurable: !0,
	      get: function () {
	        return e.call(this);
	      },
	      set: function (a) {
	        d = "" + a;
	        f.call(this, a);
	      }
	    });
	    Object.defineProperty(a, b, {
	      enumerable: c.enumerable
	    });
	    return {
	      getValue: function () {
	        return d;
	      },
	      setValue: function (a) {
	        d = "" + a;
	      },
	      stopTracking: function () {
	        a._valueTracker = null;
	        delete a[b];
	      }
	    };
	  }
	}

	function Va(a) {
	  a._valueTracker || (a._valueTracker = Ua(a));
	}

	function Wa(a) {
	  if (!a) return !1;
	  var b = a._valueTracker;
	  if (!b) return !0;
	  var c = b.getValue();
	  var d = "";
	  a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
	  a = d;
	  return a !== c ? (b.setValue(a), !0) : !1;
	}

	function Xa(a) {
	  a = a || ("undefined" !== typeof document ? document : void 0);
	  if ("undefined" === typeof a) return null;

	  try {
	    return a.activeElement || a.body;
	  } catch (b) {
	    return a.body;
	  }
	}

	function Ya(a, b) {
	  var c = b.checked;
	  return objectAssign({}, b, {
	    defaultChecked: void 0,
	    defaultValue: void 0,
	    value: void 0,
	    checked: null != c ? c : a._wrapperState.initialChecked
	  });
	}

	function Za(a, b) {
	  var c = null == b.defaultValue ? "" : b.defaultValue,
	      d = null != b.checked ? b.checked : b.defaultChecked;
	  c = Sa(null != b.value ? b.value : c);
	  a._wrapperState = {
	    initialChecked: d,
	    initialValue: c,
	    controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
	  };
	}

	function $a(a, b) {
	  b = b.checked;
	  null != b && qa(a, "checked", b, !1);
	}

	function ab(a, b) {
	  $a(a, b);
	  var c = Sa(b.value),
	      d = b.type;
	  if (null != c) {
	    if ("number" === d) {
	      if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
	    } else a.value !== "" + c && (a.value = "" + c);
	  } else if ("submit" === d || "reset" === d) {
	    a.removeAttribute("value");
	    return;
	  }
	  b.hasOwnProperty("value") ? bb(a, b.type, c) : b.hasOwnProperty("defaultValue") && bb(a, b.type, Sa(b.defaultValue));
	  null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
	}

	function cb(a, b, c) {
	  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
	    var d = b.type;
	    if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
	    b = "" + a._wrapperState.initialValue;
	    c || b === a.value || (a.value = b);
	    a.defaultValue = b;
	  }

	  c = a.name;
	  "" !== c && (a.name = "");
	  a.defaultChecked = !!a._wrapperState.initialChecked;
	  "" !== c && (a.name = c);
	}

	function bb(a, b, c) {
	  if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
	}

	function db(a) {
	  var b = "";
	  react.Children.forEach(a, function (a) {
	    null != a && (b += a);
	  });
	  return b;
	}

	function eb(a, b) {
	  a = objectAssign({
	    children: void 0
	  }, b);
	  if (b = db(b.children)) a.children = b;
	  return a;
	}

	function fb(a, b, c, d) {
	  a = a.options;

	  if (b) {
	    b = {};

	    for (var e = 0; e < c.length; e++) b["$" + c[e]] = !0;

	    for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0);
	  } else {
	    c = "" + Sa(c);
	    b = null;

	    for (e = 0; e < a.length; e++) {
	      if (a[e].value === c) {
	        a[e].selected = !0;
	        d && (a[e].defaultSelected = !0);
	        return;
	      }

	      null !== b || a[e].disabled || (b = a[e]);
	    }

	    null !== b && (b.selected = !0);
	  }
	}

	function gb(a, b) {
	  if (null != b.dangerouslySetInnerHTML) throw Error(y$2(91));
	  return objectAssign({}, b, {
	    value: void 0,
	    defaultValue: void 0,
	    children: "" + a._wrapperState.initialValue
	  });
	}

	function hb(a, b) {
	  var c = b.value;

	  if (null == c) {
	    c = b.children;
	    b = b.defaultValue;

	    if (null != c) {
	      if (null != b) throw Error(y$2(92));

	      if (Array.isArray(c)) {
	        if (!(1 >= c.length)) throw Error(y$2(93));
	        c = c[0];
	      }

	      b = c;
	    }

	    null == b && (b = "");
	    c = b;
	  }

	  a._wrapperState = {
	    initialValue: Sa(c)
	  };
	}

	function ib(a, b) {
	  var c = Sa(b.value),
	      d = Sa(b.defaultValue);
	  null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
	  null != d && (a.defaultValue = "" + d);
	}

	function jb(a) {
	  var b = a.textContent;
	  b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
	}

	var kb = {
	  html: "http://www.w3.org/1999/xhtml",
	  mathml: "http://www.w3.org/1998/Math/MathML",
	  svg: "http://www.w3.org/2000/svg"
	};

	function lb(a) {
	  switch (a) {
	    case "svg":
	      return "http://www.w3.org/2000/svg";

	    case "math":
	      return "http://www.w3.org/1998/Math/MathML";

	    default:
	      return "http://www.w3.org/1999/xhtml";
	  }
	}

	function mb(a, b) {
	  return null == a || "http://www.w3.org/1999/xhtml" === a ? lb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
	}

	var nb,
	    ob = function (a) {
	  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (b, c, d, e) {
	    MSApp.execUnsafeLocalFunction(function () {
	      return a(b, c, d, e);
	    });
	  } : a;
	}(function (a, b) {
	  if (a.namespaceURI !== kb.svg || "innerHTML" in a) a.innerHTML = b;else {
	    nb = nb || document.createElement("div");
	    nb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";

	    for (b = nb.firstChild; a.firstChild;) a.removeChild(a.firstChild);

	    for (; b.firstChild;) a.appendChild(b.firstChild);
	  }
	});

	function pb(a, b) {
	  if (b) {
	    var c = a.firstChild;

	    if (c && c === a.lastChild && 3 === c.nodeType) {
	      c.nodeValue = b;
	      return;
	    }
	  }

	  a.textContent = b;
	}

	var qb = {
	  animationIterationCount: !0,
	  borderImageOutset: !0,
	  borderImageSlice: !0,
	  borderImageWidth: !0,
	  boxFlex: !0,
	  boxFlexGroup: !0,
	  boxOrdinalGroup: !0,
	  columnCount: !0,
	  columns: !0,
	  flex: !0,
	  flexGrow: !0,
	  flexPositive: !0,
	  flexShrink: !0,
	  flexNegative: !0,
	  flexOrder: !0,
	  gridArea: !0,
	  gridRow: !0,
	  gridRowEnd: !0,
	  gridRowSpan: !0,
	  gridRowStart: !0,
	  gridColumn: !0,
	  gridColumnEnd: !0,
	  gridColumnSpan: !0,
	  gridColumnStart: !0,
	  fontWeight: !0,
	  lineClamp: !0,
	  lineHeight: !0,
	  opacity: !0,
	  order: !0,
	  orphans: !0,
	  tabSize: !0,
	  widows: !0,
	  zIndex: !0,
	  zoom: !0,
	  fillOpacity: !0,
	  floodOpacity: !0,
	  stopOpacity: !0,
	  strokeDasharray: !0,
	  strokeDashoffset: !0,
	  strokeMiterlimit: !0,
	  strokeOpacity: !0,
	  strokeWidth: !0
	},
	    rb = ["Webkit", "ms", "Moz", "O"];
	Object.keys(qb).forEach(function (a) {
	  rb.forEach(function (b) {
	    b = b + a.charAt(0).toUpperCase() + a.substring(1);
	    qb[b] = qb[a];
	  });
	});

	function sb(a, b, c) {
	  return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || qb.hasOwnProperty(a) && qb[a] ? ("" + b).trim() : b + "px";
	}

	function tb(a, b) {
	  a = a.style;

	  for (var c in b) if (b.hasOwnProperty(c)) {
	    var d = 0 === c.indexOf("--"),
	        e = sb(c, b[c], d);
	    "float" === c && (c = "cssFloat");
	    d ? a.setProperty(c, e) : a[c] = e;
	  }
	}

	var ub = objectAssign({
	  menuitem: !0
	}, {
	  area: !0,
	  base: !0,
	  br: !0,
	  col: !0,
	  embed: !0,
	  hr: !0,
	  img: !0,
	  input: !0,
	  keygen: !0,
	  link: !0,
	  meta: !0,
	  param: !0,
	  source: !0,
	  track: !0,
	  wbr: !0
	});

	function vb(a, b) {
	  if (b) {
	    if (ub[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(y$2(137, a));

	    if (null != b.dangerouslySetInnerHTML) {
	      if (null != b.children) throw Error(y$2(60));
	      if (!("object" === typeof b.dangerouslySetInnerHTML && "__html" in b.dangerouslySetInnerHTML)) throw Error(y$2(61));
	    }

	    if (null != b.style && "object" !== typeof b.style) throw Error(y$2(62));
	  }
	}

	function wb(a, b) {
	  if (-1 === a.indexOf("-")) return "string" === typeof b.is;

	  switch (a) {
	    case "annotation-xml":
	    case "color-profile":
	    case "font-face":
	    case "font-face-src":
	    case "font-face-uri":
	    case "font-face-format":
	    case "font-face-name":
	    case "missing-glyph":
	      return !1;

	    default:
	      return !0;
	  }
	}

	function xb(a) {
	  a = a.target || a.srcElement || window;
	  a.correspondingUseElement && (a = a.correspondingUseElement);
	  return 3 === a.nodeType ? a.parentNode : a;
	}

	var yb = null,
	    zb = null,
	    Ab = null;

	function Bb(a) {
	  if (a = Cb(a)) {
	    if ("function" !== typeof yb) throw Error(y$2(280));
	    var b = a.stateNode;
	    b && (b = Db(b), yb(a.stateNode, a.type, b));
	  }
	}

	function Eb(a) {
	  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
	}

	function Fb() {
	  if (zb) {
	    var a = zb,
	        b = Ab;
	    Ab = zb = null;
	    Bb(a);
	    if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
	  }
	}

	function Gb(a, b) {
	  return a(b);
	}

	function Hb(a, b, c, d, e) {
	  return a(b, c, d, e);
	}

	function Ib() {}

	var Jb = Gb,
	    Kb = !1,
	    Lb = !1;

	function Mb() {
	  if (null !== zb || null !== Ab) Ib(), Fb();
	}

	function Nb(a, b, c) {
	  if (Lb) return a(b, c);
	  Lb = !0;

	  try {
	    return Jb(a, b, c);
	  } finally {
	    Lb = !1, Mb();
	  }
	}

	function Ob(a, b) {
	  var c = a.stateNode;
	  if (null === c) return null;
	  var d = Db(c);
	  if (null === d) return null;
	  c = d[b];

	  a: switch (b) {
	    case "onClick":
	    case "onClickCapture":
	    case "onDoubleClick":
	    case "onDoubleClickCapture":
	    case "onMouseDown":
	    case "onMouseDownCapture":
	    case "onMouseMove":
	    case "onMouseMoveCapture":
	    case "onMouseUp":
	    case "onMouseUpCapture":
	    case "onMouseEnter":
	      (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
	      a = !d;
	      break a;

	    default:
	      a = !1;
	  }

	  if (a) return null;
	  if (c && "function" !== typeof c) throw Error(y$2(231, b, typeof c));
	  return c;
	}

	var Pb = !1;
	if (fa) try {
	  var Qb = {};
	  Object.defineProperty(Qb, "passive", {
	    get: function () {
	      Pb = !0;
	    }
	  });
	  window.addEventListener("test", Qb, Qb);
	  window.removeEventListener("test", Qb, Qb);
	} catch (a) {
	  Pb = !1;
	}

	function Rb(a, b, c, d, e, f, g, h, k) {
	  var l = Array.prototype.slice.call(arguments, 3);

	  try {
	    b.apply(c, l);
	  } catch (n) {
	    this.onError(n);
	  }
	}

	var Sb = !1,
	    Tb = null,
	    Ub = !1,
	    Vb = null,
	    Wb = {
	  onError: function (a) {
	    Sb = !0;
	    Tb = a;
	  }
	};

	function Xb(a, b, c, d, e, f, g, h, k) {
	  Sb = !1;
	  Tb = null;
	  Rb.apply(Wb, arguments);
	}

	function Yb(a, b, c, d, e, f, g, h, k) {
	  Xb.apply(this, arguments);

	  if (Sb) {
	    if (Sb) {
	      var l = Tb;
	      Sb = !1;
	      Tb = null;
	    } else throw Error(y$2(198));

	    Ub || (Ub = !0, Vb = l);
	  }
	}

	function Zb(a) {
	  var b = a,
	      c = a;
	  if (a.alternate) for (; b.return;) b = b.return;else {
	    a = b;

	    do b = a, 0 !== (b.flags & 1026) && (c = b.return), a = b.return; while (a);
	  }
	  return 3 === b.tag ? c : null;
	}

	function $b(a) {
	  if (13 === a.tag) {
	    var b = a.memoizedState;
	    null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
	    if (null !== b) return b.dehydrated;
	  }

	  return null;
	}

	function ac(a) {
	  if (Zb(a) !== a) throw Error(y$2(188));
	}

	function bc(a) {
	  var b = a.alternate;

	  if (!b) {
	    b = Zb(a);
	    if (null === b) throw Error(y$2(188));
	    return b !== a ? null : a;
	  }

	  for (var c = a, d = b;;) {
	    var e = c.return;
	    if (null === e) break;
	    var f = e.alternate;

	    if (null === f) {
	      d = e.return;

	      if (null !== d) {
	        c = d;
	        continue;
	      }

	      break;
	    }

	    if (e.child === f.child) {
	      for (f = e.child; f;) {
	        if (f === c) return ac(e), a;
	        if (f === d) return ac(e), b;
	        f = f.sibling;
	      }

	      throw Error(y$2(188));
	    }

	    if (c.return !== d.return) c = e, d = f;else {
	      for (var g = !1, h = e.child; h;) {
	        if (h === c) {
	          g = !0;
	          c = e;
	          d = f;
	          break;
	        }

	        if (h === d) {
	          g = !0;
	          d = e;
	          c = f;
	          break;
	        }

	        h = h.sibling;
	      }

	      if (!g) {
	        for (h = f.child; h;) {
	          if (h === c) {
	            g = !0;
	            c = f;
	            d = e;
	            break;
	          }

	          if (h === d) {
	            g = !0;
	            d = f;
	            c = e;
	            break;
	          }

	          h = h.sibling;
	        }

	        if (!g) throw Error(y$2(189));
	      }
	    }
	    if (c.alternate !== d) throw Error(y$2(190));
	  }

	  if (3 !== c.tag) throw Error(y$2(188));
	  return c.stateNode.current === c ? a : b;
	}

	function cc(a) {
	  a = bc(a);
	  if (!a) return null;

	  for (var b = a;;) {
	    if (5 === b.tag || 6 === b.tag) return b;
	    if (b.child) b.child.return = b, b = b.child;else {
	      if (b === a) break;

	      for (; !b.sibling;) {
	        if (!b.return || b.return === a) return null;
	        b = b.return;
	      }

	      b.sibling.return = b.return;
	      b = b.sibling;
	    }
	  }

	  return null;
	}

	function dc(a, b) {
	  for (var c = a.alternate; null !== b;) {
	    if (b === a || b === c) return !0;
	    b = b.return;
	  }

	  return !1;
	}

	var ec,
	    fc,
	    gc,
	    hc,
	    ic = !1,
	    jc = [],
	    kc = null,
	    lc = null,
	    mc = null,
	    nc = new Map(),
	    oc = new Map(),
	    pc = [],
	    qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

	function rc(a, b, c, d, e) {
	  return {
	    blockedOn: a,
	    domEventName: b,
	    eventSystemFlags: c | 16,
	    nativeEvent: e,
	    targetContainers: [d]
	  };
	}

	function sc(a, b) {
	  switch (a) {
	    case "focusin":
	    case "focusout":
	      kc = null;
	      break;

	    case "dragenter":
	    case "dragleave":
	      lc = null;
	      break;

	    case "mouseover":
	    case "mouseout":
	      mc = null;
	      break;

	    case "pointerover":
	    case "pointerout":
	      nc.delete(b.pointerId);
	      break;

	    case "gotpointercapture":
	    case "lostpointercapture":
	      oc.delete(b.pointerId);
	  }
	}

	function tc(a, b, c, d, e, f) {
	  if (null === a || a.nativeEvent !== f) return a = rc(b, c, d, e, f), null !== b && (b = Cb(b), null !== b && fc(b)), a;
	  a.eventSystemFlags |= d;
	  b = a.targetContainers;
	  null !== e && -1 === b.indexOf(e) && b.push(e);
	  return a;
	}

	function uc(a, b, c, d, e) {
	  switch (b) {
	    case "focusin":
	      return kc = tc(kc, a, b, c, d, e), !0;

	    case "dragenter":
	      return lc = tc(lc, a, b, c, d, e), !0;

	    case "mouseover":
	      return mc = tc(mc, a, b, c, d, e), !0;

	    case "pointerover":
	      var f = e.pointerId;
	      nc.set(f, tc(nc.get(f) || null, a, b, c, d, e));
	      return !0;

	    case "gotpointercapture":
	      return f = e.pointerId, oc.set(f, tc(oc.get(f) || null, a, b, c, d, e)), !0;
	  }

	  return !1;
	}

	function vc(a) {
	  var b = wc(a.target);

	  if (null !== b) {
	    var c = Zb(b);
	    if (null !== c) if (b = c.tag, 13 === b) {
	      if (b = $b(c), null !== b) {
	        a.blockedOn = b;
	        hc(a.lanePriority, function () {
	          scheduler.unstable_runWithPriority(a.priority, function () {
	            gc(c);
	          });
	        });
	        return;
	      }
	    } else if (3 === b && c.stateNode.hydrate) {
	      a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
	      return;
	    }
	  }

	  a.blockedOn = null;
	}

	function xc(a) {
	  if (null !== a.blockedOn) return !1;

	  for (var b = a.targetContainers; 0 < b.length;) {
	    var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
	    if (null !== c) return b = Cb(c), null !== b && fc(b), a.blockedOn = c, !1;
	    b.shift();
	  }

	  return !0;
	}

	function zc(a, b, c) {
	  xc(a) && c.delete(b);
	}

	function Ac() {
	  for (ic = !1; 0 < jc.length;) {
	    var a = jc[0];

	    if (null !== a.blockedOn) {
	      a = Cb(a.blockedOn);
	      null !== a && ec(a);
	      break;
	    }

	    for (var b = a.targetContainers; 0 < b.length;) {
	      var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);

	      if (null !== c) {
	        a.blockedOn = c;
	        break;
	      }

	      b.shift();
	    }

	    null === a.blockedOn && jc.shift();
	  }

	  null !== kc && xc(kc) && (kc = null);
	  null !== lc && xc(lc) && (lc = null);
	  null !== mc && xc(mc) && (mc = null);
	  nc.forEach(zc);
	  oc.forEach(zc);
	}

	function Bc(a, b) {
	  a.blockedOn === b && (a.blockedOn = null, ic || (ic = !0, scheduler.unstable_scheduleCallback(scheduler.unstable_NormalPriority, Ac)));
	}

	function Cc(a) {
	  function b(b) {
	    return Bc(b, a);
	  }

	  if (0 < jc.length) {
	    Bc(jc[0], a);

	    for (var c = 1; c < jc.length; c++) {
	      var d = jc[c];
	      d.blockedOn === a && (d.blockedOn = null);
	    }
	  }

	  null !== kc && Bc(kc, a);
	  null !== lc && Bc(lc, a);
	  null !== mc && Bc(mc, a);
	  nc.forEach(b);
	  oc.forEach(b);

	  for (c = 0; c < pc.length; c++) d = pc[c], d.blockedOn === a && (d.blockedOn = null);

	  for (; 0 < pc.length && (c = pc[0], null === c.blockedOn);) vc(c), null === c.blockedOn && pc.shift();
	}

	function Dc(a, b) {
	  var c = {};
	  c[a.toLowerCase()] = b.toLowerCase();
	  c["Webkit" + a] = "webkit" + b;
	  c["Moz" + a] = "moz" + b;
	  return c;
	}

	var Ec = {
	  animationend: Dc("Animation", "AnimationEnd"),
	  animationiteration: Dc("Animation", "AnimationIteration"),
	  animationstart: Dc("Animation", "AnimationStart"),
	  transitionend: Dc("Transition", "TransitionEnd")
	},
	    Fc = {},
	    Gc = {};
	fa && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Ec.animationend.animation, delete Ec.animationiteration.animation, delete Ec.animationstart.animation), "TransitionEvent" in window || delete Ec.transitionend.transition);

	function Hc(a) {
	  if (Fc[a]) return Fc[a];
	  if (!Ec[a]) return a;
	  var b = Ec[a],
	      c;

	  for (c in b) if (b.hasOwnProperty(c) && c in Gc) return Fc[a] = b[c];

	  return a;
	}

	var Ic = Hc("animationend"),
	    Jc = Hc("animationiteration"),
	    Kc = Hc("animationstart"),
	    Lc = Hc("transitionend"),
	    Mc = new Map(),
	    Nc = new Map(),
	    Oc = ["abort", "abort", Ic, "animationEnd", Jc, "animationIteration", Kc, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", Lc, "transitionEnd", "waiting", "waiting"];

	function Pc(a, b) {
	  for (var c = 0; c < a.length; c += 2) {
	    var d = a[c],
	        e = a[c + 1];
	    e = "on" + (e[0].toUpperCase() + e.slice(1));
	    Nc.set(d, b);
	    Mc.set(d, e);
	    da(e, [d]);
	  }
	}

	var Qc = scheduler.unstable_now;
	Qc();
	var F$1 = 8;

	function Rc(a) {
	  if (0 !== (1 & a)) return F$1 = 15, 1;
	  if (0 !== (2 & a)) return F$1 = 14, 2;
	  if (0 !== (4 & a)) return F$1 = 13, 4;
	  var b = 24 & a;
	  if (0 !== b) return F$1 = 12, b;
	  if (0 !== (a & 32)) return F$1 = 11, 32;
	  b = 192 & a;
	  if (0 !== b) return F$1 = 10, b;
	  if (0 !== (a & 256)) return F$1 = 9, 256;
	  b = 3584 & a;
	  if (0 !== b) return F$1 = 8, b;
	  if (0 !== (a & 4096)) return F$1 = 7, 4096;
	  b = 4186112 & a;
	  if (0 !== b) return F$1 = 6, b;
	  b = 62914560 & a;
	  if (0 !== b) return F$1 = 5, b;
	  if (a & 67108864) return F$1 = 4, 67108864;
	  if (0 !== (a & 134217728)) return F$1 = 3, 134217728;
	  b = 805306368 & a;
	  if (0 !== b) return F$1 = 2, b;
	  if (0 !== (1073741824 & a)) return F$1 = 1, 1073741824;
	  F$1 = 8;
	  return a;
	}

	function Sc(a) {
	  switch (a) {
	    case 99:
	      return 15;

	    case 98:
	      return 10;

	    case 97:
	    case 96:
	      return 8;

	    case 95:
	      return 2;

	    default:
	      return 0;
	  }
	}

	function Tc(a) {
	  switch (a) {
	    case 15:
	    case 14:
	      return 99;

	    case 13:
	    case 12:
	    case 11:
	    case 10:
	      return 98;

	    case 9:
	    case 8:
	    case 7:
	    case 6:
	    case 4:
	    case 5:
	      return 97;

	    case 3:
	    case 2:
	    case 1:
	      return 95;

	    case 0:
	      return 90;

	    default:
	      throw Error(y$2(358, a));
	  }
	}

	function Uc(a, b) {
	  var c = a.pendingLanes;
	  if (0 === c) return F$1 = 0;
	  var d = 0,
	      e = 0,
	      f = a.expiredLanes,
	      g = a.suspendedLanes,
	      h = a.pingedLanes;
	  if (0 !== f) d = f, e = F$1 = 15;else if (f = c & 134217727, 0 !== f) {
	    var k = f & ~g;
	    0 !== k ? (d = Rc(k), e = F$1) : (h &= f, 0 !== h && (d = Rc(h), e = F$1));
	  } else f = c & ~g, 0 !== f ? (d = Rc(f), e = F$1) : 0 !== h && (d = Rc(h), e = F$1);
	  if (0 === d) return 0;
	  d = 31 - Vc(d);
	  d = c & ((0 > d ? 0 : 1 << d) << 1) - 1;

	  if (0 !== b && b !== d && 0 === (b & g)) {
	    Rc(b);
	    if (e <= F$1) return b;
	    F$1 = e;
	  }

	  b = a.entangledLanes;
	  if (0 !== b) for (a = a.entanglements, b &= d; 0 < b;) c = 31 - Vc(b), e = 1 << c, d |= a[c], b &= ~e;
	  return d;
	}

	function Wc(a) {
	  a = a.pendingLanes & -1073741825;
	  return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
	}

	function Xc(a, b) {
	  switch (a) {
	    case 15:
	      return 1;

	    case 14:
	      return 2;

	    case 12:
	      return a = Yc(24 & ~b), 0 === a ? Xc(10, b) : a;

	    case 10:
	      return a = Yc(192 & ~b), 0 === a ? Xc(8, b) : a;

	    case 8:
	      return a = Yc(3584 & ~b), 0 === a && (a = Yc(4186112 & ~b), 0 === a && (a = 512)), a;

	    case 2:
	      return b = Yc(805306368 & ~b), 0 === b && (b = 268435456), b;
	  }

	  throw Error(y$2(358, a));
	}

	function Yc(a) {
	  return a & -a;
	}

	function Zc(a) {
	  for (var b = [], c = 0; 31 > c; c++) b.push(a);

	  return b;
	}

	function $c(a, b, c) {
	  a.pendingLanes |= b;
	  var d = b - 1;
	  a.suspendedLanes &= d;
	  a.pingedLanes &= d;
	  a = a.eventTimes;
	  b = 31 - Vc(b);
	  a[b] = c;
	}

	var Vc = Math.clz32 ? Math.clz32 : ad,
	    bd = Math.log,
	    cd = Math.LN2;

	function ad(a) {
	  return 0 === a ? 32 : 31 - (bd(a) / cd | 0) | 0;
	}

	var dd = scheduler.unstable_UserBlockingPriority,
	    ed = scheduler.unstable_runWithPriority,
	    fd = !0;

	function gd(a, b, c, d) {
	  Kb || Ib();
	  var e = hd,
	      f = Kb;
	  Kb = !0;

	  try {
	    Hb(e, a, b, c, d);
	  } finally {
	    (Kb = f) || Mb();
	  }
	}

	function id(a, b, c, d) {
	  ed(dd, hd.bind(null, a, b, c, d));
	}

	function hd(a, b, c, d) {
	  if (fd) {
	    var e;
	    if ((e = 0 === (b & 4)) && 0 < jc.length && -1 < qc.indexOf(a)) a = rc(null, a, b, c, d), jc.push(a);else {
	      var f = yc(a, b, c, d);
	      if (null === f) e && sc(a, d);else {
	        if (e) {
	          if (-1 < qc.indexOf(a)) {
	            a = rc(f, a, b, c, d);
	            jc.push(a);
	            return;
	          }

	          if (uc(f, a, b, c, d)) return;
	          sc(a, d);
	        }

	        jd(a, b, d, null, c);
	      }
	    }
	  }
	}

	function yc(a, b, c, d) {
	  var e = xb(d);
	  e = wc(e);

	  if (null !== e) {
	    var f = Zb(e);
	    if (null === f) e = null;else {
	      var g = f.tag;

	      if (13 === g) {
	        e = $b(f);
	        if (null !== e) return e;
	        e = null;
	      } else if (3 === g) {
	        if (f.stateNode.hydrate) return 3 === f.tag ? f.stateNode.containerInfo : null;
	        e = null;
	      } else f !== e && (e = null);
	    }
	  }

	  jd(a, b, d, e, c);
	  return null;
	}

	var kd = null,
	    ld = null,
	    md = null;

	function nd() {
	  if (md) return md;
	  var a,
	      b = ld,
	      c = b.length,
	      d,
	      e = "value" in kd ? kd.value : kd.textContent,
	      f = e.length;

	  for (a = 0; a < c && b[a] === e[a]; a++);

	  var g = c - a;

	  for (d = 1; d <= g && b[c - d] === e[f - d]; d++);

	  return md = e.slice(a, 1 < d ? 1 - d : void 0);
	}

	function od(a) {
	  var b = a.keyCode;
	  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
	  10 === a && (a = 13);
	  return 32 <= a || 13 === a ? a : 0;
	}

	function pd() {
	  return !0;
	}

	function qd() {
	  return !1;
	}

	function rd(a) {
	  function b(b, d, e, f, g) {
	    this._reactName = b;
	    this._targetInst = e;
	    this.type = d;
	    this.nativeEvent = f;
	    this.target = g;
	    this.currentTarget = null;

	    for (var c in a) a.hasOwnProperty(c) && (b = a[c], this[c] = b ? b(f) : f[c]);

	    this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : !1 === f.returnValue) ? pd : qd;
	    this.isPropagationStopped = qd;
	    return this;
	  }

	  objectAssign(b.prototype, {
	    preventDefault: function () {
	      this.defaultPrevented = !0;
	      var a = this.nativeEvent;
	      a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), this.isDefaultPrevented = pd);
	    },
	    stopPropagation: function () {
	      var a = this.nativeEvent;
	      a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), this.isPropagationStopped = pd);
	    },
	    persist: function () {},
	    isPersistent: pd
	  });
	  return b;
	}

	var sd = {
	  eventPhase: 0,
	  bubbles: 0,
	  cancelable: 0,
	  timeStamp: function (a) {
	    return a.timeStamp || Date.now();
	  },
	  defaultPrevented: 0,
	  isTrusted: 0
	},
	    td = rd(sd),
	    ud = objectAssign({}, sd, {
	  view: 0,
	  detail: 0
	}),
	    vd = rd(ud),
	    wd,
	    xd,
	    yd,
	    Ad = objectAssign({}, ud, {
	  screenX: 0,
	  screenY: 0,
	  clientX: 0,
	  clientY: 0,
	  pageX: 0,
	  pageY: 0,
	  ctrlKey: 0,
	  shiftKey: 0,
	  altKey: 0,
	  metaKey: 0,
	  getModifierState: zd,
	  button: 0,
	  buttons: 0,
	  relatedTarget: function (a) {
	    return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
	  },
	  movementX: function (a) {
	    if ("movementX" in a) return a.movementX;
	    a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
	    return wd;
	  },
	  movementY: function (a) {
	    return "movementY" in a ? a.movementY : xd;
	  }
	}),
	    Bd = rd(Ad),
	    Cd = objectAssign({}, Ad, {
	  dataTransfer: 0
	}),
	    Dd = rd(Cd),
	    Ed = objectAssign({}, ud, {
	  relatedTarget: 0
	}),
	    Fd = rd(Ed),
	    Gd = objectAssign({}, sd, {
	  animationName: 0,
	  elapsedTime: 0,
	  pseudoElement: 0
	}),
	    Hd = rd(Gd),
	    Id = objectAssign({}, sd, {
	  clipboardData: function (a) {
	    return "clipboardData" in a ? a.clipboardData : window.clipboardData;
	  }
	}),
	    Jd = rd(Id),
	    Kd = objectAssign({}, sd, {
	  data: 0
	}),
	    Ld = rd(Kd),
	    Md = {
	  Esc: "Escape",
	  Spacebar: " ",
	  Left: "ArrowLeft",
	  Up: "ArrowUp",
	  Right: "ArrowRight",
	  Down: "ArrowDown",
	  Del: "Delete",
	  Win: "OS",
	  Menu: "ContextMenu",
	  Apps: "ContextMenu",
	  Scroll: "ScrollLock",
	  MozPrintableKey: "Unidentified"
	},
	    Nd = {
	  8: "Backspace",
	  9: "Tab",
	  12: "Clear",
	  13: "Enter",
	  16: "Shift",
	  17: "Control",
	  18: "Alt",
	  19: "Pause",
	  20: "CapsLock",
	  27: "Escape",
	  32: " ",
	  33: "PageUp",
	  34: "PageDown",
	  35: "End",
	  36: "Home",
	  37: "ArrowLeft",
	  38: "ArrowUp",
	  39: "ArrowRight",
	  40: "ArrowDown",
	  45: "Insert",
	  46: "Delete",
	  112: "F1",
	  113: "F2",
	  114: "F3",
	  115: "F4",
	  116: "F5",
	  117: "F6",
	  118: "F7",
	  119: "F8",
	  120: "F9",
	  121: "F10",
	  122: "F11",
	  123: "F12",
	  144: "NumLock",
	  145: "ScrollLock",
	  224: "Meta"
	},
	    Od = {
	  Alt: "altKey",
	  Control: "ctrlKey",
	  Meta: "metaKey",
	  Shift: "shiftKey"
	};

	function Pd(a) {
	  var b = this.nativeEvent;
	  return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : !1;
	}

	function zd() {
	  return Pd;
	}

	var Qd = objectAssign({}, ud, {
	  key: function (a) {
	    if (a.key) {
	      var b = Md[a.key] || a.key;
	      if ("Unidentified" !== b) return b;
	    }

	    return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
	  },
	  code: 0,
	  location: 0,
	  ctrlKey: 0,
	  shiftKey: 0,
	  altKey: 0,
	  metaKey: 0,
	  repeat: 0,
	  locale: 0,
	  getModifierState: zd,
	  charCode: function (a) {
	    return "keypress" === a.type ? od(a) : 0;
	  },
	  keyCode: function (a) {
	    return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
	  },
	  which: function (a) {
	    return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
	  }
	}),
	    Rd = rd(Qd),
	    Sd = objectAssign({}, Ad, {
	  pointerId: 0,
	  width: 0,
	  height: 0,
	  pressure: 0,
	  tangentialPressure: 0,
	  tiltX: 0,
	  tiltY: 0,
	  twist: 0,
	  pointerType: 0,
	  isPrimary: 0
	}),
	    Td = rd(Sd),
	    Ud = objectAssign({}, ud, {
	  touches: 0,
	  targetTouches: 0,
	  changedTouches: 0,
	  altKey: 0,
	  metaKey: 0,
	  ctrlKey: 0,
	  shiftKey: 0,
	  getModifierState: zd
	}),
	    Vd = rd(Ud),
	    Wd = objectAssign({}, sd, {
	  propertyName: 0,
	  elapsedTime: 0,
	  pseudoElement: 0
	}),
	    Xd = rd(Wd),
	    Yd = objectAssign({}, Ad, {
	  deltaX: function (a) {
	    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
	  },
	  deltaY: function (a) {
	    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
	  },
	  deltaZ: 0,
	  deltaMode: 0
	}),
	    Zd = rd(Yd),
	    $d = [9, 13, 27, 32],
	    ae$1 = fa && "CompositionEvent" in window,
	    be = null;
	fa && "documentMode" in document && (be = document.documentMode);
	var ce$1 = fa && "TextEvent" in window && !be,
	    de = fa && (!ae$1 || be && 8 < be && 11 >= be),
	    ee$1 = String.fromCharCode(32),
	    fe$1 = !1;

	function ge(a, b) {
	  switch (a) {
	    case "keyup":
	      return -1 !== $d.indexOf(b.keyCode);

	    case "keydown":
	      return 229 !== b.keyCode;

	    case "keypress":
	    case "mousedown":
	    case "focusout":
	      return !0;

	    default:
	      return !1;
	  }
	}

	function he(a) {
	  a = a.detail;
	  return "object" === typeof a && "data" in a ? a.data : null;
	}

	var ie$1 = !1;

	function je(a, b) {
	  switch (a) {
	    case "compositionend":
	      return he(b);

	    case "keypress":
	      if (32 !== b.which) return null;
	      fe$1 = !0;
	      return ee$1;

	    case "textInput":
	      return a = b.data, a === ee$1 && fe$1 ? null : a;

	    default:
	      return null;
	  }
	}

	function ke(a, b) {
	  if (ie$1) return "compositionend" === a || !ae$1 && ge(a, b) ? (a = nd(), md = ld = kd = null, ie$1 = !1, a) : null;

	  switch (a) {
	    case "paste":
	      return null;

	    case "keypress":
	      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
	        if (b.char && 1 < b.char.length) return b.char;
	        if (b.which) return String.fromCharCode(b.which);
	      }

	      return null;

	    case "compositionend":
	      return de && "ko" !== b.locale ? null : b.data;

	    default:
	      return null;
	  }
	}

	var le$1 = {
	  color: !0,
	  date: !0,
	  datetime: !0,
	  "datetime-local": !0,
	  email: !0,
	  month: !0,
	  number: !0,
	  password: !0,
	  range: !0,
	  search: !0,
	  tel: !0,
	  text: !0,
	  time: !0,
	  url: !0,
	  week: !0
	};

	function me(a) {
	  var b = a && a.nodeName && a.nodeName.toLowerCase();
	  return "input" === b ? !!le$1[a.type] : "textarea" === b ? !0 : !1;
	}

	function ne$1(a, b, c, d) {
	  Eb(d);
	  b = oe$1(b, "onChange");
	  0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({
	    event: c,
	    listeners: b
	  }));
	}

	var pe = null,
	    qe = null;

	function re$1(a) {
	  se$1(a, 0);
	}

	function te$1(a) {
	  var b = ue$1(a);
	  if (Wa(b)) return a;
	}

	function ve$1(a, b) {
	  if ("change" === a) return b;
	}

	var we = !1;

	if (fa) {
	  var xe;

	  if (fa) {
	    var ye = ("oninput" in document);

	    if (!ye) {
	      var ze = document.createElement("div");
	      ze.setAttribute("oninput", "return;");
	      ye = "function" === typeof ze.oninput;
	    }

	    xe = ye;
	  } else xe = !1;

	  we = xe && (!document.documentMode || 9 < document.documentMode);
	}

	function Ae() {
	  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
	}

	function Be(a) {
	  if ("value" === a.propertyName && te$1(qe)) {
	    var b = [];
	    ne$1(b, qe, a, xb(a));
	    a = re$1;
	    if (Kb) a(b);else {
	      Kb = !0;

	      try {
	        Gb(a, b);
	      } finally {
	        Kb = !1, Mb();
	      }
	    }
	  }
	}

	function Ce(a, b, c) {
	  "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
	}

	function De(a) {
	  if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te$1(qe);
	}

	function Ee(a, b) {
	  if ("click" === a) return te$1(b);
	}

	function Fe(a, b) {
	  if ("input" === a || "change" === a) return te$1(b);
	}

	function Ge(a, b) {
	  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
	}

	var He = "function" === typeof Object.is ? Object.is : Ge,
	    Ie = Object.prototype.hasOwnProperty;

	function Je(a, b) {
	  if (He(a, b)) return !0;
	  if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
	  var c = Object.keys(a),
	      d = Object.keys(b);
	  if (c.length !== d.length) return !1;

	  for (d = 0; d < c.length; d++) if (!Ie.call(b, c[d]) || !He(a[c[d]], b[c[d]])) return !1;

	  return !0;
	}

	function Ke(a) {
	  for (; a && a.firstChild;) a = a.firstChild;

	  return a;
	}

	function Le(a, b) {
	  var c = Ke(a);
	  a = 0;

	  for (var d; c;) {
	    if (3 === c.nodeType) {
	      d = a + c.textContent.length;
	      if (a <= b && d >= b) return {
	        node: c,
	        offset: b - a
	      };
	      a = d;
	    }

	    a: {
	      for (; c;) {
	        if (c.nextSibling) {
	          c = c.nextSibling;
	          break a;
	        }

	        c = c.parentNode;
	      }

	      c = void 0;
	    }

	    c = Ke(c);
	  }
	}

	function Me(a, b) {
	  return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? Me(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
	}

	function Ne() {
	  for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement;) {
	    try {
	      var c = "string" === typeof b.contentWindow.location.href;
	    } catch (d) {
	      c = !1;
	    }

	    if (c) a = b.contentWindow;else break;
	    b = Xa(a.document);
	  }

	  return b;
	}

	function Oe(a) {
	  var b = a && a.nodeName && a.nodeName.toLowerCase();
	  return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
	}

	var Pe = fa && "documentMode" in document && 11 >= document.documentMode,
	    Qe = null,
	    Re = null,
	    Se = null,
	    Te = !1;

	function Ue(a, b, c) {
	  var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
	  Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Oe(d) ? d = {
	    start: d.selectionStart,
	    end: d.selectionEnd
	  } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = {
	    anchorNode: d.anchorNode,
	    anchorOffset: d.anchorOffset,
	    focusNode: d.focusNode,
	    focusOffset: d.focusOffset
	  }), Se && Je(Se, d) || (Se = d, d = oe$1(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({
	    event: b,
	    listeners: d
	  }), b.target = Qe)));
	}

	Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
	Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
	Pc(Oc, 2);

	for (var Ve = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), We = 0; We < Ve.length; We++) Nc.set(Ve[We], 0);

	ea("onMouseEnter", ["mouseout", "mouseover"]);
	ea("onMouseLeave", ["mouseout", "mouseover"]);
	ea("onPointerEnter", ["pointerout", "pointerover"]);
	ea("onPointerLeave", ["pointerout", "pointerover"]);
	da("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
	da("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
	da("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
	da("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
	da("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
	da("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var Xe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
	    Ye = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));

	function Ze(a, b, c) {
	  var d = a.type || "unknown-event";
	  a.currentTarget = c;
	  Yb(d, b, void 0, a);
	  a.currentTarget = null;
	}

	function se$1(a, b) {
	  b = 0 !== (b & 4);

	  for (var c = 0; c < a.length; c++) {
	    var d = a[c],
	        e = d.event;
	    d = d.listeners;

	    a: {
	      var f = void 0;
	      if (b) for (var g = d.length - 1; 0 <= g; g--) {
	        var h = d[g],
	            k = h.instance,
	            l = h.currentTarget;
	        h = h.listener;
	        if (k !== f && e.isPropagationStopped()) break a;
	        Ze(e, h, l);
	        f = k;
	      } else for (g = 0; g < d.length; g++) {
	        h = d[g];
	        k = h.instance;
	        l = h.currentTarget;
	        h = h.listener;
	        if (k !== f && e.isPropagationStopped()) break a;
	        Ze(e, h, l);
	        f = k;
	      }
	    }
	  }

	  if (Ub) throw a = Vb, Ub = !1, Vb = null, a;
	}

	function G$1(a, b) {
	  var c = $e(b),
	      d = a + "__bubble";
	  c.has(d) || (af(b, a, 2, !1), c.add(d));
	}

	var bf = "_reactListening" + Math.random().toString(36).slice(2);

	function cf(a) {
	  a[bf] || (a[bf] = !0, ba.forEach(function (b) {
	    Ye.has(b) || df(b, !1, a, null);
	    df(b, !0, a, null);
	  }));
	}

	function df(a, b, c, d) {
	  var e = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
	      f = c;
	  "selectionchange" === a && 9 !== c.nodeType && (f = c.ownerDocument);

	  if (null !== d && !b && Ye.has(a)) {
	    if ("scroll" !== a) return;
	    e |= 2;
	    f = d;
	  }

	  var g = $e(f),
	      h = a + "__" + (b ? "capture" : "bubble");
	  g.has(h) || (b && (e |= 4), af(f, a, e, b), g.add(h));
	}

	function af(a, b, c, d) {
	  var e = Nc.get(b);

	  switch (void 0 === e ? 2 : e) {
	    case 0:
	      e = gd;
	      break;

	    case 1:
	      e = id;
	      break;

	    default:
	      e = hd;
	  }

	  c = e.bind(null, b, c, a);
	  e = void 0;
	  !Pb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = !0);
	  d ? void 0 !== e ? a.addEventListener(b, c, {
	    capture: !0,
	    passive: e
	  }) : a.addEventListener(b, c, !0) : void 0 !== e ? a.addEventListener(b, c, {
	    passive: e
	  }) : a.addEventListener(b, c, !1);
	}

	function jd(a, b, c, d, e) {
	  var f = d;
	  if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (;;) {
	    if (null === d) return;
	    var g = d.tag;

	    if (3 === g || 4 === g) {
	      var h = d.stateNode.containerInfo;
	      if (h === e || 8 === h.nodeType && h.parentNode === e) break;
	      if (4 === g) for (g = d.return; null !== g;) {
	        var k = g.tag;
	        if (3 === k || 4 === k) if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
	        g = g.return;
	      }

	      for (; null !== h;) {
	        g = wc(h);
	        if (null === g) return;
	        k = g.tag;

	        if (5 === k || 6 === k) {
	          d = f = g;
	          continue a;
	        }

	        h = h.parentNode;
	      }
	    }

	    d = d.return;
	  }
	  Nb(function () {
	    var d = f,
	        e = xb(c),
	        g = [];

	    a: {
	      var h = Mc.get(a);

	      if (void 0 !== h) {
	        var k = td,
	            x = a;

	        switch (a) {
	          case "keypress":
	            if (0 === od(c)) break a;

	          case "keydown":
	          case "keyup":
	            k = Rd;
	            break;

	          case "focusin":
	            x = "focus";
	            k = Fd;
	            break;

	          case "focusout":
	            x = "blur";
	            k = Fd;
	            break;

	          case "beforeblur":
	          case "afterblur":
	            k = Fd;
	            break;

	          case "click":
	            if (2 === c.button) break a;

	          case "auxclick":
	          case "dblclick":
	          case "mousedown":
	          case "mousemove":
	          case "mouseup":
	          case "mouseout":
	          case "mouseover":
	          case "contextmenu":
	            k = Bd;
	            break;

	          case "drag":
	          case "dragend":
	          case "dragenter":
	          case "dragexit":
	          case "dragleave":
	          case "dragover":
	          case "dragstart":
	          case "drop":
	            k = Dd;
	            break;

	          case "touchcancel":
	          case "touchend":
	          case "touchmove":
	          case "touchstart":
	            k = Vd;
	            break;

	          case Ic:
	          case Jc:
	          case Kc:
	            k = Hd;
	            break;

	          case Lc:
	            k = Xd;
	            break;

	          case "scroll":
	            k = vd;
	            break;

	          case "wheel":
	            k = Zd;
	            break;

	          case "copy":
	          case "cut":
	          case "paste":
	            k = Jd;
	            break;

	          case "gotpointercapture":
	          case "lostpointercapture":
	          case "pointercancel":
	          case "pointerdown":
	          case "pointermove":
	          case "pointerout":
	          case "pointerover":
	          case "pointerup":
	            k = Td;
	        }

	        var w = 0 !== (b & 4),
	            z = !w && "scroll" === a,
	            u = w ? null !== h ? h + "Capture" : null : h;
	        w = [];

	        for (var t = d, q; null !== t;) {
	          q = t;
	          var v = q.stateNode;
	          5 === q.tag && null !== v && (q = v, null !== u && (v = Ob(t, u), null != v && w.push(ef(t, v, q))));
	          if (z) break;
	          t = t.return;
	        }

	        0 < w.length && (h = new k(h, x, null, c, e), g.push({
	          event: h,
	          listeners: w
	        }));
	      }
	    }

	    if (0 === (b & 7)) {
	      a: {
	        h = "mouseover" === a || "pointerover" === a;
	        k = "mouseout" === a || "pointerout" === a;
	        if (h && 0 === (b & 16) && (x = c.relatedTarget || c.fromElement) && (wc(x) || x[ff])) break a;

	        if (k || h) {
	          h = e.window === e ? e : (h = e.ownerDocument) ? h.defaultView || h.parentWindow : window;

	          if (k) {
	            if (x = c.relatedTarget || c.toElement, k = d, x = x ? wc(x) : null, null !== x && (z = Zb(x), x !== z || 5 !== x.tag && 6 !== x.tag)) x = null;
	          } else k = null, x = d;

	          if (k !== x) {
	            w = Bd;
	            v = "onMouseLeave";
	            u = "onMouseEnter";
	            t = "mouse";
	            if ("pointerout" === a || "pointerover" === a) w = Td, v = "onPointerLeave", u = "onPointerEnter", t = "pointer";
	            z = null == k ? h : ue$1(k);
	            q = null == x ? h : ue$1(x);
	            h = new w(v, t + "leave", k, c, e);
	            h.target = z;
	            h.relatedTarget = q;
	            v = null;
	            wc(e) === d && (w = new w(u, t + "enter", x, c, e), w.target = q, w.relatedTarget = z, v = w);
	            z = v;
	            if (k && x) b: {
	              w = k;
	              u = x;
	              t = 0;

	              for (q = w; q; q = gf(q)) t++;

	              q = 0;

	              for (v = u; v; v = gf(v)) q++;

	              for (; 0 < t - q;) w = gf(w), t--;

	              for (; 0 < q - t;) u = gf(u), q--;

	              for (; t--;) {
	                if (w === u || null !== u && w === u.alternate) break b;
	                w = gf(w);
	                u = gf(u);
	              }

	              w = null;
	            } else w = null;
	            null !== k && hf(g, h, k, w, !1);
	            null !== x && null !== z && hf(g, z, x, w, !0);
	          }
	        }
	      }

	      a: {
	        h = d ? ue$1(d) : window;
	        k = h.nodeName && h.nodeName.toLowerCase();
	        if ("select" === k || "input" === k && "file" === h.type) var J = ve$1;else if (me(h)) {
	          if (we) J = Fe;else {
	            J = De;
	            var K = Ce;
	          }
	        } else (k = h.nodeName) && "input" === k.toLowerCase() && ("checkbox" === h.type || "radio" === h.type) && (J = Ee);

	        if (J && (J = J(a, d))) {
	          ne$1(g, J, c, e);
	          break a;
	        }

	        K && K(a, h, d);
	        "focusout" === a && (K = h._wrapperState) && K.controlled && "number" === h.type && bb(h, "number", h.value);
	      }

	      K = d ? ue$1(d) : window;

	      switch (a) {
	        case "focusin":
	          if (me(K) || "true" === K.contentEditable) Qe = K, Re = d, Se = null;
	          break;

	        case "focusout":
	          Se = Re = Qe = null;
	          break;

	        case "mousedown":
	          Te = !0;
	          break;

	        case "contextmenu":
	        case "mouseup":
	        case "dragend":
	          Te = !1;
	          Ue(g, c, e);
	          break;

	        case "selectionchange":
	          if (Pe) break;

	        case "keydown":
	        case "keyup":
	          Ue(g, c, e);
	      }

	      var Q;
	      if (ae$1) b: {
	        switch (a) {
	          case "compositionstart":
	            var L = "onCompositionStart";
	            break b;

	          case "compositionend":
	            L = "onCompositionEnd";
	            break b;

	          case "compositionupdate":
	            L = "onCompositionUpdate";
	            break b;
	        }

	        L = void 0;
	      } else ie$1 ? ge(a, c) && (L = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (L = "onCompositionStart");
	      L && (de && "ko" !== c.locale && (ie$1 || "onCompositionStart" !== L ? "onCompositionEnd" === L && ie$1 && (Q = nd()) : (kd = e, ld = "value" in kd ? kd.value : kd.textContent, ie$1 = !0)), K = oe$1(d, L), 0 < K.length && (L = new Ld(L, a, null, c, e), g.push({
	        event: L,
	        listeners: K
	      }), Q ? L.data = Q : (Q = he(c), null !== Q && (L.data = Q))));
	      if (Q = ce$1 ? je(a, c) : ke(a, c)) d = oe$1(d, "onBeforeInput"), 0 < d.length && (e = new Ld("onBeforeInput", "beforeinput", null, c, e), g.push({
	        event: e,
	        listeners: d
	      }), e.data = Q);
	    }

	    se$1(g, b);
	  });
	}

	function ef(a, b, c) {
	  return {
	    instance: a,
	    listener: b,
	    currentTarget: c
	  };
	}

	function oe$1(a, b) {
	  for (var c = b + "Capture", d = []; null !== a;) {
	    var e = a,
	        f = e.stateNode;
	    5 === e.tag && null !== f && (e = f, f = Ob(a, c), null != f && d.unshift(ef(a, f, e)), f = Ob(a, b), null != f && d.push(ef(a, f, e)));
	    a = a.return;
	  }

	  return d;
	}

	function gf(a) {
	  if (null === a) return null;

	  do a = a.return; while (a && 5 !== a.tag);

	  return a ? a : null;
	}

	function hf(a, b, c, d, e) {
	  for (var f = b._reactName, g = []; null !== c && c !== d;) {
	    var h = c,
	        k = h.alternate,
	        l = h.stateNode;
	    if (null !== k && k === d) break;
	    5 === h.tag && null !== l && (h = l, e ? (k = Ob(c, f), null != k && g.unshift(ef(c, k, h))) : e || (k = Ob(c, f), null != k && g.push(ef(c, k, h))));
	    c = c.return;
	  }

	  0 !== g.length && a.push({
	    event: b,
	    listeners: g
	  });
	}

	function jf() {}

	var kf = null,
	    lf = null;

	function mf(a, b) {
	  switch (a) {
	    case "button":
	    case "input":
	    case "select":
	    case "textarea":
	      return !!b.autoFocus;
	  }

	  return !1;
	}

	function nf(a, b) {
	  return "textarea" === a || "option" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
	}

	var of = "function" === typeof setTimeout ? setTimeout : void 0,
	    pf = "function" === typeof clearTimeout ? clearTimeout : void 0;

	function qf(a) {
	  1 === a.nodeType ? a.textContent = "" : 9 === a.nodeType && (a = a.body, null != a && (a.textContent = ""));
	}

	function rf(a) {
	  for (; null != a; a = a.nextSibling) {
	    var b = a.nodeType;
	    if (1 === b || 3 === b) break;
	  }

	  return a;
	}

	function sf(a) {
	  a = a.previousSibling;

	  for (var b = 0; a;) {
	    if (8 === a.nodeType) {
	      var c = a.data;

	      if ("$" === c || "$!" === c || "$?" === c) {
	        if (0 === b) return a;
	        b--;
	      } else "/$" === c && b++;
	    }

	    a = a.previousSibling;
	  }

	  return null;
	}

	var tf = 0;

	function uf(a) {
	  return {
	    $$typeof: Ga,
	    toString: a,
	    valueOf: a
	  };
	}

	var vf = Math.random().toString(36).slice(2),
	    wf = "__reactFiber$" + vf,
	    xf = "__reactProps$" + vf,
	    ff = "__reactContainer$" + vf,
	    yf = "__reactEvents$" + vf;

	function wc(a) {
	  var b = a[wf];
	  if (b) return b;

	  for (var c = a.parentNode; c;) {
	    if (b = c[ff] || c[wf]) {
	      c = b.alternate;
	      if (null !== b.child || null !== c && null !== c.child) for (a = sf(a); null !== a;) {
	        if (c = a[wf]) return c;
	        a = sf(a);
	      }
	      return b;
	    }

	    a = c;
	    c = a.parentNode;
	  }

	  return null;
	}

	function Cb(a) {
	  a = a[wf] || a[ff];
	  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
	}

	function ue$1(a) {
	  if (5 === a.tag || 6 === a.tag) return a.stateNode;
	  throw Error(y$2(33));
	}

	function Db(a) {
	  return a[xf] || null;
	}

	function $e(a) {
	  var b = a[yf];
	  void 0 === b && (b = a[yf] = new Set());
	  return b;
	}

	var zf = [],
	    Af = -1;

	function Bf(a) {
	  return {
	    current: a
	  };
	}

	function H$1(a) {
	  0 > Af || (a.current = zf[Af], zf[Af] = null, Af--);
	}

	function I$1(a, b) {
	  Af++;
	  zf[Af] = a.current;
	  a.current = b;
	}

	var Cf = {},
	    M$1 = Bf(Cf),
	    N$1 = Bf(!1),
	    Df = Cf;

	function Ef(a, b) {
	  var c = a.type.contextTypes;
	  if (!c) return Cf;
	  var d = a.stateNode;
	  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
	  var e = {},
	      f;

	  for (f in c) e[f] = b[f];

	  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
	  return e;
	}

	function Ff(a) {
	  a = a.childContextTypes;
	  return null !== a && void 0 !== a;
	}

	function Gf() {
	  H$1(N$1);
	  H$1(M$1);
	}

	function Hf(a, b, c) {
	  if (M$1.current !== Cf) throw Error(y$2(168));
	  I$1(M$1, b);
	  I$1(N$1, c);
	}

	function If(a, b, c) {
	  var d = a.stateNode;
	  a = b.childContextTypes;
	  if ("function" !== typeof d.getChildContext) return c;
	  d = d.getChildContext();

	  for (var e in d) if (!(e in a)) throw Error(y$2(108, Ra(b) || "Unknown", e));

	  return objectAssign({}, c, d);
	}

	function Jf(a) {
	  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Cf;
	  Df = M$1.current;
	  I$1(M$1, a);
	  I$1(N$1, N$1.current);
	  return !0;
	}

	function Kf(a, b, c) {
	  var d = a.stateNode;
	  if (!d) throw Error(y$2(169));
	  c ? (a = If(a, b, Df), d.__reactInternalMemoizedMergedChildContext = a, H$1(N$1), H$1(M$1), I$1(M$1, a)) : H$1(N$1);
	  I$1(N$1, c);
	}

	var Lf = null,
	    Mf = null,
	    Nf = scheduler.unstable_runWithPriority,
	    Of = scheduler.unstable_scheduleCallback,
	    Pf = scheduler.unstable_cancelCallback,
	    Qf = scheduler.unstable_shouldYield,
	    Rf = scheduler.unstable_requestPaint,
	    Sf = scheduler.unstable_now,
	    Tf = scheduler.unstable_getCurrentPriorityLevel,
	    Uf = scheduler.unstable_ImmediatePriority,
	    Vf = scheduler.unstable_UserBlockingPriority,
	    Wf = scheduler.unstable_NormalPriority,
	    Xf = scheduler.unstable_LowPriority,
	    Yf = scheduler.unstable_IdlePriority,
	    Zf = {},
	    $f = void 0 !== Rf ? Rf : function () {},
	    ag = null,
	    bg = null,
	    cg = !1,
	    dg = Sf(),
	    O$1 = 1E4 > dg ? Sf : function () {
	  return Sf() - dg;
	};

	function eg() {
	  switch (Tf()) {
	    case Uf:
	      return 99;

	    case Vf:
	      return 98;

	    case Wf:
	      return 97;

	    case Xf:
	      return 96;

	    case Yf:
	      return 95;

	    default:
	      throw Error(y$2(332));
	  }
	}

	function fg(a) {
	  switch (a) {
	    case 99:
	      return Uf;

	    case 98:
	      return Vf;

	    case 97:
	      return Wf;

	    case 96:
	      return Xf;

	    case 95:
	      return Yf;

	    default:
	      throw Error(y$2(332));
	  }
	}

	function gg(a, b) {
	  a = fg(a);
	  return Nf(a, b);
	}

	function hg(a, b, c) {
	  a = fg(a);
	  return Of(a, b, c);
	}

	function ig() {
	  if (null !== bg) {
	    var a = bg;
	    bg = null;
	    Pf(a);
	  }

	  jg();
	}

	function jg() {
	  if (!cg && null !== ag) {
	    cg = !0;
	    var a = 0;

	    try {
	      var b = ag;
	      gg(99, function () {
	        for (; a < b.length; a++) {
	          var c = b[a];

	          do c = c(!0); while (null !== c);
	        }
	      });
	      ag = null;
	    } catch (c) {
	      throw null !== ag && (ag = ag.slice(a + 1)), Of(Uf, ig), c;
	    } finally {
	      cg = !1;
	    }
	  }
	}

	var kg = ra.ReactCurrentBatchConfig;

	function lg(a, b) {
	  if (a && a.defaultProps) {
	    b = objectAssign({}, b);
	    a = a.defaultProps;

	    for (var c in a) void 0 === b[c] && (b[c] = a[c]);

	    return b;
	  }

	  return b;
	}

	var mg = Bf(null),
	    ng = null,
	    og = null,
	    pg = null;

	function qg() {
	  pg = og = ng = null;
	}

	function rg(a) {
	  var b = mg.current;
	  H$1(mg);
	  a.type._context._currentValue = b;
	}

	function sg(a, b) {
	  for (; null !== a;) {
	    var c = a.alternate;
	    if ((a.childLanes & b) === b) {
	      if (null === c || (c.childLanes & b) === b) break;else c.childLanes |= b;
	    } else a.childLanes |= b, null !== c && (c.childLanes |= b);
	    a = a.return;
	  }
	}

	function tg(a, b) {
	  ng = a;
	  pg = og = null;
	  a = a.dependencies;
	  null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (ug = !0), a.firstContext = null);
	}

	function vg(a, b) {
	  if (pg !== a && !1 !== b && 0 !== b) {
	    if ("number" !== typeof b || 1073741823 === b) pg = a, b = 1073741823;
	    b = {
	      context: a,
	      observedBits: b,
	      next: null
	    };

	    if (null === og) {
	      if (null === ng) throw Error(y$2(308));
	      og = b;
	      ng.dependencies = {
	        lanes: 0,
	        firstContext: b,
	        responders: null
	      };
	    } else og = og.next = b;
	  }

	  return a._currentValue;
	}

	var wg = !1;

	function xg(a) {
	  a.updateQueue = {
	    baseState: a.memoizedState,
	    firstBaseUpdate: null,
	    lastBaseUpdate: null,
	    shared: {
	      pending: null
	    },
	    effects: null
	  };
	}

	function yg(a, b) {
	  a = a.updateQueue;
	  b.updateQueue === a && (b.updateQueue = {
	    baseState: a.baseState,
	    firstBaseUpdate: a.firstBaseUpdate,
	    lastBaseUpdate: a.lastBaseUpdate,
	    shared: a.shared,
	    effects: a.effects
	  });
	}

	function zg(a, b) {
	  return {
	    eventTime: a,
	    lane: b,
	    tag: 0,
	    payload: null,
	    callback: null,
	    next: null
	  };
	}

	function Ag(a, b) {
	  a = a.updateQueue;

	  if (null !== a) {
	    a = a.shared;
	    var c = a.pending;
	    null === c ? b.next = b : (b.next = c.next, c.next = b);
	    a.pending = b;
	  }
	}

	function Bg(a, b) {
	  var c = a.updateQueue,
	      d = a.alternate;

	  if (null !== d && (d = d.updateQueue, c === d)) {
	    var e = null,
	        f = null;
	    c = c.firstBaseUpdate;

	    if (null !== c) {
	      do {
	        var g = {
	          eventTime: c.eventTime,
	          lane: c.lane,
	          tag: c.tag,
	          payload: c.payload,
	          callback: c.callback,
	          next: null
	        };
	        null === f ? e = f = g : f = f.next = g;
	        c = c.next;
	      } while (null !== c);

	      null === f ? e = f = b : f = f.next = b;
	    } else e = f = b;

	    c = {
	      baseState: d.baseState,
	      firstBaseUpdate: e,
	      lastBaseUpdate: f,
	      shared: d.shared,
	      effects: d.effects
	    };
	    a.updateQueue = c;
	    return;
	  }

	  a = c.lastBaseUpdate;
	  null === a ? c.firstBaseUpdate = b : a.next = b;
	  c.lastBaseUpdate = b;
	}

	function Cg(a, b, c, d) {
	  var e = a.updateQueue;
	  wg = !1;
	  var f = e.firstBaseUpdate,
	      g = e.lastBaseUpdate,
	      h = e.shared.pending;

	  if (null !== h) {
	    e.shared.pending = null;
	    var k = h,
	        l = k.next;
	    k.next = null;
	    null === g ? f = l : g.next = l;
	    g = k;
	    var n = a.alternate;

	    if (null !== n) {
	      n = n.updateQueue;
	      var A = n.lastBaseUpdate;
	      A !== g && (null === A ? n.firstBaseUpdate = l : A.next = l, n.lastBaseUpdate = k);
	    }
	  }

	  if (null !== f) {
	    A = e.baseState;
	    g = 0;
	    n = l = k = null;

	    do {
	      h = f.lane;
	      var p = f.eventTime;

	      if ((d & h) === h) {
	        null !== n && (n = n.next = {
	          eventTime: p,
	          lane: 0,
	          tag: f.tag,
	          payload: f.payload,
	          callback: f.callback,
	          next: null
	        });

	        a: {
	          var C = a,
	              x = f;
	          h = b;
	          p = c;

	          switch (x.tag) {
	            case 1:
	              C = x.payload;

	              if ("function" === typeof C) {
	                A = C.call(p, A, h);
	                break a;
	              }

	              A = C;
	              break a;

	            case 3:
	              C.flags = C.flags & -4097 | 64;

	            case 0:
	              C = x.payload;
	              h = "function" === typeof C ? C.call(p, A, h) : C;
	              if (null === h || void 0 === h) break a;
	              A = objectAssign({}, A, h);
	              break a;

	            case 2:
	              wg = !0;
	          }
	        }

	        null !== f.callback && (a.flags |= 32, h = e.effects, null === h ? e.effects = [f] : h.push(f));
	      } else p = {
	        eventTime: p,
	        lane: h,
	        tag: f.tag,
	        payload: f.payload,
	        callback: f.callback,
	        next: null
	      }, null === n ? (l = n = p, k = A) : n = n.next = p, g |= h;

	      f = f.next;
	      if (null === f) if (h = e.shared.pending, null === h) break;else f = h.next, h.next = null, e.lastBaseUpdate = h, e.shared.pending = null;
	    } while (1);

	    null === n && (k = A);
	    e.baseState = k;
	    e.firstBaseUpdate = l;
	    e.lastBaseUpdate = n;
	    Dg |= g;
	    a.lanes = g;
	    a.memoizedState = A;
	  }
	}

	function Eg(a, b, c) {
	  a = b.effects;
	  b.effects = null;
	  if (null !== a) for (b = 0; b < a.length; b++) {
	    var d = a[b],
	        e = d.callback;

	    if (null !== e) {
	      d.callback = null;
	      d = c;
	      if ("function" !== typeof e) throw Error(y$2(191, e));
	      e.call(d);
	    }
	  }
	}

	var Fg = new react.Component().refs;

	function Gg(a, b, c, d) {
	  b = a.memoizedState;
	  c = c(d, b);
	  c = null === c || void 0 === c ? b : objectAssign({}, b, c);
	  a.memoizedState = c;
	  0 === a.lanes && (a.updateQueue.baseState = c);
	}

	var Kg = {
	  isMounted: function (a) {
	    return (a = a._reactInternals) ? Zb(a) === a : !1;
	  },
	  enqueueSetState: function (a, b, c) {
	    a = a._reactInternals;
	    var d = Hg(),
	        e = Ig(a),
	        f = zg(d, e);
	    f.payload = b;
	    void 0 !== c && null !== c && (f.callback = c);
	    Ag(a, f);
	    Jg(a, e, d);
	  },
	  enqueueReplaceState: function (a, b, c) {
	    a = a._reactInternals;
	    var d = Hg(),
	        e = Ig(a),
	        f = zg(d, e);
	    f.tag = 1;
	    f.payload = b;
	    void 0 !== c && null !== c && (f.callback = c);
	    Ag(a, f);
	    Jg(a, e, d);
	  },
	  enqueueForceUpdate: function (a, b) {
	    a = a._reactInternals;
	    var c = Hg(),
	        d = Ig(a),
	        e = zg(c, d);
	    e.tag = 2;
	    void 0 !== b && null !== b && (e.callback = b);
	    Ag(a, e);
	    Jg(a, d, c);
	  }
	};

	function Lg(a, b, c, d, e, f, g) {
	  a = a.stateNode;
	  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Je(c, d) || !Je(e, f) : !0;
	}

	function Mg(a, b, c) {
	  var d = !1,
	      e = Cf;
	  var f = b.contextType;
	  "object" === typeof f && null !== f ? f = vg(f) : (e = Ff(b) ? Df : M$1.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Ef(a, e) : Cf);
	  b = new b(c, f);
	  a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
	  b.updater = Kg;
	  a.stateNode = b;
	  b._reactInternals = a;
	  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
	  return b;
	}

	function Ng(a, b, c, d) {
	  a = b.state;
	  "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
	  "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
	  b.state !== a && Kg.enqueueReplaceState(b, b.state, null);
	}

	function Og(a, b, c, d) {
	  var e = a.stateNode;
	  e.props = c;
	  e.state = a.memoizedState;
	  e.refs = Fg;
	  xg(a);
	  var f = b.contextType;
	  "object" === typeof f && null !== f ? e.context = vg(f) : (f = Ff(b) ? Df : M$1.current, e.context = Ef(a, f));
	  Cg(a, c, e, d);
	  e.state = a.memoizedState;
	  f = b.getDerivedStateFromProps;
	  "function" === typeof f && (Gg(a, b, f, c), e.state = a.memoizedState);
	  "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Kg.enqueueReplaceState(e, e.state, null), Cg(a, c, e, d), e.state = a.memoizedState);
	  "function" === typeof e.componentDidMount && (a.flags |= 4);
	}

	var Pg = Array.isArray;

	function Qg(a, b, c) {
	  a = c.ref;

	  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
	    if (c._owner) {
	      c = c._owner;

	      if (c) {
	        if (1 !== c.tag) throw Error(y$2(309));
	        var d = c.stateNode;
	      }

	      if (!d) throw Error(y$2(147, a));
	      var e = "" + a;
	      if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === e) return b.ref;

	      b = function (a) {
	        var b = d.refs;
	        b === Fg && (b = d.refs = {});
	        null === a ? delete b[e] : b[e] = a;
	      };

	      b._stringRef = e;
	      return b;
	    }

	    if ("string" !== typeof a) throw Error(y$2(284));
	    if (!c._owner) throw Error(y$2(290, a));
	  }

	  return a;
	}

	function Rg(a, b) {
	  if ("textarea" !== a.type) throw Error(y$2(31, "[object Object]" === Object.prototype.toString.call(b) ? "object with keys {" + Object.keys(b).join(", ") + "}" : b));
	}

	function Sg(a) {
	  function b(b, c) {
	    if (a) {
	      var d = b.lastEffect;
	      null !== d ? (d.nextEffect = c, b.lastEffect = c) : b.firstEffect = b.lastEffect = c;
	      c.nextEffect = null;
	      c.flags = 8;
	    }
	  }

	  function c(c, d) {
	    if (!a) return null;

	    for (; null !== d;) b(c, d), d = d.sibling;

	    return null;
	  }

	  function d(a, b) {
	    for (a = new Map(); null !== b;) null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;

	    return a;
	  }

	  function e(a, b) {
	    a = Tg(a, b);
	    a.index = 0;
	    a.sibling = null;
	    return a;
	  }

	  function f(b, c, d) {
	    b.index = d;
	    if (!a) return c;
	    d = b.alternate;
	    if (null !== d) return d = d.index, d < c ? (b.flags = 2, c) : d;
	    b.flags = 2;
	    return c;
	  }

	  function g(b) {
	    a && null === b.alternate && (b.flags = 2);
	    return b;
	  }

	  function h(a, b, c, d) {
	    if (null === b || 6 !== b.tag) return b = Ug(c, a.mode, d), b.return = a, b;
	    b = e(b, c);
	    b.return = a;
	    return b;
	  }

	  function k(a, b, c, d) {
	    if (null !== b && b.elementType === c.type) return d = e(b, c.props), d.ref = Qg(a, b, c), d.return = a, d;
	    d = Vg(c.type, c.key, c.props, null, a.mode, d);
	    d.ref = Qg(a, b, c);
	    d.return = a;
	    return d;
	  }

	  function l(a, b, c, d) {
	    if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = Wg(c, a.mode, d), b.return = a, b;
	    b = e(b, c.children || []);
	    b.return = a;
	    return b;
	  }

	  function n(a, b, c, d, f) {
	    if (null === b || 7 !== b.tag) return b = Xg(c, a.mode, d, f), b.return = a, b;
	    b = e(b, c);
	    b.return = a;
	    return b;
	  }

	  function A(a, b, c) {
	    if ("string" === typeof b || "number" === typeof b) return b = Ug("" + b, a.mode, c), b.return = a, b;

	    if ("object" === typeof b && null !== b) {
	      switch (b.$$typeof) {
	        case sa:
	          return c = Vg(b.type, b.key, b.props, null, a.mode, c), c.ref = Qg(a, null, b), c.return = a, c;

	        case ta:
	          return b = Wg(b, a.mode, c), b.return = a, b;
	      }

	      if (Pg(b) || La(b)) return b = Xg(b, a.mode, c, null), b.return = a, b;
	      Rg(a, b);
	    }

	    return null;
	  }

	  function p(a, b, c, d) {
	    var e = null !== b ? b.key : null;
	    if ("string" === typeof c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);

	    if ("object" === typeof c && null !== c) {
	      switch (c.$$typeof) {
	        case sa:
	          return c.key === e ? c.type === ua ? n(a, b, c.props.children, d, e) : k(a, b, c, d) : null;

	        case ta:
	          return c.key === e ? l(a, b, c, d) : null;
	      }

	      if (Pg(c) || La(c)) return null !== e ? null : n(a, b, c, d, null);
	      Rg(a, c);
	    }

	    return null;
	  }

	  function C(a, b, c, d, e) {
	    if ("string" === typeof d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);

	    if ("object" === typeof d && null !== d) {
	      switch (d.$$typeof) {
	        case sa:
	          return a = a.get(null === d.key ? c : d.key) || null, d.type === ua ? n(b, a, d.props.children, e, d.key) : k(b, a, d, e);

	        case ta:
	          return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);
	      }

	      if (Pg(d) || La(d)) return a = a.get(c) || null, n(b, a, d, e, null);
	      Rg(b, d);
	    }

	    return null;
	  }

	  function x(e, g, h, k) {
	    for (var l = null, t = null, u = g, z = g = 0, q = null; null !== u && z < h.length; z++) {
	      u.index > z ? (q = u, u = null) : q = u.sibling;
	      var n = p(e, u, h[z], k);

	      if (null === n) {
	        null === u && (u = q);
	        break;
	      }

	      a && u && null === n.alternate && b(e, u);
	      g = f(n, g, z);
	      null === t ? l = n : t.sibling = n;
	      t = n;
	      u = q;
	    }

	    if (z === h.length) return c(e, u), l;

	    if (null === u) {
	      for (; z < h.length; z++) u = A(e, h[z], k), null !== u && (g = f(u, g, z), null === t ? l = u : t.sibling = u, t = u);

	      return l;
	    }

	    for (u = d(e, u); z < h.length; z++) q = C(u, e, z, h[z], k), null !== q && (a && null !== q.alternate && u.delete(null === q.key ? z : q.key), g = f(q, g, z), null === t ? l = q : t.sibling = q, t = q);

	    a && u.forEach(function (a) {
	      return b(e, a);
	    });
	    return l;
	  }

	  function w(e, g, h, k) {
	    var l = La(h);
	    if ("function" !== typeof l) throw Error(y$2(150));
	    h = l.call(h);
	    if (null == h) throw Error(y$2(151));

	    for (var t = l = null, u = g, z = g = 0, q = null, n = h.next(); null !== u && !n.done; z++, n = h.next()) {
	      u.index > z ? (q = u, u = null) : q = u.sibling;
	      var w = p(e, u, n.value, k);

	      if (null === w) {
	        null === u && (u = q);
	        break;
	      }

	      a && u && null === w.alternate && b(e, u);
	      g = f(w, g, z);
	      null === t ? l = w : t.sibling = w;
	      t = w;
	      u = q;
	    }

	    if (n.done) return c(e, u), l;

	    if (null === u) {
	      for (; !n.done; z++, n = h.next()) n = A(e, n.value, k), null !== n && (g = f(n, g, z), null === t ? l = n : t.sibling = n, t = n);

	      return l;
	    }

	    for (u = d(e, u); !n.done; z++, n = h.next()) n = C(u, e, z, n.value, k), null !== n && (a && null !== n.alternate && u.delete(null === n.key ? z : n.key), g = f(n, g, z), null === t ? l = n : t.sibling = n, t = n);

	    a && u.forEach(function (a) {
	      return b(e, a);
	    });
	    return l;
	  }

	  return function (a, d, f, h) {
	    var k = "object" === typeof f && null !== f && f.type === ua && null === f.key;
	    k && (f = f.props.children);
	    var l = "object" === typeof f && null !== f;
	    if (l) switch (f.$$typeof) {
	      case sa:
	        a: {
	          l = f.key;

	          for (k = d; null !== k;) {
	            if (k.key === l) {
	              switch (k.tag) {
	                case 7:
	                  if (f.type === ua) {
	                    c(a, k.sibling);
	                    d = e(k, f.props.children);
	                    d.return = a;
	                    a = d;
	                    break a;
	                  }

	                  break;

	                default:
	                  if (k.elementType === f.type) {
	                    c(a, k.sibling);
	                    d = e(k, f.props);
	                    d.ref = Qg(a, k, f);
	                    d.return = a;
	                    a = d;
	                    break a;
	                  }

	              }

	              c(a, k);
	              break;
	            } else b(a, k);

	            k = k.sibling;
	          }

	          f.type === ua ? (d = Xg(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = Vg(f.type, f.key, f.props, null, a.mode, h), h.ref = Qg(a, d, f), h.return = a, a = h);
	        }

	        return g(a);

	      case ta:
	        a: {
	          for (k = f.key; null !== d;) {
	            if (d.key === k) {
	              if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
	                c(a, d.sibling);
	                d = e(d, f.children || []);
	                d.return = a;
	                a = d;
	                break a;
	              } else {
	                c(a, d);
	                break;
	              }
	            } else b(a, d);
	            d = d.sibling;
	          }

	          d = Wg(f, a.mode, h);
	          d.return = a;
	          a = d;
	        }

	        return g(a);
	    }
	    if ("string" === typeof f || "number" === typeof f) return f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), d = Ug(f, a.mode, h), d.return = a, a = d), g(a);
	    if (Pg(f)) return x(a, d, f, h);
	    if (La(f)) return w(a, d, f, h);
	    l && Rg(a, f);
	    if ("undefined" === typeof f && !k) switch (a.tag) {
	      case 1:
	      case 22:
	      case 0:
	      case 11:
	      case 15:
	        throw Error(y$2(152, Ra(a.type) || "Component"));
	    }
	    return c(a, d);
	  };
	}

	var Yg = Sg(!0),
	    Zg = Sg(!1),
	    $g = {},
	    ah = Bf($g),
	    bh = Bf($g),
	    ch = Bf($g);

	function dh(a) {
	  if (a === $g) throw Error(y$2(174));
	  return a;
	}

	function eh(a, b) {
	  I$1(ch, b);
	  I$1(bh, a);
	  I$1(ah, $g);
	  a = b.nodeType;

	  switch (a) {
	    case 9:
	    case 11:
	      b = (b = b.documentElement) ? b.namespaceURI : mb(null, "");
	      break;

	    default:
	      a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = mb(b, a);
	  }

	  H$1(ah);
	  I$1(ah, b);
	}

	function fh() {
	  H$1(ah);
	  H$1(bh);
	  H$1(ch);
	}

	function gh(a) {
	  dh(ch.current);
	  var b = dh(ah.current);
	  var c = mb(b, a.type);
	  b !== c && (I$1(bh, a), I$1(ah, c));
	}

	function hh(a) {
	  bh.current === a && (H$1(ah), H$1(bh));
	}

	var P$1 = Bf(0);

	function ih(a) {
	  for (var b = a; null !== b;) {
	    if (13 === b.tag) {
	      var c = b.memoizedState;
	      if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
	    } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
	      if (0 !== (b.flags & 64)) return b;
	    } else if (null !== b.child) {
	      b.child.return = b;
	      b = b.child;
	      continue;
	    }

	    if (b === a) break;

	    for (; null === b.sibling;) {
	      if (null === b.return || b.return === a) return null;
	      b = b.return;
	    }

	    b.sibling.return = b.return;
	    b = b.sibling;
	  }

	  return null;
	}

	var jh = null,
	    kh = null,
	    lh = !1;

	function mh(a, b) {
	  var c = nh(5, null, null, 0);
	  c.elementType = "DELETED";
	  c.type = "DELETED";
	  c.stateNode = b;
	  c.return = a;
	  c.flags = 8;
	  null !== a.lastEffect ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
	}

	function oh(a, b) {
	  switch (a.tag) {
	    case 5:
	      var c = a.type;
	      b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
	      return null !== b ? (a.stateNode = b, !0) : !1;

	    case 6:
	      return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, !0) : !1;

	    case 13:
	      return !1;

	    default:
	      return !1;
	  }
	}

	function ph(a) {
	  if (lh) {
	    var b = kh;

	    if (b) {
	      var c = b;

	      if (!oh(a, b)) {
	        b = rf(c.nextSibling);

	        if (!b || !oh(a, b)) {
	          a.flags = a.flags & -1025 | 2;
	          lh = !1;
	          jh = a;
	          return;
	        }

	        mh(jh, c);
	      }

	      jh = a;
	      kh = rf(b.firstChild);
	    } else a.flags = a.flags & -1025 | 2, lh = !1, jh = a;
	  }
	}

	function qh(a) {
	  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) a = a.return;

	  jh = a;
	}

	function rh(a) {
	  if (a !== jh) return !1;
	  if (!lh) return qh(a), lh = !0, !1;
	  var b = a.type;
	  if (5 !== a.tag || "head" !== b && "body" !== b && !nf(b, a.memoizedProps)) for (b = kh; b;) mh(a, b), b = rf(b.nextSibling);
	  qh(a);

	  if (13 === a.tag) {
	    a = a.memoizedState;
	    a = null !== a ? a.dehydrated : null;
	    if (!a) throw Error(y$2(317));

	    a: {
	      a = a.nextSibling;

	      for (b = 0; a;) {
	        if (8 === a.nodeType) {
	          var c = a.data;

	          if ("/$" === c) {
	            if (0 === b) {
	              kh = rf(a.nextSibling);
	              break a;
	            }

	            b--;
	          } else "$" !== c && "$!" !== c && "$?" !== c || b++;
	        }

	        a = a.nextSibling;
	      }

	      kh = null;
	    }
	  } else kh = jh ? rf(a.stateNode.nextSibling) : null;

	  return !0;
	}

	function sh() {
	  kh = jh = null;
	  lh = !1;
	}

	var th = [];

	function uh() {
	  for (var a = 0; a < th.length; a++) th[a]._workInProgressVersionPrimary = null;

	  th.length = 0;
	}

	var vh = ra.ReactCurrentDispatcher,
	    wh = ra.ReactCurrentBatchConfig,
	    xh = 0,
	    R$1 = null,
	    S$1 = null,
	    T$1 = null,
	    yh = !1,
	    zh = !1;

	function Ah() {
	  throw Error(y$2(321));
	}

	function Bh(a, b) {
	  if (null === b) return !1;

	  for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return !1;

	  return !0;
	}

	function Ch(a, b, c, d, e, f) {
	  xh = f;
	  R$1 = b;
	  b.memoizedState = null;
	  b.updateQueue = null;
	  b.lanes = 0;
	  vh.current = null === a || null === a.memoizedState ? Dh : Eh;
	  a = c(d, e);

	  if (zh) {
	    f = 0;

	    do {
	      zh = !1;
	      if (!(25 > f)) throw Error(y$2(301));
	      f += 1;
	      T$1 = S$1 = null;
	      b.updateQueue = null;
	      vh.current = Fh;
	      a = c(d, e);
	    } while (zh);
	  }

	  vh.current = Gh;
	  b = null !== S$1 && null !== S$1.next;
	  xh = 0;
	  T$1 = S$1 = R$1 = null;
	  yh = !1;
	  if (b) throw Error(y$2(300));
	  return a;
	}

	function Hh() {
	  var a = {
	    memoizedState: null,
	    baseState: null,
	    baseQueue: null,
	    queue: null,
	    next: null
	  };
	  null === T$1 ? R$1.memoizedState = T$1 = a : T$1 = T$1.next = a;
	  return T$1;
	}

	function Ih() {
	  if (null === S$1) {
	    var a = R$1.alternate;
	    a = null !== a ? a.memoizedState : null;
	  } else a = S$1.next;

	  var b = null === T$1 ? R$1.memoizedState : T$1.next;
	  if (null !== b) T$1 = b, S$1 = a;else {
	    if (null === a) throw Error(y$2(310));
	    S$1 = a;
	    a = {
	      memoizedState: S$1.memoizedState,
	      baseState: S$1.baseState,
	      baseQueue: S$1.baseQueue,
	      queue: S$1.queue,
	      next: null
	    };
	    null === T$1 ? R$1.memoizedState = T$1 = a : T$1 = T$1.next = a;
	  }
	  return T$1;
	}

	function Jh(a, b) {
	  return "function" === typeof b ? b(a) : b;
	}

	function Kh(a) {
	  var b = Ih(),
	      c = b.queue;
	  if (null === c) throw Error(y$2(311));
	  c.lastRenderedReducer = a;
	  var d = S$1,
	      e = d.baseQueue,
	      f = c.pending;

	  if (null !== f) {
	    if (null !== e) {
	      var g = e.next;
	      e.next = f.next;
	      f.next = g;
	    }

	    d.baseQueue = e = f;
	    c.pending = null;
	  }

	  if (null !== e) {
	    e = e.next;
	    d = d.baseState;
	    var h = g = f = null,
	        k = e;

	    do {
	      var l = k.lane;
	      if ((xh & l) === l) null !== h && (h = h.next = {
	        lane: 0,
	        action: k.action,
	        eagerReducer: k.eagerReducer,
	        eagerState: k.eagerState,
	        next: null
	      }), d = k.eagerReducer === a ? k.eagerState : a(d, k.action);else {
	        var n = {
	          lane: l,
	          action: k.action,
	          eagerReducer: k.eagerReducer,
	          eagerState: k.eagerState,
	          next: null
	        };
	        null === h ? (g = h = n, f = d) : h = h.next = n;
	        R$1.lanes |= l;
	        Dg |= l;
	      }
	      k = k.next;
	    } while (null !== k && k !== e);

	    null === h ? f = d : h.next = g;
	    He(d, b.memoizedState) || (ug = !0);
	    b.memoizedState = d;
	    b.baseState = f;
	    b.baseQueue = h;
	    c.lastRenderedState = d;
	  }

	  return [b.memoizedState, c.dispatch];
	}

	function Lh(a) {
	  var b = Ih(),
	      c = b.queue;
	  if (null === c) throw Error(y$2(311));
	  c.lastRenderedReducer = a;
	  var d = c.dispatch,
	      e = c.pending,
	      f = b.memoizedState;

	  if (null !== e) {
	    c.pending = null;
	    var g = e = e.next;

	    do f = a(f, g.action), g = g.next; while (g !== e);

	    He(f, b.memoizedState) || (ug = !0);
	    b.memoizedState = f;
	    null === b.baseQueue && (b.baseState = f);
	    c.lastRenderedState = f;
	  }

	  return [f, d];
	}

	function Mh(a, b, c) {
	  var d = b._getVersion;
	  d = d(b._source);
	  var e = b._workInProgressVersionPrimary;
	  if (null !== e) a = e === d;else if (a = a.mutableReadLanes, a = (xh & a) === a) b._workInProgressVersionPrimary = d, th.push(b);
	  if (a) return c(b._source);
	  th.push(b);
	  throw Error(y$2(350));
	}

	function Nh(a, b, c, d) {
	  var e = U$1;
	  if (null === e) throw Error(y$2(349));
	  var f = b._getVersion,
	      g = f(b._source),
	      h = vh.current,
	      k = h.useState(function () {
	    return Mh(e, b, c);
	  }),
	      l = k[1],
	      n = k[0];
	  k = T$1;
	  var A = a.memoizedState,
	      p = A.refs,
	      C = p.getSnapshot,
	      x = A.source;
	  A = A.subscribe;
	  var w = R$1;
	  a.memoizedState = {
	    refs: p,
	    source: b,
	    subscribe: d
	  };
	  h.useEffect(function () {
	    p.getSnapshot = c;
	    p.setSnapshot = l;
	    var a = f(b._source);

	    if (!He(g, a)) {
	      a = c(b._source);
	      He(n, a) || (l(a), a = Ig(w), e.mutableReadLanes |= a & e.pendingLanes);
	      a = e.mutableReadLanes;
	      e.entangledLanes |= a;

	      for (var d = e.entanglements, h = a; 0 < h;) {
	        var k = 31 - Vc(h),
	            v = 1 << k;
	        d[k] |= a;
	        h &= ~v;
	      }
	    }
	  }, [c, b, d]);
	  h.useEffect(function () {
	    return d(b._source, function () {
	      var a = p.getSnapshot,
	          c = p.setSnapshot;

	      try {
	        c(a(b._source));
	        var d = Ig(w);
	        e.mutableReadLanes |= d & e.pendingLanes;
	      } catch (q) {
	        c(function () {
	          throw q;
	        });
	      }
	    });
	  }, [b, d]);
	  He(C, c) && He(x, b) && He(A, d) || (a = {
	    pending: null,
	    dispatch: null,
	    lastRenderedReducer: Jh,
	    lastRenderedState: n
	  }, a.dispatch = l = Oh.bind(null, R$1, a), k.queue = a, k.baseQueue = null, n = Mh(e, b, c), k.memoizedState = k.baseState = n);
	  return n;
	}

	function Ph(a, b, c) {
	  var d = Ih();
	  return Nh(d, a, b, c);
	}

	function Qh(a) {
	  var b = Hh();
	  "function" === typeof a && (a = a());
	  b.memoizedState = b.baseState = a;
	  a = b.queue = {
	    pending: null,
	    dispatch: null,
	    lastRenderedReducer: Jh,
	    lastRenderedState: a
	  };
	  a = a.dispatch = Oh.bind(null, R$1, a);
	  return [b.memoizedState, a];
	}

	function Rh(a, b, c, d) {
	  a = {
	    tag: a,
	    create: b,
	    destroy: c,
	    deps: d,
	    next: null
	  };
	  b = R$1.updateQueue;
	  null === b ? (b = {
	    lastEffect: null
	  }, R$1.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
	  return a;
	}

	function Sh(a) {
	  var b = Hh();
	  a = {
	    current: a
	  };
	  return b.memoizedState = a;
	}

	function Th() {
	  return Ih().memoizedState;
	}

	function Uh(a, b, c, d) {
	  var e = Hh();
	  R$1.flags |= a;
	  e.memoizedState = Rh(1 | b, c, void 0, void 0 === d ? null : d);
	}

	function Vh(a, b, c, d) {
	  var e = Ih();
	  d = void 0 === d ? null : d;
	  var f = void 0;

	  if (null !== S$1) {
	    var g = S$1.memoizedState;
	    f = g.destroy;

	    if (null !== d && Bh(d, g.deps)) {
	      Rh(b, c, f, d);
	      return;
	    }
	  }

	  R$1.flags |= a;
	  e.memoizedState = Rh(1 | b, c, f, d);
	}

	function Wh(a, b) {
	  return Uh(516, 4, a, b);
	}

	function Xh(a, b) {
	  return Vh(516, 4, a, b);
	}

	function Yh(a, b) {
	  return Vh(4, 2, a, b);
	}

	function Zh(a, b) {
	  if ("function" === typeof b) return a = a(), b(a), function () {
	    b(null);
	  };
	  if (null !== b && void 0 !== b) return a = a(), b.current = a, function () {
	    b.current = null;
	  };
	}

	function $h(a, b, c) {
	  c = null !== c && void 0 !== c ? c.concat([a]) : null;
	  return Vh(4, 2, Zh.bind(null, b, a), c);
	}

	function ai() {}

	function bi(a, b) {
	  var c = Ih();
	  b = void 0 === b ? null : b;
	  var d = c.memoizedState;
	  if (null !== d && null !== b && Bh(b, d[1])) return d[0];
	  c.memoizedState = [a, b];
	  return a;
	}

	function ci(a, b) {
	  var c = Ih();
	  b = void 0 === b ? null : b;
	  var d = c.memoizedState;
	  if (null !== d && null !== b && Bh(b, d[1])) return d[0];
	  a = a();
	  c.memoizedState = [a, b];
	  return a;
	}

	function di(a, b) {
	  var c = eg();
	  gg(98 > c ? 98 : c, function () {
	    a(!0);
	  });
	  gg(97 < c ? 97 : c, function () {
	    var c = wh.transition;
	    wh.transition = 1;

	    try {
	      a(!1), b();
	    } finally {
	      wh.transition = c;
	    }
	  });
	}

	function Oh(a, b, c) {
	  var d = Hg(),
	      e = Ig(a),
	      f = {
	    lane: e,
	    action: c,
	    eagerReducer: null,
	    eagerState: null,
	    next: null
	  },
	      g = b.pending;
	  null === g ? f.next = f : (f.next = g.next, g.next = f);
	  b.pending = f;
	  g = a.alternate;
	  if (a === R$1 || null !== g && g === R$1) zh = yh = !0;else {
	    if (0 === a.lanes && (null === g || 0 === g.lanes) && (g = b.lastRenderedReducer, null !== g)) try {
	      var h = b.lastRenderedState,
	          k = g(h, c);
	      f.eagerReducer = g;
	      f.eagerState = k;
	      if (He(k, h)) return;
	    } catch (l) {} finally {}
	    Jg(a, e, d);
	  }
	}

	var Gh = {
	  readContext: vg,
	  useCallback: Ah,
	  useContext: Ah,
	  useEffect: Ah,
	  useImperativeHandle: Ah,
	  useLayoutEffect: Ah,
	  useMemo: Ah,
	  useReducer: Ah,
	  useRef: Ah,
	  useState: Ah,
	  useDebugValue: Ah,
	  useDeferredValue: Ah,
	  useTransition: Ah,
	  useMutableSource: Ah,
	  useOpaqueIdentifier: Ah,
	  unstable_isNewReconciler: !1
	},
	    Dh = {
	  readContext: vg,
	  useCallback: function (a, b) {
	    Hh().memoizedState = [a, void 0 === b ? null : b];
	    return a;
	  },
	  useContext: vg,
	  useEffect: Wh,
	  useImperativeHandle: function (a, b, c) {
	    c = null !== c && void 0 !== c ? c.concat([a]) : null;
	    return Uh(4, 2, Zh.bind(null, b, a), c);
	  },
	  useLayoutEffect: function (a, b) {
	    return Uh(4, 2, a, b);
	  },
	  useMemo: function (a, b) {
	    var c = Hh();
	    b = void 0 === b ? null : b;
	    a = a();
	    c.memoizedState = [a, b];
	    return a;
	  },
	  useReducer: function (a, b, c) {
	    var d = Hh();
	    b = void 0 !== c ? c(b) : b;
	    d.memoizedState = d.baseState = b;
	    a = d.queue = {
	      pending: null,
	      dispatch: null,
	      lastRenderedReducer: a,
	      lastRenderedState: b
	    };
	    a = a.dispatch = Oh.bind(null, R$1, a);
	    return [d.memoizedState, a];
	  },
	  useRef: Sh,
	  useState: Qh,
	  useDebugValue: ai,
	  useDeferredValue: function (a) {
	    var b = Qh(a),
	        c = b[0],
	        d = b[1];
	    Wh(function () {
	      var b = wh.transition;
	      wh.transition = 1;

	      try {
	        d(a);
	      } finally {
	        wh.transition = b;
	      }
	    }, [a]);
	    return c;
	  },
	  useTransition: function () {
	    var a = Qh(!1),
	        b = a[0];
	    a = di.bind(null, a[1]);
	    Sh(a);
	    return [a, b];
	  },
	  useMutableSource: function (a, b, c) {
	    var d = Hh();
	    d.memoizedState = {
	      refs: {
	        getSnapshot: b,
	        setSnapshot: null
	      },
	      source: a,
	      subscribe: c
	    };
	    return Nh(d, a, b, c);
	  },
	  useOpaqueIdentifier: function () {
	    if (lh) {
	      var a = !1,
	          b = uf(function () {
	        a || (a = !0, c("r:" + (tf++).toString(36)));
	        throw Error(y$2(355));
	      }),
	          c = Qh(b)[1];
	      0 === (R$1.mode & 2) && (R$1.flags |= 516, Rh(5, function () {
	        c("r:" + (tf++).toString(36));
	      }, void 0, null));
	      return b;
	    }

	    b = "r:" + (tf++).toString(36);
	    Qh(b);
	    return b;
	  },
	  unstable_isNewReconciler: !1
	},
	    Eh = {
	  readContext: vg,
	  useCallback: bi,
	  useContext: vg,
	  useEffect: Xh,
	  useImperativeHandle: $h,
	  useLayoutEffect: Yh,
	  useMemo: ci,
	  useReducer: Kh,
	  useRef: Th,
	  useState: function () {
	    return Kh(Jh);
	  },
	  useDebugValue: ai,
	  useDeferredValue: function (a) {
	    var b = Kh(Jh),
	        c = b[0],
	        d = b[1];
	    Xh(function () {
	      var b = wh.transition;
	      wh.transition = 1;

	      try {
	        d(a);
	      } finally {
	        wh.transition = b;
	      }
	    }, [a]);
	    return c;
	  },
	  useTransition: function () {
	    var a = Kh(Jh)[0];
	    return [Th().current, a];
	  },
	  useMutableSource: Ph,
	  useOpaqueIdentifier: function () {
	    return Kh(Jh)[0];
	  },
	  unstable_isNewReconciler: !1
	},
	    Fh = {
	  readContext: vg,
	  useCallback: bi,
	  useContext: vg,
	  useEffect: Xh,
	  useImperativeHandle: $h,
	  useLayoutEffect: Yh,
	  useMemo: ci,
	  useReducer: Lh,
	  useRef: Th,
	  useState: function () {
	    return Lh(Jh);
	  },
	  useDebugValue: ai,
	  useDeferredValue: function (a) {
	    var b = Lh(Jh),
	        c = b[0],
	        d = b[1];
	    Xh(function () {
	      var b = wh.transition;
	      wh.transition = 1;

	      try {
	        d(a);
	      } finally {
	        wh.transition = b;
	      }
	    }, [a]);
	    return c;
	  },
	  useTransition: function () {
	    var a = Lh(Jh)[0];
	    return [Th().current, a];
	  },
	  useMutableSource: Ph,
	  useOpaqueIdentifier: function () {
	    return Lh(Jh)[0];
	  },
	  unstable_isNewReconciler: !1
	},
	    ei = ra.ReactCurrentOwner,
	    ug = !1;

	function fi(a, b, c, d) {
	  b.child = null === a ? Zg(b, null, c, d) : Yg(b, a.child, c, d);
	}

	function gi(a, b, c, d, e) {
	  c = c.render;
	  var f = b.ref;
	  tg(b, e);
	  d = Ch(a, b, c, d, f, e);
	  if (null !== a && !ug) return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi(a, b, e);
	  b.flags |= 1;
	  fi(a, b, d, e);
	  return b.child;
	}

	function ii(a, b, c, d, e, f) {
	  if (null === a) {
	    var g = c.type;
	    if ("function" === typeof g && !ji(g) && void 0 === g.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = g, ki(a, b, g, d, e, f);
	    a = Vg(c.type, null, d, b, b.mode, f);
	    a.ref = b.ref;
	    a.return = b;
	    return b.child = a;
	  }

	  g = a.child;
	  if (0 === (e & f) && (e = g.memoizedProps, c = c.compare, c = null !== c ? c : Je, c(e, d) && a.ref === b.ref)) return hi(a, b, f);
	  b.flags |= 1;
	  a = Tg(g, d);
	  a.ref = b.ref;
	  a.return = b;
	  return b.child = a;
	}

	function ki(a, b, c, d, e, f) {
	  if (null !== a && Je(a.memoizedProps, d) && a.ref === b.ref) if (ug = !1, 0 !== (f & e)) 0 !== (a.flags & 16384) && (ug = !0);else return b.lanes = a.lanes, hi(a, b, f);
	  return li(a, b, c, d, f);
	}

	function mi(a, b, c) {
	  var d = b.pendingProps,
	      e = d.children,
	      f = null !== a ? a.memoizedState : null;
	  if ("hidden" === d.mode || "unstable-defer-without-hiding" === d.mode) {
	    if (0 === (b.mode & 4)) b.memoizedState = {
	      baseLanes: 0
	    }, ni(b, c);else if (0 !== (c & 1073741824)) b.memoizedState = {
	      baseLanes: 0
	    }, ni(b, null !== f ? f.baseLanes : c);else return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
	      baseLanes: a
	    }, ni(b, a), null;
	  } else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, ni(b, d);
	  fi(a, b, e, c);
	  return b.child;
	}

	function oi(a, b) {
	  var c = b.ref;
	  if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 128;
	}

	function li(a, b, c, d, e) {
	  var f = Ff(c) ? Df : M$1.current;
	  f = Ef(b, f);
	  tg(b, e);
	  c = Ch(a, b, c, d, f, e);
	  if (null !== a && !ug) return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi(a, b, e);
	  b.flags |= 1;
	  fi(a, b, c, e);
	  return b.child;
	}

	function pi(a, b, c, d, e) {
	  if (Ff(c)) {
	    var f = !0;
	    Jf(b);
	  } else f = !1;

	  tg(b, e);
	  if (null === b.stateNode) null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2), Mg(b, c, d), Og(b, c, d, e), d = !0;else if (null === a) {
	    var g = b.stateNode,
	        h = b.memoizedProps;
	    g.props = h;
	    var k = g.context,
	        l = c.contextType;
	    "object" === typeof l && null !== l ? l = vg(l) : (l = Ff(c) ? Df : M$1.current, l = Ef(b, l));
	    var n = c.getDerivedStateFromProps,
	        A = "function" === typeof n || "function" === typeof g.getSnapshotBeforeUpdate;
	    A || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Ng(b, g, d, l);
	    wg = !1;
	    var p = b.memoizedState;
	    g.state = p;
	    Cg(b, d, g, e);
	    k = b.memoizedState;
	    h !== d || p !== k || N$1.current || wg ? ("function" === typeof n && (Gg(b, c, n, d), k = b.memoizedState), (h = wg || Lg(b, c, h, d, p, k, l)) ? (A || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4)) : ("function" === typeof g.componentDidMount && (b.flags |= 4), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4), d = !1);
	  } else {
	    g = b.stateNode;
	    yg(a, b);
	    h = b.memoizedProps;
	    l = b.type === b.elementType ? h : lg(b.type, h);
	    g.props = l;
	    A = b.pendingProps;
	    p = g.context;
	    k = c.contextType;
	    "object" === typeof k && null !== k ? k = vg(k) : (k = Ff(c) ? Df : M$1.current, k = Ef(b, k));
	    var C = c.getDerivedStateFromProps;
	    (n = "function" === typeof C || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== A || p !== k) && Ng(b, g, d, k);
	    wg = !1;
	    p = b.memoizedState;
	    g.state = p;
	    Cg(b, d, g, e);
	    var x = b.memoizedState;
	    h !== A || p !== x || N$1.current || wg ? ("function" === typeof C && (Gg(b, c, C, d), x = b.memoizedState), (l = wg || Lg(b, c, l, d, p, x, k)) ? (n || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, x, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, x, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 256)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), b.memoizedProps = d, b.memoizedState = x), g.props = d, g.state = x, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), d = !1);
	  }
	  return qi(a, b, c, d, f, e);
	}

	function qi(a, b, c, d, e, f) {
	  oi(a, b);
	  var g = 0 !== (b.flags & 64);
	  if (!d && !g) return e && Kf(b, c, !1), hi(a, b, f);
	  d = b.stateNode;
	  ei.current = b;
	  var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
	  b.flags |= 1;
	  null !== a && g ? (b.child = Yg(b, a.child, null, f), b.child = Yg(b, null, h, f)) : fi(a, b, h, f);
	  b.memoizedState = d.state;
	  e && Kf(b, c, !0);
	  return b.child;
	}

	function ri(a) {
	  var b = a.stateNode;
	  b.pendingContext ? Hf(a, b.pendingContext, b.pendingContext !== b.context) : b.context && Hf(a, b.context, !1);
	  eh(a, b.containerInfo);
	}

	var si = {
	  dehydrated: null,
	  retryLane: 0
	};

	function ti(a, b, c) {
	  var d = b.pendingProps,
	      e = P$1.current,
	      f = !1,
	      g;
	  (g = 0 !== (b.flags & 64)) || (g = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
	  g ? (f = !0, b.flags &= -65) : null !== a && null === a.memoizedState || void 0 === d.fallback || !0 === d.unstable_avoidThisFallback || (e |= 1);
	  I$1(P$1, e & 1);

	  if (null === a) {
	    void 0 !== d.fallback && ph(b);
	    a = d.children;
	    e = d.fallback;
	    if (f) return a = ui(b, a, e, c), b.child.memoizedState = {
	      baseLanes: c
	    }, b.memoizedState = si, a;
	    if ("number" === typeof d.unstable_expectedLoadTime) return a = ui(b, a, e, c), b.child.memoizedState = {
	      baseLanes: c
	    }, b.memoizedState = si, b.lanes = 33554432, a;
	    c = vi({
	      mode: "visible",
	      children: a
	    }, b.mode, c, null);
	    c.return = b;
	    return b.child = c;
	  }

	  if (null !== a.memoizedState) {
	    if (f) return d = wi(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = null === e ? {
	      baseLanes: c
	    } : {
	      baseLanes: e.baseLanes | c
	    }, f.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
	    c = xi(a, b, d.children, c);
	    b.memoizedState = null;
	    return c;
	  }

	  if (f) return d = wi(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = null === e ? {
	    baseLanes: c
	  } : {
	    baseLanes: e.baseLanes | c
	  }, f.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
	  c = xi(a, b, d.children, c);
	  b.memoizedState = null;
	  return c;
	}

	function ui(a, b, c, d) {
	  var e = a.mode,
	      f = a.child;
	  b = {
	    mode: "hidden",
	    children: b
	  };
	  0 === (e & 2) && null !== f ? (f.childLanes = 0, f.pendingProps = b) : f = vi(b, e, 0, null);
	  c = Xg(c, e, d, null);
	  f.return = a;
	  c.return = a;
	  f.sibling = c;
	  a.child = f;
	  return c;
	}

	function xi(a, b, c, d) {
	  var e = a.child;
	  a = e.sibling;
	  c = Tg(e, {
	    mode: "visible",
	    children: c
	  });
	  0 === (b.mode & 2) && (c.lanes = d);
	  c.return = b;
	  c.sibling = null;
	  null !== a && (a.nextEffect = null, a.flags = 8, b.firstEffect = b.lastEffect = a);
	  return b.child = c;
	}

	function wi(a, b, c, d, e) {
	  var f = b.mode,
	      g = a.child;
	  a = g.sibling;
	  var h = {
	    mode: "hidden",
	    children: c
	  };
	  0 === (f & 2) && b.child !== g ? (c = b.child, c.childLanes = 0, c.pendingProps = h, g = c.lastEffect, null !== g ? (b.firstEffect = c.firstEffect, b.lastEffect = g, g.nextEffect = null) : b.firstEffect = b.lastEffect = null) : c = Tg(g, h);
	  null !== a ? d = Tg(a, d) : (d = Xg(d, f, e, null), d.flags |= 2);
	  d.return = b;
	  c.return = b;
	  c.sibling = d;
	  b.child = c;
	  return d;
	}

	function yi(a, b) {
	  a.lanes |= b;
	  var c = a.alternate;
	  null !== c && (c.lanes |= b);
	  sg(a.return, b);
	}

	function zi(a, b, c, d, e, f) {
	  var g = a.memoizedState;
	  null === g ? a.memoizedState = {
	    isBackwards: b,
	    rendering: null,
	    renderingStartTime: 0,
	    last: d,
	    tail: c,
	    tailMode: e,
	    lastEffect: f
	  } : (g.isBackwards = b, g.rendering = null, g.renderingStartTime = 0, g.last = d, g.tail = c, g.tailMode = e, g.lastEffect = f);
	}

	function Ai(a, b, c) {
	  var d = b.pendingProps,
	      e = d.revealOrder,
	      f = d.tail;
	  fi(a, b, d.children, c);
	  d = P$1.current;
	  if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 64;else {
	    if (null !== a && 0 !== (a.flags & 64)) a: for (a = b.child; null !== a;) {
	      if (13 === a.tag) null !== a.memoizedState && yi(a, c);else if (19 === a.tag) yi(a, c);else if (null !== a.child) {
	        a.child.return = a;
	        a = a.child;
	        continue;
	      }
	      if (a === b) break a;

	      for (; null === a.sibling;) {
	        if (null === a.return || a.return === b) break a;
	        a = a.return;
	      }

	      a.sibling.return = a.return;
	      a = a.sibling;
	    }
	    d &= 1;
	  }
	  I$1(P$1, d);
	  if (0 === (b.mode & 2)) b.memoizedState = null;else switch (e) {
	    case "forwards":
	      c = b.child;

	      for (e = null; null !== c;) a = c.alternate, null !== a && null === ih(a) && (e = c), c = c.sibling;

	      c = e;
	      null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
	      zi(b, !1, e, c, f, b.lastEffect);
	      break;

	    case "backwards":
	      c = null;
	      e = b.child;

	      for (b.child = null; null !== e;) {
	        a = e.alternate;

	        if (null !== a && null === ih(a)) {
	          b.child = e;
	          break;
	        }

	        a = e.sibling;
	        e.sibling = c;
	        c = e;
	        e = a;
	      }

	      zi(b, !0, c, null, f, b.lastEffect);
	      break;

	    case "together":
	      zi(b, !1, null, null, void 0, b.lastEffect);
	      break;

	    default:
	      b.memoizedState = null;
	  }
	  return b.child;
	}

	function hi(a, b, c) {
	  null !== a && (b.dependencies = a.dependencies);
	  Dg |= b.lanes;

	  if (0 !== (c & b.childLanes)) {
	    if (null !== a && b.child !== a.child) throw Error(y$2(153));

	    if (null !== b.child) {
	      a = b.child;
	      c = Tg(a, a.pendingProps);
	      b.child = c;

	      for (c.return = b; null !== a.sibling;) a = a.sibling, c = c.sibling = Tg(a, a.pendingProps), c.return = b;

	      c.sibling = null;
	    }

	    return b.child;
	  }

	  return null;
	}

	var Bi, Ci, Di, Ei;

	Bi = function (a, b) {
	  for (var c = b.child; null !== c;) {
	    if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);else if (4 !== c.tag && null !== c.child) {
	      c.child.return = c;
	      c = c.child;
	      continue;
	    }
	    if (c === b) break;

	    for (; null === c.sibling;) {
	      if (null === c.return || c.return === b) return;
	      c = c.return;
	    }

	    c.sibling.return = c.return;
	    c = c.sibling;
	  }
	};

	Ci = function () {};

	Di = function (a, b, c, d) {
	  var e = a.memoizedProps;

	  if (e !== d) {
	    a = b.stateNode;
	    dh(ah.current);
	    var f = null;

	    switch (c) {
	      case "input":
	        e = Ya(a, e);
	        d = Ya(a, d);
	        f = [];
	        break;

	      case "option":
	        e = eb(a, e);
	        d = eb(a, d);
	        f = [];
	        break;

	      case "select":
	        e = objectAssign({}, e, {
	          value: void 0
	        });
	        d = objectAssign({}, d, {
	          value: void 0
	        });
	        f = [];
	        break;

	      case "textarea":
	        e = gb(a, e);
	        d = gb(a, d);
	        f = [];
	        break;

	      default:
	        "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = jf);
	    }

	    vb(c, d);
	    var g;
	    c = null;

	    for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
	      var h = e[l];

	      for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
	    } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ca.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));

	    for (l in d) {
	      var k = d[l];
	      h = null != e ? e[l] : void 0;
	      if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) {
	        if (h) {
	          for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");

	          for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
	        } else c || (f || (f = []), f.push(l, c)), c = k;
	      } else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ca.hasOwnProperty(l) ? (null != k && "onScroll" === l && G$1("scroll", a), f || h === k || (f = [])) : "object" === typeof k && null !== k && k.$$typeof === Ga ? k.toString() : (f = f || []).push(l, k));
	    }

	    c && (f = f || []).push("style", c);
	    var l = f;
	    if (b.updateQueue = l) b.flags |= 4;
	  }
	};

	Ei = function (a, b, c, d) {
	  c !== d && (b.flags |= 4);
	};

	function Fi(a, b) {
	  if (!lh) switch (a.tailMode) {
	    case "hidden":
	      b = a.tail;

	      for (var c = null; null !== b;) null !== b.alternate && (c = b), b = b.sibling;

	      null === c ? a.tail = null : c.sibling = null;
	      break;

	    case "collapsed":
	      c = a.tail;

	      for (var d = null; null !== c;) null !== c.alternate && (d = c), c = c.sibling;

	      null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
	  }
	}

	function Gi(a, b, c) {
	  var d = b.pendingProps;

	  switch (b.tag) {
	    case 2:
	    case 16:
	    case 15:
	    case 0:
	    case 11:
	    case 7:
	    case 8:
	    case 12:
	    case 9:
	    case 14:
	      return null;

	    case 1:
	      return Ff(b.type) && Gf(), null;

	    case 3:
	      fh();
	      H$1(N$1);
	      H$1(M$1);
	      uh();
	      d = b.stateNode;
	      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
	      if (null === a || null === a.child) rh(b) ? b.flags |= 4 : d.hydrate || (b.flags |= 256);
	      Ci(b);
	      return null;

	    case 5:
	      hh(b);
	      var e = dh(ch.current);
	      c = b.type;
	      if (null !== a && null != b.stateNode) Di(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 128);else {
	        if (!d) {
	          if (null === b.stateNode) throw Error(y$2(166));
	          return null;
	        }

	        a = dh(ah.current);

	        if (rh(b)) {
	          d = b.stateNode;
	          c = b.type;
	          var f = b.memoizedProps;
	          d[wf] = b;
	          d[xf] = f;

	          switch (c) {
	            case "dialog":
	              G$1("cancel", d);
	              G$1("close", d);
	              break;

	            case "iframe":
	            case "object":
	            case "embed":
	              G$1("load", d);
	              break;

	            case "video":
	            case "audio":
	              for (a = 0; a < Xe.length; a++) G$1(Xe[a], d);

	              break;

	            case "source":
	              G$1("error", d);
	              break;

	            case "img":
	            case "image":
	            case "link":
	              G$1("error", d);
	              G$1("load", d);
	              break;

	            case "details":
	              G$1("toggle", d);
	              break;

	            case "input":
	              Za(d, f);
	              G$1("invalid", d);
	              break;

	            case "select":
	              d._wrapperState = {
	                wasMultiple: !!f.multiple
	              };
	              G$1("invalid", d);
	              break;

	            case "textarea":
	              hb(d, f), G$1("invalid", d);
	          }

	          vb(c, f);
	          a = null;

	          for (var g in f) f.hasOwnProperty(g) && (e = f[g], "children" === g ? "string" === typeof e ? d.textContent !== e && (a = ["children", e]) : "number" === typeof e && d.textContent !== "" + e && (a = ["children", "" + e]) : ca.hasOwnProperty(g) && null != e && "onScroll" === g && G$1("scroll", d));

	          switch (c) {
	            case "input":
	              Va(d);
	              cb(d, f, !0);
	              break;

	            case "textarea":
	              Va(d);
	              jb(d);
	              break;

	            case "select":
	            case "option":
	              break;

	            default:
	              "function" === typeof f.onClick && (d.onclick = jf);
	          }

	          d = a;
	          b.updateQueue = d;
	          null !== d && (b.flags |= 4);
	        } else {
	          g = 9 === e.nodeType ? e : e.ownerDocument;
	          a === kb.html && (a = lb(c));
	          a === kb.html ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script>\x3c/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, {
	            is: d.is
	          }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = !0 : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
	          a[wf] = b;
	          a[xf] = d;
	          Bi(a, b, !1, !1);
	          b.stateNode = a;
	          g = wb(c, d);

	          switch (c) {
	            case "dialog":
	              G$1("cancel", a);
	              G$1("close", a);
	              e = d;
	              break;

	            case "iframe":
	            case "object":
	            case "embed":
	              G$1("load", a);
	              e = d;
	              break;

	            case "video":
	            case "audio":
	              for (e = 0; e < Xe.length; e++) G$1(Xe[e], a);

	              e = d;
	              break;

	            case "source":
	              G$1("error", a);
	              e = d;
	              break;

	            case "img":
	            case "image":
	            case "link":
	              G$1("error", a);
	              G$1("load", a);
	              e = d;
	              break;

	            case "details":
	              G$1("toggle", a);
	              e = d;
	              break;

	            case "input":
	              Za(a, d);
	              e = Ya(a, d);
	              G$1("invalid", a);
	              break;

	            case "option":
	              e = eb(a, d);
	              break;

	            case "select":
	              a._wrapperState = {
	                wasMultiple: !!d.multiple
	              };
	              e = objectAssign({}, d, {
	                value: void 0
	              });
	              G$1("invalid", a);
	              break;

	            case "textarea":
	              hb(a, d);
	              e = gb(a, d);
	              G$1("invalid", a);
	              break;

	            default:
	              e = d;
	          }

	          vb(c, e);
	          var h = e;

	          for (f in h) if (h.hasOwnProperty(f)) {
	            var k = h[f];
	            "style" === f ? tb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && ob(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && pb(a, k) : "number" === typeof k && pb(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ca.hasOwnProperty(f) ? null != k && "onScroll" === f && G$1("scroll", a) : null != k && qa(a, f, k, g));
	          }

	          switch (c) {
	            case "input":
	              Va(a);
	              cb(a, d, !1);
	              break;

	            case "textarea":
	              Va(a);
	              jb(a);
	              break;

	            case "option":
	              null != d.value && a.setAttribute("value", "" + Sa(d.value));
	              break;

	            case "select":
	              a.multiple = !!d.multiple;
	              f = d.value;
	              null != f ? fb(a, !!d.multiple, f, !1) : null != d.defaultValue && fb(a, !!d.multiple, d.defaultValue, !0);
	              break;

	            default:
	              "function" === typeof e.onClick && (a.onclick = jf);
	          }

	          mf(c, d) && (b.flags |= 4);
	        }

	        null !== b.ref && (b.flags |= 128);
	      }
	      return null;

	    case 6:
	      if (a && null != b.stateNode) Ei(a, b, a.memoizedProps, d);else {
	        if ("string" !== typeof d && null === b.stateNode) throw Error(y$2(166));
	        c = dh(ch.current);
	        dh(ah.current);
	        rh(b) ? (d = b.stateNode, c = b.memoizedProps, d[wf] = b, d.nodeValue !== c && (b.flags |= 4)) : (d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[wf] = b, b.stateNode = d);
	      }
	      return null;

	    case 13:
	      H$1(P$1);
	      d = b.memoizedState;
	      if (0 !== (b.flags & 64)) return b.lanes = c, b;
	      d = null !== d;
	      c = !1;
	      null === a ? void 0 !== b.memoizedProps.fallback && rh(b) : c = null !== a.memoizedState;
	      if (d && !c && 0 !== (b.mode & 2)) if (null === a && !0 !== b.memoizedProps.unstable_avoidThisFallback || 0 !== (P$1.current & 1)) 0 === V$1 && (V$1 = 3);else {
	        if (0 === V$1 || 3 === V$1) V$1 = 4;
	        null === U$1 || 0 === (Dg & 134217727) && 0 === (Hi & 134217727) || Ii(U$1, W);
	      }
	      if (d || c) b.flags |= 4;
	      return null;

	    case 4:
	      return fh(), Ci(b), null === a && cf(b.stateNode.containerInfo), null;

	    case 10:
	      return rg(b), null;

	    case 17:
	      return Ff(b.type) && Gf(), null;

	    case 19:
	      H$1(P$1);
	      d = b.memoizedState;
	      if (null === d) return null;
	      f = 0 !== (b.flags & 64);
	      g = d.rendering;
	      if (null === g) {
	        if (f) Fi(d, !1);else {
	          if (0 !== V$1 || null !== a && 0 !== (a.flags & 64)) for (a = b.child; null !== a;) {
	            g = ih(a);

	            if (null !== g) {
	              b.flags |= 64;
	              Fi(d, !1);
	              f = g.updateQueue;
	              null !== f && (b.updateQueue = f, b.flags |= 4);
	              null === d.lastEffect && (b.firstEffect = null);
	              b.lastEffect = d.lastEffect;
	              d = c;

	              for (c = b.child; null !== c;) f = c, a = d, f.flags &= 2, f.nextEffect = null, f.firstEffect = null, f.lastEffect = null, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : {
	                lanes: a.lanes,
	                firstContext: a.firstContext
	              }), c = c.sibling;

	              I$1(P$1, P$1.current & 1 | 2);
	              return b.child;
	            }

	            a = a.sibling;
	          }
	          null !== d.tail && O$1() > Ji && (b.flags |= 64, f = !0, Fi(d, !1), b.lanes = 33554432);
	        }
	      } else {
	        if (!f) if (a = ih(g), null !== a) {
	          if (b.flags |= 64, f = !0, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Fi(d, !0), null === d.tail && "hidden" === d.tailMode && !g.alternate && !lh) return b = b.lastEffect = d.lastEffect, null !== b && (b.nextEffect = null), null;
	        } else 2 * O$1() - d.renderingStartTime > Ji && 1073741824 !== c && (b.flags |= 64, f = !0, Fi(d, !1), b.lanes = 33554432);
	        d.isBackwards ? (g.sibling = b.child, b.child = g) : (c = d.last, null !== c ? c.sibling = g : b.child = g, d.last = g);
	      }
	      return null !== d.tail ? (c = d.tail, d.rendering = c, d.tail = c.sibling, d.lastEffect = b.lastEffect, d.renderingStartTime = O$1(), c.sibling = null, b = P$1.current, I$1(P$1, f ? b & 1 | 2 : b & 1), c) : null;

	    case 23:
	    case 24:
	      return Ki(), null !== a && null !== a.memoizedState !== (null !== b.memoizedState) && "unstable-defer-without-hiding" !== d.mode && (b.flags |= 4), null;
	  }

	  throw Error(y$2(156, b.tag));
	}

	function Li(a) {
	  switch (a.tag) {
	    case 1:
	      Ff(a.type) && Gf();
	      var b = a.flags;
	      return b & 4096 ? (a.flags = b & -4097 | 64, a) : null;

	    case 3:
	      fh();
	      H$1(N$1);
	      H$1(M$1);
	      uh();
	      b = a.flags;
	      if (0 !== (b & 64)) throw Error(y$2(285));
	      a.flags = b & -4097 | 64;
	      return a;

	    case 5:
	      return hh(a), null;

	    case 13:
	      return H$1(P$1), b = a.flags, b & 4096 ? (a.flags = b & -4097 | 64, a) : null;

	    case 19:
	      return H$1(P$1), null;

	    case 4:
	      return fh(), null;

	    case 10:
	      return rg(a), null;

	    case 23:
	    case 24:
	      return Ki(), null;

	    default:
	      return null;
	  }
	}

	function Mi(a, b) {
	  try {
	    var c = "",
	        d = b;

	    do c += Qa(d), d = d.return; while (d);

	    var e = c;
	  } catch (f) {
	    e = "\nError generating stack: " + f.message + "\n" + f.stack;
	  }

	  return {
	    value: a,
	    source: b,
	    stack: e
	  };
	}

	function Ni(a, b) {
	  try {
	    console.error(b.value);
	  } catch (c) {
	    setTimeout(function () {
	      throw c;
	    });
	  }
	}

	var Oi = "function" === typeof WeakMap ? WeakMap : Map;

	function Pi(a, b, c) {
	  c = zg(-1, c);
	  c.tag = 3;
	  c.payload = {
	    element: null
	  };
	  var d = b.value;

	  c.callback = function () {
	    Qi || (Qi = !0, Ri = d);
	    Ni(a, b);
	  };

	  return c;
	}

	function Si(a, b, c) {
	  c = zg(-1, c);
	  c.tag = 3;
	  var d = a.type.getDerivedStateFromError;

	  if ("function" === typeof d) {
	    var e = b.value;

	    c.payload = function () {
	      Ni(a, b);
	      return d(e);
	    };
	  }

	  var f = a.stateNode;
	  null !== f && "function" === typeof f.componentDidCatch && (c.callback = function () {
	    "function" !== typeof d && (null === Ti ? Ti = new Set([this]) : Ti.add(this), Ni(a, b));
	    var c = b.stack;
	    this.componentDidCatch(b.value, {
	      componentStack: null !== c ? c : ""
	    });
	  });
	  return c;
	}

	var Ui = "function" === typeof WeakSet ? WeakSet : Set;

	function Vi(a) {
	  var b = a.ref;
	  if (null !== b) if ("function" === typeof b) try {
	    b(null);
	  } catch (c) {
	    Wi(a, c);
	  } else b.current = null;
	}

	function Xi(a, b) {
	  switch (b.tag) {
	    case 0:
	    case 11:
	    case 15:
	    case 22:
	      return;

	    case 1:
	      if (b.flags & 256 && null !== a) {
	        var c = a.memoizedProps,
	            d = a.memoizedState;
	        a = b.stateNode;
	        b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : lg(b.type, c), d);
	        a.__reactInternalSnapshotBeforeUpdate = b;
	      }

	      return;

	    case 3:
	      b.flags & 256 && qf(b.stateNode.containerInfo);
	      return;

	    case 5:
	    case 6:
	    case 4:
	    case 17:
	      return;
	  }

	  throw Error(y$2(163));
	}

	function Yi(a, b, c) {
	  switch (c.tag) {
	    case 0:
	    case 11:
	    case 15:
	    case 22:
	      b = c.updateQueue;
	      b = null !== b ? b.lastEffect : null;

	      if (null !== b) {
	        a = b = b.next;

	        do {
	          if (3 === (a.tag & 3)) {
	            var d = a.create;
	            a.destroy = d();
	          }

	          a = a.next;
	        } while (a !== b);
	      }

	      b = c.updateQueue;
	      b = null !== b ? b.lastEffect : null;

	      if (null !== b) {
	        a = b = b.next;

	        do {
	          var e = a;
	          d = e.next;
	          e = e.tag;
	          0 !== (e & 4) && 0 !== (e & 1) && (Zi(c, a), $i(c, a));
	          a = d;
	        } while (a !== b);
	      }

	      return;

	    case 1:
	      a = c.stateNode;
	      c.flags & 4 && (null === b ? a.componentDidMount() : (d = c.elementType === c.type ? b.memoizedProps : lg(c.type, b.memoizedProps), a.componentDidUpdate(d, b.memoizedState, a.__reactInternalSnapshotBeforeUpdate)));
	      b = c.updateQueue;
	      null !== b && Eg(c, b, a);
	      return;

	    case 3:
	      b = c.updateQueue;

	      if (null !== b) {
	        a = null;
	        if (null !== c.child) switch (c.child.tag) {
	          case 5:
	            a = c.child.stateNode;
	            break;

	          case 1:
	            a = c.child.stateNode;
	        }
	        Eg(c, b, a);
	      }

	      return;

	    case 5:
	      a = c.stateNode;
	      null === b && c.flags & 4 && mf(c.type, c.memoizedProps) && a.focus();
	      return;

	    case 6:
	      return;

	    case 4:
	      return;

	    case 12:
	      return;

	    case 13:
	      null === c.memoizedState && (c = c.alternate, null !== c && (c = c.memoizedState, null !== c && (c = c.dehydrated, null !== c && Cc(c))));
	      return;

	    case 19:
	    case 17:
	    case 20:
	    case 21:
	    case 23:
	    case 24:
	      return;
	  }

	  throw Error(y$2(163));
	}

	function aj(a, b) {
	  for (var c = a;;) {
	    if (5 === c.tag) {
	      var d = c.stateNode;
	      if (b) d = d.style, "function" === typeof d.setProperty ? d.setProperty("display", "none", "important") : d.display = "none";else {
	        d = c.stateNode;
	        var e = c.memoizedProps.style;
	        e = void 0 !== e && null !== e && e.hasOwnProperty("display") ? e.display : null;
	        d.style.display = sb("display", e);
	      }
	    } else if (6 === c.tag) c.stateNode.nodeValue = b ? "" : c.memoizedProps;else if ((23 !== c.tag && 24 !== c.tag || null === c.memoizedState || c === a) && null !== c.child) {
	      c.child.return = c;
	      c = c.child;
	      continue;
	    }

	    if (c === a) break;

	    for (; null === c.sibling;) {
	      if (null === c.return || c.return === a) return;
	      c = c.return;
	    }

	    c.sibling.return = c.return;
	    c = c.sibling;
	  }
	}

	function bj(a, b) {
	  if (Mf && "function" === typeof Mf.onCommitFiberUnmount) try {
	    Mf.onCommitFiberUnmount(Lf, b);
	  } catch (f) {}

	  switch (b.tag) {
	    case 0:
	    case 11:
	    case 14:
	    case 15:
	    case 22:
	      a = b.updateQueue;

	      if (null !== a && (a = a.lastEffect, null !== a)) {
	        var c = a = a.next;

	        do {
	          var d = c,
	              e = d.destroy;
	          d = d.tag;
	          if (void 0 !== e) if (0 !== (d & 4)) Zi(b, c);else {
	            d = b;

	            try {
	              e();
	            } catch (f) {
	              Wi(d, f);
	            }
	          }
	          c = c.next;
	        } while (c !== a);
	      }

	      break;

	    case 1:
	      Vi(b);
	      a = b.stateNode;
	      if ("function" === typeof a.componentWillUnmount) try {
	        a.props = b.memoizedProps, a.state = b.memoizedState, a.componentWillUnmount();
	      } catch (f) {
	        Wi(b, f);
	      }
	      break;

	    case 5:
	      Vi(b);
	      break;

	    case 4:
	      cj(a, b);
	  }
	}

	function dj(a) {
	  a.alternate = null;
	  a.child = null;
	  a.dependencies = null;
	  a.firstEffect = null;
	  a.lastEffect = null;
	  a.memoizedProps = null;
	  a.memoizedState = null;
	  a.pendingProps = null;
	  a.return = null;
	  a.updateQueue = null;
	}

	function ej(a) {
	  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
	}

	function fj(a) {
	  a: {
	    for (var b = a.return; null !== b;) {
	      if (ej(b)) break a;
	      b = b.return;
	    }

	    throw Error(y$2(160));
	  }

	  var c = b;
	  b = c.stateNode;

	  switch (c.tag) {
	    case 5:
	      var d = !1;
	      break;

	    case 3:
	      b = b.containerInfo;
	      d = !0;
	      break;

	    case 4:
	      b = b.containerInfo;
	      d = !0;
	      break;

	    default:
	      throw Error(y$2(161));
	  }

	  c.flags & 16 && (pb(b, ""), c.flags &= -17);

	  a: b: for (c = a;;) {
	    for (; null === c.sibling;) {
	      if (null === c.return || ej(c.return)) {
	        c = null;
	        break a;
	      }

	      c = c.return;
	    }

	    c.sibling.return = c.return;

	    for (c = c.sibling; 5 !== c.tag && 6 !== c.tag && 18 !== c.tag;) {
	      if (c.flags & 2) continue b;
	      if (null === c.child || 4 === c.tag) continue b;else c.child.return = c, c = c.child;
	    }

	    if (!(c.flags & 2)) {
	      c = c.stateNode;
	      break a;
	    }
	  }

	  d ? gj(a, c, b) : hj(a, c, b);
	}

	function gj(a, b, c) {
	  var d = a.tag,
	      e = 5 === d || 6 === d;
	  if (e) a = e ? a.stateNode : a.stateNode.instance, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = jf));else if (4 !== d && (a = a.child, null !== a)) for (gj(a, b, c), a = a.sibling; null !== a;) gj(a, b, c), a = a.sibling;
	}

	function hj(a, b, c) {
	  var d = a.tag,
	      e = 5 === d || 6 === d;
	  if (e) a = e ? a.stateNode : a.stateNode.instance, b ? c.insertBefore(a, b) : c.appendChild(a);else if (4 !== d && (a = a.child, null !== a)) for (hj(a, b, c), a = a.sibling; null !== a;) hj(a, b, c), a = a.sibling;
	}

	function cj(a, b) {
	  for (var c = b, d = !1, e, f;;) {
	    if (!d) {
	      d = c.return;

	      a: for (;;) {
	        if (null === d) throw Error(y$2(160));
	        e = d.stateNode;

	        switch (d.tag) {
	          case 5:
	            f = !1;
	            break a;

	          case 3:
	            e = e.containerInfo;
	            f = !0;
	            break a;

	          case 4:
	            e = e.containerInfo;
	            f = !0;
	            break a;
	        }

	        d = d.return;
	      }

	      d = !0;
	    }

	    if (5 === c.tag || 6 === c.tag) {
	      a: for (var g = a, h = c, k = h;;) if (bj(g, k), null !== k.child && 4 !== k.tag) k.child.return = k, k = k.child;else {
	        if (k === h) break a;

	        for (; null === k.sibling;) {
	          if (null === k.return || k.return === h) break a;
	          k = k.return;
	        }

	        k.sibling.return = k.return;
	        k = k.sibling;
	      }

	      f ? (g = e, h = c.stateNode, 8 === g.nodeType ? g.parentNode.removeChild(h) : g.removeChild(h)) : e.removeChild(c.stateNode);
	    } else if (4 === c.tag) {
	      if (null !== c.child) {
	        e = c.stateNode.containerInfo;
	        f = !0;
	        c.child.return = c;
	        c = c.child;
	        continue;
	      }
	    } else if (bj(a, c), null !== c.child) {
	      c.child.return = c;
	      c = c.child;
	      continue;
	    }

	    if (c === b) break;

	    for (; null === c.sibling;) {
	      if (null === c.return || c.return === b) return;
	      c = c.return;
	      4 === c.tag && (d = !1);
	    }

	    c.sibling.return = c.return;
	    c = c.sibling;
	  }
	}

	function ij(a, b) {
	  switch (b.tag) {
	    case 0:
	    case 11:
	    case 14:
	    case 15:
	    case 22:
	      var c = b.updateQueue;
	      c = null !== c ? c.lastEffect : null;

	      if (null !== c) {
	        var d = c = c.next;

	        do 3 === (d.tag & 3) && (a = d.destroy, d.destroy = void 0, void 0 !== a && a()), d = d.next; while (d !== c);
	      }

	      return;

	    case 1:
	      return;

	    case 5:
	      c = b.stateNode;

	      if (null != c) {
	        d = b.memoizedProps;
	        var e = null !== a ? a.memoizedProps : d;
	        a = b.type;
	        var f = b.updateQueue;
	        b.updateQueue = null;

	        if (null !== f) {
	          c[xf] = d;
	          "input" === a && "radio" === d.type && null != d.name && $a(c, d);
	          wb(a, e);
	          b = wb(a, d);

	          for (e = 0; e < f.length; e += 2) {
	            var g = f[e],
	                h = f[e + 1];
	            "style" === g ? tb(c, h) : "dangerouslySetInnerHTML" === g ? ob(c, h) : "children" === g ? pb(c, h) : qa(c, g, h, b);
	          }

	          switch (a) {
	            case "input":
	              ab(c, d);
	              break;

	            case "textarea":
	              ib(c, d);
	              break;

	            case "select":
	              a = c._wrapperState.wasMultiple, c._wrapperState.wasMultiple = !!d.multiple, f = d.value, null != f ? fb(c, !!d.multiple, f, !1) : a !== !!d.multiple && (null != d.defaultValue ? fb(c, !!d.multiple, d.defaultValue, !0) : fb(c, !!d.multiple, d.multiple ? [] : "", !1));
	          }
	        }
	      }

	      return;

	    case 6:
	      if (null === b.stateNode) throw Error(y$2(162));
	      b.stateNode.nodeValue = b.memoizedProps;
	      return;

	    case 3:
	      c = b.stateNode;
	      c.hydrate && (c.hydrate = !1, Cc(c.containerInfo));
	      return;

	    case 12:
	      return;

	    case 13:
	      null !== b.memoizedState && (jj = O$1(), aj(b.child, !0));
	      kj(b);
	      return;

	    case 19:
	      kj(b);
	      return;

	    case 17:
	      return;

	    case 23:
	    case 24:
	      aj(b, null !== b.memoizedState);
	      return;
	  }

	  throw Error(y$2(163));
	}

	function kj(a) {
	  var b = a.updateQueue;

	  if (null !== b) {
	    a.updateQueue = null;
	    var c = a.stateNode;
	    null === c && (c = a.stateNode = new Ui());
	    b.forEach(function (b) {
	      var d = lj.bind(null, a, b);
	      c.has(b) || (c.add(b), b.then(d, d));
	    });
	  }
	}

	function mj(a, b) {
	  return null !== a && (a = a.memoizedState, null === a || null !== a.dehydrated) ? (b = b.memoizedState, null !== b && null === b.dehydrated) : !1;
	}

	var nj = Math.ceil,
	    oj = ra.ReactCurrentDispatcher,
	    pj = ra.ReactCurrentOwner,
	    X$1 = 0,
	    U$1 = null,
	    Y = null,
	    W = 0,
	    qj = 0,
	    rj = Bf(0),
	    V$1 = 0,
	    sj = null,
	    tj = 0,
	    Dg = 0,
	    Hi = 0,
	    uj = 0,
	    vj = null,
	    jj = 0,
	    Ji = Infinity;

	function wj() {
	  Ji = O$1() + 500;
	}

	var Z$1 = null,
	    Qi = !1,
	    Ri = null,
	    Ti = null,
	    xj = !1,
	    yj = null,
	    zj = 90,
	    Aj = [],
	    Bj = [],
	    Cj = null,
	    Dj = 0,
	    Ej = null,
	    Fj = -1,
	    Gj = 0,
	    Hj = 0,
	    Ij = null,
	    Jj = !1;

	function Hg() {
	  return 0 !== (X$1 & 48) ? O$1() : -1 !== Fj ? Fj : Fj = O$1();
	}

	function Ig(a) {
	  a = a.mode;
	  if (0 === (a & 2)) return 1;
	  if (0 === (a & 4)) return 99 === eg() ? 1 : 2;
	  0 === Gj && (Gj = tj);

	  if (0 !== kg.transition) {
	    0 !== Hj && (Hj = null !== vj ? vj.pendingLanes : 0);
	    a = Gj;
	    var b = 4186112 & ~Hj;
	    b &= -b;
	    0 === b && (a = 4186112 & ~a, b = a & -a, 0 === b && (b = 8192));
	    return b;
	  }

	  a = eg();
	  0 !== (X$1 & 4) && 98 === a ? a = Xc(12, Gj) : (a = Sc(a), a = Xc(a, Gj));
	  return a;
	}

	function Jg(a, b, c) {
	  if (50 < Dj) throw Dj = 0, Ej = null, Error(y$2(185));
	  a = Kj(a, b);
	  if (null === a) return null;
	  $c(a, b, c);
	  a === U$1 && (Hi |= b, 4 === V$1 && Ii(a, W));
	  var d = eg();
	  1 === b ? 0 !== (X$1 & 8) && 0 === (X$1 & 48) ? Lj(a) : (Mj(a, c), 0 === X$1 && (wj(), ig())) : (0 === (X$1 & 4) || 98 !== d && 99 !== d || (null === Cj ? Cj = new Set([a]) : Cj.add(a)), Mj(a, c));
	  vj = a;
	}

	function Kj(a, b) {
	  a.lanes |= b;
	  var c = a.alternate;
	  null !== c && (c.lanes |= b);
	  c = a;

	  for (a = a.return; null !== a;) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;

	  return 3 === c.tag ? c.stateNode : null;
	}

	function Mj(a, b) {
	  for (var c = a.callbackNode, d = a.suspendedLanes, e = a.pingedLanes, f = a.expirationTimes, g = a.pendingLanes; 0 < g;) {
	    var h = 31 - Vc(g),
	        k = 1 << h,
	        l = f[h];

	    if (-1 === l) {
	      if (0 === (k & d) || 0 !== (k & e)) {
	        l = b;
	        Rc(k);
	        var n = F$1;
	        f[h] = 10 <= n ? l + 250 : 6 <= n ? l + 5E3 : -1;
	      }
	    } else l <= b && (a.expiredLanes |= k);

	    g &= ~k;
	  }

	  d = Uc(a, a === U$1 ? W : 0);
	  b = F$1;
	  if (0 === d) null !== c && (c !== Zf && Pf(c), a.callbackNode = null, a.callbackPriority = 0);else {
	    if (null !== c) {
	      if (a.callbackPriority === b) return;
	      c !== Zf && Pf(c);
	    }

	    15 === b ? (c = Lj.bind(null, a), null === ag ? (ag = [c], bg = Of(Uf, jg)) : ag.push(c), c = Zf) : 14 === b ? c = hg(99, Lj.bind(null, a)) : (c = Tc(b), c = hg(c, Nj.bind(null, a)));
	    a.callbackPriority = b;
	    a.callbackNode = c;
	  }
	}

	function Nj(a) {
	  Fj = -1;
	  Hj = Gj = 0;
	  if (0 !== (X$1 & 48)) throw Error(y$2(327));
	  var b = a.callbackNode;
	  if (Oj() && a.callbackNode !== b) return null;
	  var c = Uc(a, a === U$1 ? W : 0);
	  if (0 === c) return null;
	  var d = c;
	  var e = X$1;
	  X$1 |= 16;
	  var f = Pj();
	  if (U$1 !== a || W !== d) wj(), Qj(a, d);

	  do try {
	    Rj();
	    break;
	  } catch (h) {
	    Sj(a, h);
	  } while (1);

	  qg();
	  oj.current = f;
	  X$1 = e;
	  null !== Y ? d = 0 : (U$1 = null, W = 0, d = V$1);
	  if (0 !== (tj & Hi)) Qj(a, 0);else if (0 !== d) {
	    2 === d && (X$1 |= 64, a.hydrate && (a.hydrate = !1, qf(a.containerInfo)), c = Wc(a), 0 !== c && (d = Tj(a, c)));
	    if (1 === d) throw b = sj, Qj(a, 0), Ii(a, c), Mj(a, O$1()), b;
	    a.finishedWork = a.current.alternate;
	    a.finishedLanes = c;

	    switch (d) {
	      case 0:
	      case 1:
	        throw Error(y$2(345));

	      case 2:
	        Uj(a);
	        break;

	      case 3:
	        Ii(a, c);

	        if ((c & 62914560) === c && (d = jj + 500 - O$1(), 10 < d)) {
	          if (0 !== Uc(a, 0)) break;
	          e = a.suspendedLanes;

	          if ((e & c) !== c) {
	            Hg();
	            a.pingedLanes |= a.suspendedLanes & e;
	            break;
	          }

	          a.timeoutHandle = of(Uj.bind(null, a), d);
	          break;
	        }

	        Uj(a);
	        break;

	      case 4:
	        Ii(a, c);
	        if ((c & 4186112) === c) break;
	        d = a.eventTimes;

	        for (e = -1; 0 < c;) {
	          var g = 31 - Vc(c);
	          f = 1 << g;
	          g = d[g];
	          g > e && (e = g);
	          c &= ~f;
	        }

	        c = e;
	        c = O$1() - c;
	        c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3E3 > c ? 3E3 : 4320 > c ? 4320 : 1960 * nj(c / 1960)) - c;

	        if (10 < c) {
	          a.timeoutHandle = of(Uj.bind(null, a), c);
	          break;
	        }

	        Uj(a);
	        break;

	      case 5:
	        Uj(a);
	        break;

	      default:
	        throw Error(y$2(329));
	    }
	  }
	  Mj(a, O$1());
	  return a.callbackNode === b ? Nj.bind(null, a) : null;
	}

	function Ii(a, b) {
	  b &= ~uj;
	  b &= ~Hi;
	  a.suspendedLanes |= b;
	  a.pingedLanes &= ~b;

	  for (a = a.expirationTimes; 0 < b;) {
	    var c = 31 - Vc(b),
	        d = 1 << c;
	    a[c] = -1;
	    b &= ~d;
	  }
	}

	function Lj(a) {
	  if (0 !== (X$1 & 48)) throw Error(y$2(327));
	  Oj();

	  if (a === U$1 && 0 !== (a.expiredLanes & W)) {
	    var b = W;
	    var c = Tj(a, b);
	    0 !== (tj & Hi) && (b = Uc(a, b), c = Tj(a, b));
	  } else b = Uc(a, 0), c = Tj(a, b);

	  0 !== a.tag && 2 === c && (X$1 |= 64, a.hydrate && (a.hydrate = !1, qf(a.containerInfo)), b = Wc(a), 0 !== b && (c = Tj(a, b)));
	  if (1 === c) throw c = sj, Qj(a, 0), Ii(a, b), Mj(a, O$1()), c;
	  a.finishedWork = a.current.alternate;
	  a.finishedLanes = b;
	  Uj(a);
	  Mj(a, O$1());
	  return null;
	}

	function Vj() {
	  if (null !== Cj) {
	    var a = Cj;
	    Cj = null;
	    a.forEach(function (a) {
	      a.expiredLanes |= 24 & a.pendingLanes;
	      Mj(a, O$1());
	    });
	  }

	  ig();
	}

	function Wj(a, b) {
	  var c = X$1;
	  X$1 |= 1;

	  try {
	    return a(b);
	  } finally {
	    X$1 = c, 0 === X$1 && (wj(), ig());
	  }
	}

	function Xj(a, b) {
	  var c = X$1;
	  X$1 &= -2;
	  X$1 |= 8;

	  try {
	    return a(b);
	  } finally {
	    X$1 = c, 0 === X$1 && (wj(), ig());
	  }
	}

	function ni(a, b) {
	  I$1(rj, qj);
	  qj |= b;
	  tj |= b;
	}

	function Ki() {
	  qj = rj.current;
	  H$1(rj);
	}

	function Qj(a, b) {
	  a.finishedWork = null;
	  a.finishedLanes = 0;
	  var c = a.timeoutHandle;
	  -1 !== c && (a.timeoutHandle = -1, pf(c));
	  if (null !== Y) for (c = Y.return; null !== c;) {
	    var d = c;

	    switch (d.tag) {
	      case 1:
	        d = d.type.childContextTypes;
	        null !== d && void 0 !== d && Gf();
	        break;

	      case 3:
	        fh();
	        H$1(N$1);
	        H$1(M$1);
	        uh();
	        break;

	      case 5:
	        hh(d);
	        break;

	      case 4:
	        fh();
	        break;

	      case 13:
	        H$1(P$1);
	        break;

	      case 19:
	        H$1(P$1);
	        break;

	      case 10:
	        rg(d);
	        break;

	      case 23:
	      case 24:
	        Ki();
	    }

	    c = c.return;
	  }
	  U$1 = a;
	  Y = Tg(a.current, null);
	  W = qj = tj = b;
	  V$1 = 0;
	  sj = null;
	  uj = Hi = Dg = 0;
	}

	function Sj(a, b) {
	  do {
	    var c = Y;

	    try {
	      qg();
	      vh.current = Gh;

	      if (yh) {
	        for (var d = R$1.memoizedState; null !== d;) {
	          var e = d.queue;
	          null !== e && (e.pending = null);
	          d = d.next;
	        }

	        yh = !1;
	      }

	      xh = 0;
	      T$1 = S$1 = R$1 = null;
	      zh = !1;
	      pj.current = null;

	      if (null === c || null === c.return) {
	        V$1 = 1;
	        sj = b;
	        Y = null;
	        break;
	      }

	      a: {
	        var f = a,
	            g = c.return,
	            h = c,
	            k = b;
	        b = W;
	        h.flags |= 2048;
	        h.firstEffect = h.lastEffect = null;

	        if (null !== k && "object" === typeof k && "function" === typeof k.then) {
	          var l = k;

	          if (0 === (h.mode & 2)) {
	            var n = h.alternate;
	            n ? (h.updateQueue = n.updateQueue, h.memoizedState = n.memoizedState, h.lanes = n.lanes) : (h.updateQueue = null, h.memoizedState = null);
	          }

	          var A = 0 !== (P$1.current & 1),
	              p = g;

	          do {
	            var C;

	            if (C = 13 === p.tag) {
	              var x = p.memoizedState;
	              if (null !== x) C = null !== x.dehydrated ? !0 : !1;else {
	                var w = p.memoizedProps;
	                C = void 0 === w.fallback ? !1 : !0 !== w.unstable_avoidThisFallback ? !0 : A ? !1 : !0;
	              }
	            }

	            if (C) {
	              var z = p.updateQueue;

	              if (null === z) {
	                var u = new Set();
	                u.add(l);
	                p.updateQueue = u;
	              } else z.add(l);

	              if (0 === (p.mode & 2)) {
	                p.flags |= 64;
	                h.flags |= 16384;
	                h.flags &= -2981;
	                if (1 === h.tag) if (null === h.alternate) h.tag = 17;else {
	                  var t = zg(-1, 1);
	                  t.tag = 2;
	                  Ag(h, t);
	                }
	                h.lanes |= 1;
	                break a;
	              }

	              k = void 0;
	              h = b;
	              var q = f.pingCache;
	              null === q ? (q = f.pingCache = new Oi(), k = new Set(), q.set(l, k)) : (k = q.get(l), void 0 === k && (k = new Set(), q.set(l, k)));

	              if (!k.has(h)) {
	                k.add(h);
	                var v = Yj.bind(null, f, l, h);
	                l.then(v, v);
	              }

	              p.flags |= 4096;
	              p.lanes = b;
	              break a;
	            }

	            p = p.return;
	          } while (null !== p);

	          k = Error((Ra(h.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
	        }

	        5 !== V$1 && (V$1 = 2);
	        k = Mi(k, h);
	        p = g;

	        do {
	          switch (p.tag) {
	            case 3:
	              f = k;
	              p.flags |= 4096;
	              b &= -b;
	              p.lanes |= b;
	              var J = Pi(p, f, b);
	              Bg(p, J);
	              break a;

	            case 1:
	              f = k;
	              var K = p.type,
	                  Q = p.stateNode;

	              if (0 === (p.flags & 64) && ("function" === typeof K.getDerivedStateFromError || null !== Q && "function" === typeof Q.componentDidCatch && (null === Ti || !Ti.has(Q)))) {
	                p.flags |= 4096;
	                b &= -b;
	                p.lanes |= b;
	                var L = Si(p, f, b);
	                Bg(p, L);
	                break a;
	              }

	          }

	          p = p.return;
	        } while (null !== p);
	      }

	      Zj(c);
	    } catch (va) {
	      b = va;
	      Y === c && null !== c && (Y = c = c.return);
	      continue;
	    }

	    break;
	  } while (1);
	}

	function Pj() {
	  var a = oj.current;
	  oj.current = Gh;
	  return null === a ? Gh : a;
	}

	function Tj(a, b) {
	  var c = X$1;
	  X$1 |= 16;
	  var d = Pj();
	  U$1 === a && W === b || Qj(a, b);

	  do try {
	    ak();
	    break;
	  } catch (e) {
	    Sj(a, e);
	  } while (1);

	  qg();
	  X$1 = c;
	  oj.current = d;
	  if (null !== Y) throw Error(y$2(261));
	  U$1 = null;
	  W = 0;
	  return V$1;
	}

	function ak() {
	  for (; null !== Y;) bk(Y);
	}

	function Rj() {
	  for (; null !== Y && !Qf();) bk(Y);
	}

	function bk(a) {
	  var b = ck(a.alternate, a, qj);
	  a.memoizedProps = a.pendingProps;
	  null === b ? Zj(a) : Y = b;
	  pj.current = null;
	}

	function Zj(a) {
	  var b = a;

	  do {
	    var c = b.alternate;
	    a = b.return;

	    if (0 === (b.flags & 2048)) {
	      c = Gi(c, b, qj);

	      if (null !== c) {
	        Y = c;
	        return;
	      }

	      c = b;

	      if (24 !== c.tag && 23 !== c.tag || null === c.memoizedState || 0 !== (qj & 1073741824) || 0 === (c.mode & 4)) {
	        for (var d = 0, e = c.child; null !== e;) d |= e.lanes | e.childLanes, e = e.sibling;

	        c.childLanes = d;
	      }

	      null !== a && 0 === (a.flags & 2048) && (null === a.firstEffect && (a.firstEffect = b.firstEffect), null !== b.lastEffect && (null !== a.lastEffect && (a.lastEffect.nextEffect = b.firstEffect), a.lastEffect = b.lastEffect), 1 < b.flags && (null !== a.lastEffect ? a.lastEffect.nextEffect = b : a.firstEffect = b, a.lastEffect = b));
	    } else {
	      c = Li(b);

	      if (null !== c) {
	        c.flags &= 2047;
	        Y = c;
	        return;
	      }

	      null !== a && (a.firstEffect = a.lastEffect = null, a.flags |= 2048);
	    }

	    b = b.sibling;

	    if (null !== b) {
	      Y = b;
	      return;
	    }

	    Y = b = a;
	  } while (null !== b);

	  0 === V$1 && (V$1 = 5);
	}

	function Uj(a) {
	  var b = eg();
	  gg(99, dk.bind(null, a, b));
	  return null;
	}

	function dk(a, b) {
	  do Oj(); while (null !== yj);

	  if (0 !== (X$1 & 48)) throw Error(y$2(327));
	  var c = a.finishedWork;
	  if (null === c) return null;
	  a.finishedWork = null;
	  a.finishedLanes = 0;
	  if (c === a.current) throw Error(y$2(177));
	  a.callbackNode = null;
	  var d = c.lanes | c.childLanes,
	      e = d,
	      f = a.pendingLanes & ~e;
	  a.pendingLanes = e;
	  a.suspendedLanes = 0;
	  a.pingedLanes = 0;
	  a.expiredLanes &= e;
	  a.mutableReadLanes &= e;
	  a.entangledLanes &= e;
	  e = a.entanglements;

	  for (var g = a.eventTimes, h = a.expirationTimes; 0 < f;) {
	    var k = 31 - Vc(f),
	        l = 1 << k;
	    e[k] = 0;
	    g[k] = -1;
	    h[k] = -1;
	    f &= ~l;
	  }

	  null !== Cj && 0 === (d & 24) && Cj.has(a) && Cj.delete(a);
	  a === U$1 && (Y = U$1 = null, W = 0);
	  1 < c.flags ? null !== c.lastEffect ? (c.lastEffect.nextEffect = c, d = c.firstEffect) : d = c : d = c.firstEffect;

	  if (null !== d) {
	    e = X$1;
	    X$1 |= 32;
	    pj.current = null;
	    kf = fd;
	    g = Ne();

	    if (Oe(g)) {
	      if ("selectionStart" in g) h = {
	        start: g.selectionStart,
	        end: g.selectionEnd
	      };else a: if (h = (h = g.ownerDocument) && h.defaultView || window, (l = h.getSelection && h.getSelection()) && 0 !== l.rangeCount) {
	        h = l.anchorNode;
	        f = l.anchorOffset;
	        k = l.focusNode;
	        l = l.focusOffset;

	        try {
	          h.nodeType, k.nodeType;
	        } catch (va) {
	          h = null;
	          break a;
	        }

	        var n = 0,
	            A = -1,
	            p = -1,
	            C = 0,
	            x = 0,
	            w = g,
	            z = null;

	        b: for (;;) {
	          for (var u;;) {
	            w !== h || 0 !== f && 3 !== w.nodeType || (A = n + f);
	            w !== k || 0 !== l && 3 !== w.nodeType || (p = n + l);
	            3 === w.nodeType && (n += w.nodeValue.length);
	            if (null === (u = w.firstChild)) break;
	            z = w;
	            w = u;
	          }

	          for (;;) {
	            if (w === g) break b;
	            z === h && ++C === f && (A = n);
	            z === k && ++x === l && (p = n);
	            if (null !== (u = w.nextSibling)) break;
	            w = z;
	            z = w.parentNode;
	          }

	          w = u;
	        }

	        h = -1 === A || -1 === p ? null : {
	          start: A,
	          end: p
	        };
	      } else h = null;
	      h = h || {
	        start: 0,
	        end: 0
	      };
	    } else h = null;

	    lf = {
	      focusedElem: g,
	      selectionRange: h
	    };
	    fd = !1;
	    Ij = null;
	    Jj = !1;
	    Z$1 = d;

	    do try {
	      ek();
	    } catch (va) {
	      if (null === Z$1) throw Error(y$2(330));
	      Wi(Z$1, va);
	      Z$1 = Z$1.nextEffect;
	    } while (null !== Z$1);

	    Ij = null;
	    Z$1 = d;

	    do try {
	      for (g = a; null !== Z$1;) {
	        var t = Z$1.flags;
	        t & 16 && pb(Z$1.stateNode, "");

	        if (t & 128) {
	          var q = Z$1.alternate;

	          if (null !== q) {
	            var v = q.ref;
	            null !== v && ("function" === typeof v ? v(null) : v.current = null);
	          }
	        }

	        switch (t & 1038) {
	          case 2:
	            fj(Z$1);
	            Z$1.flags &= -3;
	            break;

	          case 6:
	            fj(Z$1);
	            Z$1.flags &= -3;
	            ij(Z$1.alternate, Z$1);
	            break;

	          case 1024:
	            Z$1.flags &= -1025;
	            break;

	          case 1028:
	            Z$1.flags &= -1025;
	            ij(Z$1.alternate, Z$1);
	            break;

	          case 4:
	            ij(Z$1.alternate, Z$1);
	            break;

	          case 8:
	            h = Z$1;
	            cj(g, h);
	            var J = h.alternate;
	            dj(h);
	            null !== J && dj(J);
	        }

	        Z$1 = Z$1.nextEffect;
	      }
	    } catch (va) {
	      if (null === Z$1) throw Error(y$2(330));
	      Wi(Z$1, va);
	      Z$1 = Z$1.nextEffect;
	    } while (null !== Z$1);

	    v = lf;
	    q = Ne();
	    t = v.focusedElem;
	    g = v.selectionRange;

	    if (q !== t && t && t.ownerDocument && Me(t.ownerDocument.documentElement, t)) {
	      null !== g && Oe(t) && (q = g.start, v = g.end, void 0 === v && (v = q), "selectionStart" in t ? (t.selectionStart = q, t.selectionEnd = Math.min(v, t.value.length)) : (v = (q = t.ownerDocument || document) && q.defaultView || window, v.getSelection && (v = v.getSelection(), h = t.textContent.length, J = Math.min(g.start, h), g = void 0 === g.end ? J : Math.min(g.end, h), !v.extend && J > g && (h = g, g = J, J = h), h = Le(t, J), f = Le(t, g), h && f && (1 !== v.rangeCount || v.anchorNode !== h.node || v.anchorOffset !== h.offset || v.focusNode !== f.node || v.focusOffset !== f.offset) && (q = q.createRange(), q.setStart(h.node, h.offset), v.removeAllRanges(), J > g ? (v.addRange(q), v.extend(f.node, f.offset)) : (q.setEnd(f.node, f.offset), v.addRange(q))))));
	      q = [];

	      for (v = t; v = v.parentNode;) 1 === v.nodeType && q.push({
	        element: v,
	        left: v.scrollLeft,
	        top: v.scrollTop
	      });

	      "function" === typeof t.focus && t.focus();

	      for (t = 0; t < q.length; t++) v = q[t], v.element.scrollLeft = v.left, v.element.scrollTop = v.top;
	    }

	    fd = !!kf;
	    lf = kf = null;
	    a.current = c;
	    Z$1 = d;

	    do try {
	      for (t = a; null !== Z$1;) {
	        var K = Z$1.flags;
	        K & 36 && Yi(t, Z$1.alternate, Z$1);

	        if (K & 128) {
	          q = void 0;
	          var Q = Z$1.ref;

	          if (null !== Q) {
	            var L = Z$1.stateNode;

	            switch (Z$1.tag) {
	              case 5:
	                q = L;
	                break;

	              default:
	                q = L;
	            }

	            "function" === typeof Q ? Q(q) : Q.current = q;
	          }
	        }

	        Z$1 = Z$1.nextEffect;
	      }
	    } catch (va) {
	      if (null === Z$1) throw Error(y$2(330));
	      Wi(Z$1, va);
	      Z$1 = Z$1.nextEffect;
	    } while (null !== Z$1);

	    Z$1 = null;
	    $f();
	    X$1 = e;
	  } else a.current = c;

	  if (xj) xj = !1, yj = a, zj = b;else for (Z$1 = d; null !== Z$1;) b = Z$1.nextEffect, Z$1.nextEffect = null, Z$1.flags & 8 && (K = Z$1, K.sibling = null, K.stateNode = null), Z$1 = b;
	  d = a.pendingLanes;
	  0 === d && (Ti = null);
	  1 === d ? a === Ej ? Dj++ : (Dj = 0, Ej = a) : Dj = 0;
	  c = c.stateNode;
	  if (Mf && "function" === typeof Mf.onCommitFiberRoot) try {
	    Mf.onCommitFiberRoot(Lf, c, void 0, 64 === (c.current.flags & 64));
	  } catch (va) {}
	  Mj(a, O$1());
	  if (Qi) throw Qi = !1, a = Ri, Ri = null, a;
	  if (0 !== (X$1 & 8)) return null;
	  ig();
	  return null;
	}

	function ek() {
	  for (; null !== Z$1;) {
	    var a = Z$1.alternate;
	    Jj || null === Ij || (0 !== (Z$1.flags & 8) ? dc(Z$1, Ij) && (Jj = !0) : 13 === Z$1.tag && mj(a, Z$1) && dc(Z$1, Ij) && (Jj = !0));
	    var b = Z$1.flags;
	    0 !== (b & 256) && Xi(a, Z$1);
	    0 === (b & 512) || xj || (xj = !0, hg(97, function () {
	      Oj();
	      return null;
	    }));
	    Z$1 = Z$1.nextEffect;
	  }
	}

	function Oj() {
	  if (90 !== zj) {
	    var a = 97 < zj ? 97 : zj;
	    zj = 90;
	    return gg(a, fk);
	  }

	  return !1;
	}

	function $i(a, b) {
	  Aj.push(b, a);
	  xj || (xj = !0, hg(97, function () {
	    Oj();
	    return null;
	  }));
	}

	function Zi(a, b) {
	  Bj.push(b, a);
	  xj || (xj = !0, hg(97, function () {
	    Oj();
	    return null;
	  }));
	}

	function fk() {
	  if (null === yj) return !1;
	  var a = yj;
	  yj = null;
	  if (0 !== (X$1 & 48)) throw Error(y$2(331));
	  var b = X$1;
	  X$1 |= 32;
	  var c = Bj;
	  Bj = [];

	  for (var d = 0; d < c.length; d += 2) {
	    var e = c[d],
	        f = c[d + 1],
	        g = e.destroy;
	    e.destroy = void 0;
	    if ("function" === typeof g) try {
	      g();
	    } catch (k) {
	      if (null === f) throw Error(y$2(330));
	      Wi(f, k);
	    }
	  }

	  c = Aj;
	  Aj = [];

	  for (d = 0; d < c.length; d += 2) {
	    e = c[d];
	    f = c[d + 1];

	    try {
	      var h = e.create;
	      e.destroy = h();
	    } catch (k) {
	      if (null === f) throw Error(y$2(330));
	      Wi(f, k);
	    }
	  }

	  for (h = a.current.firstEffect; null !== h;) a = h.nextEffect, h.nextEffect = null, h.flags & 8 && (h.sibling = null, h.stateNode = null), h = a;

	  X$1 = b;
	  ig();
	  return !0;
	}

	function gk(a, b, c) {
	  b = Mi(c, b);
	  b = Pi(a, b, 1);
	  Ag(a, b);
	  b = Hg();
	  a = Kj(a, 1);
	  null !== a && ($c(a, 1, b), Mj(a, b));
	}

	function Wi(a, b) {
	  if (3 === a.tag) gk(a, a, b);else for (var c = a.return; null !== c;) {
	    if (3 === c.tag) {
	      gk(c, a, b);
	      break;
	    } else if (1 === c.tag) {
	      var d = c.stateNode;

	      if ("function" === typeof c.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ti || !Ti.has(d))) {
	        a = Mi(b, a);
	        var e = Si(c, a, 1);
	        Ag(c, e);
	        e = Hg();
	        c = Kj(c, 1);
	        if (null !== c) $c(c, 1, e), Mj(c, e);else if ("function" === typeof d.componentDidCatch && (null === Ti || !Ti.has(d))) try {
	          d.componentDidCatch(b, a);
	        } catch (f) {}
	        break;
	      }
	    }

	    c = c.return;
	  }
	}

	function Yj(a, b, c) {
	  var d = a.pingCache;
	  null !== d && d.delete(b);
	  b = Hg();
	  a.pingedLanes |= a.suspendedLanes & c;
	  U$1 === a && (W & c) === c && (4 === V$1 || 3 === V$1 && (W & 62914560) === W && 500 > O$1() - jj ? Qj(a, 0) : uj |= c);
	  Mj(a, b);
	}

	function lj(a, b) {
	  var c = a.stateNode;
	  null !== c && c.delete(b);
	  b = 0;
	  0 === b && (b = a.mode, 0 === (b & 2) ? b = 1 : 0 === (b & 4) ? b = 99 === eg() ? 1 : 2 : (0 === Gj && (Gj = tj), b = Yc(62914560 & ~Gj), 0 === b && (b = 4194304)));
	  c = Hg();
	  a = Kj(a, b);
	  null !== a && ($c(a, b, c), Mj(a, c));
	}

	var ck;

	ck = function (a, b, c) {
	  var d = b.lanes;
	  if (null !== a) {
	    if (a.memoizedProps !== b.pendingProps || N$1.current) ug = !0;else if (0 !== (c & d)) ug = 0 !== (a.flags & 16384) ? !0 : !1;else {
	      ug = !1;

	      switch (b.tag) {
	        case 3:
	          ri(b);
	          sh();
	          break;

	        case 5:
	          gh(b);
	          break;

	        case 1:
	          Ff(b.type) && Jf(b);
	          break;

	        case 4:
	          eh(b, b.stateNode.containerInfo);
	          break;

	        case 10:
	          d = b.memoizedProps.value;
	          var e = b.type._context;
	          I$1(mg, e._currentValue);
	          e._currentValue = d;
	          break;

	        case 13:
	          if (null !== b.memoizedState) {
	            if (0 !== (c & b.child.childLanes)) return ti(a, b, c);
	            I$1(P$1, P$1.current & 1);
	            b = hi(a, b, c);
	            return null !== b ? b.sibling : null;
	          }

	          I$1(P$1, P$1.current & 1);
	          break;

	        case 19:
	          d = 0 !== (c & b.childLanes);

	          if (0 !== (a.flags & 64)) {
	            if (d) return Ai(a, b, c);
	            b.flags |= 64;
	          }

	          e = b.memoizedState;
	          null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
	          I$1(P$1, P$1.current);
	          if (d) break;else return null;

	        case 23:
	        case 24:
	          return b.lanes = 0, mi(a, b, c);
	      }

	      return hi(a, b, c);
	    }
	  } else ug = !1;
	  b.lanes = 0;

	  switch (b.tag) {
	    case 2:
	      d = b.type;
	      null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
	      a = b.pendingProps;
	      e = Ef(b, M$1.current);
	      tg(b, c);
	      e = Ch(null, b, d, a, e, c);
	      b.flags |= 1;

	      if ("object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof) {
	        b.tag = 1;
	        b.memoizedState = null;
	        b.updateQueue = null;

	        if (Ff(d)) {
	          var f = !0;
	          Jf(b);
	        } else f = !1;

	        b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null;
	        xg(b);
	        var g = d.getDerivedStateFromProps;
	        "function" === typeof g && Gg(b, d, g, a);
	        e.updater = Kg;
	        b.stateNode = e;
	        e._reactInternals = b;
	        Og(b, d, a, c);
	        b = qi(null, b, d, !0, f, c);
	      } else b.tag = 0, fi(null, b, e, c), b = b.child;

	      return b;

	    case 16:
	      e = b.elementType;

	      a: {
	        null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
	        a = b.pendingProps;
	        f = e._init;
	        e = f(e._payload);
	        b.type = e;
	        f = b.tag = hk(e);
	        a = lg(e, a);

	        switch (f) {
	          case 0:
	            b = li(null, b, e, a, c);
	            break a;

	          case 1:
	            b = pi(null, b, e, a, c);
	            break a;

	          case 11:
	            b = gi(null, b, e, a, c);
	            break a;

	          case 14:
	            b = ii(null, b, e, lg(e.type, a), d, c);
	            break a;
	        }

	        throw Error(y$2(306, e, ""));
	      }

	      return b;

	    case 0:
	      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), li(a, b, d, e, c);

	    case 1:
	      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), pi(a, b, d, e, c);

	    case 3:
	      ri(b);
	      d = b.updateQueue;
	      if (null === a || null === d) throw Error(y$2(282));
	      d = b.pendingProps;
	      e = b.memoizedState;
	      e = null !== e ? e.element : null;
	      yg(a, b);
	      Cg(b, d, null, c);
	      d = b.memoizedState.element;
	      if (d === e) sh(), b = hi(a, b, c);else {
	        e = b.stateNode;
	        if (f = e.hydrate) kh = rf(b.stateNode.containerInfo.firstChild), jh = b, f = lh = !0;

	        if (f) {
	          a = e.mutableSourceEagerHydrationData;
	          if (null != a) for (e = 0; e < a.length; e += 2) f = a[e], f._workInProgressVersionPrimary = a[e + 1], th.push(f);
	          c = Zg(b, null, d, c);

	          for (b.child = c; c;) c.flags = c.flags & -3 | 1024, c = c.sibling;
	        } else fi(a, b, d, c), sh();

	        b = b.child;
	      }
	      return b;

	    case 5:
	      return gh(b), null === a && ph(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, nf(d, e) ? g = null : null !== f && nf(d, f) && (b.flags |= 16), oi(a, b), fi(a, b, g, c), b.child;

	    case 6:
	      return null === a && ph(b), null;

	    case 13:
	      return ti(a, b, c);

	    case 4:
	      return eh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Yg(b, null, d, c) : fi(a, b, d, c), b.child;

	    case 11:
	      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), gi(a, b, d, e, c);

	    case 7:
	      return fi(a, b, b.pendingProps, c), b.child;

	    case 8:
	      return fi(a, b, b.pendingProps.children, c), b.child;

	    case 12:
	      return fi(a, b, b.pendingProps.children, c), b.child;

	    case 10:
	      a: {
	        d = b.type._context;
	        e = b.pendingProps;
	        g = b.memoizedProps;
	        f = e.value;
	        var h = b.type._context;
	        I$1(mg, h._currentValue);
	        h._currentValue = f;
	        if (null !== g) if (h = g.value, f = He(h, f) ? 0 : ("function" === typeof d._calculateChangedBits ? d._calculateChangedBits(h, f) : 1073741823) | 0, 0 === f) {
	          if (g.children === e.children && !N$1.current) {
	            b = hi(a, b, c);
	            break a;
	          }
	        } else for (h = b.child, null !== h && (h.return = b); null !== h;) {
	          var k = h.dependencies;

	          if (null !== k) {
	            g = h.child;

	            for (var l = k.firstContext; null !== l;) {
	              if (l.context === d && 0 !== (l.observedBits & f)) {
	                1 === h.tag && (l = zg(-1, c & -c), l.tag = 2, Ag(h, l));
	                h.lanes |= c;
	                l = h.alternate;
	                null !== l && (l.lanes |= c);
	                sg(h.return, c);
	                k.lanes |= c;
	                break;
	              }

	              l = l.next;
	            }
	          } else g = 10 === h.tag ? h.type === b.type ? null : h.child : h.child;

	          if (null !== g) g.return = h;else for (g = h; null !== g;) {
	            if (g === b) {
	              g = null;
	              break;
	            }

	            h = g.sibling;

	            if (null !== h) {
	              h.return = g.return;
	              g = h;
	              break;
	            }

	            g = g.return;
	          }
	          h = g;
	        }
	        fi(a, b, e.children, c);
	        b = b.child;
	      }

	      return b;

	    case 9:
	      return e = b.type, f = b.pendingProps, d = f.children, tg(b, c), e = vg(e, f.unstable_observedBits), d = d(e), b.flags |= 1, fi(a, b, d, c), b.child;

	    case 14:
	      return e = b.type, f = lg(e, b.pendingProps), f = lg(e.type, f), ii(a, b, e, f, d, c);

	    case 15:
	      return ki(a, b, b.type, b.pendingProps, d, c);

	    case 17:
	      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2), b.tag = 1, Ff(d) ? (a = !0, Jf(b)) : a = !1, tg(b, c), Mg(b, d, e), Og(b, d, e, c), qi(null, b, d, !0, a, c);

	    case 19:
	      return Ai(a, b, c);

	    case 23:
	      return mi(a, b, c);

	    case 24:
	      return mi(a, b, c);
	  }

	  throw Error(y$2(156, b.tag));
	};

	function ik(a, b, c, d) {
	  this.tag = a;
	  this.key = c;
	  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
	  this.index = 0;
	  this.ref = null;
	  this.pendingProps = b;
	  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
	  this.mode = d;
	  this.flags = 0;
	  this.lastEffect = this.firstEffect = this.nextEffect = null;
	  this.childLanes = this.lanes = 0;
	  this.alternate = null;
	}

	function nh(a, b, c, d) {
	  return new ik(a, b, c, d);
	}

	function ji(a) {
	  a = a.prototype;
	  return !(!a || !a.isReactComponent);
	}

	function hk(a) {
	  if ("function" === typeof a) return ji(a) ? 1 : 0;

	  if (void 0 !== a && null !== a) {
	    a = a.$$typeof;
	    if (a === Aa) return 11;
	    if (a === Da) return 14;
	  }

	  return 2;
	}

	function Tg(a, b) {
	  var c = a.alternate;
	  null === c ? (c = nh(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
	  c.childLanes = a.childLanes;
	  c.lanes = a.lanes;
	  c.child = a.child;
	  c.memoizedProps = a.memoizedProps;
	  c.memoizedState = a.memoizedState;
	  c.updateQueue = a.updateQueue;
	  b = a.dependencies;
	  c.dependencies = null === b ? null : {
	    lanes: b.lanes,
	    firstContext: b.firstContext
	  };
	  c.sibling = a.sibling;
	  c.index = a.index;
	  c.ref = a.ref;
	  return c;
	}

	function Vg(a, b, c, d, e, f) {
	  var g = 2;
	  d = a;
	  if ("function" === typeof a) ji(a) && (g = 1);else if ("string" === typeof a) g = 5;else a: switch (a) {
	    case ua:
	      return Xg(c.children, e, f, b);

	    case Ha:
	      g = 8;
	      e |= 16;
	      break;

	    case wa:
	      g = 8;
	      e |= 1;
	      break;

	    case xa:
	      return a = nh(12, c, b, e | 8), a.elementType = xa, a.type = xa, a.lanes = f, a;

	    case Ba:
	      return a = nh(13, c, b, e), a.type = Ba, a.elementType = Ba, a.lanes = f, a;

	    case Ca:
	      return a = nh(19, c, b, e), a.elementType = Ca, a.lanes = f, a;

	    case Ia:
	      return vi(c, e, f, b);

	    case Ja:
	      return a = nh(24, c, b, e), a.elementType = Ja, a.lanes = f, a;

	    default:
	      if ("object" === typeof a && null !== a) switch (a.$$typeof) {
	        case ya:
	          g = 10;
	          break a;

	        case za:
	          g = 9;
	          break a;

	        case Aa:
	          g = 11;
	          break a;

	        case Da:
	          g = 14;
	          break a;

	        case Ea:
	          g = 16;
	          d = null;
	          break a;

	        case Fa:
	          g = 22;
	          break a;
	      }
	      throw Error(y$2(130, null == a ? a : typeof a, ""));
	  }
	  b = nh(g, c, b, e);
	  b.elementType = a;
	  b.type = d;
	  b.lanes = f;
	  return b;
	}

	function Xg(a, b, c, d) {
	  a = nh(7, a, d, b);
	  a.lanes = c;
	  return a;
	}

	function vi(a, b, c, d) {
	  a = nh(23, a, d, b);
	  a.elementType = Ia;
	  a.lanes = c;
	  return a;
	}

	function Ug(a, b, c) {
	  a = nh(6, a, null, b);
	  a.lanes = c;
	  return a;
	}

	function Wg(a, b, c) {
	  b = nh(4, null !== a.children ? a.children : [], a.key, b);
	  b.lanes = c;
	  b.stateNode = {
	    containerInfo: a.containerInfo,
	    pendingChildren: null,
	    implementation: a.implementation
	  };
	  return b;
	}

	function jk(a, b, c) {
	  this.tag = b;
	  this.containerInfo = a;
	  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
	  this.timeoutHandle = -1;
	  this.pendingContext = this.context = null;
	  this.hydrate = c;
	  this.callbackNode = null;
	  this.callbackPriority = 0;
	  this.eventTimes = Zc(0);
	  this.expirationTimes = Zc(-1);
	  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
	  this.entanglements = Zc(0);
	  this.mutableSourceEagerHydrationData = null;
	}

	function kk(a, b, c) {
	  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
	  return {
	    $$typeof: ta,
	    key: null == d ? null : "" + d,
	    children: a,
	    containerInfo: b,
	    implementation: c
	  };
	}

	function lk(a, b, c, d) {
	  var e = b.current,
	      f = Hg(),
	      g = Ig(e);

	  a: if (c) {
	    c = c._reactInternals;

	    b: {
	      if (Zb(c) !== c || 1 !== c.tag) throw Error(y$2(170));
	      var h = c;

	      do {
	        switch (h.tag) {
	          case 3:
	            h = h.stateNode.context;
	            break b;

	          case 1:
	            if (Ff(h.type)) {
	              h = h.stateNode.__reactInternalMemoizedMergedChildContext;
	              break b;
	            }

	        }

	        h = h.return;
	      } while (null !== h);

	      throw Error(y$2(171));
	    }

	    if (1 === c.tag) {
	      var k = c.type;

	      if (Ff(k)) {
	        c = If(c, k, h);
	        break a;
	      }
	    }

	    c = h;
	  } else c = Cf;

	  null === b.context ? b.context = c : b.pendingContext = c;
	  b = zg(f, g);
	  b.payload = {
	    element: a
	  };
	  d = void 0 === d ? null : d;
	  null !== d && (b.callback = d);
	  Ag(e, b);
	  Jg(e, g, f);
	  return g;
	}

	function mk(a) {
	  a = a.current;
	  if (!a.child) return null;

	  switch (a.child.tag) {
	    case 5:
	      return a.child.stateNode;

	    default:
	      return a.child.stateNode;
	  }
	}

	function nk(a, b) {
	  a = a.memoizedState;

	  if (null !== a && null !== a.dehydrated) {
	    var c = a.retryLane;
	    a.retryLane = 0 !== c && c < b ? c : b;
	  }
	}

	function ok(a, b) {
	  nk(a, b);
	  (a = a.alternate) && nk(a, b);
	}

	function pk() {
	  return null;
	}

	function qk(a, b, c) {
	  var d = null != c && null != c.hydrationOptions && c.hydrationOptions.mutableSources || null;
	  c = new jk(a, b, null != c && !0 === c.hydrate);
	  b = nh(3, null, null, 2 === b ? 7 : 1 === b ? 3 : 0);
	  c.current = b;
	  b.stateNode = c;
	  xg(b);
	  a[ff] = c.current;
	  cf(8 === a.nodeType ? a.parentNode : a);
	  if (d) for (a = 0; a < d.length; a++) {
	    b = d[a];
	    var e = b._getVersion;
	    e = e(b._source);
	    null == c.mutableSourceEagerHydrationData ? c.mutableSourceEagerHydrationData = [b, e] : c.mutableSourceEagerHydrationData.push(b, e);
	  }
	  this._internalRoot = c;
	}

	qk.prototype.render = function (a) {
	  lk(a, this._internalRoot, null, null);
	};

	qk.prototype.unmount = function () {
	  var a = this._internalRoot,
	      b = a.containerInfo;
	  lk(null, a, null, function () {
	    b[ff] = null;
	  });
	};

	function rk(a) {
	  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
	}

	function sk(a, b) {
	  b || (b = a ? 9 === a.nodeType ? a.documentElement : a.firstChild : null, b = !(!b || 1 !== b.nodeType || !b.hasAttribute("data-reactroot")));
	  if (!b) for (var c; c = a.lastChild;) a.removeChild(c);
	  return new qk(a, 0, b ? {
	    hydrate: !0
	  } : void 0);
	}

	function tk(a, b, c, d, e) {
	  var f = c._reactRootContainer;

	  if (f) {
	    var g = f._internalRoot;

	    if ("function" === typeof e) {
	      var h = e;

	      e = function () {
	        var a = mk(g);
	        h.call(a);
	      };
	    }

	    lk(b, g, a, e);
	  } else {
	    f = c._reactRootContainer = sk(c, d);
	    g = f._internalRoot;

	    if ("function" === typeof e) {
	      var k = e;

	      e = function () {
	        var a = mk(g);
	        k.call(a);
	      };
	    }

	    Xj(function () {
	      lk(b, g, a, e);
	    });
	  }

	  return mk(g);
	}

	ec = function (a) {
	  if (13 === a.tag) {
	    var b = Hg();
	    Jg(a, 4, b);
	    ok(a, 4);
	  }
	};

	fc = function (a) {
	  if (13 === a.tag) {
	    var b = Hg();
	    Jg(a, 67108864, b);
	    ok(a, 67108864);
	  }
	};

	gc = function (a) {
	  if (13 === a.tag) {
	    var b = Hg(),
	        c = Ig(a);
	    Jg(a, c, b);
	    ok(a, c);
	  }
	};

	hc = function (a, b) {
	  return b();
	};

	yb = function (a, b, c) {
	  switch (b) {
	    case "input":
	      ab(a, c);
	      b = c.name;

	      if ("radio" === c.type && null != b) {
	        for (c = a; c.parentNode;) c = c.parentNode;

	        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');

	        for (b = 0; b < c.length; b++) {
	          var d = c[b];

	          if (d !== a && d.form === a.form) {
	            var e = Db(d);
	            if (!e) throw Error(y$2(90));
	            Wa(d);
	            ab(d, e);
	          }
	        }
	      }

	      break;

	    case "textarea":
	      ib(a, c);
	      break;

	    case "select":
	      b = c.value, null != b && fb(a, !!c.multiple, b, !1);
	  }
	};

	Gb = Wj;

	Hb = function (a, b, c, d, e) {
	  var f = X$1;
	  X$1 |= 4;

	  try {
	    return gg(98, a.bind(null, b, c, d, e));
	  } finally {
	    X$1 = f, 0 === X$1 && (wj(), ig());
	  }
	};

	Ib = function () {
	  0 === (X$1 & 49) && (Vj(), Oj());
	};

	Jb = function (a, b) {
	  var c = X$1;
	  X$1 |= 2;

	  try {
	    return a(b);
	  } finally {
	    X$1 = c, 0 === X$1 && (wj(), ig());
	  }
	};

	function uk(a, b) {
	  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
	  if (!rk(b)) throw Error(y$2(200));
	  return kk(a, b, null, c);
	}

	var vk = {
	  Events: [Cb, ue$1, Db, Eb, Fb, Oj, {
	    current: !1
	  }]
	},
	    wk = {
	  findFiberByHostInstance: wc,
	  bundleType: 0,
	  version: "17.0.2",
	  rendererPackageName: "react-dom"
	};
	var xk = {
	  bundleType: wk.bundleType,
	  version: wk.version,
	  rendererPackageName: wk.rendererPackageName,
	  rendererConfig: wk.rendererConfig,
	  overrideHookState: null,
	  overrideHookStateDeletePath: null,
	  overrideHookStateRenamePath: null,
	  overrideProps: null,
	  overridePropsDeletePath: null,
	  overridePropsRenamePath: null,
	  setSuspenseHandler: null,
	  scheduleUpdate: null,
	  currentDispatcherRef: ra.ReactCurrentDispatcher,
	  findHostInstanceByFiber: function (a) {
	    a = cc(a);
	    return null === a ? null : a.stateNode;
	  },
	  findFiberByHostInstance: wk.findFiberByHostInstance || pk,
	  findHostInstancesForRefresh: null,
	  scheduleRefresh: null,
	  scheduleRoot: null,
	  setRefreshHandler: null,
	  getCurrentFiber: null
	};

	if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
	  var yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	  if (!yk.isDisabled && yk.supportsFiber) try {
	    Lf = yk.inject(xk), Mf = yk;
	  } catch (a) {}
	}

	var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vk;
	var createPortal = uk;

	var findDOMNode = function (a) {
	  if (null == a) return null;
	  if (1 === a.nodeType) return a;
	  var b = a._reactInternals;

	  if (void 0 === b) {
	    if ("function" === typeof a.render) throw Error(y$2(188));
	    throw Error(y$2(268, Object.keys(a)));
	  }

	  a = cc(b);
	  a = null === a ? null : a.stateNode;
	  return a;
	};

	var flushSync = function (a, b) {
	  var c = X$1;
	  if (0 !== (c & 48)) return a(b);
	  X$1 |= 1;

	  try {
	    if (a) return gg(99, a.bind(null, b));
	  } finally {
	    X$1 = c, ig();
	  }
	};

	var hydrate = function (a, b, c) {
	  if (!rk(b)) throw Error(y$2(200));
	  return tk(null, a, b, !0, c);
	};

	var render = function (a, b, c) {
	  if (!rk(b)) throw Error(y$2(200));
	  return tk(null, a, b, !1, c);
	};

	var unmountComponentAtNode = function (a) {
	  if (!rk(a)) throw Error(y$2(40));
	  return a._reactRootContainer ? (Xj(function () {
	    tk(null, null, a, !1, function () {
	      a._reactRootContainer = null;
	      a[ff] = null;
	    });
	  }), !0) : !1;
	};

	var unstable_batchedUpdates = Wj;

	var unstable_createPortal = function (a, b) {
	  return uk(a, b, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null);
	};

	var unstable_renderSubtreeIntoContainer = function (a, b, c, d) {
	  if (!rk(c)) throw Error(y$2(200));
	  if (null == a || void 0 === a._reactInternals) throw Error(y$2(38));
	  return tk(a, b, c, !1, d);
	};

	var version$1 = "17.0.2";

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

	/** @license React v0.20.2
	 * scheduler-tracing.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var b$1 = 0;
	var __interactionsRef = null;
	var __subscriberRef = null;

	var unstable_clear = function (a) {
	  return a();
	};

	var unstable_getCurrent = function () {
	  return null;
	};

	var unstable_getThreadID = function () {
	  return ++b$1;
	};

	var unstable_subscribe = function () {};

	var unstable_trace = function (a, d, c) {
	  return c();
	};

	var unstable_unsubscribe = function () {};

	var unstable_wrap = function (a) {
	  return a;
	};

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
	  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') {
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

	var b = "function" === typeof Symbol && Symbol.for,
	    c$1 = b ? Symbol.for("react.element") : 60103,
	    d$1 = b ? Symbol.for("react.portal") : 60106,
	    e$1 = b ? Symbol.for("react.fragment") : 60107,
	    f = b ? Symbol.for("react.strict_mode") : 60108,
	    g$1 = b ? Symbol.for("react.profiler") : 60114,
	    h = b ? Symbol.for("react.provider") : 60109,
	    k$1 = b ? Symbol.for("react.context") : 60110,
	    l = b ? Symbol.for("react.async_mode") : 60111,
	    m$1 = b ? Symbol.for("react.concurrent_mode") : 60111,
	    n$1 = b ? Symbol.for("react.forward_ref") : 60112,
	    p$1 = b ? Symbol.for("react.suspense") : 60113,
	    q$1 = b ? Symbol.for("react.suspense_list") : 60120,
	    r$1 = b ? Symbol.for("react.memo") : 60115,
	    t$2 = b ? Symbol.for("react.lazy") : 60116,
	    v = b ? Symbol.for("react.block") : 60121,
	    w = b ? Symbol.for("react.fundamental") : 60117,
	    x$1 = b ? Symbol.for("react.responder") : 60118,
	    y$1 = b ? Symbol.for("react.scope") : 60119;

	function z$1(a) {
	  if ("object" === typeof a && null !== a) {
	    var u = a.$$typeof;

	    switch (u) {
	      case c$1:
	        switch (a = a.type, a) {
	          case l:
	          case m$1:
	          case e$1:
	          case g$1:
	          case f:
	          case p$1:
	            return a;

	          default:
	            switch (a = a && a.$$typeof, a) {
	              case k$1:
	              case n$1:
	              case t$2:
	              case r$1:
	              case h:
	                return a;

	              default:
	                return u;
	            }

	        }

	      case d$1:
	        return u;
	    }
	  }
	}

	function A$1(a) {
	  return z$1(a) === m$1;
	}

	var AsyncMode = l;
	var ConcurrentMode = m$1;
	var ContextConsumer = k$1;
	var ContextProvider = h;
	var Element$1 = c$1;
	var ForwardRef = n$1;
	var Fragment = e$1;
	var Lazy = t$2;
	var Memo = r$1;
	var Portal = d$1;
	var Profiler = g$1;
	var StrictMode = f;
	var Suspense = p$1;

	var isAsyncMode = function (a) {
	  return A$1(a) || z$1(a) === l;
	};

	var isConcurrentMode = A$1;

	var isContextConsumer = function (a) {
	  return z$1(a) === k$1;
	};

	var isContextProvider = function (a) {
	  return z$1(a) === h;
	};

	var isElement = function (a) {
	  return "object" === typeof a && null !== a && a.$$typeof === c$1;
	};

	var isForwardRef = function (a) {
	  return z$1(a) === n$1;
	};

	var isFragment = function (a) {
	  return z$1(a) === e$1;
	};

	var isLazy = function (a) {
	  return z$1(a) === t$2;
	};

	var isMemo = function (a) {
	  return z$1(a) === r$1;
	};

	var isPortal = function (a) {
	  return z$1(a) === d$1;
	};

	var isProfiler = function (a) {
	  return z$1(a) === g$1;
	};

	var isStrictMode = function (a) {
	  return z$1(a) === f;
	};

	var isSuspense = function (a) {
	  return z$1(a) === p$1;
	};

	var isValidElementType = function (a) {
	  return "string" === typeof a || "function" === typeof a || a === e$1 || a === m$1 || a === g$1 || a === f || a === p$1 || a === q$1 || "object" === typeof a && null !== a && (a.$$typeof === t$2 || a.$$typeof === r$1 || a.$$typeof === h || a.$$typeof === k$1 || a.$$typeof === n$1 || a.$$typeof === w || a.$$typeof === x$1 || a.$$typeof === y$1 || a.$$typeof === v);
	};

	var typeOf = z$1;

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

	var reactIs = createCommonjsModule(function (module) {

	{
	  module.exports = reactIs_production_min;
	}
	});

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	var ReactPropTypesSecret_1 = ReactPropTypesSecret;

	Function.call.bind(Object.prototype.hasOwnProperty);

	function emptyFunction() {}

	function emptyFunctionWithReset() {}

	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	var factoryWithThrowingShims = function () {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret_1) {
	      // It is still safe when called from React.
	      return;
	    }

	    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
	    err.name = 'Invariant Violation';
	    throw err;
	  }
	  shim.isRequired = shim;

	  function getShim() {
	    return shim;
	  }
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
	  } // Test for A's keys different from B.


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
	var performance$1 = global$1.performance || {};
	var performanceNow =
	  performance$1.now        ||
	  performance$1.mozNow     ||
	  performance$1.msNow      ||
	  performance$1.oNow       ||
	  performance$1.webkitNow  ||
	  function(){ return (new Date()).getTime() };

	// generate timestamp or delta
	// see http://nodejs.org/api/process.html#process_process_hrtime
	function hrtime(previousTimestamp){
	  var clocktime = performanceNow.call(performance$1)*1e-3;
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

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : {
	    default: obj
	  };
	}

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
	}
	/**
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
	exports.innerWidth = innerWidth; // Calculate height without padding.

	function innerHeight(el) {
	  var style = window.getComputedStyle(el, null); // Hidden iframe in Firefox returns null, https://github.com/malte-wessel/react-textfit/pull/34

	  if (!style) return el.clientHeight;
	  return el.clientHeight - parseInt(style.getPropertyValue("padding-top"), 10) - parseInt(style.getPropertyValue("padding-bottom"), 10);
	} // Calculate width without padding.


	function innerWidth(el) {
	  var style = window.getComputedStyle(el, null); // Hidden iframe in Firefox returns null, https://github.com/malte-wessel/react-textfit/pull/34

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

	var _extends = Object.assign || function (target) {
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

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();



	var _react2 = _interopRequireDefault(react);



	var _propTypes2 = _interopRequireDefault(propTypes);



	var _shallowEqual2 = _interopRequireDefault(shallowEqual_1);



	var _series2 = _interopRequireDefault(series_1);



	var _whilst2 = _interopRequireDefault(whilst_1);



	var _throttle2 = _interopRequireDefault(throttle_1);



	var _uniqueId2 = _interopRequireDefault(uniqueId_1);



	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : {
	    default: obj
	  };
	}

	function _objectWithoutProperties(obj, keys) {
	  var target = {};

	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }

	  return target;
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

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
	      } // Setting a new pid will cancel all running processes


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
	      this.setState({
	        ready: false
	      });
	      (0, _series2.default)([// Step 1:
	      // Binary search to fit the element's height (multi line) / width (single line)
	      function (stepCallback) {
	        return (0, _whilst2.default)(function () {
	          return low <= high;
	        }, function (whilstCallback) {
	          if (shouldCancelProcess()) return whilstCallback(true);
	          mid = parseInt((low + high) / 2, 10);

	          _this2.setState({
	            fontSize: mid
	          }, function () {
	            if (shouldCancelProcess()) return whilstCallback(true);
	            if (testPrimary()) low = mid + 1;else high = mid - 1;
	            return whilstCallback();
	          });
	        }, stepCallback);
	      }, // Step 2:
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

	          _this2.setState({
	            fontSize: mid
	          }, function () {
	            if (pid !== _this2.pid) return whilstCallback(true);
	            if (testSecondary()) low = mid + 1;else high = mid - 1;
	            return whilstCallback();
	          });
	        }, stepCallback);
	      }, // Step 3
	      // Limits
	      function (stepCallback) {
	        // We break the previous loop without updating mid for the final time,
	        // so we do it here:
	        mid = Math.min(low, high); // Ensure we hit the user-supplied limits

	        mid = Math.max(mid, min);
	        mid = Math.min(mid, max); // Sanity check:

	        mid = Math.max(mid, 0);
	        if (shouldCancelProcess()) return stepCallback(true);

	        _this2.setState({
	          fontSize: mid
	        }, stepCallback);
	      }], function (err) {
	        // err will be true, if another process was triggered
	        if (err || shouldCancelProcess()) return;

	        _this2.setState({
	          ready: true
	        }, function () {
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
	      return _react2.default.createElement('div', _extends({
	        ref: function ref(c) {
	          return _this3._parent = c;
	        },
	        style: finalStyle
	      }, props), _react2.default.createElement('div', {
	        ref: function ref(c) {
	          return _this3._child = c;
	        },
	        style: wrapperStyle
	      }, text && typeof children === 'function' ? ready ? children(text) : text : children));
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

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : {
	    default: obj
	  };
	}

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
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
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

	var nodeUtil = function () {
	  try {
	    // Use `util.types` for Node.js 10+.
	    var types = freeModule && freeModule.require && freeModule.require('util').types;

	    if (types) {
	      return types;
	    } // Legacy `process.binding('util')` for Node.js < 10.


	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}();
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
	    case 0:
	      return func.call(thisArg);

	    case 1:
	      return func.call(thisArg, args[0]);

	    case 2:
	      return func.call(thisArg, args[0], args[1]);

	    case 3:
	      return func.call(thisArg, args[0], args[1], args[2]);
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
	  return function (value) {
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
	  return function (arg) {
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

	var maskSrcKey = function () {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? 'Symbol(src)_1.' + uid : '';
	}();
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */


	var nativeObjectToString = objectProto.toString;
	/** Used to infer the `Object` constructor. */

	var objectCtorString = funcToString.call(Object);
	/** Used to detect if a method is native. */

	var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
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

	var defineProperty = function () {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}();
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

	var baseCreate = function () {
	  function object() {}

	  return function (proto) {
	    if (!isObject(proto)) {
	      return {};
	    }

	    if (objectCreate) {
	      return objectCreate(proto);
	    }

	    object.prototype = proto;
	    var result = new object();
	    object.prototype = undefined;
	    return result;
	  };
	}();
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
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
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
	  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
	  return this;
	} // Add methods to `Hash`.


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
	} // Add methods to `ListCache`.


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
	    'hash': new Hash(),
	    'map': new (Map || ListCache)(),
	    'string': new Hash()
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
	} // Add methods to `MapCache`.


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
	  this.__data__ = new ListCache();
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

	    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }

	    data = this.__data__ = new MapCache(pairs);
	  }

	  data.set(key, value);
	  this.size = data.size;
	  return this;
	} // Add methods to `Stack`.


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
	    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
	    key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
	    isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
	    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
	    isIndex(key, length)))) {
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
	  if (value !== undefined && !eq(object[key], value) || value === undefined && !(key in object)) {
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

	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
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

	  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
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
	  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
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

	  baseFor(source, function (srcValue, key) {
	    stack || (stack = new Stack());

	    if (isObject(srcValue)) {
	      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
	    } else {
	      var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + '', object, source, stack) : undefined;

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

	  var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;
	  var isCommon = newValue === undefined;

	  if (isCommon) {
	    var isArr = isArray(srcValue),
	        isBuff = !isArr && isBuffer(srcValue),
	        isTyped = !isArr && !isBuff && isTypedArray(srcValue);
	    newValue = srcValue;

	    if (isArr || isBuff || isTyped) {
	      if (isArray(objValue)) {
	        newValue = objValue;
	      } else if (isArrayLikeObject(objValue)) {
	        newValue = copyArray(objValue);
	      } else if (isBuff) {
	        isCommon = false;
	        newValue = cloneBuffer(srcValue, true);
	      } else if (isTyped) {
	        isCommon = false;
	        newValue = cloneTypedArray(srcValue, true);
	      } else {
	        newValue = [];
	      }
	    } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	      newValue = objValue;

	      if (isArguments(objValue)) {
	        newValue = toPlainObject(objValue);
	      } else if (!isObject(objValue) || isFunction(objValue)) {
	        newValue = initCloneObject(srcValue);
	      }
	    } else {
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


	var baseSetToString = !defineProperty ? identity : function (func, string) {
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
	    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

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
	  return baseRest(function (object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;
	    customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;

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
	  return function (object, iteratee, keysFunc) {
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
	  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
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
	  return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
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
	  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
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

	  if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
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
	  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
	}
	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */


	function isMasked(func) {
	  return !!maskSrcKey && maskSrcKey in func;
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
	      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
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
	  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
	  return function () {
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
	  return function () {
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
	      return func + '';
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
	  return value === other || value !== value && other !== other;
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


	var isArguments = baseIsArguments(function () {
	  return arguments;
	}()) ? baseIsArguments : function (value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
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
	  } // The use of `Object#toString` avoids issues with the `typeof` operator
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
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
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
	  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
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


	var mergeWith = createAssigner(function (object, source, srcIndex, customizer) {
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
	  return function () {
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

	var getRtl = _ref => {
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

	function _extends$4() {
	  _extends$4 = Object.assign || function (target) {
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

	  return _extends$4.apply(this, arguments);
	}

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

	function _wrapRegExp(re, groups) {
	  _wrapRegExp = function _wrapRegExp(re, groups) {
	    return new BabelRegExp(re, undefined, groups);
	  };

	  var _RegExp = _wrapNativeSuper(RegExp);

	  var _super = RegExp.prototype;

	  var _groups = new WeakMap();

	  function BabelRegExp(re, flags, groups) {
	    var _this = _RegExp.call(this, re, flags);

	    _groups.set(_this, groups || _groups.get(re));

	    return _this;
	  }

	  _inherits(BabelRegExp, _RegExp);

	  BabelRegExp.prototype.exec = function (str) {
	    var result = _super.exec.call(this, str);

	    if (result) result.groups = buildGroups(result, this);
	    return result;
	  };

	  BabelRegExp.prototype[Symbol.replace] = function (str, substitution) {
	    if (typeof substitution === "string") {
	      var groups = _groups.get(this);

	      return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) {
	        return "$" + groups[name];
	      }));
	    } else if (typeof substitution === "function") {
	      var _this = this;

	      return _super[Symbol.replace].call(this, str, function () {
	        var args = [];
	        args.push.apply(args, arguments);

	        if (typeof args[args.length - 1] !== "object") {
	          args.push(buildGroups(args, _this));
	        }

	        return substitution.apply(this, args);
	      });
	    } else {
	      return _super[Symbol.replace].call(this, str, substitution);
	    }
	  };

	  function buildGroups(result, re) {
	    var g = _groups.get(re);

	    return Object.keys(g).reduce(function (groups, name) {
	      groups[name] = result[g[name]];
	      return groups;
	    }, Object.create(null));
	  }

	  return _wrapRegExp.apply(this, arguments);
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf(subClass, superClass);
	}

	function _wrapNativeSuper(Class) {
	  var _cache = typeof Map === "function" ? new Map() : undefined;

	  _wrapNativeSuper = function _wrapNativeSuper(Class) {
	    if (Class === null || !_isNativeFunction(Class)) return Class;

	    if (typeof Class !== "function") {
	      throw new TypeError("Super expression must either be null or a function");
	    }

	    if (typeof _cache !== "undefined") {
	      if (_cache.has(Class)) return _cache.get(Class);

	      _cache.set(Class, Wrapper);
	    }

	    function Wrapper() {
	      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
	    }

	    Wrapper.prototype = Object.create(Class.prototype, {
	      constructor: {
	        value: Wrapper,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    return _setPrototypeOf(Wrapper, Class);
	  };

	  return _wrapNativeSuper(Class);
	}

	function _construct(Parent, args, Class) {
	  if (_isNativeReflectConstruct()) {
	    _construct = Reflect.construct;
	  } else {
	    _construct = function _construct(Parent, args, Class) {
	      var a = [null];
	      a.push.apply(a, args);
	      var Constructor = Function.bind.apply(Parent, a);
	      var instance = new Constructor();
	      if (Class) _setPrototypeOf(instance, Class.prototype);
	      return instance;
	    };
	  }

	  return _construct.apply(null, arguments);
	}

	function _isNativeReflectConstruct() {
	  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	  if (Reflect.construct.sham) return false;
	  if (typeof Proxy === "function") return true;

	  try {
	    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
	    return true;
	  } catch (e) {
	    return false;
	  }
	}

	function _isNativeFunction(fn) {
	  return Function.toString.call(fn).indexOf("[native code]") !== -1;
	}

	function _setPrototypeOf(o, p) {
	  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };

	  return _setPrototypeOf(o, p);
	}

	function _getPrototypeOf(o) {
	  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  return _getPrototypeOf(o);
	}

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

	function _extends$3() {
	  _extends$3 = Object.assign || function (target) {
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

	  return _extends$3.apply(this, arguments);
	}
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
	var css$1 = styles => theme => {
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

	var e = "-ms-";
	var r = "-moz-";
	var a = "-webkit-";
	var c = "comm";
	var n = "rule";
	var t = "decl";
	var i = "@import";
	var p = "@keyframes";
	var k = Math.abs;
	var d = String.fromCharCode;

	function m(e, r) {
	  return (((r << 2 ^ z(e, 0)) << 2 ^ z(e, 1)) << 2 ^ z(e, 2)) << 2 ^ z(e, 3);
	}

	function g(e) {
	  return e.trim();
	}

	function x(e, r) {
	  return (e = r.exec(e)) ? e[0] : e;
	}

	function y(e, r, a) {
	  return e.replace(r, a);
	}

	function j(e, r) {
	  return e.indexOf(r);
	}

	function z(e, r) {
	  return e.charCodeAt(r) | 0;
	}

	function C(e, r, a) {
	  return e.slice(r, a);
	}

	function A(e) {
	  return e.length;
	}

	function M(e) {
	  return e.length;
	}

	function O(e, r) {
	  return r.push(e), e;
	}

	function S(e, r) {
	  return e.map(r).join("");
	}

	var q = 1;
	var B = 1;
	var D = 0;
	var E = 0;
	var F = 0;
	var G = "";

	function H(e, r, a, c, n, t, s) {
	  return {
	    value: e,
	    root: r,
	    parent: a,
	    type: c,
	    props: n,
	    children: t,
	    line: q,
	    column: B,
	    length: s,
	    return: ""
	  };
	}

	function I(e, r, a) {
	  return H(e, r.root, r.parent, a, r.props, r.children, 0);
	}

	function J() {
	  return F;
	}

	function K() {
	  F = E > 0 ? z(G, --E) : 0;
	  if (B--, F === 10) B = 1, q--;
	  return F;
	}

	function L() {
	  F = E < D ? z(G, E++) : 0;
	  if (B++, F === 10) B = 1, q++;
	  return F;
	}

	function N() {
	  return z(G, E);
	}

	function P() {
	  return E;
	}

	function Q(e, r) {
	  return C(G, e, r);
	}

	function R(e) {
	  switch (e) {
	    case 0:
	    case 9:
	    case 10:
	    case 13:
	    case 32:
	      return 5;

	    case 33:
	    case 43:
	    case 44:
	    case 47:
	    case 62:
	    case 64:
	    case 126:
	    case 59:
	    case 123:
	    case 125:
	      return 4;

	    case 58:
	      return 3;

	    case 34:
	    case 39:
	    case 40:
	    case 91:
	      return 2;

	    case 41:
	    case 93:
	      return 1;
	  }

	  return 0;
	}

	function T(e) {
	  return q = B = 1, D = A(G = e), E = 0, [];
	}

	function U(e) {
	  return G = "", e;
	}

	function V(e) {
	  return g(Q(E - 1, _(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
	}

	function X(e) {
	  while (F = N()) if (F < 33) L();else break;

	  return R(e) > 2 || R(F) > 3 ? "" : " ";
	}

	function Z(e, r) {
	  while (--r && L()) if (F < 48 || F > 102 || F > 57 && F < 65 || F > 70 && F < 97) break;

	  return Q(e, P() + (r < 6 && N() == 32 && L() == 32));
	}

	function _(e) {
	  while (L()) switch (F) {
	    case e:
	      return E;

	    case 34:
	    case 39:
	      return _(e === 34 || e === 39 ? e : F);

	    case 40:
	      if (e === 41) _(e);
	      break;

	    case 92:
	      L();
	      break;
	  }

	  return E;
	}

	function ee(e, r) {
	  while (L()) if (e + F === 47 + 10) break;else if (e + F === 42 + 42 && N() === 47) break;

	  return "/*" + Q(r, E - 1) + "*" + d(e === 47 ? e : L());
	}

	function re(e) {
	  while (!R(N())) L();

	  return Q(e, E);
	}

	function ae(e) {
	  return U(ce("", null, null, null, [""], e = T(e), 0, [0], e));
	}

	function ce(e, r, a, c, n, t, s, u, i) {
	  var f = 0;
	  var o = 0;
	  var l = s;
	  var v = 0;
	  var h = 0;
	  var p = 0;
	  var b = 1;
	  var w = 1;
	  var $ = 1;
	  var k = 0;
	  var m = "";
	  var g = n;
	  var x = t;
	  var j = c;
	  var z = m;

	  while (w) switch (p = k, k = L()) {
	    case 34:
	    case 39:
	    case 91:
	    case 40:
	      z += V(k);
	      break;

	    case 9:
	    case 10:
	    case 13:
	    case 32:
	      z += X(p);
	      break;

	    case 92:
	      z += Z(P() - 1, 7);
	      continue;

	    case 47:
	      switch (N()) {
	        case 42:
	        case 47:
	          O(te(ee(L(), P()), r, a), i);
	          break;

	        default:
	          z += "/";
	      }

	      break;

	    case 123 * b:
	      u[f++] = A(z) * $;

	    case 125 * b:
	    case 59:
	    case 0:
	      switch (k) {
	        case 0:
	        case 125:
	          w = 0;

	        case 59 + o:
	          if (h > 0 && A(z) - l) O(h > 32 ? se(z + ";", c, a, l - 1) : se(y(z, " ", "") + ";", c, a, l - 2), i);
	          break;

	        case 59:
	          z += ";";

	        default:
	          O(j = ne(z, r, a, f, o, n, u, m, g = [], x = [], l), t);
	          if (k === 123) if (o === 0) ce(z, r, j, j, g, t, l, u, x);else switch (v) {
	            case 100:
	            case 109:
	            case 115:
	              ce(e, j, j, c && O(ne(e, j, j, 0, 0, n, u, m, n, g = [], l), x), n, x, l, u, c ? g : x);
	              break;

	            default:
	              ce(z, j, j, j, [""], x, l, u, x);
	          }
	      }

	      f = o = h = 0, b = $ = 1, m = z = "", l = s;
	      break;

	    case 58:
	      l = 1 + A(z), h = p;

	    default:
	      if (b < 1) if (k == 123) --b;else if (k == 125 && b++ == 0 && K() == 125) continue;

	      switch (z += d(k), k * b) {
	        case 38:
	          $ = o > 0 ? 1 : (z += "\f", -1);
	          break;

	        case 44:
	          u[f++] = (A(z) - 1) * $, $ = 1;
	          break;

	        case 64:
	          if (N() === 45) z += V(L());
	          v = N(), o = A(m = z += re(P())), k++;
	          break;

	        case 45:
	          if (p === 45 && A(z) == 2) b = 0;
	      }

	  }

	  return t;
	}

	function ne(e, r, a, c, t, s, u, i, f, o, l) {
	  var v = t - 1;
	  var h = t === 0 ? s : [""];
	  var p = M(h);

	  for (var b = 0, w = 0, $ = 0; b < c; ++b) for (var d = 0, m = C(e, v + 1, v = k(w = u[b])), x = e; d < p; ++d) if (x = g(w > 0 ? h[d] + " " + m : y(m, /&\f/g, h[d]))) f[$++] = x;

	  return H(e, r, a, t === 0 ? n : i, f, o, l);
	}

	function te(e, r, a) {
	  return H(e, r, a, c, d(J()), C(e, 2, -2), 0);
	}

	function se(e, r, a, c) {
	  return H(e, r, a, t, C(e, 0, c), C(e, c + 1, -1), c);
	}

	function ue(c, n) {
	  switch (m(c, n)) {
	    case 5103:
	      return a + "print-" + c + c;

	    case 5737:
	    case 4201:
	    case 3177:
	    case 3433:
	    case 1641:
	    case 4457:
	    case 2921:
	    case 5572:
	    case 6356:
	    case 5844:
	    case 3191:
	    case 6645:
	    case 3005:
	    case 6391:
	    case 5879:
	    case 5623:
	    case 6135:
	    case 4599:
	    case 4855:
	    case 4215:
	    case 6389:
	    case 5109:
	    case 5365:
	    case 5621:
	    case 3829:
	      return a + c + c;

	    case 5349:
	    case 4246:
	    case 4810:
	    case 6968:
	    case 2756:
	      return a + c + r + c + e + c + c;

	    case 6828:
	    case 4268:
	      return a + c + e + c + c;

	    case 6165:
	      return a + c + e + "flex-" + c + c;

	    case 5187:
	      return a + c + y(c, /(\w+).+(:[^]+)/, a + "box-$1$2" + e + "flex-$1$2") + c;

	    case 5443:
	      return a + c + e + "flex-item-" + y(c, /flex-|-self/, "") + c;

	    case 4675:
	      return a + c + e + "flex-line-pack" + y(c, /align-content|flex-|-self/, "") + c;

	    case 5548:
	      return a + c + e + y(c, "shrink", "negative") + c;

	    case 5292:
	      return a + c + e + y(c, "basis", "preferred-size") + c;

	    case 6060:
	      return a + "box-" + y(c, "-grow", "") + a + c + e + y(c, "grow", "positive") + c;

	    case 4554:
	      return a + y(c, /([^-])(transform)/g, "$1" + a + "$2") + c;

	    case 6187:
	      return y(y(y(c, /(zoom-|grab)/, a + "$1"), /(image-set)/, a + "$1"), c, "") + c;

	    case 5495:
	    case 3959:
	      return y(c, /(image-set\([^]*)/, a + "$1" + "$`$1");

	    case 4968:
	      return y(y(c, /(.+:)(flex-)?(.*)/, a + "box-pack:$3" + e + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + a + c + c;

	    case 4095:
	    case 3583:
	    case 4068:
	    case 2532:
	      return y(c, /(.+)-inline(.+)/, a + "$1$2") + c;

	    case 8116:
	    case 7059:
	    case 5753:
	    case 5535:
	    case 5445:
	    case 5701:
	    case 4933:
	    case 4677:
	    case 5533:
	    case 5789:
	    case 5021:
	    case 4765:
	      if (A(c) - 1 - n > 6) switch (z(c, n + 1)) {
	        case 109:
	          if (z(c, n + 4) !== 45) break;

	        case 102:
	          return y(c, /(.+:)(.+)-([^]+)/, "$1" + a + "$2-$3" + "$1" + r + (z(c, n + 3) == 108 ? "$3" : "$2-$3")) + c;

	        case 115:
	          return ~j(c, "stretch") ? ue(y(c, "stretch", "fill-available"), n) + c : c;
	      }
	      break;

	    case 4949:
	      if (z(c, n + 1) !== 115) break;

	    case 6444:
	      switch (z(c, A(c) - 3 - (~j(c, "!important") && 10))) {
	        case 107:
	          return y(c, ":", ":" + a) + c;

	        case 101:
	          return y(c, /(.+:)([^;!]+)(;|!.+)?/, "$1" + a + (z(c, 14) === 45 ? "inline-" : "") + "box$3" + "$1" + a + "$2$3" + "$1" + e + "$2box$3") + c;
	      }

	      break;

	    case 5936:
	      switch (z(c, n + 11)) {
	        case 114:
	          return a + c + e + y(c, /[svh]\w+-[tblr]{2}/, "tb") + c;

	        case 108:
	          return a + c + e + y(c, /[svh]\w+-[tblr]{2}/, "tb-rl") + c;

	        case 45:
	          return a + c + e + y(c, /[svh]\w+-[tblr]{2}/, "lr") + c;
	      }

	      return a + c + e + c + c;
	  }

	  return c;
	}

	function ie(e, r) {
	  var a = "";
	  var c = M(e);

	  for (var n = 0; n < c; n++) a += r(e[n], n, e, r) || "";

	  return a;
	}

	function fe(e, r, a, s) {
	  switch (e.type) {
	    case i:
	    case t:
	      return e.return = e.return || e.value;

	    case c:
	      return "";

	    case n:
	      e.value = e.props.join(",");
	  }

	  return A(a = ie(e.children, s)) ? e.return = e.value + "{" + a + "}" : "";
	}

	function oe(e) {
	  var r = M(e);
	  return function (a, c, n, t) {
	    var s = "";

	    for (var u = 0; u < r; u++) s += e[u](a, c, n, t) || "";

	    return s;
	  };
	}

	function le(e) {
	  return function (r) {
	    if (!r.root) if (r = r.return) e(r);
	  };
	}

	function ve(c, s, u, i) {
	  if (!c.return) switch (c.type) {
	    case t:
	      c.return = ue(c.value, c.length);
	      break;

	    case p:
	      return ie([I(y(c.value, "@", "@" + a), c, "")], i);

	    case n:
	      if (c.length) return S(c.props, function (n) {
	        switch (x(n, /(::plac\w+|:read-\w+)/)) {
	          case ":read-only":
	          case ":read-write":
	            return ie([I(y(n, /:(read-\w+)/, ":" + r + "$1"), c, "")], i);

	          case "::placeholder":
	            return ie([I(y(n, /:(plac\w+)/, ":" + a + "input-$1"), c, ""), I(y(n, /:(plac\w+)/, ":" + r + "$1"), c, ""), I(y(n, /:(plac\w+)/, e + "input-$1"), c, "")], i);
	        }

	        return "";
	      });
	  }
	}

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

	var FORWARD_REF_STATICS = {
	  '$$typeof': true,
	  render: true,
	  defaultProps: true,
	  displayName: true,
	  propTypes: true
	};
	var MEMO_STATICS = {
	  '$$typeof': true,
	  compare: true,
	  defaultProps: true,
	  displayName: true,
	  propTypes: true,
	  type: true
	};
	var TYPE_STATICS = {};
	TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
	TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

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

	// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
	// initial client-side render from SSR, use place of hydrating tag

	var Global = /* #__PURE__ */withEmotionCache(function (props, cache) {

	  var styles = props.styles;
	  var serialized = serializeStyles([styles], undefined, typeof styles === 'function' || Array.isArray(styles) ? react_19(ThemeContext) : undefined);

	  if (!isBrowser$1) {
	    var _ref;

	    var serializedNames = serialized.name;
	    var serializedStyles = serialized.styles;
	    var next = serialized.next;

	    while (next !== undefined) {
	      serializedNames += ' ' + next.name;
	      serializedStyles += next.styles;
	      next = next.next;
	    }

	    var shouldCache = cache.compat === true;
	    var rules = cache.insert("", {
	      name: serializedNames,
	      styles: serializedStyles
	    }, cache.sheet, shouldCache);

	    if (shouldCache) {
	      return null;
	    }

	    return /*#__PURE__*/react_11("style", (_ref = {}, _ref["data-emotion"] = cache.key + "-global " + serializedNames, _ref.dangerouslySetInnerHTML = {
	      __html: rules
	    }, _ref.nonce = cache.sheet.nonce, _ref));
	  } // yes, i know these hooks are used conditionally
	  // but it is based on a constant that will never change at runtime
	  // it's effectively like having two implementations and switching them out
	  // so it's not actually breaking anything


	  var sheetRef = react_26();
	  react_23(function () {
	    var key = cache.key + "-global";
	    var sheet = new StyleSheet({
	      key: key,
	      nonce: cache.sheet.nonce,
	      container: cache.sheet.container,
	      speedy: cache.sheet.isSpeedy
	    }); // $FlowFixMe

	    var node = document.querySelector("style[data-emotion=\"" + key + " " + serialized.name + "\"]");

	    if (cache.sheet.tags.length) {
	      sheet.before = cache.sheet.tags[0];
	    }

	    if (node !== null) {
	      sheet.hydrate([node]);
	    }

	    sheetRef.current = sheet;
	    return function () {
	      sheet.flush();
	    };
	  }, [cache]);
	  react_23(function () {
	    if (serialized.next !== undefined) {
	      // insert keyframes
	      insertStyles(cache, serialized.next, true);
	    }

	    var sheet = sheetRef.current;

	    if (sheet.tags.length) {
	      // if this doesn't exist then it will be null so the style element will be appended
	      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
	      sheet.before = element;
	      sheet.flush();
	    }

	    cache.insert("", serialized, sheet, false);
	  }, [cache, serialized.name]);
	  return null;
	});

	function css() {
	  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  return serializeStyles(args);
	}

	/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */
	var hasElementType = typeof Element !== 'undefined';
	var hasMap = typeof Map === 'function';
	var hasSet = typeof Set === 'function';
	var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView; // Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

	function equal(a, b) {
	  // START: fast-deep-equal es6/index.js 3.1.1
	  if (a === b) return true;

	  if (a && b && typeof a == 'object' && typeof b == 'object') {
	    if (a.constructor !== b.constructor) return false;
	    var length, i, keys;

	    if (Array.isArray(a)) {
	      length = a.length;
	      if (length != b.length) return false;

	      for (i = length; i-- !== 0;) if (!equal(a[i], b[i])) return false;

	      return true;
	    } // START: Modifications:
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

	    if (hasMap && a instanceof Map && b instanceof Map) {
	      if (a.size !== b.size) return false;
	      it = a.entries();

	      while (!(i = it.next()).done) if (!b.has(i.value[0])) return false;

	      it = a.entries();

	      while (!(i = it.next()).done) if (!equal(i.value[1], b.get(i.value[0]))) return false;

	      return true;
	    }

	    if (hasSet && a instanceof Set && b instanceof Set) {
	      if (a.size !== b.size) return false;
	      it = a.entries();

	      while (!(i = it.next()).done) if (!b.has(i.value[0])) return false;

	      return true;
	    } // END: Modifications


	    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
	      length = a.length;
	      if (length != b.length) return false;

	      for (i = length; i-- !== 0;) if (a[i] !== b[i]) return false;

	      return true;
	    }

	    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
	    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
	    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
	    keys = Object.keys(a);
	    length = keys.length;
	    if (length !== Object.keys(b).length) return false;

	    for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false; // END: fast-deep-equal
	    // START: react-fast-compare
	    // custom handling for DOM elements


	    if (hasElementType && a instanceof Element) return false; // custom handling for React/Preact

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
	      } // all other properties should be traversed as usual


	      if (!equal(a[keys[i]], b[keys[i]])) return false;
	    } // END: react-fast-compare
	    // START: fast-deep-equal


	    return true;
	  }

	  return a !== a && b !== b;
	} // end fast-deep-equal


	var reactFastCompare = function isEqual(a, b) {
	  try {
	    return equal(a, b);
	  } catch (error) {
	    if ((error.message || '').match(/stack|recursion/i)) {
	      // warn on circular references, don't crash
	      // browsers give this different errors name and messages:
	      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
	      // firefox: "InternalError", too much recursion"
	      // edge: "Error", "Out of stack space"
	      console.warn('react-fast-compare cannot handle circular refs');
	      return false;
	    } // some other error. we should definitely know about these


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
	      var error = new Error(errorMessage);
	      error.name = "ContextError";
	      Error.captureStackTrace == null ? void 0 : Error.captureStackTrace(error, useContext);
	      throw error;
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

	function _extends$1() {
	  _extends$1 = Object.assign || function (target) {
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

	  return _extends$1.apply(this, arguments);
	}
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

	        return /*#__PURE__*/react_11(react_1, null, /*#__PURE__*/react_11("style", (_ref = {}, _ref["data-emotion"] = cache.key + " " + serializedNames, _ref.dangerouslySetInnerHTML = {
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

	function _objectWithoutPropertiesLoose$2(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}
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

	var toCSSObject = _ref => {
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
	    var computedCSS = css$1(finalStyles)(props.theme);
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

	function _objectWithoutPropertiesLoose$1(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}
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

	function _extends() {
	  _extends = Object.assign || function (target) {
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

	  return _extends.apply(this, arguments);
	}

	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}
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

	function _taggedTemplateLiteral(strings, raw) {
	  if (!raw) {
	    raw = strings.slice(0);
	  }

	  return Object.freeze(Object.defineProperties(strings, {
	    raw: {
	      value: Object.freeze(raw)
	    }
	  }));
	}

	var _templateObject;

	var Fonts = function Fonts() {
	  return /*#__PURE__*/react_11(Global, {
	    styles: css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      /* Helvetica */\n      @font-face {\n        font-family: \"Helvetica\";\n        font-style: normal;\n        font-weight: 400;\n        font-display: swap;\n        src: url(\"./Helvetica.ttf\") format(\"truetype\");\n      }\n    "])))
	  });
	};

	var styles = {
	  w: "inherit",
	  color: "white",
	  fontFamily: "Helvetica, sans-serif"
	};

	var App = function App() {
	  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Fonts, null), /*#__PURE__*/react.createElement(Box, {
	    width: "100vw",
	    height: "100vh"
	  }, /*#__PURE__*/react.createElement(Heading, styles, /*#__PURE__*/react.createElement(Textfit, {
	    mode: "single",
	    max: 5000
	  }, "$", window.ticker)), /*#__PURE__*/react.createElement(Heading, styles, /*#__PURE__*/react.createElement(Textfit, {
	    mode: "single",
	    max: 5000
	  }, window.average, " AVG"))));
	};

	reactDom_6( /*#__PURE__*/react.createElement(App, null), document.getElementById("image-wrapper"));

}());
