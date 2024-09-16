import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./styles/globals.scss";
export const metadata = {
  title: "Adèle Vercaygne",
  description:
    "Site vitrine et de réservation pour les cours de yoga d‘Adèle Vercaygne",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
