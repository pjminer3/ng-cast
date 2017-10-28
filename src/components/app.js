angular.module('video-player')

.component('app', {
  bindings: {},
  controller: function(youTube) {
    
    this.selectVideo = (video) => {
      this.currentVideo = video;
    };
    
    this.searchResults = (query) => {
      youTube.search(query, this.resetVideos);
    };
    
    this.resetVideos = (vidData) => {
      this.currentVideo = vidData[0];
      this.videos = vidData;
    };
    
    this.currentVideo = window.exampleVideoData[0];
    
    this.videos = window.exampleVideoData;
    
    // call empty search result upon app.controller loading
    this.searchResults('');
    
  },
  templateUrl: 'src/templates/app.html'
});

