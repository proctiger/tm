TM.dfpSiteMap = [
    {
        'deSite':'uolbr',
        'dfpSite':'uol'
    }
];

TM.dfpChanMap = [
    {
        'deChan':'viagem',
        'dfpChan':'viagem'
    }
];

TM.capa = [
    {
        're': /^http(s)?:\/\/(www.)?viagem.uol.com.br\/?$/
    }
];

TM.dfpSubchanMap = [
	{	'deSubchan':/^capa$/,
		'dfpSubchan':'capa'
	},
	{	'deSubchan':/^outros$/,
		'dfpSubchan':""
	},
	{	'deSubchan':/^viagemblog.*$/,
		'dfpSubchan':'blog'
	},
	{	'deSubchan':/^viagemcruzeiros.*$/,
		'dfpSubchan':'cruzeiros'
	},
	{	'deSubchan':/^viageminternacionaiseua.*$/,
		'dfpSubchan':'destinos/internacionais/eua'
	},
	{	'deSubchan':/^viagemfamosos.*$/,
		'dfpSubchan':'destinos/famosos'
	},
	{	'deSubchan':/^viageminternacionais.*$/,
		'dfpSubchan':'destinos/internacionais'
	},
	{	'deSubchan':/^viageminternacionaiseuropa.*$/,
		'dfpSubchan':'destinos/internacionais/europa'
	},
	{	'deSubchan':/^viagemnacionais.*$/,
		'dfpSubchan':'destinos/nacionais'
	},
	{	'deSubchan':/^viagemfotos.*$/,
		'dfpSubchan':'fotos'
	},
	{	'deSubchan':/^viagemturismonacopa.*$/,
		'dfpSubchan':'turismo_na_copa'
	}
];