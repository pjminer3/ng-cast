angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    onClick: '<'
  },
  templateUrl: 'src/templates/videoList.html'
});


// <video-list-entry><h5><em>videoListEntry</em> component goes here</h5></video-list-entry>