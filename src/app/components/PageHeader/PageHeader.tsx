import styles from "./pageHeader.module.scss";

interface PageHeaderProps {
  title: string | React.ReactNode;
  color?: string;
  subtitles?: string | React.ReactNode;
}
const PageHeader = ({ title, color, subtitles }: PageHeaderProps) => {
  return (
    <div className={`${styles.container} ${color ? styles[color] : ""}`}>
      <h1 className={styles.title}>{title}</h1>
      <p> {subtitles}</p>
    </div>
  );
};

export default PageHeader;
