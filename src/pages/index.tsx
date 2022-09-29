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
          description="Jomai is a desktop search system specialized for Markdown files"
        />
      }
      title="Jomai"
      description="Jomai is a desktop search system specialized for Markdown files"
    >
      <h1 className="text-2xl font-bold">Instantly search Markdown files</h1>
      <p>
        <span role="img" aria-label="rocket">
          🚀
        </span>{' '}
        Jomai indexes and makes searchable the Markdown documents on your
        computer. Once indexed, Jomai&#x27;s optimized search function makes it
        easy to find your documents. No more worrying about where to put your
        documents. Just write it down, and you can quickly search and find it
        when you need it.
        <span role="img" aria-label="zap">
          ⚡️
        </span>
      </p>
      <img
        src={`${router.basePath}/assets/images/screenshot-main-light-ja.png`}
        alt="Jomai screenshot"
      />
      <h2 className="text-lg font-semibold">Features</h2>
      <ul>
        <li>
          <span role="img" aria-label="rocket">
            🚀
          </span>{' '}
          Jomai is a desktop search system specialized for Markdown files.
        </li>
        <li>
          <span role="img" aria-label="flower">
            🌸
          </span>{' '}
          Jomai does not transmit your data externally. Everything is handled
          within your computer. (except for checking and downloading new
          versions)
        </li>
        <li>
          <span role="img" aria-label="pencil2">
            ✏️
          </span>{' '}
          Indexes and makes searchable files on local disk.
        </li>
        <li>
          <span role="img" aria-label="nail_care">
            💅
          </span>{' '}
          Finds the file using the file name and the content, frontmatter.
        </li>
        <li>
          <span role="img" aria-label="hammer_and_wrench">
            🛠
          </span>{' '}
          Guesses the language used from the file content and indexes it best
          for that language (English and Japanese are supported in the current
          version).
        </li>
        <li>
          <span role="img" aria-label="snake">
            🐍
          </span>{' '}
          Captures and makes documents searchable anywhere on the local disk
          (requires preconfigured monitored paths).
        </li>
        <li>
          <span role="img" aria-label="art">
            🎨
          </span>{' '}
          Place the document near your project folder or other related files.
          There is no need to remember where you put them. You can easily find
          them by searching.
        </li>
        <li>
          <span role="img" aria-label="fox_face">
            🦊
          </span>{' '}
          Open the file you found in your favorite editor.
        </li>
      </ul>
      <h2 className="text-lg font-semibold">Future development plans</h2>
      <ul>
        <li>
          <span role="img" aria-label="languages">
            🔤
          </span>{' '}
          More supported languages
        </li>
        <li>
          <span role="img" aria-label="documents">
            📑
          </span>{' '}
          More file types
        </li>
        <li>
          <span role="img" aria-label="computer">
            💻
          </span>{' '}
          Windows and Linux
        </li>
        <li>
          <span role="img" aria-label="terminal">
            🖥
          </span>{' '}
          CLI (command line interface)
        </li>
      </ul>
      <h2 className="text-lg font-semibold">Downloads</h2>
      <ul>
        <li>
          <a
            onClick={() => handleDownloadClick('mac-apple')}
            href="https://jomai-artifacts-382046072211.s3.ap-northeast-1.amazonaws.com/v0.1.0/Jomai_0.1.0_aarch64.dmg"
          >
            <span role="img" aria-label="pizza">
              🍕
            </span>{' '}
            macOS (Apple Silicon) v0.1.0 beta
          </a>
        </li>
        <li>
          <a
            onClick={() => handleDownloadClick('mac-intel')}
            href="https://jomai-artifacts-382046072211.s3.ap-northeast-1.amazonaws.com/v0.1.0/Jomai_0.1.0_x64.dmg"
          >
            <span role="img" aria-label="pancake">
              🥞
            </span>{' '}
            macOS (Intel) v0.1.0 beta
          </a>
        </li>
      </ul>
      <p className="text-sm">
        The beta version has an expiration date of approximately 30 days. The
        expiration date will be extended when you install a new version.
      </p>

      <section className="border-t border-gray-300 bg-white py-8">
        <h2 className="text-lg font-semibold">Contact</h2>
        <form
          action="#"
          className="space-y-4 pt-4"
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
              Mail address
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
              Message
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
            Send
          </button>
        </form>
      </section>
    </Main>
  );
};

export default Index;
