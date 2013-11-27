TM.dfpSiteMap = [
    {
        'deSite':'uolbr',
        'dfpSite':'uol'
    }
];

TM.dfpChanMap = [
    {
        'deChan':'cinema',
        'dfpChan':'cinema'
    }
];

TM.capa = [
    {
        're': /^http(s)?:\/\/(www.)?cinema.uol.com.br\/?$/
    }
];

TM.dfpSubchanMap = [
	{	'deSubchan':/^capa$/,
		'dfpSubchan':'capa'
	},
	{	'deSubchan':/^outros$/,
		'dfpSubchan':""
	},
	{	'deSubchan':/^cinealbum.*$/,
		'dfpSubchan':'fotos'
	},
	{	'deSubchan':/^cineblog.*$/,
		'dfpSubchan':""
	},
	{	'deSubchan':/^cinemainacioaraujo.*$/,
		'dfpSubchan':'blog/inacio_araujo'
	},
	{	'deSubchan':/^cinemarobertosadovski.*$/,
		'dfpSubchan':""
	},
	{	'deSubchan':/^cineestreias.*$/,
		'dfpSubchan':""
	},
	{	'deSubchan':/^cinepodcast.*$/,
		'dfpSubchan':""
	}
];