$detailPath = "c:\Users\yang'li\Downloads\wj-site254-master2\wj-site254-master\detail"
$templatePath = "c:\Users\yang'li\Downloads\wj-site254-master2\wj-site254-master\detail\candyCrush.html"

$templateContent = Get-Content -Path $templatePath -Raw

$htmlFiles = Get-ChildItem -Path $detailPath -Filter "*.html" | Select-Object -ExpandProperty FullName

$count = 0
foreach ($filePath in $htmlFiles) {
    $file = Get-Item $filePath
    $gameName = $file.BaseName
    $webpName = $gameName + ".webp"

    $oldContent = Get-Content -Path $filePath -Raw

    $newContent = $templateContent -replace 'candyCrush', $gameName
    $newContent = $newContent -replace 'candyCrush\.webp', $webpName

    $newContent = $newContent -replace '(?s)<script>\s*\(function\(\).*?</script>', ''

    Set-Content -Path $filePath -Value $newContent -Encoding UTF8
    $count++
    Write-Host "Updated $count`: $($file.Name)"
}

Write-Host "Batch update completed! Total files processed: $count"
