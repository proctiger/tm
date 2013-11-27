TM.dfpSiteMap = [
    {
        'deSite':'uolbr',
        'dfpSite':'uol'
    }
];

TM.dfpChanMap = [
    {
        'deChan':'copadomundo',
        'dfpChan':'copa_do_mundo'
    }
];

TM.capa = [
    {
        're': /^http(s)?:\/\/(www.)?copadomundo.uol.com.br\/?$/
    }
];

TM.dfpSubchanMap = [
	{	'deSubchan':/^capa$/,
		'dfpSubchan':'copa_do_mundo'
	},
	{	'deSubchan':/^outros$/,
		'dfpSubchan':""
	},
	{	'deSubchan':/^copadasconfederacoes.*$/,
		'dfpSubchan':'copa_das_confederacoes'
	}
];