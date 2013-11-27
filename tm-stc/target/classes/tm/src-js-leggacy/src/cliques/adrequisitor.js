TM.SIGA.setDefaultsConfig = function() {
    var config = {};
    var pages = TM.SIGA.pages;
    var location = TM.currHref;
    var length = pages.length;
    
    TM.Config.SIGA = TM.Config.SIGA || [];
    TM.Config.SIGAUser = TM.Config.SIGA || false;
    
    for (var i = 0; i < length; i++) {
        var page = pages[i];
        var action = TM.SIGA.actions(page.action);
        if (location.match(page.re)) {
            config = page.config;
            var banners = page.banners;
            var bannersLength = banners.length;
            for (var j = 0; j < bannersLength; j++) {
                TM.SIGA.ads = TM.SIGA.ads || [];
                TM.SIGA.ads.push(banners[j]);
            }
            if (action == 'hide') {
                TM.message('Todos os banners desta url serão escondidos');
                return false;
            }
            break;
        }
    }

    if (config.length == 0) {
        return false;
    }
    TM.Config.SIGAMain = config;
    return true;
};

TM.SIGA.setConfig = function (div) {
    var main = TM.Config.SIGAMain;
    var attributes = TM.SIGA.getAttributes(div);
    var user = TM.Config.SIGAUser;
    var config = [];

    for (var key in user) {
        config[key] = user[key];
    }

    for (var key in attributes) {
        config[key] = attributes[key];
    }

    for (var key in main) {
        config[key] = main[key];
    }

    return config;
}

TM.SIGA.bannerConfig = function (banner, attributes) {
    var config = TM.Config.SIGA;
    var result = [];
    for (var i in config){
        result[i] = config[i];
    }
    if (attributes) {
        for (var i in attributes) {
            result[i] = attributes[i];
        }
    }
    if (!result['coddisplaysupplier']) {
        TM.message('Código do usuário não definido para os anúncios de UOL Cliques', 'WARN');
        return false;
    }
    if (banner.format.numAds == 0) {
        TM.message('Nenhum anuncio cadastrado')
        return false;
    }
    result['numads'] = banner.format.numAds;
    result['urlReferer'] = encodeURIComponent(TM.currHref);
    result['adBlockCount'] = TM.SIGA.adBlockCountSiga = (typeof TM.SIGA.adBlockCountSiga != 'undefined')? TM.SIGA.adBlockCountSiga + 1 : 0;
    return result;
}

TM.SIGA.makeURL = function (banner) {
    var config = banner.config;
    var url = (banner.format && banner.format.id) ? 'http://adclient.siga.uol.com.br/format' + banner.format.id + '.html?' : false;
    var a = [];
    if (!url) {
        return false;
    }
    for (var i in config) {
        if (typeof config[i] != 'undefined') {
            a.push(i + '=' + config[i])
        }
    }
    url += a.join('&');
    return url;
};

TM.SIGA.getAttributes = function (div) {
    var attrObj = div.getAttribute('siga');
    var attrs = (attrObj) ? attrObj.split(';') : [];
    var length = attrs.length;
    var attributes = [];

    if (attrObj == null) {
        return false;
    }

    for (var i = 0; i < length; i++) {
        var item = attrs[i].replace(/\s/gm, '');
        if(item.length == 0) {
            continue;
        }
        var key = item.split(':')[0];
        var value = item.split(':')[1];
        attributes[key] = value;
    }
    if (!attributes['size']) {
        TM.message('Algum anúncio de UOL Cliques não possui a chave size no atributo [siga] e será descartado');
        return false;
    }
    return attributes;
};

TM.SIGA.actions = function (actions, div) {
    var div = div || document.body;
    var kind;
    var tag;
    if (!actions) {
        return false;
    }
    if(actions.kind) {
        kind = actions.kind;
        if (kind == 'script') {
            tag = document.createElement('script');
            tag.src = actions.src;
            div.appendChild(tag);
        } else if (kind == 'image') {
            tag = new Image;
            tag.src = actions.src;
            div.appendChild(tag);
        } else if (kind == 'iframe') {
            tag = document.createElement('iframe');
            tag.src = actions.src;
            div.appendChild(tag);
        }
        actions = kind;
    }
    return actions;
};

TM.SIGA.chooseFormat = function (items) {
    var rand;
    var result;
    var weightedArray = [];
    var length = items.length;
    for (var i = 0; i < length; i++) {
        var obj = items[i];
        var weight = obj.weight;
        for (var j = 0; j < weight; j++) {
            weightedArray.push(obj);
        }
    }
    if (!weightedArray.length) {
        return false;
    }
    rand = Math.floor(Math.random() * weightedArray.length);
    return(weightedArray[rand]);
};

TM.SIGA.validateBanner = function (attributes, div) {
    var adMap = TM.SIGA.ads || false;
    var found = false;
    var banner = {};
    var length;
    if (adMap) {
        length = adMap.length;
    } else {
        return false;
    }
    if (length > 0) {
        for (var i = 0; i < length; i++) {
            var mapItem = adMap[i];
            if (attributes.size == mapItem['size']) {
                if(mapItem.action && TM.SIGA.actions(mapItem.action, div)) {
                    return false;
                }
                for (j in mapItem) {
                    banner[j] = mapItem[j];
                }
                banner.block = div;
                banner.format = TM.SIGA.chooseFormat(banner.format);
                banner.config = TM.SIGA.bannerConfig(banner, attributes);
                banner.url = TM.SIGA.makeURL(banner);
                if (!banner.config || !banner.url || !banner.block || !banner.format) {
                    return false;
                }
                found = true;
                break;
            }
        }
        if (!found) {
            if (attributes['size']) {
                TM.message('O banner de UOL Cliques com size ['+ attributes['size'] +'] é inválido e será descartado', 'WARN');
            }
            return false;
        }
    }
    TM.SIGA.banners.push(banner);
    return banner
};

TM.SIGA.display = function () {
    var ifrm;
    var adBlockCountSiga;
    var divs = TM.getElementsByClassName('tm-ads') || [];
    var length = divs.length;
    var adBlocks = [];
    for (var i = 0; i < length; i++) {
        if (divs[i].getAttribute('siga') && adBlocks.length < 3) {
            adBlocks.push(divs[i]);
        }
    }
    length = adBlocks.length;
    TM.SIGA.banners = TM.SIGA.banners || [];
    if (!length) {
        return false;
    }
    for (var i = 0; i < length; i++) {
        var div = adBlocks[i];
        var config = TM.SIGA.setConfig(div);
        var banner;
        if (!config) {
            continue
        }
        banner = TM.SIGA.validateBanner(config, div);
        if(banner){
            ifrm = document.createElement('iframe');
            ifrm.src = banner.url;
            ifrm.setAttribute('width', banner.width);
            ifrm.setAttribute('height', banner.height);
            ifrm.setAttribute('marginwidth', '0');
            ifrm.setAttribute('marginheight', '0');
            ifrm.setAttribute('frameBorder', '0');
            ifrm.setAttribute('scrolling', 'no');
            div.appendChild(ifrm);
        }
    }
    TM.SIGA.pg = (TM.SIGA.pg >= 9) ? 0 : TM.SIGA.pg + 1;
    document.cookie = 'UOLAFpg=' + TM.SIGA.pg;
};

TM.SIGA.init = function () {
    try {
        TM.SIGA.pg = Number(TM.getCookie('UOLAFpg'));
    } catch(e) {
        TM.SIGA.pg = 0;
    }
    
    TM.Config = TM.Config || {};
    if(TM.SIGA.setDefaultsConfig()){
        TM.SIGA.display();
    }
}