import Image from "next/image";
import laughImage from "../../images/smile.png";
import styles from "./about.module.scss";
import ButtonLink from "@/app/components/Button/Link/Link";
import PageHeader from "@/app/components/PageHeader/PageHeader";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "AboutMe.metaData" });

  return {
    title: t("title"),
    message: t("description"),
  };
}

const AboutMe = () => {
  const t = useTranslations("AboutMe");
  return (
    <main className={styles.main}>
      <PageHeader title={t("title")} />
      <div className={styles.history}>
        <section>
          <h2>{t("title")}</h2>
          <p>{t("p1")}</p>
          <p>{t("p2")}</p>
          <p>{t("p3")}</p>
          <ButtonLink title={t("button1")} href={"method"} color='red' />
        </section>

        <div className={styles.imageInSection}>
          <Image
            className={styles.picture}
            src={laughImage}
            width={550}
            height={700}
            alt={t("imageAlt")}
          />
        </div>
      </div>
      <div className={styles.secondSection}>
        <section>
          <h2>{t("section2.title1")}</h2>
          <p>{t("section2.p1")}</p>
          <h2>{t("section2.title2")}</h2>
          <p>{t("section2.p2")}</p>
          <p>{t("section2.p3")}</p>
          <ButtonLink
            title={t("section2.button2")}
            href={"lessons"}
            color='red'
          />
        </section>
      </div>
    </main>
  );
};

export default AboutMe;
