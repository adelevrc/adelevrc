import ButtonLink from "../Button/Link/Link";
import styles from "./banner.module.scss";
const Banner = () => {
  return (
    <section className={`${styles.banner} ${styles.bannerOne}`}>
      <h2> Bouger son corps et muscler son esprit</h2>
      <p> Gagnez en amplitude, en force, et contrôle. </p>
      <p> Apprenez à respirer et à méditer. </p>
      <p> Trouvez votre calme dans toutes les situations.</p>
      <ButtonLink href='reserver-cours' title='Réserver votre cours' />
    </section>
  );
};

export default Banner;
