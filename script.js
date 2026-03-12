let conf = null;
let currentPage = 0;
let loading = false;
const itemsPerPage = 20;

const ALL_GAMES_CONF = [
    {"name":"2048-remastered","icon":"webp/2048-remastered.webp","url":"https://topmbrads.top/games/2048-remastered/index.html"},
{"name":"alien-attack","icon":"webp/alien_attack.webp","url":"https://topmbrads.top/games/alien-attack/index.html"},
{"name":"Amazing-bubble-breaker","icon":"webp/Amazing-bubble-breaker.webp","url":"https://topmbrads.top/games/Amazing-bubble-breaker/index.html"},
{"name":"american-football-challenge","icon":"webp/american-football-challenge.webp","url":"https://topmbrads.top/games/american-football-challenge/index.html"},
{"name":"zero21-solitaire","icon":"webp/zero21-solitaire.webp","url":"https://topmbrads.top/games/zero21-solitaire/index.html"},
{"name":"awaken-the-ocean","icon":"webp/awaken-the-ocean.webp","url":"https://topmbrads.top/games/awaken-the-ocean/index.html"},
{"name":"BallSortMaster","icon":"webp/BallSortMaster.webp","url":"https://topmbrads.top/games/BallSortMaster/index.html"},
{"name":"BallSortPuzzle","icon":"webp/BallSortPuzzle.webp","url":"https://topmbrads.top/games/BallSortPuzzle/index.html"},
{"name":"Basketball_Crazy","icon":"webp/Basketball_Crazy.webp","url":"https://topmbrads.top/games/Basketball_Crazy/index.html"},
{"name":"basketball-legends-2020","icon":"webp/basketball-legends-2020.webp","url":"https://topmbrads.top/games/basketball-legends-2020/index.html"},
{"name":"Basketball_REAL","icon":"webp/Basketball_REAL.webp","url":"https://topmbrads.top/games/Basketball_REAL/index.html"},
{"name":"basket-slide","icon":"webp/basket-slide.webp","url":"https://topmbrads.top/games/basket-slide/index.html"},
{"name":"basket-swooshes","icon":"webp/basket-swooshes.webp","url":"https://topmbrads.top/games/basket-swooshes/index.html"},
{"name":"Bear_Boom","icon":"webp/Bear_Boom.webp","url":"https://topmbrads.top/games/Bear_Boom/index.html"},
{"name":"Bird_Sort-main","icon":"webp/Bird_Sort-main.webp","url":"https://topmbrads.top/games/Bird_Sort-main/index.html"},
{"name":"blastify2","icon":"webp/blastify2.webp","url":"https://topmbrads.top/games/blastify2/index.html"},
{"name":"blend-fruits","icon":"webp/blend-fruits.webp","url":"https://topmbrads.top/games/blend-fruits/index.html"},
{"name":"BlobOpera","icon":"webp/BlobOpera.webp","url":"https://topmbrads.top/games/BlobOpera/index.html"},
{"name":"blocks8","icon":"webp/blocks8.webp","url":"https://topmbrads.top/games/blocks8/index.html"},
{"name":"blockup-puzzle","icon":"webp/blockup-puzzle.webp","url":"https://topmbrads.top/games/blockup-puzzle/index.html"},
{"name":"Blocky","icon":"webp/Blocky.webp","url":"https://topmbrads.top/games/Blocky/index.html"},
{"name":"Blumgi_ball","icon":"webp/Blumgi_ball.webp","url":"https://topmbrads.top/games/Blumgi_ball/index.html"},
{"name":"bridges","icon":"webp/bridges.webp","url":"https://topmbrads.top/games/bridges/index.html"},
{"name":"bubble-up","icon":"webp/bubble-up.webp","url":"https://topmbrads.top/games/bubble-up/index.html"},
{"name":"bubble-up-endless","icon":"webp/bubble-up-endless.webp","url":"https://topmbrads.top/games/bubble-up-endless/index.html"},
{"name":"BuildingAHouse","icon":"webp/BuildingAHouse.webp","url":"https://topmbrads.top/games/BuildingAHouse/index.html"},
{"name":"Bus_Driving","icon":"webp/Bus_Driving.webp","url":"https://topmbrads.top/games/Bus_Driving/index.html"},
{"name":"Bus_Parking_King","icon":"webp/Bus_Parking_King.webp","url":"https://topmbrads.top/games/Bus_Parking_King/index.html"},
{"name":"butterfly-shimai","icon":"webp/butterfly-shimai.webp","url":"https://topmbrads.top/games/butterfly-shimai/index.html"},
{"name":"CandyBlast","icon":"webp/CandyBlast.webp","url":"https://topmbrads.top/games/CandyBlast/index.html"},
{"name":"candyCrush","icon":"webp/candyCrush.webp","url":"https://topmbrads.top/games/candyCrush/index.html"},
{"name":"car-out","icon":"webp/car-out.webp","url":"https://topmbrads.top/games/car-out/index.html"},
{"name":"Christmas_Connect","icon":"webp/Christmas_Connect.webp","url":"https://topmbrads.top/games/Christmas_Connect/index.html"},
{"name":"Circles","icon":"webp/Circles.webp","url":"https://topmbrads.top/games/Circles/index.html"},
{"name":"CocktailSort","icon":"webp/CocktailSort.webp","url":"https://topmbrads.top/games/CocktailSort/index.html"},
{"name":"colored-bricks","icon":"webp/colored-bricks.webp","url":"https://topmbrads.top/games/colored-bricks/index.html"},
{"name":"color-strings","icon":"webp/color-strings.webp","url":"https://topmbrads.top/games/color-strings/index.html"},
{"name":"color-tunnel","icon":"webp/color-tunnel.webp","url":"https://topmbrads.top/games/color-tunnel/index.html"},
{"name":"connect-me","icon":"webp/connect-me.webp","url":"https://topmbrads.top/games/connect-me/index.html"},
{"name":"connect-merge","icon":"webp/connect-merge.webp","url":"https://topmbrads.top/games/connect-merge/index.html"},
{"name":"crazy_parking","icon":"webp/crazy_parking.webp","url":"https://topmbrads.top/games/crazy_parking/index.html"},
{"name":"CubeJump","icon":"webp/CubeJump.webp","url":"https://topmbrads.top/games/CubeJump/index.html"},
{"name":"Cube_Tower","icon":"webp/Cube_Tower.webp","url":"https://topmbrads.top/games/Cube_Tower/index.html"},
{"name":"cubito","icon":"webp/cubito.webp","url":"https://topmbrads.top/games/cubito/index.html"},
{"name":"Dance_Battle","icon":"webp/Dance_Battle.webp","url":"https://topmbrads.top/games/Dance_Battle/index.html"},
{"name":"DD-2K-Shoot","icon":"webp/DD-2K-Shoot.webp","url":"https://topmbrads.top/games/DD-2K-Shoot/index.html"},
{"name":"dd-alpha-balls","icon":"webp/dd-alpha-balls.webp","url":"https://topmbrads.top/games/dd-alpha-balls/index.html"},
{"name":"dd-blastify","icon":"webp/dd-blastify.webp","url":"https://topmbrads.top/games/dd-blastify/index.html"},
{"name":"dd-bottle-flip","icon":"webp/dd-bottle-flip.webp","url":"https://topmbrads.top/games/dd-bottle-flip/index.html"},
{"name":"dd-knots","icon":"webp/dd-knots.webp","url":"https://topmbrads.top/games/dd-knots/index.html"},
{"name":"dd-pick-it","icon":"webp/dd-pick-it.webp","url":"https://topmbrads.top/games/dd-pick-it/index.html"},
{"name":"dd-pizza-pickup","icon":"webp/dd-pizza-pickup.webp","url":"https://topmbrads.top/games/dd-pizza-pickup/index.html"},
{"name":"dd-sand-sort-puzzle","icon":"webp/dd-sand-sort-puzzle.webp","url":"https://topmbrads.top/games/dd-sand-sort-puzzle/index.html"},
{"name":"DefenderMaster1","icon":"webp/DefenderMaster1.webp","url":"https://topmbrads.top/games/DefenderMaster1/index.html"},
{"name":"DiamondDungeon","icon":"webp/DiamondDungeon.webp","url":"https://topmbrads.top/games/DiamondDungeon/index.html"},
{"name":"Difference_Fun","icon":"webp/Difference_Fun.webp","url":"https://topmbrads.top/games/Difference_Fun/index.html"},
{"name":"Differences_Find","icon":"webp/Differences_Find.webp","url":"https://topmbrads.top/games/Differences_Find/index.html"},
{"name":"Dinosaurs","icon":"webp/Dinosaurs.webp","url":"https://topmbrads.top/games/Dinosaurs/index.html"},
{"name":"disk-rush","icon":"webp/disk-rush.webp","url":"https://topmbrads.top/games/disk-rush/index.html"},
{"name":"donut-box","icon":"webp/donut-box.webp","url":"https://topmbrads.top/games/donut-box/index.html"},
{"name":"dotted-fill","icon":"webp/dotted-fill.webp","url":"https://topmbrads.top/games/dotted-fill/index.html"},
{"name":"DrawIn","icon":"webp/DrawIn.webp","url":"https://topmbrads.top/games/DrawIn/index.html"},
{"name":"DrawTheDefense","icon":"webp/DrawTheDefense.webp","url":"https://topmbrads.top/games/DrawTheDefense/index.html"},
{"name":"Dream_Home_Merge_Design","icon":"webp/Dream_Home_Merge_Design.webp","url":"https://topmbrads.top/games/Dream_Home_Merge_Design/index.html"},
{"name":"drift-dudes","icon":"webp/drift-dudes.webp","url":"https://topmbrads.top/games/drift-dudes/index.html"},
{"name":"dummies-world-cup","icon":"webp/dummies-world-cup.webp","url":"https://topmbrads.top/games/dummies-world-cup/index.html"},
{"name":"DunkLine","icon":"webp/DunkLine.webp","url":"https://topmbrads.top/games/DunkLine/index.html"},
{"name":"dunk-shot","icon":"webp/dunk-shot.webp","url":"https://topmbrads.top/games/dunk-shot/index.html"},
{"name":"emoji-flow","icon":"webp/emoji-flow.webp","url":"https://topmbrads.top/games/emoji-flow/index.html"},
{"name":"endlessseige","icon":"webp/endlessseige.webp","url":"https://topmbrads.top/games/endlessseige/index.html"},
{"name":"Epic_Blocollapse","icon":"webp/Epic_Blocollapse.webp","url":"https://topmbrads.top/games/Epic_Blocollapse/index.html"},
{"name":"equalz","icon":"webp/equalz.webp","url":"https://topmbrads.top/games/equalz/index.html"},
{"name":"fill","icon":"webp/fill.webp","url":"https://topmbrads.top/games/fill/index.html"},
{"name":"filling-lines","icon":"webp/filling-lines.webp","url":"https://topmbrads.top/games/filling-lines/index.html"}
]

