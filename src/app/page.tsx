import Banner from "./components/Banner/Banner1";
import Banner2 from "./components/Banner/Banner2";
import Image from "next/image";
import ButtonLink from "./components/Button/Link/Link";
import ContactMe from "./components/ContactMe/Contact.Me";
import Description from "./components/Description/Description";
import Marquee from "./components/Marquee/Marquee";
import Offers from "./components/Offers/Offers";
import image from "./images/updogoutside.webp";
import style from "./styles/home.module.scss";

export const metadata = {
  title: "Accueil - Adèle Vercaygne",
  description:
    "Cours de yoga, respiration et méditation basés sur l’anatomie, la neuroscience et le mouvement pour un corps et un esprit sains, durablement.",
};

const Home = () => (
  <main className={style.main}>
    <Banner />
    <Marquee />
    <div className={style.imageContainer}>
      <Image
        className={style.picture}
        src={image}
        layout='fill'
        objectFit='cover'
        alt="Personne faisant du yoga en plein air en posture Cobra (Bhujangasana) sur un tapis vert, avec un arrière-plan naturel de plantes et d'arbres."
      />
    </div>

    <Description />
    <Offers />
    <div className={style.bookClass}>
      <ButtonLink
        title={"En savoir plus sur les cours"}
        href={"les-cours"}
        reversed
      />
    </div>
    <Banner2 />
    <ContactMe />
  </main>
);

export default Home;
