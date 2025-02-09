"use client";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

const ReservationFrame = () => {
  const t = useTranslations("BookClass");

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
      src='https://app.acuityscheduling.com/schedule.php?owner=33520682&ref=embedded_csp&locale=fr'
      title={t("frameTitle")}
      width='100%'
      height='800'
    ></iframe>
  );
};

export default ReservationFrame;
