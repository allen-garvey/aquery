/*
* Text, inner html and data methods
*/

//if new value is set, sets first element attribute to that value
//otherwise returns the value of that attribute for the first element
//in the collection
aQueryObject.prototype.attr = function(attributeName, newValue){
	var setVal = typeof newValue === 'string' ? true : false;

	var ret = setVal ? this : '';

	if(this.length > 0){
		if(setVal && typeof this.elementList[0][attributeName] !== undefined){
			this.elementList[0][attributeName] = newValue;
		}
		else{
			ret = this.elementList[0][attributeName];
		}
	}
	return ret;
}


//convenience function for aQueryObject.attr('value', newValue)
aQueryObject.prototype.val = function(newValue){
	return this.attr('value', newValue);
}

//convenience function for aQueryObject.attr('innerHTML', newValue)
aQueryObject.prototype.html = function(newValue){
	return this.attr('innerHTML', newValue);
}

aQueryObject.prototype.data = function(key){
	if(this.length < 1){
		return '';
	}
	return this.elementList[0].getAttribute('data-' + key);
}


