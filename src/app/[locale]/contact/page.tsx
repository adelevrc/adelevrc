import { getTranslations } from "next-intl/server";
import ButtonLink from "../../components/Button/Link/Link";
import ContactForm from "../../components/ContactForm/ContactForm";
import styles from "./contact.module.scss";
import { useTranslations } from "next-intl";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Contact.metaData" });

  return {
    title: t("title"),
    message: t("description"),
  };
}

const Contact = () => {
  const t = useTranslations("Contact");
  return (
    <main className={styles.main}>
      <h1>{t("title")}</h1>
      <section>
        <div className={styles.global}>
          <div className={styles.informations}>
            <p>{t("p1")}</p>
            <p>{t("p2")}</p>
            <p>{t("p3")}</p>

            <ButtonLink
              href='https://app.acuityscheduling.com/schedule.php?owner=33520682&owner=33520682&appointmentType=69034331'
              title='Discuter en ligne'
              targetBlank={true}
              color='red'
            />
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default Contact;
