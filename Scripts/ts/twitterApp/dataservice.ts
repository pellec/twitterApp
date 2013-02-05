/// <reference path="../typings/jquery-1.9.d.ts" />
export class DataService {
    getTweets(twitterUser: string) {
        return $.ajax({
            url: 'http://search.twitter.com/search.json?q=from:' + twitterUser,
            dataType: 'jsonp'
        });
    }
}
