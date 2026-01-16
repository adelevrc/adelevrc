"use client";

import { useQuery } from "@apollo/client/react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { GET_ARTICLE_BY_SLUG } from "@/graphql/queries/blog.query";
import { ArticleDetails } from "@/graphql/types/blog.types";

const ArticlePage = () => {
  const params = useParams();
  const slug = params.slug as string;

  const { data, loading, error } = useQuery<ArticleDetails>(
    GET_ARTICLE_BY_SLUG,
    {
      variables: { slug },
    }
  );

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;
  if (!data?.getArticleBySlug) return <p>Article introuvable</p>;

  const article = data.getArticleBySlug;

  return (
    <article>
      <h1>{article.title}</h1>

      <Image
        src={article.imageLink}
        alt={article.title}
        width={800}
        height={450}
      />

      <p>{article.body}</p>
    </article>
  );
};

export default ArticlePage;
