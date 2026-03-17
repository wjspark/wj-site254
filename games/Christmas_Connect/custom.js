window.famobi_analytics = window.famobi_analytics || {};
window.famobi_tracking = window.famobi_tracking || {
	init: function() {},
	trackEvent: function() {},
	EVENTS: {
	    'LEVEL_START'	: 'event/level/start',
	    'LEVEL_END'		: 'event/level/end',
	    'LEVEL_UPDATE'	: 'event/level/update',
	    'PING'          : 'event/ping',
	    'AD'			: 'event/ad'
	}
};

let _started = false;

window.famobi_analytics.trackEvent = function(event, params) {

	params = params || {};

	return new Promise(function(resolve, reject) {

		// console.log(event, params);
		console.error("日志",event, params)
		// ANALYTICS
		switch(event) {

			case "EVENT_LEVELFAIL":
				if(params.reason !== "quit") {
					break;
				}
			

				

			case "LEVEL_END":
			case "EVENT_LEVELRESTART":
			case "EVENT_PAUSE":

				// if(_started) {
				// 	break;
				// }

				// _started = true;
				// return gdsdk_showAd(function() {
				// 	resolve(event, params);
				// });
				window.ggmgr.xsi();
				resolve(event, params);

			default:
				// nothing to do
		}
		return resolve(event, params);
	});
}