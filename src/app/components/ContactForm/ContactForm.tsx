"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./contactForm.module.scss";
import { useTranslations } from "next-intl";

const ContactForm = () => {
  const t = useTranslations("Freebies.form");
  const { register, handleSubmit, watch } = useForm();
  const [emailIsPending, setEmailIsPending] = useState(false);
  const [emailIsSend, setEmailIsSend] = useState(false);
  const [emailIsNotSend, setEmailIsNotSend] = useState(false);

  const onSubmit = async (data: any) => {
    setEmailIsPending(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
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

  const watchFields = watch(["lastname", "firstname", "email", "message"]);
  const isFormValid =
    watchFields[0] && watchFields[1] && watchFields[2] && watchFields[3];
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputContainer}>
        <input
          id='lastname'
          type='text'
          placeholder=' '
          {...register("lastname", { required: t("requiredName") })}
        />
        <label htmlFor='lastname'>{t("lastName")}</label>
      </div>
      <div className={styles.inputContainer}>
        <input
          id='firstname'
          type='text'
          placeholder=' '
          {...register("firstname", { required: t("requiredFirstName") })}
        />
        <label htmlFor='firstname'>{t("firstName")}</label>
      </div>
      <div className={styles.inputContainer}>
        <input
          id='email'
          type='email'
          placeholder=' '
          {...register("email", { required: t("requiredEmail") })}
        />
        <label htmlFor='email'>{t("email")}</label>
      </div>
      <div className={styles.inputContainer}>
        <textarea
          id='message'
          placeholder=' '
          {...register("message", { required: t("requiredMessage") })}
        />
        <label htmlFor='message'>{t("message")}</label>
      </div>
      <div className={styles.newsletter}>
        <label htmlFor='newsletter'>
          <input id='newsletter' type='checkbox' {...register("newsletter")} />
          {t("subscribeNewsletter")}
        </label>
      </div>
      {emailIsNotSend && (
        <div className={styles.error}>{t("errorOccured")}</div>
      )}
      {emailIsSend && <div className={styles.success}>{t("success")} </div>}
      {emailIsPending && (
        <div className={styles.loaderContainer}>
          <div className={styles.loader}></div>
        </div>
      )}
      {!emailIsNotSend && !emailIsSend && !emailIsPending && (
        <button type='submit' disabled={!isFormValid}>
          {t("send")}
        </button>
      )}
    </form>
  );
};

export default ContactForm;
