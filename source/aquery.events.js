/*
* Event methods
*/
//Polyfill for Element.matches (required for delegated events)
//source: https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
if (!Element.prototype.matches) {
    Element.prototype.matches = 
        Element.prototype.matchesSelector || 
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector || 
        Element.prototype.oMatchesSelector || 
        Element.prototype.webkitMatchesSelector ||
        function(s) {
            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                i = matches.length;
            while (--i >= 0 && matches.item(i) !== this) {}
            return i > -1;            
        };
}


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