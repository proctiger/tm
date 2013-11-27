
	TM.defaultBanners = [
    {
        'id'    : 'banner-300x250', 
        'dfpPos': 'top', 
        'pos'   : 5, 
        'width' : 300, 
        'height': 250
    },
    {
        'id'    : 'banner-300x250-1', 
        'dfpPos': 'bottom', 
        'pos'   : 5, 
        'width' : 300, 
        'height': 250
    },    
    {
        'id'    : 'banner-300x250-2', 
        'dfpPos': 'bottom', 
        'pos'   : 5, 
        'width' : 300, 
        'height': 250
    },
    {
        'id'    : 'banner-120x600',
        'pos'   : 6, 
        'width' : 120, 
        'height': 600
    },
    {
        'id'    : 'banner-120x600-1',
        'pos'   : 6, 
        'width' : 120, 
        'height': 600
    },
    {
        'id'    : 'banner-120x600-2',
        'pos'   : 6, 
        'width' : 120, 
        'height': 600
    },
    {
        'id'    : 'banner-728x90',
        'dfpPos': 'top',
        'pos'   : 1, 
        'width' : 728,
        'height': 90
    },    
    {
        'id'    : 'banner-728x90-1',
        'dfpPos': 'top',
        'pos'   : 1, 
        'width' : 728,
        'height': 90
    },    
    {
        'id'    : 'banner-728x90-2',
        'dfpPos': 'bottom',
        'pos'   : 8, 
        'width' : 728,
        'height': 90
    },
    {
        'id'    : 'banner-160x600',
        'dfpPos': 'top',
        'pos'   : 1, 
        'width' : 160,
        'height': 600
    },
    {
        'id'    : 'banner-160x600-1',
        'dfpPos': 'top',
        'pos'   : 1, 
        'width' : 160,
        'height': 600
    },
    {
        'id'    : 'banner-160x600-2',
        'dfpPos': 'bottom',
        'pos'   : 8, 
        'width' : 160,
        'height': 600
    }
];


TM.urlConfBanners = [
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?(todaoferta|vh1brasil|icarly|vinhoegastronomia|jogos360|folhadealphaville|discoverymulher)(.(bol|uol))?.com(.br)?(\/.*)?$/,
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