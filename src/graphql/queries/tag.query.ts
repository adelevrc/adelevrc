import { gql } from "@apollo/client";

export const TAGS_QUERY = gql`
query getAllTags {
  getAllTags {
    id, 
    name
  } 
}
`;

