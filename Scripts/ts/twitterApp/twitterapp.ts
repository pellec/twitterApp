import pl = module('pageloader');
import ds = module('dataservice');

var pageloader = new pl.PageLoader();
var dataservice = new ds.DataService();

export class TwitterApp {
    constructor() {
        $('#twitter-button').click((e) => {
            e.preventDefault();
            var twitterUser = $('#username').val();
            this.getTweets(twitterUser);
        });
    }

    getTweets(twitterUser: string) {
        pageloader.showLoader();
        dataservice.getTweets(twitterUser)
            .done((result) => {
                this.buildHtml(<ITwitterResult>result);
            })
            .fail(function (result) {
                alert('FAIL!');
            })
            .always(function () {
                pageloader.hideLoader();
            });
    }

    buildHtml(data:ITwitterResult) {
        var html = '<span>Completed in ' + data.completed_in +  '</span>';
        if (data.results.length) {
            html += '<ol>';
            for (var i = 0; i < data.results.length; i++) {
               html += '<li><img src="' + data.results[i].profile_image_url + '"/>' + data.results[i].text + '</li>';
            }
            html += '</ol>';
        } else {
            html += 'No tweets from this user :(';
        }

        $('#tweets-container').empty().append(html);
    }

}

export interface ITwitterResult {
    completed_in: number;
    results: ITwitterItemResult[];
}

export interface ITwitterItemResult {
    profile_image_url: string;
    text: string;
}