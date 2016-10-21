/*
* AJAX methods
*/

/*
* Main ajax method
* Required settings: url
* optional settings: success, error, method, data, dataType
*/
aQuery.ajax = function(settings){
	if(!settings.url){
		throw new Error('url not supplied for aQuery ajax method');
	}
	var defaultSettings = {method: 'GET', success: function(){}, error: function(){}, data: null, dataType: 'text'};
	//fill empty settings with defaults
	for(var key in defaultSettings){
		if(!settings[key]){
			settings[key] = defaultSettings[key];
		}
	}


	//send the request
	var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState != XMLHttpRequest.DONE){
        	return;
        }
        var data = xmlhttp.response;
        if(settings.dataType === 'json' || xmlhttp.getResponseHeader("Content-Type") === 'application/json'){
        	data = JSON.parse(data);
        }
       	if(xmlhttp.status <= 200 && xmlhttp.status < 300){
        	settings.success(data);
       	}
       	else{
        	settings.error(data);
       	}
    };
    //creates url query string from data
    function getQueryString(data){
    	if(!data || Object.keys(data).length === 0){
    		return '';
    	}
    	var dataArray = Object.keys(data).map(function(key){ return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]); });
    	return '?' + dataArray.join('&');
    }
    //encodes data into FormData object
    function encodeRequestBody(data){
		if(!data || Object.keys(data).length === 0){
    		return null;
    	}
    	var formData = new FormData();
    	for(var key in data){
    		formData.append(key, data[key]);
    	}
    	return formData;
    }
    //For GET requests, encode data into query string
    if(settings.method.match(/^get$/i)){
    	var url = settings.url + getQueryString(settings.data);
    	var data = null;
    }
    else{
    	var url = settings.url;
    	var data = encodeRequestBody(settings.data);
    }

    xmlhttp.open(settings.method, url, true);
    xmlhttp.send(data);

};




