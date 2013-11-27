
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

module("Configurações", {
    setup : function() {
        deleteUvar();
        deleteScript();
    }
});

test('Página não existe nas configurações', function() {
    var urlMap = window.urlMap;
    window.urlMap = [
        {
            're'    : /^http(s)?:\/\/(www[0-9]*.)?.uol(\/.*)?$/,
            'id'    : '500'
        }
    ];
    var tracking = new RetargetingTrack();
    window.universal_variable = {
        "page": {
            "category": "Product" 
        },
        "product":{
            "sku_code": "3UQ9A"
        }
    };
    tracking.init('http://qunit-runner.intranet/test');
    equal(document.getElementById('retargetingtrack'), null, 'Não deve incluir um script no DOM.');
    window.urlMap = urlMap;
});

test('Não deve rodar se variável universal não existir', function() {
    var tracking = new RetargetingTrack();
    tracking.init('http://qunit-runner.intranet/test');
    equal(document.getElementById('retargetingtrack'), null, 'Não deve incluir um script no DOM.');
});

test('Não deve rodar se variável universal não tiver o parametro page', function() {
    var tracking = new RetargetingTrack();
    window.universal_variable = {
        "product":{
            "sku_code": "3UQ9A"
        }
    };
    tracking.init('http://qunit-runner.intranet/test');
    equal(document.getElementById('retargetingtrack'), null, 'Não deve incluir um script no DOM.');
});

test('Não deve rodar se variável universal não tiver o parametro de category do objeto page', function() {
    var tracking = new RetargetingTrack();
    window.universal_variable = {
        "page": {
        },
        "product":{
            "sku_code": "3UQ9A"
        }
    };
    tracking.init('http://qunit-runner.intranet/test');
    equal(document.getElementById('retargetingtrack'), null, 'Não deve incluir um script no DOM.');
});