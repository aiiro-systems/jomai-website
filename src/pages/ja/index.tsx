import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { useGoogleAnalytics } from '@/utils/GoogleAnalytics';

const Index = () => {
  const router = useRouter();
  const { event } = useGoogleAnalytics();

  const handleDownloadClick = (binaryType: string) => {
    event('download_click', 'download', binaryType, '1');
  };

  return (
    <Main
      meta={
        <Meta
          title="Jomai"
          description="Jomai(ジョーマイ)はMarkdownファイルに特化したデスクトップサーチシステムです"
        />
      }
      title="Jomai"
      description="Jomai(ジョーマイ)はMarkdownファイルに特化したデスクトップサーチシステムです"
    >
      <h1 className="text-2xl font-bold">Markdownファイルを瞬時に検索</h1>
      <p>
        <span role="img" aria-label="rocket">
          🚀
        </span>{' '}
        JomaiはあなたのコンピューターにあるMarkdownドキュメントをインデックス化し検索可能にします。ひとたびインデックス化されれば、Jomaiの最適化された検索機能によりドキュメントを簡単に見つけられるようになります。もうドキュメントを置く場所に悩むことはありません。とにかく書いて、必要になったら検索してさっと見つけられます。
        <span role="img" aria-label="zap">
          ⚡️
        </span>
      </p>
      <img
        src={`${router.basePath}/assets/images/screenshot-main-light-ja.png`}
        alt="Jomai screenshot"
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
        <li>
          <a
            onClick={() => handleDownloadClick('mac-apple')}
            href="https://jomai-artifacts-382046072211.s3.ap-northeast-1.amazonaws.com/Jomai_0.1.0_aarch64.dmg"
          >
            <span role="img" aria-label="pizza">
              🍕
            </span>{' '}
            macOS (Appleシリコン) v0.1.0 ベータ版
          </a>
        </li>
        <li>
          <a
            onClick={() => handleDownloadClick('mac-intel')}
            href="https://jomai-artifacts-382046072211.s3.ap-northeast-1.amazonaws.com/Jomai_0.1.0_x64.dmg"
          >
            <span role="img" aria-label="pancake">
              🥞
            </span>{' '}
            macOS (Intel) v0.1.0 ベータ版
          </a>
        </li>
      </ul>
      <p className="text-sm">
        ※
        ベータ版につき約30日間の使用期限があります。新しいバージョンをインストールすると期限が延長されます。
      </p>

      <section className="border-t border-gray-300 bg-white py-8">
        <h2 className="text-lg font-semibold">お問合せ</h2>
        <form
          action="#"
          className="space-y-8 pt-4"
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              メールアドレス
            </label>
            <input
              type="email"
              name="email"
              className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              メッセージ
            </label>
            <textarea
              name="message"
              rows={6}
              className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="hover:bg-primary-800 focus:ring-primary-300 rounded-lg bg-gray-600 py-3 px-5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 sm:w-fit"
          >
            送信
          </button>
        </form>
      </section>
    </Main>
  );
};

export default Index;
