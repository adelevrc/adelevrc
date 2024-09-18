"use client";
import { useForm } from "react-hook-form";
import styles from "./contactForm.module.scss";
import Button from "../Button/Button/Button";
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log("RESPONSE", response);
      const result = await response.json();
      if (response.ok) {
        //alert(result.message);
        console.log("ok");
      } else {
        console.log("erreor");
      }
    } catch (error) {
      alert("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  const selectedContactMethod = watch("contactMethod");
  const watchFields = watch([
    "name",
    "firstname",
    "contactMethod",
    "email",
    "phoneNumber",
    "message",
  ]);
  const isFormValid =
    watchFields[0] && // name
    watchFields[1] && // firstname
    watchFields[2] && // contactMethod
    ((selectedContactMethod === "email" && watchFields[3]) || // email
      (selectedContactMethod === "phoneNumber" && watchFields[4])) && // phoneNumber
    watchFields[5]; // message

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputContainer}>
        <input
          id='name'
          type='text'
          placeholder=' '
          {...register("name", { required: "Le nom est requis" })}
        />
        <label htmlFor='name'>Nom</label>
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

      <button type='submit' disabled={!isFormValid}>
        Envoyer
      </button>
    </form>
  );
};

export default ContactForm;
