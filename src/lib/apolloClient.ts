import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_BACK_URL+"/graphql", 
  }),    cache: new InMemoryCache(),
  });
};

export default createApolloClient;