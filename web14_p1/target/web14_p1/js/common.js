function bitacademy(value) {
	var extElement = null;
	if (value.charAt(0) == "#") {
		extElement = document.getElementById(value.substr(1));
	} else if (value.charAt(0) == "<") {
		extElement = document.createElement(value.substr(1, value.length - 2));
	}
	extElement.load = function (url) {
		bitacademy.ajax(url, {
			type: "GET",
			dataType: "html",
			success: function(result) {
				extElement.innerHTML = result;
				var scripts = extElement.getElementsByTagName("script");
				for( var i = 0; i < scripts.length; i++ ){
					eval(scripts[i].innerHTML);
				}
			}
		});
	};
	
	return extElement;
}


bitacademy.createRequest = function() {
	try {
		return new XMLHttpRequest();
	} catch(exception) {
		var versions = [
		    	        'Msxml2.XMLHTTP.6.0',
		    	        'Msxml2.XMLHTTP.5.0',
		    	        'Msxml2.XMLHTTP.4.0',
		    	        'Msxml2.XMLHTTP.3.0',
		    	        'Msxml2.XMLHTTP',
		    	        'Microsoft.XMLHttp'
		                ];
		for( var i = 0; i < versions.length; i++ ) {
			try {
				return new ActiveXObject(versions[i]);
			} catch (e) {}
		}
	}
};

bitacademy.ajax = function(url, settings) {
	var xhr = bitacademy.createRequest();
	
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				dataType = "json";
				if (settings.dataType) {
					dataType = settings.dataType;
				}
				
				var result = null;
				if (dataType === "html") {
					result = xhr.responseText;
				} else if (dataType === "json") {
					result = JSON.parse(xhr.responseText);
				}
				if (settings.success) {
					settings.success(result);
				}
			} else {
				if (settings.error) {
					settings.error("서버요청 오류!");
				}
			}
		}
		
		
		
	};
	var type = "GET";
	if (settings.type) {
		type = settings.type;
	}
	
	xhr.open(type, url, true);
	if (type == "GET") {
		xhr.send();
	} else {
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		var params = "";
		if (settings.data) {
			for( var name in settings.data) {
				if (params != "") {
					params += "&";
				}
				params += name + "=" + settings.data[name];
			}
		}
		xhr.send(params);
	}
};








var $ = bitacademy;



