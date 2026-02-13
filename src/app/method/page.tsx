import { Metadata } from "next";
import Image from "next/image";
import { Props } from "../about/page";
import ExternalLink from "../components/Button/ExternalLink/ExternalLink";
import ButtonLink from "../components/Button/Link/Link";
import StickyScroll from "../components/Scroll/StickyScroll";
import MainTitle from "../components/Title/MainTitle";
import image from "../images/adele_sourire.svg";
import styles from "./method.module.scss";

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
      <div className={styles.header}>
        <MainTitle />
        <Image src={image} alt='Adèle souriant' height={200} width={200} />

        <p>
          Développer sa force et sa mobilité, et explore sa pratique dans la
          joie, pour en faire un yoga qui nous convient.
        </p>
        <ButtonLink title='Réserver un cours' href={"classes"} />
      </div>
      <section>
        <h2>Trouver sa force grâce au yoga</h2>
        <p>
          Les cours de yoga sont conçus pour que vous puissez développer votre
          force physique et mentale. Ils sont là pour vous faire explorer une
          infinité de mouvements, sans se prendre trop au sérieux.
        </p>
        <div className={styles.wrapper}>
          <StickyScroll />
        </div>
      </section>

      <section>
        <div className={styles.videoContainer}>
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              objectFit: "cover",
            }}
          >
            <source src='/videos/flow.mp4' type='video/mp4' />
            Votre navigateur ne supporte pas la vidéo.
          </video>
          <ExternalLink
            link='https://www.youtube.com/@adelevrc'
            title='Tester un cours YT'
          />
        </div>
        <div className={styles.howItWorks}>
          <h2> Comment se déroule une séance ? </h2>
          <ul>
            <li>
              <h3>
                <span>1</span> Choisir son terrain de jeu
              </h3>
              <p>
                On choisit une posture ou une intention à explorer librement.
              </p>
            </li>
            <li>
              <h3>
                <span>2</span> Jouez entre stabilité et mouvement
              </h3>
              <p>
                Le corps passe du stable au fluide, teste, ajuste et joue avec
                le mouvement.
              </p>
            </li>
            <li>
              <h3>
                <span>3</span>Débloquez des amplitudes
              </h3>
              <p>
                Des outils malins pour débloquer, surprendre le corps et aller
                un peu plus loin.
              </p>
            </li>
            <li>
              <h3>
                <span>4</span> Voyez votre pratique évoluer
              </h3>
              <p>
                Au fil des cours, vous gagnez en autonomie, affinez vos
                sensations et trouvez ce qui vous fait vraiment progresser.
              </p>
            </li>
          </ul>
          <ButtonLink title='Réserver un cours' href={"classes"} />
        </div>
      </section>
    </main>
  );
};

export default Method;
