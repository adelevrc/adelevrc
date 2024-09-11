"use client";
import { useState } from "react";
import style from "./offer.module.scss";
import Image, { StaticImageData } from "next/image";
import warrior3Image from "../../images/warrior3.webp";
import Button from "../Button/Button/Button";
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
    backgroundImage: `url(${src})`, // Définir la background-image
  };
  return (
    <div className={style.card}>
      <div className={`${style.cardInner} ${isFlipped ? style.flipped : ""}`}>
        <div className={style.cardFront} style={styles}>
          <h2> {title} </h2>
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
          <div className={style.onlineClass}>
            <h2>Cours en ligne</h2>
            <p> Dans le confort de votre maison</p>
            <ul>
              <li>Mercredi de 19h à 20h00</li>
              <li>Vendredi de 19h à 20h00</li>
              <li>Dimanche de 10h à 11h</li>
            </ul>
            <p> 10 euros l'heure de cours </p>
          </div>
        }
      />
      <Card
        title='Cours 1:1'
        alt='Professeur de yoga exécutant la posture Guerrier III (Virabhadrasana III) avec équilibre, une jambe levée et tendue en arrière, une jmabe au sol et les mains en prière sur la poitrine.'
        src={warrior3Image}
        info={
          <div className={style.individualClass}>
            <h2>Cours individuel</h2>
            <p> Allez plus loin dans sa pratique sans sortir de chez soi. </p>
            <p>
              Les cours individuels sont construits autour de ce que vous avez
              envie d'améliorer ou de découvrir
            </p>
            <p> Les cours peuvent aller d'une heure à une heure et demi </p>
            <p>
              Afin de mieux se connaître et de connaître vos besoins, un premier
              contact est nécessaire.
            </p>
            <button> Se contacter </button>
          </div>
        }
      />
      <Card
        title='Cours de méditation'
        alt='Professeur de yoga exécutant la posture Guerrier III (Virabhadrasana III) avec équilibre, une jambe levée et tendue en arrière, une jmabe au sol et les mains en prière sur la poitrine.'
        src={warrior3Image}
        info={
          <div className={style.meditationClass}>
            <h2>Cours de méditation en ligne</h2>
            <p> Recommencer la semaine sans appréhension.</p>
            <p> Travail de respiration et méditation guidée </p>
            <p> Mercredi de 19h à 19h30</p>
            <p> 5 euros</p>
          </div>
        }
      />
    </section>
  );
};

export default Offers;
