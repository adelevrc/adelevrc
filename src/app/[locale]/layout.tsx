import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import {
  Libre_Bodoni,
  Mrs_Saint_Delafield,
  Bebas_Neue,
  Poppins,
} from "next/font/google";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages, setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

import "../styles/globals.scss";
import LanguageSwitcher from "../components/LangageSwitcher/LangageSwitcher";

export const bebasNeue = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <LanguageSwitcher />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
