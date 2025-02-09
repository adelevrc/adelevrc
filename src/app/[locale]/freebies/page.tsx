import Container from "@/app/components/Freebies/Container";
import { getTranslations } from "next-intl/server";
import styles from "./freebies.module.scss";
import { Props } from "../about/page";
import { Metadata } from "next";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Freebies.metaData" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

const Freebies = () => {
  return (
    <main className={styles.main}>
      <Container />
    </main>
  );
};

export default Freebies;
