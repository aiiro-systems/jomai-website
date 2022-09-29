import { Head } from 'next/document';

export const GoogleAnalytics = () => {
  return (
    <Head>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-42ME3ZF3TT"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-42ME3ZF3TT');`,
        }}
      />
    </Head>
  );
};
