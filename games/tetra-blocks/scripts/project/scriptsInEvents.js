


const scriptsInEvents = {

	async Gamesheet_Event253_Act1(runtime, localVars)
	{
		localVars.vResult =  new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(localVars.Value);
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

