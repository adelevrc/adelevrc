"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import downwardogImage from "../../images/dd.webp";
import meditation from "../../images/profil.webp";
import warrior3Image from "../../images/warrior3.webp";
import Button from "../Button/Button/Button";
import style from "./offer.module.scss";
interface CardProps {
  title: string;
  alt: string;
  src: StaticImageData;
  info: React.ReactNode;
}

const Card = ({ title, alt, src, info }: CardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prevState) => !prevState);
  };

  const styles = {
    backgroundImage: `url(${src})`,
  };
  return (
    <div className={style.card}>
      <div className={`${style.cardInner} ${isFlipped ? style.flipped : ""}`}>
        <div className={style.cardFront} style={styles}>
          <h3> {title} </h3>
          <Image
            className={style.cardImage}
            src={src}
            alt={alt}
            width={300}
            height={400}
          />
          <Button title={"Voir"} onClick={handleFlip} />
        </div>
        <div className={style.cardBack}>
          {info}
          <Button title={"Retourner"} onClick={handleFlip} />
        </div>
      </div>
    </div>
  );
};

const Offers = () => {
  return (
    <section className={style.offers}>
      <Card
        title='Cours en ligne'
        alt='Professeur de yoga exécutant la posture Guerrier III (Virabhadrasana III) avec équilibre, une jambe levée et tendue en arrière, une jmabe au sol et les mains en prière sur la poitrine.'
        src={warrior3Image}
        info={
          <div className={style.class}>
            <h4>Cours en ligne</h4>
            <p> Dans le confort de votre maison</p>
            <p>
              Les cours en ligne durent une heure et vous permettent de faire du
              yoga tout en restant chez vous.
            </p>
            <p>C'est la solution pratique et confortable par excellence.</p>
            <p> Les cours en ligne se déroulent le soir et le week-end</p>
          </div>
        }
      />

      <Card
        title='Cours de méditation'
        alt='Professeur de yoga exécutant la posture de la planche sur le côté : une main au sol et une main sur la hanche, les deux jambes sont tendues.'
        src={meditation}
        info={
          <div className={style.class}>
            <h4>Cours de méditation en ligne</h4>
            <p> Recommencer la semaine sans appréhension</p>
            <p>
              Ce travail de respiration et méditation guidée vous permettra
              d'enlever le blues du dimanche soir.
            </p>
            <p>
              L'objectif est de construire avec vous des outils de respiration
              et de méditation pour vous aider dans toutes les situations.
            </p>
          </div>
        }
      />
      <Card
        title='Cours 1:1'
        alt='Professeur de yoga exécutant la posture du chien tête en bas. Le corps fait un V inversé : les deux mains sont sur le sol, les fesses sont vers le ciel et les talons sont sur le sol, jambes tendues '
        src={downwardogImage}
        info={
          <div className={style.class}>
            <h4>Cours individuel</h4>
            <p> Allez plus loin dans sa pratique. </p>
            <p>
              Les cours individuels sont construits autour de ce que vous avez
              envie d'améliorer ou de découvrir dans la pratique du yoga.
            </p>
            <p> Les cours peuvent aller d'une heure à une heure et demi </p>
            <p>
              Afin de mieux se connaître et de connaître vos besoins, un premier
              contact est nécessaire.
            </p>
          </div>
        }
      />
    </section>
  );
};

export default Offers;
