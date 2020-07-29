import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Routes } from "./components/Routes";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes />
    </>
  );
};
