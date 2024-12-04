import ButtonLink from "../Button/Link/Link";
import PageHeader from "../PageHeader/PageHeader";
import styles from "./banner.module.scss";

const Banner = () => {
  return (
    <section className={styles.banner}>
      <PageHeader title={"Pratiquer le yoga avec les neurosciences"} />
      <p>
        Gagnez en amplitude, en force, et en contrôle grâce à des exercices
        neurologiques ciblés intégrés dans votre pratique de yoga.
      </p>
      <p>
        Apprenez à contrôler vos mouvements et votre esprit pour faire face à
        toutes les situations.
      </p>
      <p>
        Comprenez votre corps et votre cerveau pour progresser et devenir
        autonome dans votre pratique de yoga et sportive.
      </p>
      <ButtonLink
        href='reserver-cours'
        title='Réserver votre cours'
        color='red'
      />
    </section>
  );
};

export default Banner;
