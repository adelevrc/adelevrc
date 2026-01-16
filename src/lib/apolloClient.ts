import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  console.log("process.env.local.NEXT_PUBLIC_BACK_URL", process.env.NEXT_PUBLIC_BACK_URL)
  return new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_BACK_URL+"/graphql", 
  }),    cache: new InMemoryCache(),
  });
};

export default createApolloClient;