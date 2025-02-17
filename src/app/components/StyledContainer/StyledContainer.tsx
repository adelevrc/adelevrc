import styles from "./styledContainer.module.scss";

interface StyledContainerPropx {
  children: React.ReactNode;
}
const StyledContainer = ({ children }: StyledContainerPropx) => {
  return <li className={styles.container}>{children}</li>;
};

export default StyledContainer;
