import ButtonLink from "../Button/Link/Link";
import style from "./contactMe.module.scss";

const ContactMe = () => {
  return (
    <section className={style.contactMe}>
      <h3>
        Ce que je veux pour vous : vous donner les outils pour aller bien, dans
        votre corps et dans votre esprit grâce au mouvement, à la respiration et
        à la méditation.
      </h3>
      <p>
        Et si vous repreniez le contrôle de votre corps et de votre esprit ?
      </p>
      <p>
        Reprendre possession de vos pensées et de votre corps demande du
        travail, mais je vous assure que cela en vaut la peine.
      </p>
      <p>
        Avec la pratique du mouvement, de la respiration et de la méditation, et
        en comprenant les mécanismes qui influencent nos actions, vous gagnerez
        en autonomie et serez mieux préparé à gérer toutes les situations qui se
        présentent.
      </p>
      <p>
        Des questions ou besoin de plus d'informations avant de franchir le pas
        ? Je suis là pour vous accompagner ! Que ce soit pour discuter de vos
        besoins spécifiques, planifier une séance de yoga ou en savoir plus sur
        mes cours de bien-être, <strong>contactez-moi dès maintenant</strong>{" "}
        pour commencer votre transformation.
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
