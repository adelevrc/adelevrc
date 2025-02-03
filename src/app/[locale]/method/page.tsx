import ButtonLink from "../../components/Button/Link/Link";
import PageHeader from "../../components/PageHeader/PageHeader";
import styles from "./methode.module.scss";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Methods.metaData" });

  return {
    title: t("title"),
    message: t("description"),
  };
}

const Method = () => {
  const t = useTranslations("Methods");
  return (
    <main className={styles.main}>
      <PageHeader title={t("title")} />
      <section>
        <h2>
          {t.rich("section1.title", {
            span: (chunks) => <span>{chunks}</span>,
          })}
        </h2>
        <p>{t("section1.p1")}</p>

        <h2>
          {t.rich("section2.title", {
            span: (chunks) => <span>{chunks}</span>,
          })}
        </h2>
        <p>{t("section2.p1")}</p>
        <p>{t("section2.p2")}</p>
        <p>{t("section2.p3")}</p>
        <p>{t("section2.p4")}</p>
        <p>{t("section2.p5")}</p>

        <h2>
          {t.rich("section3.title", {
            span: (chunks) => <span>{chunks}</span>,
          })}
        </h2>
        <p>{t("section3.p1")}</p>
        <ButtonLink title={t("button")} href={"/book-class"} color='red' />
      </section>
    </main>
  );
};

export default Method;
