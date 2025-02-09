"use client";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import styles from "./langageSwitcher.module.scss";

const LanguageSwitcher = () => {
  const pathname = usePathname();
  const { locale } = useParams();

  const newLocale = locale === "en" ? "fr" : "en";
  return (
    <Link
      className={styles.link}
      href={`/${newLocale}${pathname.replace(`/${locale}`, "")}`}
    >
      <button className={styles.button}>
        {locale === "en"
          ? "🇫🇷 Changer pour le français"
          : "🇬🇧 Switch to English"}
      </button>
    </Link>
  );
};

export default LanguageSwitcher;
