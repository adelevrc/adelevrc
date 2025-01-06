"use client";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import Form from "../Popin/Freebies/Form";
import styles from "./newsletter.module.scss";
import useEmailStatus from "@/app/hooks/useEmailStatus";

const Newsletter = () => {
  const { emailStatus, setEmailStatus } = useEmailStatus();
  const { register, watch, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    setEmailStatus((prevState) => ({
      ...prevState,
      isPending: true,
    }));
    const responseFromSubscribing = await fetch("../../api/subscribe", {
      body: JSON.stringify(watch("email")),
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
          <p> Gratuit</p>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} color='#a42525' />
              Annonce du thème du mois
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} color='#a42525' />
              Un conseil de neurosciences + mise en pratique ou un debunk de
              mythe
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} color='#a42525' />
              Avant première sur les cours exceptionnels, retraites, atelier...
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} color='#a42525' />
              Annonce des réductions en exclusivité
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} color='#a42525' />
              Challenge mensuel
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
