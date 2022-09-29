# Jomai Webサイト

## ## タスク

- [ ] カスタマイズ
  - [ ] `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png` and `public/favicon-32x32.png`: your website favicon, you can generate from https://favicon.io/favicon-converter/
  - [ ] `src/styles/global.css`: your CSS file using Tailwind CSS
  - [ ] `src/utils/AppConfig.ts`: configuration file
  - [ ] `src/templates/Main.tsx`: default theme

### ## リリースビルド

`next export` は i18n 機能と一緒に利用できない。そこで各言語ごとのページをテンプレートから生成することにした。

```shell
pnpx hbs-cli -D templates/locales/en.json templates/index.tsx.hbs; mv index.tsx.html src/pages/index.tsx
pnpx hbs-cli -D templates/locales/ja.json templates/index.tsx.hbs; mv index.tsx.html src/pages/ja/index.tsx
```

