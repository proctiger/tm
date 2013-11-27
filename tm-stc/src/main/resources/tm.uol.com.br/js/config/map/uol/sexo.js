TM.dfpSiteMap = [
    {
        'deSite':'uolbr',
        'dfpSite':'uol'
    }
];

TM.dfpChanMap = [
    {
        'deChan':'sexo',
        'dfpChan':'sexo'
    }
];

TM.capa = [
    {
        're': /^http(s)?:\/\/(www.)?sexo.uol.com.br\/sexo-adulto\/?$/
    }
];

TM.dfpSubchanMap = [
	{	'deSubchan':/^capa$/,
		'dfpSubchan':'capa'
	},
	{	'deSubchan':/^outros$/,
		'dfpSubchan':""
	},
	{	'deSubchan':/^sexoadulto.*$/,
		'dfpSubchan':'adulto'
	},
	{	'deSubchan':/^sexoavisoidade.*$/,
		'dfpSubchan':'aviso_de_idade'
	},
	{	'deSubchan':/^sexoultimasnoticias.*$/,
		'dfpSubchan':'ultimas_noticias'
	}
];