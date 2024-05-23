import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { GlobalStoreProvider } from "@/providers/global-store-providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
// const poppins = Poppins({ subsets: ['latin'], weight: '400' }); // Contoh weight '400'

export const metadata: Metadata = {
  title: "Pusaka Cakrawala",
  description: "Pusaka Cakrawala",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <GlobalStoreProvider>{children}</GlobalStoreProvider>
      </body>
    </html>
  );
}
