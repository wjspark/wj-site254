$newCode = @'

(function() {
  let gameUrls = [];
  let currentIframe = null;

  function createGameIframe(gameUrl) {
    const existingIframe = document.getElementById('game-iframe');
    if (existingIframe) {
      existingIframe.remove();
    }
    const iframe = document.createElement('iframe');
    iframe.id = 'game-iframe';
    iframe.src = 'https://games.nfiuh.top' + gameUrl;
    iframe.style.width = '100%';
    iframe.style.height = '600px';
    iframe.style.border = 'none';
    iframe.style.display = 'block';
    iframe.style.margin = '20px auto';
    document.querySelector('.top-section').appendChild(iframe);
    currentIframe = iframe;
  }

  function loadRandomGame() {
    if (gameUrls.length === 0) return;
    const randomGame = gameUrls[Math.floor(Math.random() * gameUrls.length)];
    window.open('https://games.nfiuh.top' + randomGame, '_blank');
  }

  fetch('../games2.json')
    .then(response => response.json())
    .then(data => {
      gameUrls = data.data.list.map(item => item.gameUrl);
    })
    .catch(error => console.error('Error loading games:', error));

  document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.querySelector('.play-button');
    if (playButton) {
      playButton.addEventListener('click', function() {
        loadRandomGame();
      });
    }
  });
})();
'@

$detailPath = "d:\333\wj-site254\detail"
$files = Get-ChildItem -Path $detailPath -Filter "*.html"

$updated = 0

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw

    if ($content -match 'window\.location\.href = randomGame') {
        $pattern = '(?s)<script>\s*(/\*)?\(function\(\).*?window\.location\.href = randomGame.*?\)\(\);\s*(</script>|\*/\s*</script>)'
        $replacement = "<script>`r`n$newCode`r`n</script>"
        $newContent = $content -replace $pattern, $replacement

        if ($newContent -ne $content) {
            Set-Content -Path $file.FullName -Value $newContent -NoNewline
            $updated++
            Write-Host "Updated: $($file.Name)"
        }
    }
}

Write-Host "Total files updated: $updated"
