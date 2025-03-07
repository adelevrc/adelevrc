"use client";
import ExternalLink from "@/app/components/Button/ExternalLink/ExternalLink";
import PageHeader from "@/app/components/PageHeader/PageHeader";
import pic_adele from "@/app/images/profile_pic.webp";
import Image from "next/image";
import { Fragment, useState } from "react";
import { useTranslations } from "next-intl";
import styles from "./workshop.module.scss";

interface Props {
  title: string;
  content: string;
}
const Accordion = ({ title, content }: Props) => {
  const [isActive, setIsActive] = useState(false);
  const t = useTranslations("Workshop");

  return (
    <div className={`${styles.accordionItem} ${isActive ? styles.active : ""}`}>
      <div
        className={styles.accordionTitle}
        onClick={() => setIsActive(!isActive)}
      >
        {title}
        <button className={isActive ? styles.arrowUp : styles.arrowDown} />
      </div>
      <div className={styles.accordionContent}>
        {content.includes(t("faq4.content")) ? (
          <div className={styles.link}>
            {content}{" "}
            <ExternalLink
              title={t("bookWorkshop")}
              link='https://bookeo.com/adelevrc?type=42559HFNHT319570D9CA7F'
            />
          </div>
        ) : (
          content
        )}
      </div>
    </div>
  );
};

const WorkshopPage = () => {
  const t = useTranslations("Workshop");

  const data = [
    {
      title: t("faq1.title"),
      content: t("faq1.content"),
    },
    {
      title: t("faq2.title"),
      content: t("faq2.content"),
    },
    {
      title: t("faq3.title"),
      content: t("faq3.content"),
    },
    {
      title: t("faq4.title"),
      content: t("faq4.content"),
    },
  ];

  return (
    <main className={styles.main}>
      <PageHeader title={t("header")} />
      <p>{t("intro")}</p>
      <div className={styles.workshop}>
        <h2>{t("workshopTitle")}</h2>
        <h3>{t("workshopSubtitle")}</h3>
        <div className={styles.date}>
          <p>{t("workshopDate")}</p>
          <p>{t("workshopTime")}</p>
          <p>{t("workshopLocation")}</p>
          <ExternalLink
            title={t("bookWorkshop")}
            link='https://bookeo.com/adelevrc?type=42559HFNHT319570D9CA7F'
          />
        </div>

        <p>{t("workshopDescription1")}</p>
        <p>{t("workshopDescription2")}</p>
        <div className={styles.how}>
          <h3>{t("howTitle")}</h3>
          <p>{t("howDescription1")}</p>
          <p>{t("howDescription2")}</p>
          <p>{t("howDescription3")}</p>
          <ExternalLink
            title={t("bookWorkshop")}
            link='https://bookeo.com/adelevrc?type=42559HFNHT319570D9CA7F'
          />
        </div>
        <div className={styles.how}>
          <h3>{t("costTitle")}</h3>
          <p>{t("costDescription")}</p>
          <ExternalLink
            title={t("bookWorkshop")}
            link='https://bookeo.com/adelevrc?type=42559HFNHT319570D9CA7F'
          />
        </div>

        <h3>{t("expertsTitle")}</h3>
        <ul className={styles.experts}>
          <li className={styles.lucie}>
            <h4>{t("lucieName")}</h4>
            <strong>{t("lucieTitle")}</strong>
            <p></p>
          </li>
          <li className={styles.adele}>
            <div className={styles.info}>
              <Image src={pic_adele} alt='' />
              <h4>{t("adeleName")}</h4>
            </div>
            <p>
              <strong>{t("adeleTitle")}</strong>
            </p>
            <p>{t("adeleDescription1")}</p>
            <p>{t("adeleDescription2")}</p>
          </li>
        </ul>
        <h3>{t("faqTitle")}</h3>
        {data.map((item) => (
          <Fragment key={item.title}>
            <Accordion title={item.title} content={item.content} />
          </Fragment>
        ))}
      </div>
    </main>
  );
};

export default WorkshopPage;
