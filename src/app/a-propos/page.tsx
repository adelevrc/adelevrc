import ButtonLink from "../components/Button/Link/Link";
import styles from "./about.module.scss";
import Image from "next/image";
import image from "../images/warrior3.webp";
const AboutMe = () => (
  <main className={styles.main}>
    <div className={styles.title}>
      <h1>À propos</h1>
      <Image
        className={styles.picture}
        src={image}
        width={550}
        height={500}
        alt='Picture of the author'
      />
    </div>

    <div className={styles.history}>
      <section>
        <h2>Mon histoire</h2>
        <p>
          J'ai commencé le yoga en 2014, à une période où j'étais dans un état
          mental très difficile.
        </p>
        <p>
          Je ne dormais pas la nuit et faisais des crises d'angoisse à
          répétition. J'étais un fantôme qui essayait désespérément de survivre.
        </p>
        <p>
          J'étais désespérée, je ne comprenais pas pourquoi j'étais dans cet
          état et je ne savais pas comment m'en débarrasser.
        </p>
        <p>
          Une nuit, désespérée, j'ai pris mon téléphone et j'ai essayé un cours
          de yoga, en pyjama et dans le noir de ma chambre.
        </p>
        <p>
          15 minutes de yoga ont suffi pour que je m'endorme. C'est là que mon
          histoire d'amour avec le yoga a commencé. Comme toutes les histoires
          d'amour, il faut apprendre à se connaître, se découvrir et accepter de
          se mettre dans une position de vulnérabilité.
        </p>
        <p>
          Mes débuts en yoga étaient donc de 15 minutes, sur YouTube ou des
          applications, le soir avant de m'endormir. Puis 30 minutes, puis une
          heure, le matin, après le travail, avant ou après les repas. Je ne
          savais pas pourquoi ni comment, mais ça me faisait du bien.
        </p>
        {/*    <p>
          Cependant, j'étais bien pendant ma séance et quelques heures après,
          puis les effets disparaissaient et les angoisses revenaient. J'ai donc
          commencé à chercher : pourquoi le yoga fait-il du bien, et que puis-je
          mettre en place facilement pour être bien tout le temps, sans devoir
          sauter sur mon tapis dès que ça n'allait pas ?
        </p>
        <p>
          J'ai découvert la méditation et ses bienfaits réels, différentes
          techniques de respiration pour activer diverses émotions, et aussi
          comment être conscient des signaux du corps pour les gérer.
        </p>
        <p>
          Peu à peu, c'est l'aspect plus scientifique qui m'a intéressée :
          l'anatomie du corps humain, la science autour de la méditation et de
          la respiration, mais aussi comment la neuroscience peut aider à
          comprendre que les difficultés mentales (stress, anxiété, angoisse,
          dyslexie, etc.) peuvent avoir des répercussions sur nos mouvements,
          notre force et notre souplesse.
        </p>
        <p>
          À force de recueillir des informations partout, j'avais une idée en
          tête : partager mes découvertes avec d'autres personnes. C'est ainsi
          que l'idée de devenir professeur de yoga est née.
        </p>
        <p>
          En 2024, j'ai obtenu mon diplôme de professeur de yoga 200 heures avec
          Alba Yoga Academy, dirigée par deux personnes incroyablement
          qualifiées et humaines : Celest Pereira et Hannah Barrett.
        </p> */}
        <ButtonLink title={"Découvrir ma méthode"} href={"/ma-methode"} />
      </section>

      <Image
        className={styles.picture}
        src={image}
        width={550}
        height={500}
        alt='Picture of the author'
      />
    </div>
  </main>
);

export default AboutMe;
