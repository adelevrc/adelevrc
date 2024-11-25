"use client";
import Image from "next/image";
import { useState } from "react";
import FreebiesPopin from "../components/Popin/Freebies/Freebies";
import FiveTechniquesIMG from "../images/freebies/Page-de-couverture.webp";
import styles from "./freebies.module.scss";

export interface Popin {
  name: string;
  isOpen: boolean;
}
const Freebies = () => {
  const [popin, setPopin] = useState<Popin>({ isOpen: false, name: "" });

  const handlePopinOpening = (name: string) => {
    setPopin({ name, isOpen: true });
  };

  return (
    <main className={styles.main}>
      {popin.isOpen && <FreebiesPopin setPopin={setPopin} popin={popin} />}
      <h1> Freebies</h1>
      <p> Qui n'aime pas les cadeaux ?! </p>
      <p>
        Sur cette page, retrouvez tous les programmes, astuces, techniques,
        challenges autour du yoga, de la neurologie et de la mobilité.
      </p>
      <h3> Liste des freebies : </h3>
      <ul>
        <li onClick={() => handlePopinOpening("5-tips-to-be-calm")}>
          <p>5 techniques pour se calmer dans toutes les situations</p>
          <Image src={FiveTechniquesIMG} alt='' />
        </li>
      </ul>
    </main>
  );
};

export default Freebies;
