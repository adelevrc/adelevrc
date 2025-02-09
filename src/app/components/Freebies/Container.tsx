"use client";

import { useTranslations } from "next-intl";
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
  const t = useTranslations("Freebies");

  const handlePopinOpening = (name: string) => {
    setPopin({ name, isOpen: true });
  };
  return (
    <>
      {popin.isOpen && <FreebiesPopin setPopin={setPopin} popin={popin} />}
      <PageHeader title={t("title")} />
      <p>{t("p1")}</p>
      <p>{t("p2")}</p>
      <h3>{t("listTitle")}</h3>
      <ul>
        <li onClick={() => handlePopinOpening("5-tips-to-be-calm")}>
          <StyledContainer children={<span>{t("item1")}</span>} />
        </li>
      </ul>
    </>
  );
};
export default Container;
