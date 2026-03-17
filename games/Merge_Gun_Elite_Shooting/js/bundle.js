var __extends = this && this.__extends || function () {
    var e = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function (e, t) {
        e.__proto__ = t
    } || function (e, t) {
        for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a])
    };
    return function (t, a) {
        function i() {
            this.constructor = t
        }
        e(t, a), t.prototype = null === a ? Object.create(a) : (i.prototype = a.prototype, new i)
    }
}();
! function () {
    function e(t, a, i) {
        function n(s, l) {
            if (!a[s]) {
                if (!t[s]) {
                    var r = "function" == typeof require && require;
                    if (!l && r) return r(s, !0);
                    if (o) return o(s, !0);
                    var u = new Error("Cannot find module '" + s + '""');
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var h = a[s] = {
                    exports: {}
                };
                t[s][0].call(h.exports, function (e) {
                    var a = t[s][1][e];
                    return n(a || e)
                }, h, h.exports, e, t, a, i)
            }
            return a[s].exports
        }
        for (var o = "function" == typeof require && require, s = 0; s < i.length; s++) n(i[s]);
        return n
    }
    return e
}()({
    1: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("./game/BottomGameItem"),
            n = e("./game/ChangeGunView"),
            o = e("./script/ScaleButton"),
            s = e("./game/DiaAndGoldView"),
            l = e("./game/DieView"),
            r = e("./game/GameItem"),
            u = e("./game/GameOverView"),
            h = e("./game/GetDiamondView"),
            d = e("./game/GetMoneyView"),
            c = e("./game/GunItem"),
            m = e("./game/LodingView"),
            g = e("./game/LoseView"),
            p = e("./game/MainView"),
            f = e("./game/RewardItem"),
            _ = e("./game/OfflinrMoneyView"),
            y = e("./game/PlayScene"),
            v = e("./game/PlayData"),
            b = e("./game/RankingView"),
            S = e("./game/ShopView"),
            L = e("./game/ShopList"),
            G = e("./game/SigninView"),
            I = e("./game/SigninItem"),
            D = e("./game/TalentView"),
            w = e("./game/TalentItem"),
            C = e("./game/Tips"),
            x = e("./game/UnLockGun"),
            M = e("./game/UnLockTalentView"),
            T = e("./game/UpGunOfVideoView"),
            U = function () {
                function e() {}
                return e.init = function () {
                    var e = Laya.ClassUtils.regClass;
                    e("game/BottomGameItem.ts", i.default), e("game/ChangeGunView.ts", n.default), e("script/ScaleButton.ts", o.default), e("game/DiaAndGoldView.ts", s.default), e("game/DieView.ts", l.default), e("game/GameItem.ts", r.default), e("game/GameOverView.ts", u.default), e("game/GetDiamondView.ts", h.default), e("game/GetMoneyView.ts", d.default), e("game/GunItem.ts", c.default), e("game/LodingView.ts", m.default), e("game/LoseView.ts", g.default), e("game/MainView.ts", p.default), e("game/RewardItem.ts", f.default), e("game/OfflinrMoneyView.ts", _.default), e("game/PlayScene.ts", y.default), e("game/PlayData.ts", v.default), e("game/RankingView.ts", b.default), e("game/ShopView.ts", S.default), e("game/ShopList.ts", L.default), e("game/SigninView.ts", G.default), e("game/SigninItem.ts", I.default), e("game/TalentView.ts", D.default), e("game/TalentItem.ts", w.default), e("game/Tips.ts", C.default), e("game/UnLockGun.ts", x.default), e("game/UnLockTalentView.ts", M.default), e("game/UpGunOfVideoView.ts", T.default)
                }, e.width = 576, e.height = 1024, e.scaleMode = "fixedwidth", e.screenMode = "vertical", e.alignV = "middle", e.alignH = "center", e.startScene = "game/Main.scene", e.sceneRoot = "", e.debug = !1, e.stat = !1, e.physicsDebug = !0, e.exportSceneToJson = !0, e
            }();
        a.default = U, U.init(), console.log("🚀 ~ file: bundle.js:143 ~ init():")
    }, {
        "./game/BottomGameItem": 10,
        "./game/ChangeGunView": 11,
        "./game/DiaAndGoldView": 12,
        "./game/DieView": 13,
        "./game/GameItem": 14,
        "./game/GameOverView": 15,
        "./game/GetDiamondView": 16,
        "./game/GetMoneyView": 17,
        "./game/GunItem": 18,
        "./game/LodingView": 19,
        "./game/LoseView": 20,
        "./game/MainView": 21,
        "./game/OfflinrMoneyView": 22,
        "./game/PlayData": 23,
        "./game/PlayScene": 24,
        "./game/RankingView": 25,
        "./game/RewardItem": 26,
        "./game/ShopList": 27,
        "./game/ShopView": 28,
        "./game/SigninItem": 29,
        "./game/SigninView": 30,
        "./game/TalentItem": 31,
        "./game/TalentView": 32,
        "./game/Tips": 33,
        "./game/UnLockGun": 34,
        "./game/UnLockTalentView": 35,
        "./game/UpGunOfVideoView": 36,
        "./script/ScaleButton": 39
    }],
    2: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("./GameConfig"),
            n = e("./utils/Utils"),
            o = e("./utils/WxManager"),
            s = e("./utils/HttpSend"),
            l = e("./ad/VideoRw"),
            r = function () {
                function e() {
                    var e = this;
                    const t = window.navigator.userAgent;
                    (t.indexOf("OS 15_1") > -1 || t.indexOf("OS 15_0_2") > -1) && (Config.useWebGL2 = !1), Config.isAntialias = !0, Config.useRetinalCanvas = !1, Laya.isWXPosMsg = !0, Laya.isWXOpenDataContext = !1, window.Laya3D ? Laya3D.init(i.default.width, i.default.height) : Laya.init(i.default.width, i.default.height, Laya.WebGL), Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(), Laya.stage.scaleMode = "fixedwidth", Laya.stage.screenMode = "none", Laya.stage.alignV = "middle", Laya.stage.alignH = "center", UIConfig.popupBgAlpha = .85, UIConfig.closeDialogOnSide = !1, Laya.URL.exportSceneToJson = i.default.exportSceneToJson, (i.default.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(), i.default.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), i.default.stat && Laya.Stat.show(), Laya.alertGlobalError = !1, console.log("进入游戏"), this.showLoadingUI(), s.httpSend.sendPostRequest(), l.default.init(), o.wxMgr.isWx() ? wx.loadSubpackage({
                        name: "unity",
                        success: function (t) {
                            wx.loadSubpackage({
                                name: "res",
                                success: function (t) {
                                    console.log("分包资源加载完成"), e.onConfigLoaded()
                                },
                                fail: function (e) {}
                            })
                        },
                        fail: function (e) {}
                    }) : this.onConfigLoaded()
                }
                return e.prototype.showLoadingUI = function () {
                    var e = [{
                        url: "ui/loding.jpg",
                        type: Laya.Loader.IMAGE
                    }, {
                        url: "ui/load/load.png",
                        type: Laya.Loader.IMAGE
                    }];
                    Laya.loader.load(e, Laya.Handler.create(this, function () {
                        Laya.Scene.open("game/Loding.scene")
                    }))
                }, e.prototype.onConfigLoaded = function () {
					Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION)
				},e.prototype.onVersionLoaded = function () {
					YYGGames.init("Merge-Gun-Elite-Shooting", () => {
						Laya.Text.defaultFont = "Arial", YYGGames.gameBanner.visible = !1, YYGGames.gameBox.visible = !0, YYGGames.gameBanner.bottom = 10, YYGGames.gameBanner.setBannerSize(160, 120), YYGGames.icon.scale(.5, .5), YYGGames.icon.right = 0, YYGGames.icon.skin = "_base/yad.png", YYGGames.gameBox.bottom = 0, YYGGames.gameBox.game1.scaleX = .6, YYGGames.gameBox.game1.scaleY = .6, YYGGames.gameBox.game2.scaleX = .6, YYGGames.gameBox.game2.scaleY = .6, YYGGames.gameBox.game1.left = 20, YYGGames.gameBox.game2.left = 435, YYGGames.gameBox.game1.bottom = 700, YYGGames.gameBox.game2.bottom = 700, window.showMetheAuthor = function () {
							const e = document.createElement("iframe");
							e.style.display = "none", document.head.appendChild(e);
							const t = e.contentWindow.console;
							t.log.apply(this, ["%c %c %c YYGGAMES %c%s %c %c ", "background: #fb8cb3", "background: #d44a52", "color: #ffffff; background: #871905", "color: #ffffff;background: #871905;", "116,104,101,32,103,97,109,101,32,105,115,32,112,111,119,101,114,101,100,32,98,121,32,121,121,103".split(",").map(e => {
								return String.fromCharCode(~~e)
							}).join(""), "background: #d44a52", "background: #fb8cb3"])
						};
						let e = ["sound_on.png", "sound_off.png"];
						Laya.loader.load(e, Laya.Handler.create(this, this.init)), window.musicBtn = new Laya.Image("sound_on.png").size(60, 60).pos(22, 100), window.musicBtn.zOrder = 9, Laya.stage.addChild(window.musicBtn), window.musicBtn.on(Laya.Event.CLICK, this, this.SoundContr);
						var t = this,
							a = [{
								url: "res/config/gundata.json"
							}, {
								url: "res/config/leveldata.json"
							}, {
								url: "res/config/scenedata.json"
							}, {
								url: "res/config/configdata.json"
							}, {
								url: "res/config/randomdata.json"
							}];
						Laya.loader.load(a, Laya.Handler.create(this, function () {
							var e = [{
								url: "res/atlas/gun.atlas",
								type: Laya.Loader.ATLAS
							}, {
								url: "res/atlas/ui.atlas",
								type: Laya.Loader.ATLAS
							}, {
								url: "res/atlas/reward.atlas",
								type: Laya.Loader.ATLAS
							}, {
								url: "res/atlas/talent.atlas",
								type: Laya.Loader.ATLAS
							}, {
								url: "res/atlas/adIcon.atlas",
								type: Laya.Loader.ATLAS
							}, {
								url: "res/atlas/title.atlas",
								type: Laya.Loader.ATLAS
							}, {
								url: "res/atlas/tips.atlas",
								type: Laya.Loader.ATLAS
							}, {
								url: "effect/anim_chenggonghecheng.png",
								type: Laya.Loader.IMAGE
							}, {
								url: "effect/icon_miaozhun03.png",
								type: Laya.Loader.IMAGE
							}, {
								url: "effect/effect_get.png",
								type: Laya.Loader.IMAGE
							}, {
								url: "effect/icon_jgx01.png",
								type: Laya.Loader.IMAGE
							}, {
								url: "effect/icon_shengji00.png",
								type: Laya.Loader.IMAGE
							}, {
								url: "ui/bg_main.jpg",
								type: Laya.Loader.IMAGE
							}, {
								url: "ui/bgPopLong01.png",
								type: Laya.Loader.IMAGE
							}];
							Laya.loader.load(e, Laya.Handler.create(t, function () {
								n.Utils.initData(), t.onLoadComplete()
							}))
						}))
					})
				}, e.prototype.onLoadComplete = function () {
                    n.Utils.loadingObstacleModel(), n.Utils.loadingSceneModel();
                    var e = [{
                        url: "wxlocal/4.png",
                        type: Laya.Loader.IMAGE
                    }, {
                        url: "wxlocal/headBg01_00.png",
                        type: Laya.Loader.IMAGE
                    }, {
                        url: "wxlocal/icon_1.png",
                        type: Laya.Loader.IMAGE
                    }, {
                        url: "wxlocal/icon_2.png",
                        type: Laya.Loader.IMAGE
                    }, {
                        url: "wxlocal/icon_3.png",
                        type: Laya.Loader.IMAGE
                    }, {
                        url: "wxlocal/line_paihang.png",
                        type: Laya.Loader.IMAGE
                    }];
                    Laya.loader.load(e, Laya.Handler.create(this, function () {
                        o.wxMgr.isWx() && wx.postMessage({
                            action: "load"
                        })
                    })), n.Utils.addOfflineEvent(), console.log("进入主场景"), i.default.startScene && Laya.Scene.open(i.default.startScene)
                }, e.prototype.SoundContr = function () {
                    "sound_off.png" == window.musicBtn.skin ? (window.musicBtn.skin = "sound_on.png", YYGGames.audio.pause = !1) : (window.musicBtn.skin = "sound_off.png", YYGGames.audio.pause = !0)
                }, e
            }();
        new r
    }, {
        "./GameConfig": 1,
        "./ad/VideoRw": 4,
        "./utils/HttpSend": 41,
        "./utils/Utils": 43,
        "./utils/WxManager": 44
    }],
    3: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../data/SingletonBase"),
            n = e("../utils/WxManager"),
            o = function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._adUnitId = "adunit-556d0b32f7a67a3a", t
                }
                return __extends(t, e), t.prototype.init = function () {
                    n.wxMgr.isWx() && (this.bannerAd || this.createAd())
                }, t.prototype.destory = function () {
                    this.bannerAd && (this.bannerAd.offLoad(), this.bannerAd.destroy(), this.bannerAd = null)
                }, t.prototype.createAd = function () {
                    console.log("🚀 ~ file: bundle.js:420 ~ createAd:");
                    var e = this,
                        t = wx.getSystemInfoSync(),
                        a = t.screenWidth,
                        i = t.screenHeight;
                    this.bannerAd = wx.createBannerAd({
                        adUnitId: this._adUnitId,
                        style: {
                            width: 300,
                            left: 0,
                            top: 0
                        }
                    }), this.bannerAd.onError(function (e) {
                        1004 === e.errCode ? console.log("无合适的广告") : 1001 === e.errCode && console.log("参数错误,使用方法错误")
                    }), this.bannerAd.style.width = a, this.bannerAd.onResize(function (a) {
                        if (console.log("创建banner广告resize回调"), e.bannerAd && e.bannerAd.style) {
                            var n = i - e.bannerAd.style.realHeight;
                            t && -1 != t.model.indexOf("iPhone X") && (n -= 44), e.bannerAd.style.top = n, e.bannerAd.show()
                        }
                    })
                }, t.prototype.showBanner = function () {
                    console.log("🚀 ~ file: bundle.js:451 ~ showBanner:"), this.bannerAd && this.bannerAd.show(), YYGGames.gameBanner.visible = !0
                }, t.prototype.hideBanner = function () {
                    console.log("🚀 ~ file: bundle.js:455 ~ hideBanner:"), this.bannerAd && (this.bannerAd.offLoad(), this.bannerAd.hide()), YYGGames.gameBanner.visible = !1
                }, t
            }(i.SingletonBase);
        a.banner = o.getInstance()
    }, {
        "../data/SingletonBase": 9,
        "../utils/WxManager": 44
    }],
    4: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../utils/WxManager"),
            n = function () {
                function e() {}
                return e.init = function (e, t) {
                    var a = this;
                    if (i.wxMgr.isWx()) {
                        this._videoAd && (this._videoAd.offError(), this._videoAd.offClose(), this._videoAd.offLoad(), this._videoAd = null);
                        var n = this._adUnitId;
                        return this._videoAd = wx.createRewardedVideoAd({
                            adUnitId: n
                        }), this._videoAd.onError(function (e) {
                            console.log("激励视频创建失败"), a.isError = !1, 1001 === e.errCode ? console.log("参数错误") : 1004 === e.errCode && console.log("无合适的广告"), t && t()
                        }), this._videoAd.load().then(function () {
                            a.isError = !0, console.log("激励视频创建成功"), e && e()
                        }), this._videoAd
                    }
                    t && t()
                }, e.onClose = function (e, t, a) {
                    var i = this;
                    this._videoAd.offClose(), this._videoAd.onClose(function (n) {
                        n && n.isEnded ? e && e() : t && t(), console.log("关闭激励视频"), a && a(), i._videoAd.offClose()
                    })
                }, e.onShow = function (e, t) {
                    this._videoAd ? (this._videoAd.show(), e && e()) : t && t()
                }, e._adUnitId = "adunit-aa5bb01a0f4a429a", e.isError = !1, e
            }();
        a.default = n
    }, {
        "../utils/WxManager": 44
    }],
    5: [function (e, t, a) {
        "use strict";
        var i, n;
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), i = a.SystemPlatform || (a.SystemPlatform = {}), i[i.IOS = 0] = "IOS", i[i.ANDROID = 1] = "ANDROID", i[i.DEVTOOLS = 2] = "DEVTOOLS", i[i.NONE = 3] = "NONE", n = a.EventDef || (a.EventDef = {}), n.MoveEnd = "moveEnd", n.UpdateGold = "updateGold", n.UpdateDiamond = "UpdateDiamond", n.UpdateStore = "updateStore", n.StartDoubleIncome = "startDoubleIncome", n.UpdateProgress = "updateProgress", n.UpdateLifeProgress = "UpdateLifeProgress", n.ChangeGunSkin = "ChangeGunSkin", n.UpdataLife = "UpdataLife", n.UpdateDiamondOnPlay = "UpdateDiamondOnPlay", n.PlayBossSk = "PlayBossSk", n.Revive = "Revive", n.SigninOk = "SigninOk", n.NeedGuide = "NeedGuide", n.TalentCanUp = "TalentCanUp", n.UpGunOfVideo = "UpGunOfVideo", n.UpdateTime = "UpdateTime", n.CloseDialog = "CloseDialog"
    }, {}],
    6: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function () {
            function e() {
                if (e.instance) throw new Error("not new this class,you should getInstance");
                this._eventDispatcher = new Laya.EventDispatcher
            }
            return e.prototype._createListener = function (e, t, a, i, n, o) {
                return this._eventDispatcher._createListener(e, t, a, i, n, o)
            }, Object.defineProperty(e, "getInstance", {
                get: function () {
                    return e.instance || (e.instance = new e), e.instance
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.on = function (e, t, a, i) {
                return this._eventDispatcher.on(e, t, a, i)
            }, e.prototype.once = function (e, t, a, i) {
                return this._eventDispatcher.once(e, t, a, i)
            }, e.prototype.off = function (e, t, a, i) {
                return this._eventDispatcher.off(e, t, a, i)
            }, e.prototype.offAll = function (e) {
                return this._eventDispatcher.offAll(e)
            }, e.prototype.offAllCaller = function (e) {
                return this._eventDispatcher.offAll(e)
            }, e.prototype.hasListener = function (e) {
                return this._eventDispatcher.hasListener(e)
            }, e.prototype.event = function (e, t) {
                return this._eventDispatcher.event(e, t)
            }, e.prototype.isMouseEvent = function (e) {
                return this._eventDispatcher.isMouseEvent(e)
            }, e
        }();
        a.default = i
    }, {}],
    7: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
                value: !0
            }),
            function (e) {
                function t(e, t, a) {
                    if (void 0 === a && (a = !1), a) {
                        var i = function (e) {
                                var t = {
                                    r: -1,
                                    g: -1,
                                    b: -1
                                };
                                return t.b = e % 256, t.g = Math.floor(e / 256) % 256, t.r = Math.floor(e / 256 / 256), t
                            },
                            n = i(t),
                            o = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
                        o[0] = n.r / 255, o[6] = n.g / 255, o[12] = n.b / 255;
                        var s = new Laya.ColorFilter(o);
                        e.filters = [s]
                    } else {
                        o = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], s = new Laya.ColorFilter(o);
                        e.filters = [s]
                    }
                }
                e.levelNum = 1, e.lifeNum = 3, e.useGunId = 1, e.upgradeData = 1, e.randomId = 1, e.isPlay = !1, e.getDiamondModelType = 1, e.getMoneyModelType = 1, e.offlineModelType = 1, e.reviveModelType = 1, e.signinModelType = 1, e.threeModelType = 1, e.isVideoShow = 1, e.getMoneyShowBanner = 0, e._gateConf = null, e.buyGunCount = 0, e.buyGunCountArr = [5, 15, 30], e._time = 30, e.noThinkShowVideo = 0, e.showVideoRP = 1, e.diamondCount = 5, e.setImageColor = t
            }(a.GameData || (a.GameData = {}))
    }, {}],
    8: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("./SingletonBase"),
            n = function (e) {
                function t() {
                    return e.call(this) || this
                }
                return __extends(t, e), t
            }(i.SingletonBase),
            o = function (e) {
                function t() {
                    var t = e.call(this) || this;
                    return t._jsonMetadatePath = "res/config/gundata.json", t._init_(), t
                }
                return __extends(t, e), t.prototype._init_ = function () {
                    this._dataSource = Laya.loader.getRes(this._jsonMetadatePath)
                }, t.prototype.getMetadata = function () {
                    return this._dataSource
                }, t.prototype.getGunById = function (e) {
                    for (var t = this.getMetadata(), a = 0; a < t.length; a++)
                        if (e == t[a].id) return t[a]
                }, t
            }(n);
        a.GunMetadata = o;
        var s = function (e) {
            function t() {
                var t = e.call(this) || this;
                return t._jsonMetadatePath = "res/config/scenedata.json", t._init_(), t
            }
            return __extends(t, e), t.prototype._init_ = function () {
                this._dataSource = Laya.loader.getRes(this._jsonMetadatePath)
            }, t.prototype.getMetadata = function () {
                return this._dataSource
            }, t.prototype.getSceneById = function (e) {
                for (var t = this.getMetadata(), a = 0; a < t.length; a++)
                    if (e == t[a].id) return t[a]
            }, t
        }(n);
        a.SceneMetadata = s;
        var l = function (e) {
            function t() {
                var t = e.call(this) || this;
                return t._jsonMetadatePath = "res/config/configdata.json", t._init_(), t
            }
            return __extends(t, e), t.prototype._init_ = function () {
                this._dataSource = Laya.loader.getRes(this._jsonMetadatePath)
            }, t.prototype.getMetadata = function () {
                return this._dataSource
            }, t.prototype.getSignInRewards = function () {
                return this.getMetadata().signInRewards
            }, t.prototype.getTalentData = function () {
                return this.getMetadata().talentdata
            }, t.prototype.getRandomData = function () {
                return this.getMetadata().randomData
            }, t.prototype.getUpgradeData = function () {
                return this.getMetadata().levelUp
            }, t.prototype.getAdData = function () {
                return this.getMetadata().adData
            }, t
        }(n);
        a.OtherMetadata = l;
        var r = function (e) {
            function t() {
                var t = e.call(this) || this;
                return t._jsonMetadatePath = "res/config/randomdata.json", t._init_(), t
            }
            return __extends(t, e), t.prototype._init_ = function () {
                this._dataSource = Laya.loader.getRes(this._jsonMetadatePath)
            }, t.prototype.getMetadata = function () {
                return this._dataSource
            }, t.prototype.getEventData = function () {
                return this.getMetadata().eventData
            }, t.prototype.getTalent = function () {
                return this.getMetadata().talent
            }, t.prototype.getEventArray = function () {
                return this.getMetadata().eventArray
            }, t
        }(n);
        a.RandomMetadata = r;
        var u = function (e) {
            function t() {
                var t = e.call(this) || this;
                return t._jsonMetadatePath = "res/config/leveldata.json", t._init_(), t
            }
            return __extends(t, e), t.prototype._init_ = function () {
                this._dataSource = Laya.loader.getRes(this._jsonMetadatePath)
            }, t.prototype.getMetadata = function () {
                return this._dataSource
            }, t.prototype.getLeveldata = function () {
                return this.getMetadata().leveldata
            }, t.prototype.getGateById = function (e) {
                for (var t = this.getMetadata().leveldata, a = 0; a < t.length; a++)
                    if (e == t[a].id) return t[a];
                return null
            }, t.prototype.getObstacleById = function (e) {
                for (var t = this.getMetadata().obstacleData, a = 0; a < t.length; a++)
                    if (e == t[a].id) return t[a];
                return null
            }, t.prototype.getPositionById = function (e) {
                for (var t = this.getMetadata().positionData, a = 0; a < t.length; a++)
                    if (e == t[a].id) return t[a];
                return null
            }, t.prototype.getStartV3ById = function (e) {
                for (var t = this.getMetadata().startV3, a = 0; a < t.length; a++)
                    if (e == t[a].id) return t[a];
                return null
            }, t.prototype.getModeDataById = function (e) {
                for (var t = this.getMetadata().modelData, a = 0; a < t.length; a++)
                    if (e == t[a].id) return t[a];
                return null
            }, t
        }(n);
        a.ConfigMetadata = u
    }, {
        "./SingletonBase": 9
    }],
    9: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function () {
            function e() {
                if (this._instance) throw "singleton class is not use new constructor"
            }
            return e.getInstance = function () {
                var e = this._instance;
                return e || (e = this._instance = new this), e
            }, e
        }();
        a.SingletonBase = i
    }, {}],
    10: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../ui/layaMaxUI"),
            n = e("../utils/Utils"),
            o = function (e) {
                function t() {
                    return e.call(this) || this
                }
                return __extends(t, e), t.prototype.onDestroy = function () {}, t.prototype.onEnable = function () {}, t.prototype.init = function () {
                    this.iamge_icon.skin = this.dataSource.icon, this.on(Laya.Event.CLICK, this, n.Utils.navigateToMiniProgram.bind(this, this.dataSource.appid))
                }, t
            }(i.ui.game.BottomGameItemUI);
        a.default = o
    }, {
        "../ui/layaMaxUI": 40,
        "../utils/Utils": 43
    }],
    11: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../ui/layaMaxUI"),
            n = e("../data/GameData"),
            o = e("../utils/Utils"),
            s = e("../data/Metadata"),
            l = e("../data/EventMgr"),
            r = e("../data/Enum"),
            u = e("../ad/BannerAd"),
            h = function (e) {
                function t() {
                    var t = e.call(this) || this;
                    return t._index = 0, t
                }
                return __extends(t, e), t.prototype.onDisable = function () {
                    u.banner.destory(), l.default.getInstance.event(r.EventDef.CloseDialog)
                }, t.prototype.onEnable = function () {
                    window.x11 = this, x11.list_gun.spaceX = 77;
                    var e = this;
                    this.button_back.on(Laya.Event.CLICK, this, this.onTouchClose), this.button_use.on(Laya.Event.CLICK, this, this.onTouchUse), this.box_data.visible = !1;
                    var t = s.GunMetadata.getInstance().getMetadata(),
                        a = Laya.Utils.parseInt(Laya.LocalStorage.getItem("MaxGunId"), console.log("🚀 ~ file: bundle.js:908 ~ e:", t.length), t.length = 40);
                    t && (t.push(t[t.length - 1]), t.push(t[t.length - 1]), this.list_gun.array = t, this.list_gun.renderHandler = new Laya.Handler(this, function (t, i) {
                        t && t.dataSource && (t.skin = t.dataSource.icon, (i == e.list_gun.array.length - 1 || i == e.list_gun.array.length - 2) && (t.visible = !1), t.dataSource.level > a ? n.GameData.setImageColor(t, 0, !0) : n.GameData.setImageColor(t, 0, !1))
                    })), this._index = n.GameData.useGunId, this.list_gun.scrollBar.value = 250 * (n.GameData.useGunId - 1)
                }, t.prototype.onOpened = function () {
                    this.box_data.visible = !0, n.GameData.setImageColor(this.iamge_name_bg0, 4275005, !0), n.GameData.setImageColor(this.iamge_gunIcon, 0, !0), n.GameData.setImageColor(this.iamge_hitIcon, 16771584, !0), n.GameData.setImageColor(this.image_hitbg, 4275005, !0), n.GameData.setImageColor(this.image_hitbg2, 15035177, !0), n.GameData.setImageColor(this.image_speedIcon, 16771584, !0), n.GameData.setImageColor(this.image_speedbg, 4275005, !0), n.GameData.setImageColor(this.image_speedbg2, 15035177, !0), n.GameData.setImageColor(this.iamge_weightIcon, 16771584, !0), n.GameData.setImageColor(this.iamge_weightbg, 4275005, !0), n.GameData.setImageColor(this.image_weightbg2, 15035177, !0), this.setGunData(n.GameData.useGunId), this.list_gun.scrollBar.rollRatio = .4, this.list_gun.scrollBar.on(Laya.Event.CHANGE, this, this.onTouchChange), this.list_gun.scrollBar.on(Laya.Event.END, this, this.onTouchEnd), u.banner.init()
                }, t.prototype.onTouchUse = function () {
                    console.log("🚀 ~ file: bundle.js:933 ~ 按下 use:"), Laya.LocalStorage.setItem("useGunId", this._index.toString()), l.default.getInstance.event(r.EventDef.ChangeGunSkin), o.Utils.playSound("Click.mp3"), this.close(), YYGGames.gameBox.visible = !0, window.musicBtn.visible = !0
                }, t.prototype.onTouchChange = function () {
                    console.log("🚀 ~ file: bundle.js:934 ~ onTouchChange:");
                    const e = 250 * (this._index - 1),
                        t = e - 125,
                        a = e + 125,
                        i = this.list_gun.scrollBar.value;
                    if (i > t && i < a) this.setGunData(this._index);
                    else if (i <= t) this._index--, this.setGunData(this._index);
                    else if (i >= a) {
                        if (this._index >= 40) return;
                        this._index++, console.log("🚀 ~ file: bundle.js:974 ~ _index++:", this._index), this.setGunData(this._index)
                    }
                }, t.prototype.onTouchEnd = function () {
                    var e = Math.abs(this.list_gun.scrollBar.value - 200 * (this._index - 1)) / 125 * 300;
                    this.ttt = e, console.log("🚀 ~ file: bundle.js:944 ~ t:", e), Laya.Tween.to(this.list_gun.scrollBar, {
                        value: 250 * (this._index - 1)
                    }, e, Laya.Ease.sineInOut), this.setGunData(this._index)
                }, t.prototype.setGunData = function (e) {
                    var t = s.GunMetadata.getInstance().getGunById(e),
                        a = Laya.Utils.parseInt(Laya.LocalStorage.getItem("MaxGunId"));
                    this.iamge_gunIcon.skin = t.icon, this.label_level.text = t.level + "", this.label_name.text = " " + t.linename + " ", this.image_hitbg2.scrollRect = new Laya.Rectangle(0, 0, this.image_hitbg2.width * Math.pow(t.damage / 300, .33), this.image_hitbg2.height), this.image_speedbg2.scrollRect = new Laya.Rectangle(0, 0, this.image_speedbg2.width * (t.speed / 100), this.image_speedbg2.height), this.image_weightbg2.scrollRect = new Laya.Rectangle(0, 0, this.image_weightbg2.width * Math.pow(t.weight / 100, .5), this.image_weightbg2.height), e > a ? (this.button_use.disabled = !0, this.image_btntip.skin = "title/icon_anliu_weijiesuo.png", this.image_btntip.x = 42, this.image_btntip.y = 20, this.box_hit.visible = !1, this.box_speed.visible = !1, this.box_weight.visible = !1, this.label_tip.visible = !0) : (this.box_hit.visible = !0, this.box_speed.visible = !0, this.box_weight.visible = !0, this.label_tip.visible = !1, e == n.GameData.useGunId ? (this.button_use.disabled = !0, this.image_btntip.skin = "title/icon_anliu_shiyongzhong.png", this.image_btntip.x = 62, this.image_btntip.y = 16) : (this.button_use.disabled = !1, this.image_btntip.skin = "title/icon_anliu_shiyong.png", this.image_btntip.x = 90, this.image_btntip.y = 24)), this.getCell(e), this.getCell(e - 1), this.getCell(e + 1)
                }, t.prototype.getCell = function (e) {
                    if (!(this._index >= 40)) {
                        var t = 1 - .002 * Math.abs(250 * (e - 1) - this.list_gun.scrollBar.value);
                        if (.5 > t && (t = .5), t > 1 && (t = 1), this.list_gun.cells)
                            for (var a = 0; a < this.list_gun.cells.length; a++) {
                                var i = this.list_gun.cells[a];
                                i.dataSource.level == e && (i.scaleX = i.scaleY = t)
                            }
                    }
                }, t.prototype.onTouchClose = function () {
                    console.log("🚀 ~ file: bundle.js:1013 ~ onTouchClose:"), o.Utils.playSound("Click.mp3"), this.close(), YYGGames.gameBox.visible = !0, window.musicBtn.visible = !0
                }, t
            }(i.ui.game.ChangeGunUI);
        a.default = h
    }, {
        "../ad/BannerAd": 3,
        "../data/Enum": 5,
        "../data/EventMgr": 6,
        "../data/GameData": 7,
        "../data/Metadata": 8,
        "../ui/layaMaxUI": 40,
        "../utils/Utils": 43
    }],
    12: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../ui/layaMaxUI"),
            n = e("../utils/Utils"),
            o = function (e) {
                function t() {
                    return e.call(this) || this
                }
                return __extends(t, e), t.prototype.onOpened = function (e) {
                    var t = this,
                        a = "ui/icon_jingbi00.png",
                        i = "GetCoins.mp3";
                    2 == e && (a = "ui/icon_baoshi.png", i = "GetDiamond.mp3");
                    for (var o = 5 + Math.floor(8 * Math.random()), s = function (s) {
                            var r = !1,
                                u = !1;
                            s == o - 1 && (r = !0), 0 == s && (u = !0), console.log("bool = ", r);
                            var h = new Laya.Image(a);
                            l.addChild(h), h.width = h.height = 39, h.x = 290, h.y = 408;
                            var d = 300 * Math.random() - 150,
                                c = 300 * Math.random() - 150,
                                m = 23;
                            2 == e && (m = 43), Laya.Tween.to(h, {
                                x: h.x + d,
                                y: h.y + c
                            }, 100), Laya.Tween.to(h, {
                                x: 23,
                                y: m
                            }, 500, null, Laya.Handler.create(l, function () {
                                t && h && (t.removeChild(h), r && t.close(), u && n.Utils.playSound(i))
                            }), 20 * s + 100)
                        }, l = this, r = 0; o > r; r++) s(r)
                }, t
            }(i.ui.game.DiaAndGlodUI);
        a.default = o
    }, {
        "../ui/layaMaxUI": 40,
        "../utils/Utils": 43
    }],
    13: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../ui/layaMaxUI"),
            n = e("../data/EventMgr"),
            o = e("../data/Enum"),
            s = e("../utils/Utils"),
            l = e("../data/GameData"),
            r = e("../utils/WxManager"),
            u = e("../ad/BannerAd"),
            h = e("../utils/HttpSend"),
            d = function (e) {
                function t() {
                    var t = e.call(this) || this;
                    return t._num = 0, t._modelType = 1, t
                }
                return __extends(t, e), t.prototype.onDisable = function () {
                    u.banner.destory()
                }, t.prototype.onEnable = function () {
                    this.list_game.visible = !1, this.button_close.on(Laya.Event.CLICK, this, this.onTouchClose), this.button_revive.on(Laya.Event.CLICK, this, this.onTouchRevive), this._modelType = s.Utils.videoIconInit(this.image_video, l.GameData.reviveModelType, "复活界面")
                }, t.prototype.onOpened = function (e) {
                    e && e.level && e.level > 0 && (this._num = e.level, this._data = e), h.httpSend.auditState || u.banner.init()
                }, t.prototype.onTouchClose = function () {
                    s.Utils.playSound("Click.mp3"), console.log("复活界面-点击谢谢"), s.Utils.noThinkShowVideo() && (this._num > 0 && this._data ? Laya.Scene.open("game/Lose.scene", !1, {
                        level: this._data.level,
                        allLevel: this._data.allLevel,
                        diamond: this._data.diamond
                    }) : (r.wxMgr.aldStage(2, l.GameData.levelNum), Laya.Scene.open("game/Main.scene"), YYGGames.gameBanner.visible = !1, YYGGames.gameBox.visible = !0), this.close())
                }, t.prototype.onTouchRevive = function () {
                    YYGGames.showReward(() => {
                        var e = this;
                        s.Utils.shareByMode(this._modelType, function () {
                            console.log("复活界面-点击复活"), e.close(), n.default.getInstance.event(o.EventDef.Revive), console.log("视频完整播放", "scene", "复活界面")
                        }, function () {
                            console.log("复活失败")
                        })
                    })
                }, t.prototype.setAdData = function () {
                    l.GameData.adData && (this.list_game.visible = !0, this.list_game.array = l.GameData.adData, this.list_game.renderHandler = new Laya.Handler(this, function (e) {
                        e && e.dataSource && e.init()
                    }))
                }, t
            }(i.ui.game.DieUI);
        a.default = d
    }, {
        "../ad/BannerAd": 3,
        "../data/Enum": 5,
        "../data/EventMgr": 6,
        "../data/GameData": 7,
        "../ui/layaMaxUI": 40,
        "../utils/HttpSend": 41,
        "../utils/Utils": 43,
        "../utils/WxManager": 44
    }],
    14: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../ui/layaMaxUI"),
            n = e("../utils/Utils"),
            o = function (e) {
                function t() {
                    return e.call(this) || this
                }
                return __extends(t, e), t.prototype.onDisable = function () {}, t.prototype.onEnable = function () {}, t.prototype.init = function () {
                    this.dataSource && (this.label_name.text = " " + this.dataSource.name + " ", this.image_icon.skin = this.dataSource.icon + " ", this.on(Laya.Event.CLICK, this, n.Utils.navigateToMiniProgram.bind(this, this.dataSource.appid)))
                }, t
            }(i.ui.game.GameItemUI);
        a.default = o
    }, {
        "../ui/layaMaxUI": 40,
        "../utils/Utils": 43
    }],
    15: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../ui/layaMaxUI"),
            n = e("../utils/Utils"),
            o = e("../data/GameData"),
            s = e("../utils/WxManager"),
            l = e("../ad/BannerAd"),
            r = e("../utils/HttpSend"),
            u = e("../data/EventMgr"),
            h = e("../data/Enum"),
            d = function (e) {
                function t() {
                    var t = e.call(this) || this;
                    return t._diamond = 0, t._money = 0, t._bool = !1, t._modelType = 0, n.Utils.setResize(t), t
                }
                return __extends(t, e), t.prototype.onDisable = function () {
                    l.banner.destory()
                }, t.prototype.onOpened = function (e) {
                    this._diamond = Math.floor(4 * e * n.Utils.getTalentDataById(5)), e && e > 0 && (this.box_diamond.visible = !0, this.label_diamondThree.text = " " + String(3 * this._diamond) + " ")
                }, t.prototype.onEnable = function () {
                    window.x15 = this;
                    if (console.log("GameOverView"), this.label_level.text = " No." + o.GameData.levelNum + " ", s.wxMgr.aldStage(3, o.GameData.levelNum), s.wxMgr.isWx()) {
                        var e = [];
                        e.push({
                            key: "level",
                            value: o.GameData.levelNum.toString()
                        }), wx.setUserCloudStorage({
                            KVDataList: e
                        })
                    }
                    4 == o.GameData.levelNum && (this._bool = !0), n.Utils.updateLevel(), this.label_close.pivotY = 100, this.label_close.on(Laya.Event.CLICK, this, this.onTouchGetRewardOnly), this.button_rewardThree.on(Laya.Event.CLICK, this, this.onTouchGetRewardThree), this.init(), this.box_diamond.visible = !1, this.list_game.visible = !1, r.httpSend.auditState || l.banner.init(), this._modelType = n.Utils.videoIconInit(this.image_video, o.GameData.threeModelType, "结算界面"), YYGGames.gameBanner.visible = !0
                }, t.prototype.onTouchGetRewardOnly = function () {
                    YYGGames.showInterstitial(() => {
                        var e = this;
                        console.log("结算界面-单倍领取"), n.Utils.noThinkShowVideo() && (n.Utils.updateGold(this._money), n.Utils.updateDiamond(this._diamond), n.Utils.playSound("Click.mp3"), this.close(), Laya.Scene.open("game/Main.scene"), YYGGames.gameBanner.visible = !1, n.Utils.playSound("GetCoins.mp3"), this.IsNeedGuide());
                        let t = e._money;
                        console.log("🚀 ~ file: bundle.js:1332 ~ strMoney:", t), t = n.Utils.getFormatMoneyStr(t), YYGGames.showTip("You got " + t + " Coins"), 0 !== e._diamond && YYGGames.showTip("You got " + e._diamond + " Diamonds"), YYGGames.gameBox.visible = !0, window.musicBtn.visible = !0
                    })
                }, t.prototype.onTouchGetRewardThree = function () {
                    YYGGames.showReward(() => {
                        var e = this;
                        n.Utils.playSound("Click.mp3"), n.Utils.shareByMode(this._modelType, function () {
                            e._money = 3 * e._money, e._diamond = 3 * e._diamond, console.log("结算界面-三倍领取"), n.Utils.updateGold(e._money), n.Utils.updateDiamond(e._diamond), e.close(), Laya.Scene.open("game/Main.scene"), YYGGames.gameBanner.visible = !1, n.Utils.playSound("GetCoins.mp3"), e.IsNeedGuide(), console.log("视频完整播放", "scene", "结算界面");
                            let t = e._money;
                            console.log("🚀 ~ file: bundle.js:1332 ~ strMoney:", t), t = n.Utils.getFormatMoneyStr(t), YYGGames.showTip("You got " + t + " Coins"), 0 !== e._diamond && YYGGames.showTip("You got " + e._diamond + " Diamonds")
                        }), YYGGames.gameBox.visible = !0, window.musicBtn.visible = !0
                    })
                }, t.prototype.init = function () {
                    this._money = Math.floor(20 * n.Utils.getGarageIncome() * n.Utils.getTalentDataById(4)), this.label_moneyThree.text = n.Utils.getFormatMoneyStr(3 * this._money) + " "
                }, t.prototype.setAdData = function () {
                    o.GameData.adData && (this.list_game.visible = !0, this.list_game.array = o.GameData.adData, this.list_game.renderHandler = new Laya.Handler(this, function (e) {
                        e && e.dataSource && e.init()
                    }))
                }, t.prototype.IsNeedGuide = function () {
                    if (this._bool) {
                        var e = Laya.LocalStorage.getItem("MaxGunId");
                        e && Number(e) > 2 || setTimeout(function () {
                            u.default.getInstance.event(h.EventDef.NeedGuide, 2)
                        }, 100)
                    }
                }, t
            }(i.ui.game.GameOverUI);
        a.default = d
    }, {
        "../ad/BannerAd": 3,
        "../data/Enum": 5,
        "../data/EventMgr": 6,
        "../data/GameData": 7,
        "../ui/layaMaxUI": 40,
        "../utils/HttpSend": 41,
        "../utils/Utils": 43,
        "../utils/WxManager": 44
    }],
    16: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../ui/layaMaxUI"),
            n = e("../utils/Utils"),
            o = (e("../utils/WxManager"), e("../ad/BannerAd")),
            s = e("../data/Metadata"),
            l = e("../data/GameData"),
            r = e("../data/EventMgr"),
            u = e("../data/Enum"),
            h = function (e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.num = 0, t._modelType = 0, t._flag = !1, t
                }
                return __extends(t, e), t.prototype.onDisable = function () {
                    this.sk.stop(), o.banner.destory()
                }, t.prototype.onEnable = function () {
                    window.x16 = this, this.num = 0, this.box_label.visible = !1, this.button_close.on(Laya.Event.CLICK, this, this.onTouchClose), this.button_get.on(Laya.Event.CLICK, this, this.onTouchGet), this.button_getvideo.on(Laya.Event.CLICK, this, this.onTouchVideo), this._modelType = n.Utils.videoIconInit(this.image_video, l.GameData.getDiamondModelType, "钻石领取界面")
                }, t.prototype.onOpened = function (e) {
                    if (this._flag = !1, e) {
                        var t = 0,
                            a = !1;
                        if (-1 != e) {
                            var i = s.GunMetadata.getInstance().getGunById(e);
                            i.diamond > 0 ? (a = !0, t = +i.diamond) : i.share_diamond > 0 && (a = !1, t = +i.share_diamond)
                        } else t = 200, a = !1, this._flag = !0;
                        a ? (this.button_get.visible = !0, this.button_getvideo.visible = !1) : (this.button_get.visible = !1, this.button_getvideo.visible = !0), this.label_diamond.text = "Diamond x" + n.Utils.getFormatMoneyStr(t) + " ", this.box_label.visible = !0, this.num = t
                    }
                    o.banner.init()
                }, t.prototype.onTouchGet = function () {
                    console.log("钻石领取界面-点击领取"), YYGGames.showInterstitial(() => {
                        n.Utils.playSound("Click.mp3"), this.close(), n.Utils.updateDiamond(this.num), YYGGames.showTip("You got " + this.num + " Diamonds"), Laya.Scene.open("game/DiaAndGlod.scene", !1, 2), l.GameData.levelNum <= 1 ? r.default.getInstance.event(u.EventDef.NeedGuide, 3) : r.default.getInstance.event(u.EventDef.CloseDialog)
                    })
                }, t.prototype.onTouchVideo = function () {
                    var e = this;
                    n.Utils.playSound("Click.mp3"), n.Utils.shareByMode(this._modelType, function () {
                        console.log("钻石领取界面-点击看视频领取"), YYGGames.showReward(() => {
                            e.close(), n.Utils.updateDiamond(e.num), YYGGames.showTip("You got " + e.num + " Diamonds"), Laya.Scene.open("game/DiaAndGlod.scene", !1, 2), console.log("视频完整播放", "scene", "钻石领取界面"), e._flag && (l.GameData.diamondCount++, Laya.LocalStorage.setItem("diamondCount", l.GameData.diamondCount + ""))
                        })
                    })
                }, t.prototype.onTouchClose = function () {
                    console.log("钻石领取界面-点击关闭"), n.Utils.playSound("Click.mp3"), this.close(), l.GameData.levelNum <= 1 ? r.default.getInstance.event(u.EventDef.NeedGuide, 3) : r.default.getInstance.event(u.EventDef.CloseDialog)
                }, t
            }(i.ui.game.GetDiamondUI);
        a.default = h
    }, {
        "../ad/BannerAd": 3,
        "../data/Enum": 5,
        "../data/EventMgr": 6,
        "../data/GameData": 7,
        "../data/Metadata": 8,
        "../ui/layaMaxUI": 40,
        "../utils/Utils": 43,
        "../utils/WxManager": 44
    }],
    17: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../ui/layaMaxUI"),
            n = e("../utils/Utils"),
            o = (e("../utils/WxManager"), e("../ad/BannerAd")),
            s = e("../data/GameData"),
            l = e("../data/Enum"),
            r = e("../data/EventMgr"),
            u = function (e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.num = 0, t._modelType = 1, t
                }
                return __extends(t, e), t.prototype.onDisable = function () {
                    this.sk.stop(), o.banner.destory(), r.default.getInstance.event(l.EventDef.CloseDialog)
                }, t.prototype.onEnable = function () {
                    window.x17 = this, YYGGames.gameBox.visible = !1, window.musicBtn.visible = !1, this.num = 0, this.box_label.visible = !1, this.button_close.visible = !0, this._modelType = n.Utils.videoIconInit(this.image_video, s.GameData.getMoneyModelType, "金币领取")
                }, t.prototype.onOpened = function (e) {
                    e && (this.button_close.on(Laya.Event.CLICK, this, this.onTouchClose), this.button_get.on(Laya.Event.CLICK, this, this.onTouchGet), this.label_money.text = "Coins x" + n.Utils.getFormatMoneyStr(e) + " ", this.box_label.visible = !0, this.num = e), 1 == s.GameData.getMoneyShowBanner && o.banner.init()
                }, t.prototype.onTouchGet = function () {
                    YYGGames.showReward(() => {
                        var e = this;
                        n.Utils.playSound("Click.mp3"), n.Utils.shareByMode(this._modelType, function () {
                            console.log("金币领取界面-点击领取"), e.close(), n.Utils.updateGold(e.num), Laya.Scene.open("game/DiaAndGlod.scene", !1, 1), console.log("视频完整播放", "scene", "金币领取界面"), 0 == window.inshop ? (YYGGames.gameBox.visible = !0, window.musicBtn.visible = !0) : (YYGGames.gameBox.visible = !1, window.musicBtn.visible = !1)
                        })
                    })
                }, t.prototype.onTouchClose = function () {
                    console.log("金币领取界面-点击关闭"), n.Utils.playSound("Click.mp3"), this.close(), 0 == window.inshop ? (YYGGames.gameBox.visible = !0, window.musicBtn.visible = !0) : (YYGGames.gameBox.visible = !1, window.musicBtn.visible = !1)
                }, t
            }(i.ui.game.GetMoneyUI);
        a.default = u
    }, {
        "../ad/BannerAd": 3,
        "../data/Enum": 5,
        "../data/EventMgr": 6,
        "../data/GameData": 7,
        "../ui/layaMaxUI": 40,
        "../utils/Utils": 43,
        "../utils/WxManager": 44
    }],
    18: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../ui/layaMaxUI"),
            n = e("../data/Metadata"),
            o = e("../utils/Utils"),
            s = function (e) {
                function t() {
                    return e.call(this) || this
                }
                return __extends(t, e), t.prototype.onDisable = function () {
                    this.stopAction()
                }, t.prototype.onEnable = function () {
                    this.label_moneyAdd.visible = !1, this.image_state.visible = !1, this.sk.visible = !1
                }, Object.defineProperty(t.prototype, "gunConf", {
                    get: function () {
                        return this._gunConf
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.stopAction = function () {
                    this.sk.stop(), this.sk.visible = !1, Laya.timer.clearAll(this), this.stopStateAction(), this.stopComposeAction(), this.setState(), this.stopGunScaleAction()
                }, t.prototype.reset = function () {
                    this.image_gunicon.skin = "", this.sprite_level.visible = !1, this._gunConf = null, this.stopAction(), this.stopGunScaleAction()
                }, t.prototype.setInfo = function (e, t) {
                    void 0 === t && (t = !0);
                    var a = n.GunMetadata.getInstance().getGunById(e);
                    a && (this._gunConf = a, this.sprite_level.visible = !0, this.image_gunicon.visible = !0, this.label_level.text = this._gunConf.level, 1 == t && (this.image_gunicon.skin = this._gunConf.icon, this.playGunScaleAction()), Laya.timer.loop(+a.gold_interval, this, this.playGoldAction)), this.image_state.scaleX = this.image_state.scaleY = 1
                }, t.prototype.setState = function (e) {
                    void 0 === e && (e = !1), this.image_state.visible = e, e ? this.playStateAction() : this.stopStateAction()
                }, t.prototype.playStateAction = function () {
                    this._setStateTimeLine = new Laya.TimeLine, this._setStateTimeLine.to(this.image_state, {
                        scaleX: 1.2,
                        scaleY: 1.2
                    }, 200).to(this.image_state, {
                        scaleX: 1,
                        scaleY: 1
                    }, 200), this._setStateTimeLine.play(0, !0)
                }, t.prototype.stopStateAction = function () {
                    this._setStateTimeLine && (this._setStateTimeLine.offAll(), this._setStateTimeLine.destroy(), this._setStateTimeLine = null)
                }, t.prototype.playComposeAction = function (e) {
                    console.log("🚀 ~ file: bundle.js:1658 ~ playComposeAction:合成枪支");
                    var t = this;
                    this.image_gunicon.visible = !1;
                    var a = new Laya.Image,
                        i = new Laya.Image;
                    a.skin = i.skin = this.image_gunicon.skin, a.width = i.width = this.image_gunicon.width, a.height = i.height = this.image_gunicon.height, a.pos(this.image_gunicon.x, this.image_gunicon.y), i.pos(this.image_gunicon.x, this.image_gunicon.y), a.anchorX = a.anchorY = i.anchorX = i.anchorY = .5, a.scaleX = a.scaleY = i.scaleX = i.scaleY = .65, this.addChild(a), this.addChild(i), this._leftTimeLine = new Laya.TimeLine, this._rightTimeLine = new Laya.TimeLine, this._leftTimeLine.to(a, {
                        x: this.image_gunicon.x - 50
                    }, 150).to(a, {
                        x: this.image_gunicon.x - 10
                    }, 150), this._rightTimeLine.to(i, {
                        x: this.image_gunicon.x + 50
                    }, 150).to(i, {
                        x: this.image_gunicon.x + 10
                    }, 150), this._leftTimeLine.once(Laya.Event.COMPLETE, this, function () {
                        t._leftTimeLine.destroy(), t._leftTimeLine = null, a.removeSelf()
                    }), this._rightTimeLine.once(Laya.Event.COMPLETE, this, function () {
                        t._rightTimeLine.destroy(), t._rightTimeLine = null, i.removeSelf(), t.sk.visible = !0, t.sk.play(0, !1), Laya.timer.once(2e3, t, t.stopSkAction), t.image_gunicon.skin = t._gunConf.icon, t.image_gunicon.visible = !0
                    }), this._leftTimeLine.play(), this._rightTimeLine.play()
                }, t.prototype.stopSkAction = function () {
                    this.sk.visible = !1
                }, t.prototype.stopComposeAction = function () {
                    this._leftTimeLine && (this._leftTimeLine.offAll(), this._leftTimeLine.destroy(), this._leftTimeLine = null), this._rightTimeLine && (this._rightTimeLine.offAll(), this._rightTimeLine.destroy(), this._rightTimeLine = null), Laya.timer.clear(this, this.stopSkAction)
                }, t.prototype.playGoldAction = function () {
                    var e = this;
                    this.label_moneyAdd.visible = !0, this.label_moneyAdd.alpha = 1;
                    var t = ((new Date).getTime(), +Math.floor(this.gunConf.output_gold * o.Utils.getTalentDataById(2)));
                    this.label_moneyAdd.text = "+$" + o.Utils.getFormatMoneyStr(t) + " ", o.Utils.updateGold(t), Laya.Tween.to(this.label_moneyAdd, {
                        y: -40
                    }, 300), Laya.Tween.to(this.label_moneyAdd, {
                        alpha: 0,
                        y: -55
                    }, 300, null, Laya.Handler.create(this, function () {
                        e.label_moneyAdd.y = -30, e.label_moneyAdd.visible = !1, Laya.Tween.clearAll(e)
                    }), 500, !1), this.playGunScaleAction()
                }, t.prototype.playGunScaleAction = function () {
                    var e = this;
                    this._gunScaleTimeLine = new Laya.TimeLine, this._gunScaleTimeLine.to(this.image_gunicon, {
                        scaleX: .8,
                        scaleY: .8
                    }, 150).to(this.image_gunicon, {
                        scaleX: .65,
                        scaleY: .65
                    }, 150), this._gunScaleTimeLine.once(Laya.Event.COMPLETE, this, function () {
                        null !== e._gunScaleTimeLine && e._gunScaleTimeLine.destroy(), e._gunScaleTimeLine = null
                    }), this._gunScaleTimeLine.play()
                }, t.prototype.stopGunScaleAction = function () {
                    this._gunScaleTimeLine && (this._gunScaleTimeLine.offAll(), this._gunScaleTimeLine.destroy(), this._gunScaleTimeLine = null)
                }, t
            }(i.ui.game.GunItemUI);
        a.default = s
    }, {
        "../data/Metadata": 8,
        "../ui/layaMaxUI": 40,
        "../utils/Utils": 43
    }],
    19: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../ui/layaMaxUI"),
            n = function (e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.count = 0, t
                }
                return __extends(t, e), t.prototype.onEnable = function () {}, t.prototype.onDisable = function () {
                    Laya.timer.clearAll(this)
                }, t
            }(i.ui.game.LodingUI);
        a.default = n
    }, {
        "../ui/layaMaxUI": 40
    }],
    20: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../ui/layaMaxUI"),
            n = e("../utils/Utils"),
            o = e("../data/GameData"),
            s = e("../utils/WxManager"),
            l = e("../ad/BannerAd"),
            r = e("../utils/HttpSend"),
            u = function (e) {
                function t() {
                    var t = e.call(this) || this;
                    return t._diamond = 0, t._money = 0, t._modelType = 1, n.Utils.setResize(t), t
                }
                return __extends(t, e), t.prototype.onDisable = function () {
                    l.banner.destory()
                }, t.prototype.onOpened = function (e) {
                    e && (this._diamond = Math.floor(4 * e.diamond * n.Utils.getTalentDataById(5)), e.diamond && e.diamond > 0 && (this.box_diamond.visible = !0, this.label_diamondThree.text = " " + String(3 * this._diamond) + " "), this.init(e)), r.httpSend.auditState || l.banner.init()
                }, t.prototype.onEnable = function () {
                    window.x20 = this;
                    console.log("LoseView"), this.label_level.text = " No." + o.GameData.levelNum + " ", this.label_close.on(Laya.Event.CLICK, this, this.onTouchGetRewardOnly), this.button_rewardThree.on(Laya.Event.CLICK, this, this.onTouchGetRewardThree), this.box_diamond.visible = !1, this.list_game.visible = !1, s.wxMgr.aldStage(2, o.GameData.levelNum), this._modelType = n.Utils.videoIconInit(this.image_video, o.GameData.threeModelType, "失败界面"), YYGGames.gameBanner.visible = !0
                }, t.prototype.onTouchGetRewardOnly = function () {
                    YYGGames.showInterstitial(() => {
                        var e = this;
                        console.log("失败界面-单倍领取"), n.Utils.playSound("Click.mp3"), n.Utils.noThinkShowVideo() && (n.Utils.updateGold(this._money), n.Utils.updateDiamond(this._diamond), this.close(), Laya.Scene.open("game/Main.scene"), YYGGames.gameBanner.visible = !1, n.Utils.playSound("GetCoins.mp3"));
                        let t = e._money;
                        console.log("🚀 ~ file: bundle.js:1332 ~ strMoney:", t), t = n.Utils.getFormatMoneyStr(t), YYGGames.showTip("You got " + t + " Coins"), 0 !== e._diamond && YYGGames.showTip("You got " + e._diamond + " Diamonds"), YYGGames.gameBox.visible = !0, window.musicBtn.visible = !0
                    })
                }, t.prototype.onTouchGetRewardThree = function () {
                    YYGGames.showReward(() => {
                        var e = this;
                        n.Utils.playSound("Click.mp3"), n.Utils.shareByMode(this._modelType, function () {
                            e._money = 3 * e._money, e._diamond = 3 * e._diamond, console.log("失败界面-三倍领取"), n.Utils.updateGold(e._money), n.Utils.updateDiamond(e._diamond), e.close(), Laya.Scene.open("game/Main.scene"), YYGGames.gameBanner.visible = !1, n.Utils.playSound("GetCoins.mp3"), console.log("视频完整播放", "scene", "失败界面");
                            let t = e._money;
                            console.log("🚀 ~ file: bundle.js:1332 ~ strMoney:", t), t = n.Utils.getFormatMoneyStr(t), YYGGames.showTip("You got " + t + " Coins"), 0 !== e._diamond && YYGGames.showTip("You got " + e._diamond + " Diamonds")
                        }), YYGGames.gameBox.visible = !0, window.musicBtn.visible = !0
                    })
                }, t.prototype.init = function (e) {
                    var t = e.level / e.allLevel;
                    this._money = Math.floor(20 * n.Utils.getGarageIncome() * t * n.Utils.getTalentDataById(4)), this.label_moneyThree.text = n.Utils.getFormatMoneyStr(3 * this._money) + " "
                }, t.prototype.setAdData = function () {
                    o.GameData.adData && (this.list_game.visible = !0, this.list_game.array = o.GameData.adData, this.list_game.renderHandler = new Laya.Handler(this, function (e) {
                        e && e.dataSource && e.init()
                    }))
                }, t
            }(i.ui.game.LoseUI);
        a.default = u
    }, {
        "../ad/BannerAd": 3,
        "../data/GameData": 7,
        "../ui/layaMaxUI": 40,
        "../utils/HttpSend": 41,
        "../utils/Utils": 43,
        "../utils/WxManager": 44
    }],
    21: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../ui/layaMaxUI"),
            n = e("./GunItem"),
            o = e("../utils/Utils"),
            s = e("../data/Enum"),
            l = e("../data/Metadata"),
            r = e("../data/EventMgr"),
            u = e("../data/GameData"),
            h = e("../utils/WxManager"),
            d = e("../utils/HttpSend"),
            c = (e("../utils/WxManager"), e("../data/GameData"), function (e) {
                function t() {
                    var t = e.call(this) || this;
                    return t._gundata = [], t._guidebool = !1, o.Utils.setResize(t), t
                }
                return __extends(t, e), t.prototype.onDisable = function () {
                    this._gunshowppoint.destroy(!0), this._mainScene.destroy(!0), Laya.timer.clear(this, this.updateRotation), r.default.getInstance.off(s.EventDef.UpdateGold, this, this.updateGold), r.default.getInstance.off(s.EventDef.UpdateDiamond, this, this.updateDiamond), r.default.getInstance.off(s.EventDef.ChangeGunSkin, this, this.updateCarSkin), r.default.getInstance.off(s.EventDef.UpdateStore, this, this.onBuyBack), r.default.getInstance.off(s.EventDef.SigninOk, this, this.checkTodayHasSignIn), r.default.getInstance.off(s.EventDef.TalentCanUp, this, this.checkTalentState), r.default.getInstance.off(s.EventDef.NeedGuide, this, this.setGuide), r.default.getInstance.off(s.EventDef.UpGunOfVideo, this, this.upGunOfVideo), r.default.getInstance.off(s.EventDef.CloseDialog, this, this.startCheckIsIdle), this.anima_talent && this.anima_talent.stop(), this.anima_signin && this.anima_signin.stop(), this.stopGuideTimeLine(), o.Utils.stopMusic(), this.stopCheckIsIdle()
                }, t.prototype.onEnable = function () {
					if(!window.IsFirst)
					{
						window.IsFirst=true;
						window.HUHU_gameLoadingCompleted();
					}
                    console.log("🚀 ~ file: bundle.js:2179 ~ onEnable:"), window.inshop = !1, window.x21 = this;
                    var e = this,
                        t = !1;
                    this.initdata(), this.addEvent(), this.updateBuyGun(), this.updateGold(), this.updateDiamond(), this.checkTodayHasSignIn(), u.GameData.isPlay || o.Utils.checkShowOfflineGold(), this.checkTalentState(), r.default.getInstance.on(s.EventDef.UpdateGold, this, this.updateGold), r.default.getInstance.on(s.EventDef.UpdateDiamond, this, this.updateDiamond),
                        r.default.getInstance.on(s.EventDef.UpdateStore, this, this.onBuyBack), r.default.getInstance.on(s.EventDef.ChangeGunSkin, this, this.updateCarSkin), r.default.getInstance.on(s.EventDef.SigninOk, this, this.checkTodayHasSignIn), r.default.getInstance.on(s.EventDef.TalentCanUp, this, this.checkTalentState), r.default.getInstance.on(s.EventDef.NeedGuide, this, this.setGuide), r.default.getInstance.on(s.EventDef.UpGunOfVideo, this, this.upGunOfVideo), r.default.getInstance.on(s.EventDef.CloseDialog, this, this.startCheckIsIdle);
                    var a = Laya.LocalStorage.getItem("MaxGunId");
                    t || (a && Number(a) > 1 ? this.startCheckIsIdle() : setTimeout(function () {
                        r.default.getInstance.event(s.EventDef.NeedGuide, 2)
                    }, 100)), Laya.Scene3D.load("unity/LayaScene_show/Conventional/show.ls", Laya.Handler.create(this, function (t) {
                        t && (e._mainScene = t), e.onLoadComplete()
                    })), console.log("🚀 ~ file: bundle.js:1982 ~ load:"), this.box_todayGame.visible = !1, this.list.visible = !1, this.sk.visible = !1, this.sk.stop(), o.Utils.isFullScreen() ? this.box_top.y = 50 : this.box_top.y = 0
                }, t.prototype.onLoadComplete = function () {
                    this.scene.addChild(this._mainScene), this._mainScene.getChildByName("Main Camera").clearFlag = 2, this._gunshowppoint = this._mainScene.getChildByName("gunshowppoint"), this._mainScene.zOrder = 0, this.updateCarSkin()
                }, t.prototype.updateCarSkin = function () {
                    Laya.LocalStorage.getItem("useGunId") && (u.GameData.useGunId = Number(Laya.LocalStorage.getItem("useGunId"))), u.GameData.useGunData = l.GunMetadata.getInstance().getGunById(u.GameData.useGunId), this._gunshowppoint.removeChild(this._gun), this._gun = null, this._gun = new Laya.MeshSprite3D, Laya.MeshSprite3D.load("unity/gunModel/gun/Conventional/" + u.GameData.useGunData.model, new Laya.Handler(this, function (e) {
                        this._gun = e.clone(), this._gunshowppoint.addChild(this._gun), this._gun.transform.localRotationEulerX = -110, this._gun.transform.localRotationEulerY = 90
                    })), Laya.timer.clear(this, this.updateRotation), Laya.timer.loop(10, this, this.updateRotation)
                }, t.prototype.updateRotation = function () {
                    this._gunshowppoint.transform.rotate(new Laya.Vector3(0, -1, 0), !0, !1)
                }, t.prototype.addEvent = function () {
                    this.btn_Buy.on(Laya.Event.CLICK, this, this.onTouchBuy), this.btn_Shop.on(Laya.Event.CLICK, this, this.ontouchShop), this.btn_Start.on(Laya.Event.CLICK, this, this.ontouchStart), this.box_sigin.on(Laya.Event.CLICK, this, this.onTouchSignin), this.box_talent.on(Laya.Event.CLICK, this, this.ontouchTalent), this.box_ranking.on(Laya.Event.CLICK, this, this.onTouchRanking), this.box_ranking.visible = !1, this.box_share.on(Laya.Event.CLICK, this, this.onTouchShare), this.box_share.visible = !1, this.button_change.on(Laya.Event.CLICK, this, this.onTOuchChangeGun)
                }, t.prototype.initdata = function () {
                    console.log("🚀 ~ file: bundle.js:2032 ~ initdata:");
                    var e = this,
                        t = [null, null, null, null, null, null, null, null, null, null, null, null],
                        a = Laya.LocalStorage.getJSON("armouryGuns");
                    if (a)
                        for (var i = 0; i < a.length; i++) {
                            var o = a[i].split("_");
                            o && (t[+o[0]] = o[1])
                        }
                    this.list_gun.itemRender = n.default, this.list_gun.array = t, this.list_gun.renderHandler = new Laya.Handler(this, function (t) {
                        e.onRender(t)
                    }), this.label_level.text = " No." + u.GameData.levelNum + " ", window.gameguide = u.GameData.levelNum, this.list_reward.visible = !1, this.box_restart.visible = !1, this.image_guide.visible = !1
                }, t.prototype.onRender = function (e) {
                    e && (e.dataSource && e.setInfo(e.dataSource), e.image_gunicon.on(Laya.Event.MOUSE_DOWN, this, this.onClickMouseDown, [e]), this._gundata.push(e))
                }, t.prototype.onTouchBuy = function () {
                    if (console.log("onTouchBuy"), this.stopCheckIsIdle(), o.Utils.checkCanBuyCar(this._cheapestGun.costGold)) {
                        u.GameData.buyGunCount++, console.log("首页-点击购买"), o.Utils.playSound("StoreBuy.mp3"), o.Utils.updateGold(-this._cheapestGun.costGold);
                        var e = Laya.Utils.parseInt(Laya.LocalStorage.getItem("MaxGunId")),
                            t = !1;
                        console.log("GameData.buyGunCount = ", u.GameData.buyGunCount), console.log("GameData.buyGunCountArr = ", u.GameData.buyGunCountArr), u.GameData.buyGunCountArr && u.GameData.buyGunCountArr.length > 0 && u.GameData.buyGunCount > 0 && e >= 5 && 0 == d.httpSend.auditState && u.GameData.buyGunCount == u.GameData.buyGunCountArr[0] && (t = !0, u.GameData.buyGunCountArr.splice(0, 1), u.GameData.buyGunCount = 0), t ? Laya.Scene.open("game/UpGunOfVideo.scene", !1, this._cheapestGun.id) : (o.Utils.resetBuyGunTimes(this._cheapestGun.id), this.onBuyBack()), this.stopGuideTimeLine(), this._guidebool && (this._guidebool = !1, this.guideComposeGun())
                    }
                }, t.prototype.ontouchShop = function () {
                    console.log("ontouchShop"), 
                        console.log("首页-点击商店"), o.Utils.playSound("Click.mp3"), Laya.Scene.open("game/Shop.scene", !1), window.inshop = !0, this.stopGuideTimeLine(), this.stopCheckIsIdle(), YYGGames.gameBox.visible = !1, window.musicBtn.visible = !1
                }, t.prototype.ontouchStart = function () {
                    console.log("ontouchStart"), YYGGames.showInterstitial(() => {
                        console.log("首页-点击开始"), this.stopCheckIsIdle(), o.Utils.playSound("Click.mp3"), Laya.Scene.open("game/Play.scene", !0), this.stopGuideTimeLine(), YYGGames.gameBox.visible = !1, window.musicBtn.visible = !1
                    })
                }, t.prototype.onTouchSignin = function () {
                    console.log("onTouchSignin"), 
                        console.log("首页-点击签到"), this.stopCheckIsIdle(), o.Utils.playSound("Click.mp3"), Laya.Scene.open("game/Signin.scene", !1), YYGGames.gameBox.visible = !1, window.musicBtn.visible = !1
                }, t.prototype.ontouchTalent = function () {
                    console.log("ontouchTalent"),
                        console.log("首页-点击天赋"), this.stopCheckIsIdle(), o.Utils.playSound("Click.mp3"), Laya.Scene.open("game/Talent.scene", !1), this.stopGuideTimeLine(), YYGGames.gameBox.visible = !1, window.musicBtn.visible = !1
                }, t.prototype.onTouchRanking = function () {
                    console.log("onTouchRanking"), console.log("首页-点击排行"), this.stopCheckIsIdle(), o.Utils.playSound("Click.mp3"), Laya.Scene.open("game/Ranking.scene", !1), YYGGames.gameBox.visible = !1, window.musicBtn.visible = !1
                }, t.prototype.onTOuchChangeGun = function () {
                    YYGGames.showInterstitial(() => {
                        console.log("onTOuchChangeGun"), console.log("首页-点击换枪"), this.stopCheckIsIdle(), o.Utils.playSound("Click.mp3"), Laya.Scene.open("game/ChangeGun.scene", !1), YYGGames.gameBox.visible = !1, window.musicBtn.visible = !1
                    })
                }, t.prototype.onTouchShare = function () {
                    if (h.wxMgr.isWx()) {
                        console.log("首页-点击分享");
                        var e = d.httpSend.shareImageData,
                            t = void 0;
                        t = e instanceof Array ? e[Math.floor(Math.random() * e.length)] : e, (new Date).getTime(), wx.shareAppMessage({
                            title: t.text,
                            imageUrl: t.url
                        })
                    }
                }, t.prototype.checkTodayHasSignIn = function () {
                    var e = o.Utils.checkTodayHasSignIn();
                    this.image_signinState.visible = !e, e ? this.anima_signin && this.anima_signin.stop() : this.anima_signin && this.anima_signin.play()
                }, t.prototype.checkTalentState = function () {
                    this.image_talentState.visible = o.Utils.checkTalentState(), o.Utils.checkTalentState() ? this.anima_talent && this.anima_talent.play() : this.anima_talent && this.anima_talent.stop()
                }, t.prototype.stopCheckIsIdle = function () {
                    Laya.timer.clear(this, this.guideComposeGun), this.stopGuideTimeLine()
                }, t.prototype.startCheckIsIdle = function () {
                    this.stopCheckIsIdle(), Laya.timer.once(2e3, this, this.guideComposeGun)
                }, t.prototype.guideComposeGun = function () {
                    if (!(window.gameguide > 1)) {
                        for (var e = [], t = !1, a = Laya.LocalStorage.getJSON("armouryGuns"), i = 0; i < a.length; i++)
                            for (var n = a[i].split("_"), l = i + 1; l < a.length; l++) {
                                var u = a[l].split("_");
                                if (40 != +n[1] && +n[1] == +u[1]) {
                                    e.push(+n[0]), e.push(+u[0]), t = !0;
                                    break
                                }
                            }
                        if (t) {
                            this.stopGuideTimeLine();
                            var h = this._gundata[e[0]],
                                d = this._gundata[e[1]],
                                c = h.localToGlobal(new Laya.Point(0, 0)),
                                m = d.localToGlobal(new Laya.Point(0, 0));
                            this.image_guide.visible = !0, this.image_guide.pos(c.x + h.width / 2, c.y + h.height / 3), this._guideTimeLine = new Laya.TimeLine, this._guideTimeLine.to(this.image_guide, {
                                x: m.x + h.width / 2,
                                y: m.y + h.height / 3
                            }, 500).to(this.image_guide, {
                                x: m.x + h.width / 2,
                                y: m.y + h.height / 3
                            }, 200).to(this.image_guide, {
                                x: c.x + h.width / 2,
                                y: c.y + h.height / 3
                            }, 10).to(this.image_guide, {
                                x: c.x + h.width / 2,
                                y: c.y + h.height / 3
                            }, 200), this._guideTimeLine.play(0, !0)
                        } else o.Utils.checkCanBuyCar(this._cheapestGun.costGold, !1) ? r.default.getInstance.event(s.EventDef.NeedGuide, 2) : r.default.getInstance.event(s.EventDef.NeedGuide, 3)
                    }
                }, t.prototype.setGuide = function (e) {
                    if (!(window.gameguide > 1)) {
                        var t;
                        switch (console.log("setGuide type = ", e), this.stopGuideTimeLine(), Number(e)) {
                            case 1:
                                t = this.box_talent.localToGlobal(new Laya.Point(0, 0)), t.x += this.box_talent.width / 2, t.y += this.box_talent.height / 2;
                                break;
                            case 2:
                                t = this.btn_Buy.localToGlobal(new Laya.Point(0, 0)), console.log("pos1 = ", t), t.x += this.btn_Buy.width / 2, t.y += this.btn_Buy.height / 2;
                                var a = Laya.LocalStorage.getItem("guidebool");
                                a || (this._guidebool = !0, Laya.LocalStorage.setItem("guidebool", "1"));
                                break;
                            case 3:
                                t = this.btn_Start.localToGlobal(new Laya.Point(0, 0)), t.x += this.btn_Start.width / 2, t.y += this.btn_Start.height / 2
                        }
                        this.image_guide.visible = !0, this.image_guide.pos(t.x, t.y), this._guideTimeLine = new Laya.TimeLine, this._guideTimeLine.to(this.image_guide, {
                            x: t.x + 35,
                            y: t.y - 33
                        }, 50).to(this.image_guide, {
                            x: t.x,
                            y: t.y
                        }, 250).to(this.image_guide, {
                            x: t.x,
                            y: t.y
                        }, 200), this._guideTimeLine.play(0, !0), console.log("pos = ", t)
                    }
                }, t.prototype.upGunOfVideo = function (e) {
                    console.log("upGunOfVideo id = ", e), o.Utils.resetBuyGunTimes(e), this.onBuyBack(e)
                }, t.prototype.stopGuideTimeLine = function () {
                    this.image_guide.visible = !1, this._guideTimeLine && (this._guideTimeLine.offAll(), this._guideTimeLine.destroy(), this._guideTimeLine = null)
                }, t.prototype.onBuyBack = function (e) {
                    for (var t = 0; t < this._gundata.length; t++) {
                        var a = this._gundata[t];
                        if (!a.gunConf) {
                            e ? a.setInfo(e) : a.setInfo(this._cheapestGun.id);
                            break
                        }
                    }
                    this.updateBuyGun(), this.resetArmouryGuns(), this.updateGold(), console.log("this._guidebool = ", this._guidebool), this._guidebool || (console.log("this._guidebool1111 = ", this._guidebool), this.startCheckIsIdle())
                }, t.prototype.updateBuyGun = function () {
                    this.getCheapestGun();
                    var e = l.GunMetadata.getInstance().getGunById(this._cheapestGun.id);
                    this.image_buyGun.skin = e.icon, this.label_buyGold.text = o.Utils.getFormatMoneyStr(this._cheapestGun.costGold) + " "
                }, t.prototype.getCheapestGun = function () {
                    for (var e = l.GunMetadata.getInstance(), t = Laya.Utils.parseInt(Laya.LocalStorage.getItem("MaxGunId")), a = e.getGunById(t), i = [], n = e.getMetadata(), s = Laya.LocalStorage.getJSON("goldBuyGunTimes"), r = 0; r < n.length; r++)
                        if (+n[r].level <= +a.unlock_buy_gold_level && +n[r].level >= a.id - 9) {
                            var u = +n[r].buy_gold,
                                h = +n[r].add_gold,
                                d = Math.floor(u * Math.pow(h, +s[r] - 1)),
                                c = Math.floor(d / Math.pow(2, +n[r].level - 1)),
                                m = {
                                    id: +n[r].id,
                                    goldPrice: c,
                                    costGold: d
                                };
                            i.push(m)
                        } i = i.sort(this.sortByPrice), this._cheapestGun = i[0], this._cheapestGun.costGold = Math.floor(this._cheapestGun.costGold * o.Utils.getTalentDataById(1))
                }, t.prototype.sortByPrice = function (e, t) {
                    return e && !t ? -1 : !e && t ? 1 : e && t ? e.goldPrice < t.goldPrice ? -1 : e.goldPrice > t.goldPrice ? 1 : 0 : 0
                }, t.prototype.onClickMouseDown = function (e, t) {
                    console.log("🚀 ~ file: bundle.js:2343 ~ onClickMouseDown:", e, t), o.Utils.playSound("Click.mp3"), this._tmpGun = e, console.log("🚀 ~ file: bundle.js:2326 ~ _tmpGun:", e), this._moveImg && this._moveImg.removeSelf(), this._moveImg = new Laya.Image, this._moveImg.skin = this._tmpGun.image_gunicon.skin, this._moveImg.width = .65 * this._tmpGun.image_gunicon.width, this._moveImg.height = .65 * this._tmpGun.image_gunicon.height, this._moveImg.anchorX = .5, this._moveImg.anchorY = .5;
                    var a = this._tmpGun.image_gunicon.localToGlobal(new Laya.Point(this._tmpGun.image_gunicon.width / 2, this._tmpGun.image_gunicon.height / 2));
                    this._moveImg.pos(a.x, a.y), this.addChild(this._moveImg), this._moveImg.startDrag();
                    for (var i = 0; i < this._gundata.length; i++) {
                        var n = this._gundata[i];
                        n.setState(), n.gunConf && n.gunConf == this._tmpGun.gunConf && n.setState(!0)
                    }
                    this._moveImg.on(Laya.Event.DRAG_MOVE, this, this.onDragMove), this._moveImg.on(Laya.Event.DRAG_END, this, this.onDragEnd)
                }, t.prototype.onDragMove = function () {
                    var e = new Laya.Rectangle(this._moveImg.x - 40, this._moveImg.y - 25, 80, 50),
                        t = this.btn_Remove.localToGlobal(new Laya.Point(0, 0)),
                        a = new Laya.Rectangle(t.x, t.y, this.btn_Remove.width, this.btn_Remove.height);
                    e.intersects(a) ? this.anima_renove.play() : this.anima_renove.stop()
                }, t.prototype.onDragEnd = function () {
                    console.log("🚀 ~ file: bundle.js:2353 ~ onDragEnd:");
                    var e = !1;
                    this.anima_renove && this.anima_renove.stop();
                    for (var t = 0; t < this._gundata.length; t++) {
                        var a = this._gundata[t];
                        a.setState()
                    }
                    var i = Laya.Utils.parseInt(Laya.LocalStorage.getItem("MaxGunId")),
                        n = !1,
                        s = new Laya.Rectangle(this._moveImg.x - 40, this._moveImg.y - 25, 80, 50),
                        l = this.btn_Remove.localToGlobal(new Laya.Point(0, 0)),
                        r = new Laya.Rectangle(l.x, l.y, this.btn_Remove.width, this.btn_Remove.height);
                    if (s.intersects(r)) {
                        if (console.log("🚀 ~ file: bundle.js:2366 ~ intersects:", r), this._tmpGun.gunConf.id == i) return o.Utils.showMessage("Not for sale"), this._moveImg.removeSelf(), void(this._moveImg = null);
                        o.Utils.updateGold(+this._tmpGun.gunConf.sell_gold), this._tmpGun.reset(), n = !0, this.playSk(), o.Utils.playSound("Sell.mp3")
                    }
                    n || console.log("🚀 ~ file: bundle.js:2376 ~ n:", n);
                    for (t = 0; t < this._gundata.length; t++) {
                        a = this._gundata[t];
                        var u = a.image_touch.localToGlobal(new Laya.Point(0, 0)),
                            h = new Laya.Rectangle(u.x, u.y, a.image_touch.width, a.image_touch.height);
                        if (s.intersects(h)) {
                            if (this._tmpGun == a) {
                                console.log("同一个，跳过");
                                continue
                            }
                            if (a.gunConf)
                                if (this._tmpGun.gunConf == a.gunConf) {
                                    if (40 == a.gunConf.id) {
                                        YYGGames.showTip("Max level, can't synthesize");
                                        continue
                                    }
                                    this._tmpGun.reset();
                                    var d = +a.gunConf.id;
                                    a.setInfo(d + 1, !1), a.playComposeAction(d), o.Utils.playSound("ComboSuccess.mp3"), d + 1 > i && (Laya.Scene.open("game/UnLockGun.scene", !1, d + 1), o.Utils.playSound("EndingCheer.mp3"), this.checkChangeCarSkin(d + 1), e = !0), this.stopGuideTimeLine()
                                } else {
                                    var c = a.gunConf.id;
                                    a.setInfo(this._tmpGun.gunConf.id), this._tmpGun.setInfo(c)
                                }
                            else a.setInfo(this._tmpGun.gunConf.id), this._tmpGun.reset();
                            break
                        }
                    }
                    this._moveImg.removeSelf(), this._moveImg = null, this.updateBuyGun(), this.resetArmouryGuns(), e || this.startCheckIsIdle()
                }, t.prototype.checkChangeCarSkin = function (e) {
                    console.log("🚀 ~ file: bundle.js:2423 ~ checkChangeCarSkin:", e);
                    var t = Laya.Utils.parseInt(Laya.LocalStorage.getItem("MaxGunId"));
                    e > t && (console.log("合成更高级别的枪", "level", "" + e), Laya.LocalStorage.setItem("MaxGunId", e.toString()), Laya.LocalStorage.setItem("useGunId", e.toString()), this.updateCarSkin(), console.log("合成等级:", e))
                }, t.prototype.resetArmouryGuns = function () {
                    console.log("🚀 ~ file: bundle.js:2417 ~ resetArmouryGuns:");
                    for (var e = [], t = 0; t < this._gundata.length; t++) {
                        var a = this._gundata[t];
                        if (a.gunConf) {
                            var i = t + "_" + a.gunConf.id;
                            e.push(i)
                        }
                    }
                    Laya.LocalStorage.setJSON("armouryGuns", e)
                }, t.prototype.updateGold = function () {
                    var e = Math.floor(o.Utils.getGarageIncome() * o.Utils.getTalentDataById(2));
                    this.lable_addMoney.text = "+" + o.Utils.getFormatMoneyStr(e) + "/s";
                    var t = Laya.Utils.parseInt(Laya.LocalStorage.getItem("totalGold"));
                    this.label_allMoney.text = o.Utils.getFormatMoneyStr(t) + " "
                }, t.prototype.updateDiamond = function () {
                    console.log("🚀 ~ file: bundle.js:2445 ~ updateDiamond:"), h5splash.hideLoading(), o.Utils.playMusic();
                    var e = Laya.Utils.parseInt(Laya.LocalStorage.getItem("totalDiamond"));
                    this.label_allDiamond.text = e + " "
                }, t.prototype.initRandomData = function () {
                    console.log("🚀 ~ file: bundle.js:2461 ~ initRandomData:");
                    var e = Laya.LocalStorage.getJSON("randomList");
                    if (e);
                    else {
                        var t = Laya.LocalStorage.getJSON("talentLevel");
                        if (t && t.length > 0)
                            for (var a = 0; a < t.length; a++)
                                if (a + 1 == 9) {
                                    t[a];
                                    break
                                }
                    }
                }, t.prototype.playSk = function () {
                    var e = this;
                    this.sk.visible = !0, this.sk.play(0, !1), Laya.timer.once(2e3, this, function () {
                        e.sk.visible = !1
                    })
                }, t.prototype.setAdData = function () {
                    u.GameData.adData = null, u.GameData.adData = l.OtherMetadata.getInstance().getAdData(), u.GameData.adData && (this.box_todayGame.visible = !0, this.list.visible = !0, this.image_icon.skin = u.GameData.adData[1].icon, this.box_todayGame.on(Laya.Event.CLICK, this, o.Utils.navigateToMiniProgram.bind(this, u.GameData.adData[0].appid)), this.list.array = u.GameData.adData, this.list.renderHandler = new Laya.Handler(this, function (e) {
                        e && e.dataSource && e.init()
                    }))
                }, t
            }(i.ui.game.MainUI));
        a.default = c
    }, {
        "../data/Enum": 5,
        "../data/EventMgr": 6,
        "../data/GameData": 7,
        "../data/Metadata": 8,
        "../ui/layaMaxUI": 40,
        "../utils/HttpSend": 41,
        "../utils/Utils": 43,
        "../utils/WxManager": 44,
        "./GunItem": 18
    }],
    22: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../ui/layaMaxUI"),
            n = e("../utils/Utils"),
            o = (e("../utils/WxManager"), e("../ad/BannerAd")),
            s = e("../data/EventMgr"),
            l = e("../data/Enum"),
            r = e("../ad/VideoRw"),
            u = e("../data/GameData"),
            h = function (e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.num = 0, t._modelType = 1, n.Utils.setResize(t), t
                }
                return __extends(t, e), t.prototype.onEnable = function () {
                    var e = this;
                    this.label_money.visible = !1, this.button_only.on(Laya.Event.CLICK, this, this.onTouchGet, [1]), this.button_double.on(Laya.Event.CLICK, this, this.onTouchGet, [2]), this.box_middle.x = this.width / 2, this.box_middle.y = this.height / 2, this.button_close.visible = !1, this.updateGold(), s.default.getInstance.on(l.EventDef.UpdateGold, this, this.updateGold), this.button_only.visible = !0, this.button_double.visible = !1, this.button_close.on(Laya.Event.CLICK, this, this.onTouchClose), r.default.init(function () {
                        e._modelType = n.Utils.videoIconInit(e.image_video, u.GameData.offlineModelType, "离线金币界面")
                    }, function () {
                        e._modelType = n.Utils.videoIconInit(e.image_video, u.GameData.offlineModelType, "离线金币界面")
                    })
                }, t.prototype.onOpened = function (e) {
                    e && (this.label_money.visible = !0, this.label_money.text = "金币x" + n.Utils.getFormatMoneyStr(e) + " ", this.num = e), o.banner.init()
                }, t.prototype.onDisable = function () {
                    this.sk.stop(), o.banner.destory(), s.default.getInstance.off(l.EventDef.UpdateGold, this, this.updateGold), s.default.getInstance.event(l.EventDef.CloseDialog)
                }, t.prototype.onTouchGet = function (e) {
                    var t = this;
                    console.log("离线奖励-领取", "type", e), n.Utils.playSound("Click.mp3"), 1 == e ? YYGGames.showInterstitial(() => {
                        n.Utils.updateGold(this.num), this.anima_move && (this.anima_move.play(0, !1), this.anima_move.once(Laya.Event.COMPLETE, this, function () {
                            t.button_close.visible = !0, t.button_only.visible = !1
                        }), this.button_double.visible = !0), Laya.Scene.open("game/DiaAndGlod.scene", !1, 1)
                    }) : n.Utils.shareByMode(this._modelType, function () {
                        YYGGames.showReward(() => {
                            t.close(), n.Utils.updateGold(t.num), Laya.Scene.open("game/DiaAndGlod.scene", !1, 1), console.log("视频完整播放", "scene", "离线奖励界面")
                        })
                    })
                }, t.prototype.updateGold = function () {
                    var e = Laya.Utils.parseInt(Laya.LocalStorage.getItem("totalGold"));
                    this.label_allMoney.text = n.Utils.getFormatMoneyStr(e) + " "
                }, t.prototype.onTouchClose = function () {
                    console.log("🚀 ~ file: bundle.js:2734 ~ onTouchClose:"), n.Utils.playSound("Click.mp3"), this.close(), YYGGames.gameBox.visible = !0, window.musicBtn.visible = !0
                }, t
            }(i.ui.game.OfflineMoneyUI);
        a.default = h
    }, {
        "../ad/BannerAd": 3,
        "../ad/VideoRw": 4,
        "../data/Enum": 5,
        "../data/EventMgr": 6,
        "../data/GameData": 7,
        "../ui/layaMaxUI": 40,
        "../utils/Utils": 43,
        "../utils/WxManager": 44
    }],
    23: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../ui/layaMaxUI"),
            n = e("../utils/Utils"),
            o = e("../data/EventMgr"),
            s = e("../data/Enum"),
            l = e("../data/GameData"),
            r = function (e) {
                function t() {
                    var t = e.call(this) || this;
                    return t._diamondNum = 0, t._score = 0, t._lifeType = 1, t.randomArr = [], n.Utils.setResize(t), t
                }
                return __extends(t, e), t.prototype.onDisable = function () {
                    o.default.getInstance.off(s.EventDef.UpdataLife, this, this.updateLife), o.default.getInstance.off(s.EventDef.UpdateProgress, this, this.UpdateProgress), o.default.getInstance.off(s.EventDef.UpdateLifeProgress, this, this.UpdateLifeProgress), o.default.getInstance.off(s.EventDef.UpdateDiamondOnPlay, this, this.UpdateDiamond), o.default.getInstance.off(s.EventDef.PlayBossSk, this, this.PlayBossSk), o.default.getInstance.off(s.EventDef.Revive, this, this.Revive), o.default.getInstance.off(s.EventDef.UpdateTime, this, this.UpdateTime), this.anima_tipmove && this.anima_tipmove.stop(), this.anima_time && this.anima_time.stop()
                }, t.prototype.onEnable = function () {
                    window.x23 = this, console.log("PlayData");
                    var e = "" + l.GameData.levelNum;
                    l.GameData.levelNum < 10 && (e = "0" + l.GameData.levelNum), this.label_nowLevel.text = e + " ", o.default.getInstance.on(s.EventDef.UpdataLife, this, this.updateLife), o.default.getInstance.on(s.EventDef.UpdateProgress, this, this.UpdateProgress), o.default.getInstance.on(s.EventDef.UpdateLifeProgress, this, this.UpdateLifeProgress), o.default.getInstance.on(s.EventDef.UpdateDiamondOnPlay, this, this.UpdateDiamond), o.default.getInstance.on(s.EventDef.PlayBossSk, this, this.PlayBossSk), o.default.getInstance.on(s.EventDef.Revive, this, this.Revive), o.default.getInstance.on(s.EventDef.UpdateTime, this, this.UpdateTime), this._diamondNum = 0, this._score = 0, this.label_diamond.text = "0 ", this.image_life.alpha = .5, this.image_level.visible = !1, this.sk_boss.visible = !1, this.sk_boss.stop(), this.list_life.visible = !1, n.Utils.isFullScreen() ? this.box_top.y = 50 : this.box_top.y = 0, this.box_bosslife.visible = !1, this.box_life.visible = !0, this.image_bossicon.visible = !1, this.PlayAimpoint(), this.image_tips.visible = !1, this.image_hit.visible = !1, this.randomArr = [], this.image_hit.width = this.stage.width, this.image_hit.height = this.stage.height, this.label_time.text = "Countdown:" + l.GameData._time + " ", this.label_time2.visible = !1
                }, t.prototype.onOpened = function (e) {
                    e && e.bossdata ? this.image_bossicon.skin = "ui/icon_BOSS.png" : this.image_bossicon.skin = "ui/icon_BOSS_zuanshi.png", this.image_bossicon.visible = !0
                }, t.prototype.updateLife = function () {
                    var e = this;
                    this.image_hit.visible = !0, this.anima_hit.play(), this.anima_hit.once(Laya.Event.COMPLETE, this, function () {
                        console.log("动画播放完成"), e && (e.image_hit.visible = !1, e.anima_hit.stop())
                    })
                }, t.prototype.UpdateTime = function () {
                    console.log("UpdateTime"), l.GameData._time < 0 && (l.GameData._time = 0), this.anima_time.stop(), this.label_time2.visible = !1, this.image_hit.visible = !1, this.anima_hit.stop(), this.label_time.visible = !0, this.label_time.text = "Countdown:" + l.GameData._time + " ", l.GameData._time > 0 && l.GameData._time <= 5 && (this.label_time.visible = !1, this.label_time2.visible = !0, this.label_time2.text = l.GameData._time + " ", this.anima_time.play(0, !1), this.image_hit.visible = !0, this.anima_hit.play(0, !1))
                }, t.prototype.UpdateProgress = function (e) {
                    e && (this.image_aimpoint.visible = !1, this.image_level.visible = !0, this.image_level.scrollRect = new Laya.Rectangle(0, 0, this.image_level.width * (e.smallLevelNum / (e.allLevel - 1)), this.image_level.height))
                }, t.prototype.UpdateLifeProgress = function (e) {
                    console.log("🚀 ~ file: bundle.js:3060 ~ UpdateLifeProgress:"), e && (e.type && 2 == e.type && (this.image_aimpoint.visible = !0, this._lifeType = 0, e.lifeType && (this._lifeType = e.lifeType), this.box_life.visible = !1, this.box_bosslife.visible = !1, 1 == this._lifeType ? (this.box_life.visible = !0, this.image_life.width = this.image_life_bg.width, this.image_life.scrollRect = new Laya.Rectangle(0, 0, this.image_life.width, this.image_life.height)) : 2 == this._lifeType && (this.box_bosslife.visible = !0, this.image_bosslife.width = this.image_bosslife_bg.width, this.image_bosslife.scrollRect = new Laya.Rectangle(0, 0, this.image_bosslife.width, this.image_bosslife.height))), e.allLife && this.createRectangle(e._targetLife, e.allLife, e.damage, e.damage / 20), e.hit && this.createDamageShow(e.hit))
                }, t.prototype.createRectangle = function (e, t, a, i) {
                    var n = this;
                    if (a -= i, 1 == this._lifeType) {
                        var o = this.image_life.width * ((e + a) / t);
                        this.image_life.scrollRect = new Laya.Rectangle(0, 0, o, this.image_life.height), setTimeout(function () {
                            a >= 0 ? n.createRectangle(e, t, a, i) : 0 == e && setTimeout(function () {
                                n && n.image_aimpoint && (n.image_aimpoint.visible = !1, n.box_life.visible = !1)
                            }, 150)
                        }, 5)
                    } else if (2 == this._lifeType) {
                        o = this.image_bosslife.width * ((e + a) / t);
                        this.image_bosslife.scrollRect = new Laya.Rectangle(0, 0, o, this.image_bosslife.height), setTimeout(function () {
                            a >= 0 ? n.createRectangle(e, t, a, i) : 0 == e && setTimeout(function () {
                                n && n.image_aimpoint && (n.image_aimpoint.visible = !1, n.box_bosslife.visible = !1)
                            }, 150)
                        }, 5)
                    }
                    if (0 == e && 0 > a) {
                        this.image_tips.visible = !0;
                        for (var s = !0, l = "tips/title00_01.png"; s;) {
                            var r = Math.ceil(10 * Math.random());
                            if (this.randomArr && this.randomArr.length > 0 && this.randomArr.length < 11)
                                for (var u = !1, h = 0; h < this.randomArr.length && r != this.randomArr[h]; h++) h == this.randomArr.length - 1 && (u = !0), u && (this.randomArr.push(r), s = !1, l = 10 > r ? "tips/title00_0" + r + ".png" : "tips/title00_" + r + ".png");
                            else this.randomArr.push(r), s = !1, l = 10 > r ? "tips/title00_0" + r + ".png" : "tips/title00_" + r + ".png"
                        }
                        this.image_tips.skin = l, this.anima_tipmove.play(), this.anima_tipmove.once(Laya.Event.COMPLETE, this, function () {
                            console.log("动画播放完成"), n && (n.image_tips.visible = !1, n.anima_tipmove.stop())
                        })
                    }
                }, t.prototype.UpdateDiamond = function (e) {
                    this._diamondNum += 4 * e, this.label_diamond.text = this._diamondNum + " "
                }, t.prototype.PlayBossSk = function () {
                    var e = this;
                    console.log("1111111"), this.sk_boss.visible = !0, this.sk_boss.play("idle", !1), setTimeout(function () {
                        e.sk_boss.visible = !1, e.sk_boss.stop()
                    }, 1300)
                }, t.prototype.PlayAimpoint = function () {
                    this.sk_aimpoint.visible = !1
                }, t.prototype.Revive = function () {
                    this.label_time2.visible = !1, this.label_time.visible = !0, this.label_time.text = "Countdown:" + l.GameData._time + " "
                }, t.prototype.createDamageShow = function (e) {
                    console.log("🚀 ~ file: bundle.js:3158 ~ createDamageShow:");
                    var t = this,
                        a = 20 * Math.random() - 10,
                        i = new Laya.Label;
                    this.addChild(i), i.text = "-" + Math.floor(e) + " ", i.x = this.width / 2 + a, i.y = this.height / 2 - 100, i.fontSize = 36, i.color = "#ff0400", i.bold = !0, i.anchorX = .5, i.anchorY = .5, i.stroke = 1.5, i.strokeColor = "#ffffff", Laya.Tween.to(i, {
                        y: this.height / 2 - 170
                    }, 200, Laya.Ease.sineInOut), Laya.Tween.to(i, {
                        y: this.height / 2 - 220
                    }, 200, Laya.Ease.strongInOut, Laya.Handler.create(this, function () {
                        t && t.removeChild(i)
                    }), 400)
                }, t
            }(i.ui.game.PlayDataUI);
        a.default = r
    }, {
        "../data/Enum": 5,
        "../data/EventMgr": 6,
        "../data/GameData": 7,
        "../ui/layaMaxUI": 40,
        "../utils/Utils": 43
    }],
    24: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../ui/layaMaxUI"),
            n = e("../utils/Utils"),
            o = e("../data/Enum"),
            s = e("../data/Metadata"),
            l = e("../script/ObstacleBoxScript"),
            r = e("../script/ObstacleScript"),
            u = e("../data/EventMgr"),
            h = e("../data/GameData"),
            d = e("../utils/WxManager"),
            c = function (e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.outs = new Array, t.hitResult = new Laya.HitResult, t._obstacleArr = [], t._obstacleTypeArr = [], t._obstacleBoxScriptcleArr = [], t._bgArr = [], t.isTouch = !1, t.isTimeTouch = !1, t.smallLevelNum = 0, t._targetLife = 0, t._lifeNum = 3, t._allLife = 0, t._moneyNum = 0, t._reviveNum = 0, t.isCanTouch = !0, t.lifeType = 0, t.isgoon = !1, n.Utils.setResize(t), t
                }
                return __extends(t, e), t.prototype.onEnable = function () {
                    var e = this;
                    Laya.Scene3D.load("unity/LayaScene_main/Conventional/main.ls", Laya.Handler.create(this, function (t) {
                        t && (e._gameScene = t), e.onLoadComplete()
                    })), Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUp), u.default.getInstance.on(o.EventDef.Revive, this, this.Revive), this._sceneData = null, this._moneyNum = 0, this._reviveNum = 0, h.GameData.isPlay = !0, h.GameData._time = 30, h.GameData._time += n.Utils.getTalentDataById(6), this.updateTime(h.GameData._time)
                }, t.prototype.onDisable = function () {
                    console.log("playScene onDisable"), this.removeObstacleAllTween(this._obstacleArr, !0), this.removeAllTween(this._obstacleBoxScriptcleArr, !0), this._obstacleBox.destroyChildren(), this._dankongEffect.destroyChildren(), this._bossShowEffect.destroyChildren(), this._effectShootScars.destroyChildren(), this._diamondEffect.destroyChildren(), this._gameScene.destroyChildren(), this._bomb.destroyChildren(), this._boss && this._boss.destroyChildren(), this._gameScene = null, Laya.timer.clearAll(this), u.default.getInstance.off(o.EventDef.Revive, this, this.Revive), Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onMouseUp), e.prototype.destroy.call(this)
                }, t.prototype.onLoadComplete = function () {
                    this.scene.addChild(this._gameScene), this._camera = this._gameScene.getChildByName("Main Camera"), this._light = this._gameScene.getChildByName("Directional Light"), this._light.shadow = !0, this._light.shadowDistance = 30, this._light.shadowResolution = 1024, this._light.shadowPSSMCount = 1, this._light.shadowPCFType = 1, this._sceneData = null, this._gunBox = this._gameScene.getChildByName("Gun_Ponit"), this._obstacleBox = this._gameScene.getChildByName("obstacleBox"), this._target = this._gameScene.getChildByName("bazi"), this._bg = this._gameScene.getChildByName("sence_01"), this._bomb = this._gameScene.getChildByName("bazi_sui"), this._target.active = !1, this._target.transform.localPositionZ = 0, this.setTargetAnima(), this._effectShoot = this._gameScene.getChildByName("effect_shoot"), this._startPosition = this._gameScene.getChildByName("startPosition"), this._effectShootScars = this._gameScene.getChildByName("effect_shoot2"), this._bossShowEffect = this._gameScene.getChildByName("effect_bossshow"), this._diamondEffect = this._gameScene.getChildByName("effect_box_099"), this._dankongEffect = this._gameScene.getChildByName("effect_dankong"), this._bg.active = !1, this._dankongEffect.active = !1, h.GameData._gateConf = s.ConfigMetadata.getInstance().getGateById(h.GameData.levelNum), this._sceneData = s.SceneMetadata.getInstance().getSceneById(h.GameData._gateConf.scene), Laya.Scene.open("game/PlayData.scene", !1, h.GameData._gateConf), this.createObstacleBox(this.smallLevelNum), this._target.meshRenderer.castShadow = !0, this._bombanimator = this._bomb.getComponent(Laya.Animator), this._bombanimator.speed = 0, this.initGunData(), this._targetLife = h.GameData._gateConf.targetLife, this._allLife = h.GameData._gateConf.targetLife, this._effectShoot.active = !1, this._effectShootScars.active = !1, this._bossShowEffect.active = !1, this._diamondEffect.active = !1, this._bomb.active = !1, this.initSceneData();
                    var e = this._gameScene.getChildByName("effect_banzisui");
                    e.active = !1, this._bomb1 = Laya.Pool.getItemByCreateFun("effectBomb", function () {
                        return Laya.Sprite3D.instantiate(e)
                    }), this._bomb1.active = !1, d.wxMgr.aldStage(1, h.GameData.levelNum)
                }, t.prototype.initGunData = function () {
                    Laya.LocalStorage.getItem("useGunId") && (h.GameData.useGunId = Number(Laya.LocalStorage.getItem("useGunId"))), h.GameData.useGunData = s.GunMetadata.getInstance().getGunById(h.GameData.useGunId), h.GameData.useGunData && (this._useGun = this._gunBox.getChildByName("Gun_P_" + h.GameData.useGunData.type), this._useGun.active = !0, this._gun = new Laya.MeshSprite3D, Laya.MeshSprite3D.load("unity/gunModel/gun/Conventional/" + h.GameData.useGunData.model, new Laya.Handler(this, function (e) {
                        this._gun = e.clone(), this._useGun.addChild(this._gun), this._effectBox = this._gun.getChildByName("effect_gunP"), this._gun.meshRenderer.castShadow = !0, this.setEffectShoot(this._effectBox.transform.position, !0)
                    })), this._gunanimator = this._useGun.getComponent(Laya.Animator), this._gunanimator.speed = 0)
                }, t.prototype.initSceneData = function () {
                    var e = this._sceneData.skyColour,
                        t = n.Utils.transferColorToRgb(e);
                    this._camera.clearColor = new Laya.Vector4(t[0], t[1], t[2], 1), this.createBg(this.smallLevelNum)
                }, t.prototype.createObstacleBox = function (e) {
                    if (this._obstacleArr = [], this._obstacleBoxScriptcleArr = [], this._obstacleTypeArr = [], this._moneyArr = [], h.GameData._gateConf && h.GameData._gateConf.obstacleData && e < h.GameData._gateConf.obstacleData.length && h.GameData._gateConf.obstacleData[e]) {
                        var t = s.ConfigMetadata.getInstance().getObstacleById(h.GameData._gateConf.obstacleData[e]);
                        this._obstacleBox && (this._obstacleBox.active = !0);
                        var a = void 0;
                        a = Laya.Sprite3D.instantiate(this._obstacleBox), a.removeChildren(), this._gameScene.addChild(a), a.transform.localPositionZ = 10 * -e, this._obstacleBox.transform.localPositionZ = 30;
                        var i = a.getComponent(l.default);
                        i && i.destroy(), i = a.addComponent(l.default), i.init(t, e, h.GameData._gateConf), this._obstacleBoxScriptcleArr.push(i), this.createObstacle(t, e, a)
                    } else this._obstacleBox && (this._obstacleBox.active = !1)
                }, t.prototype.createObstacle = function (e, t, a) {
                    var i, o = this,
                        l = n.Utils.transferColorToRgb(this._sceneData.obstacleColour);
                    if (e && e.data.length > 0)
                        for (var u, d, c = function (c) {
                                var g = s.ConfigMetadata.getInstance().getModeDataById(e.data[c].modelData),
                                    p = "box_0";
                                p = 99 == g.modelType ? "box_0" + g.modelType : "box_001", m._obstacleBox.getChildByName(p), i = Laya.Pool.getItemByCreateFun("obstacle", function () {
                                    return Laya.Sprite3D.instantiate(o._obstacleBox.getChildByName(p))
                                }), i.active = !0, a.addChild(i), i && (i.meshRenderer.castShadow = !0, 99 != g.modelType && (n.Utils.changeModelByObstacleId(g.modelType, i), u = i.getComponent(Laya.PhysicsCollider), d = new Laya.MeshColliderShape, d.mesh = i.meshFilter.sharedMesh, u.colliderShape = d, i.meshRenderer.material.albedoColor && 99 != g.modelType && (i.meshRenderer.material.albedoColor = new Laya.Vector4(l[0], l[1], l[2], 1))), m.setGuideTip(i), r.ObstacleScript.init(e, c, t, i, h.GameData._gateConf), m._obstacleArr.push(i), m._obstacleTypeArr.push(g.modelType))
                            }, m = this, g = 0; g < e.data.length; g++) c(g)
                }, t.prototype.createBg = function (e) {
                    var t, a = n.Utils.transferColorToRgb(this._sceneData.modelColour);
                    if (0 == e)
                        for (var i = function (e) {
                                Laya.MeshSprite3D.load("unity/SceneModel/scene/Conventional/" + o._sceneData.model, new Laya.Handler(o, function (i) {
                                    t = Laya.Pool.getItemByCreateFun("bg", function () {
                                        return i.clone()
                                    }), t.meshRenderer.receiveShadow = !0, t.transform.localPositionZ = -10 * e + 10, this._gameScene.addChild(t), this._bgArr.push(t), t.meshRenderer.material.albedoColor && (t.meshRenderer.material.albedoColor = new Laya.Vector4(a[0], a[1], a[2], 1))
                                }))
                            }, o = this, s = 0; 9 > s; s++) i(s);
                    else Laya.MeshSprite3D.load("unity/SceneModel/scene/Conventional/" + this._sceneData.model, new Laya.Handler(this, function (i) {
                        t = Laya.Pool.getItemByCreateFun("bg", function () {
                            return i.clone()
                        }), t.transform.localPositionZ = 10 * -(e + 8) + 10, this._gameScene.addChild(t), this._bgArr.push(t), t.meshRenderer.material.albedoColor && (t.meshRenderer.material.albedoColor = new Laya.Vector4(a[0], a[1], a[2], 1))
                    }))
                }, t.prototype.setGunAnimator = function (e) {
                    var t = "";
                    1 == e ? t = "Gun_P_" + h.GameData.useGunData.type + "_idel" : 2 == e ? t = "Gun_P_" + h.GameData.useGunData.type + "_shoot" : 3 == e && (t = "Gun_P_" + h.GameData.useGunData.type + "_run"), this._gunanimator.speed = 1, this._gunanimator.play(t, 0, 0)
                }, t.prototype.onMouseDown = function () {
                    console.log("🚀 ~ file: bundle.js:3485 ~ onMouseDown:");
                    var e = this;
                    if (!this.isTouch && !this.isTimeTouch) {
                        this.isTouch = !0, this.isTimeTouch = !0;
                        var t = h.GameData.useGunData.type,
                            a = 250;
                        switch (+t) {
                            case 0:
                                a = 250;
                                break;
                            case 1:
                                a = 200;
                                break;
                            case 2:
                                a = 1e3;
                                break;
                            case 3:
                                a = 200;
                                break;
                            case 4:
                                a = 1e3
                        }
                        setTimeout(function () {
                            e.isTimeTouch = !1
                        }, a), this.isgoon = !0, 1 == t || 3 == t ? (this.setShootData(), Laya.timer.loop(90, this, this.setShootData)) : this.setShootData()
                    }
                }, t.prototype.onMouseUp = function () {
                    this.isCanTouch && (this.isTouch = !1), Laya.timer.clear(this, this.setShootData)
                }, t.prototype.setShootData = function () {
                    var e = this;
                    if (this.isgoon) {
                        this.setFireSound(), setTimeout(function () {
                            e.setCasingSound()
                        }, 200), this.outs = [], this.setEffectShoot(this._effectBox.transform.position), this.setGunAnimator(2);
                        var t = this._startPosition.transform.position,
                            a = new Laya.Ray(t, this._target.transform.position);
                        a.origin = t;
                        var i = new Laya.Vector3;
                        Laya.Vector3.subtract(this._target.transform.position, t, i), a.direction = i, h.GameData._gateConf.obstacleData.length > this.smallLevelNum + 1 || this._boss ? this._gameScene.physicsSimulation.rayCast(a, this.hitResult) : this._gameScene.physicsSimulation.rayCastAll(a, this.outs);
                        var n = !1;
                        if (0 != this.outs.length || this.hitResult.succeeded) {
                            if (this._moneyArr = [], 0 != this.outs.length)
                                for (var l = 0; l < this.outs.length; l++) this.outs[l] && (n = this.selectObstacle(this.outs[l]));
                            if (this.hitResult.succeeded && (n = this.selectObstacle(this.hitResult)), n) {
                                if (this.isTouch = !1, u.default.getInstance.event(o.EventDef.UpdataLife), this.setHitSound(), this.isgoon = !1, h.GameData._gateConf && h.GameData._gateConf.obstacleData && this.smallLevelNum < h.GameData._gateConf.obstacleData.length && h.GameData._gateConf.obstacleData[this.smallLevelNum]) {
                                    var r = s.ConfigMetadata.getInstance().getObstacleById(h.GameData._gateConf.obstacleData[this.smallLevelNum]);
                                    r && d.wxMgr.aldSendEvent("击中障碍物", "关卡", h.GameData.levelNum + "_" + this.smallLevelNum + "--" + r.id)
                                }
                            } else {
                                if (this._moneyArr && this._moneyArr.length > 0) {
                                    u.default.getInstance.event(o.EventDef.UpdateDiamondOnPlay, this._moneyArr.length);
                                    for (var c = 0; c < this._moneyArr.length; c++) this._moneyArr[c] && this.setEffectDiamondBomb(this._moneyArr[c], this._moneyArr[c].transform.position, c);
                                    this._moneyNum += this._moneyArr.length
                                }
                                this.judgeTargetState()
                            }
                        } else this.judgeTargetState()
                    }
                }, t.prototype.setCameraMove = function () {
                    var e = this;
                    this.setGunAnimator(3);
                    var t = new Laya.TimeLine;
                    t.to(this._camera.transform, {
                        localPositionZ: this._camera.transform.localPositionZ - 10
                    }, 1e3), t.play(), t.once(Laya.Event.COMPLETE, this, function () {
                        t.destroy(), e.isTouch = !1, e.isCanTouch = !0, e.setGunAnimator(1), u.default.getInstance.event(o.EventDef.UpdateLifeProgress, {
                            type: 2,
                            lifeType: e.lifeType
                        }), e._bgArr[0].destroy(), n.Utils.removeByElements(e._bgArr, 0), e._gameScene.removeChild(e._bgArr[0])
                    });
                    var a = new Laya.TimeLine;
                    a.to(this._gunBox.transform, {
                        localPositionZ: this._gunBox.transform.localPositionZ - 10
                    }, 1e3), a.play(), a.once(Laya.Event.COMPLETE, this, function () {
                        a.destroy()
                    })
                }, t.prototype.removeObstacleAllTween = function (e, t) {
                    var a = this;
                    if (void 0 === t && (t = !1), e && e.length > 0)
                        for (var i = function (i) {
                                e[i] && (r.ObstacleScript.removeAllTween(e[i]), t || setTimeout(function () {
                                    a && a._gameScene && (e[i].destroy(!0), a._gameScene.removeChild(e[i]))
                                }, 1e3))
                            }, n = 0; n < e.length; n++) i(n)
                }, t.prototype.setObstacleAllTweenState = function (e, t, a) {
                    if (console.log("-----1111----"), t && t.length > 0)
                        for (var i = s.ConfigMetadata.getInstance().getObstacleById(h.GameData._gateConf.obstacleData[this.smallLevelNum]), n = 0; n < t.length; n++) t[n] && (r.ObstacleScript.setTweenState(e, t[n]), 2 == e && r.ObstacleScript.initRotate(i, n, this.smallLevelNum, t[n], h.GameData._gateConf));
                    if (a && a.length > 0)
                        for (n = 0; n < a.length; n++) a[n] && a[n].setTweenState(e)
                }, t.prototype.removeAllTween = function (e, t) {
                    var a = this;
                    if (void 0 === t && (t = !1), e && e.length > 0)
                        for (var i = function (i) {
                                e[i] && (e[i].removeAllTween(), t || setTimeout(function () {
                                    a && a._gameScene && (e[i].destroy(!0), a._gameScene.removeChild(e[i]))
                                }, 1e3))
                            }, n = 0; n < e.length; n++) i(n)
                }, t.prototype.selectObstacle = function (e) {
                    if (e.collider && e.collider.owner && this._obstacleArr && this._obstacleArr.length > 0)
                        for (var t = 0; t < this._obstacleArr.length; t++)
                            if (e.collider.owner == this._obstacleArr[t]) {
                                if (99 == this._obstacleTypeArr[t] || 98 == this._obstacleTypeArr[t]) {
                                    if (this._moneyArr && this._moneyArr.length > 0)
                                        for (var a = 0; a < this._moneyArr.length; a++)
                                            if (this._moneyArr[a] == e.collider.owner) return !1;
                                    return this._moneyArr.push(e.collider.owner), !1
                                }
                                return this.createDanhen(this._obstacleArr[t], e.point), !0
                            } return !1
                }, t.prototype.judgeTargetState = function () {
                    var e = this;
                    if (h.GameData._gateConf && h.GameData.useGunData) {
                        var t = h.GameData.useGunData.damage * n.Utils.getTalentDataById(7);
                        this.setCameraAnima(), this._targetLife - t <= 0 ? (n.Utils.vibrateLong(), u.default.getInstance.event(o.EventDef.UpdateLifeProgress, {
                            _targetLife: 0,
                            allLife: this._allLife,
                            damage: this._targetLife,
                            hit: t
                        }), this._bomb1.transform.localPositionZ = -10 * this.smallLevelNum, this._bomb.transform.localPositionZ = -10 * this.smallLevelNum, this._bomb1.active = !1, this._bomb.active = !1, this.smallLevelNum++, this.removeObstacleAllTween(this._obstacleArr), this.removeAllTween(this._obstacleBoxScriptcleArr), this._targetLife = h.GameData._gateConf.targetLife, this._target.destroyChildren(), this._allLife = h.GameData._gateConf.targetLife, Laya.timer.clear(this, this.setShootData), h.GameData._gateConf.obstacleData.length > this.smallLevelNum ? (this.smallLevelNum <= h.GameData._gateConf.obstacleData.length - 1 && (this._bomb1.active = !0, this._bomb.active = !0, this._bombanimator.play("bazi_sui", 0, 0), this._bombanimator.speed = 1, this.setEffectBomb(), n.Utils.playSound("Swin.mp3")), this.createObstacleBox(this.smallLevelNum), this.createBg(this.smallLevelNum), this._target.transform.localPositionZ -= 10, this._target.active = !1, h.GameData._gateConf.obstacleData.length == this.smallLevelNum + 1 ? h.GameData._gateConf.bossdata && h.GameData._gateConf.bossLife ? (this._targetLife = h.GameData._gateConf.bossLife, this._allLife = h.GameData._gateConf.bossLife, setTimeout(function () {
                            u.default.getInstance.event(o.EventDef.PlayBossSk)
                        }, 500), setTimeout(function () {
                            e.setBossData(), e.lifeType = 2
                        }, 1300)) : (this._targetLife = 0, this.lifeType = 0) : (this.setTargetAnima(), this.lifeType = 1), this._startPosition.transform.localPositionZ -= 10, setTimeout(function () {
                            e.setCameraMove()
                        }, 500)) : (Laya.timer.clearAll(this), this._boss && (Laya.Tween.clearAll(this._boss.transform), this.setBossAnima(3), this.setHitBoss()), this._target.active = !1, n.Utils.playSound("EndingCheer.mp3"), setTimeout(function () {
                            Laya.Scene.open("game/GameOver.scene", !1, e._moneyNum)
                        }, 1e3)), u.default.getInstance.event(o.EventDef.UpdateProgress, {
                            smallLevelNum: this.smallLevelNum,
                            allLevel: h.GameData._gateConf.obstacleData.length
                        }), this.isTouch = !0, this.isCanTouch = !1, this.isgoon = !1) : (n.Utils.vibrateShort(), this.isTouch = !1, this._targetLife -= t, u.default.getInstance.event(o.EventDef.UpdateLifeProgress, {
                            _targetLife: this._targetLife,
                            allLife: this._allLife,
                            damage: t,
                            hit: t
                        }), this._boss ? (this.setBossAnima(2), this.setHitBoss(), this.createDanhen(this._boss, this._target.transform.position), this.createDanHengEffect(this._boss.getChildByName("man_body"), this._target.transform.position)) : (this.createDanhen(this._target, this._target.transform.position), this.createDanHengEffect(this._target, this._target.transform.position)))
                    }
                }, t.prototype.setEffectShoot = function (e, t) {
                    var a = this;
                    void 0 === t && (t = !1), this._effectBox.destroyChildren();
                    var i = Laya.Pool.getItemByCreateFun("effectShoot", function () {
                        return Laya.Sprite3D.instantiate(a._effectShoot)
                    });
                    i.active = !0, this._effectBox.addChild(i), i.transform.position = e;
                    for (var n = 0; n < i._children.length; n++) i._children[n] && (1 == t ? i._children[n].particleSystem.stop() : i._children[n].particleSystem.play());
                    setTimeout(function () {
                        Laya.timer.scale = 1
                    }, 1500)
                }, t.prototype.setEffectBomb = function (e) {
                    void 0 === e && (e = !1), this._bomb1.active = !0, this._gameScene.addChild(this._bomb1);
                    for (var t = 0; t < this._bomb1._children.length; t++) this._bomb1._children[t] && (1 == e ? this._bomb1._children[t].particleSystem.stop() : this._bomb1._children[t].particleSystem.play())
                }, t.prototype.setEffectDiamondBomb = function (e, t, a) {
                    var i = this,
                        o = Laya.Pool.getItemByCreateFun("effectdiamondbomb", function () {
                            return Laya.Sprite3D.instantiate(i._diamondEffect)
                        });
                    o.active = !0, this._obstacleBox.addChild(o), o.transform.position = t, setTimeout(function () {
                        for (var t = 0; t < o._children.length; t++) o._children[t] && o._children[t].particleSystem.play();
                        e && (e.active = !1), n.Utils.playSound("zuanshi.mp3")
                    }, 50 * a)
                }, t.prototype.createDanhen = function (e, t) {
                    var a, i = this;
                    a = Laya.Pool.getItemByCreateFun("_danhen", function () {
                        return Laya.Sprite3D.instantiate(i._effectShootScars)
                    }), e.addChild(a), a.active = !0, a.transform.position = t;
                    for (var n = 0; n < a._children.length; n++) a._children[n] && a._children[n].particleSystem.play()
                }, t.prototype.setBossData = function () {
                    var e = Math.floor(5 * Math.random()) + 1;
                    this._boss = new Laya.MeshSprite3D, Laya.MeshSprite3D.load("unity/BossModel/boss/Conventional/role_00" + e + ".lh", new Laya.Handler(this, function (e) {
                        var t = this;
                        this._boss = e.clone(), this._gameScene.addChild(this._boss), this._boss.transform.localScaleX = 3.5, this._boss.transform.localScaleY = 3.5, this._boss.transform.localScaleZ = 2.5, this._boss.transform.position = this._target.transform.position, this._boss.transform.localPositionY = 3, this._bossAnimator = this._boss.getComponent(Laya.Animator), this._bossAnimator&&(this._bossAnimator.speed = 0), this.setBossAnima(4), Laya.Tween.to(this._boss.transform, {
                            localPositionY: -1.5
                        }, 300, null, Laya.Handler.create(this, function () {
                            t.setEffectBoss(t._boss.transform.position)
                        }))
                    }))
                }, t.prototype.setBossAnima = function (e) {
                    var t = "";
                    switch (e) {
                        case 1:
                            t = "role_show";
                            break;
                        case 2:
                            t = "role_behit";
                            break;
                        case 3:
                            t = "role_dead";
                            break;
                        case 4:
                            t = "role_fall"
                    }
                    this._bossAnimator && (this._bossAnimator.speed = 1,
                        this._bossAnimator.play(t, 0, 0), (2 == e || 4 == e) && this._bossAnimator.crossFade("role_show", 1, 0, 0))

                }, t.prototype.setEffectBoss = function (e) {
                    var t = this,
                        a = Laya.Pool.getItemByCreateFun("effectboss", function () {
                            return Laya.Sprite3D.instantiate(t._bossShowEffect)
                        });
                    a.active = !0, this._gameScene.addChild(a), a.transform.position = e;
                    for (var i = 0; i < a._children.length; i++) a._children[i] && a._children[i].particleSystem.play()
                }, t.prototype.Revive = function () {
                    this.isTouch = !1, this.isCanTouch = !0, console.log("this.isTouch is false in Revive"), h.GameData._time = 30, h.GameData._time += n.Utils.getTalentDataById(6), this.updateTime(h.GameData._time), this._reviveNum++, this.setObstacleAllTweenState(2, this._obstacleArr, this._obstacleBoxScriptcleArr)
                }, t.prototype.setFireSound = function () {
                    var e = h.GameData.useGunData.type,
                        t = "shoot0" + e + ".mp3";
                    n.Utils.playSound(t)
                }, t.prototype.setCasingSound = function () {
                    var e = h.GameData.useGunData.type,
                        t = 0;
                    t = 0 == e || 1 == e ? 0 : 3 == e ? 2 : 1;
                    var a = "casing" + t + ".mp3";
                    n.Utils.playSound(a)
                }, t.prototype.setHitSound = function () {
                    var e = Math.floor(3 * Math.random()) + 1,
                        t = "impact0" + e + ".mp3";
                    n.Utils.playSound(t)
                }, t.prototype.setHitBoss = function () {
                    var e = Math.floor(3 * Math.random()) + 1,
                        t = "Damage_hit" + e + ".mp3";
                    n.Utils.playSound(t)
                }, t.prototype.setCameraAnima = function () {
                    var e = Math.random() - .5;
                    Laya.Tween.to(this._camera.transform, {
                        localRotationEulerX: e
                    }, 20), Laya.Tween.to(this._camera.transform, {
                        localRotationEulerX: -e
                    }, 40, null, null, 20), Laya.Tween.to(this._camera.transform, {
                        localRotationEulerX: 0
                    }, 20, null, null, 60)
                }, t.prototype.setTargetAnima = function () {
                    this._target && (this._target.active = !0, this._target.transform.localPositionY = 2, Laya.Tween.to(this._target.transform, {
                        localPositionY: 0
                    }, 300))
                }, t.prototype.createDanHengEffect = function (e, t) {
                    var a = this,
                        i = Laya.Pool.getItemByCreateFun("dankongEffect", function () {
                            return Laya.Sprite3D.instantiate(a._dankongEffect)
                        });
                    i.active = !0, i.transform.localRotationEulerX = e.transform.localRotationEulerX, i.transform.localRotationEulerY = e.transform.localRotationEulerY, i.transform.localRotationEulerZ = e.transform.localRotationEulerZ, e.addChild(i), i.transform.position = t, e != this._target ? i.transform.localPositionZ = -.15 : i.transform.localPositionZ = .15;
                    for (var n = 0; n < i._children.length; n++) i._children[n] && i._children[n].particleSystem.play()
                }, t.prototype.setGuideTip = function (e) {
                    e.getChildByName("tip")
                }, t.prototype.updateTime = function (e) {
                    var t = this;
                    Laya.timer.once(1e3, this, function () {
                        e--, h.GameData._time = e, u.default.getInstance.event(o.EventDef.UpdateTime), e > 0 ? t.updateTime(e) : t && (t.isTouch = !0, t.isCanTouch = !1, Laya.timer.clear(t, t.setShootData), t.setObstacleAllTweenState(1, t._obstacleArr, t._obstacleBoxScriptcleArr), setTimeout(function () {
                            t && (Laya.timer.scale = 1, 0 == t._reviveNum ? Laya.Scene.open("game/Die.scene", !1, {
                                level: t.smallLevelNum,
                                allLevel: h.GameData._gateConf.obstacleData.length,
                                diamond: t._moneyNum
                            }) : Laya.Scene.open("game/Lose.scene", !1, {
                                level: t.smallLevelNum,
                                allLevel: h.GameData._gateConf.obstacleData.length,
                                diamond: t._moneyNum
                            }))
                        }, 500))
                    })
                }, t
            }(i.ui.game.PlayUI);
        a.default = c
    }, {
        "../data/Enum": 5,
        "../data/EventMgr": 6,
        "../data/GameData": 7,
        "../data/Metadata": 8,
        "../script/ObstacleBoxScript": 37,
        "../script/ObstacleScript": 38,
        "../ui/layaMaxUI": 40,
        "../utils/Utils": 43,
        "../utils/WxManager": 44
    }],
    25: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../ui/layaMaxUI"),
            n = e("../utils/Utils"),
            o = e("../utils/WxManager"),
            s = e("../data/EventMgr"),
            l = e("../data/Enum"),
            r = e("../ad/BannerAd"),
            u = function (e) {
                function t() {
                    var t = e.call(this) || this;
                    return n.Utils.setResize(t), t
                }
                return __extends(t, e), t.prototype.onEnable = function () {
                    var e = this;
                    this.initRankList(), this.button_up.on(Laya.Event.CLICK, this, this.onClickLeft), this.button_down.on(Laya.Event.CLICK, this, this.onClickRight), this.button_close.on(Laya.Event.CLICK, this, this.onTouchClose), this.button_down.visible = !1, this.button_up.visible = !1, this.box_rect.visible = !1, this.box_rank.scaleX = 1, this.box_rank.scaleY = 1, Laya.Tween.to(this.box_rank, {
                        scaleX: 1.2,
                        scaleY: 1.2
                    }, 100, null, Laya.Handler.create(this, function () {
                        e.box_rect.visible = !0, r.banner.init()
                    })), Laya.Tween.to(this.box_rank, {
                        scaleX: 1,
                        scaleY: 1
                    }, 50, null, null, 100)
                }, t.prototype.onDisable = function () {
                    o.wxMgr.isWx() && (this.wxOpenData.postMsg({
                        type: "clearRank"
                    }), r.banner.destory(), s.default.getInstance.event(l.EventDef.CloseDialog))
                }, t.prototype.initRankList = function () {
                    o.wxMgr.isWx() && this.wxOpenData.postMsg({
                        type: "openRank"
                    })
                }, t.prototype.onClickLeft = function () {
                    console.log("🚀 ~ file: bundle.js:3746 ~ onClickLeft:升级武器页面按钮free"), o.wxMgr.isWx() && this.wxOpenData.postMsg({
                        type: "rankLeft"
                    })
                }, t.prototype.onClickRight = function () {
                    o.wxMgr.isWx() && this.wxOpenData.postMsg({
                        type: "rankRight"
                    })
                }, t.prototype.onTouchClose = function () {
                    var e = this;
                    n.Utils.playSound("Click.mp3"), this.box_rect.visible = !1, Laya.Tween.to(this.box_rank, {
                        scaleX: .1,
                        scaleY: .1
                    }, 50, null, Laya.Handler.create(this, function () {
                        Laya.Tween.clearAll(e.box_rank), e.close()
                    }))
                }, t
            }(i.ui.game.RankingUI);
        a.default = u
    }, {
        "../ad/BannerAd": 3,
        "../data/Enum": 5,
        "../data/EventMgr": 6,
        "../ui/layaMaxUI": 40,
        "../utils/Utils": 43,
        "../utils/WxManager": 44
    }],
    26: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../ui/layaMaxUI"),
            n = function (e) {
                function t() {
                    return e.call(this) || this
                }
                return __extends(t, e), t.prototype.onDisable = function () {}, t.prototype.onEnable = function () {}, t
            }(i.ui.game.RewardItemUI);
        a.default = n
    }, {
        "../ui/layaMaxUI": 40
    }],
    27: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../ui/layaMaxUI"),
            n = e("../data/Enum"),
            o = e("../data/Metadata"),
            s = e("../utils/Utils"),
            l = e("../data/EventMgr"),
            r = (e("../utils/WxManager"), function (e) {
                function t() {
                    return e.call(this) || this
                }
                return __extends(t, e), t.prototype.onDisable = function () {}, t.prototype.onEnable = function () {}, t.prototype.setInfo = function (e) {
                    var t = o.GunMetadata.getInstance().getGunById(e.id);
                    if (this.label_Level.text = " " + t.level + " ", this.image_gun.skin = t.icon, this.label_name.text = " " + t.linename + " ", this.button_Money.visible = this.button_Diamond.visible = this.button_Video.visible = !1, this.button_Money.disabled = !1, this.image_gun.filters = null, e.costGold > 0) this.dataSource.costGold = Math.floor(e.costGold * s.Utils.getTalentDataById(1)), this.button_Money.visible = !0, this.label_money.text = s.Utils.getFormatMoneyStr(this.dataSource.costGold) + " ", this.button_Money.on(Laya.Event.CLICK, this, this.onClickBtnGold);
                    else if (e.costDiamond > 0) this.button_Diamond.visible = !0, this.label_Diamond.text = s.Utils.getFormatMoneyStr(e.costDiamond) + " ", this.button_Diamond.on(Laya.Event.CLICK, this, this.onClickBtnDiamond);
                    else {
                        this.button_Money.visible = !0, this.button_Money.disabled = !0, this.label_money.text = "???";
                        var a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                            i = new Laya.ColorFilter(a);
                        this.image_gun.filters = [i]
                    }
                }, t.prototype.onClickBtnGold = function (e) {
                    if (console.log("🚀 ~ file: bundle.js:3891 ~ onClickBtnGold:购买枪支"), s.Utils.playSound("StoreBuy.mp3"), s.Utils.checkHasBagBuyGun()) {
                        console.log("商店-金币购买");
                        var t = this.dataSource.costGold;
                        t > 0 && s.Utils.checkHasEnoughGold(t) && (s.Utils.updateGold(-t), s.Utils.resetBuyGunTimes(this.dataSource.id), l.default.getInstance.event(n.EventDef.UpdateStore, [this.dataSource.id]))
                    }
                }, t.prototype.onClickBtnDiamond = function () {
                    if (s.Utils.playSound("StoreBuy.mp3"), s.Utils.checkHasBagBuyGun()) {
                        console.log("商店-钻石购买");
                        var e = this.dataSource.costDiamond;
                        if (!(e > 0 && s.Utils.checkHasEnoughDiamond(e))) return void(e && Laya.Scene.open("game/GetDiamond.scene", !1, -1));
                        s.Utils.updateDiamond(-e), s.Utils.resetBuyGunTimes(this.dataSource.id, !0), l.default.getInstance.event(n.EventDef.UpdateStore, [this.dataSource.id])
                    }
                }, t
            }(i.ui.game.ShopListUI));
        a.default = r
    }, {
        "../data/Enum": 5,
        "../data/EventMgr": 6,
        "../data/Metadata": 8,
        "../ui/layaMaxUI": 40,
        "../utils/Utils": 43,
        "../utils/WxManager": 44
    }],
    28: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../ui/layaMaxUI"),
            n = e("../utils/Utils"),
            o = e("../data/EventMgr"),
            s = e("./ShopList"),
            l = e("../data/Metadata"),
            r = e("../data/Enum"),
            u = function (e) {
                function t() {
                    var t = e.call(this) || this;
                    return t._scrollValue = 0, t
                }
                return __extends(t, e), t.prototype.onDisable = function () {
                    o.default.getInstance.event(r.EventDef.CloseDialog)
                }, t.prototype.onEnable = function () {
                    this.sprite_close.on(Laya.Event.CLICK, this, this.onTouchClose), this.sprite_close.visible = !0, this.x = this.stage.width / 2 - this.width / 2, this.y = this.stage.height / 2 - this.height / 2, this.list_shopdata.itemRender = s.default, this.initList(), o.default.getInstance.on(r.EventDef.UpdateStore, this, this.initList)
                }, t.prototype.initList = function () {
                    this._scrollValue = this.list_shopdata.scrollBar.value;
                    for (var e = l.GunMetadata.getInstance(), t = [], a = Laya.Utils.parseInt(Laya.LocalStorage.getItem("MaxGunId")), i = e.getMetadata(), n = e.getGunById(a), o = Laya.LocalStorage.getJSON("goldBuyGunTimes"), s = Laya.LocalStorage.getJSON("diamondBuyGunTimes"), r = 0; r < i.length; r++) {
                        var u = 0,
                            h = 0;
                        if (+i[r].level <= +n.unlock_buy_gold_level) {
                            var d = +i[r].buy_gold,
                                c = +i[r].add_gold;
                            u = Math.floor(d * Math.pow(c, +o[r] - 1))
                        } else if (+i[r].level <= +n.unlock_buy_diamond_level) {
                            var m = +i[r].buy_diamond,
                                g = +i[r].add_diamond;
                            h = m + (+s[r] - 1) * g
                        }
                        var p = {
                            id: +i[r].id,
                            costGold: u,
                            costDiamond: h,
                            isFree: !1
                        };
                        t.push(p)
                    }
                    this.list_shopdata.renderHandler = new Laya.Handler(this, this.renderItemHandler), this.list_shopdata.array = t, this.list_shopdata.array.length = 40, this._scrollValue && (this.list_shopdata.scrollBar.value = this._scrollValue)
                }, t.prototype.renderItemHandler = function (e) {
                    e.setInfo(e.dataSource)
                }, t.prototype.onTouchClose = function () {
					platform.getInstance().showInterstitial(()=>{
						console.log("🚀 ~ file: bundle.js:4107 ~ onTouchClose:"), window.inshop = !1, n.Utils.playSound("Click.mp3"), this.close(), YYGGames.gameBox.visible = !0, window.musicBtn.visible = !0
					})
                }, t
            }(i.ui.game.ShopUI);
        a.default = u
    }, {
        "../data/Enum": 5,
        "../data/EventMgr": 6,
        "../data/Metadata": 8,
        "../ui/layaMaxUI": 40,
        "../utils/Utils": 43,
        "./ShopList": 27
    }],
    29: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../ui/layaMaxUI"),
            n = function (e) {
                function t() {
                    return e.call(this) || this
                }
                return __extends(t, e), t.prototype.onDisable = function () {}, t.prototype.onEnable = function () {}, t.prototype.init = function () {
                    if (this.dataSource) {
                        var e = this.dataSource.conf,
                            t = this.dataSource.state;
                        this.label_num.text = e.reward + " ", this.label_day.text = "Day " + e.id + " ", this.iamge_state.visible = t, this.image_bg.visible = !t, t ? (this.label_day.color = "#b1b1b1", this.label_num.color = "#828282") : (this.label_day.color = "#d6bc0d", this.label_num.color = "#dddddd"), 7 == e.id && (this.width = this.image_bg_0.width = this.image_bg.width = 240, this.box.x = this.width / 2 - this.box.width / 2)
                    }
                }, t.prototype.setState = function () {
                    this.iamge_state.visible = !0, this.image_bg.visible = !1, this.label_day.color = "#b1b1b1", this.label_num.color = "#828282"
                }, t
            }(i.ui.game.SigninItemUI);
        a.default = n
    }, {
        "../ui/layaMaxUI": 40
    }],
    30: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../ui/layaMaxUI"),
            n = e("../data/Metadata"),
            o = e("../data/Enum"),
            s = e("../utils/Utils"),
            l = e("../data/EventMgr"),
            r = (e("../utils/WxManager"), e("../ad/BannerAd")),
            u = e("../data/GameData"),
            h = function (e) {
                function t() {
                    var t = e.call(this) || this;
                    return t._modelType = 1, t
                }
                return __extends(t, e), t.prototype.onDisable = function () {
                    r.banner.destory()
                }, t.prototype.onEnable = function () {
                    this.y = this.stage.height / 2 - this.height / 2 - 100, this.init(), window.x30 = this, this.label_signinOnly.on(Laya.Event.CLICK, this, this.onTouchSigninOnly), this.button_signinDouble.on(Laya.Event.CLICK, this, this.onTouchSigninDouble), this.button_close.on(Laya.Event.CLICK, this, this.onTouchClose), this.changeBtnState(), r.banner.init(), this._modelType = s.Utils.videoIconInit(this.image_video, u.GameData.signinModelType, "签到界面"), YYGGames.gameBox.visible = !1, window.musicBtn.visible = !1
                }, t.prototype.changeBtnState = function () {
                    var e = s.Utils.checkTodayHasSignIn();
                    e ? (this.label_state.visible = !0, this.button_signinDouble.visible = !1, this.label_signinOnly.visible = !1) : (this.label_state.visible = !1, this.button_signinDouble.visible = !0, this.label_signinOnly.visible = !0)
                }, t.prototype.init = function () {
                    var e = this;
                    this._signIn = Laya.LocalStorage.getJSON("signIn"), this._signIn || (this._signIn = []);
                    var t = this._signIn.length,
                        a = n.OtherMetadata.getInstance().getSignInRewards(),
                        i = [];
                    if (a) {
                        for (var o = 0; o < a.length; o++) {
                            var s = !1;
                            this._signIn.length > 0 && Date.now() >= this._signIn[o] && (s = !0);
                            var l = {
                                conf: a[o],
                                state: s
                            };
                            i.push(l)
                        }
                        this._sighInData = i[t], this.list_day.array = i, this.list_day.renderHandler = new Laya.Handler(this, function (t) {
                            e.onListRender(t)
                        })
                    }
                }, t.prototype.onListRender = function (e) {
                    e && e.dataSource && (e.init(), this._signIn.length + 1 == e.dataSource.conf.id && (this.signin = e))
                }, t.prototype.onTouchSigninOnly = function () {
                    console.log("🚀 ~ file: bundle.js:4083 ~ onTouchSigninOnly普通签到:");
                    var e = this;
                    s.Utils.playSound("Click.mp3"), console.log("签到界面-点击单倍领取"), this._signIn.push(Date.now()), Laya.LocalStorage.setJSON("signIn", this._signIn), s.Utils.updateDiamond(Math.floor(e._sighInData.conf.reward)), YYGGames.showTip("You got " + e._sighInData.conf.reward + " Diamonds"), this.changeBtnState(), this.signin && this.signin.setState(), l.default.getInstance.event(o.EventDef.SigninOk), setTimeout(function () {
                        e && e.close(), YYGGames.gameBox.visible = !0, window.musicBtn.visible = !0
                    }, 400), Laya.Scene.open("game/DiaAndGlod.scene", !1, 2), s.Utils.selectNeedGuideUp()
                }, t.prototype.onTouchSigninDouble = function () {
                    console.log("🚀 ~ file: bundle.js:4138 ~ onTouchSigninDouble:双倍签到"), YYGGames.showReward(() => {
                        var e = this;
                        s.Utils.playSound("Click.mp3"), s.Utils.shareByMode(this._modelType, function () {
                            console.log("签到界面-点击双倍领取"), e._signIn.push(Date.now()), Laya.LocalStorage.setJSON("signIn", e._signIn), s.Utils.updateDiamond(Math.floor(2 * e._sighInData.conf.reward)), YYGGames.showTip("You got " + 2 * e._sighInData.conf.reward + " Diamonds"), e.changeBtnState(), e.signin && e.signin.setState(), l.default.getInstance.event(o.EventDef.SigninOk), setTimeout(function () {
                                e && e.close(), YYGGames.gameBox.visible = !0, window.musicBtn.visible = !0
                            }, 400), Laya.Scene.open("game/DiaAndGlod.scene", !1, 2), console.log("视频完整播放", "scene", "签到界面")
                        }), s.Utils.selectNeedGuideUp()
                    })
                }, t.prototype.onTouchClose = function () {
					platform.getInstance().showInterstitial(()=>{
						console.log("🚀 ~ file: bundle.js:4282 ~ onTouchClose:"), s.Utils.playSound("Click.mp3"), l.default.getInstance.event(o.EventDef.CloseDialog), this.close(), YYGGames.gameBox.visible = !0, window.musicBtn.visible = !0
					})
                }, t
            }(i.ui.game.SigninUI);
        a.default = h
    }, {
        "../ad/BannerAd": 3,
        "../data/Enum": 5,
        "../data/EventMgr": 6,
        "../data/GameData": 7,
        "../data/Metadata": 8,
        "../ui/layaMaxUI": 40,
        "../utils/Utils": 43,
        "../utils/WxManager": 44
    }],
    31: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../ui/layaMaxUI"),
            n = e("../data/GameData"),
            o = function (e) {
                function t() {
                    return e.call(this) || this
                }
                return __extends(t, e), t.prototype.onDisable = function () {
                    this.sk.stop()
                }, t.prototype.onEnable = function () {
                    this.box_tip.visible = !1, this.sk.stop(), this.sk.visible = !1, this.image_state.visible = !1
                }, t.prototype.init = function () {
                    var e = this.dataSource;
                    if (e.level < 1) this.image_unlock.visible = !0, this.iamge_icon.visible = !1, this.label_level.visible = !1, this.label_name.visible = !1, this.image_bg.skin = "talent/headBg02.png";
                    else {
                        this.image_unlock.visible = !1, this.iamge_icon.visible = !0, this.label_level.visible = !0, this.label_name.visible = !0;
                        var t = "talent/headBg02.png";
                        1 == e.type ? t = "talent/headBg02_lv.png" : 2 == e.type ? t = "talent/headBg02_lan.png" : 3 == e.type && (t = "talent/headBg02_z.png");
                        var a = e.level;
                        console.log("🚀 ~ file: bundle.js:4404 ~ a:", a), 10 > a && (a = "0" + a), a = "Lv." + a, e.level >= e.max && (a = " Max "), this.image_bg.skin = t, this.iamge_icon.skin = e.icon, this.label_level.text = a + " ", this.label_name.text = " " + e.name + " ", n.GameData.setImageColor(this.iamge_icon, Number("0x" + e.colour), !0), this.label_level.color = "#" + e.colour
                    }
                }, t.prototype.upLevel = function () {
                    var e = this;
                    this.dataSource.level < this.dataSource.max && (this.dataSource.level += 1, this.sk.visible = !0, this.sk.play(0, !0), this.image_state.visible = !0, setTimeout(function () {
                        e && e.sk && (e.sk.stop(), e.sk.visible = !1)
                    }, 500)), this.init(), 1 == this.dataSource.level && Laya.Scene.open("game/UnLockTalent.scene", !1, this.dataSource)
                }, t.prototype.setState = function (e, t, a) {
                    var i = this;
                    void 0 === t && (t = 100), void 0 === a && (a = !0), this.image_state.visible = !0, a && setTimeout(function () {
                        i && (i.image_state.visible = !1)
                    }, t)
                }, t.prototype.showTip = function (e) {
                    if (this.box_tip.visible = e, this.image_state.visible = !1, e)
                        if (this.dataSource.level > 0) {
                            var t = this.dataSource.data[this.dataSource.level - 1],
                                a = this.dataSource.tip;
                            a = 0 > t ? a + t + "%" : 6 == this.dataSource.id ? a + "+" + t : 3 == this.dataSource.id ? a + t + "h" : a + "+" + t + "%", this.label_tipName.text = this.dataSource.name + " ", this.label_tip.text = a + " "
                        } else this.label_tipName.text = "?", this.label_tip.text = "Not yet unlocked "
                }, t
            }(i.ui.game.TalentItemUI);
        a.default = o
    }, {
        "../data/GameData": 7,
        "../ui/layaMaxUI": 40
    }],
    32: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../ui/layaMaxUI"),
            n = e("../data/Metadata"),
            o = e("../data/Enum"),
            s = e("./TalentItem"),
            l = e("../utils/Utils"),
            r = e("../data/GameData"),
            u = e("../data/EventMgr"),
            h = (e("../utils/WxManager"), function (e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.need = 0, t.isMax = !1, t.isTouch = !1, t._flag = !1, t._touchFlag = !1, t
                }
                return __extends(t, e), t.prototype.onDisable = function () {
                    Laya.timer.clearAll(this), u.default.getInstance.off(o.EventDef.UpdateDiamond, this, this.updateDiamond), this.stopGuideTimeLine()
                }, t.prototype.onEnable = function () {
                    window.x32 = this, this.sprite_close.on(Laya.Event.CLICK, this, this.onTouchClose), this.button_up.on(Laya.Event.CLICK, this, this.onTouchUp), this.image_touch.on(Laya.Event.CLICK, this, this.onTouchVisible), this.init(), u.default.getInstance.on(o.EventDef.UpdateDiamond, this, this.updateDiamond)
                }, t.prototype.init = function () {
                    var e = this;
                    this.image_guide.visible = !1, this.isTouch = !1, this.nowRandomData = null, this.tempRandomData = [];
                    var t = Laya.LocalStorage.getJSON("talentLevel"),
                        a = n.OtherMetadata.getInstance().getTalentData(),
                        i = Laya.LocalStorage.getJSON("randomData");
                    if (t && t.length > 0)
                        for (var o = 0; o < t.length; o++) a[o].level = t[o];
                    this.list_talent.array = a, this.list_talent.renderHandler = new Laya.Handler(this, function (t) {
                        e.onListRender(t)
                    }), this.upgradeData();
                    for (o = 0; o < i.length; o++) i[o].id == r.GameData.randomId && (this.nowRandomData = i[o]);
                    if (this.nowRandomData)
                        for (var s = 0; s < this.nowRandomData.data.length; s++) this.nowRandomData.data[s].flag < 1 && this.tempRandomData.push(this.nowRandomData.data[s].type);
                    else this.isMax = !0;
                    r.GameData.randomId >= i.length && (this.box_diamond.visible = !1, this.button_up._children[0].visible = !1, this.button_up.label = "Max", this.button_up.disabled = !0), this.updateDiamond();
                    var l = Laya.LocalStorage.getJSON("upgradeData");
                    l && 1 == l && this.setGuide();
                    var u = Laya.Utils.parseInt(Laya.LocalStorage.getItem("totalDiamond"));
                    this.need > Number(u) && this.stopGuideTimeLine()
                }, t.prototype.onListRender = function (e) {
                    e && e.dataSource && (e.init(), e.on(Laya.Event.CLICK, this, this.onTouchCell.bind(this, e)))
                }, t.prototype.onTouchUp = function () {
                    if (console.log("🚀 ~ file: bundle.js:4338 ~ onTouchUp:天赋界面-点击升级"), !this.isMax && !this.isTouch) {
                        l.Utils.playSound("Click.mp3"), this.onTouchVisible();
                        let e = !1;
                        if (!l.Utils.checkTalentState() && (e = !0), !l.Utils.checkHasEnoughDiamond(this.need, e)) return void(e && Laya.Scene.open("game/GetDiamond.scene", !1, -1));
                        if (this.isTouch = !0, this._flag && (this._touchFlag = !0), this.tempRandomData && this.tempRandomData.length > 0) {
                            let e = Math.floor(Math.random() * this.tempRandomData.length),
                                t = this.tempRandomData[e];
                            t += 9 * Math.floor(2 + 3 * Math.random()) - 1, this.setImageShow(0, t, null, 100, e), l.Utils.updateDiamond(-this.need), this.upgradeData(!0), l.Utils.updateTalentData(this.tempRandomData[e]), l.Utils.updateRandomData(this.tempRandomData[e])
                        }
                        this.stopGuideTimeLine()
                    }
                }, t.prototype.setImageShow = function (e, t, a, i, n) {
                    var o = this;
                    if (t >= e) {
                        var r = i;
                        t / 2 > e ? r -= 5 : r += 5;
                        var u = e % 9,
                            h = this.list_talent.cells[u];
                        e == t ? h instanceof s.default && (l.Utils.playSound("reward_get.mp3"), h.setState(!0, r, !1), h.upLevel(), l.Utils.removeByElements(this.tempRandomData, this.tempRandomData[n]), this.init()) : h instanceof s.default && (h.setState(!0, r), e++, l.Utils.playSound("reward_move.mp3"), Laya.timer.once(r, this, function (i) {
                            o.setImageShow(e, t, a, r, n)
                        }))
                    }
                }, t.prototype.upgradeData = function (e) {
                    void 0 === e && (e = !1);
                    var t = Laya.LocalStorage.getJSON("upgradeData");
                    e && (t ? t++ : t = 1, Laya.LocalStorage.setJSON("upgradeData", t));
                    var a = n.OtherMetadata.getInstance().getUpgradeData();
                    a && t && (t <= a.length ? this.need = +a[t - 1] : this.need = +a[a.length - 1]), this.label_diamond.text = this.need + " "
                }, t.prototype.onTouchCell = function (e) {
                    e && (l.Utils.playSound("Click.mp3"), this.onTouchVisible(), e.showTip(!0))
                }, t.prototype.onTouchVisible = function () {
                    for (var e = 0; e < this.list_talent.array.length; e++) {
                        var t = this.list_talent.cells[e];
                        t instanceof s.default && t.showTip(!1)
                    }
                }, t.prototype.updateDiamond = function () {
                    var e = Laya.Utils.parseInt(Laya.LocalStorage.getItem("totalDiamond"));
                    this.label_allDiamond.text = e + " "
                }, t.prototype.onTouchClose = function () {
					platform.getInstance().showInterstitial(()=>{
						console.log("🚀 ~ file: bundle.js:4540 ~ onTouchClose:"), this._touchFlag ? u.default.getInstance.event(o.EventDef.NeedGuide, 3) : u.default.getInstance.event(o.EventDef.CloseDialog), l.Utils.playSound("Click.mp3"), this.close(), YYGGames.gameBox.visible = !0, window.musicBtn.visible = !0
					})
                }, t.prototype.setGuide = function () {
                    this.stopGuideTimeLine(), this.image_guide.visible = !0;
                    var e = this.button_up.width / 2,
                        t = this.button_up.height / 2;
                    this.image_guide.x = e, this.image_guide.y = t, this._guideTimeLine = new Laya.TimeLine,
                        this._guideTimeLine.to(this.image_guide, {
                            x: e + 35,
                            y: t - 33
                        }, 50).to(this.image_guide, {
                            x: e,
                            y: t
                        }, 250).to(this.image_guide, {
                            x: e,
                            y: t
                        }, 200), this._guideTimeLine.play(0, !0), this._flag = !0
                }, t.prototype.stopGuideTimeLine = function () {
                    this.image_guide.visible = !1, this._guideTimeLine && (this._guideTimeLine.offAll(), this._guideTimeLine.destroy(), this._guideTimeLine = null)
                }, t
            }(i.ui.game.TalentUI));
        a.default = h
    }, {
        "../data/Enum": 5,
        "../data/EventMgr": 6,
        "../data/GameData": 7,
        "../data/Metadata": 8,
        "../ui/layaMaxUI": 40,
        "../utils/Utils": 43,
        "../utils/WxManager": 44,
        "./TalentItem": 31
    }],
    33: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../ui/layaMaxUI"),
            n = function (e) {
                function t() {
                    return e.call(this) || this
                }
                return __extends(t, e), t.prototype.onDisable = function () {
                    this._timeLine && this._timeLine.destroy()
                }, t.prototype.onOpened = function (e) {
                    this.showMessage(e)
                }, t.prototype.showMessage = function (e) {
                    var t = this;
                    this.label_tips.text = e + " ", this.label_tips.x = this.width / 2 - this.label_tips.width / 2, this.box_tip.y = this.height / 2 - this.box_tip.height / 2, this.box_tip.alpha = 1, this._timeLine = new Laya.TimeLine, this._timeLine.to(this.box_tip, {
                        alpha: 0,
                        y: this.box_tip.y - 50
                    }, 300, null, 400), this._timeLine.once(Laya.Event.COMPLETE, this, function () {
                        t._timeLine.destroy(), t._timeLine = null, t.close()
                    }), this._timeLine.play(), this.image_tipbg.width = this.label_tips.width + 100
                }, t
            }(i.ui.game.TipsUI);
        a.default = n
    }, {
        "../ui/layaMaxUI": 40
    }],
    34: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../ui/layaMaxUI"),
            n = e("../data/Metadata"),
            o = e("../data/GameData"),
            s = e("../ad/BannerAd"),
            l = function (e) {
                function t() {
                    var t = e.call(this) || this;
                    return t._id = 0, t
                }
                return __extends(t, e), t.prototype.onDisable = function () {
                    Laya.timer.clearAll(this), s.banner.destory()
                }, t.prototype.onEnable = function () {
                    window.x34 = this, window.inMain = !0, YYGGames.gameBox.visible = !1, window.musicBtn.visible = !1;
                    var e = this;
                    this.image_icon.visible = !1, this.box_data.visible = !1, this.button_ok.on(Laya.Event.CLICK, this, this.onTouchSure), Laya.timer.loop(30, this, function () {
                        e.image_anima_01.rotation -= 1, e.image_anima_02.rotation += 1
                    })
                }, t.prototype.onOpened = function (e) {
                    o.GameData.setImageColor(this.iamge_hitIcon, 16771584, !0), o.GameData.setImageColor(this.image_hitbg, 4275005, !0), o.GameData.setImageColor(this.image_hitbg2, 15035177, !0), o.GameData.setImageColor(this.image_speedIcon, 16771584, !0), o.GameData.setImageColor(this.image_speedbg, 4275005, !0), o.GameData.setImageColor(this.image_speedbg2, 15035177, !0), o.GameData.setImageColor(this.iamge_weightIcon, 16771584, !0), o.GameData.setImageColor(this.iamge_weightbg, 4275005, !0), o.GameData.setImageColor(this.image_weightbg2, 15035177, !0), this.box_data.visible = !0;
                    var t = n.GunMetadata.getInstance().getGunById(e);
                    Laya.Utils.parseInt(Laya.LocalStorage.getItem("MaxGunId")), this.image_icon.skin = t.icon, this.label_level.text = "Lv." + t.level + " ", this.label_name.text = " " + t.linename + " ", this.image_hitbg2.scrollRect = new Laya.Rectangle(0, 0, this.image_hitbg2.width * Math.pow(t.damage / 300, .33), this.image_hitbg2.height), this.image_speedbg2.scrollRect = new Laya.Rectangle(0, 0, this.image_speedbg2.width * (t.speed / 100), this.image_speedbg2.height), this.image_weightbg2.scrollRect = new Laya.Rectangle(0, 0, this.image_weightbg2.width * Math.pow(t.weight / 100, .5), this.image_weightbg2.height), this.image_icon.skin = t.icon, this.image_icon.visible = !0, this._id = t.id, s.banner.init()
                }, t.prototype.onTouchSure = function () {
                    console.log("🚀 ~ file: bundle.js:4565 ~ onTouchSure:"), this.close(), YYGGames.gameBox.visible = !0, window.musicBtn.visible = !0
                }, t
            }(i.ui.game.UnLockGunUI);
        a.default = l
    }, {
        "../ad/BannerAd": 3,
        "../data/GameData": 7,
        "../data/Metadata": 8,
        "../ui/layaMaxUI": 40
    }],
    35: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../ui/layaMaxUI"),
            n = e("../data/GameData"),
            o = e("../utils/Utils"),
            s = e("../ad/BannerAd"),
            l = function (e) {
                function t() {
                    return e.call(this) || this
                }
                return __extends(t, e), t.prototype.onDisable = function () {
                    s.banner.destory()
                }, t.prototype.onEnable = function () {
                    console.log("🚀 ~ file: bundle.js:4754 ~ onEnable:"), this.button_sure.on(Laya.Event.CLICK, this, this.onTouchClose), this.box_data.visible = !1
                }, t.prototype.onOpened = function (e) {
                    this.label_name.text = " " + e.name + " ", this.image_icon.skin = e.icon;
                    var t = "talent/headBg02.png";
                    1 == e.type ? t = "talent/headBg02_lv.png" : 2 == e.type ? t = "talent/headBg02_lan.png" : 3 == e.type && (t = "talent/headBg02_z.png"), this.image_bg.skin = t, n.GameData.setImageColor(this.image_icon, Number("0x" + e.colour), !0), this.box_data.visible = !0;
                    var a = e.data[0],
                        i = e.tip;
                    i = 0 > a ? i + a + "%" : 6 == e.id ? i + "+" + a : 3 == e.id ? i + a + "h" : i + "+" + a + "%", this.label_tip.text = i + " ", this.box_rect.visible = !0, s.banner.init()
                }, t.prototype.onTouchClose = function () {
                    console.log("🚀 ~ file: bundle.js:4778 ~ onTouchClose:"), o.Utils.playSound("Click.mp3"), this.box_rect.visible = !1, this.close()
                }, t
            }(i.ui.game.UnLockTalentUI);
        a.default = l
    }, {
        "../ad/BannerAd": 3,
        "../data/GameData": 7,
        "../ui/layaMaxUI": 40,
        "../utils/Utils": 43
    }],
    36: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../ui/layaMaxUI"),
            n = e("../data/Metadata"),
            o = e("../data/EventMgr"),
            s = e("../data/Enum"),
            l = e("../utils/Utils"),
            r = e("../utils/HttpSend"),
            u = (e("../utils/WxManager"), function (e) {
                function t() {
                    var t = e.call(this) || this;
                    return t._modelType = 0, t
                }
                return __extends(t, e), t.prototype.onDisable = function () {
                    this.anima_move.stop()
                }, t.prototype.onEnable = function () {
                    this.box_next.visible = !1, this.box_now.visible = !1, this._modelType = l.Utils.videoIconInit(this.image_video, r.httpSend.shareMode, "结算界面")
                }, t.prototype.onOpened = function (e) {
                    console.log("🚀 ~ file: bundle.js:4811 ~ onOpened:");
                    var t = Laya.Utils.parseInt(Laya.LocalStorage.getItem("MaxGunId")),
                        a = n.GunMetadata.getInstance().getGunById(e),
                        i = t - 3 > e + 2 ? t - 3 : e + 2,
                        o = n.GunMetadata.getInstance().getGunById(i);
                    this.box_now.visible = !0, this.image_gunNow.skin = a.icon, this.label_levelNow.text = "Lv." + a.level + " ", this.label_nameNow.text = " " + a.linename + " ", this.box_next.visible = !0, this.image_gunNext.skin = o.icon, this.label_levelNext.text = "Lv." + o.level + " ", this.label_nameNext.text = " " + o.linename + " ", this.anima_move.play(0, !0), this.button_close.on(Laya.Event.CLICK, this, this.onTouchClose.bind(this, e)), this.button_up.on(Laya.Event.CLICK, this, this.onTouchUp.bind(this, i))
                }, t.prototype.onTouchClose = function (e) {
                    l.Utils.playSound("Click.mp3"), o.default.getInstance.event(s.EventDef.UpGunOfVideo, e), this.close(), console.log("免费升级界面-点击关闭")
                }, t.prototype.onTouchUp = function (e) {
                    console.log("🚀 ~ file: bundle.js:4687 ~ onTouchUp:"), YYGGames.showReward(() => {
                        var t = this;
                        l.Utils.playSound("Click.mp3"), l.Utils.shareByMode(this._modelType, function () {
                            o.default.getInstance.event(s.EventDef.UpGunOfVideo, e), console.log("免费升级界面-点击升级"), t.close(), console.log("视频完整播放", "scene", "免费升级界面")
                        })
                    })
                }, t
            }(i.ui.game.UpGunOfVideoUI));
        a.default = u
    }, {
        "../data/Enum": 5,
        "../data/EventMgr": 6,
        "../data/Metadata": 8,
        "../ui/layaMaxUI": 40,
        "../utils/HttpSend": 41,
        "../utils/Utils": 43,
        "../utils/WxManager": 44
    }],
    37: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function (e) {
            function t() {
                var t = e.call(this) || this;
                return t._dataTemp = [], t._time = 1, t._flag = !1, t._rotate = 0, t
            }
            return __extends(t, e), t.prototype.onEnable = function () {
                this._obstacleBox = this.owner, this._flag = !1, this._time = 1, this._rotate = 0
            }, t.prototype.onDisable = function () {
                Laya.Tween.clearAll(this), Laya.timer.clear(this, this.initObstacleRotateAnima)
            }, t.prototype.init = function (e, t, a) {
                if (e && e.parentData && e.parentData.length > 0)
                    for (var i = 0; i < e.parentData.length; i++) {
                        if (e.parentData[i].startV3) {
                            var n = e.parentData[i].startV3;
                            this._obstacleBox.transform.localPosition = new Laya.Vector3(n.x, n.y, n.z - 10 * t)
                        }
                        if (e.parentData[i].rotate) {
                            var o = 1;
                            a.speed[t] && (o = a.speed[t] / 100), this._time = o, this._flag = !0, this._rotate = e.parentData[i].rotate, Laya.timer.clear(this, this.initObstacleRotateAnima), Laya.timer.once(this._time, this, this.initObstacleRotateAnima.bind(this, this._obstacleBox, this._rotate, this._time))
                        }
                        e.parentData[i].moveV3 && e.parentData[i].moveV3.length > 0 && this.initObstacleMoveAnima(this._obstacleBox, e.parentData[i].moveV3, 0, t, a)
                    }
            }, t.prototype.initObstacleMoveAnima = function (e, t, a, i, n) {
                var o = this;
                if (e) {
                    var s = a % t.length;
                    this._dataTemp = {}, this._dataTemp = this.deepCopy(t[s]), s++, this._dataTemp.data.localPositionZ && (this._dataTemp.data.localPositionZ = this._dataTemp.data.localPositionZ - 10 * i);
                    var l = 1;
                    n.speed[i] && (l = n.speed[i] / 100), Laya.Tween.to(e.transform, this._dataTemp.data, this._dataTemp.time / l, null, Laya.Handler.create(this, function () {
                        o.initObstacleMoveAnima(e, t, s, i, n)
                    }))
                }
            }, t.prototype.initObstacleRotateAnima = function (e, t, a) {
                e.transform.rotate(new Laya.Vector3(t.x, t.y, t.z), !0, !1), Laya.timer.once(a, this, this.initObstacleRotateAnima.bind(this, this._obstacleBox, t, a))
            }, t.prototype.removeAllTween = function () {
                Laya.Tween.clearAll(this._obstacleBox.transform), Laya.timer.clearAll(this)
            }, t.prototype.deepCopy = function (e) {
                var t = {};
                for (var a in e) "object" == typeof e[a] && null !== e[a] ? t[a] = this.deepCopy(e[a]) : t[a] = e[a];
                return t
            }, t.prototype.setTweenState = function (e) {
                this._obstacleBox && this._obstacleBox.transform && (1 == e ? (Laya.Tween.pause(this._obstacleBox.transform), Laya.timer.clearAll(this)) : (Laya.Tween.resume(this._obstacleBox.transform), this._flag && Laya.timer.once(this._time, this, this.initObstacleRotateAnima.bind(this, this._obstacleBox, this._rotate, this._time))))
            }, t
        }(Laya.Script);
        a.default = i
    }, {}],
    38: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../data/Metadata"),
            n = e("../utils/Utils");
        ! function (e) {
            function t(e, t, a, n, o) {
                var s = e.data,
                    l = i.ConfigMetadata.getInstance().getPositionById(s[t].positionData),
                    r = i.ConfigMetadata.getInstance().getModeDataById(s[t].modelData),
                    u = i.ConfigMetadata.getInstance().getStartV3ById(s[t].startV3);
                if (r && r.scale && (n.transform.localScale = new Laya.Vector3(r.scale.x, r.scale.y, r.scale.z)), r && r.rotation && n.transform.rotate(new Laya.Vector3(r.rotation.x, r.rotation.y, r.rotation.z), !0, !1), u && (n.transform.localPosition = new Laya.Vector3(u.x, u.y, u.z)), l.moveV3 && l.moveV3.length > 0 && this.initObstacleMoveAnima(n, l.moveV3, 0, o, a), l.rotate) {
                    var h = 1;
                    o.speed[a] && (h = o.speed[a] / 100), Laya.timer.clear(this, this.initObstacleRotateAnima), Laya.timer.loop(10 / h, this, this.initObstacleRotateAnima.bind(this, n, l.rotate))
                }
            }

            function a(e, t, a, n, o) {
                var s = e.data,
                    l = i.ConfigMetadata.getInstance().getPositionById(s[t].positionData);
                if (l.rotate) {
                    var r = 1;
                    o.speed[a] && (r = o.speed[a] / 100), Laya.timer.clear(this, this.initObstacleRotateAnima), Laya.timer.loop(10 / r, this, this.initObstacleRotateAnima.bind(this, n, l.rotate))
                }
            }

            function o(e, t, a, i, o) {
                var s = this;
                if (e) {
                    var l = a % t.length,
                        r = t[l],
                        u = null;
                    t[l].type && (u = n.Utils.getEaseType(t[l].type)), l++;
                    var h = 1;
                    i.speed[o] && (h = i.speed[o] / 100), Laya.Tween.to(e.transform, r.data, r.time / h, u, Laya.Handler.create(this, function () {
                        s.initObstacleMoveAnima(e, t, l, i, o)
                    }))
                }
            }

            function s(e, t) {
                e.transform.rotate(new Laya.Vector3(t.x, t.y, t.z), !0, !1)
            }

            function l(e) {
                Laya.Tween.clearAll(e.transform), Laya.timer.clearAll(this)
            }

            function r(e, t) {
                t && t.transform && (1 == e ? (Laya.Tween.pause(t.transform), Laya.timer.clearAll(this)) : Laya.Tween.resume(t.transform))
            }
            e.init = t, e.initRotate = a, e.initObstacleMoveAnima = o, e.initObstacleRotateAnima = s, e.removeAllTween = l, e.setTweenState = r
        }(a.ObstacleScript || (a.ObstacleScript = {}))
    }, {
        "../data/Metadata": 8,
        "../utils/Utils": 43
    }],
    39: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function (e) {
            function t(t, a) {
                void 0 === t && (t = null), void 0 === a && (a = "");
                var i = e.call(this, t, a) || this;
                return i.scaleTime = 100, i
            }
            return __extends(t, e), t.prototype.onDisable = function () {
                Laya.Tween.clearAll(this)
            }, t.prototype.onEnable = function () {
                this.stateNum = 1, this.on(Laya.Event.CLICK, this, this.onBtnClick), this.on(Laya.Event.MOUSE_DOWN, this, this.scaleSmall), this.on(Laya.Event.MOUSE_UP, this, this.scaleBig), this.on(Laya.Event.MOUSE_OUT, this, this.scaleBig)
            }, t.prototype.onBtnClick = function () {}, t.prototype.scaleSmall = function () {
                this.parent && (Laya.Tween.clearAll(this), Laya.Tween.to(this, {
                    scaleX: .8,
                    scaleY: .8
                }, this.scaleTime))
            }, t.prototype.scaleBig = function () {
                this.parent && (Laya.Tween.clearAll(this), Laya.Tween.to(this, {
                    scaleX: 1,
                    scaleY: 1
                }, this.scaleTime))
            }, t
        }(Laya.Button);
        a.default = i
    }, {}],
    40: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i, n = Laya.View,
            o = Laya.Dialog,
            s = Laya.Scene,
            l = Laya.ClassUtils.regClass;
        i = a.ui || (a.ui = {}),
            function (e) {
                var t = function (e) {
                    function t() {
                        return e.call(this) || this
                    }
                    return __extends(t, e), t.prototype.createChildren = function () {
                        e.prototype.createChildren.call(this), this.loadScene("game/BottomGameItem")
                    }, t
                }(n);
                e.BottomGameItemUI = t, l("ui.game.BottomGameItemUI", t);
                var a = function (e) {
                    function t() {
                        return e.call(this) || this
                    }
                    return __extends(t, e), t.prototype.createChildren = function () {
                        e.prototype.createChildren.call(this), this.loadScene("game/ChangeGun")
                    }, t
                }(o);
                e.ChangeGunUI = a, l("ui.game.ChangeGunUI", a);
                var i = function (e) {
                    function t() {
                        return e.call(this) || this
                    }
                    return __extends(t, e), t.prototype.createChildren = function () {
                        e.prototype.createChildren.call(this), this.loadScene("game/DiaAndGlod")
                    }, t
                }(o);
                e.DiaAndGlodUI = i, l("ui.game.DiaAndGlodUI", i);
                var r = function (e) {
                    function t() {
                        return e.call(this) || this
                    }
                    return __extends(t, e), t.prototype.createChildren = function () {
                        e.prototype.createChildren.call(this), this.loadScene("game/Die")
                    }, t
                }(o);
                e.DieUI = r, l("ui.game.DieUI", r);
                var u = function (e) {
                    function t() {
                        return e.call(this) || this
                    }
                    return __extends(t, e), t.prototype.createChildren = function () {
                        e.prototype.createChildren.call(this), this.loadScene("game/GameItem")
                    }, t
                }(n);
                e.GameItemUI = u, l("ui.game.GameItemUI", u);
                var h = function (e) {
                    function t() {
                        return e.call(this) || this
                    }
                    return __extends(t, e), t.prototype.createChildren = function () {
                        e.prototype.createChildren.call(this), this.loadScene("game/GameOver")
                    }, t
                }(o);
                e.GameOverUI = h, l("ui.game.GameOverUI", h);
                var d = function (e) {
                    function t() {
                        return e.call(this) || this
                    }
                    return __extends(t, e), t.prototype.createChildren = function () {
                        e.prototype.createChildren.call(this), this.loadScene("game/GetDiamond")
                    }, t
                }(o);
                e.GetDiamondUI = d, l("ui.game.GetDiamondUI", d);
                var c = function (e) {
                    function t() {
                        return e.call(this) || this
                    }
                    return __extends(t, e), t.prototype.createChildren = function () {
                        e.prototype.createChildren.call(this), this.loadScene("game/GetMoney")
                    }, t
                }(o);
                e.GetMoneyUI = c, l("ui.game.GetMoneyUI", c);
                var m = function (e) {
                    function t() {
                        return e.call(this) || this
                    }
                    return __extends(t, e), t.prototype.createChildren = function () {
                        e.prototype.createChildren.call(this), this.loadScene("game/GunItem")
                    }, t
                }(n);
                e.GunItemUI = m, l("ui.game.GunItemUI", m);
                var g = function (e) {
                    function t() {
                        return e.call(this) || this
                    }
                    return __extends(t, e), t.prototype.createChildren = function () {
                        e.prototype.createChildren.call(this), this.loadScene("game/Loding")
                    }, t
                }(s);
                e.LodingUI = g, l("ui.game.LodingUI", g);
                var p = function (e) {
                    function t() {
                        return e.call(this) || this
                    }
                    return __extends(t, e), t.prototype.createChildren = function () {
                        e.prototype.createChildren.call(this), this.loadScene("game/Lose")
                    }, t
                }(o);
                e.LoseUI = p, l("ui.game.LoseUI", p);
                var f = function (e) {
                    function t() {
                        return e.call(this) || this
                    }
                    return __extends(t, e), t.prototype.createChildren = function () {
                        e.prototype.createChildren.call(this), this.loadScene("game/Main")
                    }, t
                }(s);
                e.MainUI = f, l("ui.game.MainUI", f);
                var _ = function (e) {
                    function t() {
                        return e.call(this) || this
                    }
                    return __extends(t, e), t.prototype.createChildren = function () {
                        e.prototype.createChildren.call(this), this.loadScene("game/OfflineMoney")
                    }, t
                }(o);
                e.OfflineMoneyUI = _, l("ui.game.OfflineMoneyUI", _);
                var y = function (e) {
                    function t() {
                        return e.call(this) || this
                    }
                    return __extends(t, e), t.prototype.createChildren = function () {
                        e.prototype.createChildren.call(this), this.loadScene("game/Play")
                    }, t
                }(s);
                e.PlayUI = y, l("ui.game.PlayUI", y);
                var v = function (e) {
                    function t() {
                        return e.call(this) || this
                    }
                    return __extends(t, e), t.prototype.createChildren = function () {
                        e.prototype.createChildren.call(this), this.loadScene("game/PlayData")
                    }, t
                }(s);
                e.PlayDataUI = v, l("ui.game.PlayDataUI", v);
                var b = function (e) {
                    function t() {
                        return e.call(this) || this
                    }
                    return __extends(t, e), t.prototype.createChildren = function () {
                        e.prototype.createChildren.call(this), this.loadScene("game/Ranking")
                    }, t
                }(n);
                e.RankingUI = b, l("ui.game.RankingUI", b);
                var S = function (e) {
                    function t() {
                        return e.call(this) || this
                    }
                    return __extends(t, e), t.prototype.createChildren = function () {
                        e.prototype.createChildren.call(this), this.loadScene("game/RewardItem")
                    }, t
                }(n);
                e.RewardItemUI = S, l("ui.game.RewardItemUI", S);
                var L = function (e) {
                    function t() {
                        return e.call(this) || this
                    }
                    return __extends(t, e), t.prototype.createChildren = function () {
                        e.prototype.createChildren.call(this), this.loadScene("game/Shop")
                    }, t
                }(o);
                e.ShopUI = L, l("ui.game.ShopUI", L);
                var G = function (e) {
                    function t() {
                        return e.call(this) || this
                    }
                    return __extends(t, e), t.prototype.createChildren = function () {
                        e.prototype.createChildren.call(this), this.loadScene("game/ShopList")
                    }, t
                }(n);
                e.ShopListUI = G, l("ui.game.ShopListUI", G);
                var I = function (e) {
                    function t() {
                        return e.call(this) || this
                    }
                    return __extends(t, e), t.prototype.createChildren = function () {
                        e.prototype.createChildren.call(this), this.loadScene("game/Signin")
                    }, t
                }(o);
                e.SigninUI = I, l("ui.game.SigninUI", I);
                var D = function (e) {
                    function t() {
                        return e.call(this) || this
                    }
                    return __extends(t, e), t.prototype.createChildren = function () {
                        e.prototype.createChildren.call(this), this.loadScene("game/SigninItem")
                    }, t
                }(n);
                e.SigninItemUI = D, l("ui.game.SigninItemUI", D);
                var w = function (e) {
                    function t() {
                        return e.call(this) || this
                    }
                    return __extends(t, e), t.prototype.createChildren = function () {
                        e.prototype.createChildren.call(this), this.loadScene("game/Talent")
                    }, t
                }(o);
                e.TalentUI = w, l("ui.game.TalentUI", w);
                var C = function (e) {
                    function t() {
                        return e.call(this) || this
                    }
                    return __extends(t, e), t.prototype.createChildren = function () {
                        e.prototype.createChildren.call(this), this.loadScene("game/TalentItem")
                    }, t
                }(n);
                e.TalentItemUI = C, l("ui.game.TalentItemUI", C);
                var x = function (e) {
                    function t() {
                        return e.call(this) || this
                    }
                    return __extends(t, e), t.prototype.createChildren = function () {
                        e.prototype.createChildren.call(this), this.loadScene("game/Tips")
                    }, t
                }(o);
                e.TipsUI = x, l("ui.game.TipsUI", x);
                var M = function (e) {
                    function t() {
                        return e.call(this) || this
                    }
                    return __extends(t, e), t.prototype.createChildren = function () {
                        e.prototype.createChildren.call(this), this.loadScene("game/UnLockGun")
                    }, t
                }(o);
                e.UnLockGunUI = M, l("ui.game.UnLockGunUI", M);
                var T = function (e) {
                    function t() {
                        return e.call(this) || this
                    }
                    return __extends(t, e), t.prototype.createChildren = function () {
                        e.prototype.createChildren.call(this), this.loadScene("game/UnLockTalent")
                    }, t
                }(o);
                e.UnLockTalentUI = T, l("ui.game.UnLockTalentUI", T);
                var U = function (e) {
                    function t() {
                        return e.call(this) || this
                    }
                    return __extends(t, e), t.prototype.createChildren = function () {
                        e.prototype.createChildren.call(this), this.loadScene("game/UpGunOfVideo")
                    }, t
                }(o);
                e.UpGunOfVideoUI = U, l("ui.game.UpGunOfVideoUI", U)
            }(i.game || (i.game = {}))
    }, {}],
    41: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../data/SingletonBase"),
            n = e("../data/GameData"),
            o = function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._auditState = 1, t._shareMode = 1, t
                }
                return __extends(t, e), Object.defineProperty(t.prototype, "auditState", {
                    get: function () {
                        return this._auditState
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "shareImageData", {
                    get: function () {
                        return this._shareImageData
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "shareMode", {
                    get: function () {
                        return this._shareMode
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.sendPostRequest = function () {
                    this.onPostComplete(1);
                    // var e = "gameid=118&v=1.1.2",
                    //     t = new Laya.HttpRequest;
                    // t.send("https://account.api.snsfun.com/XyxApi/shstatus", e, "post", "text", ["Content-Type", "application/x-www-form-urlencoded"]), t.once(Laya.Event.COMPLETE, this, this.onPostComplete), t.once(Laya.Event.ERROR, this, this.onPostError)
                }, t.prototype.onPostComplete = function (e) {
                    (0 == +e || 1 == +e) && (this._auditState = +e), console.log("shareType", e), this.getShareImage(), this.getShareBtnMode()
                }, t.prototype.onPostError = function (e) {
                    console.log("shstatus post error : ", e)
                }, t.prototype.getShareImage = function () {
                    this.onGetImageComplete(JSON.stringify([{"id":"310","type":"","text":"\u6709\u4eba@\u6211\uff0c\u4e00\u8d77\u6765\u6253\u67aa\uff01","desc":null,"url":"https:\/\/g.snsfun.com\/data\/uploads\/201909\/5d82195646742.png","query":""}]) )
                }, t.prototype.onGetImageComplete = function (e) {
                    e && e.length > 1 && (this._shareImageData = JSON.parse(e), console.log("this._shareImageData = ", this._shareImageData))
                }, t.prototype.onGetImageError = function (e) {
                    console.log("GetImageError post error : ", e)
                }, t.prototype.getShareBtnMode = function () {
                    this.getShareBtnModeComplete(JSON.stringify({"shareModel":"1","offlineModelType":"1","signinModelType":"1","reviveModelType":"1","threeModelType":"1","getDiamondModelType":"1","getMoneyModelType":"1","isVideoShow":"1","getMoneyShowBanner":"1","noThinkShowVideo":"0","UpGunOfVideoArr":"5&15 &25"}))
                }, t.prototype.getShareBtnModeComplete = function (e) {
                    if (0 == this._auditState && e && e.length > 1) {
                        var t = JSON.parse(e);
                        if (console.log("parseData", t), this._shareMode = t.shareModel, n.GameData.getDiamondModelType = t.getDiamondModelType, n.GameData.getMoneyModelType = t.getMoneyModelType, n.GameData.offlineModelType = t.offlineModelType, n.GameData.reviveModelType = t.reviveModelType, n.GameData.signinModelType = t.signinModelType, n.GameData.threeModelType = t.threeModelType, n.GameData.isVideoShow = t.isVideoShow, n.GameData.getMoneyShowBanner = t.getMoneyShowBanner, n.GameData.noThinkShowVideo = t.noThinkShowVideo, t.UpGunOfVideoArr) {
                            var a = t.UpGunOfVideoArr;
                            if (n.GameData.buyGunCountArr = [], "undefined" != a && a.length > 0) {
                                var i = a.split("&");
                                if (i && i.length > 0)
                                    for (var o = 0; o < i.length; o++) n.GameData.buyGunCountArr.push(Number(i[o]))
                            }
                            console.log("GameData.buyGunCountArr = ", n.GameData.buyGunCountArr)
                        }
                    }
                }, t.prototype.getShareBtnModeIOError = function (e) {
                    console.log("post error : ", e)
                }, t
            }(i.SingletonBase);
        a.default = o, a.httpSend = o.getInstance()
    }, {
        "../data/GameData": 7,
        "../data/SingletonBase": 9
    }],
    42: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../data/SingletonBase"),
            n = function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.isShiedEdition = !1, t.isShowGameBox = !0, t.reviveNum = 0, t.doubleIncomeEndTime = 0, t._shareBtnMode = 0, t._isFirstShare = !0, t._lastShareState = !1, t
                }
                return __extends(t, e), Object.defineProperty(t.prototype, "shareBtnMode", {
                    get: function () {
                        return this._shareBtnMode
                    },
                    set: function (e) {
                        this._shareBtnMode = e % 2
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isFirstShare", {
                    get: function () {
                        return this._isFirstShare
                    },
                    set: function (e) {
                        this._isFirstShare = e
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "lastShareState", {
                    get: function () {
                        return this._lastShareState
                    },
                    set: function (e) {
                        this._lastShareState = e
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(i.SingletonBase);
        a.default = n, a.playerModel = n.getInstance()
    }, {
        "../data/SingletonBase": 9
    }],
    43: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../data/Metadata"),
            n = e("../data/Enum"),
            o = e("../data/EventMgr"),
            s = e("./WxManager"),
            l = e("./PlayerModel"),
            r = e("./HttpSend"),
            u = e("../ad/VideoRw"),
            h = e("../data/GameData");
        ! function (e) {
            function t() {
                var e = (Laya.stage.width, Laya.stage.height),
                    t = (Laya.stage.designWidth, Laya.stage.designHeight);
                return e > t + 1
            }

            function a(e) {
                e.width = Laya.stage.width, e.isModal || (e.height = Laya.stage.height)
            }

            function d(e, t) {
                for (var a = -1, i = e.length, n = 0; i > n; n++)
                    if (e[n] == t) {
                        a = n;
                        break
                    } a >= 0 && e.splice(a, 1)
            }

            function c(e, t) {
                var a = 864e5,
                    i = e / a | 0,
                    n = t / a | 0;
                return i == n
            }

            function m(e) {
                void 0 === e && (e = []);
                for (var t = e.length, a = [], i = 0, n = 0; t > n; n++) a.push(e[n].pro), i += e[n].pro;
                var o = 0;
                for (n = 0; n < a.length; n++) {
                    var s = Math.random() * i;
                    if (s < a[n]) {
                        o = n;
                        break
                    }
                    i -= a[n]
                }
                return o
            }

            function g(e) {
                e = Math.floor(e / 1e3);
                var t = Math.floor(e % 3600 / 60),
                    a = e % 60;
                return p(t) + ":" + p(a)
            }

            function p(e) {
                return 10 > e ? "0" + e : e + ""
            }

            function f(e) {
                return e >= 1e27 ? (e / 1e27).toFixed(1) + "S" : e >= 1e24 ? (e / 1e24).toFixed(1) + "Y" : e >= 1e21 ? (e / 1e21).toFixed(1) + "Z" : e >= 1e18 ? (e / 1e18).toFixed(1) + "E" : e >= 1e15 ? (e / 1e15).toFixed(1) + "P" : e >= 1e12 ? (e / 1e12).toFixed(1) + "T" : e >= 1e9 ? (e / 1e9).toFixed(1) + "B" : e >= 1e6 ? (e / 1e6).toFixed(1) + "M" : e >= 1e3 ? (e / 1e3).toFixed(1) + "K" : e + ""
            }

            function _() {
                var e = Laya.Utils.parseInt(Laya.LocalStorage.getItem("shareTime")),
                    t = c(e, Date.now());
                l.playerModel.isFirstShare = !t
            }

            function y(e, t, a) {
                if (s.wxMgr.isWx()) {
                    _();
                    var i, o = r.httpSend.shareImageData;
                    i = o instanceof Array ? o[Math.floor(Math.random() * o.length)] : o;
                    var u = (new Date).getTime();
                    wx.shareAppMessage({
                        title: i.text,
                        imageUrl: i.url
                    });
                    var h = 2350,
                        d = s.wxMgr.getSystemPlatform();
                    d == n.SystemPlatform.IOS && (h = 2750), wx.onShow(function () {
                        var i = (new Date).getTime();
                        if (i - u >= h)
                            if (l.playerModel.isFirstShare || 0 != l.playerModel.lastShareState) {
                                var n = Math.random(),
                                    o = 0;
                                o = l.playerModel.isFirstShare ? .5 : .3, l.playerModel.isFirstShare = !1, o >= n ? (l.playerModel.lastShareState = !0, 5 == a ? v(null, null, function () {
                                    e && e()
                                }) : (L(), e && e())) : (l.playerModel.lastShareState = !1, G(e, t, a))
                            } else l.playerModel.lastShareState = !0, 5 == a ? v(null, null, function () {
                                e && e()
                            }) : (L(), e && e());
                        else l.playerModel.lastShareState = !1, G(e, t, a);
                        Laya.LocalStorage.setItem("shareTime", u.toString()), wx.offShow()
                    })
                }
            }

            function v(e, t, a) {
                s.wxMgr.isWx() && (u.default.onShow(function () {}, function () {
                    y(e, t)
                }), u.default.onClose(function () {
                    e && e(), u.default.init()
                }, function () {
                    t && t(), u.default.init()
                }, function () {
                    a && a()
                }))
            }

            function b(e, t, a) {
                if (s.wxMgr.isWx()) {
                    var i = r.httpSend.shareMode;
                    e && (i = e), 1 == i ? v(t, a) : 2 == i ? y(t, a) : 3 == i ? (0 == l.playerModel.shareBtnMode ? v(t, a) : y(t, a), l.playerModel.shareBtnMode++) : 4 == i ? y(t, a, i) : 5 == i ? y(t, a, i) : 9 == i && t && t()
                } else t && t()
            }

            function S(e, t, a) {
                var i = 1;
                return u.default.isError ? (e.visible = !0, i = t, 1 == h.GameData.isVideoShow ? e.visible = !0 : e.visible = !1) : u.default.init(function () {
                    e.visible = !0, i = t, 1 == h.GameData.isVideoShow ? e.visible = !0 : e.visible = !1
                }, function () {
                    e.visible = !1, i = 2
                }), r.httpSend.auditState && (e.visible = !0), i
            }

            function L() {
                wx.showToast({
                    title: "分享成功",
                    icon: "",
                    image: "",
                    duration: 1500,
                    mask: !1,
                    success: function () {},
                    fail: function () {},
                    complete: function () {}
                })
            }

            function G(e, t, a) {
                wx.showModal({
                    title: "",
                    content: "分享失败，请试试其他的群或好友",
                    showCancel: !0,
                    cancelText: "关闭",
                    cancelColor: "#000000",
                    confirmText: "重新分享",
                    confirmColor: "#3CC51F",
                    success: function (i) {
                        i.confirm && y(e, t), i.cancel && (5 == a || 4 == a ? v(e, t) : (t && t(), wx.showToast({
                            title: "取消分享",
                            icon: "",
                            image: "",
                            duration: 1500,
                            mask: !0,
                            success: function () {},
                            fail: function () {},
                            complete: function () {}
                        })))
                    },
                    fail: function () {},
                    complete: function () {}
                })
            }

            function I() {
                var t = Laya.Utils.parseInt(Laya.LocalStorage.getItem("reset"));
                0 == t && (Laya.LocalStorage.clear(), Laya.LocalStorage.setItem("reset", "1"));
                var a = Laya.LocalStorage.getJSON("signIn");
                a || (a = [], Laya.LocalStorage.setJSON("signIn", a));
                var n = Laya.Utils.parseInt(Laya.LocalStorage.getItem("MaxGunId"));
                0 == n && (Laya.LocalStorage.setItem("MaxGunId", "1"), Laya.LocalStorage.setItem("totalGold", "4000"));
                var o = Laya.Utils.parseInt(Laya.LocalStorage.getItem("useGunId"));
                0 == o ? Laya.LocalStorage.setItem("useGunId", "1") : h.GameData.useGunId = o;
                var s = Laya.LocalStorage.getJSON("armouryGuns");
                s || (s = [], s.push("0_1"), Laya.LocalStorage.setJSON("armouryGuns", s));
                var l = Laya.LocalStorage.getJSON("goldBuyGunTimes");
                if (!l) {
                    l = [];
                    for (var r = i.GunMetadata.getInstance().getMetadata(), u = 0; u < r.length; u++) l.push(1);
                    Laya.LocalStorage.setJSON("goldBuyGunTimes", l)
                }
                var d = Laya.LocalStorage.getJSON("diamondBuyGunTimes");
                if (!d) {
                    d = [];
                    for (r = i.GunMetadata.getInstance().getMetadata(), u = 0; u < r.length; u++) d.push(1);
                    Laya.LocalStorage.setJSON("diamondBuyGunTimes", d)
                }
                var c = Laya.LocalStorage.getItem("levelNum");
                c && null != c ? h.GameData.levelNum = Number(c) : Laya.LocalStorage.setItem("levelNum", "1");
                var m = Laya.LocalStorage.getJSON("talentLevel");
                if (!m) {
                    m = [];
                    var g = i.OtherMetadata.getInstance().getTalentData();
                    for (u = 0; u < g.length; u++) m.push(0);
                    Laya.LocalStorage.setJSON("talentLevel", m)
                }
                var p = Laya.LocalStorage.getItem("upgradeData");
                p && null != p ? h.GameData.upgradeData = Number(p) : Laya.LocalStorage.setItem("upgradeData", "1");
                var f = Laya.LocalStorage.getJSON("randomData");
                f || (f = i.OtherMetadata.getInstance().getRandomData(), Laya.LocalStorage.setJSON("randomData", f));
                var _ = Laya.LocalStorage.getItem("randomId");
                _ && null != _ ? h.GameData.randomId = Number(_) : Laya.LocalStorage.setItem("randomId", "1");
                var y = Laya.LocalStorage.getItem("logintime"),
                    v = Laya.LocalStorage.getItem("diamondCount");
                h.GameData.diamondCount = 0, y && e.checkIsSameDay(y, Date.now()) && v && (h.GameData.diamondCount = Number(v)), Laya.LocalStorage.setItem("logintime", Date.now() + "")
            }

            function D(e) {
                Laya.Scene.open("game/Tips.scene", !1, e)
            }

            function w(t, a) {
                return void 0 === a && (a = !0), !(!e.checkHasEnoughGold(t, a) || !e.checkHasBagBuyGun())
            }

            function C() {
                var t = Laya.LocalStorage.getJSON("armouryGuns");
                return t.length < 12 || (e.playSound("Error.mp3"), YYGGames.showTip("Space is full, please synthesize or recycle the gun"), !1)
            }

            function x(t, a) {
                void 0 === a && (a = !0);
                var i = Laya.Utils.parseInt(Laya.LocalStorage.getItem("totalGold"));
                return !(t > i) || (1 == a && (e.playSound("Error.mp3"), Laya.Scene.open("game/GetMoney.scene", !1, e.getFreeGold())), !1)
            }

            function M(e) {
                var t = Laya.Utils.parseInt(Laya.LocalStorage.getItem("totalGold"));
                t += e, Laya.LocalStorage.setItem("totalGold", t.toString()), o.default.getInstance.event(n.EventDef.UpdateGold)
            }

            function T(t, a) {
                void 0 === a && (a = !1);
                var i = Laya.Utils.parseInt(Laya.LocalStorage.getItem("totalDiamond"));
                return !(t > i) || (a || (e.playSound("Error.mp3"), e.showMessage("Lack of diamonds!")), !1)
            }

            function U(e) {
                var t = Laya.Utils.parseInt(Laya.LocalStorage.getItem("totalDiamond"));
                t += e, Laya.LocalStorage.setItem("totalDiamond", t.toString()), o.default.getInstance.event(n.EventDef.UpdateDiamond), o.default.getInstance.event(n.EventDef.TalentCanUp)
            }

            function B(e) {
                void 0 === e && (e = 6e4);
                var t = (new Date).getTime(),
                    a = l.playerModel.doubleIncomeEndTime;
                a > t ? a += e : a = t + e, l.playerModel.doubleIncomeEndTime = a, o.default.getInstance.event(n.EventDef.StartDoubleIncome)
            }

            function E() {
                for (var e = 0, t = i.GunMetadata.getInstance(), a = Laya.LocalStorage.getJSON("armouryGuns"), n = 0; n < a.length; n++) {
                    var o = a[n].split("_"),
                        s = t.getGunById(+o[1]);
                    e += +s.output_gold_second
                }
                return e
            }

            function A(e, t) {
                void 0 === t && (t = !1);
                var a = Laya.LocalStorage.getJSON("goldBuyGunTimes");
                t && (a = Laya.LocalStorage.getJSON("diamondBuyGunTimes"));
                for (var i = 0; i < a.length; i++)
                    if (i + 1 == e) {
                        a[i] += 1;
                        break
                    } t ? Laya.LocalStorage.setJSON("diamondBuyGunTimes", a) : Laya.LocalStorage.setJSON("goldBuyGunTimes", a)
            }

            function O() {
                h.GameData.levelNum++, Laya.LocalStorage.removeItem("levelNum"), Laya.LocalStorage.setItem("levelNum", "" + h.GameData.levelNum)
            }

            function k(e) {
                var t = Laya.LocalStorage.getJSON("talentLevel");
                if (t && t.length > 0) {
                    for (var a = 0; a < t.length; a++)
                        if (a + 1 == e) {
                            t[a]++;
                            break
                        } Laya.LocalStorage.setJSON("talentLevel", t)
                }
            }

            function R(e) {
                var t = Laya.LocalStorage.getJSON("randomData");
                if (t && t.length > 0) {
                    for (var a = 0; a < t.length; a++)
                        if (t[a] && t[a].id == h.GameData.randomId) {
                            for (var i = t[a].data, n = !0, o = 0; o < i.length; o++) i[o] && i[o].type == e && (i[o].flag = 1), 1 != i[o].flag && (n = !1);
                            n && (h.GameData.randomId++, Laya.LocalStorage.setItem("randomId", "" + h.GameData.randomId));
                            break
                        } Laya.LocalStorage.setJSON("randomData", t)
                }
            }

            function P(e) {
                var t = i.OtherMetadata.getInstance().getTalentData(),
                    a = Laya.LocalStorage.getJSON("talentLevel"),
                    n = null,
                    o = 0;
                if (a && a.length > 0)
                    for (var s = 0; s < a.length; s++)
                        if (s + 1 == e) {
                            n = t[s], o = a[s];
                            break
                        } if (0 == o) return 6 == e || 3 == e ? 0 : 1;
                if (n && n.data && n.data.length >= o) {
                    var l = n.data[o - 1];
                    return 6 != n.id && 3 != n.id && (l = (l + 100) / 100), l
                }
            }

            function Y() {
                Laya.timer.clear(e, V)
            }

            function N() {
                Laya.timer.loop(1e3, e, V)
            }

            function V() {
                var e = E();
                M(e)
            }

            function j(t) {
                for (var a = 0; a < e.gunModelArr.length; a++)
                    if (t == e.gunModelArr[a].id) return e.gunModelArr[a].model
            }

            function H() {
                var t = "unity/LayaScene_main/Conventional/Assets/sence_mesh";
                s.wxMgr.isWx() || (t = "unity/LayaScene_main/Conventional/Assets/sence_mesh");
                for (var a = ["box_001-Box002.lm", "box_002-Cylinder014_0.lm", "box_003-Cylinder016_0.lm", "box_004-Cone001.lm", "box_005-Tube001.lm", "box_006-Cylinder013_0.lm", "box_007-Cylinder001_004.lm", "box_008-Cylinder015_0.lm", "box_009-Cylinder001_003.lm", "box_010-Cylinder001_002.lm", "box_011-Cylinder001_001.lm", "box_012-Box001_0.lm", "box_013-Cylinder001_0.lm", "box_014-Box004_0.lm", "box_015-Star001_0.lm", "box_016-Box004.lm", "box_017-Box005.lm", "box_018-Box008.lm", "box_019-shanxingx4.lm", "box_money_01-Text001_0.lm", "box_money_02-Cylinder002_0.lm"], i = function (i) {
                        s.wxMgr.isWx() ? Laya.Mesh.load(t + "/" + a[i], Laya.Handler.create(n, function (t) {
                            "box_money_01-Text001_0.lm" == a[i] ? e.ObstacleModelArr.push({
                                id: 98,
                                model: t
                            }) : "box_money_02-Cylinder002_0.lm" == a[i] ? e.ObstacleModelArr.push({
                                id: 99,
                                model: t
                            }) : e.ObstacleModelArr.push({
                                id: i + 1,
                                model: t
                            })
                        })) : Laya.Mesh.load(t + "/" + a[i], Laya.Handler.create(n, function (t) {
                            "box_money_01-Text001_0.lm" == a[i] ? e.ObstacleModelArr.push({
                                id: 98,
                                model: t
                            }) : "box_money_02-Cylinder002_0.lm" == a[i] ? e.ObstacleModelArr.push({
                                id: 99,
                                model: t
                            }) : e.ObstacleModelArr.push({
                                id: i + 1,
                                model: t
                            })
                        }))
                    }, n = this, o = 0; o < a.length; o++) i(o)
            }

            function F() {
                var e = "unity/SceneModel/scene/Conventional";
                s.wxMgr.isWx() || (e = "unity/SceneModel/scene/Conventional");
                for (var t = ["sence_01.lh", "sence_02.lh", "sence_03.lh", "sence_04.lh"], a = 0; a < t.length; a++) Laya.loader.create(e + "/" + t[a])
            }

            function W(t, a) {
                for (var i = 0; i < e.ObstacleModelArr.length; i++)
                    if (t == e.ObstacleModelArr[i].id) {
                        a.meshFilter.sharedMesh = e.ObstacleModelArr[i].model, !0;
                        break
                    }
            }

            function J(t, a) {
                for (var i = 0; i < e.SceneModelData.length; i++)
                    if (t == e.SceneModelData[i].id) {
                        a.meshFilter.sharedMesh = e.SceneModelData[i].model;
                        break
                    }
            }

            function K() {
                var e = i.GunMetadata.getInstance(),
                    t = (e.getMetadata(), Laya.LocalStorage.getJSON("goldBuyGunTimes")),
                    a = Laya.Utils.parseInt(Laya.LocalStorage.getItem("MaxGunId")),
                    n = e.getGunById(a),
                    o = n.unlock_buy_gold_level,
                    s = e.getGunById(o),
                    l = +s.buy_gold,
                    r = +s.add_gold,
                    u = Math.floor(l * Math.pow(r, +t[o - 1] - 1));
                return u
            }

            function z() {
                s.wxMgr.isWx() && wx.onHide(function () {
                    var e = (new Date).getTime();
                    Laya.LocalStorage.setItem("offlineTime", e.toString()), wx.onShow(function () {
                        var e = (new Date).getTime();
                        Laya.LocalStorage.setItem("offlineTime", "" + e), wx.offShow()
                    })
                })
            }

            function X() {
                var t = (new Date).getTime(),
                    a = Laya.Utils.parseInt(Laya.LocalStorage.getItem("offlineTime"));
                if (a > 0) {
                    var i = e.getGarageIncome(),
                        n = Math.floor((t - a) / 1e3);
                    n > 3600 * (2 + e.getTalentDataById(3)) && (n = 3600 * (2 + e.getTalentDataById(3)));
                    var o = Math.floor(i * n);
                    Laya.Scene.open("game/OfflineMoney.scene", !1, o), Laya.LocalStorage.setItem("offlineTime", "0")
                }
            }

            function Z() {
                var t = Laya.LocalStorage.getJSON("signIn");
                if (t || (t = []), t.length > 0) {
                    if (e.checkIsSameDay(t[t.length - 1], Date.now())) return !0;
                    t.length >= 7 && Laya.LocalStorage.setJSON("signIn", [])
                }
                return !1
            }

            function q() {
                var t = Laya.LocalStorage.getJSON("upgradeData"),
                    a = i.OtherMetadata.getInstance().getUpgradeData();
                if (a && t && (t <= a.length ? this.need = +a[t - 1] : this.need = +a[a.length - 1]), !e.checkHasEnoughDiamond(this.need, !0)) return !1;
                var n = Laya.LocalStorage.getJSON("randomData");
                return !(h.GameData.randomId >= n.length)
            }

            function Q(e, t) {
                var a = "unity/sound/" + e;
                return YYGGames.audio.playSound(a, t)
            }

            function $() {
                return console.log("🚀 ~ file: bundle.js:6497 ~ Q ~ Q:"), YYGGames.audio.playMusic("unity/sound/GameBgm.mp3")
            }

            function ee(e) {
                return YYGGames.audio.stopSound(e)
            }

            function te() {
                return YYGGames.audio.stopMusic()
            }

            function ae(e) {
                var t = null;
                switch (e) {
                    case 1:
                        t = Laya.Ease.sineInOut;
                        break;
                    case 2:
                        t = Laya.Ease.strongInOut;
                        break;
                    case 3:
                        t = Laya.Ease.quintInOut;
                        break;
                    case 4:
                        t = Laya.Ease.quartInOut;
                        break;
                    case 5:
                        t = Laya.Ease.quadInOut;
                        break;
                    case 6:
                        t = Laya.Ease.linearInOut;
                        break;
                    case 7:
                        t = Laya.Ease.expoInOut
                }
                return t
            }

            function ie(e) {
                e = "#" === e.charAt(0) ? e.substring(1) : e, 3 === e.length && (e = e.replace(/(\w)(\w)(\w)/, "$1$1$2$2$3$3"));
                for (var t = /\w{2}/g, a = e.match(t), i = 0; i < a.length; i++) a[i] = parseInt(a[i], 16) / 255;
                return a
            }

            function ne() {
                s.wxMgr.isWx() && wx.vibrateLong({
                    success: function () {},
                    fail: function () {},
                    complete: function () {}
                })
            }

            function oe() {
                s.wxMgr.isWx() && wx.vibrateShort({
                    success: function () {},
                    fail: function () {},
                    complete: function () {}
                })
            }

            function se(e) {
                s.wxMgr.isWx() && wx.navigateToMiniProgram({
                    appId: e,
                    path: "",
                    extraData: {},
                    envVersion: "release",
                    success: function () {
                        console.log("游戏跳转成功", "appid", e)
                    },
                    fail: function () {
                        console.log("游戏跳转失败", "appid", e)
                    },
                    complete: function () {}
                })
            }

            function le() {
                var e = Laya.LocalStorage.getJSON("upgradeData");
                e && 1 == e ? o.default.getInstance.event(n.EventDef.NeedGuide, 1) : o.default.getInstance.event(n.EventDef.CloseDialog)
            }

            function re() {
                if (1 == h.GameData.noThinkShowVideo) {
                    var e = Math.random();
                    if (h.GameData.showVideoRP > e) return u.default.onShow(), h.GameData.showVideoRP = -.6, !1;
                    h.GameData.showVideoRP += .3
                }
                return !0
            }
            e.isFullScreen = t, e.setResize = a, e.removeByElements = d, e.checkIsSameDay = c, e.getRandomIndex = m, e.getFormatTimeStr = g, e.getFormatMoneyStr = f, e.shareApp = y, e.showVideo = v, e.shareByMode = b, e.videoIconInit = S, e.initData = I, e.showMessage = D, e.checkCanBuyCar = w, e.checkHasBagBuyGun = C, e.checkHasEnoughGold = x, e.updateGold = M, e.checkHasEnoughDiamond = T, e.updateDiamond = U, e.startDoubleIncome = B, e.getGarageIncome = E, e.resetBuyGunTimes = A, e.updateLevel = O, e.updateTalentData = k, e.updateRandomData = R, e.getTalentDataById = P, e.stopProduceGold = Y, e.produceGold = N, e.gunModelArr = [], e.gunLmatArr = [], e.changeModelByGunId = j, e.ObstacleModelArr = [], e.loadingObstacleModel = H, e.SceneModelData = [], e.loadingSceneModel = F, e.changeModelByObstacleId = W, e.changeModelBySceneId = J, e.getFreeGold = K, e.addOfflineEvent = z, e.checkShowOfflineGold = X, e.checkTodayHasSignIn = Z, e.checkTalentState = q, e.playSound = Q, e.playMusic = $, e.stopSound = ee, e.stopMusic = te, e.getEaseType = ae, e.transferColorToRgb = ie, e.vibrateLong = ne, e.vibrateShort = oe, e.navigateToMiniProgram = se, e.selectNeedGuideUp = le, e.noThinkShowVideo = re
        }(a.Utils || (a.Utils = {}))
    }, {
        "../ad/VideoRw": 4,
        "../data/Enum": 5,
        "../data/EventMgr": 6,
        "../data/GameData": 7,
        "../data/Metadata": 8,
        "./HttpSend": 41,
        "./PlayerModel": 42,
        "./WxManager": 44
    }],
    44: [function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../data/SingletonBase"),
            n = e("../data/Enum"),
            o = e("./PlayerModel"),
            s = function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.isWx = function () {
                    return !!window.wx
                }, t.prototype.aldSendEvent = function (e, t, a, i) {
                    if (void 0 === i && (i = !1), this.isWx()) {
                        var n = "";
                        o.playerModel.chid ? (n = "从" + o.playerModel.chid + "路径进来-", n += e) : n = e, t || (t = ""), a || (a = "");
                        var s = {};
                        s[t] = a, wx.aldSendEvent(n, s)
                    }
                }, t.prototype.aldStage = function (e, t) {
                    this.isWx() && wx.aldStage && (1 == e ? wx.aldStage.onStart({
                        stageId: t + "",
                        stageName: "No." + t
                    }) : 2 == e ? wx.aldStage.onEnd({
                        stageId: t + "",
                        stageName: "No." + t,
                        event: "fail",
                        params: {
                            desc: "闯关失败"
                        }
                    }) : wx.aldStage.onEnd({
                        stageId: t + "",
                        stageName: "No." + t,
                        event: "complete",
                        params: {
                            desc: "关卡完成"
                        }
                    }))
                }, t.prototype.getSystemPlatform = function () {
                    var e = wx.getSystemInfoSync();
                    n.SystemPlatform.NONE;
                    return "ios" == e.platform ? n.SystemPlatform.IOS : "android" == e.platform ? n.SystemPlatform.ANDROID : "devtools" == e.platform && n.SystemPlatform.DEVTOOLS, n.SystemPlatform.NONE
                }, t.prototype.initSDK = function () {
                    var e = this;
                    this.isWx() && (this.launchOption = wx.getLaunchOptionsSync(), wx.showShareMenu({
                        withShareTicket: !0,
                        success: function () {},
                        fail: function () {},
                        complete: function () {}
                    }), wx.onShow(function (t) {
                        e.launchOption.shareTicket = t.shareTicket, wx.offShow()
                    }), wx.onShareAppMessage(function (e) {
                        return {
                            title: "什么？你要在悬崖上漂移？",
                            imageUrl: "rank/01.png"
                        }
                    }))
                }, t.prototype.getLaunchOptionsSync = function () {
                    return this.isWx() ? this.launchOption : null
                }, t
            }(i.SingletonBase);
        a.default = s, a.wxMgr = s.getInstance()
    }, {
        "../data/Enum": 5,
        "../data/SingletonBase": 9,
        "./PlayerModel": 42
    }]
}, {}, [2]);