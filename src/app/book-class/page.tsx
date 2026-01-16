import PageHeader from "../components/PageHeader/PageHeader";
import BookeoWidget from "../components/ReservationFrame/ReservationFrame";
import styles from "./bookClass.module.scss";
import { Props } from "../about/page";
import { Metadata } from "next";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: "Réservez un cours de Yoga et Méditation",
    description:
      "Réservez facilement un cours de yoga ou une séance de méditation en ligne. Utilisez le formulaire pour planifier votre session ou prenez un premier rendez-vous pour un cours individuel.",
  };
}

const BookClass = () => {
  return (
    <main className={styles.main}>
      <PageHeader title='Réserver un cours' />
      <p> Toutes les classes sont sur le fuseau horaire de Paris</p>
      <section>
        <h2>Les différents cours</h2>
        <p>
          Réservez directement un cours de yoga en ligne via le formulaire
          ci-dessous.
        </p>
        <ul>
          <li>
            <span>Un cours de 1 heure</span> : choisir Yoga à 12€
          </li>
          <li>
            <span>Les cours exceptionnels de yoga en ligne à 3€</span> n'ont
            lieu qu'une fois par mois et durent 1 heure. Ne loupez pas votre
            place !
          </li>
          <li>
            <span>Yoga en ligne d'anniversaire</span> : cours à <span>0€</span>{" "}
            pour fêter mon anniversaire ! Ne loupez pas votre place !
          </li>
          <li>
            <span>Pour faire un cours particulier </span> : merci de prendre
            rendez-vous par le formulaire de contact.
          </li>
        </ul>
        <BookeoWidget />
        <h2>Comment réserver ?</h2>
        <ul>
          En cliquant sur le bouton "Réserver un cours " vous allez être
          redirigé vers la page de rendez-vous.
          <li>Vous pouvez choisir entre l'anglais et le français.</li>
          <li>Certains cours sont en anglais et certains cours en français.</li>
          <li>
            Vous pouvez prendre un cours à la fois ou en prendre plusieurs de
            façon récurrente.
          </li>
        </ul>

        <BookeoWidget />
        <h2>Note importante</h2>
        <p>
          Parfois on ne contrôle pas tout dans la vie, ou on juste envie de
          s'allonger dans le canapé en mangeant des chips au lieu de dérouler
          son tapis. Il est donc possible d'annuler mais pas à la dernière
          minute :{" "}
          <span>
            vous avez jusqu'à 12 heures avant le cours pour annuler et être
            remboursé•e{" "}
          </span>{" "}
          .
        </p>
        <h2>De quoi vous avez besoin ?</h2>
        <ul>
          <li>Un tapis de yoga.</li>
          <li>Un écran assez large pour bien voir le cours.</li>
          <li>D'une connexion internet.</li>
        </ul>
        <h2>De quoi vous n'avez PAS besoin ?</h2>
        <p>
          Pas besoin d'un compte Zoom, une connexion internet et l'accès à votre
          navigateur préféré suffit !
        </p>
        <BookeoWidget />
      </section>
    </main>
  );
};

export default BookClass;
