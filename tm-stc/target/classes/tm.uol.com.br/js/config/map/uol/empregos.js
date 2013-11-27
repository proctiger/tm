TM.dfpSiteMap = [
    {
        'deSite':'uolbr',
        'dfpSite':'uol'
    }
];

TM.dfpChanMap = [
    {
        'deChan':'empregos',
        'dfpChan':'empregos'
    }
];

TM.capa = [
    {
        're': /^http(s)?:\/\/(www.)?noticias.uol.com.br\/empregos\/?$/
    }
];

TM.dfpSubchanMap = [
	{	'deSubchan':/^capa$/,
		'dfpSubchan':'capa'
	},
	{	'deSubchan':/^outros$/,
		'dfpSubchan':""
	}
];