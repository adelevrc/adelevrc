import Link from "next/link";
import style from "./link.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
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
      <FontAwesomeIcon icon={faArrowRight} />
    </Link>
  );
};

export default ButtonLink;
