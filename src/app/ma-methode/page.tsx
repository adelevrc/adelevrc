import BorderedText from "../components/BorderedText/BorderedText";
import ButtonLink from "../components/Button/Link/Link";
import PageHeader from "../components/PageHeader/PageHeader";
import image from "../images/sky.webp";
import styles from "./methode.module.scss";

export const metadata = {
  title: "Ma méthode - Adèle Vercaygne",
  description:
    "Découvrez ma méthode unique de yoga pour développer votre force, améliorer votre souplesse et maîtriser vos postures, tout en cultivant un mental calme et fort",
};

const Method = () => (
  <main className={styles.main}>
    <PageHeader
      title='Ma méthode'
      alt={
        "Ciel bleu avec un nuage blanc, symbolisant la paix intérieure après une séance de yoga et de méditation."
      }
      image={image}
    />
    <section>
      <h2>
        Travailler de manière{" "}
        <BorderedText text='consciente' isReversed={true} /> pour améliorer la
        force, la mobilité et le calme mental.
      </h2>
      <p>
        Le yoga que je propose est un yoga dynamique, qui combine force,
        mobilité et maîtrise du mental pour rester serein·e dans toutes les
        situations.
      </p>

      <h2>
        Comment se déroule une <span>séance de yoga</span> ?
      </h2>
      <p>
        Chaque séance est construite autour d'un objectif précis, qu'il s'agisse
        d'une posture d'équilibre ou de base. Nous travaillons l'ensemble des
        muscles nécessaires pour atteindre cet objectif : renforcement et
        souplesse sont les maîtres mots.
      </p>
      <p>
        Nous utiliserons des postures traditionnelles, ainsi que des variations
        créatives, pour maximiser la force et la mobilité, tout en ajoutant des
        exercices moins classiques pour enrichir la pratique.
      </p>
      <p>
        L'objectif est d'élargir votre gamme de mouvements, afin d'améliorer
        votre quotidien et de renforcer la connexion corps-esprit, créant ainsi
        une carte cérébrale plus étendue qui contribue à votre bien-être global.
      </p>
      <p>
        À ces mouvements, nous ajouterons des pratiques de respiration, de
        méditation (statique ou en mouvement), ainsi que des exercices
        neurologiques pour optimiser à la fois votre force et votre souplesse,
        et ainsi améliorer votre mobilité.
      </p>
      <p>
        Les exercices neurologiques incluent des techniques de respiration
        spécifiques, des exercices d'équilibre pour renforcer l'oreille interne
        et des exercices de vision pour travailler les connexions sensorielles.
      </p>

      <h2>
        Quel est l'<span>objectif</span> de ces séances ?
      </h2>
      <p>
        L'objectif est que chacun·e puisse identifier les exercices bénéfiques à
        son bien-être et les intégrer dans son quotidien. Dans un monde de plus
        en plus sédentaire et stressant, il est essentiel de bouger son corps et
        d'entraîner son esprit afin d'atteindre un état de forme optimal et de
        sérénité.
      </p>
      <ButtonLink
        title={"Réserver un cours de yoga"}
        href={"/reserver-cours"}
      />
    </section>
  </main>
);

export default Method;
