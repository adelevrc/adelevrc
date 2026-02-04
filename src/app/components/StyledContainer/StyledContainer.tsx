"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import styles from "./styledContainer.module.scss";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StackedBoxes = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const box1Ref = useRef<HTMLDivElement>(null);
  const box2Ref = useRef<HTMLDivElement>(null);
  const box3Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const boxes = [box1Ref.current, box2Ref.current, box3Ref.current];

      // état initial
      gsap.set(boxes[0], { rotation: 0, zIndex: 3 });
      gsap.set(boxes[1], { rotation: -6, zIndex: 2 });
      gsap.set(boxes[2], { rotation: -12, zIndex: 1 });

      // animation au scroll
      gsap.to(boxes[1], {
        rotation: 6,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(boxes[2], {
        rotation: 10,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className={styles.stack}>
      <div ref={box1Ref} className={styles.box}></div>
      <div ref={box2Ref} className={styles.box}></div>
      <div ref={box3Ref} className={styles.box}></div>
    </div>
  );
};

export default StackedBoxes;
