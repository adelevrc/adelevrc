import Container from "@/app/components/Freebies/Container";
import { getTranslations } from "next-intl/server";
import styles from "./freebies.module.scss";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Freebies.metaData" });

  return {
    title: t("title"),
    message: t("description"),
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
