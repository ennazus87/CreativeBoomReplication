// function e() {
//     function t(t) {
//         var r = e.createElement("link");
//         r.type = "image/x-icon", r.rel = "icon", r.href = t, t = n.getElementsByTagName("link");
//         for (var o = 0; o < t.length; o++) /\bicon\b/i.test(t[o].getAttribute("rel")) && n.removeChild(t[o]);
//         n.appendChild(r)
//     }
//     var e = document,
//         n = e.getElementsByTagName("head")[0],
//         r = null;
//     return {
//         defaultPause: 2e3,
//         change: function (n, o) {
//             clearTimeout(r), o && (e.title = o), "" !== n && t(n)
//         },
//         animate: function (e, n) {
//             clearTimeout(r), e.forEach(function (t) {
//                 (new Image).src = t
//             }), n = n || this.defaultPause;
//             var o = 0;
//             t(e[o]), r = setTimeout(function i() {
//                 o = (o + 1) % e.length, t(e[o]), r = setTimeout(i, n)
//             }, n)
//         },
//         stopAnimate: function () {
//             clearTimeout(r)
//         }
//     }
// }
window.addEventListener("DOMContentLoaded", function () {
        ! function () {
            for (var t = document.querySelectorAll('a[rel="external"]'), e = 0; e < t.length; e++) ! function () {
                var n = t[e];
                n.addEventListener("click", function (t) {
                    t.preventDefault(), window.open(n.href)
                })
            }()
        }
    }),
    function () {
        function t(t, e, n, r) {
            var o = a * Math.cos(r) + e,
                i = a * Math.sin(r) + n;
            t.beginPath(), t.arc(e, n, 12, 0, 2 * Math.PI), t.fillStyle = "black", t.fill(), t.beginPath(), t.arc(e, n, 9, 0, 2 * Math.PI), t.fillStyle = "white", t.fill(), t.beginPath(), t.arc(o, i, 4.5, 0, 2 * Math.PI), t.fillStyle = "black", t.fill()
        }

        function e() {
            if (window.innerWidth && window.innerWidth <= 1024) {
                var r = function () {
                    var t = window.innerHeight,
                        e = window.innerWidth,
                        n = window.pageYOffset / t,
                        r = e / 2 * Math.sin(2 * n * Math.PI * .3);
                    return [r = e / 2 + r, 300]
                }();
                a = r[0], l = r[1]
            } else var a = c,
                l = s;
            if (a && l) {
                var f = n.getBoundingClientRect(),
                    d = f.left + o,
                    p = f.left + i,
                    h = f.top + u,
                    v = n.getContext("2d");
                v.clearRect(0, 0, n.width, n.height);
                var m = a - d,
                    g = l - h,
                    b = Math.atan2(g, m);
                t(v, o, u, b);
                var m = a - p,
                    g = l - h,
                    b = Math.atan2(g, m);
                t(v, i, u, b)
            }
            window.requestAnimationFrame(e)
        }
        var n = document.createElement("canvas");
        if (function (t) {
                return !(!t.getContext || !t.getContext("2d"))
            }(n)) {
            n.classList.add("navbar__eyes"), n.width = 70, n.height = 70;
            var r = document.getElementsByClassName("navbar__logo-container")[0];
            r.appendChild(n),
                function (t) {
                    var e = t.getContext("2d"),
                        n = window.devicePixelRatio || 1,
                        r = e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1,
                        o = n / r;
                    if (n !== r) {
                        var i = t.width,
                            u = t.height;
                        t.width = i * o, t.height = u * o, t.style.width = i + "px", t.style.height = u + "px", e.scale(o, o)
                    }
                }(n);
            var o = 22,
                i = 48,
                u = 35,
                a = 5,
                c = document.body.clientWidth / 2,
                s = document.body.clientHeight / 2;
            document.addEventListener("mousemove", function (t) {
                c = t.clientX, s = t.clientY
            });
            var l = !1;
            document.addEventListener("scroll", function (t) {
                var e = window.scrollY;
                l && e < 100 && (r.classList.remove("navbar__logo-container--eyes-visible"), l = !1), !l && e >= 100 && (r.classList.add("navbar__logo-container--eyes-visible"), l = !0)
            }), window.requestAnimationFrame(e)
        }
    }(),
    function () {
        function t(t) {
            this.el = t;
            for (var e = t.className.replace(/^\s+|\s+$/g, "").split(/\s+/), r = 0; r < e.length; r++) n.call(this, e[r])
        }
        if (!(void 0 === window.Element || "classList" in document.documentElement)) {
            var e = Array.prototype,
                n = e.push,
                r = e.splice,
                o = e.join;
            t.prototype = {
                    add: function (t) {
                        this.contains(t) || (n.call(this, t), this.el.className = this.toString())
                    },
                    contains: function (t) {
                        return -1 != this.el.className.indexOf(t)
                    },
                    item: function (t) {
                        return this[t] || null
                    },
                    remove: function (t) {
                        if (this.contains(t)) {
                            for (var e = 0; e < this.length && this[e] != t; e++);
                            r.call(this, e, 1), this.el.className = this.toString()
                        }
                    },
                    toString: function () {
                        return o.call(this, " ")
                    },
                    toggle: function (t) {
                        return this.contains(t) ? this.remove(t) : this.add(t), this.contains(t)
                    }
                }, window.DOMTokenList = t,
                function (t, e, n) {
                    Object.defineProperty ? Object.defineProperty(t, e, {
                        get: n
                    }) : t.__defineGetter__(e, n)
                }(Element.prototype, "classList", function () {
                    return new t(this)
                })
        }
    }(), "function" == typeof define && define.amd ? define([], e) : "object" == typeof module && module.exports ? module.exports = e() : ("undefined" != typeof self ? self : this).favicon = e();
