var BehavioralTrack = function() {
	var PARTNER_URI = '//tracker.bt.uol.com.br/partner';
	var TRACK_URI = '//tracker.bt.uol.com.br/track';
	var SCRIPT_TAG_ID = 'behavioralTrack';
	
	this.init = function(protocol) {
		var trackUri = PARTNER_URI;
		if(protocol == 'https') {
			trackUri = TRACK_URI;
		}
		track(trackUri);
	}
	
	var track = function(uri) {
		var tagUtils = new TagUtils();
		if(!isTracked()) {
			tagUtils.createTagScript(SCRIPT_TAG_ID, uri);
		}
	}
	
	var isTracked = function() {
		return document.getElementById(SCRIPT_TAG_ID);
	}
}

var TagUtils = function() {
	var createTag = function(tagName, parentNode, attributes) {
		var tag = document.createElement(tagName);
		for (var key in attributes) {
			var value = attributes[key];
			tag.setAttribute(key, value);
		}
		parentNode.appendChild(tag);
	}

	this.createTagScript = function(id, src) {
		var attributes = {};
		attributes.type = 'text/javascript';
		attributes.defer = true;
		attributes.id = id;
		attributes.src = src;

		createTag('script', document.body, attributes);
	}
}