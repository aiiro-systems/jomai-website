const fs = require('fs');

// inject lang attribute to html tag
const injectLang = (path, lang) => {
  const html = fs.readFileSync(path, 'utf8');
  const htmlWithLang = html.replace('<html>', `<html lang="${lang}">`);
  fs.writeFileSync(path, htmlWithLang);
};

injectLang('out/index.html', 'en');
injectLang('out/ja/index.html', 'ja');
