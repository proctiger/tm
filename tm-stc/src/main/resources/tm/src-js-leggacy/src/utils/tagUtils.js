
var TagUtils = function (argument) {

    var doc = document;

    this.getElementsByClassName = function (classname) {
        // IE 7 doesn't have, so i made it
        var nodesArr = [];
        var elements = doc.getElementsByTagName("*");
        var regexp   = new RegExp('(^| )'+classname+'( |$)');
        if(doc.getElementsByClassName){
            return doc.getElementsByClassName(classname);
        }
        for (var i = 0, length = elements.length; i < length; i++) {
            if(regexp.test(elements[i].className)){
                nodesArr.push(elements[i]);
            }
        }
        return nodesArr;
    };

    var createTag = function(tagName, parentNode, attributes) {
        var tag = document.createElement(tagName);
        for (var key in attributes) {
            var value = attributes[key];
            tag.setAttribute(key, value);
        }
        parentNode.appendChild(tag);
    };

    this.createTagScript = function(id, src) {
        var attributes = {};
        attributes.type = 'text/javascript';
        attributes.defer = true;
        attributes.id = id;
        attributes.src = src;

        createTag('script', document.body, attributes);
    };

    this.getElementsByAttribute = function (attr, limit, group, tagName) {
        // Get elements by it's attribute
        var result = [];
        var tagName = tagName || '*';
        var divs = group || document.getElementsByTagName(tagName);
        var length = length = divs.length;
        for (var i = 0; i < length; i++) {
            if (divs[i].getAttribute(attr) && result.length < limit) {
                result.push(divs[i]);
            }
        }
        return result;
    };
};
