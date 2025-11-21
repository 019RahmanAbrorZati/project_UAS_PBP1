/* Nike -- marketing-automation.optimization-client -- 2.4.1 */
( () => {
    var e = {
        35: (e, t) => {
            function n(e, r, o, i, s, a) {
                var c = Math.floor((r - e) / 2) + e
                  , u = s(o, i[c], !0);
                return 0 === u ? c : u > 0 ? r - c > 1 ? n(c, r, o, i, s, a) : a == t.LEAST_UPPER_BOUND ? r < i.length ? r : -1 : c : c - e > 1 ? n(e, c, o, i, s, a) : a == t.LEAST_UPPER_BOUND ? c : e < 0 ? -1 : e
            }
            t.GREATEST_LOWER_BOUND = 1,
            t.LEAST_UPPER_BOUND = 2,
            t.search = function(e, r, o, i) {
                if (0 === r.length)
                    return -1;
                var s = n(-1, r.length, e, r, o, i || t.GREATEST_LOWER_BOUND);
                if (s < 0)
                    return -1;
                for (; s - 1 >= 0 && 0 === o(r[s], r[s - 1], !0); )
                    --s;
                return s
            }
        }
        ,
        65: (e, t, n) => {
            t.SourceMapGenerator = n(945).SourceMapGenerator,
            t.SourceMapConsumer = n(606).SourceMapConsumer,
            t.SourceNode = n(171).SourceNode
        }
        ,
        139: function(e, t, n) {
            var r, o, i;
            !function() {
                "use strict";
                o = [n(263), n(887), n(885)],
                r = function(e, t, n) {
                    var r = {
                        filter: function(e) {
                            return -1 === (e.functionName || "").indexOf("StackTrace$$") && -1 === (e.functionName || "").indexOf("ErrorStackParser$$") && -1 === (e.functionName || "").indexOf("StackTraceGPS$$") && -1 === (e.functionName || "").indexOf("StackGenerator$$")
                        },
                        sourceCache: {}
                    }
                      , o = function() {
                        try {
                            throw new Error
                        } catch (e) {
                            return e
                        }
                    };
                    function i(e, t) {
                        var n = {};
                        return [e, t].forEach(function(e) {
                            for (var t in e)
                                Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t]);
                            return n
                        }),
                        n
                    }
                    function s(e) {
                        return e.stack || e["opera#sourceloc"]
                    }
                    function a(e, t) {
                        return "function" == typeof t ? e.filter(t) : e
                    }
                    return {
                        get: function(e) {
                            var t = o();
                            return s(t) ? this.fromError(t, e) : this.generateArtificially(e)
                        },
                        getSync: function(n) {
                            n = i(r, n);
                            var c = o();
                            return a(s(c) ? e.parse(c) : t.backtrace(n), n.filter)
                        },
                        fromError: function(t, o) {
                            o = i(r, o);
                            var s = new n(o);
                            return new Promise(function(n) {
                                var r = a(e.parse(t), o.filter);
                                n(Promise.all(r.map(function(e) {
                                    return new Promise(function(t) {
                                        function n() {
                                            t(e)
                                        }
                                        s.pinpoint(e).then(t, n).catch(n)
                                    }
                                    )
                                })))
                            }
                            .bind(this))
                        },
                        generateArtificially: function(e) {
                            e = i(r, e);
                            var n = t.backtrace(e);
                            return "function" == typeof e.filter && (n = n.filter(e.filter)),
                            Promise.resolve(n)
                        },
                        instrument: function(e, t, n, r) {
                            if ("function" != typeof e)
                                throw new Error("Cannot instrument non-function object");
                            if ("function" == typeof e.__stacktraceOriginalFn)
                                return e;
                            var o = function() {
                                try {
                                    return this.get().then(t, n).catch(n),
                                    e.apply(r || this, arguments)
                                } catch (e) {
                                    throw s(e) && this.fromError(e).then(t, n).catch(n),
                                    e
                                }
                            }
                            .bind(this);
                            return o.__stacktraceOriginalFn = e,
                            o
                        },
                        deinstrument: function(e) {
                            if ("function" != typeof e)
                                throw new Error("Cannot de-instrument non-function object");
                            return "function" == typeof e.__stacktraceOriginalFn ? e.__stacktraceOriginalFn : e
                        },
                        report: function(e, t, n, r) {
                            return new Promise(function(o, i) {
                                var s = new XMLHttpRequest;
                                if (s.onerror = i,
                                s.onreadystatechange = function() {
                                    4 === s.readyState && (s.status >= 200 && s.status < 400 ? o(s.responseText) : i(new Error("POST to " + t + " failed with status: " + s.status)))
                                }
                                ,
                                s.open("post", t),
                                s.setRequestHeader("Content-Type", "application/json"),
                                r && "object" == typeof r.headers) {
                                    var a = r.headers;
                                    for (var c in a)
                                        Object.prototype.hasOwnProperty.call(a, c) && s.setRequestHeader(c, a[c])
                                }
                                var u = {
                                    stack: e
                                };
                                null != n && (u.message = n),
                                s.send(JSON.stringify(u))
                            }
                            )
                        }
                    }
                }
                ,
                void 0 === (i = "function" == typeof r ? r.apply(t, o) : r) || (e.exports = i)
            }()
        },
        171: (e, t, n) => {
            var r = n(945).SourceMapGenerator
              , o = n(835)
              , i = /(\r?\n)/
              , s = "$$$isSourceNode$$$";
            function a(e, t, n, r, o) {
                this.children = [],
                this.sourceContents = {},
                this.line = null == e ? null : e,
                this.column = null == t ? null : t,
                this.source = null == n ? null : n,
                this.name = null == o ? null : o,
                this[s] = !0,
                null != r && this.add(r)
            }
            a.fromStringWithSourceMap = function(e, t, n) {
                var r = new a
                  , s = e.split(i)
                  , c = function() {
                    return s.shift() + (s.shift() || "")
                }
                  , u = 1
                  , l = 0
                  , d = null;
                return t.eachMapping(function(e) {
                    if (null !== d) {
                        if (!(u < e.generatedLine)) {
                            var t = (n = s[0]).substr(0, e.generatedColumn - l);
                            return s[0] = n.substr(e.generatedColumn - l),
                            l = e.generatedColumn,
                            f(d, t),
                            void (d = e)
                        }
                        f(d, c()),
                        u++,
                        l = 0
                    }
                    for (; u < e.generatedLine; )
                        r.add(c()),
                        u++;
                    if (l < e.generatedColumn) {
                        var n = s[0];
                        r.add(n.substr(0, e.generatedColumn)),
                        s[0] = n.substr(e.generatedColumn),
                        l = e.generatedColumn
                    }
                    d = e
                }, this),
                s.length > 0 && (d && f(d, c()),
                r.add(s.join(""))),
                t.sources.forEach(function(e) {
                    var i = t.sourceContentFor(e);
                    null != i && (null != n && (e = o.join(n, e)),
                    r.setSourceContent(e, i))
                }),
                r;
                function f(e, t) {
                    if (null === e || void 0 === e.source)
                        r.add(t);
                    else {
                        var i = n ? o.join(n, e.source) : e.source;
                        r.add(new a(e.originalLine,e.originalColumn,i,t,e.name))
                    }
                }
            }
            ,
            a.prototype.add = function(e) {
                if (Array.isArray(e))
                    e.forEach(function(e) {
                        this.add(e)
                    }, this);
                else {
                    if (!e[s] && "string" != typeof e)
                        throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
                    e && this.children.push(e)
                }
                return this
            }
            ,
            a.prototype.prepend = function(e) {
                if (Array.isArray(e))
                    for (var t = e.length - 1; t >= 0; t--)
                        this.prepend(e[t]);
                else {
                    if (!e[s] && "string" != typeof e)
                        throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
                    this.children.unshift(e)
                }
                return this
            }
            ,
            a.prototype.walk = function(e) {
                for (var t, n = 0, r = this.children.length; n < r; n++)
                    (t = this.children[n])[s] ? t.walk(e) : "" !== t && e(t, {
                        source: this.source,
                        line: this.line,
                        column: this.column,
                        name: this.name
                    })
            }
            ,
            a.prototype.join = function(e) {
                var t, n, r = this.children.length;
                if (r > 0) {
                    for (t = [],
                    n = 0; n < r - 1; n++)
                        t.push(this.children[n]),
                        t.push(e);
                    t.push(this.children[n]),
                    this.children = t
                }
                return this
            }
            ,
            a.prototype.replaceRight = function(e, t) {
                var n = this.children[this.children.length - 1];
                return n[s] ? n.replaceRight(e, t) : "string" == typeof n ? this.children[this.children.length - 1] = n.replace(e, t) : this.children.push("".replace(e, t)),
                this
            }
            ,
            a.prototype.setSourceContent = function(e, t) {
                this.sourceContents[o.toSetString(e)] = t
            }
            ,
            a.prototype.walkSourceContents = function(e) {
                for (var t = 0, n = this.children.length; t < n; t++)
                    this.children[t][s] && this.children[t].walkSourceContents(e);
                var r = Object.keys(this.sourceContents);
                for (t = 0,
                n = r.length; t < n; t++)
                    e(o.fromSetString(r[t]), this.sourceContents[r[t]])
            }
            ,
            a.prototype.toString = function() {
                var e = "";
                return this.walk(function(t) {
                    e += t
                }),
                e
            }
            ,
            a.prototype.toStringWithSourceMap = function(e) {
                var t = {
                    code: "",
                    line: 1,
                    column: 0
                }
                  , n = new r(e)
                  , o = !1
                  , i = null
                  , s = null
                  , a = null
                  , c = null;
                return this.walk(function(e, r) {
                    t.code += e,
                    null !== r.source && null !== r.line && null !== r.column ? (i === r.source && s === r.line && a === r.column && c === r.name || n.addMapping({
                        source: r.source,
                        original: {
                            line: r.line,
                            column: r.column
                        },
                        generated: {
                            line: t.line,
                            column: t.column
                        },
                        name: r.name
                    }),
                    i = r.source,
                    s = r.line,
                    a = r.column,
                    c = r.name,
                    o = !0) : o && (n.addMapping({
                        generated: {
                            line: t.line,
                            column: t.column
                        }
                    }),
                    i = null,
                    o = !1);
                    for (var u = 0, l = e.length; u < l; u++)
                        10 === e.charCodeAt(u) ? (t.line++,
                        t.column = 0,
                        u + 1 === l ? (i = null,
                        o = !1) : o && n.addMapping({
                            source: r.source,
                            original: {
                                line: r.line,
                                column: r.column
                            },
                            generated: {
                                line: t.line,
                                column: t.column
                            },
                            name: r.name
                        })) : t.column++
                }),
                this.walkSourceContents(function(e, t) {
                    n.setSourceContent(e, t)
                }),
                {
                    code: t.code,
                    map: n
                }
            }
            ,
            t.SourceNode = a
        }
        ,
        187: function(e, t) {
            !function() {
                "use strict";
                var n = {
                    version: "3.0.1",
                    x86: {},
                    x64: {}
                };
                function r(e, t) {
                    return (65535 & e) * t + (((e >>> 16) * t & 65535) << 16)
                }
                function o(e, t) {
                    return e << t | e >>> 32 - t
                }
                function i(e) {
                    return e = r(e ^= e >>> 16, 2246822507),
                    e = r(e ^= e >>> 13, 3266489909),
                    e ^= e >>> 16
                }
                function s(e, t) {
                    e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]],
                    t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                    var n = [0, 0, 0, 0];
                    return n[3] += e[3] + t[3],
                    n[2] += n[3] >>> 16,
                    n[3] &= 65535,
                    n[2] += e[2] + t[2],
                    n[1] += n[2] >>> 16,
                    n[2] &= 65535,
                    n[1] += e[1] + t[1],
                    n[0] += n[1] >>> 16,
                    n[1] &= 65535,
                    n[0] += e[0] + t[0],
                    n[0] &= 65535,
                    [n[0] << 16 | n[1], n[2] << 16 | n[3]]
                }
                function a(e, t) {
                    e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]],
                    t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                    var n = [0, 0, 0, 0];
                    return n[3] += e[3] * t[3],
                    n[2] += n[3] >>> 16,
                    n[3] &= 65535,
                    n[2] += e[2] * t[3],
                    n[1] += n[2] >>> 16,
                    n[2] &= 65535,
                    n[2] += e[3] * t[2],
                    n[1] += n[2] >>> 16,
                    n[2] &= 65535,
                    n[1] += e[1] * t[3],
                    n[0] += n[1] >>> 16,
                    n[1] &= 65535,
                    n[1] += e[2] * t[2],
                    n[0] += n[1] >>> 16,
                    n[1] &= 65535,
                    n[1] += e[3] * t[1],
                    n[0] += n[1] >>> 16,
                    n[1] &= 65535,
                    n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0],
                    n[0] &= 65535,
                    [n[0] << 16 | n[1], n[2] << 16 | n[3]]
                }
                function c(e, t) {
                    return 32 === (t %= 64) ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32,
                    [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
                }
                function u(e, t) {
                    return 0 === (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
                }
                function l(e, t) {
                    return [e[0] ^ t[0], e[1] ^ t[1]]
                }
                function d(e) {
                    return e = l(e, [0, e[0] >>> 1]),
                    e = l(e = a(e, [4283543511, 3981806797]), [0, e[0] >>> 1]),
                    e = l(e = a(e, [3301882366, 444984403]), [0, e[0] >>> 1])
                }
                n.x86.hash32 = function(e, t) {
                    t = t || 0;
                    for (var n = (e = e || "").length % 4, s = e.length - n, a = t, c = 0, u = 3432918353, l = 461845907, d = 0; d < s; d += 4)
                        c = r(c = 255 & e.charCodeAt(d) | (255 & e.charCodeAt(d + 1)) << 8 | (255 & e.charCodeAt(d + 2)) << 16 | (255 & e.charCodeAt(d + 3)) << 24, u),
                        c = r(c = o(c, 15), l),
                        a = r(a = o(a ^= c, 13), 5) + 3864292196;
                    switch (c = 0,
                    n) {
                    case 3:
                        c ^= (255 & e.charCodeAt(d + 2)) << 16;
                    case 2:
                        c ^= (255 & e.charCodeAt(d + 1)) << 8;
                    case 1:
                        c = r(c ^= 255 & e.charCodeAt(d), u),
                        a ^= c = r(c = o(c, 15), l)
                    }
                    return (a = i(a ^= e.length)) >>> 0
                }
                ,
                n.x86.hash128 = function(e, t) {
                    t = t || 0;
                    for (var n = (e = e || "").length % 16, s = e.length - n, a = t, c = t, u = t, l = t, d = 0, f = 0, h = 0, p = 0, m = 597399067, g = 2869860233, y = 951274213, w = 2716044179, v = 0; v < s; v += 16)
                        d = 255 & e.charCodeAt(v) | (255 & e.charCodeAt(v + 1)) << 8 | (255 & e.charCodeAt(v + 2)) << 16 | (255 & e.charCodeAt(v + 3)) << 24,
                        f = 255 & e.charCodeAt(v + 4) | (255 & e.charCodeAt(v + 5)) << 8 | (255 & e.charCodeAt(v + 6)) << 16 | (255 & e.charCodeAt(v + 7)) << 24,
                        h = 255 & e.charCodeAt(v + 8) | (255 & e.charCodeAt(v + 9)) << 8 | (255 & e.charCodeAt(v + 10)) << 16 | (255 & e.charCodeAt(v + 11)) << 24,
                        p = 255 & e.charCodeAt(v + 12) | (255 & e.charCodeAt(v + 13)) << 8 | (255 & e.charCodeAt(v + 14)) << 16 | (255 & e.charCodeAt(v + 15)) << 24,
                        d = o(d = r(d, m), 15),
                        a = o(a ^= d = r(d, g), 19),
                        a = r(a += c, 5) + 1444728091,
                        f = o(f = r(f, g), 16),
                        c = o(c ^= f = r(f, y), 17),
                        c = r(c += u, 5) + 197830471,
                        h = o(h = r(h, y), 17),
                        u = o(u ^= h = r(h, w), 15),
                        u = r(u += l, 5) + 2530024501,
                        p = o(p = r(p, w), 18),
                        l = o(l ^= p = r(p, m), 13),
                        l = r(l += a, 5) + 850148119;
                    switch (d = 0,
                    f = 0,
                    h = 0,
                    p = 0,
                    n) {
                    case 15:
                        p ^= e.charCodeAt(v + 14) << 16;
                    case 14:
                        p ^= e.charCodeAt(v + 13) << 8;
                    case 13:
                        p = r(p ^= e.charCodeAt(v + 12), w),
                        l ^= p = r(p = o(p, 18), m);
                    case 12:
                        h ^= e.charCodeAt(v + 11) << 24;
                    case 11:
                        h ^= e.charCodeAt(v + 10) << 16;
                    case 10:
                        h ^= e.charCodeAt(v + 9) << 8;
                    case 9:
                        h = r(h ^= e.charCodeAt(v + 8), y),
                        u ^= h = r(h = o(h, 17), w);
                    case 8:
                        f ^= e.charCodeAt(v + 7) << 24;
                    case 7:
                        f ^= e.charCodeAt(v + 6) << 16;
                    case 6:
                        f ^= e.charCodeAt(v + 5) << 8;
                    case 5:
                        f = r(f ^= e.charCodeAt(v + 4), g),
                        c ^= f = r(f = o(f, 16), y);
                    case 4:
                        d ^= e.charCodeAt(v + 3) << 24;
                    case 3:
                        d ^= e.charCodeAt(v + 2) << 16;
                    case 2:
                        d ^= e.charCodeAt(v + 1) << 8;
                    case 1:
                        d = r(d ^= e.charCodeAt(v), m),
                        a ^= d = r(d = o(d, 15), g)
                    }
                    return a ^= e.length,
                    a += c ^= e.length,
                    a += u ^= e.length,
                    c += a += l ^= e.length,
                    u += a,
                    l += a,
                    a = i(a),
                    a += c = i(c),
                    a += u = i(u),
                    c += a += l = i(l),
                    u += a,
                    l += a,
                    ("00000000" + (a >>> 0).toString(16)).slice(-8) + ("00000000" + (c >>> 0).toString(16)).slice(-8) + ("00000000" + (u >>> 0).toString(16)).slice(-8) + ("00000000" + (l >>> 0).toString(16)).slice(-8)
                }
                ,
                n.x64.hash128 = function(e, t) {
                    t = t || 0;
                    for (var n = (e = e || "").length % 16, r = e.length - n, o = [0, t], i = [0, t], f = [0, 0], h = [0, 0], p = [2277735313, 289559509], m = [1291169091, 658871167], g = 0; g < r; g += 16)
                        f = [255 & e.charCodeAt(g + 4) | (255 & e.charCodeAt(g + 5)) << 8 | (255 & e.charCodeAt(g + 6)) << 16 | (255 & e.charCodeAt(g + 7)) << 24, 255 & e.charCodeAt(g) | (255 & e.charCodeAt(g + 1)) << 8 | (255 & e.charCodeAt(g + 2)) << 16 | (255 & e.charCodeAt(g + 3)) << 24],
                        h = [255 & e.charCodeAt(g + 12) | (255 & e.charCodeAt(g + 13)) << 8 | (255 & e.charCodeAt(g + 14)) << 16 | (255 & e.charCodeAt(g + 15)) << 24, 255 & e.charCodeAt(g + 8) | (255 & e.charCodeAt(g + 9)) << 8 | (255 & e.charCodeAt(g + 10)) << 16 | (255 & e.charCodeAt(g + 11)) << 24],
                        f = c(f = a(f, p), 31),
                        o = s(o = c(o = l(o, f = a(f, m)), 27), i),
                        o = s(a(o, [0, 5]), [0, 1390208809]),
                        h = c(h = a(h, m), 33),
                        i = s(i = c(i = l(i, h = a(h, p)), 31), o),
                        i = s(a(i, [0, 5]), [0, 944331445]);
                    switch (f = [0, 0],
                    h = [0, 0],
                    n) {
                    case 15:
                        h = l(h, u([0, e.charCodeAt(g + 14)], 48));
                    case 14:
                        h = l(h, u([0, e.charCodeAt(g + 13)], 40));
                    case 13:
                        h = l(h, u([0, e.charCodeAt(g + 12)], 32));
                    case 12:
                        h = l(h, u([0, e.charCodeAt(g + 11)], 24));
                    case 11:
                        h = l(h, u([0, e.charCodeAt(g + 10)], 16));
                    case 10:
                        h = l(h, u([0, e.charCodeAt(g + 9)], 8));
                    case 9:
                        h = a(h = l(h, [0, e.charCodeAt(g + 8)]), m),
                        i = l(i, h = a(h = c(h, 33), p));
                    case 8:
                        f = l(f, u([0, e.charCodeAt(g + 7)], 56));
                    case 7:
                        f = l(f, u([0, e.charCodeAt(g + 6)], 48));
                    case 6:
                        f = l(f, u([0, e.charCodeAt(g + 5)], 40));
                    case 5:
                        f = l(f, u([0, e.charCodeAt(g + 4)], 32));
                    case 4:
                        f = l(f, u([0, e.charCodeAt(g + 3)], 24));
                    case 3:
                        f = l(f, u([0, e.charCodeAt(g + 2)], 16));
                    case 2:
                        f = l(f, u([0, e.charCodeAt(g + 1)], 8));
                    case 1:
                        f = a(f = l(f, [0, e.charCodeAt(g)]), p),
                        o = l(o, f = a(f = c(f, 31), m))
                    }
                    return o = s(o = l(o, [0, e.length]), i = l(i, [0, e.length])),
                    i = s(i, o),
                    o = s(o = d(o), i = d(i)),
                    i = s(i, o),
                    ("00000000" + (o[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[1] >>> 0).toString(16)).slice(-8)
                }
                ,
                e.exports && (t = e.exports = n),
                t.murmurHash3 = n
            }()
        },
        238: (e, t, n) => {
            var r = n(835);
            function o() {
                this._array = [],
                this._sorted = !0,
                this._last = {
                    generatedLine: -1,
                    generatedColumn: 0
                }
            }
            o.prototype.unsortedForEach = function(e, t) {
                this._array.forEach(e, t)
            }
            ,
            o.prototype.add = function(e) {
                var t, n, o, i, s, a;
                t = this._last,
                n = e,
                o = t.generatedLine,
                i = n.generatedLine,
                s = t.generatedColumn,
                a = n.generatedColumn,
                i > o || i == o && a >= s || r.compareByGeneratedPositionsInflated(t, n) <= 0 ? (this._last = e,
                this._array.push(e)) : (this._sorted = !1,
                this._array.push(e))
            }
            ,
            o.prototype.toArray = function() {
                return this._sorted || (this._array.sort(r.compareByGeneratedPositionsInflated),
                this._sorted = !0),
                this._array
            }
            ,
            t.P = o
        }
        ,
        263: function(e, t, n) {
            var r, o, i;
            !function() {
                "use strict";
                o = [n(343)],
                void 0 === (i = "function" == typeof (r = function(e) {
                    var t = /(^|@)\S+:\d+/
                      , n = /^\s*at .*(\S+:\d+|\(native\))/m
                      , r = /^(eval@)?(\[native code])?$/;
                    return {
                        parse: function(e) {
                            if (void 0 !== e.stacktrace || void 0 !== e["opera#sourceloc"])
                                return this.parseOpera(e);
                            if (e.stack && e.stack.match(n))
                                return this.parseV8OrIE(e);
                            if (e.stack)
                                return this.parseFFOrSafari(e);
                            throw new Error("Cannot parse given Error object")
                        },
                        extractLocation: function(e) {
                            if (-1 === e.indexOf(":"))
                                return [e];
                            var t = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/[()]/g, ""));
                            return [t[1], t[2] || void 0, t[3] || void 0]
                        },
                        parseV8OrIE: function(t) {
                            return t.stack.split("\n").filter(function(e) {
                                return !!e.match(n)
                            }, this).map(function(t) {
                                t.indexOf("(eval ") > -1 && (t = t.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
                                var n = t.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, "")
                                  , r = n.match(/ (\(.+\)$)/);
                                n = r ? n.replace(r[0], "") : n;
                                var o = this.extractLocation(r ? r[1] : n)
                                  , i = r && n || void 0
                                  , s = ["eval", "<anonymous>"].indexOf(o[0]) > -1 ? void 0 : o[0];
                                return new e({
                                    functionName: i,
                                    fileName: s,
                                    lineNumber: o[1],
                                    columnNumber: o[2],
                                    source: t
                                })
                            }, this)
                        },
                        parseFFOrSafari: function(t) {
                            return t.stack.split("\n").filter(function(e) {
                                return !e.match(r)
                            }, this).map(function(t) {
                                if (t.indexOf(" > eval") > -1 && (t = t.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")),
                                -1 === t.indexOf("@") && -1 === t.indexOf(":"))
                                    return new e({
                                        functionName: t
                                    });
                                var n = /((.*".+"[^@]*)?[^@]*)(?:@)/
                                  , r = t.match(n)
                                  , o = r && r[1] ? r[1] : void 0
                                  , i = this.extractLocation(t.replace(n, ""));
                                return new e({
                                    functionName: o,
                                    fileName: i[0],
                                    lineNumber: i[1],
                                    columnNumber: i[2],
                                    source: t
                                })
                            }, this)
                        },
                        parseOpera: function(e) {
                            return !e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length ? this.parseOpera9(e) : e.stack ? this.parseOpera11(e) : this.parseOpera10(e)
                        },
                        parseOpera9: function(t) {
                            for (var n = /Line (\d+).*script (?:in )?(\S+)/i, r = t.message.split("\n"), o = [], i = 2, s = r.length; i < s; i += 2) {
                                var a = n.exec(r[i]);
                                a && o.push(new e({
                                    fileName: a[2],
                                    lineNumber: a[1],
                                    source: r[i]
                                }))
                            }
                            return o
                        },
                        parseOpera10: function(t) {
                            for (var n = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, r = t.stacktrace.split("\n"), o = [], i = 0, s = r.length; i < s; i += 2) {
                                var a = n.exec(r[i]);
                                a && o.push(new e({
                                    functionName: a[3] || void 0,
                                    fileName: a[2],
                                    lineNumber: a[1],
                                    source: r[i]
                                }))
                            }
                            return o
                        },
                        parseOpera11: function(n) {
                            return n.stack.split("\n").filter(function(e) {
                                return !!e.match(t) && !e.match(/^Error created at/)
                            }, this).map(function(t) {
                                var n, r = t.split("@"), o = this.extractLocation(r.pop()), i = r.shift() || "", s = i.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0;
                                i.match(/\(([^)]*)\)/) && (n = i.replace(/^[^(]+\(([^)]*)\)$/, "$1"));
                                var a = void 0 === n || "[arguments not available]" === n ? void 0 : n.split(",");
                                return new e({
                                    functionName: s,
                                    args: a,
                                    fileName: o[0],
                                    lineNumber: o[1],
                                    columnNumber: o[2],
                                    source: t
                                })
                            }, this)
                        }
                    }
                }
                ) ? r.apply(t, o) : r) || (e.exports = i)
            }()
        },
        343: function(e, t) {
            var n, r, o;
            !function() {
                "use strict";
                r = [],
                void 0 === (o = "function" == typeof (n = function() {
                    function e(e) {
                        return !isNaN(parseFloat(e)) && isFinite(e)
                    }
                    function t(e) {
                        return e.charAt(0).toUpperCase() + e.substring(1)
                    }
                    function n(e) {
                        return function() {
                            return this[e]
                        }
                    }
                    var r = ["isConstructor", "isEval", "isNative", "isToplevel"]
                      , o = ["columnNumber", "lineNumber"]
                      , i = ["fileName", "functionName", "source"]
                      , s = ["args"]
                      , a = ["evalOrigin"]
                      , c = r.concat(o, i, s, a);
                    function u(e) {
                        if (e)
                            for (var n = 0; n < c.length; n++)
                                void 0 !== e[c[n]] && this["set" + t(c[n])](e[c[n]])
                    }
                    u.prototype = {
                        getArgs: function() {
                            return this.args
                        },
                        setArgs: function(e) {
                            if ("[object Array]" !== Object.prototype.toString.call(e))
                                throw new TypeError("Args must be an Array");
                            this.args = e
                        },
                        getEvalOrigin: function() {
                            return this.evalOrigin
                        },
                        setEvalOrigin: function(e) {
                            if (e instanceof u)
                                this.evalOrigin = e;
                            else {
                                if (!(e instanceof Object))
                                    throw new TypeError("Eval Origin must be an Object or StackFrame");
                                this.evalOrigin = new u(e)
                            }
                        },
                        toString: function() {
                            var e = this.getFileName() || ""
                              , t = this.getLineNumber() || ""
                              , n = this.getColumnNumber() || ""
                              , r = this.getFunctionName() || "";
                            return this.getIsEval() ? e ? "[eval] (" + e + ":" + t + ":" + n + ")" : "[eval]:" + t + ":" + n : r ? r + " (" + e + ":" + t + ":" + n + ")" : e + ":" + t + ":" + n
                        }
                    },
                    u.fromString = function(e) {
                        var t = e.indexOf("(")
                          , n = e.lastIndexOf(")")
                          , r = e.substring(0, t)
                          , o = e.substring(t + 1, n).split(",")
                          , i = e.substring(n + 1);
                        if (0 === i.indexOf("@"))
                            var s = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(i, "")
                              , a = s[1]
                              , c = s[2]
                              , l = s[3];
                        return new u({
                            functionName: r,
                            args: o || void 0,
                            fileName: a,
                            lineNumber: c || void 0,
                            columnNumber: l || void 0
                        })
                    }
                    ;
                    for (var l = 0; l < r.length; l++)
                        u.prototype["get" + t(r[l])] = n(r[l]),
                        u.prototype["set" + t(r[l])] = function(e) {
                            return function(t) {
                                this[e] = Boolean(t)
                            }
                        }(r[l]);
                    for (var d = 0; d < o.length; d++)
                        u.prototype["get" + t(o[d])] = n(o[d]),
                        u.prototype["set" + t(o[d])] = function(t) {
                            return function(n) {
                                if (!e(n))
                                    throw new TypeError(t + " must be a Number");
                                this[t] = Number(n)
                            }
                        }(o[d]);
                    for (var f = 0; f < i.length; f++)
                        u.prototype["get" + t(i[f])] = n(i[f]),
                        u.prototype["set" + t(i[f])] = function(e) {
                            return function(t) {
                                this[e] = String(t)
                            }
                        }(i[f]);
                    return u
                }
                ) ? n.apply(t, r) : n) || (e.exports = o)
            }()
        },
        606: (e, t, n) => {
            var r = n(835)
              , o = n(35)
              , i = n(671).C
              , s = n(860)
              , a = n(737).g;
            function c(e) {
                var t = e;
                return "string" == typeof e && (t = JSON.parse(e.replace(/^\)\]\}'/, ""))),
                null != t.sections ? new d(t) : new u(t)
            }
            function u(e) {
                var t = e;
                "string" == typeof e && (t = JSON.parse(e.replace(/^\)\]\}'/, "")));
                var n = r.getArg(t, "version")
                  , o = r.getArg(t, "sources")
                  , s = r.getArg(t, "names", [])
                  , a = r.getArg(t, "sourceRoot", null)
                  , c = r.getArg(t, "sourcesContent", null)
                  , u = r.getArg(t, "mappings")
                  , l = r.getArg(t, "file", null);
                if (n != this._version)
                    throw new Error("Unsupported version: " + n);
                o = o.map(String).map(r.normalize).map(function(e) {
                    return a && r.isAbsolute(a) && r.isAbsolute(e) ? r.relative(a, e) : e
                }),
                this._names = i.fromArray(s.map(String), !0),
                this._sources = i.fromArray(o, !0),
                this.sourceRoot = a,
                this.sourcesContent = c,
                this._mappings = u,
                this.file = l
            }
            function l() {
                this.generatedLine = 0,
                this.generatedColumn = 0,
                this.source = null,
                this.originalLine = null,
                this.originalColumn = null,
                this.name = null
            }
            function d(e) {
                var t = e;
                "string" == typeof e && (t = JSON.parse(e.replace(/^\)\]\}'/, "")));
                var n = r.getArg(t, "version")
                  , o = r.getArg(t, "sections");
                if (n != this._version)
                    throw new Error("Unsupported version: " + n);
                this._sources = new i,
                this._names = new i;
                var s = {
                    line: -1,
                    column: 0
                };
                this._sections = o.map(function(e) {
                    if (e.url)
                        throw new Error("Support for url field in sections not implemented.");
                    var t = r.getArg(e, "offset")
                      , n = r.getArg(t, "line")
                      , o = r.getArg(t, "column");
                    if (n < s.line || n === s.line && o < s.column)
                        throw new Error("Section offsets must be ordered and non-overlapping.");
                    return s = t,
                    {
                        generatedOffset: {
                            generatedLine: n + 1,
                            generatedColumn: o + 1
                        },
                        consumer: new c(r.getArg(e, "map"))
                    }
                })
            }
            c.fromSourceMap = function(e) {
                return u.fromSourceMap(e)
            }
            ,
            c.prototype._version = 3,
            c.prototype.__generatedMappings = null,
            Object.defineProperty(c.prototype, "_generatedMappings", {
                get: function() {
                    return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot),
                    this.__generatedMappings
                }
            }),
            c.prototype.__originalMappings = null,
            Object.defineProperty(c.prototype, "_originalMappings", {
                get: function() {
                    return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot),
                    this.__originalMappings
                }
            }),
            c.prototype._charIsMappingSeparator = function(e, t) {
                var n = e.charAt(t);
                return ";" === n || "," === n
            }
            ,
            c.prototype._parseMappings = function(e, t) {
                throw new Error("Subclasses must implement _parseMappings")
            }
            ,
            c.GENERATED_ORDER = 1,
            c.ORIGINAL_ORDER = 2,
            c.GREATEST_LOWER_BOUND = 1,
            c.LEAST_UPPER_BOUND = 2,
            c.prototype.eachMapping = function(e, t, n) {
                var o, i = t || null;
                switch (n || c.GENERATED_ORDER) {
                case c.GENERATED_ORDER:
                    o = this._generatedMappings;
                    break;
                case c.ORIGINAL_ORDER:
                    o = this._originalMappings;
                    break;
                default:
                    throw new Error("Unknown order of iteration.")
                }
                var s = this.sourceRoot;
                o.map(function(e) {
                    var t = null === e.source ? null : this._sources.at(e.source);
                    return null != t && null != s && (t = r.join(s, t)),
                    {
                        source: t,
                        generatedLine: e.generatedLine,
                        generatedColumn: e.generatedColumn,
                        originalLine: e.originalLine,
                        originalColumn: e.originalColumn,
                        name: null === e.name ? null : this._names.at(e.name)
                    }
                }, this).forEach(e, i)
            }
            ,
            c.prototype.allGeneratedPositionsFor = function(e) {
                var t = r.getArg(e, "line")
                  , n = {
                    source: r.getArg(e, "source"),
                    originalLine: t,
                    originalColumn: r.getArg(e, "column", 0)
                };
                if (null != this.sourceRoot && (n.source = r.relative(this.sourceRoot, n.source)),
                !this._sources.has(n.source))
                    return [];
                n.source = this._sources.indexOf(n.source);
                var i = []
                  , s = this._findMapping(n, this._originalMappings, "originalLine", "originalColumn", r.compareByOriginalPositions, o.LEAST_UPPER_BOUND);
                if (s >= 0) {
                    var a = this._originalMappings[s];
                    if (void 0 === e.column)
                        for (var c = a.originalLine; a && a.originalLine === c; )
                            i.push({
                                line: r.getArg(a, "generatedLine", null),
                                column: r.getArg(a, "generatedColumn", null),
                                lastColumn: r.getArg(a, "lastGeneratedColumn", null)
                            }),
                            a = this._originalMappings[++s];
                    else
                        for (var u = a.originalColumn; a && a.originalLine === t && a.originalColumn == u; )
                            i.push({
                                line: r.getArg(a, "generatedLine", null),
                                column: r.getArg(a, "generatedColumn", null),
                                lastColumn: r.getArg(a, "lastGeneratedColumn", null)
                            }),
                            a = this._originalMappings[++s]
                }
                return i
            }
            ,
            t.SourceMapConsumer = c,
            u.prototype = Object.create(c.prototype),
            u.prototype.consumer = c,
            u.fromSourceMap = function(e) {
                var t = Object.create(u.prototype)
                  , n = t._names = i.fromArray(e._names.toArray(), !0)
                  , o = t._sources = i.fromArray(e._sources.toArray(), !0);
                t.sourceRoot = e._sourceRoot,
                t.sourcesContent = e._generateSourcesContent(t._sources.toArray(), t.sourceRoot),
                t.file = e._file;
                for (var s = e._mappings.toArray().slice(), c = t.__generatedMappings = [], d = t.__originalMappings = [], f = 0, h = s.length; f < h; f++) {
                    var p = s[f]
                      , m = new l;
                    m.generatedLine = p.generatedLine,
                    m.generatedColumn = p.generatedColumn,
                    p.source && (m.source = o.indexOf(p.source),
                    m.originalLine = p.originalLine,
                    m.originalColumn = p.originalColumn,
                    p.name && (m.name = n.indexOf(p.name)),
                    d.push(m)),
                    c.push(m)
                }
                return a(t.__originalMappings, r.compareByOriginalPositions),
                t
            }
            ,
            u.prototype._version = 3,
            Object.defineProperty(u.prototype, "sources", {
                get: function() {
                    return this._sources.toArray().map(function(e) {
                        return null != this.sourceRoot ? r.join(this.sourceRoot, e) : e
                    }, this)
                }
            }),
            u.prototype._parseMappings = function(e, t) {
                for (var n, o, i, c, u, d = 1, f = 0, h = 0, p = 0, m = 0, g = 0, y = e.length, w = 0, v = {}, b = {}, E = [], _ = []; w < y; )
                    if (";" === e.charAt(w))
                        d++,
                        w++,
                        f = 0;
                    else if ("," === e.charAt(w))
                        w++;
                    else {
                        for ((n = new l).generatedLine = d,
                        c = w; c < y && !this._charIsMappingSeparator(e, c); c++)
                            ;
                        if (i = v[o = e.slice(w, c)])
                            w += o.length;
                        else {
                            for (i = []; w < c; )
                                s.decode(e, w, b),
                                u = b.value,
                                w = b.rest,
                                i.push(u);
                            if (2 === i.length)
                                throw new Error("Found a source, but no line and column");
                            if (3 === i.length)
                                throw new Error("Found a source and line, but no column");
                            v[o] = i
                        }
                        n.generatedColumn = f + i[0],
                        f = n.generatedColumn,
                        i.length > 1 && (n.source = m + i[1],
                        m += i[1],
                        n.originalLine = h + i[2],
                        h = n.originalLine,
                        n.originalLine += 1,
                        n.originalColumn = p + i[3],
                        p = n.originalColumn,
                        i.length > 4 && (n.name = g + i[4],
                        g += i[4])),
                        _.push(n),
                        "number" == typeof n.originalLine && E.push(n)
                    }
                a(_, r.compareByGeneratedPositionsDeflated),
                this.__generatedMappings = _,
                a(E, r.compareByOriginalPositions),
                this.__originalMappings = E
            }
            ,
            u.prototype._findMapping = function(e, t, n, r, i, s) {
                if (e[n] <= 0)
                    throw new TypeError("Line must be greater than or equal to 1, got " + e[n]);
                if (e[r] < 0)
                    throw new TypeError("Column must be greater than or equal to 0, got " + e[r]);
                return o.search(e, t, i, s)
            }
            ,
            u.prototype.computeColumnSpans = function() {
                for (var e = 0; e < this._generatedMappings.length; ++e) {
                    var t = this._generatedMappings[e];
                    if (e + 1 < this._generatedMappings.length) {
                        var n = this._generatedMappings[e + 1];
                        if (t.generatedLine === n.generatedLine) {
                            t.lastGeneratedColumn = n.generatedColumn - 1;
                            continue
                        }
                    }
                    t.lastGeneratedColumn = 1 / 0
                }
            }
            ,
            u.prototype.originalPositionFor = function(e) {
                var t = {
                    generatedLine: r.getArg(e, "line"),
                    generatedColumn: r.getArg(e, "column")
                }
                  , n = this._findMapping(t, this._generatedMappings, "generatedLine", "generatedColumn", r.compareByGeneratedPositionsDeflated, r.getArg(e, "bias", c.GREATEST_LOWER_BOUND));
                if (n >= 0) {
                    var o = this._generatedMappings[n];
                    if (o.generatedLine === t.generatedLine) {
                        var i = r.getArg(o, "source", null);
                        null !== i && (i = this._sources.at(i),
                        null != this.sourceRoot && (i = r.join(this.sourceRoot, i)));
                        var s = r.getArg(o, "name", null);
                        return null !== s && (s = this._names.at(s)),
                        {
                            source: i,
                            line: r.getArg(o, "originalLine", null),
                            column: r.getArg(o, "originalColumn", null),
                            name: s
                        }
                    }
                }
                return {
                    source: null,
                    line: null,
                    column: null,
                    name: null
                }
            }
            ,
            u.prototype.hasContentsOfAllSources = function() {
                return !!this.sourcesContent && (this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(e) {
                    return null == e
                }))
            }
            ,
            u.prototype.sourceContentFor = function(e, t) {
                if (!this.sourcesContent)
                    return null;
                if (null != this.sourceRoot && (e = r.relative(this.sourceRoot, e)),
                this._sources.has(e))
                    return this.sourcesContent[this._sources.indexOf(e)];
                var n;
                if (null != this.sourceRoot && (n = r.urlParse(this.sourceRoot))) {
                    var o = e.replace(/^file:\/\//, "");
                    if ("file" == n.scheme && this._sources.has(o))
                        return this.sourcesContent[this._sources.indexOf(o)];
                    if ((!n.path || "/" == n.path) && this._sources.has("/" + e))
                        return this.sourcesContent[this._sources.indexOf("/" + e)]
                }
                if (t)
                    return null;
                throw new Error('"' + e + '" is not in the SourceMap.')
            }
            ,
            u.prototype.generatedPositionFor = function(e) {
                var t = r.getArg(e, "source");
                if (null != this.sourceRoot && (t = r.relative(this.sourceRoot, t)),
                !this._sources.has(t))
                    return {
                        line: null,
                        column: null,
                        lastColumn: null
                    };
                var n = {
                    source: t = this._sources.indexOf(t),
                    originalLine: r.getArg(e, "line"),
                    originalColumn: r.getArg(e, "column")
                }
                  , o = this._findMapping(n, this._originalMappings, "originalLine", "originalColumn", r.compareByOriginalPositions, r.getArg(e, "bias", c.GREATEST_LOWER_BOUND));
                if (o >= 0) {
                    var i = this._originalMappings[o];
                    if (i.source === n.source)
                        return {
                            line: r.getArg(i, "generatedLine", null),
                            column: r.getArg(i, "generatedColumn", null),
                            lastColumn: r.getArg(i, "lastGeneratedColumn", null)
                        }
                }
                return {
                    line: null,
                    column: null,
                    lastColumn: null
                }
            }
            ,
            d.prototype = Object.create(c.prototype),
            d.prototype.constructor = c,
            d.prototype._version = 3,
            Object.defineProperty(d.prototype, "sources", {
                get: function() {
                    for (var e = [], t = 0; t < this._sections.length; t++)
                        for (var n = 0; n < this._sections[t].consumer.sources.length; n++)
                            e.push(this._sections[t].consumer.sources[n]);
                    return e
                }
            }),
            d.prototype.originalPositionFor = function(e) {
                var t = {
                    generatedLine: r.getArg(e, "line"),
                    generatedColumn: r.getArg(e, "column")
                }
                  , n = o.search(t, this._sections, function(e, t) {
                    var n = e.generatedLine - t.generatedOffset.generatedLine;
                    return n || e.generatedColumn - t.generatedOffset.generatedColumn
                })
                  , i = this._sections[n];
                return i ? i.consumer.originalPositionFor({
                    line: t.generatedLine - (i.generatedOffset.generatedLine - 1),
                    column: t.generatedColumn - (i.generatedOffset.generatedLine === t.generatedLine ? i.generatedOffset.generatedColumn - 1 : 0),
                    bias: e.bias
                }) : {
                    source: null,
                    line: null,
                    column: null,
                    name: null
                }
            }
            ,
            d.prototype.hasContentsOfAllSources = function() {
                return this._sections.every(function(e) {
                    return e.consumer.hasContentsOfAllSources()
                })
            }
            ,
            d.prototype.sourceContentFor = function(e, t) {
                for (var n = 0; n < this._sections.length; n++) {
                    var r = this._sections[n].consumer.sourceContentFor(e, !0);
                    if (r)
                        return r
                }
                if (t)
                    return null;
                throw new Error('"' + e + '" is not in the SourceMap.')
            }
            ,
            d.prototype.generatedPositionFor = function(e) {
                for (var t = 0; t < this._sections.length; t++) {
                    var n = this._sections[t];
                    if (-1 !== n.consumer.sources.indexOf(r.getArg(e, "source"))) {
                        var o = n.consumer.generatedPositionFor(e);
                        if (o)
                            return {
                                line: o.line + (n.generatedOffset.generatedLine - 1),
                                column: o.column + (n.generatedOffset.generatedLine === o.line ? n.generatedOffset.generatedColumn - 1 : 0)
                            }
                    }
                }
                return {
                    line: null,
                    column: null
                }
            }
            ,
            d.prototype._parseMappings = function(e, t) {
                this.__generatedMappings = [],
                this.__originalMappings = [];
                for (var n = 0; n < this._sections.length; n++)
                    for (var o = this._sections[n], i = o.consumer._generatedMappings, s = 0; s < i.length; s++) {
                        var c = i[s]
                          , u = o.consumer._sources.at(c.source);
                        null !== o.consumer.sourceRoot && (u = r.join(o.consumer.sourceRoot, u)),
                        this._sources.add(u),
                        u = this._sources.indexOf(u);
                        var l = o.consumer._names.at(c.name);
                        this._names.add(l),
                        l = this._names.indexOf(l);
                        var d = {
                            source: u,
                            generatedLine: c.generatedLine + (o.generatedOffset.generatedLine - 1),
                            generatedColumn: c.generatedColumn + (o.generatedOffset.generatedLine === c.generatedLine ? o.generatedOffset.generatedColumn - 1 : 0),
                            originalLine: c.originalLine,
                            originalColumn: c.originalColumn,
                            name: l
                        };
                        this.__generatedMappings.push(d),
                        "number" == typeof d.originalLine && this.__originalMappings.push(d)
                    }
                a(this.__generatedMappings, r.compareByGeneratedPositionsDeflated),
                a(this.__originalMappings, r.compareByOriginalPositions)
            }
        }
        ,
        671: (e, t, n) => {
            var r = n(835)
              , o = Object.prototype.hasOwnProperty;
            function i() {
                this._array = [],
                this._set = Object.create(null)
            }
            i.fromArray = function(e, t) {
                for (var n = new i, r = 0, o = e.length; r < o; r++)
                    n.add(e[r], t);
                return n
            }
            ,
            i.prototype.size = function() {
                return Object.getOwnPropertyNames(this._set).length
            }
            ,
            i.prototype.add = function(e, t) {
                var n = r.toSetString(e)
                  , i = o.call(this._set, n)
                  , s = this._array.length;
                i && !t || this._array.push(e),
                i || (this._set[n] = s)
            }
            ,
            i.prototype.has = function(e) {
                var t = r.toSetString(e);
                return o.call(this._set, t)
            }
            ,
            i.prototype.indexOf = function(e) {
                var t = r.toSetString(e);
                if (o.call(this._set, t))
                    return this._set[t];
                throw new Error('"' + e + '" is not in the set.')
            }
            ,
            i.prototype.at = function(e) {
                if (e >= 0 && e < this._array.length)
                    return this._array[e];
                throw new Error("No element indexed by " + e)
            }
            ,
            i.prototype.toArray = function() {
                return this._array.slice()
            }
            ,
            t.C = i
        }
        ,
        737: (e, t) => {
            function n(e, t, n) {
                var r = e[t];
                e[t] = e[n],
                e[n] = r
            }
            function r(e, t, o, i) {
                if (o < i) {
                    var s = o - 1;
                    n(e, (l = o,
                    d = i,
                    Math.round(l + Math.random() * (d - l))), i);
                    for (var a = e[i], c = o; c < i; c++)
                        t(e[c], a) <= 0 && n(e, s += 1, c);
                    n(e, s + 1, c);
                    var u = s + 1;
                    r(e, t, o, u - 1),
                    r(e, t, u + 1, i)
                }
                var l, d
            }
            t.g = function(e, t) {
                r(e, t, 0, e.length - 1)
            }
        }
        ,
        769: (e, t, n) => {
            e.exports = n(187)
        }
        ,
        835: (e, t) => {
            t.getArg = function(e, t, n) {
                if (t in e)
                    return e[t];
                if (3 === arguments.length)
                    return n;
                throw new Error('"' + t + '" is a required argument.')
            }
            ;
            var n = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/
              , r = /^data:.+\,.+$/;
            function o(e) {
                var t = e.match(n);
                return t ? {
                    scheme: t[1],
                    auth: t[2],
                    host: t[3],
                    port: t[4],
                    path: t[5]
                } : null
            }
            function i(e) {
                var t = "";
                return e.scheme && (t += e.scheme + ":"),
                t += "//",
                e.auth && (t += e.auth + "@"),
                e.host && (t += e.host),
                e.port && (t += ":" + e.port),
                e.path && (t += e.path),
                t
            }
            function s(e) {
                var n = e
                  , r = o(e);
                if (r) {
                    if (!r.path)
                        return e;
                    n = r.path
                }
                for (var s, a = t.isAbsolute(n), c = n.split(/\/+/), u = 0, l = c.length - 1; l >= 0; l--)
                    "." === (s = c[l]) ? c.splice(l, 1) : ".." === s ? u++ : u > 0 && ("" === s ? (c.splice(l + 1, u),
                    u = 0) : (c.splice(l, 2),
                    u--));
                return "" === (n = c.join("/")) && (n = a ? "/" : "."),
                r ? (r.path = n,
                i(r)) : n
            }
            t.urlParse = o,
            t.urlGenerate = i,
            t.normalize = s,
            t.join = function(e, t) {
                "" === e && (e = "."),
                "" === t && (t = ".");
                var n = o(t)
                  , a = o(e);
                if (a && (e = a.path || "/"),
                n && !n.scheme)
                    return a && (n.scheme = a.scheme),
                    i(n);
                if (n || t.match(r))
                    return t;
                if (a && !a.host && !a.path)
                    return a.host = t,
                    i(a);
                var c = "/" === t.charAt(0) ? t : s(e.replace(/\/+$/, "") + "/" + t);
                return a ? (a.path = c,
                i(a)) : c
            }
            ,
            t.isAbsolute = function(e) {
                return "/" === e.charAt(0) || !!e.match(n)
            }
            ,
            t.relative = function(e, t) {
                "" === e && (e = "."),
                e = e.replace(/\/$/, "");
                for (var n = 0; 0 !== t.indexOf(e + "/"); ) {
                    var r = e.lastIndexOf("/");
                    if (r < 0)
                        return t;
                    if ((e = e.slice(0, r)).match(/^([^\/]+:\/)?\/*$/))
                        return t;
                    ++n
                }
                return Array(n + 1).join("../") + t.substr(e.length + 1)
            }
            ;
            var a = !("__proto__"in Object.create(null));
            function c(e) {
                return e
            }
            function u(e) {
                if (!e)
                    return !1;
                var t = e.length;
                if (t < 9)
                    return !1;
                if (95 !== e.charCodeAt(t - 1) || 95 !== e.charCodeAt(t - 2) || 111 !== e.charCodeAt(t - 3) || 116 !== e.charCodeAt(t - 4) || 111 !== e.charCodeAt(t - 5) || 114 !== e.charCodeAt(t - 6) || 112 !== e.charCodeAt(t - 7) || 95 !== e.charCodeAt(t - 8) || 95 !== e.charCodeAt(t - 9))
                    return !1;
                for (var n = t - 10; n >= 0; n--)
                    if (36 !== e.charCodeAt(n))
                        return !1;
                return !0
            }
            function l(e, t) {
                return e === t ? 0 : e > t ? 1 : -1
            }
            t.toSetString = a ? c : function(e) {
                return u(e) ? "$" + e : e
            }
            ,
            t.fromSetString = a ? c : function(e) {
                return u(e) ? e.slice(1) : e
            }
            ,
            t.compareByOriginalPositions = function(e, t, n) {
                var r = e.source - t.source;
                return 0 !== r || 0 !== (r = e.originalLine - t.originalLine) || 0 !== (r = e.originalColumn - t.originalColumn) || n || 0 !== (r = e.generatedColumn - t.generatedColumn) || 0 !== (r = e.generatedLine - t.generatedLine) ? r : e.name - t.name
            }
            ,
            t.compareByGeneratedPositionsDeflated = function(e, t, n) {
                var r = e.generatedLine - t.generatedLine;
                return 0 !== r || 0 !== (r = e.generatedColumn - t.generatedColumn) || n || 0 !== (r = e.source - t.source) || 0 !== (r = e.originalLine - t.originalLine) || 0 !== (r = e.originalColumn - t.originalColumn) ? r : e.name - t.name
            }
            ,
            t.compareByGeneratedPositionsInflated = function(e, t) {
                var n = e.generatedLine - t.generatedLine;
                return 0 !== n || 0 !== (n = e.generatedColumn - t.generatedColumn) || 0 !== (n = l(e.source, t.source)) || 0 !== (n = e.originalLine - t.originalLine) || 0 !== (n = e.originalColumn - t.originalColumn) ? n : l(e.name, t.name)
            }
        }
        ,
        860: (e, t, n) => {
            var r = n(900);
            t.encode = function(e) {
                var t, n = "", o = function(e) {
                    return e < 0 ? 1 + (-e << 1) : 0 + (e << 1)
                }(e);
                do {
                    t = 31 & o,
                    (o >>>= 5) > 0 && (t |= 32),
                    n += r.encode(t)
                } while (o > 0);
                return n
            }
            ,
            t.decode = function(e, t, n) {
                var o, i, s, a, c = e.length, u = 0, l = 0;
                do {
                    if (t >= c)
                        throw new Error("Expected more digits in base 64 VLQ value.");
                    if (-1 === (i = r.decode(e.charCodeAt(t++))))
                        throw new Error("Invalid base64 digit: " + e.charAt(t - 1));
                    o = !!(32 & i),
                    u += (i &= 31) << l,
                    l += 5
                } while (o);
                n.value = (a = (s = u) >> 1,
                1 & ~s ? a : -a),
                n.rest = t
            }
        }
        ,
        885: function(e, t, n) {
            var r, o, i;
            !function() {
                "use strict";
                o = [n(65), n(343)],
                void 0 === (i = "function" == typeof (r = function(e, t) {
                    function n(e) {
                        return new Promise(function(t, n) {
                            var r = new XMLHttpRequest;
                            r.open("get", e),
                            r.onerror = n,
                            r.onreadystatechange = function() {
                                4 === r.readyState && (r.status >= 200 && r.status < 300 || "file://" === e.substr(0, 7) && r.responseText ? t(r.responseText) : n(new Error("HTTP status: " + r.status + " retrieving " + e)))
                            }
                            ,
                            r.send()
                        }
                        )
                    }
                    function r(e) {
                        if ("undefined" != typeof window && window.atob)
                            return window.atob(e);
                        throw new Error("You must supply a polyfill for window.atob in this environment")
                    }
                    function o(e) {
                        if ("undefined" != typeof JSON && JSON.parse)
                            return JSON.parse(e);
                        throw new Error("You must supply a polyfill for JSON.parse in this environment")
                    }
                    function i(e, t) {
                        for (var n = [/['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*function\b/, /function\s+([^('"`]*?)\s*\(([^)]*)\)/, /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*(?:eval|new Function)\b/, /\b(?!(?:if|for|switch|while|with|catch)\b)(?:(?:static)\s+)?(\S+)\s*\(.*?\)\s*\{/, /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*\(.*?\)\s*=>/], r = e.split("\n"), o = "", i = Math.min(t, 20), s = 0; s < i; ++s) {
                            var a = r[t - s - 1]
                              , c = a.indexOf("//");
                            if (c >= 0 && (a = a.substr(0, c)),
                            a) {
                                o = a + o;
                                for (var u = n.length, l = 0; l < u; l++) {
                                    var d = n[l].exec(o);
                                    if (d && d[1])
                                        return d[1]
                                }
                            }
                        }
                    }
                    function s() {
                        if ("function" != typeof Object.defineProperty || "function" != typeof Object.create)
                            throw new Error("Unable to consume source maps in older browsers")
                    }
                    function a(e) {
                        if ("object" != typeof e)
                            throw new TypeError("Given StackFrame is not an object");
                        if ("string" != typeof e.fileName)
                            throw new TypeError("Given file name is not a String");
                        if ("number" != typeof e.lineNumber || e.lineNumber % 1 != 0 || e.lineNumber < 1)
                            throw new TypeError("Given line number must be a positive integer");
                        if ("number" != typeof e.columnNumber || e.columnNumber % 1 != 0 || e.columnNumber < 0)
                            throw new TypeError("Given column number must be a non-negative integer");
                        return !0
                    }
                    function c(e) {
                        for (var t, n, r = /\/\/[#@] ?sourceMappingURL=([^\s'"]+)\s*$/gm; n = r.exec(e); )
                            t = n[1];
                        if (t)
                            return t;
                        throw new Error("sourceMappingURL not found")
                    }
                    function u(e, n, r) {
                        return new Promise(function(o, i) {
                            var s = n.originalPositionFor({
                                line: e.lineNumber,
                                column: e.columnNumber
                            });
                            if (s.source) {
                                var a = n.sourceContentFor(s.source);
                                a && (r[s.source] = a),
                                o(new t({
                                    functionName: s.name || e.functionName,
                                    args: e.args,
                                    fileName: s.source,
                                    lineNumber: s.line,
                                    columnNumber: s.column
                                }))
                            } else
                                i(new Error("Could not get original source for given stackframe and source map"))
                        }
                        )
                    }
                    return function l(d) {
                        if (!(this instanceof l))
                            return new l(d);
                        d = d || {},
                        this.sourceCache = d.sourceCache || {},
                        this.sourceMapConsumerCache = d.sourceMapConsumerCache || {},
                        this.ajax = d.ajax || n,
                        this._atob = d.atob || r,
                        this._get = function(e) {
                            return new Promise(function(t, n) {
                                var r = "data:" === e.substr(0, 5);
                                if (this.sourceCache[e])
                                    t(this.sourceCache[e]);
                                else if (d.offline && !r)
                                    n(new Error("Cannot make network requests in offline mode"));
                                else if (r) {
                                    var o = /^data:application\/json;([\w=:"-]+;)*base64,/
                                      , i = e.match(o);
                                    if (i) {
                                        var s = i[0].length
                                          , a = e.substr(s)
                                          , c = this._atob(a);
                                        this.sourceCache[e] = c,
                                        t(c)
                                    } else
                                        n(new Error("The encoding of the inline sourcemap is not supported"))
                                } else {
                                    var u = this.ajax(e, {
                                        method: "get"
                                    });
                                    this.sourceCache[e] = u,
                                    u.then(t, n)
                                }
                            }
                            .bind(this))
                        }
                        ,
                        this._getSourceMapConsumer = function(t, n) {
                            return new Promise(function(r) {
                                if (this.sourceMapConsumerCache[t])
                                    r(this.sourceMapConsumerCache[t]);
                                else {
                                    var i = new Promise(function(r, i) {
                                        return this._get(t).then(function(t) {
                                            "string" == typeof t && (t = o(t.replace(/^\)\]\}'/, ""))),
                                            void 0 === t.sourceRoot && (t.sourceRoot = n),
                                            r(new e.SourceMapConsumer(t))
                                        }).catch(i)
                                    }
                                    .bind(this));
                                    this.sourceMapConsumerCache[t] = i,
                                    r(i)
                                }
                            }
                            .bind(this))
                        }
                        ,
                        this.pinpoint = function(e) {
                            return new Promise(function(t, n) {
                                this.getMappedLocation(e).then(function(e) {
                                    function n() {
                                        t(e)
                                    }
                                    this.findFunctionName(e).then(t, n).catch(n)
                                }
                                .bind(this), n)
                            }
                            .bind(this))
                        }
                        ,
                        this.findFunctionName = function(e) {
                            return new Promise(function(n, r) {
                                a(e),
                                this._get(e.fileName).then(function(r) {
                                    var o = e.lineNumber
                                      , s = e.columnNumber
                                      , a = i(r, o, s);
                                    n(a ? new t({
                                        functionName: a,
                                        args: e.args,
                                        fileName: e.fileName,
                                        lineNumber: o,
                                        columnNumber: s
                                    }) : e)
                                }, r).catch(r)
                            }
                            .bind(this))
                        }
                        ,
                        this.getMappedLocation = function(e) {
                            return new Promise(function(t, n) {
                                s(),
                                a(e);
                                var r = this.sourceCache
                                  , o = e.fileName;
                                this._get(o).then(function(n) {
                                    var i = c(n)
                                      , s = "data:" === i.substr(0, 5)
                                      , a = o.substring(0, o.lastIndexOf("/") + 1);
                                    return "/" === i[0] || s || /^https?:\/\/|^\/\//i.test(i) || (i = a + i),
                                    this._getSourceMapConsumer(i, a).then(function(n) {
                                        return u(e, n, r).then(t).catch(function() {
                                            t(e)
                                        })
                                    })
                                }
                                .bind(this), n).catch(n)
                            }
                            .bind(this))
                        }
                    }
                }
                ) ? r.apply(t, o) : r) || (e.exports = i)
            }()
        },
        887: function(e, t, n) {
            var r, o, i;
            !function() {
                "use strict";
                o = [n(343)],
                r = function(e) {
                    return {
                        backtrace: function(t) {
                            var n = []
                              , r = 10;
                            "object" == typeof t && "number" == typeof t.maxStackSize && (r = t.maxStackSize);
                            for (var o = arguments.callee; o && n.length < r && o.arguments; ) {
                                for (var i = new Array(o.arguments.length), s = 0; s < i.length; ++s)
                                    i[s] = o.arguments[s];
                                /function(?:\s+([\w$]+))+\s*\(/.test(o.toString()) ? n.push(new e({
                                    functionName: RegExp.$1 || void 0,
                                    args: i
                                })) : n.push(new e({
                                    args: i
                                }));
                                try {
                                    o = o.caller
                                } catch (e) {
                                    break
                                }
                            }
                            return n
                        }
                    }
                }
                ,
                void 0 === (i = "function" == typeof r ? r.apply(t, o) : r) || (e.exports = i)
            }()
        },
        900: (e, t) => {
            var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
            t.encode = function(e) {
                if (0 <= e && e < n.length)
                    return n[e];
                throw new TypeError("Must be between 0 and 63: " + e)
            }
            ,
            t.decode = function(e) {
                return 65 <= e && e <= 90 ? e - 65 : 97 <= e && e <= 122 ? e - 97 + 26 : 48 <= e && e <= 57 ? e - 48 + 52 : 43 == e ? 62 : 47 == e ? 63 : -1
            }
        }
        ,
        945: (e, t, n) => {
            var r = n(860)
              , o = n(835)
              , i = n(671).C
              , s = n(238).P;
            function a(e) {
                e || (e = {}),
                this._file = o.getArg(e, "file", null),
                this._sourceRoot = o.getArg(e, "sourceRoot", null),
                this._skipValidation = o.getArg(e, "skipValidation", !1),
                this._sources = new i,
                this._names = new i,
                this._mappings = new s,
                this._sourcesContents = null
            }
            a.prototype._version = 3,
            a.fromSourceMap = function(e) {
                var t = e.sourceRoot
                  , n = new a({
                    file: e.file,
                    sourceRoot: t
                });
                return e.eachMapping(function(e) {
                    var r = {
                        generated: {
                            line: e.generatedLine,
                            column: e.generatedColumn
                        }
                    };
                    null != e.source && (r.source = e.source,
                    null != t && (r.source = o.relative(t, r.source)),
                    r.original = {
                        line: e.originalLine,
                        column: e.originalColumn
                    },
                    null != e.name && (r.name = e.name)),
                    n.addMapping(r)
                }),
                e.sources.forEach(function(t) {
                    var r = e.sourceContentFor(t);
                    null != r && n.setSourceContent(t, r)
                }),
                n
            }
            ,
            a.prototype.addMapping = function(e) {
                var t = o.getArg(e, "generated")
                  , n = o.getArg(e, "original", null)
                  , r = o.getArg(e, "source", null)
                  , i = o.getArg(e, "name", null);
                this._skipValidation || this._validateMapping(t, n, r, i),
                null != r && (r = String(r),
                this._sources.has(r) || this._sources.add(r)),
                null != i && (i = String(i),
                this._names.has(i) || this._names.add(i)),
                this._mappings.add({
                    generatedLine: t.line,
                    generatedColumn: t.column,
                    originalLine: null != n && n.line,
                    originalColumn: null != n && n.column,
                    source: r,
                    name: i
                })
            }
            ,
            a.prototype.setSourceContent = function(e, t) {
                var n = e;
                null != this._sourceRoot && (n = o.relative(this._sourceRoot, n)),
                null != t ? (this._sourcesContents || (this._sourcesContents = Object.create(null)),
                this._sourcesContents[o.toSetString(n)] = t) : this._sourcesContents && (delete this._sourcesContents[o.toSetString(n)],
                0 === Object.keys(this._sourcesContents).length && (this._sourcesContents = null))
            }
            ,
            a.prototype.applySourceMap = function(e, t, n) {
                var r = t;
                if (null == t) {
                    if (null == e.file)
                        throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');
                    r = e.file
                }
                var s = this._sourceRoot;
                null != s && (r = o.relative(s, r));
                var a = new i
                  , c = new i;
                this._mappings.unsortedForEach(function(t) {
                    if (t.source === r && null != t.originalLine) {
                        var i = e.originalPositionFor({
                            line: t.originalLine,
                            column: t.originalColumn
                        });
                        null != i.source && (t.source = i.source,
                        null != n && (t.source = o.join(n, t.source)),
                        null != s && (t.source = o.relative(s, t.source)),
                        t.originalLine = i.line,
                        t.originalColumn = i.column,
                        null != i.name && (t.name = i.name))
                    }
                    var u = t.source;
                    null == u || a.has(u) || a.add(u);
                    var l = t.name;
                    null == l || c.has(l) || c.add(l)
                }, this),
                this._sources = a,
                this._names = c,
                e.sources.forEach(function(t) {
                    var r = e.sourceContentFor(t);
                    null != r && (null != n && (t = o.join(n, t)),
                    null != s && (t = o.relative(s, t)),
                    this.setSourceContent(t, r))
                }, this)
            }
            ,
            a.prototype._validateMapping = function(e, t, n, r) {
                if ((!(e && "line"in e && "column"in e && e.line > 0 && e.column >= 0) || t || n || r) && !(e && "line"in e && "column"in e && t && "line"in t && "column"in t && e.line > 0 && e.column >= 0 && t.line > 0 && t.column >= 0 && n))
                    throw new Error("Invalid mapping: " + JSON.stringify({
                        generated: e,
                        source: n,
                        original: t,
                        name: r
                    }))
            }
            ,
            a.prototype._serializeMappings = function() {
                for (var e, t, n, i, s = 0, a = 1, c = 0, u = 0, l = 0, d = 0, f = "", h = this._mappings.toArray(), p = 0, m = h.length; p < m; p++) {
                    if (e = "",
                    (t = h[p]).generatedLine !== a)
                        for (s = 0; t.generatedLine !== a; )
                            e += ";",
                            a++;
                    else if (p > 0) {
                        if (!o.compareByGeneratedPositionsInflated(t, h[p - 1]))
                            continue;
                        e += ","
                    }
                    e += r.encode(t.generatedColumn - s),
                    s = t.generatedColumn,
                    null != t.source && (i = this._sources.indexOf(t.source),
                    e += r.encode(i - d),
                    d = i,
                    e += r.encode(t.originalLine - 1 - u),
                    u = t.originalLine - 1,
                    e += r.encode(t.originalColumn - c),
                    c = t.originalColumn,
                    null != t.name && (n = this._names.indexOf(t.name),
                    e += r.encode(n - l),
                    l = n)),
                    f += e
                }
                return f
            }
            ,
            a.prototype._generateSourcesContent = function(e, t) {
                return e.map(function(e) {
                    if (!this._sourcesContents)
                        return null;
                    null != t && (e = o.relative(t, e));
                    var n = o.toSetString(e);
                    return Object.prototype.hasOwnProperty.call(this._sourcesContents, n) ? this._sourcesContents[n] : null
                }, this)
            }
            ,
            a.prototype.toJSON = function() {
                var e = {
                    version: this._version,
                    sources: this._sources.toArray(),
                    names: this._names.toArray(),
                    mappings: this._serializeMappings()
                };
                return null != this._file && (e.file = this._file),
                null != this._sourceRoot && (e.sourceRoot = this._sourceRoot),
                this._sourcesContents && (e.sourcesContent = this._generateSourcesContent(e.sources, e.sourceRoot)),
                e
            }
            ,
            a.prototype.toString = function() {
                return JSON.stringify(this.toJSON())
            }
            ,
            t.SourceMapGenerator = a
        }
    }
      , t = {};
    function n(r) {
        var o = t[r];
        if (void 0 !== o)
            return o.exports;
        var i = t[r] = {
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n),
        i.exports
    }
    n.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    ( () => {
        "use strict";
        var e;
        !function(e) {
            e[e.CONTINUE = 0] = "CONTINUE",
            e[e.STOP = 1] = "STOP"
        }(e || (e = {}));
        class t {
            constructor() {
                this.maxAttempts = 10,
                this.interval = 50,
                this.exponentRate = 1.5
            }
            static run(n) {
                const r = Object.assign(new t, n)
                  , {onTick: o, onError: i, onTimeout: s, interval: a, exponentRate: c, maxAttempts: u} = r
                  , l = (t=0) => {
                    if ((t => {
                        try {
                            return o(t)
                        } catch (t) {
                            return i(t instanceof Error ? t : new Error("Unknown error occurred")),
                            e.STOP
                        }
                    }
                    )(t) === e.STOP)
                        return;
                    if (t + 1 >= u)
                        return void s();
                    const n = a * Math.pow(t + 1, c);
                    setTimeout( () => {
                        l(t + 1)
                    }
                    , n)
                }
                ;
                return l(),
                r
            }
            static runAsync(n) {
                return new Promise( (r, o) => {
                    t.run({
                        onTick: () => {
                            const t = n();
                            return t ? (r(t),
                            e.STOP) : e.CONTINUE
                        }
                        ,
                        onError: o,
                        onTimeout: () => {
                            r(null)
                        }
                    })
                }
                )
            }
        }
        function r() {
            try {
                return window.location.search.includes("at_cjs_version") || window.location.search.includes("exp_debug") || window.location.search.includes("previewExperience")
            } catch (e) {
                return console.error("Error determining if logs should be displayed:", e),
                !1
            }
        }
        const o = {
            info: (...e) => {
                r() && console.info(...e)
            }
            ,
            debug: (...e) => {
                r() && console.debug(...e)
            }
            ,
            warn: (...e) => {
                r() && console.warn(...e)
            }
            ,
            error: (...e) => {
                r() && console.error(...e)
            }
            ,
            log: (...e) => {
                r() && console.log(...e)
            }
        };
        var i = n(769);
        const s = Math.pow(2, 32)
          , a = (e, t="nike") => {
            const n = (e + ":" + t).toLowerCase()
              , r = i.x86.hash32(n, 17786) / s;
            return Math.floor(1e4 * r) / 100
        }
        ;
        function c(e, t) {
            const n = e instanceof Error ? e : new Error(String(e));
            if (t)
                for (const [e,r] of Object.entries(t))
                    Object.defineProperty(n, e, {
                        value: r,
                        enumerable: !0,
                        writable: !0,
                        configurable: !0
                    });
            return n
        }
        var u;
        !function(e) {
            e.DB_NOT_AVAILABLE = "DB_NOT_AVAILABLE",
            e.CONNECTION_FAILED = "CONNECTION_FAILED",
            e.DB_BLOCKED = "DB_BLOCKED",
            e.DB_UPGRADE_NEEDED = "DB_UPGRADE_NEEDED",
            e.DB_VERSION_ERROR = "DB_VERSION_ERROR",
            e.DB_NAME_REQUIRED = "DB_NAME_REQUIRED",
            e.DB_VERSION_REQUIRED = "DB_VERSION_REQUIRED",
            e.DB_TIMEOUT = "DB_TIMEOUT",
            e.STORE_NAME_REQUIRED = "STORE_NAME_REQUIRED",
            e.STORE_NOT_FOUND = "STORE_NOT_FOUND",
            e.STORE_ALREADY_EXISTS = "STORE_ALREADY_EXISTS",
            e.TRANSACTION_FAILED = "TRANSACTION_FAILED",
            e.TRANSACTION_ABORTED = "TRANSACTION_ABORTED",
            e.READ_ONLY_TRANSACTION_WRITE_ATTEMPT = "READ_ONLY_TRANSACTION_WRITE_ATTEMPT",
            e.INVALID_KEY = "INVALID_KEY",
            e.KEY_ALREADY_EXISTS = "KEY_ALREADY_EXISTS",
            e.DATA_REQUIRED = "DATA_REQUIRED",
            e.INVALID_DATA_TYPE = "INVALID_DATA_TYPE",
            e.DATA_CLONE_ERROR = "DATA_CLONE_ERROR",
            e.DATA_ERROR = "DATA_ERROR",
            e.INSERT_FAILED = "INSERT_FAILED",
            e.UPDATE_FAILED = "UPDATE_FAILED",
            e.GET_FAILED = "GET_FAILED",
            e.DELETE_FAILED = "DELETE_FAILED",
            e.CURSOR_FAILED = "CURSOR_FAILED",
            e.TTL_CLEANUP_FAILED = "TTL_CLEANUP_FAILED",
            e.EXPIRED_DATA_STORE_CLEANUP_FAILED = "EXPIRED_DATA_STORE_CLEANUP_FAILED",
            e.EXPIRED_DATA = "EXPIRED_DATA",
            e.INVALID_DB_INSTANCE = "INVALID_DB_INSTANCE",
            e.DB_REQUIRED = "DB_REQUIRED",
            e.QUOTA_EXCEEDED = "QUOTA_EXCEEDED",
            e.UNKNOWN_ERROR = "UNKNOWN_ERROR",
            e.INVALID_CURSOR_ITERATOR = "INVALID_CURSOR_ITERATOR",
            e.INVALID_CURSOR_QUERY = "INVALID_CURSOR_QUERY",
            e.INVALID_CURSOR_DIRECTION = "INVALID_CURSOR_DIRECTION"
        }(u || (u = {}));
        class l extends n.g.Error {
            constructor(e) {
                super(`ManagedIndexDB failed: ${e}`),
                this.reason = e
            }
        }
        class d {
            constructor(e, t) {
                if (this._db = e,
                this.options = t,
                !this._db)
                    throw new l(u.DB_REQUIRED);
                if ("undefined" != typeof IDBDatabase && !(this._db instanceof IDBDatabase))
                    throw new l(u.INVALID_DB_INSTANCE);
                if ("undefined" == typeof IDBDatabase && (!this._db || "function" != typeof this._db.transaction))
                    throw new l(u.INVALID_DB_INSTANCE)
            }
            get db() {
                return this._db
            }
            async insert(e, t, n) {
                return new Promise( (r, o) => {
                    if (e)
                        if ("object" == typeof t)
                            try {
                                const i = this._db.transaction(e, "readwrite").objectStore(e)
                                  , s = {
                                    ...t
                                };
                                this.options.storeTTL?.[e] && (s.timestamp = Date.now());
                                const a = i.add(s, n);
                                a.onsuccess = () => {
                                    r(s)
                                }
                                ,
                                a.onerror = () => {
                                    o(new l(u.INSERT_FAILED))
                                }
                            } catch (e) {
                                o(new l(e instanceof Error ? e.message : u.INSERT_FAILED))
                            }
                        else
                            o(new l(u.INVALID_DATA_TYPE));
                    else
                        o(new l(u.STORE_NAME_REQUIRED))
                }
                )
            }
            async update(e, t, n) {
                if (!e)
                    throw new l(u.STORE_NAME_REQUIRED);
                if ("object" != typeof t)
                    throw new l(u.INVALID_DATA_TYPE);
                return new Promise( (r, o) => {
                    try {
                        const i = this._db.transaction(e, "readwrite")
                          , s = i.objectStore(e).put(t, n);
                        s.onsuccess = () => {
                            r()
                        }
                        ,
                        s.onerror = () => {
                            o(new l(u.UPDATE_FAILED))
                        }
                    } catch (e) {
                        o(new l(e instanceof Error ? e.message : u.UPDATE_FAILED))
                    }
                }
                )
            }
            async delete(e, t) {
                if (!e)
                    throw new l(u.STORE_NAME_REQUIRED);
                if (null == t)
                    throw new l(u.INVALID_KEY);
                return new Promise( (n, r) => {
                    try {
                        const o = this._db.transaction(e, "readwrite")
                          , i = o.objectStore(e).delete(t);
                        i.onsuccess = () => {
                            n(i.result)
                        }
                        ,
                        i.onerror = () => {
                            r(new l(u.DELETE_FAILED))
                        }
                    } catch (e) {
                        r(new l(e.message))
                    }
                }
                )
            }
            async get(e, t) {
                if (!e)
                    throw new l(u.STORE_NAME_REQUIRED);
                if (null == t)
                    throw new l(u.INVALID_KEY);
                return new Promise( (n, r) => {
                    try {
                        const o = this._db.transaction(e, "readonly")
                          , i = o.objectStore(e).get(t);
                        i.onsuccess = () => {
                            n(i.result)
                        }
                        ,
                        i.onerror = () => {
                            r(new l(u.GET_FAILED))
                        }
                    } catch (e) {
                        r(new l(e instanceof Error ? e.message : u.DATA_ERROR))
                    }
                }
                )
            }
            async cursor(e, t, n, r) {
                if (!e)
                    throw new l(u.STORE_NAME_REQUIRED);
                if (!t || "function" != typeof t)
                    throw new l(u.INVALID_CURSOR_ITERATOR);
                return new Promise( (o, i) => {
                    try {
                        const s = this._db.transaction(e, "readonly")
                          , a = s.objectStore(e).openCursor(n, r);
                        s.oncomplete = () => {
                            o()
                        }
                        ,
                        s.onerror = () => {
                            i(new l(u.CURSOR_FAILED))
                        }
                        ,
                        a.onsuccess = async e => {
                            const n = e.target.result;
                            if (n)
                                try {
                                    await t(n),
                                    n.continue()
                                } catch (e) {
                                    i(new l(e instanceof Error ? e.message : u.CURSOR_FAILED))
                                }
                        }
                        ,
                        a.onerror = () => {
                            i(new l(u.CURSOR_FAILED))
                        }
                    } catch (e) {
                        i(new l(e instanceof Error ? e.message : u.CURSOR_FAILED))
                    }
                }
                )
            }
        }
        async function f(e, t, n) {
            if (!t)
                throw new l(u.STORE_NAME_REQUIRED);
            if ("number" != typeof n || n <= 0)
                throw new l(u.EXPIRED_DATA);
            return new Promise( (r, o) => {
                try {
                    const i = e.transaction(t, "readwrite")
                      , s = i.objectStore(t)
                      , a = s.openCursor()
                      , c = [];
                    a.onsuccess = e => {
                        const t = e.target.result;
                        if (t) {
                            const e = t.value;
                            if (e && "object" == typeof e && "timestamp"in e) {
                                const r = e.timestamp;
                                Date.now() - r > n && c.push(t.key)
                            }
                            t.continue()
                        } else
                            Promise.all(c.map(e => new Promise( (t, n) => {
                                const r = s.delete(e);
                                r.onsuccess = () => {
                                    t()
                                }
                                ,
                                r.onerror = () => {
                                    n()
                                }
                            }
                            ))).then( () => r()).catch( () => o(new l(u.TTL_CLEANUP_FAILED)))
                    }
                    ,
                    a.onerror = () => {
                        o(new l(u.TTL_CLEANUP_FAILED))
                    }
                    ,
                    i.oncomplete = () => {
                        0 === c.length && r()
                    }
                    ,
                    i.onerror = () => {
                        o(new l(u.TRANSACTION_FAILED))
                    }
                } catch (e) {
                    o(new l(e instanceof Error ? e.message : u.TRANSACTION_FAILED))
                }
            }
            )
        }
        const h = ["/ae/en/", "/ar/es/", "/at/de/", "/at/en/", "/au/en/", "/be/nl/", "/be/de/", "/be/en/", "/be/fr/", "/bg/en/", "/ca/en/", "/ca/fr/", "/ch/de/", "/ch/en/", "/ch/fr/", "/ch/it/", "/cl/es/", "/cn/zh/", "/cz/cs/", "/cz/en/", "/de/de/", "/dk/da/", "/dk/en/", "/eg/en/", "/es/es/", "/es/ca/", "/fi/en/", "/fr/fr/", "/gb/en/", "/gr/el/", "/hr/en/", "/hu/hu/", "/hu/en/", "/id/en/", "/ie/en/", "/il/en/", "/in/en/", "/it/it/", "/jp/ja/", "/jp/en/", "/kr/ko/", "/kr/en/", "/lu/fr/", "/lu/de/", "/lu/en/", "/ma/fr/", "/ma/en/", "/mx/es/", "/my/en/", "/nl/nl/", "/nl/en/", "/no/no/", "/no/en/", "/nz/en/", "/ph/en/", "/pl/pl/", "/pr/es/", "/pt/pt/", "/pt/en/", "/ro/en/", "/ru/ru/", "/sa/en/", "/se/sv/", "/se/en/", "/sg/en/", "/si/en/", "/sk/en/", "/th/th/", "/tr/tr/", "/tw/zh/", "/us/en/", "/us/es/", "/uy/es/", "/vn/en/", "/za/en/", "/xl/es/"];
        function p() {
            if (function() {
                const e = window.location.pathname
                  , t = e.endsWith("/") ? e : `${e}/`;
                return "/" === t || /^\/[a-z]{2}\/?$/.test(t) || h.includes(t)
            }())
                return "homepage";
            if (window.location.origin.includes("gs-checkout.nike.com"))
                return "gs-checkout";
            const e = function(e) {
                const t = new Set(h.map(e => e.split("/")[1]))
                  , n = h.map(e => e.replace(/^\/|\/$/g, "").replace("/", "\\/")).join("|")
                  , r = Array.from(t).join("|")
                  , o = new RegExp(`^/(?:${n}|(${r}))(?=/|$)`,"i");
                return e.replace(o, "") || "/"
            }(window.location.href.replace(window.location.origin, ""))
              , t = Object.entries({
                "/t/": "pdp",
                "/t-dark/": "pdp",
                "/u-dark/": "pdp",
                "/u/": "pdp",
                "/w/": "pw",
                "/w-dark/": "pw",
                "/w?q=": "onsite search",
                "/w-dark?q=": "onsite search",
                "/cart": "cart",
                "/checkout": "checkout",
                "/member": "member",
                "/help": "help",
                "/inbox": "inbox",
                "/favorites": "favorites",
                "/size-fit": "sizechart",
                "/retail": "retail",
                "/jordan": "landingpage",
                "/men": "landingpage",
                "/women": "landingpage",
                "/kids": "landingpage"
            }).find( ([t]) => e.includes(t));
            if (t && "retail" === t[1]) {
                const e = document.querySelector("article");
                return e?.id ? e.id.replace("-", " ") : t[1]
            }
            return t ? t[1] : null
        }
        var m = n(139);
        function g(e, t) {
            return {
                [`${e.toLowerCase()}_version`]: t
            }
        }
        function y(e, t) {
            const n = g(e, t);
            return window.experimentation?.platformsVersions && Array.isArray(window.experimentation.platformsVersions) ? window.experimentation.platformsVersions.reduce( (e, {platform: t, version: n}) => ({
                ...e,
                ...g(t, n)
            }), n) : n
        }
        class w {
            constructor(e, t) {
                this.config = e,
                this.logSink = t,
                this.getStackTrace = e => `FILE: ${String(e[0].fileName)} LINE: ${String(e[0].lineNumber)} Column: ${String(e[0].columnNumber)} FUNCTION: ${String(e[0].functionName)}`
            }
            getReporterParams() {
                return [this.config, this.logSink]
            }
            extractErrorMetadata(e, t) {
                const n = Object.getOwnPropertyNames(e).filter(e => "name" !== e && "message" !== e && "stack" !== e).reduce( (t, n) => (t[n] = e[n],
                t), {});
                return {
                    errorMessage: e.message || "Unknown error message",
                    ...n,
                    errorStack: this.getStackTrace(t)
                }
            }
            async debug(e, t, n) {
                if (n instanceof Error) {
                    const e = await m.fromError(n);
                    n = this.extractErrorMetadata(n, e)
                }
                if (n?.error) {
                    const {error: e, ...t} = n;
                    if (e instanceof Error) {
                        const r = await m.fromError(e);
                        n = {
                            ...t,
                            ...this.extractErrorMetadata(e, r)
                        }
                    }
                }
                const r = {
                    severity: e,
                    logMessage: t,
                    ...n,
                    ...y(this.config.platform, this.config.version)
                };
                o[e](this.config.platform, r),
                this.logSink.log(this.config.platform, r)
            }
            info(e, t) {
                this.debug("info", e, t)
            }
            error(e, t) {
                this.debug("error", e, t)
            }
            log(e, t) {
                this.debug("log", e, t)
            }
            warn(e, t) {
                this.debug("warn", e, t)
            }
        }
        class v {
            constructor(e, t=8e3, n=100) {
                this.loggerProvider = e,
                this.timeoutMs = t,
                this.checkIntervalMs = n,
                this._queue = [],
                this.loggerFn = null,
                this.isReady = !1,
                this.hasTimedOut = !1,
                this.checkInterval = null,
                this.timeoutTimer = null,
                this.startChecking()
            }
            startChecking() {
                this.checkLogger(),
                this.checkInterval = setInterval( () => {
                    this.checkLogger()
                }
                , this.checkIntervalMs),
                this.timeoutTimer = setTimeout( () => {
                    this.handleTimeout()
                }
                , this.timeoutMs)
            }
            checkLogger() {
                if (this.isReady || this.hasTimedOut)
                    return;
                const e = this.loggerProvider();
                e && (this.loggerFn = e,
                this.isReady = !0,
                this.flushQueue(),
                this.cleanup())
            }
            handleTimeout() {
                this.isReady || (this.hasTimedOut = !0,
                this._queue = [],
                this.cleanup())
            }
            flushQueue() {
                if (this.loggerFn && 0 !== this._queue.length) {
                    for (const {eventName: e, data: t} of this._queue)
                        this.loggerFn(e, t);
                    this._queue = []
                }
            }
            cleanup() {
                this.checkInterval && (clearInterval(this.checkInterval),
                this.checkInterval = null),
                this.timeoutTimer && (clearTimeout(this.timeoutTimer),
                this.timeoutTimer = null)
            }
            log(e, t) {
                this.hasTimedOut || (this.isReady && this.loggerFn ? this.loggerFn(e, t) : this._queue.push({
                    eventName: e,
                    data: t
                }))
            }
            get ready() {
                return this.isReady
            }
            get timedOut() {
                return this.hasTimedOut
            }
            get queue() {
                return this._queue
            }
        }
        function b() {
            const e = (e, t) => {
                const n = function(e) {
                    if ("object" != typeof e || null === e)
                        return {};
                    const t = {};
                    for (const [n,r] of Object.entries(e))
                        if (null != r)
                            if ("string" == typeof r || "number" == typeof r || "boolean" == typeof r)
                                t[n] = r;
                            else if (Array.isArray(r) || "object" == typeof r)
                                try {
                                    t[n] = JSON.stringify(r)
                                } catch (e) {
                                    o.warn(`Failed to serialize attribute "${n}":`, e),
                                    t[n] = String(r)
                                }
                            else
                                t[n] = String(r);
                    return t
                }(t)
                  , r = {
                    eventType: "PageAction",
                    actionName: e,
                    ...function() {
                        const e = {
                            appName: "eshopworld",
                            currentUrl: window.location.href,
                            referrerUrl: document.referrer || ""
                        }
                          , t = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                        e.deviceType = t ? "Mobile" : "Desktop";
                        const n = navigator.userAgent;
                        return n.includes("Chrome") && !n.includes("Edg") ? e.userAgentName = "Chrome" : n.includes("Safari") && !n.includes("Chrome") ? e.userAgentName = "Safari" : n.includes("Firefox") ? e.userAgentName = "Firefox" : n.includes("Edg") ? e.userAgentName = "Edge" : e.userAgentName = "Unknown",
                        n.includes("Windows") ? e.userAgentOS = "Windows" : n.includes("Android") ? e.userAgentOS = "Android" : n.includes("iPhone") || n.includes("iPad") ? e.userAgentOS = "iPhone" : n.includes("Mac") ? e.userAgentOS = "Mac" : n.includes("Linux") ? e.userAgentOS = "Linux" : e.userAgentOS = "Unknown",
                        e
                    }(),
                    ...n
                };
                fetch("https://insights-collector.newrelic.com/v1/accounts/714737/events", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Insert-Key": "2lrxTiTBk6-5ot3iFiVRFwzX40tQTtw7"
                    },
                    body: JSON.stringify(r)
                }).catch(e => {
                    o.error("Failed to send event to New Relic:", e)
                }
                )
            }
            ;
            window.experimentation || (window.experimentation = {});
            window.experimentation.newrelic = {
                addPageAction: (t, n) => {
                    e(t, n)
                }
                ,
                noticeError: (t, n) => {
                    const r = {
                        errorMessage: t.message,
                        errorStack: t.stack,
                        "error.class": t.name,
                        ...n
                    };
                    e("JavaScriptError", r)
                }
                ,
                loader_config: {
                    licenseKey: "f6e2d580c7"
                }
            }
        }
        function E(e) {
            var t, n;
            t = e.platform,
            n = e.version,
            window.experimentation || (window.experimentation = {}),
            window.experimentation.platformsVersions || (window.experimentation.platformsVersions = []),
            window.experimentation.platformsVersions.push({
                platform: t,
                version: n
            });
            const r = new v( () => {
                const e = function() {
                    if (window.location.href.includes("gs-checkout")) {
                        const e = window.experimentation.newrelic;
                        if (e && "function" == typeof e.addPageAction)
                            return e;
                        b();
                        const t = window.experimentation.newrelic;
                        return t && "function" == typeof t.addPageAction ? t : void o.warn("[experimentation-utils] Failed to create mock New Relic agent")
                    }
                    const e = window.newrelic;
                    if (e && "function" == typeof e.addPageAction)
                        return e
                }();
                return e?.addPageAction ? e.addPageAction.bind(e) : void 0
            }
            );
            return new w(e,r)
        }
        function _(e) {
            const t = new RegExp(`(^| )${e}=([^;]+)`)
              , n = document.cookie.match(t);
            return n ? n[2] : null
        }
        const A = (e, t) => {
            if (window?.webShellClient?.optimization?.logger)
                return window.webShellClient.optimization.logger.info(e, t)
        }
          , N = (e, t) => {
            if (window?.webShellClient?.optimization?.logger)
                return window.webShellClient.optimization.logger.warn(e, t)
        }
          , T = (e, t) => {
            if (window?.webShellClient?.optimization?.logger)
                return window.webShellClient.optimization.logger.error(e, t)
        }
          , I = (e, t) => {
            if (window?.webShellClient?.optimization?.logger)
                return window.webShellClient.optimization.logger.log(e, t)
        }
        ;
        const S = "nikecom"
          , O = e => ({
            locale: {
                language: e?.language || "en",
                country: e?.country || "us"
            },
            langRegion: e?.langRegion || "en-US",
            currency: e?.currency || "USD"
        })
          , C = () => O(window.webShellClient?.locale?.get());
        async function k() {
            const e = window.webShellClient;
            if (await e.identity.getIsLoggedIn()) {
                const {registeredCountry: t} = await e.identity.getUserProfile();
                return t
            }
            return e.userLocation.current.country
        }
        const D = (e, t) => {
            try {
                const n = p()
                  , {pageName: r, pageDetail: o} = ( (e, t) => {
                    let n, r;
                    const o = e.location?.pathname || "";
                    try {
                        switch (t) {
                        case "pdp":
                            r = document.querySelector("#pdp_product_title")?.innerText.toLowerCase();
                            break;
                        case "pw":
                            r = e.__NEXT_DATA__?.props?.pageProps?.initialState?.Wall?.facetNav?.analytics?.legacyPageName?.toLowerCase() ?? void 0;
                            break;
                        case "homepage":
                            n = e.__NEXT_DATA__?.props?.pageProps?.navConfig?.pageDetail,
                            r = n;
                            break;
                        case "landing page":
                            n = e.__NEXT_DATA__?.props?.pageProps?.navConfig?.globalNavPageName,
                            r = e.__NEXT_DATA__?.props?.pageProps?.navConfig?.pageDetail;
                            break;
                        case "cart":
                            n = "cart",
                            r = "view";
                            break;
                        case "help":
                            n = "help";
                            const t = o.split("/");
                            2 === t.length ? r = "home" : o.includes("/search/") ? r = "search" : o.includes("/a/") && (r = `article>${t[t.length - 1]}`);
                            break;
                        case "checkout":
                            r = "shipping";
                            break;
                        case "onsite search":
                            r = e.__NEXT_DATA__?.props?.pageProps?.initialState?.Wall?.pageData?.totalResources ? "results found" : "no search results";
                            break;
                        case "member":
                            n = "member",
                            r = ["inbox", "profile", "settings"].find(e => o.includes(e))
                        }
                        return {
                            pageName: n,
                            pageDetail: r
                        }
                    } catch (e) {
                        return T("Failed to get page name and detail", {
                            error: "object" == typeof e && null !== e ? e : {
                                message: String(e)
                            }
                        }),
                        {
                            pageName: void 0,
                            pageDetail: void 0
                        }
                    }
                }
                )(e, n)
                  , i = (e => {
                    let t;
                    switch (e) {
                    case "pdp":
                    case "homepage":
                    case "landing page":
                    case "cart":
                    case "checkout":
                        t = e;
                        break;
                    case "pw":
                        t = "product wall"
                    }
                    return t
                }
                )(n)
                  , {locale: s, langRegion: a, currency: c} = t ? O(t) : C()
                  , u = (e => ({
                    domain: "www.nike.com",
                    backendPlatform: "cloud",
                    ...e && {
                        name: e
                    }
                }))(i)
                  , l = ( (e, t, n) => {
                    const r = {
                        experienceType: S,
                        ...t && {
                            pageType: t
                        },
                        ...n && {
                            pageDetail: n
                        }
                    };
                    return "landing page" === t || "homepage" === t ? {
                        ...r,
                        ...e && {
                            pageName: `${S}>${e}`
                        }
                    } : {
                        ...r,
                        ...n && {
                            pageName: `${S}>${t}>${n}`
                        }
                    }
                }
                )(r, n, o);
                return {
                    app: u,
                    view: l,
                    currency: c,
                    language: a,
                    locale: s
                }
            } catch (e) {
                return T("Failed to get common properties", {
                    error: "object" == typeof e && null !== e ? e : {
                        message: String(e)
                    }
                }),
                {
                    app: {
                        backendPlatform: "",
                        domain: "",
                        name: "",
                        version: ""
                    },
                    view: {
                        experienceType: "",
                        pageName: "",
                        pageType: "",
                        pageDetail: ""
                    },
                    language: "",
                    locale: {
                        country: "",
                        language: ""
                    },
                    currency: ""
                }
            }
        }
          , x = ["adtargeting_behavioralevents", "performance", "personalization_targeted_comms"]
          , L = ["au", "id", "in", "jp", "kr", "my", "nz", "ph", "sg", "th", "tw", "vn", "mx"];
        async function R(e) {
            return await async function() {
                const e = window.NikePrivacy;
                if (!e?.isEnabled)
                    return !1;
                await e.isInitialized();
                const t = window.NikePrivacy?.permissions.get();
                if (t) {
                    const e = t.flatMap( ({category: e, isEnabled: t}) => t ? [e.toLocaleLowerCase()] : []);
                    return x.every(t => e.includes(t))
                }
                return !1
            }() || function(e) {
                const t = e.toLocaleLowerCase();
                return L.includes(t)
            }(e)
        }
        async function F(e, t) {
            let n = !1;
            try {
                if (Y("bypassPrivacy"))
                    return H(),
                    !0;
                if (void 0 !== t?.privacy?.hasConsent)
                    n = t.privacy.hasConsent;
                else {
                    const e = await k();
                    n = await R(e)
                }
                n || N("Appropriate UGP permissions have not been given. Cannot fetch Adobe Target locations.", {
                    errorMessage: `Appropriate UGP permissions have not been given.${JSON.stringify(t)}`,
                    locations: e
                })
            } catch (t) {
                return "Initialize guest error" === String("object" == typeof t && null !== t && "message"in t ? t.message : t) ? N("Failed to find locations", {
                    error: "object" == typeof t && null !== t ? t : {
                        message: String(t)
                    },
                    locations: e.length ? e : null
                }) : T("Failed to find locations", {
                    error: "object" == typeof t && null !== t ? t : {
                        message: String(t)
                    },
                    locations: e.length ? e : null
                }),
                !1
            }
            return n
        }
        const P = "ambiguous"
          , U = "2iv4Qa7rFEipAs4iE850BkBpTYQvlAFZ"
          , B = "Universal Holdout Disposition"
          , j = {
            dbName: "uh",
            dbVersion: 3,
            storeName: "current_config",
            keyPath: "id"
        }
          , M = {
            dbName: "experimentation",
            dbVersion: 3,
            storeName: "experiments",
            keyPath: "id"
        }
          , $ = async () => {
            const [e,n,r,o,i] = await Promise.all([t.runAsync( () => window.webShellClient), t.runAsync( () => window.NikePrivacy), t.runAsync( () => window.analyticsClient), t.runAsync( () => (async () => window.webShellClient?.analytics?.isInitialized ? await t.runAsync( () => window.webShellClient.analytics.isInitialized()) ? {
                status: !0
            } : {
                status: !1,
                error: "Analytics is not initialized"
            } : {
                status: !1,
                error: "Analytics client not present"
            })()), t.runAsync( () => window.webShellClient.analytics?.track)]);
            return e ? n ? r ? o || i ? i ? {
                status: !0
            } : (T("Analytics Track is not available"),
            {
                status: !1,
                error: "Analytics Track is not available"
            }) : (T("Analytics is not initialized & Analytics Track is not available"),
            {
                status: !1,
                error: "Analytics is not initialized & Analytics Track is not available"
            }) : (N("Analytics Client is not available"),
            {
                status: !1,
                error: "Analytics Client is not available"
            }) : (N("Nike Privacy is not available"),
            {
                status: !1,
                error: "Nike Privacy is not available"
            }) : (T("WebShellClient is not available"),
            {
                status: !1,
                error: "WebShellClient is not available"
            })
        }
          , V = async e => {
            try {
                return e && e && (o = e.locale) && "string" == typeof o.country && "string" == typeof o.language && "string" == typeof o.currency && "string" == typeof o.langRegion && (r = e.user) && (void 0 === r.upmId || "string" == typeof r.upmId) && "string" == typeof r.fpid && (n = e.analytics) && "function" == typeof n.track && (t = e.privacy) && "boolean" == typeof t.hasConsent ? {
                    status: !0
                } : (T("Invalid context", {
                    data: e
                }),
                {
                    status: !1,
                    error: "Invalid context"
                })
            } catch (t) {
                return T("Invalid context", {
                    data: e
                }),
                {
                    status: !1,
                    error: JSON.stringify(t)
                }
            }
            var t, n, r, o
        }
          , J = () => {
            const {country: e, language: t} = window.webShellClient.locale.get();
            return {
                country: e?.toUpperCase(),
                language: t
            }
        }
          , G = async () => ({
            track: window.analyticsClient.track
        })
          , z = async () => {
            const e = await (window.webShellClient?.identity.getUserProfile());
            return {
                upmId: e?.upmId,
                fpid: _("ni_d")
            }
        }
          , q = async e => {
            try {
                if (e) {
                    const t = await V(e);
                    return t.status ? {
                        status: !0,
                        ...e
                    } : {
                        status: !1,
                        error: t.error
                    }
                }
                return await (async () => {
                    try {
                        const {status: e, error: t} = await $();
                        return e ? {
                            locale: J(),
                            user: await z(),
                            analytics: await G(),
                            status: e
                        } : {
                            status: e,
                            error: t || "Context build failed"
                        }
                    } catch (e) {
                        return {
                            status: !1,
                            error: `Context build failed with ${JSON.stringify(e)}`
                        }
                    }
                }
                )()
            } catch (e) {
                return {
                    status: !1,
                    error: `error getting context. ${JSON.stringify(e)}`
                }
            }
        }
          , W = async (e, t) => {
            if (window.alloy)
                return {
                    status: !0
                };
            const n = t || await q();
            return await F(e, n) ? (await (async () => window.alloy ? {
                status: !0
            } : new Promise(e => {
                const t = document.createElement("script");
                return t.src = "https://www.nike.com/assets/vendor/adobe-alloy/2.32.1/alloy.js",
                t.async = !0,
                t.id = "alloy-from-optclient",
                t.onload = () => {
                    e({
                        status: !0
                    })
                }
                ,
                t.onerror = () => {
                    T("Alloy Inject failed"),
                    e({
                        status: !1,
                        error: "Alloy Inject failed"
                    })
                }
                ,
                document.head.appendChild(t),
                {
                    status: !0
                }
            }
            ))(),
            {
                status: !0
            }) : {
                status: !1,
                error: "Alloy fallback failed due to privacy permissions"
            }
        }
        ;
        function X(e) {
            const t = new URLSearchParams(window.location.search)
              , n = new URLSearchParams;
            return t.forEach( (e, t) => {
                n.set(t.toLowerCase(), e)
            }
            ),
            n.get((e || "").toLowerCase()) || null
        }
        function H() {
            const e = document.createElement("div");
            e.setAttribute("data-testid", "privacy-bypass-toast"),
            e.style.cssText = "\n      position: fixed;\n      top: 20px;\n      left: 50%;\n      transform: translateX(-50%);\n      background-color: rgba(0, 0, 0, 0.8);\n      color: white;\n      padding: 12px 20px;\n      border-radius: 4px;\n      font-family: Arial, sans-serif;\n      font-size: 14px;\n      z-index: 9999;\n      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\n      display: flex;\n      align-items: center;\n      gap: 10px;\n    ";
            const t = document.createElement("div");
            t.style.display = "flex",
            t.style.flexDirection = "column";
            const n = document.createElement("div");
            n.textContent = "🔓 Privacy checks are being bypassed";
            const r = document.createElement("div");
            r.textContent = "Will persist until browser tab is closed",
            r.style.fontSize = "12px",
            r.style.opacity = "0.9",
            r.style.textAlign = "center",
            t.appendChild(n),
            t.appendChild(r);
            const o = document.createElement("button");
            o.textContent = "✕",
            o.style.cssText = "\n      background: none;\n      border: none;\n      color: white;\n      font-size: 16px;\n      cursor: pointer;\n      padding: 0 0 0 10px;\n      margin-left: auto;\n    ",
            o.title = "Close",
            o.onclick = () => {
                e?.parentNode?.removeChild(e)
            }
            ,
            e.appendChild(t),
            e.appendChild(o),
            document.body.appendChild(e),
            setTimeout( () => {
                e.parentNode && e.parentNode.removeChild(e)
            }
            , 15e3)
        }
        function Y(e) {
            if ("true" === new URLSearchParams(window.location.search).get(e))
                return sessionStorage.setItem(e, "true"),
                !0;
            return "true" === sessionStorage.getItem(e)
        }
        const Q = new Map
          , K = async e => {
            const t = Q.get(e.dbName);
            if (t)
                return t;
            try {
                const t = await async function(e, t) {
                    if (!e.dbName)
                        throw new l(u.DB_NAME_REQUIRED);
                    if (!e.dbVersion)
                        throw new l(u.DB_VERSION_REQUIRED);
                    return new Promise( (n, r) => {
                        try {
                            let o = !0
                              , i = null;
                            e.timeout && (i = setTimeout( () => {
                                o && (o = !1,
                                r(new l(u.DB_TIMEOUT)))
                            }
                            , e.timeout));
                            const s = () => {
                                o = !1,
                                i && (clearTimeout(i),
                                i = null)
                            }
                              , a = window.indexedDB.open(e.dbName, e.dbVersion);
                            a.onsuccess = async t => {
                                s();
                                const o = t.target.result
                                  , i = new d(o,e);
                                if (e.storeTTL)
                                    for (const t in e.storeTTL)
                                        try {
                                            await f(o, t, e.storeTTL[t])
                                        } catch (e) {
                                            return void r(c(new l(u.EXPIRED_DATA_STORE_CLEANUP_FAILED), {
                                                storeName: t
                                            }))
                                        }
                                n(i)
                            }
                            ,
                            a.onerror = () => {
                                s(),
                                r(new l(u.CONNECTION_FAILED))
                            }
                            ,
                            a.onblocked = () => {
                                s(),
                                r(new l(u.DB_BLOCKED))
                            }
                            ,
                            a.onupgradeneeded = async n => {
                                const r = n.target.result
                                  , o = r.version
                                  , i = e.dbVersion;
                                t && t(r, o, i)
                            }
                        } catch (e) {
                            r(new l(e instanceof Error ? e.message : u.UNKNOWN_ERROR))
                        }
                    }
                    )
                }({
                    dbName: e.dbName,
                    dbVersion: e.dbVersion
                }, t => {
                    t.objectStoreNames.contains(e.storeName) || t.createObjectStore(e.storeName, {
                        keyPath: e.keyPath
                    })
                }
                );
                return Q.set(e.dbName, t),
                t
            } catch (e) {
                return void T("Failed to open IndexedDB", {
                    error: e
                })
            }
        }
          , Z = async (e, t) => {
            try {
                const n = await K(t);
                n && await n.update(t.storeName, e)
            } catch (e) {
                T("Failed to write to IndexedDB cache", {
                    error: e
                })
            }
        }
          , ee = async (e, t) => {
            try {
                const n = await K(t);
                if (n) {
                    return await n.get(t.storeName, e) || null
                }
                return null
            } catch (e) {
                T("Failed to read from IndexedDB cache", {
                    error: e
                })
            }
            return null
        }
          , te = async (e, t, n) => {
            if ("undefined" != typeof indexedDB && null !== indexedDB)
                try {
                    const r = {
                        id: n,
                        ...{
                            ...e,
                            cachedAt: Date.now()
                        }
                    };
                    await Z(r, t)
                } catch (e) {
                    T("Failed to write to IndexedDB cache", {
                        error: e
                    })
                }
        }
          , ne = async e => {
            const t = {
                holdoutGroups: []
            };
            try {
                const n = await ee(e, j)
                  , r = (new Date).getTime()
                  , o = n ? r - n.lastUpdatedTimeStamp : 1 / 0;
                if (!n || o > 36e5) {
                    const n = await (async () => {
                        try {
                            const e = await fetch("https://www.nike.com/static/experience/experimentation-eng/universal-holdout/config-web.json");
                            return await e.json()
                        } catch (e) {
                            T("[Holdout] Error fetching holdout config", e)
                        }
                    }
                    )();
                    return n ? (await Z({
                        id: e,
                        lastUpdatedTimeStamp: r,
                        configValue: n
                    }, j),
                    n) : t
                }
                return n?.configValue || t
            } catch (e) {
                return T("[Holdout] Error getting holdout rules", e),
                t
            }
        }
        ;
        class re {
            equals(e) {
                return this.getType().runtime.util.equals(this.getType(), this, e)
            }
            clone() {
                return this.getType().runtime.util.clone(this)
            }
            fromBinary(e, t) {
                const n = this.getType().runtime.bin
                  , r = n.makeReadOptions(t);
                return n.readMessage(this, r.readerFactory(e), e.byteLength, r),
                this
            }
            fromJson(e, t) {
                const n = this.getType()
                  , r = n.runtime.json
                  , o = r.makeReadOptions(t);
                return r.readMessage(n, e, o, this),
                this
            }
            fromJsonString(e, t) {
                let n;
                try {
                    n = JSON.parse(e)
                } catch (e) {
                    throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${e instanceof Error ? e.message : String(e)}`)
                }
                return this.fromJson(n, t)
            }
            toBinary(e) {
                const t = this.getType().runtime.bin
                  , n = t.makeWriteOptions(e)
                  , r = n.writerFactory();
                return t.writeMessage(this, r, n),
                r.finish()
            }
            toJson(e) {
                const t = this.getType().runtime.json
                  , n = t.makeWriteOptions(e);
                return t.writeMessage(this, n)
            }
            toJsonString(e) {
                var t;
                const n = this.toJson(e);
                return JSON.stringify(n, null, null !== (t = null == e ? void 0 : e.prettySpaces) && void 0 !== t ? t : 0)
            }
            toJSON() {
                return this.toJson({
                    emitDefaultValues: !0
                })
            }
            getType() {
                return Object.getPrototypeOf(this).constructor
            }
        }
        function oe(e, t) {
            if (!e)
                throw new Error(t)
        }
        function ie(e) {
            if ("number" != typeof e)
                throw new Error("invalid int 32: " + typeof e);
            if (!Number.isInteger(e) || e > 2147483647 || e < -2147483648)
                throw new Error("invalid int 32: " + e)
        }
        function se(e) {
            if ("number" != typeof e)
                throw new Error("invalid uint 32: " + typeof e);
            if (!Number.isInteger(e) || e > 4294967295 || e < 0)
                throw new Error("invalid uint 32: " + e)
        }
        function ae(e) {
            if ("number" != typeof e)
                throw new Error("invalid float 32: " + typeof e);
            if (Number.isFinite(e) && (e > 34028234663852886e22 || e < -34028234663852886e22))
                throw new Error("invalid float 32: " + e)
        }
        const ce = Symbol("@bufbuild/protobuf/enum-type");
        function ue(e) {
            const t = e[ce];
            return oe(t, "missing enum type on enum object"),
            t
        }
        function le(e, t, n, r) {
            e[ce] = de(t, n.map(t => ({
                no: t.no,
                name: t.name,
                localName: e[t.no]
            })), r)
        }
        function de(e, t, n) {
            const r = Object.create(null)
              , o = Object.create(null)
              , i = [];
            for (const e of t) {
                const t = he(e);
                i.push(t),
                r[e.name] = t,
                o[e.no] = t
            }
            return {
                typeName: e,
                values: i,
                findName: e => r[e],
                findNumber: e => o[e]
            }
        }
        function fe(e, t, n) {
            const r = {};
            for (const e of t) {
                const t = he(e);
                r[t.localName] = t.no,
                r[t.no] = t.localName
            }
            return le(r, e, t, n),
            r
        }
        function he(e) {
            return "localName"in e ? e : Object.assign(Object.assign({}, e), {
                localName: e.name
            })
        }
        function pe() {
            let e = 0
              , t = 0;
            for (let n = 0; n < 28; n += 7) {
                let r = this.buf[this.pos++];
                if (e |= (127 & r) << n,
                !(128 & r))
                    return this.assertBounds(),
                    [e, t]
            }
            let n = this.buf[this.pos++];
            if (e |= (15 & n) << 28,
            t = (112 & n) >> 4,
            !(128 & n))
                return this.assertBounds(),
                [e, t];
            for (let n = 3; n <= 31; n += 7) {
                let r = this.buf[this.pos++];
                if (t |= (127 & r) << n,
                !(128 & r))
                    return this.assertBounds(),
                    [e, t]
            }
            throw new Error("invalid varint")
        }
        function me(e, t, n) {
            for (let r = 0; r < 28; r += 7) {
                const o = e >>> r
                  , i = !(o >>> 7 == 0 && 0 == t)
                  , s = 255 & (i ? 128 | o : o);
                if (n.push(s),
                !i)
                    return
            }
            const r = e >>> 28 & 15 | (7 & t) << 4
              , o = !!(t >> 3);
            if (n.push(255 & (o ? 128 | r : r)),
            o) {
                for (let e = 3; e < 31; e += 7) {
                    const r = t >>> e
                      , o = !(r >>> 7 == 0)
                      , i = 255 & (o ? 128 | r : r);
                    if (n.push(i),
                    !o)
                        return
                }
                n.push(t >>> 31 & 1)
            }
        }
        const ge = 4294967296;
        function ye(e) {
            const t = "-" === e[0];
            t && (e = e.slice(1));
            const n = 1e6;
            let r = 0
              , o = 0;
            function i(t, i) {
                const s = Number(e.slice(t, i));
                o *= n,
                r = r * n + s,
                r >= ge && (o += r / ge | 0,
                r %= ge)
            }
            return i(-24, -18),
            i(-18, -12),
            i(-12, -6),
            i(-6),
            t ? be(r, o) : ve(r, o)
        }
        function we(e, t) {
            if (({lo: e, hi: t} = function(e, t) {
                return {
                    lo: e >>> 0,
                    hi: t >>> 0
                }
            }(e, t)),
            t <= 2097151)
                return String(ge * t + e);
            const n = 16777215 & (e >>> 24 | t << 8)
              , r = t >> 16 & 65535;
            let o = (16777215 & e) + 6777216 * n + 6710656 * r
              , i = n + 8147497 * r
              , s = 2 * r;
            const a = 1e7;
            return o >= a && (i += Math.floor(o / a),
            o %= a),
            i >= a && (s += Math.floor(i / a),
            i %= a),
            s.toString() + Ee(i) + Ee(o)
        }
        function ve(e, t) {
            return {
                lo: 0 | e,
                hi: 0 | t
            }
        }
        function be(e, t) {
            return t = ~t,
            e ? e = 1 + ~e : t += 1,
            ve(e, t)
        }
        const Ee = e => {
            const t = String(e);
            return "0000000".slice(t.length) + t
        }
        ;
        function _e(e, t) {
            if (e >= 0) {
                for (; e > 127; )
                    t.push(127 & e | 128),
                    e >>>= 7;
                t.push(e)
            } else {
                for (let n = 0; n < 9; n++)
                    t.push(127 & e | 128),
                    e >>= 7;
                t.push(1)
            }
        }
        function Ae() {
            let e = this.buf[this.pos++]
              , t = 127 & e;
            if (!(128 & e))
                return this.assertBounds(),
                t;
            if (e = this.buf[this.pos++],
            t |= (127 & e) << 7,
            !(128 & e))
                return this.assertBounds(),
                t;
            if (e = this.buf[this.pos++],
            t |= (127 & e) << 14,
            !(128 & e))
                return this.assertBounds(),
                t;
            if (e = this.buf[this.pos++],
            t |= (127 & e) << 21,
            !(128 & e))
                return this.assertBounds(),
                t;
            e = this.buf[this.pos++],
            t |= (15 & e) << 28;
            for (let t = 5; 128 & e && t < 10; t++)
                e = this.buf[this.pos++];
            if (128 & e)
                throw new Error("invalid varint");
            return this.assertBounds(),
            t >>> 0
        }
        const Ne = function() {
            const e = new DataView(new ArrayBuffer(8));
            if ("function" == typeof BigInt && "function" == typeof e.getBigInt64 && "function" == typeof e.getBigUint64 && "function" == typeof e.setBigInt64 && "function" == typeof e.setBigUint64 && ("object" != typeof process || "object" != typeof process.env || "1" !== process.env.BUF_BIGINT_DISABLE)) {
                const t = BigInt("-9223372036854775808")
                  , n = BigInt("9223372036854775807")
                  , r = BigInt("0")
                  , o = BigInt("18446744073709551615");
                return {
                    zero: BigInt(0),
                    supported: !0,
                    parse(e) {
                        const r = "bigint" == typeof e ? e : BigInt(e);
                        if (r > n || r < t)
                            throw new Error(`int64 invalid: ${e}`);
                        return r
                    },
                    uParse(e) {
                        const t = "bigint" == typeof e ? e : BigInt(e);
                        if (t > o || t < r)
                            throw new Error(`uint64 invalid: ${e}`);
                        return t
                    },
                    enc(t) {
                        return e.setBigInt64(0, this.parse(t), !0),
                        {
                            lo: e.getInt32(0, !0),
                            hi: e.getInt32(4, !0)
                        }
                    },
                    uEnc(t) {
                        return e.setBigInt64(0, this.uParse(t), !0),
                        {
                            lo: e.getInt32(0, !0),
                            hi: e.getInt32(4, !0)
                        }
                    },
                    dec: (t, n) => (e.setInt32(0, t, !0),
                    e.setInt32(4, n, !0),
                    e.getBigInt64(0, !0)),
                    uDec: (t, n) => (e.setInt32(0, t, !0),
                    e.setInt32(4, n, !0),
                    e.getBigUint64(0, !0))
                }
            }
            const t = e => oe(/^-?[0-9]+$/.test(e), `int64 invalid: ${e}`)
              , n = e => oe(/^[0-9]+$/.test(e), `uint64 invalid: ${e}`);
            return {
                zero: "0",
                supported: !1,
                parse: e => ("string" != typeof e && (e = e.toString()),
                t(e),
                e),
                uParse: e => ("string" != typeof e && (e = e.toString()),
                n(e),
                e),
                enc: e => ("string" != typeof e && (e = e.toString()),
                t(e),
                ye(e)),
                uEnc: e => ("string" != typeof e && (e = e.toString()),
                n(e),
                ye(e)),
                dec: (e, t) => function(e, t) {
                    let n = ve(e, t);
                    const r = 2147483648 & n.hi;
                    r && (n = be(n.lo, n.hi));
                    const o = we(n.lo, n.hi);
                    return r ? "-" + o : o
                }(e, t),
                uDec: (e, t) => we(e, t)
            }
        }();
        var Te, Ie;
        function Se(e, t, n) {
            if (t === n)
                return !0;
            if (e == Te.BYTES) {
                if (!(t instanceof Uint8Array && n instanceof Uint8Array))
                    return !1;
                if (t.length !== n.length)
                    return !1;
                for (let e = 0; e < t.length; e++)
                    if (t[e] !== n[e])
                        return !1;
                return !0
            }
            switch (e) {
            case Te.UINT64:
            case Te.FIXED64:
            case Te.INT64:
            case Te.SFIXED64:
            case Te.SINT64:
                return t == n
            }
            return !1
        }
        function Oe(e, t) {
            switch (e) {
            case Te.BOOL:
                return !1;
            case Te.UINT64:
            case Te.FIXED64:
            case Te.INT64:
            case Te.SFIXED64:
            case Te.SINT64:
                return 0 == t ? Ne.zero : "0";
            case Te.DOUBLE:
            case Te.FLOAT:
                return 0;
            case Te.BYTES:
                return new Uint8Array(0);
            case Te.STRING:
                return "";
            default:
                return 0
            }
        }
        function Ce(e, t) {
            switch (e) {
            case Te.BOOL:
                return !1 === t;
            case Te.STRING:
                return "" === t;
            case Te.BYTES:
                return t instanceof Uint8Array && !t.byteLength;
            default:
                return 0 == t
            }
        }
        function ke(e) {
            const t = e.field.localName
              , n = Object.create(null);
            return n[t] = function(e) {
                const t = e.field;
                if (t.repeated)
                    return [];
                if (void 0 !== t.default)
                    return t.default;
                switch (t.kind) {
                case "enum":
                    return t.T.values[0].no;
                case "scalar":
                    return Oe(t.T, t.L);
                case "message":
                    const e = t.T
                      , n = new e;
                    return e.fieldWrapper ? e.fieldWrapper.unwrapField(n) : n;
                case "map":
                    throw "map fields are not allowed to be extensions"
                }
            }(e),
            [n, () => n[t]]
        }
        !function(e) {
            e[e.DOUBLE = 1] = "DOUBLE",
            e[e.FLOAT = 2] = "FLOAT",
            e[e.INT64 = 3] = "INT64",
            e[e.UINT64 = 4] = "UINT64",
            e[e.INT32 = 5] = "INT32",
            e[e.FIXED64 = 6] = "FIXED64",
            e[e.FIXED32 = 7] = "FIXED32",
            e[e.BOOL = 8] = "BOOL",
            e[e.STRING = 9] = "STRING",
            e[e.BYTES = 12] = "BYTES",
            e[e.UINT32 = 13] = "UINT32",
            e[e.SFIXED32 = 15] = "SFIXED32",
            e[e.SFIXED64 = 16] = "SFIXED64",
            e[e.SINT32 = 17] = "SINT32",
            e[e.SINT64 = 18] = "SINT64"
        }(Te || (Te = {})),
        function(e) {
            e[e.BIGINT = 0] = "BIGINT",
            e[e.STRING = 1] = "STRING"
        }(Ie || (Ie = {}));
        let De = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("")
          , xe = [];
        for (let e = 0; e < De.length; e++)
            xe[De[e].charCodeAt(0)] = e;
        xe["-".charCodeAt(0)] = De.indexOf("+"),
        xe["_".charCodeAt(0)] = De.indexOf("/");
        const Le = {
            dec(e) {
                let t = 3 * e.length / 4;
                "=" == e[e.length - 2] ? t -= 2 : "=" == e[e.length - 1] && (t -= 1);
                let n, r = new Uint8Array(t), o = 0, i = 0, s = 0;
                for (let t = 0; t < e.length; t++) {
                    if (n = xe[e.charCodeAt(t)],
                    void 0 === n)
                        switch (e[t]) {
                        case "=":
                            i = 0;
                        case "\n":
                        case "\r":
                        case "\t":
                        case " ":
                            continue;
                        default:
                            throw Error("invalid base64 string.")
                        }
                    switch (i) {
                    case 0:
                        s = n,
                        i = 1;
                        break;
                    case 1:
                        r[o++] = s << 2 | (48 & n) >> 4,
                        s = n,
                        i = 2;
                        break;
                    case 2:
                        r[o++] = (15 & s) << 4 | (60 & n) >> 2,
                        s = n,
                        i = 3;
                        break;
                    case 3:
                        r[o++] = (3 & s) << 6 | n,
                        i = 0
                    }
                }
                if (1 == i)
                    throw Error("invalid base64 string.");
                return r.subarray(0, o)
            },
            enc(e) {
                let t, n = "", r = 0, o = 0;
                for (let i = 0; i < e.length; i++)
                    switch (t = e[i],
                    r) {
                    case 0:
                        n += De[t >> 2],
                        o = (3 & t) << 4,
                        r = 1;
                        break;
                    case 1:
                        n += De[o | t >> 4],
                        o = (15 & t) << 2,
                        r = 2;
                        break;
                    case 2:
                        n += De[o | t >> 6],
                        n += De[63 & t],
                        r = 0
                    }
                return r && (n += De[o],
                n += "=",
                1 == r && (n += "=")),
                n
            }
        };
        function Re(e, t, n) {
            Ue(t, e);
            const r = t.runtime.bin.makeReadOptions(n)
              , o = function(e, t) {
                if (!t.repeated && ("enum" == t.kind || "scalar" == t.kind)) {
                    for (let n = e.length - 1; n >= 0; --n)
                        if (e[n].no == t.no)
                            return [e[n]];
                    return []
                }
                return e.filter(e => e.no === t.no)
            }(e.getType().runtime.bin.listUnknownFields(e), t.field)
              , [i,s] = ke(t);
            for (const e of o)
                t.runtime.bin.readField(i, r.readerFactory(e.data), t.field, e.wireType, r);
            return s()
        }
        function Fe(e, t, n, r) {
            Ue(t, e);
            const o = t.runtime.bin.makeReadOptions(r)
              , i = t.runtime.bin.makeWriteOptions(r);
            if (Pe(e, t)) {
                const n = e.getType().runtime.bin.listUnknownFields(e).filter(e => e.no != t.field.no);
                e.getType().runtime.bin.discardUnknownFields(e);
                for (const t of n)
                    e.getType().runtime.bin.onUnknownField(e, t.no, t.wireType, t.data)
            }
            const s = i.writerFactory();
            let a = t.field;
            a.opt || a.repeated || "enum" != a.kind && "scalar" != a.kind || (a = Object.assign(Object.assign({}, t.field), {
                opt: !0
            })),
            t.runtime.bin.writeField(a, n, s, i);
            const c = o.readerFactory(s.finish());
            for (; c.pos < c.len; ) {
                const [t,n] = c.tag()
                  , r = c.skip(n, t);
                e.getType().runtime.bin.onUnknownField(e, t, n, r)
            }
        }
        function Pe(e, t) {
            const n = e.getType();
            return t.extendee.typeName === n.typeName && !!n.runtime.bin.listUnknownFields(e).find(e => e.no == t.field.no)
        }
        function Ue(e, t) {
            oe(e.extendee.typeName == t.getType().typeName, `extension ${e.typeName} can only be applied to message ${e.extendee.typeName}`)
        }
        function Be(e, t) {
            const n = e.localName;
            if (e.repeated)
                return t[n].length > 0;
            if (e.oneof)
                return t[e.oneof.localName].case === n;
            switch (e.kind) {
            case "enum":
            case "scalar":
                return e.opt || e.req ? void 0 !== t[n] : "enum" == e.kind ? t[n] !== e.T.values[0].no : !Ce(e.T, t[n]);
            case "message":
                return void 0 !== t[n];
            case "map":
                return Object.keys(t[n]).length > 0
            }
        }
        function je(e, t) {
            const n = e.localName
              , r = !e.opt && !e.req;
            if (e.repeated)
                t[n] = [];
            else if (e.oneof)
                t[e.oneof.localName] = {
                    case: void 0
                };
            else
                switch (e.kind) {
                case "map":
                    t[n] = {};
                    break;
                case "enum":
                    t[n] = r ? e.T.values[0].no : void 0;
                    break;
                case "scalar":
                    t[n] = r ? Oe(e.T, e.L) : void 0;
                    break;
                case "message":
                    t[n] = void 0
                }
        }
        function Me(e, t) {
            if (null === e || "object" != typeof e)
                return !1;
            if (!Object.getOwnPropertyNames(re.prototype).every(t => t in e && "function" == typeof e[t]))
                return !1;
            const n = e.getType();
            return null !== n && "function" == typeof n && "typeName"in n && "string" == typeof n.typeName && (void 0 === t || n.typeName == t.typeName)
        }
        function $e(e, t) {
            return Me(t) || !e.fieldWrapper ? t : e.fieldWrapper.wrapField(t)
        }
        Te.DOUBLE,
        Te.FLOAT,
        Te.INT64,
        Te.UINT64,
        Te.INT32,
        Te.UINT32,
        Te.BOOL,
        Te.STRING,
        Te.BYTES;
        const Ve = {
            ignoreUnknownFields: !1
        }
          , Je = {
            emitDefaultValues: !1,
            enumAsInteger: !1,
            useProtoFieldName: !1,
            prettySpaces: 0
        };
        function Ge(e) {
            return e ? Object.assign(Object.assign({}, Ve), e) : Ve
        }
        function ze(e) {
            return e ? Object.assign(Object.assign({}, Je), e) : Je
        }
        const qe = Symbol()
          , We = Symbol();
        function Xe(e) {
            if (null === e)
                return "null";
            switch (typeof e) {
            case "object":
                return Array.isArray(e) ? "array" : "object";
            case "string":
                return e.length > 100 ? "string" : `"${e.split('"').join('\\"')}"`;
            default:
                return String(e)
            }
        }
        function He(e, t, n, r, o) {
            let i = n.localName;
            if (n.repeated) {
                if (oe("map" != n.kind),
                null === t)
                    return;
                if (!Array.isArray(t))
                    throw new Error(`cannot decode field ${o.typeName}.${n.name} from JSON: ${Xe(t)}`);
                const s = e[i];
                for (const e of t) {
                    if (null === e)
                        throw new Error(`cannot decode field ${o.typeName}.${n.name} from JSON: ${Xe(e)}`);
                    switch (n.kind) {
                    case "message":
                        s.push(n.T.fromJson(e, r));
                        break;
                    case "enum":
                        const t = Ke(n.T, e, r.ignoreUnknownFields, !0);
                        t !== We && s.push(t);
                        break;
                    case "scalar":
                        try {
                            s.push(Qe(n.T, e, n.L, !0))
                        } catch (t) {
                            let r = `cannot decode field ${o.typeName}.${n.name} from JSON: ${Xe(e)}`;
                            throw t instanceof Error && t.message.length > 0 && (r += `: ${t.message}`),
                            new Error(r)
                        }
                    }
                }
            } else if ("map" == n.kind) {
                if (null === t)
                    return;
                if ("object" != typeof t || Array.isArray(t))
                    throw new Error(`cannot decode field ${o.typeName}.${n.name} from JSON: ${Xe(t)}`);
                const s = e[i];
                for (const [e,i] of Object.entries(t)) {
                    if (null === i)
                        throw new Error(`cannot decode field ${o.typeName}.${n.name} from JSON: map value null`);
                    let a;
                    try {
                        a = Ye(n.K, e)
                    } catch (e) {
                        let r = `cannot decode map key for field ${o.typeName}.${n.name} from JSON: ${Xe(t)}`;
                        throw e instanceof Error && e.message.length > 0 && (r += `: ${e.message}`),
                        new Error(r)
                    }
                    switch (n.V.kind) {
                    case "message":
                        s[a] = n.V.T.fromJson(i, r);
                        break;
                    case "enum":
                        const e = Ke(n.V.T, i, r.ignoreUnknownFields, !0);
                        e !== We && (s[a] = e);
                        break;
                    case "scalar":
                        try {
                            s[a] = Qe(n.V.T, i, Ie.BIGINT, !0)
                        } catch (e) {
                            let r = `cannot decode map value for field ${o.typeName}.${n.name} from JSON: ${Xe(t)}`;
                            throw e instanceof Error && e.message.length > 0 && (r += `: ${e.message}`),
                            new Error(r)
                        }
                    }
                }
            } else
                switch (n.oneof && (e = e[n.oneof.localName] = {
                    case: i
                },
                i = "value"),
                n.kind) {
                case "message":
                    const s = n.T;
                    if (null === t && "google.protobuf.Value" != s.typeName)
                        return;
                    let a = e[i];
                    Me(a) ? a.fromJson(t, r) : (e[i] = a = s.fromJson(t, r),
                    s.fieldWrapper && !n.oneof && (e[i] = s.fieldWrapper.unwrapField(a)));
                    break;
                case "enum":
                    const c = Ke(n.T, t, r.ignoreUnknownFields, !1);
                    switch (c) {
                    case qe:
                        je(n, e);
                        break;
                    case We:
                        break;
                    default:
                        e[i] = c
                    }
                    break;
                case "scalar":
                    try {
                        const r = Qe(n.T, t, n.L, !1);
                        if (r === qe)
                            je(n, e);
                        else
                            e[i] = r
                    } catch (e) {
                        let r = `cannot decode field ${o.typeName}.${n.name} from JSON: ${Xe(t)}`;
                        throw e instanceof Error && e.message.length > 0 && (r += `: ${e.message}`),
                        new Error(r)
                    }
                }
        }
        function Ye(e, t) {
            if (e === Te.BOOL)
                switch (t) {
                case "true":
                    t = !0;
                    break;
                case "false":
                    t = !1
                }
            return Qe(e, t, Ie.BIGINT, !0).toString()
        }
        function Qe(e, t, n, r) {
            if (null === t)
                return r ? Oe(e, n) : qe;
            switch (e) {
            case Te.DOUBLE:
            case Te.FLOAT:
                if ("NaN" === t)
                    return Number.NaN;
                if ("Infinity" === t)
                    return Number.POSITIVE_INFINITY;
                if ("-Infinity" === t)
                    return Number.NEGATIVE_INFINITY;
                if ("" === t)
                    break;
                if ("string" == typeof t && t.trim().length !== t.length)
                    break;
                if ("string" != typeof t && "number" != typeof t)
                    break;
                const r = Number(t);
                if (Number.isNaN(r))
                    break;
                if (!Number.isFinite(r))
                    break;
                return e == Te.FLOAT && ae(r),
                r;
            case Te.INT32:
            case Te.FIXED32:
            case Te.SFIXED32:
            case Te.SINT32:
            case Te.UINT32:
                let o;
                if ("number" == typeof t ? o = t : "string" == typeof t && t.length > 0 && t.trim().length === t.length && (o = Number(t)),
                void 0 === o)
                    break;
                return e == Te.UINT32 || e == Te.FIXED32 ? se(o) : ie(o),
                o;
            case Te.INT64:
            case Te.SFIXED64:
            case Te.SINT64:
                if ("number" != typeof t && "string" != typeof t)
                    break;
                const i = Ne.parse(t);
                return n ? i.toString() : i;
            case Te.FIXED64:
            case Te.UINT64:
                if ("number" != typeof t && "string" != typeof t)
                    break;
                const s = Ne.uParse(t);
                return n ? s.toString() : s;
            case Te.BOOL:
                if ("boolean" != typeof t)
                    break;
                return t;
            case Te.STRING:
                if ("string" != typeof t)
                    break;
                try {
                    encodeURIComponent(t)
                } catch (e) {
                    throw new Error("invalid UTF8")
                }
                return t;
            case Te.BYTES:
                if ("" === t)
                    return new Uint8Array(0);
                if ("string" != typeof t)
                    break;
                return Le.dec(t)
            }
            throw new Error
        }
        function Ke(e, t, n, r) {
            if (null === t)
                return "google.protobuf.NullValue" == e.typeName ? 0 : r ? e.values[0].no : qe;
            switch (typeof t) {
            case "number":
                if (Number.isInteger(t))
                    return t;
                break;
            case "string":
                const r = e.findName(t);
                if (void 0 !== r)
                    return r.no;
                if (n)
                    return We
            }
            throw new Error(`cannot decode enum ${e.typeName} from JSON: ${Xe(t)}`)
        }
        function Ze(e) {
            return !(!e.repeated && "map" != e.kind) || !e.oneof && ("message" != e.kind && (!e.opt && !e.req))
        }
        function et(e, t, n) {
            if ("map" == e.kind) {
                oe("object" == typeof t && null != t);
                const r = {}
                  , o = Object.entries(t);
                switch (e.V.kind) {
                case "scalar":
                    for (const [t,n] of o)
                        r[t.toString()] = nt(e.V.T, n);
                    break;
                case "message":
                    for (const [e,t] of o)
                        r[e.toString()] = t.toJson(n);
                    break;
                case "enum":
                    const t = e.V.T;
                    for (const [e,i] of o)
                        r[e.toString()] = tt(t, i, n.enumAsInteger)
                }
                return n.emitDefaultValues || o.length > 0 ? r : void 0
            }
            if (e.repeated) {
                oe(Array.isArray(t));
                const r = [];
                switch (e.kind) {
                case "scalar":
                    for (let n = 0; n < t.length; n++)
                        r.push(nt(e.T, t[n]));
                    break;
                case "enum":
                    for (let o = 0; o < t.length; o++)
                        r.push(tt(e.T, t[o], n.enumAsInteger));
                    break;
                case "message":
                    for (let e = 0; e < t.length; e++)
                        r.push(t[e].toJson(n))
                }
                return n.emitDefaultValues || r.length > 0 ? r : void 0
            }
            switch (e.kind) {
            case "scalar":
                return nt(e.T, t);
            case "enum":
                return tt(e.T, t, n.enumAsInteger);
            case "message":
                return $e(e.T, t).toJson(n)
            }
        }
        function tt(e, t, n) {
            var r;
            if (oe("number" == typeof t),
            "google.protobuf.NullValue" == e.typeName)
                return null;
            if (n)
                return t;
            const o = e.findNumber(t);
            return null !== (r = null == o ? void 0 : o.name) && void 0 !== r ? r : t
        }
        function nt(e, t) {
            switch (e) {
            case Te.INT32:
            case Te.SFIXED32:
            case Te.SINT32:
            case Te.FIXED32:
            case Te.UINT32:
                return oe("number" == typeof t),
                t;
            case Te.FLOAT:
            case Te.DOUBLE:
                return oe("number" == typeof t),
                Number.isNaN(t) ? "NaN" : t === Number.POSITIVE_INFINITY ? "Infinity" : t === Number.NEGATIVE_INFINITY ? "-Infinity" : t;
            case Te.STRING:
                return oe("string" == typeof t),
                t;
            case Te.BOOL:
                return oe("boolean" == typeof t),
                t;
            case Te.UINT64:
            case Te.FIXED64:
            case Te.INT64:
            case Te.SFIXED64:
            case Te.SINT64:
                return oe("bigint" == typeof t || "string" == typeof t || "number" == typeof t),
                t.toString();
            case Te.BYTES:
                return oe(t instanceof Uint8Array),
                Le.enc(t)
            }
        }
        var rt;
        !function(e) {
            e[e.Varint = 0] = "Varint",
            e[e.Bit64 = 1] = "Bit64",
            e[e.LengthDelimited = 2] = "LengthDelimited",
            e[e.StartGroup = 3] = "StartGroup",
            e[e.EndGroup = 4] = "EndGroup",
            e[e.Bit32 = 5] = "Bit32"
        }(rt || (rt = {}));
        class ot {
            constructor(e) {
                this.stack = [],
                this.textEncoder = null != e ? e : new TextEncoder,
                this.chunks = [],
                this.buf = []
            }
            finish() {
                this.chunks.push(new Uint8Array(this.buf));
                let e = 0;
                for (let t = 0; t < this.chunks.length; t++)
                    e += this.chunks[t].length;
                let t = new Uint8Array(e)
                  , n = 0;
                for (let e = 0; e < this.chunks.length; e++)
                    t.set(this.chunks[e], n),
                    n += this.chunks[e].length;
                return this.chunks = [],
                t
            }
            fork() {
                return this.stack.push({
                    chunks: this.chunks,
                    buf: this.buf
                }),
                this.chunks = [],
                this.buf = [],
                this
            }
            join() {
                let e = this.finish()
                  , t = this.stack.pop();
                if (!t)
                    throw new Error("invalid state, fork stack empty");
                return this.chunks = t.chunks,
                this.buf = t.buf,
                this.uint32(e.byteLength),
                this.raw(e)
            }
            tag(e, t) {
                return this.uint32((e << 3 | t) >>> 0)
            }
            raw(e) {
                return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)),
                this.buf = []),
                this.chunks.push(e),
                this
            }
            uint32(e) {
                for (se(e); e > 127; )
                    this.buf.push(127 & e | 128),
                    e >>>= 7;
                return this.buf.push(e),
                this
            }
            int32(e) {
                return ie(e),
                _e(e, this.buf),
                this
            }
            bool(e) {
                return this.buf.push(e ? 1 : 0),
                this
            }
            bytes(e) {
                return this.uint32(e.byteLength),
                this.raw(e)
            }
            string(e) {
                let t = this.textEncoder.encode(e);
                return this.uint32(t.byteLength),
                this.raw(t)
            }
            float(e) {
                ae(e);
                let t = new Uint8Array(4);
                return new DataView(t.buffer).setFloat32(0, e, !0),
                this.raw(t)
            }
            double(e) {
                let t = new Uint8Array(8);
                return new DataView(t.buffer).setFloat64(0, e, !0),
                this.raw(t)
            }
            fixed32(e) {
                se(e);
                let t = new Uint8Array(4);
                return new DataView(t.buffer).setUint32(0, e, !0),
                this.raw(t)
            }
            sfixed32(e) {
                ie(e);
                let t = new Uint8Array(4);
                return new DataView(t.buffer).setInt32(0, e, !0),
                this.raw(t)
            }
            sint32(e) {
                return ie(e),
                _e(e = (e << 1 ^ e >> 31) >>> 0, this.buf),
                this
            }
            sfixed64(e) {
                let t = new Uint8Array(8)
                  , n = new DataView(t.buffer)
                  , r = Ne.enc(e);
                return n.setInt32(0, r.lo, !0),
                n.setInt32(4, r.hi, !0),
                this.raw(t)
            }
            fixed64(e) {
                let t = new Uint8Array(8)
                  , n = new DataView(t.buffer)
                  , r = Ne.uEnc(e);
                return n.setInt32(0, r.lo, !0),
                n.setInt32(4, r.hi, !0),
                this.raw(t)
            }
            int64(e) {
                let t = Ne.enc(e);
                return me(t.lo, t.hi, this.buf),
                this
            }
            sint64(e) {
                let t = Ne.enc(e)
                  , n = t.hi >> 31;
                return me(t.lo << 1 ^ n, (t.hi << 1 | t.lo >>> 31) ^ n, this.buf),
                this
            }
            uint64(e) {
                let t = Ne.uEnc(e);
                return me(t.lo, t.hi, this.buf),
                this
            }
        }
        class it {
            constructor(e, t) {
                this.varint64 = pe,
                this.uint32 = Ae,
                this.buf = e,
                this.len = e.length,
                this.pos = 0,
                this.view = new DataView(e.buffer,e.byteOffset,e.byteLength),
                this.textDecoder = null != t ? t : new TextDecoder
            }
            tag() {
                let e = this.uint32()
                  , t = e >>> 3
                  , n = 7 & e;
                if (t <= 0 || n < 0 || n > 5)
                    throw new Error("illegal tag: field no " + t + " wire type " + n);
                return [t, n]
            }
            skip(e, t) {
                let n = this.pos;
                switch (e) {
                case rt.Varint:
                    for (; 128 & this.buf[this.pos++]; )
                        ;
                    break;
                case rt.Bit64:
                    this.pos += 4;
                case rt.Bit32:
                    this.pos += 4;
                    break;
                case rt.LengthDelimited:
                    let n = this.uint32();
                    this.pos += n;
                    break;
                case rt.StartGroup:
                    for (; ; ) {
                        const [e,n] = this.tag();
                        if (n === rt.EndGroup) {
                            if (void 0 !== t && e !== t)
                                throw new Error("invalid end group tag");
                            break
                        }
                        this.skip(n, e)
                    }
                    break;
                default:
                    throw new Error("cant skip wire type " + e)
                }
                return this.assertBounds(),
                this.buf.subarray(n, this.pos)
            }
            assertBounds() {
                if (this.pos > this.len)
                    throw new RangeError("premature EOF")
            }
            int32() {
                return 0 | this.uint32()
            }
            sint32() {
                let e = this.uint32();
                return e >>> 1 ^ -(1 & e)
            }
            int64() {
                return Ne.dec(...this.varint64())
            }
            uint64() {
                return Ne.uDec(...this.varint64())
            }
            sint64() {
                let[e,t] = this.varint64()
                  , n = -(1 & e);
                return e = (e >>> 1 | (1 & t) << 31) ^ n,
                t = t >>> 1 ^ n,
                Ne.dec(e, t)
            }
            bool() {
                let[e,t] = this.varint64();
                return 0 !== e || 0 !== t
            }
            fixed32() {
                return this.view.getUint32((this.pos += 4) - 4, !0)
            }
            sfixed32() {
                return this.view.getInt32((this.pos += 4) - 4, !0)
            }
            fixed64() {
                return Ne.uDec(this.sfixed32(), this.sfixed32())
            }
            sfixed64() {
                return Ne.dec(this.sfixed32(), this.sfixed32())
            }
            float() {
                return this.view.getFloat32((this.pos += 4) - 4, !0)
            }
            double() {
                return this.view.getFloat64((this.pos += 8) - 8, !0)
            }
            bytes() {
                let e = this.uint32()
                  , t = this.pos;
                return this.pos += e,
                this.assertBounds(),
                this.buf.subarray(t, t + e)
            }
            string() {
                return this.textDecoder.decode(this.bytes())
            }
        }
        const st = Symbol("@bufbuild/protobuf/unknown-fields")
          , at = {
            readUnknownFields: !0,
            readerFactory: e => new it(e)
        }
          , ct = {
            writeUnknownFields: !0,
            writerFactory: () => new ot
        };
        function ut(e) {
            return e ? Object.assign(Object.assign({}, at), e) : at
        }
        function lt(e) {
            return e ? Object.assign(Object.assign({}, ct), e) : ct
        }
        function dt(e, t, n, r, o) {
            let {repeated: i, localName: s} = n;
            switch (n.oneof && ((e = e[n.oneof.localName]).case != s && delete e.value,
            e.case = s,
            s = "value"),
            n.kind) {
            case "scalar":
            case "enum":
                const a = "enum" == n.kind ? Te.INT32 : n.T;
                let c = pt;
                if ("scalar" == n.kind && n.L > 0 && (c = ht),
                i) {
                    let n = e[s];
                    if (r == rt.LengthDelimited && a != Te.STRING && a != Te.BYTES) {
                        let e = t.uint32() + t.pos;
                        for (; t.pos < e; )
                            n.push(c(t, a))
                    } else
                        n.push(c(t, a))
                } else
                    e[s] = c(t, a);
                break;
            case "message":
                const u = n.T;
                i ? e[s].push(ft(t, new u, o, n)) : Me(e[s]) ? ft(t, e[s], o, n) : (e[s] = ft(t, new u, o, n),
                !u.fieldWrapper || n.oneof || n.repeated || (e[s] = u.fieldWrapper.unwrapField(e[s])));
                break;
            case "map":
                let[l,d] = function(e, t, n) {
                    const r = t.uint32()
                      , o = t.pos + r;
                    let i, s;
                    for (; t.pos < o; ) {
                        const [r] = t.tag();
                        switch (r) {
                        case 1:
                            i = pt(t, e.K);
                            break;
                        case 2:
                            switch (e.V.kind) {
                            case "scalar":
                                s = pt(t, e.V.T);
                                break;
                            case "enum":
                                s = t.int32();
                                break;
                            case "message":
                                s = ft(t, new e.V.T, n, void 0)
                            }
                        }
                    }
                    void 0 === i && (i = Oe(e.K, Ie.BIGINT));
                    "string" != typeof i && "number" != typeof i && (i = i.toString());
                    if (void 0 === s)
                        switch (e.V.kind) {
                        case "scalar":
                            s = Oe(e.V.T, Ie.BIGINT);
                            break;
                        case "enum":
                            s = e.V.T.values[0].no;
                            break;
                        case "message":
                            s = new e.V.T
                        }
                    return [i, s]
                }(n, t, o);
                e[s][l] = d
            }
        }
        function ft(e, t, n, r) {
            const o = t.getType().runtime.bin
              , i = null == r ? void 0 : r.delimited;
            return o.readMessage(t, e, i ? r.no : e.uint32(), n, i),
            t
        }
        function ht(e, t) {
            const n = pt(e, t);
            return "bigint" == typeof n ? n.toString() : n
        }
        function pt(e, t) {
            switch (t) {
            case Te.STRING:
                return e.string();
            case Te.BOOL:
                return e.bool();
            case Te.DOUBLE:
                return e.double();
            case Te.FLOAT:
                return e.float();
            case Te.INT32:
                return e.int32();
            case Te.INT64:
                return e.int64();
            case Te.UINT64:
                return e.uint64();
            case Te.FIXED64:
                return e.fixed64();
            case Te.BYTES:
                return e.bytes();
            case Te.FIXED32:
                return e.fixed32();
            case Te.SFIXED32:
                return e.sfixed32();
            case Te.SFIXED64:
                return e.sfixed64();
            case Te.SINT64:
                return e.sint64();
            case Te.UINT32:
                return e.uint32();
            case Te.SINT32:
                return e.sint32()
            }
        }
        function mt(e, t, n, r) {
            oe(void 0 !== t);
            const o = e.repeated;
            switch (e.kind) {
            case "scalar":
            case "enum":
                let i = "enum" == e.kind ? Te.INT32 : e.T;
                if (o)
                    if (oe(Array.isArray(t)),
                    e.packed)
                        !function(e, t, n, r) {
                            if (!r.length)
                                return;
                            e.tag(n, rt.LengthDelimited).fork();
                            let[,o] = vt(t);
                            for (let t = 0; t < r.length; t++)
                                e[o](r[t]);
                            e.join()
                        }(n, i, e.no, t);
                    else
                        for (const r of t)
                            wt(n, i, e.no, r);
                else
                    wt(n, i, e.no, t);
                break;
            case "message":
                if (o) {
                    oe(Array.isArray(t));
                    for (const o of t)
                        yt(n, r, e, o)
                } else
                    yt(n, r, e, t);
                break;
            case "map":
                oe("object" == typeof t && null != t);
                for (const [o,i] of Object.entries(t))
                    gt(n, r, e, o, i)
            }
        }
        function gt(e, t, n, r, o) {
            e.tag(n.no, rt.LengthDelimited),
            e.fork();
            let i = r;
            switch (n.K) {
            case Te.INT32:
            case Te.FIXED32:
            case Te.UINT32:
            case Te.SFIXED32:
            case Te.SINT32:
                i = Number.parseInt(r);
                break;
            case Te.BOOL:
                oe("true" == r || "false" == r),
                i = "true" == r
            }
            switch (wt(e, n.K, 1, i),
            n.V.kind) {
            case "scalar":
                wt(e, n.V.T, 2, o);
                break;
            case "enum":
                wt(e, Te.INT32, 2, o);
                break;
            case "message":
                oe(void 0 !== o),
                e.tag(2, rt.LengthDelimited).bytes(o.toBinary(t))
            }
            e.join()
        }
        function yt(e, t, n, r) {
            const o = $e(n.T, r);
            n.delimited ? e.tag(n.no, rt.StartGroup).raw(o.toBinary(t)).tag(n.no, rt.EndGroup) : e.tag(n.no, rt.LengthDelimited).bytes(o.toBinary(t))
        }
        function wt(e, t, n, r) {
            oe(void 0 !== r);
            let[o,i] = vt(t);
            e.tag(n, o)[i](r)
        }
        function vt(e) {
            let t = rt.Varint;
            switch (e) {
            case Te.BYTES:
            case Te.STRING:
                t = rt.LengthDelimited;
                break;
            case Te.DOUBLE:
            case Te.FIXED64:
            case Te.SFIXED64:
                t = rt.Bit64;
                break;
            case Te.FIXED32:
            case Te.SFIXED32:
            case Te.FLOAT:
                t = rt.Bit32
            }
            return [t, Te[e].toLowerCase()]
        }
        function bt(e) {
            if (void 0 === e)
                return e;
            if (Me(e))
                return e.clone();
            if (e instanceof Uint8Array) {
                const t = new Uint8Array(e.byteLength);
                return t.set(e),
                t
            }
            return e
        }
        function Et(e) {
            return e instanceof Uint8Array ? e : new Uint8Array(e)
        }
        class _t {
            constructor(e, t) {
                this._fields = e,
                this._normalizer = t
            }
            findJsonName(e) {
                if (!this.jsonNames) {
                    const e = {};
                    for (const t of this.list())
                        e[t.jsonName] = e[t.name] = t;
                    this.jsonNames = e
                }
                return this.jsonNames[e]
            }
            find(e) {
                if (!this.numbers) {
                    const e = {};
                    for (const t of this.list())
                        e[t.no] = t;
                    this.numbers = e
                }
                return this.numbers[e]
            }
            list() {
                return this.all || (this.all = this._normalizer(this._fields)),
                this.all
            }
            byNumber() {
                return this.numbersAsc || (this.numbersAsc = this.list().concat().sort( (e, t) => e.no - t.no)),
                this.numbersAsc
            }
            byMember() {
                if (!this.members) {
                    this.members = [];
                    const e = this.members;
                    let t;
                    for (const n of this.list())
                        n.oneof ? n.oneof !== t && (t = n.oneof,
                        e.push(t)) : e.push(n)
                }
                return this.members
            }
        }
        function At(e, t) {
            const n = It(e);
            return t ? n : Dt(kt(n))
        }
        function Nt(e) {
            return At(e, !1)
        }
        const Tt = It;
        function It(e) {
            let t = !1;
            const n = [];
            for (let r = 0; r < e.length; r++) {
                let o = e.charAt(r);
                switch (o) {
                case "_":
                    t = !0;
                    break;
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                    n.push(o),
                    t = !1;
                    break;
                default:
                    t && (t = !1,
                    o = o.toUpperCase()),
                    n.push(o)
                }
            }
            return n.join("")
        }
        new Set(["break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "export", "extends", "false", "finally", "for", "function", "if", "import", "in", "instanceof", "new", "null", "return", "super", "switch", "this", "throw", "true", "try", "typeof", "var", "void", "while", "with", "yield", "enum", "implements", "interface", "let", "package", "private", "protected", "public", "static", "Object", "bigint", "number", "boolean", "string", "object", "globalThis", "Uint8Array", "Partial"]);
        const St = new Set(["constructor", "toString", "toJSON", "valueOf"])
          , Ot = new Set(["getType", "clone", "equals", "fromBinary", "fromJson", "fromJsonString", "toBinary", "toJson", "toJsonString", "toObject"])
          , Ct = e => `${e}$`
          , kt = e => Ot.has(e) ? Ct(e) : e
          , Dt = e => St.has(e) ? Ct(e) : e;
        class xt {
            constructor(e) {
                this.kind = "oneof",
                this.repeated = !1,
                this.packed = !1,
                this.opt = !1,
                this.req = !1,
                this.default = void 0,
                this.fields = [],
                this.name = e,
                this.localName = Nt(e)
            }
            addField(e) {
                oe(e.oneof === this, `field ${e.name} not one of ${this.name}`),
                this.fields.push(e)
            }
            findField(e) {
                if (!this._lookup) {
                    this._lookup = Object.create(null);
                    for (let e = 0; e < this.fields.length; e++)
                        this._lookup[this.fields[e].localName] = this.fields[e]
                }
                return this._lookup[e]
            }
        }
        const Lt = (Rt = e => new _t(e,e => function(e, t) {
            var n, r, o, i, s, a;
            const c = [];
            let u;
            for (const l of "function" == typeof e ? e() : e) {
                const e = l;
                if (e.localName = At(l.name, void 0 !== l.oneof),
                e.jsonName = null !== (n = l.jsonName) && void 0 !== n ? n : Tt(l.name),
                e.repeated = null !== (r = l.repeated) && void 0 !== r && r,
                "scalar" == l.kind && (e.L = null !== (o = l.L) && void 0 !== o ? o : Ie.BIGINT),
                e.delimited = null !== (i = l.delimited) && void 0 !== i && i,
                e.req = null !== (s = l.req) && void 0 !== s && s,
                e.opt = null !== (a = l.opt) && void 0 !== a && a,
                void 0 === l.packed && (e.packed = !!t && ("enum" == l.kind || "scalar" == l.kind && l.T != Te.BYTES && l.T != Te.STRING)),
                void 0 !== l.oneof) {
                    const t = "string" == typeof l.oneof ? l.oneof : l.oneof.name;
                    u && u.name == t || (u = new xt(t)),
                    e.oneof = u,
                    u.addField(e)
                }
                c.push(e)
            }
            return c
        }(e, !0)),
        Ft = e => {
            for (const t of e.getType().fields.byMember()) {
                if (t.opt)
                    continue;
                const n = t.localName
                  , r = e;
                if (t.repeated)
                    r[n] = [];
                else
                    switch (t.kind) {
                    case "oneof":
                        r[n] = {
                            case: void 0
                        };
                        break;
                    case "enum":
                        r[n] = 0;
                        break;
                    case "map":
                        r[n] = {};
                        break;
                    case "scalar":
                        r[n] = Oe(t.T, t.L)
                    }
            }
        }
        ,
        {
            syntax: "proto3",
            json: {
                makeReadOptions: Ge,
                makeWriteOptions: ze,
                readMessage(e, t, n, r) {
                    if (null == t || Array.isArray(t) || "object" != typeof t)
                        throw new Error(`cannot decode message ${e.typeName} from JSON: ${Xe(t)}`);
                    r = null != r ? r : new e;
                    const o = new Map
                      , i = n.typeRegistry;
                    for (const [s,a] of Object.entries(t)) {
                        const t = e.fields.findJsonName(s);
                        if (t) {
                            if (t.oneof) {
                                if (null === a && "scalar" == t.kind)
                                    continue;
                                const n = o.get(t.oneof);
                                if (void 0 !== n)
                                    throw new Error(`cannot decode message ${e.typeName} from JSON: multiple keys for oneof "${t.oneof.name}" present: "${n}", "${s}"`);
                                o.set(t.oneof, s)
                            }
                            He(r, a, t, n, e)
                        } else {
                            let t = !1;
                            if ((null == i ? void 0 : i.findExtension) && s.startsWith("[") && s.endsWith("]")) {
                                const o = i.findExtension(s.substring(1, s.length - 1));
                                if (o && o.extendee.typeName == e.typeName) {
                                    t = !0;
                                    const [e,i] = ke(o);
                                    He(e, a, o.field, n, o),
                                    Fe(r, o, i(), n)
                                }
                            }
                            if (!t && !n.ignoreUnknownFields)
                                throw new Error(`cannot decode message ${e.typeName} from JSON: key "${s}" is unknown`)
                        }
                    }
                    return r
                },
                writeMessage(e, t) {
                    const n = e.getType()
                      , r = {};
                    let o;
                    try {
                        for (o of n.fields.byNumber()) {
                            if (!Be(o, e)) {
                                if (o.req)
                                    throw "required field not set";
                                if (!t.emitDefaultValues)
                                    continue;
                                if (!Ze(o))
                                    continue
                            }
                            const n = et(o, o.oneof ? e[o.oneof.localName].value : e[o.localName], t);
                            void 0 !== n && (r[t.useProtoFieldName ? o.name : o.jsonName] = n)
                        }
                        const i = t.typeRegistry;
                        if (null == i ? void 0 : i.findExtensionFor)
                            for (const o of n.runtime.bin.listUnknownFields(e)) {
                                const s = i.findExtensionFor(n.typeName, o.no);
                                if (s && Pe(e, s)) {
                                    const n = Re(e, s, t)
                                      , o = et(s.field, n, t);
                                    void 0 !== o && (r[s.field.jsonName] = o)
                                }
                            }
                    } catch (e) {
                        const t = o ? `cannot encode field ${n.typeName}.${o.name} to JSON` : `cannot encode message ${n.typeName} to JSON`
                          , r = e instanceof Error ? e.message : String(e);
                        throw new Error(t + (r.length > 0 ? `: ${r}` : ""))
                    }
                    return r
                },
                readScalar: (e, t, n) => Qe(e, t, null != n ? n : Ie.BIGINT, !0),
                writeScalar(e, t, n) {
                    if (void 0 !== t)
                        return n || Ce(e, t) ? nt(e, t) : void 0
                },
                debug: Xe
            },
            bin: {
                makeReadOptions: ut,
                makeWriteOptions: lt,
                listUnknownFields(e) {
                    var t;
                    return null !== (t = e[st]) && void 0 !== t ? t : []
                },
                discardUnknownFields(e) {
                    delete e[st]
                },
                writeUnknownFields(e, t) {
                    const n = e[st];
                    if (n)
                        for (const e of n)
                            t.tag(e.no, e.wireType).raw(e.data)
                },
                onUnknownField(e, t, n, r) {
                    const o = e;
                    Array.isArray(o[st]) || (o[st] = []),
                    o[st].push({
                        no: t,
                        wireType: n,
                        data: r
                    })
                },
                readMessage(e, t, n, r, o) {
                    const i = e.getType()
                      , s = o ? t.len : t.pos + n;
                    let a, c;
                    for (; t.pos < s && ([a,c] = t.tag(),
                    !0 !== o || c != rt.EndGroup); ) {
                        const n = i.fields.find(a);
                        if (!n) {
                            const n = t.skip(c, a);
                            r.readUnknownFields && this.onUnknownField(e, a, c, n);
                            continue
                        }
                        dt(e, t, n, c, r)
                    }
                    if (o && (c != rt.EndGroup || a !== n))
                        throw new Error("invalid end group tag")
                },
                readField: dt,
                writeMessage(e, t, n) {
                    const r = e.getType();
                    for (const o of r.fields.byNumber())
                        if (Be(o, e))
                            mt(o, o.oneof ? e[o.oneof.localName].value : e[o.localName], t, n);
                        else if (o.req)
                            throw new Error(`cannot encode field ${r.typeName}.${o.name} to binary: required field not set`);
                    return n.writeUnknownFields && this.writeUnknownFields(e, t),
                    t
                },
                writeField(e, t, n, r) {
                    void 0 !== t && mt(e, t, n, r)
                }
            },
            util: Object.assign(Object.assign({}, {
                setEnumType: le,
                initPartial(e, t) {
                    if (void 0 === e)
                        return;
                    const n = t.getType();
                    for (const r of n.fields.byMember()) {
                        const n = r.localName
                          , o = t
                          , i = e;
                        if (null != i[n])
                            switch (r.kind) {
                            case "oneof":
                                const e = i[n].case;
                                if (void 0 === e)
                                    continue;
                                const t = r.findField(e);
                                let s = i[n].value;
                                t && "message" == t.kind && !Me(s, t.T) ? s = new t.T(s) : t && "scalar" === t.kind && t.T === Te.BYTES && (s = Et(s)),
                                o[n] = {
                                    case: e,
                                    value: s
                                };
                                break;
                            case "scalar":
                            case "enum":
                                let a = i[n];
                                r.T === Te.BYTES && (a = r.repeated ? a.map(Et) : Et(a)),
                                o[n] = a;
                                break;
                            case "map":
                                switch (r.V.kind) {
                                case "scalar":
                                case "enum":
                                    if (r.V.T === Te.BYTES)
                                        for (const [e,t] of Object.entries(i[n]))
                                            o[n][e] = Et(t);
                                    else
                                        Object.assign(o[n], i[n]);
                                    break;
                                case "message":
                                    const e = r.V.T;
                                    for (const t of Object.keys(i[n])) {
                                        let r = i[n][t];
                                        e.fieldWrapper || (r = new e(r)),
                                        o[n][t] = r
                                    }
                                }
                                break;
                            case "message":
                                const c = r.T;
                                if (r.repeated)
                                    o[n] = i[n].map(e => Me(e, c) ? e : new c(e));
                                else {
                                    const e = i[n];
                                    c.fieldWrapper ? "google.protobuf.BytesValue" === c.typeName ? o[n] = Et(e) : o[n] = e : o[n] = Me(e, c) ? e : new c(e)
                                }
                            }
                    }
                },
                equals: (e, t, n) => t === n || !(!t || !n) && e.fields.byMember().every(e => {
                    const r = t[e.localName]
                      , o = n[e.localName];
                    if (e.repeated) {
                        if (r.length !== o.length)
                            return !1;
                        switch (e.kind) {
                        case "message":
                            return r.every( (t, n) => e.T.equals(t, o[n]));
                        case "scalar":
                            return r.every( (t, n) => Se(e.T, t, o[n]));
                        case "enum":
                            return r.every( (e, t) => Se(Te.INT32, e, o[t]))
                        }
                        throw new Error(`repeated cannot contain ${e.kind}`)
                    }
                    switch (e.kind) {
                    case "message":
                        let t = r
                          , n = o;
                        return e.T.fieldWrapper && (void 0 === t || Me(t) || (t = e.T.fieldWrapper.wrapField(t)),
                        void 0 === n || Me(n) || (n = e.T.fieldWrapper.wrapField(n))),
                        e.T.equals(t, n);
                    case "enum":
                        return Se(Te.INT32, r, o);
                    case "scalar":
                        return Se(e.T, r, o);
                    case "oneof":
                        if (r.case !== o.case)
                            return !1;
                        const i = e.findField(r.case);
                        if (void 0 === i)
                            return !0;
                        switch (i.kind) {
                        case "message":
                            return i.T.equals(r.value, o.value);
                        case "enum":
                            return Se(Te.INT32, r.value, o.value);
                        case "scalar":
                            return Se(i.T, r.value, o.value)
                        }
                        throw new Error(`oneof cannot contain ${i.kind}`);
                    case "map":
                        const s = Object.keys(r).concat(Object.keys(o));
                        switch (e.V.kind) {
                        case "message":
                            const t = e.V.T;
                            return s.every(e => t.equals(r[e], o[e]));
                        case "enum":
                            return s.every(e => Se(Te.INT32, r[e], o[e]));
                        case "scalar":
                            const n = e.V.T;
                            return s.every(e => Se(n, r[e], o[e]))
                        }
                    }
                }
                ),
                clone(e) {
                    const t = e.getType()
                      , n = new t
                      , r = n;
                    for (const n of t.fields.byMember()) {
                        const t = e[n.localName];
                        let o;
                        if (n.repeated)
                            o = t.map(bt);
                        else if ("map" == n.kind) {
                            o = r[n.localName];
                            for (const [e,n] of Object.entries(t))
                                o[e] = bt(n)
                        } else
                            o = "oneof" == n.kind ? n.findField(t.case) ? {
                                case: t.case,
                                value: bt(t.value)
                            } : {
                                case: void 0
                            } : bt(t);
                        r[n.localName] = o
                    }
                    for (const n of t.runtime.bin.listUnknownFields(e))
                        t.runtime.bin.onUnknownField(r, n.no, n.wireType, n.data);
                    return n
                }
            }), {
                newFieldList: Rt,
                initFields: Ft
            }),
            makeMessageType(e, t, n) {
                return function(e, t, n, r) {
                    var o;
                    const i = null !== (o = null == r ? void 0 : r.localName) && void 0 !== o ? o : t.substring(t.lastIndexOf(".") + 1)
                      , s = {
                        [i]: function(t) {
                            e.util.initFields(this),
                            e.util.initPartial(t, this)
                        }
                    }[i];
                    return Object.setPrototypeOf(s.prototype, new re),
                    Object.assign(s, {
                        runtime: e,
                        typeName: t,
                        fields: e.util.newFieldList(n),
                        fromBinary: (e, t) => (new s).fromBinary(e, t),
                        fromJson: (e, t) => (new s).fromJson(e, t),
                        fromJsonString: (e, t) => (new s).fromJsonString(e, t),
                        equals: (t, n) => e.util.equals(s, t, n)
                    }),
                    s
                }(this, e, t, n)
            },
            makeEnum: fe,
            makeEnumType: de,
            getEnumType: ue,
            makeExtension(e, t, n) {
                return function(e, t, n, r) {
                    let o;
                    return {
                        typeName: t,
                        extendee: n,
                        get field() {
                            if (!o) {
                                const n = "function" == typeof r ? r() : r;
                                n.name = t.split(".").pop(),
                                n.jsonName = `[${t}]`,
                                o = e.util.newFieldList([n]).list()[0]
                            }
                            return o
                        },
                        runtime: e
                    }
                }(this, e, t, n)
            }
        });
        var Rt, Ft, Pt, Ut, Bt, jt, Mt;
        class $t extends re {
            constructor(e) {
                super(),
                this.seconds = Ne.zero,
                this.nanos = 0,
                Lt.util.initPartial(e, this)
            }
            fromJson(e, t) {
                if ("string" != typeof e)
                    throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${Lt.json.debug(e)}`);
                const n = e.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
                if (!n)
                    throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
                const r = Date.parse(n[1] + "-" + n[2] + "-" + n[3] + "T" + n[4] + ":" + n[5] + ":" + n[6] + (n[8] ? n[8] : "Z"));
                if (Number.isNaN(r))
                    throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
                if (r < Date.parse("0001-01-01T00:00:00Z") || r > Date.parse("9999-12-31T23:59:59Z"))
                    throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
                return this.seconds = Ne.parse(r / 1e3),
                this.nanos = 0,
                n[7] && (this.nanos = parseInt("1" + n[7] + "0".repeat(9 - n[7].length)) - 1e9),
                this
            }
            toJson(e) {
                const t = 1e3 * Number(this.seconds);
                if (t < Date.parse("0001-01-01T00:00:00Z") || t > Date.parse("9999-12-31T23:59:59Z"))
                    throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
                if (this.nanos < 0)
                    throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
                let n = "Z";
                if (this.nanos > 0) {
                    const e = (this.nanos + 1e9).toString().substring(1);
                    n = "000000" === e.substring(3) ? "." + e.substring(0, 3) + "Z" : "000" === e.substring(6) ? "." + e.substring(0, 6) + "Z" : "." + e + "Z"
                }
                return new Date(t).toISOString().replace(".000Z", n)
            }
            toDate() {
                return new Date(1e3 * Number(this.seconds) + Math.ceil(this.nanos / 1e6))
            }
            static now() {
                return $t.fromDate(new Date)
            }
            static fromDate(e) {
                const t = e.getTime();
                return new $t({
                    seconds: Ne.parse(Math.floor(t / 1e3)),
                    nanos: t % 1e3 * 1e6
                })
            }
            static fromBinary(e, t) {
                return (new $t).fromBinary(e, t)
            }
            static fromJson(e, t) {
                return (new $t).fromJson(e, t)
            }
            static fromJsonString(e, t) {
                return (new $t).fromJsonString(e, t)
            }
            static equals(e, t) {
                return Lt.util.equals($t, e, t)
            }
        }
        $t.runtime = Lt,
        $t.typeName = "google.protobuf.Timestamp",
        $t.fields = Lt.util.newFieldList( () => [{
            no: 1,
            name: "seconds",
            kind: "scalar",
            T: 3
        }, {
            no: 2,
            name: "nanos",
            kind: "scalar",
            T: 5
        }]);
        class Vt extends re {
            constructor(e) {
                super(),
                this.analyticsToken = "",
                this.analyticsTokenFormat = Pt.UNSPECIFIED,
                Lt.util.initPartial(e, this)
            }
            static fromBinary(e, t) {
                return (new Vt).fromBinary(e, t)
            }
            static fromJson(e, t) {
                return (new Vt).fromJson(e, t)
            }
            static fromJsonString(e, t) {
                return (new Vt).fromJsonString(e, t)
            }
            static equals(e, t) {
                return Lt.util.equals(Vt, e, t)
            }
        }
        Vt.runtime = Lt,
        Vt.typeName = "nike.clickstream.core.experimentation.v1.ExperimentActivated",
        Vt.fields = Lt.util.newFieldList( () => [{
            no: 1,
            name: "analytics_token",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "analytics_token_format",
            kind: "enum",
            T: Lt.getEnumType(Pt)
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.ADOBE_TARGET = 1] = "ADOBE_TARGET",
            e[e.NIKE_ODD = 2] = "NIKE_ODD"
        }(Pt || (Pt = {})),
        Lt.util.setEnumType(Pt, "nike.clickstream.core.experimentation.v1.ExperimentActivated.AnalyticsTokenFormat", [{
            no: 0,
            name: "ANALYTICS_TOKEN_FORMAT_UNSPECIFIED"
        }, {
            no: 1,
            name: "ANALYTICS_TOKEN_FORMAT_ADOBE_TARGET"
        }, {
            no: 2,
            name: "ANALYTICS_TOKEN_FORMAT_NIKE_ODD"
        }]);
        class Jt extends re {
            constructor(e) {
                super(),
                this.groupId = "",
                this.segmentId = "",
                this.isHoldout = !1,
                Lt.util.initPartial(e, this)
            }
            static fromBinary(e, t) {
                return (new Jt).fromBinary(e, t)
            }
            static fromJson(e, t) {
                return (new Jt).fromJson(e, t)
            }
            static fromJsonString(e, t) {
                return (new Jt).fromJsonString(e, t)
            }
            static equals(e, t) {
                return Lt.util.equals(Jt, e, t)
            }
        }
        Jt.runtime = Lt,
        Jt.typeName = "nike.clickstream.core.experimentation.v1.UniversalHoldout",
        Jt.fields = Lt.util.newFieldList( () => [{
            no: 1,
            name: "group_id",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "segment_id",
            kind: "scalar",
            T: 9
        }, {
            no: 3,
            name: "is_holdout",
            kind: "scalar",
            T: 8
        }]);
        class Gt extends re {
            constructor(e) {
                super(),
                this.underlyingAction = {
                    case: void 0
                },
                Lt.util.initPartial(e, this)
            }
            static fromBinary(e, t) {
                return (new Gt).fromBinary(e, t)
            }
            static fromJson(e, t) {
                return (new Gt).fromJson(e, t)
            }
            static fromJsonString(e, t) {
                return (new Gt).fromJsonString(e, t)
            }
            static equals(e, t) {
                return Lt.util.equals(Gt, e, t)
            }
        }
        Gt.runtime = Lt,
        Gt.typeName = "nike.clickstream.event.experimentation.v1.Action",
        Gt.fields = Lt.util.newFieldList( () => [{
            no: 1,
            name: "experiment_activated",
            kind: "message",
            T: Vt,
            oneof: "underlying_action"
        }, {
            no: 2,
            name: "universal_holdout",
            kind: "message",
            T: Jt,
            oneof: "underlying_action"
        }]);
        class zt extends re {
            constructor(e) {
                super(),
                this.deviceId = "",
                this.anonymousId = "",
                this.ecid = "",
                this.app = Ut.UNSPECIFIED,
                this.platform = Bt.UNSPECIFIED,
                Lt.util.initPartial(e, this)
            }
            static fromBinary(e, t) {
                return (new zt).fromBinary(e, t)
            }
            static fromJson(e, t) {
                return (new zt).fromJson(e, t)
            }
            static fromJsonString(e, t) {
                return (new zt).fromJsonString(e, t)
            }
            static equals(e, t) {
                return Lt.util.equals(zt, e, t)
            }
        }
        zt.runtime = Lt,
        zt.typeName = "nike.clickstream.event.experimentation.v1.Event",
        zt.fields = Lt.util.newFieldList( () => [{
            no: 1,
            name: "timestamp",
            kind: "message",
            T: $t
        }, {
            no: 2,
            name: "device_id",
            kind: "scalar",
            T: 9
        }, {
            no: 3,
            name: "anonymous_id",
            kind: "scalar",
            T: 9
        }, {
            no: 4,
            name: "ecid",
            kind: "scalar",
            T: 9
        }, {
            no: 5,
            name: "app",
            kind: "enum",
            T: Lt.getEnumType(Ut)
        }, {
            no: 6,
            name: "platform",
            kind: "enum",
            T: Lt.getEnumType(Bt)
        }, {
            no: 7,
            name: "action",
            kind: "message",
            T: Gt
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.DOTCOM = 1] = "DOTCOM",
            e[e.NIKEAPP = 2] = "NIKEAPP"
        }(Ut || (Ut = {})),
        Lt.util.setEnumType(Ut, "nike.clickstream.event.experimentation.v1.Event.App", [{
            no: 0,
            name: "APP_UNSPECIFIED"
        }, {
            no: 1,
            name: "APP_DOTCOM"
        }, {
            no: 2,
            name: "APP_NIKEAPP"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.WEB = 1] = "WEB",
            e[e.IOS = 2] = "IOS",
            e[e.ANDROID = 3] = "ANDROID"
        }(Bt || (Bt = {})),
        Lt.util.setEnumType(Bt, "nike.clickstream.event.experimentation.v1.Event.Platform", [{
            no: 0,
            name: "PLATFORM_UNSPECIFIED"
        }, {
            no: 1,
            name: "PLATFORM_WEB"
        }, {
            no: 2,
            name: "PLATFORM_IOS"
        }, {
            no: 3,
            name: "PLATFORM_ANDROID"
        }]);
        class qt extends re {
            constructor(e) {
                super(),
                this.event = {
                    case: void 0
                },
                Lt.util.initPartial(e, this)
            }
            static fromBinary(e, t) {
                return (new qt).fromBinary(e, t)
            }
            static fromJson(e, t) {
                return (new qt).fromJson(e, t)
            }
            static fromJsonString(e, t) {
                return (new qt).fromJsonString(e, t)
            }
            static equals(e, t) {
                return Lt.util.equals(qt, e, t)
            }
        }
        qt.runtime = Lt,
        qt.typeName = "nike.clickstream.service.experimentation.v1.TrackEventRequest",
        qt.fields = Lt.util.newFieldList( () => [{
            no: 1,
            name: "event_v1",
            kind: "message",
            T: zt,
            oneof: "event"
        }]);
        class Wt extends re {
            constructor(e) {
                super(),
                this.message = "",
                this.eventId = "",
                Lt.util.initPartial(e, this)
            }
            static fromBinary(e, t) {
                return (new Wt).fromBinary(e, t)
            }
            static fromJson(e, t) {
                return (new Wt).fromJson(e, t)
            }
            static fromJsonString(e, t) {
                return (new Wt).fromJsonString(e, t)
            }
            static equals(e, t) {
                return Lt.util.equals(Wt, e, t)
            }
        }
        Wt.runtime = Lt,
        Wt.typeName = "nike.clickstream.service.experimentation.v1.TrackEventResponse",
        Wt.fields = Lt.util.newFieldList( () => [{
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "event_id",
            kind: "scalar",
            T: 9
        }]),
        function(e) {
            e[e.Unary = 0] = "Unary",
            e[e.ServerStreaming = 1] = "ServerStreaming",
            e[e.ClientStreaming = 2] = "ClientStreaming",
            e[e.BiDiStreaming = 3] = "BiDiStreaming"
        }(jt || (jt = {})),
        function(e) {
            e[e.NoSideEffects = 1] = "NoSideEffects",
            e[e.Idempotent = 2] = "Idempotent"
        }(Mt || (Mt = {}));
        const Xt = {
            typeName: "nike.clickstream.service.experimentation.v1.Service",
            methods: {
                trackEvent: {
                    name: "TrackEvent",
                    I: qt,
                    O: Wt,
                    kind: jt.Unary
                }
            }
        };
        function Ht() {
            return {
                get(e) {
                    return e.id in this ? this[e.id] : e.defaultValue
                },
                set(e, t) {
                    return this[e.id] = t,
                    this
                },
                delete(e) {
                    return delete this[e.id],
                    this
                }
            }
        }
        var Yt;
        function Qt(e) {
            const t = Yt[e];
            return "string" != typeof t ? e.toString() : t[0].toLowerCase() + t.substring(1).replace(/[A-Z]/g, e => "_" + e.toLowerCase())
        }
        let Kt;
        !function(e) {
            e[e.Canceled = 1] = "Canceled",
            e[e.Unknown = 2] = "Unknown",
            e[e.InvalidArgument = 3] = "InvalidArgument",
            e[e.DeadlineExceeded = 4] = "DeadlineExceeded",
            e[e.NotFound = 5] = "NotFound",
            e[e.AlreadyExists = 6] = "AlreadyExists",
            e[e.PermissionDenied = 7] = "PermissionDenied",
            e[e.ResourceExhausted = 8] = "ResourceExhausted",
            e[e.FailedPrecondition = 9] = "FailedPrecondition",
            e[e.Aborted = 10] = "Aborted",
            e[e.OutOfRange = 11] = "OutOfRange",
            e[e.Unimplemented = 12] = "Unimplemented",
            e[e.Internal = 13] = "Internal",
            e[e.Unavailable = 14] = "Unavailable",
            e[e.DataLoss = 15] = "DataLoss",
            e[e.Unauthenticated = 16] = "Unauthenticated"
        }(Yt || (Yt = {}));
        class Zt extends Error {
            constructor(e, t=Yt.Unknown, n, r, o) {
                super(function(e, t) {
                    return e.length ? `[${Qt(t)}] ${e}` : `[${Qt(t)}]`
                }(e, t)),
                this.name = "ConnectError",
                Object.setPrototypeOf(this, new.target.prototype),
                this.rawMessage = e,
                this.code = t,
                this.metadata = new Headers(null != n ? n : {}),
                this.details = null != r ? r : [],
                this.cause = o
            }
            static from(e, t=Yt.Unknown) {
                return e instanceof Zt ? e : e instanceof Error ? "AbortError" == e.name ? new Zt(e.message,Yt.Canceled) : new Zt(e.message,t,void 0,void 0,e) : new Zt(String(e),t,void 0,void 0,e)
            }
            static[Symbol.hasInstance](e) {
                return e instanceof Error && (Object.getPrototypeOf(e) === Zt.prototype || "ConnectError" === e.name && "code"in e && "number" == typeof e.code && "metadata"in e && "details"in e && Array.isArray(e.details) && "rawMessage"in e && "string" == typeof e.rawMessage && "cause"in e)
            }
            findDetails(e) {
                const t = "typeName"in e ? {
                    findMessage: t => t === e.typeName ? e : void 0
                } : e
                  , n = [];
                for (const e of this.details) {
                    if ("getType"in e) {
                        t.findMessage(e.getType().typeName) && n.push(e);
                        continue
                    }
                    const r = t.findMessage(e.type);
                    if (r)
                        try {
                            n.push(r.fromBinary(e.value))
                        } catch (e) {}
                }
                return n
            }
        }
        function en(e) {
            var t;
            const n = Object.assign({}, e);
            return null !== (t = n.ignoreUnknownFields) && void 0 !== t || (n.ignoreUnknownFields = !0),
            n
        }
        function tn(e, t, n, r) {
            const o = t ? nn(e.I, r) : rn(e.I, n);
            return {
                parse: (t ? nn(e.O, r) : rn(e.O, n)).parse,
                serialize: o.serialize
            }
        }
        function nn(e, t) {
            return {
                parse(n) {
                    try {
                        return e.fromBinary(n, t)
                    } catch (e) {
                        const t = e instanceof Error ? e.message : String(e);
                        throw new Zt(`parse binary: ${t}`,Yt.Internal)
                    }
                },
                serialize(e) {
                    try {
                        return e.toBinary(t)
                    } catch (e) {
                        const t = e instanceof Error ? e.message : String(e);
                        throw new Zt(`serialize binary: ${t}`,Yt.Internal)
                    }
                }
            }
        }
        function rn(e, t) {
            var n, r;
            const o = null !== (n = null == t ? void 0 : t.textEncoder) && void 0 !== n ? n : new TextEncoder
              , i = null !== (r = null == t ? void 0 : t.textDecoder) && void 0 !== r ? r : new TextDecoder
              , s = en(t);
            return {
                parse(t) {
                    try {
                        const n = i.decode(t);
                        return e.fromJsonString(n, s)
                    } catch (e) {
                        throw Zt.from(e, Yt.InvalidArgument)
                    }
                },
                serialize(e) {
                    try {
                        const t = e.toJsonString(s);
                        return o.encode(t)
                    } catch (e) {
                        throw Zt.from(e, Yt.Internal)
                    }
                }
            }
        }
        function on(e, t) {
            var n;
            return null !== (n = null == t ? void 0 : t.concat().reverse().reduce( (e, t) => t(e), e)) && void 0 !== n ? n : e
        }
        function sn(e) {
            if (!e.aborted)
                return;
            if (void 0 !== e.reason)
                return e.reason;
            const t = new Error("This operation was aborted");
            return t.name = "AbortError",
            t
        }
        function an(e, t) {
            return t instanceof e ? t : new e(t)
        }
        function cn(e, t) {
            function n(t) {
                return !0 === t.done ? t : {
                    done: t.done,
                    value: an(e, t.value)
                }
            }
            return {
                [Symbol.asyncIterator]() {
                    const e = t[Symbol.asyncIterator]()
                      , r = {
                        next: () => e.next().then(n)
                    };
                    return void 0 !== e.throw && (r.throw = t => e.throw(t).then(n)),
                    void 0 !== e.return && (r.return = t => e.return(t).then(n)),
                    r
                }
            }
        }
        function un(e) {
            const {signal: t, cleanup: n} = function(e) {
                const t = new AbortController
                  , n = () => {
                    t.abort(new Zt("the operation timed out",Yt.DeadlineExceeded))
                }
                ;
                let r;
                return void 0 !== e && (e <= 0 ? n() : r = setTimeout(n, e)),
                {
                    signal: t.signal,
                    cleanup: () => clearTimeout(r)
                }
            }(e.timeoutMs)
              , r = function(...e) {
                const t = new AbortController
                  , n = e.filter(e => void 0 !== e).concat(t.signal);
                for (const e of n) {
                    if (e.aborted) {
                        r.apply(e);
                        break
                    }
                    e.addEventListener("abort", r)
                }
                function r() {
                    t.signal.aborted || t.abort(sn(this));
                    for (const e of n)
                        e.removeEventListener("abort", r)
                }
                return t
            }(e.signal, t);
            return [r.signal, function(e) {
                const o = Zt.from(t.aborted ? sn(t) : e);
                return r.abort(o),
                n(),
                Promise.reject(o)
            }
            , function() {
                n(),
                r.abort()
            }
            ]
        }
        function ln(e, t, n) {
            const r = "string" == typeof t ? t : t.typeName
              , o = "string" == typeof n ? n : n.name;
            return e.toString().replace(/\/?$/, `/${r}/${o}`)
        }
        const dn = "Content-Type"
          , fn = "Content-Length"
          , hn = "Content-Encoding"
          , pn = "Accept-Encoding"
          , mn = "Connect-Protocol-Version"
          , gn = "User-Agent"
          , yn = "1";
        const wn = /^application\/(connect\+)?(?:(json)(?:; ?charset=utf-?8)?|(proto))$/i;
        function vn(e, t, n, r, o) {
            const i = new Headers(null != r ? r : {});
            return void 0 !== n && i.set("Connect-Timeout-Ms", `${n}`),
            i.set(dn, e == jt.Unary ? t ? "application/proto" : "application/json" : t ? "application/connect+proto" : "application/connect+json"),
            i.set(mn, yn),
            o && !i.has(gn) && i.set(gn, "connect-es/1.7.0"),
            i
        }
        const bn = "application/";
        function En(e, t, n) {
            let r = `?connect=v${yn}`;
            const o = e.header.get(dn);
            0 === (null == o ? void 0 : o.indexOf(bn)) && (r += "&encoding=" + encodeURIComponent(o.slice(12)));
            const i = e.header.get(hn);
            null !== i && "identity" !== i && (r += "&compression=" + encodeURIComponent(i),
            n = !0),
            n && (r += "&base64=1"),
            r += "&message=" + function(e, t) {
                return t ? Le.enc(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "") : encodeURIComponent((new TextDecoder).decode(e))
            }(t, n);
            const s = e.url + r
              , a = new Headers(e.header);
            return [mn, dn, fn, hn, pn].forEach(e => a.delete(e)),
            Object.assign(Object.assign({}, e), {
                init: Object.assign(Object.assign({}, e.init), {
                    method: "GET"
                }),
                url: s,
                header: a
            })
        }
        function _n(e, t, n, r) {
            const o = r.get(dn)
              , i = function(e) {
                const t = null == e ? void 0 : e.match(wn);
                if (!t)
                    return;
                return {
                    stream: !!t[1],
                    binary: !!t[3]
                }
            }(o);
            if (200 !== n) {
                const t = new Zt(`HTTP ${n}`,function(e) {
                    switch (e) {
                    case 400:
                        return Yt.Internal;
                    case 401:
                        return Yt.Unauthenticated;
                    case 403:
                        return Yt.PermissionDenied;
                    case 404:
                        return Yt.Unimplemented;
                    case 429:
                    case 502:
                    case 503:
                    case 504:
                        return Yt.Unavailable;
                    default:
                        return Yt.Unknown
                    }
                }(n),r);
                if (e == jt.Unary && i && !i.binary)
                    return {
                        isUnaryError: !0,
                        unaryError: t
                    };
                throw t
            }
            const s = t
              , a = e !== jt.Unary;
            if ((null == i ? void 0 : i.binary) !== s || i.stream !== a)
                throw new Zt(`unsupported content type ${o}`,void 0 === i ? Yt.Unknown : Yt.Internal,r);
            return {
                isUnaryError: !1
            }
        }
        function An(e, t, n) {
            var r;
            if (t && new Headers(t).forEach( (e, t) => n.metadata.append(t, e)),
            "object" != typeof e || null == e || Array.isArray(e))
                throw n;
            let o = n.code;
            "code"in e && "string" == typeof e.code && (o = null !== (r = function(e) {
                if (!Kt) {
                    Kt = {};
                    for (const e of Object.values(Yt))
                        "string" != typeof e && (Kt[Qt(e)] = e)
                }
                return Kt[e]
            }(e.code)) && void 0 !== r ? r : o);
            const i = e.message;
            if (null != i && "string" != typeof i)
                throw n;
            const s = new Zt(null != i ? i : "",o,t);
            if ("details"in e && Array.isArray(e.details))
                for (const t of e.details) {
                    if (null === t || "object" != typeof t || Array.isArray(t) || "string" != typeof t.type || "string" != typeof t.value)
                        throw n;
                    try {
                        s.details.push({
                            type: t.type,
                            value: Le.dec(t.value),
                            debug: t.debug
                        })
                    } catch (e) {
                        throw n
                    }
                }
            return s
        }
        function Nn(e) {
            const t = new Headers
              , n = new Headers;
            return e.forEach( (e, r) => {
                r.toLowerCase().startsWith("trailer-") ? n.append(r.substring(8), e) : t.append(r, e)
            }
            ),
            [t, n]
        }
        function Tn(e) {
            const t = new Zt("invalid end stream",Yt.Unknown);
            let n;
            try {
                n = JSON.parse("string" == typeof e ? e : (new TextDecoder).decode(e))
            } catch (e) {
                throw t
            }
            if ("object" != typeof n || null == n || Array.isArray(n))
                throw t;
            const r = new Headers;
            if ("metadata"in n) {
                if ("object" != typeof n.metadata || null == n.metadata || Array.isArray(n.metadata))
                    throw t;
                for (const [e,o] of Object.entries(n.metadata)) {
                    if (!Array.isArray(o) || o.some(e => "string" != typeof e))
                        throw t;
                    for (const t of o)
                        r.append(e, t)
                }
            }
            return {
                metadata: r,
                error: "error"in n && null != n.error ? An(n.error, r, t) : void 0
            }
        }
        var In = function(e) {
            return this instanceof In ? (this.v = e,
            this) : new In(e)
        }
          , Sn = function(e, t, n) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var r, o = n.apply(e, t || []), i = [];
            return r = {},
            s("next"),
            s("throw"),
            s("return", function(e) {
                return function(t) {
                    return Promise.resolve(t).then(e, u)
                }
            }),
            r[Symbol.asyncIterator] = function() {
                return this
            }
            ,
            r;
            function s(e, t) {
                o[e] && (r[e] = function(t) {
                    return new Promise(function(n, r) {
                        i.push([e, t, n, r]) > 1 || a(e, t)
                    }
                    )
                }
                ,
                t && (r[e] = t(r[e])))
            }
            function a(e, t) {
                try {
                    (n = o[e](t)).value instanceof In ? Promise.resolve(n.value.v).then(c, u) : l(i[0][2], n)
                } catch (e) {
                    l(i[0][3], e)
                }
                var n
            }
            function c(e) {
                a("next", e)
            }
            function u(e) {
                a("throw", e)
            }
            function l(e, t) {
                e(t),
                i.shift(),
                i.length && a(i[0][0], i[0][1])
            }
        };
        function On(e) {
            var t;
            !function() {
                try {
                    new Headers
                } catch (e) {
                    throw new Error("connect-web requires the fetch API. Are you running on an old version of Node.js? Node.js is not supported in Connect for Web - please stay tuned for Connect for Node.")
                }
            }();
            const n = null !== (t = e.useBinaryFormat) && void 0 !== t && t;
            return {
                async unary(t, r, o, i, s, a, c) {
                    var u;
                    const {serialize: l, parse: d} = tn(r, n, e.jsonOptions, e.binaryOptions);
                    return i = void 0 === i ? e.defaultTimeoutMs : i <= 0 ? void 0 : i,
                    await function(e) {
                        const t = on(e.next, e.interceptors)
                          , [n,r,o] = un(e);
                        return t(Object.assign(Object.assign({}, e.req), {
                            message: an(e.req.method.I, e.req.message),
                            signal: n
                        })).then(e => (o(),
                        e), r)
                    }({
                        interceptors: e.interceptors,
                        signal: o,
                        timeoutMs: i,
                        req: {
                            stream: !1,
                            service: t,
                            method: r,
                            url: ln(e.baseUrl, t, r),
                            init: {
                                method: "POST",
                                credentials: null !== (u = e.credentials) && void 0 !== u ? u : "same-origin",
                                redirect: "error",
                                mode: "cors"
                            },
                            header: vn(r.kind, n, i, s, !1),
                            contextValues: null != c ? c : Ht(),
                            message: a
                        },
                        next: async o => {
                            var i;
                            let s = null;
                            !0 === e.useHttpGet && r.idempotency === Mt.NoSideEffects ? o = En(o, l(o.message), n) : s = l(o.message);
                            const a = null !== (i = e.fetch) && void 0 !== i ? i : globalThis.fetch
                              , c = await a(o.url, Object.assign(Object.assign({}, o.init), {
                                headers: o.header,
                                signal: o.signal,
                                body: s
                            }))
                              , {isUnaryError: u, unaryError: f} = _n(r.kind, n, c.status, c.headers);
                            if (u)
                                throw An(await c.json(), function(...e) {
                                    const t = new Headers;
                                    for (const n of e)
                                        n.forEach( (e, n) => {
                                            t.append(n, e)
                                        }
                                        );
                                    return t
                                }(...Nn(c.headers)), f);
                            const [h,p] = Nn(c.headers);
                            return {
                                stream: !1,
                                service: t,
                                method: r,
                                header: h,
                                message: n ? d(new Uint8Array(await c.arrayBuffer())) : r.O.fromJson(await c.json(), en(e.jsonOptions)),
                                trailer: p
                            }
                        }
                    })
                },
                async stream(t, r, o, i, s, a, c) {
                    var u;
                    const {serialize: l, parse: d} = tn(r, n, e.jsonOptions, e.binaryOptions);
                    function f(e, t, n, r) {
                        return Sn(this, arguments, function*() {
                            const o = function(e) {
                                let t, n = new Uint8Array(0);
                                function r(e) {
                                    const t = new Uint8Array(n.length + e.length);
                                    t.set(n),
                                    t.set(e, n.length),
                                    n = t
                                }
                                return new ReadableStream({
                                    start() {
                                        t = e.getReader()
                                    },
                                    async pull(e) {
                                        let o;
                                        for (; ; ) {
                                            if (void 0 === o && n.byteLength >= 5) {
                                                let e = 0;
                                                for (let t = 1; t < 5; t++)
                                                    e = (e << 8) + n[t];
                                                o = {
                                                    flags: n[0],
                                                    length: e
                                                }
                                            }
                                            if (void 0 !== o && n.byteLength >= o.length + 5)
                                                break;
                                            const e = await t.read();
                                            if (e.done)
                                                break;
                                            r(e.value)
                                        }
                                        if (void 0 === o)
                                            return 0 == n.byteLength ? void e.close() : void e.error(new Zt("premature end of stream",Yt.DataLoss));
                                        const i = n.subarray(5, 5 + o.length);
                                        n = n.subarray(5 + o.length),
                                        e.enqueue({
                                            flags: o.flags,
                                            data: i
                                        })
                                    }
                                })
                            }(e).getReader();
                            let i = !1;
                            for (; ; ) {
                                const e = yield In(o.read());
                                if (e.done)
                                    break;
                                const {flags: r, data: s} = e.value;
                                if (!(1 & ~r))
                                    throw new Zt("protocol error: received unsupported compressed output",Yt.Internal);
                                if (!(2 & ~r)) {
                                    i = !0;
                                    const e = Tn(s);
                                    if (e.error) {
                                        const t = e.error;
                                        throw n.forEach( (e, n) => {
                                            t.metadata.append(n, e)
                                        }
                                        ),
                                        t
                                    }
                                    e.metadata.forEach( (e, n) => t.set(n, e));
                                    continue
                                }
                                yield yield In(d(s))
                            }
                            if ("throwIfAborted"in r && r.throwIfAborted(),
                            !i)
                                throw "missing EndStreamResponse"
                        })
                    }
                    async function h(e) {
                        if (r.kind != jt.ServerStreaming)
                            throw "The fetch API does not support streaming request bodies";
                        const t = await e[Symbol.asyncIterator]().next();
                        if (1 == t.done)
                            throw "missing request message";
                        return function(e, t) {
                            const n = new Uint8Array(t.length + 5);
                            n.set(t, 5);
                            const r = new DataView(n.buffer,n.byteOffset,n.byteLength);
                            return r.setUint8(0, e),
                            r.setUint32(1, t.length),
                            n
                        }(0, l(t.value))
                    }
                    return i = void 0 === i ? e.defaultTimeoutMs : i <= 0 ? void 0 : i,
                    await function(e) {
                        const t = on(e.next, e.interceptors)
                          , [n,r,o] = un(e)
                          , i = Object.assign(Object.assign({}, e.req), {
                            message: cn(e.req.method.I, e.req.message),
                            signal: n
                        });
                        let s = !1;
                        return n.addEventListener("abort", function() {
                            var t, n;
                            const r = e.req.message[Symbol.asyncIterator]();
                            s || null === (t = r.throw) || void 0 === t || t.call(r, this.reason).catch( () => {}
                            ),
                            null === (n = r.return) || void 0 === n || n.call(r).catch( () => {}
                            )
                        }),
                        t(i).then(e => Object.assign(Object.assign({}, e), {
                            message: {
                                [Symbol.asyncIterator]() {
                                    const t = e.message[Symbol.asyncIterator]();
                                    return {
                                        next: () => t.next().then(e => (1 == e.done && (s = !0,
                                        o()),
                                        e), r)
                                    }
                                }
                            }
                        }), r)
                    }({
                        interceptors: e.interceptors,
                        timeoutMs: i,
                        signal: o,
                        req: {
                            stream: !0,
                            service: t,
                            method: r,
                            url: ln(e.baseUrl, t, r),
                            init: {
                                method: "POST",
                                credentials: null !== (u = e.credentials) && void 0 !== u ? u : "same-origin",
                                redirect: "error",
                                mode: "cors"
                            },
                            header: vn(r.kind, n, i, s, !1),
                            contextValues: null != c ? c : Ht(),
                            message: a
                        },
                        next: async t => {
                            var o;
                            const i = null !== (o = e.fetch) && void 0 !== o ? o : globalThis.fetch
                              , s = await i(t.url, Object.assign(Object.assign({}, t.init), {
                                headers: t.header,
                                signal: t.signal,
                                body: await h(t.message)
                            }));
                            if (_n(r.kind, n, s.status, s.headers),
                            null === s.body)
                                throw "missing response body";
                            const a = new Headers;
                            return Object.assign(Object.assign({}, t), {
                                header: s.headers,
                                trailer: a,
                                message: f(s.body, a, s.headers, t.signal)
                            })
                        }
                    })
                }
            }
        }
        var Cn = function(e) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var t, n = e[Symbol.asyncIterator];
            return n ? n.call(e) : (e = "function" == typeof __values ? __values(e) : e[Symbol.iterator](),
            t = {},
            r("next"),
            r("throw"),
            r("return"),
            t[Symbol.asyncIterator] = function() {
                return this
            }
            ,
            t);
            function r(n) {
                t[n] = e[n] && function(t) {
                    return new Promise(function(r, o) {
                        (function(e, t, n, r) {
                            Promise.resolve(r).then(function(t) {
                                e({
                                    value: t,
                                    done: n
                                })
                            }, t)
                        }
                        )(r, o, (t = e[n](t)).done, t.value)
                    }
                    )
                }
            }
        }
          , kn = function(e) {
            return this instanceof kn ? (this.v = e,
            this) : new kn(e)
        }
          , Dn = function(e, t, n) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var r, o = n.apply(e, t || []), i = [];
            return r = {},
            s("next"),
            s("throw"),
            s("return", function(e) {
                return function(t) {
                    return Promise.resolve(t).then(e, u)
                }
            }),
            r[Symbol.asyncIterator] = function() {
                return this
            }
            ,
            r;
            function s(e, t) {
                o[e] && (r[e] = function(t) {
                    return new Promise(function(n, r) {
                        i.push([e, t, n, r]) > 1 || a(e, t)
                    }
                    )
                }
                ,
                t && (r[e] = t(r[e])))
            }
            function a(e, t) {
                try {
                    (n = o[e](t)).value instanceof kn ? Promise.resolve(n.value.v).then(c, u) : l(i[0][2], n)
                } catch (e) {
                    l(i[0][3], e)
                }
                var n
            }
            function c(e) {
                a("next", e)
            }
            function u(e) {
                a("throw", e)
            }
            function l(e, t) {
                e(t),
                i.shift(),
                i.length && a(i[0][0], i[0][1])
            }
        }
          , xn = function(e) {
            var t, n;
            return t = {},
            r("next"),
            r("throw", function(e) {
                throw e
            }),
            r("return"),
            t[Symbol.iterator] = function() {
                return this
            }
            ,
            t;
            function r(r, o) {
                t[r] = e[r] ? function(t) {
                    return (n = !n) ? {
                        value: kn(e[r](t)),
                        done: !1
                    } : o ? o(t) : t
                }
                : o
            }
        };
        var Ln, Rn, Fn = function(e) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var t, n = e[Symbol.asyncIterator];
            return n ? n.call(e) : (e = "function" == typeof __values ? __values(e) : e[Symbol.iterator](),
            t = {},
            r("next"),
            r("throw"),
            r("return"),
            t[Symbol.asyncIterator] = function() {
                return this
            }
            ,
            t);
            function r(n) {
                t[n] = e[n] && function(t) {
                    return new Promise(function(r, o) {
                        (function(e, t, n, r) {
                            Promise.resolve(r).then(function(t) {
                                e({
                                    value: t,
                                    done: n
                                })
                            }, t)
                        }
                        )(r, o, (t = e[n](t)).done, t.value)
                    }
                    )
                }
            }
        }, Pn = function(e) {
            return this instanceof Pn ? (this.v = e,
            this) : new Pn(e)
        }, Un = function(e) {
            var t, n;
            return t = {},
            r("next"),
            r("throw", function(e) {
                throw e
            }),
            r("return"),
            t[Symbol.iterator] = function() {
                return this
            }
            ,
            t;
            function r(r, o) {
                t[r] = e[r] ? function(t) {
                    return (n = !n) ? {
                        value: Pn(e[r](t)),
                        done: !1
                    } : o ? o(t) : t
                }
                : o
            }
        }, Bn = function(e, t, n) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var r, o = n.apply(e, t || []), i = [];
            return r = {},
            s("next"),
            s("throw"),
            s("return", function(e) {
                return function(t) {
                    return Promise.resolve(t).then(e, u)
                }
            }),
            r[Symbol.asyncIterator] = function() {
                return this
            }
            ,
            r;
            function s(e, t) {
                o[e] && (r[e] = function(t) {
                    return new Promise(function(n, r) {
                        i.push([e, t, n, r]) > 1 || a(e, t)
                    }
                    )
                }
                ,
                t && (r[e] = t(r[e])))
            }
            function a(e, t) {
                try {
                    (n = o[e](t)).value instanceof Pn ? Promise.resolve(n.value.v).then(c, u) : l(i[0][2], n)
                } catch (e) {
                    l(i[0][3], e)
                }
                var n
            }
            function c(e) {
                a("next", e)
            }
            function u(e) {
                a("throw", e)
            }
            function l(e, t) {
                e(t),
                i.shift(),
                i.length && a(i[0][0], i[0][1])
            }
        };
        function jn(e, t) {
            return function(e, t) {
                const n = {};
                for (const [r,o] of Object.entries(e.methods)) {
                    const i = t(Object.assign(Object.assign({}, o), {
                        localName: r,
                        service: e
                    }));
                    null != i && (n[r] = i)
                }
                return n
            }(e, n => {
                switch (n.kind) {
                case jt.Unary:
                    return function(e, t, n) {
                        return async function(r, o) {
                            var i, s;
                            const a = await e.unary(t, n, null == o ? void 0 : o.signal, null == o ? void 0 : o.timeoutMs, null == o ? void 0 : o.headers, r, null == o ? void 0 : o.contextValues);
                            return null === (i = null == o ? void 0 : o.onHeader) || void 0 === i || i.call(o, a.header),
                            null === (s = null == o ? void 0 : o.onTrailer) || void 0 === s || s.call(o, a.trailer),
                            a.message
                        }
                    }(t, e, n);
                case jt.ServerStreaming:
                    return function(e, t, n) {
                        return function(r, o) {
                            return Mn(e.stream(t, n, null == o ? void 0 : o.signal, null == o ? void 0 : o.timeoutMs, null == o ? void 0 : o.headers, function(e) {
                                return Dn(this, arguments, function*() {
                                    yield kn(yield*xn(Cn(e)))
                                })
                            }([r]), null == o ? void 0 : o.contextValues), o)
                        }
                    }(t, e, n);
                case jt.ClientStreaming:
                    return function(e, t, n) {
                        return async function(r, o) {
                            var i, s, a, c, u, l;
                            const d = await e.stream(t, n, null == o ? void 0 : o.signal, null == o ? void 0 : o.timeoutMs, null == o ? void 0 : o.headers, r, null == o ? void 0 : o.contextValues);
                            let f;
                            null === (u = null == o ? void 0 : o.onHeader) || void 0 === u || u.call(o, d.header);
                            let h = 0;
                            try {
                                for (var p, m = !0, g = Fn(d.message); !(i = (p = await g.next()).done); m = !0) {
                                    c = p.value,
                                    m = !1;
                                    f = c,
                                    h++
                                }
                            } catch (e) {
                                s = {
                                    error: e
                                }
                            } finally {
                                try {
                                    m || i || !(a = g.return) || await a.call(g)
                                } finally {
                                    if (s)
                                        throw s.error
                                }
                            }
                            if (!f)
                                throw new Zt("protocol error: missing response message",Yt.Unimplemented);
                            if (h > 1)
                                throw new Zt("protocol error: received extra messages for client streaming method",Yt.Unimplemented);
                            return null === (l = null == o ? void 0 : o.onTrailer) || void 0 === l || l.call(o, d.trailer),
                            f
                        }
                    }(t, e, n);
                case jt.BiDiStreaming:
                    return function(e, t, n) {
                        return function(r, o) {
                            return Mn(e.stream(t, n, null == o ? void 0 : o.signal, null == o ? void 0 : o.timeoutMs, null == o ? void 0 : o.headers, r, null == o ? void 0 : o.contextValues), o)
                        }
                    }(t, e, n);
                default:
                    return null
                }
            }
            )
        }
        function Mn(e, t) {
            const n = function() {
                return Bn(this, arguments, function*() {
                    var n, r;
                    const o = yield Pn(e);
                    null === (n = null == t ? void 0 : t.onHeader) || void 0 === n || n.call(t, o.header),
                    yield Pn(yield*Un(Fn(o.message))),
                    null === (r = null == t ? void 0 : t.onTrailer) || void 0 === r || r.call(t, o.trailer)
                })
            }()[Symbol.asyncIterator]();
            return {
                [Symbol.asyncIterator]: () => ({
                    next: () => n.next()
                })
            }
        }
        async function $n({debug: e}) {
            const t = On({
                baseUrl: "https://experimentation.halfpipe.nike.com",
                fetch: async (e, t) => {
                    try {
                        return await fetch(e, t)
                    } catch (e) {
                        throw T("gRPC request failed", {
                            error: e
                        }),
                        e
                    }
                }
                ,
                useBinaryFormat: !e
            });
            return {
                v1: jn(Xt, t)
            }
        }
        !function(e) {
            e[e.DOTCOM = 1] = "DOTCOM"
        }(Ln || (Ln = {})),
        function(e) {
            e[e.WEB = 1] = "WEB"
        }(Rn || (Rn = {}));
        const Vn = async (e, t, n) => {
            const r = await $n({
                debug: !1
            })
              , o = await (async () => {
                try {
                    if ("function" != typeof window.alloy)
                        return N("Alloy is not initialized, cannot fetch ECID"),
                        null;
                    {
                        const e = await window.alloy("getIdentity");
                        if (e && e?.identity?.ECID)
                            return e.identity.ECID
                    }
                } catch (e) {
                    return T("Failed to fetch ecid using Alloy getIdentity method", {
                        error: "object" == typeof e && null !== e ? e : {
                            message: String(e)
                        }
                    }),
                    null
                }
                return null
            }
            )()
              , i = _("anonymousId") ?? void 0
              , s = n ?? {
                holdoutGroupID: null,
                segmentID: null,
                isHoldout: !1
            };
            setTimeout(async () => {
                if (window?.webShellClient) {
                    const t = await k();
                    if (await R(t)) {
                        window.webShellClient.analytics && await window.webShellClient.analytics.isInitialized();
                        try {
                            const t = {
                                timestamp: $t.fromDate(new Date(Date.now() + 100)),
                                deviceId: e,
                                anonymousId: i,
                                ecid: o ?? void 0,
                                app: Ln.DOTCOM,
                                platform: Rn.WEB,
                                action: {
                                    underlyingAction: {
                                        case: "universalHoldout",
                                        value: {
                                            groupId: s.holdoutGroupID ?? void 0,
                                            segmentId: s.segmentID ?? void 0,
                                            isHoldout: s.isHoldout
                                        }
                                    }
                                }
                            };
                            await r.v1.trackEvent({
                                event: {
                                    case: "eventV1",
                                    value: t
                                }
                            })
                        } catch (e) {
                            T("[Universal Holdout] Analytics events sending error")
                        }
                    }
                }
            }
            , 100),
            A(`[UH] ${B}`, {
                UNIVERSAL_HOLDOUT_EVENT_NAME: B,
                bucket: t,
                deviceId: e,
                ecid: o,
                anonymousId: i,
                groupId: s.holdoutGroupID ?? "0",
                segmentId: s.segmentID ?? "0",
                disposition: s.isHoldout
            })
        }
        ;
        let Jn = null;
        const Gn = ( () => {
            let e = null;
            return t => (Jn !== t && (Jn = t,
            e = null),
            e || (e = new Promise(e => {
                try {
                    ne(t).then(n => {
                        if (n.holdoutGroups.length) {
                            const r = a(t)
                              , o = n.holdoutGroups.reduce( (e, t) => {
                                if (e.isHoldout)
                                    return e;
                                const n = t.holdoutGroupID;
                                return t.segments.reduce( (e, t) => e.isHoldout ? e : t.floor <= r && r <= t.ceiling ? {
                                    holdoutGroupID: n,
                                    isHoldout: t.holdout,
                                    segmentID: t.segmentID
                                } : e, e)
                            }
                            , {
                                holdoutGroupID: null,
                                isHoldout: !1,
                                segmentID: null
                            });
                            return Vn(t, r, o),
                            e(o.isHoldout)
                        }
                        return e(!1)
                    }
                    ).catch(n => (T(`Error in deviceHoldoutCheck function. DeviceID: ${t}`, n),
                    e(!1)))
                } catch (n) {
                    return T(`Error in deviceHoldoutCheck function. DeviceID: ${t}`, n),
                    e(!1)
                }
            }
            ),
            e))
        }
        )()
          , zn = async (e, t) => {
            const n = await (async e => {
                const t = await ne(e)
                  , n = [];
                for (const e of t.holdoutGroups)
                    if (e.exemptLocations)
                        for (const t of Object.values(e.exemptLocations))
                            n.push(...t);
                return n
            }
            )(e);
            return n.some(e => {
                try {
                    if (!(e => {
                        if (e.length > 500)
                            return !1;
                        const t = [/(\w+\+)+/, /(\w+\*)+/, /(\w+\{[0-9,]+\})+/, /(\(.*\+.*\))+\+/, /(\(.*\*.*\))+\*/, /(.*\+){2,}/, /(.*\*){2,}/, /\([^)]*\+[^)]*\)\*/, /\([^)]*\*[^)]*\)\+/];
                        for (const n of t)
                            if (n.test(e))
                                return !1;
                        let n = 0
                          , r = 0;
                        for (const t of e)
                            "(" === t ? (n++,
                            r = Math.max(r, n)) : ")" === t && n--;
                        return !(r > 3)
                    }
                    )(e))
                        return !1;
                    const n = String(e).substring(0, 500);
                    return new RegExp(`^${n}`).test(t)
                } catch {
                    return !1
                }
            }
            )
        }
          , qn = async (e, t, n) => {
            try {
                if (Y("bypassHoldout"))
                    return !1;
                if (!await Gn(e))
                    return !1;
                if (n?.user?.isSwooshUser || await (async () => {
                    if (window?.webShellClient?.identity)
                        return window.webShellClient.identity.getIsSwooshUser();
                    return !1
                }
                )())
                    return !1;
                return !await zn(e, t)
            } catch (r) {
                return T("Error in isHoldout function:", {
                    error: r,
                    deviceId: e,
                    locationName: t,
                    contextData: n
                }),
                !1
            }
        }
        ;
        class Wn {
            constructor(e) {
                this._locations = [],
                this._alloy = e
            }
        }
        function Xn(e, t, n) {
            const r = {};
            return e && (r.customerecid = [{
                id: e,
                authenticatedState: n ? "authenticated" : P,
                primary: !0
            }]),
            t && (r.FPID = [{
                id: t,
                authenticatedState: P
            }]),
            r
        }
        class Hn {
            isDebugEnabled() {
                try {
                    return "1" === localStorage?.getItem("dcac:debug")?.split("|")[0]
                } catch (e) {
                    return N("isDebugEnabled", {
                        error: e
                    }),
                    !1
                }
            }
            async grpcClient() {
                if (!this._client) {
                    const e = await $n({
                        debug: this.isDebugEnabled()
                    });
                    this._client = e.v1
                }
                return this._client
            }
            async sendAdobeAnalyticsEvent(e, t, n) {
                const r = n?.locale || void 0
                  , o = (e => {
                    const t = "npe" === X("env") || !1;
                    switch (e) {
                    case "ios":
                        return t ? "1BRDHl3vNC9xDs5XbzFXpGCaqP8s6iEv" : "ZJixBZV8q5rHdUUcD3j9DAez1hgtC2rg";
                    case "aos":
                        return t ? "h7cQSEWd5SAS3Ji6dDY0O1ekPyAwjcSE" : "EK7Mwbi6j6pucouJ8hRlYuAeWUHFAGse";
                    case "dotcom":
                        return t ? "POwa4r8vBBSw7xdQZ0dqGlNuyaT7Y7pZ" : U;
                    default:
                        return U
                    }
                }
                )(t)
                  , i = {
                    analytics: e.analytics
                }
                  , s = e.responseTokens["experience.name"]
                  , a = e.responseTokens["activity.name"];
                await window.webShellClient.analytics.track("Experiment Activated", {
                    "experience.name": s,
                    "activity.name": a,
                    abTest: i,
                    ...D(window, r)
                }, {
                    writeKey: o
                })
            }
            async trackExperimentActivate(e, t, n, r) {
                try {
                    const o = await this.grpcClient()
                      , i = {
                        timestamp: $t.fromDate(new Date(Date.now() + 100)),
                        deviceId: t,
                        anonymousId: n ?? void 0,
                        ecid: r ?? void 0,
                        app: Ut.DOTCOM,
                        platform: Bt.WEB,
                        action: {
                            underlyingAction: {
                                case: "experimentActivated",
                                value: {
                                    analyticsToken: e.analytics,
                                    analyticsTokenFormat: Pt.ADOBE_TARGET
                                }
                            }
                        }
                    };
                    await o.trackEvent({
                        event: {
                            case: "eventV1",
                            value: i
                        }
                    })
                } catch (e) {
                    T("Track Event send error", e)
                }
            }
            async sendODDExperimentActivatedEvent(e, t, n) {
                const r = await this.grpcClient()
                  , o = {
                    timestamp: $t.fromDate(new Date(Date.now() + 100)),
                    deviceId: n.deviceId,
                    anonymousId: n.anonymousId,
                    app: Ut.DOTCOM,
                    platform: Bt.WEB,
                    action: {
                        underlyingAction: {
                            case: "experimentActivated",
                            value: {
                                analyticsToken: `${e}:${t}`,
                                analyticsTokenFormat: Pt.NIKE_ODD
                            }
                        }
                    }
                };
                await r.trackEvent({
                    event: {
                        case: "eventV1",
                        value: o
                    }
                })
            }
            async sendDisplayNotification(e, t, n, r, o, i) {
                const {id: s, scope: a, scopeDetails: c} = e
                  , u = Xn(r, o, i);
                try {
                    await t("sendEvent", {
                        edgeConfigOverrides: {
                            datastreamId: n
                        },
                        xdm: {
                            eventType: "decisioning.propositionDisplay",
                            _experience: {
                                decisioning: {
                                    propositions: [{
                                        id: s,
                                        scope: a,
                                        scopeDetails: c
                                    }],
                                    propositionEventType: {
                                        display: 1
                                    }
                                }
                            },
                            identityMap: u
                        }
                    })
                } catch (t) {
                    T("Failed to send a displayEvent", {
                        host: window.location.host,
                        error: t,
                        offer: e
                    })
                }
            }
            async sendAnalyticsEvents(e, t, n, r, o, i, s, a, c, u) {
                await this.sendDisplayNotification(e, t, n, r, o, s),
                await this.sendAdobeAnalyticsEvent(a, c, u),
                await this.trackExperimentActivate(a, o, i, r)
            }
        }
        class Yn {
            constructor(e) {
                this.Promise = null,
                this.executor = e
            }
            async result() {
                return this.Promise || (this.Promise = this.executor()),
                this.Promise
            }
            reset() {
                this.Promise = null
            }
        }
        const Qn = (e, t, n) => {
            let r = {
                appCountry: t,
                appLanguage: n,
                browserWidth: window.innerWidth
            };
            return e.forEach(e => {
                r = {
                    ...r,
                    ...e.parameters
                }
            }
            ),
            r
        }
        ;
        class Kn extends Wn {
            constructor(e, t) {
                super(e),
                this._overrideDatastreamId = null,
                this._overrideApptype = "dotcom",
                this._analyticsWrapper = null,
                this._context = null,
                this._inflightCache = new Map,
                this.overrideDatastreamIdByParam = () => {
                    const e = X("datastreamid");
                    null != e && (this._overrideDatastreamId = e)
                }
                ,
                this.setConfig = e => {
                    void 0 !== e.datastreamId && (this._overrideDatastreamId = e.datastreamId),
                    void 0 !== e.apptype && (this._overrideApptype = e.apptype)
                }
                ,
                this.getOverrideDatastreamId = () => this._overrideDatastreamId,
                this.getOverrideApptype = () => this._overrideApptype,
                this.getLocations = async (e, t=!1, n, r) => {
                    const o = e?.locations || [];
                    if (!(e => {
                        let t = !1;
                        return e.filter(e => "" !== e.name).length > 0 ? t = !0 : N("Location must be provided to fetch activity details via Adobe Web SDK(AlloyJS)"),
                        t
                    }
                    )(o))
                        return {
                            locations: [],
                            error: "No Target activity location provided."
                        };
                    let i, s;
                    t && (r = !1,
                    A("Deferred analytics is enabled. Bypassing cache.")),
                    o.length > 1 && (r = !1,
                    A("Caching supported for single location only. Bypassing cache."));
                    const a = new Promise(e => {
                        s = e
                    }
                    );
                    if (r) {
                        const e = n?.locale || this._context?.locale || J();
                        i = ( (e, t, n) => {
                            const r = Qn([e], t, n);
                            return btoa(JSON.stringify({
                                locationName: e.name,
                                locationParameters: r
                            }))
                        }
                        )(o[0], e.country, e.language);
                        const r = sessionStorage.getItem(i);
                        if (r)
                            return this._fetchLocations(o, t, n, i, s),
                            JSON.parse(r);
                        if (this._inflightCache.has(i))
                            return this._inflightCache.get(i);
                        this._inflightCache.set(i, a)
                    }
                    return this._fetchLocations(o, t, n, i, s)
                }
                ,
                this.getECIDSyncQueue = new Yn(async () => {
                    try {
                        if ("function" != typeof this._alloy)
                            return N("Alloy is not initialized, cannot fetch ECID"),
                            null;
                        {
                            const e = await this._alloy("getIdentity");
                            if (e && e?.identity?.ECID)
                                return e.identity.ECID
                        }
                    } catch (e) {
                        return T("Failed to fetch ecid using Alloy getIdentity method", {
                            error: "object" == typeof e && null !== e ? e : {
                                message: String(e)
                            },
                            locations: null
                        }),
                        null
                    }
                    return null
                }
                ),
                this._analyticsWrapper = t ?? new Hn,
                A("optimization client initialized")
            }
            async _fetchLocations(e, t, n, r, o) {
                if (this._alloy || await W(e || [], n || null),
                this._context?.status || (this._context = await q(n)),
                !0 === this._context?.status) {
                    const i = await async function(e, t) {
                        let n = [];
                        const r = _("ni_d");
                        if (r) {
                            const o = e.map(e => e.name ? qn(r, e.name, t) : Promise.resolve(!1))
                              , i = await Promise.all(o);
                            n = e.filter( (e, t) => !i[t])
                        }
                        return n
                    }(e, this._context);
                    if (0 === i.length) {
                        A("User is part of holdout group.");
                        const e = {
                            locations: [],
                            error: "User is part of holdout group."
                        };
                        return r && this._inflightCache.set(r, Promise.resolve(e)),
                        e
                    }
                    try {
                        const [e,s] = await Promise.all([F(i, this._context), this.getECIDSyncQueue.result()]);
                        if (!e) {
                            const e = {
                                locations: [],
                                error: "No UGP permissions."
                            };
                            return r && this._inflightCache.set(r, Promise.resolve(e)),
                            e
                        }
                        if (!this._alloy && (this._alloy = window.alloy,
                        !this._alloy))
                            return A("Alloy is not loaded"),
                            {
                                locations: [],
                                error: "Alloy is not loaded"
                            };
                        this.overrideDatastreamIdByParam();
                        const {fpid: a, upmId: c} = this._context.user
                          , u = void 0 !== c
                          , l = ( (e, t, n, r, o, i, s) => {
                            const a = (e => {
                                const t = [];
                                return e.map(e => {
                                    t.push(e.name)
                                }
                                ),
                                t
                            }
                            )(e)
                              , c = Qn(e, o, i);
                            return {
                                renderDecisions: !0,
                                edgeConfigOverrides: {
                                    datastreamId: s
                                },
                                decisionScopes: a,
                                xdm: {
                                    eventType: "decisioning.propositionFetch",
                                    identityMap: Xn(t, n, r)
                                },
                                data: {
                                    __adobe: {
                                        target: c
                                    }
                                }
                            }
                        }
                        )(i, s, a, u, this._context.locale.country, this._context.locale.language, this._overrideDatastreamId)
                          , d = await this._alloy("sendEvent", l)
                          , f = ( (e, t, n, r, o, i, s, a, c, u, l) => {
                            const d = [];
                            let f;
                            return n.forEach(n => {
                                const h = {
                                    name: n.name
                                };
                                if (e && 0 !== e.length) {
                                    const p = e.find(e => n.name === e.scope);
                                    if (!p)
                                        return void (f = `No Target activity details match found for location ${n.name}`);
                                    if (h.analytics = p.scopeDetails?.characteristics?.analyticsToken || void 0,
                                    h.content = p.items[0]?.data?.content || void 0,
                                    h.responseTokens = {
                                        "experience.name": p.items[0]?.meta ? p.items[0].meta["experience.name"] : void 0,
                                        "activity.name": p.items[0]?.meta ? p.items[0].meta["activity.name"] : void 0
                                    },
                                    h.experimentActivatedCallback = () => {}
                                    ,
                                    h.analytics) {
                                        const e = async () => {
                                            try {
                                                const e = _("anonymousId");
                                                return o && await (a?.sendAnalyticsEvents(p, c, u, r, o, e, i, h, l, s)),
                                                h.experimentActivatedCallback = () => {}
                                                ,
                                                !0
                                            } catch (e) {
                                                return delete h.experimentActivatedCallback,
                                                T("Failed to send Analytics", {
                                                    error: "object" == typeof e && null !== e ? e : {
                                                        message: String(e)
                                                    }
                                                }),
                                                !1
                                            }
                                        }
                                        ;
                                        t ? h.experimentActivatedCallback = e : e()
                                    }
                                    d.push(h)
                                } else
                                    f = `No Target activity details found for location ${n.name}`
                            }
                            ),
                            d && d.length > 0 ? {
                                locations: d,
                                error: f
                            } : {
                                locations: [],
                                error: f
                            }
                        }
                        )(d?.decisions, t, i, s, a, u, n || this._context || {
                            upmId: void 0,
                            loggedIn: !1
                        }, this._analyticsWrapper, this._alloy, this._overrideDatastreamId, this._overrideApptype);
                        return f?.locations && (( (e, t, n) => {
                            n?.forEach(n => {
                                I("target bucketing", {
                                    ecid: e,
                                    fpid: t,
                                    locationName: n.name,
                                    activityName: n.responseTokens?.["activity.name"] ?? "",
                                    experienceName: n.responseTokens?.["experience.name"] ?? ""
                                })
                            }
                            )
                        }
                        )(s, a, f?.locations),
                        r && o && (o(f),
                        sessionStorage.setItem(r, JSON.stringify(f)))),
                        f
                    } catch (e) {
                        T("Failed to find locations", {
                            error: "object" == typeof e && null !== e ? e : {
                                message: String(e)
                            },
                            locations: i.length ? i : null
                        });
                        const t = {
                            locations: [],
                            error: e?.message || "Failed to find locations"
                        };
                        return r && o && o(t),
                        t
                    }
                }
                return N("isInitialized returned false", {
                    location: e
                }),
                {
                    locations: [],
                    error: "Failed to generate context data."
                }
            }
        }
        const Zn = new Yn(async () => {
            try {
                const e = await fetch("https://www.nike.com/static/experience/experimentation-eng/odd/bellotti-ODD.json");
                if (!e.ok)
                    return T("Failed to fetch ODD config data", {
                        error: new Error(`HTTP error! status: ${e.status}`)
                    }),
                    null;
                return await e.json()
            } catch (e) {
                return T("Failed to fetch ODD config data", {
                    error: e
                }),
                null
            }
        }
        )
          , er = (e, t, n, r, o) => {
            if (e?.experiments?.length > 0) {
                const i = e.experiments.filter(e => e.location === t);
                if (i.length > 0) {
                    const e = i.reduce( (e, t) => t.priority > e.priority ? t : e, i[0])
                      , t = e.variants.filter(e => n >= e.floor && n <= e.ceiling);
                    if (t.length > 0) {
                        const n = t[0];
                        return A("ODD", {
                            experimentName: e.name,
                            variantName: n.name,
                            deviceId: r,
                            source: o
                        }),
                        n
                    }
                }
            }
            return {
                error: "No experience Matched"
            }
        }
          , tr = async e => {
            let t;
            if (!(e => !(!e || "object" != typeof e || !(e.location && e.location.trim().length > 0)))(e))
                return {
                    error: "Invalid decisionRequest provided"
                };
            const n = await (async () => {
                if ("undefined" == typeof indexedDB || null === indexedDB)
                    return {
                        experiments: []
                    };
                try {
                    const e = await ee("oddConfig", M);
                    if (e) {
                        const t = e
                          , {id: n, ...r} = t
                          , {cachedAt: o, ...i} = r;
                        return Date.now() - o > 6e4 && Promise.resolve().then(async () => {
                            Zn.reset();
                            const e = await Zn.result();
                            e && te(e, M, "oddConfig")
                        }
                        ),
                        i
                    }
                    return {
                        experiments: []
                    }
                } catch (e) {
                    return T("Failed to read data from IndexedDB", {
                        error: e
                    }),
                    {
                        experiments: []
                    }
                }
            }
            )()
              , r = _("ni_d");
            if (!r)
                return {
                    error: "No device ID found"
                };
            const o = a(r, e.location);
            if (n.experiments.length > 0)
                return t = er(n, e.location, o, r, "cache"),
                t;
            {
                const n = await Zn.result();
                if (!n)
                    return {
                        error: "No matching experience found"
                    };
                t = er(n, e.location, o, r, "s3"),
                Promise.resolve().then( () => te(n, M, "oddConfig"))
            }
            return t ?? {
                error: "No matching experience found"
            }
        }
          , nr = e => async (t, n) => {
            try {
                const r = await q();
                if (!1 === r.status)
                    return {
                        error: r.error ?? "Unknown error"
                    };
                const o = r;
                return await async function(e, t) {
                    return Y("bypassPrivacy") ? (H(),
                    !0) : F(e, t)
                }([], o) ? (await e.sendODDExperimentActivatedEvent(t, n, {
                    deviceId: o.user.fpid ?? "",
                    anonymousId: _("anonymousId") ?? void 0
                }),
                !0) : {
                    error: "No UGP permissions."
                }
            } catch (e) {
                const t = "Failed to send ODD experiment activated event"
                  , n = e instanceof Error ? {
                    errorName: e.name,
                    errorMessage: e.message,
                    stackTrace: e.stack
                } : {
                    errorName: "",
                    errorMessage: String(e),
                    stackTrace: ""
                };
                return T(t, {
                    host: window.location.host,
                    ...n
                }),
                {
                    error: n.errorMessage
                }
            }
        }
        ;
        ( () => {
            try {
                const e = E({
                    version: "2.4.1",
                    platform: "OPTIMIZATION_CLIENT"
                });
                window.webShellClient.optimization.logger = e;
                const t = new Hn
                  , {getLocations: n, setConfig: r, getECIDSyncQueue: o} = new Kn(window.alloy,t);
                window.webShellClient.optimization.getLocations = n,
                window.webShellClient.optimization.__WS_UNSTABLE__ || (window.webShellClient.optimization.__WS_UNSTABLE__ = {}),
                window.webShellClient.optimization.__WS_UNSTABLE__.getLocations = async (...e) => (A("UNSTABLE getLocations"),
                n(...e)),
                window.webShellClient.optimization.configOverrides = r,
                window.webShellClient.optimization.__WS_UNSTABLE__.getLegacyAnalyticsMCID = () => o.result(),
                window.webShellClient.optimization.isHoldout = qn,
                window.webShellClient.optimization.sendODDExperimentActivatedEvent = nr(t),
                window.webShellClient.optimization.getExperience = tr
            } catch (e) {
                T("Error on Index", {
                    error: "object" == typeof e && null !== e ? e : {
                        message: String(e)
                    }
                })
            }
        }
        )()
    }
    )()
}
)();