
TM.RETARGETING = {};

TM.RETARGETING.partners = [
    {
    	"site" : /^http(s)?:\/\/.+\.sephora\.com\.br(\/.*)?$/,
    	"code" : "sephora"
    },
    {
    	"site" : /^http(s)?:\/\/.+\.netshoes\.com\.br(\/.*)?$/,
    	"code" : "uol_netshoes"
    },
    {
    	"site" : /^http(s)?:\/\/.+\.dafiti\.com\.br(\/.*)?$/,
    	"code" : "dafiti"
    },
    {
    	"site" : /^http(s)?:\/\/.+\.dell\.com\.br(\/.*)?$/,
    	"code" : "dell"
    },
    {
    	"site" : /^http(s)?:\/\/.+\.netflix\.com\.br(\/.*)?$/,
    	"code" : "netflix"
    },
    {
    	"site" : /^http(s)?:\/\/.+\.cyrela\.com\.br(\/.*)?$/,
    	"code" : "cyrela"
    },
    {
    	"site" : /^http(s)?:\/\/.+\.fastshop\.com\.br(\/.*)?$/,
    	"code" : "fastshop"
    },
    {
    	"site" : /^http(s)?:\/\/.+\.even\.com\.br(\/.*)?$/,
    	"code" : "even"
    }
]

TM.RETARGETING.track = function(partner) {
    var urlPartner = 'http://w.bn.uol.com.br/retargeting/?categoria=' + partner;
    var ifrm = document.createElement('iframe');
    ifrm.setAttribute('src', urlPartner);
    ifrm.style.width = '0px';
    ifrm.style.height = '0px';
    ifrm.style.border = '0px';
    ifrm.setAttribute('width', '0');
    ifrm.setAttribute('height', '0');
    ifrm.setAttribute('margineidth', '0');
    ifrm.setAttribute('marginheight', '0');
    ifrm.setAttribute('frameborder', '0');
    ifrm.setAttribute('scrolling', 'no');
    if(document.body != null && document.location.protocol == 'http:') {
        document.body.appendChild(ifrm);
    }
}

TM.RETARGETING.init = function() {
	if(!TM.referer){
		TM.UTILS.log('Referer não foi identificado para marcação de retargeting', 'WARN');
		return;
	}
	
	var partnerList = TM.RETARGETING.partners;
	for(var i = 0;i < partnerList.length;i++){
		var partner = partnerList[i];
		
		if(TM.referer.match(partner.site)){
			TM.RETARGETING.track(partner.code);
			break;
		}
	}
}
