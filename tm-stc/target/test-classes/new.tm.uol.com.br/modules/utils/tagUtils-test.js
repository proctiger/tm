
var tagClass = 'testTag';
var tagId = 'tagId';
var removeElement = function () {
    var element = document.getElementById(tagId);
    if (!element) {
        return;
    }
    element.parentNode.removeChild(element);
};
var validateTags = function (node, attribute) {
    var value = true;
    var length = node.length;
    for (var i = 0; i < length; i++) {
        if (node[i].getAttribute(attribute) != tagClass) {
            value = false;
            break;
        }
    }
    return value;
};
var createDiv = function () {
    var utils = new TagUtils();
    var attributes = {};
    attributes.id = tagId;
    attributes.class = tagClass;
    utils.createTag('div', document.body, attributes);
};

module("Tag utils", {
    setup : function() {
        createDiv();
    }
});

test('Criar uma tag', function () {
    equal(!!document.getElementById(tagId), true, 'A tag deve existir');
    removeElement();
})

test('Pegar elementos pelo nome da classe', function() {
    var utils = new TagUtils();
    var attribute = 'class';
    var tag = utils.getElementsByClassName(tagClass, 'div');
    ok(tag instanceof Object, 'Deve retornar uma lista de nós');
    equal(validateTags(tag, attribute), true, 'Todos os itens devem ter a classe');
    removeElement();
});

test('Pegar elementos por atributo', function() {
    var utils    = new TagUtils();
    var attribute = 'class';
    var elements  = utils.getElementsByAttribute(attribute, 1, false, 'DIV');
    equal(typeof elements, 'object', 'Deve retornar um array de elementos');
    equal(validateTags(elements, attribute), true, 'Todos os itens devem ter o atributo');
    removeElement();
});

test('Remover elementos de uma classe', function() {
    var utils    = new TagUtils();
    utils.removeElement(document.getElementById(tagId));
    equal(document.getElementById(tagId), null, 'A tag não deve existir');
});

test('Inserir um script no DOM', function () {
    var src = '//tm.uol.com.br'
    var utils    = new TagUtils();
    utils.createTagScript(tagId, src);
    equal(!!document.getElementById(tagId), true, 'A tag deve existir');
    removeElement();
})