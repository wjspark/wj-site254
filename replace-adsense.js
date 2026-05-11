const fs = require('fs');

const indexPath = 'index.html';
let html = fs.readFileSync(indexPath, 'utf8');

// 删除旧的 AdSense 脚本
html = html.replace(/<script async src="https:\/\/pagead2\.googlesyndication\.com\/pagead\/js\/adsbygoogle_direct\.js\?client=ca-pub-6597103175512645" crossorigin="anonymous"><\/script>\s*/g, '');

// 删除旧的 AdSense 广告单元
html = html.replace(/<ins class="adsbygoogle"[\s\S]*?<\/ins>\s*<script>\s*\(adsbygoogle = window\.adsbygoogle \|\| \[\]\)\.push\(\{\}\);\s*<\/script>\s*/g, '');

fs.writeFileSync(indexPath, html);
console.log('✓ 已删除旧的 AdSense 代码');
