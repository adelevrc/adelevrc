"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import styles from "./title.module.scss";

const MainTitle = () => {
  const spansWrapperRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (!spansWrapperRef.current) return;

      const spans = Array.from(
        spansWrapperRef.current.querySelectorAll("span"),
      );

      gsap.set(spans, {
        opacity: 0,
        x: 100,
        position: "absolute",
      });

      const tl = gsap.timeline({ repeat: -1 });

      spans.forEach((span) => {
        tl.to(span, {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
        }).to(span, {
          opacity: 0,
          x: -100,
          duration: 0.6,
          ease: "power2.in",
          delay: 1,
        });
      });
    },
    { scope: spansWrapperRef },
  );
  return (
    <h1 className={styles.mainTitle}>
      <span ref={spansWrapperRef} className={styles.spanWrapper}>
        Découvre une pratique joyeuse de yoga qui augmente
        <span> ta force</span>
        <span> ta mobilité</span>
        <span> ton autonomie </span>
      </span>
    </h1>
  );
};

export default MainTitle;
