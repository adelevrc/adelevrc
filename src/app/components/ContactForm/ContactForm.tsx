"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./contactForm.module.scss";

const ContactForm = () => {
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
          {...register("lastname", { required: "Le nom est requis" })}
        />
        <label htmlFor='lastname'>Nom</label>
      </div>
      <div className={styles.inputContainer}>
        <input
          id='firstname'
          type='text'
          placeholder=' '
          {...register("firstname", { required: "Le prénom est requis" })}
        />
        <label htmlFor='firstname'>Prénom</label>
      </div>
      <div className={styles.inputContainer}>
        <input
          id='email'
          type='email'
          placeholder=' '
          {...register("email", { required: "L'email est requis" })}
        />
        <label htmlFor='email'>Email</label>
      </div>
      <div className={styles.inputContainer}>
        <textarea
          id='message'
          placeholder=' '
          {...register("message", { required: "Le message est requis" })}
        />
        <label htmlFor='message'>Message</label>
      </div>
      <div className={styles.newsletter}>
        <label htmlFor='newsletter'>
          <input id='newsletter' type='checkbox' {...register("newsletter")} />
          S'inscrire à la newsletter
        </label>
      </div>
      {emailIsNotSend && (
        <div className={styles.error}>Une erreur s'est produite</div>
      )}
      {emailIsSend && <div className={styles.success}>Succès !</div>}
      {emailIsPending && (
        <div className={styles.loaderContainer}>
          <div className={styles.loader}></div>
        </div>
      )}
      {!emailIsNotSend && !emailIsSend && !emailIsPending && (
        <button type='submit' disabled={!isFormValid}>
          envoyer
        </button>
      )}
    </form>
  );
};

export default ContactForm;
