TM.dfpSiteMap = [
    {
        'deSite':'uolbr',
        'dfpSite':'uol'
    }
];

TM.dfpChanMap = [
    {
        'deChan':'batepapo',
        'dfpChan':'bate_papo'
    }
];

TM.capa = [
    {
        're': /^http(s)?:\/\/(www.)?batepapo.uol.com.br\/?$/
    }
];

TM.dfpSubchanMap = [
	{	'deSubchan':/^capa$/,
		'dfpSubchan':'capa'
	},
	{	'deSubchan':/^outros$/,
		'dfpSubchan':""
	},
	{	'deSubchan':/^arquivo.*$/,
		'dfpSubchan':'arquivo'
	},
	{	'deSubchan':/^auditoriovirtual.*$/,
		'dfpSubchan':'auditorio_virtual'
	},
	{	'deSubchan':/^bpcidades.*$/,
		'dfpSubchan':'cidades'
	},
	{	'deSubchan':/^bpsexo.*$/,
		'dfpSubchan':'sexo'
	},
	{	'deSubchan':/^salas.*$/,
		'dfpSubchan':'salas'
	},
	{	'deSubchan':/^salas-idades-18-a-20.*$/,
		'dfpSubchan':'salas/idade/18_a_20_anos'
	},
	{	'deSubchan':/^salas-idades-20-a-30.*$/,
		'dfpSubchan':'salas/idade/20_a_30_anos'
	},
	{	'deSubchan':/^salas-idades-30-a-40.*$/,
		'dfpSubchan':'salas/idade/30_a_40_anos'
	},
	{	'deSubchan':/^salas-idades-40-a-50.*$/,
		'dfpSubchan':'salas/idade/40_a_50_anos'
	},
	{	'deSubchan':/^salas-idades-50-a-60.*$/,
		'dfpSubchan':'salas/idade/50_a_60_anos'
	},
	{	'deSubchan':/^salas-cidades.*$/,
		'dfpSubchan':'salas/cidades_e_regioes'
	},
	{	'deSubchan':/^salas-temas-encontros.*$/,
		'dfpSubchan':'salas/temas_encontros'
	},
	{	'deSubchan':/^salas-temas-imagens.*$/,
		'dfpSubchan':'salas/temas_imagens'
	},
	{	'deSubchan':/^salas-temas-sexo-gays.*$/,
		'dfpSubchan':'salas/temas_sexo/gay'
	},
	{	'deSubchan':/^salas-temas-sexo.*$/,
		'dfpSubchan':'salas/temas_sexo'
	}
];