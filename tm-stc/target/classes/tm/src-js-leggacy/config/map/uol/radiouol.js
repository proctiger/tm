TM.dfpSiteMap = [
    {
        'deSite':'uolbr',
        'dfpSite':'uol'
    }
];

TM.dfpChanMap = [
    {
        'deChan':'radiouol',
        'dfpChan':'radio_uol'
    }
];

TM.capa = [
    {
        're': /^http(s)?:\/\/(www.)?www.radio.uol.com.br\/#\/home\/?$/
    }
];

TM.dfpSubchanMap = [
	{	'deSubchan':/^capa$/,
		'dfpSubchan':'capa'
	},
	{	'deSubchan':/^outros$/,
		'dfpSubchan':""
	},
	{	'deSubchan':/^playerradiouol.*$/,
		'dfpSubchan':""
	},
	{	'deSubchan':/^radiopodcast.*$/,
		'dfpSubchan':""
	}
];