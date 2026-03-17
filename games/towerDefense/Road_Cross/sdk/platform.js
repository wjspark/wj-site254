// let clzGetItem = localStorage.getItem;
// let clzSetItem = localStorage.setItem;

// localStorage.getItem = function(key)
// {
//     let id = (window.ggmgr && window.ggmgr.gameId) || ""; 
//     key = id + "_" + key;
//     return clzGetItem.apply(this,arguments);
// }

// localStorage.setItem = function(key,value)
// {
//     let id = (window.ggmgr && window.ggmgr.gameId) || ""; 
//     key = id + "_" + key;
//     clzSetItem.apply(this,arguments);
// }


!function () {

    class platform {
        constructor() {
        }
        static getInstance() {
            if (!this._instance) {
                this._instance = new platform();
            }
            return this._instance;
        }

        initData() {

        }
        onNavigate_() {

        }

        getStorageSync(key) {
            return value
        }
        setStorageSync(key, value) {
        }

        navigate(screen_, action_, to_) {
           
        }

        //插屏广告
        showInterstitial(complete) {
            complete && complete()
            
        }
        //复活
        showReward(success, failure) {
           // success && success()
           ADManageLaya.getInstance().xsv((isOk)=>
            {
                if(isOk)
                {
                    success && success()
                }else
                {
                    failure && failure()
                }
                
            });
        }

        initList(appList) {
  
        }
        prompt(msg, duration) {

        }
        getForgames() {

            return [];
        }

        createLogo() {
           
            return {};
        }

        yadstartup(name, complete) {
            complete && complete()
        }

        /**
         * 启动CARGAMES——SDK
         * @param {*} name 
         * @param {*} complete 
         */
        cargamesstartup(name, complete) {
            complete && complete()
        }

        
        createLoading() {

        }


        showLoading() {
        }

        closeLoading() {
        }


    }
    platform._instance = null;
    window["platform"] = platform;
    platform.getInstance();
    
}()

