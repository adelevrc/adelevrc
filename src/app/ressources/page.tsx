"use client";

import { INTRO_ARTICLE_QUERY } from "@/graphql/queries/blog.query";
import { IntroArticles } from "@/graphql/types/blog.types";
import { useQuery } from "@apollo/client/react";
import Image from "next/image";
import styles from "./ressources.module.scss";
import Filters from "@/app/components/Filter/Filters";
import { useEffect, useState } from "react";
import Link from "next/link";

const RessourcesPage = () => {
  const { data, loading, error } = useQuery<IntroArticles>(INTRO_ARTICLE_QUERY);
  const [filter, setFilter] = useState<string>("Tout");
  const [dataFiltered, setDataFiltered] = useState(data);

  useEffect(() => {
    if (data) {
      if (filter === "Tout") {
        setDataFiltered(data);
      } else {
        const filteredArticles = data.getAllArticles.filter((article) =>
          article.tags.some((tag) => tag.name === filter)
        );
        setDataFiltered({ getAllArticles: filteredArticles });
      }
    }
  }, [filter, data]);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  return (
    <main className={styles.main}>
      <div className={styles.discoverOffers}>
        <ul>
          <li>
            <div className={styles.shapesContainer}>
              <div className={styles.longRectangle}></div>
              <div className={styles.rectangle}></div>
            </div>
            <div className={styles.listContent}>
              <h4>Ressources</h4>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </li>
          <li className={styles.secondItem}>
            <div className={styles.shapesContainer}>
              <div className={styles.longRectangle}></div>
              <div className={styles.rectangle}></div>
            </div>
            <div className={styles.listContent}>
              <h4>YouTube</h4>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </li>
          <li>
            <div className={styles.listContent}>
              <h4>Instagram</h4>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </li>
          <div></div>
        </ul>
      </div>
      <div className={styles.content}>
        <Filters filterSelected={filter} setFilter={setFilter} />
        <h3>{filter}</h3>
        <div className={styles.articles}>
          {dataFiltered &&
            dataFiltered.getAllArticles.map((article, index) => (
              <Link href={`/ressources/${article.slug}`} key={article.id}>
                <div
                  className={`${styles.articleCard} ${index % 2 === 1 ? styles.even : ""}`}
                >
                  <div className={styles.imageContainer}>
                    <Image
                      className={styles.picture}
                      src={article.imageLink}
                      alt={article.title}
                      priority
                      width={"100"}
                      height={"100"}
                    />
                  </div>
                  {article.tags && (
                    <div className={styles.tagContainer}>
                      {article.tags.map((tag) => (
                        <span key={tag.name} className={styles.tag}>
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  )}
                  <h2>{article.title}</h2>
                  <span className={styles.category}>{article.category}</span>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </main>
  );
};

export default RessourcesPage;
