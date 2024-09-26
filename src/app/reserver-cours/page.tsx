"use client";
import styles from "./bookClass.module.scss";
import { useEffect } from "react";

const BookClass = () => {
  useEffect(() => {
    // Ensure the script runs after the component has mounted
    const script = document.createElement("script");
    script.src = "https://embed.acuityscheduling.com/js/embed.js";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    // Clean up script if component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className={styles.main}>
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
