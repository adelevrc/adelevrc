import styles from "./generalConditions.module.scss";
import { Props } from "../about/page";
import { Metadata } from "next";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: "Condition Générales - Adèle Vercaygne",
    description: "Consultez nos conditions générales pour comprendre les droits et obligations liés à nos services de yoga. Informez-vous sur les politiques, annulations et modalités.",
  };
}

const GeneralConditions = () => {
  return (
    <section className={styles.section}>
      <h1>Conditions Générales d'Utilisation et de Vente</h1>
      <h2>préambule</h2>
      <p>
        Le site <strong>www.adelevercaygne.com</strong> (ci-après désigné « le Site ») est le site de commerce électronique de la micro entreprise Adèle Vercaygne accessible par le réseau internet, ouvert à tout utilisateur de ce réseau. Il est édité par Adèle Vercaygne immatriculée sous le numéro SIRET 93247908200012 et bénéficiant d'une dispense de TVA conformément à l'article 293B du CGI.
      </p>
      <p>
        Le site permet aux utilisateurs de procéder à l'achat de prestations et/ou produits proposés
      </p>
      <p>Le site ne permet pas l'achat de prestations ou de produits en vue de leur revente. En conséquence, l'utilisateur du site ne pourra se prévaloir à l'encontre de Adèle Vercaygne, d'aucune perte de chance, d'exploitation ou de profit.</p>

      <h2>Article 1 : Objet</h2>
      <p>Les présentes « conditions générales d'utilisation » ont pour objet l'encadrement juridique de l'utilisation du site Adèle Vercaygne et de ses services.</p>
      <p>Ce contrat est conclu entre :</p>
      <ul>
        <li>Le gérant du site internet, ci-après désigné « l'Éditeur »,</li>
        <li>Toute personne physique ou morale souhaitant accéder au site et à ses services, ci-après appelé « l'Utilisateur ».</li>
      </ul>
      <p> Les conditions générales d'utilisation doivent être acceptées par toutUtilisateur, et son accès au site vaut acceptation de ces conditions.</p>

      <h2>Article 2 : Mentions légales</h2>
      <p>
        Le site Adèle Vercaygne est édité par Adèle Vercaygne, domicilié à Nantes, France. Le site est hébergé par la plateforme <strong>Vercel</strong> <br /> Adresse : <strong>340 S Lemon Ave #4133, Walnut, CA 91789, USA</strong>.
      </p>

      <h2>Article 3 : Accès aux services</h2>
      <p>L'Utilisateur du site Adèle Vercaygne a accès aux services suivants :</p>
      <ul>
        <li>Les informations de présentation</li>
        <li>Le calendrier des cours, stages, week-ends, retraites et ateliers</li>
        <li>Le planning de réservation des cours en ligne</li>
      </ul>
      <p>Tout utilisateur ayant accès à internet peut accéder gratuitement et depuis n'importe où au site. Les frais supportés par l'Utilisateur pour y accéder (connexion internet, matériel informatique, etc.) ne sont pas à la charge de l'Éditeur.</p>

      <h2>Article 4 : Conditions générales de Vente et d'Utilisation</h2>
      <p>
        Les présentes Conditions Générales de Vente et d'Utilisation sont conclues entre d'une part <strong>Adèle Vercaygne</strong> et d'autre part, toute personne physique ou morale procédant à l'achat de produits sur le Site (ci-après désignée « Adhérent » pour l'achat d'une prestation et « Client » pour l'achat d'un produit).
      </p>
      <p>Elles sont systématiquement adressées ou remises à chaque Adhérent ou Client pour lui permettre de procéder à l'achat de prestations et/ou produits proposés par Adèle Vercaygne. En conséquence, le fait de passer commande implique l'acceptation entière et sans réserve de l'Adhérent ou du Client de ces Conditions, et ceci, quelles que soient les dispositions contraires pouvant figurer sur tout document émanant de l'Adhérent ou du Client, y compris d'éventuelles conditions générales d'achat.</p>
      <p>L'Adhérent ou le Client reconnaît avoir pris connaissance au moment de toute commande des présentes Conditions Générales de Vente et d'Utilisation et déclare expressément les accepter sans réserve. Adèle Vercaygne se réserve toutefois de pouvoir modifier ses Conditions Générales de Vente et d'Utilisation à tout moment. Dans ce cas, les Conditions applicables seront celles en vigueur à la date de la commande.</p>

      <h3>4.1 – Prestations proposées et produits vendus</h3>
      <p>Les prestations proposées sont celles qui sont présentées sur le Site. Elles comprennent notamment des cours de Yoga en ligne pour adultes, des ateliers / conférences en ligne, formations en ligne ainsi que des cours de Yoga en présentiel sous la forme de cours individuels ou collectifs, stage de Yoga.</p>
      <p>Ces prestations sont proposées sous la forme d'une :</p>
      <ul>
        <li>Consommation à la carte : des carnets valables 2, 6 et 12 mois ouvrent droit à un nombre déterminé de cours ou de séances en physique ou en ligne (ci-après désigné « Unité de cours »).</li>
      </ul>
      <p>Les prestations proposées donnent lieu à la réservation d'une séance ou d'un cours individuel ou collectif. La réservation peut être effectuée directement sur le Site.</p>

      <h3>4.2 – Prix</h3>
      <p>Les prix des produits et prestations sont indiqués en euros toutes taxes comprises (TTC).</p>

      <h2>Article 5 : Responsabilité de l'Utilisateur</h2>
      <p>L'Utilisateur est responsable des risques liés à l'utilisation de son identifiant de connexion et de son mot de passe. Le mot de passe de l'Utilisateur doit rester secret. En cas de divulgation de mot de passe, l'Éditeur décline toute responsabilité.</p>

      <h2>Article 6 : Responsabilité de l'Éditeur</h2>
      <p>Tout dysfonctionnement du serveur ou du réseau ne peut engager la responsabilité de l'Éditeur.</p>
      <p>Le site Adèle Vercaygne s'engage à mettre en œuvre tous les moyens nécessaires pour garantir la sécurité et la confidentialité des données. Toutefois, il n'apporte pas une garantie de sécurité totale.</p>

      <h2>Article 7 : Propriété intellectuelle</h2>
      <p>Les contenus du site Adèle Vercaygne (logos, textes, éléments graphiques, vidéos, etc.) sont protégés par le droit d'auteur, en vertu du Code de la propriété intellectuelle. L'Utilisateur devra obtenir l'autorisation de l'Éditeur du site avant toute reproduction, copie ou publication de ces différents contenus dans leur intégralité ou en partie.</p>

      <h2>Article 8 : Liens hypertextes</h2>
      <p>Les domaines vers lesquels mènent les liens hypertextes présents sur le site n'engagent pas la responsabilité de l'Éditeur de Adèle Vercaygne, qui n'a pas de contrôle sur ces liens.</p>

      <h2>Article 9 : Évolution des conditions générales d'utilisation</h2>
      <p>Le site Adèle Vercaygne se réserve le droit de modifier les clauses de ces conditions générales d'utilisation à tout moment et sans justification.</p>

      <h2>Article 10 : Durée des conditions générales</h2>
      <p>La durée des présentes conditions générales est indéterminée. Elles produisent leurs effets à l'égard de l'Utilisateur à compter du début de l'utilisation du service.</p>

      <h2>Article 11 : Droit applicable et juridiction compétente</h2>
      <p>Le présent contrat dépend de la législation française. En cas de litige non résolu à l'amiable entre l'Utilisateur et l'Éditeur, les tribunaux de Nantes sont compétents pour régler le contentieux.</p>
    </section>
  );
};

export default GeneralConditions;
