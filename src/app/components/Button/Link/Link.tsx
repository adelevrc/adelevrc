import style from "./link.module.scss";
interface ButtonLinkProps {
  title: string;
  href: string;
}
const ButtonLink = ({ title, href }: ButtonLinkProps) => {
  return (
    <a className={style.link} href={href}>
      {title}
    </a>
  );
};

export default ButtonLink;
