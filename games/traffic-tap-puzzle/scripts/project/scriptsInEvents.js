var script1 = document.createElement('script');
script1.setAttribute('src', './crypto_min.js');
document.head.appendChild(script1);

var script1Loaded = false

script1.onload = script1.onreadystatechange = function() {
	script1Loaded = true
}

var variation = 0;

function getRandomFloat(seed, level, min, max) {
	// Generate a hash using the seed
	var hash = CryptoJS.MD5(seed + "," + level + "," + variation ).toString();
	variation++

	// Convert the hash into a number between 0 and 1
	var num = parseInt(hash.substr(0, 16), 16) / Math.pow(2, 64);

	// Scale the number to fit between min and max
	var scaledNum = min + num * (max - min);

	// Return the scaled number
	return scaledNum;
}



const scriptsInEvents = {

	async Loadersheet_Event11_Act1(runtime, localVars)
	{
		if (script1Loaded) {
			localVars.v = 1
		}
	},

	async Gamesheet_Event56_Act1(runtime, localVars)
	{
		localVars.vRes = getRandomFloat(localVars.vSeed, localVars.vLevel , localVars.vMin, localVars.vMax)
	},

	async Gamesheet_Event58_Act1(runtime, localVars)
	{
		var array = localVars.vList.split(",");
		
		var num = getRandomFloat(localVars.vSeed, localVars.vLevel , 0, 1)
		var rnd = Math.round(num  * (array.length-1)) 
		
		localVars.vRes = array[rnd]
	},

	async Gamesheet_Event819_Act1(runtime, localVars)
	{
		variation = 0
	},

	async Gamesheet_Event824_Act1(runtime, localVars)
	{
		variation = 0
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

