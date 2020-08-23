import React from "react";
import "./App.css";
import Title from "./components/Atoms/Title";
import MainContainer from "./components/Organisms/MainContainer";

import { InMemoryCache, ApolloClient } from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";
const client = new ApolloClient({
  uri: "https://graphql-server-express1.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <Title />
        <MainContainer />
      </ApolloProvider>
    </div>
  );
}

export default App;
