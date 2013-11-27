var BT = new BehavioralTrack();
var COUNTER = 0;
var SCRIPT_TAG_ID = 'behavioralTrack';
var PARTNER_URI = '//tracker.bt.uol.com.br/partner';
var TRACK_URI = '//tracker.bt.uol.com.br/track';

var setup = function() {
	if (isTracked()) {
		renameScript();
	}
}

var isTracked = function() {
	return document.getElementById(SCRIPT_TAG_ID);
}

var renameScript = function() {
	try {
		document.getElementById(SCRIPT_TAG_ID).id = 'old-' + COUNTER;
		COUNTER++;
	} catch (e) {
		throw 'Erro ao renomear attributo id do script de behavioral';
	}
}

var getBtScriptSrc = function() {
	try {
		return document.getElementById(SCRIPT_TAG_ID).getAttribute('src');
	} catch (e) {
		throw 'Erro ao recuperar attirbuto src do script de behavioral';
	}
}

test('Requisição com protocolo https', function() {
	setup();
	BT.init('https');
	equal(getBtScriptSrc(), '//tracker.bt.uol.com.br/track', '');
});

test('Requisição com protocolo http', function() {
	setup();
	BT.init('http');
	equal(getBtScriptSrc(), '//tracker.bt.uol.com.br/partner', '');
});