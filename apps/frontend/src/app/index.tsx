import type { AppProps } from "next/app";

import { Inter } from "next/font/google";

import "@community/ui/styles/index.scss";

const inter = Inter({ subsets: ["latin", "cyrillic"], weight: ["400", "700"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
