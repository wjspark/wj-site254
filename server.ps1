$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Definition
Set-Location $scriptPath

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add('http://localhost:7000/')
$listener.Start()
Write-Host "Server running on http://localhost:7000"
Write-Host "Serving files from: $scriptPath"
Write-Host "Press Ctrl+C to stop"

function Get-ContentType($filePath) {
    $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
    switch ($ext) {
        '.html' { return 'text/html' }
        '.css' { return 'text/css' }
        '.js' { return 'application/javascript' }
        '.json' { return 'application/json' }
        '.png' { return 'image/png' }
        '.jpg' { return 'image/jpeg' }
        '.gif' { return 'image/gif' }
        '.ico' { return 'image/x-icon' }
        default { return 'application/octet-stream' }
    }
}

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $localPath = $request.Url.LocalPath
        if ($localPath -eq '/') {
            $localPath = '/index.html'
        }
        
        $filePath = Join-Path $scriptPath $localPath.TrimStart('/')
        
        if (Test-Path $filePath) {
            $content = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $content.Length
            $response.ContentType = Get-ContentType $filePath
            $response.OutputStream.Write($content, 0, $content.Length)
        } else {
            $response.StatusCode = 404
        }
        $response.Close()
    }
} catch {
    Write-Host "Server stopped"
} finally {
    $listener.Stop()
    $listener.Close()
}
