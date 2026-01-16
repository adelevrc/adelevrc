import { frFR } from "@clerk/localizations";
import { ClerkProvider } from "@clerk/nextjs";
import { Poppins } from "next/font/google";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Providers from "./providers";

import "@/app/styles/globals.scss";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
  display: "swap",
});

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='fr'>
      <body>
        <ClerkProvider localization={frFR}>
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </ClerkProvider>
      </body>
    </html>
  );
}
