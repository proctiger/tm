TM.dfpSiteMap = [
    {
        'deSite':'uolbr',
        'dfpSite':'uol'
    }
];

TM.dfpChanMap = [
    {
        'deChan':'person',
        'dfpChan':'celebridades'
    }
];

TM.capa = [
    {
        're': /^http(s)?:\/\/(www.)?celebridades.uol.com.br\/?$/
    }
];

TM.dfpSubchanMap = [
	{	'deSubchan':/^capa$/,
		'dfpSubchan':'capa'
	},
	{	'deSubchan':/^outros$/,
		'dfpSubchan':""
	},
	{	'deSubchan':/^personalbum.*$/,
		'dfpSubchan':'fotos'
	},
	{	'deSubchan':/^casamentoreal.*$/,
		'dfpSubchan':""
	},
	{	'deSubchan':/^personpaulocoelho.*$/,
		'dfpSubchan':""
	}
];