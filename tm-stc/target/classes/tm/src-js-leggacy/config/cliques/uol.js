
var TM = window.TM || {};

TM.SIGA = TM.SIGA || {};

TM.SIGA.COD_USER_UOL = '51eed576aff54be8b1311d90735f36a6';

TM.SIGA.pages = [
    {
        're'      : /^http(s)?:\/\/(.+\.)?uol.com.br(\/.*)?$/, 
        'banners' : [
            {
                'size': '300x250', 
                'format': [
                    {'id' : '84_a', 'numAds' : 1, 'weight': 1}
                ],
                'width': 300, 
                'height': 250
            }, 
             {
                'size': '944x185', 
                'format': [
                    {'id' : '85_a', 'numAds' : 1, 'weight': 1}
                ], 
                'width': 944, 
                'height': 185
            }, 
             {
                'size': '944x275', 
                'format': [
                    {'id' : '86_a', 'numAds' : 4, 'weight': 1}
                ], 
                'width': 944, 
                'height': 275
            }, 
             {
                'size': '622x370', 
                'format': [
                    {'id' : '87_a', 'numAds' : 3, 'weight': 1}
                ], 
                'width': 622, 
                'height': 370
            }, 
             {
                'size': '622x155', 
                'format': [
                    {'id' : '88_a', 'numAds' : 1, 'weight': 1}
                ], 
                'width': 622, 
                'height': 155
            }, 
             {
                'size': '300x600', 
                'format': [
                    {'id' : '89_a', 'numAds' : 3, 'weight': 1}
                ], 
                'width': 300, 
                'height': 600
            }

        ], 
        'config' : {
            'coddisplaysupplier' : TM.SIGA.COD_USER_UOL
        }
    }
];
