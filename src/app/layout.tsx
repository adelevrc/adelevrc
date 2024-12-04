import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Libre_Bodoni, Mrs_Saint_Delafield } from "next/font/google";

import "./styles/globals.scss";

export const libreBodoni = Libre_Bodoni({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const mrsSaintDelafield = Mrs_Saint_Delafield({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='fr'>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
