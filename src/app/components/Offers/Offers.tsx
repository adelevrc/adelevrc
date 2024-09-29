"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import downwardogImage from "../../images/dd.webp";
import meditation from "../../images/profil.webp";
import warrior3Image from "../../images/warrior3.webp";
import Button from "../Button/Button/Button";
import style from "./offer.module.scss";
import ButtonLink from "../Button/Link/Link";
interface CardProps {
  title: string;
  alt: string;
  src: StaticImageData;
  info: React.ReactNode;
  button: React.ReactNode;
}

const Card = ({ title, alt, src, info, button }: CardProps) => {
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
          {button}
        </div>
      </div>
    </div>
  );
};

const Offers = () => {
  return (
    <section className={style.offers}>
      <Card
        title='Cours de yoga en ligne'
        alt='Professeur de yoga exécutant la posture Guerrier III (Virabhadrasana III) avec équilibre, une jambe levée et tendue en arrière, une jmabe au sol et les mains en prière sur la poitrine.'
        src={warrior3Image}
        info={
          <div className={style.class}>
            <h4>
              Cours de yoga en ligne -{" "}
              <span> Dans le confort de votre maison</span>
            </h4>
            <p>
              Profitez de <strong>cours en ligne de yoga</strong> d'une heure
              pour pratiquer confortablement depuis votre maison. C'est la
              solution idéale pour intégrer <strong>le yoga</strong> dans votre
              quotidien, tout en restant chez vous.
            </p>
            <p>
              Les <strong>cours de yoga en ligne</strong> se déroulent le soir
              et le week-end, offrant une flexibilité parfaite pour votre emploi
              du temps.
            </p>
          </div>
        }
        button={<ButtonLink href='/reserver-cours' title='Réserver un cours' />}
      />

      <Card
        title='Cours de méditation'
        alt='Professeur de yoga exécutant la posture de la planche sur le côté : une main au sol et une main sur la hanche, les deux jambes sont tendues.'
        src={meditation}
        info={
          <div className={style.class}>
            <h4>
              Cours de méditation en ligne -{" "}
              <span>Recommencer la semaine sans appréhension</span>
            </h4>
            <p>
              Grâce à ce travail de <strong>respiration</strong> et de{" "}
              <strong>méditation guidée</strong>, vous pourrez dire adieu au
              blues du dimanche soir et aborder chaque nouvelle semaine sans
              appréhension.
            </p>
            <p>
              L'objectif des <strong>cours de méditation en ligne</strong> est
              de vous aider à développer des{" "}
              <strong>outils de respiration</strong> et de méditation que vous
              pourrez utiliser dans toutes les situations de stress ou
              d'anxiété.
            </p>
          </div>
        }
        button={
          <ButtonLink href='/reserver-cours' title='Réserver une méditation' />
        }
      />
      <Card
        title='Cours 1:1'
        alt='Professeur de yoga exécutant la posture du chien tête en bas. Le corps fait un V inversé : les deux mains sont sur le sol, les fesses sont vers le ciel et les talons sont sur le sol, jambes tendues '
        src={downwardogImage}
        info={
          <div className={style.class}>
            <h4>
              Cours de yoga individuel -{" "}
              <span>Atteignez de nouveaux objectifs dans votre pratique</span>
            </h4>

            <p>
              Les <strong>cours de yoga individuels</strong> s'adaptent à vos
              besoins, que vous souhaitiez perfectionner certaines postures,
              gagner en flexibilité ou découvrir de nouvelles techniques. Chaque
              session est personnalisée selon vos objectifs.
            </p>
            <p>
              Les cours durent de 1 à 1h30, selon vos préférences. Un premier
              contact est nécessaire pour définir vos attentes avant de débuter.
            </p>
          </div>
        }
        button={
          <ButtonLink
            href='https://app.acuityscheduling.com/schedule.php?owner=33520682&owner=33520682&appointmentType=69034331'
            title='Prendre rendez-vous'
            targetBlank={true}
          />
        }
      />
    </section>
  );
};

export default Offers;
