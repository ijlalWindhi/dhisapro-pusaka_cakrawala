import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { GlobalStoreProvider } from '@/providers/global-store-providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pusaka Cakrawala',
  description: 'Pusaka Cakrawala',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalStoreProvider>{children}</GlobalStoreProvider>
      </body>
    </html>
  );
}
