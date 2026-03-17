var YYGGames = {
    init : function (name,callback)
    {
        platform.getInstance().yadstartup(name,callback);
    },
    showReward: function (succ, fail)
    {
        platform.getInstance().showReward(succ,fail)
    },
    showInterstitial: function (succ)
    {
      platform.getInstance().showInterstitial(succ);
    },
    audio:{
        get pause(){
            return  Laya.SoundManager.muted;
        },
        set pause(val) {
            console.log(6666,'audio _pause', val);
            Laya.SoundManager.muted = val;
        },
        playMusic: function (url)
        {
            Laya.SoundManager.playMusic(url)
        },
        stopMusic: function() {
            Laya.SoundManager.stopMusic()
        },
        playSound: function (url,t = 1)
        {
            Laya.SoundManager.playSound(url,t);
        },
        stopSound : function (url) {
            Laya.SoundManager.stopSound(url);
        }
    },
    gameBanner:{
        _visible: false,
        get visible(){
            return  YYGGames.gameBanner._visible;
        },
        set visible(val) {
            console.log(6666,'gameBanner visible', val);
            YYGGames.gameBanner._visible = val;
        },
        set left(val) {

        },
        set right(val) {

        },
        set top(val) {

        },
        set bottom(val) {

        },
        set centerX(val) {

        },
        set centerY(val) {

        },
        setBannerSize:(bannerX,bannerY)=>{

        }
    },
    showTip : function (tips) {
      platform.getInstance().prompt(tips);
    },
    gameBox : {
        _visible: false,
        get visible(){
            return  YYGGames.gameBox._visible;
        },
        set visible(val) {
            console.log(6666,'gameBox visible', val);
            YYGGames.gameBox._visible = val;
        },
        set left(val) {

        },
        set right(val) {

        },
        set top(val) {

        },
        set bottom(val) {

        },
        set centerX(val) {

        },
        set centerY(val) {

        },
        pos : function(x,y)
        {

        },
        setBannerSize: function(x,y)
        {

        },
        game1:{
            _visible: false,
            get visible(){
                return  YYGGames.gameBox.game1._visible;
            },
            set visible(val) {
                console.log(6666,'YYGGames.gameBox.game1 visible', val);
                YYGGames.gameBox.game1._visible = val;
            },
            set left(val) {

            },
            set right(val) {

            },
            set top(val) {

            },
            set bottom(val) {

            },
            set centerX(val) {

            },
            set centerY(val) {

            },
            scale : function (scaleX,scaleY)
            {

            }
        },
        game2:{
            _visible: false,
            get visible(){
                return  YYGGames.gameBox.game2._visible;
            },
            set visible(val) {
                console.log(6666,'YYGGames.gameBox.game2 visible', val);
                YYGGames.gameBox.game2._visible = val;
            },
            set left(val) {

            },
            set right(val) {

            },
            set top(val) {

            },
            set bottom(val) {

            },
            set centerX(val) {

            },
            set centerY(val) {

            },
            scale : function (scaleX,scaleY)
            {

            }
        },
    },
    icon:{
        scale:function (scaleX,scaleY)
        {

        },
        _visible: false,
        get visible(){
            return  YYGGames.icon._visible;
        },
        set visible(val) {
            console.log(6666,'icon visible', val);
            YYGGames.icon._visible = val;
        },
        set left(val) {

        },
        set right(val) {

        },
        set top(val) {

        },
        set bottom(val) {

        },
        set centerX(val) {

        },
        set centerY(val) {

        }
    },
}