
var DomUtils = function () {
    var doc = document;

    this.ready = function(fn, timeout) {
        var readyState = doc.readyState;
        var timeout = (timeout ? timeout + 50 : 500);
        var $this = this;
        if (typeof fn != 'function') {
            return false;
        }
        if(readyState && readyState == 'complete') {
            fn();
        } else {
            setTimeout(function () {$this.ready(fn, timeout)}, timeout);
        }
    };
};
