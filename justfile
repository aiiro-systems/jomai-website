default:
  just --list

process-template:
  pnpx hbs-cli -D templates/locales/en.json templates/index.tsx.hbs
  mv index.tsx.html src/pages/index.tsx
  pnpx hbs-cli -D templates/locales/ja.json templates/index.tsx.hbs
  mv index.tsx.html src/pages/ja/index.tsx

