window.famobi = window.famobi || {};
window.famobi_analytics = window.famobi_analytics || {};
window.famobi_tracking = window.famobi_tacking || {
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

let _liveScore = null;
const _sendScore = function(score) {
	if(score !== _liveScore) {
		_liveScore = score;
		// Score API
		GAMESNACKS.sendScore(_liveScore);
	}
};

window.famobi_analytics.trackEvent = function(event, params) {

	IS_DEBUG && console.log("trackEvent", event, params);

	return new Promise(function(resolve, reject) {
		switch(event) {
			case "EVENT_TOTALSCORE":
				_sendScore(params.totalScore);
				break;
			case "EVENT_LIVESCORE":
				// Score API
				_sendScore(params.liveScore);
				break;
			case "EVENT_LEVELFAIL":
				// GameOver API
				GAMESNACKS.gameOver();
				break;
			case "EVENT_LEVELSUCCESS":

				// LevelComplete API
				GAMESNACKS.levelComplete(parseInt(params.levelName.replace("level_", "")));
			default:
				// do nothing
		}
		return resolve(event, params);
	});
};

window.famobi_analytics.trackStats = function() {
	return Promise.resolve();
};
