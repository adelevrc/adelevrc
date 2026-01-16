import PageHeader from "@/app/components/PageHeader/PageHeader";
import { Metadata } from "next";
import ContactForm from "../components/ContactForm/ContactForm";
import { Props } from "../about/page";
import styles from "./contact.module.scss";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: "Contactez Adèle Vercaygne - Cours de Yoga et Méditation",
    description:
      "Contactez-moi pour toute question sur les cours de yoga, respiration et méditation, en ligne ou en studio. Je suis disponible pour vous fournir plus d'informations.",
  };
}

const Contact = () => {
  return (
    <main className={styles.main}>
      <PageHeader title='Contactez-moi' />
      <section>
        <div className={styles.global}>
          <div className={styles.informations}>
            <p>
              Vous souhaitez en savoir plus sur mes cours de yoga ou de
              méditation ? Vous préférez discuter avant de réserver ? Je suis
              ici pour répondre à toutes vos questions.
            </p>
            <p>
              Si vous êtes une entreprise et que vous souhaitez proposer des
              cours de yoga pour vos salariés, ou si vous voulez prendre contact
              pour un cours particulier,vous pouvez m'envoyer un message via le
              formulaire ci-dessous.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default Contact;
