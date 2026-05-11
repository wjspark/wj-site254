let conf = null;
let currentPage = 0;
let loading = false;
const itemsPerPage = 4;
let sentinel = null;
let observer = null;

async function fetchGames() {
  try {
    const response = await fetch("games.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    conf = await response.json();

    if (!Array.isArray(conf)) {
      console.warn("games.json format error: not an array, attempting to extract list");
      if (conf && conf.data && Array.isArray(conf.data.list)) {
        conf = conf.data.list;
      } else {
        throw new Error("Invalid JSON format");
      }
    }

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
  if (!conf || !Array.isArray(conf)) return;
  const gameList = document.getElementById(containerId);
  if (!gameList) return;
  gameList.innerHTML = "";
  const fragment = document.createDocumentFragment();
  const games = conf.slice(startIndex, endIndex);
  if (Array.isArray(games)) {
    games.forEach((game) => {
      fragment.appendChild(generateGameItem(game));
    });
  }
  gameList.appendChild(fragment);
}

function newGames(startIndex, endIndex, containerId) {
  if (!conf || !Array.isArray(conf)) return;
  const gameList = document.getElementById(containerId);
  if (!gameList) return;
  const fragment = document.createDocumentFragment();
  const games = conf.slice(startIndex, endIndex);
  if (Array.isArray(games)) {
    games.forEach((game) => {
      fragment.appendChild(generateGameItem(game));
    });
  }
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
  if (!conf || !Array.isArray(conf)) return;
  if ((currentPage + 1) * itemsPerPage >= conf.length) {
    if (observer) observer.disconnect();
    return;
  }
  loading = true;
  currentPage++;
  newGames(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage, "new-games");
  loading = false;

  requestAnimationFrame(() => {
    if (sentinel && sentinel.getBoundingClientRect().top < window.innerHeight) {
      loadMore();
    }
  });
}

function setUpObserver() {
  sentinel = document.createElement("div");
  const newGamesContainer = document.getElementById("new-games");
  if (newGamesContainer) {
    newGamesContainer.after(sentinel);
  } else {
    return;
  }

  observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) loadMore();
  });
  observer.observe(sentinel);
}

fetchGames();
