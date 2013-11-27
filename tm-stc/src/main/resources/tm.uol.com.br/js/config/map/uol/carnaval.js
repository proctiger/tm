TM.dfpSiteMap = [
    {
        'deSite':'uolbr',
        'dfpSite':'uol'
    }
];

TM.dfpChanMap = [
    {
        'deChan':'carnaval',
        'dfpChan':'carnaval'
    }
];

TM.capa = [
    {
        're': /^http(s)?:\/\/(www.)?carnaval.uol.com.br\/?$/
    }
];

TM.dfpSubchanMap = [
    {   'deSubchan':/^capa$/,
        'dfpSubchan':'capa'
    },
    {   'deSubchan':/^outros$/,
        'dfpSubchan':""
    },
    {   'deSubchan':/^carapuracao.*$/,
        'dfpSubchan':'apuracao'
    },
    {   'deSubchan':/^carrecife.*$/,
        'dfpSubchan':'recife'
    },
    {   'deSubchan':/^carriodejaneiro.*$/,
        'dfpSubchan':'rio_de_janeiro'
    },
    {   'deSubchan':/^carsalvador.*$/,
        'dfpSubchan':'salvador'
    },
    {   'deSubchan':/^carsaopaulo.*$/,
        'dfpSubchan':'sao_paulo'
    }
];