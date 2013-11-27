
TM.defaultBanners = [
    {
        'id'    : 'banner-120x20',
        'dfpPos': 'top', 
        'pos'   : 1, 
        'width' : 120, 
        'height': 20
    },
    {
        'id'    : 'banner-120x20-1',
        'dfpPos': 'bottom', 
        'pos'   : 8, 
        'width' : 120, 
        'height': 20
    },
    {
        'id'    : 'banner-120x20-2',
        'dfpPos': 'bottom', 
        'pos'   : 8, 
        'width' : 120, 
        'height': 20
    },    
    {
        'id'    : 'banner-168x28',
        'dfpPos': 'top', 
        'pos'   : 1, 
        'width' : 168, 
        'height': 28
    },
    {
        'id'    : 'banner-168x28-1',
        'dfpPos': 'bottom', 
        'pos'   : 8, 
        'width' : 168, 
        'height': 28
    },
    {
        'id'    : 'banner-168x28-2',
        'dfpPos': 'bottom', 
        'pos'   : 8, 
        'width' : 168, 
        'height': 28
    },    
    {
        'id'    : 'banner-216x36',
        'dfpPos': 'top', 
        'pos'   : 1, 
        'width' : 216, 
        'height': 36
    },
    {
        'id'    : 'banner-216x36-1',
        'dfpPos': 'bottom', 
        'pos'   : 8, 
        'width' : 216, 
        'height': 36
    },
    {
        'id'    : 'banner-216x36-2',
        'dfpPos': 'bottom', 
        'pos'   : 8, 
        'width' : 216, 
        'height': 36
    },    
    {
        'id'    : 'banner-300x50',
        'dfpPos': 'top', 
        'pos'   : 1, 
        'width' : 300, 
        'height': 50
    },
    {
        'id'    : 'banner-300x50-1',
        'dfpPos': 'bottom', 
        'pos'   : 8, 
        'width' : 300, 
        'height': 50
    },
    {
        'id'    : 'banner-300x50-2',
        'dfpPos': 'bottom', 
        'pos'   : 8, 
        'width' : 300, 
        'height': 50
    },    
    {
        'id'    : 'banner-468x60', 
        'pos'   : 1, 
        'width' : 468, 
        'height': 60
    },  
    {
        'id'    : 'banner-468x60-1', 
        'pos'   : 8, 
        'width' : 468, 
        'height': 60
    },
    {
        'id'    : 'banner-468x60-2', 
        'pos'   : 8, 
        'width' : 468, 
        'height': 60
    },    
    {
        'id'    : 'banner-320x50',
        'dfpPos': 'top', 
        'pos'   : 1, 
        'width' : 320, 
        'height': 50
    },
    {
        'id'    : 'banner-320x50-1',
        'dfpPos': 'bottom', 
        'pos'   : 8, 
        'width' : 320, 
        'height': 50
    }, 
    {
        'id'    : 'banner-320x50-2',
        'dfpPos': 'bottom', 
        'pos'   : 8, 
        'width' : 320, 
        'height': 50
    },    
    {
        'id'    : 'banner-250x250', 
        'pos'   : 5, 
        'width' : 250, 
        'height': 250
    }, 
    {
        'id'    : 'banner-768x1024', 
        'pos'   : 1, 
        'width' : 768, 
        'height': 1024
    }, 
    {
        'id'    : 'banner-640x960', 
        'pos'   : 1, 
        'width' : 640, 
        'height': 960
    }, 
    {
        'id'    : 'banner-300x250', 
        'pos'   : 5, 
        'width' : 300, 
        'height': 250
    }
];

 TM.urlConfBanners = [
     {
         're'         : /^http(s)?:\/\/(www[0-9]*.)?(m)?.uol.com.br(\/.*)?$/,
         'banners'    : [
            {
                'id'    : 'banner-slot', 
                'action': 'de', 
                'pos'   : 1, 
                'size'  : 'slot'
            }, 
            {
                'id'    : 'banner-slot-2', 
                'action': 'de', 
                'pos'   : 2, 
                'size'  : 'slot'
            }
         ]
    }, 
    {
        // 're'        : /^http(s)?:\/\/(www[0-9]*.)?(m)?(app)?.folha(.uol)?.com(.br)?(\/.*)?$/, 
        're'        : /folha/, 
        'banners'   : [ 
            {
                'id'    : 'banner-768x1024', 
                'pos'   : 1, 
                'width' : 768, 
                'height': 1024
            },
            {
                'id'    : 'banner-728x90', 
                'dfpPos': 'top',
                'pos'   : 1, 
                'width' : 728, 
                'height': 90
            },
            {
                'id'    : 'banner-300x250', 
                'pos'   : 5, 
                'width' : 300, 
                'height': 250
            }            
        ]
    }  
];
