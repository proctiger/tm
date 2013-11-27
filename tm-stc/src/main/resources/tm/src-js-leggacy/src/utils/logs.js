
var Message = {
    prefix: "[UOL Tag Manager] ",
    history : {
        "warn"  : [],
        "error" : [],
        "info"  : [],
        "log"   : []
    },
	warn:function(msg, prefix) {
		this.log(msg, prefix, 'warn');
    },
    error:function(msg, prefix) {
    	this.log(msg, prefix, 'error');
	},
   	info:function(msg, prefix) {
   		this.log(msg, prefix, 'info');
    },
    log:function (msg, prefix, fn) {
        var prefix = prefix || '';
    	if (!console.log) {
    		return;
    	}
    	if (!msg || !msg.trim().length > 0) {
    		return;
    	}

    	msg = prefix + msg;

		if (!fn || !console[fn]) {
            var fn = "log";
        }

        console[fn](msg);
        this.history[fn].push(msg);
	}
};
