import ExternalLink from "@/app/components/Button/ExternalLink/ExternalLink";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import ButtonLink from "../../components/Button/Link/Link";
import PageHeader from "../../components/PageHeader/PageHeader";
import StyledContainer from "../../components/StyledContainer/StyledContainer";
import { Props } from "../about/page";
import styles from "./classes.module.scss";

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
      <section>
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
        <article>
          <div>
            <h2>{t("workshops.title")}</h2>
            <p>
              {t.rich("workshops.p1", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
            <p>{t("workshops.p2")}</p>
            <p>{t("workshops.p3")}</p>
          </div>
          <ButtonLink title={t("workshops.button")} href={"workshop"} />
        </article>
      </section>

      <section className={styles.moreInfo}>
        <h2 className={styles.reversed}>{t("moreInfo.title")}</h2>
        <p>
          {t.rich("moreInfo.description", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>
        <div className={styles.buttonsSection}>
          <ButtonLink title={t("moreInfo.button2")} href={"contact"} />
        </div>
      </section>
    </main>
  );
};

export default Classes;
