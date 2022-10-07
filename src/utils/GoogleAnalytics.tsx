import { useRouter } from 'next/router';
import { useEffect } from 'react';

const GA_ID = 'G-42ME3ZF3TT';

declare global {
  interface Window {
    gtag: any;
  }
}

const pageview = (path: string) => {
  window.gtag('config', GA_ID, {
    page_path: path,
  });
};

export const GoogleAnalytics = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (path: string) => {
      pageview(path);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_ID}');`,
        }}
      />
    </>
  );
};

const event = (
  action: string,
  category: string,
  label: string,
  value: string
) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: JSON.stringify(label),
    value,
  });
};

export const useGoogleAnalytics = () => {
  return { event };
};
