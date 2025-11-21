/* Gridiron v1.0.0-rc.1 - built on Tue Sep 30 22:30:13 UTC 2025 */
( () => {
    var h = Object.defineProperty;
    var E = (t, e, r) => e in t ? h(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[e] = r;
    var o = (t, e, r) => E(t, typeof e != "symbol" ? e + "" : e, r);
    function m() {
        return {
            name: "config",
            async setup(t) {
                return t
            }
        }
    }
    var u = class t {
        constructor(e) {
            this.config = e
        }
        static async build(e) {
            return new Promise(r => {
                setTimeout( () => r(new t(e)))
            }
            )
        }
        track(e) {}
    }
    ;
    var p = class {
        constructor(e, r) {
            this.config = e;
            this.logger = r
        }
        track(e) {
            this.logger.info(`Analytics Event: ${e.name}`, e.metadata)
        }
    }
    ;
    function F() {
        return {
            name: "analytics",
            async setup(t, e) {
                let r = await u.build(t);
                return r || (e.logger.warn("failed to access remote analytics, falling back to logger only"),
                new p(t,e.logger))
            }
        }
    }
    function v() {
        return {
            name: "logger",
            async setup(t) {
                switch (t.mode) {
                case "development":
                    return new c(t);
                case "production":
                default:
                    {
                        let e = await d.build(t);
                        if (e)
                            return e;
                        let r = new c(t);
                        return r.warn("failed to access remote logger, falling back to console"),
                        r
                    }
                }
            }
        }
    }
    var c = class {
        constructor(e) {
            this.config = e
        }
        prefix() {
            return `[${this.config.project.name}]`
        }
        warn(e, ...r) {
            console.warn(this.prefix(), e, ...r)
        }
        error(e, ...r) {
            console.error(this.prefix(), e, ...r)
        }
        info(e, ...r) {
            console.info(this.prefix(), e, ...r)
        }
        fromError(e, ...r) {
            if (e instanceof Error)
                this.error(e.message, ...r);
            else
                try {
                    this.error(`${e}`, ...r)
                } catch {
                    this.error("unreadable error", e)
                }
        }
    }
      , d = class t {
        constructor(e) {
            this.config = e;
            o(this, "logger");
            this.logger = new c(this.config)
        }
        static async build(e) {
            return new Promise(r => {
                setTimeout( () => r(new t(e)), 10)
            }
            )
        }
        warn(e, ...r) {
            this.logger.warn(e, ...r)
        }
        error(e, ...r) {
            this.logger.error(e, ...r)
        }
        info(e, ...r) {
            this.logger.info(e, ...r)
        }
        fromError(e, ...r) {
            this.logger.fromError(e, ...r)
        }
    }
    ;
    function w() {
        return {
            name: "page",
            async setup() {
                return new f
            }
        }
    }
    var f = class {
        constructor() {
            o(this, "type", "landing");
            o(this, "description", "landing");
            o(this, "name", "landing")
        }
    }
    ;
    function x(t) {
        return {
            name: "privacy",
            async setup() {
                let e = new Map;
                return {
                    permissions: new Map,
                    allRequiredPermissionsHaveBeenMet: Array.from(t.requiredPermissions).every(n => e.has(n))
                }
            }
        }
    }
    var P = {
        analytics: ["logger", "page"],
        logger: [],
        page: [],
        config: [],
        privacy: []
    }
      , g = class t {
        constructor(e, r, n={}) {
            this.config = e;
            this.afterBuild = r;
            this.featureSetups = n
        }
        useLogger() {
            return this.clone({
                logger: v()
            })
        }
        useConfig() {
            return this.clone({
                config: m()
            })
        }
        useAnalytics() {
            return this.clone({
                analytics: F()
            })
        }
        usePage() {
            return this.clone({
                page: w()
            })
        }
        usePrivacy(e) {
            return this.clone({
                privacy: x(e)
            })
        }
        static create(e, r) {
            return new t(e,r)
        }
        clone(e) {
            return new t(this.config,this.afterBuild,{
                ...this.featureSetups,
                ...e
            })
        }
        async build() {
            let e = C(Object.keys(this.featureSetups))
              , r = {};
            for (let a of e) {
                let i = this.featureSetups[a]
                  , s = Object.fromEntries(P[a].map(y => [y, r[y]]));
                r[a] = await i.setup(this.config, s)
            }
            let n = r;
            return this.afterBuild(n),
            n
        }
    }
    ;
    function C(t) {
        let e = new Set
          , r = []
          , n = new Set(t)
          , a = i => {
            if (!e.has(i)) {
                e.add(i);
                for (let s of P[i]) {
                    if (!n.has(s))
                        throw new Error(`Cannot build Gridiron instance: '${i}' requires the '${s}' feature to available.`);
                    a(s)
                }
                r.push(i)
            }
        }
        ;
        for (let i of n.keys())
            a(i);
        return r
    }
    var l = class t {
        constructor() {
            o(this, "instances", new Map)
        }
        static initialize() {
            window.experimentation || (window.experimentation = {}),
            window.experimentation.gridiron || (window.experimentation.gridiron = new t)
        }
        newInstance(e, r) {
            return g.create(r, n => {
                this.instances.set(e, n)
            }
            )
        }
        get(e) {
            let r = this.instances.get(e);
            if (!r)
                throw new Error("Invalid request for Gridiron instance. It must be built first: window.experimentation.gridiron.build(...)");
            return r
        }
    }
    ;
    l.initialize();
}
)();
