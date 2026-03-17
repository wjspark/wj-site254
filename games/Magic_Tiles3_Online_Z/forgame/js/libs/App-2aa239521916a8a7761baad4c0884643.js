/**
 * Created by qixiaowei on 16/8/8.
 *
 * @version 2.2.1.6
 * @time 2016-12-26
 * Ã¥Å’ÂºÃ¥Ë†Â«Ã¤Âºâ€ cocosÃ¥â€™Å’egretÃ¥Â¼â€¢Ã¦â€œÅ½Ã¥Â¯Â¹minilogoÃ§Å¡â€žÃ¥Å Â Ã¨Â½Â½Ã§Â¼â€œÃ¥Â­ËœÃ¥Â¤â€žÃ§Ââ€ Ã¦â€“Â¹Ã¥Â¼Â
 *
* @version 2.2.1.5
 * @time 2016-09-12
 * Ã¥Â¢Å¾Ã¥Å Â Ã¤Âºâ€¹Ã¤Â»Â¶Ã§Â±Â»Ã¥Å¾â€¹Ã¦Â²Â¡Ã¦Å“â€°Ã¦â€”Â¶Ã§Å¡â€žÃ¥â€¦Â¼Ã¥Â®Â¹
 * Ã¤Â¿Â®Ã¥Â¤ÂMGFrameworkÃ¤Â¸Å½com4jAPIÃ¥ÂÅ’Ã¦â€”Â¶Ã¦Å“â€°Ã¦â€”Â¶Ã¦Â¸Â¸Ã¦Ë†ÂÃ¥Â¤Å¡Ã¦Â¬Â¡Ã¦â€°Â§Ã¨Â¡Å’Ã¤Âºâ€¹Ã¤Â»Â¶Ã©â€”Â®Ã©Â¢Ëœ
 *
 * @version 2.2.1.4
 * @time 2016-08-17
 * Ã¥Â¢Å¾Ã¥Å Â App.debugÃ¦â€”Â¶Ã¨Â¾â€œÃ¥â€¡Âº
 *
 * @version 2.2.1.3
 * @time 2016-08-17
 * App.Fullscreen()Ã¦â€ºÂ´Ã¦â€Â¹Ã¤Â¸ÂºApp.ClickFullscreen()
 *
 * @version 2.2.1.2
 * @time 2016-08-17
 * Ã¥Â¢Å¾Ã¥Å Â App.ClickCredits()
 *
 * @version 2.2.1.2
 * @time 2016-08-11
 * Ã§Â»Å¸Ã¤Â¸â‚¬Ã¥â€˜Â½Ã¥ÂÂ
 * App.ScreenshotEnabled = App.frameworkInfo["HasScreenshot"];
 * App.CreditsEnabled = App.frameworkInfo['showCredits'];
 * App.MoreGamesButtonEnabled = App.frameworkInfo['showMoreGamesButton'];
 * App.FullscreenEnabled = App.frameworkInfo['fullscreenEnabled'];
 *
 * @version 2.2.1.1
 * @time 2016-08-11
 * FIX: Ã¥Å“Â¨Ã©ÂÅ¾Com4jAPIÃ¦Æ’â€¦Ã¥â€ ÂµÃ¤Â¸â€¹Ã¦â€”Â Ã¦Â³â€¢Ã¥Ë†â€¡Ã¦ÂÂ¢Ã¥Å“ÂºÃ¦â„¢Â¯
 *
 * @version 2.2.1
 * @time 2016/08/10
 * Ã¦â€ºÂ´Ã¦â€Â¹App.ChangeScene()Ã¤Â¸ÂºÃ¥Â¸Â¦Ã¥â€ºÅ¾Ã¨Â°Æ’Ã¦â€“Â¹Ã¦Â³â€¢Ã¥Ââ€šÃ¦â€¢Â°
 *
 * @version 2.2.0
 * @time 2016/08/08
 * Ã¥Â¢Å¾Ã¥Å Â App.CreditsEnabled
 * Ã¥Â¢Å¾Ã¥Å Â App.MoreGamesButtonEnabled
 * Ã¥Â¢Å¾Ã¥Å Â App.ContinueGame();
 * Ã¥Â¢Å¾Ã¥Å Â App.LevelFail();
 * Ã¥Â¢Å¾Ã¥Å Â App.LevelWin();
 *
 *
 */
