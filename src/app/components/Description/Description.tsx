import ButtonLink from "../Button/Link/Link";
import style from "./description.module.scss";

const Description = () => {
  return (
    <section className={style.description}>
      <h2>
        Des cours construits pour gagner en
        <span>force</span>
        et en
        <span>mobilité</span>
      </h2>
      <p>
        Les cours que je propose sont un mélange de ce que j'ai appris dans mes
        cours d'anatomie et de neurosciences, mélangés à de la sueur et du rire.
        Les transitions sont souvent originales et parfois difficiles mais
        l'objectif reste le même dans chaque séance : découvrir son corps et lui
        permettre d'explorer le plus de mouvements possibles et de gagner en
        mobilité dans ces mouvements parfois peu conventionnels.
      </p>
      <ButtonLink href='ma-methode' title='Ma méthode' />
    </section>
  );
};

export default Description;
