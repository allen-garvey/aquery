/*
* DOM Selection methods
*/

aQueryObject.prototype.closest = function(selector){
	//if empty, just return same empty object
	//since empty objects have no parents
	if(this.length === 0){
		return this;
	}
	var element = this.first().elementList[0];
	//check for closest support: edge has no support
	//https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
	if(element.closest){
		var closestElement = element.closest(selector);
		//null means not found
		closestElement = closestElement ? closestElement : [];
		return new aQueryObject(closestElement);
	}
	//for Edge and IE
	var parent = element.parentElement;
	//parentElement returns null if element doesn't have parent (i.e HTML tag)
	while(parent){
		if(parent.matches(selector)){
			return new aQueryObject(parent);
		}
		parent = element.parentElement;
	}
	//not found
	return new aQueryObject([]);
};

aQueryObject.prototype.find = function(selector){
	//if empty, just return same empty object
	//since empty objects have no parents
	if(this.length === 0){
		return this;
	}
	var element = this.first().elementList[0];
	return new aQueryObject(element.querySelectorAll(selector));
}