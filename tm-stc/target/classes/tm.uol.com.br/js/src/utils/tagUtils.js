
var TagUtils = function () {

    var doc = document;

    this.getElementsByClassName = function (classname, tagname) {
        // IE 7 doesn't have, so i made it
        var tagname = tagname || '*';
        var nodesArr = [];
        var elements = doc.getElementsByTagName(tagname);
        var regexp;
        var length;
        if (!classname) {
            return;
        }
        regexp = new RegExp('(^| )'+classname+'( |$)');
        if(doc.getElementsByClassName){
            nodesArr = doc.getElementsByClassName(classname);
            return nodesArr;
        }
        length = elements.length;
        for (var i = 0; i < length; i++) {
            if(regexp.test(elements[i].className)){
                nodesArr.push(elements[i]);
                break;
            }
        }
        return nodesArr;
    };

    this.getElementsByAttribute = function (attr, limit, group, tagName) {
        // Get elements by it's attribute
        var result = [];
        var tagName = tagName || '*';
        var divs = group || document.getElementsByTagName(tagName);
        var length = length = divs.length;
        for (var i = 0; i < length; i++) {
            if (divs[i].getAttribute(attr)) {
                if (limit && result.length >= limit) {
                    break;
                }
                result.push(divs[i]);
            }
        }
        return result;
    };

    this.removeElement = function (element) {
        if (!element) {
            return;
        }
        element.parentNode.removeChild(element);
    };

    this.createTag = function(tagName, parentNode, attributes) {
        if (!tagName && !parentNode && !attributes) {
            return;
        }
        var tag = document.createElement(tagName);
        for (var key in attributes) {
            var value = attributes[key];
            tag.setAttribute(key, value);
        }
        parentNode.appendChild(tag);
    };

    this.createTagScript = function(id, src, parentNode) {
        if (!src) {
            return;
        }
        var parentNode = parentNode || doc.body;
        var attributes = {};
        attributes.type = 'text/javascript';
        attributes.defer = true;
        if (id) {
            attributes.id = id;
        }
        attributes.src = src;
        this.createTag('script', parentNode, attributes);
    };
};
