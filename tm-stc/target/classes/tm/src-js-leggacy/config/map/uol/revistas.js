TM.dfpSiteMap = [
    {
        'deSite':'uolbr',
        'dfpSite':'uol'
    }
];

TM.dfpChanMap = [
    {
        'deChan':'revistas',
        'dfpChan':'revistas'
    }
];

TM.capa = [
    {
        're': /^http(s)?:\/\/(www.)?entretenimento.uol.com.br\/revistas\/?$/
    },
    {
        're': /^http(s)?:\/\/(www.)?entretenimento.uol.com.br\/?$/
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