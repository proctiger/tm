
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

var startTracking = function () {
    var tracking = new RetargetingTrack();
    tracking.init('http://qunit-runner.intranet/test');
};
