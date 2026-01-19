import { Props } from "@/app/about/page";
import styles from "@/app/styles/home.module.scss";
import { Metadata } from "next";
import Banner from "./components/Banner/Banner";
import Description from "./components/Description/Description";
import Offers from "./components/Offers/Offers";
import Testimonials from "./components/Testomonials/Testimonials";

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
      <Testimonials />
      <Description />
      <section className={styles.wrapper}>
        <Offers />
      </section>
    </main>
  );
};

export default Home;
