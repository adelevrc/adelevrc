import { gql } from "@apollo/client";

export const INTRO_ARTICLE_QUERY = gql`
  query IntroArticles {
    getAllArticles {
      id,
      title,
      intro,
      imageLink, 
      category, 
      tags {
      name
    },
      slug
    }
  }
`;
    
export const GET_ARTICLE_BY_SLUG = gql`
  query GetArticleBySlug($slug: String!) {
    getArticleBySlug(slug: $slug) {
      id
      title
      body
      link
      imageLink
      intro
      quote
      category
       tags {
      name
    }
      slug
    }
  }
`;