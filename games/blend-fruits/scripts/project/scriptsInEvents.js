


const scriptsInEvents = {

	async Gamesheet_Event369(runtime, localVars)
	{
		localVars.HEXColor = localVars.HEXColor.replace('#', '');
		localVars.R = parseInt(localVars.HEXColor.substring(0, 2), 16);
		localVars.G = parseInt(localVars.HEXColor.substring(2, 4), 16);
		localVars.B = parseInt(localVars.HEXColor.substring(4, 6), 16);
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

