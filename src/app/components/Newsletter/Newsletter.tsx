"use client";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client/react";
import styles from "./newsletter.module.scss";
import { SUBSCRIBE_NEWSLETTER_MUTATION } from "@/graphql/queries/newsletter.mutation";
import {
  SubscribeNewsletterInput,
  SubscribeNewsletterResponse,
} from "@/graphql/types/newsletter.types";

const Newsletter = () => {
  const { register, watch, handleSubmit } = useForm();

  const [
    subscribeNewsletter,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation<
    SubscribeNewsletterResponse,
    { input: SubscribeNewsletterInput }
  >(SUBSCRIBE_NEWSLETTER_MUTATION);

  return (
    <div className={styles.container}>
      <div className={styles.newsletter}>
        <div className={styles.info}>
          <p>Gratuit</p>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} />
              Annonce du thème du mois
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} />
              Un conseil de neurosciences + mise en pratique ou un debunk de
              mythe
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} />
              Avant première sur les cours exceptionnels, retraites, atelier...
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} />
              Annonce des réductions en exclusivité
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} />
              Challenge mensuel
            </li>
          </ul>
        </div>
        {/*         <Form
          handleSubmit={handleSubmit}
          emailStatus={emailStatus}
          onSubmit={onSubmit}
          register={register}
          watch={watch}
        /> */}
      </div>
    </div>
  );
};
export default Newsletter;
