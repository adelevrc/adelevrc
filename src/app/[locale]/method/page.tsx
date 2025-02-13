import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import ButtonLink from "../../components/Button/Link/Link";
import PageHeader from "../../components/PageHeader/PageHeader";
import { Props } from "../about/page";
import styles from "./method.module.scss";
import ColoredContainer from "@/app/components/ColoredContainer/ColoredContainer";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Methods.metaData" });

  return {
    title: t("title"),
    description: t("description"),
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

        <h2 className={styles.noWrap}>
          {t.rich("classPrep.title", {
            span: (chunks) => <span>{chunks}</span>,
          })}
        </h2>
        <h3>{t("classPrep.p1")}</h3>
        <ul>
          <ColoredContainer color='orange'>
            {t("classPrep.list.bulletOne")}
          </ColoredContainer>
          <ColoredContainer color='orange'>
            {t("classPrep.list.bulletTwo")}
          </ColoredContainer>
          <ColoredContainer color='orange'>
            {t("classPrep.list.bulletThree")}
          </ColoredContainer>
        </ul>
        <h3>{t("classPrep.approaches.title")} </h3>
        <ul>
          <ColoredContainer color='purple'>
            <h4>{t("classPrep.approaches.feature1.title")} </h4>
            <p>{t("classPrep.approaches.feature1.text")}</p>
          </ColoredContainer>
          <ColoredContainer color='purple'>
            <h4>{t("classPrep.approaches.feature2.title")} </h4>
            <p>{t("classPrep.approaches.feature2.text")}</p>
          </ColoredContainer>
          <ColoredContainer color='purple'>
            <h4>{t("classPrep.approaches.feature3.title")} </h4>
            <p>{t("classPrep.approaches.feature3.text")}</p>
          </ColoredContainer>
        </ul>
        <h3> {t("classPrep.nonNegotiables")} </h3>
        <ul>
          <ColoredContainer color='green'>
            <h4>{t2("features.feature1.title")}</h4>
            <p>{t2("features.feature1.text")}</p>
          </ColoredContainer>
          <ColoredContainer color='green'>
            <h4>{t2("features.feature5.title")}</h4>
            <p>{t2("features.feature5.text")}</p>
          </ColoredContainer>
          <ColoredContainer color='green'>
            <h4>{t2("features.feature6.title")}</h4>
            <p>{t2("features.feature6.text")}</p>
          </ColoredContainer>
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

        <ButtonLink title={t("button")} href={"/book-class"} />
      </section>
    </main>
  );
};

export default Method;
