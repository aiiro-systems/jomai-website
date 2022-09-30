default:
  just --list

process-template:
  pnpx hbs-cli -D templates/locales/en.json templates/index.tsx.hbs
  mv index.tsx.html src/pages/index.tsx
  pnpx hbs-cli -D templates/locales/ja.json templates/index.tsx.hbs
  mv index.tsx.html src/pages/ja/index.tsx

inject-lang: inject-lang-en inject-lang-ja

inject-lang-en:
  #!/usr/bin/env bash
  temp=$(mktemp)
  cat out/index.html | sed 's/<html>/<html lang="en">/' > ${temp}
  mv ${temp} out/index.html

inject-lang-ja:
  #!/usr/bin/env bash
  temp=$(mktemp)
  cat out/ja/index.html | sed 's/<html>/<html lang="ja">/' > ${temp}
  mv ${temp} out/ja/index.html


