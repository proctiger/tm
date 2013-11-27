
var ObjectUtils = function () {

    this.cloneObject = function (obj1, temp) {
        if (obj1 === null || typeof obj1  !== 'object') {
            return;
        }
        var temp = temp || obj1.constructor();
        for (var key in obj1) {
            temp[key] = obj1[key];
        }
        return temp;
    };

    this.getValueFromKey = function (obj, key) {
        var value = false;
        for (var i in obj){
            if(i.toLowerCase() == key.toLowerCase()) {
                value = obj[i];
                break;
            }
        }
        return value;
    };

    this.getValueFromMatch = function (key, argument, obj) {
        if (!key || !argument || !obj) {
            return;
        }
        var length = obj.length;
        var value;
        for (var i = 0; i < length; i++) {
            if(key.match(obj[i].re)){
                value = obj[i][argument];
                break;
            }
        }
        return value;
    };
};
