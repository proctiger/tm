TM.dfpSiteMap = [
    {
        'deSite':'uolbr',
        'dfpSite':'uol'
    }
];

TM.dfpChanMap = [
    {
        'deChan':'esporte',
        'dfpChan':'esporte'
    },
    {
        'deChan':'copadomundo',
        'dfpChan':'copa_do_mundo'
    }
];

TM.capa = [
    {
        're': /^http(s)?:\/\/(www.)?esporte.uol.com.br\/?$/
    },
    {
       	're': /^http(s)?:\/\/(www.)?copadomundo.uol.com.br\/?$/
    }
];

TM.dfpSubchanMap = [
	{'deSubchan':/^ultnot.*$/,'dfpSubchan':'ultimas_noticias'},
	{'deSubchan':/^volei.*$/,'dfpSubchan':'volei'},
	{'deSubchan':/^velocidade.*$/,'dfpSubchan':'velocidade'},
	{'deSubchan':/^vela.*$/,'dfpSubchan':'vela'},
	{'deSubchan':/^triatlo.*$/,'dfpSubchan':'triatlo'},
	{'deSubchan':/^tenis.*$/,'dfpSubchan':'tenis'},
	{'deSubchan':/^surfe.*$/,'dfpSubchan':'surfe'},
	{'deSubchan':/^radicais.*$/,'dfpSubchan':'esportes_radicais'},
	{'deSubchan':/^olimpiadascapa.*$/,'dfpSubchan':'olimpiadas/capa'},
	{'deSubchan':/^olimpiadasalbum.*$/,'dfpSubchan':'olimpiadas/fotos'},
	{'deSubchan':/^olimpiadas.*$/,'dfpSubchan':'olimpiadas'},
	{'deSubchan':/^outros.*$/,'dfpSubchan':''},
	{'deSubchan':/^nagradedomma.*$/,'dfpSubchan':'blog/na_grade_do_mma'},
	{'deSubchan':/^mma.*$/,'dfpSubchan':'mma'},
	{'deSubchan':/^lutas.*$/,'dfpSubchan':'lutas'},
	{'deSubchan':/^jforum.*$/,'dfpSubchan':'forum'},
	{'deSubchan':/^hipismo.*$/,'dfpSubchan':'hipismo'},
	{'deSubchan':/^golfe.*$/,'dfpSubchan':'golfe'},
	{'deSubchan':/^ginastica.*$/,'dfpSubchan':'ginastica'},
	{'deSubchan':/^futsal.*$/,'dfpSubchan':'futsal'},
	{'deSubchan':/^futebolvitoria.*$/,'dfpSubchan':'futebol/clubes/vitoria'},
	{'deSubchan':/^futebolvasco.*$/,'dfpSubchan':'futebol/clubes/vasco'},
	{'deSubchan':/^futeboltacaguanabara.*$/,'dfpSubchan':'futebol/campeonatos/taca_guanabara'},
	{'deSubchan':/^futebolsport.*$/,'dfpSubchan':'futebol/clubes/sport'},
	{'deSubchan':/^futebolselecaobrasileira.*$/,'dfpSubchan':'futebol/selecao_brasileira'},
	{'deSubchan':/^futebolsaopaulo.*$/,'dfpSubchan':'futebol/clubes/sao_paulo'},
	{'deSubchan':/^futebolsaocaetano.*$/,'dfpSubchan':'futebol/clubes/sao_caetano'},
	{'deSubchan':/^futebolsantos.*$/,'dfpSubchan':'futebol/clubes/santos'},
	{'deSubchan':/^futebolresultados.*$/,'dfpSubchan':'futebol/resultados'},
	{'deSubchan':/^futebolraiox.*$/,'dfpSubchan':'futebol'},
	{'deSubchan':/^futebolprogramacao.*$/,'dfpSubchan':'futebol/programacao_de_jogos'},
	{'deSubchan':/^futebolportuguesa.*$/,'dfpSubchan':'futebol/clubes/portuguesa'},
	{'deSubchan':/^futebolpontepreta.*$/,'dfpSubchan':'futebol/clubes/ponte_preta'},
	{'deSubchan':/^futebolparana.*$/,'dfpSubchan':'futebol/clubes/parana'},
	{'deSubchan':/^futebolpalmeiras.*$/,'dfpSubchan':'futebol/clubes/palmeiras'},
	{'deSubchan':/^futebolmercado.*$/,'dfpSubchan':'futebol/mercado_da_bola'},
	{'deSubchan':/^futebollibertadores.*$/,'dfpSubchan':'futebol/campeonatos/libertadores'},
	{'deSubchan':/^futebolitaliano.*$/,'dfpSubchan':'futebol/campeonatos/italiano'},
	{'deSubchan':/^futebolinterrs.*$/,'dfpSubchan':'futebol/clubes/internacional_rs'},
	{'deSubchan':/^futebolinter.*$/,'dfpSubchan':'futebol'},
	{'deSubchan':/^futebolingles.*$/,'dfpSubchan':'futebol/campeonatos/ingles'},
	{'deSubchan':/^futebolgremio.*$/,'dfpSubchan':'futebol/clubes/gremio'},
	{'deSubchan':/^futebolfluminense.*$/,'dfpSubchan':'futebol/clubes/fluminense'},
	{'deSubchan':/^futebolflamengo.*$/,'dfpSubchan':'futebol/clubes/flamengo'},
	{'deSubchan':/^futebolfigueirense.*$/,'dfpSubchan':'futebol/clubes/figueirense'},
	{'deSubchan':/^futebolespanhol.*$/,'dfpSubchan':'futebol/campeonatos/espanhol'},
	{'deSubchan':/^futebolcruzeiro.*$/,'dfpSubchan':'futebol/clubes/cruzeiro'},
	{'deSubchan':/^futebolcoritiba.*$/,'dfpSubchan':'futebol/clubes/coritiba'},
	{'deSubchan':/^futebolcorinthians.*$/,'dfpSubchan':'futebol/clubes/corinthians'},
	{'deSubchan':/^futebolcopasulamericana.*$/,'dfpSubchan':'futebol/copas/sulamericana'},
	{'deSubchan':/^futebolcopakaiser.*$/,'dfpSubchan':'futebol/copas/kaiser'},
	{'deSubchan':/^futebolcopadobrasil.*$/,'dfpSubchan':'futebol/copas/brasil'},
	{'deSubchan':/^futebolcapa.*$/,'dfpSubchan':'futebol/capa'},
	{'deSubchan':/^futebolcampeonatosmundialdeclubes.*$/,'dfpSubchan':'futebol/campeonatos/mundia_de_clubes'},
	{'deSubchan':/^futebolcampeonatoseliminatorias.*$/,'dfpSubchan':'futebol/campeonatos/eliminatorias'},
	{'deSubchan':/^futebolcampeonatosbrasileirob.*$/,'dfpSubchan':'futebol/campeonatos/brasileiro_serie_b'},
	{'deSubchan':/^futebolcampeonatosbasileiroa.*$/,'dfpSubchan':'futebol/campeonatos/brasileiro_serie_a'},
	{'deSubchan':/^futebolcampeonatosbasileiro.*$/,'dfpSubchan':'futebol/campeonatos/brasileiro'},
	{'deSubchan':/^futebolcampeonatos.*$/,'dfpSubchan':'futebol/campeonatos'},
	{'deSubchan':/^futebolcampeonatos.*$/,'dfpSubchan':'futebol/campeonatos'},
	{'deSubchan':/^futebolcampeonatopaulista.*$/,'dfpSubchan':'futebol/campeonatos/paulista'},
	{'deSubchan':/^futebolcampeonatoparanaense.*$/,'dfpSubchan':'futebol/campeonatos/paranaense'},
	{'deSubchan':/^futebolcampeonatomineiro.*$/,'dfpSubchan':'futebol/campeonatos/mineiro'},
	{'deSubchan':/^futebolcampeonatoligaeuropa.*$/,'dfpSubchan':'futebol/campeonatos/liga_europa'},
	{'deSubchan':/^futebolcampeonatogaucho.*$/,'dfpSubchan':'futebol/campeonatos/gaucho'},
	{'deSubchan':/^futebolcampeonatocatarinense.*$/,'dfpSubchan':'futebol/campeonatos/catarinense'},
	{'deSubchan':/^futebolbrasileirospelomundo.*$/,'dfpSubchan':'futebol/brasileiros_pelo_mundo'},
	{'deSubchan':/^futebolbotafogo.*$/,'dfpSubchan':'futebol/clubes/botafogo'},
	{'deSubchan':/^futebolbols.*$/,'dfpSubchan':'futebol/gols_da_rodada'},
	{'deSubchan':/^futebolbahia.*$/,'dfpSubchan':'futebol/clubes/bahia'},
	{'deSubchan':/^futebolavai.*$/,'dfpSubchan':'futebol/clubes/avai'},
	{'deSubchan':/^futebolatleticopr.*$/,'dfpSubchan':'futebol/clubes/atletico_pr'},
	{'deSubchan':/^futebolatleticomg.*$/,'dfpSubchan':'futebol/clubes/atletico_mg'},
	{'deSubchan':/^futebolamericamg.*$/,'dfpSubchan':'futebol/clubes/america_mg'},
	{'deSubchan':/^futebol.*$/,'dfpSubchan':'futebol'},
	{'deSubchan':/^futamericano.*$/,'dfpSubchan':'futebol_americano'},
	{'deSubchan':/^f1.*$/,'dfpSubchan':'f1'},
	{'deSubchan':/^examedaoab.*$/,'dfpSubchan':'exame_oab'},
	{'deSubchan':/^espoultimasnoticias.*$/,'dfpSubchan':'noticias'},
	{'deSubchan':/^esportevetv.*$/,'dfpSubchan':'blog/uol_esporte_ve_tv'},
	{'deSubchan':/^esportesaquaticos.*$/,'dfpSubchan':'esportes_aquaticos'},
	{'deSubchan':/^esportealbum.*$/,'dfpSubchan':'fotos'},
	{'deSubchan':/^espoplayertenis.*$/,'dfpSubchan':'placar/tenis'},
	{'deSubchan':/^espoplayerfutebol.*$/,'dfpSubchan':'placar/futebol'},
	{'deSubchan':/^espoplayerf1.*$/,'dfpSubchan':'placar/f1'},
	{'deSubchan':/^espoplayer.*$/,'dfpSubchan':'placar'},
	{'deSubchan':/^espobolao.*$/,'dfpSubchan':'bolao'},
	{'deSubchan':/^cornetafc.*$/,'dfpSubchan':'blog/cornetafc'},
	{'deSubchan':/^ciclismo.*$/,'dfpSubchan':'ciclismo'},
	{'deSubchan':/^capa$/,'dfpSubchan':'capa'},
	{'deSubchan':/^canoagem.*$/,'dfpSubchan':'canoagem'},
	{'deSubchan':/^campeonatobrasileiro.*$/,'dfpSubchan':'futebol/campeonatos/brasileiro_serie_a'},
	{'deSubchan':/^blogvinteum.*$/,'dfpSubchan':'blog/21'},
	{'deSubchan':/^blogteojose.*$/,'dfpSubchan':'blog/teo_jose'},
	{'deSubchan':/^blogtablog.*$/,'dfpSubchan':'blog/ta_blog'},
	{'deSubchan':/^blogswimchannel.*$/,'dfpSubchan':'blog/swim_channel'},
	{'deSubchan':/^blogreginanavarro.*$/,'dfpSubchan':'blog/regina_navarro'},
	{'deSubchan':/^blogradiouol.*$/,'dfpSubchan':'blog/radio_uol'},
	{'deSubchan':/^blogpaulkrugman.*$/,'dfpSubchan':'blog/paul_krugman'},
	{'deSubchan':/^blogpapodevarzea.*$/,'dfpSubchan':'blog/papo_de_varzea'},
	{'deSubchan':/^blogomundoemmovimento.*$/,'dfpSubchan':'blog/mundo_em_movimento'},
	{'deSubchan':/^blogobrasiltavendo.*$/,'dfpSubchan':'blog/o_brasil_ta_vendo'},
	{'deSubchan':/^blogmundigigablog.*$/,'dfpSubchan':'blog/giga_blog'},
	{'deSubchan':/^blogmundi.*$/,'dfpSubchan':'blog/giga_blog'},
	{'deSubchan':/^blogjucakfouri.*$/,'dfpSubchan':'blog/juca_kfouri'},
	{'deSubchan':/^blogjosiasdesouza.*$/,'dfpSubchan':'blog/josias_de_souza'},
	{'deSubchan':/^blogjogodaconquista.*$/,'dfpSubchan':'blog/jogo_da_conquista'},
	{'deSubchan':/^bloghappyhour.*$/,'dfpSubchan':'blog/happy_hour'},
	{'deSubchan':/^bloggvcult.*$/,'dfpSubchan':'blog/gv_cult'},
	{'deSubchan':/^blogfernandorodrigues.*$/,'dfpSubchan':'blog/fernando_rodrigues'},
	{'deSubchan':/^blogetiquetesima.*$/,'dfpSubchan':'etiquetesima'},
	{'deSubchan':/^blogerichbeting.*$/,'dfpSubchan':'blog/erich_beting'},
	{'deSubchan':/^blogdotorero.*$/,'dfpSubchan':'blog/torero'},
	{'deSubchan':/^blogdosbarrigudos.*$/,'dfpSubchan':'blog/barrigudos'},
	{'deSubchan':/^blogdosaltoalto.*$/,'dfpSubchan':'blog/salto_alto'},
	{'deSubchan':/^blogdosakamoto.*$/,'dfpSubchan':'blog/sakamoto'},
	{'deSubchan':/^blogdorodrigomattos.*$/,'dfpSubchan':'blog/rodrigo_mattos'},
	{'deSubchan':/^blogdoquesada.*$/,'dfpSubchan':'blog/quesada'},
	{'deSubchan':/^blogdoperrone.*$/,'dfpSubchan':'blog/perrone'},
	{'deSubchan':/^blogdoorlando.*$/,'dfpSubchan':'blog/orlando'},
	{'deSubchan':/^blogdonilsonxavier.*$/,'dfpSubchan':'blog/nilson_xavier'},
	{'deSubchan':/^blogdomenon.*$/,'dfpSubchan':'menon'},
	{'deSubchan':/^blogdomariomagalhaes.*$/,'dfpSubchan':'blog/mario_magalhaes'},
	{'deSubchan':/^blogdojosecruz.*$/,'dfpSubchan':'blog/jose_cruz'},
	{'deSubchan':/^blogdogilmar.*$/,'dfpSubchan':'blog/gilmar'},
	{'deSubchan':/^blogdoceara.*$/,'dfpSubchan':'blog/luiz_ceara'},
	{'deSubchan':/^blogdobrunovoloch.*$/,'dfpSubchan':'blog/bruno_voloch'},
	{'deSubchan':/^blogdoavallone.*$/,'dfpSubchan':'avallone'},
	{'deSubchan':/^blogdasophia.*$/,'dfpSubchan':'blog/sophia'},
	{'deSubchan':/^blogdaredacao.*$/,'dfpSubchan':'blog/redacao'},
	{'deSubchan':/^blogdaraquel.*$/,'dfpSubchan':'blog_da_raquel'},
	{'deSubchan':/^blogcristianonabuco.*$/,'dfpSubchan':'blog/cristiano_nabuco'},
	{'deSubchan':/^blogcolunaesplanada.*$/,'dfpSubchan':'blog/coluna_esplanada'},
	{'deSubchan':/^blogbienal.*$/,'dfpSubchan':'blog/bienal'},
	{'deSubchan':/^blogbalanacesta.*$/,'dfpSubchan':'blog/bala_na_cesta'},
	{'deSubchan':/^blogantoniofarinaci.*$/,'dfpSubchan':'antonio_farinaci'},
	{'deSubchan':/^basquete.*$/,'dfpSubchan':'basquete'},
	{'deSubchan':/^aventura.*$/,'dfpSubchan':'aventura'},
	{'deSubchan':/^atletismo.*$/,'dfpSubchan':'atletismo'}
];