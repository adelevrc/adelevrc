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

  return (
    <header className={styles.header}>
      <button
        className={styles.menuIcon}
        onClick={toggleMenu}
        aria-expanded={menuOpen}
        aria-label='Menu principal'
      >
        <div />
        <div />
        <div />
      </button>
      <h1> Adèle Vercaygne</h1>
      <nav
        className={`${styles.nav} ${menuOpen ? styles.open : ""}`}
        id='nav'
        aria-hidden={!menuOpen}
        role='menu'
      >
        <ul>
          <li>
            <Link href={"/"}>Accueil </Link>
          </li>
          <li>
            <Link href={"a-propos"}>À propos </Link>
          </li>
          <li>
            <Link href={"ma-methode"}> Méthode</Link>
          </li>
          <li>
            <Link href={"les-cours"}>Les cours </Link>
          </li>
          <li>
            <Link href={"#"}>Réserver un cours</Link>
          </li>
          <li>
            <Link href={"contact"}> Contact </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
