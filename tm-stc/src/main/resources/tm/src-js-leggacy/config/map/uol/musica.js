TM.dfpSiteMap = [
    {
        'deSite':'uolbr',
        'dfpSite':'uol'
    }
];

TM.dfpChanMap = [
    {
        'deChan':'musica',
        'dfpChan':'musica'
    }
];

TM.capa = [
    {
        're': /^http(s)?:\/\/(www.)?musica.uol.com.br\/?$/
    }
];

TM.dfpSubchanMap = [
	{	'deSubchan':/^capa$/,
		'dfpSubchan':'capa'
	},
	{	'deSubchan':/^outros$/,
		'dfpSubchan':""
	},
	{	'deSubchan':/^musicaalbum.*$/,
		'dfpSubchan':'fotos'
	},
	{	'deSubchan':/^blogradiouol.*$/,
		'dfpSubchan':'blog/radio_uol'
	},
	{	'deSubchan':/^musciablogronaldoevangelista.*$/,
		'dfpSubchan':""
	},
	{	'deSubchan':/^especiaisrollingstones.*$/,
		'dfpSubchan':'especiais/rolling_stones'
	},
	{	'deSubchan':/^especiaisu2.*$/,
		'dfpSubchan':'especiais/u2'
	},
	{	'deSubchan':/^musicapodcast.*$/,
		'dfpSubchan':""
	},
	{	'deSubchan':/^musicapoplink.*$/,
		'dfpSubchan':""
	}
];