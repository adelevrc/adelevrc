import Link from "next/link";
import style from "./link.module.scss";
interface ButtonLinkProps {
  title: string;
  href: string;
  reversed?: boolean;
  targetBlank?: boolean;
}
const ButtonLink = ({
  title,
  href,
  reversed,
  targetBlank,
}: ButtonLinkProps) => {
  return (
    <Link
      className={` ${reversed && style.reversed} ${style.link}`}
      href={"/" + href}
      target={targetBlank ? "_blank" : "_self"}
    >
      {title}
    </Link>
  );
};

export default ButtonLink;
