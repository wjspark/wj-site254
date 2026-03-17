window.YS_success = null;
window.YS_failure = null;
window.YS_preload = null;
var interval = 15;
var huhu_s = Date.parse(new Date()) / 1000;
window.YS_showInterstitialAd = (preload, success, failure) => {
    console.log("YS_showInterstitialAd:");
    if (typeof(success) == "function") {
        YS_success = success;
    }
    if (typeof(failure) == "function") {
        YS_failure = failure;
    }
    if (typeof(preload) == "function") {
        YS_preload = preload;
    }
    var e = Date.parse(new Date()) / 1000;
    var i = e - huhu_s;
    console.log("interval time = " + i);
    if (i >= interval) {
        huhu_s = e;
        console.log("------------ad1----------------");
        try {
            window.parent.postMessage("showInterstitial", "*");
        } catch (e) {}
    } else {
        if (typeof(window.YS_failure) == "function") {
            window.YS_failure();
            window.YS_success = null;
            window.YS_failure = null;
        };
    }
};
window.YS_showRewardedVideoAd = (success, failure) => {
    console.log("YS_showRewardedVideoAd:");
    if (typeof(success) == "function") {
        YS_success = success;
    }
    if (typeof(failure) == "function") {
        YS_failure = failure;
    }
    try {
        window.parent.postMessage("showReward", "*");
    } catch (e) {}
};
window.onmessage = function(e) {
    e = e || event;
    let tempData = e.data + "";
    if (tempData == "close") {
        if (typeof(window.YS_success) == "function") {
            window.YS_success();
            window.YS_success = null;
            window.YS_failure = null;
        };
    } else if (tempData == "fail") {
        if (typeof(window.YS_failure) == "function") {
            window.YS_failure();
            window.YS_success = null;
            window.YS_failure = null;
        };
    } else if (tempData == "adload") {
        if (typeof(window.YS_preload) == "function") {
            window.YS_preload();
            window.YS_preload = null;
        };
    }
}

function promptTxT(msg, duration) {
    if (!this.prompt_) {
        this.prompt_ = document.createElement('div');
        this.prompt_.style.cssText = "font-family:siyuan;max-width:80%;min-width:320px;padding:10px 10px 10px 10px;min-height:40px;color: rgb(255, 255, 255);line-height: 20px;text-align:center;border-radius: 4px;position: fixed;top: 40%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0,.7);font-size: 16px;";
        document.body.appendChild(this.prompt_);
    }
    this.prompt_.innerHTML = msg;
    duration = isNaN(duration) ? 2000 : duration;
    this.prompt_.style.display = "inline";
    this.prompt_.style.opacity = '1';
    setTimeout(function() {
        var d = 0.5;
        this.prompt_.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
        this.prompt_.style.opacity = '0';
        this.prompt_.style.display = "none";
    }.bind(this), duration);
}