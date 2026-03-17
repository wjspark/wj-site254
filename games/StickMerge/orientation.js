window.baseOrign = 0; // 游戏启动是屏幕方向 0未检查1竖向2横向
window.gameOrign = 2; // 1竖屏游戏 2横屏游戏
window.gameTurned = false;
var rotateDeviceOverlay = document.getElementById('rotate-device');
var gameFrame = document.getElementById('game_iframe');
var resizeGameScreen = function () {
    var dw = document.documentElement.clientWidth;
    var dh = document.documentElement.clientHeight;
    var ww = window.innerWidth;
    var wh = window.innerHeight;
    var w = dw;
    var h = dh;
    var orign = w < h ? 1 : 2;
    if (orign != window.gameOrign) {
        var d = w;
        w = h;
        h = d;
    }
    // console.log(`3 --- d(${dw},${dh}), w(${ww},${wh}), g(${w},${h})`);
    gameFrame.style.left = 0 + 'px';
    gameFrame.style.top = 0 + 'px';
    gameFrame.style.width = w + 'px';
    gameFrame.style.height = h  + 'px';
}
var rotateGameScreen = function (a) {
    var ww = document.documentElement.clientWidth;
    var wh = document.documentElement.clientHeight;
    var style = "";
    if (a == 90) {
        style += "width:" + wh + "px;";
        style += "height:" + ww + "px;";
        style += "-webkit-transform: rotate(90deg); transform: rotate(90deg);";
        // 注意旋转中点的处理
        style += "-webkit-transform-origin: " + ww / 2 + "px " + ww / 2 + "px;";
        style += "transform-origin: " + ww / 2 + "px " + ww / 2 + "px;";
    } else {
        style += "width:" + ww + "px;"; // 注意旋转后的宽高切换
        style += "height:" + wh + "px;";
        style += "-webkit-transform: rotate(0); transform: rotate(0);";
        style += "-webkit-transform-origin: 0 0;";
        style += "transform-origin: 0 0;";
    }
    document.body.style.cssText = style;
}
var onResize = function () {
    var dw = document.documentElement.clientWidth;
    var dh = document.documentElement.clientHeight;
    var ww = window.innerWidth;
    var wh = window.innerHeight;
    var w = dw;
    var h = dh;
    var orign = w < h ? 1 : 2;
    if (window.baseOrign == 0) {
        window.baseOrign = orign;
        if (window.gameOrign != orign) {
            rotateGameScreen(90);
        }
    } else {
        if (orign != window.gameOrign) {
            rotateGameScreen(90);
        } else {
            rotateGameScreen(0);
        }
    }
    resizeGameScreen();
};

window.addEventListener('resize', onResize);