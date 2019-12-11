angular.module('video-player')
.component('videoListEntry', {
  controller: function() {

  },
  templateUrl: "src/templates/videoListEntry.html",

  bindings: {
    video: '<',
  }
});
