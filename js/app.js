$(document).ready(function() {

//Getting Data from YOUTUBE API
	$('form').on('submit', function(e) {
		e.preventDefault();
		var searchTerm = $('#query').val();
		$.getJSON('https://www.googleapis.com/youtube/v3/search?key=AIzaSyCNbGywn33k_DWXjTntQlWSGybDADgcNbQ&part=snippet&q='+searchTerm, function(data) {
		console.log(data);
		showResults(data.items);
		});
	})	

	function showResults(results) {
		var videoBox = "";
		$.each(results, function(index, value) {
			videoBox += '<li><a href="https://www.youtube.com/watch?v='+value.id.videoId+
						'" target="_blank"><img border="1" src="'+value.snippet.thumbnails.medium.url+
						'" >'+value.snippet.title+ "</a></li>"
		});
		$('#search-results').html(videoBox);
		
	}

	/*$('#next button').click(function() {
		$.getJSON('https://www.googleapis.com/youtube/v3/search?key=AIzaSyCNbGywn33k_DWXjTntQlWSGybDADgcNbQ&part=snippet&q='+searchTerm, function(data) {
		console.log(data);
		showResults(data.items);

		showResults(data.nextPageToken)
	});*/

});
