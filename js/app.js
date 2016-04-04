$(document).ready(function() {

//Getting Data from YOUTUBE API
	$('form').on('submit', function(e) {
		e.preventDefault();
		var searchTerm = $('#query').val();
		$.getJSON('https://www.googleapis.com/youtube/v3/search?key=AIzaSyCNbGywn33k_DWXjTntQlWSGybDADgcNbQ&part=snippet&q='+searchTerm, function(data) {
		console.log(data.items);
		showResults(data.items);
		});
	})	

	function showResults(results) {
		var videoBox = "";
		$.each(results, function(index, value) {
			videoBox += '<li><a href="https://www.youtube.com/watch?v='+value.id.videoId
						+'"><img border="1" src="'+value.snippet.thumbnails.high.url
						+'" width"480" height="360"></a>'+"</li>"
		});
		$('#search-results').html(videoBox);
	}


});
