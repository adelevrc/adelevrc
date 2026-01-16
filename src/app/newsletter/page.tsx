import Newsletter from "../components/Newsletter/Newsletter";
import PageHeader from "../components/PageHeader/PageHeader";
import { Props } from "../about/page";
import { Metadata } from "next";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: "S'inscrire à la newsletter",
    description:
      "Inscrivez vous à la newsletter pour recevoir des réductions exclusives, les ateliers et les cours en avant-première, et des challenges mensuels.",
  };
}

const NewsletterPage = () => {
  return (
    <main>
      <PageHeader title="S'inscrire à la newsletter" />
      <Newsletter />
    </main>
  );
};

export default NewsletterPage;
