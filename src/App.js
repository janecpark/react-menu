import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./Components/NavBar";
import { Route, Switch, Redirect } from "react-router-dom";
import Menu from "./Components/Menu";
import Snack from "./Components/MenuItem";
import Drink from "./Components/MenuItem";
import NotFound from './Components/NotFound'
import ItemContext from './ItemContext'
import Form from './Components/Form'


/** Initial set up for the app and handles routes */

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }
    getSnacks();
  }, []);

  useEffect(() => {
    async function getDrinks() {
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
      setIsLoading(false);
    }
    getDrinks();
  }, []);
  

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <ItemContext.Provider value={{snacks, drinks}}>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} />
            </Route>
            <Route exact path="/snacks">
              <Menu items={snacks} type='Snacks' title="Snacks" />
            </Route>
            <Route path="/snacks/:id">
              <Snack menuItems={snacks} cantFind="/snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu items={drinks} type='Drinks' title="Drinks" />
            </Route>
            <Route path="/drinks/:id">
              <Drink menuItems={drinks} cantFind="/drinks" />
            </Route>
            <Route path="/new">
              <Form menuItems={snacks, drinks}  />
            </Route>
            <Route ><NotFound /></Route>
            <Redirect to="/snacks" />
            <Redirect to="/drinks" />
          </Switch>
          </ItemContext.Provider>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
