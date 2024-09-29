import BorderedText from "../BorderedText/BorderedText";
import ButtonLink from "../Button/Link/Link";
import style from "./description.module.scss";

const Description = () => {
  return (
    <section className={style.description}>
      <h2>
        {" "}
        Des cours de yoga construits pour gagner en{" "}
        <BorderedText text='force' /> et en <BorderedText text='mobilité' />{" "}
      </h2>{" "}
      <h3>
        {" "}
        Créer des mouvements nouveaux et originaux pour être libre dans{" "}
        <span>tous</span> ses mouvements.{" "}
      </h3>{" "}
      <p>
        {" "}
        Le principal objectif de mes cours est de vous apporter une aisance dans
        vos mouvements, des plus simples aux plus compliqués.{" "}
      </p>{" "}
      <h4 className={style.italic}>Pourquoi cet objectif ?</h4>
      <ul>
        <li>
          <p>
            Pour votre <strong>cerveau</strong> : quand nous avons un large
            catalogue de mouvements, notre cerveau sera capable de gérer toutes
            les informations et de rester dans un état de calme et de contrôle.
          </p>
        </li>
        <li>
          <p>
            Pour votre <strong>corps</strong> : la vie sédentaire ne nous fait
            pas de bien. Adopter des mouvements fonctionnels et originaux permet
            de gagner de la force dans certaines parties du corps qui peuvent
            être inexploitées, ce qui augmente le risque de blessure, de chute
            et potentiellement un vieillissement prématuré.
          </p>
        </li>
      </ul>
      <h4>Comment ?</h4>
      <p>
        Les cours sont un mélange de <strong>science du mouvement</strong> et de{" "}
        <strong>principes anatomiques</strong>, en incluant la{" "}
        <strong>neuroscience</strong>. Ils vous permettront d'explorer
        différents rythmes, différentes façons d'aller plus loin dans les
        postures, tout en brisant quelques "règles" du yoga.{" "}
      </p>{" "}
      <p>
        <strong>Comprendre votre corps </strong> et gagner en{" "}
        <strong>autonomie</strong> sont deux piliers de votre liberté.
      </p>
      <ButtonLink href='ma-methode' title='Ma méthode' />
    </section>
  );
};

export default Description;
