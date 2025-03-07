import { useTranslations } from "next-intl";

interface Props {
  title?: string;
  href?: string;
}
const BookeoWidget = ({ title, href }: Props) => {
  const t = useTranslations("HomePage.button");

  return (
    <a href={href ?? "https://bookeo.com/adelevrc"} target='_blank'>
      {title ?? t("bookClass")}
    </a>
  );
};

export default BookeoWidget;
