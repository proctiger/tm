TM.dfpSiteMap = [
    {
        'deSite':'uolbr',
        'dfpSite':'uol'
    }
];

TM.dfpChanMap = [
    {
        'deChan':'jogos',
        'dfpChan':'jogos'
    }
];

TM.capa = [
    {
    	're': /^http(s)?:\/\/(www.)?jogos.uol.com.br\/?$/
    }
];

TM.dfpSubchanMap = [
	{	'deSubchan':/^capa$/,
		'dfpSubchan':'capa'
	},
	{	'deSubchan':/^outros$/,
		'dfpSubchan':""
	},
	{	'deSubchan':/^jogos3ds.*$/,
		'dfpSubchan':'3ds'
	},
	{	'deSubchan':/^jogosbgs.*$/,
		'dfpSubchan':'brasil_game_show'
	},
	{	'deSubchan':/^jogosds.*$/,
		'dfpSubchan':'ds'
	},
	{	'deSubchan':/^jforum.*$/,
		'dfpSubchan':'forum'
	},
	{	'deSubchan':/^jogosonline.*$/,
		'dfpSubchan':'online'
	},
	{	'deSubchan':/^jogospc.*$/,
		'dfpSubchan':'pc'
	},
	{	'deSubchan':/^jogosps2.*$/,
		'dfpSubchan':'ps2'
	},
	{	'deSubchan':/^jogosps3.*$/,
		'dfpSubchan':'ps3'
	},
	{	'deSubchan':/^jogospsp.*$/,
		'dfpSubchan':'psp'
	},
	{	'deSubchan':/^jogospsv.*$/,
		'dfpSubchan':'psv'
	},
	{	'deSubchan':/^jogoswii.*$/,
		'dfpSubchan':'wii'
	},
	{	'deSubchan':/^jogoswiiu.*$/,
		'dfpSubchan':'wii_u'
	},
	{	'deSubchan':/^jogosx360.*$/,
		'dfpSubchan':'xbox_360'
	}
];