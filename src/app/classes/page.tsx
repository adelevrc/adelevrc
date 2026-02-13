import { Metadata } from "next";
import { Props } from "../about/page";
import ButtonLink from "../components/Button/Link/Link";
import PageHeader from "../components/PageHeader/PageHeader";
import styles from "./classes.module.scss";
import StyledContainer from "../components/StyledContainer/StyledContainer";
import ExternalLink from "../components/Button/ExternalLink/ExternalLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Title from "../components/Title/DynamicTitle";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: "Les offres de cours - Adèle Vercaygne",
    description:
      "Découvrez mes cours de yoga d'une heure, ainsi que des sessions de méditation et de respiration de 30 minutes. Explorez également ma chaîne YouTube pour plus de contenu.",
  };
}

const Classes = () => {
  const subtitles = (
    <>
      <span>
        Découvrez les cours de yoga Vinyasa & Hatha à Nantes, en studio, en
        ligne et sur YouTube — pour tous les niveaux.
      </span>
      <span>
        Bougez, respirez, renforcez — à votre rythme — où que vous soyez.
      </span>
      <span>
        Des séances fluides et modernes, basées sur une approche en
        neurosciences et biomécanique.
      </span>
    </>
  );

  return (
    <main className={styles.main}>
      <PageHeader title='Les cours' color='purple' subtitles={subtitles} />
      <section>
        <Title text={"En"} as='h2' movingText='ligne' />
        <p>
          Il pleut à Nantes ? Pas envie de sortir de chez soi ? Pas le temps ?
          Je propose des cours de yoga vinyasa sur YouTube. Des vidéos de 5 à 30
          minutes, qui mêlent flows créatifs et exercices issus des
          neurosciences pour aller plus loin dans les postures. Une pratique
          accessible, flexible et qui fait gagner en mobilité, à faire chez soi,
          quand on veut.
        </p>
        <ExternalLink
          title={"Aller sur Youtube"}
          link={"https://www.youtube.com/@adelevrc"}
        />
        <StyledContainer />
        <Title text={"En"} as='h2' movingText='présentiel' />
        <ul>
          <li>
            <div className={styles.content}>
              <h3> Vinyasa Dimanche 10h30</h3>
              <p>
                Au studio Phénix Yoga à Saint-Joseph de Porterie (Nord-Est de
                Nantes)
              </p>
              <a
                href={
                  "https://phenix-yoga.sportigo.club/appointment?inc_r=2844&view=agenda&readonly=falses"
                }
                target='_blank'
              >
                Réserver <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </li>
          <li>
            <div className={styles.content}>
              <div className={styles.banner}> Bientôt</div>
              <h3>Hatha Yoga</h3>
              <p>
                Au studio Phénix Yoga à Saint-Joseph de Porterie (Nord-Est de
                Nantes)
              </p>
              <a
                href={
                  "https://phenix-yoga.sportigo.club/appointment?inc_r=2844&view=agenda&readonly=falses"
                }
                target='_blank'
              >
                Réserver <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </li>
        </ul>
        <ExternalLink
          title={"Réserver un cours"}
          link={
            "https://phenix-yoga.sportigo.club/appointment?inc_r=2844&view=agenda&readonly=false"
          }
        />
        <Title text={"Besoins de plus"} as='h2' movingText="d'info ?" />

        <p>
          Vous voulez savoir si ce sont des cours faits pour vous ? comment ils
          se déroulent ? faire connaissance avec votre professeure ? N'hésitez
          pas à me contacter, nous pourrons échanger par message, email ou de
          vive voix.
        </p>
        <ButtonLink title='Me contacter' href={"contact"} />
      </section>
    </main>
  );
};

export default Classes;
