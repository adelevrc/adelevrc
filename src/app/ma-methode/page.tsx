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
        "L'image représente le ciel. C'est un ciel bleu foncé avec un nuage très blanc et voluptueux juste un mileu de la photo. La photo a été prise vue du ciel."
      }
      image={image}
    />
    <section>
      <h2>
        Travailler de manière <span>consciente</span> dans un but précis.
      </h2>
      <p>
        Le yoga que je propose est un yoga dynamique, qui permet de faire
        travailler la force et la mobilité, tout en renforçant son mental pour
        être calme dans toutes les situations.
      </p>

      <h2>
        Comment une séance est-elle <span> construite</span> ?
      </h2>
      <p>
        Une séance est construite à partir d'un objectif de posture (qu'elle
        soit une posture d'équilibre ou une posture de base).
      </p>
      <p>
        Pour arriver à cette posture, nous travaillerons tous les muscles
        nécessaires : certains muscles doivent gagner en force, d'autres en
        souplesse. Pour chaque muscle, nous travaillerons ces deux aspects à
        chaque fois, en faisant des postures traditionnelles ainsi que des
        variations et des transitions beaucoup moins classiques.
      </p>
      <p>
        L'objectif est de vous permettre d'avoir la plus grande gamme de
        mouvements possible, pour pouvoir faire le plus de choses dans votre
        vie, mais aussi pour permettre à votre cerveau d'avoir une carte immense
        de votre corps et des mouvements qu'il est capable de faire. Cela le
        rendra très heureux, et vous aussi.
      </p>
      <p>
        À ces mouvements, nous allons ajouter d'autres éléments : la
        respiration, la méditation statique ou en mouvement, ainsi que des
        exercices neurologiques pour vous aider à aller plus loin dans votre
        force et votre souplesse, et donc gagner en mobilité.
      </p>
      <p>
        Dans ces exercices neurologiques, vous trouverez des exercices de
        respiration très spécifiques, mais aussi des exercices d'équilibre pour
        travailler l'oreille interne ou encore des exercices de vision.
      </p>
      <h2>
        L'<span>objectif</span> dans tout ça ?{" "}
      </h2>
      <p>
        L'objectif de ces séances est que vous compreniez les exercices qui vous
        font du bien et sur lesquels vous devez travailler pour les intégrer
        dans votre vie quotidienne, et ainsi avoir enfin le pouvoir de la
        contrôler. Dans un monde de sédentarité et toujours plus stressant, il
        est plus qu'important de bouger son corps et travailler son esprit, pour
        être dans la meilleure forme possible et dans le plus grand des calmes.
      </p>
      <ButtonLink title={"Réserver un cours"} href={"/reserver-cours"} />
    </section>
  </main>
);

export default Method;
