import ReservationFrame from "../components/ReservationFrame/ReservationFrame";
import styles from "./bookClass.module.scss";

export const metadata = {
  title: "Réservez un cours de Yoga et Méditation",
  description:
    "Réservez facilement un cours de yoga ou une séance de méditation en ligne. Utilisez le formulaire pour planifier votre session ou prenez un premier rendez-vous pour un cours individuel.",
};

const BookClass = () => {
  return (
    <main className={styles.main}>
      <div>
        <h1>Réserver un cours de yoga ou de méditation</h1>
        <h2>Comment réserver ?</h2>
        <p>
          Réservez directement un cours de yoga en ligne ou une séance de
          méditation via le formulaire ci-dessous.
        </p>
        <p>
          Pour prendre un premier rendez-vous pour un cours individuel, merci de
          sélectionner "Premier rendez-vous".
        </p>
      </div>
      <ReservationFrame />
    </main>
  );
};

export default BookClass;
