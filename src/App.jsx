import React, { Component } from 'react'; 

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css'

import User from './pages/User'
import Editor from './pages/Editor'

class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <div>
          <Editor />
        </div>
      </React.StrictMode>
    );
  }
}

export default App;
