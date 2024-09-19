import ButtonLink from "../components/Button/Link/Link";
import PageHeader from "../components/PageHeader/PageHeader";
import image from "../images/photoOfMeStudio.webp";
import styles from "./lessons.module.scss";
const Lessons = () => {
  return (
    <main className={styles.main}>
      <PageHeader
        title='Les cours'
        alt={
          "L'image montre une personne assise sur les talons sur un tapis de yoga bleu, devant un mur blanc. Elle est habillée d'une brassère violette et d'un legging bleu foncé. Ses mains reposent sur ses cuisses. Elle semble être en train de sourire, affichant une expression joyeuse et détendue. Derrière elle, on voit un mur blanc."
        }
        image={image}
      />
      <p className={styles.introduction}>
        Je propose différents types de cours, en ligne ou en présentiel, toute
        la semaine et le week-end.
      </p>
      <section>
        <div>
          <h2> Les cours en ligne </h2>
          <p>
            Les cours en ligne vous permettent de faire du yoga dans le confort
            de votre maison
          </p>
          <p>
            Les cours en ligne durent une heure. Vous avez seulement besoin
            d'une connexion internet et de votre tapis de yoga.
          </p>
          <p>Ces cours en ligne se déroulent le :</p>
          <ul>
            <li>Mercredi de 19h à 20h </li>
            <li>Vendredi de 19h à 20h</li>
            <li> Dimanche de 10h à 11h</li>
          </ul>
        </div>
        <div>
          <h2> Les cours gratuits</h2>
          <p className={styles.timeline}>
            <span>Jeudi - 17h00</span>
            <span>Cours de 5 à 30 minutes disponible Youtube.</span>
          </p>
          <p className={styles.timeline}>
            <span>Premier samedi du mois - 11h à 12h </span>
            <span> Prix libre - min 3 euros </span>
          </p>
        </div>
        <div>
          <h2> Les cours individuels</h2>
          <p>
            Les cours individuels vous permettent de progresser sur des points
            précis que vous décidez. Les séquences sont spécialement conçus
            selon vos besoins et envies et je me déplace chez vous.
          </p>
          <p>
            Pour répondre au mieux à vos attentes, les cours individuels passent
            impérativement par un premier contact en visio.
          </p>
        </div>
        <div>
          <h2> Les cours de respiration et de méditation </h2>
          <p className={styles.timeline}>
            Tous les dimanches, de 19h à 19h30 en ligne.
          </p>
          <p>
            Cette demi heure vous permettre de sortir du blues du dimanche soir,
            mais aussi de gagner en réflexe pour lutter contre tout stress ou
            anxiété, et démarrer la semaine en forme et calme.
          </p>
        </div>
      </section>
      <ButtonLink title={"Réserver un cours"} href={"reserver-cours"} />
      <div className={styles.others}>
        <h2> Autres </h2>
        <p>
          Je propose des cours en entreprise, le midi ou le soir, vers Saint
          Herblain et Saint Joseph de Porterie.
        </p>
        <p>
          Si vous êtes intéressées, merci de passer par le formulaire de
          contact.
        </p>
      </div>
      <section className={styles.moreInfo}>
        <h3> Besoins de plus d'informations ? </h3>
        <p>
          Il est normal de vouloir savoir si ce sont des cours qui sont faits
          pour vous, comment ils se déroulent ou de vouloir faire connaissance
          avec votre professeur avant. N'hésitez pas à me contacter, nous
          pourrons échanger par message, email ou de vive voix.
        </p>
        <ButtonLink title={"Me contacter"} href={"contact"} />
      </section>
    </main>
  );
};

export default Lessons;
