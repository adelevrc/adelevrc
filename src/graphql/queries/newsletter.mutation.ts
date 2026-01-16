import { gql } from "@apollo/client";

export const SUBSCRIBE_NEWSLETTER_MUTATION = gql`
  mutation SubscribeNewsletter($input: SubscribeNewsletterInput!) {
    subscribeNewsletter(input: $input) {
      email
    }
  }
`;
