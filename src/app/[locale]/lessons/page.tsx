import { getTranslations } from "next-intl/server";
import ButtonLink from "../../components/Button/Link/Link";
import PageHeader from "../../components/PageHeader/PageHeader";
import StyledContainer from "../../components/StyledContainer/StyledContainer";
import styles from "./lessons.module.scss";
import { useTranslations } from "next-intl";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Lessons.metaData" });

  return {
    title: t("title"),
    message: t("description"),
  };
}

const Lessons = () => {
  const t = useTranslations("Lessons");
  return (
    <main className={styles.main}>
      <PageHeader title={t("title")} />
      <section>
        <article>
          <div>
            <h2>{t("onlineClasses.title")}</h2>
            <p>{t("onlineClasses.p1")}</p>
            <p>{t("onlineClasses.p2")}</p>
            <p>{t("onlineClasses.p3")}</p>
            <ul>
              <StyledContainer
                children={<li>{t("onlineClasses.schedule.wednesday")}</li>}
              />
              <StyledContainer
                children={<li>{t("onlineClasses.schedule.friday")}</li>}
              />
              <StyledContainer
                children={<li>{t("onlineClasses.schedule.sunday")}</li>}
              />
            </ul>
          </div>

          <ButtonLink
            href='/book-class'
            title={t("onlineClasses.button")}
            color='red'
          />
        </article>

        <article>
          <div>
            <h2>{t("freeClasses.title")}</h2>
            <p>
              {t.rich("freeClasses.p1", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
            <ul>
              <li>
                <StyledContainer
                  children={
                    <>
                      <span>{t("freeClasses.schedule.thursday.time")}</span>
                      <span>
                        {t.rich("freeClasses.schedule.thursday.description", {
                          a: (chunks) => (
                            <a
                              className={styles.underline}
                              target='_blank'
                              rel='noopener noreferrer'
                              href='https://www.youtube.com/@adelevrc'
                            >
                              {chunks}
                            </a>
                          ),
                        })}
                      </span>
                    </>
                  }
                />
              </li>
              <li className={styles.timeline}>
                <StyledContainer
                  children={
                    <>
                      <span>
                        {t("freeClasses.schedule.firstSaturday.time")}
                      </span>
                      <span>
                        {t("freeClasses.schedule.firstSaturday.description")}
                      </span>
                    </>
                  }
                />
              </li>
            </ul>
          </div>

          <ButtonLink
            href='/book-class'
            title={t("freeClasses.button")}
            color='red'
          />
        </article>
        <article>
          <div>
            <h2>{t("individualClasses.title")}</h2>
            <p>
              {t.rich("individualClasses.p1", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
            <p>{t("individualClasses.p2")}</p>
            <p>{t("individualClasses.p3")}</p>
          </div>

          <ButtonLink
            title={t("freeClasses.rdv")}
            href='https://app.acuityscheduling.com/schedule.php?owner=33520682&owner=33520682&appointmentType=69034331'
            color='red'
          />
        </article>
        <article>
          <div>
            <h2>{t("meditationClasses.title")}</h2>
            <StyledContainer
              children={<p>{t("meditationClasses.schedule")}</p>}
            />
            <p>{t("meditationClasses.description")}</p>
          </div>
          <ButtonLink
            href='/reserver-cours'
            title={t("meditationClasses.button")}
            color='red'
          />
        </article>
      </section>

      <article className={styles.others}>
        <h2>{t("otherOffers.title")}</h2>
        <p>
          {t.rich("otherOffers.description1", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>
        <p>
          {t.rich("otherOffers.description2", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}{" "}
        </p>
        <ButtonLink
          title={t("otherOffers.button")}
          href={"contact"}
          color='red'
        />
      </article>

      <section className={styles.moreInfo}>
        <h2 className={styles.reversed}>{t("moreInfo.title")}</h2>
        <p>
          {t.rich("moreInfo.description", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>
        <div className={styles.buttonsSection}>
          <ButtonLink
            href='https://app.acuityscheduling.com/schedule.php?owner=33520682&owner=33520682&appointmentType=69034331'
            title={t("moreInfo.button1")}
            targetBlank={true}
            color='red'
          />
          <ButtonLink
            title={t("moreInfo.button2")}
            href={"contact"}
            color='red'
          />
        </div>
      </section>
    </main>
  );
};

export default Lessons;
