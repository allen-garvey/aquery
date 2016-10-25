/*
* Event methods
*/

aQueryObject.prototype.on = function(eventName, selector, callback){
	//check if using delegation
	if(selector instanceof Function){
		//not using delegation
		var callbackFunc = function(e){ selector.call(e.target, e); };
	}
	else{
		//using delegation
		//based on: https://davidwalsh.name/event-delegate
		var callbackFunc = function(e){
			if(e.target && e.target.matches(selector)){
				callback.call(e.target, e);
			}
		};
	}
	//add event listers
	this.each(function(i, element){
		//element.addEventListener(eventName, function(e){callbackFunc.call(element, e);}, false);
		element.addEventListener(eventName, callbackFunc, false);
	});

};
//calls onclick callback(s)
aQueryObject.prototype.click = function(){
	this.each(function(i, element){
		element.click();
	});
};