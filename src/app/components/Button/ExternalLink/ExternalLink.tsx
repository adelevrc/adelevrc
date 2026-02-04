import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./externalLink.module.scss";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface ExternaLinkProps {
  title: string;
  link: string;
}
const ExternalLink = ({ link, title }: ExternaLinkProps) => {
  return (
    <a className={styles.link} href={link} target='_blank'>
      {title}
      <FontAwesomeIcon icon={faArrowRight} />
    </a>
  );
};

export default ExternalLink;
