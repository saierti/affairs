var http = (function() {
	var http = {};
	var BASEURL = "http://47.106.21.195:3389";


	function saveToken(auth) {
		var key = "auth";
		window.localStorage.setItem(key, auth);
	}
	function getToken() {c
		console.log('gettoken');
		return window.localStorage.getItem("auth");
	}

	http.verb = function(method) {
		return function todo(url, data, sucCB, errCB) {
			data.token = getToken();
			$.ajax({
				url: BASEURL + url,
				type: method,
				// headers: {
				
				// },
				data: data,
				dataType: "json",
				success: function(res) {
					sucCB(res);
				},
				error: function(xhr, err, type) {
					console.log(xhr);
					console.log(err);
					console.log(type);
				}
			})
		}
	}

	http.get = http.verb('get');
	http.post = http.verb('post');

	http.login = function(sucCB, errCB) {

		this.get(
			'/fnc/login',
			{},
			function(res) {
				saveToken(res.token);				
				sucCB(res);
			},
			function(xhr, err, type) {
				errCB(xhr, err, type);
			}
		)
	}


	return http;
})();