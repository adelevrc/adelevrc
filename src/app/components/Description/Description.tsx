import Title from "../Title/DynamicTitle";
import style from "./description.module.scss";

const Description = () => {
  return (
    <section className={style.description}>
      <Title
        text={"Bouger"}
        as='h2'
        color='orange'
        movingText='avec intention'
      />
      <p>Un yoga vivant, engagé et profondément humain.</p>
    </section>
  );
};

export default Description;
