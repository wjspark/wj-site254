var script1 = document.createElement('script');
script1.setAttribute('src', './crypto_min.js');
document.head.appendChild(script1);

var script1Loaded = false

script1.onload = script1.onreadystatechange = function() {
	script1Loaded = true
}

var variation = 0;

// This function requests the CryptoJS library to generate a value by the given parameters (seed, level, min, max & variation)

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

	async Gamesheet_Event12_Act1(runtime, localVars)
	{
		variation = 0
	},

	async Gamesheet_Event34_Act1(runtime, localVars)
	{
		localVars.vRes = getRandomFloat(localVars.vSeed, localVars.vLevel , localVars.vMin, localVars.vMax)
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

