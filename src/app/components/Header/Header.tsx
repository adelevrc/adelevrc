"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./header.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Header = () => {
  const headerRef = useRef<HTMLElement | null>(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const logo = document.querySelector(`.${styles.logo}`);
    const hamburger = document.querySelectorAll(`.${styles.line}`);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1200px)", () => {
      if (!headerRef.current) return;
      const links = headerRef.current.querySelectorAll("nav a");

      const show = () => {
        gsap.to(headerRef.current, {
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(60px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          color: "#000000",
          duration: 2.5,
          ease: "power4.out",
        });
        gsap.to([...links, logo], {
          color: "#000",
          duration: 2.5,
          ease: "power2.out",
        });
      };

      const hide = () => {
        gsap.to(headerRef.current, {
          clearProps: "backgroundColor,boxShadow,backdropFilter,border",
          duration: 0.1,
          ease: "power2.out",
        });

        gsap.to([...links, logo], {
          color: "#fff",
          duration: 0.1,
          ease: "power2.out",
        });
      };

      const st = ScrollTrigger.create({
        trigger: document.documentElement,
        start: "top+=300 top",
        onEnter: show,
        onLeaveBack: hide,
      });

      return () => {
        st.kill();
      };
    });

    mm.add("(max-width: 1199px)", () => {
      const show = () => {
        gsap.to(headerRef.current, {
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(60px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          duration: 0.25,
          color: "#000000",
          ease: "power12.out",
        });
        gsap.to(logo, {
          color: "#000",
          duration: 0.25,
          ease: "power2.out",
        });
        gsap.to([...hamburger], {
          backgroundColor: "#000",
          duration: 0.25,
          ease: "power2.out",
        });
      };

      const hide = () => {
        gsap.to(headerRef.current, {
          clearProps: "backgroundColor,boxShadow,backdropFilter,border",
          duration: 0,
          ease: "power2.out",
        });

        gsap.to([...hamburger, logo], {
          color: "#fff",
          duration: 0,
          ease: "power2.out",
        });
        gsap.to(hamburger, {
          backgroundColor: "#fff",
          duration: 0,
          ease: "power2.out",
        });
      };

      const st = ScrollTrigger.create({
        trigger: headerRef.current,
        start: "top+10 top",
        onEnter: show,
        onLeaveBack: hide,
      });

      return () => {
        st.kill();
      };
    });

    return () => mm.revert();
  }, []);

  useEffect(() => {
    if (menuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.addEventListener("click", closeMenu);

      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        window.scrollTo(0, scrollY);
        document.removeEventListener("click", closeMenu);

        // 🔥 Force le refresh du ScrollTrigger APRÈS le scroll
        requestAnimationFrame(() => {
          ScrollTrigger.refresh(true);
        });
      };
    }
  }, [menuOpen]);

  const closeMenu = (e: MouseEvent) => {
    if (
      menuOpen &&
      !document.getElementById("nav")?.contains(e.target as Node)
    ) {
      setMenuOpen(false);
    }
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`${styles.header} ${menuOpen ? styles.headerOpen : ""}`}
    >
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
