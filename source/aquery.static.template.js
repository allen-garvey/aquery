/*
* Minimal template functions
* similar to underscore templates but using handlebar syntax
* only {{variable}} for HTML escaped value and {{{variable}}} for unescaped 
* is supported and unset variables are not replaced with anything
* Usage: aQuery.template('my template string {{variableName}}') returns templater object
* templater.render({variableName: 'variable value'}) returns string of compiled template
* with set variables replaced by HTML escaped values
*/

aQuery.template = function(templateString){
	function Templater(templateString){
		this.templateString = templateString;
	}
	//based on:
	//http://stackoverflow.com/questions/1787322/htmlspecialchars-equivalent-in-javascript
	Templater.prototype.escapeHTML = function(text){
		if(typeof text === 'number'){
			return text;
		}
		var map = {
			'&': '&amp;',
			'<': '&lt;',
			'>': '&gt;',
			'"': '&quot;',
			"'": '&#039;'
		};
		return text.replace(/[&<>"']/g, function(m) { return map[m]; });
	};
	//takes context object with keys as variable names
	//and values as variable values
	//returns string
	//keeps markup for non passed variables
	Templater.prototype.render = function(context){
		var rendered = this.templateString;
		for (var key in context){
			//replace unescaped values
			var searchExpUnsafe = new RegExp('{{{\\s*' + key + '\\s*}}}', 'g');
			rendered = rendered.replace(searchExpUnsafe, context[key]);
			//replace escaped values
			var searchExpSafe = new RegExp('{{\\s*' + key + '\\s*}}', 'g');
			rendered = rendered.replace(searchExpSafe, this.escapeHTML(context[key]));
		}
		return rendered;
	};

	return new Templater(templateString);
};


