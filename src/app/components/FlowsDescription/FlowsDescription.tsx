import { useTranslations } from "next-intl";
import ButtonLink from "../Button/Link/Link";
import style from "./flowsDescription.module.scss";

const FlowsDescription = () => {
  const t = useTranslations("HomePage.contact");
  return (
    <section className={style.contactMe}>
      <div className={style.introduction}>
        <h2>{t("h2")}</h2>
        <p>{t("p1")}</p>
      </div>
      <div className={style.features}>
        <div className={style.feature}>
          <h3>
            <span>{t("features.feature1.title")}</span>
          </h3>
          <p>{t("features.feature1.text")}</p>
        </div>
        <div className={style.feature}>
          <h3>
            <span>{t("features.feature2.title")}</span>
          </h3>
          <p>{t("features.feature2.text")}</p>
        </div>
        <div className={style.feature}>
          <h3>
            <span>{t("features.feature3.title")}</span>
          </h3>
          <p>{t("features.feature3.text")}</p>
        </div>
        <div className={style.feature}>
          <h3>
            <span>{t("features.feature4.title")}</span>
          </h3>
          <p>{t("features.feature4.text")}</p>
        </div>
        <div className={style.feature}>
          <h3>
            <span>{t("features.feature5.title")}</span>
          </h3>
          <p>{t("features.feature5.text")}</p>
        </div>
        <div className={style.feature}>
          <h3>
            <span>{t("features.feature6.title")}</span>
          </h3>
          <p>{t("features.feature6.text")}</p>
        </div>
      </div>

      <div className={style.buttonsSection}>
        <ButtonLink title={t("button")} href={"contact"} color='red' />
      </div>
    </section>
  );
};

export default FlowsDescription;
