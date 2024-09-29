import ButtonLink from "../components/Button/Link/Link";
import PageHeader from "../components/PageHeader/PageHeader";
import image from "../images/photoOfMeStudio.webp";
import styles from "./lessons.module.scss";

export const metadata = {
  title: "Les offres de cours - Adèle Vercaygne",
  description:
    "Découvrez mes cours de yoga d'une heure, ainsi que des sessions de méditation et de respiration de 30 minutes. Explorez également ma chaîne YouTube pour plus de contenu.",
};

const Lessons = () => {
  return (
    <main className={styles.main}>
      <PageHeader
        title='Les cours'
        alt={
          "Moi, pratiquant le yoga, assise sur un tapis bleu, portant une brassière violette et un legging bleu foncé, souriant devant un mur blanc."
        }
        image={image}
      />
      <p className={styles.introduction}>
        Je propose différents types de cours, en ligne ou en présentiel, toute
        la semaine et le week-end.
      </p>
      <section>
        <article>
          <div>
            <h2> Les cours en ligne </h2>
            <p>
              Participez à mes cours de yoga en ligne et profitez de la pratique
              dans le confort de votre maison.
            </p>
            <p>
              Chaque session dure une heure, nécessitant uniquement une
              connexion internet et votre tapis de yoga.
            </p>
            <p>Les cours en ligne ont lieu :</p>
            <ul>
              <li>Mercredi de 19h à 20h</li>
              <li> Vendredi de 19h à 20h</li>
              <li>Dimanche de 10h à 11h</li>
            </ul>
          </div>

          {<ButtonLink href='/reserver-cours' title='Réserver un cours' />}
        </article>

        <article>
          <div>
            <h2> Les cours gratuits</h2>
            <p>
              Profitez de mes <strong>cours gratuits de yoga</strong> pour
              découvrir les bienfaits de la pratique sans engagement.
            </p>
            <ul>
              <li className={styles.timeline}>
                <span>Jeudi - 17h00</span>
                <span>
                  Cours de 5 à 30 minutes disponibles sur{" "}
                  <a
                    className={styles.underline}
                    target='_blank'
                    href='https://www.youtube.com/@adelevrc'
                  >
                    Youtube
                  </a>
                  .
                </span>
              </li>
              <li className={styles.timeline}>
                <span>Premier samedi du mois - 11h à 12h </span>
                <span> Prix libre - min 3 euros </span>
              </li>
            </ul>
          </div>

          {<ButtonLink href='/reserver-cours' title='Réserver sa place' />}
        </article>
        <article>
          <div>
            <h2>Les cours individuels de yoga</h2>
            <p>
              Les <strong>cours individuels</strong> vous permettent de
              progresser sur des points précis que vous souhaitez améliorer.
              Chaque séance est conçue sur mesure selon vos{" "}
              <strong>besoins</strong> et vos <strong>envies</strong>, et je me
              déplace chez vous pour votre confort.
            </p>
            <p>
              Pour garantir une expérience optimale, un premier contact en visio
              est nécessaire afin de mieux cerner vos attentes.
            </p>
            <p>
              Contactez-moi pour planifier votre premier cours individuel et
              découvrir les bienfaits d'une pratique personnalisée.
            </p>
          </div>

          <ButtonLink
            title={"Prendre rendez-vous"}
            href='https://app.acuityscheduling.com/schedule.php?owner=33520682&owner=33520682&appointmentType=69034331'
          />
        </article>
        <article>
          <div>
            <h2> Les cours de respiration et de méditation </h2>
            <p className={styles.timeline}>
              Tous les dimanches, de 19h à 19h30 en ligne.
            </p>
            <p>
              Cette demi heure vous permettre de sortir du blues du dimanche
              soir, mais aussi de gagner en réflexe pour lutter contre tout
              stress ou anxiété, et démarrer la semaine en forme et calme.
            </p>
          </div>
          <ButtonLink href='/reserver-cours' title='Réserver une méditation' />
        </article>
      </section>

      <article className={styles.others}>
        <h2>Autres offres</h2>
        <p>
          Je propose des <strong>cours de yoga en entreprise</strong>, le midi
          ou le soir, vers <strong>Saint Herblain</strong> et{" "}
          <strong>Saint Joseph de Porterie</strong>. Offrez à vos équipes une
          pause bien-être pour améliorer leur concentration et réduire le
          stress.
        </p>
        <p>
          Si vous êtes intéressé·e, merci de passer par le{" "}
          <strong>formulaire de contact</strong> pour discuter de vos besoins
          spécifiques et planifier une séance.
        </p>
        <ButtonLink title={"Me contacter"} href={"contact"} />
      </article>

      <section className={styles.moreInfo}>
        <h2 className={styles.reversed}>Besoins de plus d'informations ?</h2>
        <p>
          Il est normal de vouloir savoir si ce sont des <strong>cours</strong>{" "}
          qui sont faits pour vous, comment ils se déroulent ou de vouloir faire
          connaissance avec votre <strong>professeur</strong> avant. N'hésitez
          pas à me <strong>contacter</strong>, nous pourrons échanger par
          message, email ou de vive voix.
        </p>
        <div className={styles.buttonsSection}>
          <ButtonLink
            href='https://app.acuityscheduling.com/schedule.php?owner=33520682&owner=33520682&appointmentType=69034331'
            title='Prendre rendez-vous'
            targetBlank={true}
          />
          <ButtonLink title={"Envoyer un message"} href={"contact"} />
        </div>
      </section>
    </main>
  );
};

export default Lessons;
