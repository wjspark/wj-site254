


const scriptsInEvents = {

	async Gamesheet_Event412_Act1(runtime, localVars)
	{
		var _value = "{\"Match\":{\"Topic\":[\"\",\"\",\"\"],\"Questions\":[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"Player\":[[0,[0,0,0,0,0],[0,0,0,0,0]],[0,[0,0,0,0,0],[0,0,0,0,0]],[0,[0,0,0,0,0],[0,0,0,0,0]]],\"Opponent\":[[0,[0,0,0,0,0],[0,0,0,0,0]],[0,[0,0,0,0,0],[0,0,0,0,0]],[0,[0,0,0,0,0],[0,0,0,0,0]]],\"RoundIndex\":1,\"OpponentIndex\":0}}"
		
		localVars.vValue = _value
	},

	async Homesheet_Event105_Act8(runtime, localVars)
	{
		var input2 = document.getElementById("mine2");
		input2.value = localVars.vUserName;
		runtime.globalVars.InputBoxValue = input2.value
	},

	async Homesheet_Event108_Act2(runtime, localVars)
	{
		var input2 = document.getElementById("mine2");
		runtime.globalVars.InputBoxValue = input2.value
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

