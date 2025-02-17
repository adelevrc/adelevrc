import { getTranslations } from "next-intl/server";
import ButtonLink from "../../components/Button/Link/Link";
import PageHeader from "../../components/PageHeader/PageHeader";
import StyledContainer from "../../components/StyledContainer/StyledContainer";
import styles from "./classes.module.scss";
import { useTranslations } from "next-intl";
import { Props } from "../about/page";
import { Metadata } from "next";
import ExternalLink from "@/app/components/Button/ExternalLink/ExternalLink";
import { useParams } from "next/navigation";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Classes.metaData" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

const Classes = () => {
  const t = useTranslations("Classes");
  return (
    <main className={styles.main}>
      <PageHeader title={t("title")} />
      <p> {t("info")}</p>
      <section>
        <article>
          <div>
            <h2>{t("onlineClasses.title")}</h2>
            <p>{t("onlineClasses.p1")}</p>
            <p>{t("onlineClasses.p2")}</p>
            <ul>
              {t("onlineClasses.p3")}
              <StyledContainer
                children={<>{t("onlineClasses.frenchSchedule.wednesday1")}</>}
              />
              <StyledContainer
                children={<>{t("onlineClasses.frenchSchedule.friday")}</>}
              />
              <StyledContainer
                children={<>{t("onlineClasses.frenchSchedule.sunday")}</>}
              />
            </ul>
            <ul>
              {t("onlineClasses.p4")}
              <StyledContainer
                children={<>{t("onlineClasses.englishSchedule.saturday")}</>}
              />
              <StyledContainer
                children={<>{t("onlineClasses.englishSchedule.sunday")}</>}
              />
            </ul>
          </div>

          <ExternalLink
            title={t("onlineClasses.button")}
            link={"https://bookeo.com/adelevrc"}
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

              <StyledContainer
                children={
                  <>
                    <span>{t("freeClasses.schedule.firstSaturday.time")}</span>
                    <span>
                      {t("freeClasses.schedule.firstSaturday.description")}
                    </span>
                  </>
                }
              />
            </ul>
          </div>
          <ExternalLink
            title={t("onlineClasses.button")}
            link={"https://bookeo.com/adelevrc?category=42559EAXHEC194F98ACD02"}
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

          <ButtonLink title={t("moreInfo.button2")} href={"contact"} />
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

        <ButtonLink title={t("moreInfo.button2")} href={"contact"} />
      </article>

      <section className={styles.moreInfo}>
        <h2 className={styles.reversed}>{t("moreInfo.title")}</h2>
        <p>
          {t.rich("moreInfo.description", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>
        <div className={styles.buttonsSection}>
          <ExternalLink
            title={t("onlineClasses.button")}
            link={"https://bookeo.com/adelevrc"}
          />
          <ButtonLink title={t("moreInfo.button2")} href={"contact"} />
        </div>
      </section>
    </main>
  );
};

export default Classes;
