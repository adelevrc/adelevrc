import Image from "next/image";
import style from "./contactMe.module.scss";
import image from "../../images/warrior3.webp";
import ButtonLink from "../Button/Link/Link";

const ContactMe = () => {
  return (
    <section className={style.contactMe}>
      <Image
        className={style.picture}
        src={image}
        width={200}
        height={200}
        alt='Picture of the author'
      />
      <p>
        Vous avez des questions, besoin de plus d'informations ou envie de
        réserver un cours ? Je suis là pour vous aider ! Que ce soit pour
        discuter de vos besoins spécifiques, planifier une séance ou simplement
        en savoir plus sur mes cours, n'hésitez pas à me contacter.
      </p>
      <ButtonLink title={"Contact"} href={"contact"} reversed />
    </section>
  );
};

export default ContactMe;
