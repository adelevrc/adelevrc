import Newsletter from "../../components/Newsletter/Newsletter";
import PageHeader from "../../components/PageHeader/PageHeader";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Ma méthode - Adèle Vercaygne",
  description:
    "Découvrez ma méthode unique de yoga pour développer votre force, améliorer votre souplesse et maîtriser vos postures, tout en cultivant un mental calme et fort",
};

const NewsletterPage = () => {
  const t = useTranslations("Newsletter");
  return (
    <main>
      <PageHeader title={t("title")} />
      <Newsletter />
    </main>
  );
};

export default NewsletterPage;
