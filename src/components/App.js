import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import Header from "./Header";
import Aboutpage from "./About"
import Homepage from "./Home"
import SellersPage from "./SellersPage"
import SellerId from "./SellerId"

import ItemDetails from '../components/ItemDetails'


import { createGlobalStyle } from 'styled-components'



const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F6F6F6;
    margin: 0 70px; 
    font-family: "Montserrat";
  }
`



function App(props) {
  return (

    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/about">
          <Aboutpage />
        </Route>
        <Route path="/items/:itemId">
          <ItemDetails />
        </Route>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/sellers">
          <SellersPage />
        </Route>
        <Route path="/sellers/:sellerId">
          <SellerId />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;


