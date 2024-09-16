import styles from "./banner.module.scss";

const Banner = () => {
  return (
    <section className={`${styles.banner} ${styles.bannerWhite}`}>
      <h2>
        Trouvez votre <span> force </span>
        mentale et physique
      </h2>
    </section>
  );
};

export default Banner;
