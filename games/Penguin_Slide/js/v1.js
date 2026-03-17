(function(d, params, env, apiHost, hosts) {
	// set params
	(function(regex, qs, tokens) {
		regex = /[?&]?([^=]+)=([^&]*)/g;
		qs = d.location && d.location.search ? d.location.search.split('+').join(' ') : '';

		while ((tokens = regex.exec(qs))) {
			params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
		}
	})();

	if (typeof fg_api == "function" && typeof famobi != "undefined" && famobi instanceof fg_api) {
		// famobi api already loaded
		return false;
	}

	env = 'prod';
	apiHost = hosts[env];
	// load script
	(function (d, url, fgJS, firstJS) {
		fgJS = d.createElement('script');
		firstJS = d.getElementsByTagName('script')[0];
		fgJS.src = url+"?_location="+encodeURIComponent(d.location.href.split('#')[0]);
		firstJS.parentNode.insertBefore(fgJS, firstJS);
	})(d, './js/4638e320-4444-4514-81c4-d80a8c662371');
})(document, {}, '', '', {
	'dev': 'api.dev', 
	'staging': 'api.staging.gc',
	'staging.aws': 'api.staging.aws',
	'staging.gc': 'api.staging.gc',
	'prod': 'api'
});