import ButtonLink from "../Button/Link/Link";
import style from "./contactMe.module.scss";

const ContactMe = () => {
  return (
    <section className={style.contactMe}>
      <div className={style.introduction}>
        <h2>Ce que vous avez à chaque cours</h2>
        <p>
          {" "}
          Chaque cours est préparé de façon unique pour vous aider à aller plus
          loin dans votre pratique
        </p>
      </div>
      <div className={style.features}>
        <div className={style.feature}>
          <h3>
            <span>Séquences </span> originales
          </h3>
          <p>
            Aucune séquence ne se ressemble, permettant ainsi de découvrir de
            nouveaux mouvements et d'éviter de tomber dans la routine.
          </p>
        </div>
        <div className={style.feature}>
          <h3>
            <span> Exercices </span> neurologiques
          </h3>
          <p>
            Pour aller plus loin, avec plus de force et plus rapidement, dans
            les postures de yoga ou de fitness.
          </p>
        </div>
        <div className={style.feature}>
          <h3>
            <span>Flow </span> pointus
          </h3>
          <p>
            Élaborés avec un objectif précis, qu'il soit anatomique ou lié aux
            mouvements, grâce à la biomécanique, l'anatomie et la neuroscience.
          </p>
        </div>
        <div className={style.feature}>
          <h3>
            <span> Yoga </span> dynamique
          </h3>
          <p>
            Des flows dynamiques, loin d’être statiques. Ils vous permettront de
            ressentir chaque muscle de votre corps tout en bougeant sur votre
            tapis.
          </p>
        </div>
        <div className={style.feature}>
          <h3>
            <span>Mélange </span> de tradition et de modernité
          </h3>
          <p>
            Le yoga est une pratique ancienne, mais ce n'est pas une raison pour
            y rester figé. Dans mes cours, nous repoussons les limites et
            faisons fi des règles.
          </p>
        </div>
        <div className={style.feature}>
          <h3>
            <span>Accessible </span> pour tous les niveaux
          </h3>
          <p>
            {" "}
            Tout le monde est le bienvenu sur le tapis, et je tiens à cœur de
            proposer différentes options adaptées aux niveaux et aux envies de
            chaque participant.{" "}
          </p>
        </div>
      </div>

      <div className={style.buttonsSection}>
        <ButtonLink title={"Contactez-moi"} href={"contact"} color='red' />
      </div>
    </section>
  );
};

export default ContactMe;
