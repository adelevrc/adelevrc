import { Metadata } from "next";
import ButtonLink from "../components/Button/Link/Link";
import PageHeader from "../components/PageHeader/PageHeader";
import { Props } from "../about/page";
import styles from "./method.module.scss";
import ColoredContainer from "@/app/components/ColoredContainer/ColoredContainer";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: "Ma méthode - Adèle Vercaygne",
    description:
      "Découvrez ma méthode  pour un yoga dynamique, original et de pointe ! ",
  };
}

const Method = () => {
  return (
    <main className={styles.main}>
      <PageHeader title='Ma méthode' />
      <section>
        <h2>
          Bouger de manière <span>consciente</span> pour améliorer{" "}
          <span>force</span> <span>mobilité</span> <span>endurance</span> et{" "}
          <span>contrôle</span>.
        </h2>
        <p>
          Chaque cours est préparé de façon unique et méticuleuse pour vous
          aider à aller plus loin dans votre pratique.
        </p>

        <h2 className={styles.noWrap}>Comment est préparé un cours ?</h2>
        <h3>La préparation des cours répond à un objectif physique précis :</h3>
        <ul>
          <ColoredContainer color='orange'>
            Vous permettre d'accéder à une posture spécifique (des plus simples
            aux plus complexes).
          </ColoredContainer>
          <ColoredContainer color='orange'>
            Vous faire mobiliser une partie du corps spécifique (réhabilitation,
            travail de force, mobilité, endurance, équilibre).
          </ColoredContainer>
          <ColoredContainer color='orange'>
            Vous aider à performer dans les sports que vous pratiquez en vous
            proposant des séquences sur mesure.
          </ColoredContainer>
        </ul>
        <h3>Différentes approches scientifiques pour un meilleur résultat :</h3>
        <ul>
          <ColoredContainer color='purple'>
            <h4>Neurosciences</h4>
            <p>
              Utiliser le cerveau pour gagner en force, souplesse, équilibre et
              coordination.
            </p>
          </ColoredContainer>
          <ColoredContainer color='purple'>
            <h4>Biomécanique</h4>
            <p>
              Comprendre les mouvements et leur mécanique pour mieux appréhender
              son corps et optimiser ses performances.
            </p>
          </ColoredContainer>
          <ColoredContainer color='purple'>
            <h4>Anatomie</h4>
            <p>
              Comprendre le corps pour mieux l'utiliser et appréhender les
              mouvements.
            </p>
          </ColoredContainer>
        </ul>
        <h3>Les non-négociables dans un cours :</h3>
        <ul>
          <ColoredContainer color='green'>
            <h4>Séquences originales</h4>
            <p>
              Des séquences uniques et des transitions étonnantes que vous
              n'avez jamais vues nulle part, pour faire travailler vos muscles
              dans toutes les positions possibles.
            </p>
          </ColoredContainer>
          <ColoredContainer color='green'>
            <h4>Joie et bonne humeur</h4>
            <p>
              Pourquoi ne serait-il pas possible de trouver la paix et le calme
              dans la joie ? Pourquoi la pratique physique du yoga doit-elle
              être prise autant au sérieux ? Personne ne sait ! Et c'est
              pourquoi, dans mes flows, je mets tout en œuvre pour vous faire
              bouger dans la bonne humeur.
            </p>
          </ColoredContainer>
          <ColoredContainer color='green'>
            <h4>Accessible pour tous les niveaux</h4>
            <p>
              À condition d'être prêt•e à se challenger et à explorer des
              nouvelles formes de mouvements ! Si vous voulez de la tradition et
              de l'immobilité, vous pouvez passer votre chemin. Si vous voulez
              transpirer, vous challenger et vous amuser, vous êtes au bon
              endroit !
            </p>
          </ColoredContainer>
        </ul>

        <h2>
          Comment se déroule une <span>séance de yoga</span> ?
        </h2>
        <p>
          Une séance de yoga dure entre une heure et une heure et demie
          (uniquement pour les cours particuliers).
        </p>
        <p>
          Le flow est expliqué en début de séance avec les objectifs spécifiques
          du cours. Toutes les séances commencent et se terminent par un temps
          de respiration.
        </p>
        <p>
          Le flow est une séquence de postures avec des transitions originales,
          répétée plusieurs fois à différentes intensités et avec diverses
          intentions.
        </p>
        <p>
          Des exercices neurologiques sont intégrés au flow, accompagnés de
          tests et de retests pour évaluer leur efficacité selon l'objectif
          visé.
        </p>
        <p>
          Les exercices neurologiques incluent des techniques de respiration
          spécifiques, des exercices d'équilibre pour renforcer l'oreille
          interne et des exercices visuels pour améliorer les connexions
          sensorielles.
        </p>

        <h2>
          Est-ce que cette <span>méthode</span> peut vous convenir ?
        </h2>
        <p>
          Dans mes cours, on ne se prend pas au sérieux : on bouge, on explore
          des mouvements que peu d'enseignants de yoga proposent. La pratique
          physique du yoga est bien plus moderne qu'on ne le pense (elle date
          des années 40), et pour moi, il est essentiel qu'elle évolue en
          fonction des avancées scientifiques et de nos envies. Je n'ai jamais
          trouvé mon calme dans des postures statiques tenues plusieurs minutes,
          mais plutôt dans des flows fluides et dynamiques. Je suis convaincue
          que la paix se trouve dans le rire et la joie, dans l'échec et la
          découverte. Respecter le yoga, c'est comprendre sa philosophie, la
          partager et la discuter. Rire ou expérimenter des mouvements originaux
          n'est pas un manque de respect, mais une célébration de cette
          pratique.
        </p>
        <p>
          Si vous êtes prêt·e à vous challenger, à transpirer, à explorer de
          nouvelles formes et à comprendre comment fonctionnent votre corps et
          votre cerveau pour vous surpasser dans tous les domaines de votre vie,
          alors mes cours sont faits pour vous.
        </p>

        <ButtonLink title='Réserver un cours' href={"/book-class"} />
      </section>
    </main>
  );
};

export default Method;
