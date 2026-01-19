"use client";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Popup from "../Popup/Popup";
import styles from "./testimonials.module.scss";

const Testimonials = () => {
  interface Testimonial {
    clientName: string;
    message: string;
  }

  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const testimonials: Testimonial[] = [
    {
      clientName: "Alicia",
      message:
        "J'ai beaucoup apprécié les cours avec Adèle : c'est une personne attentive, à l'écoute, patiente et qui n'hésite pas à me guider lors des figures complexes. Étant débutante dans le yoga, j'ai été très bien accompagnée et je recommande chaudement ses cours !!",
    },
    {
      clientName: "Lucie",
      message:
        "Adèle est une professeure de yoga qui mêle pratique ancestrale, connaissances en biomécaniques et neurosciences. Ce beau mélange donne lieu à une approche tout autant décomplexée que professionnelle. Des flows tout doux, des séances rythmées ou encore des capsules rapides et efficaces, l'on trouvera forcément la formule qui répondra à notre besoin du moment. Je recommande à 1000% !",
    },
    {
      clientName: "Julie",
      message:
        "Ces cours de yoga m’ont fait beaucoup de bien. L’énergie d’Adèle, sa douceur et son attention créent un espace où l’on peut vraiment lâcher prise. On se reconnecte à soi tout en gagnant en force et en confiance.",
    },
    {
      clientName: "Anouk",
      message:
        "Une expérience vraiment inspirante. Adèle sait créer un cadre créatif et bienveillant où l’on se sent à l’aise. Chaque cours est un moment de joie et de progression. Je recommande sans hésiter.",
    },
  ];
  const total = testimonials.length;
  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  const colors = ["#390099", "#9e0059", "#ff0054", "#ff5400", "#ffbd00"];

  return (
    <>
      {popupIsOpen && (
        <Popup
          setPopupIsOpen={setPopupIsOpen}
          children={
            <ul>
              {testimonials.map((item, index) => (
                <li className={styles.carouselItemPopup} key={index}>
                  <div className={styles.carouselItemContainerPopup}>
                    <span
                      className={styles.carouselName}
                      style={{ backgroundColor: colors[index] }}
                    >
                      {item.clientName}
                    </span>
                    <p className={styles.carouselTextPopup}>{item.message}</p>
                  </div>
                </li>
              ))}
            </ul>
          }
        />
      )}

      <div className={styles.container}>
        <div className={styles.description}>
          <p> Elles et ils aiment ❤️ </p>
        </div>
        <div className={styles.carousel}>
          <ul
            className={styles.carouselTrack}
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((item, index) => (
              <li className={styles.carouselItem} key={index}>
                <div className={styles.carouselItemContainer}>
                  <span
                    className={styles.carouselName}
                    style={{ backgroundColor: colors[index] }}
                  >
                    {item.clientName}
                  </span>
                  <p className={styles.carouselText}>
                    {item.message.slice(0, 100) + "..."}
                  </p>
                  <button
                    className={styles.learnMore}
                    onClick={() => setPopupIsOpen(true)}
                  >
                    <div>Voir plus</div>

                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.controls}>
          <button onClick={prev} aria-label='Témoignage précédent'>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button onClick={next} aria-label='Témoignage suivant'>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
