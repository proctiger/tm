TM.dfpSiteMap = [
    {
    	'deSite':'uolbr',
    	'dfpSite':'uol'
    }
];

TM.dfpChanMap = [
    {
    	'deChan':'guiauol',
    	'dfpChan':'guia_uol'
    },
	{
		'deChan':'divearte',
		'dfpChan':'entretenimento'
	},
	{
        'deChan':'radiouol',
        'dfpChan':'radio_uol'
    },
    {
        'deChan':'musica',
        'dfpChan':'musica'
    },
    {
        'deChan':'televisao',
        'dfpChan':'televisao'
    },
    {
        'deChan':'person',
        'dfpChan':'celebridades'
    },
    {
        'deChan':'cinema',
        'dfpChan':'cinema'
    },
    {
        'deChan':'receitas',
        'dfpChan':'comidas_e_bebidas'
    },
    {
        'deChan':'viagem',
        'dfpChan':'viagem'
    },
    {
        'deChan':'sexo',
        'dfpChan':'sexo'
    },
    {
        'deChan':'gay',
        'dfpChan':'gay'
    }
];

TM.capa = [
    {
        're': /^http(s)?:\/\/(www.)?entretenimento.uol.com.br\/?$/
    }, 
    {
        're': /^http(s)?:\/\/(www.)?entretenimento.uol.com.br\/revistas\/?$/
    },
    {
        're': /^http(s)?:\/\/(www.)?www.radio.uol.com.br\/#\/home\/?$/
    },
    {
        're': /^http(s)?:\/\/(www.)?musica.uol.com.br\/?$/
    },
    {
        're': /^http(s)?:\/\/(www.)?televisao.uol.com.br\/?$/
    },
    {
        're': /^http(s)?:\/\/(www.)?sexo.uol.com.br\/gay\/?$/
    }, 
    {
        're': /^http(s)?:\/\/(www.)?sexo.uol.com.br\/sexo-adulto\/?$/
    }
];

