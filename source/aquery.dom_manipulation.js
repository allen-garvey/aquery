/*
* DOM Manipulation methods
*/

//based on http://stackoverflow.com/questions/4793604/how-to-do-insert-after-in-javascript-without-using-a-library
//content should already be element, such as that returned by aQuery.parseHTML() or html string
aQueryObject.prototype.before = function(content){
	if(typeof content == 'string'){
		content = aQuery.parseHTML(content);
	}
	this.each(function(i, element){
		element.parentNode.insertBefore(content, element);
	});
};

aQueryObject.prototype.after = function(content){
	if(typeof content == 'string'){
		content = aQuery.parseHTML(content);
	}
	this.each(function(i, element){
		element.parentNode.insertBefore(content, element.nextSibling);
	});
};

aQueryObject.prototype.append = function(content){
	if(typeof content == 'string'){
		content = aQuery.parseHTML(content);
	}
	this.each(function(i, element){
		element.appendChild(content);
	});
};

//http://stackoverflow.com/questions/6104125/how-can-i-remove-an-element-in-javascript-without-jquery
aQueryObject.prototype.remove = function(){
	if(typeof content == 'string'){
		content = aQuery.parseHTML(content);
	}
	this.each(function(i, element){
		element.parentNode.removeChild(element);
	});
};

