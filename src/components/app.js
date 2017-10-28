angular.module('video-player')

.component('app', {
  bindings: {},
  controller: function(youTube) {
    
    //console.log('this is youtube!', youTube);
    
    this.selectVideo = (video) => {
      this.currentVideo = video;
    };
    
    this.searchResults = (query) => {
      // console.log('click worked');
      // console.log(query);
      var options = {
        // part: 'snippet',
        // q: query,
        // max: 5,
        // key: 'AIzaSyC7rUNBo3-0BeF7wvmV0VMjoqRf3EkiRHw'
        // part: 'snippet'
      };
      console.log('is it called here?');
      youTube.getYouTube(query, this.resetVideos);
      console.log('is it called after?');
    };
    
    this.resetVideos = (vidData) => {
      console.log('got data!', vidData);
      this.currentVideo = vidData[0];
      this.videos = vidData;
    };
    
    this.currentVideo = window.exampleVideoData[0];
    
    this.videos = window.exampleVideoData;
    
  },
  templateUrl: 'src/templates/app.html'
});


//<video-player><h5><em>videoPlayer</em> component goes here</h5></video-player>
      
// <video-list><h5><em>videoList</em> component goes here</h5></video-list>