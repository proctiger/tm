
var DynadTrack = function () {
    var SCRIPT_TAG_ID = 'dynadTrack';
    var prefix = '[UOL Tag Manager] ';

    this.init = function() {
        var uVar = window.universal_variable || false;
        if (!uVar) {
            Message.error('Favor configurar sua variável universal', prefix);
            return;
        }if (!uVar.page) {
            Message.error('Favor configurar o objeto "page" da variável universal', prefix);
            return;
        }
        if (!uVar.page.category) {
            Message.error('Favor configurar o atributo category do objeto "page" de sua variável universal', prefix);
            return;
        }
        var URI = getUri();
        var tagUtils = new TagUtils();
        tagUtils.createTagScript(SCRIPT_TAG_ID, URI);
    };

    var getUri = function () {
        var URI = 'http://iruol.dynad.net/wildcard/tracking/';
        var params = getParams();
        URI = URI + params;
        return URI;
    };
    
    var getParams = function () {
        var params;
        var partner = 'customer=';
        var category = '&evt=';
        var products;
        partner = partner + getPartner();
        category = category + getCategory();
        products = getProducts(getCategory());
        params = partner + category + products;
        return params;
    };

    var getPartner = function (argument) {
        var location = document.location.href;
        var utils = new ObjectUtils();
        return utils.getValueFromMatch(location, 'id');
    };

    var getCategory = function () {
        var category = new ObjectUtils();
        category = category.getValueFromKey(categoryMap, window.universal_variable.page.category).name;
        return category;
    };

    var getProducts = function (category) {
        var utils = new ObjectUtils();
        var products = utils.getValueFromKey(categoryMap, window.universal_variable.page.category).productsQuery;
        if (category == "detail" || category == "checkout") {
            if (!window.universal_variable.product || !window.universal_variable.product.sku_code) {
                return;
            }
            products = products + window.universal_variable.product.sku_code;
        }
        if (category == "categ") {
            products = products + getFromCategory().join(';');
        }
        if (category == "cart") {
            products = products + getFromBasket().join(';');
        }
        return products;
    };
    
    var getFromBasket = function () {
        var line_items;
        var products = [];
        if (!window.universal_variable.basket) {
            throw 'Favor adicionar o objeto "basket" da variável universal';
        }
        if (!window.universal_variable.basket.line_items) {
            throw 'Carrinho vazio';
        }
        line_items = window.universal_variable.basket.line_items;
        for (var i = 0, length = line_items.length; i < length; i++) {
            var item = line_items[i];
            if (!item.product || !item.product.sku_code) {
                return;
            }
            products.push(item.product.sku_code);
        }
        if (!products.length) {
            throw 'Carrinho vazio';
        }
        return products;
    };

    var getFromCategory = function () {
        var items;
        var products = [];
        if (!window.universal_variable.listing) {
            throw 'Favor adicionar o objeto "listing" da variável universal';
        }
        if (!window.universal_variable.listing.items) {
            throw 'lista de itens vazia';
        }
        items = window.universal_variable.listing.items;
        for (var i = 0, length = items.length; i < length; i++) {
            var item = items[i];
            if (!item.sku_code) {
                return;
            }
            products.push(item.sku_code);
        }
        if (!products.length) {
            throw 'Carrinho vazio';
        }
        return products;
    };
};

var Dynad = new DynadTrack();
Dynad.init();