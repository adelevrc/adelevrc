import styles from "./coloredContainer.module.scss";

interface Props {
  children: React.ReactNode;
  color?: string;
}
const ColoredContainer = ({ children, color }: Props) => {
  return (
    <li
      className={`${styles.container} ${color ? styles[`color-${color}`] : ""}`}
    >
      {children}
    </li>
  );
};

export default ColoredContainer;
