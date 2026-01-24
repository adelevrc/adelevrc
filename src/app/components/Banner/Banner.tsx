import Image from "next/image";
import image from "../../images/plank-blackhover.webp";
import PageHeader from "../PageHeader/PageHeader";
import styles from "./banner.module.scss";

const Banner = () => {
  const title = (
    <>
      Développer votre <span>force</span> grâce au yoga
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
          Affûter votre corps, développer votre esprit sans vous prendre au
          sérieux.
        </p>
      </div>
    </section>
  );
};

export default Banner;
