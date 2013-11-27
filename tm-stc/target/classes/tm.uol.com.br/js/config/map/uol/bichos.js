TM.dfpSiteMap = [
    {
        'deSite':'uolbr',
        'dfpSite':'uol'
    }
];

TM.dfpChanMap = [
    {
        'deChan':'bichos',
        'dfpChan':'bichos'
    }
];

TM.capa = [
    {
        're': /^http(s)?:\/\/(www.)?noticias.uol.com.br\/ultnot\/bichos\/?$/
    }
];

TM.dfpSubchanMap = [
	{	'deSubchan':/^capa$/,
		'dfpSubchan':'capa'
	},
	{	'deSubchan':/^outros$/,
		'dfpSubchan':""
	},
	{	'deSubchan':/^agenciamatrimonial.*$/,
		'dfpSubchan':""
    }
];