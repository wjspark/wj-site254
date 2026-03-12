#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// 修复子页面
const detailDir = path.join(__dirname, 'detail');
const files = fs.readdirSync(detailDir).filter(f => f.endsWith('.html'));

let count = 0;
files.forEach(file => {
  const filePath = path.join(detailDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // 替换多尺寸为单一尺寸
  content = content.replace(
    "googletag.defineSlot('/23334333394/sub', [[300,250],[336,280],[250,250],[200,200]], 'div-gpt-ad-1773196177343-0')",
    "googletag.defineSlot('/23334333394/sub', [300, 250], 'div-gpt-ad-1773196177343-0')"
  );
  content = content.replace(
    "googletag.defineSlot('/23334333394/sub1', [[300,600],[300,250],[160,600]], 'div-gpt-ad-1773196483132-0')",
    "googletag.defineSlot('/23334333394/sub1', [300, 600], 'div-gpt-ad-1773196483132-0')"
  );

  fs.writeFileSync(filePath, content, 'utf-8');
  count++;
});

console.log(`子页面已处理: ${count} 个`);

// 修复首页
['index.html', 'index_mobile.html'].forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  content = content.replace(
    "googletag.defineSlot('/23334333394/sub', [[300,250],[336,280],[250,250],[200,200]], 'div-gpt-ad-1773196177343-0')",
    "googletag.defineSlot('/23334333394/sub', [300, 250], 'div-gpt-ad-1773196177343-0')"
  );

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`已处理: ${file}`);
});
