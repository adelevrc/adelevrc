import ButtonLink from "../Button/Link/Link";
import styles from "./banner.module.scss";
const Banner = () => {
  return (
    <section className={styles.banner}>
      <h1> Adèle Vercaygne</h1>
      <h2>
        Le <span> yoga </span> sans se prendre au sérieux
      </h2>
      <ButtonLink href='#' title='Réserver votre cours' />
    </section>
  );
};

export default Banner;
