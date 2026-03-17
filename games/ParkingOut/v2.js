var YaGames;
(()=>{
    "use strict";
    var e = {
        636: (e,t,n)=>{
            n.d(t, {
                Ts: ()=>f,
                X4: ()=>p,
                Zi: ()=>h,
                fF: ()=>g
            });
            var r = n(512)
              , o = n(162)
              , a = n(889)
              , s = Object.defineProperty
              , i = Object.getOwnPropertySymbols
              , c = Object.prototype.hasOwnProperty
              , l = Object.prototype.propertyIsEnumerable
              , d = (e,t,n)=>t in e ? s(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : e[t] = n
              , u = (e,t)=>{
                for (var n in t || (t = {}))
                    c.call(t, n) && d(e, n, t[n]);
                if (i)
                    for (var n of i(t))
                        l.call(t, n) && d(e, n, t[n]);
                return e
            }
            ;
            const p = "YandexSDKLogError";
            function h(e) {
                var t;
                let n;
                try {
                    throw new Error
                } catch (r) {
                    const o = /(\w+)@|at (.+) \(/g
                      , a = e || r.stack || "";
                    if (a.matchAll) {
                        const e = Array.from(a.matchAll(o)) || [];
                        n = null == (t = e[e.length - 1]) ? void 0 : t[2]
                    }
                }
                return n
            }
            function m(e, t, n) {
                var s, i, c;
                const l = function(e, t) {
                    var n, o;
                    const {message: s, additional: i={}} = (0,
                    r.S)(e.message || String(e))
                      , c = {
                        columnNumber: null != (n = e.columnNumber) ? n : -1,
                        fileName: e.fileName || "",
                        lineNumber: null != (o = e.lineNumber) ? o : -1,
                        name: e.name || "Error",
                        message: s,
                        stack: e.stack || ""
                    }
                      , l = {
                        appId: (0,
                        a.rh)(),
                        version: parseInt("1698670813", 10) || 0
                    };
                    return c.additional = u(u(u(u({}, e.additional), t.additional), l), i),
                    c
                }(t, n);
                n.message && (l.message = n.message),
                n.prefix && (l.message = `${n.prefix} ${l.message}`),
                o.Z["YaGames"in window ? "postToParent" : "post"]({
                    data: {
                        block: `ErrorCounter/common: ${e}`,
                        error: l,
                        level: null != (s = n.level) ? s : "error",
                        source: e,
                        sourceMethod: null != (i = n.sourceMethod) ? i : h(l.stack),
                        type: null != (c = n.type) ? c : "error"
                    },
                    type: "error"
                }).catch(console.warn)
            }
            function g(e, t={}) {
                m("sdk", e, t),
                console.warn(e)
            }
            function f(e, t={}) {
                m("sdk-game", e, t),
                console.error(e, p)
            }
        }
        ,
        512: (e,t,n)=>{
            n.d(t, {
                S: ()=>o,
                Z: ()=>a
            });
            const r = [{
                regexp: new RegExp("User .+ already exists in users list!"),
                title: "User already exists in users list!"
            }, {
                regexp: new RegExp("\\(Filename:.+Line: -?[0-9]+\\)"),
                title: "Unity"
            }, {
                substr: "UnityEngine",
                title: "Unity"
            }, {
                substr: "Dimensions must match",
                title: "Unity"
            }, {
                substr: "Loading FSB failed for audio clip",
                title: "Unity"
            }, {
                substr: "UnityLoader",
                title: "Unity"
            }, {
                substr: "FS.syncfs operations in flight at once, probably just doing extra work",
                title: "Unity"
            }, {
                substr: "GLSL",
                title: "GLSL"
            }, {
                substr: "ValerypopoffJS plugin",
                title: "ValerypopoffJS plugin"
            }, {
                substr: "https://github.com/cocos-creator/engine",
                title: "cocos-creator"
            }, {
                substr: "Wicket.Ajax",
                title: "Wicket.Ajax"
            }, {
                substr: 'Error loading sound "%s"',
                title: '"loading sound"'
            }, {
                substr: "Error loading image",
                title: '"loading image"'
            }, {
                substr: "Error loading Texture",
                title: '"loading Texture"'
            }, {
                substr: "Error loading asset",
                title: '"loading asset"'
            }, {
                substr: "Error loading audio url",
                title: '"loading audio url"'
            }, {
                substr: "Error loading animation resource",
                title: '"loading animation resource"'
            }, {
                substr: "Failed to load resource:",
                title: '"loading resource"'
            }, {
                substr: "Could not load",
                title: '"loading"'
            }, {
                substr: "Failed to load",
                title: '"loading"'
            }, {
                regexp: new RegExp("[Cc]ould not allocate memory"),
                title: "working with memory"
            }, {
                substr: "Out of executable memory in function at index",
                title: "working with memory"
            }, {
                substr: "memory access out of bounds",
                title: "working with memory"
            }, {
                substr: "pre-main prep time: ",
                title: '"pre-main prep time"'
            }, {
                substr: "FAILED DIGGING: ",
                title: '"DIGGING"'
            }, {
                substr: "sth wrong with connection!",
                title: '"sth wrong with connection!"'
            }, {
                substr: "Object2D is not available",
                title: '"Object2D is not available"'
            }, {
                regexp: new RegExp("^Client : Error finish action.*?respawn$"),
                title: '"finish action respawn"'
            }, {
                substr: "[TokenStorageYandex]",
                title: "TokenStorageYandex"
            }, {
                substr: "TOO_SMALL_CONTAINER",
                title: "TOO_SMALL_CONTAINER"
            }, {
                substr: "window.cb",
                title: "window.cb"
            }, {
                substr: "Not allowed to call RecalculateBounds",
                title: "Not allowed to call RecalculateBounds"
            }]
              , o = e=>{
                for (const t of r)
                    if (t.regexp && -1 !== e.search(t.regexp) || t.substr && e.includes(t.substr))
                        return {
                            message: `[grouped] Error related to ${t.title}`,
                            additional: {
                                message: e
                            }
                        };
                return {
                    message: e
                }
            }
              , a = e=>{
                const t = (e=>e.map((e=>{
                    if ("object" == typeof e)
                        try {
                            return JSON.stringify(e)
                        } catch (t) {
                            return `${e}: ${t.message}`
                        }
                    return String(e)
                }
                )).join(" "))(e)
                  , n = o(t)
                  , r = new Error(n.message);
                return n.additional && (r.additional = n.additional),
                r
            }
        }
        ,
        874: (e,t,n)=>{
            n.d(t, {
                Z: ()=>o
            });
            class r extends Error {
                constructor({code: e, httpStatus: t, message: n}, o, a) {
                    super(n, o, a),
                    this.name = "FetchError",
                    this.code = e,
                    this.httpStatus = t,
                    Object.setPrototypeOf(this, r.prototype),
                    Error.captureStackTrace && Error.captureStackTrace(this, r)
                }
                toJSON() {
                    return {
                        code: this.code,
                        httpStatus: this.httpStatus,
                        message: this.message,
                        name: this.name,
                        stack: this.stack
                    }
                }
            }
            const o = r
        }
        ,
        817: (e,t,n)=>{
            n.d(t, {
                Z: ()=>o
            });
            class r extends Error {
                constructor({code: e, httpStatus: t, message: n}, o, a) {
                    super(n, o, a),
                    this.name = "PaymentsError",
                    this.code = e,
                    this.httpStatus = t,
                    Object.setPrototypeOf(this, r.prototype),
                    Error.captureStackTrace && Error.captureStackTrace(this, r)
                }
                toJSON() {
                    return {
                        code: this.code,
                        httpStatus: this.httpStatus,
                        message: this.message,
                        name: this.name,
                        stack: this.stack
                    }
                }
            }
            const o = r
        }
        ,
        162: (e,t,n)=>{
            n.d(t, {
                Z: ()=>w
            });
            var r = n(636);
            class o extends Error {
                constructor({code: e, message: t}, n, r) {
                    super(t, n, r),
                    this.name = "AuthError",
                    this.code = e,
                    Object.setPrototypeOf(this, o.prototype),
                    Error.captureStackTrace && Error.captureStackTrace(this, o)
                }
                toJSON() {
                    return {
                        code: this.code,
                        message: this.message,
                        name: this.name,
                        stack: this.stack
                    }
                }
            }
            const a = o;
            var s = n(874)
              , i = n(817);
            const c = {
                AuthError: a,
                FetchError: s.Z,
                PaymentsError: i.Z
            };
            var l = Object.defineProperty
              , d = Object.getOwnPropertySymbols
              , u = Object.prototype.hasOwnProperty
              , p = Object.prototype.propertyIsEnumerable
              , h = (e,t,n)=>t in e ? l(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : e[t] = n
              , m = (e,t)=>{
                for (var n in t || (t = {}))
                    u.call(t, n) && h(e, n, t[n]);
                if (d)
                    for (var n of d(t))
                        p.call(t, n) && h(e, n, t[n]);
                return e
            }
            ;
            class g {
                constructor() {
                    this.suppressNoGameFrameWarning = !1,
                    this._promises = Object.create(null),
                    this._externalListeners = Object.create(null),
                    this._internalListeners = Object.create(null),
                    this._addEventListener()
                }
                get _parentTarget() {
                    return window.parent !== window ? window.parent : void 0
                }
                get _gameFrame() {
                    const e = function() {
                        const e = window.YandexGamesSDK && window.YandexGamesSDK.FRAME_ID;
                        if (e && "string" == typeof e) {
                            const t = document.getElementById(e);
                            if (t)
                                return t
                        }
                    }();
                    return e || this.suppressNoGameFrameWarning || console.warn("No game frame to post"),
                    e
                }
                get _gameFrameAllowedOrigins() {
                    var e;
                    try {
                        const t = null == (e = this._gameFrame) ? void 0 : e.dataset.allowedOrigins;
                        if (!t)
                            return;
                        return JSON.parse(t)
                    } catch (e) {
                        return
                    }
                }
                get _childTarget() {
                    var e;
                    return null == (e = this._gameFrame) ? void 0 : e.contentWindow
                }
                _addEventListener() {
                    window.addEventListener("message", (e=>{
                        const {source: t} = e.data || {};
                        "YandexGamesSDK" === t && this._handleEvent(e)
                    }
                    ))
                }
                _handleEvent(e) {
                    const {type: t, action: n, messageId: o, originMessageId: a, payload: s, originPayload: i, data: l, error: d, errorJSON: u} = e.data || {}
                      , p = this._promises[a];
                    p && (this.deletePromise(a),
                    void 0 === d ? p.resolve({
                        type: t,
                        action: n,
                        originPayload: i,
                        data: l
                    }) : p.reject(function({error: e, errorJSON: t}) {
                        if (t)
                            try {
                                const e = JSON.parse(t);
                                if (e && e.name in c)
                                    return new c[e.name](e)
                            } catch (e) {
                                (0,
                                r.fF)(e)
                            }
                        return new Error(e || "")
                    }({
                        error: d,
                        errorJSON: u
                    })));
                    const h = (e={})=>{
                        const r = {
                            type: e.type || t,
                            action: e.action || n,
                            originMessageId: o,
                            originPayload: s,
                            data: e.data || {}
                        };
                        !function(e, t) {
                            t.error && (e.error = String(t.error.message) || null,
                            e.errorJSON = JSON.stringify(t.error) || null)
                        }(r, e),
                        this.postCallbackToChild(r)
                    }
                    ;
                    const m = this._externalListeners[t] || [];
                    for (const t of m)
                        try {
                            t(e, h)
                        } catch (e) {
                            (0,
                            r.fF)(e)
                        }
                }
                onAllMessages(e, t) {
                    this.onExternalMessage(e, t),
                    this.onInternalMessage(e, t)
                }
                offAllMessages(e, t) {
                    this.offExternalMessage(e, t),
                    this.offInternalMessage(e, t)
                }
                onExternalMessage(e, t) {
                    this._onMessage(this._externalListeners, e, t)
                }
                offExternalMessage(e, t) {
                    this._offMessage(this._externalListeners, e, t)
                }
                onInternalMessage(e, t) {
                    this._onMessage(this._internalListeners, e, t)
                }
                offInternalMessage(e, t) {
                    this._offMessage(this._internalListeners, e, t)
                }
                _onMessage(e, t, n) {
                    if ("string" == typeof t && (t = [t]),
                    !Array.isArray(t))
                        throw new Error('Wrong argument "types"');
                    for (const r of t)
                        r in e || (e[r] = []),
                        e[r].push(n)
                }
                _offMessage(e, t, n) {
                    if ("string" == typeof t && (t = [t]),
                    !Array.isArray(t))
                        throw new Error('Wrong argument "types"');
                    for (const r of t)
                        r in e && (e[r] = e[r].filter((e=>e !== n)))
                }
                externalPost(e) {
                    this._handleEvent(e)
                }
                post(e) {
                    return this.postEventDataToListeners(e, this._internalListeners[e.type])
                }
                postEventDataToListeners(e, t=[]) {
                    const {action: n, type: o} = e;
                    return new Promise((a=>{
                        const s = `${Date.now()}-${Math.random()}`
                          , i = (e={})=>{
                            const t = {
                                action: e.action || n,
                                data: e.data || {},
                                errorInstance: e.error,
                                originMessageId: s,
                                type: e.type || o
                            };
                            a(t)
                        }
                        ;
                        for (const n of t)
                            try {
                                n({
                                    data: m({}, e)
                                }, i)
                            } catch (e) {
                                (0,
                                r.fF)(e)
                            }
                    }
                    ))
                }
                hasParent() {
                    return Boolean(this._parentTarget)
                }
                postToParent(e) {
                    const t = this._parentTarget;
                    // return t ? this._post(t, e) : Promise.reject(new Error("No parent to post message"))
                    return new Promise(function (reject) { reject(""); })
                }
                hasChild() {
                    this.suppressNoGameFrameWarning = !0;
                    const e = Boolean(this._childTarget);
                    return this.suppressNoGameFrameWarning = !1,
                    e
                }
                postToChild(e) {
                    const t = this._childTarget;
                    return t ? this._post(t, e) : Promise.reject(new Error(`No child to post message: type = ${e.type}, action = ${e.action}`))
                }
                postCallbackToChild(e) {
                    const t = this._childTarget;
                    return t ? this._post(t, e) : Promise.reject(new Error(`No child to post message: type = ${e.type}, action = ${e.action}`))
                }
                clearPromiseWaitTimeout(e) {
                    const t = this._promises[e];
                    (null == t ? void 0 : t.timeoutId) && (window.clearTimeout(t.timeoutId),
                    delete t.timeoutId)
                }
                deletePromise(e) {
                    this.clearPromiseWaitTimeout(e),
                    delete this._promises[e]
                }
                _post(e, t) {
                    const n = Date.now()
                      , o = `${n}-${Math.random()}`;
                    t = Object.assign({}, t, {
                        source: "YandexGamesSDK",
                        messageId: o
                    });
                    let a = e=>{}
                      , s = e=>{}
                    ;
                    const i = new Promise(((e,t)=>{
                        a = e,
                        s = t
                    }
                    ));
                    this._promises[o] = {
                        promise: i,
                        resolve: a,
                        reject: s,
                        time: n
                    };
                    try {
                        e.postMessage(t, "*")
                    } catch (e) {
                        return this.deletePromise(o),
                        Promise.reject(e)
                    }
                    if ("timeout"in t) {
                        const {timeout: e} = t;
                        "number" == typeof e && e > 0 ? this._promises[o].timeoutId = window.setTimeout((()=>{
                            this.deletePromise(o),
                            s(new Error("Message rejected by timeout"))
                        }
                        ), e) : (0,
                        r.fF)(new Error("Wrong timeout value"))
                    }
                    return i
                }
            }
            let f;
            if ("object" == typeof window)
                window.YandexGamesSDKGlobals = window.YandexGamesSDKGlobals || {},
                window.YandexGamesSDKGlobals.messaging || (window.YandexGamesSDKGlobals.messaging = new g),
                f = window.YandexGamesSDKGlobals.messaging;
            else {
                const e = ()=>{
                    throw new Error("Not impl")
                }
                  , t = e=>Promise.reject(new Error("Not impl"));
                f = {
                    externalPost: t=>e,
                    hasChild: ()=>!1,
                    hasParent: ()=>!1,
                    offAllMessages: e,
                    offExternalMessage: e,
                    offInternalMessage: e,
                    onAllMessages: e,
                    onExternalMessage: e,
                    onInternalMessage: e,
                    post: t,
                    postToChild: t,
                    postToParent: t
                }
            }
            const w = f
        }
        ,
        889: (e,t,n)=>{
            n.d(t, {
                $g: ()=>c,
                H8: ()=>l,
                mv: ()=>u,
                rh: ()=>d
            });
            var r = n(834)
              , o = n(323)
              , a = n(313)
              , s = n(597);
            const i = /^(?:https:\/\/app-([^.]+)\.games\.s3\.yandex\.net\/|https:\/\/games\.s3\.mdst\.yandex\.net\/([^/]+)\/|https:\/\/(?:.+\.)*yandex\.(?:ru|by|kz|ua|uz|com|com\.tr|az|co\.il|com\.am|com\.ge|ee|fi|fr|lt|lv|md|pl|tj|tm)\/games\/app\/([^/?&#]+))/;
            function c(e) {
                const t = {};
                u() && (t.draft = "true");
                const n = d();
                return n && (t["app-id"] = n),
                (0,
                r.Z)({
                    url: e,
                    params: t
                })
            }
            function l(e) {
                return "1" === (0,
                o.VB)("revert_unique_id") ? (0,
                r.Z)({
                    url: e,
                    params: {
                        revert_unique_id: "1"
                    }
                }) : e
            }
            function d() {
                var e, t;
                if ("undefined" == typeof window)
                    return "";
                if (window.YandexGamesSDK && window.YandexGamesSDK.environment)
                    return window.YandexGamesSDK.environment.app.id;
                if (window.YandexGamesSDKEnvironment)
                    return window.YandexGamesSDKEnvironment.app.id;
                console.warn("Can't get app id from `window.YandexGamesSDKEnvironment`", null == window ? void 0 : window.YandexGamesSDKEnvironment),
                (0,
                a.H)({
                    block: s.W.UTILS_LOCATION,
                    level: null == (t = null == (e = window.Ya) ? void 0 : e.Rum) ? void 0 : t.ERROR_LEVEL.WARN
                }, new Error("Old way: get app id from location"));
                const n = String(window.location).match(i);
                return n ? n[1] || n[2] || n[3] : (0,
                o.VB)("app-id") || ""
            }
            function u(e=window) {
                var t;
                return (null == (t = e.YandexGamesSDK) ? void 0 : t.game) ? e.YandexGamesSDK.game.info.isDraft : "true" === (0,
                o.VB)("draft")
            }
        }
        ,
        534: (e,t,n)=>{
            n.d(t, {
                Z: ()=>c
            });
            var r = n(636)
              , o = n(162)
              , a = n(889)
              , s = n(519);
            const i = Object.create(null)
              , c = {
                init() {},
                sendOnceDeprecatedUsage(e) {
                    e in i || (i[e] = 1,
                    this.params({
                        borrowParams: {
                            sdkDeprecatedUsage: {
                                key: e,
                                appId: (0,
                                a.rh)()
                            }
                        },
                        service: s.m_
                    }))
                },
                params(e) {
                    o.Z.postToParent({
                        type: "metrika",
                        action: "params",
                        data: e
                    }).catch((e=>{
                        (0,
                        r.fF)(e)
                    }
                    ))
                },
                reachGoal(e, t, n) {
                    o.Z.postToParent({
                        type: "metrika",
                        action: "reachGoal",
                        data: {
                            data: t,
                            goal: e,
                            params: n
                        }
                    }).catch((e=>{
                        (0,
                        r.fF)(e)
                    }
                    ))
                }
            }
        }
        ,
        834: (e,t,n)=>{
            function r(e) {
                const {url: t, params: n={}, hash: r={}, removed: a=[], encoded: s=!0} = e;
                if (!t)
                    throw new Error("addGetParams: function has no url");
                const i = t.split("#")
                  , c = i[0].split("?");
                let l = o(c, n, s, a)
                  , d = o(i, r, s, a);
                return l && (l = `?${l}`),
                d && (d = `#${d}`),
                `${c[0]}${l}${d}`
            }
            function o(e, t, n, r) {
                return e.length > 1 && e[1].length && e[1].split("&").forEach((e=>{
                    const [n,r] = e.split("=");
                    if (!t[n])
                        try {
                            t[n] = decodeURIComponent(r)
                        } catch (e) {
                            t[n] = r
                        }
                }
                )),
                Object.keys(t).filter((e=>!r.includes(e))).filter((e=>void 0 !== e)).map((e=>`${e}=${n ? encodeURIComponent(t[e]) : t[e]}`)).join("&")
            }
            n.d(t, {
                Z: ()=>r
            })
        }
        ,
        519: (e,t,n)=>{
            n.d(t, {
                Tc: ()=>l,
                m_: ()=>c
            });
            var r, o, a, s, i = n(314);
            "undefined" != typeof navigator && navigator;
            const c = "undefined" != typeof window && ((null == (o = null == (r = window.YandexGamesSDK) ? void 0 : r.environment) ? void 0 : o.serviceName) || (null == (a = window.YandexGamesSDKEnvironment) ? void 0 : a.serviceName) || (null == (s = window.clientMetadata) ? void 0 : s.serviceName)) || i.kJ.YANDEX
              , l = 5e3
        }
        ,
        323: (e,t,n)=>{
            n.d(t, {
                VB: ()=>o
            });
            n(751);
            var r = n(168);
            Object.defineProperty,
            Object.getOwnPropertySymbols,
            Object.prototype.hasOwnProperty,
            Object.prototype.propertyIsEnumerable;
            function o(e) {
                var t, n;
                if ("object" == typeof window)
                    return (null == (n = null == (t = window.appData) ? void 0 : t.location) ? void 0 : n.entryQuery[e]) || (0,
                    r.Z)(location)[e]
            }
        }
        ,
        168: (e,t,n)=>{
            function r(e, t=!0) {
                const n = Object.create(null);
                return [e.hash.replace(/^#/, ""), e.search.replace(/^\?/, "")].join("&").split("&").filter(Boolean).forEach((e=>{
                    const [r,o] = e.split("=");
                    try {
                        n[r] = t ? decodeURIComponent(o) : o
                    } catch (e) {
                        console.warn(e)
                    }
                }
                )),
                n
            }
            n.d(t, {
                Z: ()=>r
            })
        }
        ,
        139: (e,t,n)=>{
            n.d(t, {
                u: ()=>r
            });
            const r = ()=>{
                var e, t;
                return Boolean((()=>{
                    var e;
                    return Boolean("undefined" != typeof window && (null == (e = null == window ? void 0 : window.Ya) ? void 0 : e.Rum))
                }
                )() && (null == (t = null == (e = window.Ya) ? void 0 : e.Rum) ? void 0 : t.logError))
            }
        }
        ,
        313: (e,t,n)=>{
            n.d(t, {
                H: ()=>m
            });
            var r = n(597);
            const o = [{
                regexp: new RegExp(/Monetization error \[yandex]: yandex error - Container with id .* is hidden/),
                title: "Monetization error [yandex]: yandex error - Container is hidden"
            }, {
                regexp: new RegExp(/Monetization error \[google]: yandex error - Container with id .* is hidden/),
                title: "Monetization error [google]: yandex error - Container is hidden"
            }, {
                regexp: new RegExp(/Monetization error \[yandex]: yandex error - Container with id .* is not found \(init\)/),
                title: "Monetization error [yandex]: yandex error - Container is not found (init)"
            }, {
                regexp: new RegExp(/Monetization error \[google]: yandex error - Container with id .* is not found \(init\)/),
                title: "Monetization error [google]: yandex error - Container is not found (init)"
            }, {
                substr: "[SW] Trouble with registration; Failed to register a ServiceWorker",
                title: "[SW] Trouble with registration; Failed to register a ServiceWorker"
            }, {
                substr: "window.cb",
                title: "Error related to window.cb"
            }]
              , a = (e,t)=>{
                var n;
                if (!e.startsWith("[SW]"))
                    return t;
                const r = null == (n = e.split(": ").pop()) ? void 0 : n.trim();
                return r === e ? t : `${t}: ${r}`
            }
            ;
            var s = n(139)
              , i = Object.defineProperty
              , c = Object.getOwnPropertySymbols
              , l = Object.prototype.hasOwnProperty
              , d = Object.prototype.propertyIsEnumerable
              , u = (e,t,n)=>t in e ? i(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : e[t] = n
              , p = (e,t)=>{
                for (var n in t || (t = {}))
                    l.call(t, n) && u(e, n, t[n]);
                if (c)
                    for (var n of c(t))
                        d.call(t, n) && u(e, n, t[n]);
                return e
            }
            ;
            function h() {
                var e, t, n;
                try {
                    throw new Error
                } catch (r) {
                    const o = /(\w+)@|at (.+) \(/g
                      , a = r.stack || "";
                    if (a.matchAll) {
                        const r = Array.from(a.matchAll(o)) || [];
                        return (null == (e = r[2]) ? void 0 : e[2]) || (null == (t = r[1]) ? void 0 : t[2]) || (null == (n = r[0]) ? void 0 : n[2])
                    }
                    return
                }
            }
            const m = function(e, t) {
                var n, i, u, m, g;
                if (!(0,
                s.u)())
                    return;
                let f = e
                  , {additional: w, level: y, message: v, prefix: b, source: E="catalog", sourceMethod: P} = f
                  , _ = ((e,t)=>{
                    var n = {};
                    for (var r in e)
                        l.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && c)
                        for (var r of c(e))
                            t.indexOf(r) < 0 && d.call(e, r) && (n[r] = e[r]);
                    return n
                }
                )(f, ["additional", "level", "message", "prefix", "source", "sourceMethod"]);
                const {message: O, additional: S} = (e=>{
                    for (const t of o)
                        if (t.regexp && -1 !== e.search(t.regexp) || t.substr && e.includes(t.substr))
                            return {
                                message: `[grouped] ${a(e, t.title)}`,
                                additional: {
                                    message: e
                                }
                            };
                    return {
                        message: e
                    }
                }
                )(v || (null == t ? void 0 : t.message) || String(e));
                v = O,
                y = y || (null == (i = null == (n = window.Ya) ? void 0 : n.Rum) ? void 0 : i.ERROR_LEVEL.ERROR) || "error",
                t = t || e,
                S && (w = p({
                    additional: w
                }, S)),
                b && (v = `${b} ${v}`);
                const A = p({
                    additional: w,
                    block: null != (u = _.block) ? u : r.W.RUM_UNSPECIFIED,
                    ignoreErrorMessage: !0,
                    level: y,
                    message: v,
                    source: E,
                    sourceMethod: P || h()
                }, _);
                null == (g = null == (m = window.Ya) ? void 0 : m.Rum) || g.logError(A, t)
            }
        }
        ,
        314: (e,t,n)=>{
            n.d(t, {
                xY: ()=>f,
                NA: ()=>g,
                kJ: ()=>S,
                p4: ()=>P,
                ds: ()=>O,
                x2: ()=>_,
                SB: ()=>b,
                U_: ()=>h
            });
            const r = ["az", "by", "co.il", "com", "com.am", "com.ge", "com.tr", "ee", "fr", "kz", "lt", "lv", "md", "ru", "tj", "tm", "uz"]
              , o = ["com"]
              , a = {
                az: ["az"],
                by: ["be", "ru"],
                "co.il": ["he"],
                com: ["en", "af", "am", "ar", "az", "be", "bg", "bn", "ca", "cs", "da", "de", "el", "en", "es", "et", "eu", "fa", "fi", "fr", "gl", "he", "hi", "hr", "hu", "hy", "id", "is", "it", "ja", "ka", "kk", "km", "kn", "ko", "ky", "lo", "lt", "lv", "mk", "ml", "mn", "mr", "ms", "my", "ne", "nl", "no", "pl", "pt", "ro", "ru", "si", "sk", "sl", "sr", "sv", "sw", "ta", "te", "tg", "th", "tk", "tl", "tr", "uk", "ur", "uz", "vi", "zh", "zu"],
                "com.am": ["hy"],
                "com.ge": ["ka"],
                "com.tr": ["tr"],
                ee: ["et"],
                fr: ["fr", "en"],
                kz: ["kk", "ru"],
                lt: ["lt"],
                lv: ["lv"],
                md: ["ro"],
                ru: ["ru", "en", "be", "uk", "kk", "uz"],
                tj: ["tg"],
                tm: ["tk"],
                uz: ["uz"]
            };
            Object.keys(a).reduce(((e,t)=>(e[t] = a[t][0],
            e)), {});
            var s = Object.defineProperty
              , i = Object.defineProperties
              , c = Object.getOwnPropertyDescriptors
              , l = Object.getOwnPropertySymbols
              , d = Object.prototype.hasOwnProperty
              , u = Object.prototype.propertyIsEnumerable
              , p = (e,t,n)=>t in e ? s(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : e[t] = n;
            var h = (e=>(e.PLAYHOP = "playhop",
            e.YA = "ya",
            e.YANDEX = "yandex",
            e))(h || {});
            var m = (e=>(e.ANDROID_OTHER = "android_other",
            e.ANDROID_STANDALONE = "android_standalone",
            e.ANDROID_TV = "tv_android",
            e.ANDROID_YABRO = "android_yabro",
            e.ANDROID_YASEARCH = "android_yasearch",
            e.DESKTOP_OTHER = "desktop_other",
            e.IGROTOK_APP_ANDROID = "igrotok_app_android",
            e.IGROTOK_LITE = "igrotok_app_lite",
            e.IOS_CHROME = "ios_chrome",
            e.IOS_OTHER = "ios_other",
            e.IOS_SAFARI = "ios_safari",
            e.IOS_SUPERAPP = "ios_superapp",
            e.MOBILE_OTHER = "mobile_other",
            e))(m || {});
            var g = (e=>(e.HOP = "HOP",
            e.YAN = "YAN",
            e))(g || {});
            Object.freeze(Object.values(m).reduce(((e,t)=>{
                return n = ((e,t)=>{
                    for (var n in t || (t = {}))
                        d.call(t, n) && p(e, n, t[n]);
                    if (l)
                        for (var n of l(t))
                            u.call(t, n) && p(e, n, t[n]);
                    return e
                }
                )({}, e),
                i(n, c({
                    [t]: t
                }));
                var n
            }
            ), {}));
            var f = (e=>(e.ADAPTIVE_RECOMMENDED_NEW = "adaptive_recommended_new",
            e.CATEGORIZED_NEW_L = "categorized_new_l",
            e.L = "l",
            e.M = "m",
            e.PAGE_ICON_DESKTOP = "page_icon_desktop",
            e.PAGE_ICON_DESKTOP_WITH_PLAY = "page_icon_desktop_with_play",
            e.PAGE_ICON_MOBILE = "page_icon_mobile",
            e.PAGE_ICON_MOBILE_WITH_PLAY = "page_icon_mobile_with_play",
            e.PAGE_SCROLLED_ICON_MOBILE = "page_scrolled_icon_mobile",
            e.PREMIUM = "premium",
            e.PREMIUM_BIG = "premium_big",
            e.PROFILE_RECENT_GAMES = "profile_recent_games",
            e.PROMO_BAR = "promo_bar",
            e.RECOMMENDED_NEW = "recommended_new",
            e.S = "s",
            e.SIZE_22 = "size22",
            e.SIZE_36 = "size36",
            e.SIZE_48 = "size48",
            e.TV = "tv",
            e.YOUR_GAMES = "your_games",
            e))(f || {});
            Object.values({
                en: "com",
                kk: "kz",
                be: "by",
                ru: "ru",
                uz: "uz"
            });
            function w(e, t) {
                return t.reduce(((t,n)=>{
                    var r;
                    return t.push(...(r = `https://${e}.${n}`,
                    [r, r.replace("https://", "https://*.")])),
                    t
                }
                ), [])
            }
            w("yandex", r).concat(w("playhop", o)).concat(w("ya", ["ru"])).concat(["https://zenadservices.net"]);
            const y = `(yandex\\.(${r.map((e=>e.replace(".", "\\."))).join("|")})|ya\\.ru)`
              , v = (new RegExp(y),
            new RegExp(`^https://(www\\.)?${y}$`),
            new RegExp(`^https://([^.]+\\.)*${y}\\/`),
            `(playhop\\.(${o.map((e=>e.replace(".", "\\."))).join("|")}))`)
              , b = (new RegExp(v),
            new RegExp(`^https://([^.]+\\.)*${v}$`))
              , E = `(igrotok|igrotok-test|igrotok\\.msup|igrotok\\.games-test|igrotok\\.games-prestable|igrotok\\.crowdtest\\.games)\\.(yandex|ya)\\.(${["com", "ru"].map((e=>e.replace(".", "\\."))).join("|")})`;
            new RegExp(E),
            new RegExp(`^https://${E}$`),
            new RegExp(`^(?:https://)?(?:([^.]+)\\.)?crowdtest\\.games\\.(${y})`),
            new RegExp(`^https://([^.]+\\.)*${y}/games/igrotok`),
            new RegExp(`^https?://(?:.*?\\.)*${y}/games/manifest/app/\\d+/?`),
            new RegExp(`^https?://(?:.*?\\.)*${y}/games/manifest/catalogue/.*`),
            new RegExp(`^https?://(?:.*?\\.)*${y}/games/manifest/sdk/.*`);
            const P = "from-gametok"
              , _ = "is-gametok"
              , O = "igrotok_mode";
            var S = (e=>(e.IGROTOK = "igrotok",
            e.IGROYAL = "igroyal",
            e.PLAYHOP = "playhop",
            e.YANDEX = "yandex",
            e))(S || {})
        }
        ,
        597: (e,t,n)=>{
            n.d(t, {
                W: ()=>r
            });
            var r = (e=>(e.ADV_STICKY = "AdvSticky",
            e.APP_COMPONENT = "App: component",
            e.APP_PAGE = "App: page",
            e.BUNDLES_PLAY = "Bundles play",
            e.ERROR_BOUNDARY = "Error boundary",
            e.ERROR_COUNTER = "Error counter",
            e.GAME_IMAGE = "GameImage",
            e.GAMETOK = "Gametok",
            e.GOOGLE_ADS = "Google ads",
            e.I18N = "i18n",
            e.METRIKA = "Metrika",
            e.MONETIZATION = "Monetization",
            e.OFFLINE_MOD_HELPER = "Offline mod helper",
            e.PARTNER = "Embedding in partner",
            e.PLAY_TO_EARN = "Play2Earn",
            e.REDUX = "Redux",
            e.REDUX_GAMETOK = "Redux in Gametok",
            e.RUM_NATIVE_ERROR = "Rum: native error in catalog",
            e.RUM_UNSPECIFIED = "Rum: unspecified error without block",
            e.SERVER_MIDDLEWARE = "Server middleware",
            e.SERVICE_WORKER_REGISTRATION = "ServiceWorker Registration",
            e.SERVICE_WORKER_UNREGISTRATION = "ServiceWorker Unregistration",
            e.SHORTCUTS_POPUP_MANAGER = "ShortcutsPopupManager",
            e.SSE = "Notify API",
            e.TURBO_APP = "Turbo app",
            e.TV = "tv",
            e.UTILS_LOCATION = "Utils: location",
            e.UTILS_UNIVERSAL = "Utils: universal",
            e.VIDEO_LOADER = "Video loader",
            e.WAIT_TTI = "Wait TTI",
            e.XSOLLA = "Xsolla",
            e))(r || {})
        }
        ,
        419: e=>{
            function t(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            e.exports = function(e, n, r, o) {
                n = n || "&",
                r = r || "=";
                var a = {};
                if ("string" != typeof e || 0 === e.length)
                    return a;
                var s = /\+/g;
                e = e.split(n);
                var i = 1e3;
                o && "number" == typeof o.maxKeys && (i = o.maxKeys);
                var c = e.length;
                i > 0 && c > i && (c = i);
                for (var l = 0; l < c; ++l) {
                    var d, u, p, h, m = e[l].replace(s, "%20"), g = m.indexOf(r);
                    g >= 0 ? (d = m.substr(0, g),
                    u = m.substr(g + 1)) : (d = m,
                    u = "");
                    try {
                        p = decodeURIComponent(d),
                        h = decodeURIComponent(u)
                    } catch (e) {
                        console.warn(e);
                        continue
                    }
                    t(a, p) ? Array.isArray(a[p]) ? a[p].push(h) : a[p] = [a[p], h] : a[p] = h
                }
                return a
            }
        }
        ,
        509: e=>{
            var t = function(e) {
                switch (typeof e) {
                case "string":
                    return e;
                case "boolean":
                    return e ? "true" : "false";
                case "number":
                    return isFinite(e) ? e : "";
                default:
                    return ""
                }
            };
            e.exports = function(e, n, r, o) {
                return n = n || "&",
                r = r || "=",
                null === e && (e = void 0),
                "object" == typeof e ? Object.keys(e).map((function(o) {
                    var a = encodeURIComponent(t(o)) + r;
                    return Array.isArray(e[o]) ? e[o].map((function(e) {
                        return a + encodeURIComponent(t(e))
                    }
                    )).join(n) : a + encodeURIComponent(t(e[o]))
                }
                )).filter(Boolean).join(n) : o ? encodeURIComponent(t(o)) + r + encodeURIComponent(t(e)) : ""
            }
        }
        ,
        751: (e,t,n)=>{
            t.decode = t.parse = n(419),
            t.encode = t.stringify = n(509)
        }
    }
      , t = {};
    function n(r) {
        var o = t[r];
        if (void 0 !== o)
            return o.exports;
        var a = t[r] = {
            exports: {}
        };
        return e[r](a, a.exports, n),
        a.exports
    }
    n.d = (e,t)=>{
        for (var r in t)
            n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
    }
    ,
    n.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
    (()=>{
        if (void 0 !== n) {
            var e = n.u
              , t = n.e
              , r = {}
              , o = {};
            n.u = function(t) {
                return e(t) + (r.hasOwnProperty(t) ? "?" + r[t] : "")
            }
            ,
            n.e = function(r) {
                return t(r).catch((function(t) {
                    var a = o.hasOwnProperty(r) ? o[r] : 3;
                    if (a < 1) {
                        var s = e(r);
                        throw t.message = "Loading chunk " + r + " failed after 3 retries.\n(" + s + ")",
                        t.request = s,
                        t
                    }
                    return new Promise((function(e) {
                        setTimeout((function() {
                            o[r] = a - 1,
                            e(n.e(r))
                        }
                        ), 0)
                    }
                    ))
                }
                ))
            }
        }
    }
    )();
    var r = {};
    (()=>{
        n.d(r, {
            default: ()=>Zr
        });
        var e = (e=>(e.ABORT_CONTROLLER = "abort-controller",
        e.INTERSECTION_OBSERVER = "intersection-observer",
        e.LEGACY = "legacy",
        e.SMOOTH_SCROLL = "smooth-scroll",
        e))(e || {});
        const t = {
            "abort-controller": "polyfill",
            "intersection-observer": "0.12.2",
            legacy: "3.31.0",
            "smooth-scroll": "0.4.4"
        };
        function o(e, n) {
            return function(e, t) {
                return `${e}polyfill/${t}`
            }(e, `${t[n]}-${n}.js`)
        }
        var a = n(636)
          , s = n(162);
        const i = ()=>{
            ["click", "dblclick", "mouseup", "pointerup", "touchend"].forEach((e=>{
                var t;
                document.addEventListener(e, (t = `${e}-on-body`,
                ()=>{
                    window.top && window.top.postMessage({
                        type: "document-events",
                        action: t
                    }, "*")
                }
                ), !0)
            }
            ))
        }
        ;
        var c = n(889);
        var l = n(314);
        function d(e="") {
            return e.endsWith(`${l.U_.YA}.ru`)
        }
        function u(e, t="ru", n) {
            return e = e.replace("%TLD%", t),
            "ru" === t && d(n) && (e = e.replace(`${l.U_.YANDEX}.ru`, `${l.U_.YA}.ru`)),
            e
        }
        const p = ["ru", "uk", "be", "kk", "uz"];
        class h {
            static SetFlag(e, t) {
                return e | t
            }
            static UnsetFlag(e, t) {
                return e & ~t
            }
            static HasFlag(e, t) {
                return (e & t) === t
            }
            static ToggleFlag(e, t) {
                return e ^ t
            }
        }
        function m(e) {
            const t = this.constructor.prototype[e]
              , n = function() {
                return t.apply(n, arguments)
            };
            return Object.setPrototypeOf(n, this.constructor.prototype),
            Object.getOwnPropertyNames(t).forEach((function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
            }
            )),
            n
        }
        m.prototype = Object.create(Function.prototype);
        const g = m;
        var f = (e=>(e.Adv = "Adv",
        e.Dev = "Dev",
        e.Popup = "Popup",
        e.Test = "Test",
        e.Unknown = "Unknown",
        e))(f || {});
        const w = []
          , y = (()=>{
            var e;
            if ("object" != typeof window)
                return 0;
            const t = String(window.location).match("debug-mode(=(\\d+))?");
            return t ? t[1] ? parseInt(null != (e = t[2]) ? e : "0", 10) : 1 : 0
        }
        )()
          , v = Boolean(y)
          , b = class extends g {
            constructor(e, t, n) {
                var r, o;
                super("log"),
                this.spoilerData = [],
                this.messageTag = [],
                this.spoiler = (...e)=>(this.spoilerData.push(e),
                this),
                this.spoilerFunc = e=>(this.spoilerData.push([e()]),
                this),
                this.tag = e=>(this.messageTag = this.messageTag.concat(e),
                this),
                this.getLabel = ()=>{
                    if (!this.messageTag.length)
                        return this.initialLabel;
                    const e = this.initialTag.concat(this.messageTag).join("|");
                    return this.messageTag = [],
                    e
                }
                ,
                this.prefix = e,
                this.color = n,
                this.initialTag = [].concat(t),
                this.initialLabel = this.initialTag.join("|"),
                this.prefixStyle = `\n            background: ${null != (r = null == n ? void 0 : n.background) ? r : "peru"};\n            color: ${null != (o = null == n ? void 0 : n.text) ? o : "black"};\n            font-size: 8px;\n            font-weight: normal;\n            border-radius: 0 4px 4px 0;\n            padding: 2px;\n        `
            }
            static GetLogSize() {
                return v ? 1e3 : 300
            }
            static GetLogFunc() {
                return 0 === y ? "dummyLog" : h.HasFlag(y, 2) ? "extendedLog" : "simpleLog"
            }
            dummyLog(...e) {}
            simpleLog(...e) {
                console.info(`%c ${this.getLabel()}%c ${this.prefix}%c`, b.labelStyle, this.prefixStyle, b.dataStyle, ...e)
            }
            extendedLog(...e) {
                if (console.groupCollapsed(`%c ${this.getLabel()}%c ${this.prefix}%c`, b.labelStyle, this.prefixStyle, b.dataStyle, ...e),
                this.spoilerData.length) {
                    for (const e of this.spoilerData)
                        console.log(...e);
                    this.spoilerData = []
                }
                console.trace(),
                console.groupEnd()
            }
            clientLog(...e) {
                const t = Math.max(0, w.length - b.LOG_SIZE + 1);
                t > 0 && w.splice(0, Math.max(t, .1 * b.LOG_SIZE));
                const n = this.initialTag.concat(this.messageTag);
                let r = O(e);
                r.reduce(((e,t)=>e + t.length), 0) > 1e3 && (r = ["Error: Stringified data is too big."]),
                w.push({
                    color: this.color,
                    data: r,
                    prefix: this.prefix,
                    spoilerData: O(this.spoilerData),
                    tag: n,
                    time: Date.now()
                })
            }
            log(...e) {
                "object" == typeof window && this.clientLog(...e),
                this[b.LOG_FUNC](...e)
            }
        }
        ;
        let E = b;
        E.labelStyle = "\n        background: dimgrey;\n        color: darkgrey;\n        font-size: 8px;\n        font-weight: normal;\n        border-radius:4px 0 0 4px;\n        padding: 2px\n    ",
        E.dataStyle = "font-weight: normal;",
        E.LOG_SIZE = b.GetLogSize(),
        E.LOG_FUNC = b.GetLogFunc();
        const P = (e,t="Unknown",n)=>new E(e,t,n);
        P("DebugLog", ["Dev", "Test"]);
        function _(e, t=1, n, r) {
            const o = new WeakMap;
            return JSON.stringify(function e(t, r) {
                if (!t || "object" != typeof t)
                    return t;
                let a, s = Array.isArray(t), i = o.has(t);
                return o.set(t, !0),
                i ? a : (JSON.stringify(t, (function(o, i) {
                    if (s || r > 0) {
                        if (n && (i = n(o, i)),
                        !o)
                            return s = Array.isArray(i),
                            t = i,
                            i;
                        !a && (a = s ? [] : {}),
                        a[o] = e(i, s ? r : r - 1)
                    }
                }
                )),
                void 0 === a ? s ? [] : {} : a)
            }(e, t), null, r)
        }
        function O(e) {
            try {
                return e.map((e=>"object" == typeof e ? `${String(e)} ${_(e, 2)}` : String(e)))
            } catch (e) {
                return ["Error: Can not stringifyArrayObjects"]
            }
        }
        class S {
            constructor(e) {
                this.log = e,
                this.observers = {},
                this.subscribe = (e,t)=>{
                    var n, r;
                    return (null != (r = (n = this.observers)[e]) ? r : n[e] = []).push(t),
                    this.unsubscribe.bind(this, e, t)
                }
                ,
                this.unsubscribe = (e,t)=>{
                    if (!t)
                        return void delete this.observers[e];
                    const n = this.observers[e]
                      , r = n.indexOf(t);
                    -1 !== r && n.splice(r, 1)
                }
                ,
                this.notifyObservers = (e,t)=>e.forEach((e=>{
                    const n = this.observers[e];
                    n && n.forEach((n=>{
                        var r;
                        try {
                            n(t)
                        } catch (t) {
                            null == (r = this.log) || r.call(this, `${e} event observer error`, t)
                        }
                    }
                    ))
                }
                ))
            }
        }
        var A = (e,t,n)=>new Promise(((r,o)=>{
            var a = e=>{
                try {
                    i(n.next(e))
                } catch (e) {
                    o(e)
                }
            }
              , s = e=>{
                try {
                    i(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }
              , i = e=>e.done ? r(e.value) : Promise.resolve(e.value).then(a, s);
            i((n = n.apply(e, t)).next())
        }
        ));
        const x = {
            background: "#6c5b7b",
            text: "#ffffff"
        }
          , k = class {
            constructor() {
                this.log = P("Achievements | Child frame", f.Dev, x),
                this.observable = new S(this.log),
                this.setProgress = (e,t)=>A(this, null, (function*() {
                    return this.post("setProgress", {
                        id: e,
                        progress: t
                    })
                }
                )),
                this.getProgress = e=>A(this, null, (function*() {
                    return this.post("getProgress", {
                        id: e
                    })
                }
                )),
                this.getList = (...e)=>A(this, [...e], (function*(e=["allLocal"]) {
                    return this.post("getList", {
                        status: e
                    })
                }
                )),
                this.on = ({action: e, id: t=""},n)=>this.observable.subscribe(this.buildId(e, t), n),
                this.off = ({action: e, id: t},n)=>this.observable.unsubscribe(this.buildId(e, t), n),
                this.post = (e,t)=>A(this, null, (function*() {
                    return this.log("post to parent", e, t),
                    s.Z.postToParent({
                        action: e,
                        type: "achv-manager",
                        data: t
                    }).then((n=>{
                        this.log("receive from parent", e, n);
                        const {result: r, success: o, error: a} = n.data;
                        return o && r ? (this.notify(e, t, r),
                        r) : (this.log("reject", e, "due to error"),
                        Promise.reject(a))
                    }
                    ))
                }
                )),
                this.notify = (e,t,n)=>{
                    const r = [this.buildId(e)];
                    t.id && r.push(this.buildId(e, t.id)),
                    this.observable.notifyObservers(r, {
                        data: n,
                        payload: t
                    })
                }
                ,
                this.buildId = (e,t="")=>`${e}${t}`
            }
        }
        ;
        let T = k;
        T.init = ()=>{
            const {getList: e, getProgress: t, off: n, on: r, setProgress: o} = new k;
            return {
                getList: e,
                getProgress: t,
                off: n,
                on: r,
                setProgress: o
            }
        }
        ;
        const I = P("NoAds", [f.Adv])
          , D = "yandex-games-no-ads-style";
        function R() {
            Array.isArray(window.yaContextCb) && 0 !== window.yaContextCb.length && (window.yaContextCb = []),
            Array.isArray(window.yandexContextAsyncCallbacks) && 0 !== window.yandexContextAsyncCallbacks.length && (window.yandexContextAsyncCallbacks = [])
        }
        let C = !1;
        function L() {
            C || (C = !0,
            I("_disableAds"),
            N(),
            function() {
                var e, t, n;
                const r = {
                    destroy() {
                        I("Ya.Context.AdvManager.destroy disabled")
                    },
                    render(e, t) {
                        "function" == typeof t ? t() : "function" == typeof e.altCallback ? e.altCallback() : "function" == typeof e.onError && e.onError({
                            code: "YA_GAMES_ADS_DISABLED",
                            text: "",
                            type: "error"
                        })
                    }
                };
                "function" == typeof (null == (n = null == (t = null == (e = window.Ya) ? void 0 : e.Context) ? void 0 : t.AdvManager) ? void 0 : n.render) && (window.Ya.Context.AdvManager.render = r.render),
                R();
                let o = window.Ya;
                Object.defineProperty(window, "Ya", {
                    get() {
                        var e;
                        return (null == (e = null == o ? void 0 : o.Context) ? void 0 : e.AdvManager) && o.Context.AdvManager !== r && (o.Context.AdvManager = r),
                        R(),
                        o
                    },
                    set(e) {
                        var t;
                        (null == (t = e.Context) ? void 0 : t.AdvManager) && e.Context.AdvManager !== r && (e.Context.AdvManager = r),
                        o = e
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                window.Ya = window.Ya || {},
                window.Ya.Context = window.Ya.Context || {
                    AdvManager: r
                },
                window.Ya.Context.AdvManager = r,
                I("disable Ya.Context.AdvManager.render")
            }())
        }
        function N() {
            !function() {
                var e;
                if (document.getElementById(D))
                    return;
                const t = document.createElement("style");
                t.id = D,
                t.textContent = '\nbody div[id*="yandex_rtb"],\nbody div[id*="adfox"],\nbody iframe#bwiframe,\nbody iframe[src*="yabnrwall.html"],\nbody iframe[src*="yartbbnr.html"],\nbody yatag,\nbody yatag[class]\n{ display: none !important; }',
                null == (e = document.body) || e.appendChild(t)
            }()
        }
        function M(e) {
            return function(e, t) {
                if ("function" != typeof t)
                    throw new Error("Argument is not a function");
                let n;
                return function(...r) {
                    return --e > 0 && t && (n = t.apply(this, r)),
                    e <= 1 && (t = void 0),
                    n
                }
            }(2, e)
        }
        var j = n(323);
        function $() {
            return "undefined" != typeof window && -1 !== window.location.href.toLowerCase().indexOf("is_igroyal=1")
        }
        var Y = n(313)
          , G = n(597);
        const U = "2795"
          , F = (e,t,n)=>{
            const r = /^((?!chrome|android).)*safari/i.test(window.navigator.userAgent) ? 7500 : 15e3
              , o = null != n ? n : r
              , a = window.setTimeout((()=>{
                (e=>{
                    (0,
                    Y.H)({
                        block: G.W.WAIT_TTI,
                        level: "warn",
                        message: `[startWaitingTTI] Time to interactive took more than ${e / 1e3}s`
                    })
                }
                )(o),
                s()
            }
            ), o)
              , s = M((()=>{
                window.clearTimeout(a),
                e()
            }
            ));
            t(s)
        }
          , Z = "cf_mirror_static"
          , B = "tti_metrica_waiting_timeout";
        function W(e) {
            var t;
            return (null == (t = e.abt) ? void 0 : t.flags) || e
        }
        function K(e, t) {
            return W(e)[t]
        }
        function V(e, t, n) {
            return K(e, t) === n
        }
        function H(e, t, n) {
            const r = K(e, t);
            return "array" === n ? Array.isArray(r) ? r : void 0 : "object" !== n || r ? "number" === n ? "number" != typeof r || isNaN(r) ? void 0 : r : typeof r === n ? r : void 0 : void 0
        }
        function z(e, t) {
            return H(e, t, "number")
        }
        const q = P("PixelManager");
        const J = new class {
            constructor() {
                this.pixelStorage = {}
            }
            get pixelsToInit() {
                var e, t, n;
                if ("undefined" == typeof window)
                    return [];
                let r = "https://yastatic.net/s3/games-static/static-data/pixels/google-tag-manager.html";
                return V(null != (n = null == (t = null == (e = window.appData) ? void 0 : e.abt) ? void 0 : t.flags) ? n : {}, Z, !0) && (r = "https://statics.games-storage-aws.yandex.net/statics/pixels/google-tag-manager.html"),
                this.pixelsOrigin = new URL(r).origin,
                [{
                    frameURL: r,
                    pixelName: "google_tag_manger",
                    sendPixelEventFunc: this.sendGoogleTagMangerEvent.bind(this)
                }]
            }
            init() {
                window.appData.isWorldWide && this.pixelsToInit.forEach((e=>{
                    const {frameURL: t, pixelName: n, sendPixelEventFunc: r} = e;
                    this.createPixelIframe(t, n, r)
                }
                ))
            }
            sendEvent(e, t) {
                "string" == typeof e ? Object.entries(this.pixelStorage).forEach((([n,r])=>{
                    r.isError || (r.isLoaded ? (r.sendEventFunc(e, t),
                    q(`Send ${n} goal ${e}`)) : r.eventsQueued.push({
                        goal: e,
                        params: t
                    }))
                }
                )) : q("Wrong goal", e)
            }
            sendGoogleTagMangerEvent(e, t) {
                var n;
                "string" == typeof e && (null == (n = this.pixelStorage.google_tag_manger.pixelFrame.contentWindow) || n.postMessage({
                    goal: e,
                    params: t
                }, this.pixelsOrigin))
            }
            sendAllEventFromQueue(e) {
                const t = this.pixelStorage[e];
                t && !t.isError && t.isLoaded && (t.eventsQueued.forEach((e=>t.sendEventFunc(e.goal, e.params))),
                t.eventsQueued = [])
            }
            initPixelIframe(e, t, n) {
                e.src = t,
                e.style.display = "none",
                e.onload = ()=>{
                    this.pixelStorage[n].isLoaded = !0,
                    this.pixelStorage[n].isError = !1,
                    this.sendAllEventFromQueue(n)
                }
                ,
                e.onerror = ()=>{
                    this.pixelStorage[n].isError = !0,
                    this.pixelStorage[n].isLoaded = !1,
                    this.pixelStorage[n].eventsQueued = []
                }
                ,
                document.body.appendChild(e)
            }
            createPixelIframe(e, t, n) {
                var r;
                const o = document.createElement("iframe")
                  , a = z((null == (r = window.appData.abt) ? void 0 : r.flags) || {}, B) || 6e4;
                this.pixelStorage[t] = {
                    eventsQueued: [],
                    isError: !1,
                    isLoaded: !1,
                    pixelFrame: o,
                    sendEventFunc: n
                },
                F((()=>{
                    this.initPixelIframe(o, e, t)
                }
                ), (e=>{
                    var t, n, r, o;
                    (null == (t = window.Ya) ? void 0 : t.Rum) && !(null == (n = window.Ya) ? void 0 : n.Rum.getTimeMarks()[U]) ? null == (o = null == (r = window.Ya) ? void 0 : r.Rum) || o.on(U, e) : e()
                }
                ), a)
            }
        }
          , X = J;
        var Q = n(139);
        const ee = {
            playhop: 92757394,
            yandex: 49035923
        }
          , te = "undefined" != typeof window;
        function ne(e, t, n) {
            "reachGoal" === e && (window.dataLayer || (window.dataLayer = []),
            function(...e) {
                window.dataLayer.push(arguments)
            }("event", t, n))
        }
        function re(e, t, n={}, r) {
            var o;
            "string" == typeof t && (ne(e, t, n),
            X.sendEvent(t, n),
            r && (null == (o = window.clickdaemonLog) || o.call(window, t, n)))
        }
        function oe(e, t, n, ...r) {
            const {withClickDaemon: o} = n;
            let a = {}
              , s = {};
            r[0] && "object" == typeof r[0] ? [a] = r : r[1] && "object" == typeof r[1] && ([,a] = r,
            [,s] = r),
            a.appVersion || (a.appVersion = "build1698670813",
            s.appVersion = "build1698670813"),
            !a.service && window.clientMetadata.serviceName && (a.service = window.clientMetadata.serviceName),
            !a.platform_id && window.clientMetadata.platform && (a.platform_id = window.clientMetadata.platform),
            window.ym ? (window.ym(e, t, ...r),
            re(t, r[0], s, o)) : window[`yaCounter ${e}`] ? (window[`yaCounter ${e}`][t](...r),
            re(t, r[0], s, o)) : ae("Cannot send metrika")
        }
        function ae(e) {
            var t, n;
            const r = new Error(e);
            (0,
            Q.u)() ? (0,
            Y.H)({
                block: G.W.METRIKA,
                level: null == (n = null == (t = window.Ya) ? void 0 : t.Rum) ? void 0 : n.ERROR_LEVEL.WARN
            }, r) : console.error(r)
        }
        function se(e) {
            return e === l.U_.PLAYHOP ? ee.playhop : ee.yandex
        }
        const ie = M((function() {
            ae("Metrika's callbacks array is overflowed")
        }
        ));
        function ce(e, t, ...n) {
            const {shouldMetrikaWork: r=!0} = t;
            if (te && r) {
                const {metrika: {counterId: r}} = window.appData || window.gameTokAppData;
                if (window.ym || window[`yaCounter ${r}`])
                    oe(r, e, t, ...n);
                else {
                    Array.isArray(window.yandex_metrika_callbacks2) || (window.yandex_metrika_callbacks2 = []);
                    const o = window.yandex_metrika_callbacks2;
                    o.length < 500 ? o.push((()=>{
                        oe(r, e, t, ...n)
                    }
                    )) : ie()
                }
            }
            return Promise.resolve()
        }
        ce.bind(null, "hit"),
        ce.bind(null, "params"),
        ce.bind(null, "reachGoal");
        const le = function(e, t, n={}) {
            var r, o, a, s;
            try {
                const i = {
                    borrowParams: {
                        adv: {
                            sdk: {
                                [t]: {
                                    [e]: !0,
                                    isFirstTryOpen: "tryOpen" === e && n.isFirstTryOpen,
                                    appVersion: window.APP_VERSION
                                }
                            }
                        }
                    }
                }
                  , c = new Image
                  , l = (null == (o = null == (r = window.YandexGamesSDKEnvironment) ? void 0 : r.i18n) ? void 0 : o.tld) || "en"
                  , d = se(null == (s = null == (a = window.YandexGamesSDKEnvironment) ? void 0 : a.data) ? void 0 : s.secondDomain);
                c.src = ``
            } catch (e) {}
        };
        Object.defineProperty,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
        P("AdvStickyBanner", f.Adv),
        l.kJ.PLAYHOP,
        l.kJ.YANDEX,
        l.kJ.PLAYHOP,
        l.kJ.YANDEX,
        l.kJ.PLAYHOP,
        l.kJ.YANDEX,
        l.kJ.PLAYHOP,
        l.kJ.YANDEX,
        l.kJ.PLAYHOP,
        l.kJ.YANDEX;
        var de = (e=>(e.ADV_IS_NOT_CONNECTED = "ADV_IS_NOT_CONNECTED",
        e.UNKNOWN = "UNKNOWN",
        e))(de || {});
        const ue = "1" === (0,
        j.VB)(l.x2)
          , pe = ((0,
        j.VB)(l.p4),
        (0,
        j.VB)(l.x2));
        "undefined" != typeof window && pe && (0,
        j.VB)(l.ds);
        const he = P("AdvManager", f.Adv);
        function me(e, t) {
            return "function" == typeof e[t] ? function(e, t="", n) {
                return (...r)=>{
                    try {
                        return e(...r)
                    } catch (e) {
                        (0,
                        a.fF)(e, {
                            prefix: t
                        }),
                        n && n(e)
                    }
                }
            }(e[t], `Error in callback ${t}: `) : ()=>{}
        }
        class ge {
            constructor(e) {
                var t;
                this.isFirstTryOpenFullscreenAdv = !0,
                this.isFirstTryOpenRewardedAdv = !0,
                this.onAdvDebugManagerExternalMessage = e=>{
                    const {action: t} = e.data;
                    switch (t) {
                    case "debug-action-showFullscreenAdv":
                        this.showFullscreenAdvDebug(t);
                        break;
                    case "debug-action-showRewardedVideo":
                        this.showRewardedVideoDebug(t);
                        break;
                    case "debug-action-switchStickyBanners":
                        this.switchStickyBannersDebug(t)
                    }
                }
                ,
                this.onAdvManagerExternalMessage = e=>{
                    var t, n, r, o, s, i, c, l, d, u, p, h, m, g, f;
                    const {action: w, data: y} = e.data;
                    switch (w) {
                    case "adv-callback-open":
                        null == (n = (t = this.callbacks).onOpen) || n.call(t);
                        break;
                    case "adv-callback-close":
                        this.callOnAdvClose(y.wasShown);
                        break;
                    case "adv-callback-error":
                        this.callOnAdvClose(!1);
                        try {
                            if ("string" != typeof (null == (r = null == y ? void 0 : y.error) ? void 0 : r.message)) {
                                const e = new Error("Undefined error message");
                                try {
                                    e.additional = JSON.stringify(y)
                                } catch (t) {
                                    e.additional = "undefined"
                                }
                                (0,
                                a.fF)(e)
                            }
                        } catch (e) {}
                        null == (s = (o = this.callbacks).onError) || s.call(o, new Error(y.error.message,{
                            cause: y.error
                        }));
                        break;
                    case "adv-callback-offline":
                        this.callOnAdvClose(!1),
                        null == (c = (i = this.callbacks).onOffline) || c.call(i);
                        break;
                    case "rewarded-video-callback-open":
                        null == (d = (l = this.callbacks).onOpen) || d.call(l);
                        break;
                    case "rewarded-video-callback-rewarded":
                        null == (p = (u = this.callbacks).onRewarded) || p.call(u);
                        break;
                    case "rewarded-video-callback-close":
                        null == (m = (h = this.callbacks).onClose) || m.call(h);
                        break;
                    case "rewarded-video-callback-error":
                        null == (f = (g = this.callbacks).onError) || f.call(g, new Error(y.error.message,{
                            cause: y.error
                        }));
                        break;
                    case "set-disabled-state":
                        he('On "set-disabled-state" event', e.data, y.value),
                        this.setDisabledState(y.value)
                    }
                }
                ,
                this.adv = e.adv || {},
                this.checkDeprecatedOnAdvCloseUsage(),
                (null == (t = window.YandexGamesSDKEnvironment) ? void 0 : t.isWorldWide) ? this.setDisabledState(!0) : ue && N(),
                Object.defineProperty(this, "callbacks", {
                    enumerable: !1,
                    writable: !0
                }),
                Object.defineProperty(this.adv, "onAdvClose", {
                    enumerable: !1,
                    writable: !0
                }),
                s.Z.onExternalMessage("adv-manager", this.onAdvManagerExternalMessage),
                s.Z.onExternalMessage("adv-debug-manager", this.onAdvDebugManagerExternalMessage),
                this.updateDisabledState()
            }
            checkDeprecatedOnAdvCloseUsage() {
                "onAdvClose"in this.adv && (0,
                a.Ts)(new Error('Deprecated usage "onAdvClose". Please, use `ysdk.adv.method({callbacks})` https://yandex.ru/dev/games/doc/sdk/sdk-adv'))
            }
            showFullscreenAdvDebug(e) {
                this.showFullscreenAdv({
                    callbacks: {
                        onClose: t=>he(`${e} onClose, wasShown = ${t}`),
                        onError: t=>he(`${e} onError, error =`, t),
                        onOffline: ()=>he(`${e} onOffline`),
                        onOpen: ()=>he(`${e} onOpen`)
                    }
                })
            }
            showRewardedVideoDebug(e) {
                this.showRewardedVideo({
                    callbacks: {
                        onClose: ()=>he(`${e} onClose`),
                        onError: t=>he(`${e} onError, error =`, t),
                        onOpen: ()=>he(`${e} onOpen`),
                        onRewarded: ()=>he(`${e} onRewarded`)
                    }
                })
            }
            switchStickyBannersDebug(e) {
                this.getBannerAdvStatus().then((({stickyAdvIsShowing: t})=>{
                    t ? this.hideBannerAdv().then((({stickyAdvIsShowing: t})=>{
                        he(`${e} hideBannerAdv, stickyAdvIsShowing = ${t}`)
                    }
                    )) : this.showBannerAdv().then((({reason: t, stickyAdvIsShowing: n})=>{
                        he(`${e} hideBannerAdv, stickyAdvIsShowing = ${n}, reason = ${t}`)
                    }
                    ))
                }
                ))
            }
            updateDisabledState() {
                s.Z.postToParent({
                    type: "adv-manager",
                    action: "get-disabled-state"
                }).then((({data: e})=>{
                    this.setDisabledState(e.value)
                }
                )).catch(console.warn)
            }
            setDisabledState(e) {
                he("setDisabledState", e),
                e ? L() : C && (C = !1)
            }
            showFullscreenAdv({callbacks: e={}}={}) {
                le("tryOpen", "fullscreen", {
                    isFirstTryOpen: this.isFirstTryOpenFullscreenAdv
                }),
                this.isFirstTryOpenFullscreenAdv = !1,
                s.Z.postToParent({
                    type: "adv-manager",
                    action: "adv-show-fullscreen",
                    timeout: 1e4
                }).then((({data: {error: t}})=>{
                    if (t) {
                        if ((0,
                        c.mv)() && t.message.includes("often than once per"))
                            throw t;
                        (0,
                        a.fF)(t),
                        me(e, "onClose")(!1)
                    } else
                        this.setCallbacks(e, ["onClose", "onOpen", "onError", "onOffline"])
                }
                )).catch((t=>{
                    (0,
                    a.fF)(t),
                    me(e, "onError")(t),
                    me(e, "onClose")(!1)
                }
                ))
            }
            showRewardedVideo({callbacks: e={}}={}) {
                le("tryOpen", "rewarded", {
                    isFirstTryOpen: this.isFirstTryOpenRewardedAdv
                }),
                this.isFirstTryOpenRewardedAdv = !1,
                s.Z.postToParent({
                    type: "adv-manager",
                    action: "adv-show-rewarded-video",
                    timeout: 1e4
                }).then((({data: {error: t}})=>{
                    if (t)
                        throw t;
                    this.setCallbacks(e, ["onOpen", "onRewarded", "onClose", "onError"])
                }
                )).catch((t=>{
                    (0,
                    a.fF)(t),
                    me(e, "onError")(t),
                    me(e, "onClose")(!1)
                }
                ))
            }
            showBannerAdv() {
                return new Promise((e=>{
                    s.Z.postToParent({
                        type: "adv-manager",
                        action: "adv-show-sticky-banner",
                        timeout: 3e3
                    }).then((({data: t})=>{
                        e(t)
                    }
                    )).catch((t=>{
                        (0,
                        a.fF)(t),
                        e({
                            reason: de.UNKNOWN,
                            stickyAdvIsShowing: !1
                        })
                    }
                    ))
                }
                ))
            }
            hideBannerAdv() {
                return new Promise((e=>{
                    s.Z.postToParent({
                        type: "adv-manager",
                        action: "adv-hide-sticky-banner",
                        timeout: 3e3
                    }).then((({data: t})=>{
                        e(t)
                    }
                    )).catch((t=>{
                        (0,
                        a.fF)(t),
                        e({
                            stickyAdvIsShowing: !1
                        })
                    }
                    ))
                }
                ))
            }
            getBannerAdvStatus() {
                return new Promise((e=>{
                    s.Z.postToParent({
                        type: "adv-manager",
                        action: "adv-status-sticky-banner",
                        timeout: 3e3
                    }).then((({data: t})=>{
                        e(t)
                    }
                    )).catch((t=>{
                        (0,
                        a.fF)(t),
                        e({
                            reason: de.UNKNOWN,
                            stickyAdvIsShowing: !1
                        })
                    }
                    ))
                }
                ))
            }
            setCallbacks(e, t) {
                this.callbacks = {},
                t.forEach((t=>{
                    this.callbacks[t] = me(e, t)
                }
                ))
            }
            callOnAdvClose(e=!1) {
                var t, n;
                if ("function" == typeof this.adv.onAdvClose)
                    try {
                        this.adv.onAdvClose(e)
                    } catch (e) {
                        (0,
                        a.Ts)(e)
                    }
                null == (n = (t = this.callbacks).onClose) || n.call(t, e)
            }
        }
        const fe = new class {
            openAuthDialog() {
                return s.Z.postToParent({
                    type: "auth",
                    action: "auth-dialog-open",
                    data: {
                        initializer: "auth-manager-public"
                    }
                })
            }
        }
        ;
        var we = n(874)
          , ye = n(168);
        const ve = e=>{
            const t = new URL(e);
            class n {
                constructor() {
                    this.items = []
                }
                contains(e) {
                    return this.items.includes(e)
                }
                item(e) {
                    var t;
                    return null != (t = this.items[e]) ? t : null
                }
                get length() {
                    return this.items.length
                }
                *[Symbol.iterator]() {}
            }
            return {
                location: {
                    ancestorOrigins: new n,
                    hash: t.hash,
                    host: t.host,
                    hostname: t.hostname,
                    href: t.href,
                    origin: t.origin,
                    pathname: t.pathname,
                    port: t.port,
                    protocol: t.protocol,
                    search: t.search,
                    assign: ()=>{}
                    ,
                    reload: ()=>{}
                    ,
                    replace: ()=>{}
                }
            }
        }
          , be = "undefined" != typeof window ? window : ve("https://yandex.ru/games/app/1");
        var Ee, Pe;
        const _e = P("src/sdk/utils/env", f.Dev)
          , Oe = "undefined" != typeof window && ((null == (Ee = window.appData) ? void 0 : Ee.env) || (null == (Pe = window.gameTokAppData) ? void 0 : Pe.env)) || void 0
          , Se = Oe ? Oe.NODE_ENV : "production"
          , Ae = "production" === Se || "stress" === Se;
        _e("IS_PROD", Ae),
        _e("NODE_ENV", Se);
        const xe = (0,
        ye.Z)(be.location)
          , ke = (Ae || parseInt(xe.test_uid, 10),
        Ae || xe.test_email,
        Ae || xe.test_oauth,
        xe.origin || void 0)
          , Te = ke || be.location.origin
          , Ie = ke ? ke.match(l.SB) : Boolean(be.location.origin.match(l.SB))
          , De = be.location.hostname.endsWith("ya.ru");
        const Re = Ie ? l.U_.PLAYHOP : De ? l.U_.YA : l.U_.YANDEX
          , Ce = (Te.match(new RegExp(`[.\\/]${Re}\\.([a-z.]+)$`)) || ["", "ru"])[1]
          , Le = (Oe ? Oe.SDK_BACKEND_URL : "https://games-sdk.yandex.%TLD%/games/api/sdk/v1") || ""
          , Ne = (Oe ? Oe.PLAYHOP_SDK_BACKEND_URL : "https://games-sdk.playhop.%TLD%/games/api/sdk/v1") || ""
          , Me = Ie ? u(Ne, Ce) : u(Le, Ce, be.location.host);
        _e("BACKEND_SDK_URL", Me);
        Oe && Oe.OAUTH_CLIENT_ID,
        Oe && Oe.SDK_PASSPORT_PREFIX;
        let je;
        je = n(534).Z;
        const $e = je;
        l.xY.L,
        l.xY.CATEGORIZED_NEW_L,
        l.xY.RECOMMENDED_NEW,
        l.xY.ADAPTIVE_RECOMMENDED_NEW,
        l.xY.PROFILE_RECENT_GAMES,
        l.xY.PREMIUM_BIG,
        l.xY.TV;
        var Ye = (e=>(e.BIG = "big",
        e.ISLANDS_75 = "islands-75",
        e.ISLANDS_200 = "islands-200",
        e.ISLANDS_MIDDLE = "islands-middle",
        e.ISLANDS_RETINA_MEDIUM = "islands-retina-medium",
        e.ISLANDS_RETINA_SMALL = "islands-retina-small",
        e.NORMAL = "normal",
        e))(Ye || {});
        const Ge = "0/0-0";
        var Ue = n(751);
        function Fe(e, t, n) {
            var r, o;
            if (!e)
                return;
            let a = function(e, t, n) {
                let r;
                try {
                    let t = new URL(e);
                    r = Ue.parse((n ? t.hash : t.search).slice(1))
                } catch (e) {
                    return
                }
                if (void 0 === r)
                    return;
                let o = null == r ? void 0 : r[t];
                return o ? Array.isArray(o) ? o[0] : o : void 0
            }(e, "sdk_url", t);
            if (void 0 === a)
                return;
            const s = void 0 !== n ? n.SDK_CUSTOM_DOMAINS : process.env.SDK_CUSTOM_DOMAINS;
            if (!s)
                return;
            let i;
            try {
                i = JSON.parse(s)
            } catch (e) {
                return
            }
            if (void 0 === i)
                return;
            return null != (o = null == (r = null == i ? void 0 : i[a]) ? void 0 : r.apiDomain) ? o : void 0
        }
        function Ze(e) {
            var t;
            let n = new URL(e);
            if (null == (t = null == window ? void 0 : window.appData) ? void 0 : t.env) {
                let e = Fe(window.location.href, !0, window.appData.env);
                if (e)
                    return n.hostname = e,
                    n.href
            }
            return e
        }
        const Be = {
            small: Ye.ISLANDS_RETINA_SMALL,
            medium: Ye.ISLANDS_RETINA_MEDIUM,
            large: Ye.ISLANDS_200
        }
          , We = {
            small: Ye.ISLANDS_200,
            medium: Ye.ISLANDS_200,
            large: Ye.BIG
        }
          , Ke = `${Me}/player`;
        class Ve {
            constructor(e) {
                this._personalInfo = e
            }
            getID() {
                return (0,
                a.Ts)(new Error("Player.getID() is deprecated. Please, use Player.getUniqueID().\nhttps://yandex.ru/dev/games/doc/dg/sdk/sdk-player.html#sdk-player__profile-data")),
                $e.sendOnceDeprecatedUsage("Player.getID"),
                this._personalInfo.id
            }
            getUniqueID() {
                return this._personalInfo.uniqueID
            }
            getName() {
                return this._personalInfo.publicName
            }
            getMode() {
                var e;
                return $() ? "" : null != (e = this._personalInfo.mode) ? e : ""
            }
            getPhoto(e="medium") {
                const t = Be[e];
                if (!t)
                    throw new Error(`Unknown size value ('${e}')`);
                return this._personalInfo.avatarIdHash ? `${Ze(Ke)}/avatar/${this._personalInfo.avatarIdHash}/${t}` : `https://avatars.mds.yandex.net/get-yapic/${Ge}/${t}`
            }
            hasPremium() {
                var e;
                return null != (e = this._personalInfo.hasPremium) && e
            }
        }
        var He = Object.defineProperty
          , ze = Object.getOwnPropertySymbols
          , qe = Object.prototype.hasOwnProperty
          , Je = Object.prototype.propertyIsEnumerable
          , Xe = (e,t,n)=>t in e ? He(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n
          , Qe = (e,t)=>{
            for (var n in t || (t = {}))
                qe.call(t, n) && Xe(e, n, t[n]);
            if (ze)
                for (var n of ze(t))
                    Je.call(t, n) && Xe(e, n, t[n]);
            return e
        }
        ;
        const et = (e,t)=>s.Z.postToParent({
            type: "telegram",
            data: {
                playdeck: Qe({
                    method: e
                }, t)
            }
        })
          , tt = "tgData"
          , nt = ()=>(et("getData", {
            key: tt
        }),
        new Promise(((e,t)=>{
            function n(t) {
                (e=>{
                    var t, n, r;
                    return "getData" === (null == (r = null == (n = null == (t = e.data) ? void 0 : t.data) ? void 0 : n.playdeck) ? void 0 : r.method)
                }
                )(t) && (e(t.data.data.playdeck.value),
                s.Z.offExternalMessage("telegram", n))
            }
            s.Z.onExternalMessage("telegram", n),
            setTimeout((()=>{
                s.Z.offExternalMessage("telegram", n),
                t()
            }
            ), 1e3)
        }
        )));
        function rt(e, t) {
            let n, r;
            return function(...o) {
                const a = o
                  , s = this;
                return n || (n = !0,
                setTimeout((()=>n = !1), t),
                r = e.apply(s, a)),
                r
            }
        }
        var ot = n(834);
        function at(e, t="", n={}) {
            Object.keys(n).forEach((e=>{
                void 0 === n[e] && delete n[e]
            }
            ));
            const r = (0,
            ot.Z)({
                url: `${e}${t}`,
                params: n
            });
            return (0,
            c.$g)(r)
        }
        function st(e) {
            const {api: t, authRequired: n, path: r, params: o, timeout: a} = e;
            return new Promise(((e,i)=>{
                const c = at(t, r, o);
                if (!c)
                    return void i(new Error("Can not create URL"));
                s.Z.postToParent({
                    type: "fetch",
                    data: {
                        authRequired: n,
                        options: {
                            credentials: "include",
                            referrerPolicy: "no-referrer-when-downgrade"
                        },
                        timeout: a,
                        url: c
                    }
                }).then((({data: {result: t}})=>{
                    e(t)
                }
                )).catch(i)
            }
            ))
        }
        function it(e) {
            const {api: t, authRequired: n, data: r, params: o, path: a, timeout: i} = e;
            return new Promise(((e,c)=>{
                const l = at(t, a, o);
                if (!l)
                    return void c(new Error("Can not create URL"));
                const d = {
                    body: JSON.stringify(r),
                    credentials: "include",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    referrerPolicy: "no-referrer-when-downgrade"
                };
                s.Z.postToParent({
                    type: "fetch",
                    data: {
                        authRequired: n,
                        options: d,
                        timeout: i,
                        url: l
                    }
                }).then((({data: {result: t}})=>{
                    e(t)
                }
                )).catch(c)
            }
            ))
        }
        const ct = {
            FULLSCREEN: "R-I-320442-1",
            REWARDED_VIDEO: "R-I-328933-4",
            STICKY_MOBILE_LANDSCAPE_UPPER: "R-I-328933-35",
            STICKY_MOBILE_UPPER: "R-I-328933-34",
            STICKY_DESKTOP_RIGHT: "R-I-328933-33"
        };
        function lt() {
            var e, t;
            if ("object" != typeof window)
                return 1;
            const n = (null == (e = null == window ? void 0 : window.appData) ? void 0 : e.networkThrottlingRatio) || 1;
            return (null == (t = null == window ? void 0 : window.appData) ? void 0 : t.isWorldWide) ? 1.5 * n : 1 * n
        }
        const dt = `${Me}/leaderboard`
          , ut = ()=>1e4 * lt()
          , pt = (e,t={},n)=>st({
            api: Ze(dt),
            timeout: ut(),
            path: e,
            params: t,
            authRequired: Boolean(null == n ? void 0 : n.authRequired)
        });
        var ht = Object.defineProperty
          , mt = Object.defineProperties
          , gt = Object.getOwnPropertyDescriptors
          , ft = Object.getOwnPropertySymbols
          , wt = Object.prototype.hasOwnProperty
          , yt = Object.prototype.propertyIsEnumerable
          , vt = (e,t,n)=>t in e ? ht(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n;
        const bt = rt(((e,t,n={})=>it({
            api: Ze(dt),
            timeout: ut(),
            authRequired: !0,
            path: e,
            data: t,
            params: n
        })), 1e3);
        class Et {
            constructor() {
                this._appId = (0,
                c.rh)()
            }
            getLeaderboardDescription(e) {
                return pt("/descr", {
                    "app-id": this._appId,
                    name: e
                })
            }
            getLeaderboardStat(e) {
                return pt("/stat", {
                    "app-id": this._appId,
                    name: e
                })
            }
            transformLeaderboardEntry(e) {
                const {avatarIdHash: t, lang: n, publicName: r, scopePermissions: o, uniqueID: a} = e.player
                  , s = `${Ke}/avatar/${t}`;
                return i = ((e,t)=>{
                    for (var n in t || (t = {}))
                        wt.call(t, n) && vt(e, n, t[n]);
                    if (ft)
                        for (var n of ft(t))
                            yt.call(t, n) && vt(e, n, t[n]);
                    return e
                }
                )({}, e),
                mt(i, gt({
                    player: {
                        getAvatarSrc: (e="medium")=>(Be[e] || (e = "medium"),
                        `${s}/${Be[e]}`),
                        getAvatarSrcSet: (e="medium")=>(Be[e] || (e = "medium"),
                        `${s}/${Be[e]} 1x, ${s}/${We[e]} 2x`),
                        lang: n,
                        publicName: r,
                        scopePermissions: o,
                        uniqueID: a
                    }
                }));
                var i
            }
            transformLeaderboardEntries(e) {
                return e.map(this.transformLeaderboardEntry)
            }
            getLeaderboardEntries(e, t) {
                const {includeUser: n=!1, quantityAround: r=5, quantityTop: o=5} = t || {};
                return pt((0,
                c.H8)("/entries"), {
                    "app-id": this._appId,
                    include_user: n,
                    name: e,
                    quantity_around: r,
                    quantity_top: o
                }, {
                    authRequired: n
                }).then((e=>{
                    const {entries: t, leaderboard: n, ranges: r, userRank: o} = e;
                    return {
                        entries: this.transformLeaderboardEntries(t),
                        leaderboard: n,
                        ranges: r,
                        userRank: o
                    }
                }
                ))
            }
            getLeaderboardPlayerEntry(e) {
                if ($())
                    throw new we.Z({
                        code: "LEADERBOARD_PLAYER_NOT_PRESENT",
                        httpStatus: 204,
                        message: "Player is not present in leaderboard"
                    });
                return pt((0,
                c.H8)("/player-entry"), {
                    "app-id": this._appId,
                    name: e
                }, {
                    authRequired: !0
                }).then((e=>{
                    if (!e)
                        throw new we.Z({
                            code: "LEADERBOARD_PLAYER_NOT_PRESENT",
                            httpStatus: 204,
                            message: "Player is not present in leaderboard"
                        });
                    return this.transformLeaderboardEntry(e)
                }
                ))
            }
            setLeaderboardScore(e, t, n) {
                if ($())
                    return s.Z.postToParent({
                        type: "gametok-manager",
                        action: "new-igroyal-score",
                        data: {
                            score: t
                        }
                    }),
                    new Promise((e=>e(!0)));
                et("setScore", {
                    value: t
                });
                const r = {
                    "app-id": this._appId,
                    name: e,
                    score: t
                };
                return "viber" === (0,
                j.VB)("utm_source") && (r.fromViber = !0),
                this.lastTimeLeaderboardWasSend && !this.canSetLeaderboardScoreByTime() ? Promise.reject("The request to setLeaderboardScore can be sent no more than once per second") : (n && (r.extraData = n),
                this.lastTimeLeaderboardWasSend = Date.now(),
                bt("/score", r))
            }
            canSetLeaderboardScoreByTime() {
                return Date.now() - this.lastTimeLeaderboardWasSend > 1e3
            }
        }
        const Pt = ()=>{
            const e = new Et;
            return Promise.resolve(e)
        }
        ;
        var _t = n(817);
        const Ot = "companyName"
          , St = "serviceName"
          , At = {
            [l.U_.PLAYHOP]: {
                [Ot]: {
                    ru: "Playhop",
                    en: "Playhop"
                },
                [St]: {
                    ru: "Playhop",
                    en: "Playhop"
                }
            },
            [l.U_.YANDEX]: {
                [Ot]: {
                    ru: "Яндекс",
                    en: "Yandex"
                },
                [St]: {
                    ru: "Игры",
                    en: "Games"
                }
            }
        };
        At[l.U_.YA] = At[l.U_.YANDEX];
        const xt = "ru";
        function kt(e, t=xt, n="") {
            if (e) {
                if ("string" == typeof e)
                    return e;
                if (t in e)
                    return e[t] || n;
                if (!(e=>!e || p.includes(e))(t) && "en"in e)
                    return e.en || n;
                if (xt in e)
                    return e[xt] || n
            }
            return n
        }
        const Tt = "//yastatic.net/s3/games-static/static-data/images/payments/sdk";
        let It = function() {
            It = ()=>{}
            ,
            $e.params({
                borrowParams: {
                    payments: {
                        appId: (0,
                        c.rh)(),
                        productCurrencyCodeGet: !0
                    }
                }
            })
        };
        class Dt {
            constructor(e) {
                this._productData = e
            }
            get id() {
                return this._productData.id
            }
            get title() {
                return kt(this._productData.title)
            }
            get description() {
                return kt(this._productData.description)
            }
            get imageURI() {
                const {image: e} = this._productData;
                return e && "object" == typeof e && "url_prefix"in e ? /\.(png|jpg|svg)$/.test(String(e.url_prefix)) ? e.url_prefix : `${e.url_prefix}/default256x256` : "https://yastatic.net/s3/games-static/static-data/images/payments/default-product-image.png"
            }
            get price() {
                const {price: e} = this._productData;
                return `${e} ${this.priceCurrencyCode}`
            }
            get priceValue() {
                return String(this._productData.price)
            }
            get priceCurrencyCode() {
                var e;
                return It(),
                null == (e = window.YandexGamesSDKEnvironment) ? void 0 : e.moneyCodeSymbol
            }
            getPriceCurrencyImage(e="small") {
                if ("svg" === e)
                    return `${Tt}/currency-icon-m.svg`;
                let t = "s";
                switch (e) {
                case "medium":
                case "small":
                    t = e.charAt(0);
                    break;
                default:
                    console.warn(`Unknown size value ('${e}')`)
                }
                const n = window.devicePixelRatio >= 2;
                return `${Tt}/currency-icon-${t}${n ? "@2x" : ""}.png`
            }
            toJSON() {
                return {
                    id: this.id,
                    title: this.title,
                    description: this.description,
                    imageURI: this.imageURI,
                    price: this.price,
                    priceValue: this.priceValue,
                    priceCurrencyCode: this.priceCurrencyCode
                }
            }
        }
        class Rt {
            constructor(e) {
                "purchaseTime"in e || (e.purchaseTime = 0),
                this.purchaseData = e
            }
            get productID() {
                return this.purchaseData.productID
            }
            get purchaseTime() {
                return this.purchaseData.purchaseTime
            }
            get purchaseToken() {
                return this.purchaseData.purchaseToken
            }
            get developerPayload() {
                return this.purchaseData.developerPayload
            }
            toJSON() {
                return {
                    productID: this.productID,
                    purchaseTime: this.purchaseTime,
                    purchaseToken: this.purchaseToken,
                    developerPayload: this.developerPayload
                }
            }
        }
        function Ct(e) {
            return function(e) {
                for (var t, n = "", r = e.length, o = 0; o < r; o++)
                    t = e[o],
                    n += String.fromCharCode(t > 251 && t < 254 && o + 5 < r ? 1073741824 * (t - 252) + (e[++o] - 128 << 24) + (e[++o] - 128 << 18) + (e[++o] - 128 << 12) + (e[++o] - 128 << 6) + e[++o] - 128 : t > 247 && t < 252 && o + 4 < r ? (t - 248 << 24) + (e[++o] - 128 << 18) + (e[++o] - 128 << 12) + (e[++o] - 128 << 6) + e[++o] - 128 : t > 239 && t < 248 && o + 3 < r ? (t - 240 << 18) + (e[++o] - 128 << 12) + (e[++o] - 128 << 6) + e[++o] - 128 : t > 223 && t < 240 && o + 2 < r ? (t - 224 << 12) + (e[++o] - 128 << 6) + e[++o] - 128 : t > 191 && t < 224 && o + 1 < r ? (t - 192 << 6) + e[++o] - 128 : t);
                return n
            }(function(e, t) {
                for (var n, r, o, a = e.replace(/[^A-Za-z0-9\+\/]/g, ""), s = a.length, i = t ? Math.ceil((3 * s + 1 >>> 2) / t) * t : 3 * s + 1 >>> 2, c = new Uint8Array(i), l = 0, d = 0, u = 0; u < s; u++)
                    if (r = 3 & u,
                    l |= ((o = a.charCodeAt(u)) > 64 && o < 91 ? o - 65 : o > 96 && o < 123 ? o - 71 : o > 47 && o < 58 ? o + 4 : 43 === o ? 62 : 47 === o ? 63 : 0) << 18 - 6 * r,
                    3 === r || s - u == 1) {
                        for (n = 0; n < 3 && d < i; n++,
                        d++)
                            c[d] = l >>> (16 >>> n & 24) & 255;
                        l = 0
                    }
                return c
            }(e))
        }
        function Lt(e, t) {
            t && Object.defineProperty(e, "signature", {
                enumerable: !1,
                configurable: !1,
                get: ()=>t
            })
        }
        const Nt = P("Payment", f.Dev);
        class Mt {
            constructor(e={}) {
                this._config = e,
                this.___test1212()
            }
            getCatalog() {
                return new Promise(((e,t)=>{
                    s.Z.postToParent({
                        type: "payments",
                        action: "get-catalog",
                        data: {
                            lang: this._config.lang
                        }
                    }).then((({data: t})=>{
                        Nt("get-catalog result", t),
                        e(t.products.map((e=>new Dt(e))))
                    }
                    )).catch((e=>{
                        t(e)
                    }
                    ))
                }
                ))
            }
            purchase(e) {
                "object" != typeof e && (e = {
                    id: e,
                    developerPayload: ""
                });
                const {developerPayload: t} = e;
                if (t) {
                    if ("string" != typeof t)
                        return Promise.reject(new Error("developerPayload must be a string"))
                } else
                    e.developerPayload = "";
                return new Promise(((t,n)=>{
                    s.Z.postToParent({
                        type: "payments",
                        action: "purchase-start",
                        data: {
                            paymentsConfig: this._config,
                            purchaseConfig: e
                        }
                    }).then((({data: {data: e, signature: n}})=>{
                        Nt("purchase-start then");
                        const r = new Rt({
                            productID: e.product.id,
                            purchaseToken: e.token,
                            developerPayload: e.developerPayload
                        });
                        Lt(r, n),
                        t(r)
                    }
                    )).catch((e=>{
                        Nt("purchase-start catch"),
                        n(e)
                    }
                    ))
                }
                ))
            }
            getPurchases() {
                return new Promise(((e,t)=>{
                    s.Z.postToParent({
                        type: "payments",
                        action: "get-purchases",
                        data: {
                            paymentsConfig: this._config
                        }
                    }).then((({data: {data: t, signature: n}})=>{
                        Nt("getPurchases callback", t);
                        const r = t.map((e=>new Rt({
                            productID: e.product.id,
                            purchaseToken: e.token,
                            developerPayload: e.developerPayload
                        })));
                        Lt(r, n),
                        e(r)
                    }
                    )).catch((e=>{
                        t(e)
                    }
                    ))
                }
                ))
            }
            consumePurchase(e) {
                return new Promise(((t,n)=>{
                    s.Z.postToParent({
                        type: "payments",
                        action: "purchase-consume",
                        data: {
                            token: e
                        }
                    }).then((({data: e})=>{
                        if (console.info("consumePurchase data"),
                        console.info(e),
                        !e || !e.token)
                            throw new _t.Z({
                                code: "CANNOT_CONSUME_PURCHASE",
                                message: "Can not consume purchase."
                            });
                        t(!0)
                    }
                    )).catch((e=>{
                        n(e)
                    }
                    ))
                }
                ))
            }
            ___test1212() {
                var e, t, n;
                if ("96458" !== (null == (e = window.YandexGamesSDKEnvironment) ? void 0 : e.app.id))
                    return;
                if (!0 !== (null == (n = null == (t = window.YandexGamesSDKEnvironment) ? void 0 : t.request.experiments) ? void 0 : n.test1212Payments))
                    return;
                const r = "position: fixed; left: 15px; padding: 0.3em; background: #fff; border: 1px solid #000; border-radius: 5px;";
                let o = document.createElement("div");
                o.setAttribute("id", "payElement1212-noads"),
                o.setAttribute("style", `${r} top: 5px;`),
                o.textContent = 'purchase("noads")',
                o.onclick = ()=>this.___test1212Purchase("noads"),
                document.body.appendChild(o),
                o = document.createElement("div"),
                o.setAttribute("id", "payElement1212-3x3antiblock"),
                o.setAttribute("style", `${r} top: 40px;`),
                o.textContent = 'purchase("3x3antiblock")',
                o.onclick = ()=>this.___test1212Purchase("3x3antiblock"),
                document.body.appendChild(o)
            }
            ___test1212Purchase(e) {
                function t(t) {
                    const n = document.getElementById(`payElement1212-${e}`);
                    n && (n.style.backgroundColor = t ? "#0f0" : "#f00")
                }
                this.purchase({
                    id: e,
                    developerPayload: ""
                }).then((()=>t(!0))).catch((e=>{
                    t(!1),
                    (0,
                    a.fF)(e)
                }
                ))
            }
        }
        const jt = function(e={}) {
            const t = new Mt(e);
            return new Promise(((e,n)=>{
                t.getCatalog().then((()=>e(t))).catch(n)
            }
            ))
        }
          , $t = {
            APP_VERSION: "",
            app: {
                id: ""
            },
            browser: {
                lang: "en"
            },
            clid: void 0,
            i18n: {
                lang: "en",
                tld: "en"
            },
            isStickyBannerEnabled: !1,
            isWorldWide: !1,
            isYandexApp: !1,
            isTelegram: !1,
            moneyCodeSymbol: l.NA.HOP,
            params: {},
            request: {},
            serviceName: l.kJ.YANDEX
        };
        let Yt = ()=>(window.YandexGamesSDKEnvironment || (0,
        a.fF)(new Error("SDK environment: `window.YandexGamesSDKEnvironment` is undefined")),
        Yt = ()=>window.YandexGamesSDKEnvironment || $t,
        Yt());
        const Gt = {
            get app() {
                return Yt().app
            },
            get browser() {
                return Yt().browser
            },
            get data() {
                return Yt().data || {}
            },
            get i18n() {
                return Yt().i18n
            },
            get payload() {
                return Yt().params.payload
            },
            get isTelegram() {
                return Yt().isTelegram
            }
        }
          , Ut = `${Me}/player`
          , Ft = ()=>5e3 * lt()
          , Zt = (e,t,n={})=>it({
            api: Ze(Ut),
            timeout: Ft(),
            path: e,
            data: t,
            params: n
        })
          , Bt = 204800;
        function Wt(e) {
            try {
                return JSON.stringify(e)
            } catch (e) {
                return (0,
                a.fF)(e),
                `${Date.now()}.${Math.random()}`
            }
        }
        class Kt {
            constructor(e) {
                this._playerId = e,
                this._dataHash = null,
                this._timestamp = 0
            }
            isSamePlayer(e) {
                return e === this._playerId
            }
            set dataHash(e) {
                this._dataHash = e ? Wt(e) : null
            }
            validate(e) {
                const t = Wt(e);
                return function(e) {
                    try {
                        return (new TextEncoder).encode(e).length
                    } catch (t) {
                        return function(e) {
                            let t = e.length;
                            for (let n = e.length - 1; n >= 0; n--) {
                                let r = e.charCodeAt(n);
                                r > 127 && r <= 2047 ? t++ : r > 2047 && r <= 65535 && (t += 2),
                                r >= 56320 && r <= 57343 && n--
                            }
                            return t
                        }(e)
                    }
                }(t) > Bt ? {
                    error: new Error("The data is too large (bigger then 204800 bytes)."),
                    reject: !0
                } : this._dataHash === t ? {
                    error: new Error("The data does not differ from the previous ones."),
                    reject: !1
                } : {}
            }
            getWaitTime() {
                let e = 200;
                const t = Math.abs(Date.now() - this._timestamp);
                return t < 3e3 && (e = Math.max(200, 3e3 - t)),
                e
            }
            set timestamp(e) {
                this._timestamp = e
            }
        }
        const Vt = P("Player", f.Dev);
        function Ht(e) {
            const {data: t, signature: n} = function(e) {
                if ("signature"in e) {
                    const {signature: t} = e;
                    if ("string" == typeof t) {
                        const {data: e} = JSON.parse(Ct(t.split(".")[1]));
                        return {
                            data: e,
                            signature: t
                        }
                    }
                    (0,
                    a.fF)(new Error("response.signature is not a string"))
                }
                return {
                    data: e
                }
            }(e);
            return Lt(t, n),
            t
        }
        function zt(e, t) {
            if (void 0 === t)
                return e;
            if (!Array.isArray(t))
                throw new Error("`keys` must be an Array");
            if (-1 !== t.indexOf("signature"))
                throw new Error('`keys` must not contains "signature" key');
            const n = {};
            return t.forEach((t=>{
                t in e && (n[t] = e[t])
            }
            )),
            n
        }
        function qt(e) {
            return !(!e || "object" != typeof e) && Object.values(e).every((e=>"number" == typeof e && !isNaN(e)))
        }
        let Jt, Xt, Qt, en;
        s.Z.onExternalMessage("auth", (e=>{
            if ("changed" === e.data.action && Qt) {
                Vt("Call onLogoutCallback()");
                try {
                    Qt()
                } catch (e) {
                    console.error()
                }
                Qt = void 0
            }
        }
        ));
        class tn extends Ve {
            constructor(e, t) {
                super(e),
                this.dataPromise = null,
                this.getApiPromise = ()=>new Promise(((e,t)=>{
                    this._fetchData("/data").then((t=>{
                        this.data = t,
                        e(t)
                    }
                    )).catch((e=>{
                        this.dataPromise = null,
                        t(e)
                    }
                    ))
                }
                )),
                this.getDataPromise = ()=>void 0 !== this.data ? Promise.resolve(this.data) : Gt.isTelegram ? nt().catch((()=>this._fetchData("/data"))) : this.getApiPromise(),
                this.config = t,
                Xt && Xt.isSamePlayer(this.getUniqueID()) || (Xt = new Kt(this.getUniqueID()))
            }
            onLogout(e) {
                Vt("Set onLogout callback"),
                Qt = e
            }
            getData(e) {
                return $() ? Promise.resolve({}) : (this.dataPromise = this.getDataPromise(),
                this.dataPromise.then((t=>zt(t, e))))
            }
            setData(e, t=!1) {
                if ($())
                    return new Promise((e=>e(!0)));
                if (Gt.isTelegram && et("setData", {
                    key: tt,
                    value: e
                }),
                !function(e) {
                    return "object" == typeof e && null !== e
                }(e))
                    return Promise.reject(new Error("Data is not valid"));
                this.data = e;
                const n = function(e, t=!1) {
                    const n = Xt.validate(e);
                    return n.error ? n.reject ? Promise.reject(n.error) : ((0,
                    a.Ts)(n.error),
                    Promise.resolve(!0)) : new Promise(((n,r)=>{
                        Jt && window.clearTimeout(Jt);
                        let o = t ? 200 : Math.max(200, Xt.getWaitTime());
                        Xt.timestamp = Date.now(),
                        Jt = window.setTimeout((()=>{
                            Zt("/data", e).then((()=>{
                                Xt.dataHash = e,
                                n(!0)
                            }
                            )).catch((e=>{
                                Xt.timestamp = 0,
                                Xt.dataHash = null,
                                r(e)
                            }
                            ))
                        }
                        ), o)
                    }
                    ))
                }(e, t);
                return t ? n : Promise.resolve(!0)
            }
            getStats(e) {
                return $() ? new Promise((e=>e({}))) : (void 0 === this.statsPromise && (this.statsPromise = new Promise(((e,t)=>{
                    this._fetchData("/stats").then(e).catch(t).finally((()=>this.statsPromise = void 0))
                }
                ))),
                this.statsPromise.then((t=>zt(t, e))))
            }
            setStats(e) {
                return $() ? new Promise((e=>e(!0))) : qt(e) ? Zt("/stats", e) : Promise.reject(new Error("Stats is not valid"))
            }
            incrementStats(e) {
                return $() ? new Promise((e=>e(!0))) : qt(e) ? this._postData("/stats/increment", e) : Promise.reject(new Error("Increments is not valid"))
            }
            _fetchData(e) {
                return ((e,t={})=>st({
                    api: Ze(Ut),
                    timeout: Ft(),
                    path: e,
                    params: t
                }))((0,
                c.H8)(`${e}${this.config.signed ? "-signed" : ""}`)).then(Ht)
            }
            _postData(e, t) {
                return Zt(`${e}${this.config.signed ? "-signed" : ""}`, t).then(Ht)
            }
        }
        try {
            en = window.localStorage
        } catch (e) {}
        const nn = en || function() {
            let e = {};
            return {
                clear() {
                    e = {}
                },
                getItem: t=>e[t],
                key: t=>Object.keys(e)[t],
                removeItem(t) {
                    delete e[t]
                },
                setItem(t, n) {
                    e[t] = String(n)
                },
                get length() {
                    return Object.keys(e).length
                }
            }
        }()
          , rn = /iPad|iPhone|iPod/.test(navigator.platform)
          , on = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
          , an = rn || on
          , sn = /app-[^.]+\.games\.s3\.yandex\.net$/.test(window.location.hostname)
          , cn = !sn && an
          , ln = M((()=>{
            (0,
            a.fF)(new Error("localStorage is broken on iOS/MacOS - https://developer.apple.com/forums/thread/109909\nPlease use YaGames.init().then(ysdk => ysdk.getStorage()).then(storage => storage.setItem('key', 'value'))"))
        }
        ))
          , dn = class {
            static setup() {
                cn && Object.defineProperty(window, "localStorage", {
                    get: function() {
                        return ln(),
                        nn
                    }
                }),
                an && sn && dn.setProxy() && dn.backup()
            }
            static load() {
                if (dn.onloadPromise_)
                    return dn.onloadPromise_;
                const e = dn.getCustomLocalStorage();
                return e ? (dn.onloadPromise_ = new Promise((t=>{
                    window.addEventListener("message", (({data: {type: n, action: r, data: o}})=>{
                        if ("local-storage" === n && "get-all" === r) {
                            for (let t in o)
                                e.setItem(t, String(o[t]));
                            t(e)
                        }
                    }
                    )),
                    window.parent.postMessage({
                        type: "local-storage",
                        action: "get-all",
                        source: "YandexGamesSDK"
                    }, "*")
                }
                )),
                dn.onloadPromise_) : Promise.resolve(nn)
            }
            static getCustomLocalStorage() {
                if ("function" != typeof Proxy)
                    return null;
                return new Proxy({
                    clear() {
                        nn.clear.call(nn),
                        s.Z.postToParent({
                            type: "local-storage",
                            action: "clear"
                        })
                    },
                    getItem: e=>nn.getItem.call(nn, e),
                    key: e=>nn.key.call(nn, e),
                    get length() {
                        return nn.length
                    },
                    removeItem(e) {
                        nn.removeItem.call(nn, e),
                        s.Z.postToParent({
                            type: "local-storage",
                            action: "del",
                            data: {
                                key: e
                            }
                        })
                    },
                    setItem(e, t) {
                        nn.setItem.call(nn, e, String(t)),
                        s.Z.postToParent({
                            type: "local-storage",
                            action: "set",
                            data: {
                                key: e,
                                value: t
                            }
                        })
                    }
                },{
                    get: function(e, t) {
                        return t in e ? e[t] : e.getItem(String(t))
                    },
                    set: function(e, t, n) {
                        return e.setItem(String(t), n),
                        !0
                    }
                })
            }
            static setProxy() {
                const e = dn.getCustomLocalStorage();
                return !!e && (Object.defineProperty(window, "localStorage", {
                    get: function() {
                        return e
                    }
                }),
                !0)
            }
            static backup() {
                const e = Object.create(null);
                for (let t = 0; t < nn.length; t++) {
                    const n = nn.key(t);
                    n && (e[n] = nn.getItem(n))
                }
                s.Z.postToParent({
                    type: "local-storage",
                    action: "backup",
                    data: e
                })
            }
        }
        ;
        let un = dn;
        function pn() {
            return !an && en ? Promise.resolve(en) : un.load()
        }
        function hn(e) {
            const t = typeof e;
            return null != e && ("object" === t || "function" === t)
        }
        un.onloadPromise_ = null;
        var mn = Object.defineProperty
          , gn = Object.getOwnPropertySymbols
          , fn = Object.prototype.hasOwnProperty
          , wn = Object.prototype.propertyIsEnumerable
          , yn = (e,t,n)=>t in e ? mn(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n
          , vn = (e,t)=>{
            for (var n in t || (t = {}))
                fn.call(t, n) && yn(e, n, t[n]);
            if (gn)
                for (var n of gn(t))
                    wn.call(t, n) && yn(e, n, t[n]);
            return e
        }
        ;
        const bn = P("captureAlert", f.Dev)
          , En = 250;
        function Pn(e) {
            var t, n;
            if ("DIV" === e.tagName && e.getAttribute("style") && !e.querySelector("div") && !e.classList.length && !e.id) {
                const e = "OK" === (null == (t = document.querySelector("button")) ? void 0 : t.textContent) && (null == (n = document.querySelector("span")) ? void 0 : n.textContent);
                e && (bn(`popup message = ${e}`),
                s.Z.postToParent({
                    type: "game-call-alert",
                    data: {
                        message: e.substring(0, En),
                        popup: !0
                    }
                }))
            }
        }
        function _n() {
            const e = "createUnityInstance"in window || "UnityLoader"in window;
            if (bn("captureUnityAlert isUnity", e),
            !e)
                return;
            if (document.querySelectorAll("div[style]:not([id]):not([class])").forEach(Pn),
            "undefined" != typeof MutationObserver) {
                const e = new MutationObserver((e=>{
                    e.forEach((e=>{
                        "childList" === e.type && setTimeout((()=>{
                            Array.from(e.addedNodes).forEach(Pn)
                        }
                        ), 0)
                    }
                    ))
                }
                ));
                e.observe(document.body, {
                    childList: !0,
                    subtree: !0
                }),
                window.addEventListener("unload", (()=>{
                    e.disconnect()
                }
                ))
            }
        }
        const On = new class {
            writeText(e) {
                try {
                    e = String(e)
                } catch (e) {
                    return Promise.reject(new Error("Error while stringified provided value"))
                }
                return new Promise(((t,n)=>{
                    s.Z.postToParent({
                        type: "clipboard",
                        action: "write-text",
                        data: {
                            text: e
                        }
                    }).then((()=>t(void 0))).catch(n)
                }
                ))
            }
        }
        ;
        class Sn {
            constructor(e="desktop") {
                this._type = e
            }
            get type() {
                return this._type
            }
            isMobile() {
                return "mobile" === this.type
            }
            isTablet() {
                return "tablet" === this.type
            }
            isDesktop() {
                return "desktop" === this.type
            }
            isTV() {
                return "tv" === this.type
            }
        }
        var An = Object.defineProperty
          , xn = Object.getOwnPropertySymbols
          , kn = Object.prototype.hasOwnProperty
          , Tn = Object.prototype.propertyIsEnumerable
          , In = (e,t,n)=>t in e ? An(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n
          , Dn = (e,t)=>{
            for (var n in t || (t = {}))
                kn.call(t, n) && In(e, n, t[n]);
            if (xn)
                for (var n of xn(t))
                    Tn.call(t, n) && In(e, n, t[n]);
            return e
        }
        ;
        const Rn = (()=>{
            var e;
            const t = null == (e = window.YandexGamesSDK) ? void 0 : e.game.info;
            if (!t)
                return;
            const n = parseInt(t.appId, 10);
            return n ? {
                appId: n,
                developerId: t.publisher.id
            } : void 0
        }
        )();
        var Cn = n(512);
        function Ln(e, t) {
            t && (e.type = t),
            s.Z.postToParent({
                data: e,
                type: "error"
            }).catch((e=>{
                console.warn(e)
            }
            ))
        }
        function Nn(e) {
            return {
                data: {
                    additional: {
                        sdkVersion: 2
                    }
                },
                error: e,
                source: "game",
                sourceMethod: (0,
                a.Zi)(e.stack)
            }
        }
        const Mn = new class {
            constructor(e) {
                this.source = e,
                window.addEventListener("error", this),
                "Promise"in window && window.addEventListener("unhandledrejection", this)
            }
            addLogger(e) {
                this.logger = e
            }
            handleEvent(e) {
                this._handleEvent(e)
            }
            _handleEvent(e, t="error") {
                try {
                    this._unsafeHandleEvent(e, t)
                } catch (e) {
                    console.warn("Couldn't handle event in ErrorCounter!", e)
                }
            }
            _unsafeHandleEvent(e, t) {
                return "unhandledrejection" === e.type ? this._unsafeHandlePromiseRejectionEvent(e) : this._unsafeHandleErrorEvent(e, t)
            }
            _unsafeHandlePromiseRejectionEvent(e) {
                var t;
                const {reason: n} = e;
                if (!n)
                    return;
                let r;
                const o = {};
                n.stack && n.message ? r = n.message : (r = String(n),
                "[object Event]" === r ? r = "event.type: " + n.type : "[object Object]" === r && (o.unhandledObject = n)),
                (null == (t = n.target) ? void 0 : t.src) && (o.src = n.target.src),
                this._postError({
                    additional: o,
                    message: "Unhandled rejection: " + r,
                    name: "UnhandledPromiseError",
                    stack: n.stack || ""
                }, "unhandled")
            }
            _unsafeHandleErrorEvent(e, t) {
                var n, r, o, a, s;
                const {error: i} = e
                  , c = {
                    columnNumber: null != (r = null != (n = e.colno) ? n : null == i ? void 0 : i.columnNumber) ? r : -1,
                    fileName: e.filename || (null == i ? void 0 : i.fileName) || "",
                    lineNumber: null != (a = null != (o = e.lineno) ? o : null == i ? void 0 : i.lineNumber) ? a : -1,
                    message: e.message || (null == i ? void 0 : i.message) || "",
                    name: (null == i ? void 0 : i.name) || "Error",
                    stack: null != (s = null == i ? void 0 : i.stack) ? s : ""
                };
                (Rn || (null == i ? void 0 : i.additional)) && (c.additional = Dn(Dn({}, null == i ? void 0 : i.additional), Rn)),
                this._postError(c, t)
            }
            _postError(e, t) {
                var n;
                let r = (0,
                a.Zi)(e.stack);
                "ErrorListener.handleEvent" === r && (r = "unknown"),
                null == (n = this.logger) || n.call(this, {
                    data: {
                        additional: e.additional || {}
                    },
                    error: e,
                    source: this.source,
                    sourceMethod: r
                }, t)
            }
        }
        ("game");
        Mn.addLogger(Ln),
        function() {
            try {
                const e = console.error;
                console.error = (...t)=>{
                    let n = t.filter((e=>e instanceof Error))[0];
                    n || (n = (0,
                    Cn.Z)(t));
                    try {
                        "string" == typeof t[1] && t[1] === a.X4 ? t.pop() : Ln(Nn(n), "console.error")
                    } catch (e) {}
                    e.apply(console, t)
                }
            } catch (e) {
                try {
                    Ln(Nn(e), "error")
                } catch (e) {}
            }
        }();
        var jn = (e=>(e.AudioAPI = "AudioAPI",
        e.LoadingAPI = "LoadingAPI",
        e))(jn || {})
          , $n = (e=>(e.GameInit = "loading_api_game_init",
        e.GameReady = "loading_api_game_ready",
        e.GameReadyForce = "loading_api_game_ready_force",
        e.IframeAdded = "loading_api_iframe_added",
        e.IframeError = "loading_api_iframe_resources_error",
        e.IframeLoaded = "loading_api_iframe_resources_loaded",
        e.ScriptInit = "loading_api_script_init",
        e.TTIReady = "loading_api_tti_ready",
        e))($n || {});
        const Yn = ["LoadingAPI"];
        const Gn = {
            [jn.LoadingAPI]: class {
                constructor() {
                    this.isReady = !1,
                    this.startTimestamp = Date.now(),
                    this.startReadyFallbackTimeout()
                }
                ready() {
                    if (this.isReady)
                        return void console.warn("Don't call %cfeatures.LoadingAPI.ready() %cmore than one time.", "color: green", "color: unset");
                    this.isReady = !0;
                    const e = Date.now() - this.startTimestamp;
                    this.logGameInitTime(e, $n.GameReady),
                    clearTimeout(this.readyFallbackTimerId)
                }
                logGameInitTime(e, t) {
                    s.Z.postToParent({
                        type: "game-measuring",
                        action: t,
                        data: {
                            timeFromInit: e
                        }
                    })
                }
                startReadyFallbackTimeout() {
                    this.readyFallbackTimerId = setTimeout((()=>{
                        this.isReady = !0,
                        this.logGameInitTime(3e4, $n.GameReadyForce)
                    }
                    ), 3e4)
                }
            }
        };
        class Un {
            constructor(e={}) {
                for (let t in jn)
                    jn[t]in e && e[jn[t]] && (this[t] = new Gn[t]);
                for (let t of Yn)
                    !this[t] && (t in e && e[t] || !(t in e)) && (this[t] = new Gn[t]);
                s.Z.postToParent({
                    type: "game-measuring",
                    action: $n.GameInit
                })
            }
        }
        jn.LoadingAPI;
        const Fn = new class {
            canReview() {
                return new Promise((e=>{
                    s.Z.postToParent({
                        type: "feedback",
                        action: "can-review"
                    }).then((({data: t})=>{
                        e(t)
                    }
                    )).catch((t=>{
                        (0,
                        a.fF)(t),
                        e({
                            reason: "UNKNOWN",
                            value: !1
                        })
                    }
                    ))
                }
                ))
            }
            requestReview() {
                return new Promise((e=>{
                    s.Z.postToParent({
                        type: "feedback",
                        action: "request-review"
                    }).then((({data: t})=>{
                        const {feedbackSent: n, reason: r} = t;
                        r ? ((0,
                        a.fF)(r),
                        e({
                            feedbackSent: null != n && n
                        })) : e({
                            feedbackSent: null == n || n
                        })
                    }
                    )).catch((t=>{
                        (0,
                        a.fF)(t),
                        e({
                            feedbackSent: !1
                        })
                    }
                    ))
                }
                ))
            }
        }
        ;
        function Zn() {
            !function() {
                var e;
                null == (e = window.top) || e.postMessage({
                    type: "foolproof-sdk-init",
                    url: location.href,
                    draftDetectedInIframe: (0,
                    c.mv)()
                }, "*")
            }()
        }
        function Bn(e) {
            try {
                return "WebGLRenderingContext"in window && Boolean(e.getContext("webgl") || e.getContext("experimental-webgl")instanceof WebGLRenderingContext)
            } catch (e) {
                (0,
                a.fF)(e, {
                    sourceMethod: "isWebGLSupported",
                    level: "warn"
                })
            }
            return !1
        }
        function Wn(e) {
            try {
                return "WebGL2RenderingContext"in window && Boolean(e.getContext("webgl2") || e.getContext("experimental-webgl2")instanceof WebGL2RenderingContext)
            } catch (e) {
                (0,
                a.fF)(e, {
                    sourceMethod: "isWebGL2Supported",
                    level: "warn"
                })
            }
            return !1
        }
        function Kn() {
            const e = [];
            return "createUnityInstance"in window && e.push("unity"),
            e
        }
        function Vn() {
            const e = []
              , t = {
                webassembly: "WebAssembly"in window,
                webgl: Bn(document.createElement("canvas")),
                webgl2: Wn(document.createElement("canvas"))
            };
            return Object.keys(t).filter((e=>t[e])).forEach((t=>{
                e.push(t)
            }
            )),
            e
        }
        const Hn = {
            allow() {
                s.Z.postToParent({
                    type: "notifications",
                    action: "allow"
                })
            }
        };
        function zn(...e) {
            const t = e=>e && "object" == typeof e;
            return e.reduce(((e,n)=>(Object.keys(n).forEach((r=>{
                const o = e[r]
                  , a = n[r];
                Array.isArray(o) && Array.isArray(a) ? e[r] = o.concat(...a) : t(o) && t(a) ? e[r] = zn(o, a) : e[r] = a
            }
            )),
            e)), {})
        }
        function qn(e) {
            if (!e || "object" != typeof e)
                return {};
            !function(e) {
                "partnerId"in e && (delete e.partnerId,
                console.warn("`partnerId` is deprecated in the SDKv2"))
            }(e);
            return ["adv", "screen"].reduce(((t,n)=>(n in e && (t = e[n]),
            t)), {})
        }
        function Jn(e, t={}) {
            return qn(t),
            function(e={}) {
                return function(e) {
                    Ae || (e.advBlocks.fullscreen = ct.FULLSCREEN,
                    e.advBlocks.fullscreen_landscape = ct.FULLSCREEN)
                }(e),
                function(e) {
                    "adv"in e && $e.sendOnceDeprecatedUsage("SDK init options with adv");
                    e.adv = e.adv || {},
                    function(e) {
                        if ("onAdvClose"in e && "function" != typeof e.onAdvClose)
                            throw new Error('"onAdvClose" must be a function')
                    }(e.adv)
                }(e),
                function(e) {
                    if ("screen"in e && "object" != typeof e.screen)
                        throw new Error("Wrong screen options type");
                    let t = e.screen || {};
                    t = function(e, t) {
                        "fullscreen"in e ? function(e) {
                            if ("boolean" != typeof e)
                                throw new Error("Wrong fullscreen value")
                        }(e.fullscreen) : e.fullscreen = "desktop" !== t;
                        return e
                    }(t, e.deviceType),
                    t = function(e) {
                        if ("orientation"in e) {
                            const {orientation: t} = e;
                            "string" == typeof t && (e.orientation = {
                                value: t,
                                lock: !0
                            }),
                            function(e) {
                                if ("object" != typeof e)
                                    throw new Error("Wrong orientation value");
                                if (![null, "portrait", "landscape"].includes(e.value))
                                    throw new Error(`Wrong orientation value ("${e.value}")`);
                                if ("lock"in e) {
                                    if ("boolean" != typeof e.lock)
                                        throw new Error(`Wrong orientation lock value ("${e.lock}")`)
                                } else
                                    e.lock = !0
                            }(e.orientation)
                        } else
                            e.orientation = {
                                value: null,
                                lock: !0
                            };
                        return e
                    }(t),
                    e.screen = t
                }(e),
                e
            }(zn(e || {}, t))
        }
        function Xn() {
            return new Promise(((e,t)=>{
                s.Z.postToParent({
                    type: "options",
                    action: "get"
                }).then((({data: t})=>{
                    e(t)
                }
                )).catch((e=>{
                    t(e)
                }
                ))
            }
            ))
        }
        const Qn = (e={})=>jt(e)
          , er = {
            AVATAR: "avatar",
            NAME: "public_name"
        }
          , tr = "personal_info";
        Object.keys(er).map((e=>er[e]));
        var nr = (e=>(e.ALLOW = "allow",
        e.FORBID = "forbid",
        e.NOT_SET = "not_set",
        e))(nr || {});
        class rr {
            constructor(e={}, t) {
                this._scopePermissions = e,
                this._requestedScopes = this._validateRequestedScopes(t)
            }
            show() {
                return new Promise(((e,t)=>{
                    s.Z.postToParent({
                        type: "scopes",
                        action: "open-scopes-dialog"
                    }).then((({data: t})=>{
                        e(t.result),
                        s.Z.postToParent({
                            type: "scopes",
                            action: "focus"
                        })
                    }
                    )).catch(t)
                }
                ))
            }
            isNeedToAskUser() {
                return [er.AVATAR, er.NAME].some((e=>this._requestedScopes.includes(e) && this._scopePermissions[e] === nr.NOT_SET))
            }
            _validateRequestedScopes(e) {
                let t = [];
                t = Array.isArray(e) ? Array.from(e) : void 0 === e || !0 === e ? [tr] : [];
                const n = t.indexOf(tr);
                return -1 !== n && t.splice(n, 1, er.AVATAR, er.NAME),
                t
            }
        }
        const or = class {
            constructor() {
                this.promise = new Promise(((e,t)=>{
                    this.resolve = e,
                    this.reject = t
                }
                ))
            }
        }
        ;
        const ar = class {
            constructor() {
                this.promiseWrappers = Object.create(null)
            }
            getKey(e) {
                return JSON.stringify(e)
            }
            getFor(e) {
                return this.promiseWrappers[this.getKey(e)]
            }
            setFor(e, t) {
                t ? this.promiseWrappers[this.getKey(e)] = t : delete this.promiseWrappers[this.getKey(e)]
            }
            clear() {
                this.promiseWrappers = Object.create(null)
            }
        }
        ;
        var sr = (e,t,n)=>new Promise(((r,o)=>{
            var a = e=>{
                try {
                    i(n.next(e))
                } catch (e) {
                    o(e)
                }
            }
              , s = e=>{
                try {
                    i(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }
              , i = e=>e.done ? r(e.value) : Promise.resolve(e.value).then(a, s);
            i((n = n.apply(e, t)).next())
        }
        ));
        const ir = P("PlayerProxy", f.Dev)
          , cr = 3e5;
        const lr = new ar
          , dr = new or;
        let ur = !1;
        function pr(e={}, t=!0) {
            const n = lr.getFor(e);
            if (n && !1 !== t)
                return n.promise;
            const r = new or;
            return !1 !== t ? (lr.setFor(e, r),
            window.setTimeout((()=>{
                lr.setFor(e, void 0)
            }
            ), cr),
            ur || (ur = !0,
            s.Z.postToParent({
                type: "guard",
                action: "get-permission-promise"
            }).then((({data: e})=>{
                const {result: t} = e;
                dr.resolve(t)
            }
            )))) : dr.resolve(void 0),
            s.Z.postToParent({
                type: "player",
                action: "fetch",
                data: {
                    config: e
                }
            }).then((n=>sr(this, [n], (function*({data: n}) {
                const {data: o, signature: a} = n
                  , s = yield dr.promise;
                s && [nr.ALLOW, nr.FORBID].includes(s) && ("avatar"in o.scopePermissions && (o.scopePermissions.avatar = s),
                "public_name"in o.scopePermissions && (o.scopePermissions.public_name = s));
                const i = function(e, t, n) {
                    const r = new tn(t,e);
                    return Lt(r, n),
                    r
                }(e, o, a);
                if ("lite" === i.getMode() || $())
                    r.resolve(i);
                else {
                    const n = new rr(o.scopePermissions,e.scopes);
                    t && n.isNeedToAskUser() ? n.show().then((()=>pr(e, !1))).catch((()=>i)).then((e=>r.resolve(e))) : r.resolve(i)
                }
            }
            )))).catch((t=>{
                r.reject(t),
                lr.setFor(e, void 0)
            }
            )),
            r.promise
        }
        function hr(e={}) {
            return pr(e, !0)
        }
        function mr(e) {
            var t;
            e && (e.focus(),
            null == (t = e.contentWindow) || t.focus(),
            e.onload = function() {
                var t;
                null == (t = e.contentWindow) || t.focus()
            }
            )
        }
        s.Z.onExternalMessage("auth", (e=>{
            ["auth-dialog-cancel", "auth-dialog-success", "changed"].includes(e.data.action) && (ir("Clear getPlayer promises."),
            lr.clear())
        }
        ));
        class gr {
            constructor() {
                this.onMessage = e=>{
                    const {action: t} = e.data;
                    "fullscreenchange" === t ? (document.dispatchEvent(new Event("fullscreenchange")),
                    this._status = e.data.data.isFullscreen ? "on" : "off") : "iframe-focus" === t && this.iframeFocus()
                }
                ,
                this._status = "off",
                this.overrideBrowserFullscreenElement(),
                this.initMessaging(),
                this.updateStatus()
            }
            get STATUS_ON() {
                return "on"
            }
            get STATUS_OFF() {
                return "off"
            }
            get status() {
                return this._status
            }
            request() {
                return s.Z.postToParent({
                    type: "screen-manager",
                    action: "request-fullscreen"
                })
            }
            exit() {
                return s.Z.postToParent({
                    type: "screen-manager",
                    action: "exit-fullscreen"
                })
            }
            toggle() {
                return s.Z.postToParent({
                    type: "screen-manager",
                    action: "toggle-fullscreen"
                })
            }
            iframeFocus() {
                mr(document.querySelector("iframe"))
            }
            updateStatus() {
                s.Z.postToParent({
                    type: "screen-manager",
                    action: "get-state"
                }).then((e=>{
                    const {isFullscreen: t} = e.data;
                    this._status = t ? "on" : "off"
                }
                ))
            }
            overrideBrowserFullscreenElement() {
                try {
                    Object.getOwnPropertyDescriptor(document, "fullscreenElement") || Object.defineProperty(document, "fullscreenElement", {
                        enumerable: !1,
                        configurable: !0,
                        get: ()=>this.status === this.STATUS_ON ? document.documentElement : null
                    })
                } catch (e) {
                    (0,
                    a.fF)(e)
                }
            }
            initMessaging() {
                s.Z.onExternalMessage("screen-manager", this.onMessage)
            }
        }
        class fr {
            constructor() {
                this.fullscreen = new gr
            }
        }
        var wr = (e=>(e.EXIT = "EXIT",
        e.HISTORY_BACK = "HISTORY_BACK",
        e))(wr || {});
        const yr = {
            [wr.EXIT]: !0
        };
        function vr() {
            const e = {
                [wr.HISTORY_BACK]: []
            };
            function t(t) {
                const n = e[t];
                return n || console.warn(`Yandex SDK Event ${t} is not in supported`),
                n || []
            }
            function n(e) {
                s.Z.postToParent({
                    type: "sdk-internal-event",
                    action: "listeners-change",
                    data: {
                        event: e,
                        count: t(e).length
                    }
                })
            }
            return s.Z.onExternalMessage("sdk-event", (n=>{
                const r = n.data.action;
                r in e && t(r).forEach((e=>{
                    try {
                        e()
                    } catch (e) {
                        (0,
                        a.fF)(e)
                    }
                }
                ))
            }
            )),
            function(r, o) {
                return r in e ? (function(e, r) {
                    t(e).push(r),
                    n(e)
                }(r, o),
                ()=>{
                    !function(e, r) {
                        const o = t(e)
                          , a = o.indexOf(r);
                        -1 !== a && (o.splice(a, 1),
                        n(e))
                    }(r, o)
                }
                ) : (console.warn("Yandex SDK Event", r, `is not in supported. Available events: ${Object.keys(e).join}`),
                ()=>{}
                )
            }
        }
        const br = ["passport.ya", "passport.yandex", "an.yandex.ru", "avatars.mds.yandex.net", "/api/"];
        function Er(e) {
            const t = Cache.prototype[e];
            Cache.prototype[e] = function(e, n) {
                return "GET" !== e.method || 0 !== e.url.indexOf("https://") || (r = e.url,
                br.some((e=>-1 !== r.indexOf(e)))) ? Promise.resolve() : ("ignoreSearch"in (n = n || {}) || (n.ignoreSearch = !0),
                t.call(this, e, n));
                var r
            }
        }
        const Pr = class {
            static overrideCacheSearch() {
                ("function" != typeof Cache ? (console.warn("Can not find `Cache` function"),
                0) : "function" != typeof Cache.prototype.match ? (console.warn("Can not find `Cache.match` function"),
                0) : "function" == typeof Cache.prototype.matchAll || (console.warn("Can not find `Cache.matchAll` function"),
                0)) && (Er("match"),
                Er("matchAll"))
            }
        }
        ;
        const _r = new class {
            canShowPrompt() {
                return new Promise((e=>{
                    s.Z.postToParent({
                        type: "shortcut-manager",
                        action: "can-show-prompt"
                    }).then((({data: t})=>{
                        e(t)
                    }
                    )).catch((e=>{
                        (0,
                        a.fF)(e)
                    }
                    ))
                }
                ))
            }
            showPrompt() {
                return new Promise((e=>{
                    s.Z.postToParent({
                        type: "shortcut-manager",
                        action: "show-prompt"
                    }).then((({data: t})=>{
                        e(t)
                    }
                    )).catch((e=>{
                        (0,
                        a.fF)(e)
                    }
                    ))
                }
                ))
            }
        }
        ;
        function Or(e) {
            window.setTimeout((()=>{
                var t, n, r, o;
                const a = {
                    borrowParams: {
                        [`tmpPlayTime ${e}`]: {
                            appVersion: window.APP_VERSION
                        }
                    }
                }
                  , s = new Image
                  , i = (null == (n = null == (t = window.YandexGamesSDKEnvironment) ? void 0 : t.i18n) ? void 0 : n.tld) || "en"
                  , c = se(null == (o = null == (r = window.YandexGamesSDKEnvironment) ? void 0 : r.data) ? void 0 : o.secondDomain);
                s.src = ``
            }
            ), 1e3 * e)
        }
        const Sr = function() {
            Or(5),
            Or(60),
            Or(900)
        };
        var Ar = n(519);
        function xr() {
            return new Promise((e=>{
                if ("loading" === document.readyState) {
                    const t = n=>{
                        const {target: r} = n;
                        r && "loading" !== r.readyState && (r.removeEventListener("readystatechange", t),
                        e())
                    }
                    ;
                    document.addEventListener("readystatechange", t)
                } else
                    e()
            }
            ))
        }
        var kr = Object.defineProperty
          , Tr = Object.defineProperties
          , Ir = Object.getOwnPropertyDescriptors
          , Dr = Object.getOwnPropertySymbols
          , Rr = Object.prototype.hasOwnProperty
          , Cr = Object.prototype.propertyIsEnumerable
          , Lr = (e,t,n)=>t in e ? kr(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n;
        const Nr = (e=null)=>{
            var t;
            null === e && (e = window),
            ["testing", "prestable", "production"].includes("production") && !v && (/iPad|iPhone|iPod/.test(window.navigator.platform) || window.navigator.userAgent.includes("Mac") && "ontouchend"in document) && (e.console = (t = ((e,t)=>{
                for (var n in t || (t = {}))
                    Rr.call(t, n) && Lr(e, n, t[n]);
                if (Dr)
                    for (var n of Dr(t))
                        Cr.call(t, n) && Lr(e, n, t[n]);
                return e
            }
            )({}, console),
            Tr(t, Ir({
                log: ()=>{}
                ,
                error: ()=>{}
                ,
                info: ()=>{}
                ,
                debug: ()=>{}
                ,
                warn: ()=>{}
                ,
                trace: ()=>{}
                ,
                dir: ()=>{}
                ,
                dirxml: ()=>{}
                ,
                group: ()=>{}
                ,
                groupEnd: ()=>{}
                ,
                time: ()=>{}
                ,
                timeEnd: ()=>{}
                ,
                assert: ()=>{}
                ,
                profile: ()=>{}
            }))))
        }
        ;
        const Mr = P("sdkv2", f.Dev);
        !function() {
            var e;
            if ((0,
            c.mv)())
                bn("alert hook disabled");
            else
                try {
                    "function" == typeof window.alert && (e = window.alert,
                    window.alert = function() {
                        const t = arguments[0];
                        return bn(`alert message = ${t}`),
                        s.Z.postToParent({
                            type: "game-call-alert",
                            data: {
                                message: t.substring(0, En)
                            }
                        }),
                        e.apply(this, arguments)
                    }
                    ),
                    window.addEventListener("load", _n, {
                        once: !0
                    }),
                    bn("alert hook enabled")
                } catch (e) {
                    (0,
                    a.fF)(e, {
                        prefix: "game_hook_alert exp error: ",
                        level: "warn"
                    })
                }
        }(),
        $() && (localStorage.clear(),
        indexedDB.databases().then((e=>{
            e.forEach((e=>{
                e.name && indexedDB.deleteDatabase(e.name)
            }
            ))
        }
        )));
        let jr, $r, Yr = Promise.resolve();
        Yr = function(t) {
            if (window.loadPolyfillsPromise)
                return window.loadPolyfillsPromise;
            let n = [[e.LEGACY, Boolean(Array.prototype.at)], [e.INTERSECTION_OBSERVER, Boolean("IntersectionObserver"in window && "IntersectionObserverEntry"in window && "intersectionRatio"in window.IntersectionObserverEntry.prototype)], [e.SMOOTH_SCROLL, Boolean("scrollBehavior"in document.documentElement.style)], [e.ABORT_CONTROLLER, "undefined" != typeof AbortController]].filter((([,e])=>!e));
            return window.loadPolyfillsPromise = Promise.all(n.map((([e])=>new Promise(((n,r)=>{
                (e=>{
                    const {async: t, content: n, crossorigin: r, id: o, nonce: a, onErrCb: s, onLoadCb: i, parentElement: c, src: l} = e
                      , d = document.createElement("script");
                    if (i && (d.onload = i),
                    s && (d.onerror = s),
                    d.type = "text/javascript",
                    t && (d.async = t),
                    l && (d.src = l),
                    a && d.setAttribute("nonce", a),
                    r && d.setAttribute("crossorigin", r),
                    o && (d.setAttribute("id", `${o}-script`),
                    d.dataset.rCid = `load-script-${o}`),
                    n) {
                        const e = document.createTextNode(n);
                        d.appendChild(e)
                    }
                    c ? c.appendChild(d) : document.body.appendChild(d)
                }
                )({
                    id: e,
                    src: o(t, e),
                    parentElement: document.head,
                    onErrCb: r,
                    onLoadCb: n
                })
            }
            ))))),
            window.loadPolyfillsPromise
        }("//yastatic.net/s3/games-static/stardust/games/v1698670813/build/"),
        Yr = Yr.then((()=>{
            ue && (Nr(),
            window.alert = e=>console.warn("Overridden alert: " + e)),
            (()=>{
                if (window.top !== window)
                    return;
                if (-1 === window.location.hostname.indexOf("games.s3.yandex.net") && -1 === window.location.hostname.indexOf("games-storage.yandex.net") && -1 === window.location.hostname.indexOf("games-storage-aws.yandex.net") && -1 === window.location.hostname.indexOf("games-storage-awst.yandex.net"))
                    return;
                const e = (0,
                c.rh)();
                if (!e)
                    return;
                const {search: t, hash: n, hostname: r} = window.location;
                let o;
                o = -1 === r.indexOf("games.s3.yandex.net") ? `https://yandex.com/games/app/${e}${t}${n}` : `https://${d(window.location.hostname) ? "ya" : "yandex"}.ru/games/app/${e}${t}${n}`,
                window.top.location.replace(o)
            }
            )(),
            Zn()
        }
        )),
        Mr("APP_VERSION", "1698670813");
        class Gr {
            constructor(e) {
                var t, n;
                e = Jn(e),
                this.EVENTS = {
                    EXIT: wr.EXIT,
                    HISTORY_BACK: wr.HISTORY_BACK
                },
                this.dispatchEvent = function(e, t) {
                    return new Promise(((n,r)=>{
                        if (!(e in yr)) {
                            const t = `Yandex SDK Event ${e} is not in supported.`;
                            return console.warn(t),
                            void r(new Error(t))
                        }
                        const o = {
                            action: e,
                            type: "sdk-event"
                        };
                        if (void 0 !== t)
                            try {
                                o.data = {
                                    detail: JSON.stringify(t)
                                }
                            } catch (e) {
                                return console.warn(e),
                                void r(new Error('Wrong "detail" argument'))
                            }
                        s.Z.postToParent(o).then((()=>{
                            n(!0)
                        }
                        )).catch((e=>{
                            r(e)
                        }
                        ))
                    }
                    ))
                }
                ,
                this.onEvent = vr(),
                this.achievements = T.init(),
                this.adv = new ge(e),
                this.auth = fe,
                this.clipboard = On,
                this.deviceInfo = new Sn(e.deviceType),
                Fr.deviceInfo = this.deviceInfo,
                this.environment = Gt,
                this.feedback = Fn,
                this.isAvailableMethod = (n = this,
                e=>$() && ["leaderboards.setLeaderboardScore"].includes(e) ? new Promise((e=>e(!0))) : s.Z.postToParent({
                    type: "auth",
                    action: "has-auth"
                }).then((({data: t})=>{
                    const {hasAuth: r} = t;
                    if (!r && function(e) {
                        return ["feedback.requestReview", "leaderboards.getLeaderboardPlayerEntry", "leaderboards.setLeaderboardScore", "player.getIDsPerGame"].includes(e)
                    }(e))
                        return !1;
                    const o = {
                        leaderboards: Et,
                        payments: Mt,
                        player: tn,
                        storage: un.getCustomLocalStorage()
                    };
                    if (o[e])
                        return !1;
                    const a = e.split(".");
                    let s = vn(vn({}, o), n);
                    for (let e = 0; e < a.length; e++) {
                        const t = s[a[e]];
                        if (!t)
                            return !1;
                        if (e === a.length - 1)
                            return "function" == typeof t;
                        if (!hn(t))
                            return !1;
                        s = hn(t.prototype) ? t.prototype : t
                    }
                    return !1
                }
                ))),
                this.shortcut = _r,
                this.getLeaderboards = Pt,
                this.getPayments = Qn,
                this.getPlayer = hr,
                this.getStorage = pn,
                this.notifications = Hn,
                this.screen = new fr,
                this.features = new Un(e.features),
                this.yandexApp = {
                    enabled: Boolean(null == (t = window.YandexGamesSDKEnvironment) ? void 0 : t.isYandexApp)
                },
                this.getFlags = ()=>{
                    var e, t;
                    const n = (null == (t = null == (e = window.YandexGamesSDKEnvironment) ? void 0 : e.request) ? void 0 : t.varioqubFlags) || {};
                    return Mr("get varioqub flags: ", n),
                    n
                }
            }
        }
        function Ur(e) {
            if ("complete" === document.readyState)
                e();
            else {
                const t = ()=>{
                    e(),
                    window.removeEventListener("load", t)
                }
                ;
                window.addEventListener("load", t)
            }
        }
        Yr = Yr.then((()=>{
            window.loadEnvironmentPromise = window.loadEnvironmentPromise || new Promise(((e,t)=>{
                s.Z.postToParent({
                    type: "environment",
                    action: "get"
                }).then((({data: t})=>{
                    e(t)
                }
                )).catch((e=>{
                    t(e)
                }
                ))
            }
            )).then((e=>{
                window.YandexGamesSDKEnvironment = e
            }
            )),
            function(e) {
                const t = rt(e, 2e3)
                  , n = ["click", "keydown", "keyup", "mousedown", "mouseenter", "mouseleave", "mouseup", "pointerup", "touchcancel", "touchend", "touchmove", "touchstart"];
                n.forEach((e=>document.addEventListener(e, t, {
                    passive: !0,
                    capture: !0
                })))
            }((()=>s.Z.postToParent({
                type: "user-action"
            })))
        }
        ));
        try {
            $r = new URLSearchParams(window.location.hash.slice(1)).get("device-type")
        } catch (e) {}
        class Fr {
            constructor() {
                throw new Error("Please, use `YaGames.init` instead.")
            }
            static longtaskObserver() {
                var e;
                const t = "longtask";
                if ("undefined" != typeof PerformanceObserver && (null == (e = PerformanceObserver.supportedEntryTypes) ? void 0 : e.includes(t))) {
                    let e;
                    const n = ()=>{
                        clearTimeout(e),
                        e = setTimeout((()=>{
                            "complete" === document.readyState ? r.disconnect() : n()
                        }
                        ), Ar.Tc)
                    }
                      , r = new PerformanceObserver((e=>{
                        e.getEntries().forEach((()=>{
                            s.Z.postToParent({
                                type: "longtask"
                            }),
                            n()
                        }
                        ))
                    }
                    ));
                    r.observe({
                        entryTypes: [t]
                    })
                }
                "complete" === document.readyState ? s.Z.postToParent({
                    type: "longtask_frame_ready"
                }) : window.addEventListener("load", (()=>{
                    s.Z.postToParent({
                        type: "longtask_frame_ready"
                    })
                }
                ))
            }
            static init(e) {
                return t = this,
                n = null,
                r = function*() {
                    return jr ? (console.warn("YaGames was initialized"),
                    jr) : (this.longtaskObserver(),
                    Mr("Start initialization"),
                    yield Yr,
                    jr = new Promise(((t,n)=>{
                        !function() {
                            const e = ()=>{
                                s.Z.postToParent({
                                    type: "sdk_initialization",
                                    data: {
                                        initialized: !0
                                    }
                                }),
                                window.removeEventListener("load", e)
                            }
                            ;
                            "complete" === document.readyState ? e() : window.addEventListener("load", e)
                        }();
                        const r = r=>{
                            try {
                                if (!(e = Jn(r, e)).deviceType)
                                    try {
                                        e.deviceType = new URLSearchParams(window.location.hash.slice(1)).get("device-type")
                                    } catch (e) {
                                        (0,
                                        a.fF)(e, {
                                            message: "No deviceType in options"
                                        })
                                    }
                                xr().then((()=>{
                                    const n = new Gr(e);
                                    n.environment.isTelegram && et("loading", {
                                        value: 100
                                    }),
                                    e.hasAuth && n.getPlayer({
                                        scopes: !1
                                    }),
                                    t(n)
                                }
                                ))
                            } catch (e) {
                                (0,
                                a.fF)(e),
                                n(e)
                            }
                        }
                        ;
                        window.loadEnvironmentPromise.then((()=>{
                            Xn().then(r).catch((e=>{
                                console.warn(`Options load failed with error ${e}`),
                                r()
                            }
                            ))
                        }
                        )).catch((e=>{
                            (0,
                            a.fF)(e),
                            Xn().then(r).catch((e=>{
                                console.warn(`Options load failed with error ${e}`),
                                r()
                            }
                            ))
                        }
                        )),
                        setTimeout((()=>{
                            const e = {
                                clientTech: Vn(),
                                gameTech: Kn()
                            };
                            Mr("checkAndSendGameInfo tech data:", e),
                            Ur((()=>{
                                s.Z.postToParent({
                                    type: "game-stats",
                                    data: e
                                })
                            }
                            ))
                        }
                        ), 1e4)
                    }
                    )),
                    jr.then((()=>Mr("Initialized"))),
                    jr)
                }
                ,
                new Promise(((e,o)=>{
                    var a = e=>{
                        try {
                            i(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }
                      , s = e=>{
                        try {
                            i(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }
                      , i = t=>t.done ? e(t.value) : Promise.resolve(t.value).then(a, s);
                    i((r = r.apply(t, n)).next())
                }
                ));
                var t, n, r
            }
        }
        if (Fr.deviceInfo = new Sn($r),
        window.YaGames && window.YaGamesAdded) {
            const e = 'YaGames is already defined. Please, check double <script src="https://ya.ru/games/sdk/v2"> on the page.';
            (0,
            c.mv)() && window.parent.postMessage({
                source: "YandexGamesSDK",
                type: "alert",
                message: e
            }, "*"),
            (0,
            a.Ts)(new Error(e))
        } else {
            window.parent !== window && window.parent.postMessage({
                source: "YandexGamesSDK",
                type: "sdk-bundle-start",
                messageId: `${Date.now()}-${Math.random()}`,
                data: {
                    time: Date.now(),
                    sdkVersion: "v2",
                    sdkBundle: "1698670813"
                }
            }, "*");
            try {
                un.setup()
            } catch (e) {
                (0,
                a.fF)(e)
            }
            window.top !== window && xr().then(i),
            mr(document.querySelector("iframe")),
            Pr.overrideCacheSearch(),
            Sr(),
            "SecurityPolicyViolationEvent"in window ? window.addEventListener("securitypolicyviolation", (({blockedURI: e, columnNumber: t, disposition: n, documentURI: r, effectiveDirective: o, lineNumber: a, originalPolicy: i, referrer: c, sample: l, sourceFile: d, statusCode: u, violatedDirective: p})=>{
                s.Z.postToParent({
                    type: "csp",
                    action: "violation",
                    data: {
                        blockedURI: e,
                        columnNumber: t,
                        disposition: n,
                        documentURI: r,
                        effectiveDirective: o,
                        lineNumber: a,
                        originalPolicy: i,
                        referrer: c,
                        sample: l,
                        sourceFile: d,
                        statusCode: u,
                        violatedDirective: p
                    }
                })
            }
            )) : console.warn("SecurityPolicyViolationEvent is not available for this browser")
        }
        Ur((()=>{
            s.Z.postToParent({
                type: "frame",
                action: $n.IframeLoaded
            })
        }
        )),
        window.YaGamesAdded = !0,
        window.YaGames = Fr;
        const Zr = Fr
    }
    )(),
    YaGames = r.default
}
)();
//# sourceMappingURL=https://s3.mdst.yandex.net/games/source-maps/v1698670813/sdk/v2.js.map
