"use client";
import styles from "./bookClass.module.scss";
import { useEffect } from "react";

const BookClass = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.acuityscheduling.com/js/embed.js";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className={styles.main}>
      <div>
        <h1>Réserver un cours de yoga ou de méditation</h1>
        <h2>Comment réserver ?</h2>
        <p>
          Réservez directement un cours de yoga en ligne ou une séance de
          méditation via le formulaire ci-dessous.
        </p>
        <p>
          Pour prendre un premier rendez-vous pour un cours individuel, merci de
          sélectionner "Premier rendez-vous".
        </p>
      </div>

      <iframe
        src='https://app.acuityscheduling.com/schedule.php?owner=33520682&ref=embedded_csp'
        title='Prendre rendez-vous'
        width='100%'
        height='800'
      ></iframe>
    </main>
  );
};

export default BookClass;
