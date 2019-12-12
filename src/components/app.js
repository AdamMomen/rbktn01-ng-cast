angular.module('video-player')

.component('app', {
  templateUrl: "src/templates/app.html",
  controller: function() {
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
    this.add = (index)=> {
      this.currentVideo =  this.videos[index];
    };
    this.query = '';
   
    
    this.handleSearch = function () {
     !this.query ? '' :
      console.log(this.query)
    }
    this.searchVideo = (query)=> {
      
    }
    
  }
});