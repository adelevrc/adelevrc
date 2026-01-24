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
    const scrollPerBox = window.innerHeight * 2;
    const isDev = process.env.NODE_ENV === "development";
    // ===== Scroll animation des boxes =====
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: boxesRef.current,
        start: "top top",
        end: `+=${boxes.length * scrollPerBox}`,
        scrub: true,
        pin: true,
        markers: isDev,
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
          appearTime - 0.1,
        );
        tl.to(
          box,
          { opacity: 1, duration: 0.5, ease: "power1.inOut" },
          appearTime,
        );
        tl.to(
          textElements,
          { opacity: 1, y: 0, duration: 0.5, ease: "power1.out" },
          appearTime + 0.1,
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
            <h2> Force {">"} Souplesse </h2>
            <p>La souplesse impressionne. La force protège et transforme.</p>
          </div>
        </div>
        <div className={`${styles.box}`}>
          <div className={`${styles.textContainer}`}>
            <h2> Questionner {">"} Consommer</h2>
            <p>
              Ne pas simplement suivre une pratique. La comprendre, la remettre
              en question, et se l’approprier.
            </p>
          </div>
        </div>
        <div className={`${styles.box}`}>
          <div className={`${styles.textContainer}`}>
            <h2>Joie {">"} Sérieux</h2>
            <p>
              Du challenge, du jeu, du mouvement. Parce que la joie est une
              force.
            </p>
          </div>
        </div>
        <div className={`${styles.box}`}>
          <div className={`${styles.textContainer}`}>
            <h2> Explorer {">"} Imiter</h2>
            <p>
              Sortir des formes toutes faites. Chercher, tester, ressentir,
              plutôt que reproduire sans conscience.
            </p>
          </div>
        </div>
        <div className={`${styles.box}`}>
          <div className={`${styles.textContainer}`}>
            <h2>Engagement {">"} Confort </h2>
            <p>
              Un corps engagé crée une conscience engagée. Le tapis n’est pas
              une fin, c’est un point de départ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
