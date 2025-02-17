import Newsletter from "../../components/Newsletter/Newsletter";
import PageHeader from "../../components/PageHeader/PageHeader";
import { useTranslations } from "next-intl";
import { Props } from "../about/page";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "Newsletter.metaData",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

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
