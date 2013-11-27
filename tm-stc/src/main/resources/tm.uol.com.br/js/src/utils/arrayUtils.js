
var arrayUtils = function () {

    var toArr = function (arr) {
        if (typeof arr != 'object' || !arr[0]) {
            return [arr];
        }
        return arr;
    };

    var getDiffs = function (a1, a2){
        var diff = [];
        var len;
        var aux;
        len = a2.length;
        aux = ';' + a1.join(';') + ';';
        for (var i = 0; i < len; i++) {
            if(aux.indexOf(';' + a2[i] + ';') < 0){
                diff.push(a2[i]);
            }
        }
        return diff;
    };

    this.arrayDiff = function (a1, a2) {
        // Create an array with the diff of two arrays
        if (!a1 || !a2) {
            throw ('Favor informar dois arrays para que sejam comparados');
        }
        a1 = toArr(a1);
        a2 = toArr(a2);
        var firstDiff = getDiffs(a2,a1);
        var secondDiff = getDiffs(a1,a2);
        var diff = (secondDiff.length ? firstDiff : secondDiff);
        diff = (firstDiff != secondDiff ? firstDiff.concat(secondDiff) : diff);
        return diff;
    };

    this.arrayContains = function (a1, item) {
        // Check if array has an item
        var found  = false;
        var length = a1.length;
        for (var i = 0; i < length; i++) {
            if (a1[i] == item) {
                found = true;
                break;
            }
        }
        return found;
    };

    this.matchesInArray = function (item, a1) {
        // Check item matches in an array item
        var found  = false;
        var length = a1.length;
        for (var i = 0; i < length; i++) {
            if (item.match(a1[i])) {
                found = true;
                break;
            }
        }
        return found;
    };
};
