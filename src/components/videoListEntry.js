angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    item: '<',
    $index: '<',
    onClick: '<'
  },
  
  controller: function() {
    this.vidUrl = (video) => {
      return video.snippet.thumbnails.default.url;
    };
  },
  templateUrl: 'src/templates/videoListEntry.html'
});
