/*
* Text, inner html and data methods
*/

//if new value is set, sets first element attribute to that value
//otherwise returns the value of that attribute for the first element
//in the collection
aQueryObject.prototype.attr = function(attributeName, newValue){
	if(this.length > 0){
		if(typeof newValue === 'string'){
			this.elementList[0].setAttribute(attributeName, newValue);
			return this;
		}
		else{
			return this.elementList[0].getAttribute(attributeName);
		}
	}
	return this;
}


//convenience function for aQueryObject.attr('value', newValue)
aQueryObject.prototype.val = function(newValue){
	return this.attr('value', newValue);
}

//convenience function for aQueryObject.attr('innerHTML', newValue)
aQueryObject.prototype.html = function(newValue){
	return this.attr('innerHTML', newValue);
}

//convenience function for aQueryObject.attr('innerHTML', newValue)
aQueryObject.prototype.text = function(newValue){
	return this.attr('textContent', newValue);
}

aQueryObject.prototype.data = function(key){
	if(this.length < 1){
		return '';
	}
	return this.elementList[0].getAttribute('data-' + key);
}


