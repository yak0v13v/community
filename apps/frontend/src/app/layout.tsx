import type { Metadata } from "next";

import { Inter } from "next/font/google";

import "@community/ui/styles/index.scss";

const inter = Inter({ subsets: ["latin", "cyrillic"], weight: ["400", "700"] });

export const metadata: Metadata = {
  description: "Open source community",
  title: "Community",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
