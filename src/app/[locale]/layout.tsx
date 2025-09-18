import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Poppins } from "next/font/google";
import { notFound } from "next/navigation";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import LanguageSwitcher from "../components/LangageSwitcher/LangageSwitcher";
import "../styles/globals.scss";

export const bebasNeue = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  /* 
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages(); */
  return (
    <html lang='fr'>
      <body>
        {/*     <NextIntlClientProvider messages={messages}>
          <Header /> */}
        {children}
        {/*         <LanguageSwitcher />
          <Footer />
        </NextIntlClientProvider> */}
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
