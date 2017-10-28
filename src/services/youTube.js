angular.module('video-player')
.service('youTube', function($http) {
  // TODO
  
  this.search = function(options, callback) {
    console.log('this was called');
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        part: 'snippet',
        q: options,
        max: 5,
        key: 'AIzaSyC7rUNBo3-0BeF7wvmV0VMjoqRf3EkiRHw',
        dataType: 'json'}})
      .then(function successCallback(data) {
        callback(data.data.items);
      }, function errorCallback(error) {
        console.log('you\'re query did not work', error);
      });
  };
});
