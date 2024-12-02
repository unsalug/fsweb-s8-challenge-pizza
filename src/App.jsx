import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import OrderPizza from './pages/OrderPizza'
import Success from './pages/Success'

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/pizza" exact>
          <OrderPizza />
        </Route>
        <Route path="/success" exact>
          <Success />
        </Route>
        <Route path="*" exact>
          <HomePage />
        </Route>
      </Switch>
    </>
  )
}
export default App
