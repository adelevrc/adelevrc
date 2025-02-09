import { useTranslations } from "next-intl";
import style from "./flippedCard.module.scss";

interface CardProps {
  info: React.ReactNode;
  button: React.ReactNode;
  online?: boolean;
  subtitle: string;
}

const Card = ({ info, button, online = true, subtitle }: CardProps) => {
  const t = useTranslations("HomePage.offers");

  return (
    <div className={style.card}>
      <div className={style.firstSection}>
        <p className={style.info}> {online ? t("online") : t("inPerson")}</p>
        <p> {subtitle}</p>
      </div>
      {info}
      {button}
    </div>
  );
};

export default Card;
