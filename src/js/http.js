var http = (function() {
	var http = {};
<<<<<<< HEAD
	var BASEURL = "http://192.168.1.7:3000";
=======
	 var BASEURL = "http://47.106.21.195:3389";//47.106.21.195:3389
>>>>>>> 3f08479525b19e8d1fe1af15874affab8cd7b4d0


	function saveToken(auth) {
		var key = "auth";
		window.localStorage.setItem(key, auth);
	}
	function getToken() {
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
					console.log(url)
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