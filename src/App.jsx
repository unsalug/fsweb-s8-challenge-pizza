import React from "react";
import { Route, Switch } from 'react-router-dom'
import HomePage from "./components/HomePage"
import FormPizza from "./components/FormPizza"


const App = () => {
  return (
    <Switch>
      <Route  exact path="/">
          <HomePage/>
      </Route>
      <Route path="/order-pizza">
        <FormPizza />
      </Route>
    </Switch>
  )
}

export default App
