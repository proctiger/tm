
var getScriptSrc = function() {
    try {
        return document.getElementById('retargetingtrack').getAttribute('src');
    } catch (e) {
        if (console && console.log) {
            console.log('ERRO AO CAPTURAR SRC DO SCRIPT');
        }
        return;
    }
};

var deleteScript = function (id) {
    var id = id || 'retargetingtrack';
    if (document.getElementById(id)) {
        document.body.removeChild(document.getElementById(id));
    }
};

var deleteUvar = function () {
    window.universal_variable = window.universal_variable || false;
    if (window.universal_variable) {
        delete window.universal_variable;
    }
};

module("Tracking de carrinho", {
    setup : function() {
        deleteUvar();
        deleteScript();
    }
});

test('Sem uma lista de produtos', function() {
    window.universal_variable = {
        "page": {
            "category": "basket" 
        }
    };
    startTracking();
    equal(getScriptSrc(), null, 
        'Não deve criar script');
});

test('Página de carrinho atributo diferente de objeto', function() {
    window.universal_variable = {
        "page": {
            "category": "basket" 
        },
        "basket": 'asdasda'
    };
    startTracking();
    equal(getScriptSrc(), null, 
        'Não deve adicionar um script no DOM');
});

test('Carrinho lista de produtos', function() {
    window.universal_variable = {
        "page": {
            "category": "basket" 
        },
        "basket": {
        }
    };
    startTracking();
    equal(getScriptSrc(), null, 
        'Não deve criar script');
});

test('Lista de produtos não é um objeto', function() {
    window.universal_variable = {
        "page": {
            "category": "basket" 
        },
        "basket": {
            "line_items": 'aaaaa'
        }
    };
    startTracking();
    equal(getScriptSrc(), null, 
        'Não deve criar script');
});

test('Carrinho com lista de produtos vazia', function() {
    window.universal_variable = {
        "page": {
            "category": "basket" 
        },
        "basket": {
            "line_items": []
        }
    };
    startTracking();
    equal(getScriptSrc(), null, 
        'Não deve criar script');
});

test('Carrinho com lista sem atributo product', function() {
    window.universal_variable = {
        "page": {
            "category": "basket" 
        },
        "basket": {
            "line_items": [
                {   
                   
                }

            ]
        }   
    };
    startTracking();
    equal(getScriptSrc(), null, 
        'Deve adicionar um script para o customer 500 para uma página de carrinho com SKUs de uma lista produtos');
});

test('Carrinho com lista com atributo product diferente de objeto', function() {
    window.universal_variable = {
        "page": {
            "category": "basket" 
        },
        "basket": {
            "line_items": [
                {   
                   "product": 'produto'
                }

            ]
        }   
    };
    startTracking();
    equal(getScriptSrc(), null, 
        'Deve adicionar um script para o customer 500 para uma página de carrinho com SKUs de uma lista produtos');
});

test('Carrinho com apenas um produto sem sku', function() {
    window.universal_variable = {
        "page": {
            "category": "basket" 
        },
        "basket": {
            "line_items": [
                {   
                    "product": {
                    }
                }

            ]
        }   
    };
    startTracking();
    equal(getScriptSrc(), null, 
        'Deve adicionar um script para o customer 500 para uma página de carrinho com SKUs de uma lista produtos');
});

test('Carrinho com apenas um produto com sku diferente de string', function() {
    window.universal_variable = {
        "page": {
            "category": "basket" 
        },
        "basket": {
            "line_items": [
                {   
                    "product": {
                        "sku_code" : []
                    }
                }

            ]
        }   
    };
    startTracking();
    equal(getScriptSrc(), null, 
        'Deve adicionar um script para o customer 500 para uma página de carrinho com SKUs de uma lista produtos');
});

test('Carrinho com apenas um produto com sku vazio', function() {
    window.universal_variable = {
        "page": {
            "category": "basket" 
        },
        "basket": {
            "line_items": [
                {   
                    "product": {
                        "sku_code" : ""
                    }
                }

            ]
        }   
    };
    startTracking();
    equal(getScriptSrc(), null, 
        'Deve adicionar um script para o customer 500 para uma página de carrinho com SKUs de uma lista produtos');
});

test('Carrinho com apenas um produto', function() {
    window.universal_variable = {
        "page": {
            "category": "basket" 
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
    startTracking();
    equal(getScriptSrc(), 'http://iruol.dynad.net/wildcard/tracking?customer=500&page=basket&sku=3UQ9A', 
        'Deve adicionar um script para o customer 500 para uma página de carrinho com SKUs de uma lista produtos');
});

test('Página de carrinho com mais de um produto', function() {
    window.universal_variable = {
        "page": {
            "category": "basket" 
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
    startTracking();
    equal(getScriptSrc(), 'http://iruol.dynad.net/wildcard/tracking?customer=500&page=basket&sku=3UQ9A;4651321', 
        'Deve adicionar um script para o customer 500 para uma página de carrinho com SKUs de uma lista produtos');
});

test('Página de carrinho com vários produtos iguais', function() {
    window.universal_variable = {
        "page": {
            "category": "basket" 
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
    startTracking();
    equal(getScriptSrc(), 'http://iruol.dynad.net/wildcard/tracking?customer=500&page=basket&sku=3UQ9A;3UQ9A', 
        'Deve adicionar um script para o customer 500 para uma página de carrinho com SKUs de uma lista produtos');
});

