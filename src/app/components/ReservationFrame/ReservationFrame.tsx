interface Props {
  title?: string;
  href?: string;
}
const BookeoWidget = ({ title, href }: Props) => {
  return (
    <a href={href ?? "https://bookeo.com/adelevrc"} target='_blank'>
      {title ?? "Réserver un cours"}
    </a>
  );
};

export default BookeoWidget;
