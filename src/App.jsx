import React from "react";
import { Route, Switch } from 'react-router-dom'
import HomePage from "./components/HomePage"
import FormPizza from "./components/FormPizza"
import Congr from "./components/Congr"


const App = () => {
  return (
    <Switch>
      <Route  exact path="/">
          <HomePage/>
      </Route>
      <Route path="/order-pizza">
          <FormPizza />
      </Route>
      <Route path="/congratulations">
          <Congr />
      </Route>
    </Switch>
  )
}

export default App
