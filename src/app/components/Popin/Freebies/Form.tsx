import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import { EmailStatus } from "./Freebies";
import styles from "./freebies.module.scss";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("Freebies.form");
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
          {...register("email", {
            required: t("requiredEmail"),
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: t("invalidEmail"),
            },
          })}
        />
        <label htmlFor='email'>{t("email")}</label>
      </div>
      {emailStatus.isNotSend && (
        <div className={styles.error}>{t("errorOccured")}</div>
      )}
      {emailStatus.isSend && (
        <div className={styles.success}>{t("success")} </div>
      )}
      {emailStatus.isPending && (
        <div className={styles.loaderContainer}>
          <div className={styles.loader}></div>
        </div>
      )}
      {!emailStatus.isNotSend &&
        !emailStatus.isSend &&
        !emailStatus.isPending && (
          <button type='submit' disabled={!isFormValid}>
            {t("send")}
          </button>
        )}
    </form>
  );
};

export default Form;