async function fetchGames() {
    try {
        const response = await fetch('games.json');
        conf = await response.json();
        conf = shuffleArray(conf);

        topGames(120, 122, 'top-games');
        newGames(0, 20, 'new-games');

        setUpScrollListener();
    } catch (error) {
        console.error('load game config failed:', error);
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function newGames(startIndex, endIndex, containerId) {
    if (!conf) return;

    const gameList = document.getElementById(containerId);
    if (!gameList) return;

    //gameList.innerHTML = ''; 

    const gamesToDisplay = conf.slice(startIndex, endIndex);
    const fragment = document.createDocumentFragment();

    gamesToDisplay.forEach(game => {
        const item = generateGameItem1(game);
        fragment.appendChild(item);
    });
    gameList.appendChild(fragment);
}

function topGames(startIndex, endIndex, containerId) {
    if (!conf) return;

    const gameList = document.getElementById(containerId);
    if (!gameList) return;

    gameList.innerHTML = '';

    const gamesToDisplay = conf.slice(startIndex, endIndex);
    const fragment = document.createDocumentFragment();

    gamesToDisplay.forEach(game => {
        const item = generateGameItem1(game);
        fragment.appendChild(item);
    });
    gameList.appendChild(fragment);
}

function generateGameItem3(game) {
    const wrapper = document.createElement('div');
    wrapper.className = 'game-item-3';

    const link = document.createElement('a');
    link.href = `detail/index.html?name=${encodeURIComponent(game.name)}&icon=${encodeURIComponent(game.icon)}&path=${encodeURIComponent(game.url)}`;

    const title = document.createElement('h2');
    title.textContent = game.name;

    const img = document.createElement('img');
    img.loading = 'lazy';
    img.src = game.icon;

    link.appendChild(img);
    link.appendChild(title);
    wrapper.appendChild(link);

    return wrapper;
}

function generateGameItem1(game) {
    const wrapper = document.createElement('div');
    wrapper.className = 'game-item-1';

    const link = document.createElement('a');
    link.href = `detail/index.html?name=${encodeURIComponent(game.name)}&icon=${encodeURIComponent(game.icon)}&path=${encodeURIComponent(game.url)}`;

    const img = document.createElement('img');
    img.loading = 'lazy';
    img.src = game.icon;

    const title = document.createElement('h2');
    title.textContent = game.name;

    link.appendChild(img);
    link.appendChild(title);
    wrapper.appendChild(link);
    return wrapper;
}

function generateGameItem2(game) {
    const randomRating = (Math.random() * (5.0 - 3.5) + 3.5).toFixed(1);
    const fullStars = Math.floor(randomRating);
    const emptyStars = 5 - fullStars;
    const stars = '★'.repeat(fullStars) + '☆'.repeat(emptyStars);

    const wrapper = document.createElement('div');
    wrapper.className = 'game-item-2';

    const link = document.createElement('a');
    link.href = `detail/index.html?name=${encodeURIComponent(game.name)}&icon=${encodeURIComponent(game.icon)}&path=${encodeURIComponent(game.url)}`;

    const img = document.createElement('img');
    img.loading = 'lazy';
    img.src = game.icon;

    const starsDiv = document.createElement('div');
    starsDiv.className = 'game-stars-2';
    starsDiv.textContent = stars;

    link.appendChild(img);
    link.appendChild(starsDiv);
    wrapper.appendChild(link);
    return wrapper;
}

function setUpScrollListener() {
    window.addEventListener('scroll', () => {
        if (loading) return;  
        if (currentPage * itemsPerPage >= conf.length) return; 

        if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 300) {
            loading = true; 
            currentPage++;
            const startIndex = currentPage * itemsPerPage;
            const endIndex = (currentPage + 1) * itemsPerPage;
            newGames(startIndex, endIndex, 'new-games');
            loading = false; 
        }
    });
}

fetchGames();
