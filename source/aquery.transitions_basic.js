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
		//first remove inline display none if any
		if(element.style.display === 'none'){
			element.style.removeProperty('display');
		}
		//then see if element is now displayed
		var cssDisplayProperty = getComputedStyle(element).getPropertyValue('display');
		//if it's still hidden, default to display block
		if(cssDisplayProperty === 'none'){
			element.style.display = 'block';
		}
	});
	return this;
};