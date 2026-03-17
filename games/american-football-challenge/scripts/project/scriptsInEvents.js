var configFile = document.createElement('script');
configFile.setAttribute('src', './config.js');
document.head.appendChild(configFile);

var script1 = document.createElement('script');
script1.setAttribute('src', './crypto_min.js');
document.head.appendChild(script1);

var variation = 0;
var levelNum = 0;

function getRandomFloat(seed, min, max) {

	// Generate a hash using the seed
	var hash = CryptoJS.MD5(seed + ("" + levelNum) + variation ).toString();
	variation++

	// Convert the hash into a number between 0 and 1
	var num = parseInt(hash.substr(0, 16), 16) / Math.pow(2, 64);

	// Scale the number to fit between min and max
	var scaledNum = min + num * (max - min);

	// Return the scaled number
	return scaledNum;
}



const scriptsInEvents = {

	async Gamesheet_Event3_Act1(runtime, localVars)
	{
		variation = 0
	},

	async Gamesheet_Event12_Act1(runtime, localVars)
	{
		levelNum = runtime.objects.JSON_LS.getFirstInstance().getJsonDataCopy().Level;
	},

	async Gamesheet_Event54_Act1(runtime, localVars)
	{
		levelNum = runtime.globalVars.LevelMode
	},

	async Gamesheet_Event322_Act1(runtime, localVars)
	{
		localVars.Output = getRandomFloat(runtime.globalVars.SeedNum, localVars.vMin, localVars.vMax)
	},

	async Loadersheet_Event2_Act2(runtime, localVars)
	{
		runtime.objects.JSON_Config.getFirstInstance().setJsonString(JSON.stringify(config));
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

