
module("Tracking de categoria", {
    setup : function() {
        deleteUvar();
        deleteScript();
    }
});


test('Página de categoria sem lista de produtos', function() {
    window.universal_variable = {
        "page": {
            "category": "Category" 
        }
    };
    startTracking();

    equal(getScriptSrc(), null, 
        'Não deve adicionar script');
});

test('Página de categoria com lista diferente de objeto', function() {
    window.universal_variable = {
        "page": {
            "category": "Category" 
        }, 
        "listing" : ""
    };
    startTracking();

    equal(getScriptSrc(), null, 
        'Não deve adicionar script');
});

test('Página de categoria com lista sem atributo items', function() {
    window.universal_variable = {
        "page": {
            "category": "Category" 
        }, 
        "listing" : {

        }
    };
    startTracking();

    equal(getScriptSrc(), null, 
        'Não deve adicionar script');
});

test('Página de categoria com lista com atributo items diferente de array', function() {
    window.universal_variable = {
        "page": {
            "category": "Category" 
        }, 
        "listing" : {
            "items" : ""
        }
    };
    startTracking();

    equal(getScriptSrc(), null, 
        'Não deve adicionar script');
});

test('Página de categoria com lista com atributo items vazio', function() {
    window.universal_variable = {
        "page": {
            "category": "Category" 
        }, 
        "listing" : {
            "items" : []
        }
    };
    startTracking();

    equal(getScriptSrc(), null, 
        'Não deve adicionar script');
});

test('Página de categoria com item de lista sem atributo sku_code', function() {
    window.universal_variable = {
        "page": {
            "category": "Category" 
        }, 
        "listing" : {
            "items" : [
                {}
            ]
        }
    };
    startTracking();

    equal(getScriptSrc(), null, 
        'Não deve adicionar script');
});

test('Página de categoria com item de lista com atributo sku_code diferente de string', function() {
    window.universal_variable = {
        "page": {
            "category": "Category" 
        }, 
        "listing" : {
            "items" : [
                {
                    "sku_code" : []
                }
            ]
        }
    };
    startTracking();

    equal(getScriptSrc(), null, 
        'Não deve adicionar script');
});

test('Página de categoria com item de lista com atributo sku_code vazio', function() {
    window.universal_variable = {
        "page": {
            "category": "Category" 
        }, 
        "listing" : {
            "items" : [
                {
                    "sku_code" : ""
                }
            ]
        }
    };
    startTracking();

    equal(getScriptSrc(), null, 
        'Não deve adicionar script');
});

test('Página de categoria com apenas um produto', function() {
    window.universal_variable = {
        "page": {
            "category": "Category" 
        },
        "listing": {
            "items": [
                {
                  "sku_code": "1234567890red"
                }
            ]
        }
    };
    startTracking();

    equal(getScriptSrc(), 'http://iruol.dynad.net/wildcard/tracking?customer=500&page=category&sku=1234567890red', 
        'Deve adicionar um script para o customer 500 para uma página de categoria com SKUs de uma lista de produtos');
});

test('Página de categoria com mais de um produto', function() {
    window.universal_variable = {
        "page": {
            "category": "Category" 
        },
        "listing": {
            "items": [
                {
                  "sku_code": "1234567890red"
                },
                {
                  "sku_code": "1234567891red"
                }
            ]
        }
    };
    startTracking();

    equal(getScriptSrc(), 'http://iruol.dynad.net/wildcard/tracking?customer=500&page=category&sku=1234567890red;1234567891red', 
        'Deve adicionar um script para o customer 500 para uma página de categoria com SKUs de uma lista de produtos');
});
