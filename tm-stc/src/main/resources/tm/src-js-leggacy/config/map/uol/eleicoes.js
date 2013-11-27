TM.dfpSiteMap = [
    {
        'deSite':'uolbr',
        'dfpSite':'uol'
    }
];

TM.dfpChanMap = [
    {
        'deChan':'eleicoes',
        'dfpChan':'eleicoes'
    }
];

TM.capa = [
    {
  		're': /^http(s)?:\/\/(www.)?eleicoes.uol.com.br\/?$/      
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