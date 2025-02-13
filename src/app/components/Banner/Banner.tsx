import ButtonLink from "../Button/Link/Link";
import PageHeader from "../PageHeader/PageHeader";
import styles from "./banner.module.scss";
import { useTranslations } from "next-intl";

const Banner = () => {
  const t = useTranslations("HomePage");
  const title = t.rich("title", {
    span: (chunks) => <span>{chunks}</span>,
  });
  return (
    <section className={styles.banner}>
      <PageHeader title={title} />
      <ul>
        <li className={styles.dynamic}>
          <span className={styles.empahsis}>{t("dynamic.title")}</span>{" "}
          <span>{t("dynamic.text")}</span>
        </li>
        <li className={styles.cuttingEdge}>
          <span className={styles.empahsis}>{t("cuttingEdge.title")}</span>{" "}
          <span>{t("cuttingEdge.text")}</span>
        </li>
        <li className={styles.fun}>
          <span className={styles.empahsis}> {t("fun.title")} </span>{" "}
          <span>{t("fun.text")}</span>
        </li>
      </ul>
      <ButtonLink href={"book-class"} title={t("button.bookClass")} />
    </section>
  );
};

export default Banner;
