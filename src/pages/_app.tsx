import "src/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="mx-auto max-w-prose">
      <header className="flex justify-between border-b border-gray-300 py-3">
        <Link href="/">
          <a className="text-2xl font-bold">GAOGAO GATE</a>
        </Link>
        <nav>
          <ul className="flex space-x-4 text-center">
            <li>
              <Link href="/">
                <a className="text-lg">blog</a>
              </Link>
            </li>
            <li>
              <Link href="/index.html">
                <a className="text-lg">test</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="mt-8">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
