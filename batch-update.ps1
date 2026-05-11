$detailPath = "c:\Users\yang'li\Downloads\wj-site254-master2\wj-site254-master\detail"

# Get all non-mobile HTML files
$htmlFiles = Get-ChildItem -Path $detailPath -Filter "*.html" | Where-Object { $_.Name -not like "*_mobile.html" }

foreach ($file in $htmlFiles) {
    # Extract game name from filename (remove .html extension)
    $gameName = $file.BaseName
    
    # Read file content
    $content = Get-Content -Path $file.FullName -Raw
    
    # Define the old script pattern to replace
    $oldScriptPattern = @"
<script>
\(function\(\) \{
  const games = \[.*?\];
  document\.addEventListener\('DOMContentLoaded', function\(\) \{
    const playButton = document\.querySelector\('\.play-button'\);
    if \(playButton\) \{
      playButton\.addEventListener\('click', function\(\) \{
        const randomGame = games\[Math\.floor\(Math\.random\(\) \* games\.length\)\];
        window\.location\.href = randomGame;
      \}\);
    \}
  \}\);
\}\)\(\);
</script>
"@

    # Define the new script
    $newScript = @"
<script>
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.querySelector('.play-button');
    if (playButton) {
      playButton.addEventListener('click', function() {
        fetch('../games.json')
          .then(response => response.json())
          .then(games => {
            const currentGame = games.find(game => game.name === '$gameName');
            if (currentGame && currentGame.url) {
              const iframe = document.createElement('iframe');
              iframe.src = currentGame.url;
              iframe.style.position = 'fixed';
              iframe.style.top = '0';
              iframe.style.left = '0';
              iframe.style.width = '100%';
              iframe.style.height = '100%';
              iframe.style.border = 'none';
              iframe.style.zIndex = '9999';
              document.body.appendChild(iframe);
              document.body.style.overflow = 'hidden';
            }
          })
          .catch(error => console.error('Error loading games.json:', error));
      });
    }
  });
})();
</script>
"@

    # Use regex to find and replace the script block
    $pattern = '(?s)<script>\s*\(function\(\) \{.*?const games = \[.*?\];.*?window\.location\.href = randomGame;.*?\}\)\(\);\s*</script>'
    
    if ($content -match $pattern) {
        $newContent = $content -replace $pattern, $newScript
        Set-Content -Path $file.FullName -Value $newContent -Encoding UTF8
        Write-Host "Updated: $($file.Name)"
    } else {
        Write-Host "No match found in: $($file.Name)"
    }
}

Write-Host "Batch update completed!"
