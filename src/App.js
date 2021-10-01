
import React from 'react'
import Header from './Cynthia/Header'
import DropMenu from './Cynthia/DropMenu'
import { BrowserRouter, Route, Switch, } from 'react-router-dom'
import Platform from './Cynthia/Platform'
import Homepage from './Stella/Homepage'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route exact path ="/drop" component={DropMenu}/>
        <Route exact path ="/plat" component={Platform}/>
        <Route exact path ="/" component={Homepage}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
