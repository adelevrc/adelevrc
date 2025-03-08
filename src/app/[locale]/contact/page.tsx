import { getTranslations } from "next-intl/server";
import ButtonLink from "../../components/Button/Link/Link";
import ContactForm from "../../components/ContactForm/ContactForm";
import styles from "./contact.module.scss";
import { useTranslations } from "next-intl";
import { Props } from "../about/page";
import { Metadata } from "next";
import PageHeader from "@/app/components/PageHeader/PageHeader";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Contact.metaData" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

const Contact = () => {
  const t = useTranslations("Contact");
  return (
    <main className={styles.main}>
      <PageHeader title={t("title")} />
      <section>
        <div className={styles.global}>
          <div className={styles.informations}>
            <p>{t("p1")}</p>
            <p>{t("p2")}</p>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default Contact;
