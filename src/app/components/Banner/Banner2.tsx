import BorderedText from "../BorderedText/BorderedText";
import styles from "./banner.module.scss";

const Banner = () => {
  return (
    <section className={`${styles.banner}`}>
      <h2>
        Trouvez votre force <BorderedText text='mentale' /> et{" "}
        <BorderedText text='physique' />
      </h2>
    </section>
  );
};

export default Banner;
