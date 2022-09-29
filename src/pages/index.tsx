import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

const Index = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Jomai (ジョーマイ) アプリ"
          description={AppConfig.description}
        />
      }
    >
      <h1 className="text-2xl font-bold">Markdownファイルを瞬時に検索</h1>
      <p>
        <span role="img" aria-label="rocket">
          🚀
        </span>{' '}
        JomaiはあなたのコンピューターにあるMarkdownドキュメントをインデックス化し検索可能にします。ひとたびインデックス化されれば、Jomaiの最適化された検索機能によりドキュメントを簡単に見つけられるようになります。もうドキュメントを置く場所に悩むことはありません。とにかく書いて、必要になったら検索してさっと
        <span role="img" aria-label="zap">
          ⚡️
        </span>
        見つけられます。
      </p>
      <img
        src={`${router.basePath}/assets/images/screenshot-main-light-ja.png`}
        alt="Nextjs starter banner"
      />
      <h2 className="text-lg font-semibold">Jomaiの特徴</h2>
      <ul>
        <li>
          <span role="img" aria-label="rocket">
            🚀
          </span>{' '}
          JomaiはMarkdownファイルに特化したデスクトップサーチシステムです
        </li>
        <li>
          <span role="img" aria-label="pencil2">
            ✏️
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
          <span role="img" aria-label="hammer_and_wrench">
            🛠
          </span>{' '}
          ファイルの内容から使われている言語を推測して、その言語に最適な方法でインデックス化します
          (現在のバージョンでは英語と日本語に対応しています)
        </li>
        <li>
          <span role="img" aria-label="snake">
            🐍
          </span>{' '}
          ドキュメントをローカルディスクのどこに置いても、捕捉して検索可能にします
          (監視対象パスを事前に設定しておく必要があります)
        </li>
        <li>
          <span role="img" aria-label="art">
            🎨
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
          <span role="img" aria-label="languages">
            🔤
          </span>{' '}
          対応言語の追加
        </li>
        <li>
          <span role="img" aria-label="documents">
            📑
          </span>{' '}
          Markdown以外のファイル形式に対応
        </li>
        <li>
          <span role="img" aria-label="computer">
            💻
          </span>{' '}
          Windows版、Linux版の提供
        </li>
        <li>
          <span role="img" aria-label="terminal">
            🖥
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
        ※
        ベータ版につき約30日間の使用期限があります。新しいバージョンをインストールすると期限が延長されます。
      </p>

      <section className="bg-white border-t border-gray-300 py-8">
        <h2 className="text-lg font-semibold">お問合せ</h2>
        <form
          action="#"
          className="pt-4 space-y-8"
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              メールアドレス
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              メッセージ
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-600 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
          >
            送信
          </button>
        </form>
      </section>
    </Main>
  );
};

export default Index;
