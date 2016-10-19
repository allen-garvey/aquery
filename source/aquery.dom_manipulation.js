/*
* DOM Manipulation methods
*/

//based on http://stackoverflow.com/questions/4793604/how-to-do-insert-after-in-javascript-without-using-a-library
//content should already be element, such as that returned by aQuery.parseHTML()
aQueryObject.prototype.before = function(content){
	this.each(function(i, element){
		element.parentNode.insertBefore(content, element);
	});
};

aQueryObject.prototype.after = function(content){
	this.each(function(i, element){
		element.parentNode.insertBefore(content, element.nextSibling);
	});
};