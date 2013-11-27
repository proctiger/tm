window.TM = TM || {};

var DOMUTILS = function () {
    var doc = document;
    var location = this.location = doc.location.href;

    COOKIEUTILS.call(this);
    TAGUTILS.call(this);

    this.ready = function(fn, timeout) {
        // Call function only after document is ready
        var readyState = doc.readyState;
        var timeout = (timeout ? timeout + 50 : 500);
        var $this = this;
        if (typeof fn != 'function') {
            return false;
        };
        if (!fn) {
            $this.logError('Favor informar o módulo e sua função para que ele seja iniciado')
        }
        if(readyState && readyState == 'complete') {
            fn();
        } else {
            setTimeout(function () {$this.ready(fn, timeout)}, timeout);
        }
    };
}

var TAGUTILS = function (argument) {

    var doc = document;

    this.getElementsByClassName = function (classname) {
        // IE 7 doesn't have, so i made it
        var nodesArr = [];
        var elements = doc.getElementsByTagName("*");
        var regexp   = new RegExp('(^| )'+classname+'( |$)');
        if(doc.getElementsByClassName){
            return doc.getElementsByClassName(classname);
        }
        for (var i = 0, length = elements.length; i < length; i++) {
            if(regexp.test(elements[i].className)){
                nodesArr.push(elements[i]);
            }
        }
        return nodesArr;
    };

    this.createTag = function (tagName, div, attributes) {
        // Create any tag and append in a div with {key:value} atributes
        ifrm = document.createElement(tagName);
        for (var key in attributes){
            var value = attributes[key];
            ifrm.setAttribute(key, value);    
        }
        div.appendChild(ifrm);
    };

    this.getElementsByAttribute = function (attr, limit, group, tagName) {
        // Get elements by it's attribute
        var result = [];
        var tagName = tagName || '*';
        var divs = group || document.getElementsByTagName(tagName);
        var length = length = divs.length;
        for (var i = 0; i < length; i++) {
            if (divs[i].getAttribute(attr) && result.length < limit) {
                result.push(divs[i]);
            }
        }
        return result;
    };
}

var ARRAYUTILS = function () {

    var toArr = function (arr) {
        if (typeof arr != 'object' || !arr[0]) {
            return [arr];
        }
        return arr;
    };

    var getDiffs = function (a1, a2){
        var diff = [];
        var len;
        var aux;
        len = a2.length;
        aux = ';' + a1.join(';') + ';';
        for (var i = 0; i < len; i++) {
            if(aux.indexOf(';' + a2[i] + ';') < 0){
                diff.push(a2[i]);
            }
        }
        return diff;
    };

    this.arrayDiff = function (a1, a2) {
        // Create an array with the diff of two arrays
        if (!a1 || !a2) {
            throw ('Favor informar dois arrays para que sejam comparados');
        }
        a1 = toArr(a1);
        a2 = toArr(a2);
        var firstDiff = getDiffs(a2,a1);
        var secondDiff = getDiffs(a1,a2);
        var diff = (secondDiff.length ? firstDiff : secondDiff);
        diff = (firstDiff != secondDiff ? firstDiff.concat(secondDiff) : diff);
        return diff;
    };

    this.arrayContains = function (a1, item) {
        // Check if array has an item
        var found  = false;
        var length = a1.length;
        for (var i = 0; i < length; i++) {
            if (a1[i] == item) {
                found = true;
                break;
            }
        }
        return found;
    };

    this.matchesInArray = function (item, a1) {
        // Check item matches in an array item
        var found  = false;
        var length = a1.length;
        for (var i = 0; i < length; i++) {
            if (item.match(a1[i])) {
                found = true;
                break;
            }
        }
        return found;
    };
}

var OBJECTUTILS = function () {

    this.cloneObject = function (a1, a2) {
        // Clones an object or add keys/values of one array to the other
        var a2 = a2 || {};
        if (typeof a1  != 'object' || typeof a2 != 'object' ) {
            throw ('Favor informar dois para que um receba o valor do outro');
        }
        for (var key in a1) {
            a2[key] = a1[key];
        }
        return a2;
    };
}

var LOGUTILS = function (pattern) {

    var pattern = (pattern ? pattern + ' ' : '');

    this.log = function (message) {
        // Logs message in the Tag manager's pattern
        var type = 'LOG: ';
        message  = pattern + type + message;
        if (window.console) {
            console.log(message);
        }
    };

    this.logWarn = function (message) {
        // Logs warns in the Tag manager's pattern
        var type = 'WARN: ';
        message  = pattern + type + message;
        if (window.console && window.console.warn) {
            console.warn(message);
        } else {
            console.log(message);
        }
    };

    this.logError = function (message) {
        // Logs errors in the Tag manager's pattern
        var type = 'ERROR: ';
        message  = pattern + type + message;
        if (window.console && window.console.error) {
            console.error(message);
        } else {
            console.log(message);
        }
    };
}

