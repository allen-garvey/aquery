/*
 * aQuery - lightweight version of jQuery
 */
'use strict';

function aQuery(selector){
	function aQueryObject(selector){
		if(typeof selector === 'string'){
			this.elementList = document.querySelectorAll(selector);
		}
		else if(selector instanceof Element){
			this.elementList = [selector];
		}
		else{
			//assume elementList
			this.elementList = selector;
		}
		this.length = this.elementList.length >= 0 ? this.elementList.length : 1;
	}
	/*
	* General utility methods
	*/
	//callback - index, element
	aQueryObject.prototype.each = function(func){
		for (var i = 0; i < this.length; i++) {
			func(i, this.elementList[i]);
		}
	}
	/*
	* Attribute methods
	*/
	aQueryObject.prototype.data = function(key){
		if(this.length < 1){
			return '';
		}
		return this.elementList[0].getAttribute('data-' + key);
	}

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

	/*
	* Input validation
	*/
	if(typeof selector === 'string' || typeof selector === 'object'){
		return (new aQueryObject(selector));
	}
}