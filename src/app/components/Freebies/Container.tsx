"use client";

import { useState } from "react";
import FreebiesPopin from "../Popin/Freebies/Freebies";
import PageHeader from "../PageHeader/PageHeader";
import StyledContainer from "../StyledContainer/StyledContainer";

export interface Popin {
  name: string;
  isOpen: boolean;
}

const Container = () => {
  const [popin, setPopin] = useState<Popin>({ isOpen: false, name: "" });

  const handlePopinOpening = (name: string) => {
    setPopin({ name, isOpen: true });
  };
  return (
    <>
      {popin.isOpen && <FreebiesPopin setPopin={setPopin} popin={popin} />}
      <PageHeader title="Freebies" />
      <p>Qui n'aime pas les cadeaux ?!</p>
      <p>Sur cette page, retrouvez tous les programmes, astuces, techniques, challenges autour du yoga, de la neurologie et de la mobilité.</p>
      <h3>Liste des freebies :</h3>
      <ul>
        <li onClick={() => handlePopinOpening("5-tips-to-be-calm")}>
          <StyledContainer children={<span>5 techniques pour rester calme dans toutes les situations</span>} />
        </li>
      </ul>
    </>
  );
};
export default Container;
