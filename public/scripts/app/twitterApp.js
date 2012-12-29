define(['jquery', 'app/dataservice', 'app/pageloader', 'app/parser'],
	function($, dataservice, pageloader, parser) {

		var
			buildHtml = function(username, data) {
				var html = '<h3>Tweets from @' + username + ' </h3>',
					d;
				if (data.results.length) {
					html += '<ul>';
					for (var i = 0; i < data.results.length; i++) {
						d = data.results[i];
						html += '<li>';
						html += '<div class="profile-image"><img src="' + d.profile_image_url + '" alt=""></div>';
						html += '<div class="date">' + d.created_at + '</div>';
						html += parser.run(d.text) + '</li>';
					}
					html += '</ul>';
				} else {
					html += 'No tweets from ' + username + ' :(';
				}

				$('#tweets-container').empty().append(html);
			},

			getTweets = function(twitterUser) {
				pageloader.showLoader();
				dataservice.getTweets(twitterUser)
					.done(function(result) {
						console.dir(result);
						buildHtml(twitterUser, result);
					})
					.fail(function(result) {
						alert('FAIL!');
					})
					.always(function() {
						pageloader.hideLoader();
					});
			},

			init = function() {
				$('#twitter-button').click(function (e) {
					e.preventDefault();

					var twitterUser = $('#username').val();
					getTweets(twitterUser);
				});
			};

		return {
			init: init
		};

	});

