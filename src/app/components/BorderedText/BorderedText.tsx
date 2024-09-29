import styles from "./borderedText.module.scss";
interface BorderedTextProps {
  text: string;
  isReversed?: boolean;
}
const BorderedText = ({ text, isReversed }: BorderedTextProps) => {
  return (
    <span className={`${isReversed ? styles.reversed : ""} ${styles.text}`}>
      {text}
    </span>
  );
};
export default BorderedText;
