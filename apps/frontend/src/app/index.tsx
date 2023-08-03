import type { AppProps } from "next/app";

import { useDetectTheme } from "@/features/toggleTheme";
import { EffectorNext } from "@effector/next";
import { Inter } from "next/font/google";

import "@community/ui/styles/index.scss";

const inter = Inter({ subsets: ["latin", "cyrillic"], weight: ["400", "700"] });

export default function App({ Component, pageProps }: AppProps) {
  useDetectTheme();

  return (
    <EffectorNext values={pageProps.values}>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </EffectorNext>
  );
}
