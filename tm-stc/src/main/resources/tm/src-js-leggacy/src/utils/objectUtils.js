
var ObjectUtils = function () {

    this.cloneObject = function (a1, a2) {
        var a2 = a2 || {};
        if (typeof a1  != 'object' || typeof a2 != 'object' ) {
            throw ('Favor informar dois para que um receba o valor do outro');
        }
        for (var key in a1) {
            a2[key] = a1[key];
        }
        return a2;
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

    this.getValueFromMatch = function (key, argument) {
        var length = urlMap.length;
        var value;
        for (var i = 0; i < length; i++) {
            if(urlMap[i].re){
                value = urlMap[i][argument];
            }
        }
        return value;
    };
};
