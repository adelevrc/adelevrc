import styles from "./styledContainer.module.scss";

interface StyledContainerPropx {
  children: React.ReactNode;
}
const StyledContainer = ({ children }: StyledContainerPropx) => {
  return <div className={styles.container}>{children}</div>;
};

export default StyledContainer;
