import { useRouter } from 'next/router';

import en from '../locales/en';
import ja from '../locales/ja';

const getT = (locale: string | undefined) => {
  switch (locale) {
    case 'ja':
      return ja;
    case 'en':
    default:
      return en;
  }
};

export const useLocale = () => {
  const { locale } = useRouter();
  const t = getT(locale);
  return { locale, t };
};
