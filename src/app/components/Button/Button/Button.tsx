import style from "./button.module.scss";
interface Button {
  title: string;
  onClick: () => void;
}
const Button = ({ title, onClick }: Button) => {
  return (
    <button className={style.button} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
