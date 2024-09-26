import Image, { StaticImageData } from "next/image";
import styles from "./pageHeader.module.scss";

interface PageHeaderProps {
  alt: string;
  image: StaticImageData;
  title: string;
}
const PageHeader = ({ image, alt, title }: PageHeaderProps) => {
  return (
    <div className={styles.titleContainer}>
      <h1>{title}</h1>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={alt}
          layout='fill'
          objectFit='cover'
          loading='lazy'
        />
      </div>
    </div>
  );
};

export default PageHeader;
