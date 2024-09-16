import style from "./link.module.scss";
interface ButtonLinkProps {
  title: string;
  href: string;
  reversed?: boolean;
}
const ButtonLink = ({ title, href, reversed }: ButtonLinkProps) => {
  return (
    <a className={`${reversed && style.reversed} ${style.link}`} href={href}>
      {title}
    </a>
  );
};

export default ButtonLink;
