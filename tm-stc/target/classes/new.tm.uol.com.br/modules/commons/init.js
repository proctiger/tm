
TM.init = function() {
	TM.UTILS.log(TM.version, 'VERSION');
	TM.initAfter();
}

TM.initAfter = function() {
	if(document.readyState && document.readyState == 'complete') {
		if (TM.RETARGETING) { TM.RETARGETING.init(); }
		if (TM.BT) { TM.BT.init(); }
		if (TM.SIGA) { TM.SIGA.init(); }
    } else {
        setTimeout(TM.initAfter, 500);
    }
}

TM.init();
