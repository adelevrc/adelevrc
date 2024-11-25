import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import { EmailStatus } from "./Freebies";
import styles from "./freebies.module.scss";

interface FormProps {
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
  onSubmit: (data: any) => Promise<void>;
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  emailStatus: EmailStatus;
}
const Form = ({
  handleSubmit,
  onSubmit,
  register,
  watch,
  emailStatus,
}: FormProps) => {
  const watchFields = watch();
  const isFormValid =
    watchFields.email && watchFields.lastname && watchFields.firstname;

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
          {...register("email", {
            required: "L'email est requis",
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Adresse email invalide",
            },
          })}
        />
        <label htmlFor='email'>Email</label>
      </div>
      {emailStatus.isNotSend && (
        <div className={styles.error}>Une erreur s'est produite</div>
      )}
      {emailStatus.isSend && <div className={styles.success}> Succès ! </div>}
      {emailStatus.isPending && (
        <div className={styles.loaderContainer}>
          <div className={styles.loader}></div>
        </div>
      )}
      {!emailStatus.isNotSend &&
        !emailStatus.isSend &&
        !emailStatus.isPending && (
          <button type='submit' disabled={!isFormValid}>
            Envoyer
          </button>
        )}
    </form>
  );
};

export default Form;
