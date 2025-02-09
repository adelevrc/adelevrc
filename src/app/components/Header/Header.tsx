"use client";
import { useEffect, useState } from "react";
import styles from "./header.module.scss";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "../LangageSwitcher/LangageSwitcher";

const Header = () => {
  const t = useTranslations("Footer");
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = (e: MouseEvent) => {
    if (
      menuOpen &&
      !document.getElementById("nav")?.contains(e.target as Node)
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeMenu);
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <button
        className={styles.menuIcon}
        onClick={toggleMenu}
        aria-expanded={menuOpen}
        aria-label='Menu principal'
      >
        <div
          className={`${styles.line} ${styles.lineOne} ${menuOpen ? styles.lineOneRotation : ""}`}
        />
        <div
          className={`${styles.line} ${styles.lineTwo} ${menuOpen ? styles.lineTwoRotation : ""}`}
        />
        <div
          className={`${styles.line} ${styles.lineThree} ${menuOpen ? styles.lineThreeRotation : ""}`}
        />
      </button>
      <Link href={"/"} className={styles.logo}>
        <p className={styles.name}> Adèle Vercaygne</p>
      </Link>

      <nav
        className={`${styles.nav} ${menuOpen ? styles.open : ""}`}
        id='nav'
        aria-hidden={!menuOpen}
        role='menu'
      >
        <ul>
          <li>
            <Link
              href={"/about"}
              onClick={handleLinkClick}
              tabIndex={menuOpen ? 0 : -1}
            >
              {t("about")}
            </Link>
          </li>
          <li>
            <Link
              href={"/method"}
              onClick={handleLinkClick}
              tabIndex={menuOpen ? 0 : -1}
            >
              {t("method")}
            </Link>
          </li>
          <li>
            <Link
              href={"/lessons"}
              onClick={handleLinkClick}
              tabIndex={menuOpen ? 0 : -1}
            >
              {t("lessons")}
            </Link>
          </li>
          <li>
            <Link
              href={"/book-class"}
              onClick={handleLinkClick}
              tabIndex={menuOpen ? 0 : -1}
            >
              {t("bookClass")}
            </Link>
          </li>
          <li>
            <Link
              href={"/freebies"}
              onClick={handleLinkClick}
              tabIndex={menuOpen ? 0 : -1}
            >
              {t("freebies")}
            </Link>
          </li>
          <li>
            <Link
              href={"/contact"}
              onClick={handleLinkClick}
              tabIndex={menuOpen ? 0 : -1}
            >
              {t("contact")}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
