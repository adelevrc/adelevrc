"use client";
import ExternalLink from "@/app/components/Button/ExternalLink/ExternalLink";
import PageHeader from "@/app/components/PageHeader/PageHeader";
import pic_adele from "@/app/images/profile_pic.webp";
import pic_lucie from "@/app/images/lucie_pic.webp";

import Image from "next/image";
import { Fragment, ReactNode, useState } from "react";
import { useTranslations } from "next-intl";
import styles from "./workshop.module.scss";

interface Props {
  title: string;
  content: string | ReactNode;
}
const Accordion = ({ title, content }: Props) => {
  const [isActive, setIsActive] = useState(false);
  const t = useTranslations("Workshop");

  const isString = (variable: any) => {
    return typeof variable === "string";
  };
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
        {content && isString(content) && content.includes(t("faq4.content")) ? (
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
    {
      title: t("faq5.title"),
      content: t("faq5.content"),
    },
    {
      title: t("faq6.title"),
      content: t.rich("faq6.content", {
        a: (chunks) => <a href='mailto:contact@adelevrc.com'>{chunks}</a>,
      }),
    },
  ];

  return (
    <main className={styles.main}>
      <PageHeader title={t("header")} />
      <p>{t("intro")}</p>
      <div className={styles.workshop}>
        <div className={styles.date}>
          <h2>{t("workshopTitle")}</h2>
          <h3>{t("workshopSubtitle")}</h3>
          <p>{t("workshopDate")}</p>
          <ExternalLink
            title={t("bookWorkshop")}
            link='https://bookeo.com/adelevrc?type=42559HFNHT319570D9CA7F'
          />
        </div>
        <p>{t("workshopDescription1")}</p>
        <p>{t("workshopDescription2")}</p>
        <ul className={styles.how}>
          <li>{t("howDescription1")}</li>
          <li>{t("howDescription2")}</li>
        </ul>
        <p>
          {t.rich("howDescription3", {
            span: (chunks) => <span>{chunks}</span>,
          })}
        </p>
        <img
          className={styles.gif}
          src='https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcG0xZHc5NGN2czJyZ2Y2ZThzdDRyMW14Zzc5cjNibm85bDdwODJ6MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/t3sZxY5zS5B0z5zMIz/giphy.gif'
          alt={t("gifAlt")}
        ></img>
        <ExternalLink
          title={t("bookWorkshop")}
          link='https://bookeo.com/adelevrc?type=42559HFNHT319570D9CA7F'
        />
        <h3>{t("expertsTitle")}</h3>
        <ul className={styles.experts}>
          <li className={styles.lucie}>
            <div className={styles.info}>
              <Image src={pic_lucie} alt={t("lucieAlt")} />
              <h4>{t("lucieName")}</h4>
            </div>
            <strong>{t("lucieTitle")}</strong>
            <p>{t("lucieDescription")}</p>
          </li>
          <li className={styles.adele}>
            <div className={styles.info}>
              <Image src={pic_adele} alt={t("adeleAlt")} />
              <h4>{t("adeleName")}</h4>
            </div>
            <p>
              <strong>{t("adeleTitle")}</strong>
            </p>
            <p>{t("adeleDescription1")}</p>
            <p>{t("adeleDescription2")}</p>
          </li>
        </ul>
        <div className={styles.needs}>
          <h3>{t("needsTitle")}</h3>
          <ul>
            <li>{t("need1")}</li>
            <li> {t("need2")}</li>
            <li> {t("need3")}</li>
          </ul>
          <p className={styles.align}>{t("requiredRegistration")}</p>
          <ExternalLink
            title={t("bookWorkshop")}
            link='https://bookeo.com/adelevrc?type=42559HFNHT319570D9CA7F'
          />
        </div>

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