var App = (function () {
    App.VERSION = "2.2.1.6";
    App.debug = true;
    App.frameworkInfo = null;
    App.engine=null;
    App.Doc = null;
    App.miniLogoUrl = "";
    App.instance = null;
    App.PLATFORM_FACEBOOK = "facebook";
    App.PLATFORM_TWITTER = "twitter";
    App.PLATFORM_WEIXIN = "weixin";
    App.PLATFORM_QQ = "qq";
    App.PLATFORM_WEIBO = "weibo";
    App.PLATFORM_GOOGLE_PLUS = "google_plus";
    App.gamename = "-1";
    App.nameid = "-1";
    App.sharemsgs = {};
    App.showmsgs = {};
    App.platforms = [];
    ///Ã¤Â¸ÂºegretÃ§Â¼â€œÃ¥Â­ËœlogoÃ§Â­â€°textureÃ¥â€ºÂ¾Ã§â€°â€¡Ã¨Âµâ€žÃ¦ÂºÂ
    App.textures={};
    App.FullscreenEnabled = false;
    /**
     * Ã¤Â¸â€¹Ã¨Â½Â½Ã¥Â¹Â³Ã¥ÂÂ°Ã¯Â¼Ë†AppStoreÃ¯Â¼Å’ GooglePlay)
     * @type {Array}
     */
    App.apps = [];
    App.language = "";
    /**
     * loadingÃ§â€¢Å’Ã©ÂÂ¢Ã§Å Â¶Ã¦â‚¬Â
     * @type {string}
     */
    App.PREGAME = "pregame";
    /**
     * Ã¥Â·Â²Ã§Â»ÂÃ¨Â¿â€ºÃ¥â€¦Â¥Ã¦Â¸Â¸Ã¦Ë†ÂÃ¤Âºâ€ 
     * @type {string}
     */
    App.INGAME = "ingame";
    /**
     * Ã¦Â¸Â¸Ã¦Ë†ÂÃ§Å Â¶Ã¦â‚¬Â
     * @type {string}
     */
    App.state = App.PREGAME;
    /**
     * LOGOÃ¦ËœÂ¾Ã§Â¤ÂºÃ¦â€“Â¹Ã¥Â¼Â
     * Ã¥Â¯Â¹Ã©Â½ÂÃ¦â€“Â¹Ã¥Â¼Â| NONE=Ã¤Â¸ÂÃ¦ËœÂ¾Ã§Â¤ÂºÃ¯Â¼Å’TL=top left; TM=top middle; TR=top right; BL=bottom left; BM=bottom middle; BR=bottom right; XY=x,y(Ã§Â¤ÂºÃ¤Â¾â€¹100,100)
     * @type {string}
     */
    App.LogoAlign = "NONE";
    /**
     * Ã¦ËœÂ¯Ã¥ÂÂ¦Ã¥ÂÂ¯Ã¤Â»Â¥Ã¦Ë†ÂªÃ¥Â±Â
     * @type {boolean}
     */
    App.ScreenshotEnabled = true;
    /**
     * Ã¦ËœÂ¯Ã¥ÂÂ¦Ã¦ËœÂ¾Ã§Â¤ÂºCredits
     * @type {boolean}
     */
    App.CreditsEnabled = true;
    /**
     * Ã¦ËœÂ¯Ã¥ÂÂ¦Ã¦ËœÂ¾Ã§Â¤Âºmore games button
     * @type {boolean}
     */
    App.MoreGamesButtonEnabled = true;
    function App() {
        if (App.instance) {
            console.log("can not new App again");
        }
        this.onAddToStageHandler();
    };

    var dispatch = function (event) {
        if (App.debug) {
            console.log('%c%s', 'background:yellow;color:green;', event.type);
        }
        MGDelegate.dispatcherEvent(event);
    };

    App.prototype.onAddToStageHandler = function () {
        MGDelegate.isApp = false;
        MGDelegate.addEventListener(MGEvent.FRAMEWORK_INFO_RESPONSE || "FRAMEWORK_INFO_RESPONSE", this.onFrameworkInfoHandler, this);
        MGDelegate.addEventListener(MGEvent.ENTER_GAME || "ENTER_GAME", this.enterGame, this);
        //Ã¨Â¯Â·Ã¦Â±â€šÃ¨Å½Â·Ã¥Ââ€“FRAMEWORKÃ¤Â¿Â¡Ã¦ÂÂ¯
        var evt = new MGEvent(MGEvent.FRAMEWORK_INFO_REQUEST || "FRAMEWORK_INFO_REQUEST");
        evt.data = {"AppVersion": App.VERSION};
        dispatch(evt);
        //Ã©â‚¬Å¡Ã§Å¸Â¥Ã¦Â¸Â¸Ã¦Ë†ÂÃ¥Â·Â²Ã§Â»ÂÃ¦Â·Â»Ã¥Å Â Ã¥Ë†Â°Ã¨Ë†Å¾Ã¥ÂÂ°
        dispatch(new MGEvent(MGEvent.ADDED_TO_STAGE || "ADDED_TO_STAGE"));
    };
    ///Ã¨Å½Â·Ã¥Ââ€“Ã¦Â¡â€ Ã¦Å¾Â¶Ã§Å¡â€žÃ¤Â¿Â¡Ã¦ÂÂ¯
    App.prototype.onFrameworkInfoHandler = function (event) {
        MGDelegate.removeEventListener(MGEvent.FRAMEWORK_INFO_RESPONSE || "FRAMEWORK_INFO_RESPONSE", this.onFrameworkInfoHandler, this);
        App.frameworkInfo = event.data;
        if (App.frameworkInfo) {
            console.log("AppVersion: " + App.VERSION);
        }
        App.debug = App.frameworkInfo['debug'];

        if (window.location.hostname == 'localhost'
            || window.location.hostname == '127.0.0.1') {
            App.debug = true;
        }

        App.gamename = App.frameworkInfo["gamename"];
        App.nameid = App.frameworkInfo["nameid"];
        App.language = App.frameworkInfo["language"] || 'en';
        App.sharemsgs = App.frameworkInfo["sharemsgs"] || [];
        App.showmsgs = App.frameworkInfo["showmsgs"] || [];

        App.ScreenshotEnabled = App.frameworkInfo["HasScreenshot"];
        App.CreditsEnabled = App.frameworkInfo.hasOwnProperty("showCredits") ? App.frameworkInfo['showCredits'] : true;
        App.MoreGamesButtonEnabled = App.frameworkInfo.hasOwnProperty("showMoreGamesButton") ? App.frameworkInfo['showMoreGamesButton'] : true;
        App.FullscreenEnabled = App.frameworkInfo.hasOwnProperty("fullscreenEnabled") ? App.frameworkInfo['fullscreenEnabled'] : true;

        for (var p in App.sharemsgs) {
            if (p.substr(0, 4) == "app_") {
                App.apps.push(p);
            }
            else {
                App.platforms.push(p);
            }
        }
        //Ã¨Â¿â€ºÃ¨Â¡Å’Ã¦Å½â€™Ã¥ÂºÂÃ¯Â¼Å’Ã¤Â½Â¿Ã¦Â¯ÂÃ¦Â¬Â¡Ã¦ËœÂ¾Ã§Â¤ÂºÃ©Â¡ÂºÃ¥ÂºÂÃ©Æ’Â½Ã§Â»Å¸Ã¤Â¸â‚¬
        App.platforms.sort();
        App.apps.sort();

        try {
            eval("cc");
            App.engine="cocos";
        } catch (e) {

        }
        try {
            eval("egret");
            App.engine="egret";
        } catch (e) {

        }
        if(!App.engine){
            throw "no such a engine exsit!";
        }
        switch (App.engine){
            case "cocos":
                this.CocosFrameworkInfoHandler();
                break;
            case "egret":
                this.EgretFrameworkInfoHandler();
                break;
        }
    };
    ////CocosÃ¥Â¯Â¹Ã¦Â¡â€ Ã¦Å¾Â¶Ã¨Âµâ€žÃ¦ÂºÂÃ§Å¡â€žÃ¥Â¤â€žÃ§Ââ€ 
    App.prototype.CocosFrameworkInfoHandler=function () {
        if (App.frameworkInfo["miniLogoUrl"]) {
            App.miniLogoUrl = App.frameworkInfo["miniLogoUrl"];

            res.miniLogoUrl = App.miniLogoUrl;
            res_resource.push(App.miniLogoUrl);
            //RES.getResByUrl(App.miniLogoUrl, App.instance["onMiniLogoLoaded"], App.instance);
        }
        var platformLen = App.platforms.length;
        var appLen = App.apps.length;
        var new_key = "";
        var itm;
        var key = "";
        if (platformLen != 0) {
            for (var i = 0; i < platformLen; i++) {
                key = App.platforms[i];
                if (key.indexOf("weixin") < 0) {
                    var url = "res/platform/" + key + ".png";
                    new_key = "$platform_" + key;
                    res[new_key] = url;
                    res_resource.push(url);
                }
            }
        }
        if (appLen != 0) {
            for (var i = 0; i < appLen; i++) {
                key = App.apps[i];
                var url = "res/app/" + key + ".png";
                new_key = "$" + key;
                res[new_key] = url;
                res_resource.push(url);
            }
        }
        var creditsRes = [
            "c_button",
        ];
        var creditsLen = creditsRes.length;
        for (var i = 0; i < creditsLen; i++) {
            key = creditsRes[i];
            var url = "res/credits/" + key + ".png";
            new_key = "$" + key;
            res[new_key] = url;
            res_resource.push(url);
        }
    }
    ////egretÃ¤Â¸Â­logoÃ§Â­â€°Ã¨Âµâ€žÃ¦ÂºÂÃ©Â¢â€žÃ¥Å Â Ã¨Â½Â½
    App.prototype.PreLoadEgretTexture=function (new_key,url) {
        RES.getResByUrl(url, function (texture) {
            //Ã¥Â°â€ Ã¥Å Â Ã¨Â½Â½Ã¥Â®Å’Ã§Å¡â€žÃ¨Âµâ€žÃ¦ÂºÂÃ¨Â¿â€ºÃ¨Â¡Å’Ã¦ËœÂ¾Ã§Â¤Âº
            App.textures[new_key]=texture;
        }, App, RES.ResourceItem.TYPE_IMAGE);
    }
    ////EgretÃ¥Â¯Â¹Ã¦Â¡â€ Ã¦Å¾Â¶Ã¨Âµâ€žÃ¦ÂºÂÃ§Å¡â€žÃ¥Â¤â€žÃ§Ââ€ 
    App.prototype.EgretFrameworkInfoHandler=function () {
        if (App.frameworkInfo["miniLogoUrl"]) {
            App.miniLogoUrl = App.frameworkInfo["miniLogoUrl"];
            if(App.miniLogoUrl.indexOf("office")>-1){
                return;
            }
            this.PreLoadEgretTexture("miniLogoUrl",App.miniLogoUrl);
        }
    }
    ///Ã¦Â¡â€ Ã¦Å¾Â¶Ã©â‚¬Å¡Ã§Å¸Â¥Ã¥ÂÂ¯Ã¤Â»Â¥Ã¥Â¼â‚¬Ã¥Â§â€¹Ã¦Â¸Â¸Ã¦Ë†ÂÃ¤Âºâ€ 
    App.prototype.enterGame = function (event) {
        App.state = App.INGAME;
    };
    /**
     * Ã¥Ë†â€ Ã¤ÂºÂ«Ã¥Ë†Â°Ã¥Â¹Â³Ã¥ÂÂ°
     * @param platform
     * @param score
     * @param level
     * @param percent
     * @constructor
     */
    App.Share = function (platform, score, level, percent) {
        if (score === void 0) {
            score = 0;
        }
        if (level === void 0) {
            level = 0;
        }
        if (percent === void 0) {
            percent = 0;
        }
        if (!App.sharemsgs[platform]) {
//			console.warn("Can not found platform msg: " + platform);
            return;
        }
        var msg = App.sharemsgs[platform];
        msg = msg.replace(/\{nameid\}/g, App.nameid);
        msg = msg.replace(/\{gamename\}/g, App.gamename);
        msg = msg.replace(/\{score\}/g, score + "");
        msg = msg.replace(/\{level\}/g, level + "");
        msg = msg.replace(/\{percent\}/g, percent + "");

        var evt = new MGEvent(MGEvent.SHARE || "SHARE");
        evt.data = {
            "platform": platform,
            "gamename": App.gamename,
            "nameid": App.nameid,
            "msg": msg
        };
        dispatch(evt);
    };
    /**
     * Ã¨Å½Â·Ã¥Ââ€“Ã¦ËœÂ¾Ã§Â¤ÂºÃ§Â±Â»Ã¦â€“â€¡Ã¦Å“Â¬
     * @param language
     * @param score
     * @param percent
     * @returns {string}
     * @constructor
     */
    App.GetShowMsg = function (language, score, level, percent) {
        if (language === void 0) {
            language = App.language;
        }
        if (score === void 0) {
            score = 0;
        }
        if (level === void 0) {
            level = 0;
        }
        if (percent === void 0) {
            percent = 0;
        }
        if (!App.showmsgs[language]) {
            console.warn("can not found show msg: ");
            return;
        }


        App.Share("weixin", score, level, percent);
        var msg = App.showmsgs[language];
        msg = msg.replace(/\{nameid\}/g, App.nameid);
        msg = msg.replace(/\{gamename\}/g, App.gamename);
        msg = msg.replace(/\{score\}/g, score + "");
        msg = msg.replace(/\{percent\}/g, percent + "");
        return msg;
    };
    /**
     * Ã§â€šÂ¹Ã¥â€¡Â»AppÃ¤Â¸â€¹Ã¨Â½Â½
     * @param platform
     * @constructor
     */
    App.DownloadApp = function (platform) {
        var evt = new MGEvent(MGEvent.DOWNLOAD_APP || "DOWNLOAD_APP");
        evt.data = {"platform": platform};
        dispatch(evt);
    };
    /**
     * Ã¥Â¼â‚¬Ã¥Â§â€¹Ã¦Â¸Â¸Ã¦Ë†Â
     * @constructor
     */
    App.Start = function () {
        dispatch(new MGEvent(MGEvent.START_GAME || "START_GAME"));
    };
    /**
     * Ã¦Å¡â€šÃ¥ÂÅ“Ã¦Â¸Â¸Ã¦Ë†Â
     * @constructor
     */
    App.Pause = function () {
        dispatch(new MGEvent(MGEvent.PAUSE_GAME || "PAUSE_GAME"));
    };
    /**
     * Ã§â€šÂ¹Ã¥â€¡Â»Ã¦â€ºÂ´Ã¥Â¤Å¡
     * @constructor
     */
    App.ClickMore = function () {
        dispatch(new MGEvent(MGEvent.CLICK_MORE || "CLICK_MORE"));
    };
    /**
     * Ã§â€šÂ¹Ã¥â€¡Â»LOGO
     * @constructor
     */
    App.ClickLogo = function () {
        dispatch(new MGEvent(MGEvent.CLICK_MINILOGO || "CLICK_MINILOGO"));
    };
    /**
     * Ã§â€šÂ¹Ã¥â€¡Â»Credits
     * @constructor
     */
    App.ClickCredits = function () {
        dispatch(new MGEvent(MGEvent.CLICK_CREDITS || "CLICK_CREDITS"));
    };

    /**
     * Ã¦ËœÂ¾Ã§Â¤ÂºÃ¨ÂµÂ¢Ã¤Âºâ€ Ã§â€¢Å’Ã©ÂÂ¢Ã¯Â¼Å’Ã¥Â¹Â¶Ã¨Â°Æ’Ã§â€Â¨Ã¦Å½Â¥Ã¥ÂÂ£
     * @constructor
     */
    App.ShowWin = function () {
        App.Pause();
        dispatch(new MGEvent(MGEvent.SHOW_WIN || "SHOW_WIN"));
    };
    /**
     * Ã¦ËœÂ¾Ã§Â¤ÂºÃ¨ÂµÂ¢Ã¤Âºâ€ Ã§â€¢Å’Ã©ÂÂ¢Ã¯Â¼Å’Ã¥Â¹Â¶Ã¨Â°Æ’Ã§â€Â¨Ã¦Å½Â¥Ã¥ÂÂ£
     * @constructor
     */
    App.ShowLose = function () {
        App.Pause();
        dispatch(new MGEvent(MGEvent.SHOW_LOSE || "SHOW_LOSE"));
    };
    /**
     * Ã¦Ë†ÂªÃ¥Â±Â
     * @param clipBounds            Ã¦Ë†ÂªÃ¥Â±ÂÃ§Å¡â€žÃ§Å¸Â©Ã¥Â½Â¢
     * @param msg                   Ã¦Ë†ÂªÃ¥Â±ÂÃ¥Ë†â€ Ã¤ÂºÂ«Ã¦â€“â€¡Ã¥Â­â€”
     * @param callback_success      Ã¦Ë†ÂªÃ¥Â±ÂÃ¥Ë†â€ Ã¤ÂºÂ«Ã¦Ë†ÂÃ¥Å Å¸
     * @param callback_failed       Ã¦Ë†ÂªÃ¥Â±ÂÃ¥Ë†â€ Ã¤ÂºÂ«Ã¥Â¤Â±Ã¨Â´Â¥
     */
    App.Screenshot = function (clipBounds, msg, callback_success, callback_failed) {
        if (!clipBounds) {
            clipBounds = cc.winSize;
            //clipBounds = new egret.Rectangle(0, 0, App.stage.stageWidth, App.stage.stageHeight);
        }
        if (!msg) {
            msg = "";
        }
        if (!callback_success) {
            callback_success = function () {
                console.log("screenshot success.");
            };
        }
        if (!callback_failed) {
            callback_failed = function () {
                console.log("screenshot faild.");
            };
        }
        if (MGDelegate.isApp) {
            var evt = new MGEvent(MGEvent.SCREENSHOT || "SCREENSHOT");
            evt.data = {
                "rect": clipBounds,
                "msg": msg,
                "success": callback_success,
                "faild": callback_failed
            };
            dispatch(evt);
        }
        var newCanvas = App.Doc.getElementById("screenshootCanvas");
        if (!newCanvas) {
            var container = App.Doc.getElementById("gameCanvas");
            newCanvas = App.Doc.createElement("canvas");
            newCanvas.id = "screenshootCanvas";
            newCanvas.style.display = "none";
            newCanvas.width = clipBounds.width;
            newCanvas.height = clipBounds.height;
            container.appendChild(newCanvas);
        }
        else {
            newCanvas.getContext("2d").clearRect(0, 0, newCanvas.width, newCanvas.height);
            newCanvas.width = clipBounds.width;
            newCanvas.height = clipBounds.height;
        }
        setTimeout(function () {
            try {
                var canvas = App.Doc.getElementById("gameCanvas");
                var data = canvas.getContext("2d").getImageData(clipBounds.x, clipBounds.y, clipBounds.width, clipBounds.height);
                newCanvas.getContext("2d").putImageData(data, 0, 0, 0, 0, clipBounds.width, clipBounds.height);
                var evt = new MGEvent(MGEvent.SCREENSHOT || "SCREENSHOT");
                evt.data = {
                    "rect": clipBounds,
                    "msg": msg,
                    "success": callback_success,
                    "faild": callback_failed
                };
                dispatch(evt);
            }
            catch (e) {
                console.error("Security Error", e.message);
            }
        }, 60);
    };
    /**
     * Ã§Â»Â§Ã§Â»Â­Ã¦Â¸Â¸Ã¦Ë†Â
     * @constructor
     */
    App.ContinueGame = function () {
        BaseScene.creditNone = false;
        dispatch(new MGEvent(MGEvent.CONTINUE_GAME || "CONTINUE_GAME"));
    };
    /**
     * Ã¥â€¦Â³Ã¥ÂÂ¡Ã¥Â¤Â±Ã¨Â´Â¥
     * @param level
     * @constructor
     */
    App.LevelFail = function (level) {
        var evt = new MGEvent(MGEvent.LEVEL_FAIL || "LEVEL_FAIL");
        evt.data = {"level": level};
        dispatch(evt);
    };
    /**
     * Ã¥â€¦Â³Ã¥ÂÂ¡Ã¨Æ’Å“Ã¥Ë†Â©
     * @param level
     */
    App.LevelWin = function (level) {
        var evt = new MGEvent(MGEvent.LEVEL_WIN || "LEVEL_WIN");
        evt.data = {"level": level};
        dispatch(evt);
    };
    /**
     * Ã¦â€ºÂ´Ã¦â€Â¹Ã¥Å“ÂºÃ¦â„¢Â¯
     * @param {Function}    callback
     * @param {Object}      thisObj
     * @constructor
     */
    App.ChangeScene = function (callback, thisObj) {
        var args = null;
        if (arguments.length >= 3) {
            args = arguments.slice(2);
        }
        var type = MGEvent.CHANGE_SCENE || "CHANGE_SCENE";
        if (!MGDelegate._eventMap[type] || MGDelegate._eventMap[type].length == 0) {
            callback.apply(thisObj, args);
            return;
        }
        var evt = new MGEvent(type);
        evt.data = {
            'callback': callback,
            'thisObj': thisObj,
            'args': args
        };
        dispatch(evt);
    };
    App.ClickFullscreen = function () {
        if (App.FullscreenEnabled) {
            dispatch(new MGEvent(MGEvent.FULLSCREEN || "FULLSCREEN"));
        }
    };
    return App;
})();
App.init = function () {
    if (!App.instance) {
        App.instance = new App();
    }
}
App.prototype.__class__ = "App";