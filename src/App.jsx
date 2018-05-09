import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router} from 'react-router-dom'

// import User from './pages/User'
import Editor from './pages/Editor'
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
          <Editor />
        </Router>
      </GlobalProvider>
    )
  }
}

export default App
