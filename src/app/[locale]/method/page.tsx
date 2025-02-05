import Description from "@/app/components/Description/Description";
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
  const t2 = useTranslations("HomePage.contact");

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
          {t.rich("classPrep.title", {
            span: (chunks) => <span>{chunks}</span>,
          })}
        </h2>
        <h3>{t("classPrep.p1")}</h3>
        <ul>
          <li> {t("classPrep.list.bulletOne")}</li>
          <li> {t("classPrep.list.bulletTwo")}</li>
          <li> {t("classPrep.list.bulletThree")}</li>
        </ul>
        <h3>{t("classPrep.approaches.title")} </h3>
        <ul>
          <li>
            <p>{t("classPrep.approaches.feature1.title")} </p>
            <p>{t("classPrep.approaches.feature1.text")}</p>
          </li>
          <li>
            <p>{t("classPrep.approaches.feature2.title")} </p>
            <p>{t("classPrep.approaches.feature2.text")}</p>
          </li>
          <li>
            <p>{t("classPrep.approaches.feature3.title")} </p>
            <p>{t("classPrep.approaches.feature3.text")}</p>
          </li>
        </ul>
        <h3> {t("classPrep.nonNegotiables")} </h3>
        <ul>
          <li>
            <p>{t2("features.feature1.title")}</p>
            <p>{t2("features.feature1.text")}</p>
          </li>
          <li>
            <p>{t2("features.feature5.title")}</p>
            <p>{t2("features.feature5.text")}</p>
          </li>
          <li>
            <p>{t2("features.feature6.title")}</p>
            <p>{t2("features.feature6.text")}</p>
          </li>
        </ul>

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
        <p>{t("section3.p2")}</p>

        <ButtonLink title={t("button")} href={"/book-class"} color='red' />
      </section>
    </main>
  );
};

export default Method;
