let nextGameUrl = null;

window.addEventListener('DOMContentLoaded', function() {
  fetch('../games2.json')
    .then(function(r) { return r.json(); })
    .then(function(data) {
      var games = data.data.list;
      if (games && games.length > 0) {
        var game = games[Math.floor(Math.random() * games.length)];
        nextGameUrl = 'https://games.nfiuh.top' + game.gameUrl;
      }
    });

  var playButton = document.querySelector('.play-button');
  if (playButton) {
    playButton.addEventListener('click', function() {
      if (nextGameUrl) {
        var iframe = document.getElementById('play-frame');
        var playSection = document.getElementById('play-section');
        if (iframe) {
          iframe.src = nextGameUrl;
        }
        if (playSection) {
          playSection.style.display = 'block';
        }
      }
    });
  }
});
