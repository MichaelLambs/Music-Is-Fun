function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //"bee"
    itunesService.getMusicByArtist(artist).then(draw); //after get music by artist returns what are you doing with the objects?
  }
  
  var audio = document.getElementById("audio-preview");
  
  this.playMusic = function playMusic() {
    debugger
    audio.play();
  }
  //Start coding here
  var drawMusicElem = document.getElementById('songs')

  function draw(results) {
    console.log(results)

    template = ""
    for (let i = 0; i < results.length; i++) {
      const song = results[i];
      
      template += `
      
        <div class="col-md-3 col-sm-2">
          <div style="background: url(${song.albumArt}) center center; background-size: cover;">
            <div class="result">
              <div class="test">
                <h4 class="music-title">${song.title}</h4>
                <h5 class="music-artist"><em>${song.artist}</em></h5>
                <p>${song.price}</p>
              </div>
            </div>
            <div class="preview-box">
              <audio class="audio-box" controls="controls">
                <source src="${song.preview}" />
              </audio>
            </div>
          </div>
        </div>
      
      `
    }
    
    drawMusicElem.innerHTML = template
  }
  
  
  
  
  
  draw(itunesService)


}
