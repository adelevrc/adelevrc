import style from "./description.module.scss";

const Description = () => {
  return (
    <section className={style.description}>
      <h2>Force {">"} Souplesse </h2>
      <p>
        Gagnez en force, en contrôle et en fluidité grâce à des flows dynamiques
        et ludiques.
      </p>
    </section>
  );
};

export default Description;
