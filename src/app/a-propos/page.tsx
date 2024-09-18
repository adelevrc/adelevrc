import Image from "next/image";
import ButtonLink from "../components/Button/Link/Link";
import laughImage from "../images/laughoutsideVertical.webp";
import image from "../images/water.webp";
import styles from "./about.module.scss";

const AboutMe = () => (
  <main className={styles.main}>
    <div className={styles.titleContainer}>
      <h1>À propos</h1>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt="L'image montre trois personnes nageant ou se baignant dans une grande étendue d'eau calme, probablement un lac ou une mer. La scène est capturée en vue aérienne, ce qui montre l'eau s'étendant autour des nageurs, avec de légers reflets du soleil sur la surface de l'eau, créant des éclats lumineux argentés. Les nageurs sont dispersés, avec de légères ondulations circulaires visibles autour d'eux, indiquant leurs mouvements. L'atmosphère de l'image est paisible, avec une lumière douce éclairant la surface de l'eau."
          layout='fill'
          objectFit='cover'
          loading='eager'
          priority
        />
      </div>
    </div>

    <div className={styles.history}>
      <section>
        <h2>Mon histoire</h2>
        <p>
          J'ai commencé le yoga en 2014, à une période où j'étais dans un état
          mental difficile. Je ne dormais pas et faisais des crises d'angoisse à
          répétition.
        </p>
        <p>
          Une nuit, j'ai essayé un cours de yoga, en pyjama, dans le noir de ma
          chambre. Après 15 minutes, je me suis endormie. C'est là que mon
          histoire avec le yoga a commencé.
        </p>
        <p>
          J'ai ensuite découvert la méditation et des techniques de respiration
          pour mieux gérer mes émotions.
        </p>
        <p>
          Avec le temps, l'anatomie, la science de la méditation et la
          neuroscience m'ont intéressée. J'ai voulu partager ces découvertes, et
          c'est ainsi que j'ai décidé de devenir professeur de yoga.
        </p>
        <p>
          En 2024, j'ai obtenu mon diplôme de professeur de yoga avec Alba Yoga
          Academy.
        </p>
        <ButtonLink title={"Découvrir ma méthode"} href={"/ma-methode"} />
      </section>

      <div className={styles.imageInSection}>
        <Image
          className={styles.picture}
          src={laughImage}
          width={550}
          height={700}
          alt="L'image montre une personne assise en tailleur sur un tapis de yoga vert, dans un jardin extérieur verdoyant. Elle est habillée d'un t-shirt ample gris et d'un legging bleu foncé. Ses mains reposent sur ses genoux, paumes vers le haut, dans une position de méditation ou la détente. Elle est en train de rire, affichant une expression joyeuse et détendue. Derrière elle, on voit des plantes luxuriantes et des arbres, ce qui crée une atmosphère sereine et naturelle sous la lumière du soleil."
        />
      </div>
    </div>
  </main>
);

export default AboutMe;
