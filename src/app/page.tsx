import Banner from "./components/Banner/Banner1";
import Banner2 from "./components/Banner/Banner2";

import Image from "next/image";
import ButtonLink from "./components/Button/Link/Link";
import ContactMe from "./components/ContactMe/Contact.Me";
import Description from "./components/Description/Description";
import Marquee from "./components/Marquee/Marquee";
import Offers from "./components/Offers/Offers";
import image from "./images/accueil.webp";
import style from "./styles/home.module.scss";
const Home = () => (
  <main className={style.main}>
    <Banner />
    <Marquee />
    <Image
      className={style.picture}
      src={image}
      width={550}
      height={500}
      alt='Picture of the author'
    />
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
