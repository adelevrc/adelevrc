"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./header.module.scss";

const Header = () => {
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
    <header className={`${styles.header} ${menuOpen ? styles.headerOpen : ""}`}>
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
      <div></div>
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
              À propos
            </Link>
          </li>
          <li>
            <Link
              href={"/method"}
              onClick={handleLinkClick}
              tabIndex={menuOpen ? 0 : -1}
            >
              Méthode
            </Link>
          </li>
          <li>
            <Link
              href={"/classes"}
              onClick={handleLinkClick}
              tabIndex={menuOpen ? 0 : -1}
            >
              Les cours
            </Link>
          </li>
          <li>
            <Link
              href={"/contact"}
              onClick={handleLinkClick}
              tabIndex={menuOpen ? 0 : -1}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
