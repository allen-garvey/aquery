/*
* CSS Class methods
*/
aQueryObject.prototype.addClass = function(className){
	this.each(function(i, element){
		element.classList.add(className);
	});
	return this;
};
aQueryObject.prototype.removeClass = function(className){
	this.each(function(i, element){
		element.classList.remove(className);
	});
	return this;
};
aQueryObject.prototype.toggleClass = function(className){
	this.each(function(i, element){
		element.classList.toggle(className);
	});
	return this;
};