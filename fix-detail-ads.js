const fs = require('fs');
const path = require('path');

const detailDir = 'detail';
const files = fs.readdirSync(detailDir).filter(f => f.endsWith('.html') && !f.endsWith('_mobile.html'));

files.forEach(file => {
  const filePath = path.join(detailDir, file);
  let html = fs.readFileSync(filePath, 'utf8');

  // 删除所有广告相关代码
  html = html.replace(/<link rel="preconnect"[^>]*securepubads[^>]*>\s*/g, '');
  html = html.replace(/<link rel="preconnect"[^>]*adservice[^>]*>\s*/g, '');
  html = html.replace(/<link rel="dns-prefetch"[^>]*securepubads[^>]*>\s*/g, '');
  html = html.replace(/<link rel="dns-prefetch"[^>]*adservice[^>]*>\s*/g, '');
  html = html.replace(/<link rel="preload"[^>]*gpt\.js[^>]*>\s*/g, '');
  html = html.replace(/<script[^>]*src="https:\/\/securepubads[^>]*gpt\.js"[^>]*><\/script>\s*/g, '');
  html = html.replace(/<script>\s*window\.googletag[\s\S]*?googletag\.enableServices\(\);[\s\S]*?<\/script>\s*/g, '');
  html = html.replace(/<script>window\.addEventListener\('pageshow'[\s\S]*?<\/script>/g, '');

  // 在 title 后插入新代码
  html = html.replace(
    /(<title>.*?<\/title>)/,
    `$1
  <link rel="preconnect" href="https://securepubads.g.doubleclick.net">
  <link rel="dns-prefetch" href="https://securepubads.g.doubleclick.net">
  <link rel="preload" href="https://securepubads.g.doubleclick.net/tag/js/gpt.js" as="script">
  <script src="https://securepubads.g.doubleclick.net/tag/js/gpt.js" crossorigin="anonymous"></script>
  <script>
  window.googletag = window.googletag || {cmd: []};
  googletag.cmd.push(function() {
    googletag.defineSlot('/23334333394/aub.qcpvyfp.com', [250, 250], 'div-gpt-ad-1773292123036-0').addService(googletag.pubads());
    googletag.defineSlot('/23334333394/aub.qcpvyfp.com1', [320, 480], 'div-gpt-ad-1773292220477-0').addService(googletag.pubads());
    googletag.defineSlot('/23334333394/aub.qcpvyfp.com2', [336, 280], 'div-gpt-ad-1773292292121-0').addService(googletag.pubads());
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
  });
  </script>
  <script>window.addEventListener('pageshow',function(e){if(e.persisted){googletag.cmd.push(function(){googletag.pubads().refresh();})}});</script>`
  );

  fs.writeFileSync(filePath, html);
  console.log(`✓ ${file}`);
});

console.log(`\n处理完成: ${files.length} 个文件`);
