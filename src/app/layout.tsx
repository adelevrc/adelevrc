import { Poppins, Roboto_Mono, Epilogue } from "next/font/google";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Providers from "./providers";
import "@/app/styles/globals.scss";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
  display: "swap",
});

export const roboto = Roboto_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["900"],
});
export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='fr'>
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
