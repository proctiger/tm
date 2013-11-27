
var RetargetingTrack = function (location) {
    var SCRIPT_TAG_ID = 'retargetingtrack';
    var log = new Message();
    var uVar;

    this.init = function(location) {
        var doc = document;
        var location = location || doc.location.href;
        var partner = getPartner(location);
        if (!partner) {
            return;
        };
        uVar = window.universal_variable || false;
        if (!uVar) {
            log.error('Favor configurar sua variável universal');
            return;
        }if (!uVar.page) {
            log.error('Favor configurar o objeto "page" da variável universal');
            return;
        }
        if (!uVar.page.category) {
            log.error('Favor configurar o atributo category do objeto "page" de sua variável universal');
            return;
        }
        if (!location) {
            log.error('Url inválida');
        }
        var uri = getUri(partner);
        if (doc.getElementById(SCRIPT_TAG_ID) && doc.getElementById(SCRIPT_TAG_ID).src == uri) {
            return;
        }
        var tagUtils = new TagUtils();
        tagUtils.createTagScript(SCRIPT_TAG_ID, uri);
    };

    var getUri = function (partner) {
        var uri = 'http://iruol.dynad.net/wildcard/tracking?';
        var params = getParams(partner);
        if (!params) {
            return;
        }
        uri = uri + params;
        return uri;
    };
    
    var getParams = function (partner) {
        var category = getCategory();
        if (!category) {
            return;
        }
        var products = getProducts(category);
        if (!products) {
            return;
        }
        var params = 'customer=' + partner + '&page=' + category + '&sku=' + products;
        return params;
    };

    var getPartner = function (location) {
        var utils = new ObjectUtils();
        var value = utils.getValueFromMatch(location, 'id', urlMap);
        if (!value) {
            log.error('Página não permitida');
        }
        return value;
    };

    var getCategory = function () {
        var category = new ObjectUtils();
        category = uVar.page.category.toLowerCase();
        if (category != "product" && category != "checkout" && category != "category" && category != "basket") {
            log.error('Categoria inválida');
            return;
        }
        return category;
    };

    var getProducts = function (category) {
        var products;
        if (category == "product") {
            products = getProductFromUvar();
        }
        if (category == "checkout") {
            products = getProductsFromBasket();
        }
        if (category == "category") {
            products = getProductsFromCategory();
        }
        if (category == "basket") {
            products = getProductsFromBasket();
        }
        if (!products) {
            log.error('Nenhum produto listado');
        }
        if (typeof products == 'object') {
            products = products.join(';');
        }
        return products;
    };
    
    var getProductFromUvar = function () {
        if (!uVar.product || !uVar.product.sku_code) {
            return;
        }
        var products = uVar.product.sku_code;
        return products;
    }

    var getProductsFromBasket = function () {
        var line_items;
        var products = [];
        if (!uVar.basket) {
            log.error('Favor adicionar o objeto "basket" da variável universal');
            return;
        }
        if (!uVar.basket.line_items || !uVar.basket.line_items.length) {
            log.error('Carrinho vazio');
            return;
        }
        line_items = uVar.basket.line_items;
        var length = line_items.length;
        for (var i = 0; i < length; i++) {
            var item = line_items[i];
            if (!item.product || !item.product.sku_code) {
                return;
            }
            products.push(item.product.sku_code);
        }
        if (!products.length) {
            log.error('Carrinho vazio');
        }
        return products;
    };

    var getProductsFromCategory = function () {
        var items;
        var products = [];
        if (!uVar.listing) {
            log.error('Favor adicionar o objeto "listing" da variável universal');
            return;
        }
        if (!uVar.listing.items) {
            log.error('lista de itens vazia');
            return;
        }
        items = uVar.listing.items;
        for (var i = 0, length = items.length; i < length; i++) {
            var item = items[i];
            if (!item.sku_code) {
                return;
            }
            products.push(item.sku_code);
        }
        if (!products.length) {
            log.error('Carrinho vazio');
        }
        return products;
    };
};

var dom = new DomUtils ();
dom.ready(function () {
    var tracking = new RetargetingTrack();
    tracking.init();
});