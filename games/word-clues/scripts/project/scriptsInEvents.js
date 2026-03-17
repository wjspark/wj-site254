


const scriptsInEvents = {

	async Gamesheet_Event312(runtime, localVars)
	{
		var str = localVars.vList;
		var sum = 0;
		var myJSON = JSON.parse(localVars.vJSON);
		
		
		for (let i = 0; i < str.split(',').length-1 ; i++) {
			var a = str.split(',')[i];
			sum += myJSON.GiftsChance[a].Chance;
		}
		let random = Math.random() * sum;
		
		for (let i = 0; i < str.split(',').length-1 ; i++) {
			var a = str.split(',')[i];
			random -= myJSON.GiftsChance[a].Chance;
			if (random <= 0) {
				localVars.vRes = myJSON.GiftsChance[a].Name;
				break;
			}
		}
		
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

