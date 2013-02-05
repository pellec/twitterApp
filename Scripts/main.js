(function () {

    var root = this;

    require.config({
       baseUrl: 'scripts/ts/twitterApp' 
    });

	define('jquery', [], function() { return root.jQuery; });

	require(['twitterapp'], function(app) {
	    var a = new app.TwitterApp();
	});

})();

