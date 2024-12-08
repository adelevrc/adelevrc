import ButtonLink from "../Button/Link/Link";
import style from "./description.module.scss";

const Description = () => {
  return (
    <section className={style.description}>
      <h2>
        Des cours de yoga construits autour de l'<strong>anatomie </strong> et
        de la <strong> neuroscience </strong> pour gagner en{" "}
        <strong> force</strong> et en
        <strong> mobilité </strong> rapidement.
      </h2>
      <p>
        Une de mes plus grandes passions est de comprendre le fonctionnement du
        corps humain et du cerveau.
      </p>
      <h4 className={style.italic}>
        Des séquences de yoga <span> pointues </span> et <span> faciles </span>{" "}
        à suivre pour répondre à un besoin spécifique.
      </h4>
      <ul>
        <li>
          <p>
            Prise en compte de votre <strong> cerveau </strong> et de ses
            réactions face à certains stimuli : des exercices spécifiques sont
            intégrés en fonction du flow de yoga, des mouvements et des parties
            anatomiques ciblées. En utilisant des{" "}
            <strong> "neurodrills" </strong>, il sera possible d'aller plus
            loin, plus facilement et avec davantage de force dans une posture.
          </p>
        </li>
        <li>
          <p>
            <strong>Anatomie </strong> et <strong> biomécanique </strong> : mes
            séquences se concentrent principalement sur une partie spécifique du
            corps ou sur un mouvement particulier, que nous explorerons dans
            toutes les directions possibles pour améliorer la mobilité, quelle
            que soit la position.
          </p>
        </li>
      </ul>
      <h4>
        Des cours ouverts à <span>tout le monde</span>, pour gagner en autonomie
        dans sa pratique{" "}
      </h4>
      <p>
        Voici une version corrigée et légèrement révisée pour améliorer la
        fluidité : Les flows de yoga sont conçus pour être précis et pointus,
        mais cela ne signifie pas que mes cours sont réservés à un public
        d'initiés. Ma méthode d'enseignement permet à chacun de trouver son
        propre rythme et de s'approprier les informations tout en explorant les
        postures et mouvements. En apprenant à mieux comprendre votre{" "}
        <strong> corps </strong> et votre <strong> esprit </strong>, grâce à des
        tests intégrés dans les séquences, vous découvrirez ce qui vous convient
        le mieux et comment enrichir votre pratique pour la faire évoluer.
      </p>
      <ButtonLink href='ma-methode' title='Ma méthode' color='red' />
    </section>
  );
};

export default Description;
