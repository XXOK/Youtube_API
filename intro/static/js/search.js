// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}

// Search for a specified string.
function search() {
  var q = $('#query').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet',
//    forMine: true,
//    type: 'video'
    maxResults: 30,
  });

  request.execute(function(response) {

    // console.log(response)
    // console.log(response.items.map(function(item) {
    //     return item.snippet.publishedAt;
    // }))

    // 원래 있던 결과를 지우는
    $('#search-container').empty();

    // 이게 리스폰스
    var foo = response.items

    // 결과를 더하는 과정
    for(var i=0; i<foo.length; i++) {
        var str = response.items[i].id.videoId
        $('#search-container').append("<iframe width='640' height='320' src='https://www.youtube.com/embed/"+str+"'>");
    }
  });
}