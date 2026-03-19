let conf = null;
let currentPage = 0;
let loading = false;
const itemsPerPage = 4;
let sentinel = null;
let observer = null;

async function fetchGames() {
  try {
    const response = await fetch("games.json");
    conf = await response.json();
    conf = shuffleArray(conf);

    topGames(0, 2, "top-games");
    newGames(0, itemsPerPage, "new-games");

    setUpObserver();
  } catch (error) {
    console.error("load game config failed:", error);
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function topGames(startIndex, endIndex, containerId) {
  if (!conf) return;
  const gameList = document.getElementById(containerId);
  if (!gameList) return;
  gameList.innerHTML = "";
  const fragment = document.createDocumentFragment();
  conf.slice(startIndex, endIndex).forEach((game) => {
    fragment.appendChild(generateGameItem(game));
  });
  gameList.appendChild(fragment);
}

function newGames(startIndex, endIndex, containerId) {
  if (!conf) return;
  const gameList = document.getElementById(containerId);
  if (!gameList) return;
  const fragment = document.createDocumentFragment();
  conf.slice(startIndex, endIndex).forEach((game) => {
    fragment.appendChild(generateGameItem(game));
  });
  gameList.appendChild(fragment);
}

function generateGameItem(game) {
  const wrapper = document.createElement("div");
  wrapper.className = "game-item-1";

  const link = document.createElement("a");
  link.href = game.url;

  const img = document.createElement("img");
  img.src = game.icon;
  img.width = 60;
  img.height = 60;
  img.alt = "";

  const title = document.createElement("h2");
  title.textContent = game.name;

  link.appendChild(img);
  link.appendChild(title);
  wrapper.appendChild(link);
  return wrapper;
}

function loadMore() {
  if (loading) return;
  if ((currentPage + 1) * itemsPerPage >= conf.length) {
    observer.disconnect();
    return;
  }
  loading = true;
  currentPage++;
  newGames(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage, "new-games");
  loading = false;

  requestAnimationFrame(() => {
    if (sentinel.getBoundingClientRect().top < window.innerHeight) {
      loadMore();
    }
  });
}

function setUpObserver() {
  sentinel = document.createElement("div");
  document.getElementById("new-games").after(sentinel);

  observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) loadMore();
  });
  observer.observe(sentinel);
}

fetchGames();

