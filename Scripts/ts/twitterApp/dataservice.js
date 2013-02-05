define(["require", "exports"], function(require, exports) {
    var DataService = (function () {
        function DataService() { }
        DataService.prototype.getTweets = function (twitterUser) {
            return $.ajax({
                url: 'http://search.twitter.com/search.json?q=from:' + twitterUser,
                dataType: 'jsonp'
            });
        };
        return DataService;
    })();
    exports.DataService = DataService;    
})
