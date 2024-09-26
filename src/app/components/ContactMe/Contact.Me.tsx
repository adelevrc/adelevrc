import ButtonLink from "../Button/Link/Link";
import style from "./contactMe.module.scss";

const ContactMe = () => {
  return (
    <section className={style.contactMe}>
      <p>
        Vous avez des questions, besoin de plus d'informations ou envie de
        réserver un cours ? Je suis là pour vous aider ! Que ce soit pour
        discuter de vos besoins spécifiques, planifier une séance ou simplement
        en savoir plus sur mes cours, n'hésitez pas à me contacter.
      </p>
      <div className={style.buttonsSection}>
        <ButtonLink
          href='https://app.acuityscheduling.com/schedule.php?owner=33520682&owner=33520682&appointmentType=69034331'
          title='Prendre rendez-vous'
          targetBlank={true}
          reversed
        />
        <ButtonLink title={"Contactez-moi"} href={"contact"} />
      </div>
    </section>
  );
};

export default ContactMe;
