import ButtonLink from "../components/Button/Link/Link";
import ContactForm from "../components/ContactForm/ContactForm";
import styles from "./contact.module.scss";

export const metadata = {
  title: "Contactez Adèle Vercaygne - Cours de Yoga et Méditation",
  description:
    "Contactez-moi pour toute question sur les cours de yoga, respiration et méditation, en ligne ou en studio. Je suis disponible pour vous fournir plus d'informations.",
};

const Contact = () => {
  return (
    <main className={styles.main}>
      <h1>Formulaire de contact</h1>
      <section>
        <h2>Contactez-moi</h2>
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
              pour un cours particulier, vous avez deux possibilités :
            </p>
            <p>
              Prenez un rendez-vous de 15 minutes pour discuter en ligne ou
              écrivez-moi un message via le formulaire ci-dessous.
            </p>

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
