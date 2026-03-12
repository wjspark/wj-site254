#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const detailDir = path.join(__dirname, 'detail');
const files = fs.readdirSync(detailDir).filter(f => f.endsWith('.html'));

let count = 0;
files.forEach(file => {
  const filePath = path.join(detailDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // 在 enableServices() 后添加 display 调用
  if (content.includes('googletag.enableServices();') && !content.includes('googletag.display(\'div-gpt-ad-1773196177343-0\');')) {
    content = content.replace(
      'googletag.enableServices();\n  });',
      'googletag.enableServices();\n    googletag.display(\'div-gpt-ad-1773196177343-0\');\n  });'
    );
    fs.writeFileSync(filePath, content, 'utf-8');
    count++;
  }
});

console.log(`已处理 ${count} 个文件`);
