import ExternalLink from "@/app/components/Button/ExternalLink/ExternalLink";
import { Metadata } from "next";
import ButtonLink from "../components/Button/Link/Link";
import PageHeader from "../components/PageHeader/PageHeader";
import StyledContainer from "../components/StyledContainer/StyledContainer";
import { Props } from "../about/page";
import styles from "./classes.module.scss";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: "Les offres de cours - Adèle Vercaygne",
    description:
      "Découvrez mes cours de yoga d'une heure, ainsi que des sessions de méditation et de respiration de 30 minutes. Explorez également ma chaîne YouTube pour plus de contenu.",
  };
}

const Classes = () => {
  return (
    <main className={styles.main}>
      <PageHeader title='Les cours' />
      <section>
        <article>
          <div>
            <h2>Les cours gratuits</h2>
            <p>
              Profitez de mes <strong>cours gratuits de yoga</strong> (ou
              presque) pour découvrir les bienfaits de la pratique sans
              engagement.
            </p>
            <ul>
              <StyledContainer
                children={
                  <>
                    <span>Jeudi - 17h00</span>
                    <span>
                      Cours de 5 à 30 minutes disponibles sur{" "}
                      <a
                        className={styles.underline}
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://www.youtube.com/@adelevrc'
                      >
                        Youtube
                      </a>
                    </span>
                  </>
                }
              />

              <StyledContainer
                children={
                  <>
                    <span>Un samedi par mois - 11h à 12h</span>
                    <span>Prix libre - min 3 euros</span>
                  </>
                }
              />
            </ul>
          </div>
        </article>
        <article>
          <div>
            <h2>Les cours individuels de yoga</h2>
            <p>
              Les <strong>cours individuels</strong> vous permettent de
              progresser sur des points précis que vous souhaitez améliorer.
              Chaque séance est conçue sur mesure selon vos{" "}
              <strong>besoins</strong> et vos <strong>envies</strong>.
            </p>
            <p>
              Pour garantir une expérience optimale, un premier contact en visio
              est nécessaire afin de mieux cerner vos attentes.
            </p>
            <p>
              Contactez-moi pour planifier votre premier cours individuel et
              découvrir les bienfaits d'une pratique personnalisée.
            </p>
          </div>

          <ButtonLink title='Me contacter' href={"contact"} />
        </article>
        <article>
          <div>
            <h2>Les ateliers</h2>
            <p>
              Les <strong>ateliers</strong> vous permettent d'aller plus loin
              sur une thématique précise
            </p>
            <p>
              Ils durent entre 2h00 et une demi journée et sont animés par
              moi-même ou en partenariat avec d'autres experts et expertes.
            </p>
            <p>
              Les thèmes sont divers : neurosciences, mobilité, respiration,
              méditation, yoga, alimentation, sommeil, gestion du stress, etc.
            </p>
          </div>
          <ButtonLink title='Réserver un atelier' href={"workshop"} />
        </article>
      </section>

      <section className={styles.moreInfo}>
        <h2 className={styles.reversed}>Besoins de plus d'informations ?</h2>
        <p>
          Il est normal de vouloir savoir si ce sont des cours qui sont faits
          pour vous, comment ils se déroulent ou de vouloir faire connaissance
          avec votre professeure avant. N'hésitez pas à me contacter, nous
          pourrons échanger par message, email ou de vive voix.
        </p>
        <div className={styles.buttonsSection}>
          <ButtonLink title='Me contacter' href={"contact"} />
        </div>
      </section>
    </main>
  );
};

export default Classes;
