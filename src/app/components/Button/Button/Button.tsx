import style from "./button.module.scss";
export type ColorOptions = "green" | "white" | "red";
interface Button {
  title: string;
  onClick: () => void;
  color?: ColorOptions;
}
const Button = ({ title, onClick, color = "red" }: Button) => {
  return (
    <button
      className={`${style.button} ${color ? style[`color-${color}`] : ""}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
