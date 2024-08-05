import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import App from "./App.tsx";

const client = new ApolloClient({
  uri: "https://qgqghm5bkzbqxhyy3p47jz5o7u.appsync-api.us-east-1.amazonaws.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-api-key": "da2-6hojcmgmxjdhzeikrfx7dkxbl4",
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
