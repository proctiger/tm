
module("Tracking de checkout", {
    setup : function() {
        deleteUvar();
        deleteScript();
    }
});

test('Página de checkout sem atributo "basket"', function () {
    window.universal_variable = {
        "page": {
            "category": "Checkout" 
        }
    };
    startTracking();

    equal(getScriptSrc(), null, 
        'Não deve adicionar script');
});

test('Página de checkout com atributo "basket" diferente de Object', function () {
    window.universal_variable = {
        "page": {
            "category": "Checkout" 
        }, 
        "basket" : ""
    };
    startTracking();

    equal(getScriptSrc(), null, 
        'Não deve adicionar script');
});

test('Página de checkout com atributo "basket" sem atributo "line_item"', function () {
    window.universal_variable = {
        "page": {
            "category": "Checkout" 
        },
        "basket" : {}
    };
    startTracking();
    equal(getScriptSrc(), null, 
        'Não deve adicionar script');
});

test('Página de checkout com atributo "basket" com atributo "line_item" diferente de Array', function () {
    window.universal_variable = {
        "page": {
            "category": "Checkout" 
        },
        "basket" : {
            "line_items": ""
        }
    };
    startTracking();
    equal(getScriptSrc(), null, 
        'Não deve adicionar script');
});

test('Página de checkout com atributo "basket" com atributo "line_item" sendo um array vazio', function () {
    window.universal_variable = {
        "page": {
            "category": "Checkout" 
        },
        "basket" : {
            "line_items": []
        }
    };
    startTracking();
    equal(getScriptSrc(), null, 
        'Não deve adicionar script');
});

test('Página de checkout com atributo "basket" sem atributo product', function () {
    window.universal_variable = {
        "page": {
            "category": "Checkout" 
        },
        "basket" : {
            "line_items": [
                {

                }
            ]
        }
    };
    startTracking();
    equal(getScriptSrc(), null, 
        'Não deve adicionar script');
});

test('Página de checkout com atributo "basket" com atributo product diferente de Object', function () {
    window.universal_variable = {
        "page": {
            "category": "Checkout" 
        },
        "basket" : {
            "line_items": [
                {
                    "product" : ""
                }
            ]
        }
    };
    startTracking();
    equal(getScriptSrc(), null, 
        'Não deve adicionar script');
});

test('Página de checkout com atributo "basket" sem atributo sku_code', function () {
    window.universal_variable = {
        "page": {
            "category": "Checkout" 
        },
        "basket" : {
            "line_items": [
                {
                    "product" : {

                    }
                }
            ]
        }
    };
    startTracking();
    equal(getScriptSrc(), null, 
        'Não deve adicionar script');
});

test('Página de checkout com atributo "basket" com atributo sku_code diferente de String', function () {
    window.universal_variable = {
        "page": {
            "category": "Checkout" 
        },
        "basket" : {
            "line_items": [
                {
                    "product" : {
                        "sku_code": []
                    }
                }
            ]
        }
    };
    startTracking();
    equal(getScriptSrc(), null, 
        'Não deve adicionar script');
});

test('Página de checkout com atributo "basket" com atributo sku_code vazio', function () {
    window.universal_variable = {
        "page": {
            "category": "Checkout" 
        },
        "basket" : {
            "line_items": [
                {
                    "product" : {
                        "sku_code": ""
                    }
                }
            ]
        }
    };
    startTracking();
    equal(getScriptSrc(), null, 
        'Não deve adicionar script');
});

test('Página de checkout com apenas um produto', function() {
    window.universal_variable = {
        "page": {
            "category": "Checkout" 
        },
        "basket": {
            "line_items": [
                {   
                    "product": {
                        "sku_code": "3UQ9A"
                    }
                }

            ]
        } 
    };
    var tracking = new RetargetingTrack();
    tracking.init('http://qunit-runner.intranet/test');

    equal(getScriptSrc(), 'http://iruol.dynad.net/wildcard/tracking?customer=500&page=checkout&sku=3UQ9A', 
        'Deve adicionar um script para o customer 500 para uma página de checkout com um SKU de produto');
});

test('Página de checkout com mais de um produto', function() {
    window.universal_variable = {
        "page": {
            "category": "Checkout" 
        },
        "basket": {
            "line_items": [
                {   
                    "product": {
                        "sku_code": "3UQ9A"
                    }
                }, 
                {
                    "product": {
                        "sku_code": "4651321"
                    }
                }

            ]
        } 
    };
    var tracking = new RetargetingTrack();
    tracking.init('http://qunit-runner.intranet/test');

    equal(getScriptSrc(), 'http://iruol.dynad.net/wildcard/tracking?customer=500&page=checkout&sku=3UQ9A;4651321', 
        'Deve adicionar um script para o customer 500 para uma página de checkout com um SKU de produto');
});

test('Página de checkout com produtos iguais', function() {
    window.universal_variable = {
        "page": {
            "category": "Checkout" 
        },
        "basket": {
            "line_items": [
                {   
                    "product": {
                        "sku_code": "3UQ9A"
                    }
                }, 
                {
                    "product": {
                        "sku_code": "3UQ9A"
                    }
                }

            ]
        } 
    };
    var tracking = new RetargetingTrack();
    tracking.init('http://qunit-runner.intranet/test');

    equal(getScriptSrc(), 'http://iruol.dynad.net/wildcard/tracking?customer=500&page=checkout&sku=3UQ9A;3UQ9A', 
        'Deve adicionar um script para o customer 500 para uma página de checkout com um SKU de produto');
});
