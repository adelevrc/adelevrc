import style from "./flippedCard.module.scss";

interface CardProps {
  info: React.ReactNode;
  button: React.ReactNode;
  online?: boolean;
  subtitle: string;
}

const Card = ({ info, button, online = true, subtitle }: CardProps) => {
  return (
    <div className={style.card}>
      <div className={style.firstSection}>
        <p className={style.info}> {online ? "En ligne" : "Présentiel"}</p>
        <p> {subtitle}</p>
      </div>
      {info}
      {button}
    </div>
  );
};

export default Card;
