TM.dfpSiteMap = [
    {
        'deSite':'uolbr',
        'dfpSite':'uol'
    }
];

TM.dfpChanMap = [
    {
        'deChan':'economia',
        'dfpChan':'economia'
    },
    {
        'deChan':'ultnoticias',
        'dfpChan':'noticias'
    },
    {
        'deChan':'carros',
        'dfpChan':'carros'
    },
    {
        'deChan':'empregos',
        'dfpChan':'empregos'
    },
    {
        'deChan':'mundigi',
        'dfpChan':'tecnologia'
    },
    {
        'deChan':'tempoetrans',
        'dfpChan':'tempo_transito_e_mapas'
    }
];

TM.capa = [
    {
        're': /^http(s)?:\/\/(www.)?economia.uol.com.br\/?$/
    },
    {
        're': /^http(s)?:\/\/(www.)?carros.uol.com.br\/?$/
    },
    {
        're': /^http(s)?:\/\/(www.)?noticias.uol.com.br\/?$/
    }, 
    {
        're': /^http(s)?:\/\/(www.)?noticias.uol.com.br\/empregos\/?$/
    }, 
    {
        're': /^http(s)?:\/\/(www.)?noticias.uol.com.br\/ultnot\/bichos\/?$/
    } 
];

TM.dfpSubchanMap = [
	/********************** ecomonia *******************************/
	{'deSubchan':/^outros.*$/,'dfpSubchan':''},
	{'deSubchan':/^economiavideos.*$/,'dfpSubchan':'videos'},
	{'deSubchan':/^economianoticias.*$/,'dfpSubchan':'noticias'},
	{'deSubchan':/^economianegocios.*$/,'dfpSubchan':'negocios'},
	{'deSubchan':/^economiair.*$/,'dfpSubchan':'imposto_de_renda'},
	{'deSubchan':/^economiafin.*$/,'dfpSubchan':'financas_pessoais'},
	{'deSubchan':/^economiaempreendedorismo.*$/,'dfpSubchan':'empreendedorismo'},
	{'deSubchan':/^economiaemp.*$/,'dfpSubchan':'empresas'},
	{'deSubchan':/^economiaalbum.*$/,'dfpSubchan':'fotos'},
	{'deSubchan':/^economiaagronegocio.*$/,'dfpSubchan':'agronegocio'},
	{'deSubchan':/^cotacoescambio.*$/,'dfpSubchan':'cotacoes/cambio'},
	{'deSubchan':/^cotacoes.*$/,'dfpSubchan':'cotacoes'},
	{'deSubchan':/^capa$/,'dfpSubchan':'capa'},
	{'deSubchan':/^achadoseconomicos.*$/,'dfpSubchan':'achados_economicos'},
	{'deSubchan':/^blogdasophia.*$/,'dfpSubchan':'blog/sophia'},
	/********************** ecomonia *******************************/

	/********************** carros *******************************/
	{'deSubchan':/^blogomundoemmovimento.*$/,'dfpSubchan':'blog/mundo_em_movimento'},
    {'deSubchan':/^carrosalbum.*$/,'dfpSubchan':'fotos'},
    {'deSubchan':/^carrosblogdaredacao.*$/,'dfpSubchan':'blog/redacao'},
    {'deSubchan':/^carrosbloginfomoto.*$/,'dfpSubchan':'blog/infomoto'},
    {'deSubchan':/^carrosblogsuzanecarvalho.*$/,'dfpSubchan':'blog/suzane_carvalho'},
    {'deSubchan':/^carrosmotos.*$/,'dfpSubchan':'motos'},
    {'deSubchan':/^carrossalao.*$/,'dfpSubchan':'salao'},
    /********************** carros *******************************/

	/********************** noticias *******************************/    
	{'deSubchan':/^ultnotvideos.*$/,'dfpSubchan':'videos'},
	{'deSubchan':/^ultnotpeaobarretos.*$/,'dfpSubchan':'festa_peao_de_barretos'},
	{'deSubchan':/^ultnotmd.*$/,'dfpSubchan':'noticias'},
	{'deSubchan':/^ultnotinternacional.*$/,'dfpSubchan':'internacionais'},
	{'deSubchan':/^ultnotcotidiano.*$/,'dfpSubchan':'cotidiano'},
	{'deSubchan':/^ultnot.*$/,'dfpSubchan':'ultimas_noticias'},
	{'deSubchan':/^testedeprodutostablets.*$/,'dfpSubchan':'guia_de_produtos/tablets'},
	{'deSubchan':/^tabloide.*$/,'dfpSubchan':'tabloide'},
	{'deSubchan':/^saudejairobouer.*$/,'dfpSubchan':'saude/jairo_bouer'},
	{'deSubchan':/^saudebemestar.*$/,'dfpSubchan':'saude/bem_estar'},
	{'deSubchan':/^saudealimentacao.*$/,'dfpSubchan':'saude/alimentacao'},
	{'deSubchan':/^saude.*$/,'dfpSubchan':'saude'},
	{'deSubchan':/^reuters.*$/,'dfpSubchan':'reuters'},
	{'deSubchan':/^politica.*$/,'dfpSubchan':'politica'},
	{'deSubchan':/^notrj.*$/,'dfpSubchan':'rio_de_janeiro'},
	{'deSubchan':/^notalbum.*$/,'dfpSubchan':'fotos'},
	{'deSubchan':/^meio-ambiente.*$/,'dfpSubchan':'meio_ambiente'},
	{'deSubchan':/^loteria.*$/,'dfpSubchan':'loterias'},
	{'deSubchan':/^jornais.*$/,'dfpSubchan':'jornais'},
	{'deSubchan':/^efe.*$/,'dfpSubchan':'efe'},
	{'deSubchan':/^ciencia.*$/,'dfpSubchan':'ciencia'},
	{'deSubchan':/^blogjosiasdesouza.*$/,'dfpSubchan':'blog/josias_de_souza'},
	{'deSubchan':/^blogfernandorodrigues.*$/,'dfpSubchan':'blog/fernando_rodrigues'},
	{'deSubchan':/^blogdosakamoto.*$/,'dfpSubchan':'blog/sakamoto'},
	{'deSubchan':/^blogdomariomagalhaes.*$/,'dfpSubchan':'blog/mario_magalhaes'},
	{'deSubchan':/^blogcristianonabuco.*$/,'dfpSubchan':'blog/cristiano_nabuco'},
	{'deSubchan':/^blogcolunaesplanada.*$/,'dfpSubchan':'blog/coluna_esplanada'},
	{'deSubchan':/^afp.*$/,'dfpSubchan':'afp'}
	/********************** noticias *******************************/
];