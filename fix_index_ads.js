#!/usr/bin/env node
const fs = require('fs');

const NEW_AD_CODE = `<script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js" crossorigin="anonymous"></script>
<script>
  window.googletag = window.googletag || {cmd: []};
  googletag.cmd.push(function() {
    googletag.defineSlot('/23334333394/sub', [[300,250],[336,280],[250,250],[200,200]], 'div-gpt-ad-1773196177343-0').addService(googletag.pubads());
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
  });
</script>`;

const NEW_AD_SLOT = `<div id='div-gpt-ad-1773196177343-0' style='min-width: 200px; min-height: 200px;'>
  <script>
    googletag.cmd.push(function() { googletag.display('div-gpt-ad-1773196177343-0'); });
  </script>
</div>`;

function processFile(file) {
  let content = fs.readFileSync(file, 'utf-8');

  // 移除旧的 GPT 脚本和配置
  content = content.replace(/<script[^>]*src="[^"]*gpt[^"]*"[^>]*><\/script>/g, '');
  content = content.replace(/<script[^>]*src="[^"]*pagead[^"]*"[^>]*><\/script>/g, '');
  content = content.replace(/<script>\s*window\.googletag[\s\S]*?<\/script>/g, '');

  // 移除旧的广告容器和已渲染内容
  content = content.replace(/<div[^>]*div-gpt-ad[^>]*>[\s\S]*?<\/div>\s*<\/div>/g, '');
  content = content.replace(/<ins[^>]*gpt_unit[^>]*>[\s\S]*?<\/ins>/g, '');

  // 移除广告相关标签
  content = content.replace(/<meta[^>]*origin-trial[^>]*>/g, '');
  content = content.replace(/<link[^>]*compression-dictionary[^>]*>/g, '');
  content = content.replace(/<iframe[^>]*goog_plcm_frame[^>]*>[\s\S]*?<\/iframe>/g, '');
  content = content.replace(/<iframe[^>]*adtrafficquality[^>]*>[\s\S]*?<\/iframe>/g, '');
  content = content.replace(/<iframe[^>]*recaptcha[^>]*>[\s\S]*?<\/iframe>/g, '');

  // 在 </head> 前添加新广告代码
  content = content.replace('</head>', NEW_AD_CODE + '\n</head>');

  // 在 top-games 后添加广告位
  content = content.replace(
    /(<div class="game-list-1" id="top-games"[^>]*>[\s\S]*?<\/div>)/,
    '$1\n' + NEW_AD_SLOT
  );

  fs.writeFileSync(file, content, 'utf-8');
  console.log(`已处理: ${file}`);
}

processFile('index.html');
processFile('index_mobile.html');
console.log('\n完成！');
