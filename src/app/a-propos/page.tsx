import Image from "next/image";
import ButtonLink from "../components/Button/Link/Link";
import laughImage from "../images/laughoutsideVertical.webp";
import image from "../images/water.webp";
import styles from "./about.module.scss";
import PageHeader from "../components/PageHeader/PageHeader";

export const metadata = {
  title: "À propos - Adèle Vercaygne",
  description:
    "Découvrez mon parcours et comment le yoga a transformé ma vie. Je souhaite partager avec vous mon expérience, ma formation en yoga, et mon envie de vous transmettre cette passion.",
};

const AboutMe = () => (
  <main className={styles.main}>
    <PageHeader
      title='À propos'
      alt={
        "Vue aérienne de trois personnes nageant dans une étendue d'eau calme, avec des reflets du soleil sur la surface, créant une ambiance paisible"
      }
      image={image}
    />

    <div className={styles.history}>
      <section>
        <h2>
          Mon histoire : allier yoga, mouvement et neurosciences pour aller
          mieux.
        </h2>
        <p>
          En 2014, j'ai découvert le yoga, une pratique qui a transformé ma vie.
          À cette époque, je traversais une période difficile, avec beaucoup
          d'anxiété, des crises d'angoisse et de l'insomnie. Je cherchais un
          moyen de retrouver le bien-être et de gérer mon quotidien.{" "}
        </p>
        <p>
          Un soir, j'ai décidé de suivre une séance de yoga sur YouTube, et en
          15 minutes, j'ai ressenti les bienfaits du mouvement, de la
          respiration consciente et de la méditation. Mes pensées anxieuses ont
          disparu, et cette nuit-là, j'ai dormi paisiblement. Pendant presque un
          an, j'ai pratiqué le yoga chaque soir, et peu à peu, j'ai commencé à
          me sentir mieux, à retrouver une meilleure qualité de sommeil.
        </p>
        <p>
          Cependant, je ressentais le besoin de comprendre ce qui se passait en
          moi pendant ces séances. Je me suis alors plongée dans des recherches
          sur le cerveau, les bienfaits de la respiration, la méditation, ainsi
          que sur les fascias et leur structure. Plus j'approfondissais mes
          recherches, plus je tombais amoureuse du yoga dans sa globalité : une
          pratique qui allie mouvement, anatomie et esprit.{" "}
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
    <div className={styles.secondSection}>
      <section>
        <h2>La science du mouvement et le yoga</h2>
        <p>
          Ce qui m'a fasciné, c'est de découvrir l'impact du yoga sur le cerveau
          et le corps. Le yoga peut ne pas se limiter pas à une série de
          postures ; c'est une science du mouvement qui prend en compte
          l'anatomie, la neuroscience, et la manière dont nos corps et nos
          esprits font partie de la même entité. Grâce à cette pratique, j'ai
          appris à gérer mon stress et mes émotions, à me reconnecter et à mieux
          gérer les défis du quotidien.
        </p>
        <h2>
          Une formation alliant anatomie, neurosciences et philosophie du yoga{" "}
        </h2>
        <p>
          En 2024, après avoir longuement cherché une formation qui allie la
          science du mouvement, l'anatomie et la philosophie du yoga, j'ai été
          diplômée de l'Alba Yoga Academy. Sous la direction de Celest Perreira
          et Hannah Barrett, deux figures internationalement reconnues, j'ai
          approfondi ma compréhension des liens entre le yoga, l'anatomie et les
          neurosciences.
        </p>
        <p>
          Aujourd'hui, je suis convaincue que tout le monde peut bénéficier du
          yoga pour retrouver un meilleur équilibre de vie, une autonomie dans
          la gestion de ses émotions et de son bien-être, grâce à des outils
          simples comme le mouvement, la respiration consciente et la
          méditation.
        </p>

        <ButtonLink title={"Les cours"} href={"les-cours"} />
      </section>
    </div>
  </main>
);

export default AboutMe;
