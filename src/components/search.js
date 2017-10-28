angular.module('video-player')

.component('search', {
  bindings: {
    searchResults: '<',
    resetVideos: '<'
  },
  controller: function(youTube) {
    
    this.userInput = '';
    
    this.launchSearch = function(input) {
      youTube.search(this.userInput, this.resetVideos);
      this.userInput = '';
    };
    
  }, 
  templateUrl: 'src/templates/search.html'
  // TODO
});
