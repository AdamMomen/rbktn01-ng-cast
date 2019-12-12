angular.module('video-player')
.service('youTube', function(){
  $http({
    method: 'list',
    url: 'https://www.googleapis.com/youtube/v3/search'
  }).then(function successCallback(response) {
      console.log('successsssss')
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
});



// GET https://www.googleapis.com/youtube/v3/search

// function searchByKeyword() {
//   var results = YouTube.Search.list('id,snippet', {q: 'dogs', maxResults: 25});

//   for(var i in results.items) {
//     var item = results.items[i];
//     Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
//   }
// }