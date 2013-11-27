
	TM.defaultBanners = [
    {
        'id'    : 'banner-300x250', 
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
        'id'    : 'banner-728x90',
        'dfpPos': 'top',
        'pos'   : 1, 
        'width' : 728,
        'height': 90
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