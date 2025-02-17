import styles from "./externalLink.module.scss";

interface ExternaLinkProps {
  title: string;
  link: string;
}
const ExternalLink = ({ link, title }: ExternaLinkProps) => {
  return (
    <a className={styles.link} href={link} target='_blank'>
      {title}
    </a>
  );
};

export default ExternalLink;
