TM.dfpSiteMap = [
    {
        'deSite':'uolbr',
        'dfpSite':'uol'
    }
];

TM.dfpChanMap = [
    {
        'deChan':'boaforma',
        'dfpChan':'boa_forma'
    }
];

TM.capa = [
    {
        're': /^http(s)?:\/\/(www.)?boaforma.uol.com.br\/?$/
    }
];

TM.dfpSubchanMap = [
    {   'deSubchan':/^capa$/,
        'dfpSubchan':'capa'
    },
    {   'deSubchan':/^outros$/,
        'dfpSubchan':""}
];