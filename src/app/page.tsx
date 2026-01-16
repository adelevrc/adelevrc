import { Props } from "@/app/about/page";
import { Metadata } from "next";
import styles from "@/app/styles/home.module.scss";
import Banner from "./components/Banner/Banner";
import Description from "./components/Description/Description";
import Offers from "./components/Offers/Offers";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: "Accueil - Adèle Vercaygne",
    description:
      "Cours de yoga, respiration et méditation basés sur l'anatomie, la neuroscience et le mouvement pour un corps et un esprit sains, durablement.",
  };
}

const Home = () => {
  return (
    <main className={styles.main}>
      <Banner />
      <Description />
      <section className={styles.wrapper}>
        <Offers />
      </section>
    </main>
  );
};

export default Home;
