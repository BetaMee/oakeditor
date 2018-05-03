import React, { Component } from 'react'

import { client } from './core'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router} from "react-router-dom";


// import User from './pages/User'
import Editor from './pages/Editor'

import './App.css'
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Editor />
        </Router>
      </ApolloProvider>
    )
  }
}

export default App
