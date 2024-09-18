import ContactForm from "../components/ContactForm/ContactForm";
import styles from "./contact.module.scss";
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
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default Contact;
