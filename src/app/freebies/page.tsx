"use client";
import { useState } from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import FreebiesPopin from "../components/Popin/Freebies/Freebies";
import StyledContainer from "../components/StyledContainer/StyledContainer";
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
      <PageHeader title={"Freebies"} />
      <p> Qui n'aime pas les cadeaux ?! </p>
      <p>
        Sur cette page, retrouvez tous les programmes, astuces, techniques,
        challenges autour du yoga, de la neurologie et de la mobilité.
      </p>
      <h3> Liste des freebies : </h3>
      <ul>
        <li onClick={() => handlePopinOpening("5-tips-to-be-calm")}>
          <StyledContainer
            children={
              <span>
                5 techniques pour rester calme dans toutes les situations
              </span>
            }
          />
        </li>
      </ul>
    </main>
  );
};

export default Freebies;
