import Image from "next/image";
import image from "../../images/plank-blackhover.webp";
import PageHeader from "../PageHeader/PageHeader";
import styles from "./banner.module.scss";

const Banner = () => {
  const title = (
    <>
      La méthode pour un <span>yoga</span> dynamique, léger et original !
    </>
  );
  return (
    <section className={styles.banner}>
      <Image
        src={image}
        alt='Background'
        fill
        priority
        className='object-cover'
      />
      <div className={styles.titleContainer}>
        <PageHeader title={title} />
        <p className={styles.subtitle}>
          Nourrissez votre énergie, cultiver votre calme et développer votre
          force, sans se prendre au sérieux.
        </p>
      </div>
    </section>
  );
};

export default Banner;
