TM.dfpSiteMap = [
    {
        'deSite':'uolbr',
        'dfpSite':'uol'
    }
];

TM.dfpChanMap = [
    {
        'deChan':'blog',
        'dfpChan':'blog'
    }
];

TM.capa = [
    {
        're': /^http(s)?:\/\/(www.)?blog.uol.com.br\/?$/
    }
];

TM.dfpSubchanMap = [
	{	'deSubchan':/^capa$/,
		'dfpSubchan':'capa'
	},
	{	'deSubchan':/^outros$/,
		'dfpSubchan':""
	},
	{	'deSubchan':/^blogantoniofarinaci.*$/,
		'dfpSubchan':'antonio_farinaci'
	},
	{	'deSubchan':/^blogdoavallone.*$/,
		'dfpSubchan':'avallone'
	},
	{	'deSubchan':/^blogdomenon.*$/,
		'dfpSubchan':'menon'
	},
	{	'deSubchan':/^blogetiquetesima.*$/,
		'dfpSubchan':'etiquetesima'
	},
	{	'deSubchan':/^mauriciostycer.*$/,
		'dfpSubchan':'mauricio_stycer'}
];