import ButtonLink from "../Button/Link/Link";
import styles from "./header.module.scss";
const Header = () => {
  return (
    <header className={styles.header}>
      <ButtonLink title='Ma méthode' href='#' />
      <ButtonLink title='A propos' href='#' />
    </header>
  );
};
export default Header;
