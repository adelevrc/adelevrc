import ButtonLink from "../components/Button/Link/Link";
import ContactForm from "../components/ContactForm/ContactForm";
import styles from "./contact.module.scss";

export const metadata = {
  title: "Page de contact - Adèle Vercaygne",
  description:
    "Contactez-moi pour toute question sur les cours de yoga, respiration et méditation, en ligne ou en studio. Je suis disponible pour vous fournir plus d'informations.",
};

const Contact = () => {
  return (
    <main className={styles.main}>
      <h1> Fomulaire de contact </h1>
      <section>
        <div>
          <p>
            Vous êtes intéressés par une formule mais vous préférez faire
            connaissance avant ?
          </p>
          <p> Vous avez besoin de plus de renseignements ?</p>
          <p>
            Vous êtes une entreprise et vous souhaitez proposer des cours de
            yoga pour vos salariés ?
          </p>
          <p> Vous voulez prendre contact pour un cours particulier ? </p>
          <p>
            Vous avez deux possibilités : prendre un rendez-vous de 15 minutes
            pour discuter en ligne ou m'écrire un message via le formulaire de
            contact.
          </p>
          <ButtonLink
            href='https://app.acuityscheduling.com/schedule.php?owner=33520682&owner=33520682&appointmentType=69034331'
            title='Discuter en ligne'
            targetBlank={true}
          />
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default Contact;
