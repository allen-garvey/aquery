/*
* Basic transitions
* note that show and hide will overwrite any inline display properties
* and that show will change display to block
*/

aQueryObject.prototype.hide = function(){
	this.each(function(i, element){
		element.style.display = 'none';
	});
	return this;
};
aQueryObject.prototype.show = function(){
	this.each(function(i, element){
		element.style.display = 'block';
	});
	return this;
};