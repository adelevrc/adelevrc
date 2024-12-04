"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import style from "./footer.module.scss";

const Footer = () => {
  const [emailIsPending, setEmailIsPending] = useState(false);
  const [emailIsSend, setEmailIsSend] = useState(false);
  const [emailIsNotSend, setEmailIsNotSend] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = (event.currentTarget.elements as any).email.value;
    setEmailIsPending(true);
    try {
      const response = await fetch("/api/subscribe", {
        body: JSON.stringify(email),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });
      const result = await response.json();
      if (result.message === "200") {
        setEmailIsSend(true);
        setEmailIsPending(false);
      } else {
        setEmailIsNotSend(true);
        setEmailIsPending(false);
      }
    } catch (error) {
      setEmailIsNotSend(true);
    }
  };

  return (
    <footer className={style.footer}>
      <h1> Adèle Vercaygne </h1>
      <div className={style.firstSection}>
        <ul className={style.pagesList}>
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
            <Link href={"reserver-cours"}>Réserver un cours</Link>
          </li>
          <li>
            <Link href={"contact"}> Contact </Link>
          </li>
        </ul>
        <div className={style.newsletter}>
          <h2> S'inscrire à la newsletter</h2>
          {emailIsNotSend && (
            <div className={style.error}>Une erreur s'est produite</div>
          )}
          {emailIsSend && (
            <div className={style.success}>
              Vous êtes inscrit à la newsletter !
            </div>
          )}
          {emailIsPending && (
            <div className={style.loaderContainer}>
              <div className={style.loader}></div>
            </div>
          )}
          {!emailIsNotSend && !emailIsSend && !emailIsPending && (
            <form onSubmit={onSubmit}>
              <input
                name='email'
                placeholder='Écrivez votre email'
                required
                type='email'
              ></input>
              <label>Email</label>
              <button type='submit' className={style.arrowButton}>
                →
              </button>
            </form>
          )}
        </div>
      </div>
      <div className={style.socialMedia}>
        <ul>
          <li>
            <a
              href='https://www.instagram.com/adelevrc_yoga/'
              aria-label='Visitez mon profil instagram'
              target='_blank'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24px'
                height='24px'
                viewBox='0 0 24 24'
              >
                <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
              </svg>
            </a>
          </li>
          <li>
            <a
              href='https://www.youtube.com/@adelevrc'
              aria-label='Visitez mon compte Youtube'
              target='_blank'
            >
              <svg
                width='40px'
                height='40px'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z' />
              </svg>
            </a>
          </li>
          <li>
            <a
              href='https://www.tiktok.com/@adelevrc'
              aria-label='Visitez mon compte Tiktok'
              target='_blank'
            >
              <svg
                width='30px'
                height='30px'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z' />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div className={style.generalConditions}>
        <span> Adèle Vercaygne 2024</span> - <span> Tous droits réservés </span>
        -{" "}
        <span>
          {" "}
          <Link href={"/conditions-generales"}>Conditions générales</Link>{" "}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
