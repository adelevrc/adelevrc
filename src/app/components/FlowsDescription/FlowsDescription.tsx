import ButtonLink from "../Button/Link/Link";
import style from "./flowsDescription.module.scss";

const FlowsDescription = () => {
  return (
    <section className={style.contactMe}>
      <div className={style.introduction}>
        <h2>Ce que vous avez à chaque cours</h2>
        <p>Chaque cours est préparé de façon unique et méticuleuse pour vous aider à aller plus loin dans votre pratique.</p>
      </div>
      <div className={style.features}>
        <div className={style.feature}>
          <h3>
            <span>Séquences originales</span>
          </h3>
          <p>Des séquences uniques et des transitions étonnantes que vous n'avez jamais vues nulle part, pour faire travailler vos muscles dans toutes les positions possibles.</p>
        </div>
        <div className={style.feature}>
          <h3>
            <span>Exercices neurologiques</span>
          </h3>
          <p>Pour améliorer en 3 minutes chrono vos flexions, extensions, équilibre et coordination, avec en plus des techniques sur mesure pour vous aider à être plus calme ou plus énergique !</p>
        </div>
        <div className={style.feature}>
          <h3>
            <span>Flow pointus</span>
          </h3>
          <p>Élaborés avec un objectif précis (aller dans une posture / travailler une partie du corps), grâce à la biomécanique, l'anatomie et la neuroscience. Aucun mouvement à jeter, tout est efficient.</p>
        </div>
        <div className={style.feature}>
          <h3>
            <span>Yoga dynamique</span>
          </h3>
          <p>Des flows dynamiques, loin d'être statiques. Ils vous permettront de ressentir chaque muscle de votre corps tout en bougeant sur votre tapis.</p>
        </div>
        <div className={style.feature}>
          <h3>
            <span>Joie et bonne humeur</span>
          </h3>
          <p>Pourquoi ne serait-il pas possible de trouver la paix et le calme dans la joie ? Pourquoi la pratique physique du yoga doit-elle être prise autant au sérieux ? Personne ne sait ! Et c'est pourquoi, dans mes flows, je mets tout en œuvre pour vous faire bouger dans la bonne humeur.</p>
        </div>
        <div className={style.feature}>
          <h3>
            <span>Accessible pour tous les niveaux</span>
          </h3>
          <p>À condition d'être prêt•e à se challenger et à explorer des nouvelles formes de mouvements ! Si vous voulez de la tradition et de l'immobilité, vous pouvez passer votre chemin. Si vous voulez transpirer, vous challenger et vous amuser, vous êtes au bon endroit !</p>
        </div>
      </div>

      <div className={style.buttonsSection}>
        <ButtonLink title="Contactez-moi" href={"contact"} />
      </div>
    </section>
  );
};

export default FlowsDescription;
