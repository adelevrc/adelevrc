import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { Poppins } from "next/font/google";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { frFR } from "@clerk/localizations";
import "../styles/globals.scss";

export const bebasNeue = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
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
          <NextIntlClientProvider>
            <Header />
            {children}∏
            <Footer />
          </NextIntlClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
};
