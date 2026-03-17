function postMessageToParent(params) {
    window.parent.postMessage(
        JSON.stringify(params),
        "*" // 父window的域名
    );
}

function GASend(event, event_param) {
    postMessageToParent({ code: 0, data: { event: event, event: event_param } });
}

var rewardAD_CallBack;
var interstitialAD_CallBack;
function ShowRewardAD(callback) {
    if (mizhu) mizhu.loading();
    console.log("ad ShowRewardAD");
    rewardAD_CallBack = callback;
    // 展示激励广告
    postMessageToParent({ code: 2, data: { name: "show_reward" } });
}
function ShowInterstitialAD(callback) {
    console.log("ad ShowInterstitialAD");
    interstitialAD_CallBack = callback;
    // 展示广告
    postMessageToParent({ code: 1, data: { type: "next", name: "show_interstitial" } });
}

// 注册消息接收
window.addEventListener("message", (e) => {
    console.log(e, "msg to iframe");
    try {
        const data = JSON.parse(e.data);
        if (data.func == "reward_BeforeAdCallback") {

        } else if (data.func == "reward_AdViewedCallback") {
            if (rewardAD_CallBack["onRewarded"]) rewardAD_CallBack["onRewarded"]();
        }
        else if (data.func == "reward_AdBreakDoneCallback") {
            switch (data.param) {
                case "viewed":
                case "dismissed":
                    if (rewardAD_CallBack["onClose"]) rewardAD_CallBack["onClose"]();
                    if (mizhu) mizhu.close();
                    break;
                default:
                    if (mizhu) {
                        mizhu.hideloading();
                        mizhu.toast("Please try again later");
                    }
                    if (rewardAD_CallBack["onError"]) rewardAD_CallBack["onError"]();
                    break;
            }
        } else if (data.func == "BeforeAdCallback") {
            if (interstitialAD_CallBack["onRewarded"]) interstitialAD_CallBack["onRewarded"]();
        }
        else if (data.func == "AdBreakDoneCallback") {
            switch (data.param) {
                case "viewed":
                case "dismissed":
                    if (interstitialAD_CallBack["onClose"]) interstitialAD_CallBack["onClose"]();
                    break;
                default:
                    if (interstitialAD_CallBack["onError"]) interstitialAD_CallBack["onError"]();
                    break;
            }
        }
    } catch (error) {
        console.log(error);
    }
})

function onGameReadyForPlay() {
    console.log("ad onGameReadyForPlay")
    postMessageToParent({ code: 3, data: {} });
}

// 全屏
function myFullScreen() {
    var docElm = document.documentElement;
    //W3C 
    if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
    }
    //FireFox 
    else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
    }
    //Chrome等 
    else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
    }
    //IE11 
    else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
}