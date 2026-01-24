"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";
import style from "./description.module.scss";

const Description = () => {
  const textRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const text = textRef.current;
    if (!text) return;

    // Split du texte
    const split = new SplitText(text, {
      type: "words,chars",
      linesClass: "split-line",
    });

    // Animation GSAP
    gsap.from(split.chars, {
      scrollTrigger: {
        trigger: text,
        start: "center 80%",
        toggleActions: "restart pause resume reverse",
      },
      duration: 0.6,
      ease: "circ.out",
      y: 80,
      opacity: 0,
      stagger: 0.02,
    });

    // Cleanup React / Next
    return () => {
      split.revert();
    };
  }, []);

  return (
    <section className={style.description}>
      <h2>
        Bouger <span ref={textRef}>avec intention</span>
      </h2>
      <p>Un yoga vivant, engagé et profondément humain.</p>
    </section>
  );
};

export default Description;
