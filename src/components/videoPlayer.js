angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    video: '<'
  },
  
  controller: function() {
    this.getVid = (vid) => {
      return 'https://www.youtube.com/embed/' + vid.id.videoId;
    };
  },
  
  templateUrl: 'src/templates/videoPlayer.html'
  // TODO
});
