# Jomai Webサイト

### ## リリースビルド

`next export` は i18n 機能と一緒に利用できない。そこで各言語ごとのページをテンプレートから生成することにした。

```shell
just process-template
```

また `scripts/inject-lang.js` によりビルド時に `<html>` に `lang` 属性を追加する。

