import type { ReactNode } from 'react';
import Link from 'next/link';

type IMainProps = {
  meta: ReactNode;
  title: string;
  description: string;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    {props.meta}

    <div className="mx-auto max-w-screen-md">
      <header className="pt-8 flex justify-end gap-4">
        <Link href="/en">
          <a>English</a>
        </Link>
        <Link href="/ja">
          <a>日本語</a>
        </Link>
      </header>

      <div className="border-b border-gray-300">
        <div className="pt-8 pb-8">
          <div className="text-3xl font-bold text-gray-900">{props.title}</div>
          <div className="text-xl">{props.description}</div>
        </div>
      </div>

      <div className="content py-5 text-xl">{props.children}</div>

      <div className="border-t border-gray-300 py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()} {props.title}. Powered with{' '}
        <span role="img" aria-label="Love">
          ♥
        </span>{' '}
        by <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>
      </div>
    </div>
  </div>
);

export { Main };
