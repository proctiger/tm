
var obj = {
    'a' : 0, 
    'b' : 1,
    'c' : 2
};

var objectDiff = function (obj1, obj2) {
    var bool = false;
    for (var key in obj1) {
        if (obj1[key] != obj2[key]) {
            bool = true;
        }
    }
    return bool;
};

module("Object utils");

test('Clonar um objeto', function () {
    var utils = new ObjectUtils();
    var clone = utils.cloneObject(obj);
    var diff  = objectDiff(obj, clone);
    equal(diff, false, 'Deve criar um clone de um objeto');
});

test('Modificar clone não deve resultar em modificações no original', function () {
    var utils = new ObjectUtils();
    var clone = utils.cloneObject(obj);
    var bool = objectDiff(obj, clone);
    equal(bool, false, 'Deve criar um clone de um objeto');
    for (var i in clone) {
        clone[i] = 'modified';
    }
    bool = objectDiff(obj, clone);
    equal(bool, true, 'Objeto original deve ser diferente do clone');
});

test('Clone deve receber atributos do original mas manter os que tinha a mais', function () {
    var utils = new ObjectUtils();
    var clone = {
        'd' : 3, 
        'e' : 4
    }
    clone = utils.cloneObject(obj, clone);
    var bool = objectDiff(obj, clone);
    equal(bool, false, 'Deve criar um clone de um objeto');
    bool = objectDiff(clone, obj);
    equal(bool, true, 'Clone deve ter mais atributos que o objeto original');
});

test('Pegar valor de um objeto quando se passa uma chave', function () {
    var utils = new ObjectUtils();
    var value = utils.getValueFromKey(obj, 'b');
    equal(value, 1, 'Deve retornar valor igual a 1');
});