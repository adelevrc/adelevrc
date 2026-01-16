"use client";

import { ApolloProvider } from "@apollo/client/react";
import type { ReactNode } from "react";
import createApolloClient from "@/lib/apolloClient";

const client = createApolloClient();

export default function Providers({ children }: { children: ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
