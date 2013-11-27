

module("Tracking de página de produto", {
    setup : function() {
        deleteUvar();
        deleteScript();
    }
});

test('Página com produto com SKU code', function() {
    window.universal_variable = {
        "page": {
            "category": "Product" 
        },
        "product":{
            "sku_code": "3UQ9A"
        }
    };
    var tracking = new RetargetingTrack();
    tracking.init('http://qunit-runner.intranet/test');
    equal(getScriptSrc(), 'http://iruol.dynad.net/wildcard/tracking?customer=500&page=product&sku=3UQ9A', 
        'Deve adicionar um script para o customer 500 para uma página de um produto com SKU determinado');
});

test('Página com produto com SKU diferente de string', function() {
    window.universal_variable = {
        "page": {
            "category": "Product" 
        }, 
        "product":{
            "sku_code": []
        }
    };
    var tracking = new RetargetingTrack();
    tracking.init('http://qunit-runner.intranet/test');
    equal(getScriptSrc(), null, 
        'Não deve adicionar um script');
});

test('Página com produto com SKU vazio', function() {
    window.universal_variable = {
        "page": {
            "category": "Product" 
        }, 
        "product":{
            "sku_code": ""
        }
    };
    var tracking = new RetargetingTrack();
    tracking.init('http://qunit-runner.intranet/test');
    equal(getScriptSrc(), null, 
        'Não deve adicionar um script');
});

test('Página com produto sem SKU', function() {
    window.universal_variable = {
        "page": {
            "category": "Product" 
        }, 
        "product":{
        }
    };
    var tracking = new RetargetingTrack();
    tracking.init('http://qunit-runner.intranet/test');
    equal(getScriptSrc(), null, 
        'Não deve adicionar um script');
});

test('Página sem produto', function() {
    window.universal_variable = {
        "page": {
            "category": "Product" 
        }
    };
    var tracking = new RetargetingTrack();
    tracking.init('http://qunit-runner.intranet/test');
    equal(getScriptSrc(), null, 
        'Não deve adicionar um script');
});