var _extends = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
    },
    _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
! function (t, e) {
    "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.LazyLoad = e()
}(this, function () {
    "use strict";

    function t(t) {
        return t.filter(function (t) {
            return !u(t)
        })
    }
    var e = "data-",
        n = "was-processed",
        r = "true",
        o = function (t, n) {
            return t.getAttribute(e + n)
        },
        i = function (t) {
            return o = n, i = r, t.setAttribute(e + o, i);
            var o, i
        },
        u = function (t) {
            return o(t, n) === r
        },
        a = function (t, e) {
            var n, r = "LazyLoad::Initialized",
                o = new t(e);
            try {
                n = new CustomEvent(r, {
                    detail: {
                        instance: o
                    }
                })
            } catch (t) {
                (n = document.createEvent("CustomEvent")).initCustomEvent(r, !1, !1, {
                    instance: o
                })
            }
            window.dispatchEvent(n)
        },
        c = function (t, e, n) {
            for (var r, i = 0; r = t.children[i]; i += 1)
                if ("SOURCE" === r.tagName) {
                    var u = o(r, n);
                    u && r.setAttribute(e, u)
                }
        },
        s = function (t, e, n) {
            n && t.setAttribute(e, n)
        },
        l = "undefined" != typeof window,
        f = l && !("onscroll" in window) || /glebot|bingbot|crawler|spider|robot|crawling/i.test(navigator.userAgent),
        d = l && "IntersectionObserver" in window,
        p = l && "classList" in document.createElement("p"),
        h = function (t, e) {
            p ? t.classList.add(e) : t.className += (t.className ? " " : "") + e
        },
        v = function (t, e) {
            t && t(e)
        },
        m = "load",
        g = "error",
        b = function (t, e, n) {
            t.removeEventListener(m, e), t.removeEventListener(g, n)
        },
        _ = function (t, e, n) {
            var r, o, i = t.target;
            r = i, o = n.class_loading, p ? r.classList.remove(o) : r.className = r.className.replace(new RegExp("(^|\\s+)" + o + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, ""), h(i, e ? n.class_loaded : n.class_error), v(e ? n.callback_load : n.callback_error, i)
        },
        y = function (t, e) {
            var n;
            this._settings = (n = {
                elements_selector: "img",
                container: document,
                threshold: 300,
                data_src: "src",
                data_srcset: "srcset",
                data_sizes: "sizes",
                class_loading: "loading",
                class_loaded: "loaded",
                class_error: "error",
                callback_load: null,
                callback_error: null,
                callback_set: null,
                callback_enter: null
            }, _extends({}, n, t)), this._setObserver(), this.update(e)
        };
    return y.prototype = {
        _setObserver: function () {
            var e = this;
            if (d) {
                var n;
                this._observer = new IntersectionObserver(function (n) {
                    n.forEach(function (t) {
                        if ((r = t).isIntersecting || 0 < r.intersectionRatio) {
                            var n = t.target;
                            e.load(n), e._observer.unobserve(n)
                        }
                        var r
                    }), e._elements = t(e._elements)
                }, {
                    root: (n = this._settings).container === document ? null : n.container,
                    rootMargin: n.threshold + "px"
                })
            }
        },
        loadAll: function () {
            var e = this;
            this._elements.forEach(function (t) {
                e.load(t)
            }), this._elements = t(this._elements)
        },
        update: function (e) {
            var n = this,
                r = this._settings,
                o = e || r.container.querySelectorAll(r.elements_selector);
            this._elements = t(Array.prototype.slice.call(o)), !f && this._observer ? this._elements.forEach(function (t) {
                n._observer.observe(t)
            }) : this.loadAll()
        },
        destroy: function () {
            var e = this;
            this._observer && (t(this._elements).forEach(function (t) {
                e._observer.unobserve(t)
            }), this._observer = null), this._elements = null, this._settings = null
        },
        load: function (t, e) {
            var n, r;
            n = t, r = this._settings, !e && u(n) || (v(r.callback_enter, n), -1 < ["IMG", "IFRAME", "VIDEO"].indexOf(n.tagName) && (function (t, e) {
                var n = function n(o) {
                        _(o, !0, e), b(t, n, r)
                    },
                    r = function r(o) {
                        _(o, !1, e), b(t, n, r)
                    };
                t.addEventListener(m, n), t.addEventListener(g, r)
            }(n, r), h(n, r.class_loading)), function (t, e) {
                var n = e.data_sizes,
                    r = e.data_srcset,
                    i = e.data_src,
                    u = o(t, i);
                switch (t.tagName) {
                    case "IMG":
                        var a = t.parentNode;
                        a && "PICTURE" === a.tagName && c(a, "srcset", r);
                        var l = o(t, n);
                        s(t, "sizes", l);
                        var f = o(t, r);
                        s(t, "srcset", f), s(t, "src", u);
                        break;
                    case "IFRAME":
                        s(t, "src", u);
                        break;
                    case "VIDEO":
                        c(t, "src", i), s(t, "src", u);
                        break;
                    default:
                        u && (t.style.backgroundImage = 'url("' + u + '")')
                }
            }(n, r), i(n), v(r.callback_set, n))
        }
    }, l && function (t, e) {
        if (e)
            if (e.length)
                for (var n, r = 0; n = e[r]; r += 1) a(t, n);
            else a(t, e)
    }(y, window.lazyLoadOptions), y
}),
function () {
    function t(t) {
        return T(t) && J.call(t, "callee") && !et.call(t, "callee")
    }

    function e(t, e) {
        return t.push.apply(t, e), t
    }

    function n(t) {
        return function (e) {
            return null == e ? z : e[t]
        }
    }

    function r(t) {
        return t instanceof o ? t : new o(t)
    }

    function o(t, e) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e
    }

    function i(t, e, n) {
        if ("function" != typeof t) throw new TypeError("Expected a function");
        return setTimeout(function () {
            t.apply(z, n)
        }, e)
    }

    function u(t, e, n) {
        for (var r = -1, o = t.length; ++r < o;) {
            var i = t[r],
                u = e(i);
            if (null != u && (a === z ? u == u : n(u, a))) var a = u,
                c = i
        }
        return c
    }

    function a(t, e) {
        var n = [];
        return ut(t, function (t, r, o) {
            e(t, r, o) && n.push(t)
        }), n
    }

    function c(t, n, r, o, i) {
        var u = -1,
            a = t.length;
        for (r || (r = w), i || (i = []); ++u < a;) {
            var s = t[u];
            0 < n && r(s) ? 1 < n ? c(s, n - 1, r, o, i) : e(i, s) : o || (i[i.length] = s)
        }
        return i
    }

    function s(t, e) {
        return t && at(t, e, yt)
    }

    function l(t, e) {
        return a(e, function (e) {
            return S(t[e])
        })
    }

    function f(t, e, n, r, o) {
        return t === e || (null == t || null == e || !T(t) && !T(e) ? t != t && e != e : function (t, e, n, r, o, i) {
            var u = pt(t),
                a = pt(e),
                c = u ? "[object Array]" : Q.call(t),
                s = a ? "[object Array]" : Q.call(e),
                l = "[object Object]" == (c = "[object Arguments]" == c ? "[object Object]" : c),
                a = "[object Object]" == (s = "[object Arguments]" == s ? "[object Object]" : s),
                s = c == s;
            i || (i = []);
            var f = st(i, function (e) {
                    return e[0] == t
                }),
                d = st(i, function (t) {
                    return t[0] == e
                });
            if (f && d) return f[1] == e;
            if (i.push([t, e]), i.push([e, t]), s && !l) {
                if (u) n = function (t, e, n, r, o, i) {
                    var u = t.length,
                        a = e.length;
                    if (u != a && !(1 & n && a > u)) return !1;
                    for (var a = -1, c = !0, s = 2 & n ? [] : z; ++a < u;) {
                        var l = t[a],
                            f = e[a];
                        if (void 0 !== z) {
                            c = !1;
                            break
                        }
                        if (s) {
                            if (!b(e, function (t, e) {
                                    if (!O(s, e) && (l === t || o(l, t, n, r, i))) return s.push(e)
                                })) {
                                c = !1;
                                break
                            }
                        } else if (l !== f && !o(l, f, n, r, i)) {
                            c = !1;
                            break
                        }
                    }
                    return c
                }(t, e, n, r, o, i);
                else t: {
                    switch (c) {
                        case "[object Boolean]":
                        case "[object Date]":
                        case "[object Number]":
                            n = R(+t, +e);
                            break t;
                        case "[object Error]":
                            n = t.name == e.name && t.message == e.message;
                            break t;
                        case "[object RegExp]":
                        case "[object String]":
                            n = t == e + "";
                            break t
                    }
                    n = !1
                }
                return i.pop(), n
            }
            return 1 & n || (u = l && J.call(t, "__wrapped__"), c = a && J.call(e, "__wrapped__"), !u && !c) ? !!s && (n = function (t, e, n, r, o, i) {
                var u = 1 & n,
                    a = yt(t),
                    c = a.length,
                    s = yt(e).length;
                if (c != s && !u) return !1;
                for (var l = c; l--;) {
                    f = a[l];
                    if (!(u ? f in e : J.call(e, f))) return !1
                }
                for (s = !0; ++l < c;) {
                    var f = a[l],
                        d = t[f],
                        p = e[f];
                    if (void 0 !== z || d !== p && !o(d, p, n, r, i)) {
                        s = !1;
                        break
                    }
                    u || (u = "constructor" == f)
                }
                return s && !u && (n = t.constructor, r = e.constructor, n != r && "constructor" in t && "constructor" in e && !("function" == typeof n && n instanceof n && "function" == typeof r && r instanceof r) && (s = !1)), s
            }(t, e, n, r, o, i), i.pop(), n) : (u = u ? t.value() : t, c = c ? e.value() : e, n = o(u, c, n, r, i), i.pop(), n)
        }(t, e, n, r, f, o))
    }

    function d(t) {
        return "function" == typeof t ? t : null == t ? H : ("object" == typeof t ? h : n)(t)
    }

    function p(t, e) {
        var n = -1,
            r = C(t) ? Array(t.length) : [];
        return ut(t, function (t, o, i) {
            r[++n] = e(t, o, i)
        }), r
    }

    function h(t) {
        var e = rt(t);
        return function (n) {
            var r = e.length;
            if (null == n) return !r;
            for (n = Object(n); r--;) {
                var o = e[r];
                if (!(o in n && f(t[o], n[o], 3))) return !1
            }
            return !0
        }
    }

    function v(t) {
        return ct(j(t, void 0, H), t + "")
    }

    function m(t, e, n) {
        var r = -1,
            o = t.length;
        for (0 > e && (e = -e > o ? 0 : o + e), 0 > (n = n > o ? o : n) && (n += o), o = e > n ? 0 : n - e >>> 0, e >>>= 0, n = Array(o); ++r < o;) n[r] = t[r + e];
        return n
    }

    function g(t) {
        return m(t, 0, t.length)
    }

    function b(t, e) {
        var n;
        return ut(t, function (t, r, o) {
            return !(n = e(t, r, o))
        }), !!n
    }

    function _(t, e, n, r) {
        var o = !n;
        n || (n = {});
        for (var i = -1, u = e.length; ++i < u;) {
            var a = e[i],
                c = r ? r(n[a], t[a], a, n, t) : z;
            if (c === z && (c = t[a]), o) n[a] = c;
            else {
                var s = n,
                    l = s[a];
                J.call(s, a) && R(l, c) && (c !== z || a in s) || (s[a] = c)
            }
        }
        return n
    }

    function y(t) {
        return v(function (e, n) {
            var r = -1,
                o = n.length,
                i = 1 < o ? n[o - 1] : z,
                i = 3 < t.length && "function" == typeof i ? (o--, i) : z;
            for (e = Object(e); ++r < o;) {
                var u = n[r];
                u && t(e, u, r, i)
            }
            return e
        })
    }

    function w(e) {
        return pt(e) || t(e)
    }

    function E(t) {
        var e = [];
        if (null != t)
            for (var n in Object(t)) e.push(n);
        return e
    }

    function j(t, e, n) {
        return e = ot(e === z ? t.length - 1 : e, 0),
            function () {
                for (var r = arguments, o = -1, i = ot(r.length - e, 0), u = Array(i); ++o < i;) u[o] = r[e + o];
                for (o = -1, i = Array(e + 1); ++o < e;) i[o] = r[o];
                return i[e] = n(u), t.apply(this, i)
            }
    }

    function x(t) {
        return (null == t ? 0 : t.length) ? c(t, 1) : []
    }

    function L(t) {
        return t && t.length ? t[0] : z
    }

    function O(t, e, n) {
        var r = null == t ? 0 : t.length;
        n = ((n = "number" == typeof n ? 0 > n ? ot(r + n, 0) : n : 0) || 0) - 1;
        for (var o = e == e; ++n < r;) {
            var i = t[n];
            if (o ? i === e : i != i) return n
        }
        return -1
    }

    function k(t, e) {
        return ut(t, d(e))
    }

    function A(t, e, n) {
        return function (t, e, n, r, o) {
            return o(t, function (t, o, i) {
                n = r ? (r = !1, t) : e(n, t, o, i)
            }), n
        }(t, d(e), n, 3 > arguments.length, ut)
    }

    function N(t, e) {
        var n;
        if ("function" != typeof e) throw new TypeError("Expected a function");
        return t = ht(t),
            function () {
                return 0 < --t && (n = e.apply(this, arguments)), 1 >= t && (e = z), n
            }
    }

    function R(t, e) {
        return t === e || t != t && e != e
    }

    function C(t) {
        var e;
        return (e = null != t) && (e = t.length, e = "number" == typeof e && -1 < e && 0 == e % 1 && 9007199254740991 >= e), e && !S(t)
    }

    function S(t) {
        return !!M(t) && ("[object Function]" == (t = Q.call(t)) || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t)
    }

    function M(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
    }

    function T(t) {
        return null != t && "object" == typeof t
    }

    function B(t) {
        return "number" == typeof t || T(t) && "[object Number]" == Q.call(t)
    }

    function P(t) {
        return "string" == typeof t || !pt(t) && T(t) && "[object String]" == Q.call(t)
    }

    function I(t) {
        return "string" == typeof t ? t : null == t ? "" : t + ""
    }

    function q(t) {
        return null == t ? [] : function (t, e) {
            return p(e, function (e) {
                return t[e]
            })
        }(t, yt(t))
    }

    function H(t) {
        return t
    }

    function D(t, n, r) {
        var o = yt(n),
            i = l(n, o);
        null != r || M(n) && (i.length || !o.length) || (r = n, n = t, t = this, i = l(n, yt(n)));
        var u = !(M(r) && "chain" in r && !r.chain),
            a = S(t);
        return ut(i, function (r) {
            var o = n[r];
            t[r] = o, a && (t.prototype[r] = function () {
                var n = this.__chain__;
                if (u || n) {
                    var r = t(this.__wrapped__);
                    return (r.__actions__ = g(this.__actions__)).push({
                        func: o,
                        args: arguments,
                        thisArg: t
                    }), r.__chain__ = n, r
                }
                return o.apply(t, e([this.value()], arguments))
            })
        }), t
    }
    var z, F = /[&<>"']/g,
        W = RegExp(F.source),
        X = "object" == typeof self && self && self.Object === Object && self,
        $ = "object" == typeof global && global && global.Object === Object && global || X || Function("return this")(),
        G = (X = "object" == typeof exports && exports && !exports.nodeType && exports) && "object" == typeof module && module && !module.nodeType && module,
        U = function (t) {
            return function (e) {
                return null == t ? z : t[e]
            }
        }({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }),
        V = Array.prototype,
        Y = Object.prototype,
        J = Y.hasOwnProperty,
        K = 0,
        Q = Y.toString,
        Z = $._,
        tt = Object.create,
        et = Y.propertyIsEnumerable,
        nt = $.isFinite,
        rt = function (t, e) {
            return function (n) {
                return t(e(n))
            }
        }(Object.keys, Object),
        ot = Math.max,
        it = function () {
            function t() {}
            return function (e) {
                return M(e) ? tt ? tt(e) : (t.prototype = e, e = new t, t.prototype = z, e) : {}
            }
        }();
    (o.prototype = it(r.prototype)).constructor = o;
    var ut = function (t, e) {
            return function (e, n) {
                if (null == e) return e;
                if (!C(e)) return t(e, n);
                for (var r = e.length, o = -1, i = Object(e); ++o < r && !1 !== n(i[o], o, i););
                return e
            }
        }(s),
        at = function (t, e, n) {
            for (var r = -1, o = Object(t), i = (n = n(t)).length; i--;) {
                var u = n[++r];
                if (!1 === e(o[u], u, o)) break
            }
            return t
        },
        ct = H,
        st = function (t, e, n) {
            var r = Object(t);
            if (!C(t)) {
                var o = d(e);
                t = yt(t), e = function (t) {
                    return o(r[t], t, r)
                }
            }
            return -1 < (e = function (t, e, n) {
                var r = null == t ? 0 : t.length;
                if (!r) return -1;
                0 > (n = null == n ? 0 : ht(n)) && (n = ot(r + n, 0));
                t: {
                    for (e = d(e), r = t.length, n += -1; ++n < r;)
                        if (e(t[n], n, t)) {
                            t = n;
                            break t
                        } t = -1
                }
                return t
            }(t, e, n)) ? r[o ? t[e] : e] : z
        },
        lt = v(function (t, e, n) {
            return function (t, e, n) {
                function r() {
                    for (var i = -1, u = arguments.length, a = -1, c = n.length, s = Array(c + u), l = this && this !== $ && this instanceof r ? o : t; ++a < c;) s[a] = n[a];
                    for (; u--;) s[a++] = arguments[++i];
                    return l.apply(e, s)
                }
                if ("function" != typeof t) throw new TypeError("Expected a function");
                var o = function (t) {
                    return function () {
                        var e = arguments,
                            n = it(t.prototype);
                        return M(e = t.apply(n, e)) ? e : n
                    }
                }(t);
                return r
            }(t, e, n)
        }),
        ft = v(function (t, e) {
            return i(t, 1, e)
        }),
        dt = v(function (t, e, n) {
            return i(t, vt(e) || 0, n)
        }),
        pt = Array.isArray,
        ht = Number,
        vt = Number,
        mt = y(function (t, e) {
            _(e, rt(e), t)
        }),
        gt = y(function (t, e) {
            _(e, E(e), t)
        }),
        bt = y(function (t, e, n, r) {
            _(e, wt(e), t, r)
        }),
        _t = v(function (t) {
            return t.push(z, function (t, e, n, r) {
                return t === z || R(t, Y[n]) && !J.call(r, n) ? e : t
            }), bt.apply(z, t)
        }),
        yt = rt,
        wt = E,
        Et = function (t) {
            return ct(j(t, z, x), t + "")
        }(function (t, e) {
            return null == t ? {} : function (t, e) {
                return t = Object(t), A(e, function (e, n) {
                    return n in t && (e[n] = t[n]), e
                }, {})
            }(t, e)
        });
    r.assignIn = gt, r.before = N, r.bind = lt, r.chain = function (t) {
        return t = r(t), t.__chain__ = !0, t
    }, r.compact = function (t) {
        return a(t, Boolean)
    }, r.concat = function () {
        var t = arguments.length;
        if (!t) return [];
        for (var n = Array(t - 1), r = arguments[0]; t--;) n[t - 1] = arguments[t];
        return e(pt(r) ? g(r) : [r], c(n, 1))
    }, r.create = function (t, e) {
        var n = it(t);
        return null == e ? n : mt(n, e)
    }, r.defaults = _t, r.defer = ft, r.delay = dt, r.filter = function (t, e) {
        return a(t, d(e))
    }, r.flatten = x, r.flattenDeep = function (t) {
        return (null == t ? 0 : t.length) ? c(t, 1 / 0) : []
    }, r.iteratee = d, r.keys = yt, r.map = function (t, e) {
        return p(t, d(e))
    }, r.matches = function (t) {
        return h(mt({}, t))
    }, r.mixin = D, r.negate = function (t) {
        if ("function" != typeof t) throw new TypeError("Expected a function");
        return function () {
            return !t.apply(this, arguments)
        }
    }, r.once = function (t) {
        return N(2, t)
    }, r.pick = Et, r.slice = function (t, e, n) {
        var r = null == t ? 0 : t.length;
        return n = n === z ? r : +n, r ? m(t, null == e ? 0 : +e, n) : []
    }, r.sortBy = function (t, e) {
        var r = 0;
        return e = d(e), p(p(t, function (t, n, o) {
            return {
                value: t,
                index: r++,
                criteria: e(t, n, o)
            }
        }).sort(function (t, e) {
            var n;
            t: {
                n = t.criteria;
                var r = e.criteria;
                if (n !== r) {
                    var o = n !== z,
                        i = null === n,
                        u = n == n,
                        a = r !== z,
                        c = null === r,
                        s = r == r;
                    if (!c && n > r || i && a && s || !o && s || !u) {
                        n = 1;
                        break t
                    }
                    if (!i && n < r || c && o && u || !a && u || !s) {
                        n = -1;
                        break t
                    }
                }
                n = 0
            }
            return n || t.index - e.index
        }), n("value"))
    }, r.tap = function (t, e) {
        return e(t), t
    }, r.thru = function (t, e) {
        return e(t)
    }, r.toArray = function (t) {
        return C(t) ? t.length ? g(t) : [] : q(t)
    }, r.values = q, r.extend = gt, D(r, r), r.clone = function (t) {
        return M(t) ? pt(t) ? g(t) : _(t, rt(t)) : t
    }, r.escape = function (t) {
        return (t = I(t)) && W.test(t) ? t.replace(F, U) : t
    }, r.every = function (t, e, n) {
        return e = n ? z : e,
            function (t, e) {
                var n = !0;
                return ut(t, function (t, r, o) {
                    return n = !!e(t, r, o)
                }), n
            }(t, d(e))
    }, r.find = st, r.forEach = k, r.has = function (t, e) {
        return null != t && J.call(t, e)
    }, r.head = L, r.identity = H, r.indexOf = O, r.isArguments = t, r.isArray = pt, r.isBoolean = function (t) {
        return !0 === t || !1 === t || T(t) && "[object Boolean]" == Q.call(t)
    }, r.isDate = function (t) {
        return T(t) && "[object Date]" == Q.call(t)
    }, r.isEmpty = function (e) {
        return C(e) && (pt(e) || P(e) || S(e.splice) || t(e)) ? !e.length : !rt(e).length
    }, r.isEqual = function (t, e) {
        return f(t, e)
    }, r.isFinite = function (t) {
        return "number" == typeof t && nt(t)
    }, r.isFunction = S, r.isNaN = function (t) {
        return B(t) && t != +t
    }, r.isNull = function (t) {
        return null === t
    }, r.isNumber = B, r.isObject = M, r.isRegExp = function (t) {
        return T(t) && "[object RegExp]" == Q.call(t)
    }, r.isString = P, r.isUndefined = function (t) {
        return t === z
    }, r.last = function (t) {
        var e = null == t ? 0 : t.length;
        return e ? t[e - 1] : z
    }, r.max = function (t) {
        return t && t.length ? u(t, H, function (t, e) {
            return t > e
        }) : z
    }, r.min = function (t) {
        return t && t.length ? u(t, H, function (t, e) {
            return t < e
        }) : z
    }, r.noConflict = function () {
        return $._ === this && ($._ = Z), this
    }, r.noop = function () {}, r.reduce = A, r.result = function (t, e, n) {
        return (e = null == t ? z : t[e]) === z && (e = n), S(e) ? e.call(t) : e
    }, r.size = function (t) {
        return null == t ? 0 : (t = C(t) ? t : rt(t)).length
    }, r.some = function (t, e, n) {
        return e = n ? z : e, b(t, d(e))
    }, r.uniqueId = function (t) {
        var e = ++K;
        return I(t) + e
    }, r.each = k, r.first = L, D(r, function () {
        var t = {};
        return s(r, function (e, n) {
            J.call(r.prototype, n) || (t[n] = e)
        }), t
    }(), {
        chain: !1
    }), r.VERSION = "4.17.4", ut("pop join replace reverse split push shift sort splice unshift".split(" "), function (t) {
        var e = (/^(?:replace|split)$/.test(t) ? String.prototype : V)[t],
            n = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
            o = /^(?:pop|join|replace|shift)$/.test(t);
        r.prototype[t] = function () {
            var t = arguments;
            if (o && !this.__chain__) {
                var r = this.value();
                return e.apply(pt(r) ? r : [], t)
            }
            return this[n](function (n) {
                return e.apply(pt(n) ? n : [], t)
            })
        }
    }), r.prototype.toJSON = r.prototype.valueOf = r.prototype.value = function () {
        return function (t, n) {
            return A(n, function (t, n) {
                return n.func.apply(n.thisArg, e([t], n.args))
            }, t)
        }(this.__wrapped__, this.__actions__)
    }, "function" == typeof define && "object" == typeof define.amd && define.amd ? ($._ = r, define(function () {
        return r
    })) : G ? ((G.exports = r)._ = r, X._ = r) : $._ = r
}.call(this);