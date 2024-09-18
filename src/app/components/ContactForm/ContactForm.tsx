"use client";
import { useForm } from "react-hook-form";
import styles from "./contactForm.module.scss";
import Button from "../Button/Button/Button";
import { useState } from "react";
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
      if (response.ok) {
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

  const selectedContactMethod = watch("contactMethod");
  const watchFields = watch([
    "lastname",
    "firstname",
    "contactMethod",
    "email",
    "phoneNumber",
    "message",
  ]);
  const isFormValid =
    watchFields[0] &&
    watchFields[1] &&
    watchFields[2] &&
    ((selectedContactMethod === "email" && watchFields[3]) ||
      (selectedContactMethod === "phoneNumber" && watchFields[4])) &&
    watchFields[5];

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
        <select
          id='contactMethod'
          {...register("contactMethod", {
            required: "Veuillez choisir une méthode de contact",
          })}
        >
          <option value='email'>Email</option>
          <option value='phoneNumber'>Téléphone</option>
        </select>
        <label htmlFor='contactMethod'>Préférence de contact</label>
      </div>
      {selectedContactMethod === "email" && (
        <div className={styles.inputContainer}>
          <input
            id='email'
            type='email'
            placeholder=' '
            {...register("email", { required: "L'email est requis" })}
          />
          <label htmlFor='email'>Email</label>
        </div>
      )}
      {selectedContactMethod === "phoneNumber" && (
        <div className={styles.inputContainer}>
          <input
            id='phoneNumber'
            type='tel'
            placeholder=' '
            {...register("phoneNumber", {
              required: "Le numéro de téléphone est requis",
            })}
          />
          <label htmlFor='phoneNumber'>Téléphone</label>
        </div>
      )}

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
          Je m'abonne à la newsletter
        </label>
      </div>
      {emailIsNotSend && (
        <div className={styles.error}>Une erreur s'est produite</div>
      )}
      {emailIsSend && (
        <div className={styles.success}>
          Vous êtes inscrit à la newsletter !
        </div>
      )}
      {emailIsPending && (
        <div className={styles.loaderContainer}>
          <div className={styles.loader}></div>
        </div>
      )}
      {!emailIsNotSend && !emailIsSend && !emailIsPending && (
        <button type='submit' disabled={!isFormValid}>
          Envoyer
        </button>
      )}
    </form>
  );
};

export default ContactForm;