
var rt;

runOnStartup(async runtime =>
{
	rt = runtime;
});


window.onmessage = function(e){
	
	var data = e.data;
	
	if (data == "Loaded") {
		rt.callFunction("GameLoaded" , []);
	}
	
	if (data == "Ready") {
		rt.callFunction("GameReady" , []);
	}
	
	if (data == "Close") {
		rt.callFunction("GameClosed" , []);
	}
		
	
	if (data.split("-")[0] == "LS") {
		rt.callFunction("LS" , data.split("-")[1] , data.split("-")[2] , data.split("-")[3] );
	}
	
};