var Tagmanager = function () {

    var logPattern = '[UOL Tag Manager]';
    LOGUTILS.call(this, logPattern);

    this.divs = this.getElementsByClassName('tm-ads');
}

var SIGA = function () {

    DOMUTILS.call(this);
    OBJECTUTILS.call(this);
    Tagmanager.call(this);
    
    ARRAYUTILS.call(this);

    // var logPattern = '[UOL SIGA]';
    // LOGUTILS.call(this, logPattern);

    var $this = this;
    $this.userConfig = TM.Config.SIGA;
    $this.uri = 'http://adclient.siga.uol.com.br/format';
    $this.uriExtension = '.html?';

    try {
        $this.pg = Number($this.getCookie('UOLAFpg'));
    } catch(e) {
        $this.pg = 0;
    }

    $this.init = $this.ready(function () {
        if ($this.setupPageConfig()) {
            $this.display();
            $this.setPaginationCookie();
        }
    });

    this.setupPageConfig = function () {
        this.page = this.getPage();
        if (!this.page) {
            return false;
        }
        this.config = this.page.config;
        this.setupPageAds();
        return true;
    };

    this.getPage = function () {
        for (var i = 0; i < TM.SIGA.pages.length; i++) {
            if (this.location.match(TM.SIGA.pages[i].re)) {
                return TM.SIGA.pages[i];
            }
        }
    }

    this.setupPageAds = function () {
        for (var i = 0, length = this.page.banners.length; i < length; i++) {
            this.ads = this.ads || [];
            this.ads.push(this.page.banners[i]);
        }
    }

    this.display = function () {
        var limit = 3;
        var attr = 'siga';
        var divs = this.getElementsByAttribute(attr, limit, this.divs);
        if (!divs.length) {
            return false;
        }
        for (var i = 0; i < limit; i++) {
            var banner = this.createBanner(divs[i]);
            if (banner) {
                this.createTag('iframe', divs[i], {'src': banner.url, 'width': banner.width, 'height': banner.height, 'marginwidth': '0', 'marginheight': '0', 'frameBorder': '0', 'scrolling': 'no'});
            }
        }
    };

    this.createBanner = function (div) {
        var banner = {};
        var attributes = this.getAttributes(div);
        banner = this.validateBanner(attributes, div);
        if (!banner || !attributes) {
            return false;
        }
        banner.format = this.chooseFormat(banner.format);
        banner.config = this.setupBannerConfig(banner, attributes);
        banner.url = this.makeURL(banner);
        return banner;
    };

    this.setupBannerConfig = function (banner, attributes) {
        var config = (this.userConfig ? this.cloneObject(this.userConfig, config) : {});
        config = this.cloneObject(attributes, config);
        config = this.cloneObject(this.config, config);
        if (!config['coddisplaysupplier']) {
            this.logWarn('Código do usuário não definido para os anúncios do UOL Cliques');
            return false;
        }
        config['numads'] = banner.format.numAds;
        config['urlReferer'] = encodeURIComponent(location);
        config['adBlockCount'] = this.adBlockCountSiga = (typeof this.adBlockCountSiga != 'undefined')? this.adBlockCountSiga + 1 : 0;
        return config;
    };

    this.setPaginationCookie = function (argument) {
        var name = 'UOLAFpg=';
        var value = this.pg = (this.pg >= 9) ? 0 : this.pg + 1;
        this.setCookie(name, value);
    };

    this.getAttributes = function (div) {
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
            var key = item.split(':')[0], value = item.split(':')[1];
            attributes[key] = value;
        }
        if (!attributes['size']) {
            this.log('Algum anúncio de UOL Cliques não possui a chave size no atributo [siga] e será descartado');
            return false;
        }
        return attributes;
    };

    this.validateBanner = function (attributes, div) {
        var banner;
        var found = false;
        if (!div) {
            return false;
        }
        for (var i = 0, length = this.ads.length; i < length; i++) {
            var mapItem = this.ads[i];
            if (attributes.size != mapItem['size']) {
                continue;
            }
            banner = this.cloneObject(mapItem);
            found = true;
            break;
        }
        if (!found) {
            if (attributes['size']) {
                this.logWarn('O banner de UOL Cliques com size ['+ attributes['size'] +'] é inválido e será descartado');
            }
            return false;
        }
        return banner
    };

    this.chooseFormat = function (items) {
        var rand;
        var weightedArray = [];
        for (var i = 0, length = items.length; i < length; i++) {
            for (var j = 0, weight = items[i].weight; j < weight; j++) {
                weightedArray.push(items[i]);
            }
        }
        if (!weightedArray.length) {
            return false;
        }
        rand = Math.floor(Math.random() * weightedArray.length);
        format = weightedArray[rand];
        if (format.numAds == 0) {
            this.log('Nenhum anuncio cadastrado');
            return false;
        }
        return format;
    };

    this.makeURL = function (banner) {
        var config = banner.config;
        var url = (banner.format && banner.format.id) ? $this.uri + banner.format.id + $this.uriExtension : false;
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
}

var siga = new SIGA();
siga.init;