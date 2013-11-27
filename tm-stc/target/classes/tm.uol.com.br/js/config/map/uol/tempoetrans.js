TM.dfpSiteMap = [
    {
        'deSite':'uolbr',
        'dfpSite':'uol'
    }
];

TM.dfpChanMap = [
    {
        'deChan':'tempoetrans',
        'dfpChan':'tempo_transito_e_mapas'
    }
];

TM.capa = [
    {
        're': /^http(s)?:\/\/(www.)?www3.uol.com.br\/tempo\/?$/
    }
];

TM.dfpSubchanMap = [
	{	'deSubchan':/^capa$/,
		'dfpSubchan':'capa'
	},
	{	'deSubchan':/^outros$/,
		'dfpSubchan':""
	},
	{	'deSubchan':/^transsp.*$/,
		'dfpSubchan':'sao_paulo'
	}
];