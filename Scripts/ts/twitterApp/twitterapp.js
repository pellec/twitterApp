define(["require", "exports", 'pageloader', 'dataservice'], function(require, exports, __pl__, __ds__) {
    var pl = __pl__;

    var ds = __ds__;

    var pageloader = new pl.PageLoader();
    var dataservice = new ds.DataService();
    var TwitterApp = (function () {
        function TwitterApp() {
            var _this = this;
            $('#twitter-button').click(function (e) {
                e.preventDefault();
                var twitterUser = $('#username').val();
                _this.getTweets(twitterUser);
            });
        }
        TwitterApp.prototype.getTweets = function (twitterUser) {
            var _this = this;
            pageloader.showLoader();
            dataservice.getTweets(twitterUser).done(function (result) {
                _this.buildHtml(result);
            }).fail(function (result) {
                alert('FAIL!');
            }).always(function () {
                pageloader.hideLoader();
            });
        };
        TwitterApp.prototype.buildHtml = function (data) {
            var html = '<span>Completed in ' + data.completed_in + '</span>';
            if(data.results.length) {
                html += '<ol>';
                for(var i = 0; i < data.results.length; i++) {
                    html += '<li><img src="' + data.results[i].profile_image_url + '"/>' + data.results[i].text + '</li>';
                }
                html += '</ol>';
            } else {
                html += 'No tweets from this user :(';
            }
            $('#tweets-container').empty().append(html);
        };
        return TwitterApp;
    })();
    exports.TwitterApp = TwitterApp;    
})
