
var DomUtils = function () {
    var doc = document;
    var location = this.location = doc.location.href;

    COOKIEUTILS.call(this);
    TAGUTILS.call(this);

    this.ready = function(fn, timeout) {
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
};
