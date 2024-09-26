import ButtonLink from "../Button/Link/Link";
import styles from "./banner.module.scss";
const Banner = () => {
  return (
    <section className={`${styles.banner} ${styles.bannerOne}`}>
      {/*   <h2>
        <span className={styles.lineBreak}> yoga dynamique</span>
        <span className={styles.lineBreak}> méditation </span>
        <span className={styles.lineBreak}> respiration </span>
      </h2> */}
      <h2> Travailler son corps de manière consciente et efficace </h2>
      <p>
        Alterner entre respiration, méditation et yoga dynamique
        <span className={styles.lineBreak}>
          {" "}
          pour gagner en amplitude, en force et en contrôle.
        </span>
      </p>
      <ButtonLink href='reserver-cours' title='Réserver votre cours' />
    </section>
  );
};

export default Banner;
