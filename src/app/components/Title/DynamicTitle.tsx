"use client";
import { useGSAP } from "@gsap/react";
import { ReactNode, useRef } from "react";
import styles from "./title.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface TitleProps {
  as?: HeadingTag;
  text: ReactNode;
  movingText?: ReactNode;
  color?: string;
}
const Title = ({ as = "h2", text, movingText, color }: TitleProps) => {
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const Heading = as;

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    if (!textRef.current) return;

    const split = new SplitText(textRef.current, {
      type: "words,chars",
      linesClass: "split-line",
    });

    gsap.from(split.chars, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "center 80%",
        toggleActions: "restart pause resume reverse",
      },
      duration: 0.6,
      ease: "circ.out",
      y: 80,
      opacity: 0,
      stagger: 0.02,
    });

    return () => split.revert();
  }, []);

  return (
    <Heading className={styles.heading}>
      {text}{" "}
      {movingText && (
        <span
          ref={textRef}
          className={`${styles.movingText} ${color ? styles[color] : ""}`}
        >
          {movingText}
        </span>
      )}
    </Heading>
  );
};

export default Title;
