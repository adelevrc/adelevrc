import { getTranslations } from "next-intl/server";
import styles from "./generalConditions.module.scss";
import { useTranslations } from "next-intl";
import { Props } from "../about/page";
import { Metadata } from "next";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "GeneralTermsAndCondition",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

const GeneralConditions = () => {
  const t = useTranslations("GeneralTermsAndCondition");
  return (
    <section className={styles.section}>
      <h1>{t("content.h1")}</h1>
      <h2>{t("content.prelude.title")}</h2>
      <p>
        {t.rich("content.prelude.p1", {
          strong: (chunks) => <strong>{chunks}</strong>,
        })}
      </p>
      <p>
        {t.rich("content.prelude.p2", {
          strong: (chunks) => <strong>{chunks}</strong>,
        })}
      </p>
      <p>{t("content.prelude.p3")}</p>

      <h2>{t("content.articleOne.title")}</h2>
      <p>{t("content.articleOne.p1")}</p>
      <p>{t("content.articleOne.p2")}</p>
      <ul>
        <li>{t("content.articleOne.p3")}</li>
        <li>{t("content.articleOne.p4")}</li>
      </ul>
      <p>{t("content.articleOne.p5")}</p>

      <h2>{t("content.articleTwo.title")}</h2>
      <p>
        {t.rich("content.articleTwo.p1", {
          strong: (chunks) => <strong>{chunks}</strong>,
        })}
      </p>

      <h2>{t("content.articleThree.title")}</h2>
      <p>{t("content.articleThree.p1")}</p>
      <ul>
        <li>{t("content.articleThree.p2")}</li>
        <li>{t("content.articleThree.p3")}</li>
        <li>{t("content.articleThree.p4")}</li>
      </ul>
      <p>{t("content.articleThree.p5")}</p>

      <h2>{t("content.articleFour.title")}</h2>
      <p>
        {t.rich("content.articleFour.p1", {
          strong: (chunks) => <strong>{chunks}</strong>,
        })}
      </p>
      <p>{t("content.articleFour.p2")}</p>
      <p>{t("content.articleFour.p3")}</p>

      <h3>{t("content.articleFour.sectionOne.title")}</h3>
      <p>{t("content.articleFour.sectionOne.p1")}</p>
      <p>{t("content.articleFour.sectionOne.p2")}</p>
      <ul>
        <li>{t("content.articleFour.sectionOne.p3")}</li>
      </ul>
      <p>{t("content.articleFour.sectionOne.p4")}</p>

      <h3>{t("content.articleFour.sectionTwo.title")}</h3>
      <p>{t("content.articleFour.sectionTwo.p1")}</p>

      <h2>{t("content.articleFive.title")}</h2>
      <p>{t("content.articleFive.p1")}</p>

      <h2>{t("content.articleSix.title")}</h2>
      <p>{t("content.articleSix.p1")}</p>
      <p>{t("content.articleSix.p2")}</p>

      <h2>{t("content.articleSeven.title")}</h2>
      <p>{t("content.articleSeven.p1")}</p>

      <h2>{t("content.articleEight.title")}</h2>
      <p>{t("content.articleEight.p1")}</p>

      <h2>{t("content.articleNine.title")}</h2>
      <p>{t("content.articleNine.p1")}</p>

      <h2>{t("content.articleTen.title")}</h2>
      <p>{t("content.articleTen.p1")}</p>

      <h2>{t("content.articleEleven.title")}</h2>
      <p>{t("content.articleEleven.p1")}</p>
    </section>
  );
};

export default GeneralConditions;
