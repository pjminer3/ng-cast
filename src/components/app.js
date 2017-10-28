angular.module('video-player')

.component('app', {
  bindings: {},
  controller: function() {
    this.selectVideo = (video) => {
      this.currentVideo = video;
    };
    
    this.searchResults = () => {};
    
    this.currentVideo = window.exampleVideoData[0];
    
    this.videos = window.exampleVideoData;
    
  },
  templateUrl: 'src/templates/app.html'
});


//<video-player><h5><em>videoPlayer</em> component goes here</h5></video-player>
      
// <video-list><h5><em>videoList</em> component goes here</h5></video-list>