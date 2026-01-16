"use client";
import ExternalLink from "@/app/components/Button/ExternalLink/ExternalLink";
import PageHeader from "@/app/components/PageHeader/PageHeader";
import pic_adele from "@/app/images/profile_pic.webp";
import pic_lucie from "@/app/images/lucie_pic.webp";

import Image from "next/image";
import { Fragment, ReactNode, useState } from "react";
import styles from "./workshop.module.scss";

interface Props {
  title: string;
  content: string | ReactNode;
}
const Accordion = ({ title, content }: Props) => {
  const [isActive, setIsActive] = useState(false);

  const isString = (variable: any) => {
    return typeof variable === "string";
  };
  return (
    <div className={`${styles.accordionItem} ${isActive ? styles.active : ""}`}>
      <div
        className={styles.accordionTitle}
        onClick={() => setIsActive(!isActive)}
      >
        {title}
        <button className={isActive ? styles.arrowUp : styles.arrowDown} />
      </div>
      <div className={styles.accordionContent}>
        {content &&
        isString(content) &&
        content.includes(
          "Rien de plus simple, il suffit de cliquer sur ce bouton"
        ) ? (
          <div className={styles.link}>{content} </div>
        ) : (
          content
        )}
      </div>
    </div>
  );
};

const WorkshopPage = () => {
  const data = [
    {
      title:
        "Je suis intéressé•e mais je ne suis pas disponible à cette date, comment faire ?",
      content:
        "Pas de panique ! Vous pouvez vous inscrire et on vous enverra le replay de l'atelier.",
    },
    {
      title: "Est-ce que je pourrai revoir l'atelier si j'en ai envie ?",
      content:
        "Oui, bien sûr ! À la fin de l'atelier, on vous enverra le lien pour le visualiser ainsi qu'un PDF pour avoir tous les outils à portée de main !",
    },
    {
      title: "Combien coûte l'atelier ?",
      content: "L'atelier coûte 30 € pour 2h30.",
    },
    {
      title: "Comment faire pour s'inscrire ?",
      content: "Rien de plus simple, il suffit de cliquer sur ce bouton",
    },
    {
      title: "De quoi j'ai besoin ? ",
      content:
        "Une bonne connexion internet, un tapis de yoga, un endroit calme !",
    },
    {
      title: "J'ai besoin de plus d'informations, qui contacter ?",
      content: (
        <>
          Nous sommes disponibles pour vous donner plus d'informations par email
          ou par téléphone. Pour contacter Lucie : 06.32.45.90.17. Pour
          contacter Adèle :{" "}
          <a href='mailto:contact@adelevrc.com'>contact@adelevrc.com</a>
        </>
      ),
    },
  ];

  return (
    <main className={styles.main}>
      <PageHeader title='Les ateliers' />
      <p>
        Découvrez ici tous les ateliers proposés en partenariat avec d'autres
        expert•es.
      </p>
      <div className={styles.workshop}>
        <div className={styles.date}>
          <h2>Atelier Naturopathie x Yoga</h2>
          <h3>Sortir de l'hibernation, place à l'énergie ! </h3>
          <p>Dimanche 6 avril 2025 | 10h à 12h30 | En ligne</p>
        </div>
        <p>
          Quoi de mieux pour accompagner l'arrivée du printemps qu'un tour
          d'horizon des approches de santé naturelles pour booster votre
          vitalité!
        </p>
        <p>
          Pour cela, à travers un atelier en ligne de 2h30, mêlant théorie et
          pratique, Adèle, professeure de yoga et Lucie, naturopathe vous
          proposent:
        </p>
        <ul className={styles.how}>
          <li>
            1 heure d'atelier de naturopathie avec Lucie où vous apprendrez tous
            les secrets énergétiques. Puis un temps d'échange pour répondre à
            toutes vos questions.
          </li>
          <li>
            1 heure de yoga avec Adèle avec, en plus, des astuces neurologiques
            pour activer son énergie, la conserver et la maîtriser !
          </li>
        </ul>
        <p>
          Les participants repartent avec un <span>support écrit</span>{" "}
          reprenant les conseils naturopathiques, ainsi que la vidéo de yoga{" "}
          <span>accessible à vie</span>. Mais aussi, une playlist et des liens
          pour aller plus loin (podcasts, livres, etc).
        </p>
        <img
          className={styles.gif}
          src='https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcG0xZHc5NGN2czJyZ2Y2ZThzdDRyMW14Zzc5cjNibm85bDdwODJ6MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/t3sZxY5zS5B0z5zMIz/giphy.gif'
          alt="GIF d'un enfant qui hurle de bonheur devant un match de hookey"
        ></img>

        <h3>Les expertes</h3>
        <ul className={styles.experts}>
          <li className={styles.lucie}>
            <div className={styles.info}>
              <Image
                src={pic_lucie}
                alt='Photo de profil de Lucie De Groote, naturopathe et réflexologue'
              />
              <h4>Lucie</h4>
            </div>
            <strong>Naturopathe et réflexologue</strong>
            <p>
              Je m'appelle Lucie de Groote, je me suis formée auprès de l'école
              de naturopathie Euronature de Lille il y a 5 ans, je pratique
              également le massage bien-être et de la réflexologie plantaire.
              J'ai à coeur de transmettre mes connaissances en santé naturelle,
              afin de vous aider à mieux comprendre les besoins de votre corps
              et de votre esprit, vous permettant ainsi d'instaurer une
              dynamique de vie qui vous ressemble et vous épanouisse.
            </p>
          </li>
          <li className={styles.adele}>
            <div className={styles.info}>
              <Image
                src={pic_adele}
                alt="Photo de profil d'Adèle Vercaygne, professeure de yoga dynamique"
              />
              <h4>Adèle</h4>
            </div>
            <p>
              <strong>Professeure de yoga dynamique</strong>
            </p>
            <p>
              Dans mes cours de yoga originaux, j'intègre de la mobilité et des
              neurosciences pour mieux comprendre votre corps, le mettre au défi
              dans une ambiance festive et conviviale !
            </p>
            <p>
              Je vous donne tous les outils nécessaires pour progresser dans
              votre pratique de yoga et dans vos autres activités !
            </p>
          </li>
        </ul>
        <div className={styles.needs}>
          <h3>Vous avez besoin</h3>
          <ul>
            <li>D'une bonne connexion internet</li>
            <li>D'un tapis de yoga</li>
            <li>D'un espace calme</li>
          </ul>
          <p className={styles.align}>L'inscription est obligatoire 👇</p>
        </div>

        <h3>FAQ</h3>
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
