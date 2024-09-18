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
        alt="L’image montre une personne faisant du yoga en plein air dans une posture appelée 'Cobra' ou 'Bhujangasana'. Elle est allongée sur un tapis de yoga vert, les paumes des mains appuyées au sol, les bras tendus, et le haut du corps relevé. Son visage est tourné vers l'avant, et son dos est arqué. La personne est vêtue d'un débardeur noir et d'un legging noir ajusté. En arrière-plan, on voit des plantes vertes luxuriantes et des arbres, créant un cadre naturel et paisible sous la lumière du soleil."
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
