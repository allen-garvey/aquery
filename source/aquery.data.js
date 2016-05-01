/*
* Text, inner html and data methods
*/


aQueryObject.prototype.data = function(key){
	if(this.length < 1){
		return '';
	}
	return this.elementList[0].getAttribute('data-' + key);
}