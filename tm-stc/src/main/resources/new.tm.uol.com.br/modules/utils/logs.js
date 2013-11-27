
var Message = function () {
    var prefix = "[UOL Tag Manager] ";
    var history = {
        "warn"  : [],
        "error" : [],
        "info"  : [],
        "log"   : []
    };

	this.warn = function(msg) {
		log(msg, 'warn');
    };

    this.error = function(msg) {
    	log(msg, 'error');
	};

   	this.info = function(msg) {
   		log(msg, 'info');
    };

    this.debug = function (msg) {
        debug(msg, 'debug');
    };

    this.log = function (msg) {
        log(msg, 'log');
    };

    var log = function (msg, fn) {
    	if (!window.console && !console.log) {
    		return;
    	}
    	if (!msg || !msg.trim().length > 0) {
    		return;
    	}
        if (!fn || !console[fn]) {
            var fn = "log";
        }
        if (fn == 'log' && !console[fn]) {
            return;
        }

        msg = prefix + msg;


        console[fn](msg);
        history[fn].push(msg);
	};

    this.getHistory = function (fn) {
        return history[fn];
    }
};