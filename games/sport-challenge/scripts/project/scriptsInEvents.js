


const scriptsInEvents = {

	async Homesheet_Event45_Act2(runtime, localVars)
	{
		document.getElementById('myIframe').contentWindow.postMessage(localVars.JsonVal , '*');
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

