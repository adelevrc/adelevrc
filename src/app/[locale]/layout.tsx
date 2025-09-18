import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { Poppins } from "next/font/google";
import { notFound } from "next/navigation";
import "../styles/globals.scss";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = "fr";
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
