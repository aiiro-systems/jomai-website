import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Jomai (ジョーマイ) アプリ"
          description="JomaiアプリはMarkdownファイルに特化したデスクトップサーチシステムです"
        />
      }
    >
      <h1 className="text-2xl font-bold">
        Markdownファイルを瞬時に検索
      </h1>
      <p>
        <span role="img" aria-label="rocket">
          🚀
        </span>{' '}
          JomaiアプリはあなたのディスクにあるMarkdownドキュメントをインデックス化し検索可能にします。ひとたびインデックス化されれば、
          Jomaiの最適化された検索機能によりドキュメントを簡単に見つけられるようになります。もうドキュメントを置く場所に悩むことはありません。
          とにかく書いて、必要になったら検索してさっと<span role="img" aria-label="zap">
          ⚡️
      </span>見つけられます。
      </p>
        <h2 className="text-lg font-semibold">Jomaiの特徴</h2>
      <ul>
        <li>
          <span role="img" aria-label="fire">
            🔥
          </span>{' '}
            Jomai (ジョーマイ) は markdown ファイルに特化したデスクトップサーチシステムです
        </li>
        <li>
          <span role="img" aria-label="art">
            🎨
          </span>{' '}
            ローカルディスクにあるファイルをインデックス化して検索可能にします
        </li>
        <li>
          <span role="img" aria-label="nail_care">
            💅
          </span>{' '}
            ファイル名はもちろん、内容、frontmatter を使ってファイルを見つけます
        </li>
        <li>
          <span role="img" aria-label="tada">
            🎉
          </span>{' '}
            ファイルの内容から使われている言語を推測して、その言語に最適な方法でインデックス化します (現在のバージョンでは英語と日本語に対応しています。対応言語を追加予定です)
        </li>
        <li>
          <span role="img" aria-label="pencil2">
            ✏️
          </span>{' '}
            ドキュメントをローカルディスクのどこに置いても、捕捉して検索可能にします (監視対象パスを事前に設定しておく必要があります)
        </li>
        <li>
          <span role="img" aria-label="hammer_and_wrench">
            🛠
          </span>{' '}
            プロジェクトフォルダーや他の関係のあるファイルのそばにドキュメントを置いてください。どこに置いたか覚えておく必要はありません。検索して簡単に見つけられます
        </li>
        <li>
          <span role="img" aria-label="fox_face">
            🦊
          </span>{' '}
            見つけたファイルはお好きなエディターで開いてください
        </li>
      </ul>
        <h2 className="text-lg font-semibold">将来の開発予定</h2>
      <ul>
        <li>
          <span role="img" aria-label="coffee">
            ☕
          </span>{' '}
          対応言語の追加
        </li>
        <li>
          <span role="img" aria-label="dash">
            💨
          </span>{' '}
          Markdown以外のファイル形式に対応
        </li>
          <li>
              <span role="img" aria-label="white_check_mark">✅</span>{' '}
              Windows版、Linux版の提供
          </li>
          <li>
              <span role="img" aria-label="white_check_mark">
                  ✅
              </span>{' '}
              CLI(コマンドラインインターフェース)の提供
          </li>
      </ul>
      <h2 className="text-lg font-semibold">ダウンロード</h2>
      <ul>
          <li>macOS (Appleシリコン)</li>
          <li>macOS (Intel)</li>
      </ul>
      <p className="text-sm">
          ※ ベータ版につき30日間の使用期限があります。新しいバージョンをインストールすると期限が延長されます。
      </p>
    </Main>
  );
};

export default Index;
