import React, { Component } from 'react'

import Navbar from './components/Navbar'
import Home from './components/Home'
import PopularMovies from './components/PopularMovies'
import TopMovies from './components/TopMovies'
import UpcomingMovies from './components/UpcomingMovies'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css'
class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            {/* <Route path='/' component={Home} exact /> */}
            <Route
              exact
              path='/'
              component={TopMovies}
            />
            <Route
              path='/popular'
              component={PopularMovies}
            />
            <Route
              path='/upcoming'
              component={UpcomingMovies}
            />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
