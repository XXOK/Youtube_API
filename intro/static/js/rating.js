// Define some variables used to remember state.
var nextPageToken, prevPageToken;

// After the API loads, call a function to get the uploads playlist ID.
function handleAPILoaded() {
  requestUserUploadsPlaylistId();
}

// Create a listing for a video.
function requestUserUploadsPlaylistId() {
  var request = gapi.client.youtube.videos.list({
    part: 'snippet',
    chart: 'mostPopular',
    // myRating: 'like',
    maxResults: 20,
  });
  request.execute(function(response) {
    var foo = response.items;
    for(var i=0; i<foo.length; i++) {
        var str = response.items[i].id;
        $('#video-container').append("<iframe width='640' height='320' src='https://www.youtube.com/embed/"+str+"'>");
    }
  })
};