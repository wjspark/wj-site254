const fs = require('fs');

const indexPath = 'index.html';
let html = fs.readFileSync(indexPath, 'utf8');

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
    googletag.defineSlot('/23334333394/aub.qcpvyfp.com3', [300, 250], 'div-gpt-ad-1773292392250-0').addService(googletag.pubads());
    googletag.defineSlot('/23334333394/aub.qcpvyfp.com5', ['fluid'], 'div-gpt-ad-1773292570897-0').addService(googletag.pubads());
    googletag.defineSlot('/23334333394/aub.qcpvyfp.com4', [160, 600], 'div-gpt-ad-1773292506599-0').addService(googletag.pubads());
    googletag.pubads().enableSingleRequest();
    googletag.pubads().enableLazyLoad({fetchMarginPercent:200,renderMarginPercent:50,mobileScaling:2.0});
    googletag.enableServices();
  });
  </script>
  <script>window.addEventListener('pageshow',function(e){if(e.persisted){googletag.cmd.push(function(){googletag.pubads().refresh();})}});</script>`
);

fs.writeFileSync(indexPath, html);
console.log('✓ index.html');
