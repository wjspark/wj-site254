(function () {
    'use strict';

    var BannerSize;
    (function (BannerSize) {
        BannerSize[BannerSize["BANNER_SIZE_320_50"] = 0] = "BANNER_SIZE_320_50";
        BannerSize[BannerSize["BANNER_SIZE_360_144"] = 1] = "BANNER_SIZE_360_144";
        BannerSize[BannerSize["BANNER_SIZE_320_100"] = 2] = "BANNER_SIZE_320_100";
        BannerSize[BannerSize["BANNER_SIZE_300_250"] = 3] = "BANNER_SIZE_300_250";
        BannerSize[BannerSize["BANNER_SIZE_360_57"] = 4] = "BANNER_SIZE_360_57";
        BannerSize[BannerSize["BANNER_SIZE_SMART"] = 5] = "BANNER_SIZE_SMART";
    })(BannerSize || (BannerSize = {}));
    class Android {
        constructor() {
            this.openAd = true;
            this.success = 0;
            this.failed = 0;
            this.interSign = false;
            this.fisrtStartTime = 0;
            this.isLoaded = false;
        }
        initFisrtStartTime() {
            let key = "tankFisrtStartTime";
            let json = Laya.LocalStorage.getItem(key);
            if (json != null) {
                this.fisrtStartTime = JSON.parse(json);
            }
            else {
                this.fisrtStartTime = Date.now();
                Laya.LocalStorage.setItem(key, this.fisrtStartTime.toString());
            }
        }
        getGamePlayedTime() {
            return Math.floor((Date.now() - this.fisrtStartTime) / 1000 / 60 / 60);
        }
        vibrateShort() {
        }
        startBanner() {
        }
        stopBanner() {
        }
        showBannerAd(size = BannerSize.BANNER_SIZE_360_144) {
        }
        hideBannerAd() {
        }
        showNativeAd(bottom = 0) {
        }
        hideNativeAd() {
        }
        showNativeSmallAd() {
        }
        hideNativeSmallAd() {
        }
        showInstream(left, top) {
        }
        hideInstream() {
        }
        showInterstitialAd() {
            window.showInterstitial && window.showInterstitial(this.interCallBack);
            console.log('showInterstitialAd');
        }
        pause() {
            Laya.stage.renderingEnabled = false;
            Laya.updateTimer.pause();
            Laya.physicsTimer.pause();
        }
        resume() {
            Laya.stage.renderingEnabled = true;
            Laya.updateTimer.resume();
            Laya.physicsTimer.resume();
        }
        playVideo(callback, cancel, errCallback) {
            callback();
           // window.showReward && window.showReward(callback);
            console.log('playVideo');
        }
        VideoCallBack(code) {
        }
        loadComplete() {
            console.log('AndroidAd loadComplete');
            if (!this.isLoaded) {
                window.loadComplete && window.loadComplete();
                this.isLoaded = true;
            }
        }
    }
    const platform = new Android();
    window.JSAndroid = platform;

    var Scene = Laya.Scene;
    var REG = Laya.ClassUtils.regClass;
    var ui;
    (function (ui) {
        var scene;
        (function (scene) {
            class GameSceneUI extends Scene {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren();
                    this.createView(GameSceneUI.uiView);
                }
            }
            GameSceneUI.uiView = { "type": "Scene", "props": { "y": 0, "x": 0, "width": 1280, "runtime": "script/game/GameUI.ts", "positionVariance_0": 100, "name": "GameScene", "maxPartices": 100, "height": 720 }, "compId": 1, "child": [{ "type": "Sprite", "props": { "y": 0, "x": 0, "width": 1280, "texture": "resources/game/game_bg.png", "name": "bg", "height": 720 }, "compId": 660 }, { "type": "Sprite", "props": { "y": 0, "x": 0, "width": 1280, "var": "centerNode", "name": "centerNode", "height": 720 }, "compId": 69, "child": [{ "type": "Button", "props": { "y": 559, "x": 1128, "width": 178, "var": "attackPad", "stateNum": 1, "skin": "resources/game/gamepad.png", "pivotY": 89, "pivotX": 89, "name": "attackpad", "height": 178 }, "compId": 696 }, { "type": "Button", "props": { "y": 559, "x": 1128, "var": "btnAttack", "stateNum": 2, "skin": "resources/game/icon_attack.png", "name": "btn_attack", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 686 }, { "type": "Sprite", "props": { "y": 429, "x": 1100, "texture": "resources/game/bullet_bg.png", "name": "bullet_bg" }, "compId": 698 }, { "type": "Button", "props": { "y": 424, "x": 958, "width": 92, "var": "skill_bg", "stateNum": 1, "skin": "resources/game/skill_bg.png", "runtime": "script/game/SkillButton.ts", "name": "skill_bg", "height": 92 }, "compId": 709, "child": [{ "type": "Sprite", "props": { "y": 3, "x": 3, "width": 86, "texture": "resources/game/skill_cover.png", "name": "skill_cover", "height": 86 }, "compId": 710 }, { "type": "Image", "props": { "y": 10, "x": 10, "width": 72, "skin": "resources/game/skill_2101.png", "name": "skill_icon", "height": 72 }, "compId": 711 }] }, { "type": "Label", "props": { "y": 438, "width": 35, "var": "leftBulletLabel", "valign": "middle", "text": "01", "scaleY": 0.7, "scaleX": 0.7, "name": "leftBulletLabel", "height": 30, "fontSize": 22, "color": "#FFFFFF", "centerX": 494, "align": "center" }, "compId": 699 }] }, { "type": "Image", "props": { "y": 0, "width": 1280, "var": "topNode", "name": "topNode", "height": 163, "centerX": 0 }, "compId": 22, "child": [{ "type": "Label", "props": { "y": 35, "width": 130, "var": "timeLabel", "valign": "middle", "text": "00:00", "name": "timeLabel", "height": 30, "fontSize": 26, "color": "#FFFFFF", "centerX": 30, "align": "center" }, "compId": 136 }, { "type": "Sprite", "props": { "y": 100, "x": 483, "visible": false, "var": "tipsBg", "texture": "resources/game/tis_bg.png", "name": "tips_bg" }, "compId": 702, "child": [{ "type": "Sprite", "props": { "y": 10, "x": 18, "texture": "resources/game/kill_source_bg.png", "name": "source_bg" }, "compId": 703 }, { "type": "Sprite", "props": { "y": 10, "x": 298, "texture": "resources/game/kill_target_bg.png", "name": "target_bg" }, "compId": 704 }, { "type": "Sprite", "props": { "y": 40, "x": 145, "texture": "resources/game/lbl_kill.png", "name": "lbl_kill" }, "compId": 705 }, { "type": "Label", "props": { "y": 14, "x": 88, "width": 180, "var": "nicknameLabel", "text": "NAME", "styleSkin": "resources/game/lbl_kill.png", "overflow": "hidden", "name": "nickname_label", "height": 26, "fontSize": 25, "color": "#FFFFFF" }, "compId": 706 }, { "type": "Image", "props": { "y": 14, "x": 22, "width": 52, "var": "sourceAvatar", "skin": "resources/common/white.png", "name": "source_avatar", "height": 52 }, "compId": 707 }, { "type": "Image", "props": { "y": 14, "x": 302, "width": 52, "var": "targetAvatar", "skin": "resources/common/white.png", "name": "target_avatar", "height": 52 }, "compId": 708 }] }] }, { "type": "Image", "props": { "y": 0, "x": 1050, "width": 230, "var": "miniMap", "top": 0, "right": 0, "name": "mini_map", "height": 230 }, "compId": 688, "child": [{ "type": "Image", "props": { "top": 0, "skin": "resources/common/black.png", "right": 0, "name": "bg", "left": 0, "bottom": 0, "alpha": 0.5 }, "compId": 689 }] }, { "type": "Sprite", "props": { "y": 451, "x": 329, "width": 720, "var": "bottomNode", "name": "bottomNode", "height": 220 }, "compId": 187 }, { "type": "Sprite", "props": { "y": 518, "x": 201, "width": 178, "var": "gamepad", "texture": "resources/game/gamepad.png", "pivotY": 89, "pivotX": 89, "name": "gamepad", "height": 178 }, "compId": 183, "child": [{ "type": "Sprite", "props": { "y": 89, "x": 89, "width": 112, "var": "gamepadControl", "texture": "resources/game/gamepad_control.png", "pivotY": 56, "pivotX": 56, "name": "gamepad_control", "height": 112 }, "compId": 184 }] }, { "type": "Sprite", "props": { "y": 0, "x": 0, "width": 1280, "var": "matchNode", "runtime": "script/game/MatchNode.ts", "name": "MatchNode", "height": 720 }, "compId": 137, "child": [{ "type": "Sprite", "props": { "y": 0, "x": 0, "width": 1280, "texture": "resources/common/bg.png", "name": "bg", "height": 720 }, "compId": 690 }, { "type": "Image", "props": { "top": 0, "skin": "resources/common/watermark.png", "sizeGrid": "0,0,0,0,1", "right": 0, "name": "watermark", "left": 0, "bottom": 0 }, "compId": 691 }, { "type": "Sprite", "props": { "width": 1280, "name": "content", "height": 720, "centerY": 0, "centerX": 0 }, "compId": 139, "child": [{ "type": "Sprite", "props": { "y": 95, "x": 496.5, "texture": "resources/match/title_match.png", "name": "title" }, "compId": 692 }, { "type": "Image", "props": { "y": 199, "x": 173, "width": 934, "skin": "resources/match/user_bg.png", "sizeGrid": "27,22,39,28", "name": "user_bg", "height": 214 }, "compId": 693 }, { "type": "ProgressBar", "props": { "y": 469, "x": 400, "width": 480, "skin": "resources/match/progressbar.png", "sizeGrid": "0,60,0,60", "name": "progressBar", "height": 38 }, "compId": 694 }, { "type": "Label", "props": { "y": 475, "x": 540, "width": 200, "text": "label", "name": "progress_label", "height": 30, "fontSize": 25, "color": "#FFFFFF", "align": "center" }, "compId": 695 }] }] }, { "type": "Sprite", "props": { "y": 0, "x": 0, "width": 1280, "var": "revive", "runtime": "script/game/Revive.ts", "name": "Revive", "height": 720 }, "compId": 588, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 1280, "skin": "resources/common/black.png", "sizeGrid": "2,2,2,2", "name": "bg", "height": 720, "alpha": 0.85 }, "compId": 596 }, { "type": "Sprite", "props": { "y": 0, "x": 390, "width": 500, "name": "content", "height": 720 }, "compId": 701, "child": [{ "type": "Sprite", "props": { "y": 71, "x": 107, "texture": "resources/game/title_revive.png", "name": "title", "centerX": 0 }, "compId": 700 }, { "type": "Image", "props": { "y": 164, "x": 150, "width": 164, "skin": "resources/game/revive_circle_bg.png", "name": "circle_bg", "height": 164 }, "compId": 591 }, { "type": "Image", "props": { "y": 168, "x": 154, "width": 156, "skin": "resources/game/revive_circle.png", "name": "circle", "height": 155 }, "compId": 592 }, { "type": "Button", "props": { "y": 413, "x": 232, "stateNum": 1, "skin": "resources/game/btn_revive.png", "name": "btn_revive", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 589, "child": [{ "type": "Image", "props": { "y": 51, "x": 36, "skin": "resources/game/icon_video.png", "name": "icon", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 712 }] }, { "type": "Button", "props": { "y": 520, "x": 232, "stateNum": 1, "skin": "resources/game/btn_revive_continue_lbl.png", "name": "btn_continue", "anchorY": 1, "anchorX": 0.5 }, "compId": 590 }, { "type": "Label", "props": { "y": 242, "x": 232, "width": 120, "valign": "top", "text": "10", "name": "label_time", "height": 100, "fontSize": 108, "color": "#FFFFFF", "anchorY": 0.5, "anchorX": 0.5, "align": "center" }, "compId": 595 }] }] }], "loadList": ["resources/game/game_bg.png", "resources/game/gamepad.png", "resources/game/icon_attack.png", "resources/game/bullet_bg.png", "resources/game/skill_bg.png", "resources/game/skill_cover.png", "resources/game/skill_2101.png", "resources/game/tis_bg.png", "resources/game/kill_source_bg.png", "resources/game/kill_target_bg.png", "resources/game/lbl_kill.png", "resources/common/white.png", "resources/common/black.png", "resources/game/gamepad_control.png", "resources/common/bg.png", "resources/common/watermark.png", "resources/match/title_match.png", "resources/match/user_bg.png", "resources/match/progressbar.png", "resources/game/title_revive.png", "resources/game/revive_circle_bg.png", "resources/game/revive_circle.png", "resources/game/btn_revive.png", "resources/game/icon_video.png", "resources/game/btn_revive_continue_lbl.png"], "loadList3D": [] };
            scene.GameSceneUI = GameSceneUI;
            REG("ui.scene.GameSceneUI", GameSceneUI);
            class LoadSceneUI extends Scene {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren();
                    this.createView(LoadSceneUI.uiView);
                }
            }
            LoadSceneUI.uiView = { "type": "Scene", "props": { "y": 0, "x": 0, "width": 1280, "runtime": "script/load/LoadUI.ts", "name": "LoadScene", "height": 720 }, "compId": 2, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 1280, "var": "background", "skin": "load/bg.png", "name": "bg", "height": 720 }, "compId": 3 }, { "type": "Image", "props": { "y": 0, "width": 1280, "var": "contentbg", "name": "contentbg", "height": 720, "centerX": 0 }, "compId": 4, "child": [{ "type": "Sprite", "props": { "y": 79, "x": 305, "texture": "load/game_logo.png", "name": "game_logo" }, "compId": 5 }, { "type": "Sprite", "props": { "y": 290, "x": 443.5, "visible": false, "texture": "load/company_logo.png", "name": "company_logo" }, "compId": 7 }, { "type": "ProgressBar", "props": { "y": 409, "x": 408, "width": 480, "var": "progressBar", "skin": "load/progressbar.png", "sizeGrid": "0,60,0,60", "name": "progressBar", "height": 38 }, "compId": 8 }, { "type": "ProgressBar", "props": { "y": 460, "x": 408, "width": 480, "var": "subprogressBar", "skin": "load/sub_progressbar.png", "sizeGrid": "0,60,0,60", "name": "subprogressBar", "height": 38 }, "compId": 13 }, { "type": "Label", "props": { "width": 500, "var": "tipsLabel", "text": "Loding...", "scaleY": 0.85, "scaleX": 0.85, "name": "tips_label", "fontSize": 25, "color": "#ffffff", "centerX": 6, "bottom": 192, "align": "center" }, "compId": 10 }, { "type": "Label", "props": { "x": 400, "width": 500, "var": "progressBarLabel", "text": "1%", "name": "progressBarLabel", "fontSize": 22, "color": "#ffffff", "bottom": 277, "align": "center" }, "compId": 9 }] }], "loadList": ["load/bg.png", "load/game_logo.png", "load/company_logo.png", "load/progressbar.png", "load/sub_progressbar.png"], "loadList3D": [] };
            scene.LoadSceneUI = LoadSceneUI;
            REG("ui.scene.LoadSceneUI", LoadSceneUI);
        })(scene = ui.scene || (ui.scene = {}));
    })(ui || (ui = {}));

    class ex {
        static hexToColor(e) {
            e = e.replace(/^#?/, '0x');
            var t = parseInt(e), i = (t >> 16) & 255, a = (t >> 8) & 255, s = 255 & t;
            return new Laya.Vector3(i / 255, a / 255, s / 255);
        }
        static hexToColor4F(e) {
            e = e.replace(/^#?/, '0x');
            var t = parseInt(e);
            if (t > 16777215) {
                var i = (t >> 24) & 255, a = (t >> 16) & 255, s = (t >> 8) & 255, o = 255 & t;
                return new Laya.Vector4(i / 255, a / 255, s / 255, o / 255);
            }
            return (i = (t >> 16) & 255), (a = (t >> 8) & 255), (s = 255 & t), new Laya.Vector4(i / 255, a / 255, s / 255, 1);
        }
        static v2(e, t = 0) {
            return 'number' == typeof e ? new Laya.Vector2(e, t) : new Laya.Vector2(e.x, e.y);
        }
        static rect(e = 0, t = 0, i = 0, a = 0) {
            return {
                x: e,
                y: t,
                width: i,
                height: a
            };
        }
        static v2temp(e, t = 0) {
            const i = ex.v2(0, 0);
            return 'number' == typeof e ? ((i.x = e), (i.y = t)) : ((i.x = e.x), (i.y = e.y)), i;
        }
        static v2Zero(e) {
            return (e.x = e.y = 0), e;
        }
        static v3(e, t = 0, i = 0) {
            return 'number' == typeof e ? new Laya.Vector3(e, t, i) : new Laya.Vector3(e.x, e.y, e.z);
        }
        static v4(e = 0, t = 0, i = 0, a = 0) {
            return new Laya.Vector4(e, t, i, a);
        }
        static v3temp(e, t = 0, i = 0) {
            const a = ex.v3(0, 0, 0);
            return 'number' == typeof e ? ((a.x = e), (a.y = t), (a.z = i)) : ((a.x = e.x), (a.y = e.y), (a.z = e.z)), a;
        }
        static v3Zero(e) {
            return (e.x = e.y = e.z = 0), e;
        }
        static v4temp(e, t = 0, i = 0, a = 0) {
            const s = ex.v4(0, 0, 0, 0);
            return 'number' == typeof e ? ((s.x = e), (s.y = t), (s.z = i), (s.w = a)) : ((s.x = e.x), (s.y = e.y), (s.z = e.z), (s.w = e.w)), s;
        }
        static pAdd(t, i, a) {
            return ((a = a || ex.v2(0)).x = t.x + i.x), (a.y = t.y + i.y), a;
        }
        static pSub(t, i, a) {
            return ((a = a || ex.v2(0)).x = t.x - i.x), (a.y = t.y - i.y), a;
        }
        static pMult(t, i, a) {
            return ((a = a || ex.v2(0)).x = t.x * i), (a.y = t.y * i), a;
        }
        static isZero(e) {
            return 0 == e.x && 0 == e.y;
        }
        static pLength(t) {
            return Math.sqrt(ex.pLengthSQ(t));
        }
        static pLengthSQ(t) {
            return ex.pDot(t, t);
        }
        static pDot(e, t) {
            return e.x * t.x + e.y * t.y;
        }
        static pCenter(t, i, a) {
            return ((a = a || ex.v2(0)).x = (t.x + i.x) / 2), (a.y = (t.y + i.y) / 2), a;
        }
        static pDistance(t, a) {
            const i = ex.v2(0, 0);
            return ex.pSub(t, a, i), ex.pLength(i);
        }
        static pForAngle(t, i) {
            return ((i = i || ex.v2(0)).x = Math.cos(t)), (i.y = Math.sin(t)), i;
        }
        static pToAngle(e) {
            return Math.atan2(e.y, e.x);
        }
        static pNormalize(e) {
            let t = e.x * e.x + e.y * e.y;
            return 1 == t ? e : (t = Math.sqrt(t)) < 2e-37 ? void 0 : ((t = 1 / t), (e.x *= t), (e.y *= t), e);
        }
        static pAddv3(e, t, i) {
            return Laya.Vector3.add(e, t, i), i;
        }
        static pSubv3(e, t, i) {
            return Laya.Vector3.subtract(e, t, i), i;
        }
        static pMultv3(t, i, a) {
            return ((a = a || ex.v3(0)).x = t.x * i), (a.y = t.y * i), (a.z = t.z * i), a;
        }
        static pDistancev3(e, t) {
            return Laya.Vector3.distance(e, t);
        }
        static v2ToV3(e, t) {
            return (t.x = e.x), (t.y = 0), (t.z = e.y), t;
        }
        static v3ToV2(e, t) {
            return (t.x = e.x), (t.y = e.z), t;
        }
        static getVec2Distance(t, i) {
            const o = ex.v2(0), n = ex.v2(0);
            return ex.vector3ToVector2(t, o), ex.vector3ToVector2(i, n), ex.pDistance(o, n);
        }
        static containPoint(e, t) {
            return t.x >= e.x && t.x <= e.x + e.width && t.y >= e.y && t.y <= e.y + e.height;
        }
        static vector3ToVector2(e, t) {
            (t.x = e.x), (t.y = e.z);
        }
        static convertToRotate(e) {
            return (180 / Math.PI) * e;
        }
        static convertToRadian(e) {
            return (Math.PI / 180) * e;
        }
        static formatRotation(e) {
            return (e %= 360) > 180 ? (e -= 360) : e < -180 && (e += 360), e;
        }
        static rand(e, t) {
            let i = Math.floor(e + Math.random() * (t - e + 1));
            return (i = Math.min(i, t)), (i = Math.max(i, e));
        }
        static randFloat(e, t) {
            return e + Math.random() * (t - e);
        }
        static formatNumber(e, t) {
            for (var i = ''; t > 0;)
                e < Math.pow(10, t - 1) && (i += '0'), t--;
            return e > 0 ? i + e : i;
        }
        static formatSecondToMinute(e) {
            var t = Math.floor(e / 60), i = Math.floor(e % 60);
            return this.formatNumber(t, 2) + ':' + this.formatNumber(i, 2);
        }
        static shuffle(e) {
            let t = e.length;
            for (; t;) {
                let i = Math.floor(Math.random() * t--);
                [e[i], e[t]] = [e[t], e[i]];
            }
        }
        static printVector(e, t) {
            t instanceof Laya.Vector2 ? console.log(e, t.x.toFixed(4), t.y.toFixed(4)) : console.log(e, t.x.toFixed(4), t.y.toFixed(4), t.z.toFixed(4));
        }
        static htmlEncode(e) {
            let t = '';
            return e && 0 != e.length ? (t = (t = (t = e.replace('<', '&lt;')).replace('>', '&gt;')).replace('&', '*')) : '';
        }
        static listenerOnError() { }
        static isValidTimerDelta() {
            return Laya.timer.delta < 1e3;
        }
        static changeThreeDecimal(e) {
            return isNaN(e) ? (console.warn('function:changeTwoDecimal->parameter error'), 0) : Math.round(1e3 * e) / 1e3;
        }
        static isToday(e) {
            let t = new Date(e), i = new Date();
            return t.getFullYear() == i.getFullYear() && t.getMonth() == i.getMonth() && t.getDate() == i.getDate();
        }
    }
    ex.tmpVector2 = ex.v2(0, 0);
    ex.tmpVector3 = ex.v3(0, 0, 0);

    class G {
        static setStorageSync(e, t) {
            Laya.LocalStorage.setItem(e, t);
        }
        static getStorageSync(e) {
            return Laya.LocalStorage.getItem(e);
        }
        static clearStorage(e) {
            Laya.LocalStorage.removeItem(e);
        }
        static showToast(e) { }
    }

    class GameModel {
    }
    GameModel.WHITE_GOLD = 'WHITE_GOLD';
    GameModel.GRAY_GOLD = 'GRAY_GOLD';
    GameModel.SIGNIN_FONT = 'SIGNIN_FONT';
    GameModel.MATCH_LOAD = 'MATCH_LOAD';
    GameModel.TIMER_WHITE = 'TIMER_WHITE';
    GameModel.TIMER_RED = 'TIMER_RED';
    GameModel.TIMER_REVIVE = 'TIMER_REVIVE';
    GameModel.OVER_FONT = 'OVER_FONT';
    GameModel.BLOOD_DOUBLE = 'BLOOD_DOUBLE';
    GameModel.BLOOD_WHITE = 'BLOOD_WHITE';
    GameModel.SKILL_FONT = 'SKILL_FONT';
    GameModel.SceneCount = 4;
    GameModel.CameraDefaultPos = new Laya.Vector3(-0, 13, 9);
    GameModel.CameraDefaultRotation = new Laya.Vector3(-60, -0, 0);
    GameModel.CameraPreviewPos = new Laya.Vector3(-0, 65, 36);
    GameModel.CameraPreviewRotation = new Laya.Vector3(-65, -0, 0);
    GameModel.CameraLobbyPos = new Laya.Vector3(-0, 2, 4.3);
    GameModel.CameraLobbyRotation = new Laya.Vector3(-17, -0, 0);
    GameModel.Scene3DZIndex = 1;
    GameModel.MapWidth = 70;
    GameModel.HalfMapWidth = GameModel.MapWidth / 2;
    GameModel.TankWidth = 1.7;
    GameModel.HalfTankWidth = GameModel.TankWidth / 2;
    GameModel.BulletWidth = 0.3;
    GameModel.HalfBulletWidth = GameModel.BulletWidth / 2;
    GameModel.TankRefreshDistance = 10;
    GameModel.CollisionGroupWall = Laya.Physics3DUtils.COLLISIONFILTERGROUP_DEFAULTFILTER;
    GameModel.CollisionGroupTank = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER2;
    GameModel.SEAT_MAP_ROW = 3;
    GameModel.SEAT_MAP_COL = 4;
    GameModel.SEAT_COUNT = GameModel.SEAT_MAP_ROW * GameModel.SEAT_MAP_COL;
    GameModel.DUAN_STAR = 3;
    GameModel.UAV_COUNT = 4;
    GameModel.UAV_SPEED = 18;
    GameModel.UAV_ROCKET_ATTACK_RANGE = 10;
    GameModel.UAVList = [2001, 2002, 2003, 2004, 2005];
    GameModel.UAVSkillList = [
        {
            name: 'Armor Repair',
            describe: 'The drone restores a certain amount of blood to the tank'
        },
        {
            name: 'Quantum Force Field',
            describe: 'The drone applies a shield to the tank that counteracts the damage'
        },
        {
            name: 'Phase Shift',
            describe: 'Triggered when the tank takes lethal damage, invincible for a certain period of time'
        },
        {
            name: 'Synergy',
            describe: 'Gives tanks extra blood and attack during combat'
        },
        {
            name: 'Area bombardment',
            describe: 'Deals damage to a large area of the target'
        }
    ];
    GameModel.TankDescribeList = [
        'The most basic type with the most common type of attack',
        'Enhanced tank capable of firing two shells at the same time',
        'A tank type with extremely fast attack speed, capable of firing three shells in a row',
        'A tank type that can shoot flames and deal a lot of damage at close range',
        'A tank type that ejects projectiles and can attack unexpectedly',
        'A tank type that can fire multiple shells at the same time, with a wide attack range',
        'A tank type that fires electromagnetic cannons to disrupt the enemy\'s movement, and has great explosive power',
        'A tank type that fires RPGs, has a long attack range and can inflict ranged damage',
        'A tank type that fires lasers and can penetrate all objects in its path',
        'A tank type that fires a freezing cannon that can freeze enemies and stop them from moving',
        'A tank type that fires tracking rounds that will give the targeted target nowhere to hide',
        'A tank type that fires split shells and can split multiple shells to attack more targets',
        'A tank type with extremely fast attack speed, capable of firing three shells in a row',
        'A tank type that shoots flames and can deal a lot of damage at close range',
        'A tank type that ejects projectiles and can attack unexpectedly',
        'A tank type that can fire multiple shells at the same time and has a wide attack range',
        'A tank type that fires electromagnetic cannons to disrupt the enemy\'s movement, and has great explosive power',
        'A tank type that fires RPGs, has a long attack range and can inflict ranged damage',
        'A tank type that fires lasers and can penetrate all objects in its path',
        'A tank type that fires a freezing cannon that can freeze enemies and stop them from moving',
        'A tank type that fires tracking rounds, targets that are targeted will have nowhere to hide',
        'A tank type that fires split shells, which can split multiple shells to attack more targets',
        'A tank type with extremely fast attack speed, capable of firing three shells in a row',
        'A tank type that can shoot flames and deal a lot of damage at close range',
        'A tank type that ejects projectiles and can attack unexpectedly',
        'A tank type that can fire multiple shells at the same time and has a wide attack range',
        'A tank type that fires electromagnetic cannons to disrupt the enemy\'s movement, and has great explosive power',
        'A tank type that fires RPGs, has a long attack range and can inflict ranged damage',
        'A tank type that fires lasers and can penetrate all objects in its path',
        'A tank type that fires a freezing cannon that can freeze enemies and stop them from moving',
        'A tank type that fires tracking rounds, targets that are targeted will have nowhere to hide',
        'A tank type that fires split shells, which can split multiple shells to attack more targets', 'A tank type that fires split shells, which can split multiple shells to attack more targets'
    ];
    var MeshType;
    (function (MeshType) {
        MeshType[MeshType["Shell"] = 1] = "Shell";
    })(MeshType || (MeshType = {}));
    var TankType;
    (function (TankType) {
        TankType[TankType["Normal"] = 1] = "Normal";
        TankType[TankType["Double"] = 2] = "Double";
        TankType[TankType["Consecutive"] = 3] = "Consecutive";
        TankType[TankType["Flame"] = 4] = "Flame";
        TankType[TankType["Rebound"] = 5] = "Rebound";
        TankType[TankType["Multiple"] = 6] = "Multiple";
        TankType[TankType["Electromagnetic"] = 7] = "Electromagnetic";
        TankType[TankType["Rocket"] = 8] = "Rocket";
        TankType[TankType["Laser"] = 9] = "Laser";
        TankType[TankType["Frozen"] = 10] = "Frozen";
        TankType[TankType["Track"] = 11] = "Track";
        TankType[TankType["Divide"] = 12] = "Divide";
    })(TankType || (TankType = {}));
    var BulletType;
    (function (BulletType) {
        BulletType[BulletType["Normal"] = 1] = "Normal";
        BulletType[BulletType["Flame"] = 4] = "Flame";
        BulletType[BulletType["Rebound"] = 5] = "Rebound";
        BulletType[BulletType["Multiple"] = 6] = "Multiple";
        BulletType[BulletType["Electromagnetic"] = 7] = "Electromagnetic";
        BulletType[BulletType["Rocket"] = 8] = "Rocket";
        BulletType[BulletType["Laser"] = 9] = "Laser";
        BulletType[BulletType["Frozen"] = 10] = "Frozen";
        BulletType[BulletType["Track"] = 11] = "Track";
        BulletType[BulletType["Divide"] = 12] = "Divide";
    })(BulletType || (BulletType = {}));
    var TankState;
    (function (TankState) {
        TankState[TankState["Ready"] = 1] = "Ready";
        TankState[TankState["Move"] = 2] = "Move";
        TankState[TankState["Attack"] = 3] = "Attack";
        TankState[TankState["Death"] = 4] = "Death";
    })(TankState || (TankState = {}));
    var BulletState;
    (function (BulletState) {
        BulletState[BulletState["Ready"] = 1] = "Ready";
        BulletState[BulletState["Move"] = 2] = "Move";
        BulletState[BulletState["Follow"] = 3] = "Follow";
        BulletState[BulletState["Shown"] = 4] = "Shown";
        BulletState[BulletState["Stop"] = 5] = "Stop";
        BulletState[BulletState["Clear"] = 6] = "Clear";
    })(BulletState || (BulletState = {}));
    var UAVState;
    (function (UAVState) {
        UAVState[UAVState["Ready"] = 1] = "Ready";
        UAVState[UAVState["Move"] = 2] = "Move";
        UAVState[UAVState["Attack"] = 3] = "Attack";
        UAVState[UAVState["Death"] = 4] = "Death";
    })(UAVState || (UAVState = {}));
    var UAVType;
    (function (UAVType) {
        UAVType[UAVType["ZhiYaun"] = 2001] = "ZhiYaun";
        UAVType[UAVType["LiangZi"] = 2002] = "LiangZi";
        UAVType[UAVType["ShouHu"] = 2003] = "ShouHu";
        UAVType[UAVType["FuZhu"] = 2004] = "FuZhu";
        UAVType[UAVType["HongZha"] = 2005] = "HongZha";
    })(UAVType || (UAVType = {}));
    var SkillType;
    (function (SkillType) {
        SkillType[SkillType["ZhuangJiaXiuFu"] = 2101] = "ZhuangJiaXiuFu";
        SkillType[SkillType["LiangZiLiChang"] = 2102] = "LiangZiLiChang";
        SkillType[SkillType["XiangWeiZhuanYi"] = 2103] = "XiangWeiZhuanYi";
        SkillType[SkillType["XieTongZuoZhan"] = 2104] = "XieTongZuoZhan";
        SkillType[SkillType["QuYuHongZha"] = 2105] = "QuYuHongZha";
    })(SkillType || (SkillType = {}));
    var SkillBuffType;
    (function (SkillBuffType) {
        SkillBuffType[SkillBuffType["MoveSpeed"] = 0] = "MoveSpeed";
        SkillBuffType[SkillBuffType["Attack"] = 1] = "Attack";
        SkillBuffType[SkillBuffType["AttackSpeed"] = 2] = "AttackSpeed";
        SkillBuffType[SkillBuffType["SlowdownAttackSpeed"] = 3] = "SlowdownAttackSpeed";
        SkillBuffType[SkillBuffType["RecoveryBlood"] = 4] = "RecoveryBlood";
        SkillBuffType[SkillBuffType["Shield"] = 5] = "Shield";
        SkillBuffType[SkillBuffType["Invincible"] = 6] = "Invincible";
        SkillBuffType[SkillBuffType["Frozen"] = 7] = "Frozen";
    })(SkillBuffType || (SkillBuffType = {}));
    var RewardType;
    (function (RewardType) {
        RewardType[RewardType["Gold"] = 0] = "Gold";
        RewardType[RewardType["Gem"] = 1] = "Gem";
    })(RewardType || (RewardType = {}));
    var CurrencyType;
    (function (CurrencyType) {
        CurrencyType[CurrencyType["Gold"] = 0] = "Gold";
        CurrencyType[CurrencyType["Gem"] = 1] = "Gem";
    })(CurrencyType || (CurrencyType = {}));
    var EventType;
    (function (EventType) {
        EventType["GameStart"] = "GameStart";
        EventType["GameSuccess"] = "GameSuccess";
        EventType["GameFailed"] = "GameFailed";
    })(EventType || (EventType = {}));
    var PageName;
    (function (PageName) {
        PageName["Lobby"] = "\u5927\u5385";
        PageName["TankShop"] = "\u5766\u514B\u5DE5\u5382";
    })(PageName || (PageName = {}));
    var AdTag;
    (function (AdTag) {
        AdTag["SingleCustom"] = "SingleCustom";
        AdTag["HorizontalList"] = "HorizontalList";
        AdTag["VerticalList"] = "VerticalList";
        AdTag["LeftList"] = "LeftList";
        AdTag["RightList"] = "RightList";
    })(AdTag || (AdTag = {}));
    var GuideStep;
    (function (GuideStep) {
        GuideStep[GuideStep["None"] = 0] = "None";
        GuideStep[GuideStep["StartGame"] = 1] = "StartGame";
        GuideStep[GuideStep["Move"] = 2] = "Move";
        GuideStep[GuideStep["Attack"] = 3] = "Attack";
        GuideStep[GuideStep["AttackShown"] = 4] = "AttackShown";
        GuideStep[GuideStep["BackHome"] = 5] = "BackHome";
        GuideStep[GuideStep["Buy"] = 6] = "Buy";
        GuideStep[GuideStep["Merge"] = 7] = "Merge";
        GuideStep[GuideStep["End"] = 8] = "End";
    })(GuideStep || (GuideStep = {}));
    var CheatPos;
    (function (CheatPos) {
        CheatPos["CheatBox"] = "CheatBox";
        CheatPos["GameOver"] = "GameOver";
        CheatPos["RewardTips"] = "RewardTips";
        CheatPos["GiftNode"] = "GiftNode";
        CheatPos["FreeGold"] = "FreeGold";
        CheatPos["FreeGem"] = "FreeGem";
        CheatPos["RoleUpgrade"] = "RoleUpgrade";
        CheatPos["GameUI"] = "GameUI";
    })(CheatPos || (CheatPos = {}));
    var AirdropType;
    (function (AirdropType) {
        AirdropType[AirdropType["Normal"] = 0] = "Normal";
        AirdropType[AirdropType["Double"] = 1] = "Double";
    })(AirdropType || (AirdropType = {}));
    var UAVUnlockType;
    (function (UAVUnlockType) {
        UAVUnlockType[UAVUnlockType["Video"] = 1] = "Video";
        UAVUnlockType[UAVUnlockType["Gem"] = 2] = "Gem";
        UAVUnlockType[UAVUnlockType["Sign"] = 3] = "Sign";
    })(UAVUnlockType || (UAVUnlockType = {}));
    var DuanType;
    (function (DuanType) {
        DuanType[DuanType["Bronze"] = 1] = "Bronze";
        DuanType[DuanType["Silver"] = 2] = "Silver";
        DuanType[DuanType["Gold"] = 3] = "Gold";
        DuanType[DuanType["Platinum"] = 4] = "Platinum";
        DuanType[DuanType["Diamond"] = 5] = "Diamond";
        DuanType[DuanType["Master"] = 6] = "Master";
        DuanType[DuanType["King"] = 7] = "King";
        DuanType[DuanType["King2"] = 8] = "King2";
    })(DuanType || (DuanType = {}));
    var GameState;
    (function (GameState) {
        GameState["None"] = "None";
        GameState["Ready"] = "Ready";
        GameState["Running"] = "Running";
        GameState["Pause"] = "Pause";
        GameState["End"] = "End";
    })(GameState || (GameState = {}));
    var Sprite3DType;
    (function (Sprite3DType) {
        Sprite3DType["Scene"] = "Scene";
        Sprite3DType["TankShadow"] = "TankShadow";
        Sprite3DType["TankBase"] = "TankBase";
        Sprite3DType["TankTurret"] = "TankTurret";
        Sprite3DType["Ef_PaoDan"] = "Ef_PaoDan";
        Sprite3DType["Aerocraft"] = "Aerocraft";
        Sprite3DType["Aerocraft_PaoDan"] = "Aerocraft_PaoDan";
        Sprite3DType["Ef_QiangKou"] = "Ef_QiangKou";
        Sprite3DType["Ef_QiangKou2"] = "Ef_QiangKou2";
        Sprite3DType["Ef_Hit"] = "Ef_Hit";
        Sprite3DType["Ef_Burst"] = "Ef_Burst";
        Sprite3DType["Ef_Skill_tanke"] = "Ef_Skill_tanke";
        Sprite3DType["Ef_Skill_wurenji"] = "Ef_Skill_wurenji";
        Sprite3DType["Ef_Frozen"] = "Ef_Frozen";
        Sprite3DType["Ef_Electromagnetic"] = "Ef_Electromagnetic";
    })(Sprite3DType || (Sprite3DType = {}));

    class GameConfig {
        static get usingTank() {
            return this.trialTank > 0 ? this.trialTank : GameData.currTank;
        }
        static initUserData() {
            var e;
            GameData.initTestOpenIdData();
            GameData.signday < 6 && (this.signed = ex.isToday(GameData.lastsigntime));
            GameData.receiveData && !ex.isToday(GameData.receiveData.lastgettime) && GameData.resetReceiveData();
            this.PlayerTotal = 10;
            this.UAVTotal = 2;
        }
        static setAdConfig(e) {
            let t = this.csvToJSON(e);
        }
        static setGameConfig(e) {
            let t = this.csvToJSON(e);
            if (t && t.length > 0) {
                let e = t[0];
                e.rebox && (e.rebox = this.parseReBox(e.rebox)), (this.GameConf = e);
            }
        }
        static setTankGrow(e) {
            let t = this.csvToJSON(e);
            t.forEach((e, t) => {
                (e.level = t + 1), (e.describe = GameModel.TankDescribeList[t]), e.debuff && (e.debuff = this.parseDebuff(e.debuff));
            }),
                (this.TankList = t),
                (this.TankMinID = t[0].id),
                (this.TankMaxID = t[t.length - 1].id);
        }
        static setAilogic(e) {
            let t = this.csvToJSON(e);
            this.Ailogic = t;
        }
        static setTankCoin(e) {
            this.csvToJSON(e).forEach((e, t) => {
                let i = this.TankList[t];
                i && e && e.id && ((i.buy = this.parseJsonList(e.buy)), (i.buyadd = e.buyadd), (i.profit = e.profit), (i.sell = e.sell), (i.goldcount = e.goldcount));
            });
        }
        static setUAV(e) {
            let t = this.csvToJSON(e);
            t.forEach(e => {
                (e.typeNum = e.type % 2e3),
                    e.upprice && (e.upprice = this.parseTypeAndCount(e.upprice)),
                    e.recovery && (e.recovery = this.parseUAVRecovery(e.recovery)),
                    e.unlock && (e.unlock = this.parseTypeAndCount(e.unlock));
            }),
                (this.UAVList = t),
                (this.UAVMinType = t[0].type);
        }
        static setUAVSkill(e) {
            let t = this.csvToJSON(e);
            this.UAVSkillList = t;
        }
        static setDuan(e) {
            let t = this.csvToJSON(e);
            t.forEach(e => {
                e.tank && (e.tank = this.parseJsonList(e.tank)), e.uav && (e.uav = this.parseJsonList(e.uav)), e.aiaction && (e.aiaction = this.parseJsonList(e.aiaction));
            }),
                (this.DuanList = t),
                (this.DuanMaxID = t[t.length - 1].id),
                (this.DuanStarMax = t.length);
        }
        static getDuanStar(e = null) {
            return (e = null != e ? e : GameData.duanStar) <= 0 ? 0 : e > this.DuanStarMax ? GameModel.DUAN_STAR : ((e - 1) % 3) + 1;
        }
        static getAilogicInfo(e) {
            for (let t = 0; t < this.Ailogic.length; t++)
                if (this.Ailogic[t].id == e)
                    return this.Ailogic[t];
            return this.Ailogic[0];
        }
        static getTankInfo(e) {
            for (let t = 0; t < this.TankList.length; t++)
                if (this.TankList[t].id == e)
                    return this.TankList[t];
            return null;
        }
        static getTankPrice(e) {
            var t;
            let i = this.getTankInfo(e), a = i.buy, s = null !== (t = GameData.getBuyTimes(e)) && void 0 !== t ? t : 0;
            for (; --s >= 0;)
                a *= i.buyadd / 100;
            return a;
        }
        static getUAVInfo(e) {
            for (let t = 0; t < this.UAVList.length; t++)
                if (this.UAVList[t].id == e)
                    return this.UAVList[t];
            return null;
        }
        static getUAVInfoWithLevel(e, t) {
            if (e <= 0)
                return null;
            t <= 0 && (t = 1);
            for (let i = 0; i < this.UAVList.length; i++)
                if (this.UAVList[i].type == e && this.UAVList[i].level == t)
                    return this.UAVList[i];
            return null;
        }
        static getUAVRestoreLeftTime(e) {
            let t = GameData.getUAV(e), i = this.getUAVInfoWithLevel(e, t.level);
            if (t.fighttimes >= i.recovery.validtimes) {
                let a = Date.now() - t.lastfighttime, s = i.recovery.cdtime - a;
                if (s > 0)
                    return s;
                GameData.restoreUAV(e);
            }
            return 0;
        }
        static getSkillInfo(e) {
            if (e <= 0)
                return null;
            for (let t = 0; t < this.UAVSkillList.length; t++)
                if (this.UAVSkillList[t].id == e)
                    return this.UAVSkillList[t];
            return null;
        }
        static getDuanInfo(e) {
            for (let t = 0; t < this.DuanList.length; t++)
                if (this.DuanList[t].id == e)
                    return this.DuanList[t];
            return null;
        }
        static getDuanInfoWithType(e) {
            for (let t = 0; t < this.DuanList.length; t++)
                if (this.DuanList[t].ranktype == e)
                    return this.DuanList[t];
            return null;
        }
        static getNextRewardDuan() {
            let e = GameData.duanMax > 0 ? this.getDuanInfo(GameData.duanMax) : this.getCurrentDuanInfo();
            for (let t = 0; t < this.DuanList.length; t++)
                if (this.DuanList[t].ranktype > e.ranktype)
                    return this.DuanList[t];
            return null;
        }
        static getCurrentDuanInfo() {
            return this.getDuanInfoWithStar(GameData.duanStar);
        }
        static getDuanInfoWithStar(e) {
            let t = e - 1;
            return t < 0 ? this.DuanList[0] : t >= this.DuanList.length ? this.DuanList[this.DuanList.length - 1] : this.DuanList[t];
        }
        static showParseFail(e, t) { }
        static csvToJSON(e) {
            let t = window['Papa'].parse(e, {
                dynamicTyping: !0,
                header: !0
            }).data;
            return t.pop(), t;
        }
        static parseWeight(e) {
            try {
                let t = [], i = JSON.parse(e);
                for (let e = 0; e < i.length; e++) {
                    let a = i[e].split('-');
                    a &&
                        a.length >= 2 &&
                        t.push({
                            type: parseInt(a[0]),
                            weight: parseInt(a[1])
                        });
                }
                return t;
            }
            catch (t) { }
            return null;
        }
        static parseCountWeight(e) {
            try {
                let t = [], i = JSON.parse(e);
                for (let e = 0; e < i.length; e++) {
                    let a = i[e].split('-');
                    a &&
                        a.length >= 2 &&
                        t.push({
                            count: parseInt(a[0]),
                            weight: parseInt(a[1])
                        });
                }
                return t;
            }
            catch (t) { }
            return null;
        }
        static parseTimeSection(e) {
            let t = JSON.parse(e);
            return t.length >= 2
                ? {
                    cdmin: t[0],
                    cdmax: t[1]
                }
                : null;
        }
        static parseTypeAndCount(e) {
            let t = JSON.parse(e);
            return t.length >= 2
                ? {
                    type: t[0],
                    count: t[1]
                }
                : null;
        }
        static parseReBox(e) {
            let t = JSON.parse(e);
            return t.length >= 2
                ? {
                    tankId: t[0],
                    refreshtime: t[1]
                }
                : null;
        }
        static parseDebuff(e) {
            let t = JSON.parse(e);
            return t.length >= 2
                ? {
                    percent: t[0],
                    continued: t[1]
                }
                : null;
        }
        static parseUAVRecovery(e) {
            let t = JSON.parse(e);
            return t.length >= 2
                ? {
                    validtimes: t[0],
                    cdtime: t[1]
                }
                : null;
        }
        static parseJsonList(e) {
            return JSON.parse(e);
        }
    }
    GameConfig.DEBUG = !1;
    GameConfig.GameConf = {
        gold: 0,
        diamonds: 0,
        diamondsnum: 0,
        goldnum: 0,
        shield: 0,
        boxadd: 0,
        upadd: 0,
        time: 0,
        rebox: {
            refreshtime: 1000,
            tankId: 0
        }
    };
    GameConfig.TankList = null;
    GameConfig.Ailogic = null;
    GameConfig.UAVList = null;
    GameConfig.UAVSkillList = null;
    GameConfig.DuanList = null;
    GameConfig.PlayerTotal = 0;
    GameConfig.UAVTotal = 0;
    GameConfig.TankMinID = 0;
    GameConfig.TankMaxID = 0;
    GameConfig.UAVMinType = 0;
    GameConfig.DuanMaxID = 0;
    GameConfig.DuanStarMax = 0;
    GameConfig.trialTank = 0;
    GameConfig.currFightUAV = 0;
    GameConfig.winTimes = 0;
    GameConfig.startGameTime = 0;
    GameConfig.continueCancelRestoreUAVTimes = 0;
    GameConfig.showInterstitialAdTime = 0;
    GameConfig.signed = !1;
    GameConfig.baseRewardGold = 0;

    class GameData {
        static check() {
            console.log('GameData is ok.');
        }
        static initWithData(e) {
            var t, i;
            try {
                if (null == e || '' == e) {
                    this.gold = null !== (t = GameConfig.GameConf.gold) && void 0 !== t ? t : 0;
                    this.gem = null !== (i = GameConfig.GameConf.diamonds) && void 0 !== i ? i : 0;
                    for (let e = 0; e < GameModel.SEAT_COUNT; e++)
                        this.seatList.push(0);
                    return void (this.seatList[0] = GameConfig.TankMinID);
                }
                let a = JSON.parse(e);
                a.onHideTime && (this.onHideTime = a.onHideTime);
                a.gold && (this.gold = Math.round(a.gold));
                a.gem && (this.gem = Math.round(a.gem));
                a.battleTimes && (this.battleTimes = a.battleTimes);
                a.signday && (this.signday = a.signday);
                a.lastsigntime && (this.lastsigntime = a.lastsigntime);
                a.receiveData && (this.receiveData = a.receiveData);
                a.currTank && (this.currTank = a.currTank);
                a.unlockTankId && (this.unlockTankId = a.unlockTankId);
                a.seatList && (this.seatList = a.seatList);
                a.tankList && (this.tankList = a.tankList);
                a.currUAV && (this.currUAV = a.currUAV);
                a.uavList && (this.uavList = a.uavList);
                a.playVideoTimes && (this.playVideoTimes = a.playVideoTimes);
                a.duanStar && (this.duanStar = a.duanStar);
                a.duanMax && (this.duanMax = a.duanMax);
            }
            catch (e) {
                console.warn(e);
            }
        }
        static initTestOpenIdData() {
        }
        static save() {
            try {
                this.lastGameTime = Date.now();
                let param = {
                    battleTimes: GameData.battleTimes,
                    gold: GameData.gold,
                    gem: GameData.gem,
                    onHideTime: GameData.onHideTime,
                    signday: GameData.signday,
                    lastsigntime: GameData.lastsigntime,
                    receiveData: GameData.receiveData,
                    currTank: GameData.currTank,
                    unlockTankId: GameData.unlockTankId,
                    seatList: GameData.seatList,
                    tankList: GameData.tankList,
                    currUAV: GameData.currUAV,
                    uavList: GameData.uavList,
                    playVideoTimes: GameData.playVideoTimes,
                    duanStar: GameData.duanStar,
                    duanMax: GameData.duanMax,
                    lastGameTime: GameData.lastGameTime
                };
                G.setStorageSync('GameData', JSON.stringify(param));
            }
            catch (e) {
                console.warn(e);
            }
        }
        static upload() { }
        static saveAndUpload() {
            Laya.timer.callLater(this, this.callLaterSaveAndUpload);
        }
        static callLaterSaveAndUpload() {
            this.save();
        }
        static addGold(e) {
            (e = Math.round(e)) > 0 && ((this.gold += e), this.saveAndUpload());
        }
        static payGold(e) {
            return this.gold >= e && ((this.gold -= e), this.saveAndUpload(), !0);
        }
        static addGem(e) {
            e > 0 && ((this.gem += e), this.saveAndUpload());
        }
        static payGem(e) {
            return this.gem >= e && ((this.gem -= e), this.saveAndUpload(), !0);
        }
        static addPlayeVideoTimes() {
            this.playVideoTimes++, this.saveAndUpload();
        }
        static passLevel() {
            this.battleTimes < 20 && this.battleTimes++, this.saveAndUpload();
        }
        static signIn() {
            this.signday < 6 && (this.signday++, 6 == this.signday && (this.signday = 0)), (this.lastsigntime = Date.now()), this.saveAndUpload();
        }
        static receiveGold(e) {
            this.addGold(e),
                this.receiveData
                    ? (this.receiveData.goldtimes++, (this.receiveData.lastgettime = Date.now()))
                    : (this.receiveData = {
                        goldtimes: 1,
                        gemtimes: 0,
                        lastgettime: Date.now()
                    });
        }
        static receiveGem(e) {
            this.addGem(e),
                this.receiveData
                    ? (this.receiveData.gemtimes++, (this.receiveData.lastgettime = Date.now()))
                    : (this.receiveData = {
                        goldtimes: 0,
                        gemtimes: 1,
                        lastgettime: Date.now()
                    });
        }
        static getReceiveGoldTimes() {
            return this.receiveData ? this.receiveData.goldtimes : 0;
        }
        static getReceiveGemTimes() {
            return this.receiveData ? this.receiveData.gemtimes : 0;
        }
        static resetReceiveData() {
            this.receiveData = {
                goldtimes: 0,
                gemtimes: 0,
                lastgettime: Date.now()
            };
        }
        static getTankData(e) {
            for (let t = 0; t < this.tankList.length; t++)
                if (this.tankList[t].tankId == e)
                    return this.tankList[t];
            return null;
        }
        static getBuyTimes(e) {
            var t, i;
            return null !== (i = null === (t = this.getTankData(e)) || void 0 === t ? void 0 : t.buytimes) && void 0 !== i ? i : 0;
        }
        static buyTank(e) {
            let t = this.getTankData(e);
            t
                ? t.buytimes++
                : this.tankList.push({
                    tankId: e,
                    buytimes: 1
                }),
                this.saveAndUpload();
        }
        static changeUseTank(e) {
            this.currTank = e;
        }
        static unlockTank(e) {
            this.unlockTankId = e;
        }
        static getUAV(e) {
            for (let t = 0; t < this.uavList.length; t++)
                if (this.uavList[t].type == e)
                    return this.uavList[t];
            let t = {
                type: e,
                level: 0,
                lastfighttime: 0,
                fighttimes: 0
            };
            return this.uavList.push(t), this.saveAndUpload(), t;
        }
        static hasUAV(e) {
            let t = this.getUAV(e);
            return !!t && t.level > 0;
        }
        static buyUAV(e) {
            (this.getUAV(e).level = 1), this.saveAndUpload();
        }
        static gradeUAV(e) {
            this.getUAV(e).level++, this.saveAndUpload();
        }
        static getUAVLevel(e) {
            if (e > 0) {
                return this.getUAV(e).level;
            }
            return 0;
        }
        static changeUseUAV(e) {
            this.currUAV = e;
        }
        static uavGoToWar(e) {
            let t = this.getUAV(e);
            t.fighttimes++, (t.lastfighttime = Date.now()), this.saveAndUpload();
        }
        static updateUseUAVTime(e) {
            (this.getUAV(e).lastfighttime = Date.now()), this.saveAndUpload();
        }
        static restoreUAV(e) {
            let t = this.getUAV(e);
            (t.fighttimes = 0), (t.lastfighttime = 0), this.saveAndUpload();
        }
        static addStar() {
            this.duanStar++, this.saveAndUpload();
        }
        static subStar() {
            this.duanStar > 0 && (this.duanStar--, this.saveAndUpload());
        }
        static unlockDuan(e) {
            return e > this.duanMax && ((this.duanMax = e), this.saveAndUpload(), !0);
        }
    }
    GameData.battleTimes = 0;
    GameData.gold = 0;
    GameData.gem = 0;
    GameData.onHideTime = 0;
    GameData.signday = 0;
    GameData.lastsigntime = 0;
    GameData.receiveData = null;
    GameData.currTank = 1001;
    GameData.unlockTankId = 1001;
    GameData.seatList = [];
    GameData.tankList = [];
    GameData.currUAV = 0;
    GameData.uavList = [];
    GameData.playVideoTimes = 0;
    GameData.duanStar = 0;
    GameData.duanMax = 0;
    GameData.lastGameTime = 0;

    class GA {
    }
    GA.formatNumber = function (e) {
        if (e < 1e4)
            return e.toFixed();
        if (e < 1e6)
            return (e / 1e3).toFixed(1) + 'K';
        if (e < 1e9)
            return (e / 1e3 / 1e3).toFixed(1) + 'M';
        if (e < 1e12)
            return (e / 1e3 / 1e3 / 1e3).toFixed(1) + 'B';
        if (e < 1e15)
            return (e / 1e3 / 1e3 / 1e3 / 1e3).toFixed(1) + 'T';
        {
            let t = Math.round(e).toString(), o = t.indexOf('e+');
            if (o > 0) {
                let e = t.substr(o + 2);
                return t.substr(0, 4) + 'E' + e;
            }
            {
                let t = Math.round(e).toString().length - 1;
                return (e / Math.pow(10, t)).toFixed(1) + 'E' + t;
            }
        }
    };
    GA.formatTime = function (e) {
        let t = Math.floor(e / 3600), o = Math.floor((e - 3600 * t) / 60), a = Math.floor(e % 60), i = '';
        return t > 0 && (i = (t < 10 ? '0' : '') + t.toFixed() + ':'), (i += (o < 10 ? '0' : '') + o.toFixed() + ':' + (a < 10 ? '0' : '') + a.toFixed());
    };

    class GameInfo {
        static getLeftCheatTimes(e) {
            return 0;
        }
        static cheatButtonClick(e, t) {
            var i, a;
            if (!this.clickValid)
                return !0;
            let s = null !== (i = this.clickMap.get(e)) && void 0 !== i ? i : 0;
            return !1;
        }
        static checkShowBannerCheat(e) {
            return;
        }
        static isShowNativedAd() {
            return !1;
        }
        static checkShowFullVideo() {
            return;
        }
        static rewardAdShown() {
            this.lastShowRewardVideoTime = Date.now();
        }
    }
    GameInfo.isNewUser = !1;
    GameInfo.cheatInfo = null;
    GameInfo.clickValid = !0;
    GameInfo.clickMap = new Map;
    GameInfo.launchTime = Date.now();
    GameInfo.lastShowRewardVideoTime = 0;
    GameInfo.lastShowFullVideoTime = 0;
    ;

    class Model {
        static check() {
            console.log("Model check.");
        }
    }
    Model.GuideStep = {
        None: 0,
        StartGame: 1,
        Move: 2,
        Attack: 3,
        AttackShown: 4,
        BackHome: 5,
        Buy: 6,
        Merge: 7,
        End: 8
    };
    Model.AudioUrl = {
        BgmLobby: "subremote/music/bgm_lobby.wav",
        BgmGame: "subremote/music/bgm.wav",
        Click: "resources/music/click.wav",
        Buy: "resources/music/buy.wav",
        GoldEnough: "resources/music/gold_enough.wav",
        Merge: "resources/music/merge.wav",
        Flip: "resources/music/flip.wav",
        Unlock: "resources/music/unlock.wav",
        StartGame: "resources/music/startgame.wav",
        GameOver: "resources/music/gameover.wav",
        DuanGrade: "resources/music/duan_grade.wav",
        Bomb: "resources/music/bomb.wav"
    };
    Model.ExcelConfigUrls = [{
            key: "AdConfig",
            version: "1"
        }, {
            key: "GameConfig",
            version: "1"
        }, {
            key: "TankGrow",
            version: "1"
        }, {
            key: "UAVGrow",
            version: "1"
        }, {
            key: "UAVSkill",
            version: "1"
        }, {
            key: "Ailogic",
            version: "1"
        }, {
            key: "TankCoin",
            version: "1"
        }, {
            key: "Duan",
            version: "1"
        }];
    Model.FontAssets = [{
            url: "resources/font/white_gold/font_num.fnt",
            fontName: GameModel.WHITE_GOLD
        }, {
            url: "resources/font/gray_gold/font_num.fnt",
            fontName: GameModel.GRAY_GOLD
        }, {
            url: "resources/font/signin_font/font_num.fnt",
            fontName: GameModel.SIGNIN_FONT
        }, {
            url: "resources/font/match_load/font_num.fnt",
            fontName: GameModel.MATCH_LOAD
        }, {
            url: "resources/font/red_timer/font_num.fnt",
            fontName: GameModel.TIMER_RED
        }, {
            url: "resources/font/white_timer/font_num.fnt",
            fontName: GameModel.TIMER_WHITE
        }, {
            url: "resources/font/revive_timer/font_num.fnt",
            fontName: GameModel.TIMER_REVIVE
        }, {
            url: "resources/font/over_font/font_num.fnt",
            fontName: GameModel.OVER_FONT
        }, {
            url: "resources/font/blood_double/font_num.fnt",
            fontName: GameModel.BLOOD_DOUBLE
        }, {
            url: "resources/font/blood_white/font_num.fnt",
            fontName: GameModel.BLOOD_WHITE
        }, {
            url: "resources/font/skill_font/font_num.fnt",
            fontName: GameModel.SKILL_FONT
        }];
    Model.GameResUrl = "krq://glyx.17tcw.com/GameRes/wotanketeniu/";

    class TimeLine {
        constructor(e) {
            this.target = null;
            this.timeLine = null;
            this.actionTimes = 0;
            this.callbackMap = null;
            this.endCallback = null;
            this.target = e;
            this.timeLine = new Laya.TimeLine;
            Laya.timer.frameLoop(1, this, this.onUpdate);
        }
        static tween(e) {
            return new TimeLine(e);
        }
        get actionLabel() {
            return "action" + this.actionTimes;
        }
        onUpdate() {
            ex.isValidTimerDelta() && this.target && this.target.destroyed && this.clear();
        }
        clear() {
            var e;
            null === (e = this.callbackMap) || void 0 === e || e.clear(), this.timeLine.destroy(), Laya.timer.clear(this, this.onUpdate);
        }
        countTimes() {
            this.actionTimes++;
        }
        to(e, t, i = 0) {
            return this.timeLine.addLabel(this.actionLabel, 0).to(this.target, t, e, i), this.countTimes(), this;
        }
        from(e, t, i) {
            return this.timeLine.addLabel(this.actionLabel, 0).from(this.target, t, e, i), this.countTimes(), this;
        }
        delay(e) {
            return this.timeLine.from(this.target, {}, e), this.countTimes(), this;
        }
        call(e) {
            return this.callbackMap || (this.callbackMap = new Map, this.timeLine.on(Laya.Event.LABEL, this, this.onTimeLineLabel)), this.callbackMap.set(this.actionLabel, e), this;
        }
        callEnd(e) {
            return this.endCallback = e, this;
        }
        listenerEnd() {
            this.timeLine.on(Laya.Event.COMPLETE, this, this.onTimeLineComplete);
        }
        onTimeLineLabel(e) {
            let t = this.callbackMap.get(e);
            t && t();
        }
        onTimeLineComplete() {
            this.endCallback && this.endCallback(), this.clear();
        }
        start(e) {
            e || this.listenerEnd(), this.timeLine.play(0, e);
        }
    }

    class GuideUtils {
        static createGuide() {
            console.log("createGuide");
            let e = new Laya.Sprite;
            e.width = Laya.stage.width;
            e.height = Laya.stage.height;
            e.cacheAs = "bitmap";
            Laya.stage.addChild(e);
            this.guideContainer = e;
        }
        static createMask() {
            let e = this.guideContainer, t = new Laya.Sprite;
            t.alpha = .7, t.graphics.drawRect(0, 0, e.width, e.height, "#000000"), e.addChild(t);
            let i = new Laya.Sprite;
            i.blendMode = "destination-out", e.addChild(i), this.interactionArea = i;
            let a = new Laya.HitArea;
            a.hit.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#ff0000"), e.hitArea = a, e.mouseEnabled = !0, this.hitArea = a;
        }
        static createCircle(e, t, i) {
            this.interactionArea.graphics.clear(), this.interactionArea.graphics.drawCircle(e, t, i, "#ff0000"), this.hitArea.unHit.clear(), this.hitArea.unHit.drawCircle(e, t, i, "#ff0000");
        }
        static createBox(e, t, i, a) {
            this.interactionArea.graphics.clear(), this.interactionArea.graphics.drawRect(e, t, i, a, "#ff0000"), this.hitArea.unHit.clear(), this.hitArea.unHit.drawRect(e, t, i, a, "#ff0000");
        }
        static createRoundedBox(e, t, i, a, s) {
            this.interactionArea.graphics.clear();
            var o = [
                ["moveTo", s, 0],
                ["lineTo", i - s, 0],
                ["arcTo", i, 0, i, s, s],
                ["lineTo", i, a - s],
                ["arcTo", i, a, i - s, a, s],
                ["lineTo", s, a],
                ["arcTo", 0, a, 0, a - s, s],
                ["lineTo", 0, s],
                ["arcTo", 0, 0, s, 0, s]
            ];
            this.interactionArea.graphics.drawPath(e, t, o, {
                fillStyle: "#ff0000"
            }), this.hitArea.unHit.clear(), this.hitArea.unHit.drawRect(e, t, i, a, "#ff0000");
        }
        static playHandAni(e) {
            TimeLine.tween(e).to(500, {
                scaleX: .9,
                scaleY: .9
            }).to(300, {
                scaleX: 1,
                scaleY: 1
            }).start(!0);
        }
        static showClickHand(e, t, i, a) {
            this.showRoundedBoxGuide(e - 20, t - 20, i + 40, a + 40, 20);
            let s = new Laya.Sprite;
            s.loadImage("resources/common/guide_hand.png"), s.pos(e + i - 50, t + 50), this.guideContainer.addChild(s), this.playHandAni(s);
        }
        static showStartGame(e, t, i, a) {
            this.showStep = Model.GuideStep.StartGame, this.showClickHand(e, t, i, a);
        }
        static showBackHome(e, t, i, a) {
            this.showStep = Model.GuideStep.BackHome, this.showClickHand(e, t, i, a);
        }
        static showBuyTank(e, t, i, a) {
            this.showStep = Model.GuideStep.Buy, this.showClickHand(e, t, i, a);
        }
        static showMergeTank(e, t, i, a) {
            this.showStep = Model.GuideStep.Merge;
            this.showRoundedBoxGuide(e - 20, t - 20, i + 40, a + 40, 20);
            let s = new Laya.Sprite;
            s.loadImage("resources/common/guide_hand.png"), s.pos(e + i - 50, t + 50), this.guideContainer.addChild(s), Laya.Tween.to(s, {
                x: s.x - 200
            }, 1e3).repeat = 0;
        }
        static showRoundedBoxGuide(e, t, i, a, s) {
            this.guideContainer || (this.createGuide(), this.createMask()), this.createRoundedBox(e, t, i, a, s);
        }
        static showGuide(e, t, i) {
            this.guideContainer || (this.createGuide(), this.createMask()), this.createRoundedBox(e, t, 160, 80, 10);
        }
        static showMove(e, t) {
            this.showStep = Model.GuideStep.Move, this.guideContainer || this.createGuide();
            let i = new Laya.Image("resources/common/guide_move.png");
            i.anchorX = i.anchorY = .5, i.pos(e, t), this.guideContainer.addChild(i);
            let a = new Laya.Sprite;
            a.loadImage("resources/common/guide_hand.png"), a.pos(e - 100, t + 80), this.guideContainer.addChild(a), TimeLine.tween(a).to(1e3, {
                x: a.x + 200
            }).to(1e3, {
                x: a.x
            }).start(!0);
        }
        static showAttack(e, t) {
            this.showStep = Model.GuideStep.AttackShown, this.guideContainer || this.createGuide();
            let i = new Laya.Sprite;
            i.loadImage("resources/common/guide_hand.png"), i.pos(e, t), this.guideContainer.addChild(i), this.playHandAni(i);
        }
        static isShow() {
            return this.showStep > Model.GuideStep.None && this.showStep < Model.GuideStep.End;
        }
        static destroy() {
            this.guideContainer && (this.guideContainer.destroy(), this.guideContainer = null, this.showStep++);
        }
    }
    GuideUtils.showStep = 0;
    GuideUtils.guideContainer = null;
    GuideUtils.interactionArea = null;
    GuideUtils.hitArea = null;
    ;

    class MSGEvent {
        static on(e, t, i) {
            let a = this.eventMap.get(e);
            a ? a.push({
                action: t,
                callback: i
            }) : (a = [{
                    action: t,
                    callback: i
                }], this.eventMap.set(e, a)), Laya.stage.on(t, Laya.stage, i);
        }
        static offAll(e) {
            let t = this.eventMap.get(e);
            t && (t.forEach(e => {
                Laya.stage.off(e.action, Laya.stage, e.callback);
            }), this.eventMap.delete(e));
        }
        static sendEvent(e, t) {
            Laya.stage.event(e, [t]);
        }
    }
    MSGEvent.UPDATE_USERINFO = "UPDATE_USERINFO";
    MSGEvent.UNLOCK_TANK = "UNLOCK_TANK";
    MSGEvent.ITEM_CLICK = "ITEM_CLICK";
    MSGEvent.SIGNIN = "SIGNIN";
    MSGEvent.NEWUSER_GIFT = "NEWUSER_GIFT";
    MSGEvent.eventMap = new Map;
    ;

    class TankShop extends Laya.Script {
        constructor() {
            super(...arguments);
            this.root = null;
            this.lobbyNode = null;
        }
        onAwake() {
            this.pageName = '坦克商店';
            this.root = this.owner;
            this.initData(), this.initListener(), (this.root.visible = !1);
        }
        initListener() {
            MSGEvent.on(this.pageName, MSGEvent.ITEM_CLICK, e => {
                let t = GameConfig.TankList[e];
                if (t.id > GameData.unlockTankId) {
                    return;
                }
                this.lobbyNode.buy(t.id) && this.listView.refresh();
            });
        }
        onDisable() {
            MSGEvent.offAll(this.pageName);
        }
        show() {
            this.root.visible = !0;
            this.listView.refresh();
            let e = Math.max((GameData.unlockTankId % GameConfig.TankMinID) - 6, 0);
            this.listView.scrollTo(e);
        }
        hide() {
            this.root.visible = !1;
        }
        setLobbyNode(e) {
            this.lobbyNode = e;
        }
        initData() {
            this.listView.hScrollBarSkin = '';
            this.listView.renderHandler = new Laya.Handler(this, this.updateItem);
            this.listView.array = GameConfig.TankList;
        }
        updateItem(e, t) {
            e.updateItem(t);
        }
        onMouseDown(e) {
            let t = Laya.stage.mouseY;
            this.root.visible && (t < Laya.stage.height - 157 && this.hide(), e.stopPropagation());
        }
    }

    class SoundManager {
        static playSound(e, t = null) {
            if (!this.soundMap.get(e) && this.isSoundValid) {
                this.soundMap.set(e, !0);
                let i = Laya.SoundManager.playSound(e, null != t ? t : 1), a = 1;
                i && i.duration > 1 && (a = i.duration), Laya.timer.once(1e3 * a, this, () => {
                    this.soundMap.set(e, !1);
                });
            }
        }
        static playSoundMultiple(e) {
            this.isSoundValid && Laya.SoundManager.playSound(e);
        }
        static playMusic(e, t) {
            this.isMusicValid && Laya.SoundManager.playMusic(e, null != t ? t : 0);
        }
        static stopMusic() {
            this.isMusicValid && Laya.SoundManager.stopMusic();
        }
        static stopSound(e) {
            Laya.SoundManager.stopSound(e);
        }
    }
    SoundManager.soundMap = new Map;
    SoundManager.isSoundValid = !0;
    SoundManager.isMusicValid = !0;
    ;

    class y extends Laya.Script {
        constructor() {
            super(...arguments);
            this.root = null;
            this.content = null;
            this.btnClose = null;
            this.btnShowAd = null;
            this.adButton = null;
        }
        onAwake() {
            var e;
            (this.root = this.owner), (this.root.width = Laya.stage.width), (this.root.height = Laya.stage.height);
            let t = this.root.getChildByName('bg');
            t && ((t.width = this.root.width), (t.height = this.root.height));
            let i = this.root.getChildByName('content');
            i &&
                (i.pos(this.root.width / 2, this.root.height / 2),
                    i.scale(0, 0),
                    Laya.Tween.to(i, {
                        scaleX: 1,
                        scaleY: 1
                    }, 300, Laya.Ease.backOut),
                    (this.content = i));
            let a = null !== (e = i.getChildByName('btn_close')) && void 0 !== e ? e : this.root.getChildByName('btn_close');
            a && ((a.clickHandler = new Laya.Handler(this, this.onCloseClick)), (this.btnClose = a));
        }
        setCheatButtonPosition(e) {
            if (this.btnClose) {
                let t = e ? 150 : 290, i = Math.max(this.btnClose.height, 32), a = this.root.height - t - i;
                this.btnClose.y = a;
            }
        }
        enterPage(e, t = !0) {
            var i, a;
            ((e = null != e ? e : {}).page = null !== (i = e.page) && void 0 !== i ? i : this.pageName), (e.existBanner = null === (a = e.existBanner) || void 0 === a || a);
        }
        close() {
            MSGEvent.offAll(this.pageName);
            this.root.destroy();
        }
        onCloseClick() {
            this.close();
            SoundManager.playSound(Model.AudioUrl.Click);
        }
        initOPPO() {
            if (((this.adButton = this.content.getChildByName('adButton')), !this.adButton))
                return;
            this.adButton.clickHandler = new Laya.Handler(this, this.onShowAdClick);
            this.btnShowAd = this.content.getChildByName('btn_show');
            this.btnShowAd.clickHandler = new Laya.Handler(this, this.onShowAdClick);
            this.adButton.getChildByName('btn_ad_close').clickHandler = new Laya.Handler(this, this.onCloseAdClick);
            this.adButton.visible = this.btnShowAd.visible = !1;
        }
        hasNativeAd() {
            return !!this.adButton;
        }
        onShowAdClick() { }
        onCloseAdClick() {
            this.adButton.visible = this.btnShowAd.visible = !1;
        }
    }

    class FreeGold extends y {
        constructor() {
            super(...arguments);
            this.isGem = !1;
            this.rewardNum = 0;
        }
        static show(e = {}) {
            platform.showBannerAd();
            let t = 'prefab';
            let i = t + '/FreeGold.prefab';
            Laya.loader.load(i, Laya.Handler.create(this, t => {
                if (t) {
                    let i = new Laya.Prefab();
                    i.json = t;
                    let a = i.create();
                    (a.zOrder = 1), a.getComponent(FreeGold).setData(e), Laya.stage.addChildAt(a, Laya.stage.numChildren);
                }
            }), null, Laya.Loader.JSON);
        }
        setData(e) {
            var t;
            this.isGem = !!e && null !== (t = e.isGem) && void 0 !== t && t;
        }
        onAwake() {
            super.onAwake(),
                (Laya.Tween.from(this.light, {
                    rotation: 360
                }, 15e3).repeat = 0);
            let e = !0;
            if (this.isGem) {
                (this.pageName = 'Get diamonds'), (this.title.skin = 'resources/prefab/title_gem.png'), (this.rewardIcon.skin = 'resources/prefab/icon_gem.png');
                let e = GameData.receiveData ? GameData.receiveData.gemtimes : 0;
                (this.tipsLabel.text = 'Remaining times ' + e + '/' + GameConfig.GameConf.diamondsnum), (this.rewardNum = 100), (this.btnGet.disabled = e >= GameConfig.GameConf.diamondsnum);
            }
            else {
                (this.pageName = 'Get coins'), (this.title.skin = 'resources/prefab/title_gold.png'), (this.rewardIcon.skin = 'resources/prefab/icon_gold.png');
                let t = GameData.receiveData ? GameData.receiveData.goldtimes : 0;
                this.tipsLabel.text = 'Remaining times ' + t + '/' + GameConfig.GameConf.goldnum;
                let i = Math.max(GameData.unlockTankId - 3, GameConfig.TankMinID), a = GameConfig.getTankInfo(i);
                (this.rewardNum = 2 * a.buy), (this.btnGet.disabled = t >= GameConfig.GameConf.goldnum);
            }
            this.enterPage({
                page: this.pageName,
                existBanner: e
            }),
                (this.numLabel.text = GA.formatNumber(this.rewardNum)),
                (this.numLabel.font = GameModel.GRAY_GOLD),
                (this.btnGet.clickHandler = new Laya.Handler(this, this.onGetClick)),
                (this.btnGet.tag = 'Receive');
            let t = this.btnGet.getChildAt(0);
            t.skin = 'resources/prefab/icon_video_tt.png';
        }
        close() {
            platform.hideBannerAd();
            super.close();
        }
        onCloseClick() {
            super.onCloseClick();
        }
        onGetClick() {
            let self = this;
            platform.playVideo(() => {
                self.requestReward();
            });
        }
        requestReward() {
            this.isGem
                ? (GameData.receiveGem(this.rewardNum),
                    MSGEvent.sendEvent(MSGEvent.UPDATE_USERINFO, {
                        type: RewardType.Gem
                    }),
                    G.showToast({
                        title: `Congratulations on getting ${this.rewardNum} diamonds`
                    }))
                : (GameData.receiveGold(this.rewardNum),
                    MSGEvent.sendEvent(MSGEvent.UPDATE_USERINFO, {
                        type: RewardType.Gold
                    }),
                    G.showToast({
                        title: `Congratulations on getting ${this.rewardNum} coins`
                    })),
                this.close();
        }
    }

    class FreeTrial extends y {
        constructor() {
            super(...arguments);
            this.trialList = null;
            this.closeCallback = null;
            this.items = [];
        }
        static show(e) {
            platform.showBannerAd();
            let t = this.randomTrialList();
            if (t) {
                let i = 'prefab/FreeTrial.prefab';
                Laya.loader.load(i, Laya.Handler.create(this, i => {
                    if (i) {
                        let a = new Laya.Prefab();
                        a.json = i;
                        let s = a.create();
                        (s.zOrder = 1), s.getComponent(FreeTrial).setData(t, e), Laya.stage.addChildAt(s, Laya.stage.numChildren);
                    }
                }), null, Laya.Loader.JSON);
            }
            else
                e();
        }
        static randomTrialList() {
            if (GameData.duanStar <= 0 || GameData.unlockTankId >= GameConfig.TankMaxID)
                return null;
            let e = Math.min(GameData.unlockTankId + 1, GameConfig.TankMaxID), t = Math.min(GameData.unlockTankId + 6, GameConfig.TankMaxID), i = [];
            if (t - e < 3)
                for (let a = e; a <= t; a++)
                    i.push(a);
            else
                for (;;) {
                    let a = ex.rand(e, t);
                    if (!i['includes'](a) && (i.push(a), i.length >= 3))
                        break;
                }
            return i;
        }
        setData(e, t) {
            (this.trialList = e), (this.closeCallback = t);
        }
        onAwake() {
            (this.pageName = '坦克试用'),
                this.enterPage({
                    page: this.pageName
                }),
                super.onAwake();
            let t = 0;
            for (let i = 0; i < 3; i++) {
                let a = this.hbox.getChildByName('item' + (i + 1)), s = a.getChildByName('icon'), o = a.getChildByName('btn_trial');
                o.clickHandler = new Laya.Handler(this, this.onTrialClick, [i]);
                let n = o.getChildAt(0);
                if ((this.items.push({
                    icon: s
                }),
                    (t = a.width),
                    i < this.trialList.length)) {
                    a.visible = !0;
                    let t = this.trialList[i], o = GameConfig.getTankInfo(t);
                    s.skin = 'resources/lobby/tank/' + o.level + '.png';
                    n.skin = 'resources/prefab/icon_video_tt.png';
                }
                else
                    a.visible = !1;
            }
            let i = this.trialList.length;
            (this.hbox.width = t * i + this.hbox.space * (i - 1)), (this.hbox.x = (this.content.width - this.hbox.width) / 2), this.hbox.refresh();
        }
        close() {
            platform.hideBannerAd();
            this.closeCallback && this.closeCallback(), super.close();
        }
        onTrialClick(e) {
            let self = this;
            let t = this.trialList[e];
            platform.playVideo(() => {
                console.log('trial tankId:', t),
                    (GameConfig.trialTank = t), self.close();
            });
        }
    }

    class RewardTips extends y {
        constructor() {
            super(...arguments);
            this.mUAVType = null;
        }
        static show(e) {
            let t = 'prefab';
            let i = t + '/RewardTips.prefab';
            Laya.loader.load(i, Laya.Handler.create(this, t => {
                if (t) {
                    let i = new Laya.Prefab();
                    i.json = t;
                    let a = i.create();
                    (a.zOrder = 1), a.getComponent(RewardTips).setData(e), Laya.stage.addChildAt(a, Laya.stage.numChildren);
                }
            }), null, Laya.Loader.JSON);
        }
        setData(e) {
            this.mUAVType = e;
        }
        onAwake() {
            (this.pageName = '获得无人机'),
                this.enterPage({
                    page: this.pageName
                }),
                super.onAwake(),
                (Laya.Tween.from(this.light, {
                    rotation: 360
                }, 15e3).repeat = 0);
            let e = GameConfig.getUAVInfoWithLevel(this.mUAVType, 1);
            (this.uavIcon.skin = `resources/lobby/uav/${e.typeNum}.png`), this.initOPPO();
        }
    }

    class UAVRestore extends y {
        constructor() {
            super(...arguments);
            this.mUAVType = null;
            this.closeCallback = null;
        }
        static show(e, t = null) {
            platform.showBannerAd();
            let i = 'prefab';
            let a = i + '/UAVRestore.prefab';
            Laya.loader.load(a, Laya.Handler.create(this, i => {
                if (i) {
                    let a = new Laya.Prefab();
                    a.json = i;
                    let s = a.create();
                    (s.zOrder = 2), s.getComponent(UAVRestore).setData(e, t), Laya.stage.addChildAt(s, GameModel.Scene3DZIndex + 1);
                }
            }), null, Laya.Loader.JSON);
        }
        setData(e, t) {
            (this.mUAVType = e), (this.closeCallback = t);
        }
        onAwake() {
            (this.pageName = 'low fuel'),
                this.enterPage({
                    page: this.pageName,
                    existBanner: !1
                }),
                super.onAwake(),
                (Laya.Tween.from(this.light, {
                    rotation: 360
                }, 15e3).repeat = 0);
            let e = GameConfig.getUAVInfoWithLevel(this.mUAVType, 1);
            (this.uavIcon.skin = `resources/lobby/uav/${e.typeNum}.png`), this.onTimeUpdate(), (this.btnRestore.clickHandler = new Laya.Handler(this, this.onRestoreClick));
            let t = this.btnRestore.getChildAt(0);
            t.skin = 'resources/prefab/icon_video_tt.png';
            this.initOPPO(), Laya.timer.loop(1e3, this, this.onTimeUpdate);
        }
        onTimeUpdate() {
            let e = GameConfig.getUAVRestoreLeftTime(this.mUAVType);
            this.tipsLabel.text = e > 0 ? 'Time required for full fuel\n' + GA.formatTime(e / 1e3) : 'Time required for full fuel\n00:00';
        }
        close() {
            platform.hideBannerAd();
            this.closeCallback && this.closeCallback(), super.close(), Laya.timer.clear(this, this.onTimeUpdate);
        }
        onCloseClick() {
            super.onCloseClick(), GameConfig.continueCancelRestoreUAVTimes++;
        }
        onRestoreClick() {
            this.requestReward(), this.close();
        }
        requestReward() {
            (GameConfig.continueCancelRestoreUAVTimes = 0), (GameConfig.currFightUAV = GameData.currUAV), GameData.restoreUAV(this.mUAVType);
        }
    }

    class RoleNode extends y {
        constructor() {
            super(...arguments);
            this.lobbyNode = null;
            this.mCloseCallback = null;
            this.bulletBg = null;
            this.goldBg = null;
            this.mSelectedType = 0;
            this.mTankSelectedIndex = 0;
            this.currTankInfo = null;
            this.currUAVInfo = null;
            this.selectedUAVInfo = null;
            this.attributeList = [];
        }
        static show(e, t) {
            platform.showBannerAd(BannerSize.BANNER_SIZE_320_50);
            Laya.loader.load('prefab/RoleNode.prefab', Laya.Handler.create(this, i => {
                if (i) {
                    let a = new Laya.Prefab();
                    a.json = i;
                    let s = a.create();
                    s.zOrder = 1;
                    s.getComponent(RoleNode).setData(e, t), Laya.stage.addChildAt(s, GameModel.Scene3DZIndex + 1);
                }
            }), null, Laya.Loader.JSON);
        }
        setData(e, t) {
            this.lobbyNode = e;
            this.mCloseCallback = t;
        }
        onAwake() {
            (this.pageName = '坦克工厂'),
                this.enterPage({
                    page: this.pageName,
                    existBanner: !1
                }),
                super.onAwake(),
                (this.bulletBg = this.bulletIcon.parent),
                (this.goldBg = this.goldIcon.parent),
                (this.btnTank.clickHandler = new Laya.Handler(this, this.onTankClick)),
                (this.btnUAV.clickHandler = new Laya.Handler(this, this.onUAVClick)),
                (this.btnUse.clickHandler = new Laya.Handler(this, this.onUseClick)),
                (this.btnUnlock.clickHandler = new Laya.Handler(this, this.onUnlockClick)),
                (this.btnGetFuel.clickHandler = new Laya.Handler(this, this.onGetFuelClick)),
                (this.skillNameLabel.font = GameModel.SKILL_FONT),
                (this.uidLabel.text = 'UID:' + 100),
                this.initAttribute(),
                this.initData();
        }
        initData() {
            if (((this.currTankInfo = GameConfig.getTankInfo(GameData.currTank)), (this.mTankSelectedIndex = this.currTankInfo.level - 1), GameData.currUAV > 0)) {
                let e = GameData.getUAVLevel(GameData.currUAV);
                this.currUAVInfo = GameConfig.getUAVInfoWithLevel(GameData.currUAV, e);
            }
            (this.listView.vScrollBarSkin = ''),
                (this.listView.renderHandler = new Laya.Handler(this, this.updateItem)),
                (this.listView.selectEnable = !0),
                (this.listView.selectHandler = new Laya.Handler(this, this.selectItem)),
                this.changeRoleList(1),
                this.listView.scrollTo(this.mTankSelectedIndex);
        }
        updateItem(e, t) {
            1 == this.mSelectedType ? e.updateItem(t, this.listView.selectedIndex) : e.updateUAVItem(t, this.listView.selectedIndex);
        }
        selectItem(e) {
            if (((this.mTankSelectedIndex = e), 1 == this.mSelectedType)) {
                GameConfig.TankList[e].id <= GameData.unlockTankId && this.refreshTankAttribute();
            }
            else
                this.refreshUAVAttribute();
        }
        onTankClick() {
            this.changeRoleList(1), SoundManager.playSound(Model.AudioUrl.Click);
        }
        onUAVClick() {
            this.changeRoleList(2), SoundManager.playSound(Model.AudioUrl.Click);
        }
        changeRoleList(e) {
            if (e != this.mSelectedType) {
                this.mSelectedType = e;
                let t = null;
                1 == e
                    ? ((this.btnTank.selected = !0), (this.btnUAV.selected = !1), (t = GameConfig.TankList), (this.listView.selectedIndex = this.mTankSelectedIndex), this.refreshTankAttribute())
                    : ((this.btnTank.selected = !1),
                        (this.btnUAV.selected = !0),
                        (t = GameModel.UAVList),
                        (this.mTankSelectedIndex = 0),
                        (this.listView.selectedIndex = this.mTankSelectedIndex),
                        this.refreshUAVAttribute()),
                    (this.listView.array = t),
                    this.listView.refresh();
            }
        }
        initAttribute() {
            for (let e = 0; e < 6; e++) {
                let t = this.attributePrefab.create();
                t.pos(160, 40 + 70 * e), this.rightBg.addChild(t);
                let i = t.getChildByName('value_label'), a = t.getChildByName('up_label'), s = t.getChildByName('icon_up');
                (i.font = GameModel.WHITE_GOLD),
                    (a.font = GameModel.WHITE_GOLD),
                    this.attributeList.push({
                        bg: t,
                        value: i,
                        up_value: a,
                        up_icon: s
                    });
            }
        }
        onUseClick() {
            if (1 == this.mSelectedType) {
                let e = GameConfig.TankList[this.mTankSelectedIndex];
                GameData.changeUseTank(e.id),
                    (this.currTankInfo = e),
                    (this.btnUse.disabled = !0),
                    this.refreshTankAttribute(),
                    G.showToast({
                        title: '出战成功'
                    });
            }
            else {
                let e = GameModel.UAVList[this.mTankSelectedIndex], t = GameData.getUAVLevel(e), i = GameConfig.getUAVInfoWithLevel(e, t);
                GameData.changeUseUAV(i.type),
                    (this.currUAVInfo = i),
                    (this.btnUse.disabled = !0),
                    this.refreshUAVAttribute(),
                    G.showToast({
                        title: 'successful battle'
                    });
            }
            SoundManager.playSound(Model.AudioUrl.Click);
        }
        onGetFuelClick() {
            this.selectedUAVInfo && UAVRestore.show(this.selectedUAVInfo.type);
        }
        onUnlockClick() {
            let e = GameModel.UAVList[this.mTankSelectedIndex], t = GameData.getUAVLevel(e), i = GameConfig.getUAVInfoWithLevel(e, t);
            t > 0
                ? i.upprice.type == CurrencyType.Gold
                    ? GameData.payGold(i.upprice.count)
                        ? (GameData.gradeUAV(e),
                            this.refreshUAVAttribute(),
                            this.listView.refresh(),
                            MSGEvent.sendEvent(MSGEvent.UPDATE_USERINFO, {
                                type: RewardType.Gold
                            }),
                            G.showToast({
                                title: 'update successed'
                            }))
                        : FreeGold.show()
                    : GameData.payGem(i.upprice.count)
                        ? (GameData.gradeUAV(e),
                            this.refreshUAVAttribute(),
                            this.listView.refresh(),
                            MSGEvent.sendEvent(MSGEvent.UPDATE_USERINFO, {
                                type: RewardType.Gem
                            }),
                            G.showToast({
                                title: 'update successed'
                            }))
                        : FreeGold.show({
                            isGem: !0
                        })
                : i.unlock.type == UAVUnlockType.Video
                    ? GameData.playVideoTimes >= i.unlock.count
                        ? (GameData.buyUAV(e),
                            this.refreshUAVAttribute(),
                            this.listView.refresh(),
                            RewardTips.show(e),
                            G.showToast({
                                title: 'Unlocked successfully'
                            }))
                        : G.showToast({
                            title: 'Not enough videos'
                        })
                    : i.unlock.type == UAVUnlockType.Gem &&
                        (GameData.payGem(i.unlock.count)
                            ? (GameData.buyUAV(e),
                                this.refreshUAVAttribute(),
                                this.listView.refresh(),
                                MSGEvent.sendEvent(MSGEvent.UPDATE_USERINFO, {
                                    type: RewardType.Gem
                                }),
                                RewardTips.show(e),
                                G.showToast({
                                    title: 'Unlocked successfully'
                                }))
                            : FreeGold.show({
                                isGem: !0
                            }));
        }
        refreshTankAttribute() {
            let e = this.currTankInfo, t = GameConfig.TankList[this.mTankSelectedIndex];
            (this.bulletIcon.skin = `resources/lobby/bullet/${t.type}.png`),
                (this.nameLabel.text = t.name),
                (this.describeLabel.visible = !0),
                (this.describeLabel.align = 'left'),
                (this.describeLabel.text = t.describe);
            let i = [
                {
                    alias: 'hp',
                    value: t.hp,
                    diff: t.hp - e.hp
                },
                {
                    alias: 'attack',
                    value: t.atk,
                    diff: t.atk - e.atk
                },
                {
                    alias: 'atk_speed',
                    value: t.atkspeed,
                    diff: t.atkspeed - e.atkspeed
                },
                {
                    alias: 'atk_dis',
                    value: t.atkdistance,
                    diff: t.atkdistance - e.atkdistance
                },
                {
                    alias: 'critical',
                    value: (t.critical / 100).toFixed(2),
                    diff: ((t.critical - e.critical) / 100).toFixed(2)
                },
                {
                    alias: 'move_speed',
                    value: t.move,
                    diff: t.move - e.move
                }
            ];
            this.attributeList.forEach((e, t) => {
                let a = i[t];
                (e.bg.visible = !0),
                    (e.bg.skin = 'resources/prefab/tank_' + a.alias + '.png'),
                    (e.value.text = '' + a.value),
                    a.diff > 0
                        ? ((e.up_value.visible = e.up_icon.visible = !0), (e.up_value.text = '+' + a.diff), (e.up_icon.skin = 'resources/prefab/icon_up.png'))
                        : a.diff < 0
                            ? ((e.up_value.visible = e.up_icon.visible = !0), (e.up_value.text = '' + a.diff), (e.up_icon.skin = 'resources/prefab/icon_down.png'))
                            : (e.up_value.visible = e.up_icon.visible = !1);
            });
            this.lobbyNode.showRoleTank(t.id);
            this.bulletBg.visible = !0;
            this.uavNode.visible = !1;
            this.btnUse.visible = !0;
            this.currTankInfo.id == t.id ? (this.btnUse.disabled = !0) : (this.btnUse.disabled = !1);
        }
        refreshUAVAttribute() {
            var e, t, i, a;
            let s = this.currUAVInfo, o = GameModel.UAVList[this.mTankSelectedIndex], n = GameData.getUAVLevel(o), r = GameConfig.getUAVInfoWithLevel(o, n), l = ['attack', 'atk_speed', 'atk_dis', 'critical'], h = [
                {
                    alias: 'attack',
                    value: r.atk,
                    diff: r.atk - (null !== (e = null == s ? void 0 : s.atk) && void 0 !== e ? e : 0)
                },
                {
                    alias: 'atk_speed',
                    value: r.atkspeed,
                    diff: r.atkspeed - (null !== (t = null == s ? void 0 : s.atkspeed) && void 0 !== t ? t : 0)
                },
                {
                    alias: 'atk_dis',
                    value: r.atkdistance,
                    diff: r.atkdistance - (null !== (i = null == s ? void 0 : s.atkdistance) && void 0 !== i ? i : 0)
                },
                {
                    alias: 'critical',
                    value: (r.critical / 100).toFixed(2),
                    diff: ((r.critical - (null !== (a = null == s ? void 0 : s.critical) && void 0 !== a ? a : 0)) / 100).toFixed(2)
                }
            ], d = h.length;
            console.log(o, n, 'ojjfhhfhfhfhh');
            this.attributeList.forEach((e, t) => {
                if (t < d) {
                    (e.bg.visible = !0), (e.bg.skin = 'resources/prefab/tank_' + l[t] + '.png');
                    let i = h[t];
                    (e.value.text = '' + i.value),
                        i.diff > 0
                            ? ((e.up_value.visible = e.up_icon.visible = !0), (e.up_value.text = '+' + i.diff), (e.up_icon.skin = 'resources/prefab/icon_up.png'))
                            : i.diff < 0
                                ? ((e.up_value.visible = e.up_icon.visible = !0), (e.up_value.text = '' + i.diff), (e.up_icon.skin = 'resources/prefab/icon_down.png'))
                                : (e.up_value.visible = e.up_icon.visible = !1);
                }
                else
                    e.bg.visible = !1;
            }),
                this.lobbyNode.hideRoleTank(),
                (this.bulletBg.visible = !1),
                (this.uavNode.visible = !0),
                (this.uavIcon.skin = `resources/lobby/uav/${r.typeNum}.png`),
                (this.skillIcon.skin = `resources/prefab/uav_skill_${o}.png`);
            let c = GameConfig.getSkillInfo(r.skill), u = c ? c.level : 0, m = GameModel.UAVSkillList[this.mTankSelectedIndex];
            this.skillNameLabel.text = m.name + 'lv.' + u;
            this.describeLabel.visible = !1;
            this.goldBg.visible = !0;
            this.btnUnlock.disabled = !1;
            if (n > 0)
                (this.btnUnlock.skin = 'resources/prefab/btn_uav_grade.png'),
                    r.upprice.type == CurrencyType.Gold ? (this.goldIcon.skin = 'resources/prefab/icon_gold_s.png') : (this.goldIcon.skin = 'resources/prefab/icon_gem_s.png'),
                    r.nextid > 0 ? ((this.goldLabel.text = '' + GA.formatNumber(r.upprice.count)), (this.btnUnlock.disabled = !1)) : ((this.goldLabel.text = 'Full level'), (this.btnUnlock.disabled = !0));
            else if (((this.btnUnlock.skin = 'resources/prefab/btn_unlock.png'), r.unlock.type == UAVUnlockType.Sign))
                (this.describeLabel.visible = !0), (this.describeLabel.align = 'center'), (this.describeLabel.text = 'Sign in and unlock'), (this.btnUnlock.disabled = !0), (this.goldBg.visible = !1);
            else if (r.unlock.type == UAVUnlockType.Video) {
                (this.describeLabel.visible = !0), (this.describeLabel.align = 'center'), (this.describeLabel.text = `Watched ad(${GameData.playVideoTimes}/${r.unlock.count})`);
                let e = GameData.playVideoTimes >= r.unlock.count;
                (this.btnUnlock.disabled = !e), (this.goldBg.visible = !1);
            }
            else
                (this.goldIcon.skin = 'resources/prefab/icon_gem_s.png'), (this.goldLabel.text = '' + r.unlock.count);
            if (((this.btnUse.visible = !0), (this.btnGetFuel.visible = !1), (this.btnUse.skin = 'resources/prefab/btn_use.png'), GameData.hasUAV(r.type))) {
                GameData.currUAV == r.type ? (this.btnUse.disabled = !0) : (this.btnUse.disabled = !1), GameConfig.getUAVRestoreLeftTime(r.type) > 0 && (this.btnGetFuel.visible = !0);
            }
            else
                this.btnUse.visible = !1;
            this.selectedUAVInfo = r;
        }
        onUpdate() {
            if (this.uavNode.visible && this.btnGetFuel.visible && this.selectedUAVInfo) {
                let e = GameConfig.getUAVRestoreLeftTime(this.selectedUAVInfo.type);
                e > 0 ? (this.timeLabel.text = GA.formatTime(e / 1e3)) : (this.btnGetFuel.visible = !1);
            }
        }
        close() {
            platform.hideBannerAd();
            super.close(), this.mCloseCallback && this.mCloseCallback();
        }
    }

    const w = [50, 0, 100, 150, 200, 250];
    class SignInNode extends y {
        constructor() {
            super(...arguments);
            this.clobbyNode = null;
            this.bRewardUAV = !1;
            this.bRewardDouble = !1;
            this.signNodes = [];
        }
        static show(e) {
            platform.showBannerAd(BannerSize.BANNER_SIZE_320_50);
            Laya.loader.load('prefab/SignInNode.prefab', Laya.Handler.create(this, t => {
                if (t) {
                    let i = new Laya.Prefab();
                    i.json = t;
                    let a = i.create();
                    (a.zOrder = 1), a.getComponent(SignInNode).setData(e), Laya.stage.addChildAt(a, GameModel.Scene3DZIndex + 1);
                }
            }), null, Laya.Loader.JSON);
        }
        setData(e) {
            this.lobbyNode = e;
        }
        onAwake() {
            (this.pageName = '签到'),
                this.enterPage({
                    page: this.pageName,
                    existBanner: !1
                }),
                super.onAwake(),
                (this.bRewardDouble = !0),
                (this.bRewardUAV = !GameData.hasUAV(UAVType.ZhiYaun));
            for (let e = 0; e < 6; e++) {
                let t = e + 1, i = this.content.getChildByName('day' + t);
                console.log(i.width, i.height);
                let a = this.content.getChildByName('label_day' + t);
                (a.font = GameModel.SIGNIN_FONT),
                    this.signNodes.push({
                        bg: i,
                        rewardLabel: a
                    });
                let s = w[e];
                a.font = "Arial";
                s > 0 ? (this.bRewardUAV && 6 == t ? (a.text = 'Support Fighter') : (a.text = 'Diamond x' + s)) : (a.text = 'Supply Pack'), t <= GameData.signday && this.createCoverNode(t);
            }
            if (((this.signTipsbg.visible = !GameConfig.signed), 5 == GameData.signday && (this.signTipsbg.visible = !1), this.signTipsbg.visible)) {
                let e = this.signNodes[GameData.signday];
                this.signTipsbg.pos(e.bg.x, e.bg.y), this.signTipsbg.size(e.bg.width + 20, e.bg.height + 20);
            }
            this.bRewardUAV && ((this.day6Reward.skin = 'resources/lobby/uav/1.png'), GameConfig.signed || 5 != GameData.signday || (this.bRewardDouble = !1));
            let e = GameData.signday + 1;
            if ((0 == w[e - 1] && (this.bRewardDouble = !1),
                (this.btnGet.clickHandler = new Laya.Handler(this, this.onGetClick)),
                (this.btnDoubleGet.clickHandler = new Laya.Handler(this, this.onDoubleGetClick)),
                (this.btnGet.visible = this.btnDoubleGet.visible = !GameConfig.signed),
                this.bRewardDouble)) {
                let e = this.btnDoubleGet.getChildAt(0);
                e.skin = 'resources/prefab/icon_video_tt.png';
            }
            else
                (this.btnDoubleGet.skin = 'resources/prefab/btn_get.png');
        }
        createCoverNode(e) {
            let t = this.signNodes[e - 1].bg, i = new Laya.Image();
            6 == e ? (i.skin = 'resources/prefab/singed6_bg.png') : ((i.sizeGrid = '20,20,20,20'), (i.skin = 'resources/prefab/singed_bg.png')),
                i.size(t.width, t.height),
                (i.anchorX = i.anchorY = 0.5),
                i.pos(t.x, t.y),
                this.content.addChild(i);
            let a = new Laya.Image('resources/prefab/signed.png');
            (a.anchorX = a.anchorY = 0.5), a.pos(t.x, t.y), this.content.addChild(a);
        }
        onGetClick() {
            this.requestSign(1);
        }
        onDoubleGetClick() {
            let e = this.bRewardDouble ? '双倍领取' : '领取';
            let self = this;
            platform.playVideo(() => {
                self.requestSign(2);
            });
        }
        close() {
            platform.hideBannerAd();
            super.close();
        }
        requestSign(e) {
            let t = GameData.signday + 1, i = w[t - 1];
            i > 0
                ? this.bRewardUAV && 6 == t
                    ? (GameData.buyUAV(UAVType.ZhiYaun), RewardTips.show(UAVType.ZhiYaun))
                    : ((i *= e),
                        GameData.addGem(i),
                        MSGEvent.sendEvent(MSGEvent.UPDATE_USERINFO, {
                            type: RewardType.Gem
                        }),
                        G.showToast({
                            title: `Congrats on getting ${i} diamonds`
                        }))
                : (this.lobbyNode.randomAirDrop(!1),
                    G.showToast({
                        title: 'Congratulations on getting the sign-in reward'
                    })),
                this.createCoverNode(t),
                (this.signTipsbg.visible = !1),
                (GameConfig.signed = !0),
                GameData.signIn(),
                (this.btnGet.visible = this.btnDoubleGet.visible = !GameConfig.signed);
        }
    }

    class Utils {
        static indexOfStringList(e, t) {
            for (let i = 0; i < t.length; i++)
                if (e.indexOf(t[i]) >= 0)
                    return !0;
            return !1;
        }
        static checkInTheScreen(e) {
            return e.x > 0 && e.x < Laya.stage.width && e.y > 0 && e.y < Laya.stage.height;
        }
        static showTipsLabel(e, t, i, a) {
            let s = Laya.Pool.getItemByClass('tipsLbl', Laya.Label);
            (s.text = e),
                (s.color = '#FF0000'),
                (s.font = t),
                (s.fontSize = 20),
                s.pos(i.x, i.y),
                Laya.stage.addChild(s),
                Laya.Tween.to(s, {
                    y: s.y - 100
                }, 800, null, Laya.Handler.create(null, () => {
                    s.removeSelf(), Laya.Pool.recover('tipsLbl', s), a && a();
                }));
        }
        static localToGlobal(e, i, a) {
            const t = new Laya.Point(0, 0);
            let s = e;
            return t.setTo(i, a), s.localToGlobal(t);
        }
        static rotateToTarget(e, t, i) {
            let a = e, s = t;
            return s == a
                ? a
                : (a * s < 0 && (a < 0 ? s - a > 180 && (s -= 360) : s < 0 && Math.abs(s - a) > 180 && (s += 360)), s > a ? (a += i) > s && (a = s) : s < a && (a -= i) < s && (a = s), ex.formatRotation(a));
        }
        static changeParticleRenderMode(t) {
            if (t && t instanceof Laya.ShuriKenParticle3D) {
                let e = t, i = e.name, a = e.particleRenderer.material;
                i.indexOf('_Alpha') >= 0 ? (a['renderMode'] = Laya.ShurikenParticleMaterial.RENDERMODE_ALPHABLENDED) : (i.indexOf('_Add'), (a['renderMode'] = Laya.ShurikenParticleMaterial.RENDERMODE_ADDTIVE));
            }
            for (let i = 0; i < t.numChildren; i++)
                this.changeParticleRenderMode(t.getChildAt(i));
        }
        static playParticle(t, i = null) {
            for (let a = 0; a < t.numChildren; a++) {
                let s = t.getChildAt(a);
                if (((s.active = !0), i)) {
                    let e = s.transform.localRotationEuler;
                    i.cloneTo(e), (s.transform.localRotationEuler = e);
                }
                Utils.playSubParticle(s);
            }
        }
        static playSubParticle(t) {
            t && t instanceof Laya.ShuriKenParticle3D && t.particleSystem.play();
            for (let i = 0; i < t.numChildren; i++)
                this.playSubParticle(t.getChildAt(i));
        }
        static stopParticle(t) {
            t && t instanceof Laya.ShuriKenParticle3D && t.particleSystem.stop();
            for (let i = 0; i < t.numChildren; i++)
                this.stopParticle(t.getChildAt(i));
        }
        static clearRes(e) {
            Object.keys(Laya.Loader.loadedMap).forEach(t => {
                if (t.indexOf(e) >= 0) {
                    let e = Laya.loader.getRes(t);
                    e && (e.destroy && e.destroy(), Laya.loader.clearRes(t));
                }
            });
        }
        static loadBitmapFont(e, t, i) {
            let a = new Laya.BitmapFont();
            a.loadFont(e, Laya.Handler.create(null, e => {
                e ? (Laya.Text.registerBitmapFont(t, e), e.setSpaceWidth(5), i && i(t), console.log('load font success:', t)) : console.log('load font fail:', t);
            }, [a]));
        }
        static showRewardGoldAnimation(e) {
            var t = this;
            let i = 0, a = 0, s = 0, o = function () {
                if (++i > 20)
                    return void Laya.timer.clear(t, o);
                let n = Laya.Pool.getItemByClass('imgGold', Laya.Image);
                n.skin = 'resources/lobby/reward/gold.png';
                let r = Laya.stage.width / 2 + ex.rand(1, 100) - 50, l = Laya.stage.height / 2 + ex.rand(1, 100) - 50;
                n.pos(r, l),
                    Laya.stage.addChild(n),
                    Laya.Tween.to(n, {
                        x: 180,
                        y: s + 15
                    }, 500, null, Laya.Handler.create(t, () => {
                        n.removeSelf(),
                            Laya.Pool.recover('imgGold', n),
                            e &&
                                e({
                                    isEnd: ++a >= 20
                                });
                    }), 300);
            };
            Laya.timer.loop(30, this, o);
        }
        static showRewardGemAnimation(e) {
            var t = this;
            let i = 0, a = 0, s = 0, o = function () {
                if (++i > 20)
                    return void Laya.timer.clear(t, o);
                let n = Laya.Pool.getItemByClass('imgGem', Laya.Image);
                n.skin = 'resources/lobby/reward/diamond.png';
                let r = Laya.stage.width / 2 + ex.rand(1, 100) - 50, l = Laya.stage.height / 2 + ex.rand(1, 100) - 50;
                n.pos(r, l),
                    Laya.stage.addChild(n),
                    Laya.Tween.to(n, {
                        x: 410,
                        y: s + 15
                    }, 500, null, Laya.Handler.create(t, () => {
                        n.removeSelf(),
                            Laya.Pool.recover('imgGem', n),
                            e &&
                                e({
                                    isEnd: ++a >= 20
                                });
                    }), 300);
            };
            Laya.timer.loop(30, this, o);
        }
        static showTipsNumber(e, t, i, a) {
            Utils.showTipsLabel((e > 0 ? '+' : '') + e, t, i, a);
        }
        static delayShow(e, t) {
            e ? (e.visible = !0) : console.log('node is null.');
        }
    }

    class Unlock extends y {
        constructor() {
            super(...arguments);
            this.info = null;
            this.spine = null;
        }
        static show() {
            platform.showInterstitialAd();
            platform.showNativeAd(80);
            let e = 'prefab';
            let t = e + '/Unlock.prefab';
            Laya.loader.load(t, Laya.Handler.create(this, e => {
                if (e) {
                    let t = new Laya.Prefab();
                    t.json = e;
                    let i = t.create();
                    (i.zOrder = 1), Laya.stage.addChildAt(i, GameModel.Scene3DZIndex + 1);
                }
            }), null, Laya.Loader.JSON);
        }
        onAwake() {
            (this.pageName = '解锁坦克'),
                this.enterPage({
                    page: this.pageName
                }),
                super.onAwake(),
                (this.content.visible = !1),
                (this.info = GameConfig.getTankInfo(GameData.unlockTankId)),
                this.showUnlockSpine(this.info.level - 1, () => {
                    this.showUI();
                });
        }
        showUnlockSpine(e, t) {
            let i = 'resources/lobby/tank/' + e + '.png';
            Laya.loader.load(i, Laya.Handler.create(this, () => {
                let e = new Laya.Skeleton();
                e.load('resources/spine/unlock/skeleton.sk', Laya.Handler.create(this, () => {
                    e.pos(Laya.stage.width / 2, Laya.stage.height / 2),
                        this.root.addChild(e),
                        e.play(0, !1),
                        e.player.on(Laya.Event.STOPPED, this, () => {
                            console.log('STOPPED'), e.play(1, !0);
                            let i = Utils.localToGlobal(this.content, this.light.x, this.light.y);
                            e.pos(i.x, i.y), t && t();
                        });
                    let a = Laya.Loader.getRes(i);
                    e.setSlotSkin('tank1', a), e.setSlotSkin('tank2', a), SoundManager.playSound(Model.AudioUrl.Unlock);
                }), 1),
                    (this.spine = e);
            }));
        }
        close() {
            platform.hideNativeAd();
            this.spine && this.spine.templet && (this.spine.stop(), this.spine.templet.destroy(), console.log('clear spine.')), super.close();
        }
        showUI() {
            (this.content.visible = !0),
                (Laya.Tween.from(this.light, {
                    rotation: 360
                }, 15e3).repeat = 0),
                (this.levelLabel.text = "Level " + this.info.level),
                (this.iconTank.skin = 'resources/lobby/tank/' + this.info.level + '.png');
        }
        onCloseClick() {
            super.onCloseClick();
        }
        onClick(e) {
            e && e.target instanceof Laya.Button ? console.log('event.target', e.target.name) : this.content.visible && this.onCloseClick();
        }
    }

    class LobbyNode extends Laya.Script {
        constructor() {
            super(...arguments);
            this.gameUI = null;
            this.root = null;
            this.content = null;
            this.tankTitle = null;
            this.buyBtnRect = null;
            this.starList = [];
            this.currBuyTank = 0;
            this.goldScaling = !1;
        }
        static show(e) {
            Laya.loader.load('prefab/LobbyNode.prefab', Laya.Handler.create(this, t => {
                if (t) {
                    let i = new Laya.Prefab();
                    i.json = t;
                    let a = i.create();
                    a.getComponent(LobbyNode).setData(e), e.addChildAt(a, GameModel.Scene3DZIndex);
                }
            }), null, Laya.Loader.JSON);
        }
        setData(e) {
            this.gameUI = e;
        }
        onAwake() {
            this.pageName = '大厅';
            LobbyNode.instance = this;
            this.root = this.owner;
            this.root.width = Laya.stage.width;
            this.root.height = Laya.stage.height;
            let e = this.root.getChildByName('bg');
            e && ((e.width = this.root.width), (e.height = this.root.height));
            let t = this.root.getChildByName('watermark');
            if (((t.width = 230 * (Math.ceil(this.root.width / 230) + 1)),
                (t.height = 239 * (Math.ceil(this.root.height / 239) + 1)),
                (t.y = -239),
                TimeLine.tween(t)
                    .to(15e3, {
                    x: -230,
                    y: 0
                })
                    .start(!0),
                (this.content = this.root.getChildByName('content')),
                this.content.pos((this.root.width - this.content.width) / 2, (this.root.height - this.content.height) / 2),
                this.initSprite(),
                this.initListener(),
                GameConfig.startGameTime > 0)) {
                let e = Math.round((Date.now() - GameConfig.startGameTime) / 5e3), t = 0;
                GameData.seatList.forEach(e => {
                    if (e > 0) {
                        let i = GameConfig.getTankInfo(e);
                        t += i.profit;
                    }
                });
                let i = e * t;
                console.log('game profit gold:', i), GameData.addGold(i);
            }
            this.goldLabel.font = GameModel.WHITE_GOLD;
            this.gemLabel.font = GameModel.WHITE_GOLD;
            for (let e = 0; e < 3; e++) {
                let t = this.duanBg.getChildByName('star' + (e + 1));
                this.starList.push(t);
            }
            this.refreshGoldLabel(), this.refreshGemLabel();
            this.refreshStar();
            this.goldLabel.parent.on(Laya.Event.CLICK, this, this.onShowGoldClick);
            this.gemLabel.parent.on(Laya.Event.CLICK, this, this.onShowGemClick);
            this.priceLabel.font = GameModel.WHITE_GOLD;
            this.btnStart.clickHandler = new Laya.Handler(this, this.onStartClick);
            this.btnSignin.clickHandler = new Laya.Handler(this, this.onShowSignClick);
            this.btnUAV.clickHandler = new Laya.Handler(this, this.onUAVClick);
            this.btnBuy.clickHandler = new Laya.Handler(this, this.onBuyClick);
            this.btnShop.clickHandler = new Laya.Handler(this, this.onShopClick);
            GameConfig.trialTank = 0;
            GameConfig.currFightUAV = 0;
            this.refreshLobbyTank(), this.mergeNode.initialize(this), this.refreshBuyIcon(!1);
            let i = Utils.localToGlobal(this.content, this.btnBuy.x, this.btnBuy.y);
            if (((this.buyBtnRect = new Laya.Rectangle(i.x, i.y, this.btnBuy.width, this.btnBuy.height)),
                (this.tankShop = this.root.getChildByName('TankShop').getComponent(TankShop)),
                this.tankShop.setLobbyNode(this),
                GameInfo.isNewUser)) {
                let e = Utils.localToGlobal(this.btnStart.parent, this.btnStart.x, this.btnStart.y);
                GuideUtils.showStartGame(e.x, e.y, this.btnStart.width, this.btnStart.height);
            }
            else if (GuideUtils.showStep == Model.GuideStep.Buy) {
                let e = Utils.localToGlobal(this.btnBuy.parent, this.btnBuy.x, this.btnBuy.y);
                GuideUtils.showBuyTank(e.x, e.y, this.btnBuy.width, this.btnBuy.height);
            }
            else
                GameConfig.startGameTime > 0 && this.showInterstitialAd();
        }
        initSprite() {
            let e = this.tankTitlePrefab.create();
            e.pos(this.root.width / 2 - 450, this.root.height / 2 - 210), Laya.stage.addChild(e);
            let t = 0;
            0 == t && (t = this.root.width - 200);
            let i = this.goldLabel.parent, a = this.gemLabel.parent;
            (a.left = t - 10 - a.width), (i.left = a.left - 20 - i.width);
            let s = e.getChildByName('bullet_icon'), o = e.getChildByName('name_label');
            this.tankTitle = {
                root: e,
                bulletIcon: s,
                nameLabel: o
            };
            SoundManager.playMusic(Model.AudioUrl.BgmLobby, 0);
        }
        initListener() {
            MSGEvent.on(this.pageName, MSGEvent.UPDATE_USERINFO, e => {
                e.type == RewardType.Gem ? this.refreshGemLabel() : e.type == RewardType.Gold && this.showGetGoldAni();
            }),
                MSGEvent.on(this.pageName, MSGEvent.UNLOCK_TANK, () => {
                    this.refreshBuyIcon(!1), this.refreshLobbyTank(), Unlock.show();
                });
        }
        refreshGoldLabel() {
            this.goldLabel.text = GA.formatNumber(GameData.gold);
        }
        refreshGemLabel() {
            this.gemLabel.text = '' + GameData.gem;
        }
        refreshStar() {
            let e = GameConfig.getCurrentDuanInfo();
            this.duanIcon.skin = 'resources/gameover/duan/0' + e.ranktype + '.png';
            this.duanNameLabel.skin = 'resources/gameover/duan/' + e.ranktype + '.png';
            let t = GameConfig.getDuanStar(null);
            this.starList.forEach((e, i) => {
                e.skin = t > i ? 'resources/lobby/star_full.png' : 'resources/lobby/star_empty.png';
            });
        }
        refreshBuyIcon(e) {
            let t = Math.max(GameData.unlockTankId - 5, GameConfig.TankMinID), i = Math.max(GameData.unlockTankId - 3, GameConfig.TankMinID);
            this.currBuyTank < t ? (this.currBuyTank = i) : e && (this.currBuyTank++, this.currBuyTank > i && (this.currBuyTank = t));
            let a = GameConfig.getTankInfo(this.currBuyTank);
            this.iconTank.skin = 'resources/lobby/tank/' + a.level + '.png';
            let s = GameConfig.getTankPrice(this.currBuyTank);
            this.priceLabel.text = GA.formatNumber(s);
        }
        refreshLobbyTank() {
            if (GameInfo.isNewUser) {
                let e = new Laya.Sprite();
                e.loadImage('resources/lobby/tank_01.png'), e.pos(140, 240), this.content.addChild(e);
            }
            else
                this.gameUI.showTank(GameData.currTank, !0, ex.v3(-2.4, -0.6, -0.4));
            let e = GameConfig.getTankInfo(GameData.currTank);
            this.tankTitle && ((this.tankTitle.nameLabel.text = e.name), (this.tankTitle.bulletIcon.skin = `resources/lobby/bullet/${e.type}.png`));
        }
        close() {
            this.tankShop.onDisable();
            this.tankTitle && this.tankTitle.root.destroy(), this.root.destroy(), this.destroy(), MSGEvent.offAll(this.pageName);
            try {
                SoundManager.stopMusic();
            }
            catch (e) { }
            Utils.clearRes('resources/lobby');
            Utils.clearRes('resources/prefab');
            Utils.clearRes('subgame/Tank_Show');
        }
        onShowGoldClick() {
            FreeGold.show(), SoundManager.playSound(Model.AudioUrl.Click);
        }
        onShowGemClick() {
            FreeGold.show({
                isGem: !0
            });
            SoundManager.playSound(Model.AudioUrl.Click);
        }
        onShowSignClick() {
            SignInNode.show(this);
            SoundManager.playSound(Model.AudioUrl.Click);
        }
        checkShowRestoreUAV() {
            if (GameData.currUAV > 0) {
                let e = GameData.currUAV;
                if (GameConfig.getUAVRestoreLeftTime(e) > 0) {
                    if (GameConfig.continueCancelRestoreUAVTimes <= 2)
                        return (UAVRestore.show(e, () => {
                            this.startGame();
                        }),
                            !0);
                }
                else
                    (GameConfig.currFightUAV = e), GameData.uavGoToWar(e);
            }
            return !1;
        }
        onStartClick() {
            GuideUtils.showStep == Model.GuideStep.StartGame && GuideUtils.destroy();
            this.checkShowRestoreUAV() ||
                FreeTrial.show(() => {
                    this.startGame();
                }),
                SoundManager.playSound(Model.AudioUrl.Click);
        }
        startGame() {
            (GameConfig.startGameTime = Date.now()), this.gameUI.onStartGame(), this.close();
        }
        onUAVClick() {
            (this.content.visible = this.mergeNode.visible = !1),
                this.tankTitle && (this.tankTitle.root.visible = !1),
                this.gameUI.hideTank(),
                RoleNode.show(this, () => {
                    (this.content.visible = this.mergeNode.visible = !0), this.tankTitle && (this.tankTitle.root.visible = !0), this.refreshLobbyTank(), this.showInterstitialAd();
                }),
                SoundManager.playSound(Model.AudioUrl.Click);
        }
        onBuyClick() {
            GuideUtils.showStep == Model.GuideStep.Buy && (GuideUtils.destroy(), GuideUtils.showMergeTank(this.root.width / 2 - 30, 120, 270, 120)), this.buy(this.currBuyTank);
        }
        onShopClick() {
            this.tankShop.show(), SoundManager.playSound(Model.AudioUrl.Click);
        }
        onMoreGameClick() { }
        buy(e) {
            return !!this.mergeNode.buy(e) && (this.refreshBuyIcon(!0), this.refreshGoldLabel(), SoundManager.playSoundMultiple(Model.AudioUrl.Buy), !0);
        }
        showGetGoldAni() {
            this.refreshGoldLabel();
            this.goldScaling ||
                ((this.goldScaling = !0),
                    Laya.Tween.to(this.goldLabel, {
                        scaleX: 1.5,
                        scaleY: 1.5
                    }, 200, null, Laya.Handler.create(this, () => {
                        Laya.Tween.to(this.goldLabel, {
                            scaleX: 1,
                            scaleY: 1
                        }, 200, null, Laya.Handler.create(this, () => {
                            this.goldScaling = !1;
                        }));
                    })));
        }
        randomShowAirDrop(e, t, i) {
            let a = Math.max(GameData.unlockTankId - 5, GameConfig.TankMinID), s = Math.max(GameData.unlockTankId - 3, GameConfig.TankMinID), o = [];
            for (; t-- > 0;)
                o.push(ex.rand(a, s));
            this.mergeNode.showAirDropList(o, e, i);
        }
        randomAirDrop(e) {
            this.randomShowAirDrop(AirdropType.Normal, 8, e);
        }
        randomFreeBox(e) {
            this.randomShowAirDrop(e, 1, !1);
        }
        showSellButton(e) {
            let t = GameConfig.getTankPrice(e.id);
            this.priceLabel.text = GA.formatNumber(t * (e.sell / 100));
            this.iconTank.visible = !1;
            this.btnBuy.skin = 'resources/lobby/btn_sell.png';
        }
        hideSellButton() {
            let e = GameConfig.getTankPrice(this.currBuyTank);
            this.priceLabel.text = GA.formatNumber(e);
            this.iconTank.visible = !0;
            this.btnBuy.skin = 'resources/lobby/btn_buy.png';
        }
        containsSell(e, t) {
            return !!this.buyBtnRect && this.buyBtnRect.contains(e, t);
        }
        showRoleTank(e) {
            this.gameUI.showTank(e, !1, ex.v3(0, 0, -0.4));
        }
        hideRoleTank() {
            this.gameUI.hideTank();
        }
        showInterstitialAd() { }
    }

    class x extends Laya.Script3D {
        constructor() {
            super(...arguments);
            this.root = null;
            this.info = null;
            this.subpackage = null;
            this.baseNode = null;
            this.turretNode = null;
            this.screenNode = null;
            this.uavNode = null;
            this.currUAV = 0;
            this.isShowUAV = !1;
            this.directionAni = -1;
            this.startPosY = 0;
            this.propeller = null;
            this.tankMaterial = null;
            this.m_TouchBegan = !1;
            this.mMoved = !1;
            this.mLastPointX = 0;
        }
        get position() {
            return this.root.transform.position;
        }
        set position(e) {
            let t = this.position;
            e.cloneTo(t), (this.root.transform.position = t), this.screenNode && (this.screenNode.transform.position = t);
        }
        onAwake() {
            console.log('LobbyTank onAwake');
            let e = '' + ex.formatNumber(this.info.level, 2);
            this.loadTurret(this.subpackage, e), this.loadYingzi(), this.loadMaterial(), this.loadUAV(), 29 == this.info.level && this.loadScreen();
            this.baseNode = this.owner.getChildAt(0);
            this.baseNode.meshRenderer.material = this.tankMaterial;
        }
        loadTurret(e, t) {
            let i = e + '/Tanke_Model/PaoTai/LayaScene_Muzzle_' + t + '/Conventional/' + t + '.lh';
            Laya.Sprite3D.load(i, Laya.Handler.create(this, e => {
                e && (this.owner.addChild(e), (this.turretNode = e.getChildAt(0)), (this.turretNode.meshRenderer.material = this.tankMaterial));
            }));
        }
        loadYingzi() {
            Laya.Sprite3D.load('subgame/sprite3d/LayaScene_Yingzi/Conventional/Yingzi.lh', Laya.Handler.create(this, e => {
                e && ((e.transform.position = ex.v3(0, 0.01, 0)), this.owner.addChild(e));
            }));
        }
        loadUIShow() {
            let e = 'Ef_UI_Show';
            this.info.level >= 17 && (e = `Ef_Tanke${this.info.level}_Show`);
            let t = 'subgame/Tank_Show/LayaScene_' + e + '/Conventional/' + e + '.lh';
            Laya.Sprite3D.load(t, Laya.Handler.create(this, e => {
                e && (this.owner.addChild(e), Utils.changeParticleRenderMode(e));
            }));
        }
        loadScreen() {
            Laya.Sprite3D.load('subgame/Tank_Show/LayaScene_Screen/Conventional/Screen.lh', Laya.Handler.create(this, e => {
                e &&
                    !this.destroyed &&
                    (this.owner.parent.addChild(e),
                        (e.transform.position = this.root.transform.position),
                        e.transform.rotate(ex.v3temp(0, -40, 0), !1, !1),
                        (this.screenNode = e),
                        Utils.changeParticleRenderMode(e));
            }));
        }
        loadUAV() {
            if (this.currUAV > 0) {
                let e = 'subgame/uav/Aerocraft/' + `Aerocraft${this.currUAV % 2e3}` + '.lh';
                Laya.Sprite3D.load(e, Laya.Handler.create(this, e => {
                    if (e && !this.destroyed) {
                        console.log('UAV loaded.');
                        let t = e.clone();
                        this.owner.parent.addChild(t),
                            t.transform.translate(ex.v3temp(-1.1, 1.6, 0), !1),
                            t.transform.rotate(ex.v3temp(0, -30, 0), !1, !1),
                            (t.transform.localScale = ex.v3temp(0.7, 0.7, 0.7)),
                            (this.startPosY = t.transform.position.y),
                            (t.active = this.isShowUAV),
                            (this.uavNode = t),
                            (this.propeller = t.getChildAt(0).getChildByName('Aerocraft1_2')),
                            Laya.timer.callLater(e, e.destroy);
                    }
                }));
            }
        }
        loadMaterial() {
            let e = 0, t = 'subgame/materials/tank0' + (e = this.info.level <= 12 ? 1 : this.info.level <= 22 ? 2 : 3) + '.png';
            (this.tankMaterial = new Laya.BlinnPhongMaterial()),
                Laya.loader.load(t, Laya.Handler.create(this, e => {
                    e && ((this.tankMaterial.albedoTexture = Laya.Loader.getRes(t)), (this.tankMaterial.albedoIntensity = 1.3), (this.tankMaterial.shininess = 0.3));
                }));
        }
        setShowUAV(e, t) {
            (this.isShowUAV = e),
                this.uavNode && (this.uavNode.active = e),
                GameData.currUAV != this.currUAV && (this.uavNode && this.uavNode.destroy(), this.propeller && this.propeller.destroy(), (this.currUAV = GameData.currUAV), t && this.loadUAV());
        }
        onUpdate() {
            if (!ex.isValidTimerDelta())
                return;
            if (!this.m_TouchBegan) {
                let e = 10 * (Laya.timer.delta / 1e3);
                this.root.transform.rotate(ex.v3temp(0, e, 0), !1, !1);
            }
            let e = Laya.timer.delta / 1e3;
            this.propeller && this.propeller.transform.rotate(ex.v3temp(0, 20 * e, 0), !1, !0),
                this.uavNode &&
                    !this.uavNode.destroyed &&
                    (this.uavNode.transform.translate(ex.v3temp(0, 0.25 * this.directionAni * e, 0), !1),
                        -1 == this.directionAni
                            ? this.uavNode.transform.position.y < this.startPosY - 0.2 && (this.directionAni = 1)
                            : 1 == this.directionAni && this.uavNode.transform.position.y > this.startPosY && (this.directionAni = -1));
        }
        touchStart(e, t) {
            e < Laya.stage.width / 2 && ((this.m_TouchBegan = !0), (this.mMoved = !1), (this.mLastPointX = e));
        }
        touchMove(e, t) {
            if (this.m_TouchBegan) {
                let t = 0.5 * (e - this.mLastPointX);
                this.root.transform.rotate(ex.v3temp(0, t, 0), !0, !1), (this.mLastPointX = e), (this.mMoved = !0);
            }
        }
        touchEnd() {
            if (this.m_TouchBegan && !this.mMoved) {
                let e = Laya.stage.mouseY;
                e >= 210 && e <= 510 && LobbyNode.instance.onUAVClick();
            }
            this.m_TouchBegan = !1;
        }
        clear() {
            console.log('clear lobby tank.'), this.screenNode && this.screenNode.destroy(), this.uavNode && this.uavNode.destroy(), this.root.destroy();
        }
    }

    class V extends Laya.Script3D {
        constructor() {
            super(), (this.root = null);
            this.manager = null;
            this._followAtTarget = null;
            this.bCameraPreview = !1;
            this.previewEndCallback = null;
            this.previewPosition = ex.v3(0);
            this.previewRotation = ex.v3(0);
            this.defaultPos = ex.v3(0);
            this.defaultRotation = ex.v3(0);
            this.targetPos = ex.v3(0);
            this.targetRotation = ex.v3(0);
            (this.lerpAmount = 0), (V.instance = this);
        }
        onAwake() {
            (this.root = this.owner),
                this.root.transform.position.cloneTo(this.defaultPos),
                this.root.transform.rotationEuler.cloneTo(this.defaultRotation),
                this.defaultPos.cloneTo(this.targetPos),
                this.defaultRotation.cloneTo(this.targetRotation);
        }
        get position() {
            return this.root.transform.position;
        }
        set position(e) {
            let t = this.position;
            e.cloneTo(t), e.cloneTo(this.targetPos), (this.root.transform.position = t);
        }
        get localRotationEuler() {
            return this.root.transform.localRotationEuler;
        }
        set localRotationEuler(e) {
            let t = this.localRotationEuler;
            e.cloneTo(t), (this.root.transform.localRotationEuler = t);
        }
        get followAtTarget() {
            return this._followAtTarget;
        }
        set followAtTarget(e) {
            this._followAtTarget = e;
        }
        set orthographic(e) {
            this.root.orthographic = e;
        }
        onLateUpdate() {
            ex.isValidTimerDelta() && (this.bCameraPreview ? this.followAtTarget && this.followAtTarget.transform && this.followPreviewCamera() : this.followAtTarget && this.followCamera());
        }
        followCamera() {
            let e = Laya.timer.delta / 1e3;
            if (this.manager && this.manager.isGameRunning() && this.root) {
                let t = this.root.transform.position;
                ex.pAddv3(this.followAtTarget.transform.position, this.defaultPos, t),
                    (this.targetPos.x = Laya.MathUtil.lerp(this.targetPos.x, t.x, e * this.lerpAmount)),
                    (this.targetPos.z = Laya.MathUtil.lerp(this.targetPos.z, t.z, e * this.lerpAmount)),
                    (this.root.transform.position = this.targetPos);
            }
        }
        followPreviewCamera() {
            this.manager && this.manager.isGameReady() && ((this.root.transform.position = this.previewPosition), (this.root.transform.rotationEuler = this.previewRotation));
        }
        restorePosition() {
            GameModel.CameraDefaultPos.cloneTo(this.defaultPos),
                GameModel.CameraDefaultRotation.cloneTo(this.defaultRotation),
                (this.position = this.defaultPos),
                (this.localRotationEuler = this.defaultRotation),
                this.defaultPos.cloneTo(this.targetPos),
                this.defaultRotation.cloneTo(this.targetRotation),
                (this.lerpAmount = 8),
                (this.bCameraPreview = !1);
        }
        startGameCameraFollow() {
            (this.bCameraPreview = !1),
                GameModel.CameraDefaultPos.cloneTo(this.defaultPos),
                GameModel.CameraDefaultRotation.cloneTo(this.defaultRotation),
                this.position.cloneTo(this.targetPos),
                this.localRotationEuler.cloneTo(this.targetRotation),
                (this.lerpAmount = 8);
        }
        changeCamera(e, t, i) {
            e.cloneTo(this.defaultPos), t && t.cloneTo(this.defaultRotation), i && (this.lerpAmount = i);
        }
        showLobby() {
            console.log('camera changeCamera'), (this.root.transform.position = GameModel.CameraLobbyPos), (this.root.transform.rotationEuler = GameModel.CameraLobbyRotation);
        }
        showPreview(e) {
            (this.previewEndCallback = e),
                GameModel.CameraPreviewPos.cloneTo(this.defaultPos),
                GameModel.CameraPreviewRotation.cloneTo(this.defaultRotation),
                (this.position = this.defaultPos),
                (this.localRotationEuler = this.defaultRotation);
        }
        startPreviewAnimation() {
            this.defaultPos.cloneTo(this.previewPosition), this.defaultRotation.cloneTo(this.previewRotation);
            let e = ex.pAddv3(this.followAtTarget.transform.position, GameModel.CameraDefaultPos, ex.v3temp(0)), t = ex.v3(GameModel.CameraDefaultRotation);
            Laya.Tween.to(this.previewPosition, {
                x: e.x,
                y: e.y,
                z: e.z
            }, 2e3, null, null, 1e3),
                Laya.Tween.to(this.previewRotation, {
                    x: t.x,
                    y: t.y,
                    z: t.z
                }, 2e3, null, Laya.Handler.create(this, () => {
                    this.startGameCameraFollow(), this.previewEndCallback && this.previewEndCallback();
                }), 1e3),
                (this.bCameraPreview = !0);
        }
        viewportProject(e, t) {
            this.root.viewport.project(e, this.root.projectionViewMatrix, t);
        }
    }
    V.instance = null;

    class GameOver extends Laya.Script {
        constructor() {
            super(...arguments);
            this.root = null;
            this.gameUI = null;
            this.content = null;
            this.overBg = null;
            this.videoIcon = null;
            this.starList = [];
            this.isWin = !1;
            this.rank = 0;
            this.rewardGold = 0;
            this.rewardGem = 0;
            this.duanReward = 0;
            this.duanSpine = null;
            this.selectedRunning = !1;
            this.btnShowAd = null;
            this.adButton = null;
        }
        onAwake() {
            (this.pageName = '结算'), console.log('GameOver onAwake'), (this.root = this.owner), (this.root.width = Laya.stage.width), (this.root.height = Laya.stage.height);
            let e = this.root.getChildByName('bg');
            (e.width = this.root.width), (e.height = this.root.height), (this.content = this.root.getChildByName('content'));
            for (let e = 0; e < 3; e++) {
                let t = this.content.getChildByName('star' + (e + 1));
                this.starList.push(t);
            }
            (this.rankLabel.font = GameModel.OVER_FONT),
                (this.addStarLabel.font = GameModel.OVER_FONT),
                (this.nextRewardLabel.font = GameModel.OVER_FONT),
                (this.rewardGemLabel.font = GameModel.OVER_FONT),
                (this.rewardGoldLabel.font = GameModel.OVER_FONT),
                (this.btnContinue.clickHandler = new Laya.Handler(this, this.onBackHomeClick)),
                (this.btnAddStar.clickHandler = new Laya.Handler(this, this.onAddStarClick)),
                (this.btnAddStar.tag = '增加一星'),
                (this.videoIcon = this.btnAddStar.getChildAt(0));
            this.btnShareVideo.visible = !1;
            this.initOPPO(), (this.root.visible = !1);
        }
        gameEnd(e, t, i) {
            (this.root.visible = this.root.active = !0),
                (this.gameUI = e),
                (this.isWin = t),
                (this.rank = i),
                t ? (GameConfig.winTimes >= 0 ? GameConfig.winTimes++ : (GameConfig.winTimes = 0)) : GameConfig.winTimes <= 0 ? GameConfig.winTimes-- : (GameConfig.winTimes = 0),
                (this.duanReward = 0),
                this.btnShareVideo && (this.btnShareVideo.disabled = !1),
                (this.btnAddStar.disabled = !1);
            this.videoIcon.skin = 'resources/game/icon_video_tt.png';
            this.content.visible = !1;
            let a = this.showOverAni();
            Laya.timer.once(1700, this, () => {
                (this.overBg.visible = !1), a && a.templet && (a.stop(), a.templet.destroy()), this.showResult();
            }),
                GameConfig.currFightUAV > 0 && GameData.updateUseUAVTime(GameConfig.currFightUAV);
        }
        showOverAni() {
            let e = new Laya.Skeleton();
            if ((e.load('resources/spine/over/skeleton.sk', Laya.Handler.create(this, () => {
                e.pos(this.root.width / 2, this.root.height / 2), this.root.addChild(e), e.play(0, !1);
            })),
                this.overBg))
                this.overBg.visible = !0;
            else {
                let e = new Laya.Image('resources/common/black.png');
                (e.sizeGrid = '2,2,2,2'), e.size(this.root.width, this.root.height), this.root.addChild(e), (this.overBg = e);
            }
            return SoundManager.playSound(Model.AudioUrl.GameOver), e;
        }
        showResult() {
            platform.stopBanner();
            platform.showNativeAd(120);
            let e = this.isWin, t = this.rank;
            this.content.visible = !0;
            let i = GameConfig.getTankInfo(GameData.unlockTankId), a = GameConfig.getCurrentDuanInfo();
            let temp;
            switch (t) {
                case 1:
                    temp = "st";
                    break;
                case 2:
                    temp = "nd";
                    break;
                case 3:
                    temp = "rd";
                    break;
                default:
                    temp = "th";
            }
            this.rankLabel.font = this.addStarLabel.font = "Arial";
            this.refreshStar(), this.refreshNextDuanRewardGem(a), (this.rankLabel.text = t + temp + ' place'), console.log('rank:', this.rankLabel.text);
            let s = Math.ceil(i.buy / i.goldcount);
            if (e)
                (this.addStarLabel.text = 'Add one star'), (this.rewardGem = 10), (this.rewardGold = s), this.addStar();
            else {
                (this.addStarLabel.text = 'Minus one star'), (this.rewardGem = 4), (this.rewardGold = Math.ceil(s / 10));
                let e = GameConfig.getDuanStar(), t = GameData.duanStar;
                GameData.subStar(),
                    t > 0 &&
                        Laya.timer.once(1e3, this, () => {
                            this.showSubStarAnimation(e, t);
                        });
            }
            if ((GameData.addGold(this.rewardGold),
                GameData.addGem(this.rewardGem),
                this.refreshRewardGem(),
                (this.rewardGoldLabel.text = GA.formatNumber(this.rewardGold)),
                this.showNativeAd(),
                GuideUtils.showStep == Model.GuideStep.BackHome)) {
                let e = Utils.localToGlobal(this.btnContinue.parent, this.btnContinue.x, this.btnContinue.y);
                GuideUtils.showBackHome(e.x, e.y, this.btnContinue.width, this.btnContinue.height);
            }
        }
        refreshRewardGem() {
            this.rewardGemLabel.text = '' + (this.rewardGem + this.duanReward);
        }
        refreshNextDuanRewardGem(e) {
            var t, i;
            let a = GameConfig.getNextRewardDuan(), s = null !== (t = null == a ? void 0 : a.reward) && void 0 !== t ? t : 0, o = null !== (i = null == a ? void 0 : a.ranktype) && void 0 !== i ? i : e.ranktype;
            (this.nextRewardLabel.text = '' + s), (this.nextDuanNameLabel.skin = 'resources/gameover/duan/' + o + '.png');
        }
        showNewDuanIcon(e) {
            (e = null != e ? e : GameConfig.getCurrentDuanInfo()),
                (this.duanIcon.skin = 'resources/gameover/duan/0' + e.ranktype + '.png'),
                (this.duanNameLabel.skin = 'resources/gameover/duan/' + e.ranktype + '.png'),
                this.refreshNextDuanRewardGem(e);
        }
        addStar() {
            let e = GameConfig.getCurrentDuanInfo(), t = GameConfig.getDuanStar(), i = GameData.duanStar;
            GameData.addStar();
            let a = GameConfig.getCurrentDuanInfo();
            if ((a.id > e.id &&
                GameData.unlockDuan(a.id) &&
                a.reward > 0 &&
                ((this.duanReward = a.reward),
                    GameData.addGem(this.duanReward),
                    G.showToast({
                        title: 'Congratulations on getting ' + this.duanReward + ' diamonds'
                    }),
                    this.refreshRewardGem()),
                i < GameConfig.DuanStarMax)) {
                let e = 1e3, s = !1;
                t + 1 > GameModel.DUAN_STAR && ((e += 2e3), (s = !0), this.showUpgradeStarAnimation(a, 1)),
                    Laya.timer.once(e, this, () => {
                        s && ((this.duanIcon.visible = !0), this.showNewDuanIcon(null)), this.showStarAnimation(t, i);
                    });
            }
        }
        showStarAnimation(e, t, i = 0, a = 1) {
            try {
                if (e + 1 > GameModel.DUAN_STAR) {
                    let i = GameConfig.getDuanInfoWithStar(t + 1);
                    (e = GameConfig.getDuanStar(t + 1)),
                        console.log('新段位:', i.name),
                        this.starList.forEach(e => {
                            e.skin = 'resources/gameover/star_empty.png';
                        });
                }
                else
                    e++;
                let s = e - 1;
                s < this.starList.length && (this.starList[s].skin = 'resources/gameover/star_full.png'),
                    console.log('get star index:', i, 'current star:', e),
                    i + 1 < a &&
                        Laya.timer.once(500, this, () => {
                            this.showStarAnimation(e, ++t, ++i, a);
                        });
            }
            catch (e) {
                console.warn(e);
            }
        }
        showSubStarAnimation(e, t, i = 0, a = 1) {
            try {
                if (e - 1 <= 0) {
                    let i = GameConfig.getDuanInfoWithStar(t - 1);
                    (e = GameConfig.getDuanStar(t - 1)),
                        console.log('降段位:', i.name),
                        GameData.duanStar > 0 &&
                            this.starList.forEach(e => {
                                e.skin = 'resources/gameover/star_full.png';
                            }),
                        this.showNewDuanIcon(i);
                }
                else
                    e--;
                let s = e;
                s >= 0 && s < this.starList.length && (this.starList[s].skin = 'resources/gameover/star_empty.png'),
                    console.log('sub star index:', i, 'current star:', e),
                    i + 1 < a &&
                        Laya.timer.once(500, this, () => {
                            this.showSubStarAnimation(e, --t, ++i, a);
                        });
            }
            catch (e) {
                console.warn(e);
            }
        }
        refreshStar() {
            let e = GameConfig.getCurrentDuanInfo();
            (this.duanIcon.skin = 'resources/gameover/duan/0' + e.ranktype + '.png'), (this.duanNameLabel.skin = 'resources/gameover/duan/' + e.ranktype + '.png');
            let t = GameConfig.getDuanStar();
            this.starList.forEach((e, i) => {
                e.skin = t > i ? 'resources/gameover/star_full.png' : 'resources/gameover/star_empty.png';
            });
        }
        showUpgradeStarAnimation(e, t) {
            let i = ['resources/gameover/duan/0' + GameConfig.DuanList[e.rank - 1 - t].ranktype + '.png', 'resources/gameover/duan/0' + e.ranktype + '.png'];
            Laya.loader.load(i, Laya.Handler.create(this, () => {
                if (((this.duanIcon.visible = !1), this.duanSpine))
                    this.setDuanSpineSlot(i[0], i[1]), this.duanSpine.play(0, !1);
                else {
                    let e = new Laya.Templet();
                    e.on(Laya.Event.COMPLETE, this, () => {
                        let t = e.buildArmature(1);
                        t.pos(this.duanIcon.x, this.duanIcon.y),
                            this.content.addChild(t),
                            t.play(0, !1),
                            t.on(Laya.Event.LABEL, this, e => {
                                e && 'grade' == e.name && SoundManager.playSound(Model.AudioUrl.DuanGrade);
                            }),
                            (this.duanSpine = t),
                            this.setDuanSpineSlot(i[0], i[1]);
                    }),
                        e.loadAni('resources/spine/duan/skeleton.sk');
                }
            }));
        }
        setDuanSpineSlot(e, t) {
            this.duanSpine.setSlotSkin('1', Laya.Loader.getRes(e)), this.duanSpine.setSlotSkin('2', Laya.Loader.getRes(t)), this.duanSpine.setSlotSkin('3', Laya.Loader.getRes(t));
        }
        onDoulbePickClick() { }
        turnToShow(e, t = 0) { }
        close() {
            platform.hideNativeAd();
            this.root.visible = this.root.active = !1;
            platform.showInterstitialAd();
        }
        onUpgradeClick() {
            this.close(), this.gameUI.onUpgradeLevel(), SoundManager.playSound(Model.AudioUrl.Click);
        }
        doBackHome() {
            this.close(), this.gameUI.onBackHome();
        }
        onShareVideoClick() {
            GameData.addGem(100);
        }
        onAddStarClick() {
            SoundManager.playSound(Model.AudioUrl.Click);
            let self = this;
            platform.playVideo(() => {
                self.addStar(), (self.btnAddStar.disabled = !0);
            });
        }
        onBackHomeClick() {
            GuideUtils.showStep == Model.GuideStep.BackHome && GuideUtils.destroy();
            this.doBackHome();
            SoundManager.playSound(Model.AudioUrl.Click);
        }
        initOPPO() {
            if (((this.adButton = this.content.getChildByName('adButton')), !this.adButton))
                return;
            (this.adButton.clickHandler = new Laya.Handler(this, this.onShowAdClick)),
                (this.btnShowAd = this.content.getChildByName('btn_show')),
                (this.btnShowAd.clickHandler = new Laya.Handler(this, this.onShowAdClick)),
                (this.adButton.getChildByName('btn_ad_close').clickHandler = new Laya.Handler(this, this.onCloseAdClick));
        }
        showNativeAd() {
            if (this.adButton)
                (this.adButton.skin = null), (this.adButton.visible = this.btnShowAd.visible = !1);
        }
        hasNativeAd() {
            return !!this.adButton;
        }
        onShowAdClick() { }
        onCloseAdClick() {
            this.adButton.visible = this.btnShowAd.visible = !1;
        }
    }

    class FastAstar {
    }
    FastAstar.Node = class t {
    };
    FastAstar.Astar = class {
        constructor(e, t) {
            console.log(e + "," + t);
            (this.MAP_WIDTH = 140),
                (this.MAP_HEIGHT = 140),
                (this.MAP_SIZE_1 = 139),
                (this.nodeVersion = 0),
                (this.mapVersion = 0),
                (this.isPrune = !0),
                (this.MAP_WIDTH = 140),
                (this.MAP_HEIGHT = 140),
                (this.MAP_SIZE_1 = 139);
        }
        createMap(e) {
            console.log("FastAstar-----createMap");
            this.mapVersion++;
            var i = 0;
            let a = 0, s = 0, o = 0;
            var n;
            if (!this.map) {
                this.map = new Array(this.MAP_WIDTH * this.MAP_HEIGHT), i = this.map.length;
                for (a = 0; a < i; a++)
                    (n = new (class t {
                    })()),
                        (s = a % this.MAP_WIDTH),
                        (o = Math.floor(a / this.MAP_WIDTH)),
                        (n.x = s),
                        (n.y = o),
                        (n.links = new Array(4)),
                        (this.map[a] = n),
                        e[o][s] && (this.map[a].block = this.mapVersion);
            }
            this.refreshMap();
        }
        isBlock(e, t) {
            let i = this.map[t * this.MAP_WIDTH + e];
            return !i || !!i.block;
        }
        refreshMap() {
            let e, t, i = 0, a = 0, s = 0, o = this.map.length;
            for (let n = 0; n < o; n++)
                (e = this.map[n]).block !== this.mapVersion &&
                    ((t = e.links),
                        (i = e.x),
                        (a = e.y),
                        (s = 0),
                        Math.floor((n & this.MAP_WIDTH) / this.MAP_WIDTH) ^ (1 & n)
                            ? (a > 0 && this.map[(a - 1) * this.MAP_WIDTH + i].block !== this.mapVersion && ((t[s] = this.map[(a - 1) * this.MAP_WIDTH + i]), s++),
                                a < this.MAP_SIZE_1 && this.map[(a + 1) * this.MAP_WIDTH + i].block !== this.mapVersion && ((t[s] = this.map[(a + 1) * this.MAP_WIDTH + i]), s++),
                                i < this.MAP_SIZE_1 && this.map[a * this.MAP_WIDTH + (i + 1)].block !== this.mapVersion && ((t[s] = this.map[a * this.MAP_WIDTH + (i + 1)]), s++),
                                i > 0 && this.map[a * this.MAP_WIDTH + (i - 1)].block !== this.mapVersion && ((t[s] = this.map[a * this.MAP_WIDTH + (i - 1)]), s++))
                            : (i < this.MAP_SIZE_1 && this.map[a * this.MAP_WIDTH + (i + 1)].block !== this.mapVersion && ((t[s] = this.map[a * this.MAP_WIDTH + (i + 1)]), s++),
                                i > 0 && this.map[a * this.MAP_WIDTH + (i - 1)].block !== this.mapVersion && ((t[s] = this.map[a * this.MAP_WIDTH + (i - 1)]), s++),
                                a > 0 && this.map[(a - 1) * this.MAP_WIDTH + i].block !== this.mapVersion && ((t[s] = this.map[(a - 1) * this.MAP_WIDTH + i]), s++),
                                a < this.MAP_SIZE_1 && this.map[(a + 1) * this.MAP_WIDTH + i].block !== this.mapVersion && ((t[s] = this.map[(a + 1) * this.MAP_WIDTH + i]), s++)),
                        (e.linksLength = s));
        }
        search(e, t, i, a) {
            var s, o, n, r, l = this.map[t * this.MAP_WIDTH + e], h = this.map[a * this.MAP_WIDTH + i];
            if (l.block === this.mapVersion || h.block === this.mapVersion)
                return (this.path = []), null;
            var d, c, u, m = Math.abs(i - e) + Math.abs(a - t), g = new Array(2);
            for (g[0] = l, l.pre = l.next = null, l.version = ++this.nodeVersion, l.nowCost = 0;;) {
                if (((d = g[0]), (g[0] = d.next), g[0] && (g[0].pre = null), d === h))
                    return this.isPrune ? this.prunePath(l, d) : this.buildPath(l, d), this.path;
                for (u = d.links, o = d.linksLength, s = 0; s < o; s++)
                    (c = u[s]),
                        (n = d.nowCost + 1),
                        c.version !== this.nodeVersion
                            ? ((c.version = this.nodeVersion),
                                (c.parent = d),
                                (c.nowCost = n),
                                (c.dist = Math.abs(i - c.x) + Math.abs(a - c.y)),
                                (n += c.dist),
                                (c.mayCost = n),
                                (n = (n - m) >> 1),
                                (c.pre = null),
                                (c.next = g[n]),
                                g[n] && (g[n].pre = c),
                                (g[n] = c))
                            : c.nowCost > n &&
                                (c.pre && (c.pre.next = c.next),
                                    c.next && (c.next.pre = c.pre),
                                    g[1] === c && (g[1] = c.next),
                                    (c.parent = d),
                                    (c.nowCost = n),
                                    (c.mayCost = n + c.dist),
                                    (c.pre = null),
                                    (c.next = g[0]),
                                    g[0] && (g[0].pre = c),
                                    (g[0] = c));
                if (!g[0]) {
                    if (!g[1])
                        break;
                    (r = g[0]), (g[0] = g[1]), (g[1] = r), (m += 2);
                }
            }
            return (this.path = []), null;
        }
        prunePath(e, t) {
            if (((this.path = [t]), t !== e))
                for (var i, a, s, o, n = t.parent, r = n.x - t.x, l = n.y - t.y;;) {
                    if (n === e)
                        return void (this.path[this.path.length] = n);
                    (s = n.parent),
                        (i = n.x),
                        (a = n.y),
                        s !== e &&
                            ((o = s.parent),
                                1 === Math.abs(o.x - i) &&
                                    1 === Math.abs(o.y - a) &&
                                    this.map[a * this.MAP_WIDTH + o.x].block !== this.mapVersion &&
                                    this.map[o.y * this.MAP_WIDTH + i].block !== this.mapVersion &&
                                    (s = o)),
                        s.x - i === r && s.y - a === l ? (n = s) : ((r = s.x - i), (l = s.y - a), (this.path[this.path.length] = n), (n = s));
                }
        }
        buildPath(e, t) {
            for (this.path = [t]; t !== e;)
                (t = t.parent), (this.path[this.path.length] = t);
        }
    };

    class MapManager {
        static createMap(e, t1) {
            console.log("MapManager-----createMap:" + e + "," + t1);
            this.scene3d = t1;
            let i = null;
            let t = Laya.Loader.getRes(e);
            this.width = t.length;
            this.height = t.length;
            i = t;
            this.fastAstar = new FastAstar.Astar(this.width, this.height);
            console.log('width=', this.width, 'height=', this.height);
            this.generalAStarMap(i);
            this.fastAstar.createMap(i);
        }
        static findPath(e, t, i, a, s, o = 0) {
            console.log("MapManager-----findPath");
            let n = this.fastAstar.search(t, i, a, s);
            if (n) {
                let t = [];
                for (let e = n.length; e--;) {
                    let i = n[e];
                    t.push(this.convertTo3DPos(i.x, i.y));
                }
                return (t[0].x = e.x), (t[0].y = e.z), this.generalPoint(t), t;
            }
            if (0 == o)
                if (this.fastAstar.isBlock(a, s)) {
                    let n = this.findValidPoint(a, s);
                    if (n)
                        return console.warn('find path end point error.', t, i, 'newPoint', n.x, n.y), this.findPath(e, t, i, n.x, n.y, ++o);
                }
                else if (this.fastAstar.isBlock(t, i)) {
                    let n = this.findValidPoint(t, i);
                    if (n)
                        return console.warn('find path start point error:', t, i, ', newPoint:', n.x, n.y), this.findPath(e, n.x, n.y, a, s, ++o);
                }
            return null;
        }
        static findValidPoint(e, t) {
            let i = 0, a = this.fastAstar;
            for (;;) {
                if ((i++, !a.isBlock(e - i, t)))
                    return {
                        x: e - i,
                        y: t
                    };
                if (!a.isBlock(e + i, t))
                    return {
                        x: e + i,
                        y: t
                    };
                if (!a.isBlock(e, t - i))
                    return {
                        x: e,
                        y: t - i
                    };
                if (!a.isBlock(e, t + i))
                    return {
                        x: e,
                        y: t + i
                    };
                if (i > this.width)
                    break;
            }
            return null;
        }
        static raycastWall(e, t, i = null) {
            return ((i = GameModel.CollisionGroupWall), this.scene3d.physicsSimulation.raycastFromTo(e, t, this.m_HitResult, Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER, i), !!this.m_HitResult.succeeded);
        }
        static generalPoint(e) {
            if (e.length < 2)
                return;
            let t = 0, i = 2;
            for (; !(i >= e.length);) {
                let a = e[t], s = e[i];
                if ((ex.v2ToV3(a, this.tempVector1), ex.v2ToV3(s, this.tempVector2), this.raycastWall(this.tempVector1, this.tempVector2)))
                    i = (t = i - 1) + 2;
                else {
                    if (!(i < e.length))
                        break;
                    e.splice(i - 1, 1);
                }
            }
        }
        static convertTo3DPos(e, t) {
            return {
                x: e * this.BlockWidth - GameModel.HalfMapWidth + this.BlockWidth / 2,
                y: t * this.BlockWidth - GameModel.HalfMapWidth + this.BlockWidth / 2,
                blockX: e,
                blockY: t
            };
        }
        static isBlock(e, t) {
            return this.fastAstar.isBlock(e, t);
        }
        static convertBlockPos(e) {
            let t = 100 * this.BlockWidth, i = Math.round((100 * (e - this.BlockWidth / 2 + GameModel.HalfMapWidth)) / t);
            return (i = Math.max(i, 0)), (i = Math.min(i, this.width - 1));
        }
        static changeMap(e) {
            let t = this.fastAstar.map;
            if (t && e) {
                let i, a, s = this.fastAstar.MAP_WIDTH;
                for (let o = 0; o < e.length; o++)
                    t[(i = (a = e[o]).y * s + a.x)].block = a.block;
                this.fastAstar.refreshMap();
            }
        }
        static createGridFromAStarMap(e) {
            let t = e.width, i = e.height, a = e.getPixels(0, 0, t, i), s = [], o = 0;
            for (let e = 0; e < t; e++) {
                let t = (s[e] = []);
                for (let e = 0; e < i; e++) {
                    let i = a[o++], s = a[o++], n = a[o++], r = a[o++];
                    t[e] = 255 == i && 255 == s && 255 == n && 255 == r ? 0 : 1;
                }
            }
            return s;
        }
        static generalAStarMap(e) {
            for (let t = 0; t < this.width; t++)
                for (let i = 0; i < this.height; i++)
                    if (1 == e[i][t]) {
                        let a = 2;
                        for (; a-- > 0;)
                            this.changeBlock(t - a, i, e),
                                this.changeBlock(t - a, i - a, e),
                                this.changeBlock(t - a, i + a, e),
                                this.changeBlock(t, i - a, e),
                                this.changeBlock(t, i + a, e),
                                this.changeBlock(t + a, i, e),
                                this.changeBlock(t + a, i - a, e),
                                this.changeBlock(t + a, i + a, e);
                    }
        }
        static changeBlock(e, t, i) {
            e >= 0 && e < this.width && t >= 0 && t < this.height && 0 == i[t][e] && (i[t][e] = 2);
        }
    }
    MapManager.fastAstar = null;
    MapManager.width = 0;
    MapManager.height = 0;
    MapManager.BlockWidth = 0.5;
    MapManager.scene3d = null;
    MapManager.m_HitResult = new Laya.HitResult();
    MapManager.tempVector1 = ex.v3(0, 0, 0);
    MapManager.tempVector2 = ex.v3(0, 0, 0);

    class U extends Laya.Script3D {
        constructor() {
            super();
            this.root = null;
            this.manager = null;
            this.manager = V.instance.manager;
        }
        get position() {
            return this.root.transform.position;
        }
        set position(e) {
            let t = this.position;
            e.cloneTo(t), (this.root.transform.position = t);
        }
        setPosition(e) {
            this.position = e;
        }
        onAwake() {
            this.root = this.owner;
        }
        convertToVec2(e) {
            let t = ex.v4temp(0, 0, 0, 0);
            return V.instance.viewportProject(e, t), ex.v2temp(t.x / Laya.stage.clientScaleX, t.y / Laya.stage.clientScaleY);
        }
    }

    class R extends U {
        constructor() {
            super(...arguments);
            this.tank = null;
            this.info = null;
            this.skillInfo = null;
            this.attackcdtime = 0;
            this.qiangKou = null;
            this.propeller = null;
            this.attackEffectMap = new Map();
            this.skillBuffMap = new Map();
            this.hitEffectValidTime = 0;
            this.skillXieTongZuoZhanSprite3D = null;
            this.state = UAVState.Ready;
            this.currentPos = ex.v3(0);
            this.moveEndPos = ex.v3(0);
            this.tempVector3 = ex.v3(0);
        }
        get attackPoint() {
            return this.info.atk;
        }
        get attackSpeed() {
            return this.info.atkspeed;
        }
        get attackDistance() {
            return this.info.atkdistance;
        }
        get isDouble() {
            switch (this.info.type) {
                case UAVType.ZhiYaun:
                case UAVType.LiangZi:
                case UAVType.FuZhu:
                    return !0;
                default:
                    return this.fireSingle(), !1;
            }
        }
        get shieldRatio() {
            for (let e of this.skillBuffMap.values())
                if (e.bufftype == SkillBuffType.Shield && e.time > 0)
                    return e.value;
            return 0;
        }
        get qiangKou1Pos() {
            return ex.v3temp(this.qiangKou.transform.position);
        }
        get qiangKou2Pos() {
            if (this.isDouble) {
                let e = this.qiangKou, t = e.transform.localPositionX;
                e.transform.translate(ex.v3temp(2 * -t, 0, 0), !0), e.transform.position.cloneTo(this.tempVector3);
                let i = this.tempVector3;
                return e.transform.translate(ex.v3temp(2 * t, 0, 0), !0), i;
            }
            return null;
        }
        get qiangKouCenterPos() {
            if (this.isDouble) {
                let e = this.qiangKou, t = e.transform.localPositionX;
                e.transform.translate(ex.v3temp(-t, 0, 0), !0), e.transform.position.cloneTo(this.tempVector3);
                let i = this.tempVector3;
                return e.transform.translate(ex.v3temp(t, 0, 0), !0), i;
            }
            return this.qiangKou1Pos;
        }
        onAwake() {
            super.onAwake(),
                (this.root.transform.localScale = ex.v3temp(1, 1, 1)),
                (this.skillInfo = GameConfig.getSkillInfo(this.info.skill)),
                this.skillInfo && (this.skillInfo.lastusetime = 0),
                this.loadAllEffects();
            let e = this.root.getChildByName('GuaDian');
            (this.qiangKou = e), (this.propeller = this.root.getChildByName('Aerocraft1_2'));
        }
        onStart() {
            (this.state = UAVState.Move), this.position.cloneTo(this.currentPos);
        }
        loadAllEffects() {
            let e = [];
            [Sprite3DType.Ef_QiangKou].forEach(t => {
                let i = 'subgame/uav/Effect/LayaScene_' + t + '/Conventional/' + t + '.lh';
                e.push({
                    url: i,
                    alias: t
                });
            });
            if (this.skillInfo) {
                let t = `Aerocraft${this.info.type % 2e3}`, i = [];
                this.info.type != UAVType.HongZha && i.push(Sprite3DType.Ef_Skill_tanke),
                    i.forEach(i => {
                        let a = 'subgame/uav/Skill/' + t + '/LayaScene_' + i + '/Conventional/' + i + '.lh';
                        e.push({
                            url: a,
                            alias: i
                        });
                    });
            }
            var t = this;
            let i = function (a) {
                a < e.length &&
                    Laya.Sprite3D.load(e[a].url, Laya.Handler.create(t, s => {
                        var o;
                        if (s) {
                            let n = s.clone();
                            n.active = !1;
                            let r = e[a].alias, l = t.root;
                            if ((r == Sprite3DType.Ef_Skill_tanke && (l = t.manager.root),
                                l.addChild(n),
                                t.attackEffectMap.set(r, n),
                                Utils.changeParticleRenderMode(n),
                                (null === (o = t.skillInfo) || void 0 === o ? void 0 : o.type) == SkillType.XieTongZuoZhan &&
                                    r == Sprite3DType.Ef_Skill_tanke &&
                                    ((t.skillXieTongZuoZhanSprite3D = n), t.showSkillTankEffect()),
                                t.isDouble && r == Sprite3DType.Ef_QiangKou)) {
                                let e = s.clone();
                                (e.active = !1), (e.transform.localPosition = ex.v3temp(0));
                                let i = Sprite3DType.Ef_QiangKou2;
                                t.root.addChild(e), t.attackEffectMap.set(i, e), Utils.changeParticleRenderMode(e);
                            }
                            i(++a), Laya.timer.callLater(s, s.destroy);
                        }
                        else
                            console.error('load effect error');
                    }));
            };
            i(0);
        }
        showFireEffect(e, t = null, i = null) {
            let a = this.attackEffectMap.get(e);
            a && (a.active || ((a.active = !0), Utils.playParticle(a, null)), t && (a.transform.position = t), i > 0 && (this.hitEffectValidTime = i));
        }
        hideFireEffect(e) {
            let t = this.attackEffectMap.get(e);
            t && t.active && ((t.active = !1), Utils.stopParticle(t));
        }
        setSkillEffectPosition(e) {
            let t = this.attackEffectMap.get(Sprite3DType.Ef_Skill_tanke);
            t && (t.transform.position = e);
        }
        randomHurt() {
            let e = this.attackPoint;
            return ex.rand(1, 100) <= this.info.critical
                ? {
                    hurt: 2 * e,
                    double: !0
                }
                : {
                    hurt: e,
                    double: !1
                };
        }
        randomSkillHurt() {
            return this.skillInfo ? this.skillInfo.damage : 0;
        }
        getAttackTarget() {
            let e = this.tank.getAttackLockTarget();
            return e && !e.isDie() && ex.getVec2Distance(e.position, this.tank.position) < this.tank.attackDistance ? e : null;
        }
        onUpdate() {
            if (ex.isValidTimerDelta() && this.manager.isGameRunning()) {
                let e = Laya.timer.delta / 1e3;
                this.isMoving() ? (this.selfTranslate(e), this.attack()) : this.isAttack() && this.attack(), this.RotateToPropeller(e), this.RotateTo(null), this.countDown();
            }
        }
        countDown() {
            let e = Laya.timer.delta;
            this.attackcdtime > 0 && (this.attackcdtime -= e),
                this.hitEffectValidTime > 0 && ((this.hitEffectValidTime -= e), this.hitEffectValidTime <= 0 && (this.hideFireEffect(Sprite3DType.Ef_QiangKou), this.hideFireEffect(Sprite3DType.Ef_QiangKou2)));
            for (let t of this.skillBuffMap.values())
                t.time > 0 &&
                    ((t.time -= e),
                        t.time <= 0
                            ? ((t.value = 0), this.hideFireEffect(Sprite3DType.Ef_Skill_tanke))
                            : this.tank.isDie() ||
                                (t.skilltype == SkillType.ZhuangJiaXiuFu
                                    ? (this.tank.recoveryBlood(t.value, e), this.setSkillEffectPosition(this.tank.position))
                                    : t.skilltype == SkillType.LiangZiLiChang
                                        ? this.setSkillEffectPosition(this.tank.position)
                                        : t.skilltype == SkillType.XiangWeiZhuanYi && this.setSkillEffectPosition(this.tank.position)));
            this.skillXieTongZuoZhanSprite3D && (this.skillXieTongZuoZhanSprite3D.transform.position = this.tank.position);
        }
        selfTranslate(e) {
            let t = this.tank.position, i = 2 * GameModel.TankWidth, a = this.getAttackTarget();
            a && ((t = a.position), (i = 0));
            let s = ex.pSubv3(t, this.position, ex.v3temp(0));
            Laya.Vector3.normalize(s, s);
            let o = ex.getVec2Distance(t, this.position);
            if (o > i + 1.5) {
                let t = GameModel.UAV_SPEED * e, i = this.position;
                (i.x += s.x * t), (i.z += s.z * t), (this.position = i), (this.currentPos.x = i.x), (this.currentPos.z = i.z);
            }
            else
                a ||
                    (o > i &&
                        ((this.moveEndPos.x = t.x + s.x * i),
                            (this.moveEndPos.z = t.z + s.z * i),
                            (this.currentPos.x = Laya.MathUtil.lerp(this.currentPos.x, this.moveEndPos.x, 1 * e)),
                            (this.currentPos.z = Laya.MathUtil.lerp(this.currentPos.z, this.moveEndPos.z, 1 * e)),
                            (this.position = this.currentPos)));
        }
        RotateToPropeller(e) {
            this.propeller && this.propeller.transform.rotate(ex.v3temp(0, 20 * e, 0), !1, !0);
        }
        RotateTo(e) {
            let t = null;
            if (e)
                t = e.position;
            else {
                let e = this.getAttackTarget();
                t = e ? e.position : this.tank.position;
            }
            let i = ex.pSubv3(t, this.position, ex.v3temp(0));
            Laya.Vector3.normalize(i, i);
            let a = -(ex.pToAngle(ex.v2temp(i.x, i.z)) + Math.PI / 2);
            this.root.transform.localRotationEulerY = ex.convertToRotate(a) + 180;
        }
        attack() {
            let e = this.getAttackTarget();
            if (e) {
                let t = ex.pDistancev3(this.position, e.position), i = this.attackDistance;
                t <= (i = this.isAttack() ? i + 1.5 : i) ? (this.isAttack() || this.startAttack(), this.checkFire()) : this.moveTo();
            }
            else
                this.stopAttack();
        }
        moveTo() {
            this.isMoving() || this.startMove();
        }
        startMove() {
            this.state = UAVState.Move;
        }
        startAttack() {
            this.state = UAVState.Attack;
        }
        stopAttack() {
            this.state = UAVState.Move;
        }
        checkFire() {
            this.fire();
        }
        fire() {
            if (this.attackcdtime <= 0 && ((this.attackcdtime = this.attackSpeed), this.isDouble ? this.fireDouble() : this.fireSingle(), Utils.checkInTheScreen(this.convertToVec2(this.position)))) {
                let e = 'resources/music/shot1.wav';
                SoundManager.playSound(e);
                let t = this.qiangKou1Pos;
                this.showFireEffect(Sprite3DType.Ef_QiangKou, t, 300);
            }
            return !1;
        }
        fireSingle(e = null) {
            let t = this.root.transform.rotationEuler.y;
            e = null != e ? e : this.qiangKou1Pos;
            let i = this.manager.createUAVBullet(e);
            return i.shot(this, this.getAttackTarget(), t), i;
        }
        fireDouble() {
            if ((this.fireSingle(), this.fireSingle(this.qiangKou2Pos), Utils.checkInTheScreen(this.convertToVec2(this.position)))) {
                let e = this.qiangKou2Pos;
                this.showFireEffect(Sprite3DType.Ef_QiangKou2, e, 300);
            }
        }
        fireSkill(e) {
            (this.attackcdtime = 1.5 * this.attackSpeed), this.RotateTo(this.tank);
            let t = this.root.transform.rotationEuler.y, i = this.qiangKouCenterPos, a = this.manager.createUAVBullet(i, e);
            return a.shot(this, this.tank, t), a;
        }
        fireSkillRocket(e) {
            this.attackcdtime = 1.5 * this.attackSpeed;
            let t = this.getAttackTarget(), i = this.root.transform.rotationEuler.y, a = this.qiangKouCenterPos, s = this.manager.createUAVBullet(a, e);
            return s.shot(this, t, i), s;
        }
        isReady() {
            return this.state == UAVState.Ready;
        }
        isMoving() {
            return this.state == UAVState.Move;
        }
        isAttack() {
            return this.state == UAVState.Attack;
        }
        kill(e) {
            this.tank.kill(e);
        }
        useSkill(e) {
            return e.type == SkillType.ZhuangJiaXiuFu
                ? (this.skillBuffMap.set(e.type, {
                    skilltype: e.type,
                    bufftype: SkillBuffType.RecoveryBlood,
                    time: e.time,
                    value: e.hpreply
                }),
                    this.fireSkill(e.type),
                    !0)
                : e.type == SkillType.LiangZiLiChang
                    ? (this.skillBuffMap.set(e.type, {
                        skilltype: e.type,
                        bufftype: SkillBuffType.Shield,
                        time: e.time,
                        value: e.shield
                    }),
                        this.fireSkill(e.type),
                        !0)
                    : e.type == SkillType.XiangWeiZhuanYi
                        ? (this.skillBuffMap.set(e.type, {
                            skilltype: e.type,
                            bufftype: SkillBuffType.Invincible,
                            time: e.time,
                            value: 0
                        }),
                            this.showSkillTankEffect(),
                            !0)
                        : e.type == SkillType.QuYuHongZha && (this.fireSkillRocket(e.type), !0);
        }
        showSkillTankEffect() {
            this.showFireEffect(Sprite3DType.Ef_Skill_tanke);
        }
        clear() {
            this.attackEffectMap.forEach(e => {
                e.destroy();
            }),
                this.root.destroy();
        }
    }

    class _ extends U {
        constructor() {
            super(...arguments);
            this.tankId = 0;
            this.nickname = null;
            this.avatar = null;
            this.m_info = null;
            this.mHealthPoint = 0;
            this.attackRatio = 0;
            this.hpRatio = 0;
            this.bulletCount = 0;
            this.attackLockTarget = null;
            this.attackEffectMap = new Map();
            this.state = TankState.Ready;
            this.mBullet = null;
            this.attackcdtime = 0;
            this.bulletLoadTime = 0;
            this.frozenValidTime = 0;
            this.shieldValidTime = 0;
            this.debuffValidTime = {
                frozen: 0,
                electromagnetic: 0
            };
            this.bloodSubTips = {
                value: 0,
                time: 0
            };
            this.invincibleTimes = 0;
            this.miniNode = null;
            this.infoNode = null;
            this.bloodProgressBar = null;
            this.loadBulletSpine = null;
            this.bulletTimeLabel = null;
            this.baseNode = null;
            this.turretNode = null;
            this.currUAV = null;
            this.bRestoreTurretRotationAnimation = !1;
            this.qiangKou = null;
            this.selectionMask = null;
            this.attackLock = null;
            this.shieldSprite3D = null;
            this._blockPos = ex.v2(0);
            this.forward = ex.v3(0);
            this.velocity = ex.v3(0);
            this.bHitAniShown = !1;
            this.hitScale = ex.v3(1, 1, 1);
        }
        get isRobot() {
            return !1;
        }
        get blockPos() {
            let e = this._blockPos, t = this.position;
            return (e.x = MapManager.convertBlockPos(t.x)), (e.y = MapManager.convertBlockPos(t.z)), this._blockPos;
        }
        get info() {
            return this.m_info;
        }
        get moveSpeed() {
            return this.m_info.move;
        }
        get attackSpeed() {
            return this.m_info.atkspeed;
        }
        get attackPoint() {
            let e = this.attackRatio;
            return this.m_info.atk * (1 + e / 100);
        }
        get attackDistance() {
            return this.m_info.atkdistance;
        }
        get leftHpRation() {
            return this.mHealthPoint / this.fullHealthPoint;
        }
        get fullHealthPoint() {
            let e = this.hpRatio;
            return this.m_info.hp * (1 + e / 100);
        }
        get isLowerHP() {
            return Math.round(100 * this.leftHpRation) <= 20;
        }
        get isBeFrozen() {
            return this.frozenValidTime > 0;
        }
        get bulletType() {
            return this.m_info.type <= TankType.Consecutive ? BulletType.Normal : this.m_info.type;
        }
        get shieldRatio() {
            return this.currUAV ? this.currUAV.shieldRatio : 0;
        }
        get isPiercingAttack() {
            switch (this.bulletType) {
                case BulletType.Flame:
                case BulletType.Electromagnetic:
                case BulletType.Laser:
                    return !0;
            }
            return !1;
        }
        get isFlame() {
            return this.m_info && this.m_info.type == TankType.Flame;
        }
        get isElectromagnetic() {
            return this.m_info && this.m_info.type == TankType.Electromagnetic;
        }
        get isLaser() {
            return this.m_info && this.m_info.type == TankType.Laser;
        }
        get isFrozen() {
            return this.m_info && this.m_info.type == TankType.Frozen;
        }
        get isInvincible() {
            if (this.currUAV)
                for (let e of this.currUAV.skillBuffMap.values())
                    if (e.bufftype == SkillBuffType.Invincible && e.time > 0)
                        return !0;
            return this.shieldValidTime > 0;
        }
        onAwake() {
            super.onAwake(), this.initSprite(), this.loadAllEffects(), this.craeteColliderBoxShape();
            let e = this.manager.createTankShadow();
            if ((e && ((e.transform.position = ex.v3(0, 0.01, 0)), this.root.addChild(e)), this.currUAV)) {
                let e = ex.v3temp(this.position);
                (e.x += 2 * GameModel.TankWidth), (e.y = 2), (this.currUAV.position = e);
            }
            this.isRobot || ((this.nickname = 'Me'), (this.avatar = 'resources/match/icon_avatar.png'), this.loadBulletAni(), this.createSelectionMask(), this.createAttackLock(), this.createShield());
        }
        craeteColliderBoxShape() {
            let e = new Laya.BoxColliderShape(1.6, 3, 2.3), t = this.root.addComponent(Laya.PhysicsCollider);
            (t.collisionGroup = GameModel.CollisionGroupTank), (t.colliderShape = e), (t.isTrigger = !0);
        }
        createSelectionMask() {
            Laya.Sprite3D.load('subgame/sprite3d/LayaScene_AttackRange/Conventional/AttackRange.lh', Laya.Handler.create(this, e => {
                if (e) {
                    this.root.addChild(e), (e.active = !1), (this.selectionMask = e);
                    let t = (2 * this.attackDistance) / 15;
                    this.selectionMask.transform.localScale = ex.v3temp(t, 1, t);
                }
            }));
        }
        createAttackLock() {
            Laya.Sprite3D.load('subgame/sprite3d/LayaScene_Locking/Conventional/Locking.lh', Laya.Handler.create(this, e => {
                e && (e.transform.translate(ex.v3temp(0, 0.1, 0), !1), this.root.parent.addChild(e), (e.active = !1), (this.attackLock = e));
            }));
        }
        createShield() {
            Laya.Sprite3D.load('subgame/sprite3d/LayaScene_Ef_BaoHu/Conventional/Ef_BaoHu.lh', Laya.Handler.create(this, e => {
                e && (this.root.addChild(e), (this.shieldSprite3D = e), Utils.playParticle(e, null), this.shieldValidTime <= 0 && (this.shieldSprite3D.active = !1));
            }));
        }
        addTurret(e) {
            this.root.addChild(e), (this.baseNode = this.root), (this.turretNode = e), (this.qiangKou = this.turretNode.getChildAt(0));
        }
        setUAV(e, t) {
            if (((this.currUAV = e.addComponent(R)), (this.currUAV.tank = this), (this.currUAV.info = t), this.manager.root.addChild(e), t.skill > 0)) {
                let e = GameConfig.getSkillInfo(t.skill);
                (this.attackRatio += e.atkadd), (this.hpRatio += e.hpadd), e.type == SkillType.XiangWeiZhuanYi && (this.invincibleTimes = 1);
            }
        }
        initialize() {
            (this.shieldValidTime = GameConfig.GameConf.shield), (this.m_info = GameConfig.getTankInfo(this.tankId));
            let e = this.manager.getTankMaterial(this.info.level);
            e && ((this.baseNode.meshRenderer.material = e), (this.turretNode.meshRenderer.material = e)), this.refreshMiniMapPostion(), this.fullBullet(), (this.mHealthPoint = this.fullHealthPoint);
        }
        initSprite() {
            let e = this.isRobot ? 'enemy' : 'myself', t = this.manager.gameUI, i = new Laya.Sprite();
            i.pivot(8, 8), i.loadImage('resources/game/dot_' + e + '.png'), t.miniMap.addChild(i), (this.miniNode = i);
            let a = new Laya.Sprite();
            (a.visible = !1), this.manager.root2d.addChild(a), (this.infoNode = a), this.refreshInfoNodePosition();
            let s = 'resources/game/progressbar_' + e + '.png';
            (this.bloodProgressBar = new Laya.ProgressBar(s)),
                (this.bloodProgressBar.anchorX = 0.5),
                (this.bloodProgressBar.value = 1),
                this.bloodProgressBar.pos(0, -30),
                this.infoNode.addChild(this.bloodProgressBar);
            let o = new Laya.Image(s);
            (o.anchorX = this.bloodProgressBar.anchorX), o.pos(0, this.bloodProgressBar.y), this.infoNode.addChild(o);
        }
        loadBulletAni() {
            let e = new Laya.Skeleton();
            e.load('resources/spine/loadbullet/skeleton.sk', Laya.Handler.create(this, () => {
                e.pos(Laya.stage.width / 2, Laya.stage.height / 2),
                    this.manager.root2d.addChild(e),
                    e.play(0, !1),
                    e.player.on(Laya.Event.STOPPED, null, () => {
                        console.log('STOPPED'), (this.loadBulletSpine.visible = !1);
                    }),
                    (e.visible = !1),
                    console.log('load bullet');
                let t = new Laya.Label();
                (t.anchorX = t.anchorY = 0.5), t.size(100, 25), t.pos(0, 55), (t.align = 'center'), (t.font = GameModel.WHITE_GOLD), e.addChild(t), (this.bulletTimeLabel = t);
            })),
                (this.loadBulletSpine = e);
        }
        loadAllEffects() {
            let e = this.bulletType, t = 'Tanke_' + ex.formatNumber(e, 2), i = [Sprite3DType.Ef_QiangKou], a = [];
            i.forEach(e => {
                let i = 'subgame/Tank_Effect/' + t + '/LayaScene_' + e + '/Conventional/' + e + '.lh';
                a.push({
                    url: i,
                    alias: e
                });
            }),
                this.isFrozen &&
                    a.push({
                        url: 'subgame/sprite3d/LayaScene_Ef_BingDong/Conventional/Ef_BingDong.lh',
                        alias: Sprite3DType.Ef_Frozen
                    }),
                this.isElectromagnetic &&
                    a.push({
                        url: 'subgame/sprite3d/LayaScene_Ef_LightingHit/Conventional/Ef_LightingHit.lh',
                        alias: Sprite3DType.Ef_Electromagnetic
                    });
            var s = this;
            let o = function (e) {
                if (e < a.length) {
                    if (s.attackEffectMap.get(a[e].alias))
                        return void o(++e);
                    Laya.Sprite3D.load(a[e].url, Laya.Handler.create(s, t => {
                        if (t) {
                            let i = t.clone();
                            i.active = !1;
                            let n = null;
                            a[e].alias == Sprite3DType.Ef_QiangKou ? ((i.transform.localPosition = ex.v3temp(0)), (n = s.root)) : ((i.transform.position = ex.v3temp(0, 0, 0)), (n = s.manager.root)),
                                n.addChild(i),
                                s.attackEffectMap.set(a[e].alias, i),
                                Utils.changeParticleRenderMode(i),
                                o(++e),
                                Laya.timer.callLater(t, t.destroy);
                        }
                        else
                            console.error('load effect error');
                    }));
                }
            };
            o(0);
        }
        hideInfoNode() {
            this.infoNode && (this.infoNode.visible = this.infoNode.active = !1);
        }
        refreshBloodProgress() {
            this.bloodProgressBar && Laya.timer.callLater(this, this.refreshBloodProgressCallLater);
        }
        refreshBloodProgressCallLater() {
            this.bloodProgressBar && (this.bloodProgressBar.value = this.mHealthPoint / this.fullHealthPoint);
        }
        recoveryHealthPoint(e) {
            let t = this.mHealthPoint + e;
            t > this.fullHealthPoint && (t = this.fullHealthPoint), (this.mHealthPoint = t), this.refreshBloodProgress();
        }
        refreshInfoNodePosition() {
            if (this.infoNode)
                if (this.infoNode.visible) {
                    let e = this.convertToVec2(this.position);
                    (e.y = e.y - 70), this.infoNode.pos(e.x, e.y);
                    let t = this.infoNode.x, i = this.infoNode.y;
                    t >= 0 && t <= Laya.stage.width && i >= 0 && i <= Laya.stage.height ? (this.infoNode.visible = this.infoNode.active = !0) : (this.infoNode.visible = this.infoNode.active = !1);
                }
                else
                    this.manager.isGameRunning() && ((this.infoNode.visible = !0), this.refreshInfoNodePosition());
        }
        refreshAttackLockPosition() {
            if (this.attackLock) {
                let e = this.attackLockTarget;
                if (e && !e.isDie()) {
                    this.attackLock.active = !0;
                    let t = this.attackLock.transform.position, i = e.position;
                    (t.x = i.x), (t.z = i.z), (this.attackLock.transform.position = t);
                }
                else
                    this.attackLock.active = !1;
            }
        }
        showLoadBulletAni(e) {
            (this.loadBulletSpine.visible = !0), this.loadBulletSpine.playbackRate(((40 / 30) * 1e3) / e), this.loadBulletSpine.play(0, !1);
        }
        refreshBulletCdTime() {
            this.bulletTimeLabel.text = (this.bulletLoadTime / 1e3).toFixed(1) + 's';
        }
        showFireEffect(e, t) {
            let i = this.attackEffectMap.get(e);
            i && (i.active || ((i.active = !0), Utils.playParticle(i, null)), t && (i.transform.position = t));
        }
        hideFireEffect(e) {
            let t = this.attackEffectMap.get(e);
            t && t.active && ((t.active = !1), Utils.stopParticle(t));
        }
        setAttackLockTarget(e) {
            this.attackLockTarget = e;
        }
        getAttackLockTarget() {
            return this.attackLockTarget;
        }
        getHealthPoint() {
            return this.mHealthPoint;
        }
        getQiangKouPosition() {
            return this.qiangKou.transform.position;
        }
        randomHurt() {
            let e = this.attackPoint;
            return ex.rand(1, 100) <= this.m_info.critical
                ? {
                    hurt: 2 * e,
                    double: !0
                }
                : {
                    hurt: e,
                    double: !1
                };
        }
        subBullet() {
            return this.bulletCount > 0 && (this.bulletCount--, this.isRobot || this.manager.refreshLeftBullet(this.bulletCount), !0);
        }
        hasBullet() {
            return this.bulletType > 0;
        }
        fullBullet() {
            (this.bulletCount = this.m_info.bullet), this.isRobot || this.manager.refreshLeftBullet(this.bulletCount);
        }
        checkFrozenAndGetTime() {
            return this.info.debuff && ex.rand(1, 100) <= this.info.debuff.percent ? this.info.debuff.continued : 0;
        }
        showFrozenEffect(e, t, i) {
            this.showFireEffect(e, t), e == Sprite3DType.Ef_Frozen ? (this.debuffValidTime.frozen = i) : e == Sprite3DType.Ef_Electromagnetic && (this.debuffValidTime.electromagnetic = i);
        }
        recoveryBlood(e, t) {
            let i = (e / 100 / 1e3) * t, a = this.fullHealthPoint * i;
            this.recoveryHealthPoint(a);
        }
        onUpdate() {
            if (ex.isValidTimerDelta() && this.manager.isGameRunning()) {
                let e = Laya.timer.delta / 1e3;
                this.isRobot || (this.isMoving() && !this.isBeFrozen && this.selfTranslate(this.moveSpeed * e), this.findAttackTarget()),
                    this.isDie() || (this.isBeFrozen || this.RotateTurret(e), this.countDown(), this.refreshMiniMapPostion());
            }
        }
        countDown() {
            let e = Laya.timer.delta;
            if ((this.shieldValidTime > 0 && ((this.shieldValidTime -= e), this.shieldValidTime <= 0 && this.shieldSprite3D && (this.shieldSprite3D.active = !1)),
                this.attackcdtime > 0 && (this.attackcdtime -= e),
                this.frozenValidTime > 0 && (this.frozenValidTime -= e),
                this.debuffValidTime.frozen > 0 && ((this.debuffValidTime.frozen -= e), this.debuffValidTime.frozen <= 0 && this.hideFireEffect(Sprite3DType.Ef_Frozen)),
                this.debuffValidTime.electromagnetic > 0 && ((this.debuffValidTime.electromagnetic -= e), this.debuffValidTime.electromagnetic <= 0 && this.hideFireEffect(Sprite3DType.Ef_Electromagnetic)),
                this.bloodSubTips.time > 0 && ((this.bloodSubTips.time -= e), this.bloodSubTips.time <= 0 && this.bloodSubTips.value > 0))) {
                let e = this.convertToVec2(this.position);
                (e.y -= 100), this.manager.showBloodTipsLabel(Math.ceil(this.bloodSubTips.value), !1, e), (this.bloodSubTips.value = 0);
            }
            this.bulletLoadTime > 0
                ? ((this.bulletLoadTime -= e), this.bulletLoadTime <= 0 ? this.fullBullet() : this.isRobot || this.refreshBulletCdTime())
                : this.bulletCount <= 0 && ((this.bulletLoadTime = this.m_info.loading), this.isRobot || this.showLoadBulletAni(this.bulletLoadTime)),
                this.isRobot ? this.refreshInfoNodePosition() : (this.manager.isGameRunning() && !this.infoNode.visible && this.refreshInfoNodePosition(), this.refreshAttackLockPosition()),
                this.bHitAniShown && (this.root.transform.localScale = this.hitScale);
        }
        selfTranslate(e) {
            this.root.transform.getForward(this.forward), ex.pMultv3(this.forward, -1, this.forward), ex.pMultv3(this.forward, e, this.velocity);
            let t = this.position, i = GameModel.HalfTankWidth;
            if (0 != this.velocity.x) {
                let e = this.velocity.x > 0 ? 1 : -1;
                this.manager.raycastWall(this.position, ex.v2temp(this.velocity.x + e * i, 0)) && (this.velocity.x = 0);
            }
            if (0 != this.velocity.z) {
                let e = this.velocity.z > 0 ? 1 : -1;
                this.manager.raycastWall(this.position, ex.v2temp(0, this.velocity.z + e * i)) && (this.velocity.z = 0);
            }
            (t.x += this.velocity.x), (t.z += this.velocity.z), (this.position = t);
        }
        findAttackTarget() {
            if (this.hasAttackTarget()) {
                let e = this.attackDistance;
                ex.pDistancev3(this.attackLockTarget.position, this.position) > e && this.setAttackLockTarget(null);
            }
            else {
                let e = this.manager.findNearbyAttackTarget(this);
                this.setAttackLockTarget(e);
            }
        }
        RotateTurret(e) {
            if (this.hasAttackTarget()) {
                let e = ex.pSubv3(this.attackLockTarget.position, this.position, ex.v3temp(0)), t = ex.v3ToV2(e, ex.v2temp(0)), i = -(ex.pToAngle(t) + Math.PI / 2), a = this.turretNode.transform.rotationEuler;
                (a.y = ex.convertToRotate(i) + 180), (this.turretNode.transform.rotationEuler = a), (this.bRestoreTurretRotationAnimation = !0);
            }
            else {
                let t = this.turretNode.transform.rotationEuler, i = this.root.transform.rotationEuler.y;
                this.bRestoreTurretRotationAnimation ? ((t.y = Laya.MathUtil.lerp(t.y, i, 8 * e)), Math.abs(i - t.y) <= 5 && (this.bRestoreTurretRotationAnimation = !1)) : (t.y = i),
                    (this.turretNode.transform.rotationEuler = t);
            }
        }
        refreshMiniMapPostion() {
            if (this.miniNode) {
                let e = this.manager.gameUI.miniMap, t = this.position, i = (t.x + GameModel.MapWidth / 2) / GameModel.MapWidth, a = (t.z + GameModel.MapWidth / 2) / GameModel.MapWidth;
                this.miniNode.pos(i * e.width, a * e.height);
            }
        }
        startMove() {
            this.state = TankState.Move;
        }
        startAttack() {
            this.state = TankState.Attack;
        }
        hasAttackTarget() {
            return this.attackLockTarget && !this.attackLockTarget.isDie();
        }
        isReady() {
            return this.state == TankState.Ready;
        }
        isMoving() {
            return this.state == TankState.Move;
        }
        isAttack() {
            return this.state == TankState.Attack;
        }
        isDie() {
            return this.state == TankState.Death;
        }
        onDeath() {
            (this.state = TankState.Death),
                (this.root.active = !1),
                this.mBullet && this.stopFire(!0),
                this.isRobot ? (this.manager.hasRobot() || this.manager.checkGameOver(), this.miniNode && (this.miniNode.destroy(), (this.miniNode = null)), this.clear()) : this.manager.checkGameOver();
        }
        onBomb(e) {
            e &&
                Utils.checkInTheScreen(this.convertToVec2(this.position)) &&
                (e.isLaser ? this.manager.showDeathEffect(BulletType.Normal, this.position) : this.manager.showDeathEffect(e.bulletType, this.position), SoundManager.playSound(Model.AudioUrl.Bomb), platform.vibrateShort());
        }
        kill(e) {
            this.manager.showGameTips(this.nickname, this.avatar, e.avatar);
        }
        beFrozen(e) {
            this.frozenValidTime = e;
        }
        fire() {
            if (this.bulletCount > 0 && this.attackcdtime <= 0 && !this.isBeFrozen) {
                this.subBullet(), (this.attackcdtime = this.attackSpeed);
                let e = !0;
                switch (this.m_info.type) {
                    case TankType.Double:
                        this.fireDouble();
                        break;
                    case TankType.Consecutive:
                        this.fireConsecutive();
                        break;
                    case TankType.Multiple:
                        this.fireMultiple();
                        break;
                    case TankType.Flame:
                        this.fireFlame(), (e = !1);
                        break;
                    default:
                        this.fireSingle(null);
                }
                if (Utils.checkInTheScreen(this.convertToVec2(this.position))) {
                    let t = `resources/music/shot${this.bulletType}.wav`;
                    if ((SoundManager.playSound(t), e)) {
                        let e = this.qiangKou.transform.position;
                        this.showFireEffect(Sprite3DType.Ef_QiangKou, e);
                    }
                }
                return !0;
            }
            return !1;
        }
        fireSingle(e = null) {
            e = null != e ? e : this.turretNode.transform.rotationEuler.y;
            let t = this.qiangKou.transform.position, i = this.manager.createBullet(t, this.bulletType);
            return i.shot(this, this.attackLockTarget, e), i;
        }
        fireDouble() {
            this.qiangKou.transform.translate(ex.v3temp(0.2, 0, 0), !0),
                this.fireSingle(),
                this.qiangKou.transform.translate(ex.v3temp(-0.4, 0, 0), !0),
                this.fireSingle(),
                this.qiangKou.transform.translate(ex.v3temp(0.2, 0, 0), !0);
        }
        fireConsecutive() {
            this.fireConsecutiveCall(0);
        }
        fireConsecutiveCall(e) {
            this.fireSingle(), e < 2 && Laya.timer.once(100, this, this.fireConsecutiveCall, [++e]);
        }
        fireMultiple() {
            let e = this.turretNode.transform.rotationEuler.y;
            this.fireSingle(e), this.fireSingle(e - 15), this.fireSingle(e + 15);
        }
        fireFlame() {
            this.mBullet && !this.mBullet.isDie() ? this.mBullet.refire() : (this.mBullet = this.fireSingle());
        }
        stopFire(e = !1) {
            this.mBullet && this.mBullet.stopFire(e) && (this.mBullet = null), this.isDie() || this.hideFireEffect(Sprite3DType.Ef_QiangKou);
        }
        onBeAttacked(e) { }
        subtractBlood(e, t, i) {
            if (this.manager.isGameEnd())
                return !1;
            if (this.isInvincible)
                return !1;
            if (!this.isRobot) {
                e = e * 1.2;
            }
            let a = this.shieldRatio;
            if ((a > 0 && (e *= 1 - a / 100), this.mHealthPoint - e <= 0 && this.invincibleTimes > 0))
                return (this.invincibleTimes = 0), this.currUAV && this.currUAV.skillInfo && this.currUAV.useSkill(this.currUAV.skillInfo), !1;
            if (((this.mHealthPoint -= e), this.mHealthPoint < 0 && (this.mHealthPoint = 0), this.refreshBloodProgress(), i))
                if (i.isFlame)
                    this.bloodSubTips.time <= 0 && (this.bloodSubTips.time = 1e3), (this.bloodSubTips.value += e);
                else {
                    let i = this.convertToVec2(this.position);
                    (i.y -= 100), this.manager.showBloodTipsLabel(e, t, i);
                }
            return this.mHealthPoint <= 0 ? (this.hideInfoNode(), this.isDie() || (this.onBomb(i), this.onDeath()), !0) : (this.showHitAni(), this.onBeAttacked(i), !1);
        }
        showHitAni() {
            if (!this.bHitAniShown) {
                this.bHitAniShown = !0;
                let e = 1.1;
                Laya.Tween.to(this.hitScale, {
                    x: e,
                    z: e
                }, 50, null, Laya.Handler.create(this, () => {
                    Laya.Tween.to(this.hitScale, {
                        x: 1,
                        z: 1
                    }, 50, null, Laya.Handler.create(this, () => {
                        this.bHitAniShown = !1;
                    }));
                }));
            }
        }
        changeDirection(e) {
            if (!this.isDie() && !this.isBeFrozen) {
                let t = -(ex.pToAngle(e) + Math.PI / 2);
                (this.root.transform.localRotationEulerY = ex.convertToRotate(t) + 180), this.startMove(), this.selectionMask && (this.selectionMask.active = !0);
            }
        }
        stopMove() {
            (this.state = TankState.Ready), this.selectionMask && (this.selectionMask.active = !1);
        }
        useSkill(e) {
            return !this.manager.isGameEnd() && !!this.currUAV && this.currUAV.useSkill(e);
        }
        revive() {
            (this.root.active = !0),
                (this.mHealthPoint = this.fullHealthPoint),
                this.refreshBloodProgress(),
                (this.state = TankState.Ready),
                (this.shieldValidTime = GameConfig.GameConf.shield),
                this.shieldSprite3D && (this.shieldSprite3D.active = !0);
            Laya.Sprite3D.load('subgame/sprite3d/LayaScene_Ef_Guang/Conventional/Ef_Guang.lh', Laya.Handler.create(this, e => {
                e &&
                    (this.root.addChild(e),
                        Utils.playParticle(e, null),
                        Laya.timer.once(2e3, this, () => {
                            e.destroy();
                        }));
            }));
        }
        clear() {
            this.attackEffectMap.forEach(e => {
                e.destroy();
            }),
                this.miniNode && this.miniNode.destroy(),
                this.infoNode && this.infoNode.destroy(),
                this.attackLock && this.attackLock.destroy(),
                this.shieldSprite3D && this.shieldSprite3D.destroy(),
                this.loadBulletSpine && (this.loadBulletSpine.stop(), this.loadBulletSpine.templet.destroy()),
                this.currUAV && this.currUAV.clear(),
                this.root.destroy();
        }
    }

    class K extends _ {
        constructor() {
            super(...arguments);
            this.robotManager = null;
            this.ailogicInfo = null;
            this.aiState = 1;
            this.isAttackPlayer = !1;
            this.moveValidTime = 0;
            this.attackFollowValidTime = 0;
            this.escapeValidTime = 0;
            this.moveTargetPoint = ex.v2(0);
            this.bValidEndPoint = !1;
            this.isAttackOverMove = !1;
            this.isBulletOverMove = !1;
            this.matchedEnemyList = [];
            this.hpIncreaseValue = 0;
            this.atkIncreaseValue = 0;
            this.tempVector2 = ex.v2(0);
            this.tempVector3 = ex.v3(0);
            this.findPathValidTime = 0;
            this.pIndex = 0;
            this.points = null;
            this.targetRotation = 0;
            this.lastBeAttackedTime = 0;
        }
        get isRobot() {
            return !0;
        }
        get rotationSpeed() {
            return 240;
        }
        get attackPoint() {
            return Math.max(1, this.m_info.atk + this.atkIncreaseValue);
        }
        get attackSpeed() {
            return this.m_info.atkspeed * (this.ailogicInfo.aiatkspeed / 100);
        }
        get fullHealthPoint() {
            let e = this.m_info.hp + this.hpIncreaseValue;
            return Math.max(1, e);
        }
        onAwake() {
            super.onAwake();
        }
        initRobotData(e) {
            GameConfig.winTimes > 0
                ? ((this.hpIncreaseValue += GameConfig.winTimes * e.hpadd), (this.atkIncreaseValue += GameConfig.winTimes * e.atkadd))
                : GameConfig.winTimes < 0 && ((this.hpIncreaseValue += GameConfig.winTimes * e.hpsubtract), (this.atkIncreaseValue += GameConfig.winTimes * e.atksubtract)),
                (this.hpIncreaseValue += e.rankhp),
                (this.mHealthPoint = this.fullHealthPoint);
        }
        onUpdate() {
            if ((super.onUpdate(), ex.isValidTimerDelta() && this.manager.isGameRunning())) {
                let e = Laya.timer.delta / 1e3;
                if (this.isBeFrozen)
                    return;
                if (this.isMoving()) {
                    if ((this.findPathValidTime > 0 && (this.findPathValidTime -= e), this.findPathValidTime <= 0)) {
                        this.pIndex = 0;
                        let e = this.blockPos, t = 0, i = 0, a = !1;
                        if (this.hasAttackTarget() && !this.isAttackOverMove) {
                            let e = this.attackLockTarget.blockPos;
                            (t = e.x), (i = e.y);
                        }
                        else
                            this.bValidEndPoint || this.randomMovePosition(), (this.bValidEndPoint = !1), (t = this.moveTargetPoint.x), (i = this.moveTargetPoint.y), (a = !0);
                        (this.points = MapManager.findPath(this.position, e.x, e.y, t, i)),
                            this.points && this.points.length > 1 ? (this.findPathValidTime = 3) : a && (console.log('invalid end point.', e.x, e.y, t, i), this.randomMovePosition());
                    }
                    1 == this.checkPointMove(e) && this.arrviedEnd(), this.attack(!1);
                }
                else if (this.isAttack()) {
                    let t = !1;
                    if (this.isAttackOverMove) {
                        let i = this.checkPointMove(e);
                        1 == i ? ((this.isAttackOverMove = !1), this.arrviedEnd()) : 0 == i ? (t = !0) : (this.isAttackOverMove = !1);
                    }
                    else
                        2 == this.ailogicInfo.movejudge &&
                            (this.findPathValidTime > 0 && (this.findPathValidTime -= e),
                                this.findPathValidTime <= 0 && ((this.findPathValidTime = 1), this.randomAttackMove() && (t = !0)),
                                1 == this.checkPointMove(e) && this.arrviedEnd());
                    this.attack(t);
                }
            }
        }
        checkPointMove(e) {
            return this.points && this.points.length > 0 ? (this.pIndex >= this.points.length ? 1 : (this.pointMove(e), 0)) : -1;
        }
        pointMove(e) {
            let t = this.moveSpeed * e, i = this.points[this.pIndex];
            ex.v2ToV3(i, this.tempVector3);
            let a = ex.pSubv3(this.tempVector3, this.position, ex.v3temp(0)), s = Laya.Vector3.scalarLength(a);
            if (t <= s)
                Laya.Vector3.normalize(a, a), ex.pMultv3(a, t, a), this.root.transform.translate(a, !1), this.RotateTo(e);
            else {
                if ((this.pIndex++, this.pIndex >= this.points.length))
                    return void this.stopMove();
                let e = s - t, i = this.points[this.pIndex - 1], a = this.points[this.pIndex], o = ex.pSub(a, i, ex.v2temp(0));
                this.changeTargetRotation(o), Laya.Vector2.normalize(o, o), ex.pMult(o, e, o);
                let n = this.position;
                (n.x = i.x + o.x), (n.z = i.y + o.y), (this.position = n);
            }
        }
        RotateTo(e) {
            let t = this.rotationSpeed * e, i = this.root.transform.localRotationEulerY - 180, a = this.targetRotation, s = Utils.rotateToTarget(i, a, t);
            this.root.transform.localRotationEulerY = s + 180;
        }
        changeTargetRotation(e) {
            let t = -(ex.pToAngle(e) + Math.PI / 2), i = ex.convertToRotate(t);
            this.targetRotation = ex.formatRotation(i);
        }
        moveTo() {
            this.isMoving() || this.startMove();
        }
        arrviedEnd() {
            (this.findPathValidTime = 0), (this.points = null);
        }
        attack(e) {
            if (this.hasAttackTarget()) {
                let t = this.attackLockTarget, i = ex.pDistancev3(this.position, t.position), a = this.attackDistance;
                (a = this.isAttack() ? a + 1.5 : a), (e || i <= a) && !this.checkAttackHasWall(t) ? (this.isAttack() || (this.arrviedEnd(), this.startAttack()), this.checkFire()) : this.moveTo();
            }
            else
                this.stopAttack();
        }
        checkFire() {
            if (this.fire()) {
                this.restoreAttackFollowTime(),
                    1 == this.ailogicInfo.movejudge && this.randomAttackOverMove() && (this.isAttackOverMove = !0),
                    (this.isBulletOverMove = !1),
                    this.randomUseSkill(SkillType.QuYuHongZha);
            }
            else if (!this.hasBullet()) {
                1 != this.ailogicInfo.bulletover || this.isBulletOverMove || ((this.isBulletOverMove = !0), this.randomAttackOverMove() && (this.isAttackOverMove = !0));
            }
        }
        checkAttackHasWall(e) {
            return !this.isPiercingAttack && null != this.manager.raycastWallFromTo(this.position, e.position);
        }
        randomAttackMove() {
            if (!this.hasAttackTarget())
                return !1;
            let e = this.attackLockTarget, t = this.blockPos, i = this.position, a = e.position, s = this.attackDistance, o = this.attackDistance / 2, n = 0;
            for (; ++n <= 20;) {
                let e = 0, n = 0;
                for (;;) {
                    let t = ex.randFloat(0, 2 * s) - s, r = ex.randFloat(0, 2 * s) - s;
                    if (t * t + r * r >= o * o) {
                        let s = ex.v3ToV2(a, this.tempVector2), o = ex.v3ToV2(i, ex.v2temp(0)), l = ex.convertToRotate(ex.pToAngle(ex.pSub(o, s, o))), h = ex.v2temp(a.x + t, a.z + r), d = ex.convertToRotate(ex.pToAngle(ex.pSub(h, s, h)));
                        if (d >= l - 70 && d <= l + 70) {
                            (e = a.x + t), (n = a.y + r);
                            break;
                        }
                    }
                }
                let r = MapManager.convertBlockPos(e), l = MapManager.convertBlockPos(n);
                if (!MapManager.isBlock(r, l))
                    return (this.pIndex = 0), (this.points = MapManager.findPath(this.position, t.x, t.y, r, l)), !0;
            }
            return !1;
        }
        randomAttackOverMove() {
            let e = this.blockPos, t = 0;
            for (; ++t <= 20;) {
                let t = 8, i = ex.rand(0, t) - t / 2, a = ex.rand(0, t) - t / 2, s = e.x + i, o = e.y + a;
                if (!MapManager.isBlock(s, o))
                    return (this.pIndex = 0), (this.points = MapManager.findPath(this.position, e.x, e.y, s, o)), !0;
            }
            return !1;
        }
        stopAttack() {
            this.isFighting() && (this.aiState = 1), this.checkChangeAttackPlayer(), this.setAttackLockTarget(null), this.stopFire();
        }
        kill(e) {
            super.kill(e), this.stopAttack();
        }
        onDeath() {
            super.onDeath(), this.isAttackPlayer && this.robotManager.randomAttackPlayer(null);
        }
        setIsAttackPlayer(e) {
            this.isAttackPlayer = e;
        }
        isFighting() {
            return 2 == this.aiState;
        }
        onLateUpdate() {
            if (ex.isValidTimerDelta() && (super.onLateUpdate(), this.manager.isGameRunning() && !this.isDie())) {
                let e = Laya.timer.delta;
                if (1 == this.aiState) {
                    if ((this.matchedEnemyList.splice(0, this.matchedEnemyList.length), 2 == this.randomBehavior())) {
                        let e = this.robotManager.findNearbyAttackTarget(this, this.ailogicInfo.atkrange, this.ailogicInfo.firstatk, this.ailogicInfo.atkmax, this.isAttackPlayer);
                        this.checkCanAttack(e) ? this.moveToAttackTarget(e) : this.randomMovePosition();
                    }
                    else
                        this.randomMovePosition();
                }
                else if (2 == this.aiState)
                    (this.attackFollowValidTime -= e), !this.isAttackPlayer && this.attackFollowValidTime <= 0 ? ((this.aiState = 1), this.stopAttack()) : this.checkIsStopAttack() && this.randomEscape();
                else if (3 == this.aiState)
                    if (((this.moveValidTime -= e), this.moveValidTime <= 0))
                        this.aiState = 1;
                    else {
                        let e = this.robotManager.findNearbyAttackTarget(this, this.ailogicInfo.atkrange, this.ailogicInfo.firstatk, this.ailogicInfo.atkmax, this.isAttackPlayer);
                        this.checkCanAttack(e) && this.moveToAttackTarget(e);
                    }
                else
                    4 == this.aiState && ((this.escapeValidTime -= e), this.escapeValidTime <= 0 && (this.aiState = 1));
            }
        }
        randomWeightType(e) {
            let t = 0;
            for (let i = 0; i < e.length; i++)
                t += e[i].weight;
            let i = ex.rand(1, t), a = 0;
            for (let t = 0; t < e.length; t++)
                if (i <= (a += e[t].weight))
                    return e[t].type;
            return 0;
        }
        randomBehavior() {
            return this.isAttackPlayer ? 2 : ex.rand(1, 2);
        }
        randomMovePosition() {
            let e = MapManager.width, t = MapManager.height, i = ex.rand(0, e - 1), a = ex.rand(0, t - 1);
            if (MapManager.isBlock(i, a))
                return this.randomMovePosition();
            let s = MapManager.convertTo3DPos(i, a), o = ex.v3temp(s.x, 0, s.y);
            if (ex.pDistancev3(this.position, o) <= 5)
                return this.randomMovePosition();
            (this.moveTargetPoint.x = i), (this.moveTargetPoint.y = a), (this.bValidEndPoint = !0), (this.moveValidTime = ex.rand(1500, 3e3)), this.startMove();
        }
        checkCanAttack(e) {
            return !(!e || this.checkIsMatchedTarget(e) || !this.checkPowerCanAttack(e)) && (this.matchedEnemyList.push(e), !0);
        }
        moveToAttackTarget(e) {
            (this.aiState = 2), this.setAttackLockTarget(e), (this.attackFollowValidTime = this.randomCDTime(2e3, 3e3)), this.startMove();
        }
        checkPowerCanAttack(e) {
            if (!e.isRobot) {
                if (this.isAttackPlayer)
                    return !0;
                if (e.leftHpRation < this.ailogicInfo.hpmax / 100)
                    return !1;
            }
            if (ex.rand(1, 100) <= this.ailogicInfo.moveatk) {
                if (this.mHealthPoint / e.getHealthPoint() >= this.ailogicInfo.hpproportion / 100)
                    return !0;
            }
            return !1;
        }
        checkIsStopAttack() {
            if (this.hasAttackTarget()) {
                let e = this.attackLockTarget;
                if (this.robotManager.getRobotCount() <= 1)
                    return !1;
                if (this.mHealthPoint / e.getHealthPoint() < this.ailogicInfo.hpproportion / 100)
                    return !0;
            }
            return !1;
        }
        restoreAttackFollowTime() {
            this.attackFollowValidTime = this.randomCDTime(2e3, 3e3);
        }
        checkCanCounterattack(e) {
            if (this.checkPowerCanAttack(e)) {
                if (ex.rand(1, 100) <= this.ailogicInfo.fightback)
                    return !0;
            }
            return !1;
        }
        checkSwitchTarget(e) {
            if (this.checkPowerCanAttack(e)) {
                if (ex.rand(1, 100) <= this.ailogicInfo.fightback)
                    return !0;
            }
            return !1;
        }
        checkIsMatchedTarget(e) {
            for (let t = 0; t < this.matchedEnemyList.length; t++)
                if (this.matchedEnemyList[t] == e)
                    return !0;
            return !1;
        }
        randomEscape() {
            this.stopAttack(), this.randomMovePosition(), (this.aiState = 4), (this.escapeValidTime = this.randomCDTime(2e3, 3e3));
        }
        checkChangeAttackPlayer() {
            this.hasAttackTarget() && this.isAttackPlayer && this.robotManager.randomAttackPlayer(this) && this.setIsAttackPlayer(!1);
        }
        randomCDTime(e, t) {
            return ex.rand(e, t);
        }
        randomUseSkill(e) {
            var t;
            let i = null === (t = this.currUAV) || void 0 === t ? void 0 : t.skillInfo;
            if (i && i.type == e) {
                let e = Date.now();
                e - i.lastusetime > i.cd && ((i.lastusetime = e), this.useSkill(i));
            }
        }
        onBeAttacked(e) {
            let t = Date.now();
            e &&
                !this.isDie() &&
                (this.randomUseSkill(SkillType.LiangZiLiChang),
                    this.mHealthPoint / this.fullHealthPoint <= 0.2 && this.randomUseSkill(SkillType.ZhuangJiaXiuFu),
                    e != this.attackLockTarget &&
                        t - this.lastBeAttackedTime >= 2e3 &&
                        ((this.lastBeAttackedTime = t),
                            this.isFighting()
                                ? this.checkSwitchTarget(e) && (this.checkChangeAttackPlayer(), this.moveToAttackTarget(e))
                                : this.checkCanCounterattack(e)
                                    ? (this.checkChangeAttackPlayer(), this.moveToAttackTarget(e))
                                    : this.randomEscape()));
        }
    }

    class j {
        constructor() {
            (this.manager = null),
                (this.root = null),
                (this.tankBaseSprite3DList = null),
                (this.tankTurretSprite3DList = null),
                (this.uavSprite3DList = null),
                (this.allRobots = null),
                (this.userList = null),
                (this.aiList = null),
                (this.nearbyAttackTargetList = []);
        }
        static get instance() {
            return null == j._instance && (j._instance = new j()), j._instance;
        }
        initRobot(e) {
            (this.manager = e), (this.root = e.root), (this.allRobots = []);
            let t = GameConfig.getCurrentDuanInfo(), i = this.aiList.length;
            for (let e = 0; e < i; e++) {
                let i = this.aiList[e], a = this.randomTankPosition(0, !0), s = i.tankId, o = GameConfig.getTankInfo(s), n = this.createRobot(a, s, o.type, i.uavId);
                this.userList[e] && ((n.nickname = this.userList[e].nickname), (n.avatar = this.userList[e].icon));
                let r = i.ailogicId;
                (n.ailogicInfo = GameConfig.getAilogicInfo(r)), n.initRobotData(t), this.allRobots.push(n);
            }
            this.randomAttackPlayer(null);
        }
        setSprite3Ds(e, t, i) {
            (this.tankBaseSprite3DList = e), (this.tankTurretSprite3DList = t), (this.uavSprite3DList = i);
        }
        setUserList(e) {
            this.userList = e;
        }
        setAIList(e) {
            this.aiList = e;
        }
        randomTankPosition(e = 0, t = !1) {
            let i = MapManager.width, a = MapManager.height, s = ex.rand(0, i - 1), o = ex.rand(0, a - 1), n = o * i + s;
            if (MapManager.fastAstar.map[n].block)
                return this.randomTankPosition(e, t);
            let r = MapManager.convertTo3DPos(s, o), l = ex.v3temp(r.x, 0, r.y);
            if (e >= 20)
                return l;
            if (t) {
                let i = this.manager.currTank;
                if (ex.pDistancev3(i.position, l) <= GameModel.TankRefreshDistance)
                    return this.randomTankPosition(++e, t);
            }
            if (this.allRobots)
                for (let i = this.allRobots.length; i--;) {
                    let a = this.allRobots[i];
                    if (ex.pDistancev3(a.position, l) <= GameModel.TankRefreshDistance)
                        return this.randomTankPosition(++e, t);
                }
            return l;
        }
        createRobot(e, t, i, a) {
            let s = GameConfig.getUAVInfo(a), o = this.createTank(e, t, i, s, K);
            return (o.robotManager = this), this.root.addChild(o.root), o;
        }
        createTank(e, t, i, a, s) {
            let o = this.getTankBase(i), n = Laya.Sprite3D.instantiate(o.getChildAt(0)), r = n.addComponent(s);
            (r.tankId = t), (r.root = n), (r.position = e);
            let l = this.getTankTurret(t), h = Laya.Sprite3D.instantiate(l.getChildAt(0));
            if ((r.addTurret(h), a)) {
                let e = this.getUAV(a.type), t = Laya.Sprite3D.instantiate(e.getChildAt(0));
                r.setUAV(t, a);
            }
            return r.initialize(), r;
        }
        getTankBase(e) {
            for (let t = 0; t < this.tankBaseSprite3DList.length; t++)
                if (this.tankBaseSprite3DList[t].type == e)
                    return this.tankBaseSprite3DList[t].sprite3D;
            return console.warn('未获取到坦克底座节点:', e), this.tankBaseSprite3DList[0].sprite3D;
        }
        getTankTurret(e) {
            for (let t = 0; t < this.tankTurretSprite3DList.length; t++)
                if (this.tankTurretSprite3DList[t].type == e)
                    return this.tankTurretSprite3DList[t].sprite3D;
            return console.warn('未获取到坦克炮塔节点:', e), this.tankTurretSprite3DList[0].sprite3D;
        }
        getUAV(e) {
            for (let t = 0; t < this.uavSprite3DList.length; t++)
                if (this.uavSprite3DList[t].type == e)
                    return this.uavSprite3DList[t].sprite3D;
            return console.warn('未获取到无人机节点:', e), this.uavSprite3DList[0].sprite3D;
        }
        hasRobot() {
            for (let e = 0; e < this.allRobots.length; e++)
                if (!this.allRobots[e].isDie())
                    return !0;
            return !1;
        }
        getRobotCount() {
            let e = 0;
            for (let t = 0; t < this.allRobots.length; t++)
                this.allRobots[t].isDie() || e++;
            return e;
        }
        randomAttackPlayer(e) {
            let t = [];
            for (let i = 0; i < this.allRobots.length; i++) {
                let a = this.allRobots[i];
                a == e || a.isDie() || t.push(i);
            }
            if (t.length > 0) {
                let e = t[ex.rand(0, t.length - 1)];
                return this.allRobots[e].setIsAttackPlayer(!0), !0;
            }
            return !1;
        }
        findNearbyAttackTarget(e, t, i, a, s = !1) {
            let o = this.manager.currTank;
            if (s)
                return o;
            t = null != t ? t : e.attackDistance;
            let n = 0, r = this.nearbyAttackTargetList;
            r.splice(0, r.length);
            let l = !1, h = !1;
            for (let i = this.allRobots.length; i--;) {
                let a = this.allRobots[i];
                if (!a.isDie() && e != a) {
                    let i = a.getAttackLockTarget();
                    i && !i.isRobot && n++, ex.pDistancev3(a.position, e.position) <= t && (r.push(a), (l = !0), a.isLowerHP && (h = !0));
                }
            }
            let d = !1;
            if ((e.isRobot && n <= a && ex.pDistancev3(o.position, e.position) <= t && (r.push(o), (d = !0), o.isLowerHP && (h = !0)), r.length > 0)) {
                if (1 == i && d)
                    return o;
                if (2 == i && l) {
                    let e = r.length;
                    return d && e--, r[ex.rand(0, e - 1)];
                }
                if (3 != i || !h) {
                    return r[ex.rand(0, r.length - 1)];
                }
                for (;;) {
                    let e = ex.rand(0, this.nearbyAttackTargetList.length - 1);
                    if (this.nearbyAttackTargetList[e].isLowerHP)
                        return this.nearbyAttackTargetList[e];
                }
            }
            return null;
        }
        findHitTarget(e, t, i) {
            for (let a = this.allRobots.length; a--;) {
                let s = this.allRobots[a];
                if (s != e && !s.isDie() && ex.getVec2Distance(t, s.position) <= i)
                    return s;
            }
            return null;
        }
        findHitTargetList(e, t, i) {
            let a = [];
            for (let s = this.allRobots.length; s--;) {
                let o = this.allRobots[s];
                o == e || o.isDie() || (ex.getVec2Distance(t, o.position) <= i && a.push(o));
            }
            return a;
        }
        getGameOverRank(e) {
            let t = 0;
            for (let i = 0; i < this.allRobots.length; i++) {
                let a = this.allRobots[i];
                a.isDie() ? t++ : a.getHealthPoint() < e.getHealthPoint() && t++;
            }
            return this.allRobots.length - t + 1;
        }
        clear() {
            this.tankBaseSprite3DList &&
                this.tankBaseSprite3DList.forEach(e => {
                    e.sprite3D.destroy();
                }),
                this.tankTurretSprite3DList &&
                    this.tankTurretSprite3DList.forEach(e => {
                        e.sprite3D.destroy();
                    }),
                this.uavSprite3DList &&
                    this.uavSprite3DList.forEach(e => {
                        e.sprite3D.destroy();
                    }),
                this.allRobots &&
                    (console.log('clear robots'),
                        this.allRobots.forEach(e => {
                            e.clear();
                        }),
                        (this.allRobots = null));
        }
    }
    j._instance = null;

    class N extends U {
        constructor() {
            super(...arguments);
            this.type = BulletType.Normal;
            this.shooter = null;
            this.attackEffectMap = new Map();
            this.stopValidTime = 0;
            this.hitEffectValidTime = 0;
            this.ifeTime = 0;
            this.state = BulletState.Ready;
        }
        get moveSpeed() {
            return this.shooter.info.bulletspeed;
        }
        get attackValidDistance() {
            return this.shooter.attackDistance;
        }
        get moveLifeTime() {
            return this.shooter.info.bulletdie;
        }
        get isRebound() {
            return this.type == BulletType.Rebound;
        }
        get isRocket() {
            return this.type == BulletType.Rocket;
        }
        get isFrozen() {
            return this.type == BulletType.Frozen;
        }
        get isElectromagnetic() {
            return this.type == BulletType.Electromagnetic;
        }
        get isTrack() {
            return this.type == BulletType.Track;
        }
        get isDivide() {
            return this.type == BulletType.Divide;
        }
        get isFollowTank() {
            return !1;
        }
        onAwake() {
            super.onAwake(), this.loadAllEffects();
        }
        initialize() {
            (this.lifeTime = 0), (this.stopValidTime = 0), (this.state = BulletState.Ready);
            let e = this.root.getChildAt(0);
            e && (e.active = !0);
        }
        loadAllEffects() {
            let e = this.type, t = 'Tanke_' + ex.formatNumber(e, 2), i = [Sprite3DType.Ef_Hit], a = [];
            i.forEach(e => {
                let i = 'subgame/Tank_Effect/' + t + '/LayaScene_' + e + '/Conventional/' + e + '.lh';
                a.push({
                    url: i,
                    alias: e
                });
            });
            var s = this;
            let o = function (e) {
                if (e < a.length) {
                    if (s.attackEffectMap.get(a[e].alias))
                        return void o(++e);
                    Laya.Sprite3D.load(a[e].url, Laya.Handler.create(s, t => {
                        if (t) {
                            let i = t.clone();
                            (i.active = !1), s.manager.root.addChild(i), s.attackEffectMap.set(a[e].alias, i), Utils.changeParticleRenderMode(i), o(++e), Laya.timer.callLater(t, t.destroy);
                        }
                        else
                            console.error('load effect error');
                    }));
                }
            };
            o(0);
        }
        showAttackEffect(e, t, i = null) {
            let a = this.attackEffectMap.get(e);
            a && (a.active || ((a.active = !0), Utils.playParticle(a, null)), t && (a.transform.position = t), (i = null != i ? i : 500) > 0 && (this.hitEffectValidTime = i));
        }
        hideAttackEffect(e) {
            let t = this.attackEffectMap.get(e);
            t && ((t.active = !1), Utils.stopParticle(t));
        }
        onUpdate() {
            if (!ex.isValidTimerDelta())
                return;
            let e = Laya.timer.delta;
            this.manager.isGamePause() || (this.isStop() && ((this.stopValidTime += e), this.stopValidTime >= 500 && this.manager.recoveryBullet(this)), this.countDown());
        }
        countDown() {
            let e = Laya.timer.delta;
            this.hitEffectValidTime > 0 && ((this.hitEffectValidTime -= e), this.hitEffectValidTime <= 0 && this.hideAttackEffect(Sprite3DType.Ef_Hit));
        }
        isReady() {
            return this.state == BulletState.Ready;
        }
        isMoving() {
            return this.state == BulletState.Move;
        }
        isFollow() {
            return this.state == BulletState.Follow;
        }
        isShown() {
            return this.state == BulletState.Shown;
        }
        isStop() {
            return this.state == BulletState.Stop;
        }
        isDie() {
            return this.isStop() || this.state == BulletState.Clear;
        }
        shot(e, t, i) {
            (this.shooter = e), this.hideAttackEffect(Sprite3DType.Ef_Hit);
        }
        refire() { }
        stopFire(e) {
            return !1;
        }
        clear() {
            this.attackEffectMap.forEach(e => {
                e.destroy();
            }),
                this.root.destroy();
        }
    }

    class F extends N {
        constructor() {
            super(...arguments);
            this.attackLockTarget = null;
            this.forward = ex.v3(0);
            this.velocity = ex.v3(0);
            this.reboundDirection = ex.v2(0);
        }
        initialize() {
            super.initialize(), (this.attackLockTarget = null), (this.reboundDirection.x = this.reboundDirection.y = -1);
        }
        onUpdate() {
            if ((super.onUpdate(), !ex.isValidTimerDelta()))
                return;
            let e = Laya.timer.delta;
            if (!this.manager.isGamePause()) {
                let t = e / 1e3;
                this.isMoving() && this.selfTranslate(this.moveSpeed * t);
            }
        }
        selfTranslate(e) {
            let t = Laya.timer.delta, i = t / 1e3;
            this.attackLockTarget && !this.attackLockTarget.isDie() && this.isTrack && this.RotateTo(i),
                this.root.transform.getForward(this.forward),
                this.isRebound ? ((this.forward.x *= this.reboundDirection.x), (this.forward.z *= this.reboundDirection.y)) : ex.pMultv3(this.forward, -1, this.forward),
                ex.pMultv3(this.forward, e, this.velocity);
            let a = this.position;
            (a.x += this.velocity.x), (a.z += this.velocity.z), (this.position = a), (this.lifeTime += t);
            let s = this.velocity.x > 0 ? 1 : -1, o = this.velocity.z > 0 ? 1 : -1;
            if (this.lifeTime >= this.moveLifeTime)
                this.bomb(null), this.isDivide && this.divideBullet();
            else {
                let e = this.checkRaycastWall(s, o);
                e && (this.isRebound ? this.rebound(e.normal) : this.bomb(null));
            }
            this.findHitTarget();
        }
        checkRaycastWall(e, t) {
            let i = this.manager.raycastWall(this.position, ex.v2temp(0.3 * e, 0.3 * t));
            return i || this.manager.raycastWall(this.position, ex.v2temp(0.6 * e, 0.6 * t));
        }
        RotateTo(e) {
            let t = 120 * e, i = ex.pSubv3(this.attackLockTarget.position, this.position, ex.v3temp(0)), a = ex.v3ToV2(i, ex.v2temp(0)), s = -(ex.pToAngle(a) + Math.PI / 2), o = ex.formatRotation(ex.convertToRotate(s)), n = this.root.transform.localRotationEulerY - 180, r = Utils.rotateToTarget(n, o, t);
            this.root.transform.localRotationEulerY = r + 180;
        }
        findHitTarget() {
            let e = this.manager.findHitTarget(this.shooter, this.position);
            if (e) {
                let t = this.shooter.randomHurt();
                if (e.subtractBlood(t.hurt, t.double, this.shooter))
                    this.shooter.kill(e);
                else {
                    let t = this.shooter.checkFrozenAndGetTime();
                    if (t > 0 && (e.beFrozen(t), this.isFrozen && !this.shooter.isDie())) {
                        let i = Sprite3DType.Ef_Frozen;
                        this.shooter.showFrozenEffect(i, e.position, t);
                    }
                }
                this.bomb(e), this.isDivide && this.divideBullet();
            }
        }
        bomb(e) {
            (this.state = BulletState.Stop),
                Utils.checkInTheScreen(this.convertToVec2(this.position)) && e && !e.isDie() && this.showAttackEffect(Sprite3DType.Ef_Hit, this.position),
                this.isRocket && this.calculateRangeHurt(e);
            let t = this.root.getChildAt(0);
            t && (t.active = !1);
        }
        calculateRangeHurt(e) {
            let t = this.manager.findHitTargetList(this.shooter, this.position);
            for (let i = 0; i < t.length; i++) {
                let a = t[i];
                if (a != e) {
                    let e = this.shooter.randomHurt();
                    a.subtractBlood(e.hurt, e.double, this.shooter);
                }
            }
        }
        fireSingle(e, t = null) {
            (e = null != e ? e : this.root.transform.rotationEuler.y), (t = null != t ? t : BulletType.Normal), this.manager.createBullet(this.position, t).shot(this.shooter, null, e);
        }
        rebound(e) {
            (1 != e.x && -1 != e.x) || (this.reboundDirection.x *= -1), (1 != e.z && -1 != e.z) || (this.reboundDirection.y *= -1);
        }
        divideBullet() {
            let e = this.root.transform.rotationEuler.y;
            this.fireSingle(e), this.fireSingle(e - 30), this.fireSingle(e + 30);
        }
        shot(e, t, i) {
            super.shot(e, t, i), (this.attackLockTarget = t), (this.state = BulletState.Move), (this.root.transform.localRotationEulerY = i);
        }
    }

    class H extends N {
        constructor() {
            super(...arguments);
            this.fireValidTime = 0;
            this.endPos = ex.v3(0);
            this.attackedList = null;
            this.hitResults = [];
            this.shapeCollider = new Laya.BoxColliderShape(1.2, 3, 1.2);
        }
        onAwake() {
            super.onAwake();
        }
        initialize() {
            super.initialize(), (this.attackedList = []);
        }
        onUpdate() {
            if ((super.onUpdate(), !ex.isValidTimerDelta()))
                return;
            Laya.timer.delta;
            if (!this.manager.isGamePause()) {
                this.isShown() && this.findHitTarget();
            }
        }
        checkHitResult() {
            let e = this.position, t = this.endPos;
            this.manager.scene3d.physicsSimulation.shapeCastAll(this.shapeCollider, e, t, this.hitResults);
        }
        calculateEndPos() {
            let e = this.position, t = ex.convertToRadian(this.root.transform.localRotationEulerY), i = ex.pForAngle(t, ex.v2temp(0));
            (e.x += 0.3 * i.y), (e.z += 0.3 * i.x);
            (this.endPos.y = e.y), (this.endPos.x = e.x + 10 * i.y), (this.endPos.z = e.z + 10 * i.x);
        }
        findHitTarget() {
            this.checkHitResult();
            let e = null;
            for (let t = 0; t < this.hitResults.length; t++) {
                let i = this.hitResults[t], a = i.collider.owner.getComponent(_);
                if (a && a != this.shooter && !a.isDie() && !this.attackedList.includes(a)) {
                    Utils.checkInTheScreen(this.convertToVec2(this.position)) && (e = i.point);
                    let t = this.shooter.randomHurt();
                    if (a.subtractBlood(t.hurt, t.double, this.shooter))
                        this.shooter.kill(a);
                    else {
                        let e = this.shooter.checkFrozenAndGetTime();
                        if (e > 0 && (a.beFrozen(e), this.isElectromagnetic && !this.shooter.isDie())) {
                            let t = Sprite3DType.Ef_Electromagnetic;
                            this.shooter.showFrozenEffect(t, a.position, e);
                        }
                    }
                    this.attackedList.push(a);
                }
            }
            e && this.showAttackEffect(Sprite3DType.Ef_Hit, e);
        }
        countDown() {
            super.countDown();
            let e = Laya.timer.delta;
            this.fireValidTime > 0 && ((this.fireValidTime -= e), this.fireValidTime <= 0 && ((this.state = BulletState.Stop), Utils.stopParticle(this.root)));
        }
        shot(e, t, i) {
            super.shot(e, t, i), (this.state = BulletState.Shown), (this.root.transform.localRotationEulerY = i), (this.fireValidTime = 300), Utils.playParticle(this.root, null), this.calculateEndPos();
        }
    }

    class O extends N {
        constructor() {
            super(...arguments);
            this.fireValidTime = 0;
            this.bStopFire = !1;
            this.consumeSpeed = 0;
            this.consumeValieTime = 0;
            this.endPos = ex.v3(0);
            this.hitResults = [];
            this.shapeCollider = new Laya.BoxColliderShape(1.2, 3, 1.2);
        }
        get isFollowTank() {
            return !0;
        }
        onAwake() {
            super.onAwake();
        }
        initialize() {
            super.initialize(), (this.fireValidTime = 0), (this.bStopFire = !1);
        }
        onUpdate() {
            var e;
            if ((super.onUpdate(), !ex.isValidTimerDelta()))
                return;
            let t = Laya.timer.delta;
            if (!this.manager.isGamePause()) {
                this.isFollow() &&
                    !(null === (e = this.shooter) || void 0 === e ? void 0 : e.isDie()) &&
                    (this.followTurret(), (this.consumeValieTime -= t), this.consumeValieTime <= 0 && ((this.consumeValieTime = this.consumeSpeed), this.shooter.subBullet() || this.shooter.stopFire()));
            }
        }
        followTurret() {
            this.position = this.shooter.getQiangKouPosition();
            let e = this.shooter.turretNode.transform.rotationEuler.y, t = this.root.transform.rotationEuler;
            (t.y = e), (this.root.transform.rotationEuler = t), this.findHitTarget();
        }
        checkHitResult() {
            this.calculateEndPos();
            let e = this.position, t = this.endPos;
            this.manager.scene3d.physicsSimulation.shapeCastAll(this.shapeCollider, e, t, this.hitResults);
        }
        calculateEndPos() {
            let e = this.position, t = ex.convertToRadian(this.root.transform.localRotationEulerY), i = ex.pForAngle(t, ex.v2temp(0));
            (e.x += 0.3 * i.y), (e.z += 0.3 * i.x);
            let a = this.attackValidDistance - 2;
            (this.endPos.y = e.y), (this.endPos.x = e.x + i.y * a), (this.endPos.z = e.z + i.x * a);
        }
        findHitTarget() {
            this.checkHitResult();
            let e = null;
            for (let t = 0; t < this.hitResults.length; t++) {
                let i = this.hitResults[t], a = i.collider.owner.getComponent(_);
                if (a && a != this.shooter && !a.isDie()) {
                    Utils.checkInTheScreen(this.convertToVec2(this.position)) && (e = i.point);
                    let t = Laya.timer.delta, s = this.shooter.randomHurt(), o = s.hurt * (t / this.shooter.info.bulletcontinued);
                    a.subtractBlood(o, s.double, this.shooter) && this.shooter.kill(a);
                }
            }
            e && this.showAttackEffect(Sprite3DType.Ef_Hit, e, 300);
        }
        countDown() {
            super.countDown();
            let e = Laya.timer.delta;
            this.fireValidTime > 0 && ((this.fireValidTime -= e), this.bStopFire && this.fireValidTime <= 0 && this.stopParticle());
        }
        shot(e, t, i) {
            super.shot(e, t, i),
                (this.consumeSpeed = e.info.bulletcontinued),
                (this.consumeValieTime = this.consumeSpeed),
                (this.state = BulletState.Follow),
                (this.bStopFire = e.isRobot),
                (this.fireValidTime = 800),
                Utils.playParticle(this.root, null);
        }
        refire() {
            this.fireValidTime = 800;
        }
        stopFire(e) {
            if (e)
                this.stopParticle();
            else if (!this.bStopFire && ((this.bStopFire = !0), this.fireValidTime <= 0))
                return this.stopParticle(), !0;
            return !1;
        }
        stopParticle() {
            (this.state = BulletState.Stop), Utils.stopParticle(this.root);
            let e = `resources/music/shot${this.type}.png`;
            SoundManager.stopSound(e);
        }
    }

    class W extends U {
        constructor() {
            super(...arguments);
            this.type = 0;
            this.shooter = null;
            this.attackEffectMap = new Map();
            this.hitEffectValidTime = 0;
            this.skillLockTarget = null;
            this.stopValidTime = 0;
            this.lifeTime = 0;
            this.state = BulletState.Ready;
            this.forward = ex.v3(0);
            this.velocity = ex.v3(0);
            this.moveSpeedY = 0;
        }
        get moveSpeed() {
            return 25;
        }
        get attackValidDistance() {
            return this.shooter.attackDistance;
        }
        get moveLifeTime() {
            return 500;
        }
        get isRocket() {
            return this.type == SkillType.QuYuHongZha;
        }
        onAwake() {
            super.onAwake(), this.loadAllEffects();
        }
        initialize() {
            (this.lifeTime = 0), (this.stopValidTime = 0), (this.state = BulletState.Ready), (this.skillLockTarget = null);
            let e = this.root.getChildAt(0);
            e && (e.active = !0);
        }
        loadAllEffects() {
            let e = [Sprite3DType.Ef_Hit], t = [];
            e.forEach(e => {
                let i = 'subgame/uav/Effect/LayaScene_' + e + '/Conventional/' + e + '.lh';
                t.push({
                    url: i,
                    alias: e
                });
            });
            var i = this;
            let a = function (e) {
                if (e < t.length) {
                    if (i.attackEffectMap.get(t[e].alias))
                        return void a(++e);
                    Laya.Sprite3D.load(t[e].url, Laya.Handler.create(i, s => {
                        if (s) {
                            let o = s.clone();
                            (o.active = !1), i.manager.root.addChild(o), i.attackEffectMap.set(t[e].alias, o), Utils.changeParticleRenderMode(o), a(++e), Laya.timer.callLater(s, s.destroy);
                        }
                        else
                            console.error('load effect error');
                    }));
                }
            };
            a(0);
        }
        showAttackEffect(e, t, i = null) {
            let a = this.attackEffectMap.get(e);
            a && (a.active || ((a.active = !0), Utils.playParticle(a, null)), t && (a.transform.position = t), (i = null != i ? i : 500) > 0 && (this.hitEffectValidTime = i));
        }
        hideAttackEffect(e) {
            let t = this.attackEffectMap.get(e);
            t && ((t.active = !1), Utils.stopParticle(t));
        }
        onUpdate() {
            if (!ex.isValidTimerDelta())
                return;
            let e = Laya.timer.delta;
            if (!this.manager.isGamePause()) {
                let t = e / 1e3;
                this.isMoving() && this.selfTranslate(this.moveSpeed * t), this.countDown();
            }
        }
        countDown() {
            let e = Laya.timer.delta;
            this.hitEffectValidTime > 0 && ((this.hitEffectValidTime -= e), this.hitEffectValidTime <= 0 && this.hideAttackEffect(Sprite3DType.Ef_Hit));
        }
        selfTranslate(e) {
            let t = Laya.timer.delta, i = t / 1e3;
            this.skillLockTarget && !this.skillLockTarget.isDie() && this.RotateTo(i),
                this.root.transform.getForward(this.forward),
                ex.pMultv3(this.forward, -1, this.forward),
                ex.pMultv3(this.forward, e, this.velocity),
                (this.velocity.y = this.moveSpeedY * i);
            let a = this.position;
            (a.x += this.velocity.x), (a.z += this.velocity.z), (a.y -= this.velocity.y), (this.position = a), (this.lifeTime += t);
            let s = this.velocity.x > 0 ? 1 : -1, o = this.velocity.z > 0 ? 1 : -1;
            if (this.lifeTime >= this.moveLifeTime)
                this.bomb(null);
            else {
                this.checkRaycastWall(s, o) ? this.bomb(null) : a.y <= 0 && this.bomb(null);
            }
            this.findHitTarget();
        }
        checkRaycastWall(e, t) {
            let i = this.manager.raycastWall(this.position, ex.v2temp(0.3 * e, 0.3 * t));
            return i || this.manager.raycastWall(this.position, ex.v2temp(0.6 * e, 0.6 * t));
        }
        RotateTo(e) {
            let t = 120 * e, i = ex.pSubv3(this.skillLockTarget.position, this.position, ex.v3temp(0)), a = ex.v3ToV2(i, ex.v2temp(0)), s = -(ex.pToAngle(a) + Math.PI / 2), o = ex.formatRotation(ex.convertToRotate(s)), n = this.root.transform.localRotationEulerY - 180, r = Utils.rotateToTarget(n, o, t);
            this.root.transform.localRotationEulerY = r + 180;
        }
        findHitTarget() {
            let e = this.manager.findHitTarget(this.shooter.tank, this.position);
            if (e) {
                let t = this.shooter.randomHurt();
                e.subtractBlood(t.hurt, t.double, this.shooter.tank) && this.shooter.kill(e), this.bomb(e);
            }
        }
        bomb(e) {
            this.isMoving() && this.skillLockTarget && !this.skillLockTarget.isDie() && this.shooter.showSkillTankEffect(),
                (this.state = BulletState.Stop),
                Utils.checkInTheScreen(this.convertToVec2(this.position)) && e && !e.isDie() && this.showAttackEffect(Sprite3DType.Ef_Hit, this.position),
                this.isRocket && (this.calculateRangeHurt(e), this.rocketBomb());
            let t = this.root.getChildAt(0);
            t && (t.active = !1), this.manager.recoveryUAVBullet(this);
        }
        calculateRangeHurt(e) {
            let t = this.manager.findHitTargetList(this.shooter.tank, this.position, GameModel.UAV_ROCKET_ATTACK_RANGE);
            for (let i = 0; i < t.length; i++) {
                let a = t[i];
                if (a != e) {
                    let e = this.shooter.randomSkillHurt();
                    a.subtractBlood(e, !1, this.shooter.tank) && this.shooter.kill(a);
                }
            }
        }
        rocketBomb() {
            this.manager.showSkillEffect(this.shooter.info.type, this.position), SoundManager.playSound(Model.AudioUrl.Bomb);
        }
        isReady() {
            return this.state == BulletState.Ready;
        }
        isMoving() {
            return this.state == BulletState.Move;
        }
        isStop() {
            return this.state == BulletState.Stop;
        }
        isDie() {
            return this.isStop() || this.state == BulletState.Clear;
        }
        shot(e, t, i) {
            (this.shooter = e), t == this.shooter.tank && (this.skillLockTarget = t), this.hideAttackEffect(Sprite3DType.Ef_Hit);
            let a = this.position;
            if (t) {
                let e = ex.getVec2Distance(t.position, a) / this.moveSpeed;
                this.moveSpeedY = (a.y - 0.5) / e;
            }
            else
                this.moveSpeedY = (a.y - 0.5) / 0.5;
            (this.state = BulletState.Move), (this.root.transform.localRotationEulerY = i);
        }
        clear() {
            this.attackEffectMap.forEach(e => {
                e.destroy();
            }),
                this.root.destroy();
        }
    }

    class z {
        constructor() {
            this.bulletSprite3DList = null;
            this.uavBulletSprite3DList = null;
            this.bulletPool = [];
            this.uavBulletPool = [];
        }
        static get instance() {
            return null == z._instance && (z._instance = new z()), z._instance;
        }
        initSprite3Ds(e, t) {
            (this.bulletSprite3DList = e), (this.uavBulletSprite3DList = t);
        }
        createBullet(e) {
            let t = this.getPoolBullet(e);
            if (t)
                t.root.active = !0;
            else {
                let i = this.getBullet(e), a = Laya.Sprite3D.instantiate(i.getChildAt(0));
                switch (e) {
                    case BulletType.Flame:
                        t = a.addComponent(O);
                        break;
                    case BulletType.Electromagnetic:
                    case BulletType.Laser:
                        t = a.addComponent(H);
                        break;
                    default:
                        t = a.addComponent(F);
                }
                (t.type = e), (t.root = a);
            }
            return t;
        }
        getBullet(e) {
            for (let t = 0; t < this.bulletSprite3DList.length; t++)
                if (this.bulletSprite3DList[t].type == e)
                    return this.bulletSprite3DList[t].sprite3D;
            return console.warn('未获取到子弹节点:', e), this.bulletSprite3DList[0].sprite3D;
        }
        getPoolBullet(e) {
            for (let t = 0; t < this.bulletPool.length; t++)
                if (this.bulletPool[t].type == e) {
                    let e = this.bulletPool[t];
                    return this.bulletPool.splice(t, 1), e;
                }
            return null;
        }
        recoveryBullet(e) {
            (e.root.active = !1), e.root.removeSelf(), this.bulletPool.includes(e) ? console.error('对象池回收子弹异常') : this.bulletPool.push(e);
        }
        createUAVBullet(e) {
            let t = this.getPoolUAVBullet(e);
            if (t)
                t.root.active = !0;
            else {
                let i = this.getUAVBullet(e), a = Laya.Sprite3D.instantiate(i.getChildAt(0));
                ((t = a.addComponent(W)).root = a), (t.type = e);
            }
            return t;
        }
        getUAVBullet(e) {
            for (let t = 0; t < this.uavBulletSprite3DList.length; t++)
                if (this.uavBulletSprite3DList[t].type == e)
                    return this.uavBulletSprite3DList[t].sprite3D;
            return console.warn('未获取到无人机子弹节点:', e), this.uavBulletSprite3DList[0].sprite3D;
        }
        getPoolUAVBullet(e) {
            for (let t = 0; t < this.uavBulletPool.length; t++)
                if (this.uavBulletPool[t].type == e) {
                    let e = this.uavBulletPool[t];
                    return this.uavBulletPool.splice(t, 1), e;
                }
            return null;
        }
        recoveryUAVBullet(e) {
            (e.root.active = !1), e.root.removeSelf(), this.uavBulletPool.includes(e) ? console.error('对象池回收无人机子弹异常') : this.uavBulletPool.push(e);
        }
        clear() {
            console.log('clear bullet pool'),
                this.bulletPool.forEach(e => {
                    e.clear();
                }),
                this.uavBulletPool.forEach(e => {
                    e.clear();
                }),
                (this.bulletPool = []),
                (this.uavBulletPool = []),
                this.bulletSprite3DList.forEach(e => {
                    e.sprite3D.destroy();
                }),
                this.uavBulletSprite3DList.forEach(e => {
                    e.sprite3D.destroy();
                });
        }
    }
    z._instance = null;

    class Y {
        constructor(e) {
            this.root = null;
            this.root2d = null;
            this.scene3d = null;
            this.gameUI = null;
            this.gameTime = 0;
            this.currTank = null;
            this.allTankMaterials = null;
            this.tankShadowSprite3D = null;
            this.deathEffectMap = new Map();
            this.gameState = GameState.None;
            this.gameEndCallback = null;
            this.showAddTipsCount = 0;
            this.m_HitResult = new Laya.HitResult();
            this.m_StartPoint = ex.v2(0);
            this.m_EndPoint = ex.v2(0);
            this.m_MoveDirection = ex.v2(0);
            this.gameUI = e;
            this.gameUI.camera.manager = this;
            this.scene3d = e.scene3d;
            this.loadMaterials();
            this.createRoot2d();
            Laya.timer.frameLoop(1, this, this.onUpdate);
        }
        loadMaterials() { }
        createRoot2d() {
            (this.root2d = new Laya.Sprite()), this.gameUI.numChildren > GameModel.Scene3DZIndex && this.gameUI.addChildAt(this.root2d, GameModel.Scene3DZIndex + 1);
        }
        initGame(e) {
            (this.gameEndCallback = e),
                (this.gameState = GameState.Ready),
                (this.gameTime = 0),
                this.deathEffectMap.clear(),
                (this.currTank = this.createTank()),
                (this.gameUI.camera.followAtTarget = this.currTank.root),
                this.gameUI.camera.startPreviewAnimation(),
                j.instance.initRobot(this);
        }
        transparentSubChild(e) {
            if (!e)
                return;
            let t = e.numChildren;
            for (let i = 0; i < t; i++) {
                let t = e.getChildAt(i);
                if (t.name.indexOf('Yingzi') >= 0) {
                    t.meshRenderer.material.renderMode = Laya.BlinnPhongMaterial.RENDERMODE_TRANSPARENT;
                }
            }
        }
        createTank() {
            let e = GameConfig.usingTank, t = GameConfig.getTankInfo(e), i = GameConfig.currFightUAV, a = GameConfig.getUAVInfoWithLevel(i, GameData.getUAVLevel(i));
            console.log('current tankId:', e, 'tank type:', t.type);
            let s = j.instance.randomTankPosition(), o = j.instance.createTank(s, e, t.type, a, _);
            return this.root.addChild(o.root), o;
        }
        createBullet(e, t) {
            let i = this.root, a = z.instance.createBullet(t);
            return i.addChild(a.root), (a.position = e), a.initialize(), a;
        }
        createUAVBullet(e, t = 0) {
            let i = this.root, a = z.instance.createUAVBullet(t);
            return i.addChild(a.root), (a.position = e), a.initialize(), a;
        }
        createTankShadow() {
            console.log(this.tankShadowSprite3D, 'this.tankShadowSprite3Dthis.tankShadowSprite3D');
            return Laya.Sprite3D.instantiate(this.tankShadowSprite3D.getChildAt(0));
        }
        onUpdate() {
            if (ex.isValidTimerDelta() && this.isGameRunning()) {
                let e = Laya.timer.delta;
                (this.gameTime += e), this.refreshGameTime();
                for (let e of this.deathEffectMap) {
                    let t = e[1];
                    if (t && t.spine && t.spine.visible) {
                        let e = this.gameUI.convertToVec2(t.position);
                        t.spine.pos(e.x, e.y);
                    }
                }
            }
        }
        leftGameTime() {
            let e = 1e3 * GameConfig.GameConf.time - this.gameTime;
            return e < 0 ? 0 : e;
        }
        refreshGameTime() {
            let e = this.leftGameTime();
            e <= 0 && this.checkGameOver(), this.gameUI.refreshGameTime(e);
        }
        fire() {
            this.currTank && this.currTank.fire();
        }
        stopFire() {
            this.currTank && this.currTank.stopFire();
        }
        showTipsLabel(e, t, i, a) {
            let s = Laya.Pool.getItemByClass('tipsLbl', Laya.Label);
            (s.text = e),
                (s.color = '#FF0000'),
                (s.font = t),
                (s.fontSize = 20),
                s.pos(i.x, i.y),
                Laya.stage.addChild(s),
                Laya.Tween.to(s, {
                    y: s.y - 100
                }, 800, null, Laya.Handler.create(null, () => {
                    s.removeSelf(), Laya.Pool.recover('tipsLbl', s), a && a();
                }));
        }
        showBloodTipsLabel(e, t, i) {
            if (Utils.checkInTheScreen(i) && this.showAddTipsCount < 20) {
                this.showAddTipsCount++;
                let a = t ? '+' : '';
                a += Math.ceil(e);
                let s = t ? GameModel.BLOOD_DOUBLE : GameModel.BLOOD_WHITE;
                this.showTipsLabel(a, s, i, () => {
                    this.showAddTipsCount--;
                });
            }
        }
        recoveryBullet(e) {
            z.instance.recoveryBullet(e);
        }
        recoveryUAVBullet(e) {
            z.instance.recoveryUAVBullet(e);
        }
        hasRobot() {
            return j.instance.hasRobot();
        }
        refreshLeftBullet(e) {
            this.gameUI.refreshLeftBullet(e);
        }
        showGameTips(e, t, i) {
            this.gameUI.showGameTips(e, t, i);
        }
        showBombEffect(e, t, i) {
            let a = this.gameUI.convertToVec2(i), s = a.x, o = a.y, n = this.deathEffectMap.get(t);
            if (n)
                n.spine && (i.cloneTo(n.position), (n.spine.visible = !0), n.spine.pos(s, o), n.spine.play(0, !1, !0));
            else {
                let a = new Laya.Templet();
                this.deathEffectMap.set(t, {
                    templet: a,
                    spine: null,
                    position: ex.v3(i)
                }),
                    a.on(Laya.Event.COMPLETE, this, () => {
                        let e = a.buildArmature(0);
                        e.pos(s, o),
                            this.root2d.addChild(e),
                            e.play(0, !1),
                            e.player.on(Laya.Event.STOPPED, null, () => {
                                console.log('STOPPED'), (e.visible = !1);
                            }),
                            (this.deathEffectMap.get(t).spine = e);
                    }),
                    a.loadAni(e);
            }
        }
        showDeathEffect(e, t) {
            let i = 'subgame/Tank_Burst/' + ('Tanke_' + ex.formatNumber(e, 2)) + '/skeleton.sk';
            this.showBombEffect(i, e, t);
        }
        showSkillEffect(e, t) {
            this.showBombEffect('subgame/uav/Aerocraft5/Ef_Skill_Tanke/skeleton.sk', e, t);
        }
        raycastWall(e, t) {
            let i = ex.v3temp(e.x + t.x, e.y, e.z + t.y);
            return this.raycastWallFromTo(e, i);
        }
        raycastWallFromTo(e, t) {
            return this.raycastFromTo(e, t, GameModel.CollisionGroupWall);
        }
        raycastFromTo(e, t, i) {
            return ((i = null != i ? i : Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER),
                this.scene3d.physicsSimulation.raycastFromTo(e, t, this.m_HitResult, Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER, i),
                this.m_HitResult.succeeded ? this.m_HitResult : null);
        }
        findNearbyAttackTarget(e) {
            return j.instance.findNearbyAttackTarget(e);
        }
        findHitTarget(e, t) {
            let i = 0.6 * GameModel.TankWidth;
            return e.isRobot && !this.currTank.isDie() && ex.getVec2Distance(t, this.currTank.position) <= i ? this.currTank : j.instance.findHitTarget(e, t, i);
        }
        findHitTargetList(e, t, i) {
            i = null != i ? i : 0.6 * GameModel.TankWidth;
            let a = null;
            e.isRobot && (this.currTank.isDie() || (ex.getVec2Distance(t, this.currTank.position) <= i && (a = this.currTank)));
            let s = j.instance.findHitTargetList(e, t, i);
            return a && s.push(a), s;
        }
        getTankMaterial(e) {
            let t = 0;
            if ((t = e <= 12 ? 1 : e <= 22 ? 2 : 3) > 0) {
                let e = 'tank0' + t;
                for (let t = 0; t < this.allTankMaterials.length; t++)
                    if (this.allTankMaterials[t].alias == e)
                        return this.allTankMaterials[t].material;
            }
            return null;
        }
        checkGameOver() {
            let e = j.instance.getGameOverRank(this.currTank);
            this.gameover(1 == e, e);
        }
        touchStart(e, t) {
            (this.m_StartPoint.x = e), (this.m_StartPoint.y = t);
        }
        touchMove(e, t) {
            (this.m_EndPoint.x = e),
                (this.m_EndPoint.y = t),
                ex.pDistance(this.m_StartPoint, this.m_EndPoint) >= 30 && (ex.pSub(this.m_EndPoint, this.m_StartPoint, this.m_MoveDirection), this.currTank.changeDirection(this.m_MoveDirection));
        }
        touchEnd() {
            this.currTank && this.isGameRunning() && this.currTank.stopMove();
        }
        changeDirection(e) {
            this.currTank &&
                (0 == e.x && 0 == e.y
                    ? this.currTank.stopMove()
                    : (e.x == this.m_MoveDirection.x && e.y == this.m_MoveDirection.x) || (e.cloneTo(this.m_MoveDirection), this.currTank.changeDirection(this.m_MoveDirection)));
        }
        startGame() {
            this.gameState = GameState.Running;
        }
        pauseGame() {
            this.gameState = GameState.Pause;
        }
        resumeGame() {
            this.gameState = GameState.Running;
        }
        isGameReady() {
            return this.gameState == GameState.Ready;
        }
        isGamePause() {
            return this.gameState == GameState.Pause;
        }
        isGameRunning() {
            return this.gameState == GameState.Running;
        }
        isGameEnd() {
            return this.gameState == GameState.End;
        }
        reviveGame() {
            this.startGame(), this.currTank.revive();
        }
        setMaterials(e) {
            this.allTankMaterials = e;
        }
        setSprite3DList(e) {
            let t = [], i = [], a = [], s = [], o = [];
            console.log(e, 'setSprite3DListsetSprite3DListsetSprite3DList');
            e.forEach((e, n) => {
                Sprite3DType.TankBase == e.alias
                    ? t.push({
                        type: e.type,
                        sprite3D: e.sprite3D
                    })
                    : Sprite3DType.TankTurret == e.alias
                        ? i.push({
                            type: e.type,
                            sprite3D: e.sprite3D
                        })
                        : Sprite3DType.Aerocraft == e.alias
                            ? a.push({
                                type: e.type,
                                sprite3D: e.sprite3D
                            })
                            : Sprite3DType.Ef_PaoDan == e.alias
                                ? (Utils.changeParticleRenderMode(e.sprite3D),
                                    s.push({
                                        type: e.type,
                                        sprite3D: e.sprite3D
                                    }))
                                : Sprite3DType.Aerocraft_PaoDan == e.alias
                                    ? (Utils.changeParticleRenderMode(e.sprite3D),
                                        o.push({
                                            type: e.type,
                                            sprite3D: e.sprite3D
                                        }))
                                    : e.alias == Sprite3DType.TankShadow && ((this.tankShadowSprite3D = e.sprite3D), this.transparentSubChild(e.sprite3D));
            }),
                z.instance.initSprite3Ds(s, o),
                j.instance.setSprite3Ds(t, i, a);
        }
        useSkill(e) {
            return !!this.currTank && this.currTank.useSkill(e);
        }
        clear() {
            (this.gameState = GameState.None),
                this.currTank && this.currTank.clear(),
                this.tankShadowSprite3D && this.tankShadowSprite3D.destroy(),
                j.instance.clear(),
                z.instance.clear(),
                this.root.destroy(),
                this.deathEffectMap.forEach(e => {
                    e.templet.destroy(), e.spine && e.spine.destroy();
                }),
                Utils.clearRes('subgame/sprite3d'),
                Utils.clearRes('subgame/Tank_Effect'),
                Utils.clearRes('subgame/Tanke_Model');
        }
        showWinAnimation() { }
        gameover(e, t) {
            if ((console.log('game over', e, t), e && this.showWinAnimation(), this.gameState != GameState.End)) {
                this.gameState = GameState.End;
                let i = 1500;
                Laya.timer.once(i, this, () => {
                    this.gameEndCallback && this.gameEndCallback(e, t);
                });
            }
        }
    }

    class GameUI extends ui.scene.GameSceneUI {
        constructor() {
            super(...arguments);
            this.scene3d = null;
            this.camera = null;
            this.light = null;
            this.m_SceneNode = null;
            this.gameOver = null;
            this.skillButton = null;
            this.tipsTimes = 0;
            this.reviveTimes = 0;
            this.lobbyTank = null;
            this.currtank = 0;
            this.tankVisible = !1;
            this.tempVec2 = ex.v2(0);
            this.m_StartPoint = ex.v2(0);
            this.m_TouchId = -1;
            this.keyDirection = ex.v2(0);
        }
        onAwake() {
            console.log('GameUI-----onAwake');
            GameUI.instance = this;
            this.width = Laya.stage.width;
            this.height = Laya.stage.height;
            this.pageName = '游戏中';
            this.initListener();
            this.init3DScene();
            this.initSprite();
            platform.loadComplete();
        }
        initListener() {
            this.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
            this.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
            this.on(Laya.Event.MOUSE_UP, this, this.onMouseUp);
            this.on(Laya.Event.MOUSE_OUT, this, this.onMouseOut);
            Laya.stage.on(Laya.Event.KEY_DOWN, this, this.onKeyDown);
            Laya.stage.on(Laya.Event.KEY_UP, this, this.onKeyUp);
        }
        initSprite() {
            let e = this.getChildByName('bg');
            (e.width = this.width),
                (e.height = this.height),
                (this.topNode.active = !1),
                this.timeLabel && (this.timeLabel.text = ''),
                (this.centerNode.active = !1),
                (this.centerNode.x = (Laya.stage.width - this.centerNode.width) / 2),
                (this.bottomNode.y = Laya.stage.height - this.bottomNode.height),
                (this.skillButton = this.skill_bg),
                (this.skillButton.gameUI = this),
                (this.leftBulletLabel.text = '0'),
                (this.leftBulletLabel.font = GameModel.TIMER_WHITE),
                (this.btnAttack.visible = !1),
                this.attackPad.on(Laya.Event.MOUSE_DOWN, this, this.onFireDown),
                this.attackPad.on(Laya.Event.MOUSE_UP, this, this.onFireUp),
                this.attackPad.on(Laya.Event.MOUSE_OUT, this, this.onFireOut),
                this.btnAttack.on(Laya.Event.MOUSE_DOWN, this, this.onFireDown),
                this.btnAttack.on(Laya.Event.MOUSE_UP, this, this.onFireUp),
                this.btnAttack.on(Laya.Event.MOUSE_OUT, this, this.onFireOut),
                this.showGamePad(!1),
                this.showLobby(),
                GameInfo.isNewUser || Laya.timer.once(1e3, this, this.installShortcut);
        }
        installShortcut() { }
        showLobby() {
            this.setGameVisible(!1);
            LobbyNode.show(this);
            this.camera && ((this.camera.orthographic = !0), this.camera.showLobby());
        }
        initGameOver() {
            let e = 'prefab';
            let t = e + '/GameOver.prefab';
            Laya.loader.load(t, Laya.Handler.create(this, e => {
                if (e) {
                    let t = new Laya.Prefab();
                    t.json = e;
                    let i = t.create();
                    this.addChild(i);
                    this.gameOver = i.getComponent(GameOver);
                }
            }), null, Laya.Loader.JSON);
        }
        showMoveGuide() {
            GuideUtils.showMove(this.width / 2, this.height - 200);
        }
        showAttackGuide() {
            GuideUtils.showStep == Model.GuideStep.Attack && GuideUtils.showAttack(this.width / 2 + 490, this.height - 150);
        }
        hideMoveGuide() {
            GuideUtils.showStep == Model.GuideStep.Move && GuideUtils.destroy();
        }
        hideAttackGuide() {
            GuideUtils.showStep == Model.GuideStep.AttackShown && GuideUtils.destroy();
        }
        setTapToStartVisible(e) { }
        init3DScene() {
            let e = this.addChildAt(new Laya.Scene3D(), GameModel.Scene3DZIndex);
            this.scene3d = e;
            var t = new Laya.Camera(0, 0.3, 100);
            e.addChild(t);
            t.transform.translate(GameModel.CameraLobbyPos);
            t.transform.rotate(GameModel.CameraLobbyRotation, !0, !1);
            t.clearFlag = Laya.CameraClearFlags.DepthOnly;
            t.orthographic = !0;
            t.orthographicVerticalSize = 5.3;
            this.camera = t.addComponent(V);
            var i = new Laya.DirectionLight();
            e.addChild(i);
            i.transform.worldMatrix.setForward(ex.v3(0, -1, -1));
            i.color = ex.v3(0.3, 0.3, 0.3);
            i.intensity = 0.8;
            e['ambientColor'] = ex.v3(0.7, 0.7, 0.7);
            this.light = i;
        }
        showMatchNode(e) {
            this.matchNode.show(() => {
                e();
            });
        }
        show3DScene(e) {
            console.log("GameUI-----show3DScene");
            this.m_SceneNode = e;
            this.scene3d.addChild(e);
        }
        initGameManager() {
            return this.manager || (this.manager = new Y(this)), (this.manager.root = this.m_SceneNode), this.manager;
        }
        initGameScene() {
            console.log("GameUI-----initGameScene");
            this.manager.initGame((e, t) => {
                this.hideMoveGuide(), this.hideAttackGuide();
                let i = this.manager.leftGameTime();
                if (!e && 0 == this.reviveTimes && i > 1e4) {
                    this.reviveTimes++;
                    try {
                        SoundManager.stopMusic();
                    }
                    catch (e) { }
                    this.revive.showWithCallback(i => {
                        i ? (SoundManager.playMusic(Model.AudioUrl.BgmGame, 0), this.manager.reviveGame(), this.showCustomAd()) : this.showGameOver(e, t);
                    });
                }
                else
                    this.showGameOver(e, t);
            });
        }
        showCustomAd() { }
        refreshGameTime(e) {
            this.timeLabel && ((this.timeLabel.text = ex.formatSecondToMinute(e / 1e3)), e < 3e4 && this.timeLabel.font != GameModel.TIMER_RED && (this.timeLabel.font = GameModel.TIMER_RED));
        }
        refreshLeftBullet(e) {
            this.leftBulletLabel &&
                ((this.leftBulletLabel.text = '' + e),
                    e <= 0
                        ? this.leftBulletLabel.font != GameModel.TIMER_RED && (this.leftBulletLabel.font = GameModel.TIMER_RED)
                        : this.leftBulletLabel.font != GameModel.TIMER_WHITE && (this.leftBulletLabel.font = GameModel.TIMER_WHITE));
        }
        showGameTips(e, t, i) {
            (this.nicknameLabel.text = e),
                (this.sourceAvatar.skin = t),
                (this.targetAvatar.skin = i),
                this.tipsTimes++,
                (this.tipsBg.visible = !0),
                Laya.timer.once(2e3, this, () => {
                    --this.tipsTimes <= 0 && (this.tipsBg.visible = !1);
                });
        }
        onSkillClick(e) {
            return console.log('onSkillClick'), !!this.manager && this.manager.useSkill(e);
        }
        convertToVec2(e) {
            let t = ex.v4temp(0);
            return this.camera.viewportProject(e, t), ex.v2temp(t.x / Laya.stage.clientScaleX, t.y / Laya.stage.clientScaleY);
        }
        setGameVisible(e) {
            console.log(e, 'setGameVisible');
            this.topNode.visible = e;
            this.miniMap.visible = e;
            this.centerNode.visible = e;
            this.bottomNode.visible = e;
            this.btnAttack.visible = e;
            e && (this.refreshGameTime(0), (this.timeLabel.font = GameModel.TIMER_WHITE));
        }
        refreshGameUI() {
            this.skillButton.refresh();
        }
        clearMap() {
            (this.reviveTimes = 0), this.manager.clear();
        }
        showLobbyTank(e, t, i, a) {
            let s = !1;
            if ((e != this.currtank && (s = !0), (this.tankVisible = !0), s)) {
                (this.currtank = 0), this.lobbyTank && (this.lobbyTank.clear(), (this.lobbyTank = null));
                let s = 'subgame';
                let o = GameConfig.getTankInfo(e), n = '' + ex.formatNumber(o.type, 2), r = s + '/Tanke_Model/Tanke/LayaScene_Chassis_' + n + '/Conventional/' + n + '.lh';
                Laya.Sprite3D.load(r, Laya.Handler.create(this, (e, n) => {
                    if (this.currtank == e)
                        if (n) {
                            if (((n.transform.localRotationEulerY = -10), i)) {
                                let e = n.transform.position;
                                i.cloneTo(e), (n.transform.position = e);
                            }
                            console.log('show lobby tank.');
                            let e = n.addComponent(x);
                            (e.info = o), (e.subpackage = s), (e.root = n), e.setShowUAV(t, !1), (n.active = this.tankVisible), (this.lobbyTank = e), this.scene3d.addChild(n), a && a();
                        }
                        else
                            console.log('加载坦克失败,先进入游戏场景后才加载坦克.');
                    else
                        console.log('已切换其它模型.');
                }, [e]));
            }
            else
                this.lobbyTank && ((this.lobbyTank.root.active = !0), i && (this.lobbyTank.position = i), this.lobbyTank.setShowUAV(t, !0), a && a());
        }
        showTank(e, t, i, a) {
            this.showLobbyTank(e, t, i, a), (this.currtank = e);
        }
        hideTank() {
            this.lobbyTank && (this.lobbyTank.root.active = !1), (this.tankVisible = !1);
        }
        clearLobby() {
            (this.currtank = 0), this.lobbyTank && (this.lobbyTank.clear(), (this.lobbyTank = null));
        }
        showStartGameAni(e) {
            let t = new Laya.Skeleton();
            t.load('resources/spine/startgame/skeleton.sk', Laya.Handler.create(this, () => {
                t.pos(this.width / 2, this.height / 2),
                    this.addChild(t),
                    t.play(0, !1),
                    t.player.on(Laya.Event.STOPPED, null, () => {
                        console.log('STOPPED'), t.templet.destroy(), t.destroy();
                    });
            })),
                SoundManager.playSound(Model.AudioUrl.StartGame);
        }
        onStartGame() {
            try {
                SoundManager.stopMusic();
            }
            catch (e) { }
            this.gameOver || this.initGameOver();
            this.setTapToStartVisible(!0);
            this.setGameVisible(!0);
            this.refreshGameUI();
            this.clearLobby();
            this.camera.orthographic = !1;
            this.camera.showPreview(() => {
                this.manager.startGame();
                GameInfo.isNewUser && this.showMoveGuide();
                SoundManager.playMusic(Model.AudioUrl.BgmGame, 0);
            });
            this.showMatchNode(() => {
                this.showStartGameAni(null);
                this.initGameScene();
                Laya.timer.once(500, this, platform.showNativeSmallAd);
            });
        }
        onUpgradeLevel() { }
        onBackHome() {
            this.showLobby();
        }
        onGotoSkill() { }
        onGameAgain() {
            this.onStartGame();
        }
        showGameOver(e, t) {
            console.log('showGameOver: ', e ? 'true' : 'false');
            try {
                SoundManager.stopMusic();
            }
            catch (e) { }
            this.clearMap();
            this.gameOver.gameEnd(this, e, t);
            GameInfo.isNewUser && (GameInfo.isNewUser = !1);
            let i = GameData.battleTimes;
            GameData.passLevel();
        }
        showGamePad(e, t = null) {
            (this.gamepad.visible = e), e && t && this.gamepad.pos(t.x, t.y);
        }
        setGamepadControlPosition(e, t) {
            (this.tempVec2.x = e), (this.tempVec2.y = t);
            let i = this.gamepadControl.width / 2;
            ex.pDistance(this.m_StartPoint, this.tempVec2) <= i
                ? this.gamepadControl.pos(this.tempVec2.x - this.m_StartPoint.x + i, this.tempVec2.y - this.m_StartPoint.y + 88)
                : (ex.pNormalize(ex.pSub(this.tempVec2, this.m_StartPoint, this.tempVec2)), ex.pMult(this.tempVec2, i, this.tempVec2), this.gamepadControl.pos(this.tempVec2.x + i, this.tempVec2.y + i));
        }
        onFireDown(e) {
            this.manager && this.manager.isGameRunning() && (this.manager.fire(), this.hideAttackGuide());
        }
        onFireUp() {
            this.manager && this.manager.isGameRunning() && this.manager.stopFire();
        }
        onFireOut() {
            this.manager && this.manager.isGameRunning() && this.manager.stopFire();
        }
        onMouseDown(e) {
            if ((window.focus(), this.manager && this.manager.isGameEnd()))
                return void e.stopPropagation();
            if (e.target instanceof Laya.Button)
                return void e.stopPropagation();
            let t = Laya.stage.mouseX, i = Laya.stage.mouseY;
            -1 == this.m_TouchId &&
                ((this.m_TouchId = e.touchId),
                    this.manager && this.manager.isGameRunning()
                        ? (this.hideMoveGuide(), this.showAttackGuide(), this.manager.touchStart(t, i), (this.m_StartPoint.x = t), (this.m_StartPoint.y = i), this.showGamePad(!0, this.m_StartPoint))
                        : this.lobbyTank && this.lobbyTank.touchStart(t, i));
        }
        onMouseMove(e) {
            if (this.m_TouchId == e.touchId) {
                let e = Laya.stage.mouseX, t = Laya.stage.mouseY;
                this.manager && this.manager.isGameRunning() ? (this.manager.touchMove(e, t), this.setGamepadControlPosition(e, t)) : this.lobbyTank && this.lobbyTank.touchMove(e, t);
            }
        }
        onMouseUp(e) {
            this.m_TouchId == e.touchId && (this.lobbyTank ? this.lobbyTank.touchEnd() : this.manager && (this.manager.touchEnd(), this.showGamePad(!1)), (this.m_TouchId = -1));
        }
        onMouseOut(e) {
            this.m_TouchId == e.touchId && (this.lobbyTank ? this.lobbyTank.touchEnd() : this.manager && (this.manager.touchEnd(), this.showGamePad(!1)), (this.m_TouchId = -1));
        }
        onKeyDown(e) {
            switch (e.keyCode) {
                case Laya.Keyboard.W:
                    this.keyDirection.y = -1;
                    break;
                case Laya.Keyboard.A:
                    this.keyDirection.x = -1;
                    break;
                case Laya.Keyboard.S:
                    this.keyDirection.y = 1;
                    break;
                case Laya.Keyboard.D:
                    this.keyDirection.x = 1;
            }
            this.manager && this.manager.isGameRunning() && this.manager.changeDirection(this.keyDirection);
        }
        onKeyUp(e) {
            switch ((console.log('onKeyUp:' + e.keyCode), e.keyCode)) {
                case Laya.Keyboard.W:
                    this.keyDirection.y = 0;
                    break;
                case Laya.Keyboard.A:
                    this.keyDirection.x = 0;
                    break;
                case Laya.Keyboard.S:
                    this.keyDirection.y = 0;
                    break;
                case Laya.Keyboard.D:
                    this.keyDirection.x = 0;
            }
            this.manager && this.manager.isGameRunning() && this.manager.changeDirection(this.keyDirection);
        }
    }

    class Q extends Laya.Button {
        constructor() {
            super(...arguments);
            this.gameUI = null;
            this.progressBar = null;
            this.cover = null;
            this.icon = null;
            this.skillInfo = null;
            this.cdValieTime = 0;
            this.cdTime = 0;
        }
        onAwake() {
            (this.pageName = '游戏中'),
                (this.clickHandler = new Laya.Handler(this, this.onClick)),
                (this.icon = this.getChildByName('skill_icon')),
                (this.cover = this.getChildByName('skill_cover')),
                (this.progressBar = new Laya.Sprite()),
                this.progressBar.pos(0, 0),
                (this.cover.mask = this.progressBar),
                (this.cover.visible = this.cover.active = !1),
                Laya.timer.frameLoop(1, this, this.onUpdate);
        }
        refresh() {
            (this.visible = this.active = !1), (this.skillInfo = null);
            let e = GameConfig.currFightUAV;
            if (e > 0) {
                let t = GameData.getUAVLevel(e), i = GameConfig.getUAVInfoWithLevel(e, t);
                i &&
                    i.skill > 0 &&
                    ((this.skillInfo = GameConfig.getSkillInfo(i.skill)),
                        this.skillInfo && this.skillInfo.cd > 0 && ((this.visible = this.active = !0), (this.icon.skin = `resources/game/skill_${this.skillInfo.type}.png`)));
            }
        }
        onClick() {
            if (this.cdValieTime <= 0) {
                let e = this.skillInfo;
                this.gameUI.onSkillClick(e) && ((this.cdValieTime = this.cdTime = e.cd), (this.cover.visible = this.cover.active = !0));
            }
            else
                console.log('技能冷却中');
        }
        onUpdate() {
            let e = this.gameUI.manager;
            e &&
                (e.isGameRunning()
                    ? this.cdValieTime > 0 &&
                        ((this.cdValieTime -= Laya.timer.delta), this.refreshProgressBar(), this.cdValieTime <= 0 && ((this.cover.visible = this.cover.active = !1), this.progressBar.graphics.clear()))
                    : e.isGameEnd() && this.cdValieTime > 0 && ((this.cdValieTime = 0), this.refreshProgressBar(), (this.cover.visible = this.cover.active = !1), this.progressBar.graphics.clear()));
        }
        refreshProgressBar() {
            let e = ((this.cdTime - this.cdValieTime) / this.cdTime) * 360 - 90;
            this.progressBar.graphics.clear(), this.progressBar.graphics.drawPie(this.cover.width / 2, this.cover.height / 2, this.cover.height, e, 270, '#ff0000');
        }
    }

    const J = 110, X = 20, $ = 50, ee = J + X;
    class MatchNode extends Laya.Sprite {
        constructor() {
            super(...arguments);
            this.content = null;
            this.userBg = null;
            this.progressBar = null;
            this.progressLabel = null;
            this.closeCallback = null;
            this.userNodes = [];
            this.srvUserList = null;
            this.enterInterval = 0;
            this.enterIndex = 0;
            this.robotCount = 0;
            this.sceneIndex = 0;
            this.bSubpackageLoaded = !1;
            this.bUserLoaded = !1;
            this.bDataLoaded = !1;
            this.progressValue = 0;
        }
        onAwake() {
            super.onAwake();
            console.log('MatchNode onAwake');
            this.pageName = '匹配';
            this.width = Laya.stage.width;
            this.height = Laya.stage.height;
            let e = this.getChildByName('bg');
            (e.width = this.width), (e.height = this.height);
            let t = this.getChildByName('content');
            (t.x = (this.width - t.width) / 2),
                (this.content = t),
                (this.userBg = t.getChildByName('user_bg')),
                (this.progressBar = t.getChildByName('progressBar')),
                (this.progressLabel = t.getChildByName('progress_label')),
                (this.progressLabel.font = GameModel.MATCH_LOAD);
            let i = GameConfig.PlayerTotal;
            for (let e = 0; e < i; e++) {
                let e = new Laya.Image('resources/match/avatar_bg.png');
                this.userBg.addChild(e);
                let t = new Laya.Image();
                t.size(J - 10, J - 10), t.pos(5, 5), e.addChild(t);
                let i = new Laya.Label();
                i.size(J, 30),
                    (i.align = 'center'),
                    (i.fontSize = 20),
                    (i.color = '#FFFFFF'),
                    (i.overflow = 'hidden'),
                    this.userBg.addChild(i),
                    this.userNodes.push({
                        avatarBg: e,
                        nickname: i,
                        avatar: t
                    });
            }
            Laya.timer.loop(100, this, this.onTimeUpdate, [100]);
            this.visible = this.active = !1;
        }
        show(e) {
            var t;
            this.visible = this.active = !0;
            this.closeCallback = e;
            this.progressValue = 0;
            this.setProgressBar(null);
            this.startTimer();
            this.bDataLoaded = !1;
            this.bUserLoaded = !1;
            this.enterIndex = 0;
            let i = GameConfig.getCurrentDuanInfo();
            this.robotCount = Math.min(i.aiquantity, GameConfig.PlayerTotal - 1);
            this.refreshAvatarListPos(this.robotCount);
            this.refreshUserEnter('Me ', 'resources/match/icon_avatar.png');
            this.enterIndex++;
            this.loadUserList(this.robotCount);
            this.randomScene();
            this.loadSubpackage('subgame', () => {
                this.loadMap(() => {
                    this.generalData();
                });
            });
        }
        randomScene() {
            let e = 1;
            (e = GameData.battleTimes < GameModel.SceneCount ? GameData.battleTimes + 1 : ex.rand(1, GameModel.SceneCount)), (this.sceneIndex = e);
        }
        refreshAvatarListPos(e) {
            let t = e + 1;
            (this.userBg.width = ee * t + 2 * $ - X),
                (this.userBg.x = (this.content.width - this.userBg.width) / 2),
                this.userNodes.forEach((e, i) => {
                    i < t
                        ? ((e.avatarBg.visible = e.nickname.visible = !0), e.avatarBg.pos($ + ee * i, 30), (e.avatar.skin = ''), e.nickname.pos(e.avatarBg.x, e.avatarBg.y + J + 8), (e.nickname.text = ''))
                        : (e.avatarBg.visible = e.nickname.visible = !1);
                });
        }
        startTimer() {
            Laya.timer.loop(30, this, this.loopProgress);
        }
        loopProgress() {
            this.progressValue += 0.005;
            this.progressValue > 0.99 && (this.progressValue = 0.99);
            this.setProgressBar();
        }
        setProgressBar(e = null) {
            e = null != e ? e : this.progressValue;
            this.progressBar.value = e;
            this.progressLabel.text = 'Loding ' + Math.floor(100 * e) + '%';
        }
        hide() {
            this.visible = this.active = !1;
            j.instance.setUserList(this.srvUserList);
            this.closeCallback && this.closeCallback();
        }
        checkLoadComplete() {
            console.log("MatchNode-----checkLoadComplete" + this.bUserLoaded + this.bDataLoaded);
            this.bUserLoaded && this.bDataLoaded &&
                (Laya.timer.clear(this, this.loopProgress), this.setProgressBar(1), Laya.timer.once(500, this, this.hide));
        }
        loadUserList(e) {
            this.srvUserList = [];
            for (let t = 0; t < e; t++)
                this.srvUserList.push({
                    openid: 'openid' + t,
                    icon: 'resources/match/icon_avatar.png',
                    nickname: 'Enemy8' + ex.rand(1e3, 9999),
                    level: 1
                });
            this.randomUserEnter();
        }
        showLoadUserFail(e, t) { }
        refreshUserEnter(e, t) {
            if ((console.log('user enter:', e), this.enterIndex < this.userNodes.length)) {
                let i = this.userNodes[this.enterIndex];
                (i.nickname.text = e), (i.avatar.skin = t);
            }
        }
        randomUserEnter() {
            this.enterInterval = ex.rand(100, 800);
        }
        onTimeUpdate(e) {
            if (this.enterInterval > 0 && ((this.enterInterval -= e), this.enterInterval <= 0))
                if (this.enterIndex < this.srvUserList.length + 1) {
                    let e = this.enterIndex - 1, t = this.srvUserList[e].nickname, i = this.srvUserList[e].icon;
                    this.refreshUserEnter(t, i), this.enterIndex++, this.randomUserEnter();
                }
                else
                    (this.bUserLoaded = !0), this.checkLoadComplete();
        }
        loadSubpackage(e, t) {
            if (this.bSubpackageLoaded)
                return void (t && t());
            t && t();
        }
        generalData() {
            console.log("MatchNode-----generalData");
            let e = [], t = [], i = [], a = this.sceneIndex, s = 'subgame/sprite3d/Scenes' + a + '/Conventional/Scenes' + a + '.lh';
            e.push({
                url: s,
                alias: Sprite3DType.Scene
            }),
                console.log(s);
            let o = [GameConfig.usingTank], n = [];
            GameConfig.currFightUAV > 0 && n.push(GameConfig.currFightUAV);
            let r = [], l = 0, h = GameConfig.getCurrentDuanInfo();
            for (let e = this.robotCount; e--;) {
                let t = h.aiaction[e];
                if (t) {
                    let e = ex.rand(0, h.tank.length - 1), i = h.tank[e], a = 0;
                    if (l < GameConfig.UAVTotal) {
                        let e = ex.rand(0, h.uav.length - 1);
                        (a = h.uav[e]) > 0 && l++;
                    }
                    if ((r.push({
                        ailogicId: t,
                        tankId: i,
                        uavId: a
                    }),
                        o['includes'](i) || o.push(i),
                        a > 0)) {
                        let e = GameConfig.getUAVInfo(a);
                        n['includes'](e.type) || n.push(e.type);
                    }
                }
            }
            j.instance.setAIList(r),
                console.log('tankIds:', o),
                console.log('uavTypes:', n),
                o.forEach(a => {
                    let s = GameConfig.getTankInfo(a), o = '' + ex.formatNumber(s.level, 2), n = '' + ex.formatNumber(s.type, 2), r = 'subgame/Tanke_Model/Tanke/LayaScene_Chassis_' + n + '/Conventional/' + n + '.lh';
                    this.addTankSprite3D({
                        url: r,
                        alias: Sprite3DType.TankBase,
                        type: s.type
                    }, e);
                    let l = 'subgame/Tanke_Model/PaoTai/LayaScene_Muzzle_' + o + '/Conventional/' + o + '.lh';
                    this.addTankSprite3D({
                        url: l,
                        alias: Sprite3DType.TankTurret,
                        type: a
                    }, e);
                    let h = s.type <= TankType.Consecutive ? BulletType.Normal : s.type, d = 'Tanke_' + ex.formatNumber(h, 2), c = 'subgame/Tank_Effect/' + d + '/LayaScene_Ef_PaoDan/Conventional/Ef_PaoDan.lh';
                    if ((this.addTankSprite3D({
                        url: c,
                        alias: Sprite3DType.Ef_PaoDan,
                        type: h
                    }, e),
                        s.type == TankType.Divide)) {
                        let t = 'subgame/Tank_Effect/Tanke_01/LayaScene_Ef_PaoDan/Conventional/Ef_PaoDan.lh';
                        this.addTankSprite3D({
                            url: t,
                            alias: Sprite3DType.Ef_PaoDan,
                            type: BulletType.Normal
                        }, e);
                    }
                    [Sprite3DType.Ef_QiangKou, Sprite3DType.Ef_Hit].forEach(e => {
                        let i = 'subgame/Tank_Effect/' + d + '/LayaScene_' + e + '/Conventional/' + e + '.lh';
                        this.addPrePlayTankEffectSprite3D(i, t);
                    }),
                        this.addPrePlayTankEffectSprite3D(c, t);
                    let u = 0;
                    (u = s.level <= 12 ? 1 : s.level <= 22 ? 2 : 3) > 0 && !i['includes'](u) && i.push(u);
                }),
                n.forEach(i => {
                    let a = i, s = `Aerocraft${i % 2e3}`, o = 'subgame/uav/Aerocraft/' + s + '.lh';
                    this.addTankSprite3D({
                        url: o,
                        alias: Sprite3DType.Aerocraft,
                        type: a
                    }, e);
                    let n = 'subgame/uav/Effect/LayaScene_Ef_PaoDan/Conventional/Ef_PaoDan.lh';
                    this.addTankSprite3D({
                        url: n,
                        alias: Sprite3DType.Aerocraft_PaoDan,
                        type: 0
                    }, e);
                    let r = GameData.getUAVLevel(a), l = GameConfig.getUAVInfoWithLevel(a, r), h = GameConfig.getSkillInfo(l.skill);
                    if (h && h.cd > 0) {
                        let i = Sprite3DType.Ef_Skill_wurenji, o = 'subgame/uav/Skill/' + s + '/LayaScene_' + i + '/Conventional/' + i + '.lh';
                        if ((this.addTankSprite3D({
                            url: o,
                            alias: Sprite3DType.Aerocraft_PaoDan,
                            type: h.type
                        }, e),
                            this.addPrePlayTankEffectSprite3D(o, t),
                            a != UAVType.HongZha)) {
                            let e = Sprite3DType.Ef_Skill_tanke, i = 'subgame/uav/Skill/' + s + '/LayaScene_' + e + '/Conventional/' + e + '.lh';
                            this.addPrePlayTankEffectSprite3D(i, t);
                        }
                    }
                    [Sprite3DType.Ef_QiangKou, Sprite3DType.Ef_Hit].forEach(e => {
                        let i = 'subgame/uav/Effect/LayaScene_' + e + '/Conventional/' + e + '.lh';
                        this.addPrePlayTankEffectSprite3D(i, t);
                    }),
                        this.addPrePlayTankEffectSprite3D(n, t);
                });
            e.push({
                url: 'subgame/sprite3d/LayaScene_Yingzi/Conventional/Yingzi.lh',
                alias: Sprite3DType.TankShadow
            });
            let d = this.loadMaterials(i);
            this.prePlayAllEffects(t, () => {
                Laya.timer.once(1e3, this, () => {
                    this.loadAllSprite3D(e, () => {
                        if (!this.destroyed) {
                            this.bDataLoaded = !0;
                            GameUI.instance.show3DScene(e[0].sprite3D);
                            let t = GameUI.instance.initGameManager();
                            console.log("prePlayAllEffects :" + t);
                            t.setMaterials(d),
                                t.setSprite3DList(e),
                                this.checkLoadComplete();
                        }
                        else {
                            console.log("prePlayAllEffects destroyed");
                        }
                    });
                });
            });
        }
        addTankSprite3D(e, t) {
            let i = !1;
            for (let a = 0; a < t.length; a++)
                if (t[a].url == e.url) {
                    i = !0;
                    break;
                }
            i || t.push(e);
        }
        addPrePlayTankEffectSprite3D(e, t) {
            let i = !1;
            for (let a = 0; a < t.length; a++)
                if (t[a] == e) {
                    i = !0;
                    break;
                }
            i || t.push(e);
        }
        loadAllSprite3D(e, t) {
            var i = this;
            let a = function (t, s) {
                t < e.length
                    ? Laya.Sprite3D.load(e[t].url, Laya.Handler.create(i, i => {
                        i ? ((e[t].sprite3D = i), a(++t, s)) : console.log('load sprite3d fail:' + e[t].url);
                    }))
                    : s();
            };
            a(0, () => {
                t && t();
            });
        }
        loadMap(e) {
            let t = 'json', i = `subgame/map/RoadMap${this.sceneIndex}.${t}`;
            console.log('mapUrl:', i);
            var a = this;
            Laya.loader.load(i, Laya.Handler.create(a, t => {
                t ? (MapManager.createMap(i, GameUI.instance.scene3d), e && e()) : console.log('load map fail.');
            }));
        }
        prePlayAllEffects(e, t) {
            var i = this;
            let a = function (t, s) {
                t < e.length
                    ? Laya.Sprite3D.load(e[t], Laya.Handler.create(i, o => {
                        o && !i.destroyed
                            ? (GameUI.instance.scene3d.addChild(o),
                                Utils.playParticle(o),
                                Laya.timer.once(800, this, () => {
                                    o.destroy();
                                }),
                                a(++t, s))
                            : console.log('load effect fail:' + e);
                    }))
                    : s();
            };
            a(0, () => {
                t && t();
            });
        }
        loadMaterials(e) {
            let t = [], i = [];
            return (e.forEach(e => {
                let a = 'tank0' + e;
                t.push('subgame/materials/' + a + '.png'),
                    i.push({
                        material: new Laya.BlinnPhongMaterial(),
                        alias: a
                    });
            }),
                Laya.loader.load(t, Laya.Handler.create(this, e => {
                    e &&
                        i.forEach((e, i) => {
                            (e.material.albedoTexture = Laya.Loader.getRes(t[i])), (e.material.albedoIntensity = 1.3), (e.material.shininess = 0.3);
                        });
                })),
                i);
        }
    }

    const ie = 1e4;
    class ae extends Laya.Sprite {
        constructor() {
            super(...arguments);
            this.circle = null;
            this.progressBar = null;
            this.labelTime = null;
            this.btnRevive = null;
            this.btnContinue = null;
            this.videoIcon = null;
            this.validTime = 0;
            this.paused = !1;
            this.reviveCallback = null;
        }
        onAwake() {
            (this.pageName = '复活'), (this.width = Laya.stage.width), (this.height = Laya.stage.height);
            let e = this.getChildByName('bg');
            (e.width = this.width), (e.height = this.height);
            let t = this.getChildByName('content');
            (t.x = (this.width - t.width) / 2),
                (this.circle = t.getChildByName('circle')),
                (this.progressBar = new Laya.Sprite()),
                this.progressBar.pos(0, 0),
                (this.circle.mask = this.progressBar),
                (this.labelTime = t.getChildByName('label_time')),
                (this.labelTime.font = GameModel.TIMER_REVIVE),
                (this.btnRevive = t.getChildByName('btn_revive')),
                (this.btnContinue = t.getChildByName('btn_continue')),
                (this.btnRevive.clickHandler = new Laya.Handler(this, this.onReviveClick)),
                (this.btnContinue.clickHandler = new Laya.Handler(this, this.onContinueClick)),
                (this.btnRevive.tag = '立即复活'),
                (this.videoIcon = this.btnRevive.getChildAt(0)),
                (this.visible = this.active = !1);
            Laya.timer.frameLoop(1, this, this.onUpdate);
        }
        showWithCallback(e) {
            platform.hideNativeSmallAd();
            (this.reviveCallback = e), (this.visible = this.active = !0);
            this.videoIcon.skin = 'resources/game/icon_video_tt.png';
            this.validTime = ie;
            this.refreshProgressBar();
        }
        close(e) {
            (this.visible = this.active = !1), this.reviveCallback(e);
        }
        onContinueClick() {
            this.close(!1);
            SoundManager.playSound(Model.AudioUrl.Click);
        }
        onReviveClick() {
            let e = this.btnRevive.tag;
            let self = this;
            platform.playVideo(() => {
                (self.paused = !0), (self.paused = !1), self.close(!0);
                platform.showNativeSmallAd();
            });
            SoundManager.playSound(Model.AudioUrl.Click);
        }
        onUpdate() {
            ex.isValidTimerDelta() && this.visible && this.validTime >= 0 && !this.paused && ((this.validTime -= Laya.timer.delta), this.refreshProgressBar(), this.validTime <= 0 && this.close(!1));
        }
        refreshProgressBar() {
            let e = Math.ceil(this.validTime / 1e3);
            (this.labelTime.text = '' + e), e <= ie / 1e3 && (this.btnContinue.visible = !0);
            let t = ((ie - this.validTime) / ie) * 360 - 90;
            this.progressBar.graphics.clear(), this.progressBar.graphics.drawPie(this.circle.width / 2, this.circle.height / 2, this.circle.height, t, 270, '#ff0000');
        }
    }

    class LoadUI extends ui.scene.LoadSceneUI {
        constructor() {
            super(...arguments);
            this.progressValue = 0;
            this.subProgressValue = 0;
        }
        onAwake() {
            (this.pageName = '加载'),
                (this.width = Laya.stage.width),
                (this.height = Laya.stage.height),
                (this.background.width = Laya.stage.width),
                (this.background.height = Laya.stage.height),
                (this.progressBar.value = 0),
                this.setSubProgressBar(0),
                this.setProgressBar(),
                this.startTimer();
            this.loadSubpackage('resources', () => {
                this.loadAllBitmapFont(0, Model.FontAssets, () => {
                    this.loadGameConfig(() => {
                        this.loadGameData(() => {
                            this.loadSubpackage('subgame', () => {
                                (this.progressValue = 0.99), this.setProgressBar(), this.startGame();
                            });
                        });
                    });
                });
            });
        }
        startTimer() {
            Laya.timer.loop(30, this, () => {
                (this.progressValue += 0.004),
                    this.progressValue > 0.99 && (this.progressValue = 0.99),
                    this.setProgressBar(),
                    (this.subProgressValue += 0.03),
                    this.setSubProgressBar(this.subProgressValue),
                    this.subProgressValue >= 1 && (this.subProgressValue = 0);
            });
        }
        setSubProgressBar(e) {
            if (e > 98) {
                platform.loadComplete();
            }
            this.subprogressBar.value = e;
        }
        setProgressBar() {
            let e = this.progressValue;
            this.progressBar.value > e && (e = this.progressBar.value), (this.progressBar.value = e), (this.progressBarLabel.text = Math.floor(100 * e) + '%'), e >= 0.99 && this.setSubProgressBar(1);
        }
        startGame() {
            Laya.timer.clearAll(this);
            Laya.Scene.open('scene/GameScene.scene');
        }
        onDestroy() {
            console.log('LoadUI onDestroy'), Utils.clearRes('bin/load');
        }
        loadSubpackage(e, t) {
            if (GameInfo.isNewUser && 'subgame' == e)
                return void (t && t());
            t && t();
        }
        loadAllBitmapFont(e, t, i) {
            if (e < t.length) {
                let a = t[e];
                Utils.loadBitmapFont(a.url, a.fontName, () => {
                    this.loadAllBitmapFont(++e, t, i);
                });
            }
            else
                i();
        }
        loadGameConfig(e) {
            this.loadLocalGameConfig(e);
        }
        loadLocalGameConfig(e) {
            let t = [];
            Model.ExcelConfigUrls.forEach(e => {
                t.push({
                    key: e.key,
                    url: `subremote/excel/${e.key}.csv`,
                    type: Laya.Loader.TEXT
                });
            }),
                Laya.loader.load(t, Laya.Handler.create(this, i => {
                    i &&
                        (t.forEach(e => {
                            let t = Laya.Loader.getRes(e.url);
                            'AdConfig' == e.key
                                ? GameConfig.setAdConfig(t)
                                : 'GameConfig' == e.key
                                    ? GameConfig.setGameConfig(t)
                                    : 'TankGrow' == e.key
                                        ? GameConfig.setTankGrow(t)
                                        : 'Ailogic' == e.key
                                            ? GameConfig.setAilogic(t)
                                            : 'TankCoin' == e.key
                                                ? GameConfig.setTankCoin(t)
                                                : 'UAVGrow' == e.key
                                                    ? GameConfig.setUAV(t)
                                                    : 'UAVSkill' == e.key
                                                        ? GameConfig.setUAVSkill(t)
                                                        : 'Duan' == e.key && GameConfig.setDuan(t);
                        }),
                            e && e());
                }));
        }
        loadGameData(e) {
            this.login(() => {
                e();
            });
        }
        login(e) {
            let t = G.getStorageSync('GameData');
            console.log(t, 'GameDataGameDataGameData');
            return this.initUserData(t), void (e && e());
        }
        initUserData(e) {
            '' != e || (GameInfo.isNewUser = !0);
            GameData.initWithData(e);
            GameConfig.initUserData();
        }
    }

    class FreeBox extends y {
        static show() {
            Laya.loader.load('prefab/FreeBox.prefab', Laya.Handler.create(this, e => {
                if (e) {
                    let t = new Laya.Prefab();
                    t.json = e;
                    let i = t.create();
                    (i.zOrder = 1), Laya.stage.addChildAt(i, Laya.stage.numChildren);
                }
            }), null, Laya.Loader.JSON);
        }
        onAwake() {
            (this.pageName = '高级坦克'),
                this.enterPage({
                    page: this.pageName
                }),
                super.onAwake(),
                (Laya.Tween.from(this.light, {
                    rotation: 360
                }, 15e3).repeat = 0),
                (this.btnGet.clickHandler = new Laya.Handler(this, this.onGetClick));
            let e = this.btnGet.getChildAt(0);
            e.skin = 'resources/prefab/icon_video_tt.png';
        }
        showOpenBoxSpine(e) {
            let t = new Laya.Skeleton();
            t.load('resources/spine/openbox/skeleton.sk', Laya.Handler.create(this, () => {
                t.pos(this.iconBox.x, this.iconBox.y),
                    this.content.addChild(t),
                    t.play(0, !1),
                    t.player.on(Laya.Event.STOPPED, this, () => {
                        console.log('STOPPED'), (t.visible = !1), t.templet.destroy(), e && e();
                    }),
                    (this.iconBox.visible = !1);
            }));
        }
        onCloseClick() {
            super.onCloseClick();
            platform.showInterstitialAd();
        }
        close() {
            super.close();
        }
        onGetClick() {
            let self = this;
            platform.playVideo(() => {
                self.requestReward(), self.close();
            });
        }
        requestReward() {
            LobbyNode.instance.randomFreeBox(AirdropType.Normal);
        }
    }

    class FreeGrade extends y {
        constructor() {
            super(...arguments);
            this.tankId = null;
            this.seatNode = null;
        }
        static show(e, t) {
            platform.showNativeAd(100);
            let i = 'prefab';
            let a = i + '/FreeGrade.prefab';
            Laya.loader.load(a, Laya.Handler.create(this, i => {
                if (i) {
                    let a = new Laya.Prefab();
                    a.json = i;
                    let s = a.create();
                    (s.zOrder = 1), s.getComponent(FreeGrade).setData(e, t), Laya.stage.addChildAt(s, Laya.stage.numChildren);
                }
            }), null, Laya.Loader.JSON);
        }
        setData(e, t) {
            (this.tankId = e), (this.seatNode = t);
        }
        onAwake() {
            (this.pageName = '免费升级'),
                this.enterPage({
                    page: this.pageName
                }),
                super.onAwake();
            let e = GameConfig.getTankInfo(this.tankId), t = GameConfig.getTankInfo(this.tankId + 1);
            (this.leftIcon.skin = `resources/lobby/tank/${e.level}.png`),
                (this.rightIcon.skin = `resources/lobby/tank/${t.level}.png`),
                (this.btnGrade.clickHandler = new Laya.Handler(this, this.onGradeClick));
            let i = this.btnGrade.getChildAt(0);
            i.skin = 'resources/prefab/icon_video_tt.png';
            this.initOPPO();
        }
        onCloseClick() {
            platform.hideNativeAd();
            super.onCloseClick();
        }
        onGradeClick() {
            let self = this;
            platform.playVideo(() => {
                self.requestReward(),
                    self.close();
            });
        }
        requestReward() {
            this.seatNode.upgradeTank(!1);
        }
    }

    class RewardBox extends y {
        constructor() {
            super(...arguments);
            this.closeCallback = null;
        }
        static show(e) {
            platform.showNativeAd(100);
            let t = 'prefab';
            let i = t + '/RewardBox.prefab';
            Laya.loader.load(i, Laya.Handler.create(this, t => {
                if (t) {
                    let i = new Laya.Prefab();
                    i.json = t;
                    let a = i.create();
                    (a.zOrder = 1), a.getComponent(RewardBox).setData(e), Laya.stage.addChildAt(a, Laya.stage.numChildren);
                }
            }), null, Laya.Loader.JSON);
        }
        setData(e) {
            this.closeCallback = e;
        }
        onAwake() {
            (this.pageName = '空投箱'),
                this.enterPage({
                    page: this.pageName
                }),
                super.onAwake(),
                (Laya.Tween.from(this.light, {
                    rotation: 360
                }, 15e3).repeat = 0),
                (this.btnGet.clickHandler = new Laya.Handler(this, this.onGetClick)),
                (this.btnGet.tag = '领取');
            let e = this.btnGet.getChildAt(0);
            e.skin = 'resources/prefab/icon_video_tt.png';
        }
        showOpenBoxSpine(e) {
            let t = new Laya.Skeleton();
            t.load('resources/spine/openbox/skeleton.sk', Laya.Handler.create(this, () => {
                t.pos(this.iconBox.x, this.iconBox.y),
                    this.content.addChild(t),
                    t.play(0, !1),
                    t.player.on(Laya.Event.STOPPED, this, () => {
                        console.log('STOPPED'), (t.visible = !1), t.templet.destroy(), e && e();
                    }),
                    (this.iconBox.visible = !1);
            }));
        }
        close() {
            platform.hideNativeAd();
            super.close(), this.closeCallback && this.closeCallback();
        }
        onCloseClick() {
            super.onCloseClick();
            platform.showInterstitialAd();
        }
        onGetClick() {
            let self = this;
            platform.playVideo(() => {
                self.requestReward();
                self.close();
            });
        }
        requestReward() {
            LobbyNode.instance.randomAirDrop(!0);
        }
    }

    class he extends Laya.Image {
        constructor() {
            super(...arguments);
            this.tankId = 0;
            this.info = null;
            this.profitTime = 0;
            this.mPoint = new Laya.Point();
        }
        static create(e) {
            let t = new he();
            return (t.anchorX = t.anchorY = 0.5), (t.zOrder = 1), t.size(115, 89), t.add(e), t;
        }
        onAwake() {
            this.mPoint.setTo(this.x, this.y);
            this.parent.localToGlobal(this.mPoint);
        }
        onUpdate(e) {
            if (((this.profitTime += e),
                this.profitTime >= 5e3 && ((this.profitTime = 0), this.info && (GameData.addGold(this.info.profit), LobbyNode.instance.showGetGoldAni(), this.parent.visible)))) {
                let e = '+' + GA.formatNumber(this.info.profit);
                Utils.showTipsLabel(e, GameModel.WHITE_GOLD, ex.v2temp(this.mPoint.x, this.mPoint.y), null);
            }
        }
        refresh() {
            if (this.tankId > 0) {
                this.info = GameConfig.getTankInfo(this.tankId);
                this.profitTime = 0;
                this.skin = 'resources/lobby/tank/' + this.info.level + '.png';
                this.visible = !0;
            }
            else {
                this.visible = !1;
            }
        }
        showDropBox() {
            (this.visible = !0), (this.skin = 'resources/lobby/icon_dropbox.png');
        }
        add(e) {
            (this.tankId = e), this.refresh();
        }
        remove() {
            (this.tankId = 0), (this.info = null), (this.profitTime = 0), (this.visible = !1), (this.skin = '');
        }
        upgrade() {
            this.tankId++, this.refresh();
        }
    }

    const de = -40;
    class ce extends Laya.Image {
        constructor() {
            super(...arguments);
            this.rect = null;
            this.seatIdx = 0;
            this.tank = null;
            this.dropBoxNum = 0;
            this.dropBoxType = 0;
            this.levelLabel = null;
        }
        static create() {
            let e = new ce();
            return (e.anchorX = e.anchorY = 0.5), (e.skin = 'resources/lobby/tank_base.png'), e;
        }
        get isBox() {
            return this.dropBoxNum > 0;
        }
        get isEmpty() {
            return !this.isBox && !this.hasTank();
        }
        onAwake() {
            let e = GameData.seatList[this.seatIdx], t = he.create(e);
            t.pos(this.x, this.y + de), this.parent.addChildAt(t, this.parent.numChildren), (this.tank = t);
            let i = new Laya.Label();
            i.pos(this.x, this.y), i.size(50, 30), (i.anchorX = 0.5), (i.font = GameModel.WHITE_GOLD), (i.align = 'center'), this.parent.addChild(i), (this.levelLabel = i), this.refreshLevel();
        }
        refreshLevel() {
            var e, t;
            (this.levelLabel.text = '' + (null !== (t = null === (e = this.tank.info) || void 0 === e ? void 0 : e.level) && void 0 !== t ? t : '')), (this.levelLabel.visible = this.tank.visible);
        }
        onUpdate(e) {
            this.hasTank() && this.tank.onUpdate(e);
        }
        setDropbox(e, t) {
            (this.dropBoxNum = e), (this.dropBoxType = t);
        }
        showDropBox() {
            this.tank.showDropBox();
        }
        openBox() {
            this.addTank(this.dropBoxNum), this.dropBoxType == AirdropType.Double && FreeBox.show(), (this.dropBoxNum = 0), (this.dropBoxType = 0);
        }
        containsPoint(e, t) {
            return !!this.rect && this.rect.contains(e, t);
        }
        equalTank(e) {
            return !(!e.hasTank() || e.tank.tankId != this.tank.tankId);
        }
        addTank(e) {
            this.tank.add(e), this.refreshLevel(), this.resetTankPos(), this.refreshData();
        }
        hasTank() {
            return this.tank && this.tank.visible && this.tank.tankId > 0;
        }
        isMaxTank() {
            return this.tank.tankId >= GameConfig.TankMaxID;
        }
        selecteTank() {
            this.tank.zOrder = 2;
        }
        setTankPos(e, t) {
            this.tank.pos(e, t);
        }
        resetTankPos() {
            this.tank.pos(this.x, this.y + de), (this.tank.zOrder = 1);
        }
        changeTank(e) {
            (this.tank = e), this.resetTankPos(), this.refreshLevel(), this.refreshData();
        }
        removeTank() {
            this.resetTankPos(), this.tank.remove(), this.refreshLevel(), this.refreshData();
        }
        upgradeTank(e) {
            if ((this.tank.upgrade(), this.refreshLevel(), this.refreshData(), this.tank.tankId > GameData.unlockTankId))
                GameData.unlockTank(this.tank.tankId), GameData.changeUseTank(this.tank.tankId), console.log('unlock tank:', GameData.unlockTankId), MSGEvent.sendEvent(MSGEvent.UNLOCK_TANK, null);
            else if (e) {
                let e = this.tank.tankId;
                e < GameData.unlockTankId && ex.rand(1, 100) <= GameConfig.GameConf.upadd && FreeGrade.show(e, this);
            }
        }
        sellTank() {
            let e = GameConfig.getTankPrice(this.tank.tankId) * (this.tank.info.sell / 100);
            GameData.addGold(e), this.removeTank(), LobbyNode.instance.showGetGoldAni();
        }
        refreshData() {
            GameData.seatList[this.seatIdx] = this.tank.tankId;
        }
    }

    const ue = 122, me = 52, ge = ue, pe = ue, fe = ge + 40;
    class MergeNode extends Laya.Sprite {
        constructor() {
            super(...arguments);
            this.lobbyNode = null;
            this.selectedIndex = -1;
            this.bMerging = !1;
            this.seatList = [];
            this.mergeSpine = null;
            this.airdropTime = 0;
            this.airdropShown = !1;
            this.rewardBoxNodeShown = !1;
            this.airdropSpine = null;
            this.leftDropList = null;
            this.airBoxDownTemplet = null;
            this.mTouchPoint = new Laya.Point();
            this.m_TouchId = -1;
        }
        onAwake() {
            this.pageName = '大厅';
            this.initListener();
            this.loadMergeSpine();
            this.loadAirDrop();
            this.loadAirBoxDownSpine();
        }
        initialize(e) {
            (this.lobbyNode = e), this.initGame();
        }
        initGame() {
            for (let e = 0; e < GameModel.SEAT_COUNT; e++) {
                let t = e % GameModel.SEAT_MAP_COL, i = Math.floor(e / GameModel.SEAT_MAP_COL), a = ge / 2 + fe * t, s = 100 + fe * i, o = ce.create();
                (o.seatIdx = e), o.pos(a, s), o.size(ue, me), this.addChild(o), this.seatList.push(o), this.mTouchPoint.setTo(a, s), this.localToGlobal(this.mTouchPoint);
                let n = this.mTouchPoint.x - ge / 2, r = this.mTouchPoint.y - pe + me / 2;
                o.rect = new Laya.Rectangle(n, r, ge, pe);
            }
        }
        loadAirDrop() {
            let e = new Laya.Skeleton();
            console.log('loadAirDroploadAirDroploadAirDrop');
            e.load('resources/spine/airdrop/skeleton.sk', Laya.Handler.create(this, () => {
                e.pos(0, -200);
                Laya.stage.addChild(e);
                e.play(0, !0);
                this.airdropSpine = e;
                console.log('load airdop');
                let t = new Laya.Button();
                t.stateNum = 1;
                t.size(150, 200);
                t.pos(-70, -150);
                t.clickHandler = new Laya.Handler(this, this.onAirDropClick);
                e.addChild(t);
            }));
        }
        loadAirBoxDownSpine() {
            let e = new Laya.Templet();
            e.on(Laya.Event.COMPLETE, this, () => {
                this.airBoxDownTemplet = e;
            });
            e.loadAni('resources/spine/boxdown/skeleton.sk');
        }
        loadMergeSpine() {
            let e = new Laya.Templet();
            e.on(Laya.Event.COMPLETE, this, () => {
                let t = e.buildArmature(0);
                this.addChild(t),
                    t.play(0, !1),
                    t.player.on(Laya.Event.STOPPED, this, () => {
                        console.log('STOPPED');
                        t.visible = !1;
                    }),
                    (t.zOrder = 2),
                    (t.visible = !1),
                    (this.mergeSpine = t);
            }),
                e.loadAni('resources/spine/merge/skeleton.sk');
        }
        initListener() {
            this.parent.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown),
                this.parent.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove),
                this.parent.on(Laya.Event.MOUSE_UP, this, this.onMouseUp),
                this.parent.on(Laya.Event.MOUSE_OUT, this, this.onMouseOut),
                Laya.timer.frameLoop(1, this, this.onUpdate);
        }
        removeListener() {
            this.parent.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown),
                this.parent.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove),
                this.parent.off(Laya.Event.MOUSE_UP, this, this.onMouseUp),
                this.parent.off(Laya.Event.MOUSE_OUT, this, this.onMouseOut),
                Laya.timer.clear(this, this.onUpdate),
                MSGEvent.offAll(this.pageName);
        }
        onDisable() {
            this.removeListener(),
                this.airdropSpine && (this.airdropSpine.templet.destroy(), this.airdropSpine.destroy()),
                this.mergeSpine && (this.mergeSpine.stop(), this.mergeSpine.templet.destroy()),
                this.airBoxDownTemplet && this.airBoxDownTemplet.destroy();
        }
        getEmptySeat() {
            for (let e = 0; e < this.seatList.length; e++)
                if (this.seatList[e].isEmpty)
                    return this.seatList[e];
            return null;
        }
        onUpdate() {
            if (!ex.isValidTimerDelta())
                return;
            let e = Laya.timer.delta;
            for (let t = this.seatList.length; t--;) {
                if ((this.seatList[t].onUpdate(e), this.leftDropList && this.leftDropList.length > 0)) {
                    let e = this.getEmptySeat();
                    e && (this.showAirDropAnimate(e, this.leftDropList[0], AirdropType.Normal), this.leftDropList.splice(0, 1));
                }
            }
            this.airdropSpine && this.visible != this.airdropSpine.visible && (this.airdropSpine.visible = this.visible),
                GameData.unlockTankId >= GameConfig.GameConf.rebox.tankId &&
                    !this.airdropShown &&
                    !this.rewardBoxNodeShown &&
                    ((this.airdropTime += e), this.airdropTime >= 1e3 * GameConfig.GameConf.rebox.refreshtime && ((this.airdropTime = 0), (this.airdropShown = !0), this.showAirDrop()));
        }
        onAirDropClick() {
            console.log('onAirDropClick');
            this.rewardBoxNodeShown = !0;
            RewardBox.show(() => {
                this.rewardBoxNodeShown = !1;
            });
            SoundManager.playSound(Model.AudioUrl.Click);
        }
        showAirDrop() {
            let e = ex.rand(1, 3), t = 0;
            (t = 1 == e ? Laya.stage.width / 2 - 500 : 2 == e ? Laya.stage.width / 2 - 150 : Laya.stage.width / 2 + 500),
                this.airdropSpine.pos(t, -200),
                Laya.Tween.to(this.airdropSpine, {
                    y: Laya.stage.height + 200
                }, 15e3, null, Laya.Handler.create(this, () => {
                    this.airDropMoveEnd();
                }));
        }
        airDropMoveEnd() {
            this.airdropShown = !1;
        }
        showAirBoxDownAni(e, t) {
            let i = this.airBoxDownTemplet.buildArmature(0);
            i.pos(e, t),
                (i.zOrder = 2),
                this.addChild(i),
                i.play(0, !1),
                i.player.on(Laya.Event.STOPPED, this, () => {
                    console.log('STOPPED'), i.destroy();
                });
        }
        showMergeAni(e, t) {
            (this.mergeSpine.visible = !0), this.mergeSpine.pos(e, t), this.mergeSpine.play(0, !1);
        }
        buy(e) {
            let t = this.getEmptySeat();
            if (t) {
                let i = GameConfig.getTankPrice(e);
                if (GameData.payGold(i))
                    return t.addTank(e), GameData.buyTank(e), this.getEmptySeat() && ex.rand(1, 100) <= GameConfig.GameConf.boxadd && this.lobbyNode.randomFreeBox(AirdropType.Double), !0;
                FreeGold.show(), SoundManager.playSound(Model.AudioUrl.GoldEnough);
            }
            return !1;
        }
        showAirDropList(e, t, i) {
            let a = 0;
            this.seatList.forEach((i, s) => {
                i.isEmpty && a < e.length && (this.showAirDropAnimate(i, e[a], t, 100 * a), a++);
            }),
                a > 0 && e.splice(0, a),
                e.length > 0 && (this.leftDropList = e),
                i && this.airDropMoveEnd();
        }
        showAirDropAnimate(e, t, i, a = 0) {
            e.setDropbox(t, i);
            let s = Laya.Pool.getItemByClass('tipsDrop', Laya.Image);
            (s.skin = 'resources/lobby/icon_dropbox.png'),
                (s.anchorX = 0.5),
                (s.anchorY = 1),
                s.pos(e.x, e.y - 700),
                this.addChild(s),
                Laya.Tween.to(s, {
                    y: e.y
                }, 800, null, Laya.Handler.create(null, () => {
                    s.removeSelf();
                    Laya.Pool.recover('tipsDrop', s);
                    e.showDropBox();
                    this.showAirBoxDownAni(e.x, e.tank.y);
                }), a);
        }
        exchangeTank(e, t) {
            let i = e.tank;
            e.changeTank(t.tank), t.changeTank(i);
        }
        mergeTank(e, t) {
            GuideUtils.showStep == Model.GuideStep.Merge && GuideUtils.destroy(),
                e.setTankPos(t.x - 30, t.tank.y),
                t.setTankPos(t.x + 30, t.tank.y),
                TimeLine.tween(e.tank)
                    .to(300, {
                    x: t.x - 80
                })
                    .to(300, {
                    x: t.x
                })
                    .start(null),
                (this.bMerging = !0),
                TimeLine.tween(t.tank)
                    .to(300, {
                    x: t.x + 80
                })
                    .to(300, {
                    x: t.x
                })
                    .callEnd(() => {
                    e.removeTank(), t.upgradeTank(!0), (this.bMerging = !1), this.showMergeAni(t.x, t.tank.y), SoundManager.playSound(Model.AudioUrl.Merge);
                })
                    .start(null);
        }
        getHitNode(e = null, t = null) {
            (e = null != e ? e : Laya.stage.mouseX), (t = null != t ? t : Laya.stage.mouseY);
            for (let i = 0; i < this.seatList.length; i++) {
                let a = this.seatList[i];
                if (a.containsPoint(e, t))
                    return a;
            }
            return null;
        }
        onMouseDown(e) {
            if (-1 == this.m_TouchId) {
                this.m_TouchId = e.touchId;
                let t = this.getHitNode();
                t &&
                    (t.isBox
                        ? (t.openBox(), this.showMergeAni(t.x, t.y))
                        : t.hasTank() && ((this.selectedIndex = t.seatIdx), t.selecteTank(), this.refreshMovePos(), this.lobbyNode.showSellButton(t.tank.info), e.stopPropagation()));
            }
        }
        onMouseMove(e) {
            this.m_TouchId == e.touchId && this.refreshMovePos();
        }
        onMouseUp(e) {
            this.m_TouchId == e.touchId && this.touchEnd();
        }
        onMouseOut(e) {
            this.m_TouchId == e.touchId && this.touchEnd();
        }
        refreshMovePos() {
            if (this.selectedIndex >= 0) {
                this.mTouchPoint.setTo(Laya.stage.mouseX, Laya.stage.mouseY), this.globalToLocal(this.mTouchPoint), this.seatList[this.selectedIndex].setTankPos(this.mTouchPoint.x, this.mTouchPoint.y);
            }
        }
        touchEnd() {
            if (this.selectedIndex >= 0) {
                let e = this.seatList[this.selectedIndex], t = this.getHitNode();
                if (!t || this.bMerging || t.isBox || t.seatIdx == this.selectedIndex) {
                    let t = Laya.stage.mouseX, i = Laya.stage.mouseY;
                    this.lobbyNode.containsSell(t, i) ? e.sellTank() : e.resetTankPos();
                }
                else
                    e.equalTank(t) && !e.isMaxTank() ? this.mergeTank(e, t) : this.exchangeTank(e, t);
                this.lobbyNode.hideSellButton(), (this.selectedIndex = -1);
            }
            this.m_TouchId = -1;
        }
    }

    class TankShopItem extends Laya.Box {
        constructor() {
            super(...arguments);
            this.lock_bg = null;
            this.icon_lock = null;
            this.lock_label = null;
            this.icon_tank = null;
            this.gold_label = null;
            this.level_label = null;
            this.itemId = 0;
        }
        onAwake() {
            (this.lock_bg = this.getChildByName('lock_bg')),
                (this.icon_lock = this.getChildByName('icon_lock')),
                (this.lock_label = this.getChildByName('lock_label')),
                (this.icon_tank = this.getChildByName('icon_tank')),
                (this.gold_label = this.getChildByName('gold_label')),
                (this.level_label = this.getChildByName('level_label')),
                (this.gold_label.font = GameModel.WHITE_GOLD),
                (this.level_label.font = GameModel.WHITE_GOLD),
                this.on(Laya.Event.CLICK, this, this.onClick);
        }
        updateItem(e) {
            this.itemId = e;
            let t = GameConfig.TankList[e], i = GameConfig.getTankPrice(t.id);
            (this.gold_label.text = GA.formatNumber(i)), (this.level_label.text = '' + t.level), (this.icon_tank.skin = 'resources/lobby/tank/' + t.level + '.png');
            let a = !1;
            t.id > GameData.unlockTankId && ((a = !0), (this.lock_label.text = 'LV.' + t.level + ' unlocked')), (this.lock_bg.visible = this.icon_lock.visible = this.lock_label.visible = a);
        }
        onClick() {
            MSGEvent.sendEvent(MSGEvent.ITEM_CLICK, this.itemId);
        }
    }

    class RoleItem extends Laya.Box {
        constructor() {
            super(...arguments);
            this.itemBg = null;
            this.icon_tank = null;
            this.name_label = null;
            this.selected = null;
        }
        onAwake() {
            this.itemBg = this.getChildByName('item_bg');
            this.icon_tank = this.getChildByName('icon_tank');
            this.name_label = this.getChildByName('name_label');
            this.selected = this.getChildByName('selected');
        }
        updateItem(e, t) {
            let i = GameConfig.TankList[e];
            i.id == GameData.currTank ? (this.itemBg.skin = 'resources/prefab/role_item_using.png') : (this.itemBg.skin = 'resources/prefab/role_item_bg.png'),
                (this.icon_tank.skin = 'resources/lobby/tank/' + i.level + '.png'),
                (this.name_label.text = 'Level ' + i.level + '\n' + i.name),
                (this.selected.visible = e == t),
                i.id > GameData.unlockTankId ? (this.icon_tank.disabled = !0) : (this.icon_tank.disabled = !1);
        }
        updateUAVItem(e, t) {
            let i = GameModel.UAVList[e], a = GameData.getUAVLevel(i), s = GameConfig.getUAVInfoWithLevel(i, a);
            s.type == GameData.currUAV ? (this.itemBg.skin = 'resources/prefab/role_item_using.png') : (this.itemBg.skin = 'resources/prefab/role_item_bg.png'),
                (this.icon_tank.skin = 'resources/lobby/uav/' + s.typeNum + '.png'),
                (this.name_label.text = 'Level ' + s.level + '\n' + s.name),
                (this.selected.visible = e == t),
                (this.icon_tank.disabled = a <= 0);
        }
    }

    class GameConfig$1 {
        constructor() {
        }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("script/game/GameUI.ts", GameUI);
            reg("script/game/SkillButton.ts", Q);
            reg("script/game/MatchNode.ts", MatchNode);
            reg("script/game/Revive.ts", ae);
            reg("script/load/LoadUI.ts", LoadUI);
            reg("script/prefab/FreeBox.ts", FreeBox);
            reg("script/prefab/FreeGold.ts", FreeGold);
            reg("script/prefab/FreeGrade.ts", FreeGrade);
            reg("script/prefab/FreeTrial.ts", FreeTrial);
            reg("script/game/GameOver.ts", GameOver);
            reg("script/lobby/MergeNode.ts", MergeNode);
            reg("script/lobby/TankShopItem.ts", TankShopItem);
            reg("script/lobby/TankShop.ts", TankShop);
            reg("script/lobby/LobbyNode.ts", LobbyNode);
            reg("script/prefab/RewardBox.ts", RewardBox);
            reg("script/prefab/RoleItem.ts", RoleItem);
            reg("script/prefab/RoleNode.ts", RoleNode);
            reg("script/prefab/SignInNode.ts", SignInNode);
            reg("script/prefab/UAVRestore.ts", UAVRestore);
            reg("script/prefab/Unlock.ts", Unlock);
        }
    }
    GameConfig$1.width = 1280;
    GameConfig$1.height = 720;
    GameConfig$1.scaleMode = "fixedheight";
    GameConfig$1.screenMode = "horizontal";
    GameConfig$1.alignV = "top";
    GameConfig$1.alignH = "left";
    GameConfig$1.startScene = "scene/LoadScene.scene";
    GameConfig$1.sceneRoot = "";
    GameConfig$1.debug = false;
    GameConfig$1.stat = false;
    GameConfig$1.physicsDebug = false;
    GameConfig$1.exportSceneToJson = true;
    GameConfig$1.init();

    class Main {
        constructor() {
            let e = 1, t = 1, i = Laya.Browser.clientWidth / Laya.Browser.clientHeight;
            i < 1.7
                ? ((e = GameConfig$1.width), (t = (GameConfig$1.width * Laya.Browser.clientHeight) / Laya.Browser.clientWidth))
                : i > 1.8
                    ? ((e = (GameConfig$1.height * Laya.Browser.clientWidth) / Laya.Browser.clientHeight), (t = GameConfig$1.height))
                    : ((t = GameConfig$1.height), (e = GameConfig$1.width)),
                console.log('hRatioW:', i);
            if (window['Laya3D'])
                Laya3D.init(GameConfig$1.width, GameConfig$1.height);
            else
                Laya.init(GameConfig$1.width, GameConfig$1.height, Laya['WebGL']);
            Laya['Physics'] && Laya['Physics'].enable();
            Laya['DebugPanel'] && Laya['DebugPanel'].enable();
            Laya.stage.scaleMode = GameConfig$1.scaleMode;
            Laya.stage.screenMode = GameConfig$1.screenMode;
            Laya.stage.alignV = GameConfig$1.alignV;
            Laya.stage.alignH = GameConfig$1.alignH;
            Laya.URL.exportSceneToJson = GameConfig$1.exportSceneToJson;
            if (GameConfig$1.debug || Laya.Utils.getQueryString('debug') == 'true')
                Laya.enableDebugPanel();
            if (GameConfig$1.physicsDebug && Laya['PhysicsDebugDraw'])
                Laya['PhysicsDebugDraw'].enable();
            if (GameConfig$1.stat)
                Laya.Stat.show();
            Laya.ResourceVersion.enable('version.json', Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable('fileconfig.json', Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded(pro) {
            GameConfig$1.startScene && Laya.Scene.open(GameConfig$1.startScene);
        }
    }
    new Main();

}());
