/*
 * aQuery - lightweight version of jQuery 
 */

 //core functionality required to work
 //modules should go between core_start and core_end
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
			func.call(this.elementList[i], i, this.elementList[i]);
		}
	}

	aQueryObject.prototype.first = function(){
		//if empty, just return same empty object
		//since all empty objects are functionally identical
		if(this.length === 0){
			return this;
		}
		return this.elementList[0];
	}