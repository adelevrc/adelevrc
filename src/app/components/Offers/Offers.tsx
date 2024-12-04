import ButtonLink from "../Button/Link/Link";
import Card from "../FlippedCard/FlippedCard";
import style from "./offer.module.scss";

const Offers = () => (
  <section className={style.offers}>
    <Card
      subtitle='Pratiquez avec moi dans le confort de votre maison'
      info={
        <div className={style.class}>
          <h4>Cours de yoga</h4>
          <p>
            Profitez de <strong>cours en ligne de yoga</strong> d'une heure pour
            pratiquer confortablement depuis votre maison.
          </p>
          <p>
            C'est la solution idéale pour intégrer <strong>le yoga</strong> dans
            votre quotidien, tout en restant chez vous.
          </p>
          <p>
            Les <strong>cours de yoga en ligne</strong> se déroulent le soir et
            le week-end, offrant une flexibilité parfaite pour votre emploi du
            temps.
          </p>
        </div>
      }
      button={
        <ButtonLink
          href='/reserver-cours'
          title='Réserver un cours'
          color='red'
        />
      }
    />

    <Card
      subtitle='Recommencer la semaine sans appréhension'
      info={
        <div className={style.class}>
          <h4>Cours de méditation</h4>
          <p>
            Grâce à ce travail de <strong>respiration</strong> et de{" "}
            <strong>méditation guidée</strong>, vous pourrez dire adieu au blues
            du dimanche soir et aborder chaque nouvelle semaine sans
            appréhension.
          </p>
          <p>
            L'objectif des <strong>cours de méditation en ligne</strong> est de
            vous aider à développer des <strong>outils de respiration</strong>{" "}
            et de méditation que vous pourrez utiliser dans toutes les
            situations de stress ou d'anxiété.
          </p>
        </div>
      }
      button={
        <ButtonLink
          href='/reserver-cours'
          title='Réserver une méditation'
          color='red'
        />
      }
    />
    <Card
      online={false}
      subtitle='Atteignez de nouveaux objectifs dans votre pratique'
      info={
        <div className={style.class}>
          <h4> Cours individuel</h4>
          <p>
            Les <strong>cours de yoga individuels</strong> s'adaptent à vos
            besoins, que vous souhaitiez perfectionner certaines postures,
            gagner en flexibilité ou découvrir de nouvelles techniques.
          </p>
          <p> Chaque session est personnalisée selon vos objectifs.</p>
          <p>
            Les cours durent de 1 à 1h30, selon vos préférences. Un premier
            contact est nécessaire pour définir vos attentes avant de débuter.
          </p>
        </div>
      }
      button={
        <ButtonLink
          href='https://app.acuityscheduling.com/schedule.php?owner=33520682&owner=33520682&appointmentType=69034331'
          title='Prendre rendez-vous'
          targetBlank={true}
          color='red'
        />
      }
    />
  </section>
);

export default Offers;
