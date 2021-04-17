import React from 'react'
import { Dashboard, Error } from './pages'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Dashboard></Dashboard>
        </Route>
        <Route>
          <Error path='*' />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
