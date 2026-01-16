"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";
import styles from "./offer.module.scss";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

const Offers = () => {
  const boxesRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!boxesRef.current) return;

    const boxes = boxesRef.current.querySelectorAll(`.${styles.box}`);
    const scrollPerBox = window.innerHeight * 5;

    // ===== Scroll animation des boxes =====
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: boxesRef.current,
        start: "top top",
        end: `+=${boxes.length * scrollPerBox}`,
        scrub: true,
        pin: true,
        markers: true,
      },
    });

    boxes.forEach((box, i) => {
      gsap.set(box, {
        opacity: i === 0 ? 1 : 0,
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      });

      const textElements = box.querySelectorAll("h1, h2, p");
      if (i === 0) {
        gsap.set(textElements, { opacity: 1, y: 0 });
      } else {
        gsap.set(textElements, { opacity: 0, y: 50 });
      }

      if (i > 0) {
        const appearTime = i * 2;

        tl.to(
          boxes[i - 1],
          { opacity: 0, duration: 0.5, ease: "power1.inOut" },
          appearTime - 0.1
        );
        tl.to(
          box,
          { opacity: 1, duration: 0.5, ease: "power1.inOut" },
          appearTime
        );
        tl.to(
          textElements,
          { opacity: 1, y: 0, duration: 0.5, ease: "power1.out" },
          appearTime + 0.1
        );
      }
    });
  });

  return (
    <section
      className={styles.main}
      ref={boxesRef}
      style={{ position: "relative", height: "100vh" }}
    >
      {/* Boxes */}
      <div
        className={styles.boxes}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          margin: "0 auto",
        }}
      >
        <div className={`${styles.box}`}>
          <div className={`${styles.textContainer}`}>
            <h2> Exercices neuro</h2>
            <p>
              Pour améliorer en 3 minutes chrono vos flexions, extensions,
              équilibre et coordination, avec en plus des techniques sur mesure
              pour vous aider à être plus calme ou plus énergique !
            </p>
          </div>
        </div>
        <div className={`${styles.box}`}>
          <div className={`${styles.textContainer}`}>
            <h2> Séquences originales</h2>
            <p>
              Des séquences uniques et des transitions étonnantes que vous
              n'avez jamais vues nulle part, pour faire travailler vos muscles
              dans toutes les positions possibles.
            </p>
          </div>
        </div>
        <div className={`${styles.box}`}>
          <div className={`${styles.textContainer}`}>
            <h2>Flow pointus</h2>
            <p>
              Élaborés avec un objectif précis (aller dans une posture /
              travailler une partie du corps). Aucun mouvement à jeter, tout est
              effic ient.
            </p>
          </div>
        </div>
        <div className={`${styles.box}`}>
          <div className={`${styles.textContainer}`}>
            <h2>Yoga dynamique </h2>
            <p>
              Des flows dynamiques, loin d’être statiques. Ils vous permettront
              de ressentir chaque muscle de votre corps tout en bougeant sur
              votre tapis.
            </p>
          </div>
        </div>
        <div className={`${styles.box}`}>
          <div className={`${styles.textContainer}`}>
            <h2>Joie et bonne humeur </h2>
            <p>
              Pourquoi ne serait-il pas possible de trouver la paix et le calme
              dans la joie ? Pourquoi la pratique physique du yoga doit-elle
              être prise autant au sérieux ? Personne ne sait ! Et c'est
              pourquoi, dans mes flows, je mets tout en œuvre pour vous faire
              bouger dans la bonne humeur.
            </p>
          </div>
        </div>
        <div className={`${styles.box}`}>
          <div className={`${styles.textContainer}`}>
            <h2>Accessible pour tous les niveaux</h2>
            <p>
              Pourquoi ne serait-il pas possible de trouver la paix et le calme
              dans la joie ? Pourquoi la pratique physique du yoga doit-elle
              être prise autant au sérieux ? Personne ne sait ! Et c'est
              pourquoi, dans mes flows, je mets tout en œuvre pour vous faire
              bouger dans la bonne humeur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
