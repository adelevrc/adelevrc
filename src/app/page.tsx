import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Marquee from "./components/Marquee/Marquee";
import style from "./styles/home.module.scss";
import Image from "next/image";
import image from "./images/accueil.webp";
import Description from "./components/Description/Description";
import Offers from "./components/Offers/Offers";
const Home = () => {
  return (
    <main className={style.main}>
      <Header />
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
    </main>
  );
};

export default Home;
