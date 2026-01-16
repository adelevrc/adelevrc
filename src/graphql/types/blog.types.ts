import { Tag } from "./tag.type";

interface ArticleQueryResult  {
  id:string
  title:string,
  body:string,
  link :string,
  imageLink:string,
  intro: string,
  quote:string,
  category:string,
  tags:Tag[],
  slug:string
};

export interface Articles {
    getAllArticles: ArticleQueryResult[];
}

export type IntroArticle = Pick<ArticleQueryResult, "id" | "title" | "intro" | "imageLink" | "category" | "tags" | "slug">;
export interface IntroArticles {
    getAllArticles: IntroArticle[];
}

export interface ArticleDetails {
    getArticleBySlug: ArticleQueryResult;
}



