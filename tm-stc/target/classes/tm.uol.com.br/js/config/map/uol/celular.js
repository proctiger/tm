TM.dfpSiteMap = [
    {
        'deSite':'uolbr',
        'dfpSite':'uol'
    }
];

TM.dfpChanMap = [
    {
        'deChan':'celular',
        'dfpChan':'celular'
    }
];

TM.capa = [
    {
        're': /^http(s)?:\/\/(www.)?celular.uol.com.br\/?$/
    }
];

TM.dfpSubchanMap = [
	{	'deSubchan':/^capa$/,
		'dfpSubchan':'capa'
	},
	{	'deSubchan':/^outros$/,
		'dfpSubchan':""
	},
	{	'deSubchan':/^celular3g.*$/,
		'dfpSubchan':""
	},
	{	'deSubchan':/^celblackberry.*$/,
		'dfpSubchan':""
	},
	{	'deSubchan':/^celiphone.*$/,
		'dfpSubchan':""
	}
];