"use client";

import ButtonLink from "../Button/Link/Link";
import styles from "./scroll.module.scss";

const StickyScroll = () => {
  return (
    <section className={styles.stickySection}>
      <ul className={styles.stickyList}>
        <li className={styles.item}>
          <h3>
            Affûter son <span>corps</span>
          </h3>
          <p>
            Développer sa puissance musculaire dans toutes les positions pour
            améliorer sa pratique du yoga (ou une autre pratique sportive). Un
            mélande de posture traditionnelle avec des mouvements plus modernes
            pour faire grossir vos muscles.
          </p>
        </li>

        <li className={styles.item}>
          <h3>
            <span>Exploration</span> plutôt qu'imitation
          </h3>
          <p>
            Un seul alignement ne peut pas convenir à tous les corps. Le yoga
            n’est pas une posture parfaite, mais une exploration vivante. Ici,
            on dépasse les règles figées pour développer un corps libre,
            autonome et mobile.
          </p>
        </li>

        <li className={styles.item}>
          <h3>
            Utiliser son <span>souffle</span> pour aller (beaucoup) plus loin
          </h3>
          <p>
            Travailler différentes méthodes de respiration pour se calmer,
            s'énergiser mais aussi aller plus loin dans certaines postures grâce
            à des réflexes neurologiques.
          </p>
        </li>

        <li className={styles.item}>
          <h3>
            Pour tous les <span>niveaux</span>
          </h3>
          <p>
            Chaque cours s'adapte à votre niveau, chaque posture a des options
            plus avancées ou plus accesibles en fonction de vos objectifs et de
            votre expérience.
          </p>
          <ButtonLink title='Trouver son cours' href={"classes"} />
        </li>
      </ul>
    </section>
  );
};

export default StickyScroll;
