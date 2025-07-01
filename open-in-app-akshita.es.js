import Pe, { useEffect as fr } from "react";
var M = { exports: {} }, I = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function cr() {
  if (Te) return I;
  Te = 1;
  var k = Pe, R = Symbol.for("react.element"), D = Symbol.for("react.fragment"), E = Object.prototype.hasOwnProperty, m = k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, S = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(h, f, b) {
    var p, _ = {}, O = null, W = null;
    b !== void 0 && (O = "" + b), f.key !== void 0 && (O = "" + f.key), f.ref !== void 0 && (W = f.ref);
    for (p in f) E.call(f, p) && !S.hasOwnProperty(p) && (_[p] = f[p]);
    if (h && h.defaultProps) for (p in f = h.defaultProps, f) _[p] === void 0 && (_[p] = f[p]);
    return { $$typeof: R, type: h, key: O, ref: W, props: _, _owner: m.current };
  }
  return I.Fragment = D, I.jsx = T, I.jsxs = T, I;
}
var $ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function vr() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var k = Pe, R = Symbol.for("react.element"), D = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), h = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), H = Symbol.iterator, Se = "@@iterator";
    function Ce(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = H && e[H] || e[Se];
      return typeof r == "function" ? r : null;
    }
    var C = k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function c(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        je("error", e, t);
      }
    }
    function je(e, r, t) {
      {
        var n = C.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var xe = !1, ke = !1, De = !1, Ae = !1, Fe = !1, Z;
    Z = Symbol.for("react.module.reference");
    function Ie(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === E || e === S || Fe || e === m || e === b || e === p || Ae || e === W || xe || ke || De || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === _ || e.$$typeof === T || e.$$typeof === h || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Z || e.getModuleId !== void 0));
    }
    function $e(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function Q(e) {
      return e.displayName || "Context";
    }
    function y(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case E:
          return "Fragment";
        case D:
          return "Portal";
        case S:
          return "Profiler";
        case m:
          return "StrictMode";
        case b:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            var r = e;
            return Q(r) + ".Consumer";
          case T:
            var t = e;
            return Q(t._context) + ".Provider";
          case f:
            return $e(e, e.render, "ForwardRef");
          case _:
            var n = e.displayName || null;
            return n !== null ? n : y(e.type) || "Memo";
          case O: {
            var o = e, u = o._payload, i = o._init;
            try {
              return y(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var w = Object.assign, A = 0, ee, re, te, ne, ae, ie, oe;
    function ue() {
    }
    ue.__reactDisabledLog = !0;
    function We() {
      {
        if (A === 0) {
          ee = console.log, re = console.info, te = console.warn, ne = console.error, ae = console.group, ie = console.groupCollapsed, oe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ue,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        A++;
      }
    }
    function Ye() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: w({}, e, {
              value: ee
            }),
            info: w({}, e, {
              value: re
            }),
            warn: w({}, e, {
              value: te
            }),
            error: w({}, e, {
              value: ne
            }),
            group: w({}, e, {
              value: ae
            }),
            groupCollapsed: w({}, e, {
              value: ie
            }),
            groupEnd: w({}, e, {
              value: oe
            })
          });
        }
        A < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var N = C.ReactCurrentDispatcher, J;
    function Y(e, r, t) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            J = n && n[1] || "";
          }
        return `
` + J + e;
      }
    }
    var q = !1, L;
    {
      var Le = typeof WeakMap == "function" ? WeakMap : Map;
      L = new Le();
    }
    function se(e, r) {
      if (!e || q)
        return "";
      {
        var t = L.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      q = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = N.current, N.current = null, We();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (d) {
              n = d;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (d) {
              n = d;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (d) {
            n = d;
          }
          e();
        }
      } catch (d) {
        if (d && n && typeof d.stack == "string") {
          for (var a = d.stack.split(`
`), v = n.stack.split(`
`), s = a.length - 1, l = v.length - 1; s >= 1 && l >= 0 && a[s] !== v[l]; )
            l--;
          for (; s >= 1 && l >= 0; s--, l--)
            if (a[s] !== v[l]) {
              if (s !== 1 || l !== 1)
                do
                  if (s--, l--, l < 0 || a[s] !== v[l]) {
                    var g = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", e.displayName)), typeof e == "function" && L.set(e, g), g;
                  }
                while (s >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        q = !1, N.current = u, Ye(), Error.prepareStackTrace = o;
      }
      var x = e ? e.displayName || e.name : "", P = x ? Y(x) : "";
      return typeof e == "function" && L.set(e, P), P;
    }
    function Ue(e, r, t) {
      return se(e, !1);
    }
    function Ve(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return se(e, Ve(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case b:
          return Y("Suspense");
        case p:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Ue(e.render);
          case _:
            return U(e.type, r, t);
          case O: {
            var n = e, o = n._payload, u = n._init;
            try {
              return U(u(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var F = Object.prototype.hasOwnProperty, le = {}, fe = C.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        fe.setExtraStackFrame(t);
      } else
        fe.setExtraStackFrame(null);
    }
    function Me(e, r, t, n, o) {
      {
        var u = Function.call.bind(F);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var v = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (V(o), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), V(null)), a instanceof Error && !(a.message in le) && (le[a.message] = !0, V(o), c("Failed %s type: %s", t, a.message), V(null));
          }
      }
    }
    var Ne = Array.isArray;
    function B(e) {
      return Ne(e);
    }
    function Je(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function qe(e) {
      try {
        return ce(e), !1;
      } catch {
        return !0;
      }
    }
    function ce(e) {
      return "" + e;
    }
    function ve(e) {
      if (qe(e))
        return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), ce(e);
    }
    var de = C.ReactCurrentOwner, Be = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pe, ge;
    function Ke(e) {
      if (F.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ge(e) {
      if (F.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ze(e, r) {
      typeof e.ref == "string" && de.current;
    }
    function Xe(e, r) {
      {
        var t = function() {
          pe || (pe = !0, c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function He(e, r) {
      {
        var t = function() {
          ge || (ge = !0, c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Ze = function(e, r, t, n, o, u, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: R,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function Qe(e, r, t, n, o) {
      {
        var u, i = {}, a = null, v = null;
        t !== void 0 && (ve(t), a = "" + t), Ge(r) && (ve(r.key), a = "" + r.key), Ke(r) && (v = r.ref, ze(r, o));
        for (u in r)
          F.call(r, u) && !Be.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            i[u] === void 0 && (i[u] = s[u]);
        }
        if (a || v) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Xe(i, l), v && He(i, l);
        }
        return Ze(e, a, v, o, n, de.current, i);
      }
    }
    var K = C.ReactCurrentOwner, he = C.ReactDebugCurrentFrame;
    function j(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    var G;
    G = !1;
    function z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === R;
    }
    function Ee() {
      {
        if (K.current) {
          var e = y(K.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function er(e) {
      return "";
    }
    var be = {};
    function rr(e) {
      {
        var r = Ee();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function _e(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = rr(r);
        if (be[t])
          return;
        be[t] = !0;
        var n = "";
        e && e._owner && e._owner !== K.current && (n = " It was passed a child from " + y(e._owner.type) + "."), j(e), c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), j(null);
      }
    }
    function ye(e, r) {
      {
        if (typeof e != "object")
          return;
        if (B(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            z(n) && _e(n, r);
          }
        else if (z(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = Ce(e);
          if (typeof o == "function" && o !== e.entries)
            for (var u = o.call(e), i; !(i = u.next()).done; )
              z(i.value) && _e(i.value, r);
        }
      }
    }
    function tr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === _))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = y(r);
          Me(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !G) {
          G = !0;
          var o = y(r);
          c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function nr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            j(e), c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), j(null);
            break;
          }
        }
        e.ref !== null && (j(e), c("Invalid attribute `ref` supplied to `React.Fragment`."), j(null));
      }
    }
    var Re = {};
    function me(e, r, t, n, o, u) {
      {
        var i = Ie(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = er();
          v ? a += v : a += Ee();
          var s;
          e === null ? s = "null" : B(e) ? s = "array" : e !== void 0 && e.$$typeof === R ? (s = "<" + (y(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var l = Qe(e, r, t, o, u);
        if (l == null)
          return l;
        if (i) {
          var g = r.children;
          if (g !== void 0)
            if (n)
              if (B(g)) {
                for (var x = 0; x < g.length; x++)
                  ye(g[x], e);
                Object.freeze && Object.freeze(g);
              } else
                c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ye(g, e);
        }
        if (F.call(r, "key")) {
          var P = y(e), d = Object.keys(r).filter(function(lr) {
            return lr !== "key";
          }), X = d.length > 0 ? "{key: someKey, " + d.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Re[P + X]) {
            var sr = d.length > 0 ? "{" + d.join(": ..., ") + ": ...}" : "{}";
            c(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, X, P, sr, P), Re[P + X] = !0;
          }
        }
        return e === E ? nr(l) : tr(l), l;
      }
    }
    function ar(e, r, t) {
      return me(e, r, t, !0);
    }
    function ir(e, r, t) {
      return me(e, r, t, !1);
    }
    var or = ir, ur = ar;
    $.Fragment = E, $.jsx = or, $.jsxs = ur;
  }()), $;
}
var we;
function dr() {
  return we || (we = 1, process.env.NODE_ENV === "production" ? M.exports = cr() : M.exports = vr()), M.exports;
}
var pr = dr();
const hr = ({
  deepLink: k,
  fallbackPlayStore: R,
  fallbackAppStore: D,
  delay: E = 2e3,
  autoRedirect: m = !1,
  buttonText: S = "Open in App"
}) => {
  const T = /iPhone|iPad|iPod/i.test(navigator.userAgent), h = () => {
    const f = Date.now();
    window.location.href = k, setTimeout(() => {
      const b = T ? D : R;
      Date.now() - f >= E && b && (window.location.href = b);
    }, E);
  };
  return fr(() => {
    m && h();
  }, []), m ? null : /* @__PURE__ */ pr.jsx("button", { onClick: h, children: S });
};
export {
  hr as default
};
