"use client";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import Form from "../Popin/Freebies/Form";
import styles from "./newsletter.module.scss";
import useEmailStatus from "@/app/hooks/useEmailStatus";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const Newsletter = () => {
  const { emailStatus, setEmailStatus } = useEmailStatus();
  const { register, watch, handleSubmit } = useForm();
  const t = useTranslations("Newsletter");
  const { locale } = useParams();

  const onSubmit = async (data: any) => {
    setEmailStatus((prevState) => ({
      ...prevState,
      isPending: true,
    }));
    const dataForSubscription = {
      email: watch("email"),
      language: locale,
    };
    const responseFromSubscribing = await fetch("../../api/subscribe", {
      body: JSON.stringify(dataForSubscription),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });
    const emailSent = await fetch("../../api/registration-confirmation", {
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });
    if (responseFromSubscribing.ok && emailSent.ok) {
      setEmailStatus((prevState) => ({
        ...prevState,
        isSend: true,
        isPending: false,
      }));
    } else {
      setEmailStatus((prevState) => ({
        ...prevState,
        isNotSend: true,
        isPending: false,
      }));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.newsletter}>
        <div className={styles.info}>
          <p>{t("free")}</p>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} />
              {t("monthlyTheme")}
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} />
              {t("neuroscienceTip")}
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} />
              {t("exclusivePreview")}
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} />
              {t("exclusiveDiscounts")}
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} />
              {t("monthlyChallenge")}
            </li>
          </ul>
        </div>
        <Form
          handleSubmit={handleSubmit}
          emailStatus={emailStatus}
          onSubmit={onSubmit}
          register={register}
          watch={watch}
        />
      </div>
    </div>
  );
};
export default Newsletter;
