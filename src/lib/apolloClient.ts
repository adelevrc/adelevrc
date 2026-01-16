import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
  link: new HttpLink({
    uri: process.env.NODE_BACK_URL, 
  }),    cache: new InMemoryCache(),
  });
};

export default createApolloClient;