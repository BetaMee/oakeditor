import React, { Component } from 'react'  
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Editor from './pages/Editor'
import User from './pages/User'
import { context } from './core'
import './App.css'

const {
  GlobalProvider
} = context

class App extends Component {
  render() {
    return (
      <GlobalProvider>
        <Router>
          <User />
        </Router>
      </GlobalProvider>
    )
  }
}

export default App
