
import React from 'react'
import Header from './Cynthia/Header'
import DropMenu from './Cynthia/DropMenu'
import { BrowserRouter, Route, Switch, } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route />
      </Switch>
    </BrowserRouter>
  )
}

export default App
