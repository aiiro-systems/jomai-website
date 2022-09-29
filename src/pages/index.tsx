import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { useLocale } from '@/utils/useLocale';
import { useGoogleAnalytics } from '@/utils/GoogleAnalytics';

const Index = () => {
  const router = useRouter();
  const { t } = useLocale();
  const { event } = useGoogleAnalytics();

  const handleDownloadClick = (binaryType: string) => {
    event('download_click', 'download', binaryType, '1');
  };

  return (
    <Main
      meta={<Meta title={t.title} description={t.description} />}
      title={t.title}
      description={t.description}
    >
      <h1 className="text-2xl font-bold">{t.overview.title}</h1>
      <p>
        <span role="img" aria-label="rocket">
          🚀
        </span>{' '}
        {t.overview.description}
        <span role="img" aria-label="zap">
          ⚡️
        </span>
      </p>
      <img
        src={`${router.basePath}/assets/images/${t.overview.image1}`}
        alt="Jomai screenshot"
      />
      <h2 className="text-lg font-semibold">{t.features.title}</h2>
      <ul>
        <li>
          <span role="img" aria-label="rocket">
            🚀
          </span>{' '}
          {t.features.item1}
        </li>
        <li>
          <span role="img" aria-label="pencil2">
            ✏️
          </span>{' '}
          {t.features.item2}
        </li>
        <li>
          <span role="img" aria-label="nail_care">
            💅
          </span>{' '}
          {t.features.item3}
        </li>
        <li>
          <span role="img" aria-label="hammer_and_wrench">
            🛠
          </span>{' '}
          {t.features.item4}
        </li>
        <li>
          <span role="img" aria-label="snake">
            🐍
          </span>{' '}
          {t.features.item5}
        </li>
        <li>
          <span role="img" aria-label="art">
            🎨
          </span>{' '}
          {t.features.item6}
        </li>
        <li>
          <span role="img" aria-label="fox_face">
            🦊
          </span>{' '}
          {t.features.item7}
        </li>
      </ul>
      <h2 className="text-lg font-semibold">{t.futurePlans.title}</h2>
      <ul>
        <li>
          <span role="img" aria-label="languages">
            🔤
          </span>{' '}
          {t.futurePlans.moreLanguageSupport}
        </li>
        <li>
          <span role="img" aria-label="documents">
            📑
          </span>{' '}
          {t.futurePlans.moreFileTypeSupport}
        </li>
        <li>
          <span role="img" aria-label="computer">
            💻
          </span>{' '}
          {t.futurePlans.morePlatformSupport}
        </li>
        <li>
          <span role="img" aria-label="terminal">
            🖥
          </span>{' '}
          {t.futurePlans.cliSupport}
        </li>
      </ul>
      <h2 className="text-lg font-semibold">{t.downloads.title}</h2>
      <ul>
        <li>
          <a
            onClick={() => handleDownloadClick('mac-apple')}
            href="https://jomai-artifacts-382046072211.s3.ap-northeast-1.amazonaws.com/Jomai_0.1.0_aarch64.dmg"
          >
            <span role="img" aria-label="pizza">
              🍕
            </span>{' '}
            {t.downloads.macOsAppleSilicon}
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
            {t.downloads.macOsIntel}
          </a>
        </li>
      </ul>
      <p className="text-sm">{t.downloads.note}</p>

      <section className="border-t border-gray-300 bg-white py-8">
        <h2 className="text-lg font-semibold">{t.contact.title}</h2>
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
              {t.contact.email}
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
              {t.contact.message}
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
            {t.contact.send}
          </button>
        </form>
      </section>
    </Main>
  );
};

export default Index;
