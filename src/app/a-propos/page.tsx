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
          alt='Description of the image'
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
          alt='Picture of the author'
        />
      </div>
    </div>
  </main>
);

export default AboutMe;
