
var cookieUtils = function () {
    this.getCookie = function(name) {
        // Get cookie by name
        if (!name) {
            throw "Favor informar o nome do cookie";
        }
        return doc.cookie.match(new RegExp('(?:^|;)\\s?' + name.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1') + '=(.*?)(?:;|$)','i')) && unescape(doc.cookie.match(new RegExp('(?:^|;)\\s?' + name.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1') + '=(.*?)(?:;|$)','i'))[1]);
    };

    this.setCookie = function (name, value) {
        // Set a named cookie with a value
        document.cookie = name + '=' + value;
    };
};
