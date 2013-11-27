TM.defaultBanners = [
    {
        'id'    : 'banner-1x1',
        'pos'   : 11, 
        'width' : 1, 
        'height': 1
    },
    {
        'id'    : 'banner-300x250', 
        'dfpPos': 'bottom', 
        'pos'   : 5, 
        'width' : 300, 
        'height': 250
    },
    {
        'id'    : 'banner-300x600',
        'pos'   : 3, 
        'width' : 300, 
        'height': 600
    },
    {
        'id'    : 'banner-728x90',
        'pos'   : 1, 
        'width' : 728,
        'height': 90
    }
];


TM.urlConfBanners = [ 
    {
        're'      : /^http(s)?:\/\/(.+\.)?todaoferta.uol.com.br(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-120x600',
                'pos': 6,
                'width': 120,
                'height': 600
            }
        ]
    }
];