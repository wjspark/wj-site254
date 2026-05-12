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
  }

  document.getElementById('game-name').textContent = gameName;
  // Use local image, no need to change src

  const iframe = document.getElementById('play-frame');
  const progress = document.querySelector('.play-progress');
  const topSection = document.querySelector('.top-section');
  const playSection = document.querySelector('.play-section');
  const playButton = document.querySelector('.play-button');
  playSection.style.display = 'none';

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
      playButton.style.cursor = 'pointer';
    }
  }, 60);

  playButton.addEventListener('click', () => {
    if (!isReady) return;
    // iframe src already set in HTML
    playSection.style.display = 'block';
    topSection.style.display = 'none';
  });

});

