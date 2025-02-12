import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

const BookeoWidget = () => {
  const t = useTranslations("HomePage.button");

  return (
    <a href='https://bookeo.com/adelevrc' target='_blank'>
      {t("bookClass")}
    </a>
  );
};

export default BookeoWidget;
