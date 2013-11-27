
TM.defaultBanners.push({
    'id'    : 'banner-468x60', 
    'pos'   : 1, 
    'width' : 468, 
    'height': 60
});

TM.urlConfBanners = [
    {
        're'      : /^http(s)?:\/\/(www.)?radio.uol.com.br(\/.*)?$/,
        'banners' : [
            {
                'id'    : 'banner-120x35', 
                'pos'   : 6, 
                'width' : 120, 
                'height': 35
            },
            {
                'id': 'banner-130x55', 
                'action': 'http://bn.imguol.com/1x1.gif',
                'pos': 6,
                'width': 130,
                'height': 55
            },
            {
                'id': 'banner-150x385',
                'action': 'http://bn.imguol.com/1x1.gif',
                'pos': 1,
                'width': 150,
                'height': 385
            },
            {
                'id': 'banner-1x1',
                'action': 'http://bn.imguol.com/1x1.gif',
                'pos': 11,
                'width': 1,
                'height': 1
            },            
            {
                'id'    : 'banner-588x414', 
                'pos'   : 11, 
                'width' : 588, 
                'height': 414
            }
        ]
    }, 
    {
        're'      : /^http(s)?:\/\/(www.)?insercao.uol.com.br(\/.*)?$/,
        'banners' : [
            {
                'id'    : 'banner-120x35', 
                'pos'   : 6, 
                'width' : 120, 
                'height': 35
            },
            {
                'id': 'banner-130x55', 
                'action': 'http://bn.imguol.com/1x1.gif',
                'pos': 6,
                'width': 130,
                'height': 55
            },
            {
                'id': 'banner-150x385',
                'action': 'http://bn.imguol.com/1x1.gif',
                'pos': 1,
                'width': 150,
                'height': 385
            },
            {
                'id': 'banner-1x1',
                'action': 'http://bn.imguol.com/1x1.gif',
                'pos': 11,
                'width': 1,
                'height': 1
            },            
            {
                'id'    : 'banner-588x414', 
                'pos'   : 11, 
                'width' : 588, 
                'height': 414
            }
        ]
    },    
    {
        're'    : /^http(s)?:\/\/.*bol.uol.com.br(\/.*)?$/,
        'banners': [
            {
                'id'    : 'banner-300x250',
                'pos'   : 5, 
                'width' : 300, 
                'height': 250
            }, 
            {
                'id'    : 'banner-720x480',
                'pos'   : 1, 
                'width' : 720, 
                'height': 480
            }
        ]
    }, 
    {
        're'    : /^http(s)?:\/\/.*batepapo.uol.com.br(\/.*)?$/,
        'banners': [
            {
                'id': 'banner-120x60',
                'action': 'http://bn.imguol.com/1x1.gif',
                'pos': 6,
                'width': 120,
                'height': 60
            }, 
            {
                'id'    : 'banner-415x80',
                'action': 'http://bn.imguol.com/1x1.gif',
                'pos'   : 5, 
                'width' : 415, 
                'height': 80
            }
        ]
    },     
    {
        're'    : /^http(s)?:\/\/.*zip.uol.com.br(\/.*)?$/,
        'banners': [
            {
                'id'    : 'banner-720x480',
                'pos'   : 1, 
                'width' : 720, 
                'height': 480
            }
        ]
    }, 
    {
        're'    : /^http(s)?:\/\/.*jogosonline.uol.com.br(\/.*)?$/,
        'banners': [
            {
                'id': 'banner-130x55', 
                'action': 'hide',
                'pos': 6,
                'width': 130,
                'height': 55
            }
        ]
    }
];
