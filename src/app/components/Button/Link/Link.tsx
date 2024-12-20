import { ColorOptions } from "../Button/Button";
import style from "./link.module.scss";
interface ButtonLinkProps {
  title: string;
  href: string;
  reversed?: boolean;
  targetBlank?: boolean;
  color?: ColorOptions;
}
const ButtonLink = ({
  title,
  href,
  reversed,
  targetBlank,
  color = "green",
}: ButtonLinkProps) => {
  return (
    <a
      className={` ${reversed && style.reversed} ${style.link} ${
        color ? style[`color-${color}`] : ""
      }`}
      href={href}
      target={targetBlank ? "_blank" : "_self"}
    >
      {title}
    </a>
  );
};

export default ButtonLink;
