import ButtonLink from "../components/Button/Link/Link";
import styles from "./lessons.module.scss";
const Lessons = () => {
  return (
    <main className={styles.main}>
      <h1> Les différents cours</h1>
      <p>
        Je propose différents types de cours, en ligne ou en présentiel, toute
        la semaine et le week-end.
      </p>
      <h2> Les cours en ligne </h2>
      <p>
        Les cours en ligne vous permettent de faire du yoga dans le confort de
        votre maison
      </p>
      <p>
        Les cours en ligne durent une heure. Vous avez seulement besoin d'une
        connexion internet et de votre tapis de yoga.
      </p>
      <ul>
        Ces cours en ligne se déroulent le :<li>Mercredi de 19h à 20h00 </li>
        <li>Vendredi de 19h à 20h00</li>
        <li> Dimanche de 10h à 11h</li>
      </ul>
      <h2> Les cours individuels</h2>
      <p>
        Les cours individuels vous permettent de progresser sur des points
        précis que vous décidez. Les séquences sont spécialement conçus selon
        vos besoins et envies et je me déplace chez vous.
      </p>
      <p>
        Pour répondre au mieux à vos attentes, les cours individuels passent
        impérativement par un premier contact en visio.
      </p>
      <h2> Les cours de respiration et de méditation </h2>
      <p> Tous les dimanches, de 19h à 19h30 en ligne. </p>
      <p>
        Cette demi heure vous permettre de sortir du blues du dimanche soir,
        mais aussi de gagner en réflexe pour lutter contre tout stress ou
        anxiété, et démarrer la semaine en forme et calme.
      </p>
      <h2> Autres </h2>
      <p>
        Je propose des cours en entreprise, le midi ou le soir, vers Saint
        Herblain et Saint Joseph de Porterie.
      </p>
      <p>
        Si vous êtes intéressées, merci de passer par le formulaire de contact.
      </p>
      <h3> Besoins de plus d'informations ? </h3>
      <p>
        Il est normal de vouloir savoir si ce sont des cours qui sont faits pour
        vous, comment ils se déroulentn ou de vouloir faire connaissance avec
        votre professeur avant. N'hésitez pas à me contacter, nous pourrons
        échanger par message, email ou de vive voix.
      </p>
      <ButtonLink title={"Me contacter"} href={"contact"} reversed />
    </main>
  );
};

export default Lessons;
