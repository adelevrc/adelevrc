import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import { Metadata } from "next";
import Image from "next/image";
import { Props } from "../[locale]/about/page";
import Banner from "../components/Banner/Banner";
import Description from "../components/Description/Description";
import FlowsDescription from "../components/FlowsDescription/FlowsDescription";
import Offers from "../components/Offers/Offers";
import image from "../images/plank.webp";
import style from "../styles/home.module.scss";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "HomePage.metaData" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

const Home = () => {
  const t = useTranslations("HomePage");
  return (
    <main className={style.main}>
      <Banner />
      <div className={style.imageContainer}>
        <Image
          className={style.picture}
          src={image}
          alt={t("image.image1")}
          priority
        />
      </div>
      <Description />
      <Offers />
      <FlowsDescription />
    </main>
  );
};

export default Home;
