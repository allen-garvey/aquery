/*
* Static methods added after aquery is initialized
*/

//based on http://stackoverflow.com/questions/494143/creating-a-new-dom-element-from-an-html-string-using-built-in-dom-methods-or-pro
//template tag not supported below Edge 13 so no IE
aQuery.parseHTML = function(html) {
	var template = document.createElement('template');
    template.innerHTML = html;
    return template.content.firstElementChild;
};