TM.dfpSubchanMap = [
	/******************************guia uol**************************/
	{'deSubchan':/^guiauolspteatro.*$/,'dfpSubchan':'sao_paulo/teatro'},
	{'deSubchan':/^guiauolspshows.*$/,'dfpSubchan':'sao_paulo/shows'},
	{'deSubchan':/^guiauolsprestaurantes.*$/,'dfpSubchan':'sao_paulo/restaurantes'},
	{'deSubchan':/^guiauolsppasseios.*$/,'dfpSubchan':'sao_paulo/passeios'},
	{'deSubchan':/^guiauolspguloseimas.*$/,'dfpSubchan':'sao_paulo/guloseimas'},
	{'deSubchan':/^guiauolspexposicoes.*$/,'dfpSubchan':'sao_paulo/exposicoes'},
	{'deSubchan':/^guiauolspdanca.*$/,'dfpSubchan':'sao_paulo/danca'},
	{'deSubchan':/^guiauolspcriancas.*$/,'dfpSubchan':'sao_paulo/criancas'},
	{'deSubchan':/^guiauolspconcertos.*$/,'dfpSubchan':'sao_paulo/concertos'},
	{'deSubchan':/^guiauolspcinema.*$/,'dfpSubchan':'sao_paulo/cinema'},
	{'deSubchan':/^guiauolspbares.*$/,'dfpSubchan':'sao_paulo/bares'},
	{'deSubchan':/^guiauolsp.*$/,'dfpSubchan':'sao_paulo'},
	{'deSubchan':/^guiauolrjteatro.*$/,'dfpSubchan':'rio_de_janeiro/teatro'},
	{'deSubchan':/^guiauolrjshows.*$/,'dfpSubchan':'rio_de_janeiro/shows'},
	{'deSubchan':/^guiauolrjrestaurantes.*$/,'dfpSubchan':'rio_de_janeiro/restaurantes'},
	{'deSubchan':/^guiauolrjpasseios.*$/,'dfpSubchan':'rio_de_janeiro/passeios'},
	{'deSubchan':/^guiauolrjguloseimas.*$/,'dfpSubchan':'rio_de_janeiro/guloseimas'},
	{'deSubchan':/^guiauolrjexposicoes.*$/,'dfpSubchan':'rio_de_janeiro/exposicoes'},
	{'deSubchan':/^guiauolrjdanca.*$/,'dfpSubchan':'rio_de_janeiro/danca'},
	{'deSubchan':/^guiauolrjcriancas.*$/,'dfpSubchan':'rio_de_janeiro/criancas'},
	{'deSubchan':/^guiauolrjconcertos.*$/,'dfpSubchan':'rio_de_janeiro/concertos'},
	{'deSubchan':/^guiauolrjcinema.*$/,'dfpSubchan':'rio_de_janeiro/cinema'},
	{'deSubchan':/^guiauolrjbares.*$/,'dfpSubchan':'rio_de_janeiro/bares'},
	{'deSubchan':/^guiauolrj.*$/,'dfpSubchan':'rio_de_janeiro'},
	{'deSubchan':/^guiauolcrteatro.*$/,'dfpSubchan':'curitiba/teatro'},
	{'deSubchan':/^guiauolcrshows.*$/,'dfpSubchan':'curitiba/shows'},
	{'deSubchan':/^guiauolcrrestaurantes.*$/,'dfpSubchan':'curitiba/restaurantes'},
	{'deSubchan':/^guiauolcrpasseios.*$/,'dfpSubchan':'curitiba/passeios'},
	{'deSubchan':/^guiauolcrguloseimas.*$/,'dfpSubchan':'curitiba/guloseimas'},
	{'deSubchan':/^guiauolcrexposicoes.*$/,'dfpSubchan':'curitiba/exposicoes'},
	{'deSubchan':/^guiauolcrdanca.*$/,'dfpSubchan':'curitiba/danca'},
	{'deSubchan':/^guiauolcrcriancas.*$/,'dfpSubchan':'curitiba/criancas'},
	{'deSubchan':/^guiauolcrconcertos.*$/,'dfpSubchan':'curitiba/concertos'},
	{'deSubchan':/^guiauolcrcinema.*$/,'dfpSubchan':'curitiba/cinema'},
	{'deSubchan':/^guiauolcrbares.*$/,'dfpSubchan':'curitiba/bares'},
	{'deSubchan':/^guiauolcr.*$/,'dfpSubchan':'curitiba'},
	{'deSubchan':/^guiauolbrteatro.*$/,'dfpSubchan':'brasilia/teatro'},
	{'deSubchan':/^guiauolbrshows.*$/,'dfpSubchan':'brasilia/shows'},
	{'deSubchan':/^guiauolbrrestaurantes.*$/,'dfpSubchan':'brasilia/restaurantes'},
	{'deSubchan':/^guiauolbrpasseios.*$/,'dfpSubchan':'brasilia/passeios'},
	{'deSubchan':/^guiauolbrguloseimas.*$/,'dfpSubchan':'brasilia/guloseimas'},
	{'deSubchan':/^guiauolbrexposicoes.*$/,'dfpSubchan':'brasilia/exposicoes'},
	{'deSubchan':/^guiauolbrdanca.*$/,'dfpSubchan':'brasilia/danca'},
	{'deSubchan':/^guiauolbrcriancas.*$/,'dfpSubchan':'brasilia/criancas'},
	{'deSubchan':/^guiauolbrconcertos.*$/,'dfpSubchan':'brasilia/concertos'},
	{'deSubchan':/^guiauolbrcinema.*$/,'dfpSubchan':'brasilia/cinema'},
	{'deSubchan':/^guiauolbrbares.*$/,'dfpSubchan':'brasilia/bares'},
	{'deSubchan':/^guiauolbr.*$/,'dfpSubchan':'brasilia'},
	{'deSubchan':/^guiauolbhteatro.*$/,'dfpSubchan':'belo_horizonte/teatro'},
	{'deSubchan':/^guiauolbhshows.*$/,'dfpSubchan':'belo_horizonte/shows'},
	{'deSubchan':/^guiauolbhrestaurantes.*$/,'dfpSubchan':'belo_horizonte/restaurantes'},
	{'deSubchan':/^guiauolbhpasseios.*$/,'dfpSubchan':'belo_horizonte/passeios'},
	{'deSubchan':/^guiauolbhguloseimas.*$/,'dfpSubchan':'belo_horizonte/guloseimas'},
	{'deSubchan':/^guiauolbhexposicoes.*$/,'dfpSubchan':'belo_horizonte/exposicoes'},
	{'deSubchan':/^guiauolbhdanca.*$/,'dfpSubchan':'belo_horizonte/danca'},
	{'deSubchan':/^guiauolbhcriancas.*$/,'dfpSubchan':'belo_horizonte/criancas'},
	{'deSubchan':/^guiauolbhconcertos.*$/,'dfpSubchan':'belo_horizonte/concertos'},
	{'deSubchan':/^guiauolbhcinema.*$/,'dfpSubchan':'belo_horizonte/cinema'},
	{'deSubchan':/^guiauolbhbares.*$/,'dfpSubchan':'belo_horizonte/bares'},
	{'deSubchan':/^guiauolbh.*$/,'dfpSubchan':'belo_horizonte'},
	{'deSubchan':/^guia.*$/,'dfpSubchan':'guia'},
	{'deSubchan':/^capa$/,'dfpSubchan':'capa'},
	/******************************guia uol**************************/
	
	/******************************entretenimento**************************/
	{'deSubchan':/^televisaoalbum.*$/,'dfpSubchan':'fotos'},
	{'deSubchan':/^natal.*$/,'dfpSubchan':'natal'},
	{'deSubchan':/^humor.*$/,'dfpSubchan':'humor'},
	{'deSubchan':/^entreblogredacao.*$/,'dfpSubchan':'blog/redacao'},
	{'deSubchan':/^danielbenevides.*$/,'dfpSubchan':'blog/daniel_benevides'},
	{'deSubchan':/^blogdoorlando.*$/,'dfpSubchan':'blog/orlando'},
	{'deSubchan':/^artistasaz.*$/,'dfpSubchan':'artistas_de_a_a_z'},
	{'deSubchan':/^antena.*$/,'dfpSubchan':'antena'},
	{'deSubchan':/^afazenda.*$/,'dfpSubchan':'a_fazenda'},
    /******************************entretenimento**************************/

    /******************************musica**************************/
	{'deSubchan':/^musicaalbum.*$/,'dfpSubchan':'fotos'},
	{'deChan':'musica','dfpChan':'musica'},
	/******************************musica**************************/

	/******************************sexo**************************/
	{'deSubchan':/^sexoultimasnoticias.*$/,'dfpSubchan':'ultimas_noticias'},
	{'deSubchan':/^sexoavisoidade.*$/,'dfpSubchan':'aviso_de_idade'},
	{'deSubchan':/^sexoadulto.*$/,'dfpSubchan':'adulto'},
	{'deSubchan':/^salas-temas-sexo-gays.*$/,'dfpSubchan':'salas/temas_sexo/gay'},
	{'deSubchan':/^salas-temas-sexo.*$/,'dfpSubchan':'salas/temas_sexo'},
	{'deSubchan':/^bpsexo.*$/,'dfpSubchan':'sexo'},
	{'deSubchan':/^bolbatepaposexo.*$/,'dfpSubchan':'sexo'}
    /******************************sexo**************************/

];