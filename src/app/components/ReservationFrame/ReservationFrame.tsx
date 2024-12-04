"use client";
import { useEffect } from "react";

const ReservationFrame = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.acuityscheduling.com/js/embed.js";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);
    return () => {
      document?.body?.removeChild(script);
    };
  }, []);
  return (
    <iframe
      src='https://app.acuityscheduling.com/schedule.php?owner=33520682&ref=embedded_csp'
      title='Prendre rendez-vous'
      width='100%'
      height='800'
    ></iframe>
  );
};

export default ReservationFrame;
