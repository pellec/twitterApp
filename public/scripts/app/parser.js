define([],
	function () {

		var
			parseHashtag = function (text) {
				return text.replace(/[#]+[A-Za-z0-9-_]+/g, function(t) {
					var tag = t.replace("#","%23");
					return t.link("http://search.twitter.com/search?q="+tag);
				});
			},

			parseUsername = function (text) {
				return text.replace(/[@]+[A-Za-z0-9-_]+/g, function(u) {
					var username = u.replace("@","");
					return u.link("http://twitter.com/"+username);
				});
			},

			parseURL = function (text) {
				return text.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&~\?\/.=]+/g, function(url) {
					return url.link(url);
				});
			},

			run = function (text) {
				return parseHashtag( parseUsername( parseURL(text)));
			};

		return {
			run: run
		};

	});

