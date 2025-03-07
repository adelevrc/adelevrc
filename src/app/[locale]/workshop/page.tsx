"use client";
import PageHeader from "@/app/components/PageHeader/PageHeader";
import BookeoWidget from "@/app/components/ReservationFrame/ReservationFrame";
import pic_adele from "@/app/images/profile_pic.webp";
import Image from "next/image";
import styles from "./workshop.module.scss";
import { Fragment, useState } from "react";
import React from "react";

interface Props {
  title: string;
  content: string;
}
const Accordion = ({ title, content }: Props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`${styles.accordionItem} ${isActive ? styles.active : ""}`}>
      <div
        className={styles.accordionTitle}
        onClick={() => setIsActive(!isActive)}
      >
        {title}
        <button className={isActive ? styles.arrowUp : styles.arrowDown} />
      </div>
      <div className={styles.accordionContent}>{content}</div>
    </div>
  );
};

const WorkshopPage = () => {
  const data = [
    {
      title:
        "Je suis intéressé•e mais je ne suis pas disponible à cette date,comment faire ?",
      content:
        "Pas de panique ! Vous pouvez vous inscrire et on vous enverra le replay de l'atelier.",
    },
    {
      title: "Est ce que je pourrais revoir l'atelier si j'en ai envie ?",
      content:
        "Oui bien sûr ! À la fin de l'atelier on vous enverra le lien pour le visualiser ainsi qu'un PDF pour avoir tous les outils à portée demain !",
    },
    {
      title: "Combien coûte l'atelier ?",
      content: "L'atelier coute 30 € pour 2h30",
    },
    {
      title: "Comment faire pour s'inscrire ?",
      content: "  Rien de plus simple, il suffit de cliquer sur ce bouton",
    },
  ];
  return (
    <main className={styles.main}>
      <PageHeader title={"Les ateliers"} />
      <p>
        Découvrez ici tous les ateliers proposés en partenariat avec d'autres
        expert•es.{" "}
      </p>
      <div className={styles.workshop}>
        <h2> Atelier Naturo x Yoga </h2>
        <h3> Sortez de l'hibernation, place à l'énergie ! </h3>
        <div className={styles.date}>
          <p>Dimanche 6 avril 2025</p>
          <p>10h à 12h30</p>
          <p>En ligne</p>
        </div>
        <p>
          L'hiver est parti, le printemps est là ! Le soleil revient et brille
          plus longtemps, vous avez plein d'idées, plein d'envies. Mais comment
          garder cette énergie et cette motivation le plus longtemps possible ?
        </p>
        <p>
          Dans cet atelier, nous vous proposons de décourvrir les outils
          <span>naturopathiques</span>,<span>neurologiques</span> et{" "}
          <span>yogique</span> pour vous aider à rester énergique et énergique
          tout au long de l'année.
        </p>
        <div>
          <h3>Comment ça se passe ?</h3>
          <p>
            1 heure d'atelier de naturopathie avec Lucie où vous apprendrez tous
            les secrets énégétiques. Puis un temps d'échange pour répondre à
            toutes vos questions.
          </p>
          <p>
            1 heure de yoga avec Adèle avec en plus des astuces neuroligiques
            pour activer son énergie, la conserver et la maitriser !
          </p>
          <p>
            L'atelier se passe <span> en ligne </span> dans le confort de votre
            maison !
          </p>
          <BookeoWidget title="Réserver l'atelier" />
        </div>
        <div>
          <h3> Combien coûte cet atelier ?</h3>
          <p> 30 € par personne </p>
          <BookeoWidget title="Réserver l'atelier" />
        </div>

        <h3> Les expertes</h3>
        <ul className={styles.experts}>
          <li className={styles.lucie}>
            <h4> Lucie </h4>
            <strong> Naturopathe et masseuse </strong>
            <p></p>
          </li>
          <li className={styles.adele}>
            <div className={styles.info}>
              <Image src={pic_adele} alt={""} />

              <h4>Adèle</h4>
            </div>

            <p>
              <strong>Professeur de yoga dynamique</strong>
            </p>
            <p>
              Dans ces cours de yoga orignaux elle intègre de la mobiltié et de
              la neuroscience pour mieux comprendre votre corps, le mettre au
              défi dans une ambiance festive et conviviale !
            </p>
            <p>
              {" "}
              Elle vous donne tous les outils nécessaires pour progresser dans
              votre pratique de yoga et dans vos autres activités !
            </p>
          </li>
        </ul>
        <h3> FAQ</h3>
        {data.map((item) => (
          <Fragment key={item.title}>
            <Accordion title={item.title} content={item.content} />
          </Fragment>
        ))}
      </div>
    </main>
  );
};

export default WorkshopPage;
