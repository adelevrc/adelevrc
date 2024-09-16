import ButtonLink from "../Button/Link/Link";
import styles from "./banner.module.scss";
const Banner = () => {
  return (
    <section className={`${styles.banner} ${styles.bannerOne}`}>
      <h2>
        <span> yoga </span> dynamique pour tout le monde
      </h2>
      <ButtonLink href='#' title='Réserver votre cours' />
    </section>
  );
};

export default Banner;
