import React, { Component } from 'react'

import { client } from './core'
import { ApolloProvider } from 'react-apollo'

// import User from './pages/User'
import Editor from './pages/Editor'

import './App.css'
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Editor />
      </ApolloProvider>
    )
  }
}

export default App
