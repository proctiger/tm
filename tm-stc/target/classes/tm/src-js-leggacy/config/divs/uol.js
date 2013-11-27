
TM.defaultBanners.push({
    'id':'banner-120x35',
    'action':'http://bn.imguol.com/1x1.gif',
    'dfpPos': 'top',
    'pos':6,
    'width':120,
    'height':35
});

TM.defaultBanners.push({
    'id':'banner-120x35-2',
    'action':'http://bn.imguol.com/1x1.gif',
    'dfpPos': 'middle',
    'pos':9,
    'width':120,
    'height':35
});

TM.defaultBanners.push({
    'id':'banner-588x414',
    'pos':5,
    'width':588,
    'height':414
});

TM.defaultBanners.push({
    'id':'banner-300x250-2',
    'pos':5,
    'width':300,
    'height':250
});

TM.defaultBanners.push({
    'id': 'banner-130x55',
    'action': 'http://bn.imguol.com/1x1.gif', 
    'pos': 6,
    'width': 130,
    'height': 55
});

TM.defaultBanners.push({
    'id': 'banner-728x90-2',
    'dfpPos': 'bottom',
    'pos': 8,
    'width': 728,
    'height': 90
});


TM.urlConfBanners = [
    {
        're': /^http(s)?:\/\/(www.)?jogos.uol.com.br(\/.*)?$/, 
        'banners' : [
            {
                'id':'banner-120x35',
                'dfpPos': 'top',
                'pos':6,
                'width':120,
                'height':35
            }
        ]
    }, 
    {
        're': /^http(s)?:\/\/(www.)?comidasebebidas.uol.com.br(\/.*)?$/, 
        'banners' : [
            {
                'id':'banner-120x35',
                'dfpPos': 'top',
                'pos':6,
                'width':120,
                'height':35
            }
        ]
    }, 
    {
        're'      : /^http(s)?:\/\/carros.uol.com.br(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-300x100',
                'pos': 9,
                'width': 300,
                'height': 100
            }
        ]
    },
    {
        're'      : /^http(s)?:\/\/noticias.uol.com.br(\/.*)?$/,
        'banners' : [
            {
                'id':'banner-120x35',
                'dfpPos': 'top',
                'pos':6,
                'width':120,
                'height':35
            }
        ]
    },
    {
        're'      : /^http(s)?:\/\/copadomundo.uol.com.br(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-100x25',
                'pos': 5,
                'width': 100,
                'height': 25
            },
            {
                'id': 'banner-120x35',
                'dfpPos': 'top',
                'rotate': {'size': 7, 'interval' : 3000}, 
                'pos': 6,
                'width': 120,
                'height': 35
            }
        ]
    },
    {
        're'      : /^http(s)?:\/\/tecnologia.uol.com.br(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-120x35',
                'dfpPos': 'top',
                'pos': 6,
                'width': 120,
                'height': 35
            }
        ]
    },
    {
        're'      : /^http(s)?:\/\/viagem.uol.com.br\/turismo-na-copa(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-120x35',
                'dfpPos': 'top',
                'rotate': {'size': 7, 'interval' : 3000}, 
                'pos': 6,
                'width': 120,
                'height': 35
            }
        ]
    },    
    {
        're'      : /^http(s)?:\/\/esporte.uol.com.br\/futebol\/campeonatos\/brasileir(.*)?$/,
        'banners' : [
            {
                'id': 'banner-120x35-2',
                'dfpPos': 'top',
                'rotate': {'size': 7, 'interval' : 3000}, 
                'pos': 6,
                'width': 120,
                'height': 35
            }
        ]
    },
    {
        're'      : /^http(s)?:\/\/(.*)esporte.uol.com.br(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-100x25',
                'pos': 5,
                'width': 100,
                'height': 25
            }
        ]
    },
    {
        'keyword'      : /.*,(72526|6371),.*/,
        'banners' : [
            {
                'id': 'banner-120x35-2',
                'dfpPos': 'middle',
                'pos': 9,
                'width': 120,
                'height': 35
            }            
        ]
    },
    {
        're'      : /^http(s)?:\/\/boaforma.uol.com.br(\/.*)?$/,
        'banners' : [
            {
                'id':'banner-120x35',
                'dfpPos': 'top',
                'pos':6,
                'width':120,
                'height':35
            }
        ]
    },
    {
        're'      : /^http(s)?:\/\/(economia|guia|mulher).uol.com.br(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-120x35',
                'dfpPos': 'top',
                'pos': 6,
                'width': 120,
                'height': 35
            }
        ]
    },
    {
        're'      : /^http(s)?:\/\/educacao.uol.com.br(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-120x35-2',
                'dfpPos': 'middle',
                'pos': 9,
                'width': 120,
                'height': 35
            }
        ]
    },
    {
        'keyword'      : /.*,(uol-romance),.*/,
        'banners' : [
            {
                'id': 'banner-120x35',
                'dfpPos': 'top',
                'pos': 6,
                'width': 120,
                'height': 35
            },
            {
                'id': 'banner-120x35-2',
                'dfpPos': 'middle',
                'pos': 9,
                'width': 120,
                'height': 35
            }
        ]
    },
    {
        're'      : /^http(s)?:\/\/vestibular.uol.com.br(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-120x35',
                'dfpPos': 'top',
                'pos': 6,
                'width': 120,
                'height': 35
            }
        ]
    },    
    {
        're'      : /^http(s)?:\/\/viagem.uol.com.br(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-155x260',
                'action': 'hide',         
                'pos': 6,
                'width': 155,
                'height': 260
            }            
        ]
    },
    
    
    {
        're'      : /^http(s)?:\/\/musica.uol.com.br\/eventos\/budweiser(.*)?$/,
        'banners' : [
    				{
    				    'id': 'banner-300x58',
    				    'width': 300,
    				    'height': 58,
    				    'dfpPos': 'left',
    				    'pos': 9
    				},
                    {
                       'id': 'banner-300x58-2',
                       'width': 300,
                       'height': 58,
                       'dfpPos': 'center',
                       'pos': 12
                    },
                    {
                       'id': 'banner-300x58-3',
                       'width': 300,
                       'height': 58,
                       'dfpPos': 'right'
                    }
        ]
    },
    
    
    {
        're'        : /^http(s)?:\/\/(www.)?sexo.uol.com.br(\/.*)?$/,
        'banners'   : [
            {
                'id'    : 'banner-300x600',
                'action': 'hide',
                'pos'   : 3, 
                'width' : 300, 
                'height': 600
            },
            {
                'id'    : 'banner-1x1',
                'action': 'hide',
                'pos'   : 11, 
                'width' : 1, 
                'height': 1
            }            
        ]
    }
];
