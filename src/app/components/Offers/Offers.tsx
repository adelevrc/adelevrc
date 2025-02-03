import { useTranslations } from "next-intl";
import ButtonLink from "../Button/Link/Link";
import Card from "../FlippedCard/FlippedCard";
import style from "./offer.module.scss";

const Offers = () => {
  const t = useTranslations("HomePage.offers");

  return (
    <section className={style.offers}>
      <Card
        subtitle={t("firstOffer.subtitle")}
        info={
          <div className={style.class}>
            <h4>{t("firstOffer.title")}</h4>
            {t.rich("firstOffer.text", {
              p: (chunks) => <p>{chunks}</p>,
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </div>
        }
        button={
          <ButtonLink
            href='/book-class'
            title={t("firstOffer.button")}
            color='red'
          />
        }
      />

      <Card
        subtitle={t("secondOffer.subtitle")}
        info={
          <div className={style.class}>
            <h4>{t("secondOffer.title")}</h4>
            {t.rich("secondOffer.text", {
              p: (chunks) => <p>{chunks}</p>,
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </div>
        }
        button={
          <ButtonLink
            href='/book-class'
            title={t("secondOffer.button")}
            color='red'
          />
        }
      />
      <Card
        online={false}
        subtitle={t("thirdOffer.subtitle")}
        info={
          <div className={style.class}>
            <h4>{t("thirdOffer.title")}</h4>
            {t.rich("thirdOffer.text", {
              p: (chunks) => <p>{chunks}</p>,
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </div>
        }
        button={
          <ButtonLink
            href='https://app.acuityscheduling.com/schedule.php?owner=33520682&owner=33520682&appointmentType=69034331'
            title={t("thirdOffer.button")}
            targetBlank={true}
            color='red'
          />
        }
      />
    </section>
  );
};

export default Offers;
