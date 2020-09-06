(function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
})("undefined" == typeof window ? this : window, function(e, t) {
    function a(e) {
        var t = !!e && "length" in e && e.length,
            a = he.type(e);
        return "function" === a || he.isWindow(e) ? !1 : "array" === a || 0 === t || "number" == typeof t && 0 < t && t - 1 in e
    }

    function n(e, t, a) {
        if (he.isFunction(t)) return he.grep(e, function(e, n) {
            return !!t.call(e, n, e) !== a
        });
        if (t.nodeType) return he.grep(e, function(e) {
            return e === t !== a
        });
        if ("string" == typeof t) {
            if (Te.test(t)) return he.filter(t, e, a);
            t = he.filter(t, e)
        }
        return he.grep(e, function(e) {
            return -1 < he.inArray(e, t) !== a
        })
    }

    function s(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function o(e) {
        var t = {};
        return he.each(e.match(ze) || [], function(e, a) {
            t[a] = !0
        }), t
    }

    function r() {
        ne.addEventListener ? (ne.removeEventListener("DOMContentLoaded", l), e.removeEventListener("load", l)) : (ne.detachEvent("onreadystatechange", l), e.detachEvent("onload", l))
    }

    function l() {
        (ne.addEventListener || "load" === e.event.type || "complete" === ne.readyState) && (r(), he.ready())
    }

    function d(e, t, a) {
        if (void 0 === a && 1 === e.nodeType) {
            var n = "data-" + t.replace(Me, "-$1").toLowerCase();
            if (a = e.getAttribute(n), "string" == typeof a) {
                try {
                    a = "true" === a || "false" !== a && ("null" === a ? null : +a + "" === a ? +a : i.test(a) ? he.parseJSON(a) : a)
                } catch (t) {}
                he.data(e, t, a)
            } else a = void 0
        }
        return a
    }

    function p(e) {
        for (var t in e)
            if (!("data" === t && he.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function c(e, t, a, i) {
        if (_e(e)) {
            var n = he.expando,
                s = e.nodeType,
                o = s ? he.cache : e,
                r = s ? e[n] : e[n] && n,
                l, d;
            if (r && o[r] && (i || o[r].data) || void 0 !== a || "string" != typeof t) return r || (s ? r = e[n] = ie.pop() || he.guid++ : r = n), o[r] || (o[r] = s ? {} : {
                toJSON: he.noop
            }), ("object" == typeof t || "function" == typeof t) && (i ? o[r] = he.extend(o[r], t) : o[r].data = he.extend(o[r].data, t)), d = o[r], i || (!d.data && (d.data = {}), d = d.data), void 0 !== a && (d[he.camelCase(t)] = a), "string" == typeof t ? (l = d[t], null == l && (l = d[he.camelCase(t)])) : l = d, l
        }
    }

    function u(e, t, a) {
        if (_e(e)) {
            var n = e.nodeType,
                s = n ? he.cache : e,
                o = n ? e[he.expando] : he.expando,
                r, l;
            if (s[o]) {
                if (t && (r = a ? s[o] : s[o].data, r)) {
                    for (he.isArray(t) ? t = t.concat(he.map(t, he.camelCase)) : (t in r) ? t = [t] : (t = he.camelCase(t), t = (t in r) ? [t] : t.split(" ")), l = t.length; l--;) delete r[t[l]];
                    if (a ? !p(r) : !he.isEmptyObject(r)) return
                }!a && (delete s[o].data, !p(s[o])) || (n ? he.cleanData([e], !0) : ue.deleteExpando || s != s.window ? delete s[o] : s[o] = void 0)
            }
        }
    }

    function m(e, t, a, i) {
        var n = 1,
            s = 20,
            o = i ? function() {
                return i.cur()
            } : function() {
                return he.css(e, t, "")
            },
            r = o(),
            l = a && a[3] || (he.cssNumber[t] ? "" : "px"),
            d = (he.cssNumber[t] || "px" !== l && +r) && Oe.exec(he.css(e, t)),
            p;
        if (d && d[3] !== l) {
            l = l || d[3], a = a || [], d = +r || 1;
            do n = n || ".5", d /= n, he.style(e, t, d + l); while (n != (n = o() / r) && 1 != n && --s)
        }
        return a && (d = +d || +r || 0, p = a[1] ? d + (a[1] + 1) * a[2] : +a[2], i && (i.unit = l, i.start = d, i.end = p)), p
    }

    function h(e) {
        var t = qe.split("|"),
            a = e.createDocumentFragment();
        if (a.createElement)
            for (; t.length;) a.createElement(t.pop());
        return a
    }

    function g(e, t) {
        var a = 0,
            i = "undefined" == typeof e.getElementsByTagName ? "undefined" == typeof e.querySelectorAll ? void 0 : e.querySelectorAll(t || "*") : e.getElementsByTagName(t || "*"),
            n, s;
        if (!i)
            for (i = [], n = e.childNodes || e; null != (s = n[a]); a++) !t || he.nodeName(s, t) ? i.push(s) : he.merge(i, g(s, t));
        return void 0 === t || t && he.nodeName(e, t) ? he.merge([e], i) : i
    }

    function f(e, t) {
        for (var a = 0, i; null != (i = e[a]); a++) he._data(i, "globalEval", !t || he._data(t[a], "globalEval"))
    }

    function y(e) {
        Be.test(e.type) && (e.defaultChecked = e.checked)
    }

    function v(e, t, a, n, s) {
        for (var o = e.length, r = h(t), l = [], d = 0, i, p, c, u, m, v, b; d < o; d++)
            if (p = e[d], p || 0 === p)
                if ("object" === he.type(p)) he.merge(l, p.nodeType ? [p] : p);
                else if (!Ye.test(p)) l.push(t.createTextNode(p));
        else {
            for (u = u || r.appendChild(t.createElement("div")), m = (Fe.exec(p) || ["", ""])[1].toLowerCase(), b = Ve[m] || Ve._default, u.innerHTML = b[1] + he.htmlPrefilter(p) + b[2], i = b[0]; i--;) u = u.lastChild;
            if (!ue.leadingWhitespace && Re.test(p) && l.push(t.createTextNode(Re.exec(p)[0])), !ue.tbody)
                for (p = "table" !== m || Ue.test(p) ? "<table>" !== b[1] || Ue.test(p) ? 0 : u : u.firstChild, i = p && p.childNodes.length; i--;) he.nodeName(v = p.childNodes[i], "tbody") && !v.childNodes.length && p.removeChild(v);
            for (he.merge(l, u.childNodes), u.textContent = ""; u.firstChild;) u.removeChild(u.firstChild);
            u = r.lastChild
        }
        for (u && r.removeChild(u), ue.appendChecked || he.grep(g(l, "input"), y), d = 0; p = l[d++];) {
            if (n && -1 < he.inArray(p, n)) {
                s && s.push(p);
                continue
            }
            if (c = he.contains(p.ownerDocument, p), u = g(r.appendChild(p), "script"), c && f(u), a)
                for (i = 0; p = u[i++];) We.test(p.type || "") && a.push(p)
        }
        return u = null, r
    }

    function b() {
        return !0
    }

    function x() {
        return !1
    }

    function w() {
        try {
            return ne.activeElement
        } catch (e) {}
    }

    function C(e, t, a, i, n, s) {
        var o, r;
        if ("object" == typeof t) {
            for (r in "string" != typeof a && (i = i || a, a = void 0), t) C(e, r, a, i, t[r], s);
            return e
        }
        if (null == i && null == n ? (n = a, i = a = void 0) : null == n && ("string" == typeof a ? (n = i, i = void 0) : (n = i, i = a, a = void 0)), !1 === n) n = x;
        else if (!n) return e;
        return 1 === s && (o = n, n = function(e) {
            return he().off(e), o.apply(this, arguments)
        }, n.guid = o.guid || (o.guid = he.guid++)), e.each(function() {
            he.event.add(this, t, n, i, a)
        })
    }

    function S(e, t) {
        return he.nodeName(e, "table") && he.nodeName(11 === t.nodeType ? t.firstChild : t, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function T(e) {
        return e.type = (null !== he.find.attr(e, "type")) + "/" + e.type, e
    }

    function k(e) {
        var t = nt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function $(e, t) {
        if (1 === t.nodeType && he.hasData(e)) {
            var a = he._data(e),
                n = he._data(t, a),
                s = a.events,
                o, r, i;
            if (s)
                for (o in delete n.handle, n.events = {}, s)
                    for (r = 0, i = s[o].length; r < i; r++) he.event.add(t, o, s[o][r]);
            n.data && (n.data = he.extend({}, n.data))
        }
    }

    function D(t, a) {
        var i, n, e;
        if (1 === a.nodeType) {
            if (i = a.nodeName.toLowerCase(), !ue.noCloneEvent && a[he.expando]) {
                for (n in e = he._data(a), e.events) he.removeEvent(a, n, e.handle);
                a.removeAttribute(he.expando)
            }
            "script" === i && a.text !== t.text ? (T(a).text = t.text, k(a)) : "object" === i ? (a.parentNode && (a.outerHTML = t.outerHTML), ue.html5Clone && t.innerHTML && !he.trim(a.innerHTML) && (a.innerHTML = t.innerHTML)) : "input" === i && Be.test(t.type) ? (a.defaultChecked = a.checked = t.checked, a.value !== t.value && (a.value = t.value)) : "option" === i ? a.defaultSelected = a.selected = t.defaultSelected : ("input" === i || "textarea" === i) && (a.defaultValue = t.defaultValue)
        }
    }

    function E(e, t, a, n) {
        t = oe.apply([], t);
        var s = 0,
            i = e.length,
            o = t[0],
            r = he.isFunction(o),
            l, d, p, c, u, m;
        if (r || 1 < i && "string" == typeof o && !ue.checkClone && it.test(o)) return e.each(function(i) {
            var s = e.eq(i);
            r && (t[0] = o.call(this, i, s.html())), E(s, t, a, n)
        });
        if (i && (m = v(t, e[0].ownerDocument, !1, e, n), l = m.firstChild, 1 === m.childNodes.length && (m = l), l || n)) {
            for (c = he.map(g(m, "script"), T), p = c.length; s < i; s++) d = m, s != i - 1 && (d = he.clone(d, !0, !0), p && he.merge(c, g(d, "script"))), a.call(e[s], d, s);
            if (p)
                for (u = c[c.length - 1].ownerDocument, he.map(c, k), s = 0; s < p; s++) d = c[s], We.test(d.type || "") && !he._data(d, "globalEval") && he.contains(u, d) && (d.src ? he._evalUrl && he._evalUrl(d.src) : he.globalEval((d.text || d.textContent || d.innerHTML || "").replace(st, "")));
            m = l = null
        }
        return e
    }

    function P(e, t, a) {
        for (var n = t ? he.filter(t, e) : e, s = 0, i; null != (i = n[s]); s++) a || 1 !== i.nodeType || he.cleanData(g(i)), i.parentNode && (a && he.contains(i.ownerDocument, i) && f(g(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    function z(e, t) {
        var a = he(t.createElement(e)).appendTo(t.body),
            i = he.css(a[0], "display");
        return a.detach(), i
    }

    function I(e) {
        var t = ne,
            a = lt[e];
        return a || (a = z(e, t), ("none" === a || !a) && (mt = (mt || he("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (mt[0].contentWindow || mt[0].contentDocument).document, t.write(), t.close(), a = z(e, t), mt.detach()), lt[e] = a), a
    }

    function A(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function _(e) {
        if (e in Tt) return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), a = St.length; a--;)
            if (e = St[a] + t, e in Tt) return e
    }

    function M(e, t) {
        for (var a = [], i = 0, n = e.length, s, o, r; i < n; i++)(o = e[i], !!o.style) && (a[i] = he._data(o, "olddisplay"), s = o.style.display, t ? (!a[i] && "none" === s && (o.style.display = ""), "" === o.style.display && He(o) && (a[i] = he._data(o, "olddisplay", I(o.nodeName)))) : (r = He(o), (s && "none" !== s || !r) && he._data(o, "olddisplay", r ? s : he.css(o, "display"))));
        for (i = 0; i < n; i++)(o = e[i], !!o.style) && (t && "none" !== o.style.display && "" !== o.style.display || (o.style.display = t ? a[i] || "" : "none"));
        return e
    }

    function L(e, t, a) {
        var i = xt.exec(t);
        return i ? ae(0, i[1] - (a || 0)) + (i[2] || "px") : t
    }

    function O(e, t, a, n, s) {
        for (var o = a === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, i = 0; 4 > o; o += 2) "margin" === a && (i += he.css(e, a + Ne[o], !0, s)), n ? ("content" === a && (i -= he.css(e, "padding" + Ne[o], !0, s)), "margin" !== a && (i -= he.css(e, "border" + Ne[o] + "Width", !0, s))) : (i += he.css(e, "padding" + Ne[o], !0, s), "padding" !== a && (i += he.css(e, "border" + Ne[o] + "Width", !0, s)));
        return i
    }

    function N(e, t, a) {
        var i = !0,
            n = "width" === t ? e.offsetWidth : e.offsetHeight,
            s = gt(e),
            o = ue.boxSizing && "border-box" === he.css(e, "boxSizing", !1, s);
        if (0 >= n || null == n) {
            if (n = ft(e, t, s), (0 > n || null == n) && (n = e.style[t]), pt.test(n)) return n;
            i = o && (ue.boxSizingReliable() || n === e.style[t]), n = parseFloat(n) || 0
        }
        return n + O(e, t, a || (o ? "border" : "content"), i, s) + "px"
    }

    function H(e, t, a, i, n) {
        return new H.prototype.init(e, t, a, i, n)
    }

    function j() {
        return e.setTimeout(function() {
            Dt = void 0
        }), Dt = he.now()
    }

    function B(e, t) {
        var a = {
                height: e
            },
            n = 0,
            i;
        for (t = t ? 1 : 0; 4 > n; n += 2 - t) i = Ne[n], a["margin" + i] = a["padding" + i] = e;
        return t && (a.opacity = a.width = e), a
    }

    function F(e, t, a) {
        for (var i = (R.tweeners[t] || []).concat(R.tweeners["*"]), n = 0, s = i.length, o; n < s; n++)
            if (o = i[n].call(a, t, e)) return o
    }

    function W(e, t) {
        var a, i, n, s, o;
        for (a in e)
            if (i = he.camelCase(a), n = t[i], s = e[a], he.isArray(s) && (n = s[1], s = e[a] = s[0]), a !== i && (e[i] = s, delete e[a]), o = he.cssHooks[i], o && "expand" in o)
                for (a in s = o.expand(s), delete e[i], s) a in e || (e[a] = s[a], t[a] = n);
            else t[i] = n
    }

    function R(e, t, a) {
        var i = 0,
            n = R.prefilters.length,
            s = he.Deferred().always(function() {
                delete o.elem
            }),
            o = function() {
                if (p) return !1;
                for (var t = Dt || j(), a = ae(0, r.startTime + r.duration - t), i = a / r.duration || 0, n = 1 - i, o = 0, l = r.tweens.length; o < l; o++) r.tweens[o].run(n);
                return s.notifyWith(e, [r, n, a]), 1 > n && l ? a : (s.resolveWith(e, [r]), !1)
            },
            r = s.promise({
                elem: e,
                props: he.extend({}, t),
                opts: he.extend(!0, {
                    specialEasing: {},
                    easing: he.easing._default
                }, a),
                originalProperties: t,
                originalOptions: a,
                startTime: Dt || j(),
                duration: a.duration,
                tweens: [],
                createTween: function(t, a) {
                    var i = he.Tween(e, r.opts, t, a, r.opts.specialEasing[t] || r.opts.easing);
                    return r.tweens.push(i), i
                },
                stop: function(t) {
                    var a = 0,
                        i = t ? r.tweens.length : 0;
                    if (p) return this;
                    for (p = !0; a < i; a++) r.tweens[a].run(1);
                    return t ? (s.notifyWith(e, [r, 1, 0]), s.resolveWith(e, [r, t])) : s.rejectWith(e, [r, t]), this
                }
            }),
            l = r.props,
            d, p;
        for (W(l, r.opts.specialEasing); i < n; i++)
            if (d = R.prefilters[i].call(r, e, l, r.opts), d) return he.isFunction(d.stop) && (he._queueHooks(r.elem, r.opts.queue).stop = he.proxy(d.stop, d)), d;
        return he.map(l, F, r), he.isFunction(r.opts.start) && r.opts.start.call(e, r), he.fx.timer(he.extend(o, {
            elem: e,
            anim: r,
            queue: r.opts.queue
        })), r.progress(r.opts.progress).done(r.opts.done, r.opts.complete).fail(r.opts.fail).always(r.opts.always)
    }

    function q(e) {
        return he.attr(e, "class") || ""
    }

    function V(e) {
        return function(t, a) {
            "string" != typeof t && (a = t, t = "*");
            var n = 0,
                i = t.toLowerCase().match(ze) || [],
                s;
            if (he.isFunction(a))
                for (; s = i[n++];) "+" === s.charAt(0) ? (s = s.slice(1) || "*", (e[s] = e[s] || []).unshift(a)) : (e[s] = e[s] || []).push(a)
        }
    }

    function Y(e, t, a, i) {
        function n(r) {
            var l;
            return s[r] = !0, he.each(e[r] || [], function(e, r) {
                var d = r(t, a, i);
                return "string" != typeof d || o || s[d] ? o ? !(l = d) : void 0 : (t.dataTypes.unshift(d), n(d), !1)
            }), l
        }
        var s = {},
            o = e === Qt;
        return n(t.dataTypes[0]) || !s["*"] && n("*")
    }

    function U(e, t) {
        var a = he.ajaxSettings.flatOptions || {},
            i, n;
        for (n in t) void 0 !== t[n] && ((a[n] ? e : i || (i = {}))[n] = t[n]);
        return i && he.extend(!0, e, i), e
    }

    function X(e, t, a) {
        for (var i = e.contents, n = e.dataTypes, s, o, r, l;
            "*" === n[0];) n.shift(), void 0 == o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
        if (o)
            for (l in i)
                if (i[l] && i[l].test(o)) {
                    n.unshift(l);
                    break
                }
        if (n[0] in a) r = n[0];
        else {
            for (l in a) {
                if (!n[0] || e.converters[l + " " + n[0]]) {
                    r = l;
                    break
                }
                s || (s = l)
            }
            r = r || s
        }
        return r ? (r !== n[0] && n.unshift(r), a[r]) : void 0
    }

    function G(e, t, a, i) {
        var n = {},
            s = e.dataTypes.slice(),
            o, r, l, d, p;
        if (s[1])
            for (l in e.converters) n[l.toLowerCase()] = e.converters[l];
        for (r = s.shift(); r;)
            if (e.responseFields[r] && (a[e.responseFields[r]] = t), !p && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), p = r, r = s.shift(), r)
                if ("*" === r) r = p;
                else if ("*" !== p && p !== r) {
            if (l = n[p + " " + r] || n["* " + r], !l)
                for (o in n)
                    if (d = o.split(" "), d[1] === r && (l = n[p + " " + d[0]] || n["* " + d[0]], l)) {
                        !0 === l ? l = n[o] : !0 !== n[o] && (r = d[0], s.unshift(d[1]));
                        break
                    }
            if (!0 !== l)
                if (l && e.throws) t = l(t);
                else try {
                    t = l(t)
                } catch (t) {
                    return {
                        state: "parsererror",
                        error: l ? t : "No conversion from " + p + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function K(e) {
        return e.style && e.style.display || he.css(e, "display")
    }

    function J(e) {
        if (!he.contains(e.ownerDocument || ne, e)) return !0;
        for (; e && 1 === e.nodeType;) {
            if ("none" === K(e) || "hidden" === e.type) return !0;
            e = e.parentNode
        }
        return !1
    }

    function Q(e, t, a, n) {
        if (he.isArray(t)) he.each(t, function(t, i) {
            a || ia.test(e) ? n(e, i) : Q(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, a, n)
        });
        else if (!a && "object" === he.type(t))
            for (var i in t) Q(e + "[" + i + "]", t[i], a, n);
        else n(e, t)
    }

    function Z() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function ee() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function te(e) {
        return he.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    var ae = Math.max,
        ie = [],
        ne = e.document,
        se = ie.slice,
        oe = ie.concat,
        re = ie.push,
        le = ie.indexOf,
        de = {},
        pe = de.toString,
        ce = de.hasOwnProperty,
        ue = {},
        me = "1.12.4",
        he = function(e, t) {
            return new he.fn.init(e, t)
        },
        ge = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        fe = /^-ms-/,
        ye = /-([\da-z])/gi,
        ve = function(e, t) {
            return t.toUpperCase()
        };
    he.fn = he.prototype = {
        jquery: me,
        constructor: he,
        selector: "",
        length: 0,
        toArray: function() {
            return se.call(this)
        },
        get: function(e) {
            return null == e ? se.call(this) : 0 > e ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = he.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e) {
            return he.each(this, e)
        },
        map: function(e) {
            return this.pushStack(he.map(this, function(t, a) {
                return e.call(t, a, t)
            }))
        },
        slice: function() {
            return this.pushStack(se.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                a = +e + (0 > e ? t : 0);
            return this.pushStack(0 <= a && a < t ? [this[a]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: re,
        sort: ie.sort,
        splice: ie.splice
    }, he.extend = he.fn.extend = function() {
        var e = arguments[0] || {},
            t = 1,
            a = arguments.length,
            i = !1,
            n, s, o, r, l, d;
        for ("boolean" == typeof e && (i = e, e = arguments[t] || {}, t++), "object" == typeof e || he.isFunction(e) || (e = {}), t === a && (e = this, t--); t < a; t++)
            if (null != (l = arguments[t]))
                for (r in l)(n = e[r], o = l[r], e !== o) && (i && o && (he.isPlainObject(o) || (s = he.isArray(o))) ? (s ? (s = !1, d = n && he.isArray(n) ? n : []) : d = n && he.isPlainObject(n) ? n : {}, e[r] = he.extend(i, d, o)) : void 0 !== o && (e[r] = o));
        return e
    }, he.extend({
        expando: "jQuery" + (me + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === he.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === he.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !he.isArray(e) && 0 <= t - parseFloat(t) + 1
        },
        isEmptyObject: function(e) {
            for (var t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            if (!e || "object" !== he.type(e) || e.nodeType || he.isWindow(e)) return !1;
            try {
                if (e.constructor && !ce.call(e, "constructor") && !ce.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (t) {
                return !1
            }
            if (!ue.ownFirst)
                for (var t in e) return ce.call(e, t);
            for (t in e);
            return void 0 == t || ce.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? de[pe.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && he.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(fe, "ms-").replace(ye, ve)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var n = 0,
                i;
            if (a(e))
                for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++);
            else
                for (n in e)
                    if (!1 === t.call(e[n], n, e[n])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(ge, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (a(Object(e)) ? he.merge(i, "string" == typeof e ? [e] : e) : re.call(i, e)), i
        },
        inArray: function(e, t, a) {
            var i;
            if (t) {
                if (le) return le.call(t, e, a);
                for (i = t.length, a = a ? 0 > a ? ae(0, i + a) : a : 0; a < i; a++)
                    if (a in t && t[a] === e) return a
            }
            return -1
        },
        merge: function(e, t) {
            for (var a = +t.length, n = 0, s = e.length; n < a;) e[s++] = t[n++];
            if (a != a)
                for (; void 0 !== t[n];) e[s++] = t[n++];
            return e.length = s, e
        },
        grep: function(e, t, a) {
            for (var n = [], s = 0, i = e.length, o; s < i; s++) o = !t(e[s], s), o !== !a && n.push(e[s]);
            return n
        },
        map: function(e, t, n) {
            var s = 0,
                i = [],
                o, r;
            if (a(e))
                for (o = e.length; s < o; s++) r = t(e[s], s, n), null != r && i.push(r);
            else
                for (s in e) r = t(e[s], s, n), null != r && i.push(r);
            return oe.apply([], i)
        },
        guid: 1,
        proxy: function(e, t) {
            var a, i, n;
            if ("string" == typeof t && (n = e[t], t = e, e = n), !!he.isFunction(e)) return a = se.call(arguments, 2), i = function() {
                return e.apply(t || this, a.concat(se.call(arguments)))
            }, i.guid = e.guid = e.guid || he.guid++, i
        },
        now: function() {
            return +new Date
        },
        support: ue
    }), "function" == typeof Symbol && (he.fn[Symbol.iterator] = ie[Symbol.iterator]), he.each(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object", "Error", "Symbol"], function(e, t) {
        de["[object " + t + "]"] = t.toLowerCase()
    });
    var be = function(e) {
        function t(e, t, a, n) {
            var s = t && t.ownerDocument,
                o = t ? t.nodeType : 9,
                r, l, i, d, p, u, h, g;
            if (a = a || [], "string" != typeof e || !e || 1 !== o && 9 !== o && 11 !== o) return a;
            if (!n && ((t ? t.ownerDocument || t : C) !== he && me(t), t = t || he, fe)) {
                if (11 !== o && (u = J.exec(e)))
                    if (!(r = u[1])) {
                        if (u[2]) return M.apply(a, t.getElementsByTagName(e)), a;
                        if ((r = u[3]) && ne.getElementsByClassName && t.getElementsByClassName) return M.apply(a, t.getElementsByClassName(r)), a
                    } else if (9 === o) {
                    if (!(i = t.getElementById(r))) return a;
                    if (i.id === r) return a.push(i), a
                } else if (s && (i = s.getElementById(r)) && xe(t, i) && i.id === r) return a.push(i), a;
                if (ne.qsa && !D[e + " "] && (!ye || !ye.test(e))) {
                    if (1 !== o) s = t, g = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((d = t.getAttribute("id")) ? d = d.replace(Z, "\\$&") : t.setAttribute("id", d = w), h = re(e), l = h.length, p = Y.test(d) ? "#" + d : "[id='" + d + "']"; l--;) h[l] = p + " " + m(h[l]);
                        g = h.join(","), s = Q.test(e) && c(t.parentNode) || t
                    }
                    if (g) try {
                        return M.apply(a, s.querySelectorAll(g)), a
                    } catch (e) {} finally {
                        d === w && t.removeAttribute("id")
                    }
                }
            }
            return de(e.replace(F, "$1"), t, a, n)
        }

        function a() {
            function e(a, i) {
                return t.push(a + " ") > se.cacheLength && delete e[t.shift()], e[a + " "] = i
            }
            var t = [];
            return e
        }

        function n(e) {
            return e[w] = !0, e
        }

        function s(e) {
            var t = he.createElement("div");
            try {
                return !!e(t)
            } catch (t) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var a = e.split("|"), n = a.length; n--;) se.attrHandle[a[n]] = t
        }

        function r(e, t) {
            var a = t && e,
                i = a && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || P) - (~e.sourceIndex || P);
            if (i) return i;
            if (a)
                for (; a = a.nextSibling;)
                    if (a === t) return -1;
            return e ? 1 : -1
        }

        function l(e) {
            return function(t) {
                var a = t.nodeName.toLowerCase();
                return "input" === a && t.type === e
            }
        }

        function d(e) {
            return function(t) {
                var a = t.nodeName.toLowerCase();
                return ("input" === a || "button" === a) && t.type === e
            }
        }

        function p(e) {
            return n(function(t) {
                return t = +t, n(function(a, n) {
                    for (var s = e([], a.length, t), o = s.length, i; o--;) a[i = s[o]] && (a[i] = !(n[i] = a[i]))
                })
            })
        }

        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function u() {}

        function m(e) {
            for (var t = 0, a = e.length, i = ""; t < a; t++) i += e[t].value;
            return i
        }

        function h(e, t, a) {
            var i = t.dir,
                n = a && "parentNode" === i,
                s = T++;
            return t.first ? function(t, a, s) {
                for (; t = t[i];)
                    if (1 === t.nodeType || n) return e(t, a, s)
            } : function(t, a, o) {
                var r = [S, s],
                    l, d, p;
                if (o) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || n) && e(t, a, o)) return !0;
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || n) {
                            if (p = t[w] || (t[w] = {}), d = p[t.uniqueID] || (p[t.uniqueID] = {}), (l = d[i]) && l[0] === S && l[1] === s) return r[2] = l[2];
                            if (d[i] = r, r[2] = e(t, a, o)) return !0
                        }
            }
        }

        function g(e) {
            return 1 < e.length ? function(t, a, n) {
                for (var s = e.length; s--;)
                    if (!e[s](t, a, n)) return !1;
                return !0
            } : e[0]
        }

        function f(e, a, n) {
            for (var s = 0, i = a.length; s < i; s++) t(e, a[s], n);
            return n
        }

        function y(e, t, a, n, s) {
            for (var o = [], r = 0, i = e.length, l; r < i; r++)(l = e[r]) && (!a || a(l, n, s)) && (o.push(l), null != t && t.push(r));
            return o
        }

        function v(e, t, a, s, o, i) {
            return s && !s[w] && (s = v(s)), o && !o[w] && (o = v(o, i)), n(function(n, r, l, d) {
                var p = [],
                    c = [],
                    u = r.length,
                    m = n || f(t || "*", l.nodeType ? [l] : l, []),
                    h = e && (n || !t) ? y(m, p, e, l, d) : m,
                    g = a ? o || (n ? e : u || s) ? [] : r : h,
                    v, b, i;
                if (a && a(h, g, l, d), s)
                    for (v = y(g, c), s(v, [], l, d), b = v.length; b--;)(i = v[b]) && (g[c[b]] = !(h[c[b]] = i));
                if (!n) g = y(g === r ? g.splice(u, g.length) : g), o ? o(null, r, g, d) : M.apply(r, g);
                else if (o || e) {
                    if (o) {
                        for (v = [], b = g.length; b--;)(i = g[b]) && v.push(h[b] = i);
                        o(null, g = [], v, d)
                    }
                    for (b = g.length; b--;)(i = g[b]) && -1 < (v = o ? O(n, i) : p[b]) && (n[v] = !(r[v] = i))
                }
            })
        }

        function b(e) {
            for (var t = e.length, a = se.relative[e[0].type], n = a || se.relative[" "], s = a ? 1 : 0, i = h(function(e) {
                    return e === l
                }, n, !0), o = h(function(e) {
                    return -1 < O(l, e)
                }, n, !0), r = [function(e, t, n) {
                    var s = !a && (n || t !== pe) || ((l = t).nodeType ? i(e, t, n) : o(e, t, n));
                    return l = null, s
                }], l, d, p; s < t; s++)
                if (d = se.relative[e[s].type]) r = [h(g(r), d)];
                else {
                    if (d = se.filter[e[s].type].apply(null, e[s].matches), d[w]) {
                        for (p = ++s; p < t && !se.relative[e[p].type]; p++);
                        return v(1 < s && g(r), 1 < s && m(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(F, "$1"), d, s < p && b(e.slice(s, p)), p < t && b(e = e.slice(p)), p < t && m(e))
                    }
                    r.push(d)
                }
            return g(r)
        }

        function x(e, a) {
            var s = 0 < a.length,
                o = 0 < e.length,
                i = function(n, r, l, d, p) {
                    var c = 0,
                        u = "0",
                        i = n && [],
                        m = [],
                        h = pe,
                        g = n || o && se.find.TAG("*", p),
                        f = S += null == h ? 1 : Math.random() || 0.1,
                        v = g.length,
                        b, x, w;
                    for (p && (pe = r === he || r || p); u !== v && null != (b = g[u]); u++) {
                        if (o && b) {
                            for (x = 0, r || b.ownerDocument === he || (me(b), l = !fe); w = e[x++];)
                                if (w(b, r || he, l)) {
                                    d.push(b);
                                    break
                                }
                            p && (S = f)
                        }
                        s && ((b = !w && b) && c--, n && i.push(b))
                    }
                    if (c += u, s && u !== c) {
                        for (x = 0; w = a[x++];) w(i, m, r, l);
                        if (n) {
                            if (0 < c)
                                for (; u--;) i[u] || m[u] || (m[u] = A.call(d));
                            m = y(m)
                        }
                        M.apply(d, m), p && !n && 0 < m.length && 1 < c + a.length && t.uniqueSort(d)
                    }
                    return p && (S = f, pe = h), i
                };
            return s ? n(i) : i
        }
        var w = "sizzle" + 1 * new Date,
            C = e.document,
            S = 0,
            T = 0,
            k = a(),
            $ = a(),
            D = a(),
            E = function(e, t) {
                return e === t && (ue = !0), 0
            },
            P = -2147483648,
            z = {}.hasOwnProperty,
            I = [],
            A = I.pop,
            _ = I.push,
            M = I.push,
            L = I.slice,
            O = function(e, t) {
                for (var a = 0, i = e.length; a < i; a++)
                    if (e[a] === t) return a;
                return -1
            },
            N = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            H = "[\\x20\\t\\r\\n\\f]",
            j = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            B = /[\x20\t\r\n\f]+/g,
            F = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
            W = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
            R = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
            q = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
            V = /:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
            Y = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/,
            U = {
                ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
                ATTR: /^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\]/,
                PSEUDO: /^:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
                CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
                bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
                needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
            },
            X = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Q = /[+~]/,
            Z = /'|\\/g,
            ee = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig,
            te = function(e, t, a) {
                var i = String.fromCharCode,
                    n = "0x" + t - 65536;
                return n != n || a ? t : 0 > n ? i(n + 65536) : i(55296 | n >> 10, 56320 | 1023 & n)
            },
            ae = function() {
                me()
            },
            ie, ne, se, oe, i, re, le, de, pe, ce, ue, me, he, ge, fe, ye, ve, be, xe;
        try {
            M.apply(I = L.call(C.childNodes), C.childNodes), I[C.childNodes.length].nodeType
        } catch (t) {
            M = {
                apply: I.length ? function(e, t) {
                    _.apply(e, L.call(t))
                } : function(e, t) {
                    for (var a = e.length, n = 0; e[a++] = t[n++];);
                    e.length = a - 1
                }
            }
        }
        for (ie in ne = t.support = {}, i = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, me = t.setDocument = function(e) {
                var t = e ? e.ownerDocument || e : C,
                    a, n;
                return t !== he && 9 === t.nodeType && t.documentElement ? (he = t, ge = he.documentElement, fe = !i(he), (n = he.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ae, !1) : n.attachEvent && n.attachEvent("onunload", ae)), ne.attributes = s(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), ne.getElementsByTagName = s(function(e) {
                    return e.appendChild(he.createComment("")), !e.getElementsByTagName("*").length
                }), ne.getElementsByClassName = K.test(he.getElementsByClassName), ne.getById = s(function(e) {
                    return ge.appendChild(e).id = w, !he.getElementsByName || !he.getElementsByName(w).length
                }), ne.getById ? (se.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && fe) {
                        var a = t.getElementById(e);
                        return a ? [a] : []
                    }
                }, se.filter.ID = function(e) {
                    var t = e.replace(ee, te);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete se.find.ID, se.filter.ID = function(e) {
                    var t = e.replace(ee, te);
                    return function(e) {
                        var a = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return a && a.value === t
                    }
                }), se.find.TAG = ne.getElementsByTagName ? function(e, t) {
                    return "undefined" == typeof t.getElementsByTagName ? ne.qsa ? t.querySelectorAll(e) : void 0 : t.getElementsByTagName(e)
                } : function(e, t) {
                    var a = [],
                        n = 0,
                        i = t.getElementsByTagName(e),
                        s;
                    if ("*" === e) {
                        for (; s = i[n++];) 1 === s.nodeType && a.push(s);
                        return a
                    }
                    return i
                }, se.find.CLASS = ne.getElementsByClassName && function(e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && fe) return t.getElementsByClassName(e)
                }, ve = [], ye = [], (ne.qsa = K.test(he.querySelectorAll)) && (s(function(e) {
                    ge.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && ye.push("[*^$]=" + H + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || ye.push("\\[" + H + "*(?:value|" + N + ")"), e.querySelectorAll("[id~=" + w + "-]").length || ye.push("~="), e.querySelectorAll(":checked").length || ye.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || ye.push(".#.+[+~]")
                }), s(function(e) {
                    var t = he.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && ye.push("name" + H + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || ye.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), ye.push(",.*:")
                })), (ne.matchesSelector = K.test(be = ge.matches || ge.webkitMatchesSelector || ge.mozMatchesSelector || ge.oMatchesSelector || ge.msMatchesSelector)) && s(function(e) {
                    ne.disconnectedMatch = be.call(e, "div"), be.call(e, "[s!='']:x"), ve.push("!=", ":(" + j + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ("\\[" + H + "*(" + j + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + j + "))|)" + H + "*\\]") + ")*)|.*)\\)|)")
                }), ye = ye.length && new RegExp(ye.join("|")), ve = ve.length && new RegExp(ve.join("|")), a = K.test(ge.compareDocumentPosition), xe = a || K.test(ge.contains) ? function(e, t) {
                    var a = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !!(i && 1 === i.nodeType && (a.contains ? a.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, E = a ? function(e, t) {
                    if (e === t) return ue = !0, 0;
                    var a = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return a ? a : (a = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & a || !ne.sortDetached && t.compareDocumentPosition(e) === a ? e === he || e.ownerDocument === C && xe(C, e) ? -1 : t === he || t.ownerDocument === C && xe(C, t) ? 1 : ce ? O(ce, e) - O(ce, t) : 0 : 4 & a ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return ue = !0, 0;
                    var a = 0,
                        i = e.parentNode,
                        n = t.parentNode,
                        s = [e],
                        o = [t],
                        l;
                    if (!i || !n) return e === he ? -1 : t === he ? 1 : i ? -1 : n ? 1 : ce ? O(ce, e) - O(ce, t) : 0;
                    if (i === n) return r(e, t);
                    for (l = e; l = l.parentNode;) s.unshift(l);
                    for (l = t; l = l.parentNode;) o.unshift(l);
                    for (; s[a] === o[a];) a++;
                    return a ? r(s[a], o[a]) : s[a] === C ? -1 : o[a] === C ? 1 : 0
                }, he) : he
            }, t.matches = function(e, a) {
                return t(e, null, null, a)
            }, t.matchesSelector = function(e, a) {
                if ((e.ownerDocument || e) !== he && me(e), a = a.replace(q, "='$1']"), ne.matchesSelector && fe && !D[a + " "] && (!ve || !ve.test(a)) && (!ye || !ye.test(a))) try {
                    var i = be.call(e, a);
                    if (i || ne.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (t) {}
                return 0 < t(a, he, null, [e]).length
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== he && me(e), xe(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== he && me(e);
                var a = se.attrHandle[t.toLowerCase()],
                    i = a && z.call(se.attrHandle, t.toLowerCase()) ? a(e, t, !fe) : void 0;
                return void 0 === i ? ne.attributes || !fe ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null : i
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t = [],
                    a = 0,
                    n = 0,
                    i;
                if (ue = !ne.detectDuplicates, ce = !ne.sortStable && e.slice(0), e.sort(E), ue) {
                    for (; i = e[n++];) i === e[n] && (a = t.push(n));
                    for (; a--;) e.splice(t[a], 1)
                }
                return ce = null, e
            }, oe = t.getText = function(e) {
                var t = "",
                    a = 0,
                    i = e.nodeType,
                    n;
                if (!i)
                    for (; n = e[a++];) t += oe(n);
                else if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) t += oe(e)
                } else if (3 === i || 4 === i) return e.nodeValue;
                return t
            }, se = t.selectors = {
                cacheLength: 50,
                createPseudo: n,
                match: U,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(ee, te), e[3] = (e[3] || e[4] || e[5] || "").replace(ee, te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (!e[3] && t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t = !e[6] && e[2],
                            a;
                        return U.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : t && V.test(t) && (a = re(t, !0)) && (a = t.indexOf(")", t.length - a) - t.length) && (e[0] = e[0].slice(0, a), e[2] = t.slice(0, a)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(ee, te).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = k[e + " "];
                        return t || (t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) && k(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, a, i) {
                        return function(n) {
                            var s = t.attr(n, e);
                            return null == s ? "!=" === a : !a || (s += "", "=" === a ? s === i : "!=" === a ? s !== i : "^=" === a ? i && 0 === s.indexOf(i) : "*=" === a ? i && -1 < s.indexOf(i) : "$=" === a ? i && s.slice(-i.length) === i : "~=" === a ? -1 < (" " + s.replace(B, " ") + " ").indexOf(i) : "|=" === a && (s === i || s.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(e, t, a, i, n) {
                        var s = "nth" !== e.slice(0, 3),
                            o = "last" !== e.slice(-4),
                            r = "of-type" === t;
                        return 1 === i && 0 === n ? function(e) {
                            return !!e.parentNode
                        } : function(t, a, l) {
                            var d = s == o ? "previousSibling" : "nextSibling",
                                p = t.parentNode,
                                c = r && t.nodeName.toLowerCase(),
                                u = !l && !r,
                                m = !1,
                                h, g, f, y, v, b;
                            if (p) {
                                if (s) {
                                    for (; d;) {
                                        for (y = t; y = y[d];)
                                            if (r ? y.nodeName.toLowerCase() === c : 1 === y.nodeType) return !1;
                                        b = d = "only" === e && !b && "nextSibling"
                                    }
                                    return !0
                                }
                                if (b = [o ? p.firstChild : p.lastChild], o && u) {
                                    for (y = p, f = y[w] || (y[w] = {}), g = f[y.uniqueID] || (f[y.uniqueID] = {}), h = g[e] || [], v = h[0] === S && h[1], m = v && h[2], y = v && p.childNodes[v]; y = ++v && y && y[d] || (m = v = 0) || b.pop();)
                                        if (1 === y.nodeType && ++m && y === t) {
                                            g[e] = [S, v, m];
                                            break
                                        }
                                } else if (u && (y = t, f = y[w] || (y[w] = {}), g = f[y.uniqueID] || (f[y.uniqueID] = {}), h = g[e] || [], v = h[0] === S && h[1], m = v), !1 === m)
                                    for (;
                                        (y = ++v && y && y[d] || (m = v = 0) || b.pop()) && !((r ? y.nodeName.toLowerCase() === c : 1 === y.nodeType) && ++m && (u && (f = y[w] || (y[w] = {}), g = f[y.uniqueID] || (f[y.uniqueID] = {}), g[e] = [S, m]), y === t)););
                                return m -= n, m === i || 0 == m % i && 0 <= m / i
                            }
                        }
                    },
                    PSEUDO: function(e, a) {
                        var s = se.pseudos[e] || se.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e),
                            i;
                        return s[w] ? s(a) : 1 < s.length ? (i = [e, e, "", a], se.setFilters.hasOwnProperty(e.toLowerCase()) ? n(function(e, t) {
                            for (var n = s(e, a), o = n.length, i; o--;) i = O(e, n[o]), e[i] = !(t[i] = n[o])
                        }) : function(e) {
                            return s(e, 0, i)
                        }) : s
                    }
                },
                pseudos: {
                    not: n(function(e) {
                        var t = [],
                            a = [],
                            s = le(e.replace(F, "$1"));
                        return s[w] ? n(function(e, t, a, n) {
                            for (var o = s(e, null, n, []), r = e.length, i; r--;)(i = o[r]) && (e[r] = !(t[r] = i))
                        }) : function(e, i, n) {
                            return t[0] = e, s(t, null, n, a), t[0] = null, !a.pop()
                        }
                    }),
                    has: n(function(e) {
                        return function(a) {
                            return 0 < t(e, a).length
                        }
                    }),
                    contains: n(function(e) {
                        return e = e.replace(ee, te),
                            function(t) {
                                return -1 < (t.textContent || t.innerText || oe(t)).indexOf(e)
                            }
                    }),
                    lang: n(function(e) {
                        return Y.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ee, te).toLowerCase(),
                            function(t) {
                                var a;
                                do
                                    if (a = fe ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return a = a.toLowerCase(), a === e || 0 === a.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var a = e.location && e.location.hash;
                        return a && a.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === ge
                    },
                    focus: function(e) {
                        return e === he.activeElement && (!he.hasFocus || he.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return !1 === e.disabled
                    },
                    disabled: function(e) {
                        return !0 === e.disabled
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (6 > e.nodeType) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !se.pseudos.empty(e)
                    },
                    header: function(e) {
                        return G.test(e.nodeName)
                    },
                    input: function(e) {
                        return X.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: p(function() {
                        return [0]
                    }),
                    last: p(function(e, t) {
                        return [t - 1]
                    }),
                    eq: p(function(e, t, a) {
                        return [0 > a ? a + t : a]
                    }),
                    even: p(function(e, t) {
                        for (var a = 0; a < t; a += 2) e.push(a);
                        return e
                    }),
                    odd: p(function(e, t) {
                        for (var a = 1; a < t; a += 2) e.push(a);
                        return e
                    }),
                    lt: p(function(e, t, a) {
                        for (var n = 0 > a ? a + t : a; 0 <= --n;) e.push(n);
                        return e
                    }),
                    gt: p(function(e, t, a) {
                        for (var n = 0 > a ? a + t : a; ++n < t;) e.push(n);
                        return e
                    })
                }
            }, se.pseudos.nth = se.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) se.pseudos[ie] = l(ie);
        for (ie in {
                submit: !0,
                reset: !0
            }) se.pseudos[ie] = d(ie);
        return u.prototype = se.filters = se.pseudos, se.setFilters = new u, re = t.tokenize = function(e, a) {
            var i = $[e + " "],
                n, s, o, r, l, d, p;
            if (i) return a ? 0 : i.slice(0);
            for (l = e, d = [], p = se.preFilter; l;) {
                for (r in (!n || (s = W.exec(l))) && (s && (l = l.slice(s[0].length) || l), d.push(o = [])), n = !1, (s = R.exec(l)) && (n = s.shift(), o.push({
                        value: n,
                        type: s[0].replace(F, " ")
                    }), l = l.slice(n.length)), se.filter)(s = U[r].exec(l)) && (!p[r] || (s = p[r](s))) && (n = s.shift(), o.push({
                    value: n,
                    type: r,
                    matches: s
                }), l = l.slice(n.length));
                if (!n) break
            }
            return a ? l.length : l ? t.error(e) : $(e, d).slice(0)
        }, le = t.compile = function(e, t) {
            var a = [],
                n = [],
                s = D[e + " "],
                o;
            if (!s) {
                for (t || (t = re(e)), o = t.length; o--;) s = b(t[o]), s[w] ? a.push(s) : n.push(s);
                s = D(e, x(n, a)), s.selector = e
            }
            return s
        }, de = t.select = function(e, t, a, n) {
            var s = "function" == typeof e && e,
                o = !n && re(e = s.selector || e),
                r, i, l, d, p;
            if (a = a || [], 1 === o.length) {
                if (i = o[0] = o[0].slice(0), 2 < i.length && "ID" === (l = i[0]).type && ne.getById && 9 === t.nodeType && fe && se.relative[i[1].type]) {
                    if (t = (se.find.ID(l.matches[0].replace(ee, te), t) || [])[0], !t) return a;
                    s && (t = t.parentNode), e = e.slice(i.shift().value.length)
                }
                for (r = U.needsContext.test(e) ? 0 : i.length; r-- && (l = i[r], !se.relative[d = l.type]);)
                    if ((p = se.find[d]) && (n = p(l.matches[0].replace(ee, te), Q.test(i[0].type) && c(t.parentNode) || t))) {
                        if (i.splice(r, 1), e = n.length && m(i), !e) return M.apply(a, n), a;
                        break
                    }
            }
            return (s || le(e, o))(n, t, !fe, a, !t || Q.test(e) && c(t.parentNode) || t), a
        }, ne.sortStable = w.split("").sort(E).join("") === w, ne.detectDuplicates = !!ue, me(), ne.sortDetached = s(function(e) {
            return 1 & e.compareDocumentPosition(he.createElement("div"))
        }), s(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, a) {
            if (!a) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), ne.attributes && s(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, a) {
            if (!a && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), s(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(N, function(e, t, a) {
            var i;
            if (!a) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    he.find = be, he.expr = be.selectors, he.expr[":"] = he.expr.pseudos, he.uniqueSort = he.unique = be.uniqueSort, he.text = be.getText, he.isXMLDoc = be.isXML, he.contains = be.contains;
    var xe = function(e, t, a) {
            for (var i = [];
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (void 0 !== a && he(e).is(a)) break;
                    i.push(e)
                }
            return i
        },
        we = function(e, t) {
            for (var a = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && a.push(e);
            return a
        },
        Ce = he.expr.match.needsContext,
        Se = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        Te = /^.[^:#\[\.,]*$/;
    he.filter = function(e, t, a) {
        var i = t[0];
        return a && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? he.find.matchesSelector(i, e) ? [i] : [] : he.find.matches(e, he.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, he.fn.extend({
        find: function(e) {
            var t = [],
                a = this,
                n = a.length,
                s;
            if ("string" != typeof e) return this.pushStack(he(e).filter(function() {
                for (s = 0; s < n; s++)
                    if (he.contains(a[s], this)) return !0
            }));
            for (s = 0; s < n; s++) he.find(e, a[s], t);
            return t = this.pushStack(1 < n ? he.unique(t) : t), t.selector = this.selector ? this.selector + " " + e : e, t
        },
        filter: function(e) {
            return this.pushStack(n(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(n(this, e || [], !0))
        },
        is: function(e) {
            return !!n(this, "string" == typeof e && Ce.test(e) ? he(e) : e || [], !1).length
        }
    });
    var ke = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        $e = he.fn.init = function(e, t, a) {
            var i, n;
            if (!e) return this;
            if (a = a || De, "string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : ke.exec(e), i && (i[1] || !t)) {
                    if (i[1]) {
                        if (t = t instanceof he ? t[0] : t, he.merge(this, he.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ne, !0)), Se.test(i[1]) && he.isPlainObject(t))
                            for (i in t) he.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                        return this
                    }
                    if (n = ne.getElementById(i[2]), n && n.parentNode) {
                        if (n.id !== i[2]) return De.find(e);
                        this.length = 1, this[0] = n
                    }
                    return this.context = ne, this.selector = e, this
                }
                return !t || t.jquery ? (t || a).find(e) : this.constructor(t).find(e)
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : he.isFunction(e) ? "undefined" == typeof a.ready ? e(he) : a.ready(e) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), he.makeArray(e, this))
        },
        De;
    $e.prototype = he.fn, De = he(ne);
    var Ee = /^(?:parents|prev(?:Until|All))/,
        Pe = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    he.fn.extend({
        has: function(e) {
            var t = he(e, this),
                a = t.length,
                n;
            return this.filter(function() {
                for (n = 0; n < a; n++)
                    if (he.contains(this, t[n])) return !0
            })
        },
        closest: function(e, t) {
            for (var a = 0, i = this.length, n = [], s = Ce.test(e) || "string" != typeof e ? he(e, t || this.context) : 0, o; a < i; a++)
                for (o = this[a]; o && o !== t; o = o.parentNode)
                    if (11 > o.nodeType && (s ? -1 < s.index(o) : 1 === o.nodeType && he.find.matchesSelector(o, e))) {
                        n.push(o);
                        break
                    }
            return this.pushStack(1 < n.length ? he.uniqueSort(n) : n)
        },
        index: function(e) {
            return e ? "string" == typeof e ? he.inArray(this[0], he(e)) : he.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), he.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return xe(e, "parentNode")
        },
        parentsUntil: function(e, t, a) {
            return xe(e, "parentNode", a)
        },
        next: function(e) {
            return s(e, "nextSibling")
        },
        prev: function(e) {
            return s(e, "previousSibling")
        },
        nextAll: function(e) {
            return xe(e, "nextSibling")
        },
        prevAll: function(e) {
            return xe(e, "previousSibling")
        },
        nextUntil: function(e, t, a) {
            return xe(e, "nextSibling", a)
        },
        prevUntil: function(e, t, a) {
            return xe(e, "previousSibling", a)
        },
        siblings: function(e) {
            return we((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return we(e.firstChild)
        },
        contents: function(e) {
            return he.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : he.merge([], e.childNodes)
        }
    }, function(e, t) {
        he.fn[e] = function(a, i) {
            var n = he.map(this, t, a);
            return "Until" !== e.slice(-5) && (i = a), i && "string" == typeof i && (n = he.filter(i, n)), 1 < this.length && (!Pe[e] && (n = he.uniqueSort(n)), Ee.test(e) && (n = n.reverse())), this.pushStack(n)
        }
    });
    var ze = /\S+/g;
    he.Callbacks = function(e) {
        e = "string" == typeof e ? o(e) : he.extend({}, e);
        var t = [],
            a = [],
            i = -1,
            n = function() {
                for (p = e.once, d = r = !0; a.length; i = -1)
                    for (l = a.shift(); ++i < t.length;) !1 === t[i].apply(l[0], l[1]) && e.stopOnFalse && (i = t.length, l = !1);
                e.memory || (l = !1), r = !1, p && (l ? t = [] : t = "")
            },
            s = {
                add: function() {
                    return t && (l && !r && (i = t.length - 1, a.push(l)), function a(i) {
                        he.each(i, function(i, n) {
                            he.isFunction(n) ? (!e.unique || !s.has(n)) && t.push(n) : n && n.length && "string" !== he.type(n) && a(n)
                        })
                    }(arguments), l && !r && n()), this
                },
                remove: function() {
                    return he.each(arguments, function(e, a) {
                        for (var n; - 1 < (n = he.inArray(a, t, n));) t.splice(n, 1), n <= i && i--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < he.inArray(e, t) : 0 < t.length
                },
                empty: function() {
                    return t && (t = []), this
                },
                disable: function() {
                    return p = a = [], t = l = "", this
                },
                disabled: function() {
                    return !t
                },
                lock: function() {
                    return p = !0, l || s.disable(), this
                },
                locked: function() {
                    return !!p
                },
                fireWith: function(e, t) {
                    return p || (t = t || [], t = [e, t.slice ? t.slice() : t], a.push(t), !r && n()), this
                },
                fire: function() {
                    return s.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            },
            r, l, d, p;
        return s
    }, he.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", he.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", he.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", he.Callbacks("memory")]
                ],
                a = "pending",
                n = {
                    state: function() {
                        return a
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return he.Deferred(function(a) {
                            he.each(t, function(t, i) {
                                var o = he.isFunction(e[t]) && e[t];
                                s[i[1]](function() {
                                    var e = o && o.apply(this, arguments);
                                    e && he.isFunction(e.promise) ? e.promise().progress(a.notify).done(a.resolve).fail(a.reject) : a[i[0] + "With"](this === n ? a.promise() : this, o ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null == e ? n : he.extend(e, n)
                    }
                },
                s = {};
            return n.pipe = n.then, he.each(t, function(e, i) {
                var o = i[2],
                    r = i[3];
                n[i[1]] = o.add, r && o.add(function() {
                    a = r
                }, t[1 ^ e][2].disable, t[2][2].lock), s[i[0]] = function() {
                    return s[i[0] + "With"](this === s ? n : this, arguments), this
                }, s[i[0] + "With"] = o.fireWith
            }), n.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var t = 0,
                a = se.call(arguments),
                i = a.length,
                n = 1 !== i || e && he.isFunction(e.promise) ? i : 0,
                s = 1 === n ? e : he.Deferred(),
                o = function(e, t, a) {
                    return function(i) {
                        t[e] = this, a[e] = 1 < arguments.length ? se.call(arguments) : i, a === r ? s.notifyWith(t, a) : !--n && s.resolveWith(t, a)
                    }
                },
                r, l, d;
            if (1 < i)
                for (r = Array(i), l = Array(i), d = Array(i); t < i; t++) a[t] && he.isFunction(a[t].promise) ? a[t].promise().progress(o(t, l, r)).done(o(t, d, a)).fail(s.reject) : --n;
            return n || s.resolveWith(d, a), s.promise()
        }
    });
    var Ie;
    he.fn.ready = function(e) {
        return he.ready.promise().done(e), this
    }, he.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? he.readyWait++ : he.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? !--he.readyWait : !he.isReady) && (he.isReady = !0, !0 !== e && 0 < --he.readyWait || (Ie.resolveWith(ne, [he]), he.fn.triggerHandler && (he(ne).triggerHandler("ready"), he(ne).off("ready"))))
        }
    }), he.ready.promise = function(t) {
        if (!Ie)
            if (Ie = he.Deferred(), "complete" === ne.readyState || "loading" !== ne.readyState && !ne.documentElement.doScroll) e.setTimeout(he.ready);
            else if (ne.addEventListener) ne.addEventListener("DOMContentLoaded", l), e.addEventListener("load", l);
        else {
            ne.attachEvent("onreadystatechange", l), e.attachEvent("onload", l);
            var a = !1;
            try {
                a = null == e.frameElement && ne.documentElement
            } catch (t) {}
            a && a.doScroll && function t() {
                if (!he.isReady) {
                    try {
                        a.doScroll("left")
                    } catch (a) {
                        return e.setTimeout(t, 50)
                    }
                    r(), he.ready()
                }
            }()
        }
        return Ie.promise(t)
    }, he.ready.promise();
    for (var Ae in he(ue)) break;
    ue.ownFirst = "0" === Ae, ue.inlineBlockNeedsLayout = !1, he(function() {
            var e, t, a, i;
            a = ne.getElementsByTagName("body")[0], a && a.style && (t = ne.createElement("div"), i = ne.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", a.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ue.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (a.style.zoom = 1)), a.removeChild(i))
        }),
        function() {
            var e = ne.createElement("div");
            ue.deleteExpando = !0;
            try {
                delete e.test
            } catch (t) {
                ue.deleteExpando = !1
            }
            e = null
        }();
    var _e = function(e) {
            var t = he.noData[(e.nodeName + " ").toLowerCase()],
                a = +e.nodeType || 1;
            return 1 != a && 9 != a ? !1 : !t || !0 !== t && e.getAttribute("classid") === t
        },
        i = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Me = /([A-Z])/g;
    he.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(e) {
                return e = e.nodeType ? he.cache[e[he.expando]] : e[he.expando], !!e && !p(e)
            },
            data: function(e, t, a) {
                return c(e, t, a)
            },
            removeData: function(e, t) {
                return u(e, t)
            },
            _data: function(e, t, a) {
                return c(e, t, a, !0)
            },
            _removeData: function(e, t) {
                return u(e, t, !0)
            }
        }), he.fn.extend({
            data: function(e, t) {
                var a = this[0],
                    n = a && a.attributes,
                    s, i, o;
                if (void 0 === e) {
                    if (this.length && (o = he.data(a), 1 === a.nodeType && !he._data(a, "parsedAttrs"))) {
                        for (s = n.length; s--;) n[s] && (i = n[s].name, 0 === i.indexOf("data-") && (i = he.camelCase(i.slice(5)), d(a, i, o[i])));
                        he._data(a, "parsedAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof e ? this.each(function() {
                    he.data(this, e)
                }) : 1 < arguments.length ? this.each(function() {
                    he.data(this, e, t)
                }) : a ? d(a, e, he.data(a, e)) : void 0
            },
            removeData: function(e) {
                return this.each(function() {
                    he.removeData(this, e)
                })
            }
        }), he.extend({
            queue: function(e, t, a) {
                var i;
                if (e) return t = (t || "fx") + "queue", i = he._data(e, t), a && (!i || he.isArray(a) ? i = he._data(e, t, he.makeArray(a)) : i.push(a)), i || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var a = he.queue(e, t),
                    i = a.length,
                    n = a.shift(),
                    s = he._queueHooks(e, t);
                "inprogress" === n && (n = a.shift(), i--), n && ("fx" === t && a.unshift("inprogress"), delete s.stop, n.call(e, function() {
                    he.dequeue(e, t)
                }, s)), !i && s && s.empty.fire()
            },
            _queueHooks: function(e, t) {
                var a = t + "queueHooks";
                return he._data(e, a) || he._data(e, a, {
                    empty: he.Callbacks("once memory").add(function() {
                        he._removeData(e, t + "queue"), he._removeData(e, a)
                    })
                })
            }
        }), he.fn.extend({
            queue: function(e, t) {
                var a = 2;
                return "string" != typeof e && (t = e, e = "fx", a--), arguments.length < a ? he.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var a = he.queue(this, e, t);
                    he._queueHooks(this, e), "fx" === e && "inprogress" !== a[0] && he.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    he.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var a = 1,
                    n = he.Deferred(),
                    s = this,
                    o = this.length,
                    i = function() {
                        --a || n.resolveWith(s, [s])
                    },
                    r;
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;) r = he._data(s[o], e + "queueHooks"), r && r.empty && (a++, r.empty.add(i));
                return i(), n.promise(t)
            }
        }),
        function() {
            var e;
            ue.shrinkWrapBlocks = function() {
                if (null != e) return e;
                e = !1;
                var t, a, i;
                if (a = ne.getElementsByTagName("body")[0], a && a.style) return t = ne.createElement("div"), i = ne.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", a.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(ne.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), a.removeChild(i), e
            }
        }();
    var Le = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Oe = new RegExp("^(?:([+-])=|)(" + Le + ")([a-z%]*)$", "i"),
        Ne = ["Top", "Right", "Bottom", "Left"],
        He = function(e, t) {
            return e = t || e, "none" === he.css(e, "display") || !he.contains(e.ownerDocument, e)
        },
        je = function(e, t, a, n, s, o, r) {
            var l = 0,
                i = e.length,
                d = null == a;
            if ("object" === he.type(a))
                for (l in s = !0, a) je(e, t, l, a[l], !0, o, r);
            else if (void 0 !== n && (s = !0, he.isFunction(n) || (r = !0), d && (r ? (t.call(e, n), t = null) : (d = t, t = function(e, t, a) {
                    return d.call(he(e), a)
                })), t))
                for (; l < i; l++) t(e[l], a, r ? n : n.call(e[l], l, t(e[l], a)));
            return s ? e : d ? t.call(e) : i ? t(e[0], a) : o
        },
        Be = /^(?:checkbox|radio)$/i,
        Fe = /<([\w:-]+)/,
        We = /^$|\/(?:java|ecma)script/i,
        Re = /^\s+/,
        qe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    (function() {
        var e = ne.createElement("div"),
            t = ne.createDocumentFragment(),
            a = ne.createElement("input");
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ue.leadingWhitespace = 3 === e.firstChild.nodeType, ue.tbody = !e.getElementsByTagName("tbody").length, ue.htmlSerialize = !!e.getElementsByTagName("link").length, ue.html5Clone = "<:nav></:nav>" !== ne.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, t.appendChild(a), ue.appendChecked = a.checked, e.innerHTML = "<textarea>x</textarea>", ue.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), a = ne.createElement("input"), a.setAttribute("type", "radio"), a.setAttribute("checked", "checked"), a.setAttribute("name", "t"), e.appendChild(a), ue.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ue.noCloneEvent = !!e.addEventListener, e[he.expando] = 1, ue.attributes = !e.getAttribute(he.expando)
    })();
    var Ve = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ue.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    Ve.optgroup = Ve.option, Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead, Ve.th = Ve.td;
    var Ye = /<|&#?\w+;/,
        Ue = /<tbody/i;
    (function() {
        var t = ne.createElement("div"),
            a, i;
        for (a in {
                submit: !0,
                change: !0,
                focusin: !0
            }) i = "on" + a, (ue[a] = i in e) || (t.setAttribute(i, "t"), ue[a] = !1 === t.attributes[i].expando);
        t = null
    })();
    var Xe = /^(?:input|select|textarea)$/i,
        Ge = /^key/,
        Ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Je = /^(?:focusinfocus|focusoutblur)$/,
        Qe = /^([^.]*)(?:\.(.+)|)/;
    he.event = {
        global: {},
        add: function(e, a, i, n, s) {
            var o = he._data(e),
                r, l, d, t, p, c, u, m, h, g, f;
            if (o) {
                for (i.handler && (t = i, i = t.handler, s = t.selector), i.guid || (i.guid = he.guid++), (l = o.events) || (l = o.events = {}), (c = o.handle) || (c = o.handle = function(t) {
                        return "undefined" == typeof he || t && he.event.triggered === t.type ? void 0 : he.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = e), a = (a || "").match(ze) || [""], d = a.length; d--;)(r = Qe.exec(a[d]) || [], h = f = r[1], g = (r[2] || "").split(".").sort(), !!h) && (p = he.event.special[h] || {}, h = (s ? p.delegateType : p.bindType) || h, p = he.event.special[h] || {}, u = he.extend({
                    type: h,
                    origType: f,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: s,
                    needsContext: s && he.expr.match.needsContext.test(s),
                    namespace: g.join(".")
                }, t), (m = l[h]) || (m = l[h] = [], m.delegateCount = 0, (!p.setup || !1 === p.setup.call(e, n, g, c)) && (e.addEventListener ? e.addEventListener(h, c, !1) : e.attachEvent && e.attachEvent("on" + h, c))), p.add && (p.add.call(e, u), !u.handler.guid && (u.handler.guid = i.guid)), s ? m.splice(m.delegateCount++, 0, u) : m.push(u), he.event.global[h] = !0);
                e = null
            }
        },
        remove: function(e, a, i, n, s) {
            var o = he.hasData(e) && he._data(e),
                r, l, d, p, c, t, u, m, h, g, f;
            if (o && (t = o.events)) {
                for (a = (a || "").match(ze) || [""], c = a.length; c--;) {
                    if (d = Qe.exec(a[c]) || [], h = f = d[1], g = (d[2] || "").split(".").sort(), !h) {
                        for (h in t) he.event.remove(e, h + a[c], i, n, !0);
                        continue
                    }
                    for (u = he.event.special[h] || {}, h = (n ? u.delegateType : u.bindType) || h, m = t[h] || [], d = d[2] && new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"), p = r = m.length; r--;) l = m[r], (s || f === l.origType) && (!i || i.guid === l.guid) && (!d || d.test(l.namespace)) && (!n || n === l.selector || "**" === n && l.selector) && (m.splice(r, 1), l.selector && m.delegateCount--, u.remove && u.remove.call(e, l));
                    p && !m.length && ((!u.teardown || !1 === u.teardown.call(e, g, o.handle)) && he.removeEvent(e, h, o.handle), delete t[h])
                }
                he.isEmptyObject(t) && (delete o.handle, he._removeData(e, "events"))
            }
        },
        trigger: function(t, a, n, s) {
            var o = [n || ne],
                r = ce.call(t, "type") ? t.type : t,
                l = ce.call(t, "namespace") ? t.namespace.split(".") : [],
                d, p, c, u, m, h, g;
            if ((c = h = n = n || ne, 3 !== n.nodeType && 8 !== n.nodeType) && !Je.test(r + he.event.triggered) && (-1 < r.indexOf(".") && (l = r.split("."), r = l.shift(), l.sort()), p = 0 > r.indexOf(":") && "on" + r, t = t[he.expando] ? t : new he.Event(r, "object" == typeof t && t), t.isTrigger = s ? 2 : 3, t.namespace = l.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + l.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), a = null == a ? [t] : he.makeArray(a, [t]), m = he.event.special[r] || {}, s || !m.trigger || !1 !== m.trigger.apply(n, a))) {
                if (!s && !m.noBubble && !he.isWindow(n)) {
                    for (u = m.delegateType || r, Je.test(u + r) || (c = c.parentNode); c; c = c.parentNode) o.push(c), h = c;
                    h === (n.ownerDocument || ne) && o.push(h.defaultView || h.parentWindow || e)
                }
                for (g = 0;
                    (c = o[g++]) && !t.isPropagationStopped();) t.type = 1 < g ? u : m.bindType || r, d = (he._data(c, "events") || {})[t.type] && he._data(c, "handle"), d && d.apply(c, a), d = p && c[p], d && d.apply && _e(c) && (t.result = d.apply(c, a), !1 === t.result && t.preventDefault());
                if (t.type = r, !s && !t.isDefaultPrevented() && (!m._default || !1 === m._default.apply(o.pop(), a)) && _e(n) && p && n[r] && !he.isWindow(n)) {
                    h = n[p], h && (n[p] = null), he.event.triggered = r;
                    try {
                        n[r]()
                    } catch (t) {}
                    he.event.triggered = void 0, h && (n[p] = h)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = he.event.fix(e);
            var t = [],
                a = se.call(arguments),
                n = (he._data(this, "events") || {})[e.type] || [],
                s = he.event.special[e.type] || {},
                o, i, r, l, d;
            if (a[0] = e, e.delegateTarget = this, !(s.preDispatch && !1 === s.preDispatch.call(this, e))) {
                for (t = he.event.handlers.call(this, e, n), o = 0;
                    (l = t[o++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = l.elem, i = 0;
                        (d = l.handlers[i++]) && !e.isImmediatePropagationStopped();)(!e.rnamespace || e.rnamespace.test(d.namespace)) && (e.handleObj = d, e.data = d.data, r = ((he.event.special[d.origType] || {}).handle || d.handler).apply(l.elem, a), void 0 !== r && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
                return s.postDispatch && s.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var a = [],
                n = t.delegateCount,
                s = e.target,
                o, i, r, l;
            if (n && s.nodeType && ("click" !== e.type || isNaN(e.button) || 1 > e.button))
                for (; s != this; s = s.parentNode || this)
                    if (1 === s.nodeType && (!0 !== s.disabled || "click" !== e.type)) {
                        for (i = [], o = 0; o < n; o++) l = t[o], r = l.selector + " ", void 0 === i[r] && (i[r] = l.needsContext ? -1 < he(r, this).index(s) : he.find(r, this, null, [s]).length), i[r] && i.push(l);
                        i.length && a.push({
                            elem: s,
                            handlers: i
                        })
                    }
            return n < t.length && a.push({
                elem: this,
                handlers: t.slice(n)
            }), a
        },
        fix: function(e) {
            if (e[he.expando]) return e;
            var t = e.type,
                a = e,
                n = this.fixHooks[t],
                s, i, o;
            for (n || (this.fixHooks[t] = n = Ke.test(t) ? this.mouseHooks : Ge.test(t) ? this.keyHooks : {}), o = n.props ? this.props.concat(n.props) : this.props, e = new he.Event(a), s = o.length; s--;) i = o[s], e[i] = a[i];
            return e.target || (e.target = a.srcElement || ne), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, n.filter ? n.filter(e, a) : e
        },
        props: ["altKey", "bubbles", "cancelable", "ctrlKey", "currentTarget", "detail", "eventPhase", "metaKey", "relatedTarget", "shiftKey", "target", "timeStamp", "view", "which"],
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(e, t) {
                return null == e.which && (e.which = null == t.charCode ? t.keyCode : t.charCode), e
            }
        },
        mouseHooks: {
            props: ["button", "buttons", "clientX", "clientY", "fromElement", "offsetX", "offsetY", "pageX", "pageY", "screenX", "screenY", "toElement"],
            filter: function(e, t) {
                var a = t.button,
                    i = t.fromElement,
                    n, s, o;
                return null == e.pageX && null != t.clientX && (s = e.target.ownerDocument || ne, o = s.documentElement, n = s.body, e.pageX = t.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !e.relatedTarget && i && (e.relatedTarget = i === e.target ? t.toElement : i), e.which || void 0 === a || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== w() && this.focus) try {
                        return this.focus(), !1
                    } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === w() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (he.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                },
                _default: function(e) {
                    return he.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(t, a, i) {
            var n = he.extend(new he.Event, i, {
                type: t,
                isSimulated: !0
            });
            he.event.trigger(n, null, a), n.isDefaultPrevented() && i.preventDefault()
        }
    }, he.removeEvent = ne.removeEventListener ? function(e, t, a) {
        e.removeEventListener && e.removeEventListener(t, a)
    } : function(e, t, a) {
        var i = "on" + t;
        e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null), e.detachEvent(i, a))
    }, he.Event = function(e, t) {
        return this instanceof he.Event ? void(e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? b : x) : this.type = e, t && he.extend(this, t), this.timeStamp = e && e.timeStamp || he.now(), this[he.expando] = !0) : new he.Event(e, t)
    }, he.Event.prototype = {
        constructor: he.Event,
        isDefaultPrevented: x,
        isPropagationStopped: x,
        isImmediatePropagationStopped: x,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = b, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = b, !t || this.isSimulated || (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = b, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, he.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        he.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var a = this,
                    i = e.relatedTarget,
                    n = e.handleObj,
                    s;
                return i && (i === a || he.contains(a, i)) || (e.type = n.origType, s = n.handler.apply(this, arguments), e.type = t), s
            }
        }
    }), ue.submit || (he.event.special.submit = {
        setup: function() {
            return !he.nodeName(this, "form") && void he.event.add(this, "click._submit keypress._submit", function(t) {
                var e = t.target,
                    a = he.nodeName(e, "input") || he.nodeName(e, "button") ? he.prop(e, "form") : void 0;
                a && !he._data(a, "submit") && (he.event.add(a, "submit._submit", function(e) {
                    e._submitBubble = !0
                }), he._data(a, "submit", !0))
            })
        },
        postDispatch: function(e) {
            e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && he.event.simulate("submit", this.parentNode, e))
        },
        teardown: function() {
            return !he.nodeName(this, "form") && void he.event.remove(this, "._submit")
        }
    }), ue.change || (he.event.special.change = {
        setup: function() {
            return Xe.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (he.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
            }), he.event.add(this, "click._change", function(e) {
                this._justChanged && !e.isTrigger && (this._justChanged = !1), he.event.simulate("change", this, e)
            })), !1) : void he.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                Xe.test(e.nodeName) && !he._data(e, "change") && (he.event.add(e, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || he.event.simulate("change", this.parentNode, e)
                }), he._data(e, "change", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return he.event.remove(this, "._change"), !Xe.test(this.nodeName)
        }
    }), ue.focusin || he.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var a = function(e) {
            he.event.simulate(t, e.target, he.event.fix(e))
        };
        he.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    n = he._data(i, t);
                n || i.addEventListener(e, a, !0), he._data(i, t, (n || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    n = he._data(i, t) - 1;
                n ? he._data(i, t, n) : (i.removeEventListener(e, a, !0), he._removeData(i, t))
            }
        }
    }), he.fn.extend({
        on: function(e, t, a, i) {
            return C(this, e, t, a, i)
        },
        one: function(e, t, a, i) {
            return C(this, e, t, a, i, 1)
        },
        off: function(e, t, a) {
            var i, n;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, he(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (n in e) this.off(n, t, e[n]);
                return this
            }
            return (!1 === t || "function" == typeof t) && (a = t, t = void 0), !1 === a && (a = x), this.each(function() {
                he.event.remove(this, e, a, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                he.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var a = this[0];
            if (a) return he.event.trigger(e, t, a, !0)
        }
    });
    var Ze = / jQuery\d+="(?:null|\d+)"/g,
        et = /<(?:abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video)[\s\/>]/i,
        tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        at = /<script|<style|<link/i,
        it = /checked\s*(?:[^=]|=\s*.checked.)/i,
        nt = /^true\/(.*)/,
        st = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ot = h(ne),
        rt = ot.appendChild(ne.createElement("div"));
    he.extend({
        htmlPrefilter: function(e) {
            return e.replace(tt, "<$1></$2>")
        },
        clone: function(e, t, a) {
            var n = he.contains(e.ownerDocument, e),
                s, o, r, l, i;
            if (ue.html5Clone || he.isXMLDoc(e) || !et.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (rt.innerHTML = e.outerHTML, rt.removeChild(r = rt.firstChild)), (!ue.noCloneEvent || !ue.noCloneChecked) && (1 === e.nodeType || 11 === e.nodeType) && !he.isXMLDoc(e))
                for (s = g(r), i = g(e), l = 0; null != (o = i[l]); ++l) s[l] && D(o, s[l]);
            if (t)
                if (a)
                    for (i = i || g(e), s = s || g(r), l = 0; null != (o = i[l]); l++) $(o, s[l]);
                else $(e, r);
            return s = g(r, "script"), 0 < s.length && f(s, !n && g(e, "script")), s = i = o = null, r
        },
        cleanData: function(e, t) {
            for (var a = 0, i = he.expando, n = he.cache, s = ue.attributes, o = he.event.special, r, l, d, p; null != (r = e[a]); a++)
                if ((t || _e(r)) && (d = r[i], p = d && n[d], p)) {
                    if (p.events)
                        for (l in p.events) o[l] ? he.event.remove(r, l) : he.removeEvent(r, l, p.handle);
                    n[d] && (delete n[d], s || "undefined" == typeof r.removeAttribute ? r[i] = void 0 : r.removeAttribute(i), ie.push(d))
                }
        }
    }), he.fn.extend({
        domManip: E,
        detach: function(e) {
            return P(this, e, !0)
        },
        remove: function(e) {
            return P(this, e)
        },
        text: function(e) {
            return je(this, function(e) {
                return void 0 === e ? he.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ne).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return E(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = S(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return E(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = S(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return E(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return E(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e = 0, t; null != (t = this[e]); e++) {
                for (1 === t.nodeType && he.cleanData(g(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && he.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return he.clone(this, e, t)
            })
        },
        html: function(e) {
            return je(this, function(e) {
                var t = this[0] || {},
                    a = 0,
                    i = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Ze, "") : void 0;
                if ("string" == typeof e && !at.test(e) && (ue.htmlSerialize || !et.test(e)) && (ue.leadingWhitespace || !Re.test(e)) && !Ve[(Fe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = he.htmlPrefilter(e);
                    try {
                        for (; a < i; a++) t = this[a] || {}, 1 === t.nodeType && (he.cleanData(g(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (t) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return E(this, arguments, function(t) {
                var a = this.parentNode;
                0 > he.inArray(this, e) && (he.cleanData(g(this)), a && a.replaceChild(t, this))
            }, e)
        }
    }), he.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        he.fn[e] = function(e) {
            for (var a = 0, i = [], n = he(e), s = n.length - 1, o; a <= s; a++) o = a == s ? this : this.clone(!0), he(n[a])[t](o), re.apply(i, o.get());
            return this.pushStack(i)
        }
    });
    var lt = {
            HTML: "block",
            BODY: "block"
        },
        dt = /^margin/,
        pt = new RegExp("^(" + Le + ")(?!px)[a-z%]+$", "i"),
        ct = function(e, t, a, i) {
            var n = {},
                s, o;
            for (o in t) n[o] = e.style[o], e.style[o] = t[o];
            for (o in s = a.apply(e, i || []), t) e.style[o] = n[o];
            return s
        },
        ut = ne.documentElement,
        mt;
    (function() {
        function t() {
            var t = ne.documentElement,
                p, c;
            t.appendChild(a), i.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = o = d = !1, s = l = !0, e.getComputedStyle && (c = e.getComputedStyle(i), n = "1%" !== (c || {}).top, d = "2px" === (c || {}).marginLeft, o = "4px" === (c || {
                width: "4px"
            }).width, i.style.marginRight = "50%", s = "4px" === (c || {
                marginRight: "4px"
            }).marginRight, p = i.appendChild(ne.createElement("div")), p.style.cssText = i.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", p.style.marginRight = p.style.width = "0", i.style.width = "1px", l = !parseFloat((e.getComputedStyle(p) || {}).marginRight), i.removeChild(p)), i.style.display = "none", r = 0 === i.getClientRects().length, r && (i.style.display = "", i.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i.childNodes[0].style.borderCollapse = "separate", p = i.getElementsByTagName("td"), p[0].style.cssText = "margin:0;border:0;padding:0;display:none", r = 0 === p[0].offsetHeight, r && (p[0].style.display = "", p[1].style.display = "none", r = 0 === p[0].offsetHeight)), t.removeChild(a)
        }
        var a = ne.createElement("div"),
            i = ne.createElement("div"),
            n, s, o, r, l, d;
        i.style && (i.style.cssText = "float:left;opacity:.5", ue.opacity = "0.5" === i.style.opacity, ue.cssFloat = !!i.style.cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", ue.clearCloneStyle = "content-box" === i.style.backgroundClip, a = ne.createElement("div"), a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", i.innerHTML = "", a.appendChild(i), ue.boxSizing = "" === i.style.boxSizing || "" === i.style.MozBoxSizing || "" === i.style.WebkitBoxSizing, he.extend(ue, {
            reliableHiddenOffsets: function() {
                return null == n && t(), r
            },
            boxSizingReliable: function() {
                return null == n && t(), o
            },
            pixelMarginRight: function() {
                return null == n && t(), s
            },
            pixelPosition: function() {
                return null == n && t(), n
            },
            reliableMarginRight: function() {
                return null == n && t(), l
            },
            reliableMarginLeft: function() {
                return null == n && t(), d
            }
        }))
    })();
    var ht = /^(top|right|bottom|left)$/,
        gt, ft;
    e.getComputedStyle ? (gt = function(t) {
        var a = t.ownerDocument.defaultView;
        return a && a.opener || (a = e), a.getComputedStyle(t)
    }, ft = function(e, t, a) {
        var i = e.style,
            n, s, o, r;
        return a = a || gt(e), r = a ? a.getPropertyValue(t) || a[t] : void 0, "" !== r && void 0 !== r || he.contains(e.ownerDocument, e) || (r = he.style(e, t)), a && !ue.pixelMarginRight() && pt.test(r) && dt.test(t) && (n = i.width, s = i.minWidth, o = i.maxWidth, i.minWidth = i.maxWidth = i.width = r, r = a.width, i.width = n, i.minWidth = s, i.maxWidth = o), void 0 === r ? r : r + ""
    }) : ut.currentStyle && (gt = function(e) {
        return e.currentStyle
    }, ft = function(e, t, a) {
        var i = e.style,
            n, s, o, r;
        return a = a || gt(e), r = a ? a[t] : void 0, null == r && i && i[t] && (r = i[t]), pt.test(r) && !ht.test(t) && (n = i.left, s = e.runtimeStyle, o = s && s.left, o && (s.left = e.currentStyle.left), i.left = "fontSize" === t ? "1em" : r, r = i.pixelLeft + "px", i.left = n, o && (s.left = o)), void 0 === r ? r : r + "" || "auto"
    });
    var yt = /alpha\([^)]*\)/i,
        vt = /opacity\s*=\s*([^)]*)/i,
        bt = /^(none|table(?!-c[ea]).+)/,
        xt = new RegExp("^(" + Le + ")(.*)$", "i"),
        wt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ct = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        St = ["Webkit", "O", "Moz", "ms"],
        Tt = ne.createElement("div").style;
    he.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var a = ft(e, "opacity");
                        return "" === a ? "1" : a
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: ue.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, a, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var n = he.camelCase(t),
                    s = e.style,
                    o, r, l;
                if (t = he.cssProps[n] || (he.cssProps[n] = _(n) || n), l = he.cssHooks[t] || he.cssHooks[n], void 0 !== a) {
                    if (r = typeof a, "string" === r && (o = Oe.exec(a)) && o[1] && (a = m(e, t, o), r = "number"), null == a || a !== a) return;
                    if ("number" === r && (a += o && o[3] || (he.cssNumber[n] ? "" : "px")), ue.clearCloneStyle || "" !== a || 0 !== t.indexOf("background") || (s[t] = "inherit"), !l || !("set" in l) || void 0 !== (a = l.set(e, a, i))) try {
                        s[t] = a
                    } catch (t) {}
                } else return l && "get" in l && void 0 !== (o = l.get(e, !1, i)) ? o : s[t]
            }
        },
        css: function(e, t, a, i) {
            var n = he.camelCase(t),
                s, o, r;
            return t = he.cssProps[n] || (he.cssProps[n] = _(n) || n), r = he.cssHooks[t] || he.cssHooks[n], r && "get" in r && (o = r.get(e, !0, a)), void 0 === o && (o = ft(e, t, i)), "normal" === o && t in Ct && (o = Ct[t]), "" === a || a ? (s = parseFloat(o), !0 === a || isFinite(s) ? s || 0 : o) : o
        }
    }), he.each(["height", "width"], function(e, t) {
        he.cssHooks[t] = {
            get: function(e, a, i) {
                if (a) return bt.test(he.css(e, "display")) && 0 === e.offsetWidth ? ct(e, wt, function() {
                    return N(e, t, i)
                }) : N(e, t, i)
            },
            set: function(e, a, i) {
                var n = i && gt(e);
                return L(e, a, i ? O(e, t, i, ue.boxSizing && "border-box" === he.css(e, "boxSizing", !1, n), n) : 0)
            }
        }
    }), ue.opacity || (he.cssHooks.opacity = {
        get: function(e, t) {
            return vt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var a = e.style,
                i = e.currentStyle,
                n = he.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                s = i && i.filter || a.filter || "";
            a.zoom = 1, (1 <= t || "" === t) && "" === he.trim(s.replace(yt, "")) && a.removeAttribute && (a.removeAttribute("filter"), "" === t || i && !i.filter) || (a.filter = yt.test(s) ? s.replace(yt, n) : s + " " + n)
        }
    }), he.cssHooks.marginRight = A(ue.reliableMarginRight, function(e, t) {
        if (t) return ct(e, {
            display: "inline-block"
        }, ft, [e, "marginRight"])
    }), he.cssHooks.marginLeft = A(ue.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(ft(e, "marginLeft")) || (he.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - ct(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        }) : 0)) + "px"
    }), he.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        he.cssHooks[e + t] = {
            expand: function(a) {
                for (var n = 0, i = {}, s = "string" == typeof a ? a.split(" ") : [a]; 4 > n; n++) i[e + Ne[n] + t] = s[n] || s[n - 2] || s[0];
                return i
            }
        }, dt.test(e) || (he.cssHooks[e + t].set = L)
    }), he.fn.extend({
        css: function(e, t) {
            return je(this, function(e, t, a) {
                var n = {},
                    s = 0,
                    i, o;
                if (he.isArray(t)) {
                    for (i = gt(e), o = t.length; s < o; s++) n[t[s]] = he.css(e, t[s], !1, i);
                    return n
                }
                return void 0 === a ? he.css(e, t) : he.style(e, t, a)
            }, e, t, 1 < arguments.length)
        },
        show: function() {
            return M(this, !0)
        },
        hide: function() {
            return M(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                He(this) ? he(this).show() : he(this).hide()
            })
        }
    }), he.Tween = H, H.prototype = {
        constructor: H,
        init: function(e, t, a, i, n, s) {
            this.elem = e, this.prop = a, this.easing = n || he.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = s || (he.cssNumber[a] ? "" : "px")
        },
        cur: function() {
            var e = H.propHooks[this.prop];
            return e && e.get ? e.get(this) : H.propHooks._default.get(this)
        },
        run: function(e) {
            var t = H.propHooks[this.prop],
                a;
            return this.pos = this.options.duration ? a = he.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : a = e, this.now = (this.end - this.start) * a + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), t && t.set ? t.set(this) : H.propHooks._default.set(this), this
        }
    }, H.prototype.init.prototype = H.prototype, H.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = he.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                he.fx.step[e.prop] ? he.fx.step[e.prop](e) : 1 === e.elem.nodeType && (null != e.elem.style[he.cssProps[e.prop]] || he.cssHooks[e.prop]) ? he.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, he.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return 0.5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, he.fx = H.prototype.init, he.fx.step = {};
    var kt = /^(?:toggle|show|hide)$/,
        $t = /queueHooks$/,
        Dt, Et;
    he.Animation = he.extend(R, {
            tweeners: {
                "*": [function(e, t) {
                    var a = this.createTween(e, t);
                    return m(a.elem, e, Oe.exec(t), a), a
                }]
            },
            tweener: function(e, t) {
                he.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(ze);
                for (var a = 0, i = e.length, n; a < i; a++) n = e[a], R.tweeners[n] = R.tweeners[n] || [], R.tweeners[n].unshift(t)
            },
            prefilters: [function(e, t, a) {
                var i = this,
                    n = {},
                    s = e.style,
                    o = e.nodeType && He(e),
                    r = he._data(e, "fxshow"),
                    l, d, p, c, u, m, h, g;
                for (l in a.queue || (u = he._queueHooks(e, "fx"), null == u.unqueued && (u.unqueued = 0, m = u.empty.fire, u.empty.fire = function() {
                        u.unqueued || m()
                    }), u.unqueued++, i.always(function() {
                        i.always(function() {
                            u.unqueued--, he.queue(e, "fx").length || u.empty.fire()
                        })
                    })), 1 === e.nodeType && ("height" in t || "width" in t) && (a.overflow = [s.overflow, s.overflowX, s.overflowY], h = he.css(e, "display"), g = "none" === h ? he._data(e, "olddisplay") || I(e.nodeName) : h, "inline" === g && "none" === he.css(e, "float") && (ue.inlineBlockNeedsLayout && "inline" !== I(e.nodeName) ? s.zoom = 1 : s.display = "inline-block")), a.overflow && (s.overflow = "hidden", !ue.shrinkWrapBlocks() && i.always(function() {
                        s.overflow = a.overflow[0], s.overflowX = a.overflow[1], s.overflowY = a.overflow[2]
                    })), t)
                    if (d = t[l], kt.exec(d)) {
                        if (delete t[l], p = p || "toggle" === d, d === (o ? "hide" : "show"))
                            if ("show" === d && r && void 0 !== r[l]) o = !0;
                            else continue;
                        n[l] = r && r[l] || he.style(e, l)
                    } else h = void 0;
                if (!he.isEmptyObject(n))
                    for (l in r ? "hidden" in r && (o = r.hidden) : r = he._data(e, "fxshow", {}), p && (r.hidden = !o), o ? he(e).show() : i.done(function() {
                            he(e).hide()
                        }), i.done(function() {
                            for (var t in he._removeData(e, "fxshow"), n) he.style(e, t, n[t])
                        }), n) c = F(o ? r[l] : 0, l, i), l in r || (r[l] = c.start, o && (c.end = c.start, c.start = "width" === l || "height" === l ? 1 : 0));
                else "inline" === ("none" === h ? I(e.nodeName) : h) && (s.display = h)
            }],
            prefilter: function(e, t) {
                t ? R.prefilters.unshift(e) : R.prefilters.push(e)
            }
        }), he.speed = function(e, t, a) {
            var i = e && "object" == typeof e ? he.extend({}, e) : {
                complete: a || !a && t || he.isFunction(e) && e,
                duration: e,
                easing: a && t || t && !he.isFunction(t) && t
            };
            return i.duration = he.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in he.fx.speeds ? he.fx.speeds[i.duration] : he.fx.speeds._default, (null == i.queue || !0 === i.queue) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                he.isFunction(i.old) && i.old.call(this), i.queue && he.dequeue(this, i.queue)
            }, i
        }, he.fn.extend({
            fadeTo: function(e, t, a, i) {
                return this.filter(He).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, a, i)
            },
            animate: function(e, t, a, i) {
                var n = he.isEmptyObject(e),
                    s = he.speed(t, a, i),
                    o = function() {
                        var t = R(this, he.extend({}, e), s);
                        (n || he._data(this, "finish")) && t.stop(!0)
                    };
                return o.finish = o, n || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
            },
            stop: function(e, t, a) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(a)
                };
                return "string" != typeof e && (a = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        n = null != e && e + "queueHooks",
                        s = he.timers,
                        o = he._data(this);
                    if (n) o[n] && o[n].stop && i(o[n]);
                    else
                        for (n in o) o[n] && o[n].stop && $t.test(n) && i(o[n]);
                    for (n = s.length; n--;) s[n].elem === this && (null == e || s[n].queue === e) && (s[n].anim.stop(a), t = !1, s.splice(n, 1));
                    (t || !a) && he.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var t = he._data(this),
                        a = t[e + "queue"],
                        i = t[e + "queueHooks"],
                        n = he.timers,
                        s = a ? a.length : 0,
                        o;
                    for (t.finish = !0, he.queue(this, e, []), i && i.stop && i.stop.call(this, !0), o = n.length; o--;) n[o].elem === this && n[o].queue === e && (n[o].anim.stop(!0), n.splice(o, 1));
                    for (o = 0; o < s; o++) a[o] && a[o].finish && a[o].finish.call(this);
                    delete t.finish
                })
            }
        }), he.each(["toggle", "show", "hide"], function(e, t) {
            var a = he.fn[t];
            he.fn[t] = function(e, i, n) {
                return null == e || "boolean" == typeof e ? a.apply(this, arguments) : this.animate(B(t, !0), e, i, n)
            }
        }), he.each({
            slideDown: B("show"),
            slideUp: B("hide"),
            slideToggle: B("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            he.fn[e] = function(e, a, i) {
                return this.animate(t, e, a, i)
            }
        }), he.timers = [], he.fx.tick = function() {
            var e = he.timers,
                t = 0,
                a;
            for (Dt = he.now(); t < e.length; t++) a = e[t], a() || e[t] !== a || e.splice(t--, 1);
            e.length || he.fx.stop(), Dt = void 0
        }, he.fx.timer = function(e) {
            he.timers.push(e), e() ? he.fx.start() : he.timers.pop()
        }, he.fx.interval = 13, he.fx.start = function() {
            Et || (Et = e.setInterval(he.fx.tick, he.fx.interval))
        }, he.fx.stop = function() {
            e.clearInterval(Et), Et = null
        }, he.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, he.fn.delay = function(t, a) {
            return t = he.fx ? he.fx.speeds[t] || t : t, a = a || "fx", this.queue(a, function(a, i) {
                var n = e.setTimeout(a, t);
                i.stop = function() {
                    e.clearTimeout(n)
                }
            })
        },
        function() {
            var e = ne.createElement("input"),
                t = ne.createElement("div"),
                i = ne.createElement("select"),
                n = i.appendChild(ne.createElement("option")),
                s;
            t = ne.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", s = t.getElementsByTagName("a")[0], e.setAttribute("type", "checkbox"), t.appendChild(e), s = t.getElementsByTagName("a")[0], s.style.cssText = "top:1px", ue.getSetAttribute = "t" !== t.className, ue.style = /top/.test(s.getAttribute("style")), ue.hrefNormalized = "/a" === s.getAttribute("href"), ue.checkOn = !!e.value, ue.optSelected = n.selected, ue.enctype = !!ne.createElement("form").enctype, i.disabled = !0, ue.optDisabled = !n.disabled, e = ne.createElement("input"), e.setAttribute("value", ""), ue.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ue.radioValue = "t" === e.value
        }();
    var Pt = /\r/g,
        zt = /[\x20\t\r\n\f]+/g;
    he.fn.extend({
        val: function(e) {
            var t = this[0],
                a, i, n;
            return arguments.length ? (n = he.isFunction(e), this.each(function(t) {
                var i;
                1 !== this.nodeType || (i = n ? e.call(this, t, he(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : he.isArray(i) && (i = he.map(i, function(e) {
                    return null == e ? "" : e + ""
                })), a = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()], (!a || !("set" in a) || void 0 === a.set(this, i, "value")) && (this.value = i))
            })) : t ? (a = he.valHooks[t.type] || he.valHooks[t.nodeName.toLowerCase()], a && "get" in a && void 0 !== (i = a.get(t, "value"))) ? i : (i = t.value, "string" == typeof i ? i.replace(Pt, "") : null == i ? "" : i) : void 0
        }
    }), he.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = he.find.attr(e, "value");
                    return null == t ? he.trim(he.text(e)).replace(zt, " ") : t
                }
            },
            select: {
                get: function(e) {
                    for (var t = e.options, a = e.selectedIndex, n = "select-one" === e.type || 0 > a, s = n ? null : [], o = n ? a + 1 : t.length, r = 0 > a ? o : n ? a : 0, i, l; r < o; r++)
                        if (l = t[r], (l.selected || r === a) && (ue.optDisabled ? !l.disabled : null === l.getAttribute("disabled")) && (!l.parentNode.disabled || !he.nodeName(l.parentNode, "optgroup"))) {
                            if (i = he(l).val(), n) return i;
                            s.push(i)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var a = e.options, n = he.makeArray(t), s = a.length, i, o; s--;)
                        if (o = a[s], -1 < he.inArray(he.valHooks.option.get(o), n)) try {
                            o.selected = i = !0
                        } catch (e) {
                            o.scrollHeight
                        } else o.selected = !1;
                    return i || (e.selectedIndex = -1), a
                }
            }
        }
    }), he.each(["radio", "checkbox"], function() {
        he.valHooks[this] = {
            set: function(e, t) {
                if (he.isArray(t)) return e.checked = -1 < he.inArray(he(e).val(), t)
            }
        }, ue.checkOn || (he.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var It = he.expr.attrHandle,
        At = /^(?:checked|selected)$/i,
        _t = ue.getSetAttribute,
        Mt = ue.input,
        Lt, Ot;
    he.fn.extend({
        attr: function(e, t) {
            return je(this, he.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                he.removeAttr(this, e)
            })
        }
    }), he.extend({
        attr: function(e, t, a) {
            var i = e.nodeType,
                n, s;
            if (3 !== i && 8 !== i && 2 !== i) return "undefined" == typeof e.getAttribute ? he.prop(e, t, a) : (1 === i && he.isXMLDoc(e) || (t = t.toLowerCase(), s = he.attrHooks[t] || (he.expr.match.bool.test(t) ? Ot : Lt)), void 0 !== a) ? null === a ? void he.removeAttr(e, t) : s && "set" in s && void 0 !== (n = s.set(e, a, t)) ? n : (e.setAttribute(t, a + ""), a) : s && "get" in s && null !== (n = s.get(e, t)) ? n : (n = he.find.attr(e, t), null == n ? void 0 : n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ue.radioValue && "radio" === t && he.nodeName(e, "input")) {
                        var a = e.value;
                        return e.setAttribute("type", t), a && (e.value = a), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var a = 0,
                i = t && t.match(ze),
                n, s;
            if (i && 1 === e.nodeType)
                for (; n = i[a++];) s = he.propFix[n] || n, he.expr.match.bool.test(n) ? Mt && _t || !At.test(n) ? e[s] = !1 : e[he.camelCase("default-" + n)] = e[s] = !1 : he.attr(e, n, ""), e.removeAttribute(_t ? n : s)
        }
    }), Ot = {
        set: function(e, t, a) {
            return !1 === t ? he.removeAttr(e, a) : Mt && _t || !At.test(a) ? e.setAttribute(!_t && he.propFix[a] || a, a) : e[he.camelCase("default-" + a)] = e[a] = !0, a
        }
    }, he.each(he.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = It[t] || he.find.attr;
        It[t] = Mt && _t || !At.test(t) ? function(e, t, i) {
            var n, s;
            return i || (s = It[t], It[t] = n, n = null == a(e, t, i) ? null : t.toLowerCase(), It[t] = s), n
        } : function(e, t, a) {
            if (!a) return e[he.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Mt && _t || (he.attrHooks.value = {
        set: function(e, t, a) {
            return he.nodeName(e, "input") ? void(e.defaultValue = t) : Lt && Lt.set(e, t, a)
        }
    }), _t || (Lt = {
        set: function(e, t, a) {
            var i = e.getAttributeNode(a);
            if (i || e.setAttributeNode(i = e.ownerDocument.createAttribute(a)), i.value = t += "", "value" === a || t === e.getAttribute(a)) return t
        }
    }, It.id = It.name = It.coords = function(e, t, a) {
        var i;
        if (!a) return (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
    }, he.valHooks.button = {
        get: function(e, t) {
            var a = e.getAttributeNode(t);
            if (a && a.specified) return a.value
        },
        set: Lt.set
    }, he.attrHooks.contenteditable = {
        set: function(e, t, a) {
            Lt.set(e, "" !== t && t, a)
        }
    }, he.each(["width", "height"], function(e, t) {
        he.attrHooks[t] = {
            set: function(e, a) {
                if ("" === a) return e.setAttribute(t, "auto"), a
            }
        }
    })), ue.style || (he.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Nt = /^(?:input|select|textarea|button|object)$/i,
        Ht = /^(?:a|area)$/i;
    he.fn.extend({
        prop: function(e, t) {
            return je(this, he.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return e = he.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {}
            })
        }
    }), he.extend({
        prop: function(e, t, a) {
            var i = e.nodeType,
                n, s;
            if (3 !== i && 8 !== i && 2 !== i) return 1 === i && he.isXMLDoc(e) || (t = he.propFix[t] || t, s = he.propHooks[t]), void 0 === a ? s && "get" in s && null !== (n = s.get(e, t)) ? n : e[t] : s && "set" in s && void 0 !== (n = s.set(e, a, t)) ? n : e[t] = a
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = he.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Nt.test(e.nodeName) || Ht.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), ue.hrefNormalized || he.each(["href", "src"], function(e, t) {
        he.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), ue.optSelected || (he.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), he.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        he.propFix[this.toLowerCase()] = this
    }), ue.enctype || (he.propFix.enctype = "encoding");
    var jt = /[\t\r\n\f]/g;
    he.fn.extend({
        addClass: function(e) {
            var t = 0,
                a, i, n, s, o, r, l;
            if (he.isFunction(e)) return this.each(function(t) {
                he(this).addClass(e.call(this, t, q(this)))
            });
            if ("string" == typeof e && e)
                for (a = e.match(ze) || []; i = this[t++];)
                    if (s = q(i), n = 1 === i.nodeType && (" " + s + " ").replace(jt, " "), n) {
                        for (r = 0; o = a[r++];) 0 > n.indexOf(" " + o + " ") && (n += o + " ");
                        l = he.trim(n), s !== l && he.attr(i, "class", l)
                    }
            return this
        },
        removeClass: function(e) {
            var t = 0,
                a, i, n, s, o, r, l;
            if (he.isFunction(e)) return this.each(function(t) {
                he(this).removeClass(e.call(this, t, q(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (a = e.match(ze) || []; i = this[t++];)
                    if (s = q(i), n = 1 === i.nodeType && (" " + s + " ").replace(jt, " "), n) {
                        for (r = 0; o = a[r++];)
                            for (; - 1 < n.indexOf(" " + o + " ");) n = n.replace(" " + o + " ", " ");
                        l = he.trim(n), s !== l && he.attr(i, "class", l)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var a = typeof e;
            return "boolean" == typeof t && "string" == a ? t ? this.addClass(e) : this.removeClass(e) : he.isFunction(e) ? this.each(function(a) {
                he(this).toggleClass(e.call(this, a, q(this), t), t)
            }) : this.each(function() {
                var t, n, i, s;
                if ("string" == a)
                    for (n = 0, i = he(this), s = e.match(ze) || []; t = s[n++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else(void 0 === e || "boolean" == a) && (t = q(this), t && he._data(this, "__className__", t), he.attr(this, "class", t || !1 === e ? "" : he._data(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t = 0,
                a, i;
            for (a = " " + e + " "; i = this[t++];)
                if (1 === i.nodeType && -1 < (" " + q(i) + " ").replace(jt, " ").indexOf(a)) return !0;
            return !1
        }
    }), he.each(["blur", "focus", "focusin", "focusout", "load", "resize", "scroll", "unload", "click", "dblclick", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "mouseenter", "mouseleave", "change", "select", "submit", "keydown", "keypress", "keyup", "error", "contextmenu"], function(e, t) {
        he.fn[t] = function(e, a) {
            return 0 < arguments.length ? this.on(t, null, e, a) : this.trigger(t)
        }
    }), he.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var Bt = e.location,
        Ft = he.now(),
        Wt = /\?/,
        Rt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    he.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var a = null,
            i = he.trim(t + ""),
            n;
        return i && !he.trim(i.replace(Rt, function(e, t, i, s) {
            return (n && t && (a = 0), 0 === a) ? e : (n = i || t, a += !s - !i, "")
        })) ? Function("return " + i)() : he.error("Invalid JSON: " + t)
    }, he.parseXML = function(t) {
        var a, i;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (i = new e.DOMParser, a = i.parseFromString(t, "text/xml")) : (a = new e.ActiveXObject("Microsoft.XMLDOM"), a.async = "false", a.loadXML(t))
        } catch (t) {
            a = void 0
        }
        return a && a.documentElement && !a.getElementsByTagName("parsererror").length || he.error("Invalid XML: " + t), a
    };
    var qt = /#.*$/,
        Vt = /([?&])_=[^&]*/,
        Yt = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        Ut = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Xt = /^(?:GET|HEAD)$/,
        Gt = /^\/\//,
        Kt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Jt = {},
        Qt = {},
        Zt = "*/".concat("*"),
        ea = Bt.href,
        ta = Kt.exec(ea.toLowerCase()) || [];
    he.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ea,
            type: "GET",
            isLocal: Ut.test(ta[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Zt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": he.parseJSON,
                "text xml": he.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? U(U(e, he.ajaxSettings), t) : U(he.ajaxSettings, e)
        },
        ajaxPrefilter: V(Jt),
        ajaxTransport: V(Qt),
        ajax: function(t, a) {
            function n(t, a, n, c) {
                var u = a,
                    h, f, y, C, S;
                2 == m || (m = 2, b && e.clearTimeout(b), w = void 0, v = c || "", g.readyState = 0 < t ? 4 : 0, h = 200 <= t && 300 > t || 304 === t, n && (C = X(o, g, n)), C = G(o, C, g, h), h ? (o.ifModified && (S = g.getResponseHeader("Last-Modified"), S && (he.lastModified[i] = S), S = g.getResponseHeader("etag"), S && (he.etag[i] = S)), 204 === t || "HEAD" === o.type ? u = "nocontent" : 304 === t ? u = "notmodified" : (u = C.state, f = C.data, y = C.error, h = !y)) : (y = u, (t || !u) && (u = "error", 0 > t && (t = 0))), g.status = t, g.statusText = (a || u) + "", h ? l.resolveWith(s, [f, u, g]) : l.rejectWith(s, [g, u, y]), g.statusCode(p), p = void 0, x && r.trigger(h ? "ajaxSuccess" : "ajaxError", [g, o, h ? f : y]), d.fireWith(s, [g, u]), x && (r.trigger("ajaxComplete", [g, o]), !--he.active && he.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (a = t, t = void 0), a = a || {};
            var o = he.ajaxSetup({}, a),
                s = o.context || o,
                r = o.context && (s.nodeType || s.jquery) ? he(s) : he.event,
                l = he.Deferred(),
                d = he.Callbacks("once memory"),
                p = o.statusCode || {},
                c = {},
                u = {},
                m = 0,
                h = "canceled",
                g = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 == m) {
                            if (!C)
                                for (C = {}; t = Yt.exec(v);) C[t[1].toLowerCase()] = t[2];
                            t = C[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 == m ? v : null
                    },
                    setRequestHeader: function(e, t) {
                        var a = e.toLowerCase();
                        return m || (e = u[a] = u[a] || e, c[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return m || (o.mimeType = e), this
                    },
                    statusCode: function(e) {
                        if (e)
                            if (2 > m)
                                for (var t in e) p[t] = [p[t], e[t]];
                            else g.always(e[g.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || h;
                        return w && w.abort(t), n(0, t), this
                    }
                },
                f, y, i, v, b, x, w, C;
            if (l.promise(g).complete = d.add, g.success = g.done, g.error = g.fail, o.url = ((t || o.url || ea) + "").replace(qt, "").replace(Gt, ta[1] + "//"), o.type = a.method || a.type || o.method || o.type, o.dataTypes = he.trim(o.dataType || "*").toLowerCase().match(ze) || [""], null == o.crossDomain && (f = Kt.exec(o.url.toLowerCase()), o.crossDomain = !!(f && (f[1] !== ta[1] || f[2] !== ta[2] || (f[3] || ("http:" === f[1] ? "80" : "443")) !== (ta[3] || ("http:" === ta[1] ? "80" : "443"))))), o.data && o.processData && "string" != typeof o.data && (o.data = he.param(o.data, o.traditional)), Y(Jt, o, a, g), 2 == m) return g;
            for (y in x = he.event && o.global, x && 0 == he.active++ && he.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Xt.test(o.type), i = o.url, o.hasContent || (o.data && (i = o.url += (Wt.test(i) ? "&" : "?") + o.data, delete o.data), !1 === o.cache && (o.url = Vt.test(i) ? i.replace(Vt, "$1_=" + Ft++) : i + (Wt.test(i) ? "&" : "?") + "_=" + Ft++)), o.ifModified && (he.lastModified[i] && g.setRequestHeader("If-Modified-Since", he.lastModified[i]), he.etag[i] && g.setRequestHeader("If-None-Match", he.etag[i])), (o.data && o.hasContent && !1 !== o.contentType || a.contentType) && g.setRequestHeader("Content-Type", o.contentType), g.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" === o.dataTypes[0] ? "" : ", " + Zt + "; q=0.01") : o.accepts["*"]), o.headers) g.setRequestHeader(y, o.headers[y]);
            if (o.beforeSend && (!1 === o.beforeSend.call(s, g, o) || 2 == m)) return g.abort();
            for (y in h = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) g[y](o[y]);
            if (w = Y(Qt, o, a, g), !w) n(-1, "No Transport");
            else {
                if (g.readyState = 1, x && r.trigger("ajaxSend", [g, o]), 2 == m) return g;
                o.async && 0 < o.timeout && (b = e.setTimeout(function() {
                    g.abort("timeout")
                }, o.timeout));
                try {
                    m = 1, w.send(c, n)
                } catch (t) {
                    if (2 > m) n(-1, t);
                    else throw t
                }
            }
            return g
        },
        getJSON: function(e, t, a) {
            return he.get(e, t, a, "json")
        },
        getScript: function(e, t) {
            return he.get(e, void 0, t, "script")
        }
    }), he.each(["get", "post"], function(e, t) {
        he[t] = function(e, a, i, n) {
            return he.isFunction(a) && (n = n || i, i = a, a = void 0), he.ajax(he.extend({
                url: e,
                type: t,
                dataType: n,
                data: a,
                success: i
            }, he.isPlainObject(e) && e))
        }
    }), he._evalUrl = function(e) {
        return he.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, he.fn.extend({
        wrapAll: function(e) {
            if (he.isFunction(e)) return this.each(function(t) {
                he(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = he(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return he.isFunction(e) ? this.each(function(t) {
                he(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = he(this),
                    a = t.contents();
                a.length ? a.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = he.isFunction(e);
            return this.each(function(a) {
                he(this).wrapAll(t ? e.call(this, a) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                he.nodeName(this, "body") || he(this).replaceWith(this.childNodes)
            }).end()
        }
    }), he.expr.filters.hidden = function(e) {
        return ue.reliableHiddenOffsets() ? 0 >= e.offsetWidth && 0 >= e.offsetHeight && !e.getClientRects().length : J(e)
    }, he.expr.filters.visible = function(e) {
        return !he.expr.filters.hidden(e)
    };
    var aa = /%20/g,
        ia = /\[\]$/,
        na = /\r?\n/g,
        sa = /^(?:submit|button|image|reset|file)$/i,
        oa = /^(?:input|select|textarea|keygen)/i;
    he.param = function(e, t) {
        var a = [],
            i = function(e, t) {
                t = he.isFunction(t) ? t() : null == t ? "" : t, a[a.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            },
            n;
        if (void 0 === t && (t = he.ajaxSettings && he.ajaxSettings.traditional), he.isArray(e) || e.jquery && !he.isPlainObject(e)) he.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) Q(n, e[n], t, i);
        return a.join("&").replace(aa, "+")
    }, he.fn.extend({
        serialize: function() {
            return he.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = he.prop(this, "elements");
                return e ? he.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !he(this).is(":disabled") && oa.test(this.nodeName) && !sa.test(e) && (this.checked || !Be.test(e))
            }).map(function(e, t) {
                var a = he(this).val();
                return null == a ? null : he.isArray(a) ? he.map(a, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(na, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: a.replace(na, "\r\n")
                }
            }).get()
        }
    }), he.ajaxSettings.xhr = void 0 === e.ActiveXObject ? Z : function() {
        return this.isLocal ? ee() : 8 < ne.documentMode ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || ee()
    };
    var ra = 0,
        la = {},
        da = he.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in la) la[e](void 0, !0)
    }), ue.cors = !!da && "withCredentials" in da, da = ue.ajax = !!da, da && he.ajaxTransport(function(t) {
        if (!t.crossDomain || ue.cors) {
            var a;
            return {
                send: function(n, s) {
                    var o = t.xhr(),
                        r = ++ra,
                        l;
                    if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (l in t.xhrFields) o[l] = t.xhrFields[l];
                    for (l in t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest"), n) void 0 !== n[l] && o.setRequestHeader(l, n[l] + "");
                    o.send(t.hasContent && t.data || null), a = function(e, i) {
                        var n, l, d;
                        if (a && (i || 4 === o.readyState))
                            if (delete la[r], a = void 0, o.onreadystatechange = he.noop, i) 4 !== o.readyState && o.abort();
                            else {
                                d = {}, n = o.status, "string" == typeof o.responseText && (d.text = o.responseText);
                                try {
                                    l = o.statusText
                                } catch (t) {
                                    l = ""
                                }
                                n || !t.isLocal || t.crossDomain ? 1223 === n && (n = 204) : n = d.text ? 200 : 404
                            }
                        d && s(n, l, d, o.getAllResponseHeaders())
                    }, t.async ? 4 === o.readyState ? e.setTimeout(a) : o.onreadystatechange = la[r] = a : a()
                },
                abort: function() {
                    a && a(void 0, !0)
                }
            }
        }
    }), he.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return he.globalEval(e), e
            }
        }
    }), he.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), he.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t = ne.head || he("head")[0] || ne.documentElement,
                a;
            return {
                send: function(i, n) {
                    a = ne.createElement("script"), a.async = !0, e.scriptCharset && (a.charset = e.scriptCharset), a.src = e.url, a.onload = a.onreadystatechange = function(e, t) {
                        (t || !a.readyState || /loaded|complete/.test(a.readyState)) && (a.onload = a.onreadystatechange = null, a.parentNode && a.parentNode.removeChild(a), a = null, !t && n(200, "success"))
                    }, t.insertBefore(a, t.firstChild)
                },
                abort: function() {
                    a && a.onload(void 0, !0)
                }
            }
        }
    });
    var pa = [],
        ca = /(=)\?(?=&|$)|\?\?/;
    he.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = pa.pop() || he.expando + "_" + Ft++;
            return this[e] = !0, e
        }
    }), he.ajaxPrefilter("json jsonp", function(t, a, i) {
        var n = !1 !== t.jsonp && (ca.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && ca.test(t.data) && "data"),
            s, o, r;
        if (n || "jsonp" === t.dataTypes[0]) return s = t.jsonpCallback = he.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, n ? t[n] = t[n].replace(ca, "$1" + s) : !1 !== t.jsonp && (t.url += (Wt.test(t.url) ? "&" : "?") + t.jsonp + "=" + s), t.converters["script json"] = function() {
            return r || he.error(s + " was not called"), r[0]
        }, t.dataTypes[0] = "json", o = e[s], e[s] = function() {
            r = arguments
        }, i.always(function() {
            void 0 === o ? he(e).removeProp(s) : e[s] = o, t[s] && (t.jsonpCallback = a.jsonpCallback, pa.push(s)), r && he.isFunction(o) && o(r[0]), r = o = void 0
        }), "script"
    }), he.parseHTML = function(e, t, a) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (a = t, t = !1), t = t || ne;
        var i = Se.exec(e),
            n = !a && [];
        return i ? [t.createElement(i[1])] : (i = v([e], t, n), n && n.length && he(n).remove(), he.merge([], i.childNodes))
    };
    var ua = he.fn.load;
    he.fn.load = function(e, t, a) {
        if ("string" != typeof e && ua) return ua.apply(this, arguments);
        var i = this,
            n = e.indexOf(" "),
            s, o, r;
        return -1 < n && (s = he.trim(e.slice(n, e.length)), e = e.slice(0, n)), he.isFunction(t) ? (a = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < i.length && he.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments, i.html(s ? he("<div>").append(he.parseHTML(e)).find(s) : e)
        }).always(a && function(e, t) {
            i.each(function() {
                a.apply(this, r || [e.responseText, t, e])
            })
        }), this
    }, he.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        he.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), he.expr.filters.animated = function(e) {
        return he.grep(he.timers, function(t) {
            return e === t.elem
        }).length
    }, he.offset = {
        setOffset: function(e, t, a) {
            var i = he.css(e, "position"),
                n = he(e),
                s = {},
                o, r, l, d, p, c, u;
            "static" === i && (e.style.position = "relative"), p = n.offset(), l = he.css(e, "top"), c = he.css(e, "left"), u = ("absolute" === i || "fixed" === i) && -1 < he.inArray("auto", [l, c]), u ? (o = n.position(), d = o.top, r = o.left) : (d = parseFloat(l) || 0, r = parseFloat(c) || 0), he.isFunction(t) && (t = t.call(e, a, he.extend({}, p))), null != t.top && (s.top = t.top - p.top + d), null != t.left && (s.left = t.left - p.left + r), "using" in t ? t.using.call(e, s) : n.css(s)
        }
    }, he.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                he.offset.setOffset(this, e, t)
            });
            var t = {
                    top: 0,
                    left: 0
                },
                a = this[0],
                i = a && a.ownerDocument,
                n, s;
            if (i) return (n = i.documentElement, !he.contains(n, a)) ? t : ("undefined" != typeof a.getBoundingClientRect && (t = a.getBoundingClientRect()), s = te(i), {
                top: t.top + (s.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                left: t.left + (s.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
            })
        },
        position: function() {
            if (this[0]) {
                var e = {
                        top: 0,
                        left: 0
                    },
                    t = this[0],
                    a, i;
                return "fixed" === he.css(t, "position") ? i = t.getBoundingClientRect() : (a = this.offsetParent(), i = this.offset(), !he.nodeName(a[0], "html") && (e = a.offset()), e.top += he.css(a[0], "borderTopWidth", !0), e.left += he.css(a[0], "borderLeftWidth", !0)), {
                    top: i.top - e.top - he.css(t, "marginTop", !0),
                    left: i.left - e.left - he.css(t, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && !he.nodeName(e, "html") && "static" === he.css(e, "position");) e = e.offsetParent;
                return e || ut
            })
        }
    }), he.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var a = /Y/.test(t);
        he.fn[e] = function(i) {
            return je(this, function(e, i, n) {
                var s = te(e);
                return void 0 === n ? s ? t in s ? s[t] : s.document.documentElement[i] : e[i] : void(s ? s.scrollTo(a ? he(s).scrollLeft() : n, a ? n : he(s).scrollTop()) : e[i] = n)
            }, e, i, arguments.length, null)
        }
    }), he.each(["top", "left"], function(e, t) {
        he.cssHooks[t] = A(ue.pixelPosition, function(e, a) {
            if (a) return a = ft(e, t), pt.test(a) ? he(e).position()[t] + "px" : a
        })
    }), he.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        he.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(a, i) {
            he.fn[i] = function(i, n) {
                var s = arguments.length && (a || "boolean" != typeof i),
                    o = a || (!0 === i || !0 === n ? "margin" : "border");
                return je(this, function(t, a, i) {
                    var n;
                    return he.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (n = t.documentElement, ae(t.body["scroll" + e], n["scroll" + e], t.body["offset" + e], n["offset" + e], n["client" + e])) : void 0 === i ? he.css(t, a, o) : he.style(t, a, i, o)
                }, t, s ? i : void 0, s, null)
            }
        })
    }), he.fn.extend({
        bind: function(e, t, a) {
            return this.on(e, null, t, a)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, a, i) {
            return this.on(t, e, a, i)
        },
        undelegate: function(e, t, a) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", a)
        }
    }), he.fn.size = function() {
        return this.length
    }, he.fn.andSelf = he.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return he
    });
    var ma = e.jQuery,
        ha = e.$;
    return he.noConflict = function(t) {
        return e.$ === he && (e.$ = ha), t && e.jQuery === he && (e.jQuery = ma), he
    }, t || (e.jQuery = e.$ = he), he
}),
function() {
    function C(s) {
        function l(n, l, r, e, d, i) {
            for (; 0 <= d && i > d; d += s) {
                var o = e ? e[d] : d;
                r = l(r, n[o], o, n)
            }
            return r
        }
        return function(t, n, e, r) {
            n = m(n, r, 4);
            var i = !O(t) && d.keys(t),
                o = (i || t).length,
                a = 0 < s ? 0 : o - 1;
            return 3 > arguments.length && (e = t[i ? i[a] : a], a += s), l(t, n, e, i, a, o)
        }
    }

    function n(e) {
        return function(a, t, n) {
            t = v(t, n);
            for (var s = w(a), o = 0 < e ? 0 : s - 1; 0 <= o && s > o; o += e)
                if (t(a[o], o, a)) return o;
            return -1
        }
    }

    function t(s, n, t) {
        return function(r, e, l) {
            var p = 0,
                o = w(r);
            if ("number" == typeof l) 0 < s ? p = 0 <= l ? l : A(l + o, p) : o = 0 <= l ? Math.min(l + 1, o) : l + o + 1;
            else if (t && l && o) return l = t(r, e), r[l] === e ? l : -1;
            if (e !== e) return l = n(f.call(r, p, o), d.isNaN), 0 <= l ? l + p : -1;
            for (l = 0 < s ? p : o - 1; 0 <= l && o > l; l += s)
                if (r[l] === e) return l;
            return -1
        }
    }

    function $(a, n) {
        var t = M.length,
            s = a.constructor,
            r = d.isFunction(s) && s.prototype || o,
            l = "constructor";
        for (d.has(a, l) && !d.contains(n, l) && n.push(l); t--;) l = M[t], l in a && a[l] !== r[l] && !d.contains(n, l) && n.push(l)
    }
    var e = Math.floor,
        A = Math.max,
        r = this,
        u = r._,
        i = Array.prototype,
        o = Object.prototype,
        a = Function.prototype,
        c = i.push,
        f = i.slice,
        H = o.toString,
        s = o.hasOwnProperty,
        l = Array.isArray,
        p = Object.keys,
        h = a.bind,
        g = Object.create,
        y = function() {},
        d = function(e) {
            return e instanceof d ? e : this instanceof d ? void(this._wrapped = e) : new d(e)
        };
    "undefined" == typeof exports ? r._ = d : ("undefined" != typeof module && module.exports && (exports = module.exports = d), exports._ = d), d.VERSION = "1.8.3";
    var m = function(a, n, e) {
            if (void 0 === n) return a;
            switch (null == e ? 3 : e) {
                case 1:
                    return function(e) {
                        return a.call(n, e)
                    };
                case 2:
                    return function(t, i) {
                        return a.call(n, t, i)
                    };
                case 3:
                    return function(t, i, e) {
                        return a.call(n, t, i, e)
                    };
                case 4:
                    return function(t, s, e, o) {
                        return a.call(n, t, s, e, o)
                    };
            }
            return function() {
                return a.apply(n, arguments)
            }
        },
        v = function(e, a, t) {
            return null == e ? d.identity : d.isFunction(e) ? m(e, a, t) : d.isObject(e) ? d.matcher(e) : d.property(e)
        };
    d.iteratee = function(e, a) {
        return v(e, a, 1 / 0)
    };
    var b = function(e, n) {
            return function(t) {
                var s = arguments.length;
                if (2 > s || null == t) return t;
                for (var r = 1; s > r; r++)
                    for (var l = arguments[r], i = e(l), o = i.length, a = 0, d; o > a; a++) d = i[a], n && void 0 !== t[d] || (t[d] = l[d]);
                return t
            }
        },
        x = function(e) {
            if (!d.isObject(e)) return {};
            if (g) return g(e);
            y.prototype = e;
            var a = new y;
            return y.prototype = null, a
        },
        _ = function(e) {
            return function(a) {
                return null == a ? void 0 : a[e]
            }
        },
        w = _("length"),
        O = function(e) {
            var a = w(e);
            return "number" == typeof a && 0 <= a && 9007199254740991 >= a
        };
    d.each = d.forEach = function(a, n, t) {
        n = m(n, t);
        var s, e;
        if (O(a))
            for (s = 0, e = a.length; e > s; s++) n(a[s], s, a);
        else {
            var o = d.keys(a);
            for (s = 0, e = o.length; e > s; s++) n(a[o[s]], o[s], a)
        }
        return a
    }, d.map = d.collect = function(s, n, t) {
        n = v(n, t);
        for (var r = !O(s) && d.keys(s), e = (r || s).length, l = Array(e), i = 0, o; e > i; i++) o = r ? r[i] : i, l[i] = n(s[o], o, s);
        return l
    }, d.reduce = d.foldl = d.inject = C(1), d.reduceRight = d.foldr = C(-1), d.find = d.detect = function(a, i, t) {
        var n;
        return n = O(a) ? d.findIndex(a, i, t) : d.findKey(a, i, t), void 0 !== n && -1 !== n ? a[n] : void 0
    }, d.filter = d.select = function(a, i, t) {
        var s = [];
        return i = v(i, t), d.each(a, function(e, t, a) {
            i(e, t, a) && s.push(e)
        }), s
    }, d.reject = function(e, a, t) {
        return d.filter(e, d.negate(v(a)), t)
    }, d.every = d.all = function(a, n, t) {
        n = v(n, t);
        for (var s = !O(a) && d.keys(a), e = (s || a).length, r = 0, i; e > r; r++)
            if (i = s ? s[r] : r, !n(a[i], i, a)) return !1;
        return !0
    }, d.some = d.any = function(a, n, t) {
        n = v(n, t);
        for (var s = !O(a) && d.keys(a), e = (s || a).length, r = 0, i; e > r; r++)
            if (i = s ? s[r] : r, n(a[i], i, a)) return !0;
        return !1
    }, d.contains = d.includes = d.include = function(a, i, t, n) {
        return O(a) || (a = d.values(a)), ("number" != typeof t || n) && (t = 0), 0 <= d.indexOf(a, i, t)
    }, d.invoke = function(a, i) {
        var t = f.call(arguments, 2),
            s = d.isFunction(i);
        return d.map(a, function(e) {
            var a = s ? i : e[i];
            return null == a ? a : a.apply(e, t)
        })
    }, d.pluck = function(e, a) {
        return d.map(e, d.property(a))
    }, d.where = function(e, a) {
        return d.filter(e, d.matcher(a))
    }, d.findWhere = function(e, a) {
        return d.find(e, d.matcher(a))
    }, d.max = function(s, l, t) {
        var p = -1 / 0,
            i = -1 / 0,
            n, o;
        if (null == l && null != s) {
            s = O(s) ? s : d.values(s);
            for (var e = 0, a = s.length; a > e; e++) n = s[e], n > p && (p = n)
        } else l = v(l, t), d.each(s, function(t, a, n) {
            o = l(t, a, n), (o > i || o === -1 / 0 && p === -1 / 0) && (p = t, i = o)
        });
        return p
    }, d.min = function(s, l, t) {
        var p = 1 / 0,
            i = 1 / 0,
            n, o;
        if (null == l && null != s) {
            s = O(s) ? s : d.values(s);
            for (var e = 0, a = s.length; a > e; e++) n = s[e], p > n && (p = n)
        } else l = v(l, t), d.each(s, function(t, a, n) {
            o = l(t, a, n), (i > o || 1 / 0 === o && 1 / 0 === p) && (p = t, i = o)
        });
        return p
    }, d.shuffle = function(a) {
        for (var n = O(a) ? a : d.values(a), s = n.length, e = Array(s), o = 0, i; s > o; o++) i = d.random(0, o), i !== o && (e[o] = e[i]), e[i] = n[o];
        return e
    }, d.sample = function(e, a, t) {
        return null == a || t ? (O(e) || (e = d.values(e)), e[d.random(e.length - 1)]) : d.shuffle(e).slice(0, A(0, a))
    }, d.sortBy = function(e, a, t) {
        return a = v(a, t), d.pluck(d.map(e, function(t, i, s) {
            return {
                value: t,
                index: i,
                criteria: a(t, i, s)
            }
        }).sort(function(a, i) {
            var t = a.criteria,
                n = i.criteria;
            if (t !== n) {
                if (t > n || void 0 === t) return 1;
                if (n > t || void 0 === n) return -1
            }
            return a.index - i.index
        }), "value")
    };
    var k = function(a) {
        return function(n, t, i) {
            var s = {};
            return t = v(t, i), d.each(n, function(r, e) {
                var i = t(r, e, n);
                a(s, r, i)
            }), s
        }
    };
    d.groupBy = k(function(e, a, t) {
        d.has(e, t) ? e[t].push(a) : e[t] = [a]
    }), d.indexBy = k(function(e, a, t) {
        e[t] = a
    }), d.countBy = k(function(e, a, t) {
        d.has(e, t) ? e[t]++ : e[t] = 1
    }), d.toArray = function(e) {
        return e ? d.isArray(e) ? f.call(e) : O(e) ? d.map(e, d.identity) : d.values(e) : []
    }, d.size = function(e) {
        return null == e ? 0 : O(e) ? e.length : d.keys(e).length
    }, d.partition = function(a, s, t) {
        s = v(s, t);
        var o = [],
            e = [];
        return d.each(a, function(t, a, n) {
            (s(t, a, n) ? o : e).push(t)
        }), [o, e]
    }, d.first = d.head = d.take = function(e, a, t) {
        return null == e ? void 0 : null == a || t ? e[0] : d.initial(e, e.length - a)
    }, d.initial = function(e, a, t) {
        return f.call(e, 0, A(0, e.length - (null == a || t ? 1 : a)))
    }, d.last = function(e, a, t) {
        return null == e ? void 0 : null == a || t ? e[e.length - 1] : d.rest(e, A(0, e.length - a))
    }, d.rest = d.tail = d.drop = function(e, a, t) {
        return f.call(e, null == a || t ? 1 : a)
    }, d.compact = function(e) {
        return d.filter(e, d.identity)
    };
    var j = function(s, n, t, r) {
        for (var e = [], p = 0, i = r || 0, o = w(s), a; o > i; i++)
            if (a = s[i], O(a) && (d.isArray(a) || d.isArguments(a))) {
                n || (a = j(a, n, t));
                var c = 0,
                    u = a.length;
                for (e.length += u; u > c;) e[p++] = a[c++]
            } else t || (e[p++] = a);
        return e
    };
    d.flatten = function(e, a) {
        return j(e, a, !1)
    }, d.without = function(e) {
        return d.difference(e, f.call(arguments, 1))
    }, d.uniq = d.unique = function(s, n, t, r) {
        d.isBoolean(n) || (r = t, t = n, n = !1), null != t && (t = v(t, r));
        for (var e = [], l = [], i = 0, o = w(s); o > i; i++) {
            var a = s[i],
                p = t ? t(a, i, s) : a;
            n ? (i && l === p || e.push(a), l = p) : t ? d.contains(l, p) || (l.push(p), e.push(a)) : d.contains(e, a) || e.push(a)
        }
        return e
    }, d.union = function() {
        return d.uniq(j(arguments, !0, !0))
    }, d.intersection = function(a) {
        for (var n = [], t = arguments.length, s = 0, e = w(a), r; e > s; s++)
            if (r = a[s], !d.contains(n, r)) {
                for (var i = 1; t > i && d.contains(arguments[i], r); i++);
                i === t && n.push(r)
            }
        return n
    }, d.difference = function(e) {
        var a = j(arguments, !0, !0, 1);
        return d.filter(e, function(e) {
            return !d.contains(a, e)
        })
    }, d.zip = function() {
        return d.unzip(arguments)
    }, d.unzip = function(a) {
        for (var i = a && d.max(a, w).length || 0, t = Array(i), n = 0; i > n; n++) t[n] = d.pluck(a, n);
        return t
    }, d.object = function(a, i) {
        for (var t = {}, n = 0, e = w(a); e > n; n++) i ? t[a[n]] = i[n] : t[a[n][0]] = a[n][1];
        return t
    }, d.findIndex = n(1), d.findLastIndex = n(-1), d.sortedIndex = function(s, n, t, r) {
        t = v(t, r, 1);
        for (var l = t(n), d = 0, i = w(s), o; i > d;) o = e((d + i) / 2), t(s[o]) < l ? d = o + 1 : i = o;
        return d
    }, d.indexOf = t(1, d.findIndex, d.sortedIndex), d.lastIndexOf = t(-1, d.findLastIndex), d.range = function(a, n, t) {
        null == n && (n = a || 0, a = 0), t = t || 1;
        for (var s = A(Math.ceil((n - a) / t), 0), e = Array(s), o = 0; s > o; o++, a += t) e[o] = a;
        return e
    };
    var S = function(a, n, t, s, e) {
        if (!(s instanceof n)) return a.apply(t, e);
        var r = x(a.prototype),
            i = a.apply(r, e);
        return d.isObject(i) ? i : r
    };
    d.bind = function(a, i) {
        if (h && a.bind === h) return h.apply(a, f.call(arguments, 1));
        if (!d.isFunction(a)) throw new TypeError("Bind must be called on a function");
        var t = f.call(arguments, 2),
            n = function() {
                return S(a, n, i, this, t.concat(f.call(arguments)))
            };
        return n
    }, d.partial = function(a) {
        var n = f.call(arguments, 1),
            t = function() {
                for (var s = 0, e = n.length, r = Array(e), i = 0; e > i; i++) r[i] = n[i] === d ? arguments[s++] : n[i];
                for (; s < arguments.length;) r.push(arguments[s++]);
                return S(a, t, this, this, r)
            };
        return t
    }, d.bindAll = function(a) {
        var i = arguments.length,
            e, t;
        if (1 >= i) throw new Error("bindAll must be passed function names");
        for (e = 1; i > e; e++) t = arguments[e], a[t] = d.bind(a[t], a);
        return a
    }, d.memoize = function(a, n) {
        var t = function(s) {
            var e = t.cache,
                o = "" + (n ? n.apply(this, arguments) : s);
            return d.has(e, o) || (e[o] = a.apply(this, arguments)), e[o]
        };
        return t.cache = {}, t
    }, d.delay = function(e, a) {
        var t = f.call(arguments, 2);
        return setTimeout(function() {
            return e.apply(null, t)
        }, a)
    }, d.defer = d.partial(d.delay, d, 1), d.throttle = function(s, n, t) {
        var r = null,
            o = 0,
            a, e, p;
        t || (t = {});
        var i = function() {
            o = !1 === t.leading ? 0 : d.now(), r = null, p = s.apply(a, e), r || (a = e = null)
        };
        return function() {
            var c = d.now();
            o || !1 !== t.leading || (o = c);
            var u = n - (c - o);
            return a = this, e = arguments, 0 >= u || u > n ? (r && (clearTimeout(r), r = null), o = c, p = s.apply(a, e), r || (a = e = null)) : r || !1 === t.trailing || (r = setTimeout(i, u)), p
        }
    }, d.debounce = function(s, n, t) {
        var r = function() {
                var e = d.now() - i;
                n > e && 0 <= e ? l = setTimeout(r, n - e) : (l = null, t || (o = s.apply(c, p), l || (c = p = null)))
            },
            l, p, c, i, o;
        return function() {
            c = this, p = arguments, i = d.now();
            var a = t && !l;
            return l || (l = setTimeout(r, n)), a && (o = s.apply(c, p), c = p = null), o
        }
    }, d.wrap = function(e, a) {
        return d.partial(a, e)
    }, d.negate = function(e) {
        return function() {
            return !e.apply(this, arguments)
        }
    }, d.compose = function() {
        var a = arguments,
            i = a.length - 1;
        return function() {
            for (var t = i, n = a[i].apply(this, arguments); t--;) n = a[t].call(this, n);
            return n
        }
    }, d.after = function(e, a) {
        return function() {
            return 1 > --e ? a.apply(this, arguments) : void 0
        }
    }, d.before = function(e, a) {
        var t;
        return function() {
            return 0 < --e && (t = a.apply(this, arguments)), 1 >= e && (a = null), t
        }
    }, d.once = d.partial(d.before, 2);
    var E = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        M = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    d.keys = function(e) {
        if (!d.isObject(e)) return [];
        if (p) return p(e);
        var a = [];
        for (var t in e) d.has(e, t) && a.push(t);
        return E && $(e, a), a
    }, d.allKeys = function(e) {
        if (!d.isObject(e)) return [];
        var a = [];
        for (var t in e) a.push(t);
        return E && $(e, a), a
    }, d.values = function(a) {
        for (var i = d.keys(a), t = i.length, n = Array(t), e = 0; t > e; e++) n[e] = a[i[e]];
        return n
    }, d.mapObject = function(s, n, t) {
        n = v(n, t);
        for (var r = d.keys(s), l = r.length, i = {}, o = 0, a; l > o; o++) a = r[o], i[a] = n(s[a], a, s);
        return i
    }, d.pairs = function(a) {
        for (var i = d.keys(a), t = i.length, n = Array(t), e = 0; t > e; e++) n[e] = [i[e], a[i[e]]];
        return n
    }, d.invert = function(a) {
        for (var i = {}, t = d.keys(a), n = 0, e = t.length; e > n; n++) i[a[t[n]]] = t[n];
        return i
    }, d.functions = d.methods = function(e) {
        var a = [];
        for (var t in e) d.isFunction(e[t]) && a.push(t);
        return a.sort()
    }, d.extend = b(d.allKeys), d.extendOwn = d.assign = b(d.keys), d.findKey = function(a, n, t) {
        n = v(n, t);
        for (var s = d.keys(a), r = 0, i = s.length, o; i > r; r++)
            if (o = s[r], n(a[o], o, a)) return o
    }, d.pick = function(s, n, t) {
        var r = {},
            i = s,
            o, e;
        if (null == i) return r;
        d.isFunction(n) ? (e = d.allKeys(i), o = m(n, t)) : (e = j(arguments, !1, !1, 1), o = function(e, a, t) {
            return a in t
        }, i = Object(i));
        for (var p = 0, a = e.length; a > p; p++) {
            var c = e[p],
                u = i[c];
            o(u, c, i) && (r[c] = u)
        }
        return r
    }, d.omit = function(a, i, t) {
        if (d.isFunction(i)) i = d.negate(i);
        else {
            var s = d.map(j(arguments, !1, !1, 1), String);
            i = function(e, a) {
                return !d.contains(s, a)
            }
        }
        return d.pick(a, i, t)
    }, d.defaults = b(d.allKeys, !0), d.create = function(e, a) {
        var t = x(e);
        return a && d.extendOwn(t, a), t
    }, d.clone = function(e) {
        return d.isObject(e) ? d.isArray(e) ? e.slice() : d.extend({}, e) : e
    }, d.tap = function(e, a) {
        return a(e), e
    }, d.isMatch = function(a, n) {
        var t = d.keys(n),
            s = t.length;
        if (null == a) return !s;
        for (var r = Object(a), l = 0, i; s > l; l++)
            if (i = t[l], n[i] !== r[i] || !(i in r)) return !1;
        return !0
    };
    var I = function(s, p, m, r) {
        if (s === p) return 0 !== s || 1 / s == 1 / p;
        if (null == s || null == p) return s === p;
        s instanceof d && (s = s._wrapped), p instanceof d && (p = p._wrapped);
        var e = H.call(s);
        if (e !== H.call(p)) return !1;
        switch (e) {
            case "[object RegExp]":
            case "[object String]":
                return "" + s == "" + p;
            case "[object Number]":
                return +s == +s ? 0 == +s ? 1 / +s == 1 / p : +s == +p : +p != +p;
            case "[object Date]":
            case "[object Boolean]":
                return +s == +p;
        }
        var u = "[object Array]" === e;
        if (!u) {
            if ("object" != typeof s || "object" != typeof p) return !1;
            var h = s.constructor,
                o = p.constructor;
            if (h !== o && !(d.isFunction(h) && h instanceof h && d.isFunction(o) && o instanceof o) && "constructor" in s && "constructor" in p) return !1
        }
        m = m || [], r = r || [];
        for (var a = m.length; a--;)
            if (m[a] === s) return r[a] === p;
        if (m.push(s), r.push(p), u) {
            if (a = s.length, a !== p.length) return !1;
            for (; a--;)
                if (!I(s[a], p[a], m, r)) return !1
        } else {
            var c = d.keys(s),
                l;
            if (a = c.length, d.keys(p).length !== a) return !1;
            for (; a--;)
                if (l = c[a], !d.has(p, l) || !I(s[l], p[l], m, r)) return !1
        }
        return m.pop(), r.pop(), !0
    };
    d.isEqual = function(e, a) {
        return I(e, a)
    }, d.isEmpty = function(e) {
        return !(null != e) || (O(e) && (d.isArray(e) || d.isString(e) || d.isArguments(e)) ? 0 === e.length : 0 === d.keys(e).length)
    }, d.isElement = function(e) {
        return e && 1 === e.nodeType
    }, d.isArray = l || function(e) {
        return "[object Array]" === H.call(e)
    }, d.isObject = function(e) {
        var a = typeof e;
        return "function" == a || "object" == a && !!e
    }, d.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(e) {
        d["is" + e] = function(a) {
            return H.call(a) === "[object " + e + "]"
        }
    }), d.isArguments(arguments) || (d.isArguments = function(e) {
        return d.has(e, "callee")
    }), typeof /./ != "function" && "object" != typeof Int8Array && (d.isFunction = function(e) {
        return "function" == typeof e || !1
    }), d.isFinite = function(e) {
        return isFinite(e) && !isNaN(parseFloat(e))
    }, d.isNaN = function(e) {
        return d.isNumber(e) && e !== +e
    }, d.isBoolean = function(e) {
        return !0 === e || !1 === e || "[object Boolean]" === H.call(e)
    }, d.isNull = function(e) {
        return null === e
    }, d.isUndefined = function(e) {
        return void 0 === e
    }, d.has = function(e, a) {
        return null != e && s.call(e, a)
    }, d.noConflict = function() {
        return r._ = u, this
    }, d.identity = function(e) {
        return e
    }, d.constant = function(e) {
        return function() {
            return e
        }
    }, d.noop = function() {}, d.property = _, d.propertyOf = function(e) {
        return null == e ? function() {} : function(a) {
            return e[a]
        }
    }, d.matcher = d.matches = function(e) {
        return e = d.extendOwn({}, e),
            function(a) {
                return d.isMatch(a, e)
            }
    }, d.times = function(a, i, t) {
        var n = Array(A(0, a));
        i = m(i, t, 1);
        for (var e = 0; a > e; e++) n[e] = i(e);
        return n
    }, d.random = function(a, i) {
        return null == i && (i = a, a = 0), a + e(Math.random() * (i - a + 1))
    }, d.now = Date.now || function() {
        return new Date().getTime()
    };
    var N = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        },
        B = d.invert(N),
        T = function(a) {
            var i = function(e) {
                    return a[e]
                },
                t = "(?:" + d.keys(a).join("|") + ")",
                s = RegExp(t),
                e = RegExp(t, "g");
            return function(t) {
                return t = null == t ? "" : "" + t, s.test(t) ? t.replace(e, i) : t
            }
        };
    d.escape = T(N), d.unescape = T(B), d.result = function(a, i, t) {
        var n = null == a ? void 0 : a[i];
        return void 0 === n && (n = t), d.isFunction(n) ? n.call(a) : n
    };
    var F = 0;
    d.uniqueId = function(e) {
        var a = ++F + "";
        return e ? e + a : a
    }, d.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var W = /(.)^/,
        R = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        z = /\\|'|\r|\n|\u2028|\u2029/g,
        D = function(e) {
            return "\\" + R[e]
        };
    d.template = function(s, a, n) {
        !a && n && (a = n), a = d.defaults({}, a, d.templateSettings);
        var r = RegExp([(a.escape || W).source, (a.interpolate || W).source, (a.evaluate || W).source].join("|") + "|$", "g"),
            l = 0,
            p = "__p+='";
        s.replace(r, function(i, t, n, e, o) {
            return p += s.slice(l, o).replace(z, D), l = o + i.length, t ? p += "'+\n((__t=(" + t + "))==null?'':_.escape(__t))+\n'" : n ? p += "'+\n((__t=(" + n + "))==null?'':__t)+\n'" : e && (p += "';\n" + e + "\n__p+='"), i
        }), p += "';\n", a.variable || (p = "with(obj||{}){\n" + p + "}\n"), p = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + p + "return __p;\n";
        try {
            var e = new Function(a.variable || "obj", "_", p)
        } catch (e) {
            throw e.source = p, e
        }
        var i = function(t) {
                return e.call(this, t, d)
            },
            o = a.variable || "obj";
        return i.source = "function(" + o + "){\n" + p + "}", i
    }, d.chain = function(e) {
        var a = d(e);
        return a._chain = !0, a
    };
    var L = function(e, a) {
        return e._chain ? d(a).chain() : a
    };
    d.mixin = function(e) {
        d.each(d.functions(e), function(a) {
            var t = d[a] = e[a];
            d.prototype[a] = function() {
                var e = [this._wrapped];
                return c.apply(e, arguments), L(this, t.apply(d, e))
            }
        })
    }, d.mixin(d), d.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
        var a = i[e];
        d.prototype[e] = function() {
            var t = this._wrapped;
            return a.apply(t, arguments), "shift" !== e && "splice" !== e || 0 !== t.length || delete t[0], L(this, t)
        }
    }), d.each(["concat", "join", "slice"], function(e) {
        var a = i[e];
        d.prototype[e] = function() {
            return L(this, a.apply(this._wrapped, arguments))
        }
    }), d.prototype.value = function() {
        return this._wrapped
    }, d.prototype.valueOf = d.prototype.toJSON = d.prototype.value, d.prototype.toString = function() {
        return "" + this._wrapped
    }, "function" == typeof define && define.amd && define("underscore", [], function() {
        return d
    })
}.call(this), ! function(e) {
        "use strict";
        e(function() {
            e.support.transition = function() {
                var e = function() {
                    var e = document.createElement("bootstrap"),
                        t = {
                            WebkitTransition: "webkitTransitionEnd",
                            MozTransition: "transitionend",
                            OTransition: "oTransitionEnd otransitionend",
                            transition: "transitionend"
                        },
                        a;
                    for (a in t)
                        if (e.style[a] !== void 0) return t[a]
                }();
                return e && {
                    end: e
                }
            }()
        })
    }(window.jQuery), ! function(t) {
        "use strict";
        var e = "[data-dismiss=\"alert\"]",
            a = function(a) {
                t(a).on("click", e, this.close)
            };
        a.prototype.close = function(a) {
            function e() {
                s.trigger("closed").remove()
            }
            var i = t(this),
                n = i.attr("data-target"),
                s;
            n || (n = i.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), s = t(n), a && a.preventDefault(), s.length || (s = i.hasClass("alert") ? i : i.parent()), s.trigger(a = t.Event("close"));
            a.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.on(t.support.transition.end, e) : e())
        };
        var i = t.fn.alert;
        t.fn.alert = function(e) {
            return this.each(function() {
                var i = t(this),
                    n = i.data("alert");
                n || i.data("alert", n = new a(this)), "string" == typeof e && n[e].call(i)
            })
        }, t.fn.alert.Constructor = a, t.fn.alert.noConflict = function() {
            return t.fn.alert = i, this
        }, t(document).on("click.alert.data-api", e, a.prototype.close)
    }(window.jQuery), ! function(t) {
        "use strict";
        var e = function(e, a) {
            this.$element = t(e), this.options = t.extend({}, t.fn.button.defaults, a)
        };
        e.prototype.setState = function(e) {
            var t = "disabled",
                a = this.$element,
                i = a.data(),
                n = a.is("input") ? "val" : "html";
            e += "Text", i.resetText || a.data("resetText", a[n]()), a[n](i[e] || this.options[e]), setTimeout(function() {
                "loadingText" == e ? a.addClass(t).attr(t, t) : a.removeClass(t).removeAttr(t)
            }, 0)
        }, e.prototype.toggle = function() {
            var e = this.$element.closest("[data-toggle=\"buttons-radio\"]");
            e && e.find(".active").removeClass("active"), this.$element.toggleClass("active")
        };
        var a = t.fn.button;
        t.fn.button = function(a) {
            return this.each(function() {
                var i = t(this),
                    n = i.data("button");
                n || i.data("button", n = new e(this, "object" == typeof a && a)), "toggle" == a ? n.toggle() : a && n.setState(a)
            })
        }, t.fn.button.defaults = {
            loadingText: "loading..."
        }, t.fn.button.Constructor = e, t.fn.button.noConflict = function() {
            return t.fn.button = a, this
        }, t(document).on("click.button.data-api", "[data-toggle^=button]", function(a) {
            var e = t(a.target);
            e.hasClass("btn") || (e = e.closest(".btn")), e.button("toggle")
        })
    }(window.jQuery), ! function(t) {
        "use strict";
        var e = function(e, a) {
            this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = a, "hover" == this.options.pause && this.$element.on("mouseenter", t.proxy(this.pause, this)).on("mouseleave", t.proxy(this.cycle, this))
        };
        e.prototype = {
            cycle: function(a) {
                return a || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
            },
            getActiveIndex: function() {
                return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
            },
            to: function(e) {
                var a = this.getActiveIndex(),
                    i = this;
                return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid", function() {
                    i.to(e)
                }) : a == e ? this.pause().cycle() : this.slide(e > a ? "next" : "prev", t(this.$items[e]))
            },
            pause: function(a) {
                return a || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition.end && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), clearInterval(this.interval), this.interval = null, this
            },
            next: function() {
                return this.sliding ? void 0 : this.slide("next")
            },
            prev: function() {
                return this.sliding ? void 0 : this.slide("prev")
            },
            slide: function(a, i) {
                var n = this.$element.find(".item.active"),
                    s = i || n[a](),
                    o = this.interval,
                    r = "next" == a ? "left" : "right",
                    l = "next" == a ? "first" : "last",
                    d = this,
                    p;
                if (this.sliding = !0, o && this.pause(), s = s.length ? s : this.$element.find(".item")[l](), p = t.Event("slide", {
                        relatedTarget: s[0],
                        direction: r
                    }), !s.hasClass("active")) {
                    if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function() {
                            var e = t(d.$indicators.children()[d.getActiveIndex()]);
                            e && e.addClass("active")
                        })), t.support.transition && this.$element.hasClass("slide")) {
                        if (this.$element.trigger(p), p.isDefaultPrevented()) return;
                        s.addClass(a), s[0].offsetWidth, n.addClass(r), s.addClass(r), this.$element.one(t.support.transition.end, function() {
                            s.removeClass([a, r].join(" ")).addClass("active"), n.removeClass(["active", r].join(" ")), d.sliding = !1, setTimeout(function() {
                                d.$element.trigger("slid")
                            }, 0)
                        })
                    } else {
                        if (this.$element.trigger(p), p.isDefaultPrevented()) return;
                        n.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
                    }
                    return o && this.cycle(), this
                }
            }
        };
        var a = t.fn.carousel;
        t.fn.carousel = function(a) {
            return this.each(function() {
                var i = t(this),
                    n = i.data("carousel"),
                    s = t.extend({}, t.fn.carousel.defaults, "object" == typeof a && a),
                    o = "string" == typeof a ? a : s.slide;
                n || i.data("carousel", n = new e(this, s)), "number" == typeof a ? n.to(a) : o ? n[o]() : s.interval && n.pause().cycle()
            })
        }, t.fn.carousel.defaults = {
            interval: 5e3,
            pause: "hover"
        }, t.fn.carousel.Constructor = e, t.fn.carousel.noConflict = function() {
            return t.fn.carousel = a, this
        }, t(document).on("click.carousel.data-api", "[data-slide], [data-slide-to]", function(a) {
            var e = t(this),
                i = t(e.attr("data-target") || (s = e.attr("href")) && s.replace(/.*(?=#[^\s]+$)/, "")),
                n = t.extend({}, i.data(), e.data()),
                s, o;
            i.carousel(n), (o = e.attr("data-slide-to")) && i.data("carousel").pause().to(o).cycle(), a.preventDefault()
        })
    }(window.jQuery), ! function(t) {
        "use strict";
        var e = function(e, a) {
            this.$element = t(e), this.options = t.extend({}, t.fn.collapse.defaults, a), this.options.parent && (this.$parent = t(this.options.parent)), this.options.toggle && this.toggle()
        };
        e.prototype = {
            constructor: e,
            dimension: function() {
                var e = this.$element.hasClass("width");
                return e ? "width" : "height"
            },
            show: function() {
                var e, a, i, n;
                if (!(this.transitioning || this.$element.hasClass("in"))) {
                    if (e = this.dimension(), a = t.camelCase(["scroll", e].join("-")), i = this.$parent && this.$parent.find("> .accordion-group > .in"), i && i.length) {
                        if (n = i.data("collapse"), n && n.transitioning) return;
                        i.collapse("hide"), n || i.data("collapse", null)
                    }
                    this.$element[e](0), this.transition("addClass", t.Event("show"), "shown"), t.support.transition && this.$element[e](this.$element[0][a])
                }
            },
            hide: function() {
                var e;
                this.transitioning || !this.$element.hasClass("in") || (e = this.dimension(), this.reset(this.$element[e]()), this.transition("removeClass", t.Event("hide"), "hidden"), this.$element[e](0))
            },
            reset: function(e) {
                var t = this.dimension();
                return this.$element.removeClass("collapse")[t](e || "auto")[0].offsetWidth, this.$element[null === e ? "removeClass" : "addClass"]("collapse"), this
            },
            transition: function(e, a, i) {
                var n = this,
                    s = function() {
                        "show" == a.type && n.reset(), n.transitioning = 0, n.$element.trigger(i)
                    };
                this.$element.trigger(a);
                a.isDefaultPrevented() || (this.transitioning = 1, this.$element[e]("in"), t.support.transition && this.$element.hasClass("collapse") ? this.$element.one(t.support.transition.end, s) : s())
            },
            toggle: function() {
                this[this.$element.hasClass("in") ? "hide" : "show"]()
            }
        };
        var a = t.fn.collapse;
        t.fn.collapse = function(a) {
            return this.each(function() {
                var i = t(this),
                    n = i.data("collapse"),
                    s = t.extend({}, t.fn.collapse.defaults, i.data(), "object" == typeof a && a);
                n || i.data("collapse", n = new e(this, s)), "string" == typeof a && n[a]()
            })
        }, t.fn.collapse.defaults = {
            toggle: !0
        }, t.fn.collapse.Constructor = e, t.fn.collapse.noConflict = function() {
            return t.fn.collapse = a, this
        }, t(document).on("click.collapse.data-api", "[data-toggle=collapse]", function(a) {
            var e = t(this),
                i = e.attr("data-target") || a.preventDefault() || (s = e.attr("href")) && s.replace(/.*(?=#[^\s]+$)/, ""),
                n = t(i).data("collapse") ? "toggle" : e.data(),
                s;
            e[t(i).hasClass("in") ? "addClass" : "removeClass"]("collapsed"), t(i).collapse(n)
        })
    }(window.jQuery), ! function(t) {
        "use strict";

        function e() {
            t(".dropdown-backdrop").remove(), t(i).each(function() {
                a(t(this)).removeClass("open")
            })
        }

        function a(e) {
            var a = e.attr("data-target");
            a || (a = e.attr("href"), a = a && /#[A-Za-z]/.test(a) && a.replace(/.*(?=#[^\s]*$)/, ""));
            var i = a && t(a);
            return i && i.length ? i : e.parent()
        }
        var i = "[data-toggle=dropdown]",
            n = function(e) {
                var a = t(e).on("click.dropdown.data-api", this.toggle);
                t("html").on("click.dropdown.data-api", function() {
                    a.parent().removeClass("open")
                })
            };
        n.prototype = {
            constructor: n,
            toggle: function() {
                var i = t(this),
                    n, s;
                if (!i.is(".disabled, :disabled")) return n = a(i), s = n.hasClass("open"), e(), s || ("ontouchstart" in document.documentElement && t("<div class=\"dropdown-backdrop\"/>").insertBefore(t(this)).on("click", e), n.toggleClass("open")), i.focus(), !1
            },
            keydown: function(n) {
                var e, s, o, r, l;
                if (/(38|40|27)/.test(n.keyCode)) return (e = t(this), n.preventDefault(), n.stopPropagation(), !e.is(".disabled, :disabled")) ? (o = a(e), r = o.hasClass("open"), !r || r && 27 == n.keyCode ? (27 == n.which && o.find(i).focus(), e.click()) : void(s = t("[role=menu] li:not(.divider):visible a", o), s.eq(l).focus())) : void 0
            }
        };
        var s = t.fn.dropdown;
        t.fn.dropdown = function(e) {
            return this.each(function() {
                var a = t(this),
                    i = a.data("dropdown");
                i || a.data("dropdown", i = new n(this)), "string" == typeof e && i[e].call(a)
            })
        }, t.fn.dropdown.Constructor = n, t.fn.dropdown.noConflict = function() {
            return t.fn.dropdown = s, this
        }, t(document).on("click.dropdown.data-api", e).on("click.dropdown.data-api", ".dropdown form", function(t) {
            t.stopPropagation()
        }).on("click.dropdown.data-api", i, n.prototype.toggle).on("keydown.dropdown.data-api", i + ", [role=menu]", n.prototype.keydown)
    }(window.jQuery), ! function(t) {
        "use strict";
        var e = function(e, a) {
            this.options = a, this.$element = t(e).delegate("[data-dismiss=\"modal\"]", "click.dismiss.modal", t.proxy(this.hide, this)), this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
        };
        e.prototype = {
            constructor: e,
            toggle: function() {
                return this[this.isShown ? "hide" : "show"]()
            },
            show: function() {
                var a = this,
                    i = t.Event("show");
                if (this.$element.trigger(i), !(this.isShown || i.isDefaultPrevented())) {
                    this.isShown = !0;
                    var e = $exp.track("modal_lighter_design") ? "modal-sticker" : "";
                    this.$element.addClass(e), this.escape(), this.backdrop(function() {
                        var e = t.support.transition && a.$element.hasClass("fade");
                        a.$element.parent().length || a.$element.appendTo(document.body), a.$element.show(), e && a.$element[0].offsetWidth, a.$element.addClass("in").attr("aria-hidden", !1), a.enforceFocus(), e ? a.$element.one(t.support.transition.end, function() {
                            a.$element.focus().trigger("shown")
                        }) : a.$element.focus().trigger("shown")
                    })
                }
            },
            hide: function(a) {
                a && a.preventDefault();
                this;
                a = t.Event("hide"), this.$element.trigger(a);
                !this.isShown || a.isDefaultPrevented() || (this.isShown = !1, this.escape(), t(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden", !0), t.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal())
            },
            enforceFocus: function() {
                var a = this;
                t(document).on("focusin.modal", function(t) {
                    a.$element[0] === t.target || a.$element.has(t.target).length || a.$element.focus()
                })
            },
            escape: function() {
                var t = this;
                this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function(a) {
                    27 == a.which && t.hide()
                }) : !this.isShown && this.$element.off("keyup.dismiss.modal")
            },
            hideWithTransition: function() {
                var e = this,
                    a = setTimeout(function() {
                        e.$element.off(t.support.transition.end), e.hideModal()
                    }, 500);
                this.$element.one(t.support.transition.end, function() {
                    clearTimeout(a), e.hideModal()
                })
            },
            hideModal: function() {
                var e = this;
                this.$element.hide(), this.backdrop(function() {
                    e.removeBackdrop(), e.$element.trigger("hidden")
                })
            },
            removeBackdrop: function() {
                this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
            },
            backdrop: function(e) {
                var a = this,
                    i = this.$element.hasClass("fade") ? "fade" : "";
                if (this.isShown && this.options.backdrop) {
                    var n = t.support.transition && i,
                        s = $exp.track("modal_lighter_design") ? "modal-backdrop-light" : "modal-backdrop";
                       
                    if (this.$backdrop = t("<div class=\"" + s + " " + i + "\" />").appendTo(document.body), this.$backdrop.click("static" == this.options.backdrop ? t.proxy(this.$element[0].focus, this.$element[0]) : t.proxy(this.hide, this)), n && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
                    n ? this.$backdrop.one(t.support.transition.end, e) : e();
                    if(($("body div").hasClass("modal-backdrop-light"))){
                        $(".modal-backdrop-light").remove();
                        t("<div class=\"" + s + " in" + i + "\" />").appendTo(document.body);
                    } else {
                        
                    }
                    
                } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(t.support.transition.end, e) : e()) : e && e()
                
            }
            
        };
        var a = t.fn.modal;
        t.fn.modal = function(a) {
            return this.each(function() {
                var i = t(this),
                    n = i.data("modal"),
                    s = t.extend({}, t.fn.modal.defaults, i.data(), "object" == typeof a && a);
                n || i.data("modal", n = new e(this, s)), "string" == typeof a ? n[a]() : s.show && n.show()
            })
        }, t.fn.modal.defaults = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, t.fn.modal.Constructor = e, t.fn.modal.noConflict = function() {
            return t.fn.modal = a, this
        }, t(document).on("click.modal.data-api", "[data-toggle=\"modal\"]", function(a) {
            var e = t(this),
                i = e.attr("href"),
                n = t(e.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
                s = n.data("modal") ? "toggle" : t.extend({
                    remote: !/#/.test(i) && i
                }, n.data(), e.data());
            a.preventDefault(), n.modal(s).one("hide", function() {
                e.focus()
            })
        })
    }(window.jQuery), ! function(t) {
        "use strict";
        var e = function(e, t) {
            this.init("tooltip", e, t)
        };
        e.prototype = {
            constructor: e,
            init: function(e, a, n) {
                var s, o, r, l, d;
                for (this.type = e, this.$element = t(a), this.options = this.getOptions(n), this.enabled = !0, r = this.options.trigger.split(" "), d = r.length; d--;) l = r[d], "click" == l ? this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)) : "manual" != l && (s = "hover" == l ? "mouseenter" : "focus", o = "hover" == l ? "mouseleave" : "blur", this.$element.on(s + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(o + "." + this.type, this.options.selector, t.proxy(this.leave, this)));
                this.options.selector ? this._options = t.extend({}, this.options, {
                    trigger: "manual",
                    selector: ""
                }) : this.fixTitle()
            },
            getOptions: function(e) {
                return e = t.extend({}, t.fn[this.type].defaults, this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), e
            },
            enter: function(a) {
                var e = t.fn[this.type].defaults,
                    i = {},
                    n;
                return this._options && t.each(this._options, function(t, a) {
                    e[t] != a && (i[t] = a)
                }, this), n = t(a.currentTarget)[this.type](i).data(this.type), n.options.delay && n.options.delay.show ? void(clearTimeout(this.timeout), n.hoverState = "in", this.timeout = setTimeout(function() {
                    "in" == n.hoverState && n.show()
                }, n.options.delay.show)) : n.show()
            },
            leave: function(a) {
                var e = t(a.currentTarget)[this.type](this._options).data(this.type);
                return this.timeout && clearTimeout(this.timeout), e.options.delay && e.options.delay.hide ? void(e.hoverState = "out", this.timeout = setTimeout(function() {
                    "out" == e.hoverState && e.hide()
                }, e.options.delay.hide)) : e.hide()
            },
            show: function() {
                var a = t.Event("show"),
                    e, i, n, s, o, r;
                if (this.hasContent() && this.enabled) {
                    if (this.$element.trigger(a), a.isDefaultPrevented()) return;
                    e = this.tip(), this.setContent(), this.options.animation && e.addClass("fade"), o = "function" == typeof this.options.placement ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement, e.detach().css({
                        top: 0,
                        left: 0,
                        display: "block"
                    }), this.options.container ? e.appendTo(this.options.container) : e.insertAfter(this.$element), i = this.getPosition(), n = e[0].offsetWidth, s = e[0].offsetHeight, "bottom" === o ? r = {
                        top: i.top + i.height,
                        left: i.left + i.width / 2 - n / 2
                    } : "top" === o ? r = {
                        top: i.top - s,
                        left: i.left + i.width / 2 - n / 2
                    } : "left" === o ? r = {
                        top: i.top + i.height / 2 - s / 2,
                        left: i.left - n
                    } : "right" === o ? r = {
                        top: i.top + i.height / 2 - s / 2,
                        left: i.left + i.width
                    } : void 0, this.applyPlacement(r, o), this.$element.trigger("shown")
                }
            },
            applyPlacement: function(e, t) {
                var a = this.tip(),
                    i = a[0].offsetWidth,
                    n = a[0].offsetHeight,
                    s, o, r, l;
                a.offset(e).addClass(t).addClass("in"), s = a[0].offsetWidth, o = a[0].offsetHeight, "top" == t && o != n && (e.top = e.top + n - o, l = !0), "bottom" == t || "top" == t ? (r = 0, 0 > e.left && (r = -2 * e.left, e.left = 0, a.offset(e), s = a[0].offsetWidth, o = a[0].offsetHeight), this.replaceArrow(r - i + s, s, "left")) : this.replaceArrow(o - n, o, "top"), l && a.offset(e)
            },
            replaceArrow: function(e, t, a) {
                this.arrow().css(a, e ? 50 * (1 - e / t) + "%" : "")
            },
            setContent: function() {
                var e = this.tip(),
                    t = this.getTitle();
                e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
            },
            hide: function() {
                var a = this,
                    i = this.tip(),
                    n = t.Event("hide");
                if (this.$element.trigger(n), !n.isDefaultPrevented()) return i.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? function() {
                    var e = setTimeout(function() {
                        i.off(t.support.transition.end).detach()
                    }, 500);
                    i.one(t.support.transition.end, function() {
                        clearTimeout(e), i.detach()
                    })
                }() : i.detach(), this.$element.trigger("hidden"), this
            },
            fixTitle: function() {
                var e = this.$element;
                (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
            },
            hasContent: function() {
                return this.getTitle()
            },
            getPosition: function() {
                var e = this.$element[0];
                return t.extend({}, "function" == typeof e.getBoundingClientRect ? e.getBoundingClientRect() : {
                    width: e.offsetWidth,
                    height: e.offsetHeight
                }, this.$element.offset())
            },
            getTitle: function() {
                var e = this.$element,
                    t = this.options,
                    a;
                return a = e.attr("data-original-title") || ("function" == typeof t.title ? t.title.call(e[0]) : t.title), a
            },
            tip: function() {
                return this.$tip = this.$tip || t(this.options.template)
            },
            arrow: function() {
                return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
            },
            validate: function() {
                this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
            },
            enable: function() {
                this.enabled = !0
            },
            disable: function() {
                this.enabled = !1
            },
            toggleEnabled: function() {
                this.enabled = !this.enabled
            },
            toggle: function(a) {
                var e = a ? t(a.currentTarget)[this.type](this._options).data(this.type) : this;
                e.tip().hasClass("in") ? e.hide() : e.show()
            },
            destroy: function() {
                this.hide().$element.off("." + this.type).removeData(this.type)
            }
        };
        var a = t.fn.tooltip;
        t.fn.tooltip = function(a) {
            return this.each(function() {
                var i = t(this),
                    n = i.data("tooltip");
                n || i.data("tooltip", n = new e(this, "object" == typeof a && a)), "string" == typeof a && n[a]()
            })
        }, t.fn.tooltip.Constructor = e, t.fn.tooltip.defaults = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: "<div class=\"tooltip\"><div class=\"tooltip-arrow\"></div><div class=\"tooltip-inner\"></div></div>",
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1
        }, t.fn.tooltip.noConflict = function() {
            return t.fn.tooltip = a, this
        }
    }(window.jQuery), ! function(e) {
        "use strict";
        var t = function(e, t) {
            this.init("popover", e, t)
        };
        t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype, {
            constructor: t,
            setContent: function() {
                var e = this.tip(),
                    t = this.getTitle(),
                    a = this.getContent();
                e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content")[this.options.html ? "html" : "text"](a), e.removeClass("fade top bottom left right in")
            },
            hasContent: function() {
                return this.getTitle() || this.getContent()
            },
            getContent: function() {
                var e = this.$element,
                    t = this.options,
                    a;
                return a = ("function" == typeof t.content ? t.content.call(e[0]) : t.content) || e.attr("data-content"), a
            },
            tip: function() {
                return this.$tip || (this.$tip = e(this.options.template)), this.$tip
            },
            destroy: function() {
                this.hide().$element.off("." + this.type).removeData(this.type)
            }
        });
        var a = e.fn.popover;
        e.fn.popover = function(a) {
            return this.each(function() {
                var i = e(this),
                    n = i.data("popover");
                n || i.data("popover", n = new t(this, "object" == typeof a && a)), "string" == typeof a && n[a]()
            })
        }, e.fn.popover.Constructor = t, e.fn.popover.defaults = e.extend({}, e.fn.tooltip.defaults, {
            placement: "right",
            trigger: "click",
            content: "",
            template: "<div class=\"popover\"><div class=\"arrow\"></div><h3 class=\"popover-title\"></h3><div class=\"popover-content\"></div></div>"
        }), e.fn.popover.noConflict = function() {
            return e.fn.popover = a, this
        }
    }(window.jQuery), ! function(e) {
        "use strict";

        function t(t, a) {
            var i = e.proxy(this.process, this),
                n = e(t).is("body") ? e(window) : e(t),
                s;
            this.options = e.extend({}, e.fn.scrollspy.defaults, a), this.$scrollElement = n.on("scroll.scroll-spy.data-api", i), this.selector = (this.options.target || (s = e(t).attr("href")) && s.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.$body = e("body"), this.refresh(), this.process()
        }
        t.prototype = {
            constructor: t,
            refresh: function() {
                var t = this,
                    a;
                this.offsets = e([]), this.targets = e([]), a = this.$body.find(this.selector).map(function() {
                    var a = e(this),
                        i = a.data("target") || a.attr("href"),
                        n = /^#\w/.test(i) && e(i);
                    return n && n.length && [
                        [n.position().top + (!e.isWindow(t.$scrollElement.get(0)) && t.$scrollElement.scrollTop()), i]
                    ] || null
                }).sort(function(e, t) {
                    return e[0] - t[0]
                }).each(function() {
                    t.offsets.push(this[0]), t.targets.push(this[1])
                })
            },
            process: function() {
                var e = this.$scrollElement.scrollTop() + this.options.offset,
                    t = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
                    a = t - this.$scrollElement.height(),
                    n = this.offsets,
                    s = this.targets,
                    o = this.activeTarget,
                    r;
                if (e >= a) return o != (r = s.last()[0]) && this.activate(r);
                for (r = n.length; r--;) o != s[r] && e >= n[r] && (!n[r + 1] || e <= n[r + 1]) && this.activate(s[r])
            },
            activate: function(t) {
                var a, i;
                this.activeTarget = t, e(this.selector).parent(".active").removeClass("active"), i = this.selector + "[data-target=\"" + t + "\"]," + this.selector + "[href=\"" + t + "\"]", a = e(i).parent("li").addClass("active"), a.parent(".dropdown-menu").length && (a = a.closest("li.dropdown").addClass("active")), a.trigger("activate")
            }
        };
        var a = e.fn.scrollspy;
        e.fn.scrollspy = function(a) {
            return this.each(function() {
                var i = e(this),
                    n = i.data("scrollspy");
                n || i.data("scrollspy", n = new t(this, "object" == typeof a && a)), "string" == typeof a && n[a]()
            })
        }, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.defaults = {
            offset: 10
        }, e.fn.scrollspy.noConflict = function() {
            return e.fn.scrollspy = a, this
        }, e(window).on("load", function() {
            e("[data-spy=\"scroll\"]").each(function() {
                var t = e(this);
                t.scrollspy(t.data())
            })
        })
    }(window.jQuery), ! function(t) {
        "use strict";
        var e = function(e) {
            this.element = t(e)
        };
        e.prototype = {
            constructor: e,
            show: function() {
                var a = this.element,
                    i = a.closest("ul:not(.dropdown-menu)"),
                    n = a.attr("data-target"),
                    s, o, r;
                (n || (n = a.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !a.parent("li").hasClass("active")) && (s = i.find(".active:last a")[0], r = t.Event("show", {
                    relatedTarget: s
                }), a.trigger(r), r.isDefaultPrevented() || (o = t(n), this.activate(a.parent("li"), i), this.activate(o, o.parent(), function() {
                    a.trigger({
                        type: "shown",
                        relatedTarget: s
                    })
                })))
            },
            activate: function(e, a, i) {
                function n() {
                    s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), e.addClass("active"), o ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), i && i()
                }
                var s = a.find("> .active"),
                    o = i && t.support.transition && s.hasClass("fade");
                o ? s.one(t.support.transition.end, n) : n(), s.removeClass("in")
            }
        };
        var a = t.fn.tab;
        t.fn.tab = function(a) {
            return this.each(function() {
                var i = t(this),
                    n = i.data("tab");
                n || i.data("tab", n = new e(this)), "string" == typeof a && n[a]()
            })
        }, t.fn.tab.Constructor = e, t.fn.tab.noConflict = function() {
            return t.fn.tab = a, this
        }, t(document).on("click.tab.data-api", "[data-toggle=\"tab\"], [data-toggle=\"pill\"]", function(a) {
            a.preventDefault(), t(this).tab("show")
        })
    }(window.jQuery), ! function(t) {
        "use strict";
        var e = function(e, a) {
            this.$element = t(e), this.options = t.extend({}, t.fn.typeahead.defaults, a), this.matcher = this.options.matcher || this.matcher, this.sorter = this.options.sorter || this.sorter, this.highlighter = this.options.highlighter || this.highlighter, this.updater = this.options.updater || this.updater, this.source = this.options.source, this.$menu = t(this.options.menu), this.shown = !1, this.listen()
        };
        e.prototype = {
            constructor: e,
            select: function() {
                var e = this.$menu.find(".active").attr("data-value");
                return this.$element.val(this.updater(e)).change(), this.hide()
            },
            updater: function(e) {
                return e
            },
            show: function() {
                var e = t.extend({}, this.$element.position(), {
                    height: this.$element[0].offsetHeight
                });
                return this.$menu.insertAfter(this.$element).css({
                    top: e.top + e.height,
                    left: e.left
                }).show(), this.shown = !0, this
            },
            hide: function() {
                return this.$menu.hide(), this.shown = !1, this
            },
            lookup: function() {
                var e;
                return (this.query = this.$element.val(), !this.query || this.query.length < this.options.minLength) ? this.shown ? this.hide() : this : (e = t.isFunction(this.source) ? this.source(this.query, t.proxy(this.process, this)) : this.source, e ? this.process(e) : this)
            },
            process: function(e) {
                var a = this;
                return e = t.grep(e, function(e) {
                    return a.matcher(e)
                }), e = this.sorter(e), e.length ? this.render(e.slice(0, this.options.items)).show() : this.shown ? this.hide() : this
            },
            matcher: function(e) {
                return ~e.toLowerCase().indexOf(this.query.toLowerCase())
            },
            sorter: function(e) {
                for (var t = [], a = [], i = [], n; n = e.shift();) n.toLowerCase().indexOf(this.query.toLowerCase()) ? ~n.indexOf(this.query) ? a.push(n) : i.push(n) : t.push(n);
                return t.concat(a, i)
            },
            highlighter: function(e) {
                var t = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
                return e.replace(new RegExp("(" + t + ")", "ig"), function(e, t) {
                    return "<strong>" + t + "</strong>"
                })
            },
            render: function(e) {
                var a = this;
                return e = t(e).map(function(e, i) {
                    return e = t(a.options.item).attr("data-value", i), e.find("a").html(a.highlighter(i)), e[0]
                }), e.first().addClass("active"), this.$menu.html(e), this
            },
            next: function() {
                var e = this.$menu.find(".active").removeClass("active"),
                    a = e.next();
                a.length || (a = t(this.$menu.find("li")[0])), a.addClass("active")
            },
            prev: function() {
                var e = this.$menu.find(".active").removeClass("active"),
                    t = e.prev();
                t.length || (t = this.$menu.find("li").last()), t.addClass("active")
            },
            listen: function() {
                this.$element.on("focus", t.proxy(this.focus, this)).on("blur", t.proxy(this.blur, this)).on("keypress", t.proxy(this.keypress, this)).on("keyup", t.proxy(this.keyup, this)), this.eventSupported("keydown") && this.$element.on("keydown", t.proxy(this.keydown, this)), this.$menu.on("click", t.proxy(this.click, this)).on("mouseenter", "li", t.proxy(this.mouseenter, this)).on("mouseleave", "li", t.proxy(this.mouseleave, this))
            },
            eventSupported: function(e) {
                var t = e in this.$element;
                return t || (this.$element.setAttribute(e, "return;"), t = "function" == typeof this.$element[e]), t
            },
            move: function(t) {
                if (this.shown) {
                    switch (t.keyCode) {
                        case 9:
                        case 13:
                        case 27:
                            t.preventDefault();
                            break;
                        case 38:
                            t.preventDefault(), this.prev();
                            break;
                        case 40:
                            t.preventDefault(), this.next();
                    }
                    t.stopPropagation()
                }
            },
            keydown: function(a) {
                this.suppressKeyPressRepeat = ~t.inArray(a.keyCode, [40, 38, 9, 13, 27]), this.move(a)
            },
            keypress: function(t) {
                this.suppressKeyPressRepeat || this.move(t)
            },
            keyup: function(t) {
                switch (t.keyCode) {
                    case 40:
                    case 38:
                    case 16:
                    case 17:
                    case 18:
                        break;
                    case 9:
                    case 13:
                        if (!this.shown) return;
                        this.select();
                        break;
                    case 27:
                        if (!this.shown) return;
                        this.hide();
                        break;
                    default:
                        this.lookup();
                }
                t.stopPropagation(), t.preventDefault()
            },
            focus: function() {
                this.focused = !0
            },
            blur: function() {
                this.focused = !1, !this.mousedover && this.shown && this.hide()
            },
            click: function(t) {
                t.stopPropagation(), t.preventDefault(), this.select(), this.$element.focus()
            },
            mouseenter: function(a) {
                this.mousedover = !0, this.$menu.find(".active").removeClass("active"), t(a.currentTarget).addClass("active")
            },
            mouseleave: function() {
                this.mousedover = !1, !this.focused && this.shown && this.hide()
            }
        };
        var a = t.fn.typeahead;
        t.fn.typeahead = function(a) {
            return this.each(function() {
                var i = t(this),
                    n = i.data("typeahead");
                n || i.data("typeahead", n = new e(this, "object" == typeof a && a)), "string" == typeof a && n[a]()
            })
        }, t.fn.typeahead.defaults = {
            source: [],
            items: 8,
            menu: "<ul class=\"typeahead dropdown-menu\"></ul>",
            item: "<li><a href=\"#\"></a></li>",
            minLength: 1
        }, t.fn.typeahead.Constructor = e, t.fn.typeahead.noConflict = function() {
            return t.fn.typeahead = a, this
        }, t(document).on("focus.typeahead.data-api", "[data-provide=\"typeahead\"]", function() {
            var e = t(this);
            e.data("typeahead") || e.typeahead(e.data())
        })
    }(window.jQuery), ! function(e) {
        "use strict";
        var t = function(t, a) {
            this.options = e.extend({}, e.fn.affix.defaults, a), this.$window = e(window).on("scroll.affix.data-api", e.proxy(this.checkPosition, this)).on("click.affix.data-api", e.proxy(function() {
                setTimeout(e.proxy(this.checkPosition, this), 1)
            }, this)), this.$element = e(t), this.checkPosition()
        };
        t.prototype.checkPosition = function() {
            if (this.$element.is(":visible")) {
                var t = e(document).height(),
                    a = this.$window.scrollTop(),
                    i = this.$element.offset(),
                    n = this.options.offset,
                    s = n.bottom,
                    o = n.top,
                    r;
                "object" != typeof n && (s = o = n), "function" == typeof o && (o = n.top()), "function" == typeof s && (s = n.bottom()), r = null != this.unpin && a + this.unpin <= i.top ? !1 : null != s && i.top + this.$element.height() >= t - s ? "bottom" : null != o && a <= o && "top", this.affixed === r || (this.affixed = r, this.unpin = "bottom" == r ? i.top - a : null, this.$element.removeClass("affix affix-top affix-bottom").addClass("affix" + (r ? "-" + r : "")))
            }
        };
        var a = e.fn.affix;
        e.fn.affix = function(a) {
            return this.each(function() {
                var i = e(this),
                    n = i.data("affix");
                n || i.data("affix", n = new t(this, "object" == typeof a && a)), "string" == typeof a && n[a]()
            })
        }, e.fn.affix.Constructor = t, e.fn.affix.defaults = {
            offset: 0
        }, e.fn.affix.noConflict = function() {
            return e.fn.affix = a, this
        }, e(window).on("load", function() {
            e("[data-spy=\"affix\"]").each(function() {
                var t = e(this),
                    a = t.data();
                a.offset = a.offset || {}, a.offsetBottom && (a.offset.bottom = a.offsetBottom), a.offsetTop && (a.offset.top = a.offsetTop), t.affix(a)
            })
        })
    }(window.jQuery),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(jQuery)
    }(function(t) {
        function e() {
            return new Date(Date.UTC.apply(Date, arguments))
        }

        function a() {
            var t = new Date;
            return e(t.getFullYear(), t.getMonth(), t.getDate())
        }

        function i(e, t) {
            return e.getUTCFullYear() === t.getUTCFullYear() && e.getUTCMonth() === t.getUTCMonth() && e.getUTCDate() === t.getUTCDate()
        }

        function n(e) {
            return function() {
                return this[e].apply(this, arguments)
            }
        }

        function s(e) {
            return e && !isNaN(e.getTime())
        }

        function o(e, a) {
            function i(e, t) {
                return t.toLowerCase()
            }
            var n = t(e).data(),
                s = {},
                o = new RegExp("^" + a.toLowerCase() + "([A-Z])"),
                r;
            for (var l in a = new RegExp("^" + a.toLowerCase()), n) a.test(l) && (r = l.replace(o, i), s[r] = n[l]);
            return s
        }

        function r(e) {
            var a = {};
            if (y[e] || (e = e.split("-")[0], !!y[e])) {
                var n = y[e];
                return t.each(f, function(e, t) {
                    t in n && (a[t] = n[t])
                }), a
            }
        }
        var l = Math.min,
            d = Math.max,
            p = function() {
                var e = {
                    get: function(e) {
                        return this.slice(e)[0]
                    },
                    contains: function(e) {
                        for (var t = e && e.valueOf(), a = 0, i = this.length; a < i; a++)
                            if (this[a].valueOf() === t) return a;
                        return -1
                    },
                    remove: function(e) {
                        this.splice(e, 1)
                    },
                    replace: function(e) {
                        e && (!t.isArray(e) && (e = [e]), this.clear(), this.push.apply(this, e))
                    },
                    clear: function() {
                        this.length = 0
                    },
                    copy: function() {
                        var e = new p;
                        return e.replace(this), e
                    }
                };
                return function() {
                    var i = [];
                    return i.push.apply(i, arguments), t.extend(i, e), i
                }
            }(),
            c = function(e, a) {
                t(e).data("datepicker", this), this._process_options(a), this.dates = new p, this.viewDate = this.o.defaultViewDate, this.focusDate = null, this.element = t(e), this.isInline = !1, this.isInput = this.element.is("input"), this.component = !!this.element.hasClass("date") && this.element.find(".add-on, .input-group-addon, .btn"), this.hasInput = this.component && this.element.find("input").length, this.component && 0 === this.component.length && (this.component = !1), this.picker = t(v.template), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && this.picker.addClass("datepicker-rtl"), this.viewMode = this.o.startView, this.o.calendarWeeks && this.picker.find("thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan", function(e, t) {
                    return parseInt(t) + 1
                }), this._allow_update = !1, this.setStartDate(this._o.startDate), this.setEndDate(this._o.endDate), this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled), this.setDaysOfWeekHighlighted(this.o.daysOfWeekHighlighted), this.setDatesDisabled(this.o.datesDisabled), this.fillDow(), this.fillMonths(), this._allow_update = !0, this.update(), this.showMode(), this.isInline && this.show()
            };
        c.prototype = {
            constructor: c,
            _process_options: function(i) {
                this._o = t.extend({}, this._o, i);
                var n = this.o = t.extend({}, this._o),
                    s = n.language;
                switch (y[s] || (s = s.split("-")[0], !y[s] && (s = g.language)), n.language = s, n.startView) {
                    case 2:
                    case "decade":
                        n.startView = 2;
                        break;
                    case 1:
                    case "year":
                        n.startView = 1;
                        break;
                    default:
                        n.startView = 0;
                }
                switch (n.minViewMode) {
                    case 1:
                    case "months":
                        n.minViewMode = 1;
                        break;
                    case 2:
                    case "years":
                        n.minViewMode = 2;
                        break;
                    default:
                        n.minViewMode = 0;
                }
                switch (n.maxViewMode) {
                    case 0:
                    case "days":
                        n.maxViewMode = 0;
                        break;
                    case 1:
                    case "months":
                        n.maxViewMode = 1;
                        break;
                    default:
                        n.maxViewMode = 2;
                }
                n.startView = l(n.startView, n.maxViewMode), n.startView = d(n.startView, n.minViewMode), !0 !== n.multidate && (n.multidate = +n.multidate || !1, !1 !== n.multidate && (n.multidate = d(0, n.multidate))), n.multidateSeparator += "", n.weekStart %= 7, n.weekEnd = (n.weekStart + 6) % 7;
                var o = v.parseFormat(n.format);
                if (n.startDate !== -Infinity && (n.startDate ? n.startDate instanceof Date ? n.startDate = this._local_to_utc(this._zero_time(n.startDate)) : n.startDate = v.parseDate(n.startDate, o, n.language) : n.startDate = -Infinity), n.endDate !== Infinity && (n.endDate ? n.endDate instanceof Date ? n.endDate = this._local_to_utc(this._zero_time(n.endDate)) : n.endDate = v.parseDate(n.endDate, o, n.language) : n.endDate = Infinity), n.daysOfWeekDisabled = n.daysOfWeekDisabled || [], t.isArray(n.daysOfWeekDisabled) || (n.daysOfWeekDisabled = n.daysOfWeekDisabled.split(/[,\s]*/)), n.daysOfWeekDisabled = t.map(n.daysOfWeekDisabled, function(e) {
                        return parseInt(e, 10)
                    }), n.daysOfWeekHighlighted = n.daysOfWeekHighlighted || [], t.isArray(n.daysOfWeekHighlighted) || (n.daysOfWeekHighlighted = n.daysOfWeekHighlighted.split(/[,\s]*/)), n.daysOfWeekHighlighted = t.map(n.daysOfWeekHighlighted, function(e) {
                        return parseInt(e, 10)
                    }), n.datesDisabled = n.datesDisabled || [], !t.isArray(n.datesDisabled)) {
                    var r = [];
                    r.push(v.parseDate(n.datesDisabled, o, n.language)), n.datesDisabled = r
                }
                n.datesDisabled = t.map(n.datesDisabled, function(e) {
                    return v.parseDate(e, o, n.language)
                });
                var p = (n.orientation + "").toLowerCase().split(/\s+/g),
                    c = n.orientation.toLowerCase();
                if (p = t.grep(p, function(e) {
                        return /^auto|left|right|top|bottom$/.test(e)
                    }), n.orientation = {
                        x: "auto",
                        y: "auto"
                    }, !c || "auto" === c);
                else if (1 === p.length) switch (p[0]) {
                    case "top":
                    case "bottom":
                        n.orientation.y = p[0];
                        break;
                    case "left":
                    case "right":
                        n.orientation.x = p[0];
                } else c = t.grep(p, function(e) {
                    return /^left|right$/.test(e)
                }), n.orientation.x = c[0] || "auto", c = t.grep(p, function(e) {
                    return /^top|bottom$/.test(e)
                }), n.orientation.y = c[0] || "auto";
                if (n.defaultViewDate) {
                    var u = n.defaultViewDate.year || new Date().getFullYear(),
                        m = n.defaultViewDate.month || 0,
                        h = n.defaultViewDate.day || 1;
                    n.defaultViewDate = e(u, m, h)
                } else n.defaultViewDate = a()
            },
            _events: [],
            _secondaryEvents: [],
            _applyEvents: function(e) {
                for (var t = 0, a, i, n; t < e.length; t++) a = e[t][0], 2 === e[t].length ? (i = void 0, n = e[t][1]) : 3 === e[t].length && (i = e[t][1], n = e[t][2]), a.on(n, i)
            },
            _unapplyEvents: function(e) {
                for (var t = 0, a, i, n; t < e.length; t++) a = e[t][0], 2 === e[t].length ? (n = void 0, i = e[t][1]) : 3 === e[t].length && (n = e[t][1], i = e[t][2]), a.off(i, n)
            },
            _buildEvents: function() {
                var e = {
                    keyup: t.proxy(function(a) {
                        -1 === t.inArray(a.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update()
                    }, this),
                    keydown: t.proxy(this.keydown, this),
                    paste: t.proxy(this.paste, this)
                };
                !0 === this.o.showOnFocus && (e.focus = t.proxy(this.show, this)), this.isInput ? this._events = [
                    [this.element, e]
                ] : this.component && this.hasInput ? this._events = [
                    [this.element.find("input"), e],
                    [this.component, {
                        click: t.proxy(this.show, this)
                    }]
                ] : this.element.is("div") ? this.isInline = !0 : this._events = [
                    [this.element, {
                        click: t.proxy(this.show, this)
                    }]
                ], this._events.push([this.element, "*", {
                    blur: t.proxy(function(t) {
                        this._focused_from = t.target
                    }, this)
                }], [this.element, {
                    blur: t.proxy(function(t) {
                        this._focused_from = t.target
                    }, this)
                }]), this.o.immediateUpdates && this._events.push([this.element, {
                    "changeYear changeMonth": t.proxy(function(t) {
                        this.update(t.date)
                    }, this)
                }]), this._secondaryEvents = [
                    [this.picker, {
                        click: t.proxy(this.click, this)
                    }],
                    [t(window), {
                        resize: t.proxy(this.place, this)
                    }],
                    [t(document), {
                        mousedown: t.proxy(function(t) {
                            this.element.is(t.target) || this.element.find(t.target).length || this.picker.is(t.target) || this.picker.find(t.target).length || this.picker.hasClass("datepicker-inline") || this.hide()
                        }, this)
                    }]
                ]
            },
            _attachEvents: function() {
                this._detachEvents(), this._applyEvents(this._events)
            },
            _detachEvents: function() {
                this._unapplyEvents(this._events)
            },
            _attachSecondaryEvents: function() {
                this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents)
            },
            _detachSecondaryEvents: function() {
                this._unapplyEvents(this._secondaryEvents)
            },
            _trigger: function(e, a) {
                var i = a || this.dates.get(-1),
                    n = this._utc_to_local(i);
                this.element.trigger({
                    type: e,
                    date: n,
                    dates: t.map(this.dates, this._utc_to_local),
                    format: t.proxy(function(e, t) {
                        0 === arguments.length ? (e = this.dates.length - 1, t = this.o.format) : "string" == typeof e && (t = e, e = this.dates.length - 1), t = t || this.o.format;
                        var a = this.dates.get(e);
                        return v.formatDate(a, t, this.o.language)
                    }, this)
                })
            },
            show: function() {
                var e = this.component ? this.element.find("input") : this.element;
                if (!(e.attr("readonly") && !1 === this.o.enableOnReadonly)) return this.isInline || this.picker.appendTo(this.o.container), this.place(), this.picker.show(), this._attachSecondaryEvents(), this._trigger("show"), (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && this.o.disableTouchKeyboard && t(this.element).blur(), this
            },
            hide: function() {
                return this.isInline ? this : this.picker.is(":visible") ? (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.viewMode = this.o.startView, this.showMode(), this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this._trigger("hide"), this) : this
            },
            remove: function() {
                return this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date, this
            },
            paste: function(e) {
                var a;
                if (e.originalEvent.clipboardData && e.originalEvent.clipboardData.types && -1 !== t.inArray("text/plain", e.originalEvent.clipboardData.types)) a = e.originalEvent.clipboardData.getData("text/plain");
                else if (window.clipboardData) a = window.clipboardData.getData("Text");
                else return;
                this.setDate(a), this.update(), e.preventDefault()
            },
            _utc_to_local: function(e) {
                return e && new Date(e.getTime() + 6e4 * e.getTimezoneOffset())
            },
            _local_to_utc: function(e) {
                return e && new Date(e.getTime() - 6e4 * e.getTimezoneOffset())
            },
            _zero_time: function(e) {
                return e && new Date(e.getFullYear(), e.getMonth(), e.getDate())
            },
            _zero_utc_time: function(e) {
                return e && new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()))
            },
            getDates: function() {
                return t.map(this.dates, this._utc_to_local)
            },
            getUTCDates: function() {
                return t.map(this.dates, function(e) {
                    return new Date(e)
                })
            },
            getDate: function() {
                return this._utc_to_local(this.getUTCDate())
            },
            getUTCDate: function() {
                var e = this.dates.get(-1);
                return "undefined" == typeof e ? null : new Date(e)
            },
            clearDates: function() {
                var e;
                this.isInput ? e = this.element : this.component && (e = this.element.find("input")), e && e.val(""), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide()
            },
            setDates: function() {
                var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
                return this.update.apply(this, e), this._trigger("changeDate"), this.setValue(), this
            },
            setUTCDates: function() {
                var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
                return this.update.apply(this, t.map(e, this._utc_to_local)), this._trigger("changeDate"), this.setValue(), this
            },
            setDate: n("setDates"),
            setUTCDate: n("setUTCDates"),
            setValue: function() {
                var e = this.getFormattedDate();
                return this.isInput ? this.element.val(e) : this.component && this.element.find("input").val(e), this
            },
            getFormattedDate: function(e) {
                e === void 0 && (e = this.o.format);
                var a = this.o.language;
                return t.map(this.dates, function(t) {
                    return v.formatDate(t, e, a)
                }).join(this.o.multidateSeparator)
            },
            setStartDate: function(e) {
                return this._process_options({
                    startDate: e
                }), this.update(), this.updateNavArrows(), this
            },
            setEndDate: function(e) {
                return this._process_options({
                    endDate: e
                }), this.update(), this.updateNavArrows(), this
            },
            setDaysOfWeekDisabled: function(e) {
                return this._process_options({
                    daysOfWeekDisabled: e
                }), this.update(), this.updateNavArrows(), this
            },
            setDaysOfWeekHighlighted: function(e) {
                return this._process_options({
                    daysOfWeekHighlighted: e
                }), this.update(), this
            },
            setDatesDisabled: function(e) {
                this._process_options({
                    datesDisabled: e
                }), this.update(), this.updateNavArrows()
            },
            place: function() {
                if (this.isInline) return this;
                var e = this.picker.outerWidth(),
                    a = this.picker.outerHeight(),
                    i = t(this.o.container),
                    n = i.width(),
                    s = "body" === this.o.container ? t(document).scrollTop() : i.scrollTop(),
                    o = i.offset(),
                    r = [];
                this.element.parents().each(function() {
                    var e = t(this).css("z-index");
                    "auto" !== e && 0 !== e && r.push(parseInt(e))
                });
                var l = d.apply(Math, r) + this.o.zIndexOffset,
                    p = this.component ? this.component.parent().offset() : this.element.offset(),
                    c = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
                    u = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
                    m = p.left - o.left,
                    h = p.top - o.top;
                "body" !== this.o.container && (h += s), this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" === this.o.orientation.x ? 0 > p.left ? (this.picker.addClass("datepicker-orient-left"), m -= p.left - 10) : m + e > n ? (this.picker.addClass("datepicker-orient-right"), m += u - e) : this.picker.addClass("datepicker-orient-left") : (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (m -= e - u));
                var g = this.o.orientation.y,
                    f;
                if ("auto" === g && (f = -s + h - a, g = 0 > f ? "bottom" : "top"), this.picker.addClass("datepicker-orient-" + g), "top" === g ? h -= a + parseInt(this.picker.css("padding-top")) : h += c, this.o.rtl) {
                    var y = n - (m + u);
                    this.picker.css({
                        top: h,
                        right: y,
                        zIndex: l
                    })
                } else this.picker.css({
                    top: h,
                    left: m,
                    zIndex: l
                });
                return this
            },
            _allow_update: !0,
            update: function() {
                if (!this._allow_update) return this;
                var e = this.dates.copy(),
                    a = [],
                    i = !1;
                return arguments.length ? (t.each(arguments, t.proxy(function(e, t) {
                    t instanceof Date && (t = this._local_to_utc(t)), a.push(t)
                }, this)), i = !0) : (a = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val(), a = a && this.o.multidate ? a.split(this.o.multidateSeparator) : [a], delete this.element.data().date), a = t.map(a, t.proxy(function(e) {
                    return v.parseDate(e, this.o.format, this.o.language)
                }, this)), a = t.grep(a, t.proxy(function(e) {
                    return !this.dateWithinRange(e) || !e
                }, this), !0), this.dates.replace(a), this.viewDate = this.dates.length ? new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? new Date(this.o.startDate) : this.viewDate > this.o.endDate ? new Date(this.o.endDate) : this.o.defaultViewDate, i ? this.setValue() : a.length && e + "" !== this.dates + "" && this._trigger("changeDate"), !this.dates.length && e.length && this._trigger("clearDate"), this.fill(), this.element.change(), this
            },
            fillDow: function() {
                var e = this.o.weekStart,
                    t = "<tr>";
                for (this.o.calendarWeeks && (this.picker.find(".datepicker-days .datepicker-switch").attr("colspan", function(e, t) {
                        return parseInt(t) + 1
                    }), t += "<th class=\"cw\">&#160;</th>"); e < this.o.weekStart + 7;) t += "<th class=\"dow\">" + y[this.o.language].daysMin[e++ % 7] + "</th>";
                t += "</tr>", this.picker.find(".datepicker-days thead").append(t)
            },
            fillMonths: function() {
                for (var e = "", t = 0; 12 > t;) e += "<span class=\"month\">" + y[this.o.language].monthsShort[t++] + "</span>";
                this.picker.find(".datepicker-months td").html(e)
            },
            setRange: function(e) {
                e && e.length ? this.range = t.map(e, function(e) {
                    return e.valueOf()
                }) : delete this.range, this.fill()
            },
            getClassNames: function(e) {
                var a = [],
                    i = this.viewDate.getUTCFullYear(),
                    n = this.viewDate.getUTCMonth(),
                    s = new Date;
                return e.getUTCFullYear() < i || e.getUTCFullYear() === i && e.getUTCMonth() < n ? a.push("old") : (e.getUTCFullYear() > i || e.getUTCFullYear() === i && e.getUTCMonth() > n) && a.push("new"), this.focusDate && e.valueOf() === this.focusDate.valueOf() && a.push("focused"), this.o.todayHighlight && e.getUTCFullYear() === s.getFullYear() && e.getUTCMonth() === s.getMonth() && e.getUTCDate() === s.getDate() && a.push("today"), -1 !== this.dates.contains(e) && a.push("active"), (!this.dateWithinRange(e) || this.dateIsDisabled(e)) && a.push("disabled"), -1 !== t.inArray(e.getUTCDay(), this.o.daysOfWeekHighlighted) && a.push("highlighted"), this.range && (e > this.range[0] && e < this.range[this.range.length - 1] && a.push("range"), -1 !== t.inArray(e.valueOf(), this.range) && a.push("selected"), e.valueOf() === this.range[0] && a.push("range-start"), e.valueOf() === this.range[this.range.length - 1] && a.push("range-end")), a
            },
            fill: function() {
                var a = new Date(this.viewDate),
                    n = a.getUTCFullYear(),
                    s = a.getUTCMonth(),
                    o = this.o.startDate === -Infinity ? -Infinity : this.o.startDate.getUTCFullYear(),
                    r = this.o.startDate === -Infinity ? -Infinity : this.o.startDate.getUTCMonth(),
                    l = this.o.endDate === Infinity ? Infinity : this.o.endDate.getUTCFullYear(),
                    d = this.o.endDate === Infinity ? Infinity : this.o.endDate.getUTCMonth(),
                    p = y[this.o.language].today || y.en.today || "",
                    c = y[this.o.language].clear || y.en.clear || "",
                    u = y[this.o.language].titleFormat || y.en.titleFormat,
                    m;
                if (!(isNaN(n) || isNaN(s))) {
                    this.picker.find(".datepicker-days thead .datepicker-switch").text(v.formatDate(new e(n, s), u, this.o.language)), this.picker.find("tfoot .today").text(p).toggle(!1 !== this.o.todayBtn), this.picker.find("tfoot .clear").text(c).toggle(!1 !== this.o.clearBtn), this.picker.find("thead .datepicker-title").text(this.o.title).toggle("" !== this.o.title), this.updateNavArrows(), this.fillMonths();
                    var h = e(n, s - 1, 28),
                        g = v.getDaysInMonth(h.getUTCFullYear(), h.getUTCMonth());
                    h.setUTCDate(g), h.setUTCDate(g - (h.getUTCDay() - this.o.weekStart + 7) % 7);
                    var f = new Date(h);
                    100 > h.getUTCFullYear() && f.setUTCFullYear(h.getUTCFullYear()), f.setUTCDate(f.getUTCDate() + 42), f = f.valueOf();
                    for (var b = [], x; h.valueOf() < f;) {
                        if (h.getUTCDay() === this.o.weekStart && (b.push("<tr>"), this.o.calendarWeeks)) {
                            var w = new Date(+h + 864e5 * ((this.o.weekStart - h.getUTCDay() - 7) % 7)),
                                C = new Date(+w + 864e5 * ((11 - w.getUTCDay()) % 7)),
                                S = new Date(+(S = e(C.getUTCFullYear(), 0, 1)) + 864e5 * ((11 - S.getUTCDay()) % 7)),
                                T = (C - S) / 864e5 / 7 + 1;
                            b.push("<td class=\"cw\">" + T + "</td>")
                        }
                        if (x = this.getClassNames(h), x.push("day"), this.o.beforeShowDay !== t.noop) {
                            var k = this.o.beforeShowDay(this._utc_to_local(h));
                            void 0 === k ? k = {} : "boolean" == typeof k ? k = {
                                enabled: k
                            } : "string" == typeof k && (k = {
                                classes: k
                            }), !1 === k.enabled && x.push("disabled"), k.classes && (x = x.concat(k.classes.split(/\s+/))), k.tooltip && (m = k.tooltip)
                        }
                        x = t.unique(x), b.push("<td class=\"" + x.join(" ") + "\"" + (m ? " title=\"" + m + "\"" : "") + ">" + h.getUTCDate() + "</td>"), m = null, h.getUTCDay() === this.o.weekEnd && b.push("</tr>"), h.setUTCDate(h.getUTCDate() + 1)
                    }
                    this.picker.find(".datepicker-days tbody").empty().append(b.join(""));
                    var $ = y[this.o.language].monthsTitle || y.en.monthsTitle || "Months",
                        D = this.picker.find(".datepicker-months").find(".datepicker-switch").text(2 > this.o.maxViewMode ? $ : n).end().find("span").removeClass("active");
                    if (t.each(this.dates, function(e, t) {
                            t.getUTCFullYear() === n && D.eq(t.getUTCMonth()).addClass("active")
                        }), (n < o || n > l) && D.addClass("disabled"), n === o && D.slice(0, r).addClass("disabled"), n === l && D.slice(d + 1).addClass("disabled"), this.o.beforeShowMonth !== t.noop) {
                        var E = this;
                        t.each(D, function(e, a) {
                            if (!t(a).hasClass("disabled")) {
                                var i = new Date(n, e, 1),
                                    s = E.o.beforeShowMonth(i);
                                !1 === s && t(a).addClass("disabled")
                            }
                        })
                    }
                    b = "", n = 10 * parseInt(n / 10, 10);
                    var P = this.picker.find(".datepicker-years").find(".datepicker-switch").text(n + "-" + (n + 9)).end().find("td");
                    n -= 1;
                    for (var z = t.map(this.dates, function(e) {
                            return e.getUTCFullYear()
                        }), I = -1, i; 11 > I; I++) {
                        if (i = ["year"], m = null, -1 === I ? i.push("old") : 10 === I && i.push("new"), -1 !== t.inArray(n, z) && i.push("active"), (n < o || n > l) && i.push("disabled"), this.o.beforeShowYear !== t.noop) {
                            var A = this.o.beforeShowYear(new Date(n, 0, 1));
                            void 0 === A ? A = {} : "boolean" == typeof A ? A = {
                                enabled: A
                            } : "string" == typeof A && (A = {
                                classes: A
                            }), !1 === A.enabled && i.push("disabled"), A.classes && (i = i.concat(A.classes.split(/\s+/))), A.tooltip && (m = A.tooltip)
                        }
                        b += "<span class=\"" + i.join(" ") + "\"" + (m ? " title=\"" + m + "\"" : "") + ">" + n + "</span>", n += 1
                    }
                    P.html(b)
                }
            },
            updateNavArrows: function() {
                if (this._allow_update) {
                    var e = new Date(this.viewDate),
                        t = e.getUTCFullYear(),
                        a = e.getUTCMonth();
                    switch (this.viewMode) {
                        case 0:
                            this.o.startDate !== -Infinity && t <= this.o.startDate.getUTCFullYear() && a <= this.o.startDate.getUTCMonth() ? this.picker.find(".prev").css({
                                visibility: "hidden"
                            }) : this.picker.find(".prev").css({
                                visibility: "visible"
                            }), this.o.endDate !== Infinity && t >= this.o.endDate.getUTCFullYear() && a >= this.o.endDate.getUTCMonth() ? this.picker.find(".next").css({
                                visibility: "hidden"
                            }) : this.picker.find(".next").css({
                                visibility: "visible"
                            });
                            break;
                        case 1:
                        case 2:
                            this.o.startDate !== -Infinity && t <= this.o.startDate.getUTCFullYear() || 2 > this.o.maxViewMode ? this.picker.find(".prev").css({
                                visibility: "hidden"
                            }) : this.picker.find(".prev").css({
                                visibility: "visible"
                            }), this.o.endDate !== Infinity && t >= this.o.endDate.getUTCFullYear() || 2 > this.o.maxViewMode ? this.picker.find(".next").css({
                                visibility: "hidden"
                            }) : this.picker.find(".next").css({
                                visibility: "visible"
                            });
                    }
                }
            },
            click: function(i) {
                i.preventDefault(), i.stopPropagation();
                var n = t(i.target).closest("span, td, th"),
                    s, o, r;
                if (1 === n.length) switch (n[0].nodeName.toLowerCase()) {
                    case "th":
                        switch (n[0].className) {
                            case "datepicker-switch":
                                this.showMode(1);
                                break;
                            case "prev":
                            case "next":
                                var l = v.modes[this.viewMode].navStep * ("prev" === n[0].className ? -1 : 1);
                                switch (this.viewMode) {
                                    case 0:
                                        this.viewDate = this.moveMonth(this.viewDate, l), this._trigger("changeMonth", this.viewDate);
                                        break;
                                    case 1:
                                    case 2:
                                        this.viewDate = this.moveYear(this.viewDate, l), 1 === this.viewMode && this._trigger("changeYear", this.viewDate);
                                }
                                this.fill();
                                break;
                            case "today":
                                this.showMode(-2);
                                var d = "linked" === this.o.todayBtn ? null : "view";
                                this._setDate(a(), d);
                                break;
                            case "clear":
                                this.clearDates();
                        }
                        break;
                    case "span":
                        n.hasClass("disabled") || (this.viewDate.setUTCDate(1), n.hasClass("month") ? (r = 1, o = n.parent().find("span").index(n), s = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(o), this._trigger("changeMonth", this.viewDate), 1 === this.o.minViewMode ? (this._setDate(e(s, o, r)), this.showMode()) : this.showMode(-1)) : (r = 1, o = 0, s = parseInt(n.text(), 10) || 0, this.viewDate.setUTCFullYear(s), this._trigger("changeYear", this.viewDate), 2 === this.o.minViewMode && this._setDate(e(s, o, r)), this.showMode(-1)), this.fill());
                        break;
                    case "td":
                        n.hasClass("day") && !n.hasClass("disabled") && (r = parseInt(n.text(), 10) || 1, s = this.viewDate.getUTCFullYear(), o = this.viewDate.getUTCMonth(), n.hasClass("old") ? 0 === o ? (o = 11, s -= 1) : o -= 1 : n.hasClass("new") && (11 === o ? (o = 0, s += 1) : o += 1), this._setDate(e(s, o, r)));
                }
                this.picker.is(":visible") && this._focused_from && t(this._focused_from).focus(), delete this._focused_from
            },
            _toggle_multidate: function(e) {
                var t = this.dates.contains(e);
                if (e || this.dates.clear(), -1 === t ? !1 === this.o.multidate ? (this.dates.clear(), this.dates.push(e)) : this.dates.push(e) : (!0 === this.o.multidate || 1 < this.o.multidate || this.o.toggleActive) && this.dates.remove(t), "number" == typeof this.o.multidate)
                    for (; this.dates.length > this.o.multidate;) this.dates.remove(0)
            },
            _setDate: function(e, t) {
                t && "date" !== t || this._toggle_multidate(e && new Date(e)), t && "view" !== t || (this.viewDate = e && new Date(e)), this.fill(), this.setValue(), t && "view" === t || this._trigger("changeDate");
                var a;
                this.isInput ? a = this.element : this.component && (a = this.element.find("input")), a && a.change(), this.o.autoclose && (!t || "date" === t) && this.hide()
            },
            moveDay: function(e, t) {
                var a = new Date(e);
                return a.setUTCDate(e.getUTCDate() + t), a
            },
            moveWeek: function(e, t) {
                return this.moveDay(e, 7 * t)
            },
            moveMonth: function(e, t) {
                if (!s(e)) return this.o.defaultViewDate;
                if (!t) return e;
                var a = new Date(e.valueOf()),
                    n = a.getUTCDate(),
                    o = a.getUTCMonth(),
                    r = Math.abs(t),
                    l, d;
                if (t = 0 < t ? 1 : -1, 1 === r) d = -1 === t ? function() {
                    return a.getUTCMonth() === o
                } : function() {
                    return a.getUTCMonth() !== l
                }, l = o + t, a.setUTCMonth(l), (0 > l || 11 < l) && (l = (l + 12) % 12);
                else {
                    for (var p = 0; p < r; p++) a = this.moveMonth(a, t);
                    l = a.getUTCMonth(), a.setUTCDate(n), d = function() {
                        return l !== a.getUTCMonth()
                    }
                }
                for (; d();) a.setUTCDate(--n), a.setUTCMonth(l);
                return a
            },
            moveYear: function(e, t) {
                return this.moveMonth(e, 12 * t)
            },
            moveAvailableDate: function(e, t, a) {
                do {
                    if (e = this[a](e, t), !this.dateWithinRange(e)) return !1;
                    a = "moveDay"
                } while (this.dateIsDisabled(e));
                return e
            },
            weekOfDateIsDisabled: function(e) {
                return -1 !== t.inArray(e.getUTCDay(), this.o.daysOfWeekDisabled)
            },
            dateIsDisabled: function(e) {
                return this.weekOfDateIsDisabled(e) || 0 < t.grep(this.o.datesDisabled, function(t) {
                    return i(e, t)
                }).length
            },
            dateWithinRange: function(e) {
                return e >= this.o.startDate && e <= this.o.endDate
            },
            keydown: function(t) {
                if (!this.picker.is(":visible")) return void((40 === t.keyCode || 27 === t.keyCode) && (this.show(), t.stopPropagation()));
                var e = !1,
                    a = this.focusDate || this.viewDate,
                    i, n;
                switch (t.keyCode) {
                    case 27:
                        this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), t.preventDefault(), t.stopPropagation();
                        break;
                    case 37:
                    case 38:
                    case 39:
                    case 40:
                        if (!this.o.keyboardNavigation || 7 === this.o.daysOfWeekDisabled.length) break;
                        i = 37 === t.keyCode || 38 === t.keyCode ? -1 : 1, t.ctrlKey ? (n = this.moveAvailableDate(a, i, "moveYear"), n && this._trigger("changeYear", this.viewDate)) : t.shiftKey ? (n = this.moveAvailableDate(a, i, "moveMonth"), n && this._trigger("changeMonth", this.viewDate)) : 37 === t.keyCode || 39 === t.keyCode ? n = this.moveAvailableDate(a, i, "moveDay") : !this.weekOfDateIsDisabled(a) && (n = this.moveAvailableDate(a, i, "moveWeek")), n && (this.focusDate = this.viewDate = n, this.setValue(), this.fill(), t.preventDefault());
                        break;
                    case 13:
                        if (!this.o.forceParse) break;
                        a = this.focusDate || this.dates.get(-1) || this.viewDate, this.o.keyboardNavigation && (this._toggle_multidate(a), e = !0), this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(":visible") && (t.preventDefault(), t.stopPropagation(), this.o.autoclose && this.hide());
                        break;
                    case 9:
                        this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide();
                }
                if (e) {
                    this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate");
                    var s;
                    this.isInput ? s = this.element : this.component && (s = this.element.find("input")), s && s.change()
                }
            },
            showMode: function(e) {
                e && (this.viewMode = d(this.o.minViewMode, l(this.o.maxViewMode, this.viewMode + e))), this.picker.children("div").hide().filter(".datepicker-" + v.modes[this.viewMode].clsName).show(), this.updateNavArrows()
            }
        };
        var u = function(e, a) {
            t(e).data("datepicker", this), this.element = t(e), this.inputs = t.map(a.inputs, function(e) {
                return e.jquery ? e[0] : e
            }), delete a.inputs, h.call(t(this.inputs), a).on("changeDate", t.proxy(this.dateUpdated, this)), this.pickers = t.map(this.inputs, function(e) {
                return t(e).data("datepicker")
            }), this.updateDates()
        };
        u.prototype = {
            updateDates: function() {
                this.dates = t.map(this.pickers, function(e) {
                    return e.getUTCDate()
                }), this.updateRanges()
            },
            updateRanges: function() {
                var e = t.map(this.dates, function(e) {
                    return e.valueOf()
                });
                t.each(this.pickers, function(t, a) {
                    a.setRange(e)
                })
            },
            dateUpdated: function(a) {
                if (!this.updating) {
                    this.updating = !0;
                    var e = t(a.target).data("datepicker");
                    if ("undefined" != typeof e) {
                        var n = e.getUTCDate(),
                            s = t.inArray(a.target, this.inputs),
                            i = s - 1,
                            o = s + 1,
                            r = this.inputs.length;
                        if (-1 !== s) {
                            if (t.each(this.pickers, function(e, t) {
                                    t.getUTCDate() || t.setUTCDate(n)
                                }), n < this.dates[i])
                                for (; 0 <= i && n < this.dates[i];) this.pickers[i--].setUTCDate(n);
                            else if (n > this.dates[o])
                                for (; o < r && n > this.dates[o];) this.pickers[o++].setUTCDate(n);
                            this.updateDates(), delete this.updating
                        }
                    }
                }
            },
            remove: function() {
                t.map(this.pickers, function(e) {
                    e.remove()
                }), delete this.element.data().datepicker
            }
        };
        var m = t.fn.datepicker,
            h = function(e) {
                var a = Array.apply(null, arguments);
                a.shift();
                var i;
                if (this.each(function() {
                        var n = t(this),
                            s = n.data("datepicker"),
                            l = "object" == typeof e && e;
                        if (!s) {
                            var d = o(this, "date"),
                                p = t.extend({}, g, d, l),
                                m = r(p.language),
                                h = t.extend({}, g, m, d, l);
                            n.hasClass("input-daterange") || h.inputs ? (t.extend(h, {
                                inputs: h.inputs || n.find("input").toArray()
                            }), s = new u(this, h)) : s = new c(this, h), n.data("datepicker", s)
                        }
                        "string" == typeof e && "function" == typeof s[e] && (i = s[e].apply(s, a))
                    }), void 0 === i || i instanceof c || i instanceof u) return this;
                if (1 < this.length) throw new Error("Using only allowed for the collection of a single element (" + e + " function)");
                else return i
            };
        t.fn.datepicker = h;
        var g = t.fn.datepicker.defaults = {
                autoclose: !1,
                beforeShowDay: t.noop,
                beforeShowMonth: t.noop,
                beforeShowYear: t.noop,
                calendarWeeks: !1,
                clearBtn: !1,
                toggleActive: !1,
                daysOfWeekDisabled: [],
                daysOfWeekHighlighted: [],
                datesDisabled: [],
                endDate: Infinity,
                forceParse: !0,
                format: "mm/dd/yyyy",
                keyboardNavigation: !0,
                language: "en",
                minViewMode: 0,
                maxViewMode: 2,
                multidate: !1,
                multidateSeparator: ",",
                orientation: "auto",
                rtl: !1,
                startDate: -Infinity,
                startView: 0,
                todayBtn: !1,
                todayHighlight: !1,
                weekStart: 0,
                disableTouchKeyboard: !1,
                enableOnReadonly: !0,
                showOnFocus: !0,
                zIndexOffset: 10,
                container: "body",
                immediateUpdates: !1,
                title: ""
            },
            f = t.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
        t.fn.datepicker.Constructor = c;
        var y = t.fn.datepicker.dates = {
                en: {
                    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    today: "Today",
                    clear: "Clear",
                    titleFormat: "MM yyyy"
                }
            },
            v = {
                modes: [{
                    clsName: "days",
                    navFnc: "Month",
                    navStep: 1
                }, {
                    clsName: "months",
                    navFnc: "FullYear",
                    navStep: 1
                }, {
                    clsName: "years",
                    navFnc: "FullYear",
                    navStep: 10
                }],
                isLeapYear: function(e) {
                    return 0 == e % 4 && 0 != e % 100 || 0 == e % 400
                },
                getDaysInMonth: function(e, t) {
                    return [31, v.isLeapYear(e) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t]
                },
                validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
                nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
                parseFormat: function(e) {
                    if ("function" == typeof e.toValue && "function" == typeof e.toDisplay) return e;
                    var t = e.replace(this.validParts, "\0").split("\0"),
                        a = e.match(this.validParts);
                    if (!t || !t.length || !a || 0 === a.length) throw new Error("Invalid date format.");
                    return {
                        separators: t,
                        parts: a
                    }
                },
                parseDate: function(n, o, r) {
                    function l() {
                        var e = this.slice(0, u[g].length),
                            t = u[g].slice(0, e.length);
                        return e.toLowerCase() === t.toLowerCase()
                    }
                    if (n) {
                        if (n instanceof Date) return n;
                        if ("string" == typeof o && (o = v.parseFormat(o)), o.toValue) return o.toValue(n, o, r);
                        var d = /([\-+]\d+)([dmwy])/,
                            u = n.match(/([\-+]\d+)([dmwy])/g),
                            p = {
                                d: "moveDay",
                                m: "moveMonth",
                                w: "moveWeek",
                                y: "moveYear"
                            },
                            m, h, g, i;
                        if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(n)) {
                            for (n = new Date, g = 0; g < u.length; g++) m = d.exec(u[g]), h = parseInt(m[1]), i = p[m[2]], n = c.prototype[i](n, h);
                            return e(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate())
                        }
                        u = n && n.match(this.nonpunctuation) || [], n = new Date;
                        var f = {},
                            b = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
                            x = {
                                yyyy: function(e, t) {
                                    return e.setUTCFullYear(t)
                                },
                                yy: function(e, t) {
                                    return e.setUTCFullYear(2e3 + t)
                                },
                                m: function(e, t) {
                                    if (isNaN(e)) return e;
                                    for (t -= 1; 0 > t;) t += 12;
                                    for (t %= 12, e.setUTCMonth(t); e.getUTCMonth() !== t;) e.setUTCDate(e.getUTCDate() - 1);
                                    return e
                                },
                                d: function(e, t) {
                                    return e.setUTCDate(t)
                                }
                            },
                            w, C;
                        x.M = x.MM = x.mm = x.m, x.dd = x.d, n = a();
                        var S = o.parts.slice();
                        if (u.length !== S.length && (S = t(S).filter(function(e, a) {
                                return -1 !== t.inArray(a, b)
                            }).toArray()), u.length === S.length) {
                            var T;
                            for (g = 0, T = S.length; g < T; g++) w = parseInt(u[g], 10), m = S[g], isNaN(w) && ("MM" === m ? (C = t(y[r].months).filter(l), w = t.inArray(C[0], y[r].months) + 1) : "M" === m ? (C = t(y[r].monthsShort).filter(l), w = t.inArray(C[0], y[r].monthsShort) + 1) : void 0), f[m] = w;
                            var k, $;
                            for (g = 0; g < b.length; g++) $ = b[g], $ in f && !isNaN(f[$]) && (k = new Date(n), x[$](k, f[$]), !isNaN(k) && (n = k))
                        }
                        return n
                    }
                },
                formatDate: function(e, a, n) {
                    if (!e) return "";
                    if ("string" == typeof a && (a = v.parseFormat(a)), a.toDisplay) return a.toDisplay(e, a, n);
                    var s = {
                        d: e.getUTCDate(),
                        D: y[n].daysShort[e.getUTCDay()],
                        DD: y[n].days[e.getUTCDay()],
                        m: e.getUTCMonth() + 1,
                        M: y[n].monthsShort[e.getUTCMonth()],
                        MM: y[n].months[e.getUTCMonth()],
                        yy: e.getUTCFullYear().toString().substring(2),
                        yyyy: e.getUTCFullYear()
                    };
                    s.dd = (10 > s.d ? "0" : "") + s.d, s.mm = (10 > s.m ? "0" : "") + s.m, e = [];
                    for (var o = t.extend([], a.separators), r = 0, i = a.parts.length; r <= i; r++) o.length && e.push(o.shift()), e.push(s[a.parts[r]]);
                    return e.join("")
                },
                headTemplate: "<thead><tr><th colspan=\"7\" class=\"datepicker-title\"></th></tr><tr><th class=\"prev\">&#171;</th><th colspan=\"5\" class=\"datepicker-switch\"></th><th class=\"next\">&#187;</th></tr></thead>",
                contTemplate: "<tbody><tr><td colspan=\"7\"></td></tr></tbody>",
                footTemplate: "<tfoot><tr><th colspan=\"7\" class=\"today\"></th></tr><tr><th colspan=\"7\" class=\"clear\"></th></tr></tfoot>"
            };
        v.template = "<div class=\"datepicker\"><div class=\"datepicker-days\"><table class=\" table-condensed\">" + v.headTemplate + "<tbody></tbody>" + v.footTemplate + "</table></div><div class=\"datepicker-months\"><table class=\"table-condensed\">" + v.headTemplate + v.contTemplate + v.footTemplate + "</table></div><div class=\"datepicker-years\"><table class=\"table-condensed\">" + v.headTemplate + v.contTemplate + v.footTemplate + "</table></div></div>", t.fn.datepicker.DPGlobal = v, t.fn.datepicker.noConflict = function() {
            return t.fn.datepicker = m, this
        }, t.fn.datepicker.version = "1.5.1", t(document).on("focus.datepicker.data-api click.datepicker.data-api", "[data-provide=\"datepicker\"]", function(a) {
            var e = t(this);
            e.data("datepicker") || (a.preventDefault(), h.call(e, "show"))
        }), t(function() {
            h.call(t("[data-provide=\"datepicker-inline\"]"))
        })
    }), ! function(e) {
        e.fn.datepicker.dates.de = {
            days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
            daysShort: ["Son", "Mon", "Die", "Mit", "Don", "Fre", "Sam"],
            daysMin: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            months: ["Januar", "Februar", "M\xE4rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
            monthsShort: ["Jan", "Feb", "M\xE4r", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
            today: "Heute",
            monthsTitle: "Monate",
            clear: "L\xF6schen",
            weekStart: 1,
            format: "dd.mm.yyyy"
        }
    }(jQuery), ! function(e) {
        e.fn.datepicker.dates.es = {
            days: ["Domingo", "Lunes", "Martes", "Mi\xE9rcoles", "Jueves", "Viernes", "S\xE1bado"],
            daysShort: ["Dom", "Lun", "Mar", "Mi\xE9", "Jue", "Vie", "S\xE1b"],
            daysMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
            months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
            today: "Hoy",
            monthsTitle: "Meses",
            clear: "Borrar",
            weekStart: 1,
            format: "dd/mm/yyyy"
        }
    }(jQuery), ! function(e) {
        e.fn.datepicker.dates.fr = {
            days: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
            daysShort: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
            daysMin: ["d", "l", "ma", "me", "j", "v", "s"],
            months: ["janvier", "f\xE9vrier", "mars", "avril", "mai", "juin", "juillet", "ao\xFBt", "septembre", "octobre", "novembre", "d\xE9cembre"],
            monthsShort: ["janv.", "f\xE9vr.", "mars", "avril", "mai", "juin", "juil.", "ao\xFBt", "sept.", "oct.", "nov.", "d\xE9c."],
            today: "Aujourd'hui",
            monthsTitle: "Mois",
            clear: "Effacer",
            weekStart: 1,
            format: "dd/mm/yyyy"
        }
    }(jQuery), ! function(e) {
        e.fn.datepicker.dates.nl = {
            days: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
            daysShort: ["zo", "ma", "di", "wo", "do", "vr", "za"],
            daysMin: ["zo", "ma", "di", "wo", "do", "vr", "za"],
            months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
            monthsShort: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
            today: "Vandaag",
            monthsTitle: "Maanden",
            clear: "Wissen",
            weekStart: 1,
            format: "dd-mm-yyyy"
        }
    }(jQuery), ! function(t) {
        "use strict";
        var e = function(e, a) {
            this.$element = t(e), this.options = t.extend({}, t.fn.collapse.defaults, a), this.options.parent && (this.$parent = t(this.options.parent)), this.options.toggle && this.toggle()
        };
        e.prototype = {
            constructor: e,
            dimension: function() {
                var e = this.$element.hasClass("width");
                return e ? "width" : "height"
            },
            show: function() {
                var e, a, i, n;
                if (!(this.transitioning || this.$element.hasClass("in"))) {
                    if (e = this.dimension(), a = t.camelCase(["scroll", e].join("-")), i = this.$parent && this.$parent.find("> .accordion-group > .in"), i && i.length) {
                        if (n = i.data("collapse"), n && n.transitioning) return;
                        i.collapse("hide"), n || i.data("collapse", null)
                    }
                    this.$element[e](0), this.transition("addClass", t.Event("show"), "shown"), t.support.transition && this.$element[e](this.$element[0][a])
                }
            },
            hide: function() {
                var e;
                this.transitioning || !this.$element.hasClass("in") || (e = this.dimension(), this.reset(this.$element[e]()), this.transition("removeClass", t.Event("hide"), "hidden"), this.$element[e](0))
            },
            reset: function(e) {
                var t = this.dimension();
                return this.$element.removeClass("collapse")[t](e || "auto")[0].offsetWidth, this.$element[null === e ? "removeClass" : "addClass"]("collapse"), this
            },
            transition: function(e, a, i) {
                var n = this,
                    s = function() {
                        "show" == a.type && n.reset(), n.transitioning = 0, n.$element.trigger(i)
                    };
                this.$element.trigger(a);
                a.isDefaultPrevented() || (this.transitioning = 1, this.$element[e]("in"), t.support.transition && this.$element.hasClass("collapse") ? this.$element.one(t.support.transition.end, s) : s())
            },
            toggle: function() {
                this[this.$element.hasClass("in") ? "hide" : "show"]()
            }
        };
        var a = t.fn.collapse;
        t.fn.collapse = function(a) {
            return this.each(function() {
                var i = t(this),
                    n = i.data("collapse"),
                    s = t.extend({}, t.fn.collapse.defaults, i.data(), "object" == typeof a && a);
                n || i.data("collapse", n = new e(this, s)), "string" == typeof a && n[a]()
            })
        }, t.fn.collapse.defaults = {
            toggle: !0
        }, t.fn.collapse.Constructor = e, t.fn.collapse.noConflict = function() {
            return t.fn.collapse = a, this
        }, t(document).on("click.collapse.data-api", "[data-toggle=collapse]", function(a) {
            var e = t(this),
                i = e.attr("data-target") || a.preventDefault() || (s = e.attr("href")) && s.replace(/.*(?=#[^\s]+$)/, ""),
                n = t(i).data("collapse") ? "toggle" : e.data(),
                s;
            e[t(i).hasClass("in") ? "addClass" : "removeClass"]("collapsed"), t(i).collapse(n)
        })
    }(window.jQuery);
(function(e, t) {
    "use strict";
    var a = Math.round;
    t.SliderPro = {
        modules: [],
        addModule: function(e, a) {
            this.modules.push(e), t.extend(i.prototype, a)
        }
    };
    var n = t.SliderPro.namespace = "SliderPro",
        i = function(e, a) {
            this.instance = e, this.$slider = t(this.instance), this.$slides = null, this.$slidesMask = null, this.$slidesContainer = null, this.slides = [], this.slidesOrder = [], this.options = a, this.settings = {}, this.originalSettings = {}, this.originalGotoSlide = null, this.selectedSlideIndex = 0, this.previousSlideIndex = 0, this.middleSlidePosition = 0, this.supportedAnimation = null, this.vendorPrefix = null, this.transitionEvent = null, this.positionProperty = null, this.isIE = null, this.slidesPosition = 0, this.slideWidth = 0, this.slideHeight = 0, this.slideSize = 0, this.previousSlideWidth = 0, this.previousSlideHeight = 0, this.previousWindowWidth = 0, this.previousWindowHeight = 0, this.visibleOffset = 0, this.allowResize = !0, this.uniqueId = new Date().valueOf(), this.breakpoints = [], this.currentBreakpoint = -1, this.shuffledIndexes = [], this._init()
        };
    i.prototype = {
        _init: function() {
            var a = this;
            this.supportedAnimation = o.getSupportedAnimation(), this.vendorPrefix = o.getVendorPrefix(), this.transitionEvent = o.getTransitionEvent(), this.isIE = o.checkIE(), this.$slider.removeClass("sp-no-js"), e.navigator.userAgent.match(/(iPad|iPhone|iPod)/g) && this.$slider.addClass("ios");
            var s = /(msie) ([\w.]+)/,
                r = s.exec(e.navigator.userAgent.toLowerCase());
            this.isIE && this.$slider.addClass("ie"), null !== r && this.$slider.addClass("ie" + parseInt(r[2], 10)), this.$slidesContainer = t("<div class=\"sp-slides-container\"></div>").appendTo(this.$slider), this.$slidesMask = t("<div class=\"sp-mask\"></div>").appendTo(this.$slidesContainer), this.$slides = this.$slider.find(".sp-slides").appendTo(this.$slidesMask), this.$slider.find(".sp-slide").appendTo(this.$slides);
            var d = t.SliderPro.modules;
            if ("undefined" != typeof d)
                for (var p = 0, i; p < d.length; p++) i = d[p].substring(0, 1).toLowerCase() + d[p].substring(1) + "Defaults", "undefined" != typeof this[i] && t.extend(this.defaults, this[i]);
            if (this.settings = t.extend({}, this.defaults, this.options), "undefined" != typeof d)
                for (var c = 0; c < d.length; c++) "undefined" != typeof this["init" + d[c]] && this["init" + d[c]]();
            if (this.originalSettings = t.extend({}, this.settings), this.originalGotoSlide = this.gotoSlide, null !== this.settings.breakpoints) {
                for (var u in this.settings.breakpoints) this.breakpoints.push({
                    size: parseInt(u, 10),
                    properties: this.settings.breakpoints[u]
                });
                this.breakpoints = this.breakpoints.sort(function(e, t) {
                    return e.size >= t.size ? 1 : -1
                })
            }
            if (this.selectedSlideIndex = this.settings.startSlide, !0 === this.settings.shuffle) {
                var m = this.$slides.find(".sp-slide"),
                    h = [];
                m.each(function(e) {
                    a.shuffledIndexes.push(e)
                });
                for (var g = this.shuffledIndexes.length - 1; 0 < g; g--) {
                    var f = Math.floor(Math.random() * (g + 1)),
                        l = this.shuffledIndexes[g];
                    this.shuffledIndexes[g] = this.shuffledIndexes[f], this.shuffledIndexes[f] = l
                }
                t.each(this.shuffledIndexes, function(e, t) {
                    h.push(m[t])
                }), this.$slides.empty().append(h)
            }
            t(e).on("resize." + this.uniqueId + "." + n, function() {
                var i = t(e).width(),
                    n = t(e).height();
                !1 === a.allowResize || a.previousWindowWidth === i && a.previousWindowHeight === n || (a.previousWindowWidth = i, a.previousWindowHeight = n, a.allowResize = !1, setTimeout(function() {
                    a.resize(), a.allowResize = !0
                }, 200))
            }), this.on("update." + n, function() {
                a.previousSlideWidth = 0, a.resize()
            }), this.update(), this.$slides.find(".sp-slide").eq(this.selectedSlideIndex).addClass("sp-selected"), this.trigger({
                type: "init"
            }), t.isFunction(this.settings.init) && this.settings.init.call(this, {
                type: "init"
            })
        },
        update: function() {
            var e = this;
            "horizontal" === this.settings.orientation ? (this.$slider.removeClass("sp-vertical").addClass("sp-horizontal"), this.$slider.css({
                height: "",
                "max-height": ""
            }), this.$slides.find(".sp-slide").css("top", "")) : "vertical" === this.settings.orientation && (this.$slider.removeClass("sp-horizontal").addClass("sp-vertical"), this.$slides.find(".sp-slide").css("left", "")), this.positionProperty = "horizontal" === this.settings.orientation ? "left" : "top", this.gotoSlide = this.originalGotoSlide;
            for (var a = this.slides.length - 1; 0 <= a; a--)
                if (0 === this.$slider.find(".sp-slide[data-index=\"" + a + "\"]").length) {
                    var i = this.slides[a];
                    i.destroy(), this.slides.splice(a, 1)
                }
            this.slidesOrder.length = 0, this.$slider.find(".sp-slide").each(function(a) {
                var i = t(this);
                "undefined" == typeof i.attr("data-init") ? e._createSlide(a, i) : e.slides[a].setIndex(a), e.slidesOrder.push(a)
            }), this.middleSlidePosition = parseInt((e.slidesOrder.length - 1) / 2, 10), !0 === this.settings.loop && this._updateSlidesOrder(), this.trigger({
                type: "update"
            }), t.isFunction(this.settings.update) && this.settings.update.call(this, {
                type: "update"
            })
        },
        _createSlide: function(e, a) {
            var i = this,
                n = new s(t(a), e, this.settings);
            this.slides.splice(e, 0, n)
        },
        _updateSlidesOrder: function() {
            var e = t.inArray(this.selectedSlideIndex, this.slidesOrder) - this.middleSlidePosition,
                a, n;
            if (0 > e)
                for (a = this.slidesOrder.splice(e, Math.abs(e)), n = a.length - 1; 0 <= n; n--) this.slidesOrder.unshift(a[n]);
            else if (0 < e)
                for (a = this.slidesOrder.splice(0, e), n = 0; n <= a.length - 1; n++) this.slidesOrder.push(a[n])
        },
        _updateSlidesPosition: function() {
            for (var e = parseInt(this.$slides.find(".sp-slide").eq(this.selectedSlideIndex).css(this.positionProperty), 10), t = 0, a; t < this.slidesOrder.length; t++) a = this.$slides.find(".sp-slide").eq(this.slidesOrder[t]), a.css(this.positionProperty, e + (t - this.middleSlidePosition) * (this.slideSize + this.settings.slideDistance))
        },
        _resetSlidesPosition: function() {
            for (var e = 0, t; e < this.slidesOrder.length; e++) t = this.$slides.find(".sp-slide").eq(this.slidesOrder[e]), t.css(this.positionProperty, e * (this.slideSize + this.settings.slideDistance));
            var a = -parseInt(this.$slides.find(".sp-slide").eq(this.selectedSlideIndex).css(this.positionProperty), 10) + this.visibleOffset;
            this._moveTo(a, !0)
        },
        resize: function() {
            var s = this;
            if (null !== this.settings.breakpoints && 0 < this.breakpoints.length)
                if (t(e).width() > this.breakpoints[this.breakpoints.length - 1].size && -1 !== this.currentBreakpoint) this.currentBreakpoint = -1, this._setProperties(this.originalSettings, !1);
                else
                    for (var o = 0, i = this.breakpoints.length; o < i; o++)
                        if (t(e).width() <= this.breakpoints[o].size) {
                            if (this.currentBreakpoint !== this.breakpoints[o].size) {
                                var n = {
                                    type: "breakpointReach",
                                    size: this.breakpoints[o].size,
                                    settings: this.breakpoints[o].properties
                                };
                                this.trigger(n), t.isFunction(this.settings.breakpointReach) && this.settings.breakpointReach.call(this, n), this.currentBreakpoint = this.breakpoints[o].size;
                                var r = t.extend({}, this.originalSettings, this.breakpoints[o].properties);
                                return void this._setProperties(r, !1)
                            }
                            break
                        }
            if (!0 === this.settings.responsive ? ("fullWidth" === this.settings.forceSize || "fullWindow" === this.settings.forceSize) && ("auto" === this.settings.visibleSize || "auto" !== this.settings.visibleSize && "vertical" === this.settings.orientation) ? (this.$slider.css("margin", 0), this.$slider.css({
                    width: t(e).width(),
                    "max-width": "",
                    marginLeft: -this.$slider.offset().left
                })) : this.$slider.css({
                    width: "100%",
                    "max-width": this.settings.width,
                    marginLeft: ""
                }) : this.$slider.css({
                    width: this.settings.width
                }), -1 === this.settings.aspectRatio && (this.settings.aspectRatio = this.settings.width / this.settings.height), this.slideWidth = this.$slider.width(), this.slideHeight = "fullWindow" === this.settings.forceSize ? t(e).height() : isNaN(this.settings.aspectRatio) ? this.settings.height : this.slideWidth / this.settings.aspectRatio, this.previousSlideWidth !== this.slideWidth || this.previousSlideHeight !== this.slideHeight || "auto" !== this.settings.visibleSize || this.$slider.outerWidth() > this.$slider.parent().width() || this.$slider.width() !== this.$slidesMask.width()) this.previousSlideWidth = this.slideWidth, this.previousSlideHeight = this.slideHeight;
            else return;
            this.slideSize = "horizontal" === this.settings.orientation ? this.slideWidth : this.slideHeight, this.visibleSlidesSize = this.slideSize, this.visibleOffset = 0, t.each(this.slides, function(e, t) {
                t.setSize(s.slideWidth, s.slideHeight)
            }), this.$slidesMask.css({
                width: this.slideWidth,
                height: this.slideHeight
            }), !0 === this.settings.autoHeight ? setTimeout(function() {
                s._resizeHeight()
            }, 1) : this.$slidesMask.css(this.vendorPrefix + "transition", ""), "auto" !== this.settings.visibleSize && ("horizontal" === this.settings.orientation ? ("fullWidth" === this.settings.forceSize || "fullWindow" === this.settings.forceSize ? (this.$slider.css("margin", 0), this.$slider.css({
                width: t(e).width(),
                "max-width": "",
                marginLeft: -this.$slider.offset().left
            })) : this.$slider.css({
                width: this.settings.visibleSize,
                "max-width": "100%",
                marginLeft: 0
            }), this.$slidesMask.css("width", this.$slider.width()), this.visibleSlidesSize = this.$slidesMask.width(), this.visibleOffset = a((this.$slider.width() - this.slideWidth) / 2)) : ("fullWindow" === this.settings.forceSize ? this.$slider.css({
                height: t(e).height(),
                "max-height": ""
            }) : this.$slider.css({
                height: this.settings.visibleSize,
                "max-height": "100%"
            }), this.$slidesMask.css("height", this.$slider.height()), this.visibleSlidesSize = this.$slidesMask.height(), this.visibleOffset = a((this.$slider.height() - this.slideHeight) / 2))), this._resetSlidesPosition(), this.trigger({
                type: "sliderResize"
            }), t.isFunction(this.settings.sliderResize) && this.settings.sliderResize.call(this, {
                type: "sliderResize"
            })
        },
        _resizeHeight: function() {
            var e = this,
                t = this.getSlideAt(this.selectedSlideIndex),
                a = t.getSize();
            t.off("imagesLoaded." + n), t.on("imagesLoaded." + n, function(a) {
                if (a.index === e.selectedSlideIndex) {
                    var i = t.getSize();
                    e._resizeHeightTo(i.height)
                }
            }), "loading" !== a && this._resizeHeightTo(a.height)
        },
        gotoSlide: function(e) {
            if (e !== this.selectedSlideIndex && "undefined" != typeof this.slides[e]) {
                var a = this;
                this.previousSlideIndex = this.selectedSlideIndex, this.selectedSlideIndex = e, this.$slides.find(".sp-selected").removeClass("sp-selected"), this.$slides.find(".sp-slide").eq(this.selectedSlideIndex).addClass("sp-selected"), !0 === this.settings.loop && (this._updateSlidesOrder(), this._updateSlidesPosition()), !0 === this.settings.autoHeight && this._resizeHeight();
                var i = -parseInt(this.$slides.find(".sp-slide").eq(this.selectedSlideIndex).css(this.positionProperty), 10) + this.visibleOffset;
                this._moveTo(i, !1, function() {
                    !0 === a.settings.loop && a._resetSlidesPosition(), a.trigger({
                        type: "gotoSlideComplete",
                        index: e,
                        previousIndex: a.previousSlideIndex
                    }), t.isFunction(a.settings.gotoSlideComplete) && a.settings.gotoSlideComplete.call(a, {
                        type: "gotoSlideComplete",
                        index: e,
                        previousIndex: a.previousSlideIndex
                    })
                }), this.trigger({
                    type: "gotoSlide",
                    index: e,
                    previousIndex: this.previousSlideIndex
                }), t.isFunction(this.settings.gotoSlide) && this.settings.gotoSlide.call(this, {
                    type: "gotoSlide",
                    index: e,
                    previousIndex: this.previousSlideIndex
                })
            }
        },
        nextSlide: function() {
            var e = this.selectedSlideIndex >= this.getTotalSlides() - 1 ? 0 : this.selectedSlideIndex + 1;
            this.gotoSlide(e)
        },
        previousSlide: function() {
            var e = 0 >= this.selectedSlideIndex ? this.getTotalSlides() - 1 : this.selectedSlideIndex - 1;
            this.gotoSlide(e)
        },
        _moveTo: function(e, t, a) {
            var i = this,
                n = {};
            if (e !== this.slidesPosition)
                if (this.slidesPosition = e, ("css-3d" === this.supportedAnimation || "css-2d" === this.supportedAnimation) && !1 === this.isIE) {
                    var s = "horizontal" === this.settings.orientation ? e : 0,
                        o = "horizontal" === this.settings.orientation ? 0 : e,
                        r;
                    n[this.vendorPrefix + "transform"] = "css-3d" === this.supportedAnimation ? "translate3d(" + s + "px, " + o + "px, 0)" : "translate(" + s + "px, " + o + "px)", "undefined" != typeof t && !0 === t ? r = "" : (this.$slides.addClass("sp-animated"), r = this.vendorPrefix + "transform " + this.settings.slideAnimationDuration / 1e3 + "s", this.$slides.on(this.transitionEvent, function(e) {
                        e.target !== e.currentTarget || (i.$slides.off(i.transitionEvent), i.$slides.removeClass("sp-animated"), "function" == typeof a && a())
                    })), n[this.vendorPrefix + "transition"] = r, this.$slides.css(n)
                } else n["margin-" + this.positionProperty] = e, "undefined" != typeof t && !0 === t ? this.$slides.css(n) : (this.$slides.addClass("sp-animated"), this.$slides.animate(n, this.settings.slideAnimationDuration, function() {
                    i.$slides.removeClass("sp-animated"), "function" == typeof a && a()
                }))
        },
        _stopMovement: function() {
            var e = {};
            if (("css-3d" === this.supportedAnimation || "css-2d" === this.supportedAnimation) && !1 === this.isIE) {
                var t = this.$slides.css(this.vendorPrefix + "transform"),
                    a = -1 === t.indexOf("matrix3d") ? "matrix" : "matrix3d",
                    i = t.replace(a, "").match(/-?[0-9\.]+/g),
                    n = "matrix3d" == a ? parseInt(i[12], 10) : parseInt(i[4], 10),
                    s = "matrix3d" == a ? parseInt(i[13], 10) : parseInt(i[5], 10);
                e[this.vendorPrefix + "transform"] = "css-3d" === this.supportedAnimation ? "translate3d(" + n + "px, " + s + "px, 0)" : "translate(" + n + "px, " + s + "px)", e[this.vendorPrefix + "transition"] = "", this.$slides.css(e), this.$slides.off(this.transitionEvent), this.slidesPosition = "horizontal" === this.settings.orientation ? n : s
            } else this.$slides.stop(), this.slidesPosition = parseInt(this.$slides.css("margin-" + this.positionProperty), 10);
            this.$slides.removeClass("sp-animated")
        },
        _resizeHeightTo: function(e) {
            var a = this,
                i = {
                    height: e
                };
            "css-3d" === this.supportedAnimation || "css-2d" === this.supportedAnimation ? (i[this.vendorPrefix + "transition"] = "height " + this.settings.heightAnimationDuration / 1e3 + "s", this.$slidesMask.off(this.transitionEvent), this.$slidesMask.on(this.transitionEvent, function(e) {
                e.target !== e.currentTarget || (a.$slidesMask.off(a.transitionEvent), a.trigger({
                    type: "resizeHeightComplete"
                }), t.isFunction(a.settings.resizeHeightComplete) && a.settings.resizeHeightComplete.call(a, {
                    type: "resizeHeightComplete"
                }))
            }), this.$slidesMask.css(i)) : this.$slidesMask.stop().animate(i, this.settings.heightAnimationDuration, function() {
                a.trigger({
                    type: "resizeHeightComplete"
                }), t.isFunction(a.settings.resizeHeightComplete) && a.settings.resizeHeightComplete.call(a, {
                    type: "resizeHeightComplete"
                })
            })
        },
        destroy: function() {
            this.$slider.removeData("sliderPro"), this.$slider.removeAttr("style"), this.$slides.removeAttr("style"), this.off("update." + n), t(e).off("resize." + this.uniqueId + "." + n);
            var a = t.SliderPro.modules;
            if ("undefined" != typeof a)
                for (var s = 0; s < a.length; s++) "undefined" != typeof this["destroy" + a[s]] && this["destroy" + a[s]]();
            t.each(this.slides, function(e, t) {
                t.destroy()
            }), this.slides.length = 0, this.$slides.prependTo(this.$slider), this.$slidesContainer.remove()
        },
        _setProperties: function(e, t) {
            for (var a in e) this.settings[a] = e[a], !1 !== t && (this.originalSettings[a] = e[a]);
            this.update()
        },
        on: function(e, t) {
            return this.$slider.on(e, t)
        },
        off: function(e) {
            return this.$slider.off(e)
        },
        trigger: function(e) {
            return this.$slider.triggerHandler(e)
        },
        getSlideAt: function(e) {
            return this.slides[e]
        },
        getSelectedSlide: function() {
            return this.selectedSlideIndex
        },
        getTotalSlides: function() {
            return this.slides.length
        },
        defaults: {
            width: 500,
            height: 300,
            responsive: !0,
            aspectRatio: -1,
            imageScaleMode: "cover",
            centerImage: !0,
            allowScaleUp: !0,
            autoHeight: !1,
            startSlide: 0,
            shuffle: !1,
            orientation: "horizontal",
            forceSize: "none",
            loop: !0,
            slideDistance: 10,
            slideAnimationDuration: 700,
            heightAnimationDuration: 700,
            visibleSize: "auto",
            breakpoints: null,
            init: function() {},
            update: function() {},
            sliderResize: function() {},
            gotoSlide: function() {},
            gotoSlideComplete: function() {},
            resizeHeightComplete: function() {},
            breakpointReach: function() {}
        }
    };
    var s = function(e, t, a) {
        this.$slide = e, this.$mainImage = null, this.$imageContainer = null, this.hasMainImage = !1, this.isMainImageLoaded = !1, this.isMainImageLoading = !1, this.hasImages = !1, this.areImagesLoaded = !1, this.width = 0, this.height = 0, this.settings = a, this.setIndex(t), this._init()
    };
    s.prototype = {
        _init: function() {
            this;
            this.$slide.attr("data-init", !0), this.$mainImage = 0 === this.$slide.find(".sp-image").length ? null : this.$slide.find(".sp-image"), null !== this.$mainImage && (this.hasMainImage = !0, this.$imageContainer = t("<div class=\"sp-image-container\"></div>").prependTo(this.$slide), 0 === this.$mainImage.parent("a").length ? this.$mainImage.appendTo(this.$imageContainer) : this.$mainImage.parent("a").appendTo(this.$imageContainer)), this.hasImages = 0 !== this.$slide.find("img").length
        },
        setSize: function(e, t) {
            this;
            this.width = e, this.height = !0 === this.settings.autoHeight ? "auto" : t, this.$slide.css({
                width: this.width,
                height: this.height
            }), !0 === this.hasMainImage && (this.$imageContainer.css({
                width: this.width,
                height: this.height
            }), "undefined" == typeof this.$mainImage.attr("data-src") && this.resizeMainImage())
        },
        getSize: function() {
            var e = this,
                t;
            if (!0 === this.hasImages && !1 === this.areImagesLoaded && "undefined" == typeof this.$slide.attr("data-loading")) {
                this.$slide.attr("data-loading", !0);
                var a = o.checkImagesComplete(this.$slide, function() {
                    e.areImagesLoaded = !0, e.$slide.removeAttr("data-loading"), e.trigger({
                        type: "imagesLoaded." + n,
                        index: e.index
                    })
                });
                return "complete" === a ? (t = this.calculateSize(), {
                    width: t.width,
                    height: t.height
                }) : "loading"
            }
            return t = this.calculateSize(), {
                width: t.width,
                height: t.height
            }
        },
        calculateSize: function() {
            var e = this.$slide.width(),
                a = this.$slide.height();
            return this.$slide.children().each(function(i, n) {
                var s = t(n);
                if (!0 !== s.is(":hidden")) {
                    var o = n.getBoundingClientRect(),
                        r = s.position().top + (o.bottom - o.top),
                        l = s.position().left + (o.right - o.left);
                    r > a && (a = r), l > e && (e = l)
                }
            }), {
                width: e,
                height: a
            }
        },
        resizeMainImage: function(e) {
            var t = this;
            if (!0 === e && (this.isMainImageLoaded = !1, this.isMainImageLoading = !1), !1 === this.isMainImageLoaded && !1 === this.isMainImageLoading) return this.isMainImageLoading = !0, void o.checkImagesComplete(this.$mainImage, function() {
                t.isMainImageLoaded = !0, t.isMainImageLoading = !1, t.resizeMainImage(), t.trigger({
                    type: "imagesLoaded." + n,
                    index: t.index
                })
            });
            if (!1 === this.settings.allowScaleUp) {
                this.$mainImage.css({
                    width: "",
                    height: "",
                    maxWidth: "",
                    maxHeight: ""
                });
                var a = this.$mainImage.width(),
                    i = this.$mainImage.height();
                this.$mainImage.css({
                    maxWidth: a,
                    maxHeight: i
                })
            }!0 === this.settings.autoHeight ? this.$mainImage.css({
                width: "100%",
                height: "auto"
            }) : "cover" === this.settings.imageScaleMode ? this.$mainImage.width() / this.$mainImage.height() <= this.width / this.height ? this.$mainImage.css({
                width: "100%",
                height: "auto"
            }) : this.$mainImage.css({
                width: "auto",
                height: "100%"
            }) : "contain" === this.settings.imageScaleMode ? this.$mainImage.width() / this.$mainImage.height() >= this.width / this.height ? this.$mainImage.css({
                width: "100%",
                height: "auto"
            }) : this.$mainImage.css({
                width: "auto",
                height: "100%"
            }) : "exact" === this.settings.imageScaleMode && this.$mainImage.css({
                width: "100%",
                height: "100%"
            }), !0 === this.settings.centerImage && this.$mainImage.css({
                marginLeft: 0.5 * (this.$imageContainer.width() - this.$mainImage.width()),
                marginTop: 0.5 * (this.$imageContainer.height() - this.$mainImage.height())
            })
        },
        destroy: function() {
            this.$slide.removeAttr("style"), this.$slide.removeAttr("data-init"), this.$slide.removeAttr("data-index"), this.$slide.removeAttr("data-loaded"), !0 === this.hasMainImage && (this.$slide.find(".sp-image").removeAttr("style").appendTo(this.$slide), this.$slide.find(".sp-image-container").remove())
        },
        getIndex: function() {
            return this.index
        },
        setIndex: function(e) {
            this.index = e, this.$slide.attr("data-index", this.index)
        },
        on: function(e, t) {
            return this.$slide.on(e, t)
        },
        off: function(e) {
            return this.$slide.off(e)
        },
        trigger: function(e) {
            return this.$slide.triggerHandler(e)
        }
    }, e.SliderPro = i, e.SliderProSlide = s, t.fn.sliderPro = function(e) {
        var a = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            if ("undefined" == typeof t(this).data("sliderPro")) {
                var n = new i(this, e);
                t(this).data("sliderPro", n)
            } else if ("undefined" != typeof e) {
                var s = t(this).data("sliderPro");
                if ("function" == typeof s[e]) s[e].apply(s, a);
                else if ("undefined" != typeof s.settings[e]) {
                    var o = {};
                    o[e] = a[0], s._setProperties(o)
                } else "object" == typeof e ? s._setProperties(e) : t.error(e + " does not exist in sliderPro.")
            }
        })
    };
    var o = {
        supportedAnimation: null,
        vendorPrefix: null,
        transitionEvent: null,
        isIE: null,
        getSupportedAnimation: function() {
            if (null !== this.supportedAnimation) return this.supportedAnimation;
            var e = document.body || document.documentElement,
                t = e.style,
                a = "undefined" != typeof t.transition || "undefined" != typeof t.WebkitTransition || "undefined" != typeof t.MozTransition || "undefined" != typeof t.OTransition;
            if (!0 == a) {
                var i = document.createElement("div");
                if (("undefined" != typeof i.style.WebkitPerspective || "undefined" != typeof i.style.perspective) && (this.supportedAnimation = "css-3d"), "css-3d" === this.supportedAnimation && "undefined" != typeof i.styleWebkitPerspective) {
                    var n = document.createElement("style");
                    n.textContent = "@media (transform-3d),(-webkit-transform-3d){#test-3d{left:9px;position:absolute;height:5px;margin:0;padding:0;border:0;}}", document.getElementsByTagName("head")[0].appendChild(n), i.id = "test-3d", document.body.appendChild(i), 9 === i.offsetLeft && 5 === i.offsetHeight || (this.supportedAnimation = null), n.parentNode.removeChild(n), i.parentNode.removeChild(i)
                }
                null === this.supportedAnimation && ("undefined" != typeof i.style["-webkit-transform"] || "undefined" != typeof i.style.transform) && (this.supportedAnimation = "css-2d")
            } else this.supportedAnimation = "javascript";
            return this.supportedAnimation
        },
        getVendorPrefix: function() {
            if (null !== this.vendorPrefix) return this.vendorPrefix;
            var e = document.createElement("div"),
                t = ["Webkit", "Moz", "ms", "O"];
            if ("transform" in e.style) return this.vendorPrefix = "", this.vendorPrefix;
            for (var a = 0; a < t.length; a++)
                if (t[a] + "Transform" in e.style) {
                    this.vendorPrefix = "-" + t[a].toLowerCase() + "-";
                    break
                }
            return this.vendorPrefix
        },
        getTransitionEvent: function() {
            if (null !== this.transitionEvent) return this.transitionEvent;
            var e = document.createElement("div"),
                t = {
                    transition: "transitionend",
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd"
                };
            for (var a in t)
                if (a in e.style) {
                    this.transitionEvent = t[a];
                    break
                }
            return this.transitionEvent
        },
        checkImagesComplete: function(e, t) {
            var a = this,
                i = this.checkImagesStatus(e);
            if ("loading" === i) var n = setInterval(function() {
                i = a.checkImagesStatus(e), "complete" === i && (clearInterval(n), "function" == typeof t && t())
            }, 100);
            else "function" == typeof t && t();
            return i
        },
        checkImagesStatus: function(e) {
            var a = "complete";
            return e.is("img") && !1 === e[0].complete ? a = "loading" : e.find("img").each(function() {
                var e = t(this)[0];
                !1 === e.complete && (a = "loading")
            }), a
        },
        checkIE: function() {
            if (null !== this.isIE) return this.isIE;
            var t = e.navigator.userAgent,
                a = t.indexOf("MSIE");
            return this.isIE = -1 !== t.indexOf("MSIE") || t.match(/Trident.*rv\:11\./), this.isIE
        }
    };
    e.SliderProUtils = o
})(window, jQuery);
(function(e, t) {
    "use strict";
    var a = Math.min,
        i = "Thumbnails." + t.SliderPro.namespace,
        n = function(e, t, a) {
            this.$thumbnail = e, this.$thumbnails = t, this.$thumbnailContainer = null, this.width = 0, this.height = 0, this.isImageLoaded = !1, this.setIndex(a), this._init()
        };
    n.prototype = {
        _init: function() {
            var e = this;
            this.$thumbnail.attr("data-init", !0), this.$thumbnailContainer = t("<div class=\"sp-thumbnail-container\"></div>").appendTo(this.$thumbnails), 0 === this.$thumbnail.parent("a").length ? this.$thumbnail.appendTo(this.$thumbnailContainer) : this.$thumbnail.parent("a").appendTo(this.$thumbnailContainer), this.$thumbnailContainer.on("click." + i, function() {
                e.trigger({
                    type: "thumbnailClick." + i,
                    index: e.index
                }), isListingPage && gae("gallery", "thumbnail"), isTopicPage && gae("topicPage", "polaroid-thumbnail")
            })
        },
        setSize: function(e, t) {
            this.width = e, this.height = t, this.$thumbnailContainer.css({
                width: this.width,
                height: this.height
            }), this.$thumbnail.is("img") && "undefined" == typeof this.$thumbnail.attr("data-src") && this.resizeImage()
        },
        getSize: function() {
            return {
                width: this.$thumbnailContainer.outerWidth(!0),
                height: this.$thumbnailContainer.outerHeight(!0)
            }
        },
        getPosition: function() {
            return {
                left: this.$thumbnailContainer.position().left + parseInt(this.$thumbnailContainer.css("marginLeft"), 10),
                right: this.$thumbnailContainer.position().left + parseInt(this.$thumbnailContainer.css("marginLeft"), 10) + this.$thumbnailContainer.outerWidth(),
                top: this.$thumbnailContainer.position().top + parseInt(this.$thumbnailContainer.css("marginTop"), 10),
                bottom: this.$thumbnailContainer.position().top + parseInt(this.$thumbnailContainer.css("marginTop"), 10) + this.$thumbnailContainer.outerHeight()
            }
        },
        setIndex: function(e) {
            this.index = e, this.$thumbnail.attr("data-index", this.index)
        },
        resizeImage: function() {
            var e = this;
            if (!1 === this.isImageLoaded) return void SliderProUtils.checkImagesComplete(this.$thumbnailContainer, function() {
                e.isImageLoaded = !0, e.resizeImage()
            });
            this.$thumbnail = this.$thumbnailContainer.find(".sp-thumbnail");
            var t = this.$thumbnail.width(),
                a = this.$thumbnail.height();
            t / a <= this.width / this.height ? this.$thumbnail.css({
                width: "100%",
                height: "auto"
            }) : this.$thumbnail.css({
                width: "auto",
                height: "100%"
            }), this.$thumbnail.css({
                marginLeft: 0.5 * (this.$thumbnailContainer.width() - this.$thumbnail.width()),
                marginTop: 0.5 * (this.$thumbnailContainer.height() - this.$thumbnail.height())
            })
        },
        destroy: function() {
            this.$thumbnailContainer.off("click." + i), this.$thumbnail.removeAttr("data-init"), this.$thumbnail.removeAttr("data-index"), 0 === this.$thumbnail.parent("a").length ? this.$thumbnail.insertBefore(this.$thumbnailContainer) : this.$thumbnail.parent("a").insertBefore(this.$thumbnailContainer), this.$thumbnailContainer.remove()
        },
        on: function(e, t) {
            return this.$thumbnailContainer.on(e, t)
        },
        off: function(e) {
            return this.$thumbnailContainer.off(e)
        },
        trigger: function(e) {
            return this.$thumbnailContainer.triggerHandler(e)
        }
    }, t.SliderPro.addModule("Thumbnails", {
        $thumbnails: null,
        $thumbnailsContainer: null,
        thumbnails: null,
        selectedThumbnailIndex: 0,
        thumbnailsSize: 0,
        thumbnailsContainerSize: 0,
        thumbnailsPosition: 0,
        thumbnailsOrientation: null,
        thumbnailsPositionProperty: null,
        isThumbnailScroller: !1,
        initThumbnails: function() {
            var e = this;
            this.thumbnails = [], this.on("update." + i, t.proxy(this._thumbnailsOnUpdate, this)), this.on("sliderResize." + i, t.proxy(this._thumbnailsOnResize, this)), this.on("gotoSlide." + i, function(a) {
                e._gotoThumbnail(a.index), t(".lp-thumbs").length && (t(".lpt-thumb").removeClass("active"), t(".lpt-thumb").eq(a.index).addClass("active"))
            })
        },
        _thumbnailsOnUpdate: function() {
            if (768 > t(e).width()) return t(".sp-thumbnails").hide(), !1;
            var a = this;
            if (0 === this.$slider.find(".sp-thumbnail").length && 0 === this.thumbnails.length) return void(this.isThumbnailScroller = !1);
            if (this.isThumbnailScroller = !0, null === this.$thumbnailsContainer && (this.$thumbnailsContainer = t("<div class=\"sp-thumbnails-container\"></div>").insertAfter(this.$slidesContainer)), null === this.$thumbnails)
                if (0 === this.$slider.find(".sp-thumbnails").length) this.$thumbnails = t("<div class=\"sp-thumbnails\"></div>").appendTo(this.$thumbnailsContainer);
                else if (this.$thumbnails = this.$slider.find(".sp-thumbnails").appendTo(this.$thumbnailsContainer), !0 === this.settings.shuffle) {
                var n = this.$thumbnails.find(".sp-thumbnail"),
                    s = [];
                t.each(this.shuffledIndexes, function(e, a) {
                    var i = t(n[a]);
                    0 !== i.parent("a").length && (i = i.parent("a")), s.push(i)
                }), this.$thumbnails.empty().append(s)
            }
            this.$slides.find(".sp-thumbnail").each(function() {
                var e = t(this),
                    i = e.parents(".sp-slide").index(),
                    n = a.$thumbnails.find(".sp-thumbnail").length - 1;
                0 !== e.parent("a").length && (e = e.parent("a")), i > n ? e.appendTo(a.$thumbnails) : e.insertBefore(a.$thumbnails.find(".sp-thumbnail").eq(i))
            });
            for (var o = this.thumbnails.length - 1; 0 <= o; o--)
                if (0 === this.$thumbnails.find(".sp-thumbnail[data-index=\"" + o + "\"]").length) {
                    var i = this.thumbnails[o];
                    i.destroy(), this.thumbnails.splice(o, 1)
                }
            this.$thumbnails.find(".sp-thumbnail").each(function(e) {
                var i = t(this);
                "undefined" == typeof i.attr("data-init") ? a._createThumbnail(i, e) : a.thumbnails[e].setIndex(e)
            }), this.$thumbnailsContainer.removeClass("sp-top-thumbnails sp-bottom-thumbnails sp-left-thumbnails sp-right-thumbnails"), "top" === this.settings.thumbnailsPosition ? (this.$thumbnailsContainer.addClass("sp-top-thumbnails"), this.thumbnailsOrientation = "horizontal") : "bottom" === this.settings.thumbnailsPosition ? (this.$thumbnailsContainer.addClass("sp-bottom-thumbnails"), this.thumbnailsOrientation = "horizontal") : "left" === this.settings.thumbnailsPosition ? (this.$thumbnailsContainer.addClass("sp-left-thumbnails"), this.thumbnailsOrientation = "vertical") : "right" === this.settings.thumbnailsPosition && (this.$thumbnailsContainer.addClass("sp-right-thumbnails"), this.thumbnailsOrientation = "vertical"), !0 === this.settings.thumbnailPointer ? this.$thumbnailsContainer.addClass("sp-has-pointer") : this.$thumbnailsContainer.removeClass("sp-has-pointer"), this.selectedThumbnailIndex = this.selectedSlideIndex, this.$thumbnails.find(".sp-thumbnail-container").eq(this.selectedThumbnailIndex).addClass("sp-selected-thumbnail"), this.thumbnailsSize = 0, t.each(this.thumbnails, function(e, t) {
                t.setSize(a.settings.thumbnailWidth, a.settings.thumbnailHeight), a.thumbnailsSize += "horizontal" === a.thumbnailsOrientation ? t.getSize().width : t.getSize().height
            }), "horizontal" === this.thumbnailsOrientation ? (this.$thumbnails.css({
                width: this.thumbnailsSize,
                height: this.settings.thumbnailHeight
            }), this.$thumbnailsContainer.css("height", ""), this.thumbnailsPositionProperty = "left") : (this.$thumbnails.css({
                width: this.settings.thumbnailWidth,
                height: this.thumbnailsSize
            }), this.$thumbnailsContainer.css("width", ""), this.thumbnailsPositionProperty = "top"), this.trigger({
                type: "thumbnailsUpdate"
            }), t.isFunction(this.settings.thumbnailsUpdate) && this.settings.thumbnailsUpdate.call(this, {
                type: "thumbnailsUpdate"
            })
        },
        _createThumbnail: function(e, t) {
            var a = this,
                s = new n(e, this.$thumbnails, t);
            s.on("thumbnailClick." + i, function(e) {
                a.gotoSlide(e.index)
            }), this.thumbnails.splice(t, 0, s)
        },
        _thumbnailsOnResize: function() {
            if (!1 !== this.isThumbnailScroller) {
                var i = this,
                    n;
                "horizontal" === this.thumbnailsOrientation ? (this.thumbnailsContainerSize = a(this.$slidesMask.width(), this.thumbnailsSize), this.$thumbnailsContainer.css("width", this.thumbnailsContainerSize), "fullWindow" === this.settings.forceSize && (this.$slidesMask.css("height", this.$slidesMask.height() - this.$thumbnailsContainer.outerHeight(!0)), this.slideHeight = this.$slidesMask.height(), t.each(this.slides, function(e, t) {
                    t.setSize(i.slideWidth, i.slideHeight)
                }))) : "vertical" === this.thumbnailsOrientation && (this.$slidesMask.width() + this.$thumbnailsContainer.outerWidth(!0) > this.$slider.parent().width() && ("fullWidth" === this.settings.forceSize || "fullWindow" === this.settings.forceSize ? this.$slider.css("max-width", t(e).width() - this.$thumbnailsContainer.outerWidth(!0)) : this.$slider.css("max-width", this.$slider.parent().width() - this.$thumbnailsContainer.outerWidth(!0)), this.$slidesMask.css("width", this.$slider.width()), "horizontal" === this.settings.orientation ? (this.visibleOffset = Math.round((this.$slider.width() - this.slideSize) / 2), this.visibleSlidesSize = this.$slidesMask.width()) : "vertical" === this.settings.orientation && (this.slideWidth = this.$slider.width(), t.each(this.slides, function(e, t) {
                    t.setSize(i.slideWidth, i.slideHeight)
                })), this._resetSlidesPosition()), this.thumbnailsContainerSize = a(this.$slidesMask.height(), this.thumbnailsSize), this.$thumbnailsContainer.css("height", this.thumbnailsContainerSize)), n = this.thumbnailsSize <= this.thumbnailsContainerSize || 0 === this.$thumbnails.find(".sp-selected-thumbnail").length ? 0 : Math.max(-this.thumbnails[this.selectedThumbnailIndex].getPosition()[this.thumbnailsPositionProperty], this.thumbnailsContainerSize - this.thumbnailsSize), "top" === this.settings.thumbnailsPosition ? this.$slider.css({
                    paddingTop: this.$thumbnailsContainer.outerHeight(!0),
                    paddingLeft: "",
                    paddingRight: ""
                }) : "bottom" === this.settings.thumbnailsPosition ? this.$slider.css({
                    paddingTop: "",
                    paddingLeft: "",
                    paddingRight: ""
                }) : "left" === this.settings.thumbnailsPosition ? this.$slider.css({
                    paddingTop: "",
                    paddingLeft: this.$thumbnailsContainer.outerWidth(!0),
                    paddingRight: ""
                }) : "right" === this.settings.thumbnailsPosition && this.$slider.css({
                    paddingTop: "",
                    paddingLeft: "",
                    paddingRight: this.$thumbnailsContainer.outerWidth(!0)
                }), this._moveThumbnailsTo(n, !0)
            }
        },
        _gotoThumbnail: function(e) {
            if (!1 !== this.isThumbnailScroller && "undefined" != typeof this.thumbnails[e]) {
                var a = this.selectedThumbnailIndex,
                    i = this.thumbnailsPosition;
                if (this.selectedThumbnailIndex = e, this.$thumbnails.find(".sp-selected-thumbnail").removeClass("sp-selected-thumbnail"), this.$thumbnails.find(".sp-thumbnail-container").eq(this.selectedThumbnailIndex).addClass("sp-selected-thumbnail"), this.selectedThumbnailIndex >= a) {
                    var n = this.selectedThumbnailIndex === this.thumbnails.length - 1 ? this.selectedThumbnailIndex : this.selectedThumbnailIndex + 1,
                        s = this.thumbnails[n],
                        o = "horizontal" === this.thumbnailsOrientation ? s.getPosition().right : s.getPosition().bottom,
                        r = -this.thumbnailsPosition + this.thumbnailsContainerSize;
                    o > r && (i = this.thumbnailsPosition - (o - r))
                } else if (this.selectedThumbnailIndex < a) {
                    var l = 0 === this.selectedThumbnailIndex ? this.selectedThumbnailIndex : this.selectedThumbnailIndex - 1,
                        d = this.thumbnails[l],
                        p = "horizontal" === this.thumbnailsOrientation ? d.getPosition().left : d.getPosition().top;
                    p < -this.thumbnailsPosition && (i = -p)
                }
                this._moveThumbnailsTo(i), this.trigger({
                    type: "gotoThumbnail"
                }), t.isFunction(this.settings.gotoThumbnail) && this.settings.gotoThumbnail.call(this, {
                    type: "gotoThumbnail"
                })
            }
        },
        _moveThumbnailsTo: function(e, a, i) {
            var n = this,
                s = {};
            if (e !== this.thumbnailsPosition)
                if (this.thumbnailsPosition = e, "css-3d" === this.supportedAnimation || "css-2d" === this.supportedAnimation) {
                    var o = "horizontal" === this.thumbnailsOrientation ? e : 0,
                        r = "horizontal" === this.thumbnailsOrientation ? 0 : e,
                        l;
                    s[this.vendorPrefix + "transform"] = "css-3d" === this.supportedAnimation ? "translate3d(" + o + "px, " + r + "px, 0)" : "translate(" + o + "px, " + r + "px)", "undefined" != typeof a && !0 === a ? l = "" : (this.$thumbnails.addClass("sp-animated"), l = this.vendorPrefix + "transform " + 700 / 1e3 + "s", this.$thumbnails.on(this.transitionEvent, function(e) {
                        e.target !== e.currentTarget || (n.$thumbnails.off(n.transitionEvent), n.$thumbnails.removeClass("sp-animated"), "function" == typeof i && i(), n.trigger({
                            type: "thumbnailsMoveComplete"
                        }), t.isFunction(n.settings.thumbnailsMoveComplete) && n.settings.thumbnailsMoveComplete.call(n, {
                            type: "thumbnailsMoveComplete"
                        }))
                    })), s[this.vendorPrefix + "transition"] = l, this.$thumbnails.css(s)
                } else s["margin-" + this.thumbnailsPositionProperty] = e, "undefined" != typeof a && !0 === a ? this.$thumbnails.css(s) : this.$thumbnails.addClass("sp-animated").animate(s, 700, function() {
                    n.$thumbnails.removeClass("sp-animated"), "function" == typeof i && i(), n.trigger({
                        type: "thumbnailsMoveComplete"
                    }), t.isFunction(n.settings.thumbnailsMoveComplete) && n.settings.thumbnailsMoveComplete.call(n, {
                        type: "thumbnailsMoveComplete"
                    })
                })
        },
        _stopThumbnailsMovement: function() {
            var e = {};
            if ("css-3d" === this.supportedAnimation || "css-2d" === this.supportedAnimation) {
                var t = this.$thumbnails.css(this.vendorPrefix + "transform"),
                    a = -1 === t.indexOf("matrix3d") ? "matrix" : "matrix3d",
                    i = t.replace(a, "").match(/-?[0-9\.]+/g),
                    n = "matrix3d" == a ? parseInt(i[12], 10) : parseInt(i[4], 10),
                    s = "matrix3d" == a ? parseInt(i[13], 10) : parseInt(i[5], 10);
                e[this.vendorPrefix + "transform"] = "css-3d" === this.supportedAnimation ? "translate3d(" + n + "px, " + s + "px, 0)" : "translate(" + n + "px, " + s + "px)", e[this.vendorPrefix + "transition"] = "", this.$thumbnails.css(e), this.$thumbnails.off(this.transitionEvent), this.thumbnailsPosition = "horizontal" === this.thumbnailsOrientation ? parseInt(i[4], 10) : parseInt(i[5], 10)
            } else this.$thumbnails.stop(), this.thumbnailsPosition = parseInt(this.$thumbnails.css("margin-" + this.thumbnailsPositionProperty), 10);
            this.$thumbnails.removeClass("sp-animated")
        },
        destroyThumbnails: function() {
            var a = this;
            this.off("update." + i);
            !1 === this.isThumbnailScroller || (this.off("sliderResize." + i), this.off("gotoSlide." + i), t(e).off("resize." + this.uniqueId + "." + i), this.$thumbnails.find(".sp-thumbnail").each(function() {
                var e = t(this),
                    n = parseInt(e.attr("data-index"), 10),
                    s = a.thumbnails[n];
                s.off("thumbnailClick." + i), s.destroy()
            }), this.thumbnails.length = 0, this.$thumbnails.appendTo(this.$slider), this.$thumbnailsContainer.remove(), this.$slider.css({
                paddingTop: "",
                paddingLeft: "",
                paddingRight: ""
            }))
        },
        thumbnailsDefaults: {
            thumbnailWidth: 100,
            thumbnailHeight: 80,
            thumbnailsPosition: "bottom",
            thumbnailPointer: !1,
            thumbnailsUpdate: function() {},
            gotoThumbnail: function() {},
            thumbnailsMoveComplete: function() {}
        }
    })
})(window, jQuery);
(function(e, t) {
    "use strict";
    var a = "ConditionalImages." + t.SliderPro.namespace;
    t.SliderPro.addModule("ConditionalImages", {
        previousImageSize: null,
        currentImageSize: null,
        isRetinaScreen: !1,
        initConditionalImages: function() {
            this.currentImageSize = this.previousImageSize = "default", this.isRetinaScreen = "undefined" != typeof this._isRetina && !0 === this._isRetina(), this.on("update." + a, t.proxy(this._conditionalImagesOnUpdate, this)), this.on("sliderResize." + a, t.proxy(this._conditionalImagesOnResize, this))
        },
        _conditionalImagesOnUpdate: function() {
            t.each(this.slides, function(e, a) {
                var i = a.$slide;
                i.find("img:not([ data-default ])").each(function() {
                    var e = t(this);
                    "undefined" == typeof e.attr("data-src") ? e.attr("data-default", e.attr("src")) : e.attr("data-default", e.attr("data-src"))
                })
            })
        },
        _conditionalImagesOnResize: function() {
            if (this.currentImageSize = this.slideWidth <= this.settings.smallSize ? "small" : this.slideWidth <= this.settings.mediumSize ? "medium" : this.slideWidth <= this.settings.largeSize ? "large" : "default", this.previousImageSize !== this.currentImageSize) {
                var e = this;
                t.each(this.slides, function(a, i) {
                    var n = i.$slide;
                    n.find("img").each(function() {
                        var a = t(this),
                            n = "";
                        !0 === e.isRetinaScreen && "undefined" != typeof a.attr("data-retina" + e.currentImageSize) ? (n = a.attr("data-retina" + e.currentImageSize), "undefined" != typeof a.attr("data-retina") && a.attr("data-retina") !== n && a.attr("data-retina", n)) : (!1 === e.isRetinaScreen || !0 === e.isRetinaScreen && "undefined" == typeof a.attr("data-retina")) && "undefined" != typeof a.attr("data-" + e.currentImageSize) && (n = a.attr("data-" + e.currentImageSize), "undefined" != typeof a.attr("data-src") && a.attr("data-src") !== n && a.attr("data-src", n)), "" !== n && "undefined" == typeof a.attr("data-src") && a.attr("src") !== n && e._loadConditionalImage(a, n, function(e) {
                            e.hasClass("sp-image") && (i.$mainImage = e, i.resizeMainImage(!0))
                        })
                    })
                }), this.previousImageSize = this.currentImageSize
            }
        },
        _loadConditionalImage: function(e, a, i) {
            var n = t(new Image);
            n.attr("class", e.attr("class")), n.attr("style", e.attr("style")), t.each(e.data(), function(e, t) {
                n.attr("data-" + e, t)
            }), "undefined" != typeof e.attr("width") && n.attr("width", e.attr("width")), "undefined" != typeof e.attr("height") && n.attr("height", e.attr("height")), "undefined" != typeof e.attr("alt") && n.attr("alt", e.attr("alt")), "undefined" != typeof e.attr("title") && n.attr("title", e.attr("title")), n.attr("src", a), n.insertAfter(e), e.remove(), e = null, "function" == typeof i && i(n)
        },
        destroyConditionalImages: function() {
            this.off("update." + a), this.off("sliderResize." + a)
        },
        conditionalImagesDefaults: {
            smallSize: 480,
            mediumSize: 768,
            largeSize: 1024
        }
    })
})(window, jQuery);
(function(e, t) {
    "use strict";
    var a = "Retina." + t.SliderPro.namespace;
    t.SliderPro.addModule("Retina", {
        initRetina: function() {
            this;
            !1 === this._isRetina() || (this.on("update." + a, t.proxy(this._checkRetinaImages, this)), 0 !== this.$slider.find(".sp-thumbnail").length && this.on("update.Thumbnails." + a, t.proxy(this._checkRetinaThumbnailImages, this)))
        },
        _isRetina: function() {
            return !!(2 <= e.devicePixelRatio) || e.matchMedia && e.matchMedia("(-webkit-min-device-pixel-ratio: 2),(min-resolution: 2dppx)").matches
        },
        _checkRetinaImages: function() {
            var e = this;
            t.each(this.slides, function(a, i) {
                var n = i.$slide;
                "undefined" == typeof n.attr("data-retina-loaded") && (n.attr("data-retina-loaded", !0), n.find("img[data-retina]").each(function() {
                    var a = t(this);
                    "undefined" == typeof a.attr("data-src") ? e._loadRetinaImage(a, function(e) {
                        e.hasClass("sp-image") && (i.$mainImage = e, i.resizeMainImage(!0))
                    }) : a.attr("data-src", a.attr("data-retina"))
                }))
            })
        },
        _checkRetinaThumbnailImages: function() {
            var e = this;
            t.each(this.thumbnails, function(a, i) {
                var n = i.$thumbnailContainer;
                "undefined" == typeof n.attr("data-retina-loaded") && (n.attr("data-retina-loaded", !0), n.find("img[data-retina]").each(function() {
                    var a = t(this);
                    "undefined" == typeof a.attr("data-src") ? e._loadRetinaImage(a, function(e) {
                        e.hasClass("sp-thumbnail") && i.resizeImage()
                    }) : a.attr("data-src", a.attr("data-retina"))
                }))
            })
        },
        _loadRetinaImage: function(e, a) {
            var i = !1,
                n = "";
            if ("undefined" != typeof e.attr("data-retina") && (i = !0, n = e.attr("data-retina")), "undefined" != typeof e.attr("data-src") && (!1 == i && (n = e.attr("data-src")), e.removeAttr("data-src")), "" !== n) {
                var s = t(new Image);
                s.attr("class", e.attr("class")), s.attr("style", e.attr("style")), t.each(e.data(), function(e, t) {
                    s.attr("data-" + e, t)
                }), "undefined" != typeof e.attr("width") && s.attr("width", e.attr("width")), "undefined" != typeof e.attr("height") && s.attr("height", e.attr("height")), "undefined" != typeof e.attr("alt") && s.attr("alt", e.attr("alt")), "undefined" != typeof e.attr("title") && s.attr("title", e.attr("title")), s.insertAfter(e), e.remove(), e = null, s.attr("src", n), "function" == typeof a && a(s)
            }
        },
        destroyRetina: function() {
            this.off("update." + a), this.off("update.Thumbnails." + a)
        }
    })
})(window, jQuery);
(function(e, t) {
    "use strict";
    var a = Math.floor,
        i = "LazyLoading." + t.SliderPro.namespace;
    t.SliderPro.addModule("LazyLoading", {
        allowLazyLoadingCheck: !0,
        initLazyLoading: function() {
            this;
            this.on("sliderResize." + i, t.proxy(this._lazyLoadingOnResize, this)), this.on("gotoSlide." + i, t.proxy(this._checkAndLoadVisibleImages, this)), this.on("thumbnailsUpdate." + i + " thumbnailsMoveComplete." + i, t.proxy(this._checkAndLoadVisibleThumbnailImages, this))
        },
        _lazyLoadingOnResize: function() {
            var e = this;
            !1 === this.allowLazyLoadingCheck || (this.allowLazyLoadingCheck = !1, this._checkAndLoadVisibleImages(), 0 !== this.$slider.find(".sp-thumbnail").length && this._checkAndLoadVisibleThumbnailImages(), setTimeout(function() {
                e.allowLazyLoadingCheck = !0
            }, 500))
        },
        _checkAndLoadVisibleImages: function() {
            if (0 !== this.$slider.find(".sp-slide:not([ data-loaded ])").length) {
                var e = this,
                    a = !0 === this.settings.loop ? this.middleSlidePosition : this.selectedSlideIndex,
                    i = Math.ceil((this.visibleSlidesSize - this.slideSize) / 2 / this.slideSize),
                    n = 0 < a - i - 1 ? a - i - 1 : 0,
                    s = a + i + 1 < this.getTotalSlides() - 1 ? a + i + 1 : this.getTotalSlides() - 1,
                    o = this.slidesOrder.slice(n, s + 1);
                t.each(o, function(a, i) {
                    var n = e.slides[i],
                        s = n.$slide;
                    "undefined" == typeof s.attr("data-loaded") && (s.attr("data-loaded", !0), s.find("img[ data-src ]").each(function() {
                        var a = t(this);
                        e._loadImage(a, function(e) {
                            e.hasClass("sp-image") && (n.$mainImage = e, n.resizeMainImage(!0))
                        })
                    }))
                })
            }
        },
        _checkAndLoadVisibleThumbnailImages: function() {
            if (0 !== this.$slider.find(".sp-thumbnail-container:not([ data-loaded ])").length) {
                var e = this,
                    i = this.thumbnailsSize / this.thumbnails.length,
                    n = a(Math.abs(this.thumbnailsPosition / i)),
                    s = a((-this.thumbnailsPosition + this.thumbnailsContainerSize) / i),
                    o = this.thumbnails.slice(n, s + 1);
                t.each(o, function(a, i) {
                    var n = i.$thumbnailContainer;
                    "undefined" == typeof n.attr("data-loaded") && (n.attr("data-loaded", !0), n.find("img[ data-src ]").each(function() {
                        var a = t(this);
                        e._loadImage(a, function() {
                            i.resizeImage()
                        })
                    }))
                })
            }
        },
        _loadImage: function(e, a) {
            var i = t(new Image);
            i.attr("class", e.attr("class")), i.attr("style", e.attr("style")), t.each(e.data(), function(e, t) {
                i.attr("data-" + e, t)
            }), "undefined" != typeof e.attr("width") && i.attr("width", e.attr("width")), "undefined" != typeof e.attr("height") && i.attr("height", e.attr("height")), "undefined" != typeof e.attr("alt") && i.attr("alt", e.attr("alt")), "undefined" != typeof e.attr("title") && i.attr("title", e.attr("title")), i.attr("src", e.attr("data-src")), i.removeAttr("data-src"), i.insertAfter(e), e.remove(), e = null, "function" == typeof a && a(i)
        },
        destroyLazyLoading: function() {
            this.off("update." + i), this.off("gotoSlide." + i), this.off("sliderResize." + i), this.off("thumbnailsUpdate." + i), this.off("thumbnailsMoveComplete." + i)
        }
    })
})(window, jQuery);
(function(e, t) {
    "use strict";
    var a = "Layers." + t.SliderPro.namespace,
        i = e.SliderProSlide.prototype.destroy;
    e.SliderProSlide.prototype.destroy = function() {
        "undefined" != typeof this.layers && (t.each(this.layers, function(e, t) {
            t.destroy()
        }), this.layers.length = 0), "undefined" != typeof this.animatedLayers && (this.animatedLayers.length = 0), i.apply(this)
    };
    var n = function(e) {
        this.$layer = e, this.visible = !1, this.styled = !1, this.data = null, this.position = null, this.horizontalProperty = null, this.verticalProperty = null, this.horizontalPosition = null, this.verticalPosition = null, this.scaleRatio = 1, this.supportedAnimation = SliderProUtils.getSupportedAnimation(), this.vendorPrefix = SliderProUtils.getVendorPrefix(), this.transitionEvent = SliderProUtils.getTransitionEvent(), this.stayTimer = null, this._init()
    };
    n.prototype = {
        _init: function() {
            this.$layer.attr("data-layer-init", !0), this.$layer.hasClass("sp-static") ? this._setStyle() : this.$layer.css({
                visibility: "hidden"
            })
        },
        _setStyle: function() {
            this.styled = !0, this.data = this.$layer.data(), "undefined" != typeof this.data.width && this.$layer.css("width", this.data.width), "undefined" != typeof this.data.height && this.$layer.css("height", this.data.height), "undefined" != typeof this.data.depth && this.$layer.css("z-index", this.data.depth), this.position = this.data.position ? this.data.position.toLowerCase() : "topleft", this.horizontalProperty = -1 === this.position.indexOf("right") ? -1 === this.position.indexOf("left") ? "center" : "left" : "right", this.verticalProperty = -1 === this.position.indexOf("bottom") ? -1 === this.position.indexOf("top") ? "center" : "top" : "bottom", this._setPosition(), this.scale(this.scaleRatio)
        },
        _setPosition: function() {
            var e = this.$layer.attr("style");
            this.horizontalPosition = "undefined" == typeof this.data.horizontal ? 0 : this.data.horizontal, this.verticalPosition = "undefined" == typeof this.data.vertical ? 0 : this.data.vertical, "center" === this.horizontalProperty ? (!1 === this.$layer.is("img") && ("undefined" == typeof e || "undefined" != typeof e && -1 === e.indexOf("width")) && (this.$layer.css("white-space", "nowrap"), this.$layer.css("width", this.$layer.outerWidth(!0))), this.$layer.css({
                marginLeft: "auto",
                marginRight: "auto",
                left: this.horizontalPosition,
                right: 0
            })) : this.$layer.css(this.horizontalProperty, this.horizontalPosition), "center" === this.verticalProperty ? (!1 === this.$layer.is("img") && ("undefined" == typeof e || "undefined" != typeof e && -1 === e.indexOf("height")) && (this.$layer.css("white-space", "nowrap"), this.$layer.css("height", this.$layer.outerHeight(!0))), this.$layer.css({
                marginTop: "auto",
                marginBottom: "auto",
                top: this.verticalPosition,
                bottom: 0
            })) : this.$layer.css(this.verticalProperty, this.verticalPosition)
        },
        scale: function(e) {
            if (!this.$layer.hasClass("sp-no-scale") && (this.scaleRatio = e, !1 !== this.styled)) {
                var t = "center" === this.horizontalProperty ? "left" : this.horizontalProperty,
                    a = "center" === this.verticalProperty ? "top" : this.verticalProperty,
                    i = {};
                i[this.vendorPrefix + "transform-origin"] = this.horizontalProperty + " " + this.verticalProperty, i[this.vendorPrefix + "transform"] = "scale(" + this.scaleRatio + ")", "string" != typeof this.horizontalPosition && (i[t] = this.horizontalPosition * this.scaleRatio), "string" != typeof this.verticalPosition && (i[a] = this.verticalPosition * this.scaleRatio), "string" == typeof this.data.width && -1 !== this.data.width.indexOf("%") && (i.width = (parseInt(this.data.width, 10) / this.scaleRatio).toString() + "%"), "string" == typeof this.data.height && -1 !== this.data.height.indexOf("%") && (i.height = (parseInt(this.data.height, 10) / this.scaleRatio).toString() + "%"), this.$layer.css(i)
            }
        },
        show: function(e) {
            if (!0 !== this.visible) {
                this.visible = !0, !1 === this.styled && this._setStyle();
                var t = this,
                    a = "undefined" == typeof this.data.showOffset ? 50 : this.data.showOffset,
                    i = "undefined" == typeof this.data.showDuration ? 0.4 : this.data.showDuration / 1e3,
                    n = "undefined" == typeof this.data.showDelay ? 10 : this.data.showDelay,
                    s = "undefined" == typeof t.data.stayDuration ? -1 : parseInt(t.data.stayDuration, 10);
                if ("javascript" === this.supportedAnimation) this.$layer.stop().delay(n).css({
                    opacity: 0,
                    visibility: "visible"
                }).animate({
                    opacity: 1
                }, 1e3 * i, function() {
                    -1 !== s && (t.stayTimer = setTimeout(function() {
                        t.hide(), t.stayTimer = null
                    }, s)), "undefined" != typeof e && e()
                });
                else {
                    var o = {
                            opacity: 0,
                            visibility: "visible"
                        },
                        r = {
                            opacity: 1
                        },
                        l = "";
                    o[this.vendorPrefix + "transform"] = "scale(" + this.scaleRatio + ")", r[this.vendorPrefix + "transform"] = "scale(" + this.scaleRatio + ")", r[this.vendorPrefix + "transition"] = "opacity " + i + "s", "undefined" != typeof this.data.showTransition && ("left" === this.data.showTransition ? l = a + "px, 0" : "right" === this.data.showTransition ? l = "-" + a + "px, 0" : "up" === this.data.showTransition ? l = "0, " + a + "px" : "down" === this.data.showTransition && (l = "0, -" + a + "px"), o[this.vendorPrefix + "transform"] += "css-3d" === this.supportedAnimation ? " translate3d(" + l + ", 0)" : " translate(" + l + ")", r[this.vendorPrefix + "transform"] += "css-3d" === this.supportedAnimation ? " translate3d(0, 0, 0)" : " translate(0, 0)", r[this.vendorPrefix + "transition"] += ", " + this.vendorPrefix + "transform " + i + "s"), this.$layer.on(this.transitionEvent, function(a) {
                        a.target !== a.currentTarget || (t.$layer.off(t.transitionEvent).css(t.vendorPrefix + "transition", ""), -1 !== s && (t.stayTimer = setTimeout(function() {
                            t.hide(), t.stayTimer = null
                        }, s)), "undefined" != typeof e && e())
                    }), this.$layer.css(o), setTimeout(function() {
                        t.$layer.css(r)
                    }, n)
                }
            }
        },
        hide: function(e) {
            if (!1 !== this.visible) {
                var a = this,
                    i = "undefined" == typeof this.data.hideOffset ? 50 : this.data.hideOffset,
                    n = "undefined" == typeof this.data.hideDuration ? 0.4 : this.data.hideDuration / 1e3,
                    s = "undefined" == typeof this.data.hideDelay ? 10 : this.data.hideDelay;
                if (this.visible = !1, null !== this.stayTimer && clearTimeout(this.stayTimer), "javascript" === this.supportedAnimation) this.$layer.stop().delay(s).animate({
                    opacity: 0
                }, 1e3 * n, function() {
                    t(this).css("visibility", "hidden"), "undefined" != typeof e && e()
                });
                else {
                    var o = "",
                        r = {
                            opacity: 0
                        };
                    r[this.vendorPrefix + "transform"] = "scale(" + this.scaleRatio + ")", r[this.vendorPrefix + "transition"] = "opacity " + n + "s", "undefined" != typeof this.data.hideTransition && ("left" === this.data.hideTransition ? o = "-" + i + "px, 0" : "right" === this.data.hideTransition ? o = i + "px, 0" : "up" === this.data.hideTransition ? o = "0, -" + i + "px" : "down" === this.data.hideTransition && (o = "0, " + i + "px"), r[this.vendorPrefix + "transform"] += "css-3d" === this.supportedAnimation ? " translate3d(" + o + ", 0)" : " translate(" + o + ")", r[this.vendorPrefix + "transition"] += ", " + this.vendorPrefix + "transform " + n + "s"), this.$layer.on(this.transitionEvent, function(t) {
                        t.target !== t.currentTarget || (a.$layer.off(a.transitionEvent).css(a.vendorPrefix + "transition", ""), !1 === a.visible && a.$layer.css("visibility", "hidden"), "undefined" != typeof e && e())
                    }), setTimeout(function() {
                        a.$layer.css(r)
                    }, s)
                }
            }
        },
        isVisible: function() {
            return !1 === this.visible || this.$layer.is(":hidden") ? !1 : !0
        },
        destroy: function() {
            this.$layer.removeAttr("style"), this.$layer.removeAttr("data-layer-init")
        }
    }, t.SliderPro.addModule("Layers", {
        layersGotoSlideReference: null,
        waitForLayersTimer: null,
        initLayers: function() {
            this.on("update." + a, t.proxy(this._layersOnUpdate, this)), this.on("sliderResize." + a, t.proxy(this._layersOnResize, this)), this.on("gotoSlide." + a, t.proxy(this._layersOnGotoSlide, this))
        },
        _layersOnUpdate: function() {
            var e = this;
            t.each(this.slides, function(e, a) {
                a.$slide;
                this.$slide.find(".sp-layer:not([ data-layer-init ])").each(function() {
                    var e = new n(t(this));
                    "undefined" == typeof a.layers && (a.layers = []), a.layers.push(e), !1 === t(this).hasClass("sp-static") && ("undefined" == typeof a.animatedLayers && (a.animatedLayers = []), a.animatedLayers.push(e))
                })
            }), !0 === this.settings.waitForLayers && (clearTimeout(this.waitForLayersTimer), this.waitForLayersTimer = setTimeout(function() {
                e.layersGotoSlideReference = e.gotoSlide, e.gotoSlide = e._layersGotoSlide
            }, 1)), setTimeout(function() {
                e.showLayers(e.selectedSlideIndex)
            }, 1)
        },
        _layersOnResize: function() {
            var e = this,
                a = this.settings.autoScaleLayers,
                i, n;
            !1 === this.settings.autoScaleLayers || (-1 === this.settings.autoScaleReference ? "string" == typeof this.settings.width && -1 !== this.settings.width.indexOf("%") ? a = !1 : i = parseInt(this.settings.width, 10) : i = this.settings.autoScaleReference, n = !0 === a && this.slideWidth < i ? e.slideWidth / i : 1, t.each(this.slides, function(e, a) {
                "undefined" != typeof a.layers && t.each(a.layers, function(e, t) {
                    t.scale(n)
                })
            }))
        },
        _layersGotoSlide: function(e) {
            var t = this,
                i = this.slides[this.selectedSlideIndex].animatedLayers;
            this.$slider.hasClass("sp-swiping") || "undefined" == typeof i || 0 === i.length ? this.layersGotoSlideReference(e) : (this.on("hideLayersComplete." + a, function() {
                t.off("hideLayersComplete." + a), t.layersGotoSlideReference(e)
            }), this.hideLayers(this.selectedSlideIndex))
        },
        _layersOnGotoSlide: function() {
            this.previousSlideIndex !== this.selectedSlideIndex && !1 === this.settings.waitForLayers && this.hideLayers(this.previousSlideIndex), this.showLayers(this.selectedSlideIndex)
        },
        showLayers: function(e) {
            var a = this,
                i = this.slides[e].animatedLayers,
                n = 0;
            "undefined" == typeof i || t.each(i, function(e, s) {
                !0 === s.isVisible() ? (n++, n === i.length && (a.trigger({
                    type: "showLayersComplete",
                    index: e
                }), t.isFunction(a.settings.showLayersComplete) && a.settings.showLayersComplete.call(a, {
                    type: "showLayersComplete",
                    index: e
                }))) : s.show(function() {
                    n++, n === i.length && (a.trigger({
                        type: "showLayersComplete",
                        index: e
                    }), t.isFunction(a.settings.showLayersComplete) && a.settings.showLayersComplete.call(a, {
                        type: "showLayersComplete",
                        index: e
                    }))
                })
            })
        },
        hideLayers: function(e) {
            var a = this,
                i = this.slides[e].animatedLayers,
                n = 0;
            "undefined" == typeof i || t.each(i, function(e, s) {
                !1 === s.isVisible() ? (n++, n === i.length && (a.trigger({
                    type: "hideLayersComplete",
                    index: e
                }), t.isFunction(a.settings.hideLayersComplete) && a.settings.hideLayersComplete.call(a, {
                    type: "hideLayersComplete",
                    index: e
                }))) : s.hide(function() {
                    n++, n === i.length && (a.trigger({
                        type: "hideLayersComplete",
                        index: e
                    }), t.isFunction(a.settings.hideLayersComplete) && a.settings.hideLayersComplete.call(a, {
                        type: "hideLayersComplete",
                        index: e
                    }))
                })
            })
        },
        destroyLayers: function() {
            this.off("update." + a), this.off("resize." + a), this.off("gotoSlide." + a), this.off("hideLayersComplete." + a)
        },
        layersDefaults: {
            waitForLayers: !1,
            autoScaleLayers: !0,
            autoScaleReference: -1,
            showLayersComplete: function() {},
            hideLayersComplete: function() {}
        }
    })
})(window, jQuery);
(function(e, t) {
    "use strict";
    var a = "Fade." + t.SliderPro.namespace;
    t.SliderPro.addModule("Fade", {
        fadeGotoSlideReference: null,
        initFade: function() {
            this.on("update." + a, t.proxy(this._fadeOnUpdate, this))
        },
        _fadeOnUpdate: function() {
            !0 === this.settings.fade && (this.fadeGotoSlideReference = this.gotoSlide, this.gotoSlide = this._fadeGotoSlide)
        },
        _fadeGotoSlide: function(e) {
            if (e !== this.selectedSlideIndex)
                if (this.$slider.hasClass("sp-swiping")) this.fadeGotoSlideReference(e);
                else {
                    var a = this,
                        i = e,
                        n, s;
                    t.each(this.slides, function(e, t) {
                        var o = t.getIndex(),
                            r = t.$slide;
                        o === i ? (r.css({
                            opacity: 0,
                            left: 0,
                            top: 0,
                            "z-index": 20
                        }), n = r) : o === a.selectedSlideIndex ? (r.css({
                            opacity: 1,
                            left: 0,
                            top: 0,
                            "z-index": 10
                        }), s = r) : r.css("visibility", "hidden")
                    }), this.previousSlideIndex = this.selectedSlideIndex, this.selectedSlideIndex = e, this.$slides.find(".sp-selected").removeClass("sp-selected"), this.$slides.find(".sp-slide").eq(this.selectedSlideIndex).addClass("sp-selected"), !0 === a.settings.loop && a._updateSlidesOrder(), this._moveTo(this.visibleOffset, !0), !0 === this.settings.fadeOutPreviousSlide && this._fadeSlideTo(s, 0), this._fadeSlideTo(n, 1, function() {
                        t.each(a.slides, function(e, t) {
                            var a = t.$slide;
                            a.css({
                                visibility: "",
                                opacity: "",
                                "z-index": ""
                            })
                        }), a._resetSlidesPosition(), a.trigger({
                            type: "gotoSlideComplete",
                            index: e,
                            previousIndex: a.previousSlideIndex
                        }), t.isFunction(a.settings.gotoSlideComplete) && a.settings.gotoSlideComplete.call(a, {
                            type: "gotoSlideComplete",
                            index: e,
                            previousIndex: a.previousSlideIndex
                        })
                    }), !0 === this.settings.autoHeight && this._resizeHeight(), this.trigger({
                        type: "gotoSlide",
                        index: e,
                        previousIndex: this.previousSlideIndex
                    }), t.isFunction(this.settings.gotoSlide) && this.settings.gotoSlide.call(this, {
                        type: "gotoSlide",
                        index: e,
                        previousIndex: this.previousSlideIndex
                    })
                }
        },
        _fadeSlideTo: function(e, t, a) {
            var i = this;
            "css-3d" === this.supportedAnimation || "css-2d" === this.supportedAnimation ? (setTimeout(function() {
                var a = {
                    opacity: t
                };
                a[i.vendorPrefix + "transition"] = "opacity " + i.settings.fadeDuration / 1e3 + "s", e.css(a)
            }, 100), e.on(this.transitionEvent, function(t) {
                t.target !== t.currentTarget || (e.off(i.transitionEvent), e.css(i.vendorPrefix + "transition", ""), "function" == typeof a && a())
            })) : e.stop().animate({
                opacity: t
            }, this.settings.fadeDuration, function() {
                "function" == typeof a && a()
            })
        },
        destroyFade: function() {
            this.off("update." + a), null !== this.fadeGotoSlideReference && (this.gotoSlide = this.fadeGotoSlideReference)
        },
        fadeDefaults: {
            fade: !1,
            fadeOutPreviousSlide: !0,
            fadeDuration: 500
        }
    })
})(window, jQuery);
(function(e, t) {
    "use strict";
    var a = Math.abs,
        i = "TouchSwipe." + t.SliderPro.namespace;
    t.SliderPro.addModule("TouchSwipe", {
        touchStartPoint: {
            x: 0,
            y: 0
        },
        touchEndPoint: {
            x: 0,
            y: 0
        },
        touchDistance: {
            x: 0,
            y: 0
        },
        touchStartPosition: 0,
        isTouchMoving: !1,
        touchSwipeEvents: {
            startEvent: "",
            moveEvent: "",
            endEvent: ""
        },
        initTouchSwipe: function() {
            this;
            !1 === this.settings.touchSwipe || (this.touchSwipeEvents.startEvent = "touchstart." + i + " mousedown." + i, this.touchSwipeEvents.moveEvent = "touchmove." + i + " mousemove." + i, this.touchSwipeEvents.endEvent = "touchend." + this.uniqueId + "." + i + " mouseup." + this.uniqueId + "." + i, this.$slidesMask.on(this.touchSwipeEvents.startEvent, t.proxy(this._onTouchStart, this)), this.$slidesMask.on("dragstart." + i, function(e) {
                e.preventDefault()
            }), this.$slidesMask.addClass("sp-grab"))
        },
        _onTouchStart: function(e) {
            if (!(1 <= t(e.target).closest(".sp-selectable").length)) {
                var a = this,
                    n = "undefined" == typeof e.originalEvent.touches ? e.originalEvent : e.originalEvent.touches[0];
                "undefined" == typeof e.originalEvent.touches && e.preventDefault(), t(e.target).parents(".sp-slide").find("a").one("click." + i, function(e) {
                    e.preventDefault()
                }), this.touchStartPoint.x = n.pageX || n.clientX, this.touchStartPoint.y = n.pageY || n.clientY, this.touchStartPosition = this.slidesPosition, this.touchDistance.x = this.touchDistance.y = 0, this.$slides.hasClass("sp-animated") && (this.isTouchMoving = !0, this._stopMovement(), this.touchStartPosition = this.slidesPosition), this.$slidesMask.on(this.touchSwipeEvents.moveEvent, t.proxy(this._onTouchMove, this)), t(document).on(this.touchSwipeEvents.endEvent, t.proxy(this._onTouchEnd, this)), this.$slidesMask.removeClass("sp-grab").addClass("sp-grabbing"), this.$slider.addClass("sp-swiping")
            }
        },
        _onTouchMove: function(e) {
            var t = "undefined" == typeof e.originalEvent.touches ? e.originalEvent : e.originalEvent.touches[0];
            this.isTouchMoving = !0, this.touchEndPoint.x = t.pageX || t.clientX, this.touchEndPoint.y = t.pageY || t.clientY, this.touchDistance.x = this.touchEndPoint.x - this.touchStartPoint.x, this.touchDistance.y = this.touchEndPoint.y - this.touchStartPoint.y;
            var i = "horizontal" === this.settings.orientation ? this.touchDistance.x : this.touchDistance.y,
                n = "horizontal" === this.settings.orientation ? this.touchDistance.y : this.touchDistance.x;
            if (a(i) > a(n)) e.preventDefault();
            else return;
            !1 === this.settings.loop && (this.slidesPosition > this.touchStartPosition && 0 === this.selectedSlideIndex || this.slidesPosition < this.touchStartPosition && this.selectedSlideIndex === this.getTotalSlides() - 1) && (i *= 0.2), this._moveTo(this.touchStartPosition + i, !0)
        },
        _onTouchEnd: function(e) {
            var n = this,
                s = "horizontal" === this.settings.orientation ? this.touchDistance.x : this.touchDistance.y;
            if (isListingPage && gae("gallery", "swipe"), isTopicPage && gae("topicPage", "polaroid-swipe"), this.$slidesMask.off(this.touchSwipeEvents.moveEvent), t(document).off(this.touchSwipeEvents.endEvent), this.$slidesMask.removeClass("sp-grabbing").addClass("sp-grab"), (!1 === this.isTouchMoving || !0 === this.isTouchMoving && 10 > a(this.touchDistance.x) && 10 > a(this.touchDistance.y)) && (t(e.target).parents(".sp-slide").find("a").off("click." + i), this.$slider.removeClass("sp-swiping")), setTimeout(function() {
                    n.$slider.removeClass("sp-swiping")
                }, 1), !1 !== this.isTouchMoving) {
                this.isTouchMoving = !1, t(e.target).parents(".sp-slide").one("click", function(e) {
                    e.preventDefault()
                });
                var o = -parseInt(this.$slides.find(".sp-slide").eq(this.selectedSlideIndex).css(this.positionProperty), 10) + this.visibleOffset;
                if (a(s) < this.settings.touchSwipeThreshold) this._moveTo(o);
                else {
                    var r = s / (this.slideSize + this.settings.slideDistance);
                    r = parseInt(r, 10) + (0 < r ? 1 : -1);
                    var l = this.slidesOrder[t.inArray(this.selectedSlideIndex, this.slidesOrder) - r];
                    !0 === this.settings.loop ? this.gotoSlide(l) : "undefined" == typeof l ? this._moveTo(o) : this.gotoSlide(l)
                }
            }
        },
        destroyTouchSwipe: function() {
            this.$slidesMask.off(this.touchSwipeEvents.startEvent), this.$slidesMask.off(this.touchSwipeEvents.moveEvent), this.$slidesMask.off("dragstart." + i), t(document).off(this.touchSwipeEvents.endEvent), this.$slidesMask.removeClass("sp-grab")
        },
        touchSwipeDefaults: {
            touchSwipe: !0,
            touchSwipeThreshold: 50
        }
    })
})(window, jQuery);
(function(e, t) {
    "use strict";
    var a = "Caption." + t.SliderPro.namespace;
    t.SliderPro.addModule("Caption", {
        $captionContainer: null,
        captionContent: "",
        initCaption: function() {
            this.on("update." + a, t.proxy(this._captionOnUpdate, this)), this.on("gotoSlide." + a, t.proxy(this._updateCaptionContent, this))
        },
        _captionOnUpdate: function() {
            this.$captionContainer = this.$slider.find(".sp-caption-container"), this.$slider.find(".sp-caption").length && 0 === this.$captionContainer.length && (this.$captionContainer = t("<div class=\"sp-caption-container\"></div>").appendTo(this.$slider), this._updateCaptionContent()), this.$slides.find(".sp-caption").each(function() {
                t(this).css("display", "none")
            })
        },
        _updateCaptionContent: function() {
            var e = this,
                t = this.$slider.find(".sp-slide").eq(this.selectedSlideIndex).find(".sp-caption"),
                a = 0 === t.length ? "" : t.html();
            !0 === this.settings.fadeCaption ? "" === this.captionContent ? (this.captionContent = a, this.$captionContainer.html(this.captionContent), this.$captionContainer.css("opacity", 0), this._fadeCaptionTo(1)) : (0 === parseFloat(this.$captionContainer.css("opacity"), 10) && (this.$captionContainer.css(this.vendorPrefix + "transition", ""), this.$captionContainer.css("opacity", 1)), this._fadeCaptionTo(0, function() {
                e.captionContent = a, "" === a ? e.$captionContainer.empty() : (e.$captionContainer.html(e.captionContent), e._fadeCaptionTo(1))
            })) : (this.captionContent = a, this.$captionContainer.html(this.captionContent))
        },
        _fadeCaptionTo: function(e, t) {
            var a = this;
            "css-3d" === this.supportedAnimation || "css-2d" === this.supportedAnimation ? (setTimeout(function() {
                var t = {
                    opacity: e
                };
                t[a.vendorPrefix + "transition"] = "opacity " + a.settings.captionFadeDuration / 1e3 + "s", a.$captionContainer.css(t)
            }, 1), this.$captionContainer.on(this.transitionEvent, function(e) {
                e.target !== e.currentTarget || (a.$captionContainer.off(a.transitionEvent), a.$captionContainer.css(a.vendorPrefix + "transition", ""), "function" == typeof t && t())
            })) : this.$captionContainer.stop().animate({
                opacity: e
            }, this.settings.captionFadeDuration, function() {
                "function" == typeof t && t()
            })
        },
        destroyCaption: function() {
            this.off("update." + a), this.off("gotoSlide." + a), this.$captionContainer.remove(), this.$slider.find(".sp-caption").each(function() {
                t(this).css("display", "")
            })
        },
        captionDefaults: {
            fadeCaption: !0,
            captionFadeDuration: 500
        }
    })
})(window, jQuery);
(function(e, t) {
    "use strict";
    var a = "DeepLinking." + t.SliderPro.namespace;
    t.SliderPro.addModule("DeepLinking", {
        initDeepLinking: function() {
            var i = this;
            this.on("init." + a, function() {
                i._gotoHash(e.location.hash)
            }), this.on("gotoSlide." + a, function(t) {
                if (!0 === i.settings.updateHash) {
                    var a = i.$slider.find(".sp-slide").eq(t.index).attr("id");
                    "undefined" == typeof a && (a = t.index), e.location.hash = i.$slider.attr("id") + "/" + a
                }
            }), t(e).on("hashchange." + this.uniqueId + "." + a, function() {
                i._gotoHash(e.location.hash)
            })
        },
        _parseHash: function(e) {
            if ("" !== e) {
                e = e.substring(1);
                var t = e.split("/"),
                    a = t.pop(),
                    i = e.slice(0, -a.toString().length - 1);
                if (this.$slider.attr("id") === i) return {
                    sliderID: i,
                    slideId: a
                }
            }
            return !1
        },
        _gotoHash: function(e) {
            var t = this._parseHash(e);
            if (!1 !== t) {
                var a = t.slideId,
                    i = parseInt(a, 10);
                if (isNaN(i)) {
                    var n = this.$slider.find(".sp-slide#" + a).index(); - 1 !== n && n !== this.selectedSlideIndex && this.gotoSlide(n)
                } else i !== this.selectedSlideIndex && this.gotoSlide(i)
            }
        },
        destroyDeepLinking: function() {
            this.off("init." + a), this.off("gotoSlide." + a), t(e).off("hashchange." + this.uniqueId + "." + a)
        },
        deepLinkingDefaults: {
            updateHash: !1
        }
    })
})(window, jQuery);
(function(e, t) {
    "use strict";
    var a = "Autoplay." + t.SliderPro.namespace;
    t.SliderPro.addModule("Autoplay", {
        autoplayTimer: null,
        isTimerRunning: !1,
        isTimerPaused: !1,
        initAutoplay: function() {
            this.on("update." + a, t.proxy(this._autoplayOnUpdate, this))
        },
        _autoplayOnUpdate: function() {
            !0 === this.settings.autoplay ? (this.on("gotoSlide." + a, t.proxy(this._autoplayOnGotoSlide, this)), this.on("mouseenter." + a, t.proxy(this._autoplayOnMouseEnter, this)), this.on("mouseleave." + a, t.proxy(this._autoplayOnMouseLeave, this)), this.startAutoplay()) : (this.off("gotoSlide." + a), this.off("mouseenter." + a), this.off("mouseleave." + a), this.stopAutoplay())
        },
        _autoplayOnGotoSlide: function() {
            !0 === this.isTimerRunning && this.stopAutoplay(), !1 === this.isTimerPaused && this.startAutoplay()
        },
        _autoplayOnMouseEnter: function() {
            this.isTimerRunning && ("pause" === this.settings.autoplayOnHover || "stop" === this.settings.autoplayOnHover) && (this.stopAutoplay(), this.isTimerPaused = !0)
        },
        _autoplayOnMouseLeave: function() {
            !0 === this.settings.autoplay && !1 === this.isTimerRunning && "stop" !== this.settings.autoplayOnHover && (this.startAutoplay(), this.isTimerPaused = !1)
        },
        startAutoplay: function() {
            var e = this;
            this.isTimerRunning = !0, this.autoplayTimer = setTimeout(function() {
                "normal" === e.settings.autoplayDirection ? e.nextSlide() : "backwards" === e.settings.autoplayDirection && e.previousSlide()
            }, this.settings.autoplayDelay)
        },
        stopAutoplay: function() {
            this.isTimerRunning = !1, this.isTimerPaused = !1, clearTimeout(this.autoplayTimer)
        },
        destroyAutoplay: function() {
            clearTimeout(this.autoplayTimer), this.off("update." + a), this.off("gotoSlide." + a), this.off("mouseenter." + a), this.off("mouseleave." + a)
        },
        autoplayDefaults: {
            autoplay: !0,
            autoplayDelay: 5e3,
            autoplayDirection: "normal",
            autoplayOnHover: "pause"
        }
    })
})(window, jQuery);
(function(e, t) {
    "use strict";
    var a = "Keyboard." + t.SliderPro.namespace;
    t.SliderPro.addModule("Keyboard", {
        initKeyboard: function() {
            var e = this,
                i = !1;
            !1 === this.settings.keyboard || (this.$slider.on("focus." + a, function() {
                i = !0
            }), this.$slider.on("blur." + a, function() {
                i = !1
            }), t(document).on("keydown." + this.uniqueId + "." + a, function(t) {
                !0 === e.settings.keyboardOnlyOnFocus && !1 == i || (37 === t.which ? e.previousSlide() : 39 === t.which && e.nextSlide())
            }))
        },
        destroyKeyboard: function() {
            this.$slider.off("focus." + a), this.$slider.off("blur." + a), t(document).off("keydown." + this.uniqueId + "." + a)
        },
        keyboardDefaults: {
            keyboard: !0,
            keyboardOnlyOnFocus: !1
        }
    })
})(window, jQuery);
(function(e, t) {
    "use strict";
    var a = "FullScreen." + t.SliderPro.namespace;
    t.SliderPro.addModule("FullScreen", {
        isFullScreen: !1,
        $fullScreenButton: null,
        sizeBeforeFullScreen: {},
        initFullScreen: function() {
            (document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled) && this.on("update." + a, t.proxy(this._fullScreenOnUpdate, this))
        },
        _fullScreenOnUpdate: function() {
            !0 === this.settings.fullScreen && null === this.$fullScreenButton ? this._addFullScreen() : !1 === this.settings.fullScreen && null !== this.$fullScreenButton && this._removeFullScreen(), !0 === this.settings.fullScreen && (!0 === this.settings.fadeFullScreen ? this.$fullScreenButton.addClass("sp-fade-full-screen") : !1 === this.settings.fadeFullScreen && this.$fullScreenButton.removeClass("sp-fade-full-screen"))
        },
        _addFullScreen: function() {
            this.$fullScreenButton = t("<div class=\"sp-full-screen-button\"></div>").appendTo(this.$slider), this.$fullScreenButton.on("click." + a, t.proxy(this._onFullScreenButtonClick, this)), document.addEventListener("fullscreenchange", t.proxy(this._onFullScreenChange, this)), document.addEventListener("mozfullscreenchange", t.proxy(this._onFullScreenChange, this)), document.addEventListener("webkitfullscreenchange", t.proxy(this._onFullScreenChange, this)), document.addEventListener("MSFullscreenChange", t.proxy(this._onFullScreenChange, this))
        },
        _removeFullScreen: function() {
            null !== this.$fullScreenButton && (this.$fullScreenButton.off("click." + a), this.$fullScreenButton.remove(), this.$fullScreenButton = null, document.removeEventListener("fullscreenchange", this._onFullScreenChange), document.removeEventListener("mozfullscreenchange", this._onFullScreenChange), document.removeEventListener("webkitfullscreenchange", this._onFullScreenChange), document.removeEventListener("MSFullscreenChange", this._onFullScreenChange))
        },
        _onFullScreenButtonClick: function() {
            !1 === this.isFullScreen ? this.instance.requestFullScreen ? this.instance.requestFullScreen() : this.instance.mozRequestFullScreen ? this.instance.mozRequestFullScreen() : this.instance.webkitRequestFullScreen ? this.instance.webkitRequestFullScreen() : this.instance.msRequestFullscreen && this.instance.msRequestFullscreen() : document.exitFullScreen ? document.exitFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()
        },
        _onFullScreenChange: function() {
            this.isFullScreen = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement, !0 === this.isFullScreen ? (this.sizeBeforeFullScreen = {
                forceSize: this.settings.forceSize,
                autoHeight: this.settings.autoHeight
            }, this.$slider.addClass("sp-full-screen"), this.settings.forceSize = "fullWindow", this.settings.autoHeight = !1) : (this.$slider.css("margin", ""), this.$slider.removeClass("sp-full-screen"), this.settings.forceSize = this.sizeBeforeFullScreen.forceSize, this.settings.autoHeight = this.sizeBeforeFullScreen.autoHeight), this.resize()
        },
        destroyFullScreen: function() {
            this.off("update." + a), this._removeFullScreen()
        },
        fullScreenDefaults: {
            fullScreen: !1,
            fadeFullScreen: !0
        }
    })
})(window, jQuery);
(function(e, t) {
    "use strict";
    var a = "Buttons." + t.SliderPro.namespace;
    t.SliderPro.addModule("Buttons", {
        $buttons: null,
        initButtons: function() {
            this.on("update." + a, t.proxy(this._buttonsOnUpdate, this))
        },
        _buttonsOnUpdate: function() {
            this.$buttons = this.$slider.find(".sp-buttons"), !0 === this.settings.buttons && 1 < this.getTotalSlides() && 0 === this.$buttons.length ? this._createButtons() : !0 === this.settings.buttons && this.getTotalSlides() !== this.$buttons.find(".sp-button").length && 0 !== this.$buttons.length ? this._adjustButtons() : (!1 === this.settings.buttons || 1 >= this.getTotalSlides() && 0 !== this.$buttons.length) && this._removeButtons()
        },
        _createButtons: function() {
            var e = this;
            this.$buttons = t("<div class=\"sp-buttons\"></div>").appendTo(this.$slider);
            for (var n = 0; n < this.getTotalSlides(); n++) t("<div class=\"sp-button\"></div>").appendTo(this.$buttons);
            this.$buttons.on("click." + a, ".sp-button", function() {
                e.gotoSlide(t(this).index())
            }), this.$buttons.find(".sp-button").eq(this.selectedSlideIndex).addClass("sp-selected-button"), this.on("gotoSlide." + a, function(t) {
                e.$buttons.find(".sp-selected-button").removeClass("sp-selected-button"), e.$buttons.find(".sp-button").eq(t.index).addClass("sp-selected-button")
            }), this.$slider.addClass("sp-has-buttons")
        },
        _adjustButtons: function() {
            this.$buttons.empty();
            for (var e = 0; e < this.getTotalSlides(); e++) t("<div class=\"sp-button\"></div>").appendTo(this.$buttons);
            this.$buttons.find(".sp-selected-button").removeClass("sp-selected-button"), this.$buttons.find(".sp-button").eq(this.selectedSlideIndex).addClass("sp-selected-button")
        },
        _removeButtons: function() {
            this.$buttons.off("click." + a, ".sp-button"), this.off("gotoSlide." + a), this.$buttons.remove(), this.$slider.removeClass("sp-has-buttons")
        },
        destroyButtons: function() {
            this._removeButtons(), this.off("update." + a)
        },
        buttonsDefaults: {
            buttons: !0
        }
    })
})(window, jQuery);
(function(e, t) {
    "use strict";
    var a = "Arrows." + t.SliderPro.namespace;
    t.SliderPro.addModule("Arrows", {
        $arrows: null,
        $previousArrow: null,
        $nextArrow: null,
        initArrows: function() {
            this.on("update." + a, t.proxy(this._arrowsOnUpdate, this)), this.on("gotoSlide." + a, t.proxy(this._checkArrowsVisibility, this))
        },
        _arrowsOnUpdate: function() {
            var e = this;
            !0 === this.settings.arrows && null === this.$arrows ? (this.$arrows = t("<div class=\"sp-arrows\"></div>").appendTo(this.$slidesContainer), this.$previousArrow = t("<div class=\"sp-arrow sp-previous-arrow\"></div>").appendTo(this.$arrows), this.$nextArrow = t("<div class=\"sp-arrow sp-next-arrow\"></div>").appendTo(this.$arrows), this.$previousArrow.on("click." + a, function() {
                e.previousSlide(), isListingPage && gae("gallery", "prevButton"), isTopicPage && gae("topicPage", "polaroid-prevButton")
            }), this.$nextArrow.on("click." + a, function() {
                e.nextSlide(), isListingPage && gae("gallery", "nextButton"), isTopicPage && gae("topicPage", "polaroid-nextButton")
            }), this._checkArrowsVisibility()) : !1 === this.settings.arrows && null !== this.$arrows && this._removeArrows(), !0 === this.settings.arrows && (!0 === this.settings.fadeArrows ? this.$arrows.addClass("sp-fade-arrows") : !1 === this.settings.fadeArrows && this.$arrows.removeClass("sp-fade-arrows"))
        },
        _checkArrowsVisibility: function() {
            !1 === this.settings.arrows || !0 === this.settings.loop || (0 === this.selectedSlideIndex ? this.$previousArrow.css("display", "none") : this.$previousArrow.css("display", "block"), this.selectedSlideIndex === this.getTotalSlides() - 1 ? this.$nextArrow.css("display", "none") : this.$nextArrow.css("display", "block"))
        },
        _removeArrows: function() {
            null !== this.$arrows && (this.$previousArrow.off("click." + a), this.$nextArrow.off("click." + a), this.$arrows.remove(), this.$arrows = null)
        },
        destroyArrows: function() {
            this._removeArrows(), this.off("update." + a), this.off("gotoSlide." + a)
        },
        arrowsDefaults: {
            arrows: !1,
            fadeArrows: !0
        }
    })
})(window, jQuery);
(function(e, t) {
    "use strict";
    var a = Math.abs,
        i = "ThumbnailTouchSwipe." + t.SliderPro.namespace;
    t.SliderPro.addModule("ThumbnailTouchSwipe", {
        thumbnailTouchStartPoint: {
            x: 0,
            y: 0
        },
        thumbnailTouchEndPoint: {
            x: 0,
            y: 0
        },
        thumbnailTouchDistance: {
            x: 0,
            y: 0
        },
        thumbnailTouchStartPosition: 0,
        isThumbnailTouchMoving: !1,
        isThumbnailTouchSwipe: !1,
        thumbnailTouchSwipeEvents: {
            startEvent: "",
            moveEvent: "",
            endEvent: ""
        },
        initThumbnailTouchSwipe: function() {
            this.on("update." + i, t.proxy(this._thumbnailTouchSwipeOnUpdate, this))
        },
        _thumbnailTouchSwipeOnUpdate: function() {
            !1 === this.isThumbnailScroller || (!0 === this.settings.thumbnailTouchSwipe && !1 === this.isThumbnailTouchSwipe && (this.isThumbnailTouchSwipe = !0, this.thumbnailTouchSwipeEvents.startEvent = "touchstart." + i + " mousedown." + i, this.thumbnailTouchSwipeEvents.moveEvent = "touchmove." + i + " mousemove." + i, this.thumbnailTouchSwipeEvents.endEvent = "touchend." + this.uniqueId + "." + i + " mouseup." + this.uniqueId + "." + i, this.$thumbnails.on(this.thumbnailTouchSwipeEvents.startEvent, t.proxy(this._onThumbnailTouchStart, this)), this.$thumbnails.on("dragstart." + i, function(e) {
                e.preventDefault()
            }), this.$thumbnails.addClass("sp-grab")), t.each(this.thumbnails, function(e, t) {
                t.off("thumbnailClick")
            }))
        },
        _onThumbnailTouchStart: function(e) {
            if (!(1 <= t(e.target).closest(".sp-selectable").length)) {
                var a = this,
                    n = "undefined" == typeof e.originalEvent.touches ? e.originalEvent : e.originalEvent.touches[0];
                "undefined" == typeof e.originalEvent.touches && e.preventDefault(), t(e.target).parents(".sp-thumbnail-container").find("a").one("click." + i, function(e) {
                    e.preventDefault()
                }), this.thumbnailTouchStartPoint.x = n.pageX || n.clientX, this.thumbnailTouchStartPoint.y = n.pageY || n.clientY, this.thumbnailTouchStartPosition = this.thumbnailsPosition, this.thumbnailTouchDistance.x = this.thumbnailTouchDistance.y = 0, this.$thumbnails.hasClass("sp-animated") && (this.isThumbnailTouchMoving = !0, this._stopThumbnailsMovement(), this.thumbnailTouchStartPosition = this.thumbnailsPosition), this.$thumbnails.on(this.thumbnailTouchSwipeEvents.moveEvent, t.proxy(this._onThumbnailTouchMove, this)), t(document).on(this.thumbnailTouchSwipeEvents.endEvent, t.proxy(this._onThumbnailTouchEnd, this)), this.$thumbnails.removeClass("sp-grab").addClass("sp-grabbing"), this.$thumbnailsContainer.addClass("sp-swiping")
            }
        },
        _onThumbnailTouchMove: function(e) {
            var t = "undefined" == typeof e.originalEvent.touches ? e.originalEvent : e.originalEvent.touches[0];
            this.isThumbnailTouchMoving = !0, this.thumbnailTouchEndPoint.x = t.pageX || t.clientX, this.thumbnailTouchEndPoint.y = t.pageY || t.clientY, this.thumbnailTouchDistance.x = this.thumbnailTouchEndPoint.x - this.thumbnailTouchStartPoint.x, this.thumbnailTouchDistance.y = this.thumbnailTouchEndPoint.y - this.thumbnailTouchStartPoint.y;
            var i = "horizontal" === this.thumbnailsOrientation ? this.thumbnailTouchDistance.x : this.thumbnailTouchDistance.y,
                n = "horizontal" === this.thumbnailsOrientation ? this.thumbnailTouchDistance.y : this.thumbnailTouchDistance.x;
            if (a(i) > a(n)) e.preventDefault();
            else return;
            if (0 <= this.thumbnailsPosition) {
                var s = -this.thumbnailTouchStartPosition;
                i = s + 0.2 * (i - s)
            } else if (this.thumbnailsPosition <= -this.thumbnailsSize + this.thumbnailsContainerSize) {
                var o = this.thumbnailsSize - this.thumbnailsContainerSize + this.thumbnailTouchStartPosition;
                i = -o + 0.2 * (i + o)
            }
            this._moveThumbnailsTo(this.thumbnailTouchStartPosition + i, !0)
        },
        _onThumbnailTouchEnd: function(e) {
            var n = this,
                s = "horizontal" === this.thumbnailsOrientation ? this.thumbnailTouchDistance.x : this.thumbnailTouchDistance.y;
            if (this.$thumbnails.off(this.thumbnailTouchSwipeEvents.moveEvent), t(document).off(this.thumbnailTouchSwipeEvents.endEvent), this.$thumbnails.removeClass("sp-grabbing").addClass("sp-grab"), !1 === this.isThumbnailTouchMoving || !0 === this.isThumbnailTouchMoving && 10 > a(this.thumbnailTouchDistance.x) && 10 > a(this.thumbnailTouchDistance.y)) {
                var o = t(e.target).hasClass("sp-thumbnail-container") ? t(e.target) : t(e.target).parents(".sp-thumbnail-container"),
                    r = o.index();
                return void(0 === t(e.target).parents("a").length ? r !== this.selectedThumbnailIndex && -1 !== r && this.gotoSlide(r) : (t(e.target).parents("a").off("click." + i), this.$thumbnailsContainer.removeClass("sp-swiping")))
            }
            this.isThumbnailTouchMoving = !1, t(e.target).parents(".sp-thumbnail").one("click", function(e) {
                e.preventDefault()
            }), setTimeout(function() {
                n.$thumbnailsContainer.removeClass("sp-swiping")
            }, 1), 0 < this.thumbnailsPosition ? this._moveThumbnailsTo(0) : this.thumbnailsPosition < this.thumbnailsContainerSize - this.thumbnailsSize && this._moveThumbnailsTo(this.thumbnailsContainerSize - this.thumbnailsSize), this.trigger({
                type: "thumbnailsMoveComplete"
            }), t.isFunction(this.settings.thumbnailsMoveComplete) && this.settings.thumbnailsMoveComplete.call(this, {
                type: "thumbnailsMoveComplete"
            })
        },
        destroyThumbnailTouchSwipe: function() {
            this.off("update." + i);
            !1 === this.isThumbnailScroller || (this.$thumbnails.off(this.thumbnailTouchSwipeEvents.startEvent), this.$thumbnails.off(this.thumbnailTouchSwipeEvents.moveEvent), this.$thumbnails.off("dragstart." + i), t(document).off(this.thumbnailTouchSwipeEvents.endEvent), this.$thumbnails.removeClass("sp-grab"))
        },
        thumbnailTouchSwipeDefaults: {
            thumbnailTouchSwipe: !0
        }
    })
})(window, jQuery);
(function(e, t) {
    "use strict";
    var a = "ThumbnailArrows." + t.SliderPro.namespace;
    t.SliderPro.addModule("ThumbnailArrows", {
        $thumbnailArrows: null,
        $previousThumbnailArrow: null,
        $nextThumbnailArrow: null,
        initThumbnailArrows: function() {
            var e = this;
            this.on("update." + a, t.proxy(this._thumbnailArrowsOnUpdate, this)), this.on("sliderResize." + a + " thumbnailsMoveComplete." + a, function() {
                !0 === e.isThumbnailScroller && !0 === e.settings.thumbnailArrows && e._checkThumbnailArrowsVisibility()
            })
        },
        _thumbnailArrowsOnUpdate: function() {
            var e = this;
            !1 === this.isThumbnailScroller || (!0 === this.settings.thumbnailArrows && null === this.$thumbnailArrows ? (this.$thumbnailArrows = t("<div class=\"sp-thumbnail-arrows\"></div>").appendTo(this.$thumbnailsContainer), this.$previousThumbnailArrow = t("<div class=\"sp-thumbnail-arrow sp-previous-thumbnail-arrow\"></div>").appendTo(this.$thumbnailArrows), this.$nextThumbnailArrow = t("<div class=\"sp-thumbnail-arrow sp-next-thumbnail-arrow\"></div>").appendTo(this.$thumbnailArrows), this.$previousThumbnailArrow.on("click." + a, function() {
                var t = Math.min(0, e.thumbnailsPosition + e.thumbnailsContainerSize);
                e._moveThumbnailsTo(t)
            }), this.$nextThumbnailArrow.on("click." + a, function() {
                var t = Math.max(e.thumbnailsContainerSize - e.thumbnailsSize, e.thumbnailsPosition - e.thumbnailsContainerSize);
                e._moveThumbnailsTo(t)
            })) : !1 === this.settings.thumbnailArrows && null !== this.$thumbnailArrows && this._removeThumbnailArrows(), !0 === this.settings.thumbnailArrows && (!0 === this.settings.fadeThumbnailArrows ? this.$thumbnailArrows.addClass("sp-fade-thumbnail-arrows") : !1 === this.settings.fadeThumbnailArrows && this.$thumbnailArrows.removeClass("sp-fade-thumbnail-arrows"), this._checkThumbnailArrowsVisibility()))
        },
        _checkThumbnailArrowsVisibility: function() {
            0 === this.thumbnailsPosition ? this.$previousThumbnailArrow.css("display", "none") : this.$previousThumbnailArrow.css("display", "block"), this.thumbnailsPosition === this.thumbnailsContainerSize - this.thumbnailsSize ? this.$nextThumbnailArrow.css("display", "none") : this.$nextThumbnailArrow.css("display", "block")
        },
        _removeThumbnailArrows: function() {
            null !== this.$thumbnailArrows && (this.$previousThumbnailArrow.off("click." + a), this.$nextThumbnailArrow.off("click." + a), this.$thumbnailArrows.remove(), this.$thumbnailArrows = null)
        },
        destroyThumbnailArrows: function() {
            this._removeThumbnailArrows(), this.off("update." + a), this.off("sliderResize." + a), this.off("thumbnailsMoveComplete." + a)
        },
        thumbnailArrowsDefaults: {
            thumbnailArrows: !1,
            fadeThumbnailArrows: !0
        }
    })
})(window, jQuery);
(function(e, t) {
    "use strict";
    var a = "Video." + t.SliderPro.namespace;
    t.SliderPro.addModule("Video", {
        firstInit: !1,
        initVideo: function() {
            this.on("update." + a, t.proxy(this._videoOnUpdate, this)), this.on("gotoSlideComplete." + a, t.proxy(this._videoOnGotoSlideComplete, this))
        },
        _videoOnUpdate: function() {
            var e = this;
            this.$slider.find(".sp-video").not("a, [data-video-init]").each(function() {
                var a = t(this);
                e._initVideo(a)
            }), this.$slider.find("a.sp-video").not("[data-video-preinit]").each(function() {
                var a = t(this);
                e._preinitVideo(a)
            }), !1 === this.firstInit && (this.firstInit = !0, this._videoOnGotoSlideComplete({
                index: this.selectedSlideIndex,
                previousIndex: -1
            }))
        },
        _initVideo: function(e) {
            var i = this;
            e.attr("data-video-init", !0).videoController(), e.on("videoPlay." + a, function() {
                "stopAutoplay" === i.settings.playVideoAction && "undefined" != typeof i.stopAutoplay && (i.stopAutoplay(), i.settings.autoplay = !1);
                var a = {
                    type: "videoPlay",
                    video: e
                };
                i.trigger(a), t.isFunction(i.settings.videoPlay) && i.settings.videoPlay.call(i, a)
            }), e.on("videoPause." + a, function() {
                "startAutoplay" === i.settings.pauseVideoAction && "undefined" != typeof i.startAutoplay && (i.startAutoplay(), i.settings.autoplay = !0);
                var a = {
                    type: "videoPause",
                    video: e
                };
                i.trigger(a), t.isFunction(i.settings.videoPause) && i.settings.videoPause.call(i, a)
            }), e.on("videoEnded." + a, function() {
                "startAutoplay" === i.settings.endVideoAction && "undefined" != typeof i.startAutoplay ? (i.startAutoplay(), i.settings.autoplay = !0) : "nextSlide" === i.settings.endVideoAction ? i.nextSlide() : "replayVideo" === i.settings.endVideoAction && e.videoController("replay");
                var a = {
                    type: "videoEnd",
                    video: e
                };
                i.trigger(a), t.isFunction(i.settings.videoEnd) && i.settings.videoEnd.call(i, a)
            })
        },
        _preinitVideo: function(e) {
            var i = this;
            e.attr("data-video-preinit", !0), e.on("click." + a, function(a) {
                if (!i.$slider.hasClass("sp-swiping")) {
                    a.preventDefault();
                    var n = e.attr("href"),
                        s = e.children("img").attr("width") || e.children("img").width(),
                        o = e.children("img").attr("height") || e.children("img").height(),
                        r, l, d, p, c, u, m; - 1 !== n.indexOf("youtube") || -1 !== n.indexOf("youtu.be") ? l = "youtube" : -1 !== n.indexOf("vimeo") && (l = "vimeo"), d = "youtube" === l ? /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/ : /http:\/\/(www\.)?vimeo.com\/(\d+)/, p = n.match(d), c = p[2], u = "youtube" === l ? "//www.youtube.com/embed/" + c + "?enablejsapi=1&wmode=opaque" : "//player.vimeo.com/video/" + c + "?api=1", m = n.split("?")[1], "undefined" != typeof m && (m = m.split("&"), t.each(m, function(e, t) {
                        -1 === t.indexOf(c) && (u += "&" + t)
                    })), r = t("<iframe></iframe>").attr({
                        src: u,
                        width: s,
                        height: o,
                        class: e.attr("class"),
                        frameborder: 0,
                        allowfullscreen: "allowfullscreen"
                    }).insertBefore(e), i._initVideo(r), r.videoController("play"), e.css("display", "none")
                }
            })
        },
        _videoOnGotoSlideComplete: function(e) {
            var t = this.$slides.find(".sp-slide").eq(e.previousIndex).find(".sp-video[data-video-init]");
            if (-1 !== e.previousIndex && 0 !== t.length && ("stopVideo" === this.settings.leaveVideoAction ? t.videoController("stop") : "pauseVideo" === this.settings.leaveVideoAction ? t.videoController("pause") : "removeVideo" === this.settings.leaveVideoAction && (0 === t.siblings("a.sp-video").length ? t.videoController("stop") : (t.siblings("a.sp-video").css("display", ""), t.videoController("destroy"), t.remove()))), "playVideo" === this.settings.reachVideoAction) {
                var i = this.$slides.find(".sp-slide").eq(e.index).find(".sp-video[data-video-init]"),
                    n = this.$slides.find(".sp-slide").eq(e.index).find(".sp-video[data-video-preinit]");
                0 === i.length ? 0 !== n.length && n.trigger("click." + a) : i.videoController("play")
            }
        },
        destroyVideo: function() {
            this.$slider.find(".sp-video[ data-video-preinit ]").each(function() {
                var e = t(this);
                e.removeAttr("data-video-preinit"), e.off("click." + a)
            }), this.$slider.find(".sp-video[ data-video-init ]").each(function() {
                var e = t(this);
                e.removeAttr("data-video-init"), e.off("Video"), e.videoController("destroy")
            }), this.off("update." + a), this.off("gotoSlideComplete." + a)
        },
        videoDefaults: {
            reachVideoAction: "none",
            leaveVideoAction: "pauseVideo",
            playVideoAction: "stopAutoplay",
            pauseVideoAction: "none",
            endVideoAction: "none",
            videoPlay: function() {},
            videoPause: function() {},
            videoEnd: function() {}
        }
    })
})(window, jQuery);
(function(e) {
    "use strict";
    var t = !!window.navigator.userAgent.match(/(iPad|iPhone|iPod)/g),
        a = function(t, a) {
            this.$video = e(t), this.options = a, this.settings = {}, this.player = null, this._init()
        };
    a.prototype = {
        _init: function() {
            this.settings = e.extend({}, this.defaults, this.options);
            var t = this,
                a = e.VideoController.players,
                i = this.$video.attr("id");
            for (var n in a)
                if ("undefined" != typeof a[n] && a[n].isType(this.$video)) {
                    this.player = new a[n](this.$video);
                    break
                }
            if (null !== this.player) {
                e.each(["ready", "start", "play", "pause", "ended"], function(a, n) {
                    var s = "video" + n.charAt(0).toUpperCase() + n.slice(1);
                    t.player.on(n, function() {
                        t.trigger({
                            type: s,
                            video: i
                        }), e.isFunction(t.settings[s]) && t.settings[s].call(t, {
                            type: s,
                            video: i
                        })
                    })
                })
            }
        },
        play: function() {
            !0 == t && !1 === this.player.isStarted() || "playing" === this.player.getState() || this.player.play()
        },
        stop: function() {
            !0 == t && !1 === this.player.isStarted() || "stopped" === this.player.getState() || this.player.stop()
        },
        pause: function() {
            !0 == t && !1 === this.player.isStarted() || "paused" === this.player.getState() || this.player.pause()
        },
        replay: function() {
            !0 == t && !1 === this.player.isStarted() || this.player.replay()
        },
        on: function(e, t) {
            return this.$video.on(e, t)
        },
        off: function(e) {
            return this.$video.off(e)
        },
        trigger: function(e) {
            return this.$video.triggerHandler(e)
        },
        destroy: function() {
            !0 === this.player.isStarted() && this.stop(), this.player.off("ready"), this.player.off("start"), this.player.off("play"), this.player.off("pause"), this.player.off("ended"), this.$video.removeData("videoController")
        },
        defaults: {
            videoReady: function() {},
            videoStart: function() {},
            videoPlay: function() {},
            videoPause: function() {},
            videoEnded: function() {}
        }
    }, e.VideoController = {
        players: {},
        addPlayer: function(e, t) {
            this.players[e] = t
        }
    }, e.fn.videoController = function(t) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            if ("undefined" == typeof e(this).data("videoController")) {
                var n = new a(this, t);
                e(this).data("videoController", n)
            } else if ("undefined" != typeof t) {
                var s = e(this).data("videoController");
                "function" == typeof s[t] ? s[t].apply(s, i) : e.error(t + " does not exist in videoController.")
            }
        })
    };
    var i = function(t) {
        this.$video = t, this.player = null, this.ready = !1, this.started = !1, this.state = "", this.events = e({}), this._init()
    };
    i.prototype = {
        _init: function() {},
        play: function() {},
        pause: function() {},
        stop: function() {},
        replay: function() {},
        isType: function() {},
        isReady: function() {
            return this.ready
        },
        isStarted: function() {
            return this.started
        },
        getState: function() {
            return this.state
        },
        on: function(e, t) {
            return this.events.on(e, t)
        },
        off: function(e) {
            return this.events.off(e)
        },
        trigger: function(e) {
            return this.events.triggerHandler(e)
        }
    };
    var n = {
            youtubeAPIAdded: !1,
            youtubeVideos: []
        },
        s = function(t) {
            this.init = !1;
            var a = window.YT && window.YT.Player;
            if ("undefined" != typeof a) i.call(this, t);
            else if (n.youtubeVideos.push({
                    video: t,
                    scope: this
                }), !1 === n.youtubeAPIAdded) {
                n.youtubeAPIAdded = !0;
                var s = document.createElement("script");
                s.src = "//www.youtube.com/player_api";
                var o = document.getElementsByTagName("script")[0];
                o.parentNode.insertBefore(s, o), window.onYouTubePlayerAPIReady = function() {
                    e.each(n.youtubeVideos, function(e, t) {
                        i.call(t.scope, t.video)
                    })
                }
            }
        };
    s.prototype = new i, s.prototype.constructor = s, e.VideoController.addPlayer("YoutubeVideo", s), s.isType = function(e) {
        if (e.is("iframe")) {
            var t = e.attr("src");
            if (-1 !== t.indexOf("youtube.com") || -1 !== t.indexOf("youtu.be")) return !0
        }
        return !1
    }, s.prototype._init = function() {
        this.init = !0, this._setup()
    }, s.prototype._setup = function() {
        var e = this;
        this.player = new YT.Player(this.$video[0], {
            events: {
                onReady: function() {
                    e.trigger({
                        type: "ready"
                    }), e.ready = !0
                },
                onStateChange: function(t) {
                    switch (t.data) {
                        case YT.PlayerState.PLAYING:
                            !1 === e.started && (e.started = !0, e.trigger({
                                type: "start"
                            })), e.state = "playing", e.trigger({
                                type: "play"
                            });
                            break;
                        case YT.PlayerState.PAUSED:
                            e.state = "paused", e.trigger({
                                type: "pause"
                            });
                            break;
                        case YT.PlayerState.ENDED:
                            e.state = "ended", e.trigger({
                                type: "ended"
                            });
                    }
                }
            }
        })
    }, s.prototype.play = function() {
        var e = this;
        if (!0 === this.ready) this.player.playVideo();
        else var t = setInterval(function() {
            !0 === e.ready && (clearInterval(t), e.player.playVideo())
        }, 100)
    }, s.prototype.pause = function() {
        !0 == t ? this.stop() : this.player.pauseVideo()
    }, s.prototype.stop = function() {
        this.player.seekTo(1), this.player.stopVideo(), this.state = "stopped"
    }, s.prototype.replay = function() {
        this.player.seekTo(1), this.player.playVideo()
    }, s.prototype.on = function(e, t) {
        var a = this;
        if (!0 === this.init) i.prototype.on.call(this, e, t);
        else var n = setInterval(function() {
            !0 === a.init && (clearInterval(n), i.prototype.on.call(a, e, t))
        }, 100)
    };
    var o = {
            vimeoAPIAdded: !1,
            vimeoVideos: []
        },
        r = function(t) {
            if (this.init = !1, "undefined" != typeof window.Froogaloop) i.call(this, t);
            else if (o.vimeoVideos.push({
                    video: t,
                    scope: this
                }), !1 === o.vimeoAPIAdded) {
                o.vimeoAPIAdded = !0;
                var a = document.createElement("script");
                a.src = "//a.vimeocdn.com/js/froogaloop2.min.js";
                var n = document.getElementsByTagName("script")[0];
                n.parentNode.insertBefore(a, n);
                var s = setInterval(function() {
                    "undefined" != typeof window.Froogaloop && (clearInterval(s), e.each(o.vimeoVideos, function(e, t) {
                        i.call(t.scope, t.video)
                    }))
                }, 100)
            }
        };
    r.prototype = new i, r.prototype.constructor = r, e.VideoController.addPlayer("VimeoVideo", r), r.isType = function(e) {
        if (e.is("iframe")) {
            var t = e.attr("src");
            if (-1 !== t.indexOf("vimeo.com")) return !0
        }
        return !1
    }, r.prototype._init = function() {
        this.init = !0, this._setup()
    }, r.prototype._setup = function() {
        var e = this;
        this.player = $f(this.$video[0]), this.player.addEvent("ready", function() {
            e.ready = !0, e.trigger({
                type: "ready"
            }), e.player.addEvent("play", function() {
                !1 === e.started && (e.started = !0, e.trigger({
                    type: "start"
                })), e.state = "playing", e.trigger({
                    type: "play"
                })
            }), e.player.addEvent("pause", function() {
                e.state = "paused", e.trigger({
                    type: "pause"
                })
            }), e.player.addEvent("finish", function() {
                e.state = "ended", e.trigger({
                    type: "ended"
                })
            })
        })
    }, r.prototype.play = function() {
        var e = this;
        if (!0 === this.ready) this.player.api("play");
        else var t = setInterval(function() {
            !0 === e.ready && (clearInterval(t), e.player.api("play"))
        }, 100)
    }, r.prototype.pause = function() {
        this.player.api("pause")
    }, r.prototype.stop = function() {
        this.player.api("seekTo", 0), this.player.api("pause"), this.state = "stopped"
    }, r.prototype.replay = function() {
        this.player.api("seekTo", 0), this.player.api("play")
    }, r.prototype.on = function(e, t) {
        var a = this;
        if (!0 === this.init) i.prototype.on.call(this, e, t);
        else var n = setInterval(function() {
            !0 === a.init && (clearInterval(n), i.prototype.on.call(a, e, t))
        }, 100)
    };
    var l = function(e) {
        i.call(this, e)
    };
    l.prototype = new i, l.prototype.constructor = l, e.VideoController.addPlayer("HTML5Video", l), l.isType = function(e) {
        return e.is("video") && !1 === e.hasClass("video-js") && !1 === e.hasClass("sublime")
    }, l.prototype._init = function() {
        var e = this;
        this.player = this.$video[0];
        var t = setInterval(function() {
            4 === e.player.readyState && (clearInterval(t), e.ready = !0, e.trigger({
                type: "ready"
            }), e.player.addEventListener("play", function() {
                !1 === e.started && (e.started = !0, e.trigger({
                    type: "start"
                })), e.state = "playing", e.trigger({
                    type: "play"
                })
            }), e.player.addEventListener("pause", function() {
                e.state = "paused", e.trigger({
                    type: "pause"
                })
            }), e.player.addEventListener("ended", function() {
                e.state = "ended", e.trigger({
                    type: "ended"
                })
            }))
        }, 100)
    }, l.prototype.play = function() {
        var e = this;
        if (!0 === this.ready) this.player.play();
        else var t = setInterval(function() {
            !0 === e.ready && (clearInterval(t), e.player.play())
        }, 100)
    }, l.prototype.pause = function() {
        this.player.pause()
    }, l.prototype.stop = function() {
        this.player.currentTime = 0, this.player.pause(), this.state = "stopped"
    }, l.prototype.replay = function() {
        this.player.currentTime = 0, this.player.play()
    };
    var d = function(e) {
        i.call(this, e)
    };
    d.prototype = new i, d.prototype.constructor = d, e.VideoController.addPlayer("VideoJSVideo", d), d.isType = function(e) {
        return ("undefined" != typeof e.attr("data-videojs-id") || e.hasClass("video-js")) && "undefined" != typeof videojs
    }, d.prototype._init = function() {
        var e = this,
            t = this.$video.hasClass("video-js") ? this.$video.attr("id") : this.$video.attr("data-videojs-id");
        this.player = videojs(t), this.player.ready(function() {
            e.ready = !0, e.trigger({
                type: "ready"
            }), e.player.on("play", function() {
                !1 === e.started && (e.started = !0, e.trigger({
                    type: "start"
                })), e.state = "playing", e.trigger({
                    type: "play"
                })
            }), e.player.on("pause", function() {
                e.state = "paused", e.trigger({
                    type: "pause"
                })
            }), e.player.on("ended", function() {
                e.state = "ended", e.trigger({
                    type: "ended"
                })
            })
        })
    }, d.prototype.play = function() {
        this.player.play()
    }, d.prototype.pause = function() {
        this.player.pause()
    }, d.prototype.stop = function() {
        this.player.currentTime(0), this.player.pause(), this.state = "stopped"
    }, d.prototype.replay = function() {
        this.player.currentTime(0), this.player.play()
    };
    var p = function(e) {
        i.call(this, e)
    };
    p.prototype = new i, p.prototype.constructor = p, e.VideoController.addPlayer("SublimeVideo", p), p.isType = function(e) {
        return e.hasClass("sublime") && "undefined" != typeof sublime
    }, p.prototype._init = function() {
        var e = this;
        sublime.ready(function() {
            e.player = sublime.player(e.$video.attr("id")), e.ready = !0, e.trigger({
                type: "ready"
            }), e.player.on("play", function() {
                !1 === e.started && (e.started = !0, e.trigger({
                    type: "start"
                })), e.state = "playing", e.trigger({
                    type: "play"
                })
            }), e.player.on("pause", function() {
                e.state = "paused", e.trigger({
                    type: "pause"
                })
            }), e.player.on("stop", function() {
                e.state = "stopped", e.trigger({
                    type: "stop"
                })
            }), e.player.on("end", function() {
                e.state = "ended", e.trigger({
                    type: "ended"
                })
            })
        })
    }, p.prototype.play = function() {
        this.player.play()
    }, p.prototype.pause = function() {
        this.player.pause()
    }, p.prototype.stop = function() {
        this.player.stop()
    }, p.prototype.replay = function() {
        this.player.stop(), this.player.play()
    };
    var c = function(e) {
        i.call(this, e)
    };
    c.prototype = new i, c.prototype.constructor = c, e.VideoController.addPlayer("JWPlayerVideo", c), c.isType = function(e) {
        return ("undefined" != typeof e.attr("data-jwplayer-id") || e.hasClass("jwplayer") || 0 !== e.find("object[data*='jwplayer']").length) && "undefined" != typeof jwplayer
    }, c.prototype._init = function() {
        var e = this,
            t;
        this.$video.hasClass("jwplayer") ? t = this.$video.attr("id") : "undefined" == typeof this.$video.attr("data-jwplayer-id") ? 0 !== this.$video.find("object[data*='jwplayer']").length && (t = this.$video.find("object").attr("id")) : t = this.$video.attr("data-jwplayer-id"), this.player = jwplayer(t), this.player.onReady(function() {
            e.ready = !0, e.trigger({
                type: "ready"
            }), e.player.onPlay(function() {
                !1 === e.started && (e.started = !0, e.trigger({
                    type: "start"
                })), e.state = "playing", e.trigger({
                    type: "play"
                })
            }), e.player.onPause(function() {
                e.state = "paused", e.trigger({
                    type: "pause"
                })
            }), e.player.onComplete(function() {
                e.state = "ended", e.trigger({
                    type: "ended"
                })
            })
        })
    }, c.prototype.play = function() {
        this.player.play(!0)
    }, c.prototype.pause = function() {
        this.player.pause(!0)
    }, c.prototype.stop = function() {
        this.player.stop(), this.state = "stopped"
    }, c.prototype.replay = function() {
        this.player.seek(0), this.player.play(!0)
    }
})(jQuery), ! function(t, e) {
    function m(t, a) {
        return typeof t === a
    }

    function n() {
        var d, e, n, t, p, s, a;
        for (var r in l)
            if (l.hasOwnProperty(r)) {
                if (d = [], e = l[r], e.name && (d.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length))
                    for (n = 0; n < e.options.aliases.length; n++) d.push(e.options.aliases[n].toLowerCase());
                for (t = m(e.fn, "function") ? e.fn() : e.fn, p = 0; p < d.length; p++) s = d[p], a = s.split("."), 1 === a.length ? u[a[0]] = t : (!u[a[0]] || u[a[0]] instanceof Boolean || (u[a[0]] = new Boolean(u[a[0]])), u[a[0]][a[1]] = t), o.push((t ? "" : "no-") + a.join("-"))
            }
    }

    function g(a) {
        var e = r.className,
            i = u._config.classPrefix || "";
        if (d && (e = e.baseVal), u._config.enableJSClass) {
            var t = new RegExp("(^|\\s)" + i + "no-js(\\s|$)");
            e = e.replace(t, "$1" + i + "js$2")
        }
        u._config.enableClasses && (e += " " + i + a.join(" " + i), d ? r.className.baseVal = e : r.className = e)
    }

    function i(a, s) {
        if ("object" == typeof a)
            for (var r in a) p(a, r) && i(r, a[r]);
        else {
            a = a.toLowerCase();
            var t = a.split("."),
                o = u[t[0]];
            if (2 == t.length && (o = o[t[1]]), "undefined" != typeof o) return u;
            s = "function" == typeof s ? s() : s, 1 == t.length ? u[t[0]] = s : (!u[t[0]] || u[t[0]] instanceof Boolean || (u[t[0]] = new Boolean(u[t[0]])), u[t[0]][t[1]] = s), g([(s && 0 != s ? "" : "no-") + t.join("-")]), u._trigger(a, s)
        }
        return u
    }

    function a() {
        return "function" == typeof e.createElement ? d ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments) : e.createElement(arguments[0])
    }
    var o = [],
        l = [],
        s = {
            _version: "3.3.1",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(a, e) {
                var i = this;
                setTimeout(function() {
                    e(i[a])
                }, 0)
            },
            addTest: function(a, i, s) {
                l.push({
                    name: a,
                    fn: i,
                    options: s
                })
            },
            addAsyncTest: function(t) {
                l.push({
                    name: null,
                    fn: t
                })
            }
        },
        u = function() {};
    u.prototype = s, u = new u, u.addTest("filereader", !!(t.File && t.FileList && t.FileReader)), u.addTest("xhr2", "XMLHttpRequest" in t && "withCredentials" in new XMLHttpRequest);
    var r = e.documentElement,
        d = "svg" === r.nodeName.toLowerCase(),
        p;
    ! function() {
        var a = {}.hasOwnProperty;
        p = m(a, "undefined") || m(a.call, "undefined") ? function(t, e) {
            return e in t && m(t.constructor.prototype[e], "undefined")
        } : function(e, i) {
            return a.call(e, i)
        }
    }(), s._l = {}, s.on = function(t, e) {
        this._l[t] || (this._l[t] = []), this._l[t].push(e), u.hasOwnProperty(t) && setTimeout(function() {
            u._trigger(t, u[t])
        }, 0)
    }, s._trigger = function(a, i) {
        if (this._l[a]) {
            var n = this._l[a];
            setTimeout(function() {
                var t, e;
                for (t = 0; t < n.length; t++)(e = n[t])(i)
            }, 0), delete this._l[a]
        }
    }, u._q.push(function() {
        s.addTest = i
    }), u.addTest("fileinput", function() {
        if (navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/)) return !1;
        var t = a("input");
        return t.type = "file", !t.disabled
    }), n(), g(o), delete s.addTest, delete s.addAsyncTest;
    for (var c = 0; c < u._q.length; c++) u._q[c]();
    t.Modernizr = u
}(window, document),
function(e, t) {
    "function" == typeof define && define.amd ? define(t) : !e.tooltip && (e.tooltip = t(e))
}(this, function() {
    function e(e) {
        e && (d = l.concat(), l = []), Array.prototype.forEach.call(document.querySelectorAll("[data-tooltip]"), function(t, a) {
            var r = t.getAttribute("title").trim(),
                p;
            e && d.length && d[a] && d[a].text && (0 === r.length && (t.setAttribute("title", d[a].text), r = d[a].text), t.removeEventListener("mousemove", i), t.removeEventListener("mouseout", n), t.removeEventListener("mouseover", s)), r && (t.setAttribute("title", ""), t.setAttribute("data-tooltip-id", a), p = o(t.getAttribute("data-tooltip")), l[a] = {
                text: r,
                options: p
            }, t.addEventListener("mousemove", i), t.addEventListener("mouseout", n), t.addEventListener("mouseover", s))
        }), e && (d = null)
    }

    function t(e, t) {
        var a = document.createElement("div"),
            i = document.createElement("div");
        i.innerHTML = e;
        var n = t && l[t] && l[t].options;
        n && n["class"] && a.setAttribute("class", n["class"]), a.setAttribute("id", r.tooltipId), a.appendChild(i), document.querySelector("body").appendChild(a)
    }

    function a() {
        return document.querySelector("#" + r.tooltipId)
    }

    function i(e) {
        var t = this.getAttribute("data-tooltip-id"),
            i = a(),
            n = t && l[t] && l[t].options,
            s = n && n.offset || r.offsetDefault,
            o = window.scrollY || window.pageYOffset,
            d = window.scrollX || window.pageXOffset,
            p = e.pageY + s,
            c = e.pageX + s;
        i && (p = p - o + i.offsetHeight + 20 >= window.innerHeight ? p - i.offsetHeight - 20 : p, c = c - d + i.offsetWidth + 20 >= window.innerWidth ? c - i.offsetWidth - 20 : c, i.style.top = p + "px", i.style.left = c + "px")
    }

    function n() {
        var e = a();
        e && document.querySelector("body").removeChild(e)
    }

    function s() {
        this.getAttribute("data-tooltip-gae") && gae("tooltip", this.getAttribute("data-tooltip-gae"));
        var e = this.getAttribute("data-tooltip-id"),
            a = e && l[e] && l[e].text;
        a && t(a, e)
    }

    function o(e) {
        var t;
        if (e.length) try {
            t = JSON.parse(e.replace(/'/ig, "\""))
        } catch (e) {}
        return t
    }
    var r = {
            tooltipId: "tooltip",
            offsetDefault: 15
        },
        l = [],
        d = null;
    return function() {
        window.addEventListener("load", e)
    }(), {
        setOptions: function(e) {
            for (var t in e) r.hasOwnProperty(t) && (r[t] = e[t])
        },
        refresh: function() {
            e(!0)
        }
    }
}), ! function() {
    "use strict";
    var y = Math.round,
        b = Math.abs,
        f = Math.ceil,
        x = Math.floor,
        C = Math.min,
        n = Math.PI,
        v = Math.max,
        $ = function(t, N) {
            function j(t) {
                return x(t)
            }

            function a() {
                var t = R.params.autoplay,
                    e = R.slides.eq(R.activeIndex);
                e.attr("data-swiper-autoplay") && (t = e.attr("data-swiper-autoplay") || R.params.autoplay), R.autoplayTimeoutId = setTimeout(function() {
                    R.params.loop ? (R.fixLoop(), R._slideNext(), R.emit("onAutoplay", R)) : R.isEnd ? N.autoplayStopOnLast ? R.stopAutoplay() : (R._slideTo(0), R.emit("onAutoplay", R)) : (R._slideNext(), R.emit("onAutoplay", R))
                }, t)
            }

            function F(e, n) {
                var a = _(e.target);
                if (!a.is(n))
                    if ("string" == typeof n) a = a.parents(n);
                    else if (n.nodeType) {
                    var s;
                    return a.parents().each(function(t, e) {
                        e === n && (s = n)
                    }), s ? n : void 0
                }
                return 0 === a.length ? void 0 : a[0]
            }

            function i(i, e) {
                e = e || {};
                var a = window.MutationObserver || window.WebkitMutationObserver,
                    t = new a(function(t) {
                        t.forEach(function(t) {
                            R.onResize(!0), R.emit("onObserverUpdate", R, t)
                        })
                    });
                t.observe(i, {
                    attributes: void 0 === e.attributes || e.attributes,
                    childList: void 0 === e.childList || e.childList,
                    characterData: void 0 === e.characterData || e.characterData
                }), R.observers.push(t)
            }

            function s(d) {
                d.originalEvent && (d = d.originalEvent);
                var e = d.keyCode || d.charCode;
                if (!R.params.allowSwipeToNext && (R.isHorizontal() && 39 === e || !R.isHorizontal() && 40 === e)) return !1;
                if (!R.params.allowSwipeToPrev && (R.isHorizontal() && 37 === e || !R.isHorizontal() && 38 === e)) return !1;
                if (!(d.shiftKey || d.altKey || d.ctrlKey || d.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                    if (37 === e || 39 === e || 38 === e || 40 === e) {
                        var a = !1;
                        if (0 < R.container.parents("." + R.params.slideClass).length && 0 === R.container.parents("." + R.params.slideActiveClass).length) return;
                        var c = {
                                left: window.pageXOffset,
                                top: window.pageYOffset
                            },
                            s = window.innerWidth,
                            i = window.innerHeight,
                            r = R.container.offset();
                        R.rtl && (r.left -= R.container[0].scrollLeft);
                        for (var n = [
                                [r.left, r.top],
                                [r.left + R.width, r.top],
                                [r.left, r.top + R.height],
                                [r.left + R.width, r.top + R.height]
                            ], o = 0, l; o < n.length; o++) l = n[o], l[0] >= c.left && l[0] <= c.left + s && l[1] >= c.top && l[1] <= c.top + i && (a = !0);
                        if (!a) return
                    }
                    R.isHorizontal() ? (37 !== e && 39 !== e || (d.preventDefault ? d.preventDefault() : d.returnValue = !1), (39 === e && !R.rtl || 37 === e && R.rtl) && R.slideNext(), (37 === e && !R.rtl || 39 === e && R.rtl) && R.slidePrev()) : (38 !== e && 40 !== e || (d.preventDefault ? d.preventDefault() : d.returnValue = !1), 40 === e && R.slideNext(), 38 === e && R.slidePrev()), R.emit("onKeyPress", R, e)
                }
            }

            function o(n) {
                var e = 0,
                    o = 0,
                    r = 0,
                    l = 0;
                return "detail" in n && (o = n.detail), "wheelDelta" in n && (o = -n.wheelDelta / 120), "wheelDeltaY" in n && (o = -n.wheelDeltaY / 120), "wheelDeltaX" in n && (e = -n.wheelDeltaX / 120), "axis" in n && n.axis === n.HORIZONTAL_AXIS && (e = o, o = 0), r = 10 * e, l = 10 * o, "deltaY" in n && (l = n.deltaY), "deltaX" in n && (r = n.deltaX), (r || l) && n.deltaMode && (1 === n.deltaMode ? (r *= 40, l *= 40) : (r *= 800, l *= 800)), r && !e && (e = 1 > r ? -1 : 1), l && !o && (o = 1 > l ? -1 : 1), {
                    spinX: e,
                    spinY: o,
                    pixelX: r,
                    pixelY: l
                }
            }

            function r(l) {
                l.originalEvent && (l = l.originalEvent);
                var e = 0,
                    d = R.rtl ? -1 : 1,
                    t = o(l);
                if (!R.params.mousewheelForceToAxis) e = b(t.pixelX) > b(t.pixelY) ? -t.pixelX * d : -t.pixelY;
                else if (R.isHorizontal()) {
                    if (!(b(t.pixelX) > b(t.pixelY))) return;
                    e = t.pixelX * d
                } else {
                    if (!(b(t.pixelY) > b(t.pixelX))) return;
                    e = t.pixelY
                }
                if (0 !== e) {
                    if (R.params.mousewheelInvert && (e = -e), R.params.freeMode) {
                        var s = R.getWrapperTranslate() + e * R.params.mousewheelSensitivity,
                            i = R.isBeginning,
                            p = R.isEnd;
                        if (s >= R.minTranslate() && (s = R.minTranslate()), s <= R.maxTranslate() && (s = R.maxTranslate()), R.setWrapperTransition(0), R.setWrapperTranslate(s), R.updateProgress(), R.updateActiveIndex(), (!i && R.isBeginning || !p && R.isEnd) && R.updateClasses(), R.params.freeModeSticky ? (clearTimeout(R.mousewheel.timeout), R.mousewheel.timeout = setTimeout(function() {
                                R.slideReset()
                            }, 300)) : R.params.lazyLoading && R.lazy && R.lazy.load(), R.emit("onScroll", R, l), R.params.autoplay && R.params.autoplayDisableOnInteraction && R.stopAutoplay(), 0 === s || s === R.maxTranslate()) return
                    } else {
                        if (60 < new window.Date().getTime() - R.mousewheel.lastScrollTime)
                            if (0 > e) {
                                if (!(R.isEnd && !R.params.loop || R.animating)) R.slideNext(), R.emit("onScroll", R, l);
                                else if (R.params.mousewheelReleaseOnEdges) return !0;
                            } else if (!(R.isBeginning && !R.params.loop || R.animating)) R.slidePrev(), R.emit("onScroll", R, l);
                        else if (R.params.mousewheelReleaseOnEdges) return !0;
                        R.mousewheel.lastScrollTime = new window.Date().getTime()
                    }
                    return l.preventDefault ? l.preventDefault() : l.returnValue = !1, !1
                }
            }

            function l(e, a) {
                e = _(e);
                var t = R.rtl ? -1 : 1,
                    n, s, i;
                n = e.attr("data-swiper-parallax") || "0", s = e.attr("data-swiper-parallax-x"), i = e.attr("data-swiper-parallax-y"), s || i ? (s = s || "0", i = i || "0") : R.isHorizontal() ? (s = n, i = "0") : (i = n, s = "0"), s = 0 <= s.indexOf("%") ? parseInt(s, 10) * a * t + "%" : s * a * t + "px", i = 0 <= i.indexOf("%") ? parseInt(i, 10) * a + "%" : i * a + "px", e.transform("translate3d(" + s + ", " + i + ",0px)")
            }

            function d(t) {
                return 0 !== t.indexOf("on") && (t = t[0] === t[0].toUpperCase() ? "on" + t : "on" + t[0].toUpperCase() + t.substring(1)), t
            }
            var p = Math.pow;
            if (!(this instanceof $)) return new $(t, N);
            var c = {
                    direction: "horizontal",
                    touchEventsTarget: "container",
                    initialSlide: 0,
                    speed: 300,
                    autoplay: !1,
                    autoplayDisableOnInteraction: !0,
                    autoplayStopOnLast: !1,
                    iOSEdgeSwipeDetection: !1,
                    iOSEdgeSwipeThreshold: 20,
                    freeMode: !1,
                    freeModeMomentum: !0,
                    freeModeMomentumRatio: 1,
                    freeModeMomentumBounce: !0,
                    freeModeMomentumBounceRatio: 1,
                    freeModeMomentumVelocityRatio: 1,
                    freeModeSticky: !1,
                    freeModeMinimumVelocity: .02,
                    autoHeight: !1,
                    setWrapperSize: !1,
                    virtualTranslate: !1,
                    effect: "slide",
                    coverflow: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: !0
                    },
                    flip: {
                        slideShadows: !0,
                        limitRotation: !0
                    },
                    cube: {
                        slideShadows: !0,
                        shadow: !0,
                        shadowOffset: 20,
                        shadowScale: .94
                    },
                    fade: {
                        crossFade: !1
                    },
                    parallax: !1,
                    zoom: !1,
                    zoomMax: 3,
                    zoomMin: 1,
                    zoomToggle: !0,
                    scrollbar: null,
                    scrollbarHide: !0,
                    scrollbarDraggable: !1,
                    scrollbarSnapOnRelease: !1,
                    keyboardControl: !1,
                    mousewheelControl: !1,
                    mousewheelReleaseOnEdges: !1,
                    mousewheelInvert: !1,
                    mousewheelForceToAxis: !1,
                    mousewheelSensitivity: 1,
                    mousewheelEventsTarged: "container",
                    hashnav: !1,
                    hashnavWatchState: !1,
                    history: !1,
                    replaceState: !1,
                    breakpoints: void 0,
                    spaceBetween: 0,
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerColumnFill: "column",
                    slidesPerGroup: 1,
                    centeredSlides: !1,
                    slidesOffsetBefore: 0,
                    slidesOffsetAfter: 0,
                    roundLengths: !1,
                    touchRatio: 1,
                    touchAngle: 45,
                    simulateTouch: !0,
                    shortSwipes: !0,
                    longSwipes: !0,
                    longSwipesRatio: .5,
                    longSwipesMs: 300,
                    followFinger: !0,
                    onlyExternal: !1,
                    threshold: 0,
                    touchMoveStopPropagation: !0,
                    touchReleaseOnEdges: !1,
                    uniqueNavElements: !0,
                    pagination: null,
                    paginationElement: "span",
                    paginationClickable: !1,
                    paginationHide: !1,
                    paginationBulletRender: null,
                    paginationProgressRender: null,
                    paginationFractionRender: null,
                    paginationCustomRender: null,
                    paginationType: "bullets",
                    resistance: !0,
                    resistanceRatio: .85,
                    nextButton: null,
                    prevButton: null,
                    watchSlidesProgress: !1,
                    watchSlidesVisibility: !1,
                    grabCursor: !1,
                    preventClicks: !0,
                    preventClicksPropagation: !0,
                    slideToClickedSlide: !1,
                    lazyLoading: !1,
                    lazyLoadingInPrevNext: !1,
                    lazyLoadingInPrevNextAmount: 1,
                    lazyLoadingOnTransitionStart: !1,
                    preloadImages: !0,
                    updateOnImagesReady: !0,
                    loop: !1,
                    loopAdditionalSlides: 0,
                    loopedSlides: null,
                    control: void 0,
                    controlInverse: !1,
                    controlBy: "slide",
                    normalizeSlideIndex: !0,
                    allowSwipeToPrev: !0,
                    allowSwipeToNext: !0,
                    swipeHandler: null,
                    noSwiping: !0,
                    noSwipingClass: "swiper-no-swiping",
                    passiveListeners: !0,
                    containerModifierClass: "swiper-container-",
                    slideClass: "swiper-slide",
                    slideActiveClass: "swiper-slide-active",
                    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                    slideVisibleClass: "swiper-slide-visible",
                    slideDuplicateClass: "swiper-slide-duplicate",
                    slideNextClass: "swiper-slide-next",
                    slideDuplicateNextClass: "swiper-slide-duplicate-next",
                    slidePrevClass: "swiper-slide-prev",
                    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                    wrapperClass: "swiper-wrapper",
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    buttonDisabledClass: "swiper-button-disabled",
                    paginationCurrentClass: "swiper-pagination-current",
                    paginationTotalClass: "swiper-pagination-total",
                    paginationHiddenClass: "swiper-pagination-hidden",
                    paginationProgressbarClass: "swiper-pagination-progressbar",
                    paginationClickableClass: "swiper-pagination-clickable",
                    paginationModifierClass: "swiper-pagination-",
                    lazyLoadingClass: "swiper-lazy",
                    lazyStatusLoadingClass: "swiper-lazy-loading",
                    lazyStatusLoadedClass: "swiper-lazy-loaded",
                    lazyPreloaderClass: "swiper-lazy-preloader",
                    notificationClass: "swiper-notification",
                    preloaderClass: "preloader",
                    zoomContainerClass: "swiper-zoom-container",
                    observer: !1,
                    observeParents: !1,
                    a11y: !1,
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}",
                    runCallbacksOnInit: !0
                },
                u = N && N.virtualTranslate;
            N = N || {};
            var m = {};
            for (var h in N)
                if ("object" != typeof N[h] || null === N[h] || N[h].nodeType || N[h] === window || N[h] === document || void 0 !== e && N[h] instanceof e || "undefined" != typeof jQuery && N[h] instanceof jQuery) m[h] = N[h];
                else
                    for (var g in m[h] = {}, N[h]) m[h][g] = N[h][g];
            for (var w in c)
                if (void 0 === N[w]) N[w] = c[w];
                else if ("object" == typeof N[w])
                for (var W in c[w]) void 0 === N[w][W] && (N[w][W] = c[w][W]);
            var R = this;
            if (R.params = N, R.originalParams = m, R.classNames = [], void 0 != _ && void 0 !== e && (_ = e), (void 0 !== _ || (_ = void 0 === e ? window.Dom7 || window.Zepto || window.jQuery : e)) && (R.$ = _, R.currentBreakpoint = void 0, R.getActiveBreakpoint = function() {
                    if (!R.params.breakpoints) return !1;
                    var i = !1,
                        n = [],
                        t;
                    for (t in R.params.breakpoints) R.params.breakpoints.hasOwnProperty(t) && n.push(t);
                    n.sort(function(t, e) {
                        return parseInt(t, 10) > parseInt(e, 10)
                    });
                    for (var e = 0; e < n.length; e++)(t = n[e]) >= window.innerWidth && !i && (i = t);
                    return i || "max"
                }, R.setBreakpoint = function() {
                    var i = R.getActiveBreakpoint();
                    if (i && R.currentBreakpoint !== i) {
                        var e = i in R.params.breakpoints ? R.params.breakpoints[i] : R.originalParams,
                            a = R.params.loop && e.slidesPerView !== R.params.slidesPerView;
                        for (var t in e) R.params[t] = e[t];
                        R.currentBreakpoint = i, a && R.destroyLoop && R.reLoop(!0)
                    }
                }, R.params.breakpoints && R.setBreakpoint(), R.container = _(t), 0 !== R.container.length)) {
                if (1 < R.container.length) {
                    var T = [];
                    return R.container.each(function() {
                        T.push(new $(this, N))
                    }), T
                }
                R.container[0].swiper = R, R.container.data("swiper", R), R.classNames.push(R.params.containerModifierClass + R.params.direction), R.params.freeMode && R.classNames.push(R.params.containerModifierClass + "free-mode"), R.support.flexbox || (R.classNames.push(R.params.containerModifierClass + "no-flexbox"), R.params.slidesPerColumn = 1), R.params.autoHeight && R.classNames.push(R.params.containerModifierClass + "autoheight"), (R.params.parallax || R.params.watchSlidesVisibility) && (R.params.watchSlidesProgress = !0), R.params.touchReleaseOnEdges && (R.params.resistanceRatio = 0), 0 <= ["cube", "coverflow", "flip"].indexOf(R.params.effect) && (R.support.transforms3d ? (R.params.watchSlidesProgress = !0, R.classNames.push(R.params.containerModifierClass + "3d")) : R.params.effect = "slide"), "slide" !== R.params.effect && R.classNames.push(R.params.containerModifierClass + R.params.effect), "cube" === R.params.effect && (R.params.resistanceRatio = 0, R.params.slidesPerView = 1, R.params.slidesPerColumn = 1, R.params.slidesPerGroup = 1, R.params.centeredSlides = !1, R.params.spaceBetween = 0, R.params.virtualTranslate = !0), "fade" !== R.params.effect && "flip" !== R.params.effect || (R.params.slidesPerView = 1, R.params.slidesPerColumn = 1, R.params.slidesPerGroup = 1, R.params.watchSlidesProgress = !0, R.params.spaceBetween = 0, void 0 === u && (R.params.virtualTranslate = !0)), R.params.grabCursor && R.support.touch && (R.params.grabCursor = !1), R.wrapper = R.container.children("." + R.params.wrapperClass), R.params.pagination && (R.paginationContainer = _(R.params.pagination), R.params.uniqueNavElements && "string" == typeof R.params.pagination && 1 < R.paginationContainer.length && 1 === R.container.find(R.params.pagination).length && (R.paginationContainer = R.container.find(R.params.pagination)), "bullets" === R.params.paginationType && R.params.paginationClickable ? R.paginationContainer.addClass(R.params.paginationModifierClass + "clickable") : R.params.paginationClickable = !1, R.paginationContainer.addClass(R.params.paginationModifierClass + R.params.paginationType)), (R.params.nextButton || R.params.prevButton) && (R.params.nextButton && (R.nextButton = _(R.params.nextButton), R.params.uniqueNavElements && "string" == typeof R.params.nextButton && 1 < R.nextButton.length && 1 === R.container.find(R.params.nextButton).length && (R.nextButton = R.container.find(R.params.nextButton))), R.params.prevButton && (R.prevButton = _(R.params.prevButton), R.params.uniqueNavElements && "string" == typeof R.params.prevButton && 1 < R.prevButton.length && 1 === R.container.find(R.params.prevButton).length && (R.prevButton = R.container.find(R.params.prevButton)))), R.isHorizontal = function() {
                    return "horizontal" === R.params.direction
                }, R.rtl = R.isHorizontal() && ("rtl" === R.container[0].dir.toLowerCase() || "rtl" === R.container.css("direction")), R.rtl && R.classNames.push(R.params.containerModifierClass + "rtl"), R.rtl && (R.wrongRTL = "-webkit-box" === R.wrapper.css("display")), 1 < R.params.slidesPerColumn && R.classNames.push(R.params.containerModifierClass + "multirow"), R.device.android && R.classNames.push(R.params.containerModifierClass + "android"), R.container.addClass(R.classNames.join(" ")), R.translate = 0, R.progress = 0, R.velocity = 0, R.lockSwipeToNext = function() {
                    R.params.allowSwipeToNext = !1, !1 === R.params.allowSwipeToPrev && R.params.grabCursor && R.unsetGrabCursor()
                }, R.lockSwipeToPrev = function() {
                    R.params.allowSwipeToPrev = !1, !1 === R.params.allowSwipeToNext && R.params.grabCursor && R.unsetGrabCursor()
                }, R.lockSwipes = function() {
                    R.params.allowSwipeToNext = R.params.allowSwipeToPrev = !1, R.params.grabCursor && R.unsetGrabCursor()
                }, R.unlockSwipeToNext = function() {
                    R.params.allowSwipeToNext = !0, !0 === R.params.allowSwipeToPrev && R.params.grabCursor && R.setGrabCursor()
                }, R.unlockSwipeToPrev = function() {
                    R.params.allowSwipeToPrev = !0, !0 === R.params.allowSwipeToNext && R.params.grabCursor && R.setGrabCursor()
                }, R.unlockSwipes = function() {
                    R.params.allowSwipeToNext = R.params.allowSwipeToPrev = !0, R.params.grabCursor && R.setGrabCursor()
                }, R.setGrabCursor = function(t) {
                    R.container[0].style.cursor = "move", R.container[0].style.cursor = t ? "-webkit-grabbing" : "-webkit-grab", R.container[0].style.cursor = t ? "-moz-grabbin" : "-moz-grab", R.container[0].style.cursor = t ? "grabbing" : "grab"
                }, R.unsetGrabCursor = function() {
                    R.container[0].style.cursor = ""
                }, R.params.grabCursor && R.setGrabCursor(), R.imagesToLoad = [], R.imagesLoaded = 0, R.loadImage = function(l, e, a, t, s, i) {
                    function r() {
                        i && i()
                    }
                    var n;
                    l.complete && s ? r() : e ? (n = new window.Image, n.onload = r, n.onerror = r, t && (n.sizes = t), a && (n.srcset = a), e && (n.src = e)) : r()
                }, R.preloadImages = function() {
                    function t() {
                        void 0 !== R && null !== R && R && (void 0 !== R.imagesLoaded && R.imagesLoaded++, R.imagesLoaded === R.imagesToLoad.length && (R.params.updateOnImagesReady && R.update(), R.emit("onImagesReady", R)))
                    }
                    R.imagesToLoad = R.container.find("img");
                    for (var e = 0; e < R.imagesToLoad.length; e++) R.loadImage(R.imagesToLoad[e], R.imagesToLoad[e].currentSrc || R.imagesToLoad[e].getAttribute("src"), R.imagesToLoad[e].srcset || R.imagesToLoad[e].getAttribute("srcset"), R.imagesToLoad[e].sizes || R.imagesToLoad[e].getAttribute("sizes"), !0, t)
                }, R.autoplayTimeoutId = void 0, R.autoplaying = !1, R.autoplayPaused = !1, R.startAutoplay = function() {
                    return void 0 === R.autoplayTimeoutId && !!R.params.autoplay && !R.autoplaying && (R.autoplaying = !0, R.emit("onAutoplayStart", R), void a())
                }, R.stopAutoplay = function() {
                    R.autoplayTimeoutId && (R.autoplayTimeoutId && clearTimeout(R.autoplayTimeoutId), R.autoplaying = !1, R.autoplayTimeoutId = void 0, R.emit("onAutoplayStop", R))
                }, R.pauseAutoplay = function(t) {
                    R.autoplayPaused || (R.autoplayTimeoutId && clearTimeout(R.autoplayTimeoutId), R.autoplayPaused = !0, 0 === t ? (R.autoplayPaused = !1, a()) : R.wrapper.transitionEnd(function() {
                        R && (R.autoplayPaused = !1, R.autoplaying ? a() : R.stopAutoplay())
                    }))
                }, R.minTranslate = function() {
                    return -R.snapGrid[0]
                }, R.maxTranslate = function() {
                    return -R.snapGrid[R.snapGrid.length - 1]
                }, R.updateAutoHeight = function() {
                    var n = [],
                        a = 0,
                        t;
                    if ("auto" !== R.params.slidesPerView && 1 < R.params.slidesPerView)
                        for (t = 0; t < f(R.params.slidesPerView); t++) {
                            var e = R.activeIndex + t;
                            if (e > R.slides.length) break;
                            n.push(R.slides.eq(e)[0])
                        } else n.push(R.slides.eq(R.activeIndex)[0]);
                    for (t = 0; t < n.length; t++)
                        if (void 0 !== n[t]) {
                            var s = n[t].offsetHeight;
                            a = s > a ? s : a
                        }
                    a && R.wrapper.css("height", a + "px")
                }, R.updateContainerSize = function() {
                    var t, e;
                    t = void 0 === R.params.width ? R.container[0].clientWidth : R.params.width, e = void 0 === R.params.height ? R.container[0].clientHeight : R.params.height, 0 === t && R.isHorizontal() || 0 === e && !R.isHorizontal() || (t = t - parseInt(R.container.css("padding-left"), 10) - parseInt(R.container.css("padding-right"), 10), e = e - parseInt(R.container.css("padding-top"), 10) - parseInt(R.container.css("padding-bottom"), 10), R.width = t, R.height = e, R.size = R.isHorizontal() ? R.width : R.height)
                }, R.updateSlidesSize = function() {
                    R.slides = R.wrapper.children("." + R.params.slideClass), R.snapGrid = [], R.slidesGrid = [], R.slidesSizesGrid = [];
                    var r = R.params.spaceBetween,
                        y = -R.params.slidesOffsetBefore,
                        t = 0,
                        s = 0,
                        i;
                    if (void 0 !== R.size) {
                        "string" == typeof r && 0 <= r.indexOf("%") && (r = parseFloat(r.replace("%", "")) / 100 * R.size), R.virtualSize = -r, R.rtl ? R.slides.css({
                            marginLeft: "",
                            marginTop: ""
                        }) : R.slides.css({
                            marginRight: "",
                            marginBottom: ""
                        });
                        var e;
                        1 < R.params.slidesPerColumn && (e = x(R.slides.length / R.params.slidesPerColumn) === R.slides.length / R.params.slidesPerColumn ? R.slides.length : f(R.slides.length / R.params.slidesPerColumn) * R.params.slidesPerColumn, "auto" !== R.params.slidesPerView && "row" === R.params.slidesPerColumnFill && (e = v(e, R.params.slidesPerView * R.params.slidesPerColumn)));
                        var n = R.params.slidesPerColumn,
                            l = e / n,
                            p = l - (R.params.slidesPerColumn * l - R.slides.length),
                            d;
                        for (i = 0; i < R.slides.length; i++) {
                            d = 0;
                            var o = R.slides.eq(i);
                            if (1 < R.params.slidesPerColumn) {
                                var u, w, m;
                                "column" === R.params.slidesPerColumnFill ? (w = x(i / n), m = i - w * n, (w > p || w === p && m === n - 1) && ++m >= n && (m = 0, w++), u = w + m * e / n, o.css({
                                    "-webkit-box-ordinal-group": u,
                                    "-moz-box-ordinal-group": u,
                                    "-ms-flex-order": u,
                                    "-webkit-order": u,
                                    order: u
                                })) : (m = x(i / l), w = i - m * l), o.css("margin-" + (R.isHorizontal() ? "top" : "left"), 0 !== m && R.params.spaceBetween && R.params.spaceBetween + "px").attr("data-swiper-column", w).attr("data-swiper-row", m)
                            }
                            "none" !== o.css("display") && ("auto" === R.params.slidesPerView ? (d = R.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0), R.params.roundLengths && (d = j(d))) : (d = (R.size - (R.params.slidesPerView - 1) * r) / R.params.slidesPerView, R.params.roundLengths && (d = j(d)), R.isHorizontal() ? R.slides[i].style.width = d + "px" : R.slides[i].style.height = d + "px"), R.slides[i].swiperSlideSize = d, R.slidesSizesGrid.push(d), R.params.centeredSlides ? (y = y + d / 2 + t / 2 + r, 0 == t && 0 !== i && (y = y - R.size / 2 - r), 0 === i && (y = y - R.size / 2 - r), .001 > b(y) && (y = 0), 0 == s % R.params.slidesPerGroup && R.snapGrid.push(y), R.slidesGrid.push(y)) : (0 == s % R.params.slidesPerGroup && R.snapGrid.push(y), R.slidesGrid.push(y), y = y + d + r), R.virtualSize += d + r, t = d, s++)
                        }
                        R.virtualSize = v(R.virtualSize, R.size) + R.params.slidesOffsetAfter;
                        var h;
                        if (R.rtl && R.wrongRTL && ("slide" === R.params.effect || "coverflow" === R.params.effect) && R.wrapper.css({
                                width: R.virtualSize + R.params.spaceBetween + "px"
                            }), R.support.flexbox && !R.params.setWrapperSize || (R.isHorizontal() ? R.wrapper.css({
                                width: R.virtualSize + R.params.spaceBetween + "px"
                            }) : R.wrapper.css({
                                height: R.virtualSize + R.params.spaceBetween + "px"
                            })), 1 < R.params.slidesPerColumn && (R.virtualSize = (d + R.params.spaceBetween) * e, R.virtualSize = f(R.virtualSize / R.params.slidesPerColumn) - R.params.spaceBetween, R.isHorizontal() ? R.wrapper.css({
                                width: R.virtualSize + R.params.spaceBetween + "px"
                            }) : R.wrapper.css({
                                height: R.virtualSize + R.params.spaceBetween + "px"
                            }), R.params.centeredSlides)) {
                            for (h = [], i = 0; i < R.snapGrid.length; i++) R.snapGrid[i] < R.virtualSize + R.snapGrid[0] && h.push(R.snapGrid[i]);
                            R.snapGrid = h
                        }
                        if (!R.params.centeredSlides) {
                            for (h = [], i = 0; i < R.snapGrid.length; i++) R.snapGrid[i] <= R.virtualSize - R.size && h.push(R.snapGrid[i]);
                            R.snapGrid = h, 1 < x(R.virtualSize - R.size) - x(R.snapGrid[R.snapGrid.length - 1]) && R.snapGrid.push(R.virtualSize - R.size)
                        }
                        0 === R.snapGrid.length && (R.snapGrid = [0]), 0 !== R.params.spaceBetween && (R.isHorizontal() ? R.rtl ? R.slides.css({
                            marginLeft: r + "px"
                        }) : R.slides.css({
                            marginRight: r + "px"
                        }) : R.slides.css({
                            marginBottom: r + "px"
                        })), R.params.watchSlidesProgress && R.updateSlidesOffset()
                    }
                }, R.updateSlidesOffset = function() {
                    for (var t = 0; t < R.slides.length; t++) R.slides[t].swiperSlideOffset = R.isHorizontal() ? R.slides[t].offsetLeft : R.slides[t].offsetTop
                }, R.currentSlidesPerView = function() {
                    var n = 1,
                        t, e;
                    if (R.params.centeredSlides) {
                        var a = R.slides[R.activeIndex].swiperSlideSize,
                            i;
                        for (t = R.activeIndex + 1; t < R.slides.length; t++) R.slides[t] && !i && (a += R.slides[t].swiperSlideSize, n++, a > R.size && (i = !0));
                        for (e = R.activeIndex - 1; 0 <= e; e--) R.slides[e] && !i && (a += R.slides[e].swiperSlideSize, n++, a > R.size && (i = !0))
                    } else
                        for (t = R.activeIndex + 1; t < R.slides.length; t++) R.slidesGrid[t] - R.slidesGrid[R.activeIndex] < R.size && n++;
                    return n
                }, R.updateSlidesProgress = function(o) {
                    if (void 0 === o && (o = R.translate || 0), 0 !== R.slides.length) {
                        void 0 === R.slides[0].swiperSlideOffset && R.updateSlidesOffset();
                        var l = -o;
                        R.rtl && (l = o), R.slides.removeClass(R.params.slideVisibleClass);
                        for (var a = 0; a < R.slides.length; a++) {
                            var t = R.slides[a],
                                s = (l + (R.params.centeredSlides ? R.minTranslate() : 0) - t.swiperSlideOffset) / (t.swiperSlideSize + R.params.spaceBetween);
                            if (R.params.watchSlidesVisibility) {
                                var d = -(l - t.swiperSlideOffset),
                                    r = d + R.slidesSizesGrid[a];
                                (0 <= d && d < R.size || 0 < r && r <= R.size || 0 >= d && r >= R.size) && R.slides.eq(a).addClass(R.params.slideVisibleClass)
                            }
                            t.progress = R.rtl ? -s : s
                        }
                    }
                }, R.updateProgress = function(i) {
                    void 0 === i && (i = R.translate || 0);
                    var e = R.maxTranslate() - R.minTranslate(),
                        a = R.isBeginning,
                        n = R.isEnd;
                    0 == e ? (R.progress = 0, R.isBeginning = R.isEnd = !0) : (R.progress = (i - R.minTranslate()) / e, R.isBeginning = 0 >= R.progress, R.isEnd = 1 <= R.progress), R.isBeginning && !a && R.emit("onReachBeginning", R), R.isEnd && !n && R.emit("onReachEnd", R), R.params.watchSlidesProgress && R.updateSlidesProgress(i), R.emit("onProgress", R, R.progress)
                }, R.updateActiveIndex = function() {
                    var i = R.rtl ? R.translate : -R.translate,
                        n, e, a;
                    for (e = 0; e < R.slidesGrid.length; e++) void 0 === R.slidesGrid[e + 1] ? i >= R.slidesGrid[e] && (n = e) : i >= R.slidesGrid[e] && i < R.slidesGrid[e + 1] - (R.slidesGrid[e + 1] - R.slidesGrid[e]) / 2 ? n = e : i >= R.slidesGrid[e] && i < R.slidesGrid[e + 1] && (n = e + 1);
                    R.params.normalizeSlideIndex && (0 > n || void 0 === n) && (n = 0), a = x(n / R.params.slidesPerGroup), a >= R.snapGrid.length && (a = R.snapGrid.length - 1), n !== R.activeIndex && (R.snapIndex = a, R.previousIndex = R.activeIndex, R.activeIndex = n, R.updateClasses(), R.updateRealIndex())
                }, R.updateRealIndex = function() {
                    R.realIndex = parseInt(R.slides.eq(R.activeIndex).attr("data-swiper-slide-index") || R.activeIndex, 10)
                }, R.updateClasses = function() {
                    R.slides.removeClass(R.params.slideActiveClass + " " + R.params.slideNextClass + " " + R.params.slidePrevClass + " " + R.params.slideDuplicateActiveClass + " " + R.params.slideDuplicateNextClass + " " + R.params.slideDuplicatePrevClass);
                    var e = R.slides.eq(R.activeIndex);
                    e.addClass(R.params.slideActiveClass), N.loop && (e.hasClass(R.params.slideDuplicateClass) ? R.wrapper.children("." + R.params.slideClass + ":not(." + R.params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + R.realIndex + "\"]").addClass(R.params.slideDuplicateActiveClass) : R.wrapper.children("." + R.params.slideClass + "." + R.params.slideDuplicateClass + "[data-swiper-slide-index=\"" + R.realIndex + "\"]").addClass(R.params.slideDuplicateActiveClass));
                    var a = e.next("." + R.params.slideClass).addClass(R.params.slideNextClass);
                    R.params.loop && 0 === a.length && (a = R.slides.eq(0), a.addClass(R.params.slideNextClass));
                    var t = e.prev("." + R.params.slideClass).addClass(R.params.slidePrevClass);
                    if (R.params.loop && 0 === t.length && (t = R.slides.eq(-1), t.addClass(R.params.slidePrevClass)), N.loop && (a.hasClass(R.params.slideDuplicateClass) ? R.wrapper.children("." + R.params.slideClass + ":not(." + R.params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + a.attr("data-swiper-slide-index") + "\"]").addClass(R.params.slideDuplicateNextClass) : R.wrapper.children("." + R.params.slideClass + "." + R.params.slideDuplicateClass + "[data-swiper-slide-index=\"" + a.attr("data-swiper-slide-index") + "\"]").addClass(R.params.slideDuplicateNextClass), t.hasClass(R.params.slideDuplicateClass) ? R.wrapper.children("." + R.params.slideClass + ":not(." + R.params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + t.attr("data-swiper-slide-index") + "\"]").addClass(R.params.slideDuplicatePrevClass) : R.wrapper.children("." + R.params.slideClass + "." + R.params.slideDuplicateClass + "[data-swiper-slide-index=\"" + t.attr("data-swiper-slide-index") + "\"]").addClass(R.params.slideDuplicatePrevClass)), R.paginationContainer && 0 < R.paginationContainer.length) {
                        var i = R.params.loop ? f((R.slides.length - 2 * R.loopedSlides) / R.params.slidesPerGroup) : R.snapGrid.length,
                            n;
                        if (R.params.loop ? (n = f((R.activeIndex - R.loopedSlides) / R.params.slidesPerGroup), n > R.slides.length - 1 - 2 * R.loopedSlides && (n -= R.slides.length - 2 * R.loopedSlides), n > i - 1 && (n -= i), 0 > n && "bullets" !== R.params.paginationType && (n = i + n)) : n = void 0 === R.snapIndex ? R.activeIndex || 0 : R.snapIndex, "bullets" === R.params.paginationType && R.bullets && 0 < R.bullets.length && (R.bullets.removeClass(R.params.bulletActiveClass), 1 < R.paginationContainer.length ? R.bullets.each(function() {
                                _(this).index() === n && _(this).addClass(R.params.bulletActiveClass)
                            }) : R.bullets.eq(n).addClass(R.params.bulletActiveClass)), "fraction" === R.params.paginationType && (R.paginationContainer.find("." + R.params.paginationCurrentClass).text(n + 1), R.paginationContainer.find("." + R.params.paginationTotalClass).text(i)), "progress" === R.params.paginationType) {
                            var s = (n + 1) / i,
                                o = s,
                                r = 1;
                            R.isHorizontal() || (r = s, o = 1), R.paginationContainer.find("." + R.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + o + ") scaleY(" + r + ")").transition(R.params.speed)
                        }
                        "custom" === R.params.paginationType && R.params.paginationCustomRender && (R.paginationContainer.html(R.params.paginationCustomRender(R, n + 1, i)), R.emit("onPaginationRendered", R, R.paginationContainer[0]))
                    }
                    R.params.loop || (R.params.prevButton && R.prevButton && 0 < R.prevButton.length && (R.isBeginning ? (R.prevButton.addClass(R.params.buttonDisabledClass), R.params.a11y && R.a11y && R.a11y.disable(R.prevButton)) : (R.prevButton.removeClass(R.params.buttonDisabledClass), R.params.a11y && R.a11y && R.a11y.enable(R.prevButton))), R.params.nextButton && R.nextButton && 0 < R.nextButton.length && (R.isEnd ? (R.nextButton.addClass(R.params.buttonDisabledClass), R.params.a11y && R.a11y && R.a11y.disable(R.nextButton)) : (R.nextButton.removeClass(R.params.buttonDisabledClass), R.params.a11y && R.a11y && R.a11y.enable(R.nextButton))))
                }, R.updatePagination = function() {
                    if (R.params.pagination && R.paginationContainer && 0 < R.paginationContainer.length) {
                        var i = "";
                        if ("bullets" === R.params.paginationType) {
                            for (var e = R.params.loop ? f((R.slides.length - 2 * R.loopedSlides) / R.params.slidesPerGroup) : R.snapGrid.length, a = 0; a < e; a++) i += R.params.paginationBulletRender ? R.params.paginationBulletRender(R, a, R.params.bulletClass) : "<" + R.params.paginationElement + " class=\"" + R.params.bulletClass + "\"></" + R.params.paginationElement + ">";
                            R.paginationContainer.html(i), R.bullets = R.paginationContainer.find("." + R.params.bulletClass), R.params.paginationClickable && R.params.a11y && R.a11y && R.a11y.initPagination()
                        }
                        "fraction" === R.params.paginationType && (i = R.params.paginationFractionRender ? R.params.paginationFractionRender(R, R.params.paginationCurrentClass, R.params.paginationTotalClass) : "<span class=\"" + R.params.paginationCurrentClass + "\"></span> / <span class=\"" + R.params.paginationTotalClass + "\"></span>", R.paginationContainer.html(i)), "progress" === R.params.paginationType && (i = R.params.paginationProgressRender ? R.params.paginationProgressRender(R, R.params.paginationProgressbarClass) : "<span class=\"" + R.params.paginationProgressbarClass + "\"></span>", R.paginationContainer.html(i)), "custom" !== R.params.paginationType && R.emit("onPaginationRendered", R, R.paginationContainer[0])
                    }
                }, R.update = function(i) {
                    function e() {
                        R.rtl, R.translate, a = C(v(R.translate, R.maxTranslate()), R.minTranslate()), R.setWrapperTranslate(a), R.updateActiveIndex(), R.updateClasses()
                    }
                    if (R) {
                        R.updateContainerSize(), R.updateSlidesSize(), R.updateProgress(), R.updatePagination(), R.updateClasses(), R.params.scrollbar && R.scrollbar && R.scrollbar.set();
                        var a;
                        i ? (R.controller && R.controller.spline && (R.controller.spline = void 0), R.params.freeMode ? (e(), R.params.autoHeight && R.updateAutoHeight()) : (("auto" === R.params.slidesPerView || 1 < R.params.slidesPerView) && R.isEnd && !R.params.centeredSlides ? R.slideTo(R.slides.length - 1, 0, !1, !0) : R.slideTo(R.activeIndex, 0, !1, !0)) || e()) : R.params.autoHeight && R.updateAutoHeight()
                    }
                }, R.onResize = function(n) {
                    R.params.onBeforeResize && R.params.onBeforeResize(R), R.params.breakpoints && R.setBreakpoint();
                    var e = R.params.allowSwipeToPrev,
                        a = R.params.allowSwipeToNext;
                    R.params.allowSwipeToPrev = R.params.allowSwipeToNext = !0, R.updateContainerSize(), R.updateSlidesSize(), ("auto" === R.params.slidesPerView || R.params.freeMode || n) && R.updatePagination(), R.params.scrollbar && R.scrollbar && R.scrollbar.set(), R.controller && R.controller.spline && (R.controller.spline = void 0);
                    var t = !1;
                    if (R.params.freeMode) {
                        var o = C(v(R.translate, R.maxTranslate()), R.minTranslate());
                        R.setWrapperTranslate(o), R.updateActiveIndex(), R.updateClasses(), R.params.autoHeight && R.updateAutoHeight()
                    } else R.updateClasses(), t = ("auto" === R.params.slidesPerView || 1 < R.params.slidesPerView) && R.isEnd && !R.params.centeredSlides ? R.slideTo(R.slides.length - 1, 0, !1, !0) : R.slideTo(R.activeIndex, 0, !1, !0);
                    R.params.lazyLoading && !t && R.lazy && R.lazy.load(), R.params.allowSwipeToPrev = e, R.params.allowSwipeToNext = a, R.params.onAfterResize && R.params.onAfterResize(R)
                }, R.touchEventsDesktop = {
                    start: "mousedown",
                    move: "mousemove",
                    end: "mouseup"
                }, window.navigator.pointerEnabled ? R.touchEventsDesktop = {
                    start: "pointerdown",
                    move: "pointermove",
                    end: "pointerup"
                } : window.navigator.msPointerEnabled && (R.touchEventsDesktop = {
                    start: "MSPointerDown",
                    move: "MSPointerMove",
                    end: "MSPointerUp"
                }), R.touchEvents = {
                    start: R.support.touch || !R.params.simulateTouch ? "touchstart" : R.touchEventsDesktop.start,
                    move: R.support.touch || !R.params.simulateTouch ? "touchmove" : R.touchEventsDesktop.move,
                    end: R.support.touch || !R.params.simulateTouch ? "touchend" : R.touchEventsDesktop.end
                }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === R.params.touchEventsTarget ? R.container : R.wrapper).addClass("swiper-wp8-" + R.params.direction), R.initEvents = function(i) {
                    var e = i ? "off" : "on",
                        a = i ? "removeEventListener" : "addEventListener",
                        t = "container" === R.params.touchEventsTarget ? R.container[0] : R.wrapper[0],
                        s = R.support.touch ? t : document,
                        r = !!R.params.nested;
                    if (R.browser.ie) t[a](R.touchEvents.start, R.onTouchStart, !1), s[a](R.touchEvents.move, R.onTouchMove, r), s[a](R.touchEvents.end, R.onTouchEnd, !1);
                    else {
                        if (R.support.touch) {
                            var n = "touchstart" === R.touchEvents.start && R.support.passiveListener && R.params.passiveListeners && {
                                passive: !0,
                                capture: !1
                            };
                            t[a](R.touchEvents.start, R.onTouchStart, n), t[a](R.touchEvents.move, R.onTouchMove, r), t[a](R.touchEvents.end, R.onTouchEnd, n)
                        }(N.simulateTouch && !R.device.ios && !R.device.android || N.simulateTouch && !R.support.touch && R.device.ios) && (t[a]("mousedown", R.onTouchStart, !1), document[a]("mousemove", R.onTouchMove, r), document[a]("mouseup", R.onTouchEnd, !1))
                    }
                    window[a]("resize", R.onResize), R.params.nextButton && R.nextButton && 0 < R.nextButton.length && (R.nextButton[e]("click", R.onClickNext), R.params.a11y && R.a11y && R.nextButton[e]("keydown", R.a11y.onEnterKey)), R.params.prevButton && R.prevButton && 0 < R.prevButton.length && (R.prevButton[e]("click", R.onClickPrev), R.params.a11y && R.a11y && R.prevButton[e]("keydown", R.a11y.onEnterKey)), R.params.pagination && R.params.paginationClickable && (R.paginationContainer[e]("click", "." + R.params.bulletClass, R.onClickIndex), R.params.a11y && R.a11y && R.paginationContainer[e]("keydown", "." + R.params.bulletClass, R.a11y.onEnterKey)), (R.params.preventClicks || R.params.preventClicksPropagation) && t[a]("click", R.preventClicks, !0)
                }, R.attachEvents = function() {
                    R.initEvents()
                }, R.detachEvents = function() {
                    R.initEvents(!0)
                }, R.allowClick = !0, R.preventClicks = function(t) {
                    R.allowClick || (R.params.preventClicks && t.preventDefault(), R.params.preventClicksPropagation && R.animating && (t.stopPropagation(), t.stopImmediatePropagation()))
                }, R.onClickNext = function(t) {
                    t.preventDefault(), R.isEnd && !R.params.loop || R.slideNext()
                }, R.onClickPrev = function(t) {
                    t.preventDefault(), R.isBeginning && !R.params.loop || R.slidePrev()
                }, R.onClickIndex = function(e) {
                    e.preventDefault();
                    var a = _(this).index() * R.params.slidesPerGroup;
                    R.params.loop && (a += R.loopedSlides), R.slideTo(a)
                }, R.updateClickedSlide = function(e) {
                    var a = F(e, "." + R.params.slideClass),
                        o = !1;
                    if (a)
                        for (var d = 0; d < R.slides.length; d++) R.slides[d] === a && (o = !0);
                    if (!a || !o) return R.clickedSlide = void 0, void(R.clickedIndex = void 0);
                    if (R.clickedSlide = a, R.clickedIndex = _(a).index(), R.params.slideToClickedSlide && void 0 !== R.clickedIndex && R.clickedIndex !== R.activeIndex) {
                        var i = R.clickedIndex,
                            n = "auto" === R.params.slidesPerView ? R.currentSlidesPerView() : R.params.slidesPerView,
                            l;
                        if (R.params.loop) {
                            if (R.animating) return;
                            l = parseInt(_(R.clickedSlide).attr("data-swiper-slide-index"), 10), R.params.centeredSlides ? i < R.loopedSlides - n / 2 || i > R.slides.length - R.loopedSlides + n / 2 ? (R.fixLoop(), i = R.wrapper.children("." + R.params.slideClass + "[data-swiper-slide-index=\"" + l + "\"]:not(." + R.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function() {
                                R.slideTo(i)
                            }, 0)) : R.slideTo(i) : i > R.slides.length - n ? (R.fixLoop(), i = R.wrapper.children("." + R.params.slideClass + "[data-swiper-slide-index=\"" + l + "\"]:not(." + R.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function() {
                                R.slideTo(i)
                            }, 0)) : R.slideTo(i)
                        } else R.slideTo(i)
                    }
                };
                var q = "input, select, textarea, button, video",
                    B = Date.now(),
                    H = [],
                    V, U, G, z, K, E, J, I, Q, L;
                R.animating = !1, R.touches = {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                };
                var D, Z;
                for (var A in R.onTouchStart = function(e) {
                        if (e.originalEvent && (e = e.originalEvent), (D = "touchstart" === e.type) || !("which" in e) || 3 !== e.which) {
                            if (R.params.noSwiping && F(e, "." + R.params.noSwipingClass)) return void(R.allowClick = !0);
                            if (!R.params.swipeHandler || F(e, R.params.swipeHandler)) {
                                var a = R.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
                                    t = R.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
                                if (!(R.device.ios && R.params.iOSEdgeSwipeDetection && a <= R.params.iOSEdgeSwipeThreshold)) {
                                    if (V = !0, U = !1, G = !0, K = void 0, Z = void 0, R.touches.startX = a, R.touches.startY = t, z = Date.now(), R.allowClick = !0, R.updateContainerSize(), R.swipeDirection = void 0, 0 < R.params.threshold && (I = !1), "touchstart" !== e.type) {
                                        var n = !0;
                                        _(e.target).is(q) && (n = !1), document.activeElement && _(document.activeElement).is(q) && document.activeElement.blur(), n && e.preventDefault()
                                    }
                                    R.emit("onTouchStart", R, e)
                                }
                            }
                        }
                    }, R.onTouchMove = function(e) {
                        if (e.originalEvent && (e = e.originalEvent), !D || "mousemove" !== e.type) {
                            if (e.preventedByNestedSwiper) return R.touches.startX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, void(R.touches.startY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY);
                            if (R.params.onlyExternal) return R.allowClick = !1, void(V && (R.touches.startX = R.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, R.touches.startY = R.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, z = Date.now()));
                            if (D && R.params.touchReleaseOnEdges && !R.params.loop)
                                if (R.isHorizontal()) {
                                    if (R.touches.currentX < R.touches.startX && R.translate <= R.maxTranslate() || R.touches.currentX > R.touches.startX && R.translate >= R.minTranslate()) return;
                                } else if (R.touches.currentY < R.touches.startY && R.translate <= R.maxTranslate() || R.touches.currentY > R.touches.startY && R.translate >= R.minTranslate()) return;
                            if (D && document.activeElement && e.target === document.activeElement && _(e.target).is(q)) return U = !0, void(R.allowClick = !1);
                            if (G && R.emit("onTouchMove", R, e), !(e.targetTouches && 1 < e.targetTouches.length)) {
                                if (R.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, R.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, void 0 == K) {
                                    var a;
                                    R.isHorizontal() && R.touches.currentY === R.touches.startY || !R.isHorizontal() && R.touches.currentX === R.touches.startX ? K = !1 : (a = 180 * Math.atan2(b(R.touches.currentY - R.touches.startY), b(R.touches.currentX - R.touches.startX)) / n, K = R.isHorizontal() ? a > R.params.touchAngle : 90 - a > R.params.touchAngle)
                                }
                                if (K && R.emit("onTouchMoveOpposite", R, e), void 0 == Z && (R.touches.currentX === R.touches.startX && R.touches.currentY === R.touches.startY || (Z = !0)), V) {
                                    if (K) return void(V = !1);
                                    if (Z) {
                                        R.allowClick = !1, R.emit("onSliderMove", R, e), e.preventDefault(), R.params.touchMoveStopPropagation && !R.params.nested && e.stopPropagation(), U || (N.loop && R.fixLoop(), J = R.getWrapperTranslate(), R.setWrapperTransition(0), R.animating && R.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), R.params.autoplay && R.autoplaying && (R.params.autoplayDisableOnInteraction ? R.stopAutoplay() : R.pauseAutoplay()), L = !1, !R.params.grabCursor || !0 !== R.params.allowSwipeToNext && !0 !== R.params.allowSwipeToPrev || R.setGrabCursor(!0)), U = !0;
                                        var t = R.touches.diff = R.isHorizontal() ? R.touches.currentX - R.touches.startX : R.touches.currentY - R.touches.startY;
                                        t *= R.params.touchRatio, R.rtl && (t = -t), R.swipeDirection = 0 < t ? "prev" : "next", E = t + J;
                                        var i = !0;
                                        if (0 < t && E > R.minTranslate() ? (i = !1, R.params.resistance && (E = R.minTranslate() - 1 + p(-R.minTranslate() + J + t, R.params.resistanceRatio))) : 0 > t && E < R.maxTranslate() && (i = !1, R.params.resistance && (E = R.maxTranslate() + 1 - p(R.maxTranslate() - J - t, R.params.resistanceRatio))), i && (e.preventedByNestedSwiper = !0), !R.params.allowSwipeToNext && "next" === R.swipeDirection && E < J && (E = J), !R.params.allowSwipeToPrev && "prev" === R.swipeDirection && E > J && (E = J), 0 < R.params.threshold) {
                                            if (!(b(t) > R.params.threshold || I)) return void(E = J);
                                            if (!I) return I = !0, R.touches.startX = R.touches.currentX, R.touches.startY = R.touches.currentY, E = J, void(R.touches.diff = R.isHorizontal() ? R.touches.currentX - R.touches.startX : R.touches.currentY - R.touches.startY)
                                        }
                                        R.params.followFinger && ((R.params.freeMode || R.params.watchSlidesProgress) && R.updateActiveIndex(), R.params.freeMode && (0 === H.length && H.push({
                                            position: R.touches[R.isHorizontal() ? "startX" : "startY"],
                                            time: z
                                        }), H.push({
                                            position: R.touches[R.isHorizontal() ? "currentX" : "currentY"],
                                            time: new window.Date().getTime()
                                        })), R.updateProgress(E), R.setWrapperTranslate(E))
                                    }
                                }
                            }
                        }
                    }, R.onTouchEnd = function(e) {
                        if (e.originalEvent && (e = e.originalEvent), G && R.emit("onTouchEnd", R, e), G = !1, V) {
                            R.params.grabCursor && U && V && (!0 === R.params.allowSwipeToNext || !0 === R.params.allowSwipeToPrev) && R.setGrabCursor(!1);
                            var a = Date.now(),
                                t = a - z;
                            if (R.allowClick && (R.updateClickedSlide(e), R.emit("onTap", R, e), 300 > t && 300 < a - B && (Q && clearTimeout(Q), Q = setTimeout(function() {
                                    R && (R.params.paginationHide && 0 < R.paginationContainer.length && !_(e.target).hasClass(R.params.bulletClass) && R.paginationContainer.toggleClass(R.params.paginationHiddenClass), R.emit("onClick", R, e))
                                }, 300)), 300 > t && 300 > a - B && (Q && clearTimeout(Q), R.emit("onDoubleTap", R, e))), B = Date.now(), setTimeout(function() {
                                    R && (R.allowClick = !0)
                                }, 0), !V || !U || !R.swipeDirection || 0 === R.touches.diff || E === J) return void(V = U = !1);
                            V = U = !1;
                            var s;
                            if (s = R.params.followFinger ? R.rtl ? R.translate : -R.translate : -E, R.params.freeMode) {
                                if (s < -R.minTranslate()) return void R.slideTo(R.activeIndex);
                                if (s > -R.maxTranslate()) return void(R.slides.length < R.snapGrid.length ? R.slideTo(R.snapGrid.length - 1) : R.slideTo(R.slides.length - 1));
                                if (R.params.freeModeMomentum) {
                                    if (1 < H.length) {
                                        var i = H.pop(),
                                            r = H.pop(),
                                            n = i.position - r.position,
                                            o = i.time - r.time;
                                        R.velocity = n / o, R.velocity /= 2, b(R.velocity) < R.params.freeModeMinimumVelocity && (R.velocity = 0), (150 < o || 300 < new window.Date().getTime() - i.time) && (R.velocity = 0)
                                    } else R.velocity = 0;
                                    R.velocity *= R.params.freeModeMomentumVelocityRatio, H.length = 0;
                                    var l = 1e3 * R.params.freeModeMomentumRatio,
                                        p = R.velocity * l,
                                        d = R.translate + p;
                                    R.rtl && (d = -d);
                                    var T = !1,
                                        m = 20 * b(R.velocity) * R.params.freeModeMomentumBounceRatio,
                                        k;
                                    if (d < R.maxTranslate()) R.params.freeModeMomentumBounce ? (d + R.maxTranslate() < -m && (d = R.maxTranslate() - m), k = R.maxTranslate(), T = !0, L = !0) : d = R.maxTranslate();
                                    else if (d > R.minTranslate()) R.params.freeModeMomentumBounce ? (d - R.minTranslate() > m && (d = R.minTranslate() + m), k = R.minTranslate(), T = !0, L = !0) : d = R.minTranslate();
                                    else if (R.params.freeModeSticky) {
                                        var c = 0,
                                            f;
                                        for (c = 0; c < R.snapGrid.length; c += 1)
                                            if (R.snapGrid[c] > -d) {
                                                f = c;
                                                break
                                            }
                                        d = b(R.snapGrid[f] - d) < b(R.snapGrid[f - 1] - d) || "next" === R.swipeDirection ? R.snapGrid[f] : R.snapGrid[f - 1], R.rtl || (d = -d)
                                    }
                                    if (0 !== R.velocity) l = R.rtl ? b((-d - R.translate) / R.velocity) : b((d - R.translate) / R.velocity);
                                    else if (R.params.freeModeSticky) return void R.slideReset();
                                    R.params.freeModeMomentumBounce && T ? (R.updateProgress(k), R.setWrapperTransition(l), R.setWrapperTranslate(d), R.onTransitionStart(), R.animating = !0, R.wrapper.transitionEnd(function() {
                                        R && L && (R.emit("onMomentumBounce", R), R.setWrapperTransition(R.params.speed), R.setWrapperTranslate(k), R.wrapper.transitionEnd(function() {
                                            R && R.onTransitionEnd()
                                        }))
                                    })) : R.velocity ? (R.updateProgress(d), R.setWrapperTransition(l), R.setWrapperTranslate(d), R.onTransitionStart(), R.animating || (R.animating = !0, R.wrapper.transitionEnd(function() {
                                        R && R.onTransitionEnd()
                                    }))) : R.updateProgress(d), R.updateActiveIndex()
                                }
                                return void((!R.params.freeModeMomentum || t >= R.params.longSwipesMs) && (R.updateProgress(), R.updateActiveIndex()))
                            }
                            var g = 0,
                                w = R.slidesSizesGrid[0],
                                y;
                            for (y = 0; y < R.slidesGrid.length; y += R.params.slidesPerGroup) void 0 === R.slidesGrid[y + R.params.slidesPerGroup] ? s >= R.slidesGrid[y] && (g = y, w = R.slidesGrid[R.slidesGrid.length - 1] - R.slidesGrid[R.slidesGrid.length - 2]) : s >= R.slidesGrid[y] && s < R.slidesGrid[y + R.params.slidesPerGroup] && (g = y, w = R.slidesGrid[y + R.params.slidesPerGroup] - R.slidesGrid[y]);
                            var v = (s - R.slidesGrid[g]) / w;
                            if (t > R.params.longSwipesMs) {
                                if (!R.params.longSwipes) return void R.slideTo(R.activeIndex);
                                "next" === R.swipeDirection && (v >= R.params.longSwipesRatio ? R.slideTo(g + R.params.slidesPerGroup) : R.slideTo(g)), "prev" === R.swipeDirection && (v > 1 - R.params.longSwipesRatio ? R.slideTo(g + R.params.slidesPerGroup) : R.slideTo(g))
                            } else {
                                if (!R.params.shortSwipes) return void R.slideTo(R.activeIndex);
                                "next" === R.swipeDirection && R.slideTo(g + R.params.slidesPerGroup), "prev" === R.swipeDirection && R.slideTo(g)
                            }
                        }
                    }, R._slideTo = function(t, e) {
                        return R.slideTo(t, e, !0, !0)
                    }, R.slideTo = function(n, e, a, t) {
                        void 0 === a && (a = !0), void 0 === n && (n = 0), 0 > n && (n = 0), R.snapIndex = x(n / R.params.slidesPerGroup), R.snapIndex >= R.snapGrid.length && (R.snapIndex = R.snapGrid.length - 1);
                        var s = -R.snapGrid[R.snapIndex];
                        if (R.params.autoplay && R.autoplaying && (t || !R.params.autoplayDisableOnInteraction ? R.pauseAutoplay(e) : R.stopAutoplay()), R.updateProgress(s), R.params.normalizeSlideIndex)
                            for (var o = 0; o < R.slidesGrid.length; o++) - x(100 * s) >= x(100 * R.slidesGrid[o]) && (n = o);
                        return !(!R.params.allowSwipeToNext && s < R.translate && s < R.minTranslate()) && !(!R.params.allowSwipeToPrev && s > R.translate && s > R.maxTranslate() && (R.activeIndex || 0) !== n) && (void 0 === e && (e = R.params.speed), R.previousIndex = R.activeIndex || 0, R.activeIndex = n, R.updateRealIndex(), R.rtl && -s === R.translate || !R.rtl && s === R.translate ? (R.params.autoHeight && R.updateAutoHeight(), R.updateClasses(), "slide" !== R.params.effect && R.setWrapperTranslate(s), !1) : (R.updateClasses(), R.onTransitionStart(a), 0 === e || R.browser.lteIE9 ? (R.setWrapperTranslate(s), R.setWrapperTransition(0), R.onTransitionEnd(a)) : (R.setWrapperTranslate(s), R.setWrapperTransition(e), R.animating || (R.animating = !0, R.wrapper.transitionEnd(function() {
                            R && R.onTransitionEnd(a)
                        }))), !0))
                    }, R.onTransitionStart = function(t) {
                        void 0 === t && (t = !0), R.params.autoHeight && R.updateAutoHeight(), R.lazy && R.lazy.onTransitionStart(), t && (R.emit("onTransitionStart", R), R.activeIndex !== R.previousIndex && (R.emit("onSlideChangeStart", R), R.activeIndex > R.previousIndex ? R.emit("onSlideNextStart", R) : R.emit("onSlidePrevStart", R)))
                    }, R.onTransitionEnd = function(t) {
                        R.animating = !1, R.setWrapperTransition(0), void 0 === t && (t = !0), R.lazy && R.lazy.onTransitionEnd(), t && (R.emit("onTransitionEnd", R), R.activeIndex !== R.previousIndex && (R.emit("onSlideChangeEnd", R), R.activeIndex > R.previousIndex ? R.emit("onSlideNextEnd", R) : R.emit("onSlidePrevEnd", R))), R.params.history && R.history && R.history.setHistory(R.params.history, R.activeIndex), R.params.hashnav && R.hashnav && R.hashnav.setHash()
                    }, R.slideNext = function(i, e, a) {
                        return R.params.loop ? !R.animating && (R.fixLoop(), R.container[0].clientLeft, R.slideTo(R.activeIndex + R.params.slidesPerGroup, e, i, a)) : R.slideTo(R.activeIndex + R.params.slidesPerGroup, e, i, a)
                    }, R._slideNext = function(t) {
                        return R.slideNext(!0, t, !0)
                    }, R.slidePrev = function(i, e, a) {
                        return R.params.loop ? !R.animating && (R.fixLoop(), R.container[0].clientLeft, R.slideTo(R.activeIndex - 1, e, i, a)) : R.slideTo(R.activeIndex - 1, e, i, a)
                    }, R._slidePrev = function(t) {
                        return R.slidePrev(!0, t, !0)
                    }, R.slideReset = function(t, e) {
                        return R.slideTo(R.activeIndex, e, t)
                    }, R.disableTouchControl = function() {
                        return R.params.onlyExternal = !0, !0
                    }, R.enableTouchControl = function() {
                        return R.params.onlyExternal = !1, !0
                    }, R.setWrapperTransition = function(t, e) {
                        R.wrapper.transition(t), "slide" !== R.params.effect && R.effects[R.params.effect] && R.effects[R.params.effect].setTransition(t), R.params.parallax && R.parallax && R.parallax.setTransition(t), R.params.scrollbar && R.scrollbar && R.scrollbar.setTransition(t), R.params.control && R.controller && R.controller.setTransition(t, e), R.emit("onSetTransition", R, t)
                    }, R.setWrapperTranslate = function(r, l, a) {
                        var t = 0,
                            s = 0;
                        R.isHorizontal() ? t = R.rtl ? -r : r : s = r, R.params.roundLengths && (t = j(t), s = j(s)), R.params.virtualTranslate || (R.support.transforms3d ? R.wrapper.transform("translate3d(" + t + "px, " + s + "px, 0px)") : R.wrapper.transform("translate(" + t + "px, " + s + "px)")), R.translate = R.isHorizontal() ? t : s;
                        var i = R.maxTranslate() - R.minTranslate(),
                            o;
                        o = 0 == i ? 0 : (r - R.minTranslate()) / i, o !== R.progress && R.updateProgress(r), l && R.updateActiveIndex(), "slide" !== R.params.effect && R.effects[R.params.effect] && R.effects[R.params.effect].setTranslate(R.translate), R.params.parallax && R.parallax && R.parallax.setTranslate(R.translate), R.params.scrollbar && R.scrollbar && R.scrollbar.setTranslate(R.translate), R.params.control && R.controller && R.controller.setTranslate(R.translate, a), R.emit("onSetTranslate", R, R.translate)
                    }, R.getTranslate = function(n, e) {
                        var a, t, o, i;
                        return void 0 === e && (e = "x"), R.params.virtualTranslate ? R.rtl ? -R.translate : R.translate : (o = window.getComputedStyle(n, null), window.WebKitCSSMatrix ? (t = o.transform || o.webkitTransform, 6 < t.split(",").length && (t = t.split(", ").map(function(t) {
                            return t.replace(",", ".")
                        }).join(", ")), i = new window.WebKitCSSMatrix("none" === t ? "" : t)) : (i = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = i.toString().split(",")), "x" === e && (t = window.WebKitCSSMatrix ? i.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === e && (t = window.WebKitCSSMatrix ? i.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), R.rtl && t && (t = -t), t || 0)
                    }, R.getWrapperTranslate = function(t) {
                        return void 0 === t && (t = R.isHorizontal() ? "x" : "y"), R.getTranslate(R.wrapper[0], t)
                    }, R.observers = [], R.initObservers = function() {
                        if (R.params.observeParents)
                            for (var t = R.container.parents(), e = 0; e < t.length; e++) i(t[e]);
                        i(R.container[0], {
                            childList: !1
                        }), i(R.wrapper[0], {
                            attributes: !1
                        })
                    }, R.disconnectObservers = function() {
                        for (var t = 0; t < R.observers.length; t++) R.observers[t].disconnect();
                        R.observers = []
                    }, R.createLoop = function() {
                        R.wrapper.children("." + R.params.slideClass + "." + R.params.slideDuplicateClass).remove();
                        var e = R.wrapper.children("." + R.params.slideClass);
                        "auto" !== R.params.slidesPerView || R.params.loopedSlides || (R.params.loopedSlides = e.length), R.loopedSlides = parseInt(R.params.loopedSlides || R.params.slidesPerView, 10), R.loopedSlides += R.params.loopAdditionalSlides, R.loopedSlides > e.length && (R.loopedSlides = e.length);
                        var a = [],
                            s = [],
                            i;
                        for (e.each(function(i, t) {
                                var o = _(this);
                                i < R.loopedSlides && s.push(t), i < e.length && i >= e.length - R.loopedSlides && a.push(t), o.attr("data-swiper-slide-index", i)
                            }), i = 0; i < s.length; i++) R.wrapper.append(_(s[i].cloneNode(!0)).addClass(R.params.slideDuplicateClass));
                        for (i = a.length - 1; 0 <= i; i--) R.wrapper.prepend(_(a[i].cloneNode(!0)).addClass(R.params.slideDuplicateClass))
                    }, R.destroyLoop = function() {
                        R.wrapper.children("." + R.params.slideClass + "." + R.params.slideDuplicateClass).remove(), R.slides.removeAttr("data-swiper-slide-index")
                    }, R.reLoop = function(t) {
                        var e = R.activeIndex - R.loopedSlides;
                        R.destroyLoop(), R.createLoop(), R.updateSlidesSize(), t && R.slideTo(e + R.loopedSlides, 0, !1)
                    }, R.fixLoop = function() {
                        var t;
                        R.activeIndex < R.loopedSlides ? (t = R.slides.length - 3 * R.loopedSlides + R.activeIndex, t += R.loopedSlides, R.slideTo(t, 0, !1, !0)) : ("auto" === R.params.slidesPerView && R.activeIndex >= 2 * R.loopedSlides || R.activeIndex > R.slides.length - 2 * R.params.slidesPerView) && (t = -R.slides.length + R.activeIndex + R.loopedSlides, t += R.loopedSlides, R.slideTo(t, 0, !1, !0))
                    }, R.appendSlide = function(t) {
                        if (R.params.loop && R.destroyLoop(), "object" == typeof t && t.length)
                            for (var i = 0; i < t.length; i++) t[i] && R.wrapper.append(t[i]);
                        else R.wrapper.append(t);
                        R.params.loop && R.createLoop(), R.params.observer && R.support.observer || R.update(!0)
                    }, R.prependSlide = function(i) {
                        R.params.loop && R.destroyLoop();
                        var n = R.activeIndex + 1;
                        if ("object" == typeof i && i.length) {
                            for (var a = 0; a < i.length; a++) i[a] && R.wrapper.prepend(i[a]);
                            n = R.activeIndex + i.length
                        } else R.wrapper.prepend(i);
                        R.params.loop && R.createLoop(), R.params.observer && R.support.observer || R.update(!0), R.slideTo(n, 0, !1)
                    }, R.removeSlide = function(i) {
                        R.params.loop && (R.destroyLoop(), R.slides = R.wrapper.children("." + R.params.slideClass));
                        var n = R.activeIndex,
                            t;
                        if ("object" == typeof i && i.length) {
                            for (var a = 0; a < i.length; a++) t = i[a], R.slides[t] && R.slides.eq(t).remove(), t < n && n--;
                            n = v(n, 0)
                        } else t = i, R.slides[t] && R.slides.eq(t).remove(), t < n && n--, n = v(n, 0);
                        R.params.loop && R.createLoop(), R.params.observer && R.support.observer || R.update(!0), R.params.loop ? R.slideTo(n + R.loopedSlides, 0, !1) : R.slideTo(n, 0, !1)
                    }, R.removeAllSlides = function() {
                        for (var t = [], e = 0; e < R.slides.length; e++) t.push(e);
                        R.removeSlide(t)
                    }, R.effects = {
                        fade: {
                            setTranslate: function() {
                                for (var n = 0; n < R.slides.length; n++) {
                                    var e = R.slides.eq(n),
                                        a = e[0].swiperSlideOffset,
                                        o = -a;
                                    R.params.virtualTranslate || (o -= R.translate);
                                    var s = 0;
                                    R.isHorizontal() || (s = o, o = 0);
                                    var i = R.params.fade.crossFade ? v(1 - b(e[0].progress), 0) : 1 + C(v(e[0].progress, -1), 0);
                                    e.css({
                                        opacity: i
                                    }).transform("translate3d(" + o + "px, " + s + "px, 0px)")
                                }
                            },
                            setTransition: function(t) {
                                if (R.slides.transition(t), R.params.virtualTranslate && 0 !== t) {
                                    var i = !1;
                                    R.slides.transitionEnd(function() {
                                        if (!i && R) {
                                            i = !0, R.animating = !1;
                                            for (var n = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], e = 0; e < n.length; e++) R.wrapper.trigger(n[e])
                                        }
                                    })
                                }
                            }
                        },
                        flip: {
                            setTranslate: function() {
                                for (var e = 0; e < R.slides.length; e++) {
                                    var a = R.slides.eq(e),
                                        t = a[0].progress;
                                    R.params.flip.limitRotation && (t = v(C(a[0].progress, 1), -1));
                                    var c = a[0].swiperSlideOffset,
                                        m = -180 * t,
                                        r = m,
                                        h = 0,
                                        o = -c,
                                        l = 0;
                                    if (R.isHorizontal() ? R.rtl && (r = -r) : (l = o, o = 0, h = -r, r = 0), a[0].style.zIndex = -b(y(t)) + R.slides.length, R.params.flip.slideShadows) {
                                        var p = R.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
                                            d = R.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                                        0 === p.length && (p = _("<div class=\"swiper-slide-shadow-" + (R.isHorizontal() ? "left" : "top") + "\"></div>"), a.append(p)), 0 === d.length && (d = _("<div class=\"swiper-slide-shadow-" + (R.isHorizontal() ? "right" : "bottom") + "\"></div>"), a.append(d)), p.length && (p[0].style.opacity = v(-t, 0)), d.length && (d[0].style.opacity = v(t, 0))
                                    }
                                    a.transform("translate3d(" + o + "px, " + l + "px, 0px) rotateX(" + h + "deg) rotateY(" + r + "deg)")
                                }
                            },
                            setTransition: function(e) {
                                if (R.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), R.params.virtualTranslate && 0 !== e) {
                                    var i = !1;
                                    R.slides.eq(R.activeIndex).transitionEnd(function() {
                                        if (!i && R && _(this).hasClass(R.params.slideActiveClass)) {
                                            i = !0, R.animating = !1;
                                            for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], a = 0; a < e.length; a++) R.wrapper.trigger(e[a])
                                        }
                                    })
                                }
                            }
                        },
                        cube: {
                            setTranslate: function() {
                                var e = 0,
                                    S;
                                R.params.cube.shadow && (R.isHorizontal() ? (S = R.wrapper.find(".swiper-cube-shadow"), 0 === S.length && (S = _("<div class=\"swiper-cube-shadow\"></div>"), R.wrapper.append(S)), S.css({
                                    height: R.width + "px"
                                })) : (S = R.container.find(".swiper-cube-shadow"), 0 === S.length && (S = _("<div class=\"swiper-cube-shadow\"></div>"), R.container.append(S))));
                                for (var a = 0; a < R.slides.length; a++) {
                                    var T = R.slides.eq(a),
                                        i = 90 * a,
                                        k = x(i / 360);
                                    R.rtl && (i = -i, k = x(-i / 360));
                                    var $ = v(C(T[0].progress, 1), -1),
                                        D = 0,
                                        E = 0,
                                        p = 0;
                                    0 == a % 4 ? (D = 4 * -k * R.size, p = 0) : 0 == (a - 1) % 4 ? (D = 0, p = 4 * -k * R.size) : 0 == (a - 2) % 4 ? (D = R.size + 4 * k * R.size, p = R.size) : 0 == (a - 3) % 4 && (D = -R.size, p = 3 * R.size + 4 * R.size * k), R.rtl && (D = -D), R.isHorizontal() || (E = D, D = 0);
                                    var d = "rotateX(" + (R.isHorizontal() ? 0 : -i) + "deg) rotateY(" + (R.isHorizontal() ? i : 0) + "deg) translate3d(" + D + "px, " + E + "px, " + p + "px)";
                                    if (1 >= $ && -1 < $ && (e = 90 * a + 90 * $, R.rtl && (e = 90 * -a - 90 * $)), T.transform(d), R.params.cube.slideShadows) {
                                        var u = R.isHorizontal() ? T.find(".swiper-slide-shadow-left") : T.find(".swiper-slide-shadow-top"),
                                            c = R.isHorizontal() ? T.find(".swiper-slide-shadow-right") : T.find(".swiper-slide-shadow-bottom");
                                        0 === u.length && (u = _("<div class=\"swiper-slide-shadow-" + (R.isHorizontal() ? "left" : "top") + "\"></div>"), T.append(u)), 0 === c.length && (c = _("<div class=\"swiper-slide-shadow-" + (R.isHorizontal() ? "right" : "bottom") + "\"></div>"), T.append(c)), u.length && (u[0].style.opacity = v(-$, 0)), c.length && (c[0].style.opacity = v($, 0))
                                    }
                                }
                                if (R.wrapper.css({
                                        "-webkit-transform-origin": "50% 50% -" + R.size / 2 + "px",
                                        "-moz-transform-origin": "50% 50% -" + R.size / 2 + "px",
                                        "-ms-transform-origin": "50% 50% -" + R.size / 2 + "px",
                                        "transform-origin": "50% 50% -" + R.size / 2 + "px"
                                    }), R.params.cube.shadow)
                                    if (R.isHorizontal()) S.transform("translate3d(0px, " + (R.width / 2 + R.params.cube.shadowOffset) + "px, " + -R.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + R.params.cube.shadowScale + ")");
                                    else {
                                        var m = b(e) - 90 * x(b(e) / 90),
                                            h = 1.5 - (Math.sin(2 * m * n / 360) / 2 + Math.cos(2 * m * n / 360) / 2),
                                            g = R.params.cube.shadowScale,
                                            f = R.params.cube.shadowScale / h,
                                            P = R.params.cube.shadowOffset;
                                        S.transform("scale3d(" + g + ", 1, " + f + ") translate3d(0px, " + (R.height / 2 + P) + "px, " + -R.height / 2 / f + "px) rotateX(-90deg)")
                                    }
                                var w = R.isSafari || R.isUiWebView ? -R.size / 2 : 0;
                                R.wrapper.transform("translate3d(0px,0," + w + "px) rotateX(" + (R.isHorizontal() ? 0 : e) + "deg) rotateY(" + (R.isHorizontal() ? -e : 0) + "deg)")
                            },
                            setTransition: function(t) {
                                R.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), R.params.cube.shadow && !R.isHorizontal() && R.container.find(".swiper-cube-shadow").transition(t)
                            }
                        },
                        coverflow: {
                            setTranslate: function() {
                                for (var e = R.translate, x = R.isHorizontal() ? -e + R.width / 2 : -e + R.height / 2, t = R.isHorizontal() ? R.params.coverflow.rotate : -R.params.coverflow.rotate, s = R.params.coverflow.depth, C = 0, r = R.slides.length; C < r; C++) {
                                    var n = R.slides.eq(C),
                                        o = R.slidesSizesGrid[C],
                                        l = n[0].swiperSlideOffset,
                                        p = (x - l - o / 2) / o * R.params.coverflow.modifier,
                                        S = R.isHorizontal() ? t * p : 0,
                                        u = R.isHorizontal() ? 0 : t * p,
                                        c = -s * b(p),
                                        m = R.isHorizontal() ? 0 : R.params.coverflow.stretch * p,
                                        h = R.isHorizontal() ? R.params.coverflow.stretch * p : 0;
                                    .001 > b(h) && (h = 0), .001 > b(m) && (m = 0), .001 > b(c) && (c = 0), .001 > b(S) && (S = 0), .001 > b(u) && (u = 0);
                                    var g = "translate3d(" + h + "px," + m + "px," + c + "px)  rotateX(" + u + "deg) rotateY(" + S + "deg)";
                                    if (n.transform(g), n[0].style.zIndex = 1 - b(y(p)), R.params.coverflow.slideShadows) {
                                        var f = R.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top"),
                                            v = R.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom");
                                        0 === f.length && (f = _("<div class=\"swiper-slide-shadow-" + (R.isHorizontal() ? "left" : "top") + "\"></div>"), n.append(f)), 0 === v.length && (v = _("<div class=\"swiper-slide-shadow-" + (R.isHorizontal() ? "right" : "bottom") + "\"></div>"), n.append(v)), f.length && (f[0].style.opacity = 0 < p ? p : 0), v.length && (v[0].style.opacity = 0 < -p ? -p : 0)
                                    }
                                }
                                R.browser.ie && (R.wrapper[0].style.perspectiveOrigin = x + "px 50%")
                            },
                            setTransition: function(t) {
                                R.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t)
                            }
                        }
                    }, R.lazy = {
                        initialImageLoaded: !1,
                        loadImageInSlide: function(e, d) {
                            if (void 0 !== e && (void 0 === d && (d = !0), 0 !== R.slides.length)) {
                                var t = R.slides.eq(e),
                                    a = t.find("." + R.params.lazyLoadingClass + ":not(." + R.params.lazyStatusLoadedClass + "):not(." + R.params.lazyStatusLoadingClass + ")");
                                !t.hasClass(R.params.lazyLoadingClass) || t.hasClass(R.params.lazyStatusLoadedClass) || t.hasClass(R.params.lazyStatusLoadingClass) || (a = a.add(t[0])), 0 !== a.length && a.each(function() {
                                    var s = _(this);
                                    s.addClass(R.params.lazyStatusLoadingClass);
                                    var a = s.attr("data-background"),
                                        i = s.attr("data-src"),
                                        r = s.attr("data-srcset"),
                                        n = s.attr("data-sizes");
                                    R.loadImage(s[0], i || a, r, n, !1, function() {
                                        if (void 0 !== R && null !== R && R) {
                                            if (a ? (s.css("background-image", "url(\"" + a + "\")"), s.removeAttr("data-background")) : (r && (s.attr("srcset", r), s.removeAttr("data-srcset")), n && (s.attr("sizes", n), s.removeAttr("data-sizes")), i && (s.attr("src", i), s.removeAttr("data-src"))), s.addClass(R.params.lazyStatusLoadedClass).removeClass(R.params.lazyStatusLoadingClass), t.find("." + R.params.lazyPreloaderClass + ", ." + R.params.preloaderClass).remove(), R.params.loop && d) {
                                                var o = t.attr("data-swiper-slide-index");
                                                if (t.hasClass(R.params.slideDuplicateClass)) {
                                                    var e = R.wrapper.children("[data-swiper-slide-index=\"" + o + "\"]:not(." + R.params.slideDuplicateClass + ")");
                                                    R.lazy.loadImageInSlide(e.index(), !1)
                                                } else {
                                                    var l = R.wrapper.children("." + R.params.slideDuplicateClass + "[data-swiper-slide-index=\"" + o + "\"]");
                                                    R.lazy.loadImageInSlide(l.index(), !1)
                                                }
                                            }
                                            R.emit("onLazyImageReady", R, t[0], s[0])
                                        }
                                    }), R.emit("onLazyImageLoad", R, t[0], s[0])
                                })
                            }
                        },
                        load: function() {
                            var e = R.params.slidesPerView,
                                t;
                            if ("auto" === e && (e = 0), R.lazy.initialImageLoaded || (R.lazy.initialImageLoaded = !0), R.params.watchSlidesVisibility) R.wrapper.children("." + R.params.slideVisibleClass).each(function() {
                                R.lazy.loadImageInSlide(_(this).index())
                            });
                            else if (1 < e)
                                for (t = R.activeIndex; t < R.activeIndex + e; t++) R.slides[t] && R.lazy.loadImageInSlide(t);
                            else R.lazy.loadImageInSlide(R.activeIndex);
                            if (R.params.lazyLoadingInPrevNext)
                                if (1 < e || R.params.lazyLoadingInPrevNextAmount && 1 < R.params.lazyLoadingInPrevNextAmount) {
                                    var a = R.params.lazyLoadingInPrevNextAmount,
                                        s = e,
                                        i = C(R.activeIndex + s + v(a, s), R.slides.length),
                                        r = v(R.activeIndex - v(s, a), 0);
                                    for (t = R.activeIndex + e; t < i; t++) R.slides[t] && R.lazy.loadImageInSlide(t);
                                    for (t = r; t < R.activeIndex; t++) R.slides[t] && R.lazy.loadImageInSlide(t)
                                } else {
                                    var n = R.wrapper.children("." + R.params.slideNextClass);
                                    0 < n.length && R.lazy.loadImageInSlide(n.index());
                                    var o = R.wrapper.children("." + R.params.slidePrevClass);
                                    0 < o.length && R.lazy.loadImageInSlide(o.index())
                                }
                        },
                        onTransitionStart: function() {
                            R.params.lazyLoading && (R.params.lazyLoadingOnTransitionStart || !R.params.lazyLoadingOnTransitionStart && !R.lazy.initialImageLoaded) && R.lazy.load()
                        },
                        onTransitionEnd: function() {
                            R.params.lazyLoading && !R.params.lazyLoadingOnTransitionStart && R.lazy.load()
                        }
                    }, R.scrollbar = {
                        isTouched: !1,
                        setDragPosition: function(n) {
                            var e = R.scrollbar,
                                a = R.isHorizontal() ? "touchstart" === n.type || "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX || n.clientX : "touchstart" === n.type || "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY || n.clientY,
                                t = a - e.track.offset()[R.isHorizontal() ? "left" : "top"] - e.dragSize / 2,
                                o = -R.minTranslate() * e.moveDivider,
                                i = -R.maxTranslate() * e.moveDivider;
                            t < o ? t = o : t > i && (t = i), t = -t / e.moveDivider, R.updateProgress(t), R.setWrapperTranslate(t, !0)
                        },
                        dragStart: function(t) {
                            var e = R.scrollbar;
                            e.isTouched = !0, t.preventDefault(), t.stopPropagation(), e.setDragPosition(t), clearTimeout(e.dragTimeout), e.track.transition(0), R.params.scrollbarHide && e.track.css("opacity", 1), R.wrapper.transition(100), e.drag.transition(100), R.emit("onScrollbarDragStart", R)
                        },
                        dragMove: function(t) {
                            var e = R.scrollbar;
                            e.isTouched && (t.preventDefault ? t.preventDefault() : t.returnValue = !1, e.setDragPosition(t), R.wrapper.transition(0), e.track.transition(0), e.drag.transition(0), R.emit("onScrollbarDragMove", R))
                        },
                        dragEnd: function() {
                            var e = R.scrollbar;
                            e.isTouched && (e.isTouched = !1, R.params.scrollbarHide && (clearTimeout(e.dragTimeout), e.dragTimeout = setTimeout(function() {
                                e.track.css("opacity", 0), e.track.transition(400)
                            }, 1e3)), R.emit("onScrollbarDragEnd", R), R.params.scrollbarSnapOnRelease && R.slideReset())
                        },
                        draggableEvents: function() {
                            return !1 !== R.params.simulateTouch || R.support.touch ? R.touchEvents : R.touchEventsDesktop
                        }(),
                        enableDraggable: function() {
                            var e = R.scrollbar,
                                a = R.support.touch ? e.track : document;
                            _(e.track).on(e.draggableEvents.start, e.dragStart), _(a).on(e.draggableEvents.move, e.dragMove), _(a).on(e.draggableEvents.end, e.dragEnd)
                        },
                        disableDraggable: function() {
                            var e = R.scrollbar,
                                a = R.support.touch ? e.track : document;
                            _(e.track).off(e.draggableEvents.start, e.dragStart), _(a).off(e.draggableEvents.move, e.dragMove), _(a).off(e.draggableEvents.end, e.dragEnd)
                        },
                        set: function() {
                            if (R.params.scrollbar) {
                                var e = R.scrollbar;
                                e.track = _(R.params.scrollbar), R.params.uniqueNavElements && "string" == typeof R.params.scrollbar && 1 < e.track.length && 1 === R.container.find(R.params.scrollbar).length && (e.track = R.container.find(R.params.scrollbar)), e.drag = e.track.find(".swiper-scrollbar-drag"), 0 === e.drag.length && (e.drag = _("<div class=\"swiper-scrollbar-drag\"></div>"), e.track.append(e.drag)), e.drag[0].style.width = "", e.drag[0].style.height = "", e.trackSize = R.isHorizontal() ? e.track[0].offsetWidth : e.track[0].offsetHeight, e.divider = R.size / R.virtualSize, e.moveDivider = e.divider * (e.trackSize / R.size), e.dragSize = e.trackSize * e.divider, R.isHorizontal() ? e.drag[0].style.width = e.dragSize + "px" : e.drag[0].style.height = e.dragSize + "px", e.track[0].style.display = 1 <= e.divider ? "none" : "", R.params.scrollbarHide && (e.track[0].style.opacity = 0)
                            }
                        },
                        setTranslate: function() {
                            if (R.params.scrollbar) {
                                var i = R.scrollbar,
                                    a = (R.translate, i.dragSize),
                                    t;
                                t = (i.trackSize - i.dragSize) * R.progress, R.rtl && R.isHorizontal() ? (t = -t, 0 < t ? (a = i.dragSize - t, t = 0) : -t + i.dragSize > i.trackSize && (a = i.trackSize + t)) : 0 > t ? (a = i.dragSize + t, t = 0) : t + i.dragSize > i.trackSize && (a = i.trackSize - t), R.isHorizontal() ? (R.support.transforms3d ? i.drag.transform("translate3d(" + t + "px, 0, 0)") : i.drag.transform("translateX(" + t + "px)"), i.drag[0].style.width = a + "px") : (R.support.transforms3d ? i.drag.transform("translate3d(0px, " + t + "px, 0)") : i.drag.transform("translateY(" + t + "px)"), i.drag[0].style.height = a + "px"), R.params.scrollbarHide && (clearTimeout(i.timeout), i.track[0].style.opacity = 1, i.timeout = setTimeout(function() {
                                    i.track[0].style.opacity = 0, i.track.transition(400)
                                }, 1e3))
                            }
                        },
                        setTransition: function(t) {
                            R.params.scrollbar && R.scrollbar.drag.transition(t)
                        }
                    }, R.controller = {
                        LinearSpline: function(n, e) {
                            var a = function() {
                                var n, e, a;
                                return function(t, s) {
                                    for (e = -1, n = t.length; 1 < n - e;) t[a = n + e >> 1] <= s ? e = a : n = a;
                                    return n
                                }
                            }();
                            this.x = n, this.y = e, this.lastIndex = n.length - 1;
                            var t, s;
                            this.x.length, this.interpolate = function(i) {
                                return i ? (s = a(this.x, i), t = s - 1, (i - this.x[t]) * (this.y[s] - this.y[t]) / (this.x[s] - this.x[t]) + this.y[t]) : 0
                            }
                        },
                        getInterpolateFunction: function(t) {
                            R.controller.spline || (R.controller.spline = R.params.loop ? new R.controller.LinearSpline(R.slidesGrid, t.slidesGrid) : new R.controller.LinearSpline(R.snapGrid, t.snapGrid))
                        },
                        setTranslate: function(l, a) {
                            function t(t) {
                                l = t.rtl && "horizontal" === t.params.direction ? -R.translate : R.translate, "slide" === R.params.controlBy && (R.controller.getInterpolateFunction(t), i = -R.controller.spline.interpolate(-l)), i && "container" !== R.params.controlBy || (n = (t.maxTranslate() - t.minTranslate()) / (R.maxTranslate() - R.minTranslate()), i = (l - R.minTranslate()) * n + t.minTranslate()), R.params.controlInverse && (i = t.maxTranslate() - i), t.updateProgress(i), t.setWrapperTranslate(i, !1, R), t.updateActiveIndex()
                            }
                            var s = R.params.control,
                                n, i;
                            if (Array.isArray(s))
                                for (var r = 0; r < s.length; r++) s[r] !== a && s[r] instanceof $ && t(s[r]);
                            else s instanceof $ && a !== s && t(s)
                        },
                        setTransition: function(n, e) {
                            function t(e) {
                                e.setWrapperTransition(n, R), 0 !== n && (e.onTransitionStart(), e.wrapper.transitionEnd(function() {
                                    s && (e.params.loop && "slide" === R.params.controlBy && e.fixLoop(), e.onTransitionEnd())
                                }))
                            }
                            var s = R.params.control,
                                a;
                            if (Array.isArray(s))
                                for (a = 0; a < s.length; a++) s[a] !== e && s[a] instanceof $ && t(s[a]);
                            else s instanceof $ && e !== s && t(s)
                        }
                    }, R.hashnav = {
                        onHashCange: function() {
                            var e = document.location.hash.replace("#", "");
                            e !== R.slides.eq(R.activeIndex).attr("data-hash") && R.slideTo(R.wrapper.children("." + R.params.slideClass + "[data-hash=\"" + e + "\"]").index())
                        },
                        attachEvents: function(e) {
                            var a = e ? "off" : "on";
                            _(window)[a]("hashchange", R.hashnav.onHashCange)
                        },
                        setHash: function() {
                            if (R.hashnav.initialized && R.params.hashnav)
                                if (R.params.replaceState && window.history && window.history.replaceState) window.history.replaceState(null, null, "#" + R.slides.eq(R.activeIndex).attr("data-hash") || "");
                                else {
                                    var t = R.slides.eq(R.activeIndex),
                                        e = t.attr("data-hash") || t.attr("data-history");
                                    document.location.hash = e || ""
                                }
                        },
                        init: function() {
                            if (R.params.hashnav && !R.params.history) {
                                R.hashnav.initialized = !0;
                                var n = document.location.hash.replace("#", "");
                                if (n)
                                    for (var e = 0, a = R.slides.length; e < a; e++) {
                                        var t = R.slides.eq(e),
                                            s = t.attr("data-hash") || t.attr("data-history");
                                        if (s === n && !t.hasClass(R.params.slideDuplicateClass)) {
                                            var i = t.index();
                                            R.slideTo(i, 0, R.params.runCallbacksOnInit, !0)
                                        }
                                    }
                                R.params.hashnavWatchState && R.hashnav.attachEvents()
                            }
                        },
                        destroy: function() {
                            R.params.hashnavWatchState && R.hashnav.attachEvents(!0)
                        }
                    }, R.history = {
                        init: function() {
                            if (R.params.history) {
                                if (!window.history || !window.history.pushState) return R.params.history = !1, void(R.params.hashnav = !0);
                                R.history.initialized = !0, this.paths = this.getPathValues(), (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, R.params.runCallbacksOnInit), R.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState))
                            }
                        },
                        setHistoryPopState: function() {
                            R.history.paths = R.history.getPathValues(), R.history.scrollToSlide(R.params.speed, R.history.paths.value, !1)
                        },
                        getPathValues: function() {
                            var t = window.location.pathname.slice(1).split("/"),
                                e = t.length;
                            return {
                                key: t[e - 2],
                                value: t[e - 1]
                            }
                        },
                        setHistory: function(i, e) {
                            if (R.history.initialized && R.params.history) {
                                var a = R.slides.eq(e),
                                    t = this.slugify(a.attr("data-history"));
                                window.location.pathname.includes(i) || (t = i + "/" + t), R.params.replaceState ? window.history.replaceState(null, null, t) : window.history.pushState(null, null, t)
                            }
                        },
                        slugify: function(t) {
                            return t.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                        },
                        scrollToSlide: function(l, e, a) {
                            if (e)
                                for (var t = 0, s = R.slides.length; t < s; t++) {
                                    var i = R.slides.eq(t),
                                        r = this.slugify(i.attr("data-history"));
                                    if (r === e && !i.hasClass(R.params.slideDuplicateClass)) {
                                        var n = i.index();
                                        R.slideTo(n, l, a)
                                    }
                                } else R.slideTo(0, l, a)
                        }
                    }, R.disableKeyboardControl = function() {
                        R.params.keyboardControl = !1, _(document).off("keydown", s)
                    }, R.enableKeyboardControl = function() {
                        R.params.keyboardControl = !0, _(document).on("keydown", s)
                    }, R.mousewheel = {
                        event: !1,
                        lastScrollTime: new window.Date().getTime()
                    }, R.params.mousewheelControl && (R.mousewheel.event = -1 < navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function() {
                        var t = "onwheel" in document;
                        if (!t) {
                            var i = document.createElement("div");
                            i.setAttribute("onwheel", "return;"), t = "function" == typeof i.onwheel
                        }
                        return !t && document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", "") && (t = document.implementation.hasFeature("Events.wheel", "3.0")), t
                    }() ? "wheel" : "mousewheel"), R.disableMousewheelControl = function() {
                        if (!R.mousewheel.event) return !1;
                        var e = R.container;
                        return "container" !== R.params.mousewheelEventsTarged && (e = _(R.params.mousewheelEventsTarged)), e.off(R.mousewheel.event, r), R.params.mousewheelControl = !1, !0
                    }, R.enableMousewheelControl = function() {
                        if (!R.mousewheel.event) return !1;
                        var e = R.container;
                        return "container" !== R.params.mousewheelEventsTarged && (e = _(R.params.mousewheelEventsTarged)), e.on(R.mousewheel.event, r), R.params.mousewheelControl = !0, !0
                    }, R.parallax = {
                        setTranslate: function() {
                            R.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                l(this, R.progress)
                            }), R.slides.each(function() {
                                var e = _(this);
                                e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                    l(this, C(v(e[0].progress, -1), 1))
                                })
                            })
                        },
                        setTransition: function(e) {
                            void 0 === e && (e = R.params.speed), R.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                var a = _(this),
                                    t = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
                                0 === e && (t = 0), a.transition(t)
                            })
                        }
                    }, R.zoom = {
                        scale: 1,
                        currentScale: 1,
                        isScaling: !1,
                        gesture: {
                            slide: void 0,
                            slideWidth: void 0,
                            slideHeight: void 0,
                            image: void 0,
                            imageWrap: void 0,
                            zoomMax: R.params.zoomMax
                        },
                        image: {
                            isTouched: void 0,
                            isMoved: void 0,
                            currentX: void 0,
                            currentY: void 0,
                            minX: void 0,
                            minY: void 0,
                            maxX: void 0,
                            maxY: void 0,
                            width: void 0,
                            height: void 0,
                            startX: void 0,
                            startY: void 0,
                            touchesStart: {},
                            touchesCurrent: {}
                        },
                        velocity: {
                            x: void 0,
                            y: void 0,
                            prevPositionX: void 0,
                            prevPositionY: void 0,
                            prevTime: void 0
                        },
                        getDistanceBetweenTouches: function(n) {
                            if (2 > n.targetTouches.length) return 1;
                            var e = n.targetTouches[0].pageX,
                                a = n.targetTouches[0].pageY,
                                t = n.targetTouches[1].pageX,
                                s = n.targetTouches[1].pageY;
                            return Math.sqrt(p(t - e, 2) + p(s - a, 2))
                        },
                        onGestureStart: function(e) {
                            var a = R.zoom;
                            if (!R.support.gestures) {
                                if ("touchstart" !== e.type || "touchstart" === e.type && 2 > e.targetTouches.length) return;
                                a.gesture.scaleStart = a.getDistanceBetweenTouches(e)
                            }
                            return a.gesture.slide && a.gesture.slide.length || (a.gesture.slide = _(this), 0 === a.gesture.slide.length && (a.gesture.slide = R.slides.eq(R.activeIndex)), a.gesture.image = a.gesture.slide.find("img, svg, canvas"), a.gesture.imageWrap = a.gesture.image.parent("." + R.params.zoomContainerClass), a.gesture.zoomMax = a.gesture.imageWrap.attr("data-swiper-zoom") || R.params.zoomMax, 0 !== a.gesture.imageWrap.length) ? void(a.gesture.image.transition(0), a.isScaling = !0) : void(a.gesture.image = void 0)
                        },
                        onGestureChange: function(t) {
                            var e = R.zoom;
                            if (!R.support.gestures) {
                                if ("touchmove" !== t.type || "touchmove" === t.type && 2 > t.targetTouches.length) return;
                                e.gesture.scaleMove = e.getDistanceBetweenTouches(t)
                            }
                            e.gesture.image && 0 !== e.gesture.image.length && (e.scale = R.support.gestures ? t.scale * e.currentScale : e.gesture.scaleMove / e.gesture.scaleStart * e.currentScale, e.scale > e.gesture.zoomMax && (e.scale = e.gesture.zoomMax - 1 + p(e.scale - e.gesture.zoomMax + 1, .5)), e.scale < R.params.zoomMin && (e.scale = R.params.zoomMin + 1 - p(R.params.zoomMin - e.scale + 1, .5)), e.gesture.image.transform("translate3d(0,0,0) scale(" + e.scale + ")"))
                        },
                        onGestureEnd: function(t) {
                            var e = R.zoom;
                            !R.support.gestures && ("touchend" !== t.type || "touchend" === t.type && 2 > t.changedTouches.length) || e.gesture.image && 0 !== e.gesture.image.length && (e.scale = v(C(e.scale, e.gesture.zoomMax), R.params.zoomMin), e.gesture.image.transition(R.params.speed).transform("translate3d(0,0,0) scale(" + e.scale + ")"), e.currentScale = e.scale, e.isScaling = !1, 1 === e.scale && (e.gesture.slide = void 0))
                        },
                        onTouchStart: function(i, e) {
                            var a = i.zoom;
                            a.gesture.image && 0 !== a.gesture.image.length && (a.image.isTouched || ("android" === i.device.os && e.preventDefault(), a.image.isTouched = !0, a.image.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, a.image.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
                        },
                        onTouchMove: function(i) {
                            var e = R.zoom;
                            if (e.gesture.image && 0 !== e.gesture.image.length && (R.allowClick = !1, e.image.isTouched && e.gesture.slide)) {
                                e.image.isMoved || (e.image.width = e.gesture.image[0].offsetWidth, e.image.height = e.gesture.image[0].offsetHeight, e.image.startX = R.getTranslate(e.gesture.imageWrap[0], "x") || 0, e.image.startY = R.getTranslate(e.gesture.imageWrap[0], "y") || 0, e.gesture.slideWidth = e.gesture.slide[0].offsetWidth, e.gesture.slideHeight = e.gesture.slide[0].offsetHeight, e.gesture.imageWrap.transition(0), R.rtl && (e.image.startX = -e.image.startX), R.rtl && (e.image.startY = -e.image.startY));
                                var a = e.image.width * e.scale,
                                    t = e.image.height * e.scale;
                                if (!(a < e.gesture.slideWidth && t < e.gesture.slideHeight)) {
                                    if (e.image.minX = C(e.gesture.slideWidth / 2 - a / 2, 0), e.image.maxX = -e.image.minX, e.image.minY = C(e.gesture.slideHeight / 2 - t / 2, 0), e.image.maxY = -e.image.minY, e.image.touchesCurrent.x = "touchmove" === i.type ? i.targetTouches[0].pageX : i.pageX, e.image.touchesCurrent.y = "touchmove" === i.type ? i.targetTouches[0].pageY : i.pageY, !e.image.isMoved && !e.isScaling) {
                                        if (R.isHorizontal() && x(e.image.minX) === x(e.image.startX) && e.image.touchesCurrent.x < e.image.touchesStart.x || x(e.image.maxX) === x(e.image.startX) && e.image.touchesCurrent.x > e.image.touchesStart.x) return void(e.image.isTouched = !1);
                                        if (!R.isHorizontal() && x(e.image.minY) === x(e.image.startY) && e.image.touchesCurrent.y < e.image.touchesStart.y || x(e.image.maxY) === x(e.image.startY) && e.image.touchesCurrent.y > e.image.touchesStart.y) return void(e.image.isTouched = !1)
                                    }
                                    i.preventDefault(), i.stopPropagation(), e.image.isMoved = !0, e.image.currentX = e.image.touchesCurrent.x - e.image.touchesStart.x + e.image.startX, e.image.currentY = e.image.touchesCurrent.y - e.image.touchesStart.y + e.image.startY, e.image.currentX < e.image.minX && (e.image.currentX = e.image.minX + 1 - p(e.image.minX - e.image.currentX + 1, .8)), e.image.currentX > e.image.maxX && (e.image.currentX = e.image.maxX - 1 + p(e.image.currentX - e.image.maxX + 1, .8)), e.image.currentY < e.image.minY && (e.image.currentY = e.image.minY + 1 - p(e.image.minY - e.image.currentY + 1, .8)), e.image.currentY > e.image.maxY && (e.image.currentY = e.image.maxY - 1 + p(e.image.currentY - e.image.maxY + 1, .8)), e.velocity.prevPositionX || (e.velocity.prevPositionX = e.image.touchesCurrent.x), e.velocity.prevPositionY || (e.velocity.prevPositionY = e.image.touchesCurrent.y), e.velocity.prevTime || (e.velocity.prevTime = Date.now()), e.velocity.x = (e.image.touchesCurrent.x - e.velocity.prevPositionX) / (Date.now() - e.velocity.prevTime) / 2, e.velocity.y = (e.image.touchesCurrent.y - e.velocity.prevPositionY) / (Date.now() - e.velocity.prevTime) / 2, 2 > b(e.image.touchesCurrent.x - e.velocity.prevPositionX) && (e.velocity.x = 0), 2 > b(e.image.touchesCurrent.y - e.velocity.prevPositionY) && (e.velocity.y = 0), e.velocity.prevPositionX = e.image.touchesCurrent.x, e.velocity.prevPositionY = e.image.touchesCurrent.y, e.velocity.prevTime = Date.now(), e.gesture.imageWrap.transform("translate3d(" + e.image.currentX + "px, " + e.image.currentY + "px,0)")
                                }
                            }
                        },
                        onTouchEnd: function(a) {
                            var e = a.zoom;
                            if (e.gesture.image && 0 !== e.gesture.image.length) {
                                if (!e.image.isTouched || !e.image.isMoved) return e.image.isTouched = !1, void(e.image.isMoved = !1);
                                e.image.isTouched = !1, e.image.isMoved = !1;
                                var t = 300,
                                    s = 300,
                                    i = e.velocity.x * t,
                                    r = e.image.currentX + i,
                                    n = e.velocity.y * s,
                                    o = e.image.currentY + n;
                                0 !== e.velocity.x && (t = b((r - e.image.currentX) / e.velocity.x)), 0 !== e.velocity.y && (s = b((o - e.image.currentY) / e.velocity.y));
                                var l = v(t, s);
                                e.image.currentX = r, e.image.currentY = o;
                                var p = e.image.width * e.scale,
                                    d = e.image.height * e.scale;
                                e.image.minX = C(e.gesture.slideWidth / 2 - p / 2, 0), e.image.maxX = -e.image.minX, e.image.minY = C(e.gesture.slideHeight / 2 - d / 2, 0), e.image.maxY = -e.image.minY, e.image.currentX = v(C(e.image.currentX, e.image.maxX), e.image.minX), e.image.currentY = v(C(e.image.currentY, e.image.maxY), e.image.minY), e.gesture.imageWrap.transition(l).transform("translate3d(" + e.image.currentX + "px, " + e.image.currentY + "px,0)")
                            }
                        },
                        onTransitionEnd: function(t) {
                            var e = t.zoom;
                            e.gesture.slide && t.previousIndex !== t.activeIndex && (e.gesture.image.transform("translate3d(0,0,0) scale(1)"), e.gesture.imageWrap.transform("translate3d(0,0,0)"), e.gesture.slide = e.gesture.image = e.gesture.imageWrap = void 0, e.scale = e.currentScale = 1)
                        },
                        toggleZoom: function(e, a) {
                            var t = e.zoom;
                            if (t.gesture.slide || (t.gesture.slide = e.clickedSlide ? _(e.clickedSlide) : e.slides.eq(e.activeIndex), t.gesture.image = t.gesture.slide.find("img, svg, canvas"), t.gesture.imageWrap = t.gesture.image.parent("." + e.params.zoomContainerClass)), t.gesture.image && 0 !== t.gesture.image.length) {
                                var s, i, r, n, o, l, p, d, u, c, m, h, g, b, S, w, y, x;
                                void 0 === t.image.touchesStart.x && a ? (s = "touchend" === a.type ? a.changedTouches[0].pageX : a.pageX, i = "touchend" === a.type ? a.changedTouches[0].pageY : a.pageY) : (s = t.image.touchesStart.x, i = t.image.touchesStart.y), t.scale && 1 !== t.scale ? (t.scale = t.currentScale = 1, t.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"), t.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"), t.gesture.slide = void 0) : (t.scale = t.currentScale = t.gesture.imageWrap.attr("data-swiper-zoom") || e.params.zoomMax, a ? (y = t.gesture.slide[0].offsetWidth, x = t.gesture.slide[0].offsetHeight, r = t.gesture.slide.offset().left, n = t.gesture.slide.offset().top, o = r + y / 2 - s, l = n + x / 2 - i, u = t.gesture.image[0].offsetWidth, c = t.gesture.image[0].offsetHeight, m = u * t.scale, h = c * t.scale, g = C(y / 2 - m / 2, 0), b = C(x / 2 - h / 2, 0), S = -g, w = -b, p = o * t.scale, d = l * t.scale, p < g && (p = g), p > S && (p = S), d < b && (d = b), d > w && (d = w)) : (p = 0, d = 0), t.gesture.imageWrap.transition(300).transform("translate3d(" + p + "px, " + d + "px,0)"), t.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + t.scale + ")"))
                            }
                        },
                        attachEvents: function(e) {
                            var i = e ? "off" : "on";
                            if (R.params.zoom) {
                                var t = (R.slides, "touchstart" === R.touchEvents.start && R.support.passiveListener && R.params.passiveListeners && {
                                    passive: !0,
                                    capture: !1
                                });
                                R.support.gestures ? (R.slides[i]("gesturestart", R.zoom.onGestureStart, t), R.slides[i]("gesturechange", R.zoom.onGestureChange, t), R.slides[i]("gestureend", R.zoom.onGestureEnd, t)) : "touchstart" === R.touchEvents.start && (R.slides[i](R.touchEvents.start, R.zoom.onGestureStart, t), R.slides[i](R.touchEvents.move, R.zoom.onGestureChange, t), R.slides[i](R.touchEvents.end, R.zoom.onGestureEnd, t)), R[i]("touchStart", R.zoom.onTouchStart), R.slides.each(function(e, t) {
                                    0 < _(t).find("." + R.params.zoomContainerClass).length && _(t)[i](R.touchEvents.move, R.zoom.onTouchMove)
                                }), R[i]("touchEnd", R.zoom.onTouchEnd), R[i]("transitionEnd", R.zoom.onTransitionEnd), R.params.zoomToggle && R.on("doubleTap", R.zoom.toggleZoom)
                            }
                        },
                        init: function() {
                            R.zoom.attachEvents()
                        },
                        destroy: function() {
                            R.zoom.attachEvents(!0)
                        }
                    }, R._plugins = [], R.plugins) {
                    var Y = R.plugins[A](R, R.params[A]);
                    Y && R._plugins.push(Y)
                }
                return R.callPlugins = function(t) {
                    for (var e = 0; e < R._plugins.length; e++) t in R._plugins[e] && R._plugins[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                }, R.emitterEventListeners = {}, R.emit = function(t) {
                    R.params[t] && R.params[t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    var e;
                    if (R.emitterEventListeners[t])
                        for (e = 0; e < R.emitterEventListeners[t].length; e++) R.emitterEventListeners[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    R.callPlugins && R.callPlugins(t, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                }, R.on = function(t, e) {
                    return t = d(t), R.emitterEventListeners[t] || (R.emitterEventListeners[t] = []), R.emitterEventListeners[t].push(e), R
                }, R.off = function(i, e) {
                    var a;
                    if (i = d(i), void 0 === e) return R.emitterEventListeners[i] = [], R;
                    if (R.emitterEventListeners[i] && 0 !== R.emitterEventListeners[i].length) {
                        for (a = 0; a < R.emitterEventListeners[i].length; a++) R.emitterEventListeners[i][a] === e && R.emitterEventListeners[i].splice(a, 1);
                        return R
                    }
                }, R.once = function(i, e) {
                    i = d(i);
                    var a = function() {
                        e(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), R.off(i, a)
                    };
                    return R.on(i, a), R
                }, R.a11y = {
                    makeFocusable: function(t) {
                        return t.attr("tabIndex", "0"), t
                    },
                    addRole: function(t, e) {
                        return t.attr("role", e), t
                    },
                    addLabel: function(t, e) {
                        return t.attr("aria-label", e), t
                    },
                    disable: function(t) {
                        return t.attr("aria-disabled", !0), t
                    },
                    enable: function(t) {
                        return t.attr("aria-disabled", !1), t
                    },
                    onEnterKey: function(e) {
                        13 === e.keyCode && (_(e.target).is(R.params.nextButton) ? (R.onClickNext(e), R.isEnd ? R.a11y.notify(R.params.lastSlideMessage) : R.a11y.notify(R.params.nextSlideMessage)) : _(e.target).is(R.params.prevButton) && (R.onClickPrev(e), R.isBeginning ? R.a11y.notify(R.params.firstSlideMessage) : R.a11y.notify(R.params.prevSlideMessage)), _(e.target).is("." + R.params.bulletClass) && _(e.target)[0].click())
                    },
                    liveRegion: _("<span class=\"" + R.params.notificationClass + "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>"),
                    notify: function(t) {
                        var e = R.a11y.liveRegion;
                        0 !== e.length && (e.html(""), e.html(t))
                    },
                    init: function() {
                        R.params.nextButton && R.nextButton && 0 < R.nextButton.length && (R.a11y.makeFocusable(R.nextButton), R.a11y.addRole(R.nextButton, "button"), R.a11y.addLabel(R.nextButton, R.params.nextSlideMessage)), R.params.prevButton && R.prevButton && 0 < R.prevButton.length && (R.a11y.makeFocusable(R.prevButton), R.a11y.addRole(R.prevButton, "button"), R.a11y.addLabel(R.prevButton, R.params.prevSlideMessage)), _(R.container).append(R.a11y.liveRegion)
                    },
                    initPagination: function() {
                        R.params.pagination && R.params.paginationClickable && R.bullets && R.bullets.length && R.bullets.each(function() {
                            var e = _(this);
                            R.a11y.makeFocusable(e), R.a11y.addRole(e, "button"), R.a11y.addLabel(e, R.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1))
                        })
                    },
                    destroy: function() {
                        R.a11y.liveRegion && 0 < R.a11y.liveRegion.length && R.a11y.liveRegion.remove()
                    }
                }, R.init = function() {
                    R.params.loop && R.createLoop(), R.updateContainerSize(), R.updateSlidesSize(), R.updatePagination(), R.params.scrollbar && R.scrollbar && (R.scrollbar.set(), R.params.scrollbarDraggable && R.scrollbar.enableDraggable()), "slide" !== R.params.effect && R.effects[R.params.effect] && (R.params.loop || R.updateProgress(), R.effects[R.params.effect].setTranslate()), R.params.loop ? R.slideTo(R.params.initialSlide + R.loopedSlides, 0, R.params.runCallbacksOnInit) : (R.slideTo(R.params.initialSlide, 0, R.params.runCallbacksOnInit), 0 === R.params.initialSlide && (R.parallax && R.params.parallax && R.parallax.setTranslate(), R.lazy && R.params.lazyLoading && (R.lazy.load(), R.lazy.initialImageLoaded = !0))), R.attachEvents(), R.params.observer && R.support.observer && R.initObservers(), R.params.preloadImages && !R.params.lazyLoading && R.preloadImages(), R.params.zoom && R.zoom && R.zoom.init(), R.params.autoplay && R.startAutoplay(), R.params.keyboardControl && R.enableKeyboardControl && R.enableKeyboardControl(), R.params.mousewheelControl && R.enableMousewheelControl && R.enableMousewheelControl(), R.params.hashnavReplaceState && (R.params.replaceState = R.params.hashnavReplaceState), R.params.history && R.history && R.history.init(), R.params.hashnav && R.hashnav && R.hashnav.init(), R.params.a11y && R.a11y && R.a11y.init(), R.emit("onInit", R)
                }, R.cleanupStyles = function() {
                    R.container.removeClass(R.classNames.join(" ")).removeAttr("style"), R.wrapper.removeAttr("style"), R.slides && R.slides.length && R.slides.removeClass([R.params.slideVisibleClass, R.params.slideActiveClass, R.params.slideNextClass, R.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), R.paginationContainer && R.paginationContainer.length && R.paginationContainer.removeClass(R.params.paginationHiddenClass), R.bullets && R.bullets.length && R.bullets.removeClass(R.params.bulletActiveClass), R.params.prevButton && _(R.params.prevButton).removeClass(R.params.buttonDisabledClass), R.params.nextButton && _(R.params.nextButton).removeClass(R.params.buttonDisabledClass), R.params.scrollbar && R.scrollbar && (R.scrollbar.track && R.scrollbar.track.length && R.scrollbar.track.removeAttr("style"), R.scrollbar.drag && R.scrollbar.drag.length && R.scrollbar.drag.removeAttr("style"))
                }, R.destroy = function(t, e) {
                    R.detachEvents(), R.stopAutoplay(), R.params.scrollbar && R.scrollbar && R.params.scrollbarDraggable && R.scrollbar.disableDraggable(), R.params.loop && R.destroyLoop(), e && R.cleanupStyles(), R.disconnectObservers(), R.params.zoom && R.zoom && R.zoom.destroy(), R.params.keyboardControl && R.disableKeyboardControl && R.disableKeyboardControl(), R.params.mousewheelControl && R.disableMousewheelControl && R.disableMousewheelControl(), R.params.a11y && R.a11y && R.a11y.destroy(), R.params.history && !R.params.replaceState && window.removeEventListener("popstate", R.history.setHistoryPopState), R.params.hashnav && R.hashnav && R.hashnav.destroy(), R.emit("onDestroy"), !1 !== t && (R = null)
                }, R.init(), R
            }
        },
        _;
    $.prototype = {
        isSafari: function() {
            var t = window.navigator.userAgent.toLowerCase();
            return 0 <= t.indexOf("safari") && 0 > t.indexOf("chrome") && 0 > t.indexOf("android")
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
        isArray: function(t) {
            return "[object Array]" === Object.prototype.toString.apply(t)
        },
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: window.navigator.msPointerEnabled && 1 < window.navigator.msMaxTouchPoints || window.navigator.pointerEnabled && 1 < window.navigator.maxTouchPoints,
            lteIE9: function() {
                var t = document.createElement("div");
                return t.innerHTML = "<!--[if lte IE 9]><i></i><![endif]-->", 1 === t.getElementsByTagName("i").length
            }()
        },
        device: function() {
            var n = window.navigator.userAgent,
                e = n.match(/(Android);?[\s\/]+([\d.]+)?/),
                o = n.match(/(iPad).*OS\s([\d_]+)/),
                r = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                s = !o && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            return {
                ios: o || s || r,
                android: e
            }
        }(),
        support: {
            touch: window.Modernizr && !0 === Modernizr.touch || function() {
                return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
            }(),
            transforms3d: window.Modernizr && !0 === Modernizr.csstransforms3d || function() {
                var t = document.createElement("div").style;
                return "webkitPerspective" in t || "MozPerspective" in t || "OPerspective" in t || "MsPerspective" in t || "perspective" in t
            }(),
            flexbox: function() {
                for (var i = document.createElement("div").style, e = ["alignItems", "webkitAlignItems", "webkitBoxAlign", "msFlexAlign", "mozBoxAlign", "webkitFlexDirection", "msFlexDirection", "mozBoxDirection", "mozBoxOrient", "webkitBoxDirection", "webkitBoxOrient"], a = 0; a < e.length; a++)
                    if (e[a] in i) return !0
            }(),
            observer: function() {
                return "MutationObserver" in window || "WebkitMutationObserver" in window
            }(),
            passiveListener: function() {
                var t = !1;
                try {
                    var e = Object.defineProperty({}, "passive", {
                        get: function() {
                            t = !0
                        }
                    });
                    window.addEventListener("testPassiveListener", null, e)
                } catch (t) {}
                return t
            }(),
            gestures: function() {
                return "ongesturestart" in window
            }()
        },
        plugins: {}
    };
    for (var e = function() {
            var d = function(i) {
                    var e = this,
                        a = 0;
                    for (a = 0; a < i.length; a++) e[a] = i[a];
                    return e.length = i.length, this
                },
                o = function(e, p) {
                    var c = [],
                        s = 0;
                    if (e && !p && e instanceof d) return e;
                    if (e)
                        if ("string" == typeof e) {
                            var i = e.trim(),
                                o, r;
                            if (0 <= i.indexOf("<") && 0 <= i.indexOf(">")) {
                                var n = "div";
                                for (0 === i.indexOf("<li") && (n = "ul"), 0 === i.indexOf("<tr") && (n = "tbody"), 0 !== i.indexOf("<td") && 0 !== i.indexOf("<th") || (n = "tr"), 0 === i.indexOf("<tbody") && (n = "table"), 0 === i.indexOf("<option") && (n = "select"), r = document.createElement(n), r.innerHTML = e, s = 0; s < r.childNodes.length; s++) c.push(r.childNodes[s])
                            } else
                                for (o = p || "#" !== e[0] || e.match(/[ .<>:~]/) ? (p || document).querySelectorAll(e) : [document.getElementById(e.split("#")[1])], s = 0; s < o.length; s++) o[s] && c.push(o[s])
                        } else if (e.nodeType || e === window || e === document) c.push(e);
                    else if (0 < e.length && e[0].nodeType)
                        for (s = 0; s < e.length; s++) c.push(e[s]);
                    return new d(c)
                };
            return d.prototype = {
                addClass: function(i) {
                    if (void 0 === i) return this;
                    for (var e = i.split(" "), a = 0; a < e.length; a++)
                        for (var t = 0; t < this.length; t++) this[t].classList.add(e[a]);
                    return this
                },
                removeClass: function(i) {
                    for (var e = i.split(" "), a = 0; a < e.length; a++)
                        for (var t = 0; t < this.length; t++) this[t].classList.remove(e[a]);
                    return this
                },
                hasClass: function(t) {
                    return !!this[0] && this[0].classList.contains(t)
                },
                toggleClass: function(i) {
                    for (var e = i.split(" "), a = 0; a < e.length; a++)
                        for (var t = 0; t < this.length; t++) this[t].classList.toggle(e[a]);
                    return this
                },
                attr: function(i, n) {
                    if (1 === arguments.length && "string" == typeof i) return this[0] ? this[0].getAttribute(i) : void 0;
                    for (var a = 0; a < this.length; a++)
                        if (2 === arguments.length) this[a].setAttribute(i, n);
                        else
                            for (var t in i) this[a][t] = i[t], this[a].setAttribute(t, i[t]);
                    return this
                },
                removeAttr: function(t) {
                    for (var e = 0; e < this.length; e++) this[e].removeAttribute(t);
                    return this
                },
                data: function(n, e) {
                    if (void 0 !== e) {
                        for (var a = 0, t; a < this.length; a++) t = this[a], t.dom7ElementDataStorage || (t.dom7ElementDataStorage = {}), t.dom7ElementDataStorage[n] = e;
                        return this
                    }
                    if (this[0]) {
                        var s = this[0].getAttribute("data-" + n);
                        return s ? s : this[0].dom7ElementDataStorage && (n in this[0].dom7ElementDataStorage) ? this[0].dom7ElementDataStorage[n] : void 0
                    }
                },
                transform: function(i) {
                    for (var e = 0, a; e < this.length; e++) a = this[e].style, a.webkitTransform = a.MsTransform = a.msTransform = a.MozTransform = a.OTransform = a.transform = i;
                    return this
                },
                transition: function(i) {
                    "string" != typeof i && (i += "ms");
                    for (var n = 0, a; n < this.length; n++) a = this[n].style, a.webkitTransitionDuration = a.MsTransitionDuration = a.msTransitionDuration = a.MozTransitionDuration = a.OTransitionDuration = a.transitionDuration = i;
                    return this
                },
                on: function(a, d, p, e) {
                    function i(t) {
                        var e = t.target;
                        if (o(e).is(d)) p.call(e, t);
                        else
                            for (var a = o(e).parents(), i = 0; i < a.length; i++) o(a[i]).is(d) && p.call(a[i], t)
                    }
                    var c = a.split(" "),
                        l, n;
                    for (l = 0; l < this.length; l++)
                        if ("function" == typeof d || !1 === d)
                            for ("function" == typeof d && (p = arguments[1], e = arguments[2] || !1), n = 0; n < c.length; n++) this[l].addEventListener(c[n], p, e);
                        else
                            for (n = 0; n < c.length; n++) this[l].dom7LiveListeners || (this[l].dom7LiveListeners = []), this[l].dom7LiveListeners.push({
                                listener: p,
                                liveListener: i
                            }), this[l].addEventListener(c[n], i, e);
                    return this
                },
                off: function(l, e, d, t) {
                    for (var s = l.split(" "), i = 0; i < s.length; i++)
                        for (var r = 0; r < this.length; r++)
                            if ("function" == typeof e || !1 === e) "function" == typeof e && (d = arguments[1], t = arguments[2] || !1), this[r].removeEventListener(s[i], d, t);
                            else if (this[r].dom7LiveListeners)
                        for (var n = 0; n < this[r].dom7LiveListeners.length; n++) this[r].dom7LiveListeners[n].listener === d && this[r].removeEventListener(s[i], this[r].dom7LiveListeners[n].liveListener, t);
                    return this
                },
                once: function(o, e, l, t) {
                    function s(a) {
                        l(a), i.off(o, e, s, t)
                    }
                    var i = this;
                    "function" == typeof e && (e = !1, l = arguments[1], t = arguments[2]), i.on(o, e, s, t)
                },
                trigger: function(i, e) {
                    for (var n = 0; n < this.length; n++) {
                        var t;
                        try {
                            t = new window.CustomEvent(i, {
                                detail: e,
                                bubbles: !0,
                                cancelable: !0
                            })
                        } catch (a) {
                            t = document.createEvent("Event"), t.initEvent(i, !0, !0), t.detail = e
                        }
                        this[n].dispatchEvent(t)
                    }
                    return this
                },
                transitionEnd: function(n) {
                    function e(t) {
                        if (t.target === this)
                            for (n.call(this, t), i = 0; i < a.length; i++) s.off(a[i], e)
                    }
                    var a = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                        s = this,
                        i;
                    if (n)
                        for (i = 0; i < a.length; i++) s.on(a[i], e);
                    return this
                },
                width: function() {
                    return this[0] === window ? window.innerWidth : 0 < this.length ? parseFloat(this.css("width")) : null
                },
                outerWidth: function(t) {
                    return 0 < this.length ? t ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
                },
                height: function() {
                    return this[0] === window ? window.innerHeight : 0 < this.length ? parseFloat(this.css("height")) : null
                },
                outerHeight: function(t) {
                    return 0 < this.length ? t ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null
                },
                offset: function() {
                    if (0 < this.length) {
                        var o = this[0],
                            e = o.getBoundingClientRect(),
                            a = document.body,
                            t = o.clientTop || a.clientTop || 0,
                            s = o.clientLeft || a.clientLeft || 0,
                            i = window.pageYOffset || o.scrollTop,
                            r = window.pageXOffset || o.scrollLeft;
                        return {
                            top: e.top + i - t,
                            left: e.left + r - s
                        }
                    }
                    return null
                },
                css: function(i, n) {
                    var a;
                    if (1 === arguments.length) {
                        if ("string" != typeof i) {
                            for (a = 0; a < this.length; a++)
                                for (var t in i) this[a].style[t] = i[t];
                            return this
                        }
                        if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(i)
                    }
                    if (2 === arguments.length && "string" == typeof i) {
                        for (a = 0; a < this.length; a++) this[a].style[i] = n;
                        return this
                    }
                    return this
                },
                each: function(t) {
                    for (var e = 0; e < this.length; e++) t.call(this[e], e, this[e]);
                    return this
                },
                html: function(t) {
                    if (void 0 === t) return this[0] ? this[0].innerHTML : void 0;
                    for (var e = 0; e < this.length; e++) this[e].innerHTML = t;
                    return this
                },
                text: function(t) {
                    if (void 0 === t) return this[0] ? this[0].textContent.trim() : null;
                    for (var e = 0; e < this.length; e++) this[e].textContent = t;
                    return this
                },
                is: function(e) {
                    if (!this[0]) return !1;
                    var a, n;
                    if ("string" == typeof e) {
                        var i = this[0];
                        if (i === document) return e === document;
                        if (i === window) return e === window;
                        if (i.matches) return i.matches(e);
                        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
                        if (i.mozMatchesSelector) return i.mozMatchesSelector(e);
                        if (i.msMatchesSelector) return i.msMatchesSelector(e);
                        for (a = o(e), n = 0; n < a.length; n++)
                            if (a[n] === this[0]) return !0;
                        return !1
                    }
                    if (e === document) return this[0] === document;
                    if (e === window) return this[0] === window;
                    if (e.nodeType || e instanceof d) {
                        for (a = e.nodeType ? [e] : e, n = 0; n < a.length; n++)
                            if (a[n] === this[0]) return !0;
                        return !1
                    }
                    return !1
                },
                index: function() {
                    if (this[0]) {
                        for (var t = this[0], e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && e++;
                        return e
                    }
                },
                eq: function(e) {
                    if (void 0 === e) return this;
                    var a = this.length,
                        i;
                    return e > a - 1 ? new d([]) : 0 > e ? (i = a + e, new d(0 > i ? [] : [this[i]])) : new d([this[e]])
                },
                append: function(e) {
                    var n, t;
                    for (n = 0; n < this.length; n++)
                        if ("string" == typeof e) {
                            var s = document.createElement("div");
                            for (s.innerHTML = e; s.firstChild;) this[n].appendChild(s.firstChild)
                        } else if (e instanceof d)
                        for (t = 0; t < e.length; t++) this[n].appendChild(e[t]);
                    else this[n].appendChild(e);
                    return this
                },
                prepend: function(e) {
                    var n, t;
                    for (n = 0; n < this.length; n++)
                        if ("string" == typeof e) {
                            var s = document.createElement("div");
                            for (s.innerHTML = e, t = s.childNodes.length - 1; 0 <= t; t--) this[n].insertBefore(s.childNodes[t], this[n].childNodes[0])
                        } else if (e instanceof d)
                        for (t = 0; t < e.length; t++) this[n].insertBefore(e[t], this[n].childNodes[0]);
                    else this[n].insertBefore(e, this[n].childNodes[0]);
                    return this
                },
                insertBefore: function(a) {
                    for (var e = o(a), t = 0; t < this.length; t++)
                        if (1 === e.length) e[0].parentNode.insertBefore(this[t], e[0]);
                        else if (1 < e.length)
                        for (var n = 0; n < e.length; n++) e[n].parentNode.insertBefore(this[t].cloneNode(!0), e[n])
                },
                insertAfter: function(a) {
                    for (var e = o(a), t = 0; t < this.length; t++)
                        if (1 === e.length) e[0].parentNode.insertBefore(this[t], e[0].nextSibling);
                        else if (1 < e.length)
                        for (var n = 0; n < e.length; n++) e[n].parentNode.insertBefore(this[t].cloneNode(!0), e[n].nextSibling)
                },
                next: function(e) {
                    return new d(0 < this.length ? e ? this[0].nextElementSibling && o(this[0].nextElementSibling).is(e) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
                },
                nextAll: function(e) {
                    var t = [],
                        a = this[0];
                    if (!a) return new d([]);
                    for (; a.nextElementSibling;) {
                        var n = a.nextElementSibling;
                        e ? o(n).is(e) && t.push(n) : t.push(n), a = n
                    }
                    return new d(t)
                },
                prev: function(e) {
                    return new d(0 < this.length ? e ? this[0].previousElementSibling && o(this[0].previousElementSibling).is(e) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : [])
                },
                prevAll: function(e) {
                    var t = [],
                        a = this[0];
                    if (!a) return new d([]);
                    for (; a.previousElementSibling;) {
                        var n = a.previousElementSibling;
                        e ? o(n).is(e) && t.push(n) : t.push(n), a = n
                    }
                    return new d(t)
                },
                parent: function(a) {
                    for (var e = [], t = 0; t < this.length; t++) a ? o(this[t].parentNode).is(a) && e.push(this[t].parentNode) : e.push(this[t].parentNode);
                    return o(o.unique(e))
                },
                parents: function(a) {
                    for (var e = [], t = 0; t < this.length; t++)
                        for (var n = this[t].parentNode; n;) a ? o(n).is(a) && e.push(n) : e.push(n), n = n.parentNode;
                    return o(o.unique(e))
                },
                find: function(e) {
                    for (var a = [], t = 0; t < this.length; t++)
                        for (var n = this[t].querySelectorAll(e), i = 0; i < n.length; i++) a.push(n[i]);
                    return new d(a)
                },
                children: function(e) {
                    for (var t = [], a = 0; a < this.length; a++)
                        for (var i = this[a].childNodes, s = 0; s < i.length; s++) e ? 1 === i[s].nodeType && o(i[s]).is(e) && t.push(i[s]) : 1 === i[s].nodeType && t.push(i[s]);
                    return new d(o.unique(t))
                },
                remove: function() {
                    for (var t = 0; t < this.length; t++) this[t].parentNode && this[t].parentNode.removeChild(this[t]);
                    return this
                },
                add: function() {
                    var a = this,
                        n, e;
                    for (n = 0; n < arguments.length; n++) {
                        var t = o(arguments[n]);
                        for (e = 0; e < t.length; e++) a[a.length] = t[e], a.length++
                    }
                    return a
                }
            }, o.fn = d.prototype, o.unique = function(i) {
                for (var e = [], a = 0; a < i.length; a++) - 1 === e.indexOf(i[a]) && e.push(i[a]);
                return e
            }, o
        }(), t = ["jQuery", "Zepto", "Dom7"], a = 0; a < t.length; a++) window[t[a]] && function(a) {
        a.fn.swiper = function(i) {
            var t;
            return a(this).each(function() {
                var a = new $(this, i);
                t || (t = a)
            }), t
        }
    }(window[t[a]]);
    var i;
    i = void 0 === e ? window.Dom7 || window.Zepto || window.jQuery : e, i && ("transitionEnd" in i.fn || (i.fn.transitionEnd = function(n) {
        function e(t) {
            if (t.target === this)
                for (n.call(this, t), i = 0; i < a.length; i++) s.off(a[i], e)
        }
        var a = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
            s = this,
            i;
        if (n)
            for (i = 0; i < a.length; i++) s.on(a[i], e);
        return this
    }), "transform" in i.fn || (i.fn.transform = function(i) {
        for (var e = 0, a; e < this.length; e++) a = this[e].style, a.webkitTransform = a.MsTransform = a.msTransform = a.MozTransform = a.OTransform = a.transform = i;
        return this
    }), "transition" in i.fn || (i.fn.transition = function(i) {
        "string" != typeof i && (i += "ms");
        for (var n = 0, a; n < this.length; n++) a = this[n].style, a.webkitTransitionDuration = a.MsTransitionDuration = a.msTransitionDuration = a.MozTransitionDuration = a.OTransitionDuration = a.transitionDuration = i;
        return this
    }), "outerWidth" in i.fn || (i.fn.outerWidth = function(t) {
        return 0 < this.length ? t ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
    })), window.Swiper = $
}(), "undefined" == typeof module ? "function" == typeof define && define.amd && define([], function() {
    "use strict";
    return window.Swiper
}) : module.exports = window.Swiper;
var libLoaded = !0,
    URLSearchParams = URLSearchParams || function() {
        "use strict";

        function e(e) {
            var n = Object.create(null),
                o, r, l, d, c, i;
            if (this[p] = n, !!e)
                if ("string" == typeof e)
                    for ("?" === e.charAt(0) && (e = e.slice(1)), d = e.split("&"), c = 0, i = d.length; c < i; c++) l = d[c], o = l.indexOf("="), -1 < o ? t(n, a(l.slice(0, o)), a(l.slice(o + 1))) : l.length && t(n, a(l), "");
                else if (s(e))
                for (c = 0, i = e.length; c < i; c++) l = e[c], t(n, l[0], l[1]);
            else
                for (r in e) t(n, r, e[r])
        }

        function t(e, t, a) {
            t in e ? e[t].push("" + a) : e[t] = s(a) ? a : ["" + a]
        }

        function a(e) {
            return decodeURIComponent(e.replace(r, " "))
        }

        function n(e) {
            return encodeURIComponent(e).replace(o, d)
        }
        var s = Array.isArray,
            i = e.prototype,
            o = /[!'\(\)~]|%20|%00/g,
            r = /\+/g,
            l = {
                "!": "%21",
                "'": "%27",
                "(": "%28",
                ")": "%29",
                "~": "%7E",
                "%20": "+",
                "%00": "\0"
            },
            d = function(e) {
                return l[e]
            },
            p = "__URLSearchParams__:" + Math.random();
        i.append = function(e, a) {
            t(this[p], e, a)
        }, i["delete"] = function(e) {
            delete this[p][e]
        }, i.get = function(e) {
            var t = this[p];
            return e in t ? t[e][0] : null
        }, i.getAll = function(e) {
            var t = this[p];
            return e in t ? t[e].slice(0) : []
        }, i.has = function(e) {
            return e in this[p]
        }, i.set = function(e, t) {
            this[p][e] = ["" + t]
        }, i.forEach = function(e, t) {
            var a = this[p];
            Object.getOwnPropertyNames(a).forEach(function(i) {
                a[i].forEach(function(a) {
                    e.call(t, a, i, this)
                }, this)
            }, this)
        }, i.toJSON = function() {
            return {}
        }, i.toString = function() {
            var e = this[p],
                t = [],
                a, i, s, o;
            for (i in e)
                for (s = n(i), a = 0, o = e[i]; a < o.length; a++) t.push(s + "=" + n(o[a]));
            return t.join("&")
        };
        var c = Object.defineProperty,
            u = Object.getOwnPropertyDescriptor,
            m = function(e) {
                function t(t, a) {
                    i.append.call(this, t, a), t = this.toString(), e.set.call(this._usp, t ? "?" + t : "")
                }

                function a(t) {
                    i["delete"].call(this, t), t = this.toString(), e.set.call(this._usp, t ? "?" + t : "")
                }

                function n(t, a) {
                    i.set.call(this, t, a), t = this.toString(), e.set.call(this._usp, t ? "?" + t : "")
                }
                return function(e, i) {
                    return e.append = t, e["delete"] = a, e.set = n, c(e, "_usp", {
                        configurable: !0,
                        writable: !0,
                        value: i
                    })
                }
            },
            h = function(e) {
                return function(t, a) {
                    return c(t, "_searchParams", {
                        configurable: !0,
                        writable: !0,
                        value: e(a, t)
                    }), a
                }
            },
            g = function(t) {
                var a = t.append;
                t.append = i.append, e.call(t, t._usp.search.slice(1)), t.append = a
            },
            f = function(e, t) {
                if (!(e instanceof t)) throw new TypeError("'searchParams' accessed on an object that does not implement interface " + t.name)
            },
            y = function(t) {
                var a = t.prototype,
                    i = u(a, "searchParams"),
                    n = u(a, "href"),
                    s = u(a, "search"),
                    o;
                !i && s && s.set && (o = h(m(s)), Object.defineProperties(a, {
                    href: {
                        get: function() {
                            return n.get.call(this)
                        },
                        set: function(e) {
                            var t = this._searchParams;
                            n.set.call(this, e), t && g(t)
                        }
                    },
                    search: {
                        get: function() {
                            return s.get.call(this)
                        },
                        set: function(e) {
                            var t = this._searchParams;
                            s.set.call(this, e), t && g(t)
                        }
                    },
                    searchParams: {
                        get: function() {
                            return f(this, t), this._searchParams || o(this, new e(this.search.slice(1)))
                        },
                        set: function(e) {
                            f(this, t), o(this, e)
                        }
                    }
                }))
            };
        return y(HTMLAnchorElement), /^function|object$/.test(typeof URL) && URL.prototype && y(URL), e
    }();
(function(e) {
    var t = function() {
        try {
            return !!Symbol.iterator
        } catch (e) {
            return !1
        }
    }();
    "forEach" in e || (e.forEach = function(e, t) {
        var a = Object.create(null);
        this.toString().replace(/=[\s\S]*?(?:&|$)/g, "=").split("=").forEach(function(i) {
            !i.length || i in a || (a[i] = this.getAll(i)).forEach(function(a) {
                e.call(t, a, i, this)
            }, this)
        }, this)
    }), "keys" in e || (e.keys = function() {
        var e = [];
        this.forEach(function(t, a) {
            e.push(a)
        });
        var a = {
            next: function() {
                var t = e.shift();
                return {
                    done: void 0 === t,
                    value: t
                }
            }
        };
        return t && (a[Symbol.iterator] = function() {
            return a
        }), a
    }), "values" in e || (e.values = function() {
        var e = [];
        this.forEach(function(t) {
            e.push(t)
        });
        var a = {
            next: function() {
                var t = e.shift();
                return {
                    done: void 0 === t,
                    value: t
                }
            }
        };
        return t && (a[Symbol.iterator] = function() {
            return a
        }), a
    }), "entries" in e || (e.entries = function() {
        var e = [];
        this.forEach(function(t, a) {
            e.push([a, t])
        });
        var a = {
            next: function() {
                var t = e.shift();
                return {
                    done: void 0 === t,
                    value: t
                }
            }
        };
        return t && (a[Symbol.iterator] = function() {
            return a
        }), a
    }), t && !(Symbol.iterator in e) && (e[Symbol.iterator] = e.entries), "sort" in e || (e.sort = function() {
        for (var e = this.entries(), t = e.next(), a = t.done, n = [], s = Object.create(null), o, i, r; !a;) r = t.value, i = r[0], n.push(i), i in s || (s[i] = []), s[i].push(r[1]), t = e.next(), a = t.done;
        for (n.sort(), o = 0; o < n.length; o++) this["delete"](n[o]);
        for (o = 0; o < n.length; o++) i = n[o], this.append(i, s[i].shift())
    })
})(URLSearchParams.prototype);
