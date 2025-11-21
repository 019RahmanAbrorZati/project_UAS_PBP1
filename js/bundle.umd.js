/*! For license information please see bundle.umd.js.LICENSE.txt */
!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.webShellClient = t() : e.webShellClient = t()
}(self, ( () => ( () => {
    var e, t, i, n, o = {
        931: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
        ,
        169: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
        ,
        587: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
        ,
        779: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
        ,
        9: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
        ,
        930: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.WebShellOptimization = void 0,
            t.WebShellOptimization = class {
                constructor(e) {
                    this._locations = [],
                    e && (this._locations = e)
                }
            }
        }
        ,
        514: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
        ,
        827: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
        ,
        490: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
        ,
        53: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
        ,
        112: function(e, t, i) {
            "use strict";
            var n = this && this.__createBinding || (Object.create ? function(e, t, i, n) {
                void 0 === n && (n = i);
                var o = Object.getOwnPropertyDescriptor(t, i);
                o && !("get"in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                    enumerable: !0,
                    get: function() {
                        return t[i]
                    }
                }),
                Object.defineProperty(e, n, o)
            }
            : function(e, t, i, n) {
                void 0 === n && (n = i),
                e[n] = t[i]
            }
            )
              , o = this && this.__exportStar || function(e, t) {
                for (var i in e)
                    "default" === i || Object.prototype.hasOwnProperty.call(t, i) || n(t, e, i)
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            o(i(490), t),
            o(i(53), t)
        },
        654: function(e, t, i) {
            "use strict";
            var n = this && this.__createBinding || (Object.create ? function(e, t, i, n) {
                void 0 === n && (n = i);
                var o = Object.getOwnPropertyDescriptor(t, i);
                o && !("get"in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                    enumerable: !0,
                    get: function() {
                        return t[i]
                    }
                }),
                Object.defineProperty(e, n, o)
            }
            : function(e, t, i, n) {
                void 0 === n && (n = i),
                e[n] = t[i]
            }
            )
              , o = this && this.__exportStar || function(e, t) {
                for (var i in e)
                    "default" === i || Object.prototype.hasOwnProperty.call(t, i) || n(t, e, i)
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            o(i(112), t),
            o(i(931), t),
            o(i(169), t),
            o(i(587), t),
            o(i(779), t),
            o(i(9), t),
            o(i(930), t),
            o(i(514), t),
            o(i(827), t)
        },
        781: (e, t, i) => {
            var n, o, a;
            void 0 === (o = "function" == typeof (n = a = function() {
                function e() {
                    for (var e = 0, t = {}; e < arguments.length; e++) {
                        var i = arguments[e];
                        for (var n in i)
                            t[n] = i[n]
                    }
                    return t
                }
                function t(e) {
                    return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
                }
                return function i(n) {
                    function o() {}
                    function a(t, i, a) {
                        if ("undefined" != typeof document) {
                            "number" == typeof (a = e({
                                path: "/"
                            }, o.defaults, a)).expires && (a.expires = new Date(1 * new Date + 864e5 * a.expires)),
                            a.expires = a.expires ? a.expires.toUTCString() : "";
                            try {
                                var s = JSON.stringify(i);
                                /^[\{\[]/.test(s) && (i = s)
                            } catch (e) {}
                            i = n.write ? n.write(i, t) : encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                            t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                            var r = "";
                            for (var l in a)
                                a[l] && (r += "; " + l,
                                !0 !== a[l] && (r += "=" + a[l].split(";")[0]));
                            return document.cookie = t + "=" + i + r
                        }
                    }
                    function s(e, i) {
                        if ("undefined" != typeof document) {
                            for (var o = {}, a = document.cookie ? document.cookie.split("; ") : [], s = 0; s < a.length; s++) {
                                var r = a[s].split("=")
                                  , l = r.slice(1).join("=");
                                i || '"' !== l.charAt(0) || (l = l.slice(1, -1));
                                try {
                                    var _ = t(r[0]);
                                    if (l = (n.read || n)(l, _) || t(l),
                                    i)
                                        try {
                                            l = JSON.parse(l)
                                        } catch (e) {}
                                    if (o[_] = l,
                                    e === _)
                                        break
                                } catch (e) {}
                            }
                            return e ? o[e] : o
                        }
                    }
                    return o.set = a,
                    o.get = function(e) {
                        return s(e, !1)
                    }
                    ,
                    o.getJSON = function(e) {
                        return s(e, !0)
                    }
                    ,
                    o.remove = function(t, i) {
                        a(t, "", e(i, {
                            expires: -1
                        }))
                    }
                    ,
                    o.defaults = {},
                    o.withConverter = i,
                    o
                }((function() {}
                ))
            }
            ) ? n.call(t, i, t, e) : n) || (e.exports = o),
            e.exports = a()
        }
        ,
        292: (e, t) => {
            "use strict";
            var i, n, o, a, s, r, l, _, c, d, E, u;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.DISABLE_GUEST_SESSION_IFRAME = t.DEFAULT_USER_LOCATION_DATA = t.DEFAULT_LOCALE_DATA = t.DEFAULT_WEB_SHELL_CLIENT_INFO = t.ANALYTICS_SCRIPT = t.PRIVACY_CORE_SCRIPT = t.CN_GUEST_SESSION_SCRIPT = t.DATA_CAPTURE_SCRIPT = t.MODAL_ROOT_ID = t.VENDOR_SCRIPT_REACT_DOM_URL = t.VENDOR_SCRIPT_REACT_URL = t.HOST_NAME = t.V3 = t.NAV_VERSION = t.ENABLE_ASYNC_CHAT = t.KEEPALIVE = t.PRE_FETCH_DEPENDENCIES = void 0,
            t.PRE_FETCH_DEPENDENCIES = {
                REACT: "React",
                REACT_DOM: "ReactDOM",
                REMOTE: "Remote"
            },
            t.KEEPALIVE = {
                HTTP_KEEPALIVE_TIMEOUT: 61e3,
                HTTP_HEADERS_TIMEOUT: 65e3
            },
            t.ENABLE_ASYNC_CHAT = null !== (n = null !== (i = {
                WEB_SHELL_CLIENT_VERSION: "2.38.0",
                NEXT_PUBLIC_CLIENT_ID: "4fd2d5e7db76e0f85a6bb56721bd51df",
                NEXT_PUBLIC_HOST_NAME: "www.nike.com",
                NEXT_PUBLIC_AUTHORITY: "https://accounts.nike.com"
            }.NEXT_PUBLIC_ENABLE_ASYNC_CHAT) && void 0 !== i ? i : {
                WEB_SHELL_CLIENT_VERSION: "2.38.0",
                NEXT_PUBLIC_CLIENT_ID: "4fd2d5e7db76e0f85a6bb56721bd51df",
                NEXT_PUBLIC_HOST_NAME: "www.nike.com",
                NEXT_PUBLIC_AUTHORITY: "https://accounts.nike.com"
            }.ENABLE_ASYNC_CHAT) && void 0 !== n ? n : "false",
            t.NAV_VERSION = "navVersion",
            t.V3 = "v3",
            t.HOST_NAME = null !== (a = null !== (o = {
                WEB_SHELL_CLIENT_VERSION: "2.38.0",
                NEXT_PUBLIC_CLIENT_ID: "4fd2d5e7db76e0f85a6bb56721bd51df",
                NEXT_PUBLIC_HOST_NAME: "www.nike.com",
                NEXT_PUBLIC_AUTHORITY: "https://accounts.nike.com"
            }.WS_HOST_NAME) && void 0 !== o ? o : "www.nike.com") && void 0 !== a ? a : {
                WEB_SHELL_CLIENT_VERSION: "2.38.0",
                NEXT_PUBLIC_CLIENT_ID: "4fd2d5e7db76e0f85a6bb56721bd51df",
                NEXT_PUBLIC_HOST_NAME: "www.nike.com",
                NEXT_PUBLIC_AUTHORITY: "https://accounts.nike.com"
            }.HOST_NAME,
            t.VENDOR_SCRIPT_REACT_URL = `https://${t.HOST_NAME}/assets/vendor/react/18.3.1/react.production.min.js`,
            t.VENDOR_SCRIPT_REACT_DOM_URL = `https://${t.HOST_NAME}/assets/vendor/react-dom/18.3.1/react-dom.production.min.js`,
            t.MODAL_ROOT_ID = "modal-root",
            t.DATA_CAPTURE_SCRIPT = null !== (r = null !== (s = {
                WEB_SHELL_CLIENT_VERSION: "2.38.0",
                NEXT_PUBLIC_CLIENT_ID: "4fd2d5e7db76e0f85a6bb56721bd51df",
                NEXT_PUBLIC_HOST_NAME: "www.nike.com",
                NEXT_PUBLIC_AUTHORITY: "https://accounts.nike.com"
            }.WS_DATA_CAPTURE_SCRIPT) && void 0 !== s ? s : {
                WEB_SHELL_CLIENT_VERSION: "2.38.0",
                NEXT_PUBLIC_CLIENT_ID: "4fd2d5e7db76e0f85a6bb56721bd51df",
                NEXT_PUBLIC_HOST_NAME: "www.nike.com",
                NEXT_PUBLIC_AUTHORITY: "https://accounts.nike.com"
            }.NEXT_PUBLIC_DATA_CAPTURE_SCRIPT) && void 0 !== r ? r : {
                WEB_SHELL_CLIENT_VERSION: "2.38.0",
                NEXT_PUBLIC_CLIENT_ID: "4fd2d5e7db76e0f85a6bb56721bd51df",
                NEXT_PUBLIC_HOST_NAME: "www.nike.com",
                NEXT_PUBLIC_AUTHORITY: "https://accounts.nike.com"
            }.DATA_CAPTURE_SCRIPT,
            t.CN_GUEST_SESSION_SCRIPT = null !== (l = {
                WEB_SHELL_CLIENT_VERSION: "2.38.0",
                NEXT_PUBLIC_CLIENT_ID: "4fd2d5e7db76e0f85a6bb56721bd51df",
                NEXT_PUBLIC_HOST_NAME: "www.nike.com",
                NEXT_PUBLIC_AUTHORITY: "https://accounts.nike.com"
            }.NEXT_PUBLIC_CN_GUEST_SESSION_SCRIPT) && void 0 !== l ? l : {
                WEB_SHELL_CLIENT_VERSION: "2.38.0",
                NEXT_PUBLIC_CLIENT_ID: "4fd2d5e7db76e0f85a6bb56721bd51df",
                NEXT_PUBLIC_HOST_NAME: "www.nike.com",
                NEXT_PUBLIC_AUTHORITY: "https://accounts.nike.com"
            }.CN_GUEST_SESSION_SCRIPT,
            t.PRIVACY_CORE_SCRIPT = null !== (_ = {
                WEB_SHELL_CLIENT_VERSION: "2.38.0",
                NEXT_PUBLIC_CLIENT_ID: "4fd2d5e7db76e0f85a6bb56721bd51df",
                NEXT_PUBLIC_HOST_NAME: "www.nike.com",
                NEXT_PUBLIC_AUTHORITY: "https://accounts.nike.com"
            }.PRIVACY_CORE_SCRIPT) && void 0 !== _ ? _ : `https://${t.HOST_NAME}/static/privacy-core/public/privacy-core.js`,
            t.ANALYTICS_SCRIPT = null !== (d = null !== (c = {
                WEB_SHELL_CLIENT_VERSION: "2.38.0",
                NEXT_PUBLIC_CLIENT_ID: "4fd2d5e7db76e0f85a6bb56721bd51df",
                NEXT_PUBLIC_HOST_NAME: "www.nike.com",
                NEXT_PUBLIC_AUTHORITY: "https://accounts.nike.com"
            }.WS_ANALYTICS_SCRIPT) && void 0 !== c ? c : {
                WEB_SHELL_CLIENT_VERSION: "2.38.0",
                NEXT_PUBLIC_CLIENT_ID: "4fd2d5e7db76e0f85a6bb56721bd51df",
                NEXT_PUBLIC_HOST_NAME: "www.nike.com",
                NEXT_PUBLIC_AUTHORITY: "https://accounts.nike.com"
            }.NEXT_PUBLIC_ANALYTICS_SCRIPT) && void 0 !== d ? d : {
                WEB_SHELL_CLIENT_VERSION: "2.38.0",
                NEXT_PUBLIC_CLIENT_ID: "4fd2d5e7db76e0f85a6bb56721bd51df",
                NEXT_PUBLIC_HOST_NAME: "www.nike.com",
                NEXT_PUBLIC_AUTHORITY: "https://accounts.nike.com"
            }.ANALYTICS_SCRIPT,
            t.DEFAULT_WEB_SHELL_CLIENT_INFO = {
                identityProvider: null
            },
            t.DEFAULT_LOCALE_DATA = {
                cloudUrlFragment: "",
                country: "us",
                countryName: "United States",
                countryNames: {
                    en: "United States"
                },
                currency: "USD",
                currencySymbol: "$",
                default: !0,
                hreflang: "en-US",
                intl: "en-US",
                langRegion: "en-US",
                language: "en",
                urlParam: "en",
                translationsLanguage: "en-US"
            },
            t.DEFAULT_USER_LOCATION_DATA = {
                country: "",
                state: "",
                latitude: "",
                longitude: ""
            },
            t.DISABLE_GUEST_SESSION_IFRAME = null !== (u = null !== (E = {
                WEB_SHELL_CLIENT_VERSION: "2.38.0",
                NEXT_PUBLIC_CLIENT_ID: "4fd2d5e7db76e0f85a6bb56721bd51df",
                NEXT_PUBLIC_HOST_NAME: "www.nike.com",
                NEXT_PUBLIC_AUTHORITY: "https://accounts.nike.com"
            }.NEXT_PUBLIC_DISABLE_GUEST_SESSION_IFRAME) && void 0 !== E ? E : {
                WEB_SHELL_CLIENT_VERSION: "2.38.0",
                NEXT_PUBLIC_CLIENT_ID: "4fd2d5e7db76e0f85a6bb56721bd51df",
                NEXT_PUBLIC_HOST_NAME: "www.nike.com",
                NEXT_PUBLIC_AUTHORITY: "https://accounts.nike.com"
            }.DISABLE_GUEST_SESSION_IFRAME) && void 0 !== u ? u : "false"
        }
        ,
        185: function(e, t, i) {
            "use strict";
            var n = this && this.__createBinding || (Object.create ? function(e, t, i, n) {
                void 0 === n && (n = i);
                var o = Object.getOwnPropertyDescriptor(t, i);
                o && !("get"in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                    enumerable: !0,
                    get: function() {
                        return t[i]
                    }
                }),
                Object.defineProperty(e, n, o)
            }
            : function(e, t, i, n) {
                void 0 === n && (n = i),
                e[n] = t[i]
            }
            )
              , o = this && this.__exportStar || function(e, t) {
                for (var i in e)
                    "default" === i || Object.prototype.hasOwnProperty.call(t, i) || n(t, e, i)
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            o(i(292), t)
        }
    }, a = {};
    function s(e) {
        var t = a[e];
        if (void 0 !== t)
            return t.exports;
        var i = a[e] = {
            exports: {}
        };
        return o[e].call(i.exports, i, i.exports, s),
        i.exports
    }
    s.m = o,
    s.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return s.d(t, {
            a: t
        }),
        t
    }
    ,
    t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__,
    s.t = function(i, n) {
        if (1 & n && (i = this(i)),
        8 & n)
            return i;
        if ("object" == typeof i && i) {
            if (4 & n && i.__esModule)
                return i;
            if (16 & n && "function" == typeof i.then)
                return i
        }
        var o = Object.create(null);
        s.r(o);
        var a = {};
        e = e || [null, t({}), t([]), t(t)];
        for (var r = 2 & n && i; "object" == typeof r && !~e.indexOf(r); r = t(r))
            Object.getOwnPropertyNames(r).forEach((e => a[e] = () => i[e]));
        return a.default = () => i,
        s.d(o, a),
        o
    }
    ,
    s.d = (e, t) => {
        for (var i in t)
            s.o(t, i) && !s.o(e, i) && Object.defineProperty(e, i, {
                enumerable: !0,
                get: t[i]
            })
    }
    ,
    s.f = {},
    s.e = e => Promise.all(Object.keys(s.f).reduce(( (t, i) => (s.f[i](e, t),
    t)), [])),
    s.u = e => e + ".chunk.cc0d72.js",
    s.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    i = {},
    n = "webShellClient:",
    s.l = (e, t, o, a) => {
        if (i[e])
            i[e].push(t);
        else {
            var r, l;
            if (void 0 !== o)
                for (var _ = document.getElementsByTagName("script"), c = 0; c < _.length; c++) {
                    var d = _[c];
                    if (d.getAttribute("src") == e || d.getAttribute("data-webpack") == n + o) {
                        r = d;
                        break
                    }
                }
            r || (l = !0,
            (r = document.createElement("script")).charset = "utf-8",
            r.timeout = 120,
            s.nc && r.setAttribute("nonce", s.nc),
            r.setAttribute("data-webpack", n + o),
            r.src = e),
            i[e] = [t];
            var E = (t, n) => {
                r.onerror = r.onload = null,
                clearTimeout(u);
                var o = i[e];
                if (delete i[e],
                r.parentNode && r.parentNode.removeChild(r),
                o && o.forEach((e => e(n))),
                t)
                    return t(n)
            }
              , u = setTimeout(E.bind(null, void 0, {
                type: "timeout",
                target: r
            }), 12e4);
            r.onerror = E.bind(null, r.onerror),
            r.onload = E.bind(null, r.onload),
            l && document.head.appendChild(r)
        }
    }
    ,
    s.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    s.p = "https://www.nike.com/static/uxf/web-shell-client/2.38.0/",
    ( () => {
        var e = {
            179: 0
        };
        s.f.j = (t, i) => {
            var n = s.o(e, t) ? e[t] : void 0;
            if (0 !== n)
                if (n)
                    i.push(n[2]);
                else {
                    var o = new Promise(( (i, o) => n = e[t] = [i, o]));
                    i.push(n[2] = o);
                    var a = s.p + s.u(t)
                      , r = new Error;
                    s.l(a, (i => {
                        if (s.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0),
                        n)) {
                            var o = i && ("load" === i.type ? "missing" : i.type)
                              , a = i && i.target && i.target.src;
                            r.message = "Loading chunk " + t + " failed.\n(" + o + ": " + a + ")",
                            r.name = "ChunkLoadError",
                            r.type = o,
                            r.request = a,
                            n[1](r)
                        }
                    }
                    ), "chunk-" + t, t)
                }
        }
        ;
        var t = (t, i) => {
            var n, o, [a,r,l] = i, _ = 0;
            if (a.some((t => 0 !== e[t]))) {
                for (n in r)
                    s.o(r, n) && (s.m[n] = r[n]);
                l && l(s)
            }
            for (t && t(i); _ < a.length; _++)
                o = a[_],
                s.o(e, o) && e[o] && e[o][0](),
                e[o] = 0
        }
          , i = self.webpackChunkwebShellClient = self.webpackChunkwebShellClient || [];
        i.forEach(t.bind(null, 0)),
        i.push = t.bind(null, i.push.bind(i))
    }
    )();
    var r, l, _ = {};
    return (null === (r = window.newrelic) || void 0 === r ? void 0 : r.addRelease) && (null === (l = window.newrelic) || void 0 === l || l.addRelease("web-shell-client", "2.38.0")),
    ( () => {
        "use strict";
        s.r(_),
        s.d(_, {
            DotcomWebShellLocale: () => t,
            DotcomWebShellUserLocation: () => E,
            GEOLOC_COOKIE_NAME: () => c,
            ModalManager: () => o,
            __VERSION__: () => J,
            __WS_INTERNAL__: () => q,
            analytics: () => Y,
            appName: () => G,
            default: () => Q,
            factory: () => j,
            identity: () => F,
            locale: () => x,
            modalManager: () => z,
            optimization: () => $,
            translations: () => Z,
            userLocation: () => K
        });
        var e = s(185);
        class t {
            constructor(t=e.DEFAULT_LOCALE_DATA) {
                this.hasTrackedInit = !1,
                this.get = () => {
                    var e;
                    return "undefined" == typeof window ? console.warn(["Warning! shell.locale.get() is only meant to be used on the client. We don't know what the current locale is on the server without extra info.", "Use parseRequestLocale from @nike/web-shell-server-utils to get the locale server-side.", "If you need the locale server-side in React, pass it to the LocaleProvider via the locale prop."].join("\n\n")) : this.hasTrackedInit || (null === (e = window.newrelic) || void 0 === e || e.addPageAction("WEB_SHELL_CLIENT_LOCALE_INITIALIZED", {
                        webShellClientVersion: null !== "2.38.0" ? "2.38.0" : ""
                    }),
                    this.hasTrackedInit = !0),
                    this.current
                }
                ,
                this.current = t
            }
        }
        t.defaultLocale = e.DEFAULT_LOCALE_DATA;
        class i {
            constructor(e) {
                this.hasTrackedInit = !1,
                this.fetch = async (e, t={}) => {
                    var i;
                    this.hasTrackedInit || "undefined" == typeof window || (null === (i = window.newrelic) || void 0 === i || i.addPageAction("WEB_SHELL_CLIENT_TRANSLATIONS_INITIALIZED", {
                        webShellClientVersion: null !== "2.38.0" ? "2.38.0" : ""
                    }),
                    this.hasTrackedInit = !0);
                    const n = e => {
                        var i;
                        return `${String(null !== (i = t.urlBase) && void 0 !== i ? i : "https://www.nike.com/assets/i18n")}/${e}/${String(this.locale.get().hreflang)}.json`
                    }
                    ;
                    try {
                        const t = await Promise.all(e.map((async e => fetch(n(e)))));
                        return (await Promise.all(t.map((async e => await e.json())))).reduce(( (t, i, n) => Object.assign(t, {
                            [e[n]]: i
                        })), {})
                    } catch (e) {
                        return console.error("Failed to fetch Translations", e),
                        {}
                    }
                }
                ,
                this.locale = e,
                this.formatMessage.bind(this)
            }
            formatMessage(e, t={}) {
                return e.replace(/\{(.*?)\}/gu, ( (e, i) => t[i]))
            }
        }
        const n = "#modal-root";
        class o {
            constructor(e=n) {
                this.setActiveModalID = e => {
                    this.activeModalID = e
                }
                ,
                this.setReferringElement = e => {
                    this.refEl = e
                }
                ,
                this.closeVanilla = () => {}
                ,
                this.rootSelector = e,
                this.activeModalID = null
            }
        }
        var a = s(781)
          , r = s.n(a);
        const l = (e, t={}) => {
            var i, n;
            if ("undefined" != typeof window) {
                const o = (e => {
                    const t = JSON.stringify(e);
                    return JSON.parse(t)
                }
                )(Object.assign(Object.assign({}, t), {
                    webShellClientVersion: null !== (i = window.webShellClient.__VERSION__) && void 0 !== i ? i : ""
                }));
                null === (n = window.newrelic) || void 0 === n || n.addPageAction(e, o)
            }
        }
          , c = "geoloc"
          , d = {
            cc: "country",
            rc: "state",
            la: "latitude",
            lo: "longitude"
        };
        class E {
            constructor() {
                this.readCookie = () => {
                    var t, i, n;
                    const o = Object.assign({}, e.DEFAULT_USER_LOCATION_DATA);
                    if ("undefined" == typeof document)
                        return o;
                    const a = null !== (i = null === (t = r().get(c)) || void 0 === t ? void 0 : t.split(",").reduce(( (e, t) => {
                        const [i,n] = t.split("=");
                        return e[i] = n,
                        e
                    }
                    ), {})) && void 0 !== i ? i : {};
                    for (const [e,t] of Object.entries(d))
                        o[t] = null !== (n = a[e]) && void 0 !== n ? n : "";
                    return o
                }
                ,
                this.get = () => (l("WEB_SHELL_CLIENT_USER_LOCATION_GET"),
                this.current),
                this.current = this.readCookie()
            }
        }
        E.defaultUserLocation = Object.assign({}, e.DEFAULT_USER_LOCATION_DATA);
        let u = Object.assign({}, e.DEFAULT_WEB_SHELL_CLIENT_INFO);
        const I = () => u
          , T = function(e) {
            u = Object.assign(Object.assign({}, u), {
                identityProvider: e
            })
        };
        var v, L = new Uint8Array(16);
        function S() {
            if (!v && !(v = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)))
                throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            return v(L)
        }
        const N = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
        for (var w = [], f = 0; f < 256; ++f)
            w.push((f + 256).toString(16).substr(1));
        const p = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
              , i = (w[e[t + 0]] + w[e[t + 1]] + w[e[t + 2]] + w[e[t + 3]] + "-" + w[e[t + 4]] + w[e[t + 5]] + "-" + w[e[t + 6]] + w[e[t + 7]] + "-" + w[e[t + 8]] + w[e[t + 9]] + "-" + w[e[t + 10]] + w[e[t + 11]] + w[e[t + 12]] + w[e[t + 13]] + w[e[t + 14]] + w[e[t + 15]]).toLowerCase();
            if (!function(e) {
                return "string" == typeof e && N.test(e)
            }(i))
                throw TypeError("Stringified UUID is invalid");
            return i
        }
          , h = function(e, t, i) {
            var n = (e = e || {}).random || (e.rng || S)();
            if (n[6] = 15 & n[6] | 64,
            n[8] = 63 & n[8] | 128,
            t) {
                i = i || 0;
                for (var o = 0; o < 16; ++o)
                    t[i + o] = n[o];
                return t
            }
            return p(n)
        }
          , C = ["https://www.nike.com", "https://localhost.nike.com", "https://gs-checkout.nike.com", "https://gs.nike.com", "https://gs-profilemanagement.nike.com", "https://www.nike.com.cn", "https://uat.nike.com"]
          , O = e => C.includes(e);
        class g {
            constructor() {
                this._visitDataIsResolved = !1,
                this._gsIframeElement = null,
                this._visitData = {
                    visitId: 0,
                    visitorId: ""
                },
                this.initializeVisitData = () => {
                    window.addEventListener("message", this._handleMessageEvent),
                    this._addResetVisitDataListener(),
                    this._postGetVisitDataMessageToGS()
                }
                ,
                this._handleMessageEvent = e => {
                    if (O(e.origin))
                        switch (e.data.type) {
                        case "gsIframeReady":
                            this._postGetVisitDataMessageToGS();
                            break;
                        case "setVisitData":
                            this._setVisitData(e.data.visitData);
                            break;
                        case "generateVisitData":
                            this._generateVisitData()
                        }
                }
                ,
                this._postGetVisitDataMessageToGS = () => {
                    var e;
                    const t = this._guestSessionIframe;
                    t && (null === (e = t.contentWindow) || void 0 === e || e.postMessage({
                        type: "getVisitData"
                    }, "https://www.nike.com"))
                }
                ,
                this._setVisitData = e => {
                    this._visitData.visitId === e.visitId && this._visitData.visitorId === e.visitorId || (l("WEB_SHELL_CLIENT_IDENTITY_GSM_SET_VISIT_DATA"),
                    this._visitData = e,
                    this._visitDataIsResolved || window.postMessage({
                        type: "visitDataReady",
                        visitData: e
                    }, location.origin),
                    this._visitDataIsResolved = !0)
                }
                ,
                this._generateNewVisitData = () => ({
                    visitId: 1,
                    visitorId: h()
                }),
                this._generateVisitData = () => {
                    var e;
                    const t = this._guestSessionIframe;
                    if (!t)
                        return void l("WEB_SHELL_CLIENT_IDENTITY_GSM_GENERATE_IFRAME_NOT_FOUND_ERROR");
                    l("WEB_SHELL_CLIENT_IDENTITY_GSM_GENERATE_VISIT_DATA");
                    const i = this._generateNewVisitData();
                    null === (e = t.contentWindow) || void 0 === e || e.postMessage({
                        type: "setVisitData",
                        visitData: i
                    }, "https://www.nike.com"),
                    this._setVisitData(i)
                }
                ,
                this._getVisitDataError = () => {
                    if (this._guestSessionIframe) {
                        if (!O(window.location.origin))
                            throw l("WEB_SHELL_CLIENT_IDENTITY_GSM_GET_VISIT_DATA_UNSAFE_ORIGIN_ERROR"),
                            Error('"getVisitData" could not resolve - origin not whitelisted.');
                        l("WEB_SHELL_CLIENT_IDENTITY_GSM_GET_VISIT_DATA_UNRESOLVED_ERROR")
                    } else
                        console.error('"getVisitData" could not resolve - No guest session iframe found by "guest-session-iframe" id'),
                        l("WEB_SHELL_CLIENT_IDENTITY_GSM_GET_VISIT_DATA_IFRAME_NOT_FOUND_ERROR")
                }
                ,
                this.getVisitData = async () => {
                    if (l("WEB_SHELL_CLIENT_IDENTITY_GSM_GET_VISIT_DATA"),
                    !this._visitDataIsResolved) {
                        const e = setTimeout(this._getVisitDataError, 2e3);
                        return new Promise((t => {
                            window.addEventListener("message", (i => {
                                O(i.origin) && "visitDataReady" === i.data.type && (clearTimeout(e),
                                this._setVisitData(i.data.visitData),
                                t({
                                    visitId: i.data.visitData.visitId,
                                    visit: i.data.visitData.visitId,
                                    visitorId: i.data.visitData.visitorId,
                                    visitor: i.data.visitData.visitorId
                                }))
                            }
                            ))
                        }
                        ))
                    }
                    return {
                        visitId: this._visitData.visitId,
                        visit: this._visitData.visitId,
                        visitor: this._visitData.visitorId,
                        visitorId: this._visitData.visitorId
                    }
                }
                ,
                this.resetVisitData = () => {
                    l("WEB_SHELL_CLIENT_IDENTITY_GSM_RESET_VISIT_DATA"),
                    this._generateVisitData(),
                    setTimeout(( () => {
                        window.localStorage.setItem("wsc_user_logged_out", "true")
                    }
                    ), 10)
                }
            }
            get _guestSessionIframe() {
                if (!this._gsIframeElement) {
                    const e = document.getElementById("guest-session-iframe");
                    this._gsIframeElement = e
                }
                return this._gsIframeElement
            }
            _addResetVisitDataListener() {
                window.addEventListener("storage", (e => {
                    "wsc_user_logged_out" === e.key && "true" === e.newValue && (this._postGetVisitDataMessageToGS(),
                    window.localStorage.removeItem("wsc_user_logged_out"))
                }
                ))
            }
        }
        const b = e => !("EMPLOYEE" !== (null == e ? void 0 : e.userType) && !(null == e ? void 0 : e.swoosh))
          , m = /^(?:\/auth\/(?:login|logout|silent-renew))|^(?:\/(?:[a-z]{2}\/(?:[a-z]{2}(?:-[A-z]{4})?\/)?)?(?:login|register))/
          , R = () => null === m.exec(window.location.pathname)
          , A = "ni_s"
          , y = e => {
            r().set(A, "1", {
                domain: e,
                path: "/",
                expires: 365
            })
        }
          , D = () => "1" === r().get(A);
        function U() {
            const t = new g
              , i = "www.nike.com" === e.HOST_NAME ? "nike.com" : "nike.com.cn"
              , n = (async () => {
                var e, i;
                let n = {
                    type: null,
                    instance: null
                };
                const o = null !== "2.38.0" ? "2.38.0" : ""
                  , a = "undefined" != typeof window;
                try {
                    if (a) {
                        let i = D();
                        null === (e = window.newrelic) || void 0 === e || e.addPageAction("WEB_SHELL_CLIENT_IDENTITY_INITIALIZED", {
                            webShellClientVersion: o
                        });
                        const {UserManager: a, WebStorageStateStore: r} = await s.e(549).then(s.t.bind(s, 549, 23))
                          , l = function(e) {
                            var t, i, n;
                            return {
                                authority: "https://accounts.nike.com",
                                client_id: "4fd2d5e7db76e0f85a6bb56721bd51df",
                                redirect_uri: null !== (t = {
                                    WEB_SHELL_CLIENT_VERSION: "2.38.0",
                                    NEXT_PUBLIC_CLIENT_ID: "4fd2d5e7db76e0f85a6bb56721bd51df",
                                    NEXT_PUBLIC_HOST_NAME: "www.nike.com",
                                    NEXT_PUBLIC_AUTHORITY: "https://accounts.nike.com"
                                }.NEXT_PUBLIC_REDIRECT_URI) && void 0 !== t ? t : `${window.location.origin}/auth/login`,
                                post_logout_redirect_uri: null !== (i = {
                                    WEB_SHELL_CLIENT_VERSION: "2.38.0",
                                    NEXT_PUBLIC_CLIENT_ID: "4fd2d5e7db76e0f85a6bb56721bd51df",
                                    NEXT_PUBLIC_HOST_NAME: "www.nike.com",
                                    NEXT_PUBLIC_AUTHORITY: "https://accounts.nike.com"
                                }.NEXT_PUBLIC_POST_LOGOUT_REDIRECT_URI) && void 0 !== i ? i : `${window.location.origin}/auth/logout`,
                                silent_redirect_uri: null !== (n = {
                                    WEB_SHELL_CLIENT_VERSION: "2.38.0",
                                    NEXT_PUBLIC_CLIENT_ID: "4fd2d5e7db76e0f85a6bb56721bd51df",
                                    NEXT_PUBLIC_HOST_NAME: "www.nike.com",
                                    NEXT_PUBLIC_AUTHORITY: "https://accounts.nike.com"
                                }.NEXT_PUBLIC_SILENT_REDIRECT_URI) && void 0 !== n ? n : `${window.location.origin}/auth/silent-renew`,
                                response_type: "code",
                                scope: "openid nike.digital profile email phone flow country",
                                loadUserInfo: !1,
                                automaticSilentRenew: !0,
                                userStore: e,
                                monitorSession: R()
                            }
                        }(new r({
                            store: window.localStorage
                        }));
                        n = {
                            type: "oidc",
                            instance: new a(l)
                        },
                        i || await (async e => {
                            await e.instance.removeUser()
                        }
                        )(n);
                        (e => Boolean((document.referrer.includes("nike") && !document.referrer.includes(document.location.origin) && D() || (null == e ? void 0 : e.expired)) && R()))(await n.instance.getUser()) && await n.instance.signinSilent(),
                        ( () => {
                            const e = () => {
                                i && !D() && (i = !1,
                                window.dispatchEvent(new Event("nikeSignOut")))
                            }
                            ;
                            window.addEventListener("focus", e),
                            window.addEventListener("visibilitychange", ( () => {
                                "visible" === document.visibilityState && e()
                            }
                            ))
                        }
                        )(),
                        t.initializeVisitData()
                    }
                    T("accounts")
                } catch (e) {
                    null === (i = window.newrelic) || void 0 === i || i.addPageAction("WEB_SHELL_CLIENT_IDENTITY_INITIALIZE_ERROR", {
                        webShellClientVersion: o
                    })
                }
                return n
            }
            )()
              , o = async () => {
                var e;
                const t = await n;
                return await (null === (e = t.instance) || void 0 === e ? void 0 : e.getUser())
            }
              , a = async () => {
                try {
                    l("WEB_SHELL_CLIENT_IDENTITY_GET_USER_PROFILE");
                    const e = await o();
                    if (e)
                        return (e => {
                            var t, i, n, o, a, s, r, l, _, c, d, E, u, I, T, v, L, S, N;
                            const w = {
                                avatarUrl: (null == e ? void 0 : e.picture) || (null == e ? void 0 : e.avatar_url) || (null === (i = null === (t = null == e ? void 0 : e.entity) || void 0 === t ? void 0 : t.avatar) || void 0 === i ? void 0 : i.fullUrl) || (null == e ? void 0 : e.avatarUrl),
                                firstName: (null == e ? void 0 : e.given_name) || (null === (n = null == e ? void 0 : e.entity) || void 0 === n ? void 0 : n.firstName) || (null == e ? void 0 : e.firstName),
                                altFirstName: (null === (a = null === (o = null == e ? void 0 : e.name) || void 0 === o ? void 0 : o.kana) || void 0 === a ? void 0 : a.given) || (null === (r = null === (s = null == e ? void 0 : e.name) || void 0 === s ? void 0 : s.alternate) || void 0 === r ? void 0 : r.given) || (null === (l = null == e ? void 0 : e.entity) || void 0 === l ? void 0 : l.jpFirstNameKana) || (null == e ? void 0 : e.altFirstName),
                                altLastName: (null === (c = null === (_ = null == e ? void 0 : e.name) || void 0 === _ ? void 0 : _.kana) || void 0 === c ? void 0 : c.family) || (null === (E = null === (d = null == e ? void 0 : e.name) || void 0 === d ? void 0 : d.alternate) || void 0 === E ? void 0 : E.family) || (null === (u = null == e ? void 0 : e.entity) || void 0 === u ? void 0 : u.jpLastNameKana) || (null == e ? void 0 : e.altLastName),
                                lastName: (null == e ? void 0 : e.family_name) || (null === (I = null == e ? void 0 : e.entity) || void 0 === I ? void 0 : I.lastName) || (null == e ? void 0 : e.lastName),
                                email: (null == e ? void 0 : e.email) || (null === (v = null === (T = null == e ? void 0 : e.entity) || void 0 === T ? void 0 : T.account) || void 0 === v ? void 0 : v.email),
                                mobileNumber: (null == e ? void 0 : e.phone_number) || (null === (L = null == e ? void 0 : e.entity) || void 0 === L ? void 0 : L.mobileNumber) || (null == e ? void 0 : e.mobileNumber),
                                upmId: (null == e ? void 0 : e.sub) || (null === (N = null === (S = null == e ? void 0 : e.entity) || void 0 === S ? void 0 : S.account) || void 0 === N ? void 0 : N.id) || (null == e ? void 0 : e.upmId),
                                registeredCountry: null == e ? void 0 : e.country,
                                signInFlow: null == e ? void 0 : e.flow,
                                userType: "GUEST"
                            };
                            return b(e) ? w.userType = "SWOOSH" : w.upmId && (w.userType = "MEMBER"),
                            w
                        }
                        )(e.profile)
                } catch (e) {
                    throw l("WEB_SHELL_CLIENT_IDENTITY_GET_USER_PROFILE_ERROR"),
                    e
                }
            }
              , _ = {
                initialize: async () => (await n,
                _),
                getAccessToken: async () => {
                    try {
                        l("WEB_SHELL_CLIENT_IDENTITY_GET_ACCESS_TOKEN");
                        const e = await o();
                        if (e)
                            return e.access_token
                    } catch (e) {
                        throw l("WEB_SHELL_CLIENT_IDENTITY_GET_ACCESS_TOKEN_ERROR"),
                        e
                    }
                }
                ,
                getInitialized: async () => {
                    try {
                        return l("WEB_SHELL_CLIENT_IDENTITY_GET_INITIALIZED"),
                        !!await n
                    } catch (e) {
                        throw l("WEB_SHELL_CLIENT_IDENTITY_GET_INITIALIZED_ERROR"),
                        e
                    }
                }
                ,
                getIsLoggedIn: async () => {
                    const e = await a();
                    return e ? "GUEST" !== e.userType : !!e
                }
                ,
                getIsMobileVerified: async () => {
                    var e;
                    try {
                        l("WEB_SHELL_CLIENT_IDENTITY_GET_IS_MOBILE_VERIFIED");
                        const t = await o();
                        return !0 === (null === (e = null == t ? void 0 : t.profile) || void 0 === e ? void 0 : e.phone_number_verified)
                    } catch (e) {
                        throw l("WEB_SHELL_CLIENT_IDENTITY_GET_IS_MOBILE_VERIFIED_ERROR"),
                        e
                    }
                }
                ,
                getIsSwooshUser: async () => {
                    try {
                        const e = await o()
                          , t = b(null == e ? void 0 : e.profile);
                        return l("WEB_SHELL_CLIENT_IDENTITY_GET_IS_SWOOSH_USER", {
                            isSwoosh: t
                        }),
                        t
                    } catch (e) {
                        throw l("WEB_SHELL_CLIENT_IDENTITY_GET_IS_SWOOSH_USER_ERROR"),
                        e
                    }
                }
                ,
                getUser: o,
                getUserProfile: a,
                getVisitData: async () => {
                    var e, i;
                    try {
                        return (null === (i = null === (e = window.nike) || void 0 === e ? void 0 : e.unite) || void 0 === i ? void 0 : i.isInitialized) ? window.nike.unite.session.getVisitData() : await t.getVisitData()
                    } catch (e) {
                        throw l("WEB_SHELL_CLIENT_IDENTITY_GET_VISIT_DATA_ERROR"),
                        e
                    }
                }
                ,
                processReauth: async () => {
                    try {
                        const e = await n;
                        if ("oidc" !== e.type)
                            return;
                        const t = await e.instance.signinSilentCallback();
                        return t && y(i),
                        t
                    } catch (e) {
                        throw l("WEB_SHELL_CLIENT_IDENTITY_PROCESS_REAUTH_ERROR"),
                        e
                    }
                }
                ,
                processSignIn: async () => {
                    var e;
                    try {
                        const t = await n
                          , o = await (null === (e = t.instance) || void 0 === e ? void 0 : e.signinCallback());
                        return y(i),
                        o
                    } catch (e) {
                        throw l("WEB_SHELL_CLIENT_IDENTITY_PROCESS_SIGN_IN_ERROR"),
                        e
                    }
                }
                ,
                processSignOut: async () => {
                    var e;
                    try {
                        const t = await n
                          , i = await (null === (e = t.instance) || void 0 === e ? void 0 : e.signoutCallback());
                        return window.localStorage.removeItem("webShellClientVisitData"),
                        window.dispatchEvent(new Event("nikeSignOut")),
                        i
                    } catch (e) {
                        throw l("WEB_SHELL_CLIENT_IDENTITY_PROCESS_SIGN_OUT_ERROR"),
                        e
                    }
                }
                ,
                signIn: async (e={}) => {
                    var t;
                    const i = await n;
                    try {
                        const n = window.location.href
                          , {hreflang: o} = window.webShellClient.locale.get()
                          , a = Object.assign(Object.assign({}, e), {
                            ui_locales: o
                        })
                          , s = Object.assign(Object.assign({}, a), {
                            redirectUrl: n
                        });
                        return null === (t = i.instance) || void 0 === t ? void 0 : t.signinRedirect(Object.assign(Object.assign({}, a), {
                            state: s
                        }))
                    } catch (e) {
                        throw l("WEB_SHELL_CLIENT_IDENTITY_SIGN_IN_ERROR"),
                        e
                    }
                }
                ,
                signOut: async (e={}) => {
                    var o, a, s;
                    try {
                        (null === (a = null === (o = window.nike) || void 0 === o ? void 0 : o.unite) || void 0 === a ? void 0 : a.isInitialized) ? window.nike.unite.session.logout() : t.resetVisitData(),
                        l("WEB_SHELL_CLIENT_IDENTITY_SIGN_OUT");
                        const {hreflang: _} = window.webShellClient.locale.get()
                          , c = Object.assign(Object.assign({}, e), {
                            ui_locales: _
                        })
                          , d = Object.assign(Object.assign({}, c), {
                            redirectUrl: window.location.href
                        });
                        (e => {
                            r().remove(A, {
                                domain: e,
                                path: "/"
                            })
                        }
                        )(i);
                        const E = await n;
                        return window.dispatchEvent(new Event("nikeSignOut")),
                        null === (s = E.instance) || void 0 === s ? void 0 : s.signoutRedirect(Object.assign(Object.assign({}, c), {
                            state: d
                        }))
                    } catch (e) {
                        throw l("WEB_SHELL_CLIENT_IDENTITY_SIGN_OUT_ERROR"),
                        e
                    }
                }
            };
            return _
        }
        var P = s(654);
        class B extends P.WebShellOptimization {
            constructor(e) {
                super(e),
                this.getLocations = async () => {
                    console.warn("Optimization is either disabled or failed to initialize correctly so getLocations returns undefined")
                }
                ,
                console.warn("Optimization did not initialize. If you expected optimization to be enabled please check your configuration and restart the application.")
            }
        }
        const H = {
            appName: "Web Shell Application",
            initialLocale: t.defaultLocale,
            modal: {
                rootSelector: n
            },
            isProduction: !1,
            analytics: {
                writeKey: "2iv4Qa7rFEipAs4iE850BkBpTYQvlAFZ"
            },
            optimization: {
                locations: []
            }
        };
        class k {
        }
        var V, M;
        k.getInstance = e => {
            var n, a, s, r, l, _;
            const c = "2.38.0"
              , d = new t(e.initialLocale)
              , u = new E
              , T = new i(d)
              , v = new o(null === (n = e.modal) || void 0 === n ? void 0 : n.rootSelector)
              , L = U()
              , {getLocations: S} = k.getDotcomWebShellOptimization(e.optimization)
              , N = function(e) {
                var t;
                const i = function() {
                    function e(e) {
                        return (...t) => {
                            var i, n;
                            const o = `Web Shell Client Analytics: analytics.${e}() called but no analytics client is configured.  Please supply window.analyticsClient to use Web Shell's analytics feature`;
                            console.warn(o),
                            console.log(`.${e}() called with: `, t),
                            (null === (i = window.newrelic) || void 0 === i ? void 0 : i.noticeError) && (null === (n = window.newrelic) || void 0 === n || n.noticeError(o))
                        }
                    }
                    return {
                        load: e("load"),
                        debug: e("debug"),
                        track: e("track"),
                        page: e("page")
                    }
                }();
                return "undefined" != typeof window && window.analyticsClient ? (window.analyticsClient.load(e),
                null === (t = window.newrelic) || void 0 === t || t.addPageAction("WEB_SHELL_CLIENT_ANALYTICS_INITIALIZED", {
                    webShellClientVersion: "2.38.0"
                }),
                window.analyticsClient) : i
            }(null !== (a = e.analytics) && void 0 !== a ? a : H.analytics);
            return "undefined" != typeof window && (null === (s = window.newrelic) || void 0 === s || s.addPageAction("WEB_SHELL_CLIENT_INITIALIZED", {
                webShellClientVersion: c,
                webShellNextVersion: null !== (r = window.WSN_VERSION) && void 0 !== r ? r : ""
            })),
            {
                __VERSION__: c,
                appName: null !== (l = e.appName) && void 0 !== l ? l : "",
                analytics: N,
                identity: L,
                locale: d,
                modalManager: v,
                translations: T,
                optimization: {
                    getLocations: S
                },
                userLocation: u,
                isProduction: null !== (_ = e.isProduction) && void 0 !== _ ? _ : H.isProduction,
                __WS_INTERNAL__: {
                    getInfo: I
                }
            }
        }
        ,
        k.getDotcomWebShellOptimization = e => new B(null == e ? void 0 : e.locations);
        const W = null !== (M = (null !== (V = s.g) && void 0 !== V ? V : window).__shell) && void 0 !== M ? M : H
          , j = k
          , X = k.getInstance(W)
          , {analytics: Y, appName: G, identity: F, locale: x, modalManager: z, optimization: $, translations: Z, userLocation: K, __VERSION__: J, __WS_INTERNAL__: q} = X
          , Q = X
    }
    )(),
    _
}
)()));
//# sourceMappingURL=bundle.umd.js.map
