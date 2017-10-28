angular.module('video-player')

.component('search', {
  bindings: {
    searchResults: '<'
  },
  controller: function() {
    
    this.userInput = '';
    
    this.launchSearch = function(input) {
      this.searchResults(this.userInput);
      this.userInput = '';
    };
    
  }, 
  templateUrl: 'src/templates/search.html'
  // TODO
});
