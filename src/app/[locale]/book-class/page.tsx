import { getTranslations } from "next-intl/server";
import PageHeader from "../../components/PageHeader/PageHeader";
import ReservationFrame from "../../components/ReservationFrame/ReservationFrame";
import styles from "./bookClass.module.scss";
import { useTranslations } from "next-intl";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "BookClass.metaData" });

  return {
    title: t("title"),
    message: t("description"),
  };
}

const BookClass = () => {
  const t = useTranslations("BookClass");
  return (
    <main className={styles.main}>
      <div>
        <PageHeader title={t("title")} />
        <h2>{t("howToBook")}</h2>
        <p>{t("p1")}</p>
        <p>{t("p2")}</p>
      </div>
      <ReservationFrame />
    </main>
  );
};

export default BookClass;
