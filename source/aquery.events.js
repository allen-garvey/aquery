/*
* Event methods
*/
aQueryObject.prototype.on = function(eventName, callback){
	this.each(function(i, element){
		element.addEventListener(eventName, callback, false);
	});
};
//calls onclick callback(s)
aQueryObject.prototype.click = function(){
	this.each(function(i, element){
		element.click();
	});
};