import ButtonLink from "@/app/components/Button/Link/Link";
import PageHeader from "@/app/components/PageHeader/PageHeader";
import type { Metadata } from "next";
import Image from "next/image";
import laughImage from "@/app/images/adele_sourire.svg";
import styles from "./about.module.scss";

export type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: "À propos - Adèle Vercaygne",
    description:
      "Découvrez mon parcours et comment le yoga a transformé ma vie. Je souhaite partager avec vous mon expérience, ma formation en yoga, et mon envie de vous transmettre cette passion.",
  };
}

const AboutMe = () => {
  return (
    <main className={styles.main}>
      <PageHeader title='Mon histoire : aller mieux grâce au yoga' />
      <div className={styles.history}>
        <section>
          <p>
            En 2014, j'ai découvert le yoga, une pratique qui a transformé ma
            vie. À cette époque, je traversais une période difficile, avec
            beaucoup d'anxiété, des crises d'angoisse et de l'insomnie. Je
            cherchais un moyen de retrouver un état de bien être et de gérer mon
            quotidien.
          </p>
          <p>
            Un soir, j'ai décidé de suivre une séance de yoga sur YouTube, et en
            15 minutes, j'ai ressenti les bienfaits du mouvement, de la
            respiration consciente et de la méditation. Mes pensées anxieuses
            ont disparu, et cette nuit-là, j'ai dormi paisiblement. Pendant
            presque un an, j'ai pratiqué le yoga chaque soir, et peu à peu, j'ai
            commencé à me sentir mieux, à retrouver une meilleure qualité de
            sommeil et dans ma vie quotidienne.
          </p>
          <p>
            Cependant, je ressentais le besoin de comprendre ce qui se passait
            en moi pendant ces séances. Je me suis alors plongée dans des
            recherches sur le cerveau, la neuroscience, les bienfaits de la
            respiration, la méditation, ainsi que sur l'anatomie et la
            biomécanique. Plus j'approfondissais mes recherches, plus je tombais
            amoureuse du yoga dans sa globalité : une pratique qui allie
            mouvement, anatomie et esprit.
          </p>
          <ButtonLink title='Découvrir ma méthode' href={"method"} />
        </section>

        <div className={styles.imageInSection}>
          <Image
            className={styles.picture}
            src={laughImage}
            width={550}
            height={700}
            alt="L'image montre une personne assise en tailleur sur un tapis de yoga bleu, devant un mur blanc. Elle est habillée d'un débardeur noir et d'un legging noir. Ses mains reposent sur ces genoux et elle regarde la caméra. Elle est en train de sourire, affichant une expression joyeuse et détendue."
          />
        </div>
      </div>
      <div className={styles.secondSection}>
        <section>
          <h2>La science du mouvement et le yoga</h2>
          <p>
            Ce qui m'a fasciné, c'est de découvrir l'impact du yoga sur le
            cerveau et le corps. Le yoga ne se limite pas à une série de
            posture; En plus de l'aspect traditionnel et rituel, c'est une
            science du mouvement qui prend en compte la biomécanique, les
            neurosciences, et la manière dont notre corps et notre esprit font
            partie de la même entité. Grâce à cette pratique, j'ai appris à
            gérer mon stress et mes émotions, à me reconnecter et à mieux gérer
            les défis du quotidien.
          </p>
          <h2>Ma formation chez Alba Yoga</h2>
          <p>
            En 2024, après avoir longuement cherché une formation qui allie la
            science du mouvement, l'anatomie et la philosophie du yoga, j'ai été
            diplômée de l'Alba Yoga Academy. Sous la direction de Celest
            Perreira et Hannah Barrett, deux figures internationalement
            reconnues, j'ai approfondi ma compréhension des liens entre le yoga,
            l'anatomie et les neurosciences pour créer des séquences originales,
            dynamiques avec des objectifs précis.
          </p>
          <p>
            Aujourd'hui, je suis convaincue que tout le monde peut bénéficier du
            yoga, qu'on fasse de la course, de la musculation, du pilate, ou
            rien du tout, le yoga est là comme un ami qui nous aide à améliorer
            notre corps, notre santé, notre bien-être mais aussi à gérer nos
            émotions et à vivre en société.
          </p>
          <ButtonLink title='Les cours' href={"classes"} />
        </section>
      </div>
    </main>
  );
};

export default AboutMe;
