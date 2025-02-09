import { getTranslations } from "next-intl/server";
import PageHeader from "../../components/PageHeader/PageHeader";
import ReservationFrame from "../../components/ReservationFrame/ReservationFrame";
import styles from "./bookClass.module.scss";
import { useTranslations } from "next-intl";
import { Props } from "../about/page";
import { Metadata } from "next";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "BookClass.metaData" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

const BookClass = () => {
  const t = useTranslations("BookClass");
  return (
    <main className={styles.main}>
      <PageHeader title={t("title")} />
      <p> {t("info")}</p>
      <section>
        <h2>{t("differentsClasses")}</h2>
        <p>{t("p1")}</p>
        <ul>
          <li>
            {t.rich("oneHourClass", {
              span: (chunks) => <span>{chunks}</span>,
            })}{" "}
          </li>
          <li>
            {t.rich("ThreeEurosClass", {
              span: (chunks) => <span>{chunks}</span>,
            })}{" "}
          </li>
          <li>
            {t.rich("bonusClass", {
              span: (chunks) => <span>{chunks}</span>,
            })}{" "}
          </li>
          <li>
            {t.rich("mediationClass", {
              span: (chunks) => <span>{chunks}</span>,
            })}{" "}
          </li>
          <li>
            {t.rich("firstAppointment", {
              span: (chunks) => <span>{chunks}</span>,
            })}
          </li>
        </ul>
        <h2>{t("howToBook")}</h2>
        <ul>
          {t("classDescription.subtitles")}
          <li>{t("classDescription.p1")}</li>
          <li>{t("classDescription.p2")}</li>
          <li>{t("classDescription.p3")}</li>
        </ul>
        <h2>{t("importantNotes.title")}</h2>
        <p>
          {t.rich("importantNotes.p1", {
            span: (chunks) => <span>{chunks}</span>,
          })}
        </p>
      </section>

      <ReservationFrame />
    </main>
  );
};

export default BookClass;
