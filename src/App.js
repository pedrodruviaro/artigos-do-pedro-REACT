import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Formulario from "./pages/Formulario";
import ListaDePosts from "./pages/ListaDePosts";
import { GlobalStyles } from "./components/UI/globalstyles.styles";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

const GridContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 12rem 1fr;
  grid-template-rows: 6vh 1fr 4vh;
  grid-template-areas:
    "header header"
    "aside principal"
    "footer footer";
`;

function App() {
  return (
    <GridContainer>
      <GlobalStyles />
      <Navbar />
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/">
            <ListaDePosts />
          </Route>
          <Route path="/novopost">
            <Formulario />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </GridContainer>
  );
}

export default App;
