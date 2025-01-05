import Newsletter from "../components/Newsletter/Newsletter";
import PageHeader from "../components/PageHeader/PageHeader";

export const metadata = {
  title: "Ma méthode - Adèle Vercaygne",
  description:
    "Découvrez ma méthode unique de yoga pour développer votre force, améliorer votre souplesse et maîtriser vos postures, tout en cultivant un mental calme et fort",
};

const NewsletterPage = () => {
  return (
    <main>
      <PageHeader title="S'inscrire à la newsletter" />
      <Newsletter />
    </main>
  );
};

export default NewsletterPage;
