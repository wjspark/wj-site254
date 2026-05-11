let nextGameUrl = null;

function getParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name) || '';
}

window.addEventListener('DOMContentLoaded', () => {
  const gameName = getParam('name');
  const iconUrl = decodeURIComponent(getParam('icon'));
  let gamePath = decodeURIComponent(getParam('path'));

  if (gamePath) {
    try {
      gamePath = decodeURIComponent(gamePath);
    } catch (e) {
      console.warn('Invalid encoded URL in path param:', gamePath);
    }
    nextGameUrl = gamePath;
  }

  if (!nextGameUrl) {
    fetch('../games2.json')
      .then(function(r) { return r.json(); })
      .then(function(data) {
        var games = data.data.list;
        if (games && games.length > 0) {
          var game = games[Math.floor(Math.random() * games.length)];
          nextGameUrl = 'https://games.nfiuh.top' + game.gameUrl;
        }
      });
  }

  if (gameName) {
    document.getElementById('game-name').textContent = gameName;
  }

  const iframe = document.getElementById('play-frame');
  const progress = document.querySelector('.play-progress');
  const topSection = document.querySelector('.top-section');
  const playSection = document.querySelector('.play-section');
  const playButton = document.querySelector('.play-button');

  if (playSection) {
    playSection.style.display = 'none';
  }

  let percent = 0;
  let isReady = false;

  const interval = setInterval(() => {
    percent += 2;
    if (percent <= 100) {
      progress.style.width = `${percent}%`;
      progress.textContent = `${percent}%`;
    }
    if (percent >= 100) {
      clearInterval(interval);
      progress.style.width = '100%';
      progress.textContent = 'Play';
      isReady = true;
      if (playButton) {
        playButton.style.cursor = 'pointer';
      }
    }
  }, 60);

  if (playButton) {
    playButton.addEventListener('click', () => {
      if (!isReady) return;
      if (nextGameUrl && iframe) {
        iframe.src = nextGameUrl;
      }
      if (playSection) {
        playSection.style.display = 'block';
      }
      if (topSection) {
        topSection.style.display = 'none';
      }
    });
  }
});
