import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./styles/globals.scss";

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
