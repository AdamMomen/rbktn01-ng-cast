angular.module('video-player')
.component('videoList', {
  templateUrl: "src/templates/videoList.html",
  controller: function() {
    //var exampleVideoData = window.exampleVideoData;
  },
  bindings:{
    videos:'<'
  }
});
