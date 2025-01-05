import Image from "next/image";
import Banner from "./components/Banner/Banner1";
import ContactMe from "./components/ContactMe/ContactMe";
import Description from "./components/Description/Description";
import Offers from "./components/Offers/Offers";
import image from "./images/plank.webp";
import style from "./styles/home.module.scss";

export const metadata = {
  title: "Accueil - Adèle Vercaygne",
  description:
    "Cours de yoga, respiration et méditation basés sur l’anatomie, la neuroscience et le mouvement pour un corps et un esprit sains, durablement.",
};

const Home = () => (
  <main className={style.main}>
    <Banner />
    <div className={style.imageContainer}>
      <Image
        className={style.picture}
        src={image}
        alt='Personne faisant du yoga en intérieur. Elle est en planche sur le côté et rigole en regardant la caméra devant elle.'
        priority
      />
    </div>

    <Description />
    <Offers />
    <ContactMe />
  </main>
);

export default Home;
