import { useTranslations } from "next-intl";
import ButtonLink from "../Button/Link/Link";
import style from "./description.module.scss";

const Description = () => {
  const t = useTranslations("HomePage");

  return (
    <section className={style.description}>
      <h2>
        {t.rich("description.title", {
          strong: (chunks) => <strong>{chunks}</strong>,
        })}
      </h2>
      <p>
        {t.rich("description.text", {
          strong: (chunks) => <strong>{chunks}</strong>,
        })}
      </p>
      <h3 className={style.italic}>
        {t.rich("description.h4", {
          span: (chunks) => <span>{chunks}</span>,
        })}
      </h3>
      <ul>
        <li>
          <p>
            {t.rich("description.list.firstPoint", {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>
        </li>
        <li>
          <p>
            {t.rich("description.list.secondPoint", {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>
        </li>
      </ul>
      <h3>
        {t.rich("description.secondH4", {
          span: (chunks) => <span>{chunks}</span>,
        })}
      </h3>
      <p>
        {t.rich("description.flowDescription", {
          span: (chunks) => <span>{chunks}</span>,
          strong: (chunks) => <strong>{chunks}</strong>,
        })}
      </p>
      <ButtonLink href='method' title={t("button.method")} color='red' />
    </section>
  );
};

export default Description